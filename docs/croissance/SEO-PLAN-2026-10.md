# Homenura — plan SEO par marché (30 octobre 2026)

Objectif : faire du référencement l'axe n° 1, sur tous les produits et tous les pays, et être **cité par les moteurs IA** (ChatGPT, Claude, Gemini, Perplexity, Copilot) autant que classé par Google et Bing.
Ce document est la synthèse. Les études détaillées et sourcées sont dans [`seo-etudes/`](seo-etudes/) : DACH + vergleich.org, France + Royaume-Uni, Italie + Espagne, Pays-Bas + Pologne, moteurs IA, et les données Search Console du 30/10.

**Limite commune à toutes les études** : aucun outil de volumes n'était accessible (Ahrefs et Sistrix bloqués, Keyword Planner non connecté, Google Trends limité). Les volumes sont des **ordres de grandeur** ou des indices relatifs Google Trends, marqués « estimation » dans les études. À recaler avec Search Console et l'outil « Recherche de mots clés » de Bing Webmaster (gratuit, avec volumes) dès que Miguel s'y connecte.

## L'essentiel
1. **Ce qui rapporte déjà** : les duels « X vs Y » et les pages « problème », dans toutes les langues. On en fait le cœur du contenu.
2. **Le plus gros défaut** : des pages traduites au lieu d'être écrites pour chaque pays (titres sur des mots que personne ne tape, FAQ identique sur 47 pages). Corrigé par les deux premières PR.
3. **Les assistants IA nous voient déjà** : ≈ 8 000 impressions de leurs sous-requêtes, en positions 2 à 8. Pour être cité : réponses directes datées, sources liées, version anglaise solide, présence dans Bing et Brave.
4. **vergleich.org est battable** : absent des 1res pages Google.de testées et des sources de ChatGPT en Allemagne ; la moitié de son trafic est achetée. Il n'a presque rien sur les pannes, les duels et « ohne Abo ».
5. **Calendrier serré** : Black Friday le 27/11 (pages à étoffer avant le 9/11), Sinterklaas (NL) le 5/12, Mikołajki (PL) le 6/12, « cost to run » au R-U en novembre.

---

## 1. Point de départ mesuré (Search Console, 28 jours au 28/10/2026)

| | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| Total | 458 | 57 000 | 0,8 % | 9,5 |
| Italie | 135 | 4 055 | 3,3 % | 10,4 |
| Allemagne (+ Autriche 10, Suisse 9) | 52 | 3 995 | 1,3 % | 12,4 |
| France (+ Belgique 18) | 45 | 3 134 | 1,4 % | 12,4 |
| Espagne | 32 | 2 310 | 1,4 % | 14,9 |
| Pays-Bas | 25 | 1 614 | 1,5 % | 15,4 |
| Royaume-Uni | 19 | 2 135 | 0,9 % | 16,7 |
| Pologne (pas encore de version /pl) | 5 | 303 | 1,7 % | 6,8 |

