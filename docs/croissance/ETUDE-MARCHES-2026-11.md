# Homenura — étude des 10 marchés et plan d'avantage concurrentiel (1er novembre 2026)

Document de décision pour Miguel. Il fait la synthèse de **15 études menées le 01/11/2026**, copiées dans [`etudes-marches/`](etudes-marches/). Il s'appuie sur [`STRATEGIE-2026-10.md`](STRATEGIE-2026-10.md) (§ 7 et § 8), [`SEO-PLAN-2026-10.md`](SEO-PLAN-2026-10.md) et [`seo-etudes/`](seo-etudes/), sans les refaire : il les complète, les ordonne et corrige ce que les nouvelles mesures contredisent.

Demandes d'origine : « adapte la stratégie de notre site pour avoir un avantage concurrentiel », puis « étudie aussi les catégories, les mots-clés et les parcours de Vergleich.org pour adapter Homenura. Appuie-toi sur des sources locales : être un modèle américain ne remplace pas cette recherche ». Chaque fiche pays repose donc sur des sources du pays : statistiques nationales, autocomplétion et Trends locaux, meilleures ventes de la boutique Amazon du pays, testeurs et enseignes locaux.

**Règles inchangées** : jamais « test / testé / getest / bäst i test » pour nous-mêmes ; ni prix ni images Amazon avant l'API Creators ; une page n'est indexée qu'à partir de 5 produits distincts ; aucune date changée sans changement de fond ; quand on retitre, l'ancien mot-clé reste en synonyme (règle SEO de Miguel : renforcer, jamais supprimer).

**Lire les sources** : chaque chiffre renvoie à l'étude qui le contient et y cite sa source primaire avec son lien. Exemple : [it.md § 2.1] = [`etudes-marches/it.md`](etudes-marches/it.md), section 2.1. **Aucune étude ne donne de volume de recherche absolu** : aucun outil de volumes n'était accessible, et le quota de recherche web partagé entre agents était épuisé pendant la plupart des études. Les indices Google Trends sont relatifs. L'autocomplétion montre ce que les gens tapent, pas combien de fois. Les désaccords entre études sont signalés **« Désaccord »** dans le texte et arbitrés au § 7.2.

**Relecture critique du 01/11/2026** : 30 chiffres vérifiés sur leur source primaire, 2 chiffres mal appliqués corrigés, une formule de titre contraire à nos règles retirée, un point de contrôle par les ventes ajouté à l'ordre des pays, un plafond de capacité ajouté au backlog (§ 6.5). Détail et limites au § 8.

---

## 1. Résumé exécutif

