# Étude SEO de marché — Homenura : France (+ Belgique francophone) et Royaume-Uni

Date du relevé : **30 octobre 2026**. Rédigé en français. Aucun code ni contenu du site n'a été modifié (lecture seule).
Contexte : catégories et mots-clés actuels dans `categories-mots-cles-actuels.md` (colonnes « kw fr » et « kw en »). Search Console, 28 jours au 28/10/2026 (notes `gsc-2026-10-30.md`) : site entier 458 clics / 57 k impressions / CTR 0,8 % / position 9,5 ; **France 45 clics, 3 134 impr., position 12,4 ; Royaume-Uni 19 clics, 2 135 impr., CTR 0,9 %, position 16,7 ; Belgique 18 clics, 1 016 impr. ; États-Unis 8 clics pour 4 479 impr. (CTR 0,2 %) ; Inde 17 clics pour 1 556 impr.** ; page EN « ninja vs philips » : 58 clics / 4 904 impressions (tous pays).

---

## 0. L'essentiel (à lire en 2 minutes)

**Sept constats qui changent les priorités**

1. **Les pages EN sont techniquement branchées sur la France, pas sur le Royaume-Uni.** Toutes les pages /en lues (guide air fryer, Ninja vs Philips, catégories solaire, déshumidificateurs, chauffages, thermostats, cafetières, aspirateurs-laveurs) n'ont **que des liens amazon.fr** (18/18 sur « Ninja vs Philips », 39/39 sur le guide), aucun prix en £, des références produit EU (AF500EU…), un slug français (`/en/blog/ninja-vs-philips-quel-choisir`) et un hreflang `en` sans `en-GB`. Même si l'essentiel des impressions EN vient d'audiences non britanniques (point 5), ces défauts pénalisent les rares visiteurs britanniques (19 clics en 28 jours) et exposent à des commissions perdues côté R-U. (Détails B.3 et B.6.)
2. **Plusieurs mots-clés actuels ne sont pas ceux que les gens tapent** : « cafetière connectée » (FR) / « smart coffee machine » (EN) au lieu de **machine à café à grain / bean to cup** ; « aspirateur laveur robot » au lieu de **aspirateur robot laveur** ; « tondeuse robot » au lieu de **robot tondeuse** ; « kit solaire balcon » / « balcony solar » au lieu de **panneau solaire plug and play** (FR) et **plug-in solar panels** (UK) ; « smart space heater » (terme américain) ; « smart smoke detector » au lieu de **smoke alarm** ; « smart dehumidifier » qui perd la requête **dehumidifier**. (Annexe D.)
3. **Au R-U, une fenêtre s'ouvre maintenant** : la demande « cost to run » (dehumidifier, heated airer, oil-filled radiator, tumble dryer) culmine en novembre (dehumidifier cost to run : nov. 28,7 vs ≈ 0 de mars à août), les pages qui répondent sont périmées (2023–2025), le plafond Ofgem est à **26,32 p/kWh** jusqu'au 31/12, et **le plug-in solar est légal depuis le 27/08/2026** sans comparatif de modèles UK. (B.4.)
4. **En France, l'Aperçu IA de Google apparaît sur 17 requêtes sur 18** (Les Numériques cité dans 8, LeBonTri — même modèle affilié que nous — dans 4). Au R-U il n'apparaît que sur 6 requêtes sur 17, **jamais sur les 11 requêtes « best X / deals »**. Les SERP sont fragmentés (presse « guide shopping », petits sites de niche, marques, enseignes) : pas de verrou Les Numériques / Que Choisir / Which? sur les requêtes de niche. (A.2, B.2.)
5. **Le « problème de CTR » des pages EN est d'abord un problème d'audience et de position, pas de titre.** Le R-U ne totalise que **2 135 impressions pour tout le site** (position moyenne **16,7** = page 2), alors que les États-Unis en totalisent 4 479 (CTR 0,2 %) et l'Inde 1 556. Une page EN à 4 904 impressions ne peut donc pas être majoritairement vue par des Britanniques : l'essentiel de ses impressions vient d'audiences non britanniques qui ne cliqueront jamais sur un guide aux liens amazon.fr. Deux chantiers distincts : **monter au R-U de la page 2 à la page 1** (pertinence UK, vocabulaire, £) et **ne plus piloter les pages EN avec le CTR global** (B.6). Même constat en France : position moyenne 12,4.
6. **Ce qui marche déjà chez nous (GSC)** : les **duels « X vs Y »** (65 clics sur `/it/blog/ninja-vs-philips-quel-choisir`, 58 en EN) et les **pages « problème »** (≈ 30 clics cumulés sur « balai-aspirateur-led-clignote » en 5 langues) ; plus ≈ 8 000 impressions sur 28 jours de **requêtes synthétiques d'assistants IA** en positions 2 à 8 (0 clic) — preuve que le site est déjà dans les chaînes de recherche des IA. Les recommandations ci-dessous renforcent ces deux gabarits.
7. **Black Friday = vendredi 27/11/2026** (Cyber Monday 30/11) ; soldes d'hiver FR **6/01 → 2/02/2027** ; Boxing Day **samedi 26/12/2026**. Il reste **moins de 4 semaines** : les pages « deals » doivent être étoffées avant le 9 novembre et réutilisées (même URL) pour les soldes. (A.4, B.4.)

**Ce qui est mesuré et ce qui est estimé** : SERP, AI Overviews, Suggest, structure des pages concurrentes, dates, schema, tendances Google (indices relatifs), chiffres Ahrefs publics = **mesurés**. Les **volumes mensuels absolus sont des ordres de grandeur estimés (± ×3)** car aucun outil de volumes n'était accessible ; ils sont marqués « estimation » et doivent être validés dans Google Keyword Planner ou la Search Console.

---

## 0.1 Méthode, sources et limites

