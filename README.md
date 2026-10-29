# Pepper Green — Wedding Company

A cinematic wedding website built with **Next.js 15** and **React 19**.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
```

## What's included

- Full-screen hero with a **5-second** crossfade slideshow (Ken Burns zoom)
- Transparent header that turns solid on scroll, with scroll-spy nav
- Mobile slide-in menu
- About, Stories, Films, Journal (Blog) and Contact sections
- Scroll-reveal animations and reduced-motion support
- Responsive layouts for desktop, tablet and phone

## Where to edit things

| What | File |
| --- | --- |
| Hero slides & slide speed | `components/HeroSlider.jsx` (`SLIDES`, `INTERVAL`) |
| Logo, nav links, mobile menu | `components/SiteHeader.jsx` |
| Section copy & journal entries | `app/page.js` |
| Colours, type, spacing | `app/globals.css` |
| Fonts | `app/layout.js` |
| Photos | `public/images/` |

## Notes

- The slide interval is `INTERVAL = 5000` in `components/HeroSlider.jsx`.
- The wordmark uses **Poppins** (700), the display type **Cormorant Garamond**, and body text **Jost**.
- To swap photos, replace the files in `public/images/` (keep the same names) or update the paths in `components/HeroSlider.jsx` and `app/page.js`.
