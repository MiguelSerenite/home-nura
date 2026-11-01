# Étude de marché — Suède (version /sv de homenura.com)

Date : 01/11/2026 (la version /sv est en ligne depuis aujourd'hui). Périmètre : petit électroménager, maison connectée, confort, jardin.
**S'appuie sur** `STRATEGIE-2026-10.md` (§ 7 modèle vergleich.org, § 8 expansion), `SEO-PLAN-2026-10.md`, `seo-etudes/dach.md` (§ 3 vergleich.org), `seo-etudes/geo-ia.md` et l'étude /nl de cette série. Aucune étude suédoise n'existait : celle-ci part de zéro pour la Suède, sans refaire le travail sur vergleich.org.
Règles rappelées : aucun test maison (jamais « vi har testat ») ; ni prix ni images Amazon tant que l'API Creators n'est pas active.

## 0. Méthode, sources, limites

| Code | Ce qui a été collecté | Limite |
|---|---|---|
| [A] | **Autocomplétion Google Suède** (hl=sv, gl=se) relevée le 01/11/2026 : 95 graines produit + 105 graines « modificateur / marque / marchand » → **1 747 suggestions uniques** (921 sur les graines produit). Fichiers bruts : `scratchpad/se-data/ac1.txt` et `ac2.txt` | Montre les formulations et les intentions réelles, **pas les volumes** |
| [S1]–[S31] | Pages suédoises lues directement le 01/11/2026 (liste § 7) : Svensk Handel, Elsäkerhetsverket, Ei, Mobility Sweden, Internetstiftelsen, Energimyndigheten, HUI, Market.se, Testfakta, M3, sites concurrents | Plusieurs résumés partiels (page tronquée) signalés |
| [R] | Dépôt homenura : `lib/catalog/categories.ts` (titres et mots-clés sv), `lib/amazon.ts` (liens sv) | — |

Limites franches :
- **Le quota de recherches web de la session était épuisé dès le début de cette étude** (quota partagé entre agents). Je n'ai donc relevé **ni page de résultats Google.se, ni Google Trends Suède**, et je n'ai pas contourné la limite. Les preuves de demande viennent de l'autocomplétion [A] (relevée avant l'arrêt) et des sources locales lues directement.
- **Listes « meilleures ventes » non lues** : amazon.se a répondu HTTP 503 ; Elgiganten 429 ; NetOnNet, Jula, CDON, Astma- och Allergiförbundet 403 ; Prisjakt, Aftonbladet, Expressen refusés par l'outil ; le site de Råd & Rön ne s'est pas résolu (DNS). **À faire** : relever ces listes dans le Chrome de Miguel (§ 6.7).
- **Aucune part de marché d'Amazon en Suède n'est publiée** dans les sources accessibles. Aucune taille de marché du petit électroménager suédois en accès libre (GfK/NIQ payants). Je ne les invente pas.
- Les taux du « grönt avdrag » (Skatteverket) n'ont pas pu être lus (site inaccessible) : **à vérifier avant d'écrire**.

---

## Résumé décisionnel

