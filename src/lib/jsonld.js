import config from '../../site.config.mjs';
import { href } from '../i18n/index.js';

/** Données structurées schema.org « Service » pour une offre. */
export function serviceJsonLd(site, lang, item) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.title,
    description: item.summary,
    url: new URL(href(lang, `services/${item.id}`), site).href,
    inLanguage: lang,
    provider: {
      '@type': 'Organization',
      name: config.name,
      url: new URL(href(''), site).href,
    },
    areaServed: { '@type': 'Country', name: 'Cambodia' },
  };
}
