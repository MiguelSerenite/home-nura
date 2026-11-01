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
        es: 'Altavoz inteligente sobre una mesa, punto de partida habitual de un hogar inteligente con Matter',
        it: 'Altoparlante smart appoggiato su un tavolo, il classico punto di partenza di una casa smart con Matter',
        nl: 'Slimme speaker op tafel: voor veel mensen het startpunt van een slim huis met Matter',
        pl: 'Inteligentny głośnik na stole – typowy pierwszy krok w stronę inteligentnego domu z Matter',
        sv: 'Smart högtalare på ett bord, en vanlig startpunkt för ett smart hem med Matter',
        us: 'Smart speaker on a table, a typical starting point for a Matter smart home',
        ca: 'Smart speaker on a table, a typical starting point for a Matter smart home',
      },
    },
  ],
  title: {
    fr: 'Matter et Thread : la maison connectée expliquée simplement en 2026',
    en: 'Matter and Thread, Simply Explained: Smart Home Guide 2026',
    de: 'Matter und Thread einfach erklärt: der Smart-Home-Standard 2026',
    es: 'Matter y Thread en 2026: el hogar inteligente explicado sin tecnicismos',
    it: 'Matter e Thread: la casa smart spiegata in modo semplice nel 2026',
    nl: 'Matter en Thread: het slimme huis simpel uitgelegd (2026)',
    pl: 'Matter i Thread w 2026 roku: inteligentny dom bez tajemnic',
    sv: 'Matter och Thread förklarade: standarden för smarta hem 2026',
    us: 'Matter and Thread Explained: The Smart Home Standard in 2026',
    ca: 'Matter and Thread Explained: The Smart Home Standard in 2026',
  },
  excerpt: {
    fr: 'Matter fait parler vos appareils connectés entre eux, Thread les relie en réseau maillé basse consommation. Versions, border routers Thread par écosystème, mise à jour IKEA DIRIGERA et hubs à choisir en 2026.',
    en: 'Matter lets smart devices from different brands talk to each other, and Thread links them in a low-power mesh network. We cover versions, Thread border routers for each ecosystem, the IKEA DIRIGERA update and which hub to choose in 2026.',
    de: 'Matter lässt Smart-Home-Geräte verschiedener Marken miteinander kommunizieren, Thread verbindet sie in einem stromsparenden Mesh-Netz. Versionen, Thread-Border-Router je Ökosystem, das IKEA-DIRIGERA-Update und die passenden Hubs 2026.',
    es: 'Matter hace que dispositivos de distintas marcas se entiendan entre sí, y Thread los une en una red mallada de bajo consumo. Versiones, routers de borde Thread según el ecosistema, la actualización del IKEA DIRIGERA y qué hub elegir en 2026.',
    it: 'Matter fa dialogare tra loro dispositivi smart di marche diverse, Thread li collega in una rete mesh a basso consumo. Le versioni, i border router Thread di ogni ecosistema, l’aggiornamento di IKEA DIRIGERA e quale hub scegliere nel 2026.',
    nl: 'Matter laat slimme apparaten van verschillende merken met elkaar praten en Thread verbindt ze in een zuinig mesh-netwerk. Lees welke versies er zijn, welke apparaten per ecosysteem als Thread-borderrouter werken, wat de update van IKEA DIRIGERA verandert en welke hub je in 2026 kiest.',
    pl: 'Dzięki Matter Twoje inteligentne urządzenia porozumiewają się ze sobą, a Thread łączy je w energooszczędną sieć typu mesh. Wersje standardu, routery brzegowe Thread w poszczególnych ekosystemach, aktualizacja IKEA DIRIGERA i huby, które warto wybrać w 2026 roku.',
    sv: 'Matter får smarta enheter från olika märken att prata med varandra, och Thread kopplar ihop dem i ett energisnålt meshnätverk. Versioner, gränsroutrar för Thread per ekosystem, uppdateringen av IKEA DIRIGERA och vilken hubb du ska välja 2026.',
    us: 'Matter lets smart devices from different brands talk to each other, and Thread links them in a low-power mesh. Versions, Thread border routers by ecosystem, the IKEA DIRIGERA update and which hub to pick in 2026.',
    ca: 'Matter lets smart devices from different brands talk to each other, and Thread links them in a low-power mesh. Versions, Thread border routers by ecosystem, the IKEA DIRIGERA update and which hub to pick in 2026.',
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
<p>This guide explains what the two standards actually do, which versions are current, which devices act as border routers in each ecosystem and which hub to choose. It draws on specifications published by the Connectivity Standards Alliance (CSA) and the Thread Group, manufacturer documentation, independent reviews and verified buyer feedback. To compare available hubs, see our <a href="/en/energie-domotique/hubs-domotique">smart home hubs</a> page.</p>

<h2>What exactly is Matter?</h2>
<p>Matter is an open application standard run by the Connectivity Standards Alliance, whose members include Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) and Eve. It defines how a device describes what it can do (a light, a plug, a thermostat…) and how a controller sends it commands. Three principles set it apart from the old closed ecosystems:</p>
<ul>
<li><strong>Local control:</strong> commands travel over your home network. Switching on a Matter light from the app does not depend on a remote server, so the system responds quickly and keeps working during an internet outage (remote access and some voice assistants still rely on the cloud).</li>
<li><strong>Multi-admin:</strong> one device can be added to several ecosystems at once, for example Apple Home for you and Google Home for someone else in the household.</li>
<li><strong>Built-in security:</strong> every certified device has a verifiable identity, and all communication is encrypted.</li>
</ul>

<h3>Matter versions at a glance</h3>
<p>Matter 1.0 arrived in late 2022 with lighting, plugs, locks, sensors and thermostats. Later versions widened the scope: robot vacuums and major appliances (1.2), energy reporting and cooking appliances (1.3), heat pumps, home batteries and water heaters (1.4). <strong>Matter 1.5</strong>, published in November 2025, added cameras, along with gates, garage doors and shutters. <strong>Matter 1.6</strong>, published in June 2026, brings NFC pairing, thermostat suggestions and “Joint Fabric”, which makes it easier for several platforms to share one network.</p>
<p>Bear in mind that just because a category exists in the specification, it does not mean your app supports it yet. Each ecosystem rolls out new device types at its own pace, and advanced features (vacuum maps, video history, detailed settings) often stay in the manufacturer’s app.</p>

<h2>Thread, the network that carries Matter</h2>
<p>Matter can run over Wi-Fi, Ethernet or Thread. Thread is a low-power IPv6 radio network designed for small devices: sensors, bulbs, plugs, smart radiator thermostats and locks.</p>
<ul>
<li><strong>A mesh network:</strong> mains-powered devices (plugs, bulbs) relay messages for the others. The more you have, the wider the coverage.</li>
<li><strong>Low power use:</strong> battery-powered sensors can stay in sleep mode for long periods, which makes Thread a good fit for door, window and temperature sensors.</li>
<li><strong>The border router:</strong> this is the bridge between the Thread network and your Wi-Fi/Ethernet network. Without one, a Matter-over-Thread device cannot be added. Having several border routers improves reliability.</li>
</ul>
<p><strong>Thread 1.4</strong> fixes a real problem: previously, an Apple and a Google border router could create two separate Thread networks in the same home. Thread 1.4 standardises the way network credentials are shared between brands. Since 1 January 2026 it is the only version under which new border routers can be certified, but devices already installed in homes are getting the update at different times, depending on the brand.</p>

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

<h2>IKEA DIRIGERA: what has changed</h2>
<p>IKEA’s DIRIGERA hub started out as a Zigbee hub able to expose IKEA products to other ecosystems through a Matter bridge. In July 2025, update 2.805.6 turned it into a <strong>Matter controller</strong> (it can add and automate other brands’ Matter devices in the IKEA Home smart app) and switched on its <strong>Thread</strong> radio to make it a border router. The controller feature launched as a beta and has to be enabled in the app settings.</p>
<p>Since early 2026 IKEA has also been selling a new range of around twenty native Matter-over-Thread products, including KAJPLATS bulbs, BILRESA remotes, the MYGGSPRAY motion sensor and the TIMMERFLOTTE temperature and humidity sensor. These can join Apple Home, Google Home, Alexa or SmartThings directly through any Thread border router, without DIRIGERA. Older TRADFRI bulbs stay on Zigbee and need DIRIGERA to appear in Matter.</p>

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
<p><strong>Pros:</strong> the most versatile option here, works with all major ecosystems, stable wired connection. <strong>Cons:</strong> fine-tuning is done in the Aqara app, which is more technical. <strong>Best for:</strong> homes mixing several brands or already using Zigbee sensors.</p>

<h3>2. IKEA DIRIGERA — best value</h3>
<p>A Zigbee hub and Matter bridge that is now also a Matter controller and Thread border router thanks to a software update. It is the natural starting point for IKEA lighting, old and new.</p>
<p><strong>Pros:</strong> affordable, handles existing TRADFRI products and the new Thread range. <strong>Cons:</strong> it still supports a limited range of device types, and its automations are less advanced than Aqara’s. <strong>Best for:</strong> households building their lighting around IKEA.</p>

<h3>3. Apple HomePod mini — for iPhone users</h3>
<p>The HomePod mini is a Siri speaker, an Apple Home hub and a Thread border router in one. It is one of the simplest ways to start with Matter in the Apple world.</p>
<p><strong>Pros:</strong> very easy setup from an iPhone, local automations. <strong>Cons:</strong> no Zigbee, and the Home app requires an Apple device. <strong>Best for:</strong> households already using iPhones.</p>

<h3>4. Amazon Echo Dot Max — for Alexa users</h3>
<p>Launched in late 2025, the Echo Dot Max packs a Matter, Thread and Zigbee smart home hub into a compact speaker with fuller sound than the regular Echo Dot.</p>
<p><strong>Pros:</strong> Thread and Zigbee without an extra hub, a wide range of Alexa-compatible devices. <strong>Cons:</strong> the new Alexa+ features are not available everywhere in Europe. <strong>Best for:</strong> people who already use Alexa to control their home by voice.</p>

<h3>5. Google Nest Hub (2nd gen) — for the Google ecosystem</h3>
<p>A smart display with Google Assistant that acts as a Matter controller and Thread border router for Google Home.</p>
<p><strong>Pros:</strong> a handy screen for seeing and controlling devices, Android integration. <strong>Cons:</strong> no Zigbee, and the hardware is starting to show its age. <strong>Best for:</strong> Android households that want a control screen in the kitchen or living room.</p>

<h3>6. Eve Energy (Matter) — the go-to Thread device</h3>
<p>Not a hub but a Matter-over-Thread smart plug with energy monitoring that works with any Thread border router and Matter controller. It also extends the Thread mesh for other devices.</p>
<p><strong>Pros:</strong> no cloud or account required, works with all four major ecosystems. <strong>Cons:</strong> bulkier than a Wi-Fi mini plug. <strong>Best for:</strong> a first Thread device to check that everything works. See also our <a href="/en/blog/box-domotique-hub-comparatif">smart home hub comparison</a>.</p>

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
<li><strong>Assuming “Matter compatible” means “every feature”:</strong> the basics work through Matter, but advanced settings sometimes stay in the manufacturer’s app.</li>
<li><strong>Buying Thread devices without a border router:</strong> first check that your speaker, display or hub has one.</li>
<li><strong>Confusing Zigbee and Thread:</strong> a standard Hue or TRADFRI bulb uses Zigbee and needs a bridge to join Matter.</li>
<li><strong>Throwing away the setup code:</strong> keep each device’s QR code or 11-digit code; you will need it after a reset.</li>
<li><strong>Rushing into Matter cameras:</strong> support has existed since Matter 1.5, but there are still few compatible models and apps.</li>
</ul>

<h2>Setup tips</h2>
<ol>
<li>Update your hub or speaker before adding the first device.</li>
<li>Put the border router in a central spot in your home, and add mains-powered Thread devices to extend the mesh.</li>
<li>Add each device to your main ecosystem, then share it with others using the “pair another service” option or a temporary pairing code.</li>
<li>Keep your phone’s Bluetooth on during pairing: it is often used for the initial connection.</li>
</ol>
<p>For more on lighting, read our <a href="/en/blog/eclairage-connecte-comparatif">smart lighting comparison</a>.</p>

<h2>Our verdict</h2>
<p>In 2026 Matter and Thread deliver on their main promise: you can choose devices without worrying about which ecosystem they belong to. If you are starting from scratch with several brands, the <strong>Aqara Hub M3</strong> is the most complete hub. If you are on a tight budget and have IKEA lighting, the updated <strong>DIRIGERA</strong> covers the essentials. And if you already use Apple, Amazon or Google, your <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> or <strong>Nest Hub</strong> is often enough to get started: add a plug such as the <strong>Eve Energy</strong> to build your Thread network.</p>`,

    de: `<p><strong>Matter ist eine gemeinsame Sprache, mit der ein Smart-Home-Gerät gleichzeitig mit Apple Home, Google Home, Alexa und SmartThings funktioniert. Thread ist das stromsparende Funknetz, über das viele dieser Geräte kommunizieren.</strong> Um beides zu nutzen, brauchen Sie 2026 einen Matter-Controller und für Thread-Geräte einen Thread-Border-Router – oft ein Lautsprecher, Display oder Hub, den Sie bereits besitzen.</p>
<p>Dieser Ratgeber erklärt, was die beiden Standards tatsächlich leisten, welche Versionen aktuell sind, welche Geräte in welchem Ökosystem als Border Router dienen und welcher Hub sich lohnt. Grundlage sind die Spezifikationen der Connectivity Standards Alliance (CSA) und der Thread Group, Herstellerdokumentationen, unabhängige Testberichte und verifizierte Käuferbewertungen. Einen Überblick über die erhältlichen Hubs bietet unsere Seite <a href="/de/energie-domotique/hubs-domotique">Smart-Home-Zentralen</a>.</p>

<h2>Was genau ist Matter?</h2>
<p>Matter ist ein offener Anwendungsstandard der Connectivity Standards Alliance, zu deren Mitgliedern Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) und Eve gehören. Er legt fest, wie ein Gerät beschreibt, was es kann (Lampe, Steckdose, Thermostat …), und wie ein Controller ihm Befehle schickt. Drei Prinzipien unterscheiden ihn von den alten, geschlossenen Ökosystemen:</p>
<ul>
<li><strong>Lokale Steuerung:</strong> Befehle laufen über Ihr Heimnetz. Wenn Sie eine Matter-Lampe in der App einschalten, hängt das nicht von einem entfernten Server ab: Das System reagiert schneller und funktioniert auch bei einem Internetausfall (Fernzugriff und manche Sprachassistenten brauchen aber weiterhin die Cloud).</li>
<li><strong>Multi-Admin:</strong> Ein Gerät kann mehreren Ökosystemen gleichzeitig hinzugefügt werden, etwa Apple Home für Sie und Google Home für ein anderes Haushaltsmitglied.</li>
<li><strong>Eingebaute Sicherheit:</strong> Jedes zertifizierte Gerät hat eine überprüfbare Identität, und die Kommunikation ist verschlüsselt.</li>
</ul>

<h3>Die Matter-Versionen im Überblick</h3>
<p>Matter 1.0 erschien Ende 2022 mit Beleuchtung, Steckdosen, Schlössern, Sensoren und Thermostaten. Spätere Versionen erweiterten den Umfang: Saugroboter und Haushaltsgroßgeräte (1.2), Energieverbrauchsdaten und Kochgeräte (1.3), Wärmepumpen, Stromspeicher und Warmwasserbereiter (1.4). <strong>Matter 1.5</strong> vom November 2025 brachte Kameras sowie Tore, Garagentore und Rollläden. <strong>Matter 1.6</strong> vom Juni 2026 bringt die Einrichtung per NFC, „Joint Fabric“, mit dem sich ein Netz einfacher zwischen mehreren Plattformen teilen lässt, sowie Vorschläge für Thermostate.</p>
<p>Wichtig: Dass eine Kategorie in der Spezifikation steht, heißt nicht, dass Ihre App sie schon unterstützt. Jedes Ökosystem führt neue Gerätetypen in seinem eigenen Tempo ein, und Zusatzfunktionen (Saugroboter-Karten, Videoverlauf, Feineinstellungen) bleiben oft in der Hersteller-App.</p>

<h2>Thread, das Netz für Matter</h2>
<p>Matter läuft über WLAN, Ethernet oder Thread. Thread ist ein stromsparendes IPv6-Funknetz für kleine Geräte: Sensoren, Lampen, Steckdosen, Heizkörperthermostate, Schlösser.</p>
<ul>
<li><strong>Mesh-Netz:</strong> Netzbetriebene Geräte (Steckdosen, Lampen) leiten Nachrichten der anderen weiter. Je mehr davon, desto größer die Reichweite.</li>
<li><strong>Geringer Verbrauch:</strong> Batteriebetriebene Sensoren können lange im Ruhemodus bleiben – ideal für Tür- und Fensterkontakte oder Temperatursensoren.</li>
<li><strong>Der Border Router:</strong> Er verbindet das Thread-Netz mit Ihrem WLAN/Ethernet. Ohne ihn lässt sich kein Matter-over-Thread-Gerät einbinden. Mehrere Border Router erhöhen die Zuverlässigkeit.</li>
</ul>
<p><strong>Thread 1.4</strong> löst ein echtes Problem: Bisher konnten ein Apple- und ein Google-Border-Router zwei getrennte Thread-Netze im selben Haushalt aufbauen. Thread 1.4 legt einheitlich fest, wie Border Router verschiedener Marken die Netzwerkzugangsdaten teilen. Seit dem 1. Januar 2026 können neue Border Router nur noch nach dieser Version zertifiziert werden; bereits installierte Geräte erhalten das Update je nach Marke unterschiedlich schnell.</p>

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

