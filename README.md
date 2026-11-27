# Chantrea Systems : site web

Site statique fait avec [Astro](https://astro.build), en cinq langues (français, anglais, khmer, russe, chinois), publié sur GitHub Pages.
Pas de cookies, pas de traceur, presque pas de JavaScript (le bouton clair/sombre, et le rafraîchissement de la page « Derniers commits »).

## Travailler en local

Il faut Node.js 22 ou plus récent.

```sh
npm install        # une seule fois
npm run dev        # site en direct sur http://localhost:4321/chantrea/
npm run build      # fabrique le site final dans dist/
npm run preview    # affiche le site final
```

## Où est quoi

| Je veux changer…                                    | Fichier                                    |
|-----------------------------------------------------|--------------------------------------------|
| un texte du site                                    | `src/i18n/<langue>.json` (fr, en, km, ru, zh) |
| l'e-mail, Telegram, WhatsApp                        | `site.config.mjs`                          |
| les mentions légales du pied de page                | `site.config.mjs` → `legal`                |
| le lien « Espace client » (application Odoo)        | `site.config.mjs` → `portalUrl` (`null` = lien masqué) |
| l'adresse du site (domaine)                         | `site.config.mjs` → `site` et `base`, voir `docs/DOMAINE.md` |
| la liste des réalisations                           | `src/data/projects.js` + `work.items` dans chaque langue |
| le compte GitHub de la page « Derniers commits »    | `site.config.mjs` → `github`               |
| les couleurs                                        | `src/styles/global.css`, en haut du fichier |

## Modifier un texte

1. Ouvrir `src/i18n/fr.json`, chercher la phrase, la modifier.
2. Faire la même modification dans les autres langues (`en.json`, `km.json`, `ru.json`, `zh.json`).
   Les cinq fichiers ont exactement les mêmes clés : seule la valeur change.
3. Vérifier avec `npm run dev`.

Les textes `[À COMPLÉTER PAR STEFAN]` s'affichent surlignés en jaune sur le site. Les remplacer par le vrai texte.

Pour ajouter un paragraphe à une page de service, d'à propos ou de sécurité, ajouter un bloc dans la liste `sections` :

```json
{ "title": "Titre du bloc", "text": "Un paragraphe." }
{ "title": "Titre du bloc", "list": ["Point 1", "Point 2"] }
{ "title": "Titre du bloc", "defs": [{ "term": "XCP-ng", "text": "Ce que c'est." }] }
{ "title": "Titre du bloc", "text": "…", "link": { "page": "hms", "label": "Découvrir HMS" } }
{ "figure": "infra" }        // schéma d'infrastructure (textes : diagram)
{ "figure": "inventory" }    // inventaire et veille en cinq étapes (textes : inventoryFlow)
```

## Services : quatre domaines et offres détaillées

`services.items` contient les quatre domaines (`development`, `ai`, `infrastructure`, `security`),
affichés en cartes sur l'accueil et la page Services. Chacun a `summary` (texte court), `points`
(4 mots-clés pour la carte), `metaTitle` et `metaDescription` (titre et description pour les moteurs
de recherche).

Une offre détaillée qui dépend d'un domaine porte `"parent": "<id du domaine>"` : elle a sa propre
page (ex. `/fr/services/business-software/`, Odoo, Nextcloud et Mattermost), mais n'apparaît pas
comme un domaine ; un lien vers elle s'affiche sur la page du domaine.

Une offre détaillée peut avoir sa propre sous-offre, avec `"parent": "<id de l'offre>"` :
`odoo-cambodia` (Odoo en khmer, pour le Cambodge) dépend de `odoo-development` (développement de
modules Odoo), qui dépend du domaine `development`. La page Services liste les deux sous le domaine.

Les technologies présentées sur la page Services sont dans `tech.groups` (une liste par domaine).

Une offre peut porter des champs facultatifs, tous utilisés par la page Linux (`"id": "linux"`) :

- `heading` : le titre affiché en haut de la page, s'il diffère de `title` (qui reste le titre des
  listes) ;
- `card` : le titre et le texte de sa carte sur la page de son domaine ;
- `actions` : les boutons du haut de page (`emailSubject` ouvre un e-mail avec cet objet, `anchor`
  mène à une ancre de la page) ;
- `contact` : le titre et l'objet d'e-mail du bloc de contact, qui reçoit alors l'ancre `#contact`.

Dans un bloc de `sections`, `id` pose une ancre, `subtitle` un sous-titre, `after` un paragraphe après
la liste ou les cartes, `note` une note encadrée ; une carte devient un lien avec `anchor` ou `page`.
Dans un texte, `[Nextcloud](services/nextcloud)` fait un lien vers une page du site, dans la langue
de la page, et `[voir plus haut](#anti-cheat)` un lien vers une ancre.

`"_verifie": "vérifié le 27/11/2026"` note quand les dates et les listes (de jeux, par exemple) d'un
bloc ont été vérifiées. La clé n'est pas affichée ; elle sert à retrouver ce qu'il faut revoir.

