# Étude SEO de marché — Homenura : Pays-Bas (+ Flandre) et Pologne

Date de collecte : 30/10/2026. Étude rédigée à partir de recherches web réelles. Aucun code du site n'a été modifié.
Règle du site rappelée : aucun test produit réalisé, donc jamais « door ons getest » / « przetestowane przez nas » ; citations autorisées avec lien : Consumentenbond, Test Aankoop, Tweakers, Komputer Świat.

---

## 0. Méthode, sources et limites (à lire avant les chiffres)

**Ce qui est réellement mesuré (30/10/2026)**

| Code | Source | Ce que c'est | Limites |
|---|---|---|---|
| S1 | Google Autocomplete (suggestions, hl=nl gl=nl) | 1 170 requêtes NL (30 graines x 39 modificateurs : beste, kopen, vs, werkt niet, verbruik, zonder, welke, goedkoop, a-z) | ~24 % de réponses vides (étranglement) : robotstofzuiger, steelstofzuiger, snoerloze stofzuiger, dubbele airfryer quasi vides. **Pologne : collecte arrêtée** (voir limite budget ci-dessous), donc pas de suggestions PL. Les suggestions montrent le vocabulaire, pas les volumes. |
| S2 | Google Trends NL, 12 mois (API non officielle) | Indice relatif de 88 termes NL, chaînés par paliers autour de « airfryer » | Trends compte **toutes** les requêtes contenant les mots (recettes, accessoires, pannes) : un terme générique est surestimé côté achat. Termes < 0,1 : erreur de chaînage élevée (classer « très faible », pas plus). 88 termes NL soumis, 12 non résolus (quasi nuls). **Pologne : Google a répondu HTTP 429 (blocage) pendant toute la rédaction : aucun indice PL.** |
| S3 | SERP DuckDuckGo/Bing, nl-nl et pl-pl | 23 requêtes NL + 20 requêtes PL, top 10 organique | **Ce n'est pas Google.** Ordre indicatif. Tweakers et Kieskeurig sont mal ou pas indexés par cette source (la requête site:tweakers.net renvoie 0 résultat) : leur absence ne prouve rien. |
| S4 | Lecture directe de pages (WebFetch) | Pages concurrentes, homenura.com (page, sitemap, HTML), aboutamazon.pl, brandweer.nl, gov.pl, Deloitte NL, lootjestrekken.nl | Résumés produits par un petit modèle : citations à vérifier avant publication. |
| S5 | WebSearch | Résumés de recherche | Résumés parfois approximatifs ; marqués « (à vérifier) » quand non confirmés à la source. |

**Limite budget** : le quota de 200 recherches WebSearch de la session a été épuisé pendant l'étude. J'ai donc arrêté la collecte autocomplete PL (qui interroge un moteur) et je n'ai pas contourné la limite. Conséquence : la partie Pologne repose sur S3 (SERP) + S4 (pages) + connaissance linguistique, **sans indice de volume**. Si une session ultérieure veut compléter : relancer Trends PL (script prêt côté session) et l'autocomplete PL.

