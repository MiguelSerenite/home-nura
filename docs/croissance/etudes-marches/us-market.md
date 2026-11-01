# Étude de marché — États-Unis (homenura.com/us) — 1er novembre 2026

Périmètre : petit électroménager, maison connectée, confort (air, chauffage, humidité), extérieur, pour la version /us (en-US) ouverte le 1/11/2026 avec des sélections européennes.
**Cette étude s'appuie sur `STRATEGIE-2026-10.md` (§ 7 et 8), `SEO-PLAN-2026-10.md`, `seo-etudes/dach.md` § 3 (vergleich.org) et `seo-etudes/fr-uk.md` (B.6 : impressions américaines des pages /en). Elle ne les refait pas.** Elle ajoute les données officielles américaines (Census, EIA, EPA, ENERGY STAR, IRS, FTC), les classements des testeurs américains (Consumer Reports, RTINGS, Vacuum Wars), l'étude du site américain de vergleich.org (**bestpick.com** : catégories, mots-clés, parcours) et la relecture des 53 titres /us actuels (`lib/catalog/category-heads/us.ts`).

---

## 0. L'essentiel

1. **Le marché croît plus vite que l'Europe.** Les ventes des magasins d'électronique et d'électroménager progressent de **+9,4 % sur un an en septembre 2026** (+7,0 % sur 9 mois). La vente à distance progresse de +8,2 % [U2]. Le e-commerce atteint **340,2 Md$ au 2e trimestre 2026, soit +12,2 % sur un an et 17,1 % du commerce de détail** [U1]. La NRF prévoit **+4,2 % pour les fêtes 2026 (1 013 Md$)** [U17]. Ces chiffres sont en dollars courants, gonflés par les hausses de prix.
2. **Amazon pèse ≈ 40 % du e-commerce américain** (40,5 % en 2025, contre 9,2 % pour Walmart, estimation Statista) [U24]. C'est le marché où un site affilié Amazon a le plus de potentiel. Taux US : **Kitchen 4,5 %**, appareils Ring et Echo 4 %, catégories non listées 4 %, Home / Home Improvement / Lawn & Garden / Outdoors / Tools 3 % [U25].
3. **La maison américaine n'est pas la maison européenne. Nos titres /us l'ignorent.** Dans les maisons neuves de 2025 : **chaudière à eau chaude 1 %**, chaudière à air pulsé (« forced-air furnace ») 49 %, pompe à chaleur 48 % ; **garage 89 %** ; **sous-sol 16 %, mais 53 % dans le Nord-Est et 50 % dans le Midwest** [U3]. 88 % des foyers utilisent la climatisation, et la moitié des foyers du Nord-Est utilisent surtout des appareils individuels (fenêtre, mural, portable) [U4]. Or **30 des 53 descriptions /us citent au moins une marque ou une norme européenne, ou absente des sources américaines lues** (Xiaomi, Hoymiles, Marstek), et au moins 15 ne correspondent pas à l'usage américain (thermostat « for boilers » avec OpenTherm, tado et Netatmo ; chauffages muraux Thermor et Sauter ; volets Somfy io ; interphones BTicino ; bornes Wallbox, Easee et Zaptec ; serrure Nuki) [H2].
4. **Les catégories propres aux États-Unis sont documentées par des sources officielles et par les testeurs** : climatiseurs de fenêtre (**590 modèles certifiés ENERGY STAR, dont 523 de fenêtre, Midea en tête avec 191**) [U8], déshumidificateurs de sous-sol (571 modèles certifiés) [U8], pompes de puisard et secours sur batterie, filtres à eau (norme PFAS de 4 ppt) [U6], machines à glaçons, batteurs sur socle, cafetières filtre (**114 modèles notés chez Consumer Reports, contre 35 à capsules**), barbecues à granulés et planchas (« flat-top »), ouvre-portes de garage, programmateurs d'arrosage [U27][U7].
5. **La sécurité « DIY » est le plus gros segment connecté.** 37 % des foyers internautes ont un système de sécurité (31 % en 2022). 12 % ont une caméra ou une sonnette sans système (7 % en 2022). **15 % (≈ 19 M) ont acheté un appareil vidéo connecté dans l'année** [U13][U14]. L'abonnement moyen coûte **55,70 $/mois** [U14] : l'angle « no monthly fee » est justifié. 37 % des acheteurs récents sont locataires. Apple arrive avec LG (caméras et sonnettes, pose par ADT) [U13].
6. **vergleich.org est faible aux États-Unis.** bestpick.com (VGL Publishing AG) compte **248 URL**, contre 18 797 pour vergleich.org [U26][H3]. Les deux pages lues (air fryer, space heater) n'ont **ni auteur, ni FAQ, ni sources**, et le guide de la page air fryer contient des marqueurs non remplis (« [insert brand name] »). C'est une traduction du catalogue allemand (« thermostatic radiator valve », « raclette grill », « fritz repeater », « stove fan », « bed slats »). Il n'a **aucune page** climatiseur de fenêtre, barbecue à granulés, ouvre-porte de garage, pompe de puisard, adoucisseur, serrure connectée, sonnette vidéo, arrosage ou machine à glaçons. Le terrain est libre.
7. **Concurrence forte sur les têtes de catégorie, ouverte sur les déclinaisons.** Consumer Reports a des notes réservées aux abonnés. RTINGS mesure en labo (102 aspirateurs robots, 54 friteuses à air, 28 climatiseurs) et réserve une partie du contenu aux membres [U27][U28]. Les grands médias trustent les « best X » (exemple documenté sur les purificateurs d'air) [U30]. Amazon répond lui-même aux acheteurs avec **Alexa for Shopping**, réservé aux États-Unis : comparaison, historique des prix sur 365 jours, achat automatique à un prix cible [U21].
8. **Calendrier** : Black Friday le **27/11/2026**, Cyber Monday le **30/11** [U19]. **43 % des Américains feront l'essentiel de leurs achats high-tech de Thanksgiving au Cyber Monday**, et 62 % pensent que c'est là que sont les meilleures offres [U16]. Prime Big Deal Days ont eu lieu les 6 et 7/10/2026 [U20]. Prime Day revient en été, en général sur 4 jours [U20].

**Mesuré** : données Census, EIA, ENERGY STAR (comptages faits le 1/11/2026 sur data.energystar.gov), pages des concurrents lues le 1/11/2026, sitemap bestpick.com. **Estimé** : part de marché Amazon (Statista). **Aucun volume de recherche n'est donné.**

## 0.1 Méthode et limites (à lire)

| Source | Ce qu'on en tire | Limite |
|---|---|---|
| Census, EIA, USGS, EPA, IRS, FTC, ENERGY STAR (données ouvertes) | Taille, habitudes du logement, réglementation, marques certifiées | Officiel ; les maisons neuves ne représentent pas tout le parc |
| Parks Associates, CTA, NRF, NCA (communiqués d'oct. 2026) | Adoption, intentions d'achat, calendrier | Seuls les chiffres des communiqués sont publics |
| Consumer Reports, RTINGS, Vacuum Wars, HouseFresh | Vocabulaire des catégories, marques testées, formats | Notes et classements réservés aux abonnés |
| bestpick.com (page d'accueil, sitemap, 3 pages) | Catégories, mots-clés, parcours de vergleich.org aux États-Unis | Lu le 1/11/2026 ; trafic non mesuré (Similarweb inaccessible) |
| Search Console Homenura [H1] | Les pages /en sont vues aux États-Unis : 4 479 impressions, 8 clics (CTR 0,2 %) | /us est ouvert depuis le 1/11 : aucune donnée propre |

**Limites honnêtes** :
- **Quota de recherche web épuisé dès le début de la session** (limite partagée entre agents). Tout a été fait en lisant directement des pages connues.
- **Inaccessibles** : Google Trends US, meilleures ventes Amazon.com (HTTP 503, contournement refusé), Circana, AHAM, HPBA (données réservées aux membres), Wirecutter et CNET (lecture bloquée).
- **Il manque donc** : une taille de marché du petit électroménager en dollars, les classements Amazon US, les indices Trends, une prévision 2027. **Rien n'est inventé pour combler ces trous.**
- La liste de requêtes du § 4 reprend des **formulations relevées sur des sites américains** (titres, URL, rubriques), pas des volumes.
- **À faire par Miguel dans son Chrome** (10 minutes) : Amazon.com Best Sellers et Movers & Shakers (Appliances, Kitchen & Dining, Tools & Home Improvement, Patio, Lawn & Garden, Smart Home), Google Trends États-Unis sur 5 ans pour les 12 nouvelles catégories du § 3.2, et l'outil de mots-clés de Bing Webmaster (marché US).

---

## 1. Marché et dynamique (2024–2027)

### 1.1 Taille et croissance (ce qui est sourcé)

| Indicateur | Valeur | Source |
|---|---|---|
| Ventes au détail, sept. 2026 | 745,0 Md$, +6,3 % sur un an | [U2] |
| Magasins d'électronique et d'électroménager (NAICS 443) | +9,4 % sur un an en sept. ; +7,0 % sur 9 mois (65,0 Md$) | [U2] |
| Vente à distance (NAICS 454, Amazon compris) | +8,2 % sur un an en sept. ; +8,0 % sur 9 mois (1 046 Md$) | [U2] |
| Bricolage et jardin (NAICS 444) | +4,5 % sur un an en sept. | [U2] |
| E-commerce, T2 2026 | 340,2 Md$ (corrigé des variations saisonnières), +12,2 % sur un an, 17,1 % du commerce de détail | [U1] |
| E-commerce 2025 (année) | ≈ 1 234 Md$, +5,4 % ; 23,1 % du commerce hors automobile, carburant et restauration (calcul Digital Commerce 360) | [U23] |
| Fêtes 2026 (nov.–déc.) | +4,2 %, 1 013 Md$ (prévision) | [U17] |
| Amazon Amérique du Nord, T3 2026 | 112,9 Md$, +6,2 % | [U22] |

**Non obtenu** : taille du petit électroménager, de la maison connectée et du confort en dollars, et leur prévision 2027 (Circana et AHAM inaccessibles). Ne pas citer de chiffre de marché tant qu'il n'est pas sourcé.

### 1.2 Dynamique par famille (preuves locales)

| Famille | Signal | Source |
|---|---|---|
| Sécurité | Systèmes : 31 % → 37 % des foyers internautes (2022 → 2026) ; caméra ou sonnette seule : 7 % → 12 % ; 36 % paient un service ; dépenses moyennes +26 % sur un an | [U13][U14] |
| Vidéo connectée | 15 % des foyers (≈ 19 M) ont acheté un appareil vidéo connecté dans l'année | [U14] |
| Énergie | Thermostat connecté : 17 % des foyers internautes ; pompe à chaleur : 17 % ; 87 % des propriétaires de thermostat jugent les économies conformes ou meilleures que prévu | [U15] |
| Chauffage du parc neuf | Pompe à chaleur 48 % des maisons neuves en 2025 (63 % dans le Sud) ; air pulsé 49 % ; eau chaude 1 % | [U3] |
| Café | 66 % boivent du café chaque jour ; **47 % ont bu une boisson à base d'expresso dans la semaine (record, +17,5 % depuis 2022)** ; 83 % en boivent à la maison | [U18] |
| Climatisation | 88 % des foyers ; Nord-Est : 50 % utilisent surtout des appareils individuels | [U4] |

### 1.3 Tendances à retenir
- **Les aides fédérales se sont arrêtées.** Le crédit 25C (pompes à chaleur, climatisation centrale, chauffe-eau) couvre seulement les équipements installés jusqu'au 31/12/2025 [U9]. Le crédit 30C (borne de recharge, 30 % plafonné à 1 000 $) s'est arrêté le 30/06/2026 [U10]. Ne plus écrire « tax credit » sur les pages bornes, pompes à chaleur et batteries.
- **Eau potable** : la norme PFOA/PFOS reste fixée à 4 ppt. L'EPA propose (18/05/2026) un délai de mise en conformité jusqu'en 2031 et de retirer les autres PFAS [U6]. Le sujet tient la demande de filtres dans l'actualité.
- **Achat assisté par l'IA** : Alexa for Shopping (États-Unis seulement) compare, montre l'historique des prix et achète à un prix cible [U21]. Amazon bloque les agents IA tiers, alors que Walmart leur ouvre son site [U22]. Les assistants (ChatGPT, Perplexity) doivent donc s'appuyer sur des sources éditoriales pour parler d'Amazon : c'est une opportunité de citation pour Homenura.
- **Prix et moral** : 86 % jugent le prix « extrêmement ou très important » pour choisir où acheter. 58 % se disent financièrement stables, contre 66 % en 2025 [U16].
- **Nouveaux entrants** : Apple avec LG (caméras, sonnettes, pose par ADT) [U13] ; les locataires achètent de la sécurité (37 % des acheteurs récents) [U13], d'où l'intérêt des pages « renter-friendly » (sans perçage, sans câblage).

---

## 2. Habitudes d'achat

### 2.1 Où les Américains achètent

| Constat | Chiffre | Source |
|---|---|---|
| Part du e-commerce US | Amazon 40,5 %, Walmart 9,2 %, Apple 3,2 % (2025, estimation) | [U24] |
| Classement des cybermarchands nord-américains | Amazon n° 1 du Top 1000 | [U22] |
| Cadeaux high-tech 2026 | 81 % prévoient d'en acheter en magasin, 79 % en ligne (achats « répartis à égalité ») | [U16] |
| Café pour la maison | Supermarchés 35 % des achats (42 % en janvier), grandes surfaces généralistes 28 % (23 % en janvier) | [U18] |
| Marques de distributeur dans les tests | Amazon Basics (climatiseurs, chauffages), Mainstays (Walmart : batteurs, machines à glaçons), Insignia (machines à glaçons) | [U27][U26] |

**Lecture** : Amazon domine en ligne. Walmart, Target, Best Buy, Home Depot et Lowe's comptent en magasin et pour le gros électroménager. Pour le gros électroménager, les pompes de puisard, les adoucisseurs et les ouvre-portes de garage, **l'hypothèse (non chiffrée ici)** est que Home Depot et Lowe's pèsent plus qu'Amazon. À vérifier avant d'y investir.

### 2.2 Sensibilité au prix
- 86 % : le prix décide du lieu d'achat [U16] ; finances « stables » en baisse de 66 % à 58 % [U16].
- 62 % jugent que les meilleures offres tombent entre Thanksgiving et le Cyber Monday [U16]. Pages « deals » et « under $X » à préparer.
- Abonnements de sécurité : de 42,41 $ (opérateurs locaux) à 66,50 $ (Brinks) par mois, Ring sous 50 $ [U14]. La requête « no monthly fee » est un argument d'économie chiffrable.
- Interdit Amazon (rappel) : aucun prix affiché sans l'API. On parle de gammes (« entry-level / mid-range / premium ») et de pages « under $100 » sans prix de modèle.

### 2.3 Marques observées dans les sources américaines (à intégrer aux sélections)

| Catégorie | Marques citées par les sources US | Source |
|---|---|---|
| Friteuses à air | Ninja, COSORI, Instant, Chefman, Cuisinart, Typhur, Beautiful, Emeril Lagasse, Bella, Philips (moins cité) | [U27][U28][U26] |
| Climatiseurs | Midea (dont U-Shaped), Frigidaire, GE, LG, TCL, Hisense, Friedrich, Whynter, Honeywell, Dreo, Amazon Basics | [U8][U27][U28] |
| Déshumidificateurs | Midea, Hisense, TCL, Honeywell (certifiés ENERGY STAR) | [U8] |
| Chauffages d'appoint | Dreo, Dr Infrared, Black+Decker, Amazon Basics | [U26] |
| Thermostats | First Alert, Sensi, Resideo, ecobee, Honeywell Home, Google Nest, Lennox, Carrier (certifiés ENERGY STAR) ; contrôleurs de clim : Sensibo, Mysa, Cielo, Flair | [U8][U27] |
| Serrures | Kwikset, Yale (Matter), Level, Ultraloq, Eufy, Lockly, Aqara, Defiant (Hubspace) | [U27] |
| Caméras et sonnettes | Ring, Blink, Arlo, Wyze, Reolink, TP-Link, Aqara (+ Apple/LG annoncés) | [U27][U13] |
| Robots aspirateurs | Roborock, Dreame, MOVA, Matic, Dyson, iRobot | [U28] |
| Café | Ninja, Hamilton Beach, Bella, Café (GE), Black+Decker, Bonavita, Lavazza | [U27] |
| Batteurs | KitchenAid, Cuisinart, Hamilton Beach, Smeg, GE Profile | [U27] |
| Filtres à eau | Brita, PUR, Culligan/ZeroWater, Aquasana, Waterdrop, Multipure, Brondell, Epic | [U27] |
| Pompes de puisard | Zoeller, Wayne, Liberty, Superior Pump, Basement Watchdog | [U27] |
| Barbecues | Weber, Char-Broil, Ninja (FlexFlame), Kenmore | [U27] |

Absents des pages lues, donc **à vérifier sur Amazon.com avant d'écrire** : Shark, Bissell, Keurig, Nespresso, Breville, Schlage, August, SimpliSafe, Chamberlain/LiftMaster (myQ), Rachio, Orbit B-hyve, Traeger, Blackstone, GE Profile Opal.

### 2.4 Moments d'achat (calendrier 2026-2027)

| Date | Événement | Catégories à pousser |
|---|---|---|
| 27/11/2026 → 30/11/2026 | Black Friday → Cyber Monday [U19] (43 % font l'essentiel des achats high-tech de Thanksgiving au Cyber Monday [U16]) | friteuses à air, café, batteurs, robots aspirateurs, sonnettes, serrures, machines à glaçons |
| Déc. 2026 | Fêtes : +4,2 % prévus [U17] | idées cadeaux cuisine, maison connectée |
| Hiver | Saison froide et sèche (hypothèse d'usage) | chauffages d'appoint, humidificateurs, déshumidificateurs de sous-sol |
| 15/02/2027 | Presidents' Day (date calculée ; temps fort habituel du gros électroménager, **non sourcé**) | gros électroménager (faible priorité) |
| 9/05 et 20/06/2027 | Fête des mères et fête des pères (dates calculées ; lien avec la cuisine et les barbecues : **hypothèse**) | batteurs, café ; barbecues à granulés, thermomètres |
| 31/05/2027 | Memorial Day (date calculée) | climatiseurs, ventilateurs, barbecues, tondeuses |
| Été 2027 | Prime Day, en général 4 jours [U20] | toutes catégories Amazon |
| 6/09/2027 | Labor Day (date calculée) | fin d'été |
| Oct. 2027 | Prime Big Deal Days (6 et 7/10 en 2026) [U20] | entrée dans la saison des fêtes |

---

## 3. Catégories qui marchent, qui montent, propres au pays, peu pertinentes

### 3.1 Catégories du site à garder en tête aux États-Unis (preuves)

| Catégorie du site | Preuve locale | Adaptation US obligatoire |
|---|---|---|
| airfryers | 91 modèles notés chez CR [U27] ; 54 testés par RTINGS, rubriques **4, 6 et 8 « quarts »**, « budget and cheap », « large » [U28] ; page vedette de bestpick [U26] | capacités en **quarts**, marques US (Ninja, COSORI, Instant, Typhur) |
| sonnettes-video, cameras-exterieur, cameras-interieur, alarmes | Parks [U13][U14] ; 62 sonnettes et 130 caméras notées chez CR [U27] | « no monthly fee », Ring / Blink / Arlo / Wyze / Reolink |
| serrures-connectees | 41 serrures connectées + 16 serrures « retrofit » chez CR [U27] | pêne dormant (« deadbolt »), Kwikset, Yale, Level, Ultraloq |
| aspirateurs-robots, aspirateurs-laveurs | 102 testés par RTINGS ; rubriques **pet hair, carpet, hardwood floors, budget** [U28] ; Vacuum Wars (YouTube, plus de 300 000 abonnés) [U29] | « for pet hair », « for carpet », « mop combo » |
| thermostats | 17 % des foyers internautes [U15] ; 32 thermostats connectés notés chez CR [U27] | air pulsé ou pompe à chaleur, **fil commun (C-wire)**, ecobee, Nest, Honeywell Home |
| purificateurs-air | Catégorie RTINGS et CR [U28][U27] ; SERP verrouillées par les grands médias [U30] | entrer par l'usage (animaux, chambre) et le coût des filtres |
| deshumidificateurs | 571 modèles certifiés ENERGY STAR [U8] ; « basement dehumidifier » chez bestpick [U26] | **pintes par jour**, sous-sol |
| climatiseurs-mobiles | Rubriques « portable » et « window » séparées chez RTINGS et CR (75 de fenêtre contre 10 portables) [U27][U28] | **scinder** : fenêtre (catégorie n° 1) et portable |
| chauffages-appoint | Catégorie CR ; bestpick (1 500 W, ETL, coupure en cas de basculement) [U26][U27] | « space heater » est le bon mot ici ; marques Dreo, Dr Infrared |
| barbecues-connectes, thermometres-viande | CR : 164 au gaz, 28 portables, 21 au charbon, 17 à granulés, 10 planchas (« flat-top »), 7 kamado [U27] | « pellet grill », « flat top grill », « wireless meat thermometer » |
| stations-recharge-outdoor | bestpick : « portable power station » et « portable generator » ; CR : « Generators » et guide « Storm Emergency » [U26][U27] | secours en cas de coupure (« home backup ») |
| arrosage-connecte | EPA : 8 Md de gallons d'eau par jour pour l'extérieur, jusqu'à 50 % perdus, jusqu'à 15 000 gallons/an économisés par un programmateur WaterSense, aides locales [U7] ; CR « Sprinkler Timers » [U27] | « smart sprinkler controller », aides des services d'eau |
| portails-garages | 89 % des maisons neuves ont un garage [U3] | renommer en **garage door openers** ; le portail est rare |

### 3.2 Catégories propres aux États-Unis à ajouter (absentes ou marginales en Europe)

| # | Nouvelle catégorie | Preuve de demande (locale) | Potentiel Amazon (taux US [U25]) | Saison | Priorité |
|---|---|---|---|---|---|
| 1 | **Window air conditioners** (dont U-shaped / saddle) | 88 % des foyers climatisés, 50 % du Nord-Est en appareils individuels [U4] ; 523 modèles de fenêtre certifiés (233 « à cheval » sur la fenêtre ou le rebord) [U8] ; 75 notés chez CR [U27] | Élevé ; Appliances probablement 4 % (non listé) | avril → juillet | 1 (contenu prêt en mars) |
| 2 | **Water filters** (carafe, sous évier, osmose inverse) | Norme PFAS 4 ppt [U6] ; CR : carafes 14, sous évier 10, comptoir 7, robinet 5, osmose 4 [U27] | Élevé ; Kitchen 4,5 % ou Home Improvement 3 % | toute l'année | 2 |
| 3 | **Water softeners** | Eau dure fréquente dans le centre-est et l'Ouest (USGS) [U5] | Moyen : produits lourds, poids de Home Depot et Lowe's (hypothèse) | toute l'année | 6 |
| 4 | **Pellet grills & flat-top griddles** | 17 modèles à granulés et 10 planchas notés chez CR [U27] | Moyen : Outdoors / Lawn & Garden 3 %, paniers élevés | mars → juillet | 3 |
| 5 | **Sump pumps + battery backup** | Sous-sol : 53 % (Nord-Est), 50 % (Midwest), 4 % (Sud) des maisons neuves [U3] ; 11 systèmes de secours notés chez CR [U27] | Moyen ; Tools / Home Improvement 3 % | printemps (fonte, orages) | 5 |
| 6 | **Countertop ice makers** (dont nugget) | 20 modèles notés chez CR [U27] | Élevé en volume ; Kitchen ou Appliances 4–4,5 % | mai → août, cadeaux | 4 |
| 7 | **Stand mixers** | 17 batteurs sur socle et 20 batteurs à main notés chez CR (KitchenAid) [U27] ; page bestpick [U26] | Élevé ; Kitchen 4,5 % | nov.–déc. (cadeaux) | **1 bis : avant le 20/11** |
| 8 | **Drip coffee makers** + **espresso machines** (scinder la catégorie café) | CR : 114 cafetières filtre, 35 à capsules, 15 mixtes [U27] ; expresso : 47 % chaque semaine [U18] | Élevé ; Kitchen 4,5 % | nov.–déc. | **1 ter : avant le 20/11** |
| 9 | **Carpet cleaners / pet hair vacuums** | CR « Carpet Cleaners » ; bestpick « carpet cleaning machine », « pet hair vacuum » [U27][U26] | Élevé ; Home 3 % | toute l'année | 7 |
| 10 | **Smart water shutoff valves** (extension de detecteurs-fuite-eau) | Rubrique CR « Smart Water Shutoff Systems » [U27] | Moyen ; Home Improvement 3 % | hiver (gel) | 8 |
| 11 | **Smart AC controllers** (fenêtre, mini-split) | 8 notés chez CR (Sensibo, Mysa, Cielo, Flair) [U27] | Moyen ; petits paniers | été | 9 |
| 12 | **Garage door openers** (renommer portails-garages) | 89 % des maisons neuves avec garage [U3] | Moyen ; Tools 3 % | toute l'année | 4 bis (renommage peu coûteux) |

Autres pistes notées chez les testeurs mais hors cœur (à garder pour plus tard) : toaster ovens (RTINGS, CR), ceiling fans, garbage disposals, tankless water heaters (bestpick), snow blowers, battery lawn mowers et leaf blowers [U27][U28][U26].

### 3.3 Catégories du site peu pertinentes aux États-Unis (à ne pas mettre en avant)

| Catégorie | Pourquoi | Que faire |
|---|---|---|
| solaire-balcon | Seul cadre légal relevé dans cette session (les autres États n'ont pas pu être recherchés) : Utah, HB 340, en vigueur le 7/05/2025 : **1 200 W maximum, prise de 120 V, certification UL ou équivalente**, pas de contrat de raccordement [U11]. Certification UL des kits européens (Hoymiles…) : à vérifier. | Une page explicative « plug-in solar: is it legal in my state? », en noindex tant que la loi reste isolée |
| interphones | Modèle d'immeuble européen (BTicino, WelcomeEye) | Rediriger vers les sonnettes vidéo |
| volets-stores | Somfy io / VELUX = volets roulants européens | Renommer en « smart blinds & shades », faible priorité |
| fers-centrales-vapeur | Laurastar et les centrales vapeur sont peu présents ; défroisseurs (« clothes steamer ») chez bestpick [U26] | Remplacer par « garment steamers » |
| chauffages-appoint (version actuelle) | Thermor, Sauter et Mill = chauffages muraux européens [H2] | Réécrire en « space heaters » |
| thermostats (version actuelle) | « For Boilers », OpenTherm, tado et Netatmo, alors que les maisons neuves sont chauffées à l'eau chaude dans 1 % des cas [U3][H2] | Réécrire (furnace, heat pump, C-wire) |
| bornes-recharge-ve | Crédit 30C terminé le 30/06/2026 [U10] ; Wallbox, Easee et Zaptec cités | Marques et connecteurs US, sans promesse fiscale |
| batteries-domestiques | Pose par installateur ; Marstek cité ; aide 25C terminée [U9] | Faible priorité ; garder les stations portables |
| lave-linge-connectes, lave-vaisselle-connectes | Gros électroménager : faible commission Amazon et vente surtout en magasin (hypothèse) | Pas de mise en avant |
| robots-multifonctions, diffuseurs, reveils-lumiere, coffres-forts-connectes, stations-meteo | Aucun signal local relevé dans cette session | En dernier |

---

## 4. Demande de recherche

### 4.1 Familles de formulations américaines (relevées sur des sources US)
- **Unités US partout** : quart (« 6-quart air fryer »), BTU et pieds carrés (climatiseurs), pintes par jour (déshumidificateurs), °F, watts et prise de 15 A (chauffages) [U28][U27][U8][U26].
- **Usage et pièce** : « for bedrooms », « small room », « for pet hair », « for carpet », « hardwood floors », « basement » [U28][U26].
- **Budget** : « budget and cheap », « under $200 » (seule page budget de bestpick : « tablet under 200 ») [U28][U26].
- **Sans abonnement** : « no monthly fee » ou « no subscription » (sécurité, sonnettes), justifié par des abonnements moyens de 55,70 $/mois [U14].
- **Installation** : « retrofit » (serrures), « deadbolt », « through the wall », « U-shaped », « battery backup » [U27][U8].
- **Duels « X vs Y »** : le format qui prend des clics partout sur Homenura (« ninja vs philips », 4 904 impressions sur /en, vues surtout hors du R-U, dont aux États-Unis) [H1] ; titres « vs » chez Vacuum Wars [U29].
- **Types de catégorie** : « drip », « single-serve », « pellet », « flat-top », « countertop ice maker », « under-sink », « reverse osmosis », « smart water shutoff », « sprinkler timer » [U27].

### 4.2 Les 36 requêtes prioritaires (intention, format, source de la formulation ; volumes non mesurés)

Intention : **C** = comparaison avant achat, **I** = information, **T** = offres, **P** = problème.

| # | Requête (en-US) | Int. | Format gagnant | Catégorie | Source de la formulation |
|---|---|---|---|---|---|
| 1 | best air fryer | C | 3 choix + tableau | airfryers | [U28][U27] |
| 2 | best 6 quart air fryer | C | déclinaison par capacité | airfryers | [U28] |
| 3 | best budget air fryer | C | page budget | airfryers | [U28] |
| 4 | best dual basket air fryer | C | déclinaison | airfryers | [U26][U28] |
| 5 | ninja vs cosori air fryer | C | duel | airfryers | [U28][H1] |
| 6 | black friday air fryer deals | T | page offres datée | airfryers | [U19][U16] |
| 7 | best window air conditioner | C | guide + tableau des BTU | nouvelle 1 | [U28][U27] |
| 8 | u shaped window air conditioner | C/I | explication + 3 choix | nouvelle 1 | [U8][U28] |
| 9 | window vs portable air conditioner | I | duel | 1 + climatiseurs-mobiles | [U28][U4] |
| 10 | best air conditioner for bedroom | C | page usage | nouvelle 1 | [U28] |
| 11 | what size air conditioner do i need | I | calculateur BTU / pieds carrés | nouvelle 1 | [U27] |
| 12 | best portable air conditioner | C | guide | climatiseurs-mobiles | [U28] |
| 13 | best space heater | C | guide + sécurité | chauffages-appoint | [U26][U27] |
| 14 | best basement dehumidifier | C | guide (pintes par jour) | deshumidificateurs | [U26][U8][U3] |
| 15 | best humidifier | C | guide | humidificateurs | [U28][U27] |
| 16 | best smart thermostat | C | guide (compatibilité) | thermostats | [U8][U27] |
| 17 | ecobee vs nest thermostat | C | duel | thermostats | [U8] |
| 18 | best video doorbell no subscription | C | guide « coût sur 3 ans » | sonnettes-video | [U14][U27] |
| 19 | ring vs blink | C | duel | sonnettes-video / cameras | [U27] |
| 20 | best diy home security system | C | guide + coût mensuel | alarmes | [U13][U14] |
| 21 | best retrofit smart lock | C | déclinaison | serrures-connectees | [U27] |
| 22 | best smart lock for front door | C | guide (deadbolt) | serrures-connectees | [U27] |
| 23 | best robot vacuum for pet hair | C | page usage | aspirateurs-robots | [U28][U29] |
| 24 | best robot vacuum and mop combo | C | guide | aspirateurs-laveurs | [U26][U29] |
| 25 | best budget robot vacuum | C | page budget | aspirateurs-robots | [U28][U29] |
| 26 | best carpet cleaner | C | guide | nouvelle 9 | [U27][U26] |
| 27 | best drip coffee maker | C | guide | nouvelle 8 | [U27] |
| 28 | best espresso machine for home | C | guide | nouvelle 8 / cafetieres | [U18][U26] |
| 29 | best stand mixer | C | 3 choix + duel KitchenAid | nouvelle 7 | [U27][U26] |
| 30 | best countertop ice maker | C | guide | nouvelle 6 | [U27] |
| 31 | best water filter for pfas | C/I | guide + norme EPA | nouvelle 2 | [U6][U27] |
| 32 | best under sink water filter | C | déclinaison | nouvelle 2 | [U27] |
| 33 | best sump pump battery backup | C | guide | nouvelle 5 | [U27][U3] |
| 34 | best pellet grill | C | guide + duel granulés / gaz | nouvelle 4 | [U27] |
| 35 | best flat top grill | C | guide | nouvelle 4 | [U27] |
| 36 | best smart sprinkler controller | C | guide + aides locales | arrosage-connecte | [U7][U27] |

À valider dans Bing Webmaster (outil de mots-clés) et dans Search Console dès les premières impressions /us : « smart thermostat without c wire », « smart garage door opener », « best portable power station for home backup », « best level 2 home ev charger », « best wifi smoke detector » [U26]. Les pages problème restent à retitrer dans les formulations américaines, par exemple « portable ac not cooling », « window ac leaking water inside », « dehumidifier not collecting water », « sump pump running constantly » (**formulations à valider**, aucune source dans cette session).

### 4.3 Formats qui gagnent (observés chez les concurrents américains)
1. **Une page par capacité, par usage ou par budget sous le guide principal** : RTINGS propose pour les friteuses à air 4, 6 et 8 quarts, grande capacité, petite, « budget and cheap », « for French fries » et « best brands » ; pour les climatiseurs, fenêtre, portable, chambre et petite pièce [U28].
2. **Notes par taille ou par groupe**, comme les classements de CR par taille de climatiseur [U27].
3. **Duels et outils de comparaison** : comparateur RTINGS [U28] ; titres « vs » sur YouTube chez Vacuum Wars [U29] ; chez Homenura, les duels sont la 1re source de clics [H1].
4. **Vidéo** : Vacuum Wars bâtit son audience sur YouTube [U29].
5. **« Updated » daté et liste de 8 à 16 produits avec badges** (bestpick : « Comparison winner », « Best value », « Bestseller », « 300+ bought last month ») [U26].

---

## 5. Concurrence

### 5.1 Comparateurs et sites de tests américains

| Site | Points forts | Faiblesses exploitables | Source |
|---|---|---|---|
| Consumer Reports | Organisme de consommateurs, beaucoup de modèles notés (91 friteuses à air, 75 climatiseurs de fenêtre, 41 serrures connectées, 114 cafetières filtre) | Notes et avis réservés aux abonnés : la page publique montre des noms de modèles sans verdict | [U27] |
| RTINGS | Mesures de labo (102 aspirateurs robots, 54 friteuses, 28 climatiseurs), outils de comparaison, pages par usage | Une partie du contenu est réservée aux membres ; pas de sécurité, de serrures, de filtres à eau, de barbecues ni d'arrosage | [U28] |
| Vacuum Wars | Spécialiste des aspirateurs, chaîne YouTube, tests à la main | Une seule famille de produits | [U29] |
| Grands médias (Better Homes & Gardens, Real Simple, BuzzFeed, Popular Science…) | Autorité du domaine, en tête sur les « best X » | Tests revendiqués sans données publiées, textes recopiés, choix contestables (relevé de HouseFresh sur « best air purifier for pets ») | [U30] |
| HouseFresh | Indépendant, tests publiés (purificateurs d'air) | Dit perdre du trafic face aux grands médias | [U30] |
| Wirecutter (NYT), CNET | Références « best X » | **Non analysés** : pages illisibles par l'outil | — |
| Amazon (Alexa for Shopping) | Comparaison, historique des prix sur 365 jours, achat automatique, guides qui comparent « across Amazon and the web » | Ne couvre que le catalogue Amazon ; pas d'avis indépendant | [U21] |

**Règle américaine sur les avis** (FTC, règle finale du 14/08/2024) : sont interdits les avis qui font croire à une expérience réelle du produit que l'auteur n'a pas eue, et les avis inventés, y compris par IA ; sanctions civiles possibles [U12]. Cela confirme la règle Homenura : **jamais « tested » ni « hands-on »**. On écrit « compared », « researched », « we analyzed ».

### 5.2 vergleich.org aux États-Unis : bestpick.com (catégories, mots-clés, parcours)

**Identité** : « © 2026 VGL Publishing AG » ; sites liés en pied de page : vergleich.org, meilleurs.fr, mejoraelige.es, miglioreconsiglio.it, pickbest.co.uk ; badge « German Quality Seal » [U26].

**Catégories** :
- 15 rubriques calquées sur les rayons d'Amazon.com : Appliances, Home & Kitchen, Patio Lawn & Garden, Tools & Home Improvement…
- 35 pages intermédiaires (Small Kitchen Appliances, Heating Cooling & Air Quality, Vacuums, Outdoor Power Equipment…).
- ≈ 196 comparatifs, **248 URL au total**, contre 18 797 pour vergleich.org [U26][H3].
- Le contenu vient du catalogue allemand : thermostatic radiator valve, raclette grill, fritz repeater, stove fan, bed slats, ash vacuum, circulation booster, infrared heater, electric radiators, garden shredder, « thermo cooking machine » (Thermomix), « automatic coffee machine » (calque de Kaffeevollautomat) [U26].
- **Quelques adaptations américaines seulement** : basement dehumidifier, space heater (avec ETL, coupure en cas de basculement, 1 500 W, °F), pet hair vacuum, carpet cleaning machine, tankless water heater, portable generator, wi-fi smoke detector [U26].
- **Absents** : climatiseur de fenêtre, barbecue à granulés, plancha, ouvre-porte de garage, pompe de puisard, filtre à eau, adoucisseur, machine à glaçons, serrure connectée, sonnette vidéo, système de sécurité, thermostat connecté, arrosage [U26].

**Mots-clés** :
- URL = terme de tête au singulier (`/air-fryer/`, `/robot-vacuum/`, `/space-heater/`).
- Titre calqué sur l'allemand « Test oder Vergleich » : « air fryer test or comparison » The best 16 for 2026 », avec le H1 « Best air fryers 2026 ».
- Déclinaisons rares : dual-air-fryer, roborock-robot-vacuum, ecovacs-robot-vacuum-cleaner, delonghi-coffee-machine, philips-coffee-machine, robot-mower-without-boundary-wire, cordless-vacuum-mop.
- Une seule page budget (« tablet-under-200 »), aucune page « vs » ni « problème » [U26].

**Parcours** :
- Accueil (« Popular tests and comparisons ») → menu « Categories » → comparatif direct, ou rayon → page intermédiaire → comparatif [U26].
- Sur le comparatif :
  1. fil d'Ariane, H1, « Updated: 10/27/2026 » ;
  2. **16 fiches** avec note maison (« 9,9 », virgule décimale), badges, « View price → » sans nom de marchand ;
  3. résumé, bloc de confiance, comparatifs voisins ;
  4. guide d'achat générique (« Easy Recipes to Get Started », avec les marqueurs non remplis « [insert brand name] ») ;
  5. sommaire, puis comparatifs voisins.
- **Pas d'auteur, pas de FAQ, pas de sources, pas de prix ; images servies par le serveur d'images d'Amazon** (constaté sur les pages air fryer et space heater) [U26].

**Fraîcheur et confiance** :
- La page air fryer affiche « Updated 10/27/2026 », alors que son `lastmod` dans le sitemap est le 18/09/2025.
- 71 des 248 URL ont un `lastmod` de 2025 [U26].
- Deux chiffres contradictoires : « 300,000 products across 20,000+ categories » et « 124k+ products compared » [U26].
- robots.txt nomme 28 robots, surtout d'IA (GPTBot, ClaudeBot, PerplexityBot…), et ne leur interdit que /search [U26].

**Ce qu'on reprend et ce qu'on fait mieux** :

| Élément de vergleich.org (DE) | État sur bestpick.com (US) | Action Homenura /us |
|---|---|---|
| Encadré « 3 choix » + badges | 16 fiches et 3 badges | Garder « Our 3 picks » (Best overall / Upgrade / Budget) |
| Déclinaisons marque, taille, budget (des milliers de pages) | Une dizaine | Pages en quarts, BTU, pintes, pièces, « under $100/$200 », indexées seulement à partir de 5 produits distincts |
| « Mis à jour au plus tard tous les 120 jours » + journal daté | Promesse affichée, `lastmod` de 2025 sur des pages « mises à jour » en 2026 | Date réelle, journal des changements, `dateModified` identique dans le sitemap |
| Auteur et relecteur nommés, sources citées (DE) | Aucun | Auteur nommé + « How we compare » + sources US (CR, RTINGS, ENERGY STAR, EPA) |
| Plusieurs marchands | « View price » anonyme | Amazon d'abord, puis Walmart, Target, Home Depot et Best Buy dès l'acceptation des programmes |
| Images Amazon | Servies par le serveur d'Amazon | Interdit chez nous sans l'API : photos de presse des marques |

---

## 6. Recommandations pour Homenura aux États-Unis, classées par impact

### 6.1 Les 10 actions (impact et effort notés de 1 à 5)

| # | Action | Impact | Effort | Échéance | Pourquoi |
|---|---|---|---|---|---|
| 1 | **Réécrire les 53 titres, H1 et descriptions /us** avec les marques et normes américaines (air pulsé, C-wire, deadbolt, quarts, BTU, pintes/jour, °F, 120 V), en commençant par thermostats, chauffages-appoint, climatiseurs-mobiles, serrures, alarmes, detecteurs-fumee-co, bornes, portails-garages, deshumidificateurs, airfryers | 5 | 2 | avant le 15/11 | 30 descriptions sur 53 citent une marque ou une norme européenne [H2] ; parc neuf : 1 % de chauffage à eau chaude [U3] |
| 2 | **Sélections US (« 3 picks ») sur les 15 catégories des fêtes**, avec les marques des sources US (§ 2.3), après vérification des ASIN sur Amazon.com | 5 | 3 | avant le 20/11 | Amazon = 40,5 % du e-commerce [U24] ; Black Friday le 27/11 [U19] |
| 3 | **Nouvelles catégories des fêtes** : stand mixers, drip coffee makers + espresso machines (scinder cafetieres), countertop ice makers | 4 | 3 | avant le 20/11 | CR : 114 cafetières filtre, 17 batteurs, 20 machines à glaçons [U27] ; expresso : 47 % chaque semaine [U18] ; Kitchen 4,5 % [U25] |
| 4 | **Page /us/black-friday** à URL stable (Black Friday → Cyber Monday → fêtes), sans prix de modèle | 4 | 2 | avant le 15/11 | 43 % achètent pendant cette fenêtre, 62 % y voient les meilleures offres [U16] |
| 5 | **Pôle sécurité « no monthly fee »** : sonnettes, caméras, DIY security, serrures retrofit, duels Ring vs Blink, coût sur 3 ans abonnement compris | 4 | 3 | décembre | 37 % équipés, 15 % ont acheté de la vidéo dans l'année, 55,70 $/mois en moyenne [U13][U14] ; Ring 4 % [U25] |
| 6 | **Pôle climatisation pour le printemps** : window AC (catégorie n° 1, U-shaped, calculateur BTU), portable AC, smart AC controllers, déshumidificateurs de sous-sol | 5 | 3 | contenu prêt le 15/03/2027 | 88 % climatisés, 50 % du Nord-Est en appareils individuels [U4] ; 590 climatiseurs certifiés [U8] |
| 7 | **Pôle eau et sous-sol** : water filters (PFAS), under-sink et osmose inverse, sump pumps + battery backup, smart water shutoff, puis water softeners | 3 | 3 | janv.–mars 2027 | EPA 4 ppt [U6] ; sous-sol 50 % ou plus dans le Nord-Est et le Midwest [U3] ; USGS [U5] |
| 8 | **Pôle barbecue** : pellet grills, flat-top griddles, wireless meat thermometers (existe déjà), duels granulés / gaz | 3 | 3 | mars → juin 2027 | CR : 17 à granulés, 10 planchas [U27] |
| 9 | **Déclinaisons « à la vergleich » en unités US** (quarts, BTU, pièce, animaux, budget), uniquement à partir de 5 produits | 4 | 4 | continu | Format RTINGS [U28] ; bestpick ne le fait presque pas [U26] |
| 10 | **Crédibilité sans test** : auteur nommé, « How we compare », bloc « What independent testers found » qui cite et lie CR, RTINGS, ENERGY STAR et EPA ; vocabulaire « compared », jamais « tested » | 4 | 2 | décembre | Règle FTC [U12] ; force de RTINGS et CR [U27][U28] ; faiblesse de bestpick [U26] |

### 6.2 Ordre de mise en avant des catégories sur /us
- **Novembre–décembre** : air fryers → robot vacuums (pet hair, mop combo) → coffee (drip et espresso) → stand mixers → video doorbells et DIY security → smart locks → ice makers → space heaters → humidifiers et basement dehumidifiers → air purifiers → smart thermostats.
- **Janvier–mars** : water filters → sump pumps → smart thermostats (heat pump) → window AC (préparation) → portable power stations.
- **Avril–août** : window AC → portable AC → fans → pellet grills et griddles → smart sprinkler → ice makers → robotic pool cleaners → robot mowers (en dernier).

### 6.3 Marques et types de modèles à intégrer (à vérifier sur Amazon.com avant publication)
- **Cuisine** : Ninja, COSORI, Instant, Typhur, Chefman (friteuses en quarts) ; KitchenAid, Hamilton Beach, Cuisinart (batteurs) ; cafetières filtre Ninja, Hamilton Beach, Bonavita, Café (GE) [U27][U28].
- **Air** : climatiseurs Midea (U-Shaped), Frigidaire, GE, LG, TCL, Hisense, Friedrich, Whynter (portable) [U8][U27][U28] ; déshumidificateurs Midea, Hisense, Honeywell [U8] ; chauffages Dreo, Dr Infrared [U26].
- **Sécurité** : Ring, Blink, Arlo, Wyze, Reolink, TP-Link ; serrures Kwikset, Yale, Level, Ultraloq, Eufy, Lockly [U27].
- **Énergie** : thermostats ecobee, Google Nest, Honeywell Home / Resideo, Sensi [U8].
- **Eau** : Brita, PUR, ZeroWater, Aquasana, Waterdrop ; pompes Zoeller, Wayne, Liberty, Basement Watchdog [U27].
- **Barbecue** : Weber, Char-Broil, Ninja [U27].
- **À contrôler avant d'écrire** (absents des sources lues) : Shark, Bissell, Keurig, Nespresso, Breville, Schlage, SimpliSafe, Chamberlain/LiftMaster, Rachio, Traeger, Blackstone.
- **À retirer de /us** : Thermor, Sauter, Mill, Somfy io, BTicino, WelcomeEye, Burg-Wächter, Laurastar, Moulinex Cookeo, Meaco, Trotec, Marstek, Wallbox, Easee, Zaptec, tado, Netatmo [H2].

### 6.4 Adaptations du contenu et du SEO
- **Orthographe et unités** : « color », « gray » ; °F, quarts, pieds carrés, BTU, pintes par jour, 120 V et 15 A ; ne jamais convertir des litres en quarts sans arrondi lisible.
- **hreflang** : séparer en-US, en-GB et en-CA ; suivre /us dans Search Console avec le filtre pays = United States (les impressions américaines actuelles de /en, 4 479 [H1], doivent migrer vers /us).
- **Duels américains en priorité** : ninja vs cosori, ecobee vs nest, ring vs blink, window vs portable AC, pellet vs gas grill, drip vs espresso, roborock vs roomba [U28][U27][H1].
- **Réponse directe en tête** (40 à 70 mots, datée) et FAQ propres aux États-Unis (C-wire, taille en BTU, « does it need a subscription », « will it fit my deadbolt »). C'est le format qu'utilisent les assistants IA, qui doivent s'appuyer sur des sources éditoriales puisqu'Amazon bloque les agents tiers [U22].
- **Ne rien promettre de fiscal** : 25C et 30C sont terminés [U9][U10] ; mentionner plutôt les aides locales des services d'eau et d'électricité, sans montant [U7].
- **Mention Amazon US** sur /us (formule de l'accord « Operating Agreement » des Partenaires US, **à vérifier**) + mention FTC visible en tête de page.

### 6.5 Affiliation
- **Amazon reste le canal n° 1** (40,5 % du e-commerce [U24]). Taux US : Kitchen 4,5 % ; Ring et Echo 4 % ; non listé 4 % ; Home, Home Improvement, Lawn & Garden, Outdoors, Tools 3 % ; télévisions 2 % [U25]. Prioriser la cuisine.
- **À vérifier tout de suite** : qu'un clic /us vers amazon.fr + homenuraen05-21 aboutit bien sur amazon.com et rapporte via Global Earning (rapport par pays dans Partenaires). Sinon, prévoir des liens amazon.com directs. Même vigilance que pour le R-U (`SEO-PLAN` § 4.7).
- **Compléments** : Walmart (« transparent commission-rate tables », approbation « within a day », mais taux non publics [U-WM]), Target Partners, Home Depot, Best Buy. **Taux et éligibilité des éditeurs non américains non vérifiés** (pages illisibles ou HTTP 403). Home Depot et Lowe's comptent surtout pour les pompes de puisard, les adoucisseurs, les ouvre-portes de garage et le gros électroménager (hypothèse à confirmer).

---

## 7. Sources (toutes lues le 1/11/2026)

**Officielles (États-Unis)**
- [U1] U.S. Census Bureau, Quarterly Retail E-Commerce Sales, T2 2026 (publié le 18/08/2026) — https://www.census.gov/retail/ecommerce.html
- [U2] U.S. Census Bureau, Advance Monthly Sales for Retail and Food Services, septembre 2026 (CB26-165, 15/10/2026) — https://www.census.gov/retail/marts/www/marts_current.pdf
- [U3] U.S. Census Bureau, Characteristics of New Housing 2025 (publié le 1/07/2026), tableaux foundation, parking, heating system — https://www.census.gov/construction/chars/current.html (fichiers xls/foundation_cust.xls, xls/parking_cust.xls, xls/heatsystem_cust.xls)
- [U4] EIA, Today in Energy, RECS 2020 (climatisation) — https://www.eia.gov/todayinenergy/detail.php?id=52558
- [U5] USGS, Hardness of Water — https://www.usgs.gov/special-topics/water-science-school/science/hardness-water
- [U6] EPA, PFAS National Primary Drinking Water Regulation (page mise à jour le 18/05/2026) — https://www.epa.gov/sdwa/and-polyfluoroalkyl-substances-pfas
- [U7] EPA WaterSense, Irrigation Controllers — https://www.epa.gov/watersense/irrigation-controllers
- [U8] ENERGY STAR, données ouvertes mises à jour le 31/10/2026 (comptages Homenura le 1/11/2026) : Certified Smart Thermostats (7p2p-wkbf), Certified Room Air Conditioners (5xn2-dv4h), Certified Dehumidifiers (mgiu-hu4z) — https://data.energystar.gov/
- [U9] IRS, Energy Efficient Home Improvement Credit (25C) — https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit
- [U10] IRS, Alternative Fuel Vehicle Refueling Property Credit (30C) — https://www.irs.gov/credits-deductions/alternative-fuel-vehicle-refueling-property-credit
- [U11] Utah Legislature, H.B. 340 « Solar Power Amendments », texte adopté (2025) — https://le.utah.gov/Session/2025/bills/enrolled/HB0340.pdf
- [U12] FTC, Final Rule Banning Fake Reviews and Testimonials (14/08/2024) — https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials

**Études et associations professionnelles (États-Unis)**
- [U13] Parks Associates, 20/10/2026 (37 % des acheteurs récents de systèmes de sécurité sont locataires ; Apple et LG) — https://www.parksassociates.com/blogs/press-releases/37-of-recent-home-security-system-buyers-are-renters-as-apple-enters-the-smart-home-market
- [U14] Parks Associates, 28/10/2026 (abonnements de sécurité) — https://www.parksassociates.com/blogs/press-releases/brinks-home-commands-highest-monthly-home-security-fees-at-6650-as-consumer-spending-rises
- [U15] Parks Associates, 22/10/2026 (gestion de l'énergie à la maison) — https://www.parksassociates.com/blogs/press-releases/parks-associates-releases-state-of-home-energy-management-report-and-hosts-smart-energy-summit-session
- [U16] CTA, 21/10/2026, Holiday Purchase Patterns (1 210 adultes, 8 au 22/09/2026) — https://www.cta.tech/press-releases/americans-plan-to-shop-for-tech-gifts-this-holiday-season
- [U17] NRF, Winter Holidays 2026 forecast (15/10/2026) — https://nrf.com/research-insights/holiday-data-and-trends/winter-holidays
- [U18] National Coffee Association, NCDT automne 2026 (15/09/2026) — https://www.ncausa.org/newsroom/NCA-Coffee-tops-beverage-charts-again-specialty-coffee-hits-new-high

**Amazon et commerce**
- [U19] Amazon, « When is Black Friday 2026? » — https://www.aboutamazon.com/news/retail/when-is-amazon-black-friday-faq
- [U20] Amazon, Prime Big Deal Days FAQ (6–7/10/2026 ; Prime Day en été) — https://www.aboutamazon.com/news/retail/amazon-prime-big-deal-days-faq
- [U21] Amazon, Alexa for Shopping — https://www.aboutamazon.com/news/retail/how-to-use-amazon-shopping-ai-assistant
- [U22] Digital Commerce 360, Amazon sales (30/10/2026) — https://www.digitalcommerce360.com/article/amazon-sales/
- [U23] Digital Commerce 360, US ecommerce sales (07/04/2026) — https://www.digitalcommerce360.com/article/us-ecommerce-sales/
- [U24] Statista, Market share of leading retail e-commerce companies in the US 2025 (mis à jour le 22/04/2026 ; estimation) — https://www.statista.com/statistics/274255/market-share-of-the-leading-retailers-in-us-e-commerce/
- [U25] Amazon Associates (US), Standard Commission Income Rates — https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ
- [U-WM] Walmart Affiliates — https://affiliates.walmart.com/

**Concurrents**
- [U26] bestpick.com (VGL Publishing AG) : accueil, sitemap (248 URL), robots.txt, /home-kitchen/, /air-fryer/, /space-heater/ — https://www.bestpick.com/ · https://www.bestpick.com/sitemap.xml
- [U27] Consumer Reports, rubriques : air fryers, appliances, home & garden, air conditioners, grills, door locks, coffee makers, sump pumps, water filters, thermostats, icemakers, home security cameras, mixers — https://www.consumerreports.org/appliances/ · https://www.consumerreports.org/home-garden/ (sous-pages `/appliances/air-fryers/`, `/appliances/air-conditioners/`, `/home-garden/grills/`, `/home-garden/door-locks/`, `/appliances/coffee-makers/`, `/home-garden/sump-pumps/`, `/home-garden/water-filters/`, `/appliances/thermostats/`, `/appliances/icemakers/`, `/home-garden/home-security-cameras/`, `/appliances/mixers/`)
- [U28] RTINGS : accueil, Best Robot Vacuums, Best Air Conditioners, Best Air Fryers — https://www.rtings.com/ · https://www.rtings.com/vacuum/reviews/best/robot · https://www.rtings.com/air-conditioner/reviews/best · https://www.rtings.com/air-fryer/reviews/best
- [U29] Vacuum Wars — https://vacuumwars.com/
- [U30] HouseFresh, « How Google is killing independent sites like ours » (17/12/2025) — https://housefresh.com/david-vs-digital-goliaths/

**Internes Homenura**
- [H1] Search Console, 28 jours au 28/10/2026 — `docs/croissance/seo-etudes/gsc-2026-10-30.md` et `fr-uk.md` B.6
- [H2] Titres et descriptions /us actuels — `lib/catalog/category-heads/us.ts` (comptage du 1/11/2026 : 30 descriptions sur 53 citent l'une de 37 marques ou normes, dont tado, Netatmo, OpenTherm, Thermor, Sauter, Somfy, Nuki, BTicino, Wallbox, Easee, Zaptec, GARDENA, Hörmann, Laurastar, Xiaomi, Hoymiles, Marstek ; Bosch, Haier, Miele et Shelly ne sont pas comptés)
- [H3] Analyse de vergleich.org (18 797 URL, gabarits, longue traîne) — `docs/croissance/seo-etudes/dach.md` § 3

**Consultées sans données exploitables** : AHAM (aucune donnée de livraisons publique), HPBA (données réservées aux membres), Circana (404), Amazon.com Best Sellers (503), Wirecutter et CNET (lecture bloquée), Home Depot (403), Target Partners et Best Buy (taux non affichés), eMarketer (403).
