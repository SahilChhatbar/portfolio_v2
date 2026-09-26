# Sahil K. Chhatbar — Developer Portfolio

A personal developer portfolio website designed with a classic newspaper broadsheet editorial aesthetic. Built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom newspaper theme tokens
- **Icons**: [@iconify/react](https://iconify.design/) with fully offline bundled SVG icon datasets
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Code Quality**: ESLint, TypeScript (`tsc --noEmit`), Husky, lint-staged

---

## 🏛️ Project Architecture

The project follows a modular, collocated page-centric architecture. Each page owns its dedicated structured data, layout, and localized metadata.

```text
portfolio/
├── app/
│   ├── (pages)/                  # Route groups for multi-page broadsheet edition
│   │   ├── experience/           # Page 2: Commercial roles & Company dossiers
│   │   │   ├── data/experience.ts
│   │   │   └── page.tsx
│   │   ├── projects/             # Page 3: Case studies & live platforms
│   │   │   ├── data/projects.ts
│   │   │   └── page.tsx
│   │   ├── skills/               # Page 4: Technical categories & proficiencies
│   │   │   ├── data/skills.ts
│   │   │   └── page.tsx
│   │   ├── career/               # Page 5: Chronological timeline & education
│   │   │   ├── data/career.ts
│   │   │   └── page.tsx
│   │   └── contact/              # Page 6: Contact channels & direct outreach
│   │       ├── data/contact.ts
│   │       └── page.tsx
│   ├── data/
│   │   └── about.ts              # Page 1: Biography & Editorial dataset
│   ├── favicon.ico
│   ├── globals.css               # Editorial CSS utilities & Tailwind v4 theme tokens
│   ├── layout.tsx                # Root layout with fonts, header, nav, analytics
│   ├── page.tsx                  # Root entry point & Page 1: Biography & About
│   ├── robots.ts                 # SEO robots configuration
│   ├── sitemap.ts                # Dynamic sitemap generator
│   └── template.tsx              # Page transition wrapper
├── components/
│   ├── content/                  # Editorial content blocks (Article, Card, ImageFrame)
│   ├── icons/                    # Offline bundled icon renderer (Icon, icon-data)
│   ├── layout/                   # Structural layout (Header, Navigation, PageContainer, Pagination)
│   └── ui/                       # Reusable UI primitives (Divider, DropCap)
├── constants/
│   ├── icons.ts                  # Centralized icon token definitions
│   └── site.ts                   # Site-wide identity constants
├── public/                       # Static media, project images, and profile assets
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and build scripts
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🎨 Design & Typography System

The interface is inspired by classic print journalism, broadsheets, and editorial type design:

- **Typography**:
  - `Playfair Display`: High-contrast display headlines and editorial headers
  - `Newsreader`: Editorial journalism serif for long-form narrative body text
  - `Cinzel`: Classical serif title headers and roman numeral volume indicators
  - `Geist Mono`: Monospace datelines, timestamps, and technical chips
- **Color Palette**:
  - `paper-bg`: `#f9f7f1` (Newsprint parchment background)
  - `paper-card`: `#f4f0e6` (Boxed column and dossier paper tone)
  - `paper-white`: `#fcfbf8` (Contrasting card background)
  - `ink-primary`: `#111111` (Deep print ink)
  - `ink-dark`: `#222222` (Body journalism ink)
  - `ink-subtle`: `#444444` (Secondary text and captions)
  - `ink-muted`: `#666666` (Sub-metadata and footer notes)
  - `ink-rule`: `#111111` (Solid newspaper dividers and borders)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `18.18.0` or higher (Node 20+ recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/SahilChhatbar/portfolio_v2.git
cd portfolio
npm install
```

### Running Locally

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 🛠️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server on port 3000 |
| `npm run build` | Builds the optimized production application with static pre-rendering |
| `npm run start` | Runs the built production server locally |
| `npm run type-check` | Runs the TypeScript compiler (`tsc --noEmit`) to validate all types |
| `npm run lint` | Runs ESLint to verify code quality and style standards |

---

## 📄 License

This project is private and maintained by [Sahil K. Chhatbar](https://github.com/SahilChhatbar).
