# Chantrea Systems : site web

Site statique fait avec [Astro](https://astro.build), en cinq langues (français, anglais, khmer, russe, chinois), publié sur GitHub Pages.
Pas de cookies, pas de traceur, presque pas de JavaScript (seulement le bouton clair/sombre).

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
| l'adresse du site (domaine)                         | `site.config.mjs` → `site` et `base`, voir `docs/DOMAINE.md` |
| la liste des réalisations                           | `src/data/projects.js` + `work.items` dans chaque langue |
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
```

## Ajouter une réalisation

1. Dans `src/data/projects.js`, ajouter une ligne :
   ```js
   { id: 'monprojet', group: 'skills', url: 'https://…' },
   ```
   `group` vaut `products` (proposable à un client) ou `skills` (preuve de compétence).
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

## Relecture des traductions

Les textes khmers, russes et chinois ont été traduits par Claude depuis le français. Le khmer **doit** être relu par un locuteur natif.

```sh
node scripts/relecture.mjs   # met à jour docs/RELECTURE.md
```

`docs/RELECTURE.md` liste chaque texte avec son original français. Une fois un texte relu et corrigé, noter sa clé comme « ok » dans `docs/relecture-statut.json`, puis relancer le script.

## Publier

Le site se publie **automatiquement** à chaque envoi sur la branche `main` (`.github/workflows/deploy.yml`).

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
