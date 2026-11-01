# Homenura — protocole de check-up commercial (novembre 2026)

Document de méthode pour Miguel, préparé le 01/11/2026. Il adapte à homenura.com le protocole écrit le même jour pour Homavise, en gardant ses principes.

**C'est le cadre du prochain audit, pas le compte rendu d'un audit fait.** À ce jour :
- aucun parcours n'a été revu selon ce protocole ;
- aucun acheteur réel n'a été observé ;
- aucune tâche récurrente n'est activée par ce document.

Les chiffres cités (tests, clics, ventes) sont datés et renvoient à leur source.

À lire avec :
- [`CLAUDE.md`](../../CLAUDE.md) : règles Amazon ;
- [`ETUDE-MARCHES-2026-11.md`](ETUDE-MARCHES-2026-11.md) : 10 marchés, backlog T/C/M, point de contrôle du 30/11 ;
- [`STRATEGIE-2026-10.md`](STRATEGIE-2026-10.md) et [`SEO-PLAN-2026-10.md`](SEO-PLAN-2026-10.md) ;
- [`README.md`](../../README.md), section « Clics affiliés ».

**Règles qui priment sur tout ce qui suit** (`CLAUDE.md`) :
- **Ni image ni prix Amazon** tant que l'API Creators n'est pas ouverte. « Accéder au prix », c'est donc le bouton neutre « Voir sur Amazon » (« View on Amazon », « Auf Amazon ansehen », « Vedi su Amazon », « Ver en Amazon »…). Les visuels sont des photos de fabricant ou une carte neutre.
- **La mention Partenaires Amazon exacte** de chaque langue (`lib/affiliate-disclosure.ts`), jamais paraphrasée.
- **Un seul compte Partenaires, français.** La boutique et l'identifiant de suivi viennent seulement de `lib/amazon.ts` :
  - `homenuraen05-21` pour le français, vers amazon.fr ;
  - `homaviseit-21` pour l'italien, directement vers amazon.it ;
  - `homavise{uk,de,es,nl,pl,se,us,ca}-21` pour les autres langues, vers amazon.fr : Global Earning envoie ensuite l'acheteur sur sa boutique locale.
- **/us et /ca nomment les modèles nord-américains** (`lib/market-models`) ; un modèle non vendu dans le pays n'a pas de lien.
- **Jamais « test / testé / getest / bäst i test »** pour nous-mêmes.
- **Aucun clic affilié de recette en masse, aucun clic ni achat rémunéré.**

---

## 1. Ce que les contrôles verts n'ont pas vu

Un lien valide, une page en 200 et un bouton présent dans le HTML ne prouvent pas que le visiteur voit l'action, la comprend, tombe sur le bon produit local, ni que la vente est payée. Homenura en a déjà fait l'expérience :

| Constat | Pourquoi les contrôles passaient | Source | Contrôle permanent depuis ? |
|---|---|---|---|
| Pages it/de/es/nl/en liées aux boutiques locales avec des identifiants absents du compte, alors que ces pays font plus de 70 % des clics Google | liens valides, pages en 200 | [STRATEGIE § 2.1] | oui : `affiliate-tags.test.ts` (boutiques et identifiants) |
| Boutons d'achat hors sujet (purificateur → friteuse), doublons, 144 tableaux sans lien, 68 articles sans bloc d'achat | un bouton existait et pointait vers Amazon | [STRATEGIE § 2.4] | en partie : `article-products.test.ts`, `click-placements.test.ts` |
| 1 590 pages panne (≈ 30 % des clics Google) sans aucun lien d'achat | rien n'exigeait une action commerciale | [STRATEGIE § 2.3] | en partie : `problem-buy-box.test.ts` |
| /us et /ca affichaient un site européen (230 V, RGPD, chapitre « marché français ») | traductions complètes, parité des dictionnaires verte | [ETUDE § 1.3, § 5.1] | oui depuis T1 : `market-copy-leftovers.test.ts` |
| Guide airfryer : tableau au 19e écran ; 3 choix à y ≈ 1 450 px ; aucun tableau sur les pages catégorie | le tableau était bien dans le HTML | [ETUDE § 2.4] | **non** (K1, K2 au § 8) |

**Leçon** : la visibilité et la pertinence commerciale font partie de la réception, au même titre que le fonctionnement. Les tests ne couvrent que ce que leurs auteurs ont prévu. D'où les revues humaines (§ 5 et § 6) et la règle « chaque défaut devient un contrôle » (§ 8).

---

## 2. État actuel (branche `main`, commit db9c97b, 01/11/2026)

### 2.1 Ce qui est automatisé

Deux contrôles sont **requis** avant toute fusion dans `main`. La protection est stricte : la branche doit être à jour.

| Contrôle requis | Contenu | Portée réelle |
|---|---|---|
| **Lint + unit tests** | ESLint ; Vitest ; `npm audit` (dépendances de production, gravité haute et plus) | Vitest : **81 fichiers, 1 195 tests passés et 1 sauté** (exécution locale du 01/11 sur db9c97b) |
| **E2E (smoke + a11y) + Lighthouse** | `next build`, puis Playwright, puis Lighthouse CI | Playwright : **100 tests dans 4 fichiers**, projet unique *Desktop Chrome*. Lighthouse : **7 URL** (6 en français, 1 en anglais), préréglage *desktop*, 1 passage |

Le déploiement Vercel de prévisualisation réussit aussi à chaque PR, mais il prouve seulement que le site se construit.

**Garde-fous existants, par domaine** :

