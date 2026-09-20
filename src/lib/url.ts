// Every internal URL goes through here.
//
// The site is published to a GitHub Pages *project* page, so it lives under
// /orchestralhr/ rather than at the domain root. A bare "/assets/logo.png"
// would resolve to jkorchestral.github.io/assets/logo.png and 404.
//
// Keeping this in one place means moving to a custom domain later is a
// one-line change to `base` in astro.config.mjs, not another 29-path edit.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const url = (path: string): string =>
  BASE + (path.startsWith("/") ? path : `/${path}`);
