import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'detection-fuite-eau-connectee',
  category: 'guides',
  pillar: 'energie-domotique',
  relatedSlugs: ['alarme-maison-sans-abonnement', 'maison-connectee-matter-thread-2026', 'guide-domotique-economie-energie-2026'],
  datePublished: '2026-04-16',
  dateModified: '2026-10-09',
  readingTime: 9,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: "Salle de bains avec lavabo, WC, douche et baignoire, des zones à surveiller avec un détecteur de fuite d'eau",
        en: "Bathroom with washbasin, toilet, shower and bath, areas to watch with a water leak detector",
        de: "Badezimmer mit Waschbecken, WC, Dusche und Badewanne, typische Stellen für einen Wassermelder",
        es: "Baño con lavabo, inodoro, ducha y bañera, zonas que conviene vigilar con un detector de fugas de agua",
        it: "Bagno con lavabo, WC, doccia e vasca, zone da sorvegliare con un rilevatore di perdite d'acqua",
        nl: "Badkamer met wastafel, toilet, douche en bad, plekken om te bewaken met een waterlekkagesensor",
      },
    },
  ],
  title: {
    fr: "Détecteur de Fuite d'Eau Connecté 2026 : Comparatif et Guide d'Installation",
    en: "Smart Water Leak Detector 2026: Comparison and Installation Guide",
    de: "Smarter Wassermelder 2026: Vergleich und Installationsanleitung",
    es: "Detector de Fugas de Agua Inteligente 2026: Comparativa y Guía de Instalación",
    it: "Rilevatore di Perdite d'Acqua Smart 2026: Confronto e Guida all'Installazione",
    nl: "Slimme Waterlekkagesensor 2026: Vergelijking en Installatiegids",
  },
  excerpt: {
    fr: "Quel détecteur de fuite d'eau connecté choisir en 2026 ? Comparatif de l'Aqara Water Leak Sensor T1, du Shelly Flood Gen4 et de l'Eve Water Guard, coupure automatique avec l'Aqara Valve Controller T1, placement des capteurs et erreurs à éviter.",
    en: "Which smart water leak detector should you choose in 2026? A comparison of the Aqara Water Leak Sensor T1, Shelly Flood Gen4 and Eve Water Guard, automatic shut-off with the Aqara Valve Controller T1, sensor placement and mistakes to avoid.",
    de: "Welcher smarte Wassermelder 2026? Vergleich von Aqara Water Leak Sensor T1, Shelly Flood Gen4 und Eve Water Guard, automatische Absperrung mit dem Aqara Valve Controller T1, richtige Platzierung und typische Fehler.",
    es: "¿Qué detector de fugas de agua inteligente elegir en 2026? Comparativa del Aqara Water Leak Sensor T1, el Shelly Flood Gen4 y el Eve Water Guard, corte automático con el Aqara Valve Controller T1, ubicación y errores que evitar.",
    it: "Quale rilevatore di perdite d'acqua smart scegliere nel 2026? Confronto tra Aqara Water Leak Sensor T1, Shelly Flood Gen4 ed Eve Water Guard, chiusura automatica con l'Aqara Valve Controller T1, posizionamento ed errori da evitare.",
    nl: "Welke slimme waterlekkagesensor kiest u in 2026? Vergelijking van de Aqara Water Leak Sensor T1, Shelly Flood Gen4 en Eve Water Guard, automatische afsluiting met de Aqara Valve Controller T1, plaatsing en fouten om te vermijden.",
  },
  content: {
    fr: `<p><strong>Pour la plupart des logements, le meilleur détecteur de fuite d'eau connecté en 2026 est l'Aqara Water Leak Sensor T1 : un petit capteur Zigbee à poser sous chaque appareil à risque, qui envoie une alerte sur smartphone dès que l'eau le touche.</strong> Si vous voulez aussi que l'eau soit coupée automatiquement, associez-le à l'Aqara Valve Controller T1, un moteur qui se fixe sur votre vanne d'arrêt existante et la ferme dès qu'une fuite est détectée.</p>
<p>Ce guide compare les solutions réellement disponibles en Europe, à partir des fiches techniques des fabricants, des avis indépendants et des retours d'acheteurs vérifiés : capteurs ponctuels, détecteurs à câble, coupure automatique, placement et erreurs à éviter. Pour voir toute la sélection, consultez notre page <a href="/fr/energie-domotique/detecteurs-fuite-eau">détecteurs de fuite d'eau</a>.</p>

<h2>Pourquoi installer un détecteur de fuite d'eau connecté ?</h2>
<p>Les dégâts des eaux font partie des sinistres habitation les plus fréquents en France. Le problème n'est pas tant la fuite elle-même que le temps qui s'écoule avant qu'on la remarque : un flexible de lave-linge qui cède pendant une journée de travail, un groupe de sécurité de chauffe-eau qui goutte dans un placard, un joint de siphon qui suinte pendant des semaines sous un meuble. Quand on s'en aperçoit, le parquet a gonflé, le placoplâtre est imbibé et, en appartement, le voisin du dessous a déjà de l'eau au plafond.</p>
<p>Un détecteur connecté ne répare rien, mais il réduit ce délai à quelques secondes. Il prévient votre téléphone où que vous soyez, peut déclencher une sirène dans le logement et, avec une vanne motorisée, couper l'arrivée d'eau sans intervention humaine. C'est un équipement discret, peu encombrant et qui s'intègre aux principaux écosystèmes domotiques. Il complète bien un <a href="/fr/blog/alarme-maison-sans-abonnement">système d'alarme sans abonnement</a>.</p>

<h2>Comment choisir : les critères qui comptent</h2>
<h3>Capteur ponctuel ou câble de détection</h3>
<p>La plupart des capteurs sont des palets posés au sol : ils réagissent quand l'eau touche leurs électrodes. C'est idéal sous un évier ou derrière un lave-vaisselle. Certains modèles utilisent un câble de détection qui surveille toute sa longueur : pratique le long d'une rangée d'appareils, au pied d'un chauffe-eau ou dans une buanderie, là où l'eau peut couler à plusieurs endroits.</p>
<h3>Protocole et besoin d'un hub</h3>
<p>Les capteurs Zigbee (comme ceux d'Aqara) consomment très peu et tiennent longtemps sur une pile bouton, mais ils exigent un hub. Les modèles Wi-Fi se connectent directement à votre box, au prix d'une consommation plus élevée. Les modèles Thread s'appuient sur un routeur de bordure (HomePod mini, Apple TV récente ou hub compatible). Si vous avez déjà un écosystème, choisissez un capteur qui s'y intègre plutôt que d'ajouter une application de plus.</p>
<h3>Alimentation</h3>
<p>Pile bouton CR2032, piles AA ou alimentation secteur : chaque option a ses contraintes. Un modèle sur secteur ne tombe jamais à court de pile mais dépend d'une prise à proximité. Un modèle sur pile se place partout, à condition de surveiller le niveau de batterie dans l'application.</p>
<h3>Alarme locale</h3>
<p>Une notification ne sert à rien si votre téléphone est en silencieux ou si la connexion internet est coupée. Privilégiez un capteur doté d'un buzzer intégré, ou un hub capable de faire sonner une alarme dans le logement.</p>
<h3>Coupure automatique</h3>
<p>Détecter, c'est bien ; arrêter l'eau, c'est mieux. Deux approches existent : un actionneur motorisé posé sur une vanne quart de tour existante, piloté par une automatisation, ou un dispositif de sécurité monté sur la canalisation principale par un plombier. La première est la plus simple à mettre en place soi-même.</p>
<h3>Indice de protection et emplacement</h3>
<p>Un capteur posé au sol sera mouillé tôt ou tard : un indice de protection élevé (IP67 par exemple) garantit qu'il continuera de fonctionner après une inondation. Vérifiez aussi la plage de température de fonctionnement si vous équipez une cave, un garage ou un local non chauffé.</p>

<h2>Les meilleurs détecteurs de fuite d'eau connectés en 2026</h2>
<h3>Aqara Water Leak Sensor T1 : le meilleur choix pour la plupart des logements</h3>
<p>L'Aqara Water Leak Sensor T1 (référence WL-S02D) est un capteur Zigbee 3.0 compact, de 50 × 50 × 15 mm, alimenté par une pile CR2032 avec une autonomie annoncée d'environ deux ans. Il est certifié IP67 et se déclenche dès qu'une fine pellicule d'eau atteint ses électrodes. Il remplace, dans la gamme européenne, le modèle E1 vendu principalement en Chine.</p>
<p><strong>Points forts :</strong> format discret qui se glisse sous les meubles, très faible consommation, compatibilité avec Apple Home, Google Home, Alexa et SmartThings via le hub Aqara, et intégration reconnue avec Home Assistant (ZHA ou Zigbee2MQTT). Grâce à la fonction de pont Matter des hubs Aqara récents, il remonte aussi dans les plateformes Matter.</p>
<p><strong>Limites :</strong> il faut un hub Aqara ou une passerelle Zigbee. L'alarme sonore se déclenche sur le hub plutôt que sur le capteur lui-même.</p>
<p><strong>Pour qui :</strong> ceux qui veulent équiper plusieurs points d'eau à moindre coût, ou qui ont déjà un hub Aqara ou une installation Zigbee.</p>

<h3>Shelly Flood Gen4 : le plus polyvalent sans hub</h3>
<p>Le Shelly Flood Gen4 fonctionne en Wi-Fi, en Zigbee et en Bluetooth, et il est compatible Matter. Il est alimenté par quatre piles AA (autonomie estimée à environ deux ans selon l'usage) et intègre un buzzer avec plusieurs niveaux d'alarme. Sa particularité : un câble de détection de 2 m fourni, extensible jusqu'à 150 m, et un mode de détection de pluie en plus du mode inondation.</p>
<p><strong>Points forts :</strong> aucun hub obligatoire en Wi-Fi, alarme locale intégrée, câble qui couvre une zone entière, intégration avec Alexa, Google Home et Home Assistant.</p>
<p><strong>Limites :</strong> boîtier IP44 (le câble va au sol, le boîtier doit rester au sec), format plus encombrant qu'un palet. Shelly propose aussi un Flood S Gen4 en boîtier IP67 sans câble si vous préférez un capteur ponctuel.</p>
<p><strong>Pour qui :</strong> les buanderies, chaufferies et caves, ou toute personne qui ne veut pas de hub.</p>

<h3>Eve Water Guard : le choix des utilisateurs Apple</h3>
<p>L'Eve Water Guard se branche sur une prise secteur et surveille un câble de 2 m, extensible jusqu'à 150 m avec des rallonges. Il communique en Thread et en Bluetooth et intègre une sirène de 100 dB avec signal lumineux.</p>
<p><strong>Points forts :</strong> pas de pile à changer, sirène puissante, intégration native dans l'app Maison d'Apple et fonctionnement local en Thread.</p>
<p><strong>Limites :</strong> il faut une prise à proximité. Les notifications à distance et les automatisations exigent un concentrateur Apple (HomePod mini, HomePod 2e génération ou Apple TV 4K compatible). C'est avant tout un produit pour l'écosystème Apple.</p>
<p><strong>Pour qui :</strong> les foyers équipés Apple qui veulent surveiller un chauffe-eau, un lave-linge ou un pied de colonne sans gérer de piles.</p>

<h3>Aqara Valve Controller T1 : la coupure automatique sans plombier</h3>
<p>L'Aqara Valve Controller T1 n'est pas un détecteur mais un actionneur : il se fixe sur une vanne d'arrêt existante à poignée levier ou papillon, en DN15, DN20 ou DN25 (1/2", 3/4" ou 1"), et la tourne grâce à un moteur. Il fonctionne en Zigbee avec quatre piles AA, développe un couple jusqu'à 3,6 N·m et ferme la vanne en 5 à 20 secondes selon le fabricant.</p>
<p><strong>Points forts :</strong> on ne coupe aucun tuyau, l'installation se fait sans outil de plomberie si votre vanne est compatible. Couplé à un Water Leak Sensor T1 via une automatisation Aqara, il ferme l'arrivée d'eau dès qu'une fuite est détectée. Il est aussi compatible avec Apple Home, Alexa, Google Home, SmartThings, Home Assistant et Homey.</p>
<p><strong>Limites :</strong> hub Aqara obligatoire, et la vanne existante doit être en bon état et pas grippée. Vérifiez la compatibilité de votre hub sur la page du fabricant avant l'achat.</p>
<p><strong>Pour qui :</strong> les propriétaires et locataires qui veulent une coupure automatique sans travaux.</p>

<h3>Et les systèmes installés sur l'arrivée d'eau ?</h3>
<p>Le Grohe Sense Guard, longtemps cité comme référence des contrôleurs de débit avec coupure intégrée, n'est plus fabriqué. On en trouve encore des stocks résiduels, mais nous ne le recommandons plus. Il existe d'autres dispositifs de sécurité montés directement sur la canalisation principale, souvent proposés par des spécialistes du traitement de l'eau : ils exigent une pose par un plombier et se choisissent avec lui, en fonction de votre installation.</p>

<h2>Tableau comparatif</h2>
<table>
<thead>
<tr><th>Modèle</th><th>Type</th><th>Connectivité</th><th>Alimentation</th><th>Coupure de l'eau</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td>Aqara Water Leak Sensor T1</td><td>Capteur ponctuel IP67</td><td>Zigbee 3.0 (hub Aqara)</td><td>Pile CR2032</td><td>Avec Valve Controller T1</td><td>Équiper tous les points d'eau</td></tr>
<tr><td>Shelly Flood Gen4</td><td>Boîtier + câble 2 m</td><td>Wi-Fi, Zigbee, Bluetooth, Matter</td><td>4 piles AA</td><td>Via automatisation</td><td>Buanderie, cave, sans hub</td></tr>
<tr><td>Eve Water Guard</td><td>Prise + câble 2 m</td><td>Thread, Bluetooth</td><td>Secteur</td><td>Via automatisation Apple</td><td>Écosystème Apple</td></tr>
<tr><td>Aqara Valve Controller T1</td><td>Actionneur de vanne</td><td>Zigbee (hub Aqara)</td><td>4 piles AA</td><td>Oui, ferme la vanne</td><td>Coupure automatique sans travaux</td></tr>
</tbody>
</table>

<h2>Où placer vos capteurs</h2>
<p>Commencez par les appareils qui reçoivent de l'eau sous pression en permanence ou qui la rejettent :</p>
<ul>
<li><strong>Derrière ou sous le lave-linge :</strong> le flexible d'alimentation et le tuyau de vidange sont des points faibles classiques.</li>
<li><strong>Sous le lave-vaisselle :</strong> pompe de vidange et joint de porte.</li>
<li><strong>Dans le meuble sous l'évier :</strong> flexibles du mitigeur, siphon, raccord du lave-vaisselle.</li>
<li><strong>Au pied du chauffe-eau :</strong> le groupe de sécurité goutte souvent, et une cuve qui cède libère beaucoup d'eau.</li>
<li><strong>Sous le lavabo, près de la douche ou de la baignoire et derrière les WC.</strong></li>
<li><strong>Près de la vanne d'arrivée d'eau et du compteur</strong>, ainsi qu'en cave ou en sous-sol si vous en avez.</li>
</ul>
<p>Posez le capteur à plat, électrodes vers le sol, au point le plus bas où l'eau s'accumulerait. Évitez les endroits où il serait mouillé en temps normal (bac de douche, sol lavé à grande eau), sous peine de fausses alertes.</p>

<h2>Installer une coupure automatique : étapes et précautions</h2>
<ol>
<li><strong>Repérez votre vanne d'arrêt générale</strong> et vérifiez qu'elle est quart de tour, à poignée levier ou papillon, et dans un diamètre compatible.</li>
<li><strong>Manœuvrez-la à la main</strong> plusieurs fois. Une vanne grippée doit être remplacée par un plombier avant d'y fixer un moteur.</li>
<li><strong>Installez le hub</strong>, puis ajoutez les capteurs et l'actionneur dans l'application.</li>
<li><strong>Fixez l'actionneur</strong> sur la vanne en suivant la notice, sans forcer sur la canalisation.</li>
<li><strong>Créez l'automatisation</strong> « si un capteur détecte de l'eau, fermer la vanne et envoyer une notification ».</li>
<li><strong>Vérifiez le fonctionnement</strong> en humidifiant légèrement un capteur avec un chiffon mouillé : la vanne doit se fermer et l'alerte arriver sur votre téléphone.</li>
</ol>
<p>En copropriété ou en location, n'intervenez que sur la vanne de votre logement, jamais sur une colonne commune. Si vous devez remplacer une vanne ou modifier la tuyauterie, confiez le travail à un plombier qualifié.</p>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Ne compter que sur les notifications :</strong> sans alarme locale, une fuite pendant que vous dormez peut passer inaperçue.</li>
<li><strong>Oublier les piles :</strong> activez les alertes de batterie faible et notez la date de remplacement.</li>
<li><strong>Placer le capteur trop loin de la source :</strong> l'eau suit la pente du sol ; placez le capteur là où elle s'accumulera.</li>
<li><strong>Installer un moteur sur une vanne grippée :</strong> il risque de ne pas réussir à la fermer le jour où vous en aurez besoin.</li>
<li><strong>Multiplier les applications :</strong> restez dans un seul écosystème pour que toutes les alertes arrivent au même endroit. Notre guide sur <a href="/fr/blog/maison-connectee-matter-thread-2026">Matter et Thread</a> aide à faire ce choix.</li>
</ul>

<h2>Assurance habitation : ce qu'il faut savoir</h2>
<p>Un détecteur de fuite ne remplace pas votre assurance et n'exonère pas de l'entretien de vos installations. Certains assureurs valorisent les équipements de prévention, mais les conditions varient d'un contrat à l'autre : renseignez-vous directement auprès du vôtre avant de compter sur un avantage tarifaire. En cas de sinistre, l'historique d'alertes de l'application peut vous aider à dater la fuite.</p>

<h2>Notre verdict</h2>
<p>Pour la grande majorité des logements, la meilleure stratégie consiste à poser des <strong>Aqara Water Leak Sensor T1</strong> sous chaque appareil à risque. Si vous voulez aller plus loin, l'<strong>Aqara Valve Controller T1</strong> transforme ce réseau de capteurs en véritable système de coupure automatique, sans travaux. Le <strong>Shelly Flood Gen4</strong> convient à ceux qui ne veulent pas de hub ou qui doivent surveiller une zone entière avec un câble, et l'<strong>Eve Water Guard</strong> est le choix naturel dans une maison équipée Apple. Retrouvez tous les modèles sur notre page <a href="/fr/energie-domotique/detecteurs-fuite-eau">détecteurs de fuite d'eau</a>.</p>`,
    en: `<p><strong>For most homes, the best smart water leak detector in 2026 is the Aqara Water Leak Sensor T1: a small Zigbee sensor you place under every at-risk appliance, which sends a smartphone alert the moment water touches it.</strong> If you also want the water to be shut off automatically, pair it with the Aqara Valve Controller T1, a motor that clamps onto your existing stopcock and closes it as soon as a leak is detected.</p>
<p>This guide compares the options actually available in Europe, based on manufacturer specifications, independent reviews and verified buyer feedback: spot sensors, cable detectors, automatic shut-off, placement and the mistakes to avoid. To browse the full selection, see our <a href="/en/energie-domotique/detecteurs-fuite-eau">water leak detectors</a> page.</p>

<h2>Why fit a smart water leak detector?</h2>
<p>Water damage is one of the most common home insurance claims in Europe. The real problem is rarely the leak itself, but the time that passes before anyone notices it: a washing machine hose that gives way during the working day, a water heater relief valve dripping inside a cupboard, a sink trap seal seeping for weeks under a cabinet. By the time you spot it, the floor has swollen, the plasterboard is soaked and, in a flat, the neighbour below already has water coming through the ceiling.</p>
<p>A connected detector does not fix anything, but it cuts that delay to seconds. It notifies your phone wherever you are, can sound a siren in the home and, with a motorised valve, shut off the supply without anyone lifting a finger. It is discreet, takes up almost no space and works with the main smart home ecosystems. It is a good complement to a <a href="/en/blog/alarme-maison-sans-abonnement">subscription-free home alarm</a>.</p>

<h2>How to choose: the criteria that matter</h2>
<h3>Spot sensor or sensing cable</h3>
<p>Most sensors are small pucks placed on the floor that react when water bridges their contacts. They are ideal under a sink or behind a dishwasher. Some models use a sensing cable that monitors its entire length instead: handy along a row of appliances, around a water heater or in a utility room, where water could appear in several places.</p>
<h3>Protocol and hub</h3>
<p>Zigbee sensors (such as Aqara's) use very little power and last a long time on a coin cell, but they need a hub. Wi-Fi models connect straight to your router, at the cost of higher power consumption. Thread models rely on a border router (HomePod mini, a recent Apple TV or a compatible hub). If you already have an ecosystem, choose a sensor that fits into it rather than adding yet another app.</p>
<h3>Power supply</h3>
<p>CR2032 coin cell, AA batteries or mains power: each has its constraints. A mains model never runs out of battery but needs a socket nearby. A battery model goes anywhere, provided you keep an eye on the battery level in the app.</p>
<h3>Local alarm</h3>
<p>A notification is useless if your phone is on silent or the internet is down. Favour a sensor with a built-in buzzer, or a hub that can sound an alarm inside the home.</p>
<h3>Automatic shut-off</h3>
<p>Detecting a leak is good; stopping the water is better. There are two approaches: a motorised actuator fitted to an existing quarter-turn valve and driven by an automation, or a safety device installed on the main supply pipe by a plumber. The first is by far the easiest to set up yourself.</p>
<h3>Ingress protection and location</h3>
<p>A sensor on the floor will get wet sooner or later: a high protection rating (IP67, for example) means it keeps working after a flood. Also check the operating temperature range if you are equipping a cellar, garage or unheated space.</p>

<h2>The best smart water leak detectors in 2026</h2>
<h3>Aqara Water Leak Sensor T1: the best choice for most homes</h3>
<p>The Aqara Water Leak Sensor T1 (model WL-S02D) is a compact Zigbee 3.0 sensor measuring 50 × 50 × 15 mm, powered by a CR2032 coin cell with a stated battery life of around two years. It is IP67-rated and triggers as soon as a thin film of water reaches its contacts. In the European range it replaces the E1 model, which is sold mainly in China.</p>
<p><strong>Strengths:</strong> discreet format that slides under furniture, very low power draw, compatibility with Apple Home, Google Home, Alexa and SmartThings through the Aqara hub, and well-established Home Assistant support (ZHA or Zigbee2MQTT). Thanks to the Matter bridge feature of recent Aqara hubs, it also shows up on Matter platforms.</p>
<p><strong>Limitations:</strong> it requires an Aqara hub or a Zigbee gateway. The audible alarm sounds on the hub rather than on the sensor itself.</p>
<p><strong>Who it's for:</strong> anyone who wants to cover many water points affordably, or who already has an Aqara hub or a Zigbee setup.</p>

<h3>Shelly Flood Gen4: the most versatile option without a hub</h3>
<p>The Shelly Flood Gen4 works over Wi-Fi, Zigbee and Bluetooth and supports Matter. It runs on four AA batteries (estimated life of about two years depending on use) and has a built-in buzzer with several alarm levels. Its distinctive feature is a 2 m sensing cable, extendable up to 150 m, plus a rain detection mode alongside the flood mode.</p>
<p><strong>Strengths:</strong> no hub required on Wi-Fi, built-in local alarm, a cable that covers a whole area, and integration with Alexa, Google Home and Home Assistant.</p>
<p><strong>Limitations:</strong> the housing is IP44 (the cable goes on the floor, the unit must stay dry), and it is bulkier than a puck. Shelly also offers the Flood S Gen4 in an IP67 housing without a cable if you prefer a spot sensor.</p>
<p><strong>Who it's for:</strong> utility rooms, boiler rooms and cellars, or anyone who does not want a hub.</p>

<h3>Eve Water Guard: the pick for Apple users</h3>
<p>The Eve Water Guard plugs into a wall socket and monitors a 2 m sensing cable, extendable up to 150 m with extensions. It communicates over Thread and Bluetooth and has a 100 dB siren with a flashing light.</p>
<p><strong>Strengths:</strong> no batteries to replace, a loud siren, native integration with Apple's Home app and local operation over Thread.</p>
<p><strong>Limitations:</strong> it needs a socket nearby. Remote notifications and automations require an Apple home hub (HomePod mini, HomePod 2nd generation or a compatible Apple TV 4K). It is first and foremost a product for the Apple ecosystem.</p>
<p><strong>Who it's for:</strong> Apple households that want to watch a water heater, washing machine or riser without managing batteries.</p>

<h3>Aqara Valve Controller T1: automatic shut-off without a plumber</h3>
<p>The Aqara Valve Controller T1 is not a detector but an actuator: it clamps onto an existing lever- or butterfly-handle stop valve in DN15, DN20 or DN25 (1/2", 3/4" or 1") and turns it with a motor. It uses Zigbee and four AA batteries, delivers up to 3.6 N·m of torque and closes the valve in 5 to 20 seconds according to the manufacturer.</p>
<p><strong>Strengths:</strong> no pipe cutting, and fitting requires no plumbing tools if your valve is compatible. Paired with a Water Leak Sensor T1 through an Aqara automation, it shuts off the supply as soon as a leak is detected. It also works with Apple Home, Alexa, Google Home, SmartThings, Home Assistant and Homey.</p>
<p><strong>Limitations:</strong> an Aqara hub is mandatory, and the existing valve must be in good condition and not seized. Check your hub's compatibility on the manufacturer's page before buying.</p>
<p><strong>Who it's for:</strong> owners and tenants who want automatic shut-off without any building work.</p>

<h3>What about systems fitted on the main supply?</h3>
<p>The Grohe Sense Guard, long cited as the benchmark flow controller with built-in shut-off, is no longer manufactured. Some leftover stock still circulates, but we no longer recommend it. Other safety devices mounted directly on the main supply pipe exist, often from water treatment specialists: they must be fitted by a plumber and are best chosen with them, based on your installation.</p>

<h2>Comparison table</h2>
<table>
<thead>
<tr><th>Model</th><th>Type</th><th>Connectivity</th><th>Power</th><th>Water shut-off</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Aqara Water Leak Sensor T1</td><td>IP67 spot sensor</td><td>Zigbee 3.0 (Aqara hub)</td><td>CR2032 coin cell</td><td>With Valve Controller T1</td><td>Covering every water point</td></tr>
<tr><td>Shelly Flood Gen4</td><td>Unit + 2 m cable</td><td>Wi-Fi, Zigbee, Bluetooth, Matter</td><td>4 × AA</td><td>Via automation</td><td>Utility room, cellar, no hub</td></tr>
<tr><td>Eve Water Guard</td><td>Plug + 2 m cable</td><td>Thread, Bluetooth</td><td>Mains</td><td>Via Apple automation</td><td>Apple ecosystem</td></tr>
<tr><td>Aqara Valve Controller T1</td><td>Valve actuator</td><td>Zigbee (Aqara hub)</td><td>4 × AA</td><td>Yes, closes the valve</td><td>Automatic shut-off, no building work</td></tr>
</tbody>
</table>

<h2>Where to place your sensors</h2>
<p>Start with the appliances that are permanently fed with pressurised water or that discharge it:</p>
<ul>
<li><strong>Behind or under the washing machine:</strong> the inlet hose and drain hose are classic weak points.</li>
<li><strong>Under the dishwasher:</strong> drain pump and door seal.</li>
<li><strong>Inside the cabinet under the kitchen sink:</strong> tap hoses, trap and dishwasher connection.</li>
<li><strong>At the foot of the water heater:</strong> relief valves often drip, and a failing tank releases a lot of water.</li>
<li><strong>Under the washbasin, near the shower or bath, and behind the toilet.</strong></li>
<li><strong>Near the main stopcock and the water meter</strong>, and in the cellar or basement if you have one.</li>
</ul>
<p>Lay the sensor flat, contacts facing down, at the lowest point where water would pool. Avoid places that get wet in normal use (shower trays, floors that are mopped heavily), or you will get false alarms.</p>

<h2>Setting up automatic shut-off: steps and precautions</h2>
<ol>
<li><strong>Locate your main stop valve</strong> and check that it is a quarter-turn valve with a lever or butterfly handle, in a compatible diameter.</li>
<li><strong>Operate it by hand</strong> several times. A seized valve should be replaced by a plumber before you fit a motor to it.</li>
<li><strong>Install the hub</strong>, then add the sensors and the actuator in the app.</li>
<li><strong>Mount the actuator</strong> on the valve following the instructions, without straining the pipe.</li>
<li><strong>Create the automation</strong> "if a sensor detects water, close the valve and send a notification".</li>
<li><strong>Check that it works</strong> by lightly dampening a sensor with a wet cloth: the valve should close and the alert should reach your phone.</li>
</ol>
<p>In a block of flats or a rented home, only work on your own dwelling's valve, never on a shared riser. If a valve needs replacing or the pipework needs changing, have the job done by a qualified plumber.</p>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Relying on notifications alone:</strong> without a local alarm, a leak while you sleep can go unnoticed.</li>
<li><strong>Forgetting the batteries:</strong> enable low-battery alerts and note the replacement date.</li>
<li><strong>Placing the sensor too far from the source:</strong> water follows the slope of the floor; put the sensor where it will collect.</li>
<li><strong>Fitting a motor to a seized valve:</strong> it may fail to close it on the day you need it.</li>
<li><strong>Juggling several apps:</strong> stay within one ecosystem so that every alert arrives in the same place. Our guide to <a href="/en/blog/maison-connectee-matter-thread-2026">Matter and Thread</a> helps you make that choice.</li>
</ul>

<h2>Home insurance: what you should know</h2>
<p>A leak detector does not replace your insurance and does not exempt you from maintaining your installations. Some insurers value prevention equipment, but terms vary from one policy to another: ask your own insurer directly before counting on any discount. If a claim does occur, the app's alert history can help you establish when the leak started.</p>

<h2>Our verdict</h2>
<p>For the vast majority of homes, the best strategy is to place <strong>Aqara Water Leak Sensor T1</strong> units under every at-risk appliance. If you want to go further, the <strong>Aqara Valve Controller T1</strong> turns that sensor network into a genuine automatic shut-off system, with no building work. The <strong>Shelly Flood Gen4</strong> suits those who do not want a hub or who need to watch a whole area with a cable, and the <strong>Eve Water Guard</strong> is the natural choice in an Apple home. Find every model on our <a href="/en/energie-domotique/detecteurs-fuite-eau">water leak detectors</a> page.</p>`,
    de: `<p><strong>Für die meisten Haushalte ist der Aqara Water Leak Sensor T1 2026 der beste smarte Wassermelder: ein kleiner Zigbee-Sensor, den Sie unter jedes gefährdete Gerät legen und der sofort eine Benachrichtigung aufs Smartphone schickt, sobald Wasser ihn berührt.</strong> Soll das Wasser zusätzlich automatisch abgesperrt werden, kombinieren Sie ihn mit dem Aqara Valve Controller T1, einem Stellmotor, der auf Ihren vorhandenen Absperrhahn gesetzt wird und ihn schließt, sobald ein Leck erkannt wird.</p>
<p>Dieser Ratgeber vergleicht die in Europa tatsächlich erhältlichen Lösungen auf Basis von Herstellerangaben, unabhängigen Bewertungen und verifizierten Käuferrückmeldungen: punktuelle Sensoren, Sensorkabel, automatische Absperrung, Platzierung und typische Fehler. Die komplette Auswahl finden Sie auf unserer Seite <a href="/de/energie-domotique/detecteurs-fuite-eau">Wasserleck-Melder</a>.</p>

<h2>Warum einen smarten Wassermelder installieren?</h2>
<p>Leitungswasserschäden gehören zu den häufigsten Schadensfällen in der Wohngebäude- und Hausratversicherung. Das eigentliche Problem ist selten das Leck selbst, sondern die Zeit, bis es jemand bemerkt: ein Zulaufschlauch der Waschmaschine, der während der Arbeitszeit platzt, ein tropfendes Sicherheitsventil am Warmwasserspeicher im Schrank, eine undichte Siphondichtung, die wochenlang unter dem Unterschrank sickert. Wenn man es entdeckt, ist das Parkett aufgequollen, die Gipskartonwand durchnässt und in der Etagenwohnung hat der Nachbar darunter schon Wasser an der Decke.</p>
<p>Ein vernetzter Melder repariert nichts, aber er verkürzt diese Zeit auf Sekunden. Er benachrichtigt Ihr Smartphone, wo immer Sie sind, kann eine Sirene in der Wohnung auslösen und mit einem motorisierten Ventil die Wasserzufuhr ganz ohne menschliches Eingreifen absperren. Er ist unauffällig, braucht kaum Platz und lässt sich in die gängigen Smart-Home-Systeme einbinden. Er ergänzt eine <a href="/de/blog/alarme-maison-sans-abonnement">Alarmanlage ohne Abo</a> sinnvoll.</p>

<h2>Worauf es beim Kauf ankommt</h2>
<h3>Punktueller Sensor oder Sensorkabel</h3>
<p>Die meisten Melder sind kleine Scheiben, die auf den Boden gelegt werden und auslösen, wenn Wasser ihre Kontakte überbrückt. Ideal unter der Spüle oder hinter der Spülmaschine. Einige Modelle nutzen stattdessen ein Sensorkabel, das auf ganzer Länge überwacht: praktisch entlang einer Gerätereihe, rund um einen Warmwasserspeicher oder im Hauswirtschaftsraum, wo Wasser an mehreren Stellen austreten kann.</p>
<h3>Funkstandard und Hub</h3>
<p>Zigbee-Sensoren (etwa von Aqara) verbrauchen sehr wenig Strom und halten lange mit einer Knopfzelle, benötigen aber einen Hub. WLAN-Modelle verbinden sich direkt mit dem Router, verbrauchen dafür mehr Energie. Thread-Modelle setzen einen Border Router voraus (HomePod mini, aktuelles Apple TV oder kompatibler Hub). Wenn Sie bereits ein System nutzen, wählen Sie einen Sensor, der sich dort einfügt, statt eine weitere App zu installieren.</p>
<h3>Stromversorgung</h3>
<p>Knopfzelle CR2032, AA-Batterien oder Netzstrom: Jede Variante hat ihre Einschränkungen. Ein Netzgerät geht nie die Batterie aus, braucht aber eine Steckdose in der Nähe. Ein Batteriegerät lässt sich überall platzieren, sofern Sie den Ladestand in der App im Blick behalten.</p>
<h3>Lokaler Alarm</h3>
<p>Eine Push-Nachricht nützt nichts, wenn das Handy stumm geschaltet oder das Internet ausgefallen ist. Bevorzugen Sie einen Sensor mit eingebautem Summer oder einen Hub, der in der Wohnung Alarm schlagen kann.</p>
<h3>Automatische Absperrung</h3>
<p>Ein Leck zu erkennen ist gut, das Wasser zu stoppen ist besser. Es gibt zwei Ansätze: einen motorisierten Stellantrieb auf einem vorhandenen Vierteldrehungs-Ventil, gesteuert über eine Automation, oder eine Sicherheitseinrichtung, die ein Installateur in die Hauptleitung einbaut. Der erste Weg ist mit Abstand am einfachsten selbst umzusetzen.</p>
<h3>Schutzart und Einsatzort</h3>
<p>Ein Sensor auf dem Boden wird früher oder später nass: Eine hohe Schutzart (zum Beispiel IP67) sorgt dafür, dass er nach einer Überschwemmung weiter funktioniert. Prüfen Sie auch den Betriebstemperaturbereich, wenn Sie Keller, Garage oder unbeheizte Räume ausstatten.</p>

<h2>Die besten smarten Wassermelder 2026</h2>
<h3>Aqara Water Leak Sensor T1: die beste Wahl für die meisten Haushalte</h3>
<p>Der Aqara Water Leak Sensor T1 (Modell WL-S02D) ist ein kompakter Zigbee-3.0-Sensor mit 50 × 50 × 15 mm, betrieben mit einer CR2032-Knopfzelle und einer angegebenen Laufzeit von rund zwei Jahren. Er ist nach IP67 geschützt und löst aus, sobald ein dünner Wasserfilm seine Kontakte erreicht. Im europäischen Sortiment ersetzt er das vorwiegend in China verkaufte Modell E1.</p>
<p><strong>Stärken:</strong> flaches Format, das unter Möbel passt, sehr geringer Verbrauch, Kompatibilität mit Apple Home, Google Home, Alexa und SmartThings über den Aqara-Hub sowie bewährte Home-Assistant-Unterstützung (ZHA oder Zigbee2MQTT). Über die Matter-Bridge-Funktion aktueller Aqara-Hubs erscheint er auch auf Matter-Plattformen.</p>
<p><strong>Schwächen:</strong> Ein Aqara-Hub oder ein Zigbee-Gateway ist Pflicht. Der akustische Alarm ertönt am Hub, nicht am Sensor selbst.</p>
<p><strong>Für wen:</strong> für alle, die viele Wasserstellen günstig absichern möchten oder bereits einen Aqara-Hub bzw. ein Zigbee-Netz haben.</p>

<h3>Shelly Flood Gen4: der vielseitigste ohne Hub</h3>
<p>Der Shelly Flood Gen4 funkt per WLAN, Zigbee und Bluetooth und unterstützt Matter. Er läuft mit vier AA-Batterien (geschätzt rund zwei Jahre, je nach Nutzung) und hat einen eingebauten Summer mit mehreren Alarmstufen. Besonderheit: ein mitgeliefertes Sensorkabel von 2 m, erweiterbar auf bis zu 150 m, sowie ein Regenerkennungsmodus zusätzlich zum Flutmodus.</p>
<p><strong>Stärken:</strong> im WLAN-Betrieb kein Hub nötig, lokaler Alarm integriert, ein Kabel, das eine ganze Zone abdeckt, Einbindung in Alexa, Google Home und Home Assistant.</p>
<p><strong>Schwächen:</strong> Gehäuse nur IP44 (das Kabel liegt am Boden, das Gerät muss trocken bleiben), sperriger als ein flacher Sensor. Shelly bietet außerdem den Flood S Gen4 im IP67-Gehäuse ohne Kabel an, falls Sie einen punktuellen Sensor bevorzugen.</p>
<p><strong>Für wen:</strong> Hauswirtschaftsraum, Heizungsraum und Keller, oder alle, die keinen Hub möchten.</p>

<h3>Eve Water Guard: die Wahl für Apple-Nutzer</h3>
<p>Der Eve Water Guard wird in die Steckdose gesteckt und überwacht ein 2 m langes Sensorkabel, das sich mit Verlängerungen auf bis zu 150 m erweitern lässt. Er kommuniziert über Thread und Bluetooth und besitzt eine 100-dB-Sirene mit Blinklicht.</p>
<p><strong>Stärken:</strong> keine Batterien, laute Sirene, native Einbindung in die Apple-Home-App und lokaler Betrieb über Thread.</p>
<p><strong>Schwächen:</strong> Eine Steckdose in der Nähe ist nötig. Benachrichtigungen unterwegs und Automationen erfordern eine Apple-Steuerzentrale (HomePod mini, HomePod 2. Generation oder kompatibles Apple TV 4K). Es ist in erster Linie ein Produkt für das Apple-Ökosystem.</p>
<p><strong>Für wen:</strong> Apple-Haushalte, die Warmwasserspeicher, Waschmaschine oder Steigleitung ohne Batteriewechsel überwachen wollen.</p>

<h3>Aqara Valve Controller T1: automatische Absperrung ohne Installateur</h3>
<p>Der Aqara Valve Controller T1 ist kein Melder, sondern ein Stellantrieb: Er wird auf ein vorhandenes Absperrventil mit Hebel- oder Flügelgriff in DN15, DN20 oder DN25 (1/2", 3/4" oder 1") gesetzt und dreht es per Motor. Er arbeitet mit Zigbee und vier AA-Batterien, liefert bis zu 3,6 N·m Drehmoment und schließt das Ventil laut Hersteller in 5 bis 20 Sekunden.</p>
<p><strong>Stärken:</strong> Es wird kein Rohr aufgetrennt, die Montage gelingt ohne Sanitärwerkzeug, wenn Ihr Ventil passt. Gekoppelt mit einem Water Leak Sensor T1 über eine Aqara-Automation sperrt er die Wasserzufuhr ab, sobald ein Leck erkannt wird. Zudem arbeitet er mit Apple Home, Alexa, Google Home, SmartThings, Home Assistant und Homey zusammen.</p>
<p><strong>Schwächen:</strong> Ein Aqara-Hub ist Pflicht, und das vorhandene Ventil muss in gutem Zustand und leichtgängig sein. Prüfen Sie vor dem Kauf die Kompatibilität Ihres Hubs auf der Herstellerseite.</p>
<p><strong>Für wen:</strong> Eigentümer und Mieter, die eine automatische Absperrung ohne Umbau wünschen.</p>

<h3>Und Systeme direkt an der Hauptleitung?</h3>
<p>Der Grohe Sense Guard, lange als Referenz unter den Durchflusswächtern mit integrierter Absperrung genannt, wird nicht mehr hergestellt. Restbestände sind noch im Umlauf, wir empfehlen ihn aber nicht mehr. Es gibt weitere Sicherheitseinrichtungen für die Hauptleitung, oft von Spezialisten für Wasseraufbereitung: Sie müssen von einem Installateur eingebaut werden und werden am besten gemeinsam mit ihm passend zur Hausinstallation ausgewählt.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Modell</th><th>Bauart</th><th>Konnektivität</th><th>Stromversorgung</th><th>Wasserabsperrung</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td>Aqara Water Leak Sensor T1</td><td>Punktsensor IP67</td><td>Zigbee 3.0 (Aqara-Hub)</td><td>Knopfzelle CR2032</td><td>Mit Valve Controller T1</td><td>Alle Wasserstellen absichern</td></tr>
<tr><td>Shelly Flood Gen4</td><td>Gerät + 2-m-Kabel</td><td>WLAN, Zigbee, Bluetooth, Matter</td><td>4 × AA</td><td>Per Automation</td><td>Hauswirtschaftsraum, Keller, ohne Hub</td></tr>
<tr><td>Eve Water Guard</td><td>Stecker + 2-m-Kabel</td><td>Thread, Bluetooth</td><td>Netzstrom</td><td>Per Apple-Automation</td><td>Apple-Ökosystem</td></tr>
<tr><td>Aqara Valve Controller T1</td><td>Ventil-Stellantrieb</td><td>Zigbee (Aqara-Hub)</td><td>4 × AA</td><td>Ja, schließt das Ventil</td><td>Automatische Absperrung ohne Umbau</td></tr>
</tbody>
</table>

<h2>Wo Sie die Sensoren platzieren</h2>
<p>Beginnen Sie mit den Geräten, die ständig unter Wasserdruck stehen oder Wasser ableiten:</p>
<ul>
<li><strong>Hinter oder unter der Waschmaschine:</strong> Zulauf- und Ablaufschlauch sind klassische Schwachstellen.</li>
<li><strong>Unter der Spülmaschine:</strong> Laugenpumpe und Türdichtung.</li>
<li><strong>Im Spülenunterschrank:</strong> Armaturenschläuche, Siphon und Spülmaschinenanschluss.</li>
<li><strong>Am Fuß des Warmwasserspeichers:</strong> Sicherheitsventile tropfen häufig, und ein undichter Behälter setzt viel Wasser frei.</li>
<li><strong>Unter dem Waschbecken, neben Dusche oder Badewanne und hinter dem WC.</strong></li>
<li><strong>Nahe am Hauptabsperrhahn und an der Wasseruhr</strong>, sowie im Keller, falls vorhanden.</li>
</ul>
<p>Legen Sie den Sensor flach hin, Kontakte nach unten, an die tiefste Stelle, an der sich Wasser sammeln würde. Meiden Sie Bereiche, die im Alltag nass werden (Duschtasse, intensiv gewischte Böden), sonst drohen Fehlalarme.</p>

<h2>Automatische Absperrung einrichten: Schritte und Vorsichtsmaßnahmen</h2>
<ol>
<li><strong>Hauptabsperrventil suchen</strong> und prüfen, ob es ein Vierteldrehungs-Ventil mit Hebel- oder Flügelgriff in passender Nennweite ist.</li>
<li><strong>Von Hand betätigen</strong>, mehrmals hintereinander. Ein festsitzendes Ventil sollte ein Installateur austauschen, bevor ein Motor darauf kommt.</li>
<li><strong>Hub einrichten</strong>, dann Sensoren und Stellantrieb in der App hinzufügen.</li>
<li><strong>Stellantrieb montieren</strong> gemäß Anleitung, ohne Kraft auf die Leitung auszuüben.</li>
<li><strong>Automation anlegen</strong>: „Wenn ein Sensor Wasser erkennt, Ventil schließen und Benachrichtigung senden“.</li>
<li><strong>Funktion prüfen</strong>, indem Sie einen Sensor mit einem feuchten Tuch leicht benetzen: Das Ventil sollte schließen und die Meldung auf dem Smartphone ankommen.</li>
</ol>
<p>Im Mehrfamilienhaus oder in einer Mietwohnung arbeiten Sie nur am Ventil Ihrer eigenen Wohnung, niemals an einem gemeinsamen Steigstrang. Muss ein Ventil getauscht oder die Leitung verändert werden, beauftragen Sie einen qualifizierten Installateur.</p>

<h2>Fehler, die Sie vermeiden sollten</h2>
<ul>
<li><strong>Sich nur auf Push-Nachrichten verlassen:</strong> Ohne lokalen Alarm kann ein Leck in der Nacht unbemerkt bleiben.</li>
<li><strong>Die Batterien vergessen:</strong> Aktivieren Sie Warnungen bei niedrigem Ladestand und notieren Sie das Wechseldatum.</li>
<li><strong>Den Sensor zu weit von der Quelle entfernt platzieren:</strong> Wasser folgt dem Gefälle; legen Sie den Sensor dorthin, wo es sich sammelt.</li>
<li><strong>Einen Motor auf ein festsitzendes Ventil setzen:</strong> Im Ernstfall schafft er es womöglich nicht, es zu schließen.</li>
<li><strong>Zu viele Apps nutzen:</strong> Bleiben Sie in einem Ökosystem, damit alle Warnungen an einem Ort ankommen. Unser Ratgeber zu <a href="/de/blog/maison-connectee-matter-thread-2026">Matter und Thread</a> hilft bei der Wahl.</li>
</ul>

<h2>Versicherung: was Sie wissen sollten</h2>
<p>Ein Wassermelder ersetzt keine Versicherung und entbindet nicht von der Wartung Ihrer Installationen. Manche Versicherer honorieren Präventionstechnik, die Bedingungen unterscheiden sich jedoch von Vertrag zu Vertrag: Fragen Sie direkt bei Ihrem Versicherer nach, bevor Sie mit einem Nachlass rechnen. Im Schadensfall kann der Alarmverlauf in der App helfen, den Beginn des Lecks zu belegen.</p>

<h2>Unser Fazit</h2>
<p>Für die große Mehrheit der Haushalte ist die beste Strategie, unter jedes gefährdete Gerät einen <strong>Aqara Water Leak Sensor T1</strong> zu legen. Wer weiter gehen möchte, macht mit dem <strong>Aqara Valve Controller T1</strong> aus diesem Sensornetz ein echtes System zur automatischen Absperrung, ganz ohne Umbau. Der <strong>Shelly Flood Gen4</strong> passt zu allen, die keinen Hub möchten oder eine ganze Zone per Kabel überwachen müssen, und der <strong>Eve Water Guard</strong> ist die naheliegende Wahl im Apple-Zuhause. Alle Modelle finden Sie auf unserer Seite <a href="/de/energie-domotique/detecteurs-fuite-eau">Wasserleck-Melder</a>.</p>`,
    es: `<p><strong>Para la mayoría de los hogares, el mejor detector de fugas de agua inteligente en 2026 es el Aqara Water Leak Sensor T1: un pequeño sensor Zigbee que se coloca bajo cada aparato de riesgo y envía una alerta al móvil en cuanto el agua lo toca.</strong> Si además quiere que el agua se corte automáticamente, combínelo con el Aqara Valve Controller T1, un motor que se acopla a su llave de paso existente y la cierra en cuanto se detecta una fuga.</p>
<p>Esta guía compara las soluciones realmente disponibles en Europa, a partir de las fichas técnicas de los fabricantes, análisis independientes y opiniones verificadas de compradores: sensores puntuales, cables de detección, corte automático, ubicación y errores que conviene evitar. Para ver toda la selección, visite nuestra página de <a href="/es/energie-domotique/detecteurs-fuite-eau">detectores de fugas de agua</a>.</p>

<h2>¿Por qué instalar un detector de fugas de agua inteligente?</h2>
<p>Los daños por agua están entre los siniestros más frecuentes del seguro de hogar en Europa. El verdadero problema rara vez es la fuga en sí, sino el tiempo que pasa hasta que alguien la nota: un latiguillo de la lavadora que revienta durante la jornada laboral, la válvula de seguridad del termo goteando dentro de un armario, la junta de un sifón que rezuma durante semanas bajo un mueble. Cuando se descubre, el parqué se ha hinchado, el pladur está empapado y, en un piso, el vecino de abajo ya tiene agua en el techo.</p>
<p>Un detector conectado no repara nada, pero reduce ese retraso a segundos. Avisa a su móvil esté donde esté, puede hacer sonar una sirena en casa y, con una válvula motorizada, cortar el suministro sin intervención humana. Es discreto, ocupa muy poco y funciona con los principales ecosistemas domóticos. Complementa muy bien una <a href="/es/blog/alarme-maison-sans-abonnement">alarma para el hogar sin suscripción</a>.</p>

<h2>Cómo elegir: los criterios que importan</h2>
<h3>Sensor puntual o cable de detección</h3>
<p>La mayoría de los sensores son pequeños discos que se colocan en el suelo y reaccionan cuando el agua toca sus contactos. Son ideales bajo el fregadero o detrás del lavavajillas. Algunos modelos usan un cable de detección que vigila toda su longitud: práctico a lo largo de una hilera de electrodomésticos, alrededor de un termo o en un lavadero, donde el agua puede aparecer en varios puntos.</p>
<h3>Protocolo y concentrador</h3>
<p>Los sensores Zigbee (como los de Aqara) consumen muy poco y duran mucho con una pila de botón, pero necesitan un hub. Los modelos Wi-Fi se conectan directamente al router, a cambio de un mayor consumo. Los modelos Thread dependen de un router de borde (HomePod mini, un Apple TV reciente o un hub compatible). Si ya tiene un ecosistema, elija un sensor que se integre en él en lugar de añadir otra aplicación.</p>
<h3>Alimentación</h3>
<p>Pila de botón CR2032, pilas AA o corriente: cada opción tiene sus limitaciones. Un modelo enchufado nunca se queda sin batería, pero necesita un enchufe cerca. Un modelo a pilas se coloca en cualquier sitio, siempre que vigile el nivel de batería en la aplicación.</p>
<h3>Alarma local</h3>
<p>Una notificación no sirve de nada si el móvil está en silencio o se cae internet. Dé prioridad a un sensor con zumbador integrado o a un hub capaz de hacer sonar una alarma en casa.</p>
<h3>Corte automático</h3>
<p>Detectar la fuga está bien; detener el agua es mejor. Hay dos enfoques: un actuador motorizado colocado sobre una llave de cuarto de vuelta existente y controlado por una automatización, o un dispositivo de seguridad instalado en la tubería principal por un fontanero. El primero es, con diferencia, el más fácil de montar uno mismo.</p>
<h3>Grado de protección y ubicación</h3>
<p>Un sensor en el suelo acabará mojándose: un grado de protección alto (IP67, por ejemplo) garantiza que siga funcionando después de una inundación. Compruebe también el rango de temperatura de funcionamiento si equipa un sótano, un garaje o un espacio sin calefacción.</p>

<h2>Los mejores detectores de fugas de agua inteligentes de 2026</h2>
<h3>Aqara Water Leak Sensor T1: la mejor opción para la mayoría de los hogares</h3>
<p>El Aqara Water Leak Sensor T1 (modelo WL-S02D) es un sensor Zigbee 3.0 compacto de 50 × 50 × 15 mm, alimentado por una pila CR2032 con una autonomía declarada de unos dos años. Tiene protección IP67 y se activa en cuanto una fina película de agua alcanza sus contactos. En la gama europea sustituye al modelo E1, que se vende principalmente en China.</p>
<p><strong>Puntos fuertes:</strong> formato discreto que cabe bajo los muebles, consumo muy bajo, compatibilidad con Apple Home, Google Home, Alexa y SmartThings a través del hub Aqara, y una integración consolidada con Home Assistant (ZHA o Zigbee2MQTT). Gracias a la función de puente Matter de los hubs Aqara recientes, también aparece en las plataformas Matter.</p>
<p><strong>Limitaciones:</strong> requiere un hub Aqara o una pasarela Zigbee. La alarma sonora suena en el hub, no en el propio sensor.</p>
<p><strong>Para quién:</strong> quienes quieren cubrir muchos puntos de agua de forma económica, o ya tienen un hub Aqara o una instalación Zigbee.</p>

<h3>Shelly Flood Gen4: el más versátil sin hub</h3>
<p>El Shelly Flood Gen4 funciona por Wi-Fi, Zigbee y Bluetooth y es compatible con Matter. Usa cuatro pilas AA (autonomía estimada de unos dos años según el uso) e integra un zumbador con varios niveles de alarma. Su particularidad: un cable de detección de 2 m incluido, ampliable hasta 150 m, y un modo de detección de lluvia además del modo inundación.</p>
<p><strong>Puntos fuertes:</strong> sin hub obligatorio en Wi-Fi, alarma local integrada, un cable que cubre toda una zona e integración con Alexa, Google Home y Home Assistant.</p>
<p><strong>Limitaciones:</strong> la carcasa es IP44 (el cable va en el suelo, el aparato debe quedar seco) y es más voluminoso que un disco. Shelly ofrece también el Flood S Gen4 en carcasa IP67 sin cable si prefiere un sensor puntual.</p>
<p><strong>Para quién:</strong> lavaderos, salas de calderas y sótanos, o cualquiera que no quiera un hub.</p>

<h3>Eve Water Guard: la elección de los usuarios de Apple</h3>
<p>El Eve Water Guard se enchufa a la corriente y vigila un cable de detección de 2 m, ampliable hasta 150 m con extensiones. Se comunica por Thread y Bluetooth e incorpora una sirena de 100 dB con señal luminosa.</p>
<p><strong>Puntos fuertes:</strong> sin pilas que cambiar, sirena potente, integración nativa en la app Casa de Apple y funcionamiento local por Thread.</p>
<p><strong>Limitaciones:</strong> necesita un enchufe cerca. Las notificaciones a distancia y las automatizaciones exigen un concentrador de Apple (HomePod mini, HomePod de 2.ª generación o un Apple TV 4K compatible). Es, ante todo, un producto para el ecosistema de Apple.</p>
<p><strong>Para quién:</strong> hogares con Apple que quieren vigilar un termo, una lavadora o una bajante sin preocuparse de pilas.</p>

<h3>Aqara Valve Controller T1: corte automático sin fontanero</h3>
<p>El Aqara Valve Controller T1 no es un detector sino un actuador: se acopla a una llave de paso existente con maneta de palanca o de mariposa, en DN15, DN20 o DN25 (1/2", 3/4" o 1"), y la gira mediante un motor. Funciona por Zigbee con cuatro pilas AA, ofrece un par de hasta 3,6 N·m y cierra la llave en 5 a 20 segundos según el fabricante.</p>
<p><strong>Puntos fuertes:</strong> no hay que cortar ninguna tubería y el montaje no requiere herramientas de fontanería si su llave es compatible. Combinado con un Water Leak Sensor T1 mediante una automatización de Aqara, cierra el suministro en cuanto se detecta una fuga. También es compatible con Apple Home, Alexa, Google Home, SmartThings, Home Assistant y Homey.</p>
<p><strong>Limitaciones:</strong> el hub Aqara es obligatorio y la llave existente debe estar en buen estado y no agarrotada. Compruebe la compatibilidad de su hub en la página del fabricante antes de comprar.</p>
<p><strong>Para quién:</strong> propietarios e inquilinos que quieren un corte automático sin obras.</p>

<h3>¿Y los sistemas instalados en la acometida?</h3>
<p>El Grohe Sense Guard, citado durante mucho tiempo como referencia de los controladores de caudal con corte integrado, ya no se fabrica. Todavía circulan existencias residuales, pero ya no lo recomendamos. Existen otros dispositivos de seguridad montados directamente en la tubería principal, a menudo de especialistas en tratamiento de agua: requieren la instalación de un fontanero y conviene elegirlos con él según su instalación.</p>

<h2>Tabla comparativa</h2>
<table>
<thead>
<tr><th>Modelo</th><th>Tipo</th><th>Conectividad</th><th>Alimentación</th><th>Corte del agua</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td>Aqara Water Leak Sensor T1</td><td>Sensor puntual IP67</td><td>Zigbee 3.0 (hub Aqara)</td><td>Pila CR2032</td><td>Con Valve Controller T1</td><td>Cubrir todos los puntos de agua</td></tr>
<tr><td>Shelly Flood Gen4</td><td>Aparato + cable de 2 m</td><td>Wi-Fi, Zigbee, Bluetooth, Matter</td><td>4 pilas AA</td><td>Mediante automatización</td><td>Lavadero, sótano, sin hub</td></tr>
<tr><td>Eve Water Guard</td><td>Enchufe + cable de 2 m</td><td>Thread, Bluetooth</td><td>Corriente</td><td>Mediante automatización Apple</td><td>Ecosistema Apple</td></tr>
<tr><td>Aqara Valve Controller T1</td><td>Actuador de llave</td><td>Zigbee (hub Aqara)</td><td>4 pilas AA</td><td>Sí, cierra la llave</td><td>Corte automático sin obras</td></tr>
</tbody>
</table>

<h2>Dónde colocar los sensores</h2>
<p>Empiece por los aparatos que reciben agua a presión de forma permanente o que la evacuan:</p>
<ul>
<li><strong>Detrás o debajo de la lavadora:</strong> el latiguillo de entrada y la manguera de desagüe son puntos débiles clásicos.</li>
<li><strong>Debajo del lavavajillas:</strong> bomba de desagüe y junta de la puerta.</li>
<li><strong>Dentro del mueble del fregadero:</strong> latiguillos del grifo, sifón y conexión del lavavajillas.</li>
<li><strong>Al pie del termo:</strong> la válvula de seguridad suele gotear, y un depósito que falla libera mucha agua.</li>
<li><strong>Bajo el lavabo, junto a la ducha o la bañera y detrás del inodoro.</strong></li>
<li><strong>Cerca de la llave de paso general y del contador</strong>, y en el sótano si lo tiene.</li>
</ul>
<p>Coloque el sensor plano, con los contactos hacia el suelo, en el punto más bajo donde se acumularía el agua. Evite los lugares que se mojan con el uso normal (plato de ducha, suelos fregados con mucha agua), o tendrá falsas alarmas.</p>

<h2>Instalar un corte automático: pasos y precauciones</h2>
<ol>
<li><strong>Localice la llave de paso general</strong> y compruebe que es de cuarto de vuelta, con maneta de palanca o de mariposa, y de un diámetro compatible.</li>
<li><strong>Accione la llave a mano</strong> varias veces. Una llave agarrotada debe sustituirla un fontanero antes de montarle un motor.</li>
<li><strong>Instale el hub</strong> y añada los sensores y el actuador en la aplicación.</li>
<li><strong>Monte el actuador</strong> en la llave siguiendo las instrucciones, sin forzar la tubería.</li>
<li><strong>Cree la automatización</strong> «si un sensor detecta agua, cerrar la llave y enviar una notificación».</li>
<li><strong>Compruebe el funcionamiento</strong> humedeciendo ligeramente un sensor con un paño mojado: la llave debe cerrarse y la alerta llegar al móvil.</li>
</ol>
<p>En una comunidad de vecinos o en un piso de alquiler, actúe solo sobre la llave de su vivienda, nunca sobre una bajante o montante común. Si hay que cambiar una llave o modificar la instalación, encargue el trabajo a un fontanero cualificado.</p>

<h2>Errores que conviene evitar</h2>
<ul>
<li><strong>Confiar solo en las notificaciones:</strong> sin alarma local, una fuga mientras duerme puede pasar desapercibida.</li>
<li><strong>Olvidarse de las pilas:</strong> active los avisos de batería baja y anote la fecha de cambio.</li>
<li><strong>Colocar el sensor lejos de la fuente:</strong> el agua sigue la pendiente del suelo; ponga el sensor donde se acumulará.</li>
<li><strong>Montar un motor en una llave agarrotada:</strong> puede que no consiga cerrarla el día que haga falta.</li>
<li><strong>Usar demasiadas aplicaciones:</strong> quédese en un único ecosistema para que todas las alertas lleguen al mismo sitio. Nuestra guía sobre <a href="/es/blog/maison-connectee-matter-thread-2026">Matter y Thread</a> le ayuda a elegir.</li>
</ul>

<h2>Seguro de hogar: lo que conviene saber</h2>
<p>Un detector de fugas no sustituye al seguro ni exime del mantenimiento de las instalaciones. Algunas aseguradoras valoran los equipos de prevención, pero las condiciones varían de una póliza a otra: consulte directamente con la suya antes de contar con un descuento. Si se produce un siniestro, el historial de alertas de la aplicación puede ayudar a fechar el inicio de la fuga.</p>

<h2>Nuestro veredicto</h2>
<p>Para la gran mayoría de los hogares, la mejor estrategia es colocar un <strong>Aqara Water Leak Sensor T1</strong> bajo cada aparato de riesgo. Si quiere ir más allá, el <strong>Aqara Valve Controller T1</strong> convierte esa red de sensores en un auténtico sistema de corte automático, sin obras. El <strong>Shelly Flood Gen4</strong> conviene a quien no quiere hub o necesita vigilar toda una zona con un cable, y el <strong>Eve Water Guard</strong> es la elección natural en un hogar con Apple. Encuentre todos los modelos en nuestra página de <a href="/es/energie-domotique/detecteurs-fuite-eau">detectores de fugas de agua</a>.</p>`,
    it: `<p><strong>Per la maggior parte delle abitazioni, il miglior rilevatore di perdite d'acqua smart nel 2026 è l'Aqara Water Leak Sensor T1: un piccolo sensore Zigbee da posare sotto ogni elettrodomestico a rischio, che invia un avviso sullo smartphone non appena l'acqua lo tocca.</strong> Se volete anche che l'acqua venga chiusa automaticamente, abbinatelo all'Aqara Valve Controller T1, un motore che si fissa sulla valvola di arresto esistente e la chiude appena viene rilevata una perdita.</p>
<p>Questa guida confronta le soluzioni realmente disponibili in Europa, sulla base delle schede tecniche dei produttori, di recensioni indipendenti e dei riscontri verificati degli acquirenti: sensori puntuali, cavi di rilevamento, chiusura automatica, posizionamento ed errori da evitare. Per vedere tutta la selezione, consultate la nostra pagina dedicata ai <a href="/it/energie-domotique/detecteurs-fuite-eau">rilevatori di perdite d'acqua</a>.</p>

<h2>Perché installare un rilevatore di perdite d'acqua smart?</h2>
<p>I danni da acqua sono tra i sinistri più frequenti nelle polizze casa in Europa. Il vero problema raramente è la perdita in sé, ma il tempo che passa prima che qualcuno se ne accorga: un tubo di carico della lavatrice che cede durante la giornata lavorativa, la valvola di sicurezza dello scaldabagno che gocciola dentro un armadio, la guarnizione di un sifone che trasuda per settimane sotto un mobile. Quando la si scopre, il parquet si è gonfiato, il cartongesso è impregnato e, in condominio, il vicino del piano di sotto ha già l'acqua sul soffitto.</p>
<p>Un rilevatore connesso non ripara nulla, ma riduce quel ritardo a pochi secondi. Avvisa il vostro telefono ovunque siate, può far suonare una sirena in casa e, con una valvola motorizzata, chiudere l'acqua senza alcun intervento umano. È discreto, occupa pochissimo spazio e funziona con i principali ecosistemi domotici. Completa bene un <a href="/it/blog/alarme-maison-sans-abonnement">sistema d'allarme senza abbonamento</a>.</p>

<h2>Come scegliere: i criteri che contano</h2>
<h3>Sensore puntuale o cavo di rilevamento</h3>
<p>La maggior parte dei sensori sono piccoli dischi appoggiati a terra che reagiscono quando l'acqua tocca i loro contatti. Sono ideali sotto il lavello o dietro la lavastoviglie. Alcuni modelli usano invece un cavo di rilevamento che sorveglia tutta la sua lunghezza: comodo lungo una fila di elettrodomestici, attorno a uno scaldabagno o in una lavanderia, dove l'acqua può comparire in più punti.</p>
<h3>Protocollo e hub</h3>
<p>I sensori Zigbee (come quelli Aqara) consumano pochissimo e durano a lungo con una pila a bottone, ma richiedono un hub. I modelli Wi-Fi si collegano direttamente al router, a fronte di consumi più alti. I modelli Thread si appoggiano a un border router (HomePod mini, una Apple TV recente o un hub compatibile). Se avete già un ecosistema, scegliete un sensore che vi si integri invece di aggiungere un'altra app.</p>
<h3>Alimentazione</h3>
<p>Pila a bottone CR2032, pile AA o rete elettrica: ogni soluzione ha i suoi vincoli. Un modello a presa non resta mai senza batteria ma richiede una presa vicina. Un modello a pile si posiziona ovunque, purché teniate d'occhio il livello della batteria nell'app.</p>
<h3>Allarme locale</h3>
<p>Una notifica è inutile se il telefono è in silenzioso o se internet non funziona. Preferite un sensore con cicalino integrato o un hub in grado di far suonare un allarme in casa.</p>
<h3>Chiusura automatica</h3>
<p>Rilevare la perdita è utile, fermare l'acqua è meglio. Esistono due approcci: un attuatore motorizzato montato su una valvola a quarto di giro esistente e comandato da un'automazione, oppure un dispositivo di sicurezza installato sulla tubazione principale da un idraulico. Il primo è di gran lunga il più semplice da realizzare da soli.</p>
<h3>Grado di protezione e collocazione</h3>
<p>Un sensore a terra prima o poi si bagnerà: un grado di protezione elevato (per esempio IP67) garantisce che continui a funzionare dopo un allagamento. Controllate anche l'intervallo di temperatura di esercizio se attrezzate una cantina, un garage o un locale non riscaldato.</p>

<h2>I migliori rilevatori di perdite d'acqua smart del 2026</h2>
<h3>Aqara Water Leak Sensor T1: la scelta migliore per la maggior parte delle case</h3>
<p>L'Aqara Water Leak Sensor T1 (modello WL-S02D) è un sensore Zigbee 3.0 compatto di 50 × 50 × 15 mm, alimentato da una pila CR2032 con un'autonomia dichiarata di circa due anni. Ha protezione IP67 e si attiva non appena un sottile velo d'acqua raggiunge i suoi contatti. Nella gamma europea sostituisce il modello E1, venduto soprattutto in Cina.</p>
<p><strong>Punti di forza:</strong> formato discreto che si infila sotto i mobili, consumi bassissimi, compatibilità con Apple Home, Google Home, Alexa e SmartThings tramite l'hub Aqara, e un'integrazione collaudata con Home Assistant (ZHA o Zigbee2MQTT). Grazie alla funzione di bridge Matter degli hub Aqara recenti, compare anche sulle piattaforme Matter.</p>
<p><strong>Limiti:</strong> richiede un hub Aqara o un gateway Zigbee. L'allarme sonoro suona sull'hub e non sul sensore stesso.</p>
<p><strong>Per chi:</strong> chi vuole proteggere molti punti acqua spendendo poco, o ha già un hub Aqara o un impianto Zigbee.</p>

<h3>Shelly Flood Gen4: il più versatile senza hub</h3>
<p>Lo Shelly Flood Gen4 funziona in Wi-Fi, Zigbee e Bluetooth ed è compatibile Matter. È alimentato da quattro pile AA (autonomia stimata di circa due anni in base all'uso) e integra un cicalino con più livelli di allarme. La sua particolarità: un cavo di rilevamento da 2 m incluso, estendibile fino a 150 m, e una modalità di rilevamento della pioggia oltre a quella di allagamento.</p>
<p><strong>Punti di forza:</strong> nessun hub obbligatorio in Wi-Fi, allarme locale integrato, un cavo che copre un'intera zona e integrazione con Alexa, Google Home e Home Assistant.</p>
<p><strong>Limiti:</strong> l'involucro è IP44 (il cavo va a terra, l'apparecchio deve restare asciutto) ed è più ingombrante di un disco. Shelly propone anche il Flood S Gen4 in involucro IP67 senza cavo se preferite un sensore puntuale.</p>
<p><strong>Per chi:</strong> lavanderie, locali caldaia e cantine, o chiunque non voglia un hub.</p>

<h3>Eve Water Guard: la scelta per chi usa Apple</h3>
<p>L'Eve Water Guard si collega a una presa elettrica e sorveglia un cavo di rilevamento da 2 m, estendibile fino a 150 m con le prolunghe. Comunica tramite Thread e Bluetooth e dispone di una sirena da 100 dB con segnale luminoso.</p>
<p><strong>Punti di forza:</strong> niente pile da sostituire, sirena potente, integrazione nativa nell'app Casa di Apple e funzionamento locale in Thread.</p>
<p><strong>Limiti:</strong> serve una presa nelle vicinanze. Le notifiche a distanza e le automazioni richiedono un hub domestico Apple (HomePod mini, HomePod di 2ª generazione o una Apple TV 4K compatibile). È innanzitutto un prodotto per l'ecosistema Apple.</p>
<p><strong>Per chi:</strong> le case con dispositivi Apple che vogliono sorvegliare uno scaldabagno, una lavatrice o una colonna senza gestire pile.</p>

<h3>Aqara Valve Controller T1: chiusura automatica senza idraulico</h3>
<p>L'Aqara Valve Controller T1 non è un rilevatore ma un attuatore: si fissa su una valvola di arresto esistente con maniglia a leva o a farfalla, in DN15, DN20 o DN25 (1/2", 3/4" o 1"), e la ruota tramite un motore. Funziona in Zigbee con quattro pile AA, sviluppa una coppia fino a 3,6 N·m e chiude la valvola in 5-20 secondi secondo il produttore.</p>
<p><strong>Punti di forza:</strong> non si taglia alcun tubo e il montaggio non richiede attrezzi da idraulico se la vostra valvola è compatibile. Abbinato a un Water Leak Sensor T1 tramite un'automazione Aqara, chiude l'acqua non appena viene rilevata una perdita. È inoltre compatibile con Apple Home, Alexa, Google Home, SmartThings, Home Assistant e Homey.</p>
<p><strong>Limiti:</strong> l'hub Aqara è obbligatorio e la valvola esistente deve essere in buono stato e non bloccata. Verificate la compatibilità del vostro hub sulla pagina del produttore prima dell'acquisto.</p>
<p><strong>Per chi:</strong> proprietari e inquilini che vogliono una chiusura automatica senza lavori.</p>

<h3>E i sistemi installati sulla linea principale?</h3>
<p>Il Grohe Sense Guard, a lungo citato come riferimento tra i controllori di flusso con chiusura integrata, non è più prodotto. Ne circolano ancora scorte residue, ma non lo consigliamo più. Esistono altri dispositivi di sicurezza montati direttamente sulla tubazione principale, spesso proposti da specialisti del trattamento dell'acqua: richiedono l'installazione da parte di un idraulico e vanno scelti con lui in base al vostro impianto.</p>

<h2>Tabella comparativa</h2>
<table>
<thead>
<tr><th>Modello</th><th>Tipo</th><th>Connettività</th><th>Alimentazione</th><th>Chiusura dell'acqua</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td>Aqara Water Leak Sensor T1</td><td>Sensore puntuale IP67</td><td>Zigbee 3.0 (hub Aqara)</td><td>Pila CR2032</td><td>Con Valve Controller T1</td><td>Coprire tutti i punti acqua</td></tr>
<tr><td>Shelly Flood Gen4</td><td>Unità + cavo da 2 m</td><td>Wi-Fi, Zigbee, Bluetooth, Matter</td><td>4 pile AA</td><td>Tramite automazione</td><td>Lavanderia, cantina, senza hub</td></tr>
<tr><td>Eve Water Guard</td><td>Spina + cavo da 2 m</td><td>Thread, Bluetooth</td><td>Rete elettrica</td><td>Tramite automazione Apple</td><td>Ecosistema Apple</td></tr>
<tr><td>Aqara Valve Controller T1</td><td>Attuatore per valvola</td><td>Zigbee (hub Aqara)</td><td>4 pile AA</td><td>Sì, chiude la valvola</td><td>Chiusura automatica senza lavori</td></tr>
</tbody>
</table>

<h2>Dove posizionare i sensori</h2>
<p>Iniziate dagli elettrodomestici che ricevono acqua in pressione in modo permanente o che la scaricano:</p>
<ul>
<li><strong>Dietro o sotto la lavatrice:</strong> il tubo di carico e quello di scarico sono punti deboli classici.</li>
<li><strong>Sotto la lavastoviglie:</strong> pompa di scarico e guarnizione della porta.</li>
<li><strong>Nel mobile sotto il lavello:</strong> flessibili del miscelatore, sifone e raccordo della lavastoviglie.</li>
<li><strong>Ai piedi dello scaldabagno:</strong> la valvola di sicurezza gocciola spesso e un serbatoio che cede libera molta acqua.</li>
<li><strong>Sotto il lavabo, vicino alla doccia o alla vasca e dietro il WC.</strong></li>
<li><strong>Vicino alla valvola generale e al contatore</strong>, e in cantina o seminterrato se presenti.</li>
</ul>
<p>Appoggiate il sensore in piano, con i contatti verso il pavimento, nel punto più basso in cui l'acqua si raccoglierebbe. Evitate i punti che si bagnano durante l'uso normale (piatto doccia, pavimenti lavati con molta acqua), per non avere falsi allarmi.</p>

<h2>Installare una chiusura automatica: passaggi e precauzioni</h2>
<ol>
<li><strong>Individuate la valvola di arresto generale</strong> e verificate che sia a quarto di giro, con maniglia a leva o a farfalla, e di un diametro compatibile.</li>
<li><strong>Azionatela a mano</strong> più volte. Una valvola bloccata va sostituita da un idraulico prima di montarvi un motore.</li>
<li><strong>Installate l'hub</strong>, poi aggiungete sensori e attuatore nell'app.</li>
<li><strong>Montate l'attuatore</strong> sulla valvola seguendo le istruzioni, senza forzare sulla tubazione.</li>
<li><strong>Create l'automazione</strong> «se un sensore rileva acqua, chiudi la valvola e invia una notifica».</li>
<li><strong>Verificate il funzionamento</strong> inumidendo leggermente un sensore con un panno bagnato: la valvola deve chiudersi e l'avviso arrivare sul telefono.</li>
</ol>
<p>In condominio o in affitto, intervenite solo sulla valvola del vostro appartamento, mai su una colonna comune. Se occorre sostituire una valvola o modificare le tubazioni, affidate il lavoro a un idraulico qualificato.</p>

<h2>Errori da evitare</h2>
<ul>
<li><strong>Affidarsi solo alle notifiche:</strong> senza allarme locale, una perdita mentre dormite può passare inosservata.</li>
<li><strong>Dimenticare le pile:</strong> attivate gli avvisi di batteria scarica e annotate la data di sostituzione.</li>
<li><strong>Posizionare il sensore lontano dalla fonte:</strong> l'acqua segue la pendenza del pavimento; mettete il sensore dove si accumulerà.</li>
<li><strong>Montare un motore su una valvola bloccata:</strong> rischia di non riuscire a chiuderla il giorno in cui serve.</li>
<li><strong>Usare troppe app:</strong> restate in un solo ecosistema perché tutti gli avvisi arrivino nello stesso posto. La nostra guida su <a href="/it/blog/maison-connectee-matter-thread-2026">Matter e Thread</a> vi aiuta a scegliere.</li>
</ul>

<h2>Assicurazione casa: cosa sapere</h2>
<p>Un rilevatore di perdite non sostituisce l'assicurazione e non esonera dalla manutenzione degli impianti. Alcune compagnie valorizzano i dispositivi di prevenzione, ma le condizioni variano da polizza a polizza: informatevi direttamente presso la vostra prima di contare su uno sconto. In caso di sinistro, lo storico degli avvisi nell'app può aiutare a datare l'inizio della perdita.</p>

<h2>Il nostro verdetto</h2>
<p>Per la grande maggioranza delle abitazioni, la strategia migliore è posare un <strong>Aqara Water Leak Sensor T1</strong> sotto ogni elettrodomestico a rischio. Se volete andare oltre, l'<strong>Aqara Valve Controller T1</strong> trasforma questa rete di sensori in un vero sistema di chiusura automatica, senza lavori. Lo <strong>Shelly Flood Gen4</strong> è adatto a chi non vuole un hub o deve sorvegliare un'intera zona con un cavo, e l'<strong>Eve Water Guard</strong> è la scelta naturale in una casa Apple. Trovate tutti i modelli nella nostra pagina dei <a href="/it/energie-domotique/detecteurs-fuite-eau">rilevatori di perdite d'acqua</a>.</p>`,
    nl: `<p><strong>Voor de meeste woningen is de Aqara Water Leak Sensor T1 in 2026 de beste slimme waterlekkagesensor: een kleine Zigbee-sensor die u onder elk risicotoestel legt en die direct een melding naar uw smartphone stuurt zodra er water bij komt.</strong> Wilt u dat het water ook automatisch wordt afgesloten, combineer hem dan met de Aqara Valve Controller T1, een motor die op uw bestaande hoofdkraan wordt gezet en die dichtdraait zodra er een lek wordt gedetecteerd.</p>
<p>Deze gids vergelijkt de oplossingen die in Europa echt verkrijgbaar zijn, op basis van fabrikantspecificaties, onafhankelijke reviews en geverifieerde ervaringen van kopers: puntsensoren, detectiekabels, automatische afsluiting, plaatsing en fouten die u beter vermijdt. Bekijk de volledige selectie op onze pagina <a href="/nl/energie-domotique/detecteurs-fuite-eau">waterlekdetectoren</a>.</p>

<h2>Waarom een slimme waterlekkagesensor plaatsen?</h2>
<p>Waterschade is een van de meest voorkomende schadeclaims bij woonverzekeringen in Europa. Het echte probleem is zelden het lek zelf, maar de tijd die verstrijkt voordat iemand het opmerkt: een toevoerslang van de wasmachine die tijdens een werkdag knapt, een overstortventiel van de boiler dat in een kast lekt, een sifonpakking die wekenlang onder een kastje sijpelt. Tegen de tijd dat u het ontdekt, is het parket opgezwollen, de gipsplaat doorweekt en hebben de onderburen in een appartement al water door het plafond.</p>
<p>Een verbonden sensor repareert niets, maar brengt die vertraging terug tot enkele seconden. Hij waarschuwt uw telefoon waar u ook bent, kan een sirene in huis laten afgaan en met een gemotoriseerde kraan de watertoevoer afsluiten zonder dat iemand iets hoeft te doen. Hij is onopvallend, neemt nauwelijks ruimte in en werkt met de belangrijkste smarthome-ecosystemen. Hij vult een <a href="/nl/blog/alarme-maison-sans-abonnement">alarmsysteem zonder abonnement</a> goed aan.</p>

<h2>Zo kiest u: de criteria die tellen</h2>
<h3>Puntsensor of detectiekabel</h3>
<p>De meeste sensoren zijn kleine schijfjes die op de vloer liggen en reageren wanneer water hun contacten raakt. Ideaal onder de gootsteen of achter de vaatwasser. Sommige modellen gebruiken in plaats daarvan een detectiekabel die over de hele lengte bewaakt: handig langs een rij apparaten, rond een boiler of in een bijkeuken, waar water op meerdere plekken kan opduiken.</p>
<h3>Protocol en hub</h3>
<p>Zigbee-sensoren (zoals die van Aqara) verbruiken heel weinig en gaan lang mee op een knoopcel, maar hebben een hub nodig. Wifi-modellen verbinden rechtstreeks met uw router, wat meer stroom kost. Thread-modellen leunen op een border router (HomePod mini, een recente Apple TV of een compatibele hub). Hebt u al een ecosysteem, kies dan een sensor die daarin past in plaats van nog een app toe te voegen.</p>
<h3>Voeding</h3>
<p>Knoopcel CR2032, AA-batterijen of netstroom: elke optie heeft beperkingen. Een model op netstroom raakt nooit leeg, maar heeft een stopcontact in de buurt nodig. Een model op batterijen kan overal liggen, zolang u het batterijniveau in de app in de gaten houdt.</p>
<h3>Lokaal alarm</h3>
<p>Een melding heeft geen zin als uw telefoon op stil staat of het internet uitvalt. Kies bij voorkeur een sensor met ingebouwde zoemer, of een hub die in huis alarm kan slaan.</p>
<h3>Automatische afsluiting</h3>
<p>Een lek detecteren is goed, het water stoppen is beter. Er zijn twee benaderingen: een gemotoriseerde actuator op een bestaande kwartslagkraan, aangestuurd door een automatisering, of een beveiligingsapparaat dat een loodgieter in de hoofdleiding plaatst. De eerste is veruit het makkelijkst om zelf te installeren.</p>
<h3>Beschermingsgraad en plaats</h3>
<p>Een sensor op de vloer wordt vroeg of laat nat: een hoge beschermingsgraad (bijvoorbeeld IP67) zorgt dat hij na een overstroming blijft werken. Controleer ook het werkingstemperatuurbereik als u een kelder, garage of onverwarmde ruimte uitrust.</p>

<h2>De beste slimme waterlekkagesensoren van 2026</h2>
<h3>Aqara Water Leak Sensor T1: de beste keuze voor de meeste woningen</h3>
<p>De Aqara Water Leak Sensor T1 (model WL-S02D) is een compacte Zigbee 3.0-sensor van 50 × 50 × 15 mm, gevoed door een CR2032-knoopcel met een opgegeven levensduur van ongeveer twee jaar. Hij heeft een IP67-classificatie en slaat aan zodra een dun laagje water zijn contacten bereikt. In het Europese assortiment vervangt hij het E1-model, dat vooral in China wordt verkocht.</p>
<p><strong>Sterke punten:</strong> plat formaat dat onder meubels past, zeer laag verbruik, compatibel met Apple Home, Google Home, Alexa en SmartThings via de Aqara-hub, en beproefde ondersteuning in Home Assistant (ZHA of Zigbee2MQTT). Dankzij de Matter-bridgefunctie van recente Aqara-hubs verschijnt hij ook op Matter-platforms.</p>
<p><strong>Beperkingen:</strong> een Aqara-hub of Zigbee-gateway is nodig. Het geluidsalarm klinkt op de hub en niet op de sensor zelf.</p>
<p><strong>Voor wie:</strong> wie veel waterpunten voordelig wil beveiligen, of al een Aqara-hub of Zigbee-netwerk heeft.</p>

<h3>Shelly Flood Gen4: de veelzijdigste zonder hub</h3>
<p>De Shelly Flood Gen4 werkt via wifi, Zigbee en Bluetooth en ondersteunt Matter. Hij draait op vier AA-batterijen (geschatte levensduur ongeveer twee jaar, afhankelijk van het gebruik) en heeft een ingebouwde zoemer met meerdere alarmniveaus. Bijzonder: een meegeleverde detectiekabel van 2 m, uitbreidbaar tot 150 m, en naast de overstromingsmodus ook een regendetectiemodus.</p>
<p><strong>Sterke punten:</strong> geen hub nodig via wifi, lokaal alarm ingebouwd, een kabel die een hele zone bewaakt, en integratie met Alexa, Google Home en Home Assistant.</p>
<p><strong>Beperkingen:</strong> de behuizing is IP44 (de kabel ligt op de vloer, het apparaat moet droog blijven) en hij is groter dan een schijfje. Shelly biedt ook de Flood S Gen4 in een IP67-behuizing zonder kabel, als u liever een puntsensor hebt.</p>
<p><strong>Voor wie:</strong> bijkeukens, technische ruimtes en kelders, of iedereen die geen hub wil.</p>

<h3>Eve Water Guard: de keuze voor Apple-gebruikers</h3>
<p>De Eve Water Guard gaat in het stopcontact en bewaakt een detectiekabel van 2 m, met verlengstukken uit te breiden tot 150 m. Hij communiceert via Thread en Bluetooth en heeft een sirene van 100 dB met knipperlicht.</p>
<p><strong>Sterke punten:</strong> geen batterijen te vervangen, luide sirene, native integratie in de Woning-app van Apple en lokale werking via Thread.</p>
<p><strong>Beperkingen:</strong> er moet een stopcontact in de buurt zijn. Meldingen op afstand en automatiseringen vereisen een Apple-woninghub (HomePod mini, HomePod 2e generatie of een compatibele Apple TV 4K). Het is in de eerste plaats een product voor het Apple-ecosysteem.</p>
<p><strong>Voor wie:</strong> Apple-huishoudens die een boiler, wasmachine of standleiding willen bewaken zonder batterijen te beheren.</p>

<h3>Aqara Valve Controller T1: automatische afsluiting zonder loodgieter</h3>
<p>De Aqara Valve Controller T1 is geen sensor maar een actuator: hij wordt op een bestaande afsluiter met hendel- of vlindergreep geplaatst, in DN15, DN20 of DN25 (1/2", 3/4" of 1"), en draait die met een motor. Hij werkt via Zigbee op vier AA-batterijen, levert tot 3,6 N·m koppel en sluit de kraan volgens de fabrikant in 5 tot 20 seconden.</p>
<p><strong>Sterke punten:</strong> er hoeft geen leiding doorgezaagd te worden en de montage vraagt geen loodgietersgereedschap als uw kraan compatibel is. Gekoppeld aan een Water Leak Sensor T1 via een Aqara-automatisering sluit hij het water af zodra er een lek wordt gedetecteerd. Hij werkt ook met Apple Home, Alexa, Google Home, SmartThings, Home Assistant en Homey.</p>
<p><strong>Beperkingen:</strong> een Aqara-hub is verplicht, en de bestaande kraan moet in goede staat zijn en niet vastzitten. Controleer vóór aankoop de compatibiliteit van uw hub op de pagina van de fabrikant.</p>
<p><strong>Voor wie:</strong> eigenaren en huurders die automatische afsluiting willen zonder verbouwing.</p>

<h3>En systemen op de hoofdleiding?</h3>
<p>De Grohe Sense Guard, lange tijd genoemd als referentie onder de debietregelaars met ingebouwde afsluiting, wordt niet meer geproduceerd. Er circuleren nog restvoorraden, maar wij raden hem niet meer aan. Er bestaan andere beveiligingsapparaten die rechtstreeks op de hoofdleiding worden gemonteerd, vaak van specialisten in waterbehandeling: die moeten door een loodgieter worden geplaatst en kiest u het best samen met hem, afgestemd op uw installatie.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Model</th><th>Type</th><th>Connectiviteit</th><th>Voeding</th><th>Water afsluiten</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td>Aqara Water Leak Sensor T1</td><td>Puntsensor IP67</td><td>Zigbee 3.0 (Aqara-hub)</td><td>Knoopcel CR2032</td><td>Met Valve Controller T1</td><td>Alle waterpunten beveiligen</td></tr>
<tr><td>Shelly Flood Gen4</td><td>Apparaat + kabel van 2 m</td><td>Wifi, Zigbee, Bluetooth, Matter</td><td>4 × AA</td><td>Via automatisering</td><td>Bijkeuken, kelder, zonder hub</td></tr>
<tr><td>Eve Water Guard</td><td>Stekker + kabel van 2 m</td><td>Thread, Bluetooth</td><td>Netstroom</td><td>Via Apple-automatisering</td><td>Apple-ecosysteem</td></tr>
<tr><td>Aqara Valve Controller T1</td><td>Kraanactuator</td><td>Zigbee (Aqara-hub)</td><td>4 × AA</td><td>Ja, sluit de kraan</td><td>Automatische afsluiting zonder verbouwing</td></tr>
</tbody>
</table>

<h2>Waar plaatst u de sensoren?</h2>
<p>Begin bij de apparaten die permanent water onder druk krijgen of het afvoeren:</p>
<ul>
<li><strong>Achter of onder de wasmachine:</strong> toevoer- en afvoerslang zijn klassieke zwakke plekken.</li>
<li><strong>Onder de vaatwasser:</strong> afvoerpomp en deurrubber.</li>
<li><strong>In het keukenkastje onder de gootsteen:</strong> kraanslangen, sifon en aansluiting van de vaatwasser.</li>
<li><strong>Aan de voet van de boiler:</strong> het overstortventiel druppelt vaak, en een falend vat laat veel water vrij.</li>
<li><strong>Onder de wastafel, bij de douche of het bad en achter het toilet.</strong></li>
<li><strong>Bij de hoofdkraan en de watermeter</strong>, en in de kelder als u die hebt.</li>
</ul>
<p>Leg de sensor plat, met de contacten naar beneden, op het laagste punt waar water zou samenlopen. Vermijd plekken die bij normaal gebruik nat worden (douchebak, vloeren die nat worden gedweild), anders krijgt u valse meldingen.</p>

<h2>Automatische afsluiting installeren: stappen en voorzorgen</h2>
<ol>
<li><strong>Zoek uw hoofdkraan</strong> en controleer of het een kwartslagkraan is met hendel- of vlindergreep, in een compatibele diameter.</li>
<li><strong>Bedien de kraan met de hand</strong>, meerdere keren. Een vastzittende kraan laat u eerst door een loodgieter vervangen voordat er een motor op komt.</li>
<li><strong>Installeer de hub</strong> en voeg daarna sensoren en actuator toe in de app.</li>
<li><strong>Monteer de actuator</strong> op de kraan volgens de handleiding, zonder kracht op de leiding uit te oefenen.</li>
<li><strong>Maak de automatisering aan</strong>: "als een sensor water detecteert, sluit de kraan en stuur een melding".</li>
<li><strong>Controleer de werking</strong> door een sensor licht te bevochtigen met een natte doek: de kraan moet dichtgaan en de melding op uw telefoon binnenkomen.</li>
</ol>
<p>In een appartementencomplex of huurwoning werkt u alleen aan de kraan van uw eigen woning, nooit aan een gemeenschappelijke standleiding. Moet een kraan worden vervangen of de leiding worden aangepast, laat dat dan over aan een gekwalificeerde loodgieter.</p>

<h2>Fouten die u beter vermijdt</h2>
<ul>
<li><strong>Alleen op meldingen vertrouwen:</strong> zonder lokaal alarm kan een lek terwijl u slaapt onopgemerkt blijven.</li>
<li><strong>De batterijen vergeten:</strong> zet waarschuwingen voor een bijna lege batterij aan en noteer de vervangdatum.</li>
<li><strong>De sensor te ver van de bron leggen:</strong> water volgt de helling van de vloer; leg de sensor waar het zich verzamelt.</li>
<li><strong>Een motor op een vastzittende kraan zetten:</strong> die krijgt hem op het beslissende moment misschien niet dicht.</li>
<li><strong>Te veel apps gebruiken:</strong> blijf binnen één ecosysteem, zodat alle meldingen op één plek binnenkomen. Onze gids over <a href="/nl/blog/maison-connectee-matter-thread-2026">Matter en Thread</a> helpt u kiezen.</li>
</ul>

<h2>Woonverzekering: wat u moet weten</h2>
<p>Een lekdetector vervangt uw verzekering niet en ontslaat u niet van het onderhoud van uw installaties. Sommige verzekeraars waarderen preventieve voorzieningen, maar de voorwaarden verschillen per polis: vraag het rechtstreeks na bij uw eigen verzekeraar voordat u op een korting rekent. Bij schade kan de meldingsgeschiedenis in de app helpen om het begin van het lek vast te stellen.</p>

<h2>Ons oordeel</h2>
<p>Voor de overgrote meerderheid van de woningen is de beste aanpak om onder elk risicotoestel een <strong>Aqara Water Leak Sensor T1</strong> te leggen. Wilt u verder gaan, dan maakt de <strong>Aqara Valve Controller T1</strong> van dat sensornetwerk een echt systeem voor automatische afsluiting, zonder verbouwing. De <strong>Shelly Flood Gen4</strong> past bij wie geen hub wil of een hele zone met een kabel moet bewaken, en de <strong>Eve Water Guard</strong> is de logische keuze in een Apple-huis. Alle modellen vindt u op onze pagina <a href="/nl/energie-domotique/detecteurs-fuite-eau">waterlekdetectoren</a>.</p>`,
  },
  faq: [
    {
      question: {
        fr: "Un détecteur de fuite d'eau peut-il couper l'eau automatiquement ?",
        en: "Can a water leak detector shut off the water automatically?",
        de: "Kann ein Wassermelder das Wasser automatisch absperren?",
        es: "¿Puede un detector de fugas cortar el agua automáticamente?",
        it: "Un rilevatore di perdite può chiudere l'acqua automaticamente?",
        nl: "Kan een waterlekkagesensor het water automatisch afsluiten?",
      },
      answer: {
        fr: "Pas seul : un détecteur se contente d'alerter. Pour couper l'eau, il faut l'associer à une vanne motorisée. La solution la plus simple est l'Aqara Valve Controller T1, qui se fixe sur une vanne d'arrêt quart de tour existante et la ferme via une automatisation dès qu'un capteur Aqara détecte de l'eau. Les dispositifs intégrés à la canalisation principale existent aussi, mais demandent une pose par un plombier.",
        en: "Not on its own: a detector only raises the alarm. To shut off the water, it has to be paired with a motorised valve. The simplest option is the Aqara Valve Controller T1, which clamps onto an existing quarter-turn stop valve and closes it through an automation as soon as an Aqara sensor detects water. Devices built into the main supply pipe also exist, but they must be fitted by a plumber.",
        de: "Allein nicht: Ein Melder schlägt nur Alarm. Zum Absperren braucht es ein motorisiertes Ventil. Am einfachsten ist der Aqara Valve Controller T1, der auf ein vorhandenes Vierteldrehungs-Absperrventil gesetzt wird und es per Automation schließt, sobald ein Aqara-Sensor Wasser erkennt. Es gibt auch Geräte für die Hauptleitung, die aber ein Installateur einbauen muss.",
        es: "Por sí solo, no: un detector solo avisa. Para cortar el agua hay que combinarlo con una válvula motorizada. La opción más sencilla es el Aqara Valve Controller T1, que se acopla a una llave de paso de cuarto de vuelta existente y la cierra mediante una automatización en cuanto un sensor Aqara detecta agua. También existen dispositivos integrados en la tubería principal, pero los debe instalar un fontanero.",
        it: "Da solo no: un rilevatore si limita a dare l'allarme. Per chiudere l'acqua serve una valvola motorizzata. La soluzione più semplice è l'Aqara Valve Controller T1, che si fissa su una valvola di arresto a quarto di giro esistente e la chiude tramite un'automazione appena un sensore Aqara rileva acqua. Esistono anche dispositivi integrati nella tubazione principale, ma vanno installati da un idraulico.",
        nl: "Niet op zichzelf: een sensor geeft alleen alarm. Om het water af te sluiten is een gemotoriseerde kraan nodig. De eenvoudigste oplossing is de Aqara Valve Controller T1, die op een bestaande kwartslagkraan wordt gezet en die via een automatisering dichtdraait zodra een Aqara-sensor water detecteert. Er bestaan ook apparaten voor in de hoofdleiding, maar die moet een loodgieter plaatsen.",
      },
    },
    {
      question: {
        fr: "Faut-il un hub pour un détecteur de fuite d'eau connecté ?",
        en: "Do I need a hub for a smart water leak detector?",
        de: "Braucht ein smarter Wassermelder einen Hub?",
        es: "¿Hace falta un hub para un detector de fugas inteligente?",
        it: "Serve un hub per un rilevatore di perdite smart?",
        nl: "Heb ik een hub nodig voor een slimme waterlekkagesensor?",
      },
      answer: {
        fr: "Cela dépend du protocole. Les capteurs Zigbee comme l'Aqara Water Leak Sensor T1 exigent un hub Aqara ou une passerelle Zigbee. Le Shelly Flood Gen4 peut fonctionner directement en Wi-Fi, sans hub. L'Eve Water Guard fonctionne en local, mais les alertes à distance passent par un concentrateur Apple (HomePod mini, HomePod ou Apple TV compatible).",
        en: "It depends on the protocol. Zigbee sensors such as the Aqara Water Leak Sensor T1 need an Aqara hub or a Zigbee gateway. The Shelly Flood Gen4 can work directly over Wi-Fi with no hub. The Eve Water Guard works locally, but remote alerts go through an Apple home hub (HomePod mini, HomePod or a compatible Apple TV).",
        de: "Das hängt vom Funkstandard ab. Zigbee-Sensoren wie der Aqara Water Leak Sensor T1 brauchen einen Aqara-Hub oder ein Zigbee-Gateway. Der Shelly Flood Gen4 funktioniert direkt im WLAN ohne Hub. Der Eve Water Guard arbeitet lokal, Benachrichtigungen unterwegs laufen aber über eine Apple-Steuerzentrale (HomePod mini, HomePod oder kompatibles Apple TV).",
        es: "Depende del protocolo. Los sensores Zigbee como el Aqara Water Leak Sensor T1 necesitan un hub Aqara o una pasarela Zigbee. El Shelly Flood Gen4 puede funcionar directamente por Wi-Fi, sin hub. El Eve Water Guard funciona en local, pero las alertas a distancia pasan por un concentrador de Apple (HomePod mini, HomePod o Apple TV compatible).",
        it: "Dipende dal protocollo. I sensori Zigbee come l'Aqara Water Leak Sensor T1 richiedono un hub Aqara o un gateway Zigbee. Lo Shelly Flood Gen4 può funzionare direttamente in Wi-Fi, senza hub. L'Eve Water Guard funziona in locale, ma gli avvisi a distanza passano da un hub domestico Apple (HomePod mini, HomePod o Apple TV compatibile).",
        nl: "Dat hangt af van het protocol. Zigbee-sensoren zoals de Aqara Water Leak Sensor T1 hebben een Aqara-hub of Zigbee-gateway nodig. De Shelly Flood Gen4 kan rechtstreeks via wifi werken, zonder hub. De Eve Water Guard werkt lokaal, maar meldingen op afstand lopen via een Apple-woninghub (HomePod mini, HomePod of compatibele Apple TV).",
      },
    },
    {
      question: {
        fr: "Combien de capteurs faut-il pour un appartement ?",
        en: "How many sensors does a flat need?",
        de: "Wie viele Sensoren braucht eine Wohnung?",
        es: "¿Cuántos sensores necesita un piso?",
        it: "Quanti sensori servono per un appartamento?",
        nl: "Hoeveel sensoren heeft een appartement nodig?",
      },
      answer: {
        fr: "Comptez un capteur par point à risque : lave-linge, lave-vaisselle, évier de cuisine, chauffe-eau, lavabo, douche ou baignoire et WC. Dans un appartement classique, cela représente souvent cinq à huit capteurs. Un modèle à câble comme le Shelly Flood Gen4 ou l'Eve Water Guard peut couvrir plusieurs appareils alignés avec un seul boîtier.",
        en: "Plan one sensor per risk point: washing machine, dishwasher, kitchen sink, water heater, washbasin, shower or bath, and toilet. In a typical flat that often means five to eight sensors. A cable model such as the Shelly Flood Gen4 or Eve Water Guard can cover several appliances in a row with a single unit.",
        de: "Rechnen Sie mit einem Sensor pro Risikostelle: Waschmaschine, Spülmaschine, Küchenspüle, Warmwasserspeicher, Waschbecken, Dusche oder Badewanne und WC. In einer typischen Wohnung sind das oft fünf bis acht Sensoren. Ein Kabelmodell wie der Shelly Flood Gen4 oder der Eve Water Guard kann mehrere nebeneinanderstehende Geräte mit einem einzigen Gerät abdecken.",
        es: "Cuente un sensor por punto de riesgo: lavadora, lavavajillas, fregadero, termo, lavabo, ducha o bañera e inodoro. En un piso típico suelen ser entre cinco y ocho sensores. Un modelo con cable como el Shelly Flood Gen4 o el Eve Water Guard puede cubrir varios aparatos alineados con un solo dispositivo.",
        it: "Calcolate un sensore per ogni punto a rischio: lavatrice, lavastoviglie, lavello, scaldabagno, lavabo, doccia o vasca e WC. In un appartamento tipico si arriva spesso a cinque-otto sensori. Un modello a cavo come lo Shelly Flood Gen4 o l'Eve Water Guard può coprire più elettrodomestici allineati con un solo dispositivo.",
        nl: "Reken op één sensor per risicopunt: wasmachine, vaatwasser, gootsteen, boiler, wastafel, douche of bad en toilet. In een gemiddeld appartement komt dat vaak neer op vijf tot acht sensoren. Een kabelmodel zoals de Shelly Flood Gen4 of de Eve Water Guard kan met één apparaat meerdere toestellen op een rij bewaken.",
      },
    },
    {
      question: {
        fr: "Le Grohe Sense Guard est-il encore une bonne option ?",
        en: "Is the Grohe Sense Guard still a good option?",
        de: "Ist der Grohe Sense Guard noch eine gute Option?",
        es: "¿Sigue siendo el Grohe Sense Guard una buena opción?",
        it: "Il Grohe Sense Guard è ancora una buona scelta?",
        nl: "Is de Grohe Sense Guard nog een goede keuze?",
      },
      answer: {
        fr: "Le Grohe Sense Guard n'est plus fabriqué. Même si l'on trouve encore quelques stocks, mieux vaut choisir une solution toujours commercialisée et suivie par son fabricant. Pour une coupure automatique sans travaux, l'Aqara Valve Controller T1 associé à des capteurs Aqara est l'alternative la plus accessible ; pour un dispositif monté sur la canalisation principale, demandez conseil à un plombier.",
        en: "The Grohe Sense Guard is no longer manufactured. Even though some stock can still be found, it is better to choose a product that is still on sale and supported by its maker. For automatic shut-off without building work, the Aqara Valve Controller T1 paired with Aqara sensors is the most accessible alternative; for a device fitted on the main supply, ask a plumber for advice.",
        de: "Der Grohe Sense Guard wird nicht mehr hergestellt. Auch wenn noch Restbestände auftauchen, ist ein Produkt besser, das weiterhin verkauft und vom Hersteller gepflegt wird. Für eine automatische Absperrung ohne Umbau ist der Aqara Valve Controller T1 mit Aqara-Sensoren die zugänglichste Alternative; für eine Einrichtung in der Hauptleitung lassen Sie sich von einem Installateur beraten.",
        es: "El Grohe Sense Guard ya no se fabrica. Aunque todavía se encuentren algunas existencias, es preferible elegir un producto que siga a la venta y con soporte del fabricante. Para un corte automático sin obras, el Aqara Valve Controller T1 con sensores Aqara es la alternativa más accesible; para un dispositivo en la tubería principal, pida consejo a un fontanero.",
        it: "Il Grohe Sense Guard non è più prodotto. Anche se se ne trovano ancora alcune scorte, è meglio scegliere un prodotto ancora in commercio e supportato dal produttore. Per una chiusura automatica senza lavori, l'Aqara Valve Controller T1 abbinato a sensori Aqara è l'alternativa più accessibile; per un dispositivo sulla tubazione principale, chiedete consiglio a un idraulico.",
        nl: "De Grohe Sense Guard wordt niet meer geproduceerd. Ook al zijn er nog restvoorraden, kies liever een product dat nog verkocht en door de fabrikant ondersteund wordt. Voor automatische afsluiting zonder verbouwing is de Aqara Valve Controller T1 met Aqara-sensoren het meest toegankelijke alternatief; voor een apparaat op de hoofdleiding vraagt u advies aan een loodgieter.",
      },
    },
    {
      question: {
        fr: "Que se passe-t-il en cas de coupure internet ?",
        en: "What happens if the internet goes down?",
        de: "Was passiert bei einem Internetausfall?",
        es: "¿Qué ocurre si se cae internet?",
        it: "Cosa succede se internet non funziona?",
        nl: "Wat gebeurt er als het internet uitvalt?",
      },
      answer: {
        fr: "Vous ne recevrez plus de notification à distance, mais l'alarme locale reste votre filet de sécurité : buzzer intégré sur le Shelly Flood Gen4, sirène de 100 dB sur l'Eve Water Guard, alarme du hub pour les capteurs Aqara. Les automatisations exécutées localement par le hub, comme la fermeture d'une vanne, peuvent continuer à fonctionner selon la configuration.",
        en: "You will no longer receive remote notifications, but the local alarm remains your safety net: the built-in buzzer on the Shelly Flood Gen4, the 100 dB siren on the Eve Water Guard, or the hub alarm for Aqara sensors. Automations that the hub runs locally, such as closing a valve, can keep working depending on your setup.",
        de: "Benachrichtigungen unterwegs kommen dann nicht mehr an, aber der lokale Alarm bleibt Ihr Sicherheitsnetz: der eingebaute Summer des Shelly Flood Gen4, die 100-dB-Sirene des Eve Water Guard oder der Hub-Alarm bei Aqara-Sensoren. Automationen, die der Hub lokal ausführt, etwa das Schließen eines Ventils, können je nach Konfiguration weiterlaufen.",
        es: "Dejará de recibir notificaciones a distancia, pero la alarma local sigue siendo su red de seguridad: el zumbador integrado del Shelly Flood Gen4, la sirena de 100 dB del Eve Water Guard o la alarma del hub para los sensores Aqara. Las automatizaciones que el hub ejecuta en local, como cerrar una llave, pueden seguir funcionando según la configuración.",
        it: "Non riceverete più notifiche a distanza, ma l'allarme locale resta la vostra rete di sicurezza: il cicalino integrato dello Shelly Flood Gen4, la sirena da 100 dB dell'Eve Water Guard o l'allarme dell'hub per i sensori Aqara. Le automazioni eseguite in locale dall'hub, come la chiusura di una valvola, possono continuare a funzionare a seconda della configurazione.",
        nl: "U ontvangt dan geen meldingen op afstand meer, maar het lokale alarm blijft uw vangnet: de ingebouwde zoemer van de Shelly Flood Gen4, de sirene van 100 dB van de Eve Water Guard of het hub-alarm bij Aqara-sensoren. Automatiseringen die de hub lokaal uitvoert, zoals het sluiten van een kraan, kunnen afhankelijk van de configuratie blijven werken.",
      },
    },
    {
      question: {
        fr: "Peut-on installer une coupure automatique en location ?",
        en: "Can tenants install automatic shut-off?",
        de: "Können Mieter eine automatische Absperrung installieren?",
        es: "¿Se puede instalar un corte automático en un piso de alquiler?",
        it: "Si può installare una chiusura automatica in affitto?",
        nl: "Kunnen huurders een automatische afsluiting plaatsen?",
      },
      answer: {
        fr: "Les capteurs posés au sol ne posent aucun problème. Un actionneur comme l'Aqara Valve Controller T1 se fixe sur la vanne existante sans modifier la tuyauterie et se retire facilement, mais il est préférable d'en informer votre propriétaire. N'intervenez jamais sur une vanne ou une colonne commune de l'immeuble, et faites appel à un plombier si la vanne doit être remplacée.",
        en: "Floor sensors are no problem at all. An actuator such as the Aqara Valve Controller T1 clamps onto the existing valve without changing the pipework and is easy to remove, but it is best to let your landlord know. Never touch a valve or riser shared by the building, and call a plumber if the valve needs replacing.",
        de: "Bodensensoren sind völlig unproblematisch. Ein Stellantrieb wie der Aqara Valve Controller T1 wird auf das vorhandene Ventil gesetzt, ohne die Leitung zu verändern, und lässt sich leicht wieder abnehmen; informieren Sie dennoch am besten Ihren Vermieter. Arbeiten Sie nie an Ventilen oder Steigsträngen des Gebäudes und rufen Sie einen Installateur, wenn das Ventil ersetzt werden muss.",
        es: "Los sensores de suelo no plantean ningún problema. Un actuador como el Aqara Valve Controller T1 se acopla a la llave existente sin modificar la instalación y se retira con facilidad, pero conviene informar al propietario. No toque nunca una llave o un montante comunitario, y llame a un fontanero si hay que sustituir la llave.",
        it: "I sensori a pavimento non pongono alcun problema. Un attuatore come l'Aqara Valve Controller T1 si fissa sulla valvola esistente senza modificare le tubazioni e si rimuove facilmente, ma è preferibile informare il proprietario. Non intervenite mai su valvole o colonne condominiali, e chiamate un idraulico se la valvola va sostituita.",
        nl: "Vloersensoren zijn geen enkel probleem. Een actuator zoals de Aqara Valve Controller T1 wordt op de bestaande kraan gezet zonder de leidingen aan te passen en is eenvoudig te verwijderen, maar laat het uw verhuurder wel weten. Kom nooit aan een kraan of standleiding van het gebouw, en schakel een loodgieter in als de kraan vervangen moet worden.",
      },
    },
  ],
}