<h2>IKEA DIRIGERA: Was sich geändert hat</h2>
<p>IKEAs DIRIGERA war zunächst ein Zigbee-Hub, der IKEA-Produkte über eine Matter-Bridge an andere Ökosysteme weitergab. Mit dem Update 2.805.6 wurde er im Juli 2025 zum <strong>Matter-Controller</strong> (er kann Matter-Geräte anderer Marken in der App IKEA Home smart einbinden und automatisieren), außerdem wurde sein <strong>Thread</strong>-Funkmodul als Border Router freigeschaltet. Die Controller-Funktion startete als Beta und muss in den App-Einstellungen eingeschaltet werden.</p>
<p>Seit Anfang 2026 verkauft IKEA außerdem eine neue Reihe von rund zwanzig nativen Matter-over-Thread-Produkten, darunter KAJPLATS-Lampen, BILRESA-Fernbedienungen, den Bewegungsmelder MYGGSPRAY und den Temperatur- und Feuchtigkeitssensor TIMMERFLOTTE. Sie lassen sich über jeden Thread-Border-Router direkt in Apple Home, Google Home, Alexa oder SmartThings einbinden, ohne DIRIGERA. Ältere TRADFRI-Lampen funken weiterhin per Zigbee und brauchen DIRIGERA, um in Matter aufzutauchen.</p>

<h2>So wählen Sie Ihren Matter- und Thread-Hub</h2>
<ul>
<li><strong>Ihr Haupt-Ökosystem:</strong> Sprachassistent und App, die Sie täglich nutzen, zählen mehr als das Datenblatt.</li>
<li><strong>Integrierter Thread-Border-Router:</strong> unverzichtbar für Thread-Sensoren und -Lampen.</li>
<li><strong>Zusätzlich Zigbee:</strong> sinnvoll, wenn Sie schon Zigbee-Geräte (Aqara, IKEA TRADFRI, Hue) besitzen; manche Hubs reichen sie per Bridge an Matter weiter.</li>
<li><strong>Thread 1.4:</strong> erleichtert das Zusammenspiel von Border Routern verschiedener Marken.</li>
<li><strong>Lokale Automationen:</strong> Prüfen Sie, ob sie auf dem Hub laufen und nicht nur in der Cloud.</li>
</ul>

<h2>Empfehlenswerte Matter-Hubs und -Geräte 2026</h2>

<h3>1. Aqara Hub M3 – die beste Wahl insgesamt</h3>
<p>Der Hub M3 vereint Matter-Controller, Thread-Border-Router, Zigbee-Hub, Infrarotsender und Ethernet mit optionaler PoE-Versorgung. Er bindet Aqaras Zigbee-Sensoren in Matter ein und führt Automationen lokal aus.</p>
<p><strong>Stärken:</strong> das vielseitigste Gerät dieser Auswahl, kompatibel mit allen großen Ökosystemen, stabile Kabelverbindung. <strong>Schwächen:</strong> Für Feineinstellungen brauchen Sie die eher technische Aqara-App. <strong>Für wen:</strong> Haushalte mit mehreren Marken oder vorhandenen Zigbee-Sensoren.</p>

<h3>2. IKEA DIRIGERA – das beste Preis-Leistungs-Verhältnis</h3>
<p>Zigbee-Hub und Matter-Bridge, dank Update nun auch Matter-Controller und Thread-Border-Router. Der naheliegende Einstieg für IKEA-Beleuchtung, alt wie neu.</p>
<p><strong>Stärken:</strong> günstige Preisklasse, verwaltet vorhandene TRADFRI-Produkte und die neue Thread-Reihe. <strong>Schwächen:</strong> unterstützte Gerätetypen noch begrenzt, Automationen weniger umfangreich als bei Aqara. <strong>Für wen:</strong> Haushalte, die ihre Beleuchtung mit IKEA-Produkten ausstatten.</p>

<h3>3. Apple HomePod mini – für iPhone-Nutzer</h3>
<p>Der HomePod mini ist Siri-Lautsprecher, Apple-Home-Steuerzentrale und Thread-Border-Router in einem – für Apple-Nutzer einer der einfachsten Wege zu Matter.</p>
<p><strong>Stärken:</strong> sehr einfache Einrichtung am iPhone, lokale Automationen. <strong>Schwächen:</strong> kein Zigbee, die Home-App setzt ein Apple-Gerät voraus. <strong>Für wen:</strong> Haushalte mit iPhones.</p>

<h3>4. Amazon Echo Dot Max – für Alexa-Nutzer</h3>
<p>Der Echo Dot Max kam Ende 2025 auf den Markt und steckt einen Smart-Home-Hub mit Matter, Thread und Zigbee in ein kompaktes Gehäuse. Er klingt voller als der klassische Echo Dot.</p>
<p><strong>Stärken:</strong> Thread und Zigbee ohne zusätzlichen Hub, riesige Auswahl an Alexa-kompatiblen Geräten. <strong>Schwächen:</strong> Die neuen Alexa+-Funktionen sind nicht überall in Europa verfügbar. <strong>Für wen:</strong> alle, die ihr Zuhause schon per Sprache mit Alexa steuern.</p>

<h3>5. Google Nest Hub (2. Gen.) – für das Google-Ökosystem</h3>
<p>Ein smartes Display mit Google Assistant, das für Google Home als Matter-Controller und Thread-Border-Router dient.</p>
<p><strong>Stärken:</strong> praktischer Bildschirm, um Geräte im Blick zu behalten und zu steuern, gute Android-Integration. <strong>Schwächen:</strong> kein Zigbee, die Hardware ist nicht mehr ganz aktuell. <strong>Für wen:</strong> Android-Haushalte, die eine Steuerzentrale in Küche oder Wohnzimmer möchten.</p>

<h3>6. Eve Energy (Matter) – das Thread-Referenzgerät</h3>
<p>Kein Hub, sondern eine smarte Matter-over-Thread-Steckdose mit Verbrauchsmessung, die mit jedem Thread-Border-Router und Matter-Controller funktioniert. Sie erweitert zudem das Thread-Mesh für andere Geräte.</p>
<p><strong>Stärken:</strong> ohne Cloud oder Pflichtkonto, kompatibel mit allen vier großen Ökosystemen. <strong>Schwächen:</strong> klobiger als eine kompakte WLAN-Steckdose. <strong>Für wen:</strong> als erstes Thread-Gerät, um zu prüfen, ob alles läuft. Mehr dazu in unserem <a href="/de/blog/box-domotique-hub-comparatif">Vergleich der Smart-Home-Zentralen</a>.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Modell</th><th>Rolle</th><th>Protokolle</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Matter-Controller, Thread-Border-Router, Bridge</td><td>Thread, Zigbee, WLAN, Ethernet/PoE, IR</td><td>Geräte mehrerer Marken</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Matter-Controller, Thread-Border-Router, Bridge</td><td>Thread, Zigbee, WLAN, Ethernet</td><td>IKEA-Beleuchtung</td></tr>
<tr><td>Apple HomePod mini</td><td>Apple-Home-Zentrale, Thread-Border-Router</td><td>Thread, WLAN</td><td>iPhone-Haushalte</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Matter-Controller, Thread-Border-Router</td><td>Thread, Zigbee, WLAN</td><td>Alexa-Nutzer</td></tr>
<tr><td>Google Nest Hub (2. Gen.)</td><td>Matter-Controller, Thread-Border-Router</td><td>Thread, WLAN</td><td>Android-Haushalte</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Steckdose mit Energiemessung, Thread-Router</td><td>Thread</td><td>Erstes Thread-Gerät</td></tr>
</tbody>
</table>

<h2>Fehler, die Sie vermeiden sollten</h2>
<ul>
<li><strong>Glauben, „Matter-kompatibel“ heiße „alle Funktionen“:</strong> Das Wesentliche läuft über Matter, erweiterte Einstellungen bleiben teils in der Hersteller-App.</li>
<li><strong>Thread-Geräte ohne Border Router kaufen:</strong> Prüfen Sie zuerst, ob Ihr Lautsprecher, Display oder Hub einen hat.</li>
<li><strong>Zigbee und Thread verwechseln:</strong> Eine klassische Hue- oder TRADFRI-Lampe funkt per Zigbee und braucht eine Bridge für Matter.</li>
<li><strong>Den Einrichtungscode wegwerfen:</strong> Bewahren Sie den QR-Code oder den 11-stelligen Code jedes Geräts auf; nach einem Zurücksetzen brauchen Sie ihn wieder.</li>
<li><strong>Sofort voll auf Matter-Kameras setzen:</strong> Die Unterstützung gibt es seit Matter 1.5, kompatible Modelle und Apps sind aber noch selten.</li>
</ul>

<h2>Einrichtung: So gehen Sie vor</h2>
<ol>
<li>Aktualisieren Sie Hub oder Lautsprecher, bevor Sie das erste Gerät hinzufügen.</li>
<li>Stellen Sie den Border Router zentral in der Wohnung auf, und erweitern Sie das Mesh mit netzbetriebenen Thread-Geräten.</li>
<li>Fügen Sie jedes Gerät Ihrem Haupt-Ökosystem hinzu und teilen Sie es dann über „Mit anderem Dienst koppeln“ oder einen temporären Kopplungscode.</li>
<li>Lassen Sie während der Kopplung Bluetooth am Smartphone eingeschaltet: Darüber läuft oft der erste Verbindungsaufbau.</li>
</ol>
<p>Mehr zur Beleuchtung lesen Sie in unserem <a href="/de/blog/eclairage-connecte-comparatif">Vergleich smarter Beleuchtung</a>.</p>

<h2>Unser Fazit</h2>
<p>2026 halten Matter und Thread ihr Hauptversprechen: Geräte wählen, ohne sich um das Ökosystem zu sorgen. Wer mit mehreren Marken neu startet, ist mit dem <strong>Aqara Hub M3</strong> am umfassendsten ausgestattet. Mit kleinem Budget und IKEA-Beleuchtung erledigt der aktualisierte <strong>DIRIGERA</strong> das Wesentliche. Und wer bereits auf Apple, Amazon oder Google setzt, kann oft mit seinem <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> oder <strong>Nest Hub</strong> starten – ergänzt um eine Steckdose wie die <strong>Eve Energy</strong>, um das Thread-Netz aufzubauen.</p>`,

    es: `<p><strong>Matter es un lenguaje común que permite que un dispositivo conectado funcione a la vez con Apple Casa, Google Home, Alexa y SmartThings, y Thread es la red inalámbrica de bajo consumo por la que se comunican muchos de esos dispositivos.</strong> Para aprovecharlos en 2026 necesitas un controlador Matter y, para los dispositivos Thread, un «border router» Thread: a menudo un altavoz, una pantalla o un hub que ya tienes en casa.</p>
<p>Esta guía explica qué hacen realmente ambos estándares, en qué versión están, qué aparatos actúan como border router en cada ecosistema y qué hub elegir. Se basa en las especificaciones publicadas por la Connectivity Standards Alliance (CSA) y el Thread Group, la documentación de los fabricantes, análisis independientes y opiniones de compradores verificados. Para comparar los hubs disponibles, consulta nuestra página de <a href="/es/energie-domotique/hubs-domotique">hubs domóticos</a>.</p>

<h2>¿Qué es exactamente Matter?</h2>
<p>Matter es un estándar abierto de la capa de aplicación, impulsado por la Connectivity Standards Alliance, de la que forman parte Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) y Eve, entre otros. Define cómo un dispositivo describe lo que sabe hacer (una luz, un enchufe, un termostato…) y cómo un controlador le envía órdenes. Tres principios lo diferencian de los antiguos ecosistemas cerrados:</p>
<ul>
<li><strong>Control local:</strong> las órdenes viajan por tu red doméstica. Encender una luz Matter desde la app no depende de un servidor remoto, por lo que responde rápido y sigue funcionando si se cae internet (el acceso remoto y algunos asistentes de voz sí dependen de la nube).</li>
<li><strong>Multiadministrador:</strong> un mismo dispositivo puede añadirse a varios ecosistemas a la vez, por ejemplo Apple Casa para ti y Google Home para otra persona del hogar.</li>
<li><strong>Seguridad integrada:</strong> cada dispositivo certificado tiene una identidad verificable y las comunicaciones van cifradas.</li>
</ul>

<h3>Las versiones de Matter en resumen</h3>
<p>Matter 1.0 llegó a finales de 2022 con iluminación, enchufes, cerraduras, sensores y termostatos. Las versiones siguientes ampliaron el alcance: robots aspiradores y grandes electrodomésticos (1.2), seguimiento del consumo de energía y aparatos de cocina (1.3), bombas de calor, baterías domésticas y calentadores de agua (1.4). <strong>Matter 1.5</strong>, publicado en noviembre de 2025, añadió las cámaras, además de cancelas, puertas de garaje y persianas. <strong>Matter 1.6</strong>, publicado en junio de 2026, incorpora el emparejamiento por NFC, el «Joint Fabric» para compartir más fácilmente una misma red entre varias plataformas y sugerencias para termostatos.</p>
<p>Ojo: que una categoría exista en la especificación no significa que tu app ya la admita. Cada ecosistema incorpora los nuevos tipos de dispositivo a su ritmo, y las funciones avanzadas (mapas del robot, historial de vídeo, ajustes finos) suelen quedarse en la app del fabricante.</p>

<h2>Thread, la red que transporta Matter</h2>
<p>Matter puede funcionar sobre wifi, Ethernet o Thread. Thread es una red de radio de bajo consumo basada en IPv6, pensada para dispositivos pequeños: sensores, bombillas, enchufes, válvulas termostáticas y cerraduras.</p>
<ul>
<li><strong>Red mallada:</strong> los dispositivos conectados a la corriente (enchufes, bombillas) retransmiten los mensajes de los demás. Cuantos más haya, mayor es la cobertura.</li>
<li><strong>Bajo consumo:</strong> los sensores a pilas pueden pasar mucho tiempo en reposo, de ahí su interés para los detectores de apertura o de temperatura.</li>
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
<p>Los modelos más antiguos o de gama de entrada (Echo Dot clásico, Nest Mini, Nest Hub de 1.ª generación) pueden controlar dispositivos Matter por wifi, pero no son border routers Thread. Revisa la ficha de tu aparato antes de comprar productos Thread.</p>

<h2>El caso de IKEA DIRIGERA: qué ha cambiado</h2>
<p>El hub DIRIGERA de IKEA nació como hub Zigbee capaz de exponer los productos de IKEA a otros ecosistemas mediante un puente Matter. En julio de 2025, la actualización 2.805.6 lo convirtió en <strong>controlador Matter</strong> (puede añadir y automatizar dispositivos Matter de otras marcas en la app IKEA Home smart) y activó su radio <strong>Thread</strong> para que actúe como border router. La función de controlador se lanzó en beta y hay que activarla en los ajustes de la app.</p>
<p>Desde principios de 2026, IKEA vende además una nueva gama de una veintena de productos nativos Matter sobre Thread: bombillas KAJPLATS, mandos BILRESA, el sensor de movimiento MYGGSPRAY y el sensor de temperatura y humedad TIMMERFLOTTE, entre otros. Pueden unirse directamente a Apple Casa, Google Home, Alexa o SmartThings mediante cualquier border router Thread, sin DIRIGERA. Las bombillas TRADFRI anteriores siguen en Zigbee y necesitan DIRIGERA para aparecer en Matter.</p>

<h2>Cómo elegir tu hub Matter y Thread</h2>
<ul>
<li><strong>Tu ecosistema principal:</strong> el asistente de voz y la app que usas a diario importan más que la ficha técnica.</li>
<li><strong>Border router Thread integrado:</strong> imprescindible si vas a usar sensores y bombillas Thread.</li>
<li><strong>Zigbee como extra:</strong> útil si ya tienes productos Zigbee (Aqara, IKEA TRADFRI, Hue); algunos hubs los exponen en Matter mediante un puente.</li>
<li><strong>Thread 1.4:</strong> facilita la convivencia de border routers de distintas marcas.</li>
<li><strong>Automatizaciones locales:</strong> comprueba que se ejecutan en el hub y no solo en la nube.</li>
</ul>

<h2>Los hubs y dispositivos Matter que conviene conocer en 2026</h2>

<h3>1. Aqara Hub M3: la mejor opción en general</h3>
<p>El Hub M3 reúne controlador Matter, border router Thread, hub Zigbee, emisor de infrarrojos y conexión Ethernet con alimentación PoE opcional. Hace visibles en Matter los sensores Zigbee de Aqara y ejecuta las automatizaciones en local.</p>
<p><strong>Puntos fuertes:</strong> el más versátil de esta selección, compatible con todos los grandes ecosistemas, conexión por cable estable. <strong>Limitaciones:</strong> la configuración avanzada se hace en la app de Aqara, más técnica. <strong>Para quién:</strong> hogares que mezclan varias marcas o ya tienen sensores Zigbee.</p>

