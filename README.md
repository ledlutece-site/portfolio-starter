# Portfolio Starter (Next.js + Tailwind + Framer Motion) — Favad Rahman

Original, clean-room template aligned to your sections and projects.

## Quick start (local)
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploying to Vercel
1. Push this folder to a GitHub repo.
2. On Vercel → **Add New Project** → Import your repo.
3. Framework preset: **Next.js**. Build command: `next build`. Output: `.next` (default).
4. If the build fails, open the deployment → **View Build Logs** and check the *first* error line (often a missing dependency).

## Customize
- Content: `src/content/site.ts`
- Branding: colors/fonts in `tailwind.config.ts`, favicon in `public/favicon.svg`
- SEO: `src/app/layout.tsx`
- Contact form: set `formEndpoint` in `src/content/site.ts` to your Formspree/Resend endpoint.
