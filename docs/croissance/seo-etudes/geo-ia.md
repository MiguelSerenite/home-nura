# Étude GEO / citations par les moteurs IA — homenura.com

Date de l'étude : 30 octobre 2026. Aucune modification de code n'a été faite.
Périmètre : site européen de comparatifs maison connectée / électroménager, affiliation Amazon, Next.js, 6 langues (fr/en/de/es/it/nl), polonais à venir. Pas de test produit réalisé par le site (analyse documentaire).

## Comment lire ce document

Chaque chiffre est suivi de sa source et de sa date. Niveaux de fiabilité utilisés :

- **[P]** source primaire que j'ai effectivement ouverte pendant cette session (doc OpenAI, Perplexity, Google, Anthropic, blog Bing, étude publiée par son auteur).
- **[S]** source secondaire (blog SEO, presse, résumé d'une étude) : chiffre à prendre comme indicatif.
- **[NV]** non vérifié : annoncé par un tiers, je n'ai pas pu le confirmer à la source ; ou connaissance antérieure non re-contrôlée.
- Toutes les études de corrélation (SE Ranking, Ahrefs, Semrush, Peec...) mesurent des associations, jamais des causes. La plupart sont publiées par des éditeurs d'outils qui ont un intérêt commercial.
- Plusieurs pages importantes m'ont renvoyé une erreur 403 (Search Engine Land, Search Engine Watch, help.openai.com, Growth Memo derrière paywall) : ces points sont marqués [S] ou [NV].

---

## 0. Verdict en 10 lignes

1. Il n'existe pas « un » classement IA : chaque moteur lit un index différent. La base commune reste d'être bien indexé et bien classé en recherche classique (Google ET Bing), plus quelques particularités par moteur.
2. ChatGPT n'est plus « Bing + OAI-SearchBot » : c'est un mélange (index propre inféré par Peec, scrapers de SERP, Bing via Microsoft Web IQ). Bing reste utile, mais n'est pas un proxy fiable.
3. Claude s'appuie sur Brave Search (preuve indirecte forte : liste des sous-traitants d'Anthropic, mars 2025). Brave n'a pas d'outil webmaster ni d'IndexNow.
4. Google AI Overviews / AI Mode / Gemini = index et systèmes de classement de Google, sans exigence supplémentaire (doc Google, mise à jour le 10/07/2026). Google a lancé AI Overviews et AI Mode en France le 22/07/2026 : l'exposition française vient de commencer.
5. Mesure : Bing Webmaster Tools « AI Performance » (public preview depuis le 10/02/2026, citations Copilot/Bing, pas de clics) et le rapport « Search Generative AI » de Google Search Console (3/06/2026, impressions seulement, déploiement partiel).
6. Facteurs les mieux étayés : fraîcheur réelle, réponses extractibles en tête de section, données chiffrées sourcées, autorité de domaine et mentions de marque par des tiers. Les données structurées (FAQPage, ItemList...) et llms.txt n'ont PAS de preuve d'effet sur les citations IA.
7. Pour les comparatifs : les listes « best X » dominent les citations ChatGPT (43,8 % des types de pages cités, Ahrefs, 4/12/2025) mais le phénomène est volatil (-30 % de citations de listicles en un mois, Seer, 25/02/2026). Les vainqueurs : listes fraîches, complètes, avec méthodologie et données externes.
8. Risque majeur propre à homenura : pas de test maison. Google demande des preuves de première main pour les « meilleur X ». Il faut compenser par une méthodologie documentaire très transparente et des sources primaires liées.
9. Multilingue : ChatGPT lance des sous-recherches en anglais dans ~78 % des sessions non anglaises (Peec, fév. 2026) ; Google AI Overviews cite surtout la langue de la question (85,4 % de citations locales, Temso, avril 2026). La version EN du site compte donc aussi pour les autres langues sur ChatGPT.
10. Le trafic IA reste marginal (0,32 % du trafic web, SE Ranking, 18/06/2026 ; 1,08 % chez Conductor) : la priorité reste le SEO classique + Bing, avec une couche GEO légère.

---

## 1. D'où chaque moteur tire ses sources en 2026

### 1.1 Tableau de synthèse