| Domaine | Fichiers | Ce qui est bloqué |
|---|---|---|
| Conformité Amazon | `amazon-compliance`, `product-images`, `affiliate-disclosure`, `amazon-affiliation-notice` ; smoke « Amazon compliance (served HTML) » | images Amazon dans le code, les données et les docs ; photo sans provenance ; mention absente ou paraphrasée. Le HTML servi est vérifié sur 4 pages × 10 langues |
| Boutiques et identifiants | `affiliate-tags`, `amazon-search`, `products-url` | identifiant écrit hors de `lib/amazon.ts` ; boutique autre qu'amazon.fr ou amazon.it ; lien généré vers le mauvais marché (catalogue, articles, réponses rapides, choix des catégories, pages panne, entretien des sols, Black Friday) |
| Emplacements de clic | `click-placements`, `app/api/click`, `affiliate-click-report`, `analytics`, `analytics-vercel` | lien sponsorisé sans `data-aff-placement` de la liste fermée (12 emplacements) ; balise `/api/click` invalide ; propriétés Vercel hors limite |
| Modèles par marché (US, CA) | `market-models/data`, `surfaces`, `eu-unchanged` | modèle européen non vendu affiché ou lié ; photo européenne sur un substitut ; modèle européen sans décision us et ca |
| Restes européens | `market-copy-leftovers` | « EU », « GDPR », €, France sur /us et /ca ; chapitre français sur l'accueil /pl |
| Black Friday | `black-friday` | modèle inventé ; liste par marché (6 à 8 pages) ; lien vers un hub non indexable ; promotions affichées après le lendemain du Cyber Monday ; essai Prime hors France |
| Pages saisonnières | `gift-guides` | Sinterklaas absent avant pakjesavond ; année absente ; FAQ incomplète ; une seule langue par page |
| Pages marché (/vs/, /guides/, /news/) | `market-pages/*` | méta hors 40–58 / 140–155 caractères ; réponse hors 40–70 mots ; nombre de choix (2 pour un duel, 3 pour un guide) ; prix, note Amazon, rang de vente ou test revendiqué ; tableau hors 3 à 8 modèles |
| Entretien des sols (US, CA) | `floor-care/*` | données, liens, unités, routes ; séparation des marchés |
| Pertinence des blocs d'achat | `article-products`, `article-models`, `problem-buy-box`, `model-match` | friteuse sur un article qui n'en parle pas ; modèle mal reconnu ; page panne sans choix sur une catégorie vendable |
| SEO | `seo`, `seo-scaled-content`, `sitemap`, `robots`, `category-heads`, `category-faqs`, `i18n-parity`, `internal-links`, `locale-tags`, `llms`, `blog-dates` | pages modèles indexées en masse ; titres et descriptions trop longs ; lien interne vers une autre langue ; date future |
| Suggestion de pays | `geo-locale` ; 2 tests smoke | bandeau absent ou affiché à tort (exemple : visiteur en Espagne sur /en) ; bandeau qui revient après fermeture |
| Accessibilité | `e2e/a11y.spec.ts` | 7 pages (axe), 6 en français et 1 en anglais ; 7 tests clavier |

**Bon exemple à suivre** : les boutons hors sujet de 2026 sont devenus des contrôles (`article-products`, `problem-buy-box`). C'est la règle du § 8.

### 2.2 Ce qui n'est pas automatisé

- **Aucun écran mobile en test de bout en bout.** Playwright tourne sur un seul navigateur d'ordinateur (pas de Safari, pas de WebKit). Lighthouse mesure l'ordinateur seulement, et presque uniquement en français.
- **Aucune mesure de la position des boutons** : rien ne vérifie que la 1re action d'achat apparaît dans les premiers écrans, ni qu'un bandeau ne la cache pas.
- **Le scan du HTML généré est sauté en CI.** Le test `amazon-compliance` qui lit `.next/` est le seul sauté. La suite unitaire tourne sans build, et la suite de build ne relance pas Vitest. Seules les 4 pages × 10 langues du smoke sont vérifiées une fois servies.
- **Destinations Amazon non vérifiées automatiquement** :
  - ce qui existe : `AMAZON_MISSING_ASINS` pour l'Italie (relevé du 31/10) et les décisions US/CA (01/11) ;
  - ce qui n'existe pas : un contrôle périodique qui trouve un modèle retiré, ni un contrôle de l'arrivée Global Earning en DE, ES, UK, NL, PL, SE, US et CA.
- **Dates saisonnières** : seules les promotions du Black Friday s'éteignent seules. Sinterklaas (5/12), Boxing Day (26/12) et Reyes (6/01) ont une date d'événement, mais aucun contrôle ne dit ce que la page affiche le lendemain.
- **Aucune recette en production.** La CI teste un build local. Rien ne vérifie, après fusion, que homenura.com sert la bonne version avec les bons liens.
- **Aucun rapprochement des commissions.** Les rapports Partenaires par identifiant sont lus à la main par Miguel. Les logs `/api/click` sont lus à la demande (`scripts/analytics/affiliate-clicks.ts`). Leur durée de conservation sur Vercel reste à vérifier.
- **Aucun rapport hebdomadaire, aucun benchmark mensuel, aucune tâche planifiée.**
- **Aucun test avec de vrais acheteurs.** Aucune relecture par un locuteur natif n'est consignée dans le dépôt.

### 2.3 Chantiers en cours, à recevoir avec ce protocole

Deux chantiers ne sont pas encore dans `main` :
- **Entrée internationale** (`feat/country-entry`) : pays proposé d'abord, bandeau de suggestion, choix mémorisé.
- **Pages catégorie « réponse d'abord »** (`feat/answer-first-hubs`, T3).

Leur réception suit le § 3. Ils créent les contrôles K2 et K4 du § 8.

---

## 3. Quand une modification est-elle terminée ?

Quatre conditions, chacune avec une preuve et une date :

| Condition | Question | Preuve attendue | Qui |
|---|---|---|---|
| **1. Fonction vérifiée** | L'action et ses cas d'erreur marchent, sans régression ? | 2 contrôles requis verts ; test ajouté pour le cas corrigé | agent qui livre |
| **2. Usage examiné** | Sur mobile (390 px) et sur ordinateur (1 280 px), le visiteur voit-il quoi faire ensuite ? Le parcours touché a-t-il été revu dans chaque marché qui partage le composant ? | captures avant / après, largeurs et marchés indiqués | agent relecteur distinct |
| **3. Intérêt commercial expliqué** | Quelle intention sert l'action ? Mène-t-elle au bon modèle, sur la bonne boutique, avec le bon identifiant ? Comment mesurera-t-on l'effet ? | une phrase « ce que ça doit faire gagner » ; emplacement `/api/click` ; métrique prévue | agent qui livre ; Miguel pour les choix commerciaux |
| **4. Résultat vérifié en production** | homenura.com sert-il la version attendue ? Les liens d'un échantillon de pages portent-ils la bonne boutique et le bon identifiant ? | relevé daté après déploiement, distinct du build local | agent, après fusion |

**Statuts** : *validé* · *à vérifier* · *hypothèse* · *bloqué*.
- Un point sans preuve reste « à vérifier ».
- Une hypothèse de meilleure conversion peut être publiée avec une mesure prévue ; elle ne devient pas un résultat.
- Aucun « tout est bon » sans périmètre.
- Aucune moyenne ne masque un P0 (§ 7.1).

**Fiche de réception**, à coller dans la description de chaque PR qui touche une page commerciale :

```
Fonction   : contrôles requis verts · test ajouté : <fichier>                     · statut
Usage      : captures 390 / 1 280 px · marchés revus : <liste>                    · statut
Commercial : intention servie · emplacement de clic · métrique et date de lecture · statut
Production : URL relevées après déploiement · boutique et identifiant constatés    · statut
```

---

## 4. Le parcours d'achat, page par page et pays par pays

