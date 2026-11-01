# vergleich.org / Team Internet : comment ils attaquent les pays, et ce qu'Homenura en fait

Date : 01/11/2026. Objet : catégories, mots-clés, parcours et méthode d'expansion du réseau vergleich.org, pour adapter la stratégie pays d'Homenura.
**Point de départ, non refait ici** : `STRATEGIE-2026-10.md` § 7–8 (modèle vergleich.org), `SEO-PLAN-2026-10.md`, `seo-etudes/dach.md` § 3 (analyse complète de vergleich.org en Allemagne : gabarits, sitemap de 18 797 URL, Similarweb, droit « Test »), et les études pays (`fr-uk.md`, `it-es.md`, `nl-pl.md`, `geo-ia.md`). Les études pays de cette série (`studies/fr.md`, `it.md`, `se.md`, `ca.md`, `us-market.md`…) détaillent déjà meilleurs.fr, miglioreconsiglio.it et bestpick.com : ce document fait la **synthèse multi-pays** et ajoute les **comptes publiés de Team Internet 2022–2026**.
Règles Homenura rappelées : jamais « testé / Test » pour nous-mêmes ; ni prix ni images Amazon avant l'API Creators.

## 0. Méthode, sources, limites

| Code | Ce qui a été lu | Fiabilité |
|---|---|---|
| [T1]–[T7] | Comptes officiels de Team Internet Group plc (rapports annuels 2022 à 2025, semestriels 2025 et 2026), téléchargés et lus en entier le 01/11/2026 | Source primaire, chiffres publiés |
| [V1] | Sitemaps complets des 5 sites étrangers du réseau (meilleurs.fr, miglioreconsiglio.it, mejoraelige.es, pickbest.co.uk, bestpick.com), analysés par script le 01/11/2026 | Mesuré (le `lastmod` indique la dernière modification, pas la date de publication) |
| [V2] | Page « friteuse à air » de chacun des 5 sites (code HTML : titres, balisage, marchands, nombre de mots) + pages « à propos » | Mesuré, 1 page par pays : un échantillon |
| [SW] | Similarweb, aperçus gratuits, septembre 2026 | **Estimations**, libellés parfois ambigus ; Similarweb sous-estime vergleich.org (voir § 2) |
| [D] | `seo-etudes/dach.md` (vergleich.org lu en direct le 30/10/2026, sources S1–S19) | Déjà sourcé |
| [L-xx] | Sources locales par pays, relevées dans les études précédentes ou lues ce jour (liste § 9) | Indiqué pour chacune |

**Limites franches** :
- **Le quota de recherches web de la session était épuisé** (limite partagée entre agents) : aucune recherche Google, aucun article de presse trouvé par recherche. Tout vient de pages connues lues directement. Je ne l'ai pas contourné.
- **vergleich.org bloque la lecture automatique** (HTTP 403) : je n'ai pas relu le site allemand ; je m'appuie sur `dach.md` (lu le 30/10).
- **Effet des mises à jour Google sur vergleich.org : non mesuré.** Sistrix et Ahrefs n'étaient pas accessibles. Je rapporte seulement ce que le groupe écrit lui-même (§ 5).
- Le lien avec « Tremor » ou « Rapid Media » cité dans le brief **n'apparaît dans aucune source lue**. La chaîne de propriété vérifiée est : VGL → CentralNic (mars 2022) → CentralNic renommé Team Internet Group plc (2023).
- Canada, Pays-Bas, Pologne, Suède : vergleich.org n'y a pas de site (pied de page lu le 01/11/2026). Les constats locaux viennent des études pays existantes.

---

## Résumé décisionnel (les 5 conclusions)

1. **vergleich.org reste un champion allemand qui achète son trafic.** En 2025, 95 % de son volume d'affaires reste en Allemagne, Autriche et Suisse (part du volume de ventes hors DACH : 4,8 % ; 5,2 % au 1er semestre 2026) [T1][T2]. Le groupe écrit qu'il a adopté un **modèle « publicité d'abord »** (« SEA-first »), et que dépendre du trafic naturel « freine l'usage de l'IA » [T1]. Le coût des ventes absorbe 67 % du chiffre d'affaires du segment (44 M$ sur 65,3 M$) [T1]. Les 5 sites étrangers sont des **traductions automatiques du catalogue allemand** : calques (« test o confronto », « Prueba y comparativa », « test or comparison »), marques allemandes en France et aux États-Unis, **aucune page « X vs Y », « problème » ou « question »**, pas d'auteur nommé, 2 100 à 2 600 mots par page contre ≈ 6 300 en allemand [V1][V2][D].
2. **Attaquer d'abord l'Italie, puis l'Espagne.** C'est là que le réseau est le plus faible. Sites estimés à ≈ 16 k et ≈ 32 k visites par mois [SW]. La moitié des URL italiennes (50 %) et 44 % des URL espagnoles n'ont pas été modifiées depuis plus d'un an [V1]. Il manque aussi les termes que les gens tapent vraiment : aucune page « condizionatore portatile » ni « robot aspirador friegasuelos » [V1][L-IT][L-ES]. Or l'Italie est déjà le 1er pays d'Homenura (136 clics sur 28 jours).
3. **La France est le pays où la menace monte.** meilleurs.fr est rentable depuis 2025. Il pèse déjà plus que tous les autres marchés étrangers du groupe réunis [T1]. Et le groupe vend son pôle noms de domaine (DIS) : vergleich.org deviendra son activité principale [T1][T2]. Il ne faut donc pas se battre sur « comparatif X ». Il faut gagner là où meilleurs.fr n'a rien : duels, pannes, consommation, citations de Que Choisir et des Numériques, « panneau solaire plug and play ».
4. **Pays-Bas, Pologne, Suède et Canada : vergleich.org est absent. Aux États-Unis, il est presque absent** (bestpick.com : 248 URL dont ≈ 197 comparatifs, 0 page « vs ») [V1]. Les leaders y sont d'autres acteurs locaux : Consumentenbond et Coolblue, Allegro et Ceneo, Råd & Rön et Testfakta, BestReviews et Consumer Reports. **ConsumerSearch a fermé** [L-US]. Y entrer par la longue traîne (problème, duel, « sans abonnement », consommation). Vérifier que les clics Amazon convertissent avant de produire en masse.
5. **Ce qu'on reprend, ce qu'on fait autrement.**
   - **À reprendre** : le parcours bâti sur 4 façons de choisir (meilleur, plus vendu, meilleur rapport qualité-prix, prix) ; l'encadré multi-marchands alimenté par des flux (Kelkoo : Conforama, Carrefour, MediaWorld, ManoMano, Currys, AO, Kohl's…), qui fournit prix et images légalement **avant** l'API Amazon ; les liens vers les déclinaisons.
   - **À faire autrement** : un seul domaine relié par hreflang (eux ont 6 domaines séparés, sans hreflang : chaque pays repart de zéro) ; le vocabulaire tiré des sources locales ; une vraie fraîcheur (eux affichent « Mis à jour : 29/10/2026 » sur une page dont la date technique est le 03/12/2024) ; Amazon Global Earning ; aucun « test ».

