# Étude SEO de marché — Homenura — Italie et Espagne (réalisée le 30/10/2026)

Aucun code modifié. Tout ce qui suit vient de relevés réels faits aujourd'hui (Google Trends, Google Autocomplete, analyse HTTP de pages, WebSearch/WebFetch). Ce qui est une estimation ou une hypothèse est marqué « ESTIMATION » ou « HYPOTHÈSE ».

---

## 0. Méthode, sources, limites (à lire avant les chiffres)

**Ce qui a été mesuré**
- **[T] Google Trends** : relevé direct de l'endpoint non officiel `trends.google.com/trends/api` (géo IT et ES, 12 mois hebdo et 5 ans hebdo), le 30/10/2026. ~45 termes par pays comparés par lots à un terme-ancre commun (IT : « friggitrice ad aria » = 100 ; ES : « freidora de aire » = 100), puis raccordés par un 2e ancrage (« robot aspirapolvere » / « robot aspirador ») pour les petits termes. Valeur = moyenne des points hebdo (précision meilleure que l'entier 0-100 d'un point unique).
- **[AC] Google Autocomplete** (`suggestqueries.google.com`, hl/gl = it/it et es/es) : 40 racines × 17 modificateurs par pays (≈ 680 requêtes par pays). L'ordre des suggestions reflète la popularité relative, pas un volume.
- **[P] Analyse de pages** par requête HTTP (titre, H1/H2, schema.org, nombre de mots, nombre de liens Amazon, mention d'affiliation, dates) : ~45 pages concurrentes + le site homenura.com (lecture seule : sitemap, titres des 104 pages catégorie IT/ES, ~20 pages).
- **[W] WebSearch** (moteur US ; l'ordre des résultats est une approximation de la pertinence, pas un SERP Google.it/Google.es géolocalisé).
- Sources externes citées avec lien.

**Limites importantes (honnêteté)**
1. **Pas de Keyword Planner / Semrush / Ahrefs / GSC** : aucun volume mensuel absolu n'est disponible. J'ai un **indice relatif Trends** (réel) et, à part, des **ordres de grandeur ESTIMÉS** (voir 0.1). À valider dans la GSC et Keyword Planner avant tout arbitrage de budget.
2. **Trends = correspondance large** : l'indice d'un terme inclut toutes les requêtes contenant ces mots (donc « friggitrice ad aria » inclut des quantités de requêtes recettes). Il ne distingue pas l'ordre des mots (« robot aspirapolvere » = « aspirapolvere robot »). Il sous-estime les petits termes (arrondi entier) : en dessous de ~0,3 % de l'ancre, le chiffre est au bruit.
3. **Domaines inaccessibles à mes outils** : corriere.it et repubblica.it (bloqués pour WebSearch ; j'ai quand même lu corriere.it par HTTP direct), **elpais.com (403 anti-bot DataDome, bloqué aussi pour WebFetch : je n'ai pas contourné)**, 20minutos.es (bloqué WebSearch), Tom's Hardware IT / PcComponentes / Yeppon / Aiho (Cloudflare 403). Le format d'El País Escaparate n'a donc **pas pu être observé** (voir 2.3).
4. **Budget WebSearch épuisé en cours de route** (limite de 200 appels par tour, partagée). Les recherches web ont couvert l'essentiel, mais je n'ai pas pu vérifier à nouveau quelques points secondaires ; ils sont signalés « non vérifié ».
5. Je n'ai pas accès aux données GSC/Associates de Homenura : tout ce qui concerne « pourquoi l'Italie performe » est **hypothèse** appuyée sur l'audit du site live.

### 0.1 Convertisseur indicatif indice → volume (ESTIMATION, facteur d'erreur ×3 à ×5)
Hypothèse d'ancrage, **non sourcée** : « friggitrice ad aria » (toutes requêtes contenant ces mots) ≈ 0,6 M/mois en Italie ; « freidora de aire » ≈ 0,35 M/mois en Espagne. Donc 1 point d'indice ≈ 6 k (IT) / 3,5 k (ES).

| Palier | Indice Trends | IT (ESTIMATION) | ES (ESTIMATION) |
|---|---|---|---|
| T1 très gros | ≥ 10 | ≳ 60 k/mois | ≳ 35 k/mois |
| T2 gros | 3 – 10 | 18 – 60 k | 10 – 35 k |
| T3 moyen | 1 – 3 | 6 – 18 k | 3,5 – 10 k |
| T4 petit | 0,3 – 1 | 2 – 6 k | 1 – 3,5 k |
| T5 niche | < 0,3 | < 2 k | < 1 k |

---

## SYNTHÈSE (les 12 constats qui comptent)

1. **Le qualificatif « connecté / intelligent » est presque absent des requêtes réelles.** Les acheteurs cherchent « produit + migliore/mejor ». Exemples [T] : IT « stufa intelligente » pèse 0,2 % de « termoventilatore » ; « termostato intelligente » 5 % de « termostato wifi » ; « lampadina intelligente » 2,6 % de « lampadina smart » ; « serratura intelligente » 2,6 % de « serratura smart » ; « caffettiera connessa » 0 %. ES : « timbre con cámara » 0,1 % de « videoportero ». Or les titres live du site contiennent partout « Intelligenti / Connessi / Inteligentes / Conectados ».
2. **Titres/H1 live avec erreurs de langue** (vérifiées) : H1 IT en « I migliori » devant des féminins (« I migliori stufe intelligenti », « I migliori telecamere… », « I migliori solare da balcone ») ; ES « Mejores Riego Inteligente », « Mejores Iluminación… » ; « ev », « co », « ve » en minuscules ; un H1 mixte allemand/italien sur /it/blog/saugroboter-tierhaare-test.
3. **Mots-clés mal choisis (détail aux sections 1.1 et 2.1)** : IT « wallbox auto elettrica » (3 % de « wallbox »), « kit solare balcone » (≈ 0 vs « fotovoltaico da balcone »), « stufe intelligenti », « termostato intelligente », « presa/lampadina intelligente », « serratura intelligente », « stazione energia portatile » (l'autocomplétion et Trends montrent « power station » ; l'autre forme n'a pas été mesurée, à vérifier). ES « robot aspirador fregador » (personne ne dit « fregador »), « calefactor inteligente », « cafetera conectada », « Estaciones de Carga VE ».
4. **Les requêtes commerciales sont une petite fraction des têtes de terme** [T] : « migliore robot aspirapolvere » ≈ 6 % de « robot aspirapolvere » ; ES « mejor robot aspirador » ≈ 12 %. Pour « friggitrice ad aria » la tête est dominée par les recettes. Le trafic acheteur vit dans la longue traîne : « migliore … qualità prezzo », « … altroconsumo / ocu », « … vs … », « … non funziona », « … senza abbonamento / senza filo perimetrale ».
5. **Altroconsumo (IT) et OCU (ES) sont les modificateurs-clés** : « altroconsumo » apparaît dans l'autocomplétion de ~15 catégories IT ; « ocu » dans ~15 catégories ES. La règle du site (citer avec lien, jamais « testé par nous ») est exactement alignée avec la demande.
6. **Qui domine** : IT = Altroconsumo + QualeScegliere + Aranzulla + relais d'actualité (Sky TG24, Greenme, Money.it) + sites d'affiliation (Telefonino, Smartworld, My-PersonalTrainer, Tom's Hardware IT) + Corriere « La Scelta Giusta ». ES = OCU (derrière paywall) + Xataka / Xataka Home / Directo al Paladar + La Casa Sibarita, Aiho, Powerplanet, Compras Smartphone + retailers (PcComponentes, Leroy Merlin, Carrefour) + relais « según la OCU » (Merca2, Moncloa, Vozpópuli).
7. **Concurrent direct identifié : m8d.io** (Espagne, 5 langues/48 pays, affiliation Amazon, méthode « sources » sans test propre, prix lus chaque jour, calculateurs, 7-8 k mots par guide, FAQ + ItemList + Review). Il apparaît dans les résultats IT et ES observés.
8. **Citations IA** : IT (Sensemakers, janv.-févr. 2026) Corriere.it #1 chez les chatbots, Aranzulla.it #1 dans les AI Overviews ; ES (Ahrefs, 30/06/2026) El País #1 dans AI Overviews, ChatGPT et Mode IA. Aucune donnée publique trouvée sur les sites de comparatifs produits spécifiquement.
9. **Saisonnalité** : IT/ES, pic Black Friday semaine du 16 au 29 nov. 2025 (rampe dès ~2 nov.). Robot aspirateur, machine à café, radiateurs/stufe, thermostat : novembre = 100 vs ~45 le reste de l'année. Clim portable : juillet ; robot tondeuse : avril-mai ; robot piscine : juin-juillet.
10. **Italie** : la page d'accueil /it est elle-même le guide « Le Migliori Friggitrici ad Aria Smart 2026 » (4 492 mots sur la page guide, FAQPage + ItemList) : sur le plus gros terme de consommation du pays, avec un pic oct.-nov. C'est l'hypothèse n°1 de la performance (section 1.5).
11. **Observations site (hors périmètre mais bloquantes à vérifier)** : la page Méthodologie dit que **tous les liens Amazon pointent vers amazon.fr avec un ID unique** (« Global Earning »), y compris sur les pages IT/ES (vérifié dans le DOM après hydratation : 39 liens amazon.fr sur /it/guides/airfryers) ; **aucun prix affiché** ; **slugs français** sur /it et /es (/it/cuisine-connectee/airfryers) ; sélections de produits non localisées (page IT « stufe » : Thermor Equateur 4, Sauter Orosi 2 = marques françaises).
12. **Plan d'action** : sections 1.6 et 2.6 (10 actions par marché classées impact/effort).

---

# PARTIE 1 — ITALIE

## 1.1 Vocabulaire réel des acheteurs (≈ 24 catégories)

Lecture : « Indice » = moyenne 12 mois [T] relative à « friggitrice ad aria » = 100 ; « Poids synonymes » = moyenne 12 mois relative au terme de tête du groupe (tête = 100) [T] ; modificateurs = suggestions [AC] observées ; « Intention » : C = comparaison/achat, I = information (comment ça marche, consommation), P = problème (panne), N = navigationnelle (marque/enseigne). Paliers T1-T5 : voir 0.1 (volumes ESTIMÉS).

| Catégorie (slug site) | Terme principal et poids des synonymes [T] | Modificateurs observés [AC] | Indice / palier | Intention | Verdict sur le mot-clé / titre actuel |
|---|---|---|---|---|---|
| Friggitrice ad aria (airfryers) | « friggitrice ad aria » ; « friggitrice senza olio » = 0,1 % de l'indice | migliore · migliore qualità prezzo · migliore marca · migliore per 4 persone · classifica (altroconsumo) · recensioni/opinioni (nutrizionista, forum, negative) · economica · sotto i 100 euro · vs forno (ventilato) / vs microonde · consumi rispetto al forno · non si accende / non riscalda / non parte la ventola · senza PFAS / senza teflon / senza BPA · in vetro · wifi · marques : ninja, philips, moulinex, cosori, kasanova, lidl ; « benedetta rossi » (navigationnel) | 100 (ancre), T1 | C + I (la tête est surtout recettes) | OK. Le « senza olio » est négligeable. Les angles « senza PFAS/teflon » et « vs forno » sont de vraies longues traînes |
| Robot aspirapolvere (aspirateurs-robots) | « robot aspirapolvere » (Trends ne distingue pas l'ordre : « aspirapolvere robot » identique) | migliore (≈ 5,8 % de la tête) · recensioni (5,2 %) · prezzo (4,3 %) · migliore qualità prezzo · migliore altroconsumo · per peli animali · sotto i 100 euro · classifica · non carica / non aspira / non parte · senza sacchetto · wifi / senza wifi · dreame vs roborock · ecovacs vs dreame · dyson vs folletto · lidl / silvercrest | 7,0, T2 | C | Titre live « Aspirapolvere Robot » : ordre inversé par rapport à l'autocomplétion et aux SERP (« robot aspirapolvere ») → à inverser |
| Robot lavapavimenti (aspirateurs-laveurs) | « robot lavapavimenti » (95 % de « robot aspirapolvere ») ; « robot aspirapolvere lavapavimenti » 39 % ; l'autocomplétion montre aussi « robot aspirapolvere e lavapavimenti » (avec « e ») | migliore · altroconsumo · parquet · senza sacchetto · non esce acqua · non lava più · non cinese · dreame vs roborock | 6,6, T2 | C | Titre live « Robot Aspirapolvere-Lavapavimenti » (trait d'union) ≠ requête réelle « robot aspirapolvere e lavapavimenti » / « robot lavapavimenti » |
| Macchina caffè automatica (cafetieres) | « macchina caffè automatica » ; « macchina da caffè a chicchi » 0,9 % ; « macchina caffè superautomatica » 0,2 % ; « caffettiera connessa » 0 % | grani · de longhi · philips · krups · compatta · offerta · altroconsumo · economica · senza montalatte · con macinacaffè (6,5 %) ; AC suggère « automatica o superautomatica » | 0,5, T4 | C | Le fichier de contexte (« caffettiera connessa ») était faux ; le titre live « macchine da caffè automatiche » est bon. Pic novembre (100 vs ~40 en été) |
| Scopa elettrica (aspirateurs-balais) | « scopa elettrica » (100) > « aspirapolvere senza fili » (69) > « aspirapolvere scopa » (22) ≈ « scopa elettrica senza fili » (21) > « aspirapolvere a batteria » (8) | migliore (4,8 %) · qualità prezzo · economica · sotto 100 euro · altroconsumo · rowenta / dyson / hoover / samsung / miele · non gira la spazzola · senza sacco | « aspirapolvere senza fili » 4,0, T2 | C | Titre live « Scope Elettriche a Batteria » : « senza fili » est le qualificatif courant, pas « a batteria » |
| Condizionatore portatile (climatiseurs-mobiles) | « condizionatore portatile » 100 ; « climatizzatore portatile » 28 ; « pinguino condizionatore » 23 ; « condizionatore senza unità esterna » 22 ; « … senza tubo » 10,5 | senza tubo · con tubo · 12000 / 7000 btu · silenzioso · consumi reali · non raffredda · non esce acqua · vs fisso · altroconsumo · lidl / unieuro / mediaworld | 7,0, T2 ; pic juillet ; +49 % sur 12 mois | C + I + P | Titre live « … Portatili Connessi » : retirer « Connessi ». Le blog utilise « Climatizzatore » (28 % du poids) |
| Deumidificatore (deshumidificateurs) | « deumidificatore » | portatile · o condizionatore · per muffa · dyson · de longhi · comfee · altroconsumo · consumi kw · vs condizionatore (consumi) · vs ventilatore · non fa acqua / non raccoglie acqua · senza tubo | 10,9, T1 ; double pic (juillet 100 ; nov.-janv. 54-68) | C + I | Titre live « Deumidificatori Intelligenti » → « Migliori deumidificatori 2026 » |
| Purificatore d'aria (purificateurs-air) | « purificatore aria » 100 ; « purificatore d'aria » 35 ; « depuratore aria » 15 | hepa · carbone attivo · dyson · philips · daikin · ikea · consumi · senza ozono · quale scegliere | ≈ 1,6, T3 ; pic janvier, +38 % | C | OK ; ajouter « purificatore aria » et « depuratore aria » dans le corps |
| Termostato (thermostats) | « termostato wifi » 100 > « termostato smart » 31 > « cronotermostato wifi » 25 > « termostato tado » 9 > « termostato intelligente » 5 | bticino · vimar · tado · netatmo · non si connette · senza fili · quale scegliere | ≈ 1,5 (wifi), T3 ; novembre 100 vs 10 en été | C + I | **Mal choisi** : titre live « Termostati Intelligenti » (le pire des 4 libellés). Ajouter « cronotermostato » |
| Valvole termostatiche (page dédiée non vue) | « valvole termostatiche » | wifi · smart · su vecchi termosifoni (prezzi) · tado vs netatmo · lettura / calcolo consumi (copropriétés) · non funzionano / non chiude | 1,0, T3 ; −17 % sur 12 mois | C + I | Opportunité : page dédiée (non repérée dans le sitemap) |
| Videocitofono (sonnettes-video) | « videocitofono » 100 ; « videocitofono wifi » 9,5 ; « campanello smart » 0,1 | bticino · urmet · comelit · vimar · elvox · ezviz · 2 fili · senza fili da esterno · migliore marca · ezviz vs bticino · urmet vs bticino · non si sente la voce · non suona | 6,5, T2 ; presque plat toute l'année | C + P | OK. « campanello smart » est quasi inexistant |
| Serratura smart (serrures-connectees) | « serratura smart » 100 > « serratura elettronica » 32 > « serratura intelligente » 2,6 | porta blindata (dominant) · senza cambiare cilindro · senza chiave · nuki · yale · bticino · non si chiude | 0,41, T4 | C | Titre live « Serrature Intelligenti » ✗ → « serratura smart / elettronica per porta blindata » |
| Rilevatore di fumo (detecteurs-fumee-co) | « rilevatore di fumo » | per casa · wifi · e monossido di carbonio · e gas · bticino · smartwares · suona senza motivo | 0,20, T5 ; −30 % | C + P | Niche. Titre live correct |
| Stufa elettrica / termoventilatore (chauffages-appoint) | « termoventilatore » 100 ; « stufa elettrica » 80 ; « stufetta elettrica » 46 ; « radiatore elettrico » 22 ; **« stufa intelligente » 0,2** | **basso consumo** (« per 100 mq / 50 mq / 40 mq basso consumo ») · ceramica · infrarossi · da bagno · da parete · dyson · vs gas · vs termoconvettore · consumi · altroconsumo · non scalda | 1,9 / 1,5, T3 ; novembre 100 | C + I + P | **Très mal choisi** : « Stufe Intelligenti » + sélection de marques françaises (Thermor, Sauter) |
| Robot tagliaerba (tondeuses-robots) | « robot tagliaerba » = « tagliaerba robot » 100 ; « robot rasaerba » 12 ; « robot tosaerba » 9,5 ; « … senza filo perimetrale » 9,3 | senza filo perimetrale · parkside / lidl · husqvarna · stihl · kress · migliore qualità prezzo · non si ricarica / non parte | 3,0, T2 ; pic avril-mai ; +19 % | C | OK. « senza filo perimetrale » est le modificateur montant |
| Robot piscina (robots-piscine) | « robot piscina » 100 ; « robot per piscina » 29 ; « pulitore piscina » 11 | fuori terra · senza fili · dolphin · zodiac · bestway · intex · aiper · wybot · leroy merlin · non si muove | 1,56, T3 ; pic juin-juillet ; +22 % | C | OK |
| Telecamera esterna (cameras-exterieur) | « telecamera esterna » (tête) ; « telecamera wifi » 2,8 (intérieur + extérieur) ; « telecamera esterna wifi » ≈ 3,5 % de la tête | con pannello solare · senza fili · a batteria · 360 gradi · ezviz · tapo · imou · **senza abbonamento** · piccola | 2,8 (« telecamera wifi »), T3 ; +83 % (à prendre avec prudence) | C | OK ; l'angle « senza abbonamento » est central |
| Wallbox (bornes-recharge-ve) | « wallbox » 100 ; « wall box » 25 ; **« wallbox auto elettrica » 3** | costo · enel · tesla · huawei · cos'è · per casa · monofase · senza fotovoltaico · economica gse (incitations) · vs chargepoint / emporia / tesla charger · non carica | 5,0, T2 ; +93 % | I + C | **Mal choisi** : titre live « Stazioni di Ricarica EV » ; mot-clé « wallbox auto elettrica » |
| Presa smart (prises-connectees) | « presa smart » 100 > « presa wifi » 64 > « presa intelligente » 12 | tapo · alexa · ikea · bticino · shelly · action · controllo / monitoraggio consumi · non si connette · senza hub / internet | 0,69, T4 ; pic décembre | C | Titre live « prese smart » ✓ (le fichier de contexte « presa intelligente » est à abandonner) |
| Fotovoltaico da balcone (solaire-balcon) | « fotovoltaico da balcone » 100 > « pannello solare balcone » 17 > « kit fotovoltaico balcone » 3 > **« kit solare balcone » ≈ 0** | con accumulo · plug and play · 800w · permessi · ikea · lidl · leroy merlin · come funziona · senza immissione in rete · senza permesso | 0,61, T4 ; pics mars et octobre ; +28 % | I + C | **Mal choisi** : « Solare da Balcone » / « kit solare balcone » |
| Umidificatore (humidificateurs) | « umidificatore » | bambini · neonati · ultrasuoni · dyson · per piante · termosifone · non esce vapore | 2,4, T3 ; pic déc.-janv. | C | Retirer « Intelligenti » du titre |
| Lampadina smart (eclairage-connecte) | « lampadina smart » 100 ; « lampadine smart » 72 ; « lampadina wifi » 13 ; « lampadina intelligente » 2,6 | e27 · e14 · alexa · ikea · tapo · philips · non si resetta · non si connette · senza hub | 0,27, T5 | C | Titre live « Illuminazione Intelligente » ✗ |
| Power station (stations-recharge-outdoor) | « power station » | portatile · 1000 / 3000 watt · con pannello solare · per camper · bluetti · decathlon · usata | 2,6, T3 | C | Titre live « Stazioni di Ricarica Portatili » ✗ ; « stazione energia portatile » non mesuré (probablement très faible) |
| Stazione meteo (stations-meteo) | « stazione meteo » (AC : aussi « stazione meteorologica ») | professionale · con sensore esterno · wifi · bresser · oregon · lidl · non funziona | 4,9, T2 | C | Retirer « Connesse » du titre |
| Robot lavavetri (laveurs-vitres) | « robot lavavetri » (et non « lavavetri robot ») | migliore · altroconsumo · kasanova · karcher · ecovacs · non lascia aloni | 0,50, T4 | C | OK |
| Robot da cucina / multicooker (cuisine) | « robot da cucina » (1,5) ; « multicooker » (0,37) | tipo bimby · simile al bimby · vs bimby (lidl / moulinex) · multifunzione · ikea · altroconsumo | 1,5 / 0,37 | C | « vs Bimby » est le gros angle |

**Catégories adjacentes à très forte demande, absentes du site** : « stufa a pellet » (indice 15,7, plus gros que « deumidificatore » ; pic nov.-déc. ; Altroconsumo teste les poêles à pellets), « aspirapolvere senza fili » (4,0, couvert par la scopa elettrica).

### Modificateurs transversaux IT (preuve [AC])
- **« migliore »** (+ qualità prezzo / 2026 / marca / per N persone) sur toutes les catégories ; **« classifica »** ; **« altroconsumo »** : présent pour friggitrice, robot aspirapolvere, robot lavapavimenti, macchina caffè, scopa, condizionatore, deumidificatore, purificatore, stufa, termoventilatore, robot tagliaerba, robot piscina, umidificatore, robot da cucina, multicooker, wallbox, lavavetri.
- **« recensioni »** et **« opinioni »**, souvent avec **marque ou enseigne** : Lidl / Silvercrest / Parkside (robot tagliaerba, aspirateur robot, thermoventilateur), Kasanova, Unieuro, MediaWorld, Leroy Merlin. « opinioni forum », « recensioni negative ».
- **« economica » / « sotto i 100 euro »** : friggitrice, robot aspirapolvere, scopa elettrica, deumidificatore, condizionatore, robot piscina, stufa elettrica, macchina caffè.
- **« vs »** : friggitrice vs forno (ventilato) / microonde ; deumidificatore vs condizionatore / ventilatore ; robot da cucina vs bimby ; dreame vs roborock ; ezviz vs bticino ; termoventilatore vs termoconvettore ; stufa elettrica vs gas ; wallbox vs tesla charger ; tado vs netatmo.
- **« non … »** (pannes) : friggitrice non si accende / non riscalda ; condizionatore non raffredda / non esce acqua ; stufa non scalda ; robot non carica / non aspira ; robot lavapavimenti non esce acqua ; deumidificatore non fa acqua ; videocitofono non si sente la voce.
- **« senza … »** (caractéristique) : senza tubo, senza filo perimetrale, senza abbonamento, senza wifi, senza sacchetto, senza PFAS/teflon, senza immissione in rete.
- **« consumi »** et **« quanto consuma »** : voir 1.4.
- Terme non identifié : « galeazzi » (« recensioni galeazzi », « classifica galeazzi » sur friggitrice et robot). Je n'ai pas pu l'identifier ; à vérifier dans la GSC et via la recherche.

## 1.2 Qui domine les SERP en Italie (6 requêtes + 4 bonus)

Proxy [W] (ordre des résultats retournés ; acteurs, pas positions exactes).

| Requête | Acteurs observés | Lecture |
|---|---|---|
| 1. migliore friggitrice ad aria (classifica 2026) | Altroconsumo (« migliori marche 2026 » + comparateur) · My-PersonalTrainer · TechRadar IT · QualeScegliere (Ninja Double Stack XL, 9,3/10) · Greenme (relais Altroconsumo et test autrichien) · Tom's Hardware IT (/offerte/, màj août 2026) · giulianodipaolo.com · Telefonino.net · Aranzulla · QuiFinanza/Blitz. Corriere « La Scelta Giusta » publie un guide Black Friday friggitrice (20/11/2025) | Mix : organisation de consommateurs + 6 à 8 sites d'affiliation spécialisés + relais d'actualité |
| 2. migliore robot aspirapolvere | QualeScegliere (3 URLs au même titre) · Smartworld (Prime Day, Offerte di Primavera, « miglior ») · TechRadar · Quotidiano.net (une page de 2020 encore indexée) · Telefonino (« sotto i 200 € ») · Techprincess · giulianodipaolo.com · Tom's Hardware IT · Macitynet · Nostrofiglio · Focus · forum.fibra.click (pour « consigli ») | Beaucoup de pages saisonnières (Prime Day, BF) et de pages datées |
| 3. migliore condizionatore portatile (senza tubo) | Altroconsumo (comparateur, et un article « con tubo / senza tubo ») · Sky TG24 (24/06/2026, « la classifica secondo Altroconsumo », 1 256 mots) · QualeScegliere (2 pages) · Smartworld · Aranzulla (« senza tubo (ottobre 2026) ») · Greenme · Money.it · Telefonino · My-PersonalTrainer · ilprodottomigliore.it · Studiomadera · ComparaSemplice · Consigli.it · Unieuro / Yeppon | Altroconsumo explique que beaucoup de « senza tubo » sont en fait des rafraîchisseurs évaporatifs |
| 4. migliore deumidificatore | QualeScegliere (4 URLs) · Greenme (Altroconsumo) · Studiomadera · Yeppon · Edilizia.com · Tom's Hardware IT (juillet 2026) · prodottimigliori.com · Trend-online · My-PersonalTrainer | Un seul acteur fort (QualeScegliere) multiplie ses URLs |
| 5. videocitofono wifi migliore | ilprodottomigliore.it (10 URLs sur des requêtes marque + modèle) · QualeScegliere (guide Wi-Fi 2026) · Altroconsumo (test de 6 videocitofoni wifi) · PDF de catalogues BTicino / Legrand | **SERP éditorial faible** : peu de guides comparatifs indépendants |
| 6. fotovoltaico da balcone / kit | Tom's Hardware IT · ComparaSemplice · Valtellinamobile · SolareIndustriale · QualeScegliere · BusinessOnline · Anker Solix (blog marque) · Greenme · Segugio · Enpal · Edilizia.com · Trend-online · TechRadar | Mix énergie/lead-gen + presse ; guides produits peu nombreux |
| Bonus 7. telecamera esterna wifi senza abbonamento | giulianodipaolo.com · Meteoraweb (contenu étiqueté « Sponsored ») · TechRadar · Telefonino (guide de 2020) · beaucoup de résultats étrangers | **Je n'ai pas trouvé de classement italien indépendant et récent** : trou de SERP |
| Bonus 8. stufa elettrica basso consumo | Switcho · BusinessOnline · QuiFinanza · Greenme · Facile.it · Telefonino (2021) · La Nazione · luce-gas.it · Money.it · m8d.io (IT, 16/09/2026) | Comparateurs d'énergie et presse ; peu de guides produits |
| Bonus 9. quanto consuma friggitrice ad aria | Facile.it · Money.it · Switcho · Papernest · Selectra · Altroconsumo (page « quanto consuma ») · Greenme · Ecoflow · Valtellina Mobile · une page sur un sous-domaine du CNR (wow.area.pi.cnr.it, aspect de page parasite, non vérifié) | Lead-gen énergie ; réponse générique |
| Bonus 10. macchina caffè automatica | Altroconsumo (test cappuccino 27/04/2026 : De'Longhi Eletta Explore ECAM450.65.S « migliore » ; classement marques 2026) · Greenme · Il Fatto Alimentare · Smartworld · QualeScegliere · giulianodipaolo.com | |

**Réponses IA : qui est cité (documenté)**
- **Sensemakers via ItaliaOggi (28/04/2026), panel Comscore desktop, janv.-févr. 2026, sites d'actualité** : chatbots (ChatGPT, Gemini, Copilot, Perplexity) → **Corriere.it #1**, Repubblica #2, Ansa #3, Aranzulla #5 ; **AI Overviews → Aranzulla.it #1**, Corriere #2, Repubblica #4. Top 20 chatbots : 65 % généralistes / 35 % verticaux ; **AI Overviews : 63 % verticaux / 37 % généralistes**. Seuls 3 domaines communs aux deux top 10. ~5 % des utilisateurs de chatbots visitent le site cité dans le mois ; clics après AI Overview ≈ 1,19 %. Source : https://www.italiaoggi.it/marketing-e-media/media/chatbot-ai-e-ai-overviews-servizio-che-vai-sito-che-trovi-uaxb1oiu
- **SWG pour Trustpilot (20/10/2026)** : 47 % des Italiens ont utilisé l'IA ces 12 mois pour se faire conseiller des produits/services ; 90 % lisent régulièrement des avis, 78 % les jugent décisifs. Source : https://www.smartworld.it/tecnologia/47-italiani-usa-ia-scegliere-cosa-comprare.html . (Le détail « les sites d'avis seraient la 2e source citée par les IA après les sites de marque » vu dans un résumé de recherche n'a **pas** pu être confirmé en lisant la page : non vérifié.)
- **Non documenté** : quels sites de comparatifs produits (QualeScegliere, Altroconsumo, etc.) sont cités par ChatGPT/AI Overviews sur des requêtes d'achat en Italie. Aucune étude trouvée.
- **Observé côté Homenura** : robots.txt autorise GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, etc. ; /llms.txt existe (HTTP 200). La base technique « être citable » est en place.

## 1.3 Leurs techniques et leurs faiblesses (Italie)

| Acteur | Format et chiffres observés [P] | Techniques | Faiblesses exploitables |
|---|---|---|---|
| **Altroconsumo** | Classements de marques par catégorie lancés en 2026 (ex. friggitrici, 04/08/2026 : Philips 68, Cosori 67, Ninja 65, Moulinex 63 sur 100 ; 52 % des consommateurs possèdent une friggitrice, 57 % des propriétaires l'ont achetée ces 2 dernières années, enquête Euroconsumers) ; pages « Prime Day » avec commission d'affiliation ; ~1 200-2 700 mots, schema NewsArticle | Données propres (tests labo + enquête membres), mise à jour datée, comparateur payant. Désormais monétisé par affiliation (« Altroconsumo Edizioni potrebbe ricevere una commissione ») | Détail des tests derrière login ; peu de longue traîne (consommation, pannes, « vs ») ; pas de FAQ ; peu de pages par produit. **Cible idéale de citation** (lien depuis nos pages) |
| **Aranzulla** | 1 page par requête, 5 400-5 700 mots, ~40 liens Amazon, **titre daté au mois** (« ottobre 2026 »), seul schema = BreadcrumbList | Autorité de marque, #1 des AI Overviews (Sensemakers), sections « Indice / Migliori X / Come scegliere X » | Aucun schema produit/FAQ ; pas de tableau ; pas de calculateur ; page très longue |
| **QualeScegliere** | ~3 900 mots, schema complet (Product, Review, Rating, ItemList, FAQPage), H2 « La migliore : … / Migliore qualità/prezzo : … », page publiée en 2015 et modifiée 24/07/2026 ; **hub Black Friday permanent** (/black-friday/, 11 866 mots, 90 H2, mêmes URL redirigées depuis 2018/2019) ; plusieurs URLs au même titre pour une même requête | URL permanente évergreen, labels par usage, notes /10 | Cannibalisation interne (3-4 URLs au même titre) ; peu de pages « non funziona », « quanto consuma », « vs » |
| **Smartworld** | 2 257 mots, 42 liens Amazon, 1 seul H2, publié 04/2024, titre « 2025 » | Pages saisonnières (Prime Day, Offerte di Primavera) | Contenu daté ; structure plate |
| **Telefonino.net** | ~5 000 mots, 10 tableaux, FAQPage, mention d'affiliation explicite, màj 12/2025 | Tableaux comparatifs, FAQ | Dates > 10 mois ; pas de calculateur |
| **Corriere « La Scelta Giusta »** (rédaction du quotidien depuis 2019, section /offerte-recensioni/) | Guides rédigés « à la main » : « Come si sceglie il robot aspirapolvere » (22/06/2026, 3 103 mots, 7 liens Amazon), « Quale scopa elettrica scegliere » (24/06/2026, 2 866 mots), « Condizionatori portatili : come funzionano… » (23/06/2025, 2 258 mots). H2 = « Les meilleurs choix par type de maison / le plus puissant / meilleur rapport qualité-prix », puis FAQ en H2. **Mention : « Se fate un acquisto attraverso i nostri link, il Corriere potrebbe ricevere una commissione »** ; page de transparence qui affirme que les produits sont « provati dai nostri esperti ». Rubriques : Casa › Elettrodomestici / Smart Home / Giardino, Cucina › Piccoli elettrodomestici, Offerte › Black Friday / Prime Day / Saldi. **Black Friday 2025** : pages produit publiées dès le 20/11 (ex. « Friggitrice ad aria : la guida alle migliori offerte del Black Friday 2025 », 2 670 mots ; « robot aspirapolvere e lavapavimenti ai migliori prezzi », 20/11 ; Cyber Monday robot le 01/12) | Autorité de la marque presse, #1 des citations chatbots (domaine) ; guides « scelta consapevole » (critères : Pascal, autonomie, poids) ; calendrier BF/Cyber Monday | Peu de pages par catégorie (une par saison) ; pas de tableau ni de schema Product (NewsArticle seul) ; prix non suivis ; thèmes « problème / consommation » absents |
| **Sky TG24, Greenme, Money.it, Trend-online** | Articles-relais des publications d'Altroconsumo (« la classifica secondo Altroconsumo »), 800-1 300 mots, NewsArticle, parfois titres clickbait (« …e non è il Pinguino De Longhi ») ; Greenme re-date des articles de 2022 (dateModified 30/10/2026) | Réactivité aux publications Altroconsumo | Pas de comparaison propre ; souvent peu de liens produits ; contenu éphémère |
| **QN (« migliori »), Focus, Nostrofiglio, My-PersonalTrainer** | Pages affiliation Amazon de 750 à 2 300 mots, 20-49 liens Amazon, mention « i prezzi non sono aggiornati in tempo reale » ; QN : page BF de **2020** toujours indexée ; My-PersonalTrainer : title « 2025 » / H1 « 2026 » | Pages BF/Prime Day, « migliori offerte Amazon » | Dates incohérentes ; contenu pauvre |
| **ilprodottomigliore.it** | Pages algorithmiques (« analisi di migliaia di recensioni »), Product + AggregateRating, 10 produits, titres Amazon bruts, au moins 10 URLs « marque + modèle » vues dans une seule requête | Programmatique à grande échelle | Pas d'éditorial ; titres produits illisibles ; « Divulgazione pubblicitaria » |
| **giulianodipaolo.com** | Site récent (guides 09/2026), 4 900 mots, FAQPage, ~30 liens Amazon, « il criterio dietro la nostra selezione » | Même genre de promesse « criterio » que nous | Jeune, peu d'autorité |
| **Tom's Hardware IT** | /offerte/migliori-… : guides d'affiliation à labels (« migliore con doppia resistenza »), mis à jour août 2026 (page protégée Cloudflare, non analysée) | Labels par usage | Non vérifié |
| **MediaWorld** (Unieuro et Yeppon présents dans les SERP, non analysés : Yeppon bloqué Cloudflare) | Page « specials » friggitrice 2 194 mots avec FAQ et section « Quanto consuma ? » | Intégration catalogue | Pas de comparaison indépendante |
| **m8d.io (IT/ES)** | 8 268 mots (IT friggitrici), 296 liens Amazon, FAQPage + ItemList + Review + SoftwareApplication, calculateur « watt par litro », bloc « fa male ? cosa dicono i medici », « friggitrice o forno : bolletta », confronto à trois ; prix lus quotidiennement ; « Aggiornato il … » | Outils interactifs, grosse profondeur, mise à jour datée | Méthode « sources », pas de tests propres, long à lire ; **c'est le modèle à égaler** |
| **forum.fibra.click** | Fils « quale robot aspirapolvere avete ? », « consiglio robot economico » | Preuve sociale, requêtes « consigli » | Pas d'actualité |

**Faiblesses transversales à exploiter** : (1) contenus datés (Smartworld 2024, QN 2020, My-PersonalTrainer incohérent) ; (2) Altroconsumo verrouillé : le détail est derrière login ; (3) quasi personne ne couvre « non funziona », « quanto consuma [produit] », « [A] vs [B] » avec contenu produit ; (4) trous : « telecamera esterna senza abbonamento », « stufa elettrica basso consumo » (SERP tenue par des comparateurs d'énergie), « valvole termostatiche » ; (5) la confusion « senza tubo » (évaporatifs vs vrais clims) : sujet d'explication honnête que même la presse traite mal.

## 1.4 Requêtes saisonnières imminentes (Italie)

**Dates (sourcées)**
- **Black Friday vendredi 27/11/2026, Cyber Monday lundi 30/11/2026**. Skuola.net annonce une Black Week dès le 20/11 ; Amazon n'a **pas confirmé** les dates 2026 ; en 2025 la fenêtre officielle Amazon IT était 20/11-01/12 (source : résumé de recherche, non vérifié en page primaire). https://www.skuola.net/guide/black-friday-2026-offerte.html
- **Saldi invernali** : en 2026 ils ont commencé le 03/01 (décision de la Conférence des Régions du 10/11/2025 ; Ligurie le 05/01) ; la règle régionale est « premier jour ouvrable avant l'Épiphanie ». **ESTIMATION 2027** : Épiphanie = mercredi 06/01/2027 → départ probable entre le 02 et le 05/01/2027, calendrier attendu en novembre ; à confirmer. Source : https://quifinanza.it/info-utili/saldi-invernali-2026-calendario-date-inizio/951812/amp/

**Courbe réelle Black Friday 2025 (Trends, IT, indice hebdo)** : « black friday » 15 (26/10-01/11) → 30 (02-08/11) → 42 (09-15/11) → 77 (16-22/11) → **86 (23-29/11)** → 18 (30/11-06/12) → 2 (07-13/12). « robot aspirapolvere » : 52 (02-08/11) → 58 → **100 (16-22/11) → 100 (23-29/11)** → 62 → 51 (retour normal). « macchina caffè automatica » 88 dès 02-08/11 puis 92 (23-29/11) ; « stufa elettrica » 93 (23-29/11) ; « termoventilatore » 96 dès 19-25/10 (pic précoce) puis 100 (23-29/11). « offerte natale » : 30 (début nov.) → 52-55 (30/11-20/12). « saldi » : 82 (28/12-03/01).

**Pics saisonniers par catégorie (indice mensuel, 100 = mois maximal ; moyennes 5 ans)** [T]
| Catégorie | Pic | Creux | Remarque |
|---|---|---|---|
| friggitrice ad aria | oct. 100, nov. 96, janv. 90 | avr.-juin ~50 | +16 % sur 12 mois |
| robot aspirapolvere | **nov. 100**, déc. 81 | juin 45 | +32 % |
| macchina caffè automatica | **nov. 100**, déc. 92 | juin 40 | |
| scopa elettrica | nov. 100 | mai 48 | |
| termostato smart, valvole termostatiche | **nov. 100** | été 10-17 | |
| stufa elettrica, termoventilatore | **nov. 100**, déc. 82-95 | été 4-15 | |
| deumidificatore | **juil. 100** puis nov.-janv. 54-68 | avr. 17 | deux saisons |
| condizionatore portatile | **juil. 100**, juin 61 | nov.-mars 3-4 | +49 % |
| robot tagliaerba | mai 100, avr. 93 | déc. 11 | |
| robot piscina | juin-juil. 100 | déc. 3 | |
| umidificatore | déc. 100, janv. 90 | mai 27 | |
| purificatore d'aria | janv. 100, nov.-déc. 92-94 | août 50 | |
| presa smart | déc. 100 | avr. 37 | cadeau de Noël |
| videocitofono | nov. 100 (courbe plate 70-100) | été 70-75 | |
| wallbox | oct. 100 | déc. 60 | +93 % |
| fotovoltaico da balcone | oct. 100, mars 94 | déc. 42 | +28 % (actu-dépendant) |

**Requêtes « consommation » (énergie chère)**
- Trends : « quanto consuma condizionatore » domine (pic juillet 100, moyenne 10,2 sur son lot) ; « quanto consuma stufa elettrica », « … friggitrice ad aria », « … deumidificatore », « … forno elettrico » sont 10 à 50 fois plus petits (≤ 1,1) ; « quanto consuma » seul (générique) moyenne 42,0 sur son lot, pic juillet. Aussi « condizionatore non raffredda » (moyenne 7,2, pic juillet). Les requêtes « consumi » sur produits de petite taille existent mais sont de longue traîne (quelques milliers par mois au plus ; ESTIMATION).
- AC : « friggitrice ad aria consumi rispetto al forno », « deumidificatore vs condizionatore consumi », « stufa elettrica basso consumo (per 100/50/40 mq) », « condizionatore portatile consumi reali », « presa smart controllo consumi ».
- SERP « quanto consuma » : tenue par Facile.it, Switcho, Papernest, Money.it, Selectra, Altroconsumo (page dédiée), Greenme.
- Données utilisables (sourcées) : Altroconsumo estime ~70-80 Wh par 100 g de frites pour une friteuse de 1 800 W, soit ~15 à 30 centimes pour 700 g ; consommation moyenne d'une friggitrice 1,2-1,6 kWh/h selon Facile.it. https://www.altroconsumo.it/elettrodomestici/friggitrici-ad-aria/consigli/quanto-consuma-la-friggitrice-ad-aria
- **Contexte prix de l'énergie (à nuancer)** : « très chère en Italie » est vrai mais pas le pire de l'UE. Eurostat (relayé) : 2e semestre 2024, 0,3111 €/kWh, 7e plus cher de l'UE ; une autre source place l'Italie ~15 % au-dessus de la moyenne UE au 1er semestre 2025 ; Segugio (GlobalPetrolPrices) : 34,5 c€/kWh au 2e trimestre 2026, 5e sur 144 pays (hors UE). À actualiser dans le calculateur avec le tarif utilisateur. https://tariffe.segugio.it/news-tariffe/prezzo-dell-elettricita-italia-quinta-al-mondo-e-seconda-nel-g20-00047994.aspx

**Calendrier de publication recommandé (Italie)**
- **Maintenant → 06/11** : pages Black Friday par catégorie (robot aspirapolvere, friggitrice, macchina caffè, scopa elettrica, termostato/valvole, stufa/termoventilatore, deumidificatore) enrichies ; la rampe démarre vers le 02/11.
- **16/11 → 30/11** : mise à jour quotidienne ; page « Cyber Monday 30/11 » ; guide « come riconoscere uno sconto vero » (angle Altroconsumo/OCU).
- **15/11 → 15/12** : guides cadeaux (presa smart, lampadina smart, friggitrice, macchina caffè, robot) : « offerte natale » monte dès début novembre, pic 14-20/12.
- **26/12 → 05/01** : page « saldi invernali 2027 » prête avant le départ (indice « saldi » 82 la semaine 28/12).
- **Janvier** : purificatore d'aria, umidificatore, deumidificatore (2e pic), friggitrice (pic janv.).
- **Février-mars** : fotovoltaico da balcone (pic mars) ; **avril-mai** : robot tagliaerba ; **mai-juin** : condizionatore portatile, robot piscina (préparer dès avril).

## 1.5 Pourquoi l'Italie performe déjà (HYPOTHÈSES à vérifier dans la GSC) et comment passer devant

**Constats vérifiés sur le site live (/it)**
- La page d'accueil /it a pour H1 « Le Migliori Friggitrici ad Aria Smart 2026 » ; le guide /it/guides/airfryers fait 4 492 mots avec FAQPage, ItemList, « Perché fidarsi di Home Nura? » ; /it/guides/airfryer-vs-four (« Friggitrice ad Aria vs Forno ») 4 073 mots.
- 265 pages « guides/probleme » (ex. « Quanto consuma un deumidificatore in funzionamento continuo? », « La spazzola principale del mio robot aspirapolvere è bloccata dai capelli ») + 104 articles de blog (ex. « Pannello solare da balcone (Balkonkraftwerk) 2026 », « Robot tagliaerba senza filo perimetrale 2026 : confronto dei 5 migliori », « Climatizzatore portatile senza tubo : la verità 2026 ») + 7 pages Black Friday de ~600 mots.
- Pages catégorie IT minces : 700-870 mots.
- Méthodologie : 3 sources par produit (fiches fabricant, avis Amazon/Google ≥ 500 pondérés sur 12 mois, tests de la presse spécialisée dont Altroconsumo et OCU) : conforme à la règle « aucun test réalisé ».

**HYPOTHÈSES de performance (par ordre de probabilité)**
1. **Un gros sujet, bien positionné, au bon moment** : la tête « friggitrice ad aria » est le plus gros terme de consommation mesuré en Italie (indice 100 contre 7 pour « robot aspirapolvere »), en forte saison oct.-nov. (+16 % sur 12 mois), et c'est exactement le sujet de la home et du guide principal.
2. **SERP IT affaiblis sur la longue traîne** : pages datées (Smartworld 2024, QN 2020), pages algorithmiques (ilprodottomigliore.it), relais d'actualité sans comparaison, Altroconsumo verrouillé → un site avec FAQ + ItemList + guide long peut se glisser sur « friggitrice ad aria vs forno », « quanto consuma », « senza PFAS ».
3. **Longue traîne « problème / consommation »** : les 265 pages « probleme » répondent à des requêtes à faible concurrence (aucun concurrent de la liste n'a ces pages en masse). Probablement une grande part des clics sur beaucoup de pages peu cliquées.
4. **Pages BF déjà en ligne** + demande commerciale précoce (« termoventilatore » pic dès fin octobre).
5. **Effet de volume** : l'Italie a des requêtes très commerciales (« migliore », « classifica », « altroconsumo ») pour les mêmes catégories que le site.

**Pour confirmer (30 min dans la GSC)** : filtre pays = Italie, 28 jours → onglet Pages : les 10 pages qui font les 136 clics ; onglet Requêtes : repérer têtes de terme vs longue traîne, positions 6-15 (gains rapides). Comparer le même tableau pour l'Espagne (33 clics). Vérifier dans Associates (par marketplace) si les clics IT arrivent et convertissent.

## 1.6 Dix actions pour passer devant en Italie (classées impact / effort)

| # | Action | Impact | Effort | Détail / exemples |
|---|---|---|---|---|
| 1 | **Réécrire titres et H1 des catégories mal ciblées** : retirer « Intelligenti/Connessi » ; corriger l'accord (« Le migliori… ») | Élevé | Faible | Modèle de titre : « Migliori {prodotto} 2026: classifica e guida all'acquisto (aggiornata a novembre) ». Cas : « Migliori termostati wifi 2026 (e cronotermostati smart) » ; « Migliori termoventilatori e stufe elettriche a basso consumo 2026 » ; « Migliori wallbox per auto elettrica 2026 » ; « Migliori prese smart wifi 2026 » ; « Migliori lampadine smart 2026 » ; « Migliori serrature smart e elettroniche per porta blindata » ; « Migliori fotovoltaici da balcone 2026 » ; « Migliori robot aspirapolvere 2026 » (ordre) ; « Migliori scope elettriche senza fili 2026 ». H1 : « Le migliori stufe elettriche 2026 », pas « I migliori stufe ». Home : « Le migliori friggitrici ad aria 2026 » (retirer « Smart »). Titles de blog : « Climatizzatore portatile senza tubo » → « Condizionatore portatile senza tubo » (3,6× plus demandé) |
| 2 | **Black Friday / Cyber Monday / Natale** : étoffer /it/black-friday + 6 sous-pages (600 mots, sans prix) avant le 06/11 | Élevé | Faible-moyen | Reprendre le modèle observé chez Corriere : « Friggitrice ad aria : guida alle migliori offerte del Black Friday 2026 », « I migliori robot aspirapolvere in offerta per il Cyber Monday 2026 ». Contenu : comment choisir, ce qui est vraiment bon marché en novembre, « come riconoscere uno sconto vero » (réf. Altroconsumo), top 3 par usage, FAQ. Créer la page Cyber Monday (30/11) et le hub « regali di Natale » |
| 3 | **Pages « X vs Y » alignées sur l'autocomplétion** | Élevé | Moyen | Déjà là : friggitrice vs forno, robot vs scopa elettrica. À créer : deumidificatore vs condizionatore (consumi) ; dreame vs roborock ; ecovacs vs dreame ; ezviz vs bticino ; tado vs netatmo ; termoventilatore vs termoconvettore ; stufa elettrica vs gas ; robot da cucina vs bimby (lidl vs bimby) ; condizionatore portatile vs split/fisso. Titre : « Dreame vs Roborock: quale robot aspirapolvere scegliere nel 2026 » ; H1 identique ; FAQ de 4 questions |
| 4 | **Bloc « Cosa dice Altroconsumo » sur chaque page catégorie** (lien vers la page publique, date, chiffres cités avec parcimonie) | Élevé | Faible | Ex. friggitrici : Philips 68, Cosori 67, Ninja 65, Moulinex 63 (Altroconsumo, 04/08/2026). Robot : classement marques 2026 (Dreame 65, Roborock 64, Xiaomi 60, d'après Greenme). Cible les requêtes « X altroconsumo » (≈ 15 catégories) et renforce la citabilité par les IA. Toujours : « abbiamo confrontato fonti pubbliche, non abbiamo testato i prodotti » |
| 5 | **Hub « Quanto consuma » + calculateur** (kWh × €/kWh) | Élevé | Moyen | Priorités : condizionatore portatile (demande dominante, pic juillet, préparer en mai), stufa elettrica / termoventilatore (nov.), deumidificatore, friggitrice vs forno. H1 : « Quanto consuma un {condizionatore portatile}? Costo reale in bolletta ». Données : Altroconsumo (70-80 Wh/100 g), prix kWh saisi par l'utilisateur ; encadré « tariffe luce 2026 » sourcé. Modèle : le calculateur « watt per litro » de m8d.io |
| 6 | **Pages « budget »** : « sotto i 100 euro », « economica » | Élevé | Moyen-élevé | Modificateur présent sur 8 catégories. **Contrainte** : le site n'affiche aucun prix (Amazon n'autorise l'affichage que via son API). Solution : intégrer l'API PA-API pour des bandes de prix réelles, sinon pages « economiche » sans montants (« i modelli più accessibili ») : à valider vs les conditions Amazon Associates |
| 7 | **Réécrire les pages « problème » avec la forme réelle des requêtes** | Moyen-élevé | Moyen | Titre : « Condizionatore portatile non raffredda: 7 cause e come risolvere », « Stufa elettrica non scalda: cosa controllare », « Robot lavapavimenti non esce acqua », « Videocitofono non si sente la voce ». Le site en a 265 : retitrer les 30 plus proches d'un « non … » observé ; FAQ + lien vers la page catégorie |
| 8 | **Localiser les sélections produits et les liens Amazon pour l'Italie** | Moyen-élevé | Moyen-élevé | Remplacer Thermor/Sauter/Equateur (marques françaises) par De'Longhi, Olimpia Splendid, Argo, Rowenta, Ariete… ; vérifier dans Associates que les clics via amazon.fr (« Global Earning ») aboutissent bien et convertissent en IT ; contrôler que les ASIN existent sur amazon.it |
| 9 | **FAQ pilotées par l'autocomplétion + fraîcheur datée** | Moyen | Faible | Ex. friggitrice : « Fa male la friggitrice ad aria? (cosa dicono i nutrizionisti) », « Senza PFAS: come riconoscerle », « Consuma più del forno? ». Ajouter un tampon mensuel (« aggiornata a novembre 2026 ») dans le title et le H1 des 10 pages stratégiques : Aranzulla et Repsol-ES le font, la règle du site (revue tous les 3 mois) permet d'aller plus vite |
| 10 | **Slugs italiens et fusion des doublons** | Moyen | Élevé | /it/cuisine-connectee/airfryers → /it/cucina/friggitrice-ad-aria. Aujourd'hui /it/guides/airfryers et /it/cuisine-connectee/airfryers servent la même page (canonique sur la première). Gain probable modeste pour un coût de redirections important : à faire après les actions 1-8 |

---

# PARTIE 2 — ESPAGNE

## 2.1 Vocabulaire réel des acheteurs (≈ 25 catégories)

Mêmes conventions que 1.1 (indice relatif à « freidora de aire » = 100 [T] ; poids des synonymes = tête du groupe à 100 [T] ; modificateurs [AC] ; paliers ES de 0.1, volumes ESTIMÉS).

| Catégorie (slug site) | Terme principal et poids des synonymes [T] | Modificateurs observés [AC] | Indice / palier | Intention | Verdict sur le mot-clé / titre actuel |
|---|---|---|---|---|---|
| Freidora de aire (airfryers) | « freidora de aire » ; « freidora sin aceite » = 1,6 % de l'indice | mejor valorada · mejor calidad precio · mejores marcas · opiniones (médicos, ocu) · comparativa (ocu) · barata (y buena) · calidad precio 2026 · consumo (de luz) · cuál elegir · vs horno / vs freidora de aceite / vs horno eléctrico · por menos de 100 euros · de cristal · marques : cecotec, lidl, cosori, ninja, carrefour, moulinex, tefal, el corte inglés. « mejor » = 2,0 %, « precio » = 1,4 %, « opiniones » = 1,3 % de la tête | 100 (ancre), T1 ; **pic janvier** (100) puis nov. 76 | C + I | OK ; « sin aceite » négligeable |
| Robot aspirador (aspirateurs-robots) | « robot aspirador » (= « aspirador robot ») | mejor calidad precio · mejor valorados · mejores marcas · opiniones (ocu) · comparativa 2026 · ocu 2025 · calidad precio 2026 · menos de 100 euros · vs escoba / vs aspiradora · xiaomi vs cecotec · marques : xiaomi, dyson, cecotec, dreame, roomba, carrefour, aldi. **« mejor » = 12,2 % de la tête**, precio 3,6 %, opiniones 2,0 % | 14,4, T1 ; pic nov. 100 ; +7 % | C | OK |
| Robot aspirador friegasuelos (aspirateurs-laveurs) | « robot aspirador y fregasuelos » 8,4 % ; « robot friegasuelos » 7,0 % ; « robot aspirador friegasuelos » 2,9 % de « robot aspirador » (les deux graphies friegasuelos/fregasuelos existent) | autolimpiable · xiaomi · ambiano (Aldi) · lidl opiniones · mejor calidad precio (ocu) · 2025 / 2026 | ≈ 1,0, T3 | C | **Mal choisi** : « robot aspirador fregador » (fichier de contexte) et titre live « Robots Aspirador-Fregador » : « fregador » n'apparaît pas dans l'autocomplétion |
| Cafetera superautomática (cafetieres) | « cafetera superautomática » 100 > « cafetera automática » 67 > « cafetera con molinillo » 65 > « cafetera de grano » 30 | delonghi (magnifica s) · cecotec · lidl (silvercrest) · philips 2200 · krups · mejor calidad precio · mejor valorada · opiniones · comparativa (delonghi, philips) · ocu · barata · vs espresso / vs manual / vs cápsulas | 3,1, T3 ; pic nov. 100 ; +7 % | C | Fichier de contexte « mejor cafetera conectada » ✗. Titre live « cafeteras automáticas » correct mais « superautomática » pèse 1,5× plus |
| Aspiradora sin cable / escoba (aspirateurs-balais) | « aspiradora sin cable » 100 > « aspirador escoba » 44 > « aspiradora escoba » 38,5 > « aspiradora de mano » 35 > « aspiradora escoba sin cable » 7 | dyson · cecotec · rowenta · taurus · carrefour · lidl · mejor calidad precio · mejor del mercado · ocu · barata (y potente) · vs robot aspirador · rowenta vs dyson / vs cecotec · por menos de 100 euros | 10,1 (« sin cable »), T1 ; pic nov.-janv. | C | Utiliser « aspiradora sin cable » comme terme principal (2,6× « aspiradora escoba ») |
| Aire acondicionado portátil (climatiseurs-mobiles) | « aire acondicionado portátil » 100 ; « … sin tubo » 6 ; « … sin salida de aire » 2,7 ; « … móvil » 1,7 ; « aire acondicionado sin obra » 0,4 | carrefour · sin tubo · leroy merlin · para coche · el corte inglés · cecotec · lidl · media markt · mejor valorado / calidad precio · opiniones 2026 · comparativa (ocu) · consumo (watts) · vs split / vs fijo / vs mini split · por menos de 100 euros | 13,8, T1 ; **pic juillet 100**, nov.-mars ~3 ; +31 % | C + I + P | Titre live « … Portátiles Conectados » : retirer « Conectados » |
| Deshumidificador (deshumidificateurs) | « deshumidificador » | cecotec · mercadona · leroy merlin · para qué sirve · industrial · delonghi · mejor calidad precio · opiniones (ocu, forocoches) · comparativa ocu · consumo (eléctrico, bajo) · cuál elegir · vs aire acondicionado / vs purificador / vs humidificador · por menos de 100 euros | 19,0, T1 (2e terme du pays) ; pics janvier 100, déc. 92, nov. 84 ; +6 % | C + I | Retirer « Inteligentes » du titre |
| Purificador de aire (purificateurs-air) | « purificador aire » 100 ; « purificador de aire » 87 ; « purificador de aire hepa » 4 | con filtro hepa · dyson · xiaomi · philips · ikea · para casa · carbón activado · mejor calidad precio · opiniones · comparativa · ocu · consumo · vs deshumidificador / vs humidificador / vs ozonizador | ≈ 6, T2 ; pic janvier 100, courbe quasi plate (60-100) ; +24 % | C | OK |
| Termostato inteligente (thermostats) | « termostato wifi » 100 > « termostato inteligente » 25 > « termostato tado » 16 > « termostato netatmo » 14 > « termostato programable » 7 | wifi · netatmo · tado · garza smart · google nest · calefacción · radiador · aire acondicionado · mejor … calidad precio | 0,79 (« inteligente ») ; ≈ 3 (« wifi »), T3 ; nov. 100 vs ~4 en été | C + I | Ajouter « termostato wifi » (4× plus gros) |
| Cabezales termostáticos (page dédiée non vue) | « cabezales termostáticos » | inteligentes · para radiadores · suelo radiante · tado · netatmo · digitales · orkli · danfoss | < 0,05, T5 ; nov.-janv. | C | Niche ; à garder en section d'une page chauffage |
| Videoportero (sonnettes-video) | « videoportero » 100 ; « videoportero wifi » 10 ; « timbre con cámara » 0,1 ; « timbre inteligente » 0,1 | fermax · tegui · golmar · wifi · inalámbrico (con apertura de puerta) · leroy merlin · mejores marcas · mejor calidad precio · opiniones (ezviz, tmezon) · comparativa · 2 hilos vs 4 hilos · ezviz hp5 vs hp7 | 7,6, T2 | C | OK ; « timbre con cámara » est un terme secondaire (AC : « para exterior », « inalámbrico ») |
| Cerradura inteligente (serrures-connectees) | « cerradura inteligente » 100 ; « cerradura electrónica » 2,4 | verisure · nuki · puerta exterior / principal · movistar · mejores marcas · mejor valorada · opiniones · barata · calidad precio · vs cerradura normal | 4,4, T2 ; plat toute l'année (pic août) | C | OK |
| Detector de humo (detecteurs-fumee-co) | « detector de humo » | para casa · wifi · y monóxido de carbono · ajax · verisure · leroy merlin · mejores marcas · vs detector de monóxido / de calor | 1,5, T3 ; pics mars et janv. ; −5 % | C + P | Mot-clé de contexte « detector de humo inteligente » ✗ → « detector de humo (wifi) » |
| Radiador / calefactor eléctrico (chauffages-appoint) | « radiador eléctrico » 100 > « calefactor bajo consumo » 90 > « estufa eléctrica » 40 > « calefactor eléctrico » 28 > « radiador eléctrico bajo consumo » 20 ; « calefactor inteligente » absent de l'autocomplétion | bajo consumo · pared · wifi · baño · cerámico · cecotec · orbegozo · carrefour · leroy merlin · media markt · **enciende pero no calienta** · mejor (ocu) · calidad precio · **consumo (por hora)** · vs aire acondicionado / vs caloventor / vs cerámico. « calefactor eléctrico consumo » = 11,7 % de la tête | 2,25 (« radiador eléctrico »), T3 ; nov. 100 ; +24 % à +70 % | C + I + P | **Mal choisi** : « Calefactores Inteligentes » |
| Robot cortacésped (tondeuses-robots) | « robot cortacésped » = « cortacésped robot » 100 | lidl · sin cable perimetral · parkside · husqvarna · leroy merlin · stihl · mejores marcas · comparativa (sin cable perimetral) · stihl o husqvarna · kress vs husqvarna | 1,35, T3 ; pic mai 100 ; +18 % | C | OK |
| Robot piscina / limpiafondos (robots-piscine) | « robot piscina » 100 > « limpiafondos piscina » 67 > « robot limpiafondos » 28 > « robot limpiafondos piscina » 15 | leroy merlin · sin cable · zodiac · con cable · obramat · aiper · dolphin · media markt · mejor calidad precio · opiniones (cecotec, aiper) · comparativa · dolphin o zodiac | 5,6, T2 ; pic juillet 100 | C | Ajouter « limpiafondos » dans le corps/H2 |
| Cámara de vigilancia exterior (cameras-exterieur) | « cámara exterior » 100 ; « cámara de vigilancia exterior » 6,7 % | para ver desde el móvil · solar · sin wifi · con placa solar · con tarjeta sim · leroy merlin · mejor calidad precio · barata | ≈ 2,2 (« cámara exterior ») ; 4,5 pour « cámara de vigilancia » (int. + ext.), T3 ; nov. 100 ; +56 % | C | OK ; angle « sin cuotas » absent de l'AC mais présent dans les SERP |
| Cargador coche eléctrico (bornes-recharge-ve) | « cargador coche eléctrico » 100 ; « cargador wallbox » 38 ; « punto de recarga coche eléctrico casa » ≈ 0 | **cerca de mí** (= bornes publiques : intention différente) · portátil · wallbox · casa · iberdrola · mejor calidad precio · opiniones (lidl, iberdrola, huawei) · comparativa · instalación barata | 3,5, T3 ; pic août ; +110 % (prudence) | I + C | **Titre live « Estaciones de Carga VE » ✗** : personne ne dit « estación de carga VE » |
| Enchufe inteligente (prises-connectees) | « enchufe inteligente » 100 ; « enchufe wifi » 49 ; « enchufe tapo » 16 | wifi · tapo · alexa · leroy merlin · ikea · xiaomi · para termo eléctrico · mejor marca · mejor calidad precio · opiniones · medidor / control de consumo | 2,25, T3 ; pic déc. 100 | C | OK |
| Kit solar balcón (solaire-balcon) | « kit solar balcón » 100 > « kit solar enchufable » 90 > « placas solares balcón » 79 > « placa solar balcón » 29 | lidl · 800w · leroy merlin · con batería · enchufable · ecoflow · permiso comunidad · precio · piso · opiniones · repsol | < 0,3 vs « freidora de aire » (T5) | I (légalité) + C | Mot-clé « kit solar balcón » ✓ ; demande encore petite en ES |
| Humidificador (humidificateurs) | « humidificador » | amazon · para qué sirve · cecotec · mercadona · para plantas · mejor valorado · opiniones (cecotec, dyson) · comparativa · ocu · consumo · cuál elegir · vs deshumidificador / vs purificador / vs difusor | **12,5, T1** ; pic déc.-janv. | C | Bien plus gros qu'en Italie (2,4). Retirer « Inteligentes » |
| Bombilla inteligente (eclairage-connecte) | « bombilla inteligente » 100 ; « bombillas inteligentes » 20 ; « bombilla wifi » 12 | ikea · alexa · leroy merlin · tapo · e14 · e27 · philips · xiaomi | 1,05, T3 | C | Titre live « Mejores Iluminación Inteligente » : accord faux |
| Estación de energía portátil (stations-recharge-outdoor) | « estación de energía portátil » | 1000w … 10000w · bluetti · leroy merlin · mejor calidad precio · vs ups · vs generador | 0,61, T4 | C | Titre live correct |
| Estación meteorológica (stations-meteo) | « estación meteorológica » | lidl (auriol) · para casa · bresser · leroy merlin · mejores marcas · barata · **« jaén / uja / granada » (stations officielles : intention différente)** | 3,1, T3 | C | Retirer « Conectadas » |
| Robot de cocina (cuisine, **noindex aujourd'hui**) | « robot de cocina » | lidl · cecotec (mambo) · thermomix · moulinex · carrefour · aldi · mejor calidad precio · opiniones (ocu) · comparativa (ocu ; aldi y lidl) · **vs thermomix** / lidl vs thermomix / vs olla programable | 6,4, T2 | C | Le fichier de contexte marque « robots-multifonctions » en noindex : or c'est un terme T2 en ES (T3 en IT : « robot da cucina » 1,5, « vs bimby »). À indexer |
| Lavadora / frigorífico inteligente | « lavadora inteligente », « frigorífico inteligente » | suggestions portées par les marques LG, Samsung (références produit) | ≈ 0 | — | Demande quasi nulle : garder noindex |

**Adjacent absent du site** : « estufa de pellets » (9,4, pic nov. ; ES comme IT).

### Modificateurs transversaux ES (preuve [AC])
- **« mejor … calidad precio »** (avec « 2025 / 2026 ») sur presque toutes les catégories ; « mejores marcas », « mejor valorado/a ».
- **« ocu »** (« … ocu », « comparativa ocu », « opiniones ocu », « mejor … ocu ») : freidora, robot aspirador, friegasuelos, cafetera, aspiradora, aire acondicionado, deshumidificador, humidificador, purificador, radiador, cortacésped, piscina, cargador, robot de cocina, limpiacristales, estación meteorológica. **Attention** : « ocu » s'auto-complète aussi en « oculta / oculto » (caméras cachées) et « ocupa » : bruit.
- **« opiniones »** (avec enseigne : Cecotec, Lidl, Aldi/Ambiano, Mercadona, Leroy Merlin, Carrefour, Media Markt, El Corte Inglés ; « opiniones forocoches »).
- **« barata » / « por menos de 100 euros »** : freidora, robot aspirador, aspiradora, aire acondicionado, deshumidificador, cafetera, cerradura.
- **« vs »** : freidora vs horno ; robot vs escoba ; deshumidificador vs aire / purificador / humidificador ; calefactor vs aire acondicionado / caloventor ; estación vs generador / ups ; robot de cocina vs thermomix ; xiaomi vs cecotec ; dolphin o zodiac.
- **« consumo / cuánto consume »** et **pannes** : voir 2.4.
- Enseignes de distribution à très forte présence (Lidl, Aldi, Mercadona, Carrefour, Leroy Merlin, Cecotec = marque espagnole) : intentions de comparaison « marque distributeur vs marques ».

## 2.2 Qui domine les SERP en Espagne (6 requêtes + 4 bonus)

Proxy [W] (ordre des résultats retournés).

| Requête | Acteurs observés | Lecture |
|---|---|---|
| 1. mejor freidora de aire | OCU (comparateur + notes « mejores freidoras menos 100 euros ») · Xataka Home (« La OCU pone a prueba 45 freidoras… tres mejores por menos de 80 euros ») · PcComponentes · TechRadar ES · Que.es (« He probado… ») · wwwhatsnew · Directo al Paladar (« según la OCU ») · Qubbos (blog de marque) · Vozpópuli · blogs Mercado Libre (bruit LATAM) | OCU + réécritures de ses résultats |
| 2. mejor robot aspirador (friegasuelos) | La Casa Sibarita (34 modèles → 7 retenus) · Eufy (blog de marque) · Compras Smartphone · El Español « Imprescindibles » · wwwhatsnew · m8d.io · Chollometro (offres) · El Independiente · Aiho | Sites d'affiliation spécialisés + blog marque |
| 3. mejor deshumidificador | OCU (informe, 23 modèles, nov. 2025, paywall) · Qubbos · Milar · The Objective (Bazar) · **Xataka Selección (14/10/2026)** · Compradicción · La Casa Sibarita · m8d.io · Compras Smartphone | OCU + Xataka |
| 4. aire acondicionado portátil (sin tubo) | OCU (2 pages : « sin tubo » et test 2023/2025) · Merca2 et Moncloa (réécritures OCU) · PcComponentes · Ecoticias · De'Longhi (FAQ) · Aiho · Compradicción · Autosolar | OCU explique que « sin tubo » = un ventilateur à eau |
| 5. mejor aspiradora escoba sin cable | **Repsol** (« Mejores aspiradoras calidad-precio octubre 2026 ») · OCU (comparateur + note « Lidl ») · Powerplanet · PcComponentes · La Casa Sibarita · Cash Converters (blog) · Qubbos · Aiho · m8d.io | Acteurs non spécialistes (énergie, revente) bien classés |
| 6. mejor cafetera superautomática | Coffeeness (.de/es) · La Casa Sibarita · wwwhatsnew · Compras Smartphone · Powerplanet · Aiho · Cash Converters · OCU (« consejos ») · **Hola Selección** (guide « experte du café », màj 05/10/2026) · m8d.io · La Casa del Electrodoméstico | Beaucoup de sites d'affiliation récents |
| Bonus 7. placas solares balcón | Selectra · Energías Renovables · Ecosistema Startup · wwwhatsnew · **Xataka Home** (avertissement : « colgarlo y enchufarlo no lo legaliza ») · Banda Ancha (forum) · Autosolar · Chollometro | Énergie/lead-gen + presse ; sources **contradictoires** sur le seuil légal de 800 W (RD 244/2019 vs norme basse tension) |
| Bonus 8. radiador eléctrico bajo consumo | Qubbos · Autosolar · Repsol · La Casa Sibarita · **El Español Omicrono** (« un radiateur de 1 500 W consomme toujours 1,5 kWh ») · PcComponentes · Vozpópuli · Hola · Endesa (blog) · m8d.io | Mythe du « bajo consumo » : angle d'honnêteté |
| Bonus 9. cámara de vigilancia exterior sin cuotas | m8d.io (2 guides, dont une de 40 min de lecture) · Arkaia (blog) · Wyze / Eufy (blogs de marque) · Bydemes | Peu d'éditorial indépendant |
| Bonus 10. robot cortacésped sin cable perimetral | Eufy · wwwhatsnew · Avilared · La Casa Sibarita · Chollometro · Globalsources · Mammotion (blog de marque) | Marques et affiliation |

**Réponses IA : qui est cité (documenté)**
- **Ahrefs Brand Radar (données au 30/06/2026, 2 262 194 prompts Espagne, médias généralistes uniquement)** : AI Overviews : El País 5 993 citations, La Vanguardia 4 697, El Mundo 4 668, El Español 3 900 ; **ChatGPT : El País 5 806**, Infobae 2 319, La Vanguardia 1 138, 20 Minutos 836 ; **Gemini : El Español 1 434**, La Vanguardia 1 294, La Razón 1 103, El País 1 028 ; **Mode IA : El País 5 143** ; **Perplexity : 20 Minutos 2 011**, El País 1 924. Xataka et Computer Hoy : non couverts (l'étude exclut les médias spécialisés). https://ahrefs.com/es/blog/top-medios-citados-ia/
- **LLM Pulse (fenêtre glissante, page du 29/10/2026 ; « answer reach » = part des réponses IA citant le média, liste de médias choisis)** : AI Overviews : eleconomista.es 1,55 %, 20minutos.es 1,35 %, elpais.com 1,24 %, lavanguardia.com 1,22 %, abc.es 1,08 %, elespanol.com 1,06 %, larazon.es 0,90 %, elmundo.es 0,76 %, **directoalpaladar.com 0,75 % (n°9, réseau Xataka, appareils de cuisine)**, expansion.com 0,74 %. L'échantillon penche vers les sujets commerciaux. https://llmpulse.ai/data-studies/top-spanish-news-outlets/ai-overview
- **Non documenté** : quelles marques de comparatifs produits (OCU, Xataka Selección, La Casa Sibarita…) sont citées en réponse à des requêtes d'achat en Espagne.
- **Lecture** : ce sont surtout des généralistes qui sont cités ; mais un média de cuisine du réseau Xataka figure dans le top 10 des AI Overviews, signe qu'un vertical produit peut l'être. Les pages qui ressemblent à une réponse (liste courte + critères + FAQ) sont les plus citables.

## 2.3 Leurs techniques et leurs faiblesses (Espagne)

| Acteur | Format et chiffres observés [P] | Techniques | Faiblesses exploitables |
|---|---|---|---|
| **OCU** | Comparateurs derrière paywall (page freidoras visible : 506 mots) ; notes publiques « mejores X » (déshumidificateurs : 23 modèles, 11/2025 ; freidoras < 100 € : 75 modèles comparés, selon résumé de recherche non vérifié) ; conseils (« sin tubo » : « un ventilador con agua » ; marge de 20 % sur la puissance déclarée) | Autorité, tests labo, données propres | Détail payant ; peu de contenu gratuit long ; presse qui la reformule. **À citer avec lien** |
| **Xataka Selección** | « Mejores deshumidificadores para el hogar 2026 : cinco modelos recomendados desde 109 euros » (14/10/2026), 3 674 mots, 5 modèles, 15 liens Amazon, 1 tableau ; sections « Los destacados / Por qué destacan / Otras opciones / Configuraciones y extras / FAQ / Recomendación final » ; **prix affiché par enseigne (« Hoy en Amazon — 249,99 € »)** et mention **« El precio podría variar. Obtenemos comisión por estos enlaces »** ; schema = Article/Person seulement | Prix d'appel dans le titre (« desde 109 euros »), 5 modèles, prix réels | Pas de FAQPage en schema, pas de calculateur, 5 modèles seulement |
| **Xataka Home / Directo al Paladar** | « La OCU pone a prueba 45 freidoras de aire baratas… » (13/04/2024, 1 595 mots) ; « mejores freidoras… según la OCU » (28/08/2022, 1 873 mots) ; prix « PVP en Carrefour / El Corte Inglés / Amazon » + commission | **Réécrit les publications de l'OCU** avec 3 modèles et des liens d'achat | Contenus de 2022-2024 qui se classent encore ; une page à jour fait mieux |
| **Merca2 / Moncloa / Vozpópuli** | Titres « La OCU elige el mejor aire acondicionado portátil… », « La OCU ha probado… » (2025-2026) | Réactivité aux notes de l'OCU | Pas de comparaison propre |
| **La Casa Sibarita** | « Mejor robot aspirador 2026 : los 7 mejores probados », 9 945 mots, 13 tableaux, schema Product + AggregateRating + ItemList, section « Cómo probamos », « 34 modèles → 7 retenus » ; mention « Este artículo contiene enlaces de afiliado » ; page « Política de Afiliación y Transparencia Comercial » | Profondeur, tests déclarés, tableaux, une page par type et par marque | Page de ~10 000 mots (lourde) ; **affirme des tests propres** : Homenura ne peut pas s'aligner, mais peut gagner en clarté et en citations OCU |
| **m8d.io** | « Mejor Robot Aspirador y Fregasuelos 2026 : 7 comparados », 7 030 mots, FAQPage + ItemList + Product + Review + SoftwareApplication, ~299 liens Amazon, analyse de « 44 anuncios de Amazon España », outil « comprobador de fregado », titres « Precios releídos el 12 de septiembre de 2026 » ; page d'accueil : 22 catégories, 80 familles, 5 langues, 48 pays, **prix lus chaque jour**, vérificateur de promotions (30 jours), « pas de publicité », affiliation Amazon, « corrections datées » | Outils interactifs, preuve par données, fraîcheur, méthode publiée | Sa méthode est surtout « lecture de sources » (pas de test propre d'après son propre texte) → **même positionnement que Homenura** ; il a de l'avance en profondeur et en prix |
| **Repsol** | « Las 8 mejores aspiradoras del mercado : comparativa octubre de 2026 », titre **daté au mois**, FAQPage, 3 tableaux, 3 108 mots | Autorité d'un énergéticien, fraîcheur mensuelle | Non spécialiste |
| **El Español « Imprescindibles » / Omicrono** | Page « Mejores robots aspiradores en relación calidad-precio del 2026 » en schema **AdvertiserContentArticle** (contenu sponsorisé/publicitaire), « podemos recibir una comisión » ; Omicrono : citation d'un technicien sur le mythe « bajo consumo » (30/09/2026) | Contenus de marque + éditorial | Étiquette publicitaire |
| **Hola « Selección »** | « Las 8 mejores cafeteras superautomáticas de 2026 : la guía de compra de una verdadera experta en café », 4 359 mots, « Cuando compras a través de nuestros enlaces, ¡HOLA! puede recibir una comisión » (màj 05/10/2026) | Ton « experte », date | Affirme avoir « probado » |
| **TechRadar ES** | « Las mejores freidoras de aire del 2026 : el ranking definitivo », 6 468 mots, FAQPage + ItemList, 58 liens Amazon, mais **un H2 « Mejores freidoras de aire del 2024 »** et dateModified 26/11/2024 | Section « ¿Cómo probamos? » | **Titre 2026 sur contenu 2024** : cible facile |
| **Que.es, wwwhatsnew** | « He probado las mejores freidoras de aire de 2026 » (1 310 mots, sans liens d'affiliation visibles) ; wwwhatsnew : 1 311 mots, Article | Première personne (« probado ») | Contenu mince |
| **Compras Smartphone, Aiho, Powerplanet, Qubbos, Cash Converters, Coffeeness** | Guides d'affiliation / boutiques (Aiho et PcComponentes bloqués à mon accès) | Longue traîne par marque et par prix | Qualité inégale ; plusieurs sont des blogs de revente |
| **Forums** | Forocoches apparaît dans l'autocomplétion (« deshumidificador opiniones forocoches ») ; Banda Ancha pour le solaire de balcon | Preuve sociale | — |
| **El País « Escaparate »** | **Format non observable** : elpais.com répond 403 anti-bot (DataDome) et est bloqué pour WebFetch/WebSearch ; je ne l'ai pas contourné | Inconnu | À vérifier **à la main** : nombre de produits par guide, prix affichés, mention d'affiliation, dates, schema. El País est #1 des citations IA (Ahrefs), mais rien ne dit que ce soit grâce à Escaparate |
| **Computer Hoy / 20minutos** | Page d'accueil Computer Hoy lue (2 380 mots, 76 H2, aucun lien Amazon sur la home) ; aucune page guide analysée ; 20minutos bloqué | — | Non vérifié |
| **El Comparador** | HTTP 503 à mon passage | — | Non vérifié |

**Faiblesses transversales à exploiter (ES)** : (1) contenus datés qui se classent encore (Xataka Home 2022-2024, TechRadar 2024) ; (2) OCU verrouillée : la presse la recycle avec 3 modèles ; (3) sites qui **affirment avoir « probado »** (Que.es, La Casa Sibarita, Hola) : une page « sources + OCU + avis » honnête se démarque et reste conforme ; (4) peu de pages « no funciona / no calienta », « cuánto consume [produit] », « vs » avec contenu produit ; (5) « radiador bajo consumo » = mythe documenté (Omicrono) ; (6) solaire de balcon : sources contradictoires sur la légalité, SERP éditorial faible ; (7) « sin tubo » : l'OCU dit que c'est un ventilateur à eau, mais beaucoup de guides vendent ces appareils comme des climatiseurs.

## 2.4 Requêtes saisonnières imminentes (Espagne)

**Dates (sourcées)**
- **Black Friday vendredi 27/11/2026, Cyber Monday lundi 30/11/2026** (plusieurs sources concordantes). Pas de date de départ officielle : sources divergentes pour Amazon ES (une dit 13-26/11, une autre estime 16-20/11 pour la « semaine du Black Friday ») ; MediaMarkt/El Corte Inglés annoncés ~23-26/11 par une liste. **Non confirmé** ; à surveiller. https://www.trecebits.com/cuando-se-celebra-black-friday-ofertas-descuentos/
- **Rebajas de enero** : pas de date 2027 trouvée. La courbe Trends montre la montée dès le 28/12 et le pic semaine du 04-10/01/2026. Date officielle de début : **ESTIMATION, début janvier, non vérifiée**.
- OCU : analyses antérieures du « baile de precios » du Black Friday (ex. beaucoup de « rebajas » qui n'en sont pas) : l'angle « cómo saber si es una oferta real » est porteur et légitime.

**Courbe réelle Black Friday 2025 (Trends, ES, indice hebdo)** : « black friday » 14 (26/10-01/11) → 25 (02-08/11) → 37 (09-15/11) → 64 (16-22/11) → **97 (23-29/11)** → 16 (30/11-06/12) → 2 (07-13/12). Parallèlement : « robot aspirador » 88, « cafetera superautomática » **100**, « calefactor eléctrico » **100** (82 la semaine suivante), « aspiradora escoba » 87, « termostato inteligente » **100** (23-29/11). « ofertas navidad » : 29 (début nov.) → 63-67 (14-27/12). « rebajas » : 35 (28/12-03/01) → **74 (04-10/01/2026)**. « freidora de aire » est **moins** saisonnière qu'en Italie (courbe 33-48, pic janvier).

**Pics saisonniers par catégorie (indice mensuel, 100 = mois maximal ; moyennes 5 ans)** [T]
| Catégorie | Pic | Creux |
|---|---|---|
| freidora de aire | janv. 100, nov. 76, déc. 75 | juin 48 |
| robot aspirador | **nov. 100**, janv. 76 | juin 49 |
| cafetera superautomática | **nov. 100**, déc. 82 | juin 36 |
| aspiradora escoba | **nov. 100**, janv. 92 | juin 48 |
| termostato inteligente | **nov. 100**, déc. 88 | juin-juil. 2-4 |
| calefactor / radiador eléctrico | **nov. 100**, déc. 85-89, janv. 74-87 | avr.-sept. 0-10 |
| aire acondicionado portátil | **juil. 100**, juin 67 | nov.-mars 2-5 |
| deshumidificador | **janv. 100**, déc. 92, nov. 84 | mai 21 |
| humidificador | déc. 100, janv. 99 | sept. 47 |
| purificador de aire | janv. 100 | sept. 60 |
| robot cortacésped | mai 100, avr. 69 | déc. 6 |
| limpiafondos / robot piscina | juil. 100, juin 86 | déc. 2 |
| cámara de vigilancia exterior | nov. 100, oct. 95 | janv. 23 |
| enchufe inteligente | déc. 100 | mai 36 |
| cargador coche eléctrico | août 100, oct. 99 | janv. 52 |

**Requêtes « consumo / cuánto gasta »**
- Trends : « cuánto consume aire acondicionado » domine (pic juillet, moyenne 9,9 sur son lot) ; « cuánto consume freidora de aire / radiador eléctrico / deshumidificador / estufa eléctrica » sont ~100× plus petits (≤ 0,3). « aire acondicionado no enfría » : moyenne 11,6 (pic juillet). **« calefactor eléctrico consumo » = 11,7 % de « calefactor eléctrico »** : une requête sur neuf de la tête est une question de consommation.
- AC : « freidora de aire consumo de luz », « … vs horno », « aire acondicionado portátil consumo watts », « deshumidificador consumo bajo », « calefactor eléctrico consumo por hora », « enchufe inteligente medidor consumo ».
- Données citées par la presse (non vérifiées en source primaire) : une note citant l'OCU estime ~0,80 €/h pour un calefactor électrique et ~0,75 €/h pour un radiateur à huile (année et tarif inconnus) ; formule de calcul (puissance / 1 000 × prix du kWh). Omicrono : un radiateur de 1 500 W consomme 1,5 kWh quelle que soit l'étiquette. https://www.elespanol.com/omicrono/20260930/tecnico-espanol-radiador-siempre-va-consumir-kwh-consumo-control/1003744401640_0.html
- Prix de l'électricité en Espagne : non étudié ici.

**Calendrier de publication recommandé (Espagne)**
- **Maintenant → 06/11** : pages Black Friday ES (robot aspirador, cafetera superautomática, aspiradora sin cable, calefactor/radiador, termostato, freidora) ; rampe dès ~02/11, pic 23-29/11.
- **16/11 → 30/11** : mise à jour quotidienne ; page « Cyber Monday 30/11 » ; guide « cómo saber si una oferta es real » (réf. OCU).
- **15/11 → 20/12** : guides cadeaux (enchufe inteligente, freidora, cafetera, robot) ; « regalos de navidad » pic déc.
- **26/12 → 10/01** : page « rebajas de enero 2027 » prête avant le 28/12.
- **Janvier** : freidora, deshumidificador, purificador, humidificador, aspiradora.
- **Mars-mai** : robot cortacésped ; **mai-juin** : aire acondicionado portátil, robot piscina (préparer dès avril).

## 2.5 Pourquoi l'Espagne est en retrait (HYPOTHÈSES) et lien avec l'Italie

- **Mêmes défauts de titres que l'Italie** (« Conectados / Inteligentes », « Fregador », « Estaciones de Carga VE ») sur un marché où **« calidad precio » et « ocu » sont les modificateurs** attendus partout.
- **SERP ES plus encombré par des acteurs forts** : OCU + Xataka (Selección, Home, Directo al Paladar) + La Casa Sibarita (tests déclarés, 10 000 mots) + m8d.io + enseignes (PcComponentes, Leroy Merlin, Carrefour, Cecotec) + Repsol/Hola/El Español. L'Italie a plus de pages datées ou algorithmiques.
- **Saisonnalité différente** : la friteuse à air ES culmine en janvier (pas oct.-nov.) et est moins saisonnière (courbe plate 33-48 en 2025), ce qui joue moins en faveur de la home.
- **La structure du site n'explique pas l'écart** : la home ES a le même dispositif que l'IT (H1 « Las Mejores Freidoras de Aire Conectadas 2026 », 2 890 mots ; /es/guides/airfryers 4 579 mots ; /es/guides/airfryer-vs-four 4 241 mots). L'écart 136 vs 33 clics vient donc plutôt de la SERP (concurrence OCU/Xataka), de la demande et de la saison. Dans les deux langues le H1 de la home porte un qualificatif (« Smart » en IT, « Conectadas » en ES) qui n'existe presque pas dans les requêtes : à retirer de la home (action 1).
- À vérifier (GSC pays = Espagne) : pages et requêtes à impressions élevées mais position > 10, et si « freidora de aire » est en 2e page.

## 2.6 Dix actions pour passer devant en Espagne (classées impact / effort)

| # | Action | Impact | Effort | Détail / exemples |
|---|---|---|---|---|
| 1 | **Corriger titres/H1 mal ciblés** et l'accord | Élevé | Faible | « Mejores robots aspirador y friegasuelos 2026 » (au lieu de « Aspirador-Fregador ») ; « Mejores radiadores eléctricos y calefactores de bajo consumo 2026 » ; « Mejores cafeteras superautomáticas 2026 » ; « Mejores cargadores de coche eléctrico (wallbox) para casa 2026 » (au lieu de « Estaciones de Carga VE ») ; « Mejores termostatos wifi 2026 » ; « Mejores humidificadores 2026 » ; « Mejores deshumidificadores 2026 » ; « Mejores aspiradoras sin cable 2026 » ; accords : « Mejor riego automático », « Mejores bombillas inteligentes » ; home : « Las mejores freidoras de aire 2026 » (retirer « Conectadas »). Modèle : « Mejores {producto} 2026: comparativa calidad-precio (actualizada en noviembre) » |
| 2 | **Black Friday / Cyber Monday / Navidad / Rebajas** (pages avec dates réelles) | Élevé | Faible-moyen | Étoffer /es/black-friday + sous-pages avant le 06/11. Titres : « Black Friday 2026: mejores ofertas en robots aspirador » ; « Cómo saber si una oferta del Black Friday es real » (OCU) ; page « Rebajas de enero 2027 » avant le 28/12 |
| 3 | **Bloc « Qué dice la OCU » sur chaque catégorie** (lien vers les pages publiques de l'OCU, date, un fait cité par page) | Élevé | Faible | Ex. OCU déshumidificateurs (23 modèles, 11/2025), « aire acondicionado sin tubo » (« ventilador con agua », marge de 20 %), comparateur freidoras. Formules : « hemos contrastado fuentes públicas, no hemos probado los productos ». Cible « … ocu » (≈ 15 catégories) |
| 4 | **Pages « mejor … calidad precio »** (avec fourchettes de budget) | Élevé | Moyen-élevé | Modificateur sur presque toutes les catégories et « por menos de 100 euros » sur 7. Le site n'affiche aucun prix (Amazon n'autorise l'affichage que via son API) : intégrer PA-API pour des bandes de prix réelles ; à défaut, pages « modelos más económicos » sans montants. À valider vs les conditions Amazon Associates |
| 5 | **Hub « cuánto consume »** + calculateur | Élevé | Moyen | Priorités : aire acondicionado portátil (juillet), calefactor / radiador eléctrico (nov.), deshumidificador, freidora vs horno. H1 : « ¿Cuánto consume un calefactor eléctrico? Coste real por hora ». Réponse directe en tête, formule, tarif kWh saisi par l'utilisateur. Démentir le mythe « bajo consumo » avec citation d'Omicrono (vs. critères réels : puissance, thermostat, temps d'usage) |
| 6 | **Pages « X vs Y » issues de l'autocomplétion** | Élevé | Moyen | freidora de aire vs horno / vs freidora de aceite ; robot aspirador vs aspiradora escoba ; deshumidificador vs aire acondicionado / purificador / humidificador ; aire portátil vs split ; robot de cocina vs Thermomix (Lidl vs Thermomix) ; calefactor vs aire acondicionado ; estación portátil vs generador / SAI ; Dolphin o Zodiac ; Kress vs Husqvarna ; Xiaomi vs Cecotec |
| 7 | **Indexer « robot de cocina »** (aujourd'hui noindex) | Moyen-élevé | Faible | Terme T2 en ES (6,4) ; angles « vs Thermomix », « Lidl vs Thermomix », « Cecotec Mambo ». Ne pas indexer frigorífico/lavadora inteligente (demande ≈ 0) |
| 8 | **Pages « problème » avec la forme réelle des requêtes** | Moyen-élevé | Moyen | « Aire acondicionado no enfría: causas y soluciones » (demande réelle, juillet), « Calefactor eléctrico enciende pero no calienta », « Robot aspirador no carga ». Retitrer les 30 pages « probleme » les plus proches |
| 9 | **Pages « marques distributeurs »** (Lidl, Aldi/Ambiano, Mercadona, Carrefour, Cecotec) | Moyen | Moyen | « Robot aspirador Lidl vs Xiaomi: ¿merece la pena? », « Deshumidificador Mercadona opiniones » : requêtes d'intention forte. Rédiger « sources + opinions + OCU », sans prétendre tester |
| 10 | **Solaire de balcon : explicatif légal prudent** + slugs espagnols | Moyen | Moyen-élevé | « Placas solares de balcón: ¿es legal? permiso de la comunidad, 800 W y kits enchufables » (AC : « permiso comunidad », « precio », « opiniones »). Sujet à risque (juridique) : citer Xataka Home / Selectra, signaler les divergences, renvoyer à la communauté autonome et au distributeur. À côté : slugs ES (/es/cocina/freidoras-de-aire) après les actions 1-8 |

---

# PARTIE 3 — OBSERVATIONS TRANSVERSALES SUR LE SITE (hors périmètre, lecture seule)

Faits vérifiés le 30/10/2026 :
1. **Liens Amazon** : la page /it/methodologie dit que « tutti i nostri link Amazon puntano ad Amazon.fr con un unico ID affiliato » (programme « Global Earning » : Amazon redirigerait les lecteurs vers le store de leur pays, commission sur le même compte). Dans le DOM de /it/guides/airfryers après hydratation : 39 liens, tous `www.amazon.fr/dp/...?tag=homenuraen05-21` ; idem sur les pages ES/IT de catégories (liens de recherche amazon.fr). **Je n'ai pas pu vérifier** la redirection réelle ni les conversions par marketplace : à contrôler dans Associates (clics et commandes IT/ES) avant d'investir en contenu.
2. **Aucun prix affiché** (méthodologie : « Non mostriamo i prezzi »). Les requêtes « sotto 100 euro / por menos de 100 euros / economica / barata » sont donc difficiles à servir sans PA-API.
3. **Slugs français** sur toutes les langues (/it/cuisine-connectee/airfryers ; /es/confort-air/climatiseurs-mobiles ; /it/guides/probleme/robot-aspirateur-brosse-bloquee). Doublon : /it/guides/airfryers et /it/cuisine-connectee/airfryers (même page, canonique = la première). Quelques articles ont des slugs allemands/espagnols dans /it/blog/ (saugroboter-tierhaare-test, aire-acondicionado-portatil-sin-tubo).
4. **Erreurs de langue dans les titres et H1** (liste complète vérifiée sur les 52 catégories IT et 52 ES) : IT : H1 en « I migliori » devant un féminin ou un nom non accordé sur une vingtaine de catégories (« I migliori scope elettriche a batteria », « I migliori telecamere da esterno », « I migliori batterie domestiche », « I migliori stazioni di ricarica ev », « I migliori solare da balcone », « I migliori stufe intelligenti ») ; les titles sans article sont corrects. Les H1 des home sont « Smart » (IT) et « Conectadas » (ES). ES : « Mejores Riego Inteligente », « Mejores Iluminación Inteligente », « Mejores Solar de Balcón Enchufable » ; H1 « Comparativa … ve / co 2026 » (sigles en minuscules) ; H1 mixte allemand/italien sur /it/blog/saugroboter-tierhaare-test (« Saugroboter für Tierhaare im Vergleich 2026: il confronto per cani e gatti »).
5. **Pages catégorie IT/ES** : 700-905 mots chacune (versus 2 700-8 300 mots chez les concurrents analysés pour la même requête).
6. **Sélections non localisées** : meta description de /it/confort-air/chauffages-appoint : « Thermor Equateur 4, Sauter Orosi 2, Mill Gentle Air WiFi » (marques françaises). Les pages ES de climatisation citent Midea/Trotec (marques présentes sur le marché espagnol).
7. **Points forts** : FAQPage + ItemList + Article sur la plupart des pages ; dates de mise à jour visibles ; robots.txt ouvert aux crawlers IA ; /llms.txt ; hreflang 6 langues ; méthodologie conforme (sources triangulées, pas de test revendiqué ; la phrase « se riceviamo un campione in prestito, lo indichiamo » reste à surveiller côté règle).

---

# PARTIE 4 — PLAN DE VALIDATION (ce qu'il faut vérifier avant d'arbitrer)

1. **GSC** (pays = Italie puis Espagne, 28 jours) : top pages et requêtes, positions 6-15, requêtes contenant « altroconsumo », « ocu », « vs », « non », « consumi/consumo » (mesurer si la demande existe déjà sur le site).
2. **Keyword Planner ou outil SEO** : sortir les volumes absolus des 24 termes principaux par pays (et des variantes : « termostato wifi », « fotovoltaico da balcone », « radiador eléctrico », etc.) pour remplacer mon convertisseur indicatif 0.1.
3. **Amazon Associates** : rapport par marketplace pour confirmer que les clics IT/ES sont crédités et convertissent ; confirmer l'ID et la politique d'affichage des prix (PA-API).
4. **SERP réels géolocalisés** (Google.it / Google.es) sur les 12 requêtes de 1.2 et 2.2 : confirmer les acteurs et repérer les blocs « discussions et forums » (Reddit, fibra.click, Forocoches) et AI Overviews.
5. **Pages Black Friday** : décider des dates de mise en ligne avant le 06/11 ; vérifier les dates Amazon IT/ES une fois annoncées.

---

# ANNEXE A — Indices Trends complets (12 mois, moyenne hebdo, ancre = 100)

Relevé du 30/10/2026. Sous 0,3, le chiffre est au bruit.


**Italie** (ancre « friggitrice ad aria » = 100)

| Terme | Indice | Terme | Indice |
|---|---|---|---|
| friggitrice ad aria | 100.0 | presa smart | 0.69 |
| stufa a pellet | 15.7 | fotovoltaico da balcone | 0.61 |
| deumidificatore | 10.9 | purificatore d'aria | 0.56 |
| robot aspirapolvere | 7.04 | macchina caffè automatica | 0.51 |
| condizionatore portatile | 7.01 | lavavetri robot | 0.50 |
| robot lavapavimenti | 6.58 | termostato smart | 0.47 |
| videocitofono | 6.52 | telecamera sorveglianza | 0.45 |
| wallbox | 4.97 | radiatore elettrico | 0.41 |
| stazione meteo | 4.94 | serratura smart | 0.41 |
| aspirapolvere senza fili | 3.96 | multicooker | 0.37 |
| robot tagliaerba | 3.00 | lampadina smart | 0.27 |
| telecamera wifi | 2.78 | rilevatore di fumo | 0.20 |
| power station | 2.59 | serratura elettronica | 0.13 |
| umidificatore | 2.36 | friggitrice senza olio | 0.11 |
| climatizzatore portatile | 2.05 | pannello solare balcone | 0.11 |
| termoventilatore | 1.91 | termostato intelligente | 0.08 |
| batteria accumulo | 1.61 | tapparelle smart | 0.05 |
| robot piscina | 1.56 | frigorifero smart | 0.03 |
| robot da cucina | 1.52 | telecamera esterna wifi | 0.02 |
| stufa elettrica | 1.52 | kit solare balcone | 0.01 |
| scopa elettrica senza fili | 1.25 | macchina da caffè a chicchi | 0.00 |
| lavatrice smart | 1.11 | campanello smart | 0.00 |
| valvole termostatiche | 1.03 | allarme casa senza abbonamento | 0.00 |
| condizionatore portatile senza tubo | 0.78 | telecamera interna wifi | 0.00 |

**Espagne** (ancre « freidora de aire » = 100)

| Terme | Indice | Terme | Indice |
|---|---|---|---|
| freidora de aire | 100.0 | freidora sin aceite | 1.60 |
| deshumidificador | 19.0 | detector de humo | 1.53 |
| robot aspirador | 14.4 | robot cortacésped | 1.35 |
| aire acondicionado portátil | 13.8 | bombilla inteligente | 1.05 |
| humidificador | 12.5 | robot friegasuelos | 1.01 |
| aspiradora sin cable | 10.1 | cafetera de grano | 0.92 |
| estufa de pellets | 9.41 | estufa eléctrica | 0.90 |
| videoportero | 7.58 | termostato inteligente | 0.79 |
| robot de cocina | 6.41 | calefactor eléctrico | 0.62 |
| purificador de aire | 5.70 | estación de energía portátil | 0.61 |
| robot piscina | 5.62 | radiador eléctrico bajo consumo | 0.45 |
| cámara de vigilancia | 4.50 | cámara de vigilancia exterior | 0.15 |
| cerradura inteligente | 4.43 | lavadora inteligente | 0.03 |
| batería solar | 4.16 | aire acondicionado portátil sin salida | 0.02 |
| aspiradora escoba | 3.95 | alarma casa sin cuotas | 0.02 |
| limpiafondos piscina | 3.90 | cabezales termostáticos | 0.01 |
| cargador coche eléctrico | 3.50 | timbre con cámara | 0.01 |
| cafetera superautomática | 3.10 | placas solares balcón | 0.00 |
| estación meteorológica | 3.10 | kit solar balcón | 0.00 |
| cámara wifi | 2.34 | frigorífico inteligente | 0.00 |
| enchufe inteligente | 2.25 | persianas inteligentes | 0.00 |
| radiador eléctrico | 2.25 | placa solar balcón | 0.00 |
| limpiacristales robot | 1.63 |  |  |

# ANNEXE B — Poids des synonymes (12 mois, moyenne hebdo, terme de tête du groupe = 100)


**Italie**

| Groupe | Poids des variantes |
|---|---|
| termostato | termostato intelligente 5.0 · termostato smart 31.3 · termostato wifi 100.0 · cronotermostato wifi 25.3 · termostato tado 9.0 |
| presa | presa intelligente 11.6 · presa smart 100.0 · presa wifi 63.6 · presa smart tapo 1.8 · presa intelligente alexa 0.0 |
| lampadina | lampadina intelligente 2.6 · lampadina smart 100.0 · lampadina wifi 13.3 · lampadina smart ikea 2.7 · lampadine smart 71.6 |
| serratura | serratura intelligente 2.6 · serratura smart 100.0 · serratura elettronica 31.6 · serratura smart porta blindata 3.2 · serratura elettronica porta blindata 0.3 |
| telecamera | telecamera esterna 100.0 · telecamera wifi esterna 3.5 · telecamera esterna wifi 3.5 · telecamera di sorveglianza esterna 0.1 · telecamera senza fili esterna 0.2 |
| videocitofono | videocitofono 100.0 · videocitofono wifi 9.5 · campanello smart 0.1 · campanello con telecamera 0.0 · videocitofono senza fili 0.5 |
| stufa | stufa elettrica 79.5 · stufa intelligente 0.2 · termoventilatore 100.0 · stufetta elettrica 46.4 · radiatore elettrico 21.7 |
| robot | robot aspirapolvere 100.0 · aspirapolvere robot 100.0 · robot aspirapolvere lavapavimenti 39.3 · robot lavapavimenti 94.7 · aspirapolvere lavapavimenti robot 39.3 |
| cafe | macchina caffè automatica 100.0 · macchina da caffè a chicchi 0.9 · macchina caffè superautomatica 0.2 · macchina caffè con macinacaffè 6.5 · caffettiera connessa 0.0 |
| solare | fotovoltaico da balcone 100.0 · pannello solare balcone 17.1 · kit fotovoltaico balcone 3.1 · pannello fotovoltaico plug and play 0.1 · impianto fotovoltaico balcone 3.3 |
| clima | condizionatore portatile 100.0 · climatizzatore portatile 27.9 · condizionatore portatile senza tubo 10.5 · condizionatore senza unità esterna 21.7 · pinguino condizionatore 23.3 |
| wallbox | wallbox 100.0 · wallbox auto elettrica 3.2 · colonnina ricarica auto elettrica casa 0.4 · caricatore auto elettrica casa 0.0 · wall box 25.1 |
| scopa | scopa elettrica senza fili 21.0 · aspirapolvere senza fili 68.8 · scopa elettrica 100.0 · aspirapolvere a batteria 8.3 · aspirapolvere scopa 22.2 |
| aria | purificatore d'aria 35.2 · purificatore aria 100.0 · depuratore aria 15.3 · purificatore d'aria hepa 0.2 · depuratore d'aria 1.1 |
| tagliaerba | robot tagliaerba 100.0 · robot tosaerba 9.5 · robot tagliaerba senza filo perimetrale 9.3 · tagliaerba robot 100.0 · robot rasaerba 12.2 |
| piscina | robot piscina 100.0 · robot per piscina 29.0 · robot pulitore piscina 1.9 · robot pulisci piscina 2.3 · pulitore piscina 11.4 |

**Espagne**

| Groupe | Poids des variantes |
|---|---|
| termostato | termostato inteligente 25.4 · termostato wifi 100.0 · termostato programable 7.3 · termostato tado 15.7 · termostato netatmo 14.3 |
| enchufe | enchufe inteligente 100.0 · enchufe wifi 49.0 · enchufe inteligente alexa 0.9 · enchufe tapo 16.3 · enchufe programable 1.2 |
| bombilla | bombilla inteligente 100.0 · bombilla wifi 12.0 · bombillas inteligentes 20.1 · bombilla inteligente alexa 2.4 · bombilla led wifi 0.1 |
| cerradura | cerradura inteligente 100.0 · cerradura electrónica 2.4 · cerradura digital 1.4 · cerradura inteligente puerta 3.8 · cerradura con huella 0.4 |
| camara | cámara de vigilancia exterior 6.7 · cámara exterior 100.0 · cámara wifi exterior 3.6 · cámara de seguridad exterior 0.8 · cámara vigilancia exterior solar 0.9 |
| timbre | videoportero 100.0 · timbre con cámara 0.1 · timbre inteligente 0.1 · videoportero wifi 10.2 · timbre wifi 1.1 |
| calefactor | calefactor eléctrico 28.1 · radiador eléctrico bajo consumo 20.4 · estufa eléctrica 39.6 · calefactor bajo consumo 90.2 · radiador eléctrico 100.0 |
| robot | robot aspirador 100.0 · aspirador robot 100.0 · robot aspirador friegasuelos 2.9 · robot friegasuelos 7.0 · robot aspirador y fregasuelos 8.4 |
| cafe | cafetera superautomática 100.0 · cafetera automática 67.4 · cafetera de grano 30.3 · cafetera con molinillo 64.8 · cafetera superautomatica delonghi 24.2 |
| solar | placas solares balcón 79.0 · kit solar balcón 100.0 · placa solar balcón 28.7 · paneles solares balcón 0.0 · kit solar enchufable 89.8 |
| clima | aire acondicionado portátil 100.0 · aire acondicionado portátil sin tubo 6.0 · aire acondicionado sin obra 0.4 · aire acondicionado portatil sin salida de aire 2.7 · aire acondicionado móvil 1.7 |
| cargador | cargador coche eléctrico 100.0 · punto de recarga coche eléctrico casa 0.0 · wallbox coche eléctrico 0.9 · cargador wallbox 37.7 · cargador coche eléctrico casa 3.0 |
| aspiradora | aspiradora escoba 38.5 · aspiradora sin cable 100.0 · aspiradora escoba sin cable 7.4 · aspirador escoba 43.7 · aspiradora de mano 35.4 |
| aire | purificador de aire 86.8 · purificador aire 100.0 · depurador de aire 0.1 · purificador de aire hepa 3.9 · purificador de aire casa 0.4 |
| cortacesped | robot cortacésped 100.0 · robot cortacesped sin cable 1.6 · cortacésped robot 100.0 · robot cortacésped sin cable perimetral 0.1 · cortacésped automático 0.1 |
| piscina | robot piscina 100.0 · limpiafondos piscina 66.8 · robot limpiafondos 28.1 · robot limpiafondos piscina 14.8 · limpiafondos automático 0.2 |

# ANNEXE C — Part des modificateurs commerciaux par rapport à la tête (12 mois ; tête = 100 ; Trends correspondance large)

Lecture : une valeur de 5,8 signifie que « migliore robot aspirapolvere » pèse 5,8 % de « robot aspirapolvere ». Les valeurs < 0,3 sont au bruit de l'arrondi Trends.


**Italie**

| Tête | Variantes ≥ 0,3 |
|---|---|
| friggitrice ad aria | migliore ~ 0.4 · ~ recensioni 1.1 |
| robot aspirapolvere | migliore ~ 5.8 · ~ recensioni 5.2 · ~ prezzo 4.3 |
| macchina caffè automatica | migliore ~ 1.2 · ~ recensioni 0.9 · ~ prezzo 1.1 |
| scopa elettrica senza fili | migliore ~ 4.8 · ~ opinioni 1.6 · ~ recensioni 0.8 · ~ prezzo 2.0 · ~ economica 0.5 |
| condizionatore portatile | migliore ~ 0.4 · ~ recensioni 2.7 · ~ prezzo 2.3 |
| deumidificatore | migliore ~ 1.2 · ~ recensioni 0.9 · ~ prezzo 1.3 · ~ consumi 0.4 |
| purificatore d'aria | migliore ~ 1.1 · ~ recensioni 0.8 · ~ prezzo 0.7 · ~ consumi 1.1 |
| videocitofono | ~ prezzo 1.0 |
| robot tagliaerba | ~ recensioni 2.0 · ~ prezzo 1.6 |
| robot piscina | ~ recensioni 0.6 · ~ prezzo 0.5 · ~ quale scegliere 0.4 |
| wallbox | ~ prezzo 2.5 |
| termostato smart | ~ altroconsumo 1.1 |
| stufa elettrica | migliore ~ 0.7 · ~ prezzo 1.2 · ~ consumi 0.3 · ~ quale scegliere 0.3 |
| telecamera esterna wifi | migliore ~ 1.8 · ~ prezzo 16.5 · ~ consumi 15.3 · ~ economica 1.2 · ~ quale scegliere 17.4 |

**Espagne**

| Tête | Variantes ≥ 0,3 |
|---|---|
| freidora de aire | mejor ~ 2.0 · ~ opiniones 1.3 · ~ precio 1.4 |
| robot aspirador | mejor ~ 12.2 · ~ opiniones 2.0 · ~ precio 3.6 |
| cafetera superautomática | mejor ~ 1.3 · ~ opiniones 0.7 |
| aspiradora escoba | mejor ~ 3.1 · ~ opiniones 0.6 · ~ precio 1.4 · ~ consumo 0.3 |
| aire acondicionado portátil | mejor ~ 4.0 · ~ opiniones 2.1 · ~ precio 2.1 · ~ consumo 0.4 |
| deshumidificador | mejor ~ 2.5 · ~ opiniones 1.4 · ~ precio 1.7 · ~ consumo 0.8 |
| purificador de aire | mejor ~ 1.1 · ~ precio 1.5 · ~ ocu 0.3 · ~ barata 0.3 |
| timbre con cámara | (toutes < 0,3) |
| robot cortacésped | ~ precio 1.2 · ~ ocu 1.0 |
| limpiafondos piscina | mejor ~ 2.3 · ~ comparativa 0.4 · ~ cual elegir 0.4 |
| cargador coche eléctrico | ~ precio 1.2 · ~ cual elegir 0.4 |
| termostato inteligente | mejor ~ 0.3 |
| calefactor eléctrico | mejor ~ 0.8 · ~ consumo 11.7 |
| cámara de vigilancia exterior | (toutes < 0,3) |

# ANNEXE D — Sources externes citées

- Altroconsumo — marques de friggitrici 2026 : https://www.altroconsumo.it/elettrodomestici/friggitrici-ad-aria/news/migliori-marche-friggitrici-ad-aria-2026
- Altroconsumo — offres Prime Day friggitrici (avec mention de commission) : https://www.altroconsumo.it/elettrodomestici/friggitrici-ad-aria/news/friggitrici-offerta-prime-day-2026
- Altroconsumo — robot aspirapolvere/lavapavimenti : https://www.altroconsumo.it/elettrodomestici/robot-aspirapolvere/news/migliori-robot-aspirapolveri-lavapavimenti
- Altroconsumo — condizionatori portatili (comparatore ; « con tubo / senza tubo ») : https://www.altroconsumo.it/elettrodomestici/condizionatori-portatili/comparatore · https://www.altroconsumo.it/elettrodomestici/condizionatori-portatili/news/condizionatore-portatile-con-tubo-senza-tubo
- Altroconsumo — videocitofoni wifi : https://www.altroconsumo.it/hi-tech/internet-telefono/news/migliori-videocitofoni-wifi
- Altroconsumo — macchine caffè (test cappuccino 2026, classement marques) : https://www.altroconsumo.it/elettrodomestici/macchina-caffe/news/migliori-macchine-cappuccino · https://www.altroconsumo.it/elettrodomestici/macchina-caffe/news/migliori-marche-macchine-caffe-2026
- Sky TG24 — condizionatori portatili 2026 : https://tg24.sky.it/economia/2026/06/24/migliori-condizionatori-portatili-classifica-2026
- Corriere « La Scelta Giusta » : https://www.corriere.it/offerte-recensioni/ (transparence : https://www.corriere.it/offerte-recensioni/disclaimer)
- ItaliaOggi / Sensemakers (citations IA, IT) : https://www.italiaoggi.it/marketing-e-media/media/chatbot-ai-e-ai-overviews-servizio-che-vai-sito-che-trovi-uaxb1oiu
- SWG / Trustpilot (47 % des Italiens et l'IA) : https://www.smartworld.it/tecnologia/47-italiani-usa-ia-scegliere-cosa-comprare.html
- Black Friday IT : https://www.skuola.net/guide/black-friday-2026-offerte.html · hub QualeScegliere : https://www.qualescegliere.it/black-friday/
- Saldi invernali 2026 : https://quifinanza.it/info-utili/saldi-invernali-2026-calendario-date-inizio/951812/amp/
- Prix de l'électricité IT : https://tariffe.segugio.it/news-tariffe/prezzo-dell-elettricita-italia-quinta-al-mondo-e-seconda-nel-g20-00047994.aspx
- Ahrefs — médias cités par l'IA en Espagne : https://ahrefs.com/es/blog/top-medios-citados-ia/
- LLM Pulse — médias espagnols dans les AI Overviews : https://llmpulse.ai/data-studies/top-spanish-news-outlets/ai-overview
- OCU — freidoras : https://www.ocu.org/electrodomesticos/freidoras · deshumidificadores : https://www.ocu.org/vivienda-y-energia/equipamiento-hogar/informe/mejores-deshumidificadores · aire sin tubo : https://www.ocu.org/vivienda-y-energia/aire-acondicionado/consejos/aire-acondicionado-sin-tubo · portátiles : https://www.ocu.org/vivienda-y-energia/aire-acondicionado/noticias/mejores-aires-acondicionados-portatiles · aspirador escoba : https://www.ocu.org/electrodomesticos/aspirador/test/comparar-aspirador-escoba · cafetera superautomática : https://www.ocu.org/electrodomesticos/cafeteras/consejos/cafetera-superautomatica
- Xataka Selección (deshumidificadores) : https://www.xataka.com/seleccion/mejores-deshumidificadores-para-hogar-2026-cinco-modelos-recomendados-109-euros
- Xataka Home (OCU freidoras) : https://www.xatakahome.com/electrodomesticos-innovadores/ocu-pone-a-prueba-45-freidoras-aire-baratas-estas-tres-mejores-80-euros · solaire de balcon : https://www.xatakahome.com/iluminacion-y-energia/hay-paneles-solares-que-se-cuelgan-balcon-funcionan-simple-enchufe-evitar-multa-depende-cumplir-estos-requisitos
- La Casa Sibarita : https://lacasasibarita.es/limpieza/robot-aspirador/
- m8d.io : https://m8d.io/ · https://m8d.io/electrodomesticos/robots-aspiradores/ · https://m8d.io/it/migliori-friggitrici-ad-aria/
- Repsol : https://www.repsol.es/particulares/asesoramiento-consumo/mejores-aspiradoras/
- Omicrono (radiador) : https://www.elespanol.com/omicrono/20260930/tecnico-espanol-radiador-siempre-va-consumir-kwh-consumo-control/1003744401640_0.html
- Black Friday ES : https://www.trecebits.com/cuando-se-celebra-black-friday-ofertas-descuentos/
- Solaire de balcon ES : https://selectra.es/energia/noticias/placas-solares-2026-balcon-piso-permiso
- Relevés propres du 30/10/2026 : Google Trends (IT/ES), Google Autocomplete (it/it, es/es), analyse HTTP de pages ; scripts et données brutes dans le répertoire temporaire de session (non conservés dans le projet).

