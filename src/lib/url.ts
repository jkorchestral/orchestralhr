// Every internal URL goes through here.
//
// Right now this is a passthrough: the site is served from orchestralhr.ca at
// the root, so `base` is unset in astro.config.mjs and BASE_URL is just "/".
// `url("/assets/logo.png")` returns "/assets/logo.png" unchanged.
//
// It stays in place because it is the seam that makes the root assumption
// reversible. Publishing to the jkorchestral.github.io project page for a
// preview, or moving the site under a path, means setting `base` and nothing
// else - without this, it would be another sweep across ~29 hard-coded paths.
//
// So: keep authoring internal paths as url("/..."), not as bare strings.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const url = (path: string): string =>
  BASE + (path.startsWith("/") ? path : `/${path}`);
