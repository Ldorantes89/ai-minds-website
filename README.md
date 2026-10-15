# AI Minds — Marketing Website

The public marketing site for **AI Minds** (`ai-minds.ai`) — an **Agents as a
Service** company that lets small businesses **hire a team of AI employees**.

Built with Next.js 14 (App Router) + TypeScript, Tailwind CSS, framer-motion,
and lucide-react. The design is **vibrant, playful, and character-driven**
(Sintra-inspired): a deep indigo/navy canvas with soft violet→indigo→blue
gradient glows, glossy "character chip" avatars for each AI employee, rounded
friendly type (Plus Jakarta Sans display + Inter body), and lively-but-performant
motion. Fully responsive and accessible.

---

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

### Other scripts

```bash
npm run build   # production build (must pass before deploy)
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

---

## The AI team (the 8 agents)

Each agent is an "AI employee" with a name, a role, a signature color, and a
lucide icon. They appear as a floating cluster in the hero, as a grid of
colorful cards on the homepage ("Meet the team"), and in full detail on
`/agents`.

| Persona | Role                    | Color           |
| ------- | ----------------------- | --------------- |
| Ava     | Customer Support        | `#14b8a6` teal  |
| Leo     | Sales & Lead Follow-Up  | `#f97316` orange|
| Bella   | Front Desk & Scheduling | `#6366f1` indigo|
| Maya    | Marketing & Content     | `#ec4899` pink  |
| Penny   | Cash Flow & Finance     | `#22c55e` green |
| Vera    | Invoicing & Collections | `#f59e0b` amber |
| Ruby    | Reviews & Reputation    | `#e11d48` rose  |
| Max     | Paperwork & Documents   | `#3b82f6` blue  |

All copy lives in `src/lib/agents.ts`.

---

## Avatars

Avatars render via `<Avatar>` (`src/components/Avatar.tsx`):

- If an agent's `hasAvatar` flag is `true`, it shows `/avatars/{slug}.png` via
  `next/image`, framed in a colored glossy ring.
- Otherwise it shows a **polished fallback** — a glossy, 3D-looking circular
  "character chip" in the agent's signature color (highlight → color → dark
  edge), with an inner glow, a colored drop shadow, the agent's white lucide
  icon centered, and a small monogram badge.

All agents ship with `hasAvatar: false`, so the site looks complete and
intentional with **zero image assets**.

**To add a real portrait:** drop a square PNG at `public/avatars/{slug}.png` and
set that agent's `hasAvatar: true` in `src/lib/agents.ts`. Full instructions are
in [`public/avatars/README.md`](public/avatars/README.md).

---

## Deploy to Vercel

This is a standard Next.js app and deploys to Vercel with zero configuration.

**Option A — Vercel dashboard (recommended)**

1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to <https://vercel.com/new> and import the repo.
3. Vercel auto-detects Next.js. No build settings or environment variables are required.
4. Click **Deploy**.
5. After it's live, add your custom domain `ai-minds.ai` in **Project → Settings → Domains**.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

No environment variables, database, or paid services are required.

---

## Where to change copy & links

Almost everything is centralized so you can edit content without touching layout code.

| What you want to change | File |
| --- | --- |
| **Cal.com booking URL** (`https://cal.com/ai-minds`) | `src/lib/site.ts` → `calUrl` |
| **Contact email** (`hello@ai-minds.ai`) | `src/lib/site.ts` → `email` |
| Brand name, tagline, positioning, primary CTA label | `src/lib/site.ts` |
| Social links (LinkedIn, Instagram, TikTok, YouTube) | `src/lib/site.ts` → `social` |
| **The 8 AI employees** (names, roles, colors, icons, copy, outcomes) | `src/lib/agents.ts` |
| **Avatars** (drop in real PNGs / flip `hasAvatar`) | `public/avatars/` + `src/lib/agents.ts` |
| **Pricing tiers** (prices, headlines, features, "Most popular") | `src/lib/pricing.ts` |
| **How it works** steps | `src/lib/steps.ts` |
| Hero headline & subhead, avatar cluster | `src/components/sections/Hero.tsx` |
| Problem / Why AI Minds / Pricing teaser copy | `src/components/sections/*.tsx` |
| Case study (Casa Doper) | `src/components/sections/CaseStudy.tsx` |
| About page / founder bio | `src/app/about/page.tsx` |
| Pricing FAQ | `src/app/pricing/page.tsx` |
| Design tokens (colors, gradients, fonts, shadows, glows) | `tailwind.config.ts` and `src/app/globals.css` |
| Color helpers for agent-tinted gradients | `src/lib/color.ts` |

> The two values you'll most likely want to update first are **`calUrl`** and
> **`email`** in `src/lib/site.ts`.

---

## Contact form

The contact form (`/contact`) posts to a Next.js Route Handler at
`src/app/api/contact/route.ts`.

It currently **validates input, logs the submission server-side, and returns
success** — there is no database or email provider wired up (none is needed for
the site to work).

To make it deliver real messages, forward the validated `data` inside that route
to your provider of choice (e.g. [Resend](https://resend.com), a CRM webhook, or
Slack). The comment in the file marks the spot.

---

## Project structure

```
ai-minds-website/
├── public/
│   └── avatars/
│       └── README.md                # how to drop in real agent portraits
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts     # stubbed contact endpoint
│   │   ├── about/page.tsx
│   │   ├── agents/page.tsx          # full team detail (color-themed)
│   │   ├── contact/page.tsx
│   │   ├── how-it-works/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── globals.css              # design system: bg glows, type, glass
│   │   ├── layout.tsx               # root layout, fonts, nav + footer
│   │   ├── not-found.tsx            # custom 404
│   │   ├── page.tsx                 # homepage
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── sections/                # homepage + page sections
│   │   │   ├── Hero.tsx             # headline + floating avatar cluster
│   │   │   ├── Problem.tsx
│   │   │   ├── AgentsCatalog.tsx    # "Meet the team" grid
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── CaseStudy.tsx
│   │   │   ├── WhyAiMinds.tsx
│   │   │   ├── PricingTeaser.tsx
│   │   │   └── CtaBanner.tsx
│   │   ├── Avatar.tsx               # image OR glossy character-chip fallback
│   │   ├── AgentCard.tsx
│   │   ├── Button.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── PageHeader.tsx
│   │   ├── Reveal.tsx               # scroll-reveal animation helpers
│   │   └── primitives.tsx           # Container, Section, headings
│   └── lib/
│       ├── agents.ts                # the 8 AI employees
│       ├── color.ts                 # hex → lighten/darken/alpha helpers
│       ├── pricing.ts               # pricing tiers
│       ├── site.ts                  # links, email, brand config
│       └── steps.ts                 # how-it-works steps
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Notes

- **Accessibility**: semantic landmarks, skip-to-content link, keyboard-navigable
  nav and mobile menu, focus-visible rings, ARIA labels on avatars and agent
  links, decorative visuals marked `aria-hidden`, and full `prefers-reduced-motion`
  support (floating/looping animations stop, scroll reveals settle instantly).
- **Performance**: statically prerendered marketing pages, `next/font`
  (self-hosted Plus Jakarta Sans + Inter, no layout shift), CSS-driven background
  glows, ~130–142 kB First Load JS.
- **SEO**: per-page metadata, Open Graph + Twitter cards, `sitemap.xml`, and
  `robots.txt`.

© 2026 AI Minds. All rights reserved.
