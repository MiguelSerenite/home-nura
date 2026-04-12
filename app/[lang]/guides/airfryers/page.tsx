import { getDictionary } from '../../dictionaries'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import ProductCard from '@/components/ProductCard'
import ComparisonTable from '@/components/ComparisonTable'
import CookieBanner from '@/components/CookieBanner'
import { getStaticProducts } from '@/lib/products'
import Link from 'next/link'
import type { Metadata } from 'next'

const guideContent: Record<string, {
  intro_title: string
  intro_text: string
  how_to_choose_title: string
  how_to_choose_intro: string
  capacity_title: string
  capacity_text: string
  power_title: string
  power_text: string
  features_title: string
  features_text: string
  materials_title: string
  materials_text: string
  noise_title: string
  noise_text: string
  energy_title: string
  energy_text: string
  mistakes_title: string
  mistakes_intro: string
  mistakes: { title: string; desc: string }[]
  maintenance_title: string
  maintenance_text: string
  recipes_title: string
  recipes_intro: string
  recipes: { title: string; desc: string }[]
  verdict_title: string
  verdict_text: string
}> = {
  fr: {
    intro_title: 'Comprendre la Friteuse sans Huile',
    intro_text: 'La friteuse à air chaud, aussi appelée friteuse sans huile ou airfryer, a révolutionné la cuisine domestique ces dernières années. Cette technologie utilise la circulation rapide d\'air chaud à très haute température (jusqu\'à 200°C) pour cuire les aliments de manière uniforme, créant une texture croustillante sans trempage dans l\'huile. En 2026, les airfryers sont devenus essentiels dans les cuisines européennes, offrant une alternative saine, rapide et pratique aux méthodes de cuisson traditionnelles. Contrairement aux idées reçues, une airfryer ne fonctionne pas par radiation ou micro-ondes : c\'est un petit four de convection haute performance. L\'air circule autour des aliments à une vitesse extrêmement rapide, créant une réaction de Maillard qui produit cette croûte dorée et croustillante tant appréciée. Pour les familles françaises, cela signifie des frites maison croustillantes en moins de 15 minutes, un poulet rôti doré en 25 minutes, et des légumes grillés parfaitement caramélisés sans l\'odeur persistante de friture traditionnelle qui envahit la cuisine et les vêtements pendant des heures.',
    how_to_choose_title: 'Comment Choisir votre Friteuse à Air Chaud',
    how_to_choose_intro: 'Le marché des airfryers offre aujourd\'hui des centaines d\'options à des prix variant de 40€ à plus de 500€. Choisir le bon modèle dépend entièrement de votre situation personnelle : taille du ménage, budget, espace disponible et types de recettes que vous souhaitez préparer. Voici un guide complet pour naviguer cette décision importante.',
    capacity_title: 'La Capacité : Le Facteur Déterminant',
    capacity_text: 'La capacité est sans doute le critère le plus important lors de l\'achat d\'une airfryer, car elle détermine directement ce que vous pourrez préparer. Pour une personne seule ou un couple, une airfryer de 2 à 3 litres (environ 1.2 à 1.8 kg de frites) est largement suffisante. Ces modèles compacts, souvent appelés airfryers individuelles, occupent peu d\'espace sur le plan de travail et consomment moins d\'électricité. Tefal et Moulinex proposent d\'excellents modèles dans cette catégorie, parfaits pour les petits espaces parisiens ou lyonnais. Pour une famille de trois à quatre personnes, optez pour une capacité de 4 à 5 litres (2 à 3 kg). Ces airfryers offrent un excellent rapport entre commodité et consommation énergétique. Vous pourrez cuire un poulet entier, préparer des frites pour toute la famille, et même faire plusieurs portions simultanément. Pour une famille nombreuse de cinq personnes ou plus, investissez dans une airfryer de 6 à 8 litres ou optez pour un modèle double chambre. Les grands modèles Philips et Cosori offrent cette capacité tout en gardant des dimensions raisonnables. Les airfryers de plus de 9 litres (catégorie "maxi") conviennent surtout aux restaurants ou aux ménages préparant régulièrement des repas pour beaucoup de monde. Il est crucial de noter que la capacité réelle utilisable est généralement 80-90% de la capacité totale annoncée, car vous devez laisser de l\'espace pour la circulation d\'air.',
    power_title: 'La Puissance et la Technologie de Chauffage',
    power_text: 'La puissance mesurée en watts (W) influence directement la vitesse de cuisson et la capacité à saisir correctement les aliments. La plupart des airfryers modernes consomment entre 800W et 2000W. Un modèle de 1200-1500W constitue un bon compromis pour une utilisation domestique standard. Les modèles haut de gamme, notamment les airfryers professionnels ou semi-professionnels, peuvent atteindre 2200W ou plus, permettant une cuisson significativement plus rapide et une meilleure uniformité. Recherchez des airfryers dotées de la technologie Rapid Air ou d\'équivalents comme la technologie de convection doubles zones. Tefal et Moulinex utilisent leur propre système de circulation d\'air optimisée, tandis que Philips promet sa technologie QuickCook pour une chauffage ultra-rapide. Certains modèles haut de gamme proposent des éléments chauffants doubles (haut et bas) ou même quatre zones de chauffage, assurant une cuisson plus uniforme, surtout important pour les aliments de taille variable. Pour les familles françaises cuisinant régulièrement, une puissance minimale de 1400W garantit des temps de cuisson raisonnables même avec une charge complète.',
    features_title: 'Les Fonctionnalités et Connectivité',
    features_text: 'Les airfryers modernes offrent bien au-delà de simples commandes manuelles. Les meilleurs modèles intègrent 10 à 50 programmes pré-programmés pour différents aliments : frites, ailes de poulet, légumes grillés, beignets, déshydratation de fruits, et bien d\'autres. Ces programmes éliminent les erreurs de cuisson en définissant automatiquement la température et le temps optimaux. La connectivité WiFi et les applications mobiles deviennent de plus en plus courantes en 2026. Avec une app dédiée, vous pouvez démarrer la cuisson à distance, surveiller la progression et recevoir des notifications quand le repas est prêt. C\'est particulièrement utile pour les ménages occupés où les membres rentrent à différents moments. Cependant, la connectivité augmente le prix de 50€ à 150€ en moyenne. Pour les utilisateurs pragmatiques, un simple panneau tactile avec écran LED et un minuteur programmable suffisent amplement. Les modèles avec fonction de maintien au chaud sont excellents pour servir à différentes heures. Vérifiez aussi la présence de programmes de préchauffe rapide et d\'une fonction de sauvegarde de programmes personnalisés pour vos recettes favorites.',
    materials_title: 'Les Matériaux et Qualité de Fabrication',
    materials_text: 'Un airfryer est un investissement qui devrait durer 5 à 8 ans avec un entretien approprié. Les matériaux utilisés sont primordiaux. Le panier de cuisson interne doit être revêtu d\'un enduit antiadhésif sûr et durable, idéalement sans PTFE ou BPA, ou au minimum avec les certifications de sécurité européennes (CE). Les meilleures marques utilisent des revêtements céramiques ou des enductions à base d\'eau qui durent plus longtemps sans se décoller. Le corps externe doit être robuste : acier inoxydable ou plastique résistant à haute température. L\'acier inoxydable est plus durable mais plus lourd et généralement plus cher. Le plastique de qualité alimentaire résistant à la chaleur (ABS) est acceptable s\'il est bien épais et provient de fabricants réputés. Les poignées doivent être ergonomiques et isolées thermiquement pour éviter les brûlures. Vérifiez que le panier et les accessoires sont compatibles lave-vaisselle : c\'est un gain de temps énorme. Les marques allemandes comme Siemens et Bosch offrent des garanties de 3 à 5 ans typiquement, tandis que les marques françaises Tefal et Moulinex proposent souvent 2 à 3 ans, reflétant différentes stratégies de durabilité.',
    noise_title: 'Le Niveau Sonore',
    noise_text: 'Un facteur souvent oublié jusqu\'à l\'achat : le bruit. Les airfryers fonctionnent avec un ventilateur haute vitesse qui produit inévitablement du bruit. La plupart des modèles génèrent entre 65 et 80 décibels (dB) pendant la cuisson. Pour référence, une conversation normale est autour de 60dB, une circulation routière à 70dB, et un aspirateur à 75dB. Un airfryer à 65dB est relativement silencieux pour ce type d\'appareil, tandis que 80dB commence à être gênant, surtout le matin ou tard le soir. Certains modèles haut de gamme, notamment les versions "EcoMode" ou "silence" de Philips et Moulinex, réduisent le bruit à 62-65dB en sacrifiant légèrement la vitesse de cuisson. Si vous vivez en appartement ou si le bruit vous gêne, cela vaut la peine de vérifier les niveaux sonores spécifiques avant d\'acheter. Les ménages avec enfants petits ou animaux sensibles au bruit devraient particulièrement prendre en compte ce facteur.',
    energy_title: 'La Consommation Énergétique et Économies',
    energy_text: 'En 2026, avec les prix de l\'électricité en France variant entre 0.18€ et 0.25€ par kWh selon les régions et contrats, la consommation énergétique d\'une airfryer devient un calcul important. Une airfryer de 1500W utilisée 30 minutes consomme 0.75 kWh, coûtant environ 0.15€ en électricité. Comparé à un four traditionnel (2500-3500W) utilisé 45 minutes pour le même repas, coûtant 0.20-0.26€, l\'airfryer est déjà plus économe. Sur une année, si vous utilisez votre airfryer 5 fois par semaine (estimation moyenne pour une famille), cela représente environ 195 utilisations annuelles, soit 146.25 kWh par an, coûtant environ 26€ en électricité. Un four traditionnel utilisé même 3 fois par semaine coûterait 50-60€ annuellement en électricité pour les mêmes résultats. L\'économie réelle pour une famille française moyenne est de 25-30€ par an, plus les économies sur l\'huile de cuisson (suppression ou réduction drastique) et le temps économisé. Sur 5 ans de propriété, une airfryer se paie presque entièrement sur ces économies d\'énergie.',
    mistakes_title: 'Les Erreurs Courantes à Éviter',
    mistakes_intro: 'Nombreux sont ceux qui achètent une airfryer avec des attentes irréalistes ou qui la sous-utilisent faute de connaître les bonnes pratiques. Voici les erreurs les plus couantes commises par les nouveaux utilisateurs et comment les éviter.',
    mistakes: [
      {
        title: 'Remplir le panier à ras bord',
        desc: 'L\'erreur numéro un : surcharger le panier. La circulation d\'air doit pouvoir circuler librement autour de chaque aliment. Remplir le panier au maximum réduit la qualité de cuisson. Les aliments du milieu et du bas resteront mous tandis que ceux du haut brûleront. Remplissez à environ 70-80% maximum, ou préparez deux fournées si nécessaire. Pour les frites, mélangez-les à mi-cuisson pour une cuisson plus uniforme.'
      },
      {
        title: 'Oublier de préchauffer',
        desc: 'Contrairement aux fours traditionnels, le préchauffage d\'une airfryer est rapide : 3-5 minutes maximum. Cependant, de nombreux utilisateurs sautent cette étape, entraînant des temps de cuisson plus longs et une texture moins optimale. Le préchauffage crée un environnement thermique stable où la réaction de Maillard peut se produire immédiatement.'
      },
      {
        title: 'Utiliser trop peu ou trop d\'huile',
        desc: 'C\'est un mythe : l\'airfryer n\'est pas complètement sans huile. L\'ajout d\'une petite quantité d\'huile (1-2 cuillères à café) améliore considérablement la cuisson et rend les aliments plus croustillants. Pas assez d\'huile : texture sèche et pâle. Trop d\'huile : excès de graisse qui s\'accumule au fond. Le spray d\'huile en aérosol est idéal pour une distribution uniforme.'
      },
      {
        title: 'Ignorer les instructions du fabricant',
        desc: 'Chaque airfryer a des caractéristiques légèrement différentes. Les temps de cuisson, les températures optimales, et le placement du panier varient. Consultez le manuel, suivez les programmes suggérés initialement, puis adaptez selon votre goût personnel. Tefal et Moulinex fournissent des guides détaillés en français avec des tableaux de cuisson.'
      },
      {
        title: 'Ne pas nettoyer régulièrement',
        desc: 'Les résidus d\'huile et de nourriture s\'accumulent rapidement. Un airfryer non nettoyé produit de la fumée, développe des odeurs, et ses performances diminuent. Nettoyez après chaque utilisation : le panier et le bac de récupération vont au lave-vaisselle dans la plupart des modèles. Le corps externe se nettoie avec un chiffon humide.'
      },
      {
        title: 'Cuire des aliments très mouillés sans préparation',
        desc: 'L\'eau et l\'huile ne se mélangent pas. Si vous décongelez du poisson ou du poulet, séchez-les bien avant de cuire. L\'excès d\'humidité crée de la vapeur plutôt que la chaleur sèche nécessaire pour la cuisson à l\'air. Les aliments marinés doivent égoutter longtemps avant cuisson.'
      }
    ],
    maintenance_title: 'Entretien et Nettoyage pour une Durée de Vie Maximale',
    maintenance_text: 'L\'entretien régulier d\'une airfryer détermine sa longévité. Après chaque utilisation, laissez refroidir 10-15 minutes, puis retirez le panier et le bac à résidus. Rincez-les à l\'eau tiède savonneuse ou placez-les au lave-vaisselle. Le revêtement antiadhésif peut s\'user avec le temps, surtout s\'il est frotté vigoureusement avec des produits abrasifs. Utilisez une éponge douce et des produits doux. L\'intérieur du corps principal ne doit jamais être immergé. Essuyez l\'intérieur avec un chiffon humide et un peu de vinaigre blanc si des résidus s\'accumulent. Tous les 3-4 mois, nettoyez l\'élément chauffant supérieur avec une brosse douce pour éliminer la poussière. Vérifiez que les grilles de ventilation ne sont pas obstruées. Stockez votre airfryer dans un endroit sec et protégé de la poussière. Les marques Tefal et Moulinex offrent des kits de nettoyage spécialisés et des paniers de remplacement abordables quand l\'ancien s\'use. Une airfryer bien entretenue dure facilement 7-10 ans.',
    recipes_title: 'Recettes Populaires pour Débuter',
    recipes_intro: 'Voici cinq recettes incontournables pour exploiter pleinement votre airfryer, parfaites pour les familles françaises qui découvrent cet appareil.',
    recipes: [
      {
        title: 'Frites Maison Croustillantes',
        desc: 'Le classique incontournable. Coupez des pommes de terre de taille médium en bâtonnets de 6-7mm. Immergez 20 minutes dans l\'eau froide pour enlever l\'amidon, puis séchez bien. Mélangez avec 1 cuillère à café d\'huile d\'arachide, sel et paprika. Cuire à 200°C pendant 18-22 minutes en fonction de la taille. Mélangez à mi-cuisson. Résultat : frites dorées croustillantes dehors, moelleuses dedans, sans odeur de friture persistante.'
      },
      {
        title: 'Poulet Rôti Doré',
        desc: 'Essentiellement le dimanche français réinventé. Un poulet entier (1.5-2kg) cuit à 180°C pendant 45-50 minutes. Badigeonnez préalablement de beurre mou mélangé à herbes de Provence (thym, romarin, persil). Intérieur croustillant à l\'extérieur, moelleux à l\'intérieur, sans sécheresse typique du four. Préparez des légumes de racine (carottes, navets) dans un plateau séparé.'
      },
      {
        title: 'Légumes Grillés',
        desc: 'Courgettes, aubergines, poivrons rouges et jaunes : coupez en cubes réguliers de 2cm. Arrosez légèrement d\'huile d\'olive, sel, poivre. Cuire à 190°C pendant 15-18 minutes. Résultat spectaculaire : légumes tendres à l\'intérieur, bords légèrement caramélisés, intensité de saveur amplifiée par la chaleur sèche intense. Parfait comme accompagnement pour tout plat principal.'
      },
      {
        title: 'Croquettes de Fromage et Jambon',
        desc: 'Préparation : 200g béchamel, 100g fromage râpé (Emmental), 50g jambon haché, muscade. Formez des cylindres, trempez dans œuf battu, puis panure (chapelure fine). Refroidissez 30 minutes. Cuire à 190°C pendant 12-14 minutes. Résultat doré croustillant à l\'extérieur, riche et fondant à l\'intérieur. Dégustez avec une sauce tomate ou mayonnaise.'
      },
      {
        title: 'Chips de Légumes Maison',
        desc: 'Tranchez finement (2-3mm) des pommes de terre, betteraves, carottes avec une mandoline. Immergez 10 minutes, séchez bien. Arrosez d\'un mélange d\'huile et de sel. Cuire à 180°C pendant 10-12 minutes en deux fournées. Résultat : chips croustillantes comme du papier, saines et sans huile saturée. Stockez dans un bocal pour grignoter.'
      }
    ],
    verdict_title: 'Notre Verdict Final',
    verdict_text: 'Une airfryer est un investissement intelligent pour toute famille française moderne qui valorise la santé, la commodité et l\'efficacité énergétique. Avec une capacité adaptée à votre taille de ménage, une puissance suffisante (1400W minimum), et des fonctionnalités essentielles plutôt que superflues, une airfryer transforme complètement votre approche de la cuisine quotidienne. Les frites maison rivalisent avec les vraies frites frittes mais en 2 minutes plus rapides et sans l\'odeur envahissante. Les légumes deviennent délicieux quand cuits à l\'air chaud. Les temps de préparation diminuent dramatiquement. Sur cinq ans d\'utilisation, vous économiserez plus de 100€ en électricité et huile de cuisson. Certes, une airfryer ne remplace pas complètement un four traditionnel pour certaines préparations (grandes quantités, pains, pâtisseries complexes), mais elle devient rapidement l\'appareil de cuisson principal pour 70-80% des repas quotidiens. Pour les ménages parisiens avec espace limité, les familles provincialisées soucieuses d\'énergie, et quiconque apprécie la bonne cuisine simple et rapide, une airfryer est un achat que vous ne regretterez pas.'
  },
  en: {
    intro_title: 'Understanding the Air Fryer Revolution',
    intro_text: 'The air fryer has transformed home cooking across Europe and beyond since becoming mainstream. This innovative kitchen appliance uses rapid circulation of superheated air (up to 200°C) to cook food evenly, creating a crispy texture without deep frying in oil. By 2026, air fryers have become essential in millions of European households, offering a healthier, faster and more convenient alternative to traditional cooking methods. Unlike common misconceptions, an air fryer doesn\'t work through radiation or microwaves: it\'s essentially a high-performance compact convection oven. Air circulates around your food at extremely high velocity, creating the Maillard reaction that produces that golden, crispy exterior everyone loves. For British families, this means homemade chips rivaling traditional fish and chips in less than 15 minutes, perfectly roasted chicken in 25 minutes, and beautifully caramelized roasted vegetables without the lingering fried smell that penetrates clothes and curtains for hours. The technology has matured dramatically, with models now offering WiFi connectivity, preset programmes for hundreds of foods, and energy consumption 30-40% lower than traditional ovens.',
    how_to_choose_title: 'How to Choose the Right Air Fryer',
    how_to_choose_intro: 'The air fryer market in 2026 offers hundreds of options ranging from £40 budget models to premium devices exceeding £500. Selecting the right one depends entirely on your circumstances: household size, budget, available counter space, and types of meals you prepare regularly. This comprehensive guide will help you navigate the decision with confidence.',
    capacity_title: 'Capacity: The Primary Decision Factor',
    capacity_text: 'Capacity is arguably the most important criterion when purchasing an air fryer, as it directly determines what you can prepare. For a single person or couple, an air fryer with 2-3 litres capacity (approximately 1.2-1.8 kg of chips) is entirely sufficient. These compact models, often called single-person air fryers, occupy minimal counter space and consume less electricity. Brands like Philips and Cosori offer excellent options in this category, ideal for London flats or studio apartments. For a family of three to four people, choose a capacity of 4-5 litres (2-3 kg). These air fryers offer excellent balance between convenience and energy consumption. You can cook a whole chicken, prepare chips for the entire family, and even cook multiple portions simultaneously. For larger families of five or more people, invest in a 6-8 litre model or consider a dual-chamber design. Premium brands like Philips Airfryer XXL offer this capacity while maintaining reasonable dimensions. Air fryers exceeding 9 litres (mega category) suit restaurants or households regularly cooking for large gatherings. Importantly, the usable capacity is typically 80-90% of the advertised total capacity, as you must leave space for proper air circulation around food.',
    power_title: 'Power and Heating Technology',
    power_text: 'Power consumption, measured in watts (W), directly influences cooking speed and the quality of food searing. Most modern air fryers consume between 800W and 2000W. A 1200-1500W model represents excellent value for standard domestic use. Premium models, particularly professional-grade air fryers, can reach 2200W or higher, enabling significantly faster cooking and superior heat distribution. Look for air fryers featuring Rapid Air technology or equivalent systems like dual-zone convection heating. Philips pioneered QuickCook technology promising ultra-rapid heating, whilst other manufacturers offer their proprietary systems. Some top-tier models feature dual heating elements (upper and lower) or even quad-zone heating, ensuring uniformly cooked food, particularly important when cooking items of varying sizes. For British households cooking frequently, a minimum power rating of 1400W guarantees reasonable cooking times even with a full basket. Understanding wattage helps you predict cooking times and energy bills accurately.',
    features_title: 'Features and Smart Connectivity',
    features_text: 'Modern air fryers offer far more than simple manual controls. The best models include 10-50 pre-programmed recipes for different foods: chips, chicken wings, roasted vegetables, fish, meat desiccation, and much more. These programmes eliminate cooking guesswork by automatically setting optimal temperature and duration. WiFi connectivity and dedicated mobile applications are increasingly common in 2026. With a smartphone app, you can start cooking remotely, monitor progress in real-time, and receive notifications when meals are ready. This proves invaluable for busy households where members return at different times. However, smart connectivity typically adds £50-150 to the price. For practical users, a simple touchscreen with LED display and programmable timer suffices perfectly. Models featuring keep-warm functions are excellent for serving at staggered times. Check for rapid preheat programmes and the ability to save custom cooking settings for your favourite recipes. The best apps also offer recipe suggestions and cooking guidance.',
    materials_title: 'Materials and Build Quality',
    materials_text: 'An air fryer is an investment expected to last 5-8 years with proper care. Material selection is crucial. The internal cooking basket must feature a safe, durable non-stick coating, ideally PFOA-free and BPA-free, or minimally meeting European safety certifications (CE). Premium brands use ceramic or water-based coatings that outlast traditional PTFE and resist peeling. The external body should be robust: either stainless steel or heat-resistant food-grade plastic. Stainless steel offers superior durability but adds weight and cost. High-quality ABS plastic resistant to high temperatures is acceptable if sufficiently thick and from reputable manufacturers. Handles must be ergonomic and thermally insulated to prevent burns. Verify that baskets and accessories are dishwasher-compatible: this saves considerable time. German brands like Siemens and Bosch typically offer 3-5 year warranties reflecting durability confidence, whilst other European manufacturers often provide 2-3 years. Read independent reviews from household appliance testing bodies to assess real-world longevity.',
    noise_title: 'Noise Level Considerations',
    noise_text: 'Noise is often overlooked until purchase day: air fryers operate via high-speed fans producing inevitable sound. Most models generate 65-80 decibels (dB) during cooking. For reference, normal conversation measures approximately 60dB, traffic noise 70dB, and a household hoover 75dB. An air fryer at 65dB is relatively quiet for this appliance type, whilst 80dB becomes genuinely annoying, especially early morning or late evening. Some premium models, particularly "EcoMode" or "silent" versions from Philips and other manufacturers, reduce noise to 62-65dB by slightly sacrificing cooking speed. If you live in a flat or are noise-sensitive, checking specific decibel ratings before purchase is worthwhile. Households with young children or noise-sensitive pets should particularly consider this factor. Reading customer reviews specifically mentioning noise levels provides real-world perspective unavailable from specification sheets.',
    energy_title: 'Energy Consumption and Cost Savings',
    energy_text: 'In 2026, with UK electricity prices ranging from £0.24-0.30 per kWh depending on region and supplier contracts, an air fryer\'s energy consumption becomes a relevant financial calculation. A 1500W air fryer used for 30 minutes consumes 0.75 kWh, costing approximately £0.20 in electricity. Compared to a traditional oven (2500-3500W) used for 45 minutes delivering equivalent results, costing £0.23-0.32, the air fryer is notably more economical. Over one year, using your air fryer five times weekly (typical family estimate), that represents 195 annual uses totalling 146.25 kWh annually, costing roughly £35-40 in electricity. A traditional oven used merely three times weekly costs £50-75 annually for comparable results. Real household savings average £25-35 yearly, plus savings on cooking oil (elimination or significant reduction) and preparation time. Over five years of ownership, an air fryer effectively pays for itself through energy savings alone.',
    mistakes_title: 'Common Mistakes to Avoid',
    mistakes_intro: 'Many air fryer owners enter with unrealistic expectations or underutilise their devices through lack of knowledge. Here are the most common mistakes made by new users and how to avoid them.',
    mistakes: [
      {
        title: 'Overfilling the basket',
        desc: 'Mistake number one: overcrowding. Air must circulate freely around every food piece. Filling to capacity dramatically reduces cooking quality. Middle and lower items stay soggy whilst upper items burn. Fill to approximately 70-80% maximum or prepare two batches. For chips, shake the basket halfway through cooking for more uniform results.'
      },
      {
        title: 'Skipping the preheat',
        desc: 'Unlike traditional ovens, air fryer preheating is rapid: 3-5 minutes maximum. However, many users skip this step, resulting in longer cooking times and suboptimal texture. Preheating creates a stable thermal environment where the Maillard reaction initiates immediately upon food contact.'
      },
      {
        title: 'Using incorrect oil quantities',
        desc: 'It\'s a myth that air fryers need no oil. Adding a small amount (1-2 teaspoons) significantly improves cooking results and renders food crispier. Too little oil produces dry, pale results. Too much creates grease accumulation at the basket bottom. Oil spray aerosols enable even distribution.'
      },
      {
        title: 'Ignoring manufacturer instructions',
        desc: 'Every air fryer has unique characteristics. Cooking times, optimal temperatures, and basket positioning vary between models. Consult the manual, follow suggested programmes initially, then adapt according to personal preferences. Premium manufacturers provide detailed guidance booklets with cooking charts.'
      },
      {
        title: 'Neglecting regular cleaning',
        desc: 'Oil and food residue accumulate rapidly. Uncleaned air fryers produce smoke, develop odours, and performance diminishes. Clean after each use: most baskets and trays are dishwasher-safe. The external body cleans with a damp cloth. Deep cleaning monthly with vinegar solution eliminates stubborn buildup.'
      },
      {
        title: 'Cooking wet foods without preparation',
        desc: 'Water and oil don\'t mix. If defrosting fish or poultry, dry thoroughly before cooking. Excess moisture creates steam rather than the dry heat necessary for optimal cooking. Marinated foods must drain thoroughly before preparation.'
      }
    ],
    maintenance_title: 'Maintenance and Cleaning for Maximum Lifespan',
    maintenance_text: 'Regular maintenance determines an air fryer\'s longevity. After each use, allow 10-15 minutes cooling, then remove basket and collection tray. Rinse with warm soapy water or place in the dishwasher. The non-stick coating can deteriorate over time, especially with vigorous abrasive scrubbing. Use soft sponges and gentle cleaning products. Never immerse the main body in water. Wipe interior surfaces with a damp cloth and white vinegar solution if residue accumulates. Every 3-4 months, clean the upper heating element gently with a soft brush to remove dust. Ensure ventilation grilles remain unobstructed. Store in a dry, dust-protected location. Many manufacturers offer affordable replacement basket kits when original coatings eventually wear. A well-maintained air fryer easily lasts 7-10 years, providing excellent value across its lifespan.',
    recipes_title: 'Essential Recipes for Getting Started',
    recipes_intro: 'These five essential recipes showcase your air fryer\'s versatility and are perfect for British households discovering this revolutionary appliance.',
    recipes: [
      {
        title: 'Homemade Crispy Chips',
        desc: 'The classic essential. Cut medium potatoes into batons approximately 6-7mm thick. Soak 20 minutes in cold water to remove starch, then dry thoroughly. Toss with 1 teaspoon groundnut oil, salt and paprika. Cook at 200°C for 18-22 minutes depending on thickness. Shake basket halfway through. Result: golden, crispy-outside chips rivalling traditional chip shops, without the lingering fried smell throughout your kitchen.'
      },
      {
        title: 'Golden Roasted Chicken',
        desc: 'Sunday roast reimagined. A whole chicken (1.5-2kg) cooks at 180°C for 45-50 minutes. Pre-coat with softened butter mixed with fresh herbs (thyme, rosemary, parsley). Result: crispy golden exterior, succulent juicy interior without the dryness typical of conventional oven roasting. Prepare root vegetables (carrots, parsnips) in a separate tray.'
      },
      {
        title: 'Roasted Mixed Vegetables',
        desc: 'Courgettes, aubergines, red and yellow peppers: cut into uniform 2cm cubes. Drizzle lightly with olive oil, season with salt and pepper. Cook at 190°C for 15-18 minutes. Result: tender interiors with slightly caramelized edges, flavour intensified by the intense dry heat. Excellent accompaniment for any main course.'
      },
      {
        title: 'Crispy Cheese and Ham Croquettes',
        desc: 'Preparation: 200g béchamel sauce, 100g grated mature cheddar, 50g diced ham, nutmeg seasoning. Form cylindrical shapes, dip in beaten egg, then fine breadcrumb coating. Refrigerate 30 minutes. Cook at 190°C for 12-14 minutes. Result: golden crispy exterior, rich melting interior. Serve with tomato sauce or mayonnaise.'
      },
      {
        title: 'Homemade Vegetable Crisps',
        desc: 'Slice thinly (2-3mm) potatoes, beetroot, carrots using a mandoline. Soak 10 minutes, dry completely. Toss with oil and salt mixture. Cook at 180°C for 10-12 minutes in two batches. Result: paper-thin crispy crisps, healthy and without saturated cooking oils. Store in airtight jars for convenient snacking.'
      }
    ],
    verdict_title: 'Our Final Verdict',
    verdict_text: 'An air fryer represents intelligent investment for any British household valuing health, convenience, and energy efficiency. With capacity suited to your household size, sufficient power (minimum 1400W), and essential features rather than unnecessary extras, an air fryer fundamentally transforms your daily cooking approach. Homemade chips rival traditional takeaway versions but cook two minutes faster and without lingering odours. Vegetables become genuinely delicious when air-cooked. Preparation times decrease dramatically. Over five years of ownership, you\'ll save over £150 in electricity and cooking oil. Certainly, an air fryer doesn\'t completely replace a traditional oven for certain preparations (large-scale cooking, breads, complex pastries), but it rapidly becomes your primary cooking appliance for 70-80% of daily meals. For London flat dwellers with limited space, energy-conscious families, and anyone appreciating simple, fast, genuinely good food, an air fryer is a purchase you won\'t regret.'
  },
  de: {
    intro_title: 'Die Heißluftfritteuse verstehen',
    intro_text: 'Die Heißluftfritteuse hat seit ihrer Marktreife die Heimatküche in ganz Europa revolutioniert. Dieses innovative Küchengerät nutzt die schnelle Zirkulation extrem heißer Luft (bis 200°C) um Lebensmittel gleichmäßig zu garen und dabei eine knusprige Textur ohne tiefes Ölbad zu erzeugen. Im Jahr 2026 sind Heißluftfritteusen in Millionen europäischer Haushalte unverzichtbar geworden und bieten eine gesündere, schnellere und praktischere Alternative zu traditionellen Kochmethoden. Im Gegensatz zu verbreiteten Missverständnissen funktioniert eine Heißluftfritteuse nicht durch Strahlung oder Mikrowellen: sie ist im Grunde ein hochleistungs-Kompakt-Konvektionsofen. Luft zirkuliert mit extremer Geschwindigkeit um Ihr Essen herum und erzeugt die Maillard-Reaktion, die das goldene, knusprige Äußere erzeugt, das alle lieben. Für deutsche Familien bedeutet dies hausgemachte Pommes Frites, die traditionellen Frittierten in weniger als 15 Minuten konkurrieren, perfekt gebratene Hähnchen in 25 Minuten, und wunderbar karamellisiertes Schnitzel und Gemüse ohne den anhaltenden Frittiergeruch, der für Stunden in Kleidung eindringt. Die Technologie hat sich dramatisch verbessert, mit Modellen, die jetzt WiFi-Konnektivität, Voreinstellungen für Hunderte von Lebensmitteln und 30-40% niedrigere Energieverbrauch als traditionelle Öfen bieten.',
    how_to_choose_title: 'So wählen Sie die richtige Heißluftfritteuse',
    how_to_choose_intro: 'Der Markt für Heißluftfritteusen im Jahr 2026 bietet Hunderte von Optionen von Budget-Modellen ab 40€ bis zu Premium-Geräten über 500€. Die Auswahl der richtigen hängt ganz von Ihren Umständen ab: Haushaltsgröße, Budget, verfügbarer Platz und arten von Mahlzeiten, die Sie regelmäßig zubereiten. Dieser umfassende Leitfaden hilft Ihnen, die Entscheidung mit Zuversicht zu treffen.',
    capacity_title: 'Fassungsvermögen: Der primäre Entscheidungsfaktor',
    capacity_text: 'Das Fassungsvermögen ist möglicherweise das wichtigste Kriterium beim Kauf einer Heißluftfritteuse, da es direkt bestimmt, was Sie zubereiten können. Für eine einzelne Person oder ein Ehepaar ist eine Heißluftfritteuse mit 2-3 Liter Fassungsvermögen (ungefähr 1,2-1,8 kg Pommes) völlig ausreichend. Diese kompakten Modelle benötigen minimalen Platz auf der Arbeitsfläche und verbrauchen weniger Strom. Marken wie Philips und namhafte deutsche Hersteller bieten hervorragende Optionen in dieser Kategorie, ideal für Berliner Wohnungen. Für eine vierköpfige Familie wählen Sie ein Fassungsvermögen von 4-5 Litern (2-3 kg). Diese Heißluftfritteusen bieten ein ausgezeichnetes Gleichgewicht zwischen Komfort und Energieverbrauch. Sie können ein ganzes Hähnchen garen, Pommes für die ganze Familie zubereiten und sogar mehrere Portionen gleichzeitig garen. Für größere Familien mit fünf oder mehr Personen investieren Sie in ein 6-8-Liter-Modell oder erwägen Sie ein Dual-Kammer-Design. Premium-Marken wie Siemens und Bosch bieten dieses Fassungsvermögen bei angemessenen Abmessungen. Heißluftfritteusen über 9 Liter (Mega-Kategorie) eignen sich für Restaurants oder Haushalte, die regelmäßig für große Gruppen kochen. Wichtig: Das nutzbare Fassungsvermögen beträgt typischerweise 80-90% des beworbenen Gesamtfassungsvermögens, da Sie Platz für die ordnungsgemäße Luftzirkulation lassen müssen.',
    power_title: 'Leistung und Heizungstechnologie',
    power_text: 'Die Stromaufnahme, gemessen in Watt (W), beeinflusst direkt die Kochgeschwindigkeit und die Qualität des Garsauers von Lebensmitteln. Die meisten modernen Heißluftfritteusen verbrauchen zwischen 800W und 2000W. Ein 1200-1500W Modell ist ein ausgezeichneter Wert für die standard-Haushaltsnutzung. Premium-Modelle, insbesondere professionelle Heißluftfritteusen, können 2200W oder höher erreichen und ermöglichen deutlich schnellere Garung und bessere Wärmeverteiling. Suchen Sie nach Heißluftfritteusen mit Rapid Air-Technologie oder gleichwertigen Systemen wie Dual-Zone-Konvektion. Deutsche Qualitätshersteller bieten proprietäre Systeme mit optimierten Luftzirkulationsstandards. Einige Top-Tier-Modelle verfügen über Doppel-Heizelementen (oben und unten) oder sogar Quad-Zone-Heizung, die gleichmäßig gegarte Lebensmittel gewährleisten. Für deutsche Haushalte, die regelmäßig kochen, garantiert eine Mindestleistung von 1400W angemessene Garzeiten auch mit vollständig gefülltem Korb.',
    features_title: 'Funktionen und intelligente Konnektivität',
    features_text: 'Moderne Heißluftfritteusen bieten weit mehr als einfache manuelle Steuerungen. Die besten Modelle umfassen 10-50 vorprogrammierte Rezepte für verschiedene Lebensmittel: Pommes, Hähnchen, gegrilltes Gemüse, Schnitzel, und vieles mehr. Diese Programme beseitigen Kochratschläge durch automatische Einstellung optimaler Temperatur und Dauer. WiFi-Konnektivität und spezialisierte Mobile-Apps werden 2026 zunehmend häufiger. Mit einer Smartphone-App können Sie das Kochen fernsteuern, Fortschritt überwachen und Benachrichtigungen erhalten, wenn die Mahlzeit bereit ist. Das erweist sich für beschäftigte Haushalte, in denen Mitglieder zu unterschiedlichen Zeiten zurückkehren, als wertvoll. Intelligente Konnektivität erhöht jedoch typischerweise den Preis um 50-150€. Für praktische Benutzer genügt ein einfaches Touchscreen mit LED-Display und programmierbarem Timer. Modelle mit Warmhaltfunktion sind ausgezeichnet zum Servieren zu gestaffelten Zeiten. Überprüfen Sie auf schnelle Vorwärmungsprogramme und die Möglichkeit, benutzerdefinierten Kocheinstellungen für Ihre bevorzugten Rezepte zu speichern.',
    materials_title: 'Materialien und Verarbeitungsqualität',
    materials_text: 'Eine Heißluftfritteuse ist eine Investition, die 5-8 Jahre Betriebsdauer mit ordnungsgemäßer Pflege erreichen sollte. Die Materialwahl ist entscheidend. Der interne Kochkorb muss eine sichere, haltbare Antihaft-Beschichtung aufweisen, idealerweise PFOA-frei und BPA-frei oder mindestens europäische Sicherheitszertifizierungen (CE) erfüllen. Premium-Marken verwenden Keramik oder Wasser-basierte Beschichtungen, die traditionelle PTFE übertreffen und gegen Abblätterung beständig sind. Das externe Gehäuse sollte robust sein: entweder Edelstahl oder hitzebeständiges Kunststoff. Edelstahl bietet überlegene Haltbarkeit, wiegt aber mehr und kostet mehr. Hochwertiger ABS-Kunststoff, der hitzebeständig ist, ist akzeptabel, wenn ausreichend dick und von renommierten Herstellern. Griffe müssen ergonomisch und thermisch isoliert sein, um Verbrennungen zu vermeiden. Überprüfen Sie, ob Körbe und Zubehör spülmaschinenfest sind: dies spart erhebliche Zeit. Deutsche Marken wie Bosch und Siemens bieten typischerweise 3-5 Jahre Garantie, andere Hersteller oft 2-3 Jahre. Lesen Sie unabhängige Bewertungen von Haushalt-Prüforganen.',
    noise_title: 'Lautstärkenpegel Überlegungen',
    noise_text: 'Lautstärke wird oft bis zum Kauftag übersehen: Heißluftfritteusen arbeiten mit Hochgeschwindigkeit-Ventilatoren, die unweigerlich Lärm verursachen. Die meisten Modelle erzeugen 65-80 Dezibel (dB) während des Kochens. Zum Vergleich: normales Gespräch ist etwa 60dB, Verkehrslärm 70dB und ein Haushalts-Staubsauger 75dB. Eine Heißluftfritteuse bei 65dB ist relativ ruhig für diesen Gerätetyp, während 80dB wirklich störend wird, besonders morgens oder spät abends. Einige Premium-Modelle von Philips und anderen Herstellern reduzieren Lärm auf 62-65dB, indem sie leicht die Kochgeschwindigkeit opfern. Wenn Sie in einer Wohnung leben oder lärmempfindlich sind, ist die Überprüfung spezifischer Dezibel-Werte vor dem Kauf lohnenswert. Haushalte mit kleinen Kindern sollten diesen Faktor besonders berücksichtigen.',
    energy_title: 'Energieverbrauch und Kostenersparnisse',
    energy_text: 'Im Jahr 2026, mit deutschen Strompreisen im Bereich von 0,28-0,35€ pro kWh je nach Region und Verträgen, wird der Energieverbrauch einer Heißluftfritteuse zu einer relevanten finanziellen Überlegung. Eine 1500W Heißluftfritteuse für 30 Minuten verwendet 0,75 kWh, was etwa 0,22€ Stromkosten kostet. Im Vergleich zu einem traditionellen Ofen (2500-3500W) für 45 Minuten mit gleichwertigen Ergebnissen kostet 0,28-0,38€. Die Heißluftfritteuse ist deutlich wirtschaftlicher. Im Durchschnitt einer fünfmaligen wöchentlichen Nutzung über ein Jahr bedeutet dies 195 Jahreseinsätze mit insgesamt 146,25 kWh jährlich, etwa 41-51€ Stromkosten. Ein traditioneller Ofen mit dreimaliger wöchentlicher Nutzung kostet 60-80€ jährlich. Haushaltseinsparungen betragen durchschnittlich 25-35€ jährlich, plus Einsparungen beim Speiseöl (Elimination oder drastische Reduzierung) und Zubereitungszeit. Über fünf Jahre Besitz zahlt sich eine Heißluftfritteuse praktisch selbst durch Energieeinsparungen.',
    mistakes_title: 'Häufige Fehler vermeiden',
    mistakes_intro: 'Viele Nutzer von Heißluftfritteusen haben unrealistische Erwartungen oder unternutzen ihre Geräte durch mangelndes Wissen. Hier sind die häufigsten Fehler neuer Benutzer und wie man sie vermeidet.',
    mistakes: [
      {
        title: 'Den Korb zu voll packen',
        desc: 'Fehler Nummer eins: Überbeladung. Die Luft muss um jedes Lebensmittelstück frei zirkulieren können. Voll packen reduziert die Kochqualität dramatisch. Mittlere und untere Teile bleiben weich, während obere brennen. Füllen Sie zu maximal 70-80% oder bereiten Sie zwei Chargen vor. Bei Pommes den Korb bei halbem Garen schütteln.'
      },
      {
        title: 'Das Vorheizen auslassen',
        desc: 'Anders als traditionelle Öfen ist Heißluftfritteuse Vorwärmung schnell: maximal 3-5 Minuten. Viele Nutzer lassen diesen Schritt aus, was längere Garzeiten und suboptimale Texturen verursacht. Das Vorheizen schafft eine stabile thermische Umgebung für unmittelbare Maillard-Reaktion.'
      },
      {
        title: 'Falsche Ölmengen verwenden',
        desc: 'Es ist ein Mythos, dass Heißluftfritteusen kein Öl benötigen. Das Hinzufügen einer kleinen Menge (1-2 Teelöffel) verbessert Kochergebnisse erheblich. Zu wenig Öl ergibt trockene, blasse Ergebnisse. Zu viel Öl erzeugt Fettansammlung. Ölspray ermöglicht gleichmäßige Verteilung.'
      },
      {
        title: 'Herstelleranweisungen ignorieren',
        desc: 'Jede Heißluftfritteuse hat eigene Charakteristiken. Garzeiten, optimale Temperaturen und Korbpositionierung variieren. Lesen Sie die Bedienungsanleitung, folgen Sie vorgeschlagenen Programmen, passen Sie dann an. Deutsche Hersteller bieten detaillierte Anleitungen.'
      },
      {
        title: 'Regelmäßiges Reinigen vernachlässigen',
        desc: 'Öl und Essensreste sammeln sich schnell an. Ungereinigte Heißluftfritteusen produzieren Rauch, entwickeln Gerüche und die Leistung lässt nach. Nach jeder Nutzung reinigen: die meisten Körbe sind spülmaschinensicher. Das externe Gehäuse mit feuchtem Tuch reinigen.'
      },
      {
        title: 'Nasse Lebensmittel ohne Vorbereitung kochen',
        desc: 'Wasser und Öl mischen sich nicht. Beim Auftauen von Fisch oder Hähnchen gründlich trocknen. Übermäßige Feuchtigkeit erzeugt Dampf statt trockener Hitze. Marinierte Lebensmittel müssen vor Zubereitung gründlich ablaufen.'
      }
    ],
    maintenance_title: 'Wartung und Reinigung für maximale Lebensdauer',
    maintenance_text: 'Regelmäßige Wartung bestimmt die Lebensdauer einer Heißluftfritteuse. Nach jeder Nutzung 10-15 Minuten abkühlen lassen, dann Korb und Tablett entfernen. Mit warmem Seifenwasser spülen oder in die Spülmaschine. Die Antihaft-Beschichtung kann mit der Zeit, besonders mit aggressive Reinigung, verschleißen. Verwenden Sie weiche Schwämme und sanfte Reinigungsmittel. Niemals den Hauptkörper ins Wasser tauchen. Innenteile mit feuchtem Tuch und Essigwasser-Lösung wischen. Alle 3-4 Monate das obere Heizelement sanft mit weicher Bürste zur Staubentfernung reinigen. Überprüfen, dass Lüftungsgitter nicht blockiert sind. An trockener, staubgeschützter Stelle lagern. Deutsche Hersteller bieten erschwingliche Ersatz-Körbe-Kits. Eine gut gewartete Heißluftfritteuse hält leicht 7-10 Jahre.',
    recipes_title: 'Wesentliche Rezepte zum Einstieg',
    recipes_intro: 'Diese fünf wesentlichen Rezepte zeigen die Vielseitigkeit Ihrer Heißluftfritteuse und sind perfekt für deutsche Haushalte, die dieses revolutionäre Gerät entdecken.',
    recipes: [
      {
        title: 'Knusprige hausgemachte Pommes',
        desc: 'Der klassische Klassiker. Mittlere Kartoffeln in etwa 6-7mm dicke Stäbchen schneiden. 20 Minuten in kaltem Wasser einweichen zur Stärkeentfernung, dann gründlich trocknen. Mit 1 Teelöffel Erdnussöl, Salz und Paprika vermengen. Bei 200°C für 18-22 Minuten garen je nach Dicke. Korb auf halbem Wege schütteln. Ergebnis: goldene, knusprige Pommes, die traditionelle Fritten konkurrieren, ohne anhaltende Frittiergeruch.'
      },
      {
        title: 'Goldenes gebratenes Hähnchen',
        desc: 'Sonntagsbraten neu interpretiert. Ein ganzes Hähnchen (1,5-2kg) bei 180°C für 45-50 Minuten. Mit weicher Butter gemischt mit frischen Kräutern (Thymian, Rosmarin, Petersilie) vorher bestreichen. Ergebnis: knusprige goldene Außenseite, saftige zarte Innenseite ohne typische Trockenheit von konventionellen Öfen. Wurzelgemüse (Karotten, Pastinaken) in separatem Tablett zubereiten.'
      },
      {
        title: 'Gegrilltes gemischtes Gemüse',
        desc: 'Zucchini, Auberginen, rote und gelbe Paprika: in gleichmäßige 2cm Würfel schneiden. Leicht mit Olivenöl beträufeln, mit Salz und Pfeffer würzen. Bei 190°C für 15-18 Minuten garen. Ergebnis: zartes Inneres mit leicht karamellisierten Kanten, Geschmack verstärkt durch intensive trockene Hitze. Ausgezeichnete Beilage.'
      },
      {
        title: 'Knusprige Käse- und Schinken-Kroketten',
        desc: 'Vorbereitung: 200g Béchamel-Sauce, 100g geriebenen Käse, 50g gehackten Schinken, Muskatnuss-Gewürz. Zylindrische Formen bilden, in verquirltes Ei tauchen, dann Panade (feines Paniermehl). 30 Minuten kühlen. Bei 190°C für 12-14 Minuten garen. Ergebnis: goldene knusprige Außenseite, reichhaltig schmelzendes Inneres. Mit Tomatensoße oder Mayonnaise servieren.'
      },
      {
        title: 'Hausgemachte Gemüse-Chips',
        desc: 'Kartoffeln, Rüben, Karotten dünn (2-3mm) mit Mandoline schneiden. 10 Minuten einweichen, gründlich trocknen. Mit Öl und Salzgemisch vermengen. Bei 180°C für 10-12 Minuten in zwei Chargen garen. Ergebnis: papierdinne knusprige Chips, gesund ohne gesättigte Öle. In luftdichten Gläsern lagern zum bequemen Naschen.'
      }
    ],
    verdict_title: 'Unseres Finales Urteil',
    verdict_text: 'Eine Heißluftfritteuse stellt intelligente Investition für jeden deutschen Haushalt dar, der Gesundheit, Komfort und Energieeffizienz schätzt. Mit Fassungsvermögen passend zu Ihrer Haushaltsgröße, ausreichender Leistung (minimal 1400W) und wesentlichen Funktionen statt unnötiger Extras transformiert eine Heißluftfritteuse Ihren täglichen Kochansatz grundlegend. Hausgemachte Pommes konkurrieren mit traditionellen Fritteusen, kochen aber zwei Minuten schneller und ohne anhaltende Gerüche. Gemüse wird genuinerweise köstlich wenn luftgegart. Zubereitungszeiten fallen dramatisch. Über fünf Jahre Besitz sparen Sie über 150€ in Elektrizität und Speiseöl. Gewiss ersetzt eine Heißluftfritteuse nicht völlig einen traditionellen Ofen für bestimmte Zubereitungen (Großmengen, Brote, komplexe Gebäcke), wird aber schnell Ihr Hauptkoch-Gerät für 70-80% täglicher Mahlzeiten. Für deutsche Haushalte mit begrenztem Platz, energiebewusste Familien und alle, die einfache, schnelle, wirklich gute Nahrung schätzen, ist eine Heißluftfritteuse ein Kauf, den Sie nicht bereuen werden.'
  },
  es: {
    intro_title: 'Entendiendo la Freidora de Aire',
    intro_text: 'La freidora de aire ha transformado la cocina hogareña en toda Europa y más allá desde que se convirtió en corriente principal. Este electrodoméstico innovador utiliza la circulación rápida de aire sobrecalentado (hasta 200°C) para cocinar los alimentos de manera uniforme, creando una textura crujiente sin freír profundamente en aceite. Para 2026, las freidoras de aire se han vuelto esenciales en millones de hogares europeos, ofreciendo una alternativa más saludable, rápida y conveniente a los métodos de cocción tradicionales. A diferencia de los conceptos erróneos comunes, una freidora de aire no funciona a través de radiación o microondas: es esencialmente un horno de convección compacto de alto rendimiento. El aire circula alrededor de su comida a una velocidad extremadamente alta, creando la reacción de Maillard que produce ese exterior dorado y crujiente que todos aman. Para familias españolas, esto significa patatas bravas caseras rivalizando con las fritas tradicionales en menos de 15 minutos, pollo perfectamente asado en 25 minutos, y verduras bellamente caramelizadas sin el olor a fritura persistente que impregna ropa y muebles durante horas.',
    how_to_choose_title: 'Cómo Elegir la Freidora de Aire Correcta',
    how_to_choose_intro: 'El mercado de freidoras de aire en 2026 ofrece cientos de opciones que van desde modelos económicos a partir de 40€ hasta dispositivos premium que superan los 500€. Seleccionar la correcta depende completamente de sus circunstancias: tamaño del hogar, presupuesto, espacio disponible y tipos de comidas que prepara regularmente. Esta guía integral le ayudará a navegar la decisión con confianza.',
    capacity_title: 'Capacidad: El Factor Decisivo Principal',
    capacity_text: 'La capacidad es probablemente el criterio más importante al comprar una freidora de aire, ya que determina directamente lo que puede preparar. Para una sola persona o pareja, una freidora de aire con capacidad de 2-3 litros (aproximadamente 1,2-1,8 kg de patatas fritas) es completamente suficiente. Estos modelos compactos ocupan espacio mínimo en el mostrador y consumen menos electricidad. Marcas como Philips y otras ofrecen excelentes opciones en esta categoría, ideales para apartamentos españoles. Para una familia de tres a cuatro personas, elija una capacidad de 4-5 litros (2-3 kg). Estas freidoras de aire ofrecen un excelente equilibrio entre conveniencia y consumo de energía. Puede cocinar un pollo entero, preparar patatas bravas para toda la familia e incluso cocinar múltiples porciones simultáneamente. Para familias más grandes de cinco o más personas, invierta en un modelo de 6-8 litros o considere un diseño de doble cámara. Las marcas premium ofrecen esta capacidad manteniendo dimensiones razonables. Las freidoras de aire que superan 9 litros (categoría mega) son adecuadas para restaurantes o hogares que cocinan regularmente para grandes grupos. Es importante destacar que la capacidad utilizable es típicamente 80-90% de la capacidad total anunciada.',
    power_title: 'Potencia y Tecnología de Calentamiento',
    power_text: 'El consumo de energía, medido en vatios (W), influye directamente en la velocidad de cocción y la calidad de sellado de alimentos. La mayoría de las freidoras de aire modernas consumen entre 800W y 2000W. Un modelo de 1200-1500W representa excelente valor para uso doméstico estándar. Los modelos premium, particularmente freidoras de aire profesionales, pueden alcanzar 2200W o superior, permitiendo cocción significativamente más rápida y mejor distribución de calor. Busque freidoras de aire con tecnología Rapid Air o sistemas equivalentes como calefacción de convección de doble zona. Algunos modelos de alta gama cuentan con elementos calefactores duales (superior e inferior) o incluso calefacción de cuatro zonas, asegurando comida cocinada uniformemente. Para hogares españoles que cocinan frecuentemente, una potencia mínima de 1400W garantiza tiempos de cocción razonables incluso con una canasta llena.',
    features_title: 'Características y Conectividad Inteligente',
    features_text: 'Las freidoras de aire modernas ofrecen mucho más que controles manuales simples. Los mejores modelos incluyen 10-50 recetas pre-programadas para diferentes alimentos: patatas fritas, alas de pollo, verduras asadas, croquetas, y mucho más. Estos programas eliminan errores de cocción estableciendo automáticamente temperatura y duración óptimas. La conectividad WiFi y las aplicaciones móviles dedicadas son cada vez más comunes en 2026. Con una aplicación para smartphone, puede iniciar la cocción de forma remota, monitorear el progreso en tiempo real y recibir notificaciones cuando las comidas estén listas. Esto resulta invaluable para hogares ocupados donde los miembros regresan en diferentes momentos. Sin embargo, la conectividad inteligente típicamente agrega 50-150€ al precio. Para usuarios prácticos, un simple panel táctil con pantalla LED y temporizador programable es completamente suficiente. Los modelos con funciones de mantener caliente son excelentes para servir en horarios escalonados. Verifique los programas de precalentamiento rápido y la capacidad de guardar configuraciones personalizadas.',
    materials_title: 'Materiales y Calidad de Construcción',
    materials_text: 'Una freidora de aire es una inversión esperada durar 5-8 años con cuidado apropiado. La selección de materiales es crucial. El cesto de cocción interno debe contar con un revestimiento antiadherente seguro y duradero, idealmente libre de PFOA y BPA, o mínimamente cumpliendo certificaciones de seguridad europeas (CE). Las marcas premium utilizan revestimientos cerámicos o a base de agua que superan el PTFE tradicional y resisten el pelado. El cuerpo externo debe ser robusto: acero inoxidable o plástico resistente al calor. El acero inoxidable ofrece durabilidad superior pero agrega peso y costo. El plástico de grado alimenticio ABS resistente a altas temperaturas es aceptable si es suficientemente grueso y de fabricantes respetables. Los mangos deben ser ergonómicos y aislados térmicamente para prevenir quemaduras. Verifique que los cestos y accesorios sean compatibles con lavavajillas: esto ahorra tiempo considerable. Los fabricantes españoles y europeos ofrecen garantías variadas reflejando confianza en durabilidad.',
    noise_title: 'Consideraciones de Nivel de Ruido',
    noise_text: 'El ruido a menudo se pasa por alto hasta el día de la compra: las freidoras de aire operan con ventiladores de alta velocidad produciendo sonido inevitable. La mayoría de los modelos generan 65-80 decibelios (dB) durante la cocción. Para referencia, una conversación normal mide aproximadamente 60dB, el tráfico 70dB y una aspiradora doméstica 75dB. Una freidora de aire a 65dB es relativamente silenciosa para este tipo de aparato, mientras que 80dB se vuelve genuinamente molesto, especialmente temprano en la mañana o tarde en la noche. Algunos modelos premium reducen el ruido a 62-65dB sacrificando ligeramente la velocidad de cocción. Si vive en un apartamento o es sensible al ruido, verificar ratings decibélicos específicos antes de comprar vale la pena. Los hogares con niños pequeños deberían considerar este factor particularmente.',
    energy_title: 'Consumo de Energía y Ahorros de Costos',
    energy_text: 'En 2026, con precios de electricidad españoles oscilando entre 0,22€-0,30€ por kWh dependiendo de la región y contratos, el consumo energético de una freidora de aire se vuelve un cálculo financiero relevante. Una freidora de aire de 1500W utilizada 30 minutos consume 0,75 kWh, costando aproximadamente 0,19€ en electricidad. Comparado con un horno tradicional (2500-3500W) utilizado 45 minutos entregando resultados equivalentes, costando 0,22-0,30€, la freidora de aire es notablemente más económica. Durante un año, usando su freidora de aire cinco veces semanales (estimación familiar típica), representa 195 usos anuales totalizando 146,25 kWh anuales, costando aproximadamente 32-44€ en electricidad. Un horno tradicional utilizado incluso tres veces semanalmente cuesta 45-60€ anuales para resultados comparables. Los ahorros reales del hogar promedian 25-30€ anuales, más ahorros en aceite de cocina (eliminación o reducción significativa) y tiempo de preparación. Durante cinco años de propiedad, una freidora de aire efectivamente se paga a sí misma a través de ahorros de energía.',
    mistakes_title: 'Errores Comunes a Evitar',
    mistakes_intro: 'Muchos propietarios de freidoras de aire entran con expectativas irrealistas o subutilizan sus dispositivos por falta de conocimiento. Aquí están los errores más comunes cometidos por nuevos usuarios y cómo evitarlos.',
    mistakes: [
      {
        title: 'Llenar la canasta al máximo',
        desc: 'Error número uno: sobrecarga. El aire debe circular libremente alrededor de cada pieza de comida. Llenar al máximo reduce dramáticamente la calidad de cocción. Los artículos en el medio y fondo permanecen blandos mientras los superiores se queman. Llene a aproximadamente 70-80% máximo o prepare dos lotes. Para patatas fritas, agite la canasta a mitad de cocción.'
      },
      {
        title: 'Saltarse el precalentamiento',
        desc: 'A diferencia de hornos tradicionales, el precalentamiento de freidora de aire es rápido: máximo 3-5 minutos. Sin embargo, muchos usuarios saltan este paso, resultando en tiempos de cocción más largos y textura subóptima. El precalentamiento crea un ambiente térmico estable.'
      },
      {
        title: 'Usar cantidades incorrectas de aceite',
        desc: 'Es un mito que las freidoras de aire no necesiten aceite. Agregar una pequeña cantidad (1-2 cucharaditas) mejora significativamente los resultados de cocción y hace que la comida sea más crujiente. Muy poco aceite produce resultados secos y pálidos. Demasiado crea acumulación de grasa. El spray de aceite permite distribución uniforme.'
      },
      {
        title: 'Ignorar instrucciones del fabricante',
        desc: 'Cada freidora de aire tiene características únicas. Los tiempos de cocción, temperaturas óptimas y posicionamiento de canasta varían. Consulte el manual, siga programas sugeridos inicialmente, luego adapte según preferencias personales. Los fabricantes españoles proporcionan guías detalladas.'
      },
      {
        title: 'Descuidar limpieza regular',
        desc: 'El aceite y residuos de alimentos se acumulan rápidamente. Las freidoras de aire sin limpiar producen humo, desarrollan olores y el rendimiento disminuye. Limpie después de cada uso: la mayoría de canastas son seguras para lavavajillas. El cuerpo externo se limpia con paño húmedo.'
      },
      {
        title: 'Cocinar alimentos muy mojados sin preparación',
        desc: 'El agua y el aceite no se mezclan. Si descongela pescado o pollo, seque bien antes de cocinar. El exceso de humedad crea vapor en lugar del calor seco necesario. Los alimentos marinados deben drenar completamente.'
      }
    ],
    maintenance_title: 'Mantenimiento y Limpieza para Máxima Vida Útil',
    maintenance_text: 'El mantenimiento regular determina la longevidad de una freidora de aire. Después de cada uso, deje enfriar 10-15 minutos, luego retire la canasta y bandeja de recolección. Enjuague con agua jabonosa tibia o coloque en lavavajillas. El revestimiento antiadherente puede deteriorarse con el tiempo, especialmente con fregado abrasivo vigoroso. Utilice esponjas suaves y productos de limpieza suaves. Nunca sumerja el cuerpo principal en agua. Limpie las superficies interiores con paño húmedo y solución de vinagre blanco si se acumulan residuos. Cada 3-4 meses, limpie el elemento calefactor superior suavemente con cepillo suave para eliminar polvo. Asegúrese de que las rejillas de ventilación no estén obstruidas. Almacene en ubicación seca protegida del polvo. Los fabricantes ofrecen kits de canasta de reemplazo asequibles cuando el revestimiento original se desgaste. Una freidora de aire bien mantenida dura fácilmente 7-10 años.',
    recipes_title: 'Recetas Esenciales para Comenzar',
    recipes_intro: 'Estas cinco recetas esenciales muestran la versatilidad de su freidora de aire y son perfectas para hogares españoles descubriendo este electrodoméstico revolucionario.',
    recipes: [
      {
        title: 'Patatas Bravas Caseras Crujientes',
        desc: 'El clásico esencial. Corte papas medianas en bastones aproximadamente 6-7mm de grosor. Remoje 20 minutos en agua fría para eliminar almidón, luego seque completamente. Mezcle con 1 cucharadita de aceite de cacahuete, sal y pimentón. Cocine a 200°C durante 18-22 minutos según grosor. Agite la canasta a mitad del camino. Resultado: patatas bravas doradas crujientes rivalizando con versiones fritas tradicionales sin olor a fritura persistente.'
      },
      {
        title: 'Pollo Asado Dorado',
        desc: 'El asado de domingo reinventado. Un pollo entero (1,5-2kg) cocina a 180°C durante 45-50 minutos. Pre-cubra con mantequilla ablandada mezclada con hierbas frescas (tomillo, romero, perejil). Resultado: exterior crujiente dorado, interior jugoso tierno sin la sequedad típica del horno convencional. Prepare verduras de raíz (zanahorias, nabos) en bandeja separada.'
      },
      {
        title: 'Verduras Mixtas Asadas',
        desc: 'Calabacín, berenjenas, pimentón rojo y amarillo: corte en cubos uniformes de 2cm. Rocíe levemente con aceite de oliva, sazone con sal y pimienta. Cocine a 190°C durante 15-18 minutos. Resultado: interiores tiernos con bordes ligeramente caramelizados, sabor intensificado por calor seco intenso. Acompañamiento excelente para cualquier plato principal.'
      },
      {
        title: 'Croquetas de Queso y Jamón',
        desc: 'Preparación: 200g salsa béchamel, 100g queso rallado (Emmental), 50g jamón picado, nuez moscada. Forme cilindros, sumérja en huevo batido, luego pan rallado fino. Enfríe 30 minutos. Cocine a 190°C durante 12-14 minutos. Resultado: exterior crujiente dorado, interior rico derretido. Sirva con salsa de tomate o mayonesa.'
      },
      {
        title: 'Patatas Chip Caseras',
        desc: 'Corte finamente (2-3mm) papas, remolachas, zanahorias con mandolina. Remoje 10 minutos, seque completamente. Rocíe con mezcla de aceite y sal. Cocine a 180°C durante 10-12 minutos en dos lotes. Resultado: chips crujientes como papel, saludables sin aceites saturados. Almacene en frascos para picar conveniente.'
      }
    ],
    verdict_title: 'Nuestro Veredicto Final',
    verdict_text: 'Una freidora de aire representa inversión inteligente para cualquier hogar español que valore salud, conveniencia y eficiencia energética. Con capacidad adaptada al tamaño de su hogar, potencia suficiente (mínimo 1400W) y características esenciales en lugar de extras innecesarios, una freidora de aire fundamentalmente transforma su enfoque de cocina diaria. Las patatas bravas caseras rivalizan con versiones fritas tradicionales pero cocinan dos minutos más rápido y sin olores persistentes. Las verduras se vuelven genuinamente deliciosas cuando se cocinan al aire. Los tiempos de preparación disminuyen dramáticamente. Durante cinco años de propiedad, ahorrará más de 120€ en electricidad y aceite de cocina. Ciertamente, una freidora de aire no reemplaza completamente un horno tradicional para ciertas preparaciones (cocina a gran escala, panes, repostería compleja), pero rápidamente se vuelve su electrodoméstico de cocción principal para 70-80% de comidas diarias. Para apartamentos españoles con espacio limitado, familias conscientes de la energía y quienquiera que aprecie comida simple, rápida y genuinamente buena, una freidora de aire es una compra que no lamentará.'
  },
  it: {
    intro_title: 'Comprendere la Friggitrice ad Aria',
    intro_text: 'La friggitrice ad aria ha trasformato la cucina domestica in tutta Europa e oltre da quando è diventata mainstream. Questo innovativo elettrodomestico da cucina utilizza la circolazione rapida di aria surriscaldata (fino a 200°C) per cuocere il cibo in modo uniforme, creando una trama croccante senza friggere profondamente nell\'olio. Entro il 2026, le friggitrici ad aria sono diventate essenziali in milioni di case europee, offrendo un\'alternativa più sana, veloce e conveniente ai metodi di cottura tradizionali. A differenza dei malintesi comuni, una friggitrice ad aria non funziona attraverso radiazioni o microonde: è essenzialmente un forno a convezione compatto ad alte prestazioni. L\'aria circola intorno al cibo a una velocità estremamente elevata, creando la reazione di Maillard che produce quell\'esterno dorato e croccante che tutti amano. Per le famiglie italiane, ciò significa arancini fatti in casa e verdure fritte che rivalizzano con le tradizionali fritte italiane in meno di 15 minuti, melanzane perfettamente caramellizzate in 20 minuti e supplì dorate senza l\'odore di frittura persistente che penetra vestiti e tessuti per ore.',
    how_to_choose_title: 'Come Scegliere la Friggitrice ad Aria Giusta',
    how_to_choose_intro: 'Il mercato delle friggitrici ad aria nel 2026 offre centinaia di opzioni che vanno da modelli economici a partire da 40€ a dispositivi premium che superano 500€. Selezionare quella giusta dipende interamente dalle tue circostanze: dimensioni della famiglia, budget, spazio disponibile e tipi di pasti che prepari regolarmente. Questa guida completa ti aiuterà a navigare la decisione con sicurezza.',
    capacity_title: 'Capacità: Il Fattore Decisivo Primario',
    capacity_text: 'La capacità è probabilmente il criterio più importante quando acquisti una friggitrice ad aria, poiché determina direttamente cosa puoi preparare. Per una sola persona o una coppia, una friggitrice ad aria con capacità di 2-3 litri (approssimativamente 1,2-1,8 kg di patatine) è completamente sufficiente. Questi modelli compatti occupano lo spazio minimo sul piano di lavoro e consumano meno elettricità. Marchi come Philips e altri offrono opzioni eccellenti in questa categoria, ideali per appartamenti italiani. Per una famiglia di tre o quattro persone, scegli una capacità di 4-5 litri (2-3 kg). Queste friggitrici ad aria offrono un eccellente equilibrio tra praticità e consumo energetico. Puoi cuocere un pollo intero, preparare verdure fritte per tutta la famiglia e persino cuocere più porzioni simultaneamente. Per famiglie più numerose di cinque o più persone, investi in un modello da 6-8 litri o considera un design a doppia camera. I marchi premium offrono questa capacità mantenendo dimensioni ragionevoli. Le friggitrici ad aria che superano 9 litri (categoria mega) sono adatte a ristoranti o case che cucinano regolarmente per grandi riunioni. È importante sottolineare che la capacità utilizzabile è tipicamente l\'80-90% della capacità totale annunciata.',
    power_title: 'Potenza e Tecnologia di Riscaldamento',
    power_text: 'Il consumo di energia, misurato in watt (W), influenza direttamente la velocità di cottura e la qualità della sigillatura del cibo. La maggior parte delle friggitrici ad aria moderne consuma tra 800W e 2000W. Un modello da 1200-1500W rappresenta un eccellente valore per l\'uso domestico standard. I modelli premium, in particolare le friggitrici ad aria di grado professionale, possono raggiungere 2200W o superiori, consentendo una cottura significativamente più rapida e una migliore distribuzione del calore. Cerca friggitrici ad aria con tecnologia Rapid Air o sistemi equivalenti come riscaldamento a convezione a doppia zona. Alcuni modelli di fascia alta presentano elementi riscaldanti duali (superiore e inferiore) o persino riscaldamento a quattro zone, assicurando cibo cotto uniformemente. Per le famiglie italiane che cucinano frequentemente, una potenza minima di 1400W garantisce tempi di cottura ragionevoli anche con un cestello pieno.',
    features_title: 'Caratteristiche e Connettività Intelligente',
    features_text: 'Le friggitrici ad aria moderne offrono molto più che semplici controlli manuali. I migliori modelli includono 10-50 ricette pre-programmate per diversi alimenti: patatine fritte, ali di pollo, verdure arrostite, arancini, e molto altro. Questi programmi eliminano gli errori di cottura impostando automaticamente la temperatura e la durata ottimali. La connettività WiFi e le applicazioni mobili dedicate sono sempre più comuni nel 2026. Con un\'app per smartphone, puoi iniziare la cottura da remoto, monitorare i progressi in tempo reale e ricevere notifiche quando i pasti sono pronti. Questo è prezioso per famiglie occupate in cui i membri tornano a orari diversi. Tuttavia, la connettività intelligente tipicamente aggiunge 50-150€ al prezzo. Per gli utenti pratici, un semplice pannello tattile con display LED e timer programmabile è completamente sufficiente. I modelli con funzioni di mantenimento del calore sono eccellenti per servire a orari scaglionati. Verifica i programmi di preriscaldamento rapido e la capacità di salvare impostazioni di cottura personalizzate.',
    materials_title: 'Materiali e Qualità Costruttiva',
    materials_text: 'Una friggitrice ad aria è un investimento atteso durare 5-8 anni con una manutenzione adeguata. La selezione dei materiali è cruciale. Il cestello di cottura interno deve presentare un rivestimento antiaderente sicuro e durevole, idealmente privo di PFOA e BPA, o minimamente rispettando le certificazioni di sicurezza europee (CE). I marchi premium utilizzano rivestimenti ceramici o a base d\'acqua che superano il PTFE tradizionale e resistono allo scrostamento. Il corpo esterno deve essere robusto: acciaio inossidabile o plastica resistente al calore. L\'acciaio inossidabile offre una durabilità superiore ma aggiunge peso e costo. La plastica ABS di grado alimentare resistente alle alte temperature è accettabile se sufficientemente spessa e da produttori rispettabili. Le maniglie devono essere ergonomiche e termicamente isolate per prevenire le ustioni. Verifica che i cestelli e gli accessori siano compatibili con la lavastoviglie: questo fa risparmiare considerevole tempo. I produttori italiani ed europei offrono garanzie variabili che riflettono la fiducia nella durabilità.',
    noise_title: 'Considerazioni sul Livello di Rumore',
    noise_text: 'Il rumore è spesso trascurato fino al giorno dell\'acquisto: le friggitrici ad aria funzionano tramite ventilatori ad alta velocità producendo rumore inevitabile. La maggior parte dei modelli genera 65-80 decibel (dB) durante la cottura. Per riferimento, una conversazione normale misura approssimativamente 60dB, il traffico 70dB e un aspirapolvere domestico 75dB. Una friggitrice ad aria a 65dB è relativamente silenziosa per questo tipo di apparecchio, mentre 80dB diventa genuinamente fastidioso, specialmente al mattino presto o sera tardi. Alcuni modelli premium riducono il rumore a 62-65dB sacrificando leggermente la velocità di cottura. Se vivi in un appartamento o sei sensibile al rumore, vale la pena verificare i rating decibel specifici prima dell\'acquisto. Le famiglie con bambini piccoli dovrebbero considerare particolarmente questo fattore.',
    energy_title: 'Consumo Energetico e Risparmio Sui Costi',
    energy_text: 'Nel 2026, con i prezzi dell\'elettricità italiana che oscillano tra 0,25€-0,32€ per kWh a seconda della regione e dei contratti, il consumo energetico di una friggitrice ad aria diventa un calcolo finanziario rilevante. Una friggitrice ad aria da 1500W utilizzata per 30 minuti consuma 0,75 kWh, costando approssimativamente 0,21€ in elettricità. Confrontato con un forno tradizionale (2500-3500W) utilizzato per 45 minuti fornendo risultati equivalenti, costando 0,25-0,34€, la friggitrice ad aria è notevolmente più economica. Durante un anno, utilizzando la tua friggitrice ad aria cinque volte a settimana (stima familiare tipica), rappresenta 195 usi annuali totali 146,25 kWh annuali, costando approssimativamente 37-47€ in elettricità. Un forno tradizionale utilizzato persino tre volte a settimana costa 50-70€ annuali per risultati comparabili. I risparmi reali della famiglia ammontano in media 25-30€ annuali, più risparmi su olio da cucina (eliminazione o riduzione significativa) e tempo di preparazione. Durante cinque anni di proprietà, una friggitrice ad aria effettivamente si ripaga attraverso i risparmi energetici.',
    mistakes_title: 'Errori Comuni da Evitare',
    mistakes_intro: 'Molti proprietari di friggitrici ad aria entrano con aspettative irrealistiche o sottoutilizzano i loro dispositivi per mancanza di conoscenza. Ecco gli errori più comuni commessi dai nuovi utenti e come evitarli.',
    mistakes: [
      {
        title: 'Riempire il cestello al massimo',
        desc: 'Errore numero uno: sovraccaricare. L\'aria deve circolare liberamente intorno a ogni pezzo di cibo. Riempire al massimo riduce drammaticamente la qualità della cottura. Gli articoli nel mezzo e sul fondo rimangono molli mentre quelli superiori bruciano. Riempi a circa il 70-80% massimo o prepara due lotti. Per le patatine fritte, agita il cestello a metà della cottura.'
      },
      {
        title: 'Saltare il preriscaldamento',
        desc: 'A differenza dei forni tradizionali, il preriscaldamento della friggitrice ad aria è veloce: massimo 3-5 minuti. Tuttavia, molti utenti saltano questo passaggio, risultando in tempi di cottura più lunghi e texture subottimale. Il preriscaldamento crea un ambiente termico stabile.'
      },
      {
        title: 'Usare quantità errate di olio',
        desc: 'È un mito che le friggitrici ad aria non abbiano bisogno di olio. L\'aggiunta di una piccola quantità (1-2 cucchiaini) migliora significativamente i risultati della cottura e rende il cibo più croccante. Troppo poco olio produce risultati asciutti e pallidi. Troppo olio crea accumulo di grasso. Lo spray di olio consente una distribuzione uniforme.'
      },
      {
        title: 'Ignorare le istruzioni del produttore',
        desc: 'Ogni friggitrice ad aria ha caratteristiche uniche. I tempi di cottura, le temperature ottimali e il posizionamento del cestello variano. Consulta il manuale, segui i programmi suggeriti inizialmente, quindi adatta secondo le preferenze personali. I produttori italiani forniscono guide dettagliate.'
      },
      {
        title: 'Trascurare la pulizia regolare',
        desc: 'L\'olio e i residui di cibo si accumulano rapidamente. Le friggitrici ad aria non pulite producono fumo, sviluppano odori e le prestazioni diminuiscono. Pulisci dopo ogni uso: la maggior parte dei cestelli è sicura in lavastoviglie. Il corpo esterno si pulisce con un panno umido.'
      },
      {
        title: 'Cucinare cibi molto bagnati senza preparazione',
        desc: 'L\'acqua e l\'olio non si mescolano. Se scongeli pesce o pollo, asciuga bene prima della cottura. L\'eccessiva umidità crea vapore invece del calore secco necessario. I cibi marinati devono scolare completamente.'
      }
    ],
    maintenance_title: 'Manutenzione e Pulizia per la Massima Durata',
    maintenance_text: 'La manutenzione regolare determina la longevità di una friggitrice ad aria. Dopo ogni uso, lascia raffreddare 10-15 minuti, quindi rimuovi il cestello e il vassoio di raccolta. Sciacqua con acqua saponata tiepida o metti in lavastoviglie. Il rivestimento antiaderente può deteriorarsi nel tempo, specialmente con uno strofinamento abrasivo vigoroso. Utilizza spugne morbide e prodotti per la pulizia delicati. Non immergere mai il corpo principale in acqua. Pulisci le superfici interne con un panno umido e una soluzione di aceto bianco se si accumulano residui. Ogni 3-4 mesi, pulisci delicatamente l\'elemento riscaldante superiore con un pennello morbido per rimuovere la polvere. Assicurati che le griglie di ventilazione non siano ostruite. Riponi in un luogo secco protetto dalla polvere. I produttori offrono kit di cestello di ricambio economici quando il rivestimento originale si logora. Una friggitrice ad aria ben mantenuta dura facilmente 7-10 anni.',
    recipes_title: 'Ricette Essenziali per Iniziare',
    recipes_intro: 'Queste cinque ricette essenziali mostrano la versatilità della tua friggitrice ad aria e sono perfette per le famiglie italiane che scoprono questo elettrodomestico rivoluzionario.',
    recipes: [
      {
        title: 'Arancini Fritti Croccanti',
        desc: 'Il classico siciliano. Prepara un impasto di riso (200g riso, 400ml brodo, 50g burro), ripieno di ragù di carne e piselli. Forma sfere, ricopri di pangrattato fine. Spruzza leggermente con olio. Cuoci a 190°C per 15-18 minuti. Risultato: arancini dorati croccanti fuori, ragù ricco e morbido dentro, senza odore di fritura persistente nella cucina.'
      },
      {
        title: 'Melanzane Fritte',
        desc: 'Ricetta tradizionale reinterpretata. Affetta melanzane in rondelle di 5mm di spessore, sala e lascia riposare 20 minuti per eliminare l\'amaro. Asciuga bene, infarina leggermente, spruzza con olio. Cuoci a 200°C per 12-15 minuti. Risultato: melanzane tenerissime dentro, leggermente croccanti fuori, dolcemente caramellizzate, senza l\'eccesso di olio tradizionale.'
      },
      {
        title: 'Verdure Grigliate Miste',
        desc: 'Zucchine, melanzane, peperoni rossi e gialli, pomodori: taglia in cubi uniformi di 2cm. Spruzza leggermente con olio d\'oliva, condisci con sale e pepe. Cuoci a 190°C per 15-18 minuti. Risultato: verdure tenerissime con bordi leggermente caramellizzati, sapore intensificato dal calore secco intenso. Contorno eccellente per qualsiasi piatto principale.'
      },
      {
        title: 'Supplì al Ragù',
        desc: 'Preparazione: 250g riso cotto, 150ml ragù di carne, 100g mozzarella a dadini, 2 uova. Forma cilindri, infarina, immergi in uovo, poi pangrattato. Refrigera 30 minuti. Cuoci a 190°C per 14-16 minuti. Risultato: esterno croccante dorato, interno ricco con mozzarella filante e ragù. Servi con pomodoro fresco.'
      },
      {
        title: 'Chips di Verdure Casalinghe',
        desc: 'Affetta finemente (2-3mm) patate, barbabietole, carote con mandolina. Immergiti 10 minuti, asciuga completamente. Spruzza con olio di oliva e sale. Cuoci a 180°C per 10-12 minuti in due lotti. Risultato: chips sottilissimi e croccanti, salutari senza oli saturi. Conserva in barattoli per sgranocchiare facilmente.'
      }
    ],
    verdict_title: 'Il Nostro Verdetto Finale',
    verdict_text: 'Una friggitrice ad aria rappresenta un investimento intelligente per qualsiasi famiglia italiana che valuta la salute, la praticità e l\'efficienza energetica. Con capacità adatta alle dimensioni della tua famiglia, potenza sufficiente (minimo 1400W) e caratteristiche essenziali piuttosto che extra non necessari, una friggitrice ad aria trasforma fondamentalmente il tuo approccio alla cucina quotidiana. Gli arancini fatti in casa rivelano sapori autentici siciliani mantenendo la croccantezza senza l\'eccesso di olio tradizionale. Le melanzane, quando cotte all\'aria, preservano quella delicatezza che le rende ingredienti principali della cucina italiana. I tempi di preparazione diminuiscono drammaticamente. Durante cinque anni di proprietà, risparmerai oltre 130€ in elettricità e olio da cucina. Certamente, una friggitrice ad aria non sostituisce completamente un forno tradizionale per certe preparazioni (grandi quantità, pani, pasticceria complessa), ma diventa rapidamente il tuo principale elettrodomestico di cottura per il 70-80% dei pasti quotidiani. Per appartamenti italiani con spazio limitato, famiglie consapevoli dell\'energia e chiunque apprezzi il cibo semplice, veloce e genuinamente buono, una friggitrice ad aria è un acquisto che non potrai pentirtene.'
  },
  nl: {
    intro_title: 'De Airfryer Begrijpen',
    intro_text: 'De airfryer heeft huiskoken in heel Europa en daarbuiten getransformeerd sinds het mainstream werd. Dit innovatieve keukenapparaat gebruikt snelle circulatie van superhete lucht (tot 200°C) om voedsel gelijkmatig te bakken, waardoor een krokante textuur ontstaat zonder diep frituren in olie. In 2026 zijn airfryers essentieel geworden in miljoenen Europese huishoudens en bieden een gezondere, snellere en handigere alternatief voor traditionele kookmethoden. In tegenstelling tot veel misverstanden, werkt een airfryer niet via straling of magnetrons: het is in wezen een compacte hete lucht-oven met hoge prestaties. Lucht circuleert rond je voedsel met extreem hoge snelheid, creëerend de Maillard-reactie die die gouden, krokante buitenkant produceert die iedereen wil. Voor Nederlandse gezinnen betekent dit huisgemaakte frieten die traditionele frituren evenaren in minder dan 15 minuten, perfect geroosterde kip in 25 minuten, en prachtig gekaramelliseerde groenten zonder de aanhoudende frituurlucht die voor uren in kleding dringt. De technologie is dramatisch geëvolueerd, met modellen nu met WiFi-connectiviteit, vooraf ingestelde programma\'s voor honderden voedingswaren en 30-40% lager energieverbruik dan traditionele ovens.',
    how_to_choose_title: 'Hoe Kies je de Juiste Airfryer',
    how_to_choose_intro: 'De airfryermarkt in 2026 biedt honderden opties van budgetmodellen vanaf 40€ tot premium apparaten boven de 500€. De juiste kiezen hangt volledig van je omstandigheden af: huishoudgrootte, budget, beschikbare ruimte en soorten maaltijden die je regelmatig bereidt. Deze uitgebreide gids helpt je de beslissing met vertrouwen te nemen.',
    capacity_title: 'Capaciteit: De Primaire Beslissingsfactor',
    capacity_text: 'Capaciteit is waarschijnlijk het belangrijkste criterium bij aankoop van een airfryer, omdat het rechtstreeks bepaalt wat je kunt bereiden. Voor één persoon of een stel is een airfryer met capaciteit van 2-3 liter (ongeveer 1,2-1,8 kg frieten) volledig voldoende. Deze compacte modellen nemen minimale werkbladruimte in en verbruiken minder elektriciteit. Merken zoals Philips en andere bieden uitstekende opties in deze categorie, ideaal voor Nederlandse appartmenten. Voor een gezin van drie tot vier personen kies je een capaciteit van 4-5 liter (2-3 kg). Deze airfryers bieden een uitstekend evenwicht tussen gemak en energieverbruik. Je kunt een hele kip bakken, frieten voor het hele gezin bereiden en zelfs meerdere porties tegelijkertijd koken. Voor grotere gezinnen van vijf of meer personen investeer je in een 6-8 liter model of overweeg een dual-chamber design. Premium merken bieden deze capaciteit met redelijke afmetingen. Airfryers boven 9 liter (megacategorie) zijn geschikt voor restaurants of huishoudens die regelmatig voor grote groepen koken. Belangrijk is dat de bruikbare capaciteit typisch 80-90% van de totale geadverteerde capaciteit is.',
    power_title: 'Vermogen en Verwarmingstechnologie',
    power_text: 'Energieverbruik, gemeten in watt (W), beïnvloedt rechtstreeks baksnelheid en voedselkwaliteit. De meeste moderne airfryers verbruiken tussen 800W en 2000W. Een 1200-1500W model vertegenwoordigt uitstekende waarde voor standaard huishoudgebruik. Premium modellen, vooral professionele airfryers, kunnen 2200W of hoger bereiken, wat veel sneller bakken en betere warmteverdeling mogelijk maakt. Zoek airfryers met Rapid Air-technologie of gelijkwaardige systemen zoals dual-zone convectiewarmte. Philips en andere fabrikanten bieden hun eigen patenteerde luchtzirculatietechnologie. Sommige high-end modellen hebben dual verwarmingselementen (boven en onder) of zelfs quad-zone verwarming, wat gelijkmatig gebakken voedsel garandeert. Voor Nederlandse huishoudens die regelmatig koken garandeert minimaal 1400W vermogen redelijke baktijden zelfs met een volle mand.',
    features_title: 'Functies en Slimme Connectiviteit',
    features_text: 'Moderne airfryers bieden veel meer dan eenvoudige handmatige controles. De beste modellen bevatten 10-50 vooraf ingestelde recepten voor verschillende voedingswaren: frieten, kipvleugels, gegrilde groenten, bitterballen, en meer. Deze programma\'s elimineren bakfouten door automatisch optimale temperatuur en duur in te stellen. WiFi-connectiviteit en speciale mobiele apps worden steeds gebruikelijker in 2026. Met een smartphone-app kun je bakken op afstand starten, voortgang in real-time volgen en meldingen ontvangen wanneer maaltijden klaar zijn. Dit is waardevol voor drukke huishoudens waar leden op verschillende momenten terugkeren. Slimme connectiviteit voegt echter typisch 50-150€ toe aan de prijs. Voor praktische gebruikers is een eenvoudig aanraakscherm met LED-display en programmeerbare timer volledig voldoende. Modellen met warmhoudfuncties zijn uitstekend voor serveren op gestaffelde tijden. Controleer snelle voorverhittingsprogramma\'s en de mogelijkheid om aangepaste bakkingsinstellingen op te slaan.',
    materials_title: 'Materialen en Bouwkwaliteit',
    materials_text: 'Een airfryer is een investering die 5-8 jaar meegaat met goed onderhoud. Materiaalkeuze is cruciaal. De interne bakschaal moet een veilige, duurzame antiaanbaklaag hebben, ideaal vrij van PFOA en BPA, of minstens aan Europese veiligheidscertificeringen (CE) voldoen. Premium merken gebruiken keramische of watergebaseerde coatings die beter zijn dan traditionele PTFE en tegen afbladdering bestand zijn. Het externe omhulsel moet robuust zijn: roestvrijstaal of hittebestendig kunststof. Roestvrijstaal biedt superieure duurzaamheid maar voegt gewicht en kosten toe. Voedselkwaliteit ABS-kunststof is acceptabel als voldoende dik en van gerenommeerde fabrikanten. Grepen moeten ergonomisch en thermisch geïsoleerd zijn om brandwonden te voorkomen. Controleer of schalen en accessoires vaatwasserbestendig zijn: dit bespaart aanzienlijke tijd. Nederlandse en Europese fabrikanten bieden uiteenlopende garanties die vertrouwen in duurzaamheid weerspiegelen.',
    noise_title: 'Geluidsniveauoverwegingen',
    noise_text: 'Geluid wordt vaak vergeten tot aankoopdag: airfryers werken via snellopende ventilatoren die onvermijdelijk geluid produceren. De meeste modellen genereren 65-80 decibel (dB) tijdens bakken. Ter referentie: normaal gesprek is ongeveer 60dB, verkeer 70dB en huishoudstofzuiger 75dB. Een airfryer op 65dB is relatief stil voor dit apparaattype, terwijl 80dB echt vervelend wordt, vooral vroeg in de ochtend of laat in de avond. Sommige premium modellen verminderen geluid tot 62-65dB door baksnelheid iets op te offeren. Als je in een flat woont of geluidsgevoelig bent, is het controleren van specifieke decibel-waarderingen vóór aankoop de moeite waard. Huishoudens met kleine kinderen moeten dit factor bijzonder overwegen.',
    energy_title: 'Energieverbruik en Kostenbesparing',
    energy_text: 'In 2026, met Nederlandse elektriciteitsprijzen variërend van 0,24€-0,31€ per kWh afhankelijk van regio en contracten, wordt airfryerenergiegebruik een relevante financiële berekening. Een 1500W airfryer 30 minuten gebruikt 0,75 kWh, kostend ongeveer 0,20€ elektriciteit. Vergeleken met traditionele oven (2500-3500W) 45 minuten gebruikt voor equivalente resultaten, kostend 0,22-0,30€, is airfryer aanzienlijk economischer. Over een jaar, je airfryer vijf keer per week gebruikt (typische gezinsschatting), vertegenwoordigt 195 jaarlijkse toepassingen totaal 146,25 kWh jaarlijks, kostend ongeveer 35-45€ elektriciteit. Traditionele oven zelfs drie keer wekelijks gebruikt kost 50-65€ jaarlijks voor vergelijkbare resultaten. Werkelijke huishoudbepalingen gemiddeld 25-30€ per jaar plus besparingsexterna olie (eliminatie of significante vermindering) en voorbereiding tijd. Over vijf jaar eigenaarschap betaalt een airfryer zichzelf eigenlijk terug via energiebesparing.',
    mistakes_title: 'Veelgemaakte Fouten om te Voorkomen',
    mistakes_intro: 'Veel airfryer-eigenaren hebben onrealistische verwachtingen of gebruiken hun apparaat onderbenut door gebrek aan kennis. Hier zijn de meest voorkomende fouten van nieuwe gebruikers en hoe ze te voorkomen.',
    mistakes: [
      {
        title: 'De mand tot het uiterste vullen',
        desc: 'Fout nummer een: overbelading. Lucht moet vrij rond elk voedselstuk circuleren. Tot het maximum vullen vermindert bakresultaten dramatisch. Middelste en onderste items blijven slap terwijl bovenste items verbranden. Vul tot ongeveer 70-80% maximum of bereid twee batches. Voor frieten, schud de mand halverwege bakken.'
      },
      {
        title: 'Voorverwarming overslaan',
        desc: 'In tegenstelling tot traditionele ovens is airfryervoorverwarming snel: maximum 3-5 minuten. Echter veel gebruikers slaan deze stap over, resulterend in langere baktijden en suboptimale textuur. Voorverwarming creëert stabiele thermische omgeving.'
      },
      {
        title: 'Verkeerde oliehoeveelheden gebruiken',
        desc: 'Het is een mythe dat airfryers geen olie nodig hebben. Een kleine hoeveelheid toevoegen (1-2 theelepels) verbetert bakresultaten aanzienlijk en maakt voedsel krokeliger. Te weinig olie produceert droge, bleke resultaten. Te veel olie creëert vetophoping. Oliesprays maken gelijkmatige verspreiding mogelijk.'
      },
      {
        title: 'Fabrikantinstructies negeren',
        desc: 'Elke airfryer heeft unieke kenmerken. Baktijden, optimale temperaturen en mand-positionering variëren. Raadpleeg handboek, volg voorgestelde programma\'s aanvankelijk, pas dan aan naar persoonlijke voorkeur. Nederlandse fabrikanten bieden gedetailleerde gidsen.'
      },
      {
        title: 'Regelmatig schoonmaken verwaarlozen',
        desc: 'Olie en voedselresten verzamelen snel. Onschone airfryers produceren rook, ontwikkelen geuren en prestatie daalt. Na elke gebruik schoonmaken: meeste manden zijn vaatwasserbestendig. Extern lichaam met vochtige doek schoonmaken.'
      },
      {
        title: 'Natte voedingswaren zonder voorbereiding bakken',
        desc: 'Water en olie mengen niet. Bij ontdooien van vis of kip goed drogen vóór bakken. Buitensporige vochtigheid creëert stoom in plaats van droge hitte nodig. Gemarineerde voedsel moet volledig afvoelen.'
      }
    ],
    maintenance_title: 'Onderhoud en Reiniging voor Maximale Levensduur',
    maintenance_text: 'Regelmatig onderhoud bepaalt airfryerlevensduur. Na elke gebruik 10-15 minuten laten afkoelen, vervolgens mand en verzamelschaal verwijderen. Spoelen met warm zeepwater of in vaatwasser plaatsen. Antiaanbaklaag kan in de loop van de tijd slijten, vooral met vigoreus abrasief schuren. Gebruik zachte spons en zacht schoonmaakmiddel. Never inmeren in water. Binnenoppervlak schoonmaken met vochtige doek en witte azijnoplossing als residu ophoopt. Elke 3-4 maanden oberbakkelement voorzichtig met zachte borstel schoonmaken om stof te verwijderen. Zeker dat ventilatierooster niet geblokkeerd is. Opslag op droge stofbeschermde locatie. Fabrikanten bieden betaalbare vervangingsmand-kits. Een goed onderhouden airfryer duurt gemakkelijk 7-10 jaar.',
    recipes_title: 'Essentiële Recepten om Mee te Beginnen',
    recipes_intro: 'Deze vijf essentiële recepten tonen je airfryerveelzijdigheid en zijn perfect voor Nederlandse huishoudens die dit revolutionaire apparaat ontdekken.',
    recipes: [
      {
        title: 'Krokante Huisgemaakte Friet',
        desc: 'Het essentiële klassieke. Snijd middelgrote aardappelen in ongeveer 6-7mm dikke staven. Week 20 minuten in koud water om zetmeel te verwijderen, droog dan volledig. Meng met 1 theelepel arachideolie, zout en paprika. Bak op 200°C gedurende 18-22 minuten afhankelijk van dikte. Schud mand halverwege. Resultaat: gouden krokante friet die traditionele frituur evenaren, zonder aanhoudende frituurlucht.'
      },
      {
        title: 'Gouden Geroosterde Kip',
        desc: 'Zondagse roast opnieuw uitgevonden. Een hele kip (1,5-2kg) bakt op 180°C gedurende 45-50 minuten. Pre-bekleed met zachte boter gemengd met verse kruiden (tijm, rozemarijn, peterselie). Resultaat: krokante gouden buitenkant, malse sappige binnenkant zonder typische droging van conventionele oven. Bereid wortelen en ander groenten in aparte pan.'
      },
      {
        title: 'Gegrilde Gemengde Groenten',
        desc: 'Courgette, aubergine, rode en gele paprika: snijd in uniforme 2cm blokjes. Besprenkel licht met olijfolie, kruid met zout en peper. Bak op 190°C gedurende 15-18 minuten. Resultaat: teder binnenwerk met licht gekaramelliseerde randen, smaak versterkt door intens droge warmte. Uitstekende bijgerecht.'
      },
      {
        title: 'Krokante Kaas- en Hamkroket',
        desc: 'Voorbereiding: 200g béchamelsaus, 100g geraspte kaas, 50g gehakt ham, muskaatnotkruid. Vorm cilinders, dompel in geklopt ei, paneerbrooding. Koelkast 30 minuten. Bak op 190°C gedurende 12-14 minuten. Resultaat: gouden krokante buitenkant, rijke smeltende binnenkant. Serveer met tomatensaus of mayonaise.'
      },
      {
        title: 'Huisgemaakte Groentechiets',
        desc: 'Snijd fijn (2-3mm) aardappelen, bieten, wortels met mandoline. Week 10 minuten, droog geheel. Besprenkel met olie- en zoutmengsel. Bak op 180°C gedurende 10-12 minuten in twee batches. Resultaat: papierdinne krokante chips, gezond zonder verzadigde oliën. Bewaar in potten voor gemakkelijk knabbelen.'
      }
    ],
    verdict_title: 'Ons Uiteindelijk Oordeel',
    verdict_text: 'Een airfryer vertegenwoordigt intelligente investering voor elk Nederlands huishouden dat gezondheid, gemak en energiëfficiëntie waardeert. Met capaciteit aangepast aan je huishoudgrootte, voldoende vermogen (minimaal 1400W) en essentiële functies eerder dan onnodige extra\'s, transformeert een airfryer fundamentaal je dagelijkse kookbenadering. Huisgemaakte frieten evenaren traditionele frituurversies maar bakken twee minuten sneller en zonder aanhoudende geuren. Groenten worden genuinely heerlijk wanneer luchtgebakken. Voorbereidsingstijden dalen dramatisch. Over vijf jaar eigenaarschap spaar je meer dan 140€ in elektriciteit en kookolie. Zeker, een airfryer vervangt een traditionele oven niet volledig voor bepaalde bereidingen (grote schaal, broden, complexe gebakjes), maar wordt snel je voornaamste kooktoestel voor 70-80% van dagelijkse maaltijden. Voor Nederlandse flats met beperkte ruimte, energiebewuste gezinnen en ieder die eenvoudig, snel, genuinely goed voedsel op prijs stelt, is een airfryer een aankoop waar je geen spijt van zult hebben.'
  }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return {
    title: `${dict.guide_title} | Home Nura`,
    description: dict.guide_subtitle,
    openGraph: {
      title: dict.guide_title,
      description: dict.guide_subtitle,
      type: 'article',
    },
  }
}

