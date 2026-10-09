import type { BlogArticle } from "../types"

export const article: BlogArticle = {
  slug: "detecteur-mouvement-connecte-comparatif",
  category: "comparatifs",
  pillar: "securite-maison",
  relatedSlugs: ["guide-securite-maison-connectee-2026", "alarme-maison-sans-abonnement", "maison-connectee-matter-thread-2026"],
  datePublished: "2026-10-09",
  dateModified: "2026-10-09",
  readingTime: 10,
  images: [
    {
      src: "https://images.unsplash.com/photo-1717323181080-334e21c2dde5?w=800&q=80&auto=format&fit=crop",
      alt: {
        fr: "Petit détecteur de mouvement connecté posé sur une table de chevet à côté d'une lampe et d'un réveil",
        en: "Small smart motion sensor on a bedside table next to a lamp and an alarm clock",
        de: "Kleiner smarter Bewegungsmelder auf einem Nachttisch neben Lampe und Wecker",
        es: "Pequeño sensor de movimiento inteligente sobre una mesita de noche junto a una lámpara y un despertador",
        it: "Piccolo sensore di movimento smart su un comodino accanto a una lampada e a una sveglia",
        nl: "Kleine slimme bewegingssensor op een nachtkastje naast een lamp en een wekker",
      },
    },
  ],
  title: {
    fr: "Meilleur Détecteur de Mouvement Connecté 2026 : Comparatif PIR et Présence mmWave",
    en: "Best Smart Motion Sensor 2026: Comparison, Value Tiers and PIR vs mmWave",
    de: "Bester Smarter Bewegungsmelder 2026: Vergleich PIR und mmWave-Präsenzmelder",
    es: "Mejor Sensor de Movimiento Inteligente 2026: Comparativa PIR y Presencia mmWave",
    it: "Miglior Sensore di Movimento Smart 2026: Confronto PIR e Presenza mmWave",
    nl: "Beste Slimme Bewegingssensor 2026: Vergelijking PIR en mmWave-Aanwezigheid",
  },
  excerpt: {
    fr: "Aqara P2, Aqara FP2, Philips Hue, IKEA MYGGSPRAY, Eve Motion et Ajax MotionProtect comparés : PIR ou radar mmWave, autonomie, capteur de luminosité, immunité animaux, Matter et usage éclairage ou alarme.",
    en: "Aqara P2, Aqara FP2, Philips Hue, IKEA MYGGSPRAY, Eve Motion and Ajax MotionProtect compared: PIR or mmWave radar, battery life, light sensor, pet immunity, Matter, value tiers, and lighting vs alarm use.",
    de: "Aqara P2, Aqara FP2, Philips Hue, IKEA MYGGSPRAY, Eve Motion und Ajax MotionProtect im Vergleich: PIR oder mmWave-Radar, Batterielaufzeit, Helligkeitssensor, Haustierimmunität, Matter, Licht oder Alarm.",
    es: "Aqara P2, Aqara FP2, Philips Hue, IKEA MYGGSPRAY, Eve Motion y Ajax MotionProtect comparados: PIR o radar mmWave, autonomía, sensor de luz, inmunidad a mascotas, Matter e iluminación o alarma.",
    it: "Aqara P2, Aqara FP2, Philips Hue, IKEA MYGGSPRAY, Eve Motion e Ajax MotionProtect a confronto: PIR o radar mmWave, autonomia, sensore di luce, immunità agli animali, Matter, luci o allarme.",
    nl: "Aqara P2, Aqara FP2, Philips Hue, IKEA MYGGSPRAY, Eve Motion en Ajax MotionProtect vergeleken: PIR of mmWave-radar, batterijduur, lichtsensor, huisdierimmuniteit, Matter, verlichting of alarm.",
  },
  content: {
    fr: `<p>Pour la plupart des foyers, le meilleur détecteur de mouvement connecté en 2026 est l'<strong>Aqara Motion and Light Sensor P2</strong> : un capteur infrarouge (PIR) sur pile, compatible Matter over Thread, avec un capteur de luminosité intégré et une autonomie annoncée jusqu'à deux ans. Si vous voulez savoir qu'une personne est encore dans la pièce même quand elle ne bouge plus, il faut passer à un capteur de présence à radar mmWave comme l'<strong>Aqara Presence Sensor FP2</strong> ; et si le but est une vraie alarme anti-intrusion, un détecteur de qualité alarme comme l'<strong>Ajax MotionProtect</strong> reste le choix le plus sûr.</p>
<p>Ce comparatif s'appuie sur les fiches techniques des fabricants, des avis indépendants publiés et les retours d'acheteurs vérifiés. Il passe en revue six modèles vendus en Europe, explique la différence entre détection de mouvement et détection de présence, et classe les capteurs par niveau de gamme plutôt que par prix. Vous trouverez aussi toute notre sélection dans la rubrique <a href="/fr/securite-maison/detecteurs-mouvement">détecteurs de mouvement</a>.</p>

<h2>Détecteur de mouvement PIR ou capteur de présence mmWave : la vraie différence</h2>
<p>C'est la question qui conditionne tout le reste. Les deux technologies ne répondent pas au même besoin.</p>
<ul>
<li><strong>Le PIR (infrarouge passif)</strong> repère les variations de chaleur quand un corps traverse son champ de vision. Il est très économe en énergie, ce qui permet de le faire fonctionner sur pile pendant des mois ou des années. Sa limite : il ne voit que le <em>mouvement</em>. Une personne assise immobile devant un écran ou en train de lire finit par « disparaître », et la lumière s'éteint.</li>
<li><strong>Le radar mmWave (ondes millimétriques)</strong> détecte des micro-mouvements, jusqu'à la respiration. Il sait donc qu'une pièce est <em>occupée</em>, même sans geste. Certains modèles localisent plusieurs personnes et découpent la pièce en zones. En contrepartie, il consomme davantage : la plupart des capteurs mmWave doivent être branchés en permanence (USB-C).</li>
</ul>
<p>En pratique : un PIR suffit pour un couloir, une entrée, un escalier, des toilettes ou un garage, où l'on ne fait que passer. Un capteur de présence mmWave se justifie dans un bureau, un salon, une salle de bain ou une chambre, là où l'on reste longtemps sans bouger.</p>

<h2>Les critères pour bien choisir</h2>
<h3>1. Le protocole et l'écosystème</h3>
<p>Un détecteur ne fonctionne jamais seul : il déclenche une lumière, une notification ou une sirène via un écosystème. Les principaux protocoles sont <strong>Matter over Thread</strong> (interopérable entre Apple Maison, Google Home, Amazon Alexa et SmartThings, mais nécessite un routeur de bordure Thread), <strong>Zigbee</strong> (fiable mais lié à un pont, comme le Hue Bridge ou le hub IKEA Dirigera), le <strong>Wi-Fi</strong> (sans hub, mais rarement compatible avec une alimentation sur pile) et le <strong>Bluetooth</strong>. Les systèmes d'alarme comme Ajax utilisent leur propre radio propriétaire. Pour bien comprendre ces standards, lisez notre guide <a href="/fr/blog/maison-connectee-matter-thread-2026">Matter et Thread</a>.</p>
<h3>2. L'autonomie et l'alimentation</h3>
<p>Les capteurs PIR sur pile annoncent de un à cinq ans selon le modèle, la fréquence des déclenchements et le protocole. Une autonomie élevée évite de grimper régulièrement à l'échelle. Les capteurs mmWave, eux, demandent une prise à proximité : à anticiper au moment de choisir l'emplacement.</p>
<h3>3. Le capteur de luminosité (lux)</h3>
<p>Indispensable pour l'éclairage automatique : il évite d'allumer une lampe en plein jour. La plupart des modèles récents l'intègrent, avec une précision variable. Pour savoir si une pièce est claire ou sombre, un capteur approximatif suffit largement.</p>
<h3>4. L'immunité aux animaux</h3>
<p>Point souvent négligé. Un détecteur d'éclairage classique réagit au chat ou au chien, ce qui est rarement grave. Pour une alarme, c'est rédhibitoire : il faut un détecteur conçu pour ignorer les animaux jusqu'à un certain poids et une certaine hauteur. Peu de capteurs grand public annoncent cette fonction ; les détecteurs de qualité alarme, oui.</p>
<h3>5. La portée, l'angle et l'indice de protection</h3>
<p>Portée de 5 à 12 mètres et angle de 90 à 170 degrés selon les modèles. Pour l'extérieur ou une salle de bain, vérifiez l'indice IP : IPX3 tolère la pluie sous abri, IP67 supporte l'extérieur exposé.</p>

<h2>Les 6 meilleurs détecteurs de mouvement et de présence en 2026</h2>

<h3>1. Aqara Motion and Light Sensor P2 — le meilleur choix global</h3>
<p>Le P2 combine un capteur PIR grand angle et un capteur de luminosité indépendant. Aqara annonce une détection jusqu'à 7 mètres sur 170 degrés à l'horizontale, ce qui couvre une pièce entière depuis un angle. Il communique en <strong>Matter over Thread</strong> et fonctionne donc avec Apple Maison, Google Home, Alexa ou SmartThings sans hub Aqara, à condition de disposer d'un routeur de bordure Thread (Apple TV, HomePod mini, Nest Hub récent, certains Echo…). Il est alimenté par deux piles CR2450, pour une autonomie annoncée jusqu'à deux ans.</p>
<p><strong>Points forts :</strong> angle de détection très large, Matter natif, bonne autonomie, format discret.<br><strong>Limites :</strong> PIR uniquement (ne détecte pas une présence immobile), pas d'immunité animaux annoncée, routeur Thread obligatoire.<br><strong>Pour qui :</strong> tous ceux qui veulent automatiser l'éclairage d'un couloir, d'une entrée ou d'une cuisine sans dépendre d'un écosystème unique.</p>

<h3>2. Aqara Presence Sensor FP2 — le meilleur capteur de présence</h3>
<p>Le FP2 utilise un radar mmWave capable de détecter des mouvements très fins, jusqu'à la respiration. Il couvre jusqu'à 40 m², peut découper la pièce en 30 zones, suivre jusqu'à cinq personnes simultanément et intègre un capteur de luminosité. Il se connecte en Wi-Fi 2,4 GHz, fonctionne avec Apple Maison, Alexa, Google Home et Home Assistant sans hub, et s'alimente en USB-C. Il est classé IPX5, ce qui autorise une salle de bain. Aqara propose aussi une fonction de détection de chute, à fixer au plafond.</p>
<p><strong>Points forts :</strong> vraie détection de présence, zones multiples, plusieurs personnes, pas de pile à changer.<br><strong>Limites :</strong> doit rester branché, réglage des zones plus long qu'un simple capteur, gamme supérieure.<br><strong>Pour qui :</strong> bureau, salon, salle de bain, ou toute pièce où la lumière ne doit pas s'éteindre pendant qu'on lit.</p>

<h3>3. Philips Hue Motion Sensor — le plus simple dans l'univers Hue</h3>
<p>Le détecteur intérieur de Philips Hue reste une référence pour qui possède déjà des ampoules Hue. Il fonctionne en Zigbee via le Hue Bridge, détecte jusqu'à 5 mètres sur 120 degrés, intègre un capteur de lumière du jour et mesure aussi la température. Il est alimenté par deux piles AAA, avec une autonomie annoncée d'environ deux ans. L'application Hue permet de régler des scènes différentes selon l'heure (lumière tamisée la nuit, par exemple).</p>
<p><strong>Points forts :</strong> intégration parfaite avec l'éclairage Hue, réglages jour/nuit très simples, piles standard.<br><strong>Limites :</strong> Hue Bridge indispensable, intérieur uniquement, portée plus courte que le P2.<br><strong>Pour qui :</strong> les foyers déjà équipés en Philips Hue qui veulent une solution sans configuration complexe.</p>

<h3>4. IKEA MYGGSPRAY — le meilleur rapport qualité-prix</h3>
<p>Le MYGGSPRAY fait partie de la nouvelle gamme Matter d'IKEA. C'est un capteur PIR compatible <strong>Matter over Thread</strong>, avec capteur de luminosité, alimenté par deux piles AAA (IKEA recommande ses accus rechargeables LADDA). Il est homologué <strong>IP67</strong> et convient donc à l'intérieur comme à l'extérieur. Il fonctionne avec le hub IKEA Dirigera, mais aussi avec Apple, Google, Amazon, Homey ou SmartThings via un routeur de bordure Thread. Des avis indépendants publiés mentionnent une détection frontale de l'ordre de 7 à 8 mètres et un capteur de luminosité peu précis, suffisant toutefois pour distinguer jour et nuit.</p>
<p><strong>Points forts :</strong> entrée de gamme, Matter, IP67, piles rechargeables standard.<br><strong>Limites :</strong> mesure de luminosité approximative, connexion Thread parfois capricieuse selon les retours, PIR uniquement.<br><strong>Pour qui :</strong> équiper plusieurs pièces ou un extérieur sans se ruiner. Le modèle précédent, l'IKEA VALLHORN (Zigbee, IP44), reste une option pour les utilisateurs du hub Dirigera.</p>

<h3>5. Eve Motion — le choix Apple Maison pour l'intérieur comme le dehors abrité</h3>
<p>L'Eve Motion fonctionne en <strong>Matter over Thread</strong>, intègre un capteur de luminosité et est certifié <strong>IPX3</strong>, ce qui permet une installation extérieure à l'abri des intempéries (sous un auvent, près d'une porte). Eve annonce un champ de 120 degrés et une portée jusqu'à 9 mètres pour une pose à 2 mètres de hauteur. Il est alimenté par deux piles AAA et peut être posé ou fixé au mur. Comme tous les produits Eve, il fonctionne en local, sans compte cloud.</p>
<p><strong>Points forts :</strong> bonne portée, usage extérieur abrité, fonctionnement local respectueux de la vie privée.<br><strong>Limites :</strong> gamme moyenne à supérieure, encombrement plus important, routeur Thread obligatoire.<br><strong>Pour qui :</strong> les utilisateurs d'Apple Maison qui veulent un capteur fiable pour une entrée, une terrasse couverte ou un garage.</p>

<h3>6. Ajax MotionProtect — le détecteur de qualité alarme</h3>
<p>Changement de catégorie : le MotionProtect est un détecteur d'intrusion conçu pour les systèmes d'alarme Ajax. Il ignore les animaux jusqu'à <strong>20 kg et 50 cm de hauteur</strong>, détecte jusqu'à 12 mètres et annonce jusqu'à cinq ans d'autonomie avec les piles fournies. Il communique avec la centrale via le protocole radio chiffré Jeweller, avec une portée annoncée jusqu'à 1 700 mètres en champ libre. La version actuelle est conforme à la norme <strong>EN 50131 Grade 2</strong>, la référence européenne pour les alarmes résidentielles.</p>
<p><strong>Points forts :</strong> immunité animaux, conformité EN 50131, fiabilité et autonomie élevées, radio sécurisée.<br><strong>Limites :</strong> nécessite une centrale Ajax, pas de capteur de luminosité, peu adapté aux automatisations d'éclairage.<br><strong>Pour qui :</strong> ceux qui veulent une alarme sérieuse, notamment avec un animal à la maison. Voir aussi notre dossier <a href="/fr/blog/alarme-maison-sans-abonnement">alarme maison sans abonnement</a>.</p>

<p><strong>Autres options à connaître :</strong> le <strong>Shelly BLU Motion</strong> (Bluetooth, pile CR2477 annoncée jusqu'à cinq ans, capteur de luminosité) s'intègre bien dans une installation Shelly existante ; le <strong>SONOFF SNZB-06P</strong> est un capteur de présence radar en Zigbee 3.0, alimenté en USB-C, apprécié des utilisateurs de Home Assistant.</p>

<h2>Tableau comparatif</h2>
<table>
<thead>
<tr><th>Modèle</th><th>Technologie</th><th>Connectivité</th><th>Alimentation</th><th>Capteur de lumière</th><th>Gamme</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td>Aqara Motion and Light Sensor P2</td><td>PIR, 170°</td><td>Matter over Thread</td><td>2 piles CR2450</td><td>Oui</td><td>Milieu</td><td>Éclairage automatique multi-écosystème</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Radar mmWave</td><td>Wi-Fi 2,4 GHz</td><td>USB-C (secteur)</td><td>Oui</td><td>Supérieure</td><td>Présence immobile, zones, plusieurs personnes</td></tr>
<tr><td>Philips Hue Motion Sensor</td><td>PIR, 120°</td><td>Zigbee (Hue Bridge)</td><td>2 piles AAA</td><td>Oui + température</td><td>Milieu</td><td>Foyers équipés Hue</td></tr>
<tr><td>IKEA MYGGSPRAY</td><td>PIR</td><td>Matter over Thread</td><td>2 piles AAA</td><td>Oui (approximatif)</td><td>Entrée</td><td>Petit budget, extérieur (IP67)</td></tr>
<tr><td>Eve Motion</td><td>PIR, 120°</td><td>Matter over Thread</td><td>2 piles AAA</td><td>Oui</td><td>Milieu à supérieure</td><td>Apple Maison, extérieur abrité (IPX3)</td></tr>
<tr><td>Ajax MotionProtect</td><td>PIR, immunité animaux</td><td>Jeweller (centrale Ajax)</td><td>Pile, jusqu'à 5 ans</td><td>Non</td><td>Supérieure (+ centrale)</td><td>Alarme anti-intrusion</td></tr>
</tbody>
</table>

<h2>Quelle gamme pour quel usage ?</h2>
<ul>
<li><strong>Entrée de gamme</strong> (IKEA MYGGSPRAY, Shelly BLU Motion) : parfait pour multiplier les capteurs dans les pièces de passage. On accepte une mesure de luminosité moins précise.</li>
<li><strong>Milieu de gamme</strong> (Aqara P2, Philips Hue, Eve Motion) : le meilleur équilibre entre portée, autonomie, finition et intégration. C'est là que se situe le meilleur rapport qualité-prix pour l'éclairage automatique.</li>
<li><strong>Haut de gamme</strong> (Aqara FP2, Ajax MotionProtect) : on paie une fonction précise, la détection de présence réelle ou la conformité alarme. À réserver aux pièces ou aux usages qui l'exigent ; pour Ajax, il faut aussi compter la centrale.</li>
</ul>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Utiliser un PIR dans un bureau ou un salon</strong> : la lumière s'éteindra pendant que vous travaillez. Choisissez un capteur mmWave, ou allongez nettement le délai d'extinction.</li>
<li><strong>Oublier le routeur Thread</strong> : un capteur Matter over Thread ne se connecte pas directement au Wi-Fi. Vérifiez que vous avez un routeur de bordure compatible.</li>
<li><strong>Confondre automatisation et alarme</strong> : un capteur d'éclairage peut envoyer une notification, mais il n'est ni certifié ni conçu pour résister au sabotage. Pour protéger un logement, privilégiez un détecteur conforme EN 50131.</li>
<li><strong>Pointer le capteur vers une source de chaleur ou une fenêtre</strong> : radiateur, soleil direct ou bouche de ventilation provoquent de fausses détections avec un PIR.</li>
<li><strong>Ignorer les animaux</strong> : sans immunité animaux, un chien ou un chat déclenchera une alarme à chaque passage.</li>
</ul>

<h2>Installation et conseils d'usage</h2>
<p>Un PIR détecte mieux un mouvement qui <em>traverse</em> son champ qu'un mouvement qui vient droit sur lui : placez-le de préférence de côté par rapport au passage, dans un angle de la pièce, entre 2 et 2,5 mètres de hauteur. Un capteur mmWave se fixe au mur ou au plafond selon les fonctions voulues (le plafond est requis pour la détection de chute du FP2) et doit éviter les objets en mouvement comme un ventilateur ou des rideaux. Vérifiez la zone couverte dans l'application avant de fixer définitivement le support.</p>
<p>Côté sécurité, un capteur de présence radar ne filme rien : il ne transmet ni image ni son, ce qui le rend acceptable dans une chambre ou une salle de bain. La détection de chute peut être un complément utile pour une personne âgée, mais elle ne remplace pas un dispositif de téléassistance. Enfin, ces capteurs s'alimentent par pile ou USB : aucune intervention sur le réseau électrique n'est nécessaire.</p>
<p>Pour aller plus loin, consultez notre <a href="/fr/blog/guide-securite-maison-connectee-2026">guide de la sécurité maison connectée</a>.</p>

<h2>Verdict</h2>
<p>Pour automatiser l'éclairage de la plupart des pièces, l'<strong>Aqara Motion and Light Sensor P2</strong> offre le meilleur compromis : large angle, Matter, capteur de lumière et longue autonomie. Avec un budget serré ou pour l'extérieur, l'<strong>IKEA MYGGSPRAY</strong> fait l'essentiel. Là où l'on reste immobile longtemps, l'<strong>Aqara Presence Sensor FP2</strong> change vraiment l'expérience grâce au radar. Les foyers Hue garderont le <strong>Philips Hue Motion Sensor</strong>, les utilisateurs d'Apple Maison apprécieront l'<strong>Eve Motion</strong>, et pour une alarme avec animaux, l'<strong>Ajax MotionProtect</strong> reste la référence.</p>`,
    en: `<p>For most homes, the best smart motion sensor in 2026 is the <strong>Aqara Motion and Light Sensor P2</strong>: a battery-powered infrared (PIR) sensor that runs on Matter over Thread, has a built-in light sensor and is rated for up to two years of battery life. If you need to know that someone is still in the room even when they sit perfectly still, step up to an mmWave radar presence sensor such as the <strong>Aqara Presence Sensor FP2</strong>; and if what you really want is a burglar alarm, an alarm-grade detector like the <strong>Ajax MotionProtect</strong> is the safer choice.</p>
<p>This comparison is based on manufacturer specifications, published independent reviews and verified buyer feedback. It covers six models sold in Europe, explains the difference between motion detection and presence detection, and compares sensors by value tier rather than by price tag, since prices move constantly while the trade-offs at each level do not. You can also browse our full selection of <a href="/en/securite-maison/detecteurs-mouvement">motion sensors</a>.</p>

<h2>PIR motion sensor or mmWave presence sensor: the real difference</h2>
<p>This is the question that drives every other decision. The two technologies solve different problems.</p>
<ul>
<li><strong>PIR (passive infrared)</strong> picks up changes in heat as a body crosses its field of view. It uses very little power, which is why PIR sensors can run on batteries for months or years. The catch: it only sees <em>movement</em>. Someone sitting still at a desk or reading on the sofa eventually "disappears", and the lights go off.</li>
<li><strong>mmWave (millimetre-wave) radar</strong> detects tiny movements, down to breathing. It therefore knows a room is <em>occupied</em>, even when nobody moves. Some models track several people and split a room into zones. The trade-off is power: most mmWave sensors must stay plugged in (USB-C).</li>
</ul>
<p>In practice, a PIR sensor is enough for hallways, entrances, stairs, toilets or a garage, where people just pass through. An mmWave presence sensor earns its place in a home office, living room, bathroom or bedroom, where people stay put for long periods.</p>

<h2>How to choose: the buying criteria</h2>
<h3>1. Protocol and ecosystem</h3>
<p>A sensor never works on its own: it triggers a light, a notification or a siren through an ecosystem. The main options are <strong>Matter over Thread</strong> (works across Apple Home, Google Home, Amazon Alexa and SmartThings, but needs a Thread border router), <strong>Zigbee</strong> (reliable but tied to a bridge such as the Hue Bridge or IKEA's Dirigera hub), <strong>Wi-Fi</strong> (no hub, but rarely compatible with battery power) and <strong>Bluetooth</strong>. Alarm systems such as Ajax use their own proprietary radio. For a primer on these standards, read our <a href="/en/blog/maison-connectee-matter-thread-2026">Matter and Thread guide</a>.</p>
<h3>2. Battery life and power</h3>
<p>Battery PIR sensors are rated from one to five years depending on the model, how often they trigger and the protocol. Longer battery life means fewer trips up a ladder. mmWave sensors need a socket nearby, so plan the location accordingly.</p>
<h3>3. Light (lux) sensor</h3>
<p>Essential for lighting automations: it stops a lamp from switching on in broad daylight. Most recent models include one, with varying accuracy. To tell whether a room is light or dark, even a rough sensor is enough.</p>
<h3>4. Pet immunity</h3>
<p>Often overlooked. A lighting sensor will react to a cat or dog, which rarely matters. For an alarm, it is a deal-breaker: you need a detector designed to ignore animals up to a given weight and height. Few consumer sensors claim this; alarm-grade detectors do.</p>
<h3>5. Range, angle and ingress protection</h3>
<p>Expect 5 to 12 metres of range and 90 to 170 degrees of coverage depending on the model. For outdoor use or a bathroom, check the IP rating: IPX3 handles rain under cover, IP67 copes with exposed outdoor spots.</p>

<h2>The 6 best motion and presence sensors in 2026</h2>

<h3>1. Aqara Motion and Light Sensor P2 — best overall</h3>
<p>The P2 pairs a wide-angle PIR sensor with a separate light sensor. Aqara quotes detection up to 7 metres across 170 degrees horizontally, enough to cover a whole room from a corner. It runs on <strong>Matter over Thread</strong>, so it works with Apple Home, Google Home, Alexa or SmartThings without an Aqara hub, as long as you have a Thread border router (Apple TV, HomePod mini, recent Nest Hub, some Echo devices…). It is powered by two CR2450 coin cells, with battery life rated up to two years.</p>
<p><strong>Strengths:</strong> very wide detection angle, native Matter, good battery life, discreet design.<br><strong>Limitations:</strong> PIR only (won't detect someone sitting still), no claimed pet immunity, Thread border router required.<br><strong>Best for:</strong> anyone automating lights in a hallway, entrance or kitchen without being locked into one ecosystem.</p>

<h3>2. Aqara Presence Sensor FP2 — best presence sensor</h3>
<p>The FP2 uses mmWave radar sensitive enough to pick up very small movements, including breathing. It covers up to 40 m², can divide a room into 30 zones, track up to five people at once and includes a light sensor. It connects over 2.4 GHz Wi-Fi, works with Apple Home, Alexa, Google Home and Home Assistant without a hub, and is powered over USB-C. Its IPX5 rating makes it suitable for a bathroom. Aqara also offers a fall-detection mode when the sensor is ceiling-mounted.</p>
<p><strong>Strengths:</strong> true presence detection, multiple zones, multi-person tracking, no batteries to change.<br><strong>Limitations:</strong> must stay plugged in, zone set-up takes longer than a basic sensor, premium tier.<br><strong>Best for:</strong> home offices, living rooms, bathrooms, or any room where the lights must not switch off while you read.</p>

<h3>3. Philips Hue Motion Sensor — easiest in the Hue world</h3>
<p>Philips Hue's indoor motion sensor is still the default pick if you already own Hue bulbs. It runs on Zigbee through the Hue Bridge, detects up to 5 metres across 120 degrees, includes a daylight sensor and also reports temperature. It takes two AAA batteries, with battery life rated at around two years. The Hue app makes it easy to set different scenes by time of day (dimmed light at night, for instance).</p>
<p><strong>Strengths:</strong> seamless with Hue lighting, very simple day/night settings, standard batteries.<br><strong>Limitations:</strong> Hue Bridge required, indoor only, shorter range than the P2.<br><strong>Best for:</strong> homes already using Philips Hue that want a set-and-forget solution.</p>

<h3>4. IKEA MYGGSPRAY — best value</h3>
<p>The MYGGSPRAY is part of IKEA's new Matter range. It is a PIR sensor running <strong>Matter over Thread</strong>, with a light sensor, powered by two AAA batteries (IKEA recommends its LADDA rechargeables). It is <strong>IP67</strong>-rated, so it works indoors and outdoors. It pairs with IKEA's Dirigera hub, and also with Apple, Google, Amazon, Homey or SmartThings through a Thread border router. Published independent reviews report frontal detection of roughly 7 to 8 metres and a light sensor that is not very accurate, though good enough to tell day from night.</p>
<p><strong>Strengths:</strong> entry-level tier, Matter, IP67, standard rechargeable batteries.<br><strong>Limitations:</strong> rough light readings, Thread connection reported as occasionally finicky, PIR only.<br><strong>Best for:</strong> kitting out several rooms or an outdoor area on a tight budget. Its predecessor, the IKEA VALLHORN (Zigbee, IP44), remains an option for Dirigera users.</p>

<h3>5. Eve Motion — the Apple Home pick, indoors or sheltered outdoors</h3>
<p>The Eve Motion runs on <strong>Matter over Thread</strong>, includes a light sensor and is <strong>IPX3</strong>-certified, so it can go outside in a sheltered spot (under a porch roof, by a door). Eve quotes a 120-degree field of view and up to 9 metres of range when mounted at 2 metres. It runs on two AAA batteries and can stand freely or be wall-mounted. Like all Eve products, it works locally, with no cloud account.</p>
<p><strong>Strengths:</strong> good range, sheltered outdoor use, local operation that respects privacy.<br><strong>Limitations:</strong> mid-to-premium tier, bulkier, Thread border router required.<br><strong>Best for:</strong> Apple Home users who want a dependable sensor for an entrance, covered terrace or garage.</p>

<h3>6. Ajax MotionProtect — alarm-grade detector</h3>
<p>A different category altogether: the MotionProtect is an intrusion detector built for Ajax alarm systems. It ignores pets up to <strong>20 kg and 50 cm tall</strong>, detects up to 12 metres and is rated for up to five years on the supplied batteries. It talks to the hub over Ajax's encrypted Jeweller radio, with a quoted range of up to 1,700 metres in open space. The current version complies with <strong>EN 50131 Grade 2</strong>, the European benchmark for residential alarms.</p>
<p><strong>Strengths:</strong> pet immunity, EN 50131 compliance, high reliability and battery life, secure radio.<br><strong>Limitations:</strong> requires an Ajax hub, no light sensor, poorly suited to lighting automations.<br><strong>Best for:</strong> anyone who wants a serious alarm, especially with pets at home. See also our guide to <a href="/en/blog/alarme-maison-sans-abonnement">home alarms without a subscription</a>.</p>

<p><strong>Other options worth knowing:</strong> the <strong>Shelly BLU Motion</strong> (Bluetooth, CR2477 cell rated up to five years, light sensor) fits neatly into an existing Shelly set-up; the <strong>SONOFF SNZB-06P</strong> is a Zigbee 3.0 radar presence sensor powered over USB-C, popular with Home Assistant users.</p>

<h2>Comparison table</h2>
<table>
<thead>
<tr><th>Model</th><th>Technology</th><th>Connectivity</th><th>Power</th><th>Light sensor</th><th>Value tier</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>Aqara Motion and Light Sensor P2</td><td>PIR, 170°</td><td>Matter over Thread</td><td>2 × CR2450</td><td>Yes</td><td>Mid-range</td><td>Lighting automations across ecosystems</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>mmWave radar</td><td>2.4 GHz Wi-Fi</td><td>USB-C (mains)</td><td>Yes</td><td>Premium</td><td>Still presence, zones, multiple people</td></tr>
<tr><td>Philips Hue Motion Sensor</td><td>PIR, 120°</td><td>Zigbee (Hue Bridge)</td><td>2 × AAA</td><td>Yes + temperature</td><td>Mid-range</td><td>Hue households</td></tr>
<tr><td>IKEA MYGGSPRAY</td><td>PIR</td><td>Matter over Thread</td><td>2 × AAA</td><td>Yes (rough)</td><td>Entry-level</td><td>Tight budgets, outdoors (IP67)</td></tr>
<tr><td>Eve Motion</td><td>PIR, 120°</td><td>Matter over Thread</td><td>2 × AAA</td><td>Yes</td><td>Mid-to-premium</td><td>Apple Home, sheltered outdoors (IPX3)</td></tr>
<tr><td>Ajax MotionProtect</td><td>PIR, pet immune</td><td>Jeweller (Ajax hub)</td><td>Battery, up to 5 years</td><td>No</td><td>Premium (+ hub)</td><td>Intrusion alarm</td></tr>
</tbody>
</table>

<h2>Value tiers: what you get at each level</h2>
<p>Rather than a price list, here is what each tier actually buys you, which is what matters when comparing motion sensors.</p>
<ul>
<li><strong>Entry-level</strong> (IKEA MYGGSPRAY, Shelly BLU Motion): ideal for scattering sensors across pass-through spaces. You accept less accurate light readings and fewer settings. The lowest cost per room by a clear margin.</li>
<li><strong>Mid-range</strong> (Aqara P2, Philips Hue, Eve Motion): the best balance of range, battery life, build quality and integration. This is where the best value sits for lighting automations.</li>
<li><strong>Premium</strong> (Aqara FP2, Ajax MotionProtect): you pay for one specific capability, either true presence detection or alarm compliance. Reserve them for rooms or uses that need it; with Ajax, also budget for the hub.</li>
</ul>
<p>A practical rule: if a room only needs lights on when someone walks in, an entry-level or mid-range PIR does the job. Spend more only where a cheaper sensor would genuinely fail, such as a home office (presence) or a home with pets and an alarm (pet immunity).</p>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Using a PIR in an office or living room:</strong> the lights will switch off while you work. Choose an mmWave sensor, or set a much longer switch-off delay.</li>
<li><strong>Forgetting the Thread border router:</strong> a Matter over Thread sensor does not connect directly to Wi-Fi. Check you have a compatible border router.</li>
<li><strong>Confusing automation with an alarm:</strong> a lighting sensor can send a notification, but it is neither certified nor designed to resist tampering. To protect a home, choose an EN 50131-compliant detector.</li>
<li><strong>Pointing the sensor at a heat source or window:</strong> radiators, direct sun or air vents cause false triggers with PIR.</li>
<li><strong>Ignoring pets:</strong> without pet immunity, a dog or cat will set off an alarm every time it walks by.</li>
</ul>

<h2>Installation and usage tips</h2>
<p>A PIR sensor detects movement <em>across</em> its field better than movement heading straight at it: mount it to the side of the walkway, ideally in a room corner, at 2 to 2.5 metres. An mmWave sensor goes on a wall or ceiling depending on the features you want (the FP2's fall detection requires ceiling mounting) and should avoid moving objects such as fans or curtains. Check the covered area in the app before fixing the mount permanently.</p>
<p>On privacy and safety, a radar presence sensor records nothing: it transmits no image or sound, which makes it acceptable in a bedroom or bathroom. Fall detection can be a helpful extra for an older person, but it does not replace a personal alarm service. Finally, these sensors run on batteries or USB, so no work on your mains wiring is needed.</p>
<p>To go further, read our <a href="/en/blog/guide-securite-maison-connectee-2026">smart home security guide</a>.</p>

<h2>Verdict</h2>
<p>For automating lights in most rooms, the <strong>Aqara Motion and Light Sensor P2</strong> is the best all-round choice: wide angle, Matter, light sensor and long battery life. On a tight budget or outdoors, the <strong>IKEA MYGGSPRAY</strong> covers the essentials. Where people stay still for long periods, the <strong>Aqara Presence Sensor FP2</strong> genuinely transforms the experience thanks to radar. Hue households should stick with the <strong>Philips Hue Motion Sensor</strong>, Apple Home users will like the <strong>Eve Motion</strong>, and for an alarm in a home with pets, the <strong>Ajax MotionProtect</strong> remains the benchmark.</p>`,
    de: `<p>Für die meisten Haushalte ist der <strong>Aqara Motion and Light Sensor P2</strong> 2026 der beste smarte Bewegungsmelder: ein batteriebetriebener Infrarotsensor (PIR) mit Matter over Thread, integriertem Helligkeitssensor und einer angegebenen Batterielaufzeit von bis zu zwei Jahren. Wer wissen will, dass sich noch jemand im Raum aufhält, auch wenn er sich nicht bewegt, greift zu einem mmWave-Radar-Präsenzmelder wie dem <strong>Aqara Presence Sensor FP2</strong>; und wer eigentlich eine Einbruchmeldeanlage sucht, ist mit einem Melder in Alarmanlagenqualität wie dem <strong>Ajax MotionProtect</strong> am besten bedient.</p>
<p>Dieser Vergleich stützt sich auf Herstellerangaben, veröffentlichte unabhängige Testberichte und verifizierte Käuferbewertungen. Er stellt sechs in Europa erhältliche Modelle vor, erklärt den Unterschied zwischen Bewegungs- und Präsenzerkennung und ordnet die Sensoren nach Preisklassen statt nach konkreten Preisen ein. Unsere komplette Auswahl finden Sie in der Rubrik <a href="/de/securite-maison/detecteurs-mouvement">Bewegungsmelder</a>.</p>

<h2>PIR-Bewegungsmelder oder mmWave-Präsenzmelder: der eigentliche Unterschied</h2>
<p>Diese Frage entscheidet über alles Weitere. Die beiden Technologien lösen unterschiedliche Aufgaben.</p>
<ul>
<li><strong>PIR (passives Infrarot)</strong> erkennt Wärmeänderungen, wenn ein Körper das Sichtfeld durchquert. Der Stromverbrauch ist sehr gering, deshalb laufen PIR-Sensoren monate- oder jahrelang mit Batterie. Der Haken: Sie sehen nur <em>Bewegung</em>. Wer still am Schreibtisch sitzt oder auf dem Sofa liest, „verschwindet“ irgendwann, und das Licht geht aus.</li>
<li><strong>mmWave-Radar (Millimeterwellen)</strong> erkennt kleinste Bewegungen bis hin zur Atmung. Er weiß also, dass ein Raum <em>belegt</em> ist, auch ohne Gesten. Manche Modelle erfassen mehrere Personen und teilen den Raum in Zonen. Dafür verbrauchen sie mehr Strom: Die meisten mmWave-Sensoren brauchen eine dauerhafte Stromversorgung (USB-C).</li>
</ul>
<p>In der Praxis reicht ein PIR-Sensor für Flur, Eingang, Treppe, WC oder Garage, wo man nur durchgeht. Ein mmWave-Präsenzmelder lohnt sich im Arbeitszimmer, Wohnzimmer, Bad oder Schlafzimmer, wo man lange ruhig verweilt.</p>

<h2>Kaufkriterien: worauf es ankommt</h2>
<h3>1. Funkstandard und Ökosystem</h3>
<p>Ein Melder arbeitet nie allein: Er schaltet über ein Ökosystem ein Licht, eine Benachrichtigung oder eine Sirene. Die wichtigsten Standards sind <strong>Matter over Thread</strong> (funktioniert mit Apple Home, Google Home, Amazon Alexa und SmartThings, benötigt aber einen Thread-Border-Router), <strong>Zigbee</strong> (zuverlässig, aber an eine Bridge gebunden, etwa Hue Bridge oder IKEA Dirigera), <strong>WLAN</strong> (ohne Hub, aber selten batterietauglich) und <strong>Bluetooth</strong>. Alarmsysteme wie Ajax nutzen eigene Funkprotokolle. Grundlagen dazu in unserem Ratgeber <a href="/de/blog/maison-connectee-matter-thread-2026">Matter und Thread</a>.</p>
<h3>2. Batterielaufzeit und Stromversorgung</h3>
<p>Batteriebetriebene PIR-Sensoren werden je nach Modell, Auslösehäufigkeit und Funkstandard mit ein bis fünf Jahren angegeben. Eine lange Laufzeit erspart häufiges Hochsteigen auf die Leiter. mmWave-Sensoren brauchen eine Steckdose in der Nähe – das sollte man bei der Platzwahl einplanen.</p>
<h3>3. Helligkeitssensor (Lux)</h3>
<p>Für Lichtautomationen unverzichtbar: Er verhindert, dass eine Lampe am helllichten Tag angeht. Die meisten aktuellen Modelle haben einen, mit unterschiedlicher Genauigkeit. Um hell und dunkel zu unterscheiden, genügt auch ein grober Sensor.</p>
<h3>4. Haustierimmunität</h3>
<p>Wird oft übersehen. Ein Lichtsensor reagiert auf Katze oder Hund, was selten stört. Bei einer Alarmanlage ist das ein Ausschlusskriterium: Dann braucht es einen Melder, der Tiere bis zu einem bestimmten Gewicht und einer bestimmten Höhe ignoriert. Nur wenige Consumer-Sensoren versprechen das, Alarmmelder hingegen schon.</p>
<h3>5. Reichweite, Winkel und Schutzart</h3>
<p>Je nach Modell 5 bis 12 Meter Reichweite und 90 bis 170 Grad Erfassungswinkel. Für draußen oder das Bad zählt die IP-Schutzart: IPX3 verträgt Regen an geschützten Stellen, IP67 auch exponierte Außenbereiche.</p>

<h2>Die 6 besten Bewegungs- und Präsenzmelder 2026</h2>

<h3>1. Aqara Motion and Light Sensor P2 – unsere Gesamtempfehlung</h3>
<p>Der P2 kombiniert einen Weitwinkel-PIR-Sensor mit einem separaten Helligkeitssensor. Aqara gibt eine Erfassung bis 7 Meter und 170 Grad horizontal an – genug, um aus einer Ecke den ganzen Raum abzudecken. Er funkt über <strong>Matter over Thread</strong> und arbeitet daher ohne Aqara-Hub mit Apple Home, Google Home, Alexa oder SmartThings, sofern ein Thread-Border-Router vorhanden ist (Apple TV, HomePod mini, neuerer Nest Hub, einige Echo-Geräte…). Versorgt wird er von zwei CR2450-Knopfzellen, mit einer angegebenen Laufzeit von bis zu zwei Jahren.</p>
<p><strong>Stärken:</strong> sehr großer Erfassungswinkel, natives Matter, gute Batterielaufzeit, unauffälliges Design.<br><strong>Schwächen:</strong> nur PIR (erkennt keine ruhende Person), keine angegebene Haustierimmunität, Thread-Border-Router nötig.<br><strong>Für wen:</strong> alle, die Licht in Flur, Eingang oder Küche automatisieren möchten, ohne sich an ein Ökosystem zu binden.</p>

<h3>2. Aqara Presence Sensor FP2 – der beste Präsenzmelder</h3>
<p>Der FP2 nutzt ein mmWave-Radar, das sehr feine Bewegungen bis hin zur Atmung erkennt. Er deckt bis zu 40 m² ab, kann den Raum in 30 Zonen aufteilen, bis zu fünf Personen gleichzeitig erfassen und hat einen Helligkeitssensor. Er verbindet sich per WLAN (2,4 GHz), arbeitet ohne Hub mit Apple Home, Alexa, Google Home und Home Assistant und wird per USB-C versorgt. Dank IPX5 eignet er sich auch fürs Bad. Aqara bietet zudem eine Sturzerkennung bei Deckenmontage.</p>
<p><strong>Stärken:</strong> echte Präsenzerkennung, mehrere Zonen, mehrere Personen, kein Batteriewechsel.<br><strong>Schwächen:</strong> braucht dauerhaft Strom, Zoneneinrichtung aufwendiger als bei einem einfachen Sensor, obere Preisklasse.<br><strong>Für wen:</strong> Arbeitszimmer, Wohnzimmer, Bad oder jeder Raum, in dem das Licht beim Lesen nicht ausgehen soll.</p>

<h3>3. Philips Hue Motion Sensor – am einfachsten im Hue-System</h3>
<p>Der Innen-Bewegungsmelder von Philips Hue ist weiterhin die naheliegende Wahl, wenn bereits Hue-Lampen vorhanden sind. Er funkt per Zigbee über die Hue Bridge, erfasst bis 5 Meter bei 120 Grad, hat einen Tageslichtsensor und misst zusätzlich die Temperatur. Zwei AAA-Batterien halten laut Hersteller rund zwei Jahre. In der Hue-App lassen sich je nach Tageszeit unterschiedliche Szenen festlegen, etwa gedimmtes Licht in der Nacht.</p>
<p><strong>Stärken:</strong> nahtlos mit Hue-Beleuchtung, sehr einfache Tag/Nacht-Einstellungen, Standardbatterien.<br><strong>Schwächen:</strong> Hue Bridge zwingend, nur für innen, geringere Reichweite als der P2.<br><strong>Für wen:</strong> Haushalte mit Philips Hue, die eine unkomplizierte Lösung suchen.</p>

<h3>4. IKEA MYGGSPRAY – das beste Preis-Leistungs-Verhältnis</h3>
<p>Der MYGGSPRAY gehört zur neuen Matter-Reihe von IKEA. Es ist ein PIR-Sensor mit <strong>Matter over Thread</strong> und Helligkeitssensor, betrieben mit zwei AAA-Batterien (IKEA empfiehlt die LADDA-Akkus). Mit Schutzart <strong>IP67</strong> eignet er sich für drinnen und draußen. Er arbeitet mit dem IKEA-Hub Dirigera, aber über einen Thread-Border-Router auch mit Apple, Google, Amazon, Homey oder SmartThings. Veröffentlichte unabhängige Testberichte nennen eine frontale Erfassung von etwa 7 bis 8 Metern und einen eher ungenauen Helligkeitssensor, der aber für hell/dunkel ausreicht.</p>
<p><strong>Stärken:</strong> Einstiegsklasse, Matter, IP67, Standard-Akkus.<br><strong>Schwächen:</strong> ungenaue Helligkeitswerte, Thread-Verbindung laut Nutzern teils launisch, nur PIR.<br><strong>Für wen:</strong> wer mehrere Räume oder den Außenbereich günstig ausstatten will. Der Vorgänger IKEA VALLHORN (Zigbee, IP44) bleibt eine Option für Dirigera-Nutzer.</p>

<h3>5. Eve Motion – die Apple-Home-Wahl für innen und geschützte Außenbereiche</h3>
<p>Der Eve Motion funkt über <strong>Matter over Thread</strong>, hat einen Helligkeitssensor und ist nach <strong>IPX3</strong> zertifiziert – also für geschützte Außenbereiche geeignet (unter einem Vordach, neben der Haustür). Eve gibt 120 Grad Sichtfeld und bis zu 9 Meter Reichweite bei 2 Metern Montagehöhe an. Er läuft mit zwei AAA-Batterien und kann aufgestellt oder an die Wand montiert werden. Wie alle Eve-Produkte arbeitet er lokal, ohne Cloud-Konto.</p>
<p><strong>Stärken:</strong> gute Reichweite, geschützter Außeneinsatz, lokaler Betrieb mit Blick auf Datenschutz.<br><strong>Schwächen:</strong> mittlere bis obere Preisklasse, etwas größer, Thread-Border-Router nötig.<br><strong>Für wen:</strong> Apple-Home-Nutzer, die einen zuverlässigen Sensor für Eingang, überdachte Terrasse oder Garage suchen.</p>

<h3>6. Ajax MotionProtect – Melder in Alarmanlagenqualität</h3>
<p>Eine andere Kategorie: Der MotionProtect ist ein Einbruchmelder für Ajax-Alarmanlagen. Er ignoriert Haustiere bis <strong>20 kg und 50 cm Höhe</strong>, erfasst bis 12 Meter und hält laut Hersteller mit den mitgelieferten Batterien bis zu fünf Jahre. Mit der Zentrale kommuniziert er über das verschlüsselte Funkprotokoll Jeweller, mit einer angegebenen Reichweite von bis zu 1.700 Metern im Freifeld. Die aktuelle Version entspricht <strong>EN 50131 Grad 2</strong>, dem europäischen Maßstab für Alarmanlagen im Wohnbereich.</p>
<p><strong>Stärken:</strong> Haustierimmunität, EN-50131-Konformität, hohe Zuverlässigkeit und Laufzeit, gesicherter Funk.<br><strong>Schwächen:</strong> Ajax-Zentrale erforderlich, kein Helligkeitssensor, für Lichtautomationen kaum geeignet.<br><strong>Für wen:</strong> wer eine ernsthafte Alarmanlage will, besonders mit Haustieren. Siehe auch unseren Ratgeber <a href="/de/blog/alarme-maison-sans-abonnement">Alarmanlage ohne Abo</a>.</p>

<p><strong>Weitere Optionen:</strong> Der <strong>Shelly BLU Motion</strong> (Bluetooth, CR2477-Zelle mit bis zu fünf Jahren angegebener Laufzeit, Helligkeitssensor) passt gut in eine bestehende Shelly-Installation; der <strong>SONOFF SNZB-06P</strong> ist ein Radar-Präsenzmelder mit Zigbee 3.0 und USB-C-Versorgung, beliebt bei Home-Assistant-Nutzern.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Modell</th><th>Technik</th><th>Verbindung</th><th>Stromversorgung</th><th>Helligkeitssensor</th><th>Preisklasse</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td>Aqara Motion and Light Sensor P2</td><td>PIR, 170°</td><td>Matter over Thread</td><td>2 × CR2450</td><td>Ja</td><td>Mittel</td><td>Lichtautomation über Ökosysteme hinweg</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>mmWave-Radar</td><td>WLAN 2,4 GHz</td><td>USB-C (Netz)</td><td>Ja</td><td>Oben</td><td>Ruhende Präsenz, Zonen, mehrere Personen</td></tr>
<tr><td>Philips Hue Motion Sensor</td><td>PIR, 120°</td><td>Zigbee (Hue Bridge)</td><td>2 × AAA</td><td>Ja + Temperatur</td><td>Mittel</td><td>Hue-Haushalte</td></tr>
<tr><td>IKEA MYGGSPRAY</td><td>PIR</td><td>Matter over Thread</td><td>2 × AAA</td><td>Ja (grob)</td><td>Einstieg</td><td>Kleines Budget, außen (IP67)</td></tr>
<tr><td>Eve Motion</td><td>PIR, 120°</td><td>Matter over Thread</td><td>2 × AAA</td><td>Ja</td><td>Mittel bis oben</td><td>Apple Home, geschützt außen (IPX3)</td></tr>
<tr><td>Ajax MotionProtect</td><td>PIR, haustierimmun</td><td>Jeweller (Ajax-Zentrale)</td><td>Batterie, bis 5 Jahre</td><td>Nein</td><td>Oben (+ Zentrale)</td><td>Einbruchalarm</td></tr>
</tbody>
</table>

<h2>Welche Preisklasse für welchen Zweck?</h2>
<ul>
<li><strong>Einstiegsklasse</strong> (IKEA MYGGSPRAY, Shelly BLU Motion): ideal, um viele Durchgangsbereiche auszustatten. Man akzeptiert ungenauere Helligkeitswerte.</li>
<li><strong>Mittelklasse</strong> (Aqara P2, Philips Hue, Eve Motion): die beste Balance aus Reichweite, Laufzeit, Verarbeitung und Integration – hier liegt das beste Preis-Leistungs-Verhältnis für Lichtautomationen.</li>
<li><strong>Oberklasse</strong> (Aqara FP2, Ajax MotionProtect): Man zahlt für eine bestimmte Fähigkeit, echte Präsenzerkennung oder Alarmkonformität. Nur dort einsetzen, wo sie gebraucht wird; bei Ajax kommt die Zentrale hinzu.</li>
</ul>

<h2>Fehler, die Sie vermeiden sollten</h2>
<ul>
<li><strong>PIR im Arbeits- oder Wohnzimmer:</strong> Das Licht geht aus, während Sie arbeiten. Besser ein mmWave-Sensor oder eine deutlich längere Nachlaufzeit.</li>
<li><strong>Thread-Border-Router vergessen:</strong> Ein Matter-over-Thread-Sensor verbindet sich nicht direkt mit dem WLAN.</li>
<li><strong>Automation mit Alarmanlage verwechseln:</strong> Ein Lichtsensor kann eine Benachrichtigung senden, ist aber weder zertifiziert noch sabotagesicher. Zum Schutz der Wohnung einen Melder nach EN 50131 wählen.</li>
<li><strong>Sensor auf Wärmequelle oder Fenster richten:</strong> Heizkörper, direkte Sonne oder Lüftungsauslässe verursachen beim PIR Fehlauslösungen.</li>
<li><strong>Haustiere ignorieren:</strong> Ohne Haustierimmunität löst Hund oder Katze bei jedem Gang den Alarm aus.</li>
</ul>

<h2>Montage und Nutzungstipps</h2>
<p>Ein PIR-Sensor erkennt Bewegungen <em>quer</em> zum Sichtfeld besser als direkt auf ihn zu: Montieren Sie ihn seitlich zum Laufweg, am besten in einer Raumecke, in 2 bis 2,5 Metern Höhe. Ein mmWave-Sensor kommt je nach gewünschter Funktion an Wand oder Decke (für die Sturzerkennung des FP2 an die Decke) und sollte nicht auf bewegte Objekte wie Ventilatoren oder Vorhänge zielen. Prüfen Sie den Erfassungsbereich in der App, bevor Sie die Halterung endgültig befestigen.</p>
<p>Zum Datenschutz: Ein Radar-Präsenzmelder zeichnet nichts auf, er überträgt weder Bild noch Ton und ist daher auch im Schlafzimmer oder Bad vertretbar. Die Sturzerkennung kann für ältere Menschen eine sinnvolle Ergänzung sein, ersetzt aber keinen Hausnotruf. Da diese Sensoren mit Batterie oder USB laufen, ist kein Eingriff in die Elektroinstallation nötig.</p>
<p>Mehr dazu in unserem <a href="/de/blog/guide-securite-maison-connectee-2026">Ratgeber zur smarten Haussicherheit</a>.</p>

<h2>Fazit</h2>
<p>Für die Lichtautomation in den meisten Räumen ist der <strong>Aqara Motion and Light Sensor P2</strong> der beste Allrounder: großer Winkel, Matter, Helligkeitssensor und lange Laufzeit. Bei knappem Budget oder für draußen erledigt der <strong>IKEA MYGGSPRAY</strong> das Wesentliche. Wo man lange stillsitzt, verändert der <strong>Aqara Presence Sensor FP2</strong> dank Radar das Erlebnis spürbar. Hue-Haushalte bleiben beim <strong>Philips Hue Motion Sensor</strong>, Apple-Home-Nutzer schätzen den <strong>Eve Motion</strong>, und für eine Alarmanlage mit Haustieren bleibt der <strong>Ajax MotionProtect</strong> die Referenz.</p>`,
    es: `<p>Para la mayoría de los hogares, el mejor sensor de movimiento inteligente en 2026 es el <strong>Aqara Motion and Light Sensor P2</strong>: un sensor infrarrojo (PIR) a pilas, compatible con Matter over Thread, con sensor de luminosidad integrado y una autonomía anunciada de hasta dos años. Si necesita saber que alguien sigue en la habitación aunque no se mueva, hay que pasar a un sensor de presencia por radar mmWave como el <strong>Aqara Presence Sensor FP2</strong>; y si lo que busca es una alarma antirrobo de verdad, un detector de grado alarma como el <strong>Ajax MotionProtect</strong> es la opción más segura.</p>
<p>Esta comparativa se basa en las fichas técnicas de los fabricantes, análisis independientes publicados y opiniones verificadas de compradores. Repasa seis modelos vendidos en Europa, explica la diferencia entre detección de movimiento y detección de presencia, y clasifica los sensores por gama en lugar de por precio. Encontrará toda nuestra selección en la sección <a href="/es/securite-maison/detecteurs-mouvement">detectores de movimiento</a>.</p>

<h2>Sensor de movimiento PIR o sensor de presencia mmWave: la verdadera diferencia</h2>
<p>Es la pregunta que condiciona todo lo demás. Las dos tecnologías no resuelven el mismo problema.</p>
<ul>
<li><strong>El PIR (infrarrojo pasivo)</strong> detecta variaciones de calor cuando un cuerpo cruza su campo de visión. Consume muy poco, por lo que puede funcionar con pilas durante meses o años. Su límite: solo ve el <em>movimiento</em>. Una persona sentada e inmóvil frente a una pantalla o leyendo acaba «desapareciendo», y la luz se apaga.</li>
<li><strong>El radar mmWave (ondas milimétricas)</strong> detecta micromovimientos, incluso la respiración. Sabe, por tanto, que una estancia está <em>ocupada</em> aunque nadie se mueva. Algunos modelos localizan a varias personas y dividen la habitación en zonas. A cambio, consume más: la mayoría de los sensores mmWave deben estar enchufados de forma permanente (USB-C).</li>
</ul>
<p>En la práctica, un PIR basta para pasillos, recibidores, escaleras, aseos o el garaje, donde solo se está de paso. Un sensor de presencia mmWave se justifica en un despacho, un salón, un baño o un dormitorio, donde se permanece mucho tiempo sin moverse.</p>

<h2>Criterios para elegir bien</h2>
<h3>1. Protocolo y ecosistema</h3>
<p>Un detector nunca funciona solo: activa una luz, una notificación o una sirena a través de un ecosistema. Los principales protocolos son <strong>Matter over Thread</strong> (compatible con Apple Casa, Google Home, Amazon Alexa y SmartThings, pero requiere un router de borde Thread), <strong>Zigbee</strong> (fiable pero ligado a un puente, como el Hue Bridge o el hub IKEA Dirigera), el <strong>Wi-Fi</strong> (sin hub, pero rara vez compatible con pilas) y el <strong>Bluetooth</strong>. Los sistemas de alarma como Ajax usan su propia radio. Para entender estos estándares, lea nuestra guía <a href="/es/blog/maison-connectee-matter-thread-2026">Matter y Thread</a>.</p>
<h3>2. Autonomía y alimentación</h3>
<p>Los sensores PIR a pilas anuncian de uno a cinco años según el modelo, la frecuencia de activación y el protocolo. Una buena autonomía evita subir a la escalera con frecuencia. Los sensores mmWave necesitan un enchufe cerca: conviene preverlo al elegir la ubicación.</p>
<h3>3. Sensor de luminosidad (lux)</h3>
<p>Imprescindible para la iluminación automática: evita que una lámpara se encienda en pleno día. La mayoría de los modelos recientes lo integran, con una precisión variable. Para saber si una habitación está clara u oscura, basta con un sensor aproximado.</p>
<h3>4. Inmunidad a mascotas</h3>
<p>Un punto que a menudo se pasa por alto. Un sensor de iluminación reacciona al gato o al perro, lo que rara vez es grave. Para una alarma, en cambio, es decisivo: hace falta un detector diseñado para ignorar animales hasta cierto peso y altura. Pocos sensores de consumo lo anuncian; los detectores de grado alarma, sí.</p>
<h3>5. Alcance, ángulo e índice de protección</h3>
<p>Entre 5 y 12 metros de alcance y de 90 a 170 grados de ángulo según el modelo. Para exterior o un baño, compruebe el índice IP: IPX3 tolera la lluvia bajo techo, IP67 soporta el exterior expuesto.</p>

<h2>Los 6 mejores sensores de movimiento y presencia en 2026</h2>

<h3>1. Aqara Motion and Light Sensor P2: la mejor opción global</h3>
<p>El P2 combina un sensor PIR de gran angular con un sensor de luz independiente. Aqara anuncia detección de hasta 7 metros en 170 grados horizontales, suficiente para cubrir una habitación entera desde una esquina. Funciona con <strong>Matter over Thread</strong>, por lo que se integra con Apple Casa, Google Home, Alexa o SmartThings sin hub Aqara, siempre que disponga de un router de borde Thread (Apple TV, HomePod mini, Nest Hub reciente, algunos Echo…). Se alimenta con dos pilas CR2450, con una autonomía anunciada de hasta dos años.</p>
<p><strong>Puntos fuertes:</strong> ángulo de detección muy amplio, Matter nativo, buena autonomía, diseño discreto.<br><strong>Limitaciones:</strong> solo PIR (no detecta a una persona inmóvil), sin inmunidad a mascotas anunciada, router Thread obligatorio.<br><strong>Para quién:</strong> quien quiera automatizar la luz de un pasillo, recibidor o cocina sin depender de un único ecosistema.</p>

<h3>2. Aqara Presence Sensor FP2: el mejor sensor de presencia</h3>
<p>El FP2 utiliza un radar mmWave capaz de detectar movimientos muy finos, incluida la respiración. Cubre hasta 40 m², puede dividir la estancia en 30 zonas, seguir hasta cinco personas a la vez e integra un sensor de luminosidad. Se conecta por Wi-Fi de 2,4 GHz, funciona con Apple Casa, Alexa, Google Home y Home Assistant sin hub y se alimenta por USB-C. Su clasificación IPX5 permite instalarlo en un baño. Aqara ofrece además una función de detección de caídas con montaje en el techo.</p>
<p><strong>Puntos fuertes:</strong> detección de presencia real, varias zonas, varias personas, sin pilas que cambiar.<br><strong>Limitaciones:</strong> debe estar siempre enchufado, configurar las zonas lleva más tiempo, gama alta.<br><strong>Para quién:</strong> despacho, salón, baño o cualquier estancia donde la luz no deba apagarse mientras lee.</p>

<h3>3. Philips Hue Motion Sensor: el más sencillo en el universo Hue</h3>
<p>El sensor de interior de Philips Hue sigue siendo la referencia para quien ya tiene bombillas Hue. Funciona por Zigbee mediante el Hue Bridge, detecta hasta 5 metros en 120 grados, incorpora un sensor de luz diurna y mide también la temperatura. Usa dos pilas AAA, con una autonomía anunciada de unos dos años. La app Hue permite definir escenas distintas según la hora (luz tenue por la noche, por ejemplo).</p>
<p><strong>Puntos fuertes:</strong> integración perfecta con la iluminación Hue, ajustes día/noche muy sencillos, pilas estándar.<br><strong>Limitaciones:</strong> Hue Bridge imprescindible, solo interior, menor alcance que el P2.<br><strong>Para quién:</strong> hogares ya equipados con Philips Hue que buscan una solución sin complicaciones.</p>

<h3>4. IKEA MYGGSPRAY: la mejor relación calidad-precio</h3>
<p>El MYGGSPRAY forma parte de la nueva gama Matter de IKEA. Es un sensor PIR compatible con <strong>Matter over Thread</strong>, con sensor de luminosidad, alimentado por dos pilas AAA (IKEA recomienda sus pilas recargables LADDA). Tiene homologación <strong>IP67</strong>, por lo que sirve tanto en interior como en exterior. Funciona con el hub IKEA Dirigera, pero también con Apple, Google, Amazon, Homey o SmartThings mediante un router de borde Thread. Análisis independientes publicados mencionan una detección frontal de unos 7 a 8 metros y un sensor de luz poco preciso, aunque suficiente para distinguir día y noche.</p>
<p><strong>Puntos fuertes:</strong> gama de entrada, Matter, IP67, pilas recargables estándar.<br><strong>Limitaciones:</strong> medición de luz aproximada, conexión Thread a veces caprichosa según los usuarios, solo PIR.<br><strong>Para quién:</strong> equipar varias estancias o un exterior con poco presupuesto. Su predecesor, el IKEA VALLHORN (Zigbee, IP44), sigue siendo una opción para usuarios de Dirigera.</p>

<h3>5. Eve Motion: la opción Apple Casa para interior y exterior resguardado</h3>
<p>El Eve Motion funciona con <strong>Matter over Thread</strong>, integra un sensor de luminosidad y tiene certificación <strong>IPX3</strong>, lo que permite instalarlo en exterior resguardado (bajo un porche, junto a una puerta). Eve anuncia un campo de 120 grados y un alcance de hasta 9 metros con montaje a 2 metros de altura. Funciona con dos pilas AAA y puede apoyarse o fijarse a la pared. Como todos los productos Eve, funciona en local, sin cuenta en la nube.</p>
<p><strong>Puntos fuertes:</strong> buen alcance, uso exterior resguardado, funcionamiento local que respeta la privacidad.<br><strong>Limitaciones:</strong> gama media-alta, algo voluminoso, router Thread obligatorio.<br><strong>Para quién:</strong> usuarios de Apple Casa que quieren un sensor fiable para una entrada, una terraza cubierta o un garaje.</p>

<h3>6. Ajax MotionProtect: el detector de grado alarma</h3>
<p>Cambio de categoría: el MotionProtect es un detector de intrusión diseñado para los sistemas de alarma Ajax. Ignora mascotas de hasta <strong>20 kg y 50 cm de altura</strong>, detecta hasta 12 metros y anuncia hasta cinco años de autonomía con las pilas incluidas. Se comunica con la central mediante el protocolo de radio cifrado Jeweller, con un alcance anunciado de hasta 1.700 metros en campo abierto. La versión actual cumple la norma <strong>EN 50131 Grado 2</strong>, la referencia europea para alarmas residenciales.</p>
<p><strong>Puntos fuertes:</strong> inmunidad a mascotas, conformidad EN 50131, gran fiabilidad y autonomía, radio segura.<br><strong>Limitaciones:</strong> requiere una central Ajax, sin sensor de luz, poco adecuado para automatizar la iluminación.<br><strong>Para quién:</strong> quien quiera una alarma seria, sobre todo con mascotas en casa. Vea también nuestra guía de <a href="/es/blog/alarme-maison-sans-abonnement">alarmas sin suscripción</a>.</p>

<p><strong>Otras opciones a tener en cuenta:</strong> el <strong>Shelly BLU Motion</strong> (Bluetooth, pila CR2477 con hasta cinco años anunciados, sensor de luz) encaja bien en una instalación Shelly existente; el <strong>SONOFF SNZB-06P</strong> es un sensor de presencia por radar en Zigbee 3.0, alimentado por USB-C, muy apreciado por los usuarios de Home Assistant.</p>

<h2>Tabla comparativa</h2>
<table>
<thead>
<tr><th>Modelo</th><th>Tecnología</th><th>Conectividad</th><th>Alimentación</th><th>Sensor de luz</th><th>Gama</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td>Aqara Motion and Light Sensor P2</td><td>PIR, 170°</td><td>Matter over Thread</td><td>2 pilas CR2450</td><td>Sí</td><td>Media</td><td>Iluminación automática multiecosistema</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Radar mmWave</td><td>Wi-Fi 2,4 GHz</td><td>USB-C (red)</td><td>Sí</td><td>Alta</td><td>Presencia inmóvil, zonas, varias personas</td></tr>
<tr><td>Philips Hue Motion Sensor</td><td>PIR, 120°</td><td>Zigbee (Hue Bridge)</td><td>2 pilas AAA</td><td>Sí + temperatura</td><td>Media</td><td>Hogares con Hue</td></tr>
<tr><td>IKEA MYGGSPRAY</td><td>PIR</td><td>Matter over Thread</td><td>2 pilas AAA</td><td>Sí (aproximado)</td><td>Entrada</td><td>Presupuesto ajustado, exterior (IP67)</td></tr>
<tr><td>Eve Motion</td><td>PIR, 120°</td><td>Matter over Thread</td><td>2 pilas AAA</td><td>Sí</td><td>Media-alta</td><td>Apple Casa, exterior resguardado (IPX3)</td></tr>
<tr><td>Ajax MotionProtect</td><td>PIR, inmune a mascotas</td><td>Jeweller (central Ajax)</td><td>Pila, hasta 5 años</td><td>No</td><td>Alta (+ central)</td><td>Alarma antiintrusión</td></tr>
</tbody>
</table>

<h2>¿Qué gama para qué uso?</h2>
<ul>
<li><strong>Gama de entrada</strong> (IKEA MYGGSPRAY, Shelly BLU Motion): perfecta para multiplicar sensores en zonas de paso. Se acepta una medición de luz menos precisa.</li>
<li><strong>Gama media</strong> (Aqara P2, Philips Hue, Eve Motion): el mejor equilibrio entre alcance, autonomía, acabados e integración. Aquí está la mejor relación calidad-precio para la iluminación automática.</li>
<li><strong>Gama alta</strong> (Aqara FP2, Ajax MotionProtect): se paga una función concreta, la detección de presencia real o la conformidad de alarma. Resérvela para las estancias o usos que lo exijan; con Ajax hay que sumar la central.</li>
</ul>

<h2>Errores que debe evitar</h2>
<ul>
<li><strong>Usar un PIR en un despacho o salón:</strong> la luz se apagará mientras trabaja. Elija un sensor mmWave o alargue bastante el tiempo de apagado.</li>
<li><strong>Olvidar el router Thread:</strong> un sensor Matter over Thread no se conecta directamente al Wi-Fi.</li>
<li><strong>Confundir automatización y alarma:</strong> un sensor de iluminación puede enviar una notificación, pero no está certificado ni diseñado contra el sabotaje. Para proteger una vivienda, elija un detector conforme a EN 50131.</li>
<li><strong>Apuntar el sensor a una fuente de calor o una ventana:</strong> radiadores, sol directo o rejillas de ventilación provocan falsas detecciones con un PIR.</li>
<li><strong>Olvidar a las mascotas:</strong> sin inmunidad a mascotas, un perro o un gato disparará la alarma a cada paso.</li>
</ul>

<h2>Instalación y consejos de uso</h2>
<p>Un PIR detecta mejor un movimiento que <em>cruza</em> su campo que uno que va directo hacia él: colóquelo de lado respecto al paso, idealmente en una esquina, a entre 2 y 2,5 metros de altura. Un sensor mmWave se fija en pared o techo según las funciones deseadas (el techo es necesario para la detección de caídas del FP2) y debe evitar objetos en movimiento como ventiladores o cortinas. Compruebe la zona cubierta en la app antes de fijar definitivamente el soporte.</p>
<p>En cuanto a privacidad y seguridad, un sensor de presencia por radar no graba nada: no transmite imagen ni sonido, por lo que es aceptable en un dormitorio o un baño. La detección de caídas puede ser un complemento útil para una persona mayor, pero no sustituye a un servicio de teleasistencia. Por último, estos sensores funcionan con pilas o USB: no requieren ninguna intervención en la instalación eléctrica.</p>
<p>Para saber más, consulte nuestra <a href="/es/blog/guide-securite-maison-connectee-2026">guía de seguridad del hogar conectado</a>.</p>

<h2>Veredicto</h2>
<p>Para automatizar la iluminación de la mayoría de las estancias, el <strong>Aqara Motion and Light Sensor P2</strong> ofrece el mejor equilibrio: gran angular, Matter, sensor de luz y larga autonomía. Con poco presupuesto o para exterior, el <strong>IKEA MYGGSPRAY</strong> cumple con lo esencial. Donde se permanece inmóvil mucho tiempo, el <strong>Aqara Presence Sensor FP2</strong> cambia de verdad la experiencia gracias al radar. Los hogares con Hue seguirán con el <strong>Philips Hue Motion Sensor</strong>, los usuarios de Apple Casa apreciarán el <strong>Eve Motion</strong> y, para una alarma con mascotas, el <strong>Ajax MotionProtect</strong> sigue siendo la referencia.</p>`,
    it: `<p>Per la maggior parte delle case, il miglior sensore di movimento smart nel 2026 è l'<strong>Aqara Motion and Light Sensor P2</strong>: un sensore a infrarossi (PIR) a batteria, compatibile Matter over Thread, con sensore di luminosità integrato e un'autonomia dichiarata fino a due anni. Se volete sapere che una persona è ancora nella stanza anche quando resta immobile, serve un sensore di presenza radar mmWave come l'<strong>Aqara Presence Sensor FP2</strong>; e se l'obiettivo è un vero antifurto, un rilevatore di livello allarme come l'<strong>Ajax MotionProtect</strong> resta la scelta più sicura.</p>
<p>Questo confronto si basa sulle schede tecniche dei produttori, su recensioni indipendenti pubblicate e sui riscontri verificati degli acquirenti. Esamina sei modelli venduti in Europa, spiega la differenza tra rilevamento del movimento e rilevamento della presenza e classifica i sensori per fascia anziché per prezzo. Trovate tutta la nostra selezione nella sezione <a href="/it/securite-maison/detecteurs-mouvement">sensori di movimento</a>.</p>

<h2>Sensore di movimento PIR o sensore di presenza mmWave: la vera differenza</h2>
<p>È la domanda da cui dipende tutto il resto. Le due tecnologie non rispondono alla stessa esigenza.</p>
<ul>
<li><strong>Il PIR (infrarosso passivo)</strong> rileva le variazioni di calore quando un corpo attraversa il suo campo visivo. Consuma pochissimo, quindi può funzionare a batteria per mesi o anni. Il limite: vede solo il <em>movimento</em>. Chi è seduto immobile davanti a uno schermo o sta leggendo finisce per «sparire», e la luce si spegne.</li>
<li><strong>Il radar mmWave (onde millimetriche)</strong> rileva micromovimenti, fino al respiro. Sa quindi che una stanza è <em>occupata</em>, anche senza gesti. Alcuni modelli localizzano più persone e suddividono la stanza in zone. In cambio consuma di più: la maggior parte dei sensori mmWave deve restare alimentata in modo permanente (USB-C).</li>
</ul>
<p>In pratica, un PIR basta per corridoi, ingressi, scale, bagni di servizio o garage, dove si passa soltanto. Un sensore di presenza mmWave ha senso in uno studio, un soggiorno, un bagno o una camera, dove si resta a lungo senza muoversi.</p>

<h2>I criteri per scegliere bene</h2>
<h3>1. Protocollo ed ecosistema</h3>
<p>Un sensore non lavora mai da solo: attiva una luce, una notifica o una sirena tramite un ecosistema. I protocolli principali sono <strong>Matter over Thread</strong> (compatibile con Apple Casa, Google Home, Amazon Alexa e SmartThings, ma richiede un border router Thread), <strong>Zigbee</strong> (affidabile ma legato a un bridge, come l'Hue Bridge o l'hub IKEA Dirigera), il <strong>Wi-Fi</strong> (senza hub, ma raramente compatibile con la batteria) e il <strong>Bluetooth</strong>. I sistemi d'allarme come Ajax usano una radio proprietaria. Per capire questi standard, leggete la nostra guida <a href="/it/blog/maison-connectee-matter-thread-2026">Matter e Thread</a>.</p>
<h3>2. Autonomia e alimentazione</h3>
<p>I sensori PIR a batteria dichiarano da uno a cinque anni a seconda del modello, della frequenza di attivazione e del protocollo. Un'autonomia elevata evita di salire spesso sulla scala. I sensori mmWave richiedono una presa vicina: da prevedere quando si sceglie la posizione.</p>
<h3>3. Sensore di luminosità (lux)</h3>
<p>Indispensabile per l'illuminazione automatica: evita di accendere una lampada in pieno giorno. Quasi tutti i modelli recenti lo integrano, con precisione variabile. Per capire se una stanza è chiara o buia, basta anche un sensore approssimativo.</p>
<h3>4. Immunità agli animali</h3>
<p>Un aspetto spesso trascurato. Un sensore per l'illuminazione reagisce al gatto o al cane, cosa raramente grave. Per un allarme è invece decisivo: serve un rilevatore progettato per ignorare gli animali fino a un certo peso e una certa altezza. Pochi sensori consumer lo dichiarano; i rilevatori di livello allarme sì.</p>
<h3>5. Portata, angolo e grado di protezione</h3>
<p>Da 5 a 12 metri di portata e da 90 a 170 gradi di angolo a seconda del modello. Per l'esterno o il bagno, controllate il grado IP: IPX3 tollera la pioggia al riparo, IP67 regge l'esterno esposto.</p>

<h2>I 6 migliori sensori di movimento e presenza nel 2026</h2>

<h3>1. Aqara Motion and Light Sensor P2 – la migliore scelta complessiva</h3>
<p>Il P2 abbina un sensore PIR grandangolare a un sensore di luminosità indipendente. Aqara dichiara un rilevamento fino a 7 metri su 170 gradi in orizzontale, sufficiente a coprire un'intera stanza da un angolo. Comunica in <strong>Matter over Thread</strong> e funziona quindi con Apple Casa, Google Home, Alexa o SmartThings senza hub Aqara, purché sia presente un border router Thread (Apple TV, HomePod mini, Nest Hub recente, alcuni Echo…). È alimentato da due pile CR2450, con un'autonomia dichiarata fino a due anni.</p>
<p><strong>Punti di forza:</strong> angolo di rilevamento molto ampio, Matter nativo, buona autonomia, design discreto.<br><strong>Limiti:</strong> solo PIR (non rileva una persona immobile), nessuna immunità agli animali dichiarata, border router Thread obbligatorio.<br><strong>Per chi:</strong> chi vuole automatizzare la luce di corridoio, ingresso o cucina senza legarsi a un solo ecosistema.</p>

<h3>2. Aqara Presence Sensor FP2 – il miglior sensore di presenza</h3>
<p>L'FP2 usa un radar mmWave in grado di rilevare movimenti molto fini, fino al respiro. Copre fino a 40 m², può suddividere la stanza in 30 zone, seguire fino a cinque persone contemporaneamente e integra un sensore di luminosità. Si collega in Wi-Fi a 2,4 GHz, funziona con Apple Casa, Alexa, Google Home e Home Assistant senza hub ed è alimentato via USB-C. La certificazione IPX5 ne consente l'uso in bagno. Aqara offre anche una funzione di rilevamento delle cadute con installazione a soffitto.</p>
<p><strong>Punti di forza:</strong> vero rilevamento di presenza, zone multiple, più persone, nessuna pila da cambiare.<br><strong>Limiti:</strong> deve restare alimentato, configurazione delle zone più lunga, fascia alta.<br><strong>Per chi:</strong> studio, soggiorno, bagno o qualsiasi stanza in cui la luce non deve spegnersi mentre leggete.</p>

<h3>3. Philips Hue Motion Sensor – il più semplice nel mondo Hue</h3>
<p>Il sensore da interno di Philips Hue resta il riferimento per chi possiede già lampadine Hue. Funziona in Zigbee tramite l'Hue Bridge, rileva fino a 5 metri su 120 gradi, integra un sensore di luce diurna e misura anche la temperatura. Usa due pile AAA, con un'autonomia dichiarata di circa due anni. L'app Hue permette di impostare scene diverse in base all'ora (luce soffusa di notte, per esempio).</p>
<p><strong>Punti di forza:</strong> integrazione perfetta con l'illuminazione Hue, impostazioni giorno/notte molto semplici, pile standard.<br><strong>Limiti:</strong> Hue Bridge indispensabile, solo interno, portata inferiore al P2.<br><strong>Per chi:</strong> le case già dotate di Philips Hue che vogliono una soluzione senza complicazioni.</p>

<h3>4. IKEA MYGGSPRAY – il miglior rapporto qualità-prezzo</h3>
<p>Il MYGGSPRAY fa parte della nuova gamma Matter di IKEA. È un sensore PIR compatibile <strong>Matter over Thread</strong>, con sensore di luminosità, alimentato da due pile AAA (IKEA consiglia le sue ricaricabili LADDA). È omologato <strong>IP67</strong>, quindi adatto sia all'interno sia all'esterno. Funziona con l'hub IKEA Dirigera, ma anche con Apple, Google, Amazon, Homey o SmartThings tramite un border router Thread. Recensioni indipendenti pubblicate riportano un rilevamento frontale di circa 7-8 metri e un sensore di luce poco preciso, sufficiente però a distinguere il giorno dalla notte.</p>
<p><strong>Punti di forza:</strong> fascia d'ingresso, Matter, IP67, pile ricaricabili standard.<br><strong>Limiti:</strong> misura della luce approssimativa, connessione Thread a volte capricciosa secondo gli utenti, solo PIR.<br><strong>Per chi:</strong> chi vuole attrezzare più stanze o un esterno con un budget ridotto. Il predecessore, l'IKEA VALLHORN (Zigbee, IP44), resta un'opzione per chi usa Dirigera.</p>

<h3>5. Eve Motion – la scelta Apple Casa per interno ed esterno riparato</h3>
<p>L'Eve Motion funziona in <strong>Matter over Thread</strong>, integra un sensore di luminosità ed è certificato <strong>IPX3</strong>, quindi installabile all'esterno in un punto riparato (sotto una tettoia, accanto a una porta). Eve dichiara un campo visivo di 120 gradi e una portata fino a 9 metri con installazione a 2 metri d'altezza. Funziona con due pile AAA e può essere appoggiato o fissato a parete. Come tutti i prodotti Eve, opera in locale, senza account cloud.</p>
<p><strong>Punti di forza:</strong> buona portata, uso esterno riparato, funzionamento locale rispettoso della privacy.<br><strong>Limiti:</strong> fascia media-alta, più ingombrante, border router Thread obbligatorio.<br><strong>Per chi:</strong> gli utenti Apple Casa che vogliono un sensore affidabile per un ingresso, una terrazza coperta o un garage.</p>

<h3>6. Ajax MotionProtect – il rilevatore di livello allarme</h3>
<p>Cambio di categoria: il MotionProtect è un rilevatore antintrusione pensato per i sistemi d'allarme Ajax. Ignora gli animali fino a <strong>20 kg e 50 cm di altezza</strong>, rileva fino a 12 metri e dichiara fino a cinque anni di autonomia con le batterie in dotazione. Comunica con la centrale tramite il protocollo radio cifrato Jeweller, con una portata dichiarata fino a 1.700 metri in campo aperto. La versione attuale è conforme alla norma <strong>EN 50131 Grado 2</strong>, il riferimento europeo per gli allarmi residenziali.</p>
<p><strong>Punti di forza:</strong> immunità agli animali, conformità EN 50131, elevata affidabilità e autonomia, radio sicura.<br><strong>Limiti:</strong> richiede una centrale Ajax, nessun sensore di luce, poco adatto all'automazione dell'illuminazione.<br><strong>Per chi:</strong> chi vuole un allarme serio, soprattutto con animali in casa. Vedi anche la nostra guida all'<a href="/it/blog/alarme-maison-sans-abonnement">allarme casa senza abbonamento</a>.</p>

<p><strong>Altre opzioni da conoscere:</strong> lo <strong>Shelly BLU Motion</strong> (Bluetooth, pila CR2477 con autonomia dichiarata fino a cinque anni, sensore di luce) si inserisce bene in un impianto Shelly esistente; il <strong>SONOFF SNZB-06P</strong> è un sensore di presenza radar Zigbee 3.0 alimentato via USB-C, apprezzato dagli utenti di Home Assistant.</p>

<h2>Tabella comparativa</h2>
<table>
<thead>
<tr><th>Modello</th><th>Tecnologia</th><th>Connettività</th><th>Alimentazione</th><th>Sensore di luce</th><th>Fascia</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td>Aqara Motion and Light Sensor P2</td><td>PIR, 170°</td><td>Matter over Thread</td><td>2 pile CR2450</td><td>Sì</td><td>Media</td><td>Illuminazione automatica multi-ecosistema</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>Radar mmWave</td><td>Wi-Fi 2,4 GHz</td><td>USB-C (rete)</td><td>Sì</td><td>Alta</td><td>Presenza immobile, zone, più persone</td></tr>
<tr><td>Philips Hue Motion Sensor</td><td>PIR, 120°</td><td>Zigbee (Hue Bridge)</td><td>2 pile AAA</td><td>Sì + temperatura</td><td>Media</td><td>Case con Hue</td></tr>
<tr><td>IKEA MYGGSPRAY</td><td>PIR</td><td>Matter over Thread</td><td>2 pile AAA</td><td>Sì (approssimativo)</td><td>Ingresso</td><td>Budget ridotto, esterno (IP67)</td></tr>
<tr><td>Eve Motion</td><td>PIR, 120°</td><td>Matter over Thread</td><td>2 pile AAA</td><td>Sì</td><td>Media-alta</td><td>Apple Casa, esterno riparato (IPX3)</td></tr>
<tr><td>Ajax MotionProtect</td><td>PIR, immune agli animali</td><td>Jeweller (centrale Ajax)</td><td>Batteria, fino a 5 anni</td><td>No</td><td>Alta (+ centrale)</td><td>Allarme antintrusione</td></tr>
</tbody>
</table>

<h2>Quale fascia per quale uso?</h2>
<ul>
<li><strong>Fascia d'ingresso</strong> (IKEA MYGGSPRAY, Shelly BLU Motion): perfetta per moltiplicare i sensori nelle zone di passaggio. Si accetta una misura della luce meno precisa.</li>
<li><strong>Fascia media</strong> (Aqara P2, Philips Hue, Eve Motion): il miglior equilibrio tra portata, autonomia, finiture e integrazione. Qui si trova il miglior rapporto qualità-prezzo per l'illuminazione automatica.</li>
<li><strong>Fascia alta</strong> (Aqara FP2, Ajax MotionProtect): si paga una funzione precisa, il vero rilevamento di presenza o la conformità per allarmi. Da riservare alle stanze o agli usi che lo richiedono; con Ajax va considerata anche la centrale.</li>
</ul>

<h2>Gli errori da evitare</h2>
<ul>
<li><strong>Usare un PIR in uno studio o in soggiorno:</strong> la luce si spegnerà mentre lavorate. Scegliete un sensore mmWave o allungate molto il ritardo di spegnimento.</li>
<li><strong>Dimenticare il border router Thread:</strong> un sensore Matter over Thread non si collega direttamente al Wi-Fi.</li>
<li><strong>Confondere automazione e allarme:</strong> un sensore per l'illuminazione può inviare una notifica, ma non è certificato né progettato contro il sabotaggio. Per proteggere la casa, scegliete un rilevatore conforme EN 50131.</li>
<li><strong>Puntare il sensore verso una fonte di calore o una finestra:</strong> termosifoni, sole diretto o bocchette di ventilazione causano falsi rilevamenti con un PIR.</li>
<li><strong>Ignorare gli animali:</strong> senza immunità agli animali, un cane o un gatto farà scattare l'allarme a ogni passaggio.</li>
</ul>

<h2>Installazione e consigli d'uso</h2>
<p>Un PIR rileva meglio un movimento che <em>attraversa</em> il suo campo rispetto a uno che va dritto verso di lui: posizionatelo di lato rispetto al passaggio, idealmente in un angolo, tra 2 e 2,5 metri di altezza. Un sensore mmWave si fissa a parete o a soffitto in base alle funzioni desiderate (il soffitto è necessario per il rilevamento delle cadute dell'FP2) e non deve puntare verso oggetti in movimento come ventilatori o tende. Verificate l'area coperta nell'app prima di fissare definitivamente il supporto.</p>
<p>Quanto a privacy e sicurezza, un sensore di presenza radar non registra nulla: non trasmette immagini né suoni, ed è quindi accettabile in camera da letto o in bagno. Il rilevamento delle cadute può essere un utile complemento per una persona anziana, ma non sostituisce un servizio di telesoccorso. Infine, questi sensori funzionano a batteria o via USB: nessun intervento sull'impianto elettrico è necessario.</p>
<p>Per approfondire, consultate la nostra <a href="/it/blog/guide-securite-maison-connectee-2026">guida alla sicurezza della casa connessa</a>.</p>

<h2>Verdetto</h2>
<p>Per automatizzare l'illuminazione nella maggior parte delle stanze, l'<strong>Aqara Motion and Light Sensor P2</strong> offre il miglior compromesso: grandangolo, Matter, sensore di luce e lunga autonomia. Con un budget ridotto o per l'esterno, l'<strong>IKEA MYGGSPRAY</strong> fa l'essenziale. Dove si resta immobili a lungo, l'<strong>Aqara Presence Sensor FP2</strong> cambia davvero l'esperienza grazie al radar. Chi ha già Hue resterà con il <strong>Philips Hue Motion Sensor</strong>, gli utenti Apple Casa apprezzeranno l'<strong>Eve Motion</strong> e, per un allarme con animali in casa, l'<strong>Ajax MotionProtect</strong> resta il riferimento.</p>`,
    nl: `<p>Voor de meeste huishoudens is de <strong>Aqara Motion and Light Sensor P2</strong> in 2026 de beste slimme bewegingssensor: een infraroodsensor (PIR) op batterijen, met Matter over Thread, een ingebouwde lichtsensor en een opgegeven batterijduur tot twee jaar. Wilt u weten dat er nog iemand in de kamer is, ook als die stilzit, kies dan een mmWave-radar-aanwezigheidssensor zoals de <strong>Aqara Presence Sensor FP2</strong>; en zoekt u eigenlijk een inbraakalarm, dan is een detector van alarmkwaliteit zoals de <strong>Ajax MotionProtect</strong> de veiligste keuze.</p>
<p>Deze vergelijking is gebaseerd op fabrieksspecificaties, gepubliceerde onafhankelijke reviews en geverifieerde kopersbeoordelingen. Ze bespreekt zes modellen die in Europa te koop zijn, legt het verschil uit tussen bewegingsdetectie en aanwezigheidsdetectie, en deelt de sensoren in per prijsklasse in plaats van per prijs. Onze volledige selectie vindt u in de rubriek <a href="/nl/securite-maison/detecteurs-mouvement">bewegingssensoren</a>.</p>

<h2>PIR-bewegingssensor of mmWave-aanwezigheidssensor: het echte verschil</h2>
<p>Dit is de vraag die al het andere bepaalt. De twee technologieën lossen verschillende problemen op.</p>
<ul>
<li><strong>PIR (passief infrarood)</strong> registreert warmteveranderingen wanneer een lichaam het gezichtsveld doorkruist. Het verbruik is heel laag, waardoor PIR-sensoren maanden of jaren op batterijen werken. Het nadeel: ze zien alleen <em>beweging</em>. Wie stil achter een scherm zit of op de bank leest, „verdwijnt” na een tijdje en het licht gaat uit.</li>
<li><strong>mmWave-radar (millimetergolven)</strong> detecteert minieme bewegingen, tot de ademhaling toe. Het weet dus dat een ruimte <em>bezet</em> is, ook zonder gebaren. Sommige modellen volgen meerdere personen en verdelen de kamer in zones. Daar staat een hoger verbruik tegenover: de meeste mmWave-sensoren moeten permanent stroom krijgen (USB-C).</li>
</ul>
<p>In de praktijk volstaat een PIR-sensor voor gang, hal, trap, toilet of garage, waar u alleen doorloopt. Een mmWave-aanwezigheidssensor loont in een thuiskantoor, woonkamer, badkamer of slaapkamer, waar u lang stil blijft.</p>

<h2>Waar let u op bij het kiezen?</h2>
<h3>1. Protocol en ecosysteem</h3>
<p>Een sensor werkt nooit alleen: hij schakelt via een ecosysteem een lamp, een melding of een sirene. De belangrijkste protocollen zijn <strong>Matter over Thread</strong> (werkt met Apple Woning, Google Home, Amazon Alexa en SmartThings, maar vereist een Thread-borderrouter), <strong>Zigbee</strong> (betrouwbaar maar gebonden aan een bridge, zoals de Hue Bridge of de IKEA Dirigera-hub), <strong>wifi</strong> (geen hub, maar zelden geschikt voor batterijvoeding) en <strong>Bluetooth</strong>. Alarmsystemen zoals Ajax gebruiken een eigen radioprotocol. Meer uitleg in onze gids <a href="/nl/blog/maison-connectee-matter-thread-2026">Matter en Thread</a>.</p>
<h3>2. Batterijduur en voeding</h3>
<p>PIR-sensoren op batterijen worden opgegeven met één tot vijf jaar, afhankelijk van model, aantal activeringen en protocol. Een lange batterijduur scheelt vaak de ladder op. mmWave-sensoren hebben een stopcontact in de buurt nodig: houd daar rekening mee bij de plaatsing.</p>
<h3>3. Lichtsensor (lux)</h3>
<p>Onmisbaar voor lichtautomatiseringen: zo gaat een lamp niet aan op klaarlichte dag. De meeste recente modellen hebben er een, met wisselende nauwkeurigheid. Om licht en donker te onderscheiden volstaat ook een grove sensor.</p>
<h3>4. Huisdierimmuniteit</h3>
<p>Wordt vaak vergeten. Een lichtsensor reageert op kat of hond, wat zelden een probleem is. Voor een alarm is het doorslaggevend: dan hebt u een detector nodig die dieren tot een bepaald gewicht en een bepaalde hoogte negeert. Weinig consumentensensoren beloven dat; alarmdetectoren wel.</p>
<h3>5. Bereik, hoek en beschermingsgraad</h3>
<p>Afhankelijk van het model 5 tot 12 meter bereik en 90 tot 170 graden detectiehoek. Voor buiten of de badkamer telt de IP-klasse: IPX3 verdraagt regen op een beschutte plek, IP67 kan tegen onbeschut buitengebruik.</p>

<h2>De 6 beste bewegings- en aanwezigheidssensoren van 2026</h2>

<h3>1. Aqara Motion and Light Sensor P2 – beste keuze overall</h3>
<p>De P2 combineert een groothoek-PIR-sensor met een aparte lichtsensor. Aqara geeft detectie tot 7 meter over 170 graden horizontaal op, genoeg om vanuit een hoek een hele kamer te dekken. Hij werkt via <strong>Matter over Thread</strong> en dus zonder Aqara-hub met Apple Woning, Google Home, Alexa of SmartThings, mits u een Thread-borderrouter hebt (Apple TV, HomePod mini, recente Nest Hub, sommige Echo-apparaten…). Hij werkt op twee CR2450-knoopcellen, met een opgegeven batterijduur tot twee jaar.</p>
<p><strong>Sterke punten:</strong> zeer brede detectiehoek, native Matter, goede batterijduur, onopvallend ontwerp.<br><strong>Beperkingen:</strong> alleen PIR (ziet geen stilzittende persoon), geen opgegeven huisdierimmuniteit, Thread-borderrouter vereist.<br><strong>Voor wie:</strong> iedereen die het licht in gang, hal of keuken wil automatiseren zonder vast te zitten aan één ecosysteem.</p>

<h3>2. Aqara Presence Sensor FP2 – beste aanwezigheidssensor</h3>
<p>De FP2 gebruikt mmWave-radar die heel fijne bewegingen waarneemt, tot de ademhaling toe. Hij dekt tot 40 m², kan de kamer in 30 zones verdelen, tot vijf personen tegelijk volgen en heeft een lichtsensor. Hij verbindt via 2,4 GHz-wifi, werkt zonder hub met Apple Woning, Alexa, Google Home en Home Assistant en krijgt stroom via USB-C. Dankzij IPX5 kan hij ook in de badkamer. Aqara biedt bovendien valdetectie bij plafondmontage.</p>
<p><strong>Sterke punten:</strong> echte aanwezigheidsdetectie, meerdere zones, meerdere personen, geen batterijen vervangen.<br><strong>Beperkingen:</strong> moet altijd stroom hebben, zones instellen kost meer tijd, hogere prijsklasse.<br><strong>Voor wie:</strong> thuiskantoor, woonkamer, badkamer of elke ruimte waar het licht niet uit mag gaan terwijl u leest.</p>

<h3>3. Philips Hue Motion Sensor – het eenvoudigst binnen Hue</h3>
<p>De binnensensor van Philips Hue blijft de logische keuze als u al Hue-lampen hebt. Hij werkt via Zigbee met de Hue Bridge, detecteert tot 5 meter over 120 graden, heeft een daglichtsensor en meet ook de temperatuur. Twee AAA-batterijen gaan volgens de fabrikant ongeveer twee jaar mee. In de Hue-app stelt u eenvoudig verschillende scènes per tijdstip in, bijvoorbeeld gedimd licht 's nachts.</p>
<p><strong>Sterke punten:</strong> naadloos met Hue-verlichting, heel eenvoudige dag/nacht-instellingen, standaardbatterijen.<br><strong>Beperkingen:</strong> Hue Bridge vereist, alleen voor binnen, kleiner bereik dan de P2.<br><strong>Voor wie:</strong> huishoudens met Philips Hue die een oplossing zonder gedoe willen.</p>

<h3>4. IKEA MYGGSPRAY – beste prijs-kwaliteitverhouding</h3>
<p>De MYGGSPRAY hoort bij de nieuwe Matter-reeks van IKEA. Het is een PIR-sensor met <strong>Matter over Thread</strong> en lichtsensor, gevoed door twee AAA-batterijen (IKEA raadt de oplaadbare LADDA-batterijen aan). Met een <strong>IP67</strong>-classificatie is hij geschikt voor binnen en buiten. Hij werkt met de IKEA Dirigera-hub, maar via een Thread-borderrouter ook met Apple, Google, Amazon, Homey of SmartThings. Gepubliceerde onafhankelijke reviews noemen een frontale detectie van ongeveer 7 tot 8 meter en een niet erg nauwkeurige lichtsensor, die wel volstaat om dag en nacht te onderscheiden.</p>
<p><strong>Sterke punten:</strong> instapklasse, Matter, IP67, standaard oplaadbare batterijen.<br><strong>Beperkingen:</strong> grove lichtmeting, Thread-verbinding volgens gebruikers soms wispelturig, alleen PIR.<br><strong>Voor wie:</strong> wie meerdere kamers of een buitenruimte voordelig wil uitrusten. De voorganger, de IKEA VALLHORN (Zigbee, IP44), blijft een optie voor Dirigera-gebruikers.</p>

<h3>5. Eve Motion – de Apple Woning-keuze voor binnen en beschut buiten</h3>
<p>De Eve Motion werkt via <strong>Matter over Thread</strong>, heeft een lichtsensor en is <strong>IPX3</strong>-gecertificeerd, zodat hij buiten op een beschutte plek kan (onder een afdak, naast de voordeur). Eve geeft een gezichtsveld van 120 graden en een bereik tot 9 meter bij montage op 2 meter hoogte op. Hij werkt op twee AAA-batterijen en kan vrij staan of aan de muur hangen. Zoals alle Eve-producten werkt hij lokaal, zonder cloudaccount.</p>
<p><strong>Sterke punten:</strong> goed bereik, beschut buitengebruik, lokale werking die privacy respecteert.<br><strong>Beperkingen:</strong> midden- tot hogere prijsklasse, wat groter, Thread-borderrouter vereist.<br><strong>Voor wie:</strong> Apple Woning-gebruikers die een betrouwbare sensor willen voor een entree, overdekt terras of garage.</p>

<h3>6. Ajax MotionProtect – detector van alarmkwaliteit</h3>
<p>Een andere categorie: de MotionProtect is een inbraakdetector voor Ajax-alarmsystemen. Hij negeert huisdieren tot <strong>20 kg en 50 cm hoog</strong>, detecteert tot 12 meter en gaat volgens de fabrikant tot vijf jaar mee op de meegeleverde batterijen. Hij communiceert met de centrale via het versleutelde radioprotocol Jeweller, met een opgegeven bereik tot 1.700 meter in open veld. De huidige versie voldoet aan <strong>EN 50131 Graad 2</strong>, de Europese maatstaf voor woningalarmen.</p>
<p><strong>Sterke punten:</strong> huisdierimmuniteit, conform EN 50131, hoge betrouwbaarheid en batterijduur, beveiligde radio.<br><strong>Beperkingen:</strong> vereist een Ajax-centrale, geen lichtsensor, weinig geschikt voor lichtautomatisering.<br><strong>Voor wie:</strong> wie een serieus alarm wil, zeker met huisdieren. Zie ook onze gids over <a href="/nl/blog/alarme-maison-sans-abonnement">een alarm zonder abonnement</a>.</p>

<p><strong>Andere opties:</strong> de <strong>Shelly BLU Motion</strong> (Bluetooth, CR2477-cel met opgegeven batterijduur tot vijf jaar, lichtsensor) past goed in een bestaande Shelly-installatie; de <strong>SONOFF SNZB-06P</strong> is een radar-aanwezigheidssensor met Zigbee 3.0 en USB-C-voeding, populair bij Home Assistant-gebruikers.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Model</th><th>Technologie</th><th>Connectiviteit</th><th>Voeding</th><th>Lichtsensor</th><th>Prijsklasse</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td>Aqara Motion and Light Sensor P2</td><td>PIR, 170°</td><td>Matter over Thread</td><td>2 × CR2450</td><td>Ja</td><td>Midden</td><td>Lichtautomatisering over ecosystemen heen</td></tr>
<tr><td>Aqara Presence Sensor FP2</td><td>mmWave-radar</td><td>Wifi 2,4 GHz</td><td>USB-C (net)</td><td>Ja</td><td>Hoog</td><td>Stilzittende aanwezigheid, zones, meerdere personen</td></tr>
<tr><td>Philips Hue Motion Sensor</td><td>PIR, 120°</td><td>Zigbee (Hue Bridge)</td><td>2 × AAA</td><td>Ja + temperatuur</td><td>Midden</td><td>Hue-huishoudens</td></tr>
<tr><td>IKEA MYGGSPRAY</td><td>PIR</td><td>Matter over Thread</td><td>2 × AAA</td><td>Ja (grof)</td><td>Instap</td><td>Klein budget, buiten (IP67)</td></tr>
<tr><td>Eve Motion</td><td>PIR, 120°</td><td>Matter over Thread</td><td>2 × AAA</td><td>Ja</td><td>Midden tot hoog</td><td>Apple Woning, beschut buiten (IPX3)</td></tr>
<tr><td>Ajax MotionProtect</td><td>PIR, huisdierimmuun</td><td>Jeweller (Ajax-centrale)</td><td>Batterij, tot 5 jaar</td><td>Nee</td><td>Hoog (+ centrale)</td><td>Inbraakalarm</td></tr>
</tbody>
</table>

<h2>Welke prijsklasse voor welk gebruik?</h2>
<ul>
<li><strong>Instapklasse</strong> (IKEA MYGGSPRAY, Shelly BLU Motion): ideaal om veel doorloopruimtes uit te rusten. U neemt een minder nauwkeurige lichtmeting voor lief.</li>
<li><strong>Middenklasse</strong> (Aqara P2, Philips Hue, Eve Motion): de beste balans tussen bereik, batterijduur, afwerking en integratie. Hier ligt de beste prijs-kwaliteitverhouding voor lichtautomatisering.</li>
<li><strong>Hogere klasse</strong> (Aqara FP2, Ajax MotionProtect): u betaalt voor één specifieke functie, echte aanwezigheidsdetectie of alarmconformiteit. Alleen inzetten waar dat nodig is; bij Ajax komt de centrale erbij.</li>
</ul>

<h2>Fouten om te vermijden</h2>
<ul>
<li><strong>Een PIR in het kantoor of de woonkamer:</strong> het licht gaat uit terwijl u werkt. Kies een mmWave-sensor of stel een veel langere uitschakelvertraging in.</li>
<li><strong>De Thread-borderrouter vergeten:</strong> een Matter over Thread-sensor verbindt niet rechtstreeks met wifi.</li>
<li><strong>Automatisering en alarm verwarren:</strong> een lichtsensor kan een melding sturen, maar is niet gecertificeerd en niet bestand tegen sabotage. Kies voor beveiliging van uw woning een detector conform EN 50131.</li>
<li><strong>De sensor op een warmtebron of raam richten:</strong> radiatoren, direct zonlicht of ventilatieroosters veroorzaken valse meldingen bij een PIR.</li>
<li><strong>Huisdieren vergeten:</strong> zonder huisdierimmuniteit zet een hond of kat het alarm bij elke stap af.</li>
</ul>

<h2>Installatie en gebruikstips</h2>
<p>Een PIR-sensor ziet beweging <em>dwars</em> door zijn veld beter dan beweging recht op hem af: monteer hem opzij van de looproute, bij voorkeur in een hoek, op 2 tot 2,5 meter hoogte. Een mmWave-sensor komt aan de muur of het plafond, afhankelijk van de gewenste functies (de valdetectie van de FP2 vereist plafondmontage), en moet niet op bewegende objecten zoals ventilatoren of gordijnen gericht zijn. Controleer het detectiegebied in de app voordat u de houder definitief bevestigt.</p>
<p>Wat privacy en veiligheid betreft: een radar-aanwezigheidssensor neemt niets op en verstuurt geen beeld of geluid, dus hij is ook aanvaardbaar in een slaap- of badkamer. Valdetectie kan een nuttige aanvulling zijn voor een oudere persoon, maar vervangt geen personenalarmering. Deze sensoren werken op batterijen of USB: aan de elektrische installatie hoeft niets te gebeuren.</p>
<p>Meer weten? Lees onze <a href="/nl/blog/guide-securite-maison-connectee-2026">gids voor slimme huisbeveiliging</a>.</p>

<h2>Conclusie</h2>
<p>Voor lichtautomatisering in de meeste kamers is de <strong>Aqara Motion and Light Sensor P2</strong> de beste allrounder: brede hoek, Matter, lichtsensor en lange batterijduur. Met een klein budget of voor buiten doet de <strong>IKEA MYGGSPRAY</strong> het essentiële werk. Waar u lang stilzit, maakt de <strong>Aqara Presence Sensor FP2</strong> dankzij radar echt het verschil. Hue-huishoudens houden het bij de <strong>Philips Hue Motion Sensor</strong>, Apple Woning-gebruikers waarderen de <strong>Eve Motion</strong> en voor een alarm met huisdieren blijft de <strong>Ajax MotionProtect</strong> de maatstaf.</p>`,
  },
  faq: [
    {
      question: {
        fr: "Quelle est la différence entre un détecteur de mouvement et un capteur de présence ?",
        en: "What is the difference between a motion sensor and a presence sensor?",
        de: "Was ist der Unterschied zwischen Bewegungsmelder und Präsenzmelder?",
        es: "¿Qué diferencia hay entre un sensor de movimiento y un sensor de presencia?",
        it: "Che differenza c'è tra un sensore di movimento e un sensore di presenza?",
        nl: "Wat is het verschil tussen een bewegingssensor en een aanwezigheidssensor?",
      },
      answer: {
        fr: "Un détecteur de mouvement (PIR) ne réagit qu'aux déplacements : une personne immobile n'est plus détectée. Un capteur de présence à radar mmWave perçoit des micro-mouvements comme la respiration et sait donc qu'une pièce reste occupée. Le PIR fonctionne sur pile, le mmWave doit généralement être branché.",
        en: "A motion sensor (PIR) only reacts to movement, so someone sitting still is no longer detected. An mmWave radar presence sensor picks up micro-movements such as breathing, so it knows a room is still occupied. PIR sensors run on batteries, while mmWave sensors usually need to be plugged in.",
        de: "Ein Bewegungsmelder (PIR) reagiert nur auf Bewegung, eine ruhende Person wird nicht mehr erkannt. Ein mmWave-Radar-Präsenzmelder nimmt Mikrobewegungen wie die Atmung wahr und weiß daher, dass ein Raum belegt ist. PIR-Sensoren laufen mit Batterie, mmWave-Sensoren brauchen meist eine Stromversorgung.",
        es: "Un sensor de movimiento (PIR) solo reacciona a los desplazamientos: una persona inmóvil deja de detectarse. Un sensor de presencia por radar mmWave percibe micromovimientos como la respiración y sabe que la estancia sigue ocupada. El PIR funciona con pilas; el mmWave suele necesitar enchufe.",
        it: "Un sensore di movimento (PIR) reagisce solo agli spostamenti: una persona immobile non viene più rilevata. Un sensore di presenza radar mmWave percepisce micromovimenti come il respiro e sa quindi che la stanza è occupata. Il PIR funziona a batteria, il mmWave di solito va alimentato.",
        nl: "Een bewegingssensor (PIR) reageert alleen op beweging; wie stilzit, wordt niet meer gezien. Een mmWave-radar-aanwezigheidssensor neemt microbewegingen zoals ademhaling waar en weet dus dat een ruimte bezet blijft. PIR werkt op batterijen, mmWave moet meestal aan het stroomnet.",
      },
    },
    {
      question: {
        fr: "Un détecteur de mouvement connecté peut-il remplacer une alarme ?",
        en: "Can a smart motion sensor replace a burglar alarm?",
        de: "Kann ein smarter Bewegungsmelder eine Alarmanlage ersetzen?",
        es: "¿Puede un sensor de movimiento inteligente sustituir a una alarma?",
        it: "Un sensore di movimento smart può sostituire un allarme?",
        nl: "Kan een slimme bewegingssensor een inbraakalarm vervangen?",
      },
      answer: {
        fr: "Pas vraiment. Un capteur prévu pour l'éclairage peut envoyer une notification, mais il n'est ni certifié ni protégé contre le sabotage. Pour protéger un logement, mieux vaut un détecteur conforme à la norme EN 50131, comme l'Ajax MotionProtect, relié à une centrale d'alarme.",
        en: "Not really. A sensor designed for lighting can send a notification, but it is neither certified nor protected against tampering. To protect a home, choose a detector compliant with EN 50131, such as the Ajax MotionProtect, connected to an alarm hub.",
        de: "Eigentlich nicht. Ein Sensor für Lichtsteuerung kann eine Benachrichtigung senden, ist aber weder zertifiziert noch sabotagegeschützt. Zum Schutz der Wohnung eignet sich ein Melder nach EN 50131, etwa der Ajax MotionProtect, verbunden mit einer Alarmzentrale.",
        es: "En realidad no. Un sensor pensado para la iluminación puede enviar una notificación, pero no está certificado ni protegido contra el sabotaje. Para proteger una vivienda, es mejor un detector conforme a EN 50131, como el Ajax MotionProtect, conectado a una central de alarma.",
        it: "Non proprio. Un sensore pensato per l'illuminazione può inviare una notifica, ma non è certificato né protetto contro il sabotaggio. Per proteggere la casa è meglio un rilevatore conforme alla norma EN 50131, come l'Ajax MotionProtect, collegato a una centrale d'allarme.",
        nl: "Niet echt. Een sensor voor verlichting kan een melding sturen, maar is niet gecertificeerd en niet beschermd tegen sabotage. Voor de beveiliging van uw woning kiest u beter een detector conform EN 50131, zoals de Ajax MotionProtect, gekoppeld aan een alarmcentrale.",
      },
    },
    {
      question: {
        fr: "Les détecteurs de mouvement réagissent-ils aux chats et aux chiens ?",
        en: "Do motion sensors react to cats and dogs?",
        de: "Reagieren Bewegungsmelder auf Katzen und Hunde?",
        es: "¿Los sensores de movimiento reaccionan a gatos y perros?",
        it: "I sensori di movimento reagiscono a cani e gatti?",
        nl: "Reageren bewegingssensoren op katten en honden?",
      },
      answer: {
        fr: "Oui, la plupart des capteurs grand public détectent les animaux, ce qui pose peu de problème pour l'éclairage. Pour une alarme, choisissez un détecteur à immunité animaux : l'Ajax MotionProtect ignore les animaux jusqu'à 20 kg et 50 cm de hauteur.",
        en: "Yes, most consumer sensors detect pets, which is rarely a problem for lighting. For an alarm, choose a pet-immune detector: the Ajax MotionProtect ignores animals up to 20 kg and 50 cm tall.",
        de: "Ja, die meisten Consumer-Sensoren erkennen Haustiere, was bei der Lichtsteuerung kaum stört. Für eine Alarmanlage wählen Sie einen haustierimmunen Melder: Der Ajax MotionProtect ignoriert Tiere bis 20 kg und 50 cm Höhe.",
        es: "Sí, la mayoría de los sensores de consumo detectan a las mascotas, lo que apenas importa para la iluminación. Para una alarma, elija un detector inmune a mascotas: el Ajax MotionProtect ignora animales de hasta 20 kg y 50 cm de altura.",
        it: "Sì, la maggior parte dei sensori consumer rileva gli animali, cosa poco rilevante per l'illuminazione. Per un allarme scegliete un rilevatore immune agli animali: l'Ajax MotionProtect ignora animali fino a 20 kg e 50 cm di altezza.",
        nl: "Ja, de meeste consumentensensoren zien huisdieren, wat voor verlichting zelden een probleem is. Kies voor een alarm een huisdierimmune detector: de Ajax MotionProtect negeert dieren tot 20 kg en 50 cm hoog.",
      },
    },
    {
      question: {
        fr: "Combien de temps dure la pile d'un détecteur de mouvement connecté ?",
        en: "How long does a smart motion sensor battery last?",
        de: "Wie lange hält die Batterie eines smarten Bewegungsmelders?",
        es: "¿Cuánto dura la pila de un sensor de movimiento inteligente?",
        it: "Quanto dura la batteria di un sensore di movimento smart?",
        nl: "Hoe lang gaat de batterij van een slimme bewegingssensor mee?",
      },
      answer: {
        fr: "Selon les fabricants, de un à cinq ans : environ deux ans pour l'Aqara P2 et le Philips Hue, jusqu'à cinq ans pour l'Ajax MotionProtect et le Shelly BLU Motion. L'autonomie réelle dépend du nombre de déclenchements et de la qualité de la connexion. Les capteurs mmWave, eux, sont alimentés en continu.",
        en: "Manufacturers quote one to five years: around two years for the Aqara P2 and Philips Hue, up to five years for the Ajax MotionProtect and Shelly BLU Motion. Real-world life depends on how often the sensor triggers and on signal quality. mmWave sensors are powered continuously instead.",
        de: "Laut Herstellern ein bis fünf Jahre: etwa zwei Jahre beim Aqara P2 und Philips Hue, bis zu fünf Jahre beim Ajax MotionProtect und Shelly BLU Motion. Die tatsächliche Laufzeit hängt von der Auslösehäufigkeit und der Verbindungsqualität ab. mmWave-Sensoren werden dauerhaft mit Strom versorgt.",
        es: "Según los fabricantes, de uno a cinco años: unos dos años para el Aqara P2 y el Philips Hue, hasta cinco años para el Ajax MotionProtect y el Shelly BLU Motion. La duración real depende del número de activaciones y de la calidad de la conexión. Los sensores mmWave se alimentan de forma continua.",
        it: "Secondo i produttori, da uno a cinque anni: circa due anni per l'Aqara P2 e il Philips Hue, fino a cinque anni per l'Ajax MotionProtect e lo Shelly BLU Motion. La durata reale dipende dal numero di attivazioni e dalla qualità del collegamento. I sensori mmWave sono invece alimentati in continuo.",
        nl: "Volgens de fabrikanten één tot vijf jaar: ongeveer twee jaar voor de Aqara P2 en Philips Hue, tot vijf jaar voor de Ajax MotionProtect en Shelly BLU Motion. De werkelijke duur hangt af van het aantal activeringen en de verbindingskwaliteit. mmWave-sensoren krijgen continu stroom.",
      },
    },
    {
      question: {
        fr: "Faut-il un hub pour utiliser un détecteur de mouvement connecté ?",
        en: "Do I need a hub to use a smart motion sensor?",
        de: "Brauche ich einen Hub für einen smarten Bewegungsmelder?",
        es: "¿Hace falta un hub para usar un sensor de movimiento inteligente?",
        it: "Serve un hub per usare un sensore di movimento smart?",
        nl: "Heb ik een hub nodig voor een slimme bewegingssensor?",
      },
      answer: {
        fr: "Cela dépend du protocole. Les capteurs Matter over Thread (Aqara P2, IKEA MYGGSPRAY, Eve Motion) demandent un routeur de bordure Thread, souvent déjà présent dans une enceinte ou un boîtier TV récent. Le Philips Hue exige le Hue Bridge, l'Ajax une centrale Ajax ; l'Aqara FP2 se connecte directement en Wi-Fi.",
        en: "It depends on the protocol. Matter over Thread sensors (Aqara P2, IKEA MYGGSPRAY, Eve Motion) need a Thread border router, often already built into a recent smart speaker or TV box. The Philips Hue sensor needs the Hue Bridge and Ajax needs an Ajax hub, while the Aqara FP2 connects straight to Wi-Fi.",
        de: "Das hängt vom Funkstandard ab. Matter-over-Thread-Sensoren (Aqara P2, IKEA MYGGSPRAY, Eve Motion) brauchen einen Thread-Border-Router, der oft schon in einem neueren Smart Speaker oder einer TV-Box steckt. Der Philips Hue braucht die Hue Bridge, Ajax eine Ajax-Zentrale; der Aqara FP2 verbindet sich direkt per WLAN.",
        es: "Depende del protocolo. Los sensores Matter over Thread (Aqara P2, IKEA MYGGSPRAY, Eve Motion) necesitan un router de borde Thread, a menudo ya integrado en un altavoz o un reproductor de TV recientes. El Philips Hue requiere el Hue Bridge y Ajax una central Ajax; el Aqara FP2 se conecta directamente por Wi-Fi.",
        it: "Dipende dal protocollo. I sensori Matter over Thread (Aqara P2, IKEA MYGGSPRAY, Eve Motion) richiedono un border router Thread, spesso già integrato in uno smart speaker o in un box TV recenti. Il Philips Hue richiede l'Hue Bridge, Ajax una centrale Ajax; l'Aqara FP2 si collega direttamente al Wi-Fi.",
        nl: "Dat hangt af van het protocol. Matter over Thread-sensoren (Aqara P2, IKEA MYGGSPRAY, Eve Motion) hebben een Thread-borderrouter nodig, vaak al ingebouwd in een recente slimme speaker of tv-box. De Philips Hue vereist de Hue Bridge en Ajax een Ajax-centrale; de Aqara FP2 verbindt rechtstreeks via wifi.",
      },
    },
    {
      question: {
        fr: "Peut-on installer un détecteur de mouvement connecté à l'extérieur ?",
        en: "Can a smart motion sensor be used outdoors?",
        de: "Kann man einen smarten Bewegungsmelder draußen verwenden?",
        es: "¿Se puede instalar un sensor de movimiento inteligente en exterior?",
        it: "Si può installare un sensore di movimento smart all'esterno?",
        nl: "Kan een slimme bewegingssensor buiten worden gebruikt?",
      },
      answer: {
        fr: "Oui, si son indice de protection le permet. L'IKEA MYGGSPRAY est homologué IP67 pour l'intérieur comme l'extérieur, l'Eve Motion (IPX3) convient à un emplacement abrité. Le Philips Hue Motion Sensor intérieur, lui, est réservé à l'intérieur : vérifiez toujours l'indice IP avant d'installer un capteur dehors.",
        en: "Yes, if its ingress rating allows it. The IKEA MYGGSPRAY is IP67-rated for indoor and outdoor use, and the Eve Motion (IPX3) suits a sheltered spot. The indoor Philips Hue Motion Sensor is for indoor use only, so always check the IP rating before mounting a sensor outside.",
        de: "Ja, wenn die Schutzart es zulässt. Der IKEA MYGGSPRAY ist nach IP67 für drinnen und draußen zugelassen, der Eve Motion (IPX3) eignet sich für geschützte Stellen. Der Philips Hue Motion Sensor für innen ist nur für Innenräume gedacht – prüfen Sie vor der Außenmontage immer die Schutzart.",
        es: "Sí, si su índice de protección lo permite. El IKEA MYGGSPRAY está homologado IP67 para interior y exterior, y el Eve Motion (IPX3) sirve para un lugar resguardado. El Philips Hue Motion Sensor de interior solo sirve dentro de casa: compruebe siempre el índice IP antes de instalar un sensor fuera.",
        it: "Sì, se il grado di protezione lo consente. L'IKEA MYGGSPRAY è omologato IP67 per interno ed esterno, l'Eve Motion (IPX3) è adatto a un punto riparato. Il Philips Hue Motion Sensor da interno è pensato solo per l'interno: controllate sempre il grado IP prima di installare un sensore fuori.",
        nl: "Ja, als de beschermingsgraad het toelaat. De IKEA MYGGSPRAY heeft IP67 voor binnen en buiten, de Eve Motion (IPX3) past op een beschutte plek. De Philips Hue Motion Sensor voor binnen is alleen voor binnengebruik: controleer altijd de IP-klasse voordat u een sensor buiten monteert.",
      },
    },
  ],
}
