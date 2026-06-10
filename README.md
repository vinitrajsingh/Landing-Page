# Creme — AI Product Studio Landing Page

A premium, Awwwards-grade single-page landing site inspired by [creme.digital](https://www.creme.digital/). Built as an elite-agency style marketing page with heavy motion design, smooth scrolling and a dark-luxury aesthetic.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS** — custom dark/cream/gold theme, noise & glow utilities
- **Framer Motion** — reveals, sliders, magnetic & tilt interactions
- **GSAP + ScrollTrigger** — section pinning & scroll-driven process timeline
- **Lenis** — smooth scroll (synced to the GSAP ticker)
- **Lucide Icons**, **CVA**, **tailwind-merge**

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Animation Features

Smooth scrolling (Lenis), scroll-triggered reveals, word-by-word & character-by-character text reveals, parallax (scroll + mouse), floating hero screenshots, mouse-follow custom cursor, magnetic buttons, advanced hover states, image zoom, 3D card tilt with glare, perspective transforms, top scroll-progress bar, animated gradient/glow backgrounds, infinite marquees (logos + testimonials), animated counters, GSAP-pinned process timeline, dynamic case-study expansion, premium preloader, and high-FPS spring-based motion.

## Structure

```
src/
├── app/                  # layout (fonts, SEO, providers), page, globals.css
├── components/
│   ├── layout/           # navbar
│   ├── providers/        # Lenis smooth scroll, GSAP, preloader
│   └── ui/               # button, magnetic, tilt-card, marquee, counter,
│                         #   parallax-image, text-reveal, cursor, scroll-progress…
├── sections/             # hero, trust, services, process, showcase,
│                         #   case-studies, pricing, testimonials, faq, cta, footer
├── lib/                  # data, utils (cn), useGSAP hook
└── types/                # global declarations
```

## Performance

Below-the-fold sections are code-split via `next/dynamic`. Images are served through `next/image` (AVIF/WebP, lazy by default). Animations use transform/opacity and springs for GPU-friendly, high-FPS motion, and the whole experience respects `prefers-reduced-motion`.

> Note: remote demo imagery is loaded from Unsplash and `pravatar.cc` (whitelisted in `next.config.mjs`). Swap these for your own assets in `src/lib/data.ts` and the hero before going live.
