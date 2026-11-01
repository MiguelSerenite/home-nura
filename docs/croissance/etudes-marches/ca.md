# Étude de marché — Canada (version /ca en anglais, et question d'une version québécoise)

Date : 01/11/2026. Périmètre : petit électroménager, maison connectée, confort, pour la version /ca (en-CA) lancée le 01/11/2026 avec des modèles européens.
**Point de départ** : il n'existait aucune étude Canada dans `docs/croissance/seo-etudes/`. Cette étude s'appuie sur `STRATEGIE-2026-10.md` (§ 7 modèle vergleich.org, § 8 expansion), `SEO-PLAN-2026-10.md` (gabarits gagnants : duels, pages « problème », consommation) et `dach.md` § 3 / l'étude FR (meilleurs.fr) pour vergleich.org, sans les refaire.
Règles maintenues : jamais « tested by us », aucune image ni aucun prix Amazon avant l'API Creators.
**Canada ≠ États-Unis** : chaque constat ci-dessous vient d'une source canadienne ou québécoise ; le modèle américain n'a servi à rien prouver.

## 0. Méthode et limites

| Code | Source collectée | Limite |
|---|---|---|
| [A] | Autocomplétion Google **Canada anglais** (hl=en, gl=ca), 60 graines, 578 suggestions, relevée le 01/11/2026 | Vocabulaire et intentions, pas des volumes |
| [B] | Autocomplétion Google **Canada français** (hl=fr, gl=ca), 43 graines, 424 suggestions, 01/11/2026 | Idem |
| [GT] | **Google Trends Canada**, 12 derniers mois (26/10/2025 → 01/11/2026), lots de 5 termes ancrés sur « air fryer » | Indices relatifs ; la dernière semaine (1–7/11) est partielle ; un terme unique sous-estime les catégories à plusieurs noms |
| [GTQ] | Google Trends **Québec** (CA-QC), mêmes réglages | Base « friteuse à air » très faible et bruitée → comparaisons en ordre de grandeur |
| [GTR] | Trends : requêtes associées et répartition par province (humidifier, space heater, smart thermostat, air purifier) | Les lots « air fryer », « robot vacuum » et marques de friteuses/robots ont échoué (HTTP 429) |
| [Tn] | Pages lues (liste § 7) | Estimations Similarweb signalées « estim. » |

Limites franches :
- **Recherche web épuisée** dès le début de l'étude (quota partagé entre agents). Je n'ai donc **pas relevé de pages de résultats Google** (positions des concurrents, formats affichés, Aperçus IA). Les concurrents sont établis par l'autocomplétion, Similarweb et les sites eux-mêmes. **À faire** : relever 15 SERP google.ca dans le Chrome de Miguel.
- **Listes « meilleures ventes » non lues** : amazon.ca HTTP 503 ; bestbuy.ca, homedepot.ca, protegez-vous.ca, chatelaine.com HTTP 403 ; walmart.ca page anti-robot ; redflagdeals.com renvoie vers un péage pour robots. Je n'ai rien contourné.
- **Aucune taille de marché du petit électroménager ni de la maison connectée au Canada en accès libre** (pages Statista masquées). Je n'en invente pas : j'utilise les ventes des détaillants spécialisés de Statistique Canada.
- **Programmes d'affiliation canadiens non vérifiés** (pages bloquées) : listés « à vérifier ».
- Search Console : le Canada n'apparaît pas dans la liste des pays du 30/10 (au plus 8 clics) [GSC]. On part de zéro.

---

## Résumé décisionnel

1. **Les Canadiens filtrent eux-mêmes les résultats américains** : sur 28 graines sans le mot « canada », **21** sont complétées par « … canada » ou « … canadian tire » [A] (« best humidifier canada », « dehumidifier for basement canadian tire », « doorbell camera no subscription canada »). Un /ca qui ressemble à un site américain ou européen ne sera pas choisi : titres « … in Canada (2026) », dollars canadiens, enseignes et aides canadiennes.
2. **Amazon est n° 1 mais pas seul.** amazon.ca ≈ 183,9 M de visites sur 3 mois, ≈ 4,9 fois walmart.ca (estim. Similarweb, sept. 2026) [T11][T12]. Au Québec, 83 % des cyberacheteurs ont acheté sur Amazon en 2025, mais **sa part de leurs dépenses en ligne est passée de 64 % à 54 %** et l'abonnement Prime de 52 % à 43 % [T10]. **Costco et Canadian Tire** sont les réflexes de recherche (Costco dans 12 graines EN et 16 FR, Canadian Tire dans 18 EN et 11 FR) [A][B].
3. **L'hiver décide du calendrier** : « humidifier » pèse 20 % d'« air fryer », « snow blower » 14 % (pic 7–13/12), chauffages, foyers électriques, couvertures chauffantes et détecteurs de CO culminent fin novembre – début janvier [GT]. 88 % des Canadiens placent le Black Friday (27/11) dans leurs 3 jours d'achat principaux [T7] ; novembre + décembre = **22 % des ventes annuelles** des magasins d'électronique et d'électroménager [T2].
4. **Le chauffage canadien invalide le catalogue européen** : 46 % des ménages ont une fournaise à air pulsé, 23 % des plinthes électriques (**54 % au Québec**), 7 % seulement une chaudière à radiateurs [T3]. Les têtes thermostatiques n'ont presque pas de marché ; le marché, c'est ecobee (marque de Toronto [T23], indice 62 contre 28 pour Nest [GT]), Honeywell, Mysa et Sinopé pour les plinthes, plus les aides (Ontario : 100 à 125 $ par thermostat [T18], 75 $ Peak Perks [T19] ; Québec : Hilo [T21]).
5. **Le /ca actuel n'est pas encore canadien** : liens vers amazon.fr, sélections européennes, section « marché français », garanties européennes, « radiator valves » [T29]. Il faut des modèles nord-américains (120 V, marques d'homologation reconnues au Canada [T25]) et **vérifier que Global Earning convertit réellement les clics canadiens** avant d'écrire en volume.
6. **vergleich.org n'a pas de site canadien.** Son site américain bestpick.com (VGL Publishing) ne reçoit aucun trafic canadien mesurable (États-Unis 72 %, Allemagne 28 %, estim.) ; 248 pages, restes du catalogue allemand (raclette, « thermostatic radiator valve », répéteur Fritz), **aucune page thermostat connecté, sonnette vidéo, serrure ou souffleuse, 0 page « vs »** [T26][T12]. Le terrain canadien est tenu par Reddit (32 graines sur 60), Consumer Reports, Protégez-Vous (en français), RedFlagDeals (bons plans) et les enseignes.
7. **Version québécoise : oui, mais en 2e phase et ciblée.** La demande proprement francophone est forte sur l'énergie et l'hiver (« thermopompe » ≈ 4 fois « heat pump » au Québec, en ordre de grandeur, « borne de recharge », « chaufferette », « balayeuse », « souffleuse ») et le Québec compte 30,9 % de véhicules zéro émission dans les immatriculations neuves (2024) [GTQ][T5]. Mais les Québécois tapent « air fryer » (indice 72 contre 2,5 pour « friteuse à air ») et « robot vacuum » [GTQ], Amazon y recule [T10], et le budget des fêtes y est le plus bas du pays (664 $) [T7]. **Aujourd'hui, un lecteur fr-CA est envoyé vers /fr (France, euros, amazon.fr)** [T29] : c'est à corriger avant tout.

