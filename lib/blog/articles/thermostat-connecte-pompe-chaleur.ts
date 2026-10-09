import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'thermostat-connecte-pompe-chaleur',
  category: 'guides',
  pillar: 'energie-domotique',
  relatedSlugs: ['guide-domotique-economie-energie-2026', 'radiateur-electrique-connecte-guide', 'compteur-energie-connecte-comparatif'],
  datePublished: '2026-04-16',
  dateModified: '2026-10-09',
  readingTime: 9,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Thermostat connecté rond fixé au mur, écran bleu affichant la consigne de chauffage',
        en: 'Round smart thermostat mounted on a wall, blue screen showing the heating set point',
        de: 'Rundes smartes Thermostat an der Wand, blaues Display mit der Heiz-Solltemperatur',
        es: 'Termostato inteligente redondo en la pared, con pantalla azul que muestra la consigna de calefacción',
        it: 'Termostato smart rotondo a parete, con display blu che mostra la temperatura impostata',
        nl: 'Ronde slimme thermostaat aan de muur, blauw scherm met de ingestelde verwarmingstemperatuur',
      },
    },
  ],
  title: {
    fr: 'Thermostat connecté pour pompe à chaleur 2026 : guide et meilleurs modèles',
    en: 'Smart Thermostat for a Heat Pump 2026: Guide and Best Models',
    de: 'Smartes Thermostat für die Wärmepumpe 2026: Ratgeber und beste Modelle',
    es: 'Termostato inteligente para bomba de calor 2026: guía y mejores modelos',
    it: 'Termostato smart per pompa di calore 2026: guida e modelli migliori',
    nl: 'Slimme thermostaat voor een warmtepomp 2026: gids en beste modellen',
  },
  excerpt: {
    fr: 'tado Heat Pump Optimizer X, tado Smart Thermostat X, Netatmo Thermostat Original ou Honeywell Home T6 : quel thermostat connecté choisir pour une pompe à chaleur air-eau ? Contact on/off, OpenTherm, courbe de chauffe et erreurs à éviter.',
    en: 'tado Heat Pump Optimizer X, tado Smart Thermostat X, Netatmo Thermostat Original or Honeywell Home T6: which smart thermostat suits an air-to-water heat pump? On/off contact, OpenTherm, heating curve and mistakes to avoid.',
    de: 'tado Heat Pump Optimizer X, tado Smart Thermostat X, Netatmo Thermostat Original oder Honeywell Home T6: Welches smarte Thermostat passt zur Luft-Wasser-Wärmepumpe? Ein/Aus-Kontakt, OpenTherm, Heizkurve und typische Fehler.',
    es: 'tado Heat Pump Optimizer X, tado Smart Thermostat X, Netatmo Thermostat Original o Honeywell Home T6: ¿qué termostato inteligente elegir para una bomba de calor aire-agua? Contacto on/off, OpenTherm, curva de calefacción y errores.',
    it: 'tado Heat Pump Optimizer X, tado Smart Thermostat X, Netatmo Thermostat Original o Honeywell Home T6: quale termostato smart scegliere per una pompa di calore aria-acqua? Contatto on/off, OpenTherm, curva climatica ed errori da evitare.',
    nl: 'tado Heat Pump Optimizer X, tado Smart Thermostat X, Netatmo Thermostat Original of Honeywell Home T6: welke slimme thermostaat past bij een lucht-waterwarmtepomp? Aan/uit-contact, OpenTherm, stooklijn en fouten om te vermijden.',
  },
  content: {
    fr: `<p>Pour une pompe à chaleur air-eau, le meilleur thermostat connecté en 2026 est celui qui dialogue avec la PAC au lieu de simplement l’allumer et l’éteindre : le <strong>tado Heat Pump Optimizer X</strong> est aujourd’hui la solution la plus aboutie pour les marques compatibles (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic). Si votre PAC accepte seulement un contact on/off, un thermostat simple et bien réglé comme le <strong>Netatmo Thermostat Original</strong> suffit, et l’<strong>Honeywell Home T6</strong> reste une valeur sûre lorsque la PAC est compatible OpenTherm.</p>
<p>Ce guide s’appuie sur les fiches techniques des fabricants, des avis indépendants et les retours d’acheteurs vérifiés. Il ne retient que des modèles actuellement vendus en Europe. Retrouvez toute la sélection dans notre catalogue de <a href="/fr/energie-domotique/thermostats">thermostats connectés</a>.</p>

<h2>Pompe à chaleur et thermostat : ce qu’il faut comprendre</h2>
<p>Une chaudière gaz supporte bien les marches et arrêts fréquents. Une pompe à chaleur, beaucoup moins. Son rendement (le COP) est meilleur quand elle tourne longtemps, à puissance réduite, avec une eau de chauffage la plus tiède possible. Les PAC modernes à compresseur Inverter savent moduler leur puissance et suivent une <strong>loi d’eau</strong> (ou courbe de chauffe) : plus il fait doux dehors, plus la température de départ de l’eau baisse.</p>
<p>Un thermostat mal choisi peut casser cette logique. S’il coupe et relance la PAC dès que la pièce dépasse la consigne de quelques dixièmes de degré, il provoque des <strong>cycles courts</strong> : le compresseur démarre souvent, s’use davantage et le rendement chute. Le bon thermostat pour une PAC est donc celui qui laisse la machine moduler, ou qui pilote directement cette modulation.</p>
<h3>Les trois façons de raccorder un thermostat à une PAC</h3>
<ul>
<li><strong>Contact sec (on/off)</strong> : la solution la plus répandue. Le thermostat ouvre ou ferme un contact sur l’entrée « thermostat d’ambiance » de la PAC. Simple et universel, mais la PAC ne reçoit qu’un ordre marche/arrêt.</li>
<li><strong>OpenTherm</strong> : protocole de communication bidirectionnel. Le thermostat peut demander une température de départ plus ou moins élevée selon le besoin de la pièce. Toutes les PAC ne le gèrent pas : il faut vérifier la notice ou le module de régulation installé.</li>
<li><strong>Interface dédiée au fabricant</strong> : certaines solutions se branchent sur le bus de communication propre à la marque de la PAC. C’est le principe du tado Heat Pump Optimizer X, qui accède alors à plus de réglages qu’un simple contact.</li>
</ul>

<h2>Les critères pour bien choisir</h2>
<ul>
<li><strong>Compatibilité avec votre PAC</strong> : c’est le critère numéro un. Relevez la marque et la référence exacte de l’unité intérieure, puis passez-les dans l’outil de compatibilité du fabricant du thermostat.</li>
<li><strong>Type de pilotage</strong> : on/off, OpenTherm ou interface fabricant. Plus le dialogue est riche, plus le thermostat peut préserver la modulation de la PAC.</li>
<li><strong>Émetteurs de chaleur</strong> : un plancher chauffant a une forte inertie ; un thermostat qui anticipe (apprentissage, prise en compte de la météo) est alors plus utile qu’une programmation agressive.</li>
<li><strong>Eau chaude sanitaire</strong> : si votre PAC produit aussi l’eau chaude, vérifiez que le thermostat ou le module permet de la programmer.</li>
<li><strong>Écosystème domotique</strong> : Matter, Apple Maison, Google Home, Amazon Alexa. Les gammes récentes passent par Matter, ce qui simplifie l’intégration.</li>
<li><strong>Abonnements</strong> : certaines fonctions avancées (tarifs dynamiques, automatisations) sont payantes. Lisez ce qui est inclus avant d’acheter.</li>
</ul>

<h2>Les meilleurs thermostats connectés pour pompe à chaleur en 2026</h2>

<h3>1. tado Heat Pump Optimizer X : le meilleur choix pour une PAC compatible</h3>
<p>Le Heat Pump Optimizer X n’est pas un thermostat d’ambiance classique mais un module qui se connecte à la pompe à chaleur. Il fonctionne avec les PAC air-eau, eau-eau et sol-eau de plusieurs grandes marques européennes : Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu et Panasonic, selon la liste publiée par tado. Il utilise les températures mesurées dans les pièces (par les thermostats et têtes thermostatiques tado X) pour réduire la puissance de la PAC ou la mettre en veille quand les pièces sont à température, plutôt que de la couper brutalement.</p>
<p><strong>Points forts</strong> : pilotage du chauffage et de l’eau chaude depuis l’application tado, suivi de la consommation, guide d’installation adapté à la marque et au modèle, routeur de bordure Thread intégré (pas besoin de Bridge X), compatibilité Matter. tado annonce en moyenne 22 % d’efficacité en plus ; il s’agit d’un chiffre du fabricant, à considérer comme un ordre de grandeur.</p>
<p><strong>Limites</strong> : la liste de PAC compatibles est encore restreinte, il faut ajouter des thermostats ou têtes tado X pour profiter de la régulation pièce par pièce, et la gestion des tarifs dynamiques passe par l’abonnement optionnel tado Balance.</p>
<p><strong>Pour qui</strong> : les propriétaires d’une PAC d’une marque compatible qui veulent l’optimisation la plus poussée.</p>

<h3>2. tado Smart Thermostat X : le thermostat d’ambiance polyvalent</h3>
<p>Le Smart Thermostat X (version filaire) remplace un thermostat d’ambiance existant. Il fonctionne en contact on/off ou en OpenTherm selon ce que la PAC accepte, et convient aussi aux planchers chauffants à eau. Il communique en Thread et s’intègre via Matter à Apple Maison, Google Home et Alexa.</p>
<p><strong>Points forts</strong> : programmation intelligente, géolocalisation, détection de fenêtre ouverte, application très complète, extension possible avec des têtes thermostatiques Smart Radiator Thermostat X.</p>
<p><strong>Limites</strong> : il a besoin d’un tado Bridge X ou d’un autre routeur de bordure Thread ; certaines automatisations relèvent d’options payantes.</p>
<p><strong>Pour qui</strong> : les PAC hors de la liste de l’Optimizer X, ou les foyers qui veulent un thermostat d’ambiance moderne et évolutif.</p>

<h3>3. Netatmo Thermostat Original : le plus simple et le meilleur rapport qualité-prix</h3>
<p>Lancée début 2026, la gamme Original renouvelle le thermostat Netatmo. Elle existe en version filaire (Thermo Hub inclus) et sans fil (récepteur Thermo Link et Thermo Hub inclus). Netatmo la déclare compatible avec la plupart des chaudières individuelles et des pompes à chaleur air-eau.</p>
<p><strong>Points forts</strong> : installation guidée, fonction Auto-Adapt qui anticipe la mise en chauffe selon la météo et l’isolation, mode Eco-Assist en cas d’absence, rapports mensuels, compatibilité Matter via le Thermo Hub, application Home + Control.</p>
<p><strong>Limites</strong> : la gamme Original n’est pas compatible avec les anciens accessoires Netatmo ; si vous avez déjà des vannes Netatmo de première génération, il faudra les remplacer.</p>
<p><strong>Pour qui</strong> : les PAC pilotées par un simple contact on/off et les foyers qui cherchent une solution sobre, sans configuration complexe.</p>

<h3>4. Honeywell Home T6 : la valeur sûre en OpenTherm</h3>
<p>Le T6 (filaire) et sa variante T6R (sans fil) sont compatibles avec les générateurs on/off 24-230 V et OpenTherm, dont les pompes à chaleur. Ils se connectent directement au Wi-Fi, sans hub supplémentaire.</p>
<p><strong>Points forts</strong> : écran tactile lisible, géolocalisation, programmation depuis l’application Honeywell Home (Resideo), large diffusion chez les installateurs.</p>
<p><strong>Limites</strong> : design et application moins modernes que ceux de tado ou Netatmo, pas de régulation pièce par pièce aussi intégrée.</p>
<p><strong>Pour qui</strong> : les PAC compatibles OpenTherm et les utilisateurs qui veulent un thermostat éprouvé, sans écosystème imposé.</p>

<h3>Et le Google Nest Learning Thermostat ?</h3>
<p>Google a annoncé qu’il ne lancerait plus de nouveaux thermostats Nest en Europe. Le Nest Learning Thermostat de 4e génération n’y est pas commercialisé, et le modèle de 3e génération n’est vendu que dans la limite des stocks. Pour un achat neuf destiné à durer, mieux vaut se tourner vers les modèles ci-dessus.</p>

<h3>Et la régulation du fabricant de la PAC ?</h3>
<p>Daikin, Vaillant, Atlantic ou Panasonic proposent leurs propres thermostats et applications. Ils connaissent parfaitement la machine, mais s’intègrent souvent moins bien au reste de la maison connectée. C’est une option à garder en tête, surtout si votre installateur l’a déjà prévue.</p>

<h2>Tableau comparatif</h2>
<table>
<thead>
<tr><th>Modèle</th><th>Pilotage de la PAC</th><th>Connectivité</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td>tado Heat Pump Optimizer X</td><td>Interface dédiée aux marques compatibles</td><td>Wi-Fi, Thread (routeur intégré), Matter</td><td>PAC Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic</td></tr>
<tr><td>tado Smart Thermostat X</td><td>On/off ou OpenTherm</td><td>Thread, Matter (Bridge X requis)</td><td>Thermostat d’ambiance évolutif</td></tr>
<tr><td>Netatmo Thermostat Original</td><td>Contact on/off</td><td>Wi-Fi, Matter via Thermo Hub</td><td>Simplicité, budget maîtrisé</td></tr>
<tr><td>Honeywell Home T6</td><td>On/off ou OpenTherm</td><td>Wi-Fi direct</td><td>PAC OpenTherm, sans hub</td></tr>
</tbody>
</table>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Acheter sans vérifier la compatibilité</strong> : une PAC sans entrée thermostat, ou dont la régulation est verrouillée, ne fonctionnera pas avec n’importe quel modèle.</li>
<li><strong>Programmer de grosses baisses la nuit</strong> : avec une PAC, surtout sur plancher chauffant, les réduits de 4 ou 5 °C obligent la machine à relancer fort le matin, souvent avec l’appoint électrique. Préférez des écarts modestes.</li>
<li><strong>Régler la consigne trop près de la température réelle</strong> : un différentiel trop serré multiplie les cycles courts.</li>
<li><strong>Oublier la loi d’eau</strong> : un thermostat connecté complète une courbe de chauffe bien réglée, il ne la remplace pas. Faites-la ajuster par votre installateur.</li>
<li><strong>Placer le thermostat au mauvais endroit</strong> : près d’une fenêtre, d’une cheminée ou en plein soleil, il mesure une température fausse.</li>
</ul>

<h2>Installation et sécurité</h2>
<p>Coupez toujours l’alimentation électrique de la PAC avant d’intervenir. Le remplacement d’un thermostat filaire en contact sec ou en OpenTherm est à la portée d’un bricoleur soigneux qui suit le guide de l’application. En revanche, le raccordement d’un module sur la carte de régulation de la PAC, ou toute intervention sur une installation sous garantie, est à confier à l’installateur ou à un électricien qualifié : une erreur de câblage peut endommager l’électronique et compromettre la garantie.</p>
<p>Installez le thermostat dans la pièce de vie principale, sur un mur intérieur, à environ 1,5 m du sol, loin des sources de chaleur et des courants d’air. Vérifiez aussi la couverture Wi-Fi ou Thread à cet endroit.</p>

<h2>Aides financières</h2>
<p>En France, un thermostat connecté posé seul est rarement subventionné, mais la régulation peut être intégrée au devis d’installation d’une PAC éligible aux aides publiques. Les conditions évoluent chaque année : vérifiez-les sur le site officiel France Rénov’ ou auprès d’un conseiller avant de signer un devis. Pour aller plus loin, consultez notre <a href="/fr/blog/guide-domotique-economie-energie-2026">guide domotique et économies d’énergie</a> et notre comparatif des <a href="/fr/blog/compteur-energie-connecte-comparatif">compteurs d’énergie connectés</a>, utiles pour suivre la consommation réelle de la PAC.</p>

<h2>Notre verdict</h2>
<p>Si votre pompe à chaleur figure dans la liste de compatibilité, le <strong>tado Heat Pump Optimizer X</strong> est la solution la plus complète : il pilote la PAC elle-même et pas seulement un contact. Pour une PAC commandée en on/off, le <strong>Netatmo Thermostat Original</strong> offre le meilleur équilibre entre simplicité et fonctions. Le <strong>tado Smart Thermostat X</strong> et l’<strong>Honeywell Home T6</strong> sont les bons choix pour exploiter une compatibilité OpenTherm. Dans tous les cas, faites d’abord vérifier la loi d’eau de votre PAC : c’est elle qui conditionne la plus grande partie du rendement.</p>`,

    en: `<p>For an air-to-water heat pump, the best smart thermostat in 2026 is one that talks to the heat pump rather than simply switching it on and off: the <strong>tado Heat Pump Optimizer X</strong> is currently the most complete solution for compatible brands (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic). If your heat pump only accepts an on/off contact, a simple, well-set thermostat such as the <strong>Netatmo Thermostat Original</strong> is enough, and the <strong>Honeywell Home T6</strong> remains a safe choice when the heat pump supports OpenTherm.</p>
<p>This guide is based on manufacturer specifications, independent reviews and verified buyer feedback. It only includes models currently sold in Europe. You will find the full selection in our <a href="/en/energie-domotique/thermostats">smart thermostats</a> catalogue.</p>

<h2>Heat pumps and thermostats: what you need to know</h2>
<p>A gas boiler copes well with frequent starts and stops. A heat pump much less so. Its efficiency (the COP) is best when it runs for long periods at reduced output, with the coolest possible heating water. Modern inverter heat pumps modulate their output and follow a <strong>weather compensation curve</strong> (heating curve): the milder it is outside, the lower the flow temperature.</p>
<p>The wrong thermostat can undermine this logic. If it switches the heat pump off and on again as soon as the room overshoots the set point by a few tenths of a degree, it causes <strong>short cycling</strong>: the compressor starts more often, wears faster and efficiency drops. The right thermostat for a heat pump either lets the unit modulate, or controls that modulation directly.</p>
<h3>Three ways to connect a thermostat to a heat pump</h3>
<ul>
<li><strong>Volt-free (on/off) contact</strong>: the most common option. The thermostat opens or closes a contact on the heat pump’s room thermostat input. Simple and universal, but the heat pump only receives an on or off command.</li>
<li><strong>OpenTherm</strong>: a two-way communication protocol. The thermostat can request a higher or lower flow temperature depending on what the room needs. Not every heat pump supports it, so check the manual or the installed control module.</li>
<li><strong>Manufacturer-specific interface</strong>: some solutions plug into the heat pump brand’s own communication bus. This is how the tado Heat Pump Optimizer X works, giving it access to more settings than a simple contact.</li>
</ul>

<h2>How to choose</h2>
<ul>
<li><strong>Compatibility with your heat pump</strong>: the number one criterion. Note the brand and exact model of the indoor unit, then run them through the thermostat maker’s compatibility checker.</li>
<li><strong>Control type</strong>: on/off, OpenTherm or manufacturer interface. The richer the communication, the better the thermostat can preserve the heat pump’s modulation.</li>
<li><strong>Heat emitters</strong>: underfloor heating has high thermal inertia, so a thermostat that anticipates (learning, weather forecasts) is more useful than aggressive scheduling.</li>
<li><strong>Domestic hot water</strong>: if your heat pump also heats water, check that the thermostat or module can schedule it.</li>
<li><strong>Smart home ecosystem</strong>: Matter, Apple Home, Google Home, Amazon Alexa. Recent ranges use Matter, which makes integration easier.</li>
<li><strong>Subscriptions</strong>: some advanced features (dynamic tariffs, automations) are paid. Check what is included before you buy.</li>
</ul>

<h2>The best smart thermostats for heat pumps in 2026</h2>

<h3>1. tado Heat Pump Optimizer X: best choice for a compatible heat pump</h3>
<p>The Heat Pump Optimizer X is not a classic room thermostat but a module that connects to the heat pump. It works with air-to-water, water-to-water and brine-to-water heat pumps from several major European brands: Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu and Panasonic, according to tado’s published list. It uses room temperatures measured by tado X thermostats and radiator thermostats to reduce the heat pump’s output, or put it on standby when rooms are warm, instead of switching it off abruptly.</p>
<p><strong>Strengths</strong>: control of heating and hot water in the tado app, energy tracking, an installation guide tailored to the brand and model, a built-in Thread border router (no Bridge X needed) and Matter support. tado claims an average 22% efficiency gain; this is a manufacturer figure and should be read as a rough indication.</p>
<p><strong>Limits</strong>: the list of compatible heat pumps is still limited, you need tado X thermostats or radiator thermostats for room-by-room control, and dynamic tariff features require the optional tado Balance subscription.</p>
<p><strong>Best for</strong>: owners of a heat pump from a compatible brand who want the most advanced optimisation.</p>

<h3>2. tado Smart Thermostat X: the versatile room thermostat</h3>
<p>The Smart Thermostat X (wired version) replaces an existing room thermostat. It works over an on/off contact or OpenTherm, depending on what the heat pump accepts, and also suits water-based underfloor heating. It uses Thread and integrates with Apple Home, Google Home and Alexa through Matter.</p>
<p><strong>Strengths</strong>: smart scheduling, geofencing, open window detection, a very complete app, and room-by-room expansion with Smart Radiator Thermostat X heads.</p>
<p><strong>Limits</strong>: it needs a tado Bridge X or another Thread border router, and some automations are part of paid options.</p>
<p><strong>Best for</strong>: heat pumps outside the Optimizer X list, or households that want a modern, expandable room thermostat.</p>

<h3>3. Netatmo Thermostat Original: simplest and best value</h3>
<p>Launched in early 2026, the Original range replaces Netatmo’s previous thermostat. It comes in a wired version (Thermo Hub included) and a wireless version (Thermo Link receiver and Thermo Hub included). Netatmo states it is compatible with most individual boilers and air-to-water heat pumps.</p>
<p><strong>Strengths</strong>: guided installation, Auto-Adapt to anticipate heating based on the weather and insulation, Eco-Assist when you are away, monthly reports, Matter support via the Thermo Hub, and the Home + Control app.</p>
<p><strong>Limits</strong>: the Original range is not compatible with older Netatmo accessories, so first-generation Netatmo radiator valves have to be replaced.</p>
<p><strong>Best for</strong>: heat pumps controlled by a simple on/off contact and households that want a clean solution without complex setup.</p>

<h3>4. Honeywell Home T6: the dependable OpenTherm option</h3>
<p>The T6 (wired) and its T6R variant (wireless) are compatible with 24–230 V on/off and OpenTherm appliances, including heat pumps. They connect directly to Wi-Fi with no extra hub.</p>
<p><strong>Strengths</strong>: clear touchscreen, geofencing, scheduling in the Honeywell Home (Resideo) app, and wide availability through installers.</p>
<p><strong>Limits</strong>: the design and app feel less modern than tado or Netatmo, and room-by-room control is less integrated.</p>
<p><strong>Best for</strong>: OpenTherm-compatible heat pumps and users who want a proven thermostat without being tied to an ecosystem.</p>

<h3>What about the Google Nest Learning Thermostat?</h3>
<p>Google has announced that it will no longer launch new Nest thermostats in Europe. The 4th-generation Nest Learning Thermostat is not sold there, and the 3rd-generation model is only available while stocks last. For a new purchase meant to last, the models above are a better bet.</p>

<h3>What about the heat pump maker’s own controls?</h3>
<p>Daikin, Vaillant, Atlantic and Panasonic offer their own thermostats and apps. They know the unit perfectly but often integrate less well with the rest of the smart home. They are worth considering, especially if your installer has already planned for them.</p>

<h2>Comparison table</h2>
<table>
<thead>
<tr><th>Model</th><th>Heat pump control</th><th>Connectivity</th><th>Best for</th></tr>
</thead>
<tbody>
<tr><td>tado Heat Pump Optimizer X</td><td>Dedicated interface for compatible brands</td><td>Wi-Fi, Thread (built-in border router), Matter</td><td>Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic heat pumps</td></tr>
<tr><td>tado Smart Thermostat X</td><td>On/off or OpenTherm</td><td>Thread, Matter (Bridge X required)</td><td>Expandable room thermostat</td></tr>
<tr><td>Netatmo Thermostat Original</td><td>On/off contact</td><td>Wi-Fi, Matter via Thermo Hub</td><td>Simplicity on a sensible budget</td></tr>
<tr><td>Honeywell Home T6</td><td>On/off or OpenTherm</td><td>Direct Wi-Fi</td><td>OpenTherm heat pumps, no hub</td></tr>
</tbody>
</table>

<h2>Mistakes to avoid</h2>
<ul>
<li><strong>Buying without checking compatibility</strong>: a heat pump without a thermostat input, or with locked controls, will not work with just any model.</li>
<li><strong>Scheduling deep night setbacks</strong>: with a heat pump, especially on underfloor heating, setbacks of 4–5 °C force the unit to work hard in the morning, often using the electric backup heater. Keep setbacks modest.</li>
<li><strong>Setting the switching differential too tight</strong>: it multiplies short cycles.</li>
<li><strong>Forgetting the weather compensation curve</strong>: a smart thermostat complements a well-set heating curve, it does not replace it. Ask your installer to fine-tune it.</li>
<li><strong>Putting the thermostat in the wrong place</strong>: near a window, a fireplace or in direct sun, it reads the wrong temperature.</li>
</ul>

<h2>Installation and safety</h2>
<p>Always switch off the heat pump’s power supply before working on it. Replacing a wired thermostat on a volt-free contact or OpenTherm is within reach of a careful DIYer who follows the app’s guide. However, connecting a module to the heat pump’s control board, or any work on an installation under warranty, should be left to the installer or a qualified electrician: a wiring mistake can damage the electronics and affect the warranty.</p>
<p>Mount the thermostat in the main living room, on an interior wall, about 1.5 m above the floor, away from heat sources and draughts. Also check Wi-Fi or Thread coverage at that spot.</p>

<h2>Grants and incentives</h2>
<p>A smart thermostat bought on its own is rarely subsidised, but controls can be part of the quote for a heat pump installation that qualifies for public support schemes. Rules change regularly, so check official government sources or an energy adviser before signing a quote. To go further, read our <a href="/en/blog/guide-domotique-economie-energie-2026">smart home energy savings guide</a> and our comparison of <a href="/en/blog/compteur-energie-connecte-comparatif">smart energy monitors</a>, handy for tracking the heat pump’s real consumption.</p>

<h2>Our verdict</h2>
<p>If your heat pump is on the compatibility list, the <strong>tado Heat Pump Optimizer X</strong> is the most complete solution: it controls the heat pump itself, not just a contact. For an on/off heat pump, the <strong>Netatmo Thermostat Original</strong> offers the best balance of simplicity and features. The <strong>tado Smart Thermostat X</strong> and the <strong>Honeywell Home T6</strong> are the right picks to make use of OpenTherm. Either way, have your heat pump’s weather compensation curve checked first: it drives most of the efficiency.</p>`,

    de: `<p>Für eine Luft-Wasser-Wärmepumpe ist 2026 das smarte Thermostat am besten, das mit der Wärmepumpe kommuniziert, statt sie nur ein- und auszuschalten: Der <strong>tado Heat Pump Optimizer X</strong> ist derzeit die ausgereifteste Lösung für kompatible Marken (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic). Akzeptiert Ihre Wärmepumpe nur einen Ein/Aus-Kontakt, genügt ein einfaches, gut eingestelltes Thermostat wie das <strong>Netatmo Thermostat Original</strong>, und das <strong>Honeywell Home T6</strong> bleibt eine sichere Wahl, wenn die Wärmepumpe OpenTherm unterstützt.</p>
<p>Dieser Ratgeber stützt sich auf Herstellerangaben, unabhängige Testberichte und verifizierte Käuferbewertungen. Er berücksichtigt nur Modelle, die derzeit in Europa erhältlich sind. Die komplette Auswahl finden Sie in unserem Katalog <a href="/de/energie-domotique/thermostats">smarte Thermostate</a>.</p>

<h2>Wärmepumpe und Thermostat: das Wichtigste</h2>
<p>Ein Gaskessel verträgt häufiges Ein- und Ausschalten gut, eine Wärmepumpe deutlich weniger. Ihre Effizienz (die Leistungszahl COP) ist am besten, wenn sie lange mit reduzierter Leistung und möglichst niedriger Vorlauftemperatur läuft. Moderne Inverter-Wärmepumpen modulieren ihre Leistung und folgen einer <strong>Heizkurve</strong> (witterungsgeführte Regelung): Je milder es draußen ist, desto niedriger die Vorlauftemperatur.</p>
<p>Ein unpassendes Thermostat kann diese Logik stören. Schaltet es die Wärmepumpe ab und wieder ein, sobald der Raum den Sollwert um einige Zehntelgrad überschreitet, entsteht <strong>Takten</strong>: Der Verdichter startet häufiger, verschleißt schneller, und die Effizienz sinkt. Das richtige Thermostat lässt die Anlage modulieren oder steuert diese Modulation direkt.</p>
<h3>Drei Arten, ein Thermostat an die Wärmepumpe anzuschließen</h3>
<ul>
<li><strong>Potenzialfreier Kontakt (Ein/Aus)</strong>: die verbreitetste Lösung. Das Thermostat öffnet oder schließt einen Kontakt am Raumthermostat-Eingang der Wärmepumpe. Einfach und universell, aber die Wärmepumpe erhält nur einen Ein- oder Aus-Befehl.</li>
<li><strong>OpenTherm</strong>: ein bidirektionales Kommunikationsprotokoll. Das Thermostat kann je nach Raumbedarf eine höhere oder niedrigere Vorlauftemperatur anfordern. Nicht jede Wärmepumpe unterstützt es; prüfen Sie Anleitung oder Regelmodul.</li>
<li><strong>Herstellerspezifische Schnittstelle</strong>: Manche Lösungen werden an den eigenen Kommunikationsbus der Wärmepumpenmarke angeschlossen. So arbeitet der tado Heat Pump Optimizer X und erhält Zugriff auf mehr Einstellungen als über einen einfachen Kontakt.</li>
</ul>

<h2>Worauf Sie beim Kauf achten sollten</h2>
<ul>
<li><strong>Kompatibilität mit Ihrer Wärmepumpe</strong>: das wichtigste Kriterium. Notieren Sie Marke und genaue Typenbezeichnung der Inneneinheit und prüfen Sie sie im Kompatibilitäts-Check des Thermostat-Herstellers.</li>
<li><strong>Art der Ansteuerung</strong>: Ein/Aus, OpenTherm oder Herstellerschnittstelle. Je reicher die Kommunikation, desto besser bleibt die Modulation erhalten.</li>
<li><strong>Wärmeübergabe</strong>: Eine Fußbodenheizung ist sehr träge; ein vorausschauendes Thermostat (Lernfunktion, Wetterdaten) nützt hier mehr als aggressive Zeitprogramme.</li>
<li><strong>Warmwasser</strong>: Erzeugt Ihre Wärmepumpe auch Warmwasser, prüfen Sie, ob Thermostat oder Modul es planen kann.</li>
<li><strong>Smart-Home-Ökosystem</strong>: Matter, Apple Home, Google Home, Amazon Alexa. Aktuelle Serien setzen auf Matter, was die Einbindung erleichtert.</li>
<li><strong>Abonnements</strong>: Manche Zusatzfunktionen (dynamische Tarife, Automatisierungen) kosten extra. Prüfen Sie den Leistungsumfang vor dem Kauf.</li>
</ul>

<h2>Die besten smarten Thermostate für Wärmepumpen 2026</h2>

<h3>1. tado Heat Pump Optimizer X: beste Wahl für eine kompatible Wärmepumpe</h3>
<p>Der Heat Pump Optimizer X ist kein klassisches Raumthermostat, sondern ein Modul, das an die Wärmepumpe angeschlossen wird. Er funktioniert laut der von tado veröffentlichten Liste mit Luft-Wasser-, Wasser-Wasser- und Sole-Wasser-Wärmepumpen mehrerer großer europäischer Marken: Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu und Panasonic. Er nutzt die von tado-X-Thermostaten und Heizkörperthermostaten gemessenen Raumtemperaturen, um die Leistung der Wärmepumpe zu senken oder sie in Bereitschaft zu versetzen, sobald die Räume warm sind, statt sie abrupt abzuschalten.</p>
<p><strong>Stärken</strong>: Steuerung von Heizung und Warmwasser in der tado-App, Verbrauchsübersicht, eine auf Marke und Modell zugeschnittene Installationsanleitung, integrierter Thread-Border-Router (keine Bridge X nötig) und Matter-Unterstützung. tado gibt im Schnitt 22 % mehr Effizienz an; das ist eine Herstellerangabe und als grober Richtwert zu verstehen.</p>
<p><strong>Schwächen</strong>: Die Liste kompatibler Wärmepumpen ist noch begrenzt, für die Einzelraumregelung braucht es tado-X-Thermostate oder Heizkörperthermostate, und Funktionen für dynamische Tarife setzen das optionale Abo tado Balance voraus.</p>
<p><strong>Für wen</strong>: Besitzer einer Wärmepumpe einer kompatiblen Marke, die die umfassendste Optimierung wollen.</p>

<h3>2. tado Smart Thermostat X: das vielseitige Raumthermostat</h3>
<p>Das Smart Thermostat X (verkabelte Version) ersetzt ein vorhandenes Raumthermostat. Es arbeitet je nach Wärmepumpe über einen Ein/Aus-Kontakt oder OpenTherm und eignet sich auch für wassergeführte Fußbodenheizungen. Es funkt über Thread und lässt sich per Matter in Apple Home, Google Home und Alexa einbinden.</p>
<p><strong>Stärken</strong>: intelligente Zeitpläne, Geofencing, Fenster-offen-Erkennung, sehr umfangreiche App und Erweiterung mit Smart Radiator Thermostat X für einzelne Räume.</p>
<p><strong>Schwächen</strong>: Es benötigt eine tado Bridge X oder einen anderen Thread-Border-Router; einige Automatisierungen gehören zu kostenpflichtigen Optionen.</p>
<p><strong>Für wen</strong>: Wärmepumpen außerhalb der Optimizer-X-Liste oder Haushalte, die ein modernes, erweiterbares Raumthermostat suchen.</p>

<h3>3. Netatmo Thermostat Original: am einfachsten und bestes Preis-Leistungs-Verhältnis</h3>
<p>Die Anfang 2026 eingeführte Original-Serie löst das bisherige Netatmo-Thermostat ab. Es gibt sie verkabelt (mit Thermo Hub) und kabellos (mit Thermo-Link-Empfänger und Thermo Hub). Netatmo gibt Kompatibilität mit den meisten Einzelkesseln und Luft-Wasser-Wärmepumpen an.</p>
<p><strong>Stärken</strong>: geführte Installation, Auto-Adapt für vorausschauendes Heizen nach Wetter und Dämmung, Eco-Assist bei Abwesenheit, Monatsberichte, Matter über den Thermo Hub und die App Home + Control.</p>
<p><strong>Schwächen</strong>: Die Original-Serie ist nicht mit älterem Netatmo-Zubehör kompatibel; vorhandene Heizkörperventile der ersten Generation müssen ersetzt werden.</p>
<p><strong>Für wen</strong>: Wärmepumpen mit einfachem Ein/Aus-Kontakt und Haushalte, die eine schlichte Lösung ohne komplizierte Einrichtung wollen.</p>

<h3>4. Honeywell Home T6: die bewährte OpenTherm-Lösung</h3>
<p>Das T6 (verkabelt) und die Variante T6R (kabellos) sind mit 24–230-V-Ein/Aus- und OpenTherm-Geräten kompatibel, darunter Wärmepumpen. Sie verbinden sich direkt mit dem WLAN, ohne zusätzlichen Hub.</p>
<p><strong>Stärken</strong>: gut lesbarer Touchscreen, Geofencing, Zeitpläne in der App Honeywell Home (Resideo), bei Installateuren weit verbreitet.</p>
<p><strong>Schwächen</strong>: Design und App wirken weniger modern als bei tado oder Netatmo; die Einzelraumregelung ist weniger integriert.</p>
<p><strong>Für wen</strong>: OpenTherm-fähige Wärmepumpen und Nutzer, die ein bewährtes Thermostat ohne Ökosystem-Bindung wollen.</p>

<h3>Und das Google Nest Learning Thermostat?</h3>
<p>Google hat angekündigt, in Europa keine neuen Nest-Thermostate mehr einzuführen. Das Nest Learning Thermostat der 4. Generation wird hier nicht verkauft, das Modell der 3. Generation nur solange der Vorrat reicht. Für einen langfristigen Neukauf sind die oben genannten Modelle die bessere Wahl.</p>

<h3>Und die Regelung des Wärmepumpenherstellers?</h3>
<p>Daikin, Vaillant, Atlantic und Panasonic bieten eigene Thermostate und Apps an. Sie kennen die Anlage genau, fügen sich aber oft weniger gut ins übrige Smart Home ein. Eine Option, die man im Blick behalten sollte, vor allem wenn Ihr Installateur sie bereits eingeplant hat.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Modell</th><th>Ansteuerung der Wärmepumpe</th><th>Konnektivität</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td>tado Heat Pump Optimizer X</td><td>Spezielle Schnittstelle für kompatible Marken</td><td>WLAN, Thread (integrierter Border-Router), Matter</td><td>Wärmepumpen von Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic</td></tr>
<tr><td>tado Smart Thermostat X</td><td>Ein/Aus oder OpenTherm</td><td>Thread, Matter (Bridge X erforderlich)</td><td>Erweiterbares Raumthermostat</td></tr>
<tr><td>Netatmo Thermostat Original</td><td>Ein/Aus-Kontakt</td><td>WLAN, Matter über Thermo Hub</td><td>Einfachheit, überschaubares Budget</td></tr>
<tr><td>Honeywell Home T6</td><td>Ein/Aus oder OpenTherm</td><td>Direktes WLAN</td><td>OpenTherm-Wärmepumpen ohne Hub</td></tr>
</tbody>
</table>

<h2>Häufige Fehler</h2>
<ul>
<li><strong>Ohne Kompatibilitätsprüfung kaufen</strong>: Eine Wärmepumpe ohne Thermostateingang oder mit gesperrter Regelung funktioniert nicht mit jedem Modell.</li>
<li><strong>Starke Nachtabsenkung programmieren</strong>: Bei einer Wärmepumpe, besonders mit Fußbodenheizung, zwingen Absenkungen um 4–5 °C die Anlage morgens zu hoher Leistung, oft mit dem elektrischen Heizstab. Senken Sie nur moderat ab.</li>
<li><strong>Schaltdifferenz zu eng einstellen</strong>: Das vervielfacht das Takten.</li>
<li><strong>Die Heizkurve vergessen</strong>: Ein smartes Thermostat ergänzt eine gut eingestellte Heizkurve, es ersetzt sie nicht. Lassen Sie sie vom Installateur optimieren.</li>
<li><strong>Falscher Montageort</strong>: Neben einem Fenster, einem Kamin oder in direkter Sonne misst das Thermostat falsche Werte.</li>
</ul>

<h2>Installation und Sicherheit</h2>
<p>Schalten Sie vor jedem Eingriff die Stromversorgung der Wärmepumpe ab. Ein verkabeltes Thermostat an einem potenzialfreien Kontakt oder OpenTherm auszutauschen, schaffen sorgfältige Heimwerker mit der Anleitung der App. Der Anschluss eines Moduls an die Regelplatine der Wärmepumpe oder Arbeiten an einer Anlage unter Garantie gehören dagegen in die Hände des Installateurs oder einer Elektrofachkraft: Ein Verdrahtungsfehler kann die Elektronik beschädigen und die Garantie gefährden.</p>
<p>Montieren Sie das Thermostat im Hauptwohnraum an einer Innenwand, etwa 1,5 m über dem Boden, fern von Wärmequellen und Zugluft. Prüfen Sie dort auch die WLAN- oder Thread-Abdeckung.</p>

<h2>Förderung</h2>
<p>Ein einzeln gekauftes smartes Thermostat wird selten gefördert, die Regelung kann aber Teil des Angebots für eine förderfähige Wärmepumpe sein. Die Bedingungen ändern sich regelmäßig; informieren Sie sich vor der Unterschrift bei den offiziellen Stellen oder einer Energieberatung. Mehr dazu in unserem <a href="/de/blog/guide-domotique-economie-energie-2026">Ratgeber Smart Home und Energiesparen</a> und in unserem Vergleich <a href="/de/blog/compteur-energie-connecte-comparatif">smarter Energiezähler</a>, mit denen Sie den tatsächlichen Verbrauch der Wärmepumpe verfolgen.</p>

<h2>Unser Fazit</h2>
<p>Steht Ihre Wärmepumpe auf der Kompatibilitätsliste, ist der <strong>tado Heat Pump Optimizer X</strong> die umfassendste Lösung: Er steuert die Wärmepumpe selbst und nicht nur einen Kontakt. Für eine Ein/Aus-Wärmepumpe bietet das <strong>Netatmo Thermostat Original</strong> die beste Balance aus Einfachheit und Funktionen. Das <strong>tado Smart Thermostat X</strong> und das <strong>Honeywell Home T6</strong> sind die richtige Wahl, um OpenTherm zu nutzen. In jedem Fall gilt: Lassen Sie zuerst die Heizkurve Ihrer Wärmepumpe prüfen, denn sie bestimmt den größten Teil der Effizienz.</p>`,

    es: `<p>Para una bomba de calor aire-agua, el mejor termostato inteligente en 2026 es el que se comunica con la bomba en lugar de limitarse a encenderla y apagarla: el <strong>tado Heat Pump Optimizer X</strong> es hoy la solución más completa para las marcas compatibles (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic). Si tu bomba solo admite un contacto on/off, basta con un termostato sencillo y bien ajustado como el <strong>Netatmo Thermostat Original</strong>, y el <strong>Honeywell Home T6</strong> sigue siendo una apuesta segura cuando la bomba es compatible con OpenTherm.</p>
<p>Esta guía se basa en las fichas técnicas de los fabricantes, análisis independientes y opiniones de compradores verificados. Solo incluye modelos que se venden actualmente en Europa. Encontrarás toda la selección en nuestro catálogo de <a href="/es/energie-domotique/thermostats">termostatos inteligentes</a>.</p>

<h2>Bomba de calor y termostato: lo que hay que saber</h2>
<p>Una caldera de gas tolera bien los encendidos y apagados frecuentes. Una bomba de calor, mucho menos. Su rendimiento (el COP) es mejor cuando funciona durante mucho tiempo a potencia reducida y con el agua de calefacción lo más templada posible. Las bombas Inverter modernas modulan su potencia y siguen una <strong>curva de calefacción</strong> (compensación climática): cuanto más suave es la temperatura exterior, más baja la temperatura de impulsión.</p>
<p>Un termostato inadecuado puede romper esta lógica. Si apaga y vuelve a encender la bomba en cuanto la estancia supera la consigna en unas décimas, provoca <strong>ciclos cortos</strong>: el compresor arranca más a menudo, se desgasta antes y el rendimiento cae. El termostato adecuado deja que la máquina module o controla directamente esa modulación.</p>
<h3>Tres formas de conectar un termostato a una bomba de calor</h3>
<ul>
<li><strong>Contacto libre de tensión (on/off)</strong>: la opción más habitual. El termostato abre o cierra un contacto en la entrada de termostato ambiente de la bomba. Sencillo y universal, pero la bomba solo recibe una orden de marcha o paro.</li>
<li><strong>OpenTherm</strong>: protocolo de comunicación bidireccional. El termostato puede pedir una temperatura de impulsión más alta o más baja según la necesidad de la estancia. No todas las bombas lo admiten: revisa el manual o el módulo de control instalado.</li>
<li><strong>Interfaz específica del fabricante</strong>: algunas soluciones se conectan al bus de comunicación propio de la marca de la bomba. Así funciona el tado Heat Pump Optimizer X, que accede a más ajustes que un simple contacto.</li>
</ul>

<h2>Criterios para elegir bien</h2>
<ul>
<li><strong>Compatibilidad con tu bomba de calor</strong>: el criterio número uno. Anota la marca y la referencia exacta de la unidad interior y compruébalas en la herramienta de compatibilidad del fabricante del termostato.</li>
<li><strong>Tipo de control</strong>: on/off, OpenTherm o interfaz del fabricante. Cuanto más rica es la comunicación, mejor se preserva la modulación de la bomba.</li>
<li><strong>Emisores de calor</strong>: el suelo radiante tiene mucha inercia, así que un termostato que anticipa (aprendizaje, previsión meteorológica) es más útil que una programación agresiva.</li>
<li><strong>Agua caliente sanitaria</strong>: si tu bomba también produce ACS, comprueba que el termostato o el módulo permite programarla.</li>
<li><strong>Ecosistema domótico</strong>: Matter, Apple Casa, Google Home, Amazon Alexa. Las gamas recientes usan Matter, lo que facilita la integración.</li>
<li><strong>Suscripciones</strong>: algunas funciones avanzadas (tarifas dinámicas, automatizaciones) son de pago. Revisa qué está incluido antes de comprar.</li>
</ul>

<h2>Los mejores termostatos inteligentes para bomba de calor en 2026</h2>

<h3>1. tado Heat Pump Optimizer X: la mejor opción para una bomba compatible</h3>
<p>El Heat Pump Optimizer X no es un termostato ambiente clásico, sino un módulo que se conecta a la bomba de calor. Funciona con bombas aire-agua, agua-agua y salmuera-agua de varias grandes marcas europeas: Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu y Panasonic, según la lista publicada por tado. Utiliza las temperaturas medidas en las estancias por los termostatos y cabezales tado X para reducir la potencia de la bomba o ponerla en espera cuando las estancias alcanzan la temperatura, en lugar de apagarla bruscamente.</p>
<p><strong>Puntos fuertes</strong>: control de la calefacción y del agua caliente desde la app de tado, seguimiento del consumo, guía de instalación adaptada a la marca y al modelo, router de borde Thread integrado (sin necesidad de Bridge X) y compatibilidad con Matter. tado anuncia de media un 22 % más de eficiencia; es una cifra del fabricante que conviene tomar como orientación.</p>
<p><strong>Limitaciones</strong>: la lista de bombas compatibles aún es reducida, hacen falta termostatos o cabezales tado X para la regulación por estancias y las tarifas dinámicas requieren la suscripción opcional tado Balance.</p>
<p><strong>Para quién</strong>: propietarios de una bomba de una marca compatible que buscan la optimización más avanzada.</p>

<h3>2. tado Smart Thermostat X: el termostato ambiente versátil</h3>
<p>El Smart Thermostat X (versión con cable) sustituye a un termostato ambiente existente. Funciona con contacto on/off u OpenTherm, según lo que acepte la bomba, y también sirve para suelo radiante por agua. Utiliza Thread y se integra mediante Matter en Apple Casa, Google Home y Alexa.</p>
<p><strong>Puntos fuertes</strong>: programación inteligente, geolocalización, detección de ventana abierta, una app muy completa y ampliación por estancias con cabezales Smart Radiator Thermostat X.</p>
<p><strong>Limitaciones</strong>: necesita un tado Bridge X u otro router de borde Thread, y algunas automatizaciones forman parte de opciones de pago.</p>
<p><strong>Para quién</strong>: bombas fuera de la lista del Optimizer X u hogares que quieren un termostato ambiente moderno y ampliable.</p>

<h3>3. Netatmo Thermostat Original: el más sencillo y con mejor relación calidad-precio</h3>
<p>Lanzada a principios de 2026, la gama Original renueva el termostato de Netatmo. Existe en versión con cable (Thermo Hub incluido) y sin cable (receptor Thermo Link y Thermo Hub incluidos). Netatmo la declara compatible con la mayoría de calderas individuales y bombas de calor aire-agua.</p>
<p><strong>Puntos fuertes</strong>: instalación guiada, función Auto-Adapt que anticipa el encendido según el clima y el aislamiento, modo Eco-Assist en ausencia, informes mensuales, Matter a través del Thermo Hub y app Home + Control.</p>
<p><strong>Limitaciones</strong>: la gama Original no es compatible con los accesorios Netatmo anteriores; si ya tienes válvulas Netatmo de primera generación, habrá que sustituirlas.</p>
<p><strong>Para quién</strong>: bombas controladas por un simple contacto on/off y hogares que buscan una solución sencilla, sin configuración compleja.</p>

<h3>4. Honeywell Home T6: el valor seguro en OpenTherm</h3>
<p>El T6 (con cable) y su variante T6R (inalámbrica) son compatibles con equipos on/off de 24-230 V y OpenTherm, incluidas las bombas de calor. Se conectan directamente al wifi, sin hub adicional.</p>
<p><strong>Puntos fuertes</strong>: pantalla táctil legible, geolocalización, programación desde la app Honeywell Home (Resideo) y amplia presencia entre instaladores.</p>
<p><strong>Limitaciones</strong>: diseño y app menos modernos que los de tado o Netatmo, y una regulación por estancias menos integrada.</p>
<p><strong>Para quién</strong>: bombas compatibles con OpenTherm y usuarios que quieren un termostato de eficacia contrastada sin depender de un ecosistema.</p>

<h3>¿Y el Google Nest Learning Thermostat?</h3>
<p>Google ha anunciado que no lanzará nuevos termostatos Nest en Europa. El Nest Learning Thermostat de 4.ª generación no se vende aquí y el modelo de 3.ª generación solo está disponible hasta agotar existencias. Para una compra nueva pensada para durar, los modelos anteriores son mejor opción.</p>

<h3>¿Y el control del propio fabricante de la bomba?</h3>
<p>Daikin, Vaillant, Atlantic o Panasonic ofrecen sus propios termostatos y aplicaciones. Conocen la máquina a la perfección, pero suelen integrarse peor con el resto de la casa conectada. Es una opción a tener en cuenta, sobre todo si tu instalador ya la ha previsto.</p>

<h2>Tabla comparativa</h2>
<table>
<thead>
<tr><th>Modelo</th><th>Control de la bomba</th><th>Conectividad</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td>tado Heat Pump Optimizer X</td><td>Interfaz dedicada para marcas compatibles</td><td>Wifi, Thread (router integrado), Matter</td><td>Bombas Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic</td></tr>
<tr><td>tado Smart Thermostat X</td><td>On/off u OpenTherm</td><td>Thread, Matter (requiere Bridge X)</td><td>Termostato ambiente ampliable</td></tr>
<tr><td>Netatmo Thermostat Original</td><td>Contacto on/off</td><td>Wifi, Matter vía Thermo Hub</td><td>Sencillez, presupuesto contenido</td></tr>
<tr><td>Honeywell Home T6</td><td>On/off u OpenTherm</td><td>Wifi directo</td><td>Bombas OpenTherm, sin hub</td></tr>
</tbody>
</table>

<h2>Errores que debes evitar</h2>
<ul>
<li><strong>Comprar sin comprobar la compatibilidad</strong>: una bomba sin entrada de termostato o con el control bloqueado no funcionará con cualquier modelo.</li>
<li><strong>Programar bajadas nocturnas fuertes</strong>: con una bomba de calor, sobre todo con suelo radiante, bajadas de 4-5 °C obligan a la máquina a forzar por la mañana, a menudo con la resistencia eléctrica de apoyo. Mejor bajadas moderadas.</li>
<li><strong>Ajustar un diferencial demasiado estrecho</strong>: multiplica los ciclos cortos.</li>
<li><strong>Olvidar la curva de calefacción</strong>: un termostato inteligente complementa una curva bien ajustada, no la sustituye. Pide a tu instalador que la optimice.</li>
<li><strong>Colocar el termostato en mal sitio</strong>: junto a una ventana, una chimenea o al sol directo, mide una temperatura errónea.</li>
</ul>

<h2>Instalación y seguridad</h2>
<p>Corta siempre la alimentación eléctrica de la bomba antes de intervenir. Sustituir un termostato con cable en contacto libre de tensión u OpenTherm está al alcance de un aficionado cuidadoso que siga la guía de la app. En cambio, conectar un módulo a la placa de control de la bomba, o cualquier intervención en una instalación en garantía, debe hacerlo el instalador o un electricista cualificado: un error de cableado puede dañar la electrónica y afectar a la garantía.</p>
<p>Instala el termostato en la estancia principal, en una pared interior, a unos 1,5 m del suelo, lejos de fuentes de calor y corrientes de aire. Comprueba también la cobertura wifi o Thread en ese punto.</p>

<h2>Ayudas</h2>
<p>Un termostato inteligente comprado por separado rara vez está subvencionado, pero el control puede formar parte del presupuesto de instalación de una bomba de calor que opte a ayudas públicas. Las condiciones cambian a menudo: consulta las fuentes oficiales o a un asesor energético antes de firmar. Para saber más, lee nuestra <a href="/es/blog/guide-domotique-economie-energie-2026">guía de domótica y ahorro energético</a> y nuestra comparativa de <a href="/es/blog/compteur-energie-connecte-comparatif">medidores de energía inteligentes</a>, útiles para seguir el consumo real de la bomba.</p>

<h2>Nuestro veredicto</h2>
<p>Si tu bomba de calor figura en la lista de compatibilidad, el <strong>tado Heat Pump Optimizer X</strong> es la solución más completa: controla la propia bomba y no solo un contacto. Para una bomba on/off, el <strong>Netatmo Thermostat Original</strong> ofrece el mejor equilibrio entre sencillez y funciones. El <strong>tado Smart Thermostat X</strong> y el <strong>Honeywell Home T6</strong> son las opciones adecuadas para aprovechar OpenTherm. En cualquier caso, haz revisar primero la curva de calefacción de tu bomba: de ella depende la mayor parte del rendimiento.</p>`,

    it: `<p>Per una pompa di calore aria-acqua, il miglior termostato smart nel 2026 è quello che dialoga con la pompa invece di limitarsi ad accenderla e spegnerla: il <strong>tado Heat Pump Optimizer X</strong> è oggi la soluzione più completa per le marche compatibili (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic). Se la tua pompa accetta solo un contatto on/off, basta un termostato semplice e ben regolato come il <strong>Netatmo Thermostat Original</strong>, mentre l’<strong>Honeywell Home T6</strong> resta una scelta sicura quando la pompa è compatibile OpenTherm.</p>
<p>Questa guida si basa sulle schede tecniche dei produttori, recensioni indipendenti e opinioni di acquirenti verificati. Include solo modelli attualmente venduti in Europa. Trovi tutta la selezione nel nostro catalogo di <a href="/it/energie-domotique/thermostats">termostati smart</a>.</p>

<h2>Pompa di calore e termostato: cosa sapere</h2>
<p>Una caldaia a gas tollera bene accensioni e spegnimenti frequenti. Una pompa di calore molto meno. Il suo rendimento (il COP) è migliore quando funziona a lungo, a potenza ridotta, con l’acqua di riscaldamento il più tiepida possibile. Le pompe Inverter moderne modulano la potenza e seguono una <strong>curva climatica</strong>: più è mite all’esterno, più si abbassa la temperatura di mandata.</p>
<p>Un termostato sbagliato può compromettere questa logica. Se spegne e riaccende la pompa appena la stanza supera di qualche decimo la temperatura impostata, provoca <strong>cicli brevi</strong>: il compressore si avvia più spesso, si usura prima e il rendimento cala. Il termostato giusto lascia modulare la macchina o controlla direttamente la modulazione.</p>
<h3>Tre modi per collegare un termostato a una pompa di calore</h3>
<ul>
<li><strong>Contatto pulito (on/off)</strong>: la soluzione più diffusa. Il termostato apre o chiude un contatto sull’ingresso termostato ambiente della pompa. Semplice e universale, ma la pompa riceve solo un comando di accensione o spegnimento.</li>
<li><strong>OpenTherm</strong>: protocollo di comunicazione bidirezionale. Il termostato può chiedere una temperatura di mandata più alta o più bassa in base al fabbisogno della stanza. Non tutte le pompe lo supportano: verifica il manuale o il modulo di regolazione installato.</li>
<li><strong>Interfaccia dedicata del produttore</strong>: alcune soluzioni si collegano al bus di comunicazione proprio della marca della pompa. È il principio del tado Heat Pump Optimizer X, che accede così a più impostazioni di un semplice contatto.</li>
</ul>

<h2>I criteri per scegliere bene</h2>
<ul>
<li><strong>Compatibilità con la tua pompa</strong>: il criterio numero uno. Annota marca e modello esatto dell’unità interna e verificali con lo strumento di compatibilità del produttore del termostato.</li>
<li><strong>Tipo di controllo</strong>: on/off, OpenTherm o interfaccia del produttore. Più ricca è la comunicazione, meglio si preserva la modulazione della pompa.</li>
<li><strong>Terminali di riscaldamento</strong>: un pavimento radiante ha molta inerzia, quindi un termostato che anticipa (apprendimento, previsioni meteo) è più utile di una programmazione aggressiva.</li>
<li><strong>Acqua calda sanitaria</strong>: se la pompa produce anche ACS, verifica che il termostato o il modulo permetta di programmarla.</li>
<li><strong>Ecosistema domotico</strong>: Matter, Apple Casa, Google Home, Amazon Alexa. Le gamme recenti usano Matter, che semplifica l’integrazione.</li>
<li><strong>Abbonamenti</strong>: alcune funzioni avanzate (tariffe dinamiche, automazioni) sono a pagamento. Controlla cosa è incluso prima dell’acquisto.</li>
</ul>

<h2>I migliori termostati smart per pompa di calore nel 2026</h2>

<h3>1. tado Heat Pump Optimizer X: la scelta migliore per una pompa compatibile</h3>
<p>L’Heat Pump Optimizer X non è un classico termostato ambiente, ma un modulo che si collega alla pompa di calore. Funziona con pompe aria-acqua, acqua-acqua e salamoia-acqua di diversi grandi marchi europei: Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu e Panasonic, secondo l’elenco pubblicato da tado. Usa le temperature rilevate nelle stanze dai termostati e dalle teste termostatiche tado X per ridurre la potenza della pompa o metterla in standby quando le stanze sono in temperatura, invece di spegnerla bruscamente.</p>
<p><strong>Punti di forza</strong>: controllo di riscaldamento e acqua calda dall’app tado, monitoraggio dei consumi, guida all’installazione adattata a marca e modello, border router Thread integrato (senza Bridge X) e compatibilità Matter. tado dichiara in media un 22 % di efficienza in più; è un dato del produttore, da considerare come ordine di grandezza.</p>
<p><strong>Limiti</strong>: l’elenco delle pompe compatibili è ancora ridotto, servono termostati o teste tado X per la regolazione stanza per stanza e le tariffe dinamiche richiedono l’abbonamento opzionale tado Balance.</p>
<p><strong>Per chi</strong>: i proprietari di una pompa di una marca compatibile che vogliono l’ottimizzazione più spinta.</p>

<h3>2. tado Smart Thermostat X: il termostato ambiente versatile</h3>
<p>Lo Smart Thermostat X (versione cablata) sostituisce un termostato ambiente esistente. Funziona con contatto on/off o OpenTherm, a seconda di ciò che accetta la pompa, ed è adatto anche ai pavimenti radianti ad acqua. Comunica in Thread e si integra tramite Matter con Apple Casa, Google Home e Alexa.</p>
<p><strong>Punti di forza</strong>: programmazione intelligente, geolocalizzazione, rilevamento finestra aperta, app molto completa ed espansione stanza per stanza con le teste Smart Radiator Thermostat X.</p>
<p><strong>Limiti</strong>: richiede un tado Bridge X o un altro border router Thread; alcune automazioni fanno parte di opzioni a pagamento.</p>
<p><strong>Per chi</strong>: pompe fuori dall’elenco dell’Optimizer X o famiglie che vogliono un termostato ambiente moderno ed espandibile.</p>

<h3>3. Netatmo Thermostat Original: il più semplice e con il miglior rapporto qualità-prezzo</h3>
<p>Lanciata all’inizio del 2026, la gamma Original rinnova il termostato Netatmo. Esiste in versione cablata (Thermo Hub incluso) e senza fili (ricevitore Thermo Link e Thermo Hub inclusi). Netatmo la dichiara compatibile con la maggior parte delle caldaie autonome e delle pompe di calore aria-acqua.</p>
<p><strong>Punti di forza</strong>: installazione guidata, funzione Auto-Adapt che anticipa l’accensione in base a meteo e isolamento, modalità Eco-Assist in assenza, report mensili, Matter tramite il Thermo Hub e app Home + Control.</p>
<p><strong>Limiti</strong>: la gamma Original non è compatibile con i vecchi accessori Netatmo; le valvole Netatmo di prima generazione vanno sostituite.</p>
<p><strong>Per chi</strong>: pompe comandate da un semplice contatto on/off e famiglie che cercano una soluzione essenziale, senza configurazioni complesse.</p>

<h3>4. Honeywell Home T6: la certezza in OpenTherm</h3>
<p>Il T6 (cablato) e la variante T6R (wireless) sono compatibili con apparecchi on/off 24-230 V e OpenTherm, comprese le pompe di calore. Si collegano direttamente al Wi-Fi, senza hub aggiuntivo.</p>
<p><strong>Punti di forza</strong>: touchscreen leggibile, geolocalizzazione, programmazione dall’app Honeywell Home (Resideo) e ampia diffusione presso gli installatori.</p>
<p><strong>Limiti</strong>: design e app meno moderni rispetto a tado o Netatmo, regolazione stanza per stanza meno integrata.</p>
<p><strong>Per chi</strong>: pompe compatibili OpenTherm e utenti che vogliono un termostato collaudato senza vincoli di ecosistema.</p>

<h3>E il Google Nest Learning Thermostat?</h3>
<p>Google ha annunciato che non lancerà più nuovi termostati Nest in Europa. Il Nest Learning Thermostat di 4ª generazione non è venduto qui e il modello di 3ª generazione è disponibile solo fino a esaurimento scorte. Per un nuovo acquisto destinato a durare, conviene puntare sui modelli precedenti.</p>

<h3>E la regolazione del produttore della pompa?</h3>
<p>Daikin, Vaillant, Atlantic e Panasonic offrono termostati e app proprietari. Conoscono perfettamente la macchina, ma spesso si integrano meno bene con il resto della casa connessa. È un’opzione da considerare, soprattutto se l’installatore l’ha già prevista.</p>

<h2>Tabella comparativa</h2>
<table>
<thead>
<tr><th>Modello</th><th>Controllo della pompa</th><th>Connettività</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td>tado Heat Pump Optimizer X</td><td>Interfaccia dedicata per marche compatibili</td><td>Wi-Fi, Thread (border router integrato), Matter</td><td>Pompe Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic</td></tr>
<tr><td>tado Smart Thermostat X</td><td>On/off o OpenTherm</td><td>Thread, Matter (richiede Bridge X)</td><td>Termostato ambiente espandibile</td></tr>
<tr><td>Netatmo Thermostat Original</td><td>Contatto on/off</td><td>Wi-Fi, Matter tramite Thermo Hub</td><td>Semplicità, budget contenuto</td></tr>
<tr><td>Honeywell Home T6</td><td>On/off o OpenTherm</td><td>Wi-Fi diretto</td><td>Pompe OpenTherm, senza hub</td></tr>
</tbody>
</table>

<h2>Gli errori da evitare</h2>
<ul>
<li><strong>Acquistare senza verificare la compatibilità</strong>: una pompa senza ingresso termostato o con regolazione bloccata non funzionerà con qualsiasi modello.</li>
<li><strong>Programmare forti abbassamenti notturni</strong>: con una pompa di calore, soprattutto su pavimento radiante, cali di 4-5 °C costringono la macchina a forzare al mattino, spesso con la resistenza elettrica integrativa. Meglio abbassamenti moderati.</li>
<li><strong>Impostare un differenziale troppo stretto</strong>: moltiplica i cicli brevi.</li>
<li><strong>Dimenticare la curva climatica</strong>: un termostato smart integra una curva ben regolata, non la sostituisce. Falla ottimizzare dall’installatore.</li>
<li><strong>Posizionare male il termostato</strong>: vicino a una finestra, un camino o al sole diretto, misura una temperatura falsata.</li>
</ul>

<h2>Installazione e sicurezza</h2>
<p>Togli sempre l’alimentazione elettrica della pompa prima di intervenire. Sostituire un termostato cablato su contatto pulito o OpenTherm è alla portata di un appassionato attento che segue la guida dell’app. Il collegamento di un modulo alla scheda di regolazione della pompa, o qualsiasi intervento su un impianto in garanzia, va invece affidato all’installatore o a un elettricista qualificato: un errore di cablaggio può danneggiare l’elettronica e compromettere la garanzia.</p>
<p>Installa il termostato nella stanza principale, su una parete interna, a circa 1,5 m dal pavimento, lontano da fonti di calore e correnti d’aria. Verifica anche la copertura Wi-Fi o Thread in quel punto.</p>

<h2>Incentivi</h2>
<p>Un termostato smart acquistato da solo raramente è incentivato, ma la regolazione può rientrare nel preventivo di installazione di una pompa di calore che accede alle agevolazioni pubbliche. Le regole cambiano spesso: verifica sulle fonti ufficiali o con un consulente energetico prima di firmare. Per approfondire, leggi la nostra <a href="/it/blog/guide-domotique-economie-energie-2026">guida a domotica e risparmio energetico</a> e il nostro confronto dei <a href="/it/blog/compteur-energie-connecte-comparatif">misuratori di energia smart</a>, utili per seguire i consumi reali della pompa.</p>

<h2>Il nostro verdetto</h2>
<p>Se la tua pompa di calore è nell’elenco di compatibilità, il <strong>tado Heat Pump Optimizer X</strong> è la soluzione più completa: controlla la pompa stessa e non solo un contatto. Per una pompa on/off, il <strong>Netatmo Thermostat Original</strong> offre il miglior equilibrio tra semplicità e funzioni. Il <strong>tado Smart Thermostat X</strong> e l’<strong>Honeywell Home T6</strong> sono le scelte giuste per sfruttare OpenTherm. In ogni caso, fai prima verificare la curva climatica della pompa: è lei a determinare gran parte del rendimento.</p>`,

    nl: `<p>Voor een lucht-waterwarmtepomp is in 2026 de beste slimme thermostaat er een die met de warmtepomp communiceert in plaats van hem alleen aan en uit te zetten: de <strong>tado Heat Pump Optimizer X</strong> is op dit moment de meest complete oplossing voor compatibele merken (Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic). Accepteert je warmtepomp alleen een aan/uit-contact, dan volstaat een eenvoudige, goed ingestelde thermostaat zoals de <strong>Netatmo Thermostat Original</strong>, en de <strong>Honeywell Home T6</strong> blijft een veilige keuze als de warmtepomp OpenTherm ondersteunt.</p>
<p>Deze gids is gebaseerd op specificaties van fabrikanten, onafhankelijke reviews en ervaringen van geverifieerde kopers. Hij bevat alleen modellen die momenteel in Europa verkocht worden. De volledige selectie vind je in onze catalogus <a href="/nl/energie-domotique/thermostats">slimme thermostaten</a>.</p>

<h2>Warmtepomp en thermostaat: wat je moet weten</h2>
<p>Een cv-ketel op gas kan goed tegen vaak aan- en uitschakelen. Een warmtepomp veel minder. Het rendement (de COP) is het best als hij lang draait op laag vermogen, met zo lauw mogelijk verwarmingswater. Moderne inverterwarmtepompen moduleren hun vermogen en volgen een <strong>stooklijn</strong> (weersafhankelijke regeling): hoe milder het buiten is, hoe lager de aanvoertemperatuur.</p>
<p>Een verkeerde thermostaat kan die logica verstoren. Schakelt hij de warmtepomp uit en weer aan zodra de kamer een paar tienden van een graad boven de ingestelde temperatuur komt, dan ontstaat <strong>pendelen</strong>: de compressor start vaker, slijt sneller en het rendement daalt. De juiste thermostaat laat de warmtepomp moduleren of stuurt die modulatie rechtstreeks aan.</p>
<h3>Drie manieren om een thermostaat op een warmtepomp aan te sluiten</h3>
<ul>
<li><strong>Potentiaalvrij contact (aan/uit)</strong>: de meest voorkomende oplossing. De thermostaat opent of sluit een contact op de kamerthermostaatingang van de warmtepomp. Eenvoudig en universeel, maar de warmtepomp krijgt alleen een aan- of uit-opdracht.</li>
<li><strong>OpenTherm</strong>: een tweerichtingscommunicatieprotocol. De thermostaat kan een hogere of lagere aanvoertemperatuur vragen afhankelijk van wat de kamer nodig heeft. Niet elke warmtepomp ondersteunt het: controleer de handleiding of de geïnstalleerde regelmodule.</li>
<li><strong>Merkspecifieke interface</strong>: sommige oplossingen worden aangesloten op de eigen communicatiebus van het warmtepompmerk. Zo werkt de tado Heat Pump Optimizer X, die daardoor meer instellingen kan aansturen dan via een eenvoudig contact.</li>
</ul>

<h2>Waar let je op bij de keuze?</h2>
<ul>
<li><strong>Compatibiliteit met je warmtepomp</strong>: het belangrijkste criterium. Noteer merk en exact type van de binnenunit en controleer ze met de compatibiliteitscheck van de thermostaatfabrikant.</li>
<li><strong>Type aansturing</strong>: aan/uit, OpenTherm of merkinterface. Hoe rijker de communicatie, hoe beter de modulatie van de warmtepomp behouden blijft.</li>
<li><strong>Afgiftesysteem</strong>: vloerverwarming is erg traag, dus een thermostaat die vooruitkijkt (zelflerend, weersverwachting) is nuttiger dan agressieve schema’s.</li>
<li><strong>Warm tapwater</strong>: maakt je warmtepomp ook tapwater, controleer dan of thermostaat of module dat kan plannen.</li>
<li><strong>Smart-home-ecosysteem</strong>: Matter, Apple Woning, Google Home, Amazon Alexa. Recente series gebruiken Matter, wat de integratie vereenvoudigt.</li>
<li><strong>Abonnementen</strong>: sommige geavanceerde functies (dynamische tarieven, automatiseringen) zijn betaald. Bekijk vóór aankoop wat inbegrepen is.</li>
</ul>

<h2>De beste slimme thermostaten voor warmtepompen in 2026</h2>

<h3>1. tado Heat Pump Optimizer X: beste keuze voor een compatibele warmtepomp</h3>
<p>De Heat Pump Optimizer X is geen klassieke kamerthermostaat, maar een module die op de warmtepomp wordt aangesloten. Hij werkt met lucht-water-, water-water- en bodem-waterwarmtepompen van verschillende grote Europese merken: Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu en Panasonic, volgens de lijst die tado publiceert. Hij gebruikt de kamertemperaturen die tado X-thermostaten en radiatorknoppen meten om het vermogen van de warmtepomp te verlagen of hem stand-by te zetten als de kamers op temperatuur zijn, in plaats van hem abrupt uit te schakelen.</p>
<p><strong>Sterke punten</strong>: aansturing van verwarming en warm water in de tado-app, verbruiksoverzicht, een installatiegids afgestemd op merk en model, ingebouwde Thread-borderrouter (geen Bridge X nodig) en Matter-ondersteuning. tado noemt gemiddeld 22 % meer efficiëntie; dat is een fabrieksopgave en vooral een indicatie.</p>
<p><strong>Beperkingen</strong>: de lijst met compatibele warmtepompen is nog beperkt, voor regeling per kamer zijn tado X-thermostaten of radiatorknoppen nodig, en functies voor dynamische tarieven vragen het optionele abonnement tado Balance.</p>
<p><strong>Voor wie</strong>: eigenaren van een warmtepomp van een compatibel merk die de meest geavanceerde optimalisatie willen.</p>

<h3>2. tado Smart Thermostat X: de veelzijdige kamerthermostaat</h3>
<p>De Smart Thermostat X (bedrade versie) vervangt een bestaande kamerthermostaat. Hij werkt via een aan/uit-contact of OpenTherm, afhankelijk van wat de warmtepomp accepteert, en is ook geschikt voor watergedragen vloerverwarming. Hij communiceert via Thread en integreert via Matter met Apple Woning, Google Home en Alexa.</p>
<p><strong>Sterke punten</strong>: slimme schema’s, geofencing, open-raamdetectie, een zeer complete app en uitbreiding per kamer met Smart Radiator Thermostat X-knoppen.</p>
<p><strong>Beperkingen</strong>: hij heeft een tado Bridge X of een andere Thread-borderrouter nodig, en sommige automatiseringen horen bij betaalde opties.</p>
<p><strong>Voor wie</strong>: warmtepompen die niet op de Optimizer X-lijst staan, of huishoudens die een moderne, uitbreidbare kamerthermostaat willen.</p>

<h3>3. Netatmo Thermostat Original: het eenvoudigst en de beste prijs-kwaliteitverhouding</h3>
<p>De Original-serie, begin 2026 gelanceerd, vervangt de vorige Netatmo-thermostaat. Er is een bedrade versie (met Thermo Hub) en een draadloze versie (met Thermo Link-ontvanger en Thermo Hub). Volgens Netatmo is hij compatibel met de meeste individuele ketels en lucht-waterwarmtepompen.</p>
<p><strong>Sterke punten</strong>: begeleide installatie, Auto-Adapt dat het opwarmen afstemt op weer en isolatie, Eco-Assist bij afwezigheid, maandrapporten, Matter via de Thermo Hub en de app Home + Control.</p>
<p><strong>Beperkingen</strong>: de Original-serie is niet compatibel met oudere Netatmo-accessoires; radiatorkranen van de eerste generatie moeten worden vervangen.</p>
<p><strong>Voor wie</strong>: warmtepompen met een eenvoudig aan/uit-contact en huishoudens die een sobere oplossing zonder ingewikkelde configuratie zoeken.</p>

<h3>4. Honeywell Home T6: de betrouwbare OpenTherm-keuze</h3>
<p>De T6 (bedraad) en de variant T6R (draadloos) zijn compatibel met 24-230 V aan/uit- en OpenTherm-toestellen, waaronder warmtepompen. Ze maken rechtstreeks verbinding met wifi, zonder extra hub.</p>
<p><strong>Sterke punten</strong>: goed leesbaar touchscreen, geofencing, schema’s in de Honeywell Home-app (Resideo) en ruim verkrijgbaar via installateurs.</p>
<p><strong>Beperkingen</strong>: design en app zijn minder modern dan bij tado of Netatmo, en regeling per kamer is minder geïntegreerd.</p>
<p><strong>Voor wie</strong>: OpenTherm-compatibele warmtepompen en gebruikers die een beproefde thermostaat willen zonder aan een ecosysteem vast te zitten.</p>

<h3>En de Google Nest Learning Thermostat?</h3>
<p>Google heeft aangekondigd geen nieuwe Nest-thermostaten meer in Europa uit te brengen. De Nest Learning Thermostat van de 4e generatie wordt hier niet verkocht en het model van de 3e generatie is alleen beschikbaar zolang de voorraad strekt. Voor een nieuwe aankoop die lang mee moet gaan, zijn de modellen hierboven een betere keuze.</p>

<h3>En de regeling van de warmtepompfabrikant zelf?</h3>
<p>Daikin, Vaillant, Atlantic en Panasonic bieden eigen thermostaten en apps. Die kennen de machine door en door, maar sluiten vaak minder goed aan op de rest van het slimme huis. Een optie om te overwegen, zeker als je installateur er al rekening mee heeft gehouden.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Model</th><th>Aansturing warmtepomp</th><th>Connectiviteit</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td>tado Heat Pump Optimizer X</td><td>Speciale interface voor compatibele merken</td><td>Wifi, Thread (ingebouwde borderrouter), Matter</td><td>Warmtepompen van Daikin, Atlantic, Vaillant, Saunier Duval, Fujitsu, Panasonic</td></tr>
<tr><td>tado Smart Thermostat X</td><td>Aan/uit of OpenTherm</td><td>Thread, Matter (Bridge X vereist)</td><td>Uitbreidbare kamerthermostaat</td></tr>
<tr><td>Netatmo Thermostat Original</td><td>Aan/uit-contact</td><td>Wifi, Matter via Thermo Hub</td><td>Eenvoud, beheersbaar budget</td></tr>
<tr><td>Honeywell Home T6</td><td>Aan/uit of OpenTherm</td><td>Rechtstreeks wifi</td><td>OpenTherm-warmtepompen, zonder hub</td></tr>
</tbody>
</table>

<h2>Fouten om te vermijden</h2>
<ul>
<li><strong>Kopen zonder de compatibiliteit te controleren</strong>: een warmtepomp zonder thermostaatingang of met een vergrendelde regeling werkt niet met elk model.</li>
<li><strong>Grote nachtverlagingen programmeren</strong>: bij een warmtepomp, zeker met vloerverwarming, dwingen verlagingen van 4-5 °C de machine ’s ochtends hard te werken, vaak met het elektrische bijverwarmingselement. Houd verlagingen beperkt.</li>
<li><strong>Een te krappe schakeldifferentie instellen</strong>: dat vermenigvuldigt het pendelen.</li>
<li><strong>De stooklijn vergeten</strong>: een slimme thermostaat vult een goed ingestelde stooklijn aan, maar vervangt die niet. Laat je installateur haar afstellen.</li>
<li><strong>De thermostaat op de verkeerde plek hangen</strong>: naast een raam, een haard of in de volle zon meet hij een verkeerde temperatuur.</li>
</ul>

<h2>Installatie en veiligheid</h2>
<p>Schakel altijd de stroom van de warmtepomp uit voordat je eraan werkt. Een bedrade thermostaat op een potentiaalvrij contact of OpenTherm vervangen lukt een zorgvuldige doe-het-zelver die de gids in de app volgt. Het aansluiten van een module op de regelprint van de warmtepomp, of werk aan een installatie onder garantie, laat je echter over aan de installateur of een gekwalificeerde elektricien: een bedradingsfout kan de elektronica beschadigen en de garantie in gevaar brengen.</p>
<p>Hang de thermostaat in de woonkamer, op een binnenmuur, op ongeveer 1,5 m hoogte, uit de buurt van warmtebronnen en tocht. Controleer ook het wifi- of Thread-bereik op die plek.</p>

<h2>Subsidies</h2>
<p>Een los gekochte slimme thermostaat wordt zelden gesubsidieerd, maar de regeling kan deel uitmaken van de offerte voor een warmtepomp die in aanmerking komt voor overheidssteun. De voorwaarden veranderen regelmatig: raadpleeg de officiële bronnen of een energieadviseur voordat je tekent. Lees voor meer informatie onze <a href="/nl/blog/guide-domotique-economie-energie-2026">gids over domotica en energiebesparing</a> en onze vergelijking van <a href="/nl/blog/compteur-energie-connecte-comparatif">slimme energiemeters</a>, handig om het echte verbruik van de warmtepomp te volgen.</p>

<h2>Ons oordeel</h2>
<p>Staat je warmtepomp op de compatibiliteitslijst, dan is de <strong>tado Heat Pump Optimizer X</strong> de meest complete oplossing: hij stuurt de warmtepomp zelf aan en niet alleen een contact. Voor een aan/uit-warmtepomp biedt de <strong>Netatmo Thermostat Original</strong> de beste balans tussen eenvoud en functies. De <strong>tado Smart Thermostat X</strong> en de <strong>Honeywell Home T6</strong> zijn de juiste keuzes om OpenTherm te benutten. Laat in elk geval eerst de stooklijn van je warmtepomp controleren: die bepaalt het grootste deel van het rendement.</p>`,
  },
  faq: [
    {
      question: {
        fr: 'Peut-on mettre n’importe quel thermostat connecté sur une pompe à chaleur ?',
        en: 'Can any smart thermostat be used with a heat pump?',
        de: 'Passt jedes smarte Thermostat zu einer Wärmepumpe?',
        es: '¿Se puede usar cualquier termostato inteligente con una bomba de calor?',
        it: 'Si può usare qualsiasi termostato smart con una pompa di calore?',
        nl: 'Kan elke slimme thermostaat op een warmtepomp worden aangesloten?',
      },
      answer: {
        fr: 'Non. Il faut que la PAC dispose d’une entrée pour thermostat d’ambiance (contact on/off), d’une compatibilité OpenTherm ou d’une interface prise en charge par le fabricant du thermostat. Relevez la référence exacte de l’unité intérieure et vérifiez-la dans l’outil de compatibilité avant d’acheter.',
        en: 'No. The heat pump needs a room thermostat input (on/off contact), OpenTherm support or an interface supported by the thermostat maker. Note the exact model of the indoor unit and check it in the compatibility tool before buying.',
        de: 'Nein. Die Wärmepumpe braucht einen Raumthermostat-Eingang (Ein/Aus-Kontakt), OpenTherm-Unterstützung oder eine vom Thermostat-Hersteller unterstützte Schnittstelle. Notieren Sie das genaue Modell der Inneneinheit und prüfen Sie es vor dem Kauf im Kompatibilitäts-Check.',
        es: 'No. La bomba necesita una entrada de termostato ambiente (contacto on/off), compatibilidad OpenTherm o una interfaz admitida por el fabricante del termostato. Anota el modelo exacto de la unidad interior y compruébalo en la herramienta de compatibilidad antes de comprar.',
        it: 'No. La pompa deve avere un ingresso per termostato ambiente (contatto on/off), la compatibilità OpenTherm o un’interfaccia supportata dal produttore del termostato. Annota il modello esatto dell’unità interna e verificalo nello strumento di compatibilità prima dell’acquisto.',
        nl: 'Nee. De warmtepomp heeft een kamerthermostaatingang (aan/uit-contact), OpenTherm-ondersteuning of een interface nodig die de thermostaatfabrikant ondersteunt. Noteer het exacte type van de binnenunit en controleer het vóór aankoop met de compatibiliteitscheck.',
      },
    },
    {
      question: {
        fr: 'Qu’est-ce qu’OpenTherm et faut-il absolument une PAC compatible ?',
        en: 'What is OpenTherm and do I need a compatible heat pump?',
        de: 'Was ist OpenTherm und brauche ich unbedingt eine kompatible Wärmepumpe?',
        es: '¿Qué es OpenTherm y necesito una bomba compatible?',
        it: 'Cos’è OpenTherm e serve per forza una pompa compatibile?',
        nl: 'Wat is OpenTherm en heb ik per se een compatibele warmtepomp nodig?',
      },
      answer: {
        fr: 'OpenTherm est un protocole qui permet au thermostat de demander une température de départ adaptée au lieu d’un simple ordre marche/arrêt. C’est un plus, pas une obligation : une PAC en contact on/off avec une loi d’eau bien réglée fonctionne très bien si le thermostat évite les cycles courts.',
        en: 'OpenTherm is a protocol that lets the thermostat request a suitable flow temperature instead of a simple on/off command. It is a bonus, not a requirement: an on/off heat pump with a well-set heating curve works very well if the thermostat avoids short cycling.',
        de: 'OpenTherm ist ein Protokoll, mit dem das Thermostat eine passende Vorlauftemperatur anfordern kann statt eines einfachen Ein/Aus-Befehls. Es ist ein Plus, aber keine Pflicht: Eine Ein/Aus-Wärmepumpe mit gut eingestellter Heizkurve arbeitet sehr gut, wenn das Thermostat Takten vermeidet.',
        es: 'OpenTherm es un protocolo que permite al termostato pedir una temperatura de impulsión adecuada en lugar de una simple orden de marcha/paro. Es una ventaja, no una obligación: una bomba on/off con una curva bien ajustada funciona muy bien si el termostato evita los ciclos cortos.',
        it: 'OpenTherm è un protocollo che permette al termostato di chiedere una temperatura di mandata adeguata invece di un semplice comando on/off. È un vantaggio, non un obbligo: una pompa on/off con una curva climatica ben regolata funziona molto bene se il termostato evita i cicli brevi.',
        nl: 'OpenTherm is een protocol waarmee de thermostaat een passende aanvoertemperatuur kan vragen in plaats van een simpele aan/uit-opdracht. Het is een pluspunt, geen vereiste: een aan/uit-warmtepomp met een goed ingestelde stooklijn werkt prima als de thermostaat pendelen voorkomt.',
      },
    },
    {
      question: {
        fr: 'Un thermostat connecté fait-il vraiment économiser avec une pompe à chaleur ?',
        en: 'Does a smart thermostat really save energy with a heat pump?',
        de: 'Spart ein smartes Thermostat mit einer Wärmepumpe wirklich Energie?',
        es: '¿Un termostato inteligente ahorra de verdad con una bomba de calor?',
        it: 'Un termostato smart fa davvero risparmiare con una pompa di calore?',
        nl: 'Bespaart een slimme thermostaat echt energie met een warmtepomp?',
      },
      answer: {
        fr: 'Oui, surtout s’il évite de chauffer un logement vide et limite les cycles courts. Les gains annoncés par les fabricants sont des moyennes : le résultat réel dépend surtout de l’isolation, des émetteurs et du réglage de la loi d’eau. Un suivi de consommation permet de le vérifier.',
        en: 'Yes, especially if it avoids heating an empty home and limits short cycling. Savings quoted by manufacturers are averages: the real result depends mostly on insulation, emitters and the heating curve setting. Tracking consumption lets you check it.',
        de: 'Ja, vor allem wenn es das Heizen leerer Räume vermeidet und Takten begrenzt. Herstellerangaben sind Durchschnittswerte: Das tatsächliche Ergebnis hängt vor allem von Dämmung, Heizflächen und Heizkurve ab. Eine Verbrauchsmessung schafft Klarheit.',
        es: 'Sí, sobre todo si evita calentar la vivienda vacía y limita los ciclos cortos. Los ahorros que anuncian los fabricantes son medias: el resultado real depende sobre todo del aislamiento, los emisores y el ajuste de la curva. Medir el consumo permite comprobarlo.',
        it: 'Sì, soprattutto se evita di riscaldare la casa vuota e limita i cicli brevi. I risparmi dichiarati dai produttori sono medie: il risultato reale dipende soprattutto da isolamento, terminali e regolazione della curva climatica. Monitorare i consumi permette di verificarlo.',
        nl: 'Ja, vooral als hij voorkomt dat een leeg huis wordt verwarmd en pendelen beperkt. Besparingen die fabrikanten noemen zijn gemiddelden: het echte resultaat hangt vooral af van isolatie, afgiftesysteem en stooklijn. Met een verbruiksmeting kun je het controleren.',
      },
    },
    {
      question: {
        fr: 'Faut-il baisser le chauffage la nuit avec une pompe à chaleur ?',
        en: 'Should I lower the heating at night with a heat pump?',
        de: 'Sollte man mit einer Wärmepumpe nachts absenken?',
        es: '¿Conviene bajar la calefacción por la noche con una bomba de calor?',
        it: 'Conviene abbassare il riscaldamento di notte con una pompa di calore?',
        nl: 'Moet je de verwarming ’s nachts lager zetten met een warmtepomp?',
      },
      answer: {
        fr: 'Modérément. Une baisse de 1 à 2 °C convient en général. Des réduits plus forts, surtout avec un plancher chauffant, obligent la PAC à relancer fort le matin et peuvent solliciter l’appoint électrique, ce qui annule une partie du gain.',
        en: 'Only slightly. A drop of 1–2 °C usually works well. Bigger setbacks, especially with underfloor heating, force the heat pump to work hard in the morning and may trigger the electric backup heater, cancelling part of the saving.',
        de: 'Nur leicht. Eine Absenkung um 1–2 °C ist meist sinnvoll. Stärkere Absenkungen, vor allem mit Fußbodenheizung, zwingen die Wärmepumpe morgens zu hoher Leistung und können den Heizstab aktivieren, was einen Teil der Ersparnis aufhebt.',
        es: 'Solo un poco. Una bajada de 1 a 2 °C suele funcionar bien. Bajadas mayores, sobre todo con suelo radiante, obligan a la bomba a forzar por la mañana y pueden activar la resistencia de apoyo, lo que anula parte del ahorro.',
        it: 'Solo leggermente. Un abbassamento di 1-2 °C di solito va bene. Cali maggiori, soprattutto con pavimento radiante, costringono la pompa a forzare al mattino e possono attivare la resistenza integrativa, annullando parte del risparmio.',
        nl: 'Slechts een beetje. Een verlaging van 1 à 2 °C werkt meestal goed. Grotere verlagingen, vooral met vloerverwarming, dwingen de warmtepomp ’s ochtends hard te werken en kunnen het elektrische bijverwarmingselement inschakelen, wat een deel van de besparing tenietdoet.',
      },
    },
    {
      question: {
        fr: 'Peut-on installer soi-même un thermostat connecté sur une PAC ?',
        en: 'Can I install a smart thermostat on a heat pump myself?',
        de: 'Kann ich ein smartes Thermostat an der Wärmepumpe selbst installieren?',
        es: '¿Puedo instalar yo mismo un termostato inteligente en una bomba de calor?',
        it: 'Posso installare da solo un termostato smart su una pompa di calore?',
        nl: 'Kan ik zelf een slimme thermostaat op een warmtepomp installeren?',
      },
      answer: {
        fr: 'Remplacer un thermostat filaire existant est possible pour un bricoleur soigneux, alimentation coupée et guide de l’application en main. Pour un raccordement sur la carte électronique de la PAC ou une installation sous garantie, faites appel à l’installateur ou à un électricien qualifié.',
        en: 'Replacing an existing wired thermostat is feasible for a careful DIYer, with the power off and the app’s guide at hand. For a connection to the heat pump’s control board or an installation under warranty, call the installer or a qualified electrician.',
        de: 'Ein vorhandenes verkabeltes Thermostat zu ersetzen, schaffen sorgfältige Heimwerker bei abgeschaltetem Strom mit der App-Anleitung. Für einen Anschluss an die Regelplatine der Wärmepumpe oder eine Anlage unter Garantie beauftragen Sie den Installateur oder eine Elektrofachkraft.',
        es: 'Sustituir un termostato con cable existente es posible para un aficionado cuidadoso, con la corriente cortada y la guía de la app. Para conectar algo a la placa electrónica de la bomba o en una instalación en garantía, recurre al instalador o a un electricista cualificado.',
        it: 'Sostituire un termostato cablato esistente è possibile per un appassionato attento, con la corrente staccata e la guida dell’app. Per un collegamento alla scheda elettronica della pompa o su un impianto in garanzia, rivolgiti all’installatore o a un elettricista qualificato.',
        nl: 'Een bestaande bedrade thermostaat vervangen lukt een zorgvuldige doe-het-zelver, met de stroom uit en de gids in de app bij de hand. Voor een aansluiting op de regelprint van de warmtepomp of een installatie onder garantie schakel je de installateur of een gekwalificeerde elektricien in.',
      },
    },
    {
      question: {
        fr: 'Le Google Nest est-il encore un bon choix pour une PAC en Europe ?',
        en: 'Is Google Nest still a good choice for a heat pump in Europe?',
        de: 'Ist Google Nest in Europa noch eine gute Wahl für eine Wärmepumpe?',
        es: '¿Sigue siendo Google Nest una buena opción para una bomba de calor en Europa?',
        it: 'Google Nest è ancora una buona scelta per una pompa di calore in Europa?',
        nl: 'Is Google Nest in Europa nog een goede keuze voor een warmtepomp?',
      },
      answer: {
        fr: 'Pour un achat neuf, ce n’est plus le choix le plus sûr : Google ne lance plus de nouveaux thermostats Nest en Europe, et le modèle de 3e génération n’est vendu que dans la limite des stocks. Les gammes tado X, Netatmo Original ou Honeywell Home T6 restent activement suivies.',
        en: 'For a new purchase, it is no longer the safest choice: Google is not launching new Nest thermostats in Europe, and the 3rd-generation model is only sold while stocks last. The tado X, Netatmo Original and Honeywell Home T6 ranges are still actively supported.',
        de: 'Für einen Neukauf ist es nicht mehr die sicherste Wahl: Google bringt in Europa keine neuen Nest-Thermostate mehr heraus, und das Modell der 3. Generation gibt es nur solange der Vorrat reicht. Die Serien tado X, Netatmo Original und Honeywell Home T6 werden weiter aktiv gepflegt.',
        es: 'Para una compra nueva ya no es la opción más segura: Google no lanzará nuevos termostatos Nest en Europa y el modelo de 3.ª generación solo se vende hasta agotar existencias. Las gamas tado X, Netatmo Original y Honeywell Home T6 siguen con soporte activo.',
        it: 'Per un nuovo acquisto non è più la scelta più sicura: Google non lancia più nuovi termostati Nest in Europa e il modello di 3ª generazione è venduto solo fino a esaurimento scorte. Le gamme tado X, Netatmo Original e Honeywell Home T6 restano supportate attivamente.',
        nl: 'Voor een nieuwe aankoop is het niet meer de veiligste keuze: Google brengt in Europa geen nieuwe Nest-thermostaten meer uit en het model van de 3e generatie wordt alleen verkocht zolang de voorraad strekt. De series tado X, Netatmo Original en Honeywell Home T6 worden nog actief ondersteund.',
      },
    },
  ],
}
