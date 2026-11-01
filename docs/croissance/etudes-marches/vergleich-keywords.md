# vergleich.org — démontage des mots-clés, des catégories, des pages et des parcours (1er novembre 2026)

Objet : comprendre **comment vergleich.org choisit ses mots-clés, fabrique ses pages et guide ses lecteurs**, pour décider ce qu'Homenura copie, adapte ou contre. Demande de Miguel : « étudie aussi les catégories, les mots-clés et les parcours de Vergleich.org pour adapter Homenura », en s'appuyant sur des sources locales.
Cette étude **complète** sans les refaire : `STRATEGIE-2026-10.md` § 7–8, `SEO-PLAN-2026-10.md`, `seo-etudes/dach.md` § 3 (gabarit, sitemap, droit « Test », 30/10) et les études pays du 01/11 (`studies/de.md` § 5, `fr.md` § 5.2, `it.md` § 5.2, `es.md` § 5.2, `ca.md` § 5.2). Aucun fichier du dépôt modifié.

**Ce qui est nouveau ici** : (1) les comptes de Team Internet, propriétaire de vergleich.org (rapport annuel 2025 et semestre 2026, sources primaires) ; (2) une classification **complète** des 18 797 URL du sitemap par famille de mots-clés ; (3) la lecture du code de **50 pages** ciblées et d'un **échantillon systématique de 120 pages** (titres, H1, méta, dates, auteurs, blocs, données structurées, recouvrement entre pages sœurs) ; (4) la méthode de classement déclarée ; (5) la comparaison point par point avec ce qu'Homenura publie aujourd'hui (code du dépôt).

**Légende** : [M] mesuré par moi le 01/11/2026 ; [T] document de Team Internet ; [I] document interne Homenura (qui cite ses propres sources locales) ; [E] estimation ; [H] hypothèse. Liste des sources en fin de fichier.

**Limites** : le budget de recherche web partagé était épuisé au début de cette étude : aucune nouvelle requête Google, aucun Sistrix ni Semrush, aucune nouvelle mesure Google Trends. Les données de demande allemandes viennent des mesures locales déjà faites (Google Suggest DE et SERP Google.de du 30/10 dans `dach.md` ; Google Trends DE/AT/CH du 01/11 dans `studies/de.md`). Les pages vergleich.org ont été lues dans le navigateur intégré, sur un onglet déjà ouvert sur le site, par des requêtes de même origine à faible débit (≈ 230 pages) ; aucune protection n'a été contournée. Les volumes de recherche restent **non mesurés**.

---

## 0. L'essentiel en 10 lignes

1. **vergleich.org est d'abord une machine à acheter du trafic** : Team Internet décrit lui-même un modèle « SEA-first » (la publicité sur les moteurs d'abord) et paie 44 M$ de coût des ventes pour 65,3 M$ de chiffre d'affaires brut en 2025 [T1]. Il reste 20,8 M$ de revenu net, soit ≈ 123 $ pour 1 000 sessions [M, calcul sur T1].
2. **Ses pages sont pré-fabriquées par l'IA** : le groupe dit construire à l'avance ses pages comparatives avec l'IA et viser la longue traîne « à faible coût de production » [T1][T2].
3. **95 % des pages suivent un seul gabarit** : H1 « X Vergleich 2026 », titre « X Test & Vergleich » Top N im November 2026 », méta qui commence par « llll➤ » [M, 114 H1 sur 120].
4. **39 % des 18 797 URL sont des déclinaisons** d'une page existante : marque, capacité, puissance, usage, « mit / ohne », budget. On compte 2 104 grappes, dont 57 de plus de 20 pages [M].
5. **Leur protection contre le contenu mince** : chaque déclinaison a son propre jeu de produits (0 à 2 produits balisés en commun avec la page mère ou une page sœur), 82 à 91 % de phrases propres et ≈ 5 700 mots [M].
6. **Le classement n'est pas éditorial** : il pèse le taux de clic, les avis des marchands et le prix des boutiques liées [M, page « Wie wir arbeiten »]. Le badge « Vergleichssieger » en découle.
7. **Le mot « Test »** figure dans le titre de ≈ 96 % des pages de l'échantillon (115 sur 120), alors qu'environ 1 % seulement sont des tests en laboratoire [M, échantillon ; E]. C'est une zone de risque juridique en Allemagne (UWG) [I1].
8. **Les trous sont exactement nos points forts** : 2 pages « vs », 2 pages « Probleme », 0 « Erfahrungen » sur 18 797 [M]. Il manque aussi les pages de tête Airfryer, Saugroboter, Smart Lock, Video-Türklingel, Stromspeicher, Thermomix et mobile Klimaanlage [M].
9. **Le contenu vieillit** : 117 pages de l'échantillon sur 120 ont été publiées entre 2020 et 2023 [M]. La fraîcheur affichée est en grande partie automatique : mois dans le titre, prix du jour.
10. **Le réseau hors DACH est faible** : il traduit le gabarit allemand (« test o confronto », « Prueba y comparativa », « test or comparison »). Le hors-DACH pèse 5,2 % du volume d'affaires au 1er semestre 2026 [T2][I3–I6].

**Les 5 tactiques à copier ou contrer en premier** : voir § 13.

---

## 1. Qui est vergleich.org en 2026 (sources primaires)

