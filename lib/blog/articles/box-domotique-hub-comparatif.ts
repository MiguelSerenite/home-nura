import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'box-domotique-hub-comparatif',
  category: 'comparatifs',
  pillar: 'energie-domotique',
  relatedSlugs: ['maison-connectee-matter-thread-2026', 'guide-domotique-economie-energie-2026', 'eclairage-connecte-comparatif'],
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  readingTime: 9,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1752262167753-37a0ec83f614?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: "Box domotique blanche posée sur un meuble en bois à côté d'une télécommande et d'une plante verte",
        en: 'White smart home hub on a wooden side table next to a remote control and a houseplant',
        de: 'Weiße Smart-Home-Zentrale auf einem Holzmöbel neben einer Fernbedienung und einer Zimmerpflanze',
        es: 'Hub domótico blanco sobre un mueble de madera junto a un mando a distancia y una planta',
        it: 'Hub domotico bianco su un mobile in legno accanto a un telecomando e a una pianta',
        nl: 'Witte smart-home-hub op een houten meubel naast een afstandsbediening en een kamerplant',
      },
    },
  ],
  title: {
    fr: 'Box Domotique 2026 : Comparatif des Meilleurs Hubs (Matter, Zigbee, Z-Wave)',
    en: 'Best Smart Home Hub 2026: Matter, Zigbee and Z-Wave Hubs Compared',
    de: 'Beste Smart-Home-Zentrale 2026: Matter-, Zigbee- und Z-Wave-Hubs im Vergleich',
    es: 'Mejor Hub Domótico 2026: Comparativa de Centrales Matter, Zigbee y Z-Wave',
    it: 'Miglior Hub Domotico 2026: Confronto tra Centraline Matter, Zigbee e Z-Wave',
    nl: 'Beste Smart-Home-Hub 2026: Matter-, Zigbee- en Z-Wave-Hubs Vergeleken',
  },
  excerpt: {
    fr: "Homey Pro, Home Assistant Green, Aqara Hub M3, IKEA Dirigera, Hue Bridge Pro ou Jeedom Atlas : quelle box domotique choisir en 2026 ? Radios Zigbee, Z-Wave, Thread et Matter, fonctionnement local ou cloud, facilité d'usage et puissance des automatisations comparés.",
    en: 'Homey Pro, Home Assistant Green, Aqara Hub M3, IKEA Dirigera, Hue Bridge Pro or Jeedom Atlas: which smart home hub should you choose in 2026? Zigbee, Z-Wave, Thread and Matter radios, local vs cloud control, ease of use and automation power compared.',
    de: 'Homey Pro, Home Assistant Green, Aqara Hub M3, IKEA Dirigera, Hue Bridge Pro oder Jeedom Atlas: Welche Smart-Home-Zentrale lohnt sich 2026? Zigbee-, Z-Wave-, Thread- und Matter-Funk, lokale oder Cloud-Steuerung, Bedienkomfort und Automationen im Vergleich.',
    es: 'Homey Pro, Home Assistant Green, Aqara Hub M3, IKEA Dirigera, Hue Bridge Pro o Jeedom Atlas: ¿qué hub domótico elegir en 2026? Comparamos radios Zigbee, Z-Wave, Thread y Matter, funcionamiento local o en la nube, facilidad de uso y potencia de las automatizaciones.',
    it: "Homey Pro, Home Assistant Green, Aqara Hub M3, IKEA Dirigera, Hue Bridge Pro o Jeedom Atlas: quale hub domotico scegliere nel 2026? Confronto tra radio Zigbee, Z-Wave, Thread e Matter, funzionamento locale o cloud, facilità d'uso e potenza delle automazioni.",
    nl: 'Homey Pro, Home Assistant Green, Aqara Hub M3, IKEA Dirigera, Hue Bridge Pro of Jeedom Atlas: welke smart-home-hub kies je in 2026? Zigbee-, Z-Wave-, Thread- en Matter-radio’s, lokale of cloudbediening, gebruiksgemak en automatiseringen vergeleken.',
  },
  content: {
    fr: `<p>La meilleure box domotique en 2026 est, pour la plupart des foyers, la <strong>Homey Pro (Early 2023)</strong> : elle réunit Zigbee, Z-Wave, Thread, Matter, infrarouge et 433 MHz dans un seul boîtier, fonctionne en local et reste accessible aux non-spécialistes. Si vous cherchez la puissance maximale et un logiciel libre, le <strong>Home Assistant Green</strong> s'impose ; pour un budget plus serré et un écosystème déjà Aqara, l'<strong>Aqara Hub M3</strong> est le choix le plus rationnel.</p>
<p>Ce comparatif s'appuie sur les fiches techniques des fabricants, les analyses de la presse spécialisée et les retours d'acheteurs vérifiés. Il passe en revue six box réellement disponibles en Europe, explique les différences entre protocoles radio et vous aide à éviter les erreurs les plus coûteuses. Pour les bases du standard Matter et du réseau Thread, consultez aussi notre guide <a href="/fr/blog/maison-connectee-matter-thread-2026">Maison connectée : Matter et Thread en 2026</a>.</p>

<h2>À quoi sert une box domotique en 2026 ?</h2>
<p>Une box domotique (ou « hub ») est le cerveau de la maison connectée. Elle parle aux capteurs, ampoules, prises, thermostats et volets, puis exécute vos scénarios : éteindre tout en partant, lancer le chauffage selon la météo, couper une prise en cas de fuite d'eau. Sans hub, chaque marque impose son application et ses limites ; avec un hub, tout se pilote depuis un seul endroit.</p>
<p>L'arrivée de <strong>Matter</strong> a changé la donne : ce standard commun permet à des appareils de marques différentes de fonctionner ensemble. Mais Matter ne remplace pas le hub. Il faut toujours un « contrôleur » qui orchestre les automatisations, et souvent un <strong>routeur de bordure Thread</strong> pour les appareils Matter sans fil sur batterie. Les box présentées ici remplissent ces rôles à des degrés très différents.</p>

<h2>Les critères pour bien choisir sa box domotique</h2>
<h3>Les radios intégrées</h3>
<p>C'est le critère numéro un, car il détermine les appareils compatibles :</p>
<ul>
<li><strong>Zigbee</strong> : le protocole le plus répandu pour les capteurs, ampoules et prises économiques (Aqara, IKEA, Philips Hue, Sonoff…).</li>
<li><strong>Z-Wave</strong> : très présent sur les modules encastrés, serrures et micromodules pour volets ; fréquence dédiée en Europe, donc peu d'interférences avec le Wi-Fi.</li>
<li><strong>Thread</strong> : le réseau maillé basse consommation sur lequel repose une grande partie des nouveaux appareils Matter.</li>
<li><strong>Matter</strong> : la couche d'interopérabilité ; une box peut être « contrôleur Matter » (elle pilote des appareils Matter) et/ou « pont Matter » (elle expose ses propres appareils à d'autres plateformes).</li>
<li><strong>Infrarouge et 433 MHz</strong> : utiles pour piloter climatiseurs, téléviseurs ou anciens volets et prises radio.</li>
</ul>
<h3>Local ou cloud</h3>
<p>Une box qui exécute ses automatisations <strong>en local</strong> continue de fonctionner quand Internet tombe, réagit plus vite et limite les données envoyées sur des serveurs distants. Les solutions dépendantes du cloud sont plus simples à mettre en route, mais deviennent inutilisables en cas de panne de connexion ou d'arrêt du service.</p>
<h3>Facilité d'usage contre puissance</h3>
<p>Plus une box est ouverte, plus elle demande de temps d'apprentissage. Demandez-vous honnêtement si vous voulez une application clé en main ou si vous êtes prêt à configurer des intégrations, des tableaux de bord et des scripts.</p>
<h3>Automatisations</h3>
<p>Vérifiez la logique proposée : simples règles « si… alors… », conditions multiples, variables, plages horaires, présence des occupants. C'est là que se fait la différence au quotidien, notamment pour les économies d'énergie détaillées dans notre <a href="/fr/blog/guide-domotique-economie-energie-2026">guide domotique et économies d'énergie</a>.</p>
<h3>Écosystème et pérennité</h3>
<p>Une box dépend des mises à jour de son éditeur. Privilégiez les acteurs qui publient régulièrement des correctifs et documentent clairement leurs protocoles.</p>

<h2>Les 6 meilleures box domotiques en 2026</h2>

<h3>1. Homey Pro (Early 2023) — le meilleur choix global</h3>
<p>La <strong>Homey Pro (Early 2023)</strong> d'Athom est la box la plus polyvalente du marché grand public. Elle intègre d'origine le Wi-Fi double bande, le Bluetooth Low Energy, <strong>Zigbee 3.0, Z-Wave, Thread, Matter, l'infrarouge et le 433 MHz</strong>. La radio Thread a été activée par une mise à jour gratuite, ce qui permet d'ajouter directement des appareils Matter sur Thread sans routeur supplémentaire.</p>
<p><strong>Points forts :</strong> compatibilité quasi universelle, traitement local des automatisations, application soignée, système de « Flows » visuels facile à prendre en main et catalogue d'applications de marques très fourni. Le design discret s'intègre dans un salon.</p>
<p><strong>Limites :</strong> positionnement premium, et certaines fonctions avancées demandent un temps d'adaptation. L'écosystème d'applications, bien qu'étendu, reste moins vaste que celui de Home Assistant.</p>
<p><strong>Pour qui :</strong> les foyers qui veulent tout centraliser — y compris du Z-Wave et de l'infrarouge — sans devenir administrateurs système.</p>

<h3>2. Home Assistant Green — le plus puissant et le plus ouvert</h3>
<p>Le <strong>Home Assistant Green</strong> est un boîtier prêt à l'emploi qui fait tourner Home Assistant, la plateforme domotique libre la plus utilisée au monde, avec plus de 2 000 intégrations. Il se branche en Ethernet et ne possède <strong>aucune radio domotique intégrée</strong> : il faut ajouter le <strong>Home Assistant Connect ZBT-2</strong> (Zigbee et Thread) et/ou le <strong>Connect ZWA-2</strong> (Z-Wave) via USB.</p>
<p><strong>Points forts :</strong> fonctionnement 100 % local, automatisations et scripts sans limite, tableaux de bord personnalisables, suivi énergétique très complet, communauté immense. L'abonnement Home Assistant Cloud est facultatif (accès à distance simplifié, assistants vocaux).</p>
<p><strong>Limites :</strong> courbe d'apprentissage réelle ; les adaptateurs radio s'ajoutent au budget ; la configuration avancée passe parfois par des fichiers YAML.</p>
<p><strong>Pour qui :</strong> les passionnés et les bricoleurs qui veulent tout contrôler et intégrer des équipements très variés (onduleur solaire, compteur Linky via module, borne de recharge…).</p>

<h3>3. Aqara Hub M3 — le meilleur rapport qualité-prix</h3>
<p>L'<strong>Aqara Hub M3</strong> est un hub multiprotocole : <strong>Zigbee, Thread (routeur de bordure), contrôleur Matter</strong>, Wi-Fi double bande, Bluetooth et un émetteur <strong>infrarouge à 360°</strong>. Il accepte le <strong>PoE</strong> (alimentation par câble Ethernet) et intègre un haut-parleur pour les alertes. Il sert aussi de pont Matter pour les accessoires Zigbee Aqara, qui deviennent visibles dans Apple Maison, Google Home, Alexa ou SmartThings.</p>
<p><strong>Points forts :</strong> automatisations exécutées localement, très bon rapport polyvalence/tarif, pilotage des climatiseurs infrarouges via Matter, installation simple.</p>
<p><strong>Limites :</strong> pas de Z-Wave ; l'application Aqara Home est surtout pensée pour l'écosystème de la marque.</p>
<p><strong>Pour qui :</strong> ceux qui partent de zéro avec des capteurs Aqara ou qui veulent un pont Matter fiable vers Apple, Google ou Amazon.</p>

<h3>4. IKEA Dirigera — l'entrée de gamme la plus simple</h3>
<p>Le <strong>hub IKEA Dirigera</strong> gère les produits Zigbee d'IKEA et sert de pont Matter. Depuis la mise à jour de novembre 2025, il fonctionne aussi comme <strong>contrôleur Matter et routeur de bordure Thread</strong>, ce qui le prépare à la nouvelle gamme Matter-over-Thread de l'enseigne.</p>
<p><strong>Points forts :</strong> application IKEA Home smart très simple, installation en quelques minutes, tarif d'entrée de gamme.</p>
<p><strong>Limites :</strong> automatisations basiques, pas de Z-Wave ni d'infrarouge, compatibilité centrée sur IKEA.</p>
<p><strong>Pour qui :</strong> les débutants équipés en ampoules, stores et télécommandes IKEA.</p>

<h3>5. Philips Hue Bridge Pro — la référence pour l'éclairage</h3>
<p>Le <strong>Philips Hue Bridge Pro</strong> n'est pas une box généraliste mais le pont d'éclairage le plus abouti. Il pilote en <strong>Zigbee jusqu'à 150 lumières et 50 accessoires</strong>, se connecte en Ethernet ou en Wi-Fi et expose ses éclairages aux plateformes Matter. La fonction <strong>MotionAware</strong> transforme des lampes Hue compatibles en détecteurs de mouvement en analysant les variations du signal radio.</p>
<p><strong>Points forts :</strong> fiabilité, capacité élevée, scènes lumineuses très riches, compatibilité Apple Maison, Alexa, Google Home et SmartThings.</p>
<p><strong>Limites :</strong> limité à l'univers de l'éclairage Hue et de ses accessoires ; ne remplace pas un hub généraliste.</p>
<p><strong>Pour qui :</strong> les maisons avec beaucoup de points lumineux Hue. Pour aller plus loin, voyez notre <a href="/fr/blog/eclairage-connecte-comparatif">comparatif de l'éclairage connecté</a>.</p>

<h3>6. Jeedom Atlas — la box libre française</h3>
<p>La <strong>Jeedom Atlas</strong> embarque le logiciel libre Jeedom, conçu en France. On choisit à l'achat sa radio intégrée : <strong>Zigbee, Z-Wave ou EnOcean</strong>. Elle dispose d'Ethernet Gigabit, du Wi-Fi double bande, du Bluetooth 5.0, de 4 Go de mémoire vive, de 32 Go de stockage eMMC et de ports USB pour ajouter d'autres clés radio.</p>
<p><strong>Points forts :</strong> fonctionnement local sans cloud obligatoire, nombreux plugins (dont certains payants), bonne prise en charge des équipements courants en France, pack de services inclus au départ.</p>
<p><strong>Limites :</strong> une seule radio domotique d'origine, interface moins moderne, configuration plus technique que Homey.</p>
<p><strong>Pour qui :</strong> les utilisateurs francophones qui veulent une solution ouverte et un support en français, notamment en EnOcean ou Z-Wave.</p>

<h2>Tableau comparatif des box domotiques</h2>
<table>
<thead>
<tr><th>Modèle</th><th>Radios intégrées</th><th>Matter / Thread</th><th>Fonctionnement</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td>Homey Pro (Early 2023)</td><td>Zigbee, Z-Wave, IR, 433 MHz, BLE, Wi-Fi</td><td>Contrôleur Matter, Thread intégré</td><td>Local</td><td>Tout centraliser simplement</td></tr>
<tr><td>Home Assistant Green</td><td>Aucune (adaptateurs ZBT-2 / ZWA-2 en option)</td><td>Oui avec ZBT-2</td><td>Local, logiciel libre</td><td>Passionnés, puissance maximale</td></tr>
<tr><td>Aqara Hub M3</td><td>Zigbee, IR, BLE, Wi-Fi, PoE</td><td>Contrôleur Matter, routeur Thread</td><td>Local</td><td>Écosystème Aqara, pont Matter</td></tr>
<tr><td>IKEA Dirigera</td><td>Zigbee</td><td>Contrôleur Matter, routeur Thread</td><td>Local + application</td><td>Débutants IKEA</td></tr>
<tr><td>Philips Hue Bridge Pro</td><td>Zigbee</td><td>Pont Matter</td><td>Local</td><td>Grandes installations Hue</td></tr>
<tr><td>Jeedom Atlas</td><td>Zigbee, Z-Wave ou EnOcean (au choix)</td><td>Selon plugins</td><td>Local, logiciel libre</td><td>Domotique ouverte en français</td></tr>
</tbody>
</table>

<h2>Et l'Apple TV ou le HomePod comme hub ?</h2>
<p>Si votre foyer vit dans l'écosystème Apple, l'<strong>Apple TV 4K</strong> (version Wi-Fi + Ethernet) et le <strong>HomePod mini</strong> servent de concentrateur Maison : ils sont routeurs de bordure Thread et contrôleurs Matter, et exécutent les automatisations de l'app Maison. C'est une solution élégante pour des appareils Matter et HomeKit, mais elle ne gère ni le Zigbee ni le Z-Wave en direct et offre des automatisations moins fines qu'une vraie box domotique. Une combinaison fréquente consiste à garder l'Apple TV pour Thread et la voix, et à confier la logique avancée à Homey ou Home Assistant.</p>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Acheter un hub sans vérifier ses appareils existants :</strong> listez vos capteurs et modules (Zigbee, Z-Wave, Wi-Fi, 433 MHz) avant de choisir. Un parc Z-Wave exclut d'office Aqara, IKEA et Hue.</li>
<li><strong>Multiplier les réseaux Thread séparés :</strong> plusieurs routeurs de bordure de marques différentes peuvent créer des réseaux distincts. Vérifiez que vos contrôleurs partagent bien les identifiants Thread.</li>
<li><strong>Croire que Matter couvre tout :</strong> toutes les catégories d'appareils ne sont pas encore prises en charge par toutes les plateformes, et certaines fonctions restent propres à l'application du fabricant.</li>
<li><strong>Placer la box dans un placard métallique :</strong> les radios 2,4 GHz et Z-Wave ont besoin d'un emplacement central et dégagé, loin du routeur Wi-Fi si possible.</li>
<li><strong>Négliger les sauvegardes :</strong> sur Home Assistant ou Jeedom, programmez des sauvegardes régulières hors de la box.</li>
</ul>

<h2>Installation et bonnes pratiques</h2>
<p>Branchez de préférence la box en Ethernet pour une connexion stable. Ajoutez d'abord les appareils alimentés sur secteur (prises, modules encastrés) : ils servent de relais au réseau maillé Zigbee, Z-Wave ou Thread et améliorent la portée des capteurs sur pile. Pour les modules à encastrer dans un tableau ou derrière un interrupteur, faites appel à un électricien qualifié et coupez toujours le courant au disjoncteur. Activez la double authentification sur les comptes associés et appliquez les mises à jour du firmware dès leur disponibilité.</p>

<h2>Verdict : quelle box domotique choisir ?</h2>
<p>La <strong>Homey Pro (Early 2023)</strong> est la meilleure box pour la majorité des foyers grâce à ses nombreuses radios et à son exécution locale. Le <strong>Home Assistant Green</strong> est imbattable en puissance pour qui accepte d'apprendre. L'<strong>Aqara Hub M3</strong> offre le meilleur équilibre entre fonctions et budget, tandis que l'<strong>IKEA Dirigera</strong> suffit pour débuter. Le <strong>Philips Hue Bridge Pro</strong> reste incontournable pour un grand parc d'éclairage Hue, et la <strong>Jeedom Atlas</strong> séduira les amateurs de logiciel libre francophone. Retrouvez toutes les références dans notre rubrique <a href="/fr/energie-domotique/hubs-domotique">hubs domotiques</a>.</p>`,

    en: `<p>For most households, the best smart home hub in 2026 is the <strong>Homey Pro (Early 2023)</strong>: it combines Zigbee, Z-Wave, Thread, Matter, infrared and 433 MHz in one box, runs locally and stays approachable for non-experts. If you want maximum power and open-source software, the <strong>Home Assistant Green</strong> is the one to beat; on a tighter budget, or if you already own Aqara gear, the <strong>Aqara Hub M3</strong> is the smartest buy.</p>
<p>This comparison is based on manufacturer specifications, independent reviews in the specialist press and verified buyer feedback. It covers six hubs genuinely available in Europe, explains how the radio protocols differ and helps you avoid the most expensive mistakes. For the basics of Matter and Thread, see our guide <a href="/en/blog/maison-connectee-matter-thread-2026">Smart home: Matter and Thread in 2026</a>.</p>

<h2>What does a smart home hub do in 2026?</h2>
<p>A smart home hub is the brain of the connected home. It talks to sensors, bulbs, plugs, thermostats and blinds, then runs your routines: switch everything off when you leave, start the heating based on the weather forecast, cut a plug if a water leak is detected. Without a hub, every brand forces its own app and limitations; with one, everything is controlled from a single place.</p>
<p><strong>Matter</strong> has changed the picture: this shared standard lets devices from different brands work together. But Matter does not replace the hub. You still need a "controller" to orchestrate automations, and often a <strong>Thread border router</strong> for battery-powered wireless Matter devices. The hubs below fill these roles to very different degrees.</p>

<h2>How to choose a smart home hub</h2>
<h3>Built-in radios</h3>
<p>This is the number one criterion, because it decides which devices will work:</p>
<ul>
<li><strong>Zigbee</strong>: the most widespread protocol for affordable sensors, bulbs and plugs (Aqara, IKEA, Philips Hue, Sonoff…).</li>
<li><strong>Z-Wave</strong>: common on in-wall modules, locks and blind controllers; it uses a dedicated frequency in Europe, so there is little interference with Wi-Fi.</li>
<li><strong>Thread</strong>: the low-power mesh network behind many new Matter devices.</li>
<li><strong>Matter</strong>: the interoperability layer; a hub can be a "Matter controller" (it runs Matter devices) and/or a "Matter bridge" (it exposes its own devices to other platforms).</li>
<li><strong>Infrared and 433 MHz</strong>: handy for air conditioners, TVs or older radio blinds and sockets.</li>
</ul>
<h3>Local vs cloud</h3>
<p>A hub that runs automations <strong>locally</strong> keeps working when the internet goes down, responds faster and sends less data to remote servers. Cloud-dependent systems are easier to set up, but stop working during an outage or if the service is shut down.</p>
<h3>Ease of use vs power</h3>
<p>The more open a hub is, the more time it takes to learn. Be honest about whether you want a ready-made app or are happy to configure integrations, dashboards and scripts.</p>
<h3>Automations</h3>
<p>Check the logic on offer: simple "if… then…" rules, multiple conditions, variables, time windows, presence detection. That is where the daily difference lies, especially for the energy savings covered in our <a href="/en/blog/guide-domotique-economie-energie-2026">smart home energy-saving guide</a>.</p>
<h3>Ecosystem and longevity</h3>
<p>A hub depends on its maker's updates. Favour companies that ship regular fixes and document their protocols clearly.</p>

<h2>The 6 best smart home hubs in 2026</h2>

<h3>1. Homey Pro (Early 2023) — best overall</h3>
<p>Athom's <strong>Homey Pro (Early 2023)</strong> is the most versatile consumer hub on the market. Out of the box it includes dual-band Wi-Fi, Bluetooth Low Energy, <strong>Zigbee 3.0, Z-Wave, Thread, Matter, infrared and 433 MHz</strong>. The Thread radio was switched on by a free update, so Matter-over-Thread devices can join directly without an extra router.</p>
<p><strong>Strengths:</strong> near-universal compatibility, local processing of automations, a polished app, easy visual "Flows" and a large catalogue of brand apps. Its discreet design fits into a living room.</p>
<p><strong>Limitations:</strong> premium positioning, and some advanced features take time to master. The app ecosystem is broad but smaller than Home Assistant's.</p>
<p><strong>Who it's for:</strong> households that want to centralise everything — Z-Wave and infrared included — without becoming system administrators.</p>

<h3>2. Home Assistant Green — most powerful and open</h3>
<p>The <strong>Home Assistant Green</strong> is a ready-to-use box running Home Assistant, the world's most popular open-source home automation platform, with more than 2,000 integrations. It connects over Ethernet and has <strong>no built-in smart home radios</strong>: you add the <strong>Home Assistant Connect ZBT-2</strong> (Zigbee and Thread) and/or the <strong>Connect ZWA-2</strong> (Z-Wave) over USB.</p>
<p><strong>Strengths:</strong> fully local operation, unlimited automations and scripts, customisable dashboards, excellent energy monitoring and a huge community. The Home Assistant Cloud subscription is optional (easy remote access, voice assistants).</p>
<p><strong>Limitations:</strong> a real learning curve; radio adapters add to the cost; advanced setup sometimes involves YAML files.</p>
<p><strong>Who it's for:</strong> enthusiasts and tinkerers who want full control and need to integrate very diverse equipment (solar inverters, smart meters, EV chargers…).</p>

<h3>3. Aqara Hub M3 — best value</h3>
<p>The <strong>Aqara Hub M3</strong> is a multi-protocol hub: <strong>Zigbee, Thread border router, Matter controller</strong>, dual-band Wi-Fi, Bluetooth and a <strong>360° infrared blaster</strong>. It supports <strong>PoE</strong> (power over Ethernet) and has a built-in speaker for alerts. It also acts as a Matter bridge for Aqara Zigbee accessories, making them visible in Apple Home, Google Home, Alexa or SmartThings.</p>
<p><strong>Strengths:</strong> locally executed automations, strong versatility for its tier, control of infrared air conditioners through Matter, simple setup.</p>
<p><strong>Limitations:</strong> no Z-Wave; the Aqara Home app is mainly built around the brand's own ecosystem.</p>
<p><strong>Who it's for:</strong> people starting from scratch with Aqara sensors, or anyone wanting a reliable Matter bridge to Apple, Google or Amazon.</p>

<h3>4. IKEA Dirigera — simplest entry-level hub</h3>
<p>The <strong>IKEA Dirigera hub</strong> manages IKEA's Zigbee products and works as a Matter bridge. Since the November 2025 update it also acts as a <strong>Matter controller and Thread border router</strong>, readying it for IKEA's new Matter-over-Thread range.</p>
<p><strong>Strengths:</strong> very simple IKEA Home smart app, setup in minutes, entry-level pricing.</p>
<p><strong>Limitations:</strong> basic automations, no Z-Wave or infrared, compatibility centred on IKEA.</p>
<p><strong>Who it's for:</strong> beginners with IKEA bulbs, blinds and remotes.</p>

<h3>5. Philips Hue Bridge Pro — the lighting benchmark</h3>
<p>The <strong>Philips Hue Bridge Pro</strong> is not a general-purpose hub but the most capable lighting bridge around. It runs <strong>up to 150 lights and 50 accessories over Zigbee</strong>, connects via Ethernet or Wi-Fi and exposes its lights to Matter platforms. <strong>MotionAware</strong> turns compatible Hue lights into motion sensors by analysing changes in the radio signal.</p>
<p><strong>Strengths:</strong> reliability, high capacity, rich light scenes, compatibility with Apple Home, Alexa, Google Home and SmartThings.</p>
<p><strong>Limitations:</strong> limited to Hue lighting and accessories; it does not replace a general-purpose hub.</p>
<p><strong>Who it's for:</strong> homes with lots of Hue lights. To go further, see our <a href="/en/blog/eclairage-connecte-comparatif">smart lighting comparison</a>.</p>

<h3>6. Jeedom Atlas — the French open-source box</h3>
<p>The <strong>Jeedom Atlas</strong> runs Jeedom, open-source software developed in France. You choose its built-in radio when buying: <strong>Zigbee, Z-Wave or EnOcean</strong>. It has Gigabit Ethernet, dual-band Wi-Fi, Bluetooth 5.0, 4 GB of RAM, 32 GB of eMMC storage and USB ports for additional radio sticks.</p>
<p><strong>Strengths:</strong> local operation with no mandatory cloud, many plugins (some paid), good support for equipment common in France, a service pack included at the start.</p>
<p><strong>Limitations:</strong> only one smart home radio out of the box, a less modern interface, more technical setup than Homey.</p>
<p><strong>Who it's for:</strong> users who want an open platform, particularly for EnOcean or Z-Wave installations.</p>

<h2>Smart home hub comparison table</h2>
<table>
<thead>
<tr><th>Model</th><th>Built-in radios</th><th>Matter / Thread</th><th>Operation</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Homey Pro (Early 2023)</td><td>Zigbee, Z-Wave, IR, 433 MHz, BLE, Wi-Fi</td><td>Matter controller, built-in Thread</td><td>Local</td><td>Centralising everything simply</td></tr>
<tr><td>Home Assistant Green</td><td>None (optional ZBT-2 / ZWA-2 adapters)</td><td>Yes with ZBT-2</td><td>Local, open source</td><td>Enthusiasts, maximum power</td></tr>
<tr><td>Aqara Hub M3</td><td>Zigbee, IR, BLE, Wi-Fi, PoE</td><td>Matter controller, Thread border router</td><td>Local</td><td>Aqara ecosystem, Matter bridge</td></tr>
<tr><td>IKEA Dirigera</td><td>Zigbee</td><td>Matter controller, Thread border router</td><td>Local + app</td><td>IKEA beginners</td></tr>
<tr><td>Philips Hue Bridge Pro</td><td>Zigbee</td><td>Matter bridge</td><td>Local</td><td>Large Hue setups</td></tr>
<tr><td>Jeedom Atlas</td><td>Zigbee, Z-Wave or EnOcean (your choice)</td><td>Depends on plugins</td><td>Local, open source</td><td>Open, flexible automation</td></tr>
</tbody>
</table>

<h2>What about an Apple TV or HomePod as a hub?</h2>
<p>If your household lives in the Apple ecosystem, the <strong>Apple TV 4K</strong> (Wi-Fi + Ethernet version) and the <strong>HomePod mini</strong> act as Home hubs: they are Thread border routers and Matter controllers, and they run automations from the Home app. It is an elegant option for Matter and HomeKit devices, but it does not handle Zigbee or Z-Wave directly and offers less fine-grained automation than a dedicated hub. A common setup keeps the Apple TV for Thread and voice, and leaves the advanced logic to Homey or Home Assistant.</p>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Buying a hub without checking your existing devices:</strong> list your sensors and modules (Zigbee, Z-Wave, Wi-Fi, 433 MHz) first. A Z-Wave setup rules out Aqara, IKEA and Hue straight away.</li>
<li><strong>Creating several separate Thread networks:</strong> border routers from different brands can form distinct networks. Make sure your controllers share Thread credentials.</li>
<li><strong>Assuming Matter covers everything:</strong> not every device category is supported by every platform yet, and some features remain exclusive to the manufacturer's app.</li>
<li><strong>Hiding the hub in a metal cabinet:</strong> 2.4 GHz and Z-Wave radios need a central, open location, ideally away from the Wi-Fi router.</li>
<li><strong>Skipping backups:</strong> on Home Assistant or Jeedom, schedule regular backups stored off the box.</li>
</ul>

<h2>Installation and good practice</h2>
<p>Connect the hub over Ethernet where possible for a stable link. Add mains-powered devices first (plugs, in-wall modules): they relay the Zigbee, Z-Wave or Thread mesh and extend the range of battery sensors. For modules installed in a consumer unit or behind a wall switch, use a qualified electrician and always switch off the power at the breaker. Enable two-factor authentication on linked accounts and install firmware updates as soon as they are available.</p>

<h2>Verdict: which smart home hub should you buy?</h2>
<p>The <strong>Homey Pro (Early 2023)</strong> is the best hub for most households thanks to its many radios and local execution. The <strong>Home Assistant Green</strong> is unbeatable for power if you are willing to learn. The <strong>Aqara Hub M3</strong> offers the best balance of features and budget, while the <strong>IKEA Dirigera</strong> is enough to get started. The <strong>Philips Hue Bridge Pro</strong> remains essential for a large Hue lighting setup, and the <strong>Jeedom Atlas</strong> will appeal to open-source fans. Browse every model in our <a href="/en/energie-domotique/hubs-domotique">smart home hubs</a> section.</p>`,

    de: `<p>Für die meisten Haushalte ist die beste Smart-Home-Zentrale 2026 der <strong>Homey Pro (Early 2023)</strong>: Er vereint Zigbee, Z-Wave, Thread, Matter, Infrarot und 433 MHz in einem Gerät, arbeitet lokal und bleibt auch für Einsteiger zugänglich. Wer maximale Leistung und Open-Source-Software sucht, greift zum <strong>Home Assistant Green</strong>; bei knapperem Budget oder vorhandenen Aqara-Geräten ist der <strong>Aqara Hub M3</strong> die vernünftigste Wahl.</p>
<p>Dieser Vergleich stützt sich auf Herstellerangaben, unabhängige Fachpresse und verifizierte Käuferbewertungen. Er stellt sechs in Europa tatsächlich erhältliche Zentralen vor, erklärt die Unterschiede der Funkprotokolle und hilft, teure Fehler zu vermeiden. Die Grundlagen zu Matter und Thread finden Sie in unserem Ratgeber <a href="/de/blog/maison-connectee-matter-thread-2026">Smart Home: Matter und Thread 2026</a>.</p>

<h2>Wozu dient eine Smart-Home-Zentrale 2026?</h2>
<p>Eine Smart-Home-Zentrale (Hub) ist das Gehirn des vernetzten Zuhauses. Sie kommuniziert mit Sensoren, Lampen, Steckdosen, Thermostaten und Rollläden und führt Ihre Abläufe aus: beim Verlassen alles ausschalten, die Heizung nach Wetterbericht starten, bei einem Wasserleck eine Steckdose abschalten. Ohne Hub bringt jede Marke ihre eigene App und Grenzen mit; mit Hub steuern Sie alles an einem Ort.</p>
<p><strong>Matter</strong> hat die Lage verändert: Der gemeinsame Standard lässt Geräte verschiedener Marken zusammenarbeiten. Den Hub ersetzt Matter aber nicht. Es braucht weiterhin einen „Controller“, der die Automationen steuert, und oft einen <strong>Thread-Border-Router</strong> für batteriebetriebene Matter-Funkgeräte. Die hier vorgestellten Zentralen erfüllen diese Rollen sehr unterschiedlich.</p>

<h2>Kaufkriterien für eine Smart-Home-Zentrale</h2>
<h3>Integrierte Funkstandards</h3>
<p>Das wichtigste Kriterium, denn es entscheidet über kompatible Geräte:</p>
<ul>
<li><strong>Zigbee</strong>: das verbreitetste Protokoll für günstige Sensoren, Lampen und Steckdosen (Aqara, IKEA, Philips Hue, Sonoff…).</li>
<li><strong>Z-Wave</strong>: häufig bei Unterputzmodulen, Schlössern und Rollladenaktoren; nutzt in Europa eine eigene Frequenz und stört das WLAN kaum.</li>
<li><strong>Thread</strong>: das stromsparende Mesh-Netz, auf dem viele neue Matter-Geräte basieren.</li>
<li><strong>Matter</strong>: die Interoperabilitätsschicht; eine Zentrale kann „Matter-Controller“ sein (sie steuert Matter-Geräte) und/oder „Matter-Bridge“ (sie gibt eigene Geräte an andere Plattformen weiter).</li>
<li><strong>Infrarot und 433 MHz</strong>: praktisch für Klimageräte, Fernseher oder ältere Funk-Rollläden und -Steckdosen.</li>
</ul>
<h3>Lokal oder Cloud</h3>
<p>Eine Zentrale, die Automationen <strong>lokal</strong> ausführt, funktioniert auch bei Internetausfall, reagiert schneller und schickt weniger Daten auf fremde Server. Cloud-abhängige Systeme sind leichter einzurichten, fallen aber bei Verbindungsproblemen oder Abschaltung des Dienstes aus.</p>
<h3>Bedienkomfort oder Leistung</h3>
<p>Je offener eine Zentrale, desto mehr Einarbeitung verlangt sie. Fragen Sie sich ehrlich, ob Sie eine fertige App wollen oder Integrationen, Dashboards und Skripte selbst konfigurieren möchten.</p>
<h3>Automationen</h3>
<p>Prüfen Sie die angebotene Logik: einfache Wenn-dann-Regeln, mehrere Bedingungen, Variablen, Zeitfenster, Anwesenheitserkennung. Hier entscheidet sich der Alltagsnutzen, gerade beim Energiesparen, das wir im <a href="/de/blog/guide-domotique-economie-energie-2026">Ratgeber Smart Home und Energiesparen</a> erklären.</p>
<h3>Ökosystem und Zukunftssicherheit</h3>
<p>Eine Zentrale lebt von den Updates des Herstellers. Bevorzugen Sie Anbieter, die regelmäßig Korrekturen veröffentlichen und ihre Protokolle offen dokumentieren.</p>

<h2>Die 6 besten Smart-Home-Zentralen 2026</h2>

<h3>1. Homey Pro (Early 2023) – Gesamtsieger</h3>
<p>Der <strong>Homey Pro (Early 2023)</strong> von Athom ist die vielseitigste Zentrale für Privathaushalte. Ab Werk bringt er Dualband-WLAN, Bluetooth Low Energy, <strong>Zigbee 3.0, Z-Wave, Thread, Matter, Infrarot und 433 MHz</strong> mit. Das Thread-Funkmodul wurde per kostenlosem Update freigeschaltet, sodass Matter-over-Thread-Geräte ohne zusätzlichen Router direkt eingebunden werden.</p>
<p><strong>Stärken:</strong> nahezu universelle Kompatibilität, lokale Ausführung der Automationen, ausgereifte App, leicht verständliche visuelle „Flows“ und ein großer Katalog an Hersteller-Apps. Das dezente Design passt ins Wohnzimmer.</p>
<p><strong>Schwächen:</strong> Premium-Segment, und einige fortgeschrittene Funktionen brauchen Einarbeitung. Das App-Angebot ist groß, aber kleiner als bei Home Assistant.</p>
<p><strong>Für wen:</strong> Haushalte, die alles bündeln wollen – inklusive Z-Wave und Infrarot –, ohne zum Systemadministrator zu werden.</p>

<h3>2. Home Assistant Green – am leistungsstärksten und offensten</h3>
<p>Der <strong>Home Assistant Green</strong> ist eine betriebsfertige Box mit Home Assistant, der weltweit meistgenutzten Open-Source-Smart-Home-Plattform mit über 2.000 Integrationen. Er wird per Ethernet angeschlossen und hat <strong>keine eingebauten Smart-Home-Funkmodule</strong>: Ergänzt werden der <strong>Home Assistant Connect ZBT-2</strong> (Zigbee und Thread) und/oder der <strong>Connect ZWA-2</strong> (Z-Wave) per USB.</p>
<p><strong>Stärken:</strong> vollständig lokaler Betrieb, unbegrenzte Automationen und Skripte, frei gestaltbare Dashboards, hervorragendes Energie-Monitoring, riesige Community. Das Abo Home Assistant Cloud ist optional (einfacher Fernzugriff, Sprachassistenten).</p>
<p><strong>Schwächen:</strong> echte Lernkurve; Funkadapter kosten extra; fortgeschrittene Einstellungen erfolgen teils über YAML-Dateien.</p>
<p><strong>Für wen:</strong> Enthusiasten und Bastler, die volle Kontrolle wollen und sehr unterschiedliche Geräte einbinden (Wechselrichter, Stromzähler, Wallboxen…).</p>

<h3>3. Aqara Hub M3 – bestes Preis-Leistungs-Verhältnis</h3>
<p>Der <strong>Aqara Hub M3</strong> ist eine Multiprotokoll-Zentrale: <strong>Zigbee, Thread-Border-Router, Matter-Controller</strong>, Dualband-WLAN, Bluetooth und ein <strong>360°-Infrarotsender</strong>. Er unterstützt <strong>PoE</strong> (Stromversorgung über das Netzwerkkabel) und hat einen Lautsprecher für Warnungen. Zudem dient er als Matter-Bridge für Aqara-Zigbee-Zubehör, das so in Apple Home, Google Home, Alexa oder SmartThings erscheint.</p>
<p><strong>Stärken:</strong> lokal ausgeführte Automationen, hohe Vielseitigkeit für seine Klasse, Steuerung von Infrarot-Klimageräten über Matter, einfache Einrichtung.</p>
<p><strong>Schwächen:</strong> kein Z-Wave; die App Aqara Home ist vor allem auf das eigene Ökosystem ausgerichtet.</p>
<p><strong>Für wen:</strong> Neueinsteiger mit Aqara-Sensoren oder alle, die eine zuverlässige Matter-Bridge zu Apple, Google oder Amazon suchen.</p>

<h3>4. IKEA Dirigera – der einfachste Einstieg</h3>
<p>Der <strong>IKEA Dirigera Hub</strong> steuert die Zigbee-Produkte von IKEA und arbeitet als Matter-Bridge. Seit dem Update vom November 2025 ist er außerdem <strong>Matter-Controller und Thread-Border-Router</strong> und damit für die neue Matter-over-Thread-Reihe von IKEA gerüstet.</p>
<p><strong>Stärken:</strong> sehr einfache App IKEA Home smart, Einrichtung in wenigen Minuten, Einstiegspreisniveau.</p>
<p><strong>Schwächen:</strong> einfache Automationen, kein Z-Wave und kein Infrarot, Kompatibilität auf IKEA fokussiert.</p>
<p><strong>Für wen:</strong> Einsteiger mit IKEA-Lampen, -Rollos und -Fernbedienungen.</p>

<h3>5. Philips Hue Bridge Pro – die Referenz für Licht</h3>
<p>Die <strong>Philips Hue Bridge Pro</strong> ist keine Universalzentrale, sondern die leistungsfähigste Lichtsteuerung. Sie verwaltet per <strong>Zigbee bis zu 150 Leuchten und 50 Zubehörteile</strong>, verbindet sich über Ethernet oder WLAN und gibt ihre Leuchten an Matter-Plattformen weiter. <strong>MotionAware</strong> macht kompatible Hue-Leuchten zu Bewegungsmeldern, indem Veränderungen im Funksignal ausgewertet werden.</p>
<p><strong>Stärken:</strong> Zuverlässigkeit, hohe Kapazität, vielfältige Lichtszenen, kompatibel mit Apple Home, Alexa, Google Home und SmartThings.</p>
<p><strong>Schwächen:</strong> auf Hue-Beleuchtung und -Zubehör beschränkt; ersetzt keine Universalzentrale.</p>
<p><strong>Für wen:</strong> Haushalte mit vielen Hue-Leuchten. Mehr dazu in unserem <a href="/de/blog/eclairage-connecte-comparatif">Vergleich smarter Beleuchtung</a>.</p>

<h3>6. Jeedom Atlas – die französische Open-Source-Box</h3>
<p>Der <strong>Jeedom Atlas</strong> läuft mit der in Frankreich entwickelten Open-Source-Software Jeedom. Das eingebaute Funkmodul wählen Sie beim Kauf: <strong>Zigbee, Z-Wave oder EnOcean</strong>. Dazu kommen Gigabit-Ethernet, Dualband-WLAN, Bluetooth 5.0, 4 GB RAM, 32 GB eMMC-Speicher und USB-Anschlüsse für weitere Funksticks.</p>
<p><strong>Stärken:</strong> lokaler Betrieb ohne Cloud-Pflicht, viele Plugins (teils kostenpflichtig), inklusive Service-Paket zum Start.</p>
<p><strong>Schwächen:</strong> ab Werk nur ein Smart-Home-Funkstandard, weniger moderne Oberfläche, technischere Einrichtung als bei Homey.</p>
<p><strong>Für wen:</strong> Nutzer, die eine offene Plattform suchen, besonders für EnOcean- oder Z-Wave-Installationen.</p>

<h2>Vergleichstabelle der Smart-Home-Zentralen</h2>
<table>
<thead>
<tr><th>Modell</th><th>Integrierte Funkstandards</th><th>Matter / Thread</th><th>Betrieb</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td>Homey Pro (Early 2023)</td><td>Zigbee, Z-Wave, IR, 433 MHz, BLE, WLAN</td><td>Matter-Controller, Thread integriert</td><td>Lokal</td><td>Alles einfach bündeln</td></tr>
<tr><td>Home Assistant Green</td><td>Keine (optional ZBT-2 / ZWA-2)</td><td>Ja mit ZBT-2</td><td>Lokal, Open Source</td><td>Enthusiasten, maximale Leistung</td></tr>
<tr><td>Aqara Hub M3</td><td>Zigbee, IR, BLE, WLAN, PoE</td><td>Matter-Controller, Thread-Border-Router</td><td>Lokal</td><td>Aqara-Ökosystem, Matter-Bridge</td></tr>
<tr><td>IKEA Dirigera</td><td>Zigbee</td><td>Matter-Controller, Thread-Border-Router</td><td>Lokal + App</td><td>IKEA-Einsteiger</td></tr>
<tr><td>Philips Hue Bridge Pro</td><td>Zigbee</td><td>Matter-Bridge</td><td>Lokal</td><td>Große Hue-Installationen</td></tr>
<tr><td>Jeedom Atlas</td><td>Zigbee, Z-Wave oder EnOcean (wählbar)</td><td>Je nach Plugin</td><td>Lokal, Open Source</td><td>Offene, flexible Hausautomation</td></tr>
</tbody>
</table>

<h2>Und Apple TV oder HomePod als Zentrale?</h2>
<p>Lebt Ihr Haushalt im Apple-Ökosystem, dienen <strong>Apple TV 4K</strong> (Version mit WLAN + Ethernet) und <strong>HomePod mini</strong> als Steuerzentrale für die Home-App: Sie sind Thread-Border-Router und Matter-Controller und führen Automationen aus. Für Matter- und HomeKit-Geräte ist das elegant, Zigbee oder Z-Wave werden aber nicht direkt unterstützt, und die Automationen sind weniger fein als bei einer echten Smart-Home-Zentrale. Häufig bleibt das Apple TV für Thread und Sprachsteuerung zuständig, während Homey oder Home Assistant die komplexe Logik übernehmen.</p>

<h2>Fehler, die Sie vermeiden sollten</h2>
<ul>
<li><strong>Eine Zentrale kaufen, ohne die vorhandenen Geräte zu prüfen:</strong> Listen Sie Sensoren und Module auf (Zigbee, Z-Wave, WLAN, 433 MHz). Eine Z-Wave-Installation schließt Aqara, IKEA und Hue von vornherein aus.</li>
<li><strong>Mehrere getrennte Thread-Netze aufbauen:</strong> Border-Router verschiedener Marken können eigene Netze bilden. Achten Sie darauf, dass Ihre Controller die Thread-Zugangsdaten teilen.</li>
<li><strong>Glauben, Matter decke alles ab:</strong> Noch werden nicht alle Gerätekategorien von allen Plattformen unterstützt, und manche Funktionen bleiben der Hersteller-App vorbehalten.</li>
<li><strong>Die Zentrale im Metallschrank verstecken:</strong> 2,4-GHz- und Z-Wave-Funk brauchen einen zentralen, freien Standort, möglichst nicht direkt neben dem WLAN-Router.</li>
<li><strong>Backups vergessen:</strong> Planen Sie bei Home Assistant oder Jeedom regelmäßige Sicherungen außerhalb der Box ein.</li>
</ul>

<h2>Installation und Tipps</h2>
<p>Schließen Sie die Zentrale möglichst per Ethernet an. Binden Sie zuerst netzbetriebene Geräte ein (Steckdosen, Unterputzmodule): Sie dienen im Zigbee-, Z-Wave- oder Thread-Mesh als Repeater und verbessern die Reichweite batteriebetriebener Sensoren. Module im Sicherungskasten oder hinter Lichtschaltern sollte eine Elektrofachkraft einbauen; schalten Sie immer die Sicherung aus. Aktivieren Sie die Zwei-Faktor-Authentifizierung für verknüpfte Konten und installieren Sie Firmware-Updates zeitnah.</p>

<h2>Fazit: Welche Smart-Home-Zentrale kaufen?</h2>
<p>Der <strong>Homey Pro (Early 2023)</strong> ist dank vieler Funkstandards und lokaler Ausführung die beste Zentrale für die meisten Haushalte. Der <strong>Home Assistant Green</strong> ist unschlagbar leistungsstark, wenn Sie Einarbeitung nicht scheuen. Der <strong>Aqara Hub M3</strong> bietet die beste Balance aus Funktionen und Budget, der <strong>IKEA Dirigera</strong> reicht für den Einstieg. Die <strong>Philips Hue Bridge Pro</strong> bleibt für große Hue-Installationen unverzichtbar, und der <strong>Jeedom Atlas</strong> spricht Open-Source-Fans an. Alle Modelle finden Sie in unserer Rubrik <a href="/de/energie-domotique/hubs-domotique">Smart-Home-Zentralen</a>.</p>`,

    es: `<p>Para la mayoría de los hogares, el mejor hub domótico en 2026 es el <strong>Homey Pro (Early 2023)</strong>: reúne Zigbee, Z-Wave, Thread, Matter, infrarrojos y 433 MHz en un solo equipo, funciona en local y sigue siendo accesible para quien no es experto. Si buscas la máxima potencia y software libre, el <strong>Home Assistant Green</strong> es la referencia; con un presupuesto más ajustado o si ya tienes dispositivos Aqara, el <strong>Aqara Hub M3</strong> es la compra más sensata.</p>
<p>Esta comparativa se basa en las fichas técnicas de los fabricantes, análisis de la prensa especializada y opiniones de compradores verificados. Repasa seis hubs realmente disponibles en Europa, explica las diferencias entre protocolos de radio y te ayuda a evitar los errores más caros. Para las bases de Matter y Thread, consulta nuestra guía <a href="/es/blog/maison-connectee-matter-thread-2026">Hogar conectado: Matter y Thread en 2026</a>.</p>

<h2>¿Para qué sirve un hub domótico en 2026?</h2>
<p>Un hub domótico es el cerebro de la casa conectada. Se comunica con sensores, bombillas, enchufes, termostatos y persianas y ejecuta tus rutinas: apagarlo todo al salir, encender la calefacción según la previsión meteorológica o cortar un enchufe si se detecta una fuga de agua. Sin hub, cada marca impone su app y sus límites; con él, todo se controla desde un único lugar.</p>
<p><strong>Matter</strong> ha cambiado las reglas: este estándar común permite que dispositivos de distintas marcas funcionen juntos. Pero Matter no sustituye al hub. Sigue haciendo falta un «controlador» que orqueste las automatizaciones y, a menudo, un <strong>router de borde Thread</strong> para los dispositivos Matter inalámbricos a pilas. Los hubs de esta guía cumplen estas funciones en grados muy distintos.</p>

<h2>Criterios para elegir un hub domótico</h2>
<h3>Radios integradas</h3>
<p>Es el criterio principal, porque determina qué dispositivos serán compatibles:</p>
<ul>
<li><strong>Zigbee</strong>: el protocolo más extendido para sensores, bombillas y enchufes asequibles (Aqara, IKEA, Philips Hue, Sonoff…).</li>
<li><strong>Z-Wave</strong>: habitual en módulos empotrables, cerraduras y controladores de persianas; usa una frecuencia propia en Europa, con pocas interferencias con el wifi.</li>
<li><strong>Thread</strong>: la red mallada de bajo consumo en la que se apoyan muchos dispositivos Matter nuevos.</li>
<li><strong>Matter</strong>: la capa de interoperabilidad; un hub puede ser «controlador Matter» (gestiona dispositivos Matter) y/o «puente Matter» (expone sus propios dispositivos a otras plataformas).</li>
<li><strong>Infrarrojos y 433 MHz</strong>: útiles para aires acondicionados, televisores o persianas y enchufes de radio antiguos.</li>
</ul>
<h3>Local o nube</h3>
<p>Un hub que ejecuta las automatizaciones <strong>en local</strong> sigue funcionando sin internet, responde más rápido y envía menos datos a servidores externos. Los sistemas que dependen de la nube son más fáciles de poner en marcha, pero dejan de funcionar si cae la conexión o se cierra el servicio.</p>
<h3>Facilidad de uso frente a potencia</h3>
<p>Cuanto más abierto es un hub, más tiempo de aprendizaje exige. Pregúntate con sinceridad si quieres una app lista para usar o si estás dispuesto a configurar integraciones, paneles y scripts.</p>
<h3>Automatizaciones</h3>
<p>Revisa la lógica disponible: reglas simples «si… entonces…», condiciones múltiples, variables, franjas horarias, detección de presencia. Ahí está la diferencia en el día a día, sobre todo para el ahorro energético que explicamos en nuestra <a href="/es/blog/guide-domotique-economie-energie-2026">guía de domótica y ahorro de energía</a>.</p>
<h3>Ecosistema y durabilidad</h3>
<p>Un hub depende de las actualizaciones de su fabricante. Prioriza marcas que publiquen correcciones con regularidad y documenten bien sus protocolos.</p>

<h2>Los 6 mejores hubs domóticos de 2026</h2>

<h3>1. Homey Pro (Early 2023): la mejor opción global</h3>
<p>El <strong>Homey Pro (Early 2023)</strong> de Athom es el hub doméstico más versátil del mercado. De serie incluye wifi de doble banda, Bluetooth Low Energy, <strong>Zigbee 3.0, Z-Wave, Thread, Matter, infrarrojos y 433 MHz</strong>. La radio Thread se activó mediante una actualización gratuita, de modo que los dispositivos Matter sobre Thread se añaden directamente sin router adicional.</p>
<p><strong>Puntos fuertes:</strong> compatibilidad casi universal, procesamiento local de las automatizaciones, app muy cuidada, «Flows» visuales fáciles de entender y un amplio catálogo de apps de marcas. Su diseño discreto encaja en cualquier salón.</p>
<p><strong>Limitaciones:</strong> posicionamiento premium, y algunas funciones avanzadas requieren tiempo. Su ecosistema de apps es amplio, pero menor que el de Home Assistant.</p>
<p><strong>Para quién:</strong> hogares que quieren centralizarlo todo, Z-Wave e infrarrojos incluidos, sin convertirse en administradores de sistemas.</p>

<h3>2. Home Assistant Green: el más potente y abierto</h3>
<p>El <strong>Home Assistant Green</strong> es un equipo listo para usar con Home Assistant, la plataforma domótica de código abierto más utilizada del mundo, con más de 2.000 integraciones. Se conecta por Ethernet y <strong>no tiene radios domóticas integradas</strong>: hay que añadir el <strong>Home Assistant Connect ZBT-2</strong> (Zigbee y Thread) y/o el <strong>Connect ZWA-2</strong> (Z-Wave) por USB.</p>
<p><strong>Puntos fuertes:</strong> funcionamiento totalmente local, automatizaciones y scripts sin límites, paneles personalizables, excelente seguimiento energético y una comunidad enorme. La suscripción Home Assistant Cloud es opcional (acceso remoto sencillo, asistentes de voz).</p>
<p><strong>Limitaciones:</strong> curva de aprendizaje real; los adaptadores de radio suman al presupuesto; la configuración avanzada a veces pasa por archivos YAML.</p>
<p><strong>Para quién:</strong> aficionados y manitas que quieren control total e integrar equipos muy variados (inversores solares, contadores, cargadores de coche eléctrico…).</p>

<h3>3. Aqara Hub M3: la mejor relación calidad-precio</h3>
<p>El <strong>Aqara Hub M3</strong> es un hub multiprotocolo: <strong>Zigbee, router de borde Thread, controlador Matter</strong>, wifi de doble banda, Bluetooth y un <strong>emisor de infrarrojos de 360°</strong>. Admite <strong>PoE</strong> (alimentación por cable Ethernet) e integra un altavoz para avisos. También actúa como puente Matter para los accesorios Zigbee de Aqara, que aparecen en Apple Casa, Google Home, Alexa o SmartThings.</p>
<p><strong>Puntos fuertes:</strong> automatizaciones ejecutadas en local, gran versatilidad para su gama, control de aires acondicionados por infrarrojos a través de Matter, instalación sencilla.</p>
<p><strong>Limitaciones:</strong> sin Z-Wave; la app Aqara Home está pensada sobre todo para el ecosistema de la marca.</p>
<p><strong>Para quién:</strong> quienes empiezan de cero con sensores Aqara o buscan un puente Matter fiable hacia Apple, Google o Amazon.</p>

<h3>4. IKEA Dirigera: la entrada más sencilla</h3>
<p>El <strong>hub IKEA Dirigera</strong> gestiona los productos Zigbee de IKEA y funciona como puente Matter. Desde la actualización de noviembre de 2025 también es <strong>controlador Matter y router de borde Thread</strong>, preparado para la nueva gama Matter sobre Thread de la marca.</p>
<p><strong>Puntos fuertes:</strong> app IKEA Home smart muy sencilla, instalación en minutos, precio de gama de entrada.</p>
<p><strong>Limitaciones:</strong> automatizaciones básicas, sin Z-Wave ni infrarrojos, compatibilidad centrada en IKEA.</p>
<p><strong>Para quién:</strong> principiantes con bombillas, estores y mandos de IKEA.</p>

<h3>5. Philips Hue Bridge Pro: la referencia en iluminación</h3>
<p>El <strong>Philips Hue Bridge Pro</strong> no es un hub generalista, sino el puente de iluminación más completo. Gestiona por <strong>Zigbee hasta 150 luces y 50 accesorios</strong>, se conecta por Ethernet o wifi y expone sus luces a las plataformas Matter. La función <strong>MotionAware</strong> convierte las luces Hue compatibles en detectores de movimiento analizando las variaciones de la señal de radio.</p>
<p><strong>Puntos fuertes:</strong> fiabilidad, gran capacidad, escenas de luz muy completas, compatibilidad con Apple Casa, Alexa, Google Home y SmartThings.</p>
<p><strong>Limitaciones:</strong> limitado a la iluminación Hue y sus accesorios; no sustituye a un hub generalista.</p>
<p><strong>Para quién:</strong> casas con muchos puntos de luz Hue. Para profundizar, consulta nuestra <a href="/es/blog/eclairage-connecte-comparatif">comparativa de iluminación inteligente</a>.</p>

<h3>6. Jeedom Atlas: la caja libre francesa</h3>
<p>El <strong>Jeedom Atlas</strong> ejecuta Jeedom, software libre desarrollado en Francia. La radio integrada se elige al comprarlo: <strong>Zigbee, Z-Wave o EnOcean</strong>. Ofrece Ethernet Gigabit, wifi de doble banda, Bluetooth 5.0, 4 GB de RAM, 32 GB de almacenamiento eMMC y puertos USB para añadir otras llaves de radio.</p>
<p><strong>Puntos fuertes:</strong> funcionamiento local sin nube obligatoria, numerosos plugins (algunos de pago), paquete de servicios incluido al inicio.</p>
<p><strong>Limitaciones:</strong> una sola radio domótica de serie, interfaz menos moderna, configuración más técnica que Homey.</p>
<p><strong>Para quién:</strong> usuarios que quieren una plataforma abierta, sobre todo en instalaciones EnOcean o Z-Wave.</p>

<h2>Tabla comparativa de hubs domóticos</h2>
<table>
<thead>
<tr><th>Modelo</th><th>Radios integradas</th><th>Matter / Thread</th><th>Funcionamiento</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td>Homey Pro (Early 2023)</td><td>Zigbee, Z-Wave, IR, 433 MHz, BLE, wifi</td><td>Controlador Matter, Thread integrado</td><td>Local</td><td>Centralizarlo todo con sencillez</td></tr>
<tr><td>Home Assistant Green</td><td>Ninguna (adaptadores ZBT-2 / ZWA-2 opcionales)</td><td>Sí con ZBT-2</td><td>Local, código abierto</td><td>Aficionados, máxima potencia</td></tr>
<tr><td>Aqara Hub M3</td><td>Zigbee, IR, BLE, wifi, PoE</td><td>Controlador Matter, router Thread</td><td>Local</td><td>Ecosistema Aqara, puente Matter</td></tr>
<tr><td>IKEA Dirigera</td><td>Zigbee</td><td>Controlador Matter, router Thread</td><td>Local + app</td><td>Principiantes IKEA</td></tr>
<tr><td>Philips Hue Bridge Pro</td><td>Zigbee</td><td>Puente Matter</td><td>Local</td><td>Grandes instalaciones Hue</td></tr>
<tr><td>Jeedom Atlas</td><td>Zigbee, Z-Wave o EnOcean (a elegir)</td><td>Según plugins</td><td>Local, código abierto</td><td>Domótica abierta y flexible</td></tr>
</tbody>
</table>

<h2>¿Y el Apple TV o el HomePod como hub?</h2>
<p>Si tu hogar vive en el ecosistema Apple, el <strong>Apple TV 4K</strong> (versión wifi + Ethernet) y el <strong>HomePod mini</strong> funcionan como centro de la app Casa: son routers de borde Thread y controladores Matter, y ejecutan las automatizaciones. Es una opción elegante para dispositivos Matter y HomeKit, pero no gestiona Zigbee ni Z-Wave directamente y ofrece automatizaciones menos finas que un hub dedicado. Una combinación habitual es dejar el Apple TV para Thread y la voz, y confiar la lógica avanzada a Homey o Home Assistant.</p>

<h2>Errores que debes evitar</h2>
<ul>
<li><strong>Comprar un hub sin revisar tus dispositivos:</strong> haz primero una lista de sensores y módulos (Zigbee, Z-Wave, wifi, 433 MHz). Una instalación Z-Wave descarta de entrada Aqara, IKEA y Hue.</li>
<li><strong>Crear varias redes Thread separadas:</strong> routers de borde de marcas distintas pueden formar redes independientes. Comprueba que tus controladores comparten las credenciales Thread.</li>
<li><strong>Creer que Matter lo cubre todo:</strong> todavía no todas las categorías de dispositivos son compatibles con todas las plataformas, y algunas funciones siguen siendo exclusivas de la app del fabricante.</li>
<li><strong>Esconder el hub en un armario metálico:</strong> las radios de 2,4 GHz y Z-Wave necesitan una ubicación central y despejada, a ser posible lejos del router wifi.</li>
<li><strong>Olvidar las copias de seguridad:</strong> en Home Assistant o Jeedom, programa copias periódicas fuera del equipo.</li>
</ul>

<h2>Instalación y buenas prácticas</h2>
<p>Conecta el hub por Ethernet siempre que puedas. Añade primero los dispositivos enchufados a la red eléctrica (enchufes, módulos empotrables): actúan como repetidores de la malla Zigbee, Z-Wave o Thread y amplían el alcance de los sensores a pilas. Para módulos instalados en el cuadro eléctrico o detrás de un interruptor, recurre a un electricista cualificado y corta siempre la corriente en el magnetotérmico. Activa la verificación en dos pasos en las cuentas asociadas e instala las actualizaciones de firmware en cuanto estén disponibles.</p>

<h2>Veredicto: ¿qué hub domótico elegir?</h2>
<p>El <strong>Homey Pro (Early 2023)</strong> es el mejor hub para la mayoría de los hogares gracias a sus numerosas radios y su ejecución local. El <strong>Home Assistant Green</strong> es imbatible en potencia si estás dispuesto a aprender. El <strong>Aqara Hub M3</strong> ofrece el mejor equilibrio entre funciones y presupuesto, y el <strong>IKEA Dirigera</strong> basta para empezar. El <strong>Philips Hue Bridge Pro</strong> sigue siendo imprescindible para una gran instalación Hue, y el <strong>Jeedom Atlas</strong> gustará a los amantes del software libre. Encuentra todos los modelos en nuestra sección de <a href="/es/energie-domotique/hubs-domotique">hubs domóticos</a>.</p>`,

    it: `<p>Per la maggior parte delle famiglie, il miglior hub domotico del 2026 è l'<strong>Homey Pro (Early 2023)</strong>: riunisce Zigbee, Z-Wave, Thread, Matter, infrarossi e 433 MHz in un unico dispositivo, funziona in locale e resta alla portata anche di chi non è esperto. Se cerchi la massima potenza e un software open source, l'<strong>Home Assistant Green</strong> è il riferimento; con un budget più contenuto o se possiedi già dispositivi Aqara, l'<strong>Aqara Hub M3</strong> è l'acquisto più razionale.</p>
<p>Questo confronto si basa sulle schede tecniche dei produttori, sulle analisi della stampa specializzata e sui feedback di acquirenti verificati. Passa in rassegna sei hub realmente disponibili in Europa, spiega le differenze tra i protocolli radio e ti aiuta a evitare gli errori più costosi. Per le basi di Matter e Thread, leggi la nostra guida <a href="/it/blog/maison-connectee-matter-thread-2026">Casa connessa: Matter e Thread nel 2026</a>.</p>

<h2>A cosa serve un hub domotico nel 2026?</h2>
<p>Un hub domotico è il cervello della casa connessa. Dialoga con sensori, lampadine, prese, termostati e tapparelle ed esegue le tue routine: spegnere tutto quando esci, avviare il riscaldamento in base alle previsioni meteo, staccare una presa se viene rilevata una perdita d'acqua. Senza hub, ogni marca impone la propria app e i propri limiti; con un hub, controlli tutto da un unico punto.</p>
<p><strong>Matter</strong> ha cambiato le regole: questo standard comune permette a dispositivi di marche diverse di funzionare insieme. Ma Matter non sostituisce l'hub. Serve sempre un «controller» che gestisca le automazioni e spesso un <strong>border router Thread</strong> per i dispositivi Matter wireless a batteria. Gli hub di questa guida svolgono questi ruoli in misura molto diversa.</p>

<h2>Come scegliere un hub domotico</h2>
<h3>Radio integrate</h3>
<p>È il criterio principale, perché determina quali dispositivi saranno compatibili:</p>
<ul>
<li><strong>Zigbee</strong>: il protocollo più diffuso per sensori, lampadine e prese economici (Aqara, IKEA, Philips Hue, Sonoff…).</li>
<li><strong>Z-Wave</strong>: frequente su moduli da incasso, serrature e attuatori per tapparelle; in Europa usa una frequenza dedicata, quindi interferisce poco con il Wi-Fi.</li>
<li><strong>Thread</strong>: la rete mesh a basso consumo su cui si basano molti nuovi dispositivi Matter.</li>
<li><strong>Matter</strong>: lo strato di interoperabilità; un hub può essere «controller Matter» (gestisce dispositivi Matter) e/o «bridge Matter» (espone i propri dispositivi ad altre piattaforme).</li>
<li><strong>Infrarossi e 433 MHz</strong>: utili per condizionatori, televisori o vecchie tapparelle e prese radio.</li>
</ul>
<h3>Locale o cloud</h3>
<p>Un hub che esegue le automazioni <strong>in locale</strong> continua a funzionare senza internet, risponde più rapidamente e invia meno dati a server esterni. I sistemi dipendenti dal cloud sono più semplici da avviare, ma smettono di funzionare in caso di disconnessione o di chiusura del servizio.</p>
<h3>Semplicità contro potenza</h3>
<p>Più un hub è aperto, più tempo richiede per impararlo. Chiediti con sincerità se vuoi un'app pronta all'uso o se sei disposto a configurare integrazioni, dashboard e script.</p>
<h3>Automazioni</h3>
<p>Verifica la logica disponibile: semplici regole «se… allora…», condizioni multiple, variabili, fasce orarie, rilevamento della presenza. È qui che si gioca la differenza quotidiana, soprattutto per il risparmio energetico descritto nella nostra <a href="/it/blog/guide-domotique-economie-energie-2026">guida domotica e risparmio energetico</a>.</p>
<h3>Ecosistema e longevità</h3>
<p>Un hub dipende dagli aggiornamenti del produttore. Preferisci aziende che pubblicano correzioni regolari e documentano chiaramente i propri protocolli.</p>

<h2>I 6 migliori hub domotici del 2026</h2>

<h3>1. Homey Pro (Early 2023): la scelta migliore in assoluto</h3>
<p>L'<strong>Homey Pro (Early 2023)</strong> di Athom è l'hub domestico più versatile sul mercato. Di serie integra Wi-Fi dual band, Bluetooth Low Energy, <strong>Zigbee 3.0, Z-Wave, Thread, Matter, infrarossi e 433 MHz</strong>. La radio Thread è stata attivata con un aggiornamento gratuito, quindi i dispositivi Matter su Thread si aggiungono direttamente senza router aggiuntivi.</p>
<p><strong>Punti di forza:</strong> compatibilità quasi universale, elaborazione locale delle automazioni, app curata, «Flows» visivi facili da usare e un ampio catalogo di app dei marchi. Il design discreto si inserisce bene in salotto.</p>
<p><strong>Limiti:</strong> posizionamento premium, e alcune funzioni avanzate richiedono tempo. L'ecosistema di app è ampio ma meno vasto di quello di Home Assistant.</p>
<p><strong>Per chi:</strong> famiglie che vogliono centralizzare tutto, Z-Wave e infrarossi compresi, senza diventare amministratori di sistema.</p>

<h3>2. Home Assistant Green: il più potente e aperto</h3>
<p>L'<strong>Home Assistant Green</strong> è un box pronto all'uso con Home Assistant, la piattaforma domotica open source più usata al mondo, con oltre 2.000 integrazioni. Si collega via Ethernet e <strong>non ha radio domotiche integrate</strong>: si aggiungono via USB l'<strong>Home Assistant Connect ZBT-2</strong> (Zigbee e Thread) e/o il <strong>Connect ZWA-2</strong> (Z-Wave).</p>
<p><strong>Punti di forza:</strong> funzionamento completamente locale, automazioni e script senza limiti, dashboard personalizzabili, ottimo monitoraggio energetico, community enorme. L'abbonamento Home Assistant Cloud è facoltativo (accesso remoto semplificato, assistenti vocali).</p>
<p><strong>Limiti:</strong> curva di apprendimento reale; gli adattatori radio pesano sul budget; la configurazione avanzata passa talvolta da file YAML.</p>
<p><strong>Per chi:</strong> appassionati e smanettoni che vogliono il controllo totale e integrare apparecchi molto diversi (inverter fotovoltaici, contatori, wallbox…).</p>

<h3>3. Aqara Hub M3: il miglior rapporto qualità-prezzo</h3>
<p>L'<strong>Aqara Hub M3</strong> è un hub multiprotocollo: <strong>Zigbee, border router Thread, controller Matter</strong>, Wi-Fi dual band, Bluetooth e un <strong>emettitore a infrarossi a 360°</strong>. Supporta il <strong>PoE</strong> (alimentazione tramite cavo Ethernet) e integra un altoparlante per gli avvisi. Funziona anche da bridge Matter per gli accessori Zigbee Aqara, che diventano visibili in Apple Casa, Google Home, Alexa o SmartThings.</p>
<p><strong>Punti di forza:</strong> automazioni eseguite in locale, grande versatilità per la sua fascia, controllo dei condizionatori a infrarossi tramite Matter, installazione semplice.</p>
<p><strong>Limiti:</strong> niente Z-Wave; l'app Aqara Home è pensata soprattutto per l'ecosistema del marchio.</p>
<p><strong>Per chi:</strong> chi parte da zero con sensori Aqara o cerca un bridge Matter affidabile verso Apple, Google o Amazon.</p>

<h3>4. IKEA Dirigera: l'ingresso più semplice</h3>
<p>L'<strong>hub IKEA Dirigera</strong> gestisce i prodotti Zigbee di IKEA e funge da bridge Matter. Dall'aggiornamento di novembre 2025 è anche <strong>controller Matter e border router Thread</strong>, pronto per la nuova gamma Matter su Thread del marchio.</p>
<p><strong>Punti di forza:</strong> app IKEA Home smart semplicissima, installazione in pochi minuti, fascia di prezzo d'ingresso.</p>
<p><strong>Limiti:</strong> automazioni di base, niente Z-Wave né infrarossi, compatibilità incentrata su IKEA.</p>
<p><strong>Per chi:</strong> principianti con lampadine, tende e telecomandi IKEA.</p>

<h3>5. Philips Hue Bridge Pro: il riferimento per l'illuminazione</h3>
<p>Il <strong>Philips Hue Bridge Pro</strong> non è un hub generalista, ma il bridge per l'illuminazione più completo. Gestisce via <strong>Zigbee fino a 150 luci e 50 accessori</strong>, si collega via Ethernet o Wi-Fi ed espone le sue luci alle piattaforme Matter. La funzione <strong>MotionAware</strong> trasforma le luci Hue compatibili in sensori di movimento analizzando le variazioni del segnale radio.</p>
<p><strong>Punti di forza:</strong> affidabilità, grande capacità, scene luminose molto ricche, compatibilità con Apple Casa, Alexa, Google Home e SmartThings.</p>
<p><strong>Limiti:</strong> limitato all'illuminazione Hue e ai suoi accessori; non sostituisce un hub generalista.</p>
<p><strong>Per chi:</strong> case con molti punti luce Hue. Per approfondire, leggi il nostro <a href="/it/blog/eclairage-connecte-comparatif">confronto sull'illuminazione smart</a>.</p>

<h3>6. Jeedom Atlas: il box open source francese</h3>
<p>Il <strong>Jeedom Atlas</strong> utilizza Jeedom, software open source sviluppato in Francia. La radio integrata si sceglie all'acquisto: <strong>Zigbee, Z-Wave o EnOcean</strong>. Dispone di Ethernet Gigabit, Wi-Fi dual band, Bluetooth 5.0, 4 GB di RAM, 32 GB di memoria eMMC e porte USB per aggiungere altre chiavette radio.</p>
<p><strong>Punti di forza:</strong> funzionamento locale senza cloud obbligatorio, numerosi plugin (alcuni a pagamento), pacchetto di servizi incluso all'inizio.</p>
<p><strong>Limiti:</strong> una sola radio domotica di serie, interfaccia meno moderna, configurazione più tecnica rispetto a Homey.</p>
<p><strong>Per chi:</strong> utenti che vogliono una piattaforma aperta, in particolare per impianti EnOcean o Z-Wave.</p>

<h2>Tabella comparativa degli hub domotici</h2>
<table>
<thead>
<tr><th>Modello</th><th>Radio integrate</th><th>Matter / Thread</th><th>Funzionamento</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td>Homey Pro (Early 2023)</td><td>Zigbee, Z-Wave, IR, 433 MHz, BLE, Wi-Fi</td><td>Controller Matter, Thread integrato</td><td>Locale</td><td>Centralizzare tutto con semplicità</td></tr>
<tr><td>Home Assistant Green</td><td>Nessuna (adattatori ZBT-2 / ZWA-2 opzionali)</td><td>Sì con ZBT-2</td><td>Locale, open source</td><td>Appassionati, massima potenza</td></tr>
<tr><td>Aqara Hub M3</td><td>Zigbee, IR, BLE, Wi-Fi, PoE</td><td>Controller Matter, border router Thread</td><td>Locale</td><td>Ecosistema Aqara, bridge Matter</td></tr>
<tr><td>IKEA Dirigera</td><td>Zigbee</td><td>Controller Matter, border router Thread</td><td>Locale + app</td><td>Principianti IKEA</td></tr>
<tr><td>Philips Hue Bridge Pro</td><td>Zigbee</td><td>Bridge Matter</td><td>Locale</td><td>Grandi impianti Hue</td></tr>
<tr><td>Jeedom Atlas</td><td>Zigbee, Z-Wave o EnOcean (a scelta)</td><td>In base ai plugin</td><td>Locale, open source</td><td>Domotica aperta e flessibile</td></tr>
</tbody>
</table>

<h2>E l'Apple TV o l'HomePod come hub?</h2>
<p>Se la tua famiglia vive nell'ecosistema Apple, l'<strong>Apple TV 4K</strong> (versione Wi-Fi + Ethernet) e l'<strong>HomePod mini</strong> fungono da hub dell'app Casa: sono border router Thread e controller Matter ed eseguono le automazioni. È una soluzione elegante per dispositivi Matter e HomeKit, ma non gestisce direttamente Zigbee né Z-Wave e offre automazioni meno raffinate di un vero hub domotico. Una combinazione frequente è lasciare all'Apple TV Thread e i comandi vocali, affidando la logica avanzata a Homey o Home Assistant.</p>

<h2>Errori da evitare</h2>
<ul>
<li><strong>Comprare un hub senza controllare i dispositivi esistenti:</strong> elenca prima sensori e moduli (Zigbee, Z-Wave, Wi-Fi, 433 MHz). Un impianto Z-Wave esclude subito Aqara, IKEA e Hue.</li>
<li><strong>Creare più reti Thread separate:</strong> border router di marche diverse possono formare reti distinte. Verifica che i tuoi controller condividano le credenziali Thread.</li>
<li><strong>Pensare che Matter copra tutto:</strong> non tutte le categorie di dispositivi sono ancora supportate da tutte le piattaforme, e alcune funzioni restano esclusive dell'app del produttore.</li>
<li><strong>Nascondere l'hub in un armadio metallico:</strong> le radio a 2,4 GHz e Z-Wave richiedono una posizione centrale e libera, possibilmente lontana dal router Wi-Fi.</li>
<li><strong>Trascurare i backup:</strong> su Home Assistant o Jeedom, pianifica backup regolari salvati fuori dal box.</li>
</ul>

<h2>Installazione e buone pratiche</h2>
<p>Collega l'hub via Ethernet quando possibile. Aggiungi per primi i dispositivi alimentati da rete (prese, moduli da incasso): fanno da ripetitori nella rete mesh Zigbee, Z-Wave o Thread e migliorano la portata dei sensori a batteria. Per i moduli da installare nel quadro elettrico o dietro un interruttore, rivolgiti a un elettricista qualificato e stacca sempre la corrente dall'interruttore generale. Attiva l'autenticazione a due fattori sugli account collegati e installa gli aggiornamenti firmware non appena disponibili.</p>

<h2>Verdetto: quale hub domotico scegliere?</h2>
<p>L'<strong>Homey Pro (Early 2023)</strong> è il miglior hub per la maggior parte delle famiglie grazie alle numerose radio e all'esecuzione locale. L'<strong>Home Assistant Green</strong> è imbattibile in potenza se sei disposto a imparare. L'<strong>Aqara Hub M3</strong> offre il miglior equilibrio tra funzioni e budget, mentre l'<strong>IKEA Dirigera</strong> basta per iniziare. Il <strong>Philips Hue Bridge Pro</strong> resta indispensabile per un grande impianto Hue, e il <strong>Jeedom Atlas</strong> piacerà agli amanti dell'open source. Trovi tutti i modelli nella nostra sezione <a href="/it/energie-domotique/hubs-domotique">hub domotici</a>.</p>`,

    nl: `<p>Voor de meeste huishoudens is de beste smart-home-hub van 2026 de <strong>Homey Pro (Early 2023)</strong>: hij combineert Zigbee, Z-Wave, Thread, Matter, infrarood en 433 MHz in één kastje, werkt lokaal en blijft toegankelijk voor wie geen expert is. Zoek je maximale kracht en opensourcesoftware, dan is de <strong>Home Assistant Green</strong> de maatstaf; met een krapper budget of als je al Aqara-apparaten hebt, is de <strong>Aqara Hub M3</strong> de verstandigste keuze.</p>
<p>Deze vergelijking is gebaseerd op specificaties van fabrikanten, onafhankelijke reviews in de vakpers en geverifieerde ervaringen van kopers. We bespreken zes hubs die echt in Europa te koop zijn, leggen de verschillen tussen radioprotocollen uit en helpen je dure fouten te vermijden. Voor de basis van Matter en Thread lees je onze gids <a href="/nl/blog/maison-connectee-matter-thread-2026">Slim huis: Matter en Thread in 2026</a>.</p>

<h2>Waarvoor dient een smart-home-hub in 2026?</h2>
<p>Een smart-home-hub is het brein van het slimme huis. Hij communiceert met sensoren, lampen, stekkers, thermostaten en rolluiken en voert je routines uit: alles uitschakelen als je vertrekt, de verwarming starten op basis van de weersverwachting, een stekker uitzetten bij een waterlek. Zonder hub legt elk merk zijn eigen app en beperkingen op; met een hub bedien je alles vanaf één plek.</p>
<p><strong>Matter</strong> heeft de situatie veranderd: deze gezamenlijke standaard laat apparaten van verschillende merken samenwerken. Maar Matter vervangt de hub niet. Je hebt nog steeds een „controller” nodig die de automatiseringen aanstuurt, en vaak een <strong>Thread-border-router</strong> voor draadloze Matter-apparaten op batterijen. De hubs in deze gids vervullen die rollen in heel verschillende mate.</p>

<h2>Waar let je op bij het kiezen van een hub?</h2>
<h3>Ingebouwde radio’s</h3>
<p>Dit is het belangrijkste criterium, omdat het bepaalt welke apparaten werken:</p>
<ul>
<li><strong>Zigbee</strong>: het meest gebruikte protocol voor betaalbare sensoren, lampen en stekkers (Aqara, IKEA, Philips Hue, Sonoff…).</li>
<li><strong>Z-Wave</strong>: veel gebruikt in inbouwmodules, sloten en rolluikmodules; in Europa op een eigen frequentie, dus weinig storing met wifi.</li>
<li><strong>Thread</strong>: het zuinige mesh-netwerk waarop veel nieuwe Matter-apparaten draaien.</li>
<li><strong>Matter</strong>: de laag voor samenwerking; een hub kan „Matter-controller” zijn (hij bedient Matter-apparaten) en/of „Matter-bridge” (hij stelt zijn eigen apparaten beschikbaar aan andere platforms).</li>
<li><strong>Infrarood en 433 MHz</strong>: handig voor airco’s, tv’s of oudere draadloze rolluiken en stekkers.</li>
</ul>
<h3>Lokaal of cloud</h3>
<p>Een hub die automatiseringen <strong>lokaal</strong> uitvoert, blijft werken als het internet uitvalt, reageert sneller en stuurt minder gegevens naar externe servers. Cloudafhankelijke systemen zijn eenvoudiger in te stellen, maar werken niet meer bij een storing of als de dienst stopt.</p>
<h3>Gebruiksgemak of kracht</h3>
<p>Hoe opener een hub, hoe meer leertijd hij vraagt. Vraag je eerlijk af of je een kant-en-klare app wilt of zelf integraties, dashboards en scripts wilt instellen.</p>
<h3>Automatiseringen</h3>
<p>Bekijk welke logica mogelijk is: eenvoudige „als… dan…”-regels, meerdere voorwaarden, variabelen, tijdvensters, aanwezigheidsdetectie. Daar zit het verschil in het dagelijks gebruik, zeker voor de energiebesparing uit onze <a href="/nl/blog/guide-domotique-economie-energie-2026">gids domotica en energiebesparing</a>.</p>
<h3>Ecosysteem en toekomstbestendigheid</h3>
<p>Een hub is afhankelijk van de updates van de fabrikant. Kies voor bedrijven die regelmatig verbeteringen uitbrengen en hun protocollen duidelijk documenteren.</p>

<h2>De 6 beste smart-home-hubs van 2026</h2>

<h3>1. Homey Pro (Early 2023) – beste keuze overall</h3>
<p>De <strong>Homey Pro (Early 2023)</strong> van Athom is de veelzijdigste hub voor thuisgebruik. Standaard heeft hij dualband-wifi, Bluetooth Low Energy, <strong>Zigbee 3.0, Z-Wave, Thread, Matter, infrarood en 433 MHz</strong>. De Thread-radio is via een gratis update geactiveerd, zodat Matter-over-Thread-apparaten direct verbinden zonder extra router.</p>
<p><strong>Sterke punten:</strong> bijna universele compatibiliteit, lokale verwerking van automatiseringen, verzorgde app, eenvoudige visuele „Flows” en een grote catalogus met merk-apps. Het sobere ontwerp past in elke woonkamer.</p>
<p><strong>Beperkingen:</strong> premiumsegment, en sommige geavanceerde functies vragen tijd. Het app-aanbod is groot, maar kleiner dan dat van Home Assistant.</p>
<p><strong>Voor wie:</strong> huishoudens die alles willen centraliseren – inclusief Z-Wave en infrarood – zonder systeembeheerder te worden.</p>

<h3>2. Home Assistant Green – het krachtigst en meest open</h3>
<p>De <strong>Home Assistant Green</strong> is een kant-en-klaar kastje met Home Assistant, het meest gebruikte opensource-domoticaplatform ter wereld, met meer dan 2.000 integraties. Hij wordt via ethernet aangesloten en heeft <strong>geen ingebouwde domoticaradio’s</strong>: je voegt de <strong>Home Assistant Connect ZBT-2</strong> (Zigbee en Thread) en/of de <strong>Connect ZWA-2</strong> (Z-Wave) toe via usb.</p>
<p><strong>Sterke punten:</strong> volledig lokale werking, onbeperkte automatiseringen en scripts, aanpasbare dashboards, uitstekende energiemonitoring en een enorme community. Het abonnement Home Assistant Cloud is optioneel (eenvoudige toegang op afstand, spraakassistenten).</p>
<p><strong>Beperkingen:</strong> een echte leercurve; radioadapters komen er nog bij; geavanceerde instellingen lopen soms via YAML-bestanden.</p>
<p><strong>Voor wie:</strong> liefhebbers en knutselaars die volledige controle willen en heel uiteenlopende apparatuur koppelen (zonne-omvormers, slimme meters, laadpalen…).</p>

<h3>3. Aqara Hub M3 – beste prijs-kwaliteitverhouding</h3>
<p>De <strong>Aqara Hub M3</strong> is een multiprotocolhub: <strong>Zigbee, Thread-border-router, Matter-controller</strong>, dualband-wifi, Bluetooth en een <strong>360°-infraroodzender</strong>. Hij ondersteunt <strong>PoE</strong> (stroom via de netwerkkabel) en heeft een ingebouwde luidspreker voor meldingen. Daarnaast werkt hij als Matter-bridge voor Aqara-Zigbee-accessoires, die zo zichtbaar worden in Apple Woning, Google Home, Alexa of SmartThings.</p>
<p><strong>Sterke punten:</strong> lokaal uitgevoerde automatiseringen, veel mogelijkheden voor zijn klasse, bediening van infrarood-airco’s via Matter, eenvoudige installatie.</p>
<p><strong>Beperkingen:</strong> geen Z-Wave; de Aqara Home-app is vooral gericht op het eigen ecosysteem.</p>
<p><strong>Voor wie:</strong> wie vanaf nul begint met Aqara-sensoren of een betrouwbare Matter-bridge naar Apple, Google of Amazon zoekt.</p>

<h3>4. IKEA Dirigera – de eenvoudigste instapper</h3>
<p>De <strong>IKEA Dirigera-hub</strong> beheert de Zigbee-producten van IKEA en werkt als Matter-bridge. Sinds de update van november 2025 is hij ook <strong>Matter-controller en Thread-border-router</strong>, klaar voor de nieuwe Matter-over-Thread-lijn van IKEA.</p>
<p><strong>Sterke punten:</strong> heel eenvoudige IKEA Home smart-app, binnen enkele minuten geïnstalleerd, instapprijsniveau.</p>
<p><strong>Beperkingen:</strong> basisautomatiseringen, geen Z-Wave of infrarood, compatibiliteit gericht op IKEA.</p>
<p><strong>Voor wie:</strong> beginners met IKEA-lampen, -rolgordijnen en -afstandsbedieningen.</p>

<h3>5. Philips Hue Bridge Pro – de referentie voor verlichting</h3>
<p>De <strong>Philips Hue Bridge Pro</strong> is geen algemene hub, maar de meest complete verlichtingsbridge. Hij bestuurt via <strong>Zigbee tot 150 lampen en 50 accessoires</strong>, verbindt via ethernet of wifi en stelt zijn lampen beschikbaar aan Matter-platforms. <strong>MotionAware</strong> maakt van compatibele Hue-lampen bewegingssensoren door veranderingen in het radiosignaal te analyseren.</p>
<p><strong>Sterke punten:</strong> betrouwbaarheid, grote capaciteit, rijke lichtscènes, compatibel met Apple Woning, Alexa, Google Home en SmartThings.</p>
<p><strong>Beperkingen:</strong> beperkt tot Hue-verlichting en -accessoires; vervangt geen algemene hub.</p>
<p><strong>Voor wie:</strong> woningen met veel Hue-lampen. Lees verder in onze <a href="/nl/blog/eclairage-connecte-comparatif">vergelijking van slimme verlichting</a>.</p>

<h3>6. Jeedom Atlas – de Franse opensourcebox</h3>
<p>De <strong>Jeedom Atlas</strong> draait op Jeedom, opensourcesoftware die in Frankrijk is ontwikkeld. De ingebouwde radio kies je bij aankoop: <strong>Zigbee, Z-Wave of EnOcean</strong>. Hij heeft gigabit-ethernet, dualband-wifi, Bluetooth 5.0, 4 GB RAM, 32 GB eMMC-opslag en usb-poorten voor extra radiosticks.</p>
<p><strong>Sterke punten:</strong> lokale werking zonder verplichte cloud, veel plug-ins (sommige betaald), servicepakket inbegrepen bij de start.</p>
<p><strong>Beperkingen:</strong> standaard maar één domoticaradio, minder moderne interface, technischer in te stellen dan Homey.</p>
<p><strong>Voor wie:</strong> gebruikers die een open platform willen, vooral voor EnOcean- of Z-Wave-installaties.</p>

<h2>Vergelijkingstabel smart-home-hubs</h2>
<table>
<thead>
<tr><th>Model</th><th>Ingebouwde radio’s</th><th>Matter / Thread</th><th>Werking</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td>Homey Pro (Early 2023)</td><td>Zigbee, Z-Wave, IR, 433 MHz, BLE, wifi</td><td>Matter-controller, Thread ingebouwd</td><td>Lokaal</td><td>Alles eenvoudig centraliseren</td></tr>
<tr><td>Home Assistant Green</td><td>Geen (optioneel ZBT-2 / ZWA-2)</td><td>Ja met ZBT-2</td><td>Lokaal, open source</td><td>Liefhebbers, maximale kracht</td></tr>
<tr><td>Aqara Hub M3</td><td>Zigbee, IR, BLE, wifi, PoE</td><td>Matter-controller, Thread-border-router</td><td>Lokaal</td><td>Aqara-ecosysteem, Matter-bridge</td></tr>
<tr><td>IKEA Dirigera</td><td>Zigbee</td><td>Matter-controller, Thread-border-router</td><td>Lokaal + app</td><td>IKEA-beginners</td></tr>
<tr><td>Philips Hue Bridge Pro</td><td>Zigbee</td><td>Matter-bridge</td><td>Lokaal</td><td>Grote Hue-installaties</td></tr>
<tr><td>Jeedom Atlas</td><td>Zigbee, Z-Wave of EnOcean (naar keuze)</td><td>Afhankelijk van plug-ins</td><td>Lokaal, open source</td><td>Open, flexibele domotica</td></tr>
</tbody>
</table>

<h2>En een Apple TV of HomePod als hub?</h2>
<p>Leeft je huishouden in het Apple-ecosysteem, dan fungeren de <strong>Apple TV 4K</strong> (versie met wifi + ethernet) en de <strong>HomePod mini</strong> als woninghub voor de Woning-app: ze zijn Thread-border-router en Matter-controller en voeren automatiseringen uit. Dat is een elegante oplossing voor Matter- en HomeKit-apparaten, maar Zigbee en Z-Wave worden niet rechtstreeks ondersteund en de automatiseringen zijn minder verfijnd dan bij een echte domoticahub. Vaak blijft de Apple TV verantwoordelijk voor Thread en spraak, terwijl Homey of Home Assistant de geavanceerde logica regelt.</p>

<h2>Fouten om te vermijden</h2>
<ul>
<li><strong>Een hub kopen zonder je bestaande apparaten te controleren:</strong> maak eerst een lijst van sensoren en modules (Zigbee, Z-Wave, wifi, 433 MHz). Een Z-Wave-installatie sluit Aqara, IKEA en Hue meteen uit.</li>
<li><strong>Meerdere losse Thread-netwerken maken:</strong> border-routers van verschillende merken kunnen aparte netwerken vormen. Controleer of je controllers de Thread-gegevens delen.</li>
<li><strong>Denken dat Matter alles dekt:</strong> nog niet alle apparaatcategorieën worden door alle platforms ondersteund, en sommige functies blijven voorbehouden aan de app van de fabrikant.</li>
<li><strong>De hub in een metalen kast verstoppen:</strong> 2,4-GHz- en Z-Wave-radio’s hebben een centrale, vrije plek nodig, liefst niet pal naast de wifirouter.</li>
<li><strong>Back-ups vergeten:</strong> plan bij Home Assistant of Jeedom regelmatige back-ups buiten het kastje.</li>
</ul>

<h2>Installatie en goede gewoonten</h2>
<p>Sluit de hub waar mogelijk via ethernet aan. Voeg eerst apparaten op netstroom toe (stekkers, inbouwmodules): ze fungeren als herhaler in het Zigbee-, Z-Wave- of Thread-mesh en vergroten het bereik van sensoren op batterijen. Laat modules in de meterkast of achter een wandschakelaar plaatsen door een erkende elektricien en schakel altijd de groep uit. Zet tweestapsverificatie aan op gekoppelde accounts en installeer firmware-updates zodra ze beschikbaar zijn.</p>

<h2>Conclusie: welke smart-home-hub kies je?</h2>
<p>De <strong>Homey Pro (Early 2023)</strong> is dankzij zijn vele radio’s en lokale werking de beste hub voor de meeste huishoudens. De <strong>Home Assistant Green</strong> is onverslaanbaar in kracht als je bereid bent te leren. De <strong>Aqara Hub M3</strong> biedt de beste balans tussen functies en budget, terwijl de <strong>IKEA Dirigera</strong> volstaat om te beginnen. De <strong>Philips Hue Bridge Pro</strong> blijft onmisbaar voor een grote Hue-installatie, en de <strong>Jeedom Atlas</strong> spreekt opensourceliefhebbers aan. Bekijk alle modellen in onze rubriek <a href="/nl/energie-domotique/hubs-domotique">smart-home-hubs</a>.</p>`,
  },
  faq: [
    {
      question: {
        fr: 'Faut-il encore une box domotique avec Matter ?',
        en: 'Do you still need a smart home hub with Matter?',
        de: 'Braucht man mit Matter noch eine Smart-Home-Zentrale?',
        es: '¿Sigue haciendo falta un hub domótico con Matter?',
        it: 'Serve ancora un hub domotico con Matter?',
        nl: 'Heb je met Matter nog een smart-home-hub nodig?',
      },
      answer: {
        fr: "Oui dans la plupart des cas. Matter rend les appareils compatibles entre eux, mais il faut un contrôleur pour les piloter et exécuter les automatisations, ainsi qu'un routeur de bordure Thread pour les appareils Matter sur Thread. Une box gère aussi les appareils Zigbee ou Z-Wave que Matter ne couvre pas directement.",
        en: 'Yes, in most cases. Matter makes devices compatible with each other, but you still need a controller to run them and their automations, plus a Thread border router for Matter-over-Thread devices. A hub also handles Zigbee or Z-Wave devices that Matter does not cover directly.',
        de: 'In den meisten Fällen ja. Matter macht Geräte untereinander kompatibel, doch es braucht einen Controller, der sie steuert und Automationen ausführt, sowie einen Thread-Border-Router für Matter-over-Thread-Geräte. Eine Zentrale bindet außerdem Zigbee- oder Z-Wave-Geräte ein, die Matter nicht direkt abdeckt.',
        es: 'Sí, en la mayoría de los casos. Matter hace que los dispositivos sean compatibles entre sí, pero sigue haciendo falta un controlador que los gestione y ejecute las automatizaciones, además de un router de borde Thread para los dispositivos Matter sobre Thread. Un hub también gestiona dispositivos Zigbee o Z-Wave que Matter no cubre directamente.',
        it: 'Sì, nella maggior parte dei casi. Matter rende i dispositivi compatibili tra loro, ma serve comunque un controller che li gestisca ed esegua le automazioni, oltre a un border router Thread per i dispositivi Matter su Thread. Un hub gestisce anche i dispositivi Zigbee o Z-Wave che Matter non copre direttamente.',
        nl: 'Ja, in de meeste gevallen. Matter maakt apparaten onderling compatibel, maar je hebt nog steeds een controller nodig die ze bedient en automatiseringen uitvoert, plus een Thread-border-router voor Matter-over-Thread-apparaten. Een hub beheert ook Zigbee- of Z-Wave-apparaten die Matter niet rechtstreeks ondersteunt.',
      },
    },
    {
      question: {
        fr: 'Quelle box domotique gère à la fois Zigbee et Z-Wave ?',
        en: 'Which smart home hub supports both Zigbee and Z-Wave?',
        de: 'Welche Smart-Home-Zentrale unterstützt Zigbee und Z-Wave gleichzeitig?',
        es: '¿Qué hub domótico admite a la vez Zigbee y Z-Wave?',
        it: 'Quale hub domotico supporta sia Zigbee sia Z-Wave?',
        nl: 'Welke smart-home-hub ondersteunt zowel Zigbee als Z-Wave?',
      },
      answer: {
        fr: "La Homey Pro (Early 2023) intègre les deux d'origine. Le Home Assistant Green les gère aussi, à condition d'ajouter les adaptateurs USB Connect ZBT-2 (Zigbee) et Connect ZWA-2 (Z-Wave). La Jeedom Atlas embarque une seule radio au choix mais accepte des clés USB supplémentaires.",
        en: 'The Homey Pro (Early 2023) has both built in. The Home Assistant Green handles them too once you add the Connect ZBT-2 (Zigbee) and Connect ZWA-2 (Z-Wave) USB adapters. The Jeedom Atlas ships with one radio of your choice but accepts extra USB sticks.',
        de: 'Der Homey Pro (Early 2023) hat beide ab Werk integriert. Auch der Home Assistant Green unterstützt beide, sobald die USB-Adapter Connect ZBT-2 (Zigbee) und Connect ZWA-2 (Z-Wave) ergänzt werden. Der Jeedom Atlas hat ein wählbares Funkmodul, akzeptiert aber zusätzliche USB-Sticks.',
        es: 'El Homey Pro (Early 2023) integra ambos de serie. El Home Assistant Green también los gestiona si añades los adaptadores USB Connect ZBT-2 (Zigbee) y Connect ZWA-2 (Z-Wave). El Jeedom Atlas incluye una sola radio a elegir, pero admite llaves USB adicionales.',
        it: "L'Homey Pro (Early 2023) li integra entrambi di serie. Anche l'Home Assistant Green li supporta aggiungendo gli adattatori USB Connect ZBT-2 (Zigbee) e Connect ZWA-2 (Z-Wave). Il Jeedom Atlas ha una sola radio a scelta, ma accetta chiavette USB aggiuntive.",
        nl: 'De Homey Pro (Early 2023) heeft beide standaard ingebouwd. Ook de Home Assistant Green ondersteunt ze als je de usb-adapters Connect ZBT-2 (Zigbee) en Connect ZWA-2 (Z-Wave) toevoegt. De Jeedom Atlas heeft één radio naar keuze, maar accepteert extra usb-sticks.',
      },
    },
    {
      question: {
        fr: 'Une box domotique fonctionne-t-elle sans Internet ?',
        en: 'Does a smart home hub work without internet?',
        de: 'Funktioniert eine Smart-Home-Zentrale ohne Internet?',
        es: '¿Funciona un hub domótico sin internet?',
        it: 'Un hub domotico funziona senza internet?',
        nl: 'Werkt een smart-home-hub zonder internet?',
      },
      answer: {
        fr: "Les box qui exécutent leurs automatisations en local, comme Homey Pro, Home Assistant Green, Jeedom Atlas ou Aqara Hub M3, continuent de piloter la maison sans connexion. En revanche, l'accès à distance depuis le smartphone, les assistants vocaux et les intégrations cloud de certaines marques sont indisponibles pendant la coupure.",
        en: 'Hubs that run automations locally, such as Homey Pro, Home Assistant Green, Jeedom Atlas or Aqara Hub M3, keep running the home without a connection. However, remote access from your phone, voice assistants and some brands’ cloud integrations are unavailable during the outage.',
        de: 'Zentralen mit lokaler Ausführung wie Homey Pro, Home Assistant Green, Jeedom Atlas oder Aqara Hub M3 steuern das Zuhause auch ohne Verbindung weiter. Fernzugriff per Smartphone, Sprachassistenten und Cloud-Integrationen mancher Marken sind während des Ausfalls jedoch nicht verfügbar.',
        es: 'Los hubs que ejecutan las automatizaciones en local, como Homey Pro, Home Assistant Green, Jeedom Atlas o Aqara Hub M3, siguen controlando la casa sin conexión. En cambio, el acceso remoto desde el móvil, los asistentes de voz y las integraciones en la nube de algunas marcas no están disponibles durante el corte.',
        it: "Gli hub che eseguono le automazioni in locale, come Homey Pro, Home Assistant Green, Jeedom Atlas o Aqara Hub M3, continuano a gestire la casa senza connessione. Durante l'interruzione non sono però disponibili l'accesso remoto dallo smartphone, gli assistenti vocali e le integrazioni cloud di alcune marche.",
        nl: 'Hubs die automatiseringen lokaal uitvoeren, zoals Homey Pro, Home Assistant Green, Jeedom Atlas of Aqara Hub M3, blijven het huis zonder verbinding aansturen. Toegang op afstand via je smartphone, spraakassistenten en cloudkoppelingen van sommige merken werken tijdens de storing echter niet.',
      },
    },
    {
      question: {
        fr: 'Home Assistant ou Homey : lequel choisir ?',
        en: 'Home Assistant or Homey: which should you choose?',
        de: 'Home Assistant oder Homey: Was soll man wählen?',
        es: 'Home Assistant u Homey: ¿cuál elegir?',
        it: 'Home Assistant o Homey: quale scegliere?',
        nl: 'Home Assistant of Homey: welke kies je?',
      },
      answer: {
        fr: "Homey Pro convient à ceux qui veulent une solution prête à l'emploi avec de nombreuses radios intégrées et une application simple. Home Assistant offre davantage d'intégrations et de liberté, mais demande plus de temps de configuration et l'achat d'adaptateurs radio. Si vous aimez bricoler, Home Assistant ; sinon, Homey.",
        en: 'Homey Pro suits people who want a ready-to-use solution with many built-in radios and a simple app. Home Assistant offers more integrations and freedom, but takes more setup time and requires radio adapters. If you enjoy tinkering, choose Home Assistant; otherwise, Homey.',
        de: 'Homey Pro passt zu allen, die eine sofort nutzbare Lösung mit vielen eingebauten Funkstandards und einfacher App wollen. Home Assistant bietet mehr Integrationen und Freiheit, verlangt aber mehr Einrichtungszeit und zusätzliche Funkadapter. Wer gern tüftelt, nimmt Home Assistant, alle anderen Homey.',
        es: 'Homey Pro es ideal para quien quiere una solución lista para usar, con muchas radios integradas y una app sencilla. Home Assistant ofrece más integraciones y libertad, pero exige más tiempo de configuración y comprar adaptadores de radio. Si te gusta trastear, Home Assistant; si no, Homey.',
        it: 'Homey Pro è adatto a chi vuole una soluzione pronta all’uso, con molte radio integrate e un’app semplice. Home Assistant offre più integrazioni e libertà, ma richiede più tempo di configurazione e l’acquisto di adattatori radio. Se ami smanettare, Home Assistant; altrimenti, Homey.',
        nl: 'Homey Pro past bij wie een kant-en-klare oplossing wil met veel ingebouwde radio’s en een eenvoudige app. Home Assistant biedt meer integraties en vrijheid, maar vraagt meer insteltijd en extra radioadapters. Houd je van knutselen, kies dan Home Assistant; anders Homey.',
      },
    },
    {
      question: {
        fr: "Peut-on utiliser une Apple TV comme box domotique ?",
        en: 'Can you use an Apple TV as a smart home hub?',
        de: 'Kann man ein Apple TV als Smart-Home-Zentrale nutzen?',
        es: '¿Se puede usar un Apple TV como hub domótico?',
        it: "Si può usare un'Apple TV come hub domotico?",
        nl: 'Kun je een Apple TV als smart-home-hub gebruiken?',
      },
      answer: {
        fr: "Oui pour l'écosystème Apple : l'Apple TV 4K (Wi-Fi + Ethernet) et le HomePod mini sont routeurs de bordure Thread et contrôleurs Matter, et exécutent les automatisations de l'app Maison. Ils ne gèrent pas directement le Zigbee ni le Z-Wave : pour ces appareils, il faut une box dédiée ou un pont compatible.",
        en: 'Yes, within the Apple ecosystem: the Apple TV 4K (Wi-Fi + Ethernet) and HomePod mini are Thread border routers and Matter controllers, and they run Home app automations. They do not handle Zigbee or Z-Wave directly, so those devices need a dedicated hub or a compatible bridge.',
        de: 'Ja, im Apple-Ökosystem: Apple TV 4K (WLAN + Ethernet) und HomePod mini sind Thread-Border-Router und Matter-Controller und führen Automationen der Home-App aus. Zigbee oder Z-Wave steuern sie nicht direkt; dafür braucht es eine eigene Zentrale oder eine kompatible Bridge.',
        es: 'Sí, dentro del ecosistema Apple: el Apple TV 4K (wifi + Ethernet) y el HomePod mini son routers de borde Thread y controladores Matter, y ejecutan las automatizaciones de la app Casa. No gestionan Zigbee ni Z-Wave directamente: para esos dispositivos necesitas un hub dedicado o un puente compatible.',
        it: "Sì, nell'ecosistema Apple: l'Apple TV 4K (Wi-Fi + Ethernet) e l'HomePod mini sono border router Thread e controller Matter ed eseguono le automazioni dell'app Casa. Non gestiscono direttamente Zigbee né Z-Wave: per questi dispositivi serve un hub dedicato o un bridge compatibile.",
        nl: 'Ja, binnen het Apple-ecosysteem: de Apple TV 4K (wifi + ethernet) en de HomePod mini zijn Thread-border-router en Matter-controller en voeren automatiseringen van de Woning-app uit. Zigbee en Z-Wave beheren ze niet rechtstreeks; daarvoor heb je een aparte hub of een compatibele bridge nodig.',
      },
    },
    {
      question: {
        fr: 'Où placer sa box domotique pour une bonne portée ?',
        en: 'Where should you place a smart home hub for good range?',
        de: 'Wo platziert man die Smart-Home-Zentrale für gute Reichweite?',
        es: '¿Dónde colocar el hub domótico para tener buen alcance?',
        it: "Dove posizionare l'hub domotico per una buona copertura?",
        nl: 'Waar plaats je een smart-home-hub voor een goed bereik?',
      },
      answer: {
        fr: "Au centre du logement, en hauteur et à l'air libre, jamais dans un placard métallique ni collée au routeur Wi-Fi. Branchez-la en Ethernet si possible et ajoutez des appareils alimentés sur secteur, comme des prises connectées, qui relaient le réseau maillé vers les pièces éloignées.",
        en: 'In a central spot, raised and in the open, never in a metal cabinet or right next to the Wi-Fi router. Use Ethernet if possible and add mains-powered devices, such as smart plugs, which relay the mesh network to distant rooms.',
        de: 'Zentral in der Wohnung, erhöht und frei stehend, nie im Metallschrank oder direkt neben dem WLAN-Router. Schließen Sie sie möglichst per Ethernet an und ergänzen Sie netzbetriebene Geräte wie smarte Steckdosen, die das Mesh-Netz in entfernte Räume weiterleiten.',
        es: 'En el centro de la vivienda, en alto y despejado, nunca en un armario metálico ni pegado al router wifi. Conéctalo por Ethernet si puedes y añade dispositivos enchufados a la red, como enchufes inteligentes, que repiten la red mallada hacia las habitaciones alejadas.',
        it: "Al centro della casa, in alto e in posizione libera, mai in un armadio metallico né attaccato al router Wi-Fi. Collegalo via Ethernet se possibile e aggiungi dispositivi alimentati da rete, come prese smart, che estendono la rete mesh alle stanze più lontane.",
        nl: 'Centraal in de woning, wat hoger en vrij opgesteld, nooit in een metalen kast of pal naast de wifirouter. Sluit hem bij voorkeur via ethernet aan en voeg apparaten op netstroom toe, zoals slimme stekkers, die het mesh-netwerk naar verder gelegen kamers doorgeven.',
      },
    },
  ],
}
