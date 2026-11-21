# Consignes pour Claude : site Chantrea Systems

Ces règles s'appliquent à toute modification des textes du site, dans les cinq langues
(`src/i18n/*.json`), y compris les balises title et description et les données structurées.

## Ne jamais dire qu'une seule personne compose ou fait tourner Chantrea Systems

- N'écris jamais que Chantrea Systems est composée d'une seule personne, ni qu'une seule
  personne y travaille. C'est faux : des traducteurs travailleront avec Stefan.
- Exemples interdits : « Chantrea Systems, c'est une personne », « Chantrea Systems, c'est
  moi », « Quatre domaines, une seule personne », « One person does the work »,
  en khmer « មនុស្សតែម្នាក់ធ្វើការងារ » (« une seule personne travaille »).
- Autorisé : dire que le client parle directement à Stefan. En français, « Vous parlez
  directement à la personne qui fait le travail » reste correct.

## Ne jamais annoncer de traducteur humain

- Aujourd'hui, il n'y a aucun traducteur humain. Dans toutes les langues sauf le français,
  les clients échangent directement avec Stefan, et la traduction est faite par l'IA.
- N'écris nulle part que des traducteurs humains sont disponibles, ni qu'ils arriveront
  bientôt.
- Français : le client échange directement avec Stefan. Le bloc « Un seul interlocuteur »
  (`about.sections.1`) reste tel quel.

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
3. Repérer les autres textes de cette langue qui disent « vous me parlez directement »
   (lead de l'accueil, bloc de l'accueil, description Services, page Web et Android) et
   proposer leur mise à jour ; attendre l'accord de Stefan avant de les changer.
4. Relancer `node scripts/relecture.mjs`.
