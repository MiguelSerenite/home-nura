import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'qualite-air-interieur-capteurs',
  category: 'guides',
  pillar: 'confort-air',
  relatedSlugs: ['guide-purificateur-air-2026', 'comparatif-purificateur-air-allergie', 'station-meteo-connectee-comparatif'],
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  readingTime: 17,
  images: [
    {
      src: 'https://m.media-amazon.com/images/I/71P9dKQAc5L._AC_SL1500_.jpg',
      alt: {
        fr: 'Moniteur qualite de l\'air interieur Airthings Wave Plus pose sur une etagere avec application smartphone',
        en: 'Airthings Wave Plus indoor air quality monitor on a shelf with smartphone app',
        de: 'Airthings Wave Plus Innenraumluftqualitats-Monitor auf einem Regal mit Smartphone-App',
        es: 'Monitor de calidad del aire interior Airthings Wave Plus en una estanteria con aplicacion',
        it: 'Monitor qualita aria interna Airthings Wave Plus su uno scaffale con app smartphone',
        nl: 'Airthings Wave Plus binnenluchtkwaliteitsmonitor op een plank met smartphone-app',
      },
    },
  ],
  title: {
    fr: 'Capteur Qualité de l\'Air Intérieur 2026 : Pourquoi et Comment Mesurer Chez Soi',
    en: 'Indoor Air Quality Monitor 2026: Why and How to Measure at Home',
    de: 'Innenraumluftqualitats-Monitor 2026: Warum und Wie zu Hause Messen',
    es: 'Sensor de Calidad del Aire Interior 2026: Por Qué y Cómo Medir en Casa',
    it: 'Sensore Qualita Aria Interna 2026: Perche e Come Misurare a Casa',
    nl: 'Binnenluchtkwaliteitsmonitor 2026: Waarom en Hoe Thuis Meten',
  },
  excerpt: {
    fr: 'Guide complet moniteurs qualite de l\'air interieur 2026. Pourquoi l\'IAQ est cruciale (COV, PM2.5, CO2, radon). Comparatif Airthings Wave Plus, Netatmo Smart Indoor, Govee H5106, Awair Element, La Crosse WS-9160. Enfants et seniors plus vulnerables. Donnees OQAI France.',
    en: 'Complete guide to indoor air quality monitors 2026. Why IAQ matters (VOCs, PM2.5, CO2, radon). Comparison of Airthings Wave Plus, Netatmo Smart Indoor, Govee H5106, Awair Element, La Crosse WS-9160. Children and elderly more vulnerable. OQAI France data.',
    de: 'Kompletter Ratgeber fur Innenraumluftqualitats-Monitore 2026. Warum IAQ wichtig ist (VOC, PM2.5, CO2, Radon). Vergleich von Airthings Wave Plus, Netatmo Smart Indoor, Govee H5106, Awair Element, La Crosse WS-9160. Kinder und Senioren mehr gefahrdet.',
    es: 'Guia completa de monitores de calidad del aire interior 2026. Por que la CAI es crucial (COV, PM2.5, CO2, radon). Comparativa Airthings Wave Plus, Netatmo Smart Indoor, Govee H5106, Awair Element, La Crosse WS-9160. Niños y mayores mas vulnerables. Datos OQAI Francia.',
    it: 'Guida completa ai monitor della qualita dell\'aria interna 2026. Perche l\'IAQ e cruciale (COV, PM2.5, CO2, radon). Confronto Airthings Wave Plus, Netatmo Smart Indoor, Govee H5106, Awair Element, La Crosse WS-9160. Bambini e anziani piu vulnerabili. Dati OQAI Francia.',
    nl: 'Complete gids voor binnenluchtkwaliteitsmonitoren 2026. Waarom IAQ cruciaal is (VOS, PM2.5, CO2, radon). Vergelijking Airthings Wave Plus, Netatmo Smart Indoor, Govee H5106, Awair Element, La Crosse WS-9160. Kinderen en ouderen kwetsbaarder. OQAI France data.',
  },
  content: {
    fr: `<h2>L'air intérieur : plus pollué que l'air extérieur ?</h2>
<p>C'est l'un des paradoxes les plus surprenants de la vie moderne : l'air que nous respirons dans nos maisons est souvent <strong>5 à 10 fois plus pollué que l'air extérieur</strong>, selon l'Agence de Protection de l'Environnement américaine (EPA). En France, l'Observatoire de la Qualité de l'Air Intérieur (OQAI) a mesure que 50% des logements français présentent des concentrations de composés organiques volatils (COV) supérieures aux recommandations de l'OMS. Pourtant, nous passons en moyenne <strong>90% de notre temps en intérieur</strong>.</p>
<p>Les sources de pollution intérieure sont nombreuses et souvent insoupçonnées : peintures et vernis (COV), mobilier et parquet (formaldehyde), produits ménagers (chlore, terpènes), combustion (bougies, encens, cuisinière à gaz), mais aussi les occupants eux-mêmes (CO2 expiré, humidité). Sans mesure, ces polluants s'accumulent silencieusement. Ce guide vous explique comment choisir et utiliser un moniteur de qualité de l'air intérieur pour protéger votre famille. Consultez aussi notre <a href="/fr/blog/guide-purificateur-air-2026">guide purificateur d'air</a> et notre <a href="/fr/blog/station-meteo-connectee-comparatif">comparatif stations météo connectées</a>.</p>

<h2>Les principaux polluants à surveiller</h2>
<h3>CO2 — Le premier indicateur à surveiller</h3>
<p>Le CO2 n'est pas toxique aux concentrations domestiques, mais il est le <strong>meilleur indicateur du renouvellement d'air</strong>. Un taux élevé de CO2 signale que l'air a été "respiré" plusieurs fois sans être renouvelé — signal que d'autres polluants s'accumulent aussi.</p>
<table>
<thead>
<tr><th>Concentration CO2</th><th>Qualite air</th><th>Effets</th></tr>
</thead>
<tbody>
<tr><td>&lt;800 ppm</td><td>Excellente</td><td>Aucun effet, air frais</td></tr>
<tr><td>800-1000 ppm</td><td>Bonne</td><td>Légère baisse de concentration</td></tr>
<tr><td>1000-1500 ppm</td><td>Mediocre</td><td>Fatigue, maux de tête, somnolence</td></tr>
<tr><td>1500-2500 ppm</td><td>Mauvaise</td><td>Baisse concentration -15%, fatigue notable</td></tr>
<tr><td>&gt;2500 ppm</td><td>Très mauvaise</td><td>Maux de tête sévères, nausées possible</td></tr>
</tbody>
</table>
<p>Dans une chambre de 15m² avec 2 personnes dormant fenêtres fermées, le CO2 peut atteindre 2000-2500 ppm en une nuit. Dans une salle de réunion avec 8 personnes, 1500-2000 ppm après 30 minutes sans ventilation.</p>

<h3>PM2.5 et PM10 — Les particules fines</h3>
<p>Les particules fines PM2.5 (diamètre < 2,5 microns) sont les plus dangereuses car elles pénètrent profondément dans les poumons. L'OMS recommande une concentration annuelle maximale de <strong>5 μg/m³</strong> (révisé à la baisse en 2021). En France, la moyenne annuelle extérieure dépasse régulièrement 15-20 μg/m³ dans les zones urbaines. À l'intérieur, les sources incluent : cuisinière à gaz (pic de 100-200 μg/m³ pendant la cuisson), bougies et encens (100-500 μg/m³), aspirateur sans filtre HEPA (remise en suspension), tabac.</p>

<h3>COV — Les composés organiques volatils</h3>
<p>Les COV totaux (COVT) regroupent des centaines de composés chimiques émis par les matériaux de construction, meubles, peintures et produits ménagers. Le formaldehyde est le plus préoccupant : classé cancérogène de groupe 1 par le CIRC. Sources : aggloméré (panneaux de particules), parquet stratifié, mousses isolantes, colles, certains produits de nettoyage. En France, l'étiquetage obligatoire des produits de construction note les émissions de COV de A+ à C.</p>

<h3>Radon — Le danger invisible</h3>
<p>Le radon est un gaz radioactif naturel issu de la désintégration de l'uranium dans le sol. C'est la <strong>deuxième cause de cancer du poumon</strong> après le tabac en France, responsable de 3000 décès par an selon Santé Publique France. Les zones à risque sont concentrées dans le Massif Central, la Bretagne, les Vosges et les Alpes. Mesure recommandée si vous habitez dans ces zones. L'Airthings Wave Plus est l'un des rares moniteurs grand public à mesurer le radon.</p>

<h3>Humidité relative</h3>
<p>La zone de confort et de santé optimale se situe entre <strong>40 et 60%</strong> d'humidité relative. En dessous de 30% : assèchement des muqueuses, augmentation des infections respiratoires, électricité statique. Au-dessus de 70% : prolifération des acariens et moisissures.</p>

<h2>Comparatif des meilleurs moniteurs 2026</h2>
<table>
<thead>
<tr><th>Modele</th><th>CO2</th><th>PM2.5</th><th>COV</th><th>Radon</th><th>Humidite</th><th>Connectivite</th><th>Prix</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings Wave Plus</strong></td><td>Oui</td><td>Non</td><td>Oui</td><td>Oui</td><td>Oui</td><td>Bluetooth</td><td>229 EUR</td></tr>
<tr><td><strong>Netatmo Smart Indoor</strong></td><td>Oui</td><td>Non</td><td>Oui (partiel)</td><td>Non</td><td>Oui</td><td>WiFi</td><td>99 EUR</td></tr>
<tr><td><strong>Govee Life H5106</strong></td><td>Oui</td><td>Oui</td><td>Oui</td><td>Non</td><td>Oui</td><td>WiFi</td><td>79 EUR</td></tr>
<tr><td><strong>Awair Element</strong></td><td>Oui</td><td>Oui</td><td>Oui</td><td>Non</td><td>Oui</td><td>WiFi</td><td>189 EUR</td></tr>
<tr><td><strong>La Crosse WS-9160</strong></td><td>Oui</td><td>Non</td><td>Non</td><td>Non</td><td>Oui</td><td>WiFi</td><td>49 EUR</td></tr>
</tbody>
</table>

<h3>Airthings Wave Plus : le choix premium avec radon</h3>
<p>L'<strong>Airthings Wave Plus</strong> est le moniteur le plus complet du marché grand public grâce à sa mesure unique du radon. Il mesure : radon (Bq/m³), CO2 (ppm), COV (ppb), humidité, température et pression atmosphérique. Interface Bluetooth (agitation de la main pour affichage LED indicatif), application iOS/Android détaillée. Compatible SmartThings, Amazon Alexa, Google Assistant et API ouverte pour Home Assistant. Batterie 2 ans. Idéal pour les zones à risque radon. <a href="https://www.amazon.fr/dp/B07JB8QWH7?tag=homenuraen05-21" rel="nofollow sponsored">Airthings Wave Plus sur Amazon</a></p>

<h3>Netatmo Smart Indoor Air Quality Monitor : l'intégration Apple</h3>
<p>Le <strong>Netatmo Smart Indoor</strong> se distingue par son design élégant (aluminium anodisé, primé au CES) et son intégration HomeKit native — le seul moniteur de qualité d'air avec une intégration officielle Apple HomeKit parmi les modèles grand public. Il mesure CO2, COV (qualité air globale), humidité, température, pression et niveau sonore. Application Health Mate claire et bien conçue. Pas de mesure PM2.5 ni radon. Compatible Google Home et Alexa via application. <a href="https://www.amazon.fr/dp/B07S6DFJCK?tag=homenuraen05-21" rel="nofollow sponsored">Netatmo Smart Indoor sur Amazon</a></p>

<h3>Govee Life H5106 : le meilleur rapport qualite-prix</h3>
<p>Le <strong>Govee Life H5106</strong> est la révélation de ce comparatif. A 79 EUR, il mesure PM2.5, CO2, COV, humidité et température — des paramètres que seuls des appareils à 150-200 EUR mesuraient il y a 2 ans. Connexion WiFi 2.4GHz directe, application Govee Home complète, écran LCD couleur intégré. Alertes personnalisables par seuils. Compatibilité Alexa. Pas d'intégration officielle Home Assistant mais l'intégration Govee existe dans HACS. <a href="https://www.amazon.fr/dp/B0BXQVFMYS?tag=homenuraen05-21" rel="nofollow sponsored">Govee Life H5106 sur Amazon</a></p>

<h3>Awair Element : le professionnel du bureau</h3>
<p>L'<strong>Awair Element</strong> est conçu pour les espaces de travail. Son score de qualité d'air global (0-100) synthétise CO2, PM2.5, COV, humidité et température en un indicateur actionnable. API ouverte excellente pour intégration dans des tableaux de bord professionnels (Grafana, Home Assistant). Pas d'intégration vocale native mais compatible via IFTTT. Prix premium justifié par la précision des capteurs et la qualité de l'API. <a href="https://www.amazon.fr/dp/B082ZF4H37?tag=homenuraen05-21" rel="nofollow sponsored">Awair Element sur Amazon</a></p>

<h3>La Crosse WS-9160 : l'entrée de gamme fiable</h3>
<p>Pour ceux qui veulent juste surveiller CO2 et humidité, la <strong>La Crosse WS-9160</strong> est une option à 49 EUR simple et efficace. Ecran LCD clair, historique 7 jours, alertes sonores sur les seuils. Pas de PM2.5 ni COV. WiFi pour envoi des données vers l'application La Crosse View. <a href="https://www.amazon.fr/dp/B08FCTKQHN?tag=homenuraen05-21" rel="nofollow sponsored">La Crosse WS-9160 sur Amazon</a></p>

<h2>Populations plus vulnérables</h2>
<h3>Enfants</h3>
<p>Les enfants respirent plus d'air par rapport à leur poids corporel que les adultes (2-3x plus). Leur système respiratoire et nerveux est encore en développement — les effets des polluants sont donc proportionnellement plus importants. L'OQAI recommande une vigilance particulière dans les chambres d'enfants et les crèches. Le formaldehyde est particulièrement préoccupant pour les nouveau-nés dans les chambres avec mobilier neuf.</p>

<h3>Personnes âgées</h3>
<p>Les seniors passent encore plus de temps à l'intérieur (souvent 95% du temps) et ont une capacité respiratoire diminuée. Un taux de CO2 élevé affecte plus rapidement la cognition des personnes âgées. La surveillance de la qualité de l'air dans les EHPAD est désormais recommandée par la HAS (Haute Autorité de Santé).</p>

<h2>Actions correctives selon les polluants détectés</h2>
<table>
<thead>
<tr><th>Polluant elevé</th><th>Action immediate</th><th>Action long terme</th></tr>
</thead>
<tbody>
<tr><td>CO2 &gt;1200 ppm</td><td>Ouvrir les fenêtres 5-10 min</td><td>VMC double flux, aerateur hygrosensible</td></tr>
<tr><td>PM2.5 &gt;25 μg/m³</td><td>Identifier source (cuisinière, bougies), ventiler</td><td>Purificateur avec filtre HEPA</td></tr>
<tr><td>COV élevés</td><td>Ventilation maximale, identifier source</td><td>Peintures et meubles faible emission (label A+)</td></tr>
<tr><td>Radon &gt;300 Bq/m³</td><td>Alerter service local santé</td><td>Étanchéification du sol, VMC sous-dalle</td></tr>
<tr><td>Humidite &gt;70%</td><td>Deshumidificateur, ventilation</td><td>VMC hygrosensible, isolation thermique</td></tr>
</tbody>
</table>

<h2>Integration avec purificateurs et VMC</h2>
<p>L'intérêt majeur d'un moniteur connecté est de l'intégrer avec vos autres équipements. Dans Home Assistant, vous pouvez créer des automatisations comme : activer le purificateur Dyson en mode turbo quand PM2.5 > 25 μg/m³, allumer la VMC quand CO2 > 1000 ppm, ouvrir les volets automatiquement quand qualité air extérieure est meilleure qu'intérieure. Consultez notre <a href="/fr/blog/comparatif-purificateur-air-allergie">guide purificateurs pour allergies</a> pour choisir le bon purificateur à coupler.</p>

<h2>Notre recommandation par profil</h2>
<ul>
<li><strong>Zone radon (Bretagne, Massif Central, Vosges) :</strong> Airthings Wave Plus — seul moniteur grand public mesurant le radon avec fiabilité</li>
<li><strong>Famille avec enfants asthmatiques :</strong> Govee H5106 ou Awair Element — mesure PM2.5 + COV + CO2</li>
<li><strong>Ecosystème Apple HomeKit :</strong> Netatmo Smart Indoor — seul avec intégration HomeKit officielle</li>
<li><strong>Budget serré :</strong> La Crosse WS-9160 — CO2 + humidité pour 49 EUR</li>
<li><strong>Bureaux et espaces professionnels :</strong> Awair Element — API ouverte, score synthétique actionnable</li>
</ul>`,

    en: `<h2>Indoor air: more polluted than outdoor air?</h2>
<p>Indoor air is often <strong>5 to 10 times more polluted than outdoor air</strong>, according to the US Environmental Protection Agency. In France, the OQAI found that 50% of homes have VOC concentrations exceeding WHO recommendations. Yet we spend an average of <strong>90% of our time indoors</strong>. This guide explains how to choose and use an indoor air quality monitor to protect your family. See also our <a href="/en/blog/guide-purificateur-air-2026">air purifier guide</a> and our <a href="/en/blog/station-meteo-connectee-comparatif">connected weather station comparison</a>.</p>

<h2>Key pollutants to monitor</h2>
<h3>CO2 — The first indicator to watch</h3>
<p>CO2 is the best indicator of air renewal. Above 1,000 ppm: fatigue and concentration drops. Above 1,500 ppm: significant cognitive impairment. In a 15m² bedroom with 2 people sleeping with windows closed, CO2 can reach 2,000-2,500 ppm overnight.</p>

<h3>PM2.5 — Fine particles</h3>
<p>PM2.5 particles penetrate deep into the lungs. WHO recommends a maximum annual average of <strong>5 μg/m³</strong>. Indoor sources: gas hob (peak 100-200 μg/m³ during cooking), candles and incense (100-500 μg/m³), tobacco.</p>

<h3>VOCs — Volatile organic compounds</h3>
<p>Formaldehyde is the most concerning VOC: classified as Group 1 carcinogen by IARC. Sources: particleboard furniture, laminate flooring, insulating foams, adhesives. In the UK, new furniture and flooring labelling now indicates VOC emission levels following recent <strong>Which?</strong> campaigns.</p>

<h3>Radon — The invisible danger</h3>
<p>Radon is the <strong>second leading cause of lung cancer</strong> after smoking, responsible for 1,100 deaths/year in the UK (3,000 in France). High-risk areas include Cornwall, Devon, Northamptonshire and parts of Scotland in the UK; Brittany, Massif Central and Vosges in France. The Airthings Wave Plus is one of the few consumer monitors measuring radon.</p>

<h2>Best monitors comparison 2026</h2>
<table>
<thead>
<tr><th>Model</th><th>CO2</th><th>PM2.5</th><th>VOC</th><th>Radon</th><th>Humidity</th><th>Connectivity</th><th>Price</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings Wave Plus</strong></td><td>Yes</td><td>No</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Bluetooth</td><td>£205</td></tr>
<tr><td><strong>Netatmo Smart Indoor</strong></td><td>Yes</td><td>No</td><td>Yes (partial)</td><td>No</td><td>Yes</td><td>WiFi</td><td>£89</td></tr>
<tr><td><strong>Govee Life H5106</strong></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td><td>Yes</td><td>WiFi</td><td>£70</td></tr>
<tr><td><strong>Awair Element</strong></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td><td>Yes</td><td>WiFi</td><td>£170</td></tr>
<tr><td><strong>La Crosse WS-9160</strong></td><td>Yes</td><td>No</td><td>No</td><td>No</td><td>Yes</td><td>WiFi</td><td>£44</td></tr>
</tbody>
</table>

<h3>Airthings Wave Plus: premium choice with radon</h3>
<p>The only affordable consumer monitor measuring radon. Also measures CO2, VOCs, humidity, temperature and atmospheric pressure. Bluetooth + app, compatible SmartThings, Alexa, Google Assistant and Home Assistant open API. 2-year battery. <a href="https://www.amazon.fr/dp/B07JB8QWH7?tag=homenuraen-21" rel="nofollow sponsored">Airthings Wave Plus on Amazon</a></p>

<h3>Govee Life H5106: best value for money</h3>
<p>At £70, measures PM2.5, CO2, VOCs, humidity and temperature — parameters only £150-200 devices measured 2 years ago. Direct WiFi, Govee Home app, colour LCD screen. <a href="https://www.amazon.fr/dp/B0BXQVFMYS?tag=homenuraen-21" rel="nofollow sponsored">Govee Life H5106 on Amazon</a></p>

<h2>More vulnerable populations</h2>
<p>Children breathe 2-3x more air relative to body weight than adults. Their respiratory and nervous systems are still developing — pollutant effects are proportionally greater. Elderly people spend even more time indoors (often 95%) and have reduced respiratory capacity. The WHO and <strong>Which?</strong> both recommend monitoring indoor air quality especially in homes with children or elderly residents.</p>

<h2>Our recommendations by profile</h2>
<ul>
<li><strong>Radon risk zone:</strong> Airthings Wave Plus — only reliable consumer radon monitor</li>
<li><strong>Family with asthmatic children:</strong> Govee H5106 or Awair Element — PM2.5 + VOC + CO2</li>
<li><strong>Apple HomeKit ecosystem:</strong> Netatmo Smart Indoor — only official HomeKit integration</li>
<li><strong>Tight budget:</strong> La Crosse WS-9160 — CO2 + humidity for £44</li>
<li><strong>Offices and professional spaces:</strong> Awair Element — open API, actionable synthetic score</li>
</ul>`,

    de: `<h2>Innenraumluft: verschmutzter als Außenluft?</h2>
<p>Innenraumluft ist oft <strong>5 bis 10 Mal starker verschmutzt als Außenluft</strong>. Wir verbringen durchschnittlich <strong>90% unserer Zeit in geschlossenen Raumen</strong>. Lesen Sie auch unseren <a href="/de/blog/guide-purificateur-air-2026">Luftreiniger-Ratgeber</a> und unseren <a href="/de/blog/station-meteo-connectee-comparatif">vernetzten Wetterstation-Vergleich</a>.</p>

<h2>Wichtige zu uberwachende Schadstoffe</h2>
<ul>
<li><strong>CO2:</strong> Bester Indikator fur Lufterneuerung. Uber 1000 ppm: Konzentrationsmangel. Uber 1500 ppm: erhebliche kognitive Beeintrachtigung.</li>
<li><strong>PM2.5:</strong> Feinstaub, der tief in die Lunge eindringt. WHO-Richtwert: 5 μg/m³. Quellen: Gasherd, Kerzen, Tabak.</li>
<li><strong>VOC:</strong> Formaldehyd als kritischster Schadstoff (IARC Gruppe 1 Karzinogen). Quellen: Spanplatten, Laminat, Klebstoffe.</li>
<li><strong>Radon:</strong> Zweit-haufigste Ursache fur Lungenkrebs nach Rauchen. Risikogebiete: Bayern, Sachsen, Thüringen.</li>
</ul>

<h2>Modellvergleich 2026</h2>
<table>
<thead>
<tr><th>Modell</th><th>CO2</th><th>PM2.5</th><th>VOC</th><th>Radon</th><th>Preis</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings Wave Plus</strong></td><td>Ja</td><td>Nein</td><td>Ja</td><td>Ja</td><td>229 EUR</td></tr>
<tr><td><strong>Netatmo Smart Indoor</strong></td><td>Ja</td><td>Nein</td><td>Ja</td><td>Nein</td><td>99 EUR</td></tr>
<tr><td><strong>Govee Life H5106</strong></td><td>Ja</td><td>Ja</td><td>Ja</td><td>Nein</td><td>79 EUR</td></tr>
<tr><td><strong>Awair Element</strong></td><td>Ja</td><td>Ja</td><td>Ja</td><td>Nein</td><td>189 EUR</td></tr>
<tr><td><strong>La Crosse WS-9160</strong></td><td>Ja</td><td>Nein</td><td>Nein</td><td>Nein</td><td>49 EUR</td></tr>
</tbody>
</table>
<p><strong>Stiftung Warentest</strong> empfiehlt fur Radon-gefahrdete Regionen (Bayern, Sachsen, Thüringen) den Airthings Wave Plus als einzigen zuverlassigen Verbrauchermesser fur Radon.</p>

<h3>Airthings Wave Plus: <a href="https://www.amazon.fr/dp/B07JB8QWH7?tag=homenuraen00-21" rel="nofollow sponsored">auf Amazon ansehen</a></h3>
<h3>Govee Life H5106: <a href="https://www.amazon.fr/dp/B0BXQVFMYS?tag=homenuraen00-21" rel="nofollow sponsored">auf Amazon ansehen</a></h3>
<h3>Netatmo Smart Indoor: <a href="https://www.amazon.fr/dp/B07S6DFJCK?tag=homenuraen00-21" rel="nofollow sponsored">auf Amazon ansehen</a></h3>`,

    es: `<h2>El aire interior: ¿mas contaminado que el exterior?</h2>
<p>El aire interior suele estar <strong>5 a 10 veces mas contaminado que el exterior</strong>. Pasamos una media del <strong>90% de nuestro tiempo en interiores</strong>. Consulta tambien nuestra <a href="/es/blog/guide-purificateur-air-2026">guia de purificador de aire</a> y nuestro <a href="/es/blog/station-meteo-connectee-comparatif">comparativo de estaciones meteorologicas conectadas</a>.</p>

<h2>Principales contaminantes a monitorizar</h2>
<ul>
<li><strong>CO2:</strong> Mejor indicador de renovacion del aire. Por encima de 1000 ppm: caida de concentracion. Por encima de 1500 ppm: deterioro cognitivo significativo.</li>
<li><strong>PM2.5:</strong> Particulas finas que penetran en lo profundo de los pulmones. Limite OMS: 5 μg/m³.</li>
<li><strong>COV:</strong> El formaldehido es el mas preocupante (cancerigeno Grupo 1 CIRC). Fuentes: aglomerado, parquet laminado, colas.</li>
<li><strong>Radon:</strong> Segunda causa de cancer de pulmon tras el tabaco. Zonas de riesgo en España: Galicia, Extremadura, partes de Castilla y Leon.</li>
</ul>

<h2>Comparativa de modelos 2026</h2>
<table>
<thead>
<tr><th>Modelo</th><th>CO2</th><th>PM2.5</th><th>COV</th><th>Radon</th><th>Precio</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings Wave Plus</strong></td><td>Si</td><td>No</td><td>Si</td><td>Si</td><td>229 EUR</td></tr>
<tr><td><strong>Netatmo Smart Indoor</strong></td><td>Si</td><td>No</td><td>Si</td><td>No</td><td>99 EUR</td></tr>
<tr><td><strong>Govee Life H5106</strong></td><td>Si</td><td>Si</td><td>Si</td><td>No</td><td>79 EUR</td></tr>
<tr><td><strong>Awair Element</strong></td><td>Si</td><td>Si</td><td>Si</td><td>No</td><td>189 EUR</td></tr>
</tbody>
</table>
<p>La OCU recomienda a los residentes en zonas de riesgo de radon (Galicia, Extremadura) instalar al menos un monitor de radon certificado, siendo el Airthings Wave Plus la mejor opcion para el consumidor.</p>
<p><strong>Airthings Wave Plus:</strong> <a href="https://www.amazon.fr/dp/B07JB8QWH7?tag=homenuraen0a-21" rel="nofollow sponsored">ver en Amazon</a><br>
<strong>Govee Life H5106:</strong> <a href="https://www.amazon.fr/dp/B0BXQVFMYS?tag=homenuraen0a-21" rel="nofollow sponsored">ver en Amazon</a><br>
<strong>Netatmo Smart Indoor:</strong> <a href="https://www.amazon.fr/dp/B07S6DFJCK?tag=homenuraen0a-21" rel="nofollow sponsored">ver en Amazon</a></p>`,

    it: `<h2>L'aria interna: piu inquinata di quella esterna?</h2>
<p>L'aria interna e spesso <strong>da 5 a 10 volte piu inquinata di quella esterna</strong>. Passiamo in media il <strong>90% del tempo in ambienti chiusi</strong>. Consulta anche la nostra <a href="/it/blog/guide-purificateur-air-2026">guida purificatore d'aria</a> e il nostro <a href="/it/blog/station-meteo-connectee-comparatif">confronto stazioni meteo connesse</a>.</p>

<h2>Principali inquinanti da monitorare</h2>
<ul>
<li><strong>CO2:</strong> Migliore indicatore del ricambio d'aria. Sopra 1000 ppm: calo della concentrazione. Sopra 1500 ppm: deterioramento cognitivo significativo.</li>
<li><strong>PM2.5:</strong> Particelle fini che penetrano in profondita nei polmoni. Limite OMS: 5 μg/m³.</li>
<li><strong>COV:</strong> La formaldeide e il piu preoccupante (cancerogeno Gruppo 1 IARC). Fonti: truciolato, parquet laminato, colle.</li>
<li><strong>Radon:</strong> Seconda causa di cancro ai polmoni dopo il fumo. Zone a rischio in Italia: Lazio (Castelli Romani), Friuli, Veneto orientale.</li>
</ul>

<h2>Confronto modelli 2026</h2>
<table>
<thead>
<tr><th>Modello</th><th>CO2</th><th>PM2.5</th><th>COV</th><th>Radon</th><th>Prezzo</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings Wave Plus</strong></td><td>Si</td><td>No</td><td>Si</td><td>Si</td><td>229 EUR</td></tr>
<tr><td><strong>Netatmo Smart Indoor</strong></td><td>Si</td><td>No</td><td>Si</td><td>No</td><td>99 EUR</td></tr>
<tr><td><strong>Govee Life H5106</strong></td><td>Si</td><td>Si</td><td>Si</td><td>No</td><td>79 EUR</td></tr>
<tr><td><strong>Awair Element</strong></td><td>Si</td><td>Si</td><td>Si</td><td>No</td><td>189 EUR</td></tr>
</tbody>
</table>
<p>Altroconsumo raccomanda agli abitanti delle zone a rischio radon (Lazio, Friuli) di installare almeno un monitor radon certificato. L'Airthings Wave Plus e la migliore opzione per i consumatori.</p>
<p><strong>Airthings Wave Plus:</strong> <a href="https://www.amazon.fr/dp/B07JB8QWH7?tag=homenuraen010-21" rel="nofollow sponsored">vedi su Amazon</a><br>
<strong>Govee Life H5106:</strong> <a href="https://www.amazon.fr/dp/B0BXQVFMYS?tag=homenuraen010-21" rel="nofollow sponsored">vedi su Amazon</a><br>
<strong>Netatmo Smart Indoor:</strong> <a href="https://www.amazon.fr/dp/B07S6DFJCK?tag=homenuraen010-21" rel="nofollow sponsored">vedi su Amazon</a></p>`,

    nl: `<h2>Binnenlucht: meer vervuild dan buitenlucht?</h2>
<p>Binnenlucht is vaak <strong>5 tot 10 keer meer vervuild dan buitenlucht</strong>. We brengen gemiddeld <strong>90% van onze tijd binnenshuis</strong> door. Zie ook onze <a href="/nl/blog/guide-purificateur-air-2026">luchtreiniger gids</a> en onze <a href="/nl/blog/station-meteo-connectee-comparatif">verbonden weerstation vergelijking</a>.</p>

<h2>Belangrijkste te monitoren verontreinigende stoffen</h2>
<ul>
<li><strong>CO2:</strong> Beste indicator voor luchtverversing. Boven 1000 ppm: concentratiedaling. Boven 1500 ppm: significante cognitieve achteruitgang.</li>
<li><strong>PM2.5:</strong> Fijnstof dat diep in de longen doordringt. WHO-grenswaarde: 5 μg/m³.</li>
<li><strong>VOS:</strong> Formaldehyde is het meest zorgwekkend (IARC Groep 1 carcinogeen). Bronnen: spaanplaat, laminaat, lijmen.</li>
<li><strong>Radon:</strong> Tweede oorzaak van longkanker na roken. Risicogebieden in Nederland: Brabant, Limburg, Gelderland.</li>
</ul>

<h2>Modelenvergelijking 2026</h2>
<table>
<thead>
<tr><th>Model</th><th>CO2</th><th>PM2.5</th><th>VOS</th><th>Radon</th><th>Prijs</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings Wave Plus</strong></td><td>Ja</td><td>Nee</td><td>Ja</td><td>Ja</td><td>€229</td></tr>
<tr><td><strong>Netatmo Smart Indoor</strong></td><td>Ja</td><td>Nee</td><td>Ja</td><td>Nee</td><td>€99</td></tr>
<tr><td><strong>Govee Life H5106</strong></td><td>Ja</td><td>Ja</td><td>Ja</td><td>Nee</td><td>€79</td></tr>
<tr><td><strong>Awair Element</strong></td><td>Ja</td><td>Ja</td><td>Ja</td><td>Nee</td><td>€189</td></tr>
</tbody>
</table>
<p>De <strong>Consumentenbond</strong> beveelt bewoners in radon-risicogebieden (Brabant, Limburg) aan minimaal een gecertificeerde radonmonitor te installeren. De Airthings Wave Plus is de beste consumentenoptie.</p>
<p><strong>Airthings Wave Plus:</strong> <a href="https://www.amazon.fr/dp/B07JB8QWH7?tag=homenuranl-21" rel="nofollow sponsored">bekijk op Amazon</a><br>
<strong>Govee Life H5106:</strong> <a href="https://www.amazon.fr/dp/B0BXQVFMYS?tag=homenuranl-21" rel="nofollow sponsored">bekijk op Amazon</a><br>
<strong>Netatmo Smart Indoor:</strong> <a href="https://www.amazon.fr/dp/B07S6DFJCK?tag=homenuranl-21" rel="nofollow sponsored">bekijk op Amazon</a></p>`,
  },
  faq: [
    {
      question: {
        fr: 'Quelle est la différence entre un moniteur de qualité de l\'air et un purificateur d\'air ?',
        en: 'What is the difference between an air quality monitor and an air purifier?',
        de: 'Was ist der Unterschied zwischen einem Luftqualitats-Monitor und einem Luftreiniger?',
        es: '¿Cuál es la diferencia entre un monitor de calidad del aire y un purificador de aire?',
        it: 'Qual e la differenza tra un monitor della qualita dell\'aria e un purificatore d\'aria?',
        nl: 'Wat is het verschil tussen een luchtkwaliteitsmonitor en een luchtreiniger?',
      },
      answer: {
        fr: 'Un moniteur de qualité de l\'air MESURE la pollution mais ne fait rien pour la réduire — c\'est un outil de diagnostic. Un purificateur d\'air FILTRE l\'air mais ne vous dit pas ce qu\'il filtre. Les deux appareils sont complémentaires : le moniteur détecte les problèmes et déclenche automatiquement le purificateur (via Home Assistant ou l\'app Dyson/Levoit). Les purificateurs Dyson intègrent les deux fonctions : filtration HEPA + capteurs de PM2.5, COV, température et humidité.',
        en: 'An air quality monitor MEASURES pollution but does nothing to reduce it — it is a diagnostic tool. An air purifier FILTERS the air but does not tell you what it is filtering. The two devices are complementary: the monitor detects problems and automatically triggers the purifier (via Home Assistant or the Dyson/Levoit app). Dyson purifiers integrate both functions: HEPA filtration + PM2.5, VOC, temperature and humidity sensors.',
        de: 'Ein Luftqualitats-Monitor MISST die Verschmutzung, tut aber nichts dagegen — es ist ein Diagnosewerkzeug. Ein Luftreiniger FILTERT die Luft, sagt Ihnen aber nicht, was er filtert. Beide Gerate erganzen sich: Der Monitor erkennt Probleme und aktiviert automatisch den Luftreiniger. Dyson-Luftreiniger integrieren beide Funktionen.',
        es: 'Un monitor de calidad del aire MIDE la contaminacion pero no hace nada para reducirla — es una herramienta de diagnostico. Un purificador de aire FILTRA el aire pero no te dice lo que filtra. Los dos dispositivos son complementarios. Los purificadores Dyson integran ambas funciones: filtracion HEPA + sensores de PM2.5, COV, temperatura y humedad.',
        it: 'Un monitor della qualita dell\'aria MISURA l\'inquinamento ma non fa nulla per ridurlo — e uno strumento diagnostico. Un purificatore d\'aria FILTRA l\'aria ma non dice cosa sta filtrando. I due dispositivi sono complementari. I purificatori Dyson integrano entrambe le funzioni.',
        nl: 'Een luchtkwaliteitsmonitor MEET de vervuiling maar doet niets om deze te verminderen — het is een diagnostisch instrument. Een luchtreiniger FILTERT de lucht maar vertelt u niet wat het filtert. De twee apparaten vullen elkaar aan. Dyson-luchtreinigers integreren beide functies.',
      },
    },
    {
      question: {
        fr: 'À quel niveau de CO2 dois-je ventiler ma chambre ?',
        en: 'At what CO2 level should I ventilate my bedroom?',
        de: 'Bei welchem CO2-Wert sollte ich mein Schlafzimmer luften?',
        es: '¿A que nivel de CO2 debo ventilar mi dormitorio?',
        it: 'A quale livello di CO2 dovrei ventilare la mia camera da letto?',
        nl: 'Bij welk CO2-niveau moet ik mijn slaapkamer ventileren?',
      },
      answer: {
        fr: 'Aérez proactivement quand le CO2 dépasse 1000 ppm, et impérativement au-dessus de 1200 ppm. La nuit, si vous ne pouvez pas laisser la fenêtre ouverte, une VMC (Ventilation Mécanique Contrôlée) hygrosensible ou un aérateur de fenêtre est la solution. Une fenêtre ouverte 5-10 minutes en mode "transversale" (2 fenêtres opposées) renouvelle efficacement l\'air d\'une pièce et ramène le CO2 en dessous de 700 ppm. Répétez 2-3 fois par jour si votre logement est bien étanche.',
        en: 'Ventilate proactively when CO2 exceeds 1,000 ppm, and imperatively above 1,200 ppm. At night, if you cannot leave the window open, a humidity-sensitive MVHR (Mechanical Ventilation with Heat Recovery) or a window ventilator is the solution. Opening a window for 5-10 minutes in "cross-ventilation" mode (2 opposite windows) effectively refreshes a room\'s air and brings CO2 below 700 ppm. Repeat 2-3 times per day if your home is well-sealed.',
        de: 'Luften Sie proaktiv, wenn CO2 1000 ppm uberschreitet, und zwingend uber 1200 ppm. Nachts, wenn Sie das Fenster nicht geoffnet lassen konnen, ist eine feuchtegesteuerte kontrollierte Wohnraumluftung (KWL) oder ein Fensterluftungsgerat die Losung.',
        es: 'Ventila de forma proactiva cuando el CO2 supere los 1000 ppm, e imprescindiblemente por encima de 1200 ppm. Por la noche, si no puedes dejar la ventana abierta, un VMC higrosensible o un aireador de ventana es la solucion.',
        it: 'Ventila in modo proattivo quando la CO2 supera 1000 ppm, e imperativamente sopra 1200 ppm. Di notte, se non puoi lasciare la finestra aperta, un VMC igrosensibile o un aeratore di finestra e la soluzione.',
        nl: 'Ventileer proactief wanneer CO2 1000 ppm overschrijdt, en dwingend boven 1200 ppm. \'s Nachts, als u het raam niet open kunt laten, is een vochtgestuurd gebalanceerd ventilatiesysteem of een raamventilator de oplossing.',
      },
    },
    {
      question: {
        fr: 'Comment savoir si mon logement est concerné par le radon ?',
        en: 'How do I know if my home is at risk from radon?',
        de: 'Wie weiß ich, ob mein Haus von Radon betroffen ist?',
        es: '¿Como saber si mi vivienda tiene riesgo de radon?',
        it: 'Come sapere se la mia abitazione e a rischio radon?',
        nl: 'Hoe weet ik of mijn woning radonrisico heeft?',
      },
      answer: {
        fr: 'En France, l\'IRSN (Institut de Radioprotection et de Sûreté Nucléaire) publie une carte des zones à potentiel radon. Les zones à risque élevé incluent la Bretagne, le Massif Central (Auvergne, Limousin), les Vosges et les Alpes. Si vous habitez dans une maison individuelle (sous-sol ou rez-de-chaussée en contact avec le sol) dans ces zones, une mesure radon est fortement recommandée. Le seuil d\'action est fixé à 300 Bq/m³ en France. Des dosimètres radon passifs (kit d\'analyse envoyé en labo) sont disponibles pour 30-50 EUR.',
        en: 'In France, the IRSN publishes a radon potential zone map. High-risk zones include Brittany, the Massif Central, Vosges and Alps. In the UK, Public Health England publishes radon maps — Cornwall, Devon, Northamptonshire and parts of Scotland are highest risk. If you live in a detached house with basement/ground floor in contact with soil in these zones, radon measurement is strongly recommended. The action level is 200 Bq/m³ in the UK (300 Bq/m³ in France).',
        de: 'In Deutschland veroffentlicht das Bundesamt fur Strahlenschutz (BfS) eine Radonkarte. Risikogebiete umfassen Bayern, Sachsen und Thüringen. Wenn Sie in einem Einzelhaus (Keller oder Erdgeschoss in Bodenkontakt) in diesen Gebieten wohnen, wird eine Radonmessung dringend empfohlen. Der Aktionswert betragt 300 Bq/m³.',
        es: 'En España, el CSN (Consejo de Seguridad Nuclear) publica un mapa de zonas con potencial de radon. Las zonas de riesgo incluyen Galicia, Extremadura y partes de Castilla y Leon. Si vives en una casa unifamiliar con sotano o planta baja en contacto con el suelo en estas zonas, se recomienda encarecidamente medir el radon.',
        it: 'In Italia, l\'ISPRA pubblica una mappa delle zone a potenziale radon. Le zone a rischio includono il Lazio (Castelli Romani), il Friuli e il Veneto orientale. Se abiti in una casa singola (seminterrato o piano terra a contatto con il suolo) in queste zone, una misurazione del radon e fortemente raccomandata.',
        nl: 'In Nederland publiceert het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) een radonkaart. Risicogebieden zijn Brabant, Limburg en Gelderland. Als u in een vrijstaand huis woont (kelder of begane grond in bodemcontact) in deze gebieden, is radonmeting sterk aanbevolen.',
      },
    },
    {
      question: {
        fr: 'Les moniteurs de qualité de l\'air sont-ils précis ?',
        en: 'Are indoor air quality monitors accurate?',
        de: 'Sind Innenraumluftqualitats-Monitore genau?',
        es: '¿Son precisos los monitores de calidad del aire interior?',
        it: 'I monitor della qualita dell\'aria interna sono precisi?',
        nl: 'Zijn binnenluchtkwaliteitsmonitoren nauwkeurig?',
      },
      answer: {
        fr: 'La précision varie selon les capteurs et les prix. Les capteurs NDIR (Non-Dispersive Infrared) utilisés pour le CO2 dans les moniteurs grand public sont généralement précis à ±50-100 ppm — suffisant pour des décisions de ventilation. Les capteurs de particules à diffraction laser (PM2.5) ont une précision de ±15-20% en conditions réelles. Les capteurs COV "totaux" donnent une indication relative mais ne distinguent pas les différents composés. Le radon Airthings a été validé par le laboratoire de référence norvégien (NRPA). Pour une mesure officielle (permis de construire, certifications), des instruments de mesure professionnels calibrés sont nécessaires.',
        en: 'Accuracy varies by sensor type and price. NDIR (Non-Dispersive Infrared) CO2 sensors in consumer monitors are generally accurate to ±50-100 ppm — sufficient for ventilation decisions. Laser diffraction particle sensors (PM2.5) have ±15-20% accuracy in real conditions. Total VOC sensors give a relative indication but do not distinguish between different compounds. Airthings radon has been validated by the Norwegian reference laboratory (NRPA). For official measurements (building permits, certifications), calibrated professional instruments are required.',
        de: 'Die Genauigkeit variiert je nach Sensortyp und Preis. NDIR-CO2-Sensoren sind in der Regel auf ±50-100 ppm genau — ausreichend fur Luftungsentscheidungen. Laser-PM2.5-Sensoren haben ±15-20% Genauigkeit unter realen Bedingungen. Airthings Radon wurde vom norwegischen Referenzlabor (NRPA) validiert.',
        es: 'La precision varia segun el tipo de sensor y el precio. Los sensores CO2 NDIR son generalmente precisos en ±50-100 ppm — suficiente para decisiones de ventilacion. Los sensores PM2.5 de difraccion laser tienen ±15-20% de precision en condiciones reales. El radon Airthings ha sido validado por el laboratorio de referencia noruego (NRPA).',
        it: 'La precisione varia in base al tipo di sensore e al prezzo. I sensori CO2 NDIR sono generalmente precisi a ±50-100 ppm — sufficiente per decisioni di ventilazione. I sensori PM2.5 a diffrazione laser hanno una precisione di ±15-20% in condizioni reali. Il radon Airthings e stato validato dal laboratorio di riferimento norvegese (NRPA).',
        nl: 'De nauwkeurigheid varieert per sensortype en prijs. NDIR CO2-sensoren zijn over het algemeen nauwkeurig tot ±50-100 ppm — voldoende voor ventilatiebesluiten. Laser PM2.5-sensoren hebben ±15-20% nauwkeurigheid in reële omstandigheden. Airthings radon is gevalideerd door het Noorse referentielaboratorium (NRPA).',
      },
    },
    {
      question: {
        fr: 'Combien de moniteurs d\'air faut-il pour un appartement ?',
        en: 'How many air monitors does a flat need?',
        de: 'Wie viele Luftqualitats-Monitore braucht eine Wohnung?',
        es: '¿Cuantos monitores de aire necesita un piso?',
        it: 'Quanti monitor dell\'aria servono per un appartamento?',
        nl: 'Hoeveel luchtmonitoren heeft een appartement nodig?',
      },
      answer: {
        fr: 'En général, un moniteur par zone de vie principale suffit. Pour un T3 : un dans le salon (pièce principale), un dans la chambre parentale, et optionnellement un dans la chambre des enfants si vous avez des enfants en bas âge. Pour un T4 ou plus : ajoutez un moniteur dans la cuisine (forte émission PM2.5 lors de la cuisson). Les chambres d\'enfants méritent une surveillance particulière car les enfants sont plus vulnérables aux polluants. Un réseau de plusieurs moniteurs Netatmo ou Govee peut être géré depuis une seule application avec historique centralisé.',
        en: 'Generally, one monitor per main living area is sufficient. For a 2-bedroom flat: one in the living room (main room), one in the master bedroom, and optionally one in the children\'s bedroom if you have young children. For a 3-bedroom home or larger: add a monitor in the kitchen (high PM2.5 emissions during cooking). Children\'s bedrooms deserve special monitoring as children are more vulnerable to pollutants.',
        de: 'Im Allgemeinen reicht ein Monitor pro Hauptwohnbereich. Fur eine 3-Zimmer-Wohnung: einer im Wohnzimmer, einer im Elternschlafzimmer, optional einer im Kinderzimmer. Fur ein Haus mit 4+ Zimmern: fugen Sie einen Monitor in der Kuche hinzu (hohe PM2.5-Emissionen beim Kochen).',
        es: 'Generalmente, un monitor por zona de vida principal es suficiente. Para un piso de 3 habitaciones: uno en el salon, uno en el dormitorio principal y opcionalmente uno en el dormitorio de los niños. Para pisos de 4+ habitaciones: añade uno en la cocina (alta emision de PM2.5 durante la coccion).',
        it: 'In generale, un monitor per zona di vita principale e sufficiente. Per un appartamento di 3 vani: uno nel soggiorno, uno nella camera da letto principale e opzionalmente uno nella stanza dei bambini. Per un appartamento di 4+ vani: aggiungi un monitor in cucina (alto PM2.5 durante la cottura).',
        nl: 'Over het algemeen is een monitor per hoofdwoonruimte voldoende. Voor een 3-kamerappartement: een in de woonkamer, een in de master slaapkamer en optioneel een in de kinderslaapkamer. Voor een huis met 4+ kamers: voeg een monitor toe in de keuken (hoge PM2.5-uitstoot tijdens het koken).',
      },
    },
  ],
}
