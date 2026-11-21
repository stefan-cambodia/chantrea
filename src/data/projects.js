// Liste des réalisations, dans l'ordre d'affichage.
// Pour ajouter une réalisation :
//   1. ajouter une ligne ici (id, groupe, lien éventuel) ;
//   2. ajouter ses textes sous work.items.<id> dans CHAQUE fichier src/i18n/<langue>.json.
//
// group : 'products' (proposable à un client) ou 'skills' (preuve de compétence)
// page  : lien vers une page du site (ex. 'hms')
// url   : lien externe public (jamais un dépôt privé)

export default [
  { id: 'hms', group: 'products', page: 'hms' },
  { id: 'learnkh', group: 'products' },
  { id: 'rally', group: 'skills', page: 'rally' },
  { id: 'angkor', group: 'skills', page: 'angkor' },
  { id: 'synth', group: 'skills', url: 'https://stefan-cambodia.github.io/js-synth/' },
  { id: 'vsm', group: 'skills' },
  { id: 'games', group: 'skills', url: 'https://stefan-cambodia.github.io/' },
];