| Indicateur | Valeur | Source |
|---|---|---|
| Propriétaire | Team Internet Group plc (ex-CentralNic), segment « Comparison » = VGL Publishing AG et ses sites | [T1] note segments ; [T3] |
| Chiffre d'affaires brut 2025 | 65,3 M$ (+4 %) ; 2024 : 63,0 M$ | [T1] |
| Revenu net 2025 | 20,8 M$ (−7 %) ; EBITDA ajusté 12,3 M$ (−24 %) | [T1] |
| Coût des ventes du segment 2025 | 44 M$ (≈ 67 % du brut ; part liée à l'achat de trafic non détaillée [H]) | [T1] schéma des revenus |
| Sessions 2025 | 169,4 M (−10 % ; 2024 : 188,5 M), soit ≈ 14 M/mois en moyenne [calcul] | [T1] |
| Revenu brut / 1 000 sessions | 257 $ (2024 : 249 $) | [T1] |
| Catalogue déclaré | > 367 500 fiches produit dans > 18 500 catégories comparatives | [T1] |
| Marchands cités | Amazon, eBay, OTTO, billiger.de | [T1] |
| Part hors DACH du volume d'affaires | 4,8 % en 2025 (0,4 % en 2024), 5,2 % au 1er semestre 2026 | [T1][T2] |
| International | France rentable en 2025 et plus grosse que tous les autres marchés internationaux réunis ; Italie et Espagne proches de l'équilibre ; Royaume-Uni lancé | [T1] lettre du directeur général |
| 1er semestre 2026 | brut 32,9 M$ (+18 %), net 12,4 M$ (+38 %), EBITDA 8,4 M$ (+56 %) | [T2] |
| Nouveaux canaux | fiches produit en 1re ligne de Google Shopping ; « nouveaux tunnels de conversion » ; social | [T1][T2] |
| Paiement | à la vente chez le marchand (commission), pas au clic | [T2] |
| Trafic estimé par un tiers | ≈ 4,7 M visites en sept. 2026, 49 % via la recherche payante (Similarweb, ordinateur, **estimation**) ; écart fort avec les 14 M sessions/mois déclarées | [I1] S5 |

**Lecture pour Homenura** : vergleich.org n'est pas un modèle « SEO pur ». Selon ses propres comptes, la dépendance au trafic naturel « freine » l'usage de l'IA ; le groupe a donc choisi la publicité d'abord [T1]. Son avantage tient au **capital** (achat de mots-clés) et à l'**industrialisation**, pas à l'autorité éditoriale. Homenura ne peut pas acheter ce trafic : il doit gagner là où le payant est cher ou absent (duels, pannes, questions, pays où le réseau VGL est faible).

---

## 2. Catégories : l'arborescence et la fabrique de pages

### 2.1 Taille et forme [M, sitemap]
- **18 797 URL** : 18 730 à plat (`/heissluftfritteuse/`) + 67 pages auteur (`/autor/…`). Aucune page « Themenwelten » dans le sitemap.
- Slugs à 1 mot : 7 719 (41 %) ; à 2 mots : 8 036 (43 %) ; à 3 mots et plus : 2 975 (16 %).
- 12 rubriques (Auto & Motor, Baumarkt, Drogerie, Elektronik, Finanzen, Freizeit & Sport, Haushalt, Kind & Baby, Lebensmittel, Mode, Service, Wohnen) → **groupes** (ex. « Frittieren », « Luftreiniger & Viren-Ionisatoren ») → pages comparatives [I2][M].
- Les pages groupe sont des listes A–Z (≈ 800 mots, 60–120 liens). Certaines sont **indexées** (`/frittieren/`), d'autres en **noindex** (`/luftreiniger-viren-ionisatoren/`) : la valeur SEO est portée par les pages produit, pas par les hubs [M].
- **Pas de rubrique Smart Home** : thermostats, détecteurs, serrures, caméras et prises sont dispersés dans « Baumarkt » et « Wohnen » [I2].

### 2.2 Les grappes de déclinaisons [M]
Méthode : une URL est une déclinaison si elle contient, au début ou à la fin, le slug d'une autre page existante (`philips-heissluftfritteuse`, `heissluftfritteuse-12-liter`).

| Mesure | Valeur |
|---|---|
| Déclinaisons « préfixe » (marque, adjectif : `bosch-…`, `mini-…`, `akku-…`) | 4 446 |
| Déclinaisons « suffixe » (`…-mit-…`, `…-12-liter`, `…-bis-300-euro`) | 3 286 |
| Total des déclinaisons (sans double compte) | **7 299, soit 39 % du site** |
| Pages mères ayant au moins une déclinaison | 2 104 |
| … dont 1 déclinaison / 2–4 / 5–9 / 10–19 / 20 et plus | 951 / 763 / 230 / 103 / 57 |
| Plus grosses grappes | shampoo 119, tee 71, auto 67, fahrrad 61, lautsprecher 58, monitor 58… ; maison : kuehlschrank 35, waschmaschine 33, wasserkocher 33, mikrowelle 31, gasgrill 28 |

### 2.3 Couverture des catégories d'Homenura (Allemagne) [M]
Nombre de déclinaisons rattachées à la page de tête de vergleich.org. « 0 » = la page existe sans déclinaison ; « absent » = aucune page de tête.

| Catégorie Homenura | Page de tête vergleich.org | Décl. | Exemples de déclinaisons | Lecture |
|---|---|---|---|---|
| airfryers | heissluftfritteuse | 11 | 2-faecher, 7/12-liter, xxl, klein, mit-drehkorb, mit-grillfunktion, fuer-4-personen, Philips/Tefal/Klarstein | **aucune page /airfryer/ ni Ninja/Cosori** (or « Airfryer » pèse 3,3 fois « Heißluftfritteuse » sur Trends DE [I2]) |
| cafetieres | kaffeevollautomat | 18 | bis-300/400/500-euro, mit-app, mit-milchbehaelter, 7 marques, pastilles de détartrage | grappe la plus complète de nos sujets |
| aspirateurs-robots | staubsauger-roboter | 1 | + pages marque (roborock, ecovacs, eufy, samsung, medion, zaco, lefant, rowenta), guenstiger-saugroboter | **pas de /saugroboter/** ; pas de Dreame (seulement `dreame-staubsauger`) |
| aspirateurs-laveurs | saug-wisch-roboter | 0 | — | page de tête refaite en 2025, aucune déclinaison |
| aspirateurs-balais | akku-staubsauger | 8 | 6 marques, tierhaare | pas de Wischsauger [I2] |
| deshumidificateurs | luftentfeuchter | 7 | granulat, mini, 4 marques | |
| purificateurs-air | luftreiniger | 12 | hepa, uvc, viren, buero, raucherraum, 4 marques | |
| chauffages-appoint | heizluefter + infrarotheizung | 16 + 12 | 500/2000/3000 Watt, bad, keramik, 300 à 1 200 Watt | grappe « puissance » très dense |
| climatiseurs-mobiles | mobile-klimageraete, mobile-split-klimaanlage | 0 | split-klimaanlage, 9 000/12 000 BTU, midea | **pas de « mobile Klimaanlage »** (+219 % sur Trends DE [I2]) |
| thermostats | heizkoerperthermostat, raumthermostat | 1 + 2 | smart-home-heizkoerperthermostat, raumthermostat-wlan | pas de « ohne Hub / ohne Abo » |
| serrures-connectees | smartes-tuerschloss | 0 | — | pas de « Smart Lock », pas de Nuki (Trends +63 % [I2]) |
| sonnettes-video | wlan-tuerklingel | 0 | ring-, eufy-, arlo-tuerklingel | pas de « Video-Türklingel », pas de « ohne Abo » |
| cameras-interieur / exterieur | ueberwachungskamera | 8 | innen, solar, gsm, mit-monitor, set, abus, reolink | pas de « außen » ni de « ohne Abo » |
| detecteurs-fumee-co | rauchmelder | 10 | smart-home, funk, set, ohne-led, magnethalter, x-sense, abus | + co-melder, rauch-und-co-melder |
| prises-connectees | wlan-steckdose | 1 | aussen | pas de « mit Strommessung » |
| compteurs-energie | energiemessgeraet | 0 | stromzaehler | |
| solaire-balcon | balkonkraftwerk | 0 | — | **page unique** ; pas de « mit Speicher » |
| batteries-domestiques | absent | — | solarspeicher, powerstation (1) | pas de « Stromspeicher » |
| bornes-recharge-ve | wallbox | 3 | mobile, 11 kW, 22 kW | |
| tondeuses-robots | maehroboter | 6 | ohne-begrenzungskabel, garage, 3 marques, « Entscheidung » | + l'article « Die häufigsten Probleme mit Mährobotern » |
| robots-piscine | poolroboter | 3 | akku, wand-und-boden, dolphin | |
| laveurs-vitres | fensterputzroboter | 0 | — | pourtant son 1er mot-clé naturel selon Similarweb [I1] |
| nettoyeurs-vapeur | dampfreiniger | 2 | kärcher, black-und-decker | |
| fers-centrales-vapeur | dampfbuegelstation | 4 | 3 marques, bügelbrett | |
| lave-vaisselle / lave-linge | geschirrspueler / waschmaschine | 24 / 33 | largeur (45, 55, 60 cm), kg, intégrable, marques, bis-X-euro | grappes « gros électroménager » les plus denses |
| frigos-connectes | kuehlschrank | 35 | litres, largeur, marques, sans congélateur, bis-200-euro | |
| micro-ondes | mikrowelle | 31 | litres, watts, unter-100-euro, marques | |
| robots-multifonctions | kuechenmaschine | 6 | mit-kochfunktion, 4 marques | **pas de Thermomix ni de Monsieur Cuisine** |
| multicuiseurs | multikocher | 0 | schnellkochtopf (6 tailles) | |
| thermometres-viande | absent | — | grillthermometer (4 : funk, bluetooth, inkbird, weber) | |
| sous-vide | absent | — | sous-vide-stick, vakuumierer (4) | |
| hubs-domotique | smart-home-zentrale | 0 | — | |
| alarmes | alarmanlagen | — | funk-, mit-kamera, attrappe, « beratung » | |
| barbecues-connectes | gasgrill / elektrogrill | 28 / 6 | 2 à 6 brûleurs, balkon, bis-150 à 500-euro, marques | la grappe « budget » la plus complète du site |
| stations-meteo | wetterstation | 9 | wlan, 3 aussensensoren, marques | |
| ventilateurs / humidificateurs | ventilator / luftbefeuchter | 12 / 8 | ohne-rotor, leiser ; verdunster, ultraschall, fuer-grosse-raeume | |

**Conclusion** : vergleich.org est fort sur l'électroménager « classique » (gros appareils, chauffage, micro-ondes, barbecue). Il est **mince sur la maison connectée et les catégories en croissance** : serrures, sonnettes, Balkonkraftwerk, Saug-Wisch-Roboter et laveurs de vitres n'ont aucune déclinaison ; la tête Airfryer, Saugroboter et mobile Klimaanlage manque. Ce sont les catégories qui montent sur Google Trends DE [I2].

---

## 3. Familles de mots-clés ciblées

Comptes sur les 18 730 slugs à plat [M] ; demande locale d'après Google Suggest DE (30/10) et Google Trends DE (01/11) [I1][I2].

| Famille | Où vergleich.org la place | Pages (slug) | Exemples réels | Demande locale observée | Lecture Homenura |
|---|---|---|---|---|---|
| **« X Test »** | titre et méta de presque toutes les pages, H1 des seules pages testées | 1 slug | titre « Heißluftfritteuse Test 2026 – Gesund knusprig genießen » | « test / testsieger / stiftung warentest » est le 1er modificateur dans Suggest et dans Trends pour 7 termes sur 28 [I1][I2] | interdit pour nous (pas de test) → citer les tests tiers, datés |
| **« X Vergleich »** | H1 de 95 % des pages (« X Vergleich 2026 ») | — | « Luftreiniger Vergleich 2026 » | « vergleich » n'apparaît que 2 fois dans les suggestions d'≈ 20 catégories [I1] | notre mot de titre, faute de mieux ; insuffisant seul |
| **« beste X » / « die besten »** | H2 « Die besten X im Vergleich. » + « Top N » dans le titre | 5 slugs | « Die besten Rasenroboter im Vergleich. » | « beste » rarement suggéré [I1] | porter « beste » dans le H2, pas dans l'URL |
| **Marque + produit** | slug préfixe | non compté exactement ; ≥ 188 pour 20 marques testées [I1] | préfixes les plus fréquents : bosch- 49, philips- 30, makita- 29, einhell- 20, samsung- 19, abus- 17, klarstein- 16, aeg- 14, tefal- 13, siemens- 13 | les marques reviennent dans toutes les suggestions (Ninja, Cosori, Roborock, Dreame…) [I1] | pages marque **là où il n'y en a pas** : Ninja, Cosori, Dreame, Nuki, tado |
| **« X mit Y »** (fonction) | slug suffixe | 359 | kaffeevollautomat-mit-app, heissluftfritteuse-mit-drehkorb | « mit Speicher », « mit Wischfunktion », « mit Strommessung » [I1] | oui, sur fonctions réellement cherchées |
| **« X ohne Y »** | slug suffixe | 64 | maehroboter-ohne-begrenzungskabel, rauchmelder-ohne-led | « ohne Abo », « ohne Abluftschlauch », « ohne Hub », « ohne PFAS » [I1] | **notre meilleure famille** : vergleich.org n'a aucun « ohne Abo » |
| **« X für Y »** (usage) | slug suffixe | 103 | heissluftfritteuse-fuer-4-personen, luftbefeuchter-fuer-grosse-raeume | « für 2 Personen », « für Allergiker », « Keller » [I1] | oui, avec ≥ 5 produits distincts |
| **Capacité / puissance / taille** | slug suffixe | 483 | heissluftfritteuse-12-liter, heizluefter-2000-watt, wallbox-11kw | « bis 5 Liter », « 800 Watt », « 2000 Watt » [I1] | sélectif (Balkonkraftwerk 800/2 000 W) |
| **« bis / unter X Euro »** | slug suffixe | 63 + 16 | kaffeevollautomat-bis-300-euro, gasgrill-bis-300-euro, mikrowelle-unter-100-euro | « bis 200/300/500 € » pour Saugroboter, Kaffeevollautomat, Akku-Staubsauger [I1] | oui, sans prix de modèle tant que l'API Amazon n'est pas active |
| **klein / mini / XXL / günstig** | préfixe ou suffixe | 93 + 38 + 3 | heissluftfritteuse-klein, mini-heizluefter, guenstiger-saugroboter | | ponctuel |
| **Accessoires et consommables** | slug | 34 « zubehoer » + pastilles, filtres | entkalkungstabletten-kaffeevollautomat | | faible priorité (commission basse [H]) |
| **« X vs Y » / « oder »** | slug | **2** | laptop-vs-tablet…, rasenmaeher-vs-maehroboter… | « Ninja oder Cosori », « Ecovacs oder Roborock » en PAA [I1] ; « dreame oder roborock » [I2] | **trou béant** = notre 1er format en clics |
| **« Probleme / Fehler »** | slug | **2** | die-haeufigsten-probleme-mit-maehrobotern | « piept », « blinkt rot », « Brühgruppe klemmt », « Probleme » [I1] | **trou béant** = notre 2e format en clics |
| **« Erfahrungen »** | slug | **0** | — | « erfahrungen » fréquent [I1] | ne pas inventer d'expérience ; synthèse d'avis sourcée seulement |
| **Ratgeber / études** | slug long | ≈ 150 slugs de 5 mots et plus, surtout des coques de téléphone | stromausfall-vorbereitung (sondage), anzuendkamin-richtig-verwenden | | études de données pour la presse : oui |

---

## 4. Titres, H1 et méta : les formules réelles

### 4.1 Deux gabarits [M]
| Élément | Gabarit « Test » (pages refaites en 2025, ≈ 1 % des pages [E]) | Gabarit « Vergleich » (≈ 95 % des pages) |
|---|---|---|
| `<title>` | « X Test 2026 – accroche » : « Kaffeevollautomat Test 2026 – Für Espresso, Cappuccino & Co. » | 5 variantes : « X Test & Vergleich » Top N im November 2026 » (74 sur 120) ; « X: Top 10 Test & Vergleich » (21) ; « Top 10 X Test & Vergleich » (8) ; « X Test & Vergleich: Top 10 » (8) |
| H1 | « X Test 2026 » | « X Vergleich 2026 » (114 sur 120) |
| H2 d'ouverture | « Die besten Airfryer im Vergleich. » (synonyme) | « Die besten [synonyme] im Vergleich. » : « Die besten Schnellheizer im Überblick. », « Die besten Wandladegeräte… » |
| Méta | rédigée, sans gadget : « Informieren Sie sich jetzt: … überzeugten im Test durch … » | gabarit : « llll➤ Aktueller und unabhängiger X Test bzw. Vergleich 2026 inkl. ✓ Vergleichssieger, ✓ Preis-Leistungs-Sieger… » |
| Autres H2 | Vergleichstabelle · Testberichte · Kaufberatung | « Wählen Sie Ihren persönlichen Testsieger aus der Bestenliste » · Kaufberatung · Zusammenfassung · « Ausverkaufte X: Empfehlenswert und bald wieder verfügbar » |

### 4.2 Ce que ces formules révèlent
- **Le synonyme dans le H2** fait couvrir 2 mots-clés par page (Heizlüfter/Schnellheizer, Wallbox/Wandladegerät, Luftreiniger/Luftreinigungsgerät, Saug-Wisch-Roboter/Saugroboter mit Wischfunktion) [M].
- **Le mois dans le titre** (« im November 2026 ») change tout seul le 1er du mois. Sur `/luftreiniger/`, le titre dit « November 2026 » le 01/11 alors que `dateModified` est le 02/10/2026 [M]. C'est une fraîcheur d'affichage, pas de contenu.
- **« Top N »** : N = nombre de produits du tableau (6 à 10 dans 65 pages de l'échantillon, 11 à 20 dans 40, ≤ 5 dans 5) [M]. Une page « Pinolino-Laufrad » affiche « Top 2 » : des pages très minces subsistent.
- **« llll➤ » et ✓** dans la méta : gadget pour le taux de clic, gardé sur les anciennes pages, **abandonné sur les pages refaites en 2025** [M]. Signal : le site lui-même s'en éloigne sur ses pages qui rapportent.
- **Fautes de gabarit** : « Die besten günstiger Saugroboter », « günstiger Saugroboter-Kaufberatung » [M]. C'est le signe d'un remplissage automatique.

### 4.3 Formules à adopter chez Homenura (sans « Test »)
- DE, titre : « {Mot-clé} Vergleich 2026: Die {N} besten Modelle » (déjà en place dans `category-heads/de.ts`) ; ajouter « (Stand: November) » **seulement** si la page est réellement revue chaque mois [I7].
- DE, H2 d'ouverture : « Die besten {synonyme courant} im Vergleich » (Airfryer/Heißluftfritteuse, Saugroboter/Staubsauger-Roboter, Smart Lock/smartes Türschloss).
- DE, méta : 1 ou 2 ✓ au plus, des faits vérifiables (« ✓ {N} Modelle ✓ Ergebnisse von Stiftung Warentest und ÖKO-TEST zitiert ✓ Stand {date} »).
- FR / IT / ES : « Meilleur … 2026 : comparatif de N modèles », « Migliori … 2026: classifica… », « Mejor … calidad precio » (recommandations des études locales [I3][I4][I5]). Jamais la traduction de « Test & Vergleich », qui est l'erreur du réseau VGL.

---

## 5. Comment ils produisent des milliers de pages sans être pénalisés pour contenu mince

Mesures sur 48 pages comparatives et 5 paires de pages sœurs [M] :

| Levier | Mesure | Ce qu'Homenura en retient |
|---|---|---|
| **Jeu de produits propre à chaque déclinaison** | Produits balisés (JSON-LD Product) en commun : 1 entre `heissluftfritteuse` (5 produits balisés) et `philips-heissluftfritteuse`, 1 avec `…-fuer-4-personen`, 0 entre `…-fuer-4-personen` et `…-xxl`, 0 entre `…-xxl` et `…-12-liter`, 2 entre `luftreiniger` et `hepa-luftreiniger`, 1 entre `luftreiniger` et `philips-luftreiniger` | une déclinaison n'existe que si elle change **la sélection**, pas seulement le titre |
| **Phrases propres** | Phrases communes entre pages sœurs : 15 sur 132 à 31 sur 174, soit **9 à 18 %** (12 L / 7 L, Drehkorb / 4 Personen, bis 300 / bis 400 €, 800 / 1 200 W, Heizlüfter / Heizlüfter Bad) | seuil maison : ≤ 20 % de phrases communes avec une page sœur |
| **Longueur** | 3 248 à 10 412 mots visibles, médiane ≈ 5 700 | la longueur vient du tableau et des fiches produit, pas du discours |
| **Texte par produit** | fiche par produit : caractéristiques, « Vorteile / Nachteile », note, nombre d'avis | nos fiches modèle existent : les réutiliser par déclinaison |
| **FAQ propre** | 3 à 18 questions par page (H3 terminées par « ? ») | 4 à 8 questions tirées de Suggest/PAA du pays |
| **Sources externes** | `test.de`, ÖKO-TEST, Verbraucherzentrale, BZfE, Umweltbundesamt, blogs d'experts, sites de marques | notre encadré « Sources indépendantes » (#53) va dans ce sens |
| **Hubs faibles en noindex** | pages groupe parfois en noindex ; toutes les pages comparatives de l'échantillon sont indexées | garder nos 771 pages persona en noindex tant qu'elles ne passent pas les seuils |
| **Rattachement** | chaque déclinaison est liée depuis la page mère (puces au-dessus du tableau) et liée à ≈ 20 voisines en bas | pas de page orpheline |

**Limite du modèle** : 97,5 % des pages de l'échantillon ont été publiées entre 2020 et 2023 (45 en 2020, 27 en 2021, 30 en 2022, 15 en 2023, 1 en 2024, 2 en 2025) [M]. L'échantillon suggère que la création de nouvelles pages allemandes a presque cessé depuis 2024 [E] ; le site réécrit ses pages de tête (gabarit « Test » de 2025) et déploie le modèle à l'étranger [M][T1]. Le Google d'aujourd'hui (« scaled content abuse ») ne tolérerait sans doute pas la même création en masse partant de zéro [H] ; Homenura doit produire **moins de pages, mais chacune avec une raison d'exister**.

---

## 6. Anatomie d'une page

### 6.1 Gabarit « Vergleich » (ex. `/luftreiniger/`, lu le 01/11/2026) [M]
1. Onglets « Bestenliste / Ratgeber / Kommentare » + fil d'Ariane (Wohnen › Luftreiniger & Viren-Ionisatoren › page).
2. H1 « Luftreiniger Vergleich 2026 » + H2 synonyme.
3. **Byline** : experte (« berät seit 2024 », lien vers son site et sa chaîne YouTube) + rédactrice.
4. Intro courte qui nomme le gagnant du mois, avec un astérisque de mention d'affiliation.
5. **« Fakten zum Vergleich »** : 101 produits recherchés, 14 vérifiés, 85 heures investies, 85 547 lecteurs convaincus (chiffres invérifiables).
6. Emplacement « Unser Highlight-Produkt wird ermittelt… » (**produit sponsorisé**).
7. **Puces de déclinaisons** : HEPA, Viren, Gastronomie, Büro, 30/60/100 m², UVC, Raucherraum, Levoit.
8. « Aktualisiert: 31.10.2026 » + « 1–8 von 14 » + filtres (prix, marque, avis, tri).
9. **Tableau** : badges « Vergleichssieger », « Preis-Leistungs-Sieger », « Highlight » ; « Unsere Bewertung: sehr gut 10/2026 » ; « Kundenwertung bei Amazon : 220 Bewertungen » ; bouton « Preisvergleich » ; « Zahlbar in Raten ».
10. Fiches produit (caractéristiques, avantages, inconvénients) + « Zum Angebot » (19 boutons sur la page).
11. **Kaufberatung** numérotée : définition, types, critères, entretien, **« Gibt es Luftreiniger bei der Stiftung Warentest ? »**, FAQ.
12. Commentaires + « Hat Ihnen dieser Vergleich gefallen? 4,2/5 (415) ».
13. **Quellen** : avis d'utilisateurs repris d'autres sites (« Bewertung: verifiziert »), note Stiftung Warentest détaillée par critère.
14. **Zusammenfassung** (Top 5 rappelé) + 3 promesses (« au plus tard 120 jours », « neutre », « exigeant »).
15. **« Ausverkaufte Luftreiniger »** : les produits épuisés restent sur la page.
16. ≈ 20 cartes « Zum Vergleich » vers des catégories voisines, avec un extrait.
Données structurées : Organization, WebSite + SearchAction, WebPage, BreadcrumbList, Person, Article, **Product + AggregateRating + Review + AggregateOffer**, ItemList [M]. (`dach.md` n'avait pas vu Review/AggregateRating le 30/10 : le balisage a changé ou n'avait pas été repéré.)

### 6.2 Gabarit « Test » (ex. `/heissluftfritteuse/`) [M][I1]
Ce gabarit reprend la même ossature. En plus : « Zuletzt aktualisiert », **« Schnellüberblick: Unsere Produkttests »** (3 cartes : Testsieger, Einsteiger-Tipp, Allrounder, avec le nombre d'avis), journal **« Die neuesten Updates »** (2 entrées : 16/02/2026 et 30/10/2025), « So wurde getestet » (3 à 4 lignes : un test frites), « Testberichte » par produit. Prix « ab X € » de 5 marchands + eBay [I2].

### 6.3 Labels « Testsieger / Vergleichssieger » et risque juridique
- Le **classement des pages « Vergleich »** pèse surtout le **taux de clic** du produit (« Nutzerinteresse »), les **avis clients des marchands** et le **prix** des boutiques liées, ce dernier avec un poids « très élevé ». Les notes sont converties en notes scolaires (« sehr gut ») [M, /wie-wir-arbeiten/]. Le « Vergleichssieger » est donc le produit **qui convertit**, pas le meilleur selon une méthode d'essai.
- Les pages non testées gardent « Test » dans le titre et la méta et invitent à choisir son « Testsieger » dans un H2 [M]. Or l'OLG Köln (30/10/2020, 6 U 136/19) a interdit « Test » pour des comparatifs calculés sans essai. Le LG Berlin II (26/05/2026, 15 O 277/25) a interdit un label « Testsieger » sans vraie comparaison [I1, S16–S17]. Aucun jugement visant nommément vergleich.org n'a été trouvé [I1].
- **Règle Homenura inchangée** : « Vergleich », « Empfehlung », « Unsere Wahl » ; « Testsieger » seulement en citation datée et liée d'un organisme (« Testsieger laut Stiftung Warentest 09/2026 »).

---

## 7. Maillage interne, hubs et parcours

### 7.1 Maillage [M]
- 64 à 118 liens internes vers d'autres pages comparatives sur chaque page (médiane ≈ 99).
- 3 couches de liens : (a) **puces de déclinaisons** au-dessus du tableau (même grappe) ; (b) **cartes « Zum Vergleich »** en bas (≈ 20, même groupe et groupes voisins, avec un extrait de 2 lignes) ; (c) bandeau « Die beliebtesten Vergleiche nach Kategorie » dans l'en-tête des hubs.
- Les hubs (rubrique → groupe) sont des listes A–Z ; `/wohnen/` porte 434 liens uniques [M].
- Liens sortants : `test.de` sur presque toutes les pages, ÖKO-TEST, sites d'experts, réseaux sociaux de l'auteur, `tuv-saar.com` (certificat), et un lien vers le site italien du réseau [M].

### 7.2 Parcours des lecteurs (reconstitués à partir des pages et des comptes du groupe)
1. **Annonce Google ou résultat naturel → page comparative** (cas le plus fréquent : « SEA-first » [T1]) → 3 cartes ou tableau → « Zum Angebot » (Amazon) ou « Preisvergleich » (5 marchands + eBay) → achat chez le marchand. Le groupe est payé à la vente [T2].
2. **Page comparative → puce de déclinaison** (« 12 Liter », « für 4 Personen », « bis 300 Euro ») → page plus étroite → marchand. C'est le parcours qui justifie les grappes.
3. **Accueil → recherche ou « Beliebte Suchbegriffe » saisonniers → rubrique → groupe A–Z → page** [I2].
4. **Themenwelten** (depuis juin 2026, lancées pour le Prime Day) : Black Friday décliné par rubrique, « Stromausfall », rangement ; pages courtes (≈ 650 mots, 16 liens) qui renvoient vers les comparatifs ; hors sitemap ; image d'en-tête créditée « © ChatGPT » [M].
5. **Google Shopping** : fiches produit du site affichées en 1re ligne des résultats Shopping, nouveau canal d'acquisition [T1].
6. **Étude de données** pour la presse : « Bei Stromausfall … Jeder Zweite fühlt sich schlecht vorbereitet » (sondage) → liens vers powerstation et lampes [M].

---

## 8. Blocs de monétisation [M][T1][T2]

| Bloc | Fonction | Peut-on le copier ? |
|---|---|---|
| « Zum Angebot » » (11 à 25 par page) | lien affilié direct (Amazon surtout) | oui, déjà en place (Amazon, Global Earning) |
| « Preisvergleich und weitere Angebote » | fenêtre de 5 marchands + eBay avec « ab X € » (Amazon, OTTO, eBay, Expert, Alternate, Cyberport, Proshop, tink, Netto, OBI vus dans le code) | **oui dès l'acceptation Awin** (OTTO, Coolblue, ManoMano…) ; prix seulement via flux autorisés |
| « Highlight » / « Anzeige » (Sponsored Products) | emplacement payé par le fabricant, en plus de la commission | plus tard (STRATEGIE § 7-12), avec la mention « Anzeige » |
| « Zahlbar in Raten » | lien vers un paiement en plusieurs fois | non prioritaire |
| « Ausverkaufte X » | garde les produits épuisés et des liens vers des alternatives | **oui** : section « Momentanément indisponible » au lieu de supprimer |
| Nombre d'avis Amazon, « 200+ achats le mois dernier » (sites étrangers) | preuve sociale tirée d'Amazon | **non** tant que la Creators API n'est pas active (règle Amazon) |
| Classement pondéré par le taux de clic et le prix | maximise le revenu par session (257 $ / 1 000 sessions [T1]) | **non** : contraire à notre promesse d'indépendance |
| Fiches produit dans Google Shopping | acquisition | non (pas de flux marchand) |

---

## 9. Cadence de mise à jour [M]

| Mesure (lastmod du sitemap, 01/11/2026) | vergleich.org |
|---|---|
| URL modifiées en ≤ 30 jours | 3 523 (18,7 %) |
| ≤ 120 jours | 8 235 (43,8 %) |
| ≤ 365 jours | 13 612 (72,4 %) |
| Modifications par mois | août 1 536, sept. 1 947, oct. 3 353 (montée avant le Black Friday) |

- Les **dates affichées** ne mesurent pas la même chose. « Aktualisiert: 31.10.2026 » correspond aux prix du tableau, quotidiens ; « Zuletzt aktualisiert: 29.10.2026 » et `dateModified` correspondent à une vraie retouche ; le mois du titre est automatique.
- Le journal « Die neuesten Updates » n'existe que sur le gabarit « Test » et compte peu d'entrées (2 sur la page airfryer) [M].
- La promesse « au plus tard 120 jours » est contredite par le sitemap : 56 % des URL ont plus de 120 jours [M].
- **Pour Homenura** : la cadence visible de vergleich.org (≈ 19 % du site retouché par mois) est un ordre de grandeur à viser sur nos **pages qui rapportent** (catégories et duels), avec un journal par page et `lastmod` réel. Jamais de date changée sans changement de fond (règle du SEO-PLAN).

---

## 10. Signaux E-E-A-T et leurs failles [M]

| Signal | Ce que fait vergleich.org | Faille observée |
|---|---|---|
| Auteurs nommés | 2 personnes par page (expert·e + rédacteur·rice), bio, liens externes, 67 pages auteur | la page airfryer est signée par une journaliste **jeux vidéo**, qui dirige aussi l'agence chargée des tests ; plusieurs bylines n'ont qu'un prénom et une initiale (« Georg B. », « Nele B. ») |
| Méthode | page « Wie wir arbeiten » : 3 méthodes (test en laboratoire depuis 2016, analyse, guide) | le classement des « Vergleiche » est fondé sur le taux de clic et le prix |
| Labels de confiance | certificat TÜV Saarland « Geprüftes Onlineportal », reprises par de grands médias | non audité ici |
| Chiffres de travail | « Fakten zum Vergleich » (produits, heures, lecteurs) | invérifiables |
| Sources | `test.de`, ÖKO-TEST, Verbraucherzentrale, avis d'utilisateurs « vérifiés » repris d'autres sites | les avis repris ne sont pas les leurs |
| Fraîcheur | dates, journal, promesse de 120 jours | mois automatique ; 56 % des URL ont plus de 120 jours |
| Avis lecteurs | note de page (4,2/5, 415 votes), commentaires | commentaires vides sur la page airfryer [I1] |
| Visibilité IA | robots IA autorisés ; page « bevorzugte Quelle bei Google » | absent du top 50 des domaines cités par ChatGPT en Allemagne (Ahrefs, sept. 2026) [I1, S10] |

**Ce qu'Homenura a déjà** [I7] : un pseudonyme par marché, qui dit clairement qu'il ne teste pas (`lib/authors.ts`), une page Méthodologie liée depuis chaque catégorie, une FAQ datée par catégorie et marché, et l'encadré « Sources indépendantes ». **Ce qui manque** : un expert réel par langue (choix de Miguel, STRATEGIE § 5), un journal daté par page, et des critères de classement publiés sur la page même.

---

## 11. Le réseau VGL hors DACH (synthèse des études pays)

| Site | Taille / audience | Ce qui ne va pas | Source |
|---|---|---|---|
| meilleurs.fr | 6 781 URL ; ≈ 0,8 M visites/mois (estim.), 42,5 % de mots-clés achetés | marques allemandes, auteur « leepeuker », `dateModified` figé en 12/2024 alors que la page affiche 10/2026, 0 duel, 0 panne, 0 page saisonnière, aucune enseigne française | [I3] |
| miglioreconsiglio.it | 11 629 URL ; ≈ 15,6 k visites/mois (estim.) | titres « test o confronto » que personne ne tape, aucune Ninja dans le tableau friteuses, fausse fraîcheur (« Aggiornato 28/10/2026 » sur une page modifiée en 10/2024) | [I4] |
| mejoraelige.es | 7 178 URL | « Prueba y comparativa » sans essai, toutes les notes à 9,6, 0 OCU, 0 duel, 0 panne | [I5] |
| pickbest.co.uk | sitemap de 1,09 M caractères, soit ≈ 10 000 URL [E] ; slugs calqués sur l'arbre Amazon (« womens-bras », « racing-wheels-for-playstation-3 ») | titre « The 13 best Air Fryers of 2026 » test or comparison », aucun auteur, aucune enseigne nommée | [M, P1] |
| bestpick.com | 248 pages, ≈ 60 mots-clés, 0 trafic canadien | catalogue allemand traduit | [I6] |

**Lecture** : hors d'Allemagne, le réseau est **une traduction automatique du gabarit allemand**. Les vocabulaires locaux (migliore, qualità prezzo, calidad precio, meilleur, cost to run), les marques locales et les organismes de test nationaux (Altroconsumo, OCU, Que Choisir, Which?) y manquent [I3–I5]. Or l'Italie, l'Espagne, la France et le Royaume-Uni font 227 des 455 clics Google d'Homenura sur 28 jours [I7]. **C'est là qu'Homenura a le plus d'avance** : y écrire des pages natives avant que le réseau ne se localise (le groupe annonce une « adaptation aux marchés locaux » automatisée [T1]).

---

## 12. Points faibles exploitables (classés)

1. **Duels et pannes** : 2 + 2 pages sur 18 797 [M], alors que ce sont nos 2 premiers formats en clics (SEO-PLAN § 1). Ni leur gabarit ni leur modèle payant (on achète difficilement « Rauchmelder piept ») ne les couvrent [H].
2. **Modificateurs « ohne Abo / ohne Hub / ohne Abluftschlauch / ohne PFAS / mit Speicher / mit Strommessung »** : aucune page, alors que Suggest DE les propose [I1][M].
3. **Têtes manquantes sur des termes en hausse** : Airfryer (3,3 fois Heißluftfritteuse), Saugroboter, mobile Klimaanlage (+219 %), Smart Lock (+63 %), Video-Türklingel, Stromspeicher, Thermomix / Monsieur Cuisine [I2][M].
4. **Maison connectée sans grappe** : serrure, sonnette, Balkonkraftwerk, Saug-Wisch-Roboter, laveur de vitres et hub ont 0 déclinaison [M].
5. **Crédibilité attaquable** : classement par taux de clic et prix, « Test » sans essai, auteurs hors sujet, chiffres invérifiables, mois automatique [M].
6. **Dépendance au payant** : coût des ventes ≈ 67 % du brut [T1] ; sur les SERP naturelles, vergleich.org n'est apparu sur aucune 1re page de 8 requêtes Google.de [I1, S8].
7. **Contenu ancien** : 97,5 % de l'échantillon publié avant 2024 [M] ; des fiches de modèles retirés subsistent (section « Ausverkaufte »).
8. **Absent des réponses IA** en Allemagne [I1, S10] ; pas de réponse directe datée en tête de page [M].
9. **Réseau étranger traduit**, faible et en fausse fraîcheur (§ 11).
10. **Saisonnier mince** : Themenwelten courtes, hors sitemap, sans contenu propre [M].

---

## 13. Les 5 tactiques à copier ou à contrer en premier

| # | Tactique | Copier / contrer | Pourquoi (preuve) | Comment chez Homenura | Délai |
|---|---|---|---|---|---|
| 1 | **Duels « X vs Y / X oder Y » et pannes « Probleme / piept / funktioniert nicht »** dans chaque langue | **Contrer** (là où il est absent) | 2 + 2 pages chez vergleich.org [M] ; nos 2 premiers formats en clics [I7] ; demande en PAA et Suggest DE [I1] | 10 duels DE, en commençant par ceux que la demande allemande confirme (Ninja oder Cosori, Ecovacs oder Roborock, Dreame oder Roborock, Monsieur Cuisine oder Thermomix, Airfryer oder Backofen [I1][I2]) + 12 pages panne DE (Rauchmelder piept, Saugroboter Probleme, Brühgruppe klemmt, Akku-Staubsauger schaltet ab) ; mêmes formats en IT/ES/FR/UK | 2–4 sem. |
| 2 | **Grappes de déclinaisons rattachées à chaque catégorie** (marque, capacité, usage, « mit / ohne », budget), affichées en puces au-dessus du tableau et en cartes « comparaisons voisines » | **Copier** avec garde-fous | 39 % de son site, 2 104 grappes [M] ; c'est sa machine à longue traîne | publier d'abord là où il n'a rien : Airfryer (tête), Saugroboter (tête + bis 300/500 €), Smart Lock nachrüsten, Video-Türklingel ohne Abo, Balkonkraftwerk mit Speicher, mobile Klimaanlage ohne Abluftschlauch, Heizkörperthermostat ohne Hub, WLAN-Steckdose mit Strommessung. **Indexer seulement si** : ≥ 5 produits distincts, ≤ 2 produits communs avec le top 5 de la page mère, ≤ 20 % de phrases communes avec une page sœur, FAQ propre ; sinon noindex | 3–6 sem. |
| 3 | **Gabarit long au-dessus de la ligne de flottaison** : 3 cartes + byline + date + journal daté + compteurs honnêtes + tableau de 8 à 14 produits (1re colonne fixe sur mobile) + Kaufberatung + FAQ + sources + « momentanément indisponible » | **Copier** (adapté à la loi) | ≈ 5 700 mots médians, 64 à 118 liens internes, 11 à 25 boutons d'achat par page [M] ; nos hubs n'ont que 3 choix et pas de tableau (`ComparisonTable` sert seulement sur l'accueil et le guide airfryer) [I7] | ajouter le tableau aux 61 catégories, un « journal des mises à jour » par page et des compteurs vérifiables (« 14 modèles comparés, 6 sources citées, revu le … ») ; titre « X Vergleich 2026: Die N besten Modelle » ; méta avec 1–2 ✓ factuels | 2–3 sem. |
| 4 | **Classement transparent et expert pertinent**, face au « Vergleichssieger » calculé sur le taux de clic | **Contrer** | classement fondé sur le taux de clic, les avis et le prix [M] ; « Test » dans ≈ 96 % des titres sans essai [M] ; jurisprudence OLG Köln 2020 / LG Berlin II 2026 [I1] ; journaliste jeux vidéo sur les airfryers [M] | bloc « Pourquoi ce classement » sur chaque page (critères pondérés publiés, mention « classement indépendant du prix et des clics ») ; module « Das sagen unabhängige Tests » (Stiftung Warentest, ÖKO-TEST, VKI, Kassensturz) cité daté et lié ; un expert réel par langue, du domaine concerné | 1–2 sem. (bloc) ; expert : décision de Miguel |
| 5 | **Versions nationales natives** là où le réseau VGL traduit l'allemand (IT, ES, FR, UK), puis **fenêtre multi-marchands** locale | **Contrer** (puis copier le multi-marchands) | réseau hors DACH = 5,2 % du volume d'affaires, gabarit traduit, fausse fraîcheur [T2][I3–I5] ; nos 1ers pays sont IT, DE, FR, ES [I7] | vocabulaire natif (« migliore… qualità prezzo », « mejor… calidad precio », « meilleur… comparatif », « best… cost to run »), marques locales (De'Longhi Pinguino, Cecotec, Tower), organismes nationaux (Altroconsumo, OCU, Que Choisir, Which?) ; dès Awin : OTTO (DE), Coolblue (NL), ManoMano/Darty (FR) dans une fenêtre « Preisvergleich » à prix autorisés | continu ; multi-marchands dès l'acceptation Awin |

**À ne pas copier** : « Test / Testsieger » pour soi ; classement pondéré par le taux de clic ; mois automatique dans le titre sans revue ; compteurs invérifiables ; nombre d'avis ou badges d'achat Amazon (règle Amazon) ; avis d'utilisateurs repris d'autres sites ; création de milliers de pages d'un coup (risque « scaled content abuse » [H]) ; image d'en-tête générée et créditée « ChatGPT ».

---

## 14. Homenura face à vergleich.org, élément par élément

| Élément | vergleich.org [M] | Homenura aujourd'hui [I7] | Décision |
|---|---|---|---|
| Pages | 18 797 (DE) | 61 catégories × 10 langues, ≈ 1 590 pages panne, 771 pages persona en noindex, 103 articles dont 6 duels | + grappes contrôlées (tactique 2), + duels (tactique 1) |
| H1 / titre DE | « X Vergleich 2026 » / « X Test & Vergleich » Top N im Monat » | « Heißluftfritteuse Vergleich 2026: Die 3 besten Airfryer » | garder « Vergleich » ; tête « Airfryer » à tester [I2] ; « Die N besten » = taille réelle du tableau |
| Au-dessus de la ligne de flottaison | byline, 3 cartes, compteurs, puces de déclinaisons, tableau filtrable | hero, byline, image, « 3 choix » (QuickAnswer) | + puces de déclinaisons + tableau (tactique 3) |
| Tableau | 8 à 14 produits, filtres, badges, 1–8 sur 14 | absent des pages catégorie | à créer |
| Date | 3 dates différentes (prix, page, mois du titre) | date réelle par catégorie (FAQ + `dateModified`) | garder la vraie date ; ajouter un journal |
| Auteur | 2 personnes réelles, expertise parfois hors sujet | pseudonyme par marché, déclaré comme tel | expert réel par langue (Miguel) |
| Méthode / classement | taux de clic, avis, prix | page Méthodologie (analyse documentaire) | critères publiés **sur chaque page** |
| Sources | test.de + avis repris | encadré « Sources indépendantes » (#53, 35 catégories DE) | étendre aux 10 langues (SEO-PLAN P1-5) |
| FAQ | 2 à 18 questions, pas de FAQPage | 5 questions par catégorie et marché, FAQPage | garder |
| Données structurées | Product + AggregateRating + Review + AggregateOffer + ItemList + Person ×2 | Article + FAQPage + Person | ItemList + Product sans note ni prix Amazon ; Review seulement pour notre propre avis éditorial |
| Monétisation | Amazon + 5 marchands + eBay, Highlight payé, paiement en plusieurs fois | Amazon (Global Earning) | multi-marchands dès Awin |
| Saisonnier | Themenwelten courtes hors sitemap | `/black-friday` + 6 catégories | pages plus riches, à URL stable, dans le sitemap |
| Duels / pannes | 2 / 2 | 1er et 2e formats en clics | accélérer (tactique 1) |
| IA | absent du top ChatGPT DE | déjà en positions 2 à 8 sur les sous-requêtes IA (SEO-PLAN § 1) | réponses directes datées en tête |

---

## 15. Backlog allemand dérivé (pages où vergleich.org est absent ou mince)

Ordre = demande locale observée × absence chez vergleich.org × saison. Volumes non mesurés.

| # | Page /de à créer ou retitrer | Chez vergleich.org [M] | Demande locale [I1][I2] | Saison |
|---|---|---|---|---|
| 1 | Airfryer Vergleich (tête « Airfryer », H2 Heißluftfritteuse) | pas de /airfryer/ | Airfryer = 3,3 fois Heißluftfritteuse, +55 % | maintenant → Noël |
| 2 | Saugroboter (tête) + bis 300 / bis 500 Euro | pas de /saugroboter/ | +23 % ; « bis 300 / 500 € » suggérés | Black Friday |
| 3 | Dreame oder Roborock / Ecovacs oder Roborock | 0 duel | PAA « Ecovacs oder Roborock » | Black Friday |
| 4 | Ninja oder Cosori (Airfryer) | 0 duel | PAA « Ninja oder Cosori » | maintenant |
| 5 | Heizlüfter Stromverbrauch / Kosten pro Stunde | grappe « Watt » sans coût | Heizlüfter +25 % | hiver |
| 6 | Rauchmelder piept / blinkt rot | 0 page panne | « piept », « blinkt rot » suggérés | hiver |
| 7 | Smart Lock nachrüsten (Nuki, ohne Zylindertausch) | smartes-tuerschloss sans déclinaison | Smart Lock +63 % ; « nachrüsten » suggéré | toute l'année |
| 8 | Video-Türklingel ohne Abo | wlan-tuerklingel, aucun « ohne Abo » | « ohne Abo » = 2e suggestion | toute l'année |
| 9 | Überwachungskamera außen ohne Abo / mit SIM-Karte | pas de « außen » | « ohne WLAN mit SIM » +2 700 % | toute l'année |
| 10 | Heizkörperthermostat ohne Hub / ohne Abo | 1 déclinaison | « ohne Hub / Abo / Cloud » suggérés | hiver |
| 11 | Thermomix oder Monsieur Cuisine | aucune page Thermomix | demande réelle [I2] | Noël |
| 12 | Balkonkraftwerk mit Speicher / 800 oder 2000 Watt | page unique | « mit Speicher » = 2e suggestion | printemps (préparer en février) |
| 13 | WLAN-Steckdose mit Strommessung | absent | suggéré (niche) | hiver (prix de l'énergie) |
| 14 | Saugroboter Probleme / Akku-Staubsauger schaltet ab | 0 | « probleme » suggéré | toute l'année |
| 15 | Powerstation für Stromausfall | 1 déclinaison + Themenwelt | Powerstation +50 % | hiver |
| 16 | mobile Klimaanlage ohne Abluftschlauch | pas de « mobile Klimaanlage » | +219 % ; « ohne Schlauch » = 2e suggestion | publier en mai |
| 17 | Mähroboter ohne Begrenzungskabel (faire mieux que la sienne) | 1 page (≈ 4 000 mots) | 4 variantes « ohne … » suggérées | publier en mars |
| 18 | Heißluftfritteuse ohne PFAS / Doppelkammer | seulement « 2-faecher » | « ohne PFAS / Teflon » suggérés | maintenant |

Règle de production : au plus 5 nouvelles pages indexées par semaine et par langue, chacune passant les seuils du § 5 [H : prudence face au « scaled content abuse »] ; mesure Search Console par page après 28 jours.

---

## Sources

Mesures directes [M], 01/11/2026 (navigateur, requêtes de même origine, faible débit) :
- [M-sitemap] https://www.vergleich.org/sitemap.xml — 18 797 URL et `lastmod` ; classification par familles, grappes et ancienneté (scripts locaux).
- [M-50] 50 pages lues (titre, méta, H1, H2, robots, JSON-LD, mots, boutons, liens) : https://www.vergleich.org/heissluftfritteuse/ · /philips-heissluftfritteuse/ · /heissluftfritteuse-fuer-4-personen/ · /heissluftfritteuse-12-liter/ · /heissluftfritteuse-mit-drehkorb/ · /kaffeevollautomat/ · /kaffeevollautomat-bis-300-euro/ · /kaffeevollautomat-mit-app/ · /delonghi-kaffeevollautomat/ · /saug-wisch-roboter/ · /roborock-saugroboter/ · /guenstiger-saugroboter/ · /staubsauger-roboter/ · /akku-staubsauger/ · /akku-staubsauger-tierhaare/ · /luftentfeuchter/ · /granulat-luftentfeuchter/ · /luftreiniger/ · /hepa-luftreiniger/ · /heizluefter/ · /heizluefter-bad/ · /infrarotheizung-800-watt/ · /maehroboter/ · /maehroboter-ohne-begrenzungskabel/ · /die-haeufigsten-probleme-mit-maehrobotern/ · /wallbox/ · /wallbox-11kw/ · /balkonkraftwerk/ · /rauchmelder/ · /smart-home-rauchmelder/ · /heizkoerperthermostat/ · /smart-home-heizkoerperthermostat/ · /ueberwachungskamera/ · /ueberwachungskamera-innen/ · /smartes-tuerschloss/ · /wlan-tuerklingel/ · /ring-tuerklingel/ · /wlan-steckdose/ · /powerstation/ · /fensterputzroboter/ · /dampfreiniger/ · /mobile-split-klimaanlage/ · /mobile-klimageraete/ · /gasgrill-bis-300-euro/ · /mikrowelle-unter-100-euro/ · /staubsauger-unter-100-euro/ · /laptop-vs-tablet-die-wichtigsten-fragen-fuer-ihre-entscheidung/ · /alarmanlagen/ · /video-tuersprechanlage/ · /raumthermostat-wlan/ ; paires de pages sœurs : /heissluftfritteuse-7-liter/, /heissluftfritteuse-xxl/, /kaffeevollautomat-bis-400-euro/, /infrarotheizung-1200-watt/, /philips-luftreiniger/.
- [M-120] Échantillon systématique de 120 pages du sitemap (1 URL sur ≈ 156) : titre, H1, `datePublished`, robots.
- [M-méthode] https://www.vergleich.org/wie-wir-arbeiten/ (sélection, tri, notation, annonces « Highlight / Anzeige »).
- [M-hubs] https://www.vergleich.org/frittieren/ · /luftreiniger-viren-ionisatoren/ · /wohnen/ · /themenwelten/ · /themenwelten/black-friday-angebote-reinigen/ · /vergleich-org-launcht-themenwelten/ · /stromausfall-vorbereitung/
- [P1] pickbest.co.uk : https://www.pickbest.co.uk/ · https://www.pickbest.co.uk/air-fryer/ · https://www.pickbest.co.uk/sitemap.xml (lus le 01/11/2026).

Documents de Team Internet [T] :
- [T1] Team Internet Group plc, Annual Report 2025 (lettre du directeur général datée du 26/06/2026) : https://teaminternet.com/wp-content/uploads/2026/06/TIG-Annual-Report-2025.pdf — KPI du segment Comparison, schéma des revenus et coûts, stratégie (« SEA-first », IA, longue traîne, international), note sur les segments.
- [T2] Team Internet, H1 2026 Interim Results, présentation du 07/09/2026 : https://teaminternet.com/investors/tig_h1_2026_investor-presentation/
- [T3] Team Internet, page Investisseurs : https://www.teaminternet.com/investors/ (vergleich.org présenté comme 1er portail d'avis produits en Europe germanophone).

Documents internes [I] (avec leurs sources locales) :
- [I1] `/Users/miguelserenite/hn-wt-usca/docs/croissance/seo-etudes/dach.md` (30/10/2026) — Google Suggest DE et Bing Suggest DE [S9] ; SERP Google.de de 8 requêtes [S8] ; Similarweb https://www.similarweb.com/website/vergleich.org/ [S5] ; Ahrefs, domaines les plus cités par ChatGPT en Allemagne https://ahrefs.com/de/blog/chatgpt-deutschland-meistzitierte-domains/ [S10] ; OLG Köln 6 U 136/19 https://www.it-recht-kanzlei.de/olg-koeln-test-algorithmus-vergleich.html [S16] ; LG Berlin II 15 O 277/25 https://www.vzbv.de/urteile/irrefuehrende-testsieger-werbung [S17] ; OMR 2016 https://omr.com/de/daily/vergleich-org [S7] ; Startbase 2022 https://www.startbase.com/news/vergleich-org-aufgekauft/ [S6].
- [I2] `/private/tmp/claude-501/-Users-miguelserenite-Desktop/bbc95dd3-ec06-4132-9771-22a8cbfe1172/scratchpad/studies/de.md` (01/11/2026) — Google Trends DE/AT/CH https://trends.google.de/trends/explore [M21] ; arborescence et parcours vergleich.org [M22].
- [I3] `…/scratchpad/studies/fr.md` § 5.2 (meilleurs.fr : sitemap, 9 pages, Similarweb).
- [I4] `…/scratchpad/studies/it.md` § 5.2 (miglioreconsiglio.it : sitemap, pages, Similarweb).
- [I5] `…/scratchpad/studies/es.md` § 5.2 (mejoraelige.es : sitemap, pages).
- [I6] `…/scratchpad/studies/ca.md` § 5.2 (bestpick.com : sitemap, Similarweb).
- [I7] Dépôt Homenura : `docs/croissance/STRATEGIE-2026-10.md`, `docs/croissance/SEO-PLAN-2026-10.md`, `docs/croissance/seo-etudes/gsc-2026-10-30.md` ; code `components/CategoryHub.tsx`, `lib/catalog/category-heads/de.ts`, `lib/authors.ts`, `lib/catalog/categories.ts`, `lib/catalog/problems.ts`, `app/[lang]/[silo]/[category]/meilleur-pour/[persona]/page.tsx`.