Les valeurs `id`, `parent`, `figure`, `domain`, `page`, `anchor`, `name`, `term` et `_verifie` ne se
traduisent pas : elles sont identiques dans les cinq fichiers. Exception : sur la page Linux, les
`term` de « Pourquoi passer à Linux » sont des phrases, et se traduisent.

## Ajouter une réalisation

1. Dans `src/data/projects.js`, ajouter une ligne :
   ```js
   { id: 'monprojet', group: 'skills', url: 'https://…' },
   ```
   `group` vaut `products` (proposable à un client) ou `skills` (projet technique et R&D, preuve de compétence).
   `url` est facultatif et doit être un lien **public** (jamais un dépôt privé).
2. Dans **chaque** fichier `src/i18n/<langue>.json`, sous `work.items`, ajouter :
   ```json
   "monprojet": {
     "title": "Nom du projet",
     "kind": "Type de projet",
     "status": "État réel (prototype, jouable, terminé…)",
     "text": "Ce que ça fait pour l'utilisateur.",
     "shows": "Montre : …",
     "link": "Texte du lien"
   }
   ```
   Seul `title` est obligatoire.

Règle : décrire ce que le projet fait pour l'utilisateur, jamais comment il est construit (pas de code, d'adresse de serveur, de nom de client).

## Page « Derniers commits »

La page `/fr/whats-new/` (lien « Derniers commits » du menu ; elle s'appelait « Quoi de neuf ? » à sa création) affiche les 20 derniers changements des
dépôts **publics** du compte GitHub noté dans `site.config.mjs` → `github`, regroupés par jour, à
l'heure du Cambodge. Les dépôts privés et les copies (forks) n'y apparaissent jamais.

- La liste est lue sur GitHub **pendant la construction du site** (`src/lib/changes.js`), puis écrite
  dans la page : elle s'affiche sans JavaScript, et les moteurs de recherche la lisent.
- Elle est refaite à chaque publication : à chaque envoi sur `main`, et quatre fois par jour
  (`schedule` dans `.github/workflows/deploy.yml`). GitHub ne garantit pas ces reconstructions
  programmées : le 26 et le 27 novembre 2026, les deux premières n'ont pas été lancées.
- Entre deux publications, un script dans la page (`src/pages/[lang]/whats-new.astro`) relit GitHub
  **dans le navigateur du visiteur** et remplace la liste si un dépôt a reçu un envoi depuis la
  construction. Le navigateur contacte alors `api.github.com`, sans identification : GitHub accepte
  60 lectures par heure et par adresse ; une visite en utilise 1 s'il n'y a rien de nouveau, sinon
  de 4 à 13, et le résultat est gardé dix minutes dans l'onglet (`sessionStorage`, pas de cookie).
  Si GitHub ne répond pas, la liste écrite à la construction reste affichée.
- Le script écrit les dates avec des modèles préparés à la construction (noms des jours et des mois
  compris) : Chrome ne connaît pas le khmer et écrirait les jours dans une autre langue.
- Chaque ligne reprend le titre du commit tel qu'il a été écrit : il est visible par les clients.
- Si GitHub ne répond pas pendant une publication, la page affiche un message à la place de la
  liste et le reste du site est publié normalement. Pendant une mise à jour programmée, la
  construction échoue à la place, et le site en ligne garde sa liste précédente.
- Les textes de la page sont sous `whatsNew` dans chaque fichier de langue ; `{date}`, `{changes}`
  et `{projects}` sont remplacés à la construction, puis par le script, et ne se traduisent pas.

En local, GitHub accepte 60 lectures par heure sans identification ; une construction en utilise
moins de dix. Au-delà, lancer `GITHUB_TOKEN=$(gh auth token) npm run build`.

## Relecture des traductions

Les textes khmers, russes et chinois ont été traduits par Claude depuis le français. Le khmer **doit** être relu par un locuteur natif.

```sh
node scripts/relecture.mjs   # met à jour docs/RELECTURE.md
```

`docs/RELECTURE.md` liste chaque texte avec son original français. Une fois un texte relu et corrigé, noter sa clé comme « ok » dans `docs/relecture-statut.json`, puis relancer le script.

## Publier

Le site se publie **automatiquement** à chaque envoi sur la branche `main` (`.github/workflows/deploy.yml`),
et se reconstruit tout seul quatre fois par jour pour rafraîchir la page « Derniers commits ».

Une seule fois au départ : sur GitHub, **Settings → Pages → Build and deployment → Source : GitHub Actions**.

Façon de travailler :

```sh
git switch site          # branche de travail
# … modifications, vérification avec npm run dev …
git add -A && git commit -m "Ce que j'ai changé"
git push                 # envoie la branche de travail (pas encore publiée)
```

Pour publier : fusionner `site` dans `main` (sur GitHub avec une pull request, ou `git switch main && git merge site && git push`).
L'onglet **Actions** du dépôt montre la publication en cours ; le site est en ligne une à deux minutes après.

Adresse actuelle : https://stefan-cambodia.github.io/chantrea/
