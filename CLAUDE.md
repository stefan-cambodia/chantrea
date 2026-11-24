# Consignes pour Claude : site Chantrea Systems

Ces règles s'appliquent à toute modification des textes du site, dans les cinq langues
(`src/i18n/*.json`), y compris les balises title et description et les données structurées.

## Ne jamais dire qu'une seule personne compose ou fait tourner Chantrea Systems

- N'écris jamais que Chantrea Systems est composée d'une seule personne, ni qu'une seule
  personne y travaille. C'est faux : des traducteurs travailleront avec Stefan.
- Exemples interdits : « Chantrea Systems, c'est une personne », « Chantrea Systems, c'est
  moi », « Quatre domaines, une seule personne », « One person does the work »,
  en khmer « មនុស្សតែម្នាក់ធ្វើការងារ » (« une seule personne travaille »).
- Ne plus insister non plus sur l'interlocuteur unique (décidé le 2026-11-24) : pas de
  « Un seul interlocuteur », « Je vous réponds moi-même », « Vous parlez toujours à la même
  personne », « You talk directly to me », « No middleman / Pas d'intermédiaire ».
- Autorisé : dire que Stefan suit le projet du début à la fin (« Un suivi du début à la
  fin »), et qu'il est responsable de chaque projet.

## Ne jamais annoncer de traducteur humain

- Aujourd'hui, il n'y a aucun traducteur humain. Dans toutes les langues sauf le français,
  la traduction est faite par l'IA ; le bloc `about.sections.1` (« Des échanges clairs »)
  le dit : « Écrivez dans votre langue : je vous réponds avec l'aide de la traduction par
  l'IA. » En français, ce bloc ne parle pas de traduction.
- Dans les pages pour les clients, n'écris nulle part que des traducteurs humains sont
  disponibles, ni qu'ils arriveront bientôt.
- Exception : la page Recrutement (`jobs`, lien dans le pied de page et en fin de page
  À propos) dit que Chantrea Systems cherche un traducteur agréé anglais ou français ↔ khmer,
  avec des connaissances en fiscalité cambodgienne. Ne pas y mettre de rémunération ni de
  commission. L'autorité qui délivre l'agrément reste « les autorités cambodgiennes » tant
  que Stefan ne l'a pas précisée.

## Quand Stefan annonce un traducteur pour une langue

Ne passer une langue à la version « avec traducteur » que sur demande explicite de Stefan,
langue par langue.

1. Faire relire au traducteur tous les textes de sa langue (`docs/RELECTURE.md`), puis
   noter les clés relues dans `docs/relecture-statut.json`.
2. Remplacer le bloc `about.sections.1` de cette langue (mêmes clés `title` et `text`) par
   la traduction du texte de référence :
   - Titre : « Je participe à la conversation »
   - Texte : « Vous parlez, dans votre langue, à un traducteur qui travaille avec moi,
     autant que possible toujours le même, et je participe à la conversation. La traduction
     est faite à la fois par l'IA et par le traducteur. Pas de message perdu entre plusieurs
     services. Je vous dis clairement ce que je peux faire, et ce que je ne fais pas. »
3. Repérer les autres textes de cette langue qui parlent de traduction par l'IA ou
   d'échanges dans la langue du client (par exemple le bloc « Expatriés » de l'accueil) et
   proposer leur mise à jour ; attendre l'accord de Stefan avant de les changer.
4. Demander à Stefan si l'annonce de la page Recrutement doit rester en ligne.
5. Relancer `node scripts/relecture.mjs`.
