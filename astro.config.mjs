import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import config from './site.config.mjs';

const enabled = config.languages.filter((l) => l.enabled);

export default defineConfig({
  site: config.site,
  base: config.base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // La page racine (choix de langue) n'est pas une page de contenu : hors sitemap.
      filter: (page) => new URL(page).pathname !== `${config.base.replace(/\/$/, '')}/`,
      i18n: {
        defaultLocale: enabled[0].code,
        locales: Object.fromEntries(enabled.map((l) => [l.code, l.hreflang])),
      },
    }),
  ],
});
