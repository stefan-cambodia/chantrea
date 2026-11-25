// Captures de Vigie, le portail de veille de Chantrea Systems.
// Source : artefact « Vigie » (claude.ai), captures du 25 novembre 2026 sur une base de démonstration
// (client fictif « Cabinet Delorme », adresses en .example, webhook masqué).
// caption : clé dans services.items[id=vigie].gallery.captions. La première capture est affichée en grand.
import expositions from '../assets/vigie/expositions.jpg';
import alertes from '../assets/vigie/alertes.jpg';
import exposition from '../assets/vigie/exposition.jpg';
import synthese from '../assets/vigie/synthese.jpg';
import logiciels from '../assets/vigie/logiciels.jpg';
import actualites from '../assets/vigie/actualites.jpg';
import notifications from '../assets/vigie/notifications.jpg';
import mobile from '../assets/vigie/mobile-expositions.jpg';

export default [
  { caption: 'expositions', src: expositions },
  { caption: 'alertes', src: alertes },
  { caption: 'exposition', src: exposition },
  { caption: 'synthese', src: synthese },
  { caption: 'logiciels', src: logiciels },
  { caption: 'actualites', src: actualites },
  { caption: 'notifications', src: notifications },
  { caption: 'mobile', src: mobile },
];
