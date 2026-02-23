# Shibhya Kaimal — Portfolio

A personal portfolio built with **Next.js 14** (App Router) and **Tailwind CSS**.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.js        # Root layout, fonts, metadata
│   ├── page.js          # Main page — assembles all sections
│   └── globals.css      # Tailwind base + custom utilities
├── components/
│   ├── Navbar.js        # Sticky nav with scroll detection
│   ├── Hero.js          # Hero section with stats panel
│   ├── Skills.js        # Skills grid
│   ├── Experience.js    # Work experience
│   ├── Projects.js      # Project cards
│   ├── Education.js     # Education cards
│   ├── Extras.js        # Publication + Leadership
│   ├── Footer.js        # Footer
│   ├── SectionHeader.js # Reusable section header
│   └── ScrollReveal.js  # Intersection Observer for animations
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Customization

- **Links**: Update LinkedIn/GitHub URLs in `Hero.js` and `Footer.js`
- **Colors**: Edit `tailwind.config.js` under `theme.extend.colors`
- **Content**: Each section is its own component — just edit the data arrays at the top of each file
- **Add projects**: Push to the `projects` array in `Projects.js`

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com](https://vercel.com) — it auto-detects Next.js.
