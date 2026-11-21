// Captures d'écran de HMS, dans la langue de chaque page du site.
// Hôtel de démonstration « The Moon Kampot Boutique » (base de démo du dépôt hms,
// `tools/screenshots/reset-db.sh` + `seed_activity.py`) : clients et montants fictifs.
// Captures du 22 novembre 2026, bureau 1440×900 et iPad Pro 11" à l'horizontale.
//
// Rangement : src/assets/hms/<langue>/<écran>.png, une série complète par langue
// (en, fr, km, ru, zh). Pour les remplacer : copier les nouvelles images sous le même nom.
//
// caption : clé du texte dans hms.gallery.captions de chaque fichier de langue.
// La première capture est affichée en grand.

const images = import.meta.glob('../assets/hms/*/*.png', { eager: true, import: 'default' });

const screens = [
  { caption: 'calendar', file: 'calendar' },
  { caption: 'dashboard', file: 'dashboard' },
  { caption: 'frontDesk', file: 'front-desk' },
  { caption: 'reservation', file: 'reservation' },
  { caption: 'housekeeping', file: 'housekeeping' },
  { caption: 'kitchen', file: 'restaurant-kitchen' },
  { caption: 'reports', file: 'reports' },
  { caption: 'tablet', file: 'ipad-calendar' },
];

/** Liste des captures pour une langue du site, toutes dans cette langue. */
export function screensFor(lang) {
  return screens.map(({ caption, file }) => {
    const src = images[`../assets/hms/${lang}/${file}.png`];
    if (!src) throw new Error(`Capture HMS manquante : src/assets/hms/${lang}/${file}.png`);
    return { caption, src };
  });
}