### 4.1 Les six étapes

| Étape | Ce qu'on vérifie chez Homenura | Preuves attendues |
|---|---|---|
| **Arrivée** | Le visiteur comprend-il l'utilité de la page et le pays servi, qu'il vienne de Google, d'une IA ou d'un lien partagé ? | parcours depuis la requête réelle (Search Console) ; accueil, page profonde, langue différente du pays |
| **Orientation et recherche** | Menu, rubriques, catégories, quiz et barre de recherche mènent-ils à une réponse ? La recherche ne couvre aujourd'hui que les produits du catalogue : un visiteur qui cherche « déshumidificateur » s'en sort-il ? | scénarios par besoin et budget ; recherche sans résultat ; retour arrière |
| **Comparaison** | Les différences qui comptent sont-elles lisibles (tableau, comparateur, duel) ? Peut-on ajouter et retirer un modèle, puis continuer vers le marchand ? | comparaison réelle de 2 puis 3 modèles ; tableau à 320 px ; clavier |
| **Décision** | Réponse rapide, 3 choix, « pour qui », limites et sources indépendantes aident-ils à trancher sans noyer l'action ? | lecture de l'écran initial et lecture longue ; variante au nom proche ; modèle sans offre |
| **Accès au prix** | Le bouton neutre est-il visible, explicite, facile à toucher ? Le lecteur comprend-il que le prix est sur Amazon ? La destination montre-t-elle le bon modèle dans son pays ? | position de la 1re action par gabarit ; destination relevée par marché (sans générer de clics en masse) |
| **Retour** | Le visiteur retrouve-t-il son choix ? Aucune sélection n'est gardée aujourd'hui (le comparateur n'utilise ni l'URL ni le navigateur), il n'y a pas de favoris, la newsletter existe. | parcours de retour une semaine après ; constat avant toute idée de fonctionnalité |

### 4.2 Par type de page

| Type | Routes (`/[lang]/…`) | Action commerciale (emplacement `/api/click`) | À vérifier en priorité |
|---|---|---|---|
| Accueil | `/` | podium, cartes et tableau (`picks`, `card`, `table`) | promesse locale, top 3 du marché, 1re action sur mobile |
| Rubriques | `/cuisine-connectee`, `/confort-air`, `/energie-domotique`, `/entretien-maison`, `/securite-maison`, `/outdoor-connecte` | passage vers les catégories | libellés locaux (sans « smart » inutile), catégories visibles |
| Catégories | `/[silo]/[category]`, `/cuisine-connectee/[category]` | verdict (`picks`) ; tableau à venir avec T3 (`table`) | choix et tableau avant le 3e écran mobile ; sources indépendantes |
| Comparateur | `/comparateur`, `/cuisine-connectee/comparateur` | `comparator` | à 320 px ; ajout, retrait ; continuer vers le marchand |
| Guides d'achat | `/guides/airfryers`, `/guides/[slug]`, `/guides/airfryer-vs-four`, `/guides/acheteur/[persona]` | `picks`, `table`, `product_block` | position du tableau (19e écran relevé sur le guide airfryer) |
| Articles | `/blog/[slug]` | `quick_answer`, `product_block` (`after-h2` ou `bottom`), `body_link`, `table`, `sticky_bar` | réponse rapide dans le 1er écran ; barre collante sans masquer le contenu ; bloc pertinent |
| Pages panne | `/guides/probleme/[problem]` | encadré « réparer ou remplacer ? » (`picks`) | étapes d'abord ; un remplacement crédible ensuite |
| Pages marché | `/vs/[slug]`, `/guides/[slug]` (une seule langue), `/news/[slug]` | `market_page` | verdict « choisissez A si… » ; 2 ou 3 choix ; lien du modèle local |
| Black Friday | `/black-friday`, `/black-friday/[category]` | `black_friday` (choix, page événement Amazon, essai Prime en France) | catégories du pays ; aucune remise ni compte à rebours ; état après le 1/12 |
| Saisonnier | `/nl/sinterklaas`, `/ca/boxing-day`, `/es/regalos-de-reyes` | aucune action directe : carte → catégorie → bouton | date de l'événement ; ce que la page dit le lendemain (K3) |
| Entretien des sols | `/us` et `/ca` : `/guides/floor-care` et ses 3 guides, outil de hauteur sous meuble | `floor_care` | pouces et cm ; hauteur fabricant ; lien du modèle nord-américain |
| Quiz | `/quiz`, `/cuisine-connectee/quiz` | `quiz` | résultat utile et action claire |
| Pages « meilleur pour » | `/[silo]/[category]/meilleur-pour/[persona]` | à relever | non indexées (`seo-scaled-content`) : ne pas y envoyer de trafic |
| Confiance | `/methodologie`, `/a-propos`, `/auteur`, mentions | aucune | méthode et critères compréhensibles, auteur assumé, aucune expertise prétendue |

### 4.3 Par marché

