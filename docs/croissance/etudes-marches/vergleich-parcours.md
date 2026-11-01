# vergleich.org — catégories, mots-clés et parcours, et ce que Homenura doit en reprendre (1er novembre 2026)

Objet : décrire, pages ouvertes à l'appui, **l'arborescence**, **les formules de mots-clés** et **les parcours** de vergleich.org (n° 1 allemand des comparatifs d'affiliation), les mettre face aux pages /de de Homenura, et en tirer des changements classés.
Ce document **complète** `docs/croissance/seo-etudes/dach.md` (gabarit d'une page, sitemap, droit « Test », 30/10) et `studies/de.md` (marché DACH, § 5.2–5.4, 01/11) sans les refaire. Il ajoute : le comptage complet des rubriques et groupes, les formules de titre par type de page, trois parcours complets décrits écran par écran, le mobile, la règle de classement publiée par vergleich.org, et la comparaison côte à côte avec Homenura.

**Méthode.** Navigation dans un onglet Chrome à moi (fermé à la fin), sans connexion, sans formulaire envoyé, sans clic sur une annonce ni sur un bouton marchand (les destinations ont été lues dans le code de la page). Les 12 pages rubrique et les 511 pages groupe ont été lues depuis cet onglet par requêtes directes sur le site ; le sitemap (18 797 URL) a été analysé le 01/11/2026.

**Légende** : [M] mesuré par moi le 01/11/2026 ; [L] page lue ou relue par moi ; [S] source locale citée par l'étude sœur `studies/de.md` (mêmes dates), non relue par moi ; [I] document interne ; [E] estimation ; [H] hypothèse.

**Limites.** (1) Le budget de recherche web partagé était épuisé dès le début de ce travail : aucune nouvelle recherche n'a été possible. Les preuves de demande allemandes viennent donc des sources locales déjà réunies par `de.md` (Google Trends Allemagne, meilleures ventes Amazon.de, idealo, GFU, Bitkom, HDE). J'en ai **relu quatre** : GFU, Bitkom, OTTO et § 5b UWG. (2) **Mobile** : le redimensionnement de la fenêtre n'a pas fonctionné. Le mobile de vergleich.org a été observé dans un cadre de 390 px de large avec l'identifiant d'un navigateur d'ordinateur, ce qui ne donne que le rendu CSS. Homenura interdit l'affichage dans un cadre : son mobile n'a donc pas été comparé. (3) Les positions en pixels ont été mesurées sur un écran de 1501 × 864 px. (4) Rien ne dit quelles pages de vergleich.org reçoivent réellement du trafic : je décris ce qui existe, pas ce qui rapporte.

---

## Synthèse — 10 constats

1. **Trois niveaux, des URL plates** : 12 rubriques → **511 groupes** → **18 241 pages comparatif** distinctes. Toutes les URL sont à la racine (`/haushalt/`, `/frittieren/`, `/heissluftfritteuse/`, `/heissluftfritteuse-xxl/`). L'arborescence n'est visible que dans le fil d'Ariane et le maillage [M].
2. **Classement par famille de produits, pas par pièce ni par usage**. La maison connectée est **éclatée** : thermostats, caméras, serrures, détecteurs, climatisation et chauffage sont dans « Baumarkt », les purificateurs dans « Wohnen ». Il n'existe **aucune rubrique Smart Home** (`/smart-home/` renvoie une erreur 404) [M].
3. **La longue traîne, c'est le moteur.** Une page de tête est déclinée par marque, budget, taille ou puissance, fonction (« mit / ohne »), usage (« für ») et pièce. Ces déclinaisons ont **le même gabarit** que la page de tête, et une rangée de « puces » placée sous le H1 les relie [M].
4. **Trois formules de titre** : « X Test 2026 – accroche » (pages testées), « X Test & Vergleich » Top N im November 2026 » (anciennes pages de tête) et « Top 10 X Test & Vergleich » (déclinaisons). Le H1 dit « Vergleich 2026 » dès que la page n'est pas testée [M].
5. **Le synonyme va dans le sous-titre bleu** sous le H1 (« Die besten Airfryer im Vergleich. »). La FAQ reprend les variantes recherchées : « vs. Backofen », « Unterschied Airfryer und Heißluftfritteuse », « Stiftung Warentest » [M].
6. **Le tableau arrive vite.** Sur une page de déclinaison, il est **dans le premier écran** (y ≈ 760 px). Sur une page de tête testée, il arrive au 3e écran (y ≈ 2 450 px), après 3 choix rapides cliquables. Chez Homenura, il arrive au 19e écran du guide airfryer (y ≈ 16 200 px) et **n'existe pas** sur les pages catégorie [M].
7. **Chaque produit renvoie vers plusieurs marchands** : Amazon partout, plus OTTO, eBay (neuf et occasion), les boutiques des marques, Coolblue, Proshop, Playox, cyberport, JACOB. Tous les boutons « Zum Angebot » sont des **boutons sans lien visible**, suivis par emplacement (`test-summary`, `offers-btn`, `test-impression`) [M].
8. **Des emplacements payants passent avant le choix éditorial.** Dans les 8 premières colonnes, 3 sont des « Highlight / Anzeige », et ce sont les colonnes 1 et 2. Sur mobile, les deux colonnes visibles sont donc des annonces [M].
9. **Le classement publié dépend du commercial.** « Nutzerinteresse » (taux de clic, forte pondération) et « Preis » (pondération très forte, « offres attrayantes des boutiques liées privilégiées ») [M]. C'est leur information au titre du § 5b UWG [L4]. Homenura doit faire l'inverse : classer sur des critères produit, publiés.
10. **Homenura /de part d'une base saine mais se lit comme un site d'airfryer.** La page d'accueil, « Ratgeber » et « Vergleich » mènent tous les trois à l'airfryer. Le menu Smart Home ne montre que 5 rubriques et aucune catégorie. Les pages catégorie n'ont ni tableau, ni filtre, ni sommaire, ni déclinaison [M].

---

## 1. Taxonomie

### 1.1 Architecture et motifs d'URL [M]

| Niveau | Exemple | Gabarit | Nombre |
|---|---|---|---|
| Accueil | `/` | Recherche + « Beliebte Vergleiche im Überblick » (12 tuiles × 10 liens) | 1 |
| Rubrique | `/haushalt/` — H1 « Haushalt - Alle Tests und Vergleiche » | Grille de tuiles-groupes : 10 liens chacune + « Mehr » » | 12 |
| Groupe | `/frittieren/` — H1 « Frittieren - Alle Tests und Vergleiche » | Liste A–Z de **toutes** les pages du groupe + « Produktgruppe vorschlagen » + texte SEO avec liens | 511 |
| Comparatif de tête | `/heissluftfritteuse/` | Gabarit « Test » ou « Vergleich » (§ 2.1) | — |
| Déclinaison | `/heissluftfritteuse-xxl/`, `/philips-heissluftfritteuse/`, `/kaffeevollautomat-bis-500-euro/` | Même gabarit que la tête, plus court | — |
| Total des pages comparatif | — | — | **18 241 noms distincts** (18 363 entrées, dont ≈ 120 classées dans 2 groupes) |
| Autres | `/autor/…` 67 · `/themenwelten/…` (indexées, absentes du sitemap) · 3 « Ratgeber » | — | — |

- Le sitemap contient **18 797 URL**, toutes à la racine sauf les 67 pages `/autor/`.
- Le **méga-menu** « Kategorien » montre 12 icônes. Au clic, chaque rubrique affiche ses **20 comparatifs les plus consultés**, qui mêlent têtes et déclinaisons (« Monitor 32 Zoll 4K », « Tablets unter 200 Euro », « Topper 100 x 200 »), puis un lien « weitere X Vergleiche ».
- Les 20 favoris de **Haushalt** le 01/11/2026 : Wassersprudler, Zentralstaubsauger, Brotbackautomat, Wäschespinne, Industriestaubsauger, Spülmaschinentabs, Akku-Staubsauger, Eierkocher, AEG-Waschmaschine, Saug-Wisch-Roboter, Handstaubsauger, Kondenstrockner, Reiskocher, Milchaufschäumer, Heißwasserspender, Thomas-Staubsauger, Tierhaarstaubsauger, Nespresso-Maschine, Messerschärfer, Wasserkocher [M].
- Ceux de **Baumarkt** : Tresor feuerfest, Makita-Akku-Rasenmäher, Smartes Türschloss, Akku-Rasentrimmer, Feuchtigkeitsmessgerät, Split-Klimaanlage 2 Innengeräte, Pelletofen, Bohrmaschine, Tiefbrunnenpumpe, Kappsäge, Fliesenschneider, Doppelschleifer, Überwachungskamera, Benzinrasenmäher mit Elektrostart, Akku-Laubsauger, Löschdecke, Multimeter… ; dans **Elektronik**, Powerstation est 1re et « Powerstation mit Solarpanel » 10e ; dans **Wohnen**, on trouve Tageslichtlampe, Badlüfter et Außenleuchte mit Kamera [M].
- Ce que montre ce menu : la tête du classement est faite de **petits appareils banals** (bouilloire, cuiseur à œufs, détartrage) et de **déclinaisons** (marque, taille). Côté maison connectée, seuls la serrure, des caméras et la lampe d'extérieur avec caméra y figurent.

### 1.2 Rubriques : nombre de groupes et de pages [M]

| Rubrique | URL | Groupes | Pages listées | Ce qui concerne Homenura |
|---|---|---|---|---|
| Haushalt | /haushalt/ | 57 | 1 953 | Cuisine, ménage, linge, froid |
| Baumarkt | /baumarkt/ | 83 | 3 119 | Jardin, piscine, barbecue, chauffage, climatisation, thermostats, sécurité, incendie, prises |
| Wohnen | /wohnen/ | 39 | 1 307 | Purificateurs, éclairage, volets et rideaux, parfums d'intérieur |
| Elektronik | /elektronik/ | 55 | 2 085 | Powerstation, réveils et simulateurs d'aube, réseau |
| Freizeit & Sport | /sport/ | 84 | 2 825 | — |
| Drogerie | /drogerie/ | 69 | 2 972 | — |
| Lebensmittel | /lebensmittel/ | 34 | 1 637 | — |
| Auto & Motor | /auto/ | 31 | 1 024 | (câbles de recharge) |
| Kind & Baby | /kind-und-baby/ | 28 | 766 | — |
| Mode | /mode/ | 15 | 424 | — |
| Service | /service/ | 6 | 176 | — |
| Finanzen | /finanzen/ | 10 | 75 | — |
| **Total** | | **511** | **18 363** | |

**Groupes « maison » et leur nombre de pages** [M] — Haushalt : Reinigungsgeräte 82 · Kühlgeräte 75 · Pfannen 74 · Backzubehör 71 · Waschen & Trocknen 65 · Kaffeekocher 64 · Geschirr reinigen 56 · Küchenkleingeräte 54 · Wohnungsreinigung 54 · Mikrowellen & Küchenmaschinen 48 · Öfen & Backöfen 44 · Wasserkocher 36 · Kochplatten 35 · Bodenreinigung 32 · Bügeln 32 · Küchenhauben 32 · Kaffeezubereitung 30 · Toaster/Waffeleisen/Sandwichmaker 30 · Stand-, Stab- & Handmixer 27 · Frittieren 24 · Entsafter 18 · Fondue & Raclette 17 · Küchenwaagen 6. Baumarkt : Gartenbewässerung 83 · Heizen 74 · Rasen- & Gartengeräte 73 · Grillen & Barbecue 68 · Messtechnik 63 · Kamine & Öfen 61 · Elektronische Überwachung 59 · Poolpflege 49 · Einbruchschutz Tür & Fenster 48 · Kühlen 47 · Anschlussdosen 44 · Mobile Heizgeräte 35 · Brandschutz 30 · Swimmingpool 29 · Rasenpflege 28 · Warmwasser 24 · Klimamessung 22 · Thermostate 11. Wohnen : Lampen 67 · LED-Lampen 64 · Luftreiniger, Viren & Ionisatoren 35 · Rollläden, Jalousien & Vorhänge 32 · Raumerfrischer & Düfte 24. Elektronik : Netzwerk 85 · Batterien & Ladegeräte 57 · Wecker 33.

### 1.3 Comment la longue traîne se rattache à une tête [M]

| Type de page | Exemples réels (slug) | Combien (sitemap ou groupe) | Comment on y arrive |
|---|---|---|---|
| Marque + produit | `/roborock-saugroboter/`, `/philips-heissluftfritteuse/`, `/dyson-staubsauger/` | ≥ 188 pour 20 marques testées [I dach.md] ; 28 des 82 pages de « Reinigungsgeräte » | Puces sous le H1, liste A–Z du groupe, **autocomplétion** de la recherche |
| Budget | `/kaffeevollautomat-bis-500-euro/`, `/staubsauger-unter-100-euro/`, `/staubsauger-unter-50-euro/` | `bis-N-euro` 63 · `unter-N-euro` 16 | Puces, A–Z |
| Taille ou puissance | `/heissluftfritteuse-12-liter/`, `heizluefter-mit-2000-watt`, `klimaanlage-12000-btu`, `mikrowelle-25-liter` | ≈ 10 par famille d'appareils | Puces (« Heizlüfter mit 500 / 2000 / 3000 Watt ») |
| Fonction « mit / ohne » | `heissluftfritteuse-mit-drehkorb`, `staubsauger-ohne-beutel`, `maehroboter-ohne-begrenzungskabel` | `-mit-` 358 · `-ohne-` 64 | Puces, bloc « Ähnliche Tests und Vergleiche » |
| Usage, foyer, pièce | `heissluftfritteuse-fuer-4-personen`, `tierhaarstaubsauger`, `allergiker-staubsauger`, `bad-heizluefter` | `-fuer-` 103 | Puces, A–Z |
| Forme ou technologie | `mini-fritteuse`, `turmventilator`, `keramik-heizluefter`, `mobile-split-klimaanlage` | — | Puces |
| Duel « vs / oder » | — | **2** | — |
| Pannes, retours d'expérience | — | ≈ 3 / 0 [I dach.md] | — |

Exemple de famille complète, le groupe **Frittieren (24 pages)** : Heißluftfritteuse (tête) ; 12 Liter, 7 Liter, XXL, 2 Fächer, für 4 Personen, klein, mit Drehkorb, mit Grillfunktion ; Philips-, Tefal-, Klarstein-Heißluftfritteuse ; Aigostar-, De'Longhi-, Moulinex-, Princess-, Tefal-, Tristar-Fritteuse ; Doppelfritteuse, Kaltzonen-Fritteuse, Mini-Fritteuse, Fritteuse, Frittiertopf, Frittieröl.
Exemple « Reinigungsgeräte » (82 pages) : 28 pages de marque, plus des déclinaisons par caractéristique (« Staubsauger 800/900 Watt », « mit Beutel », « ohne Beutel », « mit HEPA-Filter », « Leichter », « Leiser », « unter 50/100 Euro », « Tierhaare »).

### 1.4 Correspondance avec les catégories Homenura (`lib/catalog/categories.ts`, 61 catégories) [M][I]

| Rubrique Homenura (libellé DE) | Où vergleich.org les range | Nombre de pages de la famille chez vergleich.org (motif de slug dans le sitemap, approximatif) |
|---|---|---|
| Smarte Küche (14 catégories, 6 indexées) | Haushalt : Frittieren, Kaffeekocher, Küchenkleingeräte, Mikrowellen & Küchenmaschinen, Kühlgeräte, Entsafter, Mixer, Öfen ; Baumarkt : Anschlussdosen (prises) | fritteuse 22 · kaffee* 54 · mikrowelle 41 · kühlschrank 62 · backofen/dampfgarer 38 · steckdose 47 · küchenwaage 6 · standmixer 11 · entsafter 7 · brotback 5 · sous-vide 1 · multikocher/kochfunktion 3 |
| Energie & Smart Home (11) | Baumarkt : Thermostate, Messtechnik ; Wohnen : Lampen, Rollläden ; Auto : Wallbox | thermostat 13 · wallbox/ladestation 24 · rollladen/jalousie 16 · balkonkraftwerk/solar 8 · strommessung 2 · powerstation/speicher 2 · smart-home-* 7 |
| Haussicherheit (10) | Baumarkt : Elektronische Überwachung, Brandschutz, Einbruchschutz, Panzerschränke | kamera* 98 (toutes caméras) · bewegungs-/präsenzmelder 17 · rauchmelder/CO 14 · sprechanlage 12 · schlüsselfinder/GPS 11 · klingel 10 · alarmanlage 9 · tresor 7 · türschloss 5 |
| Komfort & Luft (10) | Baumarkt : Heizen, Mobile Heizgeräte, Kühlen, Klimamessung ; Wohnen : Luftreiniger, Düfte ; Elektronik : Wecker | heiz* 56 · ventilator 32 · luftreiniger 16 · klima 15 · luftentfeuchter 10 · wetterstation 10 · luftbefeuchter 9 · lichtwecker 6 |
| Reinigung & Haushalt (8) | Haushalt : Reinigungsgeräte, Bodenreinigung, Bügeln, Geschirr reinigen, Waschen & Trocknen | waschmaschine/trockner 100 · bügel 51 · geschirrspüler 44 · akku-/stabstaubsauger 14 · saugroboter 13 · dampfreiniger 5 · fensterputz 5 |
| Garten & Outdoor (8) | Baumarkt : Rasen- & Gartengeräte, Gartenbewässerung, Poolpflege, Grillen | grill 156 · bewässerung 20 · mähroboter 9 · außenleuchte/solar 8 · poolroboter 7 · garagentor 5 |

À retenir : là où Homenura a **une** page catégorie, vergleich.org a **10 à 150** pages. Mais elles sont rangées par famille d'outils, pas par besoin. Personne n'y trouve « tout ce qui chauffe une pièce » ni « tout ce qui marche avec mon thermostat ».

### 1.5 Catégories que vergleich.org a et que Homenura n'a pas (maison, cuisine, jardin), classées

Ordre : preuve de demande locale d'abord, puis investissement de vergleich.org, saison, commission.

| # | Catégorie (terme DE) | Chez vergleich.org [M] | Preuve locale de demande | Verdict pour Homenura |
|---|---|---|---|---|
| 1 | **Wischsauger / Akku-Saugwischer** | 1 seule page (« Akku-Saugwischer ») ; trou chez eux | Roborock F25 GT, aspirateur laveur sans fil, n° 24 du top 30 « Nettoyage » d'Amazon.de [S M19] ; ventes de robots aspirateurs-laveurs +66,1 % en unités au S1 2026 [L1] | **Créer** (en DE, `aspirateurs-laveurs` désigne un robot) |
| 2 | **Küchenmaschine mit Kochfunktion** (Thermomix, Monsieur Cuisine) | « Küchenmaschine mit Kochfunktion », « Gleitbrett Thermomix » | Indice Trends « Thermomix » ≈ 360 contre 100 pour Kaffeevollautomat [S M21] | **Indexer** `robots-multifonctions` (aujourd'hui `indexable: false`) |
| 3 | **Chauffage d'appoint non connecté** : Heizlüfter, Infrarotheizung, Ölradiator, Konvektor | Heizen 74 + Mobile Heizgeräte 35 ; Heizlüfter avec 15 puces de déclinaison | 11 des 30 meilleures ventes « Chauffage, climat » d'Amazon.de [S M19] ; « Heizlüfter » +25 % sur un an [S M21] | **Élargir** `chauffages-appoint` (titre actuel « Smarte Heizlüfter ») |
| 4 | **Granulat-Luftentfeuchter** (absorbeur sans électricité) | Page dédiée, mise en avant sur l'accueil (« Herbst 2026 ») | 12 des 30 meilleures ventes « Chauffage, climat » d'Amazon.de [S M19] | **Sous-page** de `deshumidificateurs`, de novembre à février |
| 5 | **Mobile Split-Klimaanlage** (Midea PortaSplit) | « Mobile Split-Klimaanlage », « Split 2/3 Innengeräte », « Midea-Klimaanlage » | « mobile Klimaanlage » +219 % [S M21] | Sous-page de `climatiseurs-mobiles`, **prête en avril 2027** |
| 6 | **Vakuumierer** | 5 pages (dont CASO, Allpax, Gastro) | 4 consommables de mise sous vide dans le top 30 « Petit électroménager cuisine » [S M19] | Créer (panier modeste) |
| 7 | **Raclette & Fondue** | Groupe de 17 pages + 11 slugs « raclette » | Pic Trends la semaine de la Saint-Sylvestre [S M21] | Page saisonnière, **avant le 15/12** |
| 8 | **Siebträgermaschine** | 4 pages | +13 % sur un an [S M21] | Annexe de `cafetieres` |
| 9 | Wassersprudler (SodaStream) | Pages Wassersprudler, SodaStream et bouteilles de CO₂ ; 1re entrée « Haushalt » du méga-menu | 2 produits SodaStream dans le top 30 cuisine [S M19] | Optionnel |
| 10 | Jardin hors robot : Akku-Rasenmäher, Rasentrimmer, Laubbläser, Heckenschere, Hochdruckreiniger | Rasen- & Gartengeräte 73 ; slugs : akku-rasenmäher 8, heckenschere 19, rasentrimmer 10, laubbläser 8, hochdruckreiniger 7 | **Non mesurée** (budget de recherche épuisé). Bitkom ne mesure que le robot tondeuse (16 % des Allemands) [L2] | **À mesurer** dans Google Trends DE avant mars 2027 |
| 11 | Barbecues non connectés : Gasgrill, Elektrogrill | Grillen & Barbecue 68 ; 156 slugs « grill » | Non mesurée | À mesurer avant avril 2027 |
| 12 | Brandschutz : Feuerlöscher, Löschdecke | Brandschutz 30 | Non mesurée | Complément possible de `detecteurs-fumee-co` |

À **ne pas** copier : le gros électroménager décliné à l'infini (Waschen & Trocknen 65 pages, Kühlgeräte 75). Le segment recule (−5,1 % au S1 2026 [L1]) et la commission Amazon.de y est de 2,5 % [S L27].

---

## 2. Mots-clés tels qu'ils apparaissent sur les pages

### 2.1 Formules par type de page (titres relevés le 01/11/2026) [M]

| Type de page | `<title>` | H1 / sous-titre | Méta-description |
|---|---|---|---|
| Accueil | « Vergleich.org - Das unabhängige Test- und Vergleichsportal » | « Wir testen und vergleichen die besten Produkte und Dienstleistungen » | « Aktuelle Produkte finden Sie im Vergleich und Test auf ✓ vergleich.org … » |
| Rubrique | « Haushalt Produkte: Alle Tests & Vergleiche im Überblick » | « Haushalt - Alle Tests und Vergleiche » | — |
| Groupe | « Fritteusen: Alle Tests & Vergleiche im Überblick » (le titre emploie le nom du produit, le H1 l'activité) | « Frittieren - Alle Tests und Vergleiche » ; H2 « Die besten Produkte aus der Kategorie Frittieren im Vergleich » | — |
| Tête **testée** (publiée en 2025-2026) | « Heißluftfritteuse Test 2026 – Gesund knusprig genießen » · « Saug-Wisch-Roboter Test 2026 – Effiziente Bodenpflege im Alltag » · « Vakuumierer Test 2026 – Lebensmittel länger frisch halten » · « Akku-Rasenmäher Test 2026 – Kabellos mähen mit Komfort » · « Raclette Test 2026 – … » | « X Test 2026 » + sous-titre bleu « Die besten Airfryer im Vergleich. » | Phrase de bénéfice (« … überzeugten im Test durch Vielseitigkeit und einfache Reinigung ») |
| Tête **ancienne** « Vergleich » | « Luftreiniger Test & Vergleich » Top 25 im November 2026 » · « Heizlüfter Test & Vergleich » Top 20 im November 2026 » (nombre et mois mis à jour automatiquement) | « Heizlüfter Vergleich 2026 » + « Die besten Schnellheizer im Überblick. » | « ➤ Aktueller und unabhängiger X Test bzw. Vergleich 2026 inkl. ✓ Vergleichssieger, ✓ Preis-Leistungs-Sieger uvm. » |
| Déclinaison | « Top 10 Philips-Heißluftfritteusen Test & Vergleich » · « Kaffeevollautomaten bis 500€: Top 10 Test & Vergleich » · « Heißluftfritteuse 4 Personen: Top 10 Test & Vergleich » · « Roborock Saugroboter: Top 10 … » | « Philips-Heißluftfritteuse Vergleich 2026 » · « Roborock-Saugroboter Vergleich 2026 » + « Die besten Roborock-Saugwischer im Vergleich. » | « llll➤ Aktueller und unabhängiger Kaffeevollautomat bis 500 Euro Test bzw. Vergleich 2026 inkl. ✓ Vergleichssieger … ➤ Jetzt vergleichen! » |
| Page thématique (Themenwelt) | « Die besten Black-Friday-Deals für die Reinigung – Vergleich.org » | « Die besten Black-Friday-Angebote 2026 rund ums Reinigen » | — |

Constante : le mot « Test » reste dans le `<title>` **même quand le H1 dit « Vergleich »**. C'est leur réponse à l'arrêt OLG Köln 6 U 136/19, et elle reste une zone de risque [I dach.md § 3.9]. Homenura ne copie pas ce point.

### 2.2 Où se placent les variantes de mots-clés [M]
- **Sous-titre H2 bleu** sous le H1 : le synonyme ou l'angle (« Airfryer » sous « Heißluftfritteuse » ; « Schnellheizer » sous « Heizlüfter » ; « Saugwischer » sous « Saugroboter »).
- **H2 fixes du gabarit « Vergleich »** : « Die besten X : Wählen Sie Ihren persönlichen Testsieger aus der Bestenliste. » · « X-Kaufberatung : So wählen Sie das richtige Produkt aus dem obigen X Test oder Vergleich » · « Zusammenfassung : Die besten X in aller Kürze. » · « Ausverkaufte X : Empfehlenswert und bald wieder verfügbar. »
- **Kaufberatung numérotée** (page airfryer) : 1. « Wie funktioniert … ? » · 2. « Schublade(n), transparenter Deckel oder Drehkorb » · 3. « Wie groß muss … sein ? » · 4. Ausstattung · 5. « Leistung … Energieverbrauch » · 6. Reinigung · 7. **FAQ 7.1–7.8** : « Heißluftfritteuse vs. Backofen », « Unterschied zwischen Airfryer und Heißluftfritteuse », « besser als eine normale Fritteuse », « Hersteller und Marken », « Wie gesund … », « Tiefkühlprodukte », « Was darf man nicht im Airfryer machen ? », « Welche … empfiehlt die Stiftung Warentest ? ».
- **Textes d'ancre** : le nom exact de la page cible (« Heißluftfritteuse 7 Liter », « Bad-Heizlüfter »), « zum Mini-Fritteuse Vergleich », « Jetzt vergleichen » et « Zum Vergleich » sur les cartes « Ähnliche Tests und Vergleiche », « Zum Testbericht ↴ » (ancre interne), « Zum Angebot » » (bouton marchand), « Preisvergleich ».
- **Déclinaisons à questions copiées** : sur « Kaffeevollautomat bis 500 Euro », la Kaufberatung reprend la même grille partout (« 1. Welche X sind in Tests im Internet besonders beliebt ? », « 2. Welche Ausstattungsmerkmale sollte ein X noch haben ? », « 3. Was macht einen X besonders komfortabel ? »).
- **Erreurs de contenu** sur cette même page : la liste « Kaffeevollautomat bis 500 Euro » contient la De'Longhi La Specialista Arte et la Ninja Luxe Premier, deux machines à porte-filtre et non des machines automatiques (connaissance générale) [M]. C'est le prix des pages produites en masse.

### 2.3 Ce que Homenura /de écrit aujourd'hui (mêmes types de page) [M]

| Page Homenura | `<title>` | H1 | Remarque |
|---|---|---|---|
| Accueil /de | « Home Nura \| Das Smart Home, von Europa bis Nordamerika » | « Die besten Smart Airfryer im Vergleich 2026 » | Aucun mot-clé dans le titre ; « Smart Airfryer » n'est pas le mot cherché (« Airfryer » ou « Heißluftfritteuse » [S M21]) ; date du 9 octobre |
| Rubrique /de/entretien-maison | « Reinigung & Haushalt \| Home Nura » | « Reinigung & Haushalt » | Le menu l'appelle « Haushaltsgeräte » ; les cartes disent « **Tests** smarter Geschirrspüler » (mot « Test » à proscrire) |
| Catégorie /de/entretien-maison/aspirateurs-robots | « Saugroboter Vergleich 2026: Die 3 besten mit Absaugstation » | « Saugroboter Vergleich 2026: Die besten Modelle von Roborock und Dreame » | Bonne formule. Sous-titre en minuscules (« — reinigung & haushalt ») ; intro générique (« DSGVO-Konformität, Matter-Unterstützung ») ; titre H2 « Weitere Kategorien im selben **Silo** » (jargon interne) |
| Guide /de/guides/airfryers | « Heißluftfritteuse Vergleich 2026: Die 3 besten Airfryer » | « Heißluftfritteuse Vergleich 2026: Die besten Airfryer im Überblick » | Bonne formule. Fautes : « Unseres Finales Urteil », « Lautstärkenpegel Überlegungen » ; `/de/cuisine-connectee/airfryers` et `/de/guides` pointent vers lui (balise canonique correcte) |

---

## 3. Parcours

### 3.1 Parcours 1 — Google → page de tête testée, ordinateur : `/heissluftfritteuse/` [M]

| Étape | Ce que voit le visiteur (capture décrite) | Position |
|---|---|---|
| 1. Arrivée | Bandeau noir de transparence (« Unsere Redaktion vergleicht alle Produkte unabhängig … Vergütung … Mehr Infos »). En-tête : logo, « Kategorien », recherche. Fil d'Ariane « Tests & Vergleiche / Haushalt / Frittieren / Heißluftfritteuse Test 2026 » | 0 px |
| 2. Premier écran | H1 « Heißluftfritteuse Test 2026 », sous-titre bleu « Die besten Airfryer im Vergleich. ». Grande photo de laboratoire (9 appareils, logo du site visible). À droite, **sommaire collant** « Inhaltsverzeichnis » : Vergleichstabelle · Testergebnisse 1–3 (noms des modèles) · Kaufratgeber 1–3 + « mehr anzeigen » · Kommentare. Mention « Zuletzt aktualisiert : 29.10.2026 » | 0–860 px |
| 3. Choix rapides | « Schnellüberblick : Unsere Produkttests » : 3 cartes **TESTSIEGER** Ninja Foodi AG301EU · **EINSTEIGER-TIPP** Cosori Turbo Blaze · **ALLROUNDER** Tefal ActiFry Genius XL. Chacune a une photo, des étoiles, le nombre d'avis et une flèche ↴ vers le compte rendu | ≈ 900 px |
| 4. Confiance | Auteur « Von : Maria Lengemann – Redakteurin – schreibt über Frittieren – Lektorin : Kerstin Herbergs ». Encadré « Die neuesten Updates » (16.02.2026, 30.10.2025). Intro avec fourchette de prix (« 100 bis 300 Euro »). Encadré « So wurde getestet » | 1 000–1 700 px |
| 5. 1er bouton marchand | Carte TESTSIEGER : « Zum Testbericht ↴ » (bleu) + **« Zum Angebot » »** (vert) | ≈ 1 760 px |
| 6. Tableau | « Vergleichstabelle Heißluftfritteuse » + note de méthode. Barre « Aktualisiert : 01.11.2026 \| 1 - 8 von 14 \| Produkte filtern \| partage \| ‹ › ». Filtres : Preis in EUR · Hersteller · Kundenwertung · Sortieren nach · « Alle Filter zurücksetzen » | ≈ 2 450 px |
| 7. Colonnes | 1 KLAMER (**Highlight / Anzeige**) · 2 Tefal Dual Easy Fry (**Highlight / Anzeige**) · 3 Philips Airfryer 4000 (**Vergleichssieger**) · 4 Ninja Foodi MAX · 5 Cosori CAF-R903 (**Highlight / Anzeige**, Neu) · 6 Cosori Turbo Blaze (**Preis-Leistungs-Sieger**, Neu) · 7 Ninja Double Stack XL · 8 Ninja DZ400 (Neu). Le Testsieger du haut (Ninja AG301EU) n'est pas dans ces 8 colonnes : **deux « gagnants » différents sur la même page** | — |
| 8. Lignes | Vergleichsergebnis (« SEHR GUT 10/2026 » ou « HIGHLIGHT ») · Kundenwertung bei Amazon · **Erhältlich bei** : Amazon dans toutes les colonnes, plus OTTO, eBay, Tefal, Philips, SharkNinja, Cosori, JACOB, Coolblue, Proshop, Playox, « 50 % Rabatt », « Auch gebraucht bei eBay erhältlich » · Preisvergleich · Zahlbar in Raten · Nachhaltiges Produkt · caractéristiques · Vorteile · Herstellergarantie · Lieferzeit · **Zum Angebot** ». La 1re colonne reste fixe pendant le défilement horizontal ; la ligne des produits (vignettes et badges) reste collée en haut au défilement vertical | 2 450–4 300 px |
| 9. Sous le tableau | Menu déroulant « Ähnliche Vergleiche » ; astuce « vergleich.org als bevorzugte Quelle einrichten » | ≈ 4 300 px |
| 10. Comptes rendus | Un compte rendu par modèle avec photos de laboratoire (carrousel), bouton « Zum Angebot » répété | — |
| 11. Kaufberatung + FAQ 7.1–7.8 + vidéos | Voir § 2.2 | — |
| 12. Sources | « Quellenverzeichnis » : test.de, bzfe.de, verbraucherzentrale.de, tuev-verband.de, apotheken-umschau.de | — |
| 13. Suite du parcours | « Ähnliche Tests und Vergleiche - Frittieren » : 11 cartes (Drehkorb, Philips, 4 Personen, Frittieröl, 7 L, 12 L, Klarstein, Tefal, Grillfunktion, Tefal-Fritteuse, 2 Fächer) avec « Jetzt vergleichen » ; « Weitere Portale » (meilleurs.fr, miglioreconsiglio.it, mejoraelige.es, pickbest.co.uk, bestpick.com) | page de ≈ 33 900 px |

**Boutons marchands** [M] : 11 boutons « Zum Angebot » », tous des `<button>` **sans lien dans le code**. Leur emplacement est noté : 3 `test-summary` (cartes du haut), 5 `offers-btn` (tableau), 3 `test-impression` (comptes rendus). Le lien affilié n'est créé qu'au clic : rien d'affilié n'est exploré par Google, et chaque emplacement est mesuré.

### 3.2 Parcours 2 — accueil → produit, ordinateur [M]

1. **Accueil** : grande recherche « z. B. Handmixer, Matratzen, Bluetooth-Kopfhörer » + « Beliebte Suchbegriffe : Heißluftfritteuse, Brennholz, Ganzjahresreifen, Haartrockner, Drucker » (termes de saison). Trois promesses : « Qualität und Preis-Leistung », « Immer aktuell — spätestens nach 120 Tagen », « Neutral und unabhängig ».
2. Plus bas : **« Ausgezeichnete Produkte »**, 4 cartes de badges (Empfehlung, Vergleichssieger, Preis-Leistungs-Sieger) **marquées « - Anzeige - »** ; « Mit drei bewährten Methoden », qui explique que les tableaux portent « Vergleich » et les comptes rendus « Test » ; « Unsere Ziele », qui explique l'affiliation (« über 300.000 Produkte in über 20.000 Kategorien ») ; « Tests, Tipps und aktuelle Themen im Herbst 2026 » (Sportuhr, Teleskop, Zuckerwattemaschine, Granulat-Luftentfeuchter) ; revue de presse ; **« Beliebte Vergleiche im Überblick »** (12 tuiles × 10 liens).
3. **Saisie « Saugrob »** (sans valider) : l'**autocomplétion** propose directement 9 pages avec vignette : Ecovacs-, Eufy-, Günstiger, Lefant-, Medion-, Roborock-, Rowenta, Samsung-, Yeedi-Saugroboter. On passe de l'accueil au comparatif **en 2 gestes**.
4. **Page de marque `/roborock-saugroboter/`** (gabarit « Vergleich ») : fil d'Ariane Haushalt / Reinigungsgeräte ; H1 + « Die besten Roborock-Saugwischer im Vergleich. » ; auteur « Sabine Haag, Expertin » et rédactrice ; intro de 2 paragraphes qui conclut sur un modèle (« Überzeugt hat uns hier im Oktober 2026 besonders das Modell Roborock Saros 20* »). À droite : **« Fakten zum Vergleich »** (101 produits recherchés, 14 vérifiés, 85 heures, 21 940 lecteurs convaincus) et une **carte « Highlight / Anzeige »** avec « Details ansehen ».
5. **Rangée de puces** (déclinaisons sœurs) : iRobot, Samsung-, Rowenta, ZACO-, Ecovacs-, Medion-, Eufy-, Roborock-, Lefant-Saugroboter, Saug-Wisch-Roboter, Staubsauger-Roboter.
6. **Tableau dans le premier écran** (y ≈ 760 px) : « Aktualisiert : 31.10.2026 », 1–8 de 14. Les colonnes 1, 2 et 5 sont des annonces. Encart « amazon DEAL – 37 % Rabatt – **Endet in : 16:36:55** » (compte à rebours). Marchands : Amazon, cyberport, eBay « Preis prüfen », boutique Roborock ; « Ratenzahlung » sur toutes les colonnes.
- Variante par le menu : Kategorien → Haushalt (20 favoris) → « weitere Haushalt Vergleiche » → `/haushalt/` → tuile « Frittieren » → liste A–Z → page. Soit **4 à 5 clics**. La recherche est le chemin court.

### 3.3 Parcours 3 — Google → page de tête, mobile (rendu CSS à 390 px) et gabarit « Vergleich » [M]

- **`/heissluftfritteuse/` à 390 px** : le bandeau de transparence occupe 3 lignes ; logo, menu et loupe ; H1 sur 2 lignes et sous-titre ; photo ; date. Les 3 choix rapides s'empilent (photo, badge, nom, étoiles, ↴). Le sommaire n'est plus collant : il passe dans le texte après l'auteur. Puis le journal des mises à jour et l'intro. **Tableau à y ≈ 4 440 px**, soit environ 5,4 écrans. Seules **2 colonnes** se voient, colonne des libellés fixée à gauche, flèches pour défiler. **Les deux colonnes visibles sont les deux annonces « Highlight »** : le Vergleichssieger, 3e colonne, est hors de l'écran. Les quatre filtres sont tassés en petits menus. La ligne des produits avec vignettes reste collée en haut au défilement.
- Réserves : le code de la page contient un indicateur `isMobile`, donc le vrai mobile est peut-être assemblé différemment [H]. La balise viewport contient `maximum-scale=1, user-scalable=no`, ce qui **empêche de zoomer** (défaut d'accessibilité). La page `/heizluefter/` pèse **1,29 Mo de HTML**.
- **Gabarit « Vergleich » sur ordinateur (`/heizluefter/`)** : fil d'Ariane Baumarkt / Mobile Heizgeräte ; intro qui **tranche dès les premières lignes**, avec un prix d'entrée (« bereits für etwa 40 Euro ») et une mise en garde d'usage (salle de bains) ; « Fakten zum Vergleich » avec **les mêmes 101 / 14 / 85 que sur la page Roborock** (chiffres de gabarit ?) ; carte « Highlight / Anzeige » ; **15 puces** (Konvektoren, Heizkanonen, Mini-, Bad-, Steckdosen-, Keramik-Heizlüfter, mit Fernbedienung, 500 / 2000 / 3000 Watt…) ; tableau au premier écran, prix du jour.
- **Règle de classement publiée** (lien « Informationen zur Produktsortierung und Bewertung » sous le tableau, qui ouvre « Wie wir arbeiten ») : pour les comparatifs, **Nutzerinteresse** (taux de clic, « hohe Gewichtung »), **Nutzererfahrungen** (avis des boutiques, « hohe ») et **Preis** (« sehr hohe Gewichtung … attraktive Angebote der verlinkten Online-Shops bevorzugt ») ; pour les tests, s'ajoute **Eigenschaften** (« sehr hohe »). Les notes sont converties en appréciation scolaire (« sehr gut »). Les annonces « Anzeige / Highlight » sont vendues aux marques (« Sponsored Products »).

### 3.4 Les mêmes parcours sur Homenura /de (ordinateur) [M]

| Étape | vergleich.org | Homenura /de | Écart |
|---|---|---|---|
| Accueil : trouver un produit | Recherche avec autocomplétion vers les pages, 12 rubriques et 120 liens « Beliebte Vergleiche », termes de saison | H1 « Die besten Smart Airfryer » ; boutons « Unsere Top 3 ansehen » et « Meine Heißluftfritteuse in 1 Min. finden » ; bloc Black Friday avec puces ; 27 liens « Auf Amazon ansehen » (tous airfryer) | Homenura n'expose pas ses 61 catégories depuis l'accueil |
| Menu | Méga-menu : 12 rubriques → 20 comparatifs chacune | « Ratgeber » → guide airfryer · « Vergleich » → `/de/comparateur` (airfryer) · « Smarte Küche » · « Smart Home » → 5 rubriques **sans catégories** · Quiz · Blog | 3 entrées sur 6 mènent à l'airfryer ; rubrique → catégorie = 2 clics, sans aperçu |
| Rubrique | Tuiles de 10 liens + « Mehr » | 8 cartes numérotées avec descriptif de marques, encart Black Friday, « Zur Methodik », FAQ | Correct ; libellés incohérents (« Haushaltsgeräte » contre « Reinigung & Haushalt », « Garten & outdoor ») |
| Arrivée sur une catégorie | H1 + synonyme, date, auteur, 3 choix ou tableau dans les 1 à 3 premiers écrans, sommaire collant | H1 bon, sous-titre en minuscules, intro générique, auteur, date du 30/10, grande photo, **3 choix à y ≈ 1 450 px** (« Beste Wahl insgesamt », « Bestes Preis-Leistungs-Verhältnis »…) | Pas de tableau, pas de filtre, pas de sommaire, **pas de puces de déclinaison** ; page de ≈ 1 000 mots (≈ 5 000 px) |
| Boutons | « Zum Angebot » » vers 3 à 9 marchands + « Preisvergleich » | « Bei Amazon ansehen → » / « Auf Amazon ansehen », vers amazon.fr (Global Earning) | Un seul marchand |
| Tableau | 8 à 14 produits, filtres, colonne fixe, en-tête collant | Guide airfryer : tableau de 9 lignes (# · Produkt · Nura Score · Kapazität · Ideal für · Aktion) à **y ≈ 16 200 px sur 19 600** ; 2 produits sans image ; aucun filtre ; « Nura Score x/10 » sans paramètres affichés | Tableau trop bas, note non expliquée |
| Confiance | Auteur et relectrice, journal daté, « So wurde getestet », bibliographie, labo | Auteur (Jonas Weber), date, encadré « Unabhängige Tests anderer Prüfstellen » (test.de, chip.de, oekotest.de), FAQ propre à la catégorie (5 questions) | **Atout Homenura** : sources tierces liées en tête de page, sans faux test |
| Suite du parcours | Puces, 11 cartes « Ähnliche Tests und Vergleiche », menu déroulant | « Unsere Kaufratgeber » (5 guides, **dont 2 quasi identiques sur les poils d'animaux**), « Weitere Kategorien im selben Silo » | Pas de déclinaison ; cannibalisation |
| Saison | Pages thématiques Black Friday par rubrique | Black Friday sur l'accueil, la rubrique et la catégorie (renvoi vers `/de/black-friday/...`) | **À égalité, voire mieux** |

**Distance jusqu'au premier bouton marchand et au tableau** (ordinateur, écran de 864 px de haut) [M] :

| Page | 1er bouton marchand | Tableau | Hauteur de la page |
|---|---|---|---|
| vergleich.org `/heissluftfritteuse/` (tête testée) | ≈ 1 760 px (2e écran) | ≈ 2 450 px (3e écran) | ≈ 33 900 px |
| vergleich.org `/roborock-saugroboter/` (déclinaison) | annonce dès le 1er écran | ≈ 760 px (1er écran) | ≈ 31 800 px |
| Homenura `/de/entretien-maison/aspirateurs-robots` | ≈ 1 450 px (2e écran) | aucun | ≈ 5 000 px |
| Homenura `/de/guides/airfryers` | ≈ 3 300 px (4e écran) | ≈ 16 200 px (19e écran) | ≈ 19 600 px |

Depuis l'accueil, il faut 2 gestes chez vergleich.org (saisie, puis suggestion) et 2 clics chez Homenura (rubrique, puis catégorie), mais **seulement si l'on sait que le produit est rangé sous « Smart Home »**.

---

## 4. Ce que Homenura doit adapter

### 4.1 Les 5 changements à faire d'abord

| # | Changement | Pourquoi (preuve) | Comment (concret) | Mesure du succès |
|---|---|---|---|---|
| 1 | **Gabarit de catégorie « réponse d'abord » avec tableau haut** | Chez vergleich.org, le tableau est au 1er écran (déclinaisons) ou au 3e (têtes testées) ; chez Homenura, il est absent des catégories et au 19e écran du guide [M] | Sous le H1 : sous-titre synonyme (« Die besten Airfryer im Vergleich »), date et auteur sur une ligne, **3 choix** (déjà là), puis un **tableau de 6 à 10 produits avant le 3e écran** : 1re colonne fixe, en-tête collant, 3 filtres simples (budget, marque, taille), libellés de critères en clair. Sommaire collant sur ordinateur, en ligne sur mobile ; journal « Neueste Updates ». Le guide long passe sous le tableau | Clics vers les marchands par visite de catégorie (`/api/click` avec l'emplacement : `picks`, `table`, `body`) ; tableau visible en moins de 2 écrans sur mobile |
| 2 | **Rangée de puces + vraies pages de déclinaison** | Le moteur de vergleich.org : 358 « mit », 103 « für », 63 « bis N Euro », pages de marque ; puces sous le H1 et autocomplétion [M]. Ses trous : Airfryer/Ninja, Wischsauger, « ohne Abo », « mit Speicher » [S][I dach.md] | Commencer par 3 catégories /de : **Airfryer** (Ninja, Philips, Doppelkammer, XXL, für 4 Personen, bis 100 Euro), **Saugroboter** (mit Wischfunktion, für Tierhaare — fusionner les 2 guides doublons —, bis 300 Euro, Roborock, Dreame), **Kaffeevollautomat** (bis 500 Euro, Philips, De'Longhi, mit Milchbehälter). Publier une page seulement si elle compte **≥ 5 produits distincts** et un texte propre (règle déjà décidée) | Pages indexées et clics Search Console par déclinaison ; aucune page à moins de 5 produits |
| 3 | **Navigation à plusieurs catégories** : méga-menu, accueil /de, recherche | Accueil, « Ratgeber » et « Vergleich » mènent à l'airfryer ; menu Smart Home sans catégories [M]. 48 % des Allemands utilisent la maison connectée, surtout éclairage (38 %), thermostats (35 %), prises (35 %), robots aspirateurs (24 %) [L2] : une **rubrique Smart Home** a un public, et vergleich.org n'en a pas | Menu : 6 rubriques avec leurs catégories visibles (6 à 14 liens chacune) et 1 lien « Alle Vergleiche ». « Ratgeber » vers un vrai index. Accueil /de : titre avec mot-clé (« Vergleich 2026 : Airfryer, Saugroboter, Smart Home »), bloc « Beliebte Vergleiche » saisonnier (novembre : Airfryer, Saugroboter, Heizlüfter, Luftentfeuchter, Kaffeevollautomat [S M19][S M21]). **Autocomplétion de la recherche vers les pages catégorie et déclinaison.** Libellés harmonisés (« Haushaltsgeräte » partout ou « Reinigung & Haushalt » partout, « Garten & Outdoor ») ; « Silo » retiré | Part des visites qui voient une 2e catégorie ; clics depuis l'accueil /de |
| 4 | **Ajouter les catégories qui manquent, avec preuve locale** (§ 1.5) | Amazon.de : un aspirateur laveur sans fil, 11 appareils de chauffage et 12 absorbeurs sans électricité dans les tops 30 [S M19] ; Trends : Heizlüfter +25 %, mobile Klimaanlage +219 % [S M21] | Dans l'ordre : **Wischsauger** ; indexer **Küchenmaschine mit Kochfunktion** (Thermomix vs Monsieur Cuisine) ; élargir **Heizen** (Heizlüfter, Infrarotheizung, Ölradiator, Konvektor : retirer « Smarte » du titre) ; **Granulat-Luftentfeuchter** (novembre) ; **Raclette** (avant le 15/12) ; **mobile Split-Klimaanlage** (avril) ; Vakuumierer. Mesurer le jardin hors robot et le barbecue au gaz dans Trends avant de les créer | Impressions et clics DE sur ces pages d'ici fin janvier |
| 5 | **Encadré multi-marchands + classement transparent, sans annonces avant notre choix** | vergleich.org affiche Amazon, OTTO, eBay et des boutiques de marque ; OTTO paie 7 % sur l'électroménager et 12 % sur Home & Living, cookie de 30 jours (éditeur de contenu) [L3], contre 5 % / 3 % / 2,5 % chez Amazon.de [S L27]. Son classement repose sur le taux de clic et le prix [M] ; le § 5b UWG impose d'indiquer les paramètres principaux d'un classement et leur poids [L4] | Dès l'acceptation d'OTTO (Awin) : 2e bouton « Bei OTTO ansehen » dans les 3 choix et le tableau, sans prix tant que le flux n'est pas légal. Page « So vergleichen wir » listant **nos** critères et leur poids (efficacité, consommation, pièces et réparabilité, avis des testeurs tiers, prix), liée depuis chaque tableau et depuis le « Nura Score » ; **jamais** le taux de clic ni la commission comme critère ; pas d'emplacement payant avant le choix éditorial | Commission moyenne par clic ; part des clics OTTO ; zéro réclamation |

### 4.2 Les autres changements, classés
6. **Synonyme dans le sous-titre et FAQ « vs »** sur chaque catégorie /de : « Airfryer » sous « Heißluftfritteuse », « Saugwischer », « Schnellheizer », plus une FAQ « X vs. Y » et « Was sagt die Stiftung Warentest ? » avec lien daté [M][I dach.md].
7. **Intro qui tranche** (modèle `/heizluefter/`) : verdict, prix d'entrée, piège d'usage en 2 ou 3 phrases, à la place de l'intro commune (« DSGVO, Matter… ») [M].
8. **Suivi des clics par emplacement** comme vergleich.org (`picks`, `table`, `card`, `body`, `sticky`) puis essais A/B des libellés (« Bei Amazon ansehen » contre « Preis bei Amazon prüfen ») [M][I STRATEGIE § 7].
9. **Bloc « Ähnliche Vergleiche »** en bas de page : 6 à 12 cartes de la même famille (déclinaisons, duels, pannes) au lieu de « Weitere Kategorien im selben Silo ».
10. **Pages « Themenwelt » plus riches que les leurs** : « Stromausfall vorbereiten » (Powerstation : +50 % [S M21]), « Silvester Raclette », « Heizkosten sparen » (Heizlüfter, Thermostate), toutes reliées aux comparatifs.
11. **Nettoyage du /de** : « Tests smarter Geschirrspüler » → « Vergleich » ; « Unseres Finales Urteil » → « Unser Fazit » ; sous-titres en minuscules ; images manquantes dans le tableau airfryer ; date de l'accueil (9 octobre).
12. **Mobile** : vérifier sur un vrai téléphone que les 3 choix et le tableau apparaissent avant le 3e écran. Homenura interdit l'affichage en cadre, ce que je n'ai pas pu contourner (cf. limites).

### 4.3 Gabarit cible d'une page catégorie /de (ordre des blocs)

Ce qui est repris de vergleich.org est marqué (V) ; ce qu'Homenura a déjà et garde est marqué (H).
1. Fil d'Ariane avec les vrais libellés de rubrique (V).
2. H1 « [Mot-clé local] Vergleich 2026 : [promesse] » + sous-titre synonyme (V) ; une ligne « Aktualisiert am … · Von [auteur] · Methode » (V/H).
3. **Réponse rapide** de 40 à 70 mots : verdict, prix d'entrée, piège d'usage (V, format SEO-PLAN § 3).
4. **Puces de déclinaison** : marque, budget, taille, usage, « mit / ohne », duels, pannes. Seulement les pages qui existent (V).
5. **3 choix** (« Unsere Wahl », « Preis-Leistung », « Günstig ») avec Amazon et OTTO, et une flèche vers le détail (V/H).
6. **Tableau de 6 à 10 produits** avant le 3e écran : filtres, 1re colonne fixe, en-tête collant, critères et lien « So vergleichen wir » (V, sans annonces ni prix tant que l'API manque).
7. Encadré « Unabhängige Tests » : Stiftung Warentest, CHIP, ÖKO-TEST, VKI, Kassensturz, cités et datés (H : notre point fort).
8. Fiches produit courtes : points forts et faibles, pour qui, sources (V/H).
9. Kaufberatung numérotée et FAQ « vs », « Stiftung Warentest », « Stromverbrauch », « Probleme » (V/H).
10. Journal « Neueste Updates » et liste des sources (V).
11. « Ähnliche Vergleiche » : 6 à 12 cartes de la même famille (V).
Sommaire collant à droite sur ordinateur, sommaire repliable sur mobile (V). Mention Amazon et OTTO près du premier bouton (H).

### 4.4 Calendrier proposé (à valider)

| Quand | Quoi |
|---|---|
| Avant le 15/11 | N° 1 (gabarit) sur Airfryer, Saugroboter, Kaffeevollautomat, Heizlüfter ; n° 3 (menu, accueil /de, libellés) |
| Avant le 27/11 (Black Friday) | Puces et 6 à 8 déclinaisons Airfryer et Saugroboter ; Wischsauger ; Heizen élargi ; Granulat-Luftentfeuchter |
| Avant le 15/12 | Raclette ; Küchenmaschine mit Kochfunktion indexée ; page « So vergleichen wir » ; OTTO si le compte est accepté |
| Janvier–février 2027 | Vakuumierer, Siebträgermaschine ; mesure Trends du jardin hors robot et des barbecues |
| Avant avril 2027 | Mobile Split-Klimaanlage ; jardin (si la demande est confirmée) |

### 4.5 À éviter (vu chez vergleich.org)

| Pratique | Où [M] | Risque | Règle Homenura |
|---|---|---|---|
| « Test » dans le `<title>` et « Testsieger » dans un H2 sur des pages sans test | Gabarit « Vergleich », méta « Test bzw. Vergleich » | Concurrence déloyale (OLG Köln 6 U 136/19 ; LG Berlin II 15 O 277/25 sur un label « Testsieger ») [I dach.md § 3.9] | « Vergleich », « Kaufberatung » ; « Testsieger laut Stiftung Warentest (Heft MM/AAAA) » seulement en citation datée et liée |
| Annonces « Highlight » en colonnes 1–2, avant le Vergleichssieger ; sur mobile, seules les annonces sont visibles | Tableaux airfryer, Roborock, Heizlüfter | Confiance, et règles sur la publicité dans un classement (annexe UWG, à faire vérifier) | Aucun emplacement payant avant notre choix ; si un jour il y en a : après, et marqué « Anzeige » |
| Classement par taux de clic et par prix | « Wie wir arbeiten » | Le classement suit ce qui rapporte | Critères produit publiés et pondérés (§ 5b UWG) |
| Deux « gagnants » sur la même page | Testsieger Ninja AG301EU, Vergleichssieger Philips 4000 | Message brouillé | Un seul « Notre choix » par page |
| Compte à rebours « Endet in 16:36:55 », « 50 % Rabatt » | Tableaux | Pression d'achat ; prix et réductions interdits sans API Amazon [I STRATEGIE § 3] | Pas de compte à rebours, pas de prix avant l'API Creators |
| Déclinaisons copiées et produits hors sujet | « Kaffeevollautomat bis 500 Euro » avec 2 machines à porte-filtre | Pages minces (contenu produit en masse) | ≥ 5 produits **conformes** ; questions propres à la page |
| Compteurs identiques d'une page à l'autre (101 / 14 / 85) | Roborock, Heizlüfter | Crédibilité, voire tromperie | Uniquement des chiffres réels et datés |
| Badge « Nachhaltig » sans critère visible | Tableau airfryer | Allégation environnementale vague (à faire vérifier) | Pas de badge vert sans critère publié |
| Zoom bloqué (`user-scalable=no`), 1,29 Mo de HTML | Toutes les pages | Accessibilité, vitesse | Ne pas copier |

---

## 5. Sources

Mesures directes du 01/11/2026 [M] (onglet Chrome personnel, fermé ensuite) :
- vergleich.org, accueil et méga-menu : https://www.vergleich.org/
- 12 rubriques : https://www.vergleich.org/auto/ · /baumarkt/ · /drogerie/ · /elektronik/ · /finanzen/ · /sport/ · /haushalt/ · /kind-und-baby/ · /lebensmittel/ · /mode/ · /service/ · /wohnen/ — et les 511 pages groupe qu'elles listent (ex. https://www.vergleich.org/frittieren/)
- Sitemap : https://www.vergleich.org/sitemap.xml (18 797 URL)
- Comparatifs lus en entier : https://www.vergleich.org/heissluftfritteuse/ (ordinateur et rendu à 390 px) · https://www.vergleich.org/roborock-saugroboter/ (arrivée par l'autocomplétion de l'accueil) · https://www.vergleich.org/heizluefter/ (et la fenêtre de https://www.vergleich.org/wie-wir-arbeiten/)
- Titres, H1 et méta relevés : /philips-heissluftfritteuse/ · /heissluftfritteuse-xxl/ · /heissluftfritteuse-fuer-4-personen/ · /kaffeevollautomat-bis-500-euro/ · /staubsauger-unter-100-euro/ · /tierhaarstaubsauger/ · /luftreiniger/ · /smart-home-heizkoerperthermostat/ · /raclette/ · /mobile-split-klimaanlage/ · /saug-wisch-roboter/ · /akku-rasenmaeher/ · /vakuumierer/ · /staubsauger-roboter/ · /themenwelten/ · /themenwelten/black-friday-angebote-reinigen/ · /smart-home/ (404)
- Homenura : https://homenura.com/de · /de/entretien-maison · /de/entretien-maison/aspirateurs-robots · /de/guides/airfryers · /de/cuisine-connectee/airfryers · /de/guides · /de/comparateur · /de/guides/probleme · /de/black-friday · /de/cuisine-connectee

Pages relues par moi [L] :
- [L1] GFU, marché allemand des biens techniques au S1 2026 (petit électroménager 3,5 Md€, +4,0 % ; gros électroménager 4,4 Md€, −5,1 % ; robots aspirateurs-laveurs +66,1 % en unités ; 7 périodes promotionnelles = 37 % du chiffre annuel en 15 semaines), via Onlinemarktplatz, 26/08/2026 : https://onlinemarktplatz.de/286109/elektronikmarkt-deutschland-2026/
- [L2] Bitkom, « Hälfte nutzt Smart-Home-Geräte », 15/12/2025 (48 % ; éclairage 38 %, thermostats 35 %, prises 35 %, robot aspirateur 24 %, robot tondeuse 16 %, vidéosurveillance 16 %, alarme 10 %, détecteurs de fumée 7 %) : https://www.bitkom.org/Presse/Presseinformation/Haelfte-nutzt-Smart-Home-Geraete
- [L3] OTTO Partnerprogramm (éditeur « Standard », contenu et données produit : Multimedia 2 %, Haushaltselektronik 7 %, Home & Living 12 % ; cookie de 30 jours) : https://www.otto.de/partnerprogramm/
- [L4] § 5b UWG (paramètres principaux d'un classement et leur poids relatif ; garantie de l'origine des avis), gesetze-im-internet.de : https://www.gesetze-im-internet.de/uwg_2004/__5b.html

Sources locales reprises de l'étude sœur `studies/de.md` [S] (mesurées le 01/11/2026, non relues par moi) :
- [S M19] Amazon.de, meilleures ventes : https://www.amazon.de/gp/bestsellers/kitchen · https://www.amazon.de/gp/bestsellers/kitchen/3169321 · https://www.amazon.de/gp/bestsellers/kitchen/3677546031 · https://www.amazon.de/gp/bestsellers/kitchen/3597048031
- [S M21] Google Trends Allemagne, 52 semaines au 31/10/2026 contre les 52 précédentes : https://trends.google.de/trends/explore
- [S L27] Amazon.de PartnerNet, taux de commission : https://partnernet.amazon.de/help/node/topic/GRXPHT8U84RAYDXZ

Documents internes [I] :
- `docs/croissance/STRATEGIE-2026-10.md` (§ 3 règles Amazon, § 7 modèle vergleich.org, § 8 priorité à l'allemand) ; `docs/croissance/SEO-PLAN-2026-10.md` (§ 4.1) ; `docs/croissance/seo-etudes/dach.md` (§ 3 gabarit, sitemap, jurisprudence OLG Köln et LG Berlin II) ; `studies/de.md` (§ 3 et § 5) ; `lib/catalog/categories.ts` (61 catégories, indexation, titres DE).
