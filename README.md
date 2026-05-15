# Starlight Mandarin · Landing Page

A high-converting, modern landing page for a Mandarin Learning Center and Private Tutoring service. Branding, palette, and copy were extracted from the official Starlight Mandarin brochure.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui (Button, Card, Accordion)
- **Icons:** lucide-react
- **Fonts:** Plus Jakarta Sans (body), Fraunces (display), Noto Serif SC (hanzi)
- **Deployment:** Optimized for Vercel — zero-config deploy

## Brand Palette (extracted from brochure)

| Token | Hex | Role |
|---|---|---|
| `brand-red` | `#B71C2A` | Primary CTA, logo badge |
| `brand-yellow` | `#FBC02D` | Hero background, accents |
| `brand-coral` | `#F8B5A8` | Splash decorations, soft sections |
| `brand-blue` | `#5B7DB1` | Secondary text, accents |
| `brand-gold` | `#E8A93C` | Logo star, ratings, highlights |
| `brand-cream` | `#FFF8EC` | Soft neutral background |

## Page Sections

1. **Navbar** — Sticky, mobile-responsive, transparent-to-solid on scroll
2. **Hero** — Headline, dual CTAs, floating hanzi, classroom card with stats
3. **Methodology** — 4-card grid: Native Tutors, Small Classes, HSK Prep, Cultural Immersion
4. **Programs** — 3 pricing tiers (Kids & Teens, Adult Conversational, Business & HSK Prep)
5. **Testimonials** — 3 quote cards on soft coral background with 5-star ratings
6. **FAQ** — Accordion with 6 common questions
7. **Final CTA** — Bold red section: "Ready to say Nǐ hǎo..."
8. **Footer** — Brand, programs, links, contact (with real brochure phone & address)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel: push to a Git repo and import in the Vercel dashboard — no environment variables required.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with font setup
│   ├── page.tsx           # Composes all sections
│   └── globals.css        # Tailwind + brand tokens + custom utilities
├── components/
│   ├── Logo.tsx           # Brand logo recreation
│   ├── sections/          # All page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Methodology.tsx
│   │   ├── Programs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── ui/                # shadcn primitives
│       ├── button.tsx
│       ├── card.tsx
│       └── accordion.tsx
└── lib/
    └── utils.ts           # cn() helper
```

## Design Notes

- **Mobile-first responsive** — every section reflows cleanly from 320px to 1440px+
- **Brochure-accurate** — splash shapes, color rhythm, and hanzi/English pairing pull directly from the printed piece
- **Accessibility** — semantic landmarks (`<header>`, `<main>`, `<footer>`, `<section>`), aria-labels on icon-only buttons, keyboard-navigable accordion
- **Performance** — Next.js font optimization, no runtime CSS-in-JS, minimal client components (only Navbar + Accordion)
