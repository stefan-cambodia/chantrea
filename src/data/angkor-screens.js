// Captures d'écran d'Angkor World Engine.
// Source : dépôt angkor, docs/screenshots/ — captures au 21 novembre 2026.
// Recadrées pour enlever le texte technique du moteur : en haut (4 lignes, 5 en vue de conduite)
// et la ligne de crédits en bas, avec le format 16:9 conservé ; l'éditeur n'est coupé qu'en bas.
// Les crédits des données sont affichés sur la page (angkor.credits).
// Pour les remplacer : copier les nouvelles images dans src/assets/angkor/ sous le même nom, recadrées de même.
//
// caption : clé du texte dans angkor.gallery.captions de chaque fichier de langue.
// La première capture est affichée en grand.

import aerial from '../assets/angkor/angkor_wat_max_preset_aerial.jpg';
import forest from '../assets/angkor/angkor_wat_region_aerial.jpg';
import causeway from '../assets/angkor/angkor_wat_survey_from_the_causeway.jpg';
import preRup from '../assets/angkor/temple_pre_rup.jpg';
import baray from '../assets/angkor/far_terrain_west_baray.jpg';
import siemReap from '../assets/angkor/siem_reap_shophouses.jpg';
import motorcycle from '../assets/angkor/rider_view_motorcycle.jpg';
import rain from '../assets/angkor/rain_wet_road_headlights.jpg';
import editor from '../assets/angkor/editor_3d_view.jpg';

export const homeScreen = { caption: 'aerial', src: aerial };

export default [
  homeScreen,
  { caption: 'forest', src: forest },
  { caption: 'causeway', src: causeway },
  { caption: 'preRup', src: preRup },
  { caption: 'baray', src: baray },
  { caption: 'siemReap', src: siemReap },
  { caption: 'motorcycle', src: motorcycle },
  { caption: 'rain', src: rain },
  { caption: 'editor', src: editor },
];