<h3>2. IKEA DIRIGERA: la mejor relación calidad-precio</h3>
<p>Hub Zigbee y puente Matter que, gracias a su actualización, es también controlador Matter y border router Thread. Es la forma más lógica de empezar con la iluminación de IKEA, tanto la antigua como la nueva.</p>
<p><strong>Puntos fuertes:</strong> precio asequible, gestiona los productos TRADFRI existentes y la nueva gama Thread. <strong>Limitaciones:</strong> los tipos de dispositivo admitidos siguen siendo limitados y las automatizaciones son menos completas que en Aqara. <strong>Para quién:</strong> hogares que montan su iluminación con IKEA.</p>

<h3>3. Apple HomePod mini: para usuarios de iPhone</h3>
<p>El HomePod mini es a la vez altavoz con Siri, concentrador de Apple Casa y border router Thread. Es una de las formas más sencillas de empezar con Matter en el mundo Apple.</p>
<p><strong>Puntos fuertes:</strong> configuración muy sencilla desde el iPhone, automatizaciones locales. <strong>Limitaciones:</strong> sin Zigbee, y la app Casa exige un dispositivo Apple. <strong>Para quién:</strong> hogares que ya usan iPhone.</p>

<h3>4. Amazon Echo Dot Max: para usuarios de Alexa</h3>
<p>Lanzado a finales de 2025, el Echo Dot Max integra un hub domótico Matter, Thread y Zigbee en un altavoz compacto con un sonido más envolvente que el Echo Dot clásico.</p>
<p><strong>Puntos fuertes:</strong> Thread y Zigbee sin hub adicional, enorme catálogo de dispositivos compatibles con Alexa. <strong>Limitaciones:</strong> las funciones de la nueva Alexa+ no están disponibles en toda Europa. <strong>Para quién:</strong> quienes ya controlan su casa por voz con Alexa.</p>

<h3>5. Google Nest Hub (2.ª gen.): para el ecosistema Google</h3>
<p>Pantalla inteligente con el Asistente de Google que funciona como controlador Matter y border router Thread para Google Home.</p>
<p><strong>Puntos fuertes:</strong> pantalla práctica para ver y controlar los dispositivos, integración con Android. <strong>Limitaciones:</strong> sin Zigbee, y el aparato ya tiene unos años. <strong>Para quién:</strong> hogares Android que quieren una pantalla de control en la cocina o el salón.</p>

<h3>6. Eve Energy (Matter): el dispositivo Thread de referencia</h3>
<p>No es un hub, sino un enchufe inteligente Matter sobre Thread con medición de consumo, que funciona con cualquier border router Thread y controlador Matter. Además amplía la malla Thread para otros dispositivos.</p>
<p><strong>Puntos fuertes:</strong> sin nube ni cuenta obligatoria, compatible con los cuatro grandes ecosistemas. <strong>Limitaciones:</strong> abulta más que un minienchufe wifi. <strong>Para quién:</strong> quien busca un primer dispositivo Thread para comprobar que todo funciona. Consulta también nuestra <a href="/es/blog/box-domotique-hub-comparatif">comparativa de centrales domóticas</a>.</p>

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
<li><strong>Tirar el código de emparejamiento:</strong> guarda el código QR o el código de 11 dígitos de cada dispositivo; lo necesitarás si tienes que restablecerlo.</li>
<li><strong>Apostarlo todo ya por las cámaras Matter:</strong> el soporte existe desde Matter 1.5, pero los modelos y apps compatibles aún son pocos.</li>
</ul>

<h2>Instalación: buenas prácticas</h2>
<ol>
<li>Actualiza tu hub o altavoz antes de añadir el primer dispositivo.</li>
<li>Coloca el border router en el centro de la vivienda y añade dispositivos Thread enchufados a la corriente para ampliar la malla.</li>
<li>Añade cada dispositivo a tu ecosistema principal y compártelo después con los demás mediante la opción «vincular con otro servicio» o un código temporal.</li>
<li>Mantén el Bluetooth del móvil activado durante el emparejamiento: suele servir para la primera conexión.</li>
</ol>
<p>Para saber más sobre iluminación, lee nuestra <a href="/es/blog/eclairage-connecte-comparatif">comparativa de iluminación inteligente</a>.</p>

<h2>Nuestro veredicto</h2>
<p>En 2026, Matter y Thread cumplen su promesa principal: elegir dispositivos sin preocuparse por el ecosistema. Si empiezas desde cero con varias marcas, el <strong>Aqara Hub M3</strong> es el hub más completo. Con presupuesto ajustado e iluminación de IKEA, el <strong>DIRIGERA</strong> actualizado cubre lo esencial. Y si ya estás con Apple, Amazon o Google, tu <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> o <strong>Nest Hub</strong> suele bastar para empezar: añade un enchufe como el <strong>Eve Energy</strong> para construir la red Thread.</p>`,

    it: `<p><strong>Matter è un linguaggio comune che permette a un dispositivo smart di funzionare contemporaneamente con Apple Casa, Google Home, Alexa e SmartThings, mentre Thread è la rete wireless a basso consumo su cui comunica gran parte di questi dispositivi.</strong> Per sfruttarli nel 2026 servono un controller Matter e, per i dispositivi Thread, un «border router» Thread: spesso un altoparlante, uno schermo o un hub che hai già in casa.</p>
<p>Questa guida spiega cosa fanno davvero i due standard, a che versione sono arrivati, quali apparecchi fanno da border router in ogni ecosistema e quale hub scegliere. Si basa sulle specifiche pubblicate dalla Connectivity Standards Alliance (CSA) e dal Thread Group, sulla documentazione dei produttori, su recensioni indipendenti e sulle recensioni verificate degli acquirenti. Per confrontare gli hub disponibili, consulta anche la nostra pagina <a href="/it/energie-domotique/hubs-domotique">hub domotici</a>.</p>

<h2>Che cos’è esattamente Matter?</h2>
<p>Matter è uno standard applicativo aperto gestito dalla Connectivity Standards Alliance, di cui fanno parte tra gli altri Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) ed Eve. Definisce come un dispositivo descrive ciò che sa fare (una luce, una presa, un termostato…) e come un controller gli invia i comandi. Tre principi lo distinguono dai vecchi ecosistemi chiusi:</p>
<ul>
<li><strong>Controllo locale:</strong> i comandi viaggiano sulla rete di casa. Accendere una luce Matter dall’app non dipende da un server remoto, quindi la risposta è rapida e tutto continua a funzionare anche senza internet (l’accesso da remoto e alcuni assistenti vocali restano però legati al cloud).</li>
<li><strong>Multi-admin:</strong> lo stesso dispositivo può essere aggiunto a più ecosistemi contemporaneamente, per esempio Apple Casa per te e Google Home per un altro componente della famiglia.</li>
<li><strong>Sicurezza integrata:</strong> ogni dispositivo certificato ha un’identità verificabile e le comunicazioni sono cifrate.</li>
</ul>

<h3>Le versioni di Matter in breve</h3>
<p>Matter 1.0 è uscito a fine 2022 con illuminazione, prese, serrature, sensori e termostati. Le versioni successive hanno allargato il campo: robot aspirapolvere e grandi elettrodomestici (1.2), misurazione dei consumi di energia e apparecchi di cottura (1.3), pompe di calore, batterie di accumulo e scaldacqua (1.4). <strong>Matter 1.5</strong>, pubblicato a novembre 2025, ha aggiunto le telecamere oltre a cancelli, porte da garage e tapparelle. <strong>Matter 1.6</strong>, pubblicato a giugno 2026, introduce l’abbinamento via NFC, il «Joint Fabric» per condividere più facilmente la stessa rete tra più piattaforme e i suggerimenti per i termostati.</p>
<p>Attenzione: che una categoria esista nella specifica non significa che la tua app la supporti già. Ogni ecosistema introduce i nuovi tipi di dispositivo con i propri tempi, e le funzioni avanzate (mappe del robot, cronologia video, regolazioni fini) restano spesso nell’app del produttore.</p>

<h2>Thread, la rete che trasporta Matter</h2>
<p>Matter può funzionare su Wi-Fi, Ethernet o Thread. Thread è una rete radio a basso consumo basata su IPv6, pensata per piccoli dispositivi: sensori, lampadine, prese, valvole termostatiche e serrature.</p>
<ul>
<li><strong>Rete mesh:</strong> i dispositivi alimentati a rete (prese, lampadine) ritrasmettono i messaggi degli altri. Più sono, più la copertura si estende.</li>
<li><strong>Basso consumo:</strong> i sensori a batteria possono restare a lungo in standby, e per questo sono ideali come sensori di apertura o di temperatura.</li>
<li><strong>Il border router:</strong> è il ponte tra la rete Thread e la tua rete Wi-Fi/Ethernet. Senza di esso non si può aggiungere un dispositivo Matter su Thread. Averne più di uno aumenta l’affidabilità.</li>
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
<p>I modelli più vecchi o di fascia d’ingresso (Echo Dot classico, Nest Mini, Nest Hub di 1ª generazione) possono controllare dispositivi Matter via Wi-Fi ma non sono border router Thread. Controlla la scheda del tuo apparecchio prima di comprare prodotti Thread.</p>

<h2>Il caso IKEA DIRIGERA: cosa è cambiato</h2>
<p>L’hub DIRIGERA di IKEA è nato come hub Zigbee capace di esporre i prodotti IKEA ad altri ecosistemi tramite un bridge Matter. A luglio 2025 l’aggiornamento 2.805.6 lo ha trasformato in <strong>controller Matter</strong> (può aggiungere e automatizzare dispositivi Matter di altre marche nell’app IKEA Home smart) e ha attivato la sua radio <strong>Thread</strong> per farne un border router. La funzione controller è partita in beta e va attivata nelle impostazioni dell’app.</p>
<p>Da inizio 2026 IKEA vende anche una nuova gamma di una ventina di prodotti nativi Matter su Thread: lampadine KAJPLATS, telecomandi BILRESA, il sensore di movimento MYGGSPRAY e il sensore di temperatura e umidità TIMMERFLOTTE, tra gli altri. Possono entrare direttamente in Apple Casa, Google Home, Alexa o SmartThings tramite qualsiasi border router Thread, senza DIRIGERA. Le vecchie lampadine TRADFRI restano Zigbee e hanno bisogno di DIRIGERA per comparire in Matter.</p>

<h2>Come scegliere l’hub Matter e Thread</h2>
<ul>
<li><strong>Il tuo ecosistema principale:</strong> l’assistente vocale e l’app che usi ogni giorno contano più della scheda tecnica.</li>
<li><strong>Border router Thread integrato:</strong> indispensabile se punti su sensori e lampadine Thread.</li>
<li><strong>Anche Zigbee:</strong> utile se hai già prodotti Zigbee (Aqara, IKEA TRADFRI, Hue); alcuni hub li espongono in Matter tramite bridge.</li>
<li><strong>Thread 1.4:</strong> semplifica la convivenza di border router di marche diverse.</li>
<li><strong>Automazioni locali:</strong> verifica che vengano eseguite sull’hub e non solo nel cloud.</li>
</ul>

<h2>Gli hub e i dispositivi Matter da considerare nel 2026</h2>

<h3>1. Aqara Hub M3 – la scelta migliore in assoluto</h3>
<p>L’Hub M3 riunisce controller Matter, border router Thread, hub Zigbee, trasmettitore a infrarossi e connessione Ethernet con alimentazione PoE opzionale. Espone i sensori Zigbee di Aqara in Matter ed esegue le automazioni in locale.</p>
<p><strong>Punti di forza:</strong> il più versatile di questa selezione, compatibile con tutti i grandi ecosistemi, connessione cablata stabile. <strong>Limiti:</strong> la configurazione avanzata passa dall’app Aqara, più tecnica. <strong>Per chi:</strong> chi mescola più marche o ha già sensori Zigbee.</p>

<h3>2. IKEA DIRIGERA – il miglior rapporto qualità-prezzo</h3>
<p>Hub Zigbee e bridge Matter che, grazie all’aggiornamento, è ora anche controller Matter e border router Thread. È il punto di partenza naturale per l’illuminazione IKEA, vecchia e nuova.</p>
<p><strong>Punti di forza:</strong> prezzo accessibile, gestisce i prodotti TRADFRI esistenti e la nuova gamma Thread. <strong>Limiti:</strong> i tipi di dispositivo supportati restano limitati e le automazioni sono meno ricche di quelle Aqara. <strong>Per chi:</strong> chi sceglie IKEA per l’illuminazione di casa.</p>

<h3>3. Apple HomePod mini – per chi usa l’iPhone</h3>
<p>L’HomePod mini è insieme altoparlante con Siri, hub di Apple Casa e border router Thread: uno dei modi più semplici per iniziare con Matter nel mondo Apple.</p>
<p><strong>Punti di forza:</strong> configurazione semplicissima dall’iPhone, automazioni locali. <strong>Limiti:</strong> niente Zigbee, e l’app Casa richiede un dispositivo Apple. <strong>Per chi:</strong> famiglie che usano già l’iPhone.</p>

<h3>4. Amazon Echo Dot Max – per chi usa Alexa</h3>
<p>Uscito a fine 2025, l’Echo Dot Max integra un hub domotico Matter, Thread e Zigbee in un altoparlante compatto dal suono più pieno rispetto all’Echo Dot classico.</p>
<p><strong>Punti di forza:</strong> Thread e Zigbee senza hub aggiuntivo, ampio catalogo di dispositivi compatibili con Alexa. <strong>Limiti:</strong> le funzioni della nuova Alexa+ non sono disponibili ovunque in Europa. <strong>Per chi:</strong> chi gestisce già la casa a voce con Alexa.</p>

<h3>5. Google Nest Hub (2ª gen.) – per l’ecosistema Google</h3>
<p>Smart display con l’Assistente Google che funge da controller Matter e border router Thread per Google Home.</p>
<p><strong>Punti di forza:</strong> schermo comodo per vedere e controllare i dispositivi, integrazione con Android. <strong>Limiti:</strong> niente Zigbee, e l’hardware non è più recentissimo. <strong>Per chi:</strong> famiglie Android che vogliono uno schermo di controllo in cucina o in soggiorno.</p>

<h3>6. Eve Energy (Matter) – il dispositivo Thread di riferimento</h3>
<p>Non è un hub ma una presa smart Matter su Thread con misurazione dei consumi, che funziona con qualsiasi border router Thread e controller Matter. Estende inoltre la rete mesh Thread per gli altri dispositivi.</p>
<p><strong>Punti di forza:</strong> nessun cloud né account obbligatorio, compatibile con i quattro grandi ecosistemi. <strong>Limiti:</strong> più ingombrante di una mini presa Wi-Fi. <strong>Per chi:</strong> chi cerca un primo dispositivo Thread per verificare che tutto funzioni. Leggi anche il nostro <a href="/it/blog/box-domotique-hub-comparatif">confronto delle centraline domotiche</a>.</p>

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
<li><strong>Comprare dispositivi Thread senza border router:</strong> verifica prima che il tuo altoparlante, schermo o hub ne integri uno.</li>
<li><strong>Confondere Zigbee e Thread:</strong> una lampadina Hue o TRADFRI classica usa Zigbee e ha bisogno di un bridge per entrare in Matter.</li>
<li><strong>Buttare il codice di abbinamento:</strong> conserva il codice QR o il codice a 11 cifre di ogni dispositivo: ti servirà dopo un ripristino.</li>
<li><strong>Puntare subito tutto sulle telecamere Matter:</strong> il supporto esiste da Matter 1.5, ma modelli e app compatibili sono ancora pochi.</li>
</ul>

<h2>Installazione: le buone abitudini</h2>
<ol>
<li>Aggiorna l’hub o l’altoparlante prima di aggiungere il primo dispositivo.</li>
<li>Posiziona il border router al centro della casa e aggiungi dispositivi Thread alimentati a rete per estendere la mesh.</li>
<li>Aggiungi ogni dispositivo al tuo ecosistema principale, poi condividilo con gli altri tramite l’opzione «abbina a un altro servizio» o un codice di abbinamento temporaneo.</li>
<li>Tieni attivo il Bluetooth dello smartphone durante l’abbinamento: spesso serve per il primo collegamento.</li>
</ol>
<p>Per approfondire l’illuminazione, leggi il nostro <a href="/it/blog/eclairage-connecte-comparatif">confronto sull’illuminazione smart</a>.</p>

<h2>Il nostro verdetto</h2>
<p>Nel 2026 Matter e Thread mantengono la loro promessa principale: scegliere i dispositivi senza preoccuparsi dell’ecosistema. Se parti da zero con più marche, l’<strong>Aqara Hub M3</strong> è l’hub più completo. Con un budget ridotto e l’illuminazione IKEA, il <strong>DIRIGERA</strong> aggiornato copre l’essenziale. E se usi già Apple, Amazon o Google, spesso il tuo <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> o <strong>Nest Hub</strong> basta per cominciare: aggiungi una presa come la <strong>Eve Energy</strong> per costruire la rete Thread.</p>`,

    nl: `<p><strong>Matter is een gemeenschappelijke taal waarmee een slim apparaat tegelijk werkt met Apple Woning, Google Home, Alexa en SmartThings, en Thread is het zuinige draadloze netwerk waarover veel van die apparaten communiceren.</strong> Om er in 2026 gebruik van te maken, heb je een Matter-controller nodig en, voor Thread-apparaten, een Thread-borderrouter. Dat is vaak een speaker, scherm of hub die je al in huis hebt.</p>
