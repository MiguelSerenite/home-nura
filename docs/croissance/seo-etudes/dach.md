# Étude SEO de marché — DACH (Allemagne, Autriche, Suisse alémanique) + vergleich.org

Site : homenura.com (/de, version allemande unique). Étude réalisée le 30/10/2026. Aucun code modifié.
Règle du site rappelée : jamais « Test / Testsieger » pour soi-même (aucun test produit, risque UWG), seulement « Vergleich ». Citer Stiftung Warentest, CHIP, ÖKO-TEST, Computerbild, VKI, Kassensturz avec lien est permis.

Convention : chaque chiffre est suivi d'une source [Sx] (liste en fin de fichier) ou marqué « estimation ». Ce qui n'a pas pu être vérifié est dit explicitement.

---

## 0. Constats clés (à lire en premier)

1. **vergleich.org n'est pas invulnérable sur Google.de.** Sur 8 requêtes « test / vergleich » (Google.de, 30/10/2026, cookies refusés), il n'apparaît dans aucune première page visible [S8]. Selon l'estimation Similarweb, sa 1re source de trafic est le **Paid Search (49 % des visites desktop)** et 55,5 % de son trafic par mots-clés est payant (44,5 % organique) [S5]. Il n'est pas non plus dans le top 50 des domaines cités par ChatGPT en Allemagne (Ahrefs, sept. 2026) [S10]. Son « leadership » est donc en partie acheté et en partie historique : il reste battable sur des segments précis.
2. **Le mot que les Allemands tapent est « Test » / « Testsieger » / « Stiftung Warentest »**, pas « Vergleich » : dans Google Suggest, « vergleich » n'apparaît presque jamais (2 suggestions seulement sur l'ensemble des ~20 catégories : « saug wischroboter vergleich » et « balkonkraftwerk vergleich stiftung warentest ») alors que test/testsieger/stiftung warentest/erfahrungen reviennent partout [S9]. Notre règle « Vergleich seulement » nous prive donc du mot le plus tapé : il faut le compenser en **citant** les tests tiers (« Testsieger laut Stiftung Warentest ») et en gagnant sur les modificateurs (bis X Euro, ohne, mit, Probleme).
3. **Huit de nos « kw de » actuels sont mal choisis** (non-termes ou mauvais mot ; 6 confirmés par Suggest, 2 par inférence) et 4 sont à ajuster : voir §1.0.
4. **Les AI Overviews n'apparaissent pas sur les requêtes shopping observées** (0/8) et Sistrix confirme que Google n'affiche pas d'AIO pour les mots-clés avec intégration Shopping [S14]. Dans ChatGPT DE, ce sont test.de (n°5), idealo (n°8), Reddit (n°13), Computerbild (n°15), CHIP (n°16), testberichte.de (n°29) qui sont cités [S10].
5. **vergleich.org a deux gabarits** : « X Test 2026 » (catégories testées en labo, 7 pages sur 16 échantillonnées) et « X Vergleich 2026 » (9 pages sur 16), ce qui est exactement sa réponse à la controverse « Test vs Vergleich » [S1][S4][S16]. Sa longue traîne couvre des types de produits (18 797 URLs) mais quasiment aucune page « Probleme », « Erfahrungen », « vs » (≈ 0–3 pages) et très peu de « bis X Euro » (63 pages sur tout le site) [S2].
6. **Une seule version /de suffit** : vergleich.org sert DE/AT/CH avec une seule version, sans hreflang (AT 5,4 % et CH 3,1 % de l'audience selon Similarweb) [S1][S5].

Limites de cette étude (honnêteté) :
- **Volumes de recherche : aucune mesure obtenue.** Ahrefs Keyword Generator a affiché un contrôle anti-robot (Cloudflare Turnstile, non contourné), Google Trends a répondu HTTP 429, Google Suggest a été limité (HTTP 403) puis remplacé par Bing Suggest pour 8 catégories. Les volumes ci-dessous sont des **tranches d'estimation** (mémoire des tranches Keyword Planner DE), à valider dans Search Console / Keyword Planner / Sistrix avant tout arbitrage chiffré.
- Le budget de recherche web de la session a été épuisé en fin d'étude : le lien « Team Internet » (mentionné dans le brief) n'a **pas** pu être confirmé ; la source consultée cite **CentralNic** comme acquéreur [S6].
- Les snapshots Google sont des instantanés uniques (IP/géoloc inconnues ; cookies refusés sauf la 1re requête, « heißluftfritteuse test », chargée avant la bannière), volatils : la requête « heißluftfritteuse vergleich » a donné deux ensembles de résultats différents à 3 minutes d'intervalle [S8].

---

## 1. Vocabulaire réel des acheteurs (21 catégories)

Légende volumes (**estimation, non mesurée**) : A ≥ 300 k/mois · B 100–300 k · C 30–100 k · D 10–30 k · E < 10 k. « tête » = terme générique ; « test » = « X test ».
Source des modificateurs : Google Suggest DE le 30/10/2026 (marqué [G]) ou, quand Google a limité les requêtes, Bing Suggest DE (marqué [B]) [S9]. L'ordre des suggestions est un signal de popularité, pas un volume.
Saisonnalité = estimation.

### 1.0 Verdict sur nos « kw de » actuels

| Silo (slug) | kw de actuel | Verdict | À utiliser à la place / en plus |
|---|---|---|---|
| airfryers | beste heißluftfritteuse | À ajuster | « Heißluftfritteuse » + « Airfryer » ; « beste » n'est pas suggéré, « test/testsieger » oui |
| cafetieres | beste vernetzte kaffeemaschine | **MAL CHOISI** (non-terme) | « Kaffeevollautomat » (+ section « mit App ») |
| prises-connectees | beste smarte steckdose | À ajuster | « WLAN Steckdose », « smarte Steckdose mit Strommessung » |
| compteurs-energie | smarter stromzähler | **MAL CHOISI** (inférence éditoriale : « Stromzähler » = compteur Smart Meter du fournisseur, intention différente) | « Strommessgerät Steckdose », « Energiekostenmessgerät » |
| thermostats | bestes smartes thermostat | **MAL CHOISI** (trop vague) | « smarte Heizkörperthermostate » ; « Raumthermostat WLAN » en page séparée |
| solaire-balcon | balkonkraftwerk | OK (tête) | + pages « mit Speicher », « 800 Watt », « 2000 Watt » |
| sonnettes-video | beste video türklingel | OK | « Video-Türklingel », « Türklingel mit Kamera », « ohne Abo » |
| cameras-exterieur | außenüberwachungskamera | **MAL CHOISI** (mot composé non utilisé) | « Überwachungskamera außen » |
| cameras-interieur | innenüberwachungskamera | **MAL CHOISI** (inférence : même défaut ; slug concurrent « ueberwachungskamera-innen ») | « Überwachungskamera innen » |
| serrures-connectees | smartes türschloss | OK (c'est la suggestion exacte) | + « elektronisches Türschloss », « nachrüsten » |
| detecteurs-fumee-co | smarter rauchmelder | **MAL CHOISI** | « Rauchmelder » (+ vernetzt/Funk/mit App/WLAN) |
| purificateurs-air | bester luftreiniger | OK | |
| deshumidificateurs | bester luftentfeuchter | OK | |
| climatiseurs-mobiles | mobiles klimagerät | À ajuster | « mobile Klimaanlage » est le terme suggéré en tête ; « Klimagerät » en synonyme |
| chauffages-appoint | smarter heizlüfter | **MAL CHOISI** | « Heizlüfter » (+ mit WLAN/Thermostat), « Elektroheizung » |
| tondeuses-robots | bester mähroboter | OK | « ohne Begrenzungsdraht/-kabel » en page dédiée |
| robots-piscine | bester poolroboter | OK | |
| aspirateurs-robots | bester saugroboter | OK | |
| aspirateurs-laveurs | saug wisch roboter | À ajuster (graphie) | « Saug-Wischroboter » / « Saug- und Wischroboter » / « Saugroboter mit Wischfunktion » |
| aspirateurs-balais | bester akku stielsauger | **MAL CHOISI** | « Akku-Staubsauger » (« Stielsauger » en synonyme) |
| laveurs-vitres | fensterputzroboter | OK | |
| nettoyeurs-vapeur | bester dampfreiniger | OK | |

Total : 8 mal choisis (cafetieres, compteurs-energie [inférence], thermostats, cameras-exterieur, cameras-interieur [inférence], detecteurs-fumee-co, chauffages-appoint, aspirateurs-balais), 4 à ajuster (airfryers, prises-connectees, climatiseurs-mobiles, aspirateurs-laveurs).

### 1.1 Fiches catégories

**1. Heißluftfritteuse / Airfryer** (airfryers)
- Principal : Heißluftfritteuse. Synonyme dominant : **Airfryer** (« airfryer test », « airfryer testsieger » en tête) [G].
- Modificateurs [G] : test, testsieger, test 2026, Stiftung Warentest (+ « test zdf », « test wdr ») ; bis 50 / 60 / 100 €, bis 1000–1500 Watt, bis 5 Liter ; **ohne PFAS / Teflon / Beschichtung / Plastik** ; mit 2 Kammern / Doppelkammer / Glasbehälter / Dampfgarer / Drehkorb / Grillfunktion / Pizzafach ; marques Ninja, Cosori, Philips, Tefal, Lidl ; « airfryer vs backofen / mikrowelle / fritteuse » ; erfahrungen (Aldi, Lidl).
- Volume (estimation) : tête A ; « test » C–B. Intention : comparative/commerciale ; pic probable Q4.
- AT/CH : AT dit « Backrohr », « Erdäpfel » (communiqué VKI) [S20] ; CH écrit « Heissluftfritteuse » (ss) [S21].

**2. Saugroboter** (aspirateurs-robots) et **Saug-Wischroboter** (aspirateurs-laveurs)
- Principal : Saugroboter. Cluster dominant : **« Saugroboter mit Wischfunktion »** (3e suggestion) ; formes « saug wischroboter », « saug und wischroboter » ; synonymes : Wischroboter, Staubsaugerroboter (titre CHIP), Wischsaugroboter (PAA) [G][S8].
- Modificateurs [G] : bis 200 / 250 / 300 / 400 / 500 € (surtout « + test ») ; ohne Wischfunktion / Beutel / WLAN / Station / App / Kamera ; mit Absaugstation / Arm / Greifarm / Walze / Selbstreinigung / Festwasseranschluss ; Roborock, Dreame, Ecovacs, Eufy, Vorwerk, Xiaomi ; « vs staubsauger / akkusauger » ; **probleme** (WLAN, Teppich, Dreame, Xiaomi, Shark, Yeedi) ; erfahrungen (forum, reddit). Puces de filtre Google SERP : Mit Wischfunktion, Bis 500 Euro, Stiftung Warentest, Lange Haare, Eufy [S8].
- Volume : tête A ; test B ; « mit Wischfunktion » C.

**3. Kaffeevollautomat** (cafetieres)
- Principal : Kaffeevollautomat. Aucun terme « vernetzt/WLAN » dans les suggestions [G].
- Modificateurs [G] : test/testsieger/2026/Stiftung Warentest ; **bis 200 / 250 / 300 / 400 / 500 / 600 €** (+ testsieger) ; ohne Milchaufschäumer / Milchsystem ; mit Milchschlauch / Milchbehälter / 2 Bohnenbehältern / Kakao / Wasseranschluss ; Philips, DeLonghi, Siemens, Jura, Melitta, Nivona, Krups, Saeco, Smeg, Tchibo ; « vs Siebträger / Kapselmaschine / Nespresso » ; **probleme (« brühgruppe klemmt »)**.
- Volume : tête A ; test C–B ; « bis 300 € » D. SERP observé : sites de niche café (kaffeeweltdeutschland, coffeeness, roastmarket, coffee-tasters) et welt.de « bis 300 Euro » [S8].

**4. Akku-Staubsauger** (aspirateurs-balais)
- Principal : **Akku-Staubsauger** ; synonymes : Stielsauger, Handstaubsauger, kabelloser Staubsauger [G].
- Modificateurs [G] : test 2026 / testsieger / Stiftung Warentest (+ Miele) ; bis 50 / 100 / 150 / 200 € ; ohne Beutel / Kabel / Wandhalterung / Bürstenrolle ; mit Wischfunktion / Absaugstation / Wechselakku / Licht ; Bosch, Makita, Bissell, Shark, Levoit, Dyson ; vs Kabel/Bodenstaubsauger/Saugroboter/Dyson.
- Volume : tête B–A ; test C.

**5. Balkonkraftwerk** (solaire-balcon) — 800 Watt, mit Speicher
- Principal : Balkonkraftwerk. Synonyme (vergleich.org H2) : « Solaranlage für den Balkon ». Autres formes : Steckersolargerät, Balkonsolar (connaissance générale, non vérifié ici).
- Modificateurs [G] : **mit Speicher (2e suggestion)**, anmelden, **2000 Watt (mit Speicher)**, 800 Watt, testsieger, Stiftung Warentest (+ « kritik »), « bis wieviel Watt erlaubt/anmeldefrei » ; ohne Speicher (sinnvoll ?) / Anmeldung / Einspeisung ; Anker, Solakon, Zendure, EcoFlow, Growatt Noah, Marstek ; **probleme (FI, Netzbetreiber, Stromzähler, App)** ; erfahrungen ertrag.
- Volume : tête A (potentiellement la plus forte, pic printemps, pics réglementaires) ; « mit Speicher » B. Intention : mélange informatif-réglementaire + commercial.
- Test tiers à citer (via résultat de recherche) : home&smart Speicher-Test 2026 (Anker SOLIX Solarbank 4 Pro 91/100 ; terrain : Zendure SolarFlow 800 Pro) [S22].
- AT/CH : réglementation différente (voir §4).
- SERP « balkonkraftwerk mit speicher » : boutiques (solarway.shop, kleineskraftwerk, moe-balkonkraftwerk) + heise + photovoltaikforum [S8].

**6. Smartes Heizkörperthermostat** (thermostats)
- Principal : **Heizkörperthermostat (smart)** / « smarte Heizkörperthermostate » ; synonymes : WLAN-Thermostat, Thermostat Smart Home, Raumthermostat WLAN, Alexa-Thermostat (pages séparées chez vergleich.org) [S2].
- Modificateurs [G] : test/testsieger ; **ohne Hub / Cloud / Abo / Gateway / Bridge / WLAN** ; mit Fernfühler / App / Akku ; IKEA, Bosch, Danfoss (Eco Bluetooth), SwitchBot ; « hydraulischer abgleich ».
- Volume : tête B ; version smart C ; pic sept.–janv.

**7. Video-Türklingel** (sonnettes-video)
- Principal : Video-Türklingel ; synonymes : Türklingel mit Kamera, WLAN-Türklingel, Videotürklingel [G][S2].
- Modificateurs [G] : **ohne Abo (2e suggestion, + testsieger)** ; mit Monitor / Kamera / Türöffner / Bildschirm / Akku / Stromanschluss ; kabelgebunden ; ohne WLAN / Cloud / Kabel / Internet ; test chip ; Ring, Eufy, Arlo, Bauhn, Metzler.
- Volume : tête C ; « ohne Abo » D.
- vergleich.org n'a **pas** de page « video-tuerklingel » (10 pages « klingel » : wlan-, ring-, arlo-, eufy-, funkklingel…) [S2].

**8. Smartes Türschloss** (serrures-connectees)
- Principal : smartes Türschloss ; synonymes : **elektronisches Türschloss** (page vergleich.org), Smart Lock, Schließzylinder elektronisch [G][S2].
- Modificateurs [G] : **nachrüsten**, Haustür, Fingerabdruck, outdoor ; ohne Zylindertausch / Cloud / WLAN / Batterie / Bohren ; mit Fingerabdruck / Zylinder / Kamera / Transponder / Gesichtserkennung ; Bosch.
- Volume : C–D.

**9. Rauchmelder** (detecteurs-fumee-co) — Rauchmelderpflicht
- Principal : Rauchmelder ; synonymes : Rauchwarnmelder (terme juridique), Brandmelder, Funkrauchmelder, vernetzte Rauchmelder [G][S2].
- Modificateurs [G] : **pflicht, piept, blinkt rot, 10 Jahre** ; test/testsieger/Stiftung Warentest (+ WISO) ; ohne Batterie / Bohren / Blinken / LED / Fehlalarm ; mit Magnet / App / WLAN / Kamera / 10-Jahres-Batterie ; X-Sense, Hekatron, ABUS, Techem, ista, Shelly, Lupus ; « probleme » (Techem, ista, Hekatron).
- Volume : tête A–B (saisonnier Q4/Q1, estimation) ; « Rauchmelderpflicht » C ; « Rauchmelder piept » C (intention post-achat).
- Droit : Pflicht dans tous les Länder allemands (Landesbauordnungen), Niedersachsen aussi pour l'existant depuis 2026 (GIGA, via recherche) ; AT : obligation via OIB-RL 2 (état 2016 partiel, à actualiser) ; CH : pas d'obligation (SRF) [S21].

**10. Luftreiniger** (purificateurs-air)
- Principal : Luftreiniger ; synonymes : Luftreinigungsgerät (H2 vergleich.org), Luftfilter, HEPA-Luftreiniger [G][S1].
- Modificateurs [G] : mit HEPA-Filter / Aktivkohlefilter / Wasser / Kühlfunktion / Duft ; ohne Filter / Ozon / Filterwechsel / WLAN / App ; bis 50 qm ; test / Stiftung Warentest ; Philips, Dyson, Bosch Air 4000, Levoit, Blueair, Trotec ; « und Luftbefeuchter/Entfeuchter » ; erfahrungen Allergiker/reddit.
- Volume : A–B (automne-hiver + pollens).

**11. Luftentfeuchter** (deshumidificateurs)
- Principal : Luftentfeuchter [G].
- Modificateurs [G] : Keller, Wohnung, elektrisch, Granulat ; **ohne Strom** (produit différent : granulés) ; mit Ablaufschlauch / Hygrostat / HEPA / Kondensatpumpe ; bis 50 qm ; Bosch Dry 1000/2000/4000, Trotec, DeLonghi ; vs Klimaanlage / Trockner ; **testsieger ÖKO-TEST** ; probleme (Comfee, Trotec).
- Volume : A–B (pic automne-hiver). Piège : « ohne Strom » (Granulat) doit être séparé.

**12. Mobile Klimaanlage** (climatiseurs-mobiles) — ohne Schlauch
- Principal : **mobile Klimaanlage** (le « mobiles Klimagerät » de notre kw n'est pas la forme suggérée) ; synonymes : Klimagerät (slug vergleich.org « mobile-klimageraete »), Monoblock, mobile Split-Klimaanlage [G][S2].
- Modificateurs [G] : **ohne Abluftschlauch / ohne Schlauch (2e suggestion)** ; mit Abluftschlauch / 2 Schläuchen / Außengerät / Heizfunktion ; bis 200 / 250 / 300 / 400 € ; 12000 BTU ; vs Split / Ventilator / Luftkühler ; Bosch Cool 4000, Klarstein, Coolizi ; test/testsieger/Stiftung Warentest/CHIP.
- Volume : A–B, très saisonnier (été, canicules) ; « ohne Abluftschlauch » C–D.
- Piège éditorial (hypothèse à étayer avec test.de / Verbraucherzentrale) : les appareils « ohne Schlauch » sont souvent des refroidisseurs d'air, pas de vraies climatisations.

**13. Heizlüfter / Elektroheizung** (chauffages-appoint)
- Principal : Heizlüfter ; synonymes : Heizstrahler, Infrarotheizung, Ölradiator, Konvektor, Keramik-Heizlüfter [B].
- Modificateurs [B] : test 2026 / testsieger Stiftung Warentest ; ohne Kabel / Kippschutz / Gebläse ; mit Thermostat / Fernbedienung / Zeitschaltuhr / **WLAN** / Akku ; bis 1000 Watt ; vs Infrarotheizung / Ölradiator / Heizstrahler ; Elektroheizung mit Schamotte-/Speicherkern, Wandmontage. vergleich.org compte 52 pages « heiz* » (500/2000/3000 Watt, Infrarotheizung 300–1200 Watt…) [S2].
- Volume : A–B, pic hiver.

**14. Mähroboter** (tondeuses-robots) — ohne Begrenzungsdraht
- Principal : Mähroboter ; synonymes : **Rasenroboter (CH, SRF)**, Rasenmähroboter [S21][B].
- Modificateurs [B] : **ohne Begrenzungsdraht / Begrenzungskabel / Draht / Kabel (4 variantes)** ; bis 100 / 250 / 300 / 500 / 800 / 1000 / 3000 qm ; mit GPS / Kamera / Kantenmähfunktion / Kettenantrieb / Raupenantrieb ; Husqvarna, Segway, Kress, Gardena, Worx, Mammotion ; test 2026 (+ « ohne draht »), Stiftung Warentest ; erfahrungen / erfahrungsberichte.
- Volume : tête A (pic printemps) ; « ohne Begrenzungskabel » C. SERP observé : marque (Mammotion), drohnen.de, ManoMano, Otto ratgeber, haus-garten-test : pas de portail dominant [S8].

**15. Poolroboter** (robots-piscine)
- Principal : Poolroboter ; synonymes : Poolsauger, Poolreiniger [B][S2].
- Modificateurs [B] : **Akku (2e)**, testsieger, mit/ohne Kabel (für Rundpool), kaufen ; bis 100 / 150 / 200 / 300 € ; Dolphin, Aiper, Bestway ; mit KI / Feinfilter / Bürste.
- Volume : B (été).

**16. Überwachungskamera außen** (cameras-exterieur)
- Principal : **Überwachungskamera außen** (« außenüberwachungskamera » n'apparaît pas) ; synonymes : Außenkamera, Outdoor-Kamera, IP-Kamera [B].
- Modificateurs [B] : kabellos, Solar, WLAN ; **ohne Abo / WLAN / Internet / Cloud / Strom / Kabel / Bohren** ; mit Aufzeichnung / Akku / SIM-Karte / Monitor / Solarpanel ; testsieger 2026, test chip ; Bosch, Reolink, ABUS.
- Volume : C–B. Point de vigilance (non étudié) : droit à l'image / DSGVO.

**17. Wallbox** (bornes-recharge-ve)
- Principal : Wallbox ; synonymes : Ladestation, mobile Wallbox [B][S2].
- Modificateurs [B] : **förderung (2e)**, 11 kW, 22 kW, installation, kosten ; « bis 11 kW anmelden », « bis 4,2 kW » ; ohne PV-Anlage / Kabel / Starkstrom / Anmeldung ; mit MID-Zähler / Stromzähler / RFID / CEE-Stecker / PV-Überschussladen ; test ADAC, testsieger 2026 ; Keba, BMW.
- Volume : A–B, pics liés aux aides/réglementation. Cité par ChatGPT : ADAC n°2 du top 50 DE [S10] (citer le test ADAC quand il existe, sans l'inférer à partir de ce seul chiffre).

**18. Steckdose mit Strommessung** (prises-connectees / compteurs-energie)
- Principal : Steckdose mit Strommessung ; synonymes : Strommessgerät (Steckdose), Energiekostenmessgerät, WLAN-Steckdose mit Strommessung, Zwischenstecker [B].
- Suggestions maigres → niche. Volume : C–D.
- vergleich.org n'a **pas** de page dédiée « Strommessung » (liste complète des pages « strommess/steckdose » : wlan-steckdose, smarte-steckdosenleiste, zwischenstecker-mit-schalter, wlan-steckdose-aussen) [S2].

**19. Fensterputzroboter** (laveurs-vitres)
- Principal : Fensterputzroboter ; ne pas confondre avec Fenstersauger [B][S2].
- Modificateurs [B] : testsieger, Stiftung Warentest, **test Kassensturz (CH)** ; ohne Kabel / Stromkabel / App / Sicherungsseil ; mit Akku / Sprühfunktion / Kantenerkennung / Fernbedienung / Überkopffunktion ; Kärcher ; Bestenliste.
- Volume : C (pic printemps-été). « fensterputzroboter » est le **1er mot-clé organique de vergleich.org** (Similarweb, desktop monde) [S5].

**20. Dampfreiniger** (nettoyeurs-vapeur)
- Principal : Dampfreiniger ; synonymes : Dampfbesen, Handdampfreiniger [B][S2].
- Modificateurs [B] : test 2026 / 2025 ; **test Kassensturz (CH)** ; testsieger Stiftung Warentest ; mit Saugfunktion / Akku / Bügeleisen ; Handgerät, Boden ; Kärcher, Bissell, Bosch.
- Volume : B–C.

### 1.2 Questions réelles (PAA Google.de 30/10/2026, à réutiliser en FAQ) [S8]
- Airfryer : Was ist der Nachteil von Heißluftfritteusen ? · Welcher Airfryer ist besser, Ninja oder Cosori ? · Welche Heißluftfritteuse empfiehlt die Stiftung Warentest ? · Wie viel Liter sollte eine gute Heißluftfritteuse haben (für 2 Personen) ? · Warum warnen Experten vor einer Heißluftfritteuse ?
- Saugroboter : Wer ist besser, Ecovacs oder Roborock ? · Was ist der beste Saugwischroboter 2026 ? · Auf was sollte man bei einem Wischsaugroboter achten ?
- Requêtes associées observées : « Heißluftfritteuse Test ZDF », « IMTEST Heißluftfritteuse Test », « Heißluftfritteuse 2 Kammern Test », « Bester Airfryer für 2 Personen ».

---

## 2. Qui domine les SERP et les réponses IA

### 2.1 Google.de — première page, 8 requêtes (30/10/2026, cookies refusés) [S8]

| Requête | Domaines vus (ordre d'apparition) |
|---|---|
| heißluftfritteuse test | ad-magazin, guter-rat, BILD, ga.de (reprise Stiftung Warentest), CHIP ; carrousel YouTube ; bloc Shopping (moebel.de, idealo) |
| heißluftfritteuse vergleich (chargement B, plus complet) | test.de, testit.de, CHIP, MediaMarkt, SWR, stern.de, idealo (magazin), Check24 (préco), IMTEST ; YouTube |
| heißluftfritteuse vergleich (chargement A, 3 min avant) | technikzuhause, heise, haus-garten-test, imtest, versus.com, amazon.de, chip |
| saugroboter test | sterntv, heise (bestenlisten), test.de (4 URLs dont PDF et Dreame), smart-home-fox, testbericht.de, computerbild ; YouTube, ARD Mediathek |
| saugroboter vergleich | china-gadgets, imtest, connect, drohnen.de, heise, chip, idealo, heimwerker.de |
| kaffeevollautomat test | kaffeeweltdeutschland, coffeeness (2), roastmarket, smarthomeassistent, welt.de, coffee-tasters, amazon.de |
| luftentfeuchter vergleich | homeandsmart, testsieger.de (ETM), raumklimatest, joybuy, idealo, testbericht.de, smart-home-fox |
| balkonkraftwerk mit speicher | solarway.shop, kleineskraftwerk, moe-balkonkraftwerk, heise (Top 10 Speicher), photovoltaikforum |
| mähroboter ohne begrenzungskabel | mammotion (marque), drohnen.de (2), manomano, otto (ratgeber), haus-garten-test, orth-gartentechnik |

Lecture (sur 8 requêtes, chargement A et B de la requête « vergleich » comptés ensemble) :
- **vergleich.org : 0 présence.** Même sur les requêtes contenant « vergleich ».
- Les plus présents : heise (4), idealo (4, bloc Shopping inclus), CHIP (3), test.de / Stiftung Warentest (2, mais 4 URLs sur « saugroboter test »), IMTEST (2), testbericht.de (2), drohnen.de (2), smart-home-fox (2), haus-garten-test (2).
- ETM / testsieger.de : 1 présence. haushaltsapparate.net, Expertentesten, techstage, Reddit : **non observés** dans ces snapshots (je ne peux pas affirmer qu'ils dominent).
- Sur les requêtes de longue traîne (« mähroboter ohne begrenzungskabel », « balkonkraftwerk mit speicher ») : marques, boutiques et petits sites de niche, **pas de portail dominant** → c'est là que la place est prenable.
- Les SERP sont **instables** (deux ensembles différents en 3 minutes) : un site jeune peut y entrer.
- Aucune **AI Overview** vue sur ces 8 requêtes (onglet « KI-Modus » vu sur l'une d'elles) ; blocs « Weitere Fragen » présents sur 7 requêtes (PAA absent sur « saugroboter vergleich »).
- Concurrents qui citent Stiftung Warentest en tête : CHIP, ga.de, test.de lui-même ; le titre type est « [Produit] im Test : Sieger der Stiftung Warentest ».

Note de cohérence à exploiter : la page vergleich.org « Heißluftfritteuse » affirme que le Testsieger Stiftung Warentest 09/2026 est la Cosori CAF-R901-AEU [S1], alors qu'un résumé de recherche relayant test.de cite la Philips 5000 Series Steam (1 bac) et la Cosori Turbo Tower Pro Smart (2 bacs) [S22]. Contradiction **non tranchée** (à vérifier sur test.de) : la précision des citations tierces peut devenir un avantage.

### 2.2 Réponses IA : ce qui est publié

- **ChatGPT, Allemagne** (Ahrefs Brand Radar, sept. 2026, top 50 = 477 276 citations ; % = part du top 50) [S10] : n°1 de.wikipedia 18,56 % · n°2 adac.de 6,21 % · n°3 duden.de · **n°5 test.de 3,84 %** · n°6 verbraucherzentrale.de 2,84 % · **n°8 idealo.de 2,71 %** · n°11 trustpilot · **n°13 reddit 1,80 %** · **n°15 computerbild 1,75 %** · **n°16 chip.de 1,73 %** · **n°29 testberichte.de 1,17 %**. **Absents du top 50 : vergleich.org, check24, amazon, heise, netzwelt, utopia, chefkoch.**
- **Google AI Overviews, Allemagne** (Ahrefs via synthèse) : YouTube 23,73 %, de.wikipedia 15,70 %, google.com 12,17 % [S11].
- **Gemini / Perplexity** (Revier59, 50 questions d'achat × 10 secteurs, sept. 2026) : Gemini cite surtout des portails comparatifs (Verivox, Check24), Perplexity des médias (Handelsblatt, n-tv) ; recouvrement des sources ChatGPT vs autres : 4–5 % seulement [S12]. Étude d'agence, non indépendante.
- **Affiliation dans les sources IA** (DataPulse Research, juin 2026, > 128 000 références) : 29 % des sources en allemand portent une mention pub/sponsoring/affiliation [S13].
- **AIO et clics** (Sistrix, 25/02/2026, maj 13/10/2026, > 100 M de mots-clés) : ~20 % des mots-clés avec AIO (~30 % en longue traîne) ; CTR position 1 : ~11 % avec AIO contre > 27 % sans ; pas d'AIO pour les mots-clés avec intégration Shopping ; idealo (-0,85 %) et Amazon (-1,73 %) parmi les moins touchés [S14].
- **Non trouvé** : aucune étude publique donnant, par catégorie produit allemande, quels portails sont cités dans les AIO/ChatGPT. Mon seul constat direct : vergleich.org absent du top 50 ChatGPT et des 8 SERP.

---

## 3. Comment vergleich.org construit sa position

### 3.1 Identité, taille, trafic
- Taille : **18 797 URLs** dans le sitemap unique (mesuré le 30/10/2026) [S2] ; « ≈ 449 011 produits dans plus de 22 645 comparatifs/tests » (affirmation du site) [S4] ; > 50 salariés, ≈ 500 nouveaux comparatifs par mois et « plusieurs milliers » de mises à jour par mois (affirmations du site) [S4] ; fondé en 2014 (selon le site ; l'article OMR de 2016 parle de « vor anderthalb Jahren ») [S4][S7] ; 59 auteurs listés sur /team/, 67 pages /autor/ dans le sitemap [S1][S2].
- Propriétaire : VGL Verlagsgesellschaft, rachetée par **CentralNic** (jusqu'à 95 M€, article du 08/03/2022, ~200 sites) [S6]. Entité légale dans le schema : « VGL Publishing AG » [S1]. Lien « Team Internet » : **non confirmé** par les sources lues.
- Sites pays liés dans le pied de page : miglioreconsiglio.it, meilleurs.fr, mejoraelige.es, pickbest.co.uk, bestpick.com [S1].
- Trafic (Similarweb, **estimation**, sept. 2026) : ~4,7 M de visites (lecture de la barre de comparaison, dernier mois affiché ; +16,1 % vs mois précédent) ; rang Allemagne n°635 ; Allemagne 88,15 % / Autriche 5,41 % / Suisse 3,08 % (desktop) ; **Paid Search = 1re source (49,31 %)**, Display 2e, Organique 3e ; 25,5 k mots-clés (trafic par mots-clés : 44,5 % organique / 55,5 % payant) ; top organique incl. « fensterputzroboter », « elektrischer türöffner » [S5]. En 2016 (OMR) : Google ≈ 70 % du trafic dont 40 points payants, ≈ 70 % du CA via Amazon (estimation de l'auteur) [S7].

### 3.2 Gabarit exact de page — version « Test » (catégories testées, ex. /heissluftfritteuse/) [S1]
Ordre des blocs :
1. Fil d'Ariane (Tests & Vergleiche > Haushalt > Frittieren).
2. **H1 « Heißluftfritteuse Test 2026 »** ; sous-titre H2 « Die besten Airfryer im Vergleich. ».
3. « Zuletzt aktualisiert : 29.10.2026 ».
4. **Schnellüberblick** : 3 cartes (TESTSIEGER / EINSTEIGER-TIPP / ALLROUNDER) avec nombre d'avis Amazon.
5. **Byline** : « Von : [rédactrice] » + lectrice/éditrice (« Lektorin »), domaine « schreibt über ».
6. « Die neuesten Updates » : journal daté (ex. 16.02.2026, 30.10.2025).
7. Intro courte (fourchette de prix).
8. « So wurde getestet » (3–4 lignes de méthode).
9. 3 cartes produit avec « Zum Testbericht » / « Zum Angebot » (lien affilié).
10. Table des matières.
11. **H2 Vergleichstabelle** : explication (données issues d'avis, Kundenreviews, fiches produit ; « min. 3 produits testés en interne »), filtres (prix, marque, note, tri), « 1–8 von 14 », badges (Vergleichssieger, Preis-Leistungs-Sieger, Neu), note « SEHR GUT » datée 10/2026, nombre d'avis Amazon, caractéristiques, « Vorteile », prix, lien comparateur de prix, paiement en plusieurs fois.
12. **H2 Testberichte** : H3 par produit (« Unser Heißluftfritteusen-Testsieger : … », « Cosori Turbo Blaze im Test : … »), narration pas à pas du test en labo (frites), « Unser Fazit ».
13. **H2 Kaufberatung** « So wählen Sie … aus dem obigen … Test oder Vergleich » : bloc « Das Wichtigste in Kürze » puis H3 numérotés 1–7 ; le 7 = **FAQ en sous-points 7.1…7.8** (dont « Welche Heißluftfritteuse empfiehlt die Stiftung Warentest ? »), liste de marques, vidéo YouTube.
14. **Quellenverzeichnis** : 5 sources externes (test.de, BZfE, Verbraucherzentrale, TÜV-Verband, Apotheken Umschau).
15. Commentaires (vide sur cette page).
16. **« Zusammenfassung »** : 3 promesses (« Immer aktuell : au plus tard après 120 jours », « Neutral und unabhängig », « Anspruchsvoll »).
17. Maillage : variantes (xxl, mit-drehkorb, 7-liter, 12-liter, 2-faecher, mit-grillfunktion, klein, fuer-4-personen), marques (philips-, tefal-, klarstein-heissluftfritteuse), produits voisins (fritteuse, mini-fritteuse, doppelfritteuse, frittiertopf…).
Mesures : ≈ 6 280 mots visibles (≈ 44 500 caractères dans <main>) ; /luftreiniger/ ≈ 8 660 mots ; /balkonkraftwerk/ ≈ 3 630 mots (mesure DOM) [S1].

### 3.3 Gabarit « Vergleich » (pages plus anciennes, ex. /luftreiniger/, /balkonkraftwerk/, /wallbox/) [S1]
- **<title> « X Test & Vergleich » Top N im Oktober 2026 »** (nombre et mois dynamiques) ; **H1 « X Vergleich 2026 »** ; meta description « ➤ Aktueller und unabhängiger X Test bzw. Vergleich 2026 inkl. ✓ Vergleichssieger, ✓ Preis-Leistungs-Sieger uvm. ».
- Onglets en tête : « Bestenliste / Ratgeber / Kommentare ». Expert + rédacteur nommés (bio d'experte, ex. « berät seit 2024 »). Tableau, puis H2 « Die besten X : Wählen Sie Ihren persönlichen **Testsieger** aus der Bestenliste », Kaufberatung numérotée (+ « Gibt es Luftreiniger bei der Stiftung Warentest ? »), « Zusammenfassung », « Ausverkaufte X : empfehlenswert und bald wieder verfügbar ».
- Constat : sur 16 pages échantillonnées, **7 « Test »** (publiées en 2025 : airfryer, saug-wisch-roboter, kaffeevollautomat, akku-staubsauger, luftentfeuchter, fensterputzroboter, dampfreiniger) et **9 « Vergleich »** (publiées 2020–2022 : balkonkraftwerk, heizkoerperthermostat, rauchmelder, luftreiniger, heizluefter, maehroboter, poolroboter, ueberwachungskamera, wallbox) [S1]. Les pages « Vergleich » gardent « Test & Vergleich » dans le <title> et « Testsieger » dans un H2.

### 3.4 Balisage et signaux techniques [S1]
- JSON-LD : Organization (VGL Publishing AG, sameAs incl. Reddit, YouTube), WebSite + SearchAction, WebPage (dateModified/datePublished), BreadcrumbList, **Person ×2 (auteur + éditeur)**, **Article** (auteurs référencés), **Product ×5** (top du tableau), **ItemList** (gabarit « Vergleich »). **Pas de FAQPage, pas de Review/AggregateRating** observés.
- meta robots : index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 ; canonical auto-référent ; **aucun hreflang**.
- URLs : plates, translittérées (« heissluftfritteuse », « maehroboter »), seules 67 URLs imbriquées (/autor/…) [S2].
- robots.txt : liste explicitement une trentaine de bots IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, ChatGPT-User…) mais ne leur **interdit que /sponsored-products et /suche** : contenu non bloqué pour l'IA [S3].
- Page dédiée « Vergleich.org als bevorzugte Quelle bei Google » qui explique la fonction « Bevorzugte Quellen » (qui influe, selon Google, sur Schlagzeilen, KI-Übersichten et KI-Modus) [S4] : manœuvre GEO bon marché.

### 3.5 Rythme de mise à jour (sitemap lastmod, mesuré 30/10/2026) [S2]
- 3 488 URLs sur 18 797 (18,6 %) modifiées dans les 30 derniers jours ; 8 163 (43,4 %) dans les 120 jours ; 13 603 (72,4 %) dans l'année. Pics récents : 1 570 (août), 2 010 (sept.), 3 402 (oct. 2026).
- Le site promet « au plus tard 120 jours » par rubrique [S1] : le sitemap ne permet pas de le confirmer (43 % < 120 j ; le lastmod peut ne pas refléter toutes les mises à jour).
- Pages échantillonnées : dateModified entre le 07/09 et le 29/10/2026 ; tableau « Aktualisiert : 30.10.2026 » (prix quotidiens).

### 3.6 Maillage et longue traîne [S2]
- Longue traîne = **types de produits**, pas questions : « X mit Y » 358 pages, « X für Y » 103, « X ohne Y » 64, « X bis N Euro » **63 seulement** (gasgrill, gaming-pc, tablet, smartphone…), pages « marque + produit » ≥ 188 (liste de 20 marques testée), « X vs / oder / Unterschied » **2**, « Probleme / Fehler » **≈ 3**, « Erfahrungen » **0**.
- Familles pour nos catégories (exhaustives dans le sitemap) : heißluftfritteuse 12 pages (xxl, 7/12 Liter, 2 Fächer, Drehkorb, Grillfunktion, 4 Personen, klein, Philips/Tefal/Klarstein) ; saugroboter 11 (rowenta, samsung, zaco, ecovacs, medion, eufy, roborock, lefant, günstiger, saug-wisch-roboter, wischroboter ; **aucune page « saugroboter » seule : /saugroboter/ = 404**) ; kaffeevollautomat 20 (bis 300/400/500 €, mit App, Milchbehälter, Milchschlauch, 2 Bohnenkammern, schmaler, Einbau, marques, produits d'entretien) ; akku-staubsauger 9 ; thermostat 13 ; klingel 10 ; türschloss 9 ; rauchmelder 12 ; luftreiniger 16 ; luftentfeuchter 9 ; klima 15 ; heiz* 52 ; mähroboter 9 (dont « ohne-begrenzungskabel » et un article « die häufigsten Probleme ») ; poolroboter 7 ; überwachungskamera 10 ; wallbox 24 ; fensterputz 5 ; dampfreiniger 5.
- **Trous constatés chez vergleich.org** : balkonkraftwerk = **1 seule page** (pas de « mit Speicher », « 800/2000 Watt », marques) ; pas de « video-tuerklingel » ; pas de « ohne Abo » ; pas de « mobile-klimaanlage-ohne-abluftschlauch » ; pas de page Strommessung ; pas de heizkoerperthermostat « ohne Hub » ; pas de « smartes-tuerschloss-nachruesten » ; airfryer sans « ohne PFAS » ni « Doppelkammer » (seulement « 2-faecher »).

### 3.7 Signaux E-E-A-T [S1][S4]
Auteur et éditeur nommés sur chaque page (bio + profils externes), pages auteur (/autor/), équipe de 59 personnes listées ; page « Wie wir arbeiten » (3 méthodes : tests propres en labo « depuis 2016 », comparatif/analyse, guides/études ; critères objectifs ; financement par affiliation expliqué ; « Sponsored Products » signalés « Anzeige ») ; certification **TÜV Saarland « Geprüftes Onlineportal » (juin 2023)** ; journal « Die neuesten Updates » ; **Quellenverzeichnis vers des autorités externes** (test.de, Verbraucherzentrale, TÜV, BZfE) ; 5 « Ressorts » éditoriaux ; mention de reprises par de grands médias [S4]. Revendications du site, non auditées ici.

### 3.8 Visibilité IA de vergleich.org
Constats : absent du top 50 ChatGPT DE [S10] ; bots IA autorisés [S3] ; page « bevorzugte Quelle » [S4] ; aucune donnée publique trouvée sur Perplexity/Gemini/AIO pour ce domaine. Hypothèse (non prouvée) : sa dépendance au payant et l'absence de signaux de marque dans les LLM expliquent l'absence côté ChatGPT, qui favorise institutions (test.de, ADAC, Verbraucherzentrale) et marques média (CHIP, Computerbild).

### 3.9 Controverse « Test vs Vergleich » (documentée)
- **OLG Köln, 30/10/2020, Az. 6 U 136/19** : sur recours de la fédération des centrales de consommateurs (vzbv), la cour interdit l'emploi du mot « Test » pour des comparatifs produits calculés par algorithme sans test en laboratoire ; un test suppose une méthode neutre, objective, avec critères définis ; le LG Köln (21/05/2019, 31 O 137/18) avait rejeté la demande. L'article source recommande aux sites de renoncer au mot « Test » dans ce cas (il ne cite pas « Vergleich » comme alternative) [S16]. Aucun jugement nommant vergleich.org n'a été trouvé (seulement un commentaire de lecteur sur l'article) [S16].
- **LG Berlin II, 26/05/2026, Az. 15 O 277/25 (définitif)** : sur demande du vzbv, interdiction de faire de la publicité avec un label « Testsieger » (« SEHR GUT ») pour des produits qui n'ont subi que des tests individuels, sans comparaison ; la mention en petits caractères ne dissipe pas la tromperie ; portail visé : testsieger-online.de (la page cite Lorbach Vergleichsportal DACH GmbH sans la désigner expressément comme défenderesse) [S17].
- **LG Amberg, 26/04/2021, Az. 41 HK O 1036/20** : publicité « Testsieger » trompeuse quand le test n'a pas décerné ce titre (résumé tiré d'un résultat de recherche, texte non relu en entier) [S18].
- Règles UWG (it-recht-kanzlei) : indépendance de l'institut, source précise et lisible, rang exact, actualité, « Testsieger » seulement si réellement en tête ; l'article ne traite pas explicitement le cas d'un portail qui **cite** un test tiers avec lien, ni celui d'un « Test » sans test propre : avis d'avocat recommandé [S19].
- **Pratique de vergleich.org** : affirme avoir un labo depuis 2016, réserve « Test » aux pages testées et marque « Vergleich » dans la Überschrift des autres [S4] ; mais ses pages « Vergleich » gardent « Test & Vergleich » dans le <title> et « Testsieger / Vergleichssieger » dans le corps [S1] : zone de risque résiduelle, non tranchée par un tribunal à ma connaissance.
- **Implication Homenura** : « Vergleich » / « Kaufberatung » / « Empfehlung » pour soi ; « Testsieger » **uniquement** en citation datée et liée (« Testsieger laut Stiftung Warentest, Ausgabe 09/2026 : … ») ; éviter « Vergleichssieger/Testsieger » comme label maison (suggère un classement par méthode) ; afficher les critères. Ceci n'est pas un avis juridique.

---

## 4. Spécificités Autriche et Suisse alémanique

| Sujet | Constat | Source |
|---|---|---|
| Amazon | Pas de boutique suisse ; les Suisses commandent sur **amazon.de** ; pour les articles expédiés par Amazon, la TVA allemande est retirée et les douanes gérées ; vendeurs tiers : droits et TVA suisses possibles à la livraison | [S21] |
| Commissions AT/CH | Le programme Partenaires (Operating Agreement) n'a pas pu être vérifié pour AT/CH : **à lire dans PartnerNet** | non vérifié |
| Comparateurs de prix | CH : Galaxus/Digitec (Migros) leader du e-commerce suisse selon un classement 2026 ; toppreise.ch cité (2,28 M visites, Semrush 2025) ; preisvergleich.ch compare Galaxus, Digitec, Jelmoli, Ackermann, MediaMarkt. AT : Geizhals (non vérifié ici) | [S21] (résultats de recherche) |
| Tests locaux à citer | AT : **VKI** (communiqué 11/08/2026 : 51 Airfryer, 39 « gut », 12 « durchschnittlich », prix moyen 151 €) ; AK Oberösterreich (8 Airfryer, via résultat de recherche). CH : **SRF Kassensturz** (test Rasenroboter, 12 modèles, « ab 1000 Franken ») ; K-Tipp non vérifié | [S20][S21] |
| Vocabulaire | AT : « Backrohr » (= Backofen), « Erdäpfel », « Hendl » ; CH : **ss à la place de ß** (« Heissluftfritteuse »), **Rasenroboter**, « Franken/CHF », suggestions « Kassensturz » sur dampfreiniger et fensterputzroboter | [S20][S21][S9] |
| Balkonkraftwerk | DE : 800 VA onduleur / 2 000 Wp modules depuis 2024 (sources de marchands/guides, cohérentes) ; AT : sources **contradictoires** (guide fabricant : 800 W + déclaration au gestionnaire de réseau ; Land Tirol : « zone grise ») ; CH : une seule source marchande (600 W, notification) et un autre guide dit qu'un appareil 800 W DE/AT ne se branche pas simplement en CH. **Aucune source officielle lue** | [S21] |
| Rauchmelder | DE : obligation dans tous les Länder (Landesbauordnungen) ; AT : obligation via OIB-RL (état partiel en 2016) ; **CH : pas d'obligation** (SRF) | [S21] |
| Audience réelle des sites DACH | vergleich.org : AT 5,41 % + CH 3,08 % ≈ 8,5 % d'une audience servie par **une seule version** sans hreflang | [S5][S1] |

Implications pour /de (version unique) :
1. **Pas de /at ni /ch** : doublons minces, audience marginale (≈ 8,5 % chez le leader). Garder /de, hreflang="de" + x-default, **ne pas** transcrire en « ss » (les URL sont déjà translittérées).
2. Ajouter des **encadrés « Hinweis für Österreich und die Schweiz »** là où le droit/prix/livraison diffère : Balkonkraftwerk, Rauchmelder, Wallbox, Mähroboter (Rasenroboter), mention de la livraison Amazon.de vers la Suisse et des prix en euros.
3. Citer des **sources AT/CH** quand elles existent (VKI, Kassensturz) en plus de Stiftung Warentest : signal local et angle « européen ».
4. Placer une fois les variantes « Heissluftfritteuse » / « Rasenroboter » / « Backrohr » dans le texte ou les FAQ (hypothèse à tester, Google tolérant sur ß/ss : connaissance générale non vérifiée).
5. Vérifier dans Search Console les clics AT/CH avant d'investir (nous n'avons que « Allemagne 53 clics/28 j »).

---

## 5. Comment Homenura peut passer devant — 10 actions

### 5.0 Classement impact / effort

| # | Action | Impact | Effort | Délai |
|---|---|---|---|---|
| 1 | Corriger les 8 kw mal choisis + gabarit de titres sans « Test » | Fort | Faible | 1–2 j |
| 2 | Module « Unabhängige Tests » + règle Testsieger (citations datées et liées) | Fort | Faible | 2–3 j |
| 3 | Gabarit « Das Wichtigste in Kürze » + Kaufberatung + FAQ (PAA) + Quellenverzeichnis | Fort | Moyen | 1–2 sem. |
| 4 | Hub « Balkonkraftwerk mit Speicher / 800 vs 2000 Watt » | Fort | Moyen | 1 sem. |
| 5 | Longue traîne « ohne / mit / bis X Euro » (20–25 pages) | Fort | Moyen-élevé | 3–6 sem. |
| 6 | Cluster « Probleme / Fehler » (12 pages) | Moyen-fort | Moyen | 3–4 sem. |
| 7 | Tableau agrégé « Testergebnisse im Überblick » (Stiftung Warentest, CHIP, ÖKO-TEST, VKI, Kassensturz) | Fort | Moyen | 2–3 sem. |
| 8 | Pack E-E-A-T (Methodik, auteur, journal de mises à jour) | Moyen | Faible | 3–5 j |
| 9 | Cadence + « Test-Radar » (réagir à chaque nouveau test tiers) | Moyen | Moyen | continu |
| 10 | Angle européen « Dasselbe Modell, 6 Märkte » + encadrés AT/CH + préparation IA | Moyen (différenciant) | Élevé | 4–8 sem. |

### Action 1 — Corriger les kw et les titres (voir tableau §1.0)
- Gabarit <title> (≤ 60 caractères) : **« {Mot-clé tête} Vergleich 2026: {n} Modelle ab {prix} € »** — jamais « Test ».
  - ex. « Heißluftfritteuse Vergleich 2026: 12 Modelle ab [prix réel] € ».
  - H1 : « Heißluftfritteuse Vergleich 2026: Die besten Airfryer im Überblick ».
- Appliquer les nouveaux termes : « Kaffeevollautomat », « Akku-Staubsauger », « Überwachungskamera außen/innen », « Heizlüfter », « Rauchmelder (vernetzt, Funk, mit App) », « Heizkörperthermostat smart », « mobile Klimaanlage ». Slugs : ne changer qu'avec redirection 301.
- Le mot « Test » reste présent **dans la citation** des tests tiers et dans les H3 de type « Das sagt die Stiftung Warentest ».

### Action 2 — Module « Unabhängige Tests » + règle Testsieger
- Bloc type par catégorie : « Das sagen unabhängige Tests » : institut, **numéro/date du heft**, note exacte, lien (ex. « Stiftung Warentest 09/2026 : Philips 5000 Series Steam — gut (x,x) — test.de [lien] »). Pas de contenu payant recopié, uniquement note + lien.
- Libellés maison : « Unsere Empfehlung », « Preis-Leistungs-Tipp », « Für kleine Haushalte » avec **critères affichés** (fiche technique, prix, avis, tests tiers). Éviter « Vergleichssieger » et « Testsieger » comme label maison (§3.9).
- Relire chaque citation (la contradiction airfryer §2.1 montre que des portails se trompent).

### Action 3 — Gabarit de page long « à la vergleich.org », sans le mot Test
Ordre proposé : H1 → date « Zuletzt aktualisiert » → « Das Wichtigste in Kürze » (5 puces) → 3 recommandations → tableau comparatif HTML → « Das sagen unabhängige Tests » → Kaufberatung (H3 numérotés) → **FAQ visible (4–8 questions)** → Quellenverzeichnis (4–6 sources : test.de, Verbraucherzentrale, TÜV/BZfE, VKI, Kassensturz) → maillage.
FAQ prêtes (PAA/Suggest) :
- Airfryer : « Welche Heißluftfritteuse empfiehlt die Stiftung Warentest ? », « Doppelkammer oder Einzelkorb ? », « Heißluftfritteuse ohne PFAS/Teflon : gibt es das ? », « Airfryer oder Backofen : was spart Strom ? », « Wie viel Liter für 2 / 4 Personen ? ».
- Saugroboter : « Saugroboter mit oder ohne Wischfunktion ? », « Roborock oder Dreame ? », « Lohnt sich die Absaugstation ? », « Funktioniert ein Saugroboter ohne WLAN/App ? ».
- Kaffeevollautomat : « Welcher Vollautomat bis 300 € ? », « Mit Milchschlauch oder Milchbehälter ? », « Vollautomat oder Siebträger ? », « Was tun, wenn die Brühgruppe klemmt ? ».
- Balkonkraftwerk : « Lohnt sich ein Speicher ? », « Wie viel Watt sind 2026 erlaubt (und wo muss ich es anmelden) ? » (réponse à valider sur sources officielles), « Balkonkraftwerk mit Speicher anmelden ? ».
- Rauchmelder : « Wo besteht Rauchmelderpflicht ? » (DE/AT/CH), « Warum piept der Rauchmelder ? », « Funk- oder Einzelmelder ? ».
- Mähroboter : « Mähroboter ohne Begrenzungsdraht : wie genau arbeitet GPS/RTK ? », « Für wie viel qm ? ».
- Schema : FAQPage n'est pas utilisé par vergleich.org ; à notre connaissance Google a restreint les rich results FAQ (annonce 2023) : l'intérêt est le contenu visible et les extraits IA, pas le rich result (connaissance générale, non vérifié ici).

### Action 4 — Hub « Balkonkraftwerk mit Speicher » (+ 800 / 2000 Watt)
- Pourquoi : tête de catégorie la plus volumineuse (estimation A), « mit Speicher » en 2e suggestion, vergleich.org n'a **qu'une** page balkonkraftwerk, SERP = boutiques + heise + forum [S2][S8].
- Pages : « Balkonkraftwerk mit Speicher Vergleich 2026 », « Balkonkraftwerk 800 Watt oder 2000 Watt : was ist erlaubt ? », « Balkonkraftwerk anmelden : Schritt für Schritt » (informatif, à écrire **après** vérification des textes officiels, sources contradictoires §4).
- Citer : home&smart (Speicher-Test 2026), test.de (Balkonkraftwerke), heise bestenliste ; encadré AT/CH.

### Action 5 — Longue traîne où vergleich.org n'a pas de page (liste vérifiée sur son sitemap, §3.6)
Priorité haute : balkonkraftwerk-mit-speicher · video-tuerklingel-ohne-abo · ueberwachungskamera-aussen-ohne-abo · heizkoerperthermostat-smart-ohne-hub · mobile-klimaanlage-ohne-abluftschlauch · saugroboter-bis-300-euro / bis-500-euro · heissluftfritteuse-ohne-pfas · heissluftfritteuse-doppelkammer (vergleich.org : seulement « 2-faecher ») · smartes-tuerschloss-nachruesten · steckdose-mit-strommessung.
Priorité moyenne : kaffeevollautomat-bis-200-euro / ohne-milchsystem · maehroboter-bis-500-qm · poolroboter-bis-200-euro · akku-staubsauger-bis-150-euro · luftentfeuchter-ohne-strom (produit distinct) · wallbox-mit-pv-ueberschussladen.
Règle : une page = un modificateur observé dans Suggest + un tableau de 5–8 produits + FAQ + lien vers le hub parent. À valider : volumes (Keyword Planner) avant de produire.

### Action 6 — Cluster « Probleme / Fehler » (très peu couvert chez vergleich.org)
Titres types (formulés sans « Test ») :
- « Saugroboter Probleme: 12 häufige Fehler und was hilft » (suggestions : WLAN, Teppich, Dreame, Xiaomi, Shark, Yeedi)
- « Kaffeevollautomat Probleme: Brühgruppe klemmt – Ursachen und Lösungen » (Tchibo, DeLonghi, Siemens, Miele, Smeg)
- « Rauchmelder piept: Das sind die Ursachen » / « Rauchmelder blinkt rot: Was heißt das ? »
- « Balkonkraftwerk Probleme: FI-Schalter, Stromzähler, Netzbetreiber, App »
- « Mobile Klimaanlage Probleme », « Luftentfeuchter läuft nicht / Comfee/Trotec Probleme », « Mähroboter Probleme: GPS/Signal, Begrenzung ».
Chaque page se termine par « Wenn ein Ersatz nötig ist » vers le hub concerné. Éviter les pages « Erfahrungen » sans vrais retours d'utilisateurs.

### Action 7 — Tableau agrégé « Testergebnisse im Überblick »
- Pour chaque produit recommandé : colonnes Stiftung Warentest (note, heft, lien), CHIP, Computerbild, ÖKO-TEST, VKI (AT), Kassensturz (CH). Uniquement résultats publics + lien.
- Raison : test.de (n°5), Computerbild (n°15), CHIP (n°16) et testberichte.de (n°29, un agrégateur) sont cités par ChatGPT DE [S10] ; un site qui renvoie proprement vers ces sources a un angle « méta-comparatif » honnête, compatible avec la règle « aucun test propre » (hypothèse : améliore les chances d'être récupéré par les moteurs IA, non prouvé).
- Contrôle juridique : citer date + rang exact, pas de « Testsieger » sans qu'il le soit (§3.9).

### Action 8 — Pack E-E-A-T
- Page « Wie wir arbeiten » : affirmer clairement « Wir testen keine Produkte selbst » ; décrire les sources (fiches, tests tiers, avis), les critères, l'affiliation (mention Amazon-Partner obligatoire selon contrat : à vérifier), la politique de mise à jour.
- Auteur nommé (ou « Redaktion Homenura » + relecteur) avec courte bio ; Impressum complet ; journal « Die neuesten Updates » par page (modèle vergleich.org) ; dateModified visible et dans le schema Article ; Organization/Person en JSON-LD.
- Les promesses de vergleich.org (TÜV, labo, 120 jours) ne sont pas reproductibles : miser sur la **transparence** (méthode, sources, dates).

### Action 9 — Cadence et « Test-Radar »
- Rafraîchir mensuellement les 20 pages prioritaires ; mettre à jour dans les 48 h chaque nouveau test tiers d'une catégorie suivie (ex. Stiftung Warentest Heißluftfritteusen 09/2026 ; Saugroboter mis à jour fin juin 2026 ; Mähroboter 2026 ; ÖKO-TEST ; VKI 08/2026).
- Références : chez vergleich.org 18,6 % des URLs sont modifiées en 30 jours [S2] ; les SERP voient les dates (CHIP 30/09/2026, idealo 04/06/2026, MediaMarkt 22/10/2026, IMTEST « vor 4 Tagen ») [S8].

### Action 10 — Angle européen + DACH + IA
- **Angle unique** (aucun concurrent DE observé ne le fait) : « Dasselbe Modell, 6 Märkte » : disponibilité et prix du même modèle dans DE/FR/IT/ES/NL/PL, différences de références (ex. Ninja AF300EU), prix CHF/€ pour la Suisse via Galaxus (lien non affilié). Vérifier au préalable les règles d'affichage des prix du programme Amazon.
- Encadrés AT/CH (§4) sur les catégories réglementées ; citer VKI/Kassensturz.
- Préparation IA (hypothèses à valider) : laisser les bots IA autoriser dans robots.txt (comme vergleich.org) ; tableaux en HTML (pas en image) ; bloc « Das Wichtigste in Kürze » en tête ; dates visibles ; soumettre le sitemap dans Bing Webmaster/IndexNow (ChatGPT s'appuie en partie sur Bing : connaissance générale, non vérifiée ici) ; vidéos YouTube explicatives sans « test » (YouTube = 1re source des AIO DE [S11]) ; page « Homenura als bevorzugte Quelle bei Google » (copie de la manœuvre de vergleich.org [S4]).

---

## 6. Ce que je n'ai pas pu vérifier / à faire ensuite
1. Volumes DE/AT/CH réels : exporter Keyword Planner ou Sistrix pour les ~40 requêtes des §1 et §5 (la colonne « estimation » est une aide au classement, pas une mesure).
2. Lien Team Internet ↔ vergleich.org (seul CentralNic est confirmé par la source lue [S6]).
3. Position de vergleich.org dans Google.de sur une période longue (mes snapshots = 1 jour) : Sistrix/Search Console de concurrents.
4. Commissions Amazon pour les visiteurs AT/CH ; Geizhals (AT) ; K-Tipp (CH).
5. Droit du Balkonkraftwerk en AT/CH (sources contradictoires, aucune officielle).
6. Contradiction Stiftung Warentest airfryer 09/2026 (§2.1).
7. Validation juridique (avocat UWG) du wording final « Empfehlung » / citations « Testsieger » (§3.9).
8. Fréquence réelle des AIO sur nos requêtes cibles : Sistrix AIO (ou Semrush) ; 0/8 observé ici, instantané seulement.

---

## Sources

- [S1] Pages vergleich.org lues en direct le 30/10/2026 (navigateur) : /heissluftfritteuse/, /saug-wisch-roboter/, /kaffeevollautomat/, /akku-staubsauger/, /balkonkraftwerk/, /heizkoerperthermostat/, /rauchmelder/, /luftreiniger/, /luftentfeuchter/, /heizluefter/, /maehroboter/, /poolroboter/, /ueberwachungskamera/, /wallbox/, /fensterputzroboter/, /dampfreiniger/ ; pied de page (sites pays) ; /team/.
- [S2] https://www.vergleich.org/sitemap.xml (18 797 URLs, analysé le 30/10/2026).
- [S3] https://www.vergleich.org/robots.txt (30/10/2026).
- [S4] https://www.vergleich.org/wie-wir-arbeiten/ · /ueber-uns/ · /team/ · /geschichte-der-vgl/ · /als-bevorzugte-quelle-bei-google/ (30/10/2026).
- [S5] Similarweb, aperçu gratuit vergleich.org (sept. 2026, estimations) : https://www.similarweb.com/website/vergleich.org/
- [S6] Startbase, 08/03/2022 : https://www.startbase.com/news/vergleich-org-aufgekauft/
- [S7] OMR, 24/03/2016 : https://omr.com/de/daily/vergleich-org
- [S8] Google.de (hl=de, gl=de, cookies refusés), 30/10/2026 : requêtes listées au §2.1.
- [S9] Google Suggest DE et Bing Suggest DE (osjson, mkt=de-DE), 30/10/2026.
- [S10] Ahrefs, « Die 50 meistzitierten Domains in ChatGPT in Deutschland (September 2026) » : https://ahrefs.com/de/blog/chatgpt-deutschland-meistzitierte-domains/
- [S11] Synthèse DACH des sources IA : https://www.charismarcom.de/post/welche-externen-quellen-zitieren-ki-systeme-in-dach-am-haeufigsten/
- [S12] Revier59 / ki-sichtbarkeit.info via Mittelstand Café, 25/09/2026 : https://www.mittelstandcafe.de/chatgpt-geht-bei-kaufempfehlungen-eigene-wege-studie-2026-2275366.html
- [S13] DataPulse Research via Marketing-Börse, 02/06/2026 : https://www.marketing-boerse.de/web/details/2623-chatgpt-quellen-sind-oft-werbung/205155
- [S14] Sistrix, AI Overviews in Deutschland (25/02/2026, maj 13/10/2026) : https://www.sistrix.de/news/ai-overviews-in-deutschland/
- [S15] Smart Lemon, étude AIO Allemagne : https://www.smartlemon.de/blog/studie-auswirkungen-ai-overviews-deutschland/
- [S16] it-recht-kanzlei, OLG Köln 30.10.2020 (6 U 136/19), 11/01/2021 : https://www.it-recht-kanzlei.de/olg-koeln-test-algorithmus-vergleich.html · commentaire : https://www.it-recht-kanzlei.de/Kommentar/16386/Vergleich.org.php
- [S17] vzbv, LG Berlin II 15 O 277/25 (26/05/2026) : https://www.vzbv.de/urteile/irrefuehrende-testsieger-werbung
- [S18] LG Amberg 41 HK O 1036/20 (26/04/2021), résumé de résultat de recherche : https://www.gesetze-bayern.de/Content/Rtf/Y-300-Z-GRURRS-B-2021-N-20111?all=False
- [S19] it-recht-kanzlei, Werbung mit Testergebnissen (UWG) : https://www.it-recht-kanzlei.de/testergebnisse-uwg.html
- [S20] VKI, communiqué du 11/08/2026 « 51 Airfryer im Test » : https://vki.at/system/files/2026-08/2026-08-11_PA_Airfryer.pdf
- [S21] SRF Kassensturz Rasenroboter : https://www.srf.ch/sendungen/kassensturz-espresso/tests/haus-garten-tiere/haus-garten-tiere-rasenroboter-im-test-gute-geraete-gibt-es-ab-1000-franken · SRF Rauchmelderpflicht : https://www.srf.ch/news/schweiz/toedliche-hausbraende-wieso-es-in-der-schweiz-keine-rauchmelderpflicht-gibt · Amazon CH : https://www.preispirat.ch/info-bestellungen-von-amazon-mit-lieferung-in-die-schweiz/ · Balkonkraftwerk CH : https://www.homeandsmart.de/balkonkraftwerk-schweiz · Balkonkraftwerk AT : https://www.tirol.gv.at/fileadmin/themen/umwelt/wasser_wasserrecht/Downloads/Balkonanlagen_Informationsblatt.pdf · Galaxus/Toppreise : https://ecommercegermany.com/blog/largest-online-shops-switzerland-2026/ · https://www.preisvergleich.ch/tag/Heissluft-Fritteuse.html
- [S22] home&smart (Heißluftfritteusen-Test, Balkonkraftwerk-Speicher-Test), testsieger.de (ETM) : https://www.homeandsmart.de/heissluftfritteuse-test-vergleich · https://www.homeandsmart.de/balkonkraftwerk-mit-speicher · https://www.testsieger.de/heissluftfritteusen/ · résumé de recherche sur test.de (Heißluftfritteusen 09/2026).
