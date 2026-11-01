import { getDictionary } from '../../../[lang]/dictionaries'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import CookieBanner from '@/components/CookieBanner'
import ProductHeroVisual from '@/components/ProductHeroVisual'
import ProductVisual from '@/components/ProductVisual'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import AffiliateLink from '@/components/AffiliateLink'
import { getStaticProducts } from '@/lib/products'
import { buildPageMetadata, buildArticleSchema, SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Kicker, SiteFooter, Button } from '@/components/ui'
import { resolveLang } from '@/lib/i18n'
import { CHAPTER_LABEL } from '@/lib/editorial-labels'

const pageContent: Record<string, {
  title: string
  subtitle: string
  intro: string
  intro_long: string
  how_airfryer_works_title: string
  how_airfryer_works: string
  how_oven_works_title: string
  how_oven_works: string
  comparison_title: string
  rows: { criteria: string; airfryer: string; oven: string }[]
  cooking_time_title: string
  cooking_time: string
  energy_consumption_title: string
  energy_consumption: string
  cooking_quality_title: string
  cooking_quality: string
  capacity_title: string
  capacity: string
  cleaning_title: string
  cleaning: string
  noise_title: string
  noise: string
  cost_title: string
  cost: string
  when_choose_airfryer_title: string
  when_choose_airfryer: string
  when_keep_oven_title: string
  when_keep_oven: string
  replace_oven_title: string
  replace_oven: string
  verdict_title: string
  verdict: string
  choose_airfryer_title: string
  choose_airfryer: string
  choose_oven_title: string
  choose_oven: string
}> = {
  fr: {
    title: 'Airfryer vs Four Traditionnel : Le Comparatif Définitif 2026',
    subtitle: 'Friteuse sans huile ou four classique ? On a comparé les deux pour vous aider à choisir.',
    intro: 'L\'airfryer (friteuse à air chaud) et le four traditionnel sont deux appareils de cuisson essentiels. Mais lequel est le plus adapté à vos besoins ? Nous avons comparé ces deux technologies sur 7 critères clés pour vous aider à faire le bon choix.',
    intro_long: 'En 2026, face à la hausse continue des tarifs EDF et la prise de conscience environnementale croissante, le choix entre un airfryer et un four traditionnel devient une décision majeure pour des millions de foyers français. L\'airfryer, autrefois gadget exotique, représente aujourd\'hui une véritable révolution culinaire qui transforme la façon dont nous préparons nos repas. Avec une consommation énergétique jusqu\'à 50% inférieure à celle d\'un four classique et des temps de cuisson réduits de moitié, cet appareil fait la une des débats dans les cuisines françaises. Mais peut-il vraiment remplacer votre four ? Est-ce un investissement judicieux ou une simple tendance passagère ? Ce guide complet explore chaque aspect de cette comparaison, en s\'appuyant sur des données concrètes et des scénarios réalistes pour vous aider à prendre la meilleure décision possible.',
    how_airfryer_works_title: 'Comment fonctionne un airfryer ?',
    how_airfryer_works: 'L\'airfryer (friteuse sans huile) repose sur une technologie révolutionnaire appelée Rapid Air ou convection haute vitesse. Contrairement à une simple friteuse classique qui utilise l\'huile pour cuire les aliments, l\'airfryer chauffe l\'air à très haute température (jusqu\'à 220°C) et le propulse à grande vitesse autour des aliments via un puissant ventilateur placé sous le couvercle. Ce flux d\'air chaud concentré crée une couche externe croustillante en quelques minutes à travers un phénomène appelé réaction de Maillard accélérée. L\'élément chauffant au-dessus du panier génère la chaleur initiale, tandis que le ventilateur assure une circulation d\'air uniformément répartie. Grâce à ce système, l\'airfryer utilise uniquement 800 à 1800 watts d\'électricité et atteint les températures de cuisson en 2 à 3 minutes seulement. Les aliments sont placés dans un panier perforé qui permet à l\'air de circuler librement sur toutes les surfaces, créant ainsi cet effet "frit" tant apprécié sans ajouter une seule goutte d\'huile. Les résidus alimentaires tombent dans le fond du réceptacle, loin du panier, permettant une récupération facile et un nettoyage rapide.',
    how_oven_works_title: 'Comment fonctionne un four traditionnel ?',
    how_oven_works: 'Le four traditionnel classique, qu\'il soit électrique ou gaz, chauffe l\'air intérieur par rayonnement et conduction thermique. Une résistance électrique (ou un brûleur gaz) en bas et/ou en haut du four crée la chaleur, qui se propage progressivement dans toute la cavité. Le processus est relativement lent : il faut généralement 10 à 15 minutes pour préchauffer un four à 200°C. Une fois préchaufé, la chaleur rayonnante et conductrice enveloppe les aliments de manière plus diffuse et homogène qu\'avec un airfryer, permettant une cuisson uniforme mais sans ce croustillant externe rapide. Les fours modernes proposent souvent une fonction "convection" ou "chaleur tournante" qui ajoute un ventilateur pour accélérer légèrement la circulation de l\'air, améliorant l\'uniformité de cuisson et réduisant les temps de 10 à 20%. Cependant, même en mode convection, la puissance totale reste importante : entre 2000 et 3000 watts selon le modèle. La cavité volumineux (50-80 litres) nécessite beaucoup d\'énergie pour maintenir la température stable. Les fours permettent cuire plusieurs plats simultanément grâce à leur espace, un avantage incontestable pour les familles nombreuses ou les préparations élaborées.',
    comparison_title: 'Comparaison détaillée sur 7 critères',
    rows: [
      { criteria: 'Temps de préchauffage', airfryer: '2-3 minutes', oven: '10-15 minutes' },
      { criteria: 'Consommation énergétique', airfryer: '800-1800W (30-50% économie)', oven: '2000-3000W' },
      { criteria: 'Qualité de cuisson croustillante', airfryer: 'Excellent (air concentré)', oven: 'Bon (convection)' },
      { criteria: 'Capacité maximale', airfryer: '3-10L (1-8 personnes)', oven: '50-80L (illimité)' },
      { criteria: 'Facilité de nettoyage', airfryer: 'Très facile (panier amovible)', oven: 'Difficile (sauf pyrolyse)' },
      { criteria: 'Polyvalence', airfryer: 'Frites, viandes, légumes, gâteaux', oven: 'Tout type de plat' },
      { criteria: 'Prix moyen', airfryer: '60€ - 350€', oven: '200€ - 2000€' },
    ],
    cooking_time_title: 'Temps de cuisson : L\'airfryer gagne à la vitesse',
    cooking_time: 'La différence la plus spectaculaire entre ces deux appareils se manifeste dans la durée de cuisson. Pour les frites surgelées, un airfryer prépare une portion en 15 minutes (préchauffage inclus), tandis qu\'un four conventionnel en demande 35 à 40 minutes. Un poulet entier ? 25 à 30 minutes à l\'airfryer contre 55 à 60 minutes au four. Ces chiffres varient selon la taille et l\'épaisseur des aliments, mais la tendance est constante : l\'airfryer réduit le temps de cuisson de 50 à 60% en moyenne. Cette accélération est cruciale pour les familles actives qui cherchent à préparer un repas complet en moins de 30 minutes. Le préchauffage rapide de l\'airfryer (2-3 minutes) signifie que vous pouvez commencer à cuire presque immédiatement après avoir actionné l\'appareil, contrairement au four qui demande une attente de 10-15 minutes. Pour les pâtes, riz ou plats mijotés, la différence est moins marquée car les fours gèrent mieux les cuissons lentes et longues.',
    energy_consumption_title: 'Consommation énergétique : Des économies substantielles',
    energy_consumption: 'La consommation énergétique représente un facteur décisif pour les ménages français confrontés à des factures EDF en augmentation constante. Un airfryer consomme généralement entre 800 et 1800 watts, tandis qu\'un four électrique classique fonctionne à 2000-3000 watts. Pour une utilisation quotidienne de 30 minutes (une portion d\'airfryer équivaut à peu près une utilisation four), l\'airfryer consomme 0,4 à 0,9 kWh par jour, soit 146 à 329 kWh par an. Un four utilisé 50 minutes quotidiennement consomme 1,67 à 2,5 kWh par jour, soit 610 à 912 kWh annuellement. Avec un tarif moyen français de 0,25€ par kWh en 2026, cela représente une économie annuelle de 115 à 190€ si vous remplacez complètement votre four par un airfryer. Ces chiffres deviennent encore plus avantageux si vous avez également déjà un four et que vous l\'utilisiez "en complément" : vous économiserez surtout sur les cuissons quotidiennes rapides. La plupart des airfryers récents possèdent une régulation thermique intelligente qui réduit la consommation lors du maintien en chaleur.',
    cooking_quality_title: 'Qualité de cuisson : Deux approches différentes',
    cooking_quality: 'La qualité de cuisson diffère profondément entre ces deux technologies. L\'airfryer excelle dans la création de textures croustillantes et dorées grâce à son flux d\'air concentré et à haute température qui accélère la caramélisation. Frites, nuggets, ailes de poulet, beignets de crevettes : tous ces aliments deviennent incroyablement croustillants à l\'extérieur tout en restant tendres à l\'intérieur. Le résultat est souvent comparé à une friture à l\'huile sans les calories supplémentaires. Le four traditionnel, particulièrement en mode convection, produit une cuisson plus uniforme mais moins aggressive. Les surfaces ne caramélisent pas aussi rapidement, mais la cuisson interne est souvent plus homogène sur les pièces volumineuses. Pour une pizza ou une focaccia, le four fournit une texture de pâte supérieure avec un croustillant mesuré. Les rôtis de boeuf ou d\'agneau prennent une belle croûte dorée au four, mais cette croûte est généralement moins intense qu\'à l\'airfryer. En pâtisserie, le four reste incomparable : les gâteaux, pains et viennoiseries nécessitent une chaleur plus stable et progressive que ce qu\'un airfryer peut offrir. Les gâteaux cuits à l\'airfryer risquent une croûte sèche avec un centre mal cuit.',
    capacity_title: 'Capacité et polyvalence : Qui fait quoi ?',
    capacity: 'Un airfryer typique possède un volume de 3 à 10 litres, ce qui accommode 1 à 8 personnes selon le plat. Vous pouvez cuire 4-5 portions de frites, 2-3 poitrines de poulet, ou environ 20-30 brocolis d\'un coup. Pour les familles de 4-5 personnes, c\'est souvent suffisant pour un repas complet. Les fours offrent 50 à 80 litres (parfois plus dans les modèles très grandes), permettant de cuire plusieurs plats différents simultanément : un rôti, des légumes rôtis, et un gratin d\'amandes sur trois niveaux différents. Cette capacité est irremplçable pour les repas familiaux ou festifs. En termes de polyvalence, l\'airfryer gère excellemment : frites, viandes blanches ou rouges, poisson, fruits de mer, légumes, même certains desserts simples (brownies, clafoutis). Mais certains plats lui résistent : une pizza artisanale, un pain maison, une tarte tatin ou un gratin de pâtes. Le four reste l\'outil incontournable pour ces préparations. Un compromis populaire : posséder les deux appareils, utiliser l\'airfryer pour les repas quotidiens rapides (50-60% des jours) et le four pour les occasions où on a plus de temps ou plus d\'invités.',
    cleaning_title: 'Facilité de nettoyage : La victoire claire de l\'airfryer',
    cleaning: 'Le nettoyage représente l\'une des plus grandes frustrations des utilisateurs de fours traditionnels. Les projections, les débordements, la graisse carbonisée qui s\'accumule sur les parois : tout cela nécessite un nettoyage régulier fastidieux. Les fours sans pyrolyse demandent un gommage manuel avec des produits corrosifs, tandis que les modèles pyrolytiques (plus chers) auto-nettoient à 500°C, générant de la chaleur indésirable et une consommation énergétique supplémentaire. L\'airfryer, en revanche, ne demande que 2-3 minutes de nettoyage après utilisation. Le panier et le bac de récupération des graisses sont amovibles et se lavent facilement au lave-vaisselle ou à l\'eau chaude savonneuse. Les graisses ne projettent pas sur les parois car elles tombent dans le bac inférieur. Aucun produit chimique agressif n\'est nécessaire. Cette facilité de nettoyage est particulièrement appréciée par les familles actives ou pour ceux qui préfèrent minimiser les corvées ménagères.',
    noise_title: 'Bruit et odeurs : Des conditions d\'utilisation très différentes',
    noise: 'L\'airfryer, avec son puissant ventilateur, produit un bruit caractéristique de 75 à 85 décibels pendant la cuisson, comparable au bruit d\'un lave-vaisselle. Certains trouvent ce bruit gênant, surtout en cuisine ouverte. Le four traditionnel fonctionne pratiquement en silence, sauf si vous ouvrez la porte ou si le système de ventilation interne s\'active. Concernant les odeurs, l\'airfryer concentre les vapeurs culinaires dans un espace réduit, ce qui signifie que les arômes (bons ou mauvais) se propagent plus intensément. Cuire du poisson ou du chou à l\'airfryer libère rapidement des odeurs distinctives. Le four, avec sa plus grande cavité et son système de ventilation diffus, dilue ces odeurs. Une bonne extraction d\'air (hotte) est recommandée avec les deux appareils.',
    cost_title: 'Prix d\'achat et durabilité : Considérations financières',
    cost: 'Le prix d\'un airfryer oscille entre 60€ pour les modèles basiques d\'entrée de gamme et 350€ pour les appareils haut de gamme avec des fonctionnalités avancées (écran tactile, plusieurs étages, applications mobiles). La plupart des appareils fiables et bien conçus se situent entre 100€ et 200€. Un four électrique classique coûte 200€ à 500€ pour un modèle standard, et bien plus pour un four intégré ou haute gamme. En termes de durabilité, l\'airfryer a généralement une durée de vie de 5-8 ans avant que l\'élément chauffant ou le ventilateur ne s\'usent. Les fours sont réputés plus durables (8-15 ans), mais ils demandent plus d\'entretien. L\'investissement initial faible de l\'airfryer se combine avec des économies d\'énergie à long terme (115€ à 190€ par an) pour créer un ROI (retour sur investissement) séduisant, particulièrement pour les petits ménages.',
    when_choose_airfryer_title: 'Quand choisir un airfryer ?',
    when_choose_airfryer: 'Un airfryer est le choix idéal si vous vivez seul ou en petit couple (1-2 personnes), si vous travaillez à temps plein et manquez de temps le soir pour préparer le repas, ou si vous cherchez activement à réduire votre consommation énergétique et votre impact carbone. C\'est aussi l\'équipement parfait si vous suivez un régime restrictif (cétogène, sans gluten, pauvre en calories) car les aliments frits sans huile correspondent bien à ces besoins. Les personnes soucieuses de leur santé apprécient particulièrement l\'absence d\'huile de cuisson, qui réduit l\'apport calorique. Enfin, si vous habitez en appartement et que l\'espace est limité, l\'airfryer prend beaucoup moins de place qu\'un four compact.',
    when_keep_oven_title: 'Quand garder votre four ?',
    when_keep_oven: 'Conservez votre four si vous êtes une famille nombreuse (5+ personnes), si vous aimez la pâtisserie, si vous organisez régulièrement des repas pour des invités, ou si vous préparez des plats élaborés demandant plusieurs étapes culinaires simultanées. Le four est indispensable pour les pizzas maison, les pains artisanaux, les gratins de pâtes, les tarte sucrées ou salées, et les gros rôtis. Si vous faites du batch cooking le dimanche pour préparer vos repas de la semaine, le four vous permet de cuire plusieurs plats à la fois, ce qui est impossible avec un airfryer monoporif.',
    replace_oven_title: 'Peut-on remplacer son four par un airfryer ?',
    replace_oven: 'La réponse honnête est : pas complètement, sauf pour certains profils spécifiques. Pour une personne vivant seule ou un couple sans enfants qui ne cuisine que des repas simples et rapides (viandes grillées, frites, légumes rôtis), un airfryer seul peut techniquement suffire. Vous perdrez la capacité à faire des pâtisseries, des pizzas ou des rôtis entiers, mais vous gagnerez 50% d\'économies énergétiques et beaucoup de praticité. Pour les familles avec enfants ou les passionnés de cuisine, remplacer le four par un airfryer serait une erreur : vous réduiriez trop vos options culinaires. Le scénario optimal pour la plupart des ménages français est de posséder les deux : utiliser l\'airfryer 5-6 jours par semaine pour les cuissons rapides et économes, et le four 1-2 jours par semaine pour les repas plus élaborés ou familiaux. Cette combinaison offre le meilleur des deux mondes : économies énergétiques maximales, flexibilité culinaire complète, et moins de stress en cuisine.',
    verdict_title: 'Notre Verdict Final',
    verdict: 'L\'airfryer ne remplace pas le four, mais il le complète parfaitement. Pour les cuissons rapides du quotidien (frites, poulet, légumes grillés), l\'airfryer est imbattable en vitesse et économie d\'énergie. Le four reste indispensable pour les grandes pièces de viande, la pâtisserie et les plats en grande quantité. En 2026, face aux préoccupations énergétiques et budgétaires, l\'airfryer devient un équipement presque incontournable pour tout foyer français désireux de moderniser sa cuisine.',
    choose_airfryer_title: 'Choisissez un airfryer si...',
    choose_airfryer: 'Vous cuisinez souvent pour 1-4 personnes, vous voulez des résultats croustillants rapides, vous souhaitez économiser sur votre facture d\'énergie, ou vous manquez de temps en semaine.',
    choose_oven_title: 'Gardez votre four si...',
    choose_oven: 'Vous cuisinez régulièrement pour 6+ personnes, vous faites de la pâtisserie (gâteaux, pains, pizzas), vous préparez des rôtis entiers, ou vous avez besoin de cuire plusieurs plats simultanément.',
  },
  en: {
    title: 'Air Fryer vs Oven: Which Should You Use in 2026?',
    subtitle: 'Air fryer or conventional oven? We\'ve compared the two to help you choose.',
    intro: 'Air fryers and conventional ovens are both kitchen essentials, but which suits you better? We\'ve compared them on 7 key criteria to help you make the right choice.',
    intro_long: 'With electricity prices high and households watching their energy use, the choice between an air fryer and an oven matters more than ever. Once a novelty gadget, the air fryer has changed the way many people cook every day. It can use up to 50% less energy than a conventional oven and cut cooking times by half, which is why it has become such a talking point. But can it really replace your oven? This guide looks at every side of the comparison, using concrete figures and realistic scenarios to help you decide.',
    how_airfryer_works_title: 'How does an air fryer work?',
    how_airfryer_works: 'An air fryer uses a technology called Rapid Air, or high-speed convection. Unlike a deep fat fryer, which cooks food in oil, an air fryer heats air to a very high temperature (up to 220°C) and a powerful fan in the top of the unit blows it around the food at speed. This concentrated flow of hot air speeds up the Maillard reaction, so a crisp outer layer forms within minutes. The heating element above the basket produces the heat, while the fan spreads it evenly. An air fryer draws only 800 to 1,800 W and reaches cooking temperature in just 2 to 3 minutes. Food sits in a perforated basket, so the air reaches every surface and gives that “fried” finish without a single drop of oil. Crumbs fall to the bottom of the drawer, away from the basket, so it\'s quick to clean.',
    how_oven_works_title: 'How does a conventional oven work?',
    how_oven_works: 'A conventional oven, electric or gas, heats the air inside by radiation and conduction. An electric element (or gas burner) at the bottom and/or top of the oven produces the heat, which gradually spreads through the cavity. It\'s a fairly slow process: most ovens take 10 to 15 minutes to preheat to 200°C. Once hot, an oven surrounds food with gentler, more even heat than an air fryer, so it cooks evenly but without the same quick, crisp finish. Many modern ovens have a fan setting that circulates the air a little faster, which improves evenness and cuts cooking times by 10 to 20%. Even on the fan setting, though, an oven still draws 2,000 to 3,000 W, depending on the model, and its large cavity (50 to 80 litres) takes a lot of energy to keep at a steady temperature. On the plus side, there\'s room to cook several dishes at once, a real advantage for large families or more elaborate meals.',
    comparison_title: 'Detailed comparison on 7 criteria',
    rows: [
      { criteria: 'Preheat time', airfryer: '2–3 minutes', oven: '10–15 minutes' },
      { criteria: 'Energy use', airfryer: '800–1,800 W (30–50% less energy)', oven: '2,000–3,000 W' },
      { criteria: 'Crispy results', airfryer: 'Excellent (concentrated hot air)', oven: 'Good (fan setting)' },
      { criteria: 'Maximum capacity', airfryer: '3–10 L (1–8 people)', oven: '50–80 L (no practical limit)' },
      { criteria: 'Ease of cleaning', airfryer: 'Very easy (removable basket)', oven: 'Difficult (unless pyrolytic)' },
      { criteria: 'Versatility', airfryer: 'Chips, meat, veg, cakes', oven: 'Any type of dish' },
      { criteria: 'Purchase price', airfryer: 'Lower', oven: 'Higher' },
    ],
    cooking_time_title: 'Cooking time: the air fryer is faster',
    cooking_time: 'Cooking time is where the two appliances differ most. A portion of frozen chips takes 15 minutes in an air fryer (including preheating), against 35 to 40 minutes in a conventional oven. A whole chicken? 25 to 30 minutes in an air fryer, compared with 55 to 60 minutes in the oven. These figures vary with the size and thickness of the food, but the pattern holds: on average, an air fryer cuts cooking time by 50 to 60%. That matters if you need dinner on the table in under 30 minutes. Because an air fryer preheats in 2 to 3 minutes, you can start cooking almost as soon as you switch it on, whereas an oven keeps you waiting 10 to 15 minutes. For pasta, rice or slow-cooked dishes, the difference is smaller, as ovens handle long, slow cooking better.',
    energy_consumption_title: 'Energy use: significant savings',
    energy_consumption: 'Energy use is a deciding factor when electricity is expensive. An air fryer typically draws 800 to 1,800 W, while a conventional electric oven runs at 2,000 to 3,000 W. Used for 30 minutes a day (one air fryer batch roughly equals one oven session), an air fryer uses 0.4 to 0.9 kWh a day, or 146 to 329 kWh a year. An oven used for 50 minutes a day uses 1.67 to 2.5 kWh a day, or 610 to 912 kWh a year. At the average French rate of €0.25/kWh in 2026, that saves €115–190 a year if you replace your oven entirely with an air fryer. Multiply the kWh figures by the unit rate on your own bill to get your figure. If you keep your oven and use the air fryer alongside it, most of the savings come from quick everyday meals. Most recent air fryers also have smart temperature control that cuts energy use on the keep-warm setting.',
    cooking_quality_title: 'Cooking quality: two different approaches',
    cooking_quality: 'The two appliances cook in very different ways. An air fryer excels at crisp, golden textures, because its concentrated, very hot airflow speeds up caramelisation. Chips, nuggets, chicken wings and battered prawns all come out really crisp on the outside and tender inside. The result is often compared with deep-frying, without the extra calories. A conventional oven, especially on the fan setting, cooks more evenly but browns less fiercely. The surface takes longer to caramelise, but large pieces are often cooked more evenly all the way through. For pizza or focaccia, the oven gives a better base with a more restrained crispness. Beef and lamb roasts develop a lovely golden crust in the oven, though it\'s usually less pronounced than in an air fryer. For baking, nothing beats an oven: cakes, bread and pastries need steadier, more gradual heat than an air fryer can provide. Cakes baked in an air fryer can end up with a dry crust and an undercooked middle.',
    capacity_title: 'Capacity and versatility: what each does best',
    capacity: 'A typical air fryer holds 3 to 10 litres, enough for 1 to 8 people depending on the dish. You can cook 4 or 5 portions of chips, 2 or 3 chicken breasts or about 20 to 30 broccoli florets in one go. For a family of four or five, that\'s often enough for a whole meal. Ovens offer 50 to 80 litres (sometimes more on very large models), so you can cook several different dishes at once: a roast, roast vegetables and a gratin on three shelves. That capacity is hard to beat for family meals and special occasions. As for versatility, an air fryer handles chips, white and red meat, fish, seafood and vegetables very well, and even some simple desserts (brownies, clafoutis). Some dishes don\'t work well in it, though: a proper pizza, homemade bread, a tarte tatin or a pasta bake. For these, the oven is still essential. A popular compromise is to own both: use the air fryer for quick everyday meals (on 50 to 60% of days) and the oven when you have more time or more guests.',
    cleaning_title: 'Ease of cleaning: a clear win for the air fryer',
    cleaning: 'Cleaning is one of the biggest frustrations with an oven. Splashes, spills and burnt-on grease building up on the walls all mean regular, tedious cleaning. Ovens without a pyrolytic function need scrubbing by hand with harsh products, while pyrolytic (self-cleaning) models, which cost more, clean themselves at 500°C, giving off unwanted heat and using extra energy. An air fryer, by contrast, takes just 2 to 3 minutes to clean after use. The basket and drip tray come out and wash easily in the dishwasher or in hot soapy water. Grease doesn\'t spatter the walls because it drips into the tray below, and no harsh chemicals are needed. That\'s a real plus for busy families or anyone who would rather spend less time on chores.',
    noise_title: 'Noise and smells: two very different experiences',
    noise: 'With its powerful fan, an air fryer makes a distinctive noise of 75 to 85 dB while it cooks, comparable to a dishwasher. Some people find this annoying, especially in an open-plan kitchen. An oven is almost silent, except when you open the door or its internal fan comes on. Smells are another difference: an air fryer concentrates cooking vapours in a small space, so aromas, good or bad, spread more strongly. Cook fish or cabbage in an air fryer and you\'ll soon know about it. An oven, with its larger cavity and more diffuse ventilation, dilutes these smells. Good extraction (a cooker hood) is recommended with both.',
    cost_title: 'Purchase price and durability',
    cost: 'Air fryers range from basic entry-level models to premium ones with advanced features (touchscreen, several cooking levels, app control), and most reliable, well-made models sit in the mid-range. A standard electric oven costs considerably more, and a built-in or high-end oven more again. As for durability, an air fryer generally lasts 5 to 8 years before the heating element or fan wears out. Ovens are known to last longer (8 to 15 years) but need more maintenance. The air fryer\'s low upfront cost, combined with the energy savings described above, makes it a sound investment, especially for small households.',
    when_choose_airfryer_title: 'When to choose an air fryer',
    when_choose_airfryer: 'An air fryer is the ideal choice if you live alone or as a couple, if you work full time and are short of time in the evenings, or if you\'re keen to cut your energy use and carbon footprint. It also suits special diets (keto, gluten-free, low-calorie), since food “fried” without oil fits these well. If you\'re health-conscious, you\'ll appreciate cooking without oil, which cuts calories. And if you live in a flat where space is tight, an air fryer takes up much less room than even a compact oven.',
    when_keep_oven_title: 'When to keep your oven',
    when_keep_oven: 'Keep your oven if you\'re a large family (five or more), love baking, often have people round for dinner, or cook elaborate dishes with several stages on the go at once. An oven is essential for homemade pizza, artisan bread, pasta bakes, sweet or savoury tarts and large roasts. If you batch cook on Sundays for the week ahead, an oven lets you cook several dishes at once, which you can\'t do in a single-basket air fryer.',
    replace_oven_title: 'Can you replace your oven with an air fryer?',
    replace_oven: 'The honest answer: not completely, except for a few people. If you live alone, or as a couple without children, and only cook simple, quick meals (grilled meat, chips, roast vegetables), an air fryer on its own can technically be enough. You\'ll lose the ability to bake, make pizza or cook a whole roast, but you\'ll use 50% less energy and gain a lot of convenience. For families with children or keen cooks, swapping the oven for an air fryer would be a mistake: it would limit what you can cook too much. For most households, the best setup is to have both: use the air fryer 5 or 6 days a week for quick, economical meals, and the oven 1 or 2 days a week for more elaborate or family meals. That way you get the best of both worlds: maximum energy savings, complete flexibility and less stress in the kitchen.',
    verdict_title: 'Our verdict',
    verdict: 'An air fryer won\'t replace your oven, but it complements it perfectly. For quick everyday cooking (chips, chicken, grilled vegetables), nothing beats it for speed and energy savings. The oven is still essential for large joints of meat, baking and cooking in bulk. With energy costs and household budgets under pressure in 2026, an air fryer has become an almost essential appliance for any household looking to modernise its kitchen.',
    choose_airfryer_title: 'Choose an air fryer if…',
    choose_airfryer: 'You usually cook for 1 to 4 people, you want quick, crispy results, you want to cut your energy bill, or you\'re short of time during the week.',
    choose_oven_title: 'Keep your oven if…',
    choose_oven: 'You regularly cook for 6 or more people, you bake (cakes, bread, pizza), you cook whole roasts, or you need to cook several dishes at once.',
  },
  de: {
    title: 'Airfryer oder Backofen? Der große Vergleich 2026',
    subtitle: 'Heißluftfritteuse oder klassischer Backofen? Wir haben beide verglichen, damit Sie die richtige Wahl treffen.',
    intro: 'Airfryer (Heißluftfritteuse) und klassischer Backofen gehören zu den wichtigsten Geräten in der Küche. Doch welches passt besser zu Ihnen? Wir haben beide anhand von 7 zentralen Kriterien verglichen, damit Sie die richtige Wahl treffen.',
    intro_long: 'Strom wird immer teurer, und viele achten stärker auf ihren Energieverbrauch. Deshalb stellt sich 2026 in vielen Haushalten die Frage: Airfryer oder Backofen? Der Airfryer galt lange als exotisches Gadget, heute hat er die Art, wie viele von uns kochen, spürbar verändert. Er braucht bis zu 50 % weniger Strom als ein klassischer Backofen und nur etwa halb so lange. Kein Wunder, dass er in vielen Küchen für Gesprächsstoff sorgt. Aber kann er den Backofen wirklich ersetzen? Ist er eine kluge Anschaffung oder nur ein vorübergehender Trend? Dieser Ratgeber geht jeden Aspekt des Vergleichs durch, mit konkreten Zahlen und realistischen Szenarien, damit Sie die beste Entscheidung treffen.',
    how_airfryer_works_title: 'Wie funktioniert ein Airfryer?',
    how_airfryer_works: 'Ein Airfryer arbeitet mit einer Technik, die meist Rapid Air oder Hochgeschwindigkeits-Konvektion genannt wird. Anders als eine klassische Fritteuse, die Lebensmittel in Öl gart, erhitzt der Airfryer Luft auf sehr hohe Temperaturen (bis 220 °C) und bläst sie mit einem kräftigen Ventilator unter dem Deckel mit hoher Geschwindigkeit um die Lebensmittel. Dieser konzentrierte Heißluftstrom erzeugt durch eine beschleunigte Maillard-Reaktion in wenigen Minuten eine knusprige Kruste. Das Heizelement über dem Korb liefert die Hitze, der Ventilator verteilt die Luft gleichmäßig. So kommt ein Airfryer mit nur 800 bis 1.800 Watt aus und erreicht die Gartemperatur in nur 2 bis 3 Minuten. Die Lebensmittel liegen in einem gelochten Korb, durch den die Luft von allen Seiten strömt. So entsteht der beliebte „frittierte“ Effekt, ohne einen einzigen Tropfen Öl. Krümel und Fett fallen in die Auffangschale unter dem Korb, das macht die Reinigung schnell und einfach.',
    how_oven_works_title: 'Wie funktioniert ein klassischer Backofen?',
    how_oven_works: 'Ein klassischer Backofen, ob elektrisch oder mit Gas, erhitzt die Luft im Garraum durch Strahlungswärme und Wärmeleitung. Ein Heizelement (oder ein Gasbrenner) unten und/oder oben im Ofen erzeugt die Hitze, die sich nach und nach im ganzen Garraum verteilt. Das dauert: Bis ein Backofen auf 200 °C vorgeheizt ist, vergehen meist 10 bis 15 Minuten. Danach umgibt die Wärme die Speisen gleichmäßiger und weniger direkt als im Airfryer. Alles gart gleichmäßig, wird außen aber nicht so schnell knusprig. Moderne Backöfen haben oft Umluft oder Heißluft: Ein Ventilator bewegt die Luft etwas schneller, sorgt für gleichmäßigeres Garen und verkürzt die Garzeit um 10 bis 20 %. Doch auch mit Umluft bleibt die Leistung hoch: je nach Modell zwischen 2.000 und 3.000 Watt. Der große Garraum (50 bis 80 Liter) braucht viel Energie, um die Temperatur zu halten. Dafür lassen sich im Backofen mehrere Gerichte gleichzeitig garen, ein klarer Vorteil für große Familien oder aufwendige Menüs.',
    comparison_title: 'Der Vergleich im Detail: 7 Kriterien',
    rows: [
      { criteria: 'Vorheizzeit', airfryer: '2–3 Minuten', oven: '10–15 Minuten' },
      { criteria: 'Stromverbrauch', airfryer: '800–1.800 W (30–50 % Ersparnis)', oven: '2.000–3.000 W' },
      { criteria: 'Knusprige Ergebnisse', airfryer: 'Ausgezeichnet (konzentrierte Heißluft)', oven: 'Gut (Umluft)' },
      { criteria: 'Maximales Fassungsvermögen', airfryer: '3–10 L (1–8 Personen)', oven: '50–80 L (unbegrenzt)' },
      { criteria: 'Reinigung', airfryer: 'Sehr einfach (herausnehmbarer Korb)', oven: 'Aufwendig (außer mit Pyrolyse)' },
      { criteria: 'Vielseitigkeit', airfryer: 'Pommes, Fleisch, Gemüse, Kuchen', oven: 'Alle Arten von Gerichten' },
      { criteria: 'Preisspanne', airfryer: '60–350 €', oven: '200–2.000 €' },
    ],
    cooking_time_title: 'Garzeit: Der Airfryer ist deutlich schneller',
    cooking_time: 'Am deutlichsten unterscheiden sich die beiden Geräte bei der Garzeit. Eine Portion Tiefkühl-Pommes ist im Airfryer in 15 Minuten fertig (inklusive Vorheizen), im Backofen dauert sie 35 bis 40 Minuten. Ein ganzes Hähnchen? 25 bis 30 Minuten im Airfryer, 55 bis 60 Minuten im Backofen. Die Werte schwanken je nach Größe und Dicke, die Tendenz bleibt aber gleich: Der Airfryer verkürzt die Garzeit im Schnitt um 50 bis 60 %. Für Familien mit wenig Zeit, die ein komplettes Essen in weniger als 30 Minuten auf den Tisch bringen wollen, ist das der entscheidende Vorteil. Weil der Airfryer in 2 bis 3 Minuten vorgeheizt ist, können Sie fast sofort nach dem Einschalten loslegen, während Sie beim Backofen 10 bis 15 Minuten warten. Bei Nudel- und Reisgerichten oder Schmorgerichten ist der Unterschied kleiner, denn lange, langsame Garvorgänge erledigt der Backofen besser.',
    energy_consumption_title: 'Stromverbrauch: deutlich günstiger',
    energy_consumption: 'Bei steigenden Stromrechnungen ist der Verbrauch für viele Haushalte ein entscheidender Faktor. Ein Airfryer braucht meist zwischen 800 und 1.800 Watt, ein klassischer Elektrobackofen 2.000 bis 3.000 Watt. Bei 30 Minuten täglicher Nutzung (das entspricht in etwa einer Airfryer-Portion statt eines Backofen-Durchgangs) verbraucht der Airfryer 0,4 bis 0,9 kWh pro Tag, also 146 bis 329 kWh im Jahr. Ein Backofen, der täglich 50 Minuten läuft, verbraucht 1,67 bis 2,5 kWh pro Tag, also 610 bis 912 kWh im Jahr. Bei einem Beispieltarif von 0,25 € pro kWh (setzen Sie Ihren eigenen Tarif ein) sparen Sie so 115 bis 190 € im Jahr, wenn Sie den Backofen komplett durch den Airfryer ersetzen. Auch wenn Sie den Backofen behalten und den Airfryer ergänzend nutzen, lohnt sich das: Sie sparen vor allem bei den schnellen Alltagsgerichten. Die meisten aktuellen Airfryer regeln die Temperatur zudem automatisch und verbrauchen beim Warmhalten weniger Strom.',
    cooking_quality_title: 'Garergebnis: zwei verschiedene Ansätze',
    cooking_quality: 'Beim Garergebnis unterscheiden sich die beiden Techniken grundlegend. Der Airfryer ist stark, wenn es knusprig und goldbraun werden soll: Sein konzentrierter, sehr heißer Luftstrom beschleunigt die Bräunung. Pommes, Nuggets, Chicken Wings, Garnelen im Teigmantel: Alles wird außen richtig knusprig und bleibt innen zart. Das Ergebnis erinnert oft an Frittiertes, nur ohne die zusätzlichen Kalorien aus dem Öl. Der Backofen gart, vor allem mit Umluft, gleichmäßiger, aber weniger intensiv. Die Oberfläche bräunt langsamer, dafür gart ein großes Stück innen oft gleichmäßiger durch. Bei Pizza oder Focaccia liefert der Backofen den besseren Teig mit einer angenehmen Knusprigkeit. Rinder- oder Lammbraten bekommen im Backofen eine schöne goldbraune Kruste, die allerdings meist weniger kräftig ausfällt als im Airfryer. Beim Backen liegt der Backofen klar vorn: Kuchen, Brot und Gebäck brauchen eine stabilere, gleichmäßig ansteigende Hitze, als ein Airfryer sie liefern kann. Ein Kuchen aus dem Airfryer wird außen leicht trocken und ist innen oft nicht durchgebacken.',
    capacity_title: 'Fassungsvermögen und Vielseitigkeit: Wer kann was?',
    capacity: 'Ein typischer Airfryer fasst 3 bis 10 Liter, das reicht je nach Gericht für 1 bis 8 Personen. Sie können 4 bis 5 Portionen Pommes, 2 bis 3 Hähnchenbrustfilets oder etwa 20 bis 30 Brokkoliröschen auf einmal garen. Für Familien mit 4 bis 5 Personen reicht das oft für eine komplette Mahlzeit. Backöfen bieten 50 bis 80 Liter (sehr große Modelle auch mehr) und garen mehrere Gerichte gleichzeitig: einen Braten, Ofengemüse und ein Gratin auf drei Ebenen. Für Familienessen und Feste ist diese Kapazität nicht zu ersetzen. Vielseitig ist der Airfryer trotzdem: Pommes, helles und dunkles Fleisch, Fisch, Meeresfrüchte, Gemüse, sogar einfache Desserts (Brownies, Clafoutis). An manchen Gerichten scheitert er aber: an einer handgemachten Pizza, selbst gebackenem Brot, Tarte Tatin oder Nudelauflauf. Dafür bleibt der Backofen das Mittel der Wahl. Ein beliebter Kompromiss: beide Geräte besitzen, den Airfryer für schnelle Alltagsgerichte nutzen (an 50 bis 60 % der Tage) und den Backofen für die Tage, an denen Sie mehr Zeit haben oder Gäste kommen.',
    cleaning_title: 'Reinigung: Der Airfryer gewinnt klar',
    cleaning: 'Die Reinigung gehört zu den größten Ärgernissen beim klassischen Backofen. Spritzer, übergelaufene Soßen, eingebranntes Fett an den Wänden: Das alles verlangt regelmäßiges, mühsames Putzen. Backöfen ohne Pyrolyse müssen Sie von Hand mit scharfen Reinigern schrubben. Modelle mit Pyrolyse (teurer) reinigen sich bei 500 °C selbst, erzeugen dabei aber unerwünschte Hitze und zusätzlichen Stromverbrauch. Der Airfryer ist dagegen nach dem Kochen in 2 bis 3 Minuten sauber. Korb und Auffangschale lassen sich herausnehmen und kommen in die Spülmaschine oder ins heiße Spülwasser. Fett spritzt nicht an die Wände, sondern tropft in die Auffangschale. Aggressive Reiniger brauchen Sie nicht. Das schätzen vor allem Familien mit wenig Zeit und alle, die möglichst wenig putzen wollen.',
    noise_title: 'Lautstärke und Gerüche: ganz unterschiedliche Bedingungen',
    noise: 'Der Airfryer erzeugt mit seinem kräftigen Ventilator beim Garen ein typisches Betriebsgeräusch von 75 bis 85 Dezibel, vergleichbar mit einem Geschirrspüler. Manche empfinden das als störend, besonders in offenen Küchen. Ein klassischer Backofen arbeitet fast lautlos, außer Sie öffnen die Tür oder das Kühlgebläse springt an. Bei Gerüchen gilt: Der Airfryer konzentriert die Kochdämpfe auf kleinem Raum, deshalb breiten sich Aromen, angenehme wie unangenehme, intensiver aus. Fisch oder Kohl aus dem Airfryer riechen schnell deutlich. Im größeren Garraum des Backofens verteilen sich diese Gerüche stärker. Eine Dunstabzugshaube ist bei beiden Geräten sinnvoll.',
    cost_title: 'Anschaffung und Lebensdauer: die Kostenfrage',
    cost: 'Airfryer kosten zwischen 60 € für einfache Einstiegsmodelle und 350 € für Premiumgeräte mit mehr Ausstattung (Touchscreen, mehrere Ebenen, App). Die meisten zuverlässigen, gut gemachten Geräte liegen zwischen 100 und 200 €. Ein klassischer Elektrobackofen kostet als Standardmodell 200 bis 500 €, als Einbau- oder Premiumgerät deutlich mehr. Bei der Lebensdauer hält ein Airfryer meist 5 bis 8 Jahre, bevor Heizelement oder Ventilator verschleißen. Backöfen gelten als langlebiger (8 bis 15 Jahre), brauchen aber mehr Pflege. Der niedrige Anschaffungspreis und die langfristige Stromersparnis (115 bis 190 € pro Jahr im Rechenbeispiel oben) machen den Airfryer vor allem für kleine Haushalte zu einer Anschaffung, die sich schnell rechnet.',
    when_choose_airfryer_title: 'Wann lohnt sich ein Airfryer?',
    when_choose_airfryer: 'Ein Airfryer ist die richtige Wahl, wenn Sie allein oder zu zweit leben, Vollzeit arbeiten und abends wenig Zeit zum Kochen haben oder Ihren Energieverbrauch und CO2-Fußabdruck gezielt senken wollen. Er eignet sich auch, wenn Sie sich nach einer bestimmten Ernährungsweise richten (ketogen, glutenfrei, kalorienarm), denn ohne Öl Frittiertes passt gut dazu. Wer auf seine Gesundheit achtet, schätzt vor allem, dass kein Speiseöl nötig ist: Das spart Kalorien. Und wenn Sie in einer Wohnung mit wenig Platz leben: Ein Airfryer braucht deutlich weniger Platz als selbst ein kompakter Backofen.',
    when_keep_oven_title: 'Wann sollten Sie Ihren Backofen behalten?',
    when_keep_oven: 'Behalten Sie Ihren Backofen, wenn Sie eine große Familie haben (5 Personen oder mehr), gern backen, oft Gäste haben oder aufwendige Gerichte mit mehreren Garschritten gleichzeitig zubereiten. Für selbst gemachte Pizza, Brot nach Bäckerart, Nudelaufläufe, süße und herzhafte Tartes sowie große Braten ist der Backofen nicht zu ersetzen. Wenn Sie sonntags für die ganze Woche vorkochen (Meal Prep), garen Sie im Backofen mehrere Gerichte auf einmal. Mit einem Airfryer mit nur einem Korb ist das nicht möglich.',
    replace_oven_title: 'Kann ein Airfryer den Backofen ersetzen?',
    replace_oven: 'Die ehrliche Antwort: nicht ganz, außer in bestimmten Fällen. Wenn Sie allein oder als Paar ohne Kinder leben und nur einfache, schnelle Gerichte kochen (gegrilltes Fleisch, Pommes, Ofengemüse), kann ein Airfryer allein durchaus reichen. Sie verzichten dann auf Kuchen und Gebäck, Pizza und ganze Braten, sparen aber 50 % Energie und gewinnen viel Komfort. Für Familien mit Kindern oder leidenschaftliche Köche wäre es ein Fehler, den Backofen durch einen Airfryer zu ersetzen: Ihre Möglichkeiten in der Küche würden zu stark schrumpfen. Für die meisten Haushalte ist es am besten, beide Geräte zu haben: den Airfryer an 5 bis 6 Tagen pro Woche für schnelle, sparsame Gerichte und den Backofen an 1 bis 2 Tagen für aufwendigere Essen oder Familienmahlzeiten. So bekommen Sie das Beste aus beiden Welten: maximale Stromersparnis, volle Flexibilität beim Kochen und weniger Stress in der Küche.',
    verdict_title: 'Unser Fazit',
    verdict: 'Der Airfryer ersetzt den Backofen nicht, ergänzt ihn aber ideal. Bei schnellen Alltagsgerichten (Pommes, Hähnchen, Grillgemüse) ist er in Tempo und Stromverbrauch kaum zu schlagen. Für große Braten, Kuchen und Gebäck sowie große Mengen bleibt der Backofen unersetzlich. Wer 2026 auf Energiekosten und Haushaltsbudget achtet und seine Küche modernisieren möchte, kommt am Airfryer kaum vorbei.',
    choose_airfryer_title: 'Wählen Sie einen Airfryer, wenn …',
    choose_airfryer: 'Sie oft für 1 bis 4 Personen kochen, schnell knusprige Ergebnisse wollen, bei der Stromrechnung sparen möchten oder unter der Woche wenig Zeit haben.',
    choose_oven_title: 'Behalten Sie Ihren Backofen, wenn …',
    choose_oven: 'Sie regelmäßig für 6 oder mehr Personen kochen, backen (Kuchen, Brot, Pizza), ganze Braten zubereiten oder mehrere Gerichte gleichzeitig garen müssen.',
  },
  es: {
    title: 'Freidora de aire o horno: la comparativa definitiva 2026',
    subtitle: '¿Freidora sin aceite u horno de toda la vida? Comparamos los dos para ayudarte a elegir.',
    intro: 'La freidora de aire (airfryer) y el horno tradicional son dos aparatos de cocina básicos. Pero ¿cuál se adapta mejor a lo que necesitas? Comparamos las dos tecnologías en 7 criterios clave para que aciertes con tu elección.',
    intro_long: 'En 2026, con la preocupación por el precio de la energía y una conciencia ambiental cada vez mayor, elegir entre una freidora de aire y un horno tradicional se ha convertido en una decisión importante para millones de hogares. La freidora de aire, que hace unos años parecía un capricho exótico, ha cambiado de verdad la forma de cocinar en casa. Con un consumo de energía hasta un 50 % menor que el de un horno convencional y tiempos de cocción reducidos a la mitad, está en boca de todos. Pero ¿puede sustituir de verdad al horno? ¿Es una compra inteligente o una moda pasajera? En esta guía repasamos cada aspecto de la comparación, con datos concretos y casos realistas, para que tomes la mejor decisión posible.',
    how_airfryer_works_title: '¿Cómo funciona una freidora de aire?',
    how_airfryer_works: 'La freidora de aire (o freidora sin aceite) se basa en una tecnología llamada Rapid Air, o convección de alta velocidad. A diferencia de una freidora convencional, que cocina los alimentos en aceite, la freidora de aire calienta el aire a temperaturas muy altas (hasta 220 °C) y lo impulsa a gran velocidad alrededor de los alimentos con un potente ventilador situado bajo la tapa. Ese flujo concentrado de aire caliente forma una capa exterior crujiente en pocos minutos gracias a una reacción de Maillard acelerada. La resistencia, situada encima de la cesta, genera el calor, y el ventilador lo reparte de manera uniforme. Con este sistema, la freidora de aire consume solo de 800 a 1.800 W y alcanza la temperatura de cocción en apenas 2 o 3 minutos. Los alimentos van en una cesta perforada que deja circular el aire por todas sus caras, y así se consigue ese efecto «frito» que tanto gusta sin añadir ni una gota de aceite. Los restos caen al fondo del recipiente, lejos de la cesta, así que se recogen y se limpian enseguida.',
    how_oven_works_title: '¿Cómo funciona un horno tradicional?',
    how_oven_works: 'El horno tradicional, sea eléctrico o de gas, calienta el aire del interior por radiación y conducción térmica. Una resistencia eléctrica (o un quemador de gas) en la parte inferior, en la superior o en ambas genera el calor, que se reparte poco a poco por toda la cavidad. Es un proceso relativamente lento: precalentar un horno a 200 °C suele llevar de 10 a 15 minutos. Una vez caliente, el calor envuelve los alimentos de forma más difusa y homogénea que en una freidora de aire, lo que da una cocción uniforme, pero sin ese crujiente exterior tan rápido. Muchos hornos actuales tienen función de aire caliente (convección), que añade un ventilador para acelerar un poco la circulación del aire: mejora la uniformidad y recorta los tiempos entre un 10 y un 20 %. Aun así, incluso con convección, la potencia total sigue siendo alta: de 2.000 a 3.000 W según el modelo. Y una cavidad tan grande (de 50 a 80 litros) necesita mucha energía para mantener la temperatura estable. A cambio, el horno permite cocinar varios platos a la vez gracias a su tamaño, una ventaja indiscutible para las familias grandes o las recetas elaboradas.',
    comparison_title: 'Comparativa detallada en 7 criterios',
    rows: [
      { criteria: 'Tiempo de precalentamiento', airfryer: '2-3 minutos', oven: '10-15 minutos' },
      { criteria: 'Consumo de energía', airfryer: '800-1.800 W (un 30-50 % menos)', oven: '2.000-3.000 W' },
      { criteria: 'Resultado crujiente', airfryer: 'Excelente (aire concentrado)', oven: 'Bueno (convección)' },
      { criteria: 'Capacidad máxima', airfryer: '3-10 L (1-8 personas)', oven: '50-80 L (sin límite)' },
      { criteria: 'Facilidad de limpieza', airfryer: 'Muy fácil (cesta extraíble)', oven: 'Difícil (salvo pirólisis)' },
      { criteria: 'Versatilidad', airfryer: 'Patatas fritas, carne, verduras, bizcochos', oven: 'Todo tipo de platos' },
      { criteria: 'Precio medio', airfryer: '60-350 €', oven: '200-2.000 €' },
    ],
    cooking_time_title: 'Tiempo de cocción: la freidora de aire gana en rapidez',
    cooking_time: 'La diferencia más llamativa entre los dos aparatos está en el tiempo de cocción. Una ración de patatas fritas congeladas está lista en 15 minutos en la freidora de aire (precalentamiento incluido), frente a los 35-40 minutos del horno convencional. ¿Un pollo entero? De 25 a 30 minutos en la freidora de aire, frente a 55-60 minutos en el horno. Las cifras varían según el tamaño y el grosor de los alimentos, pero la tendencia se repite: la freidora de aire reduce el tiempo de cocción entre un 50 y un 60 % de media. Eso es clave para las familias con poco tiempo que quieren tener lista una comida completa en menos de 30 minutos. Como precalienta en 2 o 3 minutos, puedes empezar a cocinar casi nada más encenderla, mientras que con el horno hay que esperar de 10 a 15 minutos. Con la pasta, el arroz o los guisos la diferencia se nota menos, porque el horno se defiende mejor en las cocciones largas y lentas.',
    energy_consumption_title: 'Consumo de energía: un ahorro considerable',
    energy_consumption: 'El consumo es un factor decisivo cuando la factura de la luz pesa en el presupuesto familiar. Una freidora de aire consume normalmente entre 800 y 1.800 W, mientras que un horno eléctrico convencional funciona a 2.000-3.000 W. Con un uso diario de 30 minutos (una tanda en la freidora equivale más o menos a un uso del horno), la freidora de aire gasta de 0,4 a 0,9 kWh al día, es decir, de 146 a 329 kWh al año. Un horno que se usa 50 minutos al día consume de 1,67 a 2,5 kWh diarios, o sea, de 610 a 912 kWh al año. Con un precio de ejemplo de 0,25 € por kWh (la tarifa media en Francia en 2026), eso supone un ahorro de 115 a 190 € al año si dejas de usar el horno por completo y lo cambias por la freidora de aire; para tu caso, multiplica los kWh por el precio de tu factura. Si ya tienes horno y usas la freidora como complemento, el ahorro llega sobre todo en las cocciones rápidas del día a día. Además, la mayoría de las freidoras de aire recientes regulan la temperatura de forma inteligente y gastan menos cuando mantienen la comida caliente.',
    cooking_quality_title: 'Calidad de cocción: dos enfoques distintos',
    cooking_quality: 'El resultado es muy distinto con cada tecnología. La freidora de aire destaca en texturas crujientes y doradas gracias a su flujo de aire concentrado y a alta temperatura, que acelera la caramelización. Patatas fritas, nuggets, alitas de pollo, gambas rebozadas: todo queda muy crujiente por fuera y tierno por dentro. El resultado se suele comparar con una fritura en aceite, pero sin las calorías de más. El horno tradicional, sobre todo con convección, cocina de forma más uniforme, pero menos intensa. La superficie se carameliza más despacio, aunque el interior suele quedar más homogéneo en las piezas grandes. Para una pizza o una focaccia, el horno da una masa mejor, con un crujiente más comedido. Los asados de ternera o de cordero cogen una buena costra dorada en el horno, aunque normalmente menos intensa que en la freidora de aire. En repostería, el horno no tiene rival: bizcochos, panes y bollería necesitan un calor más estable y progresivo del que puede dar una freidora de aire. Los bizcochos hechos en la freidora corren el riesgo de quedar con la corteza seca y el centro crudo.',
    capacity_title: 'Capacidad y versatilidad: ¿qué hace cada uno?',
    capacity: 'Una freidora de aire normal tiene de 3 a 10 litros de capacidad, suficiente para 1 a 8 personas según el plato. Puedes hacer de una vez 4 o 5 raciones de patatas fritas, 2 o 3 pechugas de pollo o unos 20-30 ramilletes de brócoli. Para una familia de 4 o 5 personas, suele bastar para una comida completa. Los hornos ofrecen de 50 a 80 litros (a veces más en los modelos más grandes) y permiten cocinar varios platos distintos a la vez: un asado, unas verduras al horno y un gratinado en tres alturas diferentes. Esa capacidad es insustituible en las comidas familiares o de fiesta. En versatilidad, la freidora de aire se defiende muy bien con patatas fritas, carnes blancas o rojas, pescado, marisco, verduras e incluso algunos postres sencillos (brownies, clafoutis). Pero hay platos que se le resisten: una pizza artesana, un pan casero, una tarta tatin o una pasta gratinada. Para esas recetas, el horno sigue siendo imprescindible. Lo más habitual: tener los dos aparatos, usar la freidora de aire para las comidas rápidas de diario (un 50-60 % de los días) y el horno cuando hay más tiempo o más invitados.',
    cleaning_title: 'Limpieza: la freidora de aire gana por goleada',
    cleaning: 'La limpieza es uno de los mayores fastidios de quien usa un horno tradicional. Las salpicaduras, los derrames, la grasa quemada que se acumula en las paredes: todo eso obliga a una limpieza frecuente y pesada. Los hornos sin pirólisis hay que frotarlos a mano con productos corrosivos, mientras que los pirolíticos (más caros) se limpian solos a 500 °C, lo que genera un calor no deseado y un consumo extra de energía. La freidora de aire, en cambio, se limpia en 2 o 3 minutos después de cada uso. La cesta y la bandeja de recogida de grasa se sacan y se lavan fácilmente en el lavavajillas o con agua caliente y jabón. La grasa no salpica las paredes porque cae en la bandeja inferior. No hacen falta productos químicos agresivos. Lo agradecen especialmente las familias con poco tiempo y quienes prefieren dedicar el mínimo a las tareas de casa.',
    noise_title: 'Ruido y olores: dos experiencias de uso muy distintas',
    noise: 'La freidora de aire, con su potente ventilador, hace un ruido característico de 75 a 85 decibelios durante la cocción, comparable al de un lavavajillas. A algunas personas les molesta, sobre todo en las cocinas abiertas. El horno tradicional es prácticamente silencioso, salvo cuando abres la puerta o se pone en marcha el ventilador interno. En cuanto a los olores, la freidora de aire concentra los vapores de la cocción en un espacio pequeño, así que los aromas (buenos o malos) se notan más. Si cocinas pescado o col en la freidora, el olor se extiende enseguida. El horno, con una cavidad más grande y una ventilación más difusa, los diluye. Con los dos aparatos conviene tener una buena campana extractora.',
    cost_title: 'Precio y durabilidad: las cuentas',
    cost: 'El precio de una freidora de aire va de unos 60 € en los modelos básicos a 350 € en los de gama alta con funciones avanzadas (pantalla táctil, varios niveles, app para el móvil). La mayoría de los aparatos fiables y bien diseñados están entre 100 y 200 €. Un horno eléctrico normal cuesta de 200 a 500 €, y bastante más si es integrable o de gama alta. En cuanto a durabilidad, una freidora de aire dura normalmente de 5 a 8 años antes de que se desgasten la resistencia o el ventilador. Los hornos tienen fama de durar más (de 8 a 15 años), pero piden más mantenimiento. La inversión inicial, más baja, sumada al ahorro de energía a largo plazo (de 115 a 190 € al año) hace que la freidora de aire se amortice muy bien, sobre todo en los hogares pequeños.',
    when_choose_airfryer_title: '¿Cuándo elegir una freidora de aire?',
    when_choose_airfryer: 'La freidora de aire es la opción ideal si vives solo o en pareja (1-2 personas), si trabajas a jornada completa y por la noche te falta tiempo para cocinar, o si quieres reducir de verdad tu consumo de energía y tu huella de carbono. También es el aparato perfecto si sigues una dieta restrictiva (cetogénica, sin gluten, baja en calorías), porque los alimentos «fritos» sin aceite encajan bien con esas necesidades. Quienes cuidan su salud valoran especialmente que no haga falta aceite, lo que reduce las calorías. Por último, si vives en un piso con poco espacio, la freidora de aire ocupa mucho menos que un horno compacto.',
    when_keep_oven_title: '¿Cuándo quedarte con el horno?',
    when_keep_oven: 'Quédate con el horno si sois una familia numerosa (5 personas o más), si te gusta la repostería, si sueles tener invitados a comer o si preparas platos elaborados que exigen varias preparaciones a la vez. El horno es imprescindible para pizzas caseras, panes artesanos, pasta gratinada, tartas dulces o saladas y asados grandes. Si haces batch cooking los domingos para dejar listas las comidas de la semana, el horno te permite cocinar varios platos a la vez, algo imposible con una freidora de aire de una sola cesta.',
    replace_oven_title: '¿Puede una freidora de aire sustituir al horno?',
    replace_oven: 'La respuesta sincera: no del todo, salvo en algunos casos concretos. Para una persona que vive sola o una pareja sin hijos que solo cocina platos sencillos y rápidos (carne a la plancha, patatas fritas, verduras asadas), una freidora de aire puede bastar en la práctica. Perderás la posibilidad de hacer repostería, pizzas o asados enteros, pero ganarás un 50 % de ahorro de energía y mucha comodidad. Para las familias con niños o para quienes disfrutan cocinando, cambiar el horno por una freidora de aire sería un error: limitarías demasiado lo que puedes cocinar. Para la mayoría de los hogares, lo ideal es tener los dos: usar la freidora de aire 5 o 6 días a la semana para las cocciones rápidas y económicas, y el horno 1 o 2 días para las comidas más elaboradas o familiares. Así sumas las ventajas de los dos: el máximo ahorro de energía, toda la flexibilidad en la cocina y menos estrés a la hora de cocinar.',
    verdict_title: 'Nuestro veredicto',
    verdict: 'La freidora de aire no sustituye al horno, pero lo complementa a la perfección. Para las cocciones rápidas de cada día (patatas fritas, pollo, verduras asadas), es imbatible en rapidez y ahorro de energía. El horno sigue siendo imprescindible para las piezas grandes de carne, la repostería y los platos en grandes cantidades. En 2026, con la preocupación por la energía y por el presupuesto, la freidora de aire se ha convertido en un aparato casi obligado para cualquier hogar que quiera modernizar su cocina.',
    choose_airfryer_title: 'Elige la freidora de aire si...',
    choose_airfryer: 'Sueles cocinar para 1-4 personas, buscas resultados crujientes en poco tiempo, quieres ahorrar en la factura de la luz o vas justo de tiempo entre semana.',
    choose_oven_title: 'Quédate con el horno si...',
    choose_oven: 'Cocinas a menudo para 6 personas o más, haces repostería (bizcochos, pan, pizza), preparas asados enteros o necesitas cocinar varios platos a la vez.',
  },
  it: {
    title: 'Friggitrice ad aria o forno: quale scegliere nel 2026',
    subtitle: 'Friggitrice ad aria o forno tradizionale? Li abbiamo messi a confronto per aiutarti a scegliere.',
    intro: 'La friggitrice ad aria e il forno tradizionale sono due elettrodomestici fondamentali in cucina. Ma quale fa al caso tuo? Li abbiamo confrontati su 7 criteri chiave per aiutarti a scegliere bene.',
    intro_long: 'Con le bollette della luce sempre più care e una maggiore attenzione all\'ambiente, nel 2026 scegliere tra friggitrice ad aria e forno tradizionale è una decisione che pesa per molte famiglie. La friggitrice ad aria, un tempo considerata un gadget, oggi ha cambiato il modo di preparare i pasti di tutti i giorni. Consuma fino al 50% in meno di un forno tradizionale e dimezza i tempi di cottura: per questo se ne parla tanto. Ma può davvero sostituire il forno? È un acquisto sensato o una moda passeggera? Questa guida analizza il confronto punto per punto, con dati concreti e scenari realistici, per aiutarti a prendere la decisione migliore.',
    how_airfryer_works_title: 'Come funziona la friggitrice ad aria?',
    how_airfryer_works: 'La friggitrice ad aria sfrutta una tecnologia chiamata Rapid Air, cioè la convezione ad alta velocità. A differenza della friggitrice tradizionale, che cuoce gli alimenti nell\'olio, la friggitrice ad aria scalda l\'aria a temperature molto elevate (fino a 220 °C) e la spinge ad alta velocità intorno al cibo con una ventola potente posta sotto il coperchio. Questo flusso di aria calda concentrata crea in pochi minuti uno strato esterno croccante, grazie a una reazione di Maillard accelerata. La resistenza sopra il cestello produce il calore, mentre la ventola lo distribuisce in modo uniforme. Con questo sistema la friggitrice ad aria assorbe solo 800-1.800 W e raggiunge la temperatura di cottura in appena 2-3 minuti. Il cibo si mette in un cestello forato che lascia circolare l\'aria su tutte le superfici: così si ottiene il tanto apprezzato effetto «fritto» senza aggiungere nemmeno una goccia d\'olio. I residui cadono nella vaschetta sul fondo, lontano dal cestello, e la pulizia è rapida.',
    how_oven_works_title: 'Come funziona un forno tradizionale?',
    how_oven_works: 'Il forno tradizionale, elettrico o a gas, scalda l\'aria al suo interno per irraggiamento e conduzione. Una resistenza elettrica (o un bruciatore a gas) in basso e/o in alto produce il calore, che si diffonde poco a poco in tutta la camera di cottura. È un processo piuttosto lento: di solito servono 10-15 minuti per preriscaldare il forno a 200 °C. Una volta caldo, il calore avvolge il cibo in modo più diffuso e omogeneo rispetto alla friggitrice ad aria: la cottura è uniforme, ma senza quella croccantezza esterna immediata. I forni moderni offrono spesso la funzione ventilata, che aggiunge una ventola per accelerare un po\' la circolazione dell\'aria: la cottura diventa più uniforme e i tempi si riducono del 10-20%. Anche in modalità ventilata, però, la potenza resta elevata: tra 2.000 e 3.000 W a seconda del modello. La camera di cottura è ampia (50-80 litri) e richiede molta energia per mantenere stabile la temperatura. In compenso, grazie allo spazio, il forno permette di cuocere più piatti insieme: un vantaggio indiscutibile per le famiglie numerose o per le preparazioni più elaborate.',
    comparison_title: 'Confronto dettagliato su 7 criteri',
    rows: [
      { criteria: 'Tempo di preriscaldamento', airfryer: '2-3 minuti', oven: '10-15 minuti' },
      { criteria: 'Consumo energetico', airfryer: '800-1.800 W (30-50% di risparmio)', oven: '2.000-3.000 W' },
      { criteria: 'Risultato croccante', airfryer: 'Eccellente (aria concentrata)', oven: 'Buona (forno ventilato)' },
      { criteria: 'Capacità massima', airfryer: '3-10 L (1-8 persone)', oven: '50-80 L (nessun limite)' },
      { criteria: 'Facilità di pulizia', airfryer: 'Molto facile (cestello rimovibile)', oven: 'Difficile (salvo forni pirolitici)' },
      { criteria: 'Versatilità', airfryer: 'Patatine, carne, verdure, dolci', oven: 'Qualsiasi piatto' },
      { criteria: 'Fascia di prezzo', airfryer: '60-350 €', oven: '200-2.000 €' },
    ],
    cooking_time_title: 'Tempi di cottura: la friggitrice ad aria è più veloce',
    cooking_time: 'La differenza più evidente tra i due apparecchi riguarda i tempi di cottura. Per una porzione di patatine surgelate la friggitrice ad aria impiega 15 minuti (preriscaldamento compreso), il forno tradizionale 35-40. Un pollo intero? 25-30 minuti in friggitrice ad aria contro 55-60 in forno. I tempi variano secondo la dimensione e lo spessore degli alimenti, ma la tendenza non cambia: in media la friggitrice ad aria riduce i tempi di cottura del 50-60%. È un vantaggio decisivo per le famiglie sempre di corsa che vogliono preparare un pasto completo in meno di 30 minuti. Grazie al preriscaldamento rapido (2-3 minuti) puoi iniziare a cuocere quasi subito dopo averla accesa, mentre con il forno devi aspettare 10-15 minuti. Per pasta, riso, stufati e cotture lente la differenza è meno netta, perché il forno gestisce meglio le cotture lunghe e delicate.',
    energy_consumption_title: 'Consumi: un risparmio concreto',
    energy_consumption: 'Con le bollette sempre più care, i consumi sono un fattore decisivo. Una friggitrice ad aria assorbe in genere tra 800 e 1.800 W, un forno elettrico tradizionale 2.000-3.000 W. Con un uso quotidiano di 30 minuti (una cottura in friggitrice ad aria equivale più o meno a un uso del forno), la friggitrice consuma 0,4-0,9 kWh al giorno, cioè 146-329 kWh all\'anno. Un forno usato 50 minuti al giorno consuma invece 1,67-2,5 kWh al giorno, cioè 610-912 kWh all\'anno. In Francia, con una tariffa media di 0,25 € al kWh nel 2026, il risparmio è di 115-190 € all\'anno se sostituisci del tutto il forno con la friggitrice ad aria: per un calcolo preciso, usa la tariffa della tua bolletta. Il conto resta vantaggioso anche se tieni il forno e usi la friggitrice ad aria in aggiunta: risparmierai soprattutto sulle cotture veloci di tutti i giorni. Quasi tutte le friggitrici ad aria recenti hanno una regolazione intelligente della temperatura che riduce i consumi durante il mantenimento in caldo.',
    cooking_quality_title: 'Qualità della cottura: due approcci diversi',
    cooking_quality: 'I due apparecchi cuociono in modo molto diverso. La friggitrice ad aria eccelle nelle consistenze croccanti e dorate, grazie al flusso d\'aria concentrato e ad alta temperatura che accelera la caramellizzazione. Patatine, crocchette, alette di pollo, gamberi in pastella: tutto diventa molto croccante fuori e resta tenero dentro. Il risultato viene spesso paragonato a una frittura in olio, senza le calorie in più. Il forno tradizionale, soprattutto in modalità ventilata, cuoce in modo più uniforme ma meno aggressivo. Le superfici si dorano più lentamente, ma l\'interno dei pezzi grandi cuoce spesso in modo più omogeneo. Per una pizza o una focaccia il forno dà un impasto migliore, con una croccantezza più misurata. Gli arrosti di manzo o di agnello in forno prendono una bella crosticina dorata, anche se di solito meno marcata che in friggitrice ad aria. Nei dolci il forno resta imbattibile: torte, pane e lievitati hanno bisogno di un calore più stabile e graduale di quello che una friggitrice ad aria può offrire. Le torte cotte in friggitrice ad aria rischiano di avere la crosta secca e l\'interno poco cotto.',
    capacity_title: 'Capacità e versatilità: chi fa cosa?',
    capacity: 'Una friggitrice ad aria tipica ha una capienza di 3-10 litri, sufficiente per 1-8 persone a seconda del piatto. In una volta puoi cuocere 4-5 porzioni di patatine, 2-3 petti di pollo o circa 20-30 cimette di broccoli. Per una famiglia di 4-5 persone spesso basta per un pasto completo. I forni offrono 50-80 litri (a volte di più nei modelli più grandi) e permettono di cuocere insieme più piatti diversi: un arrosto, le verdure al forno e un gratin, su tre ripiani. È una capienza insostituibile per i pranzi in famiglia e le feste. Quanto a versatilità, la friggitrice ad aria se la cava benissimo con patatine, carni bianche o rosse, pesce, frutti di mare, verdure e perfino qualche dolce semplice (brownie, torta di mele). Alcuni piatti però non fanno per lei: una vera pizza, il pane fatto in casa, una crostata o una pasta al forno. Per queste preparazioni il forno resta indispensabile. Un compromesso molto diffuso è avere entrambi: la friggitrice ad aria per i pasti veloci di tutti i giorni (il 50-60% dei giorni) e il forno quando c\'è più tempo o ci sono più ospiti.',
    cleaning_title: 'Pulizia: la friggitrice ad aria vince nettamente',
    cleaning: 'La pulizia è uno dei maggiori fastidi per chi usa il forno tradizionale. Schizzi, liquidi traboccati, grasso carbonizzato che si accumula sulle pareti: tutto questo richiede una pulizia frequente e noiosa. I forni senza pirolisi vanno strofinati a mano con prodotti corrosivi, mentre quelli pirolitici (più costosi) si autopuliscono a 500 °C, producendo calore indesiderato e consumando altra energia. La friggitrice ad aria, invece, si pulisce in 2-3 minuti dopo l\'uso. Il cestello e la vaschetta raccogligrasso si estraggono e si lavano facilmente in lavastoviglie o con acqua calda e sapone. Il grasso non schizza sulle pareti, perché cade nella vaschetta sul fondo. Non servono prodotti chimici aggressivi. È un vantaggio molto apprezzato dalle famiglie sempre di corsa e da chi vuole ridurre al minimo le faccende di casa.',
    noise_title: 'Rumore e odori: due esperienze molto diverse',
    noise: 'Con la sua ventola potente, la friggitrice ad aria produce durante la cottura un rumore caratteristico di 75-85 dB, paragonabile a quello di una lavastoviglie in funzione. Ad alcuni dà fastidio, soprattutto in una cucina a vista. Il forno tradizionale è praticamente silenzioso, a parte quando apri lo sportello o quando si attiva la ventilazione interna. Quanto agli odori, la friggitrice ad aria concentra i vapori di cottura in uno spazio ridotto: gli aromi, piacevoli o meno, si diffondono quindi con più intensità. Se cuoci pesce o cavolo in friggitrice ad aria, l\'odore si sente subito. Il forno, con la sua camera più ampia e una ventilazione più diffusa, lo attenua. Con entrambi gli apparecchi è consigliabile una buona cappa aspirante.',
    cost_title: 'Prezzo e durata: quanto costa davvero',
    cost: 'Il prezzo di una friggitrice ad aria va da circa 60 € per i modelli base a 350 € per quelli di fascia alta con funzioni avanzate (schermo touch, più ripiani, app per smartphone). La maggior parte dei modelli affidabili e ben costruiti costa tra 100 e 200 €. Un forno elettrico tradizionale costa 200-500 € per un modello standard, e molto di più se è da incasso o di fascia alta. Quanto a durata, una friggitrice ad aria dura in genere 5-8 anni prima che la resistenza o la ventola si usurino. I forni hanno fama di durare di più (8-15 anni), ma richiedono più manutenzione. Il costo iniziale contenuto della friggitrice ad aria, sommato al risparmio energetico nel lungo periodo (115-190 € all\'anno con la tariffa francese citata sopra), la rende un acquisto conveniente, soprattutto per le famiglie piccole.',
    when_choose_airfryer_title: 'Quando scegliere la friggitrice ad aria?',
    when_choose_airfryer: 'La friggitrice ad aria è la scelta ideale se vivi da solo o in coppia (1-2 persone), se lavori a tempo pieno e la sera hai poco tempo per cucinare, o se vuoi davvero ridurre i consumi e la tua impronta di carbonio. È perfetta anche se segui una dieta particolare (chetogenica, senza glutine, ipocalorica), perché i cibi «fritti» senza olio si adattano bene a queste esigenze. Chi fa attenzione alla salute apprezza soprattutto l\'assenza di olio di cottura, che riduce le calorie. Infine, se vivi in un appartamento con poco spazio, la friggitrice ad aria ingombra molto meno di un forno compatto.',
    when_keep_oven_title: 'Quando conviene tenere il forno?',
    when_keep_oven: 'Tieni il forno se la tua famiglia è numerosa (5 o più persone), se ami fare dolci, se inviti spesso ospiti a pranzo o a cena o se prepari piatti elaborati con più cotture in contemporanea. Il forno è indispensabile per la pizza fatta in casa, il pane, la pasta al forno, le torte dolci e salate e gli arrosti grandi. Se la domenica cucini in anticipo i pasti della settimana (il cosiddetto batch cooking), il forno ti permette di cuocere più piatti insieme, cosa impossibile con una friggitrice ad aria a cestello singolo.',
    replace_oven_title: 'Si può sostituire il forno con una friggitrice ad aria?',
    replace_oven: 'La risposta onesta è: non del tutto, salvo in alcuni casi. Per chi vive da solo o per una coppia senza figli che cucina solo piatti semplici e veloci (carne alla griglia, patatine, verdure arrosto), la sola friggitrice ad aria può bastare. Rinunci a dolci, pizza e arrosti interi, ma consumi il 50% di energia in meno e guadagni molta praticità. Per le famiglie con bambini o per gli appassionati di cucina, invece, sostituire il forno con una friggitrice ad aria sarebbe un errore: le possibilità in cucina si ridurrebbero troppo. Per la maggior parte delle famiglie la soluzione migliore è avere entrambi: la friggitrice ad aria 5-6 giorni a settimana per le cotture veloci ed economiche, il forno 1-2 giorni a settimana per i pasti più elaborati o in famiglia. Così hai il meglio dei due mondi: il massimo risparmio energetico, piena libertà in cucina e meno stress ai fornelli.',
    verdict_title: 'Il nostro verdetto',
    verdict: 'La friggitrice ad aria non sostituisce il forno, ma lo completa alla perfezione. Per le cotture veloci di tutti i giorni (patatine, pollo, verdure grigliate) è imbattibile per rapidità e risparmio energetico. Il forno resta necessario per i grossi tagli di carne, i dolci e le grandi quantità. Nel 2026, con l\'attenzione ai consumi e al budget familiare, la friggitrice ad aria diventa un acquisto quasi indispensabile per qualsiasi famiglia che voglia rinnovare la cucina.',
    choose_airfryer_title: 'Scegli la friggitrice ad aria se...',
    choose_airfryer: 'Cucini spesso per 1-4 persone, vuoi risultati croccanti in poco tempo, vuoi risparmiare sulla bolletta o in settimana hai poco tempo.',
    choose_oven_title: 'Tieni il forno se...',
    choose_oven: 'Cucini spesso per 6 o più persone, prepari dolci, pane o pizza, cuoci arrosti interi o devi cuocere più piatti insieme.',
  },
  nl: {
    title: 'Airfryer of oven: de complete vergelijking (2026)',
    subtitle: 'Airfryer of gewone oven? We zetten ze naast elkaar, zodat je makkelijker kiest.',
    intro: 'De airfryer en de traditionele oven zijn allebei vaste waarden in de keuken. Maar welke past het best bij jou? We vergeleken ze op 7 belangrijke punten, zodat je de juiste keuze maakt.',
    intro_long: 'Airfryer of oven: voor veel huishoudens is dat in 2026 een belangrijke keuze, nu de energierekening zwaar weegt en steeds meer mensen op hun verbruik letten. De airfryer was ooit een gadget, maar verandert inmiddels hoe veel mensen hun dagelijkse maaltijden klaarmaken. Hij verbruikt tot 50% minder energie dan een gewone oven en is vaak in de helft van de tijd klaar. Maar kan hij je oven echt vervangen? Is het een verstandige aankoop of een tijdelijke trend? Deze gids loopt elk onderdeel van de vergelijking na, met concrete cijfers en realistische situaties, zodat je de beste beslissing neemt.',
    how_airfryer_works_title: 'Hoe werkt een airfryer?',
    how_airfryer_works: 'Een airfryer blaast hete lucht met hoge snelheid rond het eten (bij Philips heet dat Rapid Air). Een gewone frituurpan (friteuse) bakt het eten in olie. Een airfryer verhit in plaats daarvan lucht tot een hoge temperatuur (tot 220 °C), en een krachtige ventilator onder het deksel blaast die lucht met grote snelheid rond het eten. Die geconcentreerde hete luchtstroom geeft binnen enkele minuten een knapperig laagje, doordat de maillardreactie sneller verloopt. Het verwarmingselement boven de mand levert de warmte, de ventilator verdeelt de lucht gelijkmatig. Zo verbruikt een airfryer maar 800 tot 1.800 watt en is hij in 2 tot 3 minuten op temperatuur. Het eten ligt in een mand met gaatjes, zodat de lucht er aan alle kanten langs stroomt. Zo krijg je dat “gefrituurde” resultaat zonder één druppel olie toe te voegen. Kruimels en vet vallen onder de mand in de lade, zodat je ze makkelijk opvangt en alles snel schoonmaakt.',
    how_oven_works_title: 'Hoe werkt een traditionele oven?',
    how_oven_works: 'Een traditionele oven, elektrisch of op gas, verwarmt de lucht binnenin door straling en warmtegeleiding. Een verwarmingselement (of gasbrander) onderin en/of bovenin de oven maakt warmte, die zich geleidelijk door de hele ovenruimte verspreidt. Dat gaat vrij langzaam: een oven heeft meestal 10 tot 15 minuten nodig om voor te verwarmen tot 200 °C. Daarna omhult de warmte het eten gelijkmatiger en minder geconcentreerd dan in een airfryer. Alles wordt mooi gelijkmatig gaar, maar je krijgt niet zo snel een knapperige buitenkant. Moderne ovens hebben vaak een heteluchtstand: een ventilator laat de lucht iets sneller circuleren, waardoor het eten gelijkmatiger gaar wordt en de bereidingstijd 10 tot 20% korter is. Ook op hetelucht blijft het vermogen hoog: 2.000 tot 3.000 watt, afhankelijk van het model. De grote ovenruimte (50 tot 80 liter) kost veel energie om op temperatuur te houden. Daar staat tegenover dat je in een oven meerdere gerechten tegelijk maakt: een duidelijk voordeel voor grote gezinnen en uitgebreide maaltijden.',
    comparison_title: 'Gedetailleerde vergelijking op 7 criteria',
    rows: [
      { criteria: 'Voorverwarmen', airfryer: '2–3 minuten', oven: '10–15 minuten' },
      { criteria: 'Energieverbruik', airfryer: '800–1.800 W (30–50% zuiniger)', oven: '2.000–3.000 W' },
      { criteria: 'Knapperig resultaat', airfryer: 'Uitstekend (geconcentreerde lucht)', oven: 'Goed (hetelucht)' },
      { criteria: 'Maximale inhoud', airfryer: '3–10 l (1–8 personen)', oven: '50–80 l (onbeperkt)' },
      { criteria: 'Schoonmaken', airfryer: 'Heel makkelijk (uitneembare mand)', oven: 'Lastig (behalve met pyrolyse)' },
      { criteria: 'Veelzijdigheid', airfryer: 'Friet, vlees, groenten, gebak', oven: 'Alle soorten gerechten' },
      { criteria: 'Prijsklasse', airfryer: '60–350 euro', oven: '200–2.000 euro' },
    ],
    cooking_time_title: 'Bereidingstijd: de airfryer is sneller',
    cooking_time: 'Het grootste verschil tussen de twee zit in de bereidingstijd. Een portie diepvriesfriet is in een airfryer in 15 minuten klaar (voorverwarmen inbegrepen), in een gewone oven duurt dat 35 tot 40 minuten. Een hele kip? 25 tot 30 minuten in de airfryer, tegenover 55 tot 60 minuten in de oven. Die tijden hangen af van de grootte en dikte van wat je bereidt, maar de lijn is duidelijk: met een airfryer ben je gemiddeld 50 tot 60% sneller klaar. Dat scheelt veel voor drukke gezinnen die binnen 30 minuten een volledige maaltijd op tafel willen hebben. Omdat een airfryer in 2 tot 3 minuten is voorverwarmd, begin je bijna meteen na het aanzetten met koken. Bij een oven wacht je eerst 10 tot 15 minuten. Bij pasta, rijst of stoofgerechten is het verschil kleiner, want een oven is beter in lang en langzaam garen.',
    energy_consumption_title: 'Energieverbruik: een flinke besparing',
    energy_consumption: 'Voor veel huishoudens weegt het energieverbruik zwaar mee bij de keuze. Een airfryer verbruikt meestal 800 tot 1.800 watt, een gewone elektrische oven 2.000 tot 3.000 watt. Gebruik je de airfryer elke dag 30 minuten (een portie in de airfryer staat ongeveer gelijk aan één keer de oven aanzetten), dan verbruik je 0,4 tot 0,9 kWh per dag, oftewel 146 tot 329 kWh per jaar. Een oven die je elke dag 50 minuten gebruikt, verbruikt 1,67 tot 2,5 kWh per dag, oftewel 610 tot 912 kWh per jaar. Bij een voorbeeldtarief van 0,25 euro per kWh (vul je eigen tarief in) bespaar je zo’n 115 tot 190 euro per jaar als je de oven helemaal vervangt door een airfryer. Heb je al een oven en gebruik je de airfryer als aanvulling, dan bespaar je vooral op de snelle maaltijden van elke dag. De meeste nieuwe airfryers regelen hun temperatuur slim, waardoor ze minder verbruiken tijdens het warmhouden.',
    cooking_quality_title: 'Resultaat: twee heel verschillende manieren van garen',
    cooking_quality: 'Het resultaat verschilt sterk tussen de twee. De airfryer is op zijn best bij knapperige, goudbruine gerechten: de geconcentreerde, hete luchtstroom laat het eten sneller karamelliseren. Friet, kipnuggets, kippenvleugels en garnalen in beslag worden heel knapperig vanbuiten en blijven zacht vanbinnen. Het resultaat wordt vaak vergeleken met frituren in olie, maar dan zonder de extra calorieën. Een traditionele oven, zeker op hetelucht, geeft een gelijkmatiger maar minder fel resultaat. De buitenkant karamelliseert minder snel, terwijl grote stukken vanbinnen vaak gelijkmatiger gaar worden. Voor pizza of focaccia is de oven beter: het deeg krijgt een betere structuur en wordt gelijkmatig krokant. Een braadstuk van rund of lam krijgt in de oven een mooie goudbruine korst, al is die meestal minder uitgesproken dan uit de airfryer. Bij het bakken van gebak blijft de oven ongeëvenaard: cake, brood en gebak hebben een stabielere, geleidelijkere warmte nodig dan een airfryer kan leveren. Een cake uit de airfryer krijgt al snel een droge korst terwijl het midden nog niet gaar is.',
    capacity_title: 'Inhoud en veelzijdigheid: wie doet wat?',
    capacity: 'Een gemiddelde airfryer heeft een inhoud van 3 tot 10 liter, genoeg voor één tot acht personen, afhankelijk van het gerecht. In één keer maak je vier tot vijf porties friet, twee tot drie kipfilets of zo’n 20 tot 30 roosjes broccoli. Voor een gezin van vier of vijf personen is dat vaak genoeg voor een volledige maaltijd. Een oven biedt 50 tot 80 liter (soms meer bij grote modellen), zodat je meerdere gerechten tegelijk maakt: een braadstuk, geroosterde groenten en een gratin op drie niveaus. Die ruimte is onmisbaar voor familiemaaltijden en feestelijke etentjes. Qua veelzijdigheid doet de airfryer het goed: friet, wit en rood vlees, vis, zeevruchten, groenten en zelfs eenvoudige desserts (brownies, clafoutis). Maar sommige gerechten lukken er niet goed in: een ambachtelijke pizza, zelfgebakken brood, een tarte tatin of een pastaschotel uit de oven. Daarvoor blijft de oven het beste apparaat. Een populair compromis: allebei in huis hebben, de airfryer gebruiken voor de snelle maaltijden van alledag (op 50 tot 60% van de dagen) en de oven als je meer tijd of meer gasten hebt.',
    cleaning_title: 'Schoonmaken: de airfryer wint duidelijk',
    cleaning: 'Schoonmaken is voor veel ovenbezitters een van de grootste ergernissen. Spetters, overgekookt eten en aangekoekt vet op de wanden: dat vraagt steeds weer om een vervelende schoonmaakbeurt. Een oven zonder pyrolyse moet je met de hand schrobben, met agressieve schoonmaakmiddelen. Een pyrolyse-oven (duurder) maakt zichzelf schoon bij 500 °C, maar dat geeft ongewenste warmte en kost extra stroom. Een airfryer maak je na gebruik in 2 tot 3 minuten schoon. De mand en de vetopvangbak zijn uitneembaar en kunnen in de vaatwasser of in warm sop. Het vet spat niet tegen de wanden, omdat het in de opvangbak onderin valt. Agressieve schoonmaakmiddelen zijn niet nodig. Vooral drukke gezinnen en mensen die zo min mogelijk tijd aan het huishouden willen besteden, waarderen dat gemak.',
    noise_title: 'Geluid en geuren: een groot verschil in gebruik',
    noise: 'Door de krachtige ventilator maakt een airfryer tijdens het koken een kenmerkend geluid van 75 tot 85 decibel, vergelijkbaar met een vaatwasser. Sommige mensen vinden dat storend, vooral in een open keuken. Een traditionele oven is vrijwel stil, behalve als je de deur opent of de interne ventilatie aanslaat. En de geuren? Een airfryer houdt de kookdampen in een kleine ruimte bij elkaar, waardoor geuren (lekker of niet) zich sterker verspreiden. Vis of kool in de airfryer geeft al snel een duidelijke geur af. Een oven, met zijn grotere ruimte en meer verspreide ventilatie, verdunt die geuren. Met beide apparaten is een goede afzuigkap aan te raden.',
    cost_title: 'Aanschafprijs en levensduur: de financiële kant',
    cost: 'Airfryers zijn er van zo’n 60 euro voor een eenvoudig instapmodel tot 350 euro voor een topmodel met extra functies (touchscreen, meerdere niveaus, app). De meeste betrouwbare, goed ontworpen modellen zitten tussen 100 en 200 euro. Een gewone elektrische oven kost 200 tot 500 euro voor een standaardmodel, en flink meer voor een inbouwoven of topmodel. Een airfryer gaat meestal 5 tot 8 jaar mee voordat het verwarmingselement of de ventilator versleten raakt. Ovens staan bekend als duurzamer (8 tot 15 jaar), maar vragen meer onderhoud. De lage aanschafprijs van een airfryer en de energiebesparing op lange termijn (115 tot 190 euro per jaar bij het voorbeeldtarief hierboven) zorgen samen voor een korte terugverdientijd, vooral in kleine huishoudens.',
    when_choose_airfryer_title: 'Wanneer kies je een airfryer?',
    when_choose_airfryer: 'Een airfryer is de ideale keuze als je alleen woont of met z’n tweeën (één of twee personen), fulltime werkt en ’s avonds weinig tijd hebt om te koken, of als je bewust minder energie wilt verbruiken en je CO2-voetafdruk wilt verkleinen. Hij past ook goed bij een streng dieet (keto, glutenvrij, caloriearm), omdat bakken zonder olie goed aansluit bij die behoeften. Wie op zijn gezondheid let, waardeert vooral dat er geen frituurolie nodig is, zodat je minder calorieën binnenkrijgt. En woon je in een appartement met weinig ruimte? Dan neemt een airfryer veel minder plaats in dan een compacte oven.',
    when_keep_oven_title: 'Wanneer is de oven de betere keuze?',
    when_keep_oven: 'Houd je oven als je een groot gezin hebt (vijf personen of meer), graag bakt, regelmatig gasten ontvangt of uitgebreide gerechten maakt met meerdere bereidingen tegelijk. Voor zelfgemaakte pizza, ambachtelijk brood, pastaschotels, zoete of hartige taarten en grote braadstukken heb je een oven nodig. Kook je op zondag vooruit voor de hele week? Dan maak je in de oven meerdere gerechten tegelijk, wat met een airfryer met één mand niet lukt.',
    replace_oven_title: 'Kan een airfryer je oven vervangen?',
    replace_oven: 'Het eerlijke antwoord: niet helemaal, behalve voor bepaalde mensen. Woon je alleen of met z’n tweeën zonder kinderen en kook je vooral eenvoudige, snelle maaltijden (gegrild vlees, friet, geroosterde groenten), dan kan een airfryer in principe volstaan. Gebak, pizza of hele braadstukken maak je dan niet meer, maar je bespaart zo’n 50% aan energie en hebt veel meer gemak. Voor gezinnen met kinderen of fanatieke thuiskoks is het een vergissing om de oven door een airfryer te vervangen: je beperkt je mogelijkheden te veel. Voor de meeste huishoudens is allebei hebben de beste oplossing: de airfryer vijf tot zes dagen per week voor snelle, zuinige maaltijden en de oven een tot twee dagen per week voor uitgebreidere maaltijden of etentjes met familie. Zo heb je het beste van twee werelden: zoveel mogelijk energiebesparing, alle vrijheid in de keuken en minder stress.',
    verdict_title: 'Ons oordeel',
    verdict: 'Een airfryer vervangt de oven niet, maar vult hem goed aan. Voor de snelle maaltijden van elke dag (friet, kip, geroosterde groenten) is de airfryer het snelst en het zuinigst. De oven blijft nodig voor grote stukken vlees, voor bakken en voor grote hoeveelheden. Nu energie en huishoudbudget in 2026 zwaar wegen, is een airfryer voor bijna elk huishouden dat zijn keuken wil moderniseren een logische aanschaf.',
    choose_airfryer_title: 'Kies een airfryer als…',
    choose_airfryer: 'Je kookt vaak voor één tot vier personen, je wilt snel een knapperig resultaat, je wilt besparen op je energierekening of je hebt op werkdagen weinig tijd.',
    choose_oven_title: 'Houd je oven als…',
    choose_oven: 'Je kookt regelmatig voor zes personen of meer, je bakt (taart, brood, pizza), je maakt hele braadstukken of je wilt meerdere gerechten tegelijk bereiden.',
  },
  pl: {
    title: 'Frytkownica beztłuszczowa czy piekarnik? Porównanie 2026',
    subtitle: 'Frytkownica bez oleju czy klasyczny piekarnik? Porównaliśmy oba urządzenia, żeby ułatwić Ci wybór.',
    intro: 'Frytkownica beztłuszczowa (air fryer, czyli frytkownica na gorące powietrze) i tradycyjny piekarnik to dwa podstawowe urządzenia do przyrządzania potraw. Które z nich lepiej odpowiada Twoim potrzebom? Porównaliśmy je pod kątem siedmiu kluczowych kryteriów, żeby pomóc Ci dokonać trafnego wyboru.',
    intro_long: 'W 2026 roku ceny prądu wciąż rosną, a świadomość ekologiczna jest coraz większa, dlatego wybór między frytkownicą beztłuszczową a tradycyjnym piekarnikiem staje się dla milionów gospodarstw domowych poważną decyzją. Frytkownica, jeszcze niedawno egzotyczny gadżet, dziś realnie zmienia sposób przygotowywania posiłków. Zużywa nawet o 50% mniej energii niż klasyczny piekarnik, a czas przyrządzania potraw skraca o połowę, nic więc dziwnego, że budzi tyle dyskusji. Czy naprawdę może zastąpić piekarnik? To rozsądna inwestycja czy przemijająca moda? W tym przewodniku omawiamy każdy aspekt porównania na podstawie konkretnych danych i realistycznych scenariuszy, aby pomóc Ci podjąć jak najlepszą decyzję.',
    how_airfryer_works_title: 'Jak działa frytkownica beztłuszczowa?',
    how_airfryer_works: 'Frytkownica beztłuszczowa działa w technologii Rapid Air, czyli szybkiego obiegu gorącego powietrza (konwekcji o dużej prędkości). Zwykła frytkownica smaży potrawy w oleju, a frytkownica beztłuszczowa nagrzewa powietrze do bardzo wysokiej temperatury (do 220 °C) i za pomocą mocnego wentylatora umieszczonego pod pokrywą z dużą prędkością tłoczy je wokół potraw. Skupiony strumień gorącego powietrza w ciągu kilku minut tworzy chrupiącą skórkę – to efekt przyspieszonej reakcji Maillarda. Grzałka nad koszem wytwarza ciepło, a wentylator równomiernie rozprowadza powietrze. Dzięki temu frytkownica ma moc zaledwie 800–1800 W i nagrzewa się do temperatury pieczenia w ciągu 2–3 minut. Produkty wkłada się do perforowanego kosza, w którym powietrze swobodnie opływa je ze wszystkich stron. Tak powstaje lubiany efekt „smażenia” bez ani kropli oleju. Resztki jedzenia spadają na dno pojemnika, z dala od kosza, więc łatwo je usunąć, a czyszczenie trwa krótko.',
    how_oven_works_title: 'Jak działa tradycyjny piekarnik?',
    how_oven_works: 'Klasyczny piekarnik, elektryczny lub gazowy, nagrzewa powietrze w komorze przez promieniowanie i przewodzenie ciepła. Grzałka elektryczna (lub palnik gazowy) na dole i/lub u góry piekarnika wytwarza ciepło, które stopniowo rozchodzi się po całej komorze. To dość powolny proces: nagrzanie piekarnika do 200 °C trwa zwykle 10–15 minut. Po nagrzaniu ciepło otacza potrawy w sposób bardziej rozproszony i równomierny niż we frytkownicy. Potrawy pieką się równo, ale nie powstaje tak szybko chrupiąca skórka. Nowoczesne piekarniki często mają funkcję termoobiegu: wentylator nieco przyspiesza cyrkulację powietrza, dzięki czemu potrawy pieką się równiej, a czas pieczenia skraca się o 10–20%. Jednak nawet z termoobiegiem moc piekarnika pozostaje duża: od 2000 do 3000 W, zależnie od modelu. Utrzymanie stałej temperatury w obszernej komorze (50–80 l) wymaga sporo energii. Dzięki dużej przestrzeni piekarnik pozwala piec kilka potraw jednocześnie, co jest niezaprzeczalną zaletą w dużych rodzinach i przy bardziej pracochłonnych daniach.',
    comparison_title: 'Szczegółowe porównanie według 7 kryteriów',
    rows: [
      {
        criteria: 'Czas nagrzewania',
        airfryer: '2–3 minuty',
        oven: '10–15 minut',
      },
      {
        criteria: 'Moc i zużycie energii',
        airfryer: '800–1800 W (oszczędność 30–50%)',
        oven: '2000–3000 W',
      },
      {
        criteria: 'Chrupkość potraw',
        airfryer: 'Doskonała (skupiony strumień powietrza)',
        oven: 'Dobra (termoobieg)',
      },
      {
        criteria: 'Maksymalna pojemność',
        airfryer: '3–10 l (1–8 osób)',
        oven: '50–80 l (bez ograniczeń)',
      },
      {
        criteria: 'Czyszczenie',
        airfryer: 'Bardzo łatwe (wyjmowany kosz)',
        oven: 'Trudne (chyba że z pirolizą)',
      },
      {
        criteria: 'Wszechstronność',
        airfryer: 'Frytki, mięso, warzywa, ciasta',
        oven: 'Wszystkie rodzaje potraw',
      },
      {
        criteria: 'Przedział cenowy',
        airfryer: '250–1500 zł',
        oven: '860–8600 zł',
      },
    ],
    cooking_time_title: 'Czas przyrządzania: frytkownica wygrywa szybkością',
    cooking_time: 'Najbardziej widoczna różnica między tymi urządzeniami dotyczy czasu przyrządzania potraw. Porcję mrożonych frytek frytkownica przygotuje w 15 minut (razem z nagrzewaniem), a zwykły piekarnik potrzebuje na to 35–40 minut. Cały kurczak? We frytkownicy 25–30 minut, w piekarniku 55–60 minut. Czasy zależą od wielkości i grubości produktów, ale tendencja jest stała: frytkownica skraca czas przyrządzania średnio o 50–60%. Ma to ogromne znaczenie dla zapracowanych rodzin, które chcą przygotować pełny posiłek w niecałe 30 minut. Frytkownica nagrzewa się w 2–3 minuty, więc możesz zacząć niemal od razu po jej włączeniu, a na piekarnik trzeba czekać 10–15 minut. Przy makaronach, ryżu czy potrawach duszonych różnica jest mniejsza, bo piekarnik lepiej radzi sobie z długim, powolnym gotowaniem.',
    energy_consumption_title: 'Zużycie energii: wyraźne oszczędności',
    energy_consumption: 'Zużycie energii to czynnik decydujący dla gospodarstw domowych, które płacą coraz wyższe rachunki za prąd. Frytkownica ma zwykle moc 800–1800 W, a klasyczny piekarnik elektryczny 2000–3000 W. Przy codziennym użytkowaniu przez 30 minut (jedna porcja z frytkownicy odpowiada mniej więcej jednemu użyciu piekarnika) frytkownica zużywa 0,4–0,9 kWh dziennie, czyli 146–329 kWh rocznie. Piekarnik używany codziennie przez 50 minut zużywa 1,67–2,5 kWh dziennie, czyli 610–912 kWh rocznie. Przy stawce 1,16 zł/kWh, którą do wyliczeń przyjmuje APPLiA Polska, prąd zużyty przez frytkownicę kosztuje więc ok. 170–380 zł rocznie, a przez piekarnik ok. 710–1060 zł; jeśli całkowicie zastąpisz piekarnik frytkownicą, różnica wyniesie od ok. 330 do 890 zł rocznie (rzeczywista kwota zależy od stawki z Twojej umowy na prąd). Bilans jest jeszcze korzystniejszy, jeśli masz już piekarnik, a frytkownica go tylko uzupełnia: zaoszczędzisz przede wszystkim na szybkich, codziennych posiłkach. Większość nowszych frytkownic ma inteligentną regulację temperatury, która zmniejsza zużycie energii podczas podtrzymywania ciepła.',
    cooking_quality_title: 'Efekty pieczenia i smażenia: dwa różne podejścia',
    cooking_quality: 'Efekty, jakie dają te dwie technologie, zasadniczo się różnią. Frytkownica świetnie sprawdza się tam, gdzie liczy się chrupiąca, złocista skórka, bo skupiony strumień gorącego powietrza przyspiesza karmelizację. Frytki, nuggetsy, skrzydełka z kurczaka, krewetki w cieście – wszystkie te potrawy wychodzą bardzo chrupiące z zewnątrz i delikatne w środku. Efekt często porównuje się do smażenia w oleju, tyle że bez dodatkowych kalorii. Tradycyjny piekarnik, zwłaszcza z termoobiegiem, piecze bardziej równomiernie, ale mniej intensywnie. Powierzchnia nie karmelizuje się tak szybko, za to duże kawałki często są równiej upieczone w środku. Pizza czy focaccia mają z piekarnika lepsze ciasto z umiarkowanie chrupiącym spodem. Pieczeń wołowa czy jagnięca nabiera w piekarniku pięknej, złocistej skórki, choć zwykle mniej wyrazistej niż we frytkownicy. W wypiekach piekarnik pozostaje bezkonkurencyjny: ciasta, chleby i drożdżówki potrzebują stabilniejszego, łagodniej narastającego ciepła, niż może zapewnić frytkownica. Ciasto pieczone we frytkownicy może mieć wysuszoną skórkę i niedopieczony środek.',
    capacity_title: 'Pojemność i wszechstronność: które urządzenie do czego?',
    capacity: 'Typowa frytkownica ma pojemność 3–10 l, co – zależnie od potrawy – wystarcza dla 1–8 osób. Za jednym razem przygotujesz 4–5 porcji frytek, 2–3 piersi z kurczaka albo ok. 20–30 różyczek brokułu. Rodzinie 4–5-osobowej często wystarcza to na pełny posiłek. Piekarniki mają 50–80 l (bardzo duże modele nawet więcej), więc można w nich jednocześnie piec kilka różnych potraw na trzech poziomach: pieczeń, pieczone warzywa i zapiekankę. Taka pojemność jest nie do zastąpienia przy rodzinnych i świątecznych obiadach. Jeśli chodzi o wszechstronność, frytkownica świetnie radzi sobie z frytkami, białym i czerwonym mięsem, rybami, owocami morza, warzywami, a nawet niektórymi prostymi deserami (brownie, clafoutis). Są jednak dania, z którymi sobie nie poradzi: pizza jak z pizzerii, domowy chleb, tarta tatin czy zapiekanka z makaronem. Do nich piekarnik pozostaje niezbędny. Popularny kompromis to posiadanie obu urządzeń: frytkownica do szybkich, codziennych posiłków (w 50–60% dni), a piekarnik na okazje, gdy masz więcej czasu albo więcej gości.',
    cleaning_title: 'Łatwość czyszczenia: wyraźne zwycięstwo frytkownicy',
    cleaning: 'Czyszczenie to jedna z największych bolączek użytkowników tradycyjnych piekarników. Rozpryski, wykipiałe sosy, przypalony tłuszcz na ściankach – wszystko to wymaga regularnego, żmudnego sprzątania. Piekarniki bez pirolizy trzeba szorować ręcznie żrącymi środkami, a modele z pirolizą (droższe) czyszczą się same w temperaturze 500 °C, co oznacza dodatkowe ciepło w kuchni i dodatkowe zużycie energii. Czyszczenie frytkownicy po użyciu zajmuje natomiast zaledwie 2–3 minuty. Kosz i pojemnik na tłuszcz są wyjmowane i łatwo je umyć w zmywarce lub w ciepłej wodzie z płynem do naczyń. Tłuszcz nie pryska na ścianki, bo spływa do dolnego pojemnika. Nie potrzeba żadnej agresywnej chemii. Tę zaletę szczególnie doceniają zapracowane rodziny i osoby, które chcą poświęcać jak najmniej czasu na domowe obowiązki.',
    noise_title: 'Hałas i zapachy: duże różnice w codziennym użytkowaniu',
    noise: 'Frytkownica ma mocny wentylator, dlatego podczas pracy wydaje charakterystyczny szum o głośności 75–85 dB, porównywalny z hałasem zmywarki. Niektórym ten dźwięk przeszkadza, zwłaszcza w kuchni otwartej na salon. Tradycyjny piekarnik pracuje praktycznie bezgłośnie, chyba że otworzysz drzwiczki albo włączy się wewnętrzny wentylator. Jeśli chodzi o zapachy, frytkownica skupia opary w niewielkiej przestrzeni, przez co aromaty (przyjemne i nieprzyjemne) rozchodzą się intensywniej. Ryba czy kapusta przyrządzane we frytkownicy szybko dają o sobie znać charakterystycznym zapachem. W piekarniku, z większą komorą i rozproszonym obiegiem powietrza, zapachy są mniej wyczuwalne. Przy obu urządzeniach warto mieć sprawny okap.',
    cost_title: 'Cena zakupu i trwałość: rachunek kosztów',
    cost: 'Ceny frytkownic wahają się od ok. 250 zł za proste modele z niższej półki do 1500 zł za urządzenia z wyższej półki z zaawansowanymi funkcjami (ekran dotykowy, kilka poziomów, aplikacja mobilna). Większość niezawodnych, dobrze zaprojektowanych modeli kosztuje 430–860 zł. Standardowy piekarnik elektryczny to wydatek rzędu 860–2150 zł, a piekarnik do zabudowy lub model z wyższej półki kosztuje znacznie więcej. Jeśli chodzi o trwałość, frytkownica służy zwykle 5–8 lat, zanim zużyje się grzałka lub wentylator. Piekarniki uchodzą za trwalsze (8–15 lat), ale wymagają więcej konserwacji. Niska cena zakupu frytkownicy w połączeniu z oszczędnościami na energii w dłuższym okresie (we Francji 115–190 € rocznie) daje atrakcyjny zwrot z inwestycji, zwłaszcza w małych gospodarstwach domowych.',
    when_choose_airfryer_title: 'Kiedy wybrać frytkownicę beztłuszczową?',
    when_choose_airfryer: 'Frytkownica to idealny wybór, jeśli gotujesz tylko dla siebie lub we dwoje (1–2 osoby), pracujesz na pełny etat i wieczorem brakuje Ci czasu na przygotowanie posiłku albo chcesz ograniczyć zużycie energii i swój ślad węglowy. Sprawdzi się też świetnie, jeśli stosujesz restrykcyjną dietę (ketogeniczną, bezglutenową, niskokaloryczną), bo potrawy smażone bez oleju dobrze wpisują się w takie potrzeby. Osoby dbające o zdrowie szczególnie doceniają to, że do smażenia nie potrzeba oleju, co zmniejsza kaloryczność posiłków. I wreszcie: jeśli mieszkasz w małym mieszkaniu i brakuje Ci miejsca, frytkownica zajmie go znacznie mniej niż kompaktowy piekarnik.',
    when_keep_oven_title: 'Kiedy zachować piekarnik?',
    when_keep_oven: 'Zachowaj piekarnik, jeśli masz dużą rodzinę (5+ osób), lubisz piec, często przyjmujesz gości lub przygotowujesz pracochłonne dania, które wymagają kilku jednoczesnych etapów. Piekarnik jest niezbędny do domowej pizzy i domowego chleba, zapiekanek z makaronem, słodkich i wytrawnych tart oraz dużych pieczeni. Jeśli w niedzielę gotujesz na cały tydzień (batch cooking), w piekarniku przygotujesz kilka potraw naraz, a we frytkownicy z jednym koszem jest to niemożliwe.',
    replace_oven_title: 'Czy można zastąpić piekarnik frytkownicą?',
    replace_oven: 'Szczera odpowiedź brzmi: nie całkowicie, chyba że należysz do określonej grupy użytkowników. Osobie mieszkającej samotnie lub parze bez dzieci, które przygotowują tylko proste i szybkie posiłki (grillowane mięso, frytki, pieczone warzywa), w zasadzie może wystarczyć sama frytkownica. Nie upieczesz w niej ciasta, pizzy ani całej pieczeni, ale zużyjesz o połowę mniej energii i zyskasz sporo wygody. Dla rodzin z dziećmi i miłośników gotowania zastąpienie piekarnika frytkownicą byłoby błędem, bo zbyt mocno ograniczyłoby kulinarne możliwości. Dla większości gospodarstw domowych najlepszym rozwiązaniem jest posiadanie obu urządzeń: frytkownicy na 5–6 dni w tygodniu do szybkich i oszczędnych posiłków, a piekarnika na 1–2 dni w tygodniu do bardziej wymagających lub rodzinnych dań. Taki duet daje to, co najlepsze w obu urządzeniach: maksymalne oszczędności energii, pełną swobodę w kuchni i mniej stresu przy gotowaniu.',
    verdict_title: 'Nasz werdykt',
    verdict: 'Frytkownica nie zastępuje piekarnika, ale świetnie go uzupełnia. Przy szybkich codziennych posiłkach (frytki, kurczak, grillowane warzywa) jest bezkonkurencyjna pod względem szybkości i oszczędności energii. Piekarnik pozostaje niezbędny przy dużych kawałkach mięsa, wypiekach i daniach przygotowywanych w dużych ilościach. W 2026 roku, gdy coraz więcej osób liczy się z kosztami energii i domowym budżetem, frytkownica staje się niemal obowiązkowym wyposażeniem dla każdego, kto chce unowocześnić swoją kuchnię.',
    choose_airfryer_title: 'Wybierz frytkownicę, jeśli...',
    choose_airfryer: 'Często gotujesz dla 1–4 osób, lubisz szybko przygotowane, chrupiące potrawy, chcesz obniżyć rachunki za prąd albo w tygodniu brakuje Ci czasu.',
    choose_oven_title: 'Zostaw piekarnik, jeśli...',
    choose_oven: 'Regularnie gotujesz dla 6 i więcej osób, lubisz piec (ciasta, chleby, pizze), przygotowujesz duże kawałki mięsa w całości albo musisz przyrządzać kilka potraw jednocześnie.',
  },
  sv: {
    title: 'Airfryer eller vanlig ugn: den stora jämförelsen 2026',
    subtitle: 'Varmluftsfritös eller vanlig ugn? Vi har jämfört båda så att du kan välja rätt.',
    intro: 'Airfryern (varmluftsfritösen) och den vanliga ugnen är två viktiga apparater i köket. Men vilken passar dina behov bäst? Vi har jämfört de två teknikerna utifrån 7 viktiga kriterier för att hjälpa dig att välja rätt.',
    intro_long: '2026 har valet mellan airfryer och vanlig ugn blivit en viktig fråga för många hushåll som vill hålla nere elräkningen och tänker mer på miljön. Airfryern, som länge sågs som en udda pryl, har i dag blivit ett vanligt inslag i köket och ändrat hur många lagar sin vardagsmat. Med upp till 50 % lägre elförbrukning än en vanlig ugn och halverade tillagningstider har den blivit ett hett diskussionsämne i många kök. Men kan den verkligen ersätta din ugn? Är den en klok investering eller bara en övergående trend? Den här guiden går igenom alla delar av jämförelsen, med konkreta siffror och realistiska exempel, så att du kan fatta bästa möjliga beslut.',
    how_airfryer_works_title: 'Hur fungerar en airfryer?',
    how_airfryer_works: 'En airfryer (varmluftsfritös) bygger på en teknik som kallas Rapid Air, eller varmluft med hög hastighet. Till skillnad från en vanlig fritös, där maten tillagas i olja, värmer airfryern upp luften till mycket hög temperatur (upp till 220 °C) och blåser den i hög hastighet runt maten med en kraftig fläkt som sitter under locket. Det koncentrerade varmluftsflödet ger en krispig yta på bara några minuter genom en påskyndad Maillardreaktion. Värmeelementet ovanför korgen står för själva värmen, medan fläkten ser till att luften fördelas jämnt. Tack vare det här systemet drar en airfryer bara 800–1 800 watt och når tillagningstemperaturen på 2–3 minuter. Maten läggs i en perforerad korg där luften kan cirkulera fritt runt alla ytor, vilket ger den omtyckta ”friterade” ytan utan en enda droppe olja. Matrester faller ner i botten av behållaren, en bit under korgen, så att de är lätta att ta bort och rengöringen går snabbt.',
    how_oven_works_title: 'Hur fungerar en vanlig ugn?',
    how_oven_works: 'En vanlig ugn, oavsett om den drivs med el eller gas, värmer upp luften inuti med strålningsvärme och värmeledning. Ett värmeelement (eller en gasbrännare) i ugnens botten och/eller tak alstrar värmen, som sedan sprids gradvis i hela ugnsutrymmet. Det går ganska långsamt: oftast tar det 10–15 minuter att förvärma en ugn till 200 °C. När ugnen väl är varm omsluter värmen maten mer diffust och jämnt än i en airfryer, vilket ger en jämn tillagning men inte samma snabba krispighet på ytan. Moderna ugnar har ofta varmluft, där en fläkt snabbar på luftcirkulationen något, vilket ger jämnare resultat och 10–20 % kortare tillagningstid. Men även med varmluft är effekten hög: mellan 2 000 och 3 000 watt beroende på modell. Det stora ugnsutrymmet (50–80 liter) kräver mycket energi för att hålla en jämn temperatur. Tack vare utrymmet kan du dessutom laga flera rätter på en gång – en klar fördel för storfamiljer och mer avancerade måltider.',
    comparison_title: 'Detaljerad jämförelse utifrån 7 kriterier',
    rows: [
      {
        criteria: 'Förvärmningstid',
        airfryer: '2–3 minuter',
        oven: '10–15 minuter',
      },
      {
        criteria: 'Energiförbrukning',
        airfryer: '800–1 800 W (30–50 % lägre förbrukning)',
        oven: '2 000–3 000 W',
      },
      {
        criteria: 'Krispighet',
        airfryer: 'Utmärkt (koncentrerad varmluft)',
        oven: 'Bra (varmluft)',
      },
      {
        criteria: 'Största volym',
        airfryer: '3–10 l (1–8 personer)',
        oven: '50–80 l (obegränsat)',
      },
      {
        criteria: 'Rengöring',
        airfryer: 'Mycket lätt (löstagbar korg)',
        oven: 'Besvärlig (utom med pyrolys)',
      },
      {
        criteria: 'Mångsidighet',
        airfryer: 'Pommes frites, kött, grönsaker, kakor',
        oven: 'Alla sorters rätter',
      },
      {
        criteria: 'Prisnivå',
        airfryer: '650–3 900 kr',
        oven: '2 200–22 000 kr',
      },
    ],
    cooking_time_title: 'Tillagningstid: airfryern vinner på snabbhet',
    cooking_time: 'Den mest påtagliga skillnaden mellan apparaterna är tillagningstiden. En portion frysta pommes frites tar 15 minuter i en airfryer (förvärmning inräknad), medan en vanlig ugn behöver 35–40 minuter. En hel kyckling? 25–30 minuter i airfryern mot 55–60 minuter i ugnen. Siffrorna varierar med storlek och tjocklek, men tendensen är tydlig: airfryern kortar tillagningstiden med i snitt 50–60 %. Det gör stor skillnad för familjer med fullt upp som vill ha en hel måltid på bordet på under 30 minuter. Eftersom airfryern förvärms på 2–3 minuter kan du börja laga maten nästan direkt när du har slagit på den, medan ugnen kräver 10–15 minuters väntan. För pasta, ris och långkok är skillnaden mindre, eftersom ugnen klarar långsam tillagning bättre.',
    energy_consumption_title: 'Elförbrukning: rejäla besparingar',
    energy_consumption: 'För den som vill hålla nere elräkningen är förbrukningen en avgörande faktor. En airfryer drar oftast mellan 800 och 1 800 watt, medan en vanlig elugn går på 2 000–3 000 watt. Vid daglig användning i 30 minuter (en omgång i airfryern motsvarar ungefär en omgång i ugnen) förbrukar airfryern 0,4–0,9 kWh per dag, alltså 146–329 kWh per år. En ugn som används 50 minuter om dagen förbrukar 1,67–2,5 kWh per dag, alltså 610–912 kWh per år. Med det franska genomsnittspriset 2026 på 0,25 € per kWh (ca 2,75 kr) blir besparingen cirka 1 300–2 100 kr per år om du helt ersätter ugnen med en airfryer. Ditt eget elpris står på elräkningen. Siffrorna blir ännu mer fördelaktiga om du redan har en ugn och använder airfryern som komplement: då sparar du framför allt på de snabba vardagsmåltiderna. De flesta nyare airfryrar har en smart temperaturreglering som sänker förbrukningen när maten hålls varm.',
    cooking_quality_title: 'Tillagningskvalitet: två olika sätt att laga mat',
    cooking_quality: 'Resultatet skiljer sig tydligt mellan de två teknikerna. Airfryern är överlägsen när det gäller krispiga, gyllene ytor, tack vare det koncentrerade och mycket heta luftflödet som påskyndar karamelliseringen. Pommes frites, nuggets, kycklingvingar och friterade räkor blir otroligt krispiga utanpå men förblir mjuka inuti. Resultatet jämförs ofta med friterad mat, fast utan de extra kalorierna från oljan. Den vanliga ugnen, särskilt med varmluft, ger en jämnare men mildare tillagning. Ytan karamelliseras inte lika snabbt, men stora bitar blir ofta jämnare tillagade inuti. För pizza och focaccia ger ugnen en bättre deg med en lagom krispig botten. Nöt- och lammstekar får en fin gyllene yta i ugnen, men den blir oftast mindre intensiv än i en airfryer. När det gäller bakning är ugnen oslagbar: kakor, bröd och bakverk kräver en stabilare och jämnare värme än en airfryer kan ge. En kaka som gräddas i airfryern riskerar att få en torr skorpa och en ogräddad mitt.',
    capacity_title: 'Volym och mångsidighet: vem gör vad?',
    capacity: 'En vanlig airfryer rymmer 3–10 liter, vilket räcker till 1–8 personer beroende på rätt. Du kan laga 4–5 portioner pommes frites, 2–3 kycklingbröst eller ungefär 20–30 broccolibuketter på en gång. För en familj på 4–5 personer räcker det ofta till en hel måltid. Ugnar rymmer 50–80 liter (ibland mer i de största modellerna), så att du kan laga flera olika rätter samtidigt: en stek, ugnsrostade grönsaker och en gratäng på tre olika nivåer. Det utrymmet går inte att ersätta vid familjemiddagar och fester. När det gäller mångsidighet klarar airfryern det mesta utmärkt: pommes frites, ljust och rött kött, fisk, skaldjur, grönsaker och till och med enkla desserter (brownies, clafoutis). Men vissa rätter klarar den inte: en riktig pizza, hembakat bröd, en tarte tatin eller en pastagratäng. Där är ugnen fortfarande oumbärlig. En populär kompromiss är att ha båda: airfryern till snabba vardagsmåltider (50–60 % av dagarna) och ugnen när du har mer tid eller fler gäster.',
    cleaning_title: 'Rengöring: klar seger för airfryern',
    cleaning: 'Rengöringen hör till det som irriterar ugnsägare mest. Stänk, spill och fett som bränns fast på väggarna kräver regelbunden och tidsödande rengöring. Ugnar utan pyrolys måste skuras för hand med frätande rengöringsmedel, medan ugnar med pyrolys (som är dyrare) rengör sig själva vid 500 °C, vilket ger oönskad värme och extra elförbrukning. En airfryer behöver däremot bara 2–3 minuters rengöring efter användning. Korgen och uppsamlingsskålen för fettet går att ta loss och är lätta att diska i diskmaskin eller i varmt vatten med diskmedel. Fettet stänker inte på väggarna, eftersom det droppar ner i skålen under korgen. Inga starka kemikalier behövs. Det uppskattas särskilt av familjer med fullt upp och av alla som vill lägga mindre tid på hushållssysslor.',
    noise_title: 'Ljud och lukt: helt olika förutsättningar',
    noise: 'Med sin kraftiga fläkt låter en airfryer 75–85 decibel under tillagningen, ungefär som en diskmaskin. En del tycker att ljudet stör, särskilt i ett öppet kök. Den vanliga ugnen är i princip tyst, utom när du öppnar luckan eller när den inbyggda fläkten startar. När det gäller lukt samlar airfryern matoset i ett litet utrymme, vilket gör att dofterna (goda som dåliga) sprids mer intensivt. Fisk eller kål i airfryern ger snabbt en tydlig lukt. Ugnen, med sitt större utrymme och sin mer spridda ventilation, späder ut lukterna. En bra köksfläkt är att rekommendera, oavsett vilken av apparaterna du använder.',
    cost_title: 'Inköpspris och livslängd: det ekonomiska perspektivet',
    cost: 'En airfryer kostar från cirka 650 kr för enkla instegsmodeller till runt 3 900 kr för toppmodeller med avancerade funktioner (pekskärm, flera nivåer, app). De flesta pålitliga och välbyggda modeller ligger på 1 100–2 200 kr. En vanlig elugn kostar 2 200–5 500 kr för en standardmodell och betydligt mer för en inbyggnadsugn eller en premiummodell. När det gäller livslängd håller en airfryer oftast i 5–8 år innan värmeelementet eller fläkten slits ut. Ugnar anses hålla längre (8–15 år), men kräver mer skötsel. Det låga inköpspriset kombinerat med elbesparingarna på lång sikt (cirka 1 300–2 100 kr per år enligt räkneexemplet ovan) gör en airfryer till en lönsam investering, särskilt i små hushåll.',
    when_choose_airfryer_title: 'När ska du välja en airfryer?',
    when_choose_airfryer: 'En airfryer är perfekt om du bor ensam eller är två (1–2 personer), om du jobbar heltid och har ont om tid att laga mat på kvällarna, eller om du aktivt vill minska din elförbrukning och ditt klimatavtryck. Den passar också bra om du följer en särskild kost (keto, glutenfri, kalorisnål), eftersom mat som ”friteras” utan olja fungerar bra i de dieterna. Är du mån om hälsan uppskattar du säkert att det inte behövs någon stekolja, vilket ger färre kalorier. Och bor du i lägenhet med ont om plats tar en airfryer betydligt mindre plats än en kompakt ugn.',
    when_keep_oven_title: 'När ska du behålla ugnen?',
    when_keep_oven: 'Behåll ugnen om du har en storfamilj (5 personer eller fler), om du gillar att baka, om du ofta har gäster på middag eller om du lagar avancerade rätter som kräver flera tillagningssteg samtidigt. Ugnen är oumbärlig för hemgjord pizza, hembakat bröd, pastagratänger, söta och salta pajer och stora stekar. Gör du matlådor för hela veckan på söndagen kan du tillaga flera rätter samtidigt i ugnen, vilket är omöjligt i en airfryer med en enda korg.',
    replace_oven_title: 'Kan du ersätta ugnen med en airfryer?',
    replace_oven: 'Det ärliga svaret: inte helt, utom för vissa hushåll. För den som bor ensam eller för ett par utan barn som bara lagar enkla och snabba rätter (grillat kött, pommes frites, ugnsrostade grönsaker) kan en airfryer rent tekniskt räcka. Du förlorar möjligheten att baka, göra pizza eller laga hela stekar, men du sparar 50 % el och vinner mycket i bekvämlighet. För barnfamiljer och matentusiaster vore det ett misstag att ersätta ugnen med en airfryer: du skulle begränsa dina möjligheter i köket för mycket. Det bästa för de flesta hushåll är att ha båda: airfryern 5–6 dagar i veckan för snabb och energisnål matlagning och ugnen 1–2 dagar i veckan för mer avancerade måltider eller familjemiddagar. Kombinationen ger det bästa av två världar: maximal elbesparing, full flexibilitet i köket och mindre stress vid spisen.',
    verdict_title: 'Vårt omdöme',
    verdict: 'Airfryern ersätter inte ugnen, men den kompletterar den perfekt. För snabb vardagsmat (pommes frites, kyckling, grillade grönsaker) är airfryern oslagbar när det gäller tid och elförbrukning. Ugnen är fortfarande oumbärlig för stora köttbitar, bakning och stora mängder mat. 2026, när många håller koll på både elförbrukningen och hushållsbudgeten, har airfryern blivit nästan ett självklart val för alla hushåll som vill modernisera köket.',
    choose_airfryer_title: 'Välj en airfryer om …',
    choose_airfryer: 'Du lagar ofta mat för 1–4 personer, vill ha krispiga resultat snabbt, vill få ner elräkningen eller har ont om tid i veckorna.',
    choose_oven_title: 'Behåll ugnen om …',
    choose_oven: 'Du lagar regelbundet mat för 6 personer eller fler, bakar (kakor, bröd, pizza), tillagar hela stekar eller behöver laga flera rätter samtidigt.',
  },
  us: {
    title: 'Air Fryer vs. Oven: The Definitive Comparison (2026)',
    subtitle: 'Air fryer or conventional oven? We compared both to help you choose.',
    intro: 'The air fryer and the traditional oven are both kitchen essentials. But which one fits the way you cook? We compared the two technologies across 7 key criteria to help you make the right call.',
    intro_long: 'In 2026, with energy bills on everyone\'s mind and more people paying attention to their environmental footprint, choosing between an air fryer and a traditional oven is a bigger decision than it looks. The air fryer, once dismissed as a novelty gadget, has changed the way a lot of people make everyday meals. It uses up to 50% less energy than a conventional oven and can cut cooking times in half, which is why it has sparked so much debate in home kitchens. But can it really replace your oven? Is it a smart buy or just a passing trend? This guide covers every angle of the comparison, using concrete numbers and realistic scenarios to help you make the best decision for your household and your budget.',
    how_airfryer_works_title: 'How does an air fryer work?',
    how_airfryer_works: 'An air fryer relies on a technology often called Rapid Air, or high-speed convection. Unlike a deep fryer, which cooks food in oil, an air fryer heats air to very high temperatures (up to 425°F, or 220°C) and blows it around the food at high speed with a powerful fan mounted under the lid. That concentrated stream of hot air forms a crisp outer layer within minutes by speeding up the Maillard reaction. The heating element above the basket produces the heat, while the fan keeps the air circulating evenly. Thanks to this design, an air fryer draws only 800 to 1,800 watts and reaches cooking temperature in just 2 to 3 minutes. Food sits in a perforated basket that lets air flow freely over every surface, creating that crave-worthy “fried” texture without a single drop of added oil. Crumbs and drippings fall to the bottom of the unit, away from the basket, so they\'re easy to collect and cleanup is quick.',
    how_oven_works_title: 'How does a traditional oven work?',
    how_oven_works: 'A traditional electric or gas oven heats the air inside by radiation and conduction. An electric heating element (or a gas burner) at the bottom and/or top of the oven produces heat that gradually spreads through the cavity. It\'s a relatively slow process: most conventional ovens take 10 to 15 minutes to preheat to 400°F (200°C). Once preheated, radiant and conducted heat surrounds the food more gently and evenly than in an air fryer, which gives uniform cooking but not that fast, crispy exterior. Many modern ovens have a convection setting that adds a fan to move the air a little faster, improving evenness and cutting cooking times by 10 to 20%. Even in convection mode, though, total power draw stays high: 2,000 to 3,000 watts depending on the model. The large cavity (1.8 to 2.8 cu ft, or 50 to 80 L) takes a lot of energy to hold a steady temperature. On the plus side, an oven lets you cook several dishes at once, a real advantage for large families or more elaborate meals.',
    comparison_title: 'Side-by-side comparison across 7 criteria',
    rows: [
      {
        criteria: 'Preheat time',
        airfryer: '2–3 minutes',
        oven: '10–15 minutes',
      },
      {
        criteria: 'Energy use',
        airfryer: '800–1,800 W (30–50% savings)',
        oven: '2,000–3,000 W',
      },
      {
        criteria: 'Crispiness',
        airfryer: 'Excellent (concentrated airflow)',
        oven: 'Good (convection)',
      },
      {
        criteria: 'Maximum capacity',
        airfryer: '3.2–11 qt (1–8 people)',
        oven: '1.8–2.8 cu ft (no practical limit)',
      },
      {
        criteria: 'Ease of cleaning',
        airfryer: 'Very easy (removable basket)',
        oven: 'Hard (unless self-cleaning)',
      },
      {
        criteria: 'Versatility',
        airfryer: 'Fries, meat, vegetables, cakes',
        oven: 'Any type of dish',
      },
      {
        criteria: 'Typical price',
        airfryer: '$70–$400',
        oven: '$250–$2,300',
      },
    ],
    cooking_time_title: 'Cooking time: the air fryer wins on speed',
    cooking_time: 'The biggest difference between the two appliances is cooking time. A batch of frozen fries takes 15 minutes in an air fryer (preheat included), while a conventional oven needs 35 to 40 minutes. A whole chicken? 25 to 30 minutes in an air fryer versus 55 to 60 minutes in the oven. These numbers vary with the size and thickness of the food, but the pattern holds: on average, an air fryer cuts cooking time by 50 to 60%. That speed matters for busy families trying to get a complete meal on the table in under 30 minutes. Because an air fryer preheats in 2 to 3 minutes, you can start cooking almost as soon as you switch it on, instead of waiting 10 to 15 minutes for the oven. For pasta, rice or slow-simmered dishes, the gap narrows, since ovens handle long, slow cooking better.',
    energy_consumption_title: 'Energy use: real savings',
    energy_consumption: 'Energy use is a deciding factor for many households watching their electric bills. An air fryer typically draws 800 to 1,800 watts, while a conventional electric oven runs at 2,000 to 3,000 watts. With 30 minutes of daily use (roughly one oven session\'s worth of cooking), an air fryer uses 0.4 to 0.9 kWh a day, or 146 to 329 kWh a year. An oven used 50 minutes a day uses 1.67 to 2.5 kWh a day, or 610 to 912 kWh a year. At the US average residential rate of 18.16 cents per kWh (EIA, August 2026; check the rate on your utility bill, since it varies widely by state and utility), that works out to roughly $85 to $140 a year in savings if you replace your oven entirely with an air fryer. The math looks even better if you already own an oven and use the air fryer alongside it: you save the most on quick, everyday cooking. Most recent air fryers also have smart temperature control that cuts power use in keep-warm mode.',
    cooking_quality_title: 'Cooking quality: two different approaches',
    cooking_quality: 'The two technologies cook in fundamentally different ways. The air fryer excels at crisp, golden textures, thanks to a concentrated stream of very hot air that speeds up browning. Fries, nuggets, chicken wings, breaded shrimp: they all come out remarkably crisp outside and tender inside, with results often compared to deep-fried food without the extra calories from oil. The traditional oven, especially in convection mode, cooks more evenly but browns less aggressively. Surfaces don\'t caramelize as fast, though large cuts often cook more evenly all the way through. For pizza or focaccia, the oven gives a better crust with a more measured crispness. Beef and lamb roasts develop a beautiful golden crust in the oven, though usually a less intense one than in an air fryer. For baking, the oven is still unbeatable: cakes, breads and pastries need steadier, more gradual heat than an air fryer can reliably deliver. Cakes baked in an air fryer risk a dry crust and an underdone center.',
    capacity_title: 'Capacity and versatility: what each does best',
    capacity: 'A typical air fryer holds about 3 to 11 quarts (3 to 10 liters), enough for 1 to 8 people depending on the dish. In one batch you can cook 4 to 5 servings of fries, 2 to 3 chicken breasts or about 20 to 30 broccoli florets. For a family of 4 or 5, that\'s often enough for a complete meal. Ovens offer 1.8 to 2.8 cubic feet (50 to 80 liters), sometimes more in larger models, so you can cook several different dishes at once: a roast, roasted vegetables and a gratin on three separate racks. That capacity is hard to replace for family dinners or entertaining. As for versatility, the air fryer handles a lot: fries, poultry and red meat, fish, seafood, vegetables, even simple desserts (brownies, a fruit crisp). Some dishes still resist it: artisan pizza, homemade bread, an apple tarte tatin or a baked pasta dish. For those, the oven remains essential. A popular compromise: own both, use the air fryer for quick everyday meals (50 to 60% of days) and save the oven for when you have more time or more guests.',
    cleaning_title: 'Ease of cleaning: a clear win for the air fryer',
    cleaning: 'Cleaning is one of the biggest frustrations for oven owners. Splatters, spills and baked-on grease building up on the walls all call for regular, tedious scrubbing. Ovens without a self-cleaning cycle have to be scrubbed by hand with harsh cleaners, while self-cleaning models (which cost more) burn off residue at about 930°F (500°C), putting out unwanted heat and using extra energy. An air fryer, on the other hand, takes just 2 to 3 minutes to clean after cooking. The basket and drip tray come out and wash easily in the dishwasher or in hot, soapy water. Grease doesn\'t splatter the inside walls because it drips into the tray below. No harsh chemicals needed. That ease of cleaning is a real plus for busy families and anyone who\'d rather spend less time on chores.',
    noise_title: 'Noise and odors: very different experiences',
    noise: 'With its powerful fan, an air fryer produces a distinctive 75 to 85 decibels while it cooks, comparable to a running dishwasher. Some people find that noise annoying, especially in an open-concept kitchen. A traditional oven is practically silent, apart from opening the door or the internal cooling fan kicking on. As for odors, an air fryer concentrates cooking vapors in a small space, so smells, good or bad, spread more intensely. Cooking fish or cabbage in an air fryer quickly fills the kitchen with a distinctive smell. An oven, with its larger cavity and more diffuse venting, dilutes those odors. Good ventilation (a range hood) is a smart idea with either appliance.',
    cost_title: 'Purchase price and durability: the financial picture',
    cost: 'Air fryers range from about $70 for basic entry-level models to $400 for premium machines with advanced features (touchscreen, multiple tiers, smartphone apps). Most reliable, well-designed models fall between $100 and $250. A conventional electric oven costs $250 to $600 for a standard model, and much more for a built-in or high-end one. As for durability, an air fryer typically lasts 5 to 8 years before the heating element or fan wears out. Ovens have a reputation for lasting longer (8 to 15 years) but need more upkeep. The air fryer\'s low upfront cost, combined with long-term energy savings (roughly $85 to $140 a year at the US average residential rate of 18.16 cents per kWh, EIA, August 2026), makes for an attractive return on investment, especially for smaller households.',
    when_choose_airfryer_title: 'When to choose an air fryer',
    when_choose_airfryer: 'An air fryer is the ideal choice if you live alone or as a couple (1 or 2 people), work full-time and have little time to cook in the evening, or are actively trying to cut your energy use and carbon footprint. It\'s also a great fit if you follow a restrictive diet (keto, gluten-free, low-calorie), since oil-free “fried” foods suit those needs well. Health-conscious cooks especially appreciate skipping the cooking oil, which cuts calories. And if you live in an apartment with limited space, an air fryer takes up far less room than even a compact oven.',
    when_keep_oven_title: 'When to keep your oven',
    when_keep_oven: 'Keep your oven if you have a large family (5+ people), love to bake, entertain often or make elaborate dishes with several components cooking at the same time. The oven is indispensable for homemade pizza, artisan bread, baked pasta, sweet or savory pies and tarts, and big roasts. If you meal-prep on Sundays for the week ahead, the oven lets you cook several dishes at once, something a single-basket air fryer can\'t do.',
    replace_oven_title: 'Can an air fryer replace your oven?',
    replace_oven: 'The honest answer: not completely, except for certain people. If you live alone, or you\'re a couple without kids who only cook simple, quick meals (grilled meats, fries, roasted vegetables), an air fryer alone can technically be enough. You\'ll give up baking, pizza and whole roasts, but you\'ll gain 50% energy savings and a lot of convenience. For families with children or serious home cooks, replacing the oven with an air fryer would be a mistake: you\'d limit your options too much. For most households, the best setup is to own both: use the air fryer 5 to 6 days a week for quick, energy-efficient cooking, and the oven 1 to 2 days a week for more elaborate or family meals. That combination gives you the best of both worlds: maximum energy savings, full flexibility in the kitchen and less stress at dinnertime.',
    verdict_title: 'The bottom line',
    verdict: 'An air fryer doesn\'t replace an oven, but it complements one perfectly. For quick everyday cooking (fries, chicken, roasted vegetables), the air fryer is unbeatable for speed and energy savings. The oven remains essential for big roasts, baking and cooking in large quantities. In 2026, with energy costs and household budgets on everyone\'s mind, the air fryer has become an almost essential upgrade for any household looking to modernize its kitchen.',
    choose_airfryer_title: 'Choose an air fryer if...',
    choose_airfryer: 'You often cook for 1 to 4 people, you want crispy results fast, you want to lower your energy bill, or you\'re short on time during the week.',
    choose_oven_title: 'Keep your oven if...',
    choose_oven: 'You regularly cook for 6 or more people, you bake (cakes, bread, pizza), you make whole roasts, or you need to cook several dishes at once.',
  },
  ca: {
    title: 'Air Fryer vs Oven: The Definitive Comparison 2026',
    subtitle: 'Air fryer or traditional oven? We compared both to help you choose.',
    intro: 'The air fryer and the traditional oven are two essential cooking appliances. But which one is best suited to your needs? We compared these two technologies across 7 key criteria to help you make the right choice.',
    intro_long: 'In 2026, with energy bills still climbing and more people thinking about their environmental footprint, the choice between an air fryer and a traditional oven matters more than ever. Once dismissed as a novelty gadget, the air fryer has earned a permanent spot on many kitchen counters and changed the way people cook everyday meals. It uses up to 50% less energy than a conventional oven and cuts cooking times in half, which is why it sparks so much debate. But can it really replace your oven? Is it a smart investment or just a passing trend? This guide covers every angle of the comparison, using concrete figures and real-life scenarios to help you make the right call for your household and your budget.',
    how_airfryer_works_title: 'How Does an Air Fryer Work?',
    how_airfryer_works: 'An air fryer uses Rapid Air technology, a form of high-speed convection. Unlike a deep fryer, which cooks food in oil, an air fryer heats air to very high temperatures, up to 220°C (425°F), and a powerful fan positioned beneath the lid drives it around the food at high speed. This concentrated flow of hot air speeds up the Maillard reaction and creates a crisp outer layer within minutes. The heating element above the basket produces the heat, while the fan keeps the air circulating evenly. Thanks to this system, an air fryer draws only 800 to 1,800 watts and reaches cooking temperature in just two to three minutes. Food sits in a perforated basket that lets air reach every surface, creating that coveted "fried" texture without a single drop of added oil. Crumbs and drippings fall to the bottom of the unit, away from the basket, so cleanup afterward is quick.',
    how_oven_works_title: 'How Does a Traditional Oven Work?',
    how_oven_works: 'A traditional electric or gas oven heats the air inside it through radiation and conduction. An electric element (or a gas burner) at the bottom and/or top of the oven produces heat that gradually spreads through the cavity. The process is fairly slow: most conventional ovens take 10 to 15 minutes to preheat to 200°C (400°F). Once hot, radiant and conducted heat surrounds the food more gently and evenly than in an air fryer, which gives uniform cooking but not that quick, crisp exterior. Many modern ovens have a convection setting that adds a fan to move the air a little faster, which improves evenness and cuts cooking times by 10 to 20%. Even in convection mode, though, power draw stays high: 2,000 to 3,000 watts depending on the model. The large cavity (50 to 80 litres) takes a lot of energy to hold a steady temperature. In return, an oven lets you cook several dishes at once — a real advantage for larger families or more elaborate meals.',
    comparison_title: 'Detailed comparison across 7 criteria',
    rows: [
      {
        criteria: 'Preheat time',
        airfryer: '2–3 minutes',
        oven: '10–15 minutes',
      },
      {
        criteria: 'Energy consumption',
        airfryer: '800–1,800 W (30–50% savings)',
        oven: '2,000–3,000 W',
      },
      {
        criteria: 'Crispy cooking quality',
        airfryer: 'Excellent (concentrated air)',
        oven: 'Good (convection)',
      },
      {
        criteria: 'Maximum capacity',
        airfryer: '3–10 L (1–8 people)',
        oven: '50–80 L (unlimited)',
      },
      {
        criteria: 'Ease of cleaning',
        airfryer: 'Very easy (removable basket)',
        oven: 'Difficult (unless self-cleaning)',
      },
      {
        criteria: 'Versatility',
        airfryer: 'Fries, meat, vegetables, cakes',
        oven: 'All types of dishes',
      },
      {
        criteria: 'Average price',
        airfryer: '$100–$600',
        oven: '$300–$3,000',
      },
    ],
    cooking_time_title: 'Cooking Time: The Air Fryer Wins on Speed',
    cooking_time: 'The biggest difference between the two appliances is cooking time. A portion of frozen fries takes about 15 minutes in an air fryer (preheating included), compared with 35 to 40 minutes in a conventional oven. A whole chicken? 25 to 30 minutes in an air fryer versus 55 to 60 minutes in the oven. Times vary with size and thickness, but the pattern holds: on average, an air fryer cuts cooking time by 50 to 60%. That matters for busy families who want a complete meal on the table in under 30 minutes. Because an air fryer preheats in two to three minutes, you can start cooking almost as soon as you switch it on, while an oven makes you wait 10 to 15 minutes. For pasta, rice or slow-simmered dishes, the gap is smaller, since ovens handle long, slow cooking better.',
    energy_consumption_title: 'Energy Consumption: Substantial Savings',
    energy_consumption: 'Energy use is a key factor for any household watching its electricity bill. An air fryer typically draws 800 to 1,800 watts, while a conventional electric oven runs at 2,000 to 3,000 watts. Used 30 minutes a day (roughly one air fryer batch), an air fryer uses 0.4 to 0.9 kWh a day, or 146 to 329 kWh a year. An oven used 50 minutes a day uses 1.67 to 2.5 kWh a day, or 610 to 912 kWh a year. Switching entirely from the oven to the air fryer saves roughly 460 to 580 kWh a year; multiply that by the rate per kWh on your electricity bill, which depends on your province and your utility. If you keep both appliances and use the air fryer alongside the oven, most of the savings come from quick everyday cooking. Most recent air fryers also have smart temperature control that cuts power use while keeping food warm.',
    cooking_quality_title: 'Cooking Quality: Two Different Approaches',
    cooking_quality: 'The two technologies take fundamentally different approaches. The air fryer excels at crisp, golden textures: its concentrated stream of very hot air speeds up caramelization. Fries, nuggets, chicken wings, jumbo shrimp: all come out very crisp outside and tender inside. The results come close to deep-fried food without the extra calories from oil. A traditional oven, especially in convection mode, cooks more evenly but browns less aggressively. Surfaces caramelize more slowly, though large pieces often cook more uniformly all the way through. For Neapolitan pizza or sourdough bread, the oven gives a better texture with a more measured crispness. Beef or lamb roasts develop a beautiful golden crust in the oven, though usually a less intense one than in an air fryer. For baking, the oven has no rival: cakes, breads and pastries need steadier, more gradual heat than an air fryer can reliably deliver. A sponge cake baked in an air fryer risks a dry crust and an undercooked centre.',
    capacity_title: 'Capacity and Versatility: What Each Does Best',
    capacity: 'A typical air fryer holds 3 to 10 litres (3.2 to 10.6 qt), enough for one to eight people depending on the dish. In one batch you can cook four or five servings of fries, two or three chicken breasts or roughly 20 to 30 broccoli florets. For a family of four or five, that\'s often enough for a full meal. Ovens offer 50 to 80 litres (sometimes more on larger models), so you can cook several dishes at once: a roast, roasted vegetables and a gratin on three separate racks. That capacity is hard to replace for family meals or when you entertain. As for versatility, the air fryer handles a lot: fries, white or red meat, fish, seafood, vegetables, even simple desserts (brownies, fruit crisps). Some dishes are beyond it: artisan pizza, homemade bread, tarte Tatin or baked pasta. The oven is still the right tool for those. A popular compromise is to own both: use the air fryer five or six days a week for quick, economical cooking, and the oven one or two days a week for more elaborate or family meals.',
    cleaning_title: 'Ease of Cleaning: Clear Air Fryer Victory',
    cleaning: 'Cleaning is one of the biggest frustrations for oven owners. Splatters, spills and baked-on grease build up on the walls, and all of it needs regular, tedious scrubbing. Ovens without a self-cleaning cycle have to be scrubbed by hand with harsh cleaners, while self-cleaning models (which cost more) burn off residue at around 500°C (930°F), giving off extra heat and using more energy. An air fryer, by contrast, needs just two or three minutes of cleanup after cooking. The basket and drip tray come out and wash easily in the dishwasher or in hot, soapy water. Grease doesn\'t splatter the inside walls, because it drains into the tray. No harsh chemicals needed. This easy cleanup is especially valuable for busy families or anyone who\'d rather spend less time on chores.',
    noise_title: 'Noise and Odours: Very Different Usage Conditions',
    noise: 'With its powerful fan, an air fryer produces a distinctive 75 to 85 decibels while cooking, comparable to a running dishwasher. Some people find it annoying, especially in an open-concept kitchen. A traditional oven is practically silent, apart from when you open the door or its internal fan kicks in. As for odours, an air fryer concentrates cooking vapours in a small space, so smells — good or bad — spread more strongly. Cooking fish or cabbage in an air fryer quickly fills the room with distinctive smells. An oven, with its larger cavity and more diffuse venting, dilutes those odours. A good range hood is recommended with either appliance.',
    cost_title: 'Purchase Price and Durability: Financial Considerations',
    cost: 'Air fryer prices range from about $100 for basic entry-level models to $600 for premium models with advanced features (touch screen, multiple levels, smartphone apps). Most reliable, well-built models cost $150 to $300. A conventional electric oven costs $300 to $800 for a standard model, and a lot more for a wall oven or a premium range. In terms of durability, an air fryer typically lasts five to eight years before the heating element or fan wears out. Ovens last longer (8 to 15 years) but need more maintenance. The air fryer\'s low upfront cost, combined with long-term energy savings (several hundred kWh a year), gives it an attractive return on investment (ROI), especially for small households.',
    when_choose_airfryer_title: 'When to Choose an Air Fryer',
    when_choose_airfryer: 'An air fryer is ideal if you live alone or as a couple, work full time with little time to cook in the evening, or want to cut your energy use and carbon footprint. It\'s also a good fit if you follow a specific diet (keto, gluten-free, calorie-conscious), since oil-free "fried" food suits those needs well. Health-conscious cooks especially appreciate skipping the cooking oil and the calories that come with it. Finally, if you live in a small apartment, an air fryer takes up far less room than even a compact oven.',
    when_keep_oven_title: 'When to Keep Your Oven',
    when_keep_oven: 'Keep your oven if you have a larger family (five or more people), love baking, entertain often or make elaborate dishes with several cooking stages at once. The oven is indispensable for homemade pizza, artisan bread, baked pasta, sweet or savoury tarts and big roasts. If you batch-cook on Sundays to prepare the week\'s meals, the oven lets you cook several dishes at once, which a single-basket air fryer can\'t do.',
    replace_oven_title: 'Can You Replace Your Oven With an Air Fryer?',
    replace_oven: 'The honest answer: not completely, except for certain profiles. If you live alone or as a couple without children and only cook simple, quick meals (grilled meat, fries, roasted vegetables), an air fryer alone can technically do the job. You\'ll lose the ability to bake, make pizza or cook whole roasts, but you\'ll gain 50% energy savings and a lot of convenience. For families with children or avid home cooks, replacing the oven with an air fryer would be a mistake: you\'d limit your options too much. For most households, the best setup is to own both: use the air fryer five or six days a week for quick, economical cooking, and the oven one or two days a week for more elaborate or family meals. This combination gives you the best of both worlds: maximum energy savings, full flexibility in the kitchen and less stress at dinnertime.',
    verdict_title: 'Our Final Verdict',
    verdict: 'An air fryer doesn\'t replace an oven, but it complements one perfectly. For quick everyday cooking (fries, chicken, roasted vegetables), the air fryer is hard to beat for speed and energy savings. The oven remains essential for large roasts, baking and cooking in quantity. In 2026, with energy costs on everyone\'s mind, an air fryer has become close to a must-have for any household looking to modernize its kitchen.',
    choose_airfryer_title: 'Choose an air fryer if...',
    choose_airfryer: 'You often cook for one to four people, want quick, crispy results, want to save on your energy bill or are short on time during the week.',
    choose_oven_title: 'Keep your oven if...',
    choose_oven: 'You regularly cook for six or more people, bake (cakes, bread, pizza), make whole roasts or need to cook several dishes at once.',
  },
}

