import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'guide-domotique-economie-energie-2026',
  category: 'guides',
  pillar: 'energie-domotique',
  relatedSlugs: ['thermostat-connecte-pompe-chaleur', 'comparatif-smart-plugs-mesure-energie', 'compteur-energie-connecte-comparatif'],
  datePublished: '2026-04-16',
  dateModified: '2026-10-09',
  readingTime: 8,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Enceinte connectée et serrure connectée posées sur un meuble blanc, exemples d’équipements domotiques',
        en: 'Smart speaker and smart lock on a white cabinet, examples of smart home devices',
        de: 'Smarter Lautsprecher und smartes Türschloss auf einem weißen Möbelstück, Beispiele für Smart-Home-Geräte',
        es: 'Altavoz inteligente y cerradura conectada sobre un mueble blanco, ejemplos de dispositivos domóticos',
        it: 'Altoparlante smart e serratura connessa su un mobile bianco, esempi di dispositivi domotici',
        nl: 'Slimme speaker en slim slot op een witte kast, voorbeelden van smart-homeapparaten',
      },
    },
  ],
  title: {
    fr: 'Domotique et économie d’énergie 2026 : le guide pour réduire sa consommation',
    en: 'Smart Home Energy Saving Guide 2026: Where Automation Really Cuts Consumption',
    de: 'Smart Home und Energiesparen 2026: Ratgeber für weniger Verbrauch',
    es: 'Domótica y ahorro energético 2026: guía para reducir el consumo',
    it: 'Domotica e risparmio energetico 2026: guida per ridurre i consumi',
    nl: 'Domotica en energiebesparing 2026: gids om minder te verbruiken',
  },
  excerpt: {
    fr: 'Chauffage piloté, mesure de la consommation, prises connectées, détection de présence : ce qui fait vraiment baisser les kWh, les équipements à privilégier (tado X, Netatmo, Shelly, Tapo, Aqara) et les erreurs à éviter.',
    en: 'Smart heating control, energy monitoring, smart plugs and presence detection: what really reduces your kWh, which devices to choose (tado X, Netatmo, Shelly, Tapo, Aqara) and the mistakes to avoid.',
    de: 'Smarte Heizungssteuerung, Verbrauchsmessung, smarte Steckdosen und Präsenzerkennung: was die kWh wirklich senkt, welche Geräte sich eignen (tado X, Netatmo, Shelly, Tapo, Aqara) und welche Fehler Sie vermeiden sollten.',
    es: 'Control de la calefacción, medición del consumo, enchufes inteligentes y detección de presencia: qué reduce de verdad los kWh, qué equipos elegir (tado X, Netatmo, Shelly, Tapo, Aqara) y qué errores evitar.',
    it: 'Gestione smart del riscaldamento, misura dei consumi, prese intelligenti e rilevamento di presenza: cosa riduce davvero i kWh, quali dispositivi scegliere (tado X, Netatmo, Shelly, Tapo, Aqara) e gli errori da evitare.',
    nl: 'Slimme verwarmingsregeling, verbruiksmeting, slimme stekkers en aanwezigheidsdetectie: wat echt kWh bespaart, welke apparaten u kiest (tado X, Netatmo, Shelly, Tapo, Aqara) en welke fouten u vermijdt.',
  },
  content: {
    fr: `<p>La domotique fait vraiment baisser la consommation d’un logement quand elle s’attaque d’abord au chauffage : un thermostat connecté ou des têtes thermostatiques pilotées pièce par pièce, comme le <strong>tado X</strong>, agissent sur le premier poste de dépense. Viennent ensuite la mesure (prises et compteurs connectés) pour repérer les gaspillages, puis quelques automatisations simples ; les gadgets qui ne pilotent ni chauffage ni appareils gourmands n’économisent presque rien.</p>
<p>Ce guide ne repose pas sur des essais maison : il compare les équipements à partir des fiches techniques des fabricants, de revues indépendantes et des retours d’acheteurs vérifiés. Les chiffres d’économie dépendent toujours de votre logement, de son isolation, de votre mode de chauffage et de vos habitudes ; nous les présentons comme des ordres de grandeur, jamais comme des promesses.</p>

<h2>Où part l’énergie d’un logement</h2>
<p>Selon Eurostat, le chauffage des pièces représente environ les deux tiers de l’énergie finale consommée par les ménages de l’Union européenne. L’eau chaude sanitaire arrive loin derrière, suivie de l’éclairage et des appareils électriques. Cette répartition donne l’ordre des priorités : un équipement qui régule mieux le chauffage aura presque toujours plus d’effet qu’une ampoule connectée.</p>
<p>L’ADEME rappelle qu’abaisser la consigne de chauffage de 1 °C réduit la consommation de chauffage d’environ 7 %. C’est exactement ce que fait un bon thermostat connecté : il baisse la température quand personne n’est là, la nuit ou dans les pièces inoccupées, sans que vous ayez à y penser. Les appareils en veille, eux, consomment peu individuellement mais en continu, d’où l’intérêt de les mesurer avant de les couper.</p>

<h2>Les critères de choix</h2>
<h3>Compatibilité avec votre chauffage</h3>
<p>C’est le premier point à vérifier. Un thermostat filaire se raccorde à une chaudière ou à une pompe à chaleur (contact sec marche/arrêt ou protocole de modulation selon les modèles) ; des têtes thermostatiques connectées se vissent sur les robinets des radiateurs à eau ; les radiateurs électriques se pilotent plutôt par fil pilote ou par des modèles connectés. Consultez l’outil de compatibilité du fabricant avant d’acheter.</p>
<h3>Protocole : Matter, Thread, Wi-Fi ou Zigbee</h3>
<p>Matter permet de faire fonctionner ensemble des appareils de marques différentes dans Apple Maison, Google Home, Amazon Alexa ou SmartThings. Thread est un réseau maillé basse consommation, adapté aux appareils sur batterie. Le Wi-Fi évite un pont mais charge le réseau domestique quand les appareils se multiplient. Pour aller plus loin, notre <a href="/fr/blog/maison-connectee-matter-thread-2026">guide Matter et Thread</a> détaille ces choix.</p>
<h3>Mesure de la consommation</h3>
<p>Une prise qui mesure la puissance instantanée et cumule les kWh vous dit combien coûte réellement un appareil. Un compteur installé dans le tableau électrique donne la vue d’ensemble du logement, y compris la production solaire éventuelle.</p>
<h3>Contrôle local et abonnement</h3>
<p>Vérifiez si les automatisations fonctionnent sans le cloud du fabricant et si certaines fonctions sont réservées à un abonnement. C’est un critère de fiabilité autant que de coût sur la durée.</p>

<h2>Les équipements à privilégier en 2026</h2>
<h3>tado Smart Radiator Thermostat X Starter Kit : le meilleur choix global</h3>
<p>Le kit de démarrage tado X associe une tête thermostatique connectée et le Bridge X, qui sert de routeur de bordure Thread. La tête est compatible Matter, s’adapte à la plupart des robinets de radiateur grâce aux adaptateurs fournis et fonctionne sur batterie rechargeable. L’ensemble se pilote depuis l’application tado ou depuis Apple Maison, Google Home et Alexa.</p>
<p><strong>Points forts :</strong> régulation pièce par pièce, installation sans outil sur les radiateurs à eau, écosystème complet (thermostat filaire, capteurs, têtes supplémentaires). <strong>Limites :</strong> la gamme X n’est pas compatible avec les anciens produits tado V3+, et certaines automatisations avancées, comme le géorepérage automatique, relèvent de l’abonnement optionnel Auto-Assist. <strong>Pour qui :</strong> les logements chauffés par radiateurs à eau qui veulent couper le chauffage dans les pièces vides.</p>
<h3>Netatmo Thermostat Intelligent : la valeur sûre pour une chaudière</h3>
<p>Le thermostat Netatmo remplace un thermostat d’ambiance classique et commande la chaudière via un relais. Sa fonction Auto-Adapt anticipe le démarrage du chauffage en tenant compte de l’isolation du logement et de la température extérieure, et l’application envoie un bilan mensuel de consommation. Il est compatible Apple HomeKit, Alexa et Google Assistant.</p>
<p><strong>Points forts :</strong> réglages simples, rapports réguliers, design discret. <strong>Limites :</strong> une seule zone de chauffage sans vannes supplémentaires, et une régulation marche/arrêt qui ne convient pas à toutes les pompes à chaleur. <strong>Pour qui :</strong> les maisons et appartements équipés d’une chaudière individuelle avec un thermostat central.</p>
<h3>TP-Link Tapo P110M : la prise de mesure la plus accessible</h3>
<p>La Tapo P110M est une prise Wi-Fi certifiée Matter qui mesure la consommation de l’appareil branché. L’application affiche l’historique en kWh et permet d’entrer le prix de votre kWh pour estimer le coût. Elle fonctionne avec Apple Maison, Alexa, Google Home et SmartThings, et son format compact libère la prise voisine.</p>
<p><strong>Points forts :</strong> Matter natif, mise en service rapide, idéale pour faire l’inventaire des appareils gourmands. <strong>Limites :</strong> Wi-Fi 2,4 GHz uniquement, fonctions avancées limitées par rapport à Shelly. <strong>Pour qui :</strong> ceux qui veulent mesurer plusieurs appareils sans dépenser beaucoup.</p>
<h3>Shelly Plug S Gen3 : la prise des utilisateurs avancés</h3>
<p>La Shelly Plug S Gen3 mesure la puissance, supporte des charges jusqu’à 2 500 W, est certifiée Matter et fonctionne sans pont. Elle se distingue par son API locale et son intégration très appréciée dans Home Assistant, ce qui permet de déclencher des automatisations sur un seuil de puissance (par exemple prévenir quand le lave-linge a terminé).</p>
<p><strong>Points forts :</strong> contrôle local, nombreuses options d’automatisation, fonction de répéteur Wi-Fi. <strong>Limites :</strong> réglages plus techniques, et la limite de 2 500 W exclut les gros radiateurs d’appoint. Vérifiez aussi le format de prise vendu pour votre pays. <strong>Pour qui :</strong> les utilisateurs de Home Assistant et ceux qui veulent des automatisations fines.</p>
<h3>Shelly Pro 3EM : la vision de toute la maison</h3>
<p>Le Shelly Pro 3EM est un compteur d’énergie sur rail DIN, avec pinces ampèremétriques, qui mesure en monophasé comme en triphasé. Il mesure dans les deux sens, consommation et production, ce qui le rend utile avec des panneaux solaires. Il existe en versions 120 A et 400 A, avec une précision annoncée de 1 %, et fonctionne en Wi-Fi ou en Ethernet, localement ou via le cloud.</p>
<p><strong>Points forts :</strong> vue complète du logement, suivi de l’autoconsommation solaire, historique stocké dans l’appareil. <strong>Limites :</strong> installation dans le tableau électrique, à confier à un électricien qualifié. <strong>Pour qui :</strong> les foyers équipés de solaire, d’une pompe à chaleur ou d’une borne de recharge. Notre <a href="/fr/blog/compteur-energie-connecte-comparatif">comparatif des compteurs d’énergie connectés</a> présente aussi les solutions sans travaux.</p>
<h3>Aqara Presence Sensor FP2 : chauffer et éclairer seulement les pièces occupées</h3>
<p>Le FP2 utilise un radar à ondes millimétriques qui détecte une présence même immobile, contrairement aux détecteurs infrarouges classiques. Il couvre jusqu’à 40 m², peut découper une pièce en 30 zones, suit plusieurs personnes et fonctionne en Wi-Fi 2,4 GHz sans hub Aqara, avec Apple Maison, Alexa, Google Home et Home Assistant.</p>
<p><strong>Points forts :</strong> détection fiable d’une personne qui lit ou travaille, zones personnalisables. <strong>Limites :</strong> alimentation par câble USB, réglage des zones à soigner. <strong>Pour qui :</strong> ceux qui veulent couper lumière et chauffage dans les pièces réellement vides.</p>

<h2>Tableau comparatif</h2>
<table>
<thead>
<tr><th>Équipement</th><th>Rôle</th><th>Connectivité</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td>tado Smart Radiator Thermostat X Starter Kit</td><td>Régulation pièce par pièce</td><td>Thread, Matter (Bridge X)</td><td>Radiateurs à eau</td></tr>
<tr><td>Netatmo Thermostat Intelligent</td><td>Thermostat de chaudière</td><td>Wi-Fi, HomeKit</td><td>Chaudière individuelle</td></tr>
<tr><td>TP-Link Tapo P110M</td><td>Mesure par appareil</td><td>Wi-Fi, Matter</td><td>Inventaire des consommations</td></tr>
<tr><td>Shelly Plug S Gen3</td><td>Mesure et automatisation</td><td>Wi-Fi, Matter, Bluetooth</td><td>Home Assistant</td></tr>
<tr><td>Shelly Pro 3EM</td><td>Compteur de tout le logement</td><td>Wi-Fi, Ethernet</td><td>Solaire, pompe à chaleur</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Détection de présence</td><td>Wi-Fi 2,4 GHz</td><td>Pièces occupées par intermittence</td></tr>
</tbody>
</table>
<p>Retrouvez toute la sélection de <a href="/fr/energie-domotique/thermostats">thermostats connectés</a> et de <a href="/fr/energie-domotique/compteurs-energie">compteurs d’énergie</a> dans notre catalogue.</p>

<h2>Un exemple de calcul en kWh</h2>
<p>Un appareil qui consomme 10 W en permanence, comme un décodeur ou une enceinte laissés en veille, utilise 10 W × 8 760 heures, soit environ 88 kWh par an. Au tarif d’exemple de 0,25 euro par kWh (à remplacer par le prix de votre contrat), cela représente environ 22 euros par an pour un seul appareil. Une prise connectée qui coupe ces appareils la nuit et pendant vos absences en supprime une bonne partie.</p>
<p>Le même raisonnement vaut pour le chauffage : si votre logement consomme 10 000 kWh par an pour se chauffer, réduire la température moyenne de 1 °C correspond, selon le repère de l’ADEME, à environ 700 kWh de moins. Une régulation qui baisse la consigne dans les pièces vides et la nuit agit précisément sur ce levier.</p>

<h2>Les automatisations qui économisent vraiment</h2>
<ul>
<li><strong>Programme de nuit et d’absence :</strong> baisser la consigne de chauffage la nuit et en journée quand le logement est vide.</li>
<li><strong>Détection de fenêtre ouverte :</strong> couper le radiateur quand une fenêtre est ouverte pour aérer.</li>
<li><strong>Extinction groupée :</strong> une routine « Je pars » qui coupe lumières et prises des appareils en veille.</li>
<li><strong>Présence pièce par pièce :</strong> éteindre lumières et chauffage d’appoint quand le capteur ne détecte plus personne.</li>
<li><strong>Solaire :</strong> lancer un appareil programmable quand la production dépasse la consommation, si vous avez des <a href="/fr/blog/balkonkraftwerk-panneau-solaire-balcon">panneaux solaires de balcon</a> ou en toiture.</li>
</ul>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Commencer par l’éclairage :</strong> les LED consomment déjà peu ; le gain se trouve d’abord dans le chauffage.</li>
<li><strong>Acheter sans vérifier la compatibilité :</strong> chaudière, pompe à chaleur, robinets de radiateur et format de prise doivent correspondre.</li>
<li><strong>Brancher un radiateur d’appoint sur une petite prise connectée :</strong> respectez la puissance maximale indiquée par le fabricant.</li>
<li><strong>Multiplier les applications :</strong> privilégiez Matter ou un hub central pour tout gérer au même endroit.</li>
<li><strong>Croire aux économies garanties :</strong> les pourcentages annoncés dépendent du logement ; mesurez avant et après.</li>
</ul>

<h2>Installation et sécurité</h2>
<p>Les prises connectées et les têtes thermostatiques s’installent sans outil. En revanche, un thermostat filaire raccordé à la chaudière et un compteur placé dans le tableau électrique impliquent d’intervenir sur une installation électrique : coupez l’alimentation et, en cas de doute, faites appel à un électricien qualifié. Ne branchez jamais un appareil dont la puissance dépasse celle supportée par la prise connectée, et évitez les multiprises en cascade.</p>

<h2>Notre verdict</h2>
<p>Pour la plupart des logements chauffés par radiateurs à eau, le <strong>tado Smart Radiator Thermostat X Starter Kit</strong> est le point de départ le plus efficace, car il agit sur le premier poste de consommation. Avec une chaudière et un seul thermostat central, le <strong>Netatmo Thermostat Intelligent</strong> reste un choix simple et fiable. Pour mesurer à petit budget, la <strong>Tapo P110M</strong> est la plus accessible, la <strong>Shelly Plug S Gen3</strong> la plus souple, et le <strong>Shelly Pro 3EM</strong> donne la vue complète du logement, surtout avec du solaire. Pour approfondir le chauffage, lisez notre guide <a href="/fr/blog/thermostat-connecte-pompe-chaleur">thermostat connecté et pompe à chaleur</a>.</p>`,

    en: `<p>A smart home genuinely cuts energy use when it tackles heating first: a smart thermostat or room-by-room smart radiator valves such as the <strong>tado X</strong> act on the biggest item in the bill. Next comes measurement (smart plugs and energy monitors) to find waste, then a few simple automations; gadgets that control neither heating nor power-hungry appliances save almost nothing.</p>
<p>This guide is not based on in-house trials: it compares devices using manufacturer specifications, independent reviews and verified buyer feedback. Savings always depend on your home, its insulation, your heating system and your habits, so the figures below are orders of magnitude, never promises.</p>

<h2>Where a home’s energy goes</h2>
<p>According to Eurostat, space heating accounts for roughly two-thirds of the final energy used by households in the European Union. Hot water comes a long way behind, followed by lighting and appliances. That split sets the priorities: a device that controls heating better will almost always do more than a smart bulb.</p>
<p>The French energy agency ADEME estimates that lowering your heating setpoint by 1 °C cuts heating consumption by about 7%. That is exactly what a good smart thermostat does: it lowers the temperature when nobody is home, at night or in empty rooms, without you having to think about it. Devices on standby use little power individually but they draw it around the clock, which is why it pays to measure them before switching them off.</p>

<h2>How to choose</h2>
<h3>Compatibility with your heating</h3>
<p>Check this first. A wired thermostat connects to a boiler or heat pump (on/off dry contact or a modulating protocol depending on the model); smart radiator valves screw onto the valves of wet radiators; electric heaters are usually controlled by pilot wire or are smart models themselves. Use the manufacturer’s compatibility checker before you buy.</p>
<h3>Protocol: Matter, Thread, Wi-Fi or Zigbee</h3>
<p>Matter lets devices from different brands work together in Apple Home, Google Home, Amazon Alexa or SmartThings. Thread is a low-power mesh network suited to battery devices. Wi-Fi needs no bridge but loads your home network as devices multiply. Our <a href="/en/blog/maison-connectee-matter-thread-2026">Matter and Thread guide</a> explains these choices in detail.</p>
<h3>Energy measurement</h3>
<p>A plug that measures instantaneous power and totals the kWh tells you what an appliance really costs to run. A monitor installed in the consumer unit gives the whole-home picture, including any solar production.</p>
<h3>Local control and subscriptions</h3>
<p>Check whether automations run without the manufacturer’s cloud and whether some features require a subscription. It matters for reliability as much as for long-term cost.</p>

<h2>The devices to prioritise in 2026</h2>
<h3>tado Smart Radiator Thermostat X Starter Kit: best overall</h3>
<p>The tado X starter kit pairs a smart radiator thermostat with the Bridge X, which acts as a Thread border router. The thermostat is Matter compatible, fits most radiator valves thanks to the supplied adapters and runs on a rechargeable battery. Everything can be controlled from the tado app or from Apple Home, Google Home and Alexa.</p>
<p><strong>Strengths:</strong> room-by-room control, tool-free fitting on wet radiators, a complete ecosystem (wired thermostat, sensors, extra valves). <strong>Limits:</strong> the X range is not compatible with older tado V3+ products, and some advanced automations, such as automatic geofencing, are part of the optional Auto-Assist subscription. <strong>Who it’s for:</strong> homes with wet radiators that want to stop heating empty rooms.</p>
<h3>Netatmo Smart Thermostat: the safe choice for a boiler</h3>
<p>The Netatmo thermostat replaces a standard room thermostat and switches the boiler through a relay. Its Auto-Adapt feature anticipates when to start heating based on your home’s insulation and the outdoor temperature, and the app sends a monthly energy report. It works with Apple HomeKit, Alexa and Google Assistant.</p>
<p><strong>Strengths:</strong> simple settings, regular reports, discreet design. <strong>Limits:</strong> a single heating zone unless you add smart valves, and on/off control that does not suit every heat pump. <strong>Who it’s for:</strong> houses and flats with an individual boiler and one central thermostat.</p>
<h3>TP-Link Tapo P110M: the most accessible metering plug</h3>
<p>The Tapo P110M is a Matter-certified Wi-Fi plug that measures the consumption of whatever is plugged into it. The app shows kWh history and lets you enter your electricity rate to estimate cost. It works with Apple Home, Alexa, Google Home and SmartThings, and its compact shape leaves the neighbouring socket free.</p>
<p><strong>Strengths:</strong> native Matter, quick setup, ideal for auditing power-hungry appliances. <strong>Limits:</strong> 2.4 GHz Wi-Fi only, fewer advanced features than Shelly. <strong>Who it’s for:</strong> anyone who wants to measure several appliances on a modest budget.</p>
<h3>Shelly Plug S Gen3: the plug for advanced users</h3>
<p>The Shelly Plug S Gen3 meters power, handles loads up to 2,500 W, is Matter certified and needs no hub. It stands out for its local API and its popular Home Assistant integration, which lets you trigger automations on a power threshold (for example, a notification when the washing machine has finished).</p>
<p><strong>Strengths:</strong> local control, many automation options, Wi-Fi range extender function. <strong>Limits:</strong> more technical settings, and the 2,500 W limit rules out large portable heaters. Check the plug format sold for your country too. <strong>Who it’s for:</strong> Home Assistant users and anyone who wants fine-grained automations.</p>
<h3>Shelly Pro 3EM: the whole-home view</h3>
<p>The Shelly Pro 3EM is a DIN-rail energy meter with current clamps that works on single-phase and three-phase supplies. It measures in both directions, consumption and production, which makes it useful with solar panels. It comes in 120 A and 400 A versions, with a stated accuracy of 1%, and connects over Wi-Fi or Ethernet, locally or through the cloud.</p>
<p><strong>Strengths:</strong> complete view of the home, solar self-consumption tracking, history stored on the device. <strong>Limits:</strong> installed in the consumer unit, a job for a qualified electrician. <strong>Who it’s for:</strong> homes with solar panels, a heat pump or an EV charger. Our <a href="/en/blog/compteur-energie-connecte-comparatif">home energy monitor comparison</a> also covers options that need no wiring work.</p>
<h3>Aqara Presence Sensor FP2: heat and light only occupied rooms</h3>
<p>The FP2 uses millimetre-wave radar that detects people even when they are still, unlike classic infrared motion sensors. It covers up to 40 m², can split a room into 30 zones, tracks several people and runs on 2.4 GHz Wi-Fi without an Aqara hub, with Apple Home, Alexa, Google Home and Home Assistant.</p>
<p><strong>Strengths:</strong> reliable detection of someone reading or working, customisable zones. <strong>Limits:</strong> USB cable power, zone setup takes some care. <strong>Who it’s for:</strong> anyone who wants lights and heating off in rooms that are genuinely empty.</p>

<h2>Comparison table</h2>
<table>
<thead>
<tr><th>Device</th><th>Role</th><th>Connectivity</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>tado Smart Radiator Thermostat X Starter Kit</td><td>Room-by-room control</td><td>Thread, Matter (Bridge X)</td><td>Wet radiators</td></tr>
<tr><td>Netatmo Smart Thermostat</td><td>Boiler thermostat</td><td>Wi-Fi, HomeKit</td><td>Individual boiler</td></tr>
<tr><td>TP-Link Tapo P110M</td><td>Per-appliance metering</td><td>Wi-Fi, Matter</td><td>Auditing consumption</td></tr>
<tr><td>Shelly Plug S Gen3</td><td>Metering and automation</td><td>Wi-Fi, Matter, Bluetooth</td><td>Home Assistant</td></tr>
<tr><td>Shelly Pro 3EM</td><td>Whole-home meter</td><td>Wi-Fi, Ethernet</td><td>Solar, heat pump</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Presence detection</td><td>2.4 GHz Wi-Fi</td><td>Intermittently used rooms</td></tr>
</tbody>
</table>
<p>See our full selection of <a href="/en/energie-domotique/thermostats">smart thermostats</a> and <a href="/en/energie-domotique/compteurs-energie">energy monitors</a> in the catalogue.</p>

<h2>A worked example in kWh</h2>
<p>A device drawing 10 W around the clock, such as a set-top box or speaker left on standby, uses 10 W × 8,760 hours, or about 88 kWh a year. At an example rate of 0.25 euro per kWh (replace it with your own tariff), that is about 22 euros a year for a single device. A smart plug that cuts these devices at night and while you are out removes a good share of it.</p>
<p>The same logic applies to heating: if your home uses 10,000 kWh a year for heating, lowering the average temperature by 1 °C corresponds, using ADEME’s rule of thumb, to about 700 kWh less. Control that lowers the setpoint in empty rooms and at night works exactly on this lever.</p>

<h2>Automations that really save energy</h2>
<ul>
<li><strong>Night and away schedule:</strong> lower the heating setpoint at night and during the day when the home is empty.</li>
<li><strong>Open-window detection:</strong> turn the radiator off while a window is open for ventilation.</li>
<li><strong>Grouped switch-off:</strong> a “Leaving home” routine that turns off lights and the plugs of standby devices.</li>
<li><strong>Room-by-room presence:</strong> switch off lights and supplementary heating when the sensor no longer detects anyone.</li>
<li><strong>Solar:</strong> start a programmable appliance when production exceeds consumption, if you have <a href="/en/blog/balkonkraftwerk-panneau-solaire-balcon">balcony solar panels</a> or a rooftop system.</li>
</ul>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Starting with lighting:</strong> LEDs already use little power; the real gains are in heating.</li>
<li><strong>Buying without checking compatibility:</strong> boiler, heat pump, radiator valves and plug format must all match.</li>
<li><strong>Plugging a portable heater into a small smart plug:</strong> respect the maximum load stated by the manufacturer.</li>
<li><strong>Collecting apps:</strong> favour Matter or a central hub to manage everything in one place.</li>
<li><strong>Trusting guaranteed savings:</strong> advertised percentages depend on the home; measure before and after.</li>
</ul>

<h2>Installation and safety</h2>
<p>Smart plugs and radiator valves install without tools. A wired thermostat connected to the boiler or a meter fitted in the consumer unit, however, means working on an electrical installation: switch off the power and, if in any doubt, call a qualified electrician. Never plug in an appliance whose power exceeds the smart plug’s rating, and avoid daisy-chained extension leads.</p>

<h2>Our verdict</h2>
<p>For most homes heated by wet radiators, the <strong>tado Smart Radiator Thermostat X Starter Kit</strong> is the most effective starting point because it targets the largest consumption item. With a boiler and a single central thermostat, the <strong>Netatmo Smart Thermostat</strong> remains a simple, reliable choice. For metering on a budget, the <strong>Tapo P110M</strong> is the most accessible, the <strong>Shelly Plug S Gen3</strong> the most flexible, and the <strong>Shelly Pro 3EM</strong> gives the complete picture, especially with solar. To go deeper on heating, read our <a href="/en/blog/thermostat-connecte-pompe-chaleur">smart thermostat and heat pump guide</a>.</p>`,

    de: `<p>Ein Smart Home senkt den Energieverbrauch spürbar, wenn es zuerst die Heizung angeht: ein smartes Thermostat oder raumweise gesteuerte Heizkörperthermostate wie das <strong>tado X</strong> wirken auf den größten Posten der Rechnung. Danach folgen die Messung (smarte Steckdosen und Energiemonitore), um Verschwendung aufzuspüren, und einige einfache Automationen; Gadgets, die weder Heizung noch stromhungrige Geräte steuern, sparen kaum etwas.</p>
<p>Dieser Ratgeber beruht nicht auf eigenen Versuchen: Er vergleicht die Geräte anhand von Herstellerdatenblättern, unabhängigen Testberichten und verifizierten Käuferbewertungen. Die Einsparungen hängen immer von Ihrer Wohnung, der Dämmung, dem Heizsystem und Ihren Gewohnheiten ab; die Zahlen sind Größenordnungen, keine Versprechen.</p>

<h2>Wohin die Energie im Haushalt fließt</h2>
<p>Laut Eurostat entfallen in der Europäischen Union rund zwei Drittel des Endenergieverbrauchs der Haushalte auf die Raumheizung. Warmwasser folgt mit großem Abstand, danach Beleuchtung und Elektrogeräte. Daraus ergibt sich die Reihenfolge: Ein Gerät, das die Heizung besser regelt, bringt fast immer mehr als eine smarte Glühbirne.</p>
<p>Die französische Energieagentur ADEME schätzt, dass jedes Grad weniger Raumtemperatur den Heizverbrauch um etwa 7 % senkt. Genau das leistet ein gutes smartes Thermostat: Es senkt die Temperatur, wenn niemand zu Hause ist, nachts oder in leeren Räumen, ohne dass Sie daran denken müssen. Geräte im Standby verbrauchen einzeln wenig, aber rund um die Uhr; deshalb lohnt es sich, sie zu messen, bevor man sie abschaltet.</p>

<h2>Die Auswahlkriterien</h2>
<h3>Kompatibilität mit Ihrer Heizung</h3>
<p>Das ist der erste Punkt. Ein verdrahtetes Thermostat wird an Heizkessel oder Wärmepumpe angeschlossen (potenzialfreier Ein/Aus-Kontakt oder modulierendes Protokoll, je nach Modell); smarte Heizkörperthermostate werden auf die Ventile wassergeführter Heizkörper geschraubt; Elektroheizungen sind meist selbst smart oder werden separat gesteuert. Nutzen Sie vor dem Kauf den Kompatibilitätscheck des Herstellers.</p>
<h3>Protokoll: Matter, Thread, WLAN oder Zigbee</h3>
<p>Matter lässt Geräte verschiedener Marken in Apple Home, Google Home, Amazon Alexa oder SmartThings zusammenarbeiten. Thread ist ein stromsparendes Mesh-Netz für batteriebetriebene Geräte. WLAN braucht keine Bridge, belastet aber das Heimnetz, wenn viele Geräte dazukommen. Unser <a href="/de/blog/maison-connectee-matter-thread-2026">Ratgeber zu Matter und Thread</a> erklärt die Unterschiede.</p>
<h3>Verbrauchsmessung</h3>
<p>Eine Steckdose, die die momentane Leistung misst und die kWh aufsummiert, zeigt, was ein Gerät wirklich kostet. Ein Energiemonitor im Verteilerkasten liefert den Überblick über das ganze Haus, einschließlich einer Solaranlage.</p>
<h3>Lokale Steuerung und Abos</h3>
<p>Prüfen Sie, ob Automationen ohne die Cloud des Herstellers laufen und ob Funktionen an ein Abo gebunden sind. Das betrifft die Zuverlässigkeit ebenso wie die Kosten auf Dauer.</p>

<h2>Die empfehlenswerten Geräte 2026</h2>
<h3>tado Smart Radiator Thermostat X Starter Kit: beste Wahl insgesamt</h3>
<p>Das tado X Starter Kit kombiniert ein smartes Heizkörperthermostat mit der Bridge X, die als Thread-Border-Router dient. Das Thermostat ist Matter-kompatibel, passt dank der mitgelieferten Adapter auf die meisten Ventile und hat einen wiederaufladbaren Akku. Gesteuert wird über die tado App oder über Apple Home, Google Home und Alexa.</p>
<p><strong>Stärken:</strong> Regelung Raum für Raum, Montage ohne Werkzeug an wassergeführten Heizkörpern, vollständiges Ökosystem (verdrahtetes Thermostat, Sensoren, weitere Thermostate). <strong>Schwächen:</strong> Die X-Linie ist nicht mit älteren tado-V3+-Produkten kompatibel, und manche erweiterten Automationen wie automatisches Geofencing gehören zum optionalen Auto-Assist-Abo. <strong>Für wen:</strong> Haushalte mit Heizkörpern, die leere Räume nicht mehr heizen wollen.</p>
<h3>Netatmo Smartes Thermostat: die sichere Wahl für den Heizkessel</h3>
<p>Das Netatmo-Thermostat ersetzt ein klassisches Raumthermostat und schaltet den Kessel über ein Relais. Die Funktion Auto-Adapt berechnet den Heizbeginn anhand der Gebäudedämmung und der Außentemperatur, und die App schickt einen monatlichen Verbrauchsbericht. Es funktioniert mit Apple HomeKit, Alexa und Google Assistant.</p>
<p><strong>Stärken:</strong> einfache Einstellungen, regelmäßige Berichte, dezentes Design. <strong>Schwächen:</strong> nur eine Heizzone ohne zusätzliche Ventile, und die Ein/Aus-Regelung passt nicht zu jeder Wärmepumpe. <strong>Für wen:</strong> Häuser und Wohnungen mit eigenem Kessel und zentralem Thermostat.</p>
<h3>TP-Link Tapo P110M: die zugänglichste Messsteckdose</h3>
<p>Die Tapo P110M ist eine Matter-zertifizierte WLAN-Steckdose, die den Verbrauch des angeschlossenen Geräts misst. Die App zeigt den Verlauf in kWh und erlaubt die Eingabe Ihres Strompreises für eine Kostenschätzung. Sie arbeitet mit Apple Home, Alexa, Google Home und SmartThings, und dank kompakter Bauform bleibt die Nachbarsteckdose frei.</p>
<p><strong>Stärken:</strong> natives Matter, schnelle Einrichtung, ideal für die Bestandsaufnahme stromhungriger Geräte. <strong>Schwächen:</strong> nur 2,4-GHz-WLAN, weniger Profifunktionen als Shelly. <strong>Für wen:</strong> alle, die mehrere Geräte mit kleinem Budget messen wollen.</p>
<h3>Shelly Plug S Gen3: die Steckdose für Fortgeschrittene</h3>
<p>Die Shelly Plug S Gen3 misst die Leistung, verkraftet Lasten bis 2.500 W, ist Matter-zertifiziert und braucht keinen Hub. Sie überzeugt mit lokaler API und einer beliebten Home-Assistant-Integration, mit der sich Automationen an Leistungsschwellen knüpfen lassen (etwa eine Meldung, wenn die Waschmaschine fertig ist).</p>
<p><strong>Stärken:</strong> lokale Steuerung, viele Automationsmöglichkeiten, WLAN-Repeater-Funktion. <strong>Schwächen:</strong> technischere Einstellungen, und die 2.500-W-Grenze schließt große Heizlüfter aus. Achten Sie auf die Steckerversion für Ihr Land. <strong>Für wen:</strong> Home-Assistant-Nutzer und alle, die feine Automationen wollen.</p>
<h3>Shelly Pro 3EM: der Blick aufs ganze Haus</h3>
<p>Der Shelly Pro 3EM ist ein Energiemesser für die Hutschiene mit Stromwandlerklemmen, der ein- und dreiphasig arbeitet. Er misst in beide Richtungen, Bezug und Erzeugung, und eignet sich daher für Photovoltaik. Es gibt ihn in 120-A- und 400-A-Versionen mit angegebener Genauigkeit von 1 %, verbunden per WLAN oder Ethernet, lokal oder über die Cloud.</p>
<p><strong>Stärken:</strong> Gesamtüberblick, Erfassung des Solar-Eigenverbrauchs, Verlauf im Gerät gespeichert. <strong>Schwächen:</strong> Einbau im Verteilerkasten, das gehört in die Hände einer Elektrofachkraft. <strong>Für wen:</strong> Haushalte mit Solaranlage, Wärmepumpe oder Wallbox. Unser <a href="/de/blog/compteur-energie-connecte-comparatif">Energiemonitor-Vergleich</a> zeigt auch Lösungen ohne Elektroarbeiten.</p>
<h3>Aqara Presence Sensor FP2: nur belegte Räume heizen und beleuchten</h3>
<p>Der FP2 nutzt ein Millimeterwellen-Radar, das Personen auch dann erkennt, wenn sie stillsitzen, anders als klassische Infrarot-Bewegungsmelder. Er deckt bis zu 40 m² ab, teilt einen Raum in bis zu 30 Zonen, verfolgt mehrere Personen und läuft über 2,4-GHz-WLAN ohne Aqara-Hub, mit Apple Home, Alexa, Google Home und Home Assistant.</p>
<p><strong>Stärken:</strong> zuverlässige Erkennung von lesenden oder arbeitenden Personen, frei definierbare Zonen. <strong>Schwächen:</strong> Stromversorgung per USB-Kabel, Zonen-Einrichtung braucht Sorgfalt. <strong>Für wen:</strong> alle, die Licht und Heizung in wirklich leeren Räumen abschalten wollen.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Gerät</th><th>Aufgabe</th><th>Konnektivität</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td>tado Smart Radiator Thermostat X Starter Kit</td><td>Raumweise Regelung</td><td>Thread, Matter (Bridge X)</td><td>Wassergeführte Heizkörper</td></tr>
<tr><td>Netatmo Smartes Thermostat</td><td>Kesselthermostat</td><td>WLAN, HomeKit</td><td>Eigener Heizkessel</td></tr>
<tr><td>TP-Link Tapo P110M</td><td>Messung pro Gerät</td><td>WLAN, Matter</td><td>Verbrauchsanalyse</td></tr>
<tr><td>Shelly Plug S Gen3</td><td>Messung und Automation</td><td>WLAN, Matter, Bluetooth</td><td>Home Assistant</td></tr>
<tr><td>Shelly Pro 3EM</td><td>Zähler fürs ganze Haus</td><td>WLAN, Ethernet</td><td>Solar, Wärmepumpe</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Präsenzerkennung</td><td>2,4-GHz-WLAN</td><td>Zeitweise genutzte Räume</td></tr>
</tbody>
</table>
<p>Die ganze Auswahl an <a href="/de/energie-domotique/thermostats">smarten Thermostaten</a> und <a href="/de/energie-domotique/compteurs-energie">Energiemonitoren</a> finden Sie in unserem Katalog.</p>

<h2>Ein Rechenbeispiel in kWh</h2>
<p>Ein Gerät, das rund um die Uhr 10 W zieht, etwa eine Set-Top-Box oder ein Lautsprecher im Standby, verbraucht 10 W × 8.760 Stunden, also rund 88 kWh pro Jahr. Bei einem Beispieltarif von 0,25 Euro pro kWh (ersetzen Sie ihn durch Ihren eigenen Tarif) sind das etwa 22 Euro pro Jahr für ein einziges Gerät. Eine smarte Steckdose, die diese Geräte nachts und bei Abwesenheit abschaltet, spart einen guten Teil davon.</p>
<p>Bei der Heizung gilt dieselbe Logik: Verbraucht Ihre Wohnung 10.000 kWh pro Jahr fürs Heizen, entspricht 1 °C weniger Durchschnittstemperatur nach der Faustregel der ADEME rund 700 kWh weniger. Eine Regelung, die die Solltemperatur in leeren Räumen und nachts senkt, setzt genau hier an.</p>

<h2>Automationen, die wirklich sparen</h2>
<ul>
<li><strong>Nacht- und Abwesenheitsprogramm:</strong> Solltemperatur nachts und tagsüber bei leerer Wohnung absenken.</li>
<li><strong>Fenster-offen-Erkennung:</strong> Heizkörper abschalten, solange zum Lüften ein Fenster offen ist.</li>
<li><strong>Gruppenabschaltung:</strong> eine Routine „Ich gehe“, die Licht und die Steckdosen von Standby-Geräten ausschaltet.</li>
<li><strong>Präsenz pro Raum:</strong> Licht und Zusatzheizung ausschalten, wenn der Sensor niemanden mehr erkennt.</li>
<li><strong>Solar:</strong> ein programmierbares Gerät starten, wenn die Erzeugung den Verbrauch übersteigt, etwa mit einem <a href="/de/blog/balkonkraftwerk-panneau-solaire-balcon">Balkonkraftwerk</a> oder einer Dachanlage.</li>
</ul>

<h2>Fehler, die Sie vermeiden sollten</h2>
<ul>
<li><strong>Mit der Beleuchtung anfangen:</strong> LEDs verbrauchen bereits wenig; das Potenzial liegt bei der Heizung.</li>
<li><strong>Ohne Kompatibilitätsprüfung kaufen:</strong> Kessel, Wärmepumpe, Heizkörperventile und Steckerformat müssen passen.</li>
<li><strong>Einen Heizlüfter an eine kleine smarte Steckdose hängen:</strong> Halten Sie die maximale Last laut Hersteller ein.</li>
<li><strong>Apps sammeln:</strong> Setzen Sie auf Matter oder eine zentrale Steuerung, um alles an einem Ort zu verwalten.</li>
<li><strong>An garantierte Einsparungen glauben:</strong> Prozentangaben hängen von der Wohnung ab; messen Sie vorher und nachher.</li>
</ul>

<h2>Installation und Sicherheit</h2>
<p>Smarte Steckdosen und Heizkörperthermostate lassen sich ohne Werkzeug montieren. Ein verdrahtetes Thermostat am Kessel oder ein Messgerät im Verteilerkasten bedeutet dagegen Arbeiten an der Elektroinstallation: Schalten Sie den Strom ab und beauftragen Sie im Zweifel eine Elektrofachkraft. Schließen Sie nie ein Gerät an, dessen Leistung die zulässige Last der smarten Steckdose übersteigt, und vermeiden Sie hintereinandergesteckte Mehrfachsteckdosen.</p>

<h2>Unser Fazit</h2>
<p>Für die meisten Wohnungen mit wassergeführten Heizkörpern ist das <strong>tado Smart Radiator Thermostat X Starter Kit</strong> der wirksamste Einstieg, weil es beim größten Verbrauchsposten ansetzt. Mit Heizkessel und einem zentralen Thermostat bleibt das <strong>Netatmo Smartes Thermostat</strong> eine einfache, zuverlässige Wahl. Zum Messen mit kleinem Budget ist die <strong>Tapo P110M</strong> am zugänglichsten, die <strong>Shelly Plug S Gen3</strong> am flexibelsten, und der <strong>Shelly Pro 3EM</strong> liefert das Gesamtbild, besonders mit Solaranlage. Mehr zur Heizung lesen Sie in unserem Ratgeber <a href="/de/blog/thermostat-connecte-pompe-chaleur">smartes Thermostat und Wärmepumpe</a>.</p>`,

    es: `<p>La domótica reduce de verdad el consumo de una vivienda cuando ataca primero la calefacción: un termostato inteligente o cabezales termostáticos controlados habitación por habitación, como el <strong>tado X</strong>, actúan sobre la partida más grande de la factura. Después viene la medición (enchufes y medidores conectados) para detectar despilfarros y, por último, algunas automatizaciones sencillas; los aparatos que no controlan ni la calefacción ni equipos de alto consumo apenas ahorran.</p>
<p>Esta guía no se basa en pruebas propias: compara los equipos a partir de las fichas técnicas de los fabricantes, análisis independientes y opiniones verificadas de compradores. El ahorro depende siempre de la vivienda, su aislamiento, el sistema de calefacción y sus hábitos; las cifras son órdenes de magnitud, nunca promesas.</p>

<h2>Adónde va la energía de una vivienda</h2>
<p>Según Eurostat, la calefacción de los espacios representa aproximadamente dos tercios de la energía final que consumen los hogares de la Unión Europea. El agua caliente queda muy por detrás, seguida de la iluminación y los electrodomésticos. Ese reparto marca las prioridades: un equipo que regula mejor la calefacción casi siempre tendrá más efecto que una bombilla conectada.</p>
<p>La agencia francesa de la energía ADEME calcula que bajar 1 °C la temperatura de consigna reduce el consumo de calefacción en torno a un 7 %. Eso es justo lo que hace un buen termostato inteligente: baja la temperatura cuando no hay nadie, por la noche o en las habitaciones vacías, sin que tenga que pensar en ello. Los aparatos en espera gastan poco cada uno, pero de forma continua; por eso conviene medirlos antes de apagarlos.</p>

<h2>Criterios de elección</h2>
<h3>Compatibilidad con su calefacción</h3>
<p>Es lo primero que hay que comprobar. Un termostato cableado se conecta a una caldera o bomba de calor (contacto libre de tensión de encendido/apagado o protocolo de modulación, según el modelo); los cabezales termostáticos inteligentes se enroscan en las válvulas de los radiadores de agua; los radiadores eléctricos suelen ser conectados de serie o se controlan por separado. Use el comprobador de compatibilidad del fabricante antes de comprar.</p>
<h3>Protocolo: Matter, Thread, Wi-Fi o Zigbee</h3>
<p>Matter permite que dispositivos de marcas distintas funcionen juntos en Apple Casa, Google Home, Amazon Alexa o SmartThings. Thread es una red mallada de bajo consumo, adecuada para dispositivos a pilas. El Wi-Fi no necesita puente, pero satura la red doméstica cuando se multiplican los equipos. Nuestra <a href="/es/blog/maison-connectee-matter-thread-2026">guía de Matter y Thread</a> explica estas opciones.</p>
<h3>Medición del consumo</h3>
<p>Un enchufe que mide la potencia instantánea y acumula los kWh le dice cuánto cuesta realmente un aparato. Un medidor instalado en el cuadro eléctrico ofrece la visión de toda la vivienda, incluida la producción solar si la hay.</p>
<h3>Control local y suscripciones</h3>
<p>Compruebe si las automatizaciones funcionan sin la nube del fabricante y si alguna función exige suscripción. Influye tanto en la fiabilidad como en el coste a largo plazo.</p>

<h2>Los equipos recomendados en 2026</h2>
<h3>tado Smart Radiator Thermostat X Starter Kit: la mejor opción global</h3>
<p>El kit de inicio tado X combina un cabezal termostático inteligente con el Bridge X, que actúa como router de borde Thread. El cabezal es compatible con Matter, se adapta a la mayoría de válvulas gracias a los adaptadores incluidos y funciona con batería recargable. Todo se controla desde la app de tado o desde Apple Casa, Google Home y Alexa.</p>
<p><strong>Puntos fuertes:</strong> regulación habitación por habitación, montaje sin herramientas en radiadores de agua, ecosistema completo (termostato cableado, sensores, cabezales adicionales). <strong>Limitaciones:</strong> la gama X no es compatible con los productos tado V3+ anteriores, y algunas automatizaciones avanzadas, como la geolocalización automática, forman parte de la suscripción opcional Auto-Assist. <strong>Para quién:</strong> viviendas con radiadores de agua que quieren dejar de calentar habitaciones vacías.</p>
<h3>Netatmo Termostato Inteligente: la apuesta segura para una caldera</h3>
<p>El termostato de Netatmo sustituye a un termostato de ambiente clásico y controla la caldera mediante un relé. Su función Auto-Adapt anticipa el encendido teniendo en cuenta el aislamiento de la vivienda y la temperatura exterior, y la app envía un informe mensual de consumo. Es compatible con Apple HomeKit, Alexa y Google Assistant.</p>
<p><strong>Puntos fuertes:</strong> ajustes sencillos, informes periódicos, diseño discreto. <strong>Limitaciones:</strong> una sola zona sin válvulas adicionales y una regulación de encendido/apagado que no conviene a todas las bombas de calor. <strong>Para quién:</strong> casas y pisos con caldera individual y un termostato central.</p>
<h3>TP-Link Tapo P110M: el enchufe medidor más accesible</h3>
<p>El Tapo P110M es un enchufe Wi-Fi con certificación Matter que mide el consumo del aparato conectado. La app muestra el historial en kWh y permite introducir el precio de su kWh para estimar el coste. Funciona con Apple Casa, Alexa, Google Home y SmartThings, y su formato compacto deja libre la toma de al lado.</p>
<p><strong>Puntos fuertes:</strong> Matter nativo, configuración rápida, ideal para hacer inventario de los aparatos que más gastan. <strong>Limitaciones:</strong> solo Wi-Fi de 2,4 GHz, menos funciones avanzadas que Shelly. <strong>Para quién:</strong> quien quiera medir varios aparatos con poco presupuesto.</p>
<h3>Shelly Plug S Gen3: el enchufe para usuarios avanzados</h3>
<p>El Shelly Plug S Gen3 mide la potencia, admite cargas de hasta 2.500 W, tiene certificación Matter y no necesita hub. Destaca por su API local y su apreciada integración con Home Assistant, que permite lanzar automatizaciones según un umbral de potencia (por ejemplo, avisar cuando la lavadora ha terminado).</p>
<p><strong>Puntos fuertes:</strong> control local, muchas opciones de automatización, función de repetidor Wi-Fi. <strong>Limitaciones:</strong> ajustes más técnicos, y el límite de 2.500 W descarta los calefactores grandes. Compruebe también el formato de enchufe vendido para su país. <strong>Para quién:</strong> usuarios de Home Assistant y quien busque automatizaciones finas.</p>
<h3>Shelly Pro 3EM: la visión de toda la vivienda</h3>
<p>El Shelly Pro 3EM es un medidor de energía para carril DIN, con pinzas amperimétricas, que funciona en monofásico y trifásico. Mide en ambos sentidos, consumo y producción, lo que lo hace útil con paneles solares. Existe en versiones de 120 A y 400 A, con una precisión declarada del 1 %, y se conecta por Wi-Fi o Ethernet, en local o a través de la nube.</p>
<p><strong>Puntos fuertes:</strong> visión completa de la vivienda, seguimiento del autoconsumo solar, historial guardado en el propio equipo. <strong>Limitaciones:</strong> se instala en el cuadro eléctrico, trabajo para un electricista cualificado. <strong>Para quién:</strong> hogares con placas solares, bomba de calor o cargador de coche eléctrico. Nuestra <a href="/es/blog/compteur-energie-connecte-comparatif">comparativa de medidores de energía</a> incluye también soluciones sin obras.</p>
<h3>Aqara Presence Sensor FP2: calentar e iluminar solo las habitaciones ocupadas</h3>
<p>El FP2 usa un radar de ondas milimétricas que detecta a las personas incluso inmóviles, a diferencia de los detectores infrarrojos clásicos. Cubre hasta 40 m², puede dividir una habitación en 30 zonas, sigue a varias personas y funciona con Wi-Fi de 2,4 GHz sin hub de Aqara, con Apple Casa, Alexa, Google Home y Home Assistant.</p>
<p><strong>Puntos fuertes:</strong> detección fiable de alguien que lee o trabaja, zonas personalizables. <strong>Limitaciones:</strong> alimentación por cable USB, la configuración de zonas requiere cuidado. <strong>Para quién:</strong> quien quiera apagar luz y calefacción en las habitaciones realmente vacías.</p>

<h2>Tabla comparativa</h2>
<table>
<thead>
<tr><th>Equipo</th><th>Función</th><th>Conectividad</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td>tado Smart Radiator Thermostat X Starter Kit</td><td>Regulación por habitación</td><td>Thread, Matter (Bridge X)</td><td>Radiadores de agua</td></tr>
<tr><td>Netatmo Termostato Inteligente</td><td>Termostato de caldera</td><td>Wi-Fi, HomeKit</td><td>Caldera individual</td></tr>
<tr><td>TP-Link Tapo P110M</td><td>Medición por aparato</td><td>Wi-Fi, Matter</td><td>Inventario de consumos</td></tr>
<tr><td>Shelly Plug S Gen3</td><td>Medición y automatización</td><td>Wi-Fi, Matter, Bluetooth</td><td>Home Assistant</td></tr>
<tr><td>Shelly Pro 3EM</td><td>Medidor de toda la vivienda</td><td>Wi-Fi, Ethernet</td><td>Solar, bomba de calor</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Detección de presencia</td><td>Wi-Fi 2,4 GHz</td><td>Habitaciones de uso intermitente</td></tr>
</tbody>
</table>
<p>Encuentre toda la selección de <a href="/es/energie-domotique/thermostats">termostatos inteligentes</a> y <a href="/es/energie-domotique/compteurs-energie">medidores de energía</a> en nuestro catálogo.</p>

<h2>Un ejemplo de cálculo en kWh</h2>
<p>Un aparato que consume 10 W de forma permanente, como un descodificador o un altavoz en espera, gasta 10 W × 8.760 horas, es decir, unos 88 kWh al año. Con una tarifa de ejemplo de 0,25 euros por kWh (sustitúyala por la de su contrato), son unos 22 euros al año por un solo aparato. Un enchufe inteligente que los apague por la noche y cuando no está en casa elimina buena parte de ese gasto.</p>
<p>Con la calefacción ocurre lo mismo: si su vivienda consume 10.000 kWh al año en calefacción, bajar 1 °C la temperatura media equivale, según la referencia de la ADEME, a unos 700 kWh menos. Una regulación que baja la consigna en las habitaciones vacías y por la noche actúa justo sobre esa palanca.</p>

<h2>Las automatizaciones que ahorran de verdad</h2>
<ul>
<li><strong>Programa de noche y ausencia:</strong> bajar la consigna por la noche y durante el día cuando la vivienda está vacía.</li>
<li><strong>Detección de ventana abierta:</strong> apagar el radiador mientras se ventila.</li>
<li><strong>Apagado agrupado:</strong> una rutina «Me voy» que apaga luces y los enchufes de los aparatos en espera.</li>
<li><strong>Presencia por habitación:</strong> apagar luces y calefacción auxiliar cuando el sensor ya no detecta a nadie.</li>
<li><strong>Solar:</strong> poner en marcha un aparato programable cuando la producción supera el consumo, si tiene <a href="/es/blog/balkonkraftwerk-panneau-solaire-balcon">paneles solares de balcón</a> o en el tejado.</li>
</ul>

<h2>Errores que conviene evitar</h2>
<ul>
<li><strong>Empezar por la iluminación:</strong> los LED ya consumen poco; el ahorro está sobre todo en la calefacción.</li>
<li><strong>Comprar sin comprobar la compatibilidad:</strong> caldera, bomba de calor, válvulas y tipo de enchufe deben coincidir.</li>
<li><strong>Conectar un calefactor a un enchufe inteligente pequeño:</strong> respete la carga máxima indicada por el fabricante.</li>
<li><strong>Acumular aplicaciones:</strong> priorice Matter o un hub central para gestionarlo todo en un solo sitio.</li>
<li><strong>Creer en ahorros garantizados:</strong> los porcentajes anunciados dependen de la vivienda; mida antes y después.</li>
</ul>

<h2>Instalación y seguridad</h2>
<p>Los enchufes inteligentes y los cabezales termostáticos se instalan sin herramientas. En cambio, un termostato cableado a la caldera o un medidor en el cuadro eléctrico implican intervenir en la instalación eléctrica: corte la corriente y, ante la duda, recurra a un electricista cualificado. No conecte nunca un aparato cuya potencia supere la admitida por el enchufe inteligente y evite encadenar regletas.</p>

<h2>Nuestro veredicto</h2>
<p>Para la mayoría de viviendas con radiadores de agua, el <strong>tado Smart Radiator Thermostat X Starter Kit</strong> es el punto de partida más eficaz, porque actúa sobre la partida de mayor consumo. Con caldera y un solo termostato central, el <strong>Netatmo Termostato Inteligente</strong> sigue siendo una opción sencilla y fiable. Para medir con poco presupuesto, el <strong>Tapo P110M</strong> es el más accesible, el <strong>Shelly Plug S Gen3</strong> el más flexible, y el <strong>Shelly Pro 3EM</strong> ofrece la visión completa, sobre todo con placas solares. Para profundizar en la calefacción, lea nuestra guía <a href="/es/blog/thermostat-connecte-pompe-chaleur">termostato inteligente y bomba de calor</a>.</p>`,

    it: `<p>La domotica riduce davvero i consumi di un’abitazione quando affronta per primo il riscaldamento: un termostato smart o teste termostatiche gestite stanza per stanza, come il <strong>tado X</strong>, agiscono sulla voce più pesante della bolletta. Vengono poi la misura (prese e misuratori connessi) per individuare gli sprechi e alcune automazioni semplici; i gadget che non controllano né il riscaldamento né gli apparecchi energivori non fanno risparmiare quasi nulla.</p>
<p>Questa guida non si basa su prove interne: confronta i dispositivi a partire dalle schede tecniche dei produttori, da recensioni indipendenti e dai feedback verificati degli acquirenti. Il risparmio dipende sempre dalla casa, dall’isolamento, dall’impianto di riscaldamento e dalle abitudini; le cifre indicate sono ordini di grandezza, mai promesse.</p>

<h2>Dove va l’energia di una casa</h2>
<p>Secondo Eurostat, il riscaldamento degli ambienti rappresenta circa due terzi dell’energia finale consumata dalle famiglie nell’Unione europea. L’acqua calda sanitaria viene molto dopo, seguita da illuminazione ed elettrodomestici. Questa ripartizione fissa le priorità: un dispositivo che regola meglio il riscaldamento avrà quasi sempre più effetto di una lampadina smart.</p>
<p>L’agenzia francese per l’energia ADEME stima che abbassare di 1 °C la temperatura impostata riduca i consumi di riscaldamento di circa il 7 %. È proprio ciò che fa un buon termostato smart: abbassa la temperatura quando non c’è nessuno, di notte o nelle stanze vuote, senza che dobbiate pensarci. Gli apparecchi in standby consumano poco singolarmente ma in modo continuo, per questo conviene misurarli prima di spegnerli.</p>

<h2>I criteri di scelta</h2>
<h3>Compatibilità con il riscaldamento</h3>
<p>È il primo punto da verificare. Un termostato cablato si collega a caldaia o pompa di calore (contatto pulito on/off o protocollo modulante, a seconda del modello); le teste termostatiche smart si avvitano sulle valvole dei radiatori ad acqua; i radiatori elettrici sono spesso già connessi o si gestiscono a parte. Usate lo strumento di verifica della compatibilità del produttore prima dell’acquisto.</p>
<h3>Protocollo: Matter, Thread, Wi-Fi o Zigbee</h3>
<p>Matter fa funzionare insieme dispositivi di marche diverse in Apple Casa, Google Home, Amazon Alexa o SmartThings. Thread è una rete mesh a basso consumo, adatta ai dispositivi a batteria. Il Wi-Fi non richiede bridge ma appesantisce la rete domestica quando i dispositivi si moltiplicano. La nostra <a href="/it/blog/maison-connectee-matter-thread-2026">guida a Matter e Thread</a> approfondisce queste scelte.</p>
<h3>Misura dei consumi</h3>
<p>Una presa che misura la potenza istantanea e somma i kWh vi dice quanto costa davvero un apparecchio. Un misuratore installato nel quadro elettrico offre la visione dell’intera casa, compresa l’eventuale produzione fotovoltaica.</p>
<h3>Controllo locale e abbonamenti</h3>
<p>Verificate se le automazioni funzionano senza il cloud del produttore e se alcune funzioni richiedono un abbonamento. Conta per l’affidabilità quanto per i costi nel tempo.</p>

<h2>I dispositivi da privilegiare nel 2026</h2>
<h3>tado Smart Radiator Thermostat X Starter Kit: la miglior scelta complessiva</h3>
<p>Lo starter kit tado X abbina una testa termostatica smart al Bridge X, che funge da border router Thread. La testa è compatibile Matter, si adatta alla maggior parte delle valvole grazie agli adattatori inclusi e ha una batteria ricaricabile. Il tutto si gestisce dall’app tado oppure da Apple Casa, Google Home e Alexa.</p>
<p><strong>Punti di forza:</strong> regolazione stanza per stanza, montaggio senza attrezzi sui radiatori ad acqua, ecosistema completo (termostato cablato, sensori, teste aggiuntive). <strong>Limiti:</strong> la gamma X non è compatibile con i vecchi prodotti tado V3+, e alcune automazioni avanzate, come il geofencing automatico, fanno parte dell’abbonamento facoltativo Auto-Assist. <strong>Per chi:</strong> case con radiatori ad acqua che vogliono smettere di scaldare stanze vuote.</p>
<h3>Netatmo Termostato Intelligente: la scelta sicura per la caldaia</h3>
<p>Il termostato Netatmo sostituisce un termostato ambiente tradizionale e comanda la caldaia tramite un relè. La funzione Auto-Adapt anticipa l’accensione tenendo conto dell’isolamento della casa e della temperatura esterna, e l’app invia un resoconto mensile dei consumi. È compatibile con Apple HomeKit, Alexa e Google Assistant.</p>
<p><strong>Punti di forza:</strong> impostazioni semplici, report regolari, design discreto. <strong>Limiti:</strong> una sola zona senza valvole aggiuntive e una regolazione on/off non adatta a tutte le pompe di calore. <strong>Per chi:</strong> case e appartamenti con caldaia autonoma e un termostato centrale.</p>
<h3>TP-Link Tapo P110M: la presa con misura più accessibile</h3>
<p>La Tapo P110M è una presa Wi-Fi certificata Matter che misura i consumi dell’apparecchio collegato. L’app mostra lo storico in kWh e permette di inserire il prezzo del vostro kWh per stimare il costo. Funziona con Apple Casa, Alexa, Google Home e SmartThings, e il formato compatto lascia libera la presa vicina.</p>
<p><strong>Punti di forza:</strong> Matter nativo, configurazione rapida, ideale per censire gli apparecchi più energivori. <strong>Limiti:</strong> solo Wi-Fi a 2,4 GHz, meno funzioni avanzate rispetto a Shelly. <strong>Per chi:</strong> chi vuole misurare più apparecchi con un budget contenuto.</p>
<h3>Shelly Plug S Gen3: la presa per utenti esperti</h3>
<p>La Shelly Plug S Gen3 misura la potenza, sopporta carichi fino a 2.500 W, è certificata Matter e non richiede hub. Si distingue per l’API locale e per l’apprezzata integrazione con Home Assistant, che consente di avviare automazioni in base a una soglia di potenza (per esempio un avviso quando la lavatrice ha finito).</p>
<p><strong>Punti di forza:</strong> controllo locale, molte opzioni di automazione, funzione di ripetitore Wi-Fi. <strong>Limiti:</strong> impostazioni più tecniche, e il limite di 2.500 W esclude le grandi stufette. Verificate anche il tipo di spina venduto per il vostro Paese. <strong>Per chi:</strong> utenti di Home Assistant e chi cerca automazioni precise.</p>
<h3>Shelly Pro 3EM: la visione di tutta la casa</h3>
<p>Lo Shelly Pro 3EM è un misuratore di energia su guida DIN, con pinze amperometriche, che funziona in monofase e trifase. Misura nei due sensi, prelievo e produzione, ed è quindi utile con il fotovoltaico. Esiste nelle versioni da 120 A e 400 A, con una precisione dichiarata dell’1 %, e si collega via Wi-Fi o Ethernet, in locale o tramite cloud.</p>
<p><strong>Punti di forza:</strong> visione completa della casa, monitoraggio dell’autoconsumo solare, storico salvato nel dispositivo. <strong>Limiti:</strong> installazione nel quadro elettrico, da affidare a un elettricista qualificato. <strong>Per chi:</strong> famiglie con fotovoltaico, pompa di calore o wallbox. Il nostro <a href="/it/blog/compteur-energie-connecte-comparatif">confronto dei misuratori di energia</a> presenta anche soluzioni senza lavori.</p>
<h3>Aqara Presence Sensor FP2: scaldare e illuminare solo le stanze occupate</h3>
<p>L’FP2 usa un radar a onde millimetriche che rileva le persone anche quando sono immobili, a differenza dei classici sensori a infrarossi. Copre fino a 40 m², può dividere una stanza in 30 zone, segue più persone e funziona con Wi-Fi a 2,4 GHz senza hub Aqara, con Apple Casa, Alexa, Google Home e Home Assistant.</p>
<p><strong>Punti di forza:</strong> rilevamento affidabile di chi legge o lavora, zone personalizzabili. <strong>Limiti:</strong> alimentazione via cavo USB, la configurazione delle zone richiede attenzione. <strong>Per chi:</strong> chi vuole spegnere luci e riscaldamento nelle stanze davvero vuote.</p>

<h2>Tabella comparativa</h2>
<table>
<thead>
<tr><th>Dispositivo</th><th>Ruolo</th><th>Connettività</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td>tado Smart Radiator Thermostat X Starter Kit</td><td>Regolazione stanza per stanza</td><td>Thread, Matter (Bridge X)</td><td>Radiatori ad acqua</td></tr>
<tr><td>Netatmo Termostato Intelligente</td><td>Termostato per caldaia</td><td>Wi-Fi, HomeKit</td><td>Caldaia autonoma</td></tr>
<tr><td>TP-Link Tapo P110M</td><td>Misura per apparecchio</td><td>Wi-Fi, Matter</td><td>Censimento dei consumi</td></tr>
<tr><td>Shelly Plug S Gen3</td><td>Misura e automazione</td><td>Wi-Fi, Matter, Bluetooth</td><td>Home Assistant</td></tr>
<tr><td>Shelly Pro 3EM</td><td>Misuratore di tutta la casa</td><td>Wi-Fi, Ethernet</td><td>Fotovoltaico, pompa di calore</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Rilevamento di presenza</td><td>Wi-Fi 2,4 GHz</td><td>Stanze usate a intermittenza</td></tr>
</tbody>
</table>
<p>Trovate tutta la selezione di <a href="/it/energie-domotique/thermostats">termostati smart</a> e <a href="/it/energie-domotique/compteurs-energie">misuratori di energia</a> nel nostro catalogo.</p>

<h2>Un esempio di calcolo in kWh</h2>
<p>Un apparecchio che assorbe 10 W in modo continuo, come un decoder o un altoparlante in standby, consuma 10 W × 8.760 ore, cioè circa 88 kWh all’anno. Con una tariffa di esempio di 0,25 euro per kWh (sostituitela con quella del vostro contratto), sono circa 22 euro all’anno per un solo apparecchio. Una presa smart che spegne questi dispositivi di notte e quando siete fuori ne elimina buona parte.</p>
<p>Per il riscaldamento vale lo stesso ragionamento: se la vostra casa consuma 10.000 kWh all’anno per scaldarsi, abbassare di 1 °C la temperatura media corrisponde, secondo il riferimento dell’ADEME, a circa 700 kWh in meno. Una regolazione che abbassa la temperatura nelle stanze vuote e di notte agisce proprio su questa leva.</p>

<h2>Le automazioni che fanno davvero risparmiare</h2>
<ul>
<li><strong>Programma notte e assenza:</strong> abbassare la temperatura di notte e di giorno quando la casa è vuota.</li>
<li><strong>Rilevamento finestra aperta:</strong> spegnere il radiatore mentre si arieggia.</li>
<li><strong>Spegnimento di gruppo:</strong> una routine «Esco» che spegne luci e prese degli apparecchi in standby.</li>
<li><strong>Presenza stanza per stanza:</strong> spegnere luci e riscaldamento ausiliario quando il sensore non rileva più nessuno.</li>
<li><strong>Fotovoltaico:</strong> avviare un apparecchio programmabile quando la produzione supera il consumo, se avete <a href="/it/blog/balkonkraftwerk-panneau-solaire-balcon">pannelli solari da balcone</a> o sul tetto.</li>
</ul>

<h2>Gli errori da evitare</h2>
<ul>
<li><strong>Partire dall’illuminazione:</strong> i LED consumano già poco; il risparmio vero è nel riscaldamento.</li>
<li><strong>Acquistare senza verificare la compatibilità:</strong> caldaia, pompa di calore, valvole dei radiatori e tipo di spina devono corrispondere.</li>
<li><strong>Collegare una stufetta a una piccola presa smart:</strong> rispettate il carico massimo indicato dal produttore.</li>
<li><strong>Moltiplicare le app:</strong> privilegiate Matter o un hub centrale per gestire tutto in un unico posto.</li>
<li><strong>Credere ai risparmi garantiti:</strong> le percentuali dichiarate dipendono dalla casa; misurate prima e dopo.</li>
</ul>

<h2>Installazione e sicurezza</h2>
<p>Prese smart e teste termostatiche si installano senza attrezzi. Un termostato cablato alla caldaia o un misuratore nel quadro elettrico comportano invece un intervento sull’impianto elettrico: togliete la corrente e, nel dubbio, rivolgetevi a un elettricista qualificato. Non collegate mai un apparecchio con potenza superiore a quella ammessa dalla presa smart ed evitate le ciabatte collegate in cascata.</p>

<h2>Il nostro verdetto</h2>
<p>Per la maggior parte delle case con radiatori ad acqua, il <strong>tado Smart Radiator Thermostat X Starter Kit</strong> è il punto di partenza più efficace, perché agisce sulla voce di consumo principale. Con caldaia e un solo termostato centrale, il <strong>Netatmo Termostato Intelligente</strong> resta una scelta semplice e affidabile. Per misurare con poca spesa, la <strong>Tapo P110M</strong> è la più accessibile, la <strong>Shelly Plug S Gen3</strong> la più flessibile, e lo <strong>Shelly Pro 3EM</strong> offre il quadro completo, soprattutto con il fotovoltaico. Per approfondire il riscaldamento, leggete la nostra guida <a href="/it/blog/thermostat-connecte-pompe-chaleur">termostato smart e pompa di calore</a>.</p>`,

    nl: `<p>Domotica verlaagt het energieverbruik van een woning echt wanneer ze eerst de verwarming aanpakt: een slimme thermostaat of per kamer aangestuurde slimme radiatorknoppen, zoals de <strong>tado X</strong>, werken op de grootste post van de rekening. Daarna volgt meten (slimme stekkers en energiemonitors) om verspilling op te sporen, en ten slotte een paar eenvoudige automatiseringen; gadgets die verwarming noch grootverbruikers aansturen, besparen vrijwel niets.</p>
<p>Deze gids is niet gebaseerd op eigen proeven: hij vergelijkt apparaten op basis van specificaties van fabrikanten, onafhankelijke reviews en geverifieerde ervaringen van kopers. Besparingen hangen altijd af van uw woning, de isolatie, het verwarmingssysteem en uw gewoonten; de cijfers zijn ordes van grootte, geen beloftes.</p>

<h2>Waar de energie in huis naartoe gaat</h2>
<p>Volgens Eurostat gaat ongeveer twee derde van het finale energieverbruik van huishoudens in de Europese Unie naar ruimteverwarming. Warm water volgt op grote afstand, daarna verlichting en elektrische apparaten. Die verdeling bepaalt de prioriteiten: een apparaat dat de verwarming beter regelt, levert bijna altijd meer op dan een slimme lamp.</p>
<p>Het Franse energieagentschap ADEME schat dat 1 °C lager stoken het verwarmingsverbruik met ongeveer 7 % verlaagt. Dat is precies wat een goede slimme thermostaat doet: hij verlaagt de temperatuur als er niemand thuis is, 's nachts of in lege kamers, zonder dat u eraan hoeft te denken. Apparaten in stand-by verbruiken elk weinig, maar wel continu; daarom loont het om ze eerst te meten voordat u ze uitschakelt.</p>

<h2>Waar u op let bij de keuze</h2>
<h3>Compatibiliteit met uw verwarming</h3>
<p>Controleer dit als eerste. Een bedrade thermostaat wordt aangesloten op een cv-ketel of warmtepomp (potentiaalvrij aan/uit-contact of een modulerend protocol, afhankelijk van het model); slimme radiatorknoppen worden op de kranen van waterradiatoren geschroefd; elektrische radiatoren zijn vaak zelf slim of worden apart aangestuurd. Gebruik vóór de aankoop de compatibiliteitscheck van de fabrikant.</p>
<h3>Protocol: Matter, Thread, wifi of Zigbee</h3>
<p>Met Matter werken apparaten van verschillende merken samen in Apple Woning, Google Home, Amazon Alexa of SmartThings. Thread is een zuinig mesh-netwerk dat geschikt is voor apparaten op batterijen. Wifi heeft geen bridge nodig, maar belast het thuisnetwerk naarmate het aantal apparaten groeit. Onze <a href="/nl/blog/maison-connectee-matter-thread-2026">gids over Matter en Thread</a> legt deze keuzes uit.</p>
<h3>Verbruiksmeting</h3>
<p>Een stekker die het momentane vermogen meet en de kWh optelt, laat zien wat een apparaat echt kost. Een energiemonitor in de meterkast geeft het overzicht van de hele woning, inclusief eventuele zonnestroom.</p>
<h3>Lokale bediening en abonnementen</h3>
<p>Controleer of automatiseringen werken zonder de cloud van de fabrikant en of sommige functies een abonnement vereisen. Dat telt voor de betrouwbaarheid net zo goed als voor de kosten op lange termijn.</p>

<h2>De aanbevolen apparaten in 2026</h2>
<h3>tado Smart Radiator Thermostat X Starter Kit: beste keuze overall</h3>
<p>De tado X-starterkit combineert een slimme radiatorthermostaat met de Bridge X, die als Thread-borderrouter dient. De radiatorthermostaat is Matter-compatibel, past dankzij de meegeleverde adapters op de meeste kranen en heeft een oplaadbare batterij. Alles is te bedienen via de tado-app of via Apple Woning, Google Home en Alexa.</p>
<p><strong>Sterke punten:</strong> regeling per kamer, montage zonder gereedschap op waterradiatoren, compleet ecosysteem (bedrade thermostaat, sensoren, extra radiatorknoppen). <strong>Beperkingen:</strong> de X-lijn is niet compatibel met oudere tado V3+-producten, en sommige geavanceerde automatiseringen, zoals automatische geofencing, vallen onder het optionele Auto-Assist-abonnement. <strong>Voor wie:</strong> woningen met waterradiatoren die lege kamers niet meer willen verwarmen.</p>
<h3>Netatmo Slimme Thermostaat: de veilige keuze voor een cv-ketel</h3>
<p>De Netatmo-thermostaat vervangt een gewone kamerthermostaat en schakelt de ketel via een relais. De functie Auto-Adapt bepaalt wanneer de verwarming moet starten op basis van de isolatie van de woning en de buitentemperatuur, en de app stuurt een maandelijks verbruiksoverzicht. Hij werkt met Apple HomeKit, Alexa en Google Assistant.</p>
<p><strong>Sterke punten:</strong> eenvoudige instellingen, regelmatige rapporten, onopvallend ontwerp. <strong>Beperkingen:</strong> één zone zonder extra radiatorknoppen, en aan/uit-regeling past niet bij elke warmtepomp. <strong>Voor wie:</strong> huizen en appartementen met een eigen cv-ketel en één centrale thermostaat.</p>
<h3>TP-Link Tapo P110M: de toegankelijkste meetstekker</h3>
<p>De Tapo P110M is een Matter-gecertificeerde wifi-stekker die het verbruik van het aangesloten apparaat meet. De app toont de geschiedenis in kWh en laat u uw kWh-prijs invoeren om de kosten te schatten. Hij werkt met Apple Woning, Alexa, Google Home en SmartThings, en dankzij het compacte formaat blijft het stopcontact ernaast vrij.</p>
<p><strong>Sterke punten:</strong> native Matter, snelle installatie, ideaal om grootverbruikers in kaart te brengen. <strong>Beperkingen:</strong> alleen 2,4 GHz-wifi, minder geavanceerde functies dan Shelly. <strong>Voor wie:</strong> wie meerdere apparaten wil meten met een beperkt budget.</p>
<h3>Shelly Plug S Gen3: de stekker voor gevorderden</h3>
<p>De Shelly Plug S Gen3 meet het vermogen, kan belastingen tot 2.500 W aan, is Matter-gecertificeerd en heeft geen hub nodig. Hij valt op door zijn lokale API en de populaire Home Assistant-integratie, waarmee u automatiseringen kunt koppelen aan een vermogensdrempel (bijvoorbeeld een melding als de wasmachine klaar is).</p>
<p><strong>Sterke punten:</strong> lokale bediening, veel automatiseringsopties, functie als wifi-repeater. <strong>Beperkingen:</strong> technischere instellingen, en de grens van 2.500 W sluit grote elektrische kacheltjes uit. Controleer ook de stekkerversie voor uw land. <strong>Voor wie:</strong> Home Assistant-gebruikers en wie fijnmazige automatiseringen wil.</p>
<h3>Shelly Pro 3EM: zicht op de hele woning</h3>
<p>De Shelly Pro 3EM is een energiemeter voor op de DIN-rail, met stroomtangen, die werkt op eenfase- en driefase-aansluitingen. Hij meet in twee richtingen, afname en opwek, en is daardoor nuttig bij zonnepanelen. Hij bestaat in versies van 120 A en 400 A, met een opgegeven nauwkeurigheid van 1 %, en verbindt via wifi of ethernet, lokaal of via de cloud.</p>
<p><strong>Sterke punten:</strong> volledig overzicht van de woning, opvolging van het eigen verbruik van zonnestroom, geschiedenis opgeslagen in het apparaat. <strong>Beperkingen:</strong> installatie in de meterkast, werk voor een erkende installateur. <strong>Voor wie:</strong> huishoudens met zonnepanelen, een warmtepomp of een laadpaal. Onze <a href="/nl/blog/compteur-energie-connecte-comparatif">vergelijking van energiemonitors</a> bespreekt ook oplossingen zonder ingreep in de meterkast.</p>
<h3>Aqara Presence Sensor FP2: alleen bezette kamers verwarmen en verlichten</h3>
<p>De FP2 gebruikt een millimetergolfradar die mensen ook detecteert als ze stilzitten, anders dan klassieke infraroodbewegingsmelders. Hij dekt tot 40 m², kan een kamer in 30 zones verdelen, volgt meerdere personen en werkt via 2,4 GHz-wifi zonder Aqara-hub, met Apple Woning, Alexa, Google Home en Home Assistant.</p>
<p><strong>Sterke punten:</strong> betrouwbare detectie van iemand die leest of werkt, instelbare zones. <strong>Beperkingen:</strong> voeding via USB-kabel, het instellen van zones vraagt zorg. <strong>Voor wie:</strong> wie licht en verwarming wil uitschakelen in kamers die echt leeg zijn.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Apparaat</th><th>Rol</th><th>Connectiviteit</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td>tado Smart Radiator Thermostat X Starter Kit</td><td>Regeling per kamer</td><td>Thread, Matter (Bridge X)</td><td>Waterradiatoren</td></tr>
<tr><td>Netatmo Slimme Thermostaat</td><td>Ketelthermostaat</td><td>Wifi, HomeKit</td><td>Eigen cv-ketel</td></tr>
<tr><td>TP-Link Tapo P110M</td><td>Meting per apparaat</td><td>Wifi, Matter</td><td>Verbruik in kaart brengen</td></tr>
<tr><td>Shelly Plug S Gen3</td><td>Meting en automatisering</td><td>Wifi, Matter, Bluetooth</td><td>Home Assistant</td></tr>
<tr><td>Shelly Pro 3EM</td><td>Meter voor de hele woning</td><td>Wifi, ethernet</td><td>Zonnepanelen, warmtepomp</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Aanwezigheidsdetectie</td><td>2,4 GHz-wifi</td><td>Kamers die af en toe gebruikt worden</td></tr>
</tbody>
</table>
<p>Bekijk de volledige selectie <a href="/nl/energie-domotique/thermostats">slimme thermostaten</a> en <a href="/nl/energie-domotique/compteurs-energie">energiemonitors</a> in onze catalogus.</p>

<h2>Een rekenvoorbeeld in kWh</h2>
<p>Een apparaat dat continu 10 W verbruikt, zoals een decoder of speaker in stand-by, gebruikt 10 W × 8.760 uur, oftewel ongeveer 88 kWh per jaar. Bij een voorbeeldtarief van 0,25 euro per kWh (vervang dit door uw eigen tarief) is dat ongeveer 22 euro per jaar voor één apparaat. Een slimme stekker die deze apparaten 's nachts en bij afwezigheid uitschakelt, haalt daar een flink deel van af.</p>
<p>Voor verwarming geldt dezelfde redenering: verbruikt uw woning 10.000 kWh per jaar voor verwarming, dan komt 1 °C lagere gemiddelde temperatuur volgens de vuistregel van ADEME neer op ongeveer 700 kWh minder. Een regeling die de temperatuur in lege kamers en 's nachts verlaagt, werkt precies op die hefboom.</p>

<h2>Automatiseringen die echt besparen</h2>
<ul>
<li><strong>Nacht- en afwezigheidsprogramma:</strong> de temperatuur verlagen 's nachts en overdag als de woning leeg is.</li>
<li><strong>Open-raamdetectie:</strong> de radiator uitzetten zolang er een raam openstaat om te luchten.</li>
<li><strong>Groepsuitschakeling:</strong> een routine „Ik vertrek” die lampen en de stekkers van stand-byapparaten uitschakelt.</li>
<li><strong>Aanwezigheid per kamer:</strong> licht en bijverwarming uitschakelen als de sensor niemand meer detecteert.</li>
<li><strong>Zonnestroom:</strong> een programmeerbaar apparaat starten wanneer de opwek het verbruik overstijgt, met <a href="/nl/blog/balkonkraftwerk-panneau-solaire-balcon">balkonzonnepanelen</a> of panelen op het dak.</li>
</ul>

<h2>Fouten die u beter vermijdt</h2>
<ul>
<li><strong>Beginnen met verlichting:</strong> leds verbruiken al weinig; de echte winst zit in de verwarming.</li>
<li><strong>Kopen zonder compatibiliteit te controleren:</strong> ketel, warmtepomp, radiatorkranen en stekkertype moeten passen.</li>
<li><strong>Een elektrisch kacheltje op een kleine slimme stekker aansluiten:</strong> respecteer de maximale belasting volgens de fabrikant.</li>
<li><strong>Apps verzamelen:</strong> kies voor Matter of een centrale hub om alles op één plek te beheren.</li>
<li><strong>Geloven in gegarandeerde besparingen:</strong> opgegeven percentages hangen af van de woning; meet vooraf en achteraf.</li>
</ul>

<h2>Installatie en veiligheid</h2>
<p>Slimme stekkers en radiatorknoppen installeert u zonder gereedschap. Een bedrade thermostaat op de ketel of een meter in de meterkast betekent echter werken aan de elektrische installatie: schakel de stroom uit en schakel bij twijfel een erkende installateur in. Sluit nooit een apparaat aan waarvan het vermogen hoger is dan wat de slimme stekker aankan, en vermijd stekkerdozen die achter elkaar zijn gekoppeld.</p>

<h2>Ons oordeel</h2>
<p>Voor de meeste woningen met waterradiatoren is de <strong>tado Smart Radiator Thermostat X Starter Kit</strong> het meest doeltreffende startpunt, omdat hij de grootste verbruikspost aanpakt. Met een cv-ketel en één centrale thermostaat blijft de <strong>Netatmo Slimme Thermostaat</strong> een eenvoudige, betrouwbare keuze. Om met een klein budget te meten is de <strong>Tapo P110M</strong> het toegankelijkst, de <strong>Shelly Plug S Gen3</strong> het flexibelst, en de <strong>Shelly Pro 3EM</strong> geeft het volledige beeld, zeker met zonnepanelen. Meer over verwarming leest u in onze gids <a href="/nl/blog/thermostat-connecte-pompe-chaleur">slimme thermostaat en warmtepomp</a>.</p>`,
  },
  faq: [
    {
      question: {
        fr: "Quel équipement domotique fait le plus économiser d’énergie ?",
        en: "Which smart home device saves the most energy?",
        de: "Welches Smart-Home-Gerät spart am meisten Energie?",
        es: "¿Qué equipo domótico ahorra más energía?",
        it: "Quale dispositivo domotico fa risparmiare più energia?",
        nl: "Welk smart-homeapparaat bespaart de meeste energie?",
      },
      answer: {
        fr: "Le pilotage du chauffage, de loin. Le chauffage représente environ deux tiers de l’énergie des ménages en Europe, et l’ADEME estime qu’1 °C de moins réduit sa consommation d’environ 7 %. Un thermostat connecté ou des têtes thermostatiques pièce par pièce agissent directement sur ce poste.",
        en: "Heating control, by far. Heating accounts for about two-thirds of household energy in Europe, and ADEME estimates that 1 °C lower cuts heating use by about 7%. A smart thermostat or room-by-room smart radiator valves act directly on that item.",
        de: "Mit Abstand die Heizungssteuerung. Die Heizung macht in Europa rund zwei Drittel der Haushaltsenergie aus, und laut ADEME senkt 1 °C weniger den Heizverbrauch um etwa 7 %. Ein smartes Thermostat oder raumweise Heizkörperthermostate setzen genau dort an.",
        es: "El control de la calefacción, con diferencia. La calefacción supone unos dos tercios de la energía de los hogares europeos, y la ADEME estima que 1 °C menos reduce su consumo en torno a un 7 %. Un termostato inteligente o cabezales por habitación actúan justo ahí.",
        it: "La gestione del riscaldamento, di gran lunga. Il riscaldamento vale circa due terzi dell’energia delle famiglie europee, e l’ADEME stima che 1 °C in meno riduca i consumi di circa il 7 %. Un termostato smart o teste termostatiche stanza per stanza agiscono proprio lì.",
        nl: "Verwarmingsregeling, met afstand. Verwarming is goed voor ongeveer twee derde van de huishoudelijke energie in Europa, en volgens ADEME verlaagt 1 °C minder het verbruik met ongeveer 7 %. Een slimme thermostaat of slimme radiatorknoppen per kamer werken precies daarop.",
      },
    },
    {
      question: {
        fr: "Une prise connectée consomme-t-elle elle-même de l’électricité ?",
        en: "Does a smart plug use electricity itself?",
        de: "Verbraucht eine smarte Steckdose selbst Strom?",
        es: "¿Un enchufe inteligente consume electricidad por sí mismo?",
        it: "Una presa smart consuma elettricità di per sé?",
        nl: "Verbruikt een slimme stekker zelf stroom?",
      },
      answer: {
        fr: "Oui, un peu, car elle reste connectée en permanence. Cette consommation est généralement bien inférieure à celle des appareils en veille qu’elle permet de couper. Consultez la fiche technique du fabricant et réservez les prises aux appareils dont la veille ou l’usage le justifie.",
        en: "Yes, a little, because it stays connected all the time. That draw is usually far lower than the standby consumption of the devices it lets you switch off. Check the manufacturer’s datasheet and use plugs on devices whose standby or usage justifies it.",
        de: "Ja, ein wenig, weil sie ständig verbunden bleibt. Dieser Verbrauch liegt meist deutlich unter dem Standby-Verbrauch der Geräte, die sie abschaltet. Prüfen Sie das Datenblatt des Herstellers und setzen Sie Steckdosen dort ein, wo Standby oder Nutzung es rechtfertigen.",
        es: "Sí, un poco, porque permanece conectado siempre. Ese consumo suele ser muy inferior al de los aparatos en espera que permite apagar. Consulte la ficha técnica del fabricante y reserve los enchufes para los aparatos cuyo consumo en espera o uso lo justifique.",
        it: "Sì, un po’, perché resta sempre connessa. Questo consumo è di solito molto inferiore a quello degli apparecchi in standby che permette di spegnere. Consultate la scheda tecnica del produttore e usate le prese sugli apparecchi il cui standby o utilizzo lo giustifica.",
        nl: "Ja, een beetje, omdat hij altijd verbonden blijft. Dat verbruik ligt meestal ver onder het stand-byverbruik van de apparaten die u ermee uitschakelt. Raadpleeg de specificaties van de fabrikant en gebruik stekkers bij apparaten waarvan het stand-byverbruik of gebruik het rechtvaardigt.",
      },
    },
    {
      question: {
        fr: "Faut-il un électricien pour installer ces équipements ?",
        en: "Do I need an electrician to install these devices?",
        de: "Brauche ich für die Installation eine Elektrofachkraft?",
        es: "¿Hace falta un electricista para instalar estos equipos?",
        it: "Serve un elettricista per installare questi dispositivi?",
        nl: "Heb ik een installateur nodig voor deze apparaten?",
      },
      answer: {
        fr: "Pas pour les prises connectées, les têtes thermostatiques ni le capteur de présence, qui s’installent sans outil. Un thermostat filaire raccordé à la chaudière et un compteur placé dans le tableau électrique, comme le Shelly Pro 3EM, demandent en revanche une intervention électrique : faites appel à un électricien qualifié en cas de doute.",
        en: "Not for smart plugs, radiator valves or the presence sensor, which install without tools. A wired thermostat connected to the boiler and a meter fitted in the consumer unit, such as the Shelly Pro 3EM, do involve electrical work: call a qualified electrician if in doubt.",
        de: "Nicht für smarte Steckdosen, Heizkörperthermostate oder den Präsenzsensor, die ohne Werkzeug montiert werden. Ein verdrahtetes Thermostat am Kessel und ein Messgerät im Verteilerkasten wie der Shelly Pro 3EM erfordern dagegen Elektroarbeiten: Beauftragen Sie im Zweifel eine Elektrofachkraft.",
        es: "No para enchufes inteligentes, cabezales termostáticos ni el sensor de presencia, que se instalan sin herramientas. Un termostato cableado a la caldera y un medidor en el cuadro eléctrico, como el Shelly Pro 3EM, sí implican trabajo eléctrico: ante la duda, recurra a un electricista cualificado.",
        it: "Non per prese smart, teste termostatiche o sensore di presenza, che si installano senza attrezzi. Un termostato cablato alla caldaia e un misuratore nel quadro elettrico, come lo Shelly Pro 3EM, richiedono invece un intervento elettrico: nel dubbio rivolgetevi a un elettricista qualificato.",
        nl: "Niet voor slimme stekkers, radiatorknoppen of de aanwezigheidssensor, die u zonder gereedschap installeert. Een bedrade thermostaat op de ketel en een meter in de meterkast, zoals de Shelly Pro 3EM, vragen wel elektrisch werk: schakel bij twijfel een erkende installateur in.",
      },
    },
    {
      question: {
        fr: "Matter est-il indispensable pour économiser de l’énergie ?",
        en: "Is Matter essential for saving energy?",
        de: "Ist Matter zum Energiesparen unverzichtbar?",
        es: "¿Es imprescindible Matter para ahorrar energía?",
        it: "Matter è indispensabile per risparmiare energia?",
        nl: "Is Matter onmisbaar om energie te besparen?",
      },
      answer: {
        fr: "Non, mais il simplifie beaucoup les choses. Matter permet de faire travailler ensemble un thermostat, des prises et des capteurs de marques différentes dans une seule application (Apple Maison, Google Home, Alexa ou SmartThings), ce qui facilite les automatisations qui coupent chauffage et appareils au bon moment.",
        en: "No, but it makes things much simpler. Matter lets a thermostat, plugs and sensors from different brands work together in a single app (Apple Home, Google Home, Alexa or SmartThings), which makes it easier to build automations that switch heating and appliances off at the right time.",
        de: "Nein, aber es vereinfacht vieles. Matter lässt Thermostat, Steckdosen und Sensoren verschiedener Marken in einer einzigen App (Apple Home, Google Home, Alexa oder SmartThings) zusammenarbeiten und erleichtert so Automationen, die Heizung und Geräte zur richtigen Zeit abschalten.",
        es: "No, pero simplifica mucho. Matter permite que un termostato, enchufes y sensores de marcas distintas trabajen juntos en una sola app (Apple Casa, Google Home, Alexa o SmartThings), lo que facilita las automatizaciones que apagan calefacción y aparatos en el momento justo.",
        it: "No, ma semplifica molto. Matter fa lavorare insieme termostato, prese e sensori di marche diverse in un’unica app (Apple Casa, Google Home, Alexa o SmartThings), rendendo più facili le automazioni che spengono riscaldamento e apparecchi al momento giusto.",
        nl: "Nee, maar het maakt veel eenvoudiger. Met Matter werken een thermostaat, stekkers en sensoren van verschillende merken samen in één app (Apple Woning, Google Home, Alexa of SmartThings), wat automatiseringen vergemakkelijkt die verwarming en apparaten op het juiste moment uitschakelen.",
      },
    },
    {
      question: {
        fr: "Comment savoir combien j’économise réellement ?",
        en: "How can I tell how much I am really saving?",
        de: "Wie erkenne ich, wie viel ich wirklich spare?",
        es: "¿Cómo sé cuánto ahorro realmente?",
        it: "Come capisco quanto risparmio davvero?",
        nl: "Hoe weet ik hoeveel ik echt bespaar?",
      },
      answer: {
        fr: "Mesurez avant et après, en kWh. Relevez votre consommation sur votre compteur ou avec un compteur connecté pendant quelques semaines, installez l’équipement, puis comparez des périodes aux températures extérieures proches. Multipliez ensuite les kWh économisés par le prix du kWh de votre contrat.",
        en: "Measure before and after, in kWh. Record your consumption on your meter or with an energy monitor for a few weeks, install the device, then compare periods with similar outdoor temperatures. Multiply the kWh saved by the price per kWh in your contract.",
        de: "Messen Sie vorher und nachher, in kWh. Erfassen Sie Ihren Verbrauch einige Wochen lang am Zähler oder mit einem Energiemonitor, installieren Sie das Gerät und vergleichen Sie Zeiträume mit ähnlichen Außentemperaturen. Multiplizieren Sie die eingesparten kWh mit dem kWh-Preis Ihres Vertrags.",
        es: "Mida antes y después, en kWh. Anote su consumo en el contador o con un medidor conectado durante unas semanas, instale el equipo y compare periodos con temperaturas exteriores parecidas. Después multiplique los kWh ahorrados por el precio del kWh de su contrato.",
        it: "Misurate prima e dopo, in kWh. Annotate i consumi dal contatore o con un misuratore connesso per qualche settimana, installate il dispositivo e confrontate periodi con temperature esterne simili. Moltiplicate poi i kWh risparmiati per il prezzo del kWh del vostro contratto.",
        nl: "Meet vooraf en achteraf, in kWh. Noteer uw verbruik een paar weken via de meter of een energiemonitor, installeer het apparaat en vergelijk periodes met vergelijkbare buitentemperaturen. Vermenigvuldig daarna de bespaarde kWh met de kWh-prijs uit uw contract.",
      },
    },
  ],
}
