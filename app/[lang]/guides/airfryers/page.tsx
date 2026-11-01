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
    intro_title: 'How an air fryer works',
    intro_text: 'The air fryer has transformed home cooking in recent years. It circulates very hot air (up to 200°C) at speed to cook food evenly, giving a crisp finish without deep-frying it in oil. By 2026, air fryers have become a fixture in European kitchens, offering a healthy, quick and convenient alternative to conventional cooking. Contrary to popular belief, an air fryer doesn\'t use radiation or microwaves: it\'s essentially a small, powerful fan oven. Air moves around the food at very high speed, triggering the Maillard reaction that produces the golden, crunchy crust everyone loves. In practice, that means crisp homemade chips in under 15 minutes, a golden roast chicken in 25 minutes and nicely caramelised roasted vegetables, without the frying smell that clings to your kitchen and clothes for hours.',
    how_to_choose_title: 'How to choose the right air fryer',
    how_to_choose_intro: 'There are hundreds of air fryers on the market, from budget models to premium ones. The right choice depends entirely on your situation: household size, budget, worktop space and the kind of food you want to cook. Here\'s how to decide.',
    capacity_title: 'Capacity: the deciding factor',
    capacity_text: 'Capacity is probably the most important thing to consider when buying an air fryer, because it determines what you can cook. For one person or a couple, a 2- to 3-litre air fryer (about 1.2 to 1.8 kg of chips) is plenty. These compact models, sometimes called single-portion air fryers, take up little worktop space and use less electricity. Tefal and Moulinex make excellent compact models, ideal for small city flats. For a family of three or four, go for 4 to 5 litres (2 to 3 kg). These offer a good balance between convenience and energy use: you can cook a whole chicken, make chips for the whole family and even cook several portions at once. For a family of five or more, choose a 6- to 8-litre air fryer or a dual-basket model. Large Philips and Cosori models offer this capacity while keeping a reasonable footprint. Air fryers over 9 litres (the “maxi” category) are mainly for restaurants or households that regularly cook for a crowd. Bear in mind that the usable capacity is usually 80 to 90% of the quoted total, because you need to leave room for the air to circulate.',
    power_title: 'Power and heating technology',
    power_text: 'Power, measured in watts (W), directly affects how fast an air fryer cooks and how well it browns food. Most modern air fryers draw between 800 and 2,000 W. A 1,200 to 1,500 W model is a good compromise for everyday home use. High-end models, especially professional or semi-professional air fryers, can reach 2,200 W or more, cooking noticeably faster and more evenly. Look for Rapid Air technology or an equivalent, such as dual-zone convection. Tefal and Moulinex use their own air-circulation systems, while Philips promotes QuickCook for very fast heating. Some high-end models have two heating elements (top and bottom) or even four heating zones for more even cooking, which matters most when the pieces of food vary in size. If you cook often, aim for at least 1,400 W so cooking times stay reasonable even with a full basket.',
    features_title: 'Features and smart connectivity',
    features_text: 'Modern air fryers go far beyond simple manual controls. The best models have 10 to 50 preset programmes for different foods: chips, chicken wings, roasted vegetables, fritters, dried fruit and more. These take the guesswork out of cooking by setting the right temperature and time automatically. Wi-Fi and dedicated apps are increasingly common in 2026. With the app, you can start cooking remotely, keep an eye on progress and get a notification when your meal is ready, which is handy in busy households where people get home at different times. Connectivity does add noticeably to the price, though. If you just want the basics, a simple touch panel with an LED display and a programmable timer is all you need. A keep-warm function is useful when people eat at different times. It\'s also worth checking for a rapid preheat programme and the option to save your own settings for favourite recipes.',
    materials_title: 'Materials and build quality',
    materials_text: 'With proper care, an air fryer should last 5 to 8 years, so materials matter. The basket needs a safe, durable non-stick coating, ideally PTFE-free and BPA-free, or at the very least one that meets European safety requirements (CE marking). The best brands use ceramic or water-based coatings that last longer and don\'t peel. The outer casing should be sturdy: stainless steel or heat-resistant plastic. Stainless steel lasts longer but is heavier and usually more expensive. Heat-resistant food-grade plastic (ABS) is fine if it\'s thick enough and comes from a reputable manufacturer. Handles should be easy to grip and heat-insulated to prevent burns. Check that the basket and accessories are dishwasher-safe: it saves a huge amount of time. German brands such as Siemens and Bosch typically offer 3- to 5-year warranties, while the French brands Tefal and Moulinex often offer 2 to 3 years, reflecting different approaches to durability.',
    noise_title: 'Noise level',
    noise_text: 'Noise is often overlooked until after you\'ve bought one. Air fryers use a high-speed fan, so some noise is unavoidable. Most models produce 65 to 80 dB while cooking. For reference, normal conversation is around 60 dB, road traffic 70 dB and a vacuum cleaner 75 dB. At 65 dB, an air fryer is fairly quiet for this type of appliance, whereas 80 dB starts to get annoying, especially early in the morning or late in the evening. Some high-end models, such as the “EcoMode” or “silent” versions from Philips and Moulinex, bring noise down to 62 to 65 dB at the cost of slightly slower cooking. If you live in a flat or are sensitive to noise, check the quoted noise level before you buy. This matters especially in homes with young children or pets that are sensitive to noise.',
    energy_title: 'Energy use and savings',
    energy_text: 'Energy use is worth working out. A 1,500 W air fryer used for 30 minutes uses 0.75 kWh. A conventional oven (2,500 to 3,500 W) running for 45 minutes to cook the same meal uses considerably more, so the air fryer already comes out ahead. If you use your air fryer five times a week (a typical estimate for a family), that adds up to about 146 kWh a year. Multiply by your unit rate to see what that costs you. Even if you used it only three times a week, a conventional oven would still cost more to run over a year. On top of that, you save on cooking oil, since you need little or none, and on time. Over five years, the energy savings alone almost pay for the air fryer.',
    mistakes_title: 'Common Mistakes to Avoid',
    mistakes_intro: 'Plenty of people buy an air fryer with unrealistic expectations, or don\'t get the most out of it because they don\'t know the basics. Here are the most common mistakes new owners make, and how to avoid them.',
    mistakes: [
      {
        title: 'Overfilling the basket',
        desc: 'Mistake number one: overcrowding the basket. Air needs to circulate freely around every piece of food. Filling the basket to the top spoils the results: food in the middle and at the bottom stays soggy while the top burns. Fill it to 70–80% at most, or cook in two batches. For chips, shake the basket halfway through for more even cooking.'
      },
      {
        title: 'Skipping the preheat',
        desc: 'Unlike an oven, an air fryer preheats quickly: 3 to 5 minutes at most. Even so, many people skip this step, which means longer cooking times and a less crisp result. Preheating creates a stable heat, so the Maillard reaction can start straight away.'
      },
      {
        title: 'Using too little or too much oil',
        desc: 'It\'s a myth that air fryers need no oil at all. A small amount (1 to 2 teaspoons) makes a big difference and gives crisper results. Too little and food comes out dry and pale; too much and excess fat collects in the bottom. An oil spray is ideal for an even coating.'
      },
      {
        title: 'Ignoring the manufacturer\'s instructions',
        desc: 'Every air fryer is slightly different: cooking times, ideal temperatures and basket position vary from one model to another. Read the manual, start with the suggested programmes, then adjust to your taste. Tefal and Moulinex supply detailed guides with cooking charts.'
      },
      {
        title: 'Not cleaning it regularly',
        desc: 'Oil and food residue build up quickly. An air fryer that isn\'t cleaned starts to smoke, develops smells and performs less well. Clean it after every use: on most models, the basket and drip tray go in the dishwasher. Wipe the outside with a damp cloth.'
      },
      {
        title: 'Cooking wet food without drying it first',
        desc: 'Water and oil don\'t mix. If you\'re defrosting fish or chicken, pat it dry before cooking. Excess moisture creates steam instead of the dry heat that air frying needs. Let marinated food drain well before cooking.'
      }
    ],
    maintenance_title: 'Care and cleaning to make it last',
    maintenance_text: 'Regular care is what makes an air fryer last. After each use, let it cool for 10 to 15 minutes, then take out the basket and drip tray. Wash them in warm soapy water or put them in the dishwasher. The non-stick coating can wear over time, especially if you scrub hard with abrasive products, so use a soft sponge and a mild detergent. Never immerse the main unit in water. If residue builds up inside, wipe it with a damp cloth and a little white vinegar. Every 3 to 4 months, gently brush the top heating element with a soft brush to remove dust, and check that the air vents aren\'t blocked. Store your air fryer somewhere dry and dust-free. Tefal and Moulinex offer dedicated cleaning kits and affordable replacement baskets for when the old one wears out. Looked after well, an air fryer can easily last 7 to 10 years.',
    recipes_title: 'Popular recipes to get you started',
    recipes_intro: 'Here are five essential recipes to get the most out of your air fryer, ideal if you\'re new to it.',
    recipes: [
      {
        title: 'Crispy homemade chips',
        desc: 'The must-have classic. Cut medium potatoes into 6–7 mm batons. Soak them in cold water for 20 minutes to remove the starch, then dry them thoroughly. Toss with 1 teaspoon of groundnut oil, salt and paprika. Cook at 200°C for 18–22 minutes, depending on thickness, shaking the basket halfway through. The result: golden chips that are crisp outside and fluffy inside, with no lingering smell of frying.'
      },
      {
        title: 'Golden roast chicken',
        desc: 'A Sunday classic, reinvented. Cook a whole chicken (1.5–2 kg) at 180°C for 45–50 minutes. First, brush it with softened butter mixed with herbes de Provence (thyme, rosemary, parsley). The result: crisp golden skin and moist meat, without the dryness you often get in the oven. Cook root vegetables (carrots, turnips) on a separate tray.'
      },
      {
        title: 'Roasted vegetables',
        desc: 'Courgettes, aubergines, red and yellow peppers: cut them into even 2 cm cubes. Drizzle lightly with olive oil and season with salt and pepper. Cook at 190°C for 15–18 minutes. The result is impressive: tender inside, lightly caramelised at the edges, with the flavour intensified by the dry heat. A perfect side for any main course.'
      },
      {
        title: 'Cheese and ham croquettes',
        desc: 'To make them: 200 g béchamel sauce, 100 g grated Emmental, 50 g finely chopped ham and nutmeg. Shape into cylinders, dip in beaten egg, then coat in fine breadcrumbs. Chill for 30 minutes. Cook at 190°C for 12–14 minutes. The result: golden and crisp outside, rich and melting inside. Serve with tomato sauce or mayonnaise.'
      },
      {
        title: 'Homemade vegetable crisps',
        desc: 'Use a mandoline to slice potatoes, beetroot and carrots thinly (2–3 mm). Soak for 10 minutes, then dry thoroughly. Toss with a little oil and salt. Cook at 180°C for 10–12 minutes, in two batches. The result: wafer-thin, crunchy crisps, healthy and without saturated fat. Store them in a jar for snacking.'
      }
    ],
    verdict_title: 'Our verdict',
    verdict_text: 'An air fryer is a smart buy for any household that values health, convenience and energy efficiency. Choose a capacity that suits your household, enough power (1,400 W minimum) and the features you\'ll actually use rather than extras, and an air fryer will change the way you cook every day. Homemade chips rival deep-fried ones, cook two minutes faster and don\'t leave a lingering smell. Vegetables taste delicious cooked in hot air. Preparation times drop dramatically. Over five years, the savings on electricity and cooking oil add up. An air fryer won\'t completely replace an oven for some things (large quantities, bread, more complex pastries), but it quickly becomes the appliance you use for 70 to 80% of everyday meals. If you live in a small flat, want to save energy or simply enjoy good food made quickly, an air fryer is a purchase you won\'t regret.'
  },
  de: {
    intro_title: 'Airfryer kurz erklärt: So funktioniert die Heißluftfritteuse',
    intro_text: 'Die Heißluftfritteuse, auch Airfryer genannt, hat das Kochen zu Hause in den letzten Jahren stark verändert. Sie gart Lebensmittel mit schnell zirkulierender, sehr heißer Luft (bis 200 °C) gleichmäßig und macht sie knusprig, ohne sie in Öl zu tauchen. 2026 ist der Airfryer aus vielen europäischen Küchen nicht mehr wegzudenken, als gesunde, schnelle und praktische Alternative zu herkömmlichen Garmethoden. Anders als oft angenommen arbeitet ein Airfryer weder mit Strahlung noch mit Mikrowellen: Er ist ein kleiner, leistungsstarker Umluftofen. Die Luft strömt sehr schnell um die Lebensmittel und löst die Maillard-Reaktion aus, die für die beliebte goldbraune, knusprige Kruste sorgt. Für Sie heißt das: knusprige selbst gemachte Pommes in weniger als 15 Minuten, ein goldbraunes Brathähnchen in 25 Minuten und perfekt karamellisiertes Grillgemüse, ohne den Frittiergeruch, der sonst stundenlang in Küche und Kleidung hängt.',
    how_to_choose_title: 'So finden Sie den passenden Airfryer',
    how_to_choose_intro: 'Airfryer gibt es heute in Hunderten von Varianten, zu Preisen von 40 € bis über 500 €. Welches Modell zu Ihnen passt, hängt ganz von Ihrer Situation ab: Haushaltsgröße, Budget, verfügbarer Platz und die Gerichte, die Sie kochen möchten. Hier die wichtigsten Kriterien im Überblick.',
    capacity_title: 'Fassungsvermögen: das wichtigste Kriterium',
    capacity_text: 'Das Fassungsvermögen ist wohl das wichtigste Kriterium beim Kauf, denn es bestimmt direkt, was Sie zubereiten können. Für eine Person oder ein Paar reicht ein Airfryer mit 2 bis 3 Litern (etwa 1,2 bis 1,8 kg Pommes) völlig aus. Diese kompakten Modelle, oft als Single-Airfryer bezeichnet, brauchen wenig Platz auf der Arbeitsfläche und verbrauchen weniger Strom. Tefal und Moulinex haben in dieser Klasse sehr gute Modelle, ideal für kleine Küchen. Für eine Familie mit drei bis vier Personen wählen Sie 4 bis 5 Liter (2 bis 3 kg). Diese Größe bietet ein gutes Verhältnis von Komfort und Stromverbrauch: Sie können ein ganzes Hähnchen garen, Pommes für die ganze Familie zubereiten und sogar mehrere Portionen gleichzeitig machen. Für große Familien ab fünf Personen lohnt sich ein Airfryer mit 6 bis 8 Litern oder ein Modell mit 2 Kammern (Doppelkammer). Die großen Modelle von Philips und Cosori bieten dieses Volumen bei vernünftigen Abmessungen. Airfryer mit mehr als 9 Litern („Maxi“-Klasse) eignen sich vor allem für die Gastronomie oder für Haushalte, die regelmäßig für viele Personen kochen. Wichtig: Nutzbar sind in der Regel nur 80 bis 90 % des angegebenen Volumens, denn die Luft braucht Platz zum Zirkulieren.',
    power_title: 'Leistung und Heiztechnik',
    power_text: 'Die Leistung in Watt (W) bestimmt direkt, wie schnell der Airfryer gart und wie gut er Lebensmittel anbrät. Die meisten aktuellen Modelle haben zwischen 800 und 2.000 W. Für den normalen Haushalt sind 1.200 bis 1.500 W ein guter Kompromiss. Spitzenmodelle, vor allem professionelle oder semiprofessionelle Geräte, erreichen 2.200 W und mehr und garen deutlich schneller und gleichmäßiger. Achten Sie auf die Rapid-Air-Technologie oder vergleichbare Systeme wie eine Zwei-Zonen-Konvektion. Tefal und Moulinex setzen auf ein eigenes System zur optimierten Luftzirkulation, Philips verspricht mit seiner QuickCook-Technologie ein besonders schnelles Aufheizen. Einige Premiummodelle haben zwei Heizelemente (oben und unten) oder sogar vier Heizzonen. Das sorgt für gleichmäßigeres Garen, besonders bei unterschiedlich großen Stücken. Wenn Sie regelmäßig für die Familie kochen, sorgen mindestens 1.400 W auch bei vollem Korb für vernünftige Garzeiten.',
    features_title: 'Funktionen und Vernetzung',
    features_text: 'Moderne Airfryer bieten weit mehr als eine einfache manuelle Bedienung. Die besten Modelle haben 10 bis 50 Automatikprogramme für verschiedene Lebensmittel: Pommes, Chicken Wings, Grillgemüse, Beignets, Dörrobst und vieles mehr. Die Programme stellen Temperatur und Zeit automatisch ein und vermeiden so Fehler beim Garen. WLAN und Apps werden 2026 immer häufiger. Mit der passenden App starten Sie das Garen aus der Ferne, verfolgen den Fortschritt und bekommen eine Benachrichtigung, wenn das Essen fertig ist. Das ist praktisch in Haushalten, in denen alle zu unterschiedlichen Zeiten nach Hause kommen. Die Vernetzung kostet allerdings im Schnitt 50 bis 150 € mehr. Wer es pragmatisch mag, kommt mit einem einfachen Touch-Bedienfeld, LED-Display und programmierbarem Timer gut aus. Eine Warmhaltefunktion ist ideal, wenn nicht alle gleichzeitig essen. Achten Sie außerdem auf ein schnelles Vorheizprogramm und die Möglichkeit, eigene Einstellungen für Ihre Lieblingsrezepte zu speichern.',
    materials_title: 'Materialien und Verarbeitung',
    materials_text: 'Ein Airfryer ist eine Anschaffung, die bei guter Pflege 5 bis 8 Jahre halten sollte. Entscheidend sind die Materialien. Der Garkorb braucht eine sichere, haltbare Antihaftbeschichtung, idealerweise ohne PTFE und BPA, mindestens aber mit CE-Kennzeichnung nach den europäischen Sicherheitsvorgaben. Die besten Marken verwenden Keramik- oder wasserbasierte Beschichtungen, die länger halten und sich nicht ablösen. Das Gehäuse sollte robust sein: Edelstahl oder hitzebeständiger Kunststoff. Edelstahl ist langlebiger, aber schwerer und meist teurer. Hitzebeständiger, lebensmittelechter Kunststoff (ABS) ist in Ordnung, wenn er ausreichend dick ist und von einem namhaften Hersteller stammt. Die Griffe sollten gut in der Hand liegen und wärmeisoliert sein, damit Sie sich nicht verbrennen. Prüfen Sie, ob Korb und Zubehör spülmaschinenfest sind: Das spart viel Zeit. Deutsche Marken wie Siemens und Bosch geben typischerweise 3 bis 5 Jahre Garantie, die französischen Marken Tefal und Moulinex oft 2 bis 3 Jahre, was unterschiedliche Ansätze bei der Haltbarkeit widerspiegelt.',
    noise_title: 'Lautstärke',
    noise_text: 'Ein Punkt, an den viele erst nach dem Kauf denken: die Lautstärke. Airfryer arbeiten mit einem schnell drehenden Ventilator, und der ist zwangsläufig zu hören. Die meisten Modelle erreichen beim Garen 65 bis 80 Dezibel (dB). Zum Vergleich: Ein normales Gespräch liegt bei etwa 60 dB, Straßenverkehr bei 70 dB, ein Staubsauger bei 75 dB. Ein Airfryer mit 65 dB ist für diese Geräteklasse relativ leise, ab 80 dB wird es störend, vor allem früh am Morgen oder spät am Abend. Einige Premiummodelle, etwa die „EcoMode“- oder Flüsterversionen von Philips und Moulinex, senken die Lautstärke auf 62 bis 65 dB und garen dafür etwas langsamer. Wenn Sie in einer Wohnung leben oder geräuschempfindlich sind, lohnt sich vor dem Kauf ein Blick auf die Dezibel-Angabe. Haushalte mit kleinen Kindern oder lärmempfindlichen Haustieren sollten besonders darauf achten.',
    energy_title: 'Stromverbrauch und Ersparnis',
    energy_text: 'Ob sich ein Airfryer beim Strom lohnt, lässt sich leicht ausrechnen. Wir rechnen mit einem Beispieltarif von 0,18 bis 0,25 € pro kWh (setzen Sie Ihren eigenen Tarif ein). Ein Airfryer mit 1.500 W verbraucht in 30 Minuten 0,75 kWh, das kostet etwa 0,15 €. Ein klassischer Backofen (2.500 bis 3.500 W) braucht für dasselbe Essen 45 Minuten und kostet 0,20 bis 0,26 €: Der Airfryer ist also schon hier sparsamer. Nutzen Sie den Airfryer fünfmal pro Woche (ein typischer Wert für eine Familie), kommen Sie auf rund 195 Einsätze im Jahr, also 146,25 kWh und etwa 26 € Stromkosten. Ein Backofen, der auch nur dreimal pro Woche läuft, würde für dieselben Ergebnisse 50 bis 60 € im Jahr kosten. In diesem Beispiel spart ein durchschnittlicher Haushalt 25 bis 30 € im Jahr. Dazu kommen weniger Speiseöl (oft brauchen Sie gar keins) und die gesparte Zeit. Über 5 Jahre hat sich ein Airfryer durch die eingesparte Energie fast vollständig bezahlt gemacht.',
    mistakes_title: 'Typische Fehler, die Sie vermeiden sollten',
    mistakes_intro: 'Viele kaufen einen Airfryer mit falschen Erwartungen oder nutzen ihn zu wenig, weil sie die richtigen Handgriffe nicht kennen. Hier die häufigsten Fehler von Einsteigern und wie Sie sie vermeiden.',
    mistakes: [
      {
        title: 'Den Korb bis zum Rand füllen',
        desc: 'Fehler Nummer eins: ein überladener Korb. Die Luft muss frei um jedes Stück zirkulieren können. Ist der Korb randvoll, leidet das Ergebnis: Was in der Mitte und unten liegt, bleibt weich, was oben liegt, verbrennt. Füllen Sie den Korb höchstens zu 70 bis 80 % oder garen Sie in zwei Durchgängen. Schütteln Sie Pommes nach der Hälfte der Garzeit durch, damit sie gleichmäßig garen.'
      },
      {
        title: 'Das Vorheizen vergessen',
        desc: 'Anders als beim Backofen geht das Vorheizen beim Airfryer schnell: höchstens 3 bis 5 Minuten. Trotzdem lassen viele diesen Schritt aus. Dann dauert das Garen länger, und das Ergebnis wird weniger knusprig. Durch das Vorheizen herrscht von Anfang an eine stabile Temperatur, sodass die Maillard-Reaktion sofort einsetzt.'
      },
      {
        title: 'Zu wenig oder zu viel Öl',
        desc: 'Es ist ein Mythos, dass ein Airfryer ganz ohne Öl auskommt. Eine kleine Menge (1 bis 2 Teelöffel) verbessert das Ergebnis deutlich und macht die Speisen knuspriger. Zu wenig Öl: trocken und blass. Zu viel Öl: Überschüssiges Fett sammelt sich am Boden. Mit einem Ölspray verteilen Sie das Öl gleichmäßig.'
      },
      {
        title: 'Die Herstellerangaben ignorieren',
        desc: 'Jeder Airfryer verhält sich etwas anders. Garzeiten, ideale Temperaturen und die Position des Korbs unterscheiden sich. Lesen Sie die Bedienungsanleitung, halten Sie sich anfangs an die vorgeschlagenen Programme und passen Sie dann alles an Ihren Geschmack an. Tefal und Moulinex bieten ausführliche Anleitungen mit Garzeittabellen.'
      },
      {
        title: 'Nicht regelmäßig reinigen',
        desc: 'Öl- und Speisereste sammeln sich schnell an. Ein ungereinigter Airfryer qualmt, riecht und arbeitet schlechter. Reinigen Sie ihn nach jeder Nutzung: Korb und Auffangschale dürfen bei den meisten Modellen in die Spülmaschine. Das Gehäuse wischen Sie mit einem feuchten Tuch ab.'
      },
      {
        title: 'Sehr nasse Lebensmittel ohne Vorbereitung garen',
        desc: 'Wasser und Öl vertragen sich nicht. Wenn Sie Fisch oder Hähnchen auftauen, tupfen Sie beides vor dem Garen gründlich trocken. Zu viel Feuchtigkeit erzeugt Dampf statt der trockenen Hitze, die der Airfryer braucht. Marinierte Lebensmittel sollten vor dem Garen gut abtropfen.'
      }
    ],
    maintenance_title: 'Reinigung und Pflege für eine lange Lebensdauer',
    maintenance_text: 'Wie lange ein Airfryer hält, hängt von der regelmäßigen Pflege ab. Lassen Sie ihn nach jeder Nutzung 10 bis 15 Minuten abkühlen und nehmen Sie dann Korb und Auffangschale heraus. Spülen Sie beides mit warmem Spülwasser oder geben Sie es in die Spülmaschine. Die Antihaftbeschichtung kann sich mit der Zeit abnutzen, vor allem wenn Sie kräftig mit Scheuermitteln schrubben. Nehmen Sie einen weichen Schwamm und ein mildes Spülmittel. Das Hauptgerät darf nie ins Wasser getaucht werden. Wischen Sie den Innenraum mit einem feuchten Tuch und etwas Essig aus, wenn sich Rückstände ansammeln. Reinigen Sie alle 3 bis 4 Monate das obere Heizelement mit einer weichen Bürste, um Staub zu entfernen. Achten Sie darauf, dass die Lüftungsschlitze frei sind. Bewahren Sie den Airfryer trocken und staubgeschützt auf. Tefal und Moulinex bieten spezielle Reinigungssets und günstige Ersatzkörbe, wenn der alte Korb abgenutzt ist. Gut gepflegt hält ein Airfryer problemlos 7 bis 10 Jahre.',
    recipes_title: 'Beliebte Rezepte für den Einstieg',
    recipes_intro: 'Fünf Klassiker, mit denen Sie das Beste aus Ihrem Airfryer herausholen, ideal, wenn Sie das Gerät gerade erst kennenlernen.',
    recipes: [
      {
        title: 'Knusprige selbst gemachte Pommes',
        desc: 'Der Klassiker schlechthin. Schneiden Sie mittelgroße Kartoffeln in 6 bis 7 mm dicke Stifte. Legen Sie sie 20 Minuten in kaltes Wasser, um die Stärke auszuwaschen, und trocknen Sie sie dann gut ab. Vermengen Sie sie mit 1 Teelöffel Erdnussöl, Salz und Paprikapulver. Garen Sie sie je nach Dicke 18 bis 22 Minuten bei 200 °C und schütteln Sie sie nach der Hälfte der Zeit durch. Ergebnis: goldbraune Pommes, außen knusprig, innen weich, ohne Frittiergeruch in der Wohnung.'
      },
      {
        title: 'Goldbraunes Brathähnchen',
        desc: 'Das klassische Sonntagshähnchen, neu gedacht. Garen Sie ein ganzes Hähnchen (1,5 bis 2 kg) 45 bis 50 Minuten bei 180 °C. Bestreichen Sie es vorher mit weicher Butter, die Sie mit Kräutern der Provence (Thymian, Rosmarin, Petersilie) vermischt haben. Ergebnis: außen knusprig, innen saftig, ohne die typische Trockenheit aus dem Backofen. Wurzelgemüse (Karotten, weiße Rüben) bereiten Sie in einem separaten Einsatz zu.'
      },
      {
        title: 'Grillgemüse',
        desc: 'Zucchini, Auberginen, rote und gelbe Paprika: Schneiden Sie alles in gleichmäßige Würfel von 2 cm. Beträufeln Sie das Gemüse leicht mit Olivenöl und würzen Sie es mit Salz und Pfeffer. Garen Sie es 15 bis 18 Minuten bei 190 °C. Das Ergebnis überzeugt: innen zart, an den Rändern leicht karamellisiert, mit einem durch die trockene Hitze intensiveren Geschmack. Passt als Beilage zu jedem Hauptgericht.'
      },
      {
        title: 'Käse-Schinken-Kroketten',
        desc: 'Zutaten: 200 g Béchamelsauce, 100 g geriebener Käse (Emmentaler), 50 g gehackter Schinken, Muskatnuss. Formen Sie kleine Rollen, tauchen Sie sie in verquirltes Ei und wälzen Sie sie in feinem Paniermehl. Stellen Sie sie 30 Minuten kalt und garen Sie sie dann 12 bis 14 Minuten bei 190 °C. Ergebnis: außen goldbraun und knusprig, innen cremig und schmelzend. Dazu passen Tomatensoße oder Mayonnaise.'
      },
      {
        title: 'Selbst gemachte Gemüsechips',
        desc: 'Schneiden Sie Kartoffeln, Rote Bete und Karotten mit einem Gemüsehobel in dünne Scheiben (2 bis 3 mm). Legen Sie die Scheiben 10 Minuten in Wasser und trocknen Sie sie gut ab. Vermengen Sie sie mit einer Mischung aus Öl und Salz und garen Sie sie in zwei Durchgängen 10 bis 12 Minuten bei 180 °C. Ergebnis: hauchdünne, knusprige Chips, gesund und ohne viel gesättigtes Fett. In einem Schraubglas aufbewahrt, sind sie ein guter Snack für zwischendurch.'
      }
    ],
    verdict_title: 'Unser Fazit',
    verdict_text: 'Ein Airfryer ist eine kluge Anschaffung für jeden Haushalt, dem Gesundheit, Komfort und ein niedriger Stromverbrauch wichtig sind. Mit dem passenden Fassungsvermögen für Ihre Haushaltsgröße, genug Leistung (mindestens 1.400 W) und den wirklich nötigen Funktionen statt überflüssiger Extras verändert ein Airfryer Ihren Kochalltag grundlegend. Selbst gemachte Pommes können mit frittierten mithalten, sind aber 2 Minuten schneller fertig und hinterlassen keinen aufdringlichen Geruch. Gemüse schmeckt aus dem Airfryer richtig gut. Die Zubereitungszeit sinkt deutlich. Über fünf Jahre sparen Sie mehr als 100 € an Strom und Speiseöl. Natürlich ersetzt ein Airfryer den Backofen nicht in jedem Fall (große Mengen, Brot, aufwendiges Gebäck), wird aber schnell zum wichtigsten Gargerät für 70 bis 80 % der Alltagsgerichte. Für kleine Wohnungen mit wenig Platz, für Familien, die auf ihren Energieverbrauch achten, und für alle, die gern einfach, schnell und gut kochen, ist ein Airfryer ein Kauf, den Sie nicht bereuen werden.'
  },
  es: {
    intro_title: 'Qué es una freidora de aire',
    intro_text: 'La freidora de aire, también llamada freidora sin aceite o airfryer, ha cambiado la cocina doméstica en los últimos años. Utiliza la circulación rápida de aire muy caliente (hasta 200 °C) para cocinar los alimentos de manera uniforme y conseguir una textura crujiente sin sumergirlos en aceite. En 2026 ya es un aparato básico en las cocinas europeas, una alternativa sana, rápida y práctica a los métodos de cocción tradicionales. Al contrario de lo que se suele pensar, la freidora de aire no funciona por radiación ni con microondas: es un pequeño horno de convección de alto rendimiento. El aire gira alrededor de los alimentos a gran velocidad y provoca la reacción de Maillard, que da esa costra dorada y crujiente que tanto gusta. En la práctica, eso significa patatas fritas caseras crujientes en menos de 15 minutos, un pollo asado dorado en 25 minutos y verduras asadas bien caramelizadas, sin ese olor a fritura que se queda en la cocina y en la ropa durante horas.',
    how_to_choose_title: 'Cómo elegir tu freidora de aire',
    how_to_choose_intro: 'Hoy hay cientos de freidoras de aire en el mercado, desde unos 40 € hasta más de 500 €. Acertar con el modelo depende por completo de tu situación: cuántos sois en casa, tu presupuesto, el espacio que tienes y el tipo de recetas que quieres preparar. Aquí tienes una guía completa para tomar esta decisión.',
    capacity_title: 'La capacidad, el factor decisivo',
    capacity_text: 'La capacidad es seguramente el criterio más importante al comprar una freidora de aire, porque determina directamente lo que vas a poder cocinar. Para una persona sola o una pareja, una freidora de 2 a 3 litros (de 1,2 a 1,8 kg de patatas fritas, aproximadamente) es más que suficiente. Estos modelos compactos, a menudo llamados individuales, ocupan poco en la encimera y gastan menos electricidad. Tefal y Moulinex tienen muy buenos modelos en esta categoría, ideales para pisos pequeños. Para una familia de tres o cuatro personas, elige una capacidad de 4 a 5 litros (de 2 a 3 kg). Estas freidoras ofrecen un muy buen equilibrio entre comodidad y consumo de energía: podrás asar un pollo entero, hacer patatas fritas para toda la familia e incluso preparar varias raciones a la vez. Si sois cinco o más, apuesta por una freidora de 6 a 8 litros o por un modelo de doble cajón. Los modelos grandes de Philips y Cosori ofrecen esa capacidad con unas dimensiones razonables. Las de más de 9 litros (la categoría «maxi») son más bien para restaurantes o para hogares que cocinan a menudo para mucha gente. Ojo: la capacidad útil real suele ser del 80-90 % de la anunciada, porque hay que dejar espacio para que circule el aire.',
    power_title: 'Potencia y sistema de calentamiento',
    power_text: 'La potencia, medida en vatios (W), influye directamente en la rapidez de cocción y en la capacidad de dorar bien los alimentos. La mayoría de las freidoras de aire actuales consumen entre 800 y 2.000 W. Un modelo de 1.200-1.500 W es un buen término medio para un uso doméstico normal. Los modelos de gama alta, sobre todo las freidoras profesionales o semiprofesionales, pueden llegar a 2.200 W o más, lo que permite cocinar bastante más rápido y de forma más uniforme. Busca freidoras con tecnología Rapid Air o con sistemas equivalentes, como la convección de doble zona. Algunos modelos de gama alta tienen doble resistencia (arriba y abajo) o incluso cuatro zonas de calor, lo que asegura una cocción más uniforme, algo especialmente importante con alimentos de distintos tamaños. Si cocinas a menudo, una potencia mínima de 1.400 W garantiza tiempos razonables incluso con la cesta llena.',
    features_title: 'Funciones y conectividad',
    features_text: 'Las freidoras de aire actuales van mucho más allá de los mandos manuales. Los mejores modelos incluyen de 10 a 50 programas automáticos para distintos alimentos: patatas fritas, alitas de pollo, verduras asadas, buñuelos, deshidratado de fruta y muchos más. Estos programas evitan errores porque fijan automáticamente la temperatura y el tiempo adecuados. La conexión wifi y las apps para el móvil son cada vez más habituales en 2026. Con la app del fabricante puedes poner la freidora en marcha a distancia, seguir la cocción desde el móvil y recibir un aviso cuando la comida esté lista. Es muy práctico en casas en las que cada uno llega a una hora. Eso sí, la conexión wifi suele encarecer el aparato. Si no necesitas tanto, un panel táctil con pantalla LED y un temporizador programable son más que suficientes. Los modelos con función de mantener caliente vienen muy bien para servir a distintas horas. Comprueba también si tiene precalentamiento rápido y si permite guardar tus propios programas para tus recetas favoritas.',
    materials_title: 'Materiales y calidad de fabricación',
    materials_text: 'Una freidora de aire bien cuidada dura de 5 a 8 años, así que los materiales son fundamentales. La cesta debe tener un revestimiento antiadherente seguro y duradero, a ser posible sin PFOA ni BPA o, como mínimo, con las certificaciones de seguridad europeas (CE). Las mejores marcas usan revestimientos cerámicos o al agua que duran más y no se despegan. El cuerpo exterior debe ser robusto: acero inoxidable o plástico resistente a altas temperaturas. El acero inoxidable dura más, pero pesa más y suele ser más caro. El plástico apto para uso alimentario y resistente al calor (ABS) es aceptable si es grueso y de un fabricante de confianza. Las asas deben ser ergonómicas y estar aisladas del calor para evitar quemaduras. Comprueba que la cesta y los accesorios se puedan lavar en el lavavajillas: te ahorrarás mucho tiempo. Los plazos de garantía varían según la marca, así que conviene comprobarlos antes de comprar.',
    noise_title: 'El ruido',
    noise_text: 'Un factor que se suele pasar por alto hasta que la compras: el ruido. Las freidoras de aire funcionan con un ventilador de alta velocidad que inevitablemente hace ruido. La mayoría de los modelos generan entre 65 y 80 decibelios (dB) mientras cocinan. Como referencia, una conversación normal ronda los 60 dB, el tráfico los 70 dB y una aspiradora los 75 dB. Una freidora de 65 dB es bastante silenciosa para este tipo de aparato, mientras que a 80 dB empieza a molestar, sobre todo a primera hora o por la noche. Algunos modelos de gama alta, con modo «eco» o «silencio», bajan a 62-65 dB a cambio de cocinar algo más despacio. Si vives en un piso o el ruido te molesta, merece la pena mirar los decibelios en la ficha antes de comprar. En casas con niños pequeños o con mascotas sensibles al ruido, es un factor que conviene tener muy en cuenta.',
    energy_title: 'Consumo de energía y ahorro',
    energy_text: 'Para hacer números, tomamos como ejemplo los precios de la luz en Francia en 2026, de 0,18 a 0,25 € por kWh según la región y el contrato; para tu caso, multiplica los kWh por el precio de tu factura. Una freidora de aire de 1.500 W que funciona 30 minutos consume 0,75 kWh, unos 0,15 € de electricidad. Un horno tradicional (2.500-3.500 W) que funciona 45 minutos para la misma comida cuesta de 0,20 a 0,26 €, así que la freidora ya sale más económica. En un año, si usas la freidora 5 veces por semana (una estimación media para una familia), son unos 195 usos y 146,25 kWh, alrededor de 26 € de electricidad. Un horno tradicional usado solo 3 veces por semana costaría de 50 a 60 € al año para los mismos resultados. Con estos precios, el ahorro real para una familia media francesa es de 25 a 30 € al año, a lo que hay que sumar el aceite que ya no usas (o usas mucho menos) y el tiempo que ganas. En 5 años, la freidora de aire casi se paga sola con el ahorro de energía.',
    mistakes_title: 'Errores habituales que debes evitar',
    mistakes_intro: 'Muchos compran la freidora esperando más de lo que puede dar, o la aprovechan poco porque no conocen los trucos básicos. Estos son los errores más habituales de quien la estrena y cómo evitarlos.',
    mistakes: [
      {
        title: 'Llenar la cesta hasta arriba',
        desc: 'El error número uno: sobrecargar la cesta. El aire tiene que circular libremente alrededor de cada alimento. Si llenas la cesta al máximo, la cocción empeora: lo que queda en el centro y abajo sale blando y lo de arriba se quema. Llénala como mucho al 70-80 % o haz dos tandas si hace falta. Con las patatas fritas, remueve a mitad de cocción para que se hagan por igual.'
      },
      {
        title: 'No precalentar',
        desc: 'A diferencia del horno, la freidora de aire se precalienta enseguida: de 3 a 5 minutos como mucho. Aun así, mucha gente se salta este paso, y eso alarga la cocción y empeora la textura. El precalentamiento crea un ambiente térmico estable en el que la reacción de Maillard empieza desde el primer momento.'
      },
      {
        title: 'Pasarse o quedarse corto con el aceite',
        desc: 'Es un mito: la freidora de aire no funciona totalmente sin aceite. Añadir un poco (1-2 cucharaditas) mejora mucho el resultado y deja los alimentos más crujientes. Si te quedas corto, la textura sale seca y pálida; si te pasas, la grasa se acumula en el fondo. Un spray de aceite es ideal para repartirlo de manera uniforme.'
      },
      {
        title: 'No hacer caso de las instrucciones del fabricante',
        desc: 'Cada freidora de aire tiene sus particularidades: los tiempos de cocción, las temperaturas adecuadas y la colocación de la cesta varían. Consulta el manual, sigue al principio los programas recomendados y luego ajústalos a tu gusto. Marcas como Tefal y Moulinex incluyen guías detalladas con tablas de cocción.'
      },
      {
        title: 'No limpiarla con regularidad',
        desc: 'Los restos de aceite y de comida se acumulan enseguida. Una freidora de aire sucia echa humo, coge olores y rinde menos. Límpiala después de cada uso: en la mayoría de los modelos, la cesta y la bandeja de recogida van al lavavajillas. El exterior se limpia con una bayeta húmeda.'
      },
      {
        title: 'Cocinar alimentos muy húmedos sin prepararlos',
        desc: 'El agua y el aceite no se llevan bien. Si descongelas pescado o pollo, sécalos bien antes de cocinarlos. El exceso de humedad genera vapor en lugar del calor seco que necesita este tipo de cocción. Los alimentos marinados deben escurrirse un buen rato antes de meterlos en la freidora.'
      }
    ],
    maintenance_title: 'Mantenimiento y limpieza para que dure muchos años',
    maintenance_text: 'Un mantenimiento regular es lo que más alarga la vida de una freidora de aire. Después de cada uso, déjala enfriar 10-15 minutos y saca la cesta y la bandeja de recogida. Acláralas con agua templada y jabón o mételas en el lavavajillas. El revestimiento antiadherente puede desgastarse con el tiempo, sobre todo si se frota con fuerza con productos abrasivos: usa una esponja suave y productos suaves. El cuerpo principal no se debe sumergir nunca. Si se acumulan restos dentro, limpia el interior con un paño húmedo y un poco de vinagre blanco. Cada 3 o 4 meses, limpia la resistencia superior con un cepillo suave para quitarle el polvo. Comprueba que las rejillas de ventilación no estén obstruidas. Guarda la freidora en un sitio seco y protegido del polvo. Tefal y Moulinex venden kits de limpieza específicos y cestas de recambio asequibles para cuando la original se desgasta. Una freidora de aire bien cuidada dura fácilmente de 7 a 10 años.',
    recipes_title: 'Recetas fáciles para empezar',
    recipes_intro: 'Cinco recetas imprescindibles para sacarle todo el partido a la freidora de aire, perfectas si acabas de estrenarla.',
    recipes: [
      {
        title: 'Patatas fritas caseras crujientes',
        desc: 'El clásico de siempre. Corta patatas medianas en bastones de 6-7 mm. Déjalos 20 minutos en agua fría para quitarles el almidón y sécalos bien. Mézclalos con 1 cucharadita de aceite de cacahuete, sal y pimentón. Cocínalos a 200 °C durante 18-22 minutos, según el grosor, y remueve a mitad de cocción. Resultado: patatas doradas y crujientes por fuera, tiernas por dentro y sin olor a fritura en toda la casa.'
      },
      {
        title: 'Pollo asado dorado',
        desc: 'El pollo asado del domingo, en versión freidora. Un pollo entero (1,5-2 kg) se hace a 180 °C en 45-50 minutos. Úntalo antes con mantequilla blanda mezclada con hierbas provenzales (tomillo, romero, perejil). Queda crujiente por fuera, jugoso por dentro y sin la sequedad típica del horno. Prepara aparte, en otra bandeja, hortalizas de raíz (zanahorias, nabos).'
      },
      {
        title: 'Verduras asadas',
        desc: 'Calabacín, berenjena y pimientos rojos y amarillos: córtalos en dados regulares de 2 cm. Riégalos con un chorrito de aceite de oliva y salpimienta. Cocínalos a 190 °C durante 15-18 minutos. Resultado: verduras tiernas por dentro, con los bordes ligeramente caramelizados y todo el sabor que saca el calor seco. Una guarnición perfecta para cualquier plato principal.'
      },
      {
        title: 'Croquetas de queso y jamón',
        desc: 'Ingredientes: 200 g de bechamel, 100 g de queso rallado (emmental), 50 g de jamón picado y nuez moscada. Dales forma de cilindro, pásalas por huevo batido y después por pan rallado fino. Mételas 30 minutos en la nevera. Cocínalas a 190 °C durante 12-14 minutos. Resultado: doradas y crujientes por fuera, cremosas por dentro. Acompáñalas con salsa de tomate o mayonesa.'
      },
      {
        title: 'Chips de verduras caseros',
        desc: 'Corta en láminas finas (2-3 mm) patatas, remolachas y zanahorias con una mandolina. Déjalas 10 minutos en agua y sécalas bien. Riégalas con una mezcla de aceite y sal. Cocínalas a 180 °C durante 10-12 minutos, en dos tandas. Resultado: chips finísimos y crujientes, más sanos y sin aceites saturados. Guárdalos en un tarro para picar entre horas.'
      }
    ],
    verdict_title: 'Nuestro veredicto',
    verdict_text: 'Una freidora de aire es una compra inteligente para cualquier hogar que valore la salud, la comodidad y el ahorro de energía. Con una capacidad adaptada a cuántos sois en casa, una potencia suficiente (1.400 W como mínimo) y las funciones esenciales en lugar de extras que no vas a usar, la freidora de aire cambia por completo tu forma de cocinar a diario. Las patatas fritas caseras no tienen nada que envidiar a las de freidora de aceite, se hacen dos minutos antes y sin olor en toda la casa. Las verduras quedan riquísimas con aire caliente. Y los tiempos de preparación bajan muchísimo. En cinco años de uso, ahorrarás más de 100 € entre electricidad y aceite. Es verdad que no sustituye del todo al horno tradicional en algunas preparaciones (grandes cantidades, panes, repostería complicada), pero enseguida se convierte en el aparato principal para el 70-80 % de las comidas de cada día. Si vives en un piso con poco espacio, si en casa vigiláis el consumo o si simplemente te gusta la cocina buena, sencilla y rápida, la freidora de aire es una compra de la que no te arrepentirás.'
  },
  it: {
    intro_title: 'Come funziona la friggitrice ad aria',
    intro_text: 'La friggitrice ad aria ha cambiato la cucina di casa negli ultimi anni. Usa la circolazione rapida di aria molto calda (fino a 200 °C) per cuocere gli alimenti in modo uniforme e renderli croccanti senza immergerli nell\'olio. Nel 2026 è diventata un elettrodomestico fisso in molte cucine europee, perché offre un\'alternativa sana, rapida e pratica ai metodi di cottura tradizionali. Contrariamente a quanto si pensa, la friggitrice ad aria non funziona per irraggiamento né con le microonde: è un piccolo forno ventilato ad alte prestazioni. L\'aria gira intorno al cibo a grande velocità e innesca la reazione di Maillard, che crea quella crosticina dorata e croccante che piace a tutti. In pratica significa patatine fatte in casa croccanti in meno di 15 minuti, un pollo arrosto dorato in 25 minuti e verdure grigliate ben caramellate, senza l\'odore di fritto che resta per ore in cucina e sui vestiti.',
    how_to_choose_title: 'Come scegliere la friggitrice ad aria giusta',
    how_to_choose_intro: 'Oggi sul mercato ci sono centinaia di friggitrici ad aria, con prezzi che vanno da 40 € a oltre 500 €. Il modello giusto dipende dalla tua situazione: quante persone siete in casa, il budget, lo spazio disponibile e il tipo di ricette che vuoi preparare. Ecco una guida completa per scegliere senza errori.',
    capacity_title: 'Capacità: il criterio che decide',
    capacity_text: 'La capacità è probabilmente il criterio più importante quando compri una friggitrice ad aria, perché determina che cosa potrai cucinare. Per una persona sola o una coppia basta ampiamente un modello da 2-3 litri (circa 1,2-1,8 kg di patatine). Questi modelli compatti occupano poco spazio sul piano di lavoro e consumano meno. Tefal e Moulinex offrono ottimi modelli in questa fascia, perfetti per le cucine piccole. Per una famiglia di tre o quattro persone scegli una capacità di 4-5 litri (2-3 kg): è il giusto equilibrio tra praticità e consumi. Potrai cuocere un pollo intero, preparare patatine per tutti e perfino più porzioni insieme. Se in casa siete in cinque o più, punta su un modello da 6-8 litri o su una friggitrice ad aria a doppio cestello. I modelli grandi di Philips e Cosori offrono questa capacità con dimensioni ancora ragionevoli. Le friggitrici ad aria oltre i 9 litri (le cosiddette «maxi») sono adatte soprattutto ai ristoranti o a chi cucina spesso per molte persone. Tieni presente che la capacità realmente utilizzabile è in genere l\'80-90% della capacità totale dichiarata, perché bisogna lasciare spazio alla circolazione dell\'aria.',
    power_title: 'Potenza e sistema di riscaldamento',
    power_text: 'La potenza, misurata in watt (W), influisce direttamente sulla velocità di cottura e sulla capacità di rosolare bene gli alimenti. La maggior parte delle friggitrici ad aria moderne assorbe tra 800 e 2.000 W. Un modello da 1.200-1.500 W è un buon compromesso per l\'uso domestico. I modelli di fascia alta, in particolare quelli professionali o semiprofessionali, possono arrivare a 2.200 W o più: cuociono molto più in fretta e in modo più uniforme. Cerca friggitrici ad aria con tecnologia Rapid Air o sistemi equivalenti, come la convezione a doppia zona. Alcuni modelli di fascia alta hanno due resistenze (sopra e sotto) o perfino quattro zone di riscaldamento, per una cottura più uniforme: un aspetto importante soprattutto con alimenti di dimensioni diverse. Se cucini spesso, una potenza di almeno 1.400 W garantisce tempi di cottura ragionevoli anche a cestello pieno.',
    features_title: 'Funzioni e connettività',
    features_text: 'Le friggitrici ad aria moderne vanno ben oltre i semplici comandi manuali. I modelli migliori hanno da 10 a 50 programmi preimpostati per diversi alimenti: patatine, alette di pollo, verdure grigliate, frittelle, essiccazione della frutta e molto altro. Questi programmi evitano gli errori di cottura, perché impostano da soli la temperatura e il tempo ideali. Nel 2026 Wi-Fi e app per smartphone sono sempre più diffusi. Con l\'app puoi avviare la cottura a distanza, seguirne l\'avanzamento e ricevere una notifica quando il pasto è pronto. È comodo soprattutto nelle famiglie in cui ognuno rientra a un orario diverso. Il Wi-Fi, però, fa salire il prezzo in media di 50-150 €. Se badi al sodo, un semplice pannello touch con display LED e timer programmabile è più che sufficiente. I modelli con funzione di mantenimento in caldo sono ottimi per servire a orari diversi. Verifica anche che ci siano il preriscaldamento rapido e la possibilità di salvare programmi personalizzati per le tue ricette preferite.',
    materials_title: 'Materiali e qualità costruttiva',
    materials_text: 'Una friggitrice ad aria è un acquisto che, con la giusta manutenzione, dovrebbe durare 5-8 anni. I materiali sono fondamentali. Il cestello deve avere un rivestimento antiaderente sicuro e resistente, idealmente senza PFOA e BPA, o almeno conforme alle norme di sicurezza europee (marcatura CE). I marchi migliori usano rivestimenti ceramici o a base d\'acqua, che durano di più e non si staccano. Il corpo esterno deve essere robusto: acciaio inox o plastica resistente alle alte temperature. L\'acciaio inox è più resistente, ma anche più pesante e di solito più caro. La plastica per alimenti resistente al calore (ABS) va bene se è spessa e viene da produttori affidabili. Le maniglie devono essere ergonomiche e termoisolate, per evitare scottature. Controlla che cestello e accessori possano andare in lavastoviglie: è un enorme risparmio di tempo. La durata della garanzia cambia molto da marca a marca: verificala prima dell\'acquisto.',
    noise_title: 'Rumorosità',
    noise_text: 'Un aspetto che spesso si scopre solo dopo l\'acquisto è il rumore. La friggitrice ad aria funziona con una ventola ad alta velocità, che inevitabilmente fa rumore. La maggior parte dei modelli produce tra 65 e 80 decibel (dB) durante la cottura. Per avere un\'idea, una conversazione normale è intorno ai 60 dB, il traffico stradale ai 70 dB e un aspirapolvere ai 75 dB. Una friggitrice ad aria da 65 dB è piuttosto silenziosa per questo tipo di apparecchio, mentre a 80 dB comincia a dare fastidio, soprattutto la mattina presto o la sera tardi. Alcuni modelli di fascia alta, con modalità «Eco» o «silenziosa», scendono a 62-65 dB rinunciando a un po\' di velocità di cottura. Se vivi in appartamento o il rumore ti dà fastidio, conviene controllare i decibel dichiarati prima di acquistare. Le famiglie con bambini piccoli o con animali sensibili ai rumori dovrebbero tenerne particolarmente conto.',
    energy_title: 'Consumi e risparmio in bolletta',
    energy_text: 'Prendiamo come esempio la Francia, dove nel 2026 l\'elettricità costa tra 0,18 e 0,25 € al kWh a seconda della zona e del contratto (per una stima tua, usa la tariffa della tua bolletta). Una friggitrice ad aria da 1.500 W usata per 30 minuti consuma 0,75 kWh, cioè circa 0,15 € di elettricità. Un forno tradizionale (2.500-3.500 W) usato 45 minuti per lo stesso pasto costa 0,20-0,26 €: la friggitrice ad aria è già più economica. In un anno, se la usi 5 volte a settimana (la media stimata per una famiglia), sono circa 195 utilizzi, cioè 146 kWh all\'anno, per circa 26 € di elettricità. Un forno tradizionale usato anche solo 3 volte a settimana costerebbe 50-60 € all\'anno per gli stessi risultati. In Francia il risparmio reale per una famiglia media è di 25-30 € all\'anno, a cui si aggiungono l\'olio risparmiato (che si elimina o si riduce drasticamente) e il tempo guadagnato. In cinque anni, la friggitrice ad aria si ripaga quasi interamente con questo risparmio.',
    mistakes_title: 'Errori da evitare',
    mistakes_intro: 'Molti si aspettano troppo dalla friggitrice ad aria, o la usano poco perché non la conoscono. Ecco gli errori più comuni di chi la usa per la prima volta e come evitarli.',
    mistakes: [
      {
        title: 'Riempire il cestello fino all\'orlo',
        desc: 'L\'errore numero uno è sovraccaricare il cestello. L\'aria deve poter circolare liberamente intorno a ogni pezzo. Se riempi il cestello al massimo, la cottura peggiora nettamente: i pezzi al centro e sul fondo restano mollicci, mentre quelli in superficie bruciano. Riempilo al massimo al 70-80%, o cuoci in due volte se serve. Per le patatine, scuoti il cestello a metà cottura, così cuociono in modo uniforme.'
      },
      {
        title: 'Saltare il preriscaldamento',
        desc: 'A differenza del forno tradizionale, la friggitrice ad aria si preriscalda in fretta: 3-5 minuti al massimo. Eppure molti saltano questo passaggio, e così la cottura si allunga e la consistenza riesce peggio. Il preriscaldamento crea un ambiente termico stabile, in cui la reazione di Maillard si avvia subito.'
      },
      {
        title: 'Usare troppo poco o troppo olio',
        desc: 'È un mito che la friggitrice ad aria funzioni del tutto senza olio. Aggiungerne un po\' (1-2 cucchiaini) migliora molto la cottura e rende il cibo più croccante. Con troppo poco olio il risultato è secco e pallido; con troppo, il grasso in eccesso si accumula sul fondo. L\'olio spray è l\'ideale per distribuirlo in modo uniforme.'
      },
      {
        title: 'Ignorare le istruzioni del produttore',
        desc: 'Ogni friggitrice ad aria ha caratteristiche leggermente diverse: tempi di cottura, temperature ideali e posizione del cestello cambiano da un modello all\'altro. Leggi il manuale, all\'inizio segui i programmi consigliati e poi adattali ai tuoi gusti. Molti produttori includono nel manuale tabelle di cottura dettagliate.'
      },
      {
        title: 'Non pulirla regolarmente',
        desc: 'I residui di olio e di cibo si accumulano in fretta. Una friggitrice ad aria non pulita fa fumo, prende cattivi odori e cuoce peggio. Puliscila dopo ogni uso: nella maggior parte dei modelli cestello e vaschetta vanno in lavastoviglie. Il corpo esterno si pulisce con un panno umido.'
      },
      {
        title: 'Cuocere cibi molto bagnati senza prepararli',
        desc: 'Acqua e olio non si mescolano. Se scongeli pesce o pollo, asciugalo bene prima di cuocerlo. L\'umidità in eccesso crea vapore invece del calore secco necessario alla cottura ad aria. Gli alimenti marinati vanno sgocciolati a lungo prima della cottura.'
      }
    ],
    maintenance_title: 'Pulizia e manutenzione per farla durare',
    maintenance_text: 'La durata di una friggitrice ad aria dipende dalla manutenzione. Dopo ogni uso lasciala raffreddare 10-15 minuti, poi estrai il cestello e la vaschetta dei residui. Sciacquali con acqua tiepida e sapone o mettili in lavastoviglie. Con il tempo il rivestimento antiaderente può rovinarsi, soprattutto se lo strofini con forza con prodotti abrasivi: usa una spugna morbida e detergenti delicati. Non immergere mai in acqua il corpo dell\'apparecchio. Se si accumulano residui, pulisci l\'interno con un panno umido e un po\' di aceto bianco. Ogni 3-4 mesi pulisci la resistenza superiore con un pennello morbido per togliere la polvere. Controlla che le griglie di ventilazione non siano ostruite. Riponi la friggitrice ad aria in un luogo asciutto, al riparo dalla polvere. Molti marchi vendono cestelli di ricambio a prezzi contenuti, da usare quando il vecchio si rovina. Una friggitrice ad aria ben tenuta dura tranquillamente 7-10 anni.',
    recipes_title: 'Le ricette per cominciare',
    recipes_intro: 'Ecco cinque ricette immancabili per sfruttare al meglio la tua friggitrice ad aria, perfette se la stai usando da poco.',
    recipes: [
      {
        title: 'Patatine fatte in casa croccanti',
        desc: 'Il grande classico. Taglia delle patate medie a bastoncini di 6-7 mm. Lasciali in ammollo in acqua fredda per 20 minuti per eliminare l\'amido, poi asciugali bene. Condiscili con 1 cucchiaino di olio di arachidi, sale e paprika. Cuoci a 200 °C per 18-22 minuti, a seconda dello spessore, e mescola a metà cottura. Risultato: patatine dorate, croccanti fuori e morbide dentro, senza l\'odore di fritto che resta in casa.'
      },
      {
        title: 'Pollo arrosto dorato',
        desc: 'Il pollo della domenica, rivisitato. Spennella un pollo intero (1,5-2 kg) con burro morbido mescolato a erbe aromatiche (timo, rosmarino, prezzemolo) e cuocilo a 180 °C per 45-50 minuti. La pelle diventa croccante e la carne resta morbida, senza la secchezza tipica del forno. A parte, in un vassoio separato, prepara degli ortaggi a radice (carote, rape).'
      },
      {
        title: 'Verdure grigliate',
        desc: 'Zucchine, melanzane, peperoni rossi e gialli: tagliali a cubetti regolari di 2 cm. Condiscili con un filo d\'olio d\'oliva, sale e pepe. Cuoci a 190 °C per 15-18 minuti. Risultato: verdure tenere dentro, con i bordi leggermente caramellati e un sapore più intenso grazie al calore secco. Un contorno perfetto per qualsiasi secondo.'
      },
      {
        title: 'Crocchette di prosciutto e formaggio',
        desc: 'Ingredienti: 200 g di besciamella, 100 g di formaggio grattugiato (Emmental), 50 g di prosciutto cotto tritato, noce moscata. Forma dei cilindretti, passali nell\'uovo sbattuto e poi nel pangrattato fine. Lasciali in frigorifero per 30 minuti. Cuoci a 190 °C per 12-14 minuti. Risultato: crocchette dorate e croccanti fuori, morbide e filanti dentro. Servile con salsa di pomodoro o maionese.'
      },
      {
        title: 'Chips di verdure fatte in casa',
        desc: 'Affetta sottilmente (2-3 mm) patate, barbabietole e carote con una mandolina. Lasciale in ammollo 10 minuti, poi asciugale bene. Condiscile con un po\' d\'olio e sale. Cuoci a 180 °C per 10-12 minuti, in due volte. Risultato: chips sottili come carta e croccanti, più sane e senza grassi saturi. Conservale in un barattolo per uno spuntino.'
      }
    ],
    verdict_title: 'Il nostro verdetto',
    verdict_text: 'La friggitrice ad aria è un acquisto intelligente per qualsiasi famiglia che tenga alla salute, alla praticità e al risparmio energetico. Con una capacità adatta al numero di persone in casa, una potenza sufficiente (almeno 1.400 W) e le funzioni che servono davvero, senza fronzoli, cambia il tuo modo di cucinare ogni giorno. Le patatine fatte in casa non hanno niente da invidiare a quelle fritte, sono pronte 2 minuti prima e non lasciano l\'odore di fritto in tutta la casa. Le verdure cotte ad aria calda diventano buonissime. I tempi di preparazione si riducono nettamente. In cinque anni, con le tariffe dell\'esempio francese, risparmierai più di 100 € tra elettricità e olio. Certo, la friggitrice ad aria non sostituisce del tutto il forno tradizionale per alcune preparazioni (grandi quantità, pane, dolci elaborati), ma diventa presto l\'elettrodomestico principale per il 70-80% dei pasti di tutti i giorni. Per chi vive in un appartamento piccolo, per le famiglie attente ai consumi e per chiunque ami una cucina buona, semplice e veloce, la friggitrice ad aria è un acquisto di cui non ti pentirai.'
  },
  nl: {
    intro_title: 'Zo werkt een airfryer',
    intro_text: 'De airfryer, ook wel heteluchtfriteuse genoemd, heeft het koken thuis de afgelopen jaren flink veranderd. Hij laat zeer hete lucht (tot 200 °C) snel rondgaan, zodat het eten gelijkmatig gaar wordt en een knapperige buitenkant krijgt, zonder dat je het in olie hoeft onder te dompelen. In 2026 staat in veel Europese keukens een airfryer, als gezond, snel en handig alternatief voor traditionele bereidingen. Anders dan vaak wordt gedacht, werkt een airfryer niet met straling of microgolven zoals een magnetron: het is een kleine, krachtige heteluchtoven. De lucht stroomt met hoge snelheid rond het eten. Daardoor treedt de maillardreactie op, die zorgt voor de goudbruine, knapperige korst die zo geliefd is. Concreet betekent dat: zelfgemaakte, knapperige friet in minder dan 15 minuten, een goudbruine kip in 25 minuten en geroosterde groenten met mooi gekaramelliseerde randjes, zonder de frituurlucht die urenlang in je keuken en je kleren blijft hangen.',
    how_to_choose_title: 'Zo kies je de juiste airfryer',
    how_to_choose_intro: 'Er zijn honderden airfryers te koop, van zo’n 40 euro tot ruim 500 euro. Welk model het best bij je past, hangt helemaal af van je situatie: de grootte van je huishouden, je budget, de ruimte op je aanrecht en de gerechten die je wilt maken. Hieronder lees je per punt waar je op let.',
    capacity_title: 'Inhoud: de doorslaggevende factor',
    capacity_text: 'De inhoud is waarschijnlijk het belangrijkste criterium bij het kopen van een airfryer, want die bepaalt direct wat je erin kunt maken. Voor één persoon of een stel is een airfryer van 2 tot 3 liter (ongeveer 1,2 tot 1,8 kg friet) ruim voldoende. Deze compacte modellen, ook wel eenpersoonsairfryers genoemd, nemen weinig ruimte in op het aanrecht en verbruiken minder stroom. Tefal en Moulinex hebben goede modellen in deze categorie, ideaal voor een kleine keuken. Voor een gezin van drie tot vier personen kies je een inhoud van 4 tot 5 liter (2 tot 3 kg). Die modellen bieden een goede balans tussen gemak en energieverbruik: je bakt er een hele kip in, maakt friet voor het hele gezin en bereidt zelfs meerdere porties tegelijk. Heb je een groot gezin van vijf personen of meer, kies dan een airfryer van 6 tot 8 liter of een dubbele airfryer met twee manden. De grote modellen van Philips en Cosori bieden die inhoud en blijven toch redelijk compact. Airfryers van meer dan 9 liter zijn vooral geschikt voor restaurants of voor huishoudens die vaak voor veel mensen koken. Let op: de bruikbare inhoud is meestal 80 tot 90% van de opgegeven inhoud, want de lucht moet vrij kunnen circuleren.',
    power_title: 'Vermogen en verwarmingstechniek',
    power_text: 'Het vermogen, uitgedrukt in watt (W), bepaalt direct hoe snel een airfryer bakt en hoe goed hij het eten dichtschroeit. De meeste moderne airfryers hebben een vermogen van 800 tot 2.000 W. Een model van 1.200 tot 1.500 W is een goed compromis voor normaal gebruik thuis. Topmodellen, zoals professionele of semiprofessionele airfryers, halen 2.200 W of meer. Daarmee bak je duidelijk sneller en wordt de warmte beter verdeeld. Kies een airfryer met Rapid Air-technologie of een vergelijkbaar systeem, zoals convectie met twee zones. Tefal en Moulinex gebruiken een eigen systeem voor de luchtcirculatie, en Philips belooft met zijn QuickCook-technologie heel snel op te warmen. Sommige topmodellen hebben twee verwarmingselementen (boven en onder) of zelfs vier verwarmingszones. Zo wordt alles gelijkmatiger gaar, wat vooral telt als de stukken niet even groot zijn. Kook je vaak voor het hele gezin, kies dan minstens 1.400 W: dan blijven de baktijden redelijk, ook met een volle mand.',
    features_title: 'Functies, wifi en app',
    features_text: 'Moderne airfryers kunnen veel meer dan een draaiknop en een timer. De beste modellen hebben 10 tot 50 automatische programma’s voor verschillende gerechten: friet, kippenvleugels, geroosterde groenten, beignets, gedroogd fruit en nog veel meer. Die programma’s stellen automatisch de juiste temperatuur en tijd in, zodat je minder snel iets verkeerd doet. Wifi en een eigen app worden in 2026 steeds gewoner. Met de app start je het bakken op afstand, volg je hoe ver het is en krijg je een melding als het eten klaar is. Handig in een druk huishouden waar iedereen op een ander moment thuiskomt. Wifi maakt een airfryer wel gemiddeld 50 tot 150 euro duurder. Ben je praktisch ingesteld, dan heb je genoeg aan een eenvoudig aanraakpaneel met ledscherm en een programmeerbare timer. Een warmhoudfunctie is handig als niet iedereen tegelijk eet. Kijk ook of er een snelle voorverwarmstand is en of je eigen instellingen voor je favoriete recepten kunt opslaan.',
    materials_title: 'Materialen en bouwkwaliteit',
    materials_text: 'Een airfryer is een aankoop die met goed onderhoud 5 tot 8 jaar moet meegaan. De materialen zijn daarbij doorslaggevend. De mand moet een veilige, duurzame antiaanbaklaag hebben, bij voorkeur zonder PTFE en BPA, of op zijn minst met de Europese CE-markering. De beste merken gebruiken keramische coatings of coatings op waterbasis, die langer meegaan en niet loslaten. De behuizing moet stevig zijn: roestvrij staal of kunststof dat tegen hoge temperaturen kan. Roestvrij staal gaat langer mee, maar is zwaarder en meestal duurder. Hittebestendig kunststof (ABS) dat geschikt is voor contact met voedsel, is prima als het dik genoeg is en van een betrouwbare fabrikant komt. De handgrepen moeten goed in de hand liggen en geïsoleerd zijn, zodat je je niet brandt. Controleer of de mand en de accessoires in de vaatwasser mogen: dat scheelt veel tijd. Kijk ook naar de garantietermijn, want die verschilt per merk.',
    noise_title: 'Geluidsniveau',
    noise_text: 'Een punt dat vaak pas na de aankoop opvalt: het geluid. Een airfryer werkt met een snel draaiende ventilator, en die maakt onvermijdelijk geluid. De meeste modellen produceren tijdens het bakken 65 tot 80 decibel (dB). Ter vergelijking: een normaal gesprek zit rond 60 dB, verkeer rond 70 dB en een stofzuiger rond 75 dB. Een airfryer van 65 dB is voor dit type apparaat vrij stil, bij 80 dB wordt het hinderlijk, vooral vroeg in de ochtend of laat op de avond. Sommige topmodellen, zoals de “EcoMode”- of stille versies van Philips en Moulinex, gaan terug naar 62 tot 65 dB, ten koste van een iets langere baktijd. Woon je in een appartement of heb je snel last van geluid, kijk dan voor de aankoop naar het opgegeven geluidsniveau. Vooral met jonge kinderen of geluidsgevoelige huisdieren in huis is dat de moeite waard.',
    energy_title: 'Energieverbruik en besparing',
    energy_text: 'Wat kost een airfryer aan stroom? Een airfryer van 1.500 W die 30 minuten aanstaat, verbruikt 0,75 kWh. Bij een voorbeeldtarief van 0,25 euro per kWh (vul je eigen tarief in) kost dat ongeveer 0,19 euro. Een traditionele oven van 2.500 tot 3.500 W die 45 minuten aanstaat voor hetzelfde gerecht, verbruikt op vol vermogen 1,9 tot 2,6 kWh, oftewel 0,47 tot 0,66 euro. De airfryer is dus duidelijk zuiniger. Gebruik je hem vijf keer per week (een gemiddelde schatting voor een gezin), dan kom je op zo’n 260 keer en 195 kWh per jaar: ongeveer 49 euro aan stroom. Een oven die je maar drie keer per week gebruikt, kost op vol vermogen al 73 tot 102 euro per jaar. Je bespaart dus al snel 25 euro of meer per jaar, plus wat je uitspaart op frituurolie (die je niet of veel minder nodig hebt) en op tijd. In vijf jaar verdient een airfryer zich zo grotendeels terug.',
    mistakes_title: 'Veelgemaakte fouten',
    mistakes_intro: 'Veel mensen kopen een airfryer met onrealistische verwachtingen, of halen er te weinig uit omdat ze niet weten hoe je hem goed gebruikt. Dit zijn de fouten die nieuwe gebruikers het vaakst maken, en zo voorkom je ze.',
    mistakes: [
      {
        title: 'De mand te vol doen',
        desc: 'Fout nummer één: de mand te vol doen. De lucht moet vrij rond elk stuk kunnen stromen. Vul je de mand tot de rand, dan wordt het resultaat slechter: wat in het midden en onderin ligt, blijft slap, terwijl de bovenste laag verbrandt. Vul de mand tot maximaal 70 à 80%, of bak in twee keer. Bak je friet? Schud de mand dan halverwege, zodat alles gelijkmatig gaar wordt.'
      },
      {
        title: 'Niet voorverwarmen',
        desc: 'Anders dan een oven is een airfryer snel voorverwarmd: hooguit 3 tot 5 minuten. Toch slaan veel gebruikers deze stap over. Daardoor duurt het bakken langer en wordt het resultaat minder knapperig. Door voor te verwarmen is de temperatuur meteen stabiel, zodat de maillardreactie direct op gang komt.'
      },
      {
        title: 'Te weinig of te veel olie gebruiken',
        desc: 'Het is een mythe dat een airfryer helemaal zonder olie werkt. Een klein beetje olie (een tot twee theelepels) geeft een duidelijk beter en knapperiger resultaat. Te weinig olie maakt het eten droog en bleek. Te veel olie verzamelt zich onderin. Met een oliespray verdeel je de olie het gelijkmatigst.'
      },
      {
        title: 'De handleiding negeren',
        desc: 'Elke airfryer werkt net iets anders. Baktijden, de beste temperaturen en de plaats van de mand verschillen per model. Lees de handleiding, volg in het begin de voorgestelde programma’s en pas ze daarna aan je eigen smaak aan. Tefal en Moulinex leveren bijvoorbeeld uitgebreide handleidingen met baktabellen.'
      },
      {
        title: 'Niet regelmatig schoonmaken',
        desc: 'Olie- en etensresten hopen zich snel op. Een vuile airfryer gaat roken, gaat ruiken en presteert slechter. Maak hem na elk gebruik schoon: bij de meeste modellen mogen de mand en de opvangbak in de vaatwasser. De buitenkant neem je af met een vochtige doek.'
      },
      {
        title: 'Natte ingrediënten niet afdrogen',
        desc: 'Water en olie gaan niet samen. Ontdooi je vis of kip, dep die dan goed droog voordat je gaat bakken. Te veel vocht geeft stoom in plaats van de droge hitte die een airfryer nodig heeft. Laat gemarineerd vlees of gemarineerde vis eerst goed uitlekken.'
      }
    ],
    maintenance_title: 'Onderhoud en schoonmaak voor een lange levensduur',
    maintenance_text: 'Hoe lang je airfryer meegaat, hangt sterk af van het onderhoud. Laat hem na elk gebruik 10 tot 15 minuten afkoelen en haal dan de mand en de opvangbak eruit. Spoel ze af in warm sop of zet ze in de vaatwasser. De antiaanbaklaag kan na verloop van tijd slijten, vooral als je hard schrobt met schurende middelen. Gebruik daarom een zachte spons en een mild schoonmaakmiddel. Dompel het apparaat zelf nooit onder in water. Neem de binnenkant af met een vochtige doek en wat schoonmaakazijn als er resten achterblijven. Maak elke drie tot vier maanden het verwarmingselement bovenin voorzichtig stofvrij met een zachte borstel. Controleer of de ventilatieroosters vrij zijn. Bewaar je airfryer op een droge, stofvrije plek. Tefal en Moulinex verkopen speciale schoonmaaksets en vervangende manden voor als de oude versleten is. Een goed onderhouden airfryer gaat makkelijk 7 tot 10 jaar mee.',
    recipes_title: 'Populaire recepten om mee te beginnen',
    recipes_intro: 'Met deze vijf vaste recepten haal je alles uit je airfryer. Ideaal als je net begint.',
    recipes: [
      {
        title: 'Knapperige zelfgemaakte friet',
        desc: 'De klassieker. Snijd middelgrote aardappelen in staafjes van 6 tot 7 mm. Laat ze 20 minuten in koud water weken om het zetmeel te verwijderen en dep ze goed droog. Meng ze met 1 theelepel arachideolie, zout en paprikapoeder. Bak ze 18 tot 22 minuten op 200 °C, afhankelijk van de dikte. Schud de mand halverwege. Resultaat: goudbruine friet, knapperig vanbuiten en zacht vanbinnen, zonder frituurlucht die blijft hangen.'
      },
      {
        title: 'Goudbruine kip uit de airfryer',
        desc: 'De Franse zondagse kip in een nieuw jasje. Bak een hele kip (1,5 tot 2 kg) 45 tot 50 minuten op 180 °C. Bestrijk hem vooraf met zachte boter, gemengd met Provençaalse kruiden (tijm, rozemarijn, peterselie). Resultaat: knapperig vanbuiten, mals vanbinnen en niet zo droog als vaak in de oven. Bereid wortelgroenten (wortels, rapen) apart in een tweede bakje.'
      },
      {
        title: 'Geroosterde groenten',
        desc: 'Courgette, aubergine en rode en gele paprika: snijd ze in gelijke blokjes van 2 cm. Besprenkel ze met een beetje olijfolie en breng op smaak met zout en peper. Bak ze 15 tot 18 minuten op 190 °C. Resultaat: zacht vanbinnen, licht gekaramelliseerde randjes en een volle smaak door de droge hitte. Past bij elk hoofdgerecht.'
      },
      {
        title: 'Knapperige kroketjes van kaas en ham',
        desc: 'Ingrediënten: 200 g bechamelsaus, 100 g geraspte emmentaler, 50 g fijngehakte ham en wat nootmuskaat. Vorm er rolletjes van, haal ze door losgeklopt ei en daarna door fijn paneermeel. Laat ze 30 minuten opstijven in de koelkast. Bak ze 12 tot 14 minuten op 190 °C. Resultaat: goudbruin en knapperig vanbuiten, romig vanbinnen. Lekker met tomatensaus of mayonaise.'
      },
      {
        title: 'Zelfgemaakte groentechips',
        desc: 'Snijd aardappelen, bieten en wortels met een mandoline in dunne plakjes van 2 tot 3 mm. Laat ze 10 minuten weken en dep ze goed droog. Meng ze met een beetje olie en zout. Bak ze 10 tot 12 minuten op 180 °C, in twee porties. Resultaat: flinterdunne, knapperige chips, gezond en zonder verzadigd frituurvet. Bewaar ze in een afgesloten pot om tussendoor te snoepen.'
      }
    ],
    verdict_title: 'Ons oordeel',
    verdict_text: 'Een airfryer is een slimme aankoop voor elk huishouden dat gezond, gemakkelijk en zuinig wil koken. Kies een inhoud die past bij je huishouden, een vermogen van minimaal 1.400 W en de functies die je echt nodig hebt in plaats van overbodige extra’s. Dan verandert een airfryer de manier waarop je elke dag kookt. Zelfgemaakte friet kan zich meten met gefrituurde friet, is twee minuten sneller klaar en laat geen frituurlucht achter. Groenten worden heerlijk met hete lucht. De bereidingstijd gaat flink omlaag. Over vijf jaar bespaar je meer dan 100 euro aan stroom en frituurolie. Natuurlijk vervangt een airfryer de oven niet helemaal voor sommige bereidingen (grote hoeveelheden, brood, ingewikkeld gebak), maar hij wordt al snel je belangrijkste keukenapparaat voor 70 tot 80% van je dagelijkse maaltijden. Woon je klein, let je als gezin op je energieverbruik of houd je gewoon van eenvoudig, snel en goed eten? Dan is een airfryer een aankoop waar je geen spijt van krijgt.'
  },
  pl: {
    intro_title: 'Czym jest frytkownica beztłuszczowa?',
    intro_text: 'Frytkownica na gorące powietrze, nazywana też frytkownicą beztłuszczową (ang. air fryer), w ostatnich latach odmieniła domowe gotowanie. Wykorzystuje szybki obieg bardzo gorącego powietrza (do 200 °C), dzięki któremu potrawy pieką się równomiernie i stają się chrupiące bez zanurzania w oleju. W 2025 roku na polski rynek trafiło ponad milion frytkownic na gorące powietrze, dwa razy więcej niż rok wcześniej (APPLiA Polska), a dla wielu domów to dziś zdrowa, szybka i wygodna alternatywa dla smażenia w oleju. Wbrew obiegowym opiniom frytkownica nie działa na zasadzie promieniowania ani mikrofal – to mały, wydajny piekarnik z termoobiegiem. Powietrze krąży wokół potraw z dużą prędkością i wywołuje reakcję Maillarda, dzięki której powstaje lubiana złocista, chrupiąca skórka. W praktyce oznacza to chrupiące domowe frytki w niecałe 15 minut, złocistego pieczonego kurczaka w 25 minut i grillowane warzywa z idealnie skarmelizowanymi brzegami – bez zapachu smażenia, który godzinami unosi się w kuchni i wnika w ubrania.',
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
    energy_title: 'Ile prądu zużywa air fryer?',
    energy_text: 'Zanim kupisz, warto policzyć, ile prądu zużywa air fryer. Wzór jest prosty: moc w kW × czas w godzinach = zużycie w kWh. Model o mocy 1500 W pracujący 30 minut zużywa najwyżej 0,75 kWh, czyli ok. 87 gr przy stawce 1,16 zł/kWh, którą do wyliczeń przyjmuje APPLiA Polska. Tradycyjny piekarnik (2500–3500 W) pieczący to samo danie przez 45 minut zużywa najwyżej 1,9–2,6 kWh, czyli ok. 2,18–3,05 zł. W praktyce oba urządzenia zużywają mniej, bo termostat co chwilę wyłącza grzałkę, ale air fryer nagrzewa mniejszą komorę i szybciej kończy pieczenie. Przy 4 posiłkach w tygodniu (ok. 200 w roku) air fryer 1500 W zużyje najwyżej ok. 150 kWh, czyli ok. 174 zł rocznie, a oleju zużyjesz znacznie mniej albo wcale. Do własnych wyliczeń weź stawkę z rachunku za prąd (energia razem z dystrybucją).',
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
    power_text: 'Power, measured in watts (W), has a direct effect on cooking speed and on how well food sears. Most air fryers sold in the US draw between 800 W and 1,800 W. A 1,200 to 1,500 W model is a good fit for everyday home use. Larger premium models sit near the top of that range: the Cosori Dual Blaze 6.8-Quart, for example, is rated at 1,750 W. Look for air fryers with Rapid Air technology or an equivalent system, such as dual-zone convection. Philips promises ultra-fast heating with its QuickCook technology, while other manufacturers use their own optimized airflow systems. Some high-end models have dual heating elements (top and bottom) or even four heating zones for more even cooking, which matters most when you cook pieces of different sizes. If you cook often, a minimum of 1,400 W keeps cooking times reasonable even with a full basket. Knowing the wattage also helps you predict cooking times and your electric bill. US models use a standard 120 V plug rated for 15 A, which caps them at about 1,800 W, so avoid running another high-wattage appliance on the same circuit at the same time.',
    features_title: 'Features and smart connectivity',
    features_text: 'Modern air fryers go well beyond simple manual dials. The best models include 10 to 50 presets for different foods: fries, chicken wings, roasted vegetables, fritters, dehydrated fruit and much more. Presets take the guesswork out of cooking by setting the right temperature and time automatically. Wi-Fi and dedicated smartphone apps are increasingly common in 2026. With an app, you can start cooking remotely, check progress in real time and get a notification when dinner is ready. That\'s especially handy in busy households where people get home at different times. However, connectivity typically adds $60 to $150 to the price. If you\'re practical, a simple touch panel with an LED display and a programmable timer is all you need. Models with a keep-warm function are great for serving people at different times. Also look for a rapid-preheat program and the ability to save custom settings for your favorite recipes. The best apps also offer recipe ideas and step-by-step cooking guidance.',
    materials_title: 'Materials and build quality',
    materials_text: 'An air fryer is an investment that should last 5 to 8 years with proper care, so materials matter. The cooking basket needs a safe, durable nonstick coating, ideally BPA-free; many US listings now advertise PFAS-free or non-toxic ceramic coatings, and the appliance itself should carry a UL or ETL listing mark. The best brands use ceramic or water-based coatings that last longer and resist peeling. The outer housing should be sturdy: stainless steel or heat-resistant plastic. Stainless steel is more durable but heavier and usually pricier. High-quality, heat-resistant food-grade plastic (ABS) is fine if it\'s thick enough and comes from a reputable manufacturer. Handles should be ergonomic and insulated to prevent burns. Check that the basket and accessories are dishwasher-safe: it saves a lot of time. Warranty length varies by brand and model, so compare it before you buy: a longer warranty is a sign the maker expects the unit to last. Read independent reviews from appliance testing organizations to get a sense of real-world longevity.',
    noise_title: 'Noise level',
    noise_text: 'Noise is often overlooked until the day you bring the air fryer home: these appliances run a high-speed fan, so some sound is unavoidable. Most models produce 65 to 80 decibels (dB) while cooking. For reference, normal conversation is about 60 dB, street traffic about 70 dB and a vacuum cleaner about 75 dB. An air fryer at 65 dB is fairly quiet for this type of appliance, while 80 dB gets genuinely annoying, especially early in the morning or late at night. Some premium models, including the “EcoMode” or quiet versions from Philips and other manufacturers, bring noise down to 62–65 dB by giving up a little cooking speed. If you live in an apartment or you\'re sensitive to noise, it\'s worth checking the decibel rating before you buy. Households with young children or noise-sensitive pets should pay particular attention. Owner reviews that mention noise give you a real-world picture that spec sheets can\'t.',
    energy_title: 'Energy use and savings',
    energy_text: 'An air fryer\'s energy use is worth running the numbers on. We use the US average residential rate of 18.16 cents per kWh (EIA, August 2026) here; check the rate on your utility bill, since it varies widely by state and utility (15.91 cents in Texas, 29.75 cents in California). A 1,500 W air fryer running for 30 minutes uses 0.75 kWh, or about 14 cents of electricity. A full-size electric oven (2,500 to 3,500 W) running for 45 minutes for the same meal costs about 34 to 48 cents, so the air fryer is already cheaper to run. Over a year, if you use your air fryer five times a week (a typical family estimate), that\'s about 260 uses and 195 kWh, or roughly $35 in electricity. An oven used just three times a week would cost about $53 to $74 a year for the same results. Actual savings depend on how much oven cooking the air fryer really replaces, and you also save on cooking oil (cut out or sharply reduced) and prep time. Over five years of ownership, an air fryer can come close to paying for itself through energy savings alone.',
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
    verdict_text: 'An air fryer is a smart buy for any household that values health, convenience and energy efficiency. Choose a capacity that fits your household, enough power (1,400 W minimum) and the features you\'ll actually use rather than extras you won\'t, and it will change the way you cook every day. Homemade fries rival the deep-fried kind, cook a couple of minutes faster and leave no lingering smell. Vegetables become genuinely delicious. Prep time drops dramatically. Over five years, you can save well over $100 in electricity and cooking oil at the US average residential rate of 18.16 cents per kWh (EIA, August 2026). Granted, an air fryer doesn\'t fully replace an oven for some jobs (big batches, bread, elaborate pastries), but it quickly becomes your go-to appliance for 70 to 80% of everyday meals. For apartment dwellers short on space, energy-conscious families and anyone who loves simple, fast, genuinely good food, an air fryer is a purchase you won\'t regret.',
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
    materials_text: 'An air fryer is an investment that should last five to eight years with proper care, so materials matter. The cooking basket needs a safe, durable non-stick coating, ideally PFOA-free and BPA-free, and the appliance should at least carry the required safety marks (in Canada, look for a recognized certification mark such as CSA, cUL or cETL). Premium brands use ceramic or water-based coatings that outlast traditional PTFE and resist peeling. The outer housing should be sturdy: either stainless steel or heat-resistant, food-grade plastic. Stainless steel is more durable but adds weight and cost. High-quality, heat-resistant ABS plastic is acceptable if it\'s thick enough and comes from a reputable manufacturer. Handles should be ergonomic and insulated to prevent burns. Check that the basket and accessories are dishwasher-safe: it saves a lot of time. Warranty length varies by brand, so check the manufacturer\'s warranty for the Canadian model: a longer warranty is a sign of confidence in durability. Read reviews from independent appliance testing organizations to gauge real-world longevity.',
    noise_title: 'Noise Level Considerations',
    noise_text: 'Noise is often overlooked until the day you buy: air fryers rely on high-speed fans, so some sound is unavoidable. Most models produce 65 to 80 decibels (dB) while cooking. For reference, normal conversation is about 60 dB, traffic noise 70 dB and a vacuum cleaner 75 dB. An air fryer at 65 dB is relatively quiet for this type of appliance, while 80 dB gets genuinely annoying, especially early in the morning or late in the evening. Some premium models, particularly "EcoMode" or "silent" versions from Philips and other manufacturers, bring noise down to 62 to 65 dB by giving up a little cooking speed. If you live in an apartment or are sensitive to noise, check the decibel rating before you buy. Households with young children or noise-sensitive pets should pay particular attention. Owner reviews that mention noise give you a real-world picture that spec sheets can\'t.',
    energy_title: 'Energy Consumption and Cost Savings',
    energy_text: 'In 2026, an air fryer\'s energy use is worth a quick calculation. A 1,500 W air fryer running for 30 minutes uses 0.75 kWh, while a traditional oven (2,500 to 3,500 W) running for 45 minutes to cook the same meal uses about 1.9 to 2.6 kWh, so the air fryer is clearly cheaper to run. Over a year, about 195 air fryer sessions add up to roughly 146 kWh, while an oven used three times a week for the same results uses about 300 to 400 kWh. That\'s a saving of roughly 150 to 260 kWh a year, plus savings on cooking oil (cut out or greatly reduced) and prep time. Multiply those kWh by the rate on your electricity bill, which depends on your province and your utility.',
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
    verdict_text: 'An air fryer is a smart investment for any household that values health, convenience and energy efficiency. With a capacity that suits your household, enough power (at least 1,400 W) and the features you\'ll actually use rather than unnecessary extras, an air fryer changes the way you cook every day. Homemade fries rival takeout, cook a couple of minutes faster and leave no lingering smell. Vegetables become genuinely delicious when air-fried. Prep times drop dramatically. Over the years, the savings on electricity and cooking oil add up. Of course, an air fryer doesn\'t fully replace a traditional oven for some things (cooking in large quantities, breads, complex pastries), but it quickly becomes your main cooking appliance for 70 to 80% of everyday meals. For apartment and condo dwellers short on space, energy-conscious families and anyone who appreciates simple, fast, genuinely good food, an air fryer is a purchase you won\'t regret.',
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