---

## 1. Marché et dynamique (2024 → 2027)

### 1.1 Chiffres mesurés

| Indicateur | Valeur | Source |
|---|---|---|
| Commerce de détail 2025 | **843,6 G$ (+3,6 %)** ; janv.–août 2026 : 577,1 G$ (+4,2 %) | StatCan 20-10-0056-01 [T2] |
| Commerce électronique de détail | 2024 : 57,6 G$ ; **2025 : 59,2 G$ (+2,9 %), 7,0 % du détail** ; janv.–août 2026 : 39,8 G$ (**+7,8 %**) | [T2] |
| Août 2026 | Détail 74,6 G$ (+1,2 %) ; e-commerce 5,6 G$ = **7,6 %** du détail (désaisonnalisé) | StatCan, Le Quotidien 23/10/2026 [T1] |
| Magasins d'électronique et d'électroménager (SCIAN 4492) | 2023 : 20,9 G$ ; 2024 : 20,1 G$ ; **2025 : 19,3 G$ (−3,8 %)** ; janv.–août 2026 : 10,7 G$ (**−10,1 %**) | [T2] |
| Même secteur, par province | Ontario 2025 −7,8 % et janv.–août 2026 −22,1 % ; **Québec 2025 +3,7 % et janv.–août 2026 +12,7 %** ; Québec = 14,6 % du secteur canadien | [T2] |
| Saisonnalité de ce secteur | Novembre 2025 : +33,5 % sur octobre ; **novembre + décembre = 22,1 % de l'année** | [T2] |
| Maison connectée | **47 % des Canadiens** utilisent des appareils domestiques connectés (2022 ; 42 % en 2020) ; enceinte intelligente 30 % | StatCan, Enquête canadienne sur l'utilisation d'Internet [T4] |
| Chauffage principal (2023) | Canada : fournaise à air pulsé 46 %, plinthes électriques 23 %, thermopompe 8 %, chaudière 7 % ; électricité 35 %, gaz 41 %. **Québec** : électricité 70 %, plinthes 54 %, thermopompe 16 %. **Ontario** : air pulsé 66 %, gaz 58 %, plinthes 7 % | StatCan 38-10-0286-01 [T3] |
| Véhicules zéro émission (part des immatriculations neuves, 2024) | **Canada 14,6 %**, **Québec 30,9 %**, Ontario 8,1 % | StatCan 20-10-0024-01 (table archivée, fin 2024) [T5] |
| Budget des fêtes 2026 | **911 $ (−6,5 %)** ; Québec 664 $ (+7 %), Alberta 1 184 $, Ontario 952 $ (−13 %) | RCC × Leger, 19/10/2026, > 2 500 répondants [T7] |
| Cyberacheteurs au Québec | **82 % des adultes** (+8 pts) ; 65 ans et plus : 68 % (55 % en 2024) | NETendances 2025, n = 992 [T10] |

**Lecture prudente du recul des magasins spécialisés** : la série SCIAN 4492 couvre les enseignes spécialisées (type Best Buy), pas Amazon, Walmart ou Costco, classés ailleurs. Le recul de 2025-2026 peut donc traduire un déplacement des achats vers les généralistes et le web (e-commerce +7,8 % sur la même période) plutôt qu'une baisse de la demande. Hypothèse, non démontrée.

**Taille du marché du petit électroménager et de la maison connectée** : non publique (Statista masqué). Pas de chiffre inventé.

### 1.2 Tendances qui comptent pour Homenura

