import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'maison-connectee-matter-thread-2026',
  category: 'culture',
  pillar: 'energie-domotique',
  relatedSlugs: ['box-domotique-hub-comparatif', 'guide-domotique-economie-energie-2026', 'eclairage-connecte-comparatif'],
  datePublished: '2026-04-16',
  dateModified: '2026-10-09',
  readingTime: 9,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Enceinte connectée posée sur une table, point de départ typique d’une maison connectée Matter',
        en: 'Smart speaker on a table, a typical starting point for a Matter smart home',
        de: 'Smarter Lautsprecher auf einem Tisch, ein typischer Einstieg ins Matter-Smart-Home',
        es: 'Altavoz inteligente sobre una mesa, punto de partida habitual de un hogar conectado con Matter',
        it: 'Altoparlante smart su un tavolo, tipico punto di partenza di una casa connessa Matter',
        nl: 'Slimme speaker op een tafel, een typisch startpunt voor een Matter-smart home',
      },
    },
  ],
  title: {
    fr: 'Matter et Thread : la maison connectée expliquée simplement en 2026',
    en: 'Matter and Thread Explained: The Smart Home Standard in 2026',
    de: 'Matter und Thread einfach erklärt: der Smart-Home-Standard 2026',
    es: 'Matter y Thread explicados: el estándar del hogar conectado en 2026',
    it: 'Matter e Thread spiegati: lo standard della casa connessa nel 2026',
    nl: 'Matter en Thread uitgelegd: de smart-home-standaard in 2026',
  },
  excerpt: {
    fr: 'Matter fait parler vos appareils connectés entre eux, Thread les relie en réseau maillé basse consommation. Versions, border routers Thread par écosystème, mise à jour IKEA DIRIGERA et hubs à choisir en 2026.',
    en: 'Matter lets smart devices from different brands talk to each other, and Thread links them in a low-power mesh. Versions, Thread border routers by ecosystem, the IKEA DIRIGERA update and which hub to pick in 2026.',
    de: 'Matter lässt Smart-Home-Geräte verschiedener Marken miteinander sprechen, Thread verbindet sie in einem stromsparenden Mesh. Versionen, Thread-Border-Router je Ökosystem, das IKEA-DIRIGERA-Update und die passenden Hubs 2026.',
    es: 'Matter hace que dispositivos de distintas marcas se entiendan y Thread los une en una red mallada de bajo consumo. Versiones, border routers Thread por ecosistema, la actualización de IKEA DIRIGERA y qué hub elegir en 2026.',
    it: 'Matter fa dialogare dispositivi smart di marche diverse, Thread li collega in una rete mesh a basso consumo. Versioni, border router Thread per ecosistema, l’aggiornamento di IKEA DIRIGERA e quale hub scegliere nel 2026.',
    nl: 'Matter laat slimme apparaten van verschillende merken met elkaar praten, Thread verbindt ze in een zuinig mesh-netwerk. Versies, Thread-borderrouters per ecosysteem, de IKEA DIRIGERA-update en welke hub je kiest in 2026.',
  },
  content: {
    fr: `<p><strong>Matter est un langage commun qui permet à un appareil connecté de fonctionner avec Apple Maison, Google Home, Alexa et SmartThings à la fois, et Thread est le réseau sans fil basse consommation sur lequel une grande partie de ces appareils communique.</strong> Pour en profiter en 2026, il vous faut un contrôleur Matter et, pour les appareils Thread, un « border router » Thread : souvent une enceinte, un écran ou un hub que vous possédez déjà.</p>
<p>Ce guide explique ce que font vraiment ces deux standards, où en sont leurs versions, quels appareils servent de border router dans chaque écosystème et quel hub choisir. Il s’appuie sur les spécifications publiées par la Connectivity Standards Alliance (CSA) et le Thread Group, la documentation des fabricants, des avis indépendants et les retours d’acheteurs vérifiés. Pour comparer les box et hubs disponibles, consultez aussi notre page <a href="/fr/energie-domotique/hubs-domotique">hubs domotique</a>.</p>

<h2>Matter, c’est quoi exactement ?</h2>
<p>Matter est un standard d’application ouvert, piloté par la Connectivity Standards Alliance, qui regroupe notamment Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) et Eve. Il définit la façon dont un appareil décrit ce qu’il sait faire (une lampe, une prise, un thermostat…) et dont un contrôleur lui envoie des ordres. Trois principes le distinguent des anciens écosystèmes fermés :</p>
<ul>
<li><strong>Le contrôle local :</strong> les commandes circulent sur votre réseau domestique. Allumer une lampe Matter depuis l’application ne dépend pas d’un serveur distant, ce qui rend le système plus réactif et utilisable en cas de coupure internet (l’accès à distance et certains assistants vocaux restent, eux, dépendants du cloud).</li>
<li><strong>Le multi-admin :</strong> un même appareil peut être ajouté à plusieurs écosystèmes en même temps, par exemple Apple Maison pour vous et Google Home pour un autre membre du foyer.</li>
<li><strong>La sécurité intégrée :</strong> chaque appareil certifié possède une identité vérifiable et les échanges sont chiffrés.</li>
</ul>

<h3>Les versions de Matter en bref</h3>
<p>Matter 1.0 est sorti fin 2022 avec l’éclairage, les prises, les serrures, les capteurs et les thermostats. Les versions suivantes ont élargi le périmètre : aspirateurs robots et gros électroménager (1.2), suivi de la consommation d’énergie et appareils de cuisson (1.3), pompes à chaleur, batteries domestiques et chauffe-eau (1.4). <strong>Matter 1.5</strong>, publié en novembre 2025, a ajouté les caméras ainsi que les portails, portes de garage et volets. <strong>Matter 1.6</strong>, publié en juin 2026, apporte l’appairage par NFC, le « Joint Fabric » qui facilite le partage d’un même réseau entre plusieurs plateformes, et des suggestions pour thermostats.</p>
<p>Attention : qu’une catégorie existe dans la spécification ne signifie pas que votre application la prend déjà en charge. Chaque écosystème déploie les nouveaux types d’appareils à son rythme, et les fonctions avancées (cartographie d’un aspirateur, historique vidéo, réglages fins) restent souvent dans l’application du fabricant.</p>

<h2>Thread, le réseau qui transporte Matter</h2>
<p>Matter peut fonctionner sur Wi-Fi, sur Ethernet ou sur Thread. Thread est un réseau radio basse consommation basé sur IPv6, conçu pour les petits appareils : capteurs, ampoules, prises, vannes thermostatiques, serrures.</p>
<ul>
<li><strong>Un réseau maillé :</strong> les appareils branchés sur secteur (prises, ampoules) relaient les messages des autres. Plus il y en a, plus la couverture s’étend.</li>
<li><strong>Une faible consommation :</strong> les capteurs sur pile peuvent rester longtemps en veille, d’où leur intérêt pour les détecteurs d’ouverture ou de température.</li>
<li><strong>Le border router :</strong> c’est le pont entre le réseau Thread et votre réseau Wi-Fi/Ethernet. Sans lui, un appareil Matter-over-Thread ne peut pas être ajouté. Avoir plusieurs border routers renforce la fiabilité.</li>
</ul>
<p>La version <strong>Thread 1.4</strong> règle un vrai problème : auparavant, un border router Apple et un border router Google pouvaient créer deux réseaux Thread séparés dans la même maison. Thread 1.4 standardise le partage des identifiants réseau entre marques. Depuis le 1er janvier 2026, c’est la seule version sous laquelle un nouveau border router peut être certifié, mais les appareils déjà installés reçoivent la mise à jour à des rythmes différents selon les marques.</p>

<h2>Quels appareils servent de border router Thread ?</h2>
<table>
<thead>
<tr><th>Écosystème</th><th>Border routers Thread (et contrôleurs Matter)</th></tr>
</thead>
<tbody>
<tr><td>Apple Maison</td><td>HomePod mini, HomePod (2e génération), Apple TV 4K (2e génération et 3e génération Wi-Fi + Ethernet ; la version 3e génération Wi-Fi seule n’a pas Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2e génération), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4e génération), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3e génération) et Echo Show 11, Echo Hub, ainsi que plusieurs routeurs eero</td></tr>
<tr><td>IKEA</td><td>Hub DIRIGERA, depuis la mise à jour logicielle de juillet 2025</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Les modèles plus anciens ou d’entrée de gamme (Echo Dot classique, Nest Mini, Nest Hub de 1re génération) peuvent piloter des appareils Matter en Wi-Fi mais ne servent pas de border router Thread. Vérifiez la fiche de votre appareil avant d’acheter des produits Thread.</p>

<h2>Le cas IKEA DIRIGERA : ce qui a changé</h2>
<p>Le hub DIRIGERA d’IKEA a d’abord été un hub Zigbee capable d’exposer les produits IKEA aux autres écosystèmes via un pont Matter. En juillet 2025, la mise à jour 2.805.6 l’a transformé en <strong>contrôleur Matter</strong> (il peut ajouter et automatiser des appareils Matter d’autres marques dans l’application IKEA Home smart) et a activé sa radio <strong>Thread</strong> pour en faire un border router. La fonction contrôleur a démarré en version bêta et doit être activée dans les réglages de l’application.</p>
<p>Depuis début 2026, IKEA vend aussi une nouvelle gamme d’une vingtaine de produits Matter-over-Thread natifs : ampoules KAJPLATS, télécommandes BILRESA, détecteur de mouvement MYGGSPRAY, capteur de température et d’humidité TIMMERFLOTTE, entre autres. Ces produits peuvent rejoindre Apple Maison, Google Home, Alexa ou SmartThings directement via un border router Thread, sans passer par DIRIGERA. Les anciennes ampoules TRADFRI restent en Zigbee : elles ont besoin de DIRIGERA pour apparaître dans Matter.</p>

<h2>Les critères pour choisir son hub Matter et Thread</h2>
<ul>
<li><strong>Votre écosystème principal :</strong> l’assistant vocal et l’application que vous utilisez au quotidien comptent plus que la fiche technique.</li>
<li><strong>Border router Thread intégré :</strong> indispensable si vous visez des capteurs et ampoules Thread.</li>
<li><strong>Zigbee en plus :</strong> utile si vous possédez déjà des produits Zigbee (Aqara, IKEA TRADFRI, Hue) ; certains hubs les exposent en Matter grâce à une fonction de pont.</li>
<li><strong>Version Thread 1.4 :</strong> elle simplifie la cohabitation de plusieurs marques de border routers.</li>
<li><strong>Automatisations locales :</strong> vérifiez qu’elles s’exécutent sur le hub et pas uniquement dans le cloud.</li>
</ul>

<h2>Les hubs et appareils Matter à retenir en 2026</h2>

<h3>1. Aqara Hub M3 — le meilleur choix global</h3>
<p>Le Hub M3 réunit contrôleur Matter, border router Thread, hub Zigbee, émetteur infrarouge et connexion Ethernet avec alimentation PoE possible. Il expose les capteurs Zigbee d’Aqara en Matter et exécute les automatisations en local.</p>
<p><strong>Points forts :</strong> le plus polyvalent de cette sélection, compatible avec tous les grands écosystèmes, connexion filaire stable. <strong>Limites :</strong> la configuration fine passe par l’application Aqara, plus technique. <strong>Pour qui :</strong> ceux qui mélangent plusieurs marques ou ont déjà des capteurs Zigbee.</p>

<h3>2. IKEA DIRIGERA — le meilleur rapport qualité-prix</h3>
<p>Hub Zigbee, pont Matter, et désormais contrôleur Matter et border router Thread grâce à sa mise à jour. C’est la porte d’entrée naturelle pour l’éclairage IKEA, ancien comme nouveau.</p>
<p><strong>Points forts :</strong> positionnement accessible, gère les produits TRADFRI existants et la nouvelle gamme Thread. <strong>Limites :</strong> les types d’appareils pris en charge restent limités et les automatisations sont moins riches que chez Aqara. <strong>Pour qui :</strong> les foyers qui équipent leur éclairage chez IKEA.</p>

<h3>3. Apple HomePod mini — pour les utilisateurs d’iPhone</h3>
<p>Le HomePod mini sert à la fois d’enceinte Siri, de concentrateur Apple Maison et de border router Thread. Il est l’une des façons les plus simples de démarrer avec Matter dans l’univers Apple.</p>
<p><strong>Points forts :</strong> configuration très simple depuis l’iPhone, automatisations locales. <strong>Limites :</strong> pas de Zigbee, et l’application Maison exige un appareil Apple. <strong>Pour qui :</strong> les foyers déjà équipés en iPhone.</p>

<h3>4. Amazon Echo Dot Max — pour les utilisateurs d’Alexa</h3>
<p>Sorti fin 2025, l’Echo Dot Max intègre un hub domotique Matter, Thread et Zigbee dans un format compact, avec un son plus ample que l’Echo Dot classique.</p>
<p><strong>Points forts :</strong> Thread et Zigbee sans hub supplémentaire, large catalogue d’appareils compatibles Alexa. <strong>Limites :</strong> les fonctions de la nouvelle Alexa+ ne sont pas disponibles partout en Europe. <strong>Pour qui :</strong> ceux qui pilotent déjà leur maison à la voix avec Alexa.</p>

<h3>5. Google Nest Hub (2e génération) — pour l’écosystème Google</h3>
<p>Écran connecté avec Google Assistant, il sert de contrôleur Matter et de border router Thread pour Google Home.</p>
<p><strong>Points forts :</strong> écran pratique pour visualiser les appareils, intégration Android. <strong>Limites :</strong> pas de Zigbee, et le matériel n’est plus tout récent. <strong>Pour qui :</strong> les foyers Android qui veulent un écran de contrôle dans la cuisine ou le salon.</p>

<h3>6. Eve Energy (Matter) — l’appareil Thread de référence</h3>
<p>Ce n’est pas un hub mais une prise connectée Matter-over-Thread avec mesure de consommation, qui fonctionne avec n’importe quel border router Thread et contrôleur Matter. Elle relaie aussi le réseau Thread des autres appareils.</p>
<p><strong>Points forts :</strong> sans cloud ni compte obligatoire, compatible avec les quatre grands écosystèmes. <strong>Limites :</strong> format plus encombrant qu’une mini-prise Wi-Fi. <strong>Pour qui :</strong> un premier appareil Thread pour vérifier que tout fonctionne. Voir aussi notre <a href="/fr/blog/box-domotique-hub-comparatif">comparatif des box domotiques</a>.</p>

<h2>Tableau comparatif</h2>
<table>
<thead>
<tr><th>Modèle</th><th>Rôle</th><th>Protocoles</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Contrôleur Matter, border router Thread, pont</td><td>Thread, Zigbee, Wi-Fi, Ethernet/PoE, IR</td><td>Installations multimarques</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Contrôleur Matter, border router Thread, pont</td><td>Thread, Zigbee, Wi-Fi, Ethernet</td><td>Éclairage IKEA</td></tr>
<tr><td>Apple HomePod mini</td><td>Concentrateur Apple Maison, border router Thread</td><td>Thread, Wi-Fi</td><td>Foyers iPhone</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Contrôleur Matter, border router Thread</td><td>Thread, Zigbee, Wi-Fi</td><td>Utilisateurs d’Alexa</td></tr>
<tr><td>Google Nest Hub (2e gén.)</td><td>Contrôleur Matter, border router Thread</td><td>Thread, Wi-Fi</td><td>Foyers Android</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Prise avec mesure, routeur Thread</td><td>Thread</td><td>Premier appareil Thread</td></tr>
</tbody>
</table>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Croire que « compatible Matter » veut dire « toutes les fonctions » :</strong> l’essentiel passe par Matter, mais les réglages avancés restent parfois dans l’application du fabricant.</li>
<li><strong>Acheter des appareils Thread sans border router :</strong> vérifiez d’abord que votre enceinte, votre écran ou votre box en contient un.</li>
<li><strong>Confondre Zigbee et Thread :</strong> une ampoule Hue ou TRADFRI classique est en Zigbee et passe par un pont pour rejoindre Matter.</li>
<li><strong>Jeter le code d’appairage :</strong> gardez le QR code ou le code à 11 chiffres de chaque appareil ; il sert en cas de réinitialisation.</li>
<li><strong>Miser tout de suite sur les caméras Matter :</strong> la prise en charge existe depuis Matter 1.5, mais les modèles et les applications compatibles restent encore peu nombreux.</li>
</ul>

<h2>Installation : les bons réflexes</h2>
<ol>
<li>Mettez à jour votre hub ou votre enceinte avant d’ajouter le premier appareil.</li>
<li>Placez le border router au centre du logement, et ajoutez des appareils Thread sur secteur pour étendre le maillage.</li>
<li>Ajoutez chaque appareil dans votre écosystème principal, puis partagez-le avec les autres via l’option « appairer un autre service » ou un code d’appairage temporaire.</li>
<li>Gardez votre smartphone avec Bluetooth activé pendant l’appairage : il sert souvent à la première mise en relation.</li>
</ol>
<p>Pour aller plus loin sur l’éclairage, lisez notre <a href="/fr/blog/eclairage-connecte-comparatif">comparatif de l’éclairage connecté</a>.</p>

<h2>Notre verdict</h2>
<p>En 2026, Matter et Thread tiennent leur promesse principale : choisir ses appareils sans se soucier de l’écosystème. Si vous partez de zéro avec plusieurs marques, l’<strong>Aqara Hub M3</strong> est le hub le plus complet. Pour un budget serré et de l’éclairage IKEA, le <strong>DIRIGERA</strong> mis à jour fait l’essentiel. Et si vous êtes déjà chez Apple, Amazon ou Google, votre <strong>HomePod mini</strong>, votre <strong>Echo Dot Max</strong> ou votre <strong>Nest Hub</strong> suffit souvent à démarrer : ajoutez une prise comme l’<strong>Eve Energy</strong> pour construire le réseau Thread.</p>`,

    en: `<p><strong>Matter is a common language that lets a smart device work with Apple Home, Google Home, Alexa and SmartThings at the same time, and Thread is the low-power wireless network that many of those devices use to communicate.</strong> To use them in 2026 you need a Matter controller and, for Thread devices, a Thread border router: often a speaker, display or hub you already own.</p>
<p>This guide explains what the two standards actually do, where their versions stand, which devices act as border routers in each ecosystem and which hub to choose. It draws on specifications published by the Connectivity Standards Alliance (CSA) and the Thread Group, manufacturer documentation, independent reviews and verified buyer feedback. To compare available hubs, see our <a href="/en/energie-domotique/hubs-domotique">smart home hubs</a> page.</p>

<h2>What exactly is Matter?</h2>
<p>Matter is an open application standard run by the Connectivity Standards Alliance, whose members include Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) and Eve. It defines how a device describes what it can do (a light, a plug, a thermostat…) and how a controller sends it commands. Three principles set it apart from the old closed ecosystems:</p>
<ul>
<li><strong>Local control:</strong> commands travel over your home network. Switching on a Matter light from the app does not depend on a remote server, so the system responds quickly and keeps working during an internet outage (remote access and some voice assistants still rely on the cloud).</li>
<li><strong>Multi-admin:</strong> one device can be added to several ecosystems at once, for example Apple Home for you and Google Home for someone else in the household.</li>
<li><strong>Built-in security:</strong> every certified device has a verifiable identity and traffic is encrypted.</li>
</ul>

<h3>Matter versions at a glance</h3>
<p>Matter 1.0 arrived in late 2022 with lighting, plugs, locks, sensors and thermostats. Later versions widened the scope: robot vacuums and major appliances (1.2), energy reporting and cooking appliances (1.3), heat pumps, home batteries and water heaters (1.4). <strong>Matter 1.5</strong>, published in November 2025, added cameras plus gates, garage doors and window coverings. <strong>Matter 1.6</strong>, published in June 2026, brings NFC setup, “Joint Fabric” to make sharing one network across several platforms easier, and thermostat suggestions.</p>
<p>Keep in mind that a category existing in the specification does not mean your app supports it yet. Each ecosystem rolls out new device types at its own pace, and advanced features (vacuum maps, video history, fine settings) often stay in the manufacturer’s app.</p>

<h2>Thread, the network that carries Matter</h2>
<p>Matter can run over Wi-Fi, Ethernet or Thread. Thread is a low-power IPv6 radio network designed for small devices: sensors, bulbs, plugs, radiator valves and locks.</p>
<ul>
<li><strong>A mesh network:</strong> mains-powered devices (plugs, bulbs) relay messages for the others. The more you have, the wider the coverage.</li>
<li><strong>Low power use:</strong> battery sensors can sleep for long periods, which suits door and temperature sensors.</li>
<li><strong>The border router:</strong> this is the bridge between the Thread network and your Wi-Fi/Ethernet network. Without one, a Matter-over-Thread device cannot be added. Having several border routers improves reliability.</li>
</ul>
<p><strong>Thread 1.4</strong> fixes a real problem: previously, an Apple and a Google border router could create two separate Thread networks in the same home. Thread 1.4 standardises sharing network credentials across brands. Since 1 January 2026 it is the only version under which new border routers can be certified, but devices already in homes are receiving the update at different speeds depending on the brand.</p>

<h2>Which devices are Thread border routers?</h2>
<table>
<thead>
<tr><th>Ecosystem</th><th>Thread border routers (and Matter controllers)</th></tr>
</thead>
<tbody>
<tr><td>Apple Home</td><td>HomePod mini, HomePod (2nd generation), Apple TV 4K (2nd generation and 3rd generation Wi-Fi + Ethernet; the Wi-Fi-only 3rd generation model has no Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2nd generation), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4th generation), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3rd generation) and Echo Show 11, Echo Hub, plus several eero routers</td></tr>
<tr><td>IKEA</td><td>DIRIGERA hub, since the July 2025 software update</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Older or entry-level models (the regular Echo Dot, Nest Mini, first-generation Nest Hub) can control Wi-Fi Matter devices but are not Thread border routers. Check your device’s specifications before buying Thread products.</p>

<h2>The IKEA DIRIGERA case: what changed</h2>
<p>IKEA’s DIRIGERA hub started out as a Zigbee hub able to expose IKEA products to other ecosystems through a Matter bridge. In July 2025, update 2.805.6 turned it into a <strong>Matter controller</strong> (it can add and automate other brands’ Matter devices in the IKEA Home smart app) and switched on its <strong>Thread</strong> radio to make it a border router. The controller feature launched as a beta and has to be enabled in the app settings.</p>
<p>Since early 2026 IKEA has also sold a new range of around twenty native Matter-over-Thread products, including KAJPLATS bulbs, BILRESA remotes, the MYGGSPRAY motion sensor and the TIMMERFLOTTE temperature and humidity sensor. These can join Apple Home, Google Home, Alexa or SmartThings directly through any Thread border router, without DIRIGERA. Older TRADFRI bulbs stay on Zigbee and need DIRIGERA to appear in Matter.</p>

<h2>How to choose a Matter and Thread hub</h2>
<ul>
<li><strong>Your main ecosystem:</strong> the voice assistant and app you use every day matter more than the spec sheet.</li>
<li><strong>Built-in Thread border router:</strong> essential if you plan to use Thread sensors and bulbs.</li>
<li><strong>Zigbee as well:</strong> useful if you already own Zigbee products (Aqara, IKEA TRADFRI, Hue); some hubs bridge them into Matter.</li>
<li><strong>Thread 1.4:</strong> makes it easier for border routers from different brands to coexist.</li>
<li><strong>Local automations:</strong> check that they run on the hub, not only in the cloud.</li>
</ul>

<h2>The Matter hubs and devices worth considering in 2026</h2>

<h3>1. Aqara Hub M3 — best overall</h3>
<p>The Hub M3 combines a Matter controller, Thread border router, Zigbee hub, infrared blaster and Ethernet with optional PoE power. It bridges Aqara’s Zigbee sensors into Matter and runs automations locally.</p>
<p><strong>Strengths:</strong> the most versatile option here, works with all major ecosystems, stable wired connection. <strong>Limits:</strong> detailed setup happens in the Aqara app, which is more technical. <strong>Best for:</strong> homes mixing several brands or already using Zigbee sensors.</p>

<h3>2. IKEA DIRIGERA — best value</h3>
<p>A Zigbee hub and Matter bridge that is now also a Matter controller and Thread border router thanks to its update. It is the natural starting point for IKEA lighting, old and new.</p>
<p><strong>Strengths:</strong> affordable, handles existing TRADFRI products and the new Thread range. <strong>Limits:</strong> supported device types remain limited and automations are less advanced than Aqara’s. <strong>Best for:</strong> households building their lighting around IKEA.</p>

<h3>3. Apple HomePod mini — for iPhone users</h3>
<p>The HomePod mini is a Siri speaker, an Apple Home hub and a Thread border router in one. It is one of the simplest ways to start with Matter in the Apple world.</p>
<p><strong>Strengths:</strong> very easy setup from an iPhone, local automations. <strong>Limits:</strong> no Zigbee, and the Home app requires an Apple device. <strong>Best for:</strong> households already using iPhones.</p>

<h3>4. Amazon Echo Dot Max — for Alexa users</h3>
<p>Launched in late 2025, the Echo Dot Max packs a Matter, Thread and Zigbee smart home hub into a compact speaker with fuller sound than the regular Echo Dot.</p>
<p><strong>Strengths:</strong> Thread and Zigbee without an extra hub, huge catalogue of Alexa-compatible devices. <strong>Limits:</strong> the new Alexa+ features are not available everywhere in Europe. <strong>Best for:</strong> people who already run their home by voice with Alexa.</p>

<h3>5. Google Nest Hub (2nd gen) — for the Google ecosystem</h3>
<p>A smart display with Google Assistant that acts as a Matter controller and Thread border router for Google Home.</p>
<p><strong>Strengths:</strong> handy screen to see and control devices, Android integration. <strong>Limits:</strong> no Zigbee, and the hardware is no longer new. <strong>Best for:</strong> Android households that want a control screen in the kitchen or living room.</p>

<h3>6. Eve Energy (Matter) — the go-to Thread device</h3>
<p>Not a hub but a Matter-over-Thread smart plug with energy monitoring that works with any Thread border router and Matter controller. It also extends the Thread mesh for other devices.</p>
<p><strong>Strengths:</strong> no cloud or mandatory account, works with all four major ecosystems. <strong>Limits:</strong> bulkier than a Wi-Fi mini plug. <strong>Best for:</strong> a first Thread device to check that everything works. See also our <a href="/en/blog/box-domotique-hub-comparatif">smart home hub comparison</a>.</p>

<h2>Comparison table</h2>
<table>
<thead>
<tr><th>Model</th><th>Role</th><th>Protocols</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Matter controller, Thread border router, bridge</td><td>Thread, Zigbee, Wi-Fi, Ethernet/PoE, IR</td><td>Multi-brand setups</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Matter controller, Thread border router, bridge</td><td>Thread, Zigbee, Wi-Fi, Ethernet</td><td>IKEA lighting</td></tr>
<tr><td>Apple HomePod mini</td><td>Apple Home hub, Thread border router</td><td>Thread, Wi-Fi</td><td>iPhone households</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Matter controller, Thread border router</td><td>Thread, Zigbee, Wi-Fi</td><td>Alexa users</td></tr>
<tr><td>Google Nest Hub (2nd gen)</td><td>Matter controller, Thread border router</td><td>Thread, Wi-Fi</td><td>Android households</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Plug with energy metering, Thread router</td><td>Thread</td><td>First Thread device</td></tr>
</tbody>
</table>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Assuming “Matter compatible” means “every feature”:</strong> the essentials go through Matter, but advanced settings sometimes stay in the manufacturer’s app.</li>
<li><strong>Buying Thread devices without a border router:</strong> first check that your speaker, display or hub has one.</li>
<li><strong>Confusing Zigbee and Thread:</strong> a standard Hue or TRADFRI bulb uses Zigbee and needs a bridge to join Matter.</li>
<li><strong>Throwing away the setup code:</strong> keep each device’s QR code or 11-digit code; you will need it after a reset.</li>
<li><strong>Going all-in on Matter cameras right away:</strong> support exists since Matter 1.5, but compatible models and apps are still few.</li>
</ul>

<h2>Setup: good habits</h2>
<ol>
<li>Update your hub or speaker before adding the first device.</li>
<li>Place the border router centrally and add mains-powered Thread devices to extend the mesh.</li>
<li>Add each device to your main ecosystem, then share it with others using the “pair another service” option or a temporary pairing code.</li>
<li>Keep Bluetooth on your phone during pairing: it is often used for the first handshake.</li>
</ol>
<p>For more on lighting, read our <a href="/en/blog/eclairage-connecte-comparatif">smart lighting comparison</a>.</p>

<h2>Our verdict</h2>
<p>In 2026 Matter and Thread deliver on their main promise: picking devices without worrying about the ecosystem. If you are starting from scratch with several brands, the <strong>Aqara Hub M3</strong> is the most complete hub. On a tight budget with IKEA lighting, the updated <strong>DIRIGERA</strong> covers the essentials. And if you are already with Apple, Amazon or Google, your <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> or <strong>Nest Hub</strong> is often enough to get started: add a plug such as the <strong>Eve Energy</strong> to build your Thread network.</p>`,

    de: `<p><strong>Matter ist eine gemeinsame Sprache, mit der ein Smart-Home-Gerät gleichzeitig mit Apple Home, Google Home, Alexa und SmartThings funktioniert, und Thread ist das stromsparende Funknetz, über das viele dieser Geräte kommunizieren.</strong> Um beides 2026 zu nutzen, brauchen Sie einen Matter-Controller und für Thread-Geräte einen Thread-Border-Router – oft ein Lautsprecher, Display oder Hub, den Sie bereits besitzen.</p>
<p>Dieser Ratgeber erklärt, was die beiden Standards tatsächlich leisten, wo ihre Versionen stehen, welche Geräte in welchem Ökosystem als Border Router dienen und welcher Hub sich lohnt. Grundlage sind die Spezifikationen der Connectivity Standards Alliance (CSA) und der Thread Group, Herstellerdokumentationen, unabhängige Testberichte und verifizierte Käuferbewertungen. Einen Überblick über verfügbare Zentralen finden Sie auf unserer Seite <a href="/de/energie-domotique/hubs-domotique">Smart-Home-Hubs</a>.</p>

<h2>Was genau ist Matter?</h2>
<p>Matter ist ein offener Anwendungsstandard der Connectivity Standards Alliance, zu deren Mitgliedern Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) und Eve gehören. Er legt fest, wie ein Gerät beschreibt, was es kann (Lampe, Steckdose, Thermostat …), und wie ein Controller ihm Befehle schickt. Drei Prinzipien unterscheiden ihn von den alten, geschlossenen Ökosystemen:</p>
<ul>
<li><strong>Lokale Steuerung:</strong> Befehle laufen über Ihr Heimnetz. Das Einschalten einer Matter-Lampe in der App hängt nicht von einem fernen Server ab – das System reagiert schnell und funktioniert auch bei Internetausfall (Fernzugriff und manche Sprachassistenten bleiben aber cloudabhängig).</li>
<li><strong>Multi-Admin:</strong> Ein Gerät kann mehreren Ökosystemen gleichzeitig hinzugefügt werden, etwa Apple Home für Sie und Google Home für ein anderes Haushaltsmitglied.</li>
<li><strong>Eingebaute Sicherheit:</strong> Jedes zertifizierte Gerät hat eine überprüfbare Identität, die Kommunikation ist verschlüsselt.</li>
</ul>

<h3>Die Matter-Versionen im Überblick</h3>
<p>Matter 1.0 erschien Ende 2022 mit Beleuchtung, Steckdosen, Schlössern, Sensoren und Thermostaten. Spätere Versionen erweiterten den Umfang: Saugroboter und Haushaltsgroßgeräte (1.2), Energieverbrauchsdaten und Kochgeräte (1.3), Wärmepumpen, Heimspeicher und Warmwasserbereiter (1.4). <strong>Matter 1.5</strong> vom November 2025 brachte Kameras sowie Tore, Garagentore und Rollläden. <strong>Matter 1.6</strong> vom Juni 2026 ergänzt die Einrichtung per NFC, „Joint Fabric“ für das einfachere Teilen eines Netzes zwischen mehreren Plattformen und Thermostat-Vorschläge.</p>
<p>Wichtig: Dass eine Kategorie in der Spezifikation steht, heißt nicht, dass Ihre App sie schon unterstützt. Jedes Ökosystem führt neue Gerätetypen in eigenem Tempo ein, und Zusatzfunktionen (Saugroboter-Karten, Videoverlauf, Feineinstellungen) bleiben oft in der Hersteller-App.</p>

<h2>Thread, das Netz für Matter</h2>
<p>Matter läuft über WLAN, Ethernet oder Thread. Thread ist ein stromsparendes IPv6-Funknetz für kleine Geräte: Sensoren, Lampen, Steckdosen, Heizkörperthermostate, Schlösser.</p>
<ul>
<li><strong>Mesh-Netz:</strong> Netzbetriebene Geräte (Steckdosen, Lampen) leiten Nachrichten der anderen weiter. Je mehr davon, desto größer die Reichweite.</li>
<li><strong>Geringer Verbrauch:</strong> Batteriesensoren können lange schlafen – ideal für Tür- und Temperatursensoren.</li>
<li><strong>Der Border Router:</strong> Er verbindet das Thread-Netz mit Ihrem WLAN/Ethernet. Ohne ihn lässt sich kein Matter-over-Thread-Gerät einbinden. Mehrere Border Router erhöhen die Zuverlässigkeit.</li>
</ul>
<p><strong>Thread 1.4</strong> löst ein echtes Problem: Bisher konnten ein Apple- und ein Google-Border-Router zwei getrennte Thread-Netze im selben Haushalt aufbauen. Thread 1.4 standardisiert das Teilen der Netzwerkzugangsdaten zwischen Marken. Seit dem 1. Januar 2026 ist es die einzige Version, unter der neue Border Router zertifiziert werden; bereits installierte Geräte erhalten das Update je nach Marke unterschiedlich schnell.</p>

<h2>Welche Geräte sind Thread-Border-Router?</h2>
<table>
<thead>
<tr><th>Ökosystem</th><th>Thread-Border-Router (und Matter-Controller)</th></tr>
</thead>
<tbody>
<tr><td>Apple Home</td><td>HomePod mini, HomePod (2. Generation), Apple TV 4K (2. Generation und 3. Generation Wi-Fi + Ethernet; das reine WLAN-Modell der 3. Generation hat kein Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2. Generation), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4. Generation), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3. Generation) und Echo Show 11, Echo Hub sowie mehrere eero-Router</td></tr>
<tr><td>IKEA</td><td>DIRIGERA-Hub, seit dem Software-Update vom Juli 2025</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Ältere oder günstige Modelle (klassischer Echo Dot, Nest Mini, Nest Hub der 1. Generation) können WLAN-Matter-Geräte steuern, sind aber keine Thread-Border-Router. Prüfen Sie das Datenblatt, bevor Sie Thread-Produkte kaufen.</p>

<h2>Der Fall IKEA DIRIGERA: Was sich geändert hat</h2>
<p>IKEAs DIRIGERA war zunächst ein Zigbee-Hub, der IKEA-Produkte über eine Matter-Bridge an andere Ökosysteme weitergab. Im Juli 2025 machte das Update 2.805.6 ihn zum <strong>Matter-Controller</strong> (er kann Matter-Geräte anderer Marken in der App IKEA Home smart einbinden und automatisieren) und aktivierte sein <strong>Thread</strong>-Funkmodul als Border Router. Die Controller-Funktion startete als Beta und muss in den App-Einstellungen eingeschaltet werden.</p>
<p>Seit Anfang 2026 verkauft IKEA außerdem eine neue Reihe von rund zwanzig nativen Matter-over-Thread-Produkten, darunter KAJPLATS-Lampen, BILRESA-Fernbedienungen, den Bewegungsmelder MYGGSPRAY und den Temperatur- und Feuchtigkeitssensor TIMMERFLOTTE. Sie lassen sich über jeden Thread-Border-Router direkt in Apple Home, Google Home, Alexa oder SmartThings einbinden, ohne DIRIGERA. Ältere TRADFRI-Lampen bleiben Zigbee und brauchen DIRIGERA, um in Matter zu erscheinen.</p>

<h2>So wählen Sie Ihren Matter- und Thread-Hub</h2>
<ul>
<li><strong>Ihr Haupt-Ökosystem:</strong> Sprachassistent und App, die Sie täglich nutzen, zählen mehr als das Datenblatt.</li>
<li><strong>Integrierter Thread-Border-Router:</strong> unverzichtbar für Thread-Sensoren und -Lampen.</li>
<li><strong>Zusätzlich Zigbee:</strong> sinnvoll, wenn Sie schon Zigbee-Geräte (Aqara, IKEA TRADFRI, Hue) besitzen; manche Hubs reichen sie per Bridge an Matter weiter.</li>
<li><strong>Thread 1.4:</strong> erleichtert das Zusammenspiel von Border Routern verschiedener Marken.</li>
<li><strong>Lokale Automationen:</strong> Prüfen Sie, ob sie auf dem Hub laufen und nicht nur in der Cloud.</li>
</ul>

<h2>Die empfehlenswerten Matter-Hubs und -Geräte 2026</h2>

<h3>1. Aqara Hub M3 – die beste Wahl insgesamt</h3>
<p>Der Hub M3 vereint Matter-Controller, Thread-Border-Router, Zigbee-Hub, Infrarotsender und Ethernet mit optionaler PoE-Versorgung. Er bindet Aqaras Zigbee-Sensoren in Matter ein und führt Automationen lokal aus.</p>
<p><strong>Stärken:</strong> das vielseitigste Gerät dieser Auswahl, kompatibel mit allen großen Ökosystemen, stabile Kabelverbindung. <strong>Schwächen:</strong> Die Feineinstellung erfolgt in der technischeren Aqara-App. <strong>Für wen:</strong> Haushalte mit mehreren Marken oder vorhandenen Zigbee-Sensoren.</p>

<h3>2. IKEA DIRIGERA – das beste Preis-Leistungs-Verhältnis</h3>
<p>Zigbee-Hub und Matter-Bridge, dank Update nun auch Matter-Controller und Thread-Border-Router. Der naheliegende Einstieg für IKEA-Beleuchtung, alt wie neu.</p>
<p><strong>Stärken:</strong> günstige Preisklasse, verwaltet vorhandene TRADFRI-Produkte und die neue Thread-Reihe. <strong>Schwächen:</strong> unterstützte Gerätetypen noch begrenzt, Automationen weniger umfangreich als bei Aqara. <strong>Für wen:</strong> Haushalte, die ihre Beleuchtung bei IKEA aufbauen.</p>

<h3>3. Apple HomePod mini – für iPhone-Nutzer</h3>
<p>Der HomePod mini ist Siri-Lautsprecher, Apple-Home-Steuerzentrale und Thread-Border-Router in einem – einer der einfachsten Einstiege in Matter in der Apple-Welt.</p>
<p><strong>Stärken:</strong> sehr einfache Einrichtung am iPhone, lokale Automationen. <strong>Schwächen:</strong> kein Zigbee, die Home-App setzt ein Apple-Gerät voraus. <strong>Für wen:</strong> Haushalte mit iPhones.</p>

<h3>4. Amazon Echo Dot Max – für Alexa-Nutzer</h3>
<p>Der Ende 2025 erschienene Echo Dot Max bringt einen Smart-Home-Hub mit Matter, Thread und Zigbee in einem kompakten Lautsprecher mit vollerem Klang als der normale Echo Dot.</p>
<p><strong>Stärken:</strong> Thread und Zigbee ohne zusätzlichen Hub, riesige Auswahl an Alexa-kompatiblen Geräten. <strong>Schwächen:</strong> Die neuen Alexa+-Funktionen sind nicht überall in Europa verfügbar. <strong>Für wen:</strong> alle, die ihr Zuhause schon per Sprache mit Alexa steuern.</p>

<h3>5. Google Nest Hub (2. Gen.) – für das Google-Ökosystem</h3>
<p>Ein smartes Display mit Google Assistant, das für Google Home als Matter-Controller und Thread-Border-Router dient.</p>
<p><strong>Stärken:</strong> praktischer Bildschirm zur Gerätesteuerung, Android-Integration. <strong>Schwächen:</strong> kein Zigbee, die Hardware ist nicht mehr neu. <strong>Für wen:</strong> Android-Haushalte, die eine Steuerzentrale in Küche oder Wohnzimmer möchten.</p>

<h3>6. Eve Energy (Matter) – das Thread-Referenzgerät</h3>
<p>Kein Hub, sondern eine Matter-over-Thread-Steckdose mit Verbrauchsmessung, die mit jedem Thread-Border-Router und Matter-Controller funktioniert. Sie erweitert zudem das Thread-Mesh für andere Geräte.</p>
<p><strong>Stärken:</strong> ohne Cloud oder Pflichtkonto, kompatibel mit allen vier großen Ökosystemen. <strong>Schwächen:</strong> größer als eine WLAN-Mini-Steckdose. <strong>Für wen:</strong> als erstes Thread-Gerät, um zu prüfen, ob alles läuft. Siehe auch unseren <a href="/de/blog/box-domotique-hub-comparatif">Vergleich der Smart-Home-Zentralen</a>.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Modell</th><th>Rolle</th><th>Protokolle</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Matter-Controller, Thread-Border-Router, Bridge</td><td>Thread, Zigbee, WLAN, Ethernet/PoE, IR</td><td>Mehrmarken-Installationen</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Matter-Controller, Thread-Border-Router, Bridge</td><td>Thread, Zigbee, WLAN, Ethernet</td><td>IKEA-Beleuchtung</td></tr>
<tr><td>Apple HomePod mini</td><td>Apple-Home-Zentrale, Thread-Border-Router</td><td>Thread, WLAN</td><td>iPhone-Haushalte</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Matter-Controller, Thread-Border-Router</td><td>Thread, Zigbee, WLAN</td><td>Alexa-Nutzer</td></tr>
<tr><td>Google Nest Hub (2. Gen.)</td><td>Matter-Controller, Thread-Border-Router</td><td>Thread, WLAN</td><td>Android-Haushalte</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Steckdose mit Messung, Thread-Router</td><td>Thread</td><td>Erstes Thread-Gerät</td></tr>
</tbody>
</table>

<h2>Fehler, die Sie vermeiden sollten</h2>
<ul>
<li><strong>„Matter-kompatibel“ mit „alle Funktionen“ verwechseln:</strong> Das Wesentliche läuft über Matter, erweiterte Einstellungen bleiben teils in der Hersteller-App.</li>
<li><strong>Thread-Geräte ohne Border Router kaufen:</strong> Prüfen Sie zuerst, ob Ihr Lautsprecher, Display oder Hub einen hat.</li>
<li><strong>Zigbee und Thread verwechseln:</strong> Eine klassische Hue- oder TRADFRI-Lampe funkt per Zigbee und braucht eine Bridge für Matter.</li>
<li><strong>Den Einrichtungscode wegwerfen:</strong> Bewahren Sie QR-Code oder 11-stelligen Code jedes Geräts auf; Sie brauchen ihn nach einem Reset.</li>
<li><strong>Sofort voll auf Matter-Kameras setzen:</strong> Die Unterstützung gibt es seit Matter 1.5, kompatible Modelle und Apps sind aber noch selten.</li>
</ul>

<h2>Einrichtung: bewährte Schritte</h2>
<ol>
<li>Aktualisieren Sie Hub oder Lautsprecher, bevor Sie das erste Gerät hinzufügen.</li>
<li>Stellen Sie den Border Router zentral auf und ergänzen Sie netzbetriebene Thread-Geräte, um das Mesh zu erweitern.</li>
<li>Fügen Sie jedes Gerät Ihrem Haupt-Ökosystem hinzu und teilen Sie es dann über „Mit anderem Dienst koppeln“ oder einen temporären Kopplungscode.</li>
<li>Lassen Sie Bluetooth am Smartphone während der Kopplung eingeschaltet: Es wird oft für den ersten Kontakt genutzt.</li>
</ol>
<p>Mehr zur Beleuchtung lesen Sie in unserem <a href="/de/blog/eclairage-connecte-comparatif">Vergleich smarter Beleuchtung</a>.</p>

<h2>Unser Fazit</h2>
<p>2026 halten Matter und Thread ihr Hauptversprechen: Geräte wählen, ohne sich um das Ökosystem zu sorgen. Wer mit mehreren Marken neu startet, ist mit dem <strong>Aqara Hub M3</strong> am umfassendsten ausgestattet. Mit kleinem Budget und IKEA-Beleuchtung erledigt der aktualisierte <strong>DIRIGERA</strong> das Wesentliche. Und wer bereits bei Apple, Amazon oder Google ist, kann oft mit seinem <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> oder <strong>Nest Hub</strong> starten – ergänzt um eine Steckdose wie die <strong>Eve Energy</strong>, um das Thread-Netz aufzubauen.</p>`,

    es: `<p><strong>Matter es un lenguaje común que permite que un dispositivo conectado funcione a la vez con Apple Casa, Google Home, Alexa y SmartThings, y Thread es la red inalámbrica de bajo consumo por la que se comunican muchos de esos dispositivos.</strong> Para aprovecharlos en 2026 necesitas un controlador Matter y, para los dispositivos Thread, un «border router» Thread: a menudo un altavoz, una pantalla o un hub que ya tienes en casa.</p>
<p>Esta guía explica qué hacen realmente ambos estándares, en qué versión están, qué aparatos actúan como border router en cada ecosistema y qué hub elegir. Se basa en las especificaciones publicadas por la Connectivity Standards Alliance (CSA) y el Thread Group, la documentación de los fabricantes, análisis independientes y opiniones de compradores verificados. Para comparar los hubs disponibles, consulta nuestra página de <a href="/es/energie-domotique/hubs-domotique">hubs domóticos</a>.</p>

<h2>¿Qué es exactamente Matter?</h2>
<p>Matter es un estándar de aplicación abierto gestionado por la Connectivity Standards Alliance, de la que forman parte Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) y Eve, entre otros. Define cómo un dispositivo describe lo que sabe hacer (una luz, un enchufe, un termostato…) y cómo un controlador le envía órdenes. Tres principios lo diferencian de los antiguos ecosistemas cerrados:</p>
<ul>
<li><strong>Control local:</strong> las órdenes viajan por tu red doméstica. Encender una luz Matter desde la app no depende de un servidor remoto, por lo que responde rápido y sigue funcionando si se cae internet (el acceso remoto y algunos asistentes de voz sí dependen de la nube).</li>
<li><strong>Multiadministrador:</strong> un mismo dispositivo puede añadirse a varios ecosistemas a la vez, por ejemplo Apple Casa para ti y Google Home para otra persona del hogar.</li>
<li><strong>Seguridad integrada:</strong> cada dispositivo certificado tiene una identidad verificable y las comunicaciones van cifradas.</li>
</ul>

<h3>Las versiones de Matter en resumen</h3>
<p>Matter 1.0 llegó a finales de 2022 con iluminación, enchufes, cerraduras, sensores y termostatos. Las versiones siguientes ampliaron el alcance: robots aspiradores y grandes electrodomésticos (1.2), medición de energía y aparatos de cocina (1.3), bombas de calor, baterías domésticas y calentadores de agua (1.4). <strong>Matter 1.5</strong>, publicado en noviembre de 2025, añadió las cámaras, además de cancelas, puertas de garaje y persianas. <strong>Matter 1.6</strong>, publicado en junio de 2026, incorpora la configuración por NFC, el «Joint Fabric» para compartir más fácilmente una misma red entre varias plataformas y sugerencias para termostatos.</p>
<p>Ojo: que una categoría exista en la especificación no significa que tu app ya la admita. Cada ecosistema incorpora los nuevos tipos de dispositivo a su ritmo, y las funciones avanzadas (mapas del robot, historial de vídeo, ajustes finos) suelen quedarse en la app del fabricante.</p>

<h2>Thread, la red que transporta Matter</h2>
<p>Matter puede funcionar sobre wifi, Ethernet o Thread. Thread es una red radio de bajo consumo basada en IPv6, pensada para dispositivos pequeños: sensores, bombillas, enchufes, válvulas termostáticas y cerraduras.</p>
<ul>
<li><strong>Red mallada:</strong> los dispositivos conectados a la corriente (enchufes, bombillas) retransmiten los mensajes de los demás. Cuantos más haya, mayor es la cobertura.</li>
<li><strong>Bajo consumo:</strong> los sensores con pila pueden permanecer mucho tiempo en reposo, ideal para sensores de apertura o temperatura.</li>
<li><strong>El border router:</strong> es el puente entre la red Thread y tu red wifi/Ethernet. Sin él no se puede añadir un dispositivo Matter sobre Thread. Tener varios mejora la fiabilidad.</li>
</ul>
<p><strong>Thread 1.4</strong> resuelve un problema real: antes, un border router de Apple y otro de Google podían crear dos redes Thread separadas en la misma casa. Thread 1.4 estandariza el intercambio de credenciales de red entre marcas. Desde el 1 de enero de 2026 es la única versión con la que se certifican nuevos border routers, aunque los dispositivos ya instalados reciben la actualización a distinto ritmo según la marca.</p>

<h2>¿Qué dispositivos son border routers Thread?</h2>
<table>
<thead>
<tr><th>Ecosistema</th><th>Border routers Thread (y controladores Matter)</th></tr>
</thead>
<tbody>
<tr><td>Apple Casa</td><td>HomePod mini, HomePod (2.ª generación), Apple TV 4K (2.ª generación y 3.ª generación wifi + Ethernet; el modelo de 3.ª generación solo wifi no tiene Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2.ª generación), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4.ª generación), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3.ª generación) y Echo Show 11, Echo Hub, además de varios routers eero</td></tr>
<tr><td>IKEA</td><td>Hub DIRIGERA, desde la actualización de software de julio de 2025</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Los modelos más antiguos o de gama de entrada (Echo Dot normal, Nest Mini, Nest Hub de 1.ª generación) pueden controlar dispositivos Matter por wifi, pero no son border routers Thread. Revisa la ficha de tu aparato antes de comprar productos Thread.</p>

<h2>El caso de IKEA DIRIGERA: qué ha cambiado</h2>
<p>El hub DIRIGERA de IKEA nació como hub Zigbee capaz de exponer los productos de IKEA a otros ecosistemas mediante un puente Matter. En julio de 2025, la actualización 2.805.6 lo convirtió en <strong>controlador Matter</strong> (puede añadir y automatizar dispositivos Matter de otras marcas en la app IKEA Home smart) y activó su radio <strong>Thread</strong> para que actúe como border router. La función de controlador se lanzó en beta y hay que activarla en los ajustes de la app.</p>
<p>Desde principios de 2026, IKEA vende además una nueva gama de una veintena de productos nativos Matter sobre Thread: bombillas KAJPLATS, mandos BILRESA, el sensor de movimiento MYGGSPRAY y el sensor de temperatura y humedad TIMMERFLOTTE, entre otros. Pueden unirse directamente a Apple Casa, Google Home, Alexa o SmartThings mediante cualquier border router Thread, sin DIRIGERA. Las bombillas TRADFRI anteriores siguen en Zigbee y necesitan DIRIGERA para aparecer en Matter.</p>

<h2>Cómo elegir tu hub Matter y Thread</h2>
<ul>
<li><strong>Tu ecosistema principal:</strong> el asistente de voz y la app que usas a diario importan más que la ficha técnica.</li>
<li><strong>Border router Thread integrado:</strong> imprescindible si vas a usar sensores y bombillas Thread.</li>
<li><strong>Zigbee además:</strong> útil si ya tienes productos Zigbee (Aqara, IKEA TRADFRI, Hue); algunos hubs los exponen en Matter mediante un puente.</li>
<li><strong>Thread 1.4:</strong> facilita la convivencia de border routers de distintas marcas.</li>
<li><strong>Automatizaciones locales:</strong> comprueba que se ejecutan en el hub y no solo en la nube.</li>
</ul>

<h2>Los hubs y dispositivos Matter que conviene conocer en 2026</h2>

<h3>1. Aqara Hub M3: la mejor opción global</h3>
<p>El Hub M3 reúne controlador Matter, border router Thread, hub Zigbee, emisor de infrarrojos y conexión Ethernet con alimentación PoE opcional. Expone los sensores Zigbee de Aqara en Matter y ejecuta las automatizaciones en local.</p>
<p><strong>Puntos fuertes:</strong> el más versátil de esta selección, compatible con todos los grandes ecosistemas, conexión por cable estable. <strong>Limitaciones:</strong> la configuración avanzada se hace en la app de Aqara, más técnica. <strong>Para quién:</strong> hogares que mezclan varias marcas o ya tienen sensores Zigbee.</p>

<h3>2. IKEA DIRIGERA: la mejor relación calidad-precio</h3>
<p>Hub Zigbee y puente Matter que, gracias a su actualización, es también controlador Matter y border router Thread. Es la puerta de entrada natural a la iluminación de IKEA, antigua y nueva.</p>
<p><strong>Puntos fuertes:</strong> gama asequible, gestiona los productos TRADFRI existentes y la nueva gama Thread. <strong>Limitaciones:</strong> los tipos de dispositivo admitidos siguen siendo limitados y las automatizaciones son menos completas que en Aqara. <strong>Para quién:</strong> hogares que montan su iluminación con IKEA.</p>

<h3>3. Apple HomePod mini: para usuarios de iPhone</h3>
<p>El HomePod mini es a la vez altavoz con Siri, concentrador de Apple Casa y border router Thread. Es una de las formas más sencillas de empezar con Matter en el mundo Apple.</p>
<p><strong>Puntos fuertes:</strong> configuración muy sencilla desde el iPhone, automatizaciones locales. <strong>Limitaciones:</strong> sin Zigbee, y la app Casa exige un dispositivo Apple. <strong>Para quién:</strong> hogares que ya usan iPhone.</p>

<h3>4. Amazon Echo Dot Max: para usuarios de Alexa</h3>
<p>Lanzado a finales de 2025, el Echo Dot Max integra un hub domótico Matter, Thread y Zigbee en un altavoz compacto con un sonido más amplio que el Echo Dot normal.</p>
<p><strong>Puntos fuertes:</strong> Thread y Zigbee sin hub adicional, enorme catálogo de dispositivos compatibles con Alexa. <strong>Limitaciones:</strong> las funciones de la nueva Alexa+ no están disponibles en toda Europa. <strong>Para quién:</strong> quienes ya controlan su casa por voz con Alexa.</p>

<h3>5. Google Nest Hub (2.ª gen.): para el ecosistema Google</h3>
<p>Pantalla inteligente con el Asistente de Google que funciona como controlador Matter y border router Thread para Google Home.</p>
<p><strong>Puntos fuertes:</strong> pantalla práctica para ver y controlar los dispositivos, integración con Android. <strong>Limitaciones:</strong> sin Zigbee, y el hardware ya no es reciente. <strong>Para quién:</strong> hogares Android que quieren una pantalla de control en la cocina o el salón.</p>

<h3>6. Eve Energy (Matter): el dispositivo Thread de referencia</h3>
<p>No es un hub, sino un enchufe inteligente Matter sobre Thread con medición de consumo, que funciona con cualquier border router Thread y controlador Matter. Además amplía la malla Thread para otros dispositivos.</p>
<p><strong>Puntos fuertes:</strong> sin nube ni cuenta obligatoria, compatible con los cuatro grandes ecosistemas. <strong>Limitaciones:</strong> más voluminoso que un mini enchufe wifi. <strong>Para quién:</strong> como primer dispositivo Thread para comprobar que todo funciona. Consulta también nuestra <a href="/es/blog/box-domotique-hub-comparatif">comparativa de centrales domóticas</a>.</p>

<h2>Tabla comparativa</h2>
<table>
<thead>
<tr><th>Modelo</th><th>Función</th><th>Protocolos</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Controlador Matter, border router Thread, puente</td><td>Thread, Zigbee, wifi, Ethernet/PoE, IR</td><td>Instalaciones multimarca</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Controlador Matter, border router Thread, puente</td><td>Thread, Zigbee, wifi, Ethernet</td><td>Iluminación IKEA</td></tr>
<tr><td>Apple HomePod mini</td><td>Concentrador Apple Casa, border router Thread</td><td>Thread, wifi</td><td>Hogares con iPhone</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Controlador Matter, border router Thread</td><td>Thread, Zigbee, wifi</td><td>Usuarios de Alexa</td></tr>
<tr><td>Google Nest Hub (2.ª gen.)</td><td>Controlador Matter, border router Thread</td><td>Thread, wifi</td><td>Hogares Android</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Enchufe con medición, router Thread</td><td>Thread</td><td>Primer dispositivo Thread</td></tr>
</tbody>
</table>

<h2>Errores que debes evitar</h2>
<ul>
<li><strong>Pensar que «compatible con Matter» significa «todas las funciones»:</strong> lo esencial pasa por Matter, pero los ajustes avanzados a veces se quedan en la app del fabricante.</li>
<li><strong>Comprar dispositivos Thread sin border router:</strong> comprueba primero que tu altavoz, pantalla o hub tiene uno.</li>
<li><strong>Confundir Zigbee y Thread:</strong> una bombilla Hue o TRADFRI clásica usa Zigbee y necesita un puente para entrar en Matter.</li>
<li><strong>Tirar el código de emparejamiento:</strong> guarda el código QR o el código de 11 dígitos de cada dispositivo; lo necesitarás tras un restablecimiento.</li>
<li><strong>Apostarlo todo ya por las cámaras Matter:</strong> el soporte existe desde Matter 1.5, pero los modelos y apps compatibles aún son pocos.</li>
</ul>

<h2>Instalación: buenas prácticas</h2>
<ol>
<li>Actualiza tu hub o altavoz antes de añadir el primer dispositivo.</li>
<li>Coloca el border router en el centro de la vivienda y añade dispositivos Thread enchufados a la corriente para ampliar la malla.</li>
<li>Añade cada dispositivo a tu ecosistema principal y compártelo después con los demás mediante la opción «vincular con otro servicio» o un código temporal.</li>
<li>Mantén el Bluetooth del móvil activado durante el emparejamiento: suele usarse para el primer contacto.</li>
</ol>
<p>Para saber más sobre iluminación, lee nuestra <a href="/es/blog/eclairage-connecte-comparatif">comparativa de iluminación inteligente</a>.</p>

<h2>Nuestro veredicto</h2>
<p>En 2026, Matter y Thread cumplen su promesa principal: elegir dispositivos sin preocuparse por el ecosistema. Si empiezas desde cero con varias marcas, el <strong>Aqara Hub M3</strong> es el hub más completo. Con presupuesto ajustado e iluminación de IKEA, el <strong>DIRIGERA</strong> actualizado cubre lo esencial. Y si ya estás con Apple, Amazon o Google, tu <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> o <strong>Nest Hub</strong> suele bastar para empezar: añade un enchufe como el <strong>Eve Energy</strong> para construir la red Thread.</p>`,

    it: `<p><strong>Matter è un linguaggio comune che permette a un dispositivo smart di funzionare contemporaneamente con Apple Casa, Google Home, Alexa e SmartThings, mentre Thread è la rete wireless a basso consumo su cui comunica gran parte di questi dispositivi.</strong> Per sfruttarli nel 2026 servono un controller Matter e, per i dispositivi Thread, un «border router» Thread: spesso un altoparlante, uno schermo o un hub che avete già in casa.</p>
<p>Questa guida spiega cosa fanno davvero i due standard, a che versione sono arrivati, quali apparecchi fanno da border router in ogni ecosistema e quale hub scegliere. Si basa sulle specifiche pubblicate dalla Connectivity Standards Alliance (CSA) e dal Thread Group, sulla documentazione dei produttori, su recensioni indipendenti e sui feedback di acquirenti verificati. Per confrontare gli hub disponibili, consultate la nostra pagina <a href="/it/energie-domotique/hubs-domotique">hub domotici</a>.</p>

<h2>Che cos’è esattamente Matter?</h2>
<p>Matter è uno standard applicativo aperto gestito dalla Connectivity Standards Alliance, di cui fanno parte tra gli altri Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) ed Eve. Definisce come un dispositivo descrive ciò che sa fare (una luce, una presa, un termostato…) e come un controller gli invia i comandi. Tre principi lo distinguono dai vecchi ecosistemi chiusi:</p>
<ul>
<li><strong>Controllo locale:</strong> i comandi viaggiano sulla rete di casa. Accendere una luce Matter dall’app non dipende da un server remoto, quindi la risposta è rapida e tutto continua a funzionare anche senza internet (l’accesso da remoto e alcuni assistenti vocali restano però legati al cloud).</li>
<li><strong>Multi-admin:</strong> lo stesso dispositivo può essere aggiunto a più ecosistemi contemporaneamente, per esempio Apple Casa per voi e Google Home per un altro componente della famiglia.</li>
<li><strong>Sicurezza integrata:</strong> ogni dispositivo certificato ha un’identità verificabile e le comunicazioni sono cifrate.</li>
</ul>

<h3>Le versioni di Matter in breve</h3>
<p>Matter 1.0 è uscito a fine 2022 con illuminazione, prese, serrature, sensori e termostati. Le versioni successive hanno ampliato il perimetro: robot aspirapolvere e grandi elettrodomestici (1.2), misurazione dell’energia ed elettrodomestici da cucina (1.3), pompe di calore, batterie domestiche e scaldacqua (1.4). <strong>Matter 1.5</strong>, pubblicato a novembre 2025, ha aggiunto le telecamere oltre a cancelli, porte da garage e tapparelle. <strong>Matter 1.6</strong>, pubblicato a giugno 2026, introduce la configurazione via NFC, il «Joint Fabric» per condividere più facilmente la stessa rete tra più piattaforme e i suggerimenti per i termostati.</p>
<p>Attenzione: che una categoria esista nella specifica non significa che la vostra app la supporti già. Ogni ecosistema introduce i nuovi tipi di dispositivo con i propri tempi, e le funzioni avanzate (mappe del robot, cronologia video, regolazioni fini) restano spesso nell’app del produttore.</p>

<h2>Thread, la rete che trasporta Matter</h2>
<p>Matter può funzionare su Wi-Fi, Ethernet o Thread. Thread è una rete radio a basso consumo basata su IPv6, pensata per piccoli dispositivi: sensori, lampadine, prese, valvole termostatiche e serrature.</p>
<ul>
<li><strong>Rete mesh:</strong> i dispositivi alimentati a rete (prese, lampadine) ritrasmettono i messaggi degli altri. Più sono, più la copertura si estende.</li>
<li><strong>Basso consumo:</strong> i sensori a batteria possono restare a lungo in standby, ideale per sensori di apertura o di temperatura.</li>
<li><strong>Il border router:</strong> è il ponte tra la rete Thread e la vostra rete Wi-Fi/Ethernet. Senza di esso non si può aggiungere un dispositivo Matter su Thread. Averne più di uno aumenta l’affidabilità.</li>
</ul>
<p><strong>Thread 1.4</strong> risolve un problema concreto: in passato un border router Apple e uno Google potevano creare due reti Thread separate nella stessa casa. Thread 1.4 standardizza la condivisione delle credenziali di rete tra marchi diversi. Dal 1° gennaio 2026 è l’unica versione con cui si certificano i nuovi border router, ma i dispositivi già installati ricevono l’aggiornamento con tempi diversi a seconda della marca.</p>

<h2>Quali dispositivi sono border router Thread?</h2>
<table>
<thead>
<tr><th>Ecosistema</th><th>Border router Thread (e controller Matter)</th></tr>
</thead>
<tbody>
<tr><td>Apple Casa</td><td>HomePod mini, HomePod (2ª generazione), Apple TV 4K (2ª generazione e 3ª generazione Wi-Fi + Ethernet; il modello di 3ª generazione solo Wi-Fi non ha Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2ª generazione), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4ª generazione), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3ª generazione) ed Echo Show 11, Echo Hub, oltre a diversi router eero</td></tr>
<tr><td>IKEA</td><td>Hub DIRIGERA, dall’aggiornamento software di luglio 2025</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>I modelli più vecchi o di fascia d’ingresso (Echo Dot classico, Nest Mini, Nest Hub di 1ª generazione) possono controllare dispositivi Matter via Wi-Fi ma non sono border router Thread. Controllate la scheda del vostro apparecchio prima di acquistare prodotti Thread.</p>

<h2>Il caso IKEA DIRIGERA: cosa è cambiato</h2>
<p>L’hub DIRIGERA di IKEA è nato come hub Zigbee capace di esporre i prodotti IKEA ad altri ecosistemi tramite un bridge Matter. A luglio 2025 l’aggiornamento 2.805.6 lo ha trasformato in <strong>controller Matter</strong> (può aggiungere e automatizzare dispositivi Matter di altre marche nell’app IKEA Home smart) e ha attivato la sua radio <strong>Thread</strong> per farne un border router. La funzione controller è partita in beta e va attivata nelle impostazioni dell’app.</p>
<p>Da inizio 2026 IKEA vende anche una nuova gamma di una ventina di prodotti nativi Matter su Thread: lampadine KAJPLATS, telecomandi BILRESA, il sensore di movimento MYGGSPRAY e il sensore di temperatura e umidità TIMMERFLOTTE, tra gli altri. Possono entrare direttamente in Apple Casa, Google Home, Alexa o SmartThings tramite qualsiasi border router Thread, senza DIRIGERA. Le vecchie lampadine TRADFRI restano Zigbee e hanno bisogno di DIRIGERA per comparire in Matter.</p>

<h2>Come scegliere l’hub Matter e Thread</h2>
<ul>
<li><strong>Il vostro ecosistema principale:</strong> l’assistente vocale e l’app che usate ogni giorno contano più della scheda tecnica.</li>
<li><strong>Border router Thread integrato:</strong> indispensabile se puntate su sensori e lampadine Thread.</li>
<li><strong>Anche Zigbee:</strong> utile se avete già prodotti Zigbee (Aqara, IKEA TRADFRI, Hue); alcuni hub li espongono in Matter tramite bridge.</li>
<li><strong>Thread 1.4:</strong> semplifica la convivenza di border router di marche diverse.</li>
<li><strong>Automazioni locali:</strong> verificate che girino sull’hub e non solo nel cloud.</li>
</ul>

<h2>Gli hub e i dispositivi Matter da considerare nel 2026</h2>

<h3>1. Aqara Hub M3 – la scelta migliore in assoluto</h3>
<p>L’Hub M3 riunisce controller Matter, border router Thread, hub Zigbee, trasmettitore a infrarossi e connessione Ethernet con alimentazione PoE opzionale. Espone i sensori Zigbee di Aqara in Matter ed esegue le automazioni in locale.</p>
<p><strong>Punti di forza:</strong> il più versatile di questa selezione, compatibile con tutti i grandi ecosistemi, connessione cablata stabile. <strong>Limiti:</strong> la configurazione avanzata passa dall’app Aqara, più tecnica. <strong>Per chi:</strong> chi mescola più marche o ha già sensori Zigbee.</p>

<h3>2. IKEA DIRIGERA – il miglior rapporto qualità-prezzo</h3>
<p>Hub Zigbee e bridge Matter che, grazie all’aggiornamento, è ora anche controller Matter e border router Thread. È il punto di partenza naturale per l’illuminazione IKEA, vecchia e nuova.</p>
<p><strong>Punti di forza:</strong> fascia accessibile, gestisce i prodotti TRADFRI esistenti e la nuova gamma Thread. <strong>Limiti:</strong> i tipi di dispositivo supportati restano limitati e le automazioni sono meno ricche di quelle Aqara. <strong>Per chi:</strong> chi costruisce l’illuminazione di casa con IKEA.</p>

<h3>3. Apple HomePod mini – per chi usa l’iPhone</h3>
<p>L’HomePod mini è insieme altoparlante con Siri, hub di Apple Casa e border router Thread: uno dei modi più semplici per iniziare con Matter nel mondo Apple.</p>
<p><strong>Punti di forza:</strong> configurazione semplicissima dall’iPhone, automazioni locali. <strong>Limiti:</strong> niente Zigbee, e l’app Casa richiede un dispositivo Apple. <strong>Per chi:</strong> famiglie che usano già l’iPhone.</p>

<h3>4. Amazon Echo Dot Max – per chi usa Alexa</h3>
<p>Uscito a fine 2025, l’Echo Dot Max integra un hub domotico Matter, Thread e Zigbee in un altoparlante compatto dal suono più pieno rispetto all’Echo Dot classico.</p>
<p><strong>Punti di forza:</strong> Thread e Zigbee senza hub aggiuntivo, enorme catalogo di dispositivi compatibili con Alexa. <strong>Limiti:</strong> le funzioni della nuova Alexa+ non sono disponibili ovunque in Europa. <strong>Per chi:</strong> chi gestisce già la casa a voce con Alexa.</p>

<h3>5. Google Nest Hub (2ª gen.) – per l’ecosistema Google</h3>
<p>Smart display con l’Assistente Google che funge da controller Matter e border router Thread per Google Home.</p>
<p><strong>Punti di forza:</strong> schermo comodo per vedere e controllare i dispositivi, integrazione con Android. <strong>Limiti:</strong> niente Zigbee, e l’hardware non è più recentissimo. <strong>Per chi:</strong> famiglie Android che vogliono uno schermo di controllo in cucina o in soggiorno.</p>

<h3>6. Eve Energy (Matter) – il dispositivo Thread di riferimento</h3>
<p>Non è un hub ma una presa smart Matter su Thread con misurazione dei consumi, che funziona con qualsiasi border router Thread e controller Matter. Estende inoltre la rete mesh Thread per gli altri dispositivi.</p>
<p><strong>Punti di forza:</strong> nessun cloud né account obbligatorio, compatibile con i quattro grandi ecosistemi. <strong>Limiti:</strong> più ingombrante di una mini presa Wi-Fi. <strong>Per chi:</strong> come primo dispositivo Thread per verificare che tutto funzioni. Vedete anche il nostro <a href="/it/blog/box-domotique-hub-comparatif">confronto delle centraline domotiche</a>.</p>

<h2>Tabella comparativa</h2>
<table>
<thead>
<tr><th>Modello</th><th>Ruolo</th><th>Protocolli</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Controller Matter, border router Thread, bridge</td><td>Thread, Zigbee, Wi-Fi, Ethernet/PoE, IR</td><td>Impianti multimarca</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Controller Matter, border router Thread, bridge</td><td>Thread, Zigbee, Wi-Fi, Ethernet</td><td>Illuminazione IKEA</td></tr>
<tr><td>Apple HomePod mini</td><td>Hub Apple Casa, border router Thread</td><td>Thread, Wi-Fi</td><td>Famiglie con iPhone</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Controller Matter, border router Thread</td><td>Thread, Zigbee, Wi-Fi</td><td>Utenti Alexa</td></tr>
<tr><td>Google Nest Hub (2ª gen.)</td><td>Controller Matter, border router Thread</td><td>Thread, Wi-Fi</td><td>Famiglie Android</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Presa con misurazione, router Thread</td><td>Thread</td><td>Primo dispositivo Thread</td></tr>
</tbody>
</table>

<h2>Errori da evitare</h2>
<ul>
<li><strong>Credere che «compatibile Matter» significhi «tutte le funzioni»:</strong> l’essenziale passa da Matter, ma le impostazioni avanzate restano talvolta nell’app del produttore.</li>
<li><strong>Comprare dispositivi Thread senza border router:</strong> verificate prima che il vostro altoparlante, schermo o hub ne abbia uno.</li>
<li><strong>Confondere Zigbee e Thread:</strong> una lampadina Hue o TRADFRI classica usa Zigbee e ha bisogno di un bridge per entrare in Matter.</li>
<li><strong>Buttare il codice di abbinamento:</strong> conservate il QR code o il codice a 11 cifre di ogni dispositivo; servirà dopo un ripristino.</li>
<li><strong>Puntare subito tutto sulle telecamere Matter:</strong> il supporto esiste da Matter 1.5, ma modelli e app compatibili sono ancora pochi.</li>
</ul>

<h2>Installazione: le buone abitudini</h2>
<ol>
<li>Aggiornate hub o altoparlante prima di aggiungere il primo dispositivo.</li>
<li>Posizionate il border router al centro della casa e aggiungete dispositivi Thread alimentati a rete per estendere la mesh.</li>
<li>Aggiungete ogni dispositivo al vostro ecosistema principale, poi condividetelo con gli altri tramite l’opzione «abbina a un altro servizio» o un codice temporaneo.</li>
<li>Tenete attivo il Bluetooth dello smartphone durante l’abbinamento: spesso serve per il primo contatto.</li>
</ol>
<p>Per approfondire l’illuminazione, leggete il nostro <a href="/it/blog/eclairage-connecte-comparatif">confronto sull’illuminazione smart</a>.</p>

<h2>Il nostro verdetto</h2>
<p>Nel 2026 Matter e Thread mantengono la loro promessa principale: scegliere i dispositivi senza preoccuparsi dell’ecosistema. Se partite da zero con più marche, l’<strong>Aqara Hub M3</strong> è l’hub più completo. Con un budget ridotto e illuminazione IKEA, il <strong>DIRIGERA</strong> aggiornato fa l’essenziale. E se siete già con Apple, Amazon o Google, il vostro <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> o <strong>Nest Hub</strong> spesso basta per iniziare: aggiungete una presa come la <strong>Eve Energy</strong> per costruire la rete Thread.</p>`,

    nl: `<p><strong>Matter is een gemeenschappelijke taal waarmee een slim apparaat tegelijk werkt met Apple Woning, Google Home, Alexa en SmartThings, en Thread is het zuinige draadloze netwerk waarover veel van die apparaten communiceren.</strong> Om ze in 2026 te gebruiken heb je een Matter-controller nodig en, voor Thread-apparaten, een Thread-borderrouter: vaak een speaker, scherm of hub die je al in huis hebt.</p>
<p>Deze gids legt uit wat beide standaarden echt doen, hoe ver hun versies zijn, welke apparaten in elk ecosysteem als borderrouter dienen en welke hub je kiest. Hij is gebaseerd op specificaties van de Connectivity Standards Alliance (CSA) en de Thread Group, documentatie van fabrikanten, onafhankelijke reviews en geverifieerde kopersbeoordelingen. Wil je beschikbare hubs vergelijken, bekijk dan onze pagina <a href="/nl/energie-domotique/hubs-domotique">domotica-hubs</a>.</p>

<h2>Wat is Matter precies?</h2>
<p>Matter is een open applicatiestandaard van de Connectivity Standards Alliance, met onder meer Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) en Eve als leden. Het bepaalt hoe een apparaat beschrijft wat het kan (een lamp, een stekker, een thermostaat…) en hoe een controller het opdrachten stuurt. Drie principes onderscheiden het van de oude gesloten ecosystemen:</p>
<ul>
<li><strong>Lokale bediening:</strong> opdrachten gaan over je thuisnetwerk. Een Matter-lamp aanzetten via de app hangt niet af van een externe server, dus het systeem reageert snel en blijft werken bij een internetstoring (bediening op afstand en sommige spraakassistenten blijven wel afhankelijk van de cloud).</li>
<li><strong>Multi-admin:</strong> één apparaat kan tegelijk aan meerdere ecosystemen worden toegevoegd, bijvoorbeeld Apple Woning voor jou en Google Home voor een ander gezinslid.</li>
<li><strong>Ingebouwde beveiliging:</strong> elk gecertificeerd apparaat heeft een controleerbare identiteit en het verkeer is versleuteld.</li>
</ul>

<h3>De Matter-versies in het kort</h3>
<p>Matter 1.0 verscheen eind 2022 met verlichting, stekkers, sloten, sensoren en thermostaten. Latere versies breidden het uit: robotstofzuigers en grote huishoudtoestellen (1.2), energiemeting en kooktoestellen (1.3), warmtepompen, thuisbatterijen en boilers (1.4). <strong>Matter 1.5</strong>, gepubliceerd in november 2025, voegde camera’s toe, plus poorten, garagedeuren en zonwering. <strong>Matter 1.6</strong>, gepubliceerd in juni 2026, brengt instellen via NFC, „Joint Fabric” om één netwerk makkelijker tussen meerdere platforms te delen, en thermostaatsuggesties.</p>
<p>Let op: dat een categorie in de specificatie staat, betekent niet dat jouw app die al ondersteunt. Elk ecosysteem voert nieuwe apparaattypen in eigen tempo in, en geavanceerde functies (kaarten van de robotstofzuiger, videogeschiedenis, fijne instellingen) blijven vaak in de app van de fabrikant.</p>

<h2>Thread, het netwerk dat Matter draagt</h2>
<p>Matter kan werken via wifi, ethernet of Thread. Thread is een zuinig IPv6-radionetwerk voor kleine apparaten: sensoren, lampen, stekkers, radiatorknoppen en sloten.</p>
<ul>
<li><strong>Een mesh-netwerk:</strong> apparaten op netstroom (stekkers, lampen) geven berichten van andere apparaten door. Hoe meer je er hebt, hoe groter het bereik.</li>
<li><strong>Laag verbruik:</strong> sensoren op batterij kunnen lang slapen, ideaal voor deur- en temperatuursensoren.</li>
<li><strong>De borderrouter:</strong> de brug tussen het Thread-netwerk en je wifi/ethernet. Zonder borderrouter kun je geen Matter-over-Thread-apparaat toevoegen. Meerdere borderrouters verhogen de betrouwbaarheid.</li>
</ul>
<p><strong>Thread 1.4</strong> lost een echt probleem op: vroeger konden een borderrouter van Apple en een van Google twee aparte Thread-netwerken in hetzelfde huis opzetten. Thread 1.4 standaardiseert het delen van netwerkgegevens tussen merken. Sinds 1 januari 2026 is het de enige versie waaronder nieuwe borderrouters gecertificeerd worden, maar apparaten die al in huis staan krijgen de update per merk in een ander tempo.</p>

<h2>Welke apparaten zijn Thread-borderrouters?</h2>
<table>
<thead>
<tr><th>Ecosysteem</th><th>Thread-borderrouters (en Matter-controllers)</th></tr>
</thead>
<tbody>
<tr><td>Apple Woning</td><td>HomePod mini, HomePod (2e generatie), Apple TV 4K (2e generatie en 3e generatie wifi + ethernet; het 3e-generatiemodel met alleen wifi heeft geen Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2e generatie), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4e generatie), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3e generatie) en Echo Show 11, Echo Hub, plus diverse eero-routers</td></tr>
<tr><td>IKEA</td><td>DIRIGERA-hub, sinds de software-update van juli 2025</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Oudere of instapmodellen (gewone Echo Dot, Nest Mini, Nest Hub van de 1e generatie) kunnen Matter-apparaten via wifi bedienen, maar zijn geen Thread-borderrouter. Controleer de specificaties van je apparaat voordat je Thread-producten koopt.</p>

<h2>Het geval IKEA DIRIGERA: wat er veranderd is</h2>
<p>IKEA’s DIRIGERA-hub begon als Zigbee-hub die IKEA-producten via een Matter-bridge aan andere ecosystemen doorgaf. In juli 2025 maakte update 2.805.6 er een <strong>Matter-controller</strong> van (hij kan Matter-apparaten van andere merken toevoegen en automatiseren in de app IKEA Home smart) en werd de <strong>Thread</strong>-radio geactiveerd als borderrouter. De controllerfunctie startte als bèta en moet in de app-instellingen worden ingeschakeld.</p>
<p>Sinds begin 2026 verkoopt IKEA ook een nieuwe reeks van een twintigtal native Matter-over-Thread-producten, waaronder KAJPLATS-lampen, BILRESA-afstandsbedieningen, de bewegingssensor MYGGSPRAY en de temperatuur- en vochtsensor TIMMERFLOTTE. Ze kunnen via elke Thread-borderrouter rechtstreeks in Apple Woning, Google Home, Alexa of SmartThings, zonder DIRIGERA. Oudere TRADFRI-lampen blijven Zigbee en hebben DIRIGERA nodig om in Matter te verschijnen.</p>

<h2>Zo kies je je Matter- en Thread-hub</h2>
<ul>
<li><strong>Je hoofdecosysteem:</strong> de spraakassistent en app die je dagelijks gebruikt zijn belangrijker dan de specificaties.</li>
<li><strong>Ingebouwde Thread-borderrouter:</strong> onmisbaar als je Thread-sensoren en -lampen wilt.</li>
<li><strong>Ook Zigbee:</strong> handig als je al Zigbee-producten hebt (Aqara, IKEA TRADFRI, Hue); sommige hubs maken ze via een bridge beschikbaar in Matter.</li>
<li><strong>Thread 1.4:</strong> maakt het samenleven van borderrouters van verschillende merken makkelijker.</li>
<li><strong>Lokale automatiseringen:</strong> controleer dat ze op de hub draaien en niet alleen in de cloud.</li>
</ul>

<h2>De Matter-hubs en -apparaten die het overwegen waard zijn in 2026</h2>

<h3>1. Aqara Hub M3 – de beste keuze overall</h3>
<p>De Hub M3 combineert Matter-controller, Thread-borderrouter, Zigbee-hub, infraroodzender en ethernet met optionele PoE-voeding. Hij maakt Aqara’s Zigbee-sensoren beschikbaar in Matter en voert automatiseringen lokaal uit.</p>
<p><strong>Sterke punten:</strong> de veelzijdigste van deze selectie, werkt met alle grote ecosystemen, stabiele bekabelde verbinding. <strong>Beperkingen:</strong> uitgebreide instellingen gaan via de technischere Aqara-app. <strong>Voor wie:</strong> huishoudens met meerdere merken of bestaande Zigbee-sensoren.</p>

<h3>2. IKEA DIRIGERA – de beste prijs-kwaliteitverhouding</h3>
<p>Zigbee-hub en Matter-bridge die dankzij de update nu ook Matter-controller en Thread-borderrouter is. Het logische startpunt voor IKEA-verlichting, oud en nieuw.</p>
<p><strong>Sterke punten:</strong> betaalbaar segment, beheert bestaande TRADFRI-producten en de nieuwe Thread-reeks. <strong>Beperkingen:</strong> ondersteunde apparaattypen nog beperkt, automatiseringen minder uitgebreid dan bij Aqara. <strong>Voor wie:</strong> huishoudens die hun verlichting bij IKEA kopen.</p>

<h3>3. Apple HomePod mini – voor iPhone-gebruikers</h3>
<p>De HomePod mini is een Siri-speaker, Apple Woning-hub en Thread-borderrouter in één: een van de eenvoudigste manieren om met Matter te beginnen in de Apple-wereld.</p>
<p><strong>Sterke punten:</strong> heel eenvoudig in te stellen vanaf de iPhone, lokale automatiseringen. <strong>Beperkingen:</strong> geen Zigbee, en de Woning-app vereist een Apple-apparaat. <strong>Voor wie:</strong> huishoudens met iPhones.</p>

<h3>4. Amazon Echo Dot Max – voor Alexa-gebruikers</h3>
<p>De Echo Dot Max, uitgebracht eind 2025, bevat een smart-home-hub met Matter, Thread en Zigbee in een compacte speaker met voller geluid dan de gewone Echo Dot.</p>
<p><strong>Sterke punten:</strong> Thread en Zigbee zonder extra hub, enorm aanbod aan Alexa-compatibele apparaten. <strong>Beperkingen:</strong> de nieuwe Alexa+-functies zijn niet overal in Europa beschikbaar. <strong>Voor wie:</strong> wie zijn huis al met Alexa via spraak bedient.</p>

<h3>5. Google Nest Hub (2e gen.) – voor het Google-ecosysteem</h3>
<p>Een slim scherm met de Google Assistent dat voor Google Home dienstdoet als Matter-controller en Thread-borderrouter.</p>
<p><strong>Sterke punten:</strong> handig scherm om apparaten te zien en te bedienen, Android-integratie. <strong>Beperkingen:</strong> geen Zigbee, en de hardware is niet meer nieuw. <strong>Voor wie:</strong> Android-huishoudens die een bedieningsscherm in de keuken of woonkamer willen.</p>

<h3>6. Eve Energy (Matter) – het Thread-referentieapparaat</h3>
<p>Geen hub maar een Matter-over-Thread-stekker met energiemeting die werkt met elke Thread-borderrouter en Matter-controller. Hij versterkt bovendien het Thread-mesh voor andere apparaten.</p>
<p><strong>Sterke punten:</strong> geen cloud of verplicht account, werkt met de vier grote ecosystemen. <strong>Beperkingen:</strong> groter dan een mini-wifistekker. <strong>Voor wie:</strong> als eerste Thread-apparaat om te controleren of alles werkt. Bekijk ook onze <a href="/nl/blog/box-domotique-hub-comparatif">vergelijking van domotica-centrales</a>.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Model</th><th>Rol</th><th>Protocollen</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Matter-controller, Thread-borderrouter, bridge</td><td>Thread, Zigbee, wifi, ethernet/PoE, IR</td><td>Installaties met meerdere merken</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Matter-controller, Thread-borderrouter, bridge</td><td>Thread, Zigbee, wifi, ethernet</td><td>IKEA-verlichting</td></tr>
<tr><td>Apple HomePod mini</td><td>Apple Woning-hub, Thread-borderrouter</td><td>Thread, wifi</td><td>iPhone-huishoudens</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Matter-controller, Thread-borderrouter</td><td>Thread, Zigbee, wifi</td><td>Alexa-gebruikers</td></tr>
<tr><td>Google Nest Hub (2e gen.)</td><td>Matter-controller, Thread-borderrouter</td><td>Thread, wifi</td><td>Android-huishoudens</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Stekker met meting, Thread-router</td><td>Thread</td><td>Eerste Thread-apparaat</td></tr>
</tbody>
</table>

<h2>Fouten die je beter vermijdt</h2>
<ul>
<li><strong>Denken dat „Matter-compatibel” „alle functies” betekent:</strong> de basis loopt via Matter, maar geavanceerde instellingen blijven soms in de app van de fabrikant.</li>
<li><strong>Thread-apparaten kopen zonder borderrouter:</strong> controleer eerst of je speaker, scherm of hub er een heeft.</li>
<li><strong>Zigbee en Thread verwarren:</strong> een klassieke Hue- of TRADFRI-lamp gebruikt Zigbee en heeft een bridge nodig om in Matter te komen.</li>
<li><strong>De koppelcode weggooien:</strong> bewaar de QR-code of 11-cijferige code van elk apparaat; je hebt die nodig na een reset.</li>
<li><strong>Meteen volledig inzetten op Matter-camera’s:</strong> ondersteuning bestaat sinds Matter 1.5, maar compatibele modellen en apps zijn nog schaars.</li>
</ul>

<h2>Installatie: goede gewoonten</h2>
<ol>
<li>Update je hub of speaker voordat je het eerste apparaat toevoegt.</li>
<li>Zet de borderrouter centraal in huis en voeg Thread-apparaten op netstroom toe om het mesh uit te breiden.</li>
<li>Voeg elk apparaat toe aan je hoofdecosysteem en deel het daarna met andere via de optie „koppelen met andere dienst” of een tijdelijke koppelcode.</li>
<li>Houd bluetooth op je telefoon aan tijdens het koppelen: het wordt vaak gebruikt voor het eerste contact.</li>
</ol>
<p>Meer over verlichting lees je in onze <a href="/nl/blog/eclairage-connecte-comparatif">vergelijking van slimme verlichting</a>.</p>

<h2>Ons oordeel</h2>
<p>In 2026 maken Matter en Thread hun belangrijkste belofte waar: apparaten kiezen zonder je zorgen te maken over het ecosysteem. Begin je van nul met meerdere merken, dan is de <strong>Aqara Hub M3</strong> de meest complete hub. Met een krap budget en IKEA-verlichting doet de bijgewerkte <strong>DIRIGERA</strong> het nodige. En zit je al bij Apple, Amazon of Google, dan volstaat je <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> of <strong>Nest Hub</strong> vaak om te beginnen: voeg een stekker zoals de <strong>Eve Energy</strong> toe om je Thread-netwerk op te bouwen.</p>`,
  },
  faq: [
    {
      question: {
        fr: 'Faut-il un hub pour utiliser Matter ?',
        en: 'Do I need a hub to use Matter?',
        de: 'Brauche ich einen Hub für Matter?',
        es: '¿Necesito un hub para usar Matter?',
        it: 'Serve un hub per usare Matter?',
        nl: 'Heb ik een hub nodig voor Matter?',
      },
      answer: {
        fr: 'Il faut un contrôleur Matter, souvent une enceinte, un écran ou une box déjà présente chez vous. Les appareils Matter en Wi-Fi se connectent directement à votre box internet ; les appareils Matter en Thread ont en plus besoin d’un border router Thread, intégré à de nombreux HomePod, Echo, Nest Hub et hubs comme l’Aqara Hub M3 ou IKEA DIRIGERA.',
        en: 'You need a Matter controller, often a speaker, display or hub you already own. Wi-Fi Matter devices connect straight to your router; Thread Matter devices also need a Thread border router, built into many HomePod, Echo and Nest Hub models and into hubs such as the Aqara Hub M3 or IKEA DIRIGERA.',
        de: 'Sie brauchen einen Matter-Controller, oft ein Lautsprecher, Display oder Hub, den Sie schon haben. WLAN-Matter-Geräte verbinden sich direkt mit dem Router; Thread-Matter-Geräte brauchen zusätzlich einen Thread-Border-Router, der in vielen HomePod-, Echo- und Nest-Hub-Modellen sowie in Hubs wie Aqara Hub M3 oder IKEA DIRIGERA steckt.',
        es: 'Necesitas un controlador Matter, a menudo un altavoz, pantalla o hub que ya tienes. Los dispositivos Matter por wifi se conectan directamente al router; los dispositivos Matter sobre Thread necesitan además un border router Thread, integrado en muchos HomePod, Echo y Nest Hub y en hubs como Aqara Hub M3 o IKEA DIRIGERA.',
        it: 'Serve un controller Matter, spesso un altoparlante, uno schermo o un hub che avete già. I dispositivi Matter Wi-Fi si collegano direttamente al router; quelli Matter su Thread richiedono anche un border router Thread, integrato in molti HomePod, Echo e Nest Hub e in hub come Aqara Hub M3 o IKEA DIRIGERA.',
        nl: 'Je hebt een Matter-controller nodig, vaak een speaker, scherm of hub die je al hebt. Matter-apparaten op wifi verbinden rechtstreeks met je router; Matter-apparaten op Thread hebben daarnaast een Thread-borderrouter nodig, die in veel HomePod-, Echo- en Nest Hub-modellen zit en in hubs als de Aqara Hub M3 of IKEA DIRIGERA.',
      },
    },
    {
      question: {
        fr: 'Quelle est la dernière version de Matter en 2026 ?',
        en: 'What is the latest version of Matter in 2026?',
        de: 'Was ist die aktuelle Matter-Version 2026?',
        es: '¿Cuál es la última versión de Matter en 2026?',
        it: 'Qual è l’ultima versione di Matter nel 2026?',
        nl: 'Wat is de nieuwste versie van Matter in 2026?',
      },
      answer: {
        fr: 'Matter 1.6, publié en juin 2026, qui ajoute notamment l’appairage par NFC et le Joint Fabric. Matter 1.5, sorti en novembre 2025, avait introduit les caméras et les portails, portes de garage et volets. Les nouvelles versions restent compatibles avec les appareils certifiés auparavant.',
        en: 'Matter 1.6, published in June 2026, which adds NFC setup and Joint Fabric among other things. Matter 1.5, released in November 2025, introduced cameras plus gates, garage doors and window coverings. New versions remain compatible with previously certified devices.',
        de: 'Matter 1.6 vom Juni 2026, das unter anderem die Einrichtung per NFC und Joint Fabric bringt. Matter 1.5 vom November 2025 führte Kameras sowie Tore, Garagentore und Rollläden ein. Neue Versionen bleiben mit bereits zertifizierten Geräten kompatibel.',
        es: 'Matter 1.6, publicado en junio de 2026, que añade entre otras cosas la configuración por NFC y el Joint Fabric. Matter 1.5, de noviembre de 2025, introdujo las cámaras y las cancelas, puertas de garaje y persianas. Las nuevas versiones siguen siendo compatibles con los dispositivos ya certificados.',
        it: 'Matter 1.6, pubblicato a giugno 2026, che aggiunge tra l’altro l’abbinamento via NFC e il Joint Fabric. Matter 1.5, uscito a novembre 2025, aveva introdotto telecamere, cancelli, porte da garage e tapparelle. Le nuove versioni restano compatibili con i dispositivi già certificati.',
        nl: 'Matter 1.6, gepubliceerd in juni 2026, dat onder meer instellen via NFC en Joint Fabric toevoegt. Matter 1.5 uit november 2025 introduceerde camera’s plus poorten, garagedeuren en zonwering. Nieuwe versies blijven compatibel met eerder gecertificeerde apparaten.',
      },
    },
    {
      question: {
        fr: 'IKEA DIRIGERA est-il un border router Thread ?',
        en: 'Is the IKEA DIRIGERA a Thread border router?',
        de: 'Ist der IKEA DIRIGERA ein Thread-Border-Router?',
        es: '¿IKEA DIRIGERA es un border router Thread?',
        it: 'IKEA DIRIGERA è un border router Thread?',
        nl: 'Is de IKEA DIRIGERA een Thread-borderrouter?',
      },
      answer: {
        fr: 'Oui, depuis la mise à jour 2.805.6 déployée à partir de juillet 2025. Elle a aussi fait de DIRIGERA un contrôleur Matter capable d’ajouter des appareils d’autres marques. La fonction contrôleur doit être activée dans les réglages de l’application IKEA Home smart.',
        en: 'Yes, since update 2.805.6, rolled out from July 2025. It also made DIRIGERA a Matter controller able to add other brands’ devices. The controller feature has to be enabled in the IKEA Home smart app settings.',
        de: 'Ja, seit dem ab Juli 2025 verteilten Update 2.805.6. Es machte DIRIGERA außerdem zum Matter-Controller, der Geräte anderer Marken einbinden kann. Die Controller-Funktion muss in den Einstellungen der App IKEA Home smart aktiviert werden.',
        es: 'Sí, desde la actualización 2.805.6, distribuida a partir de julio de 2025. También convirtió a DIRIGERA en controlador Matter capaz de añadir dispositivos de otras marcas. La función de controlador debe activarse en los ajustes de la app IKEA Home smart.',
        it: 'Sì, dall’aggiornamento 2.805.6 distribuito da luglio 2025. Lo ha anche trasformato in controller Matter capace di aggiungere dispositivi di altre marche. La funzione controller va attivata nelle impostazioni dell’app IKEA Home smart.',
        nl: 'Ja, sinds update 2.805.6, uitgerold vanaf juli 2025. Die maakte van DIRIGERA ook een Matter-controller die apparaten van andere merken kan toevoegen. De controllerfunctie moet worden ingeschakeld in de instellingen van de app IKEA Home smart.',
      },
    },
    {
      question: {
        fr: 'Matter fonctionne-t-il sans internet ?',
        en: 'Does Matter work without internet?',
        de: 'Funktioniert Matter ohne Internet?',
        es: '¿Funciona Matter sin internet?',
        it: 'Matter funziona senza internet?',
        nl: 'Werkt Matter zonder internet?',
      },
      answer: {
        fr: 'Les commandes locales et les automatisations exécutées sur le hub continuent de fonctionner, car elles passent par votre réseau domestique. L’accès à distance, certaines commandes vocales et les mises à jour nécessitent en revanche une connexion internet.',
        en: 'Local commands and automations running on the hub keep working because they travel over your home network. Remote access, some voice commands and updates do need an internet connection.',
        de: 'Lokale Befehle und auf dem Hub laufende Automationen funktionieren weiter, da sie über Ihr Heimnetz laufen. Fernzugriff, manche Sprachbefehle und Updates benötigen dagegen eine Internetverbindung.',
        es: 'Los comandos locales y las automatizaciones que se ejecutan en el hub siguen funcionando porque pasan por tu red doméstica. El acceso remoto, algunos comandos de voz y las actualizaciones sí necesitan conexión a internet.',
        it: 'I comandi locali e le automazioni eseguite sull’hub continuano a funzionare perché passano dalla rete di casa. L’accesso remoto, alcuni comandi vocali e gli aggiornamenti richiedono invece una connessione internet.',
        nl: 'Lokale opdrachten en automatiseringen die op de hub draaien blijven werken, omdat ze via je thuisnetwerk lopen. Bediening op afstand, sommige spraakopdrachten en updates hebben wel internet nodig.',
      },
    },
    {
      question: {
        fr: 'Quelle différence entre Matter, Thread et Zigbee ?',
        en: 'What is the difference between Matter, Thread and Zigbee?',
        de: 'Was ist der Unterschied zwischen Matter, Thread und Zigbee?',
        es: '¿Qué diferencia hay entre Matter, Thread y Zigbee?',
        it: 'Che differenza c’è tra Matter, Thread e Zigbee?',
        nl: 'Wat is het verschil tussen Matter, Thread en Zigbee?',
      },
      answer: {
        fr: 'Matter est le langage commun des appareils. Thread est un réseau radio maillé basse consommation sur lequel Matter peut circuler, comme le Wi-Fi ou l’Ethernet. Zigbee est un autre réseau maillé, plus ancien, qui ne transporte pas Matter : les appareils Zigbee passent par un pont (Hue, DIRIGERA, Aqara) pour apparaître dans Matter.',
        en: 'Matter is the common language devices speak. Thread is a low-power mesh radio network that Matter can run over, like Wi-Fi or Ethernet. Zigbee is another, older mesh network that does not carry Matter: Zigbee devices go through a bridge (Hue, DIRIGERA, Aqara) to appear in Matter.',
        de: 'Matter ist die gemeinsame Sprache der Geräte. Thread ist ein stromsparendes Mesh-Funknetz, über das Matter laufen kann, wie WLAN oder Ethernet. Zigbee ist ein anderes, älteres Mesh-Netz, das kein Matter transportiert: Zigbee-Geräte erscheinen über eine Bridge (Hue, DIRIGERA, Aqara) in Matter.',
        es: 'Matter es el lenguaje común de los dispositivos. Thread es una red radio mallada de bajo consumo por la que puede circular Matter, igual que wifi o Ethernet. Zigbee es otra red mallada, más antigua, que no transporta Matter: los dispositivos Zigbee pasan por un puente (Hue, DIRIGERA, Aqara) para aparecer en Matter.',
        it: 'Matter è il linguaggio comune dei dispositivi. Thread è una rete radio mesh a basso consumo su cui può viaggiare Matter, come Wi-Fi o Ethernet. Zigbee è un’altra rete mesh, più vecchia, che non trasporta Matter: i dispositivi Zigbee passano da un bridge (Hue, DIRIGERA, Aqara) per comparire in Matter.',
        nl: 'Matter is de gemeenschappelijke taal van apparaten. Thread is een zuinig mesh-radionetwerk waarover Matter kan lopen, net als wifi of ethernet. Zigbee is een ander, ouder mesh-netwerk dat geen Matter draagt: Zigbee-apparaten verschijnen via een bridge (Hue, DIRIGERA, Aqara) in Matter.',
      },
    },
    {
      question: {
        fr: 'Puis-je utiliser plusieurs border routers de marques différentes ?',
        en: 'Can I use several border routers from different brands?',
        de: 'Kann ich mehrere Border Router verschiedener Marken nutzen?',
        es: '¿Puedo usar varios border routers de marcas distintas?',
        it: 'Posso usare più border router di marche diverse?',
        nl: 'Kan ik meerdere borderrouters van verschillende merken gebruiken?',
      },
      answer: {
        fr: 'Oui. Avec Thread 1.4, les border routers partagent les identifiants réseau pour former un seul réseau Thread. Les appareils plus anciens peuvent encore créer des réseaux séparés tant qu’ils n’ont pas reçu la mise à jour : vérifiez les versions dans les applications de vos fabricants.',
        en: 'Yes. With Thread 1.4, border routers share network credentials to form a single Thread network. Older devices may still create separate networks until they get the update, so check versions in your manufacturers’ apps.',
        de: 'Ja. Mit Thread 1.4 teilen Border Router die Netzwerkzugangsdaten und bilden ein gemeinsames Thread-Netz. Ältere Geräte können bis zum Update noch getrennte Netze aufbauen – prüfen Sie die Versionen in den Hersteller-Apps.',
        es: 'Sí. Con Thread 1.4, los border routers comparten las credenciales de red para formar una sola red Thread. Los dispositivos más antiguos aún pueden crear redes separadas hasta recibir la actualización: comprueba las versiones en las apps de los fabricantes.',
        it: 'Sì. Con Thread 1.4 i border router condividono le credenziali di rete e formano un’unica rete Thread. I dispositivi più vecchi possono ancora creare reti separate finché non ricevono l’aggiornamento: verificate le versioni nelle app dei produttori.',
        nl: 'Ja. Met Thread 1.4 delen borderrouters de netwerkgegevens en vormen ze één Thread-netwerk. Oudere apparaten kunnen nog aparte netwerken opzetten tot ze de update krijgen: controleer de versies in de apps van de fabrikanten.',
      },
    },
  ],
}
