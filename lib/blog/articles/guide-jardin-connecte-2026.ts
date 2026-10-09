import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'guide-jardin-connecte-2026',
  category: 'guides',
  pillar: 'outdoor-connecte',
  relatedSlugs: ['tondeuse-robot-sans-fil-perimetrique', 'arrosage-connecte-intelligent'],
  datePublished: '2026-04-16',
  dateModified: '2026-10-09',
  readingTime: 9,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1558462192-f9a70c31a945?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Jardin connecté avec tondeuse robot et arrosage intelligent en action',
        en: 'Smart garden with robot mower and intelligent irrigation system in action',
        de: 'Vernetzter Garten mit Mähroboter und intelligenter Bewässerung in Aktion',
        es: 'Jardín inteligente con robot cortacésped y riego automático en funcionamiento',
        it: 'Giardino smart con robot tagliaerba e irrigazione intelligente in azione',
        nl: 'Slimme tuin met robotmaaier en intelligent besproeiingssysteem in actie',
      },
    },
  ],
  title: {
    fr: 'Guide Complet du Jardin Connecté 2026 : Tondeuse Robot, Arrosage Intelligent et Plus',
    en: 'Complete Smart Garden Guide 2026: Robot Mowers, Smart Irrigation and More',
    de: 'Kompletter Ratgeber Vernetzter Garten 2026: Mähroboter, Smarte Bewässerung und Mehr',
    es: 'Guía Completa del Jardín Inteligente 2026: Robot Cortacésped, Riego Smart y Más',
    it: 'Guida Completa al Giardino Smart 2026: Robot Tagliaerba, Irrigazione Intelligente e Altro',
    nl: 'Complete Gids Slimme Tuin 2026: Robotmaaier, Slim Sproeisysteem en Meer',
  },
  excerpt: {
    fr: 'Tout savoir pour transformer votre jardin en espace connecté en 2026 : tondeuses robots sans fil périmétrique, arrosage intelligent, éclairage extérieur, robots piscine, thermomètres BBQ et compatibilité Matter.',
    en: 'Everything you need to know to transform your garden into a smart outdoor space in 2026: cable-free robot mowers, smart irrigation, outdoor lighting, pool robots, BBQ thermometers and Matter compatibility.',
    de: 'Alles, was Sie wissen müssen, um Ihren Garten 2026 in einen vernetzten Außenbereich zu verwandeln: Mähroboter ohne Begrenzungskabel, smarte Bewässerung, Außenbeleuchtung, Poolroboter, BBQ-Thermometer und Matter-Kompatibilität.',
    es: 'Todo lo que necesitas para transformar tu jardín en un espacio inteligente en 2026: robots cortacésped sin cable perimetral, riego inteligente, iluminación exterior, robots de piscina, termómetros BBQ y compatibilidad Matter.',
    it: 'Tutto quello che devi sapere per trasformare il tuo giardino in uno spazio smart nel 2026: robot tagliaerba senza filo perimetrale, irrigazione intelligente, illuminazione esterna, robot piscina, termometri BBQ e compatibilità Matter.',
    nl: 'Alles wat je moet weten om je tuin in 2026 om te toveren tot een slimme buitenruimte: robotmaaiers zonder begrenzingsdraad, slimme besproeiing, buitenverlichting, zwembadrobots, BBQ-thermometers en Matter-compatibiliteit.',
  },
  content: {
    fr: `<h2>Le jardin connecté en 2026 : ce qui a vraiment changé</h2>
<p>Un jardin connecté repose aujourd'hui sur trois briques : une <strong>tondeuse robot</strong>, un <strong>arrosage piloté par la météo</strong> et un <strong>éclairage extérieur</strong> contrôlable depuis le smartphone. En 2026, le grand changement est la généralisation des tondeuses robots sans fil périmétrique, qui se repèrent par RTK, LiDAR ou caméra, et la progression du protocole <strong>Matter</strong> pour réunir les appareils dans une même application.</p>
<p>Que vous ayez un petit jardin urbain de 100 m² ou un terrain de 5 000 m², ce guide vous aide à choisir les équipements adaptés à votre espace. Il couvre cinq catégories : <strong>tondeuses robots</strong>, <strong>arrosage intelligent</strong>, <strong>éclairage extérieur</strong>, <strong>robots de piscine</strong> et <strong>thermomètres BBQ connectés</strong>. Les informations s'appuient sur les fiches techniques des fabricants, des analyses indépendantes et les avis d'acheteurs vérifiés.</p>
<p>Pour aller plus loin, consultez nos guides dédiés : <a href="/fr/blog/tondeuse-robot-sans-fil-perimetrique">comparatif des tondeuses robots sans fil périmétrique</a> et <a href="/fr/blog/arrosage-connecte-intelligent">guide de l'arrosage connecté intelligent</a>.</p>

<h2>Tondeuses robots : fil périmétrique ou navigation sans fil</h2>

<h3>Deux approches différentes</h3>
<p>Une tondeuse robot classique suit un <strong>fil périmétrique</strong> enterré ou agrafé autour de la pelouse. La pose demande du temps et le fil peut être sectionné lors de travaux au jardin. Les modèles sans fil périmétrique délimitent la zone virtuellement dans l'application, grâce au <strong>RTK</strong> (positionnement satellite corrigé, précis à quelques centimètres), au <strong>LiDAR</strong> ou à des <strong>caméras</strong> avec reconnaissance d'image. Selon les marques, ces technologies sont combinées.</p>
<p>Les avantages sont nets : installation plus rapide, zones de tonte modifiables en quelques gestes, zones d'exclusion (massifs, potager) faciles à créer. Les limites existent aussi : le RTK a besoin d'une vue dégagée du ciel ou d'une correction par réseau, et la vision seule peut être gênée par une faible luminosité ou des bordures peu marquées.</p>

<h3>Les modèles de référence en 2026</h3>
<table>
<thead>
<tr><th>Marque</th><th>Modèle</th><th>Navigation</th><th>Surface max</th><th>Pente max</th><th>Pour qui</th></tr>
</thead>
<tbody>
<tr><td><strong>Husqvarna</strong></td><td>Automower 450X NERA</td><td>Fil ou EPOS (kit sans fil en option)</td><td>5 000 m²</td><td>50 %</td><td>Grands terrains complexes</td></tr>
<tr><td><strong>Mammotion</strong></td><td>LUBA 3 AWD 5000</td><td>LiDAR 360° + RTK réseau + vision</td><td>5 000 m²</td><td>80 %</td><td>Terrains très pentus</td></tr>
<tr><td><strong>Segway</strong></td><td>Navimow i208 AWD</td><td>RTK réseau + vision</td><td>800 m²</td><td>45 %</td><td>Jardins moyens vallonnés</td></tr>
<tr><td><strong>ECOVACS</strong></td><td>GOAT O600 RTK</td><td>RTK + vision</td><td>600 m²</td><td>45 %</td><td>Petits jardins avec obstacles</td></tr>
<tr><td><strong>Gardena</strong></td><td>SILENO City 600</td><td>Fil périmétrique</td><td>600 m²</td><td>25 %</td><td>Petits jardins simples</td></tr>
<tr><td><strong>Worx</strong></td><td>Landroid Vision L1600</td><td>Caméra + IA</td><td>1 600 m²</td><td>30 %</td><td>Pelouses aux bordures nettes</td></tr>
</tbody>
</table>
<p>Surfaces et pentes : valeurs annoncées par les fabricants. Notre <a href="/fr/blog/tondeuse-robot-sans-fil-perimetrique">comparatif complet des tondeuses robots sans fil périmétrique</a> détaille les forces et les limites de chaque modèle, l'installation et le dépannage.</p>

<h3>Critères de choix</h3>
<ul>
<li><strong>Surface du terrain :</strong> pour un petit jardin simple (moins de 600 m²), un modèle à fil reste une solution fiable et économique. Au-delà de 1 000 m² ou pour un jardin découpé, le sans-fil devient beaucoup plus pratique.</li>
<li><strong>Pente :</strong> si votre terrain dépasse 25 % de pente, choisissez un modèle annoncé pour davantage, idéalement à quatre roues motrices comme le Mammotion LUBA 3 AWD (80 %) ou le Navimow i208 AWD (45 %).</li>
<li><strong>Zones multiples :</strong> certains modèles gèrent plusieurs pelouses séparées par une allée ou un passage étroit.</li>
<li><strong>Couverture satellite :</strong> avec de grands arbres ou des murs hauts, privilégiez un modèle qui combine le RTK avec le LiDAR ou la vision.</li>
<li><strong>Bruit et faune :</strong> les tondeuses robots sont bien plus discrètes qu'une tondeuse thermique, mais évitez de les programmer la nuit : les hérissons, actifs au crépuscule, risquent d'être blessés.</li>
</ul>

<h2>Arrosage connecté intelligent</h2>

<h3>Arroser seulement quand c'est utile</h3>
<p>Un programmateur connecté ajuste la durée et la fréquence d'arrosage selon les <strong>prévisions météo</strong>, la <strong>température</strong> et, avec un capteur, l'<strong>humidité réelle du sol</strong>. Il évite d'arroser juste avant une averse ou sur un sol encore humide. L'économie d'eau dépend de vos habitudes : elle est nette si vous arrosiez à heure fixe sans tenir compte de la météo, plus modeste si vous ajustiez déjà à la main.</p>

<h3>Les solutions du marché</h3>
<ul>
<li><strong>Gardena smart system :</strong> écosystème complet avec programmateurs (smart Water Control pour un robinet, smart Irrigation Control pour plusieurs vannes), capteur smart Sensor et passerelle smart Gateway, le tout piloté dans l'app Gardena smart. Très répandu en Europe.</li>
<li><strong>Hunter Hydrawise (HC, Pro-HC) :</strong> programmateurs Wi-Fi pour l'arrosage enterré multi-zones, disponibles en versions 230 V européennes. L'arrosage prédictif s'ajuste à la météo locale, et les capteurs de pluie, de gel ou d'humidité sont pris en charge.</li>
<li><strong>Eve Aqua :</strong> programmateur de robinet Matter over Thread, pilotable depuis Apple Home ou toute application compatible Matter. Idéal pour un tuyau ou un goutte-à-goutte simple.</li>
</ul>
<p>Retrouvez notre <a href="/fr/blog/arrosage-connecte-intelligent">guide complet de l'arrosage connecté intelligent</a> pour un comparatif détaillé.</p>

<h3>Capteurs d'humidité du sol</h3>
<p>Un capteur comme le Gardena smart Sensor mesure l'humidité et la température du sol, et permet de bloquer l'arrosage quand la terre est encore humide. Placez-le dans une zone représentative, à l'écart des gouttières et de l'ombre permanente. À noter : une station comme l'Eve Weather mesure la température, l'humidité de l'air et la pression, mais pas l'humidité du sol.</p>

<h2>Éclairage extérieur connecté</h2>

<h3>Solaire ou basse tension</h3>
<p>Les bornes solaires connectées n'ont besoin d'aucun câblage, mais leur autonomie dépend de l'ensoleillement et baisse nettement en hiver. Pour un éclairage fiable toute l'année, les systèmes basse tension comme <strong>Philips Hue Outdoor</strong> (alimentation 24 V) se raccordent à un bloc d'alimentation et se pilotent par application, par la voix ou par automatisation. Govee et LEDVANCE SMART+ proposent aussi des gammes extérieures connectées.</p>

<h3>Projecteurs connectés</h3>
<p>Le Philips Hue Discover est un projecteur couleur pour mettre en valeur une façade ou un arbre, tandis que les spots Hue Lily servent à l'éclairage d'ambiance des massifs. Si la sécurité est la priorité, la Ring Floodlight Cam associe projecteur, détection de mouvement et caméra de surveillance.</p>

<h3>Bandeaux et guirlandes LED extérieurs</h3>
<p>Les bandeaux LED extérieurs (IP65 minimum) de Govee, Philips Hue ou LIFX créent des ambiances pour les terrasses et pergolas. Ils se pilotent par application et sont compatibles Alexa et Google Home ; une partie de ces gammes est également compatible Matter.</p>

<h2>Robots de piscine connectés</h2>

<h3>Deux références</h3>
<p>Les robots de piscine connectés nettoient le fond, les parois et la ligne d'eau de manière autonome :</p>
<ul>
<li><strong>Dolphin S300i (Maytronics) :</strong> pilotage via l'app MyDolphin Plus (programmation, choix du cycle, nettoyage ciblé). Cycles de 1,5 à 2,5 heures, fond, parois et ligne d'eau, pour des bassins jusqu'à 12 m.</li>
<li><strong>Zodiac CNX 40 iQ :</strong> chenilles et double moteur de traction, capteurs gyroscope et accéléromètre pour couvrir tout le bassin, double filtration et pilotage par l'app iAquaLink. Prévu pour des bassins jusqu'à 12 × 6 m.</li>
</ul>
<p>Il existe aussi des robots de piscine sans fil sur batterie, comme l'Aiper Seagull Pro, qui s'affranchissent du câble d'alimentation. Pratiques pour les petites piscines, ils n'offrent pas tous de pilotage par application.</p>

<h3>Critères de choix</h3>
<ul>
<li><strong>Type de piscine :</strong> fond plat, pentes douces, forme libre : vérifiez la compatibilité</li>
<li><strong>Taille du bassin :</strong> respectez la longueur maximale annoncée par le fabricant</li>
<li><strong>Revêtement :</strong> liner, carrelage, béton : les brosses doivent être adaptées</li>
<li><strong>Connectivité :</strong> application, programmation à distance, diagnostic</li>
</ul>

<h2>Thermomètres et accessoires BBQ connectés</h2>

<h3>MEATER 2 Plus : la sonde sans fil</h3>
<p>Le <strong>MEATER 2 Plus</strong> est une sonde entièrement sans fil que l'on plante dans la viande. Elle mesure la température interne et la température ambiante, et communique en Bluetooth avec le smartphone. Pour suivre la cuisson à distance, l'application peut utiliser un second appareil resté à portée comme relais Wi-Fi (fonction MEATER Link). La cuisson guidée affiche une estimation du temps restant.</p>

<h3>Inkbird et Weber Connect</h3>
<p><strong>Inkbird IBBQ-4BW :</strong> 4 sondes filaires, Wi-Fi 2,4 GHz et Bluetooth, application avec alertes de température. Adapté aux cuissons longues (low & slow).</p>
<p><strong>Weber Connect Smart Grilling Hub :</strong> boîtier connecté compatible avec n'importe quel barbecue, jusqu'à 4 sondes. L'application indique quand retourner et servir, et propose des recettes Weber.</p>

<h2>Par où commencer selon votre jardin</h2>

<h3>Petit jardin (moins de 600 m²)</h3>
<ul>
<li>Programmateur de robinet connecté (Eve Aqua ou Gardena smart Water Control)</li>
<li>Tondeuse à fil Gardena SILENO City 600 pour un jardin simple, ou ECOVACS GOAT O600 RTK pour se passer de fil</li>
<li>Quelques bornes solaires ou un petit kit d'éclairage basse tension</li>
</ul>

<h3>Jardin moyen (600 à 1 600 m²)</h3>
<ul>
<li>Segway Navimow i208 AWD (jusqu'à 800 m², pentes de 45 %) ou Worx Landroid Vision L1600 (jusqu'à 1 600 m²)</li>
<li>Gardena smart system avec capteur d'humidité du sol</li>
<li>Éclairage Philips Hue Outdoor basse tension</li>
<li>Thermomètre BBQ connecté (Inkbird IBBQ-4BW ou MEATER 2 Plus)</li>
</ul>

<h3>Grand terrain ou terrain en pente</h3>
<ul>
<li>Husqvarna Automower 450X NERA (jusqu'à 5 000 m², fil ou EPOS) ou Mammotion LUBA 3 AWD 5000 (pentes jusqu'à 80 %)</li>
<li>Arrosage enterré multi-zones avec un programmateur Hunter Hydrawise</li>
<li>Robot de piscine Dolphin S300i ou Zodiac CNX 40 iQ si vous avez un bassin</li>
</ul>

<h2>Compatibilité Matter pour le jardin connecté</h2>
<p>Le protocole <strong>Matter</strong> gagne aussi l'extérieur, même si toutes les catégories ne sont pas encore concernées :</p>
<ul>
<li><strong>Eve Aqua :</strong> programmateur de robinet Matter natif (Thread)</li>
<li><strong>Philips Hue Outdoor :</strong> compatible Matter via le Hue Bridge</li>
<li><strong>Eve Weather :</strong> version Matter over Thread pour la température et l'humidité extérieures</li>
<li><strong>Tondeuses robots :</strong> pas de prise en charge Matter à ce jour ; elles se pilotent dans l'application du fabricant, et certaines, comme les Mammotion LUBA, s'intègrent à Alexa et Google Assistant</li>
</ul>
<p>L'avantage de Matter : un contrôle unifié depuis Apple Home, Google Home, Amazon Alexa ou SmartThings, avec un fonctionnement local pour de nombreuses fonctions. Les appareils Thread ont besoin d'un routeur de bordure Thread (certaines enceintes et box domotiques récentes jouent ce rôle).</p>

<h2>Conclusion : par où commencer ?</h2>
<p>Si vous débutez, commencez par <strong>l'arrosage intelligent</strong> : c'est un investissement modeste dont les effets se voient dès le premier été. Choisissez ensuite une <strong>tondeuse robot</strong> en fonction de trois critères : surface, pente et dégagement du ciel. L'éclairage extérieur connecté ajoute confort et sécurité, tandis que les thermomètres BBQ connectés facilitent les cuissons du week-end.</p>
<p>Consultez nos guides spécialisés pour approfondir chaque catégorie : <a href="/fr/blog/tondeuse-robot-sans-fil-perimetrique">tondeuses robots sans fil</a> et <a href="/fr/blog/arrosage-connecte-intelligent">arrosage connecté intelligent</a>.</p>`,

    en: `<h2>The smart garden in 2026: what has really changed</h2>
<p>A smart garden today rests on three building blocks: a <strong>robot mower</strong>, <strong>weather-driven irrigation</strong> and <strong>outdoor lighting</strong> you can control from your phone. The big shift in 2026 is that cable-free robot mowers, which find their way using RTK, LiDAR or cameras, have gone mainstream, while the <strong>Matter</strong> protocol keeps bringing more devices together in a single app.</p>
<p>Whether you have a small 100 m² city garden or a 5,000 m² plot, this guide helps you pick the right equipment for your outdoor space. It covers five categories: <strong>robot mowers</strong>, <strong>smart irrigation</strong>, <strong>outdoor lighting</strong>, <strong>pool robots</strong> and <strong>connected BBQ thermometers</strong>. The information is based on manufacturer specifications, independent reviews and verified buyer feedback.</p>
<p>For in-depth coverage, see our dedicated guides: <a href="/en/blog/tondeuse-robot-sans-fil-perimetrique">best cable-free robot mowers</a> and <a href="/en/blog/arrosage-connecte-intelligent">smart irrigation guide</a>.</p>

<h2>Robot mowers: boundary wire or cable-free navigation</h2>

<h3>Two different approaches</h3>
<p>A traditional robot mower follows a <strong>boundary wire</strong> buried or pegged around the lawn. Laying it takes time, and the wire can be cut during garden work. Cable-free models define the mowing area virtually in the app, using <strong>RTK</strong> (corrected satellite positioning accurate to a few centimetres), <strong>LiDAR</strong> or <strong>cameras</strong> with image recognition. Depending on the brand, these technologies are combined.</p>
<p>The benefits are clear: faster installation, mowing zones you can change in a few taps, and easy no-go zones for flower beds or the vegetable patch. There are limits too: RTK needs a clear view of the sky or a network correction, and vision alone can struggle in low light or with poorly defined lawn edges.</p>

<h3>Reference models in 2026</h3>
<table>
<thead>
<tr><th>Brand</th><th>Model</th><th>Navigation</th><th>Max area</th><th>Max slope</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td><strong>Husqvarna</strong></td><td>Automower 450X NERA</td><td>Wire or EPOS (optional wire-free kit)</td><td>5,000 m²</td><td>50%</td><td>Large, complex gardens</td></tr>
<tr><td><strong>Mammotion</strong></td><td>LUBA 3 AWD 5000</td><td>360° LiDAR + network RTK + vision</td><td>5,000 m²</td><td>80%</td><td>Very steep lawns</td></tr>
<tr><td><strong>Segway</strong></td><td>Navimow i208 AWD</td><td>Network RTK + vision</td><td>800 m²</td><td>45%</td><td>Medium, hilly gardens</td></tr>
<tr><td><strong>ECOVACS</strong></td><td>GOAT O600 RTK</td><td>RTK + vision</td><td>600 m²</td><td>45%</td><td>Small gardens with obstacles</td></tr>
<tr><td><strong>Gardena</strong></td><td>SILENO City 600</td><td>Boundary wire</td><td>600 m²</td><td>25%</td><td>Small, simple gardens</td></tr>
<tr><td><strong>Worx</strong></td><td>Landroid Vision L1600</td><td>Camera + AI</td><td>1,600 m²</td><td>30%</td><td>Lawns with clear edges</td></tr>
</tbody>
</table>
<p>Areas and slopes are the figures stated by the manufacturers. Our <a href="/en/blog/tondeuse-robot-sans-fil-perimetrique">complete cable-free robot mower comparison</a> covers each model's strengths and limits, installation and troubleshooting.</p>

<h3>Key selection criteria</h3>
<ul>
<li><strong>Lawn size:</strong> for a small, simple garden (under 600 m²), a boundary wire model remains a reliable, affordable choice. Above 1,000 m² or for a garden split into several parts, cable-free is much more practical.</li>
<li><strong>Slope:</strong> if your lawn is steeper than 25%, choose a model rated for more, ideally all-wheel drive like the Mammotion LUBA 3 AWD (80%) or the Navimow i208 AWD (45%).</li>
<li><strong>Multiple zones:</strong> some models handle several lawns separated by a path or a narrow passage.</li>
<li><strong>Satellite coverage:</strong> with tall trees or high walls, prefer a model that combines RTK with LiDAR or vision.</li>
<li><strong>Noise and wildlife:</strong> robot mowers are far quieter than petrol mowers, but avoid scheduling them at night: hedgehogs are active at dusk and can be injured.</li>
</ul>

<h2>Smart irrigation systems</h2>

<h3>Water only when it is needed</h3>
<p>A smart controller adjusts watering duration and frequency based on <strong>weather forecasts</strong>, <strong>temperature</strong> and, with a sensor, the <strong>actual soil moisture</strong>. It skips watering just before rain or when the soil is still wet. How much water you save depends on your starting point: the gain is clear if you used to water at fixed times regardless of the weather, and smaller if you already adjusted by hand.</p>

<h3>Market solutions</h3>
<ul>
<li><strong>Gardena smart system:</strong> a complete ecosystem with controllers (smart Water Control for a single tap, smart Irrigation Control for several valves), the smart Sensor and the smart Gateway, all managed in the Gardena smart app. Widely available across Europe.</li>
<li><strong>Hunter Hydrawise (HC, Pro-HC):</strong> Wi-Fi controllers for multi-zone underground irrigation, available in 230 V European versions. Predictive watering adapts to local weather, and rain, freeze and soil moisture sensors are supported.</li>
<li><strong>Eve Aqua:</strong> a Matter over Thread tap controller, managed from Apple Home or any Matter-compatible app. Ideal for a hose or a simple drip line.</li>
</ul>
<p>See our <a href="/en/blog/arrosage-connecte-intelligent">complete smart irrigation guide</a> for a detailed comparison.</p>

<h3>Soil moisture sensors</h3>
<p>A sensor such as the Gardena smart Sensor measures soil moisture and temperature, and can block watering while the ground is still wet. Place it in a representative spot, away from downpipes and permanent shade. Note that a weather station such as Eve Weather measures temperature, air humidity and pressure, but not soil moisture.</p>

<h2>Connected outdoor lighting</h2>

<h3>Solar or low voltage</h3>
<p>Connected solar path lights need no wiring, but their runtime depends on sunshine and drops sharply in winter. For reliable lighting all year round, low-voltage systems such as <strong>Philips Hue Outdoor</strong> (24 V power supply) connect to a power unit and can be controlled by app, voice or automation. Govee and LEDVANCE SMART+ also offer connected outdoor ranges.</p>

<h3>Smart floodlights</h3>
<p>The Philips Hue Discover is a colour floodlight for highlighting a façade or a tree, while Hue Lily spotlights are designed for accent lighting in flower beds. If security comes first, the Ring Floodlight Cam combines a floodlight, motion detection and a security camera.</p>

<h3>Outdoor LED strips and festoons</h3>
<p>Outdoor LED strips (IP65 minimum) from Govee, Philips Hue or LIFX create atmosphere on terraces and pergolas. They are app-controlled and work with Alexa and Google Home; part of these ranges is also Matter-compatible.</p>

<h2>Connected pool robots</h2>

<h3>Two references</h3>
<p>Connected pool robots clean the floor, walls and waterline on their own:</p>
<ul>
<li><strong>Dolphin S300i (Maytronics):</strong> controlled via the MyDolphin Plus app (scheduling, cycle selection, spot cleaning). Cycles of 1.5 to 2.5 hours covering floor, walls and waterline, for pools up to 12 m long.</li>
<li><strong>Zodiac CNX 40 iQ:</strong> tracks and twin drive motors, gyroscope and accelerometer sensors to cover the whole pool, dual filtration and control through the iAquaLink app. Designed for pools up to 12 × 6 m.</li>
</ul>
<p>There are also cordless, battery-powered pool robots such as the Aiper Seagull Pro, which do away with the power cable. They are handy for small pools, but not all of them offer app control.</p>

<h3>Selection criteria</h3>
<ul>
<li><strong>Pool type:</strong> flat bottom, gentle slopes, freeform: check compatibility</li>
<li><strong>Pool size:</strong> stay within the maximum length stated by the manufacturer</li>
<li><strong>Surface:</strong> liner, tile, concrete: the brushes must be suitable</li>
<li><strong>Connectivity:</strong> app, remote scheduling, diagnostics</li>
</ul>

<h2>Smart BBQ thermometers and accessories</h2>

<h3>MEATER 2 Plus: the wireless probe</h3>
<p>The <strong>MEATER 2 Plus</strong> is a fully wireless probe that goes straight into the meat. It measures internal and ambient temperature and talks to your phone over Bluetooth. To follow the cook from further away, the app can use a second device left within range as a Wi-Fi bridge (the MEATER Link feature). Guided cooking shows an estimate of the time remaining.</p>

<h3>Inkbird and Weber Connect</h3>
<p><strong>Inkbird IBBQ-4BW:</strong> 4 wired probes, 2.4 GHz Wi-Fi and Bluetooth, an app with temperature alerts. Well suited to long cooks (low and slow).</p>
<p><strong>Weber Connect Smart Grilling Hub:</strong> a connected hub that works with any barbecue and takes up to 4 probes. The app tells you when to flip and when to serve, and includes Weber recipes.</p>

<h2>Where to start, depending on your garden</h2>

<h3>Small garden (under 600 m²)</h3>
<ul>
<li>A connected tap controller (Eve Aqua or Gardena smart Water Control)</li>
<li>The boundary wire Gardena SILENO City 600 for a simple garden, or the ECOVACS GOAT O600 RTK to avoid the wire</li>
<li>A few solar path lights or a small low-voltage lighting kit</li>
</ul>

<h3>Medium garden (600 to 1,600 m²)</h3>
<ul>
<li>Segway Navimow i208 AWD (up to 800 m², 45% slopes) or Worx Landroid Vision L1600 (up to 1,600 m²)</li>
<li>Gardena smart system with a soil moisture sensor</li>
<li>Philips Hue Outdoor low-voltage lighting</li>
<li>A connected BBQ thermometer (Inkbird IBBQ-4BW or MEATER 2 Plus)</li>
</ul>

<h3>Large or sloping plot</h3>
<ul>
<li>Husqvarna Automower 450X NERA (up to 5,000 m², wire or EPOS) or Mammotion LUBA 3 AWD 5000 (slopes up to 80%)</li>
<li>Multi-zone underground irrigation with a Hunter Hydrawise controller</li>
<li>A Dolphin S300i or Zodiac CNX 40 iQ pool robot if you have a pool</li>
</ul>

<h2>Matter compatibility for the smart garden</h2>
<p>The <strong>Matter</strong> protocol is reaching the garden too, even if not every category is covered yet:</p>
<ul>
<li><strong>Eve Aqua:</strong> native Matter tap controller (Thread)</li>
<li><strong>Philips Hue Outdoor:</strong> Matter-compatible via the Hue Bridge</li>
<li><strong>Eve Weather:</strong> Matter over Thread version for outdoor temperature and humidity</li>
<li><strong>Robot mowers:</strong> no Matter support so far; they run in the manufacturer's app, and some, such as the Mammotion LUBA, work with Alexa and Google Assistant</li>
</ul>
<p>The advantage of Matter is unified control from Apple Home, Google Home, Amazon Alexa or SmartThings, with local operation for many functions. Thread devices need a Thread border router (some recent smart speakers and hubs fill this role).</p>

<h2>Conclusion: where to start?</h2>
<p>If you are new to smart gardening, start with <strong>smart irrigation</strong>: it is a modest investment whose effects show from the first summer. Then choose a <strong>robot mower</strong> based on three criteria: area, slope and how open the sky is. Connected outdoor lighting adds comfort and security, while connected BBQ thermometers make weekend cooking easier.</p>
<p>Explore our specialist guides for deeper dives into each category: <a href="/en/blog/tondeuse-robot-sans-fil-perimetrique">cable-free robot mowers</a> and <a href="/en/blog/arrosage-connecte-intelligent">smart irrigation systems</a>.</p>`,

    de: `<h2>Der vernetzte Garten 2026: was sich wirklich geändert hat</h2>
<p>Ein vernetzter Garten besteht heute aus drei Bausteinen: einem <strong>Mähroboter</strong>, einer <strong>wettergesteuerten Bewässerung</strong> und einer <strong>Außenbeleuchtung</strong>, die sich per Smartphone steuern lässt. Die große Veränderung 2026: Mähroboter ohne Begrenzungskabel, die sich per RTK, LiDAR oder Kamera orientieren, sind im Massenmarkt angekommen, und das <strong>Matter</strong>-Protokoll bringt immer mehr Geräte in einer App zusammen.</p>
<p>Ob kleiner Stadtgarten mit 100 m² oder Grundstück mit 5.000 m²: Dieser Ratgeber hilft Ihnen, die passende Ausstattung für Ihren Außenbereich zu wählen. Er behandelt fünf Kategorien: <strong>Mähroboter</strong>, <strong>smarte Bewässerung</strong>, <strong>Außenbeleuchtung</strong>, <strong>Poolroboter</strong> und <strong>vernetzte BBQ-Thermometer</strong>. Die Angaben beruhen auf Herstellerdatenblättern, unabhängigen Testberichten und verifizierten Käuferbewertungen.</p>
<p>Für mehr Details lesen Sie unsere speziellen Ratgeber: <a href="/de/blog/tondeuse-robot-sans-fil-perimetrique">Mähroboter ohne Begrenzungskabel im Vergleich</a> und <a href="/de/blog/arrosage-connecte-intelligent">Ratgeber smarte Bewässerung</a>.</p>

<h2>Mähroboter: Begrenzungskabel oder kabellose Navigation</h2>

<h3>Zwei unterschiedliche Ansätze</h3>
<p>Ein klassischer Mähroboter folgt einem <strong>Begrenzungskabel</strong>, das um den Rasen verlegt oder eingegraben wird. Das kostet Zeit, und bei Gartenarbeiten kann das Kabel beschädigt werden. Modelle ohne Begrenzungskabel legen die Mähfläche virtuell in der App fest, mithilfe von <strong>RTK</strong> (korrigierte Satellitenortung mit wenigen Zentimetern Genauigkeit), <strong>LiDAR</strong> oder <strong>Kameras</strong> mit Bilderkennung. Je nach Hersteller werden diese Technologien kombiniert.</p>
<p>Die Vorteile liegen auf der Hand: schnellere Installation, Mähzonen mit wenigen Fingertipps änderbar, Sperrzonen für Beete oder Gemüsegarten leicht anzulegen. Es gibt aber auch Grenzen: RTK braucht freie Sicht zum Himmel oder eine Netzkorrektur, und reine Kameranavigation kann bei schwachem Licht oder undeutlichen Rasenkanten Probleme haben.</p>

<h3>Referenzmodelle 2026</h3>
<table>
<thead>
<tr><th>Marke</th><th>Modell</th><th>Navigation</th><th>Max. Fläche</th><th>Max. Steigung</th><th>Geeignet für</th></tr>
</thead>
<tbody>
<tr><td><strong>Husqvarna</strong></td><td>Automower 450X NERA</td><td>Kabel oder EPOS (optionales Kit)</td><td>5.000 m²</td><td>50 %</td><td>Große, verwinkelte Gärten</td></tr>
<tr><td><strong>Mammotion</strong></td><td>LUBA 3 AWD 5000</td><td>360°-LiDAR + Netz-RTK + Kamera</td><td>5.000 m²</td><td>80 %</td><td>Sehr steile Hanglagen</td></tr>
<tr><td><strong>Segway</strong></td><td>Navimow i208 AWD</td><td>Netz-RTK + Kamera</td><td>800 m²</td><td>45 %</td><td>Mittlere, hügelige Gärten</td></tr>
<tr><td><strong>ECOVACS</strong></td><td>GOAT O600 RTK</td><td>RTK + Kamera</td><td>600 m²</td><td>45 %</td><td>Kleine Gärten mit Hindernissen</td></tr>
<tr><td><strong>Gardena</strong></td><td>SILENO City 600</td><td>Begrenzungskabel</td><td>600 m²</td><td>25 %</td><td>Kleine, einfache Gärten</td></tr>
<tr><td><strong>Worx</strong></td><td>Landroid Vision L1600</td><td>Kamera + KI</td><td>1.600 m²</td><td>30 %</td><td>Rasen mit klaren Kanten</td></tr>
</tbody>
</table>
<p>Flächen und Steigungen laut Herstellerangaben. Unser <a href="/de/blog/tondeuse-robot-sans-fil-perimetrique">kompletter Vergleich der Mähroboter ohne Begrenzungskabel</a> beschreibt Stärken und Grenzen jedes Modells, die Installation und die Fehlerbehebung.</p>

<h3>Auswahlkriterien</h3>
<ul>
<li><strong>Rasenfläche:</strong> Für einen kleinen, einfachen Garten (unter 600 m²) bleibt ein Modell mit Begrenzungskabel eine zuverlässige und günstige Lösung. Ab 1.000 m² oder bei mehreren Teilflächen ist kabellos deutlich praktischer.</li>
<li><strong>Hanglage:</strong> Bei mehr als 25 % Steigung wählen Sie ein Modell, das für mehr ausgelegt ist, idealerweise mit Allradantrieb wie den Mammotion LUBA 3 AWD (80 %) oder den Navimow i208 AWD (45 %).</li>
<li><strong>Mehrere Zonen:</strong> Einige Modelle bewältigen mehrere Rasenflächen, die durch einen Weg oder einen schmalen Durchgang getrennt sind.</li>
<li><strong>Satellitenempfang:</strong> Bei hohen Bäumen oder Mauern sind Modelle im Vorteil, die RTK mit LiDAR oder Kamera kombinieren.</li>
<li><strong>Lärm und Tiere:</strong> Mähroboter sind viel leiser als Benzinmäher, sollten aber nicht nachts mähen: Igel sind in der Dämmerung aktiv und können verletzt werden.</li>
</ul>

<h2>Smarte Bewässerungssysteme</h2>

<h3>Nur gießen, wenn es nötig ist</h3>
<p>Eine smarte Steuerung passt Dauer und Häufigkeit der Bewässerung an <strong>Wettervorhersage</strong>, <strong>Temperatur</strong> und, mit Sensor, an die <strong>tatsächliche Bodenfeuchte</strong> an. Sie lässt die Bewässerung kurz vor einem Regenschauer oder bei noch feuchtem Boden ausfallen. Wie viel Wasser Sie sparen, hängt von Ihren bisherigen Gewohnheiten ab: Der Effekt ist deutlich, wenn Sie bisher zu festen Zeiten unabhängig vom Wetter gegossen haben, und kleiner, wenn Sie schon von Hand nachjustiert haben.</p>

<h3>Lösungen am Markt</h3>
<ul>
<li><strong>Gardena smart system:</strong> Komplettes Ökosystem mit Steuerungen (smart Water Control für einen Wasserhahn, smart Irrigation Control für mehrere Ventile), smart Sensor und smart Gateway, alles in der Gardena smart App. In Europa weit verbreitet.</li>
<li><strong>Hunter Hydrawise (HC, Pro-HC):</strong> WLAN-Steuergeräte für versenkte Mehrzonen-Bewässerung, in europäischen 230-V-Versionen erhältlich. Die vorausschauende Bewässerung richtet sich nach dem lokalen Wetter, Regen-, Frost- und Bodenfeuchtesensoren werden unterstützt.</li>
<li><strong>Eve Aqua:</strong> Bewässerungssteuerung für den Wasserhahn mit Matter over Thread, steuerbar über Apple Home oder jede Matter-kompatible App. Ideal für einen Schlauch oder eine einfache Tropfbewässerung.</li>
</ul>
<p>Lesen Sie unseren <a href="/de/blog/arrosage-connecte-intelligent">kompletten Ratgeber zur smarten Bewässerung</a> mit detailliertem Vergleich.</p>

<h3>Bodenfeuchtesensoren</h3>
<p>Ein Sensor wie der Gardena smart Sensor misst Bodenfeuchte und Bodentemperatur und kann die Bewässerung blockieren, solange die Erde noch feucht ist. Platzieren Sie ihn an einer repräsentativen Stelle, abseits von Fallrohren und Dauerschatten. Hinweis: Eine Wetterstation wie Eve Weather misst Temperatur, Luftfeuchtigkeit und Luftdruck, aber nicht die Bodenfeuchte.</p>

<h2>Vernetzte Außenbeleuchtung</h2>

<h3>Solar oder Niedervolt</h3>
<p>Vernetzte Solar-Wegeleuchten brauchen keine Verkabelung, ihre Leuchtdauer hängt aber von der Sonneneinstrahlung ab und sinkt im Winter deutlich. Für zuverlässiges Licht das ganze Jahr über werden Niedervolt-Systeme wie <strong>Philips Hue Outdoor</strong> (24-V-Versorgung) an ein Netzteil angeschlossen und per App, Sprache oder Automation gesteuert. Auch Govee und LEDVANCE SMART+ bieten vernetzte Outdoor-Sortimente an.</p>

<h3>Smarte Strahler</h3>
<p>Der Philips Hue Discover ist ein Farbstrahler, um eine Fassade oder einen Baum in Szene zu setzen, während die Hue Lily Spots für Akzentlicht im Beet gedacht sind. Steht die Sicherheit im Vordergrund, kombiniert die Ring Floodlight Cam Flutlicht, Bewegungserkennung und Überwachungskamera.</p>

<h3>Outdoor-LED-Streifen und Lichterketten</h3>
<p>Outdoor-LED-Streifen (mindestens IP65) von Govee, Philips Hue oder LIFX sorgen für Stimmung auf Terrasse und Pergola. Sie lassen sich per App steuern und funktionieren mit Alexa und Google Home; ein Teil dieser Sortimente ist zudem Matter-kompatibel.</p>

<h2>Vernetzte Poolroboter</h2>

<h3>Zwei Referenzen</h3>
<p>Vernetzte Poolroboter reinigen Boden, Wände und Wasserlinie selbstständig:</p>
<ul>
<li><strong>Dolphin S300i (Maytronics):</strong> Steuerung über die MyDolphin Plus App (Zeitplan, Programmwahl, gezielte Reinigung). Reinigungszyklen von 1,5 bis 2,5 Stunden für Boden, Wände und Wasserlinie, für Becken bis 12 m Länge.</li>
<li><strong>Zodiac CNX 40 iQ:</strong> Raupenantrieb mit zwei Antriebsmotoren, Gyroskop- und Beschleunigungssensoren für die vollständige Abdeckung, doppelte Filterung und Steuerung über die iAquaLink App. Für Becken bis 12 × 6 m.</li>
</ul>
<p>Es gibt auch kabellose Poolroboter mit Akku wie den Aiper Seagull Pro, die ohne Stromkabel auskommen. Für kleine Pools praktisch, bieten aber nicht alle eine App-Steuerung.</p>

<h3>Auswahlkriterien</h3>
<ul>
<li><strong>Pooltyp:</strong> Flachboden, sanfte Neigung, Freiform: Kompatibilität prüfen</li>
<li><strong>Beckengröße:</strong> die vom Hersteller angegebene maximale Länge einhalten</li>
<li><strong>Oberfläche:</strong> Folie, Fliesen, Beton: Die Bürsten müssen passen</li>
<li><strong>Konnektivität:</strong> App, Fernplanung, Diagnose</li>
</ul>

<h2>Vernetzte BBQ-Thermometer und Zubehör</h2>

<h3>MEATER 2 Plus: der kabellose Fühler</h3>
<p>Das <strong>MEATER 2 Plus</strong> ist ein komplett kabelloser Fühler, der direkt ins Fleisch gesteckt wird. Er misst Kern- und Umgebungstemperatur und kommuniziert per Bluetooth mit dem Smartphone. Um das Garen aus größerer Entfernung zu verfolgen, kann die App ein zweites Gerät in Reichweite als WLAN-Brücke nutzen (Funktion MEATER Link). Das geführte Garen zeigt eine Schätzung der Restzeit an.</p>

<h3>Inkbird und Weber Connect</h3>
<p><strong>Inkbird IBBQ-4BW:</strong> 4 kabelgebundene Fühler, 2,4-GHz-WLAN und Bluetooth, App mit Temperaturalarmen. Gut geeignet für lange Garzeiten (Low &amp; Slow).</p>
<p><strong>Weber Connect Smart Grilling Hub:</strong> Vernetzter Hub für jeden Grill mit bis zu 4 Fühlern. Die App sagt Ihnen, wann Sie wenden und servieren sollten, und bietet Weber-Rezepte.</p>

<h2>Womit anfangen: je nach Garten</h2>

<h3>Kleiner Garten (unter 600 m²)</h3>
<ul>
<li>Vernetzte Wasserhahn-Steuerung (Eve Aqua oder Gardena smart Water Control)</li>
<li>Gardena SILENO City 600 mit Begrenzungskabel für einen einfachen Garten, oder ECOVACS GOAT O600 RTK ohne Kabel</li>
<li>Einige Solar-Wegeleuchten oder ein kleines Niedervolt-Lichtset</li>
</ul>

<h3>Mittlerer Garten (600 bis 1.600 m²)</h3>
<ul>
<li>Segway Navimow i208 AWD (bis 800 m², 45 % Steigung) oder Worx Landroid Vision L1600 (bis 1.600 m²)</li>
<li>Gardena smart system mit Bodenfeuchtesensor</li>
<li>Niedervolt-Beleuchtung Philips Hue Outdoor</li>
<li>Vernetztes BBQ-Thermometer (Inkbird IBBQ-4BW oder MEATER 2 Plus)</li>
</ul>

<h3>Großes Grundstück oder Hanglage</h3>
<ul>
<li>Husqvarna Automower 450X NERA (bis 5.000 m², Kabel oder EPOS) oder Mammotion LUBA 3 AWD 5000 (bis 80 % Steigung)</li>
<li>Versenkte Mehrzonen-Bewässerung mit einem Hunter Hydrawise Steuergerät</li>
<li>Poolroboter Dolphin S300i oder Zodiac CNX 40 iQ, falls Sie einen Pool haben</li>
</ul>

<h2>Matter-Kompatibilität im vernetzten Garten</h2>
<p>Das <strong>Matter</strong>-Protokoll erreicht auch den Garten, auch wenn noch nicht alle Kategorien abgedeckt sind:</p>
<ul>
<li><strong>Eve Aqua:</strong> Matter-native Wasserhahn-Steuerung (Thread)</li>
<li><strong>Philips Hue Outdoor:</strong> über die Hue Bridge Matter-kompatibel</li>
<li><strong>Eve Weather:</strong> Version mit Matter over Thread für Außentemperatur und Luftfeuchtigkeit</li>
<li><strong>Mähroboter:</strong> bisher keine Matter-Unterstützung; sie werden in der Hersteller-App gesteuert, und einige, etwa die Mammotion LUBA, funktionieren mit Alexa und Google Assistant</li>
</ul>
<p>Der Vorteil von Matter: einheitliche Steuerung über Apple Home, Google Home, Amazon Alexa oder SmartThings, bei vielen Funktionen lokal. Thread-Geräte benötigen einen Thread-Border-Router (diese Rolle übernehmen einige aktuelle smarte Lautsprecher und Hubs).</p>

<h2>Fazit: Wo anfangen?</h2>
<p>Wenn Sie neu einsteigen, beginnen Sie mit der <strong>smarten Bewässerung</strong>: eine überschaubare Investition, deren Wirkung schon im ersten Sommer sichtbar wird. Wählen Sie danach einen <strong>Mähroboter</strong> nach drei Kriterien: Fläche, Steigung und freie Sicht zum Himmel. Vernetzte Außenbeleuchtung bringt Komfort und Sicherheit, vernetzte BBQ-Thermometer erleichtern das Grillen am Wochenende.</p>
<p>Erkunden Sie unsere Spezialratgeber für tiefere Einblicke in jede Kategorie: <a href="/de/blog/tondeuse-robot-sans-fil-perimetrique">Mähroboter ohne Begrenzungskabel</a> und <a href="/de/blog/arrosage-connecte-intelligent">smarte Bewässerungssysteme</a>.</p>`,

    es: `<h2>El jardín inteligente en 2026: lo que realmente ha cambiado</h2>
<p>Hoy un jardín inteligente se apoya en tres pilares: un <strong>robot cortacésped</strong>, un <strong>riego gestionado según el tiempo</strong> y una <strong>iluminación exterior</strong> que se controla desde el móvil. El gran cambio de 2026 es la generalización de los robots cortacésped sin cable perimetral, que se orientan mediante RTK, LiDAR o cámaras, y el avance del protocolo <strong>Matter</strong>, que reúne cada vez más dispositivos en una sola aplicación.</p>
<p>Tanto si tienes un pequeño jardín urbano de 100 m² como un terreno de 5.000 m², esta guía te ayuda a elegir el equipamiento adecuado para tu espacio exterior. Cubre cinco categorías: <strong>robots cortacésped</strong>, <strong>riego inteligente</strong>, <strong>iluminación exterior</strong>, <strong>robots de piscina</strong> y <strong>termómetros BBQ conectados</strong>. La información se basa en las fichas técnicas de los fabricantes, análisis independientes y opiniones de compradores verificados.</p>
<p>Para profundizar, consulta nuestras guías específicas: <a href="/es/blog/tondeuse-robot-sans-fil-perimetrique">comparativa de robots cortacésped sin cable perimetral</a> y <a href="/es/blog/arrosage-connecte-intelligent">guía de riego inteligente</a>.</p>

<h2>Robots cortacésped: cable perimetral o navegación sin cable</h2>

<h3>Dos enfoques distintos</h3>
<p>Un robot cortacésped clásico sigue un <strong>cable perimetral</strong> enterrado o fijado con piquetas alrededor del césped. Instalarlo lleva tiempo y el cable puede cortarse durante trabajos en el jardín. Los modelos sin cable perimetral delimitan la zona de corte de forma virtual en la app, gracias al <strong>RTK</strong> (posicionamiento por satélite corregido, con precisión de pocos centímetros), al <strong>LiDAR</strong> o a <strong>cámaras</strong> con reconocimiento de imagen. Según la marca, estas tecnologías se combinan.</p>
<p>Las ventajas son claras: instalación más rápida, zonas de corte que se modifican con unos toques y zonas de exclusión para parterres o huerto fáciles de crear. También hay límites: el RTK necesita cielo despejado o una corrección por red, y la visión por sí sola puede tener dificultades con poca luz o bordes poco definidos.</p>

<h3>Modelos de referencia en 2026</h3>
<table>
<thead>
<tr><th>Marca</th><th>Modelo</th><th>Navegación</th><th>Superficie máx.</th><th>Pendiente máx.</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td><strong>Husqvarna</strong></td><td>Automower 450X NERA</td><td>Cable o EPOS (kit opcional)</td><td>5.000 m²</td><td>50 %</td><td>Jardines grandes y complejos</td></tr>
<tr><td><strong>Mammotion</strong></td><td>LUBA 3 AWD 5000</td><td>LiDAR 360° + RTK por red + visión</td><td>5.000 m²</td><td>80 %</td><td>Terrenos muy inclinados</td></tr>
<tr><td><strong>Segway</strong></td><td>Navimow i208 AWD</td><td>RTK por red + visión</td><td>800 m²</td><td>45 %</td><td>Jardines medianos con desniveles</td></tr>
<tr><td><strong>ECOVACS</strong></td><td>GOAT O600 RTK</td><td>RTK + visión</td><td>600 m²</td><td>45 %</td><td>Jardines pequeños con obstáculos</td></tr>
<tr><td><strong>Gardena</strong></td><td>SILENO City 600</td><td>Cable perimetral</td><td>600 m²</td><td>25 %</td><td>Jardines pequeños y sencillos</td></tr>
<tr><td><strong>Worx</strong></td><td>Landroid Vision L1600</td><td>Cámara + IA</td><td>1.600 m²</td><td>30 %</td><td>Céspedes con bordes claros</td></tr>
</tbody>
</table>
<p>Superficies y pendientes según los fabricantes. Nuestra <a href="/es/blog/tondeuse-robot-sans-fil-perimetrique">comparativa completa de robots cortacésped sin cable</a> detalla los puntos fuertes y límites de cada modelo, la instalación y la solución de problemas.</p>

<h3>Criterios de elección</h3>
<ul>
<li><strong>Superficie:</strong> para un jardín pequeño y sencillo (menos de 600 m²), un modelo con cable sigue siendo una opción fiable y económica. A partir de 1.000 m² o en jardines divididos, el sin cable resulta mucho más práctico.</li>
<li><strong>Pendiente:</strong> si tu terreno supera el 25 % de pendiente, elige un modelo homologado para más, idealmente con tracción total como el Mammotion LUBA 3 AWD (80 %) o el Navimow i208 AWD (45 %).</li>
<li><strong>Varias zonas:</strong> algunos modelos gestionan varios céspedes separados por un camino o un paso estrecho.</li>
<li><strong>Cobertura de satélite:</strong> con árboles altos o muros elevados, conviene un modelo que combine RTK con LiDAR o visión.</li>
<li><strong>Ruido y fauna:</strong> los robots son mucho más silenciosos que un cortacésped de gasolina, pero evita programarlos de noche: los erizos están activos al anochecer y pueden resultar heridos.</li>
</ul>

<h2>Sistemas de riego inteligente</h2>

<h3>Regar solo cuando hace falta</h3>
<p>Un programador inteligente ajusta la duración y la frecuencia del riego según la <strong>previsión meteorológica</strong>, la <strong>temperatura</strong> y, con un sensor, la <strong>humedad real del suelo</strong>. Evita regar justo antes de la lluvia o con el suelo todavía húmedo. El ahorro de agua depende de tus hábitos de partida: es claro si regabas a horas fijas sin mirar el tiempo, y menor si ya ajustabas a mano.</p>

<h3>Soluciones del mercado</h3>
<ul>
<li><strong>Gardena smart system:</strong> ecosistema completo con programadores (smart Water Control para un grifo, smart Irrigation Control para varias válvulas), sensor smart Sensor y pasarela smart Gateway, todo gestionado en la app Gardena smart. Muy extendido en Europa.</li>
<li><strong>Hunter Hydrawise (HC, Pro-HC):</strong> programadores wifi para riego enterrado por zonas, disponibles en versiones europeas de 230 V. El riego predictivo se adapta al tiempo local y admite sensores de lluvia, helada y humedad.</li>
<li><strong>Eve Aqua:</strong> programador de grifo Matter over Thread, controlable desde Apple Home o cualquier app compatible con Matter. Ideal para una manguera o un goteo sencillo.</li>
</ul>
<p>Consulta nuestra <a href="/es/blog/arrosage-connecte-intelligent">guía completa de riego inteligente</a> para una comparativa detallada.</p>

<h3>Sensores de humedad del suelo</h3>
<p>Un sensor como el Gardena smart Sensor mide la humedad y la temperatura del suelo y puede bloquear el riego mientras la tierra siga húmeda. Colócalo en una zona representativa, lejos de bajantes y de la sombra permanente. Ojo: una estación como Eve Weather mide temperatura, humedad del aire y presión, pero no la humedad del suelo.</p>

<h2>Iluminación exterior conectada</h2>

<h3>Solar o baja tensión</h3>
<p>Las balizas solares conectadas no necesitan cableado, pero su autonomía depende del sol y baja mucho en invierno. Para una iluminación fiable todo el año, los sistemas de baja tensión como <strong>Philips Hue Outdoor</strong> (alimentación de 24 V) se conectan a una fuente de alimentación y se controlan por app, voz o automatización. Govee y LEDVANCE SMART+ también ofrecen gamas exteriores conectadas.</p>

<h3>Focos inteligentes</h3>
<p>El Philips Hue Discover es un foco de color para realzar una fachada o un árbol, mientras que los focos Hue Lily están pensados para la iluminación de ambiente en parterres. Si la seguridad es la prioridad, la Ring Floodlight Cam combina foco, detección de movimiento y cámara de vigilancia.</p>

<h3>Tiras y guirnaldas LED exteriores</h3>
<p>Las tiras LED exteriores (IP65 como mínimo) de Govee, Philips Hue o LIFX crean ambiente en terrazas y pérgolas. Se controlan desde la app y funcionan con Alexa y Google Home; parte de estas gamas también es compatible con Matter.</p>

<h2>Robots de piscina conectados</h2>

<h3>Dos referencias</h3>
<p>Los robots de piscina conectados limpian el fondo, las paredes y la línea de flotación de forma autónoma:</p>
<ul>
<li><strong>Dolphin S300i (Maytronics):</strong> control mediante la app MyDolphin Plus (programación, elección de ciclo, limpieza localizada). Ciclos de 1,5 a 2,5 horas para fondo, paredes y línea de flotación, en piscinas de hasta 12 m.</li>
<li><strong>Zodiac CNX 40 iQ:</strong> orugas y doble motor de tracción, sensores de giroscopio y acelerómetro para cubrir toda la piscina, doble filtración y control desde la app iAquaLink. Pensado para piscinas de hasta 12 × 6 m.</li>
</ul>
<p>También hay robots de piscina inalámbricos con batería, como el Aiper Seagull Pro, que prescinden del cable de alimentación. Son prácticos para piscinas pequeñas, aunque no todos ofrecen control por app.</p>

<h3>Criterios de elección</h3>
<ul>
<li><strong>Tipo de piscina:</strong> fondo plano, pendientes suaves, forma libre: comprueba la compatibilidad</li>
<li><strong>Tamaño:</strong> respeta la longitud máxima indicada por el fabricante</li>
<li><strong>Revestimiento:</strong> liner, gresite, hormigón: los cepillos deben ser adecuados</li>
<li><strong>Conectividad:</strong> app, programación remota, diagnóstico</li>
</ul>

<h2>Termómetros y accesorios BBQ conectados</h2>

<h3>MEATER 2 Plus: la sonda inalámbrica</h3>
<p>El <strong>MEATER 2 Plus</strong> es una sonda totalmente inalámbrica que se clava directamente en la carne. Mide la temperatura interna y la ambiente, y se comunica por Bluetooth con el móvil. Para seguir la cocción desde más lejos, la app puede usar un segundo dispositivo dentro del alcance como puente wifi (función MEATER Link). La cocción guiada muestra una estimación del tiempo restante.</p>

<h3>Inkbird y Weber Connect</h3>
<p><strong>Inkbird IBBQ-4BW:</strong> 4 sondas con cable, wifi de 2,4 GHz y Bluetooth, app con alertas de temperatura. Adecuado para cocciones largas (low &amp; slow).</p>
<p><strong>Weber Connect Smart Grilling Hub:</strong> centralita conectada compatible con cualquier barbacoa y hasta 4 sondas. La app te avisa de cuándo dar la vuelta y cuándo servir, e incluye recetas de Weber.</p>

<h2>Por dónde empezar según tu jardín</h2>

<h3>Jardín pequeño (menos de 600 m²)</h3>
<ul>
<li>Programador de grifo conectado (Eve Aqua o Gardena smart Water Control)</li>
<li>Gardena SILENO City 600 con cable para un jardín sencillo, o ECOVACS GOAT O600 RTK para prescindir del cable</li>
<li>Unas balizas solares o un pequeño kit de iluminación de baja tensión</li>
</ul>

<h3>Jardín mediano (de 600 a 1.600 m²)</h3>
<ul>
<li>Segway Navimow i208 AWD (hasta 800 m², pendientes del 45 %) o Worx Landroid Vision L1600 (hasta 1.600 m²)</li>
<li>Gardena smart system con sensor de humedad del suelo</li>
<li>Iluminación de baja tensión Philips Hue Outdoor</li>
<li>Termómetro BBQ conectado (Inkbird IBBQ-4BW o MEATER 2 Plus)</li>
</ul>

<h3>Terreno grande o en pendiente</h3>
<ul>
<li>Husqvarna Automower 450X NERA (hasta 5.000 m², cable o EPOS) o Mammotion LUBA 3 AWD 5000 (pendientes de hasta el 80 %)</li>
<li>Riego enterrado por zonas con un programador Hunter Hydrawise</li>
<li>Robot de piscina Dolphin S300i o Zodiac CNX 40 iQ si tienes piscina</li>
</ul>

<h2>Compatibilidad Matter en el jardín inteligente</h2>
<p>El protocolo <strong>Matter</strong> también llega al jardín, aunque todavía no cubre todas las categorías:</p>
<ul>
<li><strong>Eve Aqua:</strong> programador de grifo con Matter nativo (Thread)</li>
<li><strong>Philips Hue Outdoor:</strong> compatible con Matter a través del Hue Bridge</li>
<li><strong>Eve Weather:</strong> versión Matter over Thread para temperatura y humedad exteriores</li>
<li><strong>Robots cortacésped:</strong> por ahora sin soporte Matter; se controlan desde la app del fabricante, y algunos, como los Mammotion LUBA, funcionan con Alexa y Google Assistant</li>
</ul>
<p>La ventaja de Matter es un control unificado desde Apple Home, Google Home, Amazon Alexa o SmartThings, con funcionamiento local en muchas funciones. Los dispositivos Thread necesitan un router de borde Thread (algunos altavoces y hubs inteligentes recientes cumplen esta función).</p>

<h2>Conclusión: ¿por dónde empezar?</h2>
<p>Si estás empezando, comienza por el <strong>riego inteligente</strong>: es una inversión moderada cuyos efectos se notan desde el primer verano. Después elige un <strong>robot cortacésped</strong> según tres criterios: superficie, pendiente y cielo despejado. La iluminación exterior conectada aporta comodidad y seguridad, y los termómetros BBQ conectados facilitan las barbacoas del fin de semana.</p>
<p>Explora nuestras guías especializadas para profundizar en cada categoría: <a href="/es/blog/tondeuse-robot-sans-fil-perimetrique">robots cortacésped sin cable</a> y <a href="/es/blog/arrosage-connecte-intelligent">sistemas de riego inteligente</a>.</p>`,

    it: `<h2>Il giardino smart nel 2026: cosa è cambiato davvero</h2>
<p>Oggi un giardino smart si basa su tre elementi: un <strong>robot tagliaerba</strong>, un'<strong>irrigazione gestita in base al meteo</strong> e un'<strong>illuminazione esterna</strong> controllabile dallo smartphone. La grande novità del 2026 è la diffusione dei robot tagliaerba senza filo perimetrale, che si orientano con RTK, LiDAR o telecamere, e la crescita del protocollo <strong>Matter</strong>, che riunisce sempre più dispositivi in un'unica app.</p>
<p>Che tu abbia un piccolo giardino in città di 100 m² o un terreno di 5.000 m², questa guida ti aiuta a scegliere l'attrezzatura giusta per il tuo spazio esterno. Copre cinque categorie: <strong>robot tagliaerba</strong>, <strong>irrigazione intelligente</strong>, <strong>illuminazione esterna</strong>, <strong>robot per piscina</strong> e <strong>termometri BBQ connessi</strong>. Le informazioni si basano sulle schede tecniche dei produttori, su analisi indipendenti e sulle recensioni di acquirenti verificati.</p>
<p>Per approfondire, consulta le nostre guide dedicate: <a href="/it/blog/tondeuse-robot-sans-fil-perimetrique">confronto dei robot tagliaerba senza filo perimetrale</a> e <a href="/it/blog/arrosage-connecte-intelligent">guida all'irrigazione intelligente</a>.</p>

<h2>Robot tagliaerba: filo perimetrale o navigazione senza filo</h2>

<h3>Due approcci diversi</h3>
<p>Un robot tagliaerba classico segue un <strong>filo perimetrale</strong> interrato o fissato con picchetti intorno al prato. La posa richiede tempo e il filo può essere tranciato durante i lavori in giardino. I modelli senza filo perimetrale delimitano l'area di taglio in modo virtuale nell'app, grazie all'<strong>RTK</strong> (posizionamento satellitare corretto, preciso a pochi centimetri), al <strong>LiDAR</strong> o a <strong>telecamere</strong> con riconoscimento delle immagini. A seconda del marchio, queste tecnologie vengono combinate.</p>
<p>I vantaggi sono evidenti: installazione più rapida, zone di taglio modificabili con pochi tocchi, zone di esclusione per aiuole o orto facili da creare. Ci sono però anche dei limiti: l'RTK ha bisogno di cielo libero o di una correzione via rete, e la sola visione può avere difficoltà con poca luce o bordi poco definiti.</p>

<h3>Modelli di riferimento nel 2026</h3>
<table>
<thead>
<tr><th>Marca</th><th>Modello</th><th>Navigazione</th><th>Superficie max</th><th>Pendenza max</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td><strong>Husqvarna</strong></td><td>Automower 450X NERA</td><td>Filo o EPOS (kit opzionale)</td><td>5.000 m²</td><td>50 %</td><td>Giardini grandi e complessi</td></tr>
<tr><td><strong>Mammotion</strong></td><td>LUBA 3 AWD 5000</td><td>LiDAR 360° + RTK di rete + visione</td><td>5.000 m²</td><td>80 %</td><td>Terreni molto ripidi</td></tr>
<tr><td><strong>Segway</strong></td><td>Navimow i208 AWD</td><td>RTK di rete + visione</td><td>800 m²</td><td>45 %</td><td>Giardini medi con dislivelli</td></tr>
<tr><td><strong>ECOVACS</strong></td><td>GOAT O600 RTK</td><td>RTK + visione</td><td>600 m²</td><td>45 %</td><td>Piccoli giardini con ostacoli</td></tr>
<tr><td><strong>Gardena</strong></td><td>SILENO City 600</td><td>Filo perimetrale</td><td>600 m²</td><td>25 %</td><td>Piccoli giardini semplici</td></tr>
<tr><td><strong>Worx</strong></td><td>Landroid Vision L1600</td><td>Telecamera + IA</td><td>1.600 m²</td><td>30 %</td><td>Prati con bordi netti</td></tr>
</tbody>
</table>
<p>Superfici e pendenze dichiarate dai produttori. Il nostro <a href="/it/blog/tondeuse-robot-sans-fil-perimetrique">confronto completo dei robot tagliaerba senza filo</a> descrive punti di forza e limiti di ogni modello, l'installazione e la risoluzione dei problemi.</p>

<h3>Criteri di scelta</h3>
<ul>
<li><strong>Superficie:</strong> per un giardino piccolo e semplice (meno di 600 m²), un modello con filo resta una soluzione affidabile ed economica. Oltre i 1.000 m² o con un giardino suddiviso, il senza filo è molto più pratico.</li>
<li><strong>Pendenza:</strong> se il terreno supera il 25 % di pendenza, scegli un modello dichiarato per valori superiori, idealmente a trazione integrale come il Mammotion LUBA 3 AWD (80 %) o il Navimow i208 AWD (45 %).</li>
<li><strong>Zone multiple:</strong> alcuni modelli gestiscono più prati separati da un vialetto o da un passaggio stretto.</li>
<li><strong>Copertura satellitare:</strong> con alberi alti o muri elevati, meglio un modello che combini RTK con LiDAR o visione.</li>
<li><strong>Rumore e fauna:</strong> i robot sono molto più silenziosi di un tosaerba a benzina, ma evita di programmarli di notte: i ricci sono attivi al crepuscolo e rischiano di ferirsi.</li>
</ul>

<h2>Sistemi di irrigazione intelligente</h2>

<h3>Irrigare solo quando serve</h3>
<p>Una centralina smart regola durata e frequenza dell'irrigazione in base alle <strong>previsioni meteo</strong>, alla <strong>temperatura</strong> e, con un sensore, all'<strong>umidità reale del suolo</strong>. Evita di irrigare poco prima della pioggia o quando il terreno è ancora umido. Il risparmio d'acqua dipende dalle tue abitudini: è netto se irrigavi a orari fissi senza considerare il meteo, più contenuto se regolavi già a mano.</p>

<h3>Soluzioni sul mercato</h3>
<ul>
<li><strong>Gardena smart system:</strong> ecosistema completo con programmatori (smart Water Control per un rubinetto, smart Irrigation Control per più valvole), sensore smart Sensor e gateway smart Gateway, tutto gestito nell'app Gardena smart. Molto diffuso in Europa.</li>
<li><strong>Hunter Hydrawise (HC, Pro-HC):</strong> centraline Wi-Fi per l'irrigazione interrata a più zone, disponibili in versione europea a 230 V. L'irrigazione predittiva si adatta al meteo locale e supporta sensori di pioggia, gelo e umidità.</li>
<li><strong>Eve Aqua:</strong> programmatore per rubinetto Matter over Thread, gestibile da Apple Home o da qualsiasi app compatibile Matter. Ideale per un tubo o un semplice impianto a goccia.</li>
</ul>
<p>Leggi la nostra <a href="/it/blog/arrosage-connecte-intelligent">guida completa all'irrigazione intelligente</a> per un confronto dettagliato.</p>

<h3>Sensori di umidità del suolo</h3>
<p>Un sensore come il Gardena smart Sensor misura umidità e temperatura del suolo e può bloccare l'irrigazione finché il terreno è ancora umido. Posizionalo in un punto rappresentativo, lontano da pluviali e ombra permanente. Attenzione: una stazione come Eve Weather misura temperatura, umidità dell'aria e pressione, ma non l'umidità del suolo.</p>

<h2>Illuminazione esterna connessa</h2>

<h3>Solare o bassa tensione</h3>
<p>Le lampade solari connesse non richiedono cablaggio, ma la loro autonomia dipende dal sole e cala molto in inverno. Per un'illuminazione affidabile tutto l'anno, i sistemi a bassa tensione come <strong>Philips Hue Outdoor</strong> (alimentazione a 24 V) si collegano a un alimentatore e si controllano da app, con la voce o tramite automazioni. Anche Govee e LEDVANCE SMART+ offrono gamme da esterno connesse.</p>

<h3>Proiettori smart</h3>
<p>Il Philips Hue Discover è un proiettore a colori per valorizzare una facciata o un albero, mentre i faretti Hue Lily sono pensati per l'illuminazione d'atmosfera delle aiuole. Se la priorità è la sicurezza, la Ring Floodlight Cam unisce proiettore, rilevamento del movimento e telecamera di sorveglianza.</p>

<h3>Strisce e catene luminose LED da esterno</h3>
<p>Le strisce LED da esterno (almeno IP65) di Govee, Philips Hue o LIFX creano atmosfera su terrazze e pergolati. Si controllano da app e funzionano con Alexa e Google Home; una parte di queste gamme è anche compatibile Matter.</p>

<h2>Robot per piscina connessi</h2>

<h3>Due riferimenti</h3>
<p>I robot per piscina connessi puliscono fondo, pareti e linea di galleggiamento in autonomia:</p>
<ul>
<li><strong>Dolphin S300i (Maytronics):</strong> gestione tramite l'app MyDolphin Plus (programmazione, scelta del ciclo, pulizia mirata). Cicli da 1,5 a 2,5 ore per fondo, pareti e linea d'acqua, per piscine fino a 12 m.</li>
<li><strong>Zodiac CNX 40 iQ:</strong> cingoli e doppio motore di trazione, sensori giroscopio e accelerometro per coprire tutta la vasca, doppia filtrazione e controllo con l'app iAquaLink. Pensato per piscine fino a 12 × 6 m.</li>
</ul>
<p>Esistono anche robot per piscina senza filo a batteria, come l'Aiper Seagull Pro, che eliminano il cavo di alimentazione. Pratici per piscine piccole, non tutti offrono il controllo tramite app.</p>

<h3>Criteri di scelta</h3>
<ul>
<li><strong>Tipo di piscina:</strong> fondo piatto, pendenze dolci, forma libera: verifica la compatibilità</li>
<li><strong>Dimensioni:</strong> rispetta la lunghezza massima indicata dal produttore</li>
<li><strong>Rivestimento:</strong> liner, piastrelle, cemento: le spazzole devono essere adatte</li>
<li><strong>Connettività:</strong> app, programmazione remota, diagnostica</li>
</ul>

<h2>Termometri e accessori BBQ connessi</h2>

<h3>MEATER 2 Plus: la sonda senza fili</h3>
<p>Il <strong>MEATER 2 Plus</strong> è una sonda completamente senza fili da inserire direttamente nella carne. Misura la temperatura interna e quella ambiente e comunica via Bluetooth con lo smartphone. Per seguire la cottura da più lontano, l'app può usare un secondo dispositivo nel raggio d'azione come ponte Wi-Fi (funzione MEATER Link). La cottura guidata mostra una stima del tempo rimanente.</p>

<h3>Inkbird e Weber Connect</h3>
<p><strong>Inkbird IBBQ-4BW:</strong> 4 sonde con cavo, Wi-Fi a 2,4 GHz e Bluetooth, app con avvisi di temperatura. Adatto alle cotture lunghe (low &amp; slow).</p>
<p><strong>Weber Connect Smart Grilling Hub:</strong> hub connesso compatibile con qualsiasi barbecue, fino a 4 sonde. L'app indica quando girare e quando servire, e propone ricette Weber.</p>

<h2>Da dove partire in base al giardino</h2>

<h3>Giardino piccolo (meno di 600 m²)</h3>
<ul>
<li>Programmatore per rubinetto connesso (Eve Aqua o Gardena smart Water Control)</li>
<li>Gardena SILENO City 600 con filo per un giardino semplice, oppure ECOVACS GOAT O600 RTK per fare a meno del filo</li>
<li>Qualche lampada solare o un piccolo kit di illuminazione a bassa tensione</li>
</ul>

<h3>Giardino medio (da 600 a 1.600 m²)</h3>
<ul>
<li>Segway Navimow i208 AWD (fino a 800 m², pendenze del 45 %) o Worx Landroid Vision L1600 (fino a 1.600 m²)</li>
<li>Gardena smart system con sensore di umidità del suolo</li>
<li>Illuminazione a bassa tensione Philips Hue Outdoor</li>
<li>Termometro BBQ connesso (Inkbird IBBQ-4BW o MEATER 2 Plus)</li>
</ul>

<h3>Terreno grande o in pendenza</h3>
<ul>
<li>Husqvarna Automower 450X NERA (fino a 5.000 m², filo o EPOS) o Mammotion LUBA 3 AWD 5000 (pendenze fino all'80 %)</li>
<li>Irrigazione interrata a più zone con una centralina Hunter Hydrawise</li>
<li>Robot per piscina Dolphin S300i o Zodiac CNX 40 iQ se hai una piscina</li>
</ul>

<h2>Compatibilità Matter per il giardino smart</h2>
<p>Il protocollo <strong>Matter</strong> arriva anche in giardino, anche se non copre ancora tutte le categorie:</p>
<ul>
<li><strong>Eve Aqua:</strong> programmatore per rubinetto Matter nativo (Thread)</li>
<li><strong>Philips Hue Outdoor:</strong> compatibile Matter tramite il Hue Bridge</li>
<li><strong>Eve Weather:</strong> versione Matter over Thread per temperatura e umidità esterne</li>
<li><strong>Robot tagliaerba:</strong> per ora nessun supporto Matter; si gestiscono nell'app del produttore, e alcuni, come i Mammotion LUBA, funzionano con Alexa e Google Assistant</li>
</ul>
<p>Il vantaggio di Matter è un controllo unificato da Apple Home, Google Home, Amazon Alexa o SmartThings, con funzionamento locale per molte funzioni. I dispositivi Thread richiedono un border router Thread (alcuni smart speaker e hub recenti svolgono questo ruolo).</p>

<h2>Conclusione: da dove iniziare?</h2>
<p>Se sei agli inizi, parti dall'<strong>irrigazione intelligente</strong>: un investimento contenuto i cui effetti si vedono già dalla prima estate. Poi scegli un <strong>robot tagliaerba</strong> in base a tre criteri: superficie, pendenza e cielo libero. L'illuminazione esterna connessa aggiunge comfort e sicurezza, mentre i termometri BBQ connessi semplificano le grigliate del fine settimana.</p>
<p>Esplora le nostre guide specializzate per approfondire ogni categoria: <a href="/it/blog/tondeuse-robot-sans-fil-perimetrique">robot tagliaerba senza filo</a> e <a href="/it/blog/arrosage-connecte-intelligent">sistemi di irrigazione intelligente</a>.</p>`,

    nl: `<h2>De slimme tuin in 2026: wat er echt veranderd is</h2>
<p>Een slimme tuin draait vandaag om drie bouwstenen: een <strong>robotmaaier</strong>, <strong>besproeiing die zich aanpast aan het weer</strong> en <strong>buitenverlichting</strong> die je met je smartphone bedient. De grote verandering in 2026: robotmaaiers zonder begrenzingsdraad, die zich oriënteren met RTK, LiDAR of camera's, zijn gemeengoed geworden, en het <strong>Matter</strong>-protocol brengt steeds meer apparaten samen in één app.</p>
<p>Of je nu een kleine stadstuin van 100 m² hebt of een perceel van 5.000 m²: deze gids helpt je de juiste uitrusting voor je buitenruimte te kiezen. Hij behandelt vijf categorieën: <strong>robotmaaiers</strong>, <strong>slimme besproeiing</strong>, <strong>buitenverlichting</strong>, <strong>zwembadrobots</strong> en <strong>verbonden BBQ-thermometers</strong>. De informatie is gebaseerd op specificaties van fabrikanten, onafhankelijke reviews en beoordelingen van geverifieerde kopers.</p>
<p>Wil je meer weten, lees dan onze specifieke gidsen: <a href="/nl/blog/tondeuse-robot-sans-fil-perimetrique">vergelijking van robotmaaiers zonder begrenzingsdraad</a> en <a href="/nl/blog/arrosage-connecte-intelligent">gids voor slimme besproeiing</a>.</p>

<h2>Robotmaaiers: begrenzingsdraad of draadloze navigatie</h2>

<h3>Twee verschillende benaderingen</h3>
<p>Een klassieke robotmaaier volgt een <strong>begrenzingsdraad</strong> die rond het gazon wordt ingegraven of vastgepind. Dat kost tijd, en de draad kan bij tuinwerk worden doorgeknipt. Modellen zonder begrenzingsdraad leggen het maaigebied virtueel vast in de app, met behulp van <strong>RTK</strong> (gecorrigeerde satellietpositionering, nauwkeurig tot op enkele centimeters), <strong>LiDAR</strong> of <strong>camera's</strong> met beeldherkenning. Afhankelijk van het merk worden deze technieken gecombineerd.</p>
<p>De voordelen zijn duidelijk: snellere installatie, maaizones die je met een paar tikken aanpast en uitsluitingszones voor borders of moestuin die eenvoudig in te stellen zijn. Er zijn ook beperkingen: RTK heeft vrij zicht op de hemel of een netwerkcorrectie nodig, en alleen camera-navigatie kan moeite hebben bij weinig licht of onduidelijke gazonranden.</p>

<h3>Referentiemodellen in 2026</h3>
<table>
<thead>
<tr><th>Merk</th><th>Model</th><th>Navigatie</th><th>Max. oppervlak</th><th>Max. helling</th><th>Geschikt voor</th></tr>
</thead>
<tbody>
<tr><td><strong>Husqvarna</strong></td><td>Automower 450X NERA</td><td>Draad of EPOS (optionele kit)</td><td>5.000 m²</td><td>50%</td><td>Grote, complexe tuinen</td></tr>
<tr><td><strong>Mammotion</strong></td><td>LUBA 3 AWD 5000</td><td>360°-LiDAR + netwerk-RTK + camera</td><td>5.000 m²</td><td>80%</td><td>Zeer steile gazons</td></tr>
<tr><td><strong>Segway</strong></td><td>Navimow i208 AWD</td><td>Netwerk-RTK + camera</td><td>800 m²</td><td>45%</td><td>Middelgrote, glooiende tuinen</td></tr>
<tr><td><strong>ECOVACS</strong></td><td>GOAT O600 RTK</td><td>RTK + camera</td><td>600 m²</td><td>45%</td><td>Kleine tuinen met obstakels</td></tr>
<tr><td><strong>Gardena</strong></td><td>SILENO City 600</td><td>Begrenzingsdraad</td><td>600 m²</td><td>25%</td><td>Kleine, eenvoudige tuinen</td></tr>
<tr><td><strong>Worx</strong></td><td>Landroid Vision L1600</td><td>Camera + AI</td><td>1.600 m²</td><td>30%</td><td>Gazons met duidelijke randen</td></tr>
</tbody>
</table>
<p>Oppervlakken en hellingen volgens de fabrikanten. Onze <a href="/nl/blog/tondeuse-robot-sans-fil-perimetrique">complete vergelijking van robotmaaiers zonder begrenzingsdraad</a> beschrijft de sterke punten en beperkingen van elk model, de installatie en het oplossen van problemen.</p>

<h3>Keuzecriteria</h3>
<ul>
<li><strong>Gazonoppervlak:</strong> voor een kleine, eenvoudige tuin (minder dan 600 m²) blijft een model met begrenzingsdraad een betrouwbare en betaalbare keuze. Boven 1.000 m² of bij een tuin met meerdere delen is draadloos veel praktischer.</li>
<li><strong>Helling:</strong> heeft je gazon een helling van meer dan 25%, kies dan een model dat voor meer geschikt is, bij voorkeur met vierwielaandrijving zoals de Mammotion LUBA 3 AWD (80%) of de Navimow i208 AWD (45%).</li>
<li><strong>Meerdere zones:</strong> sommige modellen kunnen meerdere gazons aan die gescheiden zijn door een pad of een smalle doorgang.</li>
<li><strong>Satellietontvangst:</strong> bij hoge bomen of muren is een model dat RTK combineert met LiDAR of camera in het voordeel.</li>
<li><strong>Geluid en dieren:</strong> robotmaaiers zijn veel stiller dan een benzinemaaier, maar laat ze niet 's nachts maaien: egels zijn actief in de schemering en kunnen gewond raken.</li>
</ul>

<h2>Slimme besproeiingssystemen</h2>

<h3>Alleen sproeien wanneer het nodig is</h3>
<p>Een slimme controller past de duur en frequentie van het sproeien aan op basis van de <strong>weersvoorspelling</strong>, de <strong>temperatuur</strong> en, met een sensor, de <strong>werkelijke bodemvochtigheid</strong>. Hij slaat een beurt over vlak voor een regenbui of als de grond nog vochtig is. Hoeveel water je bespaart, hangt af van je huidige gewoonten: het verschil is duidelijk als je op vaste tijden sproeide zonder op het weer te letten, en kleiner als je al met de hand bijstuurde.</p>

<h3>Oplossingen op de markt</h3>
<ul>
<li><strong>Gardena smart system:</strong> compleet ecosysteem met controllers (smart Water Control voor één kraan, smart Irrigation Control voor meerdere kleppen), smart Sensor en smart Gateway, alles beheerd in de Gardena smart-app. Breed verkrijgbaar in Europa.</li>
<li><strong>Hunter Hydrawise (HC, Pro-HC):</strong> wifi-controllers voor ondergrondse besproeiing met meerdere zones, verkrijgbaar in Europese 230V-versies. De voorspellende besproeiing past zich aan het lokale weer aan, en regen-, vorst- en vochtsensoren worden ondersteund.</li>
<li><strong>Eve Aqua:</strong> kraancontroller met Matter over Thread, te bedienen via Apple Home of elke Matter-compatibele app. Ideaal voor een tuinslang of een eenvoudig druppelsysteem.</li>
</ul>
<p>Lees onze <a href="/nl/blog/arrosage-connecte-intelligent">complete gids voor slimme besproeiing</a> voor een uitgebreide vergelijking.</p>

<h3>Bodemvochtsensoren</h3>
<p>Een sensor zoals de Gardena smart Sensor meet bodemvocht en bodemtemperatuur en kan het sproeien blokkeren zolang de grond nog vochtig is. Plaats hem op een representatieve plek, uit de buurt van regenpijpen en permanente schaduw. Let op: een weerstation zoals Eve Weather meet temperatuur, luchtvochtigheid en luchtdruk, maar geen bodemvocht.</p>

<h2>Slimme buitenverlichting</h2>

<h3>Zonne-energie of laagspanning</h3>
<p>Slimme solarpadverlichting heeft geen bekabeling nodig, maar de brandduur hangt af van de zon en neemt in de winter flink af. Voor betrouwbaar licht het hele jaar door worden laagspanningssystemen zoals <strong>Philips Hue Outdoor</strong> (24V-voeding) aangesloten op een voedingsadapter en bediend via app, stem of automatisering. Ook Govee en LEDVANCE SMART+ hebben slimme buitenassortimenten.</p>

<h3>Slimme schijnwerpers</h3>
<p>De Philips Hue Discover is een kleurenschijnwerper om een gevel of boom uit te lichten, terwijl de Hue Lily-spots bedoeld zijn voor sfeerverlichting in borders. Staat beveiliging voorop, dan combineert de Ring Floodlight Cam een schijnwerper, bewegingsdetectie en een beveiligingscamera.</p>

<h3>Led-strips en lichtslingers voor buiten</h3>
<p>Led-strips voor buiten (minimaal IP65) van Govee, Philips Hue of LIFX zorgen voor sfeer op terrassen en pergola's. Ze zijn via een app te bedienen en werken met Alexa en Google Home; een deel van deze assortimenten is ook Matter-compatibel.</p>

<h2>Slimme zwembadrobots</h2>

<h3>Twee referenties</h3>
<p>Slimme zwembadrobots reinigen zelfstandig de bodem, de wanden en de waterlijn:</p>
<ul>
<li><strong>Dolphin S300i (Maytronics):</strong> bediening via de MyDolphin Plus-app (planning, cycluskeuze, gerichte reiniging). Cycli van 1,5 tot 2,5 uur voor bodem, wanden en waterlijn, voor baden tot 12 m lang.</li>
<li><strong>Zodiac CNX 40 iQ:</strong> rupsbanden en twee aandrijfmotoren, gyroscoop- en versnellingssensoren om het hele bad te dekken, dubbele filtratie en bediening via de iAquaLink-app. Bedoeld voor baden tot 12 × 6 m.</li>
</ul>
<p>Er zijn ook draadloze zwembadrobots op accu, zoals de Aiper Seagull Pro, die zonder stroomkabel werken. Handig voor kleine zwembaden, maar ze hebben niet allemaal app-bediening.</p>

<h3>Keuzecriteria</h3>
<ul>
<li><strong>Type zwembad:</strong> vlakke bodem, zachte hellingen, vrije vorm: controleer de compatibiliteit</li>
<li><strong>Afmetingen:</strong> blijf binnen de maximale lengte die de fabrikant opgeeft</li>
<li><strong>Bekleding:</strong> liner, tegels, beton: de borstels moeten geschikt zijn</li>
<li><strong>Connectiviteit:</strong> app, planning op afstand, diagnose</li>
</ul>

<h2>Slimme BBQ-thermometers en accessoires</h2>

<h3>MEATER 2 Plus: de draadloze sonde</h3>
<p>De <strong>MEATER 2 Plus</strong> is een volledig draadloze sonde die je direct in het vlees steekt. Hij meet de kern- en omgevingstemperatuur en communiceert via Bluetooth met je smartphone. Om de bereiding van verder weg te volgen, kan de app een tweede apparaat binnen bereik als wifi-brug gebruiken (functie MEATER Link). Begeleid koken toont een schatting van de resterende tijd.</p>

<h3>Inkbird en Weber Connect</h3>
<p><strong>Inkbird IBBQ-4BW:</strong> 4 bedrade sondes, 2,4GHz-wifi en Bluetooth, app met temperatuurmeldingen. Geschikt voor lange bereidingen (low &amp; slow).</p>
<p><strong>Weber Connect Smart Grilling Hub:</strong> slimme hub voor elke barbecue met maximaal 4 sondes. De app vertelt je wanneer je moet omdraaien en opdienen, en bevat Weber-recepten.</p>

<h2>Waar begin je, afhankelijk van je tuin</h2>

<h3>Kleine tuin (minder dan 600 m²)</h3>
<ul>
<li>Slimme kraancontroller (Eve Aqua of Gardena smart Water Control)</li>
<li>Gardena SILENO City 600 met begrenzingsdraad voor een eenvoudige tuin, of ECOVACS GOAT O600 RTK om zonder draad te werken</li>
<li>Een paar solarpadlampen of een kleine laagspanningsset</li>
</ul>

<h3>Middelgrote tuin (600 tot 1.600 m²)</h3>
<ul>
<li>Segway Navimow i208 AWD (tot 800 m², hellingen tot 45%) of Worx Landroid Vision L1600 (tot 1.600 m²)</li>
<li>Gardena smart system met bodemvochtsensor</li>
<li>Laagspanningsverlichting Philips Hue Outdoor</li>
<li>Slimme BBQ-thermometer (Inkbird IBBQ-4BW of MEATER 2 Plus)</li>
</ul>

<h3>Groot of hellend perceel</h3>
<ul>
<li>Husqvarna Automower 450X NERA (tot 5.000 m², draad of EPOS) of Mammotion LUBA 3 AWD 5000 (hellingen tot 80%)</li>
<li>Ondergrondse besproeiing met meerdere zones via een Hunter Hydrawise-controller</li>
<li>Zwembadrobot Dolphin S300i of Zodiac CNX 40 iQ als je een zwembad hebt</li>
</ul>

<h2>Matter-compatibiliteit voor de slimme tuin</h2>
<p>Het <strong>Matter</strong>-protocol bereikt ook de tuin, al zijn nog niet alle categorieën gedekt:</p>
<ul>
<li><strong>Eve Aqua:</strong> Matter-native kraancontroller (Thread)</li>
<li><strong>Philips Hue Outdoor:</strong> Matter-compatibel via de Hue Bridge</li>
<li><strong>Eve Weather:</strong> versie met Matter over Thread voor buitentemperatuur en luchtvochtigheid</li>
<li><strong>Robotmaaiers:</strong> voorlopig geen Matter-ondersteuning; ze worden bediend via de app van de fabrikant, en sommige, zoals de Mammotion LUBA, werken met Alexa en Google Assistant</li>
</ul>
<p>Het voordeel van Matter is centrale bediening vanuit Apple Home, Google Home, Amazon Alexa of SmartThings, met lokale werking voor veel functies. Thread-apparaten hebben een Thread-borderrouter nodig (sommige recente slimme speakers en hubs vervullen die rol).</p>

<h2>Conclusie: waar begin je?</h2>
<p>Ben je nieuw in de slimme tuin, begin dan met <strong>slimme besproeiing</strong>: een bescheiden investering waarvan je het effect al de eerste zomer ziet. Kies daarna een <strong>robotmaaier</strong> op basis van drie criteria: oppervlak, helling en vrij zicht op de hemel. Slimme buitenverlichting zorgt voor comfort en veiligheid, en slimme BBQ-thermometers maken het barbecueën in het weekend makkelijker.</p>
<p>Ontdek onze gespecialiseerde gidsen voor meer details over elke categorie: <a href="/nl/blog/tondeuse-robot-sans-fil-perimetrique">robotmaaiers zonder begrenzingsdraad</a> en <a href="/nl/blog/arrosage-connecte-intelligent">slimme besproeiingssystemen</a>.</p>`,
  },
  faq: [
    {
      question: {
        fr: "Est-ce qu'une tondeuse robot vaut le coup ?",
        en: 'Is a robot mower worth it?',
        de: 'Lohnt sich ein Mähroboter?',
        es: '¿Merece la pena un robot cortacésped?',
        it: 'Vale la pena un robot tagliaerba?',
        nl: 'Is een robotmaaier de investering waard?',
      },
      answer: {
        fr: "Pour une pelouse d'au moins 200 m² que vous tondez chaque semaine, oui dans la plupart des cas. La tondeuse robot coupe un peu d'herbe plusieurs fois par semaine en mulching : les brins coupés restent sur place et nourrissent le gazon. Vous récupérez le temps de la tonte hebdomadaire, et la consommation électrique reste faible. Les modèles sans fil périmétrique simplifient l'installation ; pour un petit jardin simple, un modèle à fil reste le choix le plus économique.",
        en: 'For a lawn of at least 200 m² that you mow every week, yes in most cases. A robot mower trims a little grass several times a week in mulching mode: the clippings stay on the lawn and feed it. You win back the time spent on weekly mowing, and power consumption stays low. Cable-free models make installation easier; for a small, simple garden, a boundary wire model remains the most affordable option.',
        de: 'Für einen Rasen ab etwa 200 m², den Sie jede Woche mähen, in den meisten Fällen ja. Der Mähroboter schneidet mehrmals pro Woche ein wenig Gras im Mulchverfahren: Der Schnitt bleibt liegen und düngt den Rasen. Sie sparen die Zeit für das wöchentliche Mähen, und der Stromverbrauch bleibt gering. Modelle ohne Begrenzungskabel vereinfachen die Installation; für einen kleinen, einfachen Garten bleibt ein Modell mit Kabel die günstigste Wahl.',
        es: 'Para un césped de al menos 200 m² que cortas cada semana, sí en la mayoría de los casos. El robot corta un poco de hierba varias veces por semana en modo mulching: los restos se quedan en el césped y lo nutren. Recuperas el tiempo del corte semanal y el consumo eléctrico es bajo. Los modelos sin cable perimetral simplifican la instalación; para un jardín pequeño y sencillo, un modelo con cable sigue siendo la opción más económica.',
        it: "Per un prato di almeno 200 m² che tagli ogni settimana, nella maggior parte dei casi sì. Il robot taglia un po' d'erba più volte a settimana in modalità mulching: l'erba tagliata resta sul prato e lo nutre. Recuperi il tempo del taglio settimanale e il consumo elettrico resta basso. I modelli senza filo perimetrale semplificano l'installazione; per un giardino piccolo e semplice, un modello con filo resta la scelta più economica.",
        nl: 'Voor een gazon van minstens 200 m² dat je elke week maait, in de meeste gevallen wel. De robotmaaier knipt meerdere keren per week een beetje gras in mulchmodus: het maaisel blijft liggen en voedt het gazon. Je wint de tijd van het wekelijkse maaien terug en het stroomverbruik blijft laag. Modellen zonder begrenzingsdraad maken de installatie eenvoudiger; voor een kleine, eenvoudige tuin blijft een model met draad de voordeligste keuze.',
      },
    },
    {
      question: {
        fr: 'Comment fonctionne la navigation sans fil périmétrique ?',
        en: 'How does cable-free navigation work?',
        de: 'Wie funktioniert die kabellose Navigation ohne Begrenzungsdraht?',
        es: '¿Cómo funciona la navegación sin cable perimetral?',
        it: 'Come funziona la navigazione senza filo perimetrale?',
        nl: 'Hoe werkt draadloze navigatie zonder begrenzingsdraad?',
      },
      answer: {
        fr: "Les tondeuses robots sans fil périmétrique combinent plusieurs technologies. Le RTK corrige la position GPS grâce à une antenne de référence installée au jardin ou à un réseau de correction, pour une précision de quelques centimètres. Les caméras (vision) reconnaissent les bordures et les obstacles, et le LiDAR, présent sur certains modèles, cartographie l'environnement en 3D. Vous définissez la zone de tonte dans l'application, souvent en guidant une fois la tondeuse le long de la pelouse ou grâce à une cartographie automatique. Elle tond ensuite seule dans ces limites virtuelles.",
        en: 'Cable-free robot mowers combine several technologies. RTK corrects the GPS position using a reference antenna in the garden or a correction network, for accuracy within a few centimetres. Cameras (vision) recognise lawn edges and obstacles, and LiDAR, found on some models, maps the surroundings in 3D. You define the mowing zone in the app, often by driving the mower once around the lawn or through automatic mapping. It then mows on its own within those virtual boundaries.',
        de: 'Mähroboter ohne Begrenzungskabel kombinieren mehrere Technologien. RTK korrigiert die GPS-Position über eine Referenzantenne im Garten oder ein Korrekturnetz und erreicht so eine Genauigkeit von wenigen Zentimetern. Kameras erkennen Rasenkanten und Hindernisse, und LiDAR, das einige Modelle nutzen, erfasst die Umgebung in 3D. Sie legen die Mähzone in der App fest, oft indem Sie den Mäher einmal am Rasenrand entlangsteuern oder per automatischer Kartierung. Danach mäht er selbstständig innerhalb dieser virtuellen Grenzen.',
        es: 'Los robots cortacésped sin cable perimetral combinan varias tecnologías. El RTK corrige la posición GPS mediante una antena de referencia en el jardín o una red de corrección, con una precisión de pocos centímetros. Las cámaras (visión) reconocen los bordes y los obstáculos, y el LiDAR, presente en algunos modelos, cartografía el entorno en 3D. Defines la zona de corte en la app, a menudo guiando el robot una vez por el borde del césped o mediante cartografía automática. Después corta solo dentro de esos límites virtuales.',
        it: "I robot tagliaerba senza filo perimetrale combinano diverse tecnologie. L'RTK corregge la posizione GPS grazie a un'antenna di riferimento in giardino o a una rete di correzione, con una precisione di pochi centimetri. Le telecamere riconoscono bordi e ostacoli, e il LiDAR, presente su alcuni modelli, mappa l'ambiente in 3D. Definisci l'area di taglio nell'app, spesso guidando una volta il robot lungo il bordo del prato o con la mappatura automatica. Poi taglia da solo entro quei confini virtuali.",
        nl: 'Robotmaaiers zonder begrenzingsdraad combineren meerdere technieken. RTK corrigeert de gps-positie via een referentieantenne in de tuin of een correctienetwerk, voor een nauwkeurigheid van enkele centimeters. Camera\'s herkennen gazonranden en obstakels, en LiDAR, aanwezig op sommige modellen, brengt de omgeving in 3D in kaart. Je stelt de maaizone in de app in, vaak door de maaier één keer langs de rand te sturen of via automatische kartering. Daarna maait hij zelfstandig binnen die virtuele grenzen.',
      },
    },
    {
      question: {
        fr: "Combien d'eau économise un système d'arrosage connecté ?",
        en: 'How much water does a smart irrigation system save?',
        de: 'Wie viel Wasser spart ein smartes Bewässerungssystem?',
        es: '¿Cuánta agua ahorra un sistema de riego inteligente?',
        it: 'Quanta acqua risparmia un sistema di irrigazione smart?',
        nl: 'Hoeveel water bespaart een slim besproeiingssysteem?',
      },
      answer: {
        fr: "Cela dépend surtout de vos habitudes actuelles. L'économie provient de trois leviers : l'adaptation automatique à la météo (pas d'arrosage avant la pluie), les capteurs d'humidité du sol (arrosage uniquement quand c'est nécessaire) et une programmation zone par zone selon le type de plantes. Si vous arrosiez à heure fixe sans tenir compte de la météo, la différence est nette ; si vous ajustiez déjà à la main, elle est plus modeste. Le plus simple est de comparer vos relevés de compteur d'un été à l'autre.",
        en: 'It mainly depends on your current habits. The savings come from three levers: automatic weather adjustment (no watering before rain), soil moisture sensors (watering only when needed) and zone-by-zone scheduling based on plant type. If you used to water at fixed times regardless of the weather, the difference is clear; if you already adjusted by hand, it is smaller. The simplest check is to compare your water meter readings from one summer to the next.',
        de: 'Das hängt vor allem von Ihren bisherigen Gewohnheiten ab. Die Ersparnis entsteht durch drei Hebel: automatische Wetteranpassung (kein Gießen vor Regen), Bodenfeuchtesensoren (Bewässerung nur bei Bedarf) und zonenweise Planung nach Pflanzentyp. Haben Sie bisher zu festen Zeiten unabhängig vom Wetter gegossen, ist der Unterschied deutlich; haben Sie schon von Hand nachjustiert, fällt er kleiner aus. Am einfachsten vergleichen Sie die Zählerstände von einem Sommer zum nächsten.',
        es: 'Depende sobre todo de tus hábitos actuales. El ahorro procede de tres palancas: adaptación automática al tiempo (sin riego antes de la lluvia), sensores de humedad del suelo (riego solo cuando hace falta) y programación por zonas según el tipo de planta. Si regabas a horas fijas sin mirar el tiempo, la diferencia es clara; si ya ajustabas a mano, es menor. Lo más sencillo es comparar las lecturas del contador de un verano a otro.',
        it: "Dipende soprattutto dalle tue abitudini attuali. Il risparmio nasce da tre leve: adattamento automatico al meteo (niente irrigazione prima della pioggia), sensori di umidità del suolo (irrigazione solo quando serve) e programmazione per zone in base al tipo di piante. Se irrigavi a orari fissi senza guardare il meteo, la differenza è netta; se regolavi già a mano, è più contenuta. Il modo più semplice è confrontare le letture del contatore da un'estate all'altra.",
        nl: 'Dat hangt vooral af van je huidige gewoonten. De besparing komt van drie factoren: automatische aanpassing aan het weer (niet sproeien voor regen), bodemvochtsensoren (alleen sproeien wanneer nodig) en planning per zone op basis van het planttype. Sproeide je op vaste tijden zonder op het weer te letten, dan is het verschil duidelijk; stuurde je al met de hand bij, dan is het kleiner. Het eenvoudigst is om je meterstanden van de ene zomer met de volgende te vergelijken.',
      },
    },
    {
      question: {
        fr: 'Les appareils de jardin connectés fonctionnent-ils hors ligne ?',
        en: 'Can smart garden devices work offline?',
        de: 'Funktionieren smarte Gartengeräte offline?',
        es: '¿Los dispositivos de jardín inteligente funcionan sin conexión?',
        it: 'I dispositivi smart da giardino funzionano offline?',
        nl: 'Werken slimme tuinapparaten offline?',
      },
      answer: {
        fr: "En partie. Les tondeuses robots continuent généralement de tondre selon leur programme même sans Wi-Fi, mais vous perdez le contrôle à distance et les notifications. Les programmateurs d'arrosage exécutent en général leur dernier programme enregistré, sans l'ajustement météo qui dépend d'internet. Les appareils Matter/Thread comme l'Eve Aqua peuvent être pilotés localement sans cloud. Les commandes vocales et le contrôle depuis l'extérieur de la maison nécessitent en revanche une connexion internet.",
        en: 'Partly. Robot mowers generally keep mowing on schedule without Wi-Fi, but you lose remote control and notifications. Irrigation controllers usually run their last saved schedule, without the weather adjustment that depends on the internet. Matter/Thread devices such as Eve Aqua can be controlled locally without the cloud. Voice commands and control from outside the home, however, require an internet connection.',
        de: 'Teilweise. Mähroboter mähen in der Regel auch ohne WLAN nach Zeitplan weiter, aber Fernsteuerung und Benachrichtigungen fallen weg. Bewässerungssteuerungen führen meist ihr zuletzt gespeichertes Programm aus, allerdings ohne die internetabhängige Wetteranpassung. Matter/Thread-Geräte wie Eve Aqua lassen sich lokal ohne Cloud steuern. Sprachbefehle und die Steuerung von unterwegs benötigen dagegen eine Internetverbindung.',
        es: 'En parte. Los robots cortacésped suelen seguir cortando según su programa sin wifi, pero pierdes el control remoto y las notificaciones. Los programadores de riego normalmente ejecutan su último programa guardado, sin el ajuste meteorológico que depende de internet. Los dispositivos Matter/Thread como Eve Aqua pueden controlarse en local sin la nube. Los comandos de voz y el control desde fuera de casa, en cambio, requieren conexión a internet.',
        it: "In parte. I robot tagliaerba di solito continuano a tagliare secondo il programma anche senza Wi-Fi, ma perdi il controllo remoto e le notifiche. Le centraline di irrigazione in genere eseguono l'ultimo programma salvato, senza l'adattamento meteo che dipende da internet. I dispositivi Matter/Thread come Eve Aqua si possono gestire in locale senza cloud. I comandi vocali e il controllo da fuori casa richiedono invece una connessione internet.",
        nl: 'Gedeeltelijk. Robotmaaiers blijven meestal volgens schema maaien zonder wifi, maar je verliest bediening op afstand en meldingen. Besproeiingscontrollers voeren doorgaans hun laatst opgeslagen schema uit, zonder de weersaanpassing die van internet afhangt. Matter/Thread-apparaten zoals Eve Aqua kun je lokaal bedienen zonder cloud. Spraakopdrachten en bediening buitenshuis vereisen wel een internetverbinding.',
      },
    },
    {
      question: {
        fr: 'Quelle est la meilleure saison pour installer un jardin connecté ?',
        en: 'What is the best season to install a smart garden?',
        de: 'Welche Jahreszeit ist die beste für die Installation eines vernetzten Gartens?',
        es: '¿Cuál es la mejor temporada para instalar un jardín inteligente?',
        it: 'Qual è la stagione migliore per installare un giardino smart?',
        nl: 'Wat is het beste seizoen om een slimme tuin te installeren?',
      },
      answer: {
        fr: "Le printemps (mars à mai) est la meilleure période. C'est le bon moment pour installer une tondeuse robot avant la première tonte, configurer l'arrosage connecté avant les chaleurs et poser l'éclairage quand les jours rallongent. Les robots de piscine se mettent en service idéalement en avril-mai, avant la saison de baignade. Anticiper l'achat en février-mars permet aussi d'éviter les ruptures de stock du printemps.",
        en: 'Spring (March to May) is the best time. It is the right moment to install a robot mower before the first cut, set up smart irrigation before the summer heat and fit lighting as the days get longer. Pool robots are ideally put into service in April or May, before swimming season. Buying ahead in February or March also helps you avoid spring stock shortages.',
        de: 'Der Frühling (März bis Mai) ist die beste Zeit. Dann installieren Sie den Mähroboter vor dem ersten Schnitt, richten die smarte Bewässerung vor der Sommerhitze ein und montieren die Beleuchtung, wenn die Tage länger werden. Poolroboter nimmt man idealerweise im April oder Mai in Betrieb, vor der Badesaison. Wer schon im Februar oder März kauft, umgeht zudem Lieferengpässe im Frühjahr.',
        es: 'La primavera (de marzo a mayo) es la mejor época. Es el momento de instalar el robot cortacésped antes del primer corte, configurar el riego inteligente antes del calor y colocar la iluminación cuando los días se alargan. Los robots de piscina se ponen en marcha idealmente en abril o mayo, antes de la temporada de baño. Comprar con antelación en febrero o marzo también ayuda a evitar roturas de stock en primavera.',
        it: "La primavera (da marzo a maggio) è il periodo migliore. È il momento giusto per installare il robot tagliaerba prima del primo taglio, configurare l'irrigazione smart prima del caldo e montare l'illuminazione quando le giornate si allungano. I robot per piscina si mettono in funzione idealmente ad aprile o maggio, prima della stagione dei bagni. Acquistare in anticipo, a febbraio o marzo, aiuta anche a evitare le rotture di stock primaverili.",
        nl: 'De lente (maart tot mei) is de beste periode. Dan installeer je de robotmaaier voor de eerste maaibeurt, stel je de slimme besproeiing in voor de zomerhitte en plaats je verlichting als de dagen langer worden. Zwembadrobots neem je idealiter in april of mei in gebruik, voor het zwemseizoen. Wie al in februari of maart koopt, ontloopt bovendien tekorten in het voorjaar.',
      },
    },
    {
      question: {
        fr: 'Existe-t-il des options solaires pour le jardin connecté ?',
        en: 'Are there solar-powered options for the smart garden?',
        de: 'Gibt es solarbetriebene Optionen für den vernetzten Garten?',
        es: '¿Existen opciones solares para el jardín inteligente?',
        it: 'Esistono opzioni a energia solare per il giardino smart?',
        nl: 'Zijn er opties op zonne-energie voor de slimme tuin?',
      },
      answer: {
        fr: "Oui, surtout pour l'éclairage : bornes de chemin, projecteurs et guirlandes existent en versions solaires connectées, avec une autonomie qui baisse en hiver. Les tondeuses robots se rechargent sur leur station branchée au secteur. Les capteurs d'humidité et les programmateurs de robinet fonctionnent sur piles (l'Eve Aqua utilise des piles remplaçables). Pour les systèmes d'arrosage enterrés multi-zones, une alimentation secteur reste la norme.",
        en: 'Yes, mainly for lighting: path lights, floodlights and festoons come in connected solar versions, with runtime that drops in winter. Robot mowers recharge on a mains-powered docking station. Moisture sensors and tap controllers run on batteries (Eve Aqua uses replaceable batteries). For multi-zone underground irrigation systems, mains power remains the norm.',
        de: 'Ja, vor allem bei der Beleuchtung: Wegeleuchten, Strahler und Lichterketten gibt es als vernetzte Solarversionen, deren Leuchtdauer im Winter abnimmt. Mähroboter laden an einer Ladestation mit Netzanschluss. Feuchtesensoren und Wasserhahn-Steuerungen laufen mit Batterien (Eve Aqua nutzt austauschbare Batterien). Für versenkte Mehrzonen-Bewässerung bleibt die Netzversorgung die Regel.',
        es: 'Sí, sobre todo en iluminación: balizas, focos y guirnaldas existen en versiones solares conectadas, con una autonomía que baja en invierno. Los robots cortacésped se recargan en su estación conectada a la red. Los sensores de humedad y los programadores de grifo funcionan con pilas (Eve Aqua usa pilas reemplazables). Para el riego enterrado por zonas, la alimentación de red sigue siendo lo habitual.',
        it: "Sì, soprattutto per l'illuminazione: lampade da vialetto, proiettori e catene luminose esistono in versione solare connessa, con un'autonomia che cala in inverno. I robot tagliaerba si ricaricano sulla base collegata alla rete. Sensori di umidità e programmatori per rubinetto funzionano a batterie (Eve Aqua usa batterie sostituibili). Per l'irrigazione interrata a più zone, l'alimentazione di rete resta la norma.",
        nl: 'Ja, vooral voor verlichting: padlampen, schijnwerpers en lichtslingers bestaan in slimme solarversies, met een brandduur die in de winter afneemt. Robotmaaiers laden op aan een laadstation op netstroom. Vochtsensoren en kraancontrollers werken op batterijen (Eve Aqua gebruikt vervangbare batterijen). Voor ondergrondse besproeiing met meerdere zones blijft netstroom de norm.',
      },
    },
    {
      question: {
        fr: "Quel est le niveau sonore d'une tondeuse robot ?",
        en: 'How noisy are robot mowers?',
        de: 'Wie laut sind Mähroboter?',
        es: '¿Cuánto ruido hace un robot cortacésped?',
        it: 'Quanto rumore fa un robot tagliaerba?',
        nl: 'Hoeveel geluid maakt een robotmaaier?',
      },
      answer: {
        fr: "Les tondeuses robots sont nettement plus silencieuses qu'une tondeuse thermique. La plupart des fabricants annoncent un niveau d'environ 55 à 65 dB, proche d'une conversation, alors qu'une tondeuse thermique est bien plus bruyante. Mammotion annonce par exemple environ 60 dB pour la gamme LUBA. Cette discrétion permet de tondre en journée pendant le télétravail sans gêne. Évitez en revanche la tonte de nuit : les hérissons sont actifs au crépuscule et peuvent être blessés, et certaines communes encadrent les horaires d'utilisation.",
        en: 'Robot mowers are much quieter than petrol mowers. Most manufacturers state a level of roughly 55 to 65 dB, close to a conversation, whereas a petrol mower is far louder. Mammotion, for example, states around 60 dB for the LUBA range. This makes daytime mowing possible while you work from home. Avoid mowing at night, however: hedgehogs are active at dusk and can be injured, and some local authorities restrict operating hours.',
        de: 'Mähroboter sind deutlich leiser als Benzinmäher. Die meisten Hersteller geben etwa 55 bis 65 dB an, ähnlich einem Gespräch, während ein Benzinmäher viel lauter ist. Mammotion nennt zum Beispiel rund 60 dB für die LUBA-Reihe. So lässt sich auch tagsüber im Homeoffice mähen. Nachts sollten Sie dagegen nicht mähen: Igel sind in der Dämmerung aktiv und können verletzt werden, und manche Gemeinden regeln die Betriebszeiten.',
        es: 'Los robots cortacésped son mucho más silenciosos que un cortacésped de gasolina. La mayoría de los fabricantes indica entre 55 y 65 dB aproximadamente, cerca de una conversación, mientras que uno de gasolina es mucho más ruidoso. Mammotion, por ejemplo, indica unos 60 dB para la gama LUBA. Así puedes cortar durante el día mientras teletrabajas. Evita en cambio el corte nocturno: los erizos están activos al anochecer y pueden resultar heridos, y algunos municipios regulan los horarios de uso.',
        it: "I robot tagliaerba sono molto più silenziosi di un tosaerba a benzina. La maggior parte dei produttori dichiara circa 55-65 dB, vicino a una conversazione, mentre un tosaerba a benzina è molto più rumoroso. Mammotion, ad esempio, indica circa 60 dB per la gamma LUBA. Questo permette di tagliare di giorno anche lavorando da casa. Evita invece il taglio notturno: i ricci sono attivi al crepuscolo e possono ferirsi, e alcuni comuni regolano gli orari di utilizzo.",
        nl: 'Robotmaaiers zijn veel stiller dan een benzinemaaier. De meeste fabrikanten geven ongeveer 55 tot 65 dB op, vergelijkbaar met een gesprek, terwijl een benzinemaaier veel luider is. Mammotion noemt bijvoorbeeld zo\'n 60 dB voor de LUBA-serie. Zo kun je overdag maaien terwijl je thuiswerkt. Maai echter niet \'s nachts: egels zijn actief in de schemering en kunnen gewond raken, en sommige gemeenten beperken de gebruikstijden.',
      },
    },
  ],
}
