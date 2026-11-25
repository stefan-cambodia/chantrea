// Vignettes des cartes de la page Réalisations (une image en tête de chaque carte).
// HMS : capture du tableau de bord dans la langue de la page (src/data/hms-screens.js).
// Les autres : captures déjà publiques, copiées le 25 novembre 2026 depuis le portfolio
// (stefan-cambodia.github.io, assets/screenshots/) ou depuis les dépôts (lecture seule).
// « games » : mosaïque de quatre vignettes.

import { homeScreen as rally } from './rally-screens.js';
import { homeScreen as angkor } from './angkor-screens.js';
import apps from './app-pages.js';
import learnkh from '../assets/work/learn-kh.jpg';
import asokoban from '../assets/work/asokoban-feature.png';
import synth from '../assets/work/js-synth.jpg';
import vsm from '../assets/work/vsm-studio.jpg';
import buggy from '../assets/work/3d-buggy.jpg';
import fluxline from '../assets/work/fluxline.jpg';
import frog from '../assets/work/3d-frog.jpg';
import aboulder from '../assets/work/aboulder.jpg';

const firstScreen = (id) => apps.find((a) => a.id === id).screens[0].src;

export default {
  learnkh: [learnkh],
  acpc: [firstScreen('acpc')],
  asokoban: [asokoban],
  snake3d: [firstScreen('snake3d')],
  velocity: [firstScreen('velocity')],
  rally: [rally.src],
  angkor: [angkor.src],
  synth: [synth],
  vsm: [vsm],
  games: [buggy, fluxline, frog, aboulder],
};
