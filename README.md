# Lefevralov Store — Single-Page Premium Landing

A single-page presentation website for **"Lefevralov Store"** clothing store, built with **Next.js 14 (App Router)** using **TypeScript**, **Tailwind CSS**, and **Framer Motion**.
The design is styled after luxury streetwear: a "dirty" background, soft typography, premium cards, and subtle animations.

## Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **next/font** for loading Rubik / Cormorant Garamond / Inter fonts

## Running the Project

```bash
git clone <repo-url>
cd levefralov
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Structure

- `app/layout.tsx` — base layout, SEO metadata (title, description, Open Graph, icons), font loading, and global noise background.
- `app/page.tsx` — home page that assembles all sections (Hero, catalog, reviews, contacts, footer).
- `components/Header.tsx` — fixed site header with navigation and underline effects.
- `components/Hero.tsx` — first screen with a large logo, "Premium luxury streetwear at the best prices" description, and a CTA button.
- `components/WorksSection.tsx` — catalog with 3×3 product cards, real photos from `public/products`, and "Lefevralov price" labels.
- `components/TestimonialsSection.tsx` — review slider with 5.0 / 5.0 rating and auto-scrolling.
- `components/ContactSection.tsx` — contacts, buttons to navigate to **Telegram** and **Avito** store, current email.
- `components/Footer.tsx` — footer with copyright, links to Telegram / Avito, and text about personalized service.
- `app/globals.css` — global styles, noise background, glass cards, animations, and custom utility classes.
- `tailwind.config.js` — brand colors, fonts, and card shadows.

## Customization

- **Contacts and Social Media**
  - Update Telegram and Avito links in:
    - `components/ContactSection.tsx`
    - `components/Footer.tsx`
  - Replace icons in `public/telegram.png` and `public/avito-logo.png` if needed.

- **Catalog and Products**
  - Card data is stored in the `works` array in `components/WorksSection.tsx`.
  - Photos are located at `public/products/1.jpg` … `9.jpg`. You can replace them with your own, keeping the file names, or adapt the paths.

- **SEO and Icons**
  - Title, description, and Open Graph metadata are configured in `app/layout.tsx`.
  - Favicons/icons:
    - `public/favicon.ico`
    - `public/icon.svg`
    - `public/ic.svg`
    - `public/apple-touch-icon.png`

- **Colors and Styles**
  - Main brand colors and shadows: `tailwind.config.js` (`theme.extend.colors.brand`, `boxShadow`).
  - Global background, noise, "dirty" gradient, and glass cards: `app/globals.css`.

## Project Features and Qualities

- Layout optimized for **mobile and desktop devices** (Tailwind + App Router).
- Subtle micro-animations with **Framer Motion** + CSS animations, respecting `prefers-reduced-motion`.
- Attention to **accessibility**: `aria-label`, `aria-hidden`, focus styles, sufficient clickable element sizes.
- Optimized image loading (`next/image`, `priority` for top cards, `loading="lazy"` for others).

The project is a fully ready and polished landing page that can be used as a foundation for a real store or showcase.
