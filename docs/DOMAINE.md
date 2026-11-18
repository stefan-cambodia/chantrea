# Domaine personnalisé

Le site est aujourd'hui servi à l'adresse GitHub Pages : https://stefan-cambodia.github.io/chantrea/
Rien n'est activé pour le domaine. Voici la marche à suivre le jour où `chantreasystems.com` est acheté.

## 1. Enregistrements DNS chez le registrar de chantreasystems.com

| Type  | Nom (hôte)   | Valeur                    |
|-------|--------------|---------------------------|
| A     | `@`          | `185.199.108.153`         |
| A     | `@`          | `185.199.109.153`         |
| A     | `@`          | `185.199.110.153`         |
| A     | `@`          | `185.199.111.153`         |
| AAAA  | `@`          | `2606:50c0:8000::153`     |
| AAAA  | `@`          | `2606:50c0:8001::153`     |
| AAAA  | `@`          | `2606:50c0:8002::153`     |
| AAAA  | `@`          | `2606:50c0:8003::153`     |
| CNAME | `www`        | `stefan-cambodia.github.io.` |

Supprimer tout autre enregistrement A, AAAA ou CNAME existant sur `@` et `www` (souvent une page « parking » du registrar).
Ces adresses sont celles publiées par GitHub ; les revérifier sur la documentation GitHub Pages au moment de le faire.

Conseillé avant tout : **vérifier le domaine** dans GitHub (Settings du compte → Pages → *Add a domain*). GitHub donne un enregistrement `TXT` à ajouter ; cela empêche quelqu'un d'autre d'utiliser le domaine sur GitHub Pages.

## 2. Dans GitHub

Dépôt `chantrea` → **Settings → Pages → Custom domain** : saisir `chantreasystems.com`, enregistrer, attendre la vérification DNS (quelques minutes à quelques heures), puis cocher **Enforce HTTPS**.

Avec la publication par GitHub Actions, aucun fichier `CNAME` n'est nécessaire dans le dépôt.

## 3. Dans le site

Dans `site.config.mjs` :

```js
site: 'https://chantreasystems.com',
base: '/',
```

Envoyer sur `main`. Les liens, le sitemap, les balises hreflang et les données structurées suivent automatiquement.

## 4. Plus tard : chantreasystems.com.kh → version khmère

GitHub Pages n'accepte **qu'un seul domaine par dépôt**. Le `.com.kh` ne peut donc pas pointer directement sur ce dépôt. Trois possibilités, de la plus simple à la plus lourde :

1. **Redirection chez le registrar du .com.kh** (« URL forwarding », redirection 301) vers `https://chantreasystems.com/km/`. Le plus simple, si le registrar le propose ET gère le HTTPS sur la redirection (à vérifier : beaucoup ne redirigent qu'en HTTP).
2. **DNS du .com.kh chez Cloudflare** (offre gratuite) avec une règle de redirection vers `https://chantreasystems.com/km/`. HTTPS inclus, sans cookies ni traceur côté visiteur.
3. **Un deuxième petit dépôt GitHub Pages** contenant une page qui redirige vers `/km/`, avec `chantreasystems.com.kh` comme domaine personnalisé.

Dans les trois cas, le contenu reste à un seul endroit (`chantreasystems.com/km/`) : pas de contenu en double pour les moteurs de recherche.