---

## 1. Qui est derrière : propriété et taille

| Fait | Valeur | Source |
|---|---|---|
| Rachat | VGL Verlagsgesellschaft (Berlin, fondée en 2014) achetée par CentralNic le **07/03/2022** : valeur d'entreprise 60 M€, 67 M€ payés à la signature, complément jusqu'à 38 M€ sur 3 ans | [T6] note 25 |
| Profil au rachat | « Plus de 270 millions de visites par an », trafic naturel « complété par une grande opération d'achat d'espace », « source importante d'acquisition de clients pour Amazon » en Allemagne | [T6] |
| Entité aujourd'hui | Segment « Comparison » de **Team Internet Group plc** (AIM : TIG) = VGL Publishing AG et ses filiales, « sites de comparaison comme Vergleich.org » | [T3][T4] |
| Sites du réseau (pied de page, 01/11/2026) | vergleich.org (DE/AT/CH), **meilleurs.fr**, **miglioreconsiglio.it**, **mejoraelige.es**, **pickbest.co.uk**, **bestpick.com** (États-Unis). Aucun site NL, PL, SE, CA | [V2] |
| Allemagne | « Plus de 16 millions de visites par mois » ; partenaires Amazon, eBay, OTTO, billiger.de ; fiches produit dans la 1re ligne de Google Shopping (« nouveau canal d'acquisition ») ; 367 500 fiches produit dans plus de 18 500 catégories comparées | [T1] |
| Statut du groupe | Revue stratégique : vente du pôle noms de domaine (DIS) « à un stade avancé », valeur attendue > 160 M$. Sans ce pôle, le groupe resterait « centré sur le consommateur », autour de la plateforme Comparison | [T1][T2] |

### 1.1 Chiffres du segment Comparison, 2023 → S1 2026

| | 2023 | 2024 | 2025 | S1 2025 | S1 2026 |
|---|---|---|---|---|---|
| Chiffre d'affaires brut (M$) | 44,2 | 63,0 (+43 %) | 65,3 (+4 %) | 27,9 | **32,9 (+18 %)** |
| Revenu net (M$) | 15,7 | 22,4 | 20,8 (−7 %) | 9,0 | **12,4 (+38 %)** |
| EBITDA ajusté (M$) | 9,2 | 16,1 | 12,3 | 5,4 | **8,4 (+56 %)** |
| Sessions (millions) | 145,7 | 188,5 (+29 %) | 169,4 (−10 %) | 179,3 (sur 12 mois) | **211,6 (sur 12 mois, +4 %)** |
| Revenu pour 1 000 sessions | 203 $ | 249 $ | 257 $ | 236 $ | **277 $** |
| Part du volume de ventes hors DACH | — | 0,4 % | 4,8 % | 5,0 % | **5,2 %** |

Sources : [T5] [T4] [T1] [T3] [T2]. Attention : les indicateurs de sessions ne couvrent qu'une partie du segment (67 % en 2025, 83 % au S1 2026), donc les séries ne se comparent pas parfaitement.

**Lecture pour Homenura** :
- **2024, +29 % de sessions** « grâce à la mise en place de la stratégie SEA-first » [T4] : la croissance est venue de la publicité, pas du référencement.
- **Rentabilité nette** : revenu net / brut = 32 % en 2025, 38 % au S1 2026 [T1][T2]. Les 2/3 du chiffre d'affaires repartent en coûts d'acquisition. Calcul indicatif, à prendre comme une estimation : 257 $ × 32 % ≈ 82 $ nets pour 1 000 sessions. Homenura est à ≈ 35 € pour 1 000 visites, sans payer son trafic (`STRATEGIE` § 1).
- **Trajectoire 2026** : sur les 5 premiers mois, revenu net +40 % et EBITDA +80 % (non audité) [T1]. Le concurrent repart et va investir.

---

## 2. Les sites pays : dates, taille, trafic, marchands

| Site | Pays | 1re date visible dans le sitemap [V1] | URL | Modifiées < 120 j | Non modifiées > 1 an | Trafic estimé, sept. 2026 [SW] | Sources de trafic [SW] | Marchands vus sur la page friteuse [V2] |
|---|---|---|---|---|---|---|---|---|
| vergleich.org | DE/AT/CH | 2014 (fondation) | 18 797 [D] | 43 % [D] | — | ≈ 4,7 M/mois [D] (le groupe déclare > 16 M [T1]) | **publicité Google 49 %** ; mots-clés payants 55,5 % [D] | Amazon, OTTO, eBay, billiger.de [T1] |
| meilleurs.fr | FR (+ CH 5,4 %, BE 4,2 %) | 03/12/2024 (« relancé » [T3]) | 6 781 | 36 % | 10 % | ≈ 0,8 M | 1. display 39 % ; 2. publicité Google ; 3. naturel ; mots-clés payants 42,5 % | Amazon, eBay, idealo, flux Kelkoo (Conforama, Carrefour, SharkNinja, Agrieuro, Jequipemamaison) |
| miglioreconsiglio.it | IT | 30/09/2024 | 11 629 | 15 % | **50 %** | ≈ 16 k | 1. naturel 76 % ; mots-clés payants 14 % | Amazon, eBay, idealo, Kelkoo (MediaWorld, Agrieuro) |
| mejoraelige.es | ES | 26/11/2024 | 7 178 | 54 % | 44 % | ≈ 32 k (−57 % sur un mois) | **1. publicité Google 39 %** ; mots-clés payants 45 % | Amazon, eBay, idealo, Kelkoo (Xiaomi, ManoMano, Caseking) |
| pickbest.co.uk | UK | 28/04/2025 (« récemment lancé » au S1 2025 [T3]) | 9 888 | 40 % | **60 %** | ≈ 44 k (−66 %) ; R-U seulement 45 % de l'audience | 1. naturel 49 % ; mots-clés payants 2 % | Amazon, eBay, idealo, Kelkoo (Currys, AO, Debenhams, Ninja, Sonic Direct) |
| bestpick.com | US | 18/09/2025 | 248 (≈ 197 comparatifs) | 71 % | 29 % | non affiché ; États-Unis 72 %, Allemagne 28 % | naturel 1er ; 0 % de mots-clés payants | Amazon, eBay, Kelkoo (Kohl's, Ace Hardware) |

**Ce que disent les comptes, pays par pays** :
- **France** : « portail relancé déjà rentable » (S1 2025) [T3]. 1re contribution positive au S2 2025 [T1]. En juin 2026, la France « dépasse tous nos autres marchés étrangers réunis » [T1]. Au S1 2026, elle a « contribué de façon significative à la croissance » [T2].
- **Italie, Espagne** : « proches de l'équilibre » (S1 2025 et juin 2026) [T3][T1]. Au S1 2026, ces deux pays et le Royaume-Uni « continuent de se développer » [T2] : rien de plus.
- **Royaume-Uni** : lancé au printemps 2025 [T3][T1].
- **États-Unis** : « les États-Unis sont les prochains… de Berlin à Barcelone et Boston » (CEO, sept. 2025) [T3]. Plus aucune mention des États-Unis au S1 2026 [T2].
- **Nouveaux canaux** : au S1 2026, « de nouveaux tunnels de conversion » ouvrent « une demande inexploitée », en plus des résultats de recherche classiques [T2]. En juin 2026, ils visent de nouveaux canaux « dans la recherche et les réseaux sociaux » [T1]. La nature exacte de ces canaux n'est pas publiée.

**Fiabilité des estimations Similarweb** : pour l'Allemagne, Similarweb donne ≈ 4,7 M de visites par mois, quand le groupe en déclare plus de 16 M. Les petits sites sont donc probablement **sous-estimés**. On garde l'ordre de grandeur : la France pèse environ 10 à 50 fois plus que l'Italie, l'Espagne ou le Royaume-Uni. C'est cohérent avec ce que dit le groupe.

---

## 3. Comment ils lancent un pays (méthode observée)

1. **Tout le catalogue d'un coup, pas catégorie par catégorie.** Les 1res dates visibles en Italie (30/09/2024) mélangent colle à carrelage, harmonica, assurance caravane, gourde et lave-linge [V1]. Le Royaume-Uni montre 5 861 URL modifiées en avril 2025 [V1]. Les rubriques recopient l'arbre de catégories d'Amazon : FR « Commerce, Industrie et Science », IT « Commercio, industria e scienza », UK « Business, Industry & Science » [V1].
2. **Traduction du catalogue allemand, pas de rédaction locale.**
   - **France** : « Aliments pour chiens Belcando / Animonda / AniForte », « après-shampoing Balea », « Balea crème visage » (marques vendues en Allemagne), « radiateur infrarouge de 800 watts », « tondeuse sans fil Einhell » [V1][V3].
   - **Royaume-Uni** : « Alverde Face Cream », « ABUS Smoke Alarm », « Trotec dehumidifier », un mot polonais oublié (« mantowarka-steam-cooker ») [V1].
   - **États-Unis** : « fritz-repeater » (marque allemande AVM), « bed-slats » (sommier à lattes), « raclette-grill », « thermostatic-radiator-valve » [V1]. Sur ce dernier point, l'étude Canada note que ce produit n'a presque pas de marché en Amérique du Nord, faute de radiateurs à eau (7 % des ménages canadiens) [L-CA].
   - **Titres calqués sur l'allemand** « Test oder Vergleich » : « test o confronto », « Prueba y comparativa », « test or comparison » [V2].
3. **Un seul gabarit court, produit par machine** [V2] :
   - **Titre** « Comparatif X » les 16 meilleurs en 2026 », H1 « Top X en 2026 » ; meta description « llll➤ … ✓ Meilleur produit, ✓ Meilleur rapport qualité-prix ➤ Comparer maintenant ! ».
   - **Corps** : 2 100 à 2 600 mots (≈ 6 300 sur la page allemande équivalente [D]) ; guide générique identique dans les 5 langues (introduction, avantages, critères, recettes, entretien) ; aucune source externe ; « Mis à jour : 29/10/2026 » affiché.
   - **Auteur** : un identifiant (« leepeuker ») en France, l'organisation ailleurs.
   - **Balisage** : `dateModified` du schéma au 03/12/2024 (France), 21/01/2026 (Italie), 18/07/2025 (R-U) ; Product + AggregateRating + Review sur chaque produit.
4. **Données Amazon par l'API** : points forts recopiés des fiches, nombre d'avis, « 400+ achats le mois dernier », images servies par Amazon [V2]. Le réseau a donc l'accès API qu'Homenura n'a pas encore.
5. **Marchands locaux par flux, sans partenariats signés pays par pays.** Une source « kelkoo-de » alimente les offres de toutes les pages [V2]. Les marchands locaux arrivent donc par le flux Kelkoo, plus eBay et idealo. Les contrats annoncés en direct ne concernent que l'Allemagne (Amazon, eBay, OTTO, billiger.de) [T1].
6. **Le trafic s'achète dès le lancement** : en Espagne, la publicité Google est la 1re source ; en France, display et publicité passent avant le naturel [SW]. C'est le modèle « SEA-first » décrit dans les comptes [T1].
7. **Domaines séparés, sans hreflang ni lien d'autorité** : 6 domaines, chaque page a sa propre balise canonical, aucune balise hreflang (vérifié sur les 5 pages) [V2] ; vergleich.org n'en a pas non plus [D]. Chaque site démarre avec un domaine neuf. Hypothèse : le référencement naturel ne transmet pas l'autorité allemande, d'où l'achat de trafic.

**Conclusion méthode** : le réseau exporte une **machine** (catalogue Amazon traduit, guide écrit par IA, données Amazon par API, flux Kelkoo, publicité), pas une rédaction. Elle marche en France, où les dépenses de publicité se rentabilisent. Elle stagne dans les pays où elle s'appuie sur le naturel (Italie, Royaume-Uni).

---

## 4. États-Unis et monde anglophone : qui tient la place

| Acteur | Ce qu'on sait | Source |
|---|---|---|
| bestpick.com (VGL) | 248 URL, publiées le 18/09/2025, catalogue allemand traduit, 0 page « vs », 0 page problème, aucun auteur | [V1][V2] ; détail dans `us-market.md` |
| pickbest.co.uk (VGL) | 9 888 URL, R-U 45 % de l'audience seulement (Portugal 9 %, États-Unis 8 %) | [V1][SW] |
| BestReviews | Propriété de **Nexstar Media Group** (198 chaînes de télévision locales) ; « près de 100 000 produits » évalués, affirme faire ses propres tests ; contenus repris par les sites des chaînes et par des journaux Tribune (Chicago Tribune, New York Daily News, Baltimore Sun) | [L-US2] |
| ConsumerSearch | **N'existe plus** : le domaine affiche la page d'adieu d'Ask.com (IAC), fermeture au 01/05/2026 | [L-US3] |
| Consumer Reports, RTINGS | Tests en labo, notes en partie réservées aux abonnés (RTINGS : 102 robots, 54 friteuses, 28 climatiseurs mesurés) | [L-US4], via `us-market.md` |
| Marché | E-commerce américain : **340,2 Md$ au T2 2026, 17,1 % du commerce de détail, +12,2 % sur un an** (Census) | [L-US1] |

**Lecture** : aux États-Unis, le rôle de vergleich.org est tenu par des **médias qui syndiquent** (BestReviews sur les sites des télévisions locales) et par des **testeurs** (CR, RTINGS, Wirecutter : ce dernier n'a pas pu être lu). Un catalogue traduit n'y a pas de place. vergleich.org l'a probablement compris : le groupe ne parle plus des États-Unis dans ses résultats de septembre 2026 [T2].

---

## 5. Google et l'IA : ce qui les a touchés

Ce qui est **écrit par le groupe** (seul élément vérifiable ici) :
- **2022** : le trafic naturel est déjà « complété » par l'achat d'espace [T6]. En 2016, Google faisait ≈ 70 % du trafic, dont 40 points payés (OMR, via [D]).
- **2024** : « Autrefois un projet de référencement, Comparison a adopté un modèle publicité d'abord » ; « dépendre du trafic naturel freine fortement l'usage de l'IA » [T4][T1]. Sessions +29 % [T4].
- **S1 2025** : chiffre d'affaires −11 % (27,9 M$ contre 31,2 M$), baisse « surtout en début de semestre », retour à la croissance « grâce à de fortes réponses aux défis connus des moteurs de recherche » [T3]. Sur l'année 2025, les sessions reculent de 10 % [T1]. Le groupe ne nomme aucune mise à jour Google.
- **Pôle Search (autre segment du groupe)** : abandon par Google d'« AdSense for Domains », revenus −59 % en 2025 [T1]. Ce choc ne concerne pas vergleich.org directement, mais il a fait chuter tout le groupe.
- **Action en justice** : demande de dommages-intérêts contre « une grande entreprise technologique », pour un comportement anticoncurrentiel « établi par une décision réglementaire définitive » [T1][T2]. L'entreprise n'est pas nommée.
- **IA** : le groupe présente ses pages comparatives « pré-construites par IA » comme plus fiables et plus rapides qu'une réponse générée à la demande [T1]. vergleich.org est absent du top 50 des domaines cités par ChatGPT en Allemagne [D].

**Interprétation (hypothèse, non prouvée)** : produire des milliers de pages par IA et par traduction n'est rentable que si le trafic est acheté. En naturel, ces pages courent le risque des règles de Google contre le contenu produit en masse (`SEO-PLAN` § 3). Leur faiblesse sur la longue traîne naturelle (duels, pannes, questions) est donc **structurelle**. C'est exactement le terrain où Homenura gagne déjà ses clics.
**Non vérifié** : la courbe de visibilité Sistrix de vergleich.org et de ses sites étrangers autour des mises à jour Google 2023–2026. À relever dans Sistrix dès qu'un accès existe.

---

## 6. Catégories : où le réseau est fort ou faible, face aux 62 catégories d'Homenura

Nombre d'URL dont l'adresse contient le terme de la catégorie dans chaque sitemap (comptage par script le 01/11/2026 [V1]). C'est une **approximation** : accessoires et faux positifs inclus (« radiateur » compte aussi l'antigel pour radiateur de voiture).

| Catégorie Homenura | FR | IT | ES | UK | US | Lecture |
|---|---|---|---|---|---|---|
| airfryers | 8 | 14 | 11 | 14 | 2 | Bien couvert (capacité, marques) |
| cafetières (machine à grain) | 23 | 45 | 23 | 35 | 4 | Fort (marques, « jusqu'à 300 € ») |
| aspirateurs robots | 10 | 18 | 12 | 7 | 5 | Fort (pages marques) |
| aspirateurs balais | 7 | 11 | 8 | 11 | 2 | Moyen |
| chauffages d'appoint | 43 | 40 | 46 | 87 | 5 | Très fort, mais déclinaisons allemandes (infrarouge 800/1200 W) |
| déshumidificateurs | 13 | 13 | 9 | 8 | 2 | Moyen ; mot-clé n° 3 de meilleurs.fr [SW] |
| climatiseurs mobiles | 6 | 19 | 12 | 10 | 0 | IT : **pas de page « condizionatore portatile »** |
| humidificateurs, ventilateurs | 19 / 16 | 21 / 29 | 14 / 21 | 16 / 46 | 3 / 1 | Fort |
| lave-vaisselle, centrales vapeur | 25 / 10 | 39 / 28 | 26 / 5 | 30 / 43 | 1 / 2 | Fort (gros électroménager) |
| barbecues | 34 | 72 | 51 | 46 | 1 | Fort |
| thermostats | 10 | 12 | 8 | 13 | 1 | Moyen (têtes thermostatiques d'origine allemande) |
| détecteurs fumée / CO | 9 | 9 | 11 | 12 | 2 | Moyen |
| sonnettes vidéo, caméras | 6 / 5 | 9 / 7 | 12 / 5 | 7 / 5 | 0 / 2 | Faible ; **0 page « sans abonnement »** |
| serrures connectées, alarmes | 8 / 1 | 11 / 7 | 6 / 10 | 4 / 4 | 0 / 0 | Faible |
| **solaire de balcon** | 5 | 7 | 6 | 7 | 0 | **Faible et mal nommé** : FR « kit solaire autoconsommation » (pas « plug and play ») ; UK « balcony solar panel system » (pas « plug-in solar ») |
| **bornes de recharge** | 3 | 2 | 2 | 2 | 0 | **Très faible** |
| **prises connectées, éclairage connecté** | 3 / 0 | 2 / 1 | 1 / 1 | 3 / 2 | 0 / 0 | **Quasi absent** |
| **batteries domestiques** | 1 | 2 | 3 | 2 | 1 | **Quasi absent** |
| robots piscine, tondeuses robots | 1 / 3 | 3 / 7 | 3 / 5 | 1 / 2 | 1 / 2 | Faible |
| robots multifonctions | 3 | 9 | 1 | 7 | 2 | ES : pas de page « robot de cocina » seule ; FR : 0 Cookeo / Thermomix |
| thermomètres à viande | 1 | 2 | 1 | 2 | 0 | Quasi absent |

**Formes de pages, tous pays** [V1] :

| Forme | FR | IT | ES | UK | US |
|---|---|---|---|---|---|
| « X vs Y » | **0** | **0** (le seul résultat est la marque « Swiss-O-Par ») | **0** | **0** | **0** |
| Problème / panne | **0** (les 7 résultats du comptage sont des faux positifs : « panneau solaire »…) | **0** (le seul résultat est un faux positif : « cibo per cani con problemi… ») | **0** (idem, croquettes) | **0** | **0** |
| Question (comment, quanto, cuánto, how, cost to run) | 0 | 0 | 0 | 0 (2 faux positifs : « can-opener », « can-crusher ») | 0 |
| « Sans abonnement » (abonnement, abbonamento, suscripción, subscription) | 0 | 0 | 0 | 0 | 0 |
| Budget (« moins de / fino a / hasta / under X ») | 60 | 86 | 70 | 21 | 1 |
| Avec / sans | 76 / 113 | 313 / 75 | 200 / 59 | 178 / 14 | 2 / 1 |

Leurs pages « budget » portent surtout sur l'informatique et la téléphonie (ordinateurs, tablettes, téléphones). Côté maison, on en trouve à peine : « machine à café à grain jusqu'à 300 € », « coffee machine under 300 » [V1].

**Décision catégories** :
1. **Maison connectée et énergie** (prises, éclairage, bornes, batteries, solaire de balcon, sonnettes sans abonnement) : le réseau y est absent dans les 5 pays. C'est **le cœur différenciant d'Homenura**, à pousser partout.
2. **Cuisine et chauffage** : ils sont forts. On ne les attaque pas sur la tête de catégorie, mais par les angles qu'ils n'ont pas : duels, consommation, pannes, « pour N personnes » localisé.
3. **Ne pas copier l'arbre Amazon complet** (mode, animaux, auto, compléments alimentaires) : c'est hors positionnement, et seul l'achat de trafic rend ce modèle rentable.

---

## 7. Mots-clés et parcours : ce qu'on copie, ce qu'on fait mieux

### 7.1 Formules de titre du réseau, face au vocabulaire local relevé dans nos études

| Pays | Titre vergleich (relevé [V2]) | Ce que les gens tapent (sources locales) | Décision Homenura |
|---|---|---|---|
| FR | « Comparatif friteuse sans huile » les 16 meilleurs en 2026 » | meilleur, comparatif, avis, **Que Choisir**, « moins de X € », consommation, « ne s'allume plus » [L-FR] | « Meilleur X 2026 : comparatif » + angles Que Choisir / consommation |
| IT | « Friggitrice ad aria **test o confronto** » I migliori 14 nel 2026 » (calque) | « migliore X », **classifica**, opinioni, **altroconsumo**, quanto consuma, non funziona [L-IT] | « Migliori X 2026 : classifica e guida » ; jamais « test o confronto » |
| ES | « **Prueba y comparativa** de Freidora de aire » Los mejores 13 de 2026 » | « mejor X », **calidad precio**, **ocu**, opiniones, cuánto consume, no enfría [L-ES] | « Mejor X calidad precio 2026 » + bloc « Qué dice la OCU » |
| UK | « The 13 best Air Fryers of 2026 » **test or comparison** » | best X, **cost to run**, under £100, no subscription, Which?, « plug-in solar » [L-UK] | Vocabulaire britannique, hub « cost to run » |
| US | « air fryer **test or comparison** » The best 16 for 2026 » | formulations relevées sur les sites américains : « best X », « for basement », « window AC », « no subscription » [L-US4] | Titres américains, catégories nord-américaines (`us-market.md`) |
| DE | « X Test 2026 » / « X Test & Vergleich » | Test, Testsieger, Stiftung Warentest, ohne Abo, bis X Euro [D] | « Vergleich 2026 » + modificateurs (`dach.md` Actions 1–6) |

**Mots-clés qui leur rapportent en naturel** (Similarweb, extrait affiché) [SW] :
- **meilleurs.fr** : « robot aspirateur laveur », « trottinette électrique », « déhumidificateur d'air », « comparatif bouilloire électrique ».
- **mejoraelige.es** : « sartenes antiadherentes precios », « hidroestufa pellets encastrable ».
- **miglioreconsiglio.it** : « migliore macinacaffè casalinga », « microonde grill migliore ».

Les 2 catégories qui recoupent les nôtres (robot laveur, déshumidificateur) sont des priorités françaises d'Homenura : face à meilleurs.fr, gagner par la profondeur (consommation, « pour sous-sol / pour 50 m² », pannes, Que Choisir).

### 7.2 Le parcours vergleich (pages étrangères) [V2], et l'adaptation Homenura

| Étape | Chez eux | Homenura : garder / adapter / refuser |
|---|---|---|
| 1. Entrée | Annonce Google (Espagne, France) ou résultat naturel ; meta description à flèches et coches | **Adapter** : description qui tranche (verdict + critère), sans « ➤ ✓ » en série. La publicité plus tard, seulement quand le revenu par visite est connu (`STRATEGIE` § 7-12) |
| 2. Haut de page | « Mis à jour : 29/10/2026 » ; « Position 1–16 » ; onglets **Notre recommandation / Prix / Avis des clients** ; lien « Comment nous classons » | **Garder** les onglets de tri et le lien méthode. **Refuser** la fausse fraîcheur : date visible = `dateModified` = journal des changements |
| 3. Les 3 cartes | **1. Meilleur choix · 2. Meilleure vente · 3. Meilleure valeur** (le groupe : les acheteurs suivent une de 4 stratégies, à savoir le meilleur, le moins cher, le meilleur rapport qualité-prix ou le plus vendu [T1]) | **Garder** la logique des 4 stratégies : Meilleur choix / Meilleur rapport qualité-prix / Petit budget / « Le plus recommandé par les tests » (consensus Que Choisir, Altroconsumo, OCU, Which?, Stiftung Warentest) à la place de « meilleure vente », que l'on ne peut pas mesurer sans API |
| 4. Carte produit | Points forts recopiés d'Amazon, « Notre avis 9,9 Excellent » (4 produits notés 9,6 à 9,9), nombre d'avis Amazon, « 400+ achats le mois dernier », bouton « Vérifier le prix → » | **Garder** le bouton « Vérifier le prix ». **Refuser** les textes Amazon recopiés et la note maison sans méthode. **Remplacer** par 2 avantages / 1 limite rédigés, et la note d'un testeur tiers citée et datée |
| 5. Offres | Amazon + eBay + idealo + **flux Kelkoo** (marchands locaux avec prix et logo) | **Adapter** : encadré « Où l'acheter » multi-marchands, via Kelkoo (lien d'inscription éditeur sur son site, 29 marchés annoncés [K] ; conditions à vérifier) et Awin. Prix et images fournis légalement par le flux, avant l'API Amazon |
| 6. Guide | Guide générique traduit (intro, avantages, critères, recettes, entretien) | **Faire mieux** : réponse directe de 40 à 70 mots en tête, critères chiffrés, FAQ tirées des recherches locales, sources locales liées (`SEO-PLAN` § 3) |
| 7. Maillage | « Comparaisons similaires » : de la friteuse vers lave-vaisselle encastrable, cuiseur à riz, gaufrier, gazinière Beko (voisins de rayon Amazon) | **Garder** le bloc, mais pertinent : variantes (taille, budget, « pour 4 »), duel, panne, consommation de la même catégorie |
| 8. Balisage | Product + AggregateRating + Review sur chaque produit | **Refuser** les notes tirées d'Amazon (règle Homenura). Garder Product + ItemList + Article `dateModified` exact |

---

## 8. Stratégie Homenura par marché

### 8.1 Tableau de décision

| Marché | Présence vergleich | Leaders locaux (sources locales) | Homenura (GSC 28 j) | Priorité | Attaque |
|---|---|---|---|---|---|
| **Italie** | miglioreconsiglio.it faible : ≈ 16 k visites/mois (estimation), 50 % des URL non touchées depuis > 1 an, calques | Altroconsumo, QualeScegliere, Aranzulla, Corriere « La Scelta Giusta » [L-IT] | **136 clics** (1er pays) | **1** | Duels, « quanto consuma », « non funziona », bloc Altroconsumo ; page « condizionatore portatile » (il n'en ont pas) |
| **Espagne** | mejoraelige.es faible et dépendant de la publicité (39 %) | OCU, Xataka, La Casa Sibarita, PcComponentes [L-ES] | 33 clics | **2** | « mejor … calidad precio », « robot aspirador friegasuelos » (absent chez eux), « cuánto consume », bloc OCU, « robot de cocina » indexé |
| **France + Belgique** | meilleurs.fr = leur 1er pays étranger, rentable, ≈ 0,8 M visites/mois estimées, en croissance | Les Numériques, Que Choisir, LeBonTri, presse « guide shopping » ; Aperçu IA sur 17 requêtes sur 18 [L-FR] | 41 + 17 clics | **3 (défendre)** | Pas de guerre sur « comparatif X ». Duels (0 chez eux), pannes (0), consommation, maison connectée et énergie (quasi absents chez eux), « panneau solaire plug and play », bloc Que Choisir / Les Numériques |
| **DE / AT / CH** | vergleich.org dominant (> 16 M visites/mois déclarées) mais payant à 49 %, absent de 8 SERP testées et du top 50 ChatGPT [D] | test.de, CHIP, idealo, heise, IMTEST [D] | 53 clics | **4** | Plan `dach.md` : ohne Abo, mit Speicher, Strommessung, Probleme, vs ; jamais « Test » |
| **Pays-Bas + Flandre** | **Absent** | Consumentenbond, consumententesten.nl, Coolblue, bol ; Amazon absent des SERP [L-NL] | 26 clics | **5** | thuisbatterij avant la fin du « saldering » au 1/1/2027 [L-NL], Sinterklaas, « werkt niet » ; tester Coolblue (Awin) |
| **Royaume-Uni** | pickbest.co.uk petit (≈ 44 k estimées, 45 % d'audience R-U) | Which?, OneClearWinner, presse, Currys/John Lewis [L-UK] | 17 clics | **6** | « cost to run » (plafond Ofgem) [L-UK], plug-in solar (légal depuis le 27/08/2026) [L-UK], vocabulaire britannique |
| **Pologne** | **Absent** | Media Expert, Allegro, prorankingi.pl, Ceneo ; Amazon absent des 20 SERP [L-PL] | 5 clics (avant /pl) | **7 (tester)** | « nie działa / nie grzeje », czujnik czadu (obligation 2030) [L-PL] ; vérifier la conversion amazon.pl avant d'écrire en masse |
| **Suède** | **Absent** | Råd & Rön (Dagens Nyheter, sans publicité, tests payants) [L-SE1], Testfakta, petits affiliés (Bästaval.se) [L-SE] | 0 (lancé le 01/11) | **8 (tester)** | « bäst i test » cité (12,6 % des suggestions), « utan abonnemang », « utan slinga » ; ne pas pousser le solaire de balcon (non conforme selon Elsäkerhetsverket) [L-SE] |
| **États-Unis** | bestpick.com quasi vide (248 URL) | BestReviews (Nexstar), Consumer Reports, RTINGS, Wirecutter ; ConsumerSearch fermé [L-US] | /en vu aux États-Unis : 4 479 impressions, CTR 0,2 % [L-US4] | **9 (bas coût)** | Pas de têtes de catégorie. Duels, pannes, « no subscription », catégories américaines (déshumidificateur de sous-sol, climatiseur de fenêtre) selon `us-market.md` |
| **Canada** | **Absent** (bestpick.com : pas de trafic canadien mesurable) [L-CA] | Amazon.ca n° 1, Canadian Tire ; « … canada » ajouté à 21 graines sur 28 [L-CA] | ≈ 0 | **10 (bas coût)** | Pages hiver (humidificateur, chaufferette, CO) en « … canada » ; modèles nord-américains ; Québec plus tard (`ca.md`) |

### 8.2 Ce qu'on fait différemment, partout (5 leviers)

1. **Rédaction native, pas traduction.** Leurs calques (« test o confronto ») et leurs marques allemandes hors sol sont la preuve qu'un catalogue traduit ne prend pas en naturel. Règle Homenura : chaque titre et chaque FAQ part du vocabulaire local relevé dans les études pays (autocomplétion locale, testeurs locaux), comme le fait déjà la PR « titres par marché » (`SEO-PLAN` § 5 P0).
2. **Pages problème et duels.** Le réseau en a **0** dans les 5 pays [V1]. Chez nous, ce sont les 2 gabarits qui prennent déjà le plus de clics (`SEO-PLAN` § 1). Priorité P1 maintenue et étendue : 30 pages problème localisées et 10 duels par langue.
3. **Pages questions et consommation** (« quanto consuma », « cuánto consume », « cost to run », « verbruik », « ile prądu zużywa ») : **0** chez eux [V1]. Le hub consommation avec calculateur (`SEO-PLAN` P1-3) devient l'arme principale en Italie, en Espagne et au Royaume-Uni.
4. **Un seul domaine relié par hreflang.** Eux : 6 domaines neufs, sans hreflang, et un trafic acheté pour compenser. Nous : chaque nouvelle langue profite de l'autorité de homenura.com. Garder hreflang, sitemaps par langue et x-default propres. Pas de domaine par pays.
5. **Amazon Global Earning et flux de prix.** Un seul identifiant amazon.fr, payé depuis les 10 pays (`STRATEGIE` § 2-1), là où eux gèrent une boutique Amazon par pays. Et, comme eux, le flux Kelkoo pour afficher légalement les marchands locaux (Conforama, MediaWorld, ManoMano, Currys, AO…) en attendant l'API Creators.

### 8.3 Ce qu'on ne copie pas

- **« Test » dans les titres** : leur gabarit étranger garde « test or comparison ». Pour nous, c'est interdit (règle maison, risque UWG en allemand [D]).
- **Des milliers de pages sans contrôle humain** : le comptage de leurs rubriques montre des doublons quasi identiques (« équipement de sport / équipements de sport / équipement de sports / équipement sportif ») [V1]. Règle Homenura maintenue : indexer une page seulement si elle a ≥ 5 produits distincts et un texte propre (`STRATEGIE` § 7-8).
- **La fausse fraîcheur** (« Mis à jour » quotidien sur un contenu de 2024) et **les notes « 9,9 Excellent »** sans méthode.
- **Le trafic payant comme moteur** : leur marge nette est de 32 %, et ce modèle demande une API Amazon et un suivi par emplacement que nous n'avons pas encore.

---

## 9. Plan d'action (s'ajoute au `SEO-PLAN`, sans le remplacer)

| # | Action | Marchés | Pourquoi (preuve) | Effort |
|---|---|---|---|---|
| 1 | Créer les pages que le réseau n'a pas et que les gens tapent : « condizionatore portatile », « robot aspirador friegasuelos », « panneau solaire plug and play », « plug-in solar panels » | IT, ES, FR, UK | Absentes des sitemaps [V1] ; vocabulaire local [L-IT][L-ES][L-FR][L-UK] | Moyen |
| 2 | 10 duels et 30 pages problème par langue, en commençant par IT puis ES | IT, ES, puis FR, DE | 0 chez eux [V1] ; 1ers gabarits en clics chez nous | Moyen |
| 3 | Hub consommation + calculateur, d'abord IT (condizionatore, stufa), ES, UK (cost to run en novembre) | IT, ES, UK | 0 page question chez eux [V1] | Moyen |
| 4 | Encadré « Nos 3 choix » + onglets de tri + « Le plus recommandé par les tests » | Tous | Parcours vergleich [V2][T1], adapté aux règles Homenura | Faible |
| 5 | Bloc « Comparaisons similaires » pertinent (variantes, duel, panne de la même catégorie) | Tous | Leur bloc mélange des rayons sans rapport [V2] | Faible |
| 6 | Inscription éditeur Kelkoo (vérifier les pays couverts et les seuils) + Awin déjà en cours | FR, IT, ES, UK, DE, NL | Kelkoo alimente leurs offres locales [V2][K] | Action Miguel |
| 7 | Cluster maison connectée et énergie (prises avec mesure, bornes, batteries, sonnettes sans abonnement) dans chaque langue | Tous | Réseau quasi absent sur ces catégories [V1] | Moyen à élevé |
| 8 | Veille trimestrielle : sitemaps des 6 sites (nombre d'URL, part modifiée en moins de 120 jours, nouvelles formes de pages), et relevé des résultats Team Internet (semestriels en septembre, annuels en mars/juin) | — | Le concurrent accélère en 2026 [T1][T2] | Faible (script) |
| 9 | Ne pas lancer de publicité Google tant que le revenu par visite n'est pas mesuré (`/api/click`) | — | Leur modèle payant laisse 32 % de marge nette [T1] | — |

**À faire par Miguel** : (1) créer le compte éditeur Kelkoo (https://publisher.kelkoo.com/app/signup) ; (2) si un accès Sistrix ou Ahrefs existe, relever la visibilité 2023–2026 de vergleich.org, meilleurs.fr et miglioreconsiglio.it autour des mises à jour Google : c'est le seul trou de cette étude.

---

## 10. Sources

**Team Internet Group plc (lues en entier le 01/11/2026)**
- [T1] Annual Report 2025 (26/06/2026) : https://teaminternet.com/wp-content/uploads/2026/06/TIG-Annual-Report-2025.pdf — p. 2–3 (KPI Comparison), 6 (parcours), 8 (marchés, partenaires, Google Shopping), 12 (« SEA-first »), 14 (flux de valeur), 17–18 (CEO : France, Italie, Espagne, R-U, 5 premiers mois de 2026), 26 (KPI), rapport du CFO.
- [T2] Résultats du 1er semestre 2026 (07/09/2026) : https://teaminternet.com/wp-content/uploads/2026/09/TEAM-INTERNET-GROUP-PLC-H1-2026.pdf
- [T3] Résultats du 1er semestre 2025 (01/09/2025) : https://teaminternet.com/wp-content/uploads/2025/09/Interim-Results-2025-01-09.pdf
- [T4] Annual Report 2024 : https://teaminternet.com/wp-content/uploads/2025/04/Annual-Report-2024.pdf
- [T5] Annual Report 2023 : https://teaminternet.com/wp-content/uploads/2024/03/Annual-Report-2023.pdf
- [T6] Annual Report 2022 (note 25, rachat de VGL) : https://teaminternet.com/wp-content/uploads/2023/08/Annual-Report-2022.pdf
- [T7] Page investisseurs et liste des rapports : https://www.teaminternet.com/investors/ · https://teaminternet.com/annual-interim-reports/

**Réseau vergleich.org (lu le 01/11/2026)**
- [V1] Sitemaps : https://www.meilleurs.fr/sitemap.xml · https://www.miglioreconsiglio.it/sitemap.xml · https://www.mejoraelige.es/sitemap.xml · https://pickbest.co.uk/sitemap.xml · https://bestpick.com/sitemap.xml
- [V2] Pages friteuse : https://www.meilleurs.fr/friteuse-sans-huile/ · https://www.miglioreconsiglio.it/friggitrice-ad-aria/ · https://www.mejoraelige.es/freidora-de-aire/ · https://www.pickbest.co.uk/air-fryer/ · https://www.bestpick.com/air-fryer/ ; accueils (pied de page des 6 sites)
- [V3] https://www.meilleurs.fr/a-propos-de-nous/ · https://www.pickbest.co.uk/about-us/
- [SW] Similarweb (estimations, sept. 2026) : https://www.similarweb.com/website/meilleurs.fr/ · https://www.similarweb.com/website/miglioreconsiglio.it/ · https://www.similarweb.com/website/mejoraelige.es/ · https://www.similarweb.com/website/pickbest.co.uk/ · https://www.similarweb.com/website/bestpick.com/
- [D] `docs/croissance/seo-etudes/dach.md` § 3 (vergleich.org, 30/10/2026 ; Similarweb vergleich.org, sitemap, OMR 2016, droit « Test »)
- [K] Kelkoo Group : https://www.kelkoogroup.com/ (« 29 Markets », « 10k+ Advertisers ») ; inscription éditeur https://publisher.kelkoo.com/app/signup

**Sources locales par marché** (relevées dans les études précédentes, non relues aujourd'hui, sauf mention)
- [L-FR] `seo-etudes/fr-uk.md` partie A et `studies/fr.md` ; ex. Que Choisir, guide d'achat air fryer : https://www.quechoisir.org/guide-d-achat-air-fryer-n130986/
- [L-IT] `seo-etudes/it-es.md` et `studies/it.md` ; ex. Altroconsumo, « quanto consuma la friggitrice ad aria » : https://www.altroconsumo.it/elettrodomestici/friggitrici-ad-aria/consigli/quanto-consuma-la-friggitrice-ad-aria ; « condizionatore portatile con tubo / senza tubo » : https://www.altroconsumo.it/elettrodomestici/condizionatori-portatili/news/condizionatore-portatile-con-tubo-senza-tubo
- [L-ES] `seo-etudes/it-es.md` ; ex. OCU, « aire acondicionado sin tubo » : https://www.ocu.org/vivienda-y-energia/aire-acondicionado/consejos/aire-acondicionado-sin-tubo ; OCU déshumidificateurs : https://www.ocu.org/vivienda-y-energia/equipamiento-hogar/informe/mejores-deshumidificadores
- [L-UK] `seo-etudes/fr-uk.md` partie B ; Ofgem, plafond T4 2026 : https://www.ofgem.gov.uk/news/changes-energy-price-cap-between-1-october-and-31-december-2026 ; gov.uk, panneaux solaires enfichables : https://www.gov.uk/government/news/households-can-save-as-plug-in-solar-panels-come-to-market
- [L-NL] `seo-etudes/nl-pl.md` ; Consumentenbond, salderingsregeling : https://www.consumentenbond.nl/zonnepanelen/blijft-de-salderingsregeling-toch-bestaan
- [L-PL] `seo-etudes/nl-pl.md` ; gov.pl, nouvelles règles incendie : https://www.gov.pl/web/kppsp-pabianice/rok-od-wprowadzenia-nowych-przepisow-przeciwpozarowych ; Wiadomości Handlowe, Allegro / Media Expert : https://www.wiadomoscihandlowe.pl/retailtech-i-nowe-technologie/retail-media/allegro-biedronka-media-expert-i-lidl-kto-dominuje-w-internecie-2537741
- [L-SE] `studies/se.md` (autocomplétion Google Suède, Elsäkerhetsverket : https://www.elsakerhetsverket.se/privatpersoner/dina-elprodukter/produkter-a-o/stickproppsanslutna-solceller ; Bästaval.se) ; [L-SE1] Råd & Rön, lu le 01/11/2026 : https://www.radron.se/
- [L-CA] `studies/ca.md` (Statistique Canada, systèmes de chauffage : https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3810028601 ; autocomplétion Google Canada)
- [L-US1] U.S. Census Bureau, e-commerce trimestriel, lu le 01/11/2026 : https://www.census.gov/retail/ecommerce.html
- [L-US2] BestReviews, « About », lu le 01/11/2026 : https://bestreviews.com/about
- [L-US3] consumersearch.com, lu le 01/11/2026 (page d'adieu Ask.com / IAC) : https://www.consumersearch.com/
- [L-US4] `studies/us-market.md` (Consumer Reports, RTINGS, ENERGY STAR, Search Console /en)