const metaTitles: Record<string, string> = {
  fr: 'Airfryer vs Four : Quel est le Meilleur Choix ? | Home Nura',
  en: 'Air Fryer vs Oven: Which Is Cheaper to Run? (2026)',
  de: 'Airfryer oder Backofen: Was lohnt sich 2026? | Home Nura',
  es: 'Freidora de aire o horno: ¿cuál te conviene? | Home Nura',
  it: 'Friggitrice ad aria o forno: quale conviene? | Home Nura',
  nl: 'Airfryer of oven: wat is zuiniger en wat kies je?',
  pl: 'Frytkownica beztłuszczowa czy piekarnik? | Home Nura',
  sv: 'Airfryer eller ugn: vilken är bäst? | Home Nura',
  us: 'Air Fryer vs. Oven: Which Is Better? | Home Nura',
  ca: 'Air Fryer vs Oven: Which is Better? | Home Nura',
}


export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  const title = metaTitles[safeLang] || metaTitles.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/guides/airfryer-vs-four',
    title,
    description: c.subtitle,
    type: 'article',
  })
}

export default async function AirfryerVsFour({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const c = pageContent[lang] || pageContent.fr
  const products = getStaticProducts(lang)
  // Editorial chapter list for the post-table deep dive
  const chapters = [
    { title: c.cooking_time_title, body: c.cooking_time },
    { title: c.energy_consumption_title, body: c.energy_consumption },
    { title: c.cooking_quality_title, body: c.cooking_quality },
    { title: c.capacity_title, body: c.capacity },
    { title: c.cleaning_title, body: c.cleaning },
    { title: c.noise_title, body: c.noise },
    { title: c.cost_title, body: c.cost },
    { title: c.when_choose_airfryer_title, body: c.when_choose_airfryer },
    { title: c.when_keep_oven_title, body: c.when_keep_oven },
    { title: c.replace_oven_title, body: c.replace_oven },
  ]
  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.breadcrumb_home, item: `https://homenura.com/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Airfryer vs Four', item: `https://homenura.com/${lang}/guides/airfryer-vs-four` },
    ],
  }

  // Long-form comparison article — emit Article schema so Google can
  // parse it as editorial content (eligible for Top Stories / rich
  // article results, beyond what BreadcrumbList alone gives).
  // Published date is the site baseline; dateModified tracks
  // SITE_LAST_UPDATED_ISO for freshness signal.
  const articleSchema = buildArticleSchema({
    lang,
    path: '/guides/airfryer-vs-four',
    title: c.title,
    description: c.intro,
    image: '/og-image.png',
    imageAlt: c.title,
    datePublished: '2026-01-15',
    dateModified: SITE_LAST_UPDATED_ISO,
    articleType: 'Article',
    articleSection: lang === 'fr' ? 'Guides' : 'Guides',
  })

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-clip">
      <Navbar currentLang={lang} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main id="main">
      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-600 uppercase bg-brand-50 rounded-full">
            VS 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
            {c.title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>
      </section>

      {/* Intro sections */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <p className="text-slate-600 leading-relaxed text-lg mb-6">{c.intro}</p>
        <p className="text-slate-700 leading-relaxed text-base">{c.intro_long}</p>
      </section>

      {/* Product Showcase */}
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
                  location="article_inline"
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

      {/* ═══════════════════════════════════════════════════
          FEATURE N° 01 — How the airfryer works
      ═══════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24">
        <Kicker className="mb-6">N° 01 — Technologie</Kicker>
        <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
          {c.how_airfryer_works_title}
        </h2>
        <div className="h-[2px] w-16 bg-brand-600 mb-10"></div>
        <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85] [&::first-letter]:text-[5rem] [&::first-letter]:font-bold [&::first-letter]:text-brand-600 [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:leading-[0.85] [&::first-letter]:mt-2">
          {c.how_airfryer_works}
        </p>
      </section>

      {/* Hairline divider with centered ornament */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-600/70"></div>
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          FEATURE N° 02 — How the traditional oven works
      ═══════════════════════════════════════════════════ */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-20 md:pt-24 md:pb-24">
        <Kicker variant="amber" className="mb-6">N° 02 — Technologie</Kicker>
        <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
          {c.how_oven_works_title}
        </h2>
        <div className="h-[2px] w-16 bg-amber-600 mb-10"></div>
        <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85] [&::first-letter]:text-[5rem] [&::first-letter]:font-bold [&::first-letter]:text-amber-700 [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:leading-[0.85] [&::first-letter]:mt-2">
          {c.how_oven_works}
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURE N° 03 — Detailed comparison (table + chapters)
      ═══════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 md:pt-20">
        <div className="text-center mb-12">
          <Kicker variant="slate" className="mb-5">N° 03 — Dossier</Kicker>
          <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
            {c.comparison_title}
          </h2>
          <div className="h-[2px] w-16 bg-slate-900 mx-auto"></div>
        </div>

        {(() => {
          const criteriaLabel = lang === 'fr' ? 'Critère' : lang === 'de' ? 'Kriterium' : lang === 'es' ? 'Criterio' : lang === 'it' ? 'Criterio' : lang === 'nl' ? 'Criterium' : lang === 'pl' ? 'Kryterium' : lang === 'sv' ? 'Kriterium' : lang === 'us' ? 'Criterion' : lang === 'ca' ? 'Criteria' : 'Criteria'
          const ovenLabel = lang === 'fr' ? 'Four' : lang === 'de' ? 'Backofen' : lang === 'es' ? 'Horno' : lang === 'it' ? 'Forno' : lang === 'nl' ? 'Oven' : lang === 'pl' ? 'Piekarnik' : lang === 'sv' ? 'Ugn' : lang === 'us' ? 'Oven' : lang === 'ca' ? 'Oven' : 'Oven'
          return (
            <>
              {/* Mobile: stacked card layout for readability */}
              <div className="md:hidden space-y-4">
                {c.rows.map((row, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-black/[0.02] overflow-hidden"
                  >
                    <div className="px-5 pt-4 pb-3 bg-slate-50 border-b border-slate-100">
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600 mb-1">
                        {criteriaLabel}
                      </div>
                      <div className="text-base font-bold text-slate-900 leading-snug">
                        {row.criteria}
                      </div>
                    </div>
                    <div className="divide-y divide-slate-100">
                      <div className="px-5 py-4 bg-brand-50/40">
                        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-600 mb-1.5">
                          Airfryer
                        </div>
                        <div className="text-[15px] text-brand-900 leading-snug">
                          {row.airfryer}
                        </div>
                      </div>
                      <div className="px-5 py-4 bg-amber-50/40">
                        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-1.5">
                          {ovenLabel}
                        </div>
                        <div className="text-[15px] text-amber-900 leading-snug">
                          {row.oven}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: classic 3-column table */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-black/[0.02]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-600">{criteriaLabel}</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-600">Airfryer</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-amber-700">{ovenLabel}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.rows.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50">
                        <td className="px-6 py-4 text-sm font-semibold text-slate-700">{row.criteria}</td>
                        <td className="px-6 py-4 text-sm text-brand-700 bg-brand-50/30">{row.airfryer}</td>
                        <td className="px-6 py-4 text-sm text-amber-700 bg-amber-50/30">{row.oven}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )
        })()}
      </section>

      {/* Editorial chapters — magazine-style long read after the table */}
      <section className="max-w-3xl mx-auto px-6 pt-6 pb-20">
        <div className="divide-y divide-slate-200">
          {chapters.map((chapter, i) => (
            <article key={i} className="py-14 md:py-16 first:pt-10">
              <Kicker className="mb-4">{CHAPTER_LABEL[resolveLang(lang)]} · {roman[i]}</Kicker>
              <h3 className="text-2xl md:text-[1.875rem] font-bold tracking-tight leading-[1.2] text-slate-900 mb-5">
                {chapter.title}
              </h3>
              <div className="h-px w-10 bg-brand-600 mb-6"></div>
              <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85]">
                {chapter.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* All Recommended Products */}
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

      {/* Final Verdict — dark editorial panel */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-16 text-white shadow-2xl">
          <div className="absolute top-0 left-0 h-[3px] w-24 bg-brand-400"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl"></div>
          <div className="relative">
            <Kicker variant="blue-light" className="mb-6">
              {lang === 'fr' ? 'Verdict' : lang === 'de' ? 'Urteil' : lang === 'es' ? 'Veredicto' : lang === 'it' ? 'Verdetto' : lang === 'nl' ? 'Eindoordeel' : lang === 'pl' ? 'Werdykt' : lang === 'sv' ? 'Omdöme' : lang === 'us' ? 'Verdict' : lang === 'ca' ? 'Verdict' : 'Verdict'}
            </Kicker>
            <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] mb-6 max-w-2xl">{c.verdict_title}</h2>
            <div className="h-[2px] w-16 bg-brand-400 mb-8"></div>
            <p className="text-lg md:text-xl leading-[1.75] text-slate-200 max-w-2xl">{c.verdict}</p>
          </div>
        </div>
      </section>

      {/* Choose sections — editorial dual card */}
      <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative overflow-hidden bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400"></div>
            <Kicker className="mb-5">Profil · 01</Kicker>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-5 leading-snug">{c.choose_airfryer_title}</h3>
            <div className="h-px w-10 bg-brand-600 mb-6"></div>
            <p className="text-[15px] text-slate-600 leading-[1.8]">{c.choose_airfryer}</p>
          </div>
          <div className="relative overflow-hidden bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400"></div>
            <Kicker variant="amber" className="mb-5">Profil · 02</Kicker>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-5 leading-snug">{c.choose_oven_title}</h3>
            <div className="h-px w-10 bg-amber-600 mb-6"></div>
            <p className="text-[15px] text-slate-600 leading-[1.8]">{c.choose_oven}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20 md:pb-24 text-center">
        <Button href={`/${lang}/guides/airfryers`} variant="secondary" size="lg">
          <span className="tracking-wide">{dict.guide_title}</span>
          <span aria-hidden="true">&rarr;</span>
        </Button>
      </section>

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              href: `/${lang}/guides/airfryers`,
              num: '01',
              title: lang === 'fr' ? 'Guide complet des airfryers 2026' : lang === 'de' ? 'Kompletter Airfryer-Ratgeber 2026' : lang === 'es' ? 'Guía completa de freidoras 2026' : lang === 'it' ? 'Guida completa friggitrici 2026' : lang === 'nl' ? 'Complete airfryer-gids 2026' : lang === 'pl' ? 'Kompletny poradnik: frytkownice beztłuszczowe 2026' : lang === 'sv' ? 'Den stora airfryerguiden 2026' : lang === 'us' ? 'The Complete Air Fryer Guide (2026)' : lang === 'ca' ? 'Complete Air Fryer Guide 2026' : 'Complete Air Fryer Guide 2026',
              desc: lang === 'fr' ? 'Tous les critères pour bien choisir votre airfryer.' : lang === 'de' ? 'Alle Kriterien für die richtige Wahl.' : lang === 'es' ? 'Todos los criterios para elegir bien.' : lang === 'it' ? 'Tutti i criteri per scegliere bene.' : lang === 'nl' ? 'Alle criteria om goed te kiezen.' : lang === 'pl' ? 'Wszystkie kryteria, by dobrze wybrać frytkownicę beztłuszczową.' : lang === 'sv' ? 'Alla kriterier för att välja rätt airfryer.' : lang === 'us' ? 'Everything to check before you buy.' : lang === 'ca' ? 'All criteria to choose the right one.' : 'All criteria to choose the right one.',
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

      {/* FAQ */}
      <FaqSection faqs={dict.faq} title={dict.faq_title} />
      </main>

      {/* Footer */}
      <SiteFooter
        currentLang={lang}
      />

      <CookieBanner lang={lang} dict={{ cookie_banner_text: dict.cookie_banner_text, cookie_accept: dict.cookie_accept, cookie_reject: dict.cookie_reject, cookie_learn_more: dict.cookie_learn_more }} />
    </div>
  )
}
