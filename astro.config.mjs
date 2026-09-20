// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Published to the GitHub Pages project page for jkorchestral/orchestralhr.
  // `site` + `base` together drive canonical URLs, social-share URLs and the
  // prefix on every bundled asset.
  //
  // To move to the custom domain later: set site to "https://orchestralhr.ca",
  // delete `base`, add a CNAME file to public/, and point DNS at the GitHub
  // Pages IPs. Everything else follows, because internal links go through
  // src/lib/url.ts.
  site: "https://jkorchestral.github.io",
  base: "/orchestralhr",

  build: { format: "directory" },
});
