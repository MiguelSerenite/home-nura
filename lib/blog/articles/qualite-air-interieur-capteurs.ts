import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'qualite-air-interieur-capteurs',
  category: 'guides',
  pillar: 'confort-air',
  relatedSlugs: ['guide-purificateur-air-2026', 'comparatif-purificateur-air-allergie', 'deshumidificateur-connecte-guide'],
  datePublished: '2026-04-16',
  dateModified: '2026-10-09',
  readingTime: 10,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: "Moniteur de qualité de l'air intérieur affichant le CO2, les particules PM2.5, les COV, l'humidité et la température",
        en: 'Indoor air quality monitor showing CO2, PM2.5 particles, VOCs, humidity and temperature readings',
        de: 'Luftqualitätsmonitor für Innenräume mit Anzeige von CO2, Feinstaub PM2.5, VOC, Luftfeuchtigkeit und Temperatur',
        es: 'Medidor de calidad del aire interior que muestra CO2, partículas PM2.5, COV, humedad y temperatura',
        it: "Monitor della qualità dell'aria interna che mostra CO2, particolato PM2.5, COV, umidità e temperatura",
        nl: 'Binnenluchtkwaliteitsmeter met weergave van CO2, fijnstof PM2.5, VOS, luchtvochtigheid en temperatuur',
      },
    },
  ],
  title: {
    fr: "Capteur Qualité de l'Air Intérieur 2026 : Pourquoi et Comment Mesurer Chez Soi",
    en: 'Indoor Air Quality Monitor 2026: Why and How to Measure at Home',
    de: 'Luftqualitätsmonitor für Innenräume 2026: Warum und wie Sie zu Hause messen',
    es: 'Sensor de Calidad del Aire Interior 2026: Por Qué y Cómo Medir en Casa',
    it: "Sensore Qualità dell'Aria Interna 2026: Perché e Come Misurare in Casa",
    nl: 'Binnenluchtkwaliteitsmeter 2026: Waarom en Hoe Je Thuis Meet',
  },
  excerpt: {
    fr: "CO2, particules fines, COV, radon : quels polluants mesurer chez soi et quel capteur choisir en 2026. Comparatif d'Airthings View Plus, Netatmo, Aranet4 Home, Awair Element et Airthings Wave Plus.",
    en: 'CO2, fine particles, VOCs, radon: which pollutants to measure at home and which monitor to choose in 2026. Comparing the Airthings View Plus, Netatmo, Aranet4 Home, Awair Element and Airthings Wave Plus.',
    de: 'CO2, Feinstaub, VOC, Radon: Welche Schadstoffe Sie zu Hause messen sollten und welcher Monitor 2026 passt. Vergleich von Airthings View Plus, Netatmo, Aranet4 Home, Awair Element und Airthings Wave Plus.',
    es: 'CO2, partículas finas, COV, radón: qué contaminantes medir en casa y qué medidor elegir en 2026. Comparativa de Airthings View Plus, Netatmo, Aranet4 Home, Awair Element y Airthings Wave Plus.',
    it: "CO2, polveri sottili, COV, radon: quali inquinanti misurare in casa e quale monitor scegliere nel 2026. Confronto tra Airthings View Plus, Netatmo, Aranet4 Home, Awair Element e Airthings Wave Plus.",
    nl: 'CO2, fijnstof, VOS, radon: welke stoffen je thuis meet en welke meter je in 2026 kiest. Vergelijking van Airthings View Plus, Netatmo, Aranet4 Home, Awair Element en Airthings Wave Plus.',
  },
  content: {
    fr: `<p>Un capteur de qualité de l'air intérieur vous dit quand aérer, purifier ou déshumidifier, en mesurant le CO2, les particules fines PM2.5, les composés organiques volatils (COV) et, sur certains modèles, le radon. Pour la plupart des foyers, un appareil doté d'un vrai capteur de CO2 NDIR suffit ; dans une région exposée au radon, un moniteur Airthings qui mesure ce gaz devient la priorité.</p>
<p>Nous passons l'essentiel de nos journées à l'intérieur, et l'air y est souvent moins bien renouvelé qu'on ne le pense : cuisson, bougies, meubles neufs, produits ménagers et simple respiration chargent l'atmosphère sans que l'on s'en rende compte. Ce guide explique quels polluants surveiller, comment choisir un moniteur et compare cinq modèles réellement vendus en Europe en 2026, à partir des fiches techniques des fabricants, de comparatifs indépendants publiés et des retours d'acheteurs vérifiés. Tous les modèles de la catégorie sont regroupés sur notre page <a href="/fr/energie-domotique/capteurs-qualite-air">capteurs de qualité de l'air</a>.</p>

<h2>Les polluants à surveiller chez soi</h2>
<h3>CO2 : le meilleur indicateur de renouvellement d'air</h3>
<p>Aux concentrations rencontrées dans un logement, le CO2 n'est pas toxique. Mais c'est le meilleur témoin du renouvellement d'air : plus il monte, plus l'air de la pièce a déjà été respiré, et plus l'humidité et les autres polluants s'accumulent. Une chambre fermée occupée toute la nuit ou un bureau à domicile sans aération en sont les exemples typiques. Les fabricants et les guides de ventilation utilisent généralement les repères suivants :</p>
<table>
<thead>
<tr><th>CO2 mesuré</th><th>Interprétation</th><th>Que faire</th></tr>
</thead>
<tbody>
<tr><td>Moins de 800 ppm</td><td>Air bien renouvelé</td><td>Rien de particulier</td></tr>
<tr><td>800 à 1 000 ppm</td><td>Renouvellement correct</td><td>Prévoir d'aérer prochainement</td></tr>
<tr><td>1 000 à 1 400 ppm</td><td>Renouvellement insuffisant</td><td>Aérer quelques minutes</td></tr>
<tr><td>Plus de 1 400 ppm</td><td>Air confiné</td><td>Aérer sans attendre et revoir la ventilation de la pièce</td></tr>
</tbody>
</table>
<p>Point essentiel : seul un capteur <strong>NDIR</strong> (infrarouge non dispersif) mesure réellement le CO2. Certains appareils affichent un « eCO2 » calculé à partir de leur capteur de COV : c'est une estimation, qui peut s'écarter fortement de la réalité. Tous les modèles retenus dans ce guide utilisent un capteur NDIR.</p>

<h3>PM2.5 : les particules fines</h3>
<p>Les particules PM2.5, d'un diamètre inférieur à 2,5 micromètres, pénètrent profondément dans les voies respiratoires. En 2021, l'OMS a abaissé sa valeur guide à 5 µg/m³ en moyenne annuelle. À l'intérieur, les pics proviennent surtout de la cuisson (en particulier à feu vif), des bougies et de l'encens, des poêles et cheminées, et du tabac. Mesurer les PM2.5 est utile si un membre du foyer est asthmatique ou allergique, si vous habitez près d'un axe routier, ou si vous voulez piloter un purificateur d'air de façon objective.</p>

<h3>COV : les composés organiques volatils</h3>
<p>Les COV sont émis par les peintures, vernis, colles, meubles en panneaux de particules, produits ménagers et parfums d'intérieur. Le formaldéhyde, l'un des plus répandus, est classé cancérogène pour l'homme par le Centre international de recherche sur le cancer. Les capteurs grand public mesurent des <strong>COV totaux</strong> : ils signalent bien une hausse après des travaux ou un ménage intensif, mais n'indiquent ni quel composé est en cause, ni la concentration de formaldéhyde en particulier. Ils servent d'alerte, pas de diagnostic. En France, les produits de construction et de décoration portent une étiquette d'émissions allant de A+ (très faibles) à C : c'est le meilleur levier pour limiter les COV à la source.</p>

<h3>Radon : le polluant invisible du sol</h3>
<p>Le radon est un gaz radioactif naturel qui provient du sous-sol, notamment des terrains granitiques et volcaniques. Il s'infiltre par les fissures et les passages de canalisations, et s'accumule surtout dans les sous-sols et les rez-de-chaussée. L'OMS le considère comme l'une des principales causes de cancer du poumon après le tabac. En France, le niveau de référence est fixé à 300 Bq/m³ en moyenne annuelle, et l'ASNR (ex-IRSN) publie une cartographie des communes à potentiel radon. Le radon varie beaucoup d'un jour à l'autre : seule la moyenne sur plusieurs semaines a du sens, et la mesure de référence reste un dosimètre passif posé au moins deux mois pendant la saison de chauffe.</p>

<h3>Humidité et température</h3>
<p>Une humidité relative comprise entre 40 et 60 % est généralement considérée comme confortable. En dessous, les muqueuses s'assèchent ; au-dessus de 60 à 70 % de façon prolongée, acariens et moisissures prolifèrent. Si votre moniteur affiche régulièrement des valeurs élevées, consultez notre <a href="/fr/blog/deshumidificateur-connecte-guide">guide du déshumidificateur connecté</a>.</p>

<h2>Les critères pour bien choisir</h2>
<ul>
<li><strong>Les capteurs embarqués :</strong> un CO2 NDIR en priorité ; les PM2.5 si vous cuisinez beaucoup, utilisez un poêle ou un purificateur ; le radon si votre commune est classée à potentiel radon ou si vous vivez en maison individuelle de plain-pied ou avec sous-sol.</li>
<li><strong>L'alimentation :</strong> les modèles sur piles se placent partout et se déplacent facilement ; les modèles sur secteur peuvent rafraîchir leurs mesures plus souvent et rester connectés en Wi-Fi en permanence.</li>
<li><strong>La connectivité :</strong> le Wi-Fi permet de consulter les mesures à distance et de recevoir des alertes. Un modèle uniquement Bluetooth transmet ses données quand le téléphone est à proximité, ou via une passerelle de la même marque.</li>
<li><strong>L'écosystème :</strong> vérifiez la compatibilité avec ce que vous utilisez déjà (Apple Home, Amazon Alexa, Google Home, Home Assistant) si vous voulez déclencher une VMC ou un purificateur automatiquement.</li>
<li><strong>L'affichage :</strong> un écran sur l'appareil permet de lire la valeur d'un coup d'œil sans sortir son téléphone, ce qui compte beaucoup au quotidien.</li>
<li><strong>Le nombre de pièces :</strong> un moniteur ne mesure que la pièce où il se trouve. La chambre et la pièce de vie principale sont les deux emplacements prioritaires.</li>
</ul>

<h2>Les 5 moniteurs à retenir en 2026</h2>
<h3>Airthings View Plus : le plus complet</h3>
<p>L'<strong>Airthings View Plus</strong> est aujourd'hui le modèle phare d'Airthings. Il mesure le radon, les particules PM1 et PM2.5, le CO2, les COV, l'humidité, la température et la pression atmosphérique. Son écran e-paper affiche les valeurs choisies, complété par un halo lumineux vert, jaune ou rouge. Il fonctionne sur six piles AA, avec une autonomie annoncée d'environ deux ans, ou sur secteur via USB ; branché, il sert aussi de passerelle Wi-Fi pour d'autres moniteurs Airthings de la maison. L'application et le tableau de bord en ligne présentent historiques et alertes, avec une compatibilité Amazon Alexa, Google Assistant et IFTTT.</p>
<p><strong>Points forts :</strong> radon et particules fines dans un même appareil, mesure du CO2 par NDIR, fonctionnement sur piles ou secteur. <strong>Limites :</strong> c'est un appareil haut de gamme, et le radon demande plusieurs jours avant d'afficher une moyenne exploitable. <strong>Pour qui :</strong> les maisons situées en zone à radon et ceux qui veulent un seul appareil qui surveille tout.</p>

<h3>Netatmo Smart Indoor Air Quality Monitor : le plus simple pour suivre le CO2</h3>
<p>Le <strong>Netatmo Smart Indoor Air Quality Monitor</strong>, aussi appelé Healthy Home Coach, se concentre sur l'essentiel : CO2, humidité, température et niveau sonore. Il se branche sur secteur via USB, se connecte en Wi-Fi et s'utilise avec l'application Netatmo, sans abonnement. Il propose des profils adaptés (bébé, personne asthmatique ou usage général) qui ajustent les seuils d'alerte et les conseils. Il est compatible avec Apple HomeKit, ce qui permet d'intégrer ses mesures dans l'app Maison et dans des automatisations.</p>
<p><strong>Points forts :</strong> design sobre, installation très simple, compatibilité HomeKit, alertes claires pour savoir quand aérer. <strong>Limites :</strong> pas de mesure des particules fines, des COV ni du radon, et aucun écran chiffré sur l'appareil. <strong>Pour qui :</strong> une chambre ou une chambre d'enfant, dans un foyer qui veut surtout savoir quand ouvrir les fenêtres.</p>

<h3>Aranet4 Home : la référence pour le CO2 sur piles</h3>
<p>Fabriqué en Lettonie, l'<strong>Aranet4 Home</strong> est un moniteur de CO2 compact, apprécié pour son capteur NDIR et son écran e-ink lisible en permanence. Il mesure aussi la température, l'humidité relative et la pression atmosphérique. Grâce à l'écran e-ink, le fabricant annonce plusieurs années d'autonomie sur deux piles AA, selon l'intervalle de mesure et l'usage du Bluetooth. Il transmet ses données en Bluetooth à l'application Aranet, qui conserve l'historique.</p>
<p><strong>Points forts :</strong> mesure du CO2 réputée fiable, très grande autonomie, appareil facile à déplacer d'une pièce à l'autre, lecture immédiate sur l'écran. <strong>Limites :</strong> ni particules fines, ni COV, ni radon ; pas de Wi-Fi intégré, donc pas d'alertes à distance sans passerelle. <strong>Pour qui :</strong> le télétravail, les chambres, et ceux qui veulent une mesure de CO2 sérieuse qu'ils peuvent emporter partout.</p>

<h3>Awair Element : particules fines et intégration domotique</h3>
<p>L'<strong>Awair Element</strong> mesure le CO2, les COV, les particules PM2.5, la température et l'humidité, et synthétise le tout dans un score de qualité de l'air de 0 à 100 affiché en façade. Il se connecte en Wi-Fi et est compatible avec Amazon Alexa et Google Assistant. Son atout pour les passionnés de domotique est son API locale, prise en charge par l'intégration officielle Home Assistant, qui permet de piloter un purificateur ou une ventilation sans passer par le cloud.</p>
<p><strong>Points forts :</strong> combinaison CO2 + PM2.5 + COV, score lisible, API locale. <strong>Limites :</strong> pas de radon, alimentation secteur uniquement, et une disponibilité en Europe parfois irrégulière selon les pays et les revendeurs. <strong>Pour qui :</strong> les foyers avec une personne asthmatique ou allergique, le bureau à domicile, et les utilisateurs de Home Assistant.</p>

<h3>Airthings Wave Plus : le radon sur piles, sans écran</h3>
<p>L'<strong>Airthings Wave Plus</strong> mesure le radon, le CO2, les COV, l'humidité, la température et la pression atmosphérique. Il fonctionne sur piles et communique en Bluetooth ; un geste de la main devant l'appareil allume un anneau lumineux coloré qui résume la qualité de l'air. Pour consulter les mesures à distance, il faut une passerelle Airthings ou un View Plus branché sur secteur. Airthings met désormais le View Plus en avant, mais le Wave Plus reste proposé par de nombreux revendeurs européens.</p>
<p><strong>Points forts :</strong> radon et CO2 réunis, fonctionnement sur piles, discrétion. <strong>Limites :</strong> pas de particules fines, pas d'écran chiffré, Bluetooth uniquement sans passerelle. <strong>Pour qui :</strong> une seconde pièce en zone à radon, en complément d'un View Plus, ou une chambre où l'on ne veut aucun écran.</p>

<h2>Tableau comparatif</h2>
<table>
<thead>
<tr><th>Modèle</th><th>Mesures</th><th>Radon</th><th>Alimentation</th><th>Connectivité</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings View Plus</strong></td><td>CO2, PM1, PM2.5, COV, humidité, température, pression</td><td>Oui</td><td>Piles ou USB</td><td>Wi-Fi (sert de passerelle)</td><td>Maison en zone à radon, suivi complet</td></tr>
<tr><td><strong>Netatmo Smart Indoor Air Quality Monitor</strong></td><td>CO2, humidité, température, bruit</td><td>Non</td><td>USB secteur</td><td>Wi-Fi, Apple HomeKit</td><td>Chambre, savoir quand aérer</td></tr>
<tr><td><strong>Aranet4 Home</strong></td><td>CO2, humidité, température, pression</td><td>Non</td><td>Piles</td><td>Bluetooth</td><td>CO2 fiable et mobile, télétravail</td></tr>
<tr><td><strong>Awair Element</strong></td><td>CO2, PM2.5, COV, humidité, température</td><td>Non</td><td>USB secteur</td><td>Wi-Fi, API locale</td><td>Asthme, allergies, Home Assistant</td></tr>
<tr><td><strong>Airthings Wave Plus</strong></td><td>CO2, COV, humidité, température, pression</td><td>Oui</td><td>Piles</td><td>Bluetooth (passerelle en option)</td><td>Pièce secondaire en zone à radon</td></tr>
</tbody>
</table>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Acheter un capteur de particules en pensant mesurer le CO2.</strong> Certains moniteurs d'entrée de gamme ne mesurent que les PM2.5, la température et l'humidité ; c'est le cas du Govee H5106, par exemple. Utiles contre les fumées de cuisson, ils ne vous diront pas quand aérer une chambre.</li>
<li><strong>Se fier à un « eCO2 ».</strong> Une valeur de CO2 estimée à partir d'un capteur de COV n'est pas une mesure. Vérifiez la mention NDIR dans la fiche technique.</li>
<li><strong>Juger le radon sur une seule journée.</strong> Les variations quotidiennes sont importantes : attendez plusieurs semaines de données avant de tirer des conclusions, et faites une mesure par dosimètre en cas de doute.</li>
<li><strong>Mal placer l'appareil.</strong> Près d'une fenêtre, au-dessus d'un radiateur, en plein soleil ou à côté de la cuisinière, les mesures ne reflètent pas l'air que vous respirez.</li>
<li><strong>Confondre mesure et action.</strong> Un moniteur ne purifie rien : il vous indique quoi faire. Prévoyez la suite, qu'il s'agisse d'aérer, de faire entretenir la VMC ou d'ajouter un purificateur.</li>
</ul>

<h2>Installation et bon usage</h2>
<p>Placez le moniteur à hauteur de respiration, entre environ 1 et 1,5 mètre, à au moins un mètre des fenêtres, portes, bouches de ventilation et sources de chaleur. Dans une chambre, la table de nuit ou une commode conviennent, à condition de ne pas souffler directement dessus. Laissez l'appareil se stabiliser quelques heures après l'installation avant de vous fier aux valeurs.</p>
<p>Beaucoup de capteurs de CO2 NDIR se recalibrent automatiquement en considérant que la pièce reçoit régulièrement de l'air frais : aérez au moins une fois par jour pour que cette correction fonctionne. Pour le radon, installez le moniteur dans la pièce occupée la plus basse de la maison. Si la moyenne dépasse durablement le niveau de référence, renseignez-vous auprès des services compétents de votre région et faites appel à un professionnel du bâtiment : les solutions passent généralement par l'étanchéité des points d'entrée et l'amélioration de la ventilation.</p>
<p>Enfin, un moniteur connecté prend tout son intérêt couplé à vos autres équipements : allumer un purificateur quand les PM2.5 montent, ou recevoir une notification quand le CO2 dépasse 1 000 ppm. Pour choisir l'appareil à associer, consultez notre <a href="/fr/blog/guide-purificateur-air-2026">guide du purificateur d'air</a>.</p>

<h2>Notre verdict</h2>
<ul>
<li><strong>Le plus complet :</strong> Airthings View Plus, seul modèle de cette sélection à réunir radon, particules fines, CO2 et COV.</li>
<li><strong>Le meilleur rapport qualité-prix :</strong> Netatmo Smart Indoor Air Quality Monitor, pour savoir quand aérer sans complication, avec HomeKit.</li>
<li><strong>Pour une mesure de CO2 fiable et mobile :</strong> Aranet4 Home, sur piles, avec écran toujours lisible.</li>
<li><strong>Pour les particules fines et la domotique :</strong> Awair Element, grâce à son API locale.</li>
<li><strong>En complément en zone à radon :</strong> Airthings Wave Plus, sur piles et sans écran.</li>
</ul>
<p>Retrouvez tous les modèles disponibles sur notre page <a href="/fr/energie-domotique/capteurs-qualite-air">capteurs de qualité de l'air</a>.</p>`,

    en: `<p>An indoor air quality monitor tells you when to ventilate, purify or dehumidify by measuring CO2, PM2.5 fine particles, volatile organic compounds (VOCs) and, on some models, radon. For most homes, a device with a genuine NDIR CO2 sensor is enough; if you live in a radon-affected area, an Airthings monitor that measures radon should come first.</p>
<p>We spend most of our day indoors, and the air is often refreshed less than we think: cooking, candles, new furniture, cleaning products and simply breathing all load the air without us noticing. This guide explains which pollutants matter, how to choose a monitor, and compares five models actually sold in Europe in 2026, based on manufacturer specifications, published independent reviews and verified buyer feedback. You will find every model in the category on our <a href="/en/energie-domotique/capteurs-qualite-air">air quality monitors</a> page.</p>

<h2>The pollutants worth tracking at home</h2>
<h3>CO2: the best indicator of fresh air</h3>
<p>At the levels found in a home, CO2 is not toxic. It is, however, the best proxy for ventilation: the higher it climbs, the more the air in the room has already been breathed, and the more humidity and other pollutants build up. A closed bedroom occupied all night or a home office with the window shut are typical examples. Manufacturers and ventilation guides generally use these reference points:</p>
<table>
<thead>
<tr><th>Measured CO2</th><th>What it means</th><th>What to do</th></tr>
</thead>
<tbody>
<tr><td>Below 800 ppm</td><td>Well-ventilated air</td><td>Nothing in particular</td></tr>
<tr><td>800 to 1,000 ppm</td><td>Acceptable ventilation</td><td>Plan to air the room soon</td></tr>
<tr><td>1,000 to 1,400 ppm</td><td>Insufficient ventilation</td><td>Open a window for a few minutes</td></tr>
<tr><td>Above 1,400 ppm</td><td>Stale air</td><td>Ventilate now and review the room's ventilation</td></tr>
</tbody>
</table>
<p>One key point: only an <strong>NDIR</strong> (non-dispersive infrared) sensor actually measures CO2. Some devices display an "eCO2" value calculated from their VOC sensor; that is an estimate and can be far from reality. Every model in this guide uses an NDIR sensor.</p>

<h3>PM2.5: fine particles</h3>
<p>PM2.5 particles, smaller than 2.5 micrometres, travel deep into the airways. In 2021 the WHO lowered its annual guideline to 5 µg/m³. Indoors, spikes mainly come from cooking (especially high-heat frying), candles and incense, wood stoves and fireplaces, and smoking. Measuring PM2.5 is worthwhile if someone at home has asthma or allergies, if you live near a busy road, or if you want to run an air purifier based on real data.</p>

<h3>VOCs: volatile organic compounds</h3>
<p>VOCs are released by paints, varnishes, adhesives, particleboard furniture, cleaning products and air fresheners. Formaldehyde, one of the most common, is classified as carcinogenic to humans by the International Agency for Research on Cancer. Consumer sensors measure <strong>total VOCs</strong>: they reliably flag a rise after decorating or heavy cleaning, but they do not tell you which compound is responsible, nor the formaldehyde level specifically. Treat them as an alert, not a diagnosis. Choosing low-emission paints and furniture is the most effective way to cut VOCs at the source.</p>

<h3>Radon: the invisible gas from the ground</h3>
<p>Radon is a naturally occurring radioactive gas that rises from the ground, particularly in granite and some other rock areas. It enters through cracks and service pipe openings and collects mostly in basements and ground floors. The WHO considers it one of the leading causes of lung cancer after smoking. In the UK, the action level for homes is 200 Bq/m³ as an annual average, and UKHSA publishes radon maps showing affected areas. Radon fluctuates a lot from day to day, so only an average over several weeks is meaningful; the reference method remains a passive detector left in place for around three months.</p>

<h3>Humidity and temperature</h3>
<p>Relative humidity between 40 and 60% is generally considered comfortable. Below that, mucous membranes dry out; above 60 to 70% for long periods, dust mites and mould thrive. If your monitor regularly shows high readings, see our <a href="/en/blog/deshumidificateur-connecte-guide">smart dehumidifier guide</a>.</p>

<h2>How to choose</h2>
<ul>
<li><strong>Sensors on board:</strong> an NDIR CO2 sensor first; PM2.5 if you cook a lot, use a wood stove or run a purifier; radon if your area is radon-affected or you live in a house with a basement or ground-floor bedrooms.</li>
<li><strong>Power:</strong> battery models can go anywhere and move easily; mains-powered models can refresh readings more often and stay on Wi-Fi permanently.</li>
<li><strong>Connectivity:</strong> Wi-Fi lets you check readings remotely and receive alerts. A Bluetooth-only model syncs when your phone is nearby, or through a hub from the same brand.</li>
<li><strong>Ecosystem:</strong> check compatibility with what you already use (Apple Home, Amazon Alexa, Google Home, Home Assistant) if you want to trigger ventilation or a purifier automatically.</li>
<li><strong>Display:</strong> an on-device screen lets you read values at a glance without reaching for your phone, which matters day to day.</li>
<li><strong>Number of rooms:</strong> a monitor only measures the room it sits in. The bedroom and the main living space are the two priority spots.</li>
</ul>

<h2>The 5 monitors worth considering in 2026</h2>
<h3>Airthings View Plus: the most complete</h3>
<p>The <strong>Airthings View Plus</strong> is now Airthings' flagship. It measures radon, PM1 and PM2.5 particles, CO2, VOCs, humidity, temperature and air pressure. Its e-paper screen shows the readings you choose, with a green, yellow or red glow ring. It runs on six AA batteries, with a stated battery life of around two years, or on USB power; when plugged in, it also acts as a Wi-Fi hub for other Airthings monitors in the home. The app and online dashboard show history and alerts, and it works with Amazon Alexa, Google Assistant and IFTTT.</p>
<p><strong>Strengths:</strong> radon and fine particles in one device, NDIR CO2, battery or mains power. <strong>Limits:</strong> it is a premium device, and radon takes several days before showing a useful average. <strong>Best for:</strong> homes in radon-affected areas and anyone who wants one device that covers everything.</p>

<h3>Netatmo Smart Indoor Air Quality Monitor: the easiest way to track CO2</h3>
<p>The <strong>Netatmo Smart Indoor Air Quality Monitor</strong>, also known as the Healthy Home Coach, focuses on the essentials: CO2, humidity, temperature and noise level. It runs on USB mains power, connects over Wi-Fi and works with the Netatmo app with no subscription. Profiles for a baby, an asthmatic person or general use adjust alert thresholds and advice. It is compatible with Apple HomeKit, so its readings can appear in the Home app and in automations.</p>
<p><strong>Strengths:</strong> understated design, very easy setup, HomeKit support, clear alerts telling you when to ventilate. <strong>Limits:</strong> no fine particle, VOC or radon measurement, and no numeric screen on the device. <strong>Best for:</strong> a bedroom or nursery, in a household that mainly wants to know when to open the windows.</p>

<h3>Aranet4 Home: the benchmark battery CO2 monitor</h3>
<p>Made in Latvia, the <strong>Aranet4 Home</strong> is a compact CO2 monitor known for its NDIR sensor and always-on e-ink display. It also measures temperature, relative humidity and air pressure. Thanks to the e-ink screen, the manufacturer quotes several years of battery life on two AA batteries, depending on the measurement interval and Bluetooth use. It sends data over Bluetooth to the Aranet app, which keeps the history.</p>
<p><strong>Strengths:</strong> CO2 readings with a strong reputation for reliability, exceptional battery life, easy to carry from room to room, readable at a glance. <strong>Limits:</strong> no fine particles, VOCs or radon; no built-in Wi-Fi, so no remote alerts without a base station. <strong>Best for:</strong> home offices, bedrooms, and anyone who wants a serious CO2 reading they can take anywhere.</p>

<h3>Awair Element: fine particles and smart home integration</h3>
<p>The <strong>Awair Element</strong> measures CO2, VOCs, PM2.5, temperature and humidity, and sums them up in an air quality score from 0 to 100 shown on the front. It connects over Wi-Fi and works with Amazon Alexa and Google Assistant. Its main draw for smart home fans is a local API, supported by the official Home Assistant integration, which lets you control a purifier or ventilation without going through the cloud.</p>
<p><strong>Strengths:</strong> CO2, PM2.5 and VOCs together, readable score, local API. <strong>Limits:</strong> no radon, mains power only, and availability in Europe can be patchy depending on the country and retailer. <strong>Best for:</strong> households with someone who has asthma or allergies, home offices and Home Assistant users.</p>

<h3>Airthings Wave Plus: battery radon monitoring, no screen</h3>
<p>The <strong>Airthings Wave Plus</strong> measures radon, CO2, VOCs, humidity, temperature and air pressure. It runs on batteries and uses Bluetooth; a wave of the hand in front of it lights a coloured ring summarising air quality. To view readings remotely you need an Airthings hub or a mains-powered View Plus. Airthings now puts the View Plus first, but the Wave Plus is still sold by many European retailers.</p>
<p><strong>Strengths:</strong> radon and CO2 combined, battery powered, discreet. <strong>Limits:</strong> no fine particles, no numeric display, Bluetooth only without a hub. <strong>Best for:</strong> a second room in a radon-affected area alongside a View Plus, or a bedroom where you want no screen at all.</p>

<h2>Comparison table</h2>
<table>
<thead>
<tr><th>Model</th><th>Measures</th><th>Radon</th><th>Power</th><th>Connectivity</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings View Plus</strong></td><td>CO2, PM1, PM2.5, VOC, humidity, temperature, pressure</td><td>Yes</td><td>Batteries or USB</td><td>Wi-Fi (acts as hub)</td><td>Radon-affected homes, complete monitoring</td></tr>
<tr><td><strong>Netatmo Smart Indoor Air Quality Monitor</strong></td><td>CO2, humidity, temperature, noise</td><td>No</td><td>USB mains</td><td>Wi-Fi, Apple HomeKit</td><td>Bedrooms, knowing when to ventilate</td></tr>
<tr><td><strong>Aranet4 Home</strong></td><td>CO2, humidity, temperature, pressure</td><td>No</td><td>Batteries</td><td>Bluetooth</td><td>Reliable, portable CO2, home office</td></tr>
<tr><td><strong>Awair Element</strong></td><td>CO2, PM2.5, VOC, humidity, temperature</td><td>No</td><td>USB mains</td><td>Wi-Fi, local API</td><td>Asthma, allergies, Home Assistant</td></tr>
<tr><td><strong>Airthings Wave Plus</strong></td><td>CO2, VOC, humidity, temperature, pressure</td><td>Yes</td><td>Batteries</td><td>Bluetooth (optional hub)</td><td>Second room in a radon area</td></tr>
</tbody>
</table>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Buying a particle sensor thinking it measures CO2.</strong> Some entry-level monitors only measure PM2.5, temperature and humidity; the Govee H5106 is one example. They help with cooking smoke but will not tell you when to air a bedroom.</li>
<li><strong>Trusting an "eCO2" reading.</strong> A CO2 value estimated from a VOC sensor is not a measurement. Look for NDIR in the specifications.</li>
<li><strong>Judging radon on a single day.</strong> Daily swings are large: wait for several weeks of data before drawing conclusions, and use a passive detector if in doubt.</li>
<li><strong>Poor placement.</strong> Next to a window, above a radiator, in direct sun or beside the hob, readings will not reflect the air you breathe.</li>
<li><strong>Confusing measurement with action.</strong> A monitor cleans nothing: it tells you what to do. Plan the next step, whether that is airing rooms, servicing your ventilation or adding a purifier.</li>
</ul>

<h2>Setup and everyday use</h2>
<p>Place the monitor at breathing height, roughly 1 to 1.5 metres, at least a metre away from windows, doors, vents and heat sources. In a bedroom, a bedside table or chest of drawers works well as long as you are not breathing directly onto it. Give the device a few hours to settle after setup before trusting the readings.</p>
<p>Many NDIR CO2 sensors recalibrate automatically on the assumption that the room regularly gets fresh air, so ventilate at least once a day for this correction to work. For radon, put the monitor in the lowest occupied room of the house. If the average stays above the action level, contact your local authority or UKHSA for guidance and use a qualified radon remediation contractor: fixes usually involve sealing entry points and improving underfloor ventilation.</p>
<p>A connected monitor is most useful when linked to your other devices: switching a purifier on when PM2.5 rises, or sending a notification when CO2 passes 1,000 ppm. To pick a purifier to pair it with, see our <a href="/en/blog/guide-purificateur-air-2026">air purifier guide</a>.</p>

<h2>Our verdict</h2>
<ul>
<li><strong>Most complete:</strong> Airthings View Plus, the only model here that combines radon, fine particles, CO2 and VOCs.</li>
<li><strong>Best value:</strong> Netatmo Smart Indoor Air Quality Monitor, to know when to ventilate without fuss, with HomeKit.</li>
<li><strong>For reliable, portable CO2:</strong> Aranet4 Home, battery powered with an always-readable screen.</li>
<li><strong>For fine particles and smart home control:</strong> Awair Element, thanks to its local API.</li>
<li><strong>As a companion in a radon area:</strong> Airthings Wave Plus, battery powered and screen-free.</li>
</ul>
<p>See every available model on our <a href="/en/energie-domotique/capteurs-qualite-air">air quality monitors</a> page.</p>`,

    de: `<p>Ein Luftqualitätsmonitor zeigt Ihnen, wann Sie lüften, die Luft reinigen oder entfeuchten sollten, indem er CO2, Feinstaub PM2.5, flüchtige organische Verbindungen (VOC) und bei manchen Modellen Radon misst. Für die meisten Haushalte genügt ein Gerät mit echtem NDIR-CO2-Sensor; wer in einem Radon-Vorsorgegebiet wohnt, sollte zuerst zu einem Airthings-Monitor mit Radonmessung greifen.</p>
<p>Wir verbringen den Großteil des Tages in Innenräumen, und die Luft wird dort oft seltener ausgetauscht, als man denkt: Kochen, Kerzen, neue Möbel, Reinigungsmittel und schlicht das Atmen belasten die Raumluft unbemerkt. Dieser Ratgeber erklärt, welche Schadstoffe wichtig sind, wie Sie einen Monitor auswählen, und vergleicht fünf Modelle, die 2026 tatsächlich in Europa erhältlich sind – auf Basis von Herstellerangaben, veröffentlichten unabhängigen Testberichten und verifizierten Käuferbewertungen. Alle Modelle der Kategorie finden Sie auf unserer Seite <a href="/de/energie-domotique/capteurs-qualite-air">Luftqualitäts-Messgeräte</a>.</p>

<h2>Diese Schadstoffe lohnt es sich zu messen</h2>
<h3>CO2: der beste Indikator für Frischluft</h3>
<p>In den Konzentrationen, die in Wohnungen vorkommen, ist CO2 nicht giftig. Es ist aber der beste Anzeiger für den Luftaustausch: Je höher der Wert, desto öfter wurde die Raumluft bereits eingeatmet und desto mehr Feuchtigkeit und andere Schadstoffe sammeln sich an. Ein geschlossenes Schlafzimmer in der Nacht oder ein Homeoffice ohne Lüften sind typische Beispiele. Hersteller und Lüftungsratgeber verwenden meist folgende Orientierungswerte:</p>
<table>
<thead>
<tr><th>Gemessenes CO2</th><th>Bedeutung</th><th>Was tun</th></tr>
</thead>
<tbody>
<tr><td>Unter 800 ppm</td><td>Gut gelüftete Luft</td><td>Nichts Besonderes</td></tr>
<tr><td>800 bis 1.000 ppm</td><td>Ausreichender Luftaustausch</td><td>Bald lüften</td></tr>
<tr><td>1.000 bis 1.400 ppm</td><td>Unzureichender Luftaustausch</td><td>Einige Minuten stoßlüften</td></tr>
<tr><td>Über 1.400 ppm</td><td>Verbrauchte Luft</td><td>Sofort lüften und die Belüftung des Raums überdenken</td></tr>
</tbody>
</table>
<p>Wichtig: Nur ein <strong>NDIR-Sensor</strong> (nichtdispersiver Infrarotsensor) misst CO2 tatsächlich. Manche Geräte zeigen einen „eCO2“-Wert an, der aus dem VOC-Sensor errechnet wird – das ist eine Schätzung und kann stark danebenliegen. Alle Modelle in diesem Ratgeber nutzen einen NDIR-Sensor.</p>

<h3>PM2.5: Feinstaub</h3>
<p>Feinstaubpartikel PM2.5 mit weniger als 2,5 Mikrometern Durchmesser gelangen tief in die Atemwege. 2021 hat die WHO ihren Jahresrichtwert auf 5 µg/m³ gesenkt. In Innenräumen entstehen Spitzen vor allem beim Kochen (besonders beim scharfen Anbraten), durch Kerzen und Räucherstäbchen, Kaminöfen und Tabakrauch. Eine PM2.5-Messung lohnt sich, wenn jemand im Haushalt Asthma oder Allergien hat, Sie an einer stark befahrenen Straße wohnen oder einen Luftreiniger gezielt steuern möchten.</p>

<h3>VOC: flüchtige organische Verbindungen</h3>
<p>VOC werden von Farben, Lacken, Klebern, Spanplattenmöbeln, Reinigungsmitteln und Raumdüften abgegeben. Formaldehyd, eine der häufigsten Verbindungen, stuft die Internationale Agentur für Krebsforschung als krebserregend für den Menschen ein. Verbrauchergeräte messen <strong>Gesamt-VOC</strong>: Sie zeigen zuverlässig einen Anstieg nach Renovierung oder Großputz an, verraten aber weder die verantwortliche Verbindung noch speziell den Formaldehydgehalt. Sie dienen als Warnsignal, nicht als Diagnose. Emissionsarme Farben und Möbel sind der wirksamste Weg, VOC an der Quelle zu vermeiden.</p>

<h3>Radon: das unsichtbare Gas aus dem Boden</h3>
<p>Radon ist ein natürlich vorkommendes radioaktives Gas, das aus dem Untergrund aufsteigt, besonders in Granit- und manchen Mittelgebirgsregionen. Es dringt durch Risse und Leitungsdurchführungen ein und sammelt sich vor allem in Kellern und Erdgeschossen. Die WHO zählt es zu den wichtigsten Ursachen für Lungenkrebs nach dem Rauchen. In Deutschland gilt für Aufenthaltsräume ein Referenzwert von 300 Bq/m³ im Jahresmittel, und das Bundesamt für Strahlenschutz (BfS) informiert über Radon-Vorsorgegebiete. Radon schwankt stark von Tag zu Tag: Aussagekräftig ist nur ein Mittelwert über mehrere Wochen, und die Referenzmethode bleibt ein passives Exposimeter, das über mehrere Monate misst.</p>

<h3>Luftfeuchtigkeit und Temperatur</h3>
<p>Eine relative Luftfeuchtigkeit zwischen 40 und 60 % gilt allgemein als angenehm. Darunter trocknen die Schleimhäute aus; liegt sie dauerhaft über 60 bis 70 %, vermehren sich Milben und Schimmel. Zeigt Ihr Monitor regelmäßig hohe Werte, lesen Sie unseren <a href="/de/blog/deshumidificateur-connecte-guide">Ratgeber zu vernetzten Luftentfeuchtern</a>.</p>

<h2>Worauf Sie beim Kauf achten sollten</h2>
<ul>
<li><strong>Sensorausstattung:</strong> zuerst ein NDIR-CO2-Sensor; PM2.5, wenn Sie viel kochen, einen Kaminofen nutzen oder einen Luftreiniger betreiben; Radon, wenn Sie in einem Radon-Vorsorgegebiet oder in einem Haus mit Keller oder Schlafräumen im Erdgeschoss wohnen.</li>
<li><strong>Stromversorgung:</strong> Batteriegeräte lassen sich überall aufstellen und leicht umsetzen; Netzgeräte können häufiger messen und dauerhaft im WLAN bleiben.</li>
<li><strong>Verbindung:</strong> WLAN ermöglicht Fernabfrage und Benachrichtigungen. Ein reines Bluetooth-Gerät synchronisiert, wenn das Smartphone in der Nähe ist, oder über ein Gateway desselben Herstellers.</li>
<li><strong>Ökosystem:</strong> Prüfen Sie die Kompatibilität mit Ihren Systemen (Apple Home, Amazon Alexa, Google Home, Home Assistant), wenn Lüftung oder Luftreiniger automatisch reagieren sollen.</li>
<li><strong>Anzeige:</strong> Ein Display am Gerät zeigt die Werte auf einen Blick, ohne zum Handy zu greifen – im Alltag ein großer Vorteil.</li>
<li><strong>Anzahl der Räume:</strong> Ein Monitor misst nur den Raum, in dem er steht. Schlafzimmer und Wohnraum haben Vorrang.</li>
</ul>

<h2>Die 5 empfehlenswerten Monitore 2026</h2>
<h3>Airthings View Plus: der umfassendste</h3>
<p>Der <strong>Airthings View Plus</strong> ist heute das Spitzenmodell von Airthings. Er misst Radon, Feinstaub PM1 und PM2.5, CO2, VOC, Luftfeuchtigkeit, Temperatur und Luftdruck. Das E-Paper-Display zeigt die gewünschten Werte, ergänzt durch einen grün, gelb oder rot leuchtenden Ring. Er läuft mit sechs AA-Batterien bei einer angegebenen Laufzeit von etwa zwei Jahren oder per USB am Netz; angeschlossen dient er zugleich als WLAN-Hub für weitere Airthings-Monitore im Haus. App und Online-Dashboard zeigen Verläufe und Warnungen, kompatibel sind Amazon Alexa, Google Assistant und IFTTT.</p>
<p><strong>Stärken:</strong> Radon und Feinstaub in einem Gerät, NDIR-CO2, Batterie- oder Netzbetrieb. <strong>Schwächen:</strong> ein Premiumgerät, und Radon braucht mehrere Tage, bis ein brauchbarer Mittelwert vorliegt. <strong>Für wen:</strong> Häuser in Radon-Vorsorgegebieten und alle, die ein einziges Gerät für alles möchten.</p>

<h3>Netatmo Smart Indoor Air Quality Monitor: CO2 einfach im Blick</h3>
<p>Der <strong>Netatmo Smart Indoor Air Quality Monitor</strong>, auch Healthy Home Coach genannt, konzentriert sich auf das Wesentliche: CO2, Luftfeuchtigkeit, Temperatur und Geräuschpegel. Er wird per USB mit Strom versorgt, verbindet sich über WLAN und funktioniert mit der Netatmo-App ohne Abo. Profile für Baby, Asthmatiker oder allgemeine Nutzung passen Warnschwellen und Tipps an. Er ist mit Apple HomeKit kompatibel, sodass seine Werte in der Home-App und in Automationen erscheinen.</p>
<p><strong>Stärken:</strong> schlichtes Design, sehr einfache Einrichtung, HomeKit, klare Lüftungshinweise. <strong>Schwächen:</strong> keine Messung von Feinstaub, VOC oder Radon, kein Zahlendisplay am Gerät. <strong>Für wen:</strong> Schlaf- oder Kinderzimmer in Haushalten, die vor allem wissen wollen, wann gelüftet werden sollte.</p>

<h3>Aranet4 Home: die Referenz für CO2 im Batteriebetrieb</h3>
<p>Der in Lettland hergestellte <strong>Aranet4 Home</strong> ist ein kompakter CO2-Monitor, geschätzt für seinen NDIR-Sensor und das stets sichtbare E-Ink-Display. Zusätzlich misst er Temperatur, relative Luftfeuchtigkeit und Luftdruck. Dank E-Ink gibt der Hersteller mehrere Jahre Laufzeit mit zwei AA-Batterien an, abhängig vom Messintervall und der Bluetooth-Nutzung. Die Daten gehen per Bluetooth an die Aranet-App, die den Verlauf speichert.</p>
<p><strong>Stärken:</strong> als zuverlässig geltende CO2-Messung, außergewöhnliche Batterielaufzeit, leicht von Raum zu Raum mitzunehmen, sofort ablesbar. <strong>Schwächen:</strong> kein Feinstaub, keine VOC, kein Radon; kein eigenes WLAN, daher ohne Basisstation keine Fernwarnungen. <strong>Für wen:</strong> Homeoffice, Schlafzimmer und alle, die eine ernsthafte CO2-Messung überallhin mitnehmen möchten.</p>

<h3>Awair Element: Feinstaub und Smart-Home-Anbindung</h3>
<p>Der <strong>Awair Element</strong> misst CO2, VOC, PM2.5, Temperatur und Luftfeuchtigkeit und fasst alles in einem Luftqualitätswert von 0 bis 100 auf der Vorderseite zusammen. Er verbindet sich per WLAN und arbeitet mit Amazon Alexa und Google Assistant zusammen. Für Smart-Home-Fans ist die lokale API der größte Vorteil: Die offizielle Home-Assistant-Integration nutzt sie, um Luftreiniger oder Lüftung ohne Cloud zu steuern.</p>
<p><strong>Stärken:</strong> CO2, PM2.5 und VOC kombiniert, gut lesbarer Wert, lokale API. <strong>Schwächen:</strong> kein Radon, nur Netzbetrieb, und die Verfügbarkeit in Europa schwankt je nach Land und Händler. <strong>Für wen:</strong> Haushalte mit Asthma oder Allergien, Homeoffice und Home-Assistant-Nutzer.</p>

<h3>Airthings Wave Plus: Radon im Batteriebetrieb, ohne Display</h3>
<p>Der <strong>Airthings Wave Plus</strong> misst Radon, CO2, VOC, Luftfeuchtigkeit, Temperatur und Luftdruck. Er läuft mit Batterien und nutzt Bluetooth; eine Handbewegung vor dem Gerät lässt einen farbigen Ring aufleuchten, der die Luftqualität zusammenfasst. Für die Fernabfrage braucht es einen Airthings-Hub oder einen per Netz betriebenen View Plus. Airthings stellt inzwischen den View Plus in den Vordergrund, der Wave Plus wird aber weiterhin von vielen europäischen Händlern angeboten.</p>
<p><strong>Stärken:</strong> Radon und CO2 vereint, Batteriebetrieb, unauffällig. <strong>Schwächen:</strong> kein Feinstaub, kein Zahlendisplay, ohne Hub nur Bluetooth. <strong>Für wen:</strong> ein zweiter Raum im Radon-Vorsorgegebiet als Ergänzung zum View Plus oder ein Schlafzimmer ganz ohne Display.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Modell</th><th>Messwerte</th><th>Radon</th><th>Stromversorgung</th><th>Verbindung</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings View Plus</strong></td><td>CO2, PM1, PM2.5, VOC, Feuchte, Temperatur, Luftdruck</td><td>Ja</td><td>Batterien oder USB</td><td>WLAN (dient als Hub)</td><td>Radongebiete, Komplettüberwachung</td></tr>
<tr><td><strong>Netatmo Smart Indoor Air Quality Monitor</strong></td><td>CO2, Feuchte, Temperatur, Lärm</td><td>Nein</td><td>USB-Netzteil</td><td>WLAN, Apple HomeKit</td><td>Schlafzimmer, Lüftungshinweise</td></tr>
<tr><td><strong>Aranet4 Home</strong></td><td>CO2, Feuchte, Temperatur, Luftdruck</td><td>Nein</td><td>Batterien</td><td>Bluetooth</td><td>Zuverlässiges, mobiles CO2, Homeoffice</td></tr>
<tr><td><strong>Awair Element</strong></td><td>CO2, PM2.5, VOC, Feuchte, Temperatur</td><td>Nein</td><td>USB-Netzteil</td><td>WLAN, lokale API</td><td>Asthma, Allergien, Home Assistant</td></tr>
<tr><td><strong>Airthings Wave Plus</strong></td><td>CO2, VOC, Feuchte, Temperatur, Luftdruck</td><td>Ja</td><td>Batterien</td><td>Bluetooth (Hub optional)</td><td>Zweiter Raum im Radongebiet</td></tr>
</tbody>
</table>

<h2>Typische Fehler</h2>
<ul>
<li><strong>Einen Feinstaubsensor kaufen und CO2 erwarten.</strong> Manche Einsteigergeräte messen nur PM2.5, Temperatur und Luftfeuchtigkeit – etwa der Govee H5106. Gegen Kochdunst sind sie nützlich, sagen Ihnen aber nicht, wann das Schlafzimmer gelüftet werden muss.</li>
<li><strong>Einem „eCO2“-Wert vertrauen.</strong> Ein aus dem VOC-Sensor geschätzter CO2-Wert ist keine Messung. Achten Sie im Datenblatt auf NDIR.</li>
<li><strong>Radon nach einem Tag beurteilen.</strong> Die Tagesschwankungen sind groß: Warten Sie mehrere Wochen Daten ab und nutzen Sie im Zweifel ein passives Exposimeter.</li>
<li><strong>Falsche Platzierung.</strong> Neben dem Fenster, über der Heizung, in der Sonne oder neben dem Herd spiegeln die Werte nicht die Luft wider, die Sie atmen.</li>
<li><strong>Messen mit Handeln verwechseln.</strong> Ein Monitor reinigt nichts, er zeigt, was zu tun ist. Planen Sie den nächsten Schritt: lüften, die Lüftungsanlage warten lassen oder einen Luftreiniger ergänzen.</li>
</ul>

<h2>Aufstellung und Nutzung im Alltag</h2>
<p>Stellen Sie den Monitor auf Atemhöhe auf, etwa 1 bis 1,5 Meter, mindestens einen Meter entfernt von Fenstern, Türen, Lüftungsauslässen und Wärmequellen. Im Schlafzimmer eignen sich Nachttisch oder Kommode, solange Sie nicht direkt darauf atmen. Geben Sie dem Gerät nach der Einrichtung einige Stunden Zeit, bevor Sie den Werten vertrauen.</p>
<p>Viele NDIR-CO2-Sensoren kalibrieren sich automatisch unter der Annahme, dass der Raum regelmäßig Frischluft bekommt – lüften Sie also mindestens einmal täglich, damit diese Korrektur funktioniert. Für Radon gehört der Monitor in den untersten bewohnten Raum des Hauses. Liegt der Mittelwert dauerhaft über dem Referenzwert, informieren Sie sich bei der zuständigen Landesbehörde oder beim BfS und ziehen Sie eine Fachkraft für Radonschutz hinzu: Abhilfe besteht meist im Abdichten von Eintrittsstellen und einer besseren Belüftung.</p>
<p>Am meisten bringt ein vernetzter Monitor im Zusammenspiel mit anderen Geräten: Luftreiniger einschalten, wenn PM2.5 steigt, oder eine Benachrichtigung, sobald CO2 1.000 ppm überschreitet. Den passenden Luftreiniger finden Sie in unserem <a href="/de/blog/guide-purificateur-air-2026">Luftreiniger-Ratgeber</a>.</p>

<h2>Unser Fazit</h2>
<ul>
<li><strong>Am umfassendsten:</strong> Airthings View Plus, das einzige Modell hier, das Radon, Feinstaub, CO2 und VOC vereint.</li>
<li><strong>Bestes Preis-Leistungs-Verhältnis:</strong> Netatmo Smart Indoor Air Quality Monitor, um ohne Aufwand zu wissen, wann gelüftet werden sollte, mit HomeKit.</li>
<li><strong>Für zuverlässiges, mobiles CO2:</strong> Aranet4 Home, batteriebetrieben mit stets ablesbarem Display.</li>
<li><strong>Für Feinstaub und Smart Home:</strong> Awair Element dank lokaler API.</li>
<li><strong>Als Ergänzung im Radongebiet:</strong> Airthings Wave Plus, batteriebetrieben und ohne Display.</li>
</ul>
<p>Alle verfügbaren Modelle finden Sie auf unserer Seite <a href="/de/energie-domotique/capteurs-qualite-air">Luftqualitäts-Messgeräte</a>.</p>`,

    es: `<p>Un medidor de calidad del aire interior te indica cuándo ventilar, purificar o deshumidificar, midiendo el CO2, las partículas finas PM2.5, los compuestos orgánicos volátiles (COV) y, en algunos modelos, el radón. Para la mayoría de los hogares basta con un aparato con un auténtico sensor de CO2 NDIR; si vives en una zona con radón, la prioridad es un monitor Airthings que mida este gas.</p>
<p>Pasamos la mayor parte del día en interiores, y el aire se renueva a menudo menos de lo que creemos: cocinar, las velas, los muebles nuevos, los productos de limpieza y la propia respiración cargan el ambiente sin que nos demos cuenta. Esta guía explica qué contaminantes importan, cómo elegir un medidor y compara cinco modelos que se venden realmente en Europa en 2026, a partir de las fichas técnicas de los fabricantes, análisis independientes publicados y opiniones de compradores verificados. Encontrarás todos los modelos de la categoría en nuestra página de <a href="/es/energie-domotique/capteurs-qualite-air">sensores de calidad del aire</a>.</p>

<h2>Los contaminantes que conviene vigilar en casa</h2>
<h3>CO2: el mejor indicador de renovación del aire</h3>
<p>En las concentraciones habituales de una vivienda, el CO2 no es tóxico. Pero es el mejor testigo de la ventilación: cuanto más sube, más veces se ha respirado ya el aire de la habitación y más se acumulan la humedad y otros contaminantes. Un dormitorio cerrado durante toda la noche o un despacho en casa sin ventilar son ejemplos típicos. Los fabricantes y las guías de ventilación suelen utilizar estas referencias:</p>
<table>
<thead>
<tr><th>CO2 medido</th><th>Interpretación</th><th>Qué hacer</th></tr>
</thead>
<tbody>
<tr><td>Menos de 800 ppm</td><td>Aire bien renovado</td><td>Nada en particular</td></tr>
<tr><td>800 a 1.000 ppm</td><td>Renovación aceptable</td><td>Ventilar en breve</td></tr>
<tr><td>1.000 a 1.400 ppm</td><td>Renovación insuficiente</td><td>Abrir la ventana unos minutos</td></tr>
<tr><td>Más de 1.400 ppm</td><td>Aire viciado</td><td>Ventilar ya y revisar la ventilación de la estancia</td></tr>
</tbody>
</table>
<p>Un punto clave: solo un sensor <strong>NDIR</strong> (infrarrojo no dispersivo) mide realmente el CO2. Algunos aparatos muestran un valor «eCO2» calculado a partir de su sensor de COV; es una estimación y puede alejarse mucho de la realidad. Todos los modelos de esta guía usan un sensor NDIR.</p>

<h3>PM2.5: las partículas finas</h3>
<p>Las partículas PM2.5, de menos de 2,5 micrómetros, penetran profundamente en las vías respiratorias. En 2021 la OMS rebajó su valor guía anual a 5 µg/m³. En interiores, los picos proceden sobre todo de cocinar (sobre todo a fuego fuerte), de velas e incienso, de estufas de leña y chimeneas, y del tabaco. Medir las PM2.5 resulta útil si alguien en casa tiene asma o alergias, si vives junto a una vía con mucho tráfico o si quieres controlar un purificador con datos reales.</p>

<h3>COV: los compuestos orgánicos volátiles</h3>
<p>Los COV proceden de pinturas, barnices, colas, muebles de aglomerado, productos de limpieza y ambientadores. El formaldehído, uno de los más frecuentes, está clasificado como cancerígeno para los humanos por la Agencia Internacional para la Investigación del Cáncer. Los sensores domésticos miden <strong>COV totales</strong>: detectan bien una subida tras una reforma o una limpieza a fondo, pero no indican qué compuesto la causa ni el nivel concreto de formaldehído. Sirven como aviso, no como diagnóstico. Elegir pinturas y muebles de bajas emisiones es la forma más eficaz de reducir los COV en origen.</p>

<h3>Radón: el gas invisible del subsuelo</h3>
<p>El radón es un gas radiactivo natural que asciende desde el terreno, especialmente en zonas graníticas. Entra por grietas y pasos de tuberías y se acumula sobre todo en sótanos y plantas bajas. La OMS lo considera una de las principales causas de cáncer de pulmón después del tabaco. En España, el nivel de referencia para viviendas es de 300 Bq/m³ de media anual, y el Consejo de Seguridad Nuclear (CSN) publica un mapa del potencial de radón. El radón varía mucho de un día a otro: solo la media de varias semanas tiene sentido, y el método de referencia sigue siendo un detector pasivo colocado durante varios meses.</p>

<h3>Humedad y temperatura</h3>
<p>Una humedad relativa entre el 40 y el 60 % se considera, en general, confortable. Por debajo se resecan las mucosas; por encima del 60-70 % de forma prolongada proliferan ácaros y moho. Si tu medidor muestra valores altos con frecuencia, consulta nuestra <a href="/es/blog/deshumidificateur-connecte-guide">guía del deshumidificador inteligente</a>.</p>

<h2>Criterios para elegir bien</h2>
<ul>
<li><strong>Sensores incluidos:</strong> primero un sensor de CO2 NDIR; PM2.5 si cocinas mucho, usas estufa de leña o tienes purificador; radón si tu municipio tiene potencial de radón o vives en una casa con sótano o dormitorios en planta baja.</li>
<li><strong>Alimentación:</strong> los modelos a pilas se colocan en cualquier sitio y se mueven fácilmente; los de corriente pueden actualizar las mediciones con más frecuencia y permanecer siempre conectados por wifi.</li>
<li><strong>Conectividad:</strong> el wifi permite consultar los datos a distancia y recibir alertas. Un modelo solo Bluetooth sincroniza cuando el móvil está cerca, o mediante una pasarela de la misma marca.</li>
<li><strong>Ecosistema:</strong> comprueba la compatibilidad con lo que ya usas (Apple Casa, Amazon Alexa, Google Home, Home Assistant) si quieres activar la ventilación o un purificador automáticamente.</li>
<li><strong>Pantalla:</strong> una pantalla en el propio aparato permite leer los valores de un vistazo sin sacar el móvil, algo que se agradece a diario.</li>
<li><strong>Número de estancias:</strong> un medidor solo mide la habitación en la que está. El dormitorio y la sala de estar principal son los dos lugares prioritarios.</li>
</ul>

<h2>Los 5 medidores a tener en cuenta en 2026</h2>
<h3>Airthings View Plus: el más completo</h3>
<p>El <strong>Airthings View Plus</strong> es hoy el modelo estrella de Airthings. Mide radón, partículas PM1 y PM2.5, CO2, COV, humedad, temperatura y presión atmosférica. Su pantalla de tinta electrónica muestra los valores elegidos, junto con un anillo luminoso verde, amarillo o rojo. Funciona con seis pilas AA, con una autonomía declarada de unos dos años, o conectado por USB; enchufado, actúa además como pasarela wifi para otros monitores Airthings de la casa. La aplicación y el panel web muestran el historial y las alertas, y es compatible con Amazon Alexa, Google Assistant e IFTTT.</p>
<p><strong>Puntos fuertes:</strong> radón y partículas finas en un solo aparato, CO2 por NDIR, pilas o corriente. <strong>Limitaciones:</strong> es un equipo de gama alta, y el radón necesita varios días para ofrecer una media útil. <strong>Para quién:</strong> viviendas en zonas con radón y quien quiera un único aparato que lo vigile todo.</p>

<h3>Netatmo Smart Indoor Air Quality Monitor: la forma más sencilla de controlar el CO2</h3>
<p>El <strong>Netatmo Smart Indoor Air Quality Monitor</strong>, también llamado Healthy Home Coach, se centra en lo esencial: CO2, humedad, temperatura y nivel de ruido. Se alimenta por USB, se conecta por wifi y funciona con la app de Netatmo sin suscripción. Ofrece perfiles para bebé, persona asmática o uso general que ajustan los umbrales de alerta y los consejos. Es compatible con Apple HomeKit, por lo que sus datos aparecen en la app Casa y en automatizaciones.</p>
<p><strong>Puntos fuertes:</strong> diseño sobrio, instalación muy sencilla, HomeKit, avisos claros para saber cuándo ventilar. <strong>Limitaciones:</strong> no mide partículas finas, COV ni radón, y no tiene pantalla numérica. <strong>Para quién:</strong> un dormitorio o el cuarto de los niños, en hogares que sobre todo quieren saber cuándo abrir las ventanas.</p>

<h3>Aranet4 Home: la referencia del CO2 a pilas</h3>
<p>Fabricado en Letonia, el <strong>Aranet4 Home</strong> es un medidor de CO2 compacto, apreciado por su sensor NDIR y su pantalla de tinta electrónica siempre visible. También mide temperatura, humedad relativa y presión atmosférica. Gracias a esa pantalla, el fabricante anuncia varios años de autonomía con dos pilas AA, según el intervalo de medición y el uso del Bluetooth. Envía los datos por Bluetooth a la app de Aranet, que guarda el historial.</p>
<p><strong>Puntos fuertes:</strong> medición de CO2 con fama de fiable, autonomía excepcional, fácil de llevar de una habitación a otra, lectura inmediata. <strong>Limitaciones:</strong> sin partículas finas, COV ni radón; sin wifi propio, por lo que no hay alertas a distancia sin estación base. <strong>Para quién:</strong> teletrabajo, dormitorios y quien quiera una medición de CO2 seria que pueda llevar a cualquier parte.</p>

<h3>Awair Element: partículas finas e integración domótica</h3>
<p>El <strong>Awair Element</strong> mide CO2, COV, PM2.5, temperatura y humedad, y lo resume en una puntuación de calidad del aire de 0 a 100 visible en el frontal. Se conecta por wifi y es compatible con Amazon Alexa y Google Assistant. Su gran baza para los aficionados a la domótica es su API local, utilizada por la integración oficial de Home Assistant, que permite controlar un purificador o la ventilación sin pasar por la nube.</p>
<p><strong>Puntos fuertes:</strong> CO2, PM2.5 y COV juntos, puntuación clara, API local. <strong>Limitaciones:</strong> sin radón, solo funciona enchufado, y su disponibilidad en Europa puede ser irregular según el país y el distribuidor. <strong>Para quién:</strong> hogares con personas asmáticas o alérgicas, despachos en casa y usuarios de Home Assistant.</p>

<h3>Airthings Wave Plus: radón a pilas, sin pantalla</h3>
<p>El <strong>Airthings Wave Plus</strong> mide radón, CO2, COV, humedad, temperatura y presión atmosférica. Funciona con pilas y usa Bluetooth; al pasar la mano por delante se ilumina un anillo de color que resume la calidad del aire. Para consultar los datos a distancia hace falta una pasarela Airthings o un View Plus enchufado. Airthings da ahora prioridad al View Plus, pero el Wave Plus sigue a la venta en muchos distribuidores europeos.</p>
<p><strong>Puntos fuertes:</strong> radón y CO2 juntos, a pilas, discreto. <strong>Limitaciones:</strong> sin partículas finas ni pantalla numérica, solo Bluetooth sin pasarela. <strong>Para quién:</strong> una segunda estancia en zona con radón, como complemento de un View Plus, o un dormitorio sin ninguna pantalla.</p>

<h2>Tabla comparativa</h2>
<table>
<thead>
<tr><th>Modelo</th><th>Mediciones</th><th>Radón</th><th>Alimentación</th><th>Conectividad</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings View Plus</strong></td><td>CO2, PM1, PM2.5, COV, humedad, temperatura, presión</td><td>Sí</td><td>Pilas o USB</td><td>Wifi (actúa como pasarela)</td><td>Viviendas con radón, control completo</td></tr>
<tr><td><strong>Netatmo Smart Indoor Air Quality Monitor</strong></td><td>CO2, humedad, temperatura, ruido</td><td>No</td><td>USB a corriente</td><td>Wifi, Apple HomeKit</td><td>Dormitorio, saber cuándo ventilar</td></tr>
<tr><td><strong>Aranet4 Home</strong></td><td>CO2, humedad, temperatura, presión</td><td>No</td><td>Pilas</td><td>Bluetooth</td><td>CO2 fiable y portátil, teletrabajo</td></tr>
<tr><td><strong>Awair Element</strong></td><td>CO2, PM2.5, COV, humedad, temperatura</td><td>No</td><td>USB a corriente</td><td>Wifi, API local</td><td>Asma, alergias, Home Assistant</td></tr>
<tr><td><strong>Airthings Wave Plus</strong></td><td>CO2, COV, humedad, temperatura, presión</td><td>Sí</td><td>Pilas</td><td>Bluetooth (pasarela opcional)</td><td>Segunda estancia en zona con radón</td></tr>
</tbody>
</table>

<h2>Errores que conviene evitar</h2>
<ul>
<li><strong>Comprar un sensor de partículas creyendo que mide CO2.</strong> Algunos medidores de gama de entrada solo miden PM2.5, temperatura y humedad; es el caso del Govee H5106, por ejemplo. Son útiles contra el humo de cocina, pero no te dirán cuándo ventilar un dormitorio.</li>
<li><strong>Fiarse de un valor «eCO2».</strong> Un CO2 estimado a partir de un sensor de COV no es una medición. Busca la mención NDIR en la ficha técnica.</li>
<li><strong>Juzgar el radón en un solo día.</strong> Las variaciones diarias son grandes: espera varias semanas de datos antes de sacar conclusiones y usa un detector pasivo si tienes dudas.</li>
<li><strong>Colocarlo mal.</strong> Junto a una ventana, sobre un radiador, al sol o al lado de la cocina, las mediciones no reflejan el aire que respiras.</li>
<li><strong>Confundir medir con actuar.</strong> Un medidor no purifica nada: te dice qué hacer. Prevé el siguiente paso, ya sea ventilar, revisar la ventilación mecánica o añadir un purificador.</li>
</ul>

<h2>Instalación y uso diario</h2>
<p>Coloca el medidor a la altura de la respiración, entre 1 y 1,5 metros aproximadamente, a un metro como mínimo de ventanas, puertas, rejillas de ventilación y fuentes de calor. En un dormitorio sirven la mesilla o la cómoda, siempre que no respires directamente sobre él. Deja que el aparato se estabilice unas horas tras la instalación antes de fiarte de los valores.</p>
<p>Muchos sensores de CO2 NDIR se recalibran automáticamente suponiendo que la habitación recibe aire fresco con regularidad, así que ventila al menos una vez al día para que esa corrección funcione. Para el radón, instala el medidor en la estancia habitada más baja de la casa. Si la media se mantiene por encima del nivel de referencia, infórmate a través del CSN o de las autoridades de tu comunidad autónoma y recurre a un profesional especializado: las soluciones pasan normalmente por sellar los puntos de entrada y mejorar la ventilación.</p>
<p>Un medidor conectado da lo mejor de sí combinado con otros aparatos: encender un purificador cuando suben las PM2.5 o recibir un aviso cuando el CO2 supera las 1.000 ppm. Para elegir el purificador adecuado, consulta nuestra <a href="/es/blog/guide-purificateur-air-2026">guía de purificadores de aire</a>.</p>

<h2>Nuestro veredicto</h2>
<ul>
<li><strong>El más completo:</strong> Airthings View Plus, el único de esta selección que reúne radón, partículas finas, CO2 y COV.</li>
<li><strong>La mejor relación calidad-precio:</strong> Netatmo Smart Indoor Air Quality Monitor, para saber cuándo ventilar sin complicaciones, con HomeKit.</li>
<li><strong>Para un CO2 fiable y portátil:</strong> Aranet4 Home, a pilas y con pantalla siempre legible.</li>
<li><strong>Para partículas finas y domótica:</strong> Awair Element, gracias a su API local.</li>
<li><strong>Como complemento en zona con radón:</strong> Airthings Wave Plus, a pilas y sin pantalla.</li>
</ul>
<p>Consulta todos los modelos disponibles en nuestra página de <a href="/es/energie-domotique/capteurs-qualite-air">sensores de calidad del aire</a>.</p>`,

    it: `<p>Un monitor della qualità dell'aria interna ti dice quando arieggiare, purificare o deumidificare, misurando CO2, polveri sottili PM2.5, composti organici volatili (COV) e, su alcuni modelli, il radon. Per la maggior parte delle case basta un apparecchio con un vero sensore di CO2 NDIR; se abiti in una zona a rischio radon, la priorità è un monitor Airthings che misuri questo gas.</p>
<p>Trascorriamo gran parte della giornata al chiuso, e l'aria viene spesso ricambiata meno di quanto pensiamo: cucinare, candele, mobili nuovi, prodotti per la pulizia e il semplice respirare la appesantiscono senza che ce ne accorgiamo. Questa guida spiega quali inquinanti contano, come scegliere un monitor e mette a confronto cinque modelli realmente in vendita in Europa nel 2026, sulla base delle schede tecniche dei produttori, di recensioni indipendenti pubblicate e dei pareri di acquirenti verificati. Trovi tutti i modelli della categoria nella nostra pagina dedicata ai <a href="/it/energie-domotique/capteurs-qualite-air">sensori di qualità dell'aria</a>.</p>

<h2>Gli inquinanti da tenere d'occhio in casa</h2>
<h3>CO2: il miglior indicatore del ricambio d'aria</h3>
<p>Alle concentrazioni presenti in un'abitazione la CO2 non è tossica. È però il miglior indicatore della ventilazione: più sale, più l'aria della stanza è già stata respirata e più si accumulano umidità e altri inquinanti. Una camera chiusa occupata tutta la notte o uno studio in casa senza ricambio d'aria sono esempi tipici. Produttori e guide sulla ventilazione usano in genere questi riferimenti:</p>
<table>
<thead>
<tr><th>CO2 misurata</th><th>Significato</th><th>Cosa fare</th></tr>
</thead>
<tbody>
<tr><td>Meno di 800 ppm</td><td>Aria ben ricambiata</td><td>Nulla di particolare</td></tr>
<tr><td>Da 800 a 1.000 ppm</td><td>Ricambio accettabile</td><td>Arieggiare a breve</td></tr>
<tr><td>Da 1.000 a 1.400 ppm</td><td>Ricambio insufficiente</td><td>Aprire la finestra qualche minuto</td></tr>
<tr><td>Oltre 1.400 ppm</td><td>Aria viziata</td><td>Arieggiare subito e rivedere la ventilazione della stanza</td></tr>
</tbody>
</table>
<p>Punto fondamentale: solo un sensore <strong>NDIR</strong> (infrarosso non dispersivo) misura davvero la CO2. Alcuni apparecchi mostrano un valore «eCO2» calcolato dal sensore di COV: è una stima e può discostarsi molto dalla realtà. Tutti i modelli di questa guida usano un sensore NDIR.</p>

<h3>PM2.5: le polveri sottili</h3>
<p>Le particelle PM2.5, con diametro inferiore a 2,5 micrometri, penetrano in profondità nelle vie respiratorie. Nel 2021 l'OMS ha abbassato il proprio valore guida annuale a 5 µg/m³. In casa i picchi derivano soprattutto dalla cottura (in particolare a fuoco vivo), da candele e incenso, da stufe a legna e caminetti, e dal fumo di tabacco. Misurare il PM2.5 è utile se in famiglia c'è chi soffre di asma o allergie, se abiti vicino a una strada trafficata o se vuoi gestire un purificatore con dati reali.</p>

<h3>COV: i composti organici volatili</h3>
<p>I COV vengono rilasciati da vernici, colle, mobili in truciolato, detergenti e profumatori per ambienti. La formaldeide, tra i più diffusi, è classificata come cancerogena per l'uomo dall'Agenzia internazionale per la ricerca sul cancro. I sensori domestici misurano i <strong>COV totali</strong>: segnalano bene un aumento dopo lavori o pulizie intense, ma non indicano quale composto sia responsabile né il livello specifico di formaldeide. Servono come campanello d'allarme, non come diagnosi. Scegliere vernici e arredi a basse emissioni è il modo più efficace per ridurre i COV alla fonte.</p>

<h3>Radon: il gas invisibile che sale dal suolo</h3>
<p>Il radon è un gas radioattivo naturale che risale dal terreno, in particolare nelle zone di origine vulcanica e granitica. Entra da crepe e passaggi delle tubature e si accumula soprattutto in seminterrati e piani terra. L'OMS lo considera una delle principali cause di tumore al polmone dopo il fumo. In Italia il livello di riferimento per le abitazioni esistenti è di 300 Bq/m³ in media annua, e le regioni individuano le aree prioritarie a rischio radon. Il radon varia molto da un giorno all'altro: conta solo la media su più settimane, e il metodo di riferimento resta un dosimetro passivo lasciato in posa per diversi mesi.</p>

<h3>Umidità e temperatura</h3>
<p>Un'umidità relativa tra il 40 e il 60 % è generalmente considerata confortevole. Al di sotto le mucose si seccano; oltre il 60-70 % in modo prolungato proliferano acari e muffe. Se il tuo monitor segna spesso valori elevati, consulta la nostra <a href="/it/blog/deshumidificateur-connecte-guide">guida al deumidificatore smart</a>.</p>

<h2>Come scegliere</h2>
<ul>
<li><strong>Sensori presenti:</strong> prima di tutto un sensore di CO2 NDIR; il PM2.5 se cucini molto, usi una stufa a legna o un purificatore; il radon se il tuo comune è in un'area a rischio o vivi in una casa con seminterrato o camere al piano terra.</li>
<li><strong>Alimentazione:</strong> i modelli a batteria si posizionano ovunque e si spostano facilmente; quelli a rete possono aggiornare le misure più spesso e restare sempre connessi in Wi-Fi.</li>
<li><strong>Connettività:</strong> il Wi-Fi permette di consultare i dati a distanza e ricevere avvisi. Un modello solo Bluetooth sincronizza quando lo smartphone è vicino, oppure tramite un gateway della stessa marca.</li>
<li><strong>Ecosistema:</strong> verifica la compatibilità con ciò che usi già (Apple Casa, Amazon Alexa, Google Home, Home Assistant) se vuoi attivare automaticamente la ventilazione o un purificatore.</li>
<li><strong>Display:</strong> uno schermo sull'apparecchio consente di leggere i valori a colpo d'occhio senza prendere il telefono, cosa che nella vita quotidiana conta molto.</li>
<li><strong>Numero di stanze:</strong> un monitor misura solo la stanza in cui si trova. Camera da letto e soggiorno sono le due posizioni prioritarie.</li>
</ul>

<h2>I 5 monitor da considerare nel 2026</h2>
<h3>Airthings View Plus: il più completo</h3>
<p>L'<strong>Airthings View Plus</strong> è oggi il modello di punta di Airthings. Misura radon, particolato PM1 e PM2.5, CO2, COV, umidità, temperatura e pressione atmosferica. Il display e-paper mostra i valori scelti, insieme a un anello luminoso verde, giallo o rosso. Funziona con sei batterie AA, con un'autonomia dichiarata di circa due anni, oppure alimentato via USB; collegato alla rete, fa anche da gateway Wi-Fi per altri monitor Airthings della casa. App e dashboard online mostrano storico e avvisi, con compatibilità Amazon Alexa, Google Assistant e IFTTT.</p>
<p><strong>Punti di forza:</strong> radon e polveri sottili in un unico apparecchio, CO2 con sensore NDIR, batteria o rete. <strong>Limiti:</strong> è un prodotto di fascia alta, e il radon richiede diversi giorni prima di fornire una media utile. <strong>Per chi:</strong> case in zone a rischio radon e chi vuole un solo apparecchio che controlli tutto.</p>

<h3>Netatmo Smart Indoor Air Quality Monitor: il modo più semplice per seguire la CO2</h3>
<p>Il <strong>Netatmo Smart Indoor Air Quality Monitor</strong>, noto anche come Healthy Home Coach, si concentra sull'essenziale: CO2, umidità, temperatura e livello di rumore. Si alimenta via USB, si collega in Wi-Fi e funziona con l'app Netatmo senza abbonamento. I profili per neonato, persona asmatica o uso generale adattano soglie di avviso e consigli. È compatibile con Apple HomeKit, quindi i suoi dati compaiono nell'app Casa e nelle automazioni.</p>
<p><strong>Punti di forza:</strong> design sobrio, installazione molto semplice, HomeKit, avvisi chiari su quando arieggiare. <strong>Limiti:</strong> non misura polveri sottili, COV né radon, e non ha un display numerico. <strong>Per chi:</strong> camera da letto o cameretta, in famiglie che vogliono soprattutto sapere quando aprire le finestre.</p>

<h3>Aranet4 Home: il riferimento per la CO2 a batteria</h3>
<p>Prodotto in Lettonia, l'<strong>Aranet4 Home</strong> è un monitor di CO2 compatto, apprezzato per il sensore NDIR e il display e-ink sempre visibile. Misura anche temperatura, umidità relativa e pressione atmosferica. Grazie all'e-ink, il produttore indica diversi anni di autonomia con due batterie AA, a seconda dell'intervallo di misura e dell'uso del Bluetooth. Invia i dati via Bluetooth all'app Aranet, che conserva lo storico.</p>
<p><strong>Punti di forza:</strong> misura della CO2 con fama di affidabilità, autonomia eccezionale, facile da spostare da una stanza all'altra, lettura immediata. <strong>Limiti:</strong> niente polveri sottili, COV né radon; nessun Wi-Fi integrato, quindi niente avvisi a distanza senza stazione base. <strong>Per chi:</strong> smart working, camere da letto e chi vuole una misura seria della CO2 da portare ovunque.</p>

<h3>Awair Element: polveri sottili e integrazione domotica</h3>
<p>L'<strong>Awair Element</strong> misura CO2, COV, PM2.5, temperatura e umidità, e riassume tutto in un punteggio di qualità dell'aria da 0 a 100 visibile sul frontale. Si collega in Wi-Fi ed è compatibile con Amazon Alexa e Google Assistant. Il suo asso nella manica per gli appassionati di domotica è l'API locale, usata dall'integrazione ufficiale di Home Assistant, che consente di comandare un purificatore o la ventilazione senza passare dal cloud.</p>
<p><strong>Punti di forza:</strong> CO2, PM2.5 e COV insieme, punteggio leggibile, API locale. <strong>Limiti:</strong> niente radon, solo alimentazione a rete, e una disponibilità in Europa a volte discontinua a seconda del paese e del rivenditore. <strong>Per chi:</strong> famiglie con persone asmatiche o allergiche, studi in casa e utenti di Home Assistant.</p>

<h3>Airthings Wave Plus: radon a batteria, senza display</h3>
<p>L'<strong>Airthings Wave Plus</strong> misura radon, CO2, COV, umidità, temperatura e pressione atmosferica. Funziona a batteria e usa il Bluetooth; passando la mano davanti all'apparecchio si accende un anello colorato che riassume la qualità dell'aria. Per consultare i dati a distanza serve un hub Airthings o un View Plus collegato alla rete. Airthings oggi mette in primo piano il View Plus, ma il Wave Plus resta in vendita presso molti rivenditori europei.</p>
<p><strong>Punti di forza:</strong> radon e CO2 insieme, a batteria, discreto. <strong>Limiti:</strong> niente polveri sottili, nessun display numerico, solo Bluetooth senza hub. <strong>Per chi:</strong> una seconda stanza in zona a rischio radon, accanto a un View Plus, o una camera in cui non si vuole alcuno schermo.</p>

<h2>Tabella comparativa</h2>
<table>
<thead>
<tr><th>Modello</th><th>Misure</th><th>Radon</th><th>Alimentazione</th><th>Connettività</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings View Plus</strong></td><td>CO2, PM1, PM2.5, COV, umidità, temperatura, pressione</td><td>Sì</td><td>Batterie o USB</td><td>Wi-Fi (fa da gateway)</td><td>Case a rischio radon, controllo completo</td></tr>
<tr><td><strong>Netatmo Smart Indoor Air Quality Monitor</strong></td><td>CO2, umidità, temperatura, rumore</td><td>No</td><td>USB a rete</td><td>Wi-Fi, Apple HomeKit</td><td>Camera da letto, sapere quando arieggiare</td></tr>
<tr><td><strong>Aranet4 Home</strong></td><td>CO2, umidità, temperatura, pressione</td><td>No</td><td>Batterie</td><td>Bluetooth</td><td>CO2 affidabile e portatile, smart working</td></tr>
<tr><td><strong>Awair Element</strong></td><td>CO2, PM2.5, COV, umidità, temperatura</td><td>No</td><td>USB a rete</td><td>Wi-Fi, API locale</td><td>Asma, allergie, Home Assistant</td></tr>
<tr><td><strong>Airthings Wave Plus</strong></td><td>CO2, COV, umidità, temperatura, pressione</td><td>Sì</td><td>Batterie</td><td>Bluetooth (hub opzionale)</td><td>Seconda stanza in zona radon</td></tr>
</tbody>
</table>

<h2>Errori da evitare</h2>
<ul>
<li><strong>Comprare un sensore di particolato pensando che misuri la CO2.</strong> Alcuni monitor entry level misurano solo PM2.5, temperatura e umidità; è il caso, ad esempio, del Govee H5106. Sono utili contro i fumi di cottura, ma non ti diranno quando arieggiare una camera.</li>
<li><strong>Fidarsi di un valore «eCO2».</strong> Una CO2 stimata a partire da un sensore di COV non è una misura. Cerca la dicitura NDIR nella scheda tecnica.</li>
<li><strong>Giudicare il radon in un solo giorno.</strong> Le variazioni giornaliere sono ampie: attendi diverse settimane di dati prima di trarre conclusioni e, nel dubbio, usa un dosimetro passivo.</li>
<li><strong>Posizionarlo male.</strong> Vicino a una finestra, sopra un termosifone, al sole o accanto ai fornelli, le misure non rispecchiano l'aria che respiri.</li>
<li><strong>Confondere misura e azione.</strong> Un monitor non purifica nulla: ti dice cosa fare. Prevedi il passo successivo, che sia arieggiare, far controllare la ventilazione meccanica o aggiungere un purificatore.</li>
</ul>

<h2>Installazione e uso quotidiano</h2>
<p>Posiziona il monitor all'altezza del respiro, tra circa 1 e 1,5 metri, ad almeno un metro da finestre, porte, bocchette di ventilazione e fonti di calore. In camera vanno bene il comodino o un cassettone, purché non ci respiri direttamente sopra. Lascia stabilizzare l'apparecchio per qualche ora dopo l'installazione prima di fidarti dei valori.</p>
<p>Molti sensori di CO2 NDIR si ricalibrano automaticamente presupponendo che la stanza riceva regolarmente aria fresca: arieggia almeno una volta al giorno perché questa correzione funzioni. Per il radon, installa il monitor nella stanza abitata più bassa della casa. Se la media resta stabilmente sopra il livello di riferimento, informati presso l'ARPA della tua regione e rivolgiti a un professionista qualificato: le soluzioni passano di solito per la sigillatura dei punti d'ingresso e il miglioramento della ventilazione.</p>
<p>Un monitor connesso dà il meglio insieme ad altri dispositivi: accendere un purificatore quando sale il PM2.5 o ricevere una notifica quando la CO2 supera i 1.000 ppm. Per scegliere il purificatore da abbinare, consulta la nostra <a href="/it/blog/guide-purificateur-air-2026">guida ai purificatori d'aria</a>.</p>

<h2>Il nostro verdetto</h2>
<ul>
<li><strong>Il più completo:</strong> Airthings View Plus, l'unico di questa selezione a riunire radon, polveri sottili, CO2 e COV.</li>
<li><strong>Miglior rapporto qualità-prezzo:</strong> Netatmo Smart Indoor Air Quality Monitor, per sapere quando arieggiare senza complicazioni, con HomeKit.</li>
<li><strong>Per una CO2 affidabile e portatile:</strong> Aranet4 Home, a batteria e con display sempre leggibile.</li>
<li><strong>Per polveri sottili e domotica:</strong> Awair Element, grazie alla sua API locale.</li>
<li><strong>Come complemento in zona radon:</strong> Airthings Wave Plus, a batteria e senza display.</li>
</ul>
<p>Scopri tutti i modelli disponibili nella nostra pagina dedicata ai <a href="/it/energie-domotique/capteurs-qualite-air">sensori di qualità dell'aria</a>.</p>`,

    nl: `<p>Een binnenluchtkwaliteitsmeter vertelt je wanneer je moet ventileren, de lucht moet zuiveren of ontvochtigen, door CO2, fijnstof PM2.5, vluchtige organische stoffen (VOS) en bij sommige modellen radon te meten. Voor de meeste huishoudens volstaat een apparaat met een echte NDIR-CO2-sensor; woon je in een gebied met verhoogd radon, kies dan eerst een Airthings-meter die dit gas meet.</p>
<p>We brengen het grootste deel van de dag binnen door, en de lucht wordt daar vaak minder ververst dan we denken: koken, kaarsen, nieuwe meubels, schoonmaakmiddelen en gewoon ademen belasten de binnenlucht ongemerkt. Deze gids legt uit welke stoffen ertoe doen, hoe je een meter kiest, en vergelijkt vijf modellen die in 2026 echt in Europa te koop zijn, op basis van fabrieksspecificaties, gepubliceerde onafhankelijke reviews en geverifieerde kopersbeoordelingen. Alle modellen uit de categorie vind je op onze pagina <a href="/nl/energie-domotique/capteurs-qualite-air">luchtkwaliteitsmeters</a>.</p>

<h2>Welke stoffen je thuis in de gaten houdt</h2>
<h3>CO2: de beste graadmeter voor frisse lucht</h3>
<p>In de concentraties die in een woning voorkomen, is CO2 niet giftig. Het is wel de beste graadmeter voor ventilatie: hoe hoger de waarde, hoe vaker de lucht in de kamer al is ingeademd en hoe meer vocht en andere stoffen zich ophopen. Een gesloten slaapkamer die de hele nacht bezet is of een thuiswerkplek zonder ventilatie zijn typische voorbeelden. Fabrikanten en ventilatiegidsen gebruiken doorgaans deze richtwaarden:</p>
<table>
<thead>
<tr><th>Gemeten CO2</th><th>Betekenis</th><th>Wat te doen</th></tr>
</thead>
<tbody>
<tr><td>Onder 800 ppm</td><td>Goed geventileerde lucht</td><td>Niets bijzonders</td></tr>
<tr><td>800 tot 1.000 ppm</td><td>Voldoende ventilatie</td><td>Binnenkort luchten</td></tr>
<tr><td>1.000 tot 1.400 ppm</td><td>Onvoldoende ventilatie</td><td>Enkele minuten een raam openzetten</td></tr>
<tr><td>Boven 1.400 ppm</td><td>Bedompte lucht</td><td>Direct luchten en de ventilatie van de ruimte herzien</td></tr>
</tbody>
</table>
<p>Belangrijk: alleen een <strong>NDIR-sensor</strong> (niet-dispersief infrarood) meet CO2 echt. Sommige apparaten tonen een „eCO2”-waarde die wordt berekend uit hun VOS-sensor; dat is een schatting die ver van de werkelijkheid kan liggen. Alle modellen in deze gids gebruiken een NDIR-sensor.</p>

<h3>PM2.5: fijnstof</h3>
<p>PM2.5-deeltjes, kleiner dan 2,5 micrometer, dringen diep door in de luchtwegen. In 2021 verlaagde de WHO haar jaarlijkse advieswaarde naar 5 µg/m³. Binnenshuis ontstaan pieken vooral bij het koken (zeker bij bakken op hoog vuur), door kaarsen en wierook, houtkachels en open haarden, en door roken. PM2.5 meten is zinvol als iemand in huis astma of allergieën heeft, als je aan een drukke weg woont of als je een luchtreiniger op basis van echte metingen wilt aansturen.</p>

<h3>VOS: vluchtige organische stoffen</h3>
<p>VOS komen vrij uit verf, lak, lijm, spaanplaatmeubels, schoonmaakmiddelen en luchtverfrissers. Formaldehyde, een van de meest voorkomende, is door het Internationaal Agentschap voor Kankeronderzoek ingedeeld als kankerverwekkend voor de mens. Consumentenmeters meten <strong>totale VOS</strong>: ze signaleren goed een stijging na een verbouwing of grote schoonmaak, maar vertellen niet welke stof verantwoordelijk is en ook niet specifiek het formaldehydegehalte. Zie ze als waarschuwing, niet als diagnose. Kiezen voor emissiearme verf en meubels is de meest effectieve manier om VOS bij de bron te beperken.</p>

<h3>Radon: het onzichtbare gas uit de bodem</h3>
<p>Radon is een natuurlijk radioactief gas dat uit de bodem opstijgt, vooral in gebieden met granietrijke ondergrond. Het dringt binnen via scheuren en leidingdoorvoeren en hoopt zich vooral op in kelders en op de begane grond. De WHO beschouwt het als een van de belangrijkste oorzaken van longkanker na roken. In Nederland zijn de radonconcentraties in woningen gemiddeld laag; in België, vooral in delen van Wallonië, liggen ze duidelijk hoger. Het RIVM en het Belgische FANC geven informatie over radon in de woning. Radon schommelt sterk van dag tot dag: alleen een gemiddelde over meerdere weken zegt iets, en de referentiemethode blijft een passieve detector die enkele maanden blijft staan.</p>

<h3>Luchtvochtigheid en temperatuur</h3>
<p>Een relatieve luchtvochtigheid tussen 40 en 60 % geldt over het algemeen als comfortabel. Daaronder drogen de slijmvliezen uit; langdurig boven 60 tot 70 % gedijen huisstofmijt en schimmel. Toont je meter regelmatig hoge waarden, lees dan onze <a href="/nl/blog/deshumidificateur-connecte-guide">gids over slimme luchtontvochtigers</a>.</p>

<h2>Zo kies je de juiste meter</h2>
<ul>
<li><strong>Ingebouwde sensoren:</strong> eerst een NDIR-CO2-sensor; PM2.5 als je veel kookt, een houtkachel gebruikt of een luchtreiniger hebt; radon als je in een gebied met verhoogd radon woont of in een huis met kelder of slaapkamers op de begane grond.</li>
<li><strong>Voeding:</strong> modellen op batterijen kun je overal neerzetten en makkelijk verplaatsen; modellen op netstroom kunnen vaker meten en blijven altijd verbonden met wifi.</li>
<li><strong>Verbinding:</strong> met wifi bekijk je metingen op afstand en ontvang je meldingen. Een model met alleen Bluetooth synchroniseert als je telefoon in de buurt is, of via een gateway van hetzelfde merk.</li>
<li><strong>Ecosysteem:</strong> controleer de compatibiliteit met wat je al gebruikt (Apple Woning, Amazon Alexa, Google Home, Home Assistant) als je ventilatie of een luchtreiniger automatisch wilt laten reageren.</li>
<li><strong>Display:</strong> een scherm op het apparaat laat je de waarden in één oogopslag zien zonder je telefoon te pakken, en dat maakt in het dagelijks gebruik veel uit.</li>
<li><strong>Aantal ruimtes:</strong> een meter meet alleen de ruimte waarin hij staat. De slaapkamer en de woonkamer hebben voorrang.</li>
</ul>

<h2>De 5 meters die het overwegen waard zijn in 2026</h2>
<h3>Airthings View Plus: de meest complete</h3>
<p>De <strong>Airthings View Plus</strong> is nu het topmodel van Airthings. Hij meet radon, fijnstof PM1 en PM2.5, CO2, VOS, luchtvochtigheid, temperatuur en luchtdruk. Het e-paperscherm toont de waarden die je kiest, aangevuld met een groen, geel of rood oplichtende ring. Hij werkt op zes AA-batterijen, met een opgegeven gebruiksduur van ongeveer twee jaar, of via USB op netstroom; aangesloten fungeert hij ook als wifi-hub voor andere Airthings-meters in huis. De app en het online dashboard tonen historie en meldingen, en hij werkt met Amazon Alexa, Google Assistant en IFTTT.</p>
<p><strong>Sterke punten:</strong> radon en fijnstof in één apparaat, NDIR-CO2, batterij of netstroom. <strong>Beperkingen:</strong> het is een premiumapparaat, en radon heeft enkele dagen nodig voor een bruikbaar gemiddelde. <strong>Voor wie:</strong> woningen in radongebieden en iedereen die één apparaat wil dat alles bewaakt.</p>

<h3>Netatmo Smart Indoor Air Quality Monitor: de eenvoudigste manier om CO2 te volgen</h3>
<p>De <strong>Netatmo Smart Indoor Air Quality Monitor</strong>, ook bekend als Healthy Home Coach, richt zich op de basis: CO2, luchtvochtigheid, temperatuur en geluidsniveau. Hij werkt via USB op netstroom, verbindt met wifi en gebruikt de Netatmo-app zonder abonnement. Profielen voor een baby, iemand met astma of algemeen gebruik passen de meldingsdrempels en tips aan. Hij is compatibel met Apple HomeKit, zodat de metingen in de Woning-app en in automatiseringen verschijnen.</p>
<p><strong>Sterke punten:</strong> sober design, zeer eenvoudige installatie, HomeKit, duidelijke meldingen over wanneer je moet luchten. <strong>Beperkingen:</strong> geen meting van fijnstof, VOS of radon, en geen numeriek scherm op het apparaat. <strong>Voor wie:</strong> een slaap- of kinderkamer, in huishoudens die vooral willen weten wanneer de ramen open moeten.</p>

<h3>Aranet4 Home: dé CO2-meter op batterijen</h3>
<p>De in Letland gemaakte <strong>Aranet4 Home</strong> is een compacte CO2-meter, gewaardeerd om zijn NDIR-sensor en altijd zichtbare e-inkscherm. Hij meet ook temperatuur, relatieve luchtvochtigheid en luchtdruk. Dankzij het e-inkscherm noemt de fabrikant meerdere jaren gebruiksduur op twee AA-batterijen, afhankelijk van het meetinterval en het Bluetooth-gebruik. De gegevens gaan via Bluetooth naar de Aranet-app, die de historie bewaart.</p>
<p><strong>Sterke punten:</strong> CO2-meting met een sterke reputatie op het gebied van betrouwbaarheid, uitzonderlijke batterijduur, makkelijk mee te nemen van kamer naar kamer, direct afleesbaar. <strong>Beperkingen:</strong> geen fijnstof, VOS of radon; geen eigen wifi, dus zonder basisstation geen meldingen op afstand. <strong>Voor wie:</strong> thuiswerkers, slaapkamers en iedereen die een serieuze CO2-meting overal mee naartoe wil nemen.</p>

<h3>Awair Element: fijnstof en slimme-huisintegratie</h3>
<p>De <strong>Awair Element</strong> meet CO2, VOS, PM2.5, temperatuur en luchtvochtigheid, en vat alles samen in een luchtkwaliteitsscore van 0 tot 100 op de voorkant. Hij verbindt via wifi en werkt met Amazon Alexa en Google Assistant. Het grootste pluspunt voor liefhebbers van domotica is de lokale API, die de officiële Home Assistant-integratie gebruikt om een luchtreiniger of ventilatie zonder cloud aan te sturen.</p>
<p><strong>Sterke punten:</strong> CO2, PM2.5 en VOS samen, overzichtelijke score, lokale API. <strong>Beperkingen:</strong> geen radon, alleen netstroom, en de beschikbaarheid in Europa wisselt per land en verkoper. <strong>Voor wie:</strong> huishoudens met iemand met astma of allergieën, thuiswerkplekken en gebruikers van Home Assistant.</p>

<h3>Airthings Wave Plus: radon op batterijen, zonder scherm</h3>
<p>De <strong>Airthings Wave Plus</strong> meet radon, CO2, VOS, luchtvochtigheid, temperatuur en luchtdruk. Hij werkt op batterijen en gebruikt Bluetooth; als je je hand voor het apparaat beweegt, licht een gekleurde ring op die de luchtkwaliteit samenvat. Om metingen op afstand te bekijken heb je een Airthings-hub of een View Plus op netstroom nodig. Airthings zet inmiddels de View Plus voorop, maar de Wave Plus wordt nog door veel Europese winkels verkocht.</p>
<p><strong>Sterke punten:</strong> radon en CO2 gecombineerd, op batterijen, onopvallend. <strong>Beperkingen:</strong> geen fijnstof, geen numeriek scherm, zonder hub alleen Bluetooth. <strong>Voor wie:</strong> een tweede ruimte in een radongebied naast een View Plus, of een slaapkamer waar je geen enkel scherm wilt.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Model</th><th>Metingen</th><th>Radon</th><th>Voeding</th><th>Verbinding</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td><strong>Airthings View Plus</strong></td><td>CO2, PM1, PM2.5, VOS, vochtigheid, temperatuur, luchtdruk</td><td>Ja</td><td>Batterijen of USB</td><td>Wifi (fungeert als hub)</td><td>Radongebieden, complete bewaking</td></tr>
<tr><td><strong>Netatmo Smart Indoor Air Quality Monitor</strong></td><td>CO2, vochtigheid, temperatuur, geluid</td><td>Nee</td><td>USB-netstroom</td><td>Wifi, Apple HomeKit</td><td>Slaapkamer, weten wanneer je moet luchten</td></tr>
<tr><td><strong>Aranet4 Home</strong></td><td>CO2, vochtigheid, temperatuur, luchtdruk</td><td>Nee</td><td>Batterijen</td><td>Bluetooth</td><td>Betrouwbare, draagbare CO2-meting, thuiswerk</td></tr>
<tr><td><strong>Awair Element</strong></td><td>CO2, PM2.5, VOS, vochtigheid, temperatuur</td><td>Nee</td><td>USB-netstroom</td><td>Wifi, lokale API</td><td>Astma, allergieën, Home Assistant</td></tr>
<tr><td><strong>Airthings Wave Plus</strong></td><td>CO2, VOS, vochtigheid, temperatuur, luchtdruk</td><td>Ja</td><td>Batterijen</td><td>Bluetooth (hub optioneel)</td><td>Tweede ruimte in radongebied</td></tr>
</tbody>
</table>

<h2>Fouten die je beter vermijdt</h2>
<ul>
<li><strong>Een fijnstofsensor kopen in de veronderstelling dat hij CO2 meet.</strong> Sommige instapmeters meten alleen PM2.5, temperatuur en luchtvochtigheid; de Govee H5106 is daar een voorbeeld van. Handig bij kookdampen, maar ze vertellen je niet wanneer een slaapkamer gelucht moet worden.</li>
<li><strong>Vertrouwen op een „eCO2”-waarde.</strong> Een CO2-waarde die uit een VOS-sensor is geschat, is geen meting. Kijk in de specificaties of er NDIR staat.</li>
<li><strong>Radon op één dag beoordelen.</strong> De dagelijkse schommelingen zijn groot: wacht enkele weken aan gegevens af voordat je conclusies trekt, en gebruik bij twijfel een passieve detector.</li>
<li><strong>Verkeerde plaatsing.</strong> Naast een raam, boven een radiator, in de zon of naast de kookplaat geven de metingen niet de lucht weer die je inademt.</li>
<li><strong>Meten verwarren met handelen.</strong> Een meter zuivert niets: hij vertelt je wat je moet doen. Plan de volgende stap, of dat nu luchten is, het ventilatiesysteem laten onderhouden of een luchtreiniger toevoegen.</li>
</ul>

<h2>Installatie en dagelijks gebruik</h2>
<p>Zet de meter op ademhoogte, ongeveer 1 tot 1,5 meter, op minstens een meter afstand van ramen, deuren, ventilatieroosters en warmtebronnen. In de slaapkamer volstaan een nachtkastje of ladekast, zolang je er niet direct op ademt. Geef het apparaat na de installatie een paar uur om te stabiliseren voordat je de waarden vertrouwt.</p>
<p>Veel NDIR-CO2-sensoren kalibreren zichzelf automatisch in de veronderstelling dat de ruimte regelmatig frisse lucht krijgt: lucht dus minstens één keer per dag zodat die correctie werkt. Voor radon zet je de meter in de laagst gelegen bewoonde ruimte van het huis. Blijft het gemiddelde langdurig hoog, raadpleeg dan de informatie van het RIVM of het FANC en schakel een gespecialiseerde vakman in: oplossingen bestaan meestal uit het afdichten van toegangspunten en het verbeteren van de ventilatie.</p>
<p>Een verbonden meter komt het best tot zijn recht in combinatie met andere apparaten: een luchtreiniger inschakelen als PM2.5 stijgt, of een melding krijgen zodra CO2 boven 1.000 ppm komt. Voor de bijpassende luchtreiniger, zie onze <a href="/nl/blog/guide-purificateur-air-2026">gids over luchtreinigers</a>.</p>

<h2>Ons oordeel</h2>
<ul>
<li><strong>Meest compleet:</strong> Airthings View Plus, het enige model in deze selectie dat radon, fijnstof, CO2 en VOS combineert.</li>
<li><strong>Beste prijs-kwaliteitverhouding:</strong> Netatmo Smart Indoor Air Quality Monitor, om zonder gedoe te weten wanneer je moet luchten, met HomeKit.</li>
<li><strong>Voor betrouwbare, draagbare CO2-meting:</strong> Aranet4 Home, op batterijen en met een altijd afleesbaar scherm.</li>
<li><strong>Voor fijnstof en slimme huizen:</strong> Awair Element, dankzij de lokale API.</li>
<li><strong>Als aanvulling in een radongebied:</strong> Airthings Wave Plus, op batterijen en zonder scherm.</li>
</ul>
<p>Bekijk alle beschikbare modellen op onze pagina <a href="/nl/energie-domotique/capteurs-qualite-air">luchtkwaliteitsmeters</a>.</p>`,
  },
  faq: [
    {
      question: {
        fr: "Quelle est la différence entre un capteur de qualité de l'air et un purificateur d'air ?",
        en: 'What is the difference between an air quality monitor and an air purifier?',
        de: 'Was ist der Unterschied zwischen einem Luftqualitätsmonitor und einem Luftreiniger?',
        es: '¿Qué diferencia hay entre un medidor de calidad del aire y un purificador?',
        it: "Che differenza c'è tra un monitor della qualità dell'aria e un purificatore?",
        nl: 'Wat is het verschil tussen een luchtkwaliteitsmeter en een luchtreiniger?',
      },
      answer: {
        fr: "Le capteur mesure la pollution mais ne la réduit pas : c'est un outil de diagnostic. Le purificateur filtre l'air, notamment les particules fines, mais ne fait rien contre un excès de CO2, qui se règle uniquement en aérant. Les deux sont complémentaires : le capteur vous indique s'il faut aérer, purifier ou les deux.",
        en: 'A monitor measures pollution but does not reduce it: it is a diagnostic tool. A purifier filters the air, especially fine particles, but does nothing about high CO2, which only ventilation fixes. The two work together: the monitor tells you whether to ventilate, purify or both.',
        de: 'Ein Monitor misst die Belastung, verringert sie aber nicht: Er ist ein Diagnosewerkzeug. Ein Luftreiniger filtert die Luft, vor allem Feinstaub, hilft aber nicht gegen zu viel CO2 – dagegen hilft nur Lüften. Beide ergänzen sich: Der Monitor zeigt, ob Sie lüften, reinigen oder beides tun sollten.',
        es: 'El medidor mide la contaminación pero no la reduce: es una herramienta de diagnóstico. El purificador filtra el aire, sobre todo las partículas finas, pero no hace nada contra un exceso de CO2, que solo se corrige ventilando. Son complementarios: el medidor te dice si ventilar, purificar o ambas cosas.',
        it: "Il monitor misura l'inquinamento ma non lo riduce: è uno strumento di diagnosi. Il purificatore filtra l'aria, soprattutto le polveri sottili, ma non fa nulla contro l'eccesso di CO2, che si risolve solo arieggiando. Sono complementari: il monitor ti dice se arieggiare, purificare o entrambe le cose.",
        nl: 'Een meter meet de vervuiling maar vermindert die niet: het is een diagnose-instrument. Een luchtreiniger filtert de lucht, vooral fijnstof, maar doet niets tegen te veel CO2; daartegen helpt alleen ventileren. Ze vullen elkaar aan: de meter vertelt je of je moet luchten, zuiveren of allebei.',
      },
    },
    {
      question: {
        fr: 'À quel niveau de CO2 faut-il aérer une chambre ?',
        en: 'At what CO2 level should I ventilate a bedroom?',
        de: 'Ab welchem CO2-Wert sollte ich das Schlafzimmer lüften?',
        es: '¿A partir de qué nivel de CO2 hay que ventilar un dormitorio?',
        it: 'A quale livello di CO2 bisogna arieggiare una camera?',
        nl: 'Bij welk CO2-niveau moet ik een slaapkamer luchten?',
      },
      answer: {
        fr: "Le repère le plus courant est d'aérer dès que le CO2 dépasse 1 000 ppm. Quelques minutes de fenêtres grandes ouvertes, idéalement en créant un courant d'air, suffisent généralement à faire redescendre le taux. Si la chambre dépasse régulièrement ce seuil la nuit, une entrée d'air ou une ventilation mécanique bien entretenue est la solution durable.",
        en: 'The most common rule of thumb is to ventilate once CO2 exceeds 1,000 ppm. A few minutes with windows wide open, ideally creating a cross-draught, usually brings the level back down. If the bedroom regularly goes above this at night, a trickle vent or well-maintained mechanical ventilation is the lasting fix.',
        de: 'Die gängigste Faustregel lautet: lüften, sobald CO2 1.000 ppm überschreitet. Einige Minuten Stoß- oder Querlüften senken den Wert meist deutlich. Wird dieser Wert nachts regelmäßig überschritten, sind Fensterfalzlüfter oder eine gut gewartete Lüftungsanlage die dauerhafte Lösung.',
        es: 'La referencia más habitual es ventilar en cuanto el CO2 supera las 1.000 ppm. Unos minutos con las ventanas abiertas de par en par, a ser posible creando corriente, suelen bastar para bajar el nivel. Si el dormitorio supera ese umbral a menudo por la noche, un aireador o una ventilación mecánica bien mantenida es la solución duradera.',
        it: "Il riferimento più comune è arieggiare quando la CO2 supera i 1.000 ppm. Pochi minuti con le finestre spalancate, meglio se creando una corrente d'aria, bastano di solito a far scendere il valore. Se la camera supera spesso questa soglia di notte, una presa d'aria o una ventilazione meccanica ben mantenuta è la soluzione duratura.",
        nl: 'De meest gebruikte vuistregel is luchten zodra CO2 boven 1.000 ppm komt. Een paar minuten de ramen wijd open, liefst met doorstroming, brengt de waarde meestal weer omlaag. Komt de slaapkamer \'s nachts regelmatig boven die grens, dan zijn ventilatieroosters of goed onderhouden mechanische ventilatie de blijvende oplossing.',
      },
    },
    {
      question: {
        fr: 'Comment savoir si mon logement est concerné par le radon ?',
        en: 'How do I know if my home is affected by radon?',
        de: 'Wie finde ich heraus, ob mein Zuhause von Radon betroffen ist?',
        es: '¿Cómo sé si mi vivienda está afectada por el radón?',
        it: 'Come capire se la mia casa è interessata dal radon?',
        nl: 'Hoe weet ik of mijn woning met radon te maken heeft?',
      },
      answer: {
        fr: "Consultez la cartographie des communes à potentiel radon publiée par l'ASNR (ex-IRSN). Si votre commune est concernée, surtout en maison avec sous-sol ou de plain-pied, mesurez : un dosimètre passif posé au moins deux mois en période de chauffe donne la mesure de référence, et un moniteur Airthings permet ensuite de suivre l'évolution au quotidien.",
        en: 'Check the official radon map for your country (in the UK, the UKHSA radon map). If your area is affected, especially if you live in a house with a basement or ground-floor bedrooms, measure: a passive detector left for around three months gives the reference result, and an Airthings monitor then lets you follow day-to-day changes.',
        de: 'Prüfen Sie, ob Ihre Gemeinde in einem Radon-Vorsorgegebiet liegt; das Bundesamt für Strahlenschutz und die Länder informieren darüber. Wenn ja, besonders bei Häusern mit Keller oder Schlafräumen im Erdgeschoss, messen Sie: Ein passives Exposimeter über mehrere Monate liefert den Referenzwert, ein Airthings-Monitor zeigt anschließend die täglichen Schwankungen.',
        es: 'Consulta el mapa del potencial de radón del Consejo de Seguridad Nuclear. Si tu municipio está afectado, sobre todo en una casa con sótano o dormitorios en planta baja, mide: un detector pasivo colocado durante varios meses ofrece el resultado de referencia, y un monitor Airthings permite después seguir la evolución diaria.',
        it: "Verifica se il tuo comune rientra nelle aree prioritarie a rischio radon individuate dalla tua regione; l'ARPA regionale fornisce informazioni. In caso affermativo, soprattutto in case con seminterrato o camere al piano terra, misura: un dosimetro passivo lasciato per diversi mesi dà il risultato di riferimento, e un monitor Airthings permette poi di seguire l'andamento giornaliero.",
        nl: 'Raadpleeg de informatie van het RIVM, of in België de radonkaart van het FANC. Woon je in een gebied met verhoogd radon, zeker in een huis met kelder of slaapkamers op de begane grond, meet dan: een passieve detector die enkele maanden blijft staan geeft de referentiewaarde, en een Airthings-meter laat je daarna de dagelijkse schommelingen volgen.',
      },
    },
    {
      question: {
        fr: "Les capteurs de qualité de l'air grand public sont-ils précis ?",
        en: 'Are consumer air quality monitors accurate?',
        de: 'Wie genau sind Luftqualitätsmonitore für zu Hause?',
        es: '¿Son precisos los medidores de calidad del aire domésticos?',
        it: "I monitor della qualità dell'aria per la casa sono precisi?",
        nl: 'Zijn luchtkwaliteitsmeters voor thuis nauwkeurig?',
      },
      answer: {
        fr: "Ils sont assez précis pour prendre de bonnes décisions au quotidien, pas pour une mesure officielle. Le CO2 mesuré par un capteur NDIR est fiable ; les capteurs de particules donnent de bonnes tendances ; les COV totaux ne sont qu'une indication relative. Pour une expertise réglementaire, il faut faire appel à un professionnel équipé d'instruments étalonnés.",
        en: 'They are accurate enough for good everyday decisions, not for official measurements. CO2 from an NDIR sensor is reliable; particle sensors show trends well; total VOC readings are only a relative indication. For a regulatory assessment, you need a professional with calibrated instruments.',
        de: 'Sie sind genau genug für gute Alltagsentscheidungen, nicht aber für amtliche Messungen. CO2 von einem NDIR-Sensor ist zuverlässig, Feinstaubsensoren zeigen Trends gut, Gesamt-VOC sind nur ein relativer Hinweis. Für ein offizielles Gutachten braucht es eine Fachkraft mit kalibrierten Messgeräten.',
        es: 'Son lo bastante precisos para tomar buenas decisiones a diario, no para una medición oficial. El CO2 medido con un sensor NDIR es fiable; los sensores de partículas muestran bien las tendencias; los COV totales son solo una indicación relativa. Para una evaluación oficial hace falta un profesional con instrumentos calibrados.',
        it: "Sono abbastanza precisi per prendere buone decisioni quotidiane, non per una misura ufficiale. La CO2 rilevata da un sensore NDIR è affidabile; i sensori di particolato mostrano bene le tendenze; i COV totali sono solo un'indicazione relativa. Per una valutazione ufficiale serve un professionista con strumenti tarati.",
        nl: 'Ze zijn nauwkeurig genoeg voor goede dagelijkse beslissingen, niet voor officiële metingen. CO2 van een NDIR-sensor is betrouwbaar, fijnstofsensoren tonen trends goed en totale VOS zijn slechts een relatieve indicatie. Voor een officiële beoordeling heb je een vakman met gekalibreerde apparatuur nodig.',
      },
    },
    {
      question: {
        fr: 'Combien de capteurs faut-il dans un logement ?',
        en: 'How many monitors do I need at home?',
        de: 'Wie viele Monitore braucht man in einer Wohnung?',
        es: '¿Cuántos medidores hacen falta en una vivienda?',
        it: 'Quanti monitor servono in una casa?',
        nl: 'Hoeveel meters heb je nodig in huis?',
      },
      answer: {
        fr: "Un capteur ne mesure que la pièce où il se trouve. Commencez par la chambre, où l'on passe de longues heures fenêtres fermées, puis la pièce de vie. Ajoutez-en un dans la chambre des enfants ou le bureau si besoin. Un modèle sur piles comme l'Aranet4 Home peut aussi être déplacé pour repérer les pièces mal ventilées.",
        en: 'A monitor only measures the room it is in. Start with the bedroom, where you spend long hours with the windows closed, then the main living area. Add one in a child\'s room or home office if needed. A battery model such as the Aranet4 Home can also be moved around to find poorly ventilated rooms.',
        de: 'Ein Monitor misst nur den Raum, in dem er steht. Beginnen Sie mit dem Schlafzimmer, in dem Sie viele Stunden bei geschlossenem Fenster verbringen, dann mit dem Wohnraum. Bei Bedarf kommen Kinderzimmer oder Arbeitszimmer hinzu. Ein Batteriegerät wie der Aranet4 Home lässt sich zudem umstellen, um schlecht gelüftete Räume zu finden.',
        es: 'Un medidor solo mide la habitación en la que está. Empieza por el dormitorio, donde pasas muchas horas con las ventanas cerradas, y luego la sala de estar. Añade otro en el cuarto de los niños o el despacho si hace falta. Un modelo a pilas como el Aranet4 Home también puede moverse para localizar las estancias mal ventiladas.',
        it: 'Un monitor misura solo la stanza in cui si trova. Inizia dalla camera da letto, dove trascorri molte ore con le finestre chiuse, poi il soggiorno. Aggiungine uno nella cameretta o nello studio se serve. Un modello a batteria come l\'Aranet4 Home può anche essere spostato per individuare le stanze poco ventilate.',
        nl: 'Een meter meet alleen de ruimte waarin hij staat. Begin met de slaapkamer, waar je vele uren met gesloten ramen doorbrengt, en daarna de woonkamer. Voeg zo nodig een meter toe in de kinderkamer of thuiswerkplek. Een model op batterijen zoals de Aranet4 Home kun je ook verplaatsen om slecht geventileerde ruimtes op te sporen.',
      },
    },
    {
      question: {
        fr: "Un capteur de qualité de l'air nécessite-t-il un abonnement ?",
        en: 'Does an air quality monitor need a subscription?',
        de: 'Braucht ein Luftqualitätsmonitor ein Abo?',
        es: '¿Necesita suscripción un medidor de calidad del aire?',
        it: "Un monitor della qualità dell'aria richiede un abbonamento?",
        nl: 'Heeft een luchtkwaliteitsmeter een abonnement nodig?',
      },
      answer: {
        fr: "Non pour les modèles de ce guide : l'application et l'historique de base sont accessibles sans abonnement. Vérifiez toutefois, avant l'achat, les conditions de l'application du fabricant, qui peuvent évoluer, et privilégiez si possible un modèle avec écran, qui reste utile même sans connexion.",
        en: 'Not for the models in this guide: the app and basic history are available without a subscription. Still, check the manufacturer\'s app terms before buying, as they can change, and favour a model with a screen where possible, since it stays useful even offline.',
        de: 'Bei den Modellen in diesem Ratgeber nicht: App und grundlegender Verlauf sind ohne Abo nutzbar. Prüfen Sie dennoch vor dem Kauf die Bedingungen der Hersteller-App, da sie sich ändern können, und bevorzugen Sie nach Möglichkeit ein Gerät mit Display, das auch ohne Verbindung nützlich bleibt.',
        es: 'No en el caso de los modelos de esta guía: la app y el historial básico están disponibles sin suscripción. Aun así, revisa antes de comprar las condiciones de la app del fabricante, que pueden cambiar, y prioriza si puedes un modelo con pantalla, que sigue siendo útil sin conexión.',
        it: "No per i modelli di questa guida: app e storico di base sono disponibili senza abbonamento. Verifica comunque prima dell'acquisto le condizioni dell'app del produttore, che possono cambiare, e se possibile preferisci un modello con display, utile anche senza connessione.",
        nl: 'Niet voor de modellen in deze gids: de app en de basishistorie zijn zonder abonnement beschikbaar. Controleer voor aankoop wel de voorwaarden van de app van de fabrikant, want die kunnen veranderen, en kies zo mogelijk een model met scherm, dat ook zonder verbinding bruikbaar blijft.',
      },
    },
  ],
}