| Tendance | Preuve locale | Conséquence |
|---|---|---|
| Guerre commerciale avec les États-Unis | Contre-tarifs canadiens de 15 à 50 % sur plus de 700 produits américains depuis le 08/09/2026, dont **électroménagers et électronique** (27,6 G$ d'importations) [T16] | Les modèles fabriqués aux États-Unis peuvent coûter plus cher : ne pas promettre de prix, privilégier des sélections multi-origines |
| « Acheter canadien » | Fév. 2025 : 85 % remplacent au moins une partie des produits américains, 48 % autant que possible (Angus Reid, cité) [T17] ; 2026 : 84 % plus enclins à offrir un cadeau « Made in Canada », mais **52 % seulement « si le prix est raisonnable »** [T7] | Encadré « Canadian brands » (ecobee, Mysa, Sinopé…) sans dénigrement ; le prix reste roi |
| Sensibilité au prix | 43 % attendent les grandes journées de soldes (39 % en 2025) ; 23 % mettent le prix le plus bas en premier [T7] ; « best air fryer under $100 », « best cordless vacuum canada under $200 » [A] | Pages budget et Black Friday à URL stable |
| Recul d'Amazon au Québec | Part des dépenses en ligne 64 % → 54 % ; Prime 52 % → 43 % ; la fermeture des entrepôts québécois d'Amazon « a été vue très négativement » ; marchands québécois 14 % (+3 pts), canadiens hors Québec 17 % (+6 pts) [T10] | Au Québec, un bouton Amazon seul est encore plus insuffisant qu'ailleurs |
| Disparition de La Baie d'Hudson | Protection contre les créanciers le 07/03/2025, tous les magasins fermés le 01/06/2025 ; marque rachetée par Canadian Tire (30 M$) [T15] | Une enseigne de moins pour l'électroménager ; Canadian Tire renforcé |
| Énergie et aides | Ontario : thermopompes jusqu'à 12 000 $, solaire + batterie jusqu'à 10 000 $, thermostats intelligents 100 $/125 $, électroménagers jusqu'à 200 $ [T18] ; Peak Perks 75 $ + 20 $/an [T19] ; Québec : LogisVert (thermopompes, tables à induction, sécheuses thermopompe) et aides fédérales aux thermopompes annoncées le 08/10/2026 pour 2027 [T20] ; Hilo : jusqu'à 20 % d'économie l'hiver, 150 $ en moyenne (2025-2026, estimation Hilo) [T21] | Hub « rebates » : demande attestée (« smart thermostat rebate ontario / alberta / bc / manitoba / enbridge », « free smart thermostat ontario » +70 %) [A][GTR] |
| Feux de forêt et qualité de l'air | « air purifier » culmine du 12 au 18/07/2026 ; Colombie-Britannique = province la plus intéressée (100) ; « air purifier for wildfire smoke canada » [GT][GTR][A] | Page « for wildfire smoke » avant juin |
| Eau du robinet | Requêtes en forte hausse : « reverse osmosis water system » +4 350 %, « whole home water filtration system » (envolée) [GTR] | Catégorie à étudier (filtration d'eau), hors catalogue actuel |
| IA dans les achats | Caddle × RCC, 26/03/2026, étude sur l'usage de l'IA dans les décisions d'achat (chiffres dans le PDF, non lus) [T9] | Garder le format « réponse directe » du plan SEO |

---

## 2. Habitudes d'achat

### 2.1 Où les Canadiens achètent

| Site | Visites sur 3 mois (estim., sept. 2026) | Part Canada | 1er canal |
|---|---|---|---|
| amazon.ca | **183,9 M** | 91,5 % | Direct 46,7 % |
| walmart.ca | 37,5 M | 91,8 % | Recherche naturelle 34,9 % |
| costco.ca | 27,3 M | 89,1 % | Recherche naturelle 41,4 % |
| canadiantire.ca | 23,2 M | 95,2 % | Recherche naturelle 45,1 % |
| bestbuy.ca | 22,2 M | 93,6 % | Recherche naturelle 37,6 % |

Classement Similarweb des sites marchands au Canada (sept. 2026) : 1. amazon.ca, 2. walmart.ca, 3. **temu.com**, 4. costco.ca, 5. canadiantire.ca [T11][T12]. Ces chiffres mesurent des visites, pas des ventes : aucune part de marché d'Amazon au Canada n'est publiée en accès libre.

**Québec (NETendances 2025, n = 856 cyberacheteurs)** [T10]

| Marchand | Part des cyberacheteurs ayant acheté en 2025 |
|---|---|
| Amazon | **83 %** |
| Walmart | 30 % (+6 pts, plus forte hausse) |
| Temu | 25 % |
| Costco | 23 % |
| Shein | 18 % |
| Canadian Tire | 17 % |
| Best Buy | 12 % |
| Home Depot / eBay | 7 % chacun |

Répartition moyenne des dépenses en ligne : **Amazon 54 %**, marchands québécois 14 %, canadiens hors Québec 17 %, étrangers 15 %. 63 % des cyberacheteurs font au moins la moitié de leurs achats en ligne sur Amazon ; 11 % n'y achètent jamais.
Freins : frais de livraison 57 %, ne pas voir le produit 45 % ; « produits électroniques » 3e catégorie achetée en ligne (36 %), « maison ou décoration » 2e (42 %).

**Magasin ou web** : 58 % des achats se font en magasin, 39 % en ligne (Leger pour RCC, juillet 2026) [T8] ; part prévue du budget des fêtes en ligne : 42 % (39 % en 2025) ; 62 % veulent voir et toucher [T7].
**Réflexes dans les requêtes** [A][B] : Costco (« robot vacuum and mop costco canada », « dehumidifier for basement costco », « ninja creami canada costco », « friteuse à air ninja double costco », « couverture chauffante costco sans fil »), Canadian Tire (« best space heater canadian tire », « carbon monoxide detector canadian tire », « best snow blower canadian tire »), Home Depot, Walmart, Best Buy, Rona et **Canac** (Québec).

### 2.2 Prix et confiance

- Budget en baisse (911 $, −6,5 %), 43 % attendent les soldes [T7] ; pages « under $100 / $200 » demandées [A].
- **« reddit » complète 32 graines sur 60** et « reviews » 22 [A] : les Canadiens cherchent des avis d'usagers, pas des listes génériques. 77 % des cyberacheteurs québécois sont influencés par les avis [T10].
- Références citées dans les requêtes : **Consumer Reports** (6 graines : « best air fryer canada consumer reports », « best robot vacuum canada consumer reports »…) [A] ; **Protégez-Vous** au Québec (14 suggestions dans 5 graines : friteuse à air, humidificateur, déshumidificateur, purificateur, thermopompe, laveuse, lave-vaisselle) [B].
- Critères propres au Canada dans les requêtes : **froid** (« best doorbell camera canada cold weather », « best smart lock for canadian winters »), **sous-sol** (« for basement », « 50 pint », « with drain hose / pump »), **plinthes** (« for baseboard heaters »), **sans abonnement**, **non toxic / no teflon** pour les friteuses [A].

### 2.3 Marques (Google Trends Canada, moyenne 12 mois, indice relatif au sein de chaque lot) [GT]

| Famille | Indices | À retenir |
|---|---|---|
| Aspirateurs | Dyson 60,5 · Bissell 46,1 · Shark 26,4 · Tineco 22,6 · Hoover 5,0 | **Bissell** et **Tineco** pèsent bien plus qu'en Europe |
| Café | De'Longhi 52,4 · Jura 23,5 · Breville (espresso) 17,9 · Ninja (espresso) 7,1 · Philips (espresso) 5,2 ; hors lot : **Nespresso 41,6 % et Keurig 18,3 % d'« air fryer »** | **Breville** (absent de nos sélections) et les machines à capsules comptent |
| Thermostats | **ecobee 62,1** · Honeywell 35,3 · Nest 27,6 · **Mysa 17,9** (pic 18–24/10/2026) · **Sinopé 10,4** | ecobee (Toronto) et Mysa (canadienne) dans le top 5 ; Sinopé associé à Hilo et Hydro-Québec dans les requêtes [B] |
| Sonnettes / caméras | Wyze 58,6 · Arlo 57,8 · Ring (doorbell) 48,4 · Eufy (doorbell) 12,8 · Google Nest (doorbell) 10,0 | Wyze et Arlo : noms de marque larges, comparaison approximative |
| Friteuses, robots | Lots en échec (429). Autocomplétion : Ninja (dont « double » chez Costco), Cosori (« ninja vs cosori »), Instant (« best instant pot air fryer canada »), **Ricardo** au Québec ; robots : Shark, Dreame, Eufy, Bissell, Roborock, Ecovacs [A][B] | À mesurer de nouveau |

**Marques canadiennes ou très présentes au Canada, attestées par les requêtes** [A][B] : ecobee (Toronto, propriété de Generac depuis 2021 [T23]), Mysa (« 🍁 Proudly Canadian », thermostats pour plinthes, thermopompes murales et planchers chauffants [T22]), Sinopé (« thermostat sinopé hilo / rona / hydro québec » [B]), Hilo (licence Hydro-Québec [T21]), **Danby** (climatiseurs de fenêtre et portatifs), **Napoléon** (foyers électriques), **Weiser** (serrures, « weiser halo »), **Grizzl-E** et **FLO** (bornes), **Kidde** (détecteurs), **Ricardo** (« friteuse à air chaud ricardo » [B]), Honeywell et Vicks (humidificateurs), Levoit, Winix, Dreo (chauffage, +110 %) [GTR].

### 2.4 Moments d'achat

| Moment | Date 2026-2027 | Preuve |
|---|---|---|
| Prime Big Deal Days | 6–7/10/2026 (passé) | Amazon Canada [T13] |
| **Black Friday / Vendredi fou** | **27/11/2026** ; Cyber Monday 30/11 | 88 % le classent dans leur top 3, 52 % en 1er ; ≈ 29 % des budgets chacun [T7] ; Québec : 44 % des cyberacheteurs (36 % en 2024) [T10] ; « space heater black friday » +250 % [GTR] |
| Pic hiver | 23/11 → 13/12 | humidifier (7–13/12), space heater et heated blanket (30/11–6/12), snow blower (7–13/12 ; au Québec « souffleuse à neige » 16–22/11) [GT][GTQ] |
| Boxing Day / Boxing Week | 26/12 → fin décembre | Québec : 23 % (17 % en 2024) [T10] ; « boxing day deals canada / 2026 » [A] |
| Fêtes → Nouvel An | 21/12 → 03/01 | Pic annuel d'« air fryer » (28/12–3/01), Ninja Creami et Slushi, Breville, stand mixer (21–27/12), détecteurs de CO (28/12–3/01) [GT] |
| Printemps | avril–mai | pressure washer (17–23/05), robot lawn mower (faible) [GT] |
| **Déménagement au Québec** | 1er juillet | Tradition des baux du 1er juillet ; les logements montréalais sont rarement équipés d'électroménagers ; plus de 700 000 ménages québécois déménagés en 2009 (Hydro-Québec, cité) [T24] |
| Pic été | 28/06 → 18/07 | dehumidifier, portable et window AC (28/06–4/07), air purifier (12–18/07) ; « Jours d'offres Prime » : 31 % des cyberacheteurs québécois en 2025 [GT][T10] |
| Rentrée | août | marché de plus de 4,5 G$ [T9] |

---

## 3. Catégories qui marchent et qui montent

### 3.1 Demande relative au Canada (Google Trends, moyenne 12 mois, « air fryer » = 100) [GT]

| Terme | Indice | Pic | Catégorie Homenura |
|---|---|---|---|
| bbq | 145 | 28/06–4/07 | barbecues-connectes (élargir) |
| air fryer | **100** | 28/12–3/01 | airfryers |
| microwave | 53 | stable | micro-ondes |
| nespresso | 42 | 23–29/11 | cafetieres |
| blender | 39 | 23–29/11 | blenders |
| kettle | 26 | mai | absente |
| heat pump | 25 | 4–10/10/2026 (semaine de l'annonce fédérale du 08/10 [T20]) | hors catalogue (installateur) |
| instant pot | 25 | 28/12–3/01 | multicuiseurs |
| **humidifier** | **20** | 7–13/12 | humidificateurs |
| keurig | 18 | juillet | cafetieres |
| coffee maker | 16 | 21–27/12 | cafetieres |
| air purifier | 16 | 12–18/07 | purificateurs-air |
| espresso machine | 15 | 23–29/11 | cafetieres |
| **snow blower** | **14** | 7–13/12 | **absente** |
| rice cooker | 14 | 23–29/11 | absente |
| pressure washer | 13 | 17–23/05 | absente |
| dehumidifier | 11 | 28/06–4/07 | deshumidificateurs |
| cordless vacuum | 9 | 23–29/11 | aspirateurs-balais |
| robot vacuum | 8,5 | 23–29/11 | aspirateurs-robots |
| security camera | 8,5 | 16–22/11 | cameras |
| ninja creami | 7,4 | 21–27/12 | absente (prévue en STRATEGIE § 4) |
| portable air conditioner | 7,2 | 28/06–4/07 | climatiseurs-mobiles |
| smoke detector | 7,2 | 28/12–3/01 | detecteurs-fumee-co |
| ev charger | 6,5 | mars | bornes-recharge-ve |
| ecobee | 6,1 | 30/11–6/12 | thermostats |
| toaster oven | 5,2 | 23–29/11 | absente |
| electric fireplace | 4,4 | 9–15/11 | **absente** |
| smart lock | 4,3 | novembre | serrures-connectees |
| carbon monoxide detector | 4,2 | 28/12–3/01 | detecteurs-fumee-co |
| space heater | 3,4 | 30/11–6/12 | chauffages-appoint (le terme de tête est « electric heater », 1er associé [GTR]) |
| smart thermostat / window AC | 3,0 | plat / 28/06–4/07 | thermostats / absente |
| smart plug | 2,9 | 23–29/11 | prises-connectees |
| heated blanket | 2,7 | 30/11–6/12 | absente |
| steam mop | 2,6 | 23–29/11 | nettoyeurs-vapeur |
| ninja slushi | 1,8 | 21–27/12 | absente |
| video doorbell | 1,4 | novembre | sonnettes-video (les gens tapent « ring doorbell », « doorbell camera ») |
| pellet grill / pool cleaner | 1,5 / 1,3 | — | barbecues / robots-piscine |
| robot lawn mower | **0,5** | avril | tondeuses-robots |

Les termes génériques (microwave, blender, kettle, bbq) mêlent achat et usage ; ils indiquent une demande large, pas un volume d'achat.

### 3.2 Catégories propres au Canada (preuves)

| Catégorie | Preuve | Priorité |
|---|---|---|
| **Souffleuses à neige** (essence, électrique, **à batterie** : EGO, Ryobi, Toro, Ariens, Honda) | Indice 14, pic décembre ; « best snow blower canada for the money », « électrique / à batterie / ego » [GT][A][B] | Haute, avant le 15/11 |
| **Humidificateurs** (chambre, bébé, grande pièce, **pour fournaise**) | Indice 20 ; « humidifier for furnace », « furnace humidifier » (associé n° 6) ; Alberta et Ontario en tête [GT][GTR][A] | Haute (déjà au catalogue, à réorienter) |
| **Thermostats pour plinthes électriques** (Mysa, Sinopé, Hilo) | 54 % des ménages québécois chauffés par plinthes [T3] ; « best smart thermostat for baseboard heaters canada » [A] | Haute (dans la catégorie thermostats) |
| **Foyers électriques** (encastrable, meuble TV, mural) | Indice 4,4, pic 9–15/11 ; « electric fireplace costco / canadian tire », « foyer électrique napoléon » [GT][A][B] | Moyenne-haute, novembre |
| **Climatiseurs de fenêtre** | Indice 3,0 ; « window air conditioner for side sliding windows », « climatiseur de fenêtre vertical », Danby, Midea [A][B] | Moyenne, mai–juillet |
| **Grille-pain fours / fours friteuses** | Indice 5,2 ; « best air fryer toaster oven canada », « air fryer vs toaster oven » [GT][A] | Moyenne (hub cuisine) |
| Machines à capsules (Nespresso, Keurig) et bouilloires | Indices 42, 18, 26 [GT] | Moyenne (Noël) |
| **Couvertures et jetés chauffants** | « best heated blanket canada », « heated throw vs heated blanket », « is a heated blanket worth it » [A] | Moyenne, novembre |
| Ninja Creami / Slushi | Indices 7,4 / 1,8 ; « ninja creami canada costco », « ninja slushie canada costco price » [GT][A] | Moyenne, Noël |
| Filtration d'eau (osmose inverse) | +4 350 %, envolée [GTR] | À étudier |
| Échangeur d'air (VRC, Québec) | Indice voisin de « chaufferette » au Québec [GTQ] | Faible (installateur) |

### 3.3 Catégories du site peu pertinentes ici

| Catégorie | Raison | Source |
|---|---|---|
| Têtes thermostatiques (dans « thermostats ») | Chaudières à radiateurs : 7 % des ménages | [T3] |
| tondeuses-robots | Indice 0,5 ; seule requête vivante : « without perimeter wire canada » | [GT][A] |
| robots-piscine | Indice 1,3, saison courte | [GT] |
| barbecues **connectés** | Le marché est le **BBQ au propane** (indice 145, « best bbq canada propane ») ; « pellet grill » 1,5 | [GT][A] |
| lave-linge / lave-vaisselle / frigos connectés | Gros électroménager acheté chez les enseignes (« laveuse sécheuse liquidation », Costco, Bosch 300) | [B] |
| solaire-balcon, volets-stores, interphones, fers-centrales-vapeur | **Non mesurés** ; aucune source canadienne lue sur la légalité du solaire « plug-in » → ne pas promouvoir avant vérification | — |

---

## 4. Demande de recherche

### 4.1 Familles de mots-clés (formulations réelles) [A][B]

| Famille | Exemples relevés | Intention |
|---|---|---|
| « best X canada (2026) » | best air fryer canada 2026, best robot vacuum canada, best smart thermostat canada | Achat, liste |
| + « reddit » / « reviews » / « consumer reports » | best space heater canada reddit, best espresso machine canada reddit | Preuve sociale |
| + enseigne | robot vacuum and mop costco canada, best snow blower canadian tire, best buy canada smart lock | Achat local |
| « for + usage / pièce » | best dehumidifier for basement canada, best humidifier for bedroom, best air purifier canada for wildfire smoke, best robot vacuum canada for pet hair | Usage |
| Critère climat | best doorbell camera canada cold weather, best smart lock for canadian winters | Contrainte locale |
| Budget | best air fryer under $100, best cordless vacuum canada under $200, best budget toaster oven canada | Prix |
| Duels | ecobee vs nest, ecobee vs mysa, air fryer vs convection oven, air fryer vs toaster oven, dyson vs shark cordless vacuum, ninja vs cosori air fryer, ninja vs breville espresso machine, heated throw vs heated blanket, heat pump vs furnace | Choix |
| Aides | smart thermostat rebate ontario / alberta / bc / manitoba / enbridge, free smart thermostat ontario, heat pump rebate canada, thermostat intelligent hydro-québec gratuit | Info → achat |
| Problèmes | smoke detector flashing red, smoke detector chirping, carbon monoxide detector beeping, how to descale humidifier (+3 200 %), thermostat hilo problème, détecteur de fumée qui part sans raison | Dépannage |
| Santé | best air fryer canada non toxic, no teflon | Critère |

### 4.2 Les 36 requêtes prioritaires pour /ca (et 10 pour un futur fr-CA)

| # | Requête | Intention | Page cible |
|---|---|---|---|
| 1 | best air fryer canada 2026 | Achat | /ca airfryers |
| 2 | best air fryer canada non toxic / no teflon | Critère santé | section + FAQ airfryers |
| 3 | best air fryer canada for family of 4 | Usage | section capacité |
| 4 | best air fryer under $100 | Budget | page budget |
| 5 | air fryer vs convection oven / vs toaster oven | Duel | duel |
| 6 | ninja vs cosori air fryer | Duel marques | duel |
| 7 | best air fryer toaster oven canada | Format nord-américain | nouvelle page |
| 8 | best humidifier canada / for bedroom / for large room | Achat, usage | humidificateurs |
| 9 | humidifier for furnace | Produit canadien | section |
| 10 | how to clean / descale a humidifier | Problème | page problème |
| 11 | best dehumidifier for basement canada (50 pint, drain hose, pump) | Usage | deshumidificateurs |
| 12 | best space heater canada / best electric space heater canada | Achat | chauffages-appoint |
| 13 | oil filled radiator heater | Type | section |
| 14 | best heated blanket canada / heated throw vs heated blanket | Achat, duel | nouvelle page |
| 15 | electric fireplace (insert, tv stand) | Achat | nouvelle page |
| 16 | best snow blower canada (electric, battery) | Achat | nouvelle page |
| 17 | best smart thermostat canada | Achat | thermostats |
| 18 | ecobee vs nest / ecobee vs mysa | Duel | duels |
| 19 | best smart thermostat for baseboard heaters canada | Usage | section plinthes |
| 20 | smart thermostat rebate ontario / alberta / bc | Aides | hub aides |
| 21 | carbon monoxide detector beeping / smoke detector flashing red / chirping | Problème | pages problème |
| 22 | best video doorbell canada without subscription | Critère | sonnettes-video |
| 23 | best doorbell camera canada cold weather | Climat | section |
| 24 | best smart lock for canadian winters | Climat | serrures-connectees |
| 25 | best security camera canada / outdoor / solar | Achat | cameras |
| 26 | best robot vacuum canada for pet hair | Usage | aspirateurs-robots |
| 27 | robot vacuum and mop costco canada | Enseigne | section « where to buy » |
| 28 | best cordless vacuum canada under $200 / for pet hair | Budget, usage | aspirateurs-balais |
| 29 | dyson vs shark cordless vacuum | Duel | duel |
| 30 | best espresso machine canada / best coffee maker canada with grinder | Achat | cafetieres |
| 31 | ninja creami canada / ninja slushi canada | Marque | guide cadeaux |
| 32 | best air purifier canada for wildfire smoke / for pets | Saison, usage | purificateurs-air |
| 33 | best portable air conditioner canada / window air conditioner for side sliding windows | Été | climatiseurs |
| 34 | best ev charger canada / level 2 charger installation cost | Achat, info | bornes-recharge-ve |
| 35 | best water leak detector canada (and shut off valve) | Achat | detecteurs-fuite-eau |
| 36 | best black friday deals canada / boxing day deals canada | Saison | hubs deals |
| Q1 | meilleure friteuse à air (protégez vous) | Achat, confiance | fr-CA |
| Q2 | meilleure balayeuse sans fil animaux / qualité prix | Achat | fr-CA |
| Q3 | déshumidificateur sous-sol 50 pintes | Usage | fr-CA |
| Q4 | meilleure chaufferette électrique / d'appoint | Achat | fr-CA |
| Q5 | thermostat intelligent hydro-québec gratuit / hilo | Aides | fr-CA |
| Q6 | thermostat sinopé / mysa (plinthes) | Achat | fr-CA |
| Q7 | borne de recharge niveau 2 / grizzl-e | Achat | fr-CA |
| Q8 | meilleure souffleuse à neige à batterie | Achat hiver | fr-CA |
| Q9 | climatiseur de fenêtre vertical / portatif sans tuyau | Été | fr-CA |
| Q10 | détecteur de fumée qui part sans raison / monoxyde obligatoire | Problème, règle | fr-CA |

### 4.3 Formats qui gagnent
SERP non relevées (§ 0). D'après les requêtes : (1) **« best X in Canada (2026) »** avec « Updated » daté ; (2) réponses d'usagers (« reddit ») → section « What owners complain about » sourcée, pas de faux avis ; (3) **« where to buy in Canada »** (Costco, Canadian Tire, Best Buy, Amazon.ca) ; (4) duels ; (5) « for basement / bedroom / pet hair / baseboard heaters » ; (6) budget en dollars canadiens ; (7) pages aides par province ; (8) pages problème. À confirmer avec 15 SERP google.ca.

---

## 5. Concurrence

### 5.1 Acteurs canadiens et étrangers lus par les Canadiens

| Acteur | Ce qu'il fait bien | Faiblesse exploitable | Preuve |
|---|---|---|---|
| **Reddit** | Avis d'usagers, réputation de sincérité | Fils dispersés, vieux, sans tableau | « reddit » dans 32 graines sur 60 [A] |
| **Consumer Reports** (États-Unis) | Notoriété : cité dans 6 graines « best X canada consumer reports » | Site américain (91 % de trafic américain) ; ≈ 4,9 % de son trafic vient du Canada (estim.) | [A][T12] |
| **Protégez-Vous** (Québec) | Référence citée dans les requêtes québécoises (friteuse, humidificateur, thermopompe, laveuse) ; ≈ 820 000 visites sur 3 mois, 94,7 % Canada, mots-clés de tête dont « déshumidificateur » (estim.) | Contenu et modèle d'accès non vérifiés (site bloqué, HTTP 403) | [B][T12] |
| **RTINGS** | Comparatifs chiffrés d'aspirateurs (sans fil, parquets) ; ≈ 7,7 % de son trafic au Canada (estim.) | Prix et fiches complètes réservés aux membres (tarif affiché en euros) ; aucune autre catégorie maison sur la page lue | [T12] |
| **RedFlagDeals** | Communauté de bons plans : ≈ 7,5 M visites sur 3 mois, 91 % Canada, 66 % en accès direct (estim.) | Pas de comparatifs | [T12][A] |
| **François Charron** (Québec) | Chroniqueur techno : guides d'achat, maison intelligente, subventions (« batteries résidentielles : 5 000 $ ») | Presque rien sur l'électroménager | [T27] ; jugé proche de Protégez-Vous par Similarweb |
| Enseignes (Costco, Canadian Tire, Best Buy, Home Depot, Walmart, Rona, Canac) | Stock, retrait en magasin, réflexe de recherche | Guides centrés sur leur assortiment | [A][B][T10] |

### 5.2 vergleich.org au Canada : présence, catégories, mots-clés, parcours (demande de Miguel)

**Présence : aucune.** Pied de page du réseau VGL Publishing : vergleich.org, meilleurs.fr, mejoraelige.es, miglioreconsiglio.it, pickbest.co.uk, bestpick.com ; **pas de .ca** [T26]. bestpick.com : États-Unis 72,4 %, Allemagne 27,6 %, **Canada absent**, 36 % de recherche naturelle sur ordinateur, 60 mots-clés seulement (estim. Similarweb, sept. 2026) [T12].

**Catégories** : 15 rubriques calquées sur **l'arbre des rayons Amazon** (Appliances, Home & Kitchen, Patio Lawn & Garden, Tools & Home Improvement…) ; **248 URL**, une page par type de produit [T26]. On y trouve des restes du catalogue allemand : raclette-grill, fritz-repeater, thermostatic-radiator-valve, heat-pump-dryer, stove-fan, infrared-heater, electric-radiators. **Aucune page** : smart thermostat, video doorbell, smart lock, snow blower, window air conditioner, electric fireplace, humidificateur de fournaise. Une seule page nord-américaine : basement-dehumidifier.

**Mots-clés** : slugs « type de produit » (« air-fryer », « dual-air-fryer », « robot-vacuum-and-mop ») ; pages marque (roborock, ecovacs, delonghi, philips coffee machine) ; **1 seule page budget** (tablet-under-200), 1 « without » (robot-mower-without-boundary-wire), **0 page « vs »**. Titre type : « air fryer test or comparison » suivi de « The best 16 for 2026 » ; H1 « Best air fryers 2026 » [T26]. Rythme : 139 URL modifiées en octobre 2026 et 35 le 01/11 (lots automatiques).

**Parcours** (page /air-fryer/, lue le 01/11/2026) [T26] :
1. Accueil → rubrique « Home & Kitchen » → page produit.
2. « Updated: 10/27/2026 », **aucun auteur**, 16 produits classés, badges « Comparison winner », « Best value », « Bestseller », « 300+ purchases last month » (donnée Amazon), « Our rating 9,9 ».
3. Bouton unique **« View price → »** sans nom de marchand ; images servies par le serveur d'images d'Amazon ; aucune devise.
4. Guide d'achat générique (5 H3 : bénéfices, fonctions, recettes, entretien, marques) contenant **« [insert brand name] » non rempli** ; **pas de FAQ**.
5. Sortie : 15 « Similar air fryer comparisons », surtout hors sujet (batteur, raclette, centrifugeuse, micro-ondes ; une seule friteuse double).

**Adaptation pour /ca** :

| vergleich.org fait | Version Homenura /ca | Pourquoi ici |
|---|---|---|
| Rayons Amazon | Nos 5 sections + hub cuisine, avec un hub **« Winter »** (humidifier, heaters, snow blowers, heated blankets, fireplaces, CO) et un hub **« Rebates »** | L'hiver et les aides structurent la demande [GT][A] |
| Longue traîne « type de produit » | Déclinaisons **attestées au Canada** : for basement, for baseboard heaters, for wildfire smoke, for pet hair, cold weather, no subscription, under $100/$200, non toxic, family of 4 (≥ 5 produits distincts) | Chaque famille vient de [A] |
| 0 « vs », 0 problème | **En faire notre différence** : ecobee vs nest/mysa, air fryer vs toaster oven, dyson vs shark, ninja vs cosori ; CO beeping, smoke detector flashing red | Demande réelle, rien en face chez VGL |
| « View price » anonyme, images et « purchases last month » d'Amazon | Boutons nommés (Amazon.ca d'abord, puis enseignes canadiennes si programme), **jamais** de donnée ou d'image Amazon sans API | Les requêtes contiennent les enseignes ; règle Amazon |
| Note « 9,9 » sans méthode, pas d'auteur | Auteur nommé, méthode documentaire, citations datées de Consumer Reports / Protégez-Vous / Santé Canada | Les Canadiens cherchent « reddit » et « consumer reports » |
| Catalogue traduit de l'allemand | Modèles nord-américains 120 V, marques canadiennes | bestpick.com montre l'erreur à ne pas répéter |
| « Updated » + mises à jour en lots | « Updated » réel + journal ; revue mensuelle des 15 pages /ca principales | Les requêtes portent l'année (« 2026 » dans 19 graines) [A] |
| Maillage « similar comparisons » | Maillage **dans la grappe** (humidifier → dehumidifier → air purifier ; heater → heated blanket → fireplace) | Garder le lecteur jusqu'au clic |

---

## 6. Recommandations pour Homenura au Canada, classées par impact

### 6.1 Les 10 actions

| # | Action | Impact | Effort | Quand | Preuve |
|---|---|---|---|---|---|
| 1 | **Rendre /ca canadien** : modèles nord-américains 120 V (marques d'homologation reconnues au Canada), retirer « French market », « European warranties », têtes thermostatiques ; dollars canadiens ; titres « Best X in Canada (2026) » | Très fort | Moyen | Avant le 15/11 | [T29][T3][T25][A] |
| 2 | **Vérifier la monétisation** : un clic /ca → amazon.fr arrive-t-il sur la bonne fiche amazon.ca et est-il payé par Global Earning ? Sinon liens de recherche amazon.ca ; les ASIN nord-américains diffèrent des ASIN européens | Très fort | Faible | Cette semaine | [T29] ; même alerte que pour la Pologne |
| 3 | **Hub « Winter » avant le 15/11** : humidifier (dont furnace), space/electric heater (oil-filled), heated blanket, electric fireplace, **snow blower**, CO & smoke detectors | Fort | Moyen | 15/11 → 13/12 | Pics [GT] ; « black friday » +250 % [GTR] |
| 4 | **Black Friday / Boxing Week /ca** à URL stable : 27/11, 30/11, 26/12 ; sélection Costco-compatible (Ninja double, Creami, Slushi, robot laveur) | Fort | Faible | Avant le 20/11 | [T7][T10][A] |
| 5 | **Thermostats repensés + hub « Rebates » par province** (Ontario HRSP, Peak Perks, Enbridge, Alberta, BC, Manitoba ; Hilo et LogisVert au Québec) | Fort | Moyen | Novembre | [T3][T18][T19][T20][T21][A] |
| 6 | **8 duels** : ecobee vs nest, ecobee vs mysa, air fryer vs toaster oven, air fryer vs convection oven, dyson vs shark, ninja vs cosori, heated throw vs heated blanket, heat pump vs furnace (explicatif) | Fort | Moyen | Nov.–déc. | [A] ; format gagnant du site [GSC] |
| 7 | **Pages problème au vocabulaire canadien** : CO detector beeping, smoke detector flashing red / chirping, humidifier descale, dehumidifier not collecting water (à vérifier) | Moyen-fort | Faible | Décembre | [A][GTR] |
| 8 | Encadré **« Where to buy in Canada »** (Amazon.ca, Costco, Canadian Tire, Best Buy, Walmart, Home Depot) puis boutons rémunérés dès qu'un programme est validé | Moyen-fort | Moyen | Décembre → janvier | [T10][T11][A] |
| 9 | Déclinaisons attestées (for basement, for baseboard heaters, cold weather, no subscription, under $100/$200, non toxic) avec ≥ 5 produits | Moyen | Moyen | Janvier → mars | [A] |
| 10 | Préparer l'été dès avril : window et portable AC, dehumidifier, air purifier « wildfire smoke », BBQ propane, pressure washer | Moyen | Moyen | Avril → juin | [GT][GTR] |

### 6.2 Ordre des catégories à mettre en avant sur /ca (novembre → février)
1. **Friteuses** (cœur, pic 28/12–3/01 ; « non toxic », « family of 4 », fours friteuses) ;
2. **Humidificateurs** ;
3. **Café** (super-automatiques De'Longhi/Jura/Philips, Breville, Nespresso, Keurig ; cadeaux) ;
4. **Chauffages d'appoint** (+ couvertures chauffantes, foyers électriques) ;
5. **Thermostats** (air pulsé + plinthes, aides) ;
6. **Aspirateurs** balais et robots (Dyson, Bissell, Shark, Tineco ; robot laveur Costco) ;
7. **Détecteurs de fumée et de CO** ;
8. **Souffleuses à neige** (nouvelle) ;
9. Purificateurs d'air (« pets » maintenant, « wildfire » en été) ;
10. Caméras, sonnettes (« no subscription », « cold weather »), serrures ;
11. Bornes de recharge niveau 2 ;
12. Ninja Creami / Slushi, Instant Pot, cuiseurs à riz, bouilloires, blenders (guide cadeaux).
Été : climatiseurs (fenêtre + portatif), déshumidificateurs, purificateurs, BBQ.

### 6.3 Catégories à ajouter (ordre)
Snow blowers · Electric fireplaces · Heated blankets & throws · Air fryer toaster ovens · Window air conditioners · Ninja Creami / Slushi · Kettles · Water filtration (à étudier) · BBQ au propane (élargir « barbecues-connectes ») · Pressure washers.

### 6.4 Marques et types de modèles à intégrer aux sélections
- **Thermostats** : ecobee, Honeywell Home, Google Nest (air pulsé) ; **Mysa, Sinopé** (plinthes, planchers) ; mention Hilo pour les clients d'Hydro-Québec [GT][T22][T21].
- **Aspirateurs** : Dyson, Shark, **Bissell**, **Tineco**, Hoover ; robots : Shark, Dreame, Eufy, Roborock, Ecovacs [GT][A][B].
- **Café** : De'Longhi, Jura, **Breville**, Philips, Ninja ; Nespresso, Keurig [GT].
- **Friteuses** : Ninja (doubles), Cosori, Instant (Vortex), Philips ; Ricardo pour le Québec [A][B].
- **Climat** : Honeywell, Vicks, Levoit, Dyson (humidificateurs) ; Danby, Midea (climatiseurs fenêtre/portatifs) ; Dreo, De'Longhi (radiateurs à huile) ; Winix, Levoit (purificateurs) [A][B][GTR].
- **Sécurité** : Ring, Arlo, Wyze, Eufy, Google Nest ; Kidde (détecteurs) ; Weiser, Schlage, Yale (serrures) [GT][A][B].
- **Hiver et extérieur** : EGO, Ryobi, Toro, Ariens, Honda (souffleuses) ; Napoléon (foyers) ; Grizzl-E, FLO (bornes) [A][B].

### 6.5 Adaptations du contenu et du SEO
- Titres et H1 : « Best [produit] in Canada (2026) » ; « Canada » dans le titre est un vrai mot-clé, pas une décoration [A].
- Vocabulaire nord-américain : « space heater / electric heater », « doorbell camera », « furnace », « baseboard heaters », « basement », « pint » (déshumidificateurs), « BTU » (climatiseurs) [A][B].
- Sources citées : Consumer Reports, Protégez-Vous, Santé Canada, l'ESA (homologation), les programmes d'aide officiels ; pas Que Choisir ni Which?.
- Électricité : calculateur « cost to run » où le lecteur saisit son prix du kWh (les tarifs diffèrent par province ; tarifs officiels non lus ici).
- hreflang : /ca = en-CA ; garder /us séparé, Canada ≠ États-Unis [A].
- Mesure : Search Console filtre pays = Canada ; panel de 15 SERP google.ca chaque mois.

### 6.6 Affiliation au-delà d'Amazon (à vérifier, rien n'a pu être lu)
Amazon.ca reste la base : site marchand n° 1 en visites [T11] et 83 % des cyberacheteurs québécois [T10] ; « jusqu'à 10 % » de commission selon les catégories [T14]. Mais sa part recule au Québec et les requêtes citent Costco, Canadian Tire, Best Buy, Walmart et Home Depot [A][B][T10]. À vérifier par Miguel : programmes de Best Buy Canada, Walmart Canada, Canadian Tire, Home Depot Canada, et des marques en direct (SharkNinja Canada, Dyson Canada, Breville, ecobee, Mysa). Awin a un territoire Canada, mais sa page ne cite qu'Etsy Canada [T28]. Costco n'apparaît que comme « où acheter ».

### 6.7 Une version franco-canadienne (Québec) vaut-elle le coup ?

| Pour | Contre |
|---|---|
| 7,8 M de Canadiens ont le français comme première langue officielle (21,4 %) ; 6,5 M de Québécois parlent surtout français à la maison [T6] | 46,4 % des Québécois sont bilingues [T6] et tapent souvent l'anglais : « air fryer » 72 contre « friteuse à air » 2,5 ; « robot vacuum » 24 contre « aspirateur robot » 15 et « balayeuse robot » 3 [GTQ] |
| Vocabulaire québécois distinct, absent de /fr : balayeuse, chaufferette, souffleuse, laveuse-sécheuse, thermopompe, climatiseur de fenêtre ; « friteuse sans huile » (France) = 0 au Québec [B][GTQ] | Amazon plus faible : 54 % des dépenses en ligne, Prime 43 % [T10] |
| Demande francophone propre sur l'énergie : « thermopompe » ≈ 4 × « heat pump », « borne de recharge » très forte (pic 4–10/10/2026) ; ZEV 30,9 % des immatriculations [GTQ][T5] | Budget des fêtes le plus bas (664 $) [T7] ; magasins spécialisés du Québec = 14,6 % du secteur canadien [T2] |
| Plinthes électriques dans 54 % des foyers ; Hilo, Sinopé, Mysa ; aides LogisVert [T3][T21][T20] | Thermopompes et bornes s'achètent souvent avec un installateur : commission Amazon incertaine |
| Peu de concurrents francophones repérés : Protégez-Vous (seule référence citée dans les requêtes), François Charron hors électroménager ; SERP à relever [B][T12][T27] | Coût d'une 11e langue (dictionnaires, FAQ, titres, tests) |
| **Les lecteurs fr-CA sont aujourd'hui envoyés vers /fr (France, euros, amazon.fr)** [T29] | — |

**Verdict** : **oui, en 2e phase**, quand /ca aura prouvé que les clics canadiens convertissent (action 2). Format conseillé : une version **fr-CA** propre (pas /fr), d'abord sur **12 à 15 pages** où la demande francophone est distincte : thermopompe (explicatif + aides), thermostat intelligent (Hilo, Sinopé, Mysa), borne de recharge niveau 2, déshumidificateur sous-sol, humidificateur, chaufferette, souffleuse à neige, balayeuse sans fil et robot, climatiseur de fenêtre et portatif, détecteurs de fumée et de CO, friteuse à air (titre « friteuse à air (air fryer) »), Vendredi fou. **Tout de suite**, sans attendre : décider où envoyer un visiteur fr-CA (aujourd'hui /fr, inadapté) ; ne jamais afficher de « version française bientôt ».

### 6.8 Ce que seul Miguel peut faire
1. Vérifier dans Partenaires Amazon que des clics venus du Canada (pays « CA ») sont payés via Global Earning.
2. Relever dans son Chrome : top 50 amazon.ca « Home & Kitchen » et « Heating, Cooling & Air Quality », Best Buy « Best sellers », 15 SERP google.ca.
3. Ouvrir les programmes d'affiliation canadiens (§ 6.6).
4. Choisir l'auteur affiché pour /ca (et plus tard fr-CA).

---

## 7. Sources

Relevés propres (fichiers de travail, 01/11/2026) :
- [A] Autocomplétion Google Canada (en) : `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=ca&q=…`, 60 graines.
- [B] Autocomplétion Google Canada (fr) : même point d'accès, `hl=fr&gl=ca`, 43 graines.
- [GT] [GTQ] [GTR] Google Trends, géo CA et CA-QC, « 12 derniers mois », recherche web : https://trends.google.com/trends/explore?geo=CA
- [GSC] Search Console homenura.com, 28 j au 28/10/2026 : `docs/croissance/seo-etudes/gsc-2026-10-30.md`.

Pages lues :
- [T1] Statistique Canada, « Retail trade, August 2026 », 23/10/2026 : https://www150.statcan.gc.ca/n1/daily-quotidien/261023/dq261023a-eng.htm
- [T2] Statistique Canada, tableau 20-10-0056-01 (ventes au détail et e-commerce, par province et SCIAN), CSV : https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601 — https://www150.statcan.gc.ca/n1/tbl/csv/20100056-eng.zip
- [T3] Statistique Canada, tableau 38-10-0286-01 « Primary heating systems and type of energy », 2023 : https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3810028601
- [T4] Statistique Canada, « Canadian Internet Use Survey, 2022 », 20/07/2023 : https://www150.statcan.gc.ca/n1/daily-quotidien/230720/dq230720b-eng.htm
- [T5] Statistique Canada, tableau 20-10-0024-01 « New motor vehicle registrations » (archivé, données 2024) : https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010002401
- [T6] Statistique Canada, Recensement 2021, langues, 17/08/2022 : https://www150.statcan.gc.ca/n1/daily-quotidien/220817/dq220817a-eng.htm
- [T7] Retail Council of Canada × Leger, 2026 Holiday Shopping Survey, 19/10/2026 : https://www.retailcouncil.org/research/retail-council-of-canada-releases-its-9th-annual-rcc-x-leger-2026-holiday-shopping-survey/
- [T8] RCC × Leger, Canadian Shopper Sentiment Study, 08/07/2026 : https://www.retailcouncil.org/research/the-canadian-shopper-sentiment-study/
- [T9] RCC × Caddle, Back-to-School 2026 et « Growing AI Influence in Shopping » (26/03/2026) : https://www.retailcouncil.org/research/back-to-school-2026-caddle-x-rcc-consumer-research/ — https://www.retailcouncil.org/research/growing-ai-influence-in-shopping/
- [T10] Académie de la transformation numérique (Université Laval), NETendances 2025 – Commerce en ligne, 30/04/2026 (rapport PDF lu) : https://transformation-numerique.ulaval.ca/enquetes-et-mesures/netendances/commerce-en-ligne-2025/
- [T11] Similarweb, sites marchands les plus visités au Canada, septembre 2026 : https://www.similarweb.com/top-websites/canada/e-commerce-and-shopping/
- [T12] Similarweb (estimations, septembre 2026) : https://www.similarweb.com/website/amazon.ca/ · /walmart.ca/ · /costco.ca/ · /canadiantire.ca/ · /bestbuy.ca/ · /redflagdeals.com/ · /protegez-vous.ca/ (et /competitors/) · /rtings.com/ · /consumerreports.org/ · /bestpick.com/
- [T13] Amazon Canada, Prime Big Deal Days 6–7 octobre 2026 : https://www.aboutamazon.ca/news/retail/your-first-look-at-prime-big-deal-days-october-6-7
- [T14] Partenaires Amazon.ca : https://associates.amazon.ca/
- [T15] Wikipedia, « Hudson's Bay (retailer) » : https://en.wikipedia.org/wiki/Hudson%27s_Bay_(retailer)
- [T16] Wikipedia, « 2025–2026 Canada–United States trade war » (contre-tarifs du 08/09/2026) : https://en.wikipedia.org/wiki/2025%E2%80%932026_Canada%E2%80%93United_States_trade_war
- [T17] Wikipedia, « 2025–2026 Canadian boycott of the United States » (Angus Reid, février 2025) : https://en.wikipedia.org/wiki/2025%E2%80%932026_Canadian_boycott_of_the_United_States
- [T18] Home Renovation Savings Program (Ontario) : https://www.homerenovationsavings.ca/
- [T19] Save on Energy, Peak Perks : https://saveonenergy.ca/For-Your-Home/Peak-Perks
- [T20] Hydro-Québec, LogisVert : https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert.html
- [T21] Hilo (licence Hydro-Québec) : https://www.hiloenergie.com/fr-ca/
- [T22] Mysa : https://getmysa.com/
- [T23] Wikipedia, « Ecobee » : https://en.wikipedia.org/wiki/Ecobee
- [T24] Wikipedia, « Moving Day (Quebec) » : https://en.wikipedia.org/wiki/Moving_Day_(Quebec)
- [T25] Electrical Safety Authority (Ontario), sécurité des produits (marques d'homologation reconnues, Règl. 438/07) : https://esasafe.com/product-safety/
- [T26] VGL Publishing, bestpick.com : https://www.bestpick.com/ · https://www.bestpick.com/sitemap.xml · https://www.bestpick.com/air-fryer/ (lus le 01/11/2026) ; données allemandes et françaises : `seo-etudes/dach.md` § 3, `STRATEGIE-2026-10.md` § 7
- [T27] francoischarron.com : https://www.francoischarron.com/
- [T28] Awin, territoire Canada : https://www.awin.com/ca
- [T29] homenura.com/ca (lu le 01/11/2026) : https://homenura.com/ca ; code `lib/i18n.ts` (`COUNTRY_LANGS.CA = ['ca', 'fr']`, `langForLanguageTag('fr-CA')` → /fr)