<p>In deze gids lees je wat beide standaarden precies doen, welke versies er zijn, welke apparaten per ecosysteem als borderrouter werken en welke hub je kiest. We baseren ons op de specificaties van de Connectivity Standards Alliance (CSA) en de Thread Group, documentatie van fabrikanten, onafhankelijke reviews en ervaringen van geverifieerde kopers. Wil je de beschikbare hubs vergelijken, bekijk dan ook onze pagina <a href="/nl/energie-domotique/hubs-domotique">domoticahubs</a>.</p>

<h2>Wat is Matter precies?</h2>
<p>Matter is een open standaard op applicatieniveau, beheerd door de Connectivity Standards Alliance. Daarin zitten onder meer Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) en Eve. De standaard legt vast hoe een apparaat aangeeft wat het kan (een lamp, een stekker, een thermostaat…) en hoe een controller het opdrachten geeft. Drie principes onderscheiden Matter van de oude, gesloten ecosystemen:</p>
<ul>
<li><strong>Lokale bediening:</strong> opdrachten gaan via je thuisnetwerk. Zet je een Matter-lamp aan via de app, dan is daar geen externe server voor nodig. Daardoor reageert het systeem sneller en blijft het werken als het internet uitvalt (bediening op afstand en sommige spraakassistenten zijn wel afhankelijk van de cloud).</li>
<li><strong>Multi-admin:</strong> je kunt één apparaat tegelijk aan meerdere ecosystemen toevoegen, bijvoorbeeld aan Apple Woning voor jou en aan Google Home voor een ander gezinslid.</li>
<li><strong>Ingebouwde beveiliging:</strong> elk gecertificeerd apparaat heeft een controleerbare identiteit en alle communicatie is versleuteld.</li>
</ul>

<h3>De Matter-versies in het kort</h3>
<p>Matter 1.0 verscheen eind 2022, met ondersteuning voor verlichting, stekkers, sloten, sensoren en thermostaten. Latere versies voegden meer toe: robotstofzuigers en grote huishoudelijke apparaten (1.2), het meten van energieverbruik en kookapparaten (1.3), en warmtepompen, thuisbatterijen en boilers (1.4). <strong>Matter 1.5</strong>, verschenen in november 2025, bracht ondersteuning voor camera’s en voor poorten, garagedeuren en rolluiken. <strong>Matter 1.6</strong>, verschenen in juni 2026, voegt koppelen via NFC toe, “Joint Fabric” (waarmee je één netwerk makkelijker deelt tussen meerdere platforms) en suggesties voor thermostaten.</p>
<p>Let op: dat een categorie in de specificatie staat, betekent niet dat jouw app die al ondersteunt. Elk ecosysteem voegt nieuwe apparaattypen in zijn eigen tempo toe, en geavanceerde functies (de plattegrond van een robotstofzuiger, videogeschiedenis, gedetailleerde instellingen) blijven vaak in de app van de fabrikant.</p>

<h2>Thread: het netwerk waarover Matter loopt</h2>
<p>Matter werkt via wifi, ethernet of Thread. Thread is een zuinig draadloos netwerk op basis van IPv6, ontworpen voor kleine apparaten: sensoren, lampen, stekkers, radiatorknoppen en sloten.</p>
<ul>
<li><strong>Een mesh-netwerk:</strong> apparaten op netstroom (stekkers, lampen) geven berichten van andere apparaten door. Hoe meer je er hebt, hoe groter het bereik.</li>
<li><strong>Laag verbruik:</strong> sensoren op batterijen kunnen lang in slaapstand blijven. Daardoor is Thread ideaal voor deur- en raamsensoren of temperatuursensoren.</li>
<li><strong>De borderrouter:</strong> de brug tussen het Thread-netwerk en je wifi- of ethernetnetwerk. Zonder borderrouter kun je geen Matter-over-Thread-apparaat toevoegen. Met meerdere borderrouters wordt het netwerk betrouwbaarder.</li>
</ul>
<p><strong>Thread 1.4</strong> lost een echt probleem op. Vroeger konden een borderrouter van Apple en een van Google in hetzelfde huis twee aparte Thread-netwerken opzetten. Thread 1.4 legt vast hoe merken netwerkgegevens met elkaar delen. Sinds 1 januari 2026 kunnen nieuwe borderrouters alleen nog onder deze versie worden gecertificeerd, maar apparaten die al in huis staan, krijgen de update per merk in een ander tempo.</p>

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
<p>Oudere modellen en instapmodellen (de gewone Echo Dot, Nest Mini, Nest Hub van de 1e generatie) kunnen Matter-apparaten via wifi bedienen, maar werken niet als Thread-borderrouter. Controleer de specificaties van je apparaat voordat je Thread-producten koopt.</p>

<h2>IKEA DIRIGERA: wat is er veranderd?</h2>
<p>De DIRIGERA-hub van IKEA begon als Zigbee-hub die IKEA-producten via een Matter-bridge beschikbaar maakte voor andere ecosystemen. In juli 2025 maakte update 2.805.6 er een <strong>Matter-controller</strong> van: hij kan nu Matter-apparaten van andere merken toevoegen en automatiseren in de app IKEA Home smart. Ook werd de <strong>Thread</strong>-radio ingeschakeld, zodat hij als borderrouter werkt. De controllerfunctie begon als bèta en moet je zelf inschakelen in de instellingen van de app.</p>
<p>Sinds begin 2026 verkoopt IKEA ook een nieuwe lijn van zo’n twintig producten die standaard via Matter-over-Thread werken, waaronder KAJPLATS-lampen, BILRESA-afstandsbedieningen, de bewegingssensor MYGGSPRAY en de temperatuur- en vochtigheidssensor TIMMERFLOTTE. Je kunt ze via een Thread-borderrouter rechtstreeks toevoegen aan Apple Woning, Google Home, Alexa of SmartThings, zonder DIRIGERA. Oudere TRADFRI-lampen werken nog met Zigbee en hebben DIRIGERA nodig om in Matter te verschijnen.</p>

<h2>Zo kies je je Matter- en Thread-hub</h2>
<ul>
<li><strong>Je hoofdecosysteem:</strong> de spraakassistent en de app die je dagelijks gebruikt, zijn belangrijker dan de specificaties.</li>
<li><strong>Ingebouwde Thread-borderrouter:</strong> onmisbaar als je Thread-sensoren en -lampen wilt gebruiken.</li>
<li><strong>Ook Zigbee:</strong> handig als je al Zigbee-producten hebt (Aqara, IKEA TRADFRI, Hue). Sommige hubs maken die via een bridgefunctie beschikbaar in Matter.</li>
<li><strong>Thread 1.4:</strong> daarmee gebruik je makkelijker borderrouters van verschillende merken naast elkaar.</li>
<li><strong>Lokale automatiseringen:</strong> controleer of ze op de hub zelf draaien en niet alleen in de cloud.</li>
</ul>

<h2>De Matter-hubs en -apparaten die in 2026 de moeite waard zijn</h2>

<h3>1. Aqara Hub M3 – beste keuze</h3>
<p>De Hub M3 combineert een Matter-controller, Thread-borderrouter, Zigbee-hub, infraroodzender en ethernetaansluiting, eventueel met PoE-voeding. Hij maakt de Zigbee-sensoren van Aqara beschikbaar in Matter en voert automatiseringen lokaal uit.</p>
<p><strong>Sterke punten:</strong> de veelzijdigste van deze selectie, werkt met alle grote ecosystemen, stabiele bekabelde verbinding. <strong>Minpunten:</strong> voor gedetailleerde instellingen heb je de Aqara-app nodig, en die is technischer. <strong>Voor wie:</strong> wie apparaten van verschillende merken combineert of al Zigbee-sensoren heeft.</p>

<h3>2. IKEA DIRIGERA – beste prijs-kwaliteitverhouding</h3>
<p>Een Zigbee-hub en Matter-bridge die dankzij de update nu ook Matter-controller en Thread-borderrouter is. Het logische startpunt voor IKEA-verlichting, oud en nieuw.</p>
<p><strong>Sterke punten:</strong> betaalbaar, werkt met je bestaande TRADFRI-producten en met de nieuwe Thread-lijn. <strong>Minpunten:</strong> het aantal ondersteunde apparaattypen is nog beperkt en de automatiseringen zijn minder uitgebreid dan bij Aqara. <strong>Voor wie:</strong> huishoudens die hun verlichting bij IKEA kopen.</p>

<h3>3. Apple HomePod mini – voor iPhone-gebruikers</h3>
<p>De HomePod mini is een Siri-speaker, woninghub voor Apple Woning en Thread-borderrouter in één. Het is een van de eenvoudigste manieren om in de Apple-wereld met Matter te beginnen.</p>
<p><strong>Sterke punten:</strong> heel eenvoudig in te stellen met je iPhone, lokale automatiseringen. <strong>Minpunten:</strong> geen Zigbee, en voor de Woning-app heb je een Apple-apparaat nodig. <strong>Voor wie:</strong> huishoudens die al iPhones gebruiken.</p>

<h3>4. Amazon Echo Dot Max – voor Alexa-gebruikers</h3>
<p>De Echo Dot Max kwam eind 2025 uit. Het is een compacte speaker met een ingebouwde smarthomehub voor Matter, Thread en Zigbee, en met voller geluid dan de gewone Echo Dot.</p>
<p><strong>Sterke punten:</strong> Thread en Zigbee zonder extra hub, groot aanbod aan apparaten die met Alexa werken. <strong>Minpunten:</strong> de functies van de nieuwe Alexa+ zijn niet overal in Europa beschikbaar. <strong>Voor wie:</strong> wie zijn huis al met spraakopdrachten via Alexa bedient.</p>

<h3>5. Google Nest Hub (2e gen.) – voor het Google-ecosysteem</h3>
<p>Een slim scherm met de Google Assistent dat in Google Home dienstdoet als Matter-controller en Thread-borderrouter.</p>
<p><strong>Sterke punten:</strong> handig scherm om je apparaten te zien en te bedienen, goede integratie met Android. <strong>Minpunten:</strong> geen Zigbee, en de hardware is niet meer de nieuwste. <strong>Voor wie:</strong> Android-huishoudens die een bedieningsscherm in de keuken of woonkamer willen.</p>

<h3>6. Eve Energy (Matter) – het referentieapparaat voor Thread</h3>
<p>Dit is geen hub, maar een slimme stekker met energiemeting die via Matter-over-Thread werkt met elke Thread-borderrouter en Matter-controller. Hij geeft ook berichten van andere Thread-apparaten door en versterkt zo het netwerk.</p>
<p><strong>Sterke punten:</strong> geen cloud of verplicht account nodig, werkt met de vier grote ecosystemen. <strong>Minpunten:</strong> groter dan een mini-wifistekker. <strong>Voor wie:</strong> als eerste Thread-apparaat, om te controleren of alles werkt. Bekijk ook onze <a href="/nl/blog/box-domotique-hub-comparatif">vergelijking van domoticahubs</a>.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Model</th><th>Rol</th><th>Protocollen</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Matter-controller, Thread-borderrouter, bridge</td><td>Thread, Zigbee, wifi, ethernet/PoE, IR</td><td>Installaties met meerdere merken</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Matter-controller, Thread-borderrouter, bridge</td><td>Thread, Zigbee, wifi, ethernet</td><td>IKEA-verlichting</td></tr>
<tr><td>Apple HomePod mini</td><td>Woninghub voor Apple Woning, Thread-borderrouter</td><td>Thread, wifi</td><td>iPhone-huishoudens</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Matter-controller, Thread-borderrouter</td><td>Thread, Zigbee, wifi</td><td>Alexa-gebruikers</td></tr>
<tr><td>Google Nest Hub (2e gen.)</td><td>Matter-controller, Thread-borderrouter</td><td>Thread, wifi</td><td>Android-huishoudens</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Slimme stekker met energiemeting, Thread-router</td><td>Thread</td><td>Eerste Thread-apparaat</td></tr>
</tbody>
</table>

<h2>Veelgemaakte fouten</h2>
<ul>
<li><strong>Denken dat “Matter-compatibel” “alle functies” betekent:</strong> de basis loopt via Matter, maar geavanceerde instellingen blijven soms in de app van de fabrikant.</li>
<li><strong>Thread-apparaten kopen zonder borderrouter:</strong> controleer eerst of je speaker, scherm of hub er een heeft.</li>
<li><strong>Zigbee en Thread verwarren:</strong> een gewone Hue- of TRADFRI-lamp werkt met Zigbee en heeft een bridge nodig om in Matter te verschijnen.</li>
<li><strong>De koppelcode weggooien:</strong> bewaar de QR-code of de 11-cijferige code van elk apparaat. Die heb je nodig na een reset.</li>
<li><strong>Nu al volledig inzetten op Matter-camera’s:</strong> Matter ondersteunt camera’s sinds versie 1.5, maar er zijn nog maar weinig compatibele modellen en apps.</li>
</ul>

<h2>Installatie: zo pak je het aan</h2>
<ol>
<li>Update je hub of speaker voordat je het eerste apparaat toevoegt.</li>
<li>Zet de borderrouter centraal in huis en voeg Thread-apparaten op netstroom toe om het mesh-netwerk uit te breiden.</li>
<li>Voeg elk apparaat eerst toe aan je hoofdecosysteem en deel het daarna met de andere ecosystemen, via de optie om het met een andere dienst te koppelen of met een tijdelijke koppelcode.</li>
<li>Laat Bluetooth op je telefoon aanstaan tijdens het koppelen: de eerste verbinding loopt vaak via Bluetooth.</li>
</ol>
<p>Meer over verlichting lees je in onze <a href="/nl/blog/eclairage-connecte-comparatif">vergelijking van slimme verlichting</a>.</p>

<h2>Ons oordeel</h2>
<p>In 2026 maken Matter en Thread hun belangrijkste belofte waar: je kiest apparaten zonder je zorgen te maken over het ecosysteem. Begin je vanaf nul en wil je meerdere merken combineren, dan is de <strong>Aqara Hub M3</strong> de meest complete hub. Met een krap budget en IKEA-verlichting doet de bijgewerkte <strong>DIRIGERA</strong> wat nodig is. En zit je al bij Apple, Amazon of Google, dan is je <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> of <strong>Nest Hub</strong> vaak genoeg om te beginnen. Voeg een slimme stekker zoals de <strong>Eve Energy</strong> toe om je Thread-netwerk op te bouwen.</p>`,
    pl: `<p><strong>Matter to wspólny język, dzięki któremu inteligentne urządzenie może działać jednocześnie z Apple Home, Google Home, Alexą i SmartThings, a Thread to energooszczędna sieć bezprzewodowa, przez którą komunikuje się duża część tych urządzeń.</strong> Żeby korzystać z obu standardów w 2026 roku, potrzebujesz kontrolera Matter, a w przypadku urządzeń Thread także routera brzegowego Thread (ang. border router). Często jest nim głośnik, ekran lub hub, który już masz w domu.</p>
<p>Z tego poradnika dowiesz się, do czego naprawdę służą oba standardy, jakie są ich aktualne wersje, które urządzenia pełnią funkcję routera brzegowego w poszczególnych ekosystemach i jaki hub wybrać. Poradnik opiera się na specyfikacjach publikowanych przez Connectivity Standards Alliance (CSA) i Thread Group, dokumentacji producentów, niezależnych recenzjach oraz opiniach zweryfikowanych kupujących. Dostępne centralki i huby porównasz też na naszej stronie <a href="/pl/energie-domotique/hubs-domotique">huby do inteligentnego domu</a>.</p>

<h2>Czym dokładnie jest Matter?</h2>
<p>Matter to otwarty standard warstwy aplikacji, rozwijany przez Connectivity Standards Alliance – organizację, do której należą m.in. Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) i Eve. Standard określa, jak urządzenie informuje, co potrafi (lampa, gniazdko, termostat…), i jak kontroler wydaje mu polecenia. Od dawnych, zamkniętych ekosystemów odróżniają go trzy cechy:</p>
<ul>
<li><strong>Sterowanie lokalne:</strong> polecenia są przesyłane w obrębie Twojej sieci domowej. Włączenie lampy Matter z aplikacji nie wymaga połączenia z zewnętrznym serwerem, dlatego system reaguje szybciej i działa nawet podczas awarii internetu (dostęp zdalny i niektórzy asystenci głosowi nadal potrzebują chmury).</li>
<li><strong>Multi-admin:</strong> jedno urządzenie można dodać jednocześnie do kilku ekosystemów, na przykład do Apple Home dla Ciebie i do Google Home dla innego domownika.</li>
<li><strong>Wbudowane zabezpieczenia:</strong> każde certyfikowane urządzenie ma tożsamość, którą można zweryfikować, a cała komunikacja jest szyfrowana.</li>
</ul>

