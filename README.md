# Orchestral HR — site rebuild (Astro)

A rebuild of the Orchestral HR marketing site following
`HANDOFF-static-site-github-pages.md`. Same copy and photography as the live
site, rebuilt as an Astro static site with a dark editorial design.

**This is a local experiment. It is not connected to any GitHub repo and has not
been deployed.** The live site still runs from `~/code/orchestral-web`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

## What is here

```
src/
  layouts/BaseLayout.astro    <head>, meta/OG, nav, footer, scroll-reveal
  components/
    Nav.astro                 sticky nav, mobile drawer  (CTA link lives here)
    Footer.astro
    HeroCanvas.astro          WebGL animated hero background
    CtaBand.astro             closing CTA               (CTA link lives here)
  pages/                      index, about, services, pitch, contact, 404
  styles/global.css           design tokens + all component CSS
public/
  assets/                     photography + logo (copied from the live site)
  fonts/                      self-hosted Quicksand + Montserrat (woff2)
.github/workflows/deploy.yml  Pages deploy (inert until pushed)
```

## Notes against the handoff

- **Hero animation** uses a raw WebGL fragment shader instead of three.js +
  simplex-noise. A fullscreen quad needs no scene graph, so this is ~3KB rather
  than ~600KB of CDN JavaScript on the critical path. It pauses when scrolled
  offscreen or the tab is hidden, and is disabled entirely under
  `prefers-reduced-motion`, which falls back to a static gradient.
- **Fonts are self-hosted** (latin subset, variable, 85KB total). The live site
  requests these from Google Fonts with a malformed URL that returns HTTP 400,
  so it currently renders in fallback fonts.
- **No i18n.** The handoff scaffolds en/sv/fr/es; this site is English only.
- **No analytics or tracking pixels.** None were on the original.
- **Contact is still `mailto:`.** GitHub Pages cannot process a form POST. The
  Calendly swap is now 3 files (Nav, CtaBand, contact.astro) instead of 5 pages.

## Before deploying

1. Decide the URL. For the project page, set `base: "/orchestralhr"` in
   `astro.config.mjs`. For the custom domain, add `public/CNAME` instead.
2. `site:` in `astro.config.mjs` currently claims `https://orchestralhr.ca`,
   which drives the canonical and OG tags. It must match wherever this lands.
