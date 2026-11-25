// Fiches des réalisations Android : Acpc, ASokoban, 3D Snake, Velocity.
// Une page par fiche et par langue : /<langue>/<slug>/ (src/pages/[lang]/[app].astro).
//
// id      : clé des textes dans apps.<id> et meta.<id> de chaque fichier de langue.
// slug    : adresse de la page.
// screens : captures, la première en tête de galerie ; caption = clé dans apps.<id>.gallery.captions.
//           Les captures en hauteur (téléphone tenu droit) s'affichent quatre par ligne.
//
// Sources des captures (dépôts en lecture seule, copiées le 25 novembre 2026) :
//   Acpc      : dépôt Acpc, docs/manual/ (écrans sans jeu commercial à l'image)
//   ASokoban  : dépôt ASokoban, docs/screenshots/
//   3D Snake  : dépôt 3d-snake, docs/screenshots/v2.0, v1.5 et v1.2
//   Velocity  : dépôt velocity, docs/images/

import acpcBasic from '../assets/acpc/basic.png';
import acpcLibrary from '../assets/acpc/library_home.png';
import acpcRemote from '../assets/acpc/remote_browser.png';
import acpcSettings from '../assets/acpc/settings_machine.png';

import sokoHome from '../assets/asokoban/home.webp';
import sokoLevels from '../assets/asokoban/levels.webp';
import soko3dDark from '../assets/asokoban/board-3d-dark.webp';
import sokoComplete from '../assets/asokoban/level-complete.webp';
import soko2d from '../assets/asokoban/board-2d.webp';
import soko3d from '../assets/asokoban/board-3d.webp';
import sokoZoomed from '../assets/asokoban/big-room-zoomed.webp';
import sokoKhmer from '../assets/asokoban/khmer-levels.webp';

import snakeDawn from '../assets/snake3d/02-dawn-temple-mountain.jpg';
import snakeMist from '../assets/snake3d/06-mist-pagoda.jpg';
import snakeLagoon from '../assets/snake3d/14-lagoon-sea-temple.jpg';
import snakeAurora from '../assets/snake3d/18-aurora-observatory.jpg';
import snakeFrost from '../assets/snake3d/12-frost-henge.jpg';
import snakeMonsoon from '../assets/snake3d/20-monsoon-gameplay-rain.jpg';
import snakeSkins from '../assets/snake3d/13-skins-sanctuaries.jpg';
import snakeKhmer from '../assets/snake3d/24-khmer-main-menu.jpg';

import velHud from '../assets/velocity/race-hud.jpg';
import velLagrange from '../assets/velocity/lagrange_station-corkscrew.jpg';
import velSerra from '../assets/velocity/serra_verde-sky-bridge.jpg';
import velAtacama from '../assets/velocity/atacama_spaceport-launch-pad.jpg';
import velGlacier from '../assets/velocity/glacier_ring-aurora.jpg';
import velHelix from '../assets/velocity/helix_bay-aerial.jpg';
import velWeapons from '../assets/velocity/race-weapons.jpg';
import velNoctis from '../assets/velocity/noctis_rift-bridge-sunset.jpg';
import velThalassa from '../assets/velocity/thalassa_deep-blue-hole.jpg';

export default [
  {
    id: 'acpc',
    slug: 'acpc',
    screens: [
      { caption: 'basic', src: acpcBasic },
      { caption: 'library', src: acpcLibrary },
      { caption: 'remote', src: acpcRemote },
      { caption: 'settings', src: acpcSettings },
    ],
  },
  {
    id: 'asokoban',
    slug: 'asokoban',
    screens: [
      { caption: 'home', src: sokoHome },
      { caption: 'levels', src: sokoLevels },
      { caption: 'board3dDark', src: soko3dDark },
      { caption: 'complete', src: sokoComplete },
      { caption: 'board2d', src: soko2d },
      { caption: 'board3d', src: soko3d },
      { caption: 'zoomed', src: sokoZoomed },
      { caption: 'khmer', src: sokoKhmer },
    ],
  },
  {
    id: 'snake3d',
    slug: '3d-snake',
    screens: [
      { caption: 'dawn', src: snakeDawn },
      { caption: 'mist', src: snakeMist },
      { caption: 'lagoon', src: snakeLagoon },
      { caption: 'aurora', src: snakeAurora },
      { caption: 'frost', src: snakeFrost },
      { caption: 'monsoon', src: snakeMonsoon },
      { caption: 'skins', src: snakeSkins },
      { caption: 'khmer', src: snakeKhmer },
    ],
  },
  {
    id: 'velocity',
    slug: 'velocity',
    screens: [
      { caption: 'hud', src: velHud },
      { caption: 'lagrange', src: velLagrange },
      { caption: 'serra', src: velSerra },
      { caption: 'atacama', src: velAtacama },
      { caption: 'glacier', src: velGlacier },
      { caption: 'helix', src: velHelix },
      { caption: 'weapons', src: velWeapons },
      { caption: 'noctis', src: velNoctis },
      { caption: 'thalassa', src: velThalassa },
    ],
  },
];
