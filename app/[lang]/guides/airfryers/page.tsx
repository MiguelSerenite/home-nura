import { getDictionary } from '../../dictionaries'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import AuthorByline from '@/components/AuthorByline'
import ProductCard from '@/components/ProductCard'
import ProductHeroVisual from '@/components/ProductHeroVisual'
import ProductSceneBanner from '@/components/ProductSceneBanner'
import ProductVisual from '@/components/ProductVisual'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import ComparisonTable from '@/components/ComparisonTable'
import IndependentSources from '@/components/IndependentSources'
import MarketPagesHubList from '@/components/market-pages/HubList'
import { getCategory } from '@/lib/catalog'
import AffiliateLink from '@/components/AffiliateLink'
import CookieBanner from '@/components/CookieBanner'
import { getStaticProducts } from '@/lib/products'
import { productKicker } from '@/lib/product-types'
import { buildProductListSchema, formatLastUpdated, lastUpdatedLabel, SITE_LAST_UPDATED_ISO, buildPageMetadata } from '@/lib/seo'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Kicker, SiteFooter } from '@/components/ui'
import { BlackFridayHubLink } from '@/components/black-friday/Promos'
import { resolveLang } from '@/lib/i18n'
import { CRITERION_LABEL, EXPERT_GUIDE_LABEL, romanNumeral } from '@/lib/editorial-labels'
import { getCategoryHead } from '@/lib/catalog/category-heads'
import { categoryModifiedIso, getCategorySpecificFaq } from '@/lib/catalog/category-faqs'

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
  },
  pl: {
    intro_title: 'Czym jest frytkownica beztłuszczowa?',
    intro_text: 'Frytkownica na gorące powietrze, nazywana też frytkownicą beztłuszczową (ang. air fryer), w ostatnich latach odmieniła domowe gotowanie. Wykorzystuje szybki obieg bardzo gorącego powietrza (do 200 °C), dzięki któremu potrawy pieką się równomiernie i stają się chrupiące bez zanurzania w oleju. W 2026 roku frytkownice to już podstawowe wyposażenie europejskich kuchni: zdrowa, szybka i wygodna alternatywa dla tradycyjnych metod przyrządzania potraw. Wbrew obiegowym opiniom frytkownica nie działa na zasadzie promieniowania ani mikrofal – to mały, wydajny piekarnik z termoobiegiem. Powietrze krąży wokół potraw z dużą prędkością i wywołuje reakcję Maillarda, dzięki której powstaje lubiana złocista, chrupiąca skórka. W praktyce oznacza to chrupiące domowe frytki w niecałe 15 minut, złocistego pieczonego kurczaka w 25 minut i grillowane warzywa z idealnie skarmelizowanymi brzegami – bez zapachu smażenia, który godzinami unosi się w kuchni i wnika w ubrania.',
    how_to_choose_title: 'Jak wybrać frytkownicę na gorące powietrze',
    how_to_choose_intro: 'Na rynku są dziś setki modeli frytkownic w cenach od ok. 170 do ponad 2150 zł. Wybór właściwego zależy wyłącznie od Twojej sytuacji: liczby domowników, budżetu, ilości miejsca w kuchni i potraw, które chcesz przygotowywać. Oto kompletny poradnik, który ułatwi Ci tę ważną decyzję.',
    capacity_title: 'Pojemność: kluczowy parametr',
    capacity_text: 'Pojemność to chyba najważniejsze kryterium przy zakupie frytkownicy, bo bezpośrednio decyduje o tym, co w niej przygotujesz. Dla jednej osoby lub pary w zupełności wystarczy frytkownica 2–3 l (ok. 1,2–1,8 kg frytek). Takie kompaktowe modele, często nazywane jednoosobowymi, zajmują mało miejsca na blacie i zużywają mniej prądu. Tefal i Moulinex mają w tej kategorii bardzo dobre modele, idealne do małych kuchni. Rodzinie trzy- lub czteroosobowej wystarczy pojemność 4–5 l (2–3 kg). Takie frytkownice dobrze łączą wygodę z niskim zużyciem energii: upieczesz w nich całego kurczaka, usmażysz frytki dla całej rodziny, a nawet przygotujesz kilka porcji jednocześnie. Przy dużej rodzinie (5+ osób) postaw na frytkownicę 6–8 l albo model z dwiema komorami. Duże modele marek Philips i Cosori oferują taką pojemność przy rozsądnych wymiarach. Frytkownice powyżej 9 l (kategoria „maxi”) sprawdzają się głównie w restauracjach i domach, w których regularnie gotuje się dla wielu osób. Pamiętaj, że rzeczywista pojemność użytkowa to zwykle 80–90% pojemności deklarowanej, bo trzeba zostawić miejsce na obieg powietrza.',
    power_title: 'Moc i technologia grzania',
    power_text: 'Moc, podawana w watach (W), bezpośrednio wpływa na szybkość przyrządzania potraw i na to, czy frytkownica dobrze je przyrumieni. Większość nowoczesnych frytkownic ma moc 800–2000 W. Model 1200–1500 W to dobry kompromis do typowego domowego użytku. Modele z wyższej półki, zwłaszcza profesjonalne i półprofesjonalne, mogą mieć 2200 W lub więcej, dzięki czemu pieką wyraźnie szybciej i bardziej równomiernie. Szukaj frytkownic z technologią Rapid Air lub jej odpowiednikami, takimi jak konwekcja dwustrefowa. Tefal i Moulinex stosują własny system zoptymalizowanego obiegu powietrza, a Philips obiecuje bardzo szybkie nagrzewanie dzięki technologii QuickCook. Niektóre droższe modele mają podwójne grzałki (górną i dolną), a nawet cztery strefy grzania, co zapewnia równiejsze pieczenie – szczególnie ważne przy kawałkach różnej wielkości. Jeśli regularnie gotujesz dla całej rodziny, wybierz model o mocy co najmniej 1400 W, który nawet przy pełnym koszu przygotuje posiłek w rozsądnym czasie.',
    features_title: 'Funkcje i łączność',
    features_text: 'Nowoczesne frytkownice oferują znacznie więcej niż proste ręczne sterowanie. Najlepsze modele mają od 10 do 50 programów automatycznych: do frytek, skrzydełek z kurczaka, grillowanych warzyw, pączków, suszenia owoców i wielu innych potraw. Programy same ustawiają optymalną temperaturę i czas, więc trudno o pomyłkę. W 2026 roku coraz częściej spotyka się też Wi-Fi i aplikacje mobilne. W aplikacji producenta możesz zdalnie uruchomić pieczenie, śledzić jego postęp i dostać powiadomienie, gdy posiłek będzie gotowy. To szczególnie przydatne w zapracowanych domach, w których domownicy wracają o różnych porach. Łączność podnosi jednak cenę średnio o 200–650 zł. Jeśli wolisz proste rozwiązania, w zupełności wystarczy panel dotykowy z wyświetlaczem LED i programowalnym minutnikiem. Modele z funkcją podtrzymywania ciepła świetnie sprawdzają się, gdy posiłki podajesz o różnych porach. Sprawdź też, czy urządzenie ma program szybkiego nagrzewania i pozwala zapisywać własne ustawienia ulubionych przepisów.',
    materials_title: 'Materiały i jakość wykonania',
    materials_text: 'Frytkownica to inwestycja, która przy właściwej konserwacji powinna służyć 5–8 lat. Kluczowe znaczenie mają materiały. Kosz powinien mieć bezpieczną i trwałą powłokę nieprzywierającą, najlepiej bez PTFE i BPA, a co najmniej z oznakowaniem CE. Najlepsze marki stosują powłoki ceramiczne lub powłoki na bazie wody, które dłużej się nie łuszczą. Obudowa musi być solidna: ze stali nierdzewnej lub z tworzywa odpornego na wysoką temperaturę. Stal nierdzewna jest trwalsza, ale cięższa i zwykle droższa. Żaroodporne tworzywo dopuszczone do kontaktu z żywnością (ABS) jest w porządku, jeśli ma odpowiednią grubość i pochodzi od renomowanego producenta. Uchwyty powinny być wygodne i izolowane termicznie, żeby nie poparzyć dłoni. Sprawdź, czy kosz i akcesoria można myć w zmywarce – to ogromna oszczędność czasu. Niemieckie marki, takie jak Siemens i Bosch, oferują zwykle 3–5 lat gwarancji, a francuskie Tefal i Moulinex często 2–3 lata, co odzwierciedla różne podejście do trwałości.',
    noise_title: 'Poziom hałasu',
    noise_text: 'Hałas to czynnik, o którym wiele osób przypomina sobie dopiero po zakupie. Frytkownice mają szybkoobrotowy wentylator, który nieuchronnie szumi. Większość modeli podczas pracy osiąga 65–80 decybeli (dB). Dla porównania: zwykła rozmowa to ok. 60 dB, ruch uliczny 70 dB, a odkurzacz 75 dB. Frytkownica, która generuje 65 dB, jest jak na to urządzenie stosunkowo cicha, natomiast 80 dB zaczyna przeszkadzać, zwłaszcza rano i późnym wieczorem. Niektóre modele z wyższej półki, np. wersje „EcoMode” lub „silence” marek Philips i Moulinex, obniżają hałas do 62–65 dB kosztem nieco wolniejszej pracy. Jeśli mieszkasz w bloku albo hałas Ci przeszkadza, sprawdź przed zakupem poziom hałasu podany przez producenta. Szczególnie ważne jest to w domach z małymi dziećmi lub zwierzętami wrażliwymi na hałas.',
    energy_title: 'Zużycie energii i oszczędności',
    energy_text: 'W 2026 roku ceny prądu we Francji wynoszą od 0,18 do 0,25 € za kWh, zależnie od regionu i umowy, więc warto policzyć, ile energii zużywa frytkownica. Model o mocy 1500 W używany przez 30 minut zużywa 0,75 kWh, co we Francji kosztuje ok. 0,15 €. Tradycyjny piekarnik (2500–3500 W) używany przez 45 minut do przygotowania tego samego posiłku to koszt 0,20–0,26 €, więc frytkownica już wypada korzystniej. Jeśli używasz frytkownicy 5 razy w tygodniu (przeciętna częstotliwość w rodzinie), daje to ok. 195 użyć i 146,25 kWh rocznie, czyli ok. 26 € za prąd. Tradycyjny piekarnik używany nawet tylko 3 razy w tygodniu kosztowałby przy tych samych efektach 50–60 € rocznie. Rzeczywista oszczędność dla przeciętnej francuskiej rodziny to 25–30 € rocznie, a do tego dochodzi oszczędność na oleju (którego używa się znacznie mniej lub wcale) i zaoszczędzony czas. W ciągu 5 lat użytkowania frytkownica niemal w całości zwraca się dzięki tym oszczędnościom. Przy polskich cenach prądu kwoty będą inne – do wyliczeń przyjmij stawkę ze swojej umowy.',
    mistakes_title: 'Najczęstsze błędy, których warto unikać',
    mistakes_intro: 'Wiele osób kupuje frytkownicę z nierealistycznymi oczekiwaniami albo nie wykorzystuje w pełni jej możliwości, bo nie wie, jak się nią posługiwać. Oto najczęstsze błędy początkujących użytkowników i sposoby, jak ich uniknąć.',
    mistakes: [
      {
        title: 'Napełnianie kosza po brzegi',
        desc: 'Błąd numer jeden to przeładowanie kosza. Powietrze musi swobodnie krążyć wokół każdego kawałka. Gdy kosz jest wypełniony po brzegi, efekty smażenia są gorsze: produkty w środku i na dole pozostaną miękkie, a te na górze się przypalą. Wypełniaj kosz najwyżej w 70–80% albo w razie potrzeby przygotuj dwie partie. Frytki przemieszaj w połowie smażenia, żeby równo się zrumieniły.',
      },
      {
        title: 'Pomijanie nagrzewania wstępnego',
        desc: 'W przeciwieństwie do piekarnika frytkownica nagrzewa się szybko: najwyżej 3–5 minut. Mimo to wielu użytkowników pomija ten krok, przez co potrawy dłużej się pieką i są mniej chrupiące. Nagrzewanie wstępne zapewnia stabilną temperaturę, w której reakcja Maillarda zachodzi od razu.',
      },
      {
        title: 'Dodawanie za mało lub za dużo oleju',
        desc: 'To mit, że frytkownica w ogóle nie potrzebuje oleju. Niewielka ilość (1–2 łyżeczki) wyraźnie poprawia efekt i sprawia, że potrawy są bardziej chrupiące. Za mało oleju – sucha i blada skórka. Za dużo – nadmiar tłuszczu zbiera się na dnie. Do równomiernego rozprowadzenia najlepiej nadaje się olej w sprayu.',
      },
      {
        title: 'Ignorowanie instrukcji producenta',
        desc: 'Każda frytkownica działa trochę inaczej: różnią się czasy i optymalne temperatury, a także sposób umieszczenia kosza. Zajrzyj do instrukcji, na początek korzystaj z proponowanych programów, a potem dopasuj je do swoich upodobań. Tefal i Moulinex dołączają szczegółowe poradniki z tabelami czasów i temperatur.',
      },
      {
        title: 'Zaniedbywanie czyszczenia',
        desc: 'Resztki oleju i jedzenia szybko się gromadzą. Nieczyszczona frytkownica dymi, wydziela nieprzyjemny zapach i gorzej działa. Czyść ją po każdym użyciu: w większości modeli kosz i pojemnik na tłuszcz można myć w zmywarce. Obudowę przecieraj wilgotną ściereczką.',
      },
      {
        title: 'Smażenie bardzo wilgotnych produktów bez osuszenia',
        desc: 'Woda i olej się nie mieszają. Rozmrożoną rybę lub kurczaka dobrze osusz przed włożeniem do frytkownicy. Nadmiar wilgoci zamienia się w parę, a do smażenia gorącym powietrzem potrzebne jest suche ciepło. Marynowane produkty przed smażeniem odstaw na dłużej, żeby dobrze obciekły.',
      },
    ],
    maintenance_title: 'Konserwacja i czyszczenie – jak przedłużyć życie frytkownicy',
    maintenance_text: 'Od regularnej konserwacji zależy, jak długo frytkownica będzie działać. Po każdym użyciu odczekaj 10–15 minut, aż ostygnie, a potem wyjmij kosz i pojemnik na resztki. Umyj je w letniej wodzie z płynem do naczyń albo włóż do zmywarki. Powłoka nieprzywierająca z czasem się zużywa, zwłaszcza gdy szoruje się ją mocno środkami ściernymi, dlatego używaj miękkiej gąbki i delikatnych środków. Korpusu urządzenia nigdy nie zanurzaj w wodzie. Jeśli w środku zbierają się resztki, przetrzyj wnętrze wilgotną ściereczką z odrobiną octu spirytusowego. Co 3–4 miesiące oczyść górną grzałkę z kurzu miękką szczoteczką. Sprawdzaj, czy kratki wentylacyjne nie są zatkane. Przechowuj frytkownicę w suchym miejscu, osłoniętą przed kurzem. Tefal i Moulinex oferują specjalne zestawy do czyszczenia oraz niedrogie zapasowe kosze na wymianę zużytych. Dobrze utrzymana frytkownica spokojnie posłuży 7–10 lat.',
    recipes_title: 'Popularne przepisy na start',
    recipes_intro: 'Oto pięć podstawowych przepisów, dzięki którym w pełni wykorzystasz frytkownicę. Idealne dla rodzin, które dopiero poznają to urządzenie.',
    recipes: [
      {
        title: 'Chrupiące domowe frytki',
        desc: 'Absolutny klasyk. Pokrój średniej wielkości ziemniaki w słupki o grubości 6–7 mm. Namocz je przez 20 minut w zimnej wodzie, żeby wypłukać skrobię, a potem dokładnie osusz. Wymieszaj z 1 łyżeczką oleju arachidowego, solą i papryką. Smaż w temperaturze 200 °C przez 18–22 minuty, zależnie od wielkości. W połowie czasu przemieszaj. Efekt: złociste frytki, chrupiące z zewnątrz i miękkie w środku, bez uporczywego zapachu smażenia.',
      },
      {
        title: 'Złocisty pieczony kurczak',
        desc: 'Niedzielny obiad w nowej odsłonie. Posmaruj całego kurczaka (1,5–2 kg) miękkim masłem wymieszanym z ziołami prowansalskimi (tymianek, rozmaryn, pietruszka) i piecz w temperaturze 180 °C przez 45–50 minut. Skórka wychodzi chrupiąca, a mięso soczyste, bez typowego dla piekarnika wysuszenia. Warzywa korzeniowe (marchew, rzepę) przygotuj na osobnej tacce.',
      },
      {
        title: 'Grillowane warzywa',
        desc: 'Cukinię, bakłażana oraz czerwoną i żółtą paprykę pokrój w równą kostkę o boku 2 cm. Skrop lekko oliwą, dopraw solą i pieprzem. Piecz w temperaturze 190 °C przez 15–18 minut. Efekt: warzywa miękkie w środku, z lekko skarmelizowanymi brzegami i wyrazistszym smakiem dzięki intensywnemu, suchemu ciepłu. Świetny dodatek do każdego dania głównego.',
      },
      {
        title: 'Kroketki z serem i szynką',
        desc: 'Składniki: 200 g sosu beszamelowego, 100 g startego ementalera, 50 g posiekanej szynki, gałka muszkatołowa. Uformuj wałeczki, zanurz je w roztrzepanym jajku, a potem obtocz w drobnej bułce tartej. Schłódź przez 30 minut. Smaż w temperaturze 190 °C przez 12–14 minut. Efekt: złociste i chrupiące z zewnątrz, kremowe i rozpływające się w środku. Podawaj z sosem pomidorowym lub majonezem.',
      },
      {
        title: 'Domowe chipsy warzywne',
        desc: 'Ziemniaki, buraki i marchew pokrój na mandolinie w cienkie plasterki (2–3 mm). Namocz na 10 minut, a potem dokładnie osusz. Skrop olejem wymieszanym z solą. Smaż w temperaturze 180 °C przez 10–12 minut, w dwóch partiach. Efekt: chipsy cienkie i chrupiące jak papier, lekkie i bez tłuszczów nasyconych. Przechowuj je w słoiku i podjadaj, kiedy masz ochotę.',
      },
    ],
    verdict_title: 'Nasz werdykt',
    verdict_text: 'Frytkownica to rozsądna inwestycja dla każdej rodziny, która ceni zdrowie, wygodę i oszczędność energii. Jeśli wybierzesz pojemność dopasowaną do liczby domowników, wystarczającą moc (co najmniej 1400 W) i funkcje naprawdę potrzebne zamiast zbędnych, frytkownica całkowicie zmieni Twoje podejście do codziennego gotowania. Domowe frytki dorównują tym z głębokiego oleju, a są gotowe o 2 minuty szybciej i bez wszechobecnego zapachu smażenia. Warzywa z gorącego powietrza są wyjątkowo smaczne. Przygotowanie posiłków trwa znacznie krócej. W ciągu pięciu lat użytkowania zaoszczędzisz na prądzie i oleju ponad 100 € (według cen we Francji). Owszem, w niektórych zastosowaniach (duże ilości, chleb, bardziej wymagające wypieki) frytkownica nie zastąpi w pełni tradycyjnego piekarnika, ale szybko staje się głównym urządzeniem przy 70–80% codziennych posiłków. Dla mieszkańców miast z niewielką kuchnią, rodzin, które zwracają uwagę na zużycie energii, i każdego, kto lubi dobrą, prostą i szybką kuchnię, frytkownica to zakup, którego nie pożałujesz.',
  },
  sv: {
    intro_title: 'Så fungerar en airfryer',
    intro_text: 'Airfryern, även kallad varmluftsfritös, har förändrat matlagningen i många hem de senaste åren. Tekniken bygger på snabbt cirkulerande het luft (upp till 200 °C) som tillagar maten jämnt och ger en krispig yta utan att något friteras i olja. 2026 har airfryrar blivit ett vanligt inslag i europeiska kök – ett hälsosammare, snabbare och smidigare alternativ till traditionella tillagningssätt. Tvärtemot vad många tror fungerar en airfryer inte med strålning eller mikrovågor: den är i grunden en liten och effektiv varmluftsugn. Luften cirkulerar runt maten i mycket hög hastighet och sätter igång Maillardreaktionen, som ger den gyllene, krispiga ytan som så många uppskattar. I vardagen betyder det krispiga hemgjorda pommes frites på under 15 minuter, en gyllenbrun kyckling på 25 minuter och perfekt karamelliserade grönsaker – utan den envisa frityrlukten som annars sätter sig i köket och kläderna i flera timmar.',
    how_to_choose_title: 'Så väljer du rätt airfryer',
    how_to_choose_intro: 'Det finns i dag hundratals airfryrar på marknaden, i prisklasser från cirka 450 kr till över 5 500 kr. Vilken modell som passar dig beror helt på din situation: hur många ni är i hushållet, din budget, hur mycket plats du har och vilka rätter du vill laga. Här går vi igenom allt du behöver tänka på inför beslutet.',
    capacity_title: 'Volymen: den avgörande faktorn',
    capacity_text: 'Volymen är förmodligen det viktigaste att tänka på när du köper en airfryer, eftersom den direkt avgör vad du kan laga. För en person eller ett par räcker en airfryer på 2–3 liter (ungefär 1,2–1,8 kg pommes frites) gott och väl. De här kompakta modellerna, som ofta kallas airfryrar för en person, tar liten plats på bänken och drar mindre el. Tefal och Moulinex har utmärkta modeller i den här klassen, perfekta för små kök. För en familj på tre till fyra personer passar 4–5 liter (2–3 kg). De ger en bra balans mellan bekvämlighet och elförbrukning: du kan laga en hel kyckling, pommes frites till hela familjen och till och med flera portioner samtidigt. För en storfamilj på fem personer eller fler är det värt att satsa på en airfryer på 6–8 liter eller en modell med två korgar. De stora modellerna från Philips och Cosori har den volymen utan att bli orimligt stora. Airfryrar på över 9 liter (”maxi”-klassen) passar främst restauranger eller hushåll som ofta lagar mat till många. Tänk på att den volym du faktiskt kan använda oftast är 80–90 % av den angivna totalvolymen, eftersom luften behöver utrymme att cirkulera.',
    power_title: 'Effekt och värmeteknik',
    power_text: 'Effekten, som anges i watt (W), påverkar direkt hur snabbt maten blir klar och hur väl den får stekyta. De flesta moderna airfryrar har en effekt på 800–2 000 W. En modell på 1 200–1 500 W är en bra kompromiss för vanligt hemmabruk. Toppmodellerna, särskilt de professionella och semiprofessionella, kan komma upp i 2 200 W eller mer, vilket ger betydligt snabbare tillagning och jämnare resultat. Leta efter airfryrar med Rapid Air-teknik eller motsvarande, till exempel varmluft med två zoner. Tefal och Moulinex använder sina egna system för optimerad luftcirkulation, medan Philips lovar extra snabb uppvärmning med sin QuickCook-teknik. Vissa toppmodeller har dubbla värmeelement (upptill och nedtill) eller till och med fyra värmezoner, vilket ger jämnare tillagning – särskilt viktigt när bitarna är olika stora. Lagar du ofta mat till hela familjen ger en effekt på minst 1 400 W rimliga tillagningstider, även med full korg.',
    features_title: 'Funktioner och uppkoppling',
    features_text: 'Moderna airfryrar har mycket mer än enkla manuella reglage. De bästa modellerna har 10–50 förinställda program för olika livsmedel: pommes frites, kycklingvingar, grillade grönsaker, munkar, torkning av frukt och mycket annat. Programmen minskar risken att något blir fel, eftersom de automatiskt ställer in rätt temperatur och tid. Wifi och appar blir allt vanligare 2026. Med en app kan du starta tillagningen på distans, följa hur det går och få en notis när maten är klar. Det är särskilt praktiskt i hushåll där alla kommer hem vid olika tider. Uppkopplingen höjer dock priset med i snitt 550–1 700 kr. Är du pragmatisk räcker det gott med en enkel pekskärm med LED-display och en programmerbar timer. Modeller med varmhållningsfunktion är utmärkta när ni äter vid olika tider. Kontrollera också om det finns snabbförvärmning och om du kan spara egna program för dina favoritrecept.',
    materials_title: 'Material och byggkvalitet',
    materials_text: 'En airfryer är en investering som bör hålla i 5–8 år om du sköter den rätt. Materialen spelar stor roll. Korgen ska ha en säker och hållbar non-stick-beläggning, helst utan PTFE och BPA, eller åtminstone vara CE-märkt enligt de europeiska säkerhetskraven. De bästa märkena använder keramiska eller vattenbaserade beläggningar som håller längre utan att flagna. Själva höljet ska vara robust: rostfritt stål eller plast som tål höga temperaturer. Rostfritt stål är tåligare men tyngre och oftast dyrare. Värmetålig plast av livsmedelskvalitet (ABS) duger om den är tillräckligt tjock och kommer från en seriös tillverkare. Handtagen ska vara ergonomiska och värmeisolerade så att du inte bränner dig. Kontrollera att korgen och tillbehören tål diskmaskin – det sparar mycket tid. Tyska märken som Siemens och Bosch ger ofta 3–5 års garanti, medan de franska märkena Tefal och Moulinex ofta ger 2–3 år, vilket speglar olika syn på hållbarhet.',
    noise_title: 'Ljudnivån',
    noise_text: 'En faktor som många glömmer tills de har köpt: ljudet. En airfryer har en fläkt som går på högvarv, och den låter oundvikligen. De flesta modeller ligger på 65–80 decibel (dB) under tillagningen. Som jämförelse ligger ett vanligt samtal runt 60 dB, trafikbuller på 70 dB och en dammsugare på 75 dB. En airfryer på 65 dB är relativt tyst för den här typen av apparat, medan 80 dB börjar bli störande, särskilt tidigt på morgonen eller sent på kvällen. Vissa dyrare modeller, bland annat versioner med ”EcoMode” eller tyst läge från Philips och Moulinex, sänker ljudet till 62–65 dB mot att tillagningen tar något längre tid. Bor du i lägenhet eller stör du dig lätt på ljud är det värt att kontrollera den angivna ljudnivån innan du köper. Hushåll med små barn eller ljudkänsliga husdjur bör särskilt tänka på det här.',
    energy_title: 'Elförbrukning och besparingar',
    energy_text: 'I Frankrike kostar elen 2026 mellan 0,18 och 0,25 € per kWh beroende på region och avtal (ca 2–2,75 kr), och då blir airfryerns elförbrukning en kalkyl värd att göra. En airfryer på 1 500 W som går i 30 minuter drar 0,75 kWh, vilket med de priserna kostar ungefär 1,70 kr. En vanlig ugn (2 500–3 500 W) som används i 45 minuter för samma måltid kostar 2,20–2,90 kr, så airfryern är redan snålare. Använder du airfryern 5 gånger i veckan (ett ungefärligt snitt för en familj) blir det cirka 195 gånger per år, eller 146,25 kWh, vilket kostar ungefär 300 kr i el. En vanlig ugn som bara används 3 gånger i veckan skulle kosta 550–650 kr per år i el för samma resultat. För en genomsnittlig fransk familj blir den faktiska besparingen 300–350 kr per år, plus det du sparar på matolja (som du kan sluta använda eller dra ner kraftigt på) och den tid du vinner. På 5 år betalar en airfryer nästan hela sitt inköpspris med de här elbesparingarna. Ditt eget elpris står på elräkningen.',
    mistakes_title: 'Vanliga misstag att undvika',
    mistakes_intro: 'Många köper en airfryer med orealistiska förväntningar eller använder den för lite, eftersom de inte känner till knepen. Här är de vanligaste misstagen bland nya användare – och hur du undviker dem.',
    mistakes: [
      {
        title: 'Fylla korgen till brädden',
        desc: 'Misstag nummer ett: att överfylla korgen. Luften måste kunna cirkulera fritt runt varje bit. Fyller du korgen till max blir resultatet sämre: det som ligger i mitten och längst ner blir mjukt, medan det som ligger överst bränns. Fyll till högst 70–80 % eller laga i två omgångar om det behövs. Gör du pommes frites, skaka om korgen halvvägs för ett jämnare resultat.',
      },
      {
        title: 'Hoppa över förvärmningen',
        desc: 'Till skillnad från en vanlig ugn går det fort att förvärma en airfryer: högst 3–5 minuter. Ändå hoppar många över det steget, vilket ger längre tillagningstid och en sämre yta. Förvärmningen ger en stabil värme där Maillardreaktionen kan sätta igång direkt.',
      },
      {
        title: 'Använda för lite eller för mycket olja',
        desc: 'Det är en myt att en airfryer klarar sig helt utan olja. Lite olja (1–2 tsk) gör tillagningen klart bättre och maten krispigare. För lite olja ger en torr och blek yta, för mycket ger fett som samlas i botten. En oljesprej är perfekt för att fördela oljan jämnt.',
      },
      {
        title: 'Strunta i tillverkarens anvisningar',
        desc: 'Varje airfryer fungerar lite olika. Tillagningstider, rätt temperatur och hur korgen ska placeras varierar. Läs bruksanvisningen, följ de föreslagna programmen i början och anpassa sedan efter din egen smak. Tefal och Moulinex har utförliga guider med tillagningstabeller.',
      },
      {
        title: 'Slarva med rengöringen',
        desc: 'Rester av olja och mat samlas snabbt. En airfryer som inte rengörs börjar ryka, luktar illa och fungerar sämre. Rengör den efter varje användning: korgen och uppsamlingsskålen tål diskmaskin på de flesta modeller. Utsidan torkar du av med en fuktig trasa.',
      },
      {
        title: 'Laga mycket blöt mat utan att förbereda den',
        desc: 'Vatten och olja blandas inte. Tinar du fisk eller kyckling ska du torka av den ordentligt innan den tillagas. För mycket fukt ger ånga i stället för den torra värme som behövs för att laga mat med varmluft. Låt marinerade råvaror rinna av ordentligt först.',
      },
    ],
    maintenance_title: 'Skötsel och rengöring för lång livslängd',
    maintenance_text: 'Regelbunden skötsel avgör hur länge en airfryer håller. Låt den svalna i 10–15 minuter efter varje användning och ta sedan ut korgen och uppsamlingsskålen. Diska dem i ljummet vatten med diskmedel eller i diskmaskinen. Non-stick-beläggningen kan slitas med tiden, särskilt om du skurar hårt med slipande medel. Använd en mjuk svamp och milda medel. Själva apparaten får aldrig sänkas ner i vatten. Torka av insidan med en fuktig trasa och lite ättika om det har samlats rester. Var tredje eller fjärde månad bör du försiktigt borsta av det övre värmeelementet med en mjuk borste för att få bort damm. Kontrollera att ventilationsgallren inte är igensatta. Förvara airfryern torrt och skyddat mot damm. Tefal och Moulinex säljer särskilda rengöringskit och prisvärda reservkorgar för när den gamla har blivit sliten. En välskött airfryer håller lätt i 7–10 år.',
    recipes_title: 'Populära recept att börja med',
    recipes_intro: 'Här är fem självklara recept för att få ut det mesta av din airfryer – perfekta när du precis har börjat använda den.',
    recipes: [
      {
        title: 'Krispiga hemgjorda pommes frites',
        desc: 'Klassikern. Skär medelstora potatisar i stavar på 6–7 mm. Lägg dem i kallt vatten i 20 minuter för att få bort stärkelsen och torka dem sedan ordentligt. Blanda med 1 tsk jordnötsolja, salt och paprikapulver. Tillaga i 200 °C i 18–22 minuter beroende på storlek. Skaka om halvvägs. Resultat: gyllene pommes frites, krispiga utanpå och mjuka inuti, utan någon kvardröjande frityrlukt.',
      },
      {
        title: 'Gyllenbrun helstekt kyckling',
        desc: 'Söndagsmiddagen i ny tappning. En hel kyckling (1,5–2 kg) tillagas i 180 °C i 45–50 minuter. Pensla den först med rumsvarmt smör blandat med provensalska örter (timjan, rosmarin, persilja). Resultat: krispig utanpå och saftig inuti, utan den torrhet som ugnen ofta ger. Laga rotfrukter (morötter, rovor) i en separat form.',
      },
      {
        title: 'Grillade grönsaker',
        desc: 'Zucchini, aubergine samt röd och gul paprika: skär i jämna tärningar på 2 cm. Ringla över lite olivolja och smaka av med salt och peppar. Tillaga i 190 °C i 15–18 minuter. Resultat: mjuka grönsaker med lätt karamelliserade kanter och en smak som förstärks av den torra, intensiva värmen. Passar som tillbehör till alla huvudrätter.',
      },
      {
        title: 'Kroketter med ost och skinka',
        desc: 'Ingredienser: 200 g béchamelsås, 100 g riven ost (emmentaler), 50 g finhackad skinka och muskotnöt. Forma till små rullar, doppa dem i uppvispat ägg och sedan i fint ströbröd. Ställ dem i kylen i 30 minuter. Tillaga i 190 °C i 12–14 minuter. Resultat: gyllene och krispiga utanpå, krämiga och smältande inuti. Servera med tomatsås eller majonnäs.',
      },
      {
        title: 'Hemgjorda grönsakschips',
        desc: 'Skiva potatis, rödbetor och morötter tunt (2–3 mm) med ett mandolinjärn. Lägg skivorna i vatten i 10 minuter och torka dem ordentligt. Blanda med lite olja och salt. Tillaga i 180 °C i 10–12 minuter, i två omgångar. Resultat: papperstunna, krispiga chips – nyttigare och utan mättat frityrfett. Förvara dem i en burk med lock och ta fram när småsuget kommer.',
      },
    ],
    verdict_title: 'Vårt omdöme',
    verdict_text: 'En airfryer är en klok investering för alla hushåll som värdesätter hälsa, bekvämlighet och låg elförbrukning. Med en volym som passar ditt hushåll, tillräcklig effekt (minst 1 400 W) och de funktioner du faktiskt behöver i stället för onödiga extrafunktioner förändrar en airfryer hur du lagar mat i vardagen. Hemgjorda pommes frites från airfryern står sig väl mot friterade, är klara 2 minuter snabbare och sprider ingen påträngande frityrlukt. Grönsaker blir riktigt goda tillagade i varmluft. Tiden vid spisen minskar rejält. På fem år sparar du över 1 000 kr på el och matolja. En airfryer ersätter visserligen inte en vanlig ugn helt för vissa rätter (stora mängder, bröd, avancerade bakverk), men den blir snabbt din viktigaste köksapparat och används till 70–80 % av vardagsmåltiderna. För dig som bor i en liten lägenhet, för familjer som vill hålla nere elförbrukningen och för alla som uppskattar god, enkel och snabb mat är en airfryer ett köp du inte kommer att ångra.',
  },
  us: {
    intro_title: 'What an air fryer really does',
    intro_text: 'The air fryer, also known as a hot-air fryer, has transformed home cooking in recent years. It cooks food evenly by rapidly circulating very hot air (up to 400°F, or 200°C), creating a crispy texture without submerging anything in oil. By 2026, the air fryer has gone from novelty to kitchen staple: a healthier, faster and more convenient alternative to traditional cooking methods. Contrary to a common misconception, an air fryer doesn\'t use radiation or microwaves: it\'s essentially a compact, high-performance convection oven. Air moves around the food at very high speed, triggering the Maillard reaction that produces the golden, crispy crust everyone loves. For families, that means crispy homemade fries in under 15 minutes, a golden roast chicken in 25 minutes and perfectly caramelized roasted vegetables, without the lingering fried-food smell that clings to your kitchen and your clothes for hours. Today\'s models add Wi-Fi, app control and up to 50 presets.',
    how_to_choose_title: 'How to choose the right air fryer',
    how_to_choose_intro: 'In 2026 the air fryer market offers hundreds of options, from about $50 for budget models to more than $600 for premium machines. The right one depends entirely on your situation: household size, budget, counter space and the kinds of meals you cook most often. This guide walks you through the decision step by step.',
    capacity_title: 'Capacity: the deciding factor',
    capacity_text: 'Capacity is arguably the most important spec when you buy an air fryer, because it determines what you can cook. For one person or a couple, an air fryer of about 2 to 3 quarts (2–3 L), which holds roughly 2.6 to 4 lb (1.2–1.8 kg) of fries, is plenty. These compact models take up little counter space and use less electricity. Brands like Philips and Cosori offer excellent options in this category, ideal for small apartments and studios. For a family of three or four, go for about 4 to 5 quarts (4–5 L), or 4.4 to 6.6 lb (2–3 kg) of food. These models strike a great balance between convenience and energy use: you can cook a whole chicken, make fries for the whole family and even cook several portions at once. For larger families of five or more, invest in a 6.3- to 8.5-quart (6–8 L) model or consider a dual-basket design. Premium models like the Philips Airfryer XXL offer that capacity while keeping a reasonable footprint. Air fryers over 9.5 quarts (9 L) are best for households that regularly cook for big gatherings, or even for restaurants. Keep in mind that usable capacity is typically 80 to 90% of the advertised total, since you need to leave room for air to circulate around the food.',
    power_title: 'Power and heating technology',
    power_text: 'Power, measured in watts (W), has a direct effect on cooking speed and on how well food sears. Most modern air fryers draw between 800 W and 2,000 W. A 1,200 to 1,500 W model is a good fit for everyday home use. Premium models, especially professional-grade or semi-pro air fryers, can reach 2,200 W or more, for noticeably faster cooking and more even heat. Look for air fryers with Rapid Air technology or an equivalent system, such as dual-zone convection. Philips promises ultra-fast heating with its QuickCook technology, while other manufacturers use their own optimized airflow systems. Some high-end models have dual heating elements (top and bottom) or even four heating zones for more even cooking, which matters most when you cook pieces of different sizes. If you cook often, a minimum of 1,400 W keeps cooking times reasonable even with a full basket. Knowing the wattage also helps you predict cooking times and your electric bill. Models sold in Europe are built for 230 V, so check that the version on your Amazon store is rated for 120 V.',
    features_title: 'Features and smart connectivity',
    features_text: 'Modern air fryers go well beyond simple manual dials. The best models include 10 to 50 presets for different foods: fries, chicken wings, roasted vegetables, fritters, dehydrated fruit and much more. Presets take the guesswork out of cooking by setting the right temperature and time automatically. Wi-Fi and dedicated smartphone apps are increasingly common in 2026. With an app, you can start cooking remotely, check progress in real time and get a notification when dinner is ready. That\'s especially handy in busy households where people get home at different times. However, connectivity typically adds $60 to $150 to the price. If you\'re practical, a simple touch panel with an LED display and a programmable timer is all you need. Models with a keep-warm function are great for serving people at different times. Also look for a rapid-preheat program and the ability to save custom settings for your favorite recipes. The best apps also offer recipe ideas and step-by-step cooking guidance.',
    materials_title: 'Materials and build quality',
    materials_text: 'An air fryer is an investment that should last 5 to 8 years with proper care, so materials matter. The cooking basket needs a safe, durable nonstick coating, ideally PTFE-free and BPA-free, or at a minimum one that meets European safety requirements (CE marking); in the US, also look for a UL or ETL listing mark. The best brands use ceramic or water-based coatings that last longer and resist peeling. The outer housing should be sturdy: stainless steel or heat-resistant plastic. Stainless steel is more durable but heavier and usually pricier. High-quality, heat-resistant food-grade plastic (ABS) is fine if it\'s thick enough and comes from a reputable manufacturer. Handles should be ergonomic and insulated to prevent burns. Check that the basket and accessories are dishwasher-safe: it saves a lot of time. German brands like Siemens and Bosch typically offer 3- to 5-year warranties, a sign of confidence in their durability, while other European manufacturers often offer 2 to 3 years. Warranty terms vary by country, so check the one that applies where you buy. Read independent reviews from appliance testing organizations to get a sense of real-world longevity.',
    noise_title: 'Noise level',
    noise_text: 'Noise is often overlooked until the day you bring the air fryer home: these appliances run a high-speed fan, so some sound is unavoidable. Most models produce 65 to 80 decibels (dB) while cooking. For reference, normal conversation is about 60 dB, street traffic about 70 dB and a vacuum cleaner about 75 dB. An air fryer at 65 dB is fairly quiet for this type of appliance, while 80 dB gets genuinely annoying, especially early in the morning or late at night. Some premium models, including the “EcoMode” or quiet versions from Philips and other manufacturers, bring noise down to 62–65 dB by giving up a little cooking speed. If you live in an apartment or you\'re sensitive to noise, it\'s worth checking the decibel rating before you buy. Households with young children or noise-sensitive pets should pay particular attention. Owner reviews that mention noise give you a real-world picture that spec sheets can\'t.',
    energy_title: 'Energy use and savings',
    energy_text: 'An air fryer\'s energy use is worth running the numbers on. We use an example rate of 20 cents per kWh here; check the rate on your utility bill, since it varies widely by state and utility. A 1,500 W air fryer running for 30 minutes uses 0.75 kWh, or about 15 cents of electricity. A traditional oven (2,500 to 3,500 W) running for 45 minutes for the same meal costs about 38 to 53 cents, so the air fryer is already cheaper to run. Over a year, if you use your air fryer five times a week (a typical family estimate), that\'s about 195 uses and 146.25 kWh, or roughly $29 in electricity. An oven used just three times a week would cost about $60 to $80 a year for the same results. Actual savings depend on how much oven cooking the air fryer really replaces, and you also save on cooking oil (cut out or sharply reduced) and prep time. Over five years of ownership, an air fryer can come close to paying for itself through energy savings alone.',
    mistakes_title: 'Common mistakes to avoid',
    mistakes_intro: 'Many people buy an air fryer with unrealistic expectations, or underuse it because they don\'t know the best practices. Here are the most common mistakes new owners make, and how to avoid them.',
    mistakes: [
      {
        title: 'Overfilling the basket',
        desc: 'Mistake number one: overcrowding. Air needs to circulate freely around every piece of food. Filling the basket to the brim seriously hurts cooking quality: food in the middle and at the bottom stays soggy while the top burns. Fill it to about 70 to 80% at most, or cook in two batches. For fries, shake the basket halfway through for more even results.',
      },
      {
        title: 'Skipping the preheat',
        desc: 'Unlike an oven, an air fryer preheats fast: 3 to 5 minutes at most. Still, many people skip this step and end up with longer cooking times and a less-than-ideal texture. Preheating creates a stable, hot environment where the Maillard reaction starts the moment food goes in.',
      },
      {
        title: 'Using the wrong amount of oil',
        desc: 'It\'s a myth that air fryers need no oil at all. A small amount (1 to 2 teaspoons) makes a big difference and gives you crispier results. Too little oil leaves food dry and pale; too much leaves grease pooling at the bottom of the basket. An oil spray spreads it evenly.',
      },
      {
        title: 'Ignoring the manufacturer\'s instructions',
        desc: 'Every air fryer behaves a little differently. Cooking times, ideal temperatures and basket placement vary from model to model. Read the manual, start with the suggested presets, then adjust to your taste. Premium manufacturers include detailed guides with cooking charts.',
      },
      {
        title: 'Skipping regular cleaning',
        desc: 'Oil and food residue build up fast. An air fryer that isn\'t cleaned starts to smoke, develops odors and loses performance. Clean it after every use: on most models the basket and tray are dishwasher-safe. Wipe the outside with a damp cloth. A monthly deep clean with a vinegar solution removes stubborn buildup.',
      },
      {
        title: 'Cooking wet food without prepping it',
        desc: 'Water and oil don\'t mix. If you\'re thawing fish or chicken, pat it dry thoroughly before cooking. Excess moisture creates steam instead of the dry heat that air frying needs. Let marinated foods drain well before they go in.',
      },
    ],
    maintenance_title: 'Care and cleaning for a longer life',
    maintenance_text: 'Regular care determines how long an air fryer lasts. After each use, let it cool for 10 to 15 minutes, then remove the basket and drip tray. Rinse them in warm, soapy water or put them in the dishwasher. The nonstick coating can wear over time, especially if you scrub hard with abrasive cleaners, so use a soft sponge and gentle products. Never submerge the main unit in water. If residue builds up inside, wipe it with a damp cloth and a little white vinegar. Every 3 to 4 months, gently brush the upper heating element with a soft brush to remove dust. Make sure the vents stay clear. Store the air fryer in a dry, dust-free spot. Many manufacturers sell affordable replacement baskets for when the original coating eventually wears out. A well-maintained air fryer can easily last 7 to 10 years, which makes it excellent value over its lifetime.',
    recipes_title: 'Easy recipes to get started',
    recipes_intro: 'These five essential recipes show off what your air fryer can do, and they\'re perfect if you\'re just getting to know the appliance.',
    recipes: [
      {
        title: 'Crispy homemade fries',
        desc: 'The essential classic. Cut medium potatoes into sticks about 1/4 inch (6–7 mm) thick. Soak them in cold water for 20 minutes to remove the starch, then dry them thoroughly. Toss with 1 teaspoon of peanut oil, salt and paprika. Cook at 400°F (200°C) for 18 to 22 minutes, depending on thickness, shaking the basket halfway through. The result: golden fries, crisp outside and fluffy inside, without the fried smell lingering in your kitchen.',
      },
      {
        title: 'Golden roast chicken',
        desc: 'The classic Sunday dinner, reinvented. A whole chicken (3.3 to 4.4 lb, or 1.5–2 kg) cooks at 350°F (180°C) for 45 to 50 minutes. Rub it first with softened butter mixed with fresh herbs (thyme, rosemary, parsley). The result: a crisp, golden outside and a juicy inside, without the dryness you often get in a conventional oven. Roast root vegetables (carrots, parsnips) separately.',
      },
      {
        title: 'Roasted mixed vegetables',
        desc: 'Zucchini, eggplant, red and yellow bell peppers: cut them into even 3/4-inch (2 cm) cubes. Drizzle lightly with olive oil and season with salt and pepper. Cook at 375°F (190°C) for 15 to 18 minutes. The result: tender insides with lightly caramelized edges and flavor concentrated by the intense dry heat. A great side for any main course.',
      },
      {
        title: 'Crispy ham and cheese croquettes',
        desc: 'You\'ll need 7 oz (200 g) of béchamel sauce, 3.5 oz (100 g) of grated Swiss cheese (Emmental), 1.8 oz (50 g) of diced ham and a pinch of nutmeg. Shape into small logs, dip in beaten egg, then coat in fine breadcrumbs. Refrigerate for 30 minutes. Cook at 375°F (190°C) for 12 to 14 minutes. The result: a crisp, golden outside and a rich, melty center. Serve with tomato sauce or mayonnaise.',
      },
      {
        title: 'Homemade veggie chips',
        desc: 'Use a mandoline to slice potatoes, beets and carrots thin (about 1/8 inch, or 2–3 mm). Soak for 10 minutes, then dry completely. Toss with a mix of oil and salt. Cook at 350°F (180°C) for 10 to 12 minutes, in two batches. The result: paper-thin, crunchy chips, a healthier snack with no saturated frying oil. Store them in an airtight jar for easy snacking.',
      },
    ],
    verdict_title: 'The bottom line',
    verdict_text: 'An air fryer is a smart buy for any household that values health, convenience and energy efficiency. Choose a capacity that fits your household, enough power (1,400 W minimum) and the features you\'ll actually use rather than extras you won\'t, and it will change the way you cook every day. Homemade fries rival the deep-fried kind, cook a couple of minutes faster and leave no lingering smell. Vegetables become genuinely delicious. Prep time drops dramatically. Over five years, you can save well over $100 in electricity and cooking oil at our example rate of 20 cents per kWh. Granted, an air fryer doesn\'t fully replace an oven for some jobs (big batches, bread, elaborate pastries), but it quickly becomes your go-to appliance for 70 to 80% of everyday meals. For apartment dwellers short on space, energy-conscious families and anyone who loves simple, fast, genuinely good food, an air fryer is a purchase you won\'t regret.',
  },
  ca: {
    intro_title: 'Understanding the Air Fryer Revolution',
    intro_text: 'The air fryer has transformed home cooking since it went mainstream. This kitchen appliance cooks food evenly by circulating superheated air at high speed, up to 200°C (400°F), creating a crisp texture without deep-frying in oil. By 2026, air fryers have become a staple in millions of households, offering a healthier, faster and more convenient alternative to traditional cooking methods. Despite a common misconception, an air fryer doesn\'t work by radiation or microwaves: it\'s essentially a compact, high-performance convection oven. Air moves around your food at very high speed, triggering the Maillard reaction that produces the golden, crisp exterior everyone loves. For a busy family, that means homemade fries that rival takeout in under 15 minutes, a perfectly roasted chicken in 25 minutes and beautifully caramelized roasted vegetables, without the fried smell that clings to clothes and curtains for hours. The technology has matured dramatically, with models now offering Wi-Fi connectivity, preset programs for hundreds of foods and energy consumption 30 to 40% lower than a traditional oven.',
    how_to_choose_title: 'How to Choose the Right Air Fryer',
    how_to_choose_intro: 'The air fryer market in 2026 offers hundreds of options, from budget models around $60 to premium models over $800. The right one depends entirely on your situation: household size, budget, available counter space and the kinds of meals you make most often. This guide will help you decide with confidence.',
    capacity_title: 'Capacity: The Primary Decision Factor',
    capacity_text: 'Capacity is arguably the most important criterion when you buy an air fryer, because it determines what you can cook. For one person or a couple, a 2 to 3 L (2.1 to 3.2 qt) air fryer, enough for about 1.2 to 1.8 kg (2.5 to 4 lb) of fries, is plenty. These compact models take up little counter space and use less electricity. Brands like Philips and Cosori offer excellent options in this category, ideal for condos and studio apartments. For a family of three or four, choose 4 to 5 L (4.2 to 5.3 qt), about 2 to 3 kg (4.5 to 6.5 lb) of food. These air fryers strike a good balance between convenience and energy use: you can cook a whole chicken, make fries for the whole family and even cook several portions at once. For larger families of five or more, invest in a 6 to 8 L (6.3 to 8.5 qt) model or consider a dual-basket design. Premium models like the Philips Airfryer XXL offer this capacity while keeping reasonable dimensions. Air fryers over 9 L (9.5 qt) mainly suit restaurants or households that regularly cook for big gatherings. Keep in mind that usable capacity is typically 80 to 90% of the advertised capacity, since you need to leave room for air to circulate around the food.',
    power_title: 'Power and Heating Technology',
    power_text: 'Power, measured in watts (W), directly affects cooking speed and how well food browns. Most modern air fryers draw between 800 and 2,000 W. A 1,200 to 1,500 W model is excellent value for everyday home use. Premium models, especially professional-grade ones, can reach 2,200 W or more, for much faster cooking and better heat distribution. Keep in mind that a standard Canadian household circuit (120 V, 15 A) delivers up to 1,800 W, so check the wattage on the listing. Look for air fryers with Rapid Air technology or an equivalent system such as dual-zone convection heating. Philips pioneered QuickCook technology, which promises ultra-fast heating, while other manufacturers offer their own proprietary systems. Some top-tier models have two heating elements (top and bottom) or even four heating zones for evenly cooked food, which matters when you cook pieces of different sizes. If you cook often, look for at least 1,400 W to keep cooking times reasonable even with a full basket. Understanding wattage helps you predict cooking times and your electricity bill accurately.',
    features_title: 'Features and Smart Connectivity',
    features_text: 'Modern air fryers go far beyond simple manual controls. The best models include 10 to 50 preset programs for different foods: fries, chicken wings, roasted vegetables, fish, dehydrating and much more. These programs take the guesswork out of cooking by setting the right temperature and time automatically. Wi-Fi and dedicated smartphone apps are increasingly common in 2026. With an app, you can start cooking remotely, monitor progress in real time and get a notification when the meal is ready. That\'s a real plus in busy households where people get home at different times. However, smart connectivity typically adds $80 to $250 to the price. For practical users, a simple touch panel with an LED display and a programmable timer is all you need. Keep-warm functions are great when people eat at different times. Also check for a rapid preheat program and the ability to save custom settings for your favourite recipes. The best apps also offer recipe suggestions and cooking guidance.',
    materials_title: 'Materials and Build Quality',
    materials_text: 'An air fryer is an investment that should last five to eight years with proper care, so materials matter. The cooking basket needs a safe, durable non-stick coating, ideally PFOA-free and BPA-free, and the appliance should at least carry the required safety marks (CE in Europe; in Canada, look for a recognized certification mark such as CSA, cUL or cETL). Premium brands use ceramic or water-based coatings that outlast traditional PTFE and resist peeling. The outer housing should be sturdy: either stainless steel or heat-resistant, food-grade plastic. Stainless steel is more durable but adds weight and cost. High-quality, heat-resistant ABS plastic is acceptable if it\'s thick enough and comes from a reputable manufacturer. Handles should be ergonomic and insulated to prevent burns. Check that the basket and accessories are dishwasher-safe: it saves a lot of time. German brands like Siemens and Bosch typically offer three- to five-year warranties, a sign of confidence in their durability, while other European manufacturers often offer two to three years. Read reviews from independent appliance testing organizations to gauge real-world longevity.',
    noise_title: 'Noise Level Considerations',
    noise_text: 'Noise is often overlooked until the day you buy: air fryers rely on high-speed fans, so some sound is unavoidable. Most models produce 65 to 80 decibels (dB) while cooking. For reference, normal conversation is about 60 dB, traffic noise 70 dB and a vacuum cleaner 75 dB. An air fryer at 65 dB is relatively quiet for this type of appliance, while 80 dB gets genuinely annoying, especially early in the morning or late in the evening. Some premium models, particularly "EcoMode" or "silent" versions from Philips and other manufacturers, bring noise down to 62 to 65 dB by giving up a little cooking speed. If you live in an apartment or are sensitive to noise, check the decibel rating before you buy. Households with young children or noise-sensitive pets should pay particular attention. Owner reviews that mention noise give you a real-world picture that spec sheets can\'t.',
    energy_title: 'Energy Consumption and Cost Savings',
    energy_text: 'In 2026, an air fryer\'s energy use is worth a quick calculation. A 1,500 W air fryer running for 30 minutes uses 0.75 kWh, or about 8¢ of electricity at an example rate of 10¢ per kWh. A traditional oven (2,500 to 3,500 W) running for 45 minutes to cook the same meal uses about 1.9 to 2.6 kWh, or 19¢ to 26¢, so the air fryer is clearly cheaper to run. Over a year, using your air fryer five times a week (a typical family estimate) adds up to about 195 sessions and 146.25 kWh, or roughly $15 of electricity. An oven used just three times a week for the same results costs about $30 to $40 a year. That\'s a saving of about $15 to $25 a year, plus savings on cooking oil (cut out or greatly reduced) and prep time. Your actual rate depends on your province and your utility, so check your electricity bill. Over five years, the energy savings alone can cover much of the cost of a budget model.',
    mistakes_title: 'Common Mistakes to Avoid',
    mistakes_intro: 'Many new owners start out with unrealistic expectations or underuse their air fryer because they don\'t know how to get the most out of it. Here are the most common beginner mistakes and how to avoid them.',
    mistakes: [
      {
        title: 'Overfilling the basket',
        desc: 'Mistake number one: overcrowding. Air has to circulate freely around every piece of food. Filling the basket to the brim dramatically reduces cooking quality: food in the middle and at the bottom stays soggy while the top burns. Fill it to about 70 to 80% at most, or cook in two batches. For fries, shake the basket halfway through for more even results.',
      },
      {
        title: 'Skipping the preheat',
        desc: 'Unlike traditional ovens, air fryer preheating is rapid: 3-5 minutes maximum. However, many users skip this step, resulting in longer cooking times and suboptimal texture. Preheating creates a stable thermal environment where the Maillard reaction initiates immediately upon food contact.',
      },
      {
        title: 'Using incorrect oil quantities',
        desc: 'It\'s a myth that air fryers need no oil at all. A small amount (1 to 2 teaspoons) noticeably improves results and makes food crispier. Too little oil gives dry, pale results; too much leaves grease pooling at the bottom of the basket. An oil mister or spray bottle spreads it evenly.',
      },
      {
        title: 'Ignoring manufacturer instructions',
        desc: 'Every air fryer has its own quirks. Cooking times, ideal temperatures and basket positions vary from model to model. Read the manual, start with the suggested programs, then adjust to your taste. Premium manufacturers provide detailed booklets with cooking charts.',
      },
      {
        title: 'Neglecting regular cleaning',
        desc: 'Oil and food residue accumulate rapidly. Uncleaned air fryers produce smoke, develop odours, and performance diminishes. Clean after each use: most baskets and trays are dishwasher-safe. The external body cleans with a damp cloth. Deep cleaning monthly with vinegar solution eliminates stubborn buildup.',
      },
      {
        title: 'Cooking wet foods without preparation',
        desc: 'Water and oil don\'t mix. If defrosting fish or poultry, dry thoroughly before cooking. Excess moisture creates steam rather than the dry heat necessary for optimal cooking. Marinated foods must drain thoroughly before preparation.',
      },
    ],
    maintenance_title: 'Maintenance and Cleaning for Maximum Lifespan',
    maintenance_text: 'Regular maintenance determines an air fryer\'s longevity. After each use, allow 10-15 minutes cooling, then remove basket and collection tray. Rinse with warm soapy water or place in the dishwasher. The non-stick coating can deteriorate over time, especially with vigorous abrasive scrubbing. Use soft sponges and gentle cleaning products. Never immerse the main body in water. Wipe interior surfaces with a damp cloth and white vinegar solution if residue accumulates. Every 3-4 months, clean the upper heating element gently with a soft brush to remove dust. Ensure ventilation grilles remain unobstructed. Store in a dry, dust-protected location. Many manufacturers offer affordable replacement basket kits when original coatings eventually wear. A well-maintained air fryer easily lasts 7-10 years, providing excellent value across its lifespan.',
    recipes_title: 'Essential Recipes for Getting Started',
    recipes_intro: 'These five essential recipes show off your air fryer\'s versatility and are perfect if you\'re just getting started.',
    recipes: [
      {
        title: 'Homemade Crispy Fries',
        desc: 'The essential classic. Cut medium potatoes into sticks about 6 to 7 mm (¼ in.) thick. Soak them in cold water for 20 minutes to remove the starch, then dry them thoroughly. Toss with 1 teaspoon of peanut oil, salt and paprika. Cook at 200°C (400°F) for 18 to 22 minutes depending on thickness, shaking the basket halfway through. The result: golden fries, crisp outside and fluffy inside, that rival your favourite takeout, without the fried smell lingering in your kitchen.',
      },
      {
        title: 'Golden Roasted Chicken',
        desc: 'Sunday dinner, reimagined. A whole chicken (1.5 to 2 kg, about 3¼ to 4½ lb) cooks at 180°C (350°F) for 45 to 50 minutes. Rub it first with softened butter mixed with fresh herbs (thyme, rosemary, parsley). The result: crisp, golden skin and juicy, tender meat, without the dryness you often get from oven roasting. Cook root vegetables (carrots, parsnips) separately on another tray.',
      },
      {
        title: 'Roasted Mixed Vegetables',
        desc: 'Zucchini, eggplant, red and yellow peppers: cut them into even 2 cm (¾ in.) cubes. Drizzle lightly with olive oil and season with salt and pepper. Cook at 190°C (375°F) for 15 to 18 minutes. The result: tender inside with lightly caramelized edges, the flavour intensified by the strong, dry heat. A great side for any main course.',
      },
      {
        title: 'Crispy Cheese and Ham Croquettes',
        desc: 'Mix 200 g of béchamel sauce, 100 g of grated old cheddar, 50 g of diced ham and a pinch of nutmeg. Shape into small logs, dip in beaten egg, then coat in fine breadcrumbs. Refrigerate for 30 minutes. Cook at 190°C (375°F) for 12 to 14 minutes. The result: a golden, crisp outside and a rich, melting centre. Serve with tomato sauce or mayonnaise.',
      },
      {
        title: 'Homemade Vegetable Chips',
        desc: 'Use a mandoline to slice potatoes, beets and carrots thinly (2 to 3 mm, about ⅛ in.). Soak for 10 minutes, then dry completely. Toss with a little oil and salt. Cook at 180°C (350°F) for 10 to 12 minutes, in two batches. The result: paper-thin, crispy chips, healthier and without saturated frying oil. Store them in airtight jars for easy snacking.',
      },
    ],
    verdict_title: 'Our Final Verdict',
    verdict_text: 'An air fryer is a smart investment for any household that values health, convenience and energy efficiency. With a capacity that suits your household, enough power (at least 1,400 W) and the features you\'ll actually use rather than unnecessary extras, an air fryer changes the way you cook every day. Homemade fries rival takeout, cook a couple of minutes faster and leave no lingering smell. Vegetables become genuinely delicious when air-fried. Prep times drop dramatically. Over five years, the savings on electricity and cooking oil can reach $100 or more at an example rate of 10¢/kWh. Of course, an air fryer doesn\'t fully replace a traditional oven for some things (cooking in large quantities, breads, complex pastries), but it quickly becomes your main cooking appliance for 70 to 80% of everyday meals. For apartment and condo dwellers short on space, energy-conscious families and anyone who appreciates simple, fast, genuinely good food, an air fryer is a purchase you won\'t regret.',
  }
}


