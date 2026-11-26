// Derniers changements des dépôts publics, pour la page « Quoi de neuf ? ».
//
// La liste est lue sur GitHub AU MOMENT OÙ LE SITE EST CONSTRUIT, puis écrite dans la page :
// le navigateur du visiteur ne contacte jamais GitHub, et la page reste sans JavaScript.
// Elle se rafraîchit donc à chaque publication (.github/workflows/deploy.yml : à chaque envoi
// sur main, et plusieurs fois par jour).
//
// Seuls les dépôts PUBLICS du compte (site.config.mjs → github) sont lus : jamais un dépôt privé,
// jamais une copie (fork) du projet de quelqu'un d'autre.
import config from '../../site.config.mjs';

export const MAX_CHANGES = 20;
const MAX_REPOS = 12;
const API = 'https://api.github.com';

async function api(path) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'static-site-build' };
  // Dans GitHub Actions, le jeton du workflow évite la limite de 60 lectures par heure.
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  let failure;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt) await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    try {
      const res = await fetch(`${API}${path}`, { headers, signal: AbortSignal.timeout(15000) });
      if (res.status === 409) return []; // dépôt encore vide
      if (res.ok) return await res.json();
      failure = new Error(`GitHub a répondu ${res.status} pour ${path}`);
      if (res.status < 500) break; // limite atteinte, adresse inconnue : réessayer ne sert à rien
    } catch (error) {
      failure = error;
    }
  }
  throw failure;
}

async function commitsOf(repo) {
  const commits = await api(`/repos/${repo.full_name}/commits?per_page=${MAX_CHANGES}`);
  return commits.map((c) => ({
    repo: repo.name,
    repoUrl: repo.html_url,
    sha: c.sha,
    url: c.html_url,
    message: (c.commit.message || '').split('\n')[0].trim(),
    date: c.commit.committer?.date || c.commit.author?.date,
  }));
}

async function load() {
  const repos = (await api(`/users/${config.github}/repos?per_page=100&sort=pushed`))
    .filter((r) => !r.private && !r.fork && r.pushed_at)
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, MAX_REPOS);

  // Dépôts parcourus du plus récemment modifié au plus ancien, trois par trois. Un dépôt dont le
  // dernier envoi est plus ancien que le 20e changement déjà trouvé ne peut rien contenir de plus
  // récent : on s'arrête là.
  let list = [];
  for (let i = 0; i < repos.length; i += 3) {
    const found = await Promise.all(repos.slice(i, i + 3).map(commitsOf));
    list = [...list, ...found.flat()]
      .filter((c) => c.date)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, MAX_CHANGES);
    const next = repos[i + 3];
    if (!next || (list.length >= MAX_CHANGES && new Date(list.at(-1).date) >= new Date(next.pushed_at))) break;
  }
  return list;
}

let reading;

/**
 * Les derniers changements : { items, failed, at }.
 * Une seule lecture par construction du site, partagée par les pages de toutes les langues.
 * Si GitHub ne répond pas, la page affiche un message à la place de la liste (failed: true) ;
 * avec CHANGES_REQUIRED=1 (mise à jour programmée), la construction échoue et le site déjà
 * en ligne reste tel quel, avec sa liste précédente.
 */
export function latestChanges() {
  reading ??= load().then(
    (items) => ({ items, failed: false, at: new Date() }),
    (error) => {
      if (process.env.CHANGES_REQUIRED) throw error;
      console.warn(`[Quoi de neuf ?] Liste non lue sur GitHub : ${error.message}`);
      return { items: [], failed: true, at: new Date() };
    },
  );
  return reading;
}
