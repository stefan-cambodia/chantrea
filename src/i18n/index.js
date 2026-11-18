import config from '../../site.config.mjs';

// Chaque fichier src/i18n/<code>.json est chargé automatiquement.
const files = import.meta.glob('./*.json', { eager: true });
const dictionaries = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.replace(/^\.\/|\.json$/g, ''), mod.default]),
);

/** Langues publiées : activées dans site.config.mjs ET dotées d'un fichier de textes. */
export const languages = config.languages.filter((l) => l.enabled && dictionaries[l.code]);

export function t(lang) {
  return dictionaries[lang];
}

export function language(lang) {
  return config.languages.find((l) => l.code === lang);
}

/** Chemin interne vers une page, en tenant compte de l'adresse de base du site. */
export function href(lang, page = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const slug = page ? `${page.replace(/^\/|\/$/g, '')}/` : '';
  return lang ? `${base}/${lang}/${slug}` : `${base}/`;
}

/** Chemins statiques « une page par langue ». */
export function langPaths() {
  return languages.map((l) => ({ params: { lang: l.code } }));
}
