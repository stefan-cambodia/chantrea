// Liste des réalisations, dans l'ordre d'affichage.
// Pour ajouter une réalisation :
//   1. ajouter une ligne ici (id, groupe, lien éventuel) ;
//   2. ajouter ses textes sous work.items.<id> dans CHAQUE fichier src/i18n/<langue>.json.
//
// group : 'products' (section « Nos réalisations ») ou 'skills' (section « En cours de développement »)
// page  : lien vers une page du site (ex. 'hms')
// url   : lien externe public (jamais un dépôt privé)

export default [
  { id: 'hms', group: 'products', page: 'hms' },
  { id: 'learnkh', group: 'products' },
  { id: 'acpc', group: 'products', page: 'acpc' },
  { id: 'asokoban', group: 'products', page: 'asokoban' },
  { id: 'snake3d', group: 'products', page: '3d-snake' },
  { id: 'velocity', group: 'products', page: 'velocity' },
  { id: 'rally', group: 'skills', page: 'rally' },
  { id: 'angkor', group: 'skills', page: 'angkor' },
  { id: 'synth', group: 'skills', url: 'https://stefan-cambodia.github.io/js-synth/' },
  { id: 'vsm', group: 'skills' },
  { id: 'games', group: 'skills', url: 'https://stefan-cambodia.github.io/' },
];
