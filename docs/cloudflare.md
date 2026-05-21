# Cloudflare Pages Deployment

This Astro site is configured for Cloudflare Pages direct uploads with Wrangler.

## Cloudflare Pages Settings

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22.16.0`
- Project name in Wrangler config/scripts: `wpindy`

Cloudflare Pages supports setting Node with `.node-version` or `.nvmrc`; both are included.

## Local Commands

```sh
npm run build
npm run cf:preview
```

`cf:preview` builds the site and serves `dist` through `wrangler pages dev`.

## Deploy Commands

```sh
npm run cf:deploy
```

Preview/direct-upload deployment:

```sh
npm run cf:deploy:preview
```

These commands assume the Cloudflare Pages project is named `wpindy`. If the project name in Cloudflare is different, update `wrangler.jsonc` and the `cf:*` scripts in `package.json`.

## Authentication

For local deploys, run:

```sh
npx wrangler login
```

For CI deploys, use Cloudflare environment variables/secrets instead of committing credentials:

```txt
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```

Do not commit API tokens or account secrets.