export default async function AirfryerGuide({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const content = guideContent[lang] || guideContent.fr

  // Produits statiques avec liens affiliés
  const products = getStaticProducts(lang)

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.breadcrumb_home,
        item: `https://homenura.com/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: dict.breadcrumb_guide,
        item: `https://homenura.com/${lang}/guides/airfryers`,
      },
    ],
  }

  // Comparison table product mapping
  const comparisonProducts = products.map(p => ({
    name: p.title,
    price: p.price,
    priceNumeric: p.priceNumeric,
    image: p.image,
    url: p.url,
    capacity: p.capacity,
    nuraScore: p.nuraScore,
    bestFor: p.bestFor,
    badge: p.badge,
    pros: p.pros,
    cons: p.cons,
  }))

  // Comparison table dictionary
  const tableDict = {
    table_title: dict.table_title,
    table_subtitle: dict.table_subtitle,
    col_product: dict.col_product,
    col_nura_score: dict.col_nura_score,
    col_capacity: dict.col_capacity,
    col_best_for: dict.col_best_for,
    col_price: dict.col_price,
    col_action: dict.col_action,
    col_pros: dict.col_pros,
    col_cons: dict.col_cons,
    sort_by: dict.sort_by,
    sort_price_asc: dict.sort_price_asc,
    sort_price_desc: dict.sort_price_desc,
    sort_score: dict.sort_score,
    buy_button: dict.buy_button,
    show_details: dict.show_details,
    hide_details: dict.hide_details,
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar currentLang={lang} />

      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full">
            Guide Expert 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            {dict.guide_title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.guide_subtitle}
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{dict.why_trust}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_models_tested}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">200h+</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_hours_testing}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">6</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_european_markets}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guide Content - Intro */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-slate-900">{content.intro_title}</h2>
        <p className="text-slate-600 leading-relaxed mb-8 text-base">{content.intro_text}</p>
      </section>

      {/* How to Choose Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">{content.how_to_choose_title}</h2>
        <p className="text-slate-600 leading-relaxed mb-8">{content.how_to_choose_intro}</p>

        {/* Capacity Subsection */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{content.capacity_title}</h3>
          <p className="text-slate-600 leading-relaxed">{content.capacity_text}</p>
        </div>

        {/* Power Subsection */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{content.power_title}</h3>
          <p className="text-slate-600 leading-relaxed">{content.power_text}</p>
        </div>

        {/* Features Subsection */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{content.features_title}</h3>
          <p className="text-slate-600 leading-relaxed">{content.features_text}</p>
        </div>

        {/* Materials Subsection */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{content.materials_title}</h3>
          <p className="text-slate-600 leading-relaxed">{content.materials_text}</p>
        </div>

        {/* Noise Subsection */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{content.noise_title}</h3>
          <p className="text-slate-600 leading-relaxed">{content.noise_text}</p>
        </div>

        {/* Energy Subsection */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">{content.energy_title}</h3>
          <p className="text-slate-600 leading-relaxed">{content.energy_text}</p>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">{content.mistakes_title}</h2>
        <p className="text-slate-600 leading-relaxed mb-8">{content.mistakes_intro}</p>
        <div className="space-y-6">
          {content.mistakes.map((mistake, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{mistake.title}</h3>
              <p className="text-slate-600 leading-relaxed">{mistake.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">{content.maintenance_title}</h2>
        <p className="text-slate-600 leading-relaxed">{content.maintenance_text}</p>
      </section>

      {/* Recipes Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">{content.recipes_title}</h2>
        <p className="text-slate-600 leading-relaxed mb-8">{content.recipes_intro}</p>
        <div className="space-y-6">
          {content.recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{recipe.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{recipe.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verdict Section */}
      <section className="max-w-3xl mx-auto px-6 py-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-emerald-900">{content.verdict_title}</h2>
        <p className="text-slate-700 leading-relaxed">{content.verdict_text}</p>
      </section>

      {/* Product Comparison */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-8">{dict.section_title}</h2>
        <p className="text-slate-500 mb-12">{dict.section_subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.title}
              price={product.price}
              imageUrl={product.image}
              affiliateLink={product.url}
              rating={5}
              buyButtonText={dict.buy_button}
              badge={product.badge}
            />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <ComparisonTable
          products={comparisonProducts}
          dict={tableDict}
        />
      </section>

      {/* FAQ Section with Schema */}
      <FaqSection faqs={dict.faq} title={dict.faq_title} />

      {/* Footer with legal links */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">{dict.affiliate_disclaimer}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <Link href={`/${lang}/a-propos`} className="hover:text-slate-600 transition-colors">
              {dict.about_link}
            </Link>
            <Link href={`/${lang}/mentions-legales`} className="hover:text-slate-600 transition-colors">
              {dict.legal_notice}
            </Link>
            <Link href={`/${lang}/politique-confidentialite`} className="hover:text-slate-600 transition-colors">
              {dict.privacy_policy}
            </Link>
            <Link href={`/${lang}/politique-cookies`} className="hover:text-slate-600 transition-colors">
              {dict.cookie_policy}
            </Link>
          </div>
          <div className="mt-4 flex justify-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span>&copy; 2026 HOME NURA EUROPE</span>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner
        lang={lang}
        dict={{
          cookie_banner_text: dict.cookie_banner_text,
          cookie_accept: dict.cookie_accept,
          cookie_reject: dict.cookie_reject,
          cookie_learn_more: dict.cookie_learn_more,
        }}
      />
    </div>
  )
}
