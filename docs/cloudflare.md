# Cloudflare Deployment

This Astro site is configured for the Cloudflare Git-connected Workers build flow shown in the dashboard.

The Cloudflare project is a Worker named `wpindy` that serves static assets from Astro's `dist` output.

## Cloudflare Build Settings

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Version command: `npx wrangler versions upload`
- Root directory: `/`
- Node version: `22.16.0`

Cloudflare detects Node from `.node-version` / `.nvmrc`.

## Wrangler Config

`wrangler.jsonc` points Cloudflare Workers static assets at the Astro build output:

```jsonc
{
  "name": "wpindy",
  "compatibility_date": "2026-05-21",
  "assets": {
    "directory": "./dist"
  }
}
```

## Local Commands

```sh
npm run build
npm run cf:preview
```

`cf:preview` builds the site and serves it through `wrangler dev`.

## Deploy Commands

```sh
npm run cf:deploy
```

For Cloudflare's version workflow:

```sh
npm run cf:versions:upload
```

## Authentication

For local deploys, run:

```sh
npx wrangler login
```

For Cloudflare-hosted builds, use the API token configured in the project settings.

Do not commit API tokens or account secrets.
