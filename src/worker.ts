interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed.' }, 405, {
      Allow: 'POST',
    });
  }

  try {
    const formData = await request.formData();

    const name = clean(formData.get('name'));
    const email = clean(formData.get('email'));
    const company = clean(formData.get('company'));
    const projectType = clean(formData.get('projectType'));
    const message = clean(formData.get('message'));
    const honeypot = clean(formData.get('website'));
    const turnstileToken = clean(formData.get('cf-turnstile-response'));

    if (honeypot) {
      return json({ ok: true });
    }

    if (!name || !email || !message) {
      return json({ ok: false, error: 'Missing required fields.' }, 400);
    }

    if (!isValidEmail(email)) {
      return json({ ok: false, error: 'Invalid email address.' }, 400);
    }

    if (!turnstileToken) {
      return json({ ok: false, error: 'Missing verification token.' }, 400);
    }

    if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
      return json({ ok: false, error: 'Contact form is not configured.' }, 500);
    }

    const turnstileResult = await verifyTurnstile({
      token: turnstileToken,
      secret: env.TURNSTILE_SECRET_KEY,
      ip: request.headers.get('CF-Connecting-IP') || '',
    });

    if (!turnstileResult.success) {
      return json({ ok: false, error: 'Verification failed.' }, 400);
    }

    const subject = `New WP Indy inquiry from ${name}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company / Website: ${company}` : null,
      projectType ? `Project Type: ${projectType}` : null,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resendResponse.ok) {
      return json({ ok: false, error: 'Email failed to send.' }, 500);
    }

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'Unexpected server error.' }, 500);
  }
}

function clean(value: FormDataEntryValue | null): string {
  return String(value || '').trim();
}

function json(data: unknown, status = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyTurnstile({
  token,
  secret,
  ip,
}: {
  token: string;
  secret: string;
  ip?: string;
}): Promise<{ success: boolean; 'error-codes'?: string[] }> {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);

  if (ip) {
    body.append('remoteip', ip);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });

  return response.json();
}