| Marché | Lien (boutique, identifiant) | Ce qui change le parcours | À vérifier d'abord |
|---|---|---|---|
| **fr** (+ Belgique) | amazon.fr, `homenuraen05-21` (toutes les ventes passées) ; essai Prime | seul marché qui vend : 14 ventes, 20,51 € en 2026 [STRATEGIE § 1] ; Belgique servie par /fr, absente de la liste Global Earning relevée | aucune régression ici ; les clics belges sont-ils payés ? (M1) |
| **it** | amazon.it direct, `homaviseit-21` ; recherche du modèle pour les ASIN absents (`AMAZON_MISSING_ASINS`) | 1er pays en clics, aucune vente au 01/11 ; duels en « o » ; Altroconsumo | la destination montre le bon modèle ; les ventes d'ici le 30/11 décident de son rang |
| **de** (+ AT, CH) | amazon.fr + Global Earning, `homavisede-21` | « Vergleich », jamais « Test » ; Autriche et Suisse absentes de la liste Global Earning | arrivée sur amazon.de du même modèle (hypothèse) ; libellés Smart Home |
| **es** | amazon.fr + GE, `homavisees-21` | Cecotec, OCU, brasero, consommation ; Reyes le 6/01 | idem ; pas de « bajo consumo » trompeur |
| **en** (Royaume-Uni) | amazon.fr + GE, `homaviseuk-21` | /en est vu 2 fois plus aux États-Unis qu'au Royaume-Uni ; références « UK » ; coût d'usage au plafond Ofgem | un Américain sur /en trouve /us ; coût recalculé le 25/11 |
| **nl** (+ Flandre) | amazon.fr + GE, `homavisenl-21` | Amazon 4e en ventes, bol et Coolblue attendus ; Belgique hors liste GE ; Sinterklaas | le lecteur accepte-t-il un seul bouton Amazon ? clics BE payés ? |
| **pl** | amazon.fr + GE, `homavisepl-21` | Amazon mineur face à Allegro (« Allegro d'abord » quand le compte existera) | accueil sans chapitre français ; vocabulaire « air fryer » |
| **sv** | amazon.fr + GE, `homavisese-21` | Amazon absent des recherches ; « bäst i test » jamais pour nous | conversion inconnue ; Black Week |
| **us** | recherche amazon.fr du modèle nord-américain + GE, `homaviseus-21` | `market-models` ; quarts, pouces, BTU, 120 V ; mention FTC près du 1er bouton | l'arrivée sur amazon.com montre-t-elle ce modèle ? (hypothèse, M1) ; aucune trace européenne |
| **ca** | idem, `homaviseca-21` | `market-models` ; « Canada » dans les requêtes ; visiteurs fr-CA envoyés sur /fr (euros) | idem US ; Boxing Day ; destination fr-CA (décision M5) |

Les clics de chaque marché ne valent rien tant que les rapports par identifiant ne montrent pas de commandes. Le point de contrôle du 30/11 [ETUDE § 3] tranche l'ordre des pays.

### 4.4 Scénarios de référence

Ces scénarios servent aux revues des agents (§ 5) et, traduits par un relecteur natif dans la langue du testeur, aux séances avec de vrais acheteurs (§ 6). Les tâches ne disent jamais où cliquer.

| ID | Marché · appareil | Point d'entrée | Tâche donnée | Réussite observable | Contrôle commercial associé |
|---|---|---|---|---|---|
| S1 | us · mobile | Google, ou `/us/guides/floor-care` | « Vous avez un chat et peu de place. Trouvez un robot aspirateur qui ramasse bien les poils et passe sous votre canapé, puis montrez comment vous vérifieriez son prix. » | mesure ou saisit la hauteur, garde un modèle qui passe, explique son choix, désigne « View on Amazon » comme l'accès au prix | modèle nord-américain seulement ; hauteur du fabricant ; lien `homaviseus-21` ; arrivée sur amazon.com relevée (M1) |
| S2 | it · mobile | `/it/guides/migliore-friggitrice-ad-aria-ninja`, ou l'article « ninja vs philips » | « Vous hésitez entre plusieurs friteuses Ninja pour une famille de quatre. Choisissez-en une et dites pourquoi. » | comprend « 1 ou 2 paniers », choisit, trouve « Vedi su Amazon » | amazon.it direct ; ASIN absent → recherche du bon modèle |
| S3 | nl · mobile | `/nl/sinterklaas` | « Trouvez un cadeau de Sinterklaas pour la maison, pour quelqu'un qui aime cuisiner. » | passe d'une carte à une catégorie, puis à un modèle | page datée 2026 ; plus aucune promesse après le 5/12 ; parcours carte → catégorie → bouton |
| S4 | de · ordinateur puis mobile | `/de/vs/dreame-oder-roborock` | « Vous hésitez entre Dreame et Roborock. Trouvez lequel convient le mieux à votre logement. » | énonce la différence qui compte pour lui, trouve le bouton | aucun « Test » ; `homavisede-21` ; arrivée Global Earning relevée |
| S5 | fr · mobile | requête « aspirateur laveur » → `/fr/guides/aspirateur-laveur` | « Vous voulez un aspirateur laveur à moins de 300 €. Choisissez-en un. » | distingue balai et robot, choisit, trouve le bouton | budget éditorial, aucun prix de modèle ; `homenuraen05-21` |
| S6 | es · mobile | `/es/guides/brasero-electrico` | « Trouvez un brasero pour votre table et ce qu'il coûterait par mois. » | trouve un modèle et l'information de consommation | consommation sourcée et datée ; `homavisees-21` |
| S7 | en · mobile | `/en/guides/best-heated-airer` | « Trouvez un séchoir chauffant et ce qu'il coûterait cet hiver. » | comprend le coût d'usage | coût au plafond Ofgem daté ; `homaviseuk-21` |
| S8 | changement de pays | lien `/fr/guides/airfryers` ouvert aux États-Unis | « On vous a envoyé ce lien ; vous habitez aux États-Unis. Trouvez une friteuse que vous pourriez acheter chez vous. » | rejoint /us (bandeau ou sélecteur) et un modèle vendu aux États-Unis | bandeau, choix mémorisé, page équivalente, `homaviseus-21` |
| S9 | fr · mobile, retour | `/fr/comparateur` | « Hier, vous avez comparé deux modèles. Retrouvez-les et vérifiez ce qu'il faudra racheter (filtres, sacs). » | retrouve sa sélection, ou dit qu'il ne peut pas | aujourd'hui rien n'est gardé : observer, ne pas présumer |
| S10 | au choix · mobile | page panne de la catégorie de l'appareil | « Votre appareil ne marche plus. Décidez si vous le réparez ou le remplacez. » | suit les étapes ; s'il remplace, trouve un modèle | encadré « réparer ou remplacer ? » (`picks`), modèle de la même catégorie |

Les scénarios pl, sv et ca (S11 à S13) seront écrits pendant la passe 2 avec un relecteur natif, à partir des fiches marché [ETUDE § 4.8 à 4.10].

### 4.5 Situations à risque, à inclure dans chaque revue visuelle

Petit écran (320 px) et texte agrandi (200 %) :
- titre de modèle long ;
- substitut nord-américain ;
- ASIN absent sur amazon.it ;
- page saisonnière le lendemain de la fête.

Superpositions :
- bandeau cookies, bandeau pays et barre collante affichés en même temps ;
- tableau étroit ;
- page sans aucun modèle vendu dans le marché.

---

## 5. Quatre revues séparées, puis confrontation

Construire et vérifier sont deux rôles différents : **celui qui livre ne valide pas sa propre livraison**. Chaque revue travaille d'abord seule, sans lire les notes des autres. Les constats sont ensuite confrontés et consolidés, comme dans une évaluation heuristique ([NN/g — How to Conduct a Heuristic Evaluation](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/)).

| Revue | Ce qu'elle juge | Exemples Homenura | Qui |
|---|---|---|---|
| **Ergonomie et conversion** | voir l'action, la comprendre, choisir ; hiérarchie des boutons ; écrans mobiles | position de la 1re action par gabarit, tableau, barre collante, bandeaux superposés, comparateur à 320 px, outil de hauteur sous meuble | agent A ; Miguel en arbitrage |
| **Contenu et langues** | le conseil aide-t-il à décider ? Vocabulaire et marques du pays, sources locales datées, aucun faux test | « Airfryer » (DE), « o » (IT), « onder » (NL), unités US, Altroconsumo / OCU / Which?, « bäst i test » en citation seulement | agent B, **puis un relecteur natif par marché** |
| **SEO** | pages découvrables et indexées ; titres sur les mots réellement tapés ; canonique, hreflang, sitemap, données structurées, `llms.txt` ; au plus 5 nouvelles pages indexées par semaine et par langue | `check-category-heads`, Search Console par pays et par répertoire | agent C |
| **Technique et affiliation** | boutique, identifiant, modèle local, mention, emplacement de clic, conformité Amazon, erreurs, performance mobile, production identique au build | `lib/amazon.ts`, `market-models`, `/api/click`, logs Vercel | agent D |

**Format obligatoire d'un constat** (un constat sans preuve est rejeté) :

```
ID · date · revue (ergonomie | contenu | SEO | technique)
Page          : URL complète · marché · appareil et largeur (320 / 390 / 768 / 1 280 px) · navigateur
Capture       : fichier (pages Homenura seulement ; pour une page Amazon, l'URL et une description)
Problème      : ce qu'on observe, pas une opinion
Conséquence   : quel clic, quelle vente ou quel risque de conformité est en jeu
Correction    : proposée
Vérification  : comment on saura que c'est corrigé, et le contrôle permanent prévu (§ 8)
Sévérité      : P0 | P1 | P2 | P3   ·   Solidité : fait observé | bonne pratique | hypothèse
```

**Consolidation** :
- fusionner les doublons ;
- écrire les désaccords au lieu de les lisser ;
- Miguel tranche les P0 et P1 contestés.

Ni l'étiquette « spécialiste » ni le nombre d'agents ne prouvent la qualité d'une revue. Une revue d'agent ne remplace ni la relecture d'un locuteur natif ni l'observation d'un acheteur. Un marché n'est jamais « validé » sur la seule foi des versions française et américaine.

---

## 6. Observer de vrais acheteurs

Un agent inspecte l'interface. Il ne sait pas ce qu'un acheteur pressé comprend sur son téléphone. Les séances suivent [NN/g — Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/) : tâches réalistes, participants représentatifs, observation sans orienter.

**Participants** :
- environ 5 personnes par vague ;
- elles ont acheté, ou comptent acheter dans les 6 mois, un appareil d'une de nos catégories ;
- chacune utilise son propre téléphone ;
- autant que possible, personne qui connaît le projet.

**Ordre des vagues** :
1. France : seul marché qui vend aujourd'hui.
2. Italie : 1re en clics. Ou les États-Unis, si `homaviseus-21` vend d'abord.

Cinq personnes trouvent les blocages fréquents d'un marché. Elles ne valident pas dix pays.

**Déroulé** (30 minutes environ, en présence ou en visio avec partage de l'écran du téléphone) :
- 3 ou 4 tâches tirées du § 4.4, dans la langue du testeur ;
- consigne « pensez à voix haute » ;
- on note : réussite, hésitations, erreurs, retours en arrière, et ce que la personne croit qu'il va se passer quand elle touche « Voir sur Amazon » ;
- on note aussi si elle remarque la mention d'affiliation et les sources, et si elle leur fait confiance.

**Interdits** :
- dire où cliquer ou aider ;
- demander « vous trouvez le site joli ? » ;
- faire acheter ;
- rémunérer un clic ou un achat : la compensation paie le temps, jamais une action sur un lien affilié.

La tâche peut s'arrêter dès que le bouton est identifié. Si la personne ouvre Amazon, noter l'heure et la page : ce clic est réel, porte un identifiant, et sera retiré du rapport hebdomadaire.

**Sortie** :
- une grille tâche × participant (réussi / réussi avec aide / échec) ;
- de courtes citations ;
- les constats versés dans les registres du § 7.

Aucune donnée personnelle dans le dépôt : seulement un profil anonyme (pays, tranche d'âge, appareil).

---

## 7. Deux registres : défauts à corriger, occasions de revenu à évaluer

Les deux registres sont séparés : un défaut se corrige, une occasion se prouve. Proposition de rangement pour chaque passe : `docs/croissance/checkups/AAAA-MM-JJ/defauts.md`, `occasions.md` et `captures/`. Les captures montrent des pages Homenura seulement, jamais une page Amazon.

### 7.1 Registre des défauts

Colonnes : ID · constat (format du § 5) · sévérité · marchés et gabarits touchés · correction · contrôle permanent créé (§ 8) · statut · date de vérification en production.

| Sévérité | Chez Homenura | Délai |
|---|---|---|
| **P0** | lien vers une boutique ou un identifiant hors de `lib/amazon.ts` ; modèle non vendu dans le marché lié ; image ou prix Amazon visible ; mention absente ou paraphrasée ; « test » revendiqué ; page commerciale en erreur ; information commerciale fausse (promotion périmée, saison finie annoncée en cours) ; faille de sécurité | correction immédiate, ou retrait ciblé de l'élément |
| **P1** | friction forte sur une page commerciale fréquente : 1re action hors des 2 premiers écrans mobile, bouton masqué par un bandeau, vocabulaire non local sur une page de tête, page commerciale indexée sans action d'achat | avant d'y envoyer plus de trafic, et avant le Black Friday pour les hubs BF et les catégories de saison |
| **P2** | amélioration plausible, sans blocage | mesurer, puis expérimenter |
| **P3** | finition à faible impact probable | quand la capacité le permet |

### 7.2 Registre des occasions

Colonnes : besoin du visiteur · pages et marchés · source de l'idée · solidité · valeur probable · coût · risque (dont conformité) · mesure · préalable · décision (adopter, tester, différer, abandonner).

**Valeur probable** : dire quel facteur l'occasion fait bouger, de combien en ordre de grandeur, et sur quelle portée (pages × visites). La formule de référence est celle de STRATEGIE § 1 :

> visites × taux de clic marchand × taux de commande × panier × commission

Une estimation reste une estimation, jamais une prévision de chiffre d'affaires.

**Pistes à évaluer** (ce ne sont pas des lacunes démontrées) :

| Occasion | Marchés | Solidité aujourd'hui | Préalable · risque | Mesure |
|---|---|---|---|---|
| **API Creators** : prix, images et liens /dp/ autorisés | tous | levier le plus large ; « une recherche convertit moins qu'une fiche » reste une hypothèse non mesurée chez nous | page Amazon réparée (M4) | commandes ÷ clics par identifiant, avant / après, sur les mêmes pages |
| **Encadré multi-marchands** (T10) : Awin (OTTO, Coolblue, Euronics, Allegro), Kelkoo, bol, Tradedoubler, Kwanko | NL, PL, SE d'abord, puis DE et FR | fait observé : Amazon 4e aux Pays-Bas, mineur en Pologne, absent des recherches suédoises [ETUDE § 3] | une candidature acceptée (M2, M3) ; corriger d'abord « seule source de revenus » ; jamais de prix dans un bloc qui porte un bouton Amazon | clics par marchand ; commissions validées par réseau |
| **Liens directs** amazon.com / amazon.ca (`AMAZON_DIRECT_MODEL_STORES`) ou compte Partenaires US | US, CA | hypothèse : la recherche relayée par Global Earning convertirait mal | vérification SiteStripe ; M1 | commandes `homaviseus-21` / `homaviseca-21` |
| **Gabarit « réponse d'abord »** (T3) | tous, d'abord 6 catégories de saison | bonne pratique [ETUDE § 2.6.3] ; fait : tableau au 19e écran | K1, K2 | clics `table` et `picks` par visite, à périmètre constant |
| **Barre collante** étendue aux guides et pages marché | tous | hypothèse (elle n'existe que sur les articles) | superpositions (K11) | clics `sticky_bar` moins la baisse ailleurs (cannibalisation) |
| **Libellé du bouton** (« Check price on Amazon ») | US d'abord | hypothèse | libellé neutre obligatoire, jamais « Amazon.com » | voir le § 9.4 : pas d'A/B décisionnel à ce volume |
| **Recherche avec autocomplétion** vers catégories, marques et duels (T7) | tous | bonne pratique (vergleich.org : comparatif en 2 gestes) ; la recherche actuelle ne couvre que le catalogue | — | `search_query` sans résultat ; clics après recherche |
| **Consommables et entretien** (détartrant, filtres, sacs) | DE (café), puis tous | fait : 6 accessoires d'entretien dans le top 30 café d'amazon.de [ETUDE § 4.2] | taux de commission de la catégorie | clics et commandes sur ces liens |
| **Choisir les catégories selon la commission** | tous | fait : gros électroménager à 2,5 % [ETUDE § 2.2] ; barème de chaque boutique à relever et dater | taux réellement appliqué via Global Earning à vérifier (M1) | gains par clic par catégorie |
| **Pages saisonnières** supplémentaires : Mikołajki, mellandagsrea, soldes de janvier, Boxing Day UK | PL, SE, FR, ES, UK | bonne pratique (T11) | K3 obligatoire | clics carte → catégorie → bouton |
| **Retour sans compte** (sélection du comparateur gardée dans l'URL) | tous | hypothèse, à confirmer par S9 | — | retours sur `/comparateur` |
| **Alerte de prix** | — | **exclue avec Amazon** : suivi et alerte de prix interdits sans l'API [STRATEGIE § 3] | possible seulement avec un flux marchand autorisé et un vrai service d'envoi, jamais à côté d'un bouton Amazon | — |
| **Newsletter** vers les comparatifs | FR | hypothèse | relire les conditions Amazon sur les liens dans les e-mails avant d'en mettre un | inscriptions, clics |

**Classer la solidité de chaque proposition** :
- **Fait observé** : blocage constaté, confusion reproduite, chiffre de nos rapports.
- **Bonne pratique pertinente** : étayée par une recherche d'utilisabilité et applicable à un comparateur affilié.
- **Hypothèse à tester** : idée venue d'un concurrent ou d'une intuition. Aucun gain n'est acquis.

**Concurrents** : observer 3 concurrents par marché prioritaire chaque mois (§ 10.1).
- Le look d'un site qui réussit ne prouve pas que chaque élément rapporte.
- Plusieurs tactiques de vergleich.org sont explicitement à éviter [ETUDE § 2.5] : annonces avant le choix éditorial, compte à rebours, mois automatique dans le titre, faux tests.
- Les méthodes d'un vendeur direct se transposent mal : Homenura ne contrôle ni le stock, ni le prix, ni le paiement.

### 7.3 Priorisation

On garde la grille du backlog : **impact × (6 − effort)**, sur 25 [ETUDE § 6]. On y ajoute une **confiance** : 1 pour une hypothèse, 2 pour une bonne pratique, 3 pour un fait observé.

Les P0 passent hors grille. Les dates de saison (Black Friday le 27/11, pakjesavond le 5/12, Reyes le 6/01) priment sur le score. La capacité de relecture avant le Black Friday reste celle de l'ETUDE § 6.5.

---

## 8. Chaque défaut devient un contrôle permanent

**Règle** : tout P0 ou P1 corrigé ajoute, dans la même PR, un contrôle qui l'aurait attrapé. Si ce n'est pas automatisable (qualité d'une phrase, pertinence d'un conseil), on l'ajoute à la liste de contrôle manuelle de la revue concernée, avec la raison. Une amélioration commerciale reste suivie jusqu'à ce que son effet soit observé, même quand le code est fini.

**Contrôles à ajouter** :

| ID | Contrôle permanent | Ce qu'il attrape | Où | Origine | Priorité |
|---|---|---|---|---|---|
| K1 | **1re action d'achat dans les 2 premiers écrans mobile** (390 × 844), gabarit par gabarit, avec un seuil propre à chacun (article : réponse rapide dans le 1er écran) | bouton présent mais introuvable | Playwright, nouveau projet mobile (WebKit et Chromium) | ETUDE § 2.4 | P1 ; d'abord hubs BF et catégories de saison |
| K2 | **Tableau avant le 3e écran mobile** sur les gabarits « réponse d'abord » | tableau relégué en bas de page | Playwright mobile | T3 | à la réception de T3 |
| K3 | **Dates saisonnières** : chaque page datée (BF, Sinterklaas, Boxing Day, Reyes) a une date de fin. Passé cette date : plus de promesse, plus d'urgence, année suivante préparée. La date « mis à jour » visible égale `dateModified` | promotion ou fête périmée | Vitest avec date simulée, comme le garde des promotions BF | Homavise ; ETUDE § 2.5 | P1, avant le 5/12 |
| K4 | **Cohérence pays** : langue, menu, pied de page, devise, unités et mention conformes au marché ; changement de pays vers la page équivalente ; choix mémorisé ; aucun bandeau une fois le choix fait | mauvais pays ou page d'accueil au lieu de la page équivalente | Vitest et Playwright (cookie pays simulé) | entrée internationale | à la réception de `feat/country-entry` |
| K5 | **Boutique et identifiant dans le HTML servi** : chaque lien sponsorisé des pages de chaque langue porte ceux de son marché | régression de rendu invisible pour les tests de source | Playwright : étendre « Amazon compliance (served HTML) » | `lib/amazon.ts` | P0, faible effort |
| K6 | **Aucun lien vers un modèle non vendu** : relevé mensuel des destinations par marché (ASIN et recherches), à faible cadence et **sans identifiant de suivi** pour ne créer aucun clic affilié ; `AMAZON_MISSING_ASINS` tenu par marché | modèle retiré, ASIN disparu, arrivée Global Earning vide | script mensuel, plus relevé SiteStripe de Miguel quand la boutique bloque les robots | IT 31/10, US/CA 01/11 | P0 |
| K7 | **Toute page commerciale indexable porte une action d'achat** avec emplacement, sauf liste d'exceptions motivées | page panne ou article sans bouton | Vitest (routes du sitemap × gabarit) | STRATEGIE § 2.3–2.4 | P1 |
| K8 | **Scan du HTML généré en CI** : lancer `amazon-compliance` après `next build` dans le job E2E (le test existe mais il est sauté) | image Amazon dans une page générée hors des 4 pages du smoke | `.github/workflows/ci.yml` | § 2.2 | P0, faible effort |
| K9 | **Recette production après chaque déploiement** : un échantillon par langue et par gabarit sur homenura.com (statut, version servie, mention, boutique, identifiant), sans cliquer les liens | vert en local, faux en ligne | Playwright avec `PLAYWRIGHT_BASE_URL`, ou script | § 3, condition 4 | P1 |
| K10 | **Lighthouse mobile et hors France** (us, it, de) sur 3 gabarits | lenteur mobile non mesurée | `lighthouserc.js` (2e collecte mobile) | § 2.2 | P2 |
| K11 | **Superpositions** : bandeau cookies, bandeau pays et barre collante ne masquent pas la 1re action à 320 et 390 px | bouton caché | Playwright mobile | § 4.5 | P1 |
| K12 | **Mention d'affiliation près du 1er bouton** sur /us et /ca (FTC) | non-conformité FTC | Vitest ou Playwright | ETUDE § 5.6 (S2) | P1, avec la tâche |
| K13 | **Clics sans identifiant reconnu = 0**, et écart entre `/api/click` et les clics Partenaires par identifiant | lien cassé, identifiant perdu, script de mesure en panne | rapport hebdomadaire (script) | README « Clics affiliés » | P1 |
| K14 | **Bloc d'achat de la catégorie de la page**, étendu aux pages marché et saisonnières (déjà couvert ailleurs par `article-products` et `problem-buy-box`) | bouton hors sujet | Vitest | STRATEGIE § 2.4 | P2 |

---

## 9. Piloter par les commissions

Plus de clics ne compte que si cela amène des achats pertinents. Le juge final, ce sont **les commandes attribuées, les commissions validées, les annulations et les coûts**, par marché.

### 9.1 Sources de données

| Source | Ce qu'elle mesure | Périmètre | Accès | Limite |
|---|---|---|---|---|
| Search Console | impressions, clics Google, position, par pays et par page | recherche Google | Miguel (export pour les agents) | aucun volume absolu ; filtrer pays **et** répertoire (US + `/us/`) |
| Bing Webmaster (M7, à ouvrir) | volumes de mots-clés, rapport IA | Bing | Miguel | pas encore ouvert |
| Vercel Web Analytics | visites sans cookie par route ; événements `click_affiliate` (`placement`, `market`), recherche, comparateur, quiz, newsletter | navigateurs qui chargent le script | projet Vercel | 2 propriétés par événement ; routes communes aux 10 langues |
| `/api/click` (logs Vercel) | chaque clic sponsorisé : page, marché, emplacement, modèle, boutique, identifiant | clics avec JavaScript actif | `vercel logs … --no-branch`, puis `scripts/analytics/affiliate-clicks.ts` | aucune donnée personnelle ; durée de conservation à vérifier, donc export hebdomadaire ; périodes sans chevauchement |
| Partenaires Amazon (Associates Central) | clics Amazon, commandes, articles expédiés, retours, gains, par identifiant | ce qu'Amazon attribue, y compris d'autres produits achetés après le clic | Miguel, ou un agent dans son navigateur à sa demande, en lecture seule | pas d'export automatique aujourd'hui ; remontée Global Earning des autres boutiques à vérifier (M1) |
| Réseaux à venir (Awin, Kelkoo, bol, Allegro, Tradedoubler, Kwanko) | clics, ventes, commissions validées ou refusées | par programme | Miguel | délais de validation propres à chaque programme |
| Coûts | Vercel, domaine, outils, heures de relecture humaine, testeurs | — | Miguel | à tenir dans le rapport mensuel |

Ces sources n'ont **pas le même périmètre** : visites Vercel, balises `/api/click` et clics Amazon ne se recoupent pas un pour un. On ne rattache jamais une commande à un clic d'interface. On compare des tendances à périmètre constant.

### 9.2 Indicateurs

| Indicateur | Calcul | Ce qu'il dit |
|---|---|---|
| Taux de clic marchand | clics `/api/click` ÷ visites Vercel, par marché et par gabarit | qualité du parcours |
| Taux de commande | commandes ÷ clics Amazon, par identifiant | pertinence du clic ; efficacité de Global Earning par pays |
| Gain par clic | gains ÷ clics Amazon, par identifiant | ce que vaut un clic dans chaque marché |
| Revenu pour 1 000 visites | gains ÷ visites × 1 000 | ordre de grandeur, pas une cible : Homenura ≈ 35 € [STRATEGIE § 7], vergleich.org 257 à 277 $ brut [ETUDE § 2.1] |
| Retours et annulations | articles retournés ÷ expédiés ; commissions annulées | un clic qui finit en retour ne paie pas |
| Coût par marché | heures de relecture et outils, rapportés aux gains du marché | rentabilité de l'effort par pays |

**Règles de lecture** :
- une hausse des clics sans hausse des commandes ne prouve aucune amélioration ;
- une hausse pendant le Black Friday ne prouve pas l'effet d'une modification ;
- les clics de recette et de séances de test sont consignés et retirés.

### 9.3 Les indicateurs alimentent les décisions déjà fixées

- **Point de contrôle du 30/11** [ETUDE § 3, M1] : sans vente `homaviseit-21`, la France repasse n° 1. La même règle vaut pour l'Allemagne et l'Espagne.
- **Comptes et liens** : compte Partenaires US ou CA direct, liens directs, ordre des boutons par marchand (M5).
- **Ordre du backlog** après le Cyber Monday.

### 9.4 Expériences

Avant tout A/B, on écrit :
- l'hypothèse ;
- la métrique principale (commandes ou gains par visite plutôt que clics) ;
- l'effet minimal intéressant ;
- la taille d'échantillon ;
- la règle d'arrêt.

Au 30/10, Google apportait 455 clics en 28 jours, tous marchés confondus [STRATEGIE § 1]. À ce volume, **aucun A/B de libellé ne peut désigner de gagnant**. Le test de libellés prévu en S3–S4 [ETUDE § 5.6] sert donc à observer, pas à décider, sauf si un calcul d'échantillon préalable dit le contraire. À faible audience : corriger ce qui est observable et passer par les séances du § 6.

---

## 10. Cadence et rôles

### 10.1 Cadence

| Moment | Travail | Qui | Sortie |
|---|---|---|---|
| **À chaque livraison** (PR) | 2 contrôles requis ; fiche de réception (§ 3) ; revue visuelle à 390 et 1 280 px du parcours touché, dans chaque marché qui partage le composant ; recette production après fusion (K9) | l'agent qui livre ; un agent relecteur distinct ; Miguel pour les P0 et les choix commerciaux | fiche remplie : validé / à vérifier / hypothèse / bloqué |
| **Chaque lundi** : rapport commercial | export `/api/click` ; Search Console par pays ; Vercel ; Partenaires par identifiant ; réseaux | agent pour la collecte et la synthèse ; Miguel pour Partenaires et réseaux | 1 page : tableau par marché (visites, clics marchands, clics Amazon, commandes, articles expédiés, retours, gains), 3 actions les plus utiles, effet des actions précédentes, incertitudes |
| **1er lundi du mois** : benchmark | 3 concurrents par marché prioritaire [ETUDE § 3] ; 3 scénarios du § 4.4 rejoués ; SERP et demandes locales ; barème de commission relu | agents (pages accessibles) ; Miguel pour les pages bloquées aux agents (M8) | décisions : adopter, tester, différer ou abandonner |
| **Du 20/11 au 1/12** | suivi quotidien : liens et pages BF, dates, erreurs Vercel, Search Console | agent | alerte seulement en cas d'anomalie ou d'intervention nécessaire |
| **Lendemain de chaque fin** : 2/12 (promotions BF affichées jusqu'au lendemain du Cyber Monday), 6/12, 27/12, 7/01 | K3 : la page ne promet plus rien | agent | constat daté |
| **Chaque trimestre** | vague de testeurs (§ 6) ; veille des sitemaps du réseau vergleich.org (T14) | Miguel (recrutement) ; agent (préparation et synthèse) | grille de tâches ; registres à jour |

### 10.2 Qui fait quoi

| Tâche | Agents | Miguel | Testeurs et relecteurs |
|---|---|---|---|
| Contrôles automatiques et nouveaux contrôles (§ 8) | écrivent et maintiennent | approuve les PR | — |
| Revues séparées (§ 5) | une revue par agent, captures et preuves | arbitre les P0/P1 contestés | relecteur natif pour « contenu et langues » |
| Observation d'acheteurs (§ 6) | préparent les tâches et la grille, font la synthèse | recrute, fixe le budget, valide les tâches | acheteurs réels sur leur téléphone |
| Données | logs `/api/click`, Vercel, synthèse | Partenaires Amazon, Search Console, réseaux, coûts ; rares vrais clics de vérification, consignés | — |
| Décisions | proposent, avec preuves | tranchent : comptes, marchands, ordre des pays, budgets, validations juridiques (M9) | — |

### 10.3 Rien de tout cela ne tourne seul aujourd'hui

La cadence n'existera que si l'on organise explicitement :
1. **les tâches planifiées** du lundi et du 1er lundi du mois (à créer sur décision de Miguel) ;
2. **la lecture des rapports Partenaires** : export par Miguel chaque lundi, ou lecture par un agent dans son navigateur, à sa demande ;
3. **un budget** pour les testeurs et les relecteurs natifs ;
4. **l'export Search Console** par pays.

Sans ces quatre points, ce protocole reste un document. Aucun travail ne se poursuit de façon invisible entre deux échanges.

---

## 11. Premier check-up proposé

| Passe | Dates | Périmètre | Sortie |
|---|---|---|---|
| **0 — P0 seulement** | 2/11 → 15/11 | K5 et K8 (faible effort) ; revue « technique et affiliation » des hubs Black Friday des 10 marchés ; S1, S2 et S5 en revue d'agent ; /us et /ca après T1. Aucune page neuve hors du plafond de l'ETUDE § 6.5 | registre des défauts P0/P1 ; corrections P0 |
| **Black Friday** | 20/11 → 1/12 | suivi quotidien (§ 10.1) | alertes ; relevé du 30/11 pour le point de contrôle |
| **1 — revues complètes** | 1/12 → 19/12 | 4 revues séparées sur fr, it, de, us, tous gabarits ; scénarios S1 à S10 ; K1 à K4, K7 et K9 programmés | registres consolidés ; premier rapport hebdomadaire complet |
| **Testeurs, vague 1** | décembre | 5 acheteurs en France, sur mobile | grille et constats |
| **2 — autres marchés** | janvier | es, en, nl, pl, sv, ca avec relecteurs natifs ; S11 à S13 ; vague de testeurs en Italie, ou aux États-Unis si `homaviseus-21` vend d'abord | registres ; décision sur l'ordre de la vague 2 [ETUDE § 3] |

Le contrôle automatique couvre toutes les routes et toutes les offres. La revue visuelle couvre chaque gabarit et les situations à risque du § 4.5.

---

## 12. Décisions demandées à Miguel

1. Valider ce protocole comme cadre du prochain audit, et la passe 0 avant le 15/11.
2. Créer les deux tâches planifiées (rapport du lundi, benchmark mensuel), ou les lancer à la main.
3. Choisir qui lit les rapports Partenaires chaque lundi : Miguel, ou un agent dans son navigateur.
4. Fixer un budget pour 5 testeurs par vague et un relecteur natif par marché.
5. Confirmer l'emplacement des registres (`docs/croissance/checkups/`).
6. Accepter que le test de libellés de novembre serve à observer, pas à décider (§ 9.4).

---

## Références

- [NN/g — How to Conduct a Heuristic Evaluation](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/) : évaluateurs séparés, constats consolidés ensuite, complément des tests avec des utilisateurs.
- [NN/g — Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/) : tâches réalistes, participants représentatifs, observation sans orienter.
- [Baymard — Button Design](https://baymard.com/blog/button-design) : hiérarchie, taille, emplacement et libellé des actions.
- Documents internes : [`CLAUDE.md`](../../CLAUDE.md), [`ETUDE-MARCHES-2026-11.md`](ETUDE-MARCHES-2026-11.md), [`STRATEGIE-2026-10.md`](STRATEGIE-2026-10.md), [`SEO-PLAN-2026-10.md`](SEO-PLAN-2026-10.md), [`README.md`](../../README.md) (« Clics affiliés »).
- Protocole d'origine : « Homavise — contrôle qualité et amélioration commerciale », 01/11/2026 (document d'un autre projet, adapté ici).