<h3>Kolejne wersje Matter w skrócie</h3>
<p>Matter 1.0 zadebiutował pod koniec 2022 roku i obejmował oświetlenie, gniazdka, zamki, czujniki oraz termostaty. Kolejne wersje poszerzały listę o roboty sprzątające i duże AGD (1.2), pomiar zużycia energii i urządzenia do gotowania (1.3) oraz pompy ciepła, domowe magazyny energii i podgrzewacze wody (1.4). <strong>Matter 1.5</strong>, opublikowany w listopadzie 2025 roku, dodał kamery, a także bramy wjazdowe, bramy garażowe i rolety. <strong>Matter 1.6</strong>, opublikowany w czerwcu 2026 roku, wprowadza parowanie przez NFC, funkcję „Joint Fabric”, która ułatwia współdzielenie jednej sieci przez kilka platform, oraz sugestie dla termostatów.</p>
<p>Pamiętaj jednak, że obecność danej kategorii w specyfikacji nie oznacza, że Twoja aplikacja już ją obsługuje. Każdy ekosystem wprowadza nowe typy urządzeń we własnym tempie, a funkcje zaawansowane (mapa sprzątania robota, historia nagrań, szczegółowe ustawienia) często pozostają dostępne tylko w aplikacji producenta.</p>

<h2>Thread – sieć, w której działa Matter</h2>
<p>Matter może działać przez Wi-Fi, Ethernet albo Thread. Thread to energooszczędna sieć radiowa oparta na IPv6, zaprojektowana z myślą o małych urządzeniach: czujnikach, żarówkach, gniazdkach, głowicach termostatycznych i zamkach.</p>
<ul>
<li><strong>Sieć typu mesh:</strong> urządzenia stale zasilane z sieci elektrycznej (gniazdka, żarówki) przekazują dalej komunikaty pozostałych. Im więcej takich urządzeń, tym większy zasięg.</li>
<li><strong>Niskie zużycie energii:</strong> czujniki na baterie mogą przez długi czas pozostawać w trybie uśpienia, dlatego Thread dobrze sprawdza się w czujnikach otwarcia czy temperatury.</li>
<li><strong>Router brzegowy:</strong> łączy sieć Thread z Twoją siecią Wi-Fi lub Ethernet. Bez niego nie dodasz urządzenia Matter-over-Thread. Kilka routerów brzegowych w domu zwiększa niezawodność.</li>
</ul>
<p><strong>Thread 1.4</strong> rozwiązuje realny problem: wcześniej router brzegowy Apple i router brzegowy Google mogły utworzyć w jednym domu dwie osobne sieci Thread. Wersja 1.4 ujednolica sposób, w jaki urządzenia różnych marek współdzielą dane dostępowe do sieci. Od 1 stycznia 2026 roku tylko w tej wersji można certyfikować nowe routery brzegowe, ale urządzenia, które już działają w domach, dostają aktualizację w różnym tempie, zależnie od marki.</p>

<h2>Które urządzenia pełnią rolę routera brzegowego Thread?</h2>
<table>
<thead>
<tr><th>Ekosystem</th><th>Routery brzegowe Thread (i kontrolery Matter)</th></tr>
</thead>
<tbody>
<tr><td>Apple Home</td><td>HomePod mini, HomePod (2. generacji), Apple TV 4K (2. generacji i 3. generacji Wi-Fi + Ethernet; wersja 3. generacji tylko z Wi-Fi nie ma Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2. generacji), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4. generacji), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3. generacji) i Echo Show 11, Echo Hub oraz kilka routerów eero</td></tr>
<tr><td>IKEA</td><td>Hub DIRIGERA, od aktualizacji oprogramowania z lipca 2025 roku</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Starsze lub tańsze modele (klasyczny Echo Dot, Nest Mini, Nest Hub 1. generacji) mogą sterować urządzeniami Matter przez Wi-Fi, ale nie działają jako router brzegowy Thread. Zanim kupisz produkty Thread, sprawdź w specyfikacji, czy Twoje urządzenie pełni tę funkcję.</p>

<h2>IKEA DIRIGERA: co się zmieniło</h2>
<p>Hub IKEA DIRIGERA początkowo działał w sieci Zigbee i przez most Matter udostępniał produkty IKEA innym ekosystemom. W lipcu 2025 roku aktualizacja 2.805.6 zmieniła go w <strong>kontroler Matter</strong> (w aplikacji IKEA Home smart można dodawać urządzenia Matter innych marek i tworzyć dla nich automatyzacje) i uruchomiła wbudowany moduł radiowy <strong>Thread</strong>, dzięki czemu hub działa też jako router brzegowy. Funkcja kontrolera wystartowała jako wersja beta i trzeba ją włączyć w ustawieniach aplikacji.</p>
<p>Od początku 2026 roku IKEA sprzedaje też nową serię około dwudziestu produktów, które natywnie działają w standardzie Matter-over-Thread. Należą do niej m.in. żarówki KAJPLATS, piloty BILRESA, czujnik ruchu MYGGSPRAY oraz czujnik temperatury i wilgotności TIMMERFLOTTE. Można je dodać do Apple Home, Google Home, Alexy lub SmartThings bezpośrednio przez router brzegowy Thread, bez pośrednictwa DIRIGERA. Starsze żarówki TRADFRI nadal działają w Zigbee i bez DIRIGERA nie będą widoczne w Matter.</p>

<h2>Kryteria wyboru huba Matter i Thread</h2>
<ul>
<li><strong>Twój główny ekosystem:</strong> asystent głosowy i aplikacja, z których korzystasz na co dzień, liczą się bardziej niż specyfikacja.</li>
<li><strong>Wbudowany router brzegowy Thread:</strong> niezbędny, jeśli planujesz kupić czujniki i żarówki Thread.</li>
<li><strong>Dodatkowa obsługa Zigbee:</strong> przydaje się, jeśli masz już produkty Zigbee (Aqara, IKEA TRADFRI, Hue); niektóre huby dzięki funkcji mostu udostępniają je w Matter.</li>
<li><strong>Thread w wersji 1.4:</strong> ułatwia współpracę routerów brzegowych różnych marek.</li>
<li><strong>Automatyzacje lokalne:</strong> sprawdź, czy są wykonywane na hubie, a nie tylko w chmurze.</li>
</ul>

<h2>Huby i urządzenia Matter warte uwagi w 2026 roku</h2>

<h3>1. Aqara Hub M3 – najlepszy wybór dla większości</h3>
<p>Hub M3 to jednocześnie kontroler Matter, router brzegowy Thread, hub Zigbee i nadajnik podczerwieni, a do tego ma port Ethernet z opcjonalnym zasilaniem PoE. Udostępnia czujniki Zigbee marki Aqara w Matter i wykonuje automatyzacje lokalnie.</p>
<p><strong>Mocne strony:</strong> najbardziej wszechstronny w zestawieniu, współpracuje ze wszystkimi dużymi ekosystemami, stabilne połączenie przewodowe. <strong>Ograniczenia:</strong> szczegółowa konfiguracja wymaga bardziej technicznej aplikacji Aqara. <strong>Dla kogo:</strong> osoby, które łączą sprzęt kilku marek lub mają już czujniki Zigbee.</p>

<h3>2. IKEA DIRIGERA – najlepszy stosunek jakości do ceny</h3>
<p>Hub Zigbee i most Matter, który po aktualizacji pełni też funkcję kontrolera Matter i routera brzegowego Thread. To naturalny punkt wyjścia dla oświetlenia IKEA – zarówno starszego, jak i nowego.</p>
<p><strong>Mocne strony:</strong> przystępna cena, obsługuje zarówno dotychczasowe produkty TRADFRI, jak i nową serię Thread. <strong>Ograniczenia:</strong> lista obsługiwanych typów urządzeń jest wciąż krótka, a automatyzacje są mniej rozbudowane niż w hubie Aqara. <strong>Dla kogo:</strong> osoby, które kupują oświetlenie w IKEA.</p>

<h3>3. Apple HomePod mini – dla użytkowników iPhone'a</h3>
<p>HomePod mini to jednocześnie głośnik z Siri, centrum akcesoriów domowych Apple Home i router brzegowy Thread. To jeden z najprostszych sposobów, by zacząć korzystać z Matter w ekosystemie Apple.</p>
<p><strong>Mocne strony:</strong> bardzo prosta konfiguracja z poziomu iPhone'a, lokalne automatyzacje. <strong>Ograniczenia:</strong> brak Zigbee, a aplikacja Dom działa tylko na urządzeniach Apple. <strong>Dla kogo:</strong> domy, w których używa się iPhone'ów.</p>

<h3>4. Amazon Echo Dot Max – dla użytkowników Alexy</h3>
<p>Echo Dot Max, który trafił do sprzedaży pod koniec 2025 roku, ma w kompaktowej obudowie wbudowany hub smart home z obsługą Matter, Thread i Zigbee, a przy tym gra pełniejszym dźwiękiem niż klasyczny Echo Dot.</p>
<p><strong>Mocne strony:</strong> Thread i Zigbee bez dodatkowego huba, szeroki wybór urządzeń zgodnych z Alexą. <strong>Ograniczenia:</strong> funkcje nowej usługi Alexa+ nie są dostępne we wszystkich krajach Europy. <strong>Dla kogo:</strong> osoby, które już sterują domem głosem za pomocą Alexy.</p>

<h3>5. Google Nest Hub (2. generacji) – dla ekosystemu Google</h3>
<p>Ten inteligentny ekran z Asystentem Google pełni w Google Home funkcję kontrolera Matter i routera brzegowego Thread.</p>
<p><strong>Mocne strony:</strong> wygodny ekran do podglądu urządzeń, integracja z Androidem. <strong>Ograniczenia:</strong> brak Zigbee, a sprzęt ma już swoje lata. <strong>Dla kogo:</strong> użytkownicy Androida, którzy chcą mieć ekran sterowania w kuchni lub salonie.</p>

<h3>6. Eve Energy (Matter) – polecane urządzenie Thread</h3>
<p>To nie hub, lecz inteligentne gniazdko Matter-over-Thread z pomiarem zużycia energii, które współpracuje z dowolnym routerem brzegowym Thread i dowolnym kontrolerem Matter. Działa też jako przekaźnik i wzmacnia sieć Thread dla innych urządzeń.</p>
<p><strong>Mocne strony:</strong> nie wymaga chmury ani zakładania konta, współpracuje z czterema największymi ekosystemami. <strong>Ograniczenia:</strong> zajmuje więcej miejsca niż mini gniazdko Wi-Fi. <strong>Dla kogo:</strong> każdy, kto szuka pierwszego urządzenia Thread, by sprawdzić, czy wszystko działa. Zobacz też nasze <a href="/pl/blog/box-domotique-hub-comparatif">porównanie hubów do inteligentnego domu</a>.</p>

<h2>Tabela porównawcza</h2>
<table>
<thead>
<tr><th>Model</th><th>Rola</th><th>Protokoły</th><th>Zastosowanie</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Kontroler Matter, router brzegowy Thread, most</td><td>Thread, Zigbee, Wi-Fi, Ethernet/PoE, IR</td><td>Sprzęt wielu marek</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Kontroler Matter, router brzegowy Thread, most</td><td>Thread, Zigbee, Wi-Fi, Ethernet</td><td>Oświetlenie IKEA</td></tr>
<tr><td>Apple HomePod mini</td><td>Centrum akcesoriów Apple Home, router brzegowy Thread</td><td>Thread, Wi-Fi</td><td>Domy z iPhone'ami</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Kontroler Matter, router brzegowy Thread</td><td>Thread, Zigbee, Wi-Fi</td><td>Użytkownicy Alexy</td></tr>
<tr><td>Google Nest Hub (2. gen.)</td><td>Kontroler Matter, router brzegowy Thread</td><td>Thread, Wi-Fi</td><td>Domy z Androidem</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Gniazdko z pomiarem energii, router Thread</td><td>Thread</td><td>Pierwsze urządzenie Thread</td></tr>
</tbody>
</table>

<h2>Błędy, których warto unikać</h2>
<ul>
<li><strong>Zakładanie, że „zgodny z Matter” oznacza „wszystkie funkcje”:</strong> podstawowe funkcje działają przez Matter, ale zaawansowane ustawienia bywają dostępne tylko w aplikacji producenta.</li>
<li><strong>Kupowanie urządzeń Thread bez routera brzegowego:</strong> najpierw sprawdź, czy Twój głośnik, ekran lub hub ma taki router.</li>
<li><strong>Mylenie Zigbee z Thread:</strong> klasyczna żarówka Hue lub TRADFRI działa w Zigbee i do Matter trafia przez most.</li>
<li><strong>Wyrzucanie kodu parowania:</strong> zachowaj kod QR lub 11-cyfrowy kod każdego urządzenia – przyda się, gdy będziesz je resetować.</li>
<li><strong>Stawianie od razu na kamery Matter:</strong> standard obsługuje je od wersji 1.5, ale zgodnych modeli i aplikacji jest wciąż niewiele.</li>
</ul>

<h2>Instalacja: o czym pamiętać</h2>
<ol>
<li>Zanim dodasz pierwsze urządzenie, zaktualizuj hub lub głośnik.</li>
<li>Ustaw router brzegowy w centralnym miejscu mieszkania, a żeby zwiększyć zasięg sieci mesh, dodaj urządzenia Thread zasilane z gniazdka.</li>
<li>Każde urządzenie dodaj najpierw do swojego głównego ekosystemu, a potem udostępnij je pozostałym za pomocą opcji „sparuj z inną usługą” lub tymczasowego kodu parowania.</li>
<li>Podczas parowania miej włączony Bluetooth w smartfonie – często to przez niego nawiązywane jest pierwsze połączenie.</li>
</ol>
<p>Więcej o oświetleniu przeczytasz w naszym <a href="/pl/blog/eclairage-connecte-comparatif">porównaniu inteligentnego oświetlenia</a>.</p>

<h2>Nasz werdykt</h2>
<p>W 2026 roku Matter i Thread spełniają swoją najważniejszą obietnicę: urządzenia wybierasz, nie martwiąc się o ekosystem. Jeśli zaczynasz od zera i łączysz sprzęt kilku marek, najbardziej kompletnym hubem jest <strong>Aqara Hub M3</strong>. Przy skromniejszym budżecie i oświetleniu z IKEA większość potrzeb pokryje zaktualizowany hub <strong>DIRIGERA</strong>. A jeśli korzystasz już z ekosystemu Apple, Amazon lub Google, na start często wystarczy <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> lub <strong>Nest Hub</strong>, który już masz. Sieć Thread zbudujesz, dodając gniazdko, na przykład <strong>Eve Energy</strong>.</p>`,
    sv: `<p><strong>Matter är ett gemensamt språk som gör att en smart enhet fungerar med Apple Home, Google Home, Alexa och SmartThings på samma gång, och Thread är det energisnåla trådlösa nätverk som många av de här enheterna använder för att kommunicera.</strong> För att komma igång 2026 behöver du en Matter-kontroller och, för Thread-enheter, en Thread Border Router (gränsrouter för Thread): ofta en högtalare, en skärm eller en hubb som du redan har.</p>
<p>Den här guiden förklarar vad de två standarderna faktiskt gör, var versionerna står i dag, vilka enheter som fungerar som gränsrouter i varje ekosystem och vilken hubb du ska välja. Den bygger på specifikationer från Connectivity Standards Alliance (CSA) och Thread Group, tillverkarnas dokumentation, oberoende utvärderingar och verifierade köparomdömen. Vill du jämföra hubbarna som finns att köpa hittar du dem på vår sida om <a href="/sv/energie-domotique/hubs-domotique">smarthemshubbar</a>.</p>

<h2>Vad är Matter egentligen?</h2>
<p>Matter är en öppen applikationsstandard som drivs av Connectivity Standards Alliance, där bland andra Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) och Eve är medlemmar. Standarden bestämmer hur en enhet beskriver vad den kan göra (en lampa, en plugg, en termostat …) och hur en kontroller skickar kommandon till den. Tre principer skiljer Matter från de gamla slutna ekosystemen:</p>
<ul>
<li><strong>Lokal styrning:</strong> kommandona går via ditt hemnätverk. Att tända en Matter-lampa från appen är inte beroende av en server någon annanstans, så systemet reagerar snabbt och fortsätter att fungera när internet ligger nere (fjärråtkomst och vissa röstassistenter är fortfarande beroende av molnet).</li>
<li><strong>Multi-admin:</strong> samma enhet kan läggas till i flera ekosystem samtidigt, till exempel i Apple Home för dig och i Google Home för någon annan i hushållet.</li>
<li><strong>Inbyggd säkerhet:</strong> varje certifierad enhet har en identitet som går att verifiera, och all trafik är krypterad.</li>
</ul>

<h3>Matters versioner i korthet</h3>
<p>Matter 1.0 kom i slutet av 2022 med belysning, pluggar, lås, sensorer och termostater. Senare versioner har breddat användningsområdet: robotdammsugare och stora vitvaror (1.2), energirapportering och matlagningsapparater (1.3), värmepumpar, hembatterier och varmvattenberedare (1.4). <strong>Matter 1.5</strong>, som publicerades i november 2025, lade till kameror samt grindar, garageportar, rullgardiner och rulljalusier. <strong>Matter 1.6</strong>, som publicerades i juni 2026, ger parkoppling via NFC, ”Joint Fabric” som gör det enklare att dela ett och samma nätverk mellan flera plattformar, samt förslag för termostater.</p>
<p>Tänk på att även om en kategori finns i specifikationen betyder det inte att din app redan stöder den. Varje ekosystem inför nya enhetstyper i sin egen takt, och avancerade funktioner (kartor för robotdammsugare, videohistorik, detaljerade inställningar) ligger ofta kvar i tillverkarens app.</p>

