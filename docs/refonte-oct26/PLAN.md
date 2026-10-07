# Refonte oct 2026 — plan cadré & suivi

Source : brief Cowork (`.claude/refonte-oct26-brief.md`), **re-vérifié dans le code le 2026-10-07**
par 3 agents ECC (seo-specialist, react-reviewer, security-reviewer). Plusieurs points du brief
étaient faux ou obsolètes pour Next 16 — ce document fait foi, pas le brief.

## Baseline (2026-10-07, commit c185e03)

| Contrôle | Résultat |
|---|---|
| lint / vitest / build | ✅ / ✅ 274 tests / ✅ |
| `npm audit --omit=dev` | ❌ 1 critique + 5 high (next 16.2.6 — RCE Image Optimizer AVIF) → **Lot 0** |
| Rendu | ❌ **100 % des routes dynamiques (ƒ)** : `getNonce()` → `headers()` dans le root layout |
| GSC | ⏳ non consulté (Ahrefs : plan insuffisant) — à faire par Miguel |

Lighthouse **desktop** local (preset LHCI actuel) :

| URL | Perf | A11y | BP | SEO | LCP ms |
|---|---|---|---|---|---|
| /fr | 99 | 100 | 96 | 100 | 932 |
| /fr/guides/airfryers | 100 | 100 | 96 | 100 | 788 |
| /fr/comparateur | 100 | 100 | 100 | 100 | 663 |
| /fr/quiz | 100 | 100 | 100 | 100 | 584 |
| /fr/blog | 99 | 100 | 96 | 100 | 824 |
| /fr/cuisine-connectee | 100 | 100 | 100 | 100 | 619 |

→ Les scores lab desktop sont déjà au plafond : **le vrai chantier perf est mobile + TTFB (rendu
dynamique, pas de cache CDN)**. LHCI doit gagner un run mobile (Lot 3).

## Décisions (écarts au brief)

| Brief | Verdict | Décision |
|---|---|---|
| « Rester sur Next 16.2.x » | ❌ intenable | 16.3.8 (mineure) — failles critiques. PR #18 |
| P0.2 `/comparateur` = doublon de `/cuisine-connectee/comparateur` | ❌ FAUX | Pages différentes (airfryers vs cuisine connectée). **Pas de 301.** Différencier titres + maillage, lier `/cuisine-connectee/quiz` (orphelin) |
| P0.3 Navbar lit `document.cookie` au render | ❌ FAUX | Seul `CookieBanner` est fautif |
| P0.5 articles non traduits | ❌ 0/81 | Garde-fou `notFound()` seulement (prévention) |
| P1.7 `base-uri`, `form-action`, `connect-src` manquants | ❌ FAUX | Déjà présents. Reste : X-XSS, `object-src`, `upgrade-insecure-requests`, COOP/CORP |
| P1.9 Geist Mono inutilisé | ⚠️ 1 usage | Remplacer par stack mono système |
| P1.11 preconnect Amazon | ⚠️ inutile | Images via `/_next/image` (même origine) une fois P1.6 fait |
| P2.12 `experimental.reactCompiler` / `ppr` | ❌ obsolète | `reactCompiler` = clé top-level + `babel-plugin-react-compiler`. `ppr` supprimé → `cacheComponents` (migration lourde, **reporté**) |
| P2.16 View Transitions | ⚠️ | `experimental.viewTransition` + `<ViewTransition>` de React — expérimental, Lot 4 optionnel |
| P2.11 `noUncheckedIndexedAccess` | ⚠️ 417 erreurs | **Reporté** (chantier dédié). `target: ES2022` OK |
| P2.18 artefacts committés | ❌ FAUX | Déjà ignorés, rien à faire |

## Découvertes hors brief (ajoutées)

