// Captures d'écran de HMS (hôtel de démonstration, données fictives).
// Source : dépôt hms, docs/images/ — captures du 13 novembre 2026.
// Pour les remplacer : copier les nouvelles images dans src/assets/hms/ sous le même nom.
//
// caption : clé du texte dans hms.gallery.captions de chaque fichier de langue.

import calendar from '../assets/hms/calendar.png';
import frontDesk from '../assets/hms/front-desk.png';
import reservation from '../assets/hms/reservation.png';
import housekeeping from '../assets/hms/housekeeping.png';
import kitchen from '../assets/hms/restaurant-kitchen.png';
import tablet from '../assets/hms/ipad-calendar.png';
import frCalendar from '../assets/hms/fr-calendar.png';
import kmDashboard from '../assets/hms/km-dashboard.png';
import zhFrontDesk from '../assets/hms/zh-front-desk.png';
import ruReports from '../assets/hms/ru-reports.png';

const base = [
  { caption: 'calendar', src: calendar },
  { caption: 'frontDesk', src: frontDesk },
  { caption: 'reservation', src: reservation },
  { caption: 'housekeeping', src: housekeeping },
  { caption: 'kitchen', src: kitchen },
  { caption: 'tablet', src: tablet },
];

// Capture dans la langue de la page, affichée en premier quand elle existe.
const localized = {
  fr: { caption: 'calendar', src: frCalendar },
  km: { caption: 'dashboard', src: kmDashboard },
  zh: { caption: 'frontDesk', src: zhFrontDesk },
  ru: { caption: 'reports', src: ruReports },
};

/** Liste des captures pour une langue : la capture localisée d'abord, sans doublon. */
export function screensFor(lang) {
  const first = localized[lang];
  if (!first) return base;
  return [first, ...base.filter((s) => s.caption !== first.caption)];
}