**Aucun volume absolu** (pas de Keyword Planner, Ahrefs, Senuto, Semrush : le connecteur Ahrefs n'est pas autorisé). Les « ordres de grandeur » NL sont donc **estimation** = indice Trends x une hypothèse de calage (voir A.1). À remplacer par les chiffres Search Console / Keyword Planner dès que possible.

**Convention** : « (estimation) » = non sourcé ou hypothèse ; « (à vérifier) » = vient d'un résumé non confirmé à la source ; [S1]…[S5] = code de source.

---

## 0 bis. Constats sur homenura.com (observés le 30/10/2026, à confirmer côté code)

Observé sur la page NL `/nl/blog/heissluftfritteuse-stromverbrauch-kosten`, la page d'accueil NL et le sitemap :

1. **Les liens Amazon des pages NL pointent vers amazon.fr** (10 occurrences sur le seul article ; tag `homenuraen05-21` ; idem sur la page d'accueil NL). Amazon.nl a son propre programme (PartnerNet NL, tag propre, [S4] geniuslink.com/blog/amazon-associates-netherlands). C'est probablement le plus gros levier de conversion NL (voir A.5 action 1).
2. **Slugs non localisés et partagés entre les 6 langues** : l'article NL a le slug allemand `heissluftfritteuse-stromverbrauch-kosten` ; les rubriques ont des slugs français (`/nl/entretien-maison/aspirateurs-robots`, `/nl/guides/probleme/ne-chauffe-plus`) ; le blog NL mélange FR/DE/ES (`aire-acondicionado-portatil-sin-tubo`).
3. **Hreflang** : `x-default` pointe vers `/fr/...` ; 444 URLs par langue dans le sitemap (FR/EN/DE/ES/IT/NL), **0 URL PL** (`/pl` répond 301).
4. **Texte non localisé** : l'article NL dit « Duitsland heeft een van de hoogste stroomprijzen van Europa » ; tarif de calcul 0,35 EUR/kWh (valeur non vérifiée pour 2026).
5. **H1 de la page d'accueil NL : « De Beste Smart Airfryers van 2026 »** — « smart airfryer » n'est pas un terme néerlandais courant (voir A.1).
6. **Atouts** : balisage FAQPage + Article + BreadcrumbList présent ; 265 pages « probleme » (pannes) en NL ; hub `/nl/black-friday` avec 6 sous-pages ; page « Methodologie » + « Nura Score ». L'article « Stroomverbruik Airfryer » **sort en 3e position** sur Bing nl-nl pour « airfryer verbruik stroom kosten » [S3] : le format « verbruik » fonctionne déjà.

---

# PARTIE A — PAYS-BAS (+ Flandre)

Contexte audience : 26 clics Google / 28 jours (donnée fournie). Dans nos données, la demande flamande est visible : Test-Aankoop.be, doorbelicht.be, besterobotmaaier.be, vandenborre.be apparaissent dans les SERP NL ; Google suggère « kopen met ecocheques », « België », « Fluvius » [S1][S3].

## A.1 Vocabulaire réel des acheteurs

**Lecture des volumes (S2)** : indice Trends NL 12 mois, **« airfryer » = 100**. Taille estimée (hypothèse de calage **arbitraire, pour fixer une échelle** : requête large « airfryer » ≈ 300 000 recherches/mois aux Pays-Bas — **estimation non vérifiée**, donc 1 point d'indice ≈ 3 000/mois) : XL ≥ 30 (≥ ~90 k) ; L 10–30 (~30–90 k) ; M 3–10 (~10–30 k) ; S 1–3 (~3–10 k) ; XS 0,1–1 (~0,3–3 k) ; XXS < 0,1 (< ~300). L'intention d'achat explicite (« beste X ») ne représente qu'une fraction, non chiffrée, du terme large.

Règles néerlandaises observées dans les suggestions Google [S1] :
- On écrit **« onder 100 euro »** (SERP : « de 19 beste airfryer onder 100 euro… ») ; la forme « tot 100 euro » existe peu (suggérée seulement pour « beste airfryer » et « mobiele airco »).
- Le modificateur **« zonder abonnement »** apparaît dans les suggestions spontanées (sans que nous l'ayons imposé) pour videodeurbel, buitencamera, beveiligingscamera, alarmsysteem.
- Le modificateur **« consumentenbond »** est suggéré spontanément dans les listes « beste X » de la majorité des catégories (« beste X consumentenbond ») : l'intention est « vérifier l'avis du tiers de confiance ».
- Les enseignes bon marché pèsent : **Action, Lidl, IKEA, Gamma, Praxis, MediaMarkt, Coolblue, bol** apparaissent comme suffixes (« airfryer action », « balkon zonnepanelen lidl »). Google suggère même « airfryer kopen met ING punten ».
- Anglicismes courants : « wake up light », « airfryer », « powerstation », « smart lock » (mais « slim slot » domine).

### Les 20 catégories prioritaires

**1. Airfryer (XL, dual)** — *Principal :* « airfryer » (100 ; inclut recettes/accessoires). *Variantes :* « airfryer xl » (1,9, S), « dubbele airfryer » (1,6, S), « airfryer xxl », « airfryer met stoomfunctie », « dual zone / double stack / duo » (suggérés après « airfryer xl d »). *Modificateurs réels :* beste airfryer (2026, consumentenbond, test aankoop, voor 2 personen, friet, met stoomfunctie) ; « airfryer beste koop » (label Consumentenbond) ; vergelijken (met oven, kassa, test aankoop) ; kopen (waar op letten, pfas vrij) ; goedkoop (action, mediamarkt) ; **vs** (oven, heteluchtoven, frituur/frituurpan, magnetron) ; **werkt niet (meer)** (display, ventilator, Philips, Ninja) ; **verbruik** (watt, versus oven, « verbruikt airfryer veel stroom ») ; **zonder pfas / teflon / plastic / mandje** ; welke (maat, olie, kopen) ; « airfryer xl black friday ». *Intention :* mixte (achat, comparaison, usage/recettes, panne). *Verdict :* mot-clé « beste airfryer » correct ; **angles PFAS/coating et verbruik** sont des différenciateurs NL.

**2. Robotstofzuiger (avec dweilfunctie)** — *Principal :* « robotstofzuiger » (9,5, M). *Variantes :* « robotstofzuiger met dweilfunctie » (0,7, XS), « dweilrobot » (0,18, XS), « robot dweilen stofzuiger », « robot die kan dweilen ». *Modificateurs :* Google ne renvoie quasi rien (étranglement) ; SERP : « met dweilfunctie », « (49 vergeleken) », « top 8 », « 11.203 reviews ». *Marques suggérées :* Dreame, Eufy, Philips. *Verdict :* le fichier utilise **« robot stofzuiger dweiler » : mal choisi** (« dweiler » n'est pas le libellé ; Consumentenbond/Test-Aankoop/bol écrivent « met dweilfunctie »).

**3. Volautomaat / bonenmachine** — *Principal :* « volautomatische koffiemachine » (1,05, S) / « volautomaat » (0,73, XS) / « bonenmachine » (0,32, XS) ; la requête large « koffiemachine » = 26 (L). *Modificateurs :* beste volautomaat (consumentenbond, koffiemachine met melkopschuimer) ; « beste bonenmachine 2026/2025/voor thuis » ; **volautomaat vs halfautomaat / piston / nespresso** ; « zonder melkopschuimer » ; goedkoopste ; welke. *Verdict :* le fichier a « beste slimme koffiezetapparaat » : **mal choisi** (terme non résolu par Trends, absent des suggestions).

**4. Steelstofzuiger / snoerloze stofzuiger** — *Principal :* « steelstofzuiger » (9,7, M) : libellé des catégories bol, Coolblue, Consumentenbond, Kieskeurig. « snoerloze stofzuiger » : indice chaîné très bas (0,06) **mais jugé peu fiable** (Google ne renvoie qu'une variante ; à revérifier avec Search Console). *Modificateurs :* draadloos, zonder zak, beste koop consumentenbond, test aankoop ; marques Dyson, Bosch, Rowenta. *Verdict :* « beste steelstofzuiger » OK.

**5. Slimme thermostaat (Tado, Nest, Toon…)** — *Principal :* « slimme thermostaat » (2,3, S). *Marques :* « tado » (9,3, M — **4x la catégorie**), « nest thermostaat » (0,74, XS), Toon, Honeywell, Eneco, Vaillant vSmart. *Modificateurs :* beste slimme thermostaat (2026, consumentenbond, **tweakers**, met radiatorknoppen) ; **zonder abonnement / cloud / ketelmodule / wifi** ; **welke … voor intergas ketel / vloerverwarming / past bij mijn ketel** (compatibilité = question n°1) ; **werkt niet** (« bij vorst : CV slaat af », tado) ; goedkoopste. *Verdict :* OK ; ajouter pages « compatibilité chaudière » et pages marque.

**6. Videodeurbel** — *Principal :* « deurbel met camera » (2,5, S) > « videodeurbel » (1,2, S). Libellé Consumentenbond et Coolblue : « deurbel met camera » ; bol : « deurbellen met camera / videodeurbel » ; MediaMarkt : « slimme deurbel ». *Modificateurs :* **zonder abonnement** (n°1), bedraad/draadloos, aansluiten op bestaande bel, appartement, met scherm, werkt niet ; marques Eufy, Ring, Finex, Flinq, Guardstech, Tapo, Action. *Verdict :* « beste videodeurbel » à compléter par « deurbel met camera » en H1.

**7. Slim slot** — *Principal :* « slim slot » (0,07, XXS). *Modificateurs :* voordeur, tuinpoort, met vingerafdruk, buiten/buitendeur, op bestaande cilinder, met code ; marques Aqara, Ajax, Bold, Eufy, Ezviz ; compatibilité Apple HomeKit/Home Assistant/Homey. *Verdict :* niche ; garder en soutien.

**8. Rookmelder (verplicht depuis 2022)** — *Principal :* « rookmelder » (8,1, M). *Fait vérifié :* obligatoire **depuis le 1er juillet 2022** dans tous les logements, au moins 1 par étage, norme EN 14604, pile 10 ans conseillée [S4 : brandweer.nl]. *Modificateurs :* **verplicht**, piept, beste rookmelder (2026, consumentenbond, **10 jaar batterij**, 230v, test aankoop), rookmelder en koolmonoxidemelder (1,6 pour « koolmonoxidemelder », S), zonder boren/batterij, welke (adviseert de brandweer), kopen gamma/praxis/action. SERP « rookmelder verplicht » : sites publics et associatifs (Rijksoverheid, brandweer, Eigen Huis, vve.nl) — imbattable sur l'informationnel. *Verdict :* **« slimme rookmelder » est mal choisi** (0,03 contre 8,1 pour « rookmelder » : division par ~270, mesuré). Cibler « beste rookmelder ».

**9. Luchtreiniger** — *Principal :* « luchtreiniger » (6,6, M). *Modificateurs :* slaapkamer, met hepa filter, allergie / astma / copd / dierenharen / sigarettenrook / geur / fijnstof, beste luchtreiniger (consumentenbond), « luchtreiniger kopen onzin » (scepticisme), vs luchtontvochtiger, verbruik, filter vervangen ; marques Philips, Dyson, Rolfstone, Vibrix, Duux, IKEA. *Verdict :* OK.

**10. Luchtontvochtiger** — *Principal :* « luchtontvochtiger » (4,1, M). *Modificateurs :* woonkamer / kelder / badkamer / slaapkamer, beste (consumentenbond, met wasdroogfunctie, 2-in-1 met luchtreiniger), **vs airco / bouwdroger / vochtvreter**, verbruik / laag verbruik, werkt niet, zonder afvoerslang / compressor ; kopen met ecocheques (BE). *Verdict :* OK ; saison automne-hiver.

**11. Mobiele airco (zonder slang)** — *Principal :* « mobiele airco » (18, L) ; la requête large « airco » = 145. *Modificateurs :* **zonder slang** (n°2–3 des suggestions : « beste mobiele airco zonder slang consumentenbond », « zonder slang best getest »), met slang, vs vaste airco / split unit / ventilator / luchtkoeler / monoblock, **verbruik per uur / kwh**, slaapkamer, goedkoop (lidl, bol), « 100 euro », werkt niet. *Attention éditoriale :* un « airco zonder slang » est en pratique un refroidisseur par évaporation ; ne jamais promettre une climatisation réelle. *Verdict :* OK ; saisonnier (été).

**12. Elektrische kachel / heater** — *Principal :* « heater » (21, L) et « elektrische kachel » (4,9, M). *Modificateurs :* woonkamer / badkamer / met thermostaat / camping, **vs gas / airco / olie gevuld / cv / infrarood paneel**, **verbruik per uur / per jaar**, « welke … verbruikt het minste stroom », zonder geluid / ventilator, infraroodkachel, terrasverwarmer. *Verdict :* le fichier a « slimme bijverwarmer » : **mal choisi** (non mesuré ; « bijverwarmer » n'apparaît ni dans les suggestions ni dans les SERP).

**13. Robotmaaier (zonder draad)** — *Principal :* « robotmaaier » (6,6, M) ; « robotmaaier zonder draad » (0,44, XS) est pourtant le n°2 des suggestions Google. *Modificateurs :* gps, zonder grensdraad / begrenzingsdraad, kleine tuin, grote tuin, husqvarna, lidl, garage, kopen in duitsland, **werkt niet (meer)** (très suggéré, par marque), welke hoogte, vs zitmaaier / grasmaaier. SERP dominé par des sites de niche (robotgrasmaaiervergelijken.nl, besterobotmaaier.be, grasmaaieradvies.nl, robotmaaierwijzer.nl). *Verdict :* OK ; saison mars-juin.

**14. Zwembadrobot** — *Principal :* « zwembadrobot » (0,29, XS, saisonnier). *Modificateurs :* draadloos, dolphin / zodiac, opzetzwembad, op accu, rond zwembad, kopen belgië, test aankoop, werkt niet meer. *Verdict :* OK, petit volume.

**15. Buitencamera / beveiligingscamera buiten** — *Principal :* « buitencamera » (1,7, S) ; « beveiligingscamera » (2,7, S) + « beveiligingscamera buiten » (suggestion n°2). *Modificateurs :* **zonder abonnement**, draadloos, wifi, op zonne-energie, zonder stroom / wifi / internet, nachtzicht, zonder boren, dummy ; marques Eufy, Ring ; méfiance : « welke beveiligingscamera komt niet uit China ». *Verdict :* OK ; « beveiligingscamera buiten » à privilégier dans les titres.

**16. Laadpaal** — *Principal :* « laadpaal » (30, XL) / « laadpaal thuis ». *Modificateurs :* **beste laadpaal voor thuis** (consumentenbond, met zonnepanelen, anwb), kopen en installeren, met mid meter, **vs wallbox / stopcontact**, 1 fase vs 3 fase, peblar vs zaptec, load balancing, zonder abonnement / laadpas, verbruik, werkt niet (na stroomstoring). SERP : LaadpalenWijzer, ANWB, Eigen Huis, Essent, installateurs. *Verdict :* le fichier a « laadpaal elektrische auto » : **à corriger** vers « laadpaal thuis ».

**17. Slimme stekker / energiemeter** — *Principal :* « slimme stekker » (1,4, S) ; « energiemeter » (0,8, XS) ; « slimme meter » (5,4, M ; compteur fournisseur : intention informationnelle). *Modificateurs :* met energiemeter / verbruiksmeter, **energiemeter stopcontact**, P1 (HomeWizard), met app, buiten, zonder hub / wifi, google home / hue / homewizard. *Verdict :* « slimme energiemeter » du fichier : **mal choisi** ; viser « energiemeter stopcontact » + « P1 energiemeter ».

**18. Balkon zonnepanelen / plug-and-play** — *Principal :* « balkon zonnepanelen » (**pluriel**). Volume NL **très faible** (< 0,1 ; « plug and play zonnepanelen » et « stekkerzonnepanelen » non résolus), alors que le fichier le classe « high ». *Modificateurs :* met stekker, plug and play, 800 w, met accu / batterij, lidl / ikea / action, **mag dat**, belgië, duitsland, ecoflow, flexibel, appartement. *Statut légal (à vérifier) :* les sources sont contradictoires ; un site affirme qu'une règle 800 W s'applique depuis le 1/4/2026, non confirmée par une source officielle ; Solar Magazine (avril 2026) dit que des produits plug-in ont été retirés de la NEN 1010 (résumé de recherche, à vérifier). **Ne rien affirmer de légal sans source officielle (netbeheerder, NEN).** *Verdict :* « balkon zonnepaneel » (singulier) du fichier : **à corriger** ; thème « mag het ? » + comparaison Allemagne.

**19. Thuisbatterij** — *Principal :* « thuisbatterij » (37, XL). *Modificateurs :* **met stekker**, kopen, **5 / 10 / 20 / 50 kWh**, kosten, beste (2026, consumentenbond, 10 kwh, met stekker), goedkoopste per kwh, **zonder zonnepanelen / zonder dynamisch contract**, en btw, kopen in duitsland, werkt niet bij stroomuitval, standby verbruik. *Contexte :* Consumentenbond (page mise à jour le **28/10/2026**) écrit : « De wettelijke salderingsregeling stopt op 1 januari 2027 » ([S4]) ; la loi aurait été adoptée par l'Eerste Kamer le 17/12/2024 ([S5] Zonneplan, à vérifier). La page mentionne aussi un jugement contre Vattenfall et un droit possible au saldering selon le contrat (détails non lus) : **vérifier l'absence de report avant publication**. L'effet sur les requêtes est cohérent avec l'indice élevé, causalité non démontrée. SERP : Consumentenbond, fournisseurs d'énergie (Vattenfall, Frank Energie), ANWB, Eigen Huis, boutiques spécialisées — pas de sites d'affiliation généralistes dans le top 10. *Verdict :* **opportunité n°1 du T4 2026.**

**20. Slimme lamp (éclairage)** — *Principal :* **pluriel** « slimme lampen » ; la marque « philips hue » (22, L) écrase le générique « slimme lamp » (0,34, XS). *Modificateurs :* ikea, action, philips, e27 / e14 / gu10, zigbee, zonder hub / bridge, met afstandsbediening, google home, hue vs. *Verdict :* pages « Hue vs IKEA vs Action vs WiZ » plus porteuses que « beste slimme lamp ».

### Audit des 61 mots-clés NL actuels (fichier `categories-mots-cles-actuels.md`)

Légende verdict : **OK** garder ; **Mal choisi** corriger ; **Niche** faible volume ; « (non mesuré) » = hypothèse, à valider. Indice Trends NL, airfryer = 100 (S2) ; « n/m » = non mesuré ; « <0,01* » = non résolu par Trends (quasi nul).

Constat chiffré : sur les deux cas mesurés, le préfixe « slimme » divise le volume par ~270 (rookmelder 8,1 → 0,03) et ~4 800 (wasmachine 97 → 0,02). Les catégories marquées `high` dans le fichier mais qui ne le sont pas pour les Pays-Bas : **solaire-balcon** (très faible), **eclairage-connecte** (volume porté par la marque Hue), **lave-linge-connectes** et **frigos-connectes** (volume porté par la requête générique, pas par « slimme »), **cameras-interieur** (OK mais mot-clé mal ordonné).

| slug | kw NL actuel (fichier) | terme mesuré → indice Trends NL (airfryer = 100) | verdict | proposition |
|---|---|---|---|---|
| airfryers | beste airfryer | « airfryer » → 100 | OK | Garder « beste airfryer ». Ajouter pages « dubbele airfryer » (1,6), « airfryer xl » (1,9), « airfryer zonder pfas » (suggestion Google), « onder 100 euro ». |
| multicuiseurs | beste multicooker | « multicooker » → 2,4 | Niche | Volume faible. Ajouter « slowcooker / multicooker » comme synonyme ; ne pas investir fort. |
| cafetieres | beste slimme koffiezetapparaat | « volautomatische koffiemachine » → 1,0 | MAL CHOISI | Personne ne cherche « slimme koffiezetapparaat » (non résolu par Trends). Cibler « beste volautomatische koffiemachine » / « beste volautomaat » (suggestions Google : « beste volautomaat consumentenbond », « beste bonenmachine 2026 »). |
| balances | slimme keukenweegschaal | « keukenweegschaal » → 2,0 | Probablement mal choisi (non mesuré) | « slimme keukenweegschaal » non mesuré ; hypothèse : le préfixe « slimme » réduit fortement le volume (×270 pour rookmelder, ×4 800 pour wasmachine, mesurés). Tester « keukenweegschaal (met app) ». |
| thermometres-viande | slimme vleesthermometer | « vleesthermometer » → 0,76 | Probablement mal choisi (non mesuré) | « slimme vleesthermometer » non mesuré. Tester « draadloze vleesthermometer » / « vleesthermometer bluetooth » (saison BBQ). |
| prises-connectees | beste slimme stekker | « slimme stekker » → 1,4 | OK | Suggestions : « met energiemeter », « consumentenbond », « google home », « voor buiten ». Garder. |
| robots-multifonctions | beste keukenrobot | « keukenmachine » → 7,7 | OK (noidx) | « keukenmachine » = 7,7. Catégorie noidx : le volume existe, la concurrence (Coolblue, bol, Consumentenbond) aussi. |
| blenders | beste blender | « blender » → 39 | OK (noidx) | Indice élevé (39) — plus gros que la plupart des catégories indexées. À réévaluer (noidx). |
| fours-connectes | beste slimme oven | « oven » → 200 | Probablement mal choisi (non mesuré) | « oven » (200) est ambigu (tout type de four) ; « slimme oven » non mesuré. Tester « combi-oven », « stoomoven », « heteluchtoven ». |
| micro-ondes | slimme magnetron | « magnetron » → 35 | Probablement mal choisi (non mesuré) | « slimme magnetron » non mesuré. « magnetron » = 35 : volume dans « magnetron met grill / heteluchtoven » (noidx). |
| sous-vide | slimme sous-vide | « sous vide » → 4,4 | Probablement mal choisi (non mesuré) | « slimme sous-vide » non mesuré ; « sous vide » = 4,4. Tester « sous vide apparaat / stick ». |
| machines-a-pain | beste broodbakmachine | « broodbakmachine » → 3,9 | OK | Garder. |
| extracteurs-de-jus | beste slowjuicer | « slowjuicer » → 1,2 | OK | Ajouter « sapcentrifuge » (produit différent, souvent cherché). |
| frigos-connectes | slimme koelkast | « koelkast » → 100 | Probablement mal choisi (noidx, non mesuré) | « koelkast » (100) énorme, mais « slimme koelkast » non mesuré. Rester noidx ou cibler « side-by-side koelkast ». |
| thermostats | beste slimme thermostaat | « slimme thermostaat » → 2,3 | OK | Suggestions : « 2026 », « consumentenbond », « tweakers », « met radiatorknoppen », « zonder abonnement », « voor intergas ketel/vloerverwarming ». La marque « tado » (9,3) pèse 4× la catégorie → pages marque. |
| compteurs-energie | slimme energiemeter | « energiemeter » → 0,82 | MAL CHOISI | Les acheteurs disent « energiemeter (stopcontact) », « stekkermeter », « P1 energiemeter / HomeWizard ». « slimme meter » (5,4) = compteur du fournisseur (intention informationnelle, pas d'achat). |
| solaire-balcon | balkon zonnepaneel | « balkon zonnepanelen » → <0,1 | MAL CHOISI (singulier) | Pluriel obligatoire : « balkon zonnepanelen (met stekker) ». Volume NL très faible (<0,1*) malgré le « high » du fichier ; angle « mag het ? » + Duitsland. |
| batteries-domestiques | thuisbatterij | « thuisbatterij » → 37 | OK — PRIORITÉ | Indice 37 ; cohérent avec la fin du saldering (1/1/2027), causalité non démontrée. Suggestions : « met stekker », « 5/10/20 kWh », « zonder zonnepanelen », « dynamisch contract », « kopen in Duitsland ». |
| eclairage-connecte | slimme lamp | « slimme lamp » → 0,34; « philips hue » → 22 | Mal choisi | Pluriel « slimme lampen » dans Google ; la marque « philips hue » (22) écrase le générique. Pages « Hue vs IKEA vs Action ». |
| interrupteurs | slimme schakelaar | « slimme schakelaar » → 0,12 | Niche | Très faible volume ; garder en soutien. |
| volets-stores | slim rolluik | « rolluik » → 8,3 | À ajuster (non mesuré) | « rolluik » = 8,3 ; « slim rolluik » non mesuré. Tester « elektrisch rolluik / rolluikmotor ». |
| capteurs-qualite-air | luchtkwaliteitsmeter | « luchtkwaliteitsmeter » → <0,1 | Niche | Très faible (<0,1). Variantes à tester : « co2 meter », « fijnstofmeter ». |
| detecteurs-fuite-eau | waterlekdetector | « waterlekdetector » → <0,01* | Niche | Non mesurable (<0,01). Variantes : « waterlekmelder », « lekdetector ». |
| hubs-domotique | beste domotica hub | « domotica » → 1,7 | Mal choisi | « domotica » (1,7) OK mais « hub » absent du vocabulaire. Cibler « Home Assistant / Homey / Zigbee hub ». |
| bornes-recharge-ve | laadpaal elektrische auto | « laadpaal » → 30 | Mal choisi | La longue traîne dominante est « laadpaal thuis » / « beste laadpaal voor thuis (consumentenbond / met zonnepanelen / anwb) » ; « met mid meter », « 1 fase vs 3 fase », « peblar vs zaptec ». |
| sonnettes-video | beste videodeurbel | « deurbel met camera » → 2,5 | À ajuster | « deurbel met camera » (2,5) = 2× « videodeurbel » (1,2), et c'est le libellé Consumentenbond/Coolblue. Mettre « deurbel met camera » en H1 et « videodeurbel » en H2. Modificateur n°1 : « zonder abonnement ». |
| cameras-interieur | binnen beveiligingscamera | « beveiligingscamera » → 2,7 | Mal choisi (ordre des mots) | Dire « beveiligingscamera binnen » / « camera voor binnen » / « huisdiercamera » / « babyfoon camera ». |
| cameras-exterieur | buitencamera | « buitencamera » → 1,7 | OK (alternatif plus fort) | « beveiligingscamera buiten » domine ; « zonder abonnement » / « op zonne-energie » / « zonder stroom » sont les modificateurs. |
| serrures-connectees | slim slot | « slim slot » → <0,1 | Niche | Très faible (<0,1). Longue traîne : « voordeur », « met vingerafdruk », « op bestaande cilinder ». |
| alarmes | alarmsysteem zonder abonnement | « alarmsysteem » → 2,0 | OK | Suggestion Google n°1/2 : « alarmsysteem (woning) zonder abonnement ». |
| detecteurs-fumee-co | slimme rookmelder | « rookmelder » → 8,1 | MAL CHOISI | « slimme » divise le volume par >200 (0,02 vs 8,1). Cibler « beste rookmelder » (« 10 jaar batterij », « 230v », « consumentenbond ») + « rookmelder verplicht ». |
| detecteurs-mouvement | slimme bewegingssensor | « bewegingssensor » → 5,4 | À ajuster | « bewegingsmelder » est le mot néerlandais courant (non mesuré) ; « bewegingssensor » 5,4. |
| trackers-objets | beste item tracker | « airtag » → 14 | MAL CHOISI (anglicisme) | « item tracker » = 0,1 ; « airtag » = 14. Cibler « airtag alternatief / tracker voor sleutels / bluetooth tracker ». |
| interphones | ip video intercom | « videofoon » → <0,1 | Mal choisi | Anglicisme ; NL : « videofoon / deurintercom ». Volume ~nul. |
| coffres-forts-connectes | slimme kluis | « kluis » → 13 | À ajuster | « kluis » (13) générique ; « kluis met vingerafdruk / digitale kluis ». |
| purificateurs-air | beste luchtreiniger | « luchtreiniger » → 6,6 | OK | « slaapkamer », « hepa », « allergie », « consumentenbond » ; scepticisme : « luchtreiniger kopen onzin ». |
| humidificateurs | beste luchtbevochtiger | « luchtbevochtiger » → 3,5 | OK | « slaapkamer », « baby », « duux », « venta ». |
| deshumidificateurs | beste luchtontvochtiger | « luchtontvochtiger » → 4,1 | OK | « woonkamer/kelder/badkamer », « verbruik », « 2-in-1 met luchtreiniger ». |
| climatiseurs-mobiles | mobiele airco | « mobiele airco » → 18 | OK — saisonnier | Indice 18. « zonder slang » est un modificateur énorme (attention : produit trompeur ; ne pas promettre le refroidissement). « tot 100 euro » existe. |
| ventilateurs | slimme ventilator | « ventilator » → 50 | Probablement mal choisi (non mesuré) | « ventilator » = 50 ; « slimme ventilator » non mesuré. Tester « torenventilator / ventilator staand / stille ventilator slaapkamer ». |
| chauffages-appoint | slimme bijverwarmer | « elektrische kachel » → 4,9; « heater » → 21 | Mal choisi (hypothèse forte) | « slimme bijverwarmer » non mesuré (« bijverwarmer » n'apparaît pas dans nos suggestions ni nos SERP). Cibler « elektrische kachel » (4,9) et « heater » (21). |
| stations-meteo | slim weerstation | « weerstation » → 4,7 | À ajuster | « weerstation (draadloos) ». |
| diffuseurs | slimme aromadiffuser | n/m | Niche | Non mesuré ; « diffuser / geurverspreider ». |
| reveils-lumiere | wake up light | « wake up light » → 2,4 | OK | Anglicisme assumé en NL ; « lichtwecker » en synonyme. |
| rideaux-automatises | slim gordijn | « slim gordijn » → <0,01* | Niche | Quasi nul. « elektrische gordijnen / gordijnmotor ». |
| aspirateurs-robots | beste robotstofzuiger | « robotstofzuiger » → 9,5 | OK — PRIORITÉ | Indice 9,5. « met dweilfunctie » ≈ 7 % du terme générique. |
| aspirateurs-laveurs | robot stofzuiger dweiler | « robotstofzuiger met dweilfunctie » → 0,69 | MAL CHOISI | « dweiler » n'est pas courant. Libellé Consumentenbond/Test-Aankoop/bol : « robotstofzuiger met dweilfunctie » (0,7) ; « dweilrobot » (0,18). |
| laveurs-vitres | raamwasrobot | « raamwasrobot » → <0,01* | Niche | Non mesurable ; « raamrobot / Hobot ».  |
| aspirateurs-balais | beste steelstofzuiger | « steelstofzuiger » → 9,7 | OK | Indice 9,7. Libellé bol/Coolblue/Consumentenbond. « snoerloze/draadloze stofzuiger » à vérifier (Trends chaîné peu fiable). |
| nettoyeurs-vapeur | beste stoomreiniger | « stoomreiniger » → 15 | OK | Indice 15 : sous-estimé par le fichier (medium). |
| fers-centrales-vapeur | beste stoomgenerator | « stoomgenerator » → 1,3 | OK | « stoomstrijkijzer / stoomstrijkstation » pour la tête de gamme. |
| lave-vaisselle-connectes | slimme vaatwasser | « vaatwasser » → 55 | Probablement mal choisi (non mesuré) | « vaatwasser » = 55 ; « slimme vaatwasser » non mesuré ; concurrence Coolblue/Consumentenbond massive. |
| lave-linge-connectes | slimme wasmachine | « wasmachine » → 97 | Mal choisi | « wasmachine » = 97, « slimme wasmachine » ≈ 0,02. Volume dans « beste wasmachine (consumentenbond) » : concurrence écrasante. |
| tondeuses-robots | beste robotmaaier | « robotmaaier » → 6,6 | OK | Indice 6,6 ; « zonder draad / zonder begrenzingsdraad / gps » = modificateurs n°2 ; « werkt niet (meer) » très suggéré. |
| arrosage-connecte | slimme besproeiingscomputer | « besproeiingscomputer » → <0,1 | Probablement mal choisi (non mesuré) | « besproeiingscomputer » = 0,09 ; tester « tuinbewatering automatisch ». |
| eclairage-exterieur | slimme buitenverlichting | n/m | À ajuster | « tuinverlichting / solar tuinverlichting ». |
| portails-garages | slimme garagedeuropener | « garagedeuropener » → <0,1 | Niche | « garagedeuropener » (<0,1). |
| robots-piscine | beste zwembadrobot | « zwembadrobot » → 0,29 | OK — saisonnier | « draadloos », « dolphin », « opzetzwembad », « op accu ». |
| barbecues-connectes | slimme pellet bbq | « bbq » → 119 | Probablement mal choisi (non mesuré) | « pelletbarbecue » non résolu (<0,01) ; « bbq » (119) saisonnier géant mais générique. Tester « pellet grill ». |
| stations-recharge-outdoor | draagbaar powerstation | « powerstation » → 3,1 | Mal choisi | « powerstation » (3,1) + marques (EcoFlow, Bluetti, Jackery). |
| alarmes-exterieures | slim buitenalarm | n/m | Niche | Non mesuré ; « alarm buiten / buitensirene ». |

## A.2 Qui domine les SERP (NL)

Source S3 (Bing via DuckDuckGo nl-nl, 30/10/2026, 23 requêtes commerciales/problème/saison). Fréquence de présence dans le top 10 :

| Domaine | Présence (sur 23) | Dans le top 3 | Nature |
|---|---|---|---|
| consumentenbond.nl | 12 | 8 | test indépendant (contenu partiellement payant : « 3 maanden gratis ») |
| consumententesten.nl | 10 | 5 | site d'affiliation d'agrégation d'avis (titres « 17K reviews », « 11.203 reviews ») |
| mediamarkt.nl | 9 | 5 | enseigne + guides « beste airfryer », « beste mobiele airco » |
| bol.com | 9 | 6 | pages catégorie / « Kijk snel » |
| coolblue.nl | 7 | 1 | catégories + hub **« advies »** (7 pages « advies » dans le top 10 de la requête site: sur airfryer) |
| keukenapparaatgids.nl | 4 | 3 | affiliation de niche |
| koopvergelijker.nl | 4 | 1 | affiliation (titres « 2026 », une fois « 2027 ») |
| kieskeurig.nl | 3 | 0 | pages catégorie / comparateur (luchtreiniger, steelstofzuiger, luchtontvochtiger) |
| test-aankoop.be | 2 | 0 | test belge (Flandre) |
| volgensconsument.nl, stofzuiger-informatie.nl, wifiwijs.nl, slimgetest.nl | 2–3 | 1 | affiliation de niche |

Tweakers (Best Buy Guide, Pricewatch) : **non observable** avec S3 ; à vérifier directement dans Google. Reddit n'apparaît que sur les requêtes contenant « reddit » (aucun signal). Google suggère toutefois « beste slimme thermostaat **tweakers** ».

Détail sur 8 requêtes (top 6) :

| Requête | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| beste airfryer | MediaMarkt (guide) | keukenapparaatgids | consumententesten | consumentenkoopgids | Test-Aankoop | Consumentenbond |
| robotstofzuiger met dweilfunctie | stofzuiger-informatie | dweilstofzuiger.nl | bol | Consumentenbond | doorbelicht.be | tink.nl |
| beste volautomaat | Consumentenbond | keukenapparaatgids | de-koffiekompas | consumententesten | vivakoffie | espressowijzer |
| slimme thermostaat | wifiwijs | consumententesten | Consumentenbond | Gamma | MediaMarkt | bol |
| videodeurbel | Consumentenbond | bol | consumententesten | Coolblue | Tapo (marque) | MediaMarkt |
| mobiele airco | MediaMarkt (guide) | bol | Coolblue | Praxis | Expert | airconditioning-expert |
| thuisbatterij | Consumentenbond | thuisbatterij.nl (boutique) | Eigen Huis | volgensconsument | thuisbatterij.nl | ANWB |
| balkon zonnepanelen | zonnepanelen.net | simply-solar | zonnepaneelcentrum | bol | lightexpert | Zonneplan |

Requêtes problème / énergie / saison :
- « airfryer werkt niet » : Philips NL (support), jestaatnietalleen, airfryerliefde, voeljegezond, home.id, partsnl — **aucun comparateur** ; « slimme thermostaat werkt niet » : sites d'installateurs (woonparel, alectric, paraatservice) + support tado.
- « airfryer verbruik stroom kosten » : nextenergy, keukenapparatuurgigant, **homenura.com (3e)**, ANWB, apparaatverbruik, koopvergelijker.
- « beste airfryer tot 100 euro » : huishoudboulevard (19 modèles), frituurfans, koopvergelijker, voeljegezond, keukenapparaatgids ; deux résultats **allemands** (computerbild.de, airfryer-ratgeber.com) dans le top 10 NL.
- « black friday airfryer » : blackfridayshops.nl, blackfridaydeals.nu, blackfridaynederland.nl, MediaMarkt, Electro World, Expert (sites dédiés + enseignes).
- « sinterklaas cadeau keuken gadgets » : keukenapparaatgids (guide dédié), coolgift, megagadgets, beslist.nl, gadgethouse.

**Réponses IA (documenté ?)** — Aucune étude NL/PL des sources citées par AI Overviews n'a été trouvée. Proxys disponibles : Ahrefs Brand Radar (septembre 2026, **USA uniquement**, 3 M de requêtes, part des citations parmi le top 50) : YouTube 22,9 %, Reddit 18,5 %, Facebook 10,1 %, Google 8,8 %, Instagram 5,6 %, Quora 4,7 %, Wikipedia 4,0 %, TikTok 3,3 %, Amazon 3,3 % ([S4] ahrefs.com/blog/most-cited-domains-ai-overviews). Côté NL : Deloitte (mai 2026, 1 000 répondants NL) — 55 % utilisent l'IA pour des achats, 44 % font confiance aux infos des outils IA, 29 % jugent plus utiles les conseils du vendeur ; Deloitte précise que les agents IA comparent sur la base de **données produit structurées** [S4]. Consumentenbond a testé 100 requêtes complexes : AI Overviews présent sur 70 (article IamExpat non daté, à vérifier) [S5]. Implication prudente : données structurées + tableaux comparatifs factuels + présence sur Reddit/YouTube sont les leviers les plus plausibles ; **non démontré pour NL**.

## A.3 Leurs techniques et leurs faiblesses

**Techniques observées** (S4 : analyse de consumententesten.nl/beste-airfryer ; S3 titres) :
1. **Chiffre-hameçon dans le H1/title** : « Beste airfryer 2026 : 17.183 reviews vergeleken – Top 10 », « 41% coating probleem », « (49 vergeleken) », « [door Max] ». Mois dans le title (« oktober 2026 »).
2. **Structure** : sommaire à ancres (~20), boîte « top 3 », 10 fiches (prix, étoiles, capacité, plus/moins), 2 tableaux (budget vs premium ; Philips vs Ninja), tableau de coût énergie, FAQ de 10 questions, section « welke airfryer past bij jou », encadré auteur.
3. **Monétisation** : CTA principal bol (partner.bol.com), Amazon.nl en secondaire, Coolblue (Awin), Expert/EP (TradeTracker) ; mention d'affiliation répétée haut de page/intro/auteur/pied.
4. **Pages « onder 100 euro »**, « goedkoop », « XL », « dubbel » en sous-pages ; **hub « advies » de Coolblue** (airfryer : « Hoe kies je », « Wat is », « Is een airfryer gezond? », « Airfryer vs frituurpan », « Tefal / Ninja airfryer kiezen »).
5. **Usage du nom Consumentenbond dans des titres tiers** : volgensconsument.nl titre « TOP 7 Consumentenbond » (probable renvoi aux résultats de l'organisation ; à vérifier). Homenura doit éviter toute ambiguïté : « volgens Consumentenbond » seulement avec un lien précis vers leur page.
6. **Contenu mois par mois** (« oktober 2026 ») et saisonnier (promo Sinterklaas sur la page airfryer).

**Faiblesses exploitables** :
- **Chiffres incohérents** sur une même page (17.183 / 16.512 / 2.847 / « 500.000+ » ; « Getest door 17.183 gebruikers » alors que l'auteur dit « Ik test producten niet zelf » ; recommandations en FAQ absentes du top 10 ; capacité 4 L / 2,6 L pour le même modèle) [S4].
- Allégations de test sans protocole ; pourcentages sans méthode.
- Pas de tableau comparatif unique des specs.
- **Pannes (« werkt niet »)** : seulement support constructeur et réparateurs.
- Consumentenbond est **payant** : un résumé gratuit, factuel, avec lien vers leurs résultats (sans reprise de contenu) comble un vide.
- Intention « verbruik » : déjà occupée mais par des pages énergie (nextenergy, ANWB) sans comparaison de modèles.
- **Faille de monétisation Amazon-only** : les SERP NL sont dominées par bol/Coolblue/MediaMarkt ; sur Amazon.nl (28 000 vendeurs, 15 % de part de marché estimée par searchlab.nl citant Thuiswinkel Marktmonitor 2026 — chiffre secondaire, à vérifier) la conversion dépend de la qualité de la redirection (voir action 1). Même source : 42 % des consommateurs NL commencent leur recherche produit sur bol, 31 % sur Google, 14 % sur Amazon (à vérifier).
- Commissions : Amazon.nl au lancement 2020 (Geniuslink) — Électronique 6 %, Cuisine 10 %, Maison 10 % (barème fixe par catégorie, **probablement obsolète ; vérifier dans PartnerNet**).

## A.4 Requêtes saisonnières (NL)

| Moment | Date 2026 | Ce que montrent les données | Pages à prévoir |
|---|---|---|---|
| Sinterklaas | Arrivée **14/11** (Grave) ; Sinterklaasjournaal dès **9/11** [S4 tvgids.nl] ; pakjesavond **5/12** (samedi) | Étude lootjestrekken.nl (13/11/2025) : 52 % des Néerlandais fêtent Sinterklaas ; budget moyen prévu **134 EUR** (record depuis 2017) ; **51 % tirent des « lootjes »** ; 30 % le font via app/site [S4]. SERP « sinterklaas cadeau keuken gadgets » : guides dédiés (keukenapparaatgids) | « Sinterklaas cadeau onder 25 / 50 / 100 euro », « slimme cadeaus voor in huis », « lootjes : cadeau tot 25 euro » ; publier **avant le 9/11** |
| Black Friday | **27/11** (Cyber Monday 30/11 ; une source erronée dit le 28/11) [S5] | SERP « black friday airfryer » = sites dédiés + enseignes. Homenura a déjà `/nl/black-friday` + 6 sous-pages (airfryers, aspirateurs-robots, cafetieres-a-grain, aspirateurs-balais, thermostats, radiateurs-connectes) | Renommer en NL, ajouter « prijshistorie », « is dit echt een deal ? », budget par palier |
| Kerst / cadeaus | 24–26/12 | Non mesuré | « Kerstcadeau slim huis » |
| Winter / soldes janvier | janvier 2027 (« nieuwjaarsuitverkoop / solden » : à vérifier) | Non mesuré (Trends 429) | Reprise des pages Black Friday ; thermostaat, kachel, ontvochtiger en octobre-février |
| Fin du saldering | **1/1/2027** | « thuisbatterij » = indice 37 ; suggestions « zonder dynamisch contract / zonder zonnepanelen » | Contenu avant décembre |
| Été | mai-août | « mobiele airco » 18, robotmaaier 6,6, zwembadrobot 0,29, bbq 119 | Pages avant avril |

**Requêtes énergie (« verbruik »)** : Google suggère « verbruik / verbruik per uur / kwh / laag verbruik » pour **airfryer, luchtreiniger, luchtontvochtiger, mobiele airco, elektrische kachel, laadpaal, slimme stekker, energiemeter, thuisbatterij, wasmachine**. Format déjà validé sur Homenura (3e sur « airfryer verbruik stroom kosten »). Le tarif utilisé (0,35 EUR/kWh) est à confirmer ; prévoir un champ modifiable.

La courbe hebdomadaire exacte (pics) n'a pas pu être obtenue (Trends bloqué) : à confirmer avec Search Console.

## A.5 Comment Homenura peut passer devant — 10 actions (impact / effort)

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Pointer les pages NL vers **amazon.nl** avec un compte/tag Associates NL (programme séparé ; amazon.com.be pour la Flandre : à vérifier) | Très élevé | Moyen |
| 2 | Corriger les mots-clés mal choisis (rookmelder, compteur d'énergie, balkon zonnepanelen, dweilfunctie, volautomaat, airtag, laadpaal thuis, kachel, deurbel met camera) | Élevé | Faible |
| 3 | Landing **thuisbatterij** avant décembre | Élevé | Moyen |
| 4 | Hubs saison : **Sinterklaas** (avant le 9/11) + **Black Friday** NL | Élevé (court terme) | Faible-moyen |
| 5 | Pages « **onder €100** » (budget) par catégorie | Moyen-élevé | Faible |
| 6 | Dupliquer le format « **verbruik** » avec calculateur | Moyen-élevé | Faible-moyen |
| 7 | Pages « **X vs Y** » issues des suggestions | Moyen | Faible |
| 8 | Capitaliser les 265 pages « **werkt niet** » : slugs et titres NL | Moyen | Moyen |
| 9 | Slugs NL, hreflang, textes (Duitsland) : nettoyage de localisation | Moyen | Moyen |
| 10 | Crédibilité sans test : méthodologie visible + citations Consumentenbond/Test-Aankoop/Tweakers + données structurées + variantes nl-BE | Moyen | Moyen |

**Détail**

1. **Amazon.nl** : les liens NL vont vers amazon.fr (S4). Amazon.nl a PartnerNet propre (tag propre en « -21 ») et un barème à catégories fixes (Geniuslink) ; OneLink ne couvre pas amazon.nl d'après cette même source (2020 ; à revérifier). Contrôler aussi que chaque ASIN existe sur amazon.nl.
2. **Titres types** (sans « getest ») :
   - « Beste rookmelder 2026: 10 jaar batterij, koppelbaar, EN 14604 » — H1 « Beste rookmelder » ; FAQ : « Sinds wanneer is een rookmelder verplicht ? » (réponse : 1/7/2022 ; lien brandweer.nl) ; « Hoeveel rookmelders heb ik nodig ? » (1 par étage).
   - « Robotstofzuiger met dweilfunctie: welke kiezen? (2026) ».
   - « Deurbel met camera zonder abonnement: 7 opties vergeleken ».
   - « Balkon zonnepanelen met stekker: mag het in Nederland? » (mettre « à vérifier » tant qu'aucune source officielle).
   - « Beste volautomatische koffiemachine (volautomaat) 2026 ».
3. **Thuisbatterij** : « Thuisbatterij kopen 2026: 5, 10 of 20 kWh? », « Thuisbatterij met stekker », « Thuisbatterij zonder zonnepanelen: loont het ? ». Tableau factuel (capacité, puissance, garantie, prix), explication du saldering **avec lien vers Consumentenbond** (leur page « Blijft de salderingsregeling toch bestaan »). Pas de promesse de rentabilité chiffrée sans source.
4. **Saison** : voir A.4. Page unique « Sinterklaas cadeaus voor in huis » avec paliers 25/50/100 euro. Black Friday : indiquer « prix vu le jj/mm » ; mentionner Amazon uniquement.
5. **Budgets** : « Beste airfryer onder 100 euro » (SERP riche : huishoudboulevard, frituurfans, koopvergelijker), « Beste robotstofzuiger onder 200 euro », « Videodeurbel onder 50 euro », « Mobiele airco onder 300 euro ». Utiliser **« onder »**, pas « tot ».
6. **Verbruik** : « Mobiele airco verbruik per uur », « Elektrische kachel verbruik per uur/jaar », « Luchtontvochtiger verbruik », « Laadpaal verbruik per jaar ». Champ « prijs per kWh » modifiable + lien vers un calculateur public.
7. **X vs Y** (suggestions réelles) : airfryer vs heteluchtoven ; mobiele airco vs luchtkoeler / split unit ; luchtreiniger vs luchtontvochtiger ; laadpaal vs wallbox ; elektrische kachel vs infraroodpaneel ; volautomaat vs halfautomaat ; tado vs Nest ; Hue vs IKEA vs Action.
8. **Werkt niet** : 265 pages déjà présentes. Les passer en slugs NL (`/nl/problemen/…`), titres « Airfryer gaat niet aan: 7 oorzaken », « Slimme thermostaat werkt niet bij vorst », « Videodeurbel werkt niet » ; conserver 301 depuis les slugs FR.
9. **Localisation** : slug NL (ex. `airfryer-stroomverbruik`), x-default vers la langue la plus pertinente, retirer « Duitsland » de l'article NL, H1 d'accueil « De beste airfryers van 2026 » (pas « smart »).
10. **Crédibilité** : formule type : « Wij testen niet zelf. Dit overzicht is gebaseerd op specificaties, kopersreviews en onafhankelijke tests (o.a. Consumentenbond, Test Aankoop, Tweakers), met links. » Un tableau comparatif unique des specs, une date « laatst gecontroleerd », une méthode de score lisible. Flandre : variantes nl-BE pour Fluvius / ecocheques (vérifier l'éligibilité réelle avant d'écrire), Test-Aankoop en source.

---

# PARTIE B — POLOGNE

## B.1 Vocabulaire réel des acheteurs

**Limites de cette partie** : pas d'autocomplete PL ni de Trends PL (voir §0). Le vocabulaire ci-dessous vient (a) des **titres réels des SERP PL** [S3], (b) de l'analyse de pages concurrentes [S4], (c) de la connaissance linguistique (marquée « hyp. »). Les tailles de volume sont **estimation qualitative** (XL/L/M/S) déduite de la concurrence observée (nombre de sites de ranking), **pas** une donnée mesurée.

Règles polonaises observées dans les titres [S3] :
- Le mot **« ranking »** domine (« Ranking frytkownic beztłuszczowych », « Ranking 2026 [TOP10] ») ; année **2026** presque systématique ; parfois le mois (« październik 2026 »).
- Questions : « jaki … wybrać ? », « który … wybrać ? », « czy warto ? » (Komputronik), « jaki … kupić ? ».
- **Budgets : « do 200 / 300 / 500 zł »** (sous-rankings de prorankingi.pl).
- Variantes orthographiques : « frytownica » (sans k) dans les URL et fiches Media Expert/MediaMarkt ; « frytkownica niskotłuszczowa », « bezolejowa » ; « air fryer » en deux mots et « airfryer ».
- « Opinie » et « test » apparaissent surtout dans les titres des enseignes (« ceny i opinie w Media Expert »).
- Problèmes : « nie grzeje », « nie działa », « nie uruchamia się » ; énergie : « ile prądu zużywa », « zużycie prądu ».

### Catégories prioritaires (principal + synonymes + modificateurs observés)

1. **Frytkownica beztłuszczowa** (XL, hyp.) — synonymes : air fryer, airfryer, frytkownica na gorące powietrze, frytownica, bezolejowa, niskotłuszczowa ; formes : dwukomorowa, pionowa, z funkcją pary, XXL ; modificateurs : ranking 2026, TOP10, czy warto, czy zwykła, do 200/300/500 zł, nie grzeje / nie działa, zużycie prądu, Black Friday. SERP : 10 sites de ranking + enseignes.
2. **Robot sprzątający z mopem** (L, hyp.) — synonymes : robot mopujący, robot odkurzająco-mopujący, robot sprzątający z funkcją mopowania ; modificateurs : ranking 2026, TOP 8 / TOP 20, testy, października 2026.
3. **Ekspres ciśnieniowy automatyczny / do kawy** (XL, hyp.) — « ekspres automatyczny do kawy », « ekspres do kawy », « ekspres ciśnieniowy » ; modificateurs : ranking 2026, opinie, jaki kupić, najlepszy, TOP20.
4. **Odkurzacz pionowy bezprzewodowy** (L, hyp.) — « odkurzacz pionowy », « odkurzacz bezprzewodowy » ; modificateurs : ranking, który model wybrać, przewodowy (!), TOP 10.
5. **Klimatyzator przenośny** (L saisonnier, hyp.) — « klimatyzator przenośny » ; modificateurs : ranking, z Wi-Fi, do mieszkania ; **SERP sans site d'affiliation dans le top 10 de nos 20 requêtes** (Media Expert, Allegro, Euro, Leroy Merlin, Castorama) : barrière haute. Distinguer « klimator » (refroidisseur évaporatif).
6. **Osuszacz powietrza** (M-L, hyp.) — ranking 2026, domowy, jaki wybrać, do piwnicy (hyp.).
7. **Oczyszczacz powietrza** (XL, hyp. : smog) — « oczyszczacz powietrza », « z filtrem HEPA », « dobór do pokoju », « ranking 2026 » ; SERP : 10 résultats de ranking, dont **testy-oczyszczaczy.pl (« 102 modeli, 90 zmierzone »)** — base de mesures indépendante, concurrence sérieuse sur la crédibilité ; pages auto-générées Allegro et Ceneo (« ranking październik 2026 »).
8. **Termostat inteligentny / głowica termostatyczna** (M, hyp.) — « inteligentny termostat », « termostat WiFi », « głowica termostatyczna WiFi » ; MediaMarkt regroupe « inteligentne termostaty i głowice » ; marques Salus, EMOS GoSmart. SERP : Allegro, Leroy Merlin, MediaMarkt, boutiques smart-home.
9. **Wideodomofon / dzwonek z kamerą** (M, hyp.) — **attention : « wideodomofon » = système d'interphone vidéo filaire** (≠ sonnette Wi-Fi) ; l'équivalent de « videodeurbel » est « dzwonek z kamerą / wideodzwonek » (hyp.). SERP wideodomofon : Allegro, Media Expert, Castorama, prorankingi (4 modèles), Euro, Komputronik, x-kom.
10. **Zamek inteligentny / elektroniczny** (S, hyp.) — non observé dans nos SERP ; modificateurs probables : na odcisk palca, do drzwi wejściowych (hyp.).
11. **Czujnik dymu / czujnik czadu** (L, hyp. — **important**) — « czujnik czadu », « czujka czadu », « czujnik dymu i czadu » ; SERP : Allegro, Media Expert (catégorie + ranking « czadu i gazu »), dobrewybory.pl (ranking), zestawienie.pl (« który czujnik czadu jest najlepszy »), Castorama, Leroy, OBI, Euro. **Contexte légal vérifié** : rozporządzenie MSWiA publié au Dz.U. le **22/11/2024** : obligation progressive de détecteurs de fumée et de CO ; hôtels et logements touristiques **30/6/2026** ; logements où l'on brûle un combustible (solide, liquide, gaz) **à partir du 1/1/2030** ; nouveaux bâtiments selon la date de lancement de l'investissement [S4 : gov.pl KP PSP Pabianice, 22/11/2025]. Les sources presse divergent sur les sanctions : **n'en citer aucune**.
12. **Grzejnik elektryczny / farelka** (L hiver, hyp.) — « farelka », « termowentylator », « grzejnik elektryczny » ; modificateurs : **zużycie prądu / ile prądu pobiera / koszt godziny** (10 pages dédiées en SERP), promiennik.
13. **Kosiarka automatyczna / robot koszący** (M-L saisonnier, hyp.) — « robot koszący » ; modificateurs : ranking, bez drutu / bez przewodu ograniczającego, w 3 segmentach cenowych.
14. **Robot basenowy** (S saisonnier, hyp.) — « robot basenowy », « odkurzacz basenowy ».
15. **Kamera zewnętrzna wifi** (M, hyp.) — « kamera zewnętrzna wifi », « kamera do monitoringu », « kamera na kartę SIM / solarna » (hyp.).
16. **Ładowarka samochodowa / wallbox** (M, hyp.) — « wallbox do domu », « ranking 2026 », « cena z montażem », « jaki wybrać », « podłączyć z PV ». SERP : sites d'installateurs et marques (wallbox.pl, ekoplug, amperepoint) ; pas de comparateur généraliste.
17. **Gniazdko smart** (M, hyp.) — « inteligentne gniazdko wifi », « z pomiarem zużycia energii ».
18. **Fotowoltaika balkonowa** (M, hyp.) — « fotowoltaika na balkonie », « zestaw fotowoltaiczny na balkon », « czy to się opłaca », « koszt », « formalności ». **Statut légal (article du 14/10/2026, akademia-fotowoltaiki.pl, à vérifier)** : toute installation PV doit être notifiée au gestionnaire de réseau (OSD) quelle que soit la puissance, déclaration signée par un électricien ; accord de la copropriété/coopérative requis pour le balcon ; pas de plafond de puissance indiqué.
19. **Magazyn energii** (L, hyp.) — « magazyn energii do domu », « ranking magazynów energii 2026 », « dotacja ». **Programme de subvention « Przydomowe Magazyny Energii » (successeur de Mój Prąd)** : dates de la 2e vague contradictoires entre sources (4/9/2026 ou 20/10/2026) ; **vérifier sur NFOŚiGW avant de citer** [S5 à vérifier]. SERP : énergéticiens (Tauron, PGE, Enea, Energa), Allegro, Leroy, SolarEdge.
20. **Multicooker / thermomix / robot kuchenny** (M, hyp.) — « multicooker », « robot kuchenny z funkcją gotowania ».

### Tableau slug → mot-clé PL recommandé (61 catégories du fichier)

| slug | Mot-clé PL principal (recommandé) | Alternatives / formes à couvrir |
|---|---|---|
| airfryers | frytkownica beztłuszczowa | air fryer ; frytkownica na gorące powietrze ; frytkownica dwukomorowa ; frytownica (faute courante) |
| multicuiseurs | multicooker | urządzenie wielofunkcyjne do gotowania |
| cafetieres | ekspres automatyczny do kawy | ekspres ciśnieniowy ; ekspres do kawy z wifi / aplikacją |
| balances | waga kuchenna | waga kuchenna z aplikacją ; inteligentna waga kuchenna |
| thermometres-viande | termometr do mięsa | termometr bezprzewodowy ; termometr do grilla bluetooth |
| prises-connectees | gniazdko smart | inteligentne gniazdko wifi ; gniazdko z pomiarem energii |
| robots-multifonctions | robot kuchenny z funkcją gotowania | robot wielofunkcyjny ; Thermomix ; Monsieur Cuisine |
| blenders | blender kielichowy | blender wysokoobrotowy ; blender do smoothie |
| fours-connectes | piekarnik parowy | piekarnik z wifi ; piekarnik do zabudowy |
| micro-ondes | kuchenka mikrofalowa | mikrofalówka ; mikrofalówka z grillem |
| sous-vide | sous vide | cyrkulator sous vide |
| machines-a-pain | wypiekacz do chleba | automat do pieczenia chleba |
| extracteurs-de-jus | wyciskarka wolnoobrotowa | wyciskarka do soków ; sokowirówka (produit différent) |
| frigos-connectes | lodówka z wifi | inteligentna lodówka ; lodówka side by side (volume plus probable) |
| thermostats | termostat inteligentny | termostat wifi ; głowica termostatyczna wifi ; regulator temperatury wifi |
| compteurs-energie | miernik zużycia prądu | watomierz ; licznik energii wifi |
| solaire-balcon | fotowoltaika balkonowa | panele fotowoltaiczne na balkon ; zestaw fotowoltaiczny na balkon |
| batteries-domestiques | magazyn energii do domu | domowy magazyn energii ; akumulator do fotowoltaiki |
| eclairage-connecte | żarówka smart | inteligentna żarówka ; żarówka wifi ; taśma LED wifi |
| interrupteurs | włącznik wifi | inteligentny włącznik światła ; przełącznik smart |
| volets-stores | roleta elektryczna | napęd do rolet ; roleta zewnętrzna sterowana pilotem |
| capteurs-qualite-air | miernik jakości powietrza | czujnik jakości powietrza ; czujnik PM2.5 ; monitor smogu |
| detecteurs-fuite-eau | czujnik zalania | czujnik wycieku wody ; detektor zalania wifi |
| hubs-domotique | centrala smart home | hub smart home ; brama zigbee ; Home Assistant |
| bornes-recharge-ve | wallbox do domu | ładowarka do samochodu elektrycznego ; stacja ładowania |
| sonnettes-video | dzwonek z kamerą | wideodzwonek ; inteligentny dzwonek do drzwi wifi |
| cameras-interieur | kamera wewnętrzna wifi | kamera IP do domu ; kamera do monitoringu domu ; niania elektroniczna |
| cameras-exterieur | kamera zewnętrzna wifi | kamera do monitoringu zewnętrzna ; kamera IP zewnętrzna ; kamera solarna |
| serrures-connectees | zamek inteligentny | zamek elektroniczny ; zamek na odcisk palca |
| alarmes | alarm do domu bezprzewodowy | system alarmowy wifi ; alarm bez abonamentu ; alarm GSM |
| detecteurs-fumee-co | czujnik czadu | czujnik dymu i czadu ; czujka czadu ; czujka dymu |
| detecteurs-mouvement | czujnik ruchu | czujnik ruchu wifi ; czujnik ruchu zigbee |
| trackers-objets | lokalizator | lokalizator GPS ; AirTag ; lokalizator kluczy bluetooth |
| interphones | wideodomofon | wideodomofon wifi ; domofon z kamerą |
| coffres-forts-connectes | sejf elektroniczny | sejf na odcisk palca ; sejf biometryczny |
| purificateurs-air | oczyszczacz powietrza | oczyszczacz HEPA ; oczyszczacz powietrza smog ; do sypialni |
| humidificateurs | nawilżacz powietrza | nawilżacz ultradźwiękowy ; nawilżacz ewaporacyjny |
| deshumidificateurs | osuszacz powietrza | osuszacz do piwnicy ; osuszacz kondensacyjny |
| climatiseurs-mobiles | klimatyzator przenośny | klimatyzator przenośny do mieszkania ; klimatyzator bez jednostki zewnętrznej (prudence) |
| ventilateurs | wentylator | wentylator wieżowy ; wentylator stojący cichy |
| chauffages-appoint | grzejnik elektryczny | farelka ; termowentylator ; promiennik podczerwieni |
| stations-meteo | stacja pogody | stacja pogodowa bezprzewodowa ; stacja meteo wifi |
| diffuseurs | dyfuzor zapachowy | dyfuzor olejków eterycznych |
| reveils-lumiere | budzik świetlny | budzik wschód słońca ; lampa budząca |
| rideaux-automatises | elektryczny karnisz | automatyczne zasłony ; napęd do zasłon |
| aspirateurs-robots | robot sprzątający | odkurzacz automatyczny ; robot odkurzający |
| aspirateurs-laveurs | robot sprzątający z mopem | robot mopujący ; robot odkurzająco-mopujący |
| laveurs-vitres | robot do mycia okien | robot myjący okna ; Hobot |
| aspirateurs-balais | odkurzacz pionowy bezprzewodowy | odkurzacz pionowy ; odkurzacz bezprzewodowy |
| nettoyeurs-vapeur | myjka parowa | parownica do podłóg ; mop parowy |
| fers-centrales-vapeur | żelazko ze stacją parową | stacja parowa ; generator pary |
| lave-vaisselle-connectes | zmywarka | zmywarka z wifi ; zmywarka do zabudowy 60 cm |
| lave-linge-connectes | pralka | pralka z wifi ; pralka AI ; pralko-suszarka |
| tondeuses-robots | robot koszący | kosiarka automatyczna ; robot koszący bez drutu |
| arrosage-connecte | automatyczne nawadnianie ogrodu | sterownik nawadniania wifi |
| eclairage-exterieur | lampy solarne ogrodowe | oświetlenie ogrodowe ; lampa solarna z czujnikiem ruchu |
| portails-garages | napęd do bramy garażowej | napęd bramy wifi ; sterownik bramy |
| robots-piscine | robot basenowy | odkurzacz basenowy ; robot do basenu |
| barbecues-connectes | grill pelletowy | grill z wifi ; wędzarnia pelletowa |
| stations-recharge-outdoor | stacja zasilania | power station ; przenośna stacja zasilania |
| alarmes-exterieures | alarm zewnętrzny bezprzewodowy | syrena alarmowa zewnętrzna ; czujnik ruchu zewnętrzny |

Remarques : tous ces mots-clés sont des **propositions** (SERP + connaissance linguistique) ; aucun n'a été validé en volume (S2/S1 PL non obtenus). Prévoir une validation Search Console après 4 semaines et un second passage Trends/autocomplete PL.

## B.2 Qui domine les SERP (PL)

Source S3 (Bing via DuckDuckGo pl-pl, 30/10/2026, 20 requêtes) :

| Domaine | Présence (sur 20) | Dans le top 3 | Nature |
|---|---|---|---|
| mediaexpert.pl | 14 | 6 | enseigne + **poradniki « ranking »** |
| allegro.pl | 13 | 11 | catégories, listings, **pages « ranking » auto-générées** |
| prorankingi.pl | 9 | **8** | site de rankings affilié |
| euro.com.pl (RTV EURO AGD) | 7 | 2 | enseigne + articles « ranking » |
| mediamarkt.pl | 6 | 3 | enseigne + rankings |
| leroymerlin.pl | 6 | 1 | enseigne + guides |
| skapiec.pl | 5 | 2 | comparateur + rankings |
| rankingon.pl, zestawienie.pl, bezprzeplacania.pl, najlepszyranking.pl, dobrewybory.pl | 3 chacun | 0–3 | sites de rankings affiliés |
| komputronik.pl, ceneo.pl, morele.net, empik.com, castorama.pl | 2–3 | 0–1 | enseignes / comparateur |

**Komputer Świat, Spider's Web : 0 présence sur ces 20 requêtes** ; Benchmark.pl apparaît dans les résultats WebSearch (« Najlepsze frytkownice beztłuszczowe. Jaki airfryer wybrać w 2026 roku ? ») [S5]. Pas de signal Wirtualna Polska / Onet / opineo.

Détail (top 5) :

| Requête | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| ranking frytkownic beztłuszczowych | prorankingi | Skąpiec | Euro | rankingon | zestawienie |
| robot sprzątający z mopem ranking | prorankingi | Morele | MediaMarkt | prorankingi | luxsprzatanie |
| najlepszy ekspres automatyczny do kawy | rankingon | prorankingi | Skąpiec | rankingekspresowdokawy | Media Expert |
| oczyszczacz powietrza ranking | Komputronik | prorankingi | ranking-oczyszczaczy | najlepszyranking | Media Expert |
| czujnik czadu | Allegro | Media Expert | dobrewybory | Allegro | Castorama |
| klimatyzator przenośny | Media Expert | Allegro | Euro | Leroy Merlin | Allegro |
| fotowoltaika balkonowa | akademia-fotowoltaiki | muratordom | Allegro | OBI | Leroy Merlin |
| magazyn energii do domu | enerp (ranking) | Allegro | Tauron | Leroy Merlin | PGE |
| robot koszący | Allegro | prorankingi | agdmaniak | bezprzeplacania | Allegro |
| frytkownica beztłuszczowa nie grzeje | mpd.net.pl | Electrolux | elektroda.pl | elektroda.pl | elektroda.pl |

Constats : (a) les rankings sont **omniprésents** et émanent aussi des enseignes ; (b) un site de niche (prorankingi) tient la majorité des positions 1-3 ; (c) **requêtes de panne : forums et SAV, aucun affilié** ; (d) « zużycie prądu » : 10 pages dédiées par requête, aucune ne compare des modèles ; (e) catégories techniques (PV, magazyn, wallbox) : installateurs et énergéticiens.

**Réponses IA** : aucune étude PL sur les sources citées. Éléments sourcés : TrustMate.io (5/10/2026, 200 fiches produits) : sur les offres **sans données structurées**, l'IA a inventé un défaut ou recommandé sans justification un remplaçant étranger moins cher dans **46 %** des requêtes ; Schema.org + avis vérifiés réduisent le risque [S4 wiadomoscihandlowe.pl]. Une étude de Mobile Institute pour IGE (« Omni-commerce 2026 », 1 974 internautes) indique que l'IA devient une source d'inspiration d'achat plus importante que les réseaux sociaux (résumé de recherche, **à vérifier**) [S5]. Aucun domaine cité n'est documenté pour la Pologne.

## B.3 Leurs techniques, faiblesses et l'état d'Amazon.pl

**Techniques** (S4 : prorankingi.pl, rankingon.pl, ceneo.pl) :
- **prorankingi.pl** : liste « Miejsce 1…7 », **note à deux décimales (9,91/10)** sans détail par critère, mise à jour affichée (« 1 października 2026 »), auteur « 10+ lat testowania », 97 commentaires, **sous-rankings par budget (200/300/500 zł)**, liens EURO / Media Expert / MediaMarkt / Philips / Cosori / Allegro (pas d'Amazon), mention d'affiliation en haut, **affirmations de test sans protocole**, pas de tableau comparatif ni de FAQ.
- **rankingon.pl** : **RankScore 0–100 « sur 34 critères »** (sans poids), tableaux, 10 fiches, **FAQ ~25 questions**, prix en zł « od » avec variation sur 30 jours et historique, badges (« Najczęściej wybierany »), CTA « Najlepsza oferta » vers **Ceneo**, étiquettes « REKLAMA », durées de test contradictoires (10 jours / 14 jours / 6 mois), pas d'avertissement d'affiliation complet.
- **Ceneo « Ranking … październik 2026 »** (page auto-générée) : score /100 = **popularité (87 pts)** + avis (5) + note (5) + badges (3) ; texte « Redakcja Ceneo (z wykorzystaniem AI) » ; positions des offres vendues aux enchères.
- **Enseignes** (Media Expert, Euro, MediaMarkt, Morele, Komputronik, Empik) : « Ranking … 2026 » avec leurs propres produits ; **Allegro** : `allegro.pl/ranking/<catégorie>` (« ranking październik 2026 »).
- Pages d'énergie : « Ile prądu zużywa … » ; pages « farelka : 2,90 zł/h » (titre réel).

**Faiblesses exploitables** :
- Notes sans méthode ; **« testy » revendiqués sans protocole** (le site, lui, ne peut pas en revendiquer : différenciation par **transparence**) ; pas de prix datés, pas de tableau comparatif.
- **Aucune concurrence d'affiliation** sur « nie grzeje / nie działa » et sur les calculs de zużycie prądu.
- Les rankings d'enseignes ne comparent pas entre marchands ; Ceneo ne propose pas d'analyse éditoriale (texte généré).
- testy-oczyszczaczy.pl a des **mesures** : citer et renvoyer, ne pas concurrencer sur la mesure.

**Prix en zł** : les concurrents affichent « od X zł » + historique ; Homenura n'affiche pas d'historique de prix Amazon.pl (non vérifié) : mettre « prix indicatif, vérifié le jj/mm » et lien vers la fiche.

**État réel d'Amazon.pl en 2026** [S4 : aboutamazon.pl, consulté le 30/10/2026] : **Prime Day sur Amazon.pl du 23 au 26 juin 2026** ; nouveau centre logistique annoncé à **Dobromierz** (Basse-Silésie, plus de 1 000 emplois, 30/6/2026) ; plus de **10 000 saisonniers** recrutés pour les centres logistiques avant les fêtes ; partenaire officiel de l'**Ekstraklasa** (21/7/2026) ; **Openbank Pay** (Santander) comme moyen de paiement (16/9/2026) ; **Amazon DSP** arrive en Pologne ; programme « Łatwa Wymiana » (reprise d'appareils). Les pages n'indiquent aucun chiffre de clients ou de vendeurs.
**Audience** : Allegro **21,92 M d'utilisateurs, 74,09 % de reach** en juillet 2026 (Mediapanel, via wiadomoscihandlowe.pl du 4/9/2026) ; internet PL : 29,3 M d'utilisateurs. **Aucun chiffre Amazon 2026 trouvé** ; dernier repère (mai 2022, résumé de recherche à vérifier) : Allegro 22,03 M vs Amazon 6,44 M. Des blogs 2026 avancent « 4 M+ clients Amazon.pl » (non vérifié).
**Implication pour un site qui ne lie qu'Amazon.pl** : (i) Amazon n'apparaît dans **aucun** des 20 SERP PL (0/20) ni dans les liens des deux sites de ranking analysés (prorankingi : EURO/Media Expert/MediaMarkt/Allegro ; rankingon : Ceneo) → les affiliés polonais monétisent surtout Ceneo/Allegro/enseignes ; (ii) le catalogue Amazon.pl peut être incomplet par catégorie (non vérifié : Amazon bloque la lecture automatique) ; (iii) l'Amazon Associates PL est un compte à part ; au lancement (2021, Geniuslink) : Électronique 5 %, Cuisine/Maison/Jardin 8 %, avec revue du compte après 3 ventes qualifiées sous 180 jours ; Freenance (mai 2026) annonce « 1–5 %, cookie 24 h, baisse de 1-2 points en 2024 » : **sources contradictoires, vérifier le barème dans le compte** ; (iv) le programme Allegro (via Awin) annonce 1–12 %, cookie 30 jours [Freenance, à vérifier] : à **évaluer comme alternative** — décision à prendre par le propriétaire du site (règle actuelle : Amazon uniquement).

## B.4 Requêtes saisonnières (PL)

| Moment | Date 2026 | Éléments sourcés | Pages à prévoir |
|---|---|---|---|
| Black Friday / Cyber Monday | **27/11** / **30/11** [S5] | **Allegro Black Weeks 2025 : du début novembre au 1/12** (spidersweb.pl, 5/11/2025) → fenêtre de ~4 semaines. SERP « black friday frytkownica beztłuszczowa » : MediaMarkt (liste dédiée), Allegro, Media Expert (« Black Weeks »), Morele, chefshop, okazjum.pl | « Black Friday 2026 frytkownice : kiedy kupić », « Black Weeks », historique de prix |
| Mikołajki | **6/12** (dimanche) | SERP « prezent na mikołajki AGD » : Media Expert (Prezentownik), MediaMarkt, Allegro (« do 50 zł »), Euro, monitorpromocji.pl, north.pl | « Prezent na Mikołajki do 50 / 100 / 200 zł », « małe AGD » |
| Boże Narodzenie | 24-26/12 | Non mesuré | « Prezent świąteczny smart home » |
| Soldes / après fêtes | janvier 2027 | Non mesuré | Reprise des pages BF |
| Amazon.pl Prime Day | 23-26/6/2026 | [S4] | Rappel pour 2027 |
| Hiver / smog | octobre-février | SERP « oczyszczacz powietrza », « czujnik czadu », « farelka » riches ; pas de mesure | Contenu avant octobre |
| Été | mai-août | « klimatyzator przenośny », « robot koszący », « robot basenowy » | Contenu avant avril |

**Requêtes énergie** : « ile prądu zużywa frytkownica beztłuszczowa » (10 pages en SERP), « farelka zużycie prądu » (Media Expert + 9 pages). Le prix du kWh en zł 2026 n'a pas été vérifié : champ modifiable obligatoire.

## B.5 Comment Homenura peut passer devant — 10 actions (impact / effort)

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | **Vérifier la chaîne de monétisation** avant lancement : compte Associates PL, tag, barème, ASIN présents sur amazon.pl ; décider d'un test Allegro/Awin | Très élevé | Faible-moyen |
| 2 | Pages **« nie działa / nie grzeje »** (zéro concurrence d'affiliation) | Élevé | Faible |
| 3 | Pages **« ile prądu zużywa… »** avec calculateur zł | Élevé | Faible |
| 4 | Cluster **czujnik czadu / dymu** + **oczyszczacz / osuszacz** (hiver, smog) | Élevé | Moyen |
| 5 | Modèle de **ranking transparent** (méthode, tableau, FAQ) avec sous-pages **do 200 / 300 / 500 zł** | Élevé | Moyen |
| 6 | **Saisonnalité** : Black Friday 27/11, Mikołajki 6/12, Boże Narodzenie | Élevé (court terme) | Faible |
| 7 | Pages **« X vs Y »** | Moyen | Faible |
| 8 | Données structurées + ASCII propre + hreflang pl | Moyen | Faible-moyen |
| 9 | Contenu **réglementaire** : détecteurs (Dz.U. 22/11/2024), PV balcon (notification OSD), magazyn energii (dotation) | Moyen | Moyen |
| 10 | Pages **marque + modèle** (Xiaomi, Roborock, Dreame, Philips, Ninja, Tefal, Cosori) | Moyen | Moyen |

**Détail**

1. **Monétisation** : avant d'écrire 400 pages PL, tester 10 ASIN réels sur amazon.pl, confirmer la disponibilité et la livraison, vérifier le compte Associates PL (revue après 3 ventes qualifiées sous 180 jours d'après Geniuslink). Si l'on souhaite un second débouché, mesurer en test limité Allegro (Awin, 1–12 % selon Freenance, à vérifier).
2. **Pannes** : « Frytkownica beztłuszczowa nie grzeje : 7 przyczyn », « Frytkownica nie włącza się », « Odkurzacz robot nie ładuje się », « Czujnik czadu piszczy ». SERP actuel : mpd.net.pl, Electrolux, elektroda.pl (forum). FAQ en 5 questions + renvoi vers le SAV du constructeur.
3. **Énergie** : « Ile prądu zużywa frytkownica beztłuszczowa? (kWh i zł) » ; « Farelka: ile prądu zużywa? » ; champ « cena za kWh » modifiable.
4. **Cluster air/sécurité** : « Czujnik czadu: który wybrać? Ranking 2026 » ; « Czujnik dymu i czadu: obowiązek od 2030 w mieszkaniach z paleniskiem » (formulation conforme à gov.pl : logements avec combustion solide/liquide/gaz) ; « Oczyszczacz powietrza do sypialni » ; renvoyer vers testy-oczyszczaczy.pl comme source de mesures.
5. **Rankings** : titre type « Ranking frytkownic beztłuszczowych 2026: TOP 10 + jak wybrać » ; H1 « Najlepsze frytkownice beztłuszczowe 2026 » ; intro : « Nie testujemy produktów sami. Ranking opiera się na parametrach, opiniach kupujących i niezależnych testach (m.in. Komputer Świat), z linkami. » ; un tableau de specs unique ; « Nura Score » avec critères pondérés visibles ; FAQ 10 questions (capacité pour 2 personnes, dwukomorowa czy jednokomorowa, zużycie prądu, czy warto). Sous-pages : do 200 zł / 300 zł / 500 zł.
6. **Saisons** : « Black Friday 2026: najlepsze frytkownice (27.11) », « Prezent na Mikołajki do 100 zł: małe AGD ».
7. **X vs Y** : frytkownica vs piekarnik ; oczyszczacz vs nawilżacz ; klimatyzator przenośny vs klimator ; robot z mopem vs odkurzacz pionowy ; Roborock vs Dreame ; Xiaomi vs Philips (frytkownica).
8. **Technique** : Product + ItemList + FAQPage + Article ; slugs PL sans diacritiques (`ranking-frytkownic-beztluszczowych`) ; hreflang `pl` ; `x-default`.
9. **Réglementaire** : trois pages d'autorité à mettre à jour (champ « zaktualizowano »).
10. **Marques** : une page par marque/modèle phare, avec « opinie » et « vs ».

---

## Annexe — Sources principales (cliquables)

- Brandweer (rookmelder obligatoire depuis le 1/7/2022) : https://www.brandweer.nl/onderwerpen/rookmelders/
- Rijksoverheid (nombre de rookmelders) : https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/gezonde-en-veilige-leefomgeving/hoeveel-rookmelders-moet-ik-in-mijn-huis-hebben
- Sinterklaas 2026 (dates) : https://www.tvgids.nl/nieuws/amusement/op-deze-datum-start-het-sinterklaasjournaal-in-2026
- lootjestrekken.nl Feestdagenonderzoek 2025 : https://static-cdn.drawnames.com/Content/Press/20251113-NL-Persbericht-Feestdagenonderzoek.pdf
- Deloitte NL (IA et achats, mai 2026) : https://www.deloitte.com/nl/nl/about/press-room/nederlanders-vertrouwen-ai-informatie-vaker-dan-winkeladvies.html
- Ahrefs (sources citées AI Overviews, USA) : https://ahrefs.com/blog/most-cited-domains-ai-overviews/
- Amazon Associates NL (barème, programme séparé) : https://geniuslink.com/blog/amazon-associates-netherlands/
- Amazon Associates PL (barème de lancement) : https://geniuslink.com/blog/amazon-poland-affiliate-program/
- Affiliate PL 2026 (Amazon, Allegro) : https://freenance.io/pasywny-dochod/affiliate-marketing-pl-2026-top-programy-revenue-shopee-allegro-empik-amazon-revolut-prowizje/
- Marketplace NL (chiffres secondaires) : https://searchlab.nl/statistieken/marketplace-statistieken-nederland-2026
- Allegro reach juillet 2026 : https://www.wiadomoscihandlowe.pl/retailtech-i-nowe-technologie/retail-media/allegro-biedronka-media-expert-i-lidl-kto-dominuje-w-internecie-2537741
- Amazon Polska (actualités 2026) : https://www.aboutamazon.pl/
- Allegro Black Weeks 2025 : https://spidersweb.pl/2025/11/allegro-black-weeks-2025.html
- Détecteurs de fumée/CO (PSP) : https://www.gov.pl/web/kppsp-pabianice/rok-od-wprowadzenia-nowych-przepisow-przeciwpozarowych
- Fotowoltaika balkonowa (akademia-fotowoltaiki, 14/10/2026) : https://akademia-fotowoltaiki.pl/fotowoltaika-na-balkonie/
- TrustMate / IA et données structurées : https://www.wiadomoscihandlowe.pl/retailtech-i-nowe-technologie/big-data-i-sztuczna-inteligencja/ai-moze-zmyslac-wady-polskich-produktow-badanie-pokazuje-ryzyko-dla-e-commerce-2538423
- Ceneo ranking (méthode) : https://www.ceneo.pl/rankingi/ranking-oczyszczaczy-powietrza
- Concurrents analysés : https://www.consumententesten.nl/beste-airfryer/ · https://www.prorankingi.pl/rankingi/male-agd-do-kuchni/frytkownice/ · https://rankingon.pl/ranking-air-fryer/
- Salderingsregeling : https://www.zonneplan.nl/salderingsregeling · https://www.consumentenbond.nl/zonnepanelen/blijft-de-salderingsregeling-toch-bestaan

## Annexe — Ce qui reste à faire pour fiabiliser (hors périmètre de cette session)

1. Relancer **Google Trends PL** et l'**autocomplete PL** (bloqués / interrompus), puis compléter B.1 avec des indices chiffrés.
2. Exporter les **requêtes réelles de Search Console NL** (26 clics/28 j : peu, mais précieux) pour valider les mots-clés NL.
3. Étalonner avec **Keyword Planner** (au moins « airfryer », « thuisbatterij », « frytkownica beztłuszczowa ») pour remplacer l'hypothèse de calage.
4. Vérifier dans Google (SERP réels) la place de **Tweakers**, **Kieskeurig**, **Komputer Świat**, **Spider's Web** (non observables avec la source S3).
5. Confirmer le **statut légal** des panneaux de balcon (NL : netbeheerder/NEN ; PL : OSD) avant publication.