/** The guide is the air fryer category page (/cuisine-connectee/airfryers redirects here). */
const GUIDE_CATEGORY = 'airfryers'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const dict = await getDictionary(safeLang)
  const head = getCategoryHead(GUIDE_CATEGORY, safeLang)
  return buildPageMetadata({
    lang: safeLang,
    path: '/guides/airfryers',
    title: `${head?.title ?? dict.guide_title} | Home Nura`,
    description: head?.description ?? dict.guide_subtitle,
    type: 'article',
    modifiedTime: `${categoryModifiedIso(GUIDE_CATEGORY, SITE_LAST_UPDATED_ISO)}T00:00:00Z`,
  })
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

  // ItemList Schema with embedded Product entries
  const itemListSchema = buildProductListSchema(
    products,
    lang,
    dict.guide_title,
    `https://homenura.com/${lang}/guides/airfryers`
  )

  const head = getCategoryHead(GUIDE_CATEGORY, lang)
  const faqs = getCategorySpecificFaq(GUIDE_CATEGORY, lang) ?? dict.faq
  const modifiedIso = categoryModifiedIso(GUIDE_CATEGORY, SITE_LAST_UPDATED_ISO)
  const lastUpdatedText = `${lastUpdatedLabel[lang] ?? lastUpdatedLabel.fr} ${formatLastUpdated(lang, modifiedIso)}`

  // Comparison table product mapping
  const comparisonProducts = products.map(p => ({
    name: p.title,
    priceNumeric: p.priceNumeric,
    visual: p.visual,
    url: p.url,
    capacity: p.capacity,
    nuraScore: p.nuraScore,
    bestFor: p.bestFor,
    badge: p.badge,
    pros: p.pros,
    cons: p.cons,
    asin: p.asin,
  }))

  // Comparison table dictionary
  const tableDict = {
    table_title: dict.table_title,
    table_subtitle: dict.table_subtitle,
    col_product: dict.col_product,
    col_nura_score: dict.col_nura_score,
    col_capacity: dict.col_capacity,
    col_best_for: dict.col_best_for,
    col_action: dict.col_action,
    col_pros: dict.col_pros,
    col_cons: dict.col_cons,
    buy_button: dict.buy_button,
    show_details: dict.show_details,
    hide_details: dict.hide_details,
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-clip">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar currentLang={lang} />

      <main id="main">
      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-600 uppercase bg-brand-50 rounded-full">
            {EXPERT_GUIDE_LABEL[resolveLang(lang)]}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
            {head?.h1 ?? dict.guide_title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.guide_subtitle}
          </p>
          <time
            dateTime={modifiedIso}
            className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 rounded-full"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 8v4l3 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            {lastUpdatedText}
          </time>
          <AuthorByline lang={lang} className="justify-center mt-4 text-sm" />
        </div>
      </section>

      <ProductSceneBanner photo={products[0]?.visual.photo} />

      <BlackFridayHubLink lang={lang} categorySlug="airfryers" />

      {/* Trust Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-3xl p-8 md:p-12 border border-brand-100">
          <h2 className="text-2xl font-bold mb-4 text-brand-900">{dict.why_trust}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-brand-600 mb-2">12+</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_models_tested}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-brand-600 mb-2">5</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_hours_testing}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-brand-600 mb-2">10</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_european_markets}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Guide Content - Intro (editorial opening) */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-20">
        <Kicker className="mb-6">
          {lang === 'fr' ? 'L\'Édito' : lang === 'de' ? 'Editorial' : lang === 'es' ? 'Editorial' : lang === 'it' ? 'Editoriale' : lang === 'nl' ? 'Redactioneel' : lang === 'pl' ? 'Od redakcji' : lang === 'sv' ? 'Redaktionellt' : lang === 'us' ? 'Editor\'s note' : lang === 'ca' ? 'Editorial' : 'Editorial'}
        </Kicker>
        <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">{content.intro_title}</h2>
        <div className="h-[2px] w-16 bg-brand-600 mb-10"></div>
        <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85] [&::first-letter]:text-[5rem] [&::first-letter]:font-bold [&::first-letter]:text-brand-600 [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:leading-[0.85] [&::first-letter]:mt-2">
          {content.intro_text}
        </p>
      </section>

      {/* Featured Products Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4">
                <ProductHeroVisual visual={product.visual} title={product.title} badge={product.badge} lang={lang} />
              </div>
              <div className="px-5 pb-5">
                <h3 className="text-base font-bold text-slate-900 mb-1 line-clamp-2">{product.title}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${product.nuraScore >= 9 ? 'bg-emerald-100 text-emerald-700' : 'bg-brand-100 text-brand-700'}`}>
                    {product.nuraScore}/10
                  </span>
                </div>
                <AffiliateLink
                  href={product.url}
                  asin={product.asin}
                  productName={product.title}
                  priceNumeric={product.priceNumeric}
                  position={i + 1}
                  location="product_card"
                  placement="picks"
                  lang={lang}
                  className="block w-full rounded-full bg-brand-600 px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-brand-700 transition-colors"
                >
                  {dict.buy_button}
                </AffiliateLink>
              </div>
            </div>
          ))}
        </div>
        <AmazonDisclosure lang={lang} className="mt-6 text-center text-xs text-slate-500" />
      </section>

      {/* How to Choose — editorial dossier with 6 numbered chapters */}
      <section className="max-w-3xl mx-auto px-6 pt-16 md:pt-20 pb-10">
        <div className="text-center mb-14">
          <Kicker className="mb-5">
            {lang === 'fr' ? 'Le Guide d\'Achat' : lang === 'de' ? 'Der Kaufratgeber' : lang === 'es' ? 'La Guía de Compra' : lang === 'it' ? 'La Guida all\'Acquisto' : lang === 'nl' ? 'De Koopgids' : lang === 'pl' ? 'Poradnik zakupowy' : lang === 'sv' ? 'Köpguiden' : lang === 'us' ? 'Buying guide' : lang === 'ca' ? 'The Buyer\'s Guide' : 'The Buyer\'s Guide'}
          </Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">{content.how_to_choose_title}</h2>
          <div className="h-[2px] w-16 bg-brand-600 mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">{content.how_to_choose_intro}</p>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {[
            { title: content.capacity_title, body: content.capacity_text },
            { title: content.power_title, body: content.power_text },
            { title: content.features_title, body: content.features_text },
            { title: content.materials_title, body: content.materials_text },
            { title: content.noise_title, body: content.noise_text },
            { title: content.energy_title, body: content.energy_text },
          ].map((chap, i) => (
            <article key={i} className="py-12 md:py-14 first:pt-10">
              <Kicker className="mb-4">
                {CRITERION_LABEL[resolveLang(lang)]} · {romanNumeral(i)}
              </Kicker>
              <h3 className="text-2xl md:text-[1.75rem] font-bold tracking-tight leading-[1.2] text-slate-900 mb-5">{chap.title}</h3>
              <div className="h-px w-10 bg-brand-600 mb-6"></div>
              <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85]">{chap.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Common Mistakes — editorial cards with numbered labels */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="text-center mb-14">
          <Kicker variant="amber" className="mb-5">
            {lang === 'fr' ? 'Les Pièges' : lang === 'de' ? 'Die Fallen' : lang === 'es' ? 'Las Trampas' : lang === 'it' ? 'Le Insidie' : lang === 'nl' ? 'De Valkuilen' : lang === 'pl' ? 'Pułapki' : lang === 'sv' ? 'Fallgropar' : lang === 'us' ? 'Mistakes to avoid' : lang === 'ca' ? 'The Pitfalls' : 'The Pitfalls'}
          </Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">{content.mistakes_title}</h2>
          <div className="h-[2px] w-16 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">{content.mistakes_intro}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {content.mistakes.map((mistake, index) => (
            <div key={index} className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-300">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500"></div>
              <Kicker variant="amber" size="sm" className="mb-3 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </Kicker>
              <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">{mistake.title}</h3>
              <div className="h-px w-8 bg-amber-500 mb-4"></div>
              <p className="text-sm text-slate-600 leading-[1.75]">{mistake.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Section — editorial feature */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
        <Kicker className="mb-6">
          {lang === 'fr' ? 'L\'Entretien' : lang === 'de' ? 'Die Pflege' : lang === 'es' ? 'El Mantenimiento' : lang === 'it' ? 'La Manutenzione' : lang === 'nl' ? 'Het Onderhoud' : lang === 'pl' ? 'Konserwacja' : lang === 'sv' ? 'Skötsel' : lang === 'us' ? 'Care and cleaning' : lang === 'ca' ? 'Maintenance' : 'Maintenance'}
        </Kicker>
        <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">{content.maintenance_title}</h2>
        <div className="h-[2px] w-16 bg-brand-600 mb-10"></div>
        <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85]">{content.maintenance_text}</p>
      </section>

      {/* Recipes Section — editorial cookbook */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="text-center mb-14">
          <Kicker className="mb-5">
            {lang === 'fr' ? 'Le Cahier Recettes' : lang === 'de' ? 'Das Rezeptbuch' : lang === 'es' ? 'El Recetario' : lang === 'it' ? 'Il Ricettario' : lang === 'nl' ? 'Het Receptenboek' : lang === 'pl' ? 'Przepisy' : lang === 'sv' ? 'Receptboken' : lang === 'us' ? 'Recipes' : lang === 'ca' ? 'The Recipe Book' : 'The Recipe Book'}
          </Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">{content.recipes_title}</h2>
          <div className="h-[2px] w-16 bg-brand-600 mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">{content.recipes_intro}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.recipes.map((recipe, index) => (
            <div key={index} className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-600 mb-3 tabular-nums">
                N° {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand-700 transition-colors">{recipe.title}</h3>
              <div className="h-px w-8 bg-brand-600 mb-4"></div>
              <p className="text-[13px] text-slate-600 leading-[1.75]">{recipe.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verdict — dark editorial panel */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-16 text-white shadow-2xl">
          <div className="absolute top-0 left-0 h-[3px] w-24 bg-brand-400"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl"></div>
          <div className="relative">
            <Kicker variant="blue-light" className="mb-6">
              {lang === 'fr' ? 'Verdict' : lang === 'de' ? 'Urteil' : lang === 'es' ? 'Veredicto' : lang === 'it' ? 'Verdetto' : lang === 'nl' ? 'Eindoordeel' : lang === 'pl' ? 'Werdykt' : lang === 'sv' ? 'Omdöme' : lang === 'us' ? 'Verdict' : lang === 'ca' ? 'Verdict' : 'Verdict'}
            </Kicker>
            <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] mb-6 max-w-2xl">{content.verdict_title}</h2>
            <div className="h-[2px] w-16 bg-brand-400 mb-8"></div>
            <p className="text-lg md:text-xl leading-[1.75] text-slate-200 max-w-2xl">{content.verdict_text}</p>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200">
              <div className="aspect-square relative overflow-hidden">
                <ProductVisual {...product.visual} label={product.title} />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-bold bg-amber-400 text-amber-900 rounded-full">{product.badge}</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-900 mb-1 line-clamp-2">{product.title}</h3>
                <div className="flex items-center justify-between">
                  <AffiliateLink
                    href={product.url}
                    asin={product.asin}
                    productName={product.title}
                    priceNumeric={product.priceNumeric}
                    position={i + 1}
                    location="article_bottom"
                    placement="card"
                    lang={lang}
                    className="px-4 py-1.5 bg-brand-600 text-white text-xs font-bold rounded-full hover:bg-brand-700 transition-colors"
                  >
                    Amazon
                  </AffiliateLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AmazonDisclosure lang={lang} className="mt-6 text-center text-xs text-slate-500" />
      </section>

      {/* Product Comparison — editorial header */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-14">
          <Kicker className="mb-5">
            {lang === 'fr' ? 'La Sélection' : lang === 'de' ? 'Die Auswahl' : lang === 'es' ? 'La Selección' : lang === 'it' ? 'La Selezione' : lang === 'nl' ? 'De Selectie' : lang === 'pl' ? 'Nasz wybór' : lang === 'sv' ? 'Urvalet' : lang === 'us' ? 'Our picks' : lang === 'ca' ? 'The Selection' : 'The Selection'}
          </Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">{dict.section_title}</h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">{dict.section_subtitle}</p>
          <div className="h-[2px] w-16 bg-brand-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} id={`asin-${product.asin}`} className="scroll-mt-32">
              <ProductCard
                name={product.title}
                priceNumeric={product.priceNumeric}
                visual={product.visual}
                affiliateLink={product.url}
                asin={product.asin}
                buyButtonText={dict.buy_button}
                badge={product.badge}
                lang={lang}
                capacity={product.capacity}
                bestFor={product.bestFor}
                kicker={productKicker({ type: 'airfryers', lang: resolveLang(lang), bestFor: product.bestFor })}
              />
            </div>
          ))}
        </div>
        <AmazonDisclosure lang={lang} className="mt-6 text-center text-xs text-slate-500" />
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <ComparisonTable
          products={comparisonProducts}
          dict={tableDict}
          lang={lang}
        />
      </section>

      <MarketPagesHubList lang={lang} path="/guides/airfryers" />

      <IndependentSources
        categorySlug="airfryers"
        categoryTitle={getCategory('airfryers')?.title[resolveLang(lang)] ?? ''}
        lang={resolveLang(lang)}
      />

      {/* Internal Links Section — editorial "Also read" */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-24 border-t border-slate-200">
        <div className="text-center mb-14">
          <Kicker className="mb-4">
            {lang === 'fr' ? 'À lire aussi' : lang === 'de' ? 'Auch lesen' : lang === 'es' ? 'Leer también' : lang === 'it' ? 'Leggi anche' : lang === 'nl' ? 'Lees ook' : lang === 'pl' ? 'Przeczytaj też' : lang === 'sv' ? 'Läs också' : lang === 'us' ? 'Read next' : lang === 'ca' ? 'Also read' : 'Also read'}
          </Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-slate-900 mb-4">
            {lang === 'fr' ? 'Guides connexes' : lang === 'de' ? 'Verwandte Ratgeber' : lang === 'es' ? 'Guías relacionadas' : lang === 'it' ? 'Guide correlate' : lang === 'nl' ? 'Gerelateerde gidsen' : lang === 'pl' ? 'Powiązane poradniki' : lang === 'sv' ? 'Relaterade guider' : lang === 'us' ? 'Related guides' : lang === 'ca' ? 'Related Guides' : 'Related Guides'}
          </h2>
          <div className="h-[2px] w-16 bg-brand-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              href: `/${lang}/guides/airfryer-vs-four`,
              num: '01',
              title: lang === 'fr' ? 'Airfryer vs Four traditionnel' : lang === 'de' ? 'Heißluftfritteuse vs Backofen' : lang === 'es' ? 'Freidora de aire vs Horno' : lang === 'it' ? 'Friggitrice ad aria vs Forno' : lang === 'nl' ? 'Airfryer vs Oven' : lang === 'pl' ? 'Frytkownica beztłuszczowa czy tradycyjny piekarnik' : lang === 'sv' ? 'Airfryer eller vanlig ugn' : lang === 'us' ? 'Air Fryer vs. Traditional Oven' : lang === 'ca' ? 'Air Fryer vs Traditional Oven' : 'Air Fryer vs Traditional Oven',
              desc: lang === 'fr' ? 'Comparatif détaillé pour savoir lequel choisir.' : lang === 'de' ? 'Detaillierter Vergleich, welcher besser ist.' : lang === 'es' ? 'Comparativa detallada para saber cuál elegir.' : lang === 'it' ? 'Confronto dettagliato per sapere quale scegliere.' : lang === 'nl' ? 'Gedetailleerde vergelijking om te weten welke te kiezen.' : lang === 'pl' ? 'Szczegółowe porównanie, które pomoże Ci wybrać.' : lang === 'sv' ? 'En detaljerad jämförelse som hjälper dig att välja.' : lang === 'us' ? 'A detailed comparison to help you choose.' : lang === 'ca' ? 'Detailed comparison to help you choose.' : 'Detailed comparison to help you choose.',
            },
            {
              href: `/${lang}/a-propos`,
              num: '02',
              title: lang === 'fr' ? 'Notre méthodologie' : lang === 'de' ? 'Unsere Methodik' : lang === 'es' ? 'Nuestra metodología' : lang === 'it' ? 'La nostra metodologia' : lang === 'nl' ? 'Onze methodologie' : lang === 'pl' ? 'Nasza metodologia' : lang === 'sv' ? 'Vår metod' : lang === 'us' ? 'Our Methodology' : lang === 'ca' ? 'Our Methodology' : 'Our Methodology',
              desc: lang === 'fr' ? 'Comment nous comparons et notons chaque airfryer.' : lang === 'de' ? 'Wie wir jede Heißluftfritteuse vergleichen und bewerten.' : lang === 'es' ? 'Cómo comparamos y calificamos cada freidora.' : lang === 'it' ? 'Come confrontiamo e valutiamo ogni friggitrice.' : lang === 'nl' ? 'Hoe we elke airfryer vergelijken en beoordelen.' : lang === 'pl' ? 'Jak porównujemy i oceniamy każdą frytkownicę beztłuszczową.' : lang === 'sv' ? 'Så jämför och betygsätter vi varje airfryer.' : lang === 'us' ? 'How we compare and rate every air fryer.' : lang === 'ca' ? 'How we compare and rate every air fryer.' : 'How we compare and rate every air fryer.',
            },
            {
              href: `/${lang}`,
              num: '03',
              title: lang === 'fr' ? 'Classement des meilleurs airfryers 2026' : lang === 'de' ? 'Ranking der besten Airfryer 2026' : lang === 'es' ? 'Ranking de las mejores freidoras 2026' : lang === 'it' ? 'Classifica delle migliori friggitrici 2026' : lang === 'nl' ? 'Ranking beste airfryers 2026' : lang === 'pl' ? 'Ranking najlepszych frytkownic beztłuszczowych 2026' : lang === 'sv' ? 'Topplista: de bästa airfryrarna 2026' : lang === 'us' ? 'Best Air Fryers of 2026: Our Ranking' : lang === 'ca' ? 'Best Air Fryers 2026 Ranking' : 'Best Air Fryers 2026 Ranking',
              desc: lang === 'fr' ? 'Notre top 9 avec comparatif et scores Nura.' : lang === 'de' ? 'Unsere Top 9 mit Vergleich und Nura Scores.' : lang === 'es' ? 'Nuestro top 9 con comparativa y puntuaciones Nura.' : lang === 'it' ? 'La nostra top 9 con confronto e punteggi Nura.' : lang === 'nl' ? 'Onze top 9 met vergelijking en Nura Scores.' : lang === 'pl' ? 'Nasze top 9 z porównaniem i ocenami Nura.' : lang === 'sv' ? 'Vår topp 9 med jämförelse och Nura Score-betyg.' : lang === 'us' ? 'Our top 9, compared, with Nura Scores.' : lang === 'ca' ? 'Our top 9 with comparison and Nura scores.' : 'Our top 9 with comparison and Nura scores.',
            },
            {
              href: `/${lang}/cuisine-connectee/prises-connectees`,
              num: '04',
              title: lang === 'fr' ? 'Piloter son airfryer à distance' : lang === 'de' ? 'Heißluftfritteuse per Fernbedienung' : lang === 'es' ? 'Controla tu freidora a distancia' : lang === 'it' ? 'Controlla la friggitrice da remoto' : lang === 'nl' ? 'Airfryer op afstand bedienen' : lang === 'pl' ? 'Steruj frytkownicą zdalnie' : lang === 'sv' ? 'Styr airfryern på distans' : lang === 'us' ? 'Control Your Air Fryer Remotely' : lang === 'ca' ? 'Control your air fryer remotely' : 'Control your air fryer remotely',
              desc: lang === 'fr' ? 'Les prises connectées compatibles avec votre airfryer.' : lang === 'de' ? 'Smarte Steckdosen, die zu Ihrer Heißluftfritteuse passen.' : lang === 'es' ? 'Los enchufes inteligentes compatibles con tu freidora.' : lang === 'it' ? 'Le prese smart compatibili con la tua friggitrice.' : lang === 'nl' ? 'Slimme stekkers die werken met uw airfryer.' : lang === 'pl' ? 'Inteligentne wtyczki zgodne z Twoją frytkownicą.' : lang === 'sv' ? 'Smarta pluggar som fungerar med din airfryer.' : lang === 'us' ? 'The smart plugs that work with your air fryer.' : lang === 'ca' ? 'The smart plugs that work with your air fryer.' : 'The smart plugs that work with your air fryer.',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:border-brand-600 hover:shadow-md hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-600 mb-3">{item.num}</div>
              <h3 className="font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand-700 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              <div className="mt-5 flex items-center text-sm font-semibold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>{lang === 'fr' ? 'Lire' : lang === 'de' ? 'Lesen' : lang === 'es' ? 'Leer' : lang === 'it' ? 'Leggi' : lang === 'nl' ? 'Lezen' : lang === 'pl' ? 'Czytaj' : lang === 'sv' ? 'Läs' : lang === 'us' ? 'Read' : lang === 'ca' ? 'Read' : 'Read'}</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <FaqSection faqs={[...faqs]} title={dict.faq_title} />
      </main>

      {/* Footer with legal links */}
      <SiteFooter
        currentLang={lang}
      />

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