<h2>Thread, nätverket som bär Matter</h2>
<p>Matter kan köras över wifi, Ethernet eller Thread. Thread är ett energisnålt radionätverk baserat på IPv6 och gjort för små enheter: sensorer, lampor, pluggar, elementtermostater och lås.</p>
<ul>
<li><strong>Ett meshnätverk:</strong> enheter som sitter i ett vägguttag eller en lampsockel (pluggar, lampor) skickar vidare meddelanden åt de andra. Ju fler du har, desto bättre täckning.</li>
<li><strong>Låg energiförbrukning:</strong> batteridrivna sensorer kan vila länge, vilket passar dörr- och temperatursensorer.</li>
<li><strong>Gränsroutern:</strong> den är bryggan mellan Thread-nätverket och ditt wifi- eller Ethernet-nätverk. Utan en sådan går det inte att lägga till en enhet med Matter via Thread. Har du flera gränsroutrar blir nätet stabilare.</li>
</ul>
<p><strong>Thread 1.4</strong> löser ett verkligt problem: tidigare kunde en gränsrouter från Apple och en från Google skapa två separata Thread-nätverk i samma hem. Thread 1.4 standardiserar hur nätverksuppgifterna delas mellan olika märken. Sedan den 1 januari 2026 är det den enda version som nya gränsroutrar kan certifieras för, men enheter som redan finns i hemmen får uppdateringen i olika takt beroende på märke.</p>

<h2>Vilka enheter är gränsroutrar för Thread?</h2>
<table>
<thead>
<tr><th>Ekosystem</th><th>Gränsroutrar för Thread (och Matter-kontroller)</th></tr>
</thead>
<tbody>
<tr><td>Apple Home</td><td>HomePod mini, HomePod (2:a generationen), Apple TV 4K (2:a generationen och 3:e generationen med wifi + Ethernet; 3:e generationen med enbart wifi saknar Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2:a generationen), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4:e generationen), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3:e generationen) och Echo Show 11, Echo Hub samt flera eero-routrar</td></tr>
<tr><td>IKEA</td><td>DIRIGERA-hubben, sedan programuppdateringen i juli 2025</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Äldre modeller och instegsmodeller (den vanliga Echo Dot, Nest Mini, första generationens Nest Hub) kan styra Matter-enheter via wifi men fungerar inte som gränsrouter för Thread. Kontrollera specifikationerna för din enhet innan du köper Thread-produkter.</p>

<h2>IKEA DIRIGERA: det här har ändrats</h2>
<p>IKEA:s hubb DIRIGERA började som en Zigbee-hubb som kunde göra IKEA:s produkter tillgängliga i andra ekosystem via en Matter-brygga. I juli 2025 gjorde uppdateringen 2.805.6 den till en <strong>Matter-kontroller</strong> (den kan lägga till och automatisera andra märkens Matter-enheter i appen IKEA Home smart) och aktiverade <strong>Thread</strong>-radion så att den blev en gränsrouter. Kontrollerfunktionen lanserades som beta och måste aktiveras i appens inställningar.</p>
<p>Sedan början av 2026 säljer IKEA också en ny serie med ett tjugotal produkter som har inbyggt stöd för Matter via Thread, bland annat KAJPLATS-lampor, BILRESA-fjärrkontroller, rörelsesensorn MYGGSPRAY och temperatur- och fuktsensorn TIMMERFLOTTE. De kan anslutas direkt till Apple Home, Google Home, Alexa eller SmartThings via valfri gränsrouter för Thread, utan DIRIGERA. Äldre TRÅDFRI-lampor använder fortfarande Zigbee och behöver DIRIGERA för att synas i Matter.</p>

<h2>Så väljer du hubb för Matter och Thread</h2>
<ul>
<li><strong>Ditt huvudsakliga ekosystem:</strong> röstassistenten och appen du använder varje dag betyder mer än produktbladet.</li>
<li><strong>Inbyggd gränsrouter för Thread:</strong> ett måste om du tänker använda sensorer och lampor med Thread.</li>
<li><strong>Stöd även för Zigbee:</strong> praktiskt om du redan har Zigbee-produkter (Aqara, IKEA TRÅDFRI, Hue); vissa hubbar gör dem tillgängliga i Matter via en bryggfunktion.</li>
<li><strong>Thread 1.4:</strong> gör det lättare för gränsroutrar från olika märken att fungera ihop.</li>
<li><strong>Lokala automationer:</strong> kontrollera att de körs på hubben och inte bara i molnet.</li>
</ul>

<h2>Hubbarna och Matter-enheterna värda att känna till 2026</h2>

<h3>1. Aqara Hub M3: bäst totalt</h3>
<p>Hub M3 kombinerar Matter-kontroller, gränsrouter för Thread, Zigbee-hubb, IR-sändare och Ethernet med möjlighet till PoE-matning. Den gör Aqaras Zigbee-sensorer tillgängliga i Matter och kör automationerna lokalt.</p>
<p><strong>Styrkor:</strong> den mest mångsidiga i urvalet, fungerar med alla stora ekosystem, stabil trådbunden anslutning. <strong>Svagheter:</strong> detaljinställningarna görs i Aqara-appen, som är mer teknisk. <strong>Passar för:</strong> hem som blandar flera märken eller redan har Zigbee-sensorer.</p>

<h3>2. IKEA DIRIGERA: mest prisvärd</h3>
<p>En Zigbee-hubb och Matter-brygga som tack vare uppdateringen nu också är Matter-kontroller och gränsrouter för Thread. Det är den självklara startpunkten för IKEA:s belysning, både den gamla och den nya.</p>
<p><strong>Styrkor:</strong> överkomligt pris, hanterar befintliga TRÅDFRI-produkter och den nya Thread-serien. <strong>Svagheter:</strong> antalet enhetstyper som stöds är fortfarande begränsat, och automationerna är enklare än hos Aqara. <strong>Passar för:</strong> hushåll som bygger upp belysningen kring IKEA.</p>

<h3>3. Apple HomePod mini: för dig med iPhone</h3>
<p>HomePod mini är på en gång Siri-högtalare, hemcentral för Apple Home och gränsrouter för Thread. Det är ett av de enklaste sätten att komma igång med Matter i Apples värld.</p>
<p><strong>Styrkor:</strong> mycket enkel installation från iPhone, lokala automationer. <strong>Svagheter:</strong> ingen Zigbee, och appen Hem kräver en Apple-enhet. <strong>Passar för:</strong> hushåll som redan använder iPhone.</p>

<h3>4. Amazon Echo Dot Max: för dig som använder Alexa</h3>
<p>Echo Dot Max kom i slutet av 2025 och rymmer en smarthemshubb för Matter, Thread och Zigbee i en kompakt högtalare med fylligare ljud än den vanliga Echo Dot.</p>
<p><strong>Styrkor:</strong> Thread och Zigbee utan extra hubb, ett stort utbud av enheter som fungerar med Alexa. <strong>Svagheter:</strong> de nya Alexa+-funktionerna finns inte överallt i Europa. <strong>Passar för:</strong> dig som redan styr hemmet med rösten via Alexa.</p>

<h3>5. Google Nest Hub (2:a gen.): för Googles ekosystem</h3>
<p>En smart skärm med Google Assistant som fungerar som Matter-kontroller och gränsrouter för Thread i Google Home.</p>
<p><strong>Styrkor:</strong> praktisk skärm för att se och styra enheterna, integration med Android. <strong>Svagheter:</strong> ingen Zigbee, och hårdvaran är inte längre ny. <strong>Passar för:</strong> Android-hushåll som vill ha en kontrollskärm i köket eller vardagsrummet.</p>

<h3>6. Eve Energy (Matter): Thread-enheten att börja med</h3>
<p>Ingen hubb, utan en smart plugg med Matter via Thread och energimätning, som fungerar med alla gränsroutrar för Thread och alla Matter-kontroller. Den förstärker också Thread-nätet för andra enheter.</p>
<p><strong>Styrkor:</strong> varken moln eller obligatoriskt konto, fungerar med alla fyra stora ekosystem. <strong>Svagheter:</strong> större än en liten wifi-plugg. <strong>Passar för:</strong> en första Thread-enhet för att kontrollera att allt fungerar. Se även vår <a href="/sv/blog/box-domotique-hub-comparatif">jämförelse av smarthemshubbar</a>.</p>

<h2>Jämförelsetabell</h2>
<table>
<thead>
<tr><th>Modell</th><th>Roll</th><th>Protokoll</th><th>Bäst för</th></tr>
</thead>
<tbody>
<tr><td>Aqara Hub M3</td><td>Matter-kontroller, gränsrouter för Thread, brygga</td><td>Thread, Zigbee, wifi, Ethernet/PoE, IR</td><td>Flera märken i samma hem</td></tr>
<tr><td>IKEA DIRIGERA</td><td>Matter-kontroller, gränsrouter för Thread, brygga</td><td>Thread, Zigbee, wifi, Ethernet</td><td>IKEA-belysning</td></tr>
<tr><td>Apple HomePod mini</td><td>Hemcentral för Apple Home, gränsrouter för Thread</td><td>Thread, wifi</td><td>Hushåll med iPhone</td></tr>
<tr><td>Amazon Echo Dot Max</td><td>Matter-kontroller, gränsrouter för Thread</td><td>Thread, Zigbee, wifi</td><td>Alexa-användare</td></tr>
<tr><td>Google Nest Hub (2:a gen.)</td><td>Matter-kontroller, gränsrouter för Thread</td><td>Thread, wifi</td><td>Android-hushåll</td></tr>
<tr><td>Eve Energy (Matter)</td><td>Plugg med energimätning, Thread-router</td><td>Thread</td><td>Första Thread-enheten</td></tr>
</tbody>
</table>

<h2>Misstag att undvika</h2>
<ul>
<li><strong>Att tro att ”fungerar med Matter” betyder ”alla funktioner”:</strong> det viktigaste går via Matter, men avancerade inställningar finns ibland bara i tillverkarens app.</li>
<li><strong>Att köpa Thread-enheter utan gränsrouter:</strong> kontrollera först att din högtalare, skärm eller hubb har en.</li>
<li><strong>Att blanda ihop Zigbee och Thread:</strong> en vanlig Hue- eller TRÅDFRI-lampa använder Zigbee och behöver en brygga för att komma in i Matter.</li>
<li><strong>Att slänga parkopplingskoden:</strong> spara QR-koden eller den 11-siffriga koden för varje enhet; du behöver den efter en återställning.</li>
<li><strong>Att satsa allt på Matter-kameror direkt:</strong> stödet finns sedan Matter 1.5, men det finns fortfarande få kompatibla modeller och appar.</li>
</ul>

<h2>Installation: så gör du rätt</h2>
<ol>
<li>Uppdatera hubben eller högtalaren innan du lägger till den första enheten.</li>
<li>Placera gränsroutern centralt i bostaden och lägg till nätdrivna Thread-enheter för att bygga ut nätet.</li>
<li>Lägg till varje enhet i ditt huvudsakliga ekosystem och dela den sedan med de andra via alternativet ”parkoppla en annan tjänst” eller en tillfällig parkopplingskod.</li>
<li>Ha Bluetooth påslaget i mobilen under parkopplingen: det används ofta för den första kontakten med enheten.</li>
</ol>
<p>Vill du veta mer om belysning kan du läsa vår <a href="/sv/blog/eclairage-connecte-comparatif">jämförelse av smart belysning</a>.</p>

<h2>Vårt omdöme</h2>
<p>2026 håller Matter och Thread sitt viktigaste löfte: du kan välja enheter utan att oroa dig för ekosystemet. Börjar du från noll med flera märken är <strong>Aqara Hub M3</strong> den mest kompletta hubben. Med en snäv budget och belysning från IKEA klarar den uppdaterade <strong>DIRIGERA</strong> det viktigaste. Och använder du redan Apple, Amazon eller Google räcker din <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> eller <strong>Nest Hub</strong> ofta för att komma igång: lägg till en plugg som <strong>Eve Energy</strong> för att bygga upp ditt Thread-nätverk.</p>`,
    us: `<p><strong>Matter is a common language that lets a smart device work with Apple Home, Google Home, Alexa and SmartThings at the same time, and Thread is the low-power wireless network many of those devices use to talk to each other.</strong> To use them in 2026, you need a Matter controller and, for Thread devices, a Thread border router: often a smart speaker, smart display or hub you already own.</p>
<p>This guide explains what the two standards actually do, where each version stands, which devices act as border routers in each ecosystem and which hub to pick. It’s based on specifications published by the Connectivity Standards Alliance (CSA) and the Thread Group, manufacturer documentation, independent reviews and verified owner feedback. To compare the hubs available, see our <a href="/us/energie-domotique/hubs-domotique">smart home hubs</a> page.</p>

<h2>What exactly is Matter?</h2>
<p>Matter is an open application standard managed by the Connectivity Standards Alliance, whose members include Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) and Eve. It defines how a device describes what it can do (a light, a plug, a thermostat…) and how a controller sends it commands. Three principles set it apart from the old walled-garden ecosystems:</p>
<ul>
<li><strong>Local control:</strong> commands travel over your home network. Turning on a Matter light from the app doesn’t depend on a remote server, so the system responds quickly and keeps working during an internet outage (remote access and some voice assistants still rely on the cloud).</li>
<li><strong>Multi-admin:</strong> one device can be added to several ecosystems at once, for example Apple Home for you and Google Home for someone else in your household.</li>
<li><strong>Built-in security:</strong> every certified device has a verifiable identity, and traffic is encrypted.</li>
</ul>

<h3>Matter versions at a glance</h3>
<p>Matter 1.0 arrived in late 2022 with support for lighting, plugs, locks, sensors and thermostats. Later versions broadened the scope: robot vacuums and major appliances (1.2), energy reporting and cooking appliances (1.3), heat pumps, home batteries and water heaters (1.4). <strong>Matter 1.5</strong>, published in November 2025, added cameras, along with gates, garage doors and window coverings. <strong>Matter 1.6</strong>, published in June 2026, brings NFC setup, “Joint Fabric” (which makes it easier to share one network across several platforms) and thermostat suggestions.</p>
<p>Keep in mind that a category existing in the spec doesn’t mean your app supports it yet. Each ecosystem rolls out new device types on its own schedule, and advanced features (vacuum maps, video history, detailed settings) often stay in the manufacturer’s app.</p>

<h2>Thread, the network that carries Matter</h2>
<p>Matter can run over Wi-Fi, Ethernet or Thread. Thread is a low-power, IPv6-based wireless network designed for small devices: sensors, bulbs, plugs, smart radiator valves and locks.</p>
<ul>
<li><strong>A mesh network:</strong> devices on constant power (plugs, bulbs) relay messages for the others. The more of them you have, the wider the coverage.</li>
<li><strong>Low power draw:</strong> battery-powered sensors can sleep for long stretches, which makes Thread a good fit for door/window and temperature sensors.</li>
<li><strong>The border router:</strong> this is the bridge between the Thread network and your Wi-Fi/Ethernet network. Without one, you can’t add a Matter-over-Thread device. Having more than one border router improves reliability.</li>
</ul>
<p><strong>Thread 1.4</strong> fixes a real problem: before it, an Apple border router and a Google border router could create two separate Thread networks in the same home. Thread 1.4 standardizes how network credentials are shared across brands. Since January 1, 2026, it has been the only version under which new border routers can be certified, but devices already in people’s homes are getting the update at different speeds depending on the brand.</p>

<h2>Which devices are Thread border routers?</h2>
<table>
<thead>
<tr><th>Ecosystem</th><th>Thread border routers (and Matter controllers)</th></tr>
</thead>
<tbody>
<tr><td>Apple Home</td><td>HomePod mini, HomePod (2nd generation), Apple TV 4K (2nd generation, and 3rd generation Wi-Fi + Ethernet; the Wi-Fi-only 3rd-generation model has no Thread)</td></tr>
<tr><td>Google Home</td><td>Nest Hub (2nd generation), Nest Hub Max, Nest Wifi Pro, Google TV Streamer</td></tr>
<tr><td>Amazon Alexa</td><td>Echo (4th generation), Echo Dot Max, Echo Studio (2025), Echo Show 8 (3rd generation) and Echo Show 11, Echo Hub, plus several eero routers</td></tr>
<tr><td>IKEA</td><td>DIRIGERA hub, since the July 2025 software update</td></tr>
<tr><td>Aqara</td><td>Hub M3</td></tr>
</tbody>
</table>
<p>Older or entry-level models (the standard Echo Dot, Nest Mini, first-generation Nest Hub) can control Wi-Fi Matter devices but aren’t Thread border routers. Check your device’s specs before you buy Thread products.</p>

