# Homenura /us : ce qu'il faut changer pour convertir les acheteurs américains (étude du 01/11/2026)

Version /us en ligne depuis le 01/11/2026 (PR #65). Cette étude s'appuie sur les travaux existants (STRATEGIE-2026-10 § 7-8, SEO-PLAN-2026-10, seo-etudes/*) et ne les refait pas. Elle ajoute les sources américaines : listes de meilleures ventes d'amazon.com, suggestions de Google États-Unis, Consumer Reports, RTINGS, ENERGY STAR, EIA, IRS, FTC, NRF, une loi de l'Utah, et le site américain du groupe vergleich.org (bestpick.com).

## L'essentiel (5 décisions)

1. **Aujourd'hui, /us est le site européen traduit.** Un Américain y trouve un chapitre « marché français » en euros, une garantie « UE de 2 ans », le RGPD et l'étiquette énergie de l'UE dans l'intro des 47 pages catégorie, des normes EN, des chauffages Thermor ou Sauter, des détecteurs Netatmo et un pied de page « HOME NURA EUROPE ». Sur les 30 friteuses les plus vendues sur amazon.com, on ne trouve ni Philips, ni Tefal, ni Moulinex, ni Xiaomi [A1]. Or ce sont nos choix [HN].
2. **Le levier n° 1, ce sont des produits vendus aux États-Unis**, avec des références (ASIN) amazon.com. Nos liens partent d'amazon.fr avec des références européennes. Global Earning renvoie alors vers « le même produit ou un produit similaire, sinon une recherche » (lib/amazon.ts). Sur un modèle européen 230 V, ce sera souvent une recherche, qui convertit mal.
3. **L'accueil /us doit cesser d'être une page sur les friteuses.** Il faut une page « par besoin », calée sur la saison américaine : Black Friday (27/11) et Cyber Monday (30/11) [NRF], puis chauffage et humidité l'hiver, la sécurité (Ring et Blink dominent les ventes maison connectée [A5]) et la cuisine.
4. **Le vocabulaire et les unités américaines vendent.** Les Américains cherchent « under $100 », « for pet hair », « for basement », « without subscription », « without c wire », « for 1 acre », mais aussi « consumer reports », « reddit » et « wirecutter » [G1]. Il faut des quarts (pintes US), des °F, des pieds carrés, des BTU, du 120 V, la certification UL 217 et la mention ENERGY STAR.
5. **La confiance repose sur des sources américaines liées et un responsable identifié.** Il faut citer et lier Consumer Reports, RTINGS, ENERGY STAR et les certifications UL, ne jamais dire « testé », et placer la mention d'affiliation au plus près des boutons (FTC [FTC]). L'équivalent américain de vergleich.org (bestpick.com) est faible : aucun auteur, aucune source, des textes avec « [insert brand name] » laissés tels quels [BP2]. La place est prenable.

---

## 0. Méthode et limites

- **Sources lues le 01/11/2026** (liste à la fin) : 9 listes de meilleures ventes amazon.com, 60 relevés de suggestions Google (pays = US, langue = anglais), puis CR, RTINGS, ENERGY STAR, EIA, IRS, FTC, NRF, Utah, bestpick.com, et 6 pages homenura.com/us.
- **Pas de volumes de recherche.** Les suggestions Google montrent qu'une formulation est tapée, pas combien de fois. Leur ordre ne prouve pas un volume. Google Trends a renvoyé une page anti-robots, donc pas de courbes saisonnières.
- **Listes amazon.com** : lues avec une adresse de livraison en Espagne. Amazon prévient qu'il affiche les articles livrables dans ce pays, donc un léger biais est possible.
- **Non lus** : Wirecutter (le site du NYT refuse l'outil), les commissions Amazon US (connexion requise), et les études de taux d'équipement (le quota de recherches de l'outil, partagé entre agents, était épuisé). Tout ce qui vient de mes connaissances générales est marqué **[à vérifier]**.

## 1. Ce que voit un Américain aujourd'hui (pages /us lues le 01/11/2026)

| # | Défaut constaté | Où (fichier) | Gravité |
|---|---|---|---|
| 1 | Chapitre d'accueil « The air fryer market in 2026: a look at France » : chiffres en euros, sans source, parts de marché Philips 30 %, Moulinex, Tefal | `dictionaries/us.json` → `market_section_*` | Forte |
| 2 | Intro des 47 pages catégorie : « EU energy label (A to G), data privacy under the EU's GDPR… » | `lib/catalog/content.ts:126` (modèle `us`) | Forte |
| 3 | Produits européens : accueil et guide friteuses avec Tefal ActiFry (« 1.7kg » affiché comme capacité), Moulinex Easy Fry Max, Xiaomi, Philips 3000 XL, Cecotec ; chauffages Thermor Equateur 4, Sauter Orosi 2, Mill ; détecteurs Netatmo (EN 14604 / EN 50291) | `lib/products.ts` (même liste pour toutes les langues), `lib/blog/article-products`, picks des catégories | Forte |
| 4 | Liens vers amazon.fr avec des références européennes, pour des lecteurs qui achètent sur amazon.com | `lib/amazon.ts` (`us: { ...AMAZON_FR }`) | Forte (conversion) |
| 5 | FAQ d'accueil : « In the EU, all of these models carry at least a two-year guarantee », « price in each European market », « Belgian-style fries » | `dictionaries/us.json` → `faq` | Moyenne |
| 6 | Pied de page « © 2026 HOME NURA EUROPE » | `components/ui/SiteFooter.tsx:177` | Moyenne |
| 7 | Top 3 de l'accueil : les numéros 2 et 3 ne suivent pas les notes (8,7 classé avant 8,9) ; titre « 3 Picks » sur une page de 9 produits ; comparateur « 3 models side by side » qui n'en montre que 2 | `app/[lang]/page.tsx`, `us.ts` (heads), `comparateur` | Moyenne |
| 8 | Chiffres contradictoires : la Cosori Lite fait « 2.7-quart » puis « 4-quart », 900 W puis 1 500 W ; règle « 10 W per sq ft » mais « 1,000 W for about 110 sq ft » | `dictionaries/us.json`, FAQ chauffages | Moyenne |
| 9 | Têtes de catégorie centrées sur l'Europe : thermostats « for Boilers », tado / Netatmo / OpenTherm ; bornes de recharge Wallbox / Easee / Zaptec ; « Balcony Solar 800 W » | `lib/catalog/category-heads/us.ts` | Forte |
| 10 | Aucune source américaine liée : `INDEPENDENT_SOURCES` et `TESTER_HOSTS` n'existent que pour `de` | `lib/catalog/independent-sources.ts` | Moyenne |
| 11 | Coût d'usage calculé à « 20 ¢/kWh (exemple) », alors que la moyenne américaine est de 18,16 ¢ (août 2026 [EIA]) | `us.json`, FAQ catégories | Faible à moyenne |
| 12 | Point positif à garder : auteur « Emily Carter », présenté honnêtement comme un nom de plume, avec « Miguel Marie… is responsible » ; « We don't test products ourselves » ; mention Amazon exacte ; dollars sur les pages guide | `auteur`, `methodologie` | — |

Search Console (28 jours au 28/10) : les pages /en ont fait **4 479 impressions aux États-Unis pour 8 clics (0,2 %)**, soit plus qu'au Royaume-Uni [GSC]. Il y a une demande américaine, mais des pages britanniques ou européennes ne la convertissent pas.

## 2. Ce que les Américains achètent et cherchent

### 2.1 Meilleures ventes amazon.com (lues le 01/11/2026)

| Rayon amazon.com | Ce qui domine (rang) | Leçon pour /us |
|---|---|---|
| Fryers [A1] | 1 Ninja AF181 6,5 qt · 2 Cosori TurboBlaze 6 qt · 3 Chefman 4 qt · 4 Ninja AF141 5 qt · 5 bella Slim 4 qt · 6 Chefman TurboFry 9 qt · 7 Ninja DualZone DZ950 10 qt · 11 Ninja French Door FO101 · 12 Cuisinart Air Fryer Toaster Oven · 14 Emeril Lagasse 26 qt French Door · 16 Our Place Wonder Oven · 22 Instant Vortex Plus 6 qt · 25 Ninja DZ201 8 qt · 29 Ninja AF101 4 qt | Ninja, Cosori et Chefman en tête. Les **fours air fryer (toaster oven)** font partie de la même catégorie. Capacités en quarts. **Aucun Philips, Tefal, Moulinex ou Xiaomi.** La marque Tefal s'appelle **T-fal** aux États-Unis (friteuse T-fal n° 24). |
| Petit électroménager [A9] | Grille-pain bella, mijoteuse Crock-Pot 7 qt, **Keurig K-Express et K-Elite** (capsules), cafetière filtre BLACK+DECKER 12 tasses, bouilloires Cosori et Chefman, Ninja Blast | Le café américain, c'est la cafetière filtre et Keurig, pas l'automatique avec broyeur. Notre tête « super-automatic espresso machine » vise une niche. |
| Robot vacuums [A2] | roborock Q7 M5+, Qrevo S Pro, Qrevo 2 Pro · Shark AI Ultra AV2501S, PowerDetect AV2800ZE · Dreame L40 Ultra Gen 2, D20 Air Plus · iRobot Roomba 105, Plus 405 · Ecovacs T90 Pro Omni · eufy E25 · bas de gamme ILIFE, Tikom, ROPVACNIC | Shark et iRobot (marques américaines) sont à côté de Roborock et Dreame. La puissance d'aspiration est affichée en Pa. |
| Chauffage, clim, air [A3] | n° 1 du rayon : humidificateur Levoit · chauffages Dreo, Amazon Basics, GiveBest · purificateurs Levoit (Core 300, Vital 200S-P « up to 1875 ft² ») · **filtres de rechange « AHAM VERIFIDE »** · filtres de chaudière MERV 11 | L'hiver américain se vit avec humidificateurs, chauffages d'appoint et purificateurs. Les surfaces sont en ft². La certification AHAM est un signal de confiance. |
| Space heaters [A4] | Dreo (4 modèles dans le top 12), Amazon Basics, Mr. Heater 9 000 BTU (propane), GiveBest, Lasko tour 1 500 W, Dr Infrared DR-968 | Nos picks Thermor, Sauter et Mill n'existent pas sur ce marché. Le standard est **1 500 W sur prise 120 V**. |
| Smart Home [A5] | Ring Battery Doorbell 2K (2), Blink Mini 2K+ (4), Blink Outdoor 4 (8), Govee (ampoules A19 E26, rubans LED), Tapo C100, Kasa EP10P4 15 A, Blink Doorbell, Ring Chime | Les marques d'Amazon (Ring, Blink, Echo) dominent. Notre angle « sans abonnement » (eufy, Tapo) reste juste, mais il faut les duels **Ring vs Blink**, Ring vs Nest… |
| Tools & Home Improvement [A6] | n° 1 : « blink plus plan » (abonnement). Puis filtres à eau de frigo (GE, everydrop, Samsung, LG), filtres de chaudière Filtrete et Filterbuy MERV 8/11, Brita | L'abonnement Blink est le 1er produit du rayon : le coût des abonnements est un vrai sujet. Les consommables (filtres) se rachètent souvent, c'est une piste P2. |
| Fire Safety [A7] | Kidde (extincteur, CO), **First Alert** (SMI100, CO400, SMCO100, versions câblées -AC), **X-Sense « UL 217 Certified »**, Kidde Smart avec Ring | Netatmo absent. Les Américains attendent **UL 217 / UL 2034**, des modèles **câblés (hardwired)** et des combinés fumée + CO. |
| Generators & Portable Power [A8] | Jackery (Solar Generator 300 / 1000 v2 / HomePower 3600 Plus), EcoFlow Delta 3, Anker SOLIX C1000, Bluetti, un groupe essence 4 400 W | Aux États-Unis, l'équivalent du « solaire de balcon », c'est le **« solar generator » / power station** pour les **coupures de courant**. |

### 2.2 Vocabulaire et modificateurs américains (suggestions Google, pays US, 01/11/2026 [G1])

| Sujet | Formulations suggérées (extraits) |
|---|---|
| Friteuses | best air fryer **consumer reports** · **toaster oven combo** · **under $100 / $50 / $200 / 150 / $80** · air fryer **vs convection oven / toaster oven / oven / microwave / deep fryer / instant pot** · **ninja vs cosori air fryer** · cosori vs instant pot / chefman / gourmia |
| Robots aspirateurs | **and mop** · **for pet hair** · **under 300 / $500 / $200 / $400 / $100** · for hardwood floors · **without mop** · reddit · **roborock vs roomba / dreame / shark / eufy / narwal / ecovacs** |
| Aspirateurs balais | for pet hair · for carpet and hardwood · **shark vs dyson** · dyson vs bissell · shark vs bissell |
| Chauffage | best space heater **for large room / bedroom / basement / office / bathroom / garage / rv** · **space heater recall 2026** · space heater with thermostat · wattage |
| Air | air purifier **for pets / mold / dust / smoke / allergies / bedroom / dorm room** · dehumidifier **for basement / with drain hose / crawl space / garage** · humidifier for bedroom / **baby** / large room / plants |
| Clim | portable AC **without hose / without window access** · **window air conditioner vs portable** · best window air conditioner |
| Sécurité | **without subscription** (sonnette, caméras, alarme) · for apartments · for apple homekit / home assistant · **ring vs blink / nest / simplisafe / eufy / arlo / wyze / vivint** · home security system **self-monitored / for seniors / wirecutter** · camera **without wifi / for rural areas** |
| Fumée | smoke detector **chirping / beeping 3 times / blinking red / randomly going off** · **hardwired** · smoke and CO **combo** |
| Thermostats | **without c wire** · **for heat pump** · with room sensors · without subscription · **ecobee vs nest / honeywell / sensi / aqara** |
| Énergie | portable power station **for home backup / power outage / refrigerator / cpap / rv / camping** · generator vs power station · **best level 2 ev charger** for home / for tesla / hardwired |
| Jardin | robot mower **for 1/2 acre / 1 acre / 2 acres** · **without perimeter wire** · pool robot **for above ground / inground / under $500 / cordless** · pellet grill for the money / under 1000 |
| Nouveaux sujets | best **electric / heated blanket** (consumer reports, queen, king, for elderly) · **ninja creami** vs deluxe / swirl · **ninja slushi** max / twist / xl · best **coffee maker** (with grinder, for one person, under $100) · espresso machine **under 500 / 1000 / 200** · best **window air conditioner** · best **whole house generator** |

Constats : (1) **« consumer reports », « reddit » et « wirecutter » complètent les recherches** dans presque toutes les catégories. Les Américains vérifient l'avis d'un tiers, ce qui confirme le bloc « ce qu'en disent CR / RTINGS / les propriétaires ». (2) Les **usages par pièce ou par logement** (basement, garage, dorm, rv, apartment) remplacent nos usages européens (« studio », « famille de 4 »). (3) Les **montants en dollars** sont très présents. (4) Les **écosystèmes** comptent : Alexa, Google Home, HomeKit, Home Assistant.

### 2.3 Calendrier commercial américain

| Moment | Date | Source / remarque |
|---|---|---|
| Achats de fin d'année | 43 % des acheteurs comptent commencer avant novembre ; prévision NRF : +4,2 %, 1 013 Md$ en nov.-déc. 2026 ; 203 M d'acheteurs le week-end de Thanksgiving 2025 | [NRF] |
| Thanksgiving / Black Friday / Cyber Monday | jeu. 26 / ven. 27 / lun. 30 nov. 2026 | calcul calendrier |
| Hiver : chauffage, humidificateurs, coupures de courant | déc. → fév. | ventes [A3][A4][A8] ; « space heater recall 2026 » [G1] |
| Presidents' Day (soldes électroménager) | lun. 15/02/2027 | date calculée ; tradition des soldes **[à vérifier]** |
| Mother's Day / Memorial Day | 9/05 / 31/05/2027 | dates calculées |
| Father's Day : grills, thermomètres | 20/06/2027 | date calculée |
| Prime Day (juillet) / 4 juillet / Labor Day (6/09/2027) / Prime Big Deal Days (oct.) | dates Amazon non annoncées | **[à vérifier]** |

## 3. Le modèle vergleich.org aux États-Unis : bestpick.com (catégories, mots-clés, parcours)

Le groupe de vergleich.org (VGL Publishing AG) a un site américain, **bestpick.com** [BP1]. Ce qu'on y lit :

- **Catégories** : celles d'Amazon (Appliances, Home & Kitchen, Patio Lawn & Garden, Tools & Home Improvement, Health & Household…). Pour nos rayons : air fryer, **dual air fryer**, air purifier, **basement dehumidifier**, humidifier, **heated blanket**, cordless vacuum, **cordless vacuum mop**, **pet hair vacuum**, robot vacuum, **Roborock / Ecovacs robot vacuum** (pages marque), window cleaning robot, carpet cleaning machine, thermostatic radiator valve, **robot mower without boundary wire**, pool cleaning robot, **portable generator**, **portable power station**, weather station, **smoke detector / Wi-Fi smoke detector**, outdoor security camera, sunrise alarm clock, **artificial Christmas tree** [BP1].
- **Mots-clés et gabarit** : titre « air fryer test or comparison » The best 16 for 2026 », H1 « Best air fryers 2026 », « Updated: 10/27/2026 », étiquettes **« Comparison winner / Best value / Bestseller »**, mentions d'achats issues d'Amazon (« 300+ purchases last month »), bouton **« View price → »**, quarts uniquement, URL courtes (/air-fryer/, /dual-air-fryer/) [BP2].
- **Parcours** : accueil → rayon (département Amazon) → liste de 16 produits notés → « View price » → marchand. Liens vers les déclinaisons et les produits voisins, aucune FAQ [BP2].
- **Faiblesses** : **pas d'auteur, pas de source citée**, des phrases-modèles non remplies (« [insert brand name] »), des notes de 9,9 sur une échelle non précisée, « test » dans le titre sans méthode décrite, et des images Amazon (hébergées sur le CDN d’images d’Amazon) [BP2].

**À reprendre pour /us** : (1) des rayons et des noms qui calquent les départements amazon.com ; (2) des déclinaisons par usage (basement, pet hair, without boundary wire, dual) et par marque (Roborock, Ecovacs) ; (3) un gabarit court (date, 3 étiquettes, tableau, bouton) ; (4) le saisonnier (sapin artificiel, couverture chauffante).
**Où on fait mieux** : auteur et responsable nommés, sources américaines liées, FAQ issues des vraies questions, pages problème (« chirping », « not cooling ») et duels, qu'il n'a pas. **Pas d'images Amazon** sans l'API (règle déjà en place).

## 4. Accueil /us : priorité et ordre des catégories

**Aujourd'hui** : H1 « Best Smart Air Fryers of 2026 », 9 friteuses européennes, chapitre France, bandeau Black Friday [HN1].

**Proposé (gabarit /us seul, les autres langues ne bougent pas)** :

1. **Bandeau saisonnier en tête** (texte selon la date) : jusqu'au 30/11, « Black Friday & Cyber Monday 2026: the home deals worth watching » ; du 1/12 au 28/02, « Winter home: heat, humidity, power outages » ; au printemps, « Spring cleaning & yard ».
2. **« Shop by need »** : 8 tuiles dans cet ordre en novembre-février. Elles suivent les ventes [A1-A8] et la saison, et l'ordre est un choix de jugement :
   1. Air fryers & air fryer ovens
   2. Robot & cordless vacuums
   3. Space heaters & humidifiers
   4. Air purifiers & dehumidifiers
   5. Video doorbells & cameras (no subscription)
   6. Smoke & CO alarms
   7. Smart thermostats, plugs & bulbs
   8. Power stations & outage backup
   Au printemps-été : robot mowers, pool robots, pellet grills, window/portable AC remontent en 3e-6e position.
3. **« Most-compared »** : Ninja vs Cosori · Ring vs Blink · Roborock vs Roomba · Shark vs Dyson · Ecobee vs Nest · Window vs portable AC (l'été) [G1].
4. **« Under $100 »** : friteuses, purificateurs, humidificateurs, chauffages, sonnettes (pages à ≥ 5 produits, sans prix affiché).
5. **Bandeau confiance** : « We don't test. We compare Consumer Reports, RTINGS, ENERGY STAR and UL listings with manufacturer specs. Updated [date]. Editor: [nom]. »
6. Puis le bloc friteuses actuel, réduit à un top 3 américain, et la FAQ friteuses épurée.

**Ordre des 5 rubriques dans le menu et les pages rubrique /us** : Kitchen → Cleaning → Heating, Cooling & Air → Security → Smart Home & Energy → Yard & Outdoor. Aujourd'hui, c'est cuisine, énergie, sécurité, confort, entretien, extérieur. Le nom « Indoor climate » devient « Heating, Cooling & Air Quality », celui d'Amazon [A3]. « Garden & outdoor » devient « Yard & Outdoor », le mot américain **[à vérifier sur l'usage]**.

## 5. Types de pages à ajouter pour /us (par ordre de rendement attendu, jugement)

| Type | Exemples prioritaires | Preuve locale | Règle |
|---|---|---|---|
| **Duels X vs Y** | ninja vs cosori air fryer · ring vs blink · roborock vs roomba · shark vs dyson cordless · ecobee vs nest · cosori vs instant pot · window vs portable air conditioner · generator vs power station | [G1] ; les duels prennent déjà le plus de clics [GSC] | 1 verdict en 50 mots, un tableau de critères, puis « choose X if… » |
| **Under $X** | best air fryer under $100 · robot vacuum under $300 / $500 · espresso machine under $500 · pool robot under $500 | [G1] | ≥ 5 produits distincts, aucun prix de modèle (règle Amazon) ; dire « price band checked on [date] » |
| **Par usage / logement** | robot vacuum for pet hair · dehumidifier for basement · space heater for large room / garage · air purifier for pets / smoke · video doorbell for apartments · robot mower for 1 acre | [G1][BP1] | Remplace les pages persona européennes (noindex) |
| **Sans abonnement** | video doorbell / security camera / home security system without subscription | [G1] ; « blink plus plan » n° 1 des ventes [A6] | Tableau du coût sur 3 ans, abonnement compris (prix des formules à relever chez les marques **[à vérifier]**) |
| **Problèmes (vocabulaire US)** | smoke detector chirping · beeping 3 times · blinking red · randomly going off · space heater smells like burning · portable AC not cooling | [G1] pour les détecteurs ; les autres sont des formulations de nos FAQ **[à vérifier]** | Bouton vers la catégorie (pile 10 ans, modèle câblé) |
| **« What reviewers say »** | best X consumer reports / reddit / wirecutter | [G1] | Lien vers la page CR ou RTINGS, sans copier les notes. La règle CR « no commercial use » **[à vérifier]** |
| **Coût d'usage avec calculateur** | cost to run a space heater / air fryer / dehumidifier / portable AC | EIA 18,16 ¢/kWh en août 2026, CA 29,75, TX 15,91, FL 14,99, NY 28,65, MA 30,48 [EIA] | Moyenne nationale par défaut + choix de l'État ; 1 500 W pendant 1 h = 27 ¢ au tarif moyen |
| **Hubs saisonniers** | Black Friday / Cyber Monday (URL stable), holiday gift guide kitchen, winter power outage kit, Father's Day grilling, Prime Day | [NRF] | Pages permanentes, date dans le H1, pas dans l'URL |
| **Aides publiques 2026** | « Is there still a tax credit for a heat pump / EV charger in 2026? » | 25C : posé « before December 31, 2025 » [IRS1] ; 30C : jusqu'au **30/06/2026** [IRS2] ; remises ENERGY STAR via les fournisseurs d'électricité [ES] | Écrire « expired on… », lien IRS, date de vérification |

**Nouvelles catégories /us** (absentes du catalogue, preuve de demande [G1][A1][A8][BP1]) : air fryer toaster ovens · window air conditioners · heated / electric blankets · Ninja Creami et Slushi (« frozen treat makers ») · coffee makers (drip, pods, with grinder) · power stations / « solar generators », qui remplacent « balcony solar ». P2 : HVAC and fridge water filters (« which filter fits ») [A6] ; biometric / gun safes, sujet sensible, décision de Miguel (rayon « Gun Safes & Cabinets » sur amazon.com [A6-nav]).

## 6. Sélection produits : principes et marques par catégorie

**Principes**
1. **Seulement des modèles vendus sur amazon.com en version 120 V**, avec leur référence amazon.com (et non la référence UE). Tester sur un vrai clic venu des États-Unis ce que fait Global Earning avec une référence américaine passée par amazon.fr.
2. **Des marques présentes dans les meilleures ventes US** [A1-A8] + au moins une alternative « sans abonnement » ou « budget » quand les marques d'Amazon (Ring, Blink, Amazon Basics) dominent. Ne pas exclure les marques Amazon : ce sont elles qui se vendent. Annoncer leurs abonnements.
3. **Trois gammes en dollars** : budget (≤ 100 $), milieu, premium. Elles suivent les formulations « under $X » [G1] et les fourchettes de CR (45 à 400 $ ; « many models are priced at $100 or less » pour les friteuses [CR]).
4. **Preuves américaines par modèle** : certification UL ou ETL, ENERGY STAR, AHAM Verifide, ou un test CR / RTINGS lié. Pas de note ni de nombre d'avis Amazon affiché (règle Amazon sans API).
5. **Retirer ou remplacer** : Tefal (devient **T-fal**), Moulinex, Cecotec, Xiaomi (friteuse), Thermor, Sauter, Mill, Netatmo (détecteurs EN), Nuki, Somfy, Verisure, Jeedom, Gardena, tado, Easee, Zaptec, EVBox. Chacun doit être vérifié sur amazon.com avant d'être gardé.

| Catégorie /us | Mot-clé de tête proposé | Marques et modèles qui dominent amazon.com (01/11) | Changement de tête (`category-heads/us.ts`) |
|---|---|---|---|
| Air fryers | best air fryer | Ninja AF101/AF141/AF181, DZ201/DZ950 ; Cosori TurboBlaze 6 qt, Pro 5 qt ; Chefman 4/9 qt ; Instant Vortex Plus 6 qt ; bella ; ovens Ninja FO101, Emeril 26 qt, Cuisinart [A1][BP2] | « Philips, Cosori or Xiaomi? » → « Ninja, Cosori or Chefman? » ; quarts seuls, litres en second |
| Multicookers | best instant pot / multicooker | Crock-Pot 7 qt (mijoteuse) [A9] ; Instant Pot, Ninja Foodi | Retirer Moulinex Cookeo |
| Coffee | **best coffee maker** + « with grinder » ; espresso « under $500 » | Keurig K-Express, K-Elite, BLACK+DECKER 12-cup [A9] | Tête « super-automatic » → « coffee maker » ; garder l'automatique en déclinaison |
| Robot vacuums | best robot vacuum (+ and mop, for pet hair) | roborock Q7 M5+/Qrevo, Shark AI Ultra/PowerDetect, Dreame L40/D20, iRobot Roomba 105/405, Ecovacs T90, eufy E25 [A2] ; RTINGS a acheté et testé 102 robots [RT] | Ajouter Shark et iRobot à la description |
| Cordless vacuums | best cordless vacuum for pet hair | Shark, Dyson, Bissell (duels [G1]) **[produits à relever]** | — |
| Space heaters | **best space heater** (sans « smart ») | Dreo, Amazon Basics, Lasko, GiveBest, Dr Infrared ; propane Mr. Heater [A4] | Retirer Thermor, Sauter, Mill et les convecteurs muraux ; 1 500 W / 120 V |
| Humidifiers | best humidifier for bedroom | Levoit, Dreo [A3] | — |
| Air purifiers | best air purifier for pets | Levoit Core 300 / Vital 200S-P, VOOPNU [A3] | ft² et CADR, AHAM Verifide |
| Dehumidifiers | best dehumidifier for basement | **[produits à relever]** ; déclinaison « with drain hose » [G1] | Capacité en pintes par jour **[à vérifier : unité DOE]** |
| Video doorbells | best video doorbell (without subscription) | Ring Battery Doorbell 2K, Blink Battery Doorbell 2K+ [A5] ; nos eufy E340 / Tapo D235 / Aqara G4 restent en « no subscription » | Ajouter Ring et Blink au duel et au tableau des coûts |
| Cameras | best security camera without subscription | Blink Mini 2K+, Blink Outdoor 4, Tapo C100 [A5] | — |
| Smoke & CO | **best smoke detector** (+ carbon monoxide combo, hardwired) | Kidde, First Alert SMI100 / SMCO100 / -AC, X-Sense UL 217, Kidde Smart avec Ring [A7] | Retirer Netatmo et EN 14604 / 50291 → UL 217 / UL 2034 |
| Thermostats | best smart thermostat (+ without c wire, for heat pump) | ecobee, Nest, Honeywell, Sensi (duels [G1]) **[produits à relever]** | « for Boilers », tado, Netatmo et OpenTherm → « C-wire, heat pump, room sensors », ENERGY STAR + remises [ES] |
| Smart plugs & bulbs | best smart plugs (for alexa / google home / home assistant) | Kasa EP10P4 15 A, Amazon Basics, Govee A19 E26 [A5] | Douilles E26, prises 15 A |
| Power stations | best portable power station for home backup / « solar generator » | Jackery, EcoFlow Delta 3, Anker SOLIX C1000, Bluetti [A8] | Devient le hub énergie n° 1 du /us |
| Balcony solar | (désindexer en US ou réorienter) | Utah HB 340 (2025) : appareil ≤ 1 200 W sur prise 120 V, certifié UL, sans contrat de raccordement [UT] | Retirer « 800 W » (règle européenne) ; page « Plug-in solar in the US: where it's allowed », État par État **[à vérifier hors Utah]** |
| EV chargers | best level 2 ev charger for home | **[produits à relever]** ; retirer Easee, Zaptec, EVBox | Retirer toute mention de crédit d'impôt après le 30/06/2026 [IRS2] |
| Robot mowers | best robot lawn mower (for 1 acre, without perimeter wire) | **[produits à relever]** | Surfaces en acres |
| Pool robots | best robotic pool cleaner (above ground / inground) | **[produits à relever]** | — |

## 7. Unités, tension et signaux de confiance

| Sujet | Écrire sur /us | Preuve |
|---|---|---|
| Capacité de cuisson | **quarts (qt)** d'abord, litres seulement en second | listes et titres amazon.com [A1][BP2] ; CR sépare petits et grands modèles à 5 quarts [CR] |
| Températures | **°F** d'abord (« 90°-450°F ») | [A1] |
| Surface | **sq ft** (« up to 1875 ft² ») ; acres pour le jardin | [A3][G1] |
| Chauffage, clim | **watts + BTU** (« 9,000 BTU ») ; 1 500 W, 120 V, 12,5 A | [A4] ; notre FAQ US le dit déjà |
| Électricité | 120 V, prise standard ; **15 A** pour les prises connectées ; culot **E26** et forme **A19** pour les ampoules | [A5][UT] |
| Énergie stockée | Wh et W en sortie AC (« 1,070Wh, 1500W AC ») | [A8] |
| Coût d'usage | ¢/kWh **EIA** (18,16 ¢, août 2026) + exemples par État | [EIA] |
| Sécurité électrique | « **UL** » ou « ETL listed » ; UL 217 (fumée), UL 2034 (CO), UL 1741 (onduleurs solaires) | [A7][UT] ; ETL **[à vérifier par modèle]** |
| Efficacité | **ENERGY STAR certified** + remises des fournisseurs d'électricité | [ES] |
| Purificateurs | **AHAM Verifide** (CADR) | [A3] |
| Garantie | garantie du fabricant en années (pas de « garantie légale UE de 2 ans ») | correction de [HN1] |
| Rappels | lien vers la page de rappels de la CPSC dans les pages chauffage et batterie | « space heater recall 2026 » [G1] ; URL CPSC **[à vérifier]** |

## 8. Libellés de boutons

- Aujourd'hui, /us mélange **« View on Amazon »** (accueil, guides), **« Check price on Amazon »** (pages catégorie, `buyCtaLabel`) et « Amazon » seul [HN]. bestpick.com utilise « View price → » [BP2].
- **Proposition** : un seul libellé par défaut, **« Check price on Amazon »**. La page ne peut pas afficher de prix (règle Amazon) et le lecteur américain cherche un prix (« under $X » partout [G1]). Le bouton promet ce que la page ne donne pas. Libellé secondaire pour les duels : « See [modèle] on Amazon ».
- **Test A/B** sur `/api/click` (position + variante) : « Check price on Amazon » contre « See today's price on Amazon », sur 4 semaines. Ne pas utiliser « Buy now » seul, qui ne vaut pas mention d'affiliation selon la FTC [FTC].
- **Mention d'affiliation au plus près du 1er bouton**. Exemple : « We earn a commission if you buy through these links », en plus de la phrase Amazon exacte, déjà en place. La FTC juge que les mentions en haut ou en bas de page passent souvent inaperçues : « The closer the disclosure is to your recommendation, the better » [FTC].

## 9. Pages de confiance pour l'édition US

1. **Auteur** : « Emily Carter » est un nom de plume assumé, avec Miguel Marie responsable. Rester transparent [HN-auteur]. Mieux : un vrai contributeur américain ou Miguel en responsable visible. Ne jamais attribuer au nom de plume des diplômes, des années d'expérience ou des essais (« You can't talk about your experience with a product if you haven't tried it » [FTC]).
2. **« How we compare (US edition) »** : sources par catégorie, avec date et lien : Consumer Reports (guides d'achat, ex. friteuses mis à jour le 25/09/2026 [CR]), RTINGS (« 102 robot vacuums bought and tested » [RT]), ENERGY STAR [ES], les certifications UL, AHAM Verifide, EIA [EIA], les notices des fabricants. Garder « We don't test products ourselves ».
3. **Module « What independent testers found »** sur les catégories /us : étendre `INDEPENDENT_SOURCES` et `TESTER_HOSTS` à `us`, avec consumerreports.org, rtings.com et energystar.gov. Les pages sont liées, pas leurs notes (même règle que pour `de`).
4. **Honnêteté sur l'origine** : remplacer « HOME NURA EUROPE » par « Home Nura », et dire une fois « Independent guide published in France for US shoppers; models checked on amazon.com on [date] ». Ne pas cacher qu'on est en Europe, mais ne pas en faire l'argument.
5. **Confidentialité US** : retirer le RGPD comme argument produit dans les intros ; la politique de confidentialité garde ses obligations réelles. Une mention CCPA du type « We don't sell or share personal information » doit être validée **[à vérifier, juriste]**.

## 10. Liste priorisée pour l'équipe technique (impact × effort)

### Cette semaine (avant le Black Friday du 27/11)

| # | Changement | Fichiers | Impact | Effort |
|---|---|---|---|---|
| 1 | Intro US des pages catégorie sans UE / RGPD : « annual cost to run at the US average rate, ENERGY STAR and UL listings, subscription costs, replacement parts and Matter support » + test bloquant (pas de « EU », « GDPR », « EN 14604 », « €» dans `us`) | `lib/catalog/content.ts:126`, test de copie | Fort (47 pages) | S |
| 2 | Accueil /us : supprimer le chapitre France, corriger les modèles du guide rapide et de la FAQ (Tefal, Cecotec, Moulinex, garantie UE, « European market », « Belgian-style »), aligner numéros et notes du top 3, pied de page « Home Nura » | `dictionaries/us.json`, `app/[lang]/page.tsx`, `components/ui/SiteFooter.tsx:177` | Fort | S |
| 3 | **Catalogue US** : références amazon.com par marché (un champ `asinByMarket.us`) pour friteuses, robots aspirateurs, chauffages, humidificateurs et purificateurs, sonnettes et caméras, détecteurs ; modèles du § 6 ; test sur un vrai clic venu des États-Unis du comportement de Global Earning | `lib/products.ts`, `lib/amazon.ts`, picks des catégories, `AMAZON_MISSING_ASINS` | Très fort (conversion) | M |
| 4 | Têtes de catégorie US corrigées : friteuses (Ninja, Cosori, Chefman), café (« best coffee maker »), chauffages (« best space heater », marques US), détecteurs (UL, Kidde, First Alert, X-Sense), thermostats (C-wire, heat pump, ecobee, Nest), bornes (sans Easee ni Zaptec), solaire (désindexer ou réorienter) | `lib/catalog/category-heads/us.ts` + test | Fort | S-M |
| 5 | Coût d'usage : 20 ¢ « exemple » → EIA 18,16 ¢ (août 2026) avec date et lien ; corriger « 110 sq ft » | `us.json`, FAQ catégories `us` | Moyen | S |
| 6 | Page Black Friday /us avec les rayons américains : chauffages et humidificateurs, robots aspirateurs, friteuses et fours, Ring et Blink contre « no subscription », power stations, Ninja Creami et Slushi ; dates 27-30/11 | `lib/black-friday/config.ts` (variante `us`) | Fort (saison) | M |
| 7 | Bouton unique « Check price on Amazon » + mention d'affiliation près du 1er bouton | `dictionaries/us.json` (`buy_button`), `AffiliateLink` | Moyen | S |
| 8 | Menu : « Smart home » sans destination à corriger ; libellés de rubrique US (« Heating, Cooling & Air Quality », « Yard & Outdoor ») | `components/Navbar.tsx`, `meta-silos` (titre `us`) | Moyen | S |

### P1 : 2 à 4 semaines

1. Accueil /us « shop by need » + bandeau saisonnier (§ 4). Gabarit propre à `us`.
2. 8 duels US (§ 5), dans l'ordre : ninja vs cosori, ring vs blink, roborock vs roomba, shark vs dyson, ecobee vs nest, cosori vs instant pot, window vs portable AC (avant mai), generator vs power station.
3. 10 pages par usage ou budget à ≥ 5 produits : air fryer under $100, robot vacuum for pet hair, robot vacuum under $300, dehumidifier for basement, space heater for large room, air purifier for pets, video doorbell without subscription, security camera without subscription, smoke detector hardwired, portable power station for home backup.
4. Pages problème « smoke detector chirping / beeping 3 times / blinking red » avec un lien vers la catégorie.
5. Module sources US (CR, RTINGS, ENERGY STAR) et page « How we compare (US edition) ».
6. Nouvelles catégories : air fryer toaster ovens, coffee makers, heated blankets, window ACs (avant avril), frozen treat makers (Creami, Slushi).
7. Calculateur de coût d'usage avec choix de l'État (EIA).

### P2 : 1 à 3 mois

1. Si les clics US convertissent mal via Global Earning : **compte Partenaires amazon.com** avec des liens directs (décision de Miguel).
2. Plusieurs marchands américains (Walmart, Best Buy, Home Depot, Target) via leurs réseaux d'affiliation **[à vérifier : programmes et taux]**.
3. Guides consommables : filtres de chaudière MERV et filtres à eau de frigo (« which filter fits my… ») [A6].
4. Calendrier : Presidents' Day, Memorial Day, Father's Day (grills), Prime Day, Labor Day.

## 11. Ce que seul Miguel peut faire

1. Faire un vrai clic depuis les États-Unis (VPN) sur 3 liens /us (une référence UE et une référence US), puis noter la page d'arrivée amazon.com et la présence de `homaviseus-21` dans les rapports.
2. Choisir : garder le nom de plume ou nommer un vrai responsable US (ou recruter un contributeur).
3. Décider pour les catégories sensibles (coffres pour armes) et pour le compte amazon.com direct.
4. Faire valider par un juriste la mention de confidentialité US (CCPA).

## 12. Mesure

- Search Console, filtre **pays = États-Unis**, répertoire `/us/` : clics, CTR, position chaque lundi. Point de départ : 4 479 impressions et 8 clics (pages /en, 28 j au 28/10) [GSC].
- Rapports Amazon par ID de suivi `homaviseus-21` : clics, articles commandés, conversion.
- `/api/click` : emplacement + variante de bouton (test A/B du § 8).
- Jalon proposé (estimation) : CTR /us ≥ 1 % sur les 20 premières pages en 6 semaines ; 1re vente US attribuée avant le Cyber Monday (30/11).

---

## Sources (lues le 01/11/2026 sauf mention)

- [A1] Amazon.com Best Sellers, Fryers : https://www.amazon.com/Best-Sellers-Home-Kitchen-Fryers/zgbs/home-garden/17659095011
- [A2] Amazon.com Best Sellers, Robotic Vacuums : https://www.amazon.com/Best-Sellers-Home-Kitchen-Robotic-Vacuums/zgbs/home-garden/3743561
- [A3] Amazon.com Best Sellers, Heating, Cooling & Air Quality : https://www.amazon.com/Best-Sellers-Home-Kitchen-Heating-Cooling-Air-Quality/zgbs/home-garden/3206324011
- [A4] Amazon.com Best Sellers, Indoor Space Heaters : https://www.amazon.com/Best-Sellers-Home-Kitchen-Indoor-Space-Heaters/zgbs/home-garden/510182
- [A5] Amazon.com Best Sellers, Smart Home : https://www.amazon.com/gp/bestsellers/smart-home/
- [A6] Amazon.com Best Sellers, Tools & Home Improvement : https://www.amazon.com/Best-Sellers-Tools-Home-Improvement/zgbs/hi · [A6-nav] Safety & Security : https://www.amazon.com/Best-Sellers-Tools-Home-Improvement-Safety-Security/zgbs/hi/3180231
- [A7] Amazon.com Best Sellers, Fire Safety : https://www.amazon.com/Best-Sellers-Tools-Home-Improvement-Fire-Safety/zgbs/hi/486547011
- [A8] Amazon.com Best Sellers, Generators & Portable Power : https://www.amazon.com/Best-Sellers-Patio-Lawn-Garden-Outdoor-Generators-Portable-Power/zgbs/lawn-garden/552808
- [A9] Amazon.com Best Sellers, Kitchen Small Appliances : https://www.amazon.com/Best-Sellers-Kitchen-Dining-Kitchen-Small-Appliances/zgbs/kitchen/289913/
- [G1] Suggestions Google États-Unis (gl=us, hl=en), 60 requêtes de départ : https://suggestqueries.google.com/complete/search?client=firefox&gl=us&hl=en&q=best+air+fryer (et suivantes). Relevé brut : /private/tmp/claude-501/-Users-miguelserenite-Desktop/bbc95dd3-ec06-4132-9771-22a8cbfe1172/scratchpad/us-data/autocomplete-us.txt
- [CR] Consumer Reports, Air Fryer Buying Guide (mis à jour le 25/09/2026) : https://www.consumerreports.org/appliances/air-fryers/buying-guide/
- [RT] RTINGS, The 4 Best Robot Vacuums of 2026 : https://www.rtings.com/vacuum/reviews/best/robot
- [ES] ENERGY STAR, Smart Thermostats : https://www.energystar.gov/products/smart_thermostats
- [EIA] EIA, Electric Power Monthly, tableau 5.6.A (août 2026, publié le 23/10/2026) : https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a
- [IRS1] IRS, Energy Efficient Home Improvement Credit (25C) : https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit
- [IRS2] IRS, Alternative Fuel Vehicle Refueling Property Credit (30C), page mise à jour le 26/05/2026 : https://www.irs.gov/credits-deductions/alternative-fuel-vehicle-refueling-property-credit
- [UT] Utah H.B. 340 « Solar Power Amendments », 2025, texte adopté : https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf
- [FTC] FTC, « FTC's Endorsement Guides: What People Are Asking » : https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides
- [NRF] NRF, Winter Holidays data and trends : https://nrf.com/research-insights/holiday-data-and-trends/winter-holidays
- [BP1] bestpick.com, accueil (VGL Publishing AG) : https://www.bestpick.com/ · [BP2] bestpick.com, Best air fryers 2026 (mis à jour le 27/10/2026) : https://www.bestpick.com/air-fryer/
- [HN] homenura.com/us : [HN1] https://homenura.com/us · https://homenura.com/us/guides/airfryers · https://homenura.com/us/comparateur · https://homenura.com/us/securite-maison/sonnettes-video · https://homenura.com/us/confort-air/chauffages-appoint · https://homenura.com/us/securite-maison/detecteurs-fumee-co · [HN-auteur] https://homenura.com/us/auteur
- [GSC] Search Console, 28 j au 28/10/2026 : docs/croissance/seo-etudes/gsc-2026-10-30.md
- Code lu (branche de hn-wt-usca, merge #65) : `lib/catalog/categories.ts`, `lib/catalog/content.ts`, `lib/catalog/category-heads/us.ts`, `lib/catalog/category-guides.ts`, `lib/catalog/independent-sources.ts`, `lib/amazon.ts`, `lib/affiliate-disclosure.ts`, `lib/products.ts`, `app/[lang]/page.tsx`, `app/[lang]/[silo]/[category]/page.tsx`, `dictionaries/us.json`, `components/ui/SiteFooter.tsx`