**Ce qui marche déjà, dans toutes les langues :**
1. Les **duels « X ou Y »** : « ninja vs philips » = 65 clics en italien + 58 en anglais (la 1re page du site) ; « cookeo vs thermomix vs airfryer », « tapo vs govee », « ikea dirigera vs hue ».
2. Les **pages « problème »** (pannes) : ≈ 30 % des clics ; « balai aspirateur LED qui clignote » prend des clics en IT, DE, FR, ES et NL.
3. Les pages **histoire / consommation** (« histoire de l'airfryer » 27 clics ; « stroomverbruik airfryer » 3e sur Bing NL).

**Ce qui ne marche pas :** des pages anglaises très vues mais jamais cliquées (« meilleur airfryer petit budget » 1 154 impressions, « cafetières connectées » 867, « guide purificateur d'air » 849) ; des positions 20 à 60 sur les vraies requêtes locales (« quanto consuma la friggitrice ad aria », « alarmanlage ohne abo », « thermostat pompe à chaleur », « freidora de aire calidad precio », « luchtreiniger allergie »).

**Découverte importante — les requêtes des assistants IA :** ≈ 8 000 impressions sur 28 jours viennent de requêtes que personne ne tape (« air fryer for remote workers 2026 », « what is the best dishwasher for a family of 4 in 2026 in france? », « in 2026 air purifier pros and cons »). Ce sont les sous-requêtes que les assistants IA et les outils de suivi de visibilité IA envoient à Google. Homenura y est **déjà classé en position 2 à 8**. C'est notre porte d'entrée dans leurs réponses : chaque page doit répondre clairement à « est-ce que ça vaut le coup », « avantages et inconvénients », « lequel pour une famille de 4 », « comment choisir ».

## 2. Défauts trouvés sur le site (et corrections)

| # | Défaut | Gravité | Correction |
|---|---|---|---|
| 1 | La FAQ des 47 pages catégorie (hors cuisine) est **le même texte partout**, seul le nom change, avec des affirmations fausses (« la directive réparabilité 2026 impose 6 à 8 ans », « étiquette énergie obligatoire » pour tous les produits, « nous vérifions le stock de pièces ») et des fautes (« un airfryers »). 282 pages en double pour Google ; rien de citable pour une IA. | Forte | **PR « FAQ par catégorie »** : 5 questions/réponses propres à chaque catégorie ET à chaque marché, 7 langues (1 645 réponses), contrôlées par un test. |
| 2 | **H1 allemand « … Vergleich 2026 — Testsieger & Tipps »** sur 47 pages, et « Testsieger für … » sur les guides acheteur, alors que le site ne teste rien (risque de concurrence déloyale, UWG ; jurisprudence OLG Köln 2020, LG Berlin II 2026). | Forte | Retiré dans la PR FAQ + test bloquant. |
| 3 | Titres et H1 **traduits du catalogue, pas cherchés** : « cafetière connectée » au lieu de « machine à café à grain », « vernetzte Kaffeemaschine », « stufa intelligente » (0,2 % de « termoventilatore »), « robot aspirador fregador », « slimme rookmelder » (0,03 contre 8,1 pour « rookmelder ») ; 8 mots-clés allemands mal choisis, ≈ 9 néerlandais, ≈ 7 italiens, ≈ 4 espagnols. Fautes d'accord dans les H1 (« I migliori friggitrici », « Les meilleurs cafetières », « Mejores Riego »). | Forte | **PR « titres par marché »** : titre Google, H1, description et mot-clé de tête écrits pour chaque marché (53 catégories × 7 langues), test bloquant (longueurs, mot-clé dans le titre, « 2026 », aucun « test »). |
| 4 | Fraîcheur peu visible : une seule date pour tout le site (`SITE_LAST_UPDATED_ISO` = 9 octobre), aucune date sur les pages catégorie, même `lastmod` pour toutes les URL. | Moyenne | Date réelle par page catégorie (visible + `dateModified` + sitemap) dans la PR FAQ. Règle : jamais de date changée sans changement de fond. |
| 5 | Intro des pages catégorie : même paragraphe partout, avec des promesses invérifiables (« nous écartons les modèles qui… »). | Moyenne | P1-4. |
| 6 | Slugs en français dans toutes les langues (`/it/cuisine-connectee/airfryers`), articles au slug allemand en italien, un H1 mi-allemand mi-italien (`/it/blog/saugroboter-tierhaare-test`). | Faible à moyenne | P2-3 : redirections 301 coûteuses, gain modeste ; d'abord les titres. |
| 7 | Sélections non localisées : chauffages Thermor/Sauter (marques françaises) proposés en Italie ; « Duitsland » dans un article néerlandais. | Moyenne | P1-6. |
| 8 | Bing Webmaster non connecté dans le Chrome de Miguel → rapport « AI Performance » (citations Copilot) non lu. | Moyenne | Action Miguel (§ 7). |

## 3. Moteurs IA : ce qui fait vraiment citer un site — [`seo-etudes/geo-ia.md`](seo-etudes/geo-ia.md)

- **Sources** : ChatGPT = son propre index + résultats Google/Bing récupérés ; Copilot = Bing ; Claude = Brave Search (indice fort) ; Perplexity = son propre index ; Gemini, AI Overviews et Mode IA = index Google (Mode IA ouvert en France le 22/07/2026). **Être bien indexé dans Google, Bing ET Brave** est la base.
- **Ce qui est prouvé** : fraîcheur réelle (dates visibles, `dateModified`), passages courts qui se lisent seuls (réponse en tête), chiffres et sources citées, autorité du domaine, **mentions de la marque par des tiers** (Reddit, YouTube, presse : corrélation 0,66 à 0,71 avec les citations).
- **Ce qui n'a pas d'effet prouvé** : le balisage FAQPage/ItemList en lui-même (on le garde : il est exact et ne coûte rien) et `llms.txt` (gardé tel quel, aucun investissement).
- **Langue** : ChatGPT fait des sous-recherches **en anglais dans ≈ 78 % des conversations non anglaises** → la version anglaise compte pour tous les pays. Google cite surtout des pages dans la langue de la question.
- **Comparatifs** : les listes « meilleur X » sont le 1er format cité par ChatGPT (43,8 %), mais reculent quand elles sont vieilles ou sans méthode. Point faible d'Homenura : pas de test maison → méthode « analyse documentaire » très visible + sources indépendantes liées (Que Choisir, Stiftung Warentest, Altroconsumo, OCU, Consumentenbond, Which?…).
- **Format de réponse directe retenu** (FAQ et « Réponse rapide ») : 40 à 70 mots ; 1re phrase qui tranche et se cite seule ; un critère ou un chiffre vérifiable ; une limite honnête ; date de mise à jour.
- **À ne pas faire** : fausses dates, pages en masse pour chaque variante de requête (« scaled content abuse »), faux avis, astroturfing sur Reddit, robots IA bloqués au niveau du CDN.

## 4. Marché par marché

Pour chaque marché : vocabulaire réel (mot-clé de tête retenu dans la PR « titres par marché »), concurrents, comment passer devant, actions classées par impact. Détail et sources dans les études.

### 4.1 Allemagne + Autriche + Suisse (une seule version /de) — [`seo-etudes/dach.md`](seo-etudes/dach.md)

**Vocabulaire** : les Allemands tapent « X Test », « Testsieger », « Stiftung Warentest » bien plus que « Vergleich ». Comme Homenura ne teste pas, on gagne sur le terme de tête seul et sur les modificateurs : **ohne Abo, mit Speicher, ohne Begrenzungsdraht, mit Wischfunktion, mit Strommessung, bis 300 Euro, Probleme/Fehler**. Mots-clés corrigés : Kaffeevollautomat (et non « vernetzte Kaffeemaschine »), Akku-Staubsauger (et non « Akku-Stielsauger »), Rauchmelder (et non « smarter Rauchmelder »), Überwachungskamera innen/außen, mobile Klimaanlage, Saugroboter mit Wischfunktion, WLAN-Steckdose, Raumthermostat WLAN, Stromspeicher, Schlüsselfinder, Bewässerungscomputer, Dampfbügelstation.

**Concurrents** : sur 8 requêtes Google.de, **vergleich.org n'apparaît sur aucune 1re page** ; 49 % de son trafic vient de la publicité Google (Similarweb). Présents : heise, idealo, CHIP, test.de, IMTEST, testbericht.de. ChatGPT Allemagne cite test.de (n° 5), idealo (n° 8), Reddit (n° 13), Computerbild, CHIP, testberichte.de ; vergleich.org est absent du top 50. Pas d'AI Overview sur les requêtes shopping. Sur la longue traîne (« balkonkraftwerk mit speicher », « mähroboter ohne begrenzungskabel ») : marques et petits sites, **aucun portail dominant**.

**Ce qu'on copie de vergleich.org** : « Das Wichtigste in Kürze » en tête, tableau, « Kaufberatung », FAQ en fin de page, date et rédacteur nommé, pages longue traîne. **Ce qu'on fait mieux** : il n'a presque aucune page « Probleme » (≈ 3), « vs » (2), « Erfahrungen » (0), « ohne Abo » (0), « Strommessung » (0), et une seule page Balkonkraftwerk.

**Actions classées** : (1) titres sans « Test » avec les bons mots-clés ✅ PR ; (2) module « Unabhängige Tests » (citations datées et liées de Stiftung Warentest, CHIP, ÖKO-TEST, VKI, Kassensturz) — base livrée par #53 sur 35 catégories ; (3) gabarit « Das Wichtigste in Kürze » + Kaufberatung + FAQ (FAQ ✅ PR) ; (4) hub « Balkonkraftwerk mit Speicher / 800 vs 2000 Watt » ; (5) 20 à 25 pages « ohne / mit / bis X Euro » ; (6) 12 pages « Probleme / Fehler » (E15 Spülmaschine, Akku-Staubsauger schaltet ab, mobile Klimaanlage Kondenswasser…) ; (7) tableau « Testergebnisse im Überblick » ; (8) auteur germanophone nommé ; (9) veille des nouveaux tests tiers ; (10) encadrés Autriche/Suisse (pas d'obligation de détecteur de fumée en Suisse, « Rasenroboter », Galaxus, Geizhals, VKI, Kassensturz).

### 4.2 Italie (1er pays) — [`seo-etudes/it-es.md`](seo-etudes/it-es.md)

**Vocabulaire** : « migliore + produit » et le nom courant, jamais « intelligente/connesso » : termoventilatore / stufa elettrica (et non « stufa intelligente »), termostato wifi, fotovoltaico da balcone (et non « kit solare balcone »), wallbox, presa smart, serratura smart, robot aspirapolvere lavapavimenti, condizionatore portatile (3,6 × plus cherché que « climatizzatore »). Modificateurs forts : **altroconsumo** (≈ 15 catégories), classifica, opinioni, qualità prezzo, vs, non funziona, quanto consuma, senza abbonamento, senza filo perimetrale.

**Concurrents** : Altroconsumo, QualeScegliere, Aranzulla (n° 1 cité par les AI Overviews en Italie), Corriere « La Scelta Giusta » (n° 1 chez les chatbots), Telefonino, Smartworld ; concurrent direct : m8d.io (méthode « sources », calculateurs, guides de 7 000 mots). SERP souvent datées → place prenable.

**Pourquoi l'Italie marche déjà** (hypothèses) : l'accueil /it est le guide friggitrice ad aria, le plus gros terme du pays, en pleine saison ; SERP datées ; longue traîne « problème » peu concurrencée.

**Actions classées** : (1) titres/H1 sans « intelligenti », accords corrigés ✅ PR ; (2) Black Friday / Cyber Monday / Natale étoffés avant le 6/11 ; (3) duels : dreame vs roborock, tado vs netatmo, deumidificatore vs condizionatore, termoventilatore vs termoconvettore, robot da cucina vs bimby ; (4) bloc « Cosa dice Altroconsumo » par catégorie (lien + date) ; (5) hub « quanto consuma » + calculateur (friggitrice, condizionatore, stufa, deumidificatore) ; (6) pages « economiche » sans montants ; (7) pages problème retitrées sur « non scalda / non funziona / non raffredda » ; (8) sélections localisées (De'Longhi, Olimpia Splendid, Argo au lieu de Thermor/Sauter) ; (9) FAQ tirées de l'autocomplétion ✅ PR ; (10) slugs italiens (plus tard).

### 4.3 Espagne — [`seo-etudes/it-es.md`](seo-etudes/it-es.md)

**Vocabulaire** : « mejor + produit », **calidad precio**, **ocu** (≈ 15 catégories), comparativa, opiniones, sin tubo, no calienta, cuánto consume. Mots-clés corrigés : robot aspirador friegasuelos (personne ne dit « fregador »), calefactor / radiador eléctrico de bajo consumo, cafetera superautomática, cargador de coche eléctrico, termostato wifi.

**Concurrents** : OCU (derrière abonnement), Xataka / Xataka Home, La Casa Sibarita, PcComponentes, Leroy Merlin, relais « según la OCU » ; El País (Escaparate) n° 1 cité par l'IA en Espagne ; m8d.io.

**Actions classées** : (1) titres/H1 ✅ PR ; (2) Black Friday / Navidad / Rebajas (page avant le 28/12) ; (3) bloc « Qué dice la OCU » ; (4) pages « mejor … calidad precio » ; (5) hub « cuánto consume » + calculateur ; (6) duels (freidora de aire vs horno, robot aspirador vs escoba, Xiaomi vs Cecotec, Thermomix vs Lidl) ; (7) **indexer « robot de cocina »** (gros terme en Espagne, aujourd'hui en noindex) ; (8) pages problème « no enfría / no calienta / no carga » ; (9) marques de distributeur (Lidl, Cecotec, Mercadona) ; (10) solaire de balcon : explicatif légal prudent.

### 4.4 Pays-Bas + Flandre — [`seo-etudes/nl-pl.md`](seo-etudes/nl-pl.md)

**Vocabulaire** : rookmelder (et non « slimme rookmelder »), robotstofzuiger met dweilfunctie, volautomaat, laadpaal thuis, deurbel met camera (2 × « videodeurbel »), thuisbatterij (forte demande avant la fin annoncée du « saldering » au 1/1/2027), **onder 100 euro** (et non « tot »), verbruik, werkt niet, zonder abonnement, luchtreiniger allergie (requête réelle, positions 20 à 33).

**Concurrents** (Bing NL) : Consumentenbond (12 SERP sur 23), consumententesten.nl (affiliation, 10), MediaMarkt, bol, Coolblue (rubrique « advies »). Amazon absent des SERP.

**Actions classées** : (1) mots-clés corrigés ✅ PR ; (2) page **thuisbatterij** avant décembre ; (3) **Sinterklaas** (arrivée le 14/11, pakjesavond le 5/12) + Black Friday ; (4) pages « onder €100 » ; (5) format « verbruik » + calculateur (mobiele airco, kachel, luchtontvochtiger, laadpaal) ; (6) duels (airfryer vs heteluchtoven, tado vs Nest, mobiele airco vs luchtkoeler) ; (7) pages « werkt niet » retitrées (mobiele airco koelt niet, airco lekt) ; (8) localisation (« Duitsland » retiré, H1 d'accueil sans « smart ») ; (9) citations Consumentenbond / Test Aankoop / Tweakers ; (10) variantes Flandre (Fluvius, ecocheques — à vérifier avant d'écrire).
Note : l'étude conseille amazon.nl ; **décision maintenue** : tous les liens sur amazon.fr + homenuraen05-21 (Amazon Global Earning redirige vers la boutique locale et paie le compte FR).

### 4.5 Pologne (version /pl : PR #54) — [`seo-etudes/nl-pl.md`](seo-etudes/nl-pl.md)

**Vocabulaire** : frytkownica beztłuszczowa, robot sprzątający z mopem, ekspres do kawy automatyczny, oczyszczacz powietrza (smog), osuszacz, **czujnik czadu** (obligatoire dans les logements équipés d'un appareil à combustion à partir du 1/1/2030 — règlement du 22/11/2024), dzwonek z kamerą (≠ wideodomofon), klimatyzator przenośny. Modificateurs : **ranking**, **który wybrać**, opinie, do 200/300/500 zł, nie grzeje / nie działa, ile prądu zużywa.

**Concurrents** (Bing PL) : Media Expert (14 SERP sur 20), **Allegro** (13, dont 11 dans le top 3), prorankingi.pl (9, dont 8 dans le top 3), RTV Euro AGD, MediaMarkt. Amazon absent des 20 SERP ; Allegro touche 74 % des internautes → **vérifier que les clics amazon.pl convertissent** avant d'écrire des centaines de pages ; Allegro via Awin à tester.

**Actions classées** : (1) chaîne de monétisation vérifiée (ASIN présents sur amazon.pl, Global Earning) ; (2) pages « nie działa / nie grzeje » (aucun affilié en face) ; (3) « ile prądu zużywa » + calculateur en zł ; (4) cluster czujnik czadu / dymu + oczyszczacz / osuszacz (hiver, smog) ; (5) « ranking » transparent (méthode, tableau, FAQ) ; (6) Black Friday, **Mikołajki 6/12**, Noël ; (7) duels ; (8) hreflang pl ✅ #54 ; (9) pages réglementaires datées ; (10) pages marque (Xiaomi, Roborock, Dreame, Philips, Ninja, Tefal, Cosori).

### 4.6 France + Belgique — [`seo-etudes/fr-uk.md`](seo-etudes/fr-uk.md)

**Vocabulaire** : machine à café à grain (et non « cafetière connectée »), airfryer / friteuse sans huile, **aspirateur robot laveur** (et non « aspirateur laveur robot »), aspirateur balai sans fil (+ « moins de 100 / 200 / 300 euros »), **robot tondeuse** (et non « tondeuse robot »), climatiseur mobile sans évacuation, déshumidificateur (« consomme-t-il beaucoup ? »), thermostat connecté (+ « pompe à chaleur », « fil pilote »), **panneau solaire plug and play** (« kit solaire balcon » ne pèse presque rien dans Google Trends), radiateur électrique (page manquante, plus cherchée que « chauffage d'appoint connecté »), détecteur de fumée. Modificateurs : meilleur, comparatif, avis, **Que Choisir**, vs, moins de X €, consommation, « ne s'allume plus / clignote ».

**Concurrents** : l'**Aperçu IA de Google apparaît sur 17 requêtes sur 18** ; il cite Les Numériques (8 fois), LeBonTri (4 fois : un affilié Amazon comme nous), Que Choisir, Hello Watt, Capital. Organiques fragmentés : presse « guide shopping » (Ouest-France, Le Parisien, Le Télégramme, BFMTV), sites de niche, marques (Dreame, Ecovacs), enseignes (Darty, Boulanger, MediaMarkt). **Aucun verrou** sur les requêtes de niche. Le Parisien et RTINGS prennent « ninja vs philips ».

**Actions classées** (impact ÷ effort) : (1) retitrer les catégories ✅ PR ; (2) FAQ calquées sur les « Autres questions » de Google, réponse courte en tête ✅ PR ; (3) duels (airfryer ou four, ninja vs philips en français, aspirateur laveur ou robot laveur) ; (4) pages problème (thermostat pompe à chaleur, nettoyeur vapeur bouché/entartré, lave-vaisselle code 15, portail qui ne se ferme pas) ; (5) Black Friday / Noël / soldes d'hiver (6/01 → 2/02/2027) à URL stable, étoffés **avant le 9/11** ; (6) pages « moins de 100 / 200 / 300 € » ; (7) hygiène éditoriale (slugs `test-…` des anciens articles, dates, auteur) ; (8) guides « consommation » ; (9) bloc « Ce que disent Que Choisir / Les Numériques / 60 Millions » ; (10) Belgique francophone (Test Achats, vocabulaire belge).

### 4.7 Royaume-Uni (/en) — [`seo-etudes/fr-uk.md`](seo-etudes/fr-uk.md)

**Vocabulaire britannique** : air fryer (« dual basket », « Ninja vs Tower »), **bean to cup coffee machine**, robot vacuum (and mop), cordless vacuum (« hoover » à l'oral), **dehumidifier** (énorme, pic en novembre), **heated airer**, electric blanket, **oil-filled radiator** (et non « smart space heater »), **smoke alarm** (et non « smoke detector »), smart thermostat (Hive, Nest, tado, Drayton Wiser), video doorbell (« no subscription »), **plug-in solar panels** (légal depuis le 27/08/2026, kits ≤ 800 W), EV charger. Modificateurs : best, **cost to run** (plafond Ofgem 26,32 p/kWh au T4 2026), under £100, no subscription, vs, Which?, Martin Lewis.

**Concurrents** : l'Aperçu IA n'apparaît que sur **6 requêtes sur 17**, jamais sur les « best X » ; il cite Which?, BBC Good Food, Uswitch, MoneySuperMarket. Organiques : magazines (Ideal Home, Woman & Home), presse (Telegraph, Independent, Guardian), revendeurs (Currys, John Lewis, B&Q), OneClearWinner (8 SERP sur 17, pages « 10 Best … October 2026 »), Which? (7), contenu américain (Wirecutter, Tom's Guide). Les pages « cost to run » qui se classent datent de 2023 à 2025 → **place à prendre en novembre**.

**Attention à l'audience** : les pages /en sont vues aux États-Unis (4 479 impressions) deux fois plus qu'au R-U (2 135) et en Inde (1 556) ; le CTR « nul » vient surtout des États-Unis et de positions R-U moyennes de 16,7. Les titres EN ne mettent « UK » que lorsque le sujet est britannique. Suivre les pages EN avec le filtre pays = Royaume-Uni.

**Actions classées** : (1) pages EN très vues : filtre R-U, signaux britanniques, retitrer « Ninja vs Philips » ; (2) titres en vocabulaire britannique ✅ PR ; (3) liens : on garde amazon.fr + Global Earning (redirection vers amazon.co.uk, voir § 7-5) mais références de modèles UK là où elles diffèrent ; (4) **hub « cost to run »** (dehumidifier, heated airer, air fryer, radiators, tumble dryer) **avant le 15/11** ; (5) plug-in solar : « is it legal / is it worth it / best kits » ; (6) hub « deals » à URL stable : Black Friday → Boxing Day (26/12) → January sales ; (7) « under £100 / £200 » et « no subscription » ; (8) duels britanniques (Ninja vs Tower, tado vs Hive, Ring vs Eufy) ; (9) pages problème au vocabulaire britannique ; (10) nouvelles catégories hors catalogue : heated airer, electric blanket, oil-filled radiator, tumble dryer.

## 5. Plan d'action global, classé par impact

### P0 — en cours (PR ouvertes le 30/10)
1. **FAQ par catégorie et par marché** (47 pages × 7 langues, 1 645 réponses directes, test bloquant) + date de mise à jour visible et réelle + retrait de « Testsieger ». → PR « feat(seo): category FAQs written per market ».
2. **Titres, H1, descriptions et mot-clé de tête par marché** (53 pages × 7 langues, test bloquant). → PR « feat(seo): market-native titles and H1 ».
3. Après fusion : `npm run indexnow -- --all` (Bing, Yandex, Seznam, Naver ; automatique après chaque déploiement), inspection d'URL dans Search Console pour 10 pages clés par langue.

### P1 — 2 à 4 semaines (dans l'ordre)
1. **Duels « X vs Y »** dans chaque langue, sur les duels réellement cherchés (listes par marché ci-dessus) : c'est le format qui prend le plus de clics aujourd'hui.
2. **Pages problème localisées** : titres natifs (« non scalda », « nie grzeje », « koelt niet », « no enfría », « schaltet ab », « not working ») sur les 30 pages les plus proches de vraies requêtes ; lien vers la page catégorie et sa FAQ.
3. **Hub « consommation »** + calculateur (prix du kWh saisi par le lecteur) : quanto consuma / cuánto consume / verbruik / ile prądu zużywa / Stromverbrauch / cost to run / consommation.
4. **Intro des pages catégorie** réécrite par catégorie : « réponse rapide » de 40 à 70 mots (verdict, critère, limite, date) au lieu du paragraphe commun.
5. **Encadré « Sources indépendantes » dans toutes les langues** (Que Choisir, Les Numériques, Which?, Altroconsumo, OCU, Consumentenbond, Test Aankoop, Komputer Świat, en plus de Stiftung Warentest/CHIP/ÖKO-TEST livrés par #53).
6. **Sélections localisées** (marques présentes dans chaque pays ; ASIN disponibles dans chaque boutique Amazon).
7. **Saisonnier** : Sinterklaas (avant le 9/11), Black Friday étoffé avant le 6/11, Mikołajki, Noël, Boxing Day, soldes/saldi/rebajas de janvier.
8. **Nouveaux hubs à forte demande** : thuisbatterij (NL), Balkonkraftwerk mit Speicher (DE), czujnik czadu (PL), robot de cocina indexé (ES).

### P2 — 1 à 3 mois
1. Pages budget « moins de 100 € / unter 100 Euro / onder 100 euro / sotto i 100 euro / do 200 zł » — seulement avec ≥ 5 produits distincts (règle anti-pages vides) et sans prix de modèle (règle Amazon).
2. Auteur nommé par langue (vrai expert, page auteur, réseaux) + page méthode « analyse documentaire » liée partout.
3. Slugs localisés avec redirections 301 (à évaluer langue par langue ; gain modeste, risque réel).
4. Présence tierce : YouTube Shorts (duels), réponses utiles sur Reddit et forums (jamais de lien Amazon), une étude de données par pays et par trimestre pour la presse.
5. Pages « meilleur pour » de qualité (≥ 5 produits, texte propre) à la place des 771 pages persona en noindex, sur les cas que les assistants IA demandent (« pour une famille de 4 », « pour un studio »).

## 6. Mesure
- **Chaque lundi** : Search Console par pays (clics, CTR, position) sur les 53 pages catégorie et les 20 premières pages ; rapport « IA générative » de la Search Console.
- **Bing Webmaster « AI Performance »** (citations Copilot, requêtes de grounding) — après connexion de Miguel.
- **Panel IA mensuel** : 30 questions × 7 langues posées à ChatGPT, Perplexity, Gemini et Claude ; noter si Homenura est cité.
- Jalons : CTR des pages catégorie de 0,8 % à 2 % en 6 semaines ; positions < 10 sur les 20 requêtes locales du § 1 en 3 mois.

## 7. Ce que seul Miguel peut faire
1. Se connecter à **Bing Webmaster Tools** dans son Chrome (rapport « AI Performance » et outil de mots-clés avec volumes).
2. Soumettre le site à **Brave Search** (source de Claude) et vérifier qu'il est indexé (`site:homenura.com` sur search.brave.com).
3. Choisir l'auteur nommé par langue (ou valider un pseudonyme transparent) ; créer les comptes YouTube/Pinterest si on lance les Shorts.
4. Allemand : faire valider par un avocat la formulation des citations « Testsieger laut Stiftung Warentest » (règle actuelle : jamais « Test » pour nous-mêmes).
5. Vérifier dans Partenaires Amazon que les clics venus d'Italie, d'Espagne, des Pays-Bas et de Pologne convertissent bien via Global Earning.
