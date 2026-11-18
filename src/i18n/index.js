import config from '../../site.config.mjs';
import fr from './fr.json';

// Ajouter ici chaque fichier de langue quand il existe (en.json, km.json).
const dictionaries = { fr };

export const languages = config.languages.filter((l) => l.enabled && dictionaries[l.code]);

export function t(lang) {
  return dictionaries[lang];
}

/** Chemin interne vers une page, en tenant compte de l'adresse de base du site. */
export function href(lang, page = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const slug = page ? `${page.replace(/^\/|\/$/g, '')}/` : '';
  return lang ? `${base}/${lang}/${slug}` : `${base}/`;
}
