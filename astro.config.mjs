// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Served from the custom domain, so the site sits at the root and needs no
  // `base`. public/CNAME is what tells GitHub Pages this domain belongs here.
  //
  // Internal links all go through src/lib/url.ts, which collapses to a plain
  // "/..." once `base` is absent - so moving between the project-page URL and
  // this domain is a change to this file alone.
  site: "https://orchestralhr.ca",

  build: { format: "directory" },

  // Emits sitemap-index.xml + sitemap-0.xml at build. `site` above is what
  // makes the URLs absolute, so the two settings are linked: changing the
  // domain changes the sitemap with it. public/robots.txt points search
  // engines here.
  integrations: [sitemap()],
});
