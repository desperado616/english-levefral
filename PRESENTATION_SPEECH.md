# Project Presentation Speech
## Lefevralov Store — Premium Landing Page

**Duration: 5-7 minutes**

---

## Introduction

Good morning. My name is [Your Name], and today I will present my project — a single-page landing website for "Lefevralov Store," a premium clothing retailer specializing in authentic luxury streetwear.

This website serves as a digital storefront that showcases products, displays customer reviews, and connects buyers with the store through Telegram and Avito platforms.

---

## Technology Stack

The project is built using modern web technologies:

- **Next.js 14** with App Router for server-side rendering and optimal performance
- **TypeScript** for type safety and better code maintainability
- **Tailwind CSS** for responsive styling
- **Framer Motion** for smooth animations
- **next/font** for optimized font loading

---

## Project Structure

Let me walk you through the main sections of the website.

### Header

The fixed header provides navigation with smooth scrolling to different sections. The navigation links are styled with a modern aesthetic and include subtle hover effects. Notice the slight rotation on elements — this is intentional and adds visual dynamism.

### Hero Section

This is the first screen visitors see. It features the brand name in Bebas Neue font, a tagline "Premium luxury streetwear at the best prices," and a call-to-action button. The background uses layered gradients and noise textures to create a premium, atmospheric feel without heavy images.

### Product Catalog

The catalog displays nine products in a responsive 3x3 grid on desktop. Each card shows:
- Product image with lazy loading for performance
- Brand name and size information
- Price labeled as "Lefevralov price"

The cards use glass-morphism effect — semi-transparent backgrounds with blur. Each card has a slight rotation angle that alternates, creating visual interest.

### Customer Reviews

This section builds trust through social proof. Reviews auto-rotate every 8 seconds, showing customer feedback from Telegram and Avito with 5-star ratings. Users can manually navigate using arrows or dots.

### Contact Section

Here users find links to the Telegram store and Avito seller page. The buttons are styled distinctly to encourage clicks. An email address is also provided for formal inquiries.

### Footer

The footer includes copyright, brand description, and quick links to social platforms.

---

## Design Decisions

### Color Palette

The color scheme uses deep navy blue (#0b0b10) as the primary background with gold accents (#c2a15b) for highlights. This combination creates a luxurious, premium atmosphere appropriate for high-end fashion.

### Visual Effects

The "dirty" or grungy background aesthetic is achieved through CSS noise textures and gradients. This style appeals to streetwear culture and differentiates the site from typical clean e-commerce designs.

### Accessibility

The site includes:
- ARIA labels on all interactive elements
- Visible focus states for keyboard navigation
- "Skip to main content" link for screen readers
- Support for prefers-reduced-motion

---

## Performance Optimization

- Images use Next.js Image component with automatic WebP conversion and lazy loading
- Fonts are preloaded to prevent layout shift
- Animations are hardware-accelerated and respect user motion preferences
- Code splitting loads only necessary JavaScript

---

## Summary

This landing page effectively combines technical implementation with thoughtful design to create a functional and visually appealing storefront. The modular component architecture makes it easy to maintain and extend.

Thank you for your attention. I'm ready to answer your questions.

---

## Possible Questions and Answers

**Q: Why Next.js instead of plain React?**

A: Next.js provides server-side rendering for better SEO and initial load performance. It also includes built-in image and font optimization, which are essential for a visually rich site like this.

**Q: How is product data managed?**

A: Products are stored in a JavaScript array within the component. This works well for a landing page with a fixed catalog. For a larger store, this could easily be connected to a backend API or CMS.

**Q: What accessibility features are included?**

A: ARIA labels, keyboard navigation support, screen reader compatibility with skip links, and respect for reduced motion preferences.

**Q: How did you handle mobile responsiveness?**

A: I used a mobile-first approach with Tailwind's responsive utilities. The grid adapts from 1 column on mobile to 2 on tablet to 3 on desktop.

**Q: What was the main challenge?**

A: Balancing visual effects with performance. The glass-morphism and noise textures could impact performance, so I used CSS-based solutions and hardware-accelerated transforms to keep animations smooth.
