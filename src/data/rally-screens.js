// Captures d'écran de Cambodia Rally.
// Source : dépôt Cambo-Rally, docs/screenshots/ — captures du 16 novembre 2026.
// Pour les remplacer : copier les nouvelles images dans src/assets/rally/ sous le même nom.
//
// caption : clé du texte dans rally.gallery.captions de chaque fichier de langue.
// La première capture est affichée en grand.

import causeway from '../assets/rally/causeway.jpg';
import bayon from '../assets/rally/bayon.jpg';
import cockpit from '../assets/rally/cockpit.jpg';
import moat from '../assets/rally/moat.jpg';
import paddies from '../assets/rally/paddies.jpg';
import airBayon from '../assets/rally/air_bayon.jpg';
import elephant from '../assets/rally/air_elephant.jpg';
import garage from '../assets/rally/menu_garage.jpg';
import stages from '../assets/rally/menu_stages.jpg';

export const homeScreen = { caption: 'causeway', src: causeway };

export default [
  homeScreen,
  { caption: 'bayon', src: bayon },
  { caption: 'cockpit', src: cockpit },
  { caption: 'moat', src: moat },
  { caption: 'paddies', src: paddies },
  { caption: 'flyover', src: airBayon },
  { caption: 'elephant', src: elephant },
  { caption: 'garage', src: garage },
  { caption: 'stages', src: stages },
];