| Source | Usage | Date / portée |
|---|---|---|
| Google SERP (google.fr hl=fr gl=fr ; google.co.uk hl=en-GB gl=uk), navigateur du poste, cookies refusés | 18 requêtes FR + 17 requêtes UK : organiques, Aperçu IA et domaines cités, PAA, recherches associées | 30/10/2026 ; un relevé par requête ; annonces Shopping en espagnol ⇒ IP du poste probablement hors FR/UK |
| Google Suggest (saisie automatique) | Vocabulaire réel : 22 termes FR + 22 termes UK × 16 modificateurs (≈ 700 requêtes) | 30/10/2026 ; reflète ce que les gens tapent, **pas des volumes** ; le paramètre pays n'est pas toujours respecté (mots américains parasites côté UK, filtrés) |
| Google Trends (indice relatif 0–100, 5 ans, FR et GB) | Tailles relatives et saisonnalité, 12 comparaisons de 5 termes (6 FR, 6 UK) ; chaque requête contient l'ancre « airfryer » / « air fryer » | jusqu'à sept. 2026 ; quotas Google ⇒ certaines catégories non mesurées |
| Ahrefs (pages publiques « top 5 mots-clés » par site, miroir ahrefstop.com) | Ancres de volume : « air fryer » FR **138 K** (ninjakitchen.fr), « ninja air fryer » UK **419 K** (ninjakitchen.co.uk), « best portable air conditioner » UK **16 K** (idealhome.co.uk), « best dehumidifier uk » **5 K** (expertreviews.co.uk) | octobre 2026 |
| Pi Datametrics (2022) et Sistrix | « Air fryer » UK : 365 K recherches/mois en moyenne début 2022 (pic 1,84 M la semaine du 5/09/2022) ; Sistrix : 246 K (non daté) | 2022 |
| Pages concurrentes (HTML) | Structure, schema.org, dates, liens : 5 pages FR + 7 pages UK | 30/10/2026 |
| Homenura (sitemap + pages publiques) | État actuel des titres, liens, slugs, hreflang | 30/10/2026, lecture seule |
| Search Console Homenura (notes `gsc-2026-10-30.md`, lues dans le Chrome de l'utilisateur) | Impressions, clics, positions par pays et par page | 28 jours au 28/10/2026 ; fichier fourni, non revérifié |

**Limites assumées**
- Pas d'accès à Google Keyword Planner, Semrush ou Ahrefs complet : **les volumes de cette étude sont des estimations** (méthode : indice Trends relatif × ancre publique ; ± ×3).
- Le budget de recherche web a été épuisé en fin d'étude : **non vérifiés** — étude de citations IA spécifique au R-U, dates des soldes d'hiver belges, tarif du kWh français, date d'annonce du plafond Ofgem janv.–mars 2027.
- Les Numériques et Le Parisien bloquent les lectures automatiques : analysés **au niveau SERP uniquement**. Que Choisir (comparatif) et Which? (notes) sont derrière paywall.
- Search Console : seules les synthèses du fichier `gsc-2026-10-30.md` ont été utilisées (pas d'accès direct, donc pas de répartition par page × pays × requête).
- Les titres « live » de Homenura ont été relevés vers 17 h le 30/10 ; certains diffèrent déjà de `categories-titres-actuels.md` (ex. cafetières : « connectées » → « automatiques » — toujours pas « à grain / bean to cup »).
- Un résumé de recherche attribue à BrightEdge « YouTube = 62 % des citations IA en petit électroménager de cuisine » : PDF illisible, **non retenu**. Un chiffre « TechRadar cité dans 23 % des réponses » est un test B2B logiciels, **non retenu**.

---


## PARTIE A — FRANCE (et Belgique francophone)

### A.1 Vocabulaire réel des acheteurs (18 catégories prioritaires)

**Comment lire le tableau**
- **Indice Trends** = taille relative sur 52 semaines, **« airfryer » (1 mot) = 100**, Google Trends France. Mesuré. Pour « air fryer » (2 mots), indice 5 ans ≈ 212 (il pèse environ deux fois « airfryer »).
- **Volume estimé** = bande de moyenne mensuelle sur 12 mois, **estimation** : l'indice × une ancre publique (Ahrefs : « air fryer » FR = **138 000**/mois ⇒ « airfryer » ≈ 65 000). Précision ± ×3 ; fiable pour **classer** les catégories, pas pour la valeur absolue. Bandes : **XL** ≥ 100 K · **L** 30–100 K · **M** 10–30 K · **S** 3–10 K · **XS** < 3 K. La saisonnalité est donnée comme écart entre le mois de pic et le mois creux (Trends, moyennes mensuelles 2023-2026).
- **Variantes** et **modificateurs** = suggestions Google Autocomplete du 30/10/2026, dans l'ordre d'apparition (⇒ ordre approximatif de popularité).
- **Intention** : **I** = investigation commerciale (meilleur, comparatif, avis), **T** = transactionnelle (pas cher + enseigne, prix), **N** = information (vs, consommation, comment), **P** = problème (ne marche plus), **L** = locale/navigationnelle.

| # | Catégorie — kw actuel | Terme dominant et variantes réelles | Modificateurs dominants (ordre Suggest) | Indice / volume estimé | Intention | Verdict kw actuel |
|---|---|---|---|---|---|---|
| 1 | **Airfryers** — « meilleur airfryer » | **air fryer** (2 mots) et **airfryer** ; friteuse sans huile ; friteuse à air chaud (surtout Lidl/Aldi : Silvercrest, Ambiano) ; airfryer double / double bac / XXL / en verre (Ninja Crispi) ; sans pfas | marque (ninja, philips, moulinex, cosori, lidl, carrefour) · avis · pas cher + enseigne (leclerc, lidl, action, carrefour, electro dépôt, darty, gifi) · meilleur rapport qualité prix · comparatif · que choisir · les numériques · **moins de 100 euros** · vs four / cookeo / friteuse / micro-ondes / thermomix · consommation · black friday | « air fryer » **138 K (Ahrefs)** ; airfryer 100 (≈ 65 K) ; friteuse sans huile 19 (≈ 12 K) ; friteuse à air chaud 1,6 (≈ 1 K) — nov.–déc. ×2,4 vs juin | I, T, N | **OK**, ajouter « air fryer » (2 mots) et « friteuse sans huile » dans titres/H2 ; ne pas viser « friteuse à air chaud » seul |
| 2 | **Aspirateurs laveurs** — « aspirateur laveur robot » | **aspirateur robot laveur** ; robot aspirateur laveur ; aspirateur robot lavant ; robot laveur | dreame · roborock · ecovacs · dyson · avis · pas cher · meilleur rapport qualité prix · comparatif · que choisir · les numériques · 60 millions de consommateurs · avec station · moins de 1000 euros | 21 (≈ 13 K) — nov. ×2,3 vs mars–avr. | I, T | **Mal choisi (ordre)** → « aspirateur robot laveur » |
| 3 | **Cafetières** — « meilleure cafetière connectée » | **machine à café à grain(s)** ; machine à café avec broyeur ; expresso broyeur ; cafetière à grain ; machine à café automatique / super automatique | marque (delonghi, krups, philips, jura, melitta, ninja, cecotec, silvercrest) · pas cher + enseigne · avis · comparatif · moins de 300 / 400 / 500 euros · double bac · haut de gamme · vs capsule · ou moulu · que choisir | 9 (≈ 6 K) — nov. ×2,1 vs février | I, T | **Mal choisi** : « cafetière connectée » n'apparaît dans aucune suggestion → « machine à café à grain » |
| 4 | **Aspirateurs balais** — « meilleur aspirateur balai » | **aspirateur balai** ; aspirateur balai sans fil ; aspirateur sans fil ; aspirateur balai laveur | dyson · rowenta · shark · samsung · bosch · **moins de 100 / 200 / 300 euros** · pas cher · meilleur rapport qualité prix · avis · comparatif · 60 millions · que choisir · les numériques | 35 (≈ 22 K) — nov. ×2,0 vs sept. | I, T | **OK** ; décliner par budget |
| 5 | **Thermostats** — « meilleur thermostat connecté » | **thermostat connecté** ; thermostat intelligent ; thermostat wifi ; tête thermostatique connectée ; robinet thermostatique connecté ; thermostat netatmo (la marque domine) | chaudière gaz · radiateur électrique fil pilote · radiateur · **gratuit** (aides énergie) · netatmo vs tado · avis · prix · ne fonctionne plus / panne / pile | 4 (≈ 2,6 K) — **nov. ×6,8 vs juin** ⇒ ≈ 9 K en pointe | I, N, P | **OK** ; segmenter par type de chauffage (gaz / fil pilote / eau) |
| 6 | **Sonnettes vidéo** — « meilleure sonnette vidéo » | **sonnette vidéo (sans fil)** ; sonnette caméra ; sonnette connectée ; interphone vidéo ; portier vidéo | sans fil · longue portée · avec écran · filaire · **sans abonnement** · ring · eufy · LSC/Action · leroy merlin · panneau solaire · ouverture portail | ≈ 0 sur Trends (« sonnette vidéo » et « sonnette connectée » : < 0,2) ⇒ **XS** | I, T | **OK mais petite demande** ; ajouter « sans fil », « sans abonnement » |
| 7 | **Serrures connectées** — « serrure connectée » | **serrure connectée** ; serrure intelligente ; serrure électronique ; smart lock | nuki · somfy · verisure · tapo · netatmo · aqara · porte d'entrée · airbnb · sans changer le cylindre · sans wifi · avis · prix | 2 (≈ 1,4 K) | I | **OK** ; angles Airbnb et « sans changer le cylindre » |
| 8 | **Détecteurs fumée & CO** — « détecteur fumée connecté » | **détecteur de fumée** ; avertisseur de fumée ; détecteur de fumée connecté ; détecteur incendie | leroy merlin · kidde · action · castorama · **qui bip** · locataire ou propriétaire · NF · avis · que choisir · test 60 millions · kidde 10y29 (clignote, bip) | 5 (≈ 3,5 K) | T, I, P | **Mal choisi** : la demande est « détecteur de fumée » (obligation légale, pas cher, « qui bip ») ; Que Choisir : le connecté est « 100 % gadget » |
| 9 | **Purificateurs d'air** — « meilleur purificateur d'air » | **purificateur d'air** ; purificateur d'air hepa ; ioniseur d'air | dyson · philips · xiaomi · rowenta · ikea · **avis médical / allergologue / scientifique** · danger · à quoi ça sert · test 60 millions · que choisir · pas cher · chambre · allergie · asthme | 7 (≈ 4,4 K) — plat sur l'année | I, N | **OK** ; sujet santé (scepticisme) : sourcer, ne pas promettre |
| 10 | **Déshumidificateurs** — « meilleur déshumidificateur » (titre « connectés ») | **déshumidificateur** (d'air, électrique) ; absorbeur d'humidité (Rubson) ; déshydrateur (confusion) | chambre · salle de bain · cave · silencieux · professionnel · location · avis · que choisir · 60 millions · comparatif · consommation · delonghi / trotec / comfee | 9 (≈ 5,7 K) — **nov. ×4,8 vs avril** | I, N | **OK**, mais retirer « connectés » du titre |
| 11 | **Climatiseurs mobiles** — « climatiseur mobile » | **climatiseur mobile** ; clim mobile ; **airco mobile (Belgique)** ; climatiseur portable / portatif ; **climatiseur sans évacuation** ; réversible ; split mobile | silencieux · 12000 btu · avec / sans évacuation · avis · que choisir · 60 millions · test · comparatif · pas cher + enseigne · electrodepot · leroy merlin | 79 (≈ 52 K) — **juin = 2,7 × la moyenne annuelle**, ≈ 0 d'octobre à mars ; canicules : semaines à > 10 × la moyenne | I, T, N | **OK** ; créer la page « sans évacuation » (SERP à 9 résultats organiques, IA cite Boulanger/Que Choisir) |
| 12 | **Chauffages d'appoint** — « chauffage d'appoint connecté » | **radiateur électrique** (inertie, économique, basse conso, mobile, mural, 2000 W) ; **chauffage d'appoint** (électrique, gaz, pétrole, salle de bain, sans électricité, soufflant) ; convecteur | pas cher · meilleur rapport qualité prix · consommation · comparatif · que choisir · avis forum | radiateur électrique 12 (≈ 8 K) ; chauffage d'appoint 6 (≈ 3,8 K) — **nov. ×38 vs juin** | I, T, N | **Mal choisi** : « connecté » n'existe pas dans la demande ; **page « radiateur électrique » manquante** |
| 13 | **Tondeuses robots** — « meilleure tondeuse robot » | **robot tondeuse** ; tondeuse robot ; robot tondeuse **sans fil périphérique** (forme tapée ; « périmétrique » est la forme correcte) ; sans câble ; GPS / RTK | husqvarna · worx · parkside (Lidl) · stihl · mammotion · kress · navimow · dreame · 500 / 1000 / 2500 m² · pas cher petite surface · avis · que choisir | 37 (≈ 24 K) — **avril ×8,5 vs déc.–janv.** (mars–mai) | I, T | **Mal choisi (ordre)** → « robot tondeuse » |
| 14 | **Robots piscine** — « meilleur robot de piscine » | **robot piscine** ; robot de piscine ; robot nettoyeur piscine ; aspirateur piscine | sans fil · hors sol · zodiac · dolphin · aiper · intex · bestway · beatbot · pas cher · que choisir · fond et parois · enterrée | 16 (≈ 11 K) — **juin = 2,3 × la moyenne**, ≈ 0 nov.–janv. (avril–juillet) | I, T | **Mineur** → « robot piscine » (sans « de ») |
| 15 | **Caméras extérieures** — « caméra extérieure » | **caméra de surveillance extérieure / extérieur** ; caméra IP extérieure ; caméra solaire ; 4G autonome | sans fil · solaire · wifi · vision nocturne · **sans abonnement** · sans wifi · motorisée · tapo c410 · eufy · imou · anran | 8 (≈ 5 K) — plat | I, T | **Trop court** → « caméra de surveillance extérieure » + solaire / sans abonnement |
| 16 | **Bornes de recharge VE** — « borne de recharge voiture électrique » | **borne de recharge** (mais surtout stations publiques) ; borne de recharge domicile ; wallbox ; 7 kW monophasé ; installation borne de recharge | autour de moi · à proximité · tesla · lidl · schneider · pas cher · installation · avis (opérateurs publics) | 29 (≈ 19 K) **dont une grande part de recherche locale/publique** — plat | L, I | **Intention polluée** → « borne de recharge domicile / wallbox » |
| 17 | **Prises connectées** — « meilleure prise connectée » | **prise connectée** ; prise wifi ; prise zigbee ; prise intelligente ; prise programmable ; multiprise connectée | tapo · meross · somfy · ikea · legrand · action · alexa · homekit · matter · home assistant · **consommation** · extérieur · avis · pas cher | 3 (≈ 1,8 K) — nov.–déc. ×2 vs été | I, T | **OK** |
| 18 | **Solaire balcon** — « kit solaire balcon » | **panneau solaire plug and play** ; kit solaire plug and play ; station solaire ; panneau solaire prêt à brancher ; kit solaire autoconsommation | avec batterie · 3000 W / 1000 W / 500 W · leroy merlin · lidl · brico dépôt · beem / sunology / sunethic / ecoflow · avis · rentabilité · **réglementation** · piège fiscal | plug and play 2,6 (≈ 1,7 K) ; « kit solaire balcon » ≈ 0 (< 0,2 K) — plat | I, N | **Mal choisi** : « kit solaire balcon » quasi absent → « panneau solaire plug and play » |

**Grille de modificateurs (valable pour toutes les catégories FR, par ordre d'apparition)** : `avis` → `pas cher` (+ enseigne : leclerc, lidl, action, carrefour, electro dépôt, darty, boulanger, amazon) → `meilleur rapport qualité prix` → `meilleur` + année → `test` / `comparatif` → `que choisir` / `ufc que choisir` → `les numériques` / `60 millions de consommateurs` → `moins de X euros` → `vs` / `ou` → `consommation` / `prix` → `ne marche plus` / `panne` / `bip` / `ne chauffe plus`. Les acheteurs français **ajoutent le nom du testeur** (« airfryer que choisir », « robot piscine ufc que choisir », « test purificateur d'air 60 millions ») : c'est une requête à servir (A.5, action 9).

**Belgique francophone — différences observées** : « **airco mobile** » (avis, test achat, comparatif) en plus de « clim mobile » ; « **friteuse à air chaud** » (Test-Achats, Coolblue.be, CallMePower.be, MediaMarkt.be l'emploient) ; **Test-Achats** est le « Que Choisir » belge ; enseignes de référence MediaMarkt.be, Coolblue.be (MediaMarkt.be est n°1 organique sur « meilleur airfryer » en gl=fr). Le catalogue et les titres FR peuvent rester communs ; ajouter ces mots dans les FAQ et citer Test-Achats (A.5, action 10).

**Catégories du catalogue non étudiées** (budget de recherche) : réfrigérateurs connectés, lave-linge, robots multifonctions / blenders / fours, éclairage, volets, hubs, compteurs, batteries, stations électriques, caméras intérieures, alarmes, trackers, etc. À suivre en priorité d'après le catalogue (colonne « vol » = high) : lave-linge connecté, caméras intérieures, alarmes sans abonnement, éclairage connecté, robots multifonctions.

### A.2 Qui domine les SERP en France (relevé du 30/10/2026)

**Méthode** : 18 requêtes saisies sur `google.fr` (hl=fr, gl=fr) dans le navigateur du poste, bandeau cookies refusé. Pour chaque requête : bloc « Aperçu IA » (AI Overview) et domaines cités, résultats organiques, « Autres questions », recherches associées. Limites : un seul relevé par requête ; les annonces Shopping affichées étaient en espagnol, donc l'IP du poste n'est probablement pas en France (les organiques suivent hl/gl mais peuvent varier d'un relevé à l'autre) ; Google n'a affiché que 4 à 10 résultats organiques par page.

| # | Requête | Aperçu IA ? | Domaines cités dans l'IA | Organiques (ordre d'affichage) | Autres blocs |
|---|---|---|---|---|---|
| 1 | meilleur airfryer | oui | Les Numériques, Capital.fr | MediaMarkt.be (guide, « il y a 3 jours »), Ouest-France (oct. 2024), Le Télégramme (oct. 2025), forum Les Numériques (août 2026) | 3 vidéos YouTube, bloc comparateur Klarna ; PAA : « Pourquoi les gens revendent-ils leur airfryer ? », « Quel est le meilleur airfryer selon UFC-Que Choisir ? » |
| 2 | aspirateur robot laveur comparatif | oui | Les Numériques, Darty, Lavaspi, Maniaques, Tout Techno, meilleur-robot-aspirateur-laveur.fr | MOVA, Dreame, Ecovacs (3 sites de marques), Maniaques, Les Numériques (janv. 2026) | PAA : « aspirateur laveur ou robot laveur ? » |
| 3 | meilleure machine à café à grain | oui | Brâam, Coffee Webstore, lecoffeelab.fr, conseilguide, Cafelista, Les Numériques | MaxiCoffee (blog, 2 pages), idealo, BFMTV (août 2026), Que Choisir (comparatif « avec broyeur », janv. 2026), Graindecafe | Reddit r/GuideAchat ; recherches associées : « double bac », « haut de gamme » |
| 4 | meilleur déshumidificateur | oui | Les Numériques, LeBonTri (x2), Castorama, déshumidificateur.fr (domaine exact-match), Bestherm | Irsap (marque), J'équipe ma maison, CAA-Québec, AtmosAir, Marie Claire, DHnet (Belgique), maison-et-bricolage.fr | PAA : « consomme-t-il beaucoup d'électricité ? » |
| 5 | meilleur thermostat connecté | oui | LaPrimeEnergie.fr, LeBonTri, labellenergie, Hello Watt | Frandroid, Capital.fr (déc. 2025), Selectra Climate (2023), Powerplanet, Corse Matin (« Top 5 sur Amazon », 2025) | associées : « fil pilote », « gratuit chaudière gaz » |
| 6 | climatiseur mobile sans évacuation | oui | Boulanger, Destockage Habitat, Que Choisir | Guide Artisan, 4saisons.fr (x2), Darty (x2), climatisationreversible.net, chauffage-et-climatisation.fr, Leroy Merlin, Espace Aubade | — |
| 7 | airfryer ninja vs philips | oui | YouTube (Top Avis Comparatif, Sam & Dom's), Le Parisien | Le Parisien (x2, janv. 2026), SharkNinja.es, RTINGS, CNews (nov. 2025), Le Airfryer Français, Versus, WebStar-Electro | Reddit r/airfryer ; associées : « Ninja vs Philips air fryer reddit » |
| 8 | meilleur aspirateur balai sans fil | oui | LeBonTri | Maniaques (x2), Notre Temps, SharkNinja.es, Futura (févr. 2025), J'équipe ma maison, Le Parisien (juil. 2026), Darty, Joybuy | associées : « moins de 200 / 100 / 300 euros » |
| 9 | airfryer consommation électrique | oui | la bellenergie, Que Choisir, Les Numériques | Fournisseurs-Electricite.com (2024), Marmiton (août 2025), Alpiq | groupes Facebook, Reddit |
| 10 | panneau solaire plug and play avis | oui | EDF solutions solaires, Mon Kit Solaire, Artyseo, Smart To, Hello Watt, Sunethic | Hello Watt (sept. 2026), Conseils Thermiques, Forum Que Choisir, Mon Kit Solaire, Linternaute, Les Numériques (mars 2026, « le piège fiscal »), Forum photovoltaïque | PAA : « nouvelle réglementation ? » |
| 11 | meilleur airfryer moins de 100 euros | **non** | — | Saveurs Magazine (mars 2025), Les Numériques (French Days, mai 2026), mesrecettesairfryer.fr, Le Parisien (juin 2026), Amazon.fr, Que Choisir (« résultats réservés aux abonnés », 7 oct. 2026) | — |
| 12 | airfryer ne chauffe plus | oui | Aosom.fr, SOS Accessoire, Deco.fr, Marmiton | SOS Accessoire, Notre Temps (juil. 2024), Marmiton (juil. 2024), Deco.fr (juil. 2024), Aosom.fr, Miss Pièces | Reddit ; associées : « Philips / Moulinex ne chauffe plus » |
| 13 | black friday airfryer | oui | Boulanger | Boulanger (x2, « Friteuse Black Friday 2026 »), Carrefour (x2, page « 2025 » non mise à jour), Darty, BFMTV (30/11/2025), Frifri, GQ (28/11/2025), Linternaute (25/11/2025), LaboMaison (« Black Friday airfryer 2026 ») | PAA : « Y a-t-il des soldes sur les airfryers ? » |
| 14 | robot tondeuse sans fil périmétrique | oui | OOGarden, Navimow FR, Husqvarna | Navimow FR (x2), Terraculture (x2), Husqvarna, Jardimax, OOGarden | associées : « sans fil périphérique GPS » |
| 15 | meilleure sonnette vidéo | oui | Les Numériques | Les Numériques (« 16 sonnettes connectées testées Octobre 2026 »), domotique-store.fr, Eufy (marque), Frandroid (sept. 2026), Capital.fr (août 2026) | PAA : « sans abonnement » |
| 16 | meilleur purificateur d'air | oui | Actu.fr, Les Numériques (x2), Daikin, LeBonTri | Que Choisir (**mai 2020**), Actu.fr (mai 2026), Boulanger (mars 2026), Les Numériques (« Octobre 2026 », mis à jour « il y a 2 jours »), LeBonTri (18 oct. 2026), Daikin, Eoleaf, Amazon.fr | associées : « avis médical », « danger » |
| 17 | meilleur robot piscine | oui | L'Express, Les Numériques, MyPiscine, Electro Depot, Homepiscine, PoolPlanet | MyPiscine, L'Express (2025), PoolPlanet, Les Numériques, LeBonTri (juil. 2026), Cash Piscines, Electro Depot | associées : « UFC Que Choisir robot piscine » |
| 18 | détecteur de fumée connecté avis | oui | Que Choisir, Europ-Camera, sparx-elec.fr, leveltech.fr, YouTube, Les Alexiens | Que Choisir (« un détecteur connecté est-il utile ? Non, c'est 100 % gadget »), Capital.fr, Les Alexiens, X-Sense (marque), Domadoo | — |

**Ce que montrent ces 18 SERP**

- **L'Aperçu IA est quasi systématique en France** : 17 requêtes sur 18, y compris sur les requêtes « meilleur X » (seule exception : « meilleur airfryer moins de 100 euros »). Il est donc la première chose lue ; les clics organiques restent faibles même en bonne position. Référence externe : Ahrefs mesure −34,5 % de CTR sur le résultat n°1 quand un AI Overview est présent (300 000 mots-clés, mars 2024 vs mars 2025, essentiellement US) — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks/).
- **Les Numériques est la source la plus citée par l'IA** (8 des 17 blocs IA), devant LeBonTri (4), Que Choisir (3) et Boulanger (3). En organique, Les Numériques apparaît dans 7 SERP sur 18, Que Choisir dans 4 (dont un contenu de **2020** et un comparatif **réservé aux abonnés**), Le Parisien dans 3, Capital dans 3.
- **LeBonTri.fr = même modèle économique que Homenura** (comparatifs affiliés Amazon, aucun test revendiqué, 142 liens amazon.fr sur sa page airfryer) et il est déjà cité par l'IA sur 4 requêtes (déshumidificateur, thermostat, aspirateur balai, purificateur) : preuve qu'un site affilié « sans test » peut être cité si la page est dense, datée et structurée.
- **Les SERP sont très fragmentés** : presse généraliste « guide shopping » (Le Parisien, Ouest-France, Le Télégramme, BFMTV, CNews, Capital, Marie Claire, Notre Temps, L'Express, Actu.fr), petits sites de niche (Maniaques, Terraculture, MyPiscine, Mon Kit Solaire, 4saisons.fr, mesrecettesairfryer.fr, J'équipe ma maison, domotique-store.fr), **sites de marques** (MOVA, Dreame, Ecovacs, Eufy, Navimow, Daikin, Irsap, X-Sense) et enseignes (Darty, Boulanger, Leroy Merlin, Carrefour, Electro Depot, MediaMarkt.be). Il n'y a pas de verrou Les Numériques/Que Choisir sur les requêtes de niche.
- **Absents de nos 18 SERP** : 01net, 60 Millions de consommateurs, meilleurs.fr (réseau vergleich.org), Clubic, Journal du Geek. Ils existent peut-être sur d'autres requêtes, mais ils ne sont pas un obstacle sur ce panel.
- **Requêtes « problème » et « consommation » = sources faibles** : « airfryer ne chauffe plus » est tenu par un vendeur de pièces (SOS Accessoire), Marmiton, Notre Temps, Deco.fr (contenus de **juillet 2024**) et l'IA cite Aosom (vendeur de meubles) ; « consommation électrique » est tenu par Marmiton, Alpiq, un comparateur de fournisseurs. Aucune de ces pages n'est un guide dédié et daté.
- **Termes « Black Friday » déjà occupés par les enseignes** (Boulanger, Carrefour, Darty) et la presse qui publie la semaine même (BFMTV, GQ, Linternaute le 25–30 nov. 2025).
- **Belgique francophone** (17 clics GSC) : MediaMarkt.be est le n°1 organique sur « meilleur airfryer » en gl=fr, DHnet apparaît sur « déshumidificateur ». Les acteurs belges visibles par ailleurs : Test-Achats (comparateurs airfryers), Coolblue.be, CallMePower.be (comparaison airfryer/friteuse). Le vocabulaire belge diffère : « airco mobile », « friteuse à air chaud » (voir A.1).

**Qui est cité par ChatGPT / Perplexity en France (documenté)**

- Étude Ahrefs Brand Radar (janvier 2026 pour la France ; 957 000 prompts ChatGPT, 953 500 Perplexity) : sur ChatGPT France, Wikipédia est n°1 (4,88 %) ; BFM TV, Le Parisien, Le Figaro et Le Monde sont cités ; sur Perplexity, YouTube est n°1 (7,16 %). ChatGPT sert d'assistant d'achat et s'appuie sur des marketplaces (Amazon) et des enseignes (Fnac, Darty). Les Numériques, Que Choisir et Frandroid ne sont pas mentionnés dans le texte de l'étude (le classement détaillé est en image, non lisible) — [Ahrefs FR](https://ahrefs.com/fr/blog/top-domaines-cites-par-ia/).
- Index agrégé de six études (Everything-PR, août 2026, mis à jour le 20/10/2026) : pour les requêtes produit, Amazon est la source d'achat dominante de ChatGPT ; Reddit et YouTube dominent les AI Overviews (YouTube ≈ 19 % des sources) — [Everything PR News](https://everything-pr.com/ai-platform-citation-source-index-2026/). Données US/multi-pays, pas spécifiques à la France.
- Observation directe (ce relevé) : dans Google, YouTube est cité sur la requête « Ninja vs Philips » ; le reste des citations IA vient surtout de Les Numériques, LeBonTri, Que Choisir, Boulanger/Darty/Castorama et de petits sites spécialisés.
- **Indice interne (Search Console, 28 j)** : ≈ 8 000 impressions de **requêtes synthétiques d'assistants IA / outils de suivi de prompts** (ex. « air fryer for remote workers 2026 », « in 2026 air purifier pros and cons ») sur lesquelles Homenura est déjà en positions 2 à 8, sans clic (fichier `gsc-2026-10-30.md`). Ce sont les requêtes de « fan-out » que les assistants envoient à Google : le site est déjà dans la chaîne de sélection des réponses IA, sans que cela se voie en clics. Pour être **cité** plutôt que seulement affiché : réponse courte en tête, FAQ calquée sur les PAA, données datées et chiffrées.
- Non vérifié : une étude citée dans un résumé (BrightEdge, fêtes 2025) indiquerait YouTube à 62 % des citations IA pour les « petits électroménagers de cuisine » ; le PDF n'était pas lisible, donc **ce chiffre n'est pas retenu**.

### A.3 Leurs techniques et leurs faiblesses exploitables (France)

**Pages analysées en HTML le 30/10/2026** (structure, schema.org, dates, liens). Les chiffres viennent d'un script de lecture (balises h1/h2/h3, tables, JSON-LD, liens sortants), pas d'une estimation.

| Page | Titre / H1 | Longueur & structure | Données structurées | Auteur / dates | Liens marchands | Particularité |
|---|---|---|---|---|---|---|
| **LeBonTri** — [meilleur-airfryer](https://lebontri.fr/blog/cuisine-electromenager/meilleur-airfryer) | « Meilleur airfryer 2026 : 12 friteuses sans huile comparées » ; H1 plus long avec un angle contre-intuitif : « « 9 L » veut souvent dire deux paniers de 4,5 L » | **12 879 mots**, 25 H2, 89 H3, **11 tableaux** | Article, FAQPage, ItemList, Product, Review, Offer (MerchantReturnPolicy…) | Auteur = la marque « LeBonTri » ; publié 25/09/2026, **modifié 18/10/2026** | **142 liens amazon.fr** (rel sponsored + nofollow), un seul marchand | Cite des sources officielles (ecologie.gouv.fr, eur-lex, service-public.fr, CRE, Légifrance) ; aucune affirmation « testé » |
| **Futura Sciences** — [friteuse sans huile](https://www.futura-sciences.com/conso/comparatifs/meilleure-friteuse-sans-huile-comparatif/) | « 🥇 Meilleures Friteuses Sans Huile 2026 – Test et Comparatif » | 5 851 mots, 17 H2, **19 questions FAQ dépliables**, 0 tableau | FAQPage, ItemList, WebPage | Pas d'auteur dans le schema ; modifié 07/08/2026 (« Dernière mise à jour : 07.08.2026 ») | liens internes, mention « commission » | Emoji dans le title ; FAQ très fournie |
| **Que Choisir** — [guide d'achat airfryer](https://www.quechoisir.org/guide-d-achat-air-fryer-n130986/) | « Comment choisir sa friteuse électrique sans huile ? » | 6 927 mots, 21 H2, aucun tableau | NewsArticle, Person | Auteure nommée (Anne-Sophie Bedel) ; publié 09/2024, **aucune date de modification** | Aucun lien marchand | Le comparatif chiffré est **réservé aux abonnés** (« Comparatif Airfryers 2026 – Que Choisir Ensemble », 7 oct. 2026) |
| **Maniaques** — [aspirateur balai](https://maniaques.fr/meilleur-aspirateur-balai-comparatif/) | « Quel est le meilleur aspirateur balai ? Le comparatif 2026 ! » | 3 884 mots, 6 H2, 17 H3 | Article, Person | Auteure nommée ; publié 11/05/2026, **modifié 12/10/2026** | Amazon (link.amazon) + tidd.ly, 12 liens sponsored | Affirme « nous avons testé » (vrais tests) ; **découpe par budget** : « moins de 150 € », « moins de 200 € » en pages distinctes |
| **Hello Watt** — [kit solaire plug and play](https://www.hellowatt.fr/panneaux-solaires-photovoltaiques/kit-solaire-plug-and-play) | « Quel est le meilleur kit solaire plug and play en 2026 ? » | 2 796 mots, 5 tableaux | FAQPage, ItemList, Offer, AggregateRating, Person | Auteure nommée ; publié 06/2023, **« Mis à jour le 07 septembre 2026 »** | Pas de lien Amazon (vend ses propres kits) | Conflit d'intérêt (Hello Watt vend les kits qu'il classe) ; d'après une synthèse de recherche non revérifiée, certaines de ses pages donnent des puissances/garanties différentes pour un même kit |

**Techniques observées dans les SERP (titres, dates)**

1. **Mois + année dans le titre, mis à jour souvent** : Les Numériques (« Quels sont les meilleurs purificateurs d'air ? Octobre 2026 », actualisé « il y a 2 jours » ; « Comparatif / 16 sonnettes connectées testées Octobre 2026 »). Les affilés LeBonTri et LaboMaison titrent « 2026 » + « comparatif » + nombre de modèles.
2. **Titre = mot-clé exact + année + nombre + verbe de comparaison** (« 12 friteuses sans huile comparées », « Top 11 des meilleurs aspirateurs balais sans fil » au Parisien, « 5 airfryers à moins de 100 euros » à Saveurs Magazine). Le Parisien ajoute un « curiosity gap » : « ces 3 airfryers à moins de 100 euros n'ont… » (30/06/2026).
3. **Tranches de prix en pages dédiées** (Maniaques : < 150 €, < 200 € ; mesrecettesairfryer.fr : < 100 €) — les requêtes « moins de X euros » reviennent dans les recherches associées de presque toutes les catégories.
4. **FAQ + schema FAQPage** (Futura 19 questions, LeBonTri, Hello Watt) : l'IA reprend ces blocs.
5. **Tableaux comparatifs nombreux** (LeBonTri 11, Hello Watt 5) et **ItemList/Product** : bons pour les extraits.
6. **Pages « événement » en URL stable** chez les enseignes (Boulanger « Friteuse Black Friday 2026 », Carrefour) : l'année est dans le titre, le contenu est réutilisé d'une année sur l'autre ; Carrefour n'a pas mis à jour (« Black Friday 2025 » encore indexé).
7. **Marques qui s'invitent dans le comparatif** (MOVA, Dreame, Ecovacs, Navimow, Eufy, Daikin, Irsap) : contenu orienté vers leurs produits.

**Faiblesses exploitables**

- **Contenus anciens bien classés** : Que Choisir purificateurs (2020), Selectra thermostats (2023), Ouest-France airfryer (2024), Notre Temps / Marmiton / Deco « airfryer ne chauffe plus » (juillet 2024), Futura aspirateur balai (févr. 2025). Une page 2026 datée, structurée et sourcée peut les dépasser.
- **Paywall Que Choisir** : le grand public ne voit pas le classement ; une page qui **résume et renvoie** (avec lien) vers Que Choisir répond à « airfryer que choisir », « UFC Que Choisir classement » (recherches associées et PAA présents sur plusieurs catégories).
- **Pas de page dédiée « consommation électrique »** sur le haut de SERP (Marmiton, Alpiq, un comparateur de fournisseurs), alors que l'IA répond directement : un guide chiffré par appareil (watts × heures × tarif) peut être cité.
- **Requêtes « problème »** : pièces détachées + presse généraliste de 2024 ; peu de guides structurés par marque/modèle.
- **Sites de marque** sur les requêtes « comparatif » : leurs pages ne comparent pas honnêtement ; une page neutre multi-marques répond mieux.
- **LeBonTri reste mono-marchand (Amazon)** : comme nous. Pas d'avantage à ce niveau ; l'écart se fait sur la densité (12 900 mots), la fraîcheur (modifié il y a 12 jours) et la FAQ.

**Sur nos propres pages FR (lecture seule)** : la page « Guide complet des airfryers » fait 4 824 mots, 1 tableau, **FAQPage** présent, 39 liens amazon.fr, « Mis à jour le 9 octobre 2026 » ; la meta description fait 70 caractères (courte) et le titre « Guide Complet des Airfryers 2026 | Home Nura » ne contient ni « meilleur » ni « comparatif ». Sept articles ont un slug en « test- » (ex. `/blog/test-philips-airfryer-3000-xl`) alors que le site ne réalise aucun test (leurs titres sont déjà « Avis … ») : **slugs à renommer** (voir A.5, action 7). Le site compte 265 pages « problème » par langue, 103 articles de blog FR et 6 pages Black Friday FR (7 en EN).

### A.4 Requêtes saisonnières imminentes (France / Belgique francophone)

**Calendrier (dates vérifiées)**

| Événement | Date | Source |
|---|---|---|
| Black Friday | **vendredi 27 novembre 2026** (Cyber Monday lundi 30 novembre) ; une « Black Week » est annoncée dès le 23/11 par certains sites | [calendriergratuit.fr](https://www.calendriergratuit.fr/black-friday.html), [Quable](https://www.quable.com/en/blog/french-retail-calendar-2026), [tpeactu.fr](https://tpeactu.fr/2026/05/03/black-friday-2026-date/) — dates calées sur Thanksgiving (26/11), pas sur un texte officiel : les enseignes peuvent décaler |
| Noël | 25 décembre 2026 | calendrier |
| **Soldes d'hiver 2027** | **mercredi 6 janvier → mardi 2 février 2027** (8 h) ; Meurthe-et-Moselle, Meuse, Moselle, Vosges décalés (2 → 29 janvier) | [CCI Lyon Métropole](https://www.lyon-metropole.cci.fr/actualite/dates-des-soldes-2027), [France.fr](https://www.france.fr/fr/evenement/soldes-hiver/), [calendriergratuit.fr](https://www.calendriergratuit.fr/dates-soldes.html) (un site, tpeactu.fr, annonce le 7 janvier : écarté, le 6 est bien un mercredi) |
| Soldes d'hiver en Belgique | non vérifié (budget de recherche épuisé) : à confirmer avant publication | — |

**Saisonnalité mesurée (Google Trends France, 5 ans, moyenne mensuelle 2023-2026, indice relatif)**

| Terme | Pic | Creux | Écart | Lecture |
|---|---|---|---|---|
| airfryer | nov. 48,5 · déc. 46,9 · janv. 36,4 | mai–juin ≈ 20 | ×2,4 | Black Friday → Noël → soldes ; reste haut en janvier |
| aspirateur balai | nov. 22,8 · janv. 18 | ≈ 12 le reste de l'année | ×2,0 | pic Black Friday net |
| thermostat connecté | nov. 6,1 · oct. 3,5 | juin–août ≈ 0,9 | ×6,8 | saison de chauffe |
| machine à café à grain | nov. 4,8 · déc. 3,9 | ≈ 2,3–2,5 | ×2,1 | Black Friday / cadeaux |
| climatiseur mobile | **juin 15,9** · juil. 5,2 | octobre–mars ≈ 0 | pics > ×100 en canicule (max = 100) | publier avant avril |
| robot tondeuse | **mars 3,5 · avril 5,1 · mai 4,9** | déc.–janv. 0,6 | ×8 | publier en février |
| robot piscine | avril 1,6 · mai 2,4 · **juin 2,8** · juil. 2,2 | nov.–janv. ≈ 0 | n.s. | publier en mars |
| radiateur électrique | oct. 1,5 · nov. 1,9 · déc. 1,3 · janv. 1,4 | juin ≈ 0 | n.s. | saison de chauffe |
| aspirateur robot laveur | nov. 11,2 · déc. 7,1 | ≈ 4,8 (février–avril) | ×2,3 | Black Friday |
| déshumidificateur | **nov. 8,7** · oct. 7,1 · déc. 5,5 · janv. 4,4 | avril 1,8 | ×4,8 | humidité d'automne |
| chauffage d'appoint | **nov. 7,6** · oct. 5,8 · janv. 5,3 · déc. 5,1 | juin 0,2 | ×38 | saison de chauffe |
| prise connectée | nov.–déc. ≈ 2 | été ≈ 1 | ×2 | Black Friday / cadeaux |
| purificateur d'air, caméra de surveillance, détecteur de fumée, serrure connectée, panneau solaire plug and play | — | — | plat (±20 %) | demande régulière toute l'année |

(Non mesurés — quotas Google Trends : ventilateur, humidificateur, caméra intérieure, alarme, éclairage. Leur saisonnalité est une **estimation** logique : ventilateur = mai–août ; humidificateur = octobre–février.)

**Requêtes à servir maintenant (déjà visibles dans les recherches associées / PAA / Suggest)**

- Black Friday : `black friday airfryer`, `air fryer black friday amazon`, `airfryer xxl black friday`, `airfryer moulinex black friday`, `air fryer offre black friday` ; PAA « Y a-t-il des soldes sur les airfryers ? ». SERP actuelle : Boulanger, Carrefour (page « 2025 » non mise à jour), Darty, BFMTV/GQ/Linternaute (articles du 25–30/11/2025), Frifri, LaboMaison. Presque pas de contenu éditorial neutre type « les vraies promos, prix de référence, quand acheter ».
- Soldes d'hiver : même logique, pages à URL stable réutilisées (la page BF devient la page « soldes » le 6 janvier).
- Noël / cadeau : `airfryer test achat cadeau avis` apparaît dans Suggest ; angle « quel airfryer offrir » (capacité / budget / foyer) à tester.
- Hiver / énergie : `radiateur électrique consommation`, `chauffage d'appoint consommation`, `déshumidificateur consommation`, `airfryer consommation électrique` (PAA : « Est-ce qu'un air fryer consomme moins qu'un four ? »).
- Problèmes de saison froide : `thermostat netatmo ne fonctionne plus`, `thermostat netatmo problème pile`, `déshumidificateur givre`, `chauffage d'appoint odeur`.

**Coûts d'usage (France)** : la SERP « airfryer consommation électrique » est tenue par Marmiton (août 2025), Alpiq, Fournisseurs-Electricite.com (2024), alors que l'IA cite la bellenergie, Que Choisir et Les Numériques. Un guide « combien coûte X par mois » (watts × heures × tarif du kWh) pour airfryer, déshumidificateur, radiateur, clim mobile, borne de recharge manque. **Le tarif du kWh à utiliser n'a pas été vérifié ici** (à prendre sur le site de la CRE ou du fournisseur de référence au moment de la publication, avec date).

### A.5 Comment Homenura peut passer devant — 10 actions, France / Belgique francophone

Notation : **Impact** 1–5 (potentiel de clics/revenu), **Effort** 1–5 (1 = quelques heures ; 5 = chantier). Classement = impact ÷ effort. Les titres proposés tiennent en ≤ 60 caractères et **n'affirment aucun test** (règle du site).

| Rang | Action | Impact | Effort | Quand |
|---|---|---|---|---|
| 1 | Retitrer les catégories avec le vocabulaire réel | 5 | 1 | cette semaine |
| 2 | FAQ calquées sur les « Autres questions » Google (+ réponse courte en tête) | 4 | 1 | cette semaine |
| 3 | Pages « X vs Y » (déjà le gabarit n°1 en clics sur nos données GSC) | 4 | 2 | nov.–janv. |
| 4 | Pages « problème » (2e gabarit en clics sur nos données GSC ; SERP faible) | 4 | 2 | nov.–déc. |
| 5 | Pages Black Friday / soldes d'hiver / Noël à URL stable | 4 | 2 | **avant le 9 nov.** |
| 6 | Pages « moins de 100 / 200 / 300 € » par catégorie | 4 | 2 | nov. |
| 7 | Hygiène éditoriale : slugs `test-`, dates, meta, auteur | 3 | 1 | cette semaine |
| 8 | Guides « consommation / coût d'usage » | 3 | 2 | nov.–janv. |
| 9 | Pages « Ce que disent Que Choisir / Les Numériques / 60 Millions » | 3 | 2 | déc. |
| 10 | Belgique francophone : sources et vocabulaire belges | 2 | 1 | janv. |

**Preuves tirées de nos propres données (GSC, 28 j au 28/10/2026)** : les pages qui prennent des clics sont les **duels** (`ninja-vs-philips-quel-choisir` : 65 clics en IT, 58 en EN) et les **pages « problème »** (« balai-aspirateur-led-clignote » ≈ 30 clics cumulés sur 5 langues). En France : position moyenne 12,4 ; requêtes réelles à positions 20–56 = potentiel : « airfryer ou four » (32–38), « thermostat pompe à chaleur » (20–55, plusieurs variantes), « nettoyeur vapeur bouché / entartré » (37–43), « lave-vaisselle code 15 » (56), « mon portail électrique s'ouvre mais ne se ferme pas » (51). Chacune se traite avec l'un des gabarits ci-dessous (duel, problème, FAQ).

**1. Retitrer les catégories avec le vocabulaire réel** (détail des mots-clés : A.1). Gabarit : `{Meilleur X} 2026 : comparatif de {n} modèles (mis à jour {mois})` ; H1 = requête exacte ; 1re phrase = réponse en 40 mots. Exemples :
- Aspirateurs laveurs → « Aspirateur robot laveur : comparatif 2026 » (et non « aspirateur laveur robot », ordre peu utilisé).
- Cafetières → « Machine à café à grain : comparatif 2026 (avec broyeur) » ; H2 « expresso broyeur », « double bac », « vs capsule ».
- Tondeuses robots → « Robot tondeuse sans fil périphérique : comparatif 2026 » (les acheteurs et les SERP écrivent « périphérique », pas « périmétrique » : garder les deux dans le texte).
- Solaire balcon → « Panneau solaire plug and play : comparatif 2026 (kit balcon) ».
- Climatiseurs mobiles → « Climatiseur mobile : comparatif 2026 (avec ou sans évacuation) ».
- Déshumidificateurs → « Meilleur déshumidificateur 2026 : chambre, cave, salle de bain ».
- Détecteurs → « Détecteur de fumée : lequel choisir en 2026 ? (connecté ou non) ».
- Thermostats → « Thermostat connecté : comparatif 2026 (gaz, fil pilote, radiateurs) ».
- Bornes → « Borne de recharge domicile (wallbox) : comparatif 2026 ».
- Airfryers → « Meilleur airfryer 2026 : comparatif des friteuses sans huile » ; citer aussi « air fryer » (deux mots, l'orthographe la plus tapée en Trends) et « friteuse à air chaud » dans le corps.
- Retirer « connecté / connectée » des titres dès que la demande est générique (déshumidificateur, chauffage d'appoint, purificateur).

**2. FAQ calquées sur les PAA** (déjà présentes dans les SERP) — réponse en 40–60 mots, puis lien vers la page détaillée. Exemples à reprendre mot pour mot :
- Airfryer : « Pourquoi les gens revendent-ils leur airfryer ? », « Quels sont les inconvénients du air fryer ? », « Est-ce qu'un air fryer consomme moins qu'un four ? », « Quel est le meilleur airfryer selon UFC-Que Choisir ? » (répondre en renvoyant vers Que Choisir, sans copier son classement).
- Robot laveur : « Quel est le meilleur choix, un aspirateur laveur ou un robot laveur ? ». Déshumidificateur : « consomme-t-il beaucoup d'électricité ? », « peut-il remplacer une VMC ? ». Clim sans évacuation : « Quels sont les inconvénients d'une clim sans unité extérieure ? ». Plug and play : « Quelle est la nouvelle réglementation ? ».
- Conserver FAQPage (déjà en place sur nos guides).

**3. Pages « X vs Y »** (Suggest) : `airfryer vs four chaleur tournante`, `airfryer vs cookeo` (existe), `airfryer vs friteuse` (existe), `ninja ou moulinex`, `philips vs moulinex`, `thermostat netatmo vs tado`, `machine à café à grain vs capsule`, `panneau solaire plug and play vs normal`, `friteuse sans huile 1 ou 2 compartiments`. Verdict en 3 lignes, tableau, « choisir A si… / B si… ».

**4. Pages « problème »** : le site compte déjà 265 pages `guides/probleme/…` en FR (et 265 en EN) (ex. `ne-chauffe-plus`, `detecteur-fumee-bip-aleatoire`). La SERP « airfryer ne chauffe plus » est tenue par un vendeur de pièces et des articles de **juillet 2024** (Marmiton, Notre Temps, Deco) : opportunité nette. À faire : titre « Airfryer qui ne chauffe plus : 7 causes et solutions », variantes par marque (« Philips ne chauffe plus », « Moulinex ne chauffe plus » = recherches associées), consigne de sécurité en tête, vérifier dans la Search Console lesquelles reçoivent des impressions avant d'en étendre le nombre. Requêtes Suggest à couvrir : `thermostat netatmo ne fonctionne plus`, `détecteur de fumée qui bip`, `kidde 10y29 clignote rouge`, `portier video ne fonctionne plus`, `serrure ne fonctionne plus`, `robot piscine ne marche plus`.

**5. Black Friday / soldes d'hiver / Noël à URL stable** : `/black-friday/airfryers` (EN : 689 mots seulement) à étoffer en FR : prix de référence, « comment repérer une vraie promo », liste de modèles à surveiller, mise à jour quotidienne datée jusqu'au 30/11. Ne pas créer une nouvelle URL en janvier : **la même page devient « soldes d'hiver 2027 »** le 6 janvier. Six pages FR existent déjà (airfryers, aspirateurs-robots, cafetieres-a-grain, aspirateurs-balais, thermostats, radiateurs-connectes) : à étoffer toutes avant le 9/11, puis ajouter les catégories à pic net en novembre qui manquent (prise connectée : nov. 2,0 vs 1,0 ; purificateur ; déshumidificateur). Requêtes cibles : `black friday airfryer`, `airfryer black friday amazon`, `airfryer xxl black friday`, « Y a-t-il des soldes sur les airfryers ? ». Concurrents à battre : Boulanger, Carrefour (page 2025 non mise à jour), BFMTV/GQ/Linternaute (articles du 25–30/11/2025).

**6. Pages « moins de X € »** (SERP : aucune IA sur « meilleur airfryer moins de 100 euros » ; concurrents = Saveurs Magazine, mesrecettesairfryer.fr, Le Parisien). H1 type : « Meilleur airfryer à moins de 100 € (2026) : 6 modèles ». À décliner : airfryer < 100 € ; aspirateur balai < 100 / 150 / 200 / 300 € ; aspirateur robot laveur < 300 / 500 € ; machine à café à grain < 300 / 400 / 500 € ; robot tondeuse < 500 / 1 000 € ; sonnette vidéo < 100 € ; caméra extérieure < 100 € ; purificateur < 100 € ; déshumidificateur < 150 €.

**7. Hygiène éditoriale** : renommer en 301 les 7 slugs `test-…` (`test-philips-airfryer-3000-xl`, `test-ninja-foodi-flexdrawer`, `test-cosori-dual-blaze`, `test-moulinex-easy-fry-max`, `test-ninja-foodi-max-dual-zone`, `test-philips-combi-xxl-connected`, `test-xiaomi-smart-air-fryer-pro`) en `avis-…` (les titres FR sont déjà « Avis … », seul le slug dit « test » ; en EN le titre dit « Review … verdict », à nuancer en « Buyer's guide » ou « Specs & alternatives ») ; dater dans le titre les 20 pages les plus visibles (« mis à jour octobre 2026 ») et tenir `dateModified` honnête ; meta descriptions de 140–155 caractères (nos guides en ont 54 à 70) ; auteur nommé + page « Comment nous classons » (sources publiées, pas de test). Google demande des preuves d'expérience directe pour les avis ([guide Google](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-product-reviews)) : **les remplacer par des données vérifiables** (fiches techniques, prix sur 12 mois, synthèse d'avis acheteurs, tests publiés par Que Choisir / Les Numériques **avec lien**) et dire clairement que nous ne testons pas.

**8. Guides « consommation / coût d'usage »** (voir A.4) : airfryer (déjà `airfryer-economies-energie`), déshumidificateur, radiateur électrique, clim mobile, borne de recharge. Formule + tableau + tarif du kWh daté. Cibles : « consomme beaucoup d'électricité ? ».

**9. Pages « ce que disent les testeurs »** : « Airfryer : ce que dit Que Choisir en 2026 » (recherches `airfryer que choisir`, `ufc que choisir robot piscine`, `test purificateur d'air 60 millions de consommateurs`, …). On résume ce qui est public, on **cite avec lien**, on indique que le classement complet est réservé aux abonnés (cas du comparatif airfryers du 7/10/2026), et on ajoute ce qui manque (prix, consommation, alternatives).

**10. Belgique francophone** : ajouter **Test-Achats** comme testeur cité avec lien (équivalent belge de Que Choisir) ; utiliser les mots belges dans les FAQ (« airco mobile », « friteuse à air chaud ») ; mentionner MediaMarkt.be / Coolblue.be comme références de prix. À vérifier : disponibilité d'un programme d'affiliation Amazon belge ; dates des soldes belges.

**Mesure** : suivre dans la Search Console, par page, impressions / CTR / position pour ces gabarits (comparer à 28 jours avant/après) ; l'objectif réaliste est de faire passer la France de 45 clics / 28 j (position moyenne 12,4) à une courbe croissante d'ici fin novembre, sans fixer de chiffre précis.


---

## PARTIE B — ROYAUME-UNI (version /en, anglais britannique)

### B.1 Vocabulaire réel des acheteurs (20 catégories)

**Comment lire le tableau**
- **Indice Trends** = taille relative sur 52 semaines, Google Trends Royaume-Uni, **« air fryer » = 100**. Mesuré.
- **Volume estimé** = **estimation** en bande (moyenne mensuelle sur 12 mois). Deux ancres publiques donnent une fourchette large : *basse* = « air fryer » UK ≈ 365 K/mois en moyenne début 2022 (Pi Datametrics) → ×2 de croissance Trends depuis ⇒ ≈ 0,7 M ; *haute* = « ninja air fryer » UK = 419 K (Ahrefs, oct. 2026) ⇒ « air fryer » ≈ 3 M. L'écart ×5 entre les deux est la vraie incertitude. Recoupement Ahrefs public : « best portable air conditioner » 16 K + « … uk » 14 K, « best dehumidifier uk » 5 K, « best dehumidifier for drying clothes » 2,8 K : cohérent avec le **haut** de la fourchette pour la clim mobile. Bandes : **XXL** ≥ 500 K · **XL** 100–500 K · **L** 30–100 K · **M** 10–30 K · **S** 3–10 K · **XS** < 3 K. Fiable pour **classer**, pas pour la valeur absolue.
- **Variantes** et **modificateurs** = Google Autocomplete du 30/10/2026 (mots américains parasites filtrés), ordre d'apparition ≈ popularité.
- **Intention** : **I** investigation commerciale, **T** transactionnelle, **N** information (cost to run, vs), **P** problème.

| # | Catégorie — kw actuel | Terme dominant et variantes réelles | Modificateurs dominants (ordre Suggest) | Indice / volume estimé | Intention | Verdict kw actuel |
|---|---|---|---|---|---|---|
| 1 | **Air fryers** — « best air fryer » | **air fryer** ; **dual basket / double basket / dual zone / twin basket air fryer** ; air fryer oven ; with window ; stackable | price · best (+ brand) · reviews (uk, reddit) · **which** (« which best buy », « which is best ») · uk (sale, ninja, asda, amazon) · **under £100** · vs (oven, microwave, deep fryer) · **cost to run** (per hour, vs oven) · ninja vs tower / philips · argos / currys | **100** ; « ninja air fryer » 13 (**419 K Ahrefs**) ; **XXL** — nov.–janv. ×1,9 | I, T, N | **OK** ; ajouter « dual basket » et « cost to run » |
| 2 | **Robot vacuum** — « best robot vacuum » | **robot vacuum (cleaner)** ; **robot hoover** (britannique) ; robot vacuum and mop ; robot mop ; robot cleaner | best · reviews · which · uk · under £100 · for pet hair · vs dyson / cordless · electricity / cost to run | 7 ; **L–XL** (50–230 K) — plat | I, T | **OK** |
| 3 | **Cafetières** — « best smart coffee machine » | **bean to cup coffee machine** (« bean-to-cup » en titre) ; bean to cup coffee maker ; automatic coffee machine | best (uk, value, budget) · reviews · which · uk (sale, delonghi, ninja) · under £100 / £300 / £1000 · with milk frother · vs espresso machine / pod / nespresso · deals ; marques delonghi, sage, ninja luxe café, smeg, beko, philips | 3 ; **M–L** (20–100 K) — nov. ×2,4 vs avril | I, T | **Mal choisi** : « smart coffee machine » → « bean to cup » |
| 4 | **Aspirateurs balais** — « best cordless stick vacuum » | **cordless vacuum (cleaner)** ; stick vacuum ; cordless hoover ; handheld vacuum | best (suction, pet hair, budget, battery) · reviews · which · uk (shark) · under £100 · vs corded / robot / upright / dyson vs shark · cheap · deals / black friday · not working | 12 ; **L–XL** (80–400 K) — nov. ×1,5 | I, T | **À simplifier** → « best cordless vacuum cleaner » |
| 5 | **Thermostats** — « best smart thermostat » | **smart thermostat** ; wifi thermostat ; **smart heating controls** ; smart radiator thermostats (TRV) ; marques Hive, Nest, tado, Drayton Wiser, Honeywell, Netatmo | uk · **no subscription** · combi boiler · best (uk) · reviews · which · vs (nest vs hive, tado) · not working · price | 3 ; **M–L** (18–90 K) — **nov. ×11 vs avril–juin** | I, N | **OK** ; ajouter « tado vs Hive vs Nest » |
| 6 | **Sonnettes vidéo** — « best video doorbell » | **video doorbell** ; doorbell camera ; smart doorbell ; Ring doorbell | **without / no subscription (uk)** · wireless · battery life · best (uk, value, privacy) · reviews · which · uk law · under £100 · vs security camera / intercom / ring vs eufy / blink · worth it | 3 ; **M–L** (20–100 K) — plat | I, T | **OK** ; page « no subscription » |
| 7 | **Déshumidificateurs** — « best dehumidifier » (titre « smart ») | **dehumidifier** ; dehumidifier for drying clothes ; for damp / mould / condensation ; 20L ; desiccant vs compressor | best (uk) · reviews · which · uk (argos, meaco, screwfix, 20l) · vs (humidifier, air purifier, tumble dryer, AC) · **cost to run** (per hour / month / day) · cheap ; marques meaco, ebac, pro breeze, vonhaus | 16 ; **XL** (110–530 K) — **nov. ×7 vs mai** ; Ahrefs : « best dehumidifier uk » 5 K, « best dehumidifier for drying clothes » 2,8 K | I, N, T | **OK mais titre « Smart » à retirer** |
| 8 | **Heated airer** — *absent du catalogue* | **heated airer** ; heated clothes airer ; electric airer ; heated dryer | with cover · argos / b&m / lakeland / dunelm / aldi / lidl / the range / home bargains · best (mumsnet) · which · uk · under £100 · vs tumble dryer / dehumidifier / heat-pump dryer · cost to run | 2 ; **M–L** (14–68 K) — **oct. > ×25 vs juin** | I, T, N | **Page à créer** |
| 9 | **Electric blanket** — *absent* | **electric blanket** ; heated blanket ; electric throw / heated throw ; underblanket ; tailles single / double / king | best (uk) · reviews · **which side up** · which · washable · double / king · vs heater / hot water bottle / heated throw · **cost to run** · silentnight | 5 ; **L–XL** (35–165 K) — **nov. ×42 vs juin** | I, N, T | **Page à créer** |
| 10 | **Chauffages d'appoint** — « smart space heater » | **oil filled radiator / heater** ; electric heater ; fan heater ; panel heater ; convector heater | **cost to run** · best (uk) · reviews · wall mounted · with timer / thermostat · 2500w · vs fan heater / convector / space heater · argos · delonghi | 1,5 ; **M–L** (10–48 K) — nov. ×15 (0 en été) ; « oil filled radiator cost to run » = requête de choc | N, I | **Mal choisi** : « space heater » est américain |
| 11 | **Climatiseurs mobiles** — « portable air conditioner » | **portable air conditioner** ; portable air con ; mobile air conditioner ; (« portable AC » = US) ; without hose (confusion avec refroidisseur évaporatif) | best (uk, for bedroom) · reviews · which · uk (screwfix, john lewis, in stock, next day delivery, 12000 btu) · worth it ? · vs window unit / air cooler / mini split ; marques meaco, honeywell, dreo, probreeze (SERP) | 9 ; **L–XL** (60–300 K ; Ahrefs suggère le haut) — **juin = 2,1 × la moyenne ; pics de canicule jusqu'à ×16** | I, T | **OK** |
| 12 | **Serrures connectées** — « smart lock » | **smart lock** ; smart door lock ; smart padlock | uk (front door, **multipoint, night latch, insurance**) · best · reviews · which · vs traditional lock ; marque vue dans Suggest : august | 3 ; **M–L** (18–90 K) — plat | I | **OK** ; compatibilité cylindre euro / assurance |
| 13 | **Détecteurs fumée & CO** — « smart smoke detector » | **smoke alarm** ; smoke detector ; heat alarm ; interlinked smoke alarms ; 10-year battery | **beeping / chirping / battery / keeps going off** · best (uk) · reviews · which battery · uk (regulations, law, landlords, free) · vs carbon monoxide alarm | 6 ; **L–XL** (40–200 K) — plat ; **dominé par les requêtes « problème »** | P, I, N | **Mal choisi** : « smoke alarm », pas « smart smoke detector » |
| 14 | **Purificateurs d'air** — « best air purifier » | **air purifier** ; HEPA air purifier ; for dust / pets / allergies / mould | best · reviews · which (room size) · uk (dyson, argos, for dust, pet hair) · vs humidifier / dehumidifier | 9 ; **L–XL** (60–300 K) — plat | I | **OK** |
| 15 | **Tondeuses robots** — « best robot lawn mower » | **robot lawn mower** ; robotic lawnmower ; without perimeter wire ; GPS ; small garden ; 1 acre | uk (price, reviews, lidl, aldi, without perimeter wire, gps) · best · which · vs push mower / riding mower ; enseignes Lidl, Aldi (Suggest) | 1 ; **S–M** (6–29 K) — mars–juin | I, T | **OK** |
| 16 | **Robots piscine** — « best pool cleaner robot » | **robot pool cleaner** ; automatic pool cleaner ; pool vacuum | reviews · for above ground pool · bestway · maytronics · not working | ≈ 0 ; **XS** (marché des piscines limité) | I | **Dépriorisé** ; ordre à corriger si conservé |
| 17 | **Caméras extérieures** — « outdoor security camera » | **outdoor security camera(s)** ; wireless / wifi outdoor camera ; **CCTV** ; solar camera | **no subscription** · for home · wireless · night vision · best (uk, battery life) · reviews uk · which (easiest to install) · vs wired ; marque vue dans Suggest : eufy | non mesuré ; **M–L** (estimation) | I, T | **OK** ; ajouter « no subscription », « CCTV » |
| 18 | **Bornes de recharge VE** — « home ev charger » | **home EV charger** ; EV home charger ; electric car charger ; wallbox | **installation (cost, near me)** · **grant** · best (app) · reviews · which · uk (cost, eon, british gas, deals) · vs ; marques vues : ohme, hive | 3 ; **M–L** (18–90 K) — plat | I, N | **OK** |
| 19 | **Prises connectées** — « best smart plug » | **smart plug (UK)** ; smart socket ; smart plug with energy monitoring | timer · alexa · 16 amp · best (uses, brand) · reviews · which app · home assistant · vs smart bulb ; marques tapo, kasa, wiz, tp-link, gosund, teckin | 3 ; **M–L** (22–105 K) — nov.–déc. ×6 vs juin | I, T | **OK** |
| 20 | **Solaire balcon** — « balcony solar panel » | **plug-in solar panels (UK)** ; plug-in solar ; plug-in solar with battery ; 800W ; (« balcony solar » : marginal) | **legal ?** · price · lidl / aldi · with battery (storage) · buy · worth it · reviews (martin lewis) · which · vs normal solar ; marques octopus, jackery, anker solix, ecoflow ; revendeurs currys, b&q, screwfix | 1,2 (**pic ×17 à la légalisation, août–sept. 2026**) ; **S–M** (8–39 K, en hausse) | N, I | **Mal choisi** : « plug-in solar », pas « balcony solar » |

**Famille « cost to run » (transversale, très forte au R-U)** : `air fryer cost to run` (per hour, vs oven), `ninja air fryer cost to run`, `dehumidifier cost to run` (per hour / month / day / uk), `electric blanket cost to run`, `oil filled radiator cost to run`, `heated airer cost to run`, `tumble dryer cost to run`, `ring doorbell cost to run`, « how much electricity does a robot vacuum use ». Saisonnalité et chiffres : B.4.

**Grille de modificateurs (R-U, par ordre d'apparition)** : `price` → `best` (+ brand) → `reviews` (+ uk / 2026 / reddit) → **`which`** (« which best buy », « which is best » : les Britanniques tapent aussi le nom du testeur) → `uk` (+ enseigne : argos, currys, john lewis, amazon, screwfix, b&q, asda, lidl, aldi) → `under £100` → `vs` / `or` → **`cost to run`** → `cheap` / `deals` / `black friday` → `not working` / `not heating up` / `chirping`.

**Vocabulaire à utiliser (britannique)** : *heated airer* (pas « drying rack »), *tumble dryer* (pas « clothes dryer »), *smoke alarm* (pas « smoke detector »), *oil-filled radiator / electric heater / fan heater* (pas « space heater »), *hoover* en usage familier (« robot hoover »), *lawnmower* (un mot), *CCTV*, *plug-in solar* (pas « balcony solar »), *bean to cup*, *air con* / *portable air conditioner*.

**Catégories du catalogue non étudiées** (budget) : lave-linge / sèche-linge connectés, caméras intérieures, alarmes sans abonnement, éclairage connecté, robots multifonctions, réfrigérateurs connectés, etc.

### B.2 Qui domine les SERP au Royaume-Uni (relevé du 30/10/2026)

**Méthode** : 17 requêtes saisies sur `google.co.uk` (hl=en-GB, gl=uk) dans le navigateur du poste, bandeau cookies refusé (« Reject all »). Mêmes limites que pour la France (un relevé par requête, IP du poste probablement hors R-U, 6 à 13 organiques affichés).

| # | Requête | AI Overview ? | Domaines cités dans l'IA | Organiques (ordre d'affichage) | Autres blocs |
|---|---|---|---|---|---|
| 1 | best air fryer | **non** | — | Ideal Home (juin 2026), Food & Wine (US), bestairfryerfood.co.uk (petit affilié), Gerald Giles (revendeur), Tom's Guide (juin 2026), Amazon UK, Debenhams | PAA : « What is the 25 rule for air fryers? » ; forums : Reddit r/AskUK, Mumsnet |
| 2 | ninja vs tower air fryer | oui | Slingo, BBC Good Food, Which? (x3) | RTINGS, Woman & Home (juin 2026), SharkNinja.es, **Which?** (« Ninja vs Tower vs Tefal »), Ideal Home (juil. 2024), TechRadar | Reddit r/airfryer, groupes Facebook |
| 3 | best dehumidifier | **non** | — | Appliances Direct, The Spruce (US, sept. 2026), B&Q, posh.co.uk, Telegraph, dehumidifier-rentals.co.uk, EcoFlow (marque), Goodhomes Magazine (**2019**), Which? (guides), QuoteSmith (août 2026), Vonhaus (sept. 2026) | PAA : « What does Martin Lewis say about dehumidifiers? » |
| 4 | dehumidifier cost to run | oui | The Independent, r/AskUK, Meaco Blog, Currys, Ideal Home | Speedy Hire (**2023**), Morris Direct (2024), Meaco Blog (**2023**), Geepas, The Scottish Farmer (févr. 2026), mouldnews.co.uk, Costway (avr. 2026) | PAA : Martin Lewis ; Reddit |
| 5 | best heated airer | **non** | — | John Lewis (x2), PriceRunner (x2), easyLife blog (x2), Currys, OneClearWinner (« October 2026 »), Lions Home, Expert Reviews, ABIS Electronics, Dunelm | PAA : « Is a heated airer better than a dehumidifier? » |
| 6 | air fryer cost to run | oui | MoneySuperMarket, Go Compare, Uswitch | Which? (x2, « Air fryer vs oven »), GreenMatch, EnergyGuide.org.uk (**2023**), CHOICE (AU), Endesa (ES), National Energy Action, Ohmatic Electrical (mai 2026), moneymeister.co.uk | PAA : « What is the 25 rule for air fryers? » |
| 7 | best robot vacuum | **non** | — | Vacuum Wars (US), Ideal Home (mars 2026), The English Home, NYT Wirecutter (US), The Independent (juil. 2026), Amazon UK, Currys, The Guardian (nov. 2024) | — |
| 8 | best smart thermostat uk | **non** | — | Heatable, Drayton Wiser, OneClearWinner (x2), BestHeating (x2), Uswitch (x2), PCMag UK, smart-thermostat.co.uk, WarmZilla, Screwfix, isnuug.co.uk, **Which?** (14 oct. 2026) | PAA : « tado° or Nest? » ; Reddit r/smarthome |
| 9 | plug in solar panels uk | **non** | — | Jackery, Currys, Anker, Octopus Energy, Energy Saving Trust (1 oct. 2026), Money Saving Expert, OneClearWinner, Robinsun, EcoFlow, British Gas, Hampshire Generators, **Which?** (15 sept. 2026), **GOV.UK** (26 août 2026), pluginsolar.co.uk | PAA : « Is plug-in solar legal in the UK? » |
| 10 | best video doorbell uk | **non** | — | PickReviews, guarddetect.com, Currys (x2, étoiles 4,6), bestpulse, PCMag UK, Telegraph, Amazon UK, Ring UK, Expert Reviews, WIRED, TechRadar (oct. 2025), OneClearWinner | PAA : « without a subscription in the UK? » |
| 11 | best bean to cup coffee machine | **non** | — | Coffee Blog, BBC Good Food (juil. 2026), The Guardian (avr. 2026), John Lewis, coffeefriend.co.uk, Ideal Home (mai 2026), OneClearWinner, Currys, Amazon UK | Reddit |
| 12 | air fryer black friday deals | **non** | — | John Lewis, Amazon UK, The Sun, Russell Hobbs (28 oct.–30 nov. 2026), **Which?** (x2, « deals for October 2026 »), Currys, BBC Good Food (« offers for January », 12 janv. 2026), Appliances Direct, The English Home (28 nov. 2025), Debenhams | PAA : « Is it cheaper to buy on Black Friday? » |
| 13 | air fryer not heating up | oui | Spanr, Argos Support | Spanr (févr. 2026), JustAnswer (2024), Tower Housewares (support, août 2026), SOS Parts | Reddit r/airfryer |
| 14 | ninja vs philips air fryer | oui | YouTube (Meem Reviews, Sam & Dom's), r/airfryer | cookeatrepeat.co.uk (**2023**), airfryerget.com, RTINGS, Versus, Homes & Gardens (août 2026), Philips | Reddit (x3) ; PAA : « Which brand is the best for air fryers? » |
| 15 | best cordless vacuum cleaner | **non** | — | SharkNinja.es, OneClearWinner (x2), RTINGS, **Which?**, Mumsnet, The Guardian (févr. 2026), Telegraph, Amazon UK, John Lewis, Vacuum Wars, Argos, PickReviews | — |
| 16 | oil filled radiator cost to run | oui | Vonhaus, r/CasualUK, Screwfix, DeLonghi | Bathroom Takeaway, OneClearWinner, Aosom UK, Screwfix, Vonhaus (sept. 2026), Berks Insulation (2025), Go Compare (nov. 2025), DeLonghi, Eco Energy Services… | PAA : « cheaper than electric fire? » |
| 17 | best portable air conditioner uk | **non** | — | OneClearWinner (x2), bestproductsreviews.co.uk (x2), The Guardian (août 2026), coolpowerco.co.uk, Air Con Centre, Telegraph (juil. 2026), Amazon UK, The Independent (juil. 2026), Ideal Home (juil. 2026) | — |

**Ce que montrent ces 17 SERP**

- **L'AI Overview n'apparaît que sur 6 requêtes sur 17, et jamais sur les 11 requêtes « best X / deals »** : il se déclenche sur les requêtes « vs », « cost to run » et « not heating up » (informationnelles). Les requêtes commerciales « best X » restent donc des pages de résultats classiques (10 liens bleus) — contrairement à la France où l'IA est présente presque partout. Ce relevé est un instantané depuis un seul poste : à re-tester avec un VPN britannique.
- **Aucun verrou Which? / TechRadar.** Which? apparaît dans 7 SERP sur 17 (surtout les pages « advice » et « deals », derrière paywall pour les notes), TechRadar dans 2, Ideal Home dans 5, The Guardian dans 4, The Telegraph dans 4, The Independent dans 2 (+1 citation IA), BBC Good Food dans 2 (+1 citation IA). **Good Housekeeping, T3, Tom's Guide (hors air fryer), Expert Reviews (2 apparitions), Mumsnet (1), MoneySavingExpert (1, plug-in solar) sont quasi absents** sur ce panel.
- **Les affiliés « gabarit » prennent de la place** : OneClearWinner (pages auto-générées « 10 Best … – October 2026 ») apparaît dans **8 SERP sur 17**, avec PickReviews, bestpulse, bestproductsreviews.co.uk, guarddetect, coolpowerco, QuoteSmith, posh.co.uk, isnuug, warmzilla, heatable. Leur point commun : mois courant dans le titre, pas de nom de testeur visible sur la SERP (qualité éditoriale non auditée ici).
- **Revendeurs et marques occupent les pages « best »** : Currys, John Lewis, B&Q, Screwfix, Argos, Dunelm, Amazon UK, Debenhams, Appliances Direct ; blogs de marques (Meaco, Vonhaus, EcoFlow, Jackery, Octopus, Russell Hobbs, Tower, DeLonghi).
- **Contenus américains sur SERP britannique** : Food & Wine, The Spruce, NYT Wirecutter, Vacuum Wars, RTINGS, PCMag UK apparaissent sur des requêtes « best … » alors qu'ils recommandent des modèles US (prix en dollars). Un guide **spécifiquement UK (références UK, prix en £)** est un angle différenciant.
- **Contenus périmés bien classés** : Goodhomes Magazine (2019), Speedy Hire (2023), Meaco Blog (2023), EnergyGuide.org.uk (2023), cookeatrepeat.co.uk (2023), Guardian (nov. 2024) — surtout sur « cost to run », alors que le plafond Ofgem a changé de nombreuses fois (voir B.4).
- **Reddit et Mumsnet** : bloc « Discussions and forums » sur la quasi-totalité des SERP (r/AskUK, r/airfryer, r/CasualUK, r/smarthome, Mumsnet) et Reddit est cité dans 3 des 6 AI Overviews observés (r/AskUK, r/airfryer, r/CasualUK).
- **Requêtes « cost to run » : l'IA cite surtout des comparateurs financiers et des marques** (MoneySuperMarket, Go Compare, Uswitch ; Meaco, Vonhaus, DeLonghi ; revendeurs Currys, Screwfix ; The Independent ; Reddit) plutôt que des sites de test.
- **Requêtes « problème »** : Spanr (outil IA de dépannage), JustAnswer (forum d'experts payant), support Tower, SOS Parts. Qualité faible et datée (2024 pour JustAnswer).
- **Plug-in solar (nouveau)** : GOV.UK, Which?, Energy Saving Trust, MoneySavingExpert, British Gas, Octopus tiennent déjà la page 1, avec des marques (Jackery, Anker, EcoFlow) et Currys. Voir B.1 et B.5.

**Qui est cité par ChatGPT / Perplexity / AI Overviews au R-U (documenté)**

- Aucune étude publique spécifiquement britannique sur les citations « produit » n'a été retrouvée (budget de recherche web épuisé avant d'élargir). Les seules données exploitables : index agrégé Everything-PR (août 2026, 680 M de citations, août 2024–avril 2026) — ChatGPT cite surtout Wikipédia, Forbes, **Amazon (source d'achat)**, TechRadar ; Google AI Overviews cite surtout Reddit et YouTube ; The Guardian est la 1re source éditoriale non-US ; pas de chiffre R-U par catégorie — [Everything PR News](https://everything-pr.com/ai-platform-citation-source-index-2026/).
- **À ne pas utiliser** : un chiffre « TechRadar cité dans 23 % des réponses » circule ; je l'ai vérifié à la source (DataDab, mai 2026) : il porte sur 100 requêtes **B2B logiciels** via l'API gpt-4o-search, pas sur l'électroménager ni sur le R-U. Non retenu.
- **Indice interne (Search Console, 28 j)** : ≈ 8 000 impressions de **requêtes synthétiques d'assistants IA / outils de suivi de prompts** (ex. « air fryer for remote workers 2026 », « in 2026 air purifier pros and cons ») sur lesquelles Homenura est déjà en positions 2 à 8, sans clic (fichier `gsc-2026-10-30.md`). Ce sont les requêtes de « fan-out » que les assistants envoient à Google : le site est déjà dans la chaîne de sélection des réponses IA, sans que cela se voie en clics. Pour être **cité** plutôt que seulement affiché : réponse courte en tête, FAQ calquée sur les PAA, données datées et chiffrées.
- Observation directe : sur les 6 AI Overviews relevés, les citations vont à Which?, BBC Good Food, The Independent, Currys, Screwfix, Ideal Home, MoneySuperMarket/Go Compare/Uswitch, des blogs de marques, YouTube et Reddit.

### B.3 Leurs techniques et leurs faiblesses exploitables (Royaume-Uni)

**Pages analysées en HTML le 30/10/2026** (script de lecture : balises, JSON-LD, liens ; chiffres mesurés).

| Page | Titre / H1 | Longueur & structure | Données structurées | Auteur / dates | Liens marchands | Particularité |
|---|---|---|---|---|---|---|
| **Which?** — [best air fryers](https://www.which.co.uk/reviews/air-fryers/article/recommendations/which-best-buy-air-fryers) | « Best air fryers 2026 UK: every type reviewed by our experts » | 3 875 mots, 13 H2, 18 H3, 0 tableau | Article, Person | Auteur nommé (Jamie Mayne) ; publié **2017**, **modifié 30/10/2026** (aujourd'hui) | Quasi aucun (commission mentionnée) | Notes et classements derrière paywall (« join.which.co.uk ») ; test en labo ; page « heated airers » : publiée 03/2025, modifiée 01/10/2026 |
| **Mumsnet Swears By** — [best air fryers](https://mumsnet.com/swearsby/best-air-fryers) | « Best air fryer 2026: 10 tried and tested models » ; H1 « We've tested 30+ air fryers… » | **6 337 mots**, 32 H2, 1 tableau | Article, ItemList, Product, Review, Offer, Person | 2 auteurs nommés ; publié 2020, **« Last updated Oct 6, 2026 »** | Skimlinks (19) + Amazon, rel nofollow | Preuve sociale (communauté de parents) |
| **T3** — [Tower vs Ninja](https://www.t3.com/features/tower-vs-ninja-what-air-fryer-brand-should-i-choose) | « Tower vs Ninja: What air fryer brand should I choose? » | 2 478 mots, 5 H2, 0 tableau | Article, ItemList, SpeakableSpecification | Auteur nommé ; **publié = modifié 10/03/2023** (jamais mis à jour) | Awin / georiot (14 liens sponsored) | Page « vs » la plus visible sur la requête… mais **vieille de 3 ans** |
| **Expert Reviews** — [dehumidifier cost to run](https://www.expertreviews.co.uk/beauty-wellness/air-treatment/how-much-does-a-dehumidifier-cost-to-run) | « How much does a dehumidifier cost to run? » | 1 575 mots, 4 H2, 13 H3, 0 tableau | NewsArticle, Person | Auteure nommée ; publié 16/05/2025, **aucune date de modification** | Awin (5) | Contenu court, pas de tableau, pas de date de mise à jour |
| **HouseholdMoneySaving** — [dehumidifier running costs](https://www.householdmoneysaving.com/how-much-does-a-dehumidifier-cost-to-run/) | « Dehumidifier Running Costs UK: How Much Electricity Do They Use? » | 2 460 mots, 13 H2, **4 tableaux** | BlogPosting, **FAQPage**, Question/Answer | Auteur nommé ; publié 2022, **modifié 11/10/2026** | Aucun | Modèle de page « cost to run » (tableaux + FAQ) |
| **coolcuration.com** (petit affilié) — [best air fryer UK](https://coolcuration.com/best-air-fryer-uk) | « Best Air Fryer UK 2026: Which One Should You Actually Buy? » | 2 100 mots, 10 H2, 15 H3 | Article | « Last updated 27 August 2026 » (**deux mentions contradictoires** dans le gabarit) | 4 liens sponsored (Amazon) | Pas de tableau ni FAQ |

**Techniques observées dans les SERP**

1. **Mois courant dans le titre** : « 10 Best … – October 2026 » (OneClearWinner, 8 SERP), Which? « Best air fryer deals for October 2026 », Mumsnet « Best air fryer 2026: 10 tried and tested models ».
2. **Pages « deals » en URL stable réutilisées** : BBC Good Food « Air fryer deals 2026 – the best offers for January » (12/01/2026), Which? deals mensuels, The Sun. Le même contenu sert Black Friday → janvier.
3. **Étoiles dans la SERP** : Currys affiche « 4,6 ★ (651) » sur un guide « best video doorbell cameras without a subscription ».
4. **Requêtes « no subscription », « under £100 », « cost to run », « vs »** présentes dans les recherches associées / PAA de presque toutes les catégories (voir B.1).
5. **Signatures d'expertise** : « we've tested », noms d'auteur, photo, ingénieur nommé (Telegraph : « our engineer scored nine models »), « tested in a heatwave » (Independent).
6. **Les marques écrivent le contenu « cost to run »** (Vonhaus, Meaco, DeLonghi, Screwfix) et sont citées par l'IA.

**Faiblesses exploitables**

- **Contenus périmés** : T3 Tower vs Ninja (2023), Expert Reviews dehumidifier cost (2025, sans date de modification), Meaco Blog (2023), Speedy Hire (2023), EnergyGuide (2023), Goodhomes (2019). Le plafond Ofgem a été revu à chaque trimestre ; **un guide « cost to run » recalculé au plafond d'octobre 2026 (26,32 p/kWh)** est plus juste que ces pages.
- **Contenu américain** (Food & Wine, The Spruce, Wirecutter, Vacuum Wars, RTINGS) sur des requêtes britanniques : modèles et prix non UK.
- **Gabarits auto-générés** (OneClearWinner, bestproductsreviews) : titre « October 2026 » mais pas de signature de testeur visible ; pas d'angle « coût d'usage » ni de références UK (Ofgem, MSE).
- **Paywall Which?** : les notes ne sont pas visibles ; une page qui renvoie vers Which? (lien) et complète par prix, p/heure et comparaisons répond à la requête sans la copier.
- **Requêtes « not heating up / chirping / not working »** : Spanr, JustAnswer, support Tower, SOS Parts ; peu de guides structurés.
- **Plug-in solar** : GOV.UK, Which?, MSE, Octopus tiennent la page 1 mais les **comparatifs produits par modèle UK** (Anker, EcoFlow, Jackery, Lidl/Aldi, Currys) sont encore rares (marché ouvert depuis le 27/08/2026).

**Sur nos propres pages EN (lecture seule) — défauts mesurés**

- **Tous les liens marchands des pages /en pointent vers amazon.fr** : 18 liens sur 18 sur « Ninja vs Philips Air Fryer », 39 sur 39 sur le guide air fryer EN, et toutes les pages catégorie EN testées (solaire, déshumidificateurs, chauffages, thermostats, cafetières, aspirateurs-laveurs) ne contiennent que `amazon.fr`. Les liens utilisent le tag `homenuraen05-21`. Un acheteur britannique est envoyé vers une boutique française (prix en euros, livraison à vérifier).
- **Aucun prix affiché en £ ni en €** sur la page « Ninja vs Philips » (0 occurrence de « £ » et de « € ») et les codes produits sont des références **EU** (AF500EU, SL400EU, AF400EU), pas les références UK (AFxxxUK).
- **Slugs EN en français** : `/en/blog/ninja-vs-philips-quel-choisir`, `/en/blog/meilleur-airfryer-petit-budget`, `/en/blog/erreurs-courantes-airfryer`… Le slug s'affiche dans le fil d'Ariane de la SERP (« homenura.com › en › blog › ninja-vs-philips-quel-choisir ») : mots français sur un résultat anglais.
- **hreflang** : `en` générique + `x-default` = français ; pas de `en-GB` (la navigation affiche pourtant « 🇬🇧 UK »).
- **Titres de catégories qualifiés** : « Best Smart Dehumidifiers », « Best Smart Space Heaters », « Best Balcony Solar Panels », « Best automatic coffee machines » ; recommandations d'appareils vendus surtout en France (Thermor Equateur 4, Sauter Orosi 2 pour les chauffages).
- **Point positif** : « Quick answer » en tête, FAQPage + ItemList + Article, date « Updated 9 October 2026 », mention d'affiliation, texte en anglais britannique, **aucune affirmation de test** (« based on manufacturer specifications, published independent reviews and verified buyer feedback »). Une note « 9.2/10 » apparaît pourtant à côté du produit alors que le texte annonce ne pas attribuer de notes arbitraires : à harmoniser.

### B.4 Requêtes saisonnières imminentes et « cost to run » (Royaume-Uni)

**Calendrier et contexte énergie (vérifiés)**

| Élément | Valeur | Source |
|---|---|---|
| Black Friday | **vendredi 27 novembre 2026** ; Cyber Monday lundi 30 novembre. Les enseignes ouvrent plus tôt (ex. Russell Hobbs : offres du 28 octobre au 30 novembre ; Which? : « Best air fryer deals for October 2026 » publié le 30/09) | résultats de recherche UK (PriceSpy, Haier, awarenessdays) + SERP du 30/10 |
| Boxing Day / January sales | Boxing Day = **samedi 26 décembre 2026** (lendemain de Noël, vendredi 25) ; les soldes de janvier s'enchaînent. BBC Good Food republie « Air fryer deals 2026 – best offers for January » (12/01/2026) | calendrier + SERP « air fryer black friday deals » |
| Intérêt pour « Black Friday » en baisse | recherches « Black Friday » **−36 %** vs 2019 ; termes « deals » −40 % ; requêtes liées à une enseigne −68 % ; mais requêtes de dates +39 % (« when does Black Friday end » +439 %, base non publiée) — 19 termes, novembre 2019 → novembre 2025 ; source des volumes non précisée (seuls les coûts par clic sont des estimations Semrush) | [ppc.land / Marketing Signals](https://ppc.land/black-friday-searches-drop-36-in-uk-since-2019-marketing-signals-finds/) (14/10/2026) |
| Amazon UK, Black Friday 2024 | « Home & Kitchen » +105 % de ventes ; **déshumidificateurs +75 %** en moyenne ; « air fryer » resté dans le top 5 des recherches Amazon UK tout novembre | [Jellyfish](https://www.jellyfish.com/en-gb/blog/black-friday-2024-the-uks-shopping-trends-unwrapped/) |
| Plafond Ofgem 1er oct. → 31 déc. 2026 | électricité **26,32 p/kWh** + 54,83 p/jour d'abonnement ; « +4 % » pour un foyer type ; TVA retirée des factures d'électricité du 1er oct. 2026 au 31 mars 2027 | [Ofgem](https://www.ofgem.gov.uk/news/changes-energy-price-cap-between-1-october-and-31-december-2026), [Credit Ladder](https://creditladder.co.uk/blog/energy-price-cap-october-2026) |
| Prochain plafond (janv.–mars 2027) | revu tous les 3 mois ; **date d'annonce et niveau non retrouvés** (Ofgem : « We set the price cap level every 3 months ») | [Ofgem](https://www.ofgem.gov.uk/information-consumers/energy-advice-households/energy-price-cap-explained) |
| Plug-in solar | **légal et en vente depuis le 27/08/2026** (annonce GOV.UK du 26/08) ; 800 W max par kit ; économie annoncée jusqu'à 110 £/an ; Currys, B&Q, Screwfix, Amazon, Argos, Wickes | [GOV.UK](https://www.gov.uk/government/news/households-can-save-as-plug-in-solar-panels-come-to-market) |

**Saisonnalité mesurée (Google Trends Royaume-Uni, 5 ans, moyenne mensuelle 2023-2026, indice relatif)**

| Terme | Pic | Creux | Écart |
|---|---|---|---|
| air fryer | janv. 58,6 · déc. 55,9 · nov. 48,8 | juin 31,3 | ×1,9 |
| ninja air fryer | nov. 9,5 · déc. 9,4 · janv. 8,6 | ≈ 4–5 | ×2,4 |
| **dehumidifier** | **nov. 13,8** · oct. 8,9 · déc. 7,9 · janv. 7,8 | mai 2,0 | ×7 |
| **heated airer** | oct. 2,6 · nov. 2,4 · sept. 1,6 | juin–juil. ≈ 0 | > ×25 |
| **electric blanket** | **nov. 4,2** · oct. 3,2 · déc. 3,2 · janv. 3,1 | juin 0,1 | ×40 |
| oil filled radiator | nov. 1,5 · janv. 1,2 · oct. 1,1 · déc. 1,1 | avr.–août ≈ 0 | n.s. |
| portable air conditioner | **juin 6,5** · juil. 3,4 (pics en canicule : max = 50) | oct.–mars ≈ 0 | n.s. |
| robot vacuum | plat (1,2–1,8), léger relief en novembre | — | ×1,5 |
| « dehumidifier cost to run » | **nov. 28,7** · oct. 20,2 · janv. 14,9 · déc. 13,5 | mars–août ≈ 0 | n.s. |
| « tumble dryer cost to run » | nov. 17,1 · oct. 13,1 · janv. 10,1 · sept. 8,5 | avr.–août ≈ 0,7 | ×25 |
| « oil filled radiator cost to run » | nov. 15,9 · janv. 10,9 · oct. 6,2 | avr.–juil. ≈ 0 | n.s. |
| « heated airer cost to run » | oct. 2,9 · nov. 2,7 · janv. 1,9 | été 0 | n.s. |
| « air fryer cost to run » | janv. 1,5 (faible) | ≈ 0 | n.s. |

(Chaque ligne est un indice relatif au sein de sa requête Trends ; les familles « cost to run » ont été comparées entre elles, pas avec « air fryer ».)

**Lecture pour la planification**

- **Les requêtes « cost to run » sont des pics de choc de prix** : la moyenne 5 ans est 2 à 5 fois supérieure à celle des 52 dernières semaines pour oil-filled radiator (5,3 vs 2,1), tumble dryer (9,5 vs 3,7), heated airer (1,8 vs 0,4), air fryer (1,8 vs 0,3), à cause de la crise énergétique de 2022 (maxima de 34 à 100 sur ces indices). Elles repartent à chaque annonce de plafond : **l'annonce Ofgem pour janvier–mars 2027 est le déclencheur à surveiller**, et la saison de chauffe (oct.–janv.) est le créneau régulier.
- **Fenêtre immédiate (maintenant → fin janvier)** : dehumidifier, heated airer, electric blanket, oil-filled radiator, tumble dryer, thermostats, ainsi que les familles « cost to run » associées. Pic de novembre : publier et dater **avant le 15 novembre**.
- **Black Friday est une fenêtre courte et plus petite qu'avant** (−36 % vs 2019, mais les requêtes « when does it end / is it worth waiting » progressent) : privilégier une page « deals » à URL stable (réutilisée pour Boxing Day et janvier) plutôt que des pages jetables.
- **Plug-in solar** : fenêtre d'actualité en cours (légalisation le 27/08, rayons en cours de remplissage chez Wickes/Argos) ; les modèles UK (Anker SOLIX, EcoFlow, Jackery, Octopus, Currys) arrivent : publier un comparatif « par modèle UK » avant Noël.

**Calculs de coût d'usage à publier** (formule : kW × heures × 26,32 p/kWh ; **puissances typiques = hypothèses à remplacer par la fiche de chaque modèle**)

| Appareil | Puissance (hypothèse) | Coût | Recoupement dans les SERP / l'IA |
|---|---|---|---|
| Déshumidificateur compresseur | 200 W | ≈ 5,3 p/h ; 8 h ≈ 42 p | L'IA Google annonce « 5 à 8 p/h » (typique) |
| Heated airer | 230–360 W | ≈ 6,1 à 9,5 p/h | Lions Home : « 230–360 W » |
| Air fryer, 1 repas | 1 500 W × 30 min = 0,75 kWh | ≈ 19,7 p | L'IA Google (MoneySuperMarket/Go Compare) : « 15 à 30 p par repas » |
| Oil-filled radiator | 1 500 W ; 2 000 W | ≈ 39,5 p/h ; 52,6 p/h (en continu) | L'IA Google (Vonhaus) : « 16 à 66 p/h » selon thermostat |
| Couverture chauffante | 100 W × 8 h = 0,8 kWh | ≈ 21 p/nuit | hypothèse |

Un résumé de recherche attribue à Which? (calcul sur le plafond de juillet 2026) : sèche-linge à condensation ≈ 138 £/an, sèche-linge pompe à chaleur ≈ 54 £/an, lave-vaisselle ≈ 67 £/an — non revérifié à la source (page Which? inaccessible sans abonnement) ; à citer seulement après contrôle.

### B.5 Comment Homenura peut passer devant — 10 actions, Royaume-Uni

Notation : **Impact** 1–5, **Effort** 1–5 (1 = quelques heures). Classement = impact ÷ effort. Titres ≤ 60 caractères, **aucune affirmation de test** (règle du site). Orthographe et vocabulaire **britanniques** (airer, hoover, smoke alarm, lawnmower, tumble dryer, CCTV).

| Rang | Action | Impact | Effort | Quand |
|---|---|---|---|---|
| 1 | Traiter les pages EN très vues : décider l'audience (filtre pays R-U), corriger les signaux UK, retitrer « Ninja vs Philips » | 5 | 1 | cette semaine |
| 2 | Retitrer les catégories avec le vocabulaire britannique | 5 | 1 | cette semaine |
| 3 | Brancher vraiment le R-U : liens amazon.co.uk, prix en £, références UK | 5 | 2 | cette semaine / sem. 2 |
| 4 | Hub « cost to run » (dehumidifier, heated airer, air fryer, radiators, dryers) | 5 | 2 | **avant le 15 nov.** |
| 5 | Plug-in solar : page « legal / worth it / best models » | 4 | 2 | nov. |
| 6 | Hub « deals » à URL stable : Black Friday → Boxing Day → January sales | 4 | 2 | **avant le 9 nov.** |
| 7 | Pages « under £100 / £200 » et « no subscription » (les seules requêtes UK réelles de notre GSC) | 4 | 2 | nov.–déc. |
| 8 | Pages « X vs Y » britanniques (gabarit n°1 en clics sur nos données GSC) | 4 | 2 | nov.–janv. |
| 9 | Pages « problème » avec les mots britanniques (gabarit n°2 en clics) | 4 | 2 | déc.–janv. |
| 10 | Nouvelles pages hors catalogue : heated airer, electric blanket, oil-filled radiator, tumble dryer | 4 | 3 | nov. |

**1. Traiter les pages EN très vues** — le CTR global est trompeur (impressions surtout américaines/indiennes ; position britannique moyenne 16,7) : voir le diagnostic et le protocole en B.6.

**2. Retitrer les catégories (vocabulaire réel, voir B.1)** :
- « Best Smart Dehumidifiers 2026 » → « Best Dehumidifiers UK 2026: Damp, Mould & Drying Clothes » (le mot « smart » fait perdre la requête « best dehumidifier (uk) »).
- « Best automatic coffee machines 2026 » → « Best Bean to Cup Coffee Machines UK 2026 ».
- « Best Vacuum-Mop Robots 2026 » → « Best Robot Vacuum and Mop UK 2026 ».
- « Best Smart Space Heaters » → « Best Oil-Filled Radiators & Electric Heaters UK 2026 (Cost to Run) » (« space heater » est américain ; recommandations à remplacer par des modèles vendus au R-U, pas Thermor / Sauter).
- « Best Balcony Solar Panels 2026 » → « Plug-in Solar Panels UK 2026: Legal Since August, Best 800W Kits ».
- Détecteurs → « Smoke Alarms UK 2026: Best Interlinked & 10-Year Battery » (au R-U on dit *smoke alarm*, pas *smoke detector*).
- Sonnettes → « Best Video Doorbells UK 2026 (Including No Subscription) ».
- Air fryers → « Best Air Fryers UK 2026: Dual Basket, Single Drawer & Cost to Run ».
- Gabarit : `Best {X} UK 2026: {angle}` + 1re phrase = réponse en 40 mots + « Updated {date} ».

**3. Brancher vraiment le R-U** (défaut mesuré en B.3 : 100 % des liens EN vont vers amazon.fr, aucun prix, références EU) :
- Liens affiliés **amazon.co.uk** avec le tag Associates UK (à vérifier : compte/tag UK distinct du tag `homenuraen05-21` utilisé sur amazon.fr).
- Prix et p/heure **en £** (affichage des prix Amazon soumis aux règles du programme : à contrôler), références produits UK (les modèles Ninja existent en variantes EU/UK : vérifier chaque code sur ninjakitchen.co.uk avant de le citer).
- Modèles disponibles au R-U uniquement ; supprimer les modèles français (Thermor, Sauter…) des pages EN.
- hreflang : ajouter `en-GB` (la navigation affiche déjà « 🇬🇧 UK »).
- Slugs EN anglais : `/en/blog/ninja-vs-philips-air-fryer`, `/en/blog/best-air-fryer-on-a-budget`, `/en/blog/air-fryer-mistakes`… avec 301 depuis les slugs français (le slug apparaît dans le fil d'Ariane de la SERP).

**4. Hub « cost to run »** — le terrain le plus porteur d'octobre à janvier (B.4) et où les pages classées sont périmées (2023–2025). Une page par appareil : `How much does a {dehumidifier | heated airer | air fryer | oil-filled radiator | electric blanket | tumble dryer | portable air conditioner} cost to run?` — titre : « Dehumidifier Cost to Run UK (26.32p/kWh, Oct 2026) » ; contenu : tableau puissance × durée → p/heure, p/jour, £/mois ; « typical » vs « worst case » ; comment réduire ; FAQ calquée sur les PAA (« How much does it cost to run a dehumidifier each month? », « Should I run my dehumidifier at night or day? », « What does Martin Lewis say about dehumidifiers? » → renvoyer vers Money Saving Expert avec lien) ; **date de calcul en tête et mise à jour à chaque plafond Ofgem** (prochain : janv.–mars 2027). Page de synthèse « cheapest way to dry clothes: heated airer vs dehumidifier vs tumble dryer » (PAA : « Is a heated airer better than a dehumidifier? »). Source des tarifs : [Ofgem](https://www.ofgem.gov.uk/news/changes-energy-price-cap-between-1-october-and-31-december-2026).

**5. Plug-in solar** — marché ouvert le 27/08/2026 ([GOV.UK](https://www.gov.uk/government/news/households-can-save-as-plug-in-solar-panels-come-to-market)). La page 1 est occupée par GOV.UK, Which?, Energy Saving Trust, MoneySavingExpert, British Gas, Octopus, des marques et Currys, mais **peu de comparatifs de modèles UK**. Page type : « Plug-in Solar Panels UK: Are They Legal, What Do They Save, Best Models (800W) » : cadre légal (800 W, liste d'appareils accrédités ENA, accord propriétaire/copropriétaire), économies annoncées (jusqu'à 110 £/an selon le gouvernement), tableau par modèle UK (prix en £, avec/sans batterie, garantie), FAQ PAA : « Is plug-in solar legal in the UK? », « Do plug-in solar panels work in a power cut? », « Do plug-in solar panels really work? ». Nommer la catégorie « plug-in solar », pas « balcony solar ».

**6. Hub « deals » à URL stable** : `/en/black-friday/airfryers` (EN : 689 mots, à étoffer ; slug à passer en `air-fryers` avec 301) devient « Air Fryer Deals UK: Black Friday 2026 (updated daily) », puis « Boxing Day & January Sales » le 26/12 sans changer d'URL (BBC Good Food et Which? font exactement cela). Contenu : prix de référence, « when does Black Friday end? », « is it cheaper to buy on Black Friday? » (PAA), liste « worth watching ». Appliquer à : dehumidifier (+75 % de ventes à Black Friday 2024 sur Amazon UK selon Jellyfish), robot vacuum, cordless vacuum, bean to cup, smart thermostat.

**7. « Under £100 / £200 » et « no subscription »** (observés dans Suggest et PAA) : « Best Video Doorbell No Subscription UK », « Best Outdoor Camera No Subscription UK », « Best Smart Thermostat UK (No Subscription) », « Best Air Fryer Under £100 », « Best Robot Vacuum Under £200 », « Best Cordless Vacuum Under £150 », « Best Bean to Cup Coffee Machine Under £300 / £500 », « Best Dual Basket Air Fryer Under £100 ».

**8. Pages « X vs Y »** : Ninja vs Tower (la page T3 date de 2023), Ninja vs Philips (existe : voir B.6), Ninja vs Instant vs Cosori (dual), tado vs Hive vs Nest (PAA : « Which is better, tado° or Nest? », « Is there a better alternative to Hive? »), Ring vs Eufy vs Blink, Shark vs Dyson cordless, Roborock vs Eufy, heated airer vs dehumidifier, dual basket vs single drawer. Gabarit : verdict en 3 lignes → tableau → « choose A if… / B if… » → coût d'usage en p/heure.

**9. Pages « problème » avec les mots britanniques** : le site a 265 pages `guides/probleme/…` par langue (ex. `en/guides/probleme/ne-chauffe-plus` = « My air fryer is not heating up anymore — what should I do? ») ; la SERP (Spanr, JustAnswer, support Tower, SOS Parts) est faible. Passer à « Air Fryer Not Heating Up? 7 Causes and Fixes » (+ variantes Ninja / Tower / Philips), « Dehumidifier Not Collecting Water / Icing Up », « Smoke Alarm Chirping Every 30 Seconds », « Ring Doorbell Not Charging », « Robot Vacuum Not Charging ». Slugs en anglais.

**10. Nouvelles pages hors catalogue (fortes en saison froide)** : heated airer (« Best Heated Airers UK 2026: Cost to Run »), electric blanket (« Which Side Up? Best Electric Blankets UK »), oil-filled radiator / electric heater, tumble dryer et heat-pump dryer (coût d'usage). Elles ne sont pas « connectées », mais elles portent la demande d'énergie du R-U (voir B.4). Les SERP : pas d'IA sur « best heated airer », concurrents = revendeurs (John Lewis, PriceRunner, easyLife) et gabarits.

**Mesure** : Search Console, filtre pays = United Kingdom, par page : impressions, CTR, position, comparées 28 jours avant/après ; objectif réaliste : sortir du CTR ≈ 0 sur les pages à fortes impressions avant Black Friday.

### B.6 Récupérer le CTR des pages EN très vues (diagnostic et protocole)

**Ce que disent les données de la Search Console (28 j au 28/10/2026, fichier `gsc-2026-10-30.md`)**

| Pays | Clics | Impressions | CTR | Position moy. |
|---|---|---|---|---|
| Royaume-Uni | 19 | **2 135** | 0,9 % | **16,7** |
| États-Unis | 8 | **4 479** | 0,2 % | n.c. |
| Inde | 17 | 1 556 | n.c. | n.c. |
| France | 45 | 3 134 | 1,4 % | 12,4 |
| Site entier | 458 | 57 k | 0,8 % | 9,5 |

Pages EN : `/en/blog/ninja-vs-philips-quel-choisir` **58 clics / 4 904 impressions** ; très vues à 0 clic : `/en/blog/meilleur-airfryer-petit-budget` (1 154), `/en/cuisine-connectee/cafetieres` (867), `/en/blog/cafetiere-connectee-guide` (850), `/en/blog/guide-purificateur-air-2026` (849), `/en/confort-air/climatiseurs-mobiles` (734), `/en/confort-air/purificateurs-air` (684). Requêtes UK réelles : « best outdoor security cameras uk no subscription » (position 16), « best video doorbell uk without subscription » (45), « ring doorbell comparison uk » (6).

**Diagnostic**
1. **Le R-U ne génère que 2 135 impressions pour tout le site** : la page « Ninja vs Philips » (4 904) ne peut pas être majoritairement britannique, et les six pages 0 clic listées ci-dessus (≈ 5 100 impressions au total) dépassent à elles seules le total britannique du site. Les impressions « EN très vues » viennent surtout d'audiences non britanniques (États-Unis : 4 479 impressions à 0,2 % de CTR ; Inde ; autres), pour qui un guide « UK » aux liens amazon.fr n'a aucune utilité. **Le CTR global de ces pages n'est pas un indicateur fiable** : à lire avec le filtre pays = United Kingdom.
2. **La position moyenne britannique est 16,7 (page 2)**, et 12,4 en France : le premier levier est le **classement**, pas le titre. À la position 16, aucun titre n'apportera de CTR ; la SERP montre en outre un AI Overview et des blocs Reddit sur « ninja vs philips air fryer ».
3. **Le titre n'est pas la cause principale** : plusieurs pages à 0 clic sont déjà bien intitulées (« Best Air Purifiers 2026 », « Best Budget Air Fryer 2026: 5 Cheap Models Worth Buying », guide cafetière « … Smart Bean-to-Cup Picks ») et ne font quand même aucun clic, ce qui confirme l'effet audience (États-Unis/Inde) et position. Restent des décalages de vocabulaire réels sur d'autres pages : « Best automatic coffee machines » face à « bean to cup » ; « Best Smart Portable Air Conditioners » face à « best portable air conditioner (uk) » (14–16 K chez Ahrefs) ; et en octobre la demande de climatisation est à son creux (B.4).
4. **Notre page « Ninja vs Philips » a des signaux non britanniques** : liens amazon.fr, références EU, aucun prix, slug français (le slug s'affiche dans le fil d'Ariane de la SERP), hreflang `en` sans `en-GB`.

**Actions, dans l'ordre**
1. **Décider de l'audience de /en** : le choix « R-U » est déjà affiché (drapeau 🇬🇧). Si les États-Unis/Inde ne sont pas visés, ne pas optimiser pour eux et suivre /en avec le **filtre pays = United Kingdom** (impressions, clic, position). Si l'on veut les monétiser, il faudrait un jeu de liens amazon.com : hors périmètre.
2. **Corriger les signaux UK sur les pages à plus fort potentiel** (B.5, actions 2 et 3) : liens amazon.co.uk, prix en £, références UK, slug anglais en 301, hreflang `en-GB`, vocabulaire (bean to cup, portable air conditioner, plug-in solar…).
3. **Titre / meta / H1 de « Ninja vs Philips »** (tester 2 variantes, 21 jours chacune) :
   - Titre A : « Ninja vs Philips Air Fryer UK 2026: Dual vs Single Basket » (57 caractères).
   - Titre B : « Ninja vs Philips Air Fryer: Which Is Better in the UK? (2026) ».
   - Meta (≤ 155 car.) : « Ninja FlexDrawer vs Philips 3000 XL: capacity, noise, UK prices in £ and cost per meal at 26.32p/kWh. Updated October 2026. » (le coût par repas doit être calculé dans la page).
   - H1 : « Ninja vs Philips Air Fryer (UK 2026): Which Should You Buy? ».
4. **Réponse courte en tête** (40–55 mots) avec modèles UK, capacité, prix en £ et coût par repas ; **FAQ calquée sur les PAA** : « Which brand is the best for air fryers? », « Are Ninja air fryers better than other brands? », « What is the most reliable brand of air fryer? », « What's better than a Ninja air fryer? », « Which Ninja air fryer is the best in 2026? ».
5. **Maillage** depuis le guide « air fryer », « single vs dual basket » et « cost to run » avec l'ancre « Ninja vs Philips » ; citer Which? / BBC Good Food avec lien quand ils ont publié un comparatif (rappeler que nous ne testons pas).
6. **Pages UK à pousser en priorité (requêtes réelles GSC)** : « best video doorbell uk without subscription » (position 45) et « best outdoor security cameras uk no subscription » (16) → pages « no subscription » (B.5, action 7) ; « ring doorbell comparison uk » (position 6) → page « Ring vs Eufy vs Blink » pour passer dans le top 3.
7. **Mesure** : fenêtre de 21 jours, une variable à la fois, lecture par page × pays = United Kingdom. Attente réaliste : à la position 16 le CTR est ≈ 0 ; viser d'abord le top 10 (CTR 1–3 %), puis le top 5. Référence : un AI Overview réduit de 34,5 % le CTR du n°1 (Ahrefs, 300 000 mots-clés, mars 2024 → mars 2025, essentiellement US).
8. **Ne pas réécrire à l'aveugle** les pages dont les impressions sont américaines ou indiennes : cela ne produira pas de clics britanniques.


---

## Annexe D — Nos mots-clés actuels mal choisis (synthèse)

**France** (colonne « kw fr » du fichier)

| Catégorie (slug) | kw actuel | Problème constaté | À utiliser |
|---|---|---|---|
| cafetieres | meilleure cafetière connectée | Aucune suggestion Google ne contient « cafetière connectée » ; la demande est « machine à café à grain » (89 variantes Suggest, comparatifs Que Choisir « avec broyeur ») | **meilleure machine à café à grain** ; + « expresso broyeur », « double bac » |
| aspirateurs-laveurs | aspirateur laveur robot | Ordre rare ; les acheteurs tapent « aspirateur robot laveur » (109 variantes) et « robot aspirateur laveur » | **aspirateur robot laveur** (H1) ; « robot aspirateur laveur » (H2) |
| tondeuses-robots | meilleure tondeuse robot | Ordre inversé ; SERP et Suggest = « robot tondeuse » ; l'expression « sans fil périphérique » (et non « périmétrique ») domine | **meilleur robot tondeuse** ; « robot tondeuse sans fil périphérique » |
| robots-piscine | meilleur robot de piscine | « robot piscine » domine (116 variantes) | **meilleur robot piscine** |
| solaire-balcon | kit solaire balcon | 14 variantes Suggest contre 83 pour « panneau solaire plug and play » ; Hello Watt, Les Numériques, Mon Kit Solaire utilisent « plug and play » / « station solaire » | **panneau solaire plug and play** (principal) ; « kit solaire balcon » (secondaire) |
| chauffages-appoint | chauffage d'appoint connecté | « connecté » n'apparaît pas dans la demande ; il manque « radiateur électrique » (124 variantes) | **chauffage d'appoint électrique** + nouvelle page **radiateur électrique** |
| detecteurs-fumee-co | détecteur fumée connecté | Demande dominante = « détecteur de fumée » (obligation légale, pas cher, « qui bip ») ; Que Choisir juge le connecté « 100 % gadget » | **détecteur de fumée** (avec section « connecté ? ») |
| deshumidificateurs | meilleur déshumidificateur (titre « connectés ») | Le qualificatif « connectés » exclut la demande générique | retirer « connectés » du titre/H1 |
| bornes-recharge-ve | borne de recharge voiture électrique | La SERP « borne de recharge » = stations publiques (« autour de moi », Tesla, Lidl) | **borne de recharge domicile** / **wallbox** |
| cameras-exterieur | caméra extérieure | Trop court ; la demande = « caméra de surveillance extérieure » + « solaire », « sans fil », « sans abonnement » | **caméra de surveillance extérieure** |
| airfryers | meilleur airfryer | Correct ; mais « air fryer » (2 mots) pèse ≈ 2× « airfryer » dans Google Trends France | garder + citer « air fryer » et « friteuse sans huile » |
| multicuiseurs / robots-multifonctions | meilleur multicuiseur / meilleur robot cuiseur | Non étudié ici ; seules traces Suggest : « airfryer ou cookeo », « airfryer vs thermomix » | à vérifier (Cookeo, Thermomix, robot cuiseur) |

**Royaume-Uni** (colonne « kw en »)

| Catégorie (slug) | kw actuel | Problème constaté | À utiliser |
|---|---|---|---|
| cafetieres | best smart coffee machine (titre « automatic coffee machines ») | La demande = **bean to cup coffee machine** (131 variantes Suggest ; Guardian, BBC Good Food, Ideal Home titrent ainsi) | **best bean to cup coffee machine** |
| aspirateurs-laveurs | vacuum mop robot | Ordre rare | **robot vacuum and mop** / « robot vacuum cleaner with mop » |
| aspirateurs-balais | best cordless stick vacuum | Acceptable ; la forme dominante est plus courte | **best cordless vacuum cleaner** ; « stick vacuum » en secondaire |
| chauffages-appoint | smart space heater (titre « Smart Space Heaters ») | « space heater » est américain ; au R-U : oil-filled radiator, electric heater, fan heater, panel heater | **oil-filled radiator** / **electric heater** (+ cost to run) |
| solaire-balcon | balcony solar panel | Le terme officiel au R-U est **plug-in solar** (GOV.UK, Octopus, Which?, MSE) ; « balcony solar » est marginal | **plug-in solar panels** (UK) |
| detecteurs-fumee-co | smart smoke detector | Au R-U : **smoke alarm** ; Suggest : « smoke alarm beeping / chirping / regulations » | **best smoke alarm** (interlinked, 10-year battery) |
| deshumidificateurs | best dehumidifier (titre « Smart Dehumidifiers ») | « smart » exclut la requête « best dehumidifier (uk) » (5 K, Ahrefs) | **best dehumidifier UK** (damp, mould, drying clothes) |
| robots-piscine | best pool cleaner robot | Ordre rare ; Suggest : « robot pool cleaner » | **best robot pool cleaner** |
| cameras-exterieur | outdoor security camera | Compléter avec « CCTV », « wireless », « no subscription » | **best outdoor security camera UK (no subscription)** |
| sonnettes-video | best video doorbell | Correct ; ajouter « doorbell camera », « no subscription » | idem |
| thermostats | best smart thermostat | Correct ; ajouter « smart heating controls », « tado vs Hive vs Nest » | idem |
| multicuiseurs | best multicooker | Which? et la presse écrivent « multi cooker » (2 mots) | à vérifier |
| (absentes du catalogue) | — | **heated airer, electric blanket, oil-filled radiator, tumble dryer / heat-pump dryer** = fortes requêtes de saison froide au R-U | nouvelles pages (B.5, action 10) |

---

## Annexe E — Sources principales

- Google SERP, Suggest et Trends : relevés directs du 30/10/2026 (voir 0.1).
- Ahrefs public : [ninjakitchen.fr](https://ahrefstop.com/websites/ninjakitchen.fr), [ninjakitchen.co.uk](https://ahrefstop.com/websites/ninjakitchen.co.uk), [idealhome.co.uk](https://ahrefstop.com/websites/idealhome.co.uk), [expertreviews.co.uk](https://ahrefstop.com/websites/expertreviews.co.uk), [quechoisir.org](https://ahrefstop.com/websites/quechoisir.org).
- Pi Datametrics, « Air fryer most searched UK product » : https://pi-datametrics.com/blog/air-fryer-most-searched-uk-product-and-will-be-big-for-black-friday-in-seo/ (2022).
- Marché FR : Que Choisir / Gifam, « L'airfryer, star incontestée de 2024 » : 2,8 millions d'appareils vendus en 2024, +133 %, un foyer sur trois équipé — https://www.quechoisir.org/breve-electromenager-l-airfryer-star-incontestee-de-2024-n164976/
- GOV.UK, plug-in solar (26/08/2026) : https://www.gov.uk/government/news/households-can-save-as-plug-in-solar-panels-come-to-market
- Ofgem, plafond 1/10–31/12/2026 : https://www.ofgem.gov.uk/news/changes-energy-price-cap-between-1-october-and-31-december-2026
- Marketing Signals (via ppc.land), recherches « Black Friday » UK : https://ppc.land/black-friday-searches-drop-36-in-uk-since-2019-marketing-signals-finds/
- Jellyfish, Black Friday 2024 UK : https://www.jellyfish.com/en-gb/blog/black-friday-2024-the-uks-shopping-trends-unwrapped/
- Ahrefs, effet des AI Overviews sur le CTR : https://ahrefs.com/blog/ai-overviews-reduce-clicks/ ; Ahrefs FR, domaines cités par les IA : https://ahrefs.com/fr/blog/top-domaines-cites-par-ia/ ; Everything PR News, index des citations IA : https://everything-pr.com/ai-platform-citation-source-index-2026/
- Google Search Central, avis produit : https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-product-reviews
- Dates : soldes d'hiver 2027 — CCI Lyon Métropole, France.fr, calendriergratuit.fr ; Black Friday 2026 — calendriergratuit.fr, Quable, tpeactu.fr ; UK — PriceSpy, Haier, awarenessdays.