| Moteur | Sources / index identifiés | Crawlers à autoriser | Niveau de preuve |
|---|---|---|---|
| ChatGPT search | Mélange : index propre OpenAI (nom interne « Labrador », inféré par Peec), scrapers de SERP (Bright, Oxylabs), SERP, Bing/Microsoft Web IQ, partenaires (Yelp, TripAdvisor) | OAI-SearchBot (recherche), GPTBot (entraînement, optionnel), ChatGPT-User (action utilisateur) | OpenAI [P] pour les bots ; Microsoft [P] pour Web IQ ; Peec [S] pour le reste |
| Claude | Brave Search (sous-traitant déclaré), + turbopuffer (ajouté mai 2026) | Claude-SearchBot, Claude-User, ClaudeBot | Indirect fort (liste de sous-traitants, [S]) ; Anthropic ne décrit pas son fournisseur dans l'aide [P] |
| Perplexity | Index propre (200+ milliards d'URL), PerplexityBot, récupération lexicale + sémantique + reranking | PerplexityBot, Perplexity-User | Perplexity [P] |
| Google AI Overviews / AI Mode / Gemini | Index Google et systèmes de classement Google, avec « query fan-out » | Googlebot (pas de bot dédié) | Google [P] |
| Microsoft Copilot | Index Bing (grounding) | Bingbot | Microsoft [P/S] |

### 1.2 ChatGPT search

Ce que dit OpenAI (doc « Bots » ouverte le 30/10/2026) [P] :
- OAI-SearchBot est le crawler de recherche : il « fait apparaître des sites dans les fonctions de recherche de ChatGPT ». Un site qui l'interdit n'apparaît plus dans les réponses de recherche, mais peut rester en lien de navigation.
- Pour apparaître : autoriser OAI-SearchBot dans robots.txt et autoriser les plages IP publiées (openai.com/searchbot.json). Une modification de robots.txt met environ 24 h à être prise en compte.
- GPTBot sert à l'entraînement ; le bloquer n'empêche pas d'apparaître dans la recherche. ChatGPT-User est déclenché par un utilisateur et ne conditionne pas la présence dans la recherche.
- La page ne mentionne ni Bing ni un autre fournisseur de recherche.

Rôle de Bing :
- Seer Interactive (6/02/2025, ~500 citations de SearchGPT) : 87 % des citations correspondaient aux premiers résultats de Bing, contre 56 % pour Google. Les requêtes comportaient souvent « top » et « best », ce qui biaise vers les listicles [S, résumé par recherche]. Étude ancienne (février 2025), pas de mise à jour trouvée.
- Page Microsoft Web IQ (microsoft.com/WebIQ, ouverte le 30/10/2026) [P] : Web IQ s'appuie sur « l'index web global de Bing » et « alimente des assistants IA de premier plan, dont Microsoft Copilot et ChatGPT ». Lancement annoncé le 2/06/2026 (Search Engine Journal, [S]). Search Engine Journal précise que Microsoft n'a pas dit si le grounding actuel de Copilot/Bing utilise Web IQ, et que les performances annoncées sont des affirmations de Microsoft. Je n'ai pas trouvé de confirmation d'OpenAI.
- Peec AI (sept. 2026) [S, docs.peec.ai] : OpenAI aurait son propre index (« Labrador »), famille d'index verticaux (web, PDF, YouTube, actualités, arXiv, Wikipédia, local, finance, juridique, médical, shopping, images). Preuve : un champ `result_source` observé du 21/05 au 21/07/2026 avec quatre valeurs seulement : Labrador, Bright, Oxylabs, SERP (trois fournisseurs de scraping + index interne). Corroboré par le témoignage de Nick Turley au procès antitrust de Google (OpenAI a commencé son index en 2023 après des « problèmes de qualité importants » avec les API de recherche partenaires hors Google) et par des offres d'emploi « exabyte ». Peec précise que ChatGPT combine toujours Labrador avec Google, Microsoft et au moins huit fournisseurs externes, et que le système change chaque semaine. OpenAI ne documente pas le nom « Labrador » : c'est une inférence.
- Des tiers affirment que ~1,5 % seulement des URL de Labrador seraient dans le top 20 Bing [NV] : je n'ai pas retrouvé ce chiffre dans l'étude Peec elle-même.
- Une affirmation de blog « Microsoft a confirmé Web IQ pour ChatGPT, Bing compte surtout en Deep Research » [S, Blumint, Search Engine Watch inaccessible] est cohérente avec ce qui précède mais non vérifiée à la source.

Conclusion pratique : ne plus raisonner « ChatGPT = Bing ». Il faut (1) être crawlé par OAI-SearchBot, (2) être indexé et bien classé chez Google ET Bing, (3) avoir un contenu extractible en HTML serveur. Bing reste un levier utile (Copilot, Web IQ, mesure AI Performance) mais n'est plus suffisant ni prédictif pour ChatGPT.

### 1.3 Claude

- Anthropic a ajouté « Brave Search » à sa liste de sous-traitants le 19/03/2025, la veille du lancement de la recherche web (20/03/2025) (TechCrunch 21/03/2025 [P-presse] ; Simon Willison 21/03/2025 : mêmes citations dans Claude et Brave, paramètre interne « BraveSearchParams »). Profound (21/03/2025, [P]) : 86,7 % de recouvrement (13 résultats sur 15) avec le top Brave. Échantillon minuscule, à traiter comme indicatif. Anthropic n'a pas confirmé publiquement dans l'aide que j'ai ouverte.
- Un second sous-traitant « Web Search » apparaîtrait dans le Trust Center : turbopuffer (base vectorielle / plein texte), ajouté le 6/05/2026 (xponent21, vérifié par l'auteur le 2/07/2026 [S]). Son rôle dans les citations n'est pas public : on ne peut donc pas affirmer que le classement Brave est repris tel quel.
- Brave annonce (30/06/2026, via PiunikaWeb [S]) que son index dépasse 40 milliards de pages et qu'il est proposé à Claude Cowork via Amazon Bedrock : déploiement distinct, affirmation de Brave sans déclaration d'Anthropic.
- Bots (aide Anthropic, ouverte le 30/10/2026) [P] : ClaudeBot (entraînement), Claude-User (récupération à la demande de l'utilisateur), Claude-SearchBot (« améliorer la qualité des résultats de recherche »). Bloquer Claude-SearchBot réduit la visibilité dans les résultats de recherche de Claude.
- Un recouvrement faible entre Claude et ChatGPT est rapporté (13 % des domaines, OtterlyAI juin 2026 [S, non revérifié]).

Conséquence : être indexé par Brave. Brave n'a pas de console webmaster ; la communauté Brave pointe vers `search.brave.com/submit-url` et vers le « Web Discovery Project » (indexation alimentée par les utilisateurs du navigateur) [S, forums communautaires, pas de doc officielle]. IndexNow n'est pas supporté par Brave (liste IndexNow.org : Bing, Naver, Seznam, Yandex, Yep [P]). Contrôle simple : taper `site:homenura.com` et quelques requêtes cibles sur search.brave.com, par langue.

### 1.4 Perplexity

Perplexity (billet du 25/09/2025 [P]) :
- Index qui « suit plus de 200 milliards d'URL uniques », architecture « à l'échelle de l'exaoctet ».
- PerplexityBot respecte robots.txt. Des modèles de ML décident si une URL est indexée et quand, selon son importance et sa fréquence de mise à jour probable.
- Récupération lexicale et sémantique fusionnées, préfiltrage des contenus obsolètes, puis reranking par cross-encoders.
- Les documents sont découpés en « segments autonomes » (self-contained spans) récupérés et classés individuellement, au niveau document et sous-document.
- Doc bots [P] : autoriser PerplexityBot + plages IP (perplexity.ai/perplexitybot.json) ; le « Bot Fight Mode » de Cloudflare peut quand même les bloquer ; délai ~24 h.

Conséquence : écrire des passages autonomes (le segment doit se comprendre hors contexte) et ne pas bloquer le bot au niveau WAF.

### 1.5 Google (AI Overviews, AI Mode, Gemini)

Doc Google « Optimizing your website for generative AI features », dernière mise à jour 10/07/2026 [P] :
- Les fonctions IA reposent sur les systèmes de classement et de qualité de la recherche de base. Aucune exigence technique supplémentaire : la page doit être indexée et éligible à un extrait.
- Pas besoin de llms.txt (« Google ne les utilise pas »), pas de balisage schema.org spécial, pas de découpage en petits morceaux, pas de longueur idéale.
- « Query fan-out » : plusieurs recherches liées sont lancées, ce qui élargit l'ensemble de liens affichés par rapport à la recherche classique.
- Interdit : produire en masse des pages ciblant des variantes de requêtes ou des requêtes de fan-out (relève de la politique « scaled content abuse »).
- Les mentions de tiers peuvent compter, mais chercher des mentions inauthentiques ne sert à rien et les systèmes sont conçus pour bloquer le spam.
- Mesure : rapport « Generative AI performance » de la Search Console.

Recouvrement avec le top 10 : seulement 37,9 % des URL citées par AI Overviews sont dans le top 10 organique (Ahrefs, 2/03/2026, 863 000 mots-clés, 4 millions d'URL), contre ~76 % en juillet 2025 [P]. YouTube est le domaine le plus cité (5,6 % de toutes les URL d'AI Overviews). BrightEdge donnerait ~17 % avec une autre méthode [S]. Lecture : être classé n'est ni nécessaire ni suffisant pour AI Overviews, mais être indexé l'est.

Disponibilité européenne :
- AI Mode : déploiement en Europe à partir du 8/10/2025 (Allemagne, Autriche, Italie, Pays-Bas, Pologne, Espagne, Suède...) [S, presse]. 
- France : AI Overviews et AI Mode activés le 22/07/2026, après deux ans de blocage lié au droit voisin (Blog du Modérateur [S], plusieurs sources concordantes). Google s'est engagé auprès d'éditeurs français à permettre de retirer ses contenus d'AI Overviews sans pénalité de classement [S].

### 1.6 Microsoft Copilot

- Même base d'exploration, d'indexation et de classement que Bing ; pas de crawler Copilot distinct (Bingbot) [S : résumé des Bing Webmaster Guidelines ; la page officielle ne s'est pas affichée dans mon outil].
- Le rapport AI Performance mesure les citations de Copilot, des résumés IA de Bing et de « partenaires sélectionnés » non nommés (billet Bing du 10/02/2026) [P].

### 1.7 Conséquences pratiques (ordre de priorité)

1. Indexation Google + Bing des 6 langues (couverture, canonicals, hreflang) : c'est la base de ChatGPT, Gemini, AI Mode, Copilot, Claude (Brave dépend aussi d'un web bien exploré).
2. Ne bloquer aucun de ces bots : Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, Claude-SearchBot (et laisser GPTBot/ClaudeBot/Google-Extended selon la politique d'entraînement). Vérifier le WAF/CDN (Bot Fight Mode), les plages IP et les logs.
3. HTML complet côté serveur : Vercel/MERJ (déc. 2024) [S, résumé de l'étude] : aucun des grands crawlers IA testés (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot) n'exécute le JavaScript ; Googlebot/Gemini oui. Avec Next.js : SSG/ISR/SSR pour tout le contenu éditorial (réponse rapide, FAQ, tableaux) ; réserver le client-side aux widgets.
4. Soumettre aussi à Brave (submit-url) et contrôler la présence.
5. Mesurer par moteur plutôt que supposer (voir section 2).

---

## 2. Mesurer : Bing « AI Performance » et équivalents Google

### 2.1 Bing Webmaster Tools — AI Performance

- Lancement : 10/02/2026, en « public preview », pour tout site vérifié (billet officiel Bing Webmaster Blog [P]). Raccourci donné par Microsoft : aka.ms/BWTAIpref ; chemin cité par des tiers : bing.com/webmasters/aiperformance [S]. Import possible depuis la Search Console ; compter ~24 h de collecte [S].
- Ce qu'il mesure [P] : nombre total de citations (affichage de votre contenu comme source dans une réponse IA), moyenne de pages citées par jour, « grounding queries » (expressions utilisées par l'IA pour récupérer votre contenu, échantillon), citations par page, tendance dans le temps. Couvre Copilot, résumés IA de Bing et « partenaires sélectionnés ».
- Limites annoncées par Microsoft [P] : pas d'indication de position/prominence dans la réponse ; les requêtes de grounding sont un échantillon ; le nombre de citations n'est pas un classement ; pas de clics.
- Évolutions : 23/03/2026, liaison requête de grounding → pages citées (ppc.land [S]) ; ~22/06/2026, ajout de l'intention (navigationnelle, informationnelle, commerciale), du thème, de la « part de citation » par requête, tri et export tableur (Practical Ecommerce [S]). Pas de filtre par canal (Copilot vs Bing) ni identification des partenaires ; pas de clics.
- Recommandations de Microsoft dans ce billet [P] : repérer les pages bien indexées mais peu citées, approfondir les sujets déjà cités, améliorer la structure (titres, tableaux, FAQ), étayer par des données et des sources, garder le contenu à jour et utiliser IndexNow, garder le texte, les images et la vidéo cohérents sur les mêmes entités.
- Couverture : Copilot/Bing seulement. Un guide Adobe note qu'il ne couvre pas ChatGPT [S]. Les citations ChatGPT ne sont donc pas visibles là, même si Web IQ alimente ChatGPT selon Microsoft (aucune donnée partagée avec les éditeurs que j'aie trouvée).

Comment l'utiliser pour homenura (méthode proposée, [inférence]) :
1. Vérifier le site (ou importer depuis GSC) et noter la date de première donnée.
2. Hebdo : exporter les grounding queries, les classer par langue et par intention commerciale ; repérer les requêtes « best / meilleur / beste / mejor / migliore / beste » où le site est cité peu ou pas.
3. Croiser avec les pages « Réponse rapide » : une page indexée sans citation = candidat à enrichir (données chiffrées, date, méthodologie, passages autonomes).
4. Suivre la « part de citation » par requête (si disponible) pour mesurer l'effet des mises à jour.
5. Ne pas sur-interpréter : échantillon, pas de clics, pas de position.

### 2.2 Google Search Console

- Billet Google Search Central du 3/06/2026 (Hillel Maoz, Moshe Samet), via ppc.land [S] — l'article officiel n'a pas pu être lu dans mon outil : nouveaux rapports « Search Generative AI performance » pour la Search (AI Overviews et AI Mode) et Discover. Métriques : impressions, pages, pays, appareils (Search seulement), dates (horaire à mensuel). Pas de clics ni de CTR ; Google dit pouvoir ajouter des métriques. Déploiement d'abord auprès d'« un sous-ensemble de sites » ; d'autres sources parlent d'un déploiement mondial [S, contradictoire].
- Les impressions des fonctions IA restent dans le rapport Performances classique, type « Web » : c'est une vue segmentée, pas un jeu de données séparé (doc Google « AI features » [P]).
- AI Overviews et AI Mode ne sont pas séparés dans le rapport [S].
- Google déconseille de se fier aux outils tiers qui prétendent avoir des métriques internes Google [P].

### 2.3 Compléments pour ChatGPT / Claude / Perplexity

Aucun de ces moteurs ne donne de rapport éditeur. À faire soi-même [inférence] :
- Logs serveur : compter les requêtes de OAI-SearchBot, PerplexityBot, Claude-SearchBot, Bingbot par langue et par page (preuve d'exploration, pas de citation).
- Référents : repérer les visites venant de chatgpt.com, perplexity.ai, claude.ai, copilot.microsoft.com, gemini.google.com ; ChatGPT ajoute en principe `utm_source=chatgpt.com` [NV, connaissance antérieure].
- Panel de prompts : 30 à 50 requêtes × 6 langues × 4 moteurs, relevées chaque mois (manuel ou outil comme Peec/Ahrefs Brand Radar/Profound). Les outils tiers estiment, ne mesurent pas.

---

## 3. Facteurs de citation mesurés

### 3.1 Tableau synthétique : preuve vs hypothèse

| Facteur | Ce que montrent les données | Force de la preuve |
|---|---|---|
| Être bien classé / indexé | Position 0 dans les résultats de ChatGPT : 58 % de chances d'être cité, position 10 : 14 % (AirOps, rapport « fan-out effect », 17 000 requêtes / 354 000 pages [S]) ; position moyenne Google 1-45 : 5 citations vs 3,1 pour 64-75 (SE Ranking, 24/11/2025 [P]) ; mais seulement 37,9 % des URL citées par AI Overviews sont dans le top 10 (Ahrefs, 2/03/2026 [P]) | Moyenne : utile surtout pour ChatGPT/Perplexity |
| Fraîcheur | Voir 3.2 | Bonne pour ChatGPT, Copilot, Gemini, Perplexity ; faible pour AI Overviews |
| Réponse en tête / « answer capsule » | 72,4 % des articles cités par ChatGPT contiennent une capsule de réponse identifiable (audit de ~2 millions de sessions, Search Engine Land [S, page 403]) | Moyenne [S] |
| Titres alignés sur la requête | Pages dont les titres collent à la requête : citées 41 % du temps vs 29 % pour un faible alignement (AirOps [S]). À l'inverse, titres formulés en question : 3,4 citations vs 4,3 pour des titres directs (SE Ranking [P]) | Contradictoire : calquer le vocabulaire de la requête, pas forcément le format question |
| Statistiques, citations d'experts, sources | Étude GEO (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande ; KDD 2024 ; arXiv 2311.09735, première version nov. 2023 [P]) : jusqu'à +40 % de visibilité sur GEO-bench ; les chiffres par tactique varient entre résumés (statistiques +37 %, citations +22/+30-40 %, sources citées +40 %) [S] ; sur Perplexity, jusqu'à +37 % [S]. SE Ranking : 19+ statistiques = 5,4 citations vs 2,8 ; citations d'experts 4,1 vs 2,4 [P] | Bonne convergence, mais études 2023-2025 sur des moteurs qui ont changé |
| Longueur | Pages < 800 mots : 3,2 citations ; > 2 900 mots : 5,1 (SE Ranking [P]) ; corrélation ≈ 0,04 avec les citations AI Overviews sur 174 048 pages (Ahrefs [S]) ; Google : « pas de longueur idéale » [P] | Faible, dépend du moteur |
| Données structurées | Voir 3.3 | Pas d'effet démontré |
| Autorité de domaine / liens | Domaines référents : jusqu'à 2 500 → 1,6-1,8 citations ; > 350 000 → 8,4 ; saut à 32 000 (SE Ranking [P]). Domain Rating : corrélation 0,266 (ChatGPT), 0,285 (AI Mode), 0,326 (AI Overviews) (Ahrefs, 75 000 marques, 12/12/2025 [P]) | Moyenne à forte (corrélation) |
| Mentions de marque par des tiers | Mentions web de la marque : corrélation 0,664 / 0,709 / 0,656 (ChatGPT / AI Mode / AI Overviews) ; mentions YouTube ≈ 0,737 ; liens retour de marque 0,51 / 0,63 / 0,53 (Ahrefs, 12/12/2025 [P]). Mentions web > backlinks pour AI Overviews : 0,664 vs 0,218 (Ahrefs, mai 2025 [S]) | La plus forte corrélation observée |
| Vitesse | Pages avec FCP < 0,4 s : 6,7 citations vs 2,1 pour > 1,1 s (SE Ranking [P]) | Corrélation, cause incertaine |
| Plateformes d'avis | Présence sur plusieurs plateformes d'avis : 4,6-6,3 citations vs 1,8 (SE Ranking [P]) | Corrélation |
| llms.txt | Voir 3.6 | Aucun effet démontré |

### 3.2 Fraîcheur : ce qui est mesuré et les garde-fous

- Ahrefs (28/07/2025, 16,975 millions d'URL citées) [P] : âge moyen depuis publication des URL citées par l'IA 1 064 jours contre 1 432 pour la SERP organique (25,7 % plus frais) ; ChatGPT cite des pages ~393 à 458 jours plus récentes que la SERP, Copilot 360, Gemini 298, Perplexity 250 ; AI Overviews cite 16 jours PLUS ANCIEN que l'organique. Dernière mise à jour : Gemini -216 jours, Copilot et ChatGPT -182, Perplexity -53, AI Overviews +21 jours. Étude de plus de 15 mois, antérieure à l'évolution de ChatGPT.
- SE Ranking (24/11/2025) [P] : contenu mis à jour depuis moins de 3 mois : 6,0 citations en moyenne vs 3,6 pour du contenu obsolète.
- Ahrefs, listes « best » (4/12/2025) [P] : 79,1 % des listes citées par ChatGPT avaient été mises à jour en 2025, 26 % dans les deux mois précédant l'étude, 57,1 % avaient été modifiées après publication.
- Seer (25/02/2026) [P] : parmi les listicles qui ont progressé contre la tendance, beaucoup affichaient « 2026 » sur la page.
- Garde-fous : Ahrefs rappelle que John Mueller met en garde contre le changement de dates sans modification réelle ; Google exige que la date visible et la date en données structurées soient cohérentes, que la date reflète la publication ou la mise à jour de la page elle-même et qu'on n'utilise pas de date future (doc Google « publication dates » [P]). Faire un vrai travail de mise à jour (prix, disponibilité, nouveaux modèles) et ne modifier `dateModified` que dans ce cas.

### 3.3 Données structurées : effet réel ?

- Ahrefs (rapporté le 13/05/2026 par Search Engine Roundtable ; fenêtre août 2025 - mars 2026) [P-presse] : 1 885 pages ayant ajouté du JSON-LD comparées à 4 000 pages témoins. « Aucun gain majeur de citations sur aucune plateforme » ; AI Overviews : -4,6 % (petit mais significatif) ; AI Mode et ChatGPT : légèrement mieux, indiscernable du bruit. Limite relevée par des commentateurs : les pages étaient déjà très citées.
- Google [P] : aucun schema spécial pour les fonctions IA ; le balisage doit correspondre au texte visible ; on garde les données structurées pour l'éligibilité aux résultats enrichis.
- Microsoft : Fabrice Canel (SMX Munich, mars 2025) aurait dit que le schema aide les LLM de Microsoft ; dans un échange sur le Markdown (5/02/2026) il a recommandé le schema [S, ppc.land]. Aucune expérience publiée à l'appui. Le guide AEO/GEO de Microsoft Advertising (janvier 2026) recommande des données structurées produits, offres, avis, listes, FAQ et marque [S, Search Engine Journal].
- Semrush (+22 % de citations associés à des données structurées, 304 805 URL) [NV : rapport original non trouvé].
- SE Ranking (24/11/2025) [P] : pages avec schema FAQ : 3,6 citations vs 4,2 sans ; sections FAQ : 3,8 vs 4,1. Corrélation négative, probablement parce que les pages qui ajoutent du FAQ schema sont aussi plus commerciales ; mais elle contredit l'idée qu'un FAQPage booste les citations.
- Statut des résultats enrichis FAQ : Google les a restreints aux sites officiels de santé et de gouvernement en août 2023 [NV, connaissance antérieure, non re-contrôlé]. Donc le JSON-LD FAQPage de homenura n'a probablement plus d'effet visuel dans Google.

Verdict : conserver Article, BreadcrumbList, ItemList, Organization (cohérence des entités et éligibilité) ; ne pas investir plus pour « booster » les citations ; ne jamais baliser ce qui n'est pas visible. Pour Product/Review/AggregateRating : à n'ajouter que si l'avis est réellement celui du site et visible (risque de non-conformité sinon ; règle Google sur les avis, [NV] non re-vérifiée ici).

### 3.4 Structure et longueur des passages

- Perplexity découpe en segments autonomes [P] : un passage doit se comprendre seul (sujet nommé, pas de « ce modèle » sans antécédent).
- Heuristique de praticiens : passages cités de 35 à 65 mots, recommandation 40-60 mots avec une affirmation et un chiffre/nom/date [S, blog] ; autre blog : 134-167 mots pour AI Overviews [S] ; ce ne sont pas des seuils établis.
- AirOps : couvrir 26-50 % des sous-requêtes (fan-out) de ChatGPT est cité plus souvent que de couvrir 100 % [S] : pas besoin de tout traiter sur une page ; cohérent avec l'interdiction Google des pages multipliées pour les variantes de requêtes.
- Seer (25/02/2026) [P] : listicles en progression : 10 à 20 options détaillées, liste numérotée, caractéristiques, pour/contre, prix, « idéal pour », signaux externes (notes G2, données publiques) ou méthode de classement explicitée ; en recul : listes de 5 à 8 options, contenus périmés, auto-promotion, absence de méthodologie.

### 3.5 Mentions de tiers : Reddit, YouTube, Wikipédia, presse

- Semrush (mars 2026, 325 000 prompts janv.-févr. 2026, via eMarketer [S]) : Reddit est le domaine le plus cité sur ChatGPT Search, Google AI Mode et Perplexity.
- Ahrefs Brand Radar, Allemagne, fin sept. 2026 [P] : AI Overviews : YouTube 23,73 %, Wikipédia DE 15,70 %, Reddit 4,51 % (4e) ; ChatGPT : Wikipédia DE 18,56 %, adac.de 6,21 %, duden.de 5,08 %, test.de 3,84 %. Reddit sur ChatGPT est passé du 2e rang (10,11 %) en juillet 2026 au 13e rang (1,80 %) en septembre : la part de Reddit est instable, ne pas bâtir une stratégie dessus seulement. YouTube n'est qu'au rang 163 sur ChatGPT mais premier dans AI Overviews.
- Seer (25/02/2026) [P] : sur l'ensemble des secteurs, Wikipédia passe de 3,6 % à 5,9 % des citations ChatGPT, Reddit presque triple sa part.
- Profound (mars 2026, 3,25 milliards de citations, 7 modèles, 14 pays) [P] : part de sources sociales : AI Overviews 15,3 %, AI Mode 14,5 %, Perplexity 11,3 %, ChatGPT 9,1 %, Copilot 4,3 %, Claude 3,99 %, Gemini 3,6 %. Hors anglais, la part sociale de ChatGPT tombe à 3-5 %.
- Wikidata / Wikipédia : aucune étude rigoureuse trouvée sur l'effet pour un petit site [S/NV]. Ne pas en faire une priorité.
- OtterlyAI et d'autres [S] : Claude s'appuierait davantage sur des avis tiers et de la validation externe que sur le site lui-même [NV].

### 3.5 bis Multilinguisme : l'IA cite-t-elle la langue de la question ?

- Temso (7 058 891 citations, 4 modèles, début 2026, mis à jour le 20/04/2026) [P], citations en langue locale pour des prompts non anglais : Google AI Overviews 85,4 % (anglais 8,7 %), Microsoft Copilot 76,7 % (15,4 %), ChatGPT 70,2 % (23,7 %), Grok 51,7 % (39,6 %). Par langue sur ChatGPT : allemand 66,0 %, français 72,3 %, espagnol 74,6 %, italien 73,8 %, néerlandais 62,2 %. Néerlandais et suédois sont les plus exposés à l'anglais ; l'étude présente des incohérences internes mineures.
- Peec (fév. 2026, 10 millions de prompts et 20 millions de fan-outs, location = langue) [P] : ChatGPT ajoute des recherches en anglais dans ~78 % des cas non anglais ; 43 % des étapes de fan-out sont en anglais ; espagnol le plus bas (66 %), turc le plus haut (94 %), aucune langue sous 60 %. Peec conclut : prioriser du contenu anglais stratégique plutôt que de traduire à l'aveugle ; les surfaces IA de Google restent plus proches de la langue de la requête.
- Lecture pour homenura [inférence] : (1) la version anglaise peut être citée pour des questions en fr/de/es/it/nl sur ChatGPT, donc elle doit être aussi solide que les autres ; (2) pour Google/Copilot, les pages locales dominent : la localisation doit être réelle (boutiques et marques locales, prix en euros, normes et compatibilités du marché) ; (3) le risque « traduction automatique en masse » est réel côté Google (voir section 4).

### 3.6 llms.txt : adoption et preuves

- Ahrefs (journaux de 137 000 domaines, mai 2026) et Originality.ai (3 millions de sites suivis, juin 2025 → mai 2026), rapportés le 2/07/2026 par ppc.land [S] : fichiers llms.txt détectés 4 088 → 36 120 (x8,8) ; 97 % n'ont reçu aucune requête en mai 2026. Parmi les requêtes reçues : bots IA de récupération 1,1 %, GPTBot 4,51 %, ClaudeBot 0,80 %, outils d'audit SEO 21,7 %.
- SE Ranking (24/11/2025) [P] : impact « négligeable » sur les citations ChatGPT.
- Google [P] : ne l'utilise pas, ni pour la recherche ni pour les fonctions IA ; Mueller l'a comparé à la balise meta keywords [S].
- Contre-exemple partiel rapporté par un tiers : le crawler de Meta le lirait, OpenAI l'aurait lu 7 fois contre 3 990 lectures de robots.txt [S, 12 semaines, un seul site].
- Conclusion : preuve d'absence d'effet à ce jour, pas d'effet démontré. Le fichier déjà en place ne coûte rien ; ne pas y investir de temps.

### 3.7 Markdown / pages .md

- Mueller (Google) et Fabrice Canel (Bing), 5/02/2026, en réponse à Lily Ray [S, ppc.land] : Google n'a pas connaissance d'un guidage en ce sens (« pourquoi voudraient-ils voir une page que personne ne voit ? »), les LLM lisent déjà le HTML ; Bing crawlera quand même pour vérifier la similarité, les versions bot sont souvent négligées. Servir des pages différentes aux bots relève du cloaking selon les commentateurs, pas selon une phrase de Google.
- Cloudflare « Markdown for Agents » (12/02/2026) [S] : conversion HTML → Markdown à la volée sur la même URL quand le client envoie `Accept: text/markdown`. Aucun élément montrant que Googlebot, OAI-SearchBot ou Claude-SearchBot l'utilisent.
- Verdict : ne pas créer de pages `.md` séparées ; une seule page HTML propre, rendue côté serveur.

---

## 4. Spécificités sites de comparatifs / affiliation

### 4.1 Quelles pages sont citées pour « best X » ?

- Ahrefs (4/12/2025, 750 prompts, 26 283 URL source, trois catégories dont produits) [P] : les listes « best X » de blog forment 43,8 % des types de pages cités par ChatGPT ; les pages d'atterrissage sont courantes pour logiciels et agences, rares pour les produits. Pour les 1 000 pages les plus citées de chaque plateforme (150 millions de prompts suivis), toutes incluaient des listicles comparatifs ; ces listes sont un peu plus présentes dans AI Overviews que dans ChatGPT.
- Peec (fév. 2026, > 1 million de citations) [P] : ChatGPT : listicles « un peu moins d'un cinquième » des URL ; fiches produit très présentes mais peu citées ; AI Mode : les pages de catégorie sont en tête (< 10 %), et ses pages les plus citées penchent vers les sources officielles de marque. Peec note qu'une version ultérieure du modèle de ChatGPT a déplacé la récupération vers des pages produit [S, non précisé].
- Seer (25/02/2026) [P] : citations de listicles dans ChatGPT -30 % entre décembre 2025 et janvier 2026 (160 000 → 111 000), -2,3 points de part (17,8 % → 15,5 %), 13 secteurs sur 16 concernés ; dans AI Overviews les listicles sont stables ou en hausse.
- Allemagne (Ahrefs Brand Radar, sept. 2026) [P] : dans les 50 premiers domaines de ChatGPT figurent test.de (3,84 %), verbraucherzentrale.de (2,84 %), idealo.de (2,71 %), trustpilot.com (2,10 %), computerbild.de (1,75 %), testberichte.de (1,17 %), mais pas dans le top 50 d'AI Overviews. Seulement 18 domaines sont communs aux deux listes top 50.
- vergleich.org : aucune étude de citation IA trouvée le concernant ; il n'apparaît pas dans une analyse blinq (~250 000 réponses IA) où OMR Reviews devance test.de, Kununu, Stepstone, OMT et Idealo [S]. Absence de donnée, pas preuve d'absence.
- Which?, Wirecutter, RTINGS : aucune étude comparative fiable sur leur place dans les réponses IA. Un échantillon de 12 requêtes sur la recherche Google fait ressortir RTINGS, Consumer Reports, CNN Underscored, Forbes Vetted, TechRadar et Reviewed (Everything PR [S, très petit échantillon]) ; l'hypothèse que le paywall de Wirecutter limite son accès aux IA n'est pas étayée [NV]. À ne pas utiliser comme argument.
- Répartition marque / tiers : OtterlyAI : Google AI Overviews cite des sites de marque à 59,8 %, ChatGPT 44,7 %, Perplexity 28,9 % [S via onlinemarketing.de, non revérifié].

Leçon pour homenura : les pages éditoriales comparatives sont bien le bon format pour « meilleur X », mais le sujet est volatil. Les listes qui résistent sont fraîches, complètes, justifiées par une méthode et des sources externes. Les sites tests allemands (test.de, Verbraucherzentrale) et les agrégateurs (idealo, testberichte) sont les concurrents de fait sur ChatGPT en allemand : s'y référer et les citer est plus réaliste que de les concurrencer sur l'autorité.

### 4.2 Le point faible : l'absence de test maison

Doc Google « Write high quality reviews » (ouverte le 30/10/2026) [P] : démontrer sa connaissance du produit avec ses propres visuels, audios ou liens vers son expérience ; baser avantages et inconvénients sur sa recherche originale ; fournir des mesures quantitatives ; expliquer pourquoi quelque chose est « le meilleur » avec des preuves de première main ; veiller à ce que les listes classées aient assez de contenu utile pour se suffire. La page ne traite pas le cas des produits non testés ; les liens affiliés sont admis, avec renvoi à la politique anti-spam sur les pages d'affiliation minces ; proposer plusieurs vendeurs est recommandé.

Conséquences [inférence, à valider] :
- Ne jamais écrire ou laisser entendre « nous avons testé ». Dire explicitement « analyse documentaire de X sources » avec la liste, la date et les critères.
- Bâtir la valeur ailleurs : synthèse de tests tiers (RTINGS, test.de, Stiftung Warentest, Which?, etc.) citée et liée ; tableaux de spécifications vérifiés sur les fiches constructeur ; compatibilités (Matter, Thread, Alexa, Google Home, HomeKit) ; historique de prix daté ; avis agrégés avec leurs limites ; ce qui n'a pas pu être vérifié.
- Une page « Comment nous classons » (méthode, pondération, fréquence de mise à jour, politique d'affiliation) liée depuis chaque article. Seer observe que les listicles avec méthodologie divulguée ou signaux externes progressent.
- Proposer plusieurs marchands (Google le recommande) : cohérent avec Amazon + autres selon pays.

### 4.3 Risques

- Clics : Pew Research (juillet 2025) : les utilisateurs cliquent sur un lien 8 % du temps avec un résumé IA contre 15 % sans [S, via wholewhale ; Google conteste la méthode]. Ahrefs : -34,5 % de clics pour le premier résultat organique (avril 2025), puis -58 % (nouvelle mesure déc. 2025, publiée en 2026) [S]. Seer (nov. 2025) : -61 % de CTR organique et -68 % de CTR payant quand un AI Overview est présent [S]. Authoritas (Royaume-Uni) : -47,5 % sur ordinateur, -37,7 % sur mobile ; Sistrix (Allemagne) : -25 à -30 % sur les premiers liens organiques (via Blog du Modérateur [S]). Méthodes et échantillons différents, fourchette ~35 % à 70 %. Google conteste ces conclusions. Un témoignage d'expert affilié cite jusqu'à ~50 % de baisse sur les guides d'achat [S, anecdotique].
- France : AI Overviews et AI Mode actifs depuis le 22/07/2026 : prévoir un effet progressif sur le trafic FR.
- Pas de gros volume IA à compenser : AI = 0,32 % du trafic web (SE Ranking, 101 574 sites, janv. 2025-avr. 2026, publié le 18/06/2026 [P]) ou 1,08 % (Conductor, 13 770 domaines [S]) ; croissance x16 entre 2024 et 2026 selon SE Ranking, +33 % dans l'UE. ChatGPT = 74,78 % des visites IA. Taux de conversion supérieurs avancés (Similarweb 11,4 % vs 5,3 %) mais [S, non vérifié] et pas spécifiques à l'affiliation.
- Pénalités Google : la politique « site reputation abuse » (mars 2024) vise surtout le contenu tiers hébergé sur un site à forte autorité [NV pour le détail, connaissance antérieure] ; elle concerne peu un site à contenu propre, mais les affiliés ont subi de fortes baisses (jusqu'à -90 % sur certaines sections, [S, sources du secteur affilié]) ; enquête de la Commission européenne depuis novembre 2025 sur sa compatibilité avec le DMA [S]. Le risque plus direct pour homenura : « scaled content abuse » et pages d'affiliation minces. Doc Google (10/07/2026) [P] : produire en masse des pages pour des variantes de requêtes ou des requêtes de fan-out viole la politique ; l'usage d'outils d'IA doit respecter Search Essentials. Traduire 41 articles en 6 langues est légitime si chaque version est utile et localisée ; le risque monte avec des pages quasi identiques générées en série, sans valeur ajoutée par marché [inférence].

---

## 5. Accélérateurs (et ce qu'il ne faut pas faire)

### 5.1 Ce qui accélère réellement

- **IndexNow** (déjà en place) : ping aux moteurs participants (Bing, Naver, Seznam, Yandex, Yep ; pas Google, pas Brave) [P, indexnow.org] ; ne garantit pas l'indexation. Bing recommande de l'utiliser avec la mise à jour régulière des contenus [P, billet AI Performance]. Aucune preuve qu'IndexNow accélère ChatGPT [S].
- **Bing Webmaster Tools** : soumission d'URL, sitemaps, AI Performance. Les sitemaps avec `lastmod` exact (seulement si le contenu a vraiment changé) sont un signal de fraîcheur [NV : bonne pratique connue, non re-vérifiée ici].
- **Google** : sitemaps, maillage interne, Search Console (inspection d'URL). L'API Indexing de Google ne sert officiellement qu'aux pages JobPosting ou BroadcastEvent dans un VideoObject ; les abus (comptes multiples pour dépasser les quotas) peuvent entraîner la révocation de l'accès (doc Google [P]) ; un salarié de Google recommande de s'en tenir aux cas documentés (mai 2025, [NV]). À ne pas utiliser pour des articles.
- **Brave** : `search.brave.com/submit-url` + liens entrants [S, forums communautaires].
- **Mentions de marque** : c'est le facteur le mieux corrélé (Ahrefs). Pistes authentiques : être cité dans des guides et revues spécialisés, vidéos YouTube (mentions ≈ 0,737 de corrélation ; YouTube = premier domaine cité par AI Overviews), contributions utiles sur Reddit et forums locaux (répondre à la question, divulguer le lien d'affiliation, pas de promotion), citations par des sites de tests que homenura relaie. Google dit que chercher des mentions inauthentiques ne sert à rien et que ses systèmes bloquent le spam [P].
- **Wikidata** : aucune preuve d'effet pour un petit site [NV]. Facultatif. Une page « À propos » claire, un schema Organization avec `sameAs` vers ses profils réels et des auteurs identifiés suffisent comme base d'entité [inférence].
- **Rapidité d'exploration IA** : la doc OpenAI et Perplexity donnent ~24 h pour prendre en compte robots.txt/WAF [P].

### 5.2 À ne PAS faire

1. Pages `.md` ou JSON servies uniquement aux bots (risque de cloaking, Google et Bing ne les recommandent pas, 5/02/2026).
2. Falsifier ou rafraîchir artificiellement les dates (Google : dates cohérentes et réelles ; Mueller met en garde).
3. Générer en masse des pages pour chaque variante de requête ou fan-out (scaled content abuse, doc Google 10/07/2026).
4. Utiliser l'API Indexing de Google pour des articles.
5. Faux avis, faux notes agrégées, balisage Review/AggregateRating qui ne correspond pas au contenu visible.
6. Astroturfing Reddit / faux témoignages : risque de bannissement et inutile selon Google.
7. Bloquer Bingbot, OAI-SearchBot, PerplexityBot, Claude-SearchBot via robots.txt ou le WAF/Cloudflare Bot Fight Mode (Perplexity prévient du cas Cloudflare [P]).
8. Cacher du texte destiné aux LLM (texte invisible, instructions à l'IA) [NV : principe général anti-spam, non re-vérifié].
9. S'obséder sur llms.txt, FAQPage ou ItemList comme levier : aucune preuve d'effet.
10. Faire croire à un test produit qui n'existe pas (risque réputationnel et conformité avis ; Google exige des preuves de première main pour les « meilleur »).
11. Traduire à l'identique en série sans valeur ajoutée locale.
12. Compter sur Reddit seul : sa part dans ChatGPT s'est effondrée en deux mois en Allemagne (10,11 % → 1,80 %, Ahrefs, juil.→sept. 2026).

---

## 6. Checklist actionnable (19 points, classés par impact attendu)

L'ordre est mon jugement fondé sur les preuves ci-dessus ; les gains ne sont pas chiffrables pour homenura.

### Impact très fort : fondations

1. **Indexation Google + Bing des 6 langues** : couverture dans GSC et Bing WMT, canonicals auto-référents par langue, hreflang réciproque + `x-default`, sitemap par langue avec `lastmod` réel. Tout le reste en dépend.
2. **HTML complet rendu côté serveur** (SSG/ISR/SSR dans Next.js) pour la réponse rapide, les listes, tableaux et FAQ : les crawlers IA n'exécutent pas le JS (Vercel/MERJ, déc. 2024 [S]). Tester avec `curl` en changeant l'User-Agent vers OAI-SearchBot, PerplexityBot, Claude-SearchBot.
3. **Autoriser les bons bots, WAF compris** : robots.txt + plages IP (openai.com/searchbot.json, perplexity.ai/perplexitybot.json), désactiver le Bot Fight Mode si besoin, vérifier les logs. (Déjà autorisés dans robots.txt ; vérifier le CDN.)
4. **Transparence de méthode** : page « Comment nous évaluons » (analyse documentaire, sources, critères, fréquence de mise à jour, politique d'affiliation), liée depuis chaque article, auteur identifié. Palliatif essentiel à l'absence de test maison (guide Google avis + tendance Seer).
5. **Valeur propre vérifiable** : tableaux comparatifs sourcés (spécifications, compatibilités, dimensions, consommation), prix datés par marché, synthèse de tests tiers avec liens. Les chiffres et sources augmentent les citations (GEO paper ; SE Ranking : 19+ statistiques → 5,4 vs 2,8).

### Impact fort

6. **Fraîcheur réelle** : revoir les ~20 pages les plus stratégiques tous les 60-90 jours (prix, nouveaux modèles, dispo) ; `dateModified` + date visible « Mis à jour le » alignés ; « 2026 » dans le titre quand pertinent ; `lastmod` du sitemap et IndexNow à chaque vraie mise à jour. Ne jamais changer la date sans modification de fond.
7. **Réponse directe en tête de section** (format ci-dessous), passages autonomes, mêmes critères de lecture dans les 6 langues.
8. **Titres calqués sur le vocabulaire réel des requêtes** (« meilleur aspirateur robot pour poils d'animaux », « Alexa vs Google Home ») plutôt que des titres créatifs. Vérifier chaque langue avec les requêtes locales (GSC, Bing grounding queries) ; ne pas supposer que la question littérale est mieux (SE Ranking : titres-questions 3,4 vs 4,3).
9. **Localisation réelle par marché** (marchands et marques locales, prix en euros, normes, disponibilité, liens Amazon.fr/.de/.es/.it/.nl/.pl), pas de traduction brute ; garder la version anglaise forte (ChatGPT fait des sous-recherches en anglais dans ~78 % des cas non anglais).
10. **Listes complètes et justifiées** : Seer observe les listes en croissance à 10-20 options ; viser 8 à 15 quand le sujet le permet (jugement personnel, pas une norme), avec « idéal pour », pour/contre, fourchette de prix, critères de classement et limites ; éviter les listes courtes de 5 à 8 options, signalées comme en recul (Seer). Sans fabriquer de pages en série.
11. **Mesure hebdomadaire/mensuelle** : Bing AI Performance (requêtes de grounding, part de citation), rapport GAI de la Search Console, logs de bots, référents IA, panel de 30 à 50 prompts × 6 langues × 4 moteurs.

### Impact moyen

12. **Mentions et présence tierces** : stratégie d'une à deux chaînes réelles (YouTube : fiches vidéo ou Shorts sur les comparatifs ; communautés : réponses utiles, divulgation du lien), relations avec sites de tests et blogs maison connectée. Cible : mentions de marque (corrélation 0,66-0,71) plutôt que backlinks bruts.
13. **Entité et confiance** : pages À propos / Contact / Auteurs / mentions affiliation, schema Organization (+ `sameAs` réels), Person pour les auteurs, cohérence nom-logo-URL sur toutes les langues (Microsoft recommande la cohérence des entités).
14. **Brave** : soumettre les URL clés et les hubs, vérifier `site:` dans Brave, vérifier qu'aucun blocage n'existe côté serveur.
15. **Données structurées honnêtes** : garder Article (dateModified), BreadcrumbList, ItemList, FAQPage visible ; ajouter Product ou Review seulement si cohérent avec le contenu visible. Zéro attente de gain IA.
16. **Performance** (LCP/FCP, hébergement Vercel, images) : corrélation avec les citations (SE Ranking) et facteur SEO classique.
17. **Maillage interne** hubs ↔ articles ↔ comparatifs (Google cite les liens internes comme base).

### Impact faible / entretien

18. **llms.txt** : conserver tel quel, ne pas investir (97 % jamais lus ; Google et SE Ranking : aucun effet).
19. **Préparer le polonais** avec les mêmes règles (hreflang, marchands polonais, Allegro, pas de traduction brute) ; surveiller dès le lancement avec les mêmes outils.

### Format idéal de la « réponse directe » (à placer sous le H1 et au début de chaque section clé)

Principes [synthèse des preuves ci-dessus ; longueurs = heuristiques de praticiens, non établies] :
- Longueur : 40 à 70 mots pour la capsule (une phrase de verdict de 20-25 mots + une phrase de critère). Les listes de 3 choix ensuite, chacune avec « idéal pour » + 1 chiffre.
- Ordre : verdict → critère de choix → chiffre clé daté → limite honnête → date de mise à jour.
- Formulation : sujet nommé en toutes lettres (pas de « ce modèle »), vocabulaire de la requête, pas de superlatif sans critère, pas de lien dans la phrase de verdict, aucune promesse de test.
- Une seule affirmation principale par capsule ; le détail dans le corps.

Modèle (remplacer les crochets par des faits vérifiés, ne pas inventer de chiffres) :

> **Meilleur [catégorie] en [année] selon notre analyse documentaire : le [Produit A].** Il arrive en tête sur [critère 1] et [critère 2] d'après [N] sources (liste ci-dessous), pour [fourchette de prix] € environ. Limite : [point faible précis]. Alternatives : [Produit B] pour [usage], [Produit C] pour [budget]. Mis à jour le [JJ/MM/AAAA] ; méthode : [lien « Comment nous évaluons »].

Pour le balisage de la réponse rapide : ItemList visible correspondant à la liste affichée (déjà en place), aucune donnée dans le JSON-LD absente de la page.

### Modèle de FAQ « facile à citer »

Règles :
- Question avec les mots qu'un utilisateur taperait (une langue par page, pas de mélange).
- Réponse de 40 à 70 mots ; la 1re phrase se lit seule (sujet répété, réponse directe, pas de « cela »/« il »).
- Un chiffre ou un critère vérifiable + une date ou une version quand pertinent ; une limite ou une exception.
- Aucune formule commerciale ; pas de lien dans la 1re phrase ; liens vers la méthode ou la source en fin de réponse.
- FAQ visible, alignée mot pour mot avec le JSON-LD FAQPage ; 4 à 8 questions par hub, pas plus ; questions réelles (GSC, grounding queries Bing, « autres questions posées »).
- Ne pas créer une FAQ par variante de requête (risque « scaled content »).

Exemple de structure :

> **Q : [Quelle prise connectée est compatible avec Matter et Alexa en [année] ?]**
> R : Le [Produit A] est compatible avec Matter et Alexa depuis la mise à jour [version] de [mois année] d'après la fiche constructeur. La compatibilité Thread dépend de [condition]. Le [Produit B] ne gère que [protocole]. Source et date de vérification : [constructeur, JJ/MM/AAAA].

---

## 7. Ce qui reste incertain ou non vérifié

- Fournisseur réel de ChatGPT par mode (gratuit, thinking, shopping, Deep Research) : seules des inférences de Peec ; OpenAI ne documente pas son architecture.
- Rôle exact de Bing dans ChatGPT depuis Web IQ : annoncé par Microsoft, non confirmé par OpenAI ; part de trafic Bing dans ChatGPT inconnue.
- Brave comme seul index de Claude : indice très fort, mais turbopuffer apparaît depuis mai 2026 ; rôle inconnu.
- Bing AI Performance : fonctionnalités de juin 2026 (intent, citation share, export) issues d'un seul article ; vérifier dans l'interface. L'URL directe bing.com/webmasters/aiperformance vient de tiers.
- Rapport GAI de la Search Console : détails issus de la presse secondaire (page Google illisible dans mon outil) ; disponibilité par site incertaine.
- Études citées d'éditeurs d'outils (Ahrefs, SE Ranking, Seer, Peec, Temso, Profound) : corrélations, périmètres différents (anglais surtout, B2B/SaaS surreprésenté) ; aucune n'est spécifique aux comparatifs maison connectée européens.
- Place de vergleich.org, Which?, Wirecutter, RTINGS dans les réponses IA : aucune étude fiable trouvée.
- Effet d'un FAQPage/ItemList sur les citations : aucune preuve positive ; une corrélation négative (SE Ranking).
- Effet de la dernière version de ChatGPT sur les listicles (retour vers les fiches produit, Peec) : non vérifié.
- Faits non re-contrôlés (connaissance antérieure) : restriction des résultats enrichis FAQ (2023), `utm_source=chatgpt.com`, contenu précis de la politique « scaled content abuse » de mars 2024, `lastmod` dans les sitemaps pour Bing.

---

## 8. Sources principales

Primaires (ouvertes le 30/10/2026) :
- Bing Webmaster Blog, « Introducing AI Performance in Bing Webmaster Tools (Public Preview) », 10/02/2026 : https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- OpenAI, doc bots (OAI-SearchBot, GPTBot, ChatGPT-User) : https://developers.openai.com/api/docs/bots
- Anthropic, crawlers (ClaudeBot, Claude-User, Claude-SearchBot) : https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity, doc bots : https://docs.perplexity.ai/guides/bots
- Perplexity, « Architecting and Evaluating an AI-First Search API », 25/09/2025 : https://www.perplexity.ai/hub/blog/architecting-and-evaluating-an-ai-first-search-api
- Google, « Optimizing your website for generative AI features » (mise à jour 10/07/2026) : https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, AI features : https://developers.google.com/search/docs/appearance/ai-features
- Google, publication dates : https://developers.google.com/search/docs/appearance/publication-dates
- Google, high quality reviews : https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews
- Google Indexing API (périmètre JobPosting/BroadcastEvent) : https://developers.google.com/search/apis/indexing-api
- Microsoft Web IQ : https://www.microsoft.com/en-us/WebIQ
- IndexNow : https://www.indexnow.org/
- Arxiv GEO (Aggarwal et al., KDD 2024) : https://arxiv.org/abs/2311.09735
- SE Ranking, facteurs de citation ChatGPT, 24/11/2025 : https://seranking.com/blog/chatgpt-citation-factors/
- SE Ranking, trafic IA, 18/06/2026 : https://seranking.com/blog/ai-traffic-study/
- Ahrefs, pages « best » ChatGPT, 4/12/2025 : https://ahrefs.com/blog/best-lists-research/
- Ahrefs, fraîcheur (17 millions de citations), 28/07/2025 : https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/
- Ahrefs, AI Overviews et top 10, 2/03/2026 : https://ahrefs.com/blog/ai-overview-citations-top-10
- Ahrefs, 75 000 marques, 12/12/2025 : https://ahrefs.com/de/blog/ai-brand-visibility-correlations/
- Ahrefs, Allemagne AI Overviews vs ChatGPT (sept. 2026) : https://ahrefs.com/de/blog/ai-overviews-vs-chatgpt-quellen/
- Seer Interactive, listicles, 25/02/2026 : https://www.seerinteractive.com/insights/the-listicle-window-is-closing-in-ai-search-30-decline-mom
- Seer Interactive, SearchGPT et Bing, 6/02/2025 : https://www.seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results
- Peec AI, index propre de ChatGPT (sept. 2026) : https://docs.peec.ai/research/chatgpt-own-search-index-labrador
- Peec AI, ChatGPT recherche en anglais (fév. 2026) : https://docs.peec.ai/research/chatgpt-searches-in-english
- Peec AI, types de contenu cités (fév. 2026) : https://docs.peec.ai/research/content-types-cited-most-by-engine
- Temso, « Lost in Translation » (maj 20/04/2026) : https://www.temso.ai/data/-Lost-in-Translation-How-AI-Models-Handle-Local-Language-Sources
- Profound, langue des requêtes (mars 2026) : https://www.tryprofound.com/blog/how-query-language-reshapes-ai-citations
- Profound, Claude et Brave (21/03/2025) : https://www.tryprofound.com/blog/technology

Secondaires :
- TechCrunch, Claude et Brave, 21/03/2025 : https://techcrunch.com/2025/03/21/anthropic-appears-to-be-using-brave-to-power-web-searches-for-its-claude-chatbot/
- xponent21, sous-traitants web search d'Anthropic : https://xponent21.com/insights/claude-web-search-brave-turbopuffer/
- PiunikaWeb, Brave et Claude Cowork, 30/06/2026 : https://piunikaweb.com/2026/06/30/brave-claude-cowork-web-research/
- ppc.land, Google et Bing sur les pages Markdown, février 2026 : https://ppc.land/google-and-bing-say-no-separate-markdown-pages-for-ai-violate-search-policies/
- ppc.land, llms.txt (Ahrefs/Originality.ai), 2/07/2026 : https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/
- ppc.land, rapports Search Console IA, juin 2026 : https://ppc.land/google-finally-gives-search-console-its-own-generative-ai-visibility-reports/
- Search Engine Journal, Web IQ : https://searchenginejournal.com/microsoft-web-iq-gives-ai-agents-bing-grounding-apis/577736/
- Search Engine Journal, guide AEO/GEO de Microsoft (janv. 2026) : https://www.searchenginejournal.com/a-breakdown-of-microsofts-guide-to-aeo-geo/565651/
- Search Engine Roundtable, étude Ahrefs sur le schema (13/05/2026) : https://www.seroundtable.com/study-schema-citations-study-41311.html
- Practical Ecommerce, AI Performance de Bing (juin 2026) : https://www.practicalecommerce.com/bings-improved-ai-performance-section
- Blog du Modérateur, AI Overviews et AI Mode en France (22/07/2026) : https://blogdumoderateur.com/google-deploie-ai-overviews-ai-mode-france
- CIO.de / Verdane-Norstat (juin 2025, 7 282 personnes) : https://www.cio.de/article/4027108/ki-verdraengt-suchmaschinen-als-shopping-ratgeber.html
- Vercel, « The rise of the AI crawler » (déc. 2024) : https://vercel.com/blog/the-rise-of-the-ai-crawler
- Blumint, résumé de l'étude Peec : https://blumint.co/blog/chatgpt-search-index