1. **Où gagner** : là où vergleich.org et ses copies n'ont rien. On compte **0 page duel, panne, consommation ou « sans abonnement » sur ses 5 sites étrangers** [vergleich-markets.md § 6], et seulement 2 duels et 2 pages panne sur ses 18 797 URL allemandes [vergleich-keywords.md § 3]. Ce sont déjà nos 2 premiers formats en clics. Ajouter la maison connectée et l'énergie, où le réseau est quasi absent dans les 6 pays.
2. **Ordre des pays** : Italie → Allemagne (longue traîne seulement) → France (défendre) → Espagne → États-Unis (localiser avant d'écrire) → Royaume-Uni. Puis Pays-Bas, Canada, Pologne et Suède, **une fois les comptes multi-marchands ouverts**. Dans ces pays, Amazon est 4e en ventes, mineur ou absent des recherches. **Cet ordre suit les clics, pas encore les ventes** : en 2026, Homenura a gagné 20,51 € sur 14 ventes, **toutes en France** [STRATEGIE § 1]. L'Italie (1re en clics, aucune vente à ce jour) ne garde la 1re place que si `homaviseit-21` enregistre des ventes d'ici le 30/11/2026 ; sinon la France repasse n° 1 (§ 3).
3. **Cette semaine** : arrêter ce qui fait perdre des ventes. /us et /ca affichent un site européen (marques, 230 V, RGPD, chapitre « marché français »). Plusieurs titres ne portent pas les mots tapés : « Airfryer » pèse 3,3 fois « Heißluftfritteuse » en Allemagne [de.md § 1.2] ; « air fryer » pèse environ 9 fois « frytkownica beztłuszczowa » en Pologne [pl.md § 4.3]. Enfin, remplir le Black Friday avec les catégories de chaque pays avant le 15/11.
4. **Avant Noël** : un gabarit de catégorie « réponse d'abord » (3 choix, tableau avant le 3e écran, puces de déclinaison, journal daté, critères de classement publiés) ; les duels et les pannes en langue native ; le pack hiver par pays ; l'indexation des robots cuiseurs (Thermomix 94 et Cookeo 69 pour 100 « air fryer » en France [fr.md § 1.2]).
5. **Avec quoi** : des sources tierces locales citées et datées (Altroconsumo, OCU, Que Choisir, Which?, Consumentenbond, Råd & Rön, Consumer Reports, ENERGY STAR) ; plusieurs marchands par produit (bol, Coolblue, Allegro, Elgiganten, et le flux Kelkoo pour afficher prix et images légalement, hors des blocs qui portent un bouton Amazon) ; un seul domaine relié par hreflang, face aux 6 domaines séparés de vergleich.org, sans hreflang.

---

## 2. Ce que fait vergleich.org, et comment on prend l'avantage

### 2.1 Qui il est (comptes publiés et mesures du 01/11/2026)

| Fait | Valeur | Source |
|---|---|---|
| Propriétaire | Team Internet Group plc, segment « Comparison » (VGL Publishing AG), racheté par CentralNic le 07/03/2022 (valeur d'entreprise 60 M€) | [vergleich-markets.md § 1] |
| Chiffre d'affaires 2025 | 65,3 M$ brut (+4 %), 20,8 M$ net, 44 M$ de coût des ventes (≈ 67 % du brut) | [vergleich-keywords.md § 1] |
| 1er semestre 2026 | brut 32,9 M$ (+18 %), net 12,4 M$ (+38 %), EBITDA 8,4 M$ (+56 %) : **le concurrent repart** | [vergleich-markets.md § 1.1] |
| Modèle | « SEA-first » (publicité d'abord) ; pages « pré-construites par l'IA » ; payé à la vente | [vergleich-keywords.md § 1] |
| Trafic | > 16 M visites/mois déclarées ; 169,4 M sessions en 2025 ; ≈ 4,7 M visites/mois selon Similarweb, dont **49 % de publicité Google** | [vergleich-markets.md § 2] ; **Désaccord** n° 1, § 7.2 |
| Revenu pour 1 000 sessions | 257 $ brut (2025), 277 $ (12 mois au 30/06/2026, mesuré sur ≈ 83 % du segment) ; net : 82 $ ou 123 $ selon le calcul | **Désaccord** n° 2 ; Homenura ≈ 35 € pour 1 000 visites [STRATEGIE § 7] |
| Hors Allemagne, Autriche, Suisse | 4,8 % du volume d'affaires (2025), 5,2 % (S1 2026) ; la France « dépasse tous les autres marchés étrangers réunis » | [vergleich-markets.md § 2] |
| Sites pays | meilleurs.fr 6 781 URL, ≈ 0,8 M visites/mois · miglioreconsiglio.it 11 629 URL, ≈ 15,6 k · mejoraelige.es 7 178 URL, ≈ 32 k · pickbest.co.uk 9 888 URL, ≈ 44 k · bestpick.com 248 URL (États-Unis). **Rien** aux Pays-Bas, en Pologne, en Suède ni au Canada | [vergleich-markets.md § 2] (trafics : estimations Similarweb) |
| Avenir | le groupe **négocie** la vente de son pôle noms de domaine (DIS) : revue stratégique « à un stade avancé », valeur attendue supérieure à 160 M$, clôture visée vers la fin 2026, « sans certitude ». Le comparateur y est présenté comme le « 2e pilier de résultat » ; sans DIS, il deviendrait le 1er (EBITDA S1 2026 : 8,4 M$, contre −2,6 M$ pour Search) | [vergleich-markets.md § 1] ; rapport S1 2026 relu le 01/11 |

**Lecture** : vergleich.org est une machine. Elle prend le catalogue Amazon et le traduit, fait écrire les guides par une IA, tire les données produit de l'API Amazon, les offres du flux Kelkoo, et achète son trafic. Elle est rentable en Allemagne et en France, où la publicité se rembourse. Elle stagne là où elle dépend du référencement naturel (Italie, Royaume-Uni) [vergleich-markets.md § 3]. Homenura ne peut pas acheter ce trafic. Il gagne donc là où la publicité est chère ou absente : longue traîne, questions, pays où le réseau n'existe pas.

### 2.2 Ses catégories

**Architecture** [vergleich-parcours.md § 1.1–1.2] : 12 rubriques → 511 groupes → 18 241 pages comparatives, toutes à la racine du site (`/heissluftfritteuse/`, `/heissluftfritteuse-xxl/`). Elles sont rangées par famille de produits, jamais par besoin. **Il n'y a aucune rubrique Smart Home** (`/smart-home/` renvoie une erreur 404) : thermostats, serrures, caméras et détecteurs sont dans « Baumarkt », les purificateurs dans « Wohnen ». Là où Homenura a une page catégorie, vergleich.org en a 10 à 150 [vergleich-parcours.md § 1.4].

**La longue traîne fait le site** : 7 299 URL (39 %) sont des déclinaisons d'une page de tête, réparties en 2 104 grappes, dont 57 de plus de 20 pages [vergleich-keywords.md § 2.2]. Chaque déclinaison a **son propre jeu de produits** (0 à 2 produits en commun avec la page mère), **82 à 91 % de phrases propres** et environ 5 700 mots [vergleich-keywords.md § 5].

**Points forts** : gros électroménager, chauffage (Heizlüfter : 16 déclinaisons), barbecue (28), micro-ondes (31), réfrigérateurs (35) [vergleich-keywords.md § 2.3].

**Trous, en Allemagne** [vergleich-keywords.md § 2.3 ; de.md § 5.3] :
- pages de tête absentes : /airfryer/, /saugroboter/, /smart-lock/, /video-tuerklingel/, /mobile-klimaanlage/, /balkonkraftwerk-mit-speicher/, Thermomix, Ninja, Cosori ;
- aucune déclinaison pour la serrure, la sonnette, le Balkonkraftwerk, le Saug-Wisch-Roboter et le laveur de vitres ;
- aucun « ohne Abo » ni « mit Strommessung ».

**Trous, ailleurs** [vergleich-markets.md § 6] : prises, éclairage, bornes, batteries, solaire de balcon et sonnettes sans abonnement sont **quasi absents des 5 sites étrangers**. Le solaire de balcon y est mal nommé (FR « kit solaire autoconsommation », UK « balcony solar panel system »).

**Catégories que vergleich.org traite et qu'Homenura n'a pas** (maison, cuisine, jardin), classées selon la demande locale, l'investissement de vergleich.org, la saison et la commission [vergleich-parcours.md § 1.5] :

| # | Catégorie | Preuve locale | Décision Homenura |
|---|---|---|---|
| 1 | Aspirateur laveur sans fil (Wischsauger) | +66 % en valeur en FR (GIFAM, 2025) ; NIQ « scope multifunzione » +64 % en IT (S1 2025) ; PL « odkurzacz myjący » +46 % [fr.md § 1.1 ; it.md § 1 ; pl.md § 6.3]. **En DE, le +66,1 % en unités du S1 2026 concerne les robots aspirateurs-laveurs** (« Saug- und Wischroboter », GFU), pas les Wischsauger ; « Wischsauger » pèse ≈ 7 dans Trends, stable sur un an [vergleich-parcours.md § 1.5 ; de.md § 1.2] | **Créer** et séparer du robot laveur : FR, IT et PL d'abord ; DE en second (demande faible, mais marques actives) |
| 2 | Robot cuiseur (Thermomix, Monsieur Cuisine, Cookeo) | Thermomix ≈ 360 contre 100 pour Kaffeevollautomat (DE) ; 94 et Cookeo 69 (FR, air fryer = 100) [de.md § 1.2 ; fr.md § 1.2] | **Indexer** `robots-multifonctions` (aujourd'hui `indexable: false`) |
| 3 | Chauffage non connecté (soufflant, bain d'huile, convecteur, infrarouge) | 11 des 30 meilleures ventes « chauffage » d'Amazon.de ; 16 des 25 premières d'Amazon.it [de.md § 3.1 ; it.md § 3.1] | **Élargir** `chauffages-appoint` (retirer « smart » des titres) |
| 4 | Absorbeur d'humidité (granulés) | 12 des 30 meilleures ventes « chauffage, climat » d'Amazon.de ; 4 Rubson dans le top 10 français ; 13 des 15 premières ventes « Dehumidifiers » au R-U [de.md § 3.1 ; fr.md § 3.2 ; uk.md § 3.2] | **Sous-page** de `deshumidificateurs`, de novembre à février |
| 5 | Climatiseur mobile split (Midea PortaSplit) | « mobile Klimaanlage » +219 % [de.md § 1.2] | Sous-page de `climatiseurs-mobiles`, prête en avril 2027 |
| 6 | Raclette et fondue | pic à la Saint-Sylvestre (DE) ; 3 appareils à raclette dans le top 17 « petits appareils » d'Amazon.fr [de.md § 2.4 ; fr.md § 3.2] | Page saisonnière, **avant le 20/11 (FR) et le 15/12 (DE)** |
| 7 | Vakuumierer, Siebträgermaschine, SodaStream | 4 consommables de mise sous vide dans le top 30 cuisine d'Amazon.de ; Siebträger +13 % [de.md § 3.3] | Plus tard |
| 8 | Jardin non robotisé, barbecue au gaz | demande **non mesurée** [vergleich-parcours.md § 1.5] | Mesurer dans Trends avant mars 2027 |
| — | Gros électroménager décliné à l'infini | segment en baisse (−5,1 % au S1 2026 en DE), commission Amazon de 2,5 % [vergleich-parcours.md § 1.5] | **Ne pas copier** |

### 2.3 Ses mots-clés

**Deux gabarits de titre** [vergleich-keywords.md § 4.1 ; vergleich-parcours.md § 2.1] :

| Élément | Pages testées (≈ 1 % des pages, refaites en 2025) | Pages « Vergleich » (≈ 95 %) | Déclinaisons |
|---|---|---|---|
| `<title>` | « Heißluftfritteuse Test 2026 – Gesund knusprig genießen » | « Luftreiniger Test & Vergleich » Top 25 im November 2026 » | « Top 10 Philips-Heißluftfritteusen Test & Vergleich » |
| H1 | « X Test 2026 » | « X Vergleich 2026 » (114 pages sur 120) | « Philips-Heißluftfritteuse Vergleich 2026 » |
| Sous-titre | le synonyme : « Die besten Airfryer im Vergleich. » | « Die besten Schnellheizer im Überblick. » | « Die besten Roborock-Saugwischer im Vergleich. » |
| Méta | phrase de bénéfice | « llll➤ Aktueller und unabhängiger X Test bzw. Vergleich 2026 inkl. ✓ Vergleichssieger… » | idem |

**Ce que ces formules révèlent** :
- **« Test » reste dans 96 % des titres** (115 sur 120), alors qu'environ 1 % des pages sont de vrais tests [vergleich-keywords.md § 0]. C'est un risque juridique : OLG Köln 6 U 136/19 et LG Berlin II 15 O 277/25 [vergleich-keywords.md § 6.3].
- **Le synonyme placé dans le sous-titre** couvre 2 mots-clés par page.
- **Le mois du titre change tout seul** le 1er du mois : la page `/luftreiniger/` affiche « November 2026 » alors que sa `dateModified` est le 02/10/2026.
- Le gadget « llll➤ » a été **abandonné sur les pages refaites en 2025** [vergleich-keywords.md § 4.2].
- **La FAQ reprend les variantes recherchées** : « vs. Backofen », « Unterschied Airfryer und Heißluftfritteuse », « Welche … empfiehlt die Stiftung Warentest ? » [vergleich-parcours.md § 2.2].

**Familles de déclinaisons** (comptage sur les 18 730 slugs) [vergleich-keywords.md § 3 ; vergleich-parcours.md § 1.3] :

| Famille | Pages | Exemple | Pour Homenura |
|---|---|---|---|
| « mit » (fonction) | ≈ 358 | kaffeevollautomat-mit-app | oui, pour les fonctions réellement cherchées (mit Speicher, mit Wischfunktion, mit Strommessung) |
| capacité / puissance | 483 | heizluefter-2000-watt | au cas par cas |
| marque + produit | ≥ 188 (pour 20 marques) | roborock-saugroboter | là où il n'y en a pas : Ninja, Cosori, Dreame, Nuki, tado |
| « für » (usage) | 103 | heissluftfritteuse-fuer-4-personen | oui, avec au moins 5 produits distincts |
| « bis / unter X Euro » | 63 + 16 | kaffeevollautomat-bis-300-euro | oui, sans prix de modèle |
| « ohne » | 64 | maehroboter-ohne-begrenzungskabel | **notre meilleure famille** : 0 « ohne Abo » chez lui |
| « vs / oder » | **2** | — | **trou** : notre 1er format en clics |
| « Probleme » | **2** | die-haeufigsten-probleme-mit-maehrobotern | **trou** : notre 2e format en clics |
| « Erfahrungen » | **0** | — | synthèse d'avis sourcée seulement, jamais d'expérience inventée |

**Hors d'Allemagne, le réseau traduit l'allemand mot à mot** : « test o confronto », « Prueba y comparativa », « test or comparison ». Or « test » et « confronto » n'apparaissent dans **aucune des 400 suggestions Google.it** relevées [it.md § 4.1]. Les mots locaux manquent : migliore, qualità prezzo, calidad precio, cost to run, Que Choisir, OCU [vergleich-markets.md § 7.1].

**Formules de titre retenues pour Homenura** (synthèse des études pays ; jamais « test ») :

| Marché | Titre | Sous-titre / variante | Modificateurs à porter | Source |
|---|---|---|---|---|
| DE/AT/CH | « {Airfryer} Vergleich 2026: Die {N} besten Modelle » ; « (Stand: November) » seulement si la page est revue chaque mois | synonyme (Heißluftfritteuse, Staubsauger-Roboter, smartes Türschloss) | ohne Abo, mit Speicher, mit Wischfunktion, bis 300 Euro, Probleme ; « Testsieger laut Stiftung Warentest (Heft MM/AAAA) » seulement en citation | [vergleich-keywords.md § 4.3 ; de.md § 6.4] |
| FR/BE | « Meilleur {X} 2026 : comparatif de {N} modèles » | — | Que Choisir, avis, moins de 100/200/300 €, consommation, pour N personnes | [fr.md § 4.3] |
| IT | « Migliori {X} 2026: classifica e guida all'acquisto (aggiornata a {mese}) » ; duel « {A} o {B}: quale scegliere nel 2026 » | — | qualità prezzo, altroconsumo, quanto consuma, per 4 persone, per 100 mq, senza … | [it.md § 6.4] |
| ES | « Mejor {X} calidad precio 2026 » | — | ocu / según la OCU, cuánto consume, sin cuotas, sin tubo | [es.md § 6.4] |
| UK | « Best {X} UK 2026: {angle} » | — | cost to run, under £100, no subscription, Which?, alternative Lidl/Aldi | [uk.md § 6.4] |
| US | « Best {X} of 2026 » ; duel « {A} vs {B} » | — | quarts, BTU, pints, for basement / pet hair, without subscription, recall | [us-seo.md § 6] |
| CA | « Best {X} in Canada (2026) » | — | canada, canadian tire, for basement, for baseboard heaters, cold weather, rebate | [ca.md § 6.5] |
| NL/BE | « Beste {X} 2026: {N} modellen vergeleken » | — | met / zonder / onder 100 euro, verbruik, werkt niet, consumentenbond, test aankoop, ecocheques | [nl.md § 6.4] |
| PL | « {X} ranking 2026: jaki wybrać? Opinie » ; H1 « Najlepszy {X} 2026 » | synonyme (frytkownica beztłuszczowa) | jaki, opinie, do X zł, ile prądu zużywa, nie działa | [pl.md § 6.5] |
| SE | « Bästa {X} 2026 – vad Råd & Rön och testerna säger ». **« bäst i test » jamais pour nous-mêmes** (règle d'en-tête) : seulement en citation datée d'un testeur (« bäst i test hos Råd & Rön, nr X/2026 ») et en FAQ (« Vilken {X} blev bäst i test? »), après avis d'un juriste (M9) | — | bäst i test (en citation), utan abonnemang, utan slinga, under 3000 kr, råd och rön, hur mycket el drar | [se.md § 5.2] ; corrigé à la relecture |

### 2.4 Ses parcours visiteur (de Google au clic marchand)

| # | Parcours observé | Ce qu'on en tire | Source |
|---|---|---|---|
| 1 | **Annonce Google ou résultat naturel → page comparative** → 3 cartes ou tableau → « Zum Angebot » (Amazon) ou « Preisvergleich » (5 marchands + eBay) → achat | Le cas le plus fréquent (« SEA-first ») | [vergleich-keywords.md § 7.2] |
| 2 | Page comparative → **puce de déclinaison** sous le H1 (« 12 Liter », « für 4 Personen », « bis 300 Euro ») → page plus étroite → marchand | C'est ce parcours qui justifie les grappes | [vergleich-parcours.md § 1.3] |
| 3 | Accueil → **recherche avec autocomplétion** (« Saugrob » propose 9 pages de marque avec vignette) → comparatif **en 2 gestes** ; par le menu, 4 à 5 clics | La recherche est le chemin court | [vergleich-parcours.md § 3.2] |
| 4 | « Themenwelten » (depuis juin 2026) : Black Friday par rubrique, « Stromausfall » ; pages courtes (≈ 650 mots), hors sitemap | Saisonnier mince : à faire mieux | [vergleich-keywords.md § 7.2] |
| 5 | Fiches produit en 1re ligne de **Google Shopping** | Hors de portée (pas de flux marchand) | [vergleich-keywords.md § 7.2] |
| 6 | **Étude de données** pour la presse (« Stromausfall… Jeder Zweite fühlt sich schlecht vorbereitet ») → liens vers les comparatifs | À copier, avec nos données | [vergleich-keywords.md § 7.2] |

**Mesuré écran par écran** (ordinateur, 864 px de haut) [vergleich-parcours.md § 3] :
- **Page de déclinaison** (`/roborock-saugroboter/`) : tableau dans le 1er écran (y ≈ 760 px).
- **Page de tête testée** (`/heissluftfritteuse/`) : 1er bouton marchand à y ≈ 1 760 px, tableau à y ≈ 2 450 px (3e écran). Sur mobile (390 px), tableau à y ≈ 4 440 px.
- **Homenura** : 3 choix à y ≈ 1 450 px, **aucun tableau** sur les pages catégorie ; sur le guide airfryer, tableau au **19e écran** (y ≈ 16 200 sur 19 600).
- **Boutons** : 11 à 25 par page, des `<button>` sans lien dans le code, suivis par emplacement (`test-summary`, `offers-btn`, `test-impression`). Chaque produit renvoie vers 3 à 9 marchands (Amazon, OTTO, eBay, Coolblue, Proshop, boutiques de marque).
- **Emplacements payants avant le choix éditorial** : dans le tableau airfryer, les colonnes 1, 2 et 5 sont des annonces « Highlight / Anzeige ». Sur mobile, **les 2 seules colonnes visibles sont des annonces**.
- **Classement publié** : il repose sur le taux de clic (« hohe Gewichtung »), les avis des boutiques et le prix (« sehr hohe Gewichtung »). Le « Vergleichssieger » est donc le produit **qui convertit** [vergleich-parcours.md § 3.3].

**Sur ses sites étrangers** [vergleich-markets.md § 7.2], le parcours est plus pauvre :
- 3 cartes « Meilleur choix · Meilleure vente · Meilleure valeur » (le groupe parle de 4 stratégies d'achat : le meilleur, le moins cher, le meilleur rapport qualité-prix, le plus vendu) ;
- points forts recopiés d'Amazon, note « 9,9 », « 400+ achats le mois dernier », bouton « Vérifier le prix » ;
- offres Kelkoo ;
- guide générique traduit ;
- « Comparaisons similaires » hors sujet (de la friteuse au lave-vaisselle).

**Homenura /de aujourd'hui** [vergleich-parcours.md § 3.4] : 3 entrées de menu sur 6 mènent à l'airfryer ; le menu Smart Home montre 5 rubriques et aucune catégorie ; les pages catégorie n'ont ni tableau, ni filtre, ni sommaire, ni déclinaison. **Notre atout** : les sources tierces liées en tête de page (test.de, CHIP, ÖKO-TEST), sans faux test.

### 2.5 Copier, contrer, éviter

| Tactique | Décision | Comment chez Homenura | Source |
|---|---|---|---|
| Duels « X vs Y » et pannes, dans chaque langue | **Contrer** (il est absent) | 10 duels et 30 pages panne par langue, en commençant par l'Italie et l'Allemagne (en Pologne : en FAQ, la demande est faible) | [vergleich-keywords.md § 13 ; pl.md § 4.4] |
| Grappes de déclinaisons + puces sous le H1 | **Copier avec garde-fous** | Commencer là où il n'a rien (Airfryer, Saugroboter, Smart Lock nachrüsten, Video-Türklingel ohne Abo, Balkonkraftwerk mit Speicher) ; seuils d'indexation du § 2.6.4 | [vergleich-keywords.md § 13] |
| Page longue : 3 cartes, tableau de 8 à 14 produits, Kaufberatung, FAQ, sources, maillage | **Copier** | Gabarit du § 2.6.3 | [vergleich-parcours.md § 4.3] |
| Classement par taux de clic et prix ; « Test » sans test | **Contrer** | Critères produit publiés et pondérés sur chaque page (le § 5b UWG impose d'indiquer les paramètres d'un classement) ; « classement indépendant du prix et des clics » | [vergleich-parcours.md § 4.1-5] |
| Sites étrangers traduits, marques allemandes hors sol | **Contrer** | Vocabulaire, marques et testeurs locaux (§ 4) | [vergleich-markets.md § 8.2] |
| Fenêtre multi-marchands + flux Kelkoo (prix et images légaux) | **Copier** dès qu'un programme est accepté | Encadré « Où l'acheter » à boutons nommés ; prix Kelkoo seulement pour les marchands du flux, **jamais dans un bloc qui porte un bouton Amazon** avant l'API Creators (règle 2 de `CLAUDE.md`) | [vergleich-markets.md § 7.2] |
| Produits épuisés gardés (« Ausverkaufte X ») | **Copier** | Section « Momentanément indisponible » au lieu de supprimer | [vergleich-keywords.md § 8] |
| Recherche avec autocomplétion vers les pages | **Copier** | § 2.6.2 | [vergleich-parcours.md § 3.2] |
| Étude de données pour la presse | **Copier** | Une par pays et par trimestre (US : « Recall Radar », coût d'usage par État) | [us-seo.md § 8] |
| Emplacements payants en colonnes 1 et 2 ; compte à rebours « Endet in 16:36:55 » ; deux « gagnants » sur une page ; compteurs identiques d'une page à l'autre (101 / 14 / 85) ; badge « Nachhaltig » sans critère ; zoom mobile bloqué ; 1,29 Mo de HTML | **Éviter** | Un seul « Notre choix » ; aucune annonce avant notre choix ; uniquement des chiffres réels et datés | [vergleich-parcours.md § 4.5] |
| Mois automatique dans le titre ; « Mis à jour » visible différent de `dateModified` (meilleurs.fr : 29/10/2026 affiché, 03/12/2024 dans le code) | **Éviter** | date visible = `dateModified` = journal des changements | [fr.md § 5.2] |
| Notes et nombre d'avis Amazon, « 400+ achats », rangs de meilleures ventes (« n° 1 Amazon »), prix, remises en %, images Amazon | **Interdit** sans l'API Creators. Les rangs et les « 2000+ compras » relevés dans les études servent à choisir les produits, jamais à être affichés | Note de testeurs tiers, citée et datée ; fourchette de budget éditoriale (« moins de 100 € ») | [vergleich-markets.md § 7.2] ; `CLAUDE.md` |
| Milliers de pages d'un coup ; doublons (« appareil-a-raclette / appareil-raclette ») | **Éviter** | au plus 5 nouvelles pages indexées par semaine et par langue | [vergleich-keywords.md § 15 ; fr.md § 5.2] |
| Publicité Google comme moteur | **Pas maintenant** | Seulement quand le revenu par visite sera mesuré (`/api/click`) | [vergleich-markets.md § 9] |
| Domaines séparés sans hreflang | **Contrer** | Un seul domaine, hreflang et sitemaps par langue | [vergleich-markets.md § 3] |

### 2.6 Changements concrets pour Homenura

#### 2.6.1 Catégories (61 aujourd'hui dans `lib/catalog/categories.ts`)

| Action | Catégorie | Marchés | Preuve |
|---|---|---|---|
| **Indexer** | `robots-multifonctions` (robot cuiseur : Thermomix, Cookeo, Monsieur Cuisine) | FR, DE, ES, PL, IT | [fr.md § 6.1 ; de.md § 6.2 ; es.md § 3.1 ; pl.md § 6.3 ; it.md § 3.2] |
| **Indexer** | `micro-ondes` | NL/BE (« magnetron » 35, « microgolfoven ») | [nl.md § 3.2] |
| **Scinder** | `aspirateurs-laveurs` : aspirateur laveur (balai) ≠ robot laveur ; en DE, la page actuelle désigne un robot | FR, DE, IT, PL | [fr.md § 6.2 ; de.md § 6.2 ; pl.md § 6.3] |
| **Scinder** | `cafetieres` : machine à grain / capsules / filtre / expresso selon le pays | US (coffee makers + espresso), FR, IT, ES, UK, CA (capsules), SE (kaffebryggare), PL (przelewowy, kolbowy) | [us-market.md § 3.2 ; fr.md § 3.2 ; it.md § 6.2 ; se.md § 3.2 ; pl.md § 6.3] |
| **Scinder** | `climatiseurs-mobiles` : fenêtre ≠ portable | US, CA | [us-market.md § 3.1 ; ca.md § 3.2] |
| **Élargir** | `chauffages-appoint` : soufflant, bain d'huile, convecteur (titre sans « smart ») | tous | § 2.2 |
| **Renommer** | `portails-garages` → garage door openers | US | [us-market.md § 3.2] |
| **Séparer** | les 2 catégories nommées « Videocitofoni » | IT | [it.md § 6.1] |
| **Ajouter (hiver)** | couvertures et plaids chauffants | FR, UK, NL, CA, US, IT (« scaldasonno »), ES (« manta eléctrica »), SE (« värmefilt ») | fiches § 4 |
| **Ajouter (pays)** | heated airer (UK), brasero / mesa camilla (ES), souffleuse à neige et foyer électrique (CA), raclette (FR/DE), gourmetstel et friteuse (NL/BE), moka électrique et lavapavimenti (IT), köksmaskin (SE), fours friteuses et batteurs (US) | un pays chacun | fiches § 4 |
| **Ne pas pousser** | solaire de balcon (non conforme en Suède, légalité floue ailleurs) ; gros électroménager « connecté » ; robots piscine hors FR et ES ; interphones hors IT et PL ; rideaux, diffuseurs, coffres | selon le pays | [se.md § 3.3 ; fr.md § 3.3 ; uk.md § 3.3] |

**Prérequis technique** : pouvoir **activer et indexer une catégorie pour certains marchés seulement**. Une souffleuse à neige n'a rien à faire en Italie, une moka électrique rien à faire au Canada.

#### 2.6.2 Navigation
1. **Méga-menu** : les 5 rubriques et le hub cuisine avec leurs catégories visibles (6 à 14 liens chacune), plus un lien « Tous les comparatifs ». « Ratgeber / Guides » mène vers un vrai index, et non vers l'airfryer [vergleich-parcours.md § 4.1-3].
2. **Accueil par marché** : titre avec mot-clé et bloc « Comparatifs populaires » saisonnier. Novembre en DE : Airfryer, Saugroboter, Heizlüfter, Luftentfeuchter, Kaffeevollautomat [de.md § 6.4-6]. US : « Shop by need » [us-site.md § 4]. PL : par pièce [pl.md § 5.3].
3. **Recherche avec autocomplétion** vers les catégories, les marques et les déclinaisons [vergleich-parcours.md § 3.2].
4. **Libellés** : harmonisés (« Haushaltsgeräte » contre « Reinigung & Haushalt ») ; « Silo » retiré ; plus de « Tests » dans les libellés DE ; rubriques US calquées sur Amazon (« Heating, Cooling & Air Quality », « Yard & Outdoor ») [vergleich-parcours.md § 4.2-11 ; us-site.md § 4].
5. **Rubriques ajoutées par marché** quand la demande le prouve : « Energie thuis » et « Feestdagen » (NL), « Energi & elpris » et « Vinter » (SE), « Winter » et « Rebates » (CA) [nl.md § 5.2 ; se.md § 5.2 ; ca.md § 5.2].

#### 2.6.3 Gabarits

**Page catégorie « réponse d'abord »** (ordre des blocs) [vergleich-parcours.md § 4.3 ; us-seo.md § 6.1] :
1. Fil d'Ariane avec les vrais libellés.
2. H1 local et sous-titre synonyme ; une ligne « Mis à jour le · auteur · méthode ».
3. **Réponse rapide de 40 à 70 mots** : verdict, prix d'entrée en gamme (sans prix de modèle), piège d'usage, date.
4. **Puces de déclinaison** : marque, budget, taille, usage, « avec / sans », duels, pannes (uniquement les pages qui existent).
5. **3 choix** (« Notre choix », « Meilleur rapport qualité-prix », « Petit budget »), et un 4e quand c'est possible : « Le plus recommandé par les tests » (consensus Que Choisir, Altroconsumo, OCU, Which?, Stiftung Warentest) au lieu de « Meilleure vente », non mesurable sans l'API [vergleich-markets.md § 7.2].
6. **Tableau de 6 à 10 produits avant le 3e écran** (mobile compris) : 1re colonne fixe, en-tête collant, 3 filtres (budget, marque, taille), lien « Comment nous comparons ».
7. Encadré « Sources indépendantes » : citations datées et liées.
8. Fiches produit courtes (points forts, limite, pour qui, sources).
9. Guide numéroté et FAQ locale (« vs », « que dit [testeur] », consommation, pannes).
10. Journal « Dernières mises à jour » et liste des sources.
11. « Comparaisons voisines » : 6 à 12 cartes **de la même famille** (déclinaisons, duels, pannes, consommation).
12. Section « Momentanément indisponible » pour les modèles épuisés.

**Page déclinaison** : même gabarit, tableau dans le 1er écran, sélection propre et FAQ propre.

**Duel** : verdict en 3 lignes (« Choisissez A si…, B si… ») → tableau des fiches techniques sourcées → 3 différences d'usage → coût d'usage par an → abonnement et accessoires → alternatives → liens vers les 2 fiches et la catégorie [us-seo.md § 6.2].

**Panne** : titre = la phrase tapée → cause la plus probable en 1 phrase → étapes → quand c'est la garantie → « s'il faut remplacer » avec 3 modèles [us-seo.md § 6.5].

**Consommation** : réponse en 1 phrase → calculateur (prix du kWh saisi par le lecteur, valeur par défaut datée du pays) → règle et source → 3 modèles sobres.

**Saisonnier** (Black Friday, Sinterklaas, Reyes, mellandagsrea…) : URL stable, pages plus riches que les « Themenwelten », reliées aux comparatifs et présentes dans le sitemap [vergleich-keywords.md § 14].

#### 2.6.4 Règles de production
- **Indexer une déclinaison seulement si** elle compte au moins 5 produits distincts, au plus 2 produits en commun avec le top 5 de la page mère, au plus 20 % de phrases communes avec une page sœur, et une FAQ propre. Sinon, noindex [vergleich-keywords.md § 13].
- **Au plus 5 nouvelles pages indexées par semaine et par langue**, avec une mesure Search Console à 28 jours [vergleich-keywords.md § 15].
- **Cadence** : vergleich.org retouche ≈ 19 % de ses URL en 30 jours [vergleich-keywords.md § 9]. Viser cet ordre de grandeur sur nos pages qui rapportent (catégories et duels), avec un journal par page et un `lastmod` réel.

---

## 3. Les 10 marchés en un tableau

Priorité = potentiel × facilité à monétiser aujourd'hui × faiblesse de la concurrence × effort. Clics Google sur 28 jours au 30/10/2026 [STRATEGIE § 1].

| Marché | Poids d'Amazon | Potentiel | Concurrence (vergleich.org · leaders) | Priorité | Catégories phares (hiver → printemps) | Programmes complémentaires |
|---|---|---|---|---|---|---|
| **Italie** (/it) | 1er site marchand (41,2 M de visiteurs uniques en juillet 2025, 8,4 fois MediaWorld) ; part non publiée ; 42 % préfèrent le magasin au Black Friday [it.md § 2.1] | Fort, à confirmer par les ventes : 1er pays en clics (136, CTR 3,3 %), **aucune vente attribuée à ce jour** (liens directs amazon.it depuis le 01/11) ; petit électroménager 2,3 Md€, +5,2 % [it.md § 1] | miglioreconsiglio.it faible (≈ 15,6 k visites, 50 % des URL non touchées depuis plus d'un an) · Aranzulla, Altroconsumo, presse « shopping », fermes de comparatifs [it.md § 5] | **1** | friteuses (Ninja) · chauffage basso consumo · robots laveurs · café · lavapavimenti · visiophones ; été : climatiseur portatif, moustiquaires | Euronics_IT (Awin) ; Leroy Merlin, MediaWorld, Unieuro à vérifier ; flux Trovaprezzi / idealo [it.md § 6.5] |
| **Allemagne + AT + CH** (/de) | 63 % du CA en ligne DE en 2025, marketplace compris (IFH Köln / General Evidence, relu le 01/11) ; 40 % en AT ; CH : Galaxus n° 1, achats sur amazon.de [de.md § 2.1] | Très fort mais long : petit électroménager ≈ 8,0 Md€ (+3,7 %) ; 53 + 19 clics [de.md § 1.1] | vergleich.org dominant sur les têtes, absent des 8 SERP testées et du top 50 ChatGPT · test.de, CHIP, idealo, IMTEST [de.md § 5.1] | **2** (longue traîne seulement) | Airfryer · Saugroboter · Kaffeevollautomat · Heizen & Feuchte · Smart Home par écosystème · Powerstation ; printemps : Mähroboter, mobile Klimaanlage | **OTTO** (7 % électroménager, 12 % Home & Living, cookie 30 j) ; fenêtre multi-marchands ; Galaxus CH à vérifier [de.md § 6.5] |
| **France + Belgique** (/fr) | 1er site (42 M de visiteurs uniques, 65,3 % des internautes) ; 100 % des gains Homenura (20,51 €, 14 ventes en 2026) ; mais 95 mentions d'enseignes contre 8 d'Amazon dans 736 suggestions [fr.md § 0] | Fort : petit électroménager 4,41 Md€ (+2,9 %) ; 41 + 17 clics (BE) | **meilleurs.fr** (≈ 0,8 M visites, rentable, 42,5 % de mots-clés achetés) · Les Numériques, Que Choisir, LeBonTri ; Aperçu IA sur 17 requêtes sur 18 [fr.md § 5] | **3** (défendre) | balais et robots laveurs · airfryers · chauffage & humidité · robots cuiseurs · café · raclette ; printemps : climatiseurs, robots tondeuses et piscine | **Boulanger via Kwanko** ; Darty (Effinity / Awin à vérifier) ; Cdiscount, Fnac, ManoMano ; Kelkoo [fr.md § 6.4] |
| **Espagne** (/es) | **47,8 % des achats en ligne livrés** (CNMC T4 2025) ; 90 % des acheteurs en ligne [es.md § 2.1] | Moyen-fort : petit électroménager +3,5 % ; 33 clics ; 50,4 % des logements sans clim [es.md § 1] | mejoraelige.es faible (≈ 32 k visites, 39 % de publicité, absent des SERP relevées) · OCU, Xataka, presse « commerce » [es.md § 5] | **4** | chauffage eléctrico + brasero · robots fregasuelos · freidoras · humidité · café · robot de cocina ; été : aire portátil, ventilador de techo | PcComponentes, MediaMarkt, El Corte Inglés, Leroy Merlin ; Tradedoubler (Cecotec, Dyson) ; CJ (Dreame) [es.md § 6.5] |
| **États-Unis** (/us) | **≈ 40,5 % du e-commerce** (Statista, estimation) [us-market.md § 2.1] | Très fort mais long : e-commerce 340,2 Md$ au T2 2026 (+12,2 %) ; 4 479 impressions /en, CTR 0,2 % [us-market.md § 1.1] | bestpick.com quasi vide (248 URL) · 16 groupes de presse en 1re page sur 85 % des requêtes d'affiliation ; CR, RTINGS, Wirecutter [us-seo.md § 2] | **5** (localiser d'abord, § 5) | air fryers · robots · expresso + filtre · sécurité sans abonnement · chauffages · humidité ; printemps : clim de fenêtre | Walmart, Target, Home Depot, Best Buy (à vérifier) ; Associates US direct si besoin [us-market.md § 6.5] |
| **Royaume-Uni** (/en) | 1re enseigne du petit électroménager (GlobalData 2026), part non publiée [uk.md § 2.1] | Moyen : ≈ 2,8 Md£ ; « air fryer » −25 % depuis 2023-24 ; 17 clics [uk.md § 1] | pickbest.co.uk faible (≈ 44 k, absent des 17 SERP) · Which?, presse « Recommended », OneClearWinner [uk.md § 5] | **6** | déshumidificateurs · chauffages électriques · heated airers · couvertures chauffantes · robots · balais ; printemps : tondeuses, clim | Currys, Argos, AO, John Lewis, Lakeland, Dunelm (Awin / Skimlinks à vérifier) ; marques (SharkNinja UK, Meaco, Hive) [uk.md § 6.5] |
| **Pays-Bas + Flandre** (/nl) | **4e en ventes en ligne 2025** (Twinkle100 : bol n° 1, Albert Heijn 2, Coolblue 3 ; Amazon remonte de la 5e place), mais **devant bol en volume de recherche en décembre 2025** (Productrise) ; **la Belgique n'est pas dans la liste Global Earning** [nl.md § 2.1, § 6.5] | Moyen : électroménager en ligne +10 % en valeur ; 26 clics ; fin du « saldering » au 1/1/2027 [nl.md § 1] | **vergleich.org absent** · Consumentenbond (payant), consumententesten.nl, Coolblue [nl.md § 5] | **7** (après multi-marchands) | airfryers (+ friteuse) · robots · koffiemachine met bonen · thuisbatterij · Sinterklaas | **bol**, **Coolblue** (Awin, 2 %), Philips NL/BE (Tradedoubler, 5 %, 30 j), MediaMarkt NL (≤ 4 %), Vanden Borre [nl.md § 6.5] |
| **Canada** (/ca) | amazon.ca n° 1 (183,9 M visites sur 3 mois, 4,9 fois walmart.ca, estimation) ; Québec : 54 % des dépenses en ligne (64 % avant) [ca.md § 2.1] | Moyen, saisonnier (hiver) : e-commerce +7,8 % en 2026 ; ≈ 0 clic aujourd'hui [ca.md § 1.1] | **vergleich.org absent** · Reddit (32 graines sur 60), Consumer Reports, Protégez-Vous, enseignes [ca.md § 5] | **8** | humidificateurs · chauffages · souffleuses · thermostats (plinthes) · friteuses · café | Best Buy CA, Walmart CA, Canadian Tire, Home Depot CA ; marques (ecobee, Mysa, Breville) à vérifier [ca.md § 6.6] |
| **Pologne** (/pl) | **Mineur** : notoriété spontanée 22 % contre 85 % pour Allegro ; 10e en audience [pl.md § 2.1] | Moyen : petit électroménager ≈ 6 Md zł (+9 %) ; plus d'1 M de friteuses vendues ; 5 clics [pl.md § 1] | **vergleich.org absent** · Media Expert, Allegro, Ceneo, prorankingi [pl.md § 5] | **9** (tester) | air fryer · ekspres do kawy · robot sprzątający · odkurzacz pionowy · air intérieur · czujnik czadu | **Allegro** (Awin, 1 à 12 %, 30 j) ; Media Expert, RTV Euro AGD ; Convertiser, Webepartners [pl.md § 6.6] |
| **Suède** (/sv) | **Absent des recherches** : 0 suggestion sur 921 cite Amazon (Jula 31, IKEA 28, Elgiganten 20) [se.md § 2.1] | Moyen : électronique +15,4 % en volume en 2025, novembre +32 % ; lancé le 01/11 [se.md § 1.1] | **vergleich.org absent** · Råd & Rön, Testfakta, Bästaval.se [se.md § 5] | **10** (tester) | robotdammsugare · airfryer · sladdlös · kaffe · hiver · laddbox ; printemps : robotgräsklippare utan slinga | Adtraction, Tradedoubler (Electrolux), Awin ; Elgiganten, Clas Ohlson, Jula à vérifier [se.md § 6.5] |

**Lecture** :
- **Vague 1** (novembre → janvier) : Italie, Allemagne, France, Espagne et Royaume-Uni. Amazon y paie déjà ; liens directs vers amazon.it pour l'Italie, Global Earning pour les autres.
- **États-Unis** : on localise tout de suite, car le site actuel ne peut pas convertir. On écrit ensuite sur la longue traîne. Le marché remontera dans les priorités quand les premières ventes `homaviseus-21` le prouveront.
- **Vague 2** (Pays-Bas, Canada, Pologne, Suède) : d'abord les corrections de vocabulaire et le saisonnier, peu coûteux ; les gros chantiers de contenu viendront une fois les comptes multi-marchands ouverts (§ 6.3).
- **Point de contrôle le 30/11/2026 (M1)** : l'ordre ci-dessus suit les clics et la demande, pas les ventes. Or les seules ventes de 2026 (14, pour 20,51 €) sont françaises [STRATEGIE § 1]. Si `homaviseit-21` n'a enregistré aucune vente au 30/11, la France repasse n° 1 et l'Italie n° 2. Même règle pour l'Allemagne et l'Espagne, qui passent par Global Earning : un pays sans aucune vente après le Black Friday perd sa place au profit du suivant qui en a.
- **Désaccord** n° 9 (ordre des pays) : voir le § 7.2.

---

## 4. Fiches marché

Chaque fiche donne : les catégories à mettre en avant (dans l'ordre), celles à ajouter, les marques et modèles locaux, les mots-clés prioritaires (formulations réellement relevées), et les adaptations du site. Les études détaillées donnent 36 à 48 requêtes par pays.

### 4.1 Italie — [it.md](etudes-marches/it.md), [it-es.md](seo-etudes/it-es.md)
136 clics, CTR 3,3 %, position 10,4. La 1re page du site est « ninja vs philips » (65 clics) [it.md § 0]. Les liens partent **directement vers amazon.it** avec `homaviseit-21` (`lib/amazon.ts`).
- **À mettre en avant** :
  1. Friteuses (avant le 15/11) : cluster Ninja autour du duel n° 1, « 1 o 2 cestelli », « per 4 / 2 persone », « in vetro » (Ninja CRISPi = 1re vente « Elettrodomestici » d'Amazon.it le 01/11).
  2. Chauffage, maintenant : « Migliori stufe elettriche e termoventilatori a basso consumo 2026 », « per 100 / 50 / 40 mq », « da bagno », duel « radiatore a olio o stufa elettrica o termoventilatore ».
  3. Robots laveurs : « per parquet », « senza wifi », « peli animali », « dreame vs roborock ».
  4. Café.
  5. Balais sans fil, lavapavimenti, alternative au Folletto.
  6. Visiophones (séparer les 2 catégories).
  7. Été, prêt en avril : condizionatore portatile « senza tubo », deumidificatore, ventilatore, zanzariere ; printemps : robot tagliaerba « senza filo perimetrale » [it.md § 6.1].
- **À ajouter** : macchine da caffè a capsule (avant le BF) · lavapavimenti senza fili (avant le BF ; +64 % [it.md § 1]) · alternative al Folletto · moka elettrica · scaldasonno (le mot tapé, pas « termocoperta ») · stufa a pellet (guide prudent) · gelatiera · zanzariere elettriche · forno pizza elettrico, impastatrice · macchina sottovuoto · page « bonus elettrodomestici » seulement si le Mimit annonce une nouvelle édition [it.md § 6.2].
- **Marques locales** : De'Longhi (Pinguino, radiateurs à huile TRRS0920 et HVY1020, Dedica, Stilosa, Magnifica), Olimpia Splendid, Argo, Imetec, Ardes, Bialetti, Lavazza A Modo Mio, Ariete, Girmi, Smeg, Effeuno, BTicino, Urmet, Comelit, Vimar/Elvox. Folletto sert de repère de prix. Retirer Thermor et Sauter [it.md § 6.3].
- **Mots-clés** : friggitrice ad aria ninja o philips (pos. 3) · qual è la miglior friggitrice ninja (pos. 9,6) · friggitrice ad aria meglio 1 o 2 cestelli · quanto consuma la friggitrice ad aria (pos. 39) · miglior friggitrice ad aria qualità prezzo · miglior friggitrice ad aria altroconsumo · migliore robot aspirapolvere e lavapavimenti 2026 · dreame vs roborock · robot aspirapolvere folletto · aspirapolvere lavapavimenti senza fili · stufa elettrica per 100 mq basso consumo · radiatore a olio o stufa elettrica · condizionatore portatile senza tubo · macchina caffè a capsule migliore · umidificatore non funziona (pos. 14) [it.md § 4.2].
- **Adaptations** :
  - titres selon le § 2.3 ; duels « o » (les Italiens écrivent « o » plus que « vs ») ;
  - 3 choix « La nostra scelta / Alternativa premium / Miglior rapporto qualità-prezzo » ;
  - bloc « Cosa dice Altroconsumo », avec la nuance honnête sur Ninja : fiabilité 91, mais moyenne des tests 56 [it.md § 6.1] ;
  - corriger dans `categories.ts` : « Caffettiere Connesse » (une *caffettiera*, c'est une moka), « Stufe Intelligenti », « Ventilatori Intelligenti », doublon « Videocitofoni » ;
  - encart « ordina entro il … per Natale » ; requêtes avec enseigne (Lidl, Unieuro, MediaWorld) traitées par une comparaison honnête ;
  - vérifier chaque ASIN sur amazon.it (`AMAZON_MISSING_ASINS`).

### 4.2 Allemagne, Autriche, Suisse — [de.md](etudes-marches/de.md), [dach.md](seo-etudes/dach.md), [vergleich-parcours.md](etudes-marches/vergleich-parcours.md)
53 clics en DE, 10 en AT, 9 en CH. Les 7 périodes promotionnelles font 37 % du chiffre annuel en 15 semaines [de.md § 2.2]. On ne se bat pas sur les têtes testées, on prend les trous.
- **À mettre en avant** :
  1. **Airfryer** : retitrer sur « Airfryer » (3,3 fois « Heißluftfritteuse », +55 % contre −31 %) en gardant « Heißluftfritteuse » en sous-titre ; page Ninja ; Doppelkammer ; 10 recettes allemandes avant Noël (pic sur 5 ans entre Noël et le Nouvel An).
  2. **Saugroboter + mit Wischfunktion** avant le Black Friday : tête absente chez vergleich.org, « Dreame oder Roborock », « bis 300 / 500 Euro ».
  3. **Kaffeevollautomat** : Philips 3300 vs 5500, « Entkalken & Pflege » (6 accessoires d'entretien dans le top 30 d'Amazon.de), « Brühgruppe klemmt ».
  4. **Chauffage et humidité** : Heizlüfter energiesparend, Luftentfeuchter et page granulés, Luftreiniger.
  5. **Smart Home par écosystème** (Homematic IP, FRITZ!, tado, Bosch, Matter) : Smart Lock / Nuki (+63 %), Rauchmelder « Pflicht / piept ».
  6. **Énergie** : Powerstation (+50 %, angle « Stromausfall »), Balkonkraftwerk **mit Speicher**, Wallbox Förderung (après vérification de l'aide).
  7. **Prêts en avril** : mobile Klimaanlage et Split (PortaSplit), « ohne Abluftschlauch : was taugt das ? » ; Mähroboter ohne Begrenzungskabel en mars [de.md § 6.1].
- **À ajouter** : Küchenmaschine mit Kochfunktion (indexer, Thermomix TM7 vs Monsieur Cuisine Smart) · Wischsauger · mobile Split-Klimaanlage · Luftentfeuchter ohne Strom · Raclette & Fondue (avant le 15/12) · Vakuumierer · Siebträgermaschine · SodaStream (optionnel) [de.md § 6.2].
- **Marques locales** :
  - Airfryer : Ninja, Philips, Cosori, Tefal, Bosch MAF, Gourmetmaxx ;
  - robots : Roborock, Dreame, Mova, Ecovacs, Medion ;
  - café : Philips 2200 / 3300 / 5400 / 5500, De'Longhi, Siemens EQ, Jura (CH), Klarstein, Grundig ;
  - maison connectée : Homematic IP, FRITZ!DECT 302, tado, Bosch Smart Home II, Nuki, SwitchBot, Hekatron, X-Sense, Reolink ;
  - climat et énergie : Midea PortaSplit, Bosch Cool, Comfee, Trotec, Meaco, Dreo, Anker Solix, EcoFlow, Solakon, Marstek ;
  - jardin : Gardena, Husqvarna, Mammotion, Navimow [de.md § 6.3].
- **Mots-clés** : airfryer · ninja airfryer · heißluftfritteuse doppelkammer (+3 600 %) · monsieur cuisine smart vs thermomix · thermomix tm7 · philips kaffeevollautomat 3300 vs 5500 · saugroboter mit wischfunktion · dreame oder roborock · akku staubsauger schaltet immer ab (pos. 28) · mobile klimaanlage ohne abluftschlauch · granulat luftentfeuchter · balkonkraftwerk mit speicher · smart lock nuki · rauchmelder piept · alarmanlage ohne abo (pos. 25 à 46) [de.md § 4.2].
- **Adaptations** :
  - jamais « Test » ; « Testsieger laut Stiftung Warentest (Heft MM/AAAA) » seulement en citation datée, après validation d'un avocat ;
  - méta avec 1 ou 2 ✓ factuels ;
  - module « Unabhängige Tests » étendu à VKI / Konsument (AT) et Kassensturz (CH) ;
  - encadrés AT/CH : où acheter (MediaMarkt AT ; Galaxus, Fust, Landi en CH), « Heissluftfritteuse » (orthographe suisse), CHF, règles différentes (pas d'obligation de détecteur de fumée en Suisse, Balkonkraftwerk 600 W) ;
  - « Themenwelten » maison plus riches que les siennes : « Silvester Raclette », « Stromausfall vorbereiten », « Hitzewelle » en juin ;
  - page « So vergleichen wir » avec nos critères et leur poids (§ 5b UWG) ;
  - nettoyer : « Tests smarter Geschirrspüler », « Unseres Finales Urteil », « Silo », sous-titres en minuscules, date de l'accueil (9 octobre) [vergleich-parcours.md § 4.2].

### 4.3 France et Belgique — [fr.md](etudes-marches/fr.md), [fr-uk.md](seo-etudes/fr-uk.md)
41 clics en France et 17 en Belgique. 100 % des gains Amazon d'Homenura viennent d'ici. meilleurs.fr est le 1er site étranger du réseau et il grandit : on ne lui fait pas la guerre sur « comparatif X ».
- **À mettre en avant** :
  1. **Entretien des sols** avant le 15/11 : séparer « aspirateur laveur » (balai : +66 % en valeur, ≈ 175 € en moyenne) et « robot aspirateur laveur » (≈ 470 €) ; duels Dreame vs Tineco et Dreame vs Roborock ; paliers « moins de 200 / 300 / 500 € ».
  2. Airfryers : Ninja Crispi (n° 1 Amazon), Double Stack, Moulinex Easy Fry Dual, « en verre », recettes en janvier.
  3. **Chauffage et humidité, cette semaine** : « chauffage d'appoint » sans « connecté », bain d'huile, soufflant salle de bain, coût à 0,2001 €/kWh, page « absorbeur ou déshumidificateur ».
  4. Robots cuiseurs (indexer).
  5. Café : machine à grain et capsules.
  6. Balais.
  7. Climatiseurs et ventilateurs, prêts en avril (+222 % et +91 %).
  8. Robots tondeuses (février) et robots piscine (mars).
  9. Bornes « 7 kW monophasé ».
  10. Centrales vapeur (+34 %) [fr.md § 3.1, § 6.1].
- **À ajouter** : robots cuiseurs (Cookeo, Companion, Magimix, Thermomix TM7 et Monsieur Cuisine comparés sans lien Amazon) · appareil à raclette (avant le 20/11, « pour 2 / 4 / 6 / 8 personnes ») · crêpière (avant le 15/01) · plancha (avant mai) · plaid, couverture et surmatelas chauffants (avant le 1/12) · absorbeur d'humidité · radiateur électrique à inertie (vendu en enseigne) · sèche-linge pompe à chaleur (enseigne) · machines à capsules · Ninja Creami et machine à glaçons (été) [fr.md § 3.2].
- **Marques locales** : Moulinex, Seb, Tefal, Lagrange, Krampouz, Forge Adour, Magimix, Krups, Rowenta, Calor, Rubson, Atlantic et Noirot (en enseigne), **Netatmo en tête des thermostats** (tado ne remonte presque pas : sa saisie suggère d'abord « Tadoussac »), Somfy, Legrand, Delta Dore, Heatzy, Zodiac ; Dreame (H12 / H14 / H15, L40s), Tineco [fr.md § 6.3].
- **Mots-clés** : meilleur air fryer 2026 · air fryer ninja double · aspirateur laveur · meilleur aspirateur balai laveur sans fil · aspirateur laveur dreame ou tineco · robot aspirateur laveur dreame vs roborock · machine à café à grain pas chère · nespresso vertuo clignote rouge · cookeo infinity ou simplicity · thermomix tm7 prix · meilleur appareil à raclette pour 8 personnes · chauffage d'appoint économique · absorbeur d'humidité ou déshumidificateur · thermostat obligatoire 2027 · alarme maison sans fil et sans abonnement [fr.md § 4.2].
- **Adaptations** :
  - bloc « Ce que disent Que Choisir / Les Numériques / 60 Millions » ;
  - pages réglementaires datées : thermostat obligatoire en 2030 dans l'existant (et non 2027), kit plug and play (NF C 15-100, déclaration à Enedis, prime supprimée le 5/06/2026), indice de durabilité ;
  - requêtes avec enseigne (« airfryer boulanger », « climatiseur mobile electrodepot ») : comparatif neutre et alternative en ligne ;
  - titres à corriger : « Cafetières Connectées », « Aspirateurs Laveurs Robots », « Balances Connectées », « Connectés » à retirer des catégories climat ;
  - Belgique : Test-Achats, « airco mobile », « friteuse à air chaud » ; **vérifier que les clics belges rapportent**, car la Belgique ne figure pas dans la liste Global Earning [nl.md § 6.5].

### 4.4 Espagne — [es.md](etudes-marches/es.md), [it-es.md](seo-etudes/it-es.md)
33 clics. Pays d'appartements (64,7 %), mal climatisé (50,4 % sans clim), chauffé à l'électricité d'appoint. Cecotec est n° 1 du petit électroménager [es.md § 0].
- **À mettre en avant** :
  1. **Chauffage électrique, maintenant** : radiador eléctrico, calefactor, radiador de aceite, brasero (pic en novembre ; Taurus Tropicano « 2000+ compras » le mois dernier).
  2. Robots aspirateurs et fregasuelos (Black Friday, Reyes).
  3. Freidoras (Reyes, janvier).
  4. Deshumidificador et humidificador (décembre → février).
  5. Café à grain et capsules.
  6. Aspiradoras sin cable.
  7. Robot de cocina (à indexer) et olla programable.
  8. Sécurité « sin cuotas », cámaras exterior (+56 %), videoportero.
  9. Été : aire acondicionado portátil (+31 %), ventilador de techo, robot piscina [es.md § 6.1].
- **À ajouter** : **brasero eléctrico / mesa camilla** (aucune page chez mejoraelige) · ventilador de techo (prêt en avril) · radiador de aceite · manta eléctrica / calientacamas · olla programable · cafetera de cápsulas · termo eléctrico et estufa de pellets (seulement avec un marchand autre qu'Amazon) · page « aire acondicionado sin tubo : qué es de verdad » (l'OCU explique que c'est un ventilateur à eau) [es.md § 6.2].
- **Marques locales** : Cecotec (Cecofry, Conga, Ready Warm, BigDry, ForceClima, Mambo), Taurus, Orbegozo, Jata, Daitsu, Create, Fermax, Tegui, Golmar, Ajax ; Lidl, Mercadona et Thermomix servent de points de comparaison, sans lien. Retirer Sauter et Thermor [es.md § 6.3].
- **Mots-clés** : mejor freidora de aire calidad precio (pos. 25 à 35) · mejor freidora de aire ocu · mejor freidora de aire sin bpa y pfoa · freidora de aire consumo de luz (pos. 41) · mejor robot aspirador y fregasuelos calidad precio · conga o roomba · robot aspirador xiaomi vs cecotec · mejor cafetera superautomática calidad precio · robot de cocina lidl vs thermomix · mejor deshumidificador calidad precio · mejor radiador eléctrico bajo consumo · brasero eléctrico para mesa camilla · consumo radiador de aceite 2000w · mejor alarma hogar sin cuotas · regalos de reyes [es.md § 4.2].
- **Adaptations** :
  - bloc « Qué dice la OCU » (La Vanguardia la cite 9 fois sur sa page friteuses) ;
  - hub « ¿Cuánto consume…? » avec calculateur, qui corrige l'idée reçue « bajo consumo » : un appareil de 2 000 W consomme 2 kWh par heure à pleine puissance ;
  - duels avant le 20/11 ; pannes « no enfría / no calienta / error e15 » ;
  - calendrier : Black Friday → guide « Regalos de Reyes » avant le 1/12, avec dates limites avant le 6/01 → page « Rebajas » prête le 28/12 (soldes le 7/01) → « Día sin IVA » à URL stable ;
  - H1 de l'accueil sans « Conectadas » ; auteur hispanophone nommé.

### 4.5 États-Unis — voir le plan détaillé au § 5
Résumé : localiser d'abord (le site actuel parle européen), puis viser la longue traîne (duels de modèles, actualité produit, dimensionnement, « without subscription », coût d'usage), jamais les têtes « best X » à 12 mois.

### 4.6 Royaume-Uni — [uk.md](etudes-marches/uk.md), [fr-uk.md](seo-etudes/fr-uk.md)
17 clics. Les pages /en sont vues 2 fois plus aux États-Unis (4 479 impressions) qu'au Royaume-Uni (2 135) [SEO-PLAN § 4.7] : /us doit reprendre cette audience. Le prochain plafond Ofgem est annoncé le 25/11/2026, deux jours avant le Black Friday [uk.md § 0].
- **À mettre en avant, de novembre à mars** : déshumidificateurs · chauffages électriques et radiateurs à bain d'huile · heated airers (nouveau) · couvertures et plaids chauffants (nouveau) · robots et robots laveurs · balais · friteuses (sous-formats) · thermostats · machines à grain · sonnettes et caméras sans abonnement · purificateurs · plug-in solar, batteries, bornes. À partir d'avril : tondeuses, climatiseurs, ventilateurs, fours à pizza, Ninja Creami et machines à granité [uk.md § 6.2].
- **À ajouter** : heated airer (P0, avant le 15/11) · electric blanket / heated throw (P0) · refonte en « Electric Heaters & Oil-Filled Radiators » (P0) · guide « moisture absorber vs dehumidifier » · tumble dryer (P1) · kettle & toaster, slow cooker, **soup maker** (pic en janvier, avant le 1/01) · Creami et granité (P2) · nettoyeur de moquette / balai vapeur · four à pizza · détecteurs interconnectés (obligatoires dans tout logement en Écosse) [uk.md § 3.2].
- **Marques locales** :
  - cuisine : Ninja (références suffixées « UK » : DZ400UK, AF300UK), Tower, Russell Hobbs, Salter, Breville, Morphy Richards, Swan ;
  - humidité : Meaco, Ebac, Pro Breeze ;
  - chauffage : Dimplex, De'Longhi, Dreo, Devola, Warmlite ;
  - séchage et literie : Lakeland Dry:Soon, Minky, Addis, Dunelm, Silentnight, Dreamland ;
  - thermostats : **Hive** (absent de nos pages alors que c'est le terme le plus cherché), tado, Drayton Wiser ;
  - aspirateurs : Shark, Dyson, Vax, Henry, Gtech ;
  - robots : roborock, eufy, dreame ;
  - café : Sage.
  - Retirer Thermor et Sauter [uk.md § 6.3].
- **Mots-clés** : best dehumidifier uk · dehumidifier cost to run · meaco dehumidifier · best heated airer · electric blanket double / king size · oil filled radiator cost to run · tumble dryer cost to run · dual basket air fryer · ninja vs tower air fryer · best robot vacuum uk · shark vs dyson cordless · tado vs hive · what is a smart thermostat (+1 150 %) · video doorbell no subscription uk (pos. 45) · plug in solar panels uk [uk.md § 4.2].
- **Adaptations** :
  - coût d'usage en pence par heure au plafond Ofgem (26,32 p/kWh), **recalculé le 25/11** ;
  - encadrés « What Which? says » (lien et date, sans copier la note) et « Where to buy in the UK » ;
  - citer l'alternative Lidl, Aldi ou IKEA quand elle est recherchée (sans lien d'affiliation) ;
  - retirer « Smart » des H2, du fil d'Ariane, du maillage et du H1 de l'accueil /en ;
  - ajouter `en-GB` dans hreflang ;
  - hub « deals » : Black Week (vers le 20/11) → Boxing Day → soldes de janvier → Prime Day (juin) ;
  - moins de mise en avant pour les robots piscine, barbecues à granulés, laveurs de vitres, volets, interphones et coffres [uk.md § 6.1].

### 4.7 Pays-Bas et Flandre — [nl.md](etudes-marches/nl.md), [nl-pl.md](seo-etudes/nl-pl.md)
26 clics. **Recommandation n° 1 de l'étude : plusieurs marchands avant d'écrire plus de pages.** Amazon n'est que 4e en ventes, et les recherches citent bol, Coolblue, MediaMarkt et Action [nl.md § 0]. Il a toutefois dépassé bol en volume de recherche en décembre 2025 [nl.md § 2.1] : le bouton Amazon reste, à côté de bol et de Coolblue, et l'ordre des boutons se décide sur les clics mesurés par marchand (T4).
- **À mettre en avant** :
  1. Airfryers, avec le duel « airfryer of oven » et une nouvelle page friteuse.
  2. Robots et robots laveurs.
  3. « Koffiemachine met bonen ».
  4. **Thuisbatterij**, avant la fin du « saldering » le 1/1/2027.
  5. Steelstofzuiger.
  6. Chauffage et elektrische deken.
  7. Thermostats (tado pèse 4 fois « slimme thermostaat »).
  8. Rookmelder.
  9. Ontvochtiger et luchtreiniger.
  10. Sécurité « zonder abonnement ».
  11. Stoomreiniger.
  12. Laadpaal.
  - Mars : robotmaaier ; avril : airco, ventilator [nl.md § 6.2].
- **À ajouter** :
  - **hub Sinterklaas « cadeaus voor in huis » avant le 9/11** (arrivée de Sinterklaas le 14/11, pakjesavond le 5/12) ;
  - frituurpan / friteuse (Flandre toute l'année ; « oliebollen » pour le Nouvel An) ;
  - gourmetstel ;
  - elektrische deken ;
  - variante « thuisbatterij met stekker » ;
  - indexer `micro-ondes` [nl.md § 3.2].
- **Marques locales** : Philips (siège à Amsterdam), Princess, Tristar, Inventum (néerlandaises), Domo et Fritel (belges), Duux, HomeWizard, Toon, Engie (BE), Marstek [nl.md § 2.3].
- **Mots-clés** : beste airfryer 2026 · airfryer of oven · beste airfryer onder 100 euro · airfryer kopen met ecocheques (BE) · beste friteuse 2026 / frietketel (BE) · gourmetstel 8 personen · koffiemachine met bonen · robotstofzuiger met dweilfunctie · thuisbatterij met stekker · thuisbatterij 10 kwh prijs · slimme thermostaat tado · deurbel met camera zonder abonnement · luchtreiniger allergie (pos. 20 à 33) · mobiele airco koelt niet · sinterklaas cadeau ideeën [nl.md § 4.2].
- **Adaptations** :
  - boutons nommés bol, Coolblue, MediaMarkt, Amazon (+ Vanden Borre et Krëfel en Belgique) ;
  - bloc « Wat zegt de Consumentenbond / Test Aankoop ? » (aujourd'hui `independent-sources.ts` n'a **aucune entrée nl**) ;
  - « onder 100 euro », jamais « tot » ;
  - blocs Belgique : living, mazoutketel, ecocheques (après vérification de la liste officielle), rookmelder obligatoire en Flandre depuis le 1/1/2020, soldes dès le 2/01 ;
  - page honnête « luchtkoeler ≠ airco » (le SPF Économie met en garde contre les faux climatiseurs mobiles) ;
  - prix de l'électricité différent en NL et en BE ;
  - suivre séparément les clics NL et BE [nl.md § 6.1].

### 4.8 Pologne — [pl.md](etudes-marches/pl.md), [nl-pl.md](seo-etudes/nl-pl.md)
5 clics avant le lancement de /pl. Avant de chercher des clics Google, les acheteurs passent par la recherche d'une plateforme (40 %), puis Google (32 %), un comparateur (19 %) ou une IA (10 %) [pl.md § 2.2]. **Désaccord** n° 10 : les mesures Trends de pl.md contredisent plusieurs mots-clés du SEO-PLAN.
- **À mettre en avant** :
  1. Air fryer.
  2. Ekspresy do kawy (+ kolbowe).
  3. Roboty sprzątające.
  4. Odkurzacze pionowe (+ myjące).
  5. Oczyszczacze, nawilżacze, osuszacze (octobre → février).
  6. Grzejniki elektryczne.
  7. Kamery wifi et wideodomofony.
  8. Czujniki czadu i dymu.
  9. Klimatyzatory przenośne (mai → août).
  10. Roboty koszące (mars → juin).
  11. Stacje zasilania.
  12. Smart home [pl.md § 6.2].
  - Les 4 premières pèsent ≈ 56 % de la valeur du petit électroménager : à pousser avant le 20/11 [pl.md § 6.1].
- **À ajouter** : odkurzacz myjący (+46 %) · ekspres kolbowy (+66 % depuis 2023) · robot kuchenny z funkcją gotowania et « Thermomix czy alternatywa » (indexer) · ekspres przelewowy · robot planetarny · grzejnik olejowy et farelka · hub « air fryer przepisy » (1er sous-thème : 27,9 contre 22,2 pour « opinie ») · pages saisonnières Mikołajki (6/12), Dzień Babci (21-22/01), Komunia (mai) [pl.md § 6.3].
- **Marques locales** : De'Longhi (domine la recherche café : 46,8 contre 10,9 pour Philips), Dreame (domine les robots : 61,1), Xiaomi, Philips (Ovi), Jigoo, Amica (fabricant polonais, à signaler là où il existe) [pl.md § 2.5, § 6.4].
- **Mots-clés** : air fryer · air fryer opinie · jaki air fryer · air fryer przepisy · philips airfryer · ekspres do kawy · jaki ekspres do kawy · najlepszy ekspres do kawy · robot sprzątający · odkurzacz pionowy · oczyszczacz powietrza · ile prądu zużywa · czujnik czadu · wideodomofon · kamera wifi [pl.md § 4.2].
- **Adaptations** :
  - retitrer environ 15 catégories (§ 4.3 de pl.md) : « air fryer » en tête et « frytkownica beztłuszczowa » en sous-titre ; une page canonique « robot sprzątający » (« z mopem » ≈ 0) ; « głowica termostatyczna » ; « wideodomofon bezprzewodowy » ; « czujnik czadu » ; aucun « inteligentny » dans les titres ;
  - accueil /pl : H1 « Najlepszy air fryer 2026 », chiffres polonais (APPLiA) à la place du chapitre « marché français », date réelle ;
  - duels en FAQ seulement (« dreame czy roborock » ≈ 0,1) ;
  - menu par pièce ;
  - mentions « dostawa do paczkomatu » et « raty 0 % » quand le marchand les propose ;
  - encadré « bezpieczny zakup » ;
  - sources : testy-oczyszczaczy.pl et tests étrangers datés (aucun équivalent polonais de Which?) ;
  - calculateur à 1,16 zł/kWh par défaut ;
  - solaire de balcon en noindex.
- **Décision de Miguel** : bouton Allegro en premier, Amazon en dernier [pl.md § 6.7].

### 4.9 Suède — [se.md](etudes-marches/se.md)
Version lancée le 01/11. « bäst i test » figure dans 12,6 % des suggestions de produits ; « råd och rön » dans 27 suggestions [se.md § 4.1].
- **À mettre en avant** :
  1. Robotdammsugare (+ med mopp).
  2. Airfryer.
  3. Sladdlös dammsugare / skaftdammsugare.
  4. Kaffe : kaffemaskin bönor et kaffebryggare.
  5. Hiver : värmefläkt, oljefylld radiator, luftfuktare, avfuktare.
  6. Sécurité : smart lås ytterdörr, hemlarm utan abonnemang, övervakningskamera, brandvarnare.
  7. Énergie : laddbox (43 à 49 % de voitures neuves 100 % électriques), smart termostat element, elmätare HAN.
  8. Robotgräsklippare utan slinga (de février à juin).
  9. Luftrenare (de février à juin).
  10. Wake up light (d'octobre à février) [se.md § 6.2].
  - Ces fenêtres de saison sont des **hypothèses** : Google Trends Suède n'a pas été relevé [se.md § 0 et § 2.4]. Les confirmer (M8) avant d'y engager des pages.
- **À ajouter** : kaffebryggare (Moccamaster, Wilfa) · köksmaskin (Ankarsrum, KitchenAid ; en suédois, c'est le robot pâtissier, pas le Thermomix) · värmefilt · fönstertvätt (dans laveurs-vitres) · hubs « Energi & elpris » et « Vinter » · pages « för husbil » [se.md § 3.2].
- **Marques locales** : Electrolux, Moccamaster, Wilfa, OBH Nordica, Ankarsrum, Woods, IKEA, Husqvarna Automower, Gardena, Yale Doorman, Nimly, Verisure, Easee, Zaptec, Ngenic Tune, Tibber, Plejd, Homey, Deltaco [se.md § 2.3].
- **Mots-clés** : robotdammsugare bäst i test · robotdammsugare trösklar · roborock vs dreame · airfryer bäst i test · philips airfryer vs ninja · dammsugare bäst i test · kaffemaskin bönor bäst i test · kaffebryggare bäst i test · avfuktare källare · värmefläkt med termostat · robotgräsklippare utan slinga · smart lås ytterdörr · hemlarm utan abonnemang · brandvarnare blinkar rött · laddbox med lastbalansering [se.md § 4.2].
- **Adaptations** :
  - titres « Bästa {X} 2026 », **jamais « bäst i test » pour nous-mêmes** ; « bäst i test » apparaît seulement en citation datée d'un testeur et en FAQ (§ 2.3) ;
  - retitrer les 20 catégories du § 4.3 de se.md (« kaffemaskin bönor », « robotgräsklippare utan slinga », « smart lås ytterdörr », « brandvarnare » sans « smart », « elmätare », « hembatteri »…) ;
  - bloc « Vad säger testerna? » : Råd & Rön, Testfakta, Astma- och Allergiförbundet, Energimyndigheten, M3 ;
  - montants en couronnes (1 000 / 2 000 / 3 000 / 5 000 kr) ;
  - encadré « Säkerhet & CE » (18 % seulement savent ce que signifie le marquage CE) ;
  - calculateur par zone SE1 à SE4 (en octobre 2026, le prix était 5 fois plus élevé dans le sud, SE4, que dans le nord, SE1 [se.md § 0] ; l'écart change chaque mois, donc la valeur par défaut est datée) ;
  - ne pas promettre d'économies sur le tarif de puissance (obligation abrogée en juin 2026) ;
  - **retirer les sélections « balkongsolceller »** (non conformes selon Elsäkerhetsverket, 12/10/2026) ;
  - CO réorienté vers camping-car et bateau ;
  - Black Week complet avant le 15/11 ; mellandagsrea le 26/12.

### 4.10 Canada — [ca.md](etudes-marches/ca.md)
Le Canada n'est pas les États-Unis : chaque constat vient d'une source canadienne. Dans 21 graines sur 28, les Canadiens ajoutent eux-mêmes « canada » ou « canadian tire » à leur recherche [ca.md § 0].
- **À mettre en avant, de novembre à février** :
  1. Friteuses (pic du 28/12 au 3/01 ; « non toxic », « family of 4 », fours friteuses).
  2. **Humidificateurs** (20 % d'« air fryer » ; « for furnace »).
  3. Café (De'Longhi, Jura, Breville, Nespresso, Keurig).
  4. Chauffages, couvertures chauffantes, foyers électriques.
  5. **Thermostats** : air pulsé et plinthes électriques (23 % des ménages, 54 % au Québec), aides par province.
  6. Aspirateurs (Dyson, Bissell, Shark, Tineco).
  7. Détecteurs de fumée et de CO.
  8. **Souffleuses à neige** (nouveau).
  9. Purificateurs.
  10. Caméras et serrures (« cold weather »).
  11. Bornes de niveau 2.
  12. Guide cadeaux.
  - Été : climatiseurs de fenêtre et portatifs, déshumidificateurs, purificateurs (« wildfire smoke »), barbecue au propane [ca.md § 6.2].
- **À ajouter** : souffleuses à neige (avant le 15/11) · foyers électriques · couvertures chauffantes · fours friteuses · climatiseurs de fenêtre · Ninja Creami et Slushi · bouilloires · filtration d'eau (à étudier : « reverse osmosis water system » +4 350 %) · barbecue au propane (élargir) · nettoyeurs haute pression [ca.md § 6.3].
- **Marques locales** : ecobee (Toronto ; 62 contre 28 pour Nest), Mysa, Sinopé, Hilo (Hydro-Québec), Danby, Napoléon, Weiser, Grizzl-E, FLO, Kidde, Ricardo (Québec), Bissell, Tineco, Breville [ca.md § 2.3].
- **Mots-clés** : best air fryer canada 2026 · best air fryer canada non toxic · best humidifier canada · humidifier for furnace · best dehumidifier for basement canada · best space heater canada · best snow blower canada · electric fireplace · best heated blanket canada · ecobee vs nest / ecobee vs mysa · best smart thermostat for baseboard heaters canada · smart thermostat rebate ontario · carbon monoxide detector beeping · best video doorbell canada without subscription · boxing day deals canada [ca.md § 4.2].
- **Adaptations** :
  - « Best X in Canada (2026) », dollars canadiens, modèles nord-américains 120 V, marques d'homologation reconnues au Canada ;
  - retirer « French market », les garanties européennes et les têtes thermostatiques ;
  - hubs « Winter » et « Rebates » (Ontario, Peak Perks, Enbridge, Alberta, BC, Manitoba ; Hilo et LogisVert au Québec) ;
  - encadré « Where to buy in Canada » (Amazon, Costco, Canadian Tire, Best Buy, Walmart, Home Depot) ; libellé « Amazon », jamais « Amazon.ca » (règle des CTA neutres de `CLAUDE.md`) ;
  - sources : Protégez-Vous et Santé Canada d'abord (canadiennes) ; Consumer Reports, américain, en lien neutre seulement ;
  - **rappel DREO DR-HSH015 aussi au Canada** : environ 36 300 chauffages, rappel conjoint du 29/10/2026 (fiche CPSC relue le 01/11) ; page « Space heater recalls » en version canadienne, avec le lien Santé Canada ;
  - aucun prix promis : contre-tarifs canadiens de 15 à 50 % sur plus de 700 produits américains depuis le 08/09/2026, dont des électroménagers. **Source secondaire** (Wikipedia, qui cite le ministère des Finances) : vérifier la liste officielle avant d'en parler sur une page ;
  - **décider maintenant où va un visiteur fr-CA** : aujourd'hui /fr (France, euros). Une version fr-CA de 12 à 15 pages viendra en 2e phase [ca.md § 6.7].

---

## 5. Plan États-Unis détaillé

Sources : [us-market.md](etudes-marches/us-market.md), [us-seo.md](etudes-marches/us-seo.md), [us-site.md](etudes-marches/us-site.md). **Désaccords** n° 13, 14 et 15 : § 7.2.

### 5.1 Positionnement
**« Le comparateur qui vérifie les données publiques. »** Nous ne testons pas en laboratoire. Nous rassemblons les données ENERGY STAR, AHAM (CADR), CPSC (rappels), EIA (prix de l'électricité par État) et les certifications UL, et nous lions les tests indépendants (Consumer Reports, RTINGS). Aucun concurrent indépendant ne construit ses pages sur ces données : c'est notre méthode, à présenter comme une analyse de données publiques, jamais comme un « labo » ni un test [us-seo.md § 0-5].

**Pourquoi pas les têtes « best X »** : 16 groupes de presse occupent la 1re page sur 85 % de 10 000 requêtes d'affiliation. HouseFresh, qui teste vraiment, a perdu 91 % de son trafic Google entre l'automne 2023 et la mise à jour de mars 2024 [us-seo.md § 2]. Les recherches « best X » baissent (« best robot vacuum » −20 %, « best video doorbell » −26 %) alors que les termes génériques montent [us-seo.md § 1.2]. Avec un résumé IA, les Américains ne cliquent un lien que dans 8 % des cas, contre 15 % sans [us-seo.md § 0]. **Être cité compte autant qu'être classé.**

**Pourquoi ce marché est à part** :
- **La maison** : dans les maisons neuves de 2025, air pulsé 49 %, pompe à chaleur 48 %, chauffage à eau chaude 1 % ; garage 89 % ; sous-sol 16 % au niveau national, mais 53 % dans le Nord-Est et 50 % dans le Midwest ; 88 % des foyers climatisés [us-market.md § 0]. Ces parts portent sur les maisons neuves, pas sur le parc existant.
- **Les unités** : quarts, °F, sq ft, BTU, pints par jour, 120 V / 15 A, E26 / A19 [us-site.md § 7].
- **Les marques des meilleures ventes** : Ninja, Cosori, Chefman, Keurig, Breville, Casabrews, Levoit, Shark, Roborock, Ring, Blink, Kidde, First Alert, Dreo, Jackery [us-seo.md § 1.3 ; us-site.md § 2.1].
- **Les règles** : règle FTC du 14/08/2024 contre les faux avis ; Consumer Reports interdit l'usage commercial de son nom ; règles anti-spam de Google mises à jour le 28/08/2026 [us-seo.md § 0-9].
- **Les aides fédérales sont terminées** : 25C au 31/12/2025, 30C au 30/06/2026 [us-market.md § 1.3].

**Ce qui ne va pas aujourd'hui** [us-site.md § 1] :
- chapitre « The air fryer market in 2026: a look at France » sur l'accueil ;
- « EU energy label… GDPR » dans l'intro des 47 pages catégorie ;
- Tefal, Moulinex, Xiaomi, Thermor, Sauter, Netatmo (normes EN) dans les sélections ;
- liens vers amazon.fr avec des références européennes : Global Earning renvoie alors vers « le même produit ou un produit similaire, sinon une recherche ». Que cela convertisse mal est une **hypothèse** : aucune vente US n'est encore mesurée (M1) ;
- pied de page « HOME NURA EUROPE » ;
- 30 descriptions sur 53 citent une marque ou une norme européenne [us-market.md § 0] ;
- aucune source américaine liée ;
- coût d'usage calculé à 20 ¢ « exemple » au lieu des 18,16 ¢ de l'EIA. Ce chiffre est la moyenne nationale d'**août 2026**, un mois d'été : l'afficher avec sa date et proposer le prix de l'État.

### 5.2 Catégories
**Garder, et réécrire en vocabulaire américain** [us-seo.md § 4 ; us-site.md § 6] :

| Catégorie | Mot-clé de tête | Marques des meilleures ventes US (01/11) | Angle |
|---|---|---|---|
| airfryers | best air fryer | Ninja AF101 / AF141 / AF181, DZ201 / DZ950 ; Cosori TurboBlaze ; Chefman ; Instant Vortex ; bella | quarts ; « non-toxic / PFAS-free » ; aucun Philips ni Xiaomi dans le top 30 |
| aspirateurs-robots + laveurs | best robot vacuum and mop combo | Roborock Q7 M5+ / Qrevo, Shark AI Ultra, Dreame L40, Roomba 105 / 405, Eufy | pet hair, carpet ; faillite d'iRobot |
| aspirateurs-balais | best cordless vacuum for pet hair | Shark, Dyson, Bissell | Shark vs Dyson |
| chauffages-appoint | best space heater (sans « smart ») | Dreo, Lasko, Dr Infrared, Amazon Basics | 1 500 W / 120 V ; rappels |
| humidificateurs | best humidifier for bedroom | Levoit, Dreo | — |
| purificateurs-air | best air purifier for pets / allergies / wildfire smoke | Levoit (8 lignes sur 30), Coway, Winix, Blueair, Shark | CADR, AHAM Verifide |
| deshumidificateurs | best dehumidifier for basement (0,89 fois la tête) | Midea Cube, Waykar ; absorbeurs DampRid | pints/jour, sq ft |
| climatiseurs-mobiles | best portable air conditioner | Black+Decker, Dreo, Midea Duo | séparé de la clim de fenêtre |
| thermostats | best smart thermostat (+32 %) | ecobee, Nest, Honeywell Home, Sensi | C-wire, heat pump, rebates ; plus de « for boilers » |
| sonnettes, caméras, alarmes | video doorbell without subscription | Ring, Blink, Arlo, Wyze, Reolink, Tapo, eufy | coût sur 3 ans abonnement compris, au tarif publié et daté de chaque formule (Ring, Blink, Arlo…). Les 55,70 $/mois de Parks Associates sont la moyenne des **services de sécurité résidentielle** (Brinks 66,50 $), pas d'un abonnement de sonnette : ne pas s'en servir ici |
| serrures-connectees | best smart lock for front door / smart deadbolt | Kwikset, Yale, Level, Ultraloq, Eufy, Lockly | deadbolt, retrofit |
| detecteurs-fumee-co | best smoke detector (+ CO combo, hardwired) | Kidde, First Alert, X-Sense | UL 217 / UL 2034 |
| prises-connectees, eclairage | best smart plugs | Kasa EP10P4, Govee | 15 A, E26 / A19 |
| stations-recharge-outdoor | best portable power station for home backup | Jackery, EcoFlow, Anker SOLIX, Bluetti | **hub énergie n° 1**, à la place du solaire de balcon |
| bornes-recharge-ve | best level 2 ev charger for home | à relever | aucune promesse fiscale |
| portails-garages | **garage door openers** (renommer) | Chamberlain / LiftMaster à vérifier | 89 % de garages |
| barbecues-connectes, thermometres-viande | best pellet grill / flat top grill / wireless meat thermometer | Weber, Char-Broil, Ninja | mars → juin |
| arrosage-connecte | best smart sprinkler controller | Rachio, Orbit à vérifier | aides des services d'eau |

**Scinder** :
- `cafetieres` → **Coffee makers** (filtre et dosettes : Keurig, Black+Decker, Ninja) et **Espresso machines** (Breville Barista Express et Bambino, Casabrews, De'Longhi, Philips ; le super-automatique en sous-section) ;
- `climatiseurs-mobiles` → **Window air conditioners** (nouveau, dont U-shaped) et portable [us-market.md § 3.2 ; us-seo.md § 4].

**Nouvelles catégories, dans l'ordre** :
1. Stand mixers (KitchenAid, Hamilton Beach, Cuisinart ; Kitchen 4,5 %) : avant le 20/11 si possible, sinon pour Noël.
2. Coffee makers et espresso machines (scission) : avant le 20/11.
3. Air fryer toaster ovens (Ninja Flip, Cuisinart, Emeril ; 0,38 fois « best air fryer »).
4. Heated / electric blankets : novembre.
5. Frozen treat makers (Ninja Creami et Slushi) : décembre.
6. Window air conditioners : prêts le 15/03, avec un calculateur de BTU.
7. Water filters (norme PFAS de 4 ppt) : janvier → mars.
8. Sump pumps et secours sur batterie : printemps.
9. Pellet grills et flat-top griddles : mars → juin.
10. Countertop ice makers : mai.
11. Smart water shutoff : hiver.
12. Smart AC controllers : été.
13. Carpet cleaners.
14. Water softeners : plus tard (Home Depot et Lowe's pèsent plus qu'Amazon, hypothèse) [us-market.md § 3.2 ; us-site.md § 5].

**Ne pas pousser** :
- solaire de balcon : désindexer ; page « Plug-in solar in the US: where it's allowed » (seule loi relevée : Utah HB 340, au plus 1 200 W sur prise 120 V, certification UL) ;
- interphones (renvoyer vers les sonnettes) ; volets Somfy io ; centrales vapeur (remplacées par « clothes steamers ») ;
- gros électroménager ; batteries domestiques (pose par installateur) ; robots cuiseurs ; diffuseurs ; réveils lumière ; stations météo ;
- **coffres pour armes** (rayon existant sur amazon.com) : sujet sensible, **recommandation : ne pas le faire** (décision de Miguel) [us-market.md § 3.3 ; us-site.md § 5].

### 5.3 Pages à créer

| Type | Pages (dans l'ordre) | Priorité | Source |
|---|---|---|---|
| **Actualité produit** | « Space heater recalls » (DREO : 338 800 chauffages DR-HSH015 rappelés le 29/10/2026, un Dreo n° 20 de « Home & Kitchen ») · « Roomba after iRobot's bankruptcy » (chapitre 11 le 14/12/2025, actions annulées) · « Ring subscription plans: is it worth it » (« ring subscription » = 10,7 fois « best video doorbell ») · rappels friteuses (Cosori, 2 M d'unités en 2023) | **P0** (semaine 1) | [us-seo.md § 1.4, § 3] |
| **Duels** | Ninja vs Cosori · Breville Barista Express vs Bambino · Roomba vs Roborock · Ring vs Blink · ecobee vs Nest · Levoit Core 300 vs 400S, puis Shark vs Dyson, Roborock vs Dreame, Keurig vs Ninja, Ring vs eufy, Kwikset vs Schlage vs Yale, window vs portable AC, generator vs power station, pellet vs gas grill | P0 avant le 16/11, puis P1 | [us-seo.md § 12 ; us-site.md § 10] |
| **Usage et budget** (au moins 5 produits) | robot vacuum for pet hair · dehumidifier for basement · 50 pint dehumidifier with pump · air purifier for allergies / wildfire smoke / pets · space heater for large room · video doorbell / security camera without subscription · smoke detector hardwired · power station for home backup · air fryer under $100 · robot vacuum under $300 | P1 | [us-site.md § 10 ; us-seo.md § 6.3] |
| **Outils** | Cost to run (prix EIA par État : chauffage, déshumidificateur, friteuse) · What size dehumidifier (tableau ENERGY STAR) · What size air purifier (règle AHAM des 2/3) · BTU calculator (avant le printemps) | P1 (décembre), BTU en janvier | [us-seo.md § 6.4] |
| **Problèmes** (vocabulaire US) | smoke detector chirping / beeping 3 times / blinking red · how to descale an espresso machine (+400 %) · Roomba not charging · Nest thermostat not working (cause vérifiée avant d'écrire) · dehumidifier not collecting water · portable AC not cooling | P1 | [us-site.md § 2.2 ; us-seo.md § 3] |
| **Saisonnier** à URL stable | /us/black-friday (Black Friday → Cyber Monday → After-Christmas) · winter power outage kit · holiday gift guide kitchen · Memorial Day · Father's Day grilling · Prime Day. **Sans prix, remise en % ni « deal » attribué à un modèle** avant l'API Creators : la page dit quoi acheter et quand, pas combien | P0 (BF), puis selon le calendrier | [us-seo.md § 6.7 ; us-site.md § 5] |
| **Confiance** | « How we compare (US edition) » · module « What independent testers found » (entrée `us` dans `independent-sources.ts` : liens neutres vers CR, RTINGS, ENERGY STAR, jamais près d'un bouton d'achat) · blocs « Verified specs » et « Recall check » datés sur les fiches | P0 (page méthode), P1 (blocs) | [us-seo.md § 5] |
| **Aides** | « Is there still a tax credit for a heat pump / EV charger in 2026? » (réponse : terminé, lien IRS) · « smart thermostat rebates » (Rebate Finder ENERGY STAR par code postal) | P1 | [us-site.md § 5 ; us-seo.md § 3] |

### 5.4 Mots-clés
**P0, avant le 16/11** : ninja vs cosori air fryer · breville barista express vs bambino · roomba vs roborock · is iRobot going out of business / will my Roomba still work · ring vs blink · ring subscription worth it · video doorbell without subscription · ecobee vs nest · levoit core 300 vs 400s · best robot vacuum and mop combo · best espresso machine for home · what is a smart thermostat (+450 %) · dreo space heater recall · black friday air fryer deals [us-seo.md § 3].

**P1, sous 90 jours** : best air fryer toaster oven · best robot vacuum for pet hair · best super automatic espresso machine · espresso machine with grinder · best drip coffee maker · keurig vs ninja · best air purifier for allergies · best air purifier for wildfire smoke · what size air purifier do I need · best dehumidifier for basement · what size dehumidifier do I need · 50 pint dehumidifier with pump · smart thermostat rebate · smart thermostat without c wire · best smart lock for front door · kwikset vs schlage vs yale smart lock · best stand mixer · how to descale an espresso machine · smoke detector chirping · cost to run a space heater · best portable power station for home backup [us-seo.md § 3 ; us-site.md § 2.2 ; us-market.md § 4.2].

**À préparer pour le printemps** : best window air conditioner (+27 %) · window vs portable air conditioner · u shaped window air conditioner · what size air conditioner do I need · ASHRAE vs DOE BTU · best pellet grill · best flat top grill · best sump pump battery backup · best water filter for pfas · best under sink water filter [us-market.md § 4.2 ; us-seo.md § 3].

**À ne pas viser en pages** : les recettes (« air fryer chicken » mène à des SERP de recettes) ; « best X reddit » ; les séries de montants ronds (« under $100 / 150 / 200 … ») [us-seo.md § 3]. Une seule page budget par catégorie, au seuil le plus cherché (air fryer under $100, robot vacuum under $300 : § 5.3), triée par `priceNumeric` sans afficher de prix.

### 5.5 Saisonnalité (mesurée dans Google Trends US [us-seo.md § 9], dates du calendrier)

| Période | Ce qui monte | Pages prêtes avant |
|---|---|---|
| Thanksgiving 26/11, **Black Friday 27/11**, Cyber Monday 30/11/2026 | best robot vacuum ×3,8 · roborock ×4,0 · best espresso machine ×3,1 · best video doorbell ×2,1 · best smart lock ×2,0 · best air fryer ×1,9 · best air purifier ×1,9. 43 % des Américains font l'essentiel de leurs achats high-tech entre Thanksgiving et le Cyber Monday [us-market.md § 0] | **16/11/2026** |
| Décembre (cadeaux) | coffee maker au plus haut ; 43 % des acheteurs ont commencé avant novembre | 1/12 |
| Janvier | air fryer au plus haut ; space heater ×27 par rapport à juin (pic du 18/01/2026) | 15/12 |
| 15/02/2027 Presidents' Day | gros électroménager (tradition non sourcée) | faible priorité |
| Avril → juin ; Memorial Day 31/05/2027 | portable AC ×20 et window AC ×13 en juin ; mini-split au plus haut en juillet | **1/04/2027** |
| Prime Day (juillet en 2025 ; date 2026 à confirmer) | best robot vacuum ×2,8 · ring doorbell ×1,8 | 4 semaines avant |
| Juin → août | dehumidifier au plus haut en juillet ; smart lock et ecobee aussi | 15/05/2027 |

Attention : Trends US montre une **anomalie du 15/03 au 28/06/2026**, où tous les termes ont été multipliés par 3 à 6. Cette fenêtre est exclue des moyennes [us-seo.md § 0.1].

### 5.6 Plan à 90 jours (2/11/2026 → 31/01/2027)
Fusion des plans de [us-seo.md § 12] et [us-site.md § 10].

| Semaines | Technique | Contenu | Miguel |
|---|---|---|---|
| **S1 (2–8/11)** | intro des catégories /us sans UE ni RGPD, avec test bloquant (`lib/catalog/content.ts:126`) ; accueil sans chapitre France, FAQ corrigée, top 3 aligné sur les notes ; pied de page « Home Nura » ; coût EIA à 18,16 ¢ ; Search Console en vue pays = US + /us/ ; IndexNow | têtes `category-heads/us.ts` des 10 catégories de saison ; scission du café ; « How we compare (US edition) » ; « Space heater recalls » ; « Roomba after iRobot's bankruptcy » | un vrai clic depuis les États-Unis (VPN) sur 3 liens /us (une référence UE, une US) ; vérifier `homaviseus-21` dans les rapports |
| **S2 (9–15/11)** | `asinByMarket.us` pour les 6 catégories du Black Friday (liens toujours via amazon.fr ou recherche du modèle, `amazonMarketModelUrl`, tant que les liens directs amazon.com ne sont pas vérifiés) ; bouton unique au libellé neutre (« View on Amazon » aujourd'hui, « Check price on Amazon » en A/B ; jamais « Amazon.com ») ; mention d'affiliation près du 1er bouton (FTC) ; libellés du menu US | « Our 3 picks » US sur 15 catégories ; 6 duels P0 ; hub /us/black-friday (robots, expresso, friteuses, purificateurs, sonnettes, serrures, Ninja Creami) | trancher l'auteur affiché |
| **S3–S4 (16–30/11)** | suivi quotidien de Search Console pendant la semaine du Black Friday ; A/B des libellés de bouton sur `/api/click` | « Ring subscription: is it worth it » ; « video doorbell without subscription » ; hub expresso ; « what is a smart thermostat » ; stand mixers et coffee makers | — |
| **S5–S8 (décembre)** | calculateur « cost to run » par État ; entrée `us` dans `independent-sources.ts` ; accueil « Shop by need » et bandeau saisonnier | rebates ; super-automatic espresso ; 6 pages problème US ; heated blankets ; Creami et Slushi ; 3 Shorts (duels) | comptes YouTube et Reddit nommés |
| **S9–S13 (janvier)** | calculateurs déshumidificateur et purificateur | relations presse : « Recall Radar T4 2026 » et « coût d'un chauffage par État » (pic de janvier) ; préparation du printemps : basement dehumidifier, 50 pint with pump, window vs portable AC, ASHRAE vs DOE, catégorie window AC, water filters PFAS ; refonte des 5 pages /us les plus vues | Bing Webmaster (volumes US) ; 15 SERP google.com relevées |

**Charge** : environ 35 à 40 nouvelles pages /us en 13 semaines, plus les réécritures. Cela tient dans le plafond de 5 nouvelles pages indexées par semaine (§ 2.6.4), sauf en S2, qui en prévoit 7 : publier 2 des 6 duels dès S1. Ce volume compte dans le budget de relecture commun à tous les marchés (§ 6.5).

**Mesure, chaque lundi** : Search Console filtré sur États-Unis et /us/ ; gains `homaviseus-21` ; clics `/api/click` par page ; panel IA mensuel de 30 questions US.

**Objectifs à 90 jours** (des objectifs, pas des prévisions) [us-seo.md § 12 ; us-site.md § 12] :
- CTR US ≥ 1 % sur les 20 premières pages (0,2 % aujourd'hui sur /en) ;
- 10 duels et 6 pages problème dans le top 10 (objectif haut : la section /us part d'un CTR de 0,2 %) ;
- une 1re vente attribuée à `homaviseus-21` avant le Cyber Monday.

**Ce que seul Miguel décide pour /us** :
1. Si les clics US convertissent mal via Global Earning : ouvrir un compte Associates US, avec des liens amazon.com directs.
2. Auteur : garder le nom de plume « Emily Carter », déclaré comme tel, ou nommer un vrai relecteur du métier (technicien CVC, barista).
3. Coffres pour armes : non recommandé.
4. Mention CCPA : à faire valider par un juriste.
5. Programmes Walmart, Target, Home Depot, Best Buy.

---

## 6. Backlog d'implémentation priorisé

**Score = impact × (6 − effort)**, sur 25 ; impact et effort de 1 à 5. Le score classe les actions, il ne remplace pas les dates de saison (Black Friday le 27/11).

### 6.1 Ce que l'équipe technique peut faire tout de suite

| ID | Action | Fichiers ou zones | Impact | Effort | Score |
|---|---|---|---|---|---|
| T1 | **Localiser /us et /ca** : intro des catégories sans UE, RGPD, EN 14604 ni €, accueil sans chapitre France, FAQ, pied de page, unités, coût EIA, top 3 aligné, + test bloquant ; même correction pour l'accueil /pl (chapitre français, date) | `lib/catalog/content.ts:126`, `dictionaries/us.json` (et ca, pl), `app/[lang]/page.tsx`, `components/ui/SiteFooter.tsx:177` [us-site.md § 10 ; ca.md § 6.1 ; pl.md § 6.1] | 5 | 2 | 20 |
| T4 | **Suivi des clics par emplacement, marchand et pays** (`picks`, `table`, `card`, `body`, `sticky`), puis A/B des libellés de bouton | `/api/click`, `lib/analytics.ts` [vergleich-parcours.md § 4.2-8] | 4 | 1 | 20 |
| T5 | **Retitrer sur les vrais mots** : Airfryer (DE) ; environ 15 titres PL ; 20 titres SV ; 4 titres IT et le doublon ; FR (café, balai laveur, « connectés ») ; UK (H2, fil d'Ariane, maillage) ; H1 d'accueil ES et UK ; têtes US et CA. L'ancien mot reste en synonyme ; test bloquant | `lib/catalog/category-heads/*.ts`, `categories.ts`, `scripts/seo/check-category-heads.ts` | 4 | 2 | 16 |
| T8 | **Module « Sources indépendantes » pour les 9 autres langues** (structure ; contenus en C8) | `lib/catalog/independent-sources.ts` (seul `de` existe) [nl.md § 6.1 ; us-site.md § 9] | 4 | 2 | 16 |
| T11 | **Pages saisonnières par marché** à URL stable : variante US du Black Friday, Sinterklaas, Mikołajki, Reyes, mellandagsrea, Boxing Day, soldes de janvier | `lib/black-friday/config.ts` et routes saisonnières | 4 | 2 | 16 |
| T2 | **Références produits par marché** : `asinByMarket` (us, ca), contrôle des ASIN sv, pl, es, nl ; `AMAZON_MISSING_ASINS` par marché | `lib/products.ts`, `lib/amazon.ts` [us-site.md § 10-3 ; se.md § 6.1-4] | 5 | 3 | 15 |
| T3 | **Gabarit catégorie « réponse d'abord »** (§ 2.6.3) : tableau avant le 3e écran, puces, sommaire, journal, bloc « Pourquoi ce classement » et page « Comment nous comparons » (critères pondérés), maillage de la même famille ; d'abord sur 6 catégories de saison | `components/CategoryHub.tsx`, `ComparisonTable` [vergleich-parcours.md § 4.1] | 5 | 3 | 15 |
| T10 | **Encadré multi-marchands « Où l'acheter »** : boutons nommés, activés programme par programme, mesure par marchand, aucun prix hors flux autorisé et aucun prix dans un bloc qui porte un bouton Amazon ; **avant le 1er marchand non-Amazon**, corriger les textes qui disent qu'Amazon est notre « seule source de revenus » (`trust_section_content` des dictionnaires) et la mention d'affiliation | composants d'achat, `lib/amazon.ts` et nouvelle table des marchands | 5 | 3 | 15 |
| T12 | **Risques** : retirer les sélections de solaire de balcon en SV, le désindexer ou le réorienter en US, noindex envisagé en PL ; « smart » retiré des titres de gros électroménager | catalogue, robots par langue [se.md § 6.1-11 ; us-site.md § 6] | 3 | 1 | 15 |
| T6 | **Catégories par marché** (activation et indexation par langue) : indexer `robots-multifonctions` (FR, DE, ES, IT, PL) et `micro-ondes` (NL) ; scinder balai laveur / robot laveur, café US, clim de fenêtre | `categories.ts`, routage, sitemap | 4 | 3 | 12 |
| T7 | **Navigation** : méga-menu avec catégories, accueil saisonnier par marché, recherche avec autocomplétion, libellés harmonisés | `components/Navbar.tsx`, `meta-silos`, accueil | 4 | 3 | 12 |
| T9 | **Calculateur de consommation + hub** : prix du kWh saisi, valeur par défaut datée par marché (FR 0,2001 € ; UK 26,32 p ; IT 0,3111 € ; PL 1,16 zł ; US par État ; SE par zone) | nouveau composant + pages [SEO-PLAN P1-3] | 4 | 3 | 12 |
| T13 | hreflang `en-GB` ; choix du x-default ; routage des visiteurs fr-CA | `lib/i18n.ts` [uk.md § 6.4 ; ca.md § 6.7] | 2 | 1 | 10 |
| T14 | Veille trimestrielle des 6 sitemaps du réseau VGL (nombre d'URL, part modifiée à 120 jours, nouvelles formes de pages) | script | 2 | 1 | 10 |

### 6.2 Ce qui demande du contenu

| ID | Action | Marchés | Impact | Effort | Score |
|---|---|---|---|---|---|
| C1 | **Black Friday rempli de catégories locales avant le 15/11** ; Sinterklaas avant le 9/11 ; Black Week SE ; hub US | tous | 5 | 2 | 20 |
| C4 | **Pages panne retitrées en natif** (30 par langue, les plus proches de vraies requêtes) + nouvelles : Rauchmelder piept, smoke detector chirping, brandvarnare blinkar rött, czujnik czadu piszczy, CO detector beeping | tous | 4 | 2 | 16 |
| C7 | **Robots cuiseurs** : Cookeo et Thermomix (FR), Thermomix vs Monsieur Cuisine (DE), Lidl vs Thermomix (ES), « Thermomix czy alternatywa » (PL), vs Bimby (IT), avant décembre | FR, DE, ES, PL, IT | 4 | 2 | 16 |
| C8 | **Sources indépendantes par langue** : Altroconsumo, OCU, Que Choisir / Les Numériques / 60 Millions, Which?, Consumentenbond / Test Aankoop / Tweakers, Råd & Rön / Testfakta / Astma- och Allergiförbundet / Energimyndigheten, testy-oczyszczaczy.pl, CR / RTINGS / ENERGY STAR (liens neutres), Protégez-Vous / Santé Canada, VKI / Kassensturz | tous | 4 | 2 | 16 |
| C11 | **Actualité US** : rappel DREO, Roomba après la faillite, formules Ring ; puis « Recall Radar » pour la presse | US | 4 | 2 | 16 |
| C2 | **Pack hiver localisé** avant le 15/11, réduit aux pages du § 6.5 (le reste en décembre) : chauffage non connecté élargi, absorbeurs et granulés, couvertures chauffantes (FR, UK, NL, CA, US, IT, ES, SE), heated airer (UK), brasero (ES), « humidifier for furnace » et souffleuses (CA) | tous | 5 | 3 | 15 |
| C3 | **Duels P0** : IT 5, DE 5, ES 5, FR 4, UK 4, US 6, SE 3, CA 3, NL 3 (PL en FAQ) — listes au § 4 et au § 5 | tous | 5 | 3 | 15 |
| C5 | **Sélections localisées** : marques locales, ASIN vérifiés ; Thermor et Sauter retirés hors de France ; Hive (UK), Netatmo en tête (FR), Cecotec (ES), Pinguino (IT), ecobee et Mysa (CA)… | tous | 5 | 3 | 15 |
| C6 | **Réponse rapide de 40 à 70 mots** par catégorie et par marché, à la place de l'intro commune | tous | 4 | 3 | 12 |
| C10 | **Nouvelles catégories cuisine** : capsules (FR, IT, ES, UK, CA), moka (IT), kaffebryggare (SE), filtre et expresso (US), batteur (US), köksmaskin (SE), robot planetarny (PL), fours friteuses (US, CA), raclette (FR, DE), gourmetstel et frituurpan (NL), Creami et Slushi | selon le pays | 4 | 3 | 12 |
| C12 | **Pages réglementaires datées** : thermostat 2030 et plug and play (FR) ; Rauchmelder Pflicht et Balkonkraftwerk anmelden (DE) ; czujnik czadu 2030 (PL) ; plug-in solar et alarmes interconnectées en Écosse (UK) ; balkongsolceller (SE) ; crédits d'impôt terminés (US) | FR, DE, PL, UK, SE, US | 3 | 2 | 12 |
| C13 | **Été préparé tôt** : window AC (US, 15/03), mobile Klimaanlage (DE, avril), climatiseurs (FR, avril), ventilador de techo (ES, avril), robots tondeuses (février-mars) | tous | 4 | 3 | 12 |
| C14 | Une étude de données par pays et par trimestre pour la presse (ENERGY STAR, coût d'usage par État, Stromausfall…) | US puis DE et FR | 3 | 3 | 9 |
| C9 | **Déclinaisons contrôlées** (§ 2.6.4), au plus 5 par semaine et par langue : Airfryer / Saugroboter / Kaffeevollautomat (DE), per 4 persone / in vetro / per 100 mq (IT), para mascotas / calefactor baño (ES), moins de 200 / 300 / 500 € et raclette pour N (FR), met / zonder / onder (NL), trösklar / utan slinga / under 3000 kr (SE), basement / pet hair (US), for basement / baseboard (CA) | tous | 4 | 4 | 8 |

### 6.3 Ce que seul Miguel peut faire

| ID | Action | Pourquoi | Impact | Effort |
|---|---|---|---|---|
| M1 | **Vérifier la conversion par pays** dans Partenaires Amazon (rapports par identifiant `homavise*-21`), avec un vrai clic depuis les États-Unis et le Canada ; vérifier le taux appliqué via Global Earning ; vérifier la Belgique, l'Autriche, la Suisse, l'Irlande, l'Australie et la Nouvelle-Zélande (servies par /fr, /nl, /de et /en, absentes de la liste Global Earning relevée) ; **relevé daté le 30/11** pour le point de contrôle du § 3 | la Belgique n'est pas dans la liste Global Earning [nl.md § 6.5] ; liens directs .com, .ca, .pl, .se non vérifiés (`lib/amazon.ts`) | 5 | 1 |
| M4 | **API Creators** : créer l'application dès qu'Amazon répare la page, puis coller les clés dans Vercel | seuil atteint (12 ventes expédiées sur 30 jours au 31/10) ; page en panne chez Amazon, support contacté le 31/10 (note de suivi Homenura) ; cela débloque prix, images et liens /dp/ | 5 | 1 |
| M2 | **Awin** : vérifier les statuts, recandidater OTTO DE et Coolblue NL/BE, demander Euronics IT, Vanden Borre et Allegro PL | **Désaccord** n° 8 : le relevé du compte (30/10) ne trouve aucune candidature OTTO ni Coolblue | 5 | 2 |
| M3 | **Nouveaux réseaux** : Kelkoo éditeur (flux de prix et d'images légaux, 29 marchés annoncés) ; Tradedoubler (Philips NL/BE 5 %, MediaMarkt NL, Cecotec et Dyson ES, Electrolux SE) ; programme partenaire bol ; Kwanko (Boulanger) ; CJ (Dreame ES) ; Adtraction (SE) ; Convertiser ou Webepartners (PL) ; programmes US et CA | Amazon est 4e aux Pays-Bas, mineur en Pologne, absent des recherches en Suède | 5 | 3 |
| M5 | **Décisions de liens** : « Allegro d'abord » en /pl ; compte Associates US ou CA direct si M1 est mauvais ; destination des visiteurs fr-CA | dérogations à « Amazon seul » | 4 | 1 |
| M7 | **Bing Webmaster** (volumes de mots-clés, rapport « AI Performance ») et soumission à **Brave** | toujours en attente depuis le SEO-PLAN ; seule source de volumes | 4 | 1 |
| M6 | **Auteurs** : un expert réel par langue, ou des noms de plume assumés sans expertise prétendue | aux États-Unis, la règle FTC vise les avis de personnes fictives ou sans expérience [us-seo.md § 5] | 3 | 2 |
| M8 | **Relevés dans son Chrome** (bloqués pour les agents) : meilleures ventes amazon.nl, .se, .pl, .ca, .es, bol, Elgiganten ; Google Trends Suède ; 15 SERP google.com et google.ca | données manquantes signalées dans 6 études | 3 | 2 |
| M9 | **Validations juridiques** : « bäst i test » en citation d'un testeur (SE), « Testsieger laut Stiftung Warentest » (DE), CCPA (US), ecocheques (BE) | risques de publicité trompeuse | 3 | 2 |
| M10 | Comptes YouTube (Shorts de duels), Reddit nommé, Pinterest Business | YouTube et Reddit sont les domaines les plus cités par les AI Overviews aux États-Unis [us-seo.md § 2] | 3 | 2 |

### 6.4 Les 10 à lancer d'abord

| # | Action | Qui | Échéance | Fini quand |
|---|---|---|---|---|
| 1 | **T1 — Localiser /us et /ca** (intro, accueil, pied de page, unités, têtes) | technique | 8/11 | aucune mention « EU », « GDPR », « € » ni « France » dans /us et /ca ; test bloquant vert |
| 2 | **M1 + T2 — Vérifier que chaque pays rapporte, poser les références produits par marché** | Miguel (relevés, vrais clics), technique (`asinByMarket`) | 8/11, puis relevé le 30/11 | un tableau par identifiant `homavise*-21` (clics, commandes, gains) ; décision du point de contrôle du § 3 notée |
| 3 | **C1 + T11 — Black Friday rempli de catégories locales** ; Sinterklaas avant le 9/11 ; Black Week suédoise ; hub US | contenu | 15/11 | chaque hub lie au moins 6 catégories locales, sans prix ni remise, à URL stable et dans le sitemap |
| 4 | **T4 + T3 — Suivi des clics par emplacement, puis gabarit « réponse d'abord »** sur 6 catégories de saison | technique | T4 le 8/11, T3 le 15/11 | `/api/click` ventile par emplacement, marchand et pays ; tableau avant le 3e écran mesuré sur mobile (390 px) |
| 5 | **T5 — Retitrer sur les vrais mots** (Airfryer DE, air fryer PL, 20 titres SV, IT, FR, UK) | technique + contenu | 15/11 | `check-category-heads` vert ; l'ancien mot reste en synonyme ; aucun « test » ni « bäst i test » pour nous-mêmes |
| 6 | **C2 — Pack hiver localisé**, limité aux pages du § 6.5 avant le Black Friday | contenu | 15/11 | pages en ligne avec sources locales datées ; le reste passe en décembre |
| 7 | **C3 — Duels P0** : Italie et Allemagne d'abord, 6 duels US | contenu | US le 16/11 ; autres langues d'ici le 13/12 | au plus 5 nouvelles pages indexées par semaine et par langue ; fiches techniques sourcées |
| 8 | **C7 + T6 — Robots cuiseurs indexés, catégories scindées** (balai laveur / robot laveur, café US) | technique + contenu | 1/12 | catégories activées par marché ; au moins 5 produits distincts chacune |
| 9 | **T8 + C8 — Sources indépendantes** : Italie, Espagne, France, Royaume-Uni d'abord | technique + contenu | 13/12 | une entrée par langue dans `independent-sources.ts`, chaque citation liée et datée |
| 10 | **M2 + M3 — Comptes multi-marchands** (Awin vérifié, Kelkoo, bol, Tradedoubler, Allegro) | Miguel | 30/11 | statut écrit de chaque candidature ; T10 lancé seulement après une acceptation |

**M4 (API Creators)** reste hors de la liste parce qu'il ne dépend pas de nous : la page d'Amazon est en panne. Le relancer chaque lundi, car c'est lui qui débloque prix, images et liens /dp/.

### 6.5 Capacité : ce qui tient avant le Black Friday

**Hypothèse de capacité** (à mesurer en semaine 45, puis à corriger) : rédaction par IA, relecture humaine de 30 à 45 minutes par page (sources ouvertes une par une, modèle vérifié sur la boutique), soit **environ 20 à 25 pages relues par semaine, toutes langues comprises**. Le backlog du § 6.2 en demande beaucoup plus : environ 40 duels, 300 pages panne et 600 réponses rapides (61 catégories × 10 marchés). Publier vite et en masse expose aussi aux règles anti-spam de Google sur le contenu produit à grande échelle [us-seo.md § 0-9].

**Avant le 20/11**, on ne fait donc que :
1. T1, T4 et T5 (corrections et retitrages, sans nouvelle page) ;
2. C1 : un hub Black Friday par marché, rempli de catégories locales ; Sinterklaas (NL) avant le 9/11 ;
3. **au plus 25 pages neuves** : US 10 (§ 5.6, S1–S2), Italie 4 (cluster friteuses autour du duel n° 1), France 3 (scission aspirateur laveur et 2 duels), Allemagne 3 (Saugroboter mit Wischfunktion, Dreame oder Roborock, Airfryer Ninja), Royaume-Uni 3 (heaters refondus, heated airer, electric blanket), Espagne 2 (brasero, radiador eléctrico).

Tout le reste du § 6.2 (pages panne, réponses rapides, déclinaisons, vague 2) passe **après le Cyber Monday (30/11)**, dans l'ordre des scores, et selon le point de contrôle des ventes du § 3.

---

## 7. Sources

### 7.1 Études détaillées (annexe : [`etudes-marches/`](etudes-marches/))

| Étude | Contenu | Méthode et limites principales |
|---|---|---|
| [vergleich-keywords.md](etudes-marches/vergleich-keywords.md) | comptes de Team Internet ; classement des 18 797 URL par famille de mots-clés ; 50 pages lues et 120 échantillonnées ; anatomie d'une page ; cadence ; failles E-E-A-T ; backlog allemand | quota de recherche épuisé ; pages lues à faible débit |
| [vergleich-markets.md](etudes-marches/vergleich-markets.md) | comptes 2022–2026 ; sitemaps des 5 sites étrangers ; méthode de lancement d'un pays ; catégories par pays ; décisions par marché | vergleich.org en HTTP 403 ; Similarweb sous-estime |
| [vergleich-parcours.md](etudes-marches/vergleich-parcours.md) | 12 rubriques et 511 groupes ; formules de titre par type de page ; 3 parcours écran par écran (ordinateur, mobile à 390 px) ; règle de classement ; comparaison avec Homenura /de | redimensionnement mobile non réalisé (rendu CSS seulement) |
| [fr.md](etudes-marches/fr.md) · [uk.md](etudes-marches/uk.md) · [de.md](etudes-marches/de.md) · [es.md](etudes-marches/es.md) · [it.md](etudes-marches/it.md) · [nl.md](etudes-marches/nl.md) · [pl.md](etudes-marches/pl.md) · [se.md](etudes-marches/se.md) · [ca.md](etudes-marches/ca.md) | pour chaque pays : marché, habitudes d'achat, catégories, 36 à 48 requêtes, concurrence (dont le site local de vergleich.org), recommandations | sources du pays ; aucun volume absolu ; certaines listes de meilleures ventes bloquées (amazon.nl, .se, .pl, .ca, .es) ; Trends Suède non relevé |
| [us-market.md](etudes-marches/us-market.md) · [us-seo.md](etudes-marches/us-seo.md) · [us-site.md](etudes-marches/us-site.md) | États-Unis : marché (Census, EIA, ENERGY STAR, Parks, CTA, NRF) ; SEO (Trends US, meilleures ventes, CPSC, SEC) ; état réel de /us et liste technique | aucune SERP US relevée ; Wirecutter et CNET illisibles |

Dans les études, les renvois `studies/…` et `scratchpad/studies/…` désignent les mêmes fichiers, désormais dans `etudes-marches/`. Les relevés bruts d'autocomplétion cités par se.md et us-site.md (`se-data/`, `us-data/`) sont restés dans le dossier temporaire de la session ; ils n'ont pas été copiés.

Documents de départ : [`STRATEGIE-2026-10.md`](STRATEGIE-2026-10.md), [`SEO-PLAN-2026-10.md`](SEO-PLAN-2026-10.md), [`seo-etudes/dach.md`](seo-etudes/dach.md), [`seo-etudes/fr-uk.md`](seo-etudes/fr-uk.md), [`seo-etudes/it-es.md`](seo-etudes/it-es.md), [`seo-etudes/nl-pl.md`](seo-etudes/nl-pl.md), [`seo-etudes/geo-ia.md`](seo-etudes/geo-ia.md), [`seo-etudes/gsc-2026-10-30.md`](seo-etudes/gsc-2026-10-30.md). Code lu : `lib/catalog/categories.ts` (61 catégories, dont 53 indexables), `lib/amazon.ts` (identifiants par marché), `lib/authors.ts`.

### 7.2 Désaccords entre études, et arbitrage retenu

| # | Sujet | Ce que disent les études | Arbitrage |
|---|---|---|---|
| 1 | Trafic de vergleich.org | « 4 M visites/mois » [STRATEGIE § 1] ; ≈ 4,7 M (Similarweb) [dach.md] ; > 16 M déclarées et 169,4 M sessions en 2025, soit ≈ 14 M/mois [vergleich-markets.md § 1 ; vergleich-keywords.md § 1] | Échelle : chiffres du groupe. Proportions entre canaux et entre pays : Similarweb, qui sous-estime les petits sites |
| 2 | Revenu net pour 1 000 sessions | 82 $ (257 $ × 32 %) [vergleich-markets.md § 1.1] contre ≈ 123 $ (20,8 M$ ÷ 169,4 M sessions) [vergleich-keywords.md § 0] | Écart dû au périmètre : l'indicateur de sessions ne couvre que 67 % du segment en 2025. Retenir 80 à 120 $ |
| 3 | Longueur des pages vergleich.org | médiane ≈ 5 700 mots (48 pages) [vergleich-keywords.md § 5] ; ≈ 6 300 à 8 700 [fr.md § 5.2, d'après dach.md] | Échantillons différents ; l'ordre de grandeur suffit (5 000 à 9 000) |
| 4 | Pages « panne » chez vergleich.org | 2 [vergleich-keywords.md] ; ≈ 3 [vergleich-parcours.md, d'après dach.md] | Sans effet : le trou est réel dans les deux cas |
| 5 | Taux de commission Amazon | « catégories à 6 % » [STRATEGIE § 4] ; FR 6 % cuisine-maison, barème de juin 2025 à confirmer [fr.md § 6.4] ; amazon.de et amazon.es 5 % cuisine-maison, 2,5 % gros électroménager [de.md § 6.5 ; es.md § 0] ; US Kitchen 4,5 %, Home 3 % [us-market.md § 0] ; amazon.se « jusqu'à 12 % » [se.md § 6.5] | On ne sait pas quel barème s'applique via Global Earning (FR ou pays d'achat). Planifier sur les taux locaux ; M1 tranche |
| 6 | Liens Amazon | « Tous les liens sur amazon.fr + homenuraen05-21 » [STRATEGIE § 2] ; it.md écrit « amazon.fr + Global Earning » pour l'Italie ; pl.md s'inquiète de `homavisepl-21` | **Le code fait foi** (`lib/amazon.ts`, en ligne le 01/11) : un identifiant par marché (`homavise*-21`, vérifiés le 31/10 dans « Gérez vos ID de suivi ») ; l'Italie part directement vers amazon.it ; les autres passent par amazon.fr. Mettre à jour STRATEGIE § 2 |
| 7 | Belgique et Global Earning | STRATEGIE suppose les 10 pays payés ; nl.md : la Belgique ne figure pas dans la liste (US, CA, UK, DE, IT, ES, NL, PL, SE) | À vérifier par Miguel (M1) : 17 clics belges sur /fr, plus la Flandre |
| 8 | Statut des candidatures Awin | Contexte du projet, STRATEGIE et de.md : OTTO, Coolblue et De'Longhi « en attente » ; le relevé du compte Awin 1255925 du 30/10 (note de suivi Homenura) : aucun marchand accepté, De'Longhi FR refusé, **aucune candidature OTTO DE ni Coolblue enregistrée** | Miguel vérifie et recandidate (M2) ; ne pas compter sur OTTO pour le Black Friday |
| 9 | Ordre des pays | STRATEGIE § 8 (validé le 30/10) : l'allemand en priorité ; vergleich-markets : Italie 1, Espagne 2, France 3, Allemagne 4, États-Unis 9 ; les 3 études US : très fort potentiel | Retenu : Italie 1, Allemagne 2 (longue traîne, ce qui respecte la décision du 30/10), France 3, Espagne 4, États-Unis 5 (localiser d'abord, remonter si la conversion se confirme). **Révisé le 30/11 selon les ventes par pays** (§ 3) : à ce jour, seule la France vend |
| 10 | Vocabulaire polonais | SEO-PLAN § 4.5 : « frytkownica beztłuszczowa », « robot sprzątający z mopem », « dzwonek z kamerą (≠ wideodomofon) » ; pl.md (Trends 2026) : « air fryer » 43,5 et « airfryer » 49,8 contre 4,9 ; « z mopem » ≈ 0 ; « wideodomofon » 44,5 contre 1,6 | pl.md (mesures plus récentes et comparées dans un même lot) ; les anciens termes restent en synonymes |
| 11 | Duels en Pologne | SEO-PLAN P1 : 10 duels par langue ; pl.md : demande ≈ 0,1 | En Pologne, duels en FAQ et en sections ; pages seules ailleurs |
| 12 | « classifica » en Italie | SEO-PLAN § 4.2 et it-es.md : modificateur fort ; it.md : 0 sur 400 suggestions (sur d'autres racines) | Garder « classifica » dans le titre (les deux études le recommandent) sans créer de pages dessus |
| 13 | Café aux États-Unis | us-seo : « espresso machine » +22 %, hub expresso en P0 ; us-site : le café américain, c'est le filtre et Keurig, tête « best coffee maker » ; us-market : scinder | Scinder en 2 catégories ; duel expresso en P0 (Black Friday ×3,1), hub « coffee makers » en P1 |
| 14 | Auteur aux États-Unis | us-site : le nom de plume déclaré est acceptable, sans prétendre à une expertise ; us-seo : un « expert » fictif est un risque FTC, préférer une vraie personne ou « l'équipe éditoriale » | Le nom de plume est déjà présenté comme tel (`lib/authors.ts`) : on le garde sans expertise ni essai ; un vrai relecteur reste préférable (M6) |
| 15 | Données disponibles aux États-Unis | us-market : meilleures ventes Amazon.com (HTTP 503) et Trends US inaccessibles ; us-seo et us-site les ont lus le même jour | Retenir les chiffres de us-seo et us-site. Les marques « à vérifier » de us-market (Shark, Keurig, Breville…) sont confirmées par les meilleures ventes |
| 16 | « friteuse sans huile » en France | ≈ 2 pour 100 « air fryer » (fenêtre de 12 mois) [fr.md § 1.2] contre 19 pour 100 « airfryer » (52 semaines) [fr-uk.md] | Les deux disent que « air fryer » domine ; garder « friteuse sans huile » en synonyme |
| 17 | Clics Google de départ | 455 clics et 52 600 impressions (28 jours au 30/10) [STRATEGIE § 1] ; 458 et 57 000 (au 28/10) [SEO-PLAN § 1] | Fenêtres différentes ; ce document utilise ceux du 30/10 |

### 7.3 Limites communes
- **Aucun volume de recherche absolu** dans aucune étude. À recaler avec Search Console et l'outil de mots-clés de Bing Webmaster (M7).
- **Quota de recherche web partagé, épuisé** pendant la plupart des études : certains points sont marqués « à vérifier » dans les fiches. Ils n'ont pas été comblés par des suppositions.
- **Pages bloquées, non contournées** : vergleich.org (HTTP 403) pour vergleich-markets ; plusieurs listes de meilleures ventes ; Wirecutter, CNET, Consumentenbond, bol, Coolblue, Protégez-Vous.
- **Trafics des concurrents** : estimations Similarweb, marquées comme telles.
- **Dates** : toutes les mesures datent du 30/10 ou du 01/11/2026. Les classements Amazon et les tendances bougent vite : relire les fiches avant chaque saison.

---

## 8. Limites de l'étude

Relecture critique du 01/11/2026. Le quota de recherche web étant épuisé, chaque chiffre a été contrôlé en ouvrant directement la page que l'étude cite.

### 8.1 Chiffres vérifiés à la source (30)

| Domaine | Chiffres contrôlés | Résultat |
|---|---|---|
| vergleich.org | rachat de VGL le 07/03/2022, valeur d'entreprise 60 M€ (rapport annuel 2022) ; segment Comparison au S1 2026 : 32,9 / 12,4 / 8,4 M$, 277 $ pour 1 000 visites, 5,2 % hors DACH (rapport S1 2026) | exacts ; « vend son pôle » corrigé en « négocie, sans certitude » (§ 2.1) |
| Allemagne | Amazon 63 % du CA en ligne 2025 (IFH Köln via CIO.de) ; petit électroménager 8,0 Md€ (+3,7 %), S1 2026 3,5 Md€ (+4,0 %), 37 % du CA en 7 périodes promotionnelles (GFU) | exacts ; le **+66,1 % concerne les robots**, pas les Wischsauger (corrigé au § 2.2) |
| Italie | petit électroménager 2,3 Md€, +5,2 % (Findomestic) ; Amazon 41,2 M de visiteurs, 8,4 fois MediaWorld (Casaleggio, **juillet 2025**) ; Ninja 91 en fiabilité, 56 en moyenne des tests (Altroconsumo, 04/08/2026) | exacts ; date ajoutée |
| France | Amazon 42 M de visiteurs, 65,3 % (Fevad/Médiamétrie T4 2025) ; thermostat reporté au 1/01/2030 dans l'existant (service-public, 17/02/2026) ; 0,2001 €/kWh (Selectra) | exacts. fr.md écrit « +2,5 % au 1er août » : l'option Base a pris **+3,1 %** (0,1940 → 0,2001 €) |
| Espagne, Royaume-Uni | CNMC 47,8 % ; Ofgem 26,32 p/kWh, annonce suivante le 25/11/2026 | exacts (CNMC : « plateforme la plus utilisée » pour les achats livrés) |
| Pays-Bas, Suède, Canada | Twinkle100 2026 ; Elsäkerhetsverket (12/10/2026) ; Ei, effektavgift abrogé en juin 2026 ; NETendances, Amazon 64 → 54 % au Québec | exacts ; nuance Amazon / bol ajoutée (§ 3) ; contre-tarifs canadiens : source **secondaire** (Wikipedia) |
| États-Unis | Census 340,2 Md$ (+12,2 %) ; EIA 18,16 ¢ (**août 2026**) ; rappel DREO 338 800 unités (+ 36 300 au Canada, ajouté au § 4.10) ; iRobot, chapitre 11 le 14/12/2025 ; Detailed, 16 groupes sur 85 % ; Pew, 8 % contre 15 % ; HouseFresh, −91 % | exacts ; **Parks Associates 55,70 $ mal appliqué** aux sonnettes (c'est la moyenne des services de sécurité), corrigé au § 5.2 |

### 8.2 Ce qui reste fragile
- **Les ventes ne valident encore aucune priorité** : 14 ventes et 20,51 € en 2026, toutes en France. L'ordre des pays repose sur les clics et la demande ; le point de contrôle du 30/11 (§ 3) le corrigera.
- **Sources payantes ou illisibles, non relues** : Statista (40,5 % aux États-Unis), Mintel (2,8 Md£), GlobalData, Similarweb, PDF Gemius (22 % contre 85 % en Pologne), tableau StatCan du chauffage, page Global Earning d'Amazon (HTTP 503), prime plug and play (HTTP 429), décisions OLG Köln et LG Berlin II. Elles restent citées, à revérifier avant publication.
- **Hypothèses signalées comme telles** : saisons suédoises (Trends Suède non relevé), prévisions 2026-2027 en Italie, aux Pays-Bas et en Suède, conversion via Global Earning, capacité de relecture (§ 6.5).
- **Données brutes non conservées** : relevés d'autocomplétion `se-data/` et `us-data/`. Les comptes de suggestions suédois et américains ne sont pas reproductibles.
- **Marchés servis sans étude** : Irlande, Australie et Nouvelle-Zélande (/en), Luxembourg, Suisse romande et italienne, Porto Rico. Aucun ne figure dans la liste Global Earning relevée : ne rien écrire pour eux avant M1.
- **Aucune validation juridique** pour « bäst i test » en citation, « Testsieger laut Stiftung Warentest », la mention CCPA et les ecocheques (M9).
