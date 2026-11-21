// ─────────────────────────────────────────────────────────────
// Configuration du site Chantrea Systems : LE fichier à modifier
// pour l'adresse du site, les coordonnées et les mentions légales.
// ─────────────────────────────────────────────────────────────

export default {
  name: 'Chantrea Systems',

  // Adresse publique du site.
  // Aujourd'hui : GitHub Pages (https://stefan-cambodia.github.io/chantrea/).
  // Quand chantreasystems.com sera actif, remplacer par :
  //   site: 'https://chantreasystems.com',
  //   base: '/',
  // (voir docs/DOMAINE.md)
  site: 'https://stefan-cambodia.github.io',
  base: '/chantrea',

  // Coordonnées. L'adresse e-mail n'apparaît QUE ici.
  contact: {
    email: 'stefanasia8@gmail.com',
    // Nom d'utilisateur Telegram, sans le @ (ex. 'chantrea').
    telegram: '[À COMPLÉTER]',
    // Numéro WhatsApp au format international, chiffres seuls (ex. '855XXXXXXXX').
    whatsapp: '[À COMPLÉTER]',
  },

  // Adresse de l'espace client Odoo, par exemple 'https://espace.chantreasystems.com/my'.
  // null = lien masqué.
  portalUrl: null,

  location: {
    city: 'Kampot',
    countryCode: 'KH',
  },

  // Mentions légales du pied de page.
  // La société est EN COURS D'IMMATRICULATION : laisser vide (null)
  // tant que l'immatriculation n'est pas faite. Ensuite, par exemple :
  //   legalName: '<raison sociale exacte>',
  //   registration: '<numéro d'enregistrement>',
  legal: {
    legalName: null,
    registration: null,
  },

  // Langues, dans l'ordre du sélecteur.
  // « enabled: false » = pages pas encore générées.
  // Chaque langue a son fichier de textes : src/i18n/<code>.json
  languages: [
    { code: 'fr', hreflang: 'fr', label: 'Français', short: 'FR', enabled: true },
    { code: 'en', hreflang: 'en', label: 'English', short: 'EN', enabled: true },
    { code: 'km', hreflang: 'km', label: 'ខ្មែរ', short: 'KM', enabled: true },
    { code: 'ru', hreflang: 'ru', label: 'Русский', short: 'RU', enabled: true },
    { code: 'zh', hreflang: 'zh-Hans', label: '中文', short: '中文', enabled: true },
  ],
};