<h2>The IKEA DIRIGERA case: what changed</h2>
<p>IKEA’s DIRIGERA hub started out as a Zigbee hub that could expose IKEA products to other ecosystems through a Matter bridge. In July 2025, update 2.805.6 turned it into a <strong>Matter controller</strong> (it can add and automate other brands’ Matter devices in the IKEA Home smart app) and switched on its <strong>Thread</strong> radio, making it a border router. The controller feature launched as a beta and has to be turned on in the app’s settings.</p>
<p>Since early 2026, IKEA has also been selling a new lineup of around 20 native Matter-over-Thread products, including KAJPLATS bulbs, BILRESA remotes, the MYGGSPRAY motion sensor and the TIMMERFLOTTE temperature and humidity sensor. They can join Apple Home, Google Home, Alexa or SmartThings directly through any Thread border router, no DIRIGERA required. Older TRADFRI bulbs stay on Zigbee and need DIRIGERA to show up in Matter.</p>

<h2>How to choose a Matter and Thread hub</h2>
<ul>
<li><strong>Your main ecosystem:</strong> the voice assistant and app you use every day matter more than the spec sheet.</li>
<li><strong>A built-in Thread border router:</strong> essential if you plan to use Thread sensors and bulbs.</li>
<li><strong>Zigbee support too:</strong> useful if you already own Zigbee products (Aqara, IKEA TRADFRI, Hue); some hubs bridge them into Matter.</li>
<li><strong>Thread 1.4:</strong> makes it easier for border routers from different brands to coexist.</li>
<li><strong>Local automations:</strong> make sure they run on the hub itself, not just in the cloud.</li>
</ul>

<h2>The best Matter hubs and devices for 2026</h2>

<h3>1. Aqara Hub M3 — best overall</h3>
<p>The Hub M3 combines a Matter controller, Thread border router, Zigbee hub, IR blaster and Ethernet port with optional PoE power. It bridges Aqara’s Zigbee sensors into Matter and runs automations locally.</p>
<p><strong>Pros:</strong> the most versatile pick here, works with every major ecosystem, stable wired connection. <strong>Cons:</strong> detailed setup happens in the Aqara app, which is more technical. <strong>Best for:</strong> homes that mix several brands or already use Zigbee sensors.</p>

<h3>2. IKEA DIRIGERA — best value</h3>
<p>A Zigbee hub and Matter bridge that, thanks to its update, is now also a Matter controller and Thread border router. It’s the natural starting point for IKEA lighting, old and new.</p>
<p><strong>Pros:</strong> affordable, handles existing TRADFRI products and the new Thread lineup. <strong>Cons:</strong> supported device types are still limited, and automations are less advanced than Aqara’s. <strong>Best for:</strong> homes building their lighting around IKEA.</p>

<h3>3. Apple HomePod mini — for iPhone users</h3>
<p>The HomePod mini is a Siri speaker, an Apple Home hub and a Thread border router in one. It’s one of the simplest ways to get started with Matter in the Apple world.</p>
<p><strong>Pros:</strong> very easy setup from an iPhone, local automations. <strong>Cons:</strong> no Zigbee, and the Home app requires an Apple device. <strong>Best for:</strong> households that already use iPhones.</p>

<h3>4. Amazon Echo Dot Max — for Alexa users</h3>
<p>Launched in late 2025, the Echo Dot Max packs a Matter, Thread and Zigbee smart home hub into a compact speaker with fuller sound than the standard Echo Dot.</p>
<p><strong>Pros:</strong> Thread and Zigbee with no extra hub, a huge catalog of Alexa-compatible devices. <strong>Cons:</strong> the new Alexa+ features are rolling out country by country and aren’t available everywhere yet. <strong>Best for:</strong> people who already run their home by voice with Alexa.</p>

<h3>5. Google Nest Hub (2nd gen) — for the Google ecosystem</h3>
<p>A smart display with Google Assistant that acts as a Matter controller and Thread border router for Google Home.</p>
<p><strong>Pros:</strong> handy screen for seeing and controlling your devices, tight Android integration. <strong>Cons:</strong> no Zigbee, and the hardware is showing its age. <strong>Best for:</strong> Android households that want a control screen in the kitchen or living room.</p>

<h3>6. Eve Energy (Matter) — the go-to Thread device</h3>
<p>Not a hub but a Matter-over-Thread smart plug with energy monitoring that works with any Thread border router and Matter controller. It also extends the Thread mesh for your other devices.</p>
<p><strong>Pros:</strong> no cloud and no required account, works with all four major ecosystems. <strong>Cons:</strong> bulkier than a mini Wi-Fi plug. <strong>Best for:</strong> a first Thread device to confirm everything works. See also our <a href="/us/blog/box-domotique-hub-comparatif">smart home hub comparison</a>.</p>

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
<tr><td>Eve Energy (Matter)</td><td>Plug with energy monitoring, Thread router</td><td>Thread</td><td>First Thread device</td></tr>
</tbody>
</table>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Assuming “Matter compatible” means “every feature”:</strong> the essentials run through Matter, but advanced settings sometimes stay in the manufacturer’s app.</li>
<li><strong>Buying Thread devices without a border router:</strong> first make sure your speaker, display or hub has one built in.</li>
<li><strong>Mixing up Zigbee and Thread:</strong> a standard Hue or TRADFRI bulb uses Zigbee and needs a bridge to join Matter.</li>
<li><strong>Tossing the setup code:</strong> hang on to each device’s QR code or 11-digit code; you’ll need it after a reset.</li>
<li><strong>Going all in on Matter cameras right away:</strong> support has existed since Matter 1.5, but compatible models and apps are still few and far between.</li>
</ul>

<h2>Setup tips</h2>
<ol>
<li>Update your hub or speaker before you add your first device.</li>
<li>Put the border router in a central spot, and add plugged-in Thread devices to extend the mesh.</li>
<li>Add each device to your main ecosystem, then share it with the others using the “pair another service” option or a temporary pairing code.</li>
<li>Leave Bluetooth on during pairing: your phone often uses it for the initial handshake.</li>
</ol>
<p>For more on lighting, read our <a href="/us/blog/eclairage-connecte-comparatif">smart lighting comparison</a>.</p>

<h2>The bottom line</h2>
<p>In 2026, Matter and Thread deliver on their main promise: you can pick devices without worrying about the ecosystem. If you’re starting from scratch with several brands, the <strong>Aqara Hub M3</strong> is the most complete hub. On a tight budget with IKEA lighting, the updated <strong>DIRIGERA</strong> covers the essentials. And if you’re already in the Apple, Amazon or Google camp, your <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> or <strong>Nest Hub</strong> is often all you need to get started: add a plug such as the <strong>Eve Energy</strong> to build out your Thread network.</p>`,
    ca: `<p><strong>Matter is a common language that lets a smart device work with Apple Home, Google Home, Alexa and SmartThings at the same time, and Thread is the low-power wireless network that many of those devices use to communicate.</strong> To use them in 2026 you need a Matter controller and, for Thread devices, a Thread border router: often a speaker, display or hub you already own.</p>
<p>This guide explains what the two standards actually do, where their versions stand, which devices act as border routers in each ecosystem and which hub to choose. It draws on specifications published by the Connectivity Standards Alliance (CSA) and the Thread Group, manufacturer documentation, independent reviews and verified buyer reviews. To compare available hubs, see our <a href="/ca/energie-domotique/hubs-domotique">smart home hubs</a> page.</p>

<h2>What exactly is Matter?</h2>
<p>Matter is an open application standard run by the Connectivity Standards Alliance, whose members include Apple, Google, Amazon, Samsung, IKEA, Signify (Philips Hue) and Eve. It defines how a device describes what it can do (a light, a plug, a thermostat…) and how a controller sends it commands. Three principles set it apart from the old closed ecosystems:</p>
<ul>
<li><strong>Local control:</strong> commands travel over your home network. Turning on a Matter light from the app does not depend on a remote server, so the system responds quickly and keeps working during an internet outage (remote access and some voice assistants still rely on the cloud).</li>
<li><strong>Multi-admin:</strong> one device can be added to several ecosystems at once, for example Apple Home for you and Google Home for someone else in the household.</li>
<li><strong>Built-in security:</strong> every certified device has a verifiable identity and traffic is encrypted.</li>
</ul>

<h3>Matter versions at a glance</h3>
<p>Matter 1.0 arrived in late 2022 with lighting, plugs, locks, sensors and thermostats. Later versions widened the scope: robot vacuums and major appliances (1.2), energy reporting and cooking appliances (1.3), heat pumps, home batteries and water heaters (1.4). <strong>Matter 1.5</strong>, published in November 2025, added cameras plus gates, garage doors and window coverings. <strong>Matter 1.6</strong>, published in June 2026, brings NFC setup, “Joint Fabric” to make sharing one network across several platforms easier, and thermostat suggestions.</p>
<p>Keep in mind that a category existing in the specification does not mean your app supports it yet. Each ecosystem rolls out new device types at its own pace, and advanced features (vacuum maps, video history, fine settings) often stay in the manufacturer’s app.</p>

<h2>Thread, the network that carries Matter</h2>
<p>Matter can run over Wi-Fi, Ethernet or Thread. Thread is a low-power IPv6 radio network designed for small devices: sensors, bulbs, plugs, radiator valves and locks.</p>
<ul>
<li><strong>A mesh network:</strong> devices that are always powered (plugs, bulbs) relay messages for the others. The more you have, the wider the coverage.</li>
<li><strong>Low power use:</strong> battery sensors can sleep for long periods, which suits door and temperature sensors.</li>
<li><strong>The border router:</strong> this is the bridge between the Thread network and your Wi-Fi/Ethernet network. Without one, a Matter-over-Thread device cannot be added. Having several border routers improves reliability.</li>
</ul>
<p><strong>Thread 1.4</strong> fixes a real problem: previously, an Apple and a Google border router could create two separate Thread networks in the same home. Thread 1.4 standardizes how network credentials are shared across brands. Since January 1, 2026, it is the only version under which new border routers can be certified, but devices already in homes are getting the update at different speeds depending on the brand.</p>

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
<p>Since early 2026, IKEA has also sold a new line of around twenty native Matter-over-Thread products, including KAJPLATS bulbs, BILRESA remotes, the MYGGSPRAY motion sensor and the TIMMERFLOTTE temperature and humidity sensor. These can join Apple Home, Google Home, Alexa or SmartThings directly through any Thread border router, without DIRIGERA. Older TRADFRI bulbs stay on Zigbee and need DIRIGERA to appear in Matter.</p>

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
<p><strong>Strengths:</strong> the most versatile option here, works with all major ecosystems, stable wired connection. <strong>Limitations:</strong> detailed setup happens in the Aqara app, which is more technical. <strong>Best for:</strong> homes mixing several brands or already using Zigbee sensors.</p>

<h3>2. IKEA DIRIGERA — best value</h3>
<p>A Zigbee hub and Matter bridge that is now also a Matter controller and Thread border router thanks to its update. It is the natural starting point for IKEA lighting, old and new.</p>
<p><strong>Strengths:</strong> affordable, handles existing TRADFRI products and the new Thread line. <strong>Limitations:</strong> supported device types remain limited and automations are less advanced than Aqara’s. <strong>Best for:</strong> households building their lighting around IKEA.</p>

<h3>3. Apple HomePod mini — for iPhone users</h3>
<p>The HomePod mini is a Siri speaker, an Apple Home hub and a Thread border router in one. It is one of the simplest ways to start with Matter in the Apple world.</p>
<p><strong>Strengths:</strong> very easy setup from an iPhone, local automations. <strong>Limitations:</strong> no Zigbee, and the Home app requires an Apple device. <strong>Best for:</strong> households already using iPhones.</p>

<h3>4. Amazon Echo Dot Max — for Alexa users</h3>
<p>Launched in late 2025, the Echo Dot Max packs a Matter, Thread and Zigbee smart home hub into a compact speaker with fuller sound than the regular Echo Dot.</p>
<p><strong>Strengths:</strong> Thread and Zigbee without an extra hub, huge catalogue of Alexa-compatible devices. <strong>Limitations:</strong> the new Alexa+ features are not available in every country yet. <strong>Best for:</strong> people who already run their home by voice with Alexa.</p>

<h3>5. Google Nest Hub (2nd gen) — for the Google ecosystem</h3>
<p>A smart display with Google Assistant that acts as a Matter controller and Thread border router for Google Home.</p>
<p><strong>Strengths:</strong> handy screen to see and control devices, Android integration. <strong>Limitations:</strong> no Zigbee, and the hardware is no longer new. <strong>Best for:</strong> Android households that want a control screen in the kitchen or living room.</p>

<h3>6. Eve Energy (Matter) — the go-to Thread device</h3>
<p>Not a hub but a Matter-over-Thread smart plug with energy monitoring that works with any Thread border router and Matter controller. It also extends the Thread mesh for other devices.</p>
<p><strong>Strengths:</strong> no cloud or mandatory account, works with all four major ecosystems. <strong>Limitations:</strong> bulkier than a Wi-Fi mini plug. <strong>Best for:</strong> a first Thread device to check that everything works. See also our <a href="/ca/blog/box-domotique-hub-comparatif">smart home hub comparison</a>.</p>

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
<li>Place the border router in a central spot in your home and add always-powered Thread devices, such as smart plugs and bulbs, to extend the mesh.</li>
<li>Add each device to your main ecosystem, then share it with others using the “pair another service” option or a temporary pairing code.</li>
<li>Keep Bluetooth on your phone during pairing: it is often used for the first handshake.</li>
</ol>
<p>For more on lighting, read our <a href="/ca/blog/eclairage-connecte-comparatif">smart lighting comparison</a>.</p>