1. **Le marché porte** : en 2025, le commerce d'électronique grand public a fait **+15 % en volume** (novembre : **+32 %**, mois du Black Week), le meilleur niveau depuis 1991 en juin 2026 ; en ligne, l'électronique a fait **+29 %** alors que l'e-commerce total n'a fait que +4 % (166 Md SEK) [S1].
2. **Le Suédois cherche « bäst i test »** : **116 des 921 suggestions produit (12,6 %)** contiennent « bäst i test », et 15 citent « råd och rön » [A]. C'est l'équivalent suédois du « Test » allemand. Homenura ne teste pas : on doit gagner avec des **synthèses de tests tiers datées** (Råd & Rön, Testfakta, Astma- och Allergiförbundet, Energimyndigheten, M3), formulées sans tromper.
3. **Amazon est faible dans la recherche** : **0 suggestion sur 921** cite Amazon, contre Jula 31, IKEA 28, Biltema 23, Clas Ohlson 22, Elgiganten 20, Rusta 11 [A]. Amazon progresse (1 homme sur 5 a consulté Amazon lors de son dernier achat d'électronique, Xtreme Insight via Market [S11]) mais aucune part de marché n'est publiée. → **Multi-marchands indispensable** (Adtraction, Tradedoubler, Awin) et ASIN à vérifier sur amazon.se.
4. **Spécificités suédoises fortes** : robotgräsklippare **« utan slinga »**, robotdammsugare **« trösklar »**, hemlarm / kamera **« utan abonnemang »**, smart termostat **« element / vattenburet / golvvärme / fjärrvärme »**, avfuktare **« källare / krypgrund / tvättstuga »**, kaffebryggare (Moccamaster), Yale Doorman, Husqvarna [A].
5. **Énergie = moteur local** : 49 % de voitures neuves 100 % électriques en septembre 2026, 43 % depuis janvier [S9] (→ laddbox) ; prix de l'électricité **5 fois plus élevé dans le sud (SE4) que dans le nord (SE1)** en octobre 2026 [S8] ; prix au quart d'heure ; obligation de tarif de puissance **abrogée en juin 2026** [S6].
6. **À ne pas pousser** : les panneaux solaires de balcon (Elsäkerhetsverket : le branchement sur une prise ordinaire **ne respecte pas** les exigences suédoises, 12/10/2026 [S4]) ; robots de piscine ; détecteurs de CO en maison (la demande vise surtout camping-car, bateau, tente [A]).
7. **vergleich.org n'a aucun site suédois** (pieds de page de meilleurs.fr et pickbest.co.uk lus le 01/11/2026 [S22]). Le terrain est tenu par des testeurs (Råd & Rön, Testfakta), des enseignes et de petits affiliés Amazon (Bästaval.se [S20]) : place prenable.

---

## 1. Marché et dynamique (2024 → 2027)

### 1.1 Chiffres mesurés

| Indicateur | Valeur | Source |
|---|---|---|
| Commerce de détail 2025 | Volume **+3,4 %** (prix courants +4,6 %) ; encore ≈ 4 % sous 2021 | Svensk Handel, *Läget i handeln 2026* (SCB) [S1] |
| Biens durables (sällanköpsvaruhandel) 2025 | Volume **+6,1 %**, après la pire période de 3 ans depuis la crise des années 1990 | [S1] |
| Électronique grand public (hemelektronik), 2025 | **+15,4 % en volume** (1re branche) ; +7 % en prix courants ; **novembre 2025 : +32 %** vs novembre 2024 | [S1] |
| Électronique, début 2026 | « en juin 2026, la vente d'électronique était à son plus haut niveau depuis 1991 » (prix constants) | [S1] |
| E-commerce des Suédois 2025 | **166 Md SEK (+4 %)** ; ≈ 14 % du commerce de détail ; 71 % achètent en ligne un mois moyen ; ≈ 2 300 SEK par acheteur et par mois | Svensk Handel, E-handelsindikatorn [S1] |
| E-commerce par branche 2025 | **Électronique +29 %** (« le vrai moteur de l'e-commerce ») ; pharmacie +13 % ; les autres branches en baisse sauf beauté et livres | [S1] |
| Commerce discount 2024 | > 135 Md SEK, ≈ 14 % du commerce de détail ; non alimentaire ≈ +6 % | [S1] |
| Voitures neuves | 100 % électriques : **49 % en septembre 2026** (38 % un an plus tôt), **43 % sur janvier–septembre** (≈ 35 % en 2025 sur la même période) | Mobility Sweden, 01/10/2026 [S9] |
| Maison connectée (indice) | Plejd (Mölndal) revendique « plus de deux millions de clients » (tous pays) | Plejd [S23] (affirmation de l'entreprise) |
| Usage de l'IA 2026 | ≈ 60 % des Suédois utilisent des services d'IA (≈ 40 % l'an passé) ; **ChatGPT 52 %** ; Copilot ≈ 1 sur 5 ; **aperçus IA de Google vus par ≈ 70 %** | Internetstiftelsen, 28/09/2026 [S10] |

### 1.2 Tendances qui comptent pour Homenura

| Tendance | Preuve locale | Conséquence |
|---|---|---|
| Rattrapage des achats d'équipement | Biens durables +6,1 %, électronique +15 % [S1] | Le cycle 2026–2027 est favorable aux achats d'appareils |
| Black Week décisif | Novembre 2025 électronique +32 % [S1] | Pages BF /sv complètes **avant le 15/11** |
| Électrification du foyer | BEV 43–49 % [S9] ; autocomplétion « laddbox hemma / med installation / med lastbalansering / grönt avdrag » [A] | Laddbox = catégorie phare /sv |
| Prix de l'électricité par zone | Octobre 2026 (moyenne mensuelle, öre/kWh hors taxes) : SE1 30,4 · SE2 36,5 · SE3 82,0 · **SE4 156,7** [S8] ; prix au quart d'heure, 149 quarts d'heure négatifs en octobre [S8][S7] | « Hur mycket el drar … » doit se calculer **par zone** |
| Tarif de puissance | Ei a abrogé en juin 2026 les règles qui imposaient l'effektavgift ; nouveau modèle proposé au plus tard le 12/04/2027 [S6] | Ne pas promettre d'économies « effekttariff » ; parler du prix spot / quart d'heure |
| Sécurité électrique | 9 Suédois sur 10 font confiance au marquage CE, 18 % savent ce qu'il signifie [S3] ; produits rechargeables fréquents dans les incendies (09/10/2026) [S29] | Encadré « säkerhet / CE » utile et différenciant |
| Discount et plateformes | Discount ≈ 14 % du détail [S1] ; « prix bas » critère d'achat pour 43 % (32 % en 2020) [S3] | Pages « budget / under X kr » obligatoires |

### 1.3 2026–2027 (estimation, non chiffrée)
Aucune prévision publique par catégorie trouvée. Hypothèse prudente : l'électronique reste au-dessus du commerce total en 2026 (dynamique de juin 2026 [S1]) ; l'électrification (laddbox, pilotage de chauffage, mesure de consommation) continue en 2027 avec la part croissante de voitures électriques [S9]. À recaler avec Google Trends SE et Search Console au 1er trimestre 2027.

---

## 2. Habitudes d'achat

### 2.1 Où les Suédois achètent

| Acteur | Signal mesuré | Source |
|---|---|---|
| **Enseignes « maison / brico » suédoises** | Citées dans les suggestions produit : **Jula 31, IKEA 28, Biltema 23, Clas Ohlson 22, Rusta 11, Bauhaus 5, ICA 3, Lidl 3** | [A] (mesure propre, 921 suggestions) |
| **Électronique** | **Elgiganten 20**, NetOnNet 4, Kjell & Company 2, Power 1 ; « mellandagsrea elgiganten / power / netonnet », « black week elgiganten » | [A] |
| **Amazon** | **0 suggestion produit** ; amazon.se ouvert le 28/10/2020, Prime en septembre 2021 [S15] ; 1 homme sur 5 a consulté Amazon lors de son dernier achat d'électronique (Xtreme Insight) ; tendance « légèrement en hausse » depuis 2023 (Again, transactions par carte) [S11] ; Amazon dit avoir investi > 40 Md SEK en 10 ans [S12] ; « Superlyftet för Amazon – rusar mot toppen » dans le classement Market 2025 [S13] | [A][S11]–[S15] |
| Comparateurs de prix | « prisjakt pricerunner », « pricerunner vs prisjakt », « pricerunner dammsugare / moccamaster » [A] ; Prisjakt revendu par Schibsted à eEquity en 2025 [S28] | [A][S28] |
| Plateformes chinoises | « temu sverige », « temu tull » [A] ; aucune part chiffrée trouvée | [A] |

**Lecture** : la part d'Amazon n'est pas publiée. Le seul fait sûr est qu'**aucun Suédois ne tape « … amazon » après un produit**, alors qu'il tape le nom d'une enseigne locale dans 1 cas sur 6 environ. Un site 100 % Amazon laisse donc la majorité des lecteurs sans le bouton qu'ils attendent.

### 2.2 Sensibilité au prix

| Signal | Valeur | Source |
|---|---|---|
| « Prix bas » comme critère d'achat d'un appareil électrique | **43 %** (32 % en 2020) ; confiance dans le vendeur 65 % ; sécurité 61 % | Elsäkerhetsverket / Sifo, 28/10/2026, n = 1 029 [S3] |
| Ménages | « plus attentifs aux prix et plus réfléchis » après les années de crise | Svensk Handel [S1] |
| Hausse avant Black Friday | ≈ 10 % des prix en ligne sont plus élevés qu'en septembre (10 M de produits, 78 sites, Prisgrisen) | Market, 29/10/2026 [S14] |
| Règle des 30 jours | Une réduction doit afficher le prix le plus bas des 30 jours précédents ; Konsumentverket surveille le Black Week | Svensk Handel, 30/10/2026 [S2] |
| Seuils tapés | « robotdammsugare under 1000 / 2000 / 3000 / 5000 kr », « airfryer under 500 kr / 1000 / 2000 », « … bäst i test budget » (7 suggestions), « … rea » (12) | [A] |

### 2.3 Marques préférées (suggestions réelles) et marques locales

| Catégorie | Marques tapées par les Suédois [A] | Marques nordiques ou d'enseigne [A] (origine vérifiée seulement pour Plejd [S23], Ngenic [S24], Husqvarna [S25]) |
|---|---|---|
| Airfryer | Philips, Ninja, Cosori, Tefal Easy Fry, Xiaomi ; « varmluftsfritös silvercrest / lidl » | OBH Nordica, Wilfa, Andersson ; marques d'enseigne Rusta, Jula |
| Robotdammsugare | Roborock, Dreame, Xiaomi, iRobot / Roomba, Ecovacs, Eufy, Samsung, Mova | Electrolux |
| Sladdlös / skaftdammsugare | Dyson, Bosch, Dreame, Shark ; « electrolux pure d8.2 » | **Electrolux** (cité 3 fois en tête) |
| Kaffe | Philips 2200 / 3200 LatteGo, De'Longhi Magnifica S / Evo, Jura, Sage Barista Express, Smeg | **Moccamaster**, Wilfa, OBH Nordica (kaffebryggare) |
| Köksmaskin | KitchenAid, Bosch, Smeg, Electrolux | **Ankarsrum** (Assistent) |
| Avfuktare | — | **Woods** (« woods avfuktare källare / krypgrund ») ; Jula, Biltema |
| Luftrenare | Philips (2200/3200), Electrolux | **IKEA** ; « astma- och allergiförbundet » comme référence |
| Robotgräsklippare | Mammotion (Luba), Segway Navimow, Worx Landroid, Stihl iMow, Kress | **Husqvarna Automower** (page « utan slinga » [S25]), Gardena |
| Smart lås / larm | Ajax ; « yale doorman vs nimly / linus / heimgard / lockguard » | **Yale Doorman** (cité avec Verisure et Ajax), Verisure, Sector Alarm, Länsförsäkringar |
| Smart hem / énergie | Philips Hue, Home Assistant, Danfoss | **IKEA DIRIGERA**, **Plejd**, Homey, Deltaco, Tibber, Easee, Zaptec, **Ngenic Tune** |

### 2.4 Moments d'achat

| Période | Fait local | Source |
|---|---|---|
| Octobre | Vente d'automne Amazon (article du 07/10/2026) ; « prime days oktober » | [S30][A] |
| 11/11 | Singles Day (« singles day 2026 ») | [A] |
| **18/11/2026** | HUI annonce **Årets julklapp 2026** (07 h 30) ; 2025 = « Vuxenleksaken », aucun petit électroménager depuis 2018 | HUI [S16] |
| **Black Week → 27/11 (Black Friday) → 30/11 (Cyber Monday)** | Électronique +32 % en novembre 2025 ; « black week 2026 elgiganten » | [S1][A] |
| Décembre | Julklappar (« julklappstips », « julklappar 2026 ») | [A] |
| 26–31/12 | **Mellandagsrea** (« mellandagsrea elgiganten / power / netonnet ») | [A] |
| Hiver (hypothèse saisonnière, à vérifier dans Trends) | värmefläkt « tält / uterum », oljefylld radiator, luftfuktare « sovrum / element », wake up light, kupévärmare, värmefilt | [A] |
| Printemps (hypothèse) | robotgräsklippare « utan slinga », luftrenare « pollen / pollenallergi », bevattning (« bevattningsförbud ») | [A] |
| Été (hypothèse) | portabel ac « utan slang / husbil / husvagn », fläkt | [A] |

---

## 3. Catégories : ce qui marche, ce qui monte, ce qui ne sert pas

### 3.1 Catégories du site qui marchent ou montent

Preuve principale : nombre de suggestions « bäst i test » sur 10 (intention de comparatif), plus les sources locales. Trends et best-sellers non relevés (§ 0).

| Catégorie Homenura | Preuves locales | Verdict |
|---|---|---|
| aspirateurs-robots + aspirateurs-laveurs | « robotdammsugare bäst i test » 10/10 ; « bäst i test robotdammsugare » et « testvinnare robotdammsugare » sur la graine générique ; « trösklar », « djurhår / hundhår », « med mopp och tömning » ; duels « roborock vs dreame » [A] | **Priorité 1** |
| airfryers | « airfryer bäst i test » 10/10 (« budget », « dubbel », « 4 personer », « råd och rön ») ; « bästa airfryer för 2 personer / husbil » ; marques en 2e niveau [A] | **Priorité 1** (cœur du site) |
| aspirateurs-balais | « dammsugare bäst i test » 10/10 (« djurhår », « sladdlös », « electrolux ») ; « skaftdammsugare » et « sladdlös dammsugare » coexistent [A] | **Priorité 1** |
| tondeuses-robots | « robotgräsklippare utan slinga » = 1re suggestion + 4 variantes « bäst i test » + surfaces « 1000 / 1500 / 2000 / 3000 kvm » ; « testvinnare robotgräsklippare » [A] ; catégorie dédiée chez Husqvarna [S25] ; catégorie M3 [S19] | **Priorité 1 au printemps** (préparer en février) |
| cafetieres | « kaffemaskin bönor » 2e suggestion ; « helautomatisk kaffemaskin med mjölkskummare / utan mjölkskummare » ; « espressomaskin med kvarn / manuell » [A] | Priorité 2 (retitrer, § 4.3) |
| bornes-recharge-ve | BEV 43–49 % [S9] ; « laddbox med installation / lastbalansering / grönt avdrag » [A] ; installation par électricien obligatoire [S5] | **Priorité 2, en hausse** |
| chauffages-appoint | « värmefläkt med termostat », « oljefylld radiator wifi / eller konvektor », « elelement badrum / med fläkt / wifi », « hur mycket el drar en värmefläkt på 2000w » [A] | Priorité 2 **maintenant** (hiver) |
| deshumidificateurs | « avfuktare källare / tvättstuga / krypgrund », « hur mycket el drar en avfuktare i krypgrund » [A] | Priorité 2, propre à la Suède |
| humidificateurs | « luftfuktare sovrum / element / växter / bäst i test råd och rön » [A] | Priorité 2 (hiver) |
| purificateurs-air | « luftrenare bäst i test astma- och allergiförbundet », « pollen », « allergi katt / kvalster », « ikea » [A] | Priorité 2 (février → juin) |
| serrures-connectees | « smart lås ytterdörr » 1re suggestion ; « yale doorman l3s / v2n / classic » ; 8 duels « yale doorman vs … » [A] | Priorité 2 |
| alarmes + cameras-exterieur + sonnettes-video | « hemlarm utan abonnemang (bäst i test / med kamera) », « övervakningskamera utomhus utan abonnemang », « dörrklocka med kamera lagligt / regler » [A] | Priorité 2 |
| detecteurs-fumee-co | « brandvarnare seriekopplade / wifi », 10 suggestions « blinkar … », 10 « piper … », « brandvarnare lag hyresvärd / bostadsrätt » [A] ; l'autorité recommande détecteur, couverture anti-feu et extincteur à poudre [S31] | Priorité 2 en **pages problème** |
| thermostats | « smart termostat element / golvvärme / radiator / vattenburet element / fjärrvärme / danfoss / ikea » [A] | Priorité 2 (vocabulaire à corriger) |
| compteurs-energie + prises-connectees | « elmätare han port / vägguttag / 3-fas », « smart plug ikea / plejd / deltaco / zigbee » [A] ; test public Energimyndigheten 2023 (Tapo P115, Shelly, Nedis, Eve…) [S18] | Priorité 3 (hub énergie) |
| reveils-lumiere | « wake up light bäst i test / philips / barn », « väckarklocka med ljus och fågelkvitter », « dagsljuslampa 10000 lux » [A] | Priorité 3 (hiver) |

### 3.2 Catégories propres à la Suède (absentes ou mal couvertes)

| Catégorie | Preuves [A] sauf mention | Proposition |
|---|---|---|
| **Kaffebryggare** (cafetière filtre) | « kaffebryggare bäst i test / med termos / moccamaster / med kvarn / smeg », « moccamaster rea / one switch / optio », « pricerunner moccamaster » | **Nouvelle catégorie** (cuisine), avant Noël |
| **Köksmaskin** (robot pâtissier) | « köksmaskin bäst i test / ankarsrum / kitchenaid / bosch » ; en suédois « köksmaskin » = robot pâtissier, pas Thermomix | Nouvelle catégorie ; garder « köksmaskin med kokfunktion » pour robots-multifonctions |
| Stavmixer / blender | « stavmixer bäst i test råd och rön », « blender bäst i test » | Ajouter « stavmixer » au cluster blenders |
| Värmefilt / elfilt | « värmefilt biltema / clas ohlson / jula / batteri » ; fiche Elsäkerhetsverket « Elfiltar och värmedynor » | Catégorie Noël (déjà prévue dans la stratégie) |
| Fönstertvätt (raclette électrique) | « fönstertvätt kärcher / bäst i test / robot » | Ajouter la raclette électrique à laveurs-vitres |
| Kupévärmare / motorvärmare | « kupévärmare 12v bäst i test / fjärrstyrd / med timer » ; fiche « Bilvärmare » d'Elsäkerhetsverket | Optionnel (hiver) |
| Luftvärmepump | « luftvärmepump bäst i test råd och rön / med installation / pris » | **Guide seulement** (installé par un pro, mauvais pour Amazon) |
| Torkskåp / torktumlare | « torkskåp värmepump / litet », « torktumlare bäst i test / värmepump » | Plus tard (gros électroménager, commission faible) |
| Husbil & fritid | « bästa airfryer för husbil », « portabel ac husbil / husvagn », « kolmonoxidlarm husbil / båt / tält » | Pages « för husbil » dans les catégories existantes |
| Elpris & pilotage | « elpris idag område 3 », « styra värmepump efter elpris », « tibber pulse », « homey energy dongle » | Hub « smart elstyrning » (§ 6) |

### 3.3 Catégories du site peu pertinentes en Suède

| Catégorie | Pourquoi | Action /sv |
|---|---|---|
| **solaire-balcon** | Elsäkerhetsverket (12/10/2026) : le branchement sur une prise ordinaire ne respecte pas les exigences suédoises ; interdit sans vérification de l'installation et sans évaluation des risques documentée [S4] ; « solceller balkong tyskland / sverige » [A] | **Retirer les sélections produits** ; page explicative « Är balkongsolceller lagliga i Sverige? » |
| robots-piscine | Peu de variantes (« poolrobot bäst i test », « mammotion spino ») [A] | Basse priorité |
| detecteurs-fumee-co (volet CO) | Demande CO tournée vers camping-car, bateau, tente [A] | Réorienter vers « kolmonoxidlarm för husbil och båt » |
| sous-vide | Suggestions = recettes (« sous vide kycklingfilé », « ryggbiff ») [A] | Contenu recette, pas comparatif |
| frigos / micro-ondes / lave-vaisselle / lave-linge « smart » | Personne ne tape « smart » ; on tape « mikrovågsugn bäst i test », « diskmaskin 45 cm », « tvättmaskin bäst i test » [A] | Retirer « smart » des titres |
| interphones, coffres-forts | Faible longue traîne ; « värdeskåp hemma / brandsäkert » existe | Basse priorité |

---

## 4. Demande de recherche

### 4.1 Familles de modificateurs (sur 1 747 suggestions [A])

| Modificateur | Occurrences | Exemples | Format Homenura |
|---|---|---|---|
| **bäst i test** | **142** (116 sur les graines produit) | « airfryer bäst i test 2026 », « robotdammsugare bäst i test under 5000 » | Synthèse des tests tiers datée |
| **vs / eller** | 101 / 12 | « roborock vs dreame », « airfryer eller varmluftsugn » | Duel |
| « 2026 » | 42 | « bästa airfryer 2026 » | Titre daté, mis à jour |
| **råd och rön** | 27 | « dammsugare bäst i test råd och rön 2026 » | Encadré « Vad säger Råd & Rön? » (lien, date) |
| rea | 12 | « helautomatisk kaffemaskin rea » | Pages Black Week / mellandagsrea |
| under X (kr) | 18 | « robotdammsugare under 3000 kr » | Pages budget (≥ 5 produits, sans prix) |
| **utan abonnemang** | 13 | « hemlarm / kamera / dörrklocka utan abonnemang » | Longue traîne sécurité |
| **utan slinga** | 10 | « robotgräsklippare utan slinga 2000 kvm » | Longue traîne tondeuses |
| problème | « blinkar » 16, « laddar inte » 11, « läcker » 10, « piper » 10 | « brandvarnare piper trots nytt batteri » | Pages problème |
| consommation | « hur mycket el drar … » 6 | « … en airfryer jämfört med en ugn » | Hub consommation par zone |

### 4.2 Requêtes prioritaires (toutes vues dans [A] le 01/11/2026 ; volumes inconnus)

| # | Requête | Intention | Page Homenura |
|---|---|---|---|
| 1 | robotdammsugare bäst i test | Comparatif | aspirateurs-robots |
| 2 | robotdammsugare med mopp bäst i test | Comparatif | aspirateurs-laveurs |
| 3 | robotdammsugare trösklar | Usage (seuils de porte) | Section + page « för trösklar » |
| 4 | robotdammsugare bäst i test djurhår | Usage | Variante « för djurhår » |
| 5 | robotdammsugare under 3000 kr | Budget | Page budget |
| 6 | roborock vs dreame | Duel | Duel |
| 7 | robotdammsugare laddar inte | Panne | Page problème |
| 8 | airfryer bäst i test | Comparatif | airfryers |
| 9 | bästa airfryer för 2 personer | Usage | Variante |
| 10 | bästa airfryer med dubbla korgar | Usage | Variante |
| 11 | philips airfryer vs ninja | Duel | Duel (déjà le n° 1 du site en it/en) |
| 12 | hur mycket el drar en airfryer jämfört med en ugn | Info / consommation | Hub consommation |
| 13 | airfryer eller varmluftsugn | Duel d'usage | Duel |
| 14 | dammsugare bäst i test | Comparatif | aspirateurs-balais |
| 15 | skaftdammsugare bäst i test budget | Budget | Variante |
| 16 | dyson vs dreame | Duel | Duel |
| 17 | kaffemaskin bönor bäst i test | Comparatif | cafetieres (retitrée) |
| 18 | helautomatisk kaffemaskin med mjölkskummare | Usage | Variante |
| 19 | kaffebryggare bäst i test | Comparatif | **Nouvelle** kaffebryggare |
| 20 | kaffemaskin läcker vatten | Panne | Page problème |
| 21 | luftrenare bäst i test astma- och allergiförbundet | Comparatif + caution | purificateurs-air |
| 22 | luftrenare pollen | Usage | Variante (février) |
| 23 | avfuktare källare | Usage | deshumidificateurs |
| 24 | hur mycket el drar en avfuktare i krypgrund | Info / consommation | Hub consommation |
| 25 | luftfuktare sovrum | Usage | humidificateurs |
| 26 | värmefläkt med termostat | Comparatif | chauffages-appoint |
| 27 | oljefylld radiator eller konvektor | Duel d'usage | Duel |
| 28 | hur mycket el drar en värmefläkt på 2000w | Info | Hub consommation |
| 29 | portabel ac utan slang | Info + achat | climatiseurs-mobiles (été) |
| 30 | robotgräsklippare utan slinga bäst i test | Comparatif | tondeuses-robots |
| 31 | husqvarna automower vs segway navimow | Duel | Duel |
| 32 | smart lås ytterdörr | Comparatif | serrures-connectees (retitrée) |
| 33 | yale doorman vs nimly | Duel | Duel |
| 34 | hemlarm utan abonnemang bäst i test | Comparatif | alarmes |
| 35 | övervakningskamera utomhus utan abonnemang | Comparatif | cameras-exterieur |
| 36 | dörrklocka med kamera lagligt | Info / juridique | FAQ sonnettes-video (règles à vérifier auprès de l'IMY) |
| 37 | brandvarnare blinkar rött | Panne | Page problème |
| 38 | brandvarnare piper utan anledning | Panne | Page problème |
| 39 | laddbox med lastbalansering | Comparatif | bornes-recharge-ve |
| 40 | laddbox grönt avdrag | Info / financement | FAQ (taux à vérifier chez Skatteverket) |
| 41 | smart termostat vattenburet element | Comparatif | thermostats (retitrée) |
| 42 | elmätare han port | Info + achat | compteurs-energie (retitrée) |
| 43 | wake up light bäst i test | Comparatif | reveils-lumiere |
| 44 | fönstertvätt robot bäst i test | Comparatif | laveurs-vitres |
| 45 | ninja creami / ninja slushi | Marque (Noël) | Catégorie Noël prévue |

### 4.3 Audit des mots-clés sv actuels ([R] contre [A])

| Catégorie | Mot-clé sv actuel | Ce que tapent les Suédois [A] | Correction proposée |
|---|---|---|---|
| cafetieres | bästa helautomatiska kaffemaskin | « kaffemaskin bönor », « helautomatisk kaffemaskin » | **kaffemaskin bönor** (H1 « Helautomatiska kaffemaskiner för hela bönor ») |
| aspirateurs-balais | bästa sladdlösa dammsugare | « sladdlös dammsugare bäst i test », « skaftdammsugare » | **sladdlös dammsugare bäst i test** (+ « skaftdammsugare » en H2) |
| tondeuses-robots | bästa robotgräsklippare | « robotgräsklippare utan slinga » en tête | **robotgräsklippare utan slinga** dans le titre |
| serrures-connectees | smart lås | « smart lås ytterdörr » 1er | **smart lås ytterdörr** |
| thermostats | bästa smarta termostat | « smart termostat element / golvvärme / vattenburet element » | **smart termostat element** |
| detecteurs-fumee-co | smart brandvarnare | « brandvarnare bäst i test / seriekopplade / wifi » | **brandvarnare** (sans « smart ») |
| compteurs-energie | energimätare | « elmätare (han port, vägguttag) » | **elmätare** |
| batteries-domestiques | solcellsbatteri | « hembatteri (pris, utan solceller) » | **hembatteri** |
| prises-connectees | bästa smarta plugg | « smart plug » (en anglais), 0 suggestion « smart plugg … » | **smart plug** |
| detecteurs-fuite-eau | vattenlarm | « läckagelarm diskmaskin », « vattenläckage sensor » | **läckagelarm** (« vattenlarm » en synonyme) |
| trackers-objets | bluetooth-spårare | « nyckelhittare / nyckelfinnare », « airtag » | **nyckelhittare** |
| diffuseurs | aromdiffuser | « doftspridare (bäst i test, elektrisk) » | **doftspridare** |
| stations-meteo | smart väderstation | « väderstation wifi (med app) » | **väderstation wifi** |
| rideaux-automatises | gardinmotor | « rullgardin motor », « smarta gardiner ikea » | **smarta gardiner** / rullgardin motor |
| arrosage-connecte | smart bevattning | « bevattningssystem », « bevattningstimer » | **bevattningssystem** |
| eclairage-exterieur | smart utomhusbelysning | « utomhusbelysning (vägg, solcell) » | **utomhusbelysning** |
| blenders | bästa mixer | « blender bäst i test », « stavmixer bäst i test » | **blender** (+ stavmixer) |
| micro-ondes | smart mikrovågsugn | « mikrovågsugn bäst i test / liten » | **mikrovågsugn** |
| robots-multifonctions | bästa köksmaskin med kokfunktion | « köksmaskin » = robot pâtissier (Ankarsrum) | Garder, mais créer « köksmaskin » à part |
| solaire-balcon | balkongsolceller | « solceller balkong » ; produit non conforme sur prise [S4] | Page explicative, sans sélection |
| Inchangés (confirmés) | bästa airfryer · robotdammsugare med mopp · hemlarm utan abonnemang · övervakningskamera inomhus/utomhus · laddbox · portabel AC · wake up light · trådlös stektermometer · garageportöppnare · pelletsgrill | — | Ajouter « bäst i test » dans le titre quand la page synthétise des tests tiers |

### 4.4 Formats qui gagnent
SERP non relevées (§ 0) : ce qui suit vient de la demande [A] et des concurrents lus [S17][S19][S20].
1. **« X bäst i test 2026 »** : c'est la formulation de tête dans presque toutes les catégories ; Bästaval.se l'utilise pour ses titres et ses URL (`/luftfuktare/bast-i-test/`) [S20] ; Testfakta titre « … | Laboratorietest (2026) » [S17].
2. **Budget en couronnes** : « under 3000 kr », « budget » ; M3 titre « Stort test: Prisvärda smart-tv under 15 000 kr » [S19].
3. **Duels « vs »** : 101 suggestions, surtout marques (roborock / dreame / mova / ecovacs ; automower / navimow / mammotion ; yale doorman / nimly).
4. **Usage suédois** : trösklar, djurhår, källare / krypgrund, husbil, element / golvvärme / fjärrvärme, ytterdörr.
5. **Pannes** : « laddar inte », « blinkar rött », « piper », « läcker vatten » (aucun comparateur observé sur ce format).
6. **Consommation** : « hur mycket el drar … » à calculer selon la zone SE1–SE4 [S8].

---

## 5. Concurrence

### 5.1 Acteurs locaux

| Acteur | Type | Ce qu'il fait bien | Faiblesses / ouverture | Source |
|---|---|---|---|---|
| **Råd & Rön** | Magazine de tests consommateurs | Réflexe national : « råd och rön » dans 15 suggestions produit, 27 au total (dammsugare, airfryer, luftvärmepump, luftfuktare, hemlarm…) | Résultats réservés aux abonnés (à confirmer : site non joignable le 01/11) | [A] |
| **Testfakta** | Laboratoire de tests depuis 2001 (Stockholm) | Tests labo datés (« riskokare bäst i test », 12/08/2026) ; rubriques dammsugare, luftrenare, robotgräsklippare | Certains tests sont commandés par des marques (« på uppdrag av ») ; peu de mises à jour visibles en électroménager | [S17] |
| **Astma- och Allergiförbundet** | Association | Référence citée dans « luftrenare bäst i test » | Couvre seulement l'air intérieur | [A] |
| **Energimyndigheten** | Agence publique | Tests gratuits : elmätare et smart plugs (2023), grenuttag (2025), ventilation (2026) | Peu de catégories d'appareils, tests anciens | [S18] |
| **M3** (FoundryCo) | Magazine tech | « Test » et « Jämförande test », rubriques « Digitala hemmet » et « Robotgräsklippare » | Pas d'airfryer ni de grand comparatif robotdammsugare sur l'accueil | [S19] |
| Aftonbladet / Expressen | Presse | « portabel ac test aftonbladet » [A] | Non lus (refus de l'outil) | [A] |
| **Prisjakt / PriceRunner** | Comparateurs de prix | Notoriété (« prisjakt pricerunner », « pricerunner dammsugare ») | Prix plutôt que conseil rédigé (à vérifier) | [A][S28] |
| **Bästaval.se** (Swavio AB) | Affilié Amazon | Titres « X bäst i test 2026 – marques », 22 articles maison + 28 cuisine, dates du 27 au 30/10/2026 | **Amazon seul** ; images produits Amazon ; aucun auteur ; méthode ambiguë (« analyse » puis « testat av oss ») | [S20] |
| Smarthemguiden.se | Site d'information | Guides maison connectée (éclairage, robots, thermostats) | Ni auteur, ni date, ni comparatif | [S21] |
| Enseignes (Elgiganten, Jula, Clas Ohlson, Biltema, IKEA, Husqvarna) | Marchands | Présentes dans la recherche [A] ; Husqvarna publie un guide d'achat Automower [S25] | Ne parlent que de leur catalogue | [A][S25] |

### 5.2 vergleich.org : présence, catégories, mots-clés, parcours → adaptation /sv

**Présence en Suède : aucune.** Les pieds de page de meilleurs.fr et de pickbest.co.uk (lus le 01/11/2026) listent vergleich.org, meilleurs.fr, miglioreconsiglio.it, mejoraelige.es, pickbest.co.uk et bestpick.com, sans site .se ni nordique [S22].

**Catégories** : pickbest.co.uk suit l'arbre des rayons Amazon (16 rubriques : Home & Kitchen, Large Appliances, Garden, DIY & Tools…) ; en vitrine sur l'accueil : lave-linge, **robot tondeuse**, **airfryer**, **machine à café** [S22]. Ce sont trois de nos priorités suédoises.
**Mots-clés** (sitemap allemand, `dach.md` § 3.6) : longue traîne par type de produit (« mit » 358 pages, « für » 103, « ohne » 64, « bis N Euro » 63, marque + produit ≥ 188) ; presque pas de « vs », de pannes, ni d'« Erfahrungen ».
**Parcours** : recherche + « comparatifs populaires » par rubrique → page datée, « 3 choix », grand tableau, guide d'achat, FAQ → liens vers les variantes ; promesse « mis à jour au moins tous les 120 jours » [S22][dach.md].

| vergleich.org fait | Version Homenura /sv | Preuve suédoise |
|---|---|---|
| « X Test 2026 » / « Vergleich » | « **X bäst i test 2026 – vad testerna säger** » : synthèse datée de Råd & Rön, Testfakta, M3, Astma- och Allergiförbundet, Energimyndigheten ; jamais « vi har testat » | 12,6 % des suggestions [A] ; la publicité trompeuse est interdite [S2] → **formulation à valider** |
| « mit / ohne / für / bis » | « **med** mopp / tömning / kvarn / mjölkskummare / lastbalansering », « **utan** slinga / abonnemang / slang / mjölkskummare », « **för** djurhår / trösklar / källare / 2 personer / husbil / vattenburna element », « **under** 1000 / 2000 / 3000 kr » | Chaque famille vue dans [A] |
| Rayons Amazon | Garder nos 5 sections + cuisine ; ajouter un hub **« Energi & elpris »** (laddbox, smart termostat, elmätare HAN, smart plug, hembatteri) et un hub **« Vinter »** (värmefläkt, luftfuktare, wake up light, värmefilt) | [S1][S8][S9][A] |
| Peu de duels, pas de pannes | **En faire notre différence** : roborock vs dreame, automower vs navimow, yale doorman vs nimly, airfryer eller varmluftsugn ; pannes brandvarnare / robotdammsugare / kaffemaskin | 101 « vs », 47 pannes dans [A] |
| Bouton marchand unique | Boutons nommés : Elgiganten, Clas Ohlson, Jula, NetOnNet, Kjell, Amazon (dès que les programmes sont acceptés) | Enseignes citées, Amazon 0 [A] |
| Notes et nombres d'avis Amazon | **Interdit sans API** → « Vad säger testerna » (score, date, lien) | Règle Amazon (stratégie § 3) |
| Mise à jour ≤ 120 jours | « Uppdaterad den … » + journal ; révision mensuelle des 15 pages /sv principales | Concurrents datés au jour près [S20] |

### 5.3 Réponses des IA
60 % des Suédois utilisent l'IA, 52 % ChatGPT, ≈ 70 % ont vu les aperçus IA de Google [S10]. Selon l'étude Temso citée dans `geo-ia.md`, le suédois fait partie des langues dont les requêtes partent le plus souvent en anglais : la version anglaise compte aussi pour la Suède. Aucune étude suédoise sur les sources citées par les IA pour l'électroménager n'a été trouvée. Conséquence : réponse courte en tête de page, chiffres sourcés, tests tiers liés.

---

## 6. Recommandations pour Homenura /sv, classées par impact

### 6.1 Les 12 actions

| # | Action | Impact | Effort | Quand | Preuve |
|---|---|---|---|---|---|
| 1 | **Retitrer les 20 catégories du § 4.3** (titre, H1, mot-clé de tête) et ajouter « bäst i test 2026 » là où la page synthétise des tests tiers | Fort | Faible | Cette semaine | [A] |
| 2 | **Bloc « Vad säger testerna? »** par catégorie : Råd & Rön, Testfakta, Astma- och Allergiförbundet, Energimyndigheten, M3 (nom du test, date, lien ; aucun résultat payant recopié) | Fort | Moyen | Novembre | [A][S17][S18][S19] |
| 3 | **Multi-marchands** : candidater sur Adtraction, Tradedoubler et Awin pour Elgiganten, Clas Ohlson, Jula, NetOnNet, Kjell, CDON, Power, Husqvarna, Electrolux (programmes **à vérifier**) | Fort | Moyen (Miguel) | Dès que possible | Amazon 0/921 [A] ; logos Electrolux, Dyson, MediaMarkt chez Tradedoubler [S27] |
| 4 | **Vérifier la chaîne Amazon /sv** : les ASIN cités existent-ils sur amazon.se ? (sinon, Global Earning renvoie vers une recherche) ; liste `AMAZON_MISSING_ASINS` pour `sv` comme pour l'italien | Fort | Faible | Avant le Black Week | [R] `lib/amazon.ts` |
| 5 | **Black Week /sv complet avant le 15/11** : robotdammsugare, airfryer, sladdlös dammsugare, kaffemaskin bönor, laddbox, värmefläkt ; puis page **mellandagsrea** (26/12) à URL stable | Fort | Moyen | 15/11 et 20/12 | Électronique +32 % en novembre 2025 [S1] |
| 6 | **Pages problème suédoises** : brandvarnare blinkar rött / piper ; robotdammsugare laddar inte ; skaftdammsugare laddar inte ; kaffemaskin läcker vatten ; dyson blinkar rött | Fort | Faible | Novembre | 47 suggestions de panne [A] |
| 7 | **Hub « Hur mycket el drar … »** + calculateur avec la zone SE1–SE4 et le prix saisi par le lecteur (airfryer vs ugn, värmefläkt 2000 W, avfuktare i krypgrund, oljefylld radiator) | Fort | Moyen | Décembre | Écart de 1 à 5 entre zones [S8] ; [A] |
| 8 | **Duels suédois** (10) : roborock vs dreame · dyson vs dreame · philips airfryer vs ninja · airfryer eller varmluftsugn · oljefylld radiator eller konvektor · husqvarna automower vs segway navimow · yale doorman vs nimly · verisure alternativ · robotdammsugare vs skaftdammsugare · laddbox easee vs zaptec (déduit : les deux marques sont tapées) | Fort | Moyen | Nov. → janv. | [A] |
| 9 | **Nouvelles catégories** : kaffebryggare, köksmaskin (Ankarsrum / KitchenAid), värmefilt ; fönstertvätt ajouté à laveurs-vitres | Moyen | Moyen | Avant le 10/12 | [A] |
| 10 | **Grappes de variantes** (≥ 5 produits distincts, sans prix) : robotdammsugare för trösklar / djurhår / under 3000 kr ; robotgräsklippare utan slinga 1000 / 2000 kvm ; avfuktare källare / krypgrund ; smart termostat vattenburet element / golvvärme ; airfryer för 2 personer / dubbla korgar | Moyen | Moyen | Déc. → mars | [A] |
| 11 | **Retirer les sélections « balkongsolceller »** en /sv (page explicative à la place) ; réorienter le CO vers husbil / båt ; ôter « smart » des titres gros électroménager | Moyen (risque) | Faible | Cette semaine | [S4][A] |
| 12 | **Saison jardin** : robotgräsklippare utan slinga + luftrenare pollen mis à jour **avant le 15/02/2027** | Moyen | Moyen | Février | [A][S25] |

### 6.2 Ordre de mise en avant des catégories (accueil et menu /sv)
1. Robotdammsugare (+ med mopp) · 2. Airfryer · 3. Sladdlös dammsugare / skaftdammsugare · 4. Kaffe : kaffemaskin bönor + kaffebryggare · 5. Hiver : värmefläkt / elelement / oljefylld radiator, luftfuktare, avfuktare · 6. Sécurité : smart lås ytterdörr, hemlarm utan abonnemang, övervakningskamera utomhus, brandvarnare · 7. Énergie : laddbox, smart termostat element, elmätare HAN / smart plug · 8. Robotgräsklippare utan slinga (en tête de février à juin) · 9. Luftrenare (février à juin) · 10. Wake up light (octobre à février).

### 6.3 Marques et types de modèles à intégrer aux sélections /sv
- **Airfryer** : Philips (2000 / 3000 / 5000), Ninja (Dual, Double Stack, Crispi), Cosori (Dual Blaze, Turbo Tower), Tefal Easy Fry ; une option nordique (OBH Nordica ou Wilfa) ; formats « dubbla korgar » et « för 2 personer ».
- **Robotdammsugare** : Roborock, Dreame, Xiaomi, Ecovacs, Eufy, iRobot ; critère **hauteur de franchissement des seuils** (« trösklar ») et station de vidage (« tömning »).
- **Sladdlös** : Electrolux (Pure / Clean 600), Dyson, Bosch, Dreame, Shark.
- **Kaffe** : Philips 2200 / 3200 LatteGo, De'Longhi Magnifica S / Evo, Jura, Sage Barista Express ; **Moccamaster** et Wilfa pour la kaffebryggare.
- **Avfuktare** : Woods (si disponible chez un marchand partenaire) ; modèles « för källare / krypgrund ».
- **Robotgräsklippare** : Husqvarna Automower (gamme sans câble), Gardena, Segway Navimow, Mammotion, Worx.
- **Sécurité** : Yale Doorman L3S / V2N, Nimly ; Ajax et caméras sans abonnement ; brandvarnare **seriekopplade** (interconnectés).
- **Énergie** : Easee, Zaptec (laddbox, installation par électricien obligatoire [S5]) ; Danfoss, IKEA (thermostats de radiateur) ; Ngenic Tune (pompes à chaleur, fjärrvärme) ; Tibber Pulse, Homey Energy Dongle (lecture du port HAN à vérifier) ; Plejd, IKEA DIRIGERA, Deltaco (prises et éclairage).

### 6.4 Adaptations du contenu et du SEO
- **Jamais « vi har testat »** ; méthode « vi sammanställer tester och specifikationer » visible et liée. Faire valider la formule « bäst i test » par un juriste suédois (le droit interdit la publicité trompeuse [S2]).
- **Montants en couronnes** et seuils ronds (1000, 2000, 3000, 5000 kr), jamais de prix de modèle.
- Encadré **« Säkerhet & CE-märkning »** (18 % savent ce que signifie le marquage CE [S3]) ; conseil d'achat auprès d'un vendeur de l'UE ; produits rechargeables et incendies [S29].
- **Électricité** : citer la zone (SE1–SE4), le prix au quart d'heure [S7], et dire clairement que l'obligation d'effektavgift a été abrogée en juin 2026 [S6].
- **Laddbox** : rappeler que l'installation par un électricien est obligatoire et qu'une recharge jusqu'à 16 A ne l'exige pas [S5] ; « grönt avdrag » seulement après vérification des taux chez Skatteverket.
- Auteur nommé suédophone + date « Uppdaterad den » + journal des changements.
- Calendrier éditorial : 15/11 Black Week, 18/11 réaction à Årets julklapp (si le lauréat touche nos catégories), 20/12 mellandagsrea, 15/02 jardin et pollen.

### 6.5 Programmes d'affiliation hors Amazon (Amazon est faible ici)
| Programme | Ce qui est établi | À vérifier |
|---|---|---|
| Amazon.se via Global Earning | Liens /sv = amazon.fr + `homavisese-21`, redirigés vers amazon.se [R] ; amazon.se annonce « provision till 12 % », variable selon la catégorie [S26] | Taux appliqués via le compte FR ; disponibilité des ASIN sur amazon.se |
| Adtraction | Plateforme d'affiliation active depuis 2007, 12 bureaux en Europe, marchés dont SE / NO / DK / FI [S27] | Liste des annonceurs maison / électronique |
| Tradedoubler | Fondé à Stockholm ; logos Electrolux, Dyson, MediaMarkt, HP [S27] | Programmes ouverts en Suède |
| Awin | Déjà utilisé par Homenura (candidatures en cours) | Marchands suédois disponibles |
| Prisjakt / PriceRunner | Comparateurs connus des Suédois [A] | Existence d'un programme éditeur (non vérifié) |

### 6.6 Indicateurs de suivi (/sv)
Chaque lundi : Search Console filtre pays = Suède (clics, CTR, position des 20 pages /sv) ; clics sortants par marchand (`/api/click`) ; gains de l'identifiant `homavisese-21`. Objectif à 3 mois : positions < 15 sur 10 requêtes du § 4.2 (robotdammsugare, airfryer, dammsugare, robotgräsklippare utan slinga, hemlarm utan abonnemang).

### 6.7 Ce que seul Miguel peut faire
1. Relever dans son Chrome les **top 50 amazon.se** (Kök, Hem, Hushållsapparater, Trädgård) et les meilleures ventes Elgiganten / Clas Ohlson / Jula, plus **Google Trends Suède 12 mois** (airfryer = 100) pour recaler les priorités.
2. Candidater sur **Adtraction** et **Tradedoubler** (comptes éditeur) ; vérifier dans Awin les marchands suédois.
3. Vérifier l'**accès à Råd & Rön** (abonnement, conditions de citation) et choisir l'auteur suédophone.
4. Faire valider la formulation « bäst i test » (synthèse de tests tiers) par un conseil suédois.

---

## 7. Sources (lues le 01/11/2026 sauf mention)

- [A] Autocomplétion Google Suède (hl=sv, gl=se), 200 graines, relevée le 01/11/2026 : `/private/tmp/claude-501/-Users-miguelserenite-Desktop/bbc95dd3-ec06-4132-9771-22a8cbfe1172/scratchpad/se-data/ac1.txt` et `ac2.txt` (mesure propre ; indice d'intention, pas de volume).
- [S1] Svensk Handel, *Läget i handeln 2026* : https://lagetihandeln.svenskhandel.se/__l5e/assets-v1/236e5b26-eaba-4729-af4d-ffb8c3cb3125/laget-i-handeln-2026.pdf ; https://lagetihandeln.svenskhandel.se/det-har-ar-handeln
- [S2] Svensk Handel, « Fem saker att ha koll på inför Black Week », 30/10/2026 : https://www.svenskhandel.se/nyhetscenter/nyheter/fem-saker-att-ha-koll-pa-infor-black-week--svensk-handels-expert-ger-rad/
- [S3] Elsäkerhetsverket, enquête Sifo sur le marquage CE, 28/10/2026 : https://www.elsakerhetsverket.se/om-oss/nyheter-och-press/nyheter/2026/2026-10-28-ny-sifo-undersokning-stort-fortroende-for-ce-markningen-men-lag-kunskap-om-vad-den-innebar
- [S4] Elsäkerhetsverket, « Stickproppsanslutna solceller », publié le 12/10/2026 : https://www.elsakerhetsverket.se/privatpersoner/dina-elprodukter/produkter-a-o/stickproppsanslutna-solceller
- [S5] Elsäkerhetsverket, « Laddstationer », publié le 31/08/2026 : https://www.elsakerhetsverket.se/privatpersoner/dina-elprodukter/produkter-a-o/laddstationer
- [S6] Ei, « Frågor och svar om effektavgifter » : https://ei.se/konsument/anvand-el-smartare/elnatsavtal-med-effektavgift/fragor-och-svar-om-effektavgifter
- [S7] Ei, « Elhandelsavtal med kvartspris » (revu le 08/01/2026) : https://ei.se/konsument/anvand-el-smartare/elhandelsavtal-med-kvartspris
- [S8] elbruk.se, prix spot par zone, moyennes d'octobre 2026 : https://www.elbruk.se/
- [S9] Mobility Sweden, « Elbilarna lyfter septembermarknaden », 01/10/2026 : https://mobilitysweden.se/statistik/Nyregistreringar_per_manad_1/nyregistreringar-2026/elbilarna-lyfter-septembermarknaden
- [S10] Internetstiftelsen, « Så använder svenskarna AI 2026 », 28/09/2026 : https://svenskarnaochinternet.se/utvalt/sa-anvander-svenskarna-ai-2026/
- [S11] Market, « Så har Amazon vunnit mark efter fem år i Sverige », 03/02/2026 (résumé, chiffres partiels) : https://www.market.se/artikel/sa-har-amazon-vunnit-mark-efter-fem-ar-i-sverige-det-ar-forvanande/
- [S12] Market, « Amazoncheferna om miljardsatsningar i Sverige », 15/06/2026 : https://www.market.se/affarsnyheter/affarsutveckling/amazoncheferna-om-miljardsatsningar-i-sverige-bara-borjan/
- [S13] Market, « Sveriges största e-handlare 2025 », 14/10/2025 (accroche « Superlyftet för Amazon ») : https://www.market.se/artikel/sveriges-storsta-e-handlare-2025-ladda-ner-hela-listan-har/
- [S14] Market, « Breda prisökningar inför Black Friday », 29/10/2026 (données Prisgrisen) : https://www.market.se/detaljhandelsfragor/lagar-och-regler/breda-prisokningar-infor-black-friday-kundernas-fortroende-star-pa-spel/
- [S15] Wikipédia suédois « Amazon.se » (ouverture le 28/10/2020 selon Dagens Industri) : https://sv.wikipedia.org/wiki/Amazon.se ; DI archivé : https://web.archive.org/web/20201031135942/https://digital.di.se/artikel/amazon-har-oppnat-i-sverige
- [S16] HUI, Årets julklapp : https://hui.se/arets-julklapp/
- [S17] Testfakta : https://www.testfakta.se/ ; https://www.testfakta.se/riskokare-bast-i-test
- [S18] Energimyndigheten, « Enkla elmätare och smarta pluggar med energimätning » (mis à jour le 06/12/2023) : https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/enkla-elmatare-och-smarta-pluggar-med-energimatning/ ; Tester A-Ö : https://www.energimyndigheten.se/effektiv-energianvandning/tester/tester-a-o/
- [S19] M3 : https://www.m3.se/ ; https://www.m3.se/article/1837161/smart-tv-mellanklass.html
- [S20] Bästaval.se (Swavio AB) : https://bastaval.se/ ; https://bastaval.se/luftfuktare/bast-i-test/
- [S21] Smarthemguiden : https://smarthemguiden.se/
- [S22] Réseau vergleich.org, pieds de page : https://www.meilleurs.fr/ et https://www.pickbest.co.uk/ ; analyse détaillée : `docs/croissance/seo-etudes/dach.md` § 3
- [S23] Plejd : https://www.plejd.com/sv/
- [S24] Ngenic : https://ngenic.se/
- [S25] Husqvarna Suède : https://www.husqvarna.com/se/ ; https://www.husqvarna.com/se/robotgrasklippare/robotgrasklippare-utan-slinga/
- [S26] Amazon Associates Suède : https://affiliate-program.amazon.se/
- [S27] Adtraction : https://adtraction.com/se/ ; Tradedoubler : https://www.tradedoubler.com/
- [S28] Wikipédia suédois « Prisjakt » (cession à eEquity, Breakit) : https://sv.wikipedia.org/wiki/Prisjakt ; https://www.breakit.se/artikel/43176/schibsted-saljer-prisjakt-for-en-halv-miljard-kronor
- [S29] Elsäkerhetsverket, « Laddbara produkter fortsatt vanliga bakom bostadsbränder », 09/10/2026 : https://www.elsakerhetsverket.se/om-oss/nyheter-och-press/nyheter/2026/2026-10-09-laddbara-produkter-fortsatt-vanliga-bakom-bostadsbrander
- [S30] Market, « Så kapitaliserar cyberkriminella på Amazons shoppingfest », 07/10/2026 : https://www.market.se/artikel/sa-kapitaliserar-cyberkriminella-pa-amazons-shoppingfest/
- [S31] MCF (msb.se redirige vers mcf.se), « Brandsäkerhet i hemmet » : https://www.mcf.se/sv/rad-till-privatpersoner/brandsakerhet/brandsakerhet-i-hemmet/
- [R] Dépôt : `lib/catalog/categories.ts`, `lib/amazon.ts` (Global Earning lu le 31/10/2026 : https://www.amazon.fr/b?node=219770841031), `lib/black-friday/`.
