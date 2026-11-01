This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Clics affiliés : lire les clics par emplacement et par marché

Chaque clic sur un lien Amazon envoie une balise à `/api/click` (`lib/analytics.ts`, `trackAffiliateClick`), qui écrit une ligne JSON dans les logs Vercel. Aucune donnée personnelle : ni IP, ni navigateur, ni cookie, ni identifiant.

```json
{"event":"affiliate_click","at":"2026-11-02T10:00:00.000Z","path":"/de/blog/…","articleSlug":"…","lang":"de","market":"de","placement":"table","surface":null,"model":"…","store":"amazon.fr","tag":"<ID de suivi du marché>"}
```

| Champ | Contenu |
| --- | --- |
| `placement` | le bloc cliqué (liste fermée `CLICK_PLACEMENTS` de `lib/affiliate-click.ts`) : `quick_answer`, `picks`, `product_block`, `body_link`, `table`, `card`, `sticky_bar`, `comparator`, `quiz`, `black_friday`, `floor_care` |
| `market` | le marché de la page : `fr`, `uk` (version anglaise), `de`, `es`, `it`, `nl`, `pl`, `se` (version suédoise), `us`, `ca` |
| `store` | la boutique Amazon du lien (`amazon.fr`, ou `amazon.it` pour l'italien) |
| `tag` | l'identifiant de suivi du lien, celui des rapports Associates Central |
| `surface` | l'ancienne dimension (`verdict`, `after-h2`, `bottom`, `sticky`…), seule présente dans les lignes d'avant le 01/11/2026 ; gardée pour comparer avant/après et pour séparer les blocs produit en milieu (`after-h2`) et en fin d'article (`bottom`) ; `null` pour les blocs qui n'en avaient pas (tableaux, cartes, comparateur, quiz) |

**Lire les clics :**

1. Dans Vercel → projet → *Logs*, filtrer sur `affiliate_click` (environnement *Production*).
2. Ou exporter puis compter en ligne de commande (Vercel CLI 50.41, projet lié) :

```bash
vercel logs --environment production --no-branch --query 'affiliate_click' --since 7d --limit 10000 --json > clicks.jsonl
npx tsx scripts/analytics/affiliate-clicks.ts clicks.jsonl
```

`--no-branch` est indispensable : sans lui, la CLI ne garde que les logs de la branche git courante (aucun clic depuis une branche de travail). Le script (`scripts/analytics/affiliate-clicks.ts`, lecture seule) affiche les clics par emplacement, par marché, par boutique, par identifiant de suivi, les croisements emplacement × marché et emplacement × position (`surface`), et les 10 pages les plus cliquées. Il lit aussi l'entrée standard, un export JSON du tableau de bord ou du texte brut. Si l'export atteint la limite, le découper en périodes qui ne se chevauchent pas (`--since 2026-11-01T00:00:00Z --until 2026-11-04T00:00:00Z`, puis la suite) et concaténer les fichiers : une ligne de log n'a pas d'identifiant, deux périodes qui se chevauchent compteraient deux fois les mêmes clics.

Vercel Web Analytics (onglet *Analytics* → *Events* → `click_affiliate`) ne reçoit que 2 propriétés sur le plan Pro : `placement` et `market` (raisons dans `VERCEL_PROPERTIES`, `lib/analytics.ts`). Le détail complet (modèle, page, boutique, identifiant de suivi) est dans les logs.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
