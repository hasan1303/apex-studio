# Apex Studio — Agency Landing Page

A premium, fully responsive agency landing page built with **Nuxt 3** and **Vue 3**.

## ✨ Features

- 🎨 **Dark / Light mode** (respects system preference)
- 📱 **Fully responsive** — mobile-first design
- ⚡ **Scroll reveal** animations with IntersectionObserver
- 🖱️ **Custom cursor** with magnetic effect (desktop)
- 📊 **Scroll progress bar**
- 🔽 **Project filter** by category
- 💰 **Pricing toggle** monthly/yearly
- ❓ **FAQ accordion**
- 🍪 **Cookie consent** banner (GDPR)
- ♿ **Accessible** — ARIA labels, keyboard navigation
- 🔍 **SEO ready** — meta tags, OG, Twitter cards

## 📁 Structure

```
apex-studio/
├── assets/css/
│   └── main.css          # Design tokens & global styles
├── composables/
│   ├── useData.ts         # All site content/data
│   ├── useTheme.ts        # Dark/light mode logic
│   └── useReveal.ts       # Scroll reveal observer
├── components/
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── MarqueeTicker.vue
│   ├── ServicesSection.vue
│   ├── ProcessSection.vue
│   ├── AboutSection.vue
│   ├── WorkSection.vue
│   ├── TeamSection.vue
│   ├── PricingSection.vue
│   ├── TestimonialsSection.vue
│   ├── FaqSection.vue
│   ├── ContactSection.vue
│   └── FooterSection.vue
├── pages/
│   └── index.vue          # Main page (assembles all sections)
├── app.vue
└── nuxt.config.ts
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate
```

## 🎨 Customization

### Change colors
Edit CSS variables in `assets/css/main.css`:
```css
:root {
  --accent: #e84c1e;    /* Primary color */
  --accent-2: #f7b731;  /* Secondary color */
  --ink: #0a0a0f;       /* Text color */
  --paper: #f5f3ee;     /* Background */
}
```

### Change content
Edit `composables/useData.ts` — all text, images, pricing, team etc. is there.

### Change fonts
Update `nuxt.config.ts` → `head.link` with new Google Fonts URL, then update `--font-display` and `--font-body` in `main.css`.

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📧 Connect Contact Form

Install [Resend](https://resend.com):
```bash
npm install resend
```
Then create `server/api/contact.post.ts` to handle form submissions.
