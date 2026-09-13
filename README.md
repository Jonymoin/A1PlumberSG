# A1PlumberSG

A modern plumbing service website for Singapore, built with React 19, TanStack Start, Vite, and Tailwind CSS v4.

## Requirements

- Node.js 20 or newer (recommended: install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

## Getting started

```sh
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Production build

```sh
npm run build
npm run preview
```

## Project structure

- `src/routes/` — all pages (home, services, about, reviews, tips, blog, contact, legal)
- `src/components/` — shared UI (header, footer, cards, CTAs)
- `src/lib/site.ts` — business contact details (phone, WhatsApp, email)
- `src/lib/services.ts` — the 18 plumbing services content
- `src/lib/reviews.ts` — customer reviews (sample data — replace with real ones)
- `src/lib/blog.ts`, `src/lib/tips.ts` — articles and tips
- `public/images/` — site imagery (swap in your own photos using the same file names)
