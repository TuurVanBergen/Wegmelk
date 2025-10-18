# Wegmelk — frontend (React + Vite)

Overview

This repository contains the frontend of the Wegmelk website. It's a React application built with Vite.

Important directories:

- `src/` – source code (React components, pages, styles, assets)
- `public/` – static files served as-is (favicon, og-image.png, robots.txt, sitemap.xml, manifest.json)

Quick start (development)

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open in the browser: http://localhost:5173 (or the port printed by Vite)

Build and preview

```bash
npm run build
npm run preview
```

SEO & deployment notes

- Per-page meta titles and descriptions are set using `react-helmet` inside page components. Because this is a client-side SPA, crawlers and social preview services may not always pick up those tags unless the site is prerendered or server-side rendered.

Recommended approaches:

- `vite-plugin-prerender`: generate static HTML snapshots for the main routes. Fast and easy for mostly-static pages.
- `vite-plugin-ssr` or migrating to Next.js: full SSR support for dynamic content and best SEO results.

Quick improvements to apply (low-risk):

- Add an optimized `public/og-image.png` (recommended 1200×630) for social shares.
- Ensure `public/robots.txt` and `public/sitemap.xml` are correct and submit the sitemap to Google Search Console.
- Add JSON-LD structured data (Organization, WebSite, BreadcrumbList) on relevant pages.

Deployment recommendations

Recommended hosts:

- Vercel — simple Git-based deploys and easy SSR support later.
- Netlify
- Cloudflare Pages

Deployment checklist:

- Add CI (GitHub Actions) that runs `npm ci && npm run build` and optionally a Lighthouse audit.
- Configure caching headers and enable gzip/Brotli compression.
- Ensure HTTPS is enabled and add security headers (HSTS, basic CSP).

Additional tasks and ideas

- Provide an optimized `og-image.png` in `public/` for better social previews.
- Prerender main routes (`/`, `/Radio`, `/Contact`, `/Privacy`) to improve crawlability.
- Add richer JSON-LD for music releases, events or other content types when applicable.

If you want, I can implement the quick wins (meta tags, robots/sitemap, manifest) and add a simple prerender step to the build.

Contact

If you have questions about building, prerendering, or deployment, open an issue in the repo or ask in this chat.