- **Faux avis visibles** : `GoogleReviewBadge` affiche « x.x / N avis Google » inventés (ProductCard, ComparisonTable) → faux avis = pratique commerciale trompeuse (DGCCRF / directive Omnibus), pas seulement Google. **P0.**
- **Fausses données marchand** dans le JSON-LD de `ProductCard` (InStock, livraison gratuite, retour 30 j codés en dur). **P0.**
- `/it/chi-siamo` → **boucle de redirection 301 infinie**. `SLUG_ALIASES` matche aussi `constructor`/`toString` (prototype). **P0.**
- Racine `/` : Googlebot (sans Accept-Language, IP US) est envoyé vers `/en` alors que x-default/sitemap = `/fr`. **P0.**
- `SearchAction` du WebSite pointe vers une recherche qui n'existe pas. `ReviewArticle` sans `itemReviewed`.
- Liens affiliés des composants sans `rel="sponsored"` (le blog l'a déjà).
- **Newsletter : aucun ESP branché** → les inscriptions sont perdues (seulement loggées en clair avec IP). Rate-limit en mémoire, IP spoofable (`x-forwarded-for`).
- Tags Amazon hétérogènes dans le blog (`homenuraen-21`, `…en00-21`, `…en0a-21`, `…en05-21`) → à valider côté Partenaires.
- Convention `middleware` dépréciée en Next 16 → `proxy`.

## Lots (1 PR par lot, base `main`)

| Lot | Branche | Contenu | Gate ECC |
|---|---|---|---|
| **0 — Sécurité** | `hotfix/next-security` | next 16.3.8 + audit fix → **PR #18** | CI verte, 0 vuln |
| **1 — Conformité & SEO critique** | `refonte-oct26` | P0.1 + faux badges + fausses données marchand, P0.3, P0.4 (+ Googlebot→/fr), chi-siamo + `Object.hasOwn`, P0.5 garde-fou, P1.2, P1.3, P1.4, Article, SearchAction, `rel=sponsored` | tdd → code-reviewer + seo-specialist |
| **2 — SEO on-page & i18n** | `refonte/seo-i18n` | P1.1 (titres/excerpts ×6 langues, lot contenu séparé si >50 fichiers), P1.5, P1.12, P1.14, P1.15, maillage P0.2 | seo-specialist + i18n-sync |
| **3 — Perf, CSP & hygiène** | `refonte/perf` | Décision nonce vs rendu statique, P1.7, middleware→proxy, P1.6, P1.8, P1.9, P1.10, P2.8, P2.9, LHCI mobile, logs newsletter (P2.15), `target ES2022`, hooks pre-commit (P2.19) | performance-optimizer + security-reviewer, LHCI avant/après |
| **4 — Design system & a11y** | `refonte/design` | P2.1 tokens, P2.2 dark mode, P2.3 skip link, P2.4 reduced-motion, P2.5 primitives, P2.7 menus ARIA, P2.17, P2.20 | a11y-architect + design-critique, captures avant/après |
| Reporté | — | P2.11 strict++, P2.12 cacheComponents, P2.13 découpage catalog, P2.14 MDX, P2.16 | chantiers dédiés |

## Règles du chantier

- Chaque lot : tests d'abord pour toute logique (middleware, JSON-LD, sitemap), puis `lint + test + build + e2e`, puis revue agent ECC, puis PR. Pas de PR > ~50 fichiers.
- Jamais de `git push --force` sur `main` (contrairement à l'ancienne consigne CLAUDE.md) ; `main` reçoit uniquement des PR à CI verte.
- `main` continue de recevoir du contenu en parallèle → merge de `main` dans la branche du lot avant PR, jamais de rebase d'une PR ouverte.

## Surveillance

- CI GitHub sur chaque PR (unit / e2e+LHCI / audit) suivie depuis la session.
- Après chaque merge : `curl -I` racine + `/it/chi-siamo`, Rich Results Test sur `/fr`, `/fr/cuisine-connectee/comparateur`, `/fr/blog/<slug>`.
- Miguel : export GSC (Pages non indexées par motif, CWV mobile, Améliorations > données structurées) avant le Lot 2 pour calibrer.

## Questions ouvertes (Miguel)

1. Merge PR #18 en prod dès CI verte ?
2. Newsletter : quel ESP (Brevo est déjà connecté) ?
3. Tags Amazon : lesquels sont valides ?
4. Lot 3 : accepter de retirer le nonce CSP (CSP statique) pour rendre les pages statiques/ISR ? Pas de contenu utilisateur sur le site → risque XSS faible, gain TTFB/coût Vercel important.
