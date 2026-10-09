import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'balkonkraftwerk-panneau-solaire-balcon',
  category: 'guides',
  pillar: 'energie-domotique',
  relatedSlugs: ['batterie-domestique-stockage-solaire', 'comparatif-smart-plugs-mesure-energie', 'guide-domotique-economie-energie-2026'],
  datePublished: '2026-04-16',
  dateModified: '2026-10-09',
  readingTime: 10,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1762958266615-949dc88dcb37?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Panneau solaire de balcon fixé à la rambarde d\'un immeuble en brique',
        en: 'Balcony solar panel mounted on the railing of a brick apartment building',
        de: 'Balkonkraftwerk-Modul am Geländer eines Mehrfamilienhauses aus Backstein',
        es: 'Panel solar de balcón fijado a la barandilla de un edificio de ladrillo',
        it: 'Pannello solare da balcone fissato alla ringhiera di un palazzo in mattoni',
        nl: 'Balkonzonnepaneel bevestigd aan de balustrade van een bakstenen appartementengebouw',
      },
    },
  ],
  title: {
    fr: 'Panneau Solaire Balcon (Balkonkraftwerk) 2026 : Guide, Règles et Meilleurs Kits',
    en: 'Balcony Solar Panels (Balkonkraftwerk) 2026: Rules, Yield and Best Kits',
    de: 'Balkonkraftwerk 2026: Regeln, Ertrag und die besten Sets im Überblick',
    es: 'Panel Solar de Balcón (Balkonkraftwerk) 2026: Normas, Rendimiento y Mejores Kits',
    it: 'Pannello Solare da Balcone (Balkonkraftwerk) 2026: Regole, Resa e Migliori Kit',
    nl: 'Balkonzonnepaneel (Balkonkraftwerk) 2026: Regels, Opbrengst en Beste Sets',
  },
  excerpt: {
    fr: 'Comment fonctionne un panneau solaire de balcon, ce que dit la réglementation en 2026 (800 W en Allemagne, déclaration Enedis en France), combien il produit et quel micro-onduleur ou système avec batterie choisir : Hoymiles, Anker SOLIX, EcoFlow, Zendure.',
    en: 'How a balcony solar panel works, what the rules say in 2026 (800 W in Germany, Enedis declaration in France), how much it produces and which micro-inverter or battery system to choose: Hoymiles, Anker SOLIX, EcoFlow, Zendure.',
    de: 'Wie ein Balkonkraftwerk funktioniert, welche Regeln 2026 gelten (800 VA, 2.000 Wp, Marktstammdatenregister), wie viel es erzeugt und welcher Wechselrichter oder Speicher passt: Hoymiles, Anker SOLIX, EcoFlow, Zendure.',
    es: 'Cómo funciona un panel solar de balcón, qué dicen las normas en 2026 (800 W en Alemania, declaración en Francia), cuánto produce y qué microinversor o sistema con batería elegir: Hoymiles, Anker SOLIX, EcoFlow, Zendure.',
    it: 'Come funziona un pannello solare da balcone, cosa prevedono le regole nel 2026 (800 W in Germania, dichiarazione in Francia), quanto produce e quale microinverter o sistema con batteria scegliere: Hoymiles, Anker SOLIX, EcoFlow, Zendure.',
    nl: 'Hoe een balkonzonnepaneel werkt, wat de regels in 2026 zeggen (800 W in Duitsland, melding in Frankrijk), hoeveel het opwekt en welke micro-omvormer of batterijsysteem je kiest: Hoymiles, Anker SOLIX, EcoFlow, Zendure.',
  },
  content: {
    fr: `<p><strong>Un panneau solaire de balcon, ou Balkonkraftwerk, est un petit kit photovoltaïque composé d'un ou deux panneaux et d'un micro-onduleur, en général limité à 800 W, qui alimente directement les appareils de votre logement et réduit la quantité d'électricité achetée.</strong> En 2026, le meilleur point de départ pour la plupart des foyers reste un kit simple de deux panneaux associé à un micro-onduleur de 800 VA comme le Hoymiles HMS-800W-2T ; si vous êtes absent en journée, un système avec batterie comme l'Anker SOLIX Solarbank 3 E2700 Pro ou l'EcoFlow STREAM Ultra permet d'utiliser le soir l'énergie produite à midi.</p>
<p>Ce guide s'appuie sur les fiches techniques des fabricants, sur des essais indépendants publiés et sur les retours vérifiés d'acheteurs. Il explique le fonctionnement, les règles connues dans les principaux pays européens, les critères de choix et les erreurs les plus fréquentes. Vous trouverez tous les kits disponibles dans notre rubrique <a href="/fr/energie-domotique/solaire-balcon">solaire de balcon</a>.</p>

<h2>Comment fonctionne un panneau solaire de balcon</h2>
<p>Un kit de balcon comprend trois éléments : un ou deux <strong>panneaux photovoltaïques</strong> (souvent entre 400 et 500 Wc chacun), un <strong>micro-onduleur</strong> qui transforme le courant continu des panneaux en courant alternatif 230 V synchronisé avec le réseau, et un <strong>câble de raccordement</strong> vers l'installation électrique du logement. S'y ajoute un système de fixation pour rambarde, mur, toit plat ou sol.</p>
<p>Le principe est l'<strong>autoconsommation</strong> : l'électricité produite circule dans le circuit de la maison et est consommée en priorité par les appareils en marche (réfrigérateur, box internet, veilles, lave-linge). Ce que vous ne consommez pas sur l'instant part sur le réseau public, en général sans rémunération. Le micro-onduleur s'arrête automatiquement en cas de coupure du réseau, pour ne pas mettre sous tension une ligne en intervention.</p>
<p>Il faut distinguer deux chiffres : la <strong>puissance crête des panneaux</strong> (Wc), qui indique leur capacité maximale en plein soleil, et la <strong>puissance de sortie de l'onduleur</strong> (W ou VA), qui plafonne ce qui est injecté dans le logement. Associer 900 Wc de panneaux à un onduleur de 800 VA est courant : l'onduleur écrête quelques heures par an en plein été, mais la production du matin, du soir et des jours gris augmente.</p>

<h2>Réglementation 2026 : ce qui est établi pays par pays</h2>
<p>Les règles évoluent vite et diffèrent d'un pays à l'autre. Voici les points bien établis à la date de mise à jour de ce guide ; vérifiez toujours auprès de votre gestionnaire de réseau avant l'achat.</p>
<h3>Allemagne</h3>
<p>Depuis le Solarpaket I entré en vigueur en mai 2024, un Balkonkraftwerk peut avoir un <strong>onduleur jusqu'à 800 VA</strong> et <strong>jusqu'à 2 000 Wc de panneaux</strong>. La déclaration se limite à une <strong>inscription gratuite au Marktstammdatenregister</strong> de la Bundesnetzagentur ; la notification séparée au gestionnaire de réseau a été supprimée. Un ancien compteur sans anti-retour peut être conservé jusqu'à son remplacement par le gestionnaire. La norme produit DIN VDE V 0126-95, publiée fin 2025, encadre le raccordement par prise Schuko sous certaines conditions de puissance de panneaux ; au-delà, une prise d'injection spécifique est demandée. Enfin, depuis octobre 2024, les locataires et copropriétaires peuvent demander l'installation d'un tel équipement, que le bailleur ou la copropriété ne peut refuser qu'avec un motif sérieux, tout en gardant un droit de regard sur la manière de l'installer.</p>
<h3>France</h3>
<p>L'installation est légale, mais elle doit être <strong>déclarée à Enedis</strong> (ou à votre gestionnaire de réseau local) via une <strong>convention d'autoconsommation sans injection (CACSI)</strong>, une démarche gratuite en ligne, quelle que soit la puissance. Le surplus éventuellement injecté n'est pas rémunéré. Côté électrique, la norme NF C 15-100 encadre le raccordement : un branchement sur une prise ordinaire partagée avec d'autres appareils ou sur une multiprise est à proscrire, et le recours à un <strong>circuit dédié protégé</strong>, vérifié par un électricien qualifié, est la solution recommandée. Côté urbanisme, un panneau visible fixé en façade ou sur une rambarde peut nécessiter une <strong>déclaration préalable en mairie</strong>, et en copropriété l'accord de l'assemblée générale est généralement requis. Les locataires doivent obtenir l'accord écrit du propriétaire.</p>
<h3>Autres pays</h3>
<ul>
<li><strong>Pays-Bas :</strong> les kits enfichables sont courants et doivent être signalés au gestionnaire de réseau. Le régime de compensation (saldering) prend fin le 1er janvier 2027 : à partir de cette date, l'autoconsommation directe devient plus intéressante que l'injection.</li>
<li><strong>Belgique, Espagne, Italie :</strong> les petites installations sont autorisées avec une déclaration simplifiée au gestionnaire de réseau, selon des modalités propres à chaque pays ou région. Renseignez-vous avant l'achat.</li>
<li><strong>Royaume-Uni :</strong> le gouvernement a ouvert la voie aux kits enfichables en 2026, avec une sortie limitée à 800 VA et des kits répondant à une spécification produit dédiée.</li>
</ul>

<h2>Les critères pour bien choisir</h2>
<h3>Micro-onduleur simple ou système avec batterie</h3>
<p>Un kit sans batterie est l'option la plus simple et la plus rapide à rentabiliser : tout ce qui est produit en journée et consommé sur place est gagné. Un système avec batterie (couplée en courant continu entre panneaux et onduleur) stocke le surplus de midi pour le restituer le soir. Il se justifie surtout si personne n'est à la maison en journée. Pour approfondir ce choix, lisez notre <a href="/fr/blog/batterie-domestique-stockage-solaire">comparatif des batteries domestiques pour le solaire</a>.</p>
<h3>Nombre d'entrées MPPT</h3>
<p>Chaque entrée MPPT optimise un panneau indépendamment. Deux entrées suffisent pour deux panneaux ; quatre entrées permettent de répartir quatre panneaux sur des orientations différentes (est et ouest par exemple), dans la limite de puissance de panneaux autorisée dans votre pays.</p>
<h3>Panneaux et fixation</h3>
<p>Les panneaux monocristallins de 400 à 500 Wc sont la norme. Les modèles <strong>bifaciaux verre-verre</strong> captent aussi la lumière réfléchie et résistent mieux dans le temps. Vérifiez le poids (souvent plus de 20 kg par panneau), la solidité de la rambarde et la qualité des supports : un panneau mal fixé exposé au vent est le principal risque d'un kit de balcon.</p>
<h3>Application et mesure de la consommation</h3>
<p>Une application qui affiche la production en temps réel aide à décaler les usages (lave-linge, lave-vaisselle) aux heures ensoleillées. Avec une batterie, un compteur ou une <a href="/fr/blog/comparatif-smart-plugs-mesure-energie">prise connectée avec mesure d'énergie</a> permet d'ajuster la restitution à la consommation réelle et d'éviter de rendre au réseau l'énergie stockée.</p>
<h3>Garantie et conformité</h3>
<p>Privilégiez un onduleur conforme aux normes de raccordement européennes (dont la protection de découplage), une garantie d'au moins dix ans sur l'onduleur, et une garantie de performance des panneaux sur 25 ans ou plus.</p>

<h2>Les modèles de référence en 2026</h2>
<h3>Hoymiles HMS-800W-2T : le micro-onduleur de référence pour un kit simple</h3>
<p>Le HMS-800W-2T équipe une grande partie des kits de balcon vendus en Europe. Il délivre <strong>800 VA</strong>, accepte deux panneaux sur <strong>deux entrées MPPT</strong> indépendantes et intègre le <strong>Wi-Fi</strong>, ce qui évite d'ajouter une passerelle de communication. Le suivi se fait dans l'application S-Miles Cloud. Boîtier IP67, refroidissement passif sans ventilateur.</p>
<p><strong>Points forts :</strong> fiabilité reconnue, large compatibilité avec les panneaux de 320 à plus de 500 Wc, nombreux kits complets bâtis autour de lui. <strong>Limites :</strong> pas de stockage ; l'application est plus technique que celles des marques grand public. <strong>Pour qui :</strong> les foyers présents en journée qui veulent la solution la plus simple et la plus rentable.</p>
<h3>Anker SOLIX MI80 : l'alternative grand public</h3>
<p>Le MI80 est le micro-onduleur des kits de balcon Anker. Sa puissance de sortie peut être réglée à <strong>600 ou 800 W</strong> depuis l'application, il possède <strong>deux entrées MPPT</strong>, le Wi-Fi et le Bluetooth, un boîtier IP67 et une garantie de dix ans.</p>
<p><strong>Points forts :</strong> application Anker claire, configuration guidée. <strong>Limites :</strong> l'historique détaillé est moins complet que sur les solutions avec batterie de la marque. <strong>Pour qui :</strong> ceux qui préfèrent un écosystème grand public et un service client de marque.</p>
<h3>Anker SOLIX Solarbank 3 E2700 Pro : le meilleur système avec stockage</h3>
<p>La Solarbank 3 E2700 Pro réunit batterie, régulateurs et onduleur dans un seul boîtier. Elle stocke <strong>2,688 kWh</strong>, accepte jusqu'à <strong>3 600 Wc de panneaux sur quatre entrées MPPT</strong> et restitue <strong>800 W</strong> sur une prise. Sa capacité peut être étendue avec des batteries d'extension, et elle peut s'appuyer sur un compteur intelligent pour suivre la consommation de la maison.</p>
<p><strong>Points forts :</strong> grande capacité de base, extensible, pilotage avancé. <strong>Limites :</strong> encombrant et lourd ; en Allemagne, la puissance de panneaux raccordée doit rester dans la limite de 2 000 Wc. <strong>Pour qui :</strong> les foyers absents en journée qui consomment surtout le soir.</p>
<h3>EcoFlow STREAM Ultra : le tout-en-un compact</h3>
<p>Le STREAM Ultra intègre une batterie LiFePO4 de <strong>1,92 kWh</strong>, <strong>quatre entrées MPPT de 500 W</strong> (2 000 W au total) et un onduleur qui injecte <strong>800 W</strong> sur le réseau domestique, avec une sortie hors réseau jusqu'à 1 200 W. Boîtier IP65 pour l'extérieur, Wi-Fi et Bluetooth, garantie de dix ans.</p>
<p><strong>Points forts :</strong> format compact pour un balcon, montée en capacité possible avec des batteries additionnelles de la gamme STREAM. <strong>Limites :</strong> capacité de base inférieure à celle de la Solarbank 3. <strong>Pour qui :</strong> les petits balcons et ceux qui veulent un système discret et évolutif.</p>
<h3>Zendure SolarFlow 800 Pro 2 : l'option la plus extensible</h3>
<p>Successeur plus compact et plus léger du SolarFlow 800 Pro, le 800 Pro 2 conserve une batterie de <strong>1,92 kWh</strong> extensible jusqu'à <strong>11,52 kWh</strong>, <strong>quatre entrées MPPT</strong> (jusqu'à 2 640 Wc) et un onduleur bidirectionnel de 800 W sur le réseau, 1 000 W en sortie de secours.</p>
<p><strong>Points forts :</strong> très grande capacité possible, recharge depuis le réseau. <strong>Limites :</strong> réglages nombreux, à réserver aux utilisateurs qui aiment optimiser. <strong>Pour qui :</strong> ceux qui veulent démarrer petit et ajouter du stockage plus tard.</p>

<h2>Tableau comparatif</h2>
<table>
<thead>
<tr><th>Modèle</th><th>Type</th><th>Caractéristique clé</th><th>Connectivité</th><th>Idéal pour</th></tr>
</thead>
<tbody>
<tr><td><strong>Hoymiles HMS-800W-2T</strong></td><td>Micro-onduleur</td><td>800 VA, 2 MPPT, IP67</td><td>Wi-Fi intégré</td><td>Kit simple, présence en journée</td></tr>
<tr><td><strong>Anker SOLIX MI80</strong></td><td>Micro-onduleur</td><td>600/800 W réglable, 2 MPPT</td><td>Wi-Fi, Bluetooth</td><td>Écosystème grand public</td></tr>
<tr><td><strong>Anker SOLIX Solarbank 3 E2700 Pro</strong></td><td>Système avec batterie</td><td>2,688 kWh, 4 MPPT, extensible</td><td>Wi-Fi, Bluetooth</td><td>Consommation surtout le soir</td></tr>
<tr><td><strong>EcoFlow STREAM Ultra</strong></td><td>Système avec batterie</td><td>1,92 kWh, 4 MPPT, IP65</td><td>Wi-Fi, Bluetooth</td><td>Petit balcon, format compact</td></tr>
<tr><td><strong>Zendure SolarFlow 800 Pro 2</strong></td><td>Système avec batterie</td><td>1,92 kWh extensible à 11,52 kWh</td><td>Wi-Fi, Bluetooth</td><td>Stockage évolutif</td></tr>
</tbody>
</table>

<h2>Combien produit un panneau solaire de balcon ?</h2>
<p>La production dépend surtout de l'orientation, de l'inclinaison, de l'ombrage et de la région. À titre d'ordre de grandeur, un kit d'environ 800 à 900 Wc orienté plein sud et incliné autour de 30° produit couramment entre <strong>700 et 900 kWh par an</strong> dans le nord de la France, en Belgique ou en Allemagne, et davantage dans le sud de l'Europe. Le même kit posé à la verticale sur une rambarde produit sensiblement moins, souvent de l'ordre d'un tiers en moins. Une orientation est ou ouest reste intéressante, avec une production mieux répartie sur la journée.</p>
<p>Pour estimer votre cas, l'outil de simulation gratuit PVGIS de la Commission européenne calcule la production attendue selon votre adresse, l'orientation et l'inclinaison. Sans batterie, la part réellement autoconsommée dépend de votre présence : elle est élevée si quelqu'un est à la maison en journée, plus faible sinon. L'économie se calcule ensuite simplement : kWh autoconsommés multipliés par le prix de votre kWh.</p>
<p>La production se concentre d'avril à septembre ; en hiver, les journées courtes et le soleil bas la réduisent nettement.</p>

<h2>Les erreurs à éviter</h2>
<ul>
<li><strong>Brancher le kit sur une multiprise ou une rallonge :</strong> c'est un risque d'échauffement. Utilisez une prise fixe, idéalement sur un circuit dédié vérifié par un électricien.</li>
<li><strong>Négliger la fixation :</strong> le vent exerce des efforts importants sur un panneau. Utilisez des supports adaptés et vérifiez la solidité de la rambarde.</li>
<li><strong>Oublier la déclaration :</strong> Enedis en France, Marktstammdatenregister en Allemagne, gestionnaire de réseau ailleurs.</li>
<li><strong>Surdimensionner la batterie :</strong> une batterie trop grande pour votre production reste à moitié vide une grande partie de l'année.</li>
<li><strong>Ignorer l'ombrage :</strong> un arbre ou un balcon voisin qui masque le panneau à midi peut réduire fortement la production.</li>
</ul>

<h2>Installation et sécurité</h2>
<p>Les panneaux se raccordent à l'onduleur avec des connecteurs MC4 étanches. L'onduleur se fixe à l'abri du soleil direct, derrière un panneau ou sous la rambarde. Avant de brancher, faites vérifier par un électricien que le circuit concerné est protégé par un disjoncteur adapté et par un différentiel 30 mA, et qu'il n'est pas déjà chargé par des appareils puissants. Ne manipulez jamais les câbles des panneaux en plein soleil connecteurs ouverts : ils sont sous tension dès qu'ils sont éclairés. Pour aller plus loin dans la réduction de vos dépenses, consultez notre <a href="/fr/blog/guide-domotique-economie-energie-2026">guide domotique et économies d'énergie</a>.</p>

<h2>Notre verdict</h2>
<p>Si quelqu'un est à la maison en journée, un kit de deux panneaux avec un micro-onduleur de 800 VA comme le <strong>Hoymiles HMS-800W-2T</strong> offre le meilleur rapport entre simplicité, fiabilité et économies. L'<strong>Anker SOLIX MI80</strong> est une alternative solide pour qui préfère une application grand public. Si votre consommation se concentre le soir, l'<strong>Anker SOLIX Solarbank 3 E2700 Pro</strong> est le système avec batterie le plus complet ; l'<strong>EcoFlow STREAM Ultra</strong> convient mieux aux petits balcons, et le <strong>Zendure SolarFlow 800 Pro 2</strong> à ceux qui veulent étendre leur stockage par étapes. Dans tous les cas, déclarez l'installation et faites vérifier le raccordement.</p>`,

    en: `<p><strong>A balcony solar panel, or Balkonkraftwerk, is a small photovoltaic kit made of one or two panels and a micro-inverter, usually limited to 800 W, that powers the appliances in your home directly and cuts the amount of electricity you buy.</strong> In 2026 the best starting point for most households is still a simple two-panel kit with an 800 VA micro-inverter such as the Hoymiles HMS-800W-2T; if nobody is home during the day, a battery system like the Anker SOLIX Solarbank 3 E2700 Pro or the EcoFlow STREAM Ultra lets you use midday solar power in the evening.</p>
<p>This guide is based on manufacturer specifications, published independent reviews and verified buyer feedback. It explains how these kits work, the rules known in the main European countries, the buying criteria and the most common mistakes. You will find all available kits in our <a href="/en/energie-domotique/solaire-balcon">balcony solar</a> category.</p>

<h2>How a Balcony Solar Panel Works</h2>
<p>A balcony kit has three parts: one or two <strong>photovoltaic panels</strong> (often 400 to 500 Wp each), a <strong>micro-inverter</strong> that turns the panels' direct current into 230 V alternating current synchronised with the grid, and a <strong>connection cable</strong> to your home's wiring. A mounting system for a railing, wall, flat roof or the ground completes the kit.</p>
<p>The principle is <strong>self-consumption</strong>: the electricity produced flows into your home circuit and is used first by whatever is running (fridge, router, standby loads, washing machine). Anything you do not use at that moment flows into the public grid, usually without payment. The micro-inverter shuts down automatically during a power cut so that it never energises a line being repaired.</p>
<p>Two figures matter: the <strong>peak power of the panels</strong> (Wp), their maximum output in full sun, and the <strong>inverter output</strong> (W or VA), which caps what is fed into the home. Pairing 900 Wp of panels with an 800 VA inverter is common: the inverter clips a few hours a year in high summer, but output in the morning, evening and on grey days increases.</p>

<h2>2026 Rules: What Is Established, Country by Country</h2>
<p>Rules change quickly and differ between countries. Below are the points that are well established at the time of this update; always check with your grid operator before buying.</p>
<h3>Germany</h3>
<p>Since the Solarpaket I came into force in May 2024, a Balkonkraftwerk may have an <strong>inverter of up to 800 VA</strong> and <strong>up to 2,000 Wp of panels</strong>. The only formality is a <strong>free registration in the Marktstammdatenregister</strong> of the Federal Network Agency; separate notification of the grid operator has been dropped. An old meter without a backstop may stay in place until the grid operator replaces it. The DIN VDE V 0126-95 product standard, published at the end of 2025, covers connection via a Schuko plug under certain panel-power conditions; above them, a dedicated feed-in connector is required. Since October 2024, tenants and flat owners can also ask to install such a system, and the landlord or owners' association may only refuse for a serious reason, while keeping a say in how it is installed.</p>
<h3>France</h3>
<p>Installation is legal but must be <strong>declared to Enedis</strong> (or your local grid operator) through a <strong>self-consumption agreement without feed-in (CACSI)</strong>, a free online procedure, whatever the power. Any surplus fed into the grid is not paid for. The NF C 15-100 wiring standard governs the connection: plugging into an ordinary socket shared with other appliances or into a power strip should be avoided, and a <strong>dedicated, protected circuit</strong> checked by a qualified electrician is the recommended approach. A visible panel on a façade or railing may require a <strong>planning declaration at the town hall</strong>, and in a co-owned building the owners' meeting usually has to approve. Tenants need written consent from the landlord.</p>
<h3>Other Countries</h3>
<ul>
<li><strong>Netherlands:</strong> plug-in kits are common and must be reported to the grid operator. Net metering (saldering) ends on 1 January 2027, after which direct self-consumption becomes more valuable than feeding in.</li>
<li><strong>Belgium, Spain, Italy:</strong> small systems are allowed with a simplified declaration to the grid operator, with procedures specific to each country or region. Check before you buy.</li>
<li><strong>United Kingdom:</strong> the government opened the way for plug-in kits in 2026, with output limited to 800 VA and kits meeting a dedicated product specification. Buy only kits sold as compliant with it.</li>
</ul>

<h2>Buying Criteria</h2>
<h3>Simple Micro-Inverter or Battery System</h3>
<p>A kit without a battery is the simplest option and pays back fastest: everything produced during the day and used on the spot is a saving. A battery system (DC-coupled between the panels and the inverter) stores the midday surplus and releases it in the evening. It mainly makes sense if nobody is home during the day. For more on this choice, read our <a href="/en/blog/batterie-domestique-stockage-solaire">home battery comparison for solar</a>.</p>
<h3>Number of MPPT Inputs</h3>
<p>Each MPPT input optimises one panel independently. Two inputs are enough for two panels; four inputs let you spread four panels across different orientations (east and west, for example), within the panel-power limit that applies in your country.</p>
<h3>Panels and Mounting</h3>
<p>Monocrystalline panels of 400 to 500 Wp are the norm. <strong>Bifacial glass-glass</strong> models also capture reflected light and age better. Check the weight (often over 20 kg per panel), the strength of the railing and the quality of the brackets: a poorly secured panel exposed to wind is the main risk with a balcony kit.</p>
<h3>App and Consumption Monitoring</h3>
<p>An app showing real-time production helps you shift loads (washing machine, dishwasher) to sunny hours. With a battery, a meter or a <a href="/en/blog/comparatif-smart-plugs-mesure-energie">smart plug with energy monitoring</a> lets the system match its output to actual consumption so stored energy is not given away to the grid.</p>
<h3>Warranty and Compliance</h3>
<p>Choose an inverter that complies with European grid-connection standards (including anti-islanding protection), with at least a ten-year warranty, and panels with a performance warranty of 25 years or more.</p>

<h2>The Reference Models in 2026</h2>
<h3>Hoymiles HMS-800W-2T: The Reference Micro-Inverter for a Simple Kit</h3>
<p>The HMS-800W-2T powers a large share of the balcony kits sold in Europe. It delivers <strong>800 VA</strong>, takes two panels on <strong>two independent MPPT inputs</strong> and has <strong>built-in Wi-Fi</strong>, so no extra gateway is needed. Monitoring runs through the S-Miles Cloud app. IP67 housing, fanless passive cooling.</p>
<p><strong>Strengths:</strong> proven reliability, wide compatibility with panels from 320 to over 500 Wp, many complete kits built around it. <strong>Limits:</strong> no storage; the app is more technical than consumer brands' apps. <strong>Best for:</strong> households at home during the day who want the simplest, most cost-effective setup.</p>
<h3>Anker SOLIX MI80: The Consumer-Friendly Alternative</h3>
<p>The MI80 is the micro-inverter in Anker's balcony kits. Its output can be set to <strong>600 or 800 W</strong> in the app, and it has <strong>two MPPT inputs</strong>, Wi-Fi and Bluetooth, an IP67 housing and a ten-year warranty.</p>
<p><strong>Strengths:</strong> clear Anker app, guided setup. <strong>Limits:</strong> detailed history is less complete than on the brand's battery systems. <strong>Best for:</strong> buyers who prefer a consumer ecosystem and brand customer service.</p>
<h3>Anker SOLIX Solarbank 3 E2700 Pro: The Best System with Storage</h3>
<p>The Solarbank 3 E2700 Pro combines battery, charge controllers and inverter in one unit. It stores <strong>2.688 kWh</strong>, accepts up to <strong>3,600 Wp of panels on four MPPT inputs</strong> and delivers <strong>800 W</strong> through a socket. Capacity can be expanded with add-on batteries, and it can use a smart meter to follow the home's consumption.</p>
<p><strong>Strengths:</strong> large base capacity, expandable, advanced control. <strong>Limits:</strong> bulky and heavy; in Germany the connected panel power must stay within the 2,000 Wp limit. <strong>Best for:</strong> households away during the day that use most of their power in the evening.</p>
<h3>EcoFlow STREAM Ultra: The Compact All-in-One</h3>
<p>The STREAM Ultra integrates a <strong>1.92 kWh</strong> LiFePO4 battery, <strong>four 500 W MPPT inputs</strong> (2,000 W in total) and an inverter that feeds <strong>800 W</strong> into the home grid, with an off-grid output of up to 1,200 W. IP65 outdoor housing, Wi-Fi and Bluetooth, ten-year warranty.</p>
<p><strong>Strengths:</strong> compact enough for a balcony, capacity can grow with additional STREAM batteries. <strong>Limits:</strong> lower base capacity than the Solarbank 3. <strong>Best for:</strong> small balconies and anyone wanting a discreet, scalable system.</p>
<h3>Zendure SolarFlow 800 Pro 2: The Most Expandable Option</h3>
<p>The more compact, lighter successor to the SolarFlow 800 Pro keeps a <strong>1.92 kWh</strong> battery expandable to <strong>11.52 kWh</strong>, <strong>four MPPT inputs</strong> (up to 2,640 Wp) and a bidirectional inverter with 800 W on-grid and 1,000 W backup output.</p>
<p><strong>Strengths:</strong> very large possible capacity, can charge from the grid. <strong>Limits:</strong> many settings, best for users who enjoy optimising. <strong>Best for:</strong> starting small and adding storage later.</p>

<h2>Comparison Table</h2>
<table>
<thead>
<tr><th>Model</th><th>Type</th><th>Key Spec</th><th>Connectivity</th><th>Best For</th></tr>
</thead>
<tbody>
<tr><td><strong>Hoymiles HMS-800W-2T</strong></td><td>Micro-inverter</td><td>800 VA, 2 MPPT, IP67</td><td>Built-in Wi-Fi</td><td>Simple kit, people home by day</td></tr>
<tr><td><strong>Anker SOLIX MI80</strong></td><td>Micro-inverter</td><td>600/800 W adjustable, 2 MPPT</td><td>Wi-Fi, Bluetooth</td><td>Consumer ecosystem</td></tr>
<tr><td><strong>Anker SOLIX Solarbank 3 E2700 Pro</strong></td><td>Battery system</td><td>2.688 kWh, 4 MPPT, expandable</td><td>Wi-Fi, Bluetooth</td><td>Evening-heavy consumption</td></tr>
<tr><td><strong>EcoFlow STREAM Ultra</strong></td><td>Battery system</td><td>1.92 kWh, 4 MPPT, IP65</td><td>Wi-Fi, Bluetooth</td><td>Small balcony, compact format</td></tr>
<tr><td><strong>Zendure SolarFlow 800 Pro 2</strong></td><td>Battery system</td><td>1.92 kWh, expandable to 11.52 kWh</td><td>Wi-Fi, Bluetooth</td><td>Scalable storage</td></tr>
</tbody>
</table>

<h2>How Much Does a Balcony Solar Panel Produce?</h2>
<p>Output depends mainly on orientation, tilt, shading and region. As a rough guide, a kit of about 800 to 900 Wp facing due south at around 30° commonly produces <strong>700 to 900 kWh a year</strong> in northern France, Belgium, Germany or southern England, and more in southern Europe. The same kit mounted vertically on a railing produces noticeably less, often around a third less. East or west orientation is still worthwhile, with output spread more evenly through the day.</p>
<p>To estimate your own case, the European Commission's free PVGIS tool calculates expected output from your address, orientation and tilt. Without a battery, the share you actually self-consume depends on when you are at home: high if someone is in during the day, lower otherwise. The saving is then simple to work out: self-consumed kWh multiplied by your price per kWh.</p>
<p>Most production happens between April and September; in winter, short days and a low sun reduce it sharply.</p>

<h2>Mistakes to Avoid</h2>
<ul>
<li><strong>Plugging the kit into a power strip or extension lead:</strong> this risks overheating. Use a fixed socket, ideally on a dedicated circuit checked by an electrician.</li>
<li><strong>Skimping on mounting:</strong> wind puts heavy loads on a panel. Use suitable brackets and check the railing's strength.</li>
<li><strong>Forgetting to register:</strong> Enedis in France, the Marktstammdatenregister in Germany, the grid operator elsewhere.</li>
<li><strong>Oversizing the battery:</strong> a battery too large for your production sits half empty much of the year.</li>
<li><strong>Ignoring shade:</strong> a tree or a neighbouring balcony shading the panel at midday can cut output sharply.</li>
</ul>

<h2>Installation and Safety</h2>
<p>Panels connect to the inverter with waterproof MC4 connectors. Mount the inverter out of direct sun, behind a panel or under the railing. Before plugging in, have an electrician confirm that the circuit is protected by a suitable breaker and a 30 mA RCD, and that it is not already loaded by power-hungry appliances. Never handle panel cables with open connectors in sunlight: they are live as soon as light hits the panel. To cut your bills further, see our <a href="/en/blog/guide-domotique-economie-energie-2026">smart home energy saving guide</a>.</p>

<h2>Our Verdict</h2>
<p>If someone is home during the day, a two-panel kit with an 800 VA micro-inverter such as the <strong>Hoymiles HMS-800W-2T</strong> offers the best balance of simplicity, reliability and savings. The <strong>Anker SOLIX MI80</strong> is a solid alternative for those who prefer a consumer app. If your consumption is concentrated in the evening, the <strong>Anker SOLIX Solarbank 3 E2700 Pro</strong> is the most complete battery system; the <strong>EcoFlow STREAM Ultra</strong> suits small balconies better, and the <strong>Zendure SolarFlow 800 Pro 2</strong> fits buyers who want to expand storage step by step. In every case, register the installation and have the connection checked.</p>`,

    de: `<p><strong>Ein Balkonkraftwerk ist eine kleine Photovoltaikanlage aus ein oder zwei Modulen und einem Mikrowechselrichter mit meist bis zu 800 VA, die den Strom direkt den Geräten im Haushalt zur Verfügung stellt und so den Netzbezug senkt.</strong> 2026 ist für die meisten Haushalte ein einfaches Set aus zwei Modulen und einem 800-VA-Wechselrichter wie dem Hoymiles HMS-800W-2T der beste Einstieg; wer tagsüber nicht zu Hause ist, nutzt mit einem Speichersystem wie der Anker SOLIX Solarbank 3 E2700 Pro oder der EcoFlow STREAM Ultra den Mittagsstrom am Abend.</p>
<p>Dieser Ratgeber stützt sich auf Herstellerdatenblätter, veröffentlichte unabhängige Testberichte und verifizierte Käuferbewertungen. Er erklärt die Funktionsweise, die bekannten Regeln in den wichtigsten europäischen Ländern, die Auswahlkriterien und die häufigsten Fehler. Alle verfügbaren Sets finden Sie in unserer Kategorie <a href="/de/energie-domotique/solaire-balcon">Balkonkraftwerke</a>.</p>

<h2>So funktioniert ein Balkonkraftwerk</h2>
<p>Ein Set besteht aus drei Teilen: ein oder zwei <strong>Solarmodulen</strong> (meist 400 bis 500 Wp pro Modul), einem <strong>Mikrowechselrichter</strong>, der den Gleichstrom der Module in netzsynchronen 230-V-Wechselstrom umwandelt, und einem <strong>Anschlusskabel</strong> zur Hausinstallation. Dazu kommt eine Halterung für Geländer, Wand, Flachdach oder Garten.</p>
<p>Das Prinzip ist der <strong>Eigenverbrauch</strong>: Der erzeugte Strom fließt ins Hausnetz und wird zuerst von laufenden Geräten genutzt (Kühlschrank, Router, Standby-Verbraucher, Waschmaschine). Was gerade nicht gebraucht wird, fließt ins öffentliche Netz, in der Regel ohne Vergütung. Bei einem Stromausfall schaltet der Wechselrichter automatisch ab, damit keine Leitung unter Spannung gesetzt wird, an der gearbeitet wird.</p>
<p>Zwei Werte sind zu unterscheiden: die <strong>Spitzenleistung der Module</strong> (Wp) und die <strong>Ausgangsleistung des Wechselrichters</strong> (W oder VA), die die Einspeisung ins Hausnetz begrenzt. 900 Wp Module an einem 800-VA-Wechselrichter sind üblich: Im Hochsommer wird an wenigen Stunden abgeregelt, dafür steigt der Ertrag morgens, abends und an trüben Tagen.</p>

<h2>Regeln 2026: Was in den einzelnen Ländern feststeht</h2>
<p>Die Vorschriften ändern sich schnell und unterscheiden sich je nach Land. Hier die zum Zeitpunkt dieser Aktualisierung gesicherten Punkte; klären Sie Details vor dem Kauf immer mit Ihrem Netzbetreiber.</p>
<h3>Deutschland</h3>
<p>Seit Inkrafttreten des Solarpakets I im Mai 2024 darf ein Balkonkraftwerk einen <strong>Wechselrichter bis 800 VA</strong> und <strong>bis zu 2.000 Wp Modulleistung</strong> haben. Einzige Formalität ist die <strong>kostenlose Registrierung im Marktstammdatenregister</strong> der Bundesnetzagentur; die separate Anmeldung beim Netzbetreiber ist entfallen. Ein alter Zähler ohne Rücklaufsperre darf bis zum Austausch durch den Netzbetreiber weiterlaufen. Die Ende 2025 veröffentlichte Produktnorm DIN VDE V 0126-95 regelt den Anschluss über einen Schukostecker unter bestimmten Bedingungen bei der Modulleistung; darüber hinaus ist eine spezielle Einspeisesteckvorrichtung vorgesehen. Seit Oktober 2024 können Mieter und Wohnungseigentümer zudem die Installation verlangen: Vermieter und Eigentümergemeinschaft dürfen sie nur aus wichtigem Grund ablehnen, können aber bei der Art der Ausführung mitreden.</p>
<h3>Frankreich</h3>
<p>Die Installation ist erlaubt, muss aber <strong>bei Enedis</strong> (oder dem örtlichen Netzbetreiber) über eine <strong>Eigenverbrauchsvereinbarung ohne Einspeisung (CACSI)</strong> gemeldet werden, kostenlos und online, unabhängig von der Leistung. Eingespeister Überschuss wird nicht vergütet. Die Norm NF C 15-100 regelt den Anschluss: Eine gewöhnliche, mit anderen Geräten geteilte Steckdose oder eine Mehrfachsteckdose ist zu vermeiden; empfohlen wird ein <strong>eigener, abgesicherter Stromkreis</strong>, geprüft von einer Elektrofachkraft. Ein sichtbares Modul an Fassade oder Geländer kann eine <strong>Bauanzeige beim Rathaus</strong> erfordern, in Eigentümergemeinschaften ist meist die Zustimmung der Versammlung nötig.</p>
<h3>Weitere Länder</h3>
<ul>
<li><strong>Österreich und Schweiz:</strong> Steckersolargeräte sind verbreitet und beim Netzbetreiber zu melden; die Leistungsgrenzen und Verfahren unterscheiden sich vom deutschen Modell.</li>
<li><strong>Niederlande:</strong> Stecker-Sets sind beim Netzbetreiber zu melden. Die Saldierung (saldering) endet am 1. Januar 2027; danach lohnt sich direkter Eigenverbrauch mehr als Einspeisung.</li>
<li><strong>Belgien, Spanien, Italien:</strong> Kleine Anlagen sind mit vereinfachter Meldung an den Netzbetreiber zulässig, mit landes- oder regionsspezifischen Verfahren.</li>
<li><strong>Vereinigtes Königreich:</strong> Die Regierung hat 2026 den Weg für Stecker-Sets geöffnet, mit maximal 800 VA Ausgangsleistung und einer eigenen Produktspezifikation.</li>
</ul>

<h2>Die wichtigsten Auswahlkriterien</h2>
<h3>Einfacher Wechselrichter oder Speichersystem</h3>
<p>Ein Set ohne Speicher ist am einfachsten und amortisiert sich am schnellsten: Jede tagsüber direkt verbrauchte Kilowattstunde ist gespart. Ein Speichersystem (DC-gekoppelt zwischen Modulen und Wechselrichter) puffert den Mittagsüberschuss für den Abend. Es lohnt sich vor allem, wenn tagsüber niemand zu Hause ist. Mehr dazu in unserem <a href="/de/blog/batterie-domestique-stockage-solaire">Vergleich von Batteriespeichern für Solaranlagen</a>.</p>
<h3>Anzahl der MPPT-Eingänge</h3>
<p>Jeder MPPT-Eingang optimiert ein Modul unabhängig. Zwei Eingänge reichen für zwei Module; mit vier Eingängen lassen sich Module auf verschiedene Ausrichtungen verteilen (etwa Ost und West), innerhalb der in Deutschland erlaubten 2.000 Wp.</p>
<h3>Module und Halterung</h3>
<p>Monokristalline Module mit 400 bis 500 Wp sind Standard. <strong>Bifaziale Glas-Glas-Module</strong> nutzen zusätzlich reflektiertes Licht und altern langsamer. Prüfen Sie das Gewicht (oft über 20 kg pro Modul), die Tragfähigkeit des Geländers und die Qualität der Halterung: Ein schlecht befestigtes Modul im Wind ist das größte Risiko eines Balkonkraftwerks.</p>
<h3>App und Verbrauchsmessung</h3>
<p>Eine App mit Echtzeit-Erzeugung hilft, Verbraucher wie Waschmaschine oder Spülmaschine in sonnige Stunden zu verlegen. Mit Speicher sorgt ein Zähler oder eine <a href="/de/blog/comparatif-smart-plugs-mesure-energie">smarte Steckdose mit Energiemessung</a> dafür, dass die Abgabe dem tatsächlichen Verbrauch folgt und gespeicherter Strom nicht ins Netz verschenkt wird.</p>
<h3>Garantie und Normkonformität</h3>
<p>Achten Sie auf einen Wechselrichter mit Konformität zu den Netzanschlussregeln (VDE-AR-N 4105, inklusive NA-Schutz), mindestens zehn Jahren Garantie und Module mit 25 Jahren oder mehr Leistungsgarantie.</p>

<h2>Die Referenzmodelle 2026</h2>
<h3>Hoymiles HMS-800W-2T: der Standard-Wechselrichter für ein einfaches Set</h3>
<p>Der HMS-800W-2T steckt in vielen in Europa verkauften Balkonkraftwerken. Er liefert <strong>800 VA</strong>, nimmt zwei Module an <strong>zwei unabhängigen MPPT-Eingängen</strong> auf und hat <strong>integriertes WLAN</strong>, sodass kein zusätzliches Gateway nötig ist. Überwacht wird über die App S-Miles Cloud. IP67-Gehäuse, lüfterlose Kühlung.</p>
<p><strong>Stärken:</strong> bewährte Zuverlässigkeit, kompatibel mit Modulen von 320 bis über 500 Wp, viele Komplettsets. <strong>Schwächen:</strong> kein Speicher; die App ist technischer als die der Consumer-Marken. <strong>Für wen:</strong> Haushalte, die tagsüber zu Hause sind und die einfachste, wirtschaftlichste Lösung wollen.</p>
<h3>Anker SOLIX MI80: die verbraucherfreundliche Alternative</h3>
<p>Der MI80 ist der Wechselrichter der Anker-Balkonkraftwerke. Die Ausgangsleistung lässt sich per App auf <strong>600 oder 800 W</strong> einstellen; er hat <strong>zwei MPPT-Eingänge</strong>, WLAN und Bluetooth, ein IP67-Gehäuse und zehn Jahre Garantie.</p>
<p><strong>Stärken:</strong> übersichtliche Anker-App, geführte Einrichtung. <strong>Schwächen:</strong> die Verlaufsdaten sind weniger umfangreich als bei den Speichersystemen der Marke. <strong>Für wen:</strong> alle, die ein Consumer-Ökosystem und den Kundenservice einer großen Marke bevorzugen.</p>
<h3>Anker SOLIX Solarbank 3 E2700 Pro: das beste System mit Speicher</h3>
<p>Die Solarbank 3 E2700 Pro vereint Akku, Laderegler und Wechselrichter in einem Gerät. Sie speichert <strong>2,688 kWh</strong>, nimmt bis zu <strong>3.600 Wp an vier MPPT-Eingängen</strong> auf und gibt <strong>800 W</strong> über die Steckdose ab. Die Kapazität lässt sich mit Erweiterungsakkus ausbauen, und mit einem Smart Meter folgt die Abgabe dem Hausverbrauch.</p>
<p><strong>Stärken:</strong> große Grundkapazität, erweiterbar, ausgefeilte Steuerung. <strong>Schwächen:</strong> groß und schwer; in Deutschland muss die angeschlossene Modulleistung im Rahmen von 2.000 Wp bleiben. <strong>Für wen:</strong> Haushalte, die tagsüber außer Haus sind und vor allem abends Strom brauchen.</p>
<h3>EcoFlow STREAM Ultra: der kompakte Alleskönner</h3>
<p>Die STREAM Ultra kombiniert einen LiFePO4-Akku mit <strong>1,92 kWh</strong>, <strong>vier MPPT-Eingänge mit je 500 W</strong> (insgesamt 2.000 W) und einen Wechselrichter mit <strong>800 W</strong> Einspeisung ins Hausnetz sowie bis zu 1.200 W netzunabhängiger Ausgabe. IP65-Gehäuse für draußen, WLAN und Bluetooth, zehn Jahre Garantie.</p>
<p><strong>Stärken:</strong> kompakt genug für den Balkon, Kapazität mit weiteren STREAM-Akkus erweiterbar. <strong>Schwächen:</strong> geringere Grundkapazität als die Solarbank 3. <strong>Für wen:</strong> kleine Balkone und alle, die ein unauffälliges, ausbaufähiges System suchen.</p>
<h3>Zendure SolarFlow 800 Pro 2: am stärksten erweiterbar</h3>
<p>Der kompaktere, leichtere Nachfolger des SolarFlow 800 Pro behält den <strong>1,92-kWh</strong>-Akku, erweiterbar auf <strong>11,52 kWh</strong>, <strong>vier MPPT-Eingänge</strong> (bis 2.640 Wp) und einen bidirektionalen Wechselrichter mit 800 W Netzeinspeisung und 1.000 W Notstromausgang.</p>
<p><strong>Stärken:</strong> sehr große Kapazität möglich, Laden aus dem Netz. <strong>Schwächen:</strong> viele Einstellungen, eher für Optimierer. <strong>Für wen:</strong> klein anfangen und den Speicher später ausbauen.</p>

<h2>Vergleichstabelle</h2>
<table>
<thead>
<tr><th>Modell</th><th>Typ</th><th>Kernmerkmal</th><th>Konnektivität</th><th>Ideal für</th></tr>
</thead>
<tbody>
<tr><td><strong>Hoymiles HMS-800W-2T</strong></td><td>Mikrowechselrichter</td><td>800 VA, 2 MPPT, IP67</td><td>Integriertes WLAN</td><td>Einfaches Set, tagsüber zu Hause</td></tr>
<tr><td><strong>Anker SOLIX MI80</strong></td><td>Mikrowechselrichter</td><td>600/800 W einstellbar, 2 MPPT</td><td>WLAN, Bluetooth</td><td>Consumer-Ökosystem</td></tr>
<tr><td><strong>Anker SOLIX Solarbank 3 E2700 Pro</strong></td><td>Speichersystem</td><td>2,688 kWh, 4 MPPT, erweiterbar</td><td>WLAN, Bluetooth</td><td>Verbrauch vor allem abends</td></tr>
<tr><td><strong>EcoFlow STREAM Ultra</strong></td><td>Speichersystem</td><td>1,92 kWh, 4 MPPT, IP65</td><td>WLAN, Bluetooth</td><td>Kleiner Balkon, kompakt</td></tr>
<tr><td><strong>Zendure SolarFlow 800 Pro 2</strong></td><td>Speichersystem</td><td>1,92 kWh, erweiterbar auf 11,52 kWh</td><td>WLAN, Bluetooth</td><td>Ausbaufähiger Speicher</td></tr>
</tbody>
</table>

<h2>Wie viel Strom erzeugt ein Balkonkraftwerk?</h2>
<p>Der Ertrag hängt vor allem von Ausrichtung, Neigung, Verschattung und Region ab. Als Größenordnung erzeugt ein Set mit etwa 800 bis 900 Wp, nach Süden ausgerichtet und um 30° geneigt, in Deutschland häufig <strong>700 bis 900 kWh pro Jahr</strong>, in Südeuropa mehr. Senkrecht am Geländer montiert fällt der Ertrag spürbar niedriger aus, oft um rund ein Drittel. Ost- oder Westausrichtung lohnt sich trotzdem und verteilt die Erzeugung gleichmäßiger über den Tag.</p>
<p>Für eine eigene Schätzung berechnet das kostenlose Tool PVGIS der Europäischen Kommission den erwarteten Ertrag nach Standort, Ausrichtung und Neigung. Ohne Speicher hängt der tatsächlich selbst verbrauchte Anteil davon ab, wann Sie zu Hause sind. Die Ersparnis ergibt sich dann einfach: selbst verbrauchte kWh mal Ihr Strompreis pro kWh.</p>
<p>Der Großteil der Erzeugung fällt zwischen April und September an; im Winter sinkt sie durch kurze Tage und tiefen Sonnenstand deutlich.</p>

<h2>Fehler, die Sie vermeiden sollten</h2>
<ul>
<li><strong>Anschluss über Mehrfachsteckdose oder Verlängerungskabel:</strong> Überhitzungsgefahr. Nutzen Sie eine fest installierte Steckdose, idealerweise an einem von einer Elektrofachkraft geprüften Stromkreis.</li>
<li><strong>An der Halterung sparen:</strong> Wind belastet ein Modul stark. Geeignete Halterungen verwenden und die Stabilität des Geländers prüfen.</li>
<li><strong>Registrierung vergessen:</strong> Marktstammdatenregister in Deutschland, Enedis in Frankreich, Netzbetreiber anderswo.</li>
<li><strong>Speicher überdimensionieren:</strong> Ein zu großer Akku bleibt einen Großteil des Jahres halb leer.</li>
<li><strong>Verschattung ignorieren:</strong> Ein Baum oder Nachbarbalkon, der das Modul mittags verschattet, kann den Ertrag stark senken.</li>
</ul>

<h2>Installation und Sicherheit</h2>
<p>Die Module werden mit wasserdichten MC4-Steckern an den Wechselrichter angeschlossen. Den Wechselrichter vor direkter Sonne geschützt montieren, etwa hinter einem Modul oder unter dem Geländer. Lassen Sie vor dem Einstecken von einer Elektrofachkraft prüfen, ob der Stromkreis mit passendem Leitungsschutzschalter und 30-mA-FI-Schutzschalter abgesichert und nicht bereits durch große Verbraucher ausgelastet ist. Fassen Sie Modulkabel mit offenen Steckern nie bei Sonnenlicht an: Sie stehen unter Spannung, sobald Licht auf das Modul fällt. Weitere Spartipps finden Sie in unserem <a href="/de/blog/guide-domotique-economie-energie-2026">Ratgeber Smart Home und Energiesparen</a>.</p>

<h2>Unser Fazit</h2>
<p>Ist tagsüber jemand zu Hause, bietet ein Set aus zwei Modulen und einem 800-VA-Wechselrichter wie dem <strong>Hoymiles HMS-800W-2T</strong> die beste Mischung aus Einfachheit, Zuverlässigkeit und Ersparnis. Der <strong>Anker SOLIX MI80</strong> ist eine solide Alternative mit verbraucherfreundlicher App. Liegt Ihr Verbrauch vor allem am Abend, ist die <strong>Anker SOLIX Solarbank 3 E2700 Pro</strong> das umfassendste Speichersystem; die <strong>EcoFlow STREAM Ultra</strong> passt besser zu kleinen Balkonen, und die <strong>Zendure SolarFlow 800 Pro 2</strong> zu allen, die den Speicher schrittweise ausbauen möchten. Registrieren Sie die Anlage in jedem Fall und lassen Sie den Anschluss prüfen.</p>`,

    es: `<p><strong>Un panel solar de balcón, o Balkonkraftwerk, es un pequeño kit fotovoltaico formado por uno o dos paneles y un microinversor, normalmente limitado a 800 W, que alimenta directamente los aparatos de tu vivienda y reduce la electricidad que compras.</strong> En 2026, el mejor punto de partida para la mayoría de hogares sigue siendo un kit sencillo de dos paneles con un microinversor de 800 VA como el Hoymiles HMS-800W-2T; si no hay nadie en casa durante el día, un sistema con batería como el Anker SOLIX Solarbank 3 E2700 Pro o el EcoFlow STREAM Ultra permite usar por la noche la energía producida a mediodía.</p>
<p>Esta guía se basa en las fichas técnicas de los fabricantes, en análisis independientes publicados y en opiniones verificadas de compradores. Explica el funcionamiento, las normas conocidas en los principales países europeos, los criterios de compra y los errores más frecuentes. Encontrarás todos los kits disponibles en nuestra categoría <a href="/es/energie-domotique/solaire-balcon">solar de balcón</a>.</p>

<h2>Cómo funciona un panel solar de balcón</h2>
<p>Un kit de balcón tiene tres elementos: uno o dos <strong>paneles fotovoltaicos</strong> (a menudo de 400 a 500 Wp cada uno), un <strong>microinversor</strong> que convierte la corriente continua de los paneles en corriente alterna de 230 V sincronizada con la red, y un <strong>cable de conexión</strong> a la instalación eléctrica de la vivienda. Se completa con un sistema de fijación para barandilla, pared, cubierta plana o suelo.</p>
<p>El principio es el <strong>autoconsumo</strong>: la electricidad producida circula por la instalación de la casa y la consumen primero los aparatos en marcha (frigorífico, router, consumos en espera, lavadora). Lo que no consumes en ese momento sale a la red pública, por lo general sin compensación. El microinversor se apaga automáticamente si se corta la red, para no poner en tensión una línea en reparación.</p>
<p>Hay que distinguir dos cifras: la <strong>potencia pico de los paneles</strong> (Wp), su máximo a pleno sol, y la <strong>potencia de salida del inversor</strong> (W o VA), que limita lo que se inyecta en la vivienda. Combinar 900 Wp de paneles con un inversor de 800 VA es habitual: el inversor recorta unas pocas horas al año en pleno verano, pero aumenta la producción por la mañana, por la tarde y en días nublados.</p>

<h2>Normas 2026: lo que está establecido país por país</h2>
<p>Las normas cambian rápido y varían según el país. Estos son los puntos bien establecidos en la fecha de esta actualización; consulta siempre con tu distribuidora antes de comprar.</p>
<h3>Alemania</h3>
<p>Desde la entrada en vigor del Solarpaket I en mayo de 2024, un Balkonkraftwerk puede tener un <strong>inversor de hasta 800 VA</strong> y <strong>hasta 2.000 Wp de paneles</strong>. El único trámite es un <strong>registro gratuito en el Marktstammdatenregister</strong> de la Agencia Federal de Redes; se suprimió la notificación aparte al operador de red. Un contador antiguo sin bloqueo de retroceso puede seguir funcionando hasta que el operador lo sustituya. La norma de producto DIN VDE V 0126-95, publicada a finales de 2025, regula la conexión mediante enchufe Schuko bajo ciertas condiciones de potencia de paneles; por encima se exige un conector de inyección específico. Desde octubre de 2024, inquilinos y propietarios en comunidad pueden solicitar la instalación, y el arrendador o la comunidad solo pueden negarse por un motivo serio.</p>
<h3>Francia</h3>
<p>La instalación es legal, pero debe <strong>declararse a Enedis</strong> (o a la distribuidora local) mediante un <strong>convenio de autoconsumo sin inyección (CACSI)</strong>, un trámite gratuito en línea, sea cual sea la potencia. El excedente inyectado no se remunera. La norma NF C 15-100 regula la conexión: debe evitarse un enchufe normal compartido con otros aparatos o una regleta, y se recomienda un <strong>circuito dedicado y protegido</strong> revisado por un electricista cualificado. Un panel visible en fachada o barandilla puede requerir una declaración previa en el ayuntamiento, y en comunidad de propietarios suele hacer falta el acuerdo de la junta.</p>
<h3>España y otros países</h3>
<ul>
<li><strong>España:</strong> el autoconsumo está regulado por el Real Decreto 244/2019. Las instalaciones pequeñas deben comunicarse a la distribuidora y registrarse según el procedimiento de cada comunidad autónoma, y la conexión debe cumplir el Reglamento Electrotécnico de Baja Tensión. Consulta a un instalador autorizado y a tu comunidad de propietarios antes de comprar.</li>
<li><strong>Países Bajos:</strong> los kits enchufables deben comunicarse al operador de red. La compensación (saldering) termina el 1 de enero de 2027.</li>
<li><strong>Italia y Bélgica:</strong> se permiten pequeñas instalaciones con una comunicación simplificada a la distribuidora, con procedimientos propios de cada país o región.</li>
</ul>

<h2>Criterios para elegir bien</h2>
<h3>Microinversor sencillo o sistema con batería</h3>
<p>Un kit sin batería es la opción más sencilla y la que antes se amortiza: todo lo que se produce de día y se consume en el momento es ahorro. Un sistema con batería (acoplado en continua entre paneles e inversor) guarda el excedente del mediodía para la noche. Compensa sobre todo si no hay nadie en casa durante el día. Para profundizar, lee nuestra <a href="/es/blog/batterie-domestique-stockage-solaire">comparativa de baterías domésticas para solar</a>.</p>
<h3>Número de entradas MPPT</h3>
<p>Cada entrada MPPT optimiza un panel de forma independiente. Dos entradas bastan para dos paneles; cuatro permiten repartir paneles en orientaciones distintas (este y oeste, por ejemplo), dentro del límite de potencia de paneles de tu país.</p>
<h3>Paneles y fijación</h3>
<p>Los paneles monocristalinos de 400 a 500 Wp son el estándar. Los <strong>bifaciales vidrio-vidrio</strong> captan también la luz reflejada y envejecen mejor. Comprueba el peso (a menudo más de 20 kg por panel), la solidez de la barandilla y la calidad de los soportes: un panel mal sujeto expuesto al viento es el principal riesgo de un kit de balcón.</p>
<h3>App y medición del consumo</h3>
<p>Una app que muestre la producción en tiempo real ayuda a desplazar consumos (lavadora, lavavajillas) a las horas de sol. Con batería, un medidor o un <a href="/es/blog/comparatif-smart-plugs-mesure-energie">enchufe inteligente con medición de energía</a> permite ajustar la descarga al consumo real y no regalar a la red la energía almacenada.</p>
<h3>Garantía y conformidad</h3>
<p>Elige un inversor conforme a las normas europeas de conexión a red (incluida la protección anti-isla), con al menos diez años de garantía, y paneles con garantía de rendimiento de 25 años o más.</p>

<h2>Los modelos de referencia en 2026</h2>
<h3>Hoymiles HMS-800W-2T: el microinversor de referencia para un kit sencillo</h3>
<p>El HMS-800W-2T equipa buena parte de los kits de balcón vendidos en Europa. Entrega <strong>800 VA</strong>, admite dos paneles en <strong>dos entradas MPPT</strong> independientes e integra <strong>wifi</strong>, por lo que no necesita pasarela adicional. La supervisión se hace con la app S-Miles Cloud. Carcasa IP67 y refrigeración pasiva sin ventilador.</p>
<p><strong>Puntos fuertes:</strong> fiabilidad reconocida, compatible con paneles de 320 a más de 500 Wp, muchos kits completos basados en él. <strong>Límites:</strong> sin almacenamiento; app más técnica que la de las marcas de consumo. <strong>Para quién:</strong> hogares con gente en casa de día que quieren la solución más sencilla y rentable.</p>
<h3>Anker SOLIX MI80: la alternativa de consumo</h3>
<p>El MI80 es el microinversor de los kits de balcón de Anker. Su salida se ajusta a <strong>600 u 800 W</strong> desde la app, y tiene <strong>dos entradas MPPT</strong>, wifi y Bluetooth, carcasa IP67 y diez años de garantía.</p>
<p><strong>Puntos fuertes:</strong> app de Anker clara, configuración guiada. <strong>Límites:</strong> el historial es menos completo que en los sistemas con batería de la marca. <strong>Para quién:</strong> quienes prefieren un ecosistema de consumo y el servicio de una gran marca.</p>
<h3>Anker SOLIX Solarbank 3 E2700 Pro: el mejor sistema con almacenamiento</h3>
<p>La Solarbank 3 E2700 Pro reúne batería, reguladores e inversor en un solo equipo. Almacena <strong>2,688 kWh</strong>, admite hasta <strong>3.600 Wp en cuatro entradas MPPT</strong> y entrega <strong>800 W</strong> a través de un enchufe. Su capacidad se amplía con baterías de expansión y puede apoyarse en un medidor inteligente para seguir el consumo de la casa.</p>
<p><strong>Puntos fuertes:</strong> gran capacidad de base, ampliable, control avanzado. <strong>Límites:</strong> voluminosa y pesada. <strong>Para quién:</strong> hogares vacíos de día que consumen sobre todo por la noche.</p>
<h3>EcoFlow STREAM Ultra: el todo en uno compacto</h3>
<p>El STREAM Ultra integra una batería LiFePO4 de <strong>1,92 kWh</strong>, <strong>cuatro entradas MPPT de 500 W</strong> (2.000 W en total) y un inversor que inyecta <strong>800 W</strong> en la red doméstica, con salida aislada de hasta 1.200 W. Carcasa IP65 para exterior, wifi y Bluetooth, diez años de garantía.</p>
<p><strong>Puntos fuertes:</strong> compacto para un balcón, capacidad ampliable con baterías STREAM adicionales. <strong>Límites:</strong> menor capacidad de base que la Solarbank 3. <strong>Para quién:</strong> balcones pequeños y quien busque un sistema discreto y ampliable.</p>
<h3>Zendure SolarFlow 800 Pro 2: la opción más ampliable</h3>
<p>Sucesor más compacto y ligero del SolarFlow 800 Pro, mantiene una batería de <strong>1,92 kWh</strong> ampliable a <strong>11,52 kWh</strong>, <strong>cuatro entradas MPPT</strong> (hasta 2.640 Wp) y un inversor bidireccional de 800 W a red y 1.000 W de salida de respaldo.</p>
<p><strong>Puntos fuertes:</strong> capacidad posible muy alta, carga desde la red. <strong>Límites:</strong> muchos ajustes, para usuarios a los que les gusta optimizar. <strong>Para quién:</strong> empezar con poco y añadir almacenamiento más adelante.</p>

<h2>Tabla comparativa</h2>
<table>
<thead>
<tr><th>Modelo</th><th>Tipo</th><th>Dato clave</th><th>Conectividad</th><th>Ideal para</th></tr>
</thead>
<tbody>
<tr><td><strong>Hoymiles HMS-800W-2T</strong></td><td>Microinversor</td><td>800 VA, 2 MPPT, IP67</td><td>Wifi integrado</td><td>Kit sencillo, gente en casa de día</td></tr>
<tr><td><strong>Anker SOLIX MI80</strong></td><td>Microinversor</td><td>600/800 W ajustable, 2 MPPT</td><td>Wifi, Bluetooth</td><td>Ecosistema de consumo</td></tr>
<tr><td><strong>Anker SOLIX Solarbank 3 E2700 Pro</strong></td><td>Sistema con batería</td><td>2,688 kWh, 4 MPPT, ampliable</td><td>Wifi, Bluetooth</td><td>Consumo sobre todo nocturno</td></tr>
<tr><td><strong>EcoFlow STREAM Ultra</strong></td><td>Sistema con batería</td><td>1,92 kWh, 4 MPPT, IP65</td><td>Wifi, Bluetooth</td><td>Balcón pequeño, formato compacto</td></tr>
<tr><td><strong>Zendure SolarFlow 800 Pro 2</strong></td><td>Sistema con batería</td><td>1,92 kWh ampliable a 11,52 kWh</td><td>Wifi, Bluetooth</td><td>Almacenamiento ampliable</td></tr>
</tbody>
</table>

<h2>¿Cuánto produce un panel solar de balcón?</h2>
<p>La producción depende sobre todo de la orientación, la inclinación, las sombras y la región. Como orden de magnitud, un kit de unos 800 a 900 Wp orientado al sur e inclinado unos 30° suele producir <strong>700 a 900 kWh al año</strong> en el norte de Francia o en Alemania, y bastante más en España e Italia. El mismo kit colgado en vertical en una barandilla produce claramente menos, a menudo en torno a un tercio menos. La orientación este u oeste sigue siendo interesante y reparte mejor la producción a lo largo del día.</p>
<p>Para estimar tu caso, la herramienta gratuita PVGIS de la Comisión Europea calcula la producción esperada según tu ubicación, orientación e inclinación. Sin batería, la parte que realmente autoconsumes depende de cuándo estás en casa. El ahorro se calcula fácilmente: kWh autoconsumidos multiplicados por el precio de tu kWh.</p>
<p>La mayor parte de la producción se concentra entre abril y septiembre; en invierno, los días cortos y el sol bajo la reducen bastante.</p>

<h2>Errores que debes evitar</h2>
<ul>
<li><strong>Conectar el kit a una regleta o alargador:</strong> riesgo de sobrecalentamiento. Usa un enchufe fijo, idealmente en un circuito dedicado revisado por un electricista.</li>
<li><strong>Descuidar la fijación:</strong> el viento ejerce mucha fuerza sobre un panel. Usa soportes adecuados y comprueba la solidez de la barandilla.</li>
<li><strong>Olvidar los trámites:</strong> distribuidora y registro en España, Enedis en Francia, Marktstammdatenregister en Alemania.</li>
<li><strong>Sobredimensionar la batería:</strong> una batería demasiado grande para tu producción pasa medio vacía gran parte del año.</li>
<li><strong>Ignorar las sombras:</strong> un árbol o un balcón vecino que tape el panel a mediodía puede reducir mucho la producción.</li>
</ul>

<h2>Instalación y seguridad</h2>
<p>Los paneles se conectan al inversor con conectores MC4 estancos. Coloca el inversor protegido del sol directo, detrás de un panel o bajo la barandilla. Antes de enchufar, pide a un electricista que confirme que el circuito tiene un magnetotérmico adecuado y un diferencial de 30 mA, y que no está ya cargado con aparatos potentes. No manipules nunca cables de paneles con conectores abiertos a pleno sol: tienen tensión en cuanto les da la luz. Para ahorrar más, consulta nuestra <a href="/es/blog/guide-domotique-economie-energie-2026">guía de domótica y ahorro energético</a>.</p>

<h2>Nuestro veredicto</h2>
<p>Si hay alguien en casa durante el día, un kit de dos paneles con un microinversor de 800 VA como el <strong>Hoymiles HMS-800W-2T</strong> ofrece el mejor equilibrio entre sencillez, fiabilidad y ahorro. El <strong>Anker SOLIX MI80</strong> es una alternativa sólida para quien prefiere una app de consumo. Si tu consumo se concentra por la noche, la <strong>Anker SOLIX Solarbank 3 E2700 Pro</strong> es el sistema con batería más completo; el <strong>EcoFlow STREAM Ultra</strong> encaja mejor en balcones pequeños, y el <strong>Zendure SolarFlow 800 Pro 2</strong> en quienes quieren ampliar el almacenamiento por etapas. En todos los casos, haz los trámites y revisa la conexión con un profesional.</p>`,

    it: `<p><strong>Un pannello solare da balcone, o Balkonkraftwerk, è un piccolo kit fotovoltaico composto da uno o due pannelli e da un microinverter, di solito limitato a 800 W, che alimenta direttamente gli apparecchi di casa e riduce l'elettricità acquistata dalla rete.</strong> Nel 2026 il miglior punto di partenza per la maggior parte delle famiglie resta un kit semplice di due pannelli con un microinverter da 800 VA come l'Hoymiles HMS-800W-2T; se di giorno non c'è nessuno in casa, un sistema con batteria come l'Anker SOLIX Solarbank 3 E2700 Pro o l'EcoFlow STREAM Ultra permette di usare la sera l'energia prodotta a mezzogiorno.</p>
<p>Questa guida si basa sulle schede tecniche dei produttori, su recensioni indipendenti pubblicate e sui riscontri verificati degli acquirenti. Spiega il funzionamento, le regole note nei principali Paesi europei, i criteri di scelta e gli errori più comuni. Trovi tutti i kit disponibili nella nostra categoria <a href="/it/energie-domotique/solaire-balcon">solare da balcone</a>.</p>

<h2>Come funziona un pannello solare da balcone</h2>
<p>Un kit da balcone ha tre componenti: uno o due <strong>pannelli fotovoltaici</strong> (spesso da 400 a 500 Wp ciascuno), un <strong>microinverter</strong> che trasforma la corrente continua dei pannelli in corrente alternata a 230 V sincronizzata con la rete, e un <strong>cavo di collegamento</strong> all'impianto elettrico di casa. Completa il kit un sistema di fissaggio per ringhiera, parete, tetto piano o terreno.</p>
<p>Il principio è l'<strong>autoconsumo</strong>: l'elettricità prodotta entra nell'impianto domestico ed è usata per prima dagli apparecchi accesi (frigorifero, router, consumi in standby, lavatrice). Ciò che non consumi in quel momento va nella rete pubblica, in genere senza compenso. In caso di blackout il microinverter si spegne automaticamente, per non mettere in tensione una linea in manutenzione.</p>
<p>Occorre distinguere due valori: la <strong>potenza di picco dei pannelli</strong> (Wp), il massimo in pieno sole, e la <strong>potenza in uscita dell'inverter</strong> (W o VA), che limita quanto viene immesso in casa. Abbinare 900 Wp di pannelli a un inverter da 800 VA è comune: l'inverter taglia qualche ora all'anno in piena estate, ma aumenta la produzione al mattino, alla sera e nelle giornate nuvolose.</p>

<h2>Regole 2026: cosa è stabilito Paese per Paese</h2>
<p>Le norme cambiano rapidamente e variano da Paese a Paese. Ecco i punti consolidati alla data di questo aggiornamento; verifica sempre con il tuo distributore di rete prima dell'acquisto.</p>
<h3>Germania</h3>
<p>Dall'entrata in vigore del Solarpaket I nel maggio 2024, un Balkonkraftwerk può avere un <strong>inverter fino a 800 VA</strong> e <strong>fino a 2.000 Wp di pannelli</strong>. L'unico adempimento è una <strong>registrazione gratuita nel Marktstammdatenregister</strong> dell'Agenzia federale delle reti; la notifica separata al gestore di rete è stata abolita. Un vecchio contatore senza blocco antiritorno può restare in funzione fino alla sostituzione da parte del gestore. La norma di prodotto DIN VDE V 0126-95, pubblicata a fine 2025, disciplina il collegamento con spina Schuko a determinate condizioni di potenza dei pannelli; oltre, è richiesto un connettore di immissione dedicato. Da ottobre 2024 inquilini e condòmini possono chiedere l'installazione, che il locatore o il condominio può rifiutare solo per un motivo serio.</p>
<h3>Francia</h3>
<p>L'installazione è legale ma va <strong>dichiarata a Enedis</strong> (o al distributore locale) con una <strong>convenzione di autoconsumo senza immissione (CACSI)</strong>, una pratica gratuita online, qualunque sia la potenza. L'eventuale eccedenza immessa non è remunerata. La norma NF C 15-100 disciplina il collegamento: va evitata una presa comune condivisa con altri apparecchi o una ciabatta, ed è raccomandato un <strong>circuito dedicato e protetto</strong> verificato da un elettricista qualificato. Un pannello visibile in facciata può richiedere una dichiarazione preventiva in Comune, e in condominio serve di solito il consenso dell'assemblea.</p>
<h3>Italia e altri Paesi</h3>
<ul>
<li><strong>Italia:</strong> i piccoli impianti fotovoltaici plug &amp; play sono ammessi con una comunicazione semplificata al distributore tramite il Modello Unico. L'eccedenza immessa in rete, senza un contratto dedicato, non viene remunerata. Verifica con il distributore e con l'amministratore di condominio prima dell'acquisto, e fai controllare il circuito da un elettricista.</li>
<li><strong>Paesi Bassi:</strong> i kit plug-in vanno comunicati al gestore di rete. Lo scambio sul posto (saldering) termina il 1° gennaio 2027.</li>
<li><strong>Spagna e Belgio:</strong> i piccoli impianti sono ammessi con una dichiarazione semplificata, secondo procedure proprie di ogni Paese o regione.</li>
</ul>

<h2>I criteri per scegliere bene</h2>
<h3>Microinverter semplice o sistema con batteria</h3>
<p>Un kit senza batteria è l'opzione più semplice e quella che si ripaga prima: tutto ciò che viene prodotto di giorno e consumato subito è risparmio. Un sistema con batteria (accoppiato in continua tra pannelli e inverter) accumula l'eccedenza di mezzogiorno per la sera. Conviene soprattutto se di giorno non c'è nessuno in casa. Per approfondire, leggi il nostro <a href="/it/blog/batterie-domestique-stockage-solaire">confronto delle batterie domestiche per il fotovoltaico</a>.</p>
<h3>Numero di ingressi MPPT</h3>
<p>Ogni ingresso MPPT ottimizza un pannello in modo indipendente. Due ingressi bastano per due pannelli; quattro permettono di distribuire i pannelli su orientamenti diversi (est e ovest, per esempio), nel limite di potenza consentito nel tuo Paese.</p>
<h3>Pannelli e fissaggio</h3>
<p>I pannelli monocristallini da 400 a 500 Wp sono lo standard. I modelli <strong>bifacciali vetro-vetro</strong> catturano anche la luce riflessa e invecchiano meglio. Controlla il peso (spesso oltre 20 kg per pannello), la solidità della ringhiera e la qualità dei supporti: un pannello fissato male ed esposto al vento è il rischio principale di un kit da balcone.</p>
<h3>App e misura dei consumi</h3>
<p>Un'app che mostra la produzione in tempo reale aiuta a spostare i consumi (lavatrice, lavastoviglie) nelle ore di sole. Con una batteria, un misuratore o una <a href="/it/blog/comparatif-smart-plugs-mesure-energie">presa smart con misura dell'energia</a> permette di adeguare la scarica ai consumi reali e di non regalare alla rete l'energia accumulata.</p>
<h3>Garanzia e conformità</h3>
<p>Scegli un inverter conforme alle norme europee di connessione alla rete (in Italia la CEI 0-21, con protezione di interfaccia), con almeno dieci anni di garanzia, e pannelli con garanzia di rendimento di 25 anni o più.</p>

<h2>I modelli di riferimento nel 2026</h2>
<h3>Hoymiles HMS-800W-2T: il microinverter di riferimento per un kit semplice</h3>
<p>L'HMS-800W-2T equipaggia buona parte dei kit da balcone venduti in Europa. Eroga <strong>800 VA</strong>, accetta due pannelli su <strong>due ingressi MPPT</strong> indipendenti e integra il <strong>Wi-Fi</strong>, quindi non serve un gateway aggiuntivo. Il monitoraggio avviene con l'app S-Miles Cloud. Involucro IP67, raffreddamento passivo senza ventola.</p>
<p><strong>Punti di forza:</strong> affidabilità collaudata, compatibile con pannelli da 320 a oltre 500 Wp, molti kit completi costruiti attorno a esso. <strong>Limiti:</strong> nessun accumulo; app più tecnica di quelle dei marchi consumer. <strong>Per chi:</strong> famiglie presenti in casa di giorno che vogliono la soluzione più semplice e conveniente.</p>
<h3>Anker SOLIX MI80: l'alternativa consumer</h3>
<p>Il MI80 è il microinverter dei kit da balcone Anker. La potenza in uscita si imposta a <strong>600 o 800 W</strong> dall'app; ha <strong>due ingressi MPPT</strong>, Wi-Fi e Bluetooth, involucro IP67 e dieci anni di garanzia.</p>
<p><strong>Punti di forza:</strong> app Anker chiara, configurazione guidata. <strong>Limiti:</strong> lo storico è meno completo rispetto ai sistemi con batteria del marchio. <strong>Per chi:</strong> chi preferisce un ecosistema consumer e l'assistenza di un grande marchio.</p>
<h3>Anker SOLIX Solarbank 3 E2700 Pro: il miglior sistema con accumulo</h3>
<p>La Solarbank 3 E2700 Pro riunisce batteria, regolatori e inverter in un unico apparecchio. Accumula <strong>2,688 kWh</strong>, accetta fino a <strong>3.600 Wp su quattro ingressi MPPT</strong> ed eroga <strong>800 W</strong> tramite presa. La capacità si espande con batterie aggiuntive e può appoggiarsi a un contatore intelligente per seguire i consumi di casa.</p>
<p><strong>Punti di forza:</strong> grande capacità di base, espandibile, gestione avanzata. <strong>Limiti:</strong> ingombrante e pesante. <strong>Per chi:</strong> famiglie fuori casa di giorno che consumano soprattutto la sera.</p>
<h3>EcoFlow STREAM Ultra: il tutto-in-uno compatto</h3>
<p>Lo STREAM Ultra integra una batteria LiFePO4 da <strong>1,92 kWh</strong>, <strong>quattro ingressi MPPT da 500 W</strong> (2.000 W in totale) e un inverter che immette <strong>800 W</strong> nell'impianto domestico, con un'uscita off-grid fino a 1.200 W. Involucro IP65 per esterni, Wi-Fi e Bluetooth, dieci anni di garanzia.</p>
<p><strong>Punti di forza:</strong> compatto per un balcone, capacità espandibile con batterie STREAM aggiuntive. <strong>Limiti:</strong> capacità di base inferiore alla Solarbank 3. <strong>Per chi:</strong> balconi piccoli e chi cerca un sistema discreto ed espandibile.</p>
<h3>Zendure SolarFlow 800 Pro 2: l'opzione più espandibile</h3>
<p>Successore più compatto e leggero del SolarFlow 800 Pro, conserva una batteria da <strong>1,92 kWh</strong> espandibile fino a <strong>11,52 kWh</strong>, <strong>quattro ingressi MPPT</strong> (fino a 2.640 Wp) e un inverter bidirezionale da 800 W in rete e 1.000 W in uscita di emergenza.</p>
<p><strong>Punti di forza:</strong> capacità possibile molto elevata, ricarica dalla rete. <strong>Limiti:</strong> molte impostazioni, per chi ama ottimizzare. <strong>Per chi:</strong> partire in piccolo e aggiungere accumulo in seguito.</p>

<h2>Tabella comparativa</h2>
<table>
<thead>
<tr><th>Modello</th><th>Tipo</th><th>Caratteristica chiave</th><th>Connettività</th><th>Ideale per</th></tr>
</thead>
<tbody>
<tr><td><strong>Hoymiles HMS-800W-2T</strong></td><td>Microinverter</td><td>800 VA, 2 MPPT, IP67</td><td>Wi-Fi integrato</td><td>Kit semplice, presenza di giorno</td></tr>
<tr><td><strong>Anker SOLIX MI80</strong></td><td>Microinverter</td><td>600/800 W regolabile, 2 MPPT</td><td>Wi-Fi, Bluetooth</td><td>Ecosistema consumer</td></tr>
<tr><td><strong>Anker SOLIX Solarbank 3 E2700 Pro</strong></td><td>Sistema con batteria</td><td>2,688 kWh, 4 MPPT, espandibile</td><td>Wi-Fi, Bluetooth</td><td>Consumi soprattutto serali</td></tr>
<tr><td><strong>EcoFlow STREAM Ultra</strong></td><td>Sistema con batteria</td><td>1,92 kWh, 4 MPPT, IP65</td><td>Wi-Fi, Bluetooth</td><td>Balcone piccolo, formato compatto</td></tr>
<tr><td><strong>Zendure SolarFlow 800 Pro 2</strong></td><td>Sistema con batteria</td><td>1,92 kWh espandibile a 11,52 kWh</td><td>Wi-Fi, Bluetooth</td><td>Accumulo espandibile</td></tr>
</tbody>
</table>

<h2>Quanto produce un pannello solare da balcone?</h2>
<p>La produzione dipende soprattutto da orientamento, inclinazione, ombreggiamento e regione. Come ordine di grandezza, un kit di circa 800-900 Wp esposto a sud e inclinato di circa 30° produce spesso <strong>700-900 kWh all'anno</strong> nel nord della Francia o in Germania, e sensibilmente di più in Italia. Lo stesso kit montato in verticale sulla ringhiera produce nettamente meno, spesso circa un terzo in meno. L'esposizione est o ovest resta interessante e distribuisce meglio la produzione nell'arco della giornata.</p>
<p>Per stimare il tuo caso, lo strumento gratuito PVGIS della Commissione europea calcola la produzione attesa in base a indirizzo, orientamento e inclinazione. Senza batteria, la quota realmente autoconsumata dipende da quando sei in casa. Il risparmio si calcola facilmente: kWh autoconsumati moltiplicati per il prezzo del tuo kWh.</p>
<p>La maggior parte della produzione si concentra tra aprile e settembre; in inverno le giornate corte e il sole basso la riducono parecchio.</p>

<h2>Errori da evitare</h2>
<ul>
<li><strong>Collegare il kit a una ciabatta o una prolunga:</strong> rischio di surriscaldamento. Usa una presa fissa, idealmente su un circuito dedicato verificato da un elettricista.</li>
<li><strong>Trascurare il fissaggio:</strong> il vento esercita forze importanti su un pannello. Usa supporti adeguati e verifica la solidità della ringhiera.</li>
<li><strong>Dimenticare la comunicazione:</strong> Modello Unico in Italia, Enedis in Francia, Marktstammdatenregister in Germania.</li>
<li><strong>Sovradimensionare la batteria:</strong> una batteria troppo grande per la tua produzione resta mezza vuota per buona parte dell'anno.</li>
<li><strong>Ignorare le ombre:</strong> un albero o un balcone vicino che copre il pannello a mezzogiorno può ridurre molto la produzione.</li>
</ul>

<h2>Installazione e sicurezza</h2>
<p>I pannelli si collegano all'inverter con connettori MC4 stagni. Monta l'inverter al riparo dal sole diretto, dietro un pannello o sotto la ringhiera. Prima di collegare, fai verificare da un elettricista che il circuito sia protetto da un interruttore magnetotermico adeguato e da un differenziale da 30 mA, e che non sia già carico di apparecchi potenti. Non toccare mai i cavi dei pannelli con connettori aperti in pieno sole: sono in tensione appena la luce colpisce il pannello. Per risparmiare ancora, consulta la nostra <a href="/it/blog/guide-domotique-economie-energie-2026">guida alla domotica e al risparmio energetico</a>.</p>

<h2>Il nostro verdetto</h2>
<p>Se di giorno c'è qualcuno in casa, un kit di due pannelli con un microinverter da 800 VA come l'<strong>Hoymiles HMS-800W-2T</strong> offre il miglior equilibrio tra semplicità, affidabilità e risparmio. L'<strong>Anker SOLIX MI80</strong> è una solida alternativa per chi preferisce un'app consumer. Se i consumi si concentrano la sera, l'<strong>Anker SOLIX Solarbank 3 E2700 Pro</strong> è il sistema con batteria più completo; l'<strong>EcoFlow STREAM Ultra</strong> si adatta meglio ai balconi piccoli, e lo <strong>Zendure SolarFlow 800 Pro 2</strong> a chi vuole espandere l'accumulo per gradi. In ogni caso, invia la comunicazione al distributore e fai verificare il collegamento da un professionista.</p>`,

    nl: `<p><strong>Een balkonzonnepaneel, of Balkonkraftwerk, is een kleine zonne-installatie van één of twee panelen en een micro-omvormer, meestal begrensd op 800 W, die de apparaten in je woning rechtstreeks van stroom voorziet en zo minder stroom van het net laat afnemen.</strong> In 2026 is voor de meeste huishoudens een eenvoudige set van twee panelen met een micro-omvormer van 800 VA, zoals de Hoymiles HMS-800W-2T, nog steeds het beste startpunt; ben je overdag niet thuis, dan laat een batterijsysteem zoals de Anker SOLIX Solarbank 3 E2700 Pro of de EcoFlow STREAM Ultra je de middagstroom 's avonds gebruiken.</p>
<p>Deze gids is gebaseerd op specificaties van fabrikanten, gepubliceerde onafhankelijke reviews en geverifieerde ervaringen van kopers. Hij legt uit hoe het werkt, welke regels in de belangrijkste Europese landen bekend zijn, waarop je let bij aankoop en welke fouten vaak voorkomen. Alle beschikbare sets vind je in onze categorie <a href="/nl/energie-domotique/solaire-balcon">balkonzonnepanelen</a>.</p>

<h2>Hoe werkt een balkonzonnepaneel?</h2>
<p>Een balkonset bestaat uit drie onderdelen: één of twee <strong>zonnepanelen</strong> (vaak 400 tot 500 Wp per stuk), een <strong>micro-omvormer</strong> die de gelijkstroom van de panelen omzet in 230 V wisselstroom die met het net is gesynchroniseerd, en een <strong>aansluitkabel</strong> naar de elektrische installatie van de woning. Daarbij hoort een bevestigingssysteem voor balustrade, gevel, plat dak of grond.</p>
<p>Het principe is <strong>eigen verbruik</strong>: de opgewekte stroom gaat het huisnet in en wordt eerst gebruikt door apparaten die aanstaan (koelkast, router, sluipverbruik, wasmachine). Wat je op dat moment niet gebruikt, gaat naar het openbare net. Bij een stroomstoring schakelt de micro-omvormer automatisch uit, zodat er nooit spanning komt op een kabel waaraan gewerkt wordt.</p>
<p>Twee getallen zijn belangrijk: het <strong>piekvermogen van de panelen</strong> (Wp), hun maximum in volle zon, en het <strong>uitgangsvermogen van de omvormer</strong> (W of VA), dat begrenst wat in de woning wordt ingevoed. 900 Wp aan panelen combineren met een omvormer van 800 VA is gebruikelijk: in hartje zomer wordt een paar uur per jaar afgetopt, maar 's ochtends, 's avonds en op grijze dagen stijgt de opbrengst.</p>

<h2>Regels in 2026: wat per land vaststaat</h2>
<p>De regels veranderen snel en verschillen per land. Hieronder de punten die bij deze update vaststaan; check altijd bij je netbeheerder voordat je koopt.</p>
<h3>Nederland</h3>
<p>Stekkerpanelen zijn in Nederland gangbaar. Je meldt de installatie bij je netbeheerder, in de praktijk via het centrale meldpunt voor teruglevering, en je laat het groepje waarop je aansluit bij twijfel controleren door een erkend installateur: sluit nooit aan op een stekkerdoos of verlengsnoer. De <strong>salderingsregeling stopt op 1 januari 2027</strong>. Tot die datum wordt teruggeleverde stroom nog verrekend met je verbruik; daarna is direct eigen verbruik veel meer waard dan teruglevering, wat een batterij of het verschuiven van verbruik naar zonnige uren interessanter maakt. In een appartement heb je vaak toestemming van de VvE nodig, en als huurder schriftelijke toestemming van de verhuurder.</p>
<h3>Duitsland</h3>
<p>Sinds het Solarpaket I in mei 2024 van kracht werd, mag een Balkonkraftwerk een <strong>omvormer tot 800 VA</strong> en <strong>tot 2.000 Wp aan panelen</strong> hebben. De enige formaliteit is een <strong>gratis registratie in het Marktstammdatenregister</strong>; de aparte melding bij de netbeheerder is vervallen. De productnorm DIN VDE V 0126-95, eind 2025 gepubliceerd, regelt aansluiting via een Schuko-stekker onder bepaalde voorwaarden voor het paneelvermogen.</p>
<h3>België, Frankrijk en andere landen</h3>
<ul>
<li><strong>België:</strong> kleine installaties moeten bij de netbeheerder worden gemeld; de regels verschillen per gewest. Informeer je vooraf.</li>
<li><strong>Frankrijk:</strong> de installatie is legaal maar moet bij Enedis worden gemeld via een gratis overeenkomst voor eigen verbruik zonder teruglevering (CACSI). Een eigen, beveiligde groep, gecontroleerd door een elektricien, wordt aanbevolen.</li>
<li><strong>Spanje en Italië:</strong> kleine installaties zijn toegestaan met een vereenvoudigde melding bij de netbeheerder.</li>
</ul>

<h2>Waar let je op bij de keuze?</h2>
<h3>Eenvoudige micro-omvormer of batterijsysteem</h3>
<p>Een set zonder batterij is het eenvoudigst en verdient zich het snelst terug: alles wat overdag wordt opgewekt en meteen verbruikt, is winst. Een batterijsysteem (DC-gekoppeld tussen panelen en omvormer) bewaart het middagoverschot voor de avond. Dat loont vooral als er overdag niemand thuis is, en wordt in Nederland interessanter nu de saldering stopt. Lees meer in onze <a href="/nl/blog/batterie-domestique-stockage-solaire">vergelijking van thuisbatterijen voor zonnepanelen</a>.</p>
<h3>Aantal MPPT-ingangen</h3>
<p>Elke MPPT-ingang optimaliseert één paneel afzonderlijk. Twee ingangen volstaan voor twee panelen; met vier ingangen verdeel je panelen over verschillende richtingen (bijvoorbeeld oost en west), binnen de grens die in jouw land geldt.</p>
<h3>Panelen en bevestiging</h3>
<p>Monokristallijne panelen van 400 tot 500 Wp zijn de standaard. <strong>Bifaciale glas-glaspanelen</strong> vangen ook gereflecteerd licht op en verouderen beter. Controleer het gewicht (vaak meer dan 20 kg per paneel), de sterkte van de balustrade en de kwaliteit van de steunen: een slecht bevestigd paneel in de wind is het grootste risico van een balkonset.</p>
<h3>App en verbruiksmeting</h3>
<p>Een app met realtime opbrengst helpt je verbruik (wasmachine, vaatwasser) naar zonnige uren te verschuiven. Met een batterij zorgt een meter, P1-lezer of <a href="/nl/blog/comparatif-smart-plugs-mesure-energie">slimme stekker met energiemeting</a> ervoor dat de ontlading het werkelijke verbruik volgt en opgeslagen stroom niet aan het net wordt weggegeven.</p>
<h3>Garantie en conformiteit</h3>
<p>Kies een omvormer die voldoet aan de Europese aansluitnormen (inclusief anti-eilandbeveiliging), met minstens tien jaar garantie, en panelen met een vermogensgarantie van 25 jaar of meer.</p>

<h2>De referentiemodellen in 2026</h2>
<h3>Hoymiles HMS-800W-2T: de referentie-omvormer voor een eenvoudige set</h3>
<p>De HMS-800W-2T zit in een groot deel van de balkonsets die in Europa worden verkocht. Hij levert <strong>800 VA</strong>, neemt twee panelen op <strong>twee onafhankelijke MPPT-ingangen</strong> en heeft <strong>ingebouwde wifi</strong>, dus geen extra gateway nodig. Monitoring via de app S-Miles Cloud. IP67-behuizing, passieve koeling zonder ventilator.</p>
<p><strong>Sterke punten:</strong> bewezen betrouwbaarheid, geschikt voor panelen van 320 tot meer dan 500 Wp, veel complete sets rond deze omvormer. <strong>Beperkingen:</strong> geen opslag; de app is technischer dan die van consumentenmerken. <strong>Voor wie:</strong> huishoudens die overdag thuis zijn en de eenvoudigste, voordeligste oplossing willen.</p>
<h3>Anker SOLIX MI80: het consumentvriendelijke alternatief</h3>
<p>De MI80 is de micro-omvormer van de Anker-balkonsets. Het uitgangsvermogen stel je in de app in op <strong>600 of 800 W</strong>; hij heeft <strong>twee MPPT-ingangen</strong>, wifi en Bluetooth, een IP67-behuizing en tien jaar garantie.</p>
<p><strong>Sterke punten:</strong> overzichtelijke Anker-app, begeleide installatie. <strong>Beperkingen:</strong> de historie is minder uitgebreid dan bij de batterijsystemen van het merk. <strong>Voor wie:</strong> wie de voorkeur geeft aan een consumentenecosysteem en de service van een groot merk.</p>
<h3>Anker SOLIX Solarbank 3 E2700 Pro: het beste systeem met opslag</h3>
<p>De Solarbank 3 E2700 Pro combineert batterij, laadregelaars en omvormer in één apparaat. Hij slaat <strong>2,688 kWh</strong> op, neemt tot <strong>3.600 Wp op vier MPPT-ingangen</strong> en levert <strong>800 W</strong> via een stopcontact. De capaciteit is uit te breiden met extra batterijen, en met een slimme meter volgt de ontlading het verbruik in huis.</p>
<p><strong>Sterke punten:</strong> grote basiscapaciteit, uitbreidbaar, geavanceerde aansturing. <strong>Beperkingen:</strong> groot en zwaar. <strong>Voor wie:</strong> huishoudens die overdag weg zijn en vooral 's avonds stroom gebruiken.</p>
<h3>EcoFlow STREAM Ultra: de compacte alles-in-één</h3>
<p>De STREAM Ultra combineert een LiFePO4-batterij van <strong>1,92 kWh</strong>, <strong>vier MPPT-ingangen van 500 W</strong> (2.000 W in totaal) en een omvormer die <strong>800 W</strong> in het huisnet voedt, met een netonafhankelijke uitgang tot 1.200 W. IP65-behuizing voor buiten, wifi en Bluetooth, tien jaar garantie.</p>
<p><strong>Sterke punten:</strong> compact genoeg voor een balkon, capaciteit uit te breiden met extra STREAM-batterijen. <strong>Beperkingen:</strong> lagere basiscapaciteit dan de Solarbank 3. <strong>Voor wie:</strong> kleine balkons en wie een onopvallend, uitbreidbaar systeem zoekt.</p>
<h3>Zendure SolarFlow 800 Pro 2: de meest uitbreidbare optie</h3>
<p>De compactere, lichtere opvolger van de SolarFlow 800 Pro behoudt een batterij van <strong>1,92 kWh</strong>, uit te breiden tot <strong>11,52 kWh</strong>, <strong>vier MPPT-ingangen</strong> (tot 2.640 Wp) en een bidirectionele omvormer met 800 W op het net en 1.000 W noodstroomuitgang.</p>
<p><strong>Sterke punten:</strong> zeer grote capaciteit mogelijk, laden vanaf het net. <strong>Beperkingen:</strong> veel instellingen, vooral voor wie graag optimaliseert. <strong>Voor wie:</strong> klein beginnen en later opslag toevoegen.</p>

<h2>Vergelijkingstabel</h2>
<table>
<thead>
<tr><th>Model</th><th>Type</th><th>Belangrijkste kenmerk</th><th>Connectiviteit</th><th>Ideaal voor</th></tr>
</thead>
<tbody>
<tr><td><strong>Hoymiles HMS-800W-2T</strong></td><td>Micro-omvormer</td><td>800 VA, 2 MPPT, IP67</td><td>Ingebouwde wifi</td><td>Eenvoudige set, overdag thuis</td></tr>
<tr><td><strong>Anker SOLIX MI80</strong></td><td>Micro-omvormer</td><td>600/800 W instelbaar, 2 MPPT</td><td>Wifi, Bluetooth</td><td>Consumentenecosysteem</td></tr>
<tr><td><strong>Anker SOLIX Solarbank 3 E2700 Pro</strong></td><td>Batterijsysteem</td><td>2,688 kWh, 4 MPPT, uitbreidbaar</td><td>Wifi, Bluetooth</td><td>Verbruik vooral 's avonds</td></tr>
<tr><td><strong>EcoFlow STREAM Ultra</strong></td><td>Batterijsysteem</td><td>1,92 kWh, 4 MPPT, IP65</td><td>Wifi, Bluetooth</td><td>Klein balkon, compact formaat</td></tr>
<tr><td><strong>Zendure SolarFlow 800 Pro 2</strong></td><td>Batterijsysteem</td><td>1,92 kWh, uitbreidbaar tot 11,52 kWh</td><td>Wifi, Bluetooth</td><td>Uitbreidbare opslag</td></tr>
</tbody>
</table>

<h2>Hoeveel wekt een balkonzonnepaneel op?</h2>
<p>De opbrengst hangt vooral af van richting, hellingshoek, schaduw en regio. Als richtgetal levert een set van ongeveer 800 tot 900 Wp, op het zuiden en onder zo'n 30°, in Nederland en België vaak <strong>700 tot 850 kWh per jaar</strong>, en meer in Zuid-Europa. Dezelfde set verticaal aan een balustrade levert merkbaar minder op, vaak ongeveer een derde minder. Oost of west blijft interessant en spreidt de opbrengst beter over de dag.</p>
<p>Voor een eigen schatting berekent de gratis PVGIS-tool van de Europese Commissie de verwachte opbrengst op basis van je adres, richting en helling. Zonder batterij hangt het deel dat je echt zelf verbruikt af van wanneer je thuis bent. De besparing reken je eenvoudig uit: zelf verbruikte kWh maal je kWh-prijs.</p>
<p>Het grootste deel van de opbrengst valt tussen april en september; in de winter zorgen korte dagen en een lage zon voor veel minder productie.</p>

<h2>Fouten die je moet vermijden</h2>
<ul>
<li><strong>Aansluiten op een stekkerdoos of verlengsnoer:</strong> risico op oververhitting. Gebruik een vast stopcontact, liefst op een groep die door een installateur is gecontroleerd.</li>
<li><strong>Bezuinigen op de bevestiging:</strong> wind oefent veel kracht uit op een paneel. Gebruik geschikte steunen en controleer de sterkte van de balustrade.</li>
<li><strong>Vergeten te melden:</strong> netbeheerder in Nederland en België, Marktstammdatenregister in Duitsland, Enedis in Frankrijk.</li>
<li><strong>De batterij te groot kiezen:</strong> een batterij die te groot is voor je opbrengst staat een groot deel van het jaar half leeg.</li>
<li><strong>Schaduw negeren:</strong> een boom of buurbalkon dat het paneel rond het middaguur afschermt, kan de opbrengst sterk verlagen.</li>
</ul>

<h2>Installatie en veiligheid</h2>
<p>De panelen worden met waterdichte MC4-connectoren op de omvormer aangesloten. Monteer de omvormer uit de directe zon, achter een paneel of onder de balustrade. Laat voor het inpluggen door een installateur controleren of de groep beveiligd is met een passende automaat en een aardlekschakelaar van 30 mA, en of er niet al zware apparaten op zitten. Raak paneelkabels met open connectoren nooit aan in de zon: ze staan onder spanning zodra er licht op het paneel valt. Wil je nog meer besparen, lees dan onze <a href="/nl/blog/guide-domotique-economie-energie-2026">gids voor domotica en energiebesparing</a>.</p>

<h2>Ons oordeel</h2>
<p>Is er overdag iemand thuis, dan biedt een set van twee panelen met een micro-omvormer van 800 VA zoals de <strong>Hoymiles HMS-800W-2T</strong> de beste balans tussen eenvoud, betrouwbaarheid en besparing. De <strong>Anker SOLIX MI80</strong> is een degelijk alternatief voor wie een consumentvriendelijke app wil. Verbruik je vooral 's avonds, wat na het einde van de saldering zwaarder gaat wegen, dan is de <strong>Anker SOLIX Solarbank 3 E2700 Pro</strong> het meest complete batterijsysteem; de <strong>EcoFlow STREAM Ultra</strong> past beter bij kleine balkons, en de <strong>Zendure SolarFlow 800 Pro 2</strong> bij wie de opslag stap voor stap wil uitbreiden. Meld de installatie in alle gevallen en laat de aansluiting controleren.</p>`,
  },
  faq: [
    {
      question: {
        fr: 'Un panneau solaire de balcon est-il légal en France en 2026 ?',
        en: 'Are balcony solar panels legal in 2026?',
        de: 'Ist ein Balkonkraftwerk 2026 in Deutschland erlaubt?',
        es: '¿Es legal un panel solar de balcón en 2026?',
        it: 'Il pannello solare da balcone è legale nel 2026?',
        nl: 'Is een balkonzonnepaneel in 2026 toegestaan?',
      },
      answer: {
        fr: 'Oui. L\'installation doit être déclarée gratuitement à Enedis (ou à votre gestionnaire de réseau local) via une convention d\'autoconsommation sans injection (CACSI). Un raccordement sur un circuit dédié vérifié par un électricien est recommandé, un panneau visible en façade peut nécessiter une déclaration préalable en mairie, et en copropriété l\'accord de l\'assemblée générale est généralement requis.',
        en: 'In most of Europe, yes, with a simple formality. In Germany you register the system for free in the Marktstammdatenregister (up to 800 VA of inverter output and 2,000 Wp of panels). In France you declare it to Enedis through a free CACSI agreement. In the Netherlands you report it to the grid operator. Great Britain opened the way for compliant plug-in kits in 2026. Always check local rules and get consent from your landlord or building owners.',
        de: 'Ja. Seit dem Solarpaket I sind bis zu 800 VA Wechselrichterleistung und bis zu 2.000 Wp Modulleistung erlaubt. Nötig ist nur die kostenlose Registrierung im Marktstammdatenregister; die separate Meldung beim Netzbetreiber entfällt. Mieter und Wohnungseigentümer können die Installation seit Oktober 2024 verlangen, Vermieter und Eigentümergemeinschaft dürfen nur aus wichtigem Grund ablehnen.',
        es: 'En la mayor parte de Europa, sí, con un trámite sencillo. En España el autoconsumo está regulado por el Real Decreto 244/2019 y la instalación debe comunicarse a la distribuidora y registrarse según tu comunidad autónoma. En Alemania basta con registrarla en el Marktstammdatenregister y en Francia con declararla a Enedis. En comunidad de propietarios, consulta a la junta.',
        it: 'Sì, con una procedura semplice. In Italia i piccoli impianti plug & play si comunicano al distributore tramite il Modello Unico; in Germania basta la registrazione nel Marktstammdatenregister e in Francia la dichiarazione a Enedis. In condominio verifica il regolamento e informa l\'amministratore; in affitto serve il consenso scritto del proprietario.',
        nl: 'Ja. In Nederland meld je de installatie bij je netbeheerder en sluit je aan op een vast stopcontact, nooit op een stekkerdoos. In een appartement heb je vaak toestemming van de VvE nodig, en als huurder schriftelijke toestemming van de verhuurder. In Duitsland volstaat registratie in het Marktstammdatenregister, in Frankrijk een melding bij Enedis.',
      },
    },
    {
      question: {
        fr: 'Quelle puissance maximale pour un kit solaire de balcon ?',
        en: 'What is the maximum power for a balcony solar kit?',
        de: 'Wie viel Leistung darf ein Balkonkraftwerk haben?',
        es: '¿Qué potencia máxima puede tener un kit solar de balcón?',
        it: 'Qual è la potenza massima di un kit solare da balcone?',
        nl: 'Wat is het maximale vermogen van een balkonset?',
      },
      answer: {
        fr: 'La référence européenne est une sortie d\'onduleur de 800 W (ou 800 VA). En Allemagne, la loi fixe 800 VA d\'onduleur et jusqu\'à 2 000 Wc de panneaux. En France, il n\'existe pas de régime aussi détaillé : la plupart des kits vendus sont limités à 800 W, et la puissance doit rester compatible avec le circuit utilisé, à faire vérifier par un électricien.',
        en: 'The European reference is an inverter output of 800 W (or 800 VA). Germany sets 800 VA of inverter output and up to 2,000 Wp of panels by law, and Great Britain uses an 800 VA limit for plug-in kits. Panel peak power is often slightly higher than inverter output, which improves production in the morning, evening and on cloudy days.',
        de: 'In Deutschland gelten bis zu 800 VA Wechselrichter-Ausgangsleistung und bis zu 2.000 Wp Modulleistung. Mehr Modulleistung als Wechselrichterleistung ist erlaubt und sinnvoll: Der Wechselrichter regelt an wenigen Sommerstunden ab, liefert dafür morgens, abends und bei Bewölkung mehr.',
        es: 'La referencia europea es una salida de inversor de 800 W (u 800 VA). Alemania fija por ley 800 VA de inversor y hasta 2.000 Wp de paneles. En otros países, la potencia debe ser compatible con el circuito y con las normas locales: consulta a un instalador autorizado.',
        it: 'Il riferimento europeo è un\'uscita dell\'inverter di 800 W (o 800 VA). La Germania fissa per legge 800 VA di inverter e fino a 2.000 Wp di pannelli. In Italia verifica i limiti previsti per gli impianti plug & play con il distributore e fai controllare il circuito da un elettricista.',
        nl: 'De Europese referentie is een omvormervermogen van 800 W (of 800 VA). Duitsland legt wettelijk 800 VA omvormervermogen en maximaal 2.000 Wp aan panelen vast. In Nederland moet het vermogen passen bij de groep waarop je aansluit; laat dat bij twijfel door een installateur controleren.',
      },
    },
    {
      question: {
        fr: 'Combien d\'électricité produit un panneau solaire de balcon ?',
        en: 'How much electricity does a balcony solar panel produce?',
        de: 'Wie viel Strom erzeugt ein Balkonkraftwerk?',
        es: '¿Cuánta electricidad produce un panel solar de balcón?',
        it: 'Quanta elettricità produce un pannello solare da balcone?',
        nl: 'Hoeveel stroom wekt een balkonzonnepaneel op?',
      },
      answer: {
        fr: 'Un kit d\'environ 800 à 900 Wc orienté plein sud et incliné vers 30° produit couramment 700 à 900 kWh par an dans le nord de la France, et davantage dans le sud. Posé à la verticale sur une rambarde, il produit souvent un tiers de moins. L\'outil gratuit PVGIS de la Commission européenne donne une estimation pour votre adresse.',
        en: 'A kit of about 800 to 900 Wp facing due south at around 30° commonly produces 700 to 900 kWh a year in northern and central Europe, and more in the south. Mounted vertically on a railing, it often produces about a third less. The European Commission\'s free PVGIS tool gives an estimate for your address.',
        de: 'Ein Set mit etwa 800 bis 900 Wp, nach Süden ausgerichtet und um 30° geneigt, erzeugt in Deutschland häufig 700 bis 900 kWh pro Jahr. Senkrecht am Geländer montiert sind es oft rund ein Drittel weniger. Das kostenlose Tool PVGIS der EU-Kommission liefert eine Schätzung für Ihren Standort.',
        es: 'Un kit de unos 800 a 900 Wp orientado al sur e inclinado unos 30° suele producir 700 a 900 kWh al año en el centro de Europa, y bastante más en España. Colgado en vertical en una barandilla produce a menudo un tercio menos. La herramienta gratuita PVGIS de la Comisión Europea da una estimación para tu ubicación.',
        it: 'Un kit di circa 800-900 Wp esposto a sud e inclinato di circa 30° produce spesso 700-900 kWh all\'anno nell\'Europa centrale, e sensibilmente di più in Italia. Montato in verticale sulla ringhiera produce spesso un terzo in meno. Lo strumento gratuito PVGIS della Commissione europea fornisce una stima per il tuo indirizzo.',
        nl: 'Een set van ongeveer 800 tot 900 Wp op het zuiden en onder zo\'n 30° levert in Nederland en België vaak 700 tot 850 kWh per jaar op. Verticaal aan een balustrade is dat vaak ongeveer een derde minder. De gratis PVGIS-tool van de Europese Commissie geeft een schatting voor jouw adres.',
      },
    },
    {
      question: {
        fr: 'Faut-il une batterie avec un panneau solaire de balcon ?',
        en: 'Do you need a battery with a balcony solar panel?',
        de: 'Braucht man einen Speicher für ein Balkonkraftwerk?',
        es: '¿Hace falta una batería con un panel solar de balcón?',
        it: 'Serve una batteria con un pannello solare da balcone?',
        nl: 'Heb je een batterij nodig bij een balkonzonnepaneel?',
      },
      answer: {
        fr: 'Non, ce n\'est pas indispensable. Si quelqu\'un est à la maison en journée, un kit sans batterie est le plus simple et le plus vite rentabilisé. Une batterie comme l\'Anker SOLIX Solarbank 3 E2700 Pro ou l\'EcoFlow STREAM Ultra devient intéressante si votre consommation se concentre le soir, car elle évite d\'envoyer gratuitement le surplus de midi sur le réseau.',
        en: 'No, it is not essential. If someone is home during the day, a kit without a battery is the simplest option and pays back fastest. A battery such as the Anker SOLIX Solarbank 3 E2700 Pro or the EcoFlow STREAM Ultra makes sense if your consumption is concentrated in the evening, because it avoids giving the midday surplus away to the grid.',
        de: 'Nein, zwingend ist er nicht. Ist tagsüber jemand zu Hause, ist ein Set ohne Speicher am einfachsten und amortisiert sich am schnellsten. Ein Speicher wie die Anker SOLIX Solarbank 3 E2700 Pro oder die EcoFlow STREAM Ultra lohnt sich, wenn Sie vor allem abends Strom verbrauchen, weil der Mittagsüberschuss dann nicht verschenkt wird.',
        es: 'No es imprescindible. Si hay alguien en casa de día, un kit sin batería es lo más sencillo y lo que antes se amortiza. Una batería como la Anker SOLIX Solarbank 3 E2700 Pro o el EcoFlow STREAM Ultra compensa si consumes sobre todo por la noche, porque evita regalar a la red el excedente del mediodía.',
        it: 'No, non è indispensabile. Se di giorno c\'è qualcuno in casa, un kit senza batteria è la soluzione più semplice e che si ripaga prima. Una batteria come l\'Anker SOLIX Solarbank 3 E2700 Pro o l\'EcoFlow STREAM Ultra conviene se consumi soprattutto la sera, perché evita di regalare alla rete l\'eccedenza di mezzogiorno.',
        nl: 'Niet per se. Ben je overdag thuis, dan is een set zonder batterij het eenvoudigst. Omdat de saldering op 1 januari 2027 stopt, wordt een batterij zoals de Anker SOLIX Solarbank 3 E2700 Pro of de EcoFlow STREAM Ultra wel interessanter als je vooral \'s avonds stroom verbruikt.',
      },
    },
    {
      question: {
        fr: 'Peut-on brancher un panneau solaire de balcon sur une prise normale ?',
        en: 'Can you plug a balcony solar panel into a normal socket?',
        de: 'Darf man ein Balkonkraftwerk in eine normale Steckdose stecken?',
        es: '¿Se puede enchufar un panel solar de balcón a un enchufe normal?',
        it: 'Si può collegare un pannello solare da balcone a una presa normale?',
        nl: 'Mag je een balkonzonnepaneel in een gewoon stopcontact steken?',
      },
      answer: {
        fr: 'Les kits sont conçus pour se raccorder par une prise, mais en France la norme NF C 15-100 encadre ce branchement : évitez absolument les multiprises et rallonges, et privilégiez une prise sur un circuit dédié, protégé par un disjoncteur adapté et un différentiel 30 mA. Faites vérifier l\'installation par un électricien qualifié avant la mise en service.',
        en: 'Kits are designed to connect via a plug, but rules vary. In Germany, the DIN VDE V 0126-95 standard allows a Schuko plug under certain conditions. In France, the NF C 15-100 wiring standard recommends a dedicated, protected circuit. Everywhere, never use a power strip or extension lead, and have the circuit checked by a qualified electrician.',
        de: 'Ja, unter Bedingungen. Die Produktnorm DIN VDE V 0126-95 erlaubt den Anschluss über einen Schukostecker bis zu einer bestimmten Modulleistung; darüber ist eine spezielle Einspeisesteckvorrichtung vorgesehen. Nutzen Sie nie Mehrfachsteckdosen oder Verlängerungen und lassen Sie im Zweifel den Stromkreis von einer Elektrofachkraft prüfen.',
        es: 'Los kits están pensados para conectarse con un enchufe, pero las normas varían según el país. Nunca uses regletas ni alargadores, y pide a un electricista que compruebe que el circuito tiene un magnetotérmico adecuado y un diferencial de 30 mA, idealmente como circuito dedicado.',
        it: 'I kit sono pensati per il collegamento tramite presa, ma le regole variano. Non usare mai ciabatte o prolunghe e fai verificare da un elettricista che il circuito sia protetto da un magnetotermico adeguato e da un differenziale da 30 mA, idealmente come circuito dedicato.',
        nl: 'De sets zijn gemaakt om via een stekker aan te sluiten, maar gebruik altijd een vast stopcontact, nooit een stekkerdoos of verlengsnoer. Laat bij twijfel door een installateur controleren of de groep een passende automaat en een aardlekschakelaar van 30 mA heeft en niet al zwaar belast is.',
      },
    },
    {
      question: {
        fr: 'Un panneau solaire de balcon fonctionne-t-il en hiver ?',
        en: 'Do balcony solar panels work in winter?',
        de: 'Funktioniert ein Balkonkraftwerk im Winter?',
        es: '¿Funciona un panel solar de balcón en invierno?',
        it: 'Un pannello solare da balcone funziona in inverno?',
        nl: 'Werkt een balkonzonnepaneel in de winter?',
      },
      answer: {
        fr: 'Oui, mais la production baisse nettement à cause des journées courtes et du soleil bas : l\'essentiel de la production annuelle se fait d\'avril à septembre. Par temps couvert, les panneaux produisent encore grâce à la lumière diffuse, mais beaucoup moins qu\'en plein soleil. Une inclinaison plus forte, voire verticale, limite les pertes en hiver.',
        en: 'Yes, but output drops sharply because of short days and a low sun: most annual production happens between April and September. On overcast days, panels still produce from diffuse light, but far less than in full sun. A steeper tilt, even vertical, limits winter losses.',
        de: 'Ja, aber der Ertrag sinkt durch kurze Tage und tiefen Sonnenstand deutlich: Der Großteil der Jahreserzeugung fällt zwischen April und September an. Bei Bewölkung liefern die Module dank diffusem Licht weiter Strom, aber viel weniger als bei Sonne. Eine steilere oder senkrechte Montage verringert die Verluste im Winter.',
        es: 'Sí, pero la producción baja mucho por los días cortos y el sol bajo: la mayor parte se concentra entre abril y septiembre. Con cielo cubierto los paneles siguen produciendo gracias a la luz difusa, aunque mucho menos. Una inclinación mayor, incluso vertical, limita las pérdidas en invierno.',
        it: 'Sì, ma la produzione cala molto per le giornate corte e il sole basso: la maggior parte si concentra tra aprile e settembre. Con cielo coperto i pannelli producono ancora grazie alla luce diffusa, ma molto meno. Un\'inclinazione maggiore, anche verticale, limita le perdite invernali.',
        nl: 'Ja, maar de opbrengst daalt flink door korte dagen en een lage zon: het grootste deel van de jaarproductie valt tussen april en september. Bij bewolking wekken de panelen nog stroom op dankzij diffuus licht, maar veel minder dan in de zon. Een steilere of verticale opstelling beperkt de verliezen in de winter.',
      },
    },
  ],
}
