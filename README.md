# TAKALAM - English Tutoring Landing Page

A modern, conversion-focused landing page for TAKALAM, a personal English tutoring brand.

## Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety

## Features

- Single-page, conversion-focused design
- Mobile-first responsive layout
- Smooth scroll animations
- WhatsApp integration for direct contact
- Clean, professional UI with green brand accents
- No backend, fully static

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/takalam-landing)

Or deploy manually:

```bash
npm install -g vercel
vercel
```

## Page Sections

1. **Hero** - Main headline with CTAs
2. **About** - Brand introduction
3. **Who It's For** - Target audience cards
4. **What You Get** - Service features
5. **How It Works** - 3-step process
6. **Why Takalam** - Value propositions
7. **Testimonials** - Student reviews
8. **Pricing** - Soft pricing information
9. **Final CTA** - WhatsApp conversion
10. **Contact** - Form and contact details
11. **Footer** - Links and copyright

## Customization

### Update Contact Info

Edit the WhatsApp number and email in these files:
- `app/components/Hero.tsx`
- `app/components/FinalCTA.tsx`
- `app/components/Contact.tsx`
- `app/components/Footer.tsx`

Replace `212600000000` with your actual WhatsApp number (including country code, no + or spaces).

### Update Colors

The primary green color can be adjusted in `app/globals.css`:

```css
:root {
  --primary: #16a34a;
  --primary-dark: #15803d;
  --primary-light: #22c55e;
}
```

## License

Private - TAKALAM