<h2>Our verdict</h2>
<p>In 2026 Matter and Thread deliver on their main promise: picking devices without worrying about the ecosystem. If you are starting from scratch with several brands, the <strong>Aqara Hub M3</strong> is the most complete hub. On a tight budget with IKEA lighting, the updated <strong>DIRIGERA</strong> covers the essentials. And if you are already with Apple, Amazon or Google, your <strong>HomePod mini</strong>, <strong>Echo Dot Max</strong> or <strong>Nest Hub</strong> is often enough to get started: add a plug such as the <strong>Eve Energy</strong> to build your Thread network.</p>`,
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
        pl: 'Czy do korzystania z Matter potrzebny jest hub?',
        sv: 'Behöver jag en hubb för att använda Matter?',
        us: 'Do I need a hub to use Matter?',
        ca: 'Do I need a hub to use Matter?',
      },
      answer: {
        fr: 'Il faut un contrôleur Matter, souvent une enceinte, un écran ou une box déjà présente chez vous. Les appareils Matter en Wi-Fi se connectent directement à votre box internet ; les appareils Matter en Thread ont en plus besoin d’un border router Thread, intégré à de nombreux HomePod, Echo, Nest Hub et hubs comme l’Aqara Hub M3 ou IKEA DIRIGERA.',
        en: 'You need a Matter controller, often a speaker, display or hub you already own. Wi-Fi Matter devices connect straight to your broadband router; Thread Matter devices also need a Thread border router, built into many HomePod, Echo and Nest Hub models and into hubs such as the Aqara Hub M3 and IKEA DIRIGERA.',
        de: 'Sie brauchen einen Matter-Controller. Das ist oft ein Lautsprecher, ein Display oder ein Hub, den Sie schon besitzen. Matter-Geräte mit WLAN verbinden sich direkt mit Ihrem Router; Matter-Geräte mit Thread brauchen zusätzlich einen Thread-Border-Router. Er steckt in vielen HomePod-, Echo- und Nest-Hub-Modellen sowie in Hubs wie dem Aqara Hub M3 oder IKEA DIRIGERA.',
        es: 'Necesitas un controlador Matter, que suele ser un altavoz, una pantalla o un hub que ya tienes en casa. Los dispositivos Matter por wifi se conectan directamente a tu router; los que funcionan sobre Thread necesitan además un border router Thread, integrado en muchos HomePod, Echo y Nest Hub y en hubs como el Aqara Hub M3 o el IKEA DIRIGERA.',
        it: 'Serve un controller Matter: spesso è un altoparlante, uno schermo o un hub che hai già in casa. I dispositivi Matter Wi-Fi si collegano direttamente al router di casa; quelli Matter su Thread hanno bisogno anche di un border router Thread, integrato in molti HomePod, Echo e Nest Hub e in hub come l’Aqara Hub M3 o IKEA DIRIGERA.',
        nl: 'Niet per se een aparte hub, wel een Matter-controller. Dat is vaak een speaker, scherm of hub die je al hebt. Matter-apparaten op wifi maken rechtstreeks verbinding met je router. Matter-apparaten op Thread hebben daarnaast een Thread-borderrouter nodig. Die zit in veel HomePod-, Echo- en Nest Hub-modellen en in hubs zoals de Aqara Hub M3 of IKEA DIRIGERA.',
        pl: 'Potrzebny jest kontroler Matter – często jest nim głośnik, ekran lub hub, który już masz w domu. Urządzenia Matter działające przez Wi-Fi łączą się bezpośrednio z Twoim routerem. Urządzenia Matter działające przez Thread wymagają dodatkowo routera brzegowego Thread, który jest wbudowany w wiele modeli HomePod, Echo i Nest Hub, a także w huby takie jak Aqara Hub M3 czy IKEA DIRIGERA.',
        sv: 'Du behöver en Matter-kontroller, ofta en högtalare, en skärm eller en hubb som du redan har. Matter-enheter med wifi ansluter direkt till din router. Matter-enheter med Thread behöver dessutom en gränsrouter för Thread, som finns inbyggd i många modeller av HomePod, Echo och Nest Hub och i hubbar som Aqara Hub M3 och IKEA DIRIGERA.',
        us: 'You need a Matter controller, and it’s often a speaker, display or hub you already own. Wi-Fi Matter devices connect straight to your router; Thread Matter devices also need a Thread border router, which is built into many HomePod, Echo and Nest Hub models and into hubs such as the Aqara Hub M3 or IKEA DIRIGERA.',
        ca: 'You need a Matter controller, often a speaker, display or hub you already own. Wi-Fi Matter devices connect straight to your router; Thread Matter devices also need a Thread border router, built into many HomePod, Echo and Nest Hub models and into hubs such as the Aqara Hub M3 or IKEA DIRIGERA.',
      },
    },
    {
      question: {
        fr: 'Quelle est la dernière version de Matter en 2026 ?',
        en: 'What is the latest version of Matter in 2026?',
        de: 'Welche Matter-Version ist 2026 aktuell?',
        es: '¿Cuál es la última versión de Matter en 2026?',
        it: 'Qual è l’ultima versione di Matter nel 2026?',
        nl: 'Wat is de nieuwste versie van Matter in 2026?',
        pl: 'Jaka jest najnowsza wersja Matter w 2026 roku?',
        sv: 'Vilken är den senaste versionen av Matter 2026?',
        us: 'What is the latest version of Matter in 2026?',
        ca: 'What is the latest version of Matter in 2026?',
      },
      answer: {
        fr: 'Matter 1.6, publié en juin 2026, qui ajoute notamment l’appairage par NFC et le Joint Fabric. Matter 1.5, sorti en novembre 2025, avait introduit les caméras et les portails, portes de garage et volets. Les nouvelles versions restent compatibles avec les appareils certifiés auparavant.',
        en: 'Matter 1.6, published in June 2026. Its additions include NFC pairing and Joint Fabric. Matter 1.5, released in November 2025, brought in cameras, along with gates, garage doors and shutters. New versions remain compatible with devices certified earlier.',
        de: 'Matter 1.6, veröffentlicht im Juni 2026. Es bringt unter anderem die Einrichtung per NFC und Joint Fabric. Matter 1.5 vom November 2025 führte Kameras sowie Tore, Garagentore und Rollläden ein. Neue Versionen bleiben mit bereits zertifizierten Geräten kompatibel.',
        es: 'Matter 1.6, publicado en junio de 2026, que añade, entre otras novedades, el emparejamiento por NFC y el Joint Fabric. Matter 1.5, de noviembre de 2025, ya había incorporado las cámaras, las cancelas, las puertas de garaje y las persianas. Las nuevas versiones siguen siendo compatibles con los dispositivos certificados anteriormente.',
        it: 'È Matter 1.6, pubblicato a giugno 2026, che aggiunge tra l’altro l’abbinamento via NFC e il Joint Fabric. Matter 1.5, uscito a novembre 2025, aveva introdotto telecamere, cancelli, porte da garage e tapparelle. Le nuove versioni restano compatibili con i dispositivi certificati in precedenza.',
        nl: 'Dat is Matter 1.6, verschenen in juni 2026. Die versie voegt onder meer koppelen via NFC en Joint Fabric toe. Matter 1.5 uit november 2025 bracht al ondersteuning voor camera’s en voor poorten, garagedeuren en rolluiken. Nieuwe versies blijven compatibel met apparaten die eerder zijn gecertificeerd.',
        pl: 'To Matter 1.6, opublikowany w czerwcu 2026 roku, który wprowadza m.in. parowanie przez NFC i funkcję Joint Fabric. Wcześniejszy Matter 1.5, wydany w listopadzie 2025 roku, dodał obsługę kamer, a także bram wjazdowych, bram garażowych i rolet. Nowe wersje zachowują zgodność z urządzeniami certyfikowanymi wcześniej.',
        sv: 'Matter 1.6, som publicerades i juni 2026 och bland annat lägger till parkoppling via NFC och Joint Fabric. Matter 1.5, som kom i november 2025, införde kameror samt grindar, garageportar, rullgardiner och rulljalusier. Nya versioner är bakåtkompatibla med enheter som har certifierats tidigare.',
        us: 'Matter 1.6, published in June 2026, which adds NFC setup and Joint Fabric, among other things. Matter 1.5, released in November 2025, introduced cameras, along with gates, garage doors and window coverings. New versions stay compatible with previously certified devices.',
        ca: 'Matter 1.6, published in June 2026, which adds NFC setup and Joint Fabric among other things. Matter 1.5, released in November 2025, introduced cameras plus gates, garage doors and window coverings. New versions remain compatible with previously certified devices.',
      },
    },
    {
      question: {
        fr: 'IKEA DIRIGERA est-il un border router Thread ?',
        en: 'Is the IKEA DIRIGERA a Thread border router?',
        de: 'Ist der IKEA DIRIGERA ein Thread-Border-Router?',
        es: '¿El IKEA DIRIGERA funciona como border router Thread?',
        it: 'IKEA DIRIGERA è un border router Thread?',
        nl: 'Is de IKEA DIRIGERA een Thread-borderrouter?',
        pl: 'Czy IKEA DIRIGERA jest routerem brzegowym Thread?',
        sv: 'Är IKEA DIRIGERA en gränsrouter för Thread?',
        us: 'Is the IKEA DIRIGERA a Thread border router?',
        ca: 'Is the IKEA DIRIGERA a Thread border router?',
      },
      answer: {
        fr: 'Oui, depuis la mise à jour 2.805.6 déployée à partir de juillet 2025. Elle a aussi fait de DIRIGERA un contrôleur Matter capable d’ajouter des appareils d’autres marques. La fonction contrôleur doit être activée dans les réglages de l’application IKEA Home smart.',
        en: 'Yes, since update 2.805.6, rolled out from July 2025. The same update made DIRIGERA a Matter controller that can add other brands’ devices. The controller feature has to be switched on in the IKEA Home smart app settings.',
        de: 'Ja, seit dem Update 2.805.6, das ab Juli 2025 verteilt wurde. Es machte DIRIGERA außerdem zum Matter-Controller, der Geräte anderer Marken einbinden kann. Die Controller-Funktion muss in den Einstellungen der App IKEA Home smart aktiviert werden.',
        es: 'Sí, desde la actualización 2.805.6, distribuida a partir de julio de 2025. Esa misma actualización convirtió el DIRIGERA en un controlador Matter capaz de añadir dispositivos de otras marcas. La función de controlador hay que activarla en los ajustes de la app IKEA Home smart.',
        it: 'Sì, dall’aggiornamento 2.805.6, distribuito a partire da luglio 2025. Lo stesso aggiornamento ha trasformato DIRIGERA in un controller Matter, in grado di aggiungere dispositivi di altre marche. La funzione controller va attivata nelle impostazioni dell’app IKEA Home smart.',
        nl: 'Ja, sinds update 2.805.6, die vanaf juli 2025 is uitgerold. Die update maakte van DIRIGERA ook een Matter-controller die apparaten van andere merken kan toevoegen. De controllerfunctie moet je wel zelf inschakelen in de instellingen van de app IKEA Home smart.',
        pl: 'Tak, od aktualizacji 2.805.6, udostępnianej od lipca 2025 roku. Ta sama aktualizacja zmieniła DIRIGERA w kontroler Matter, do którego można dodawać urządzenia innych marek. Funkcję kontrolera trzeba włączyć w ustawieniach aplikacji IKEA Home smart.',
        sv: 'Ja, sedan uppdateringen 2.805.6, som började rullas ut i juli 2025. Den gjorde också DIRIGERA till en Matter-kontroller som kan lägga till enheter från andra märken. Kontrollerfunktionen måste aktiveras i inställningarna i appen IKEA Home smart.',
        us: 'Yes, since update 2.805.6, which began rolling out in July 2025. The same update made DIRIGERA a Matter controller that can add other brands’ devices. You have to turn on the controller feature in the IKEA Home smart app settings.',
        ca: 'Yes, since update 2.805.6, which began rolling out in July 2025. It also made DIRIGERA a Matter controller able to add other brands’ devices. The controller feature has to be enabled in the IKEA Home smart app settings.',
      },
    },
    {
      question: {
        fr: 'Matter fonctionne-t-il sans internet ?',
        en: 'Does Matter work without the internet?',
        de: 'Funktioniert Matter ohne Internet?',
        es: '¿Funciona Matter sin internet?',
        it: 'Matter funziona senza internet?',
        nl: 'Werkt Matter zonder internet?',
        pl: 'Czy Matter działa bez internetu?',
        sv: 'Fungerar Matter utan internet?',
        us: 'Does Matter work without an internet connection?',
        ca: 'Does Matter work without internet?',
      },
      answer: {
        fr: 'Les commandes locales et les automatisations exécutées sur le hub continuent de fonctionner, car elles passent par votre réseau domestique. L’accès à distance, certaines commandes vocales et les mises à jour nécessitent en revanche une connexion internet.',
        en: 'Local commands and automations that run on the hub keep working, because they travel over your home network. Remote access, some voice commands and updates, however, do need an internet connection.',
        de: 'Lokale Befehle und Automationen, die auf dem Hub ausgeführt werden, funktionieren weiter, weil sie über Ihr Heimnetz laufen. Fernzugriff, manche Sprachbefehle und Updates benötigen dagegen eine Internetverbindung.',
        es: 'Los comandos locales y las automatizaciones que se ejecutan en el hub siguen funcionando porque pasan por tu red doméstica. El acceso remoto, algunos comandos de voz y las actualizaciones sí necesitan conexión a internet.',
        it: 'I comandi locali e le automazioni eseguite sull’hub continuano a funzionare perché passano dalla rete di casa. L’accesso da remoto, alcuni comandi vocali e gli aggiornamenti richiedono invece una connessione a internet.',
        nl: 'Ja, grotendeels. Lokale opdrachten en automatiseringen die op de hub draaien, blijven werken omdat ze via je thuisnetwerk lopen. Voor bediening op afstand, sommige spraakopdrachten en updates heb je wel internet nodig.',
        pl: 'Polecenia lokalne i automatyzacje wykonywane na hubie nadal działają, ponieważ przechodzą przez Twoją sieć domową. Dostęp zdalny, niektóre polecenia głosowe i aktualizacje wymagają jednak połączenia z internetem.',
        sv: 'Lokala kommandon och automationer som körs på hubben fortsätter att fungera, eftersom de går via ditt hemnätverk. Fjärråtkomst, vissa röstkommandon och uppdateringar kräver däremot internetuppkoppling.',
        us: 'Local commands, and automations that run on the hub, keep working because they travel over your home network. Remote access, some voice commands and updates do need an internet connection.',
        ca: 'Local commands and automations running on the hub keep working because they travel over your home network. Remote access, some voice commands and updates do need an internet connection.',
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
        pl: 'Czym się różnią Matter, Thread i Zigbee?',
        sv: 'Vad är skillnaden mellan Matter, Thread och Zigbee?',
        us: 'What is the difference between Matter, Thread and Zigbee?',
        ca: 'What is the difference between Matter, Thread and Zigbee?',
      },
      answer: {
        fr: 'Matter est le langage commun des appareils. Thread est un réseau radio maillé basse consommation sur lequel Matter peut circuler, comme le Wi-Fi ou l’Ethernet. Zigbee est un autre réseau maillé, plus ancien, qui ne transporte pas Matter : les appareils Zigbee passent par un pont (Hue, DIRIGERA, Aqara) pour apparaître dans Matter.',
        en: 'Matter is the common language that devices speak. Thread is a low-power mesh radio network that Matter can run over, just as it runs over Wi-Fi or Ethernet. Zigbee is another, older mesh network that does not carry Matter: Zigbee devices go through a bridge (Hue, DIRIGERA, Aqara) to appear in Matter.',
        de: 'Matter ist die gemeinsame Sprache der Geräte. Thread ist ein stromsparendes Mesh-Funknetz, über das Matter laufen kann – ebenso wie über WLAN oder Ethernet. Zigbee ist ein anderes, älteres Mesh-Netz, das kein Matter transportiert: Zigbee-Geräte erscheinen über eine Bridge (Hue, DIRIGERA, Aqara) in Matter.',
        es: 'Matter es el lenguaje común de los dispositivos. Thread es una red de radio mallada y de bajo consumo por la que puede circular Matter, igual que por wifi o Ethernet. Zigbee es otra red mallada, más antigua, que no transporta Matter: los dispositivos Zigbee pasan por un puente (Hue, DIRIGERA, Aqara) para aparecer en Matter.',
        it: 'Matter è il linguaggio comune dei dispositivi. Thread è una rete radio mesh a basso consumo su cui può viaggiare Matter, come il Wi-Fi o l’Ethernet. Zigbee è un’altra rete mesh, più vecchia, che non trasporta Matter: i dispositivi Zigbee passano da un bridge (Hue, DIRIGERA, Aqara) per comparire in Matter.',
        nl: 'Matter is de gemeenschappelijke taal waarin apparaten met elkaar praten. Thread is een zuinig draadloos mesh-netwerk waarover Matter kan lopen, net zoals over wifi of ethernet. Zigbee is een ander, ouder mesh-netwerk dat Matter niet kan doorgeven: Zigbee-apparaten komen via een bridge (Hue, DIRIGERA, Aqara) in Matter terecht.',
        pl: 'Matter to wspólny język, którym porozumiewają się urządzenia. Thread to energooszczędna radiowa sieć typu mesh, przez którą – podobnie jak przez Wi-Fi czy Ethernet – może działać Matter. Zigbee to inna, starsza sieć mesh, która nie obsługuje Matter: urządzenia Zigbee trafiają do Matter przez most (Hue, DIRIGERA, Aqara).',
        sv: 'Matter är det gemensamma språket som enheterna talar. Thread är ett energisnålt trådlöst meshnätverk som Matter kan köras över, precis som wifi eller Ethernet. Zigbee är ett annat, äldre meshnätverk som inte bär Matter: Zigbee-enheter går via en brygga (Hue, DIRIGERA, Aqara) för att synas i Matter.',
        us: 'Matter is the common language devices speak. Thread is a low-power mesh radio network that Matter can run over, like Wi-Fi or Ethernet. Zigbee is another, older mesh network that does not carry Matter: Zigbee devices go through a bridge (Hue, DIRIGERA, Aqara) to appear in Matter.',
        ca: 'Matter is the common language devices speak. Thread is a low-power mesh radio network that Matter can run over, like Wi-Fi or Ethernet. Zigbee is another, older mesh network that does not carry Matter: Zigbee devices go through a bridge (Hue, DIRIGERA, Aqara) to appear in Matter.',
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
        pl: 'Czy mogę używać kilku routerów brzegowych różnych marek?',
        sv: 'Kan jag använda flera gränsroutrar från olika märken?',
        us: 'Can I use several border routers from different brands?',
        ca: 'Can I use several border routers from different brands?',
      },
      answer: {
        fr: 'Oui. Avec Thread 1.4, les border routers partagent les identifiants réseau pour former un seul réseau Thread. Les appareils plus anciens peuvent encore créer des réseaux séparés tant qu’ils n’ont pas reçu la mise à jour : vérifiez les versions dans les applications de vos fabricants.',
        en: 'Yes. With Thread 1.4, border routers share network credentials to form a single Thread network. Older devices may still create separate networks until they get the update, so check the versions in each manufacturer’s app.',
        de: 'Ja. Mit Thread 1.4 teilen Border Router die Netzwerkzugangsdaten und bilden ein gemeinsames Thread-Netz. Ältere Geräte können bis zum Update noch getrennte Netze aufbauen – prüfen Sie die Versionen in den Hersteller-Apps.',
        es: 'Sí. Con Thread 1.4, los border routers comparten las credenciales de red para formar una sola red Thread. Los dispositivos más antiguos aún pueden crear redes separadas hasta recibir la actualización: comprueba las versiones en las apps de los fabricantes.',
        it: 'Sì. Con Thread 1.4 i border router condividono le credenziali di rete e formano un’unica rete Thread. I dispositivi più vecchi possono ancora creare reti separate finché non ricevono l’aggiornamento: controlla le versioni nelle app dei produttori.',
        nl: 'Ja. Met Thread 1.4 delen borderrouters hun netwerkgegevens en vormen ze samen één Thread-netwerk. Oudere apparaten kunnen nog aparte netwerken opzetten zolang ze de update niet hebben gekregen: controleer de versies in de apps van de fabrikanten.',
        pl: 'Tak. W wersji Thread 1.4 routery brzegowe współdzielą dane dostępowe i tworzą jedną wspólną sieć Thread. Starsze urządzenia mogą jednak tworzyć osobne sieci, dopóki nie dostaną aktualizacji, dlatego sprawdź wersję oprogramowania w aplikacjach poszczególnych producentów.',
        sv: 'Ja. Med Thread 1.4 delar gränsroutrarna nätverksuppgifterna och bildar ett enda Thread-nätverk. Äldre enheter kan fortfarande skapa separata nätverk tills de har fått uppdateringen, så kontrollera versionerna i tillverkarnas appar.',
        us: 'Yes. With Thread 1.4, border routers share network credentials to form a single Thread network. Older devices may still create separate networks until they get the update, so check the firmware version in each manufacturer’s app.',
        ca: 'Yes. With Thread 1.4, border routers share network credentials to form a single Thread network. Older devices may still create separate networks until they get the update, so check versions in your manufacturers’ apps.',
      },
    },
  ],
}
