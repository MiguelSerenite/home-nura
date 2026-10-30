# Homenura — stratégie revenus (30 octobre 2026)

Objectif n° 1 : plus de visites → plus de clics vers Amazon → plus de ventes.
Revenu mensuel = visites × taux de clic vers Amazon × conversion Amazon × panier moyen × commission.

## 1. Point de départ (mesuré, pas estimé)

| Indicateur | Valeur | Source |
|---|---|---|
| Clics Google, 28 j | 455 (×3 depuis la refonte d'octobre) | Search Console |
| Impressions, 28 j | 52 600 (×4) — CTR 0,9 %, position 9,6 | Search Console |
| Pays (clics) | Italie 136, Allemagne 53, France 41, Espagne 33, Pays-Bas 26, R-U 17, Belgique 17 | Search Console |
| Gains Amazon 2026 | 20,51 € dont 17,93 € en octobre ; 14 ventes, toutes indirectes | Partenaires Amazon |
| Origine des gains | 100 % France | Rapport consolidé Amazon |

Exemple de calcul : 100 000 visites/mois × 8 % de clics vers Amazon × 8 % de conversion × 120 € de panier × 5 % = **≈ 3 800 €/mois**.
Aujourd'hui, Google apporte environ 500 visites par mois. Il faut donc multiplier le trafic, pas seulement l'optimiser. Les leaders comme vergleich.org (4 M de visites par mois, revendu jusqu'à 95 M€) ont gagné par le volume de pages utiles et par leur rythme de mise à jour.

## 2. Fuites de revenus trouvées (en cours de correction)

1. **Liens étrangers non rémunérés** : les pages it/de/es/nl/en envoient vers amazon.it/.de/… avec des identifiants absents du compte Amazon.fr, alors que ces pays font plus de 70 % des clics. Amazon « Global Earning » (inscription automatique en UE) rémunère un lien amazon.fr cliqué depuis n'importe lequel des 10 pays : l'acheteur est redirigé vers sa boutique locale. Les conditions (fiscalité États-Unis/Canada et banque pour 10 pays) sont remplies depuis le 30/10. **Tous les liens passent sur amazon.fr + homenuraen05-21.**
2. 24 produits seulement ont un lien direct /dp/ ; 324 modèles cités n'ont qu'un lien de recherche (moins bonne conversion).
3. 1 590 pages « problème » (≈ 30 % des clics Google) sans aucun lien d'achat.
4. Boutons d'achat erronés dans les articles (purificateur → friteuse, doublons), 144 tableaux comparatifs sans lien, 68 articles sans bloc d'achat en bas.
5. `/cuisine-connectee/airfryers` en 404 (108 liens internes) ; fil d'Ariane cassé ; sélecteur de langue qui renvoie à l'accueil ; sitemap en français seulement.
6. Pages très vues mais pas cliquées : « ninja vs philips air fryer » 4 865 impressions à 1,3 % ; serrure 2 225 à 0,3 % ; détecteur de fumée 1 488 à 0,1 %.
7. Clics vers Amazon mesurés nulle part (GA4/Plausible non chargés, événements Vercel réservés au plan Pro).

## 3. Conformité Amazon (risque de fermeture du compte)

- **Images Amazon** chargées directement depuis le serveur d'images d'Amazon pour les produits du catalogue : interdit sans l'API → remplacer par des visuels propres ou des liens image fournis par SiteStripe.
- Mention obligatoire exacte, FR : « En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises. » DE : « Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. »
- Interdits : prix sans API, suivi ou alerte de prix, annonces Google sur les termes Amazon ou pointant directement vers Amazon, raccourcisseurs et redirections /go/, images Amazon sur Pinterest, liens dans des e-mails non sollicités, mot « Test » en allemand sans test réel (utiliser « Vergleich »).

## 4. Plan d'action

### Semaine 1 (en cours)
- PR liens d'articles + Global Earning + mesure des clics ; PR pages problème + 404 + sitemap 6 langues + sélecteur de langue ; PR titres Google ; PR Black Friday.
- Puis PR conformité (images, mention) et relance IndexNow sur tout le site.

### Avant le 10 novembre — Black Friday (vendredi 27/11, semaine Amazon probablement à partir du 19/11)
- Page `/black-friday` permanente en 6 langues + 6 catégories à 6 % : robots aspirateurs laveurs, machines à café à grain, friteuses à air, aspirateurs balais, chauffages d'appoint, thermostats.
- Bloc « essai Prime gratuit » sur les pages françaises (3 € par essai). Primes Audible : 10 € par essai, 15 € par abonnement en FR ; 20 € en DE jusqu'au 16/12.

### Avant le 1er décembre — Noël
- Guides cadeaux « idées cadeaux cuisine 2026 » et « Geschenkideen Küche » en 6 langues, avec une page « dates limites de commande ».
- Catégories manquantes à fort potentiel : expresso manuel (De'Longhi Dedica), Ninja Slushi / Creami, Nespresso Vertuo, plaids et couvertures chauffants, guirlandes connectées (Twinkly, Hue).

### Avant le 6 janvier — soldes d'hiver (6/01 → 2/02/2027)
- Page `/soldes` permanente sur le même modèle que `/black-friday`.

### En continu (le format qui a fait vergleich.org)
- Guide « Meilleur X — [mois] 2026 » mis à jour chaque mois, en 3 gammes (premium / meilleur rapport qualité-prix / petit budget), avec un journal daté des mises à jour.
- Pages « X vs Y » sur chaque duel recherché (Roborock vs Dreame, Philips 2200 vs 3200, Dyson V15 vs Gen5, tado vs Netatmo) et pages « moins de 300 € ».
- Score de consensus : notes de Les Numériques, Chip, Stiftung Warentest et Which?, citées et liées. C'est notre crédibilité sans laboratoire.
- Auteur nommé avec une page de méthode : pas de faux tests, analyse documentaire transparente.
- Priorité aux catégories à 6 % (cuisine, maison, bricolage) plutôt qu'à l'électronique à 3 % ou au gros électroménager à 2,5 %.

### Hors Google
- **Pinterest** (157 M d'utilisateurs en Europe) : visuels propres pour les recettes airfryer et les comparatifs.
- **YouTube Shorts / TikTok** : duels de 40 secondes. Ouvre ensuite le programme Influenceurs Amazon (vidéos affichées sur les fiches produit).
- **Newsletter avec inscription volontaire** (liste Brevo déjà en place) : sélection Black Friday et soldes, choisie à la main.
- **Reddit et forums** : réponses utiles avec un lien vers le comparatif, jamais vers Amazon.
- **IA (ChatGPT, Perplexity, Claude, Gemini)** : robots OAI-SearchBot, PerplexityBot, Claude-SearchBot et Googlebot autorisés ; Bing Webmaster (rapport « AI Performance ») + IndexNow ; fraîcheur (76 % des pages citées par ChatGPT ont moins de 6 mois) ; présence citée sur Reddit et YouTube (les 2 domaines les plus cités). llms.txt reste en place mais n'est pas une priorité.

### Dès 10 ventes sur 30 jours — API Creators d'Amazon
- Prix et images en direct conformes (horodatage), balisage Product/Offer, conversion des 324 modèles en liens /dp/.

## 5. Ce que seul Miguel peut faire
1. Dire s'il possède des comptes Partenaires Italie, Allemagne, Espagne, Pays-Bas ou Royaume-Uni (identifiants homenuraen010-21, homenuraen00-21, homenuraen0a-21, homenuranl-21) : sinon, rien à faire, Global Earning suffit.
2. Créer l'application Creators API et ses clés quand le compte sera éligible.
3. Passer Vercel de Hobby (usage non commercial) à Pro.
4. Créer les comptes Pinterest / YouTube et choisir le nom d'auteur affiché.

## 6. Mesure
- Chaque semaine : clics Google par pays (Search Console), clics vers Amazon (`/api/click`, journaux Vercel), gains par ID de suivi (Amazon).
- Jalons visés : 100 €/mois en novembre ; 10 ventes sur 30 j pour l'API ; 300 à 500 €/mois au 1er trimestre 2027 ; trafic ×10 à l'été 2027.

## 7. Modèle vergleich.org (analyse du 30/10/2026) — ce qu'on copie

**Chiffres** (Team Internet, segment Comparison 2025) : 65,3 M$ de chiffre d'affaires, 169 M de sessions, ≈ 257 $ pour 1 000 sessions. Homenura aujourd'hui : ≈ 35 € pour 1 000 visites Google.
**Leur moteur** : plusieurs marchands par produit (Amazon, Otto, eBay, flux de comparateurs de prix Kelkoo/billiger.de/geizhals qui fournissent légalement prix et images), clics mesurés par emplacement, emplacements « Highlight » vendus aux marques, 18 800 pages dont des milliers de déclinaisons (marque, budget, capacité, fonction, usage), sites pays séparés (meilleurs.fr, miglioreconsiglio.it…), environ un quart du trafic acheté en publicité Google.

**À reprendre, dans l'ordre :**
1. Encadré « Nos 3 choix » en tête (Meilleur choix / Alternative premium / Petit budget).
2. « Mis à jour le » + journal daté des changements ; révision au plus tard tous les 120 jours.
3. Auteur nommé (vrai expert indépendant par langue, avec ses réseaux) + relecteur + page « Comment nous comparons » — jamais « testé ».
4. Grand tableau de 8 à 14 produits avec filtres, badges (Notre choix, Meilleur rapport qualité-prix, Nouveau), 1re colonne fixe sur mobile.
5. Données structurées Product + Review (auteur Person, points forts/faibles) + ItemList + Article `dateModified` (sans note ni prix tirés d'Amazon).
6. **Encadré multi-marchands** : Amazon + programmes Awin (Darty 3–8 %, Boulanger jusqu'à 7 %, OTTO 1–15 %, Coolblue, ManoMano, SharkNinja, De'Longhi jusqu'à 10 %) + flux Kelkoo/idealo → prix et images légaux, commissions souvent supérieures à Amazon.
7. `/api/click` enrichi (position, variante) puis tests A/B des libellés de bouton.
8. Pages de longue traîne (marque, budget « moins de 300 € », capacité, fonction, usage), indexées seulement si ≥ 5 produits distincts.
9. Photos de presse des marques (chantier en cours) + épingles Pinterest 1000×1500.
10. Sources citées par pays (UFC-Que Choisir, Stiftung Warentest, Altroconsumo, OCU, Consumentenbond, Which?).
11. Une étude de données par pays et par trimestre pour obtenir presse et liens.
12. Plus tard : emplacements « Annonce » vendus aux marques, publicité Google rentable.

**Ce que seul Miguel peut faire pour ce plan** : créer le compte éditeur Awin (et Kelkoo/idealo), le compte Pinterest Business, choisir/recruter l'auteur expert.

## 8. Expansion par pays — VALIDÉE par Miguel le 30/10/2026 (à lancer dans la session suivante)

Constat : vergleich.org fait ≈ 95 % de son activité en zone DACH (DE/AT/CH) ; ses sites FR/IT/ES/UK sont récents et faibles. Homenura a déjà 6 langues et un seul compte Amazon payé partout (Global Earning).
1. **Renforcer l'allemand en priorité** : contenu /de propre (pas une traduction plate), pages de déclinaison marque/budget/capacité (« Saugroboter bis 300 Euro », « Kaffeevollautomat Philips »), titres « Vergleich 2026 » (jamais « Test »), auteur germanophone, sources Stiftung Warentest/Chip citées ; couvre aussi l'Autriche et la Suisse (achats sur amazon.de).
2. **Ajouter le polonais (pl)** : amazon.pl payé via Global Earning ; marché en croissance, peu de comparatifs de qualité. Nouvelle langue complète (routing, hreflang, sitemap, dictionnaires, articles prioritaires d'abord).
3. **Plus tard** : suédois (sv, amazon.se) et une version anglaise États-Unis (amazon.com via Global Earning).
