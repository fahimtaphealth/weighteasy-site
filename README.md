# WeightEasy — Next.js marketing site

A richer, animated port of the v1 single-file marketing site for **WeightEasy**, the GLP-1 companion app. Built on Next.js 14 (app router), TypeScript, Tailwind CSS, and framer-motion.

## Stack

- Next.js 14 (app router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- framer-motion 11
- Plus Jakarta Sans + Inter via `next/font`

## Getting started

```bash
cd weighteasy-next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
npm start
```

## Project structure

```
weighteasy-next/
├─ app/
│  ├─ layout.tsx          # Root layout, fonts, metadata
│  ├─ globals.css         # Tailwind + CSS layer resets + shimmer util
│  └─ page.tsx            # Imports every section in order
├─ components/
│  ├─ Logo.tsx            # Inline-SVG wordmark (scale "i" — from Figma)
│  ├─ Nav.tsx             # Sticky nav, fade-down on mount
│  ├─ Hero.tsx            # Staggered copy + phone entrance
│  ├─ PhoneMockup.tsx     # Mirrors Figma Home screen; animated progress, chart draw, breathing orb
│  ├─ MedsStrip.tsx       # Dark med-name strip
│  ├─ SupportGap.tsx      # 3 research themes (Meagan, Brian, Genevieve, Tricia)
│  ├─ Zones.tsx           # 6 cycle zones with pop-in stagger
│  ├─ Features.tsx        # 5-card feature grid (1 dark, rest light)
│  ├─ CoachBand.tsx       # Dark band with breathing orb + orbital dots + stagger chat
│  ├─ Stats.tsx           # 3 cards with count-up numbers
│  ├─ WhoItsFor.tsx       # 4 user-archetype cards
│  ├─ Integrations.tsx    # Wearable / scale integrations
│  ├─ Testimonials.tsx    # 3 quotes
│  ├─ Pricing.tsx         # Monthly / Yearly with 59% OFF spring-in badge
│  ├─ FAQ.tsx             # Accordion with AnimatePresence
│  ├─ FinalCTA.tsx        # Dark final CTA with shimmering text
│  ├─ SectionHead.tsx     # Shared eyebrow + headline + body block
│  └─ Footer.tsx          # Dark navy footer with inverted logo
├─ lib/
│  ├─ cn.ts               # Tiny className joiner
│  └─ motion.ts           # Shared framer-motion variants
├─ tailwind.config.ts     # Design tokens + keyframes
├─ postcss.config.mjs
├─ next.config.mjs
├─ tsconfig.json
└─ package.json
```

## Design tokens

Matches the v1 HTML palette, pulled from the Figma:

| Token      | Value     | Usage                                  |
| ---------- | --------- | -------------------------------------- |
| `ink`      | `#172554` | Primary navy (headlines + buttons)     |
| `accent`   | `#2563EB` | Logo's blue needle, accent word        |
| `indigo`   | `#4F46E5` | Eyebrow text, link hover, plan badge   |
| `bg`       | `#F3F4F8` | Page background                        |
| `teal`     | `#22C1C3` | Coach gradient start                   |
| `purple`   | `#A855F7` | Coach gradient end                     |

Two gradients are defined as Tailwind background-images and are intentionally scoped:

- `bg-coach-grad` / `bg-coach-orb` — only for the AI Coach motif (pill border, orb, tab-bar icon, avatar)
- `bg-cycle-header` — only for the phone mockup's cycle header

Everything else is solid color.

## Animation inventory

Entrance reveals (via `whileInView`):

- Nav fade-down on mount
- Hero copy staggered fade-up
- Phone slides up + scales in; internal cards cascade
- Each section head (eyebrow / headline / body) staggers in on scroll
- Zone cards pop-in one by one
- Feature cards, stat cards, testimonial cards, plan cards all stagger fade-up
- FAQ items stagger in; each panel height-animates open via AnimatePresence

Continuous motion (signature, subtle):

- Coach orb breathes (`scale 1 → 1.08`, 3s loop) — in the phone Coach pill, tab-bar, and chat avatars
- Big Coach orb on the dark band breathes (6s) with a rotating inner highlight (22s linear)
- Orbital teal / purple dots circle the Coach orb (30s linear)
- Final CTA headline has a reserved-word shimmer (3s linear background shift)
- Dose-progress bar animates from 0 → 35% on first view
- Chart line draws (pathLength 0 → 1) then dashed projection + data point
- Pricing "59% off" badge springs in with rotation

Interactive:

- Cards lift on hover (`y: -4`)
- Buttons scale up on hover, down on tap
- FAQ `+` rotates 45° on open

A reduced-motion media query in `globals.css` disables every animation for users who prefer it.

## Deploy

Works out of the box on Vercel:

```bash
vercel
```

Or Netlify, Cloudflare Pages, or any Node host.

## Research attribution

The "From our user research" section is grounded in four real in-depth interviews (Meagan, Brian, Genevieve, Tricia). The three thematic labels — *prescriber hand-off*, *missing context*, *nutrition that ignores the cycle* — are synthesis, not verbatim research labels. Quotes are paraphrased syntheses.
# weighteasy-site
