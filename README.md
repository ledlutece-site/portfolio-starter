# Portfolio Starter (Next.js + Tailwind + Framer Motion)

This is an original, clean-room template inspired by modern portfolio websites. Replace content in `src/content/site.ts` and images in `public/images/`.

## Quick start
```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev
# open http://localhost:3000
```

## Customize
- **Content**: `src/content/site.ts`
- **Branding**: colors/fonts in `tailwind.config.ts`, favicon in `public/favicon.svg`
- **Images**: drop WebP/AVIF into `public/images/` and update the paths
- **SEO**: `src/app/layout.tsx` metadata

## Notes
- Contact form uses Formspree by default. Replace `formEndpoint` in `src/content/site.ts`.
- Animations use Framer Motion; the hero shows a letter-reveal effect.

## License
You can use and modify this template for personal/commercial work. Please do not copy other sites' proprietary content or assets.
