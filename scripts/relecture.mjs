// Génère docs/RELECTURE.md : la liste de tous les textes traduits par Claude,
// à faire relire par un locuteur natif (khmer en priorité, puis russe et chinois).
//
//   node scripts/relecture.mjs
//
// Le statut de chaque texte est conservé dans docs/relecture-statut.json :
// mettre "ok" en face d'une clé une fois le texte relu et corrigé.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const LANGS = [
  { code: 'km', name: 'Khmer', priority: 'obligatoire' },
  { code: 'ru', name: 'Russe', priority: 'conseillée' },
  { code: 'zh', name: 'Chinois simplifié', priority: 'conseillée' },
];

const statusFile = 'docs/relecture-statut.json';
const status = existsSync(statusFile) ? JSON.parse(readFileSync(statusFile, 'utf8')) : {};

// Seuls les textes sont listés : pas les réglages de mise en page (pictogrammes, booléens),
// ni les notes internes, dont la clé commence par « _ » (ex. _verifie).
const flatten = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null
      ? flatten(v, `${prefix}${k}.`)
      : typeof v !== 'string' || k === 'icon' || k.startsWith('_') ? [] : [[`${prefix}${k}`, v]],
  );

const fr = Object.fromEntries(flatten(JSON.parse(readFileSync('src/i18n/fr.json', 'utf8'))));
const esc = (s) => s.replace(/\|/g, '\\|').replace(/\n/g, ' ');

let out = `# Textes à relire par un locuteur natif

Fichier généré par \`node scripts/relecture.mjs\`. Ne pas modifier à la main :
corriger les textes dans \`src/i18n/<langue>.json\`, puis noter la clé comme relue
dans \`docs/relecture-statut.json\` (ex. \`{ "km": { "home.hero.title": "ok" } }\`).

Tous les textes ci-dessous ont été traduits par Claude depuis le français.
`;

for (const { code, name, priority } of LANGS) {
  const file = `src/i18n/${code}.json`;
  if (!existsSync(file)) continue;
  const rows = flatten(JSON.parse(readFileSync(file, 'utf8')));
  const done = rows.filter(([k]) => status[code]?.[k] === 'ok').length;
  out += `\n## ${name} (${code}) : relecture ${priority}\n\n${done} / ${rows.length} textes relus.\n\n`;
  out += `| Statut | Clé | Texte | Français d'origine |\n|---|---|---|---|\n`;
  for (const [k, v] of rows) {
    const st = status[code]?.[k] === 'ok' ? '✅ relu' : '⏳ à relire';
    out += `| ${st} | \`${k}\` | ${esc(v)} | ${esc(fr[k] ?? '')} |\n`;
  }
}

writeFileSync('docs/RELECTURE.md', out);
console.log('docs/RELECTURE.md mis à jour.');
