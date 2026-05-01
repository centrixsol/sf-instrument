<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SF-Instrument

A modern storefront for **SF-Instrument** — a Sialkot-based surgical instruments manufacturer. Built with React 19, Vite, and Tailwind CSS. Features an animated product catalog, blog, quote request modal, and AI-powered assistance via the Gemini API.

**Live site:** https://centrixsol.github.io/sf-instrument/

---

## Application Structure

```
sf-instrument/
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Root component — scroll progress bar, page layout
│   ├── index.css             # Global styles and Tailwind base
│   ├── constants.ts          # Product catalog, blog posts, and contact data
│   └── components/
│       ├── Header.tsx        # Fixed nav with mobile menu and "Get Quotation" CTA
│       ├── Hero.tsx          # Landing section with brand headline and key stats
│       ├── About.tsx         # Company overview and certifications
│       ├── ProductCatalog.tsx # Filterable grid of surgical instrument cards
│       ├── Blog.tsx          # Blog posts with expandable full-text view
│       ├── QuoteModal.tsx    # Modal form for quote requests (EmailJS)
│       └── Footer.tsx        # Contact info and social links
├── index.html                # HTML shell
├── vite.config.ts            # Vite config with Tailwind, path aliases, env vars
├── tsconfig.json             # TypeScript config
└── package.json
```

### Key dependencies

| Package | Purpose |
|---|---|
| `react` 19 | UI framework |
| `vite` 6 | Build tool and dev server |
| `tailwindcss` 4 | Utility-first CSS |
| `motion` | Page and component animations |
| `@google/genai` | Gemini AI integration |
| `@emailjs/browser` | Client-side email for quote requests |
| `lucide-react` | Icon set |
| `react-hook-form` | Quote form state management |

---

## Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Set your Gemini API key
echo "GEMINI_API_KEY=your_key_here" > .env.local

# 3. Start the dev server
npm run dev
# → http://localhost:3000
```

---

## Deploy to GitHub Pages

The project deploys automatically via GitHub Actions on every push to `main`.

To trigger a manual deploy:

```bash
git push origin main
```

The workflow builds the app with `npm run build` and publishes the `dist/` folder to the `gh-pages` branch. The live site is available at:

**https://centrixsol.github.io/sf-instrument/**

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes | Google Gemini API key for AI features |
