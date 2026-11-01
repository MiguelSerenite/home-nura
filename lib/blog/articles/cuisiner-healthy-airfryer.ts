import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'cuisiner-healthy-airfryer',
  category: 'guides',
  pillar: 'guides/airfryers',
  relatedSlugs: ['recettes-legumes-grilles-airfryer', 'recettes-poulet-croustillant-airfryer', 'airfryer-vs-friteuse-traditionnelle'],
  datePublished: '2026-03-05',
  dateModified: '2026-10-09',
  readingTime: 9,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1745846664210-756817e1b19c?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Airfryer noir posé sur un plan de travail en bois, à côté d’un bol de tomates',
        en: 'Black air fryer on a wooden kitchen worktop next to a bowl of tomatoes',
        de: 'Schwarze Heißluftfritteuse auf einer Holzarbeitsplatte neben einer Schale Tomaten',
        es: 'Freidora de aire negra sobre una encimera de madera junto a un cuenco de tomates',
        it: 'Friggitrice ad aria nera su un piano di lavoro in legno accanto a una ciotola di pomodori',
        nl: 'Zwarte airfryer op een houten aanrecht naast een schaal tomaten',
        pl: 'Czarna frytkownica beztłuszczowa na drewnianym blacie, obok miski z pomidorami',
        sv: 'Svart airfryer på en köksbänk i trä, bredvid en skål med tomater',
        us: 'Black air fryer on a wooden kitchen countertop next to a bowl of tomatoes',
        ca: 'Black air fryer on a wooden kitchen countertop next to a bowl of tomatoes',
      },
    },
  ],
  title: {
    fr: 'Cuisiner Healthy avec un Airfryer : Guide Nutrition et Bien-Être',
    en: 'Healthy Cooking with an Air Fryer: A Nutrition and Wellbeing Guide',
    de: 'Gesund kochen mit dem Airfryer: Wie gesund ist die Heißluftfritteuse?',
    es: 'Cocina sana con freidora de aire: guía de nutrición y bienestar',
    it: 'Cucinare sano con la friggitrice ad aria: guida a nutrizione e benessere',
    nl: 'Gezond koken met de airfryer: gids voor voeding en welzijn',
    pl: 'Zdrowa kuchnia z frytkownicą beztłuszczową: poradnik o odżywianiu i dobrym samopoczuciu',
    sv: 'Laga nyttig mat i airfryer: guide till kost och välmående',
    us: 'Healthy Cooking With an Air Fryer: A Nutrition and Wellness Guide',
    ca: 'Healthy Cooking with an Air Fryer: Nutrition and Wellness Guide',
  },
  excerpt: {
    fr: 'Ce que l\'airfryer change vraiment dans votre alimentation : moins d\'huile, acrylamide, nutriments, aliments à privilégier, idées de repas sains et limites à connaître.',
    en: 'What an air fryer really changes in your diet: less oil, acrylamide, nutrients, the best foods to cook, healthy meal ideas and the limits you should know about.',
    de: 'Was ein Airfryer an Ihrer Ernährung wirklich ändert: weniger Öl, Acrylamid, Nährstoffe, die besten Lebensmittel, Ideen für gesunde Gerichte und was die Heißluftfritteuse nicht kann.',
    es: 'Lo que cambia de verdad la freidora de aire en tu alimentación: menos aceite, acrilamida, nutrientes, alimentos que conviene priorizar, ideas de comidas sanas y límites que debes conocer.',
    it: 'Cosa cambia davvero la friggitrice ad aria nella tua alimentazione: meno olio, acrilammide, nutrienti, alimenti consigliati, idee per pasti sani e limiti da conoscere.',
    nl: 'Wat een airfryer echt verandert aan je eetpatroon: minder olie, acrylamide, voedingsstoffen, de beste ingrediënten, gezonde maaltijdideeën en de grenzen.',
    pl: 'Co frytkownica beztłuszczowa naprawdę zmienia w Twojej diecie: mniej oleju, akrylamid, składniki odżywcze, produkty, po które warto sięgać, pomysły na zdrowe posiłki i ograniczenia, które trzeba znać.',
    sv: 'Vad en airfryer faktiskt förändrar i din kost: mindre olja, akrylamid, näringsämnen, livsmedel som passar bäst, idéer till nyttiga måltider och begränsningarna du bör känna till.',
    us: 'What an air fryer really changes in your diet: less oil, acrylamide, nutrient retention, the best foods to cook, healthy meal ideas and the limits worth knowing.',
    ca: 'What an air fryer really changes in your diet: less oil, acrylamide, nutrients, the best foods to cook, healthy meal ideas and the limits worth knowing.',
  },
  content: {
    fr: `<h2>L'airfryer est-il vraiment plus sain ?</h2>
<p>Oui, par rapport à la friture dans un bain d'huile, l'airfryer permet de cuisiner avec beaucoup moins de matières grasses, car une cuillère d'huile (voire un simple spray) remplace plusieurs centaines de millilitres. En revanche, il ne rend pas sain un aliment qui ne l'est pas : le bénéfice dépend surtout de ce que vous mettez dans le panier.</p>
<p>Ce guide fait le point sur ce que l'on sait réellement, à partir de la littérature scientifique publiée et des recommandations des autorités sanitaires, puis propose des aliments, des astuces et des idées de repas pour en tirer le meilleur parti. Il ne remplace pas l'avis d'un médecin ou d'un diététicien si vous suivez un régime particulier.</p>

<h3>Moins d'huile : d'où vient la différence</h3>
<p>Dans une friteuse classique, l'aliment est immergé et absorbe une partie de l'huile pendant la cuisson. Dans un airfryer, c'est de l'air très chaud brassé par un ventilateur qui saisit la surface. Pour des frites maison, une cuillère à café d'huile suffit généralement à obtenir une surface dorée. À titre de repère, une cuillère à soupe d'huile apporte environ 120 kcal : c'est la quantité d'huile ajoutée qui fait la différence, bien plus que l'appareil lui-même.</p>
<p><strong>Attention aux produits surgelés pré-frits :</strong> frites, nuggets ou beignets industriels ont souvent déjà été frits avant congélation. Les passer à l'airfryer évite d'ajouter de l'huile, mais leur teneur en matières grasses reste celle indiquée sur l'emballage. Lisez l'étiquette nutritionnelle.</p>

<h3>Comparaison des modes de cuisson</h3>
<table>
<thead>
<tr><th>Mode de cuisson</th><th>Huile ajoutée</th><th>Texture obtenue</th><th>À savoir</th></tr>
</thead>
<tbody>
<tr><td>Airfryer</td><td>Très faible (spray ou 1 c. à café)</td><td>Croustillant en surface</td><td>Cuisson rapide, panier à ne pas surcharger</td></tr>
<tr><td>Friteuse à bain d'huile</td><td>Bain complet</td><td>Très croustillant</td><td>L'aliment absorbe une partie de l'huile</td></tr>
<tr><td>Four traditionnel</td><td>Faible à modérée</td><td>Doré, parfois moins croustillant</td><td>Préchauffage plus long, grande capacité</td></tr>
<tr><td>Poêle</td><td>Modérée</td><td>Saisi, doré</td><td>Demande de la surveillance</td></tr>
<tr><td>Vapeur</td><td>Aucune</td><td>Tendre, sans croûte</td><td>Pas de contact direct avec l'eau de cuisson</td></tr>
</tbody>
</table>
<p>Pour une analyse plus complète, consultez notre <a href="/fr/blog/airfryer-vs-friteuse-traditionnelle">comparatif airfryer vs friteuse traditionnelle</a>.</p>

<h2>L'acrylamide : réduit dans certaines études, pas éliminé</h2>
<p>L'acrylamide se forme lors de la cuisson à haute température des aliments riches en amidon (pommes de terre, pain, céréales). L'Autorité européenne de sécurité des aliments (EFSA) a conclu en 2015 qu'il pourrait augmenter le risque de cancer et recommande d'en limiter l'exposition ; l'Union européenne encadre d'ailleurs sa réduction dans l'industrie alimentaire.</p>
<p>Une étude publiée en 2015 dans le <em>Journal of Food Science</em> (Sansano et al.) a mesuré, à 180 °C, environ 90 % d'acrylamide en moins sur des frites cuites à l'air chaud que sur des frites plongées dans l'huile. D'autres travaux, rassemblés dans une revue scientifique de 2024, montrent toutefois des résultats variables selon la température, la durée et la préparation des pommes de terre. Mieux vaut donc appliquer les bons gestes plutôt que compter sur l'appareil seul.</p>

<h3>Comment limiter l'acrylamide à l'airfryer</h3>
<ul>
<li><strong>Visez une couleur jaune doré :</strong> c'est le conseil diffusé par les autorités sanitaires européennes. Plus les frites brunissent, plus elles contiennent d'acrylamide.</li>
<li><strong>Restez autour de 170-180 °C pour les pommes de terre</strong> et évitez de prolonger la cuisson « pour plus de croustillant ».</li>
<li><strong>Faites tremper les frites crues</strong> 15 à 30 minutes dans l'eau froide, puis séchez-les bien : le trempage réduit les sucres de surface.</li>
<li><strong>Suivez les instructions de l'emballage</strong> pour les produits surgelés, sans les dépasser.</li>
</ul>

<h2>Préservation des nutriments : ce que l'on peut dire</h2>
<p>La teneur en vitamines après cuisson dépend de trois facteurs : la température, la durée et le contact avec l'eau. Les vitamines hydrosolubles (vitamine C, vitamines du groupe B) passent en partie dans l'eau de cuisson lorsqu'on fait bouillir des légumes. L'airfryer, comme le four ou la vapeur, évite ce contact, et sa cuisson souvent plus courte que celle d'un four classique limite l'exposition à la chaleur.</p>
<p>Les résultats varient néanmoins beaucoup d'un aliment à l'autre, et aucune méthode n'est la meilleure pour tous les nutriments. Retenez surtout qu'il vaut mieux cuire les légumes juste à point plutôt que de les dessécher, et varier les modes de cuisson.</p>

<h2>Les meilleurs aliments pour cuisiner sain à l'airfryer</h2>

<h3>1. Les légumes : croquants et savoureux</h3>
<p>La chaleur sèche caramélise la surface des légumes et concentre leurs saveurs tout en gardant le cœur tendre. Découvrez nos <a href="/fr/blog/recettes-legumes-grilles-airfryer">recettes de légumes grillés à l'airfryer</a>.</p>
<ul>
<li><strong>Brocoli :</strong> 180 °C, 10-12 min, avec une cuillère à café d'huile.</li>
<li><strong>Courgettes :</strong> 200 °C, 8-10 min en rondelles.</li>
<li><strong>Chou-fleur :</strong> 190 °C, 15-18 min. Les fleurettes deviennent dorées et croquantes.</li>
<li><strong>Patate douce :</strong> 190 °C, 15-20 min en frites. Elle apporte du bêta-carotène.</li>
<li><strong>Champignons :</strong> 190 °C, 10-12 min. Juteux et riches en saveur umami.</li>
</ul>

<h3>2. Les protéines maigres : croustillant sans panure épaisse</h3>
<p>L'airfryer forme une croûte sans avoir besoin d'une couche épaisse de panure. Consultez nos <a href="/fr/blog/recettes-poulet-croustillant-airfryer">recettes de poulet croustillant</a>.</p>
<ul>
<li><strong>Filet de poulet :</strong> 180 °C, 18-22 min selon l'épaisseur. Vérifiez que le cœur est bien cuit.</li>
<li><strong>Saumon :</strong> 200 °C, 8-10 min. Un poisson gras, source d'oméga-3.</li>
<li><strong>Tofu :</strong> 190 °C, 15-18 min, bien égoutté. Idéal pour les repas végétariens.</li>
<li><strong>Crevettes :</strong> 200 °C, 6-8 min. Une cuisson très rapide.</li>
</ul>

<h3>3. Les légumineuses et céréales</h3>
<ul>
<li><strong>Pois chiches grillés :</strong> 190 °C, 15-20 min, bien séchés. Un en-cas croquant riche en fibres.</li>
<li><strong>Falafels :</strong> 180 °C, 12-15 min, légèrement huilés. Moelleux à l'intérieur sans friture.</li>
<li><strong>Galettes de quinoa :</strong> 180 °C, 10-12 min. Croustillantes et rassasiantes.</li>
</ul>

<h2>Idées de repas sains à l'airfryer pour la semaine</h2>
<ul>
<li><strong>Lundi :</strong> filets de poulet marinés au citron et aux herbes, brocoli à l'ail.</li>
<li><strong>Mardi :</strong> pavé de saumon, frites de patate douce.</li>
<li><strong>Mercredi :</strong> bowl de tofu croustillant, légumes grillés variés et riz complet.</li>
<li><strong>Jeudi :</strong> crevettes à l'ail, courgettes grillées.</li>
<li><strong>Vendredi :</strong> falafels maison, poivrons et oignons grillés, pain pita complet.</li>
<li><strong>Samedi :</strong> poulet pané aux flocons d'avoine, champignons grillés.</li>
<li><strong>Dimanche :</strong> légumes racines rôtis, œufs cocotte (160 °C, 8 min environ).</li>
</ul>
<p>Pour organiser ces repas à l'avance, voyez aussi notre <a href="/fr/blog/meal-prep-airfryer-semaine">meal prep à l'airfryer pour la semaine</a>.</p>

<h2>5 astuces pour cuisiner plus sain à l'airfryer</h2>
<ul>
<li><strong>1. Dosez l'huile au spray :</strong> quelques pulvérisations suffisent pour la plupart des recettes, bien moins qu'une cuillère à soupe versée à vue d'œil.</li>
<li><strong>2. Choisissez une huile adaptée à la chaleur :</strong> les huiles raffinées supportent mieux les hautes températures. Évitez de laisser l'huile fumer.</li>
<li><strong>3. Allégez la panure :</strong> flocons d'avoine mixés, graines de sésame, noix concassées ou un peu de parmesan donnent du croustillant.</li>
<li><strong>4. Misez sur des marinades sans sucre ajouté :</strong> citron, herbes, ail, gingembre et épices apportent du goût. Les marinades sucrées brûlent aussi plus vite.</li>
<li><strong>5. Ne surchargez pas le panier :</strong> remplissez-le aux deux tiers au maximum et secouez à mi-cuisson pour une cuisson homogène.</li>
</ul>

<h2>Ce que l'airfryer ne fait pas</h2>
<p>L'airfryer ne transforme pas un beignet en aliment santé. Il permet de réduire l'huile ajoutée, ce qui peut aider à alléger certains plats, mais l'équilibre global de l'alimentation (quantités, variété, fruits et légumes, produits peu transformés) compte bien davantage que l'appareil de cuisson. Si vous avez un objectif de santé précis (poids, cholestérol, diabète), demandez conseil à un professionnel de santé plutôt que de vous fier à un appareil.</p>

<h2>5 recettes healthy faciles à l'airfryer</h2>
<ul>
<li><strong>Frites de courgettes au parmesan :</strong> bâtonnets de courgette enrobés d'une fine couche de chapelure et de parmesan. 180 °C, 12-14 minutes.</li>
<li><strong>Pois chiches croustillants aux épices :</strong> pois chiches égouttés et séchés, 1 cuillère à café d'huile, cumin, paprika fumé. 200 °C, 15 minutes en secouant.</li>
<li><strong>Saumon en croûte d'herbes :</strong> pavé de saumon, chapelure et herbes fraîches. 190 °C, 10-12 minutes.</li>
<li><strong>Chips d'aubergine :</strong> tranches fines, un spray d'huile, sel et thym. 180 °C, 10 minutes environ, en surveillant la coloration.</li>
<li><strong>Poulet tikka :</strong> blancs de poulet marinés au yaourt et aux épices. 190 °C, 18 minutes environ.</li>
</ul>

<h2>Conclusion : un outil pratique, pas une solution miracle</h2>
<p>Utilisé avec des ingrédients frais et peu d'huile, l'airfryer facilite une cuisine plus légère au quotidien, surtout si vous remplacez la friture dans un bain d'huile. Ses avantages sont réels mais dépendent des aliments choisis et de la façon de cuire : couleur dorée plutôt que brune, panier non surchargé, produits peu transformés.</p>
<p>Pour aller plus loin, explorez notre <a href="/fr/guides/airfryers">guide complet des airfryers</a> et notre <a href="/fr/guides/airfryer-vs-four">comparatif airfryer vs four traditionnel</a>.</p>`,

    en: `<h2>Is an air fryer really healthier?</h2>
<p>Yes, compared with deep frying, an air fryer lets you cook with far less fat, because a spoonful of oil (or just a spray) replaces several hundred millilitres. But it won't make unhealthy food healthy: the benefit depends mostly on what you put in the basket.</p>
<p>This guide sets out what is actually known, from published scientific research and the advice of health authorities, then suggests foods, tips and meal ideas to get the most out of your air fryer. It is no substitute for advice from a doctor or dietitian if you follow a special diet.</p>

<h3>Less oil: where the difference comes from</h3>
<p>In a deep fryer, food is submerged and absorbs some of the oil as it cooks. In an air fryer, very hot air circulated by a fan crisps the surface. For homemade chips, a teaspoon of oil is usually enough for a golden finish. For reference, one tablespoon of oil provides around 120 kcal: the amount of oil you add matters far more than the appliance itself.</p>
<p><strong>Watch out for pre-fried frozen foods:</strong> shop-bought chips, nuggets and fritters have often been fried before freezing. Air frying them avoids adding more oil, but their fat content stays as shown on the pack. Check the nutrition label.</p>

<h3>Cooking methods compared</h3>
<table>
<thead>
<tr><th>Cooking method</th><th>Added oil</th><th>Texture</th><th>Good to know</th></tr>
</thead>
<tbody>
<tr><td>Air fryer</td><td>Very little (spray or 1 tsp)</td><td>Crispy surface</td><td>Fast cooking, don't overfill the basket</td></tr>
<tr><td>Deep fryer</td><td>Full oil bath</td><td>Very crispy</td><td>Food absorbs some of the oil</td></tr>
<tr><td>Conventional oven</td><td>Low to moderate</td><td>Golden, sometimes less crispy</td><td>Longer preheating, large capacity</td></tr>
<tr><td>Frying pan</td><td>Moderate</td><td>Seared, golden</td><td>Needs watching</td></tr>
<tr><td>Steaming</td><td>None</td><td>Tender, no crust</td><td>No direct contact with cooking water</td></tr>
</tbody>
</table>
<p>For a full breakdown, see our <a href="/en/blog/airfryer-vs-friteuse-traditionnelle">air fryer vs deep fryer comparison</a>.</p>

<h2>Acrylamide: lower in some studies, not eliminated</h2>
<p>Acrylamide forms when starchy foods (potatoes, bread, cereals) are cooked at high temperatures. In 2015 the European Food Safety Authority (EFSA) concluded that it potentially increases the risk of cancer and advised limiting exposure; EU rules also require the food industry to reduce it.</p>
<p>A 2015 study in the <em>Journal of Food Science</em> (Sansano et al.) measured around 90% less acrylamide in air-fried chips than in deep-fried ones at 180°C. Other research, gathered in a 2024 scientific review, shows variable results depending on temperature, time and how the potatoes are prepared. So it pays to follow good habits rather than rely on the appliance alone.</p>

<h3>How to limit acrylamide in an air fryer</h3>
<ul>
<li><strong>Aim for golden yellow:</strong> this is the advice given by European health authorities. The browner the chips, the more acrylamide they contain.</li>
<li><strong>Stay at around 170–180°C for potatoes</strong> and don't extend the cooking time “for extra crunch”.</li>
<li><strong>Soak raw chips</strong> in cold water for 15 to 30 minutes, then dry them well: soaking reduces surface sugars.</li>
<li><strong>Follow the pack instructions</strong> for frozen products and don't cook them for longer.</li>
</ul>

<h2>Nutrient retention: what we can say</h2>
<p>How many vitamins survive cooking depends on three factors: temperature, time and contact with water. Water-soluble vitamins (vitamin C, B vitamins) partly leach into the water when vegetables are boiled. An air fryer, like an oven or a steamer, avoids that contact, and its cooking time is often shorter than a conventional oven's, which limits heat exposure.</p>
<p>Results still vary a lot from one food to another, and no method is best for every nutrient. The main takeaway: cook vegetables until just done rather than drying them out, and vary your cooking methods.</p>

<h2>The best foods for healthy air frying</h2>

<h3>1. Vegetables: crisp and full of flavour</h3>
<p>Dry heat caramelises the surface of vegetables and concentrates their flavour while keeping the inside tender. See our <a href="/en/blog/recettes-legumes-grilles-airfryer">roasted vegetable recipes</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180°C, 10–12 min, with a teaspoon of oil.</li>
<li><strong>Courgettes:</strong> 200°C, 8–10 min, sliced into rounds.</li>
<li><strong>Cauliflower:</strong> 190°C, 15–18 min. The florets turn golden and crunchy.</li>
<li><strong>Sweet potato:</strong> 190°C, 15–20 min as chips. A source of beta-carotene.</li>
<li><strong>Mushrooms:</strong> 190°C, 10–12 min. Juicy and full of umami.</li>
</ul>

<h3>2. Lean proteins: crispy without heavy breading</h3>
<p>An air fryer gives you a crust without a thick coating of breadcrumbs. See our <a href="/en/blog/recettes-poulet-croustillant-airfryer">crispy chicken recipes</a>.</p>
<ul>
<li><strong>Chicken breast:</strong> 180°C, 18–22 min depending on thickness. Check it is cooked through.</li>
<li><strong>Salmon:</strong> 200°C, 8–10 min. An oily fish and a source of omega-3.</li>
<li><strong>Tofu:</strong> 190°C, 15–18 min, well pressed. Ideal for vegetarian meals.</li>
<li><strong>Prawns:</strong> 200°C, 6–8 min. Very quick to cook.</li>
</ul>

<h3>3. Pulses and grains</h3>
<ul>
<li><strong>Roasted chickpeas:</strong> 190°C, 15–20 min, well dried. A crunchy, fibre-rich snack.</li>
<li><strong>Falafel:</strong> 180°C, 12–15 min, lightly oiled. Soft inside without deep frying.</li>
<li><strong>Quinoa patties:</strong> 180°C, 10–12 min. Crispy and filling.</li>
</ul>

<h2>Healthy air fryer meal ideas for the week</h2>
<ul>
<li><strong>Monday:</strong> lemon and herb chicken, garlic broccoli.</li>
<li><strong>Tuesday:</strong> salmon fillet, sweet potato chips.</li>
<li><strong>Wednesday:</strong> crispy tofu bowl with mixed roasted vegetables and brown rice.</li>
<li><strong>Thursday:</strong> garlic prawns, grilled courgettes.</li>
<li><strong>Friday:</strong> homemade falafel, roasted peppers and onions, wholemeal pitta.</li>
<li><strong>Saturday:</strong> oat-crumbed chicken, roasted mushrooms.</li>
<li><strong>Sunday:</strong> roasted root vegetables, baked eggs (around 160°C, 8 min).</li>
</ul>
<p>To plan these meals ahead, see our <a href="/en/blog/meal-prep-airfryer-semaine">weekly air fryer meal prep guide</a>.</p>

<h2>5 tips for healthier air frying</h2>
<ul>
<li><strong>1. Use an oil sprayer:</strong> a few sprays are enough for most recipes, far less than a tablespoon poured by eye.</li>
<li><strong>2. Choose an oil suited to high heat:</strong> refined oils cope better with high temperatures. Don't let the oil smoke.</li>
<li><strong>3. Lighten the coating:</strong> blitzed oats, sesame seeds, crushed nuts or a little parmesan add crunch.</li>
<li><strong>4. Use marinades without added sugar:</strong> lemon, herbs, garlic, ginger and spices bring flavour. Sugary marinades also burn faster.</li>
<li><strong>5. Don't overload the basket:</strong> fill it no more than two-thirds full and shake it halfway through for even cooking.</li>
</ul>

<h2>What an air fryer doesn't do</h2>
<p>An air fryer won't turn a doughnut into health food. It reduces added oil, which can help lighten some dishes, but your overall diet (portions, variety, fruit and vegetables, minimally processed foods) matters far more than the cooking appliance. If you have a specific health goal (weight, cholesterol, diabetes), ask a health professional for advice rather than relying on a kitchen gadget.</p>

<h2>5 easy healthy air fryer recipes</h2>
<ul>
<li><strong>Parmesan courgette fries:</strong> courgette sticks coated in a thin layer of breadcrumbs and parmesan. 180°C, 12–14 minutes.</li>
<li><strong>Crispy spiced chickpeas:</strong> drained and dried chickpeas, 1 tsp oil, cumin, smoked paprika. 200°C, 15 minutes, shaking the basket.</li>
<li><strong>Herb-crusted salmon:</strong> salmon fillet, breadcrumbs and fresh herbs. 190°C, 10–12 minutes.</li>
<li><strong>Aubergine crisps:</strong> thin slices, one spray of oil, salt and thyme. 180°C, about 10 minutes, watching the colour.</li>
<li><strong>Chicken tikka:</strong> chicken breast marinated in yoghurt and spices. 190°C, about 18 minutes.</li>
</ul>

<h2>Conclusion: a handy tool, not a miracle cure</h2>
<p>Used with fresh ingredients and little oil, an air fryer makes lighter everyday cooking easier, especially if it replaces deep frying. Its benefits are real but depend on the food you choose and how you cook it: golden rather than brown, an uncrowded basket, minimally processed ingredients.</p>
<p>For more, see our <a href="/en/guides/airfryers">complete air fryer guide</a> and our <a href="/en/guides/airfryer-vs-four">air fryer vs oven comparison</a>.</p>`,

    de: `<h2>Ist ein Airfryer wirklich gesünder?</h2>
<p>Ja, im Vergleich zum Frittieren im Ölbad kommt die Heißluftfritteuse mit deutlich weniger Fett aus: Ein Löffel Öl oder schon ein paar Sprühstöße ersetzen mehrere hundert Milliliter Frittierfett. Ein ungesundes Lebensmittel macht sie allerdings nicht gesund. Der Vorteil hängt vor allem davon ab, was im Korb landet.</p>
<p>Dieser Ratgeber fasst zusammen, was tatsächlich gesichert ist. Er stützt sich auf veröffentlichte wissenschaftliche Studien und die Empfehlungen von Gesundheitsbehörden und zeigt dann, welche Lebensmittel sich eignen, mit Tipps und Ideen für Mahlzeiten, damit Sie das Beste aus dem Gerät herausholen. Wenn Sie eine spezielle Diät einhalten, ersetzt er nicht den Rat einer Ärztin, eines Arztes oder einer Ernährungsfachkraft.</p>

<h3>Weniger Öl: Woher der Unterschied kommt</h3>
<p>In der klassischen Fritteuse liegt das Lebensmittel im Öl und nimmt beim Garen einen Teil davon auf. In der Heißluftfritteuse sorgt sehr heiße, von einem Ventilator umgewälzte Luft für die Kruste. Damit selbst gemachte Pommes goldbraun werden, reicht meist ein Teelöffel Öl. Zur Orientierung: Ein Esslöffel Öl liefert rund 120 kcal. Entscheidend ist also die zugegebene Ölmenge, viel mehr als das Gerät selbst.</p>
<p><strong>Vorsicht bei vorfrittierter Tiefkühlware:</strong> Pommes, Nuggets oder panierte Snacks aus dem Tiefkühlregal sind oft schon vor dem Einfrieren frittiert worden. In der Heißluftfritteuse kommt zwar kein Öl hinzu, ihr Fettgehalt entspricht aber weiterhin den Angaben auf der Verpackung. Ein Blick auf die Nährwerttabelle lohnt sich.</p>

<h3>Garmethoden im Vergleich</h3>
<table>
<thead>
<tr><th>Garmethode</th><th>Zugegebenes Öl</th><th>Ergebnis</th><th>Gut zu wissen</th></tr>
</thead>
<tbody>
<tr><td>Airfryer</td><td>Sehr wenig (Spray oder 1 TL)</td><td>Knusprige Oberfläche</td><td>Gart schnell, Korb nicht überfüllen</td></tr>
<tr><td>Klassische Fritteuse</td><td>Volles Ölbad</td><td>Sehr knusprig</td><td>Das Lebensmittel nimmt einen Teil des Öls auf</td></tr>
<tr><td>Backofen</td><td>Wenig bis mäßig</td><td>Goldbraun, manchmal weniger knusprig</td><td>Längeres Vorheizen, großes Fassungsvermögen</td></tr>
<tr><td>Pfanne</td><td>Mäßig</td><td>Angebraten, goldbraun</td><td>Muss beaufsichtigt werden</td></tr>
<tr><td>Dampfgaren</td><td>Keines</td><td>Zart, ohne Kruste</td><td>Kein direkter Kontakt mit Kochwasser</td></tr>
</tbody>
</table>
<p>Mehr dazu in unserem <a href="/de/blog/airfryer-vs-friteuse-traditionnelle">Vergleich: Airfryer oder klassische Fritteuse</a>.</p>

<h2>Acrylamid: in manchen Studien weniger, aber nicht verschwunden</h2>
<p>Acrylamid entsteht, wenn stärkehaltige Lebensmittel (Kartoffeln, Brot, Getreide) stark erhitzt werden. Die Europäische Behörde für Lebensmittelsicherheit (EFSA) kam 2015 zu dem Schluss, dass es das Krebsrisiko erhöhen könnte, und empfiehlt, die Aufnahme zu begrenzen. Die EU regelt außerdem, wie die Lebensmittelindustrie den Acrylamidgehalt senken muss.</p>
<p>Eine 2015 im <em>Journal of Food Science</em> veröffentlichte Studie (Sansano et al.) maß bei 180 °C in heißluftgegarten Pommes rund 90 % weniger Acrylamid als in frittierten. Weitere Arbeiten, zusammengefasst in einer wissenschaftlichen Übersichtsarbeit von 2024, kommen je nach Temperatur, Garzeit und Vorbereitung der Kartoffeln jedoch zu unterschiedlichen Ergebnissen. Auf die richtigen Handgriffe kommt es daher mehr an als auf das Gerät allein.</p>

<h3>So entsteht weniger Acrylamid im Airfryer</h3>
<ul>
<li><strong>Vergolden statt verkohlen:</strong> Das empfehlen die europäischen Gesundheitsbehörden. Je dunkler die Pommes, desto mehr Acrylamid enthalten sie.</li>
<li><strong>Kartoffeln bei etwa 170 bis 180 °C garen</strong> und die Garzeit nicht „für extra Knusprigkeit“ verlängern.</li>
<li><strong>Rohe Pommes 15 bis 30 Minuten in kaltem Wasser wässern</strong> und gut abtrocknen: Das Wässern verringert den Zucker an der Oberfläche.</li>
<li><strong>Bei Tiefkühlprodukten die Packungsangaben einhalten</strong> und die Garzeit nicht überschreiten.</li>
</ul>

<h2>Nährstoffe: Was sich sicher sagen lässt</h2>
<p>Wie viele Vitamine nach dem Garen erhalten bleiben, hängt von drei Faktoren ab: Temperatur, Dauer und Kontakt mit Wasser. Wasserlösliche Vitamine (Vitamin C, B-Vitamine) gehen teilweise ins Kochwasser über, wenn Sie Gemüse kochen. Wie Backofen und Dampfgarer vermeidet die Heißluftfritteuse diesen Kontakt, und weil sie oft kürzer gart als ein klassischer Backofen, sind die Lebensmittel weniger lange der Hitze ausgesetzt.</p>
<p>Die Ergebnisse unterscheiden sich allerdings stark von Lebensmittel zu Lebensmittel, und keine Methode ist für alle Nährstoffe die beste. Wichtig ist vor allem: Gemüse auf den Punkt garen, statt es auszutrocknen, und die Garmethoden abwechseln.</p>

<h2>Die besten Lebensmittel für gesundes Kochen im Airfryer</h2>

<h3>1. Gemüse: knackig und aromatisch</h3>
<p>Trockene Hitze karamellisiert die Oberfläche und konzentriert das Aroma, während das Innere zart bleibt. Passende Rezepte finden Sie in unserem Beitrag <a href="/de/blog/recettes-legumes-grilles-airfryer">Grillgemüse aus dem Airfryer</a>.</p>
<ul>
<li><strong>Brokkoli:</strong> 180 °C, 10–12 Min., mit einem Teelöffel Öl.</li>
<li><strong>Zucchini:</strong> in Scheiben, 200 °C, 8–10 Min.</li>
<li><strong>Blumenkohl:</strong> 190 °C, 15–18 Min. Die Röschen werden goldbraun und knusprig.</li>
<li><strong>Süßkartoffel:</strong> als Pommes, 190 °C, 15–20 Min. Liefert Beta-Carotin.</li>
<li><strong>Pilze:</strong> 190 °C, 10–12 Min. Saftig und voller Umami.</li>
</ul>

<h3>2. Magere Eiweißquellen: knusprig ohne dicke Panade</h3>
<p>Im Airfryer bildet sich eine Kruste, auch ohne dicke Panade. Mehr dazu in unseren <a href="/de/blog/recettes-poulet-croustillant-airfryer">Rezepten für knuspriges Hähnchen</a>.</p>
<ul>
<li><strong>Hähnchenbrust:</strong> 180 °C, 18–22 Min. je nach Dicke. Prüfen Sie, ob sie innen durchgegart ist.</li>
<li><strong>Lachs:</strong> 200 °C, 8–10 Min. Ein fettreicher Fisch, der Omega-3-Fettsäuren liefert.</li>
<li><strong>Tofu:</strong> 190 °C, 15–18 Min., vorher gut ausgepresst. Ideal für vegetarische Gerichte.</li>
<li><strong>Garnelen:</strong> 200 °C, 6–8 Min. Sehr schnell gar.</li>
</ul>

<h3>3. Hülsenfrüchte und Getreide</h3>
<ul>
<li><strong>Geröstete Kichererbsen:</strong> 190 °C, 15–20 Min., vorher gut abgetrocknet. Ein knuspriger, ballaststoffreicher Snack.</li>
<li><strong>Falafel:</strong> 180 °C, 12–15 Min., leicht geölt. Innen saftig, ganz ohne Frittieren.</li>
<li><strong>Quinoa-Taler:</strong> 180 °C, 10–12 Min. Knusprig und sättigend.</li>
</ul>

<h2>Gesunde Airfryer-Gerichte für die ganze Woche</h2>
<ul>
<li><strong>Montag:</strong> Hähnchenbrustfilet in Zitronen-Kräuter-Marinade, Brokkoli mit Knoblauch.</li>
<li><strong>Dienstag:</strong> Lachsfilet, Süßkartoffel-Pommes.</li>
<li><strong>Mittwoch:</strong> Bowl mit knusprigem Tofu, gemischtem Ofengemüse und Naturreis.</li>
<li><strong>Donnerstag:</strong> Knoblauchgarnelen, gegrillte Zucchini.</li>
<li><strong>Freitag:</strong> Selbst gemachte Falafel, geröstete Paprika und Zwiebeln, Vollkorn-Pita.</li>
<li><strong>Samstag:</strong> Hähnchen in Haferflockenpanade, geröstete Pilze.</li>
<li><strong>Sonntag:</strong> Geröstetes Wurzelgemüse, Eier im Förmchen (etwa 160 °C, 8 Min.).</li>
</ul>
<p>Wie Sie diese Gerichte vorbereiten, zeigt unser Ratgeber <a href="/de/blog/meal-prep-airfryer-semaine">Meal Prep mit dem Airfryer</a>.</p>

<h2>5 Tipps für gesünderes Kochen mit der Heißluftfritteuse</h2>
<ul>
<li><strong>1. Öl mit dem Ölsprüher dosieren:</strong> Ein paar Sprühstöße reichen für die meisten Rezepte. Das ist viel weniger als ein Esslöffel, nach Augenmaß ausgegossen.</li>
<li><strong>2. Hitzebeständiges Öl wählen:</strong> Raffinierte Öle vertragen hohe Temperaturen besser. Lassen Sie das Öl nicht rauchen.</li>
<li><strong>3. Panade leichter machen:</strong> Gemahlene Haferflocken, Sesam, gehackte Nüsse oder etwas Parmesan sorgen für Knusprigkeit.</li>
<li><strong>4. Marinaden ohne zugesetzten Zucker:</strong> Zitrone, Kräuter, Knoblauch, Ingwer und Gewürze bringen Geschmack. Süße Marinaden verbrennen zudem schneller.</li>
<li><strong>5. Den Korb nicht überladen:</strong> höchstens zu zwei Dritteln füllen und nach der Hälfte der Zeit schütteln, damit alles gleichmäßig gart.</li>
</ul>

<h2>Was ein Airfryer nicht kann</h2>
<p>Auch im Airfryer wird aus einem Donut kein gesundes Essen. Die Heißluftfritteuse spart zugegebenes Öl und kann so manche Gerichte leichter machen. Viel wichtiger als das Küchengerät ist aber Ihre Ernährung insgesamt: Portionsgrößen, Abwechslung, Obst und Gemüse, wenig verarbeitete Lebensmittel. Wenn Sie ein konkretes Gesundheitsziel haben (Gewicht, Cholesterin, Diabetes), holen Sie sich besser ärztlichen oder ernährungsfachlichen Rat, statt sich auf ein Gerät zu verlassen.</p>

<h2>5 einfache, gesunde Airfryer-Rezepte</h2>
<ul>
<li><strong>Zucchini-Pommes mit Parmesan:</strong> Zucchinistifte, dünn mit Paniermehl und Parmesan ummantelt. 180 °C, 12–14 Minuten.</li>
<li><strong>Knusprige Gewürz-Kichererbsen:</strong> abgetropfte, trockengetupfte Kichererbsen, 1 TL Öl, Kreuzkümmel, geräuchertes Paprikapulver. 200 °C, 15 Minuten, zwischendurch schütteln.</li>
<li><strong>Lachs mit Kräuterkruste:</strong> Lachsfilet, Paniermehl und frische Kräuter. 190 °C, 10–12 Minuten.</li>
<li><strong>Auberginen-Chips:</strong> dünne Scheiben, ein Sprühstoß Öl, Salz und Thymian. 180 °C, etwa 10 Minuten, dabei die Bräunung im Blick behalten.</li>
<li><strong>Chicken Tikka:</strong> Hähnchenbrust in einer Marinade aus Joghurt und Gewürzen. 190 °C, etwa 18 Minuten.</li>
</ul>

<h2>Fazit: ein praktisches Küchengerät, kein Wundermittel</h2>
<p>Mit frischen Zutaten und wenig Öl hilft Ihnen die Heißluftfritteuse, im Alltag fettärmer zu kochen, vor allem wenn sie bei Ihnen das Frittieren im Ölbad ersetzt. Die Vorteile sind real, hängen aber davon ab, was Sie zubereiten und wie: goldgelb statt dunkelbraun, ein nicht zu voller Korb, wenig verarbeitete Zutaten.</p>
<p>Mehr dazu in unserem <a href="/de/guides/airfryers">großen Airfryer-Ratgeber</a> und im <a href="/de/guides/airfryer-vs-four">Vergleich: Airfryer oder Backofen</a>.</p>`,

    es: `<h2>¿Es de verdad más sana la freidora de aire?</h2>
<p>Sí: frente a freír en abundante aceite, la freidora de aire permite cocinar con mucha menos grasa, porque una cucharada de aceite (o incluso unas pocas pulverizaciones) sustituye a varios cientos de mililitros. Eso sí, no convierte en sano un alimento que no lo es: la ventaja depende sobre todo de lo que metas en la cesta.</p>
<p>Esta guía resume lo que se sabe de verdad, a partir de los estudios científicos publicados y de las recomendaciones de las autoridades sanitarias, y después te propone alimentos, trucos e ideas de comidas para sacarle el máximo partido. No sustituye el consejo de un médico o de un dietista-nutricionista si sigues una dieta concreta.</p>

<h3>Menos aceite: de dónde sale la diferencia</h3>
<p>En una freidora clásica, el alimento queda sumergido y absorbe parte del aceite mientras se fríe. En una freidora de aire, lo que dora la superficie es el aire muy caliente que mueve un ventilador. Para unas patatas fritas caseras, suele bastar una cucharadita de aceite para que queden doradas. Como referencia, una cucharada sopera de aceite aporta unas 120 kcal: lo que marca la diferencia es la cantidad de aceite que añades, mucho más que el aparato en sí.</p>
<p><strong>Ojo con los congelados prefritos:</strong> las patatas, los nuggets o los rebozados industriales suelen venir fritos antes de congelarlos. Hacerlos en la freidora de aire evita añadir más aceite, pero la grasa que contienen sigue siendo la que indica el envase. Mira la etiqueta nutricional.</p>

<h3>Comparativa de métodos de cocción</h3>
<table>
<thead>
<tr><th>Método</th><th>Aceite añadido</th><th>Textura</th><th>Conviene saber</th></tr>
</thead>
<tbody>
<tr><td>Freidora de aire</td><td>Muy poco (spray o 1 cucharadita)</td><td>Crujiente por fuera</td><td>Cocción rápida; no llenes demasiado la cesta</td></tr>
<tr><td>Freidora de aceite</td><td>Inmersión completa</td><td>Muy crujiente</td><td>El alimento absorbe parte del aceite</td></tr>
<tr><td>Horno convencional</td><td>De poco a moderado</td><td>Dorado, a veces menos crujiente</td><td>Tarda más en precalentarse; mucha capacidad</td></tr>
<tr><td>Sartén</td><td>Moderado</td><td>Marcado, dorado</td><td>Hay que estar pendiente</td></tr>
<tr><td>Vapor</td><td>Ninguno</td><td>Tierno, sin costra</td><td>Sin contacto directo con el agua de cocción</td></tr>
</tbody>
</table>
<p>Si quieres un análisis más completo, consulta nuestra <a href="/es/blog/airfryer-vs-friteuse-traditionnelle">comparativa entre freidora de aire y freidora tradicional</a>.</p>

<h2>La acrilamida: se reduce en algunos estudios, pero no desaparece</h2>
<p>La acrilamida se forma cuando se cocinan a alta temperatura alimentos ricos en almidón (patatas, pan, cereales). La Autoridad Europea de Seguridad Alimentaria (EFSA) concluyó en 2015 que podría aumentar el riesgo de cáncer y recomienda limitar la exposición; además, la Unión Europea regula las medidas para reducirla en la industria alimentaria.</p>
<p>Un estudio publicado en 2015 en el <em>Journal of Food Science</em> (Sansano et al.) midió, a 180 °C, alrededor de un 90 % menos de acrilamida en patatas hechas con aire caliente que en patatas fritas en aceite. Otros trabajos, recogidos en una revisión científica de 2024, muestran sin embargo resultados variables según la temperatura, el tiempo y la preparación de las patatas. Así que más vale seguir unas pautas sencillas que confiarlo todo al aparato.</p>

<h3>Cómo limitar la acrilamida en la freidora de aire</h3>
<ul>
<li><strong>Busca un color dorado claro:</strong> es el consejo que dan las autoridades sanitarias europeas. Cuanto más se tuestan las patatas, más acrilamida tienen.</li>
<li><strong>Cocina las patatas a unos 170-180 °C</strong> y no alargues la cocción «para que queden más crujientes».</li>
<li><strong>Pon las patatas crudas en remojo</strong> de 15 a 30 minutos en agua fría y sécalas bien: el remojo reduce los azúcares de la superficie.</li>
<li><strong>Sigue las instrucciones del envase</strong> con los congelados, sin pasarte de tiempo ni de temperatura.</li>
</ul>

<h2>Conservación de los nutrientes: lo que sabemos</h2>
<p>La cantidad de vitaminas que queda tras la cocción depende de tres factores: la temperatura, el tiempo y el contacto con el agua. Las vitaminas hidrosolubles (la vitamina C y las del grupo B) pasan en parte al agua cuando se hierven las verduras. La freidora de aire, como el horno o el vapor, evita ese contacto, y su cocción, a menudo más corta que la de un horno convencional, limita la exposición al calor.</p>
<p>Aun así, los resultados varían mucho de un alimento a otro y ningún método es el mejor para todos los nutrientes. Lo importante: haz las verduras en su punto, sin resecarlas, y alterna los métodos de cocción.</p>

<h2>Los mejores alimentos para cocinar sano en la freidora de aire</h2>

<h3>1. Verduras: crujientes y sabrosas</h3>
<p>El calor seco carameliza la superficie de las verduras y concentra su sabor, mientras el interior se mantiene tierno. Echa un vistazo a nuestras <a href="/es/blog/recettes-legumes-grilles-airfryer">recetas de verduras asadas en freidora de aire</a>.</p>
<ul>
<li><strong>Brócoli:</strong> 180 °C, 10-12 min, con una cucharadita de aceite.</li>
<li><strong>Calabacín:</strong> 200 °C, 8-10 min, en rodajas.</li>
<li><strong>Coliflor:</strong> 190 °C, 15-18 min. Los ramilletes quedan dorados y crujientes.</li>
<li><strong>Boniato:</strong> 190 °C, 15-20 min, en bastones. Aporta betacaroteno.</li>
<li><strong>Champiñones:</strong> 190 °C, 10-12 min. Jugosos y con mucho sabor umami.</li>
</ul>

<h3>2. Proteínas magras: crujientes sin un rebozado grueso</h3>
<p>La freidora de aire forma una costra sin necesidad de una capa gruesa de rebozado. Mira nuestras <a href="/es/blog/recettes-poulet-croustillant-airfryer">recetas de pollo crujiente</a>.</p>
<ul>
<li><strong>Pechuga de pollo:</strong> 180 °C, 18-22 min según el grosor. Comprueba que esté bien hecha por dentro.</li>
<li><strong>Salmón:</strong> 200 °C, 8-10 min. Un pescado azul, fuente de omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15-18 min, bien escurrido. Ideal para comidas vegetarianas.</li>
<li><strong>Gambas:</strong> 200 °C, 6-8 min. Se hacen en un momento.</li>
</ul>

<h3>3. Legumbres y cereales</h3>
<ul>
<li><strong>Garbanzos tostados:</strong> 190 °C, 15-20 min, bien secos. Un picoteo crujiente y rico en fibra.</li>
<li><strong>Faláfel:</strong> 180 °C, 12-15 min, con un poco de aceite. Tiernos por dentro sin freírlos.</li>
<li><strong>Hamburguesas de quinoa:</strong> 180 °C, 10-12 min. Crujientes y saciantes.</li>
</ul>

<h2>Menú sano con freidora de aire para toda la semana</h2>
<ul>
<li><strong>Lunes:</strong> pechugas de pollo marinadas con limón y hierbas, brócoli al ajillo.</li>
<li><strong>Martes:</strong> lomo de salmón y bastones de boniato.</li>
<li><strong>Miércoles:</strong> bowl de tofu crujiente con verduras asadas variadas y arroz integral.</li>
<li><strong>Jueves:</strong> gambas al ajillo y calabacín asado.</li>
<li><strong>Viernes:</strong> faláfel casero, pimientos y cebolla asados, pan de pita integral.</li>
<li><strong>Sábado:</strong> pollo rebozado con copos de avena y champiñones asados.</li>
<li><strong>Domingo:</strong> verduras de raíz asadas y huevos en cocotte (a unos 160 °C, unos 8 min).</li>
</ul>
<p>Si quieres dejar estas comidas preparadas con antelación, mira también nuestro <a href="/es/blog/meal-prep-airfryer-semaine">batch cooking con freidora de aire para toda la semana</a>.</p>

<h2>5 trucos para cocinar más sano en la freidora de aire</h2>
<ul>
<li><strong>1. Dosifica el aceite con un pulverizador:</strong> unas pocas pulverizaciones bastan para la mayoría de las recetas, mucho menos que una cucharada echada a ojo.</li>
<li><strong>2. Elige un aceite que aguante bien el calor:</strong> los aceites refinados soportan mejor las altas temperaturas. No dejes que el aceite llegue a humear.</li>
<li><strong>3. Aligera el rebozado:</strong> copos de avena triturados, sésamo, frutos secos picados o un poco de parmesano le dan un toque crujiente.</li>
<li><strong>4. Apuesta por marinados sin azúcar añadido:</strong> limón, hierbas, ajo, jengibre y especias aportan sabor. Además, los marinados dulces se queman antes.</li>
<li><strong>5. No sobrecargues la cesta:</strong> llénala como mucho hasta dos tercios y agítala a mitad de cocción para que todo se haga por igual.</li>
</ul>

<h2>Lo que la freidora de aire no hace</h2>
<p>La freidora de aire no convierte un buñuelo en comida sana. Reduce el aceite añadido, lo que puede aligerar algunos platos, pero el equilibrio general de lo que comes (cantidades, variedad, fruta y verdura, alimentos poco procesados) pesa mucho más que el aparato con el que cocinas. Si tienes un objetivo de salud concreto (peso, colesterol, diabetes), pide consejo a un profesional sanitario en lugar de confiar en un aparato.</p>

<h2>5 recetas sanas y fáciles en freidora de aire</h2>
<ul>
<li><strong>Bastones de calabacín al parmesano:</strong> calabacín cortado en bastones con una capa fina de pan rallado y parmesano. 180 °C, 12-14 minutos.</li>
<li><strong>Garbanzos crujientes con especias:</strong> garbanzos escurridos y secos, 1 cucharadita de aceite, comino y pimentón ahumado. 200 °C, 15 minutos, agitando la cesta.</li>
<li><strong>Salmón con costra de hierbas:</strong> lomo de salmón, pan rallado y hierbas frescas. 190 °C, 10-12 minutos.</li>
<li><strong>Chips de berenjena:</strong> rodajas finas, una pulverización de aceite, sal y tomillo. 180 °C, unos 10 minutos, vigilando el color.</li>
<li><strong>Pollo tikka:</strong> pechugas de pollo marinadas en yogur y especias. 190 °C, unos 18 minutos.</li>
</ul>

<h2>Conclusión: una herramienta práctica, no un milagro</h2>
<p>Con ingredientes frescos y poco aceite, la freidora de aire facilita una cocina más ligera en el día a día, sobre todo si la usas en lugar de freír en aceite. Sus ventajas son reales, pero dependen de los alimentos que elijas y de cómo cocines: dorado y no tostado, cesta sin sobrecargar, productos poco procesados.</p>
<p>Para saber más, consulta nuestra <a href="/es/guides/airfryers">guía completa de freidoras de aire</a> y nuestra <a href="/es/guides/airfryer-vs-four">comparativa entre freidora de aire y horno</a>.</p>`,

    it: `<h2>La friggitrice ad aria è davvero più sana?</h2>
<p>Sì: rispetto alla frittura a immersione, la friggitrice ad aria permette di cucinare con molti meno grassi, perché un cucchiaio d'olio (o anche solo qualche spruzzo) prende il posto di diverse centinaia di millilitri. Non rende però sano un alimento che non lo è: il vantaggio dipende soprattutto da cosa metti nel cestello.</p>
<p>Questa guida riassume ciò che si sa davvero, sulla base degli studi scientifici pubblicati e delle raccomandazioni delle autorità sanitarie, poi propone alimenti, consigli e idee per i pasti per sfruttarla al meglio. Non sostituisce il parere di un medico o di un dietista se segui una dieta particolare.</p>

<h3>Meno olio: da dove nasce la differenza</h3>
<p>Nella friggitrice tradizionale l'alimento è immerso nell'olio e ne assorbe una parte durante la cottura. Nella friggitrice ad aria è l'aria molto calda, mossa da una ventola, a dorare la superficie. Per le patatine fatte in casa di solito basta un cucchiaino d'olio per ottenere una bella doratura. Come riferimento, un cucchiaio d'olio apporta circa 120 kcal: a fare la differenza è la quantità d'olio aggiunta, molto più dell'apparecchio in sé.</p>
<p><strong>Attenzione ai surgelati prefritti:</strong> patatine, nuggets e frittelle industriali sono spesso già fritti prima del congelamento. Cuocerli ad aria evita di aggiungere altro olio, ma il loro contenuto di grassi resta quello indicato sulla confezione. Controlla l'etichetta nutrizionale.</p>

<h3>Confronto tra metodi di cottura</h3>
<table>
<thead>
<tr><th>Metodo</th><th>Olio aggiunto</th><th>Consistenza</th><th>Da sapere</th></tr>
</thead>
<tbody>
<tr><td>Friggitrice ad aria</td><td>Pochissimo (spray o 1 cucchiaino)</td><td>Superficie croccante</td><td>Cottura rapida, non riempire troppo il cestello</td></tr>
<tr><td>Friggitrice a olio</td><td>Bagno d'olio completo</td><td>Molto croccante</td><td>L'alimento assorbe parte dell'olio</td></tr>
<tr><td>Forno tradizionale</td><td>Poco o moderato</td><td>Dorato, a volte meno croccante</td><td>Preriscaldamento più lungo, grande capienza</td></tr>
<tr><td>Padella</td><td>Moderato</td><td>Rosolato, dorato</td><td>Va tenuta d'occhio</td></tr>
<tr><td>Vapore</td><td>Nessuno</td><td>Tenero, senza crosta</td><td>Nessun contatto diretto con l'acqua di cottura</td></tr>
</tbody>
</table>
<p>Per un'analisi più completa, consulta il nostro <a href="/it/blog/airfryer-vs-friteuse-traditionnelle">confronto tra friggitrice ad aria e friggitrice tradizionale</a>.</p>

<h2>L'acrilammide: meno in alcuni studi, ma non eliminata</h2>
<p>L'acrilammide si forma quando gli alimenti ricchi di amido (patate, pane, cereali) cuociono ad alta temperatura. Nel 2015 l'Autorità europea per la sicurezza alimentare (EFSA) ha concluso che potrebbe aumentare il rischio di cancro e raccomanda di limitarne l'esposizione; l'Unione europea, inoltre, disciplina le misure per ridurla nell'industria alimentare.</p>
<p>Uno studio pubblicato nel 2015 sul <em>Journal of Food Science</em> (Sansano et al.) ha misurato, a 180 °C, circa il 90% di acrilammide in meno nelle patatine cotte ad aria rispetto a quelle fritte in olio. Altri lavori, raccolti in una revisione scientifica del 2024, mostrano però risultati variabili a seconda di temperatura, tempo di cottura e preparazione delle patate. Meglio quindi seguire qualche accorgimento che affidarsi solo all'apparecchio.</p>

<h3>Come limitare l'acrilammide nella friggitrice ad aria</h3>
<ul>
<li><strong>Punta a un colore giallo dorato:</strong> è il consiglio diffuso dalle autorità sanitarie europee. Più le patatine scuriscono, più acrilammide contengono.</li>
<li><strong>Resta intorno a 170-180 °C per le patate</strong> ed evita di prolungare la cottura «per renderle più croccanti».</li>
<li><strong>Metti a bagno le patatine crude</strong> in acqua fredda per 15-30 minuti, poi asciugale bene: l'ammollo riduce gli zuccheri in superficie.</li>
<li><strong>Segui le istruzioni della confezione</strong> per i surgelati, senza superare i tempi indicati.</li>
</ul>

<h2>Conservazione dei nutrienti: cosa si può dire</h2>
<p>La quantità di vitamine che resta dopo la cottura dipende da tre fattori: temperatura, durata e contatto con l'acqua. Le vitamine idrosolubili (vitamina C, vitamine del gruppo B) passano in parte nell'acqua quando si lessano le verdure. La friggitrice ad aria, come il forno o il vapore, evita questo contatto, e la sua cottura, spesso più breve di quella di un forno tradizionale, limita l'esposizione al calore.</p>
<p>I risultati variano comunque molto da un alimento all'altro e nessun metodo è il migliore per tutti i nutrienti. In pratica, conviene cuocere le verdure al punto giusto, senza seccarle, e alternare i metodi di cottura.</p>

<h2>I migliori alimenti per cucinare sano con la friggitrice ad aria</h2>

<h3>1. Le verdure: croccanti e saporite</h3>
<p>Il calore secco caramellizza la superficie delle verdure e ne concentra il sapore, mentre l'interno resta tenero. Scopri le nostre <a href="/it/blog/recettes-legumes-grilles-airfryer">ricette di verdure grigliate nella friggitrice ad aria</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180 °C, 10-12 minuti, con un cucchiaino d'olio.</li>
<li><strong>Zucchine:</strong> 200 °C, 8-10 minuti, a rondelle.</li>
<li><strong>Cavolfiore:</strong> 190 °C, 15-18 minuti. Le cimette diventano dorate e croccanti.</li>
<li><strong>Patata dolce:</strong> 190 °C, 15-20 minuti, a bastoncini. Apporta betacarotene.</li>
<li><strong>Funghi:</strong> 190 °C, 10-12 minuti. Succosi e ricchi di sapore umami.</li>
</ul>

<h3>2. Le proteine magre: croccanti senza panatura spessa</h3>
<p>La friggitrice ad aria forma una crosticina senza bisogno di una panatura spessa. Prova le nostre <a href="/it/blog/recettes-poulet-croustillant-airfryer">ricette di pollo croccante</a>.</p>
<ul>
<li><strong>Petto di pollo:</strong> 180 °C, 18-22 minuti a seconda dello spessore. Controlla che sia ben cotto all'interno.</li>
<li><strong>Salmone:</strong> 200 °C, 8-10 minuti. Un pesce grasso, fonte di omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15-18 minuti, ben sgocciolato. Ideale per i pasti vegetariani.</li>
<li><strong>Gamberi:</strong> 200 °C, 6-8 minuti. Si cuociono in un attimo.</li>
</ul>

<h3>3. Legumi e cereali</h3>
<ul>
<li><strong>Ceci tostati:</strong> 190 °C, 15-20 minuti, ben asciugati. Uno snack croccante e ricco di fibre.</li>
<li><strong>Falafel:</strong> 180 °C, 12-15 minuti, leggermente unti. Morbidi dentro, senza frittura.</li>
<li><strong>Burger di quinoa:</strong> 180 °C, 10-12 minuti. Croccanti e sazianti.</li>
</ul>

<h2>Idee per una settimana di pasti sani con la friggitrice ad aria</h2>
<ul>
<li><strong>Lunedì:</strong> petto di pollo marinato al limone e alle erbe, broccoli all'aglio.</li>
<li><strong>Martedì:</strong> trancio di salmone, bastoncini di patata dolce.</li>
<li><strong>Mercoledì:</strong> bowl di tofu croccante con verdure grigliate miste e riso integrale.</li>
<li><strong>Giovedì:</strong> gamberi all'aglio, zucchine grigliate.</li>
<li><strong>Venerdì:</strong> falafel fatti in casa, peperoni e cipolle grigliati, pita integrale.</li>
<li><strong>Sabato:</strong> pollo panato ai fiocchi d'avena, funghi grigliati.</li>
<li><strong>Domenica:</strong> ortaggi a radice arrostiti, uova in cocotte (circa 160 °C, 8 minuti).</li>
</ul>
<p>Per organizzare i pasti in anticipo, leggi anche la nostra guida al <a href="/it/blog/meal-prep-airfryer-semaine">meal prep settimanale con la friggitrice ad aria</a>.</p>

<h2>5 consigli per cucinare più sano con la friggitrice ad aria</h2>
<ul>
<li><strong>1. Dosa l'olio con uno spruzzino:</strong> pochi spruzzi bastano per la maggior parte delle ricette, molto meno di un cucchiaio versato a occhio.</li>
<li><strong>2. Scegli un olio adatto alle alte temperature:</strong> gli oli raffinati reggono meglio il calore. Non lasciare che l'olio arrivi a fumare.</li>
<li><strong>3. Alleggerisci la panatura:</strong> fiocchi d'avena frullati, semi di sesamo, frutta secca tritata o un po' di parmigiano danno croccantezza.</li>
<li><strong>4. Punta su marinature senza zuccheri aggiunti:</strong> limone, erbe, aglio, zenzero e spezie danno sapore. Le marinature dolci, inoltre, bruciano prima.</li>
<li><strong>5. Non sovraccaricare il cestello:</strong> riempilo al massimo per due terzi e scuotilo a metà cottura, così cuoce tutto in modo uniforme.</li>
</ul>

<h2>Cosa la friggitrice ad aria non può fare</h2>
<p>La friggitrice ad aria non trasforma una frittella in un alimento sano. Riduce l'olio aggiunto, e questo può alleggerire alcuni piatti, ma l'equilibrio generale dell'alimentazione (porzioni, varietà, frutta e verdura, alimenti poco trasformati) conta molto più dell'elettrodomestico con cui cuoci. Se hai un obiettivo di salute preciso (peso, colesterolo, diabete), chiedi consiglio a un professionista della salute invece di affidarti a un apparecchio.</p>

<h2>5 ricette sane e facili con la friggitrice ad aria</h2>
<ul>
<li><strong>Bastoncini di zucchine al parmigiano:</strong> zucchine a bastoncini con un sottile strato di pangrattato e parmigiano. 180 °C, 12-14 minuti.</li>
<li><strong>Ceci croccanti speziati:</strong> ceci scolati e asciugati, 1 cucchiaino d'olio, cumino e paprika affumicata. 200 °C, 15 minuti, scuotendo il cestello.</li>
<li><strong>Salmone in crosta di erbe:</strong> trancio di salmone, pangrattato ed erbe fresche. 190 °C, 10-12 minuti.</li>
<li><strong>Chips di melanzane:</strong> fette sottili, uno spruzzo d'olio, sale e timo. 180 °C, circa 10 minuti, controllando la doratura.</li>
<li><strong>Pollo tikka:</strong> petto di pollo marinato nello yogurt con le spezie. 190 °C, circa 18 minuti.</li>
</ul>

<h2>Conclusione: uno strumento pratico, non una soluzione miracolosa</h2>
<p>Con ingredienti freschi e poco olio, la friggitrice ad aria rende più facile cucinare leggero tutti i giorni, soprattutto se prende il posto della frittura a immersione. I suoi vantaggi sono reali, ma dipendono dagli alimenti che scegli e da come cuoci: colore dorato e non scuro, cestello non sovraccarico, ingredienti poco trasformati.</p>
<p>Per approfondire, leggi la nostra <a href="/it/guides/airfryers">guida completa alle friggitrici ad aria</a> e il nostro <a href="/it/guides/airfryer-vs-four">confronto tra friggitrice ad aria e forno tradizionale</a>.</p>`,

    nl: `<h2>Is een airfryer echt gezonder?</h2>
<p>Ja, vergeleken met frituren in een bad olie kook je met een airfryer met veel minder vet: een lepel olie, of zelfs alleen een spray, vervangt enkele honderden milliliters. Een ongezond product wordt er alleen niet gezond van: het voordeel hangt vooral af van wat je in de mand legt.</p>
<p>Deze gids zet op een rij wat er echt bekend is, op basis van gepubliceerd wetenschappelijk onderzoek en de adviezen van gezondheidsinstanties. Daarna volgen ingrediënten, tips en maaltijdideeën om er het meeste uit te halen. Volg je een speciaal dieet, dan vervangt deze gids niet het advies van een arts of diëtist.</p>

<h3>Minder olie: waar het verschil vandaan komt</h3>
<p>In een gewone frituurpan zit het eten helemaal onder de olie en neemt het tijdens het bakken een deel daarvan op. In een airfryer zorgt zeer hete lucht, rondgeblazen door een ventilator, voor de korst. Voor zelfgemaakte friet is een theelepel olie meestal genoeg voor een goudbruine buitenkant. Ter indicatie: een eetlepel olie is goed voor ongeveer 120 kcal. Het verschil zit dus vooral in de hoeveelheid olie die je toevoegt, veel meer dan in het apparaat zelf.</p>
<p><strong>Let op bij voorgebakken diepvriesproducten:</strong> friet, nuggets en kroketten uit de winkel zijn vaak al gefrituurd voordat ze worden ingevroren. In de airfryer hoef je geen olie toe te voegen, maar het vetgehalte blijft wat op de verpakking staat. Kijk dus naar het voedingsetiket.</p>

<h3>Bereidingswijzen vergeleken</h3>
<table>
<thead>
<tr><th>Bereidingswijze</th><th>Toegevoegde olie</th><th>Textuur</th><th>Goed om te weten</th></tr>
</thead>
<tbody>
<tr><td>Airfryer</td><td>Heel weinig (spray of 1 theelepel)</td><td>Krokante buitenkant</td><td>Snel gaar, mand niet te vol doen</td></tr>
<tr><td>Frituurpan</td><td>Volledig onder olie</td><td>Zeer krokant</td><td>Het eten neemt een deel van de olie op</td></tr>
<tr><td>Gewone oven</td><td>Weinig tot matig</td><td>Goudbruin, soms minder krokant</td><td>Langer voorverwarmen, grote inhoud</td></tr>
<tr><td>Koekenpan</td><td>Matig</td><td>Aangebraden, goudbruin</td><td>Je moet erbij blijven</td></tr>
<tr><td>Stomen</td><td>Geen</td><td>Zacht, zonder korst</td><td>Geen direct contact met kookwater</td></tr>
</tbody>
</table>
<p>Een uitgebreidere analyse lees je in onze <a href="/nl/blog/airfryer-vs-friteuse-traditionnelle">vergelijking airfryer of frituurpan</a>.</p>

<h2>Acrylamide: lager in sommige studies, maar niet verdwenen</h2>
<p>Acrylamide ontstaat wanneer zetmeelrijke producten (aardappelen, brood, granen) op hoge temperatuur worden bereid. De Europese Autoriteit voor voedselveiligheid (EFSA) concludeerde in 2015 dat de stof het risico op kanker mogelijk verhoogt, en adviseert om de blootstelling te beperken. Europese regels verplichten de voedingsindustrie bovendien om het gehalte omlaag te brengen.</p>
<p>Een studie uit 2015 in het <em>Journal of Food Science</em> (Sansano et al.) mat bij 180 °C ongeveer 90% minder acrylamide in friet die met hete lucht was gebakken dan in gefrituurde friet. Ander onderzoek, samengebracht in een wetenschappelijke review uit 2024, laat echter wisselende resultaten zien, afhankelijk van temperatuur, baktijd en voorbereiding van de aardappelen. Goede gewoonten tellen dus meer dan het apparaat alleen.</p>

<h3>Zo beperk je acrylamide in de airfryer</h3>
<ul>
<li><strong>Bak goudgeel, niet bruin:</strong> dat adviseren Europese gezondheidsinstanties. Hoe bruiner de friet, hoe meer acrylamide.</li>
<li><strong>Houd aardappelen rond 170 tot 180 °C</strong> en verleng de baktijd niet “voor extra krokantheid”.</li>
<li><strong>Week rauwe friet 15 tot 30 minuten in koud water</strong> en dep alles goed droog: door het weken zit er minder suiker aan de buitenkant.</li>
<li><strong>Volg bij diepvriesproducten de instructies op de verpakking</strong> en bak niet langer dan aangegeven.</li>
</ul>

<h2>Voedingsstoffen behouden: wat we weten</h2>
<p>Hoeveel vitamines er na het garen overblijven, hangt af van drie factoren: temperatuur, tijd en contact met water. Wateroplosbare vitamines (vitamine C, B-vitamines) komen deels in het water terecht als je groenten kookt. De airfryer voorkomt dat contact, net als de oven of stomen, en omdat de bereiding vaak korter duurt dan in een gewone oven, staat het eten minder lang bloot aan hitte.</p>
<p>De resultaten verschillen wel sterk per product, en geen enkele methode is de beste voor alle voedingsstoffen. Onthoud vooral: gaar groenten precies goed in plaats van ze uit te drogen, en wissel bereidingswijzen af.</p>

<h2>De beste ingrediënten om gezond te koken in de airfryer</h2>

<h3>1. Groenten: knapperig en vol smaak</h3>
<p>Droge hitte karamelliseert de buitenkant van groenten en versterkt hun smaak, terwijl de binnenkant zacht blijft. Bekijk onze <a href="/nl/blog/recettes-legumes-grilles-airfryer">recepten voor geroosterde groenten uit de airfryer</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180 °C, 10–12 min, met een theelepel olie.</li>
<li><strong>Courgette:</strong> 200 °C, 8–10 min, in plakjes.</li>
<li><strong>Bloemkool:</strong> 190 °C, 15–18 min. De roosjes worden goudbruin en knapperig.</li>
<li><strong>Zoete aardappel:</strong> 190 °C, 15–20 min, als friet. Bevat bètacaroteen.</li>
<li><strong>Champignons:</strong> 190 °C, 10–12 min. Sappig en vol umami.</li>
</ul>

<h3>2. Magere eiwitbronnen: krokant zonder dikke paneerlaag</h3>
<p>In de airfryer krijg je een korstje zonder dikke laag paneermeel. Bekijk onze <a href="/nl/blog/recettes-poulet-croustillant-airfryer">recepten voor krokante kip</a>.</p>
<ul>
<li><strong>Kipfilet:</strong> 180 °C, 18–22 min, afhankelijk van de dikte. Controleer of de kip helemaal gaar is.</li>
<li><strong>Zalm:</strong> 200 °C, 8–10 min. Een vette vis en een bron van omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15–18 min, goed uitgeperst. Ideaal voor vegetarische maaltijden.</li>
<li><strong>Garnalen:</strong> 200 °C, 6–8 min. Heel snel gaar.</li>
</ul>

<h3>3. Peulvruchten en granen</h3>
<ul>
<li><strong>Geroosterde kikkererwten:</strong> 190 °C, 15–20 min, goed drooggedept. Een knapperige, vezelrijke snack.</li>
<li><strong>Falafel:</strong> 180 °C, 12–15 min, licht ingevet. Zacht vanbinnen, zonder frituren.</li>
<li><strong>Quinoaburgers:</strong> 180 °C, 10–12 min. Krokant en vullend.</li>
</ul>

<h2>Weekmenu: gezonde maaltijden uit de airfryer</h2>
<ul>
<li><strong>Maandag:</strong> kipfilet gemarineerd in citroen en kruiden, broccoli met knoflook.</li>
<li><strong>Dinsdag:</strong> zalmfilet, friet van zoete aardappel.</li>
<li><strong>Woensdag:</strong> bowl met krokante tofu, gemengde geroosterde groenten en zilvervliesrijst.</li>
<li><strong>Donderdag:</strong> knoflookgarnalen, gegrilde courgette.</li>
<li><strong>Vrijdag:</strong> zelfgemaakte falafel, geroosterde paprika en ui, volkoren pita.</li>
<li><strong>Zaterdag:</strong> kip met een korstje van havervlokken, geroosterde champignons.</li>
<li><strong>Zondag:</strong> geroosterde wortelgroenten, eitjes in een ovenschaaltje (ongeveer 160 °C, 8 min).</li>
</ul>
<p>Wil je deze maaltijden vooruit plannen? Lees dan ook onze gids over <a href="/nl/blog/meal-prep-airfryer-semaine">meal prep met de airfryer voor de hele week</a>.</p>

<h2>5 tips om gezonder te koken in de airfryer</h2>
<ul>
<li><strong>1. Doseer olie met een spray:</strong> een paar sprays is genoeg voor de meeste recepten, veel minder dan een eetlepel die je op het oog schenkt.</li>
<li><strong>2. Kies olie die tegen hitte kan:</strong> geraffineerde oliën verdragen hoge temperaturen beter. Laat de olie niet roken.</li>
<li><strong>3. Maak de paneerlaag lichter:</strong> gemalen havervlokken, sesamzaad, gehakte noten of een beetje parmezaan geven een krokant laagje.</li>
<li><strong>4. Kies marinades zonder toegevoegde suiker:</strong> citroen, kruiden, knoflook, gember en specerijen geven smaak. Zoete marinades verbranden bovendien sneller.</li>
<li><strong>5. Doe de mand niet te vol:</strong> vul hem hooguit voor twee derde en schud halverwege, zodat alles gelijkmatig gaar wordt.</li>
</ul>

<h2>Wat een airfryer niet doet</h2>
<p>Een airfryer maakt van een donut geen gezond eten. Hij vermindert de toegevoegde olie, en dat kan sommige gerechten lichter maken, maar je eetpatroon als geheel (porties, variatie, groente en fruit, weinig bewerkte producten) telt veel zwaarder dan het keukenapparaat. Heb je een concreet gezondheidsdoel (gewicht, cholesterol, diabetes), vraag dan advies aan een arts of diëtist en verlaat je niet op een apparaat.</p>

<h2>5 makkelijke en gezonde airfryerrecepten</h2>
<ul>
<li><strong>Courgettefriet met parmezaan:</strong> courgettereepjes met een dun laagje paneermeel en parmezaan. 180 °C, 12 tot 14 minuten.</li>
<li><strong>Krokante gekruide kikkererwten:</strong> uitgelekte, drooggedepte kikkererwten, 1 theelepel olie, komijn en gerookt paprikapoeder. 200 °C, 15 minuten, tussendoor schudden.</li>
<li><strong>Zalm met kruidenkorst:</strong> zalmfilet, paneermeel en verse kruiden. 190 °C, 10 tot 12 minuten.</li>
<li><strong>Auberginechips:</strong> dunne plakjes, één spray olie, zout en tijm. 180 °C, ongeveer 10 minuten; houd de kleur in de gaten.</li>
<li><strong>Kip tikka:</strong> kipfilet gemarineerd in yoghurt en specerijen. 190 °C, ongeveer 18 minuten.</li>
</ul>

<h2>Conclusie: een handig hulpmiddel, geen wondermiddel</h2>
<p>Met verse ingrediënten en weinig olie maakt een airfryer lichter koken in het dagelijks leven makkelijker, vooral als hij de frituurpan vervangt. De voordelen zijn echt, maar hangen af van wat je kiest en hoe je het bereidt: goudgeel in plaats van bruin, een mand die niet te vol is, weinig bewerkte ingrediënten.</p>
<p>Lees verder in onze <a href="/nl/guides/airfryers">complete airfryergids</a> en onze <a href="/nl/guides/airfryer-vs-four">vergelijking airfryer of oven</a>.</p>`,
    pl: `<h2>Czy frytkownica beztłuszczowa naprawdę jest zdrowsza?</h2>
<p>Tak – w porównaniu ze smażeniem w głębokim tłuszczu frytkownica beztłuszczowa (air fryer) pozwala przyrządzać potrawy przy znacznie mniejszej ilości tłuszczu, bo łyżka oleju (a nawet kilka psiknięć ze spryskiwacza) zastępuje kilkaset mililitrów. Nie sprawi jednak, że niezdrowe jedzenie stanie się zdrowe: efekt zależy przede wszystkim od tego, co włożysz do kosza.</p>
<p>W tym poradniku zbieramy to, co naprawdę wiadomo na ten temat – na podstawie opublikowanych badań naukowych i zaleceń instytucji zdrowia publicznego. Podpowiadamy też, jakie produkty wybierać, jak je przyrządzać i jakie posiłki zaplanować, żeby jak najlepiej wykorzystać frytkownicę. Ten tekst nie zastąpi porady lekarza ani dietetyka, jeśli stosujesz specjalną dietę.</p>

<h3>Mniej oleju: skąd bierze się różnica</h3>
<p>W tradycyjnej frytownicy produkt jest zanurzony w oleju i podczas smażenia wchłania jego część. We frytkownicy beztłuszczowej powierzchnię potrawy przypieka bardzo gorące powietrze, które tłoczy wentylator. Żeby domowe frytki ładnie się zezłociły, zwykle wystarcza łyżeczka oleju. Dla porównania: łyżka oleju to ok. 120 kcal. O różnicy decyduje więc ilość dodanego oleju – w znacznie większym stopniu niż samo urządzenie.</p>
<p><strong>Uwaga na mrożonki, które są już podsmażone:</strong> fabryczne frytki, nuggetsy czy produkty w cieście często smaży się jeszcze przed zamrożeniem. Gdy przygotowujesz je we frytkownicy, nie musisz dodawać oleju, ale i tak zawierają tyle tłuszczu, ile podano na opakowaniu. Sprawdzaj tabelę wartości odżywczych.</p>

<h3>Porównanie metod obróbki</h3>
<table>
<thead>
<tr><th>Metoda</th><th>Dodany olej</th><th>Efekt</th><th>Warto wiedzieć</th></tr>
</thead>
<tbody>
<tr><td>Frytkownica beztłuszczowa</td><td>Bardzo mało (spray lub 1 łyżeczka)</td><td>Chrupiąca skórka</td><td>Krótki czas przyrządzania, nie przepełniaj kosza</td></tr>
<tr><td>Tradycyjna frytownica</td><td>Głęboki tłuszcz</td><td>Bardzo chrupiąca skórka</td><td>Produkt wchłania część oleju</td></tr>
<tr><td>Tradycyjny piekarnik</td><td>Od małej do umiarkowanej ilości</td><td>Złocista skórka, czasem mniej chrupiąca</td><td>Dłuższe nagrzewanie, duża pojemność</td></tr>
<tr><td>Patelnia</td><td>Umiarkowana ilość</td><td>Przysmażona, złocista skórka</td><td>Wymaga pilnowania</td></tr>
<tr><td>Gotowanie na parze</td><td>Brak</td><td>Miękka konsystencja, bez skórki</td><td>Produkt nie styka się bezpośrednio z wodą</td></tr>
</tbody>
</table>
<p>Więcej szczegółów znajdziesz w naszym <a href="/pl/blog/airfryer-vs-friteuse-traditionnelle">porównaniu frytkownicy beztłuszczowej z tradycyjną frytownicą</a>.</p>

<h2>Akrylamid: w niektórych badaniach mniej, ale nadal obecny</h2>
<p>Akrylamid powstaje, gdy produkty bogate w skrobię (ziemniaki, pieczywo, produkty zbożowe) poddaje się obróbce w wysokiej temperaturze. W 2015 roku Europejski Urząd ds. Bezpieczeństwa Żywności (EFSA) uznał, że może on zwiększać ryzyko nowotworów, i zaleca ograniczanie narażenia na tę substancję. Unijne przepisy zobowiązują też przemysł spożywczy do zmniejszania jego zawartości.</p>
<p>W badaniu opublikowanym w 2015 roku w czasopiśmie <em>Journal of Food Science</em> (Sansano i in.) przy obróbce w temperaturze 180 °C frytki z gorącego powietrza zawierały ok. 90% mniej akrylamidu niż frytki smażone w oleju. Inne badania, zebrane w przeglądzie naukowym z 2024 roku, dają jednak rozbieżne wyniki – zależnie od temperatury, czasu i sposobu przygotowania ziemniaków. Lepiej więc stosować dobre praktyki, niż liczyć wyłącznie na urządzenie.</p>

<h3>Jak ograniczyć akrylamid we frytkownicy beztłuszczowej</h3>
<ul>
<li><strong>Smaż do złocistożółtego koloru:</strong> tak radzą europejskie instytucje odpowiedzialne za bezpieczeństwo żywności. Im bardziej frytki się zbrązowią, tym więcej zawierają akrylamidu.</li>
<li><strong>Ziemniaki przyrządzaj w ok. 170–180 °C</strong> i nie przedłużaj smażenia „dla większej chrupkości”.</li>
<li><strong>Surowe frytki namocz</strong> w zimnej wodzie na 15–30 minut, a potem dokładnie osusz: moczenie zmniejsza ilość cukrów na ich powierzchni.</li>
<li><strong>Mrożonki przygotowuj zgodnie z instrukcją na opakowaniu</strong> i nie przekraczaj podanego czasu ani temperatury.</li>
</ul>

<h2>Składniki odżywcze: co wiadomo</h2>
<p>To, ile witamin zostaje po obróbce, zależy od trzech czynników: temperatury, czasu i kontaktu z wodą. Witaminy rozpuszczalne w wodzie (witamina C i witaminy z grupy B) podczas gotowania warzyw częściowo przechodzą do wody. We frytkownicy, podobnie jak w piekarniku czy na parze, nie ma takiego kontaktu z wodą, a czas obróbki jest często krótszy niż w zwykłym piekarniku, co ogranicza działanie wysokiej temperatury.</p>
<p>Wyniki bardzo się jednak różnią w zależności od produktu i żadna metoda nie jest najlepsza dla wszystkich składników odżywczych. Najważniejsze: przyrządzaj warzywa tak, by były w sam raz, a nie przesuszone, i stosuj różne metody obróbki.</p>

<h2>Najlepsze produkty do zdrowych potraw z frytkownicy beztłuszczowej</h2>

<h3>1. Warzywa: chrupiące i aromatyczne</h3>
<p>Suche, gorące powietrze karmelizuje powierzchnię warzyw i wydobywa ich smak, a środek pozostaje miękki. Zajrzyj do naszych <a href="/pl/blog/recettes-legumes-grilles-airfryer">przepisów na grillowane warzywa z frytkownicy beztłuszczowej</a>.</p>
<ul>
<li><strong>Brokuły:</strong> 180 °C, 10–12 min, z łyżeczką oleju.</li>
<li><strong>Cukinia:</strong> 200 °C, 8–10 min, pokrojona w plastry.</li>
<li><strong>Kalafior:</strong> 190 °C, 15–18 min. Różyczki robią się złociste i chrupiące.</li>
<li><strong>Batat:</strong> 190 °C, 15–20 min, jako frytki. Zawiera beta-karoten.</li>
<li><strong>Pieczarki:</strong> 190 °C, 10–12 min. Soczyste, z wyraźnym smakiem umami.</li>
</ul>

<h3>2. Chude białko: chrupiące bez grubej panierki</h3>
<p>Frytkownica tworzy chrupiącą skórkę bez grubej warstwy panierki. Wypróbuj nasze <a href="/pl/blog/recettes-poulet-croustillant-airfryer">przepisy na chrupiącego kurczaka</a>.</p>
<ul>
<li><strong>Filet z kurczaka:</strong> 180 °C, 18–22 min w zależności od grubości. Sprawdź, czy mięso jest dopieczone w środku.</li>
<li><strong>Łosoś:</strong> 200 °C, 8–10 min. Tłusta ryba, źródło kwasów omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15–18 min, dobrze odciśnięte z wody. Idealne do dań wegetariańskich.</li>
<li><strong>Krewetki:</strong> 200 °C, 6–8 min. Są gotowe bardzo szybko.</li>
</ul>

<h3>3. Rośliny strączkowe i zboża</h3>
<ul>
<li><strong>Pieczona ciecierzyca:</strong> 190 °C, 15–20 min, dobrze osuszona. Chrupiąca przekąska bogata w błonnik.</li>
<li><strong>Falafele:</strong> 180 °C, 12–15 min, lekko posmarowane olejem. Miękkie w środku, choć nie są smażone w głębokim tłuszczu.</li>
<li><strong>Kotleciki z komosy ryżowej:</strong> 180 °C, 10–12 min. Chrupiące i sycące.</li>
</ul>

<h2>Pomysły na zdrowe posiłki z frytkownicy na cały tydzień</h2>
<ul>
<li><strong>Poniedziałek:</strong> filety z kurczaka marynowane w cytrynie i ziołach, brokuły z czosnkiem.</li>
<li><strong>Wtorek:</strong> filet z łososia, frytki z batatów.</li>
<li><strong>Środa:</strong> miska z chrupiącym tofu, mieszanką grillowanych warzyw i brązowym ryżem.</li>
<li><strong>Czwartek:</strong> krewetki z czosnkiem, grillowana cukinia.</li>
<li><strong>Piątek:</strong> domowe falafele, grillowana papryka i cebula, pełnoziarnista pita.</li>
<li><strong>Sobota:</strong> kurczak w panierce z płatków owsianych, grillowane pieczarki.</li>
<li><strong>Niedziela:</strong> pieczone warzywa korzeniowe, jajka w kokilkach (ok. 160 °C, 8 min).</li>
</ul>
<p>Jeśli chcesz przygotować te posiłki z wyprzedzeniem, zajrzyj też do naszego planu <a href="/pl/blog/meal-prep-airfryer-semaine">meal prep na cały tydzień we frytkownicy beztłuszczowej</a>.</p>

<h2>5 wskazówek, jak przyrządzać zdrowsze potrawy we frytkownicy</h2>
<ul>
<li><strong>1. Dozuj olej spryskiwaczem:</strong> w większości przepisów wystarczy kilka psiknięć – to dużo mniej niż łyżka oleju wlewana na oko.</li>
<li><strong>2. Wybierz olej odporny na wysoką temperaturę:</strong> oleje rafinowane znoszą ją lepiej. Nie dopuszczaj do tego, by olej zaczął dymić.</li>
<li><strong>3. Zrób lżejszą panierkę:</strong> zmielone płatki owsiane, sezam, posiekane orzechy lub odrobina parmezanu zapewnią chrupkość.</li>
<li><strong>4. Stawiaj na marynaty bez dodatku cukru:</strong> cytryna, zioła, czosnek, imbir i przyprawy dodadzą smaku. Słodkie marynaty w dodatku szybciej się przypalają.</li>
<li><strong>5. Nie przepełniaj kosza:</strong> napełniaj go najwyżej do dwóch trzecich, a w połowie czasu nim potrząśnij, żeby wszystko przyrumieniło się równomiernie.</li>
</ul>

<h2>Czego frytkownica nie zrobi</h2>
<p>Frytkownica nie zamieni pączka w zdrową przekąskę. Pozwala dodać mniej oleju, dzięki czemu niektóre dania mogą być lżejsze, ale dużo ważniejsza od urządzenia jest cała dieta: wielkość porcji, różnorodność, warzywa i owoce, mało przetworzona żywność. Jeśli masz konkretny cel zdrowotny (masa ciała, cholesterol, cukrzyca), poradź się lekarza lub dietetyka, zamiast polegać na urządzeniu kuchennym.</p>

<h2>5 prostych, zdrowych przepisów z frytkownicy beztłuszczowej</h2>
<ul>
<li><strong>Frytki z cukinii z parmezanem:</strong> słupki cukinii obtoczone w cienkiej warstwie bułki tartej i parmezanu. 180 °C, 12–14 minut.</li>
<li><strong>Chrupiąca ciecierzyca z przyprawami:</strong> odsączona i osuszona ciecierzyca, 1 łyżeczka oleju, kmin rzymski, wędzona papryka. 200 °C, 15 minut, co jakiś czas potrząsając koszem.</li>
<li><strong>Łosoś w ziołowej panierce:</strong> filet z łososia, bułka tarta i świeże zioła. 190 °C, 10–12 minut.</li>
<li><strong>Chipsy z bakłażana:</strong> cienkie plastry, jedno psiknięcie oleju, sól i tymianek. 180 °C, ok. 10 minut, kontrolując stopień zrumienienia.</li>
<li><strong>Kurczak tikka:</strong> pierś z kurczaka marynowana w jogurcie i przyprawach. 190 °C, ok. 18 minut.</li>
</ul>

<h2>Podsumowanie: praktyczne urządzenie, a nie cudowne rozwiązanie</h2>
<p>Frytkownica używana ze świeżymi składnikami i niewielką ilością oleju ułatwia przygotowywanie lżejszych posiłków na co dzień – zwłaszcza gdy zastępuje smażenie w głębokim tłuszczu. Jej zalety są realne, ale zależą od wybranych produktów i sposobu przyrządzania: złocisty, a nie brązowy kolor, nieprzepełniony kosz, mało przetworzone produkty.</p>
<p>Więcej znajdziesz w naszym <a href="/pl/guides/airfryers">kompletnym poradniku o frytkownicach beztłuszczowych</a> oraz w <a href="/pl/guides/airfryer-vs-four">porównaniu frytkownicy beztłuszczowej z tradycyjnym piekarnikiem</a>.</p>`,
    sv: `<h2>Är airfryern verkligen nyttigare?</h2>
<p>Ja, jämfört med att fritera i ett oljebad kan du laga mat med betydligt mindre fett i en airfryer, eftersom en sked olja (eller bara en spray) ersätter flera deciliter. Däremot gör den inte en onyttig råvara nyttig: vinsten beror framför allt på vad du lägger i korgen.</p>
<p>Den här guiden sammanfattar vad man faktiskt vet, utifrån publicerad forskning och livsmedelsmyndigheternas råd, och ger sedan förslag på livsmedel, knep och måltidsidéer så att du får ut så mycket som möjligt av din airfryer. Den ersätter inte råd från en läkare eller dietist om du följer en särskild kost.</p>

<h3>Mindre olja: här uppstår skillnaden</h3>
<p>I en vanlig fritös ligger råvaran helt under oljan och suger upp en del av den under tillagningen. I en airfryer är det i stället mycket het luft från en fläkt som steker ytan. Till hemgjorda pommes frites räcker det oftast med en tesked olja för att få en gyllene yta. Som jämförelse ger en matsked olja ungefär 120 kcal: det är mängden olja du tillsätter som gör skillnaden, mycket mer än själva apparaten.</p>
<p><strong>Se upp med förfriterade frysprodukter:</strong> färdiga pommes frites, nuggets och friterade snacks har ofta friterats redan innan de frystes. Gör du dem i airfryern slipper du tillsätta mer olja, men fetthalten är fortfarande den som står på förpackningen. Läs näringsdeklarationen.</p>

<h3>Tillagningsmetoderna jämförda</h3>
<table>
<thead>
<tr><th>Tillagningsmetod</th><th>Tillsatt olja</th><th>Konsistens</th><th>Bra att veta</th></tr>
</thead>
<tbody>
<tr><td>Airfryer</td><td>Mycket lite (spray eller 1 tsk)</td><td>Krispig yta</td><td>Snabb tillagning, fyll inte korgen för mycket</td></tr>
<tr><td>Fritös med oljebad</td><td>Helt oljebad</td><td>Mycket krispig</td><td>Råvaran suger upp en del av oljan</td></tr>
<tr><td>Vanlig ugn</td><td>Lite till måttligt</td><td>Gyllene, ibland mindre krispig</td><td>Längre förvärmning, stor volym</td></tr>
<tr><td>Stekpanna</td><td>Måttligt</td><td>Stekt, gyllene</td><td>Måste passas</td></tr>
<tr><td>Ångkokning</td><td>Ingen</td><td>Mjuk, utan skorpa</td><td>Ingen direkt kontakt med kokvattnet</td></tr>
</tbody>
</table>
<p>En mer utförlig genomgång hittar du i vår <a href="/sv/blog/airfryer-vs-friteuse-traditionnelle">jämförelse mellan airfryer och vanlig fritös</a>.</p>

<h2>Akrylamid: lägre i vissa studier, men inte borta</h2>
<p>Akrylamid bildas när stärkelserika livsmedel (potatis, bröd, spannmål) tillagas i hög temperatur. Europeiska myndigheten för livsmedelssäkerhet (Efsa) kom 2015 fram till att ämnet kan öka risken för cancer och rekommenderar att exponeringen begränsas; EU har dessutom regler som kräver att livsmedelsindustrin minskar halterna.</p>
<p>En studie i <em>Journal of Food Science</em> från 2015 (Sansano m.fl.) uppmätte vid 180 °C ungefär 90 % mindre akrylamid i pommes frites tillagade med varmluft än i pommes frites friterade i olja. Andra studier, som sammanställts i en vetenskaplig översikt från 2024, visar dock varierande resultat beroende på temperatur, tid och hur potatisen förbereds. Goda vanor betyder alltså mer än att enbart lita på apparaten.</p>

<h3>Så minskar du akrylamiden i airfryern</h3>
<ul>
<li><strong>Sikta på en gyllengul färg:</strong> det är rådet från europeiska livsmedelsmyndigheter. Ju brunare pommes frites, desto mer akrylamid innehåller de.</li>
<li><strong>Håll dig kring 170–180 °C för potatis</strong> och undvik att förlänga tillagningen ”för att få det krispigare”.</li>
<li><strong>Lägg råa pommes frites i blöt</strong> i kallt vatten i 15–30 minuter och torka dem sedan ordentligt: blötläggningen minskar mängden socker på ytan.</li>
<li><strong>Följ anvisningarna på förpackningen</strong> för frysta produkter, och gå inte över den angivna tiden.</li>
</ul>

<h2>Näringsämnen: det här kan man säga</h2>
<p>Hur mycket vitaminer som finns kvar efter tillagningen beror på tre faktorer: temperatur, tid och kontakt med vatten. Vattenlösliga vitaminer (C-vitamin, B-vitaminer) läcker delvis ut i kokvattnet när du kokar grönsaker. Precis som ugn och ångkokning undviker airfryern den kontakten, och eftersom tillagningen ofta går snabbare än i en vanlig ugn utsätts maten för värme under kortare tid.</p>
<p>Resultaten varierar ändå mycket mellan olika livsmedel, och ingen metod är bäst för alla näringsämnen. Det viktigaste att ta med sig: tillaga grönsakerna precis lagom i stället för att torka ut dem, och variera tillagningssätten.</p>

<h2>De bästa livsmedlen för nyttig mat i airfryern</h2>

<h3>1. Grönsaker: krispiga och smakrika</h3>
<p>Den torra värmen karamelliserar grönsakernas yta och koncentrerar smaken, samtidigt som insidan förblir mjuk. Fler idéer hittar du i våra <a href="/sv/blog/recettes-legumes-grilles-airfryer">recept på rostade grönsaker i airfryer</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180 °C, 10–12 min, med en tesked olja.</li>
<li><strong>Zucchini:</strong> 200 °C, 8–10 min i skivor.</li>
<li><strong>Blomkål:</strong> 190 °C, 15–18 min. Buketterna blir gyllene och krispiga.</li>
<li><strong>Sötpotatis:</strong> 190 °C, 15–20 min som pommes frites. Innehåller betakaroten.</li>
<li><strong>Svamp:</strong> 190 °C, 10–12 min. Saftig och full av umami.</li>
</ul>

<h3>2. Magert protein: krispigt utan tjock panering</h3>
<p>Airfryern ger en krispig yta utan att det behövs ett tjockt lager panering. Ta en titt på våra <a href="/sv/blog/recettes-poulet-croustillant-airfryer">recept på krispig kyckling</a>.</p>
<ul>
<li><strong>Kycklingfilé:</strong> 180 °C, 18–22 min beroende på tjocklek. Kontrollera att den är genomstekt.</li>
<li><strong>Lax:</strong> 200 °C, 8–10 min. En fet fisk och en källa till omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15–18 min, ordentligt avrunnen. Perfekt till vegetariska måltider.</li>
<li><strong>Räkor:</strong> 200 °C, 6–8 min. Klara på nolltid.</li>
</ul>

<h3>3. Baljväxter och spannmål</h3>
<ul>
<li><strong>Rostade kikärter:</strong> 190 °C, 15–20 min, väl torkade. Ett krispigt mellanmål med mycket fibrer.</li>
<li><strong>Falafel:</strong> 180 °C, 12–15 min, lätt oljade. Mjuka inuti, helt utan fritering.</li>
<li><strong>Quinoabiffar:</strong> 180 °C, 10–12 min. Krispiga och mättande.</li>
</ul>

<h2>Idéer till nyttiga airfryermåltider för veckan</h2>
<ul>
<li><strong>Måndag:</strong> kycklingfilé marinerad i citron och örter, broccoli med vitlök.</li>
<li><strong>Tisdag:</strong> laxfilé och sötpotatispommes.</li>
<li><strong>Onsdag:</strong> bowl med krispig tofu, blandade rostade grönsaker och fullkornsris.</li>
<li><strong>Torsdag:</strong> vitlöksräkor, grillad zucchini.</li>
<li><strong>Fredag:</strong> hemgjord falafel, rostad paprika och lök, fullkornspitabröd.</li>
<li><strong>Lördag:</strong> kyckling panerad med havregryn, rostad svamp.</li>
<li><strong>Söndag:</strong> rostade rotfrukter, bakade ägg i portionsform (cirka 160 °C, 8 min).</li>
</ul>
<p>Vill du planera måltiderna i förväg kan du läsa vår guide till <a href="/sv/blog/meal-prep-airfryer-semaine">matlådor (meal prep) i airfryer för hela veckan</a>.</p>

<h2>5 knep för nyttigare mat i airfryern</h2>
<ul>
<li><strong>1. Dosera oljan med en sprayflaska:</strong> ett par tryck räcker till de flesta recept, betydligt mindre än en matsked som hälls i på en höft.</li>
<li><strong>2. Välj en olja som tål hög värme:</strong> raffinerade oljor klarar höga temperaturer bättre. Låt inte oljan börja ryka.</li>
<li><strong>3. Gör paneringen lättare:</strong> mixade havregryn, sesamfrön, hackade nötter eller lite parmesan ger en krispig yta.</li>
<li><strong>4. Satsa på marinader utan tillsatt socker:</strong> citron, örter, vitlök, ingefära och kryddor ger smak. Söta marinader bränns dessutom fortare.</li>
<li><strong>5. Fyll inte korgen för mycket:</strong> fyll den till högst två tredjedelar och skaka den halvvägs genom tillagningen så blir resultatet jämnt.</li>
</ul>

<h2>Det här gör airfryern inte</h2>
<p>En airfryer förvandlar inte en munk till hälsokost. Den minskar mängden tillsatt olja, vilket kan göra vissa rätter lättare, men kosten som helhet (portionsstorlekar, variation, frukt och grönsaker, lite processade livsmedel) spelar mycket större roll än vilken apparat du lagar maten i. Har du ett specifikt hälsomål (vikt, kolesterol, diabetes) bör du be vårdpersonal om råd i stället för att förlita dig på en köksapparat.</p>

<h2>5 enkla och nyttiga recept i airfryer</h2>
<ul>
<li><strong>Zucchinipommes med parmesan:</strong> zucchinistavar täckta med ett tunt lager ströbröd och parmesan. 180 °C, 12–14 minuter.</li>
<li><strong>Krispiga kryddade kikärter:</strong> avrunna och torkade kikärter, 1 tsk olja, spiskummin och rökt paprikapulver. 200 °C, 15 minuter, skaka korgen då och då.</li>
<li><strong>Lax med örtskorpa:</strong> laxfilé, ströbröd och färska örter. 190 °C, 10–12 minuter.</li>
<li><strong>Auberginechips:</strong> tunna skivor, en lätt spray olja, salt och timjan. 180 °C, cirka 10 minuter, håll ett öga på färgen.</li>
<li><strong>Chicken tikka:</strong> kycklingfilé marinerad i yoghurt och kryddor. 190 °C, cirka 18 minuter.</li>
</ul>

<h2>Slutsats: ett praktiskt redskap, inget mirakel</h2>
<p>Med färska råvaror och lite olja gör airfryern det enklare att laga lättare mat i vardagen, särskilt om den ersätter fritering i oljebad. Fördelarna är verkliga men beror på vilka livsmedel du väljer och hur du tillagar dem: gyllene färg i stället för brun, en korg som inte är överfull och lite processade råvaror.</p>
<p>Läs mer i vår <a href="/sv/guides/airfryers">kompletta guide till airfryrar</a> och vår <a href="/sv/guides/airfryer-vs-four">jämförelse mellan airfryer och vanlig ugn</a>.</p>`,
    us: `<h2>Is an air fryer really healthier?</h2>
<p>Yes. Compared with deep frying, an air fryer lets you cook with far less fat, because a spoonful of oil (or just a quick spray) replaces the few cups a deep fryer needs. It won’t make an unhealthy food healthy, though: the benefit depends mostly on what you put in the basket.</p>
<p>This guide sums up what is actually known, based on published research and the advice of food safety authorities, then suggests foods, tips and meal ideas to get the most out of your air fryer. It doesn’t replace advice from a doctor or dietitian if you follow a specific diet.</p>

<h3>Less oil: where the difference comes from</h3>
<p>In a deep fryer, food is submerged and soaks up some of the oil as it cooks. In an air fryer, very hot air circulated by a fan crisps the surface. For homemade fries, a teaspoon of oil is usually enough for a golden finish. For reference, one tablespoon of oil packs about 120 calories: how much oil you add matters far more than the appliance itself.</p>
<p><strong>Watch out for frozen foods that are already fried:</strong> store-bought fries, nuggets and fritters have often been fried before freezing. Air frying them avoids adding more oil, but their fat content stays what the package says. Check the Nutrition Facts label.</p>

<h3>Cooking methods compared</h3>
<table>
<thead>
<tr><th>Cooking method</th><th>Added oil</th><th>Texture</th><th>Good to know</th></tr>
</thead>
<tbody>
<tr><td>Air fryer</td><td>Very little (spray or 1 tsp)</td><td>Crispy surface</td><td>Cooks fast; don’t overfill the basket</td></tr>
<tr><td>Deep fryer</td><td>Full oil bath</td><td>Very crispy</td><td>Food soaks up some of the oil</td></tr>
<tr><td>Conventional oven</td><td>Low to moderate</td><td>Golden, sometimes less crispy</td><td>Longer preheat, large capacity</td></tr>
<tr><td>Skillet</td><td>Moderate</td><td>Seared, golden</td><td>Needs watching</td></tr>
<tr><td>Steaming</td><td>None</td><td>Tender, no crust</td><td>No direct contact with cooking water</td></tr>
</tbody>
</table>
<p>For the full breakdown, see our <a href="/us/blog/airfryer-vs-friteuse-traditionnelle">air fryer vs. deep fryer comparison</a>.</p>

<h2>Acrylamide: lower in some studies, not eliminated</h2>
<p>Acrylamide forms when starchy foods (potatoes, bread, cereals) are cooked at high temperatures. In 2015, the European Food Safety Authority (EFSA) concluded that it potentially increases the risk of cancer and advised limiting exposure; EU rules also require the food industry to reduce it.</p>
<p>A 2015 study in the <em>Journal of Food Science</em> (Sansano et al.) measured about 90% less acrylamide in air-fried fries than in deep-fried ones at 350°F (180°C). Other research, gathered in a 2024 scientific review, shows mixed results depending on temperature, cooking time and how the potatoes are prepped. So good habits matter more than the appliance alone.</p>

<h3>How to limit acrylamide in an air fryer</h3>
<ul>
<li><strong>Aim for golden yellow:</strong> that’s the advice from European food safety authorities. The browner the fries, the more acrylamide they contain.</li>
<li><strong>Stay around 340 to 350°F (170 to 180°C) for potatoes</strong>, and don’t extend the cooking time “for extra crunch.”</li>
<li><strong>Soak raw fries</strong> in cold water for 15 to 30 minutes, then dry them well: soaking reduces the sugars on the surface.</li>
<li><strong>Follow the package directions</strong> for frozen foods, without going past them.</li>
</ul>

<h2>Nutrient retention: what we can say</h2>
<p>How many vitamins survive cooking depends on three things: temperature, time and contact with water. Water-soluble vitamins (vitamin C, B vitamins) partly leach into the water when you boil vegetables. An air fryer, like an oven or a steamer, avoids that contact, and its cooking time is often shorter than a conventional oven’s, which limits heat exposure.</p>
<p>Results still vary a lot from one food to another, and no method is best for every nutrient. The main takeaway: cook vegetables until just tender rather than drying them out, and mix up your cooking methods.</p>

<h2>The best foods for healthy air frying</h2>

<h3>1. Vegetables: crisp and flavorful</h3>
<p>Dry heat caramelizes the surface of vegetables and concentrates their flavor while keeping the inside tender. See our <a href="/us/blog/recettes-legumes-grilles-airfryer">roasted vegetable recipes</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 350°F (180°C), 10 to 12 min, with a teaspoon of oil.</li>
<li><strong>Zucchini:</strong> 400°F (200°C), 8 to 10 min, sliced into rounds.</li>
<li><strong>Cauliflower:</strong> 375°F (190°C), 15 to 18 min. The florets turn golden and crunchy.</li>
<li><strong>Sweet potato:</strong> 375°F (190°C), 15 to 20 min, cut into fries. A good source of beta-carotene.</li>
<li><strong>Mushrooms:</strong> 375°F (190°C), 10 to 12 min. Juicy and full of umami.</li>
</ul>

<h3>2. Lean proteins: crispy without heavy breading</h3>
<p>The air fryer builds a crust without a thick coating. See our <a href="/us/blog/recettes-poulet-croustillant-airfryer">crispy chicken recipes</a>.</p>
<ul>
<li><strong>Chicken breast:</strong> 350°F (180°C), 18 to 22 min, depending on thickness. Check that the thickest part reaches 165°F (74°C).</li>
<li><strong>Salmon:</strong> 400°F (200°C), 8 to 10 min. An oily fish and a source of omega-3s.</li>
<li><strong>Tofu:</strong> 375°F (190°C), 15 to 18 min, well pressed. Ideal for vegetarian meals.</li>
<li><strong>Shrimp:</strong> 400°F (200°C), 6 to 8 min. Very quick to cook.</li>
</ul>

<h3>3. Beans, legumes and grains</h3>
<ul>
<li><strong>Roasted chickpeas:</strong> 375°F (190°C), 15 to 20 min, patted dry. A crunchy, high-fiber snack.</li>
<li><strong>Falafel:</strong> 350°F (180°C), 12 to 15 min, lightly oiled. Soft inside with no deep frying.</li>
<li><strong>Quinoa patties:</strong> 350°F (180°C), 10 to 12 min. Crispy and filling.</li>
</ul>

<h2>Healthy air fryer meal ideas for the week</h2>
<ul>
<li><strong>Monday:</strong> lemon-herb chicken, garlic broccoli.</li>
<li><strong>Tuesday:</strong> salmon fillet, sweet potato fries.</li>
<li><strong>Wednesday:</strong> crispy tofu bowl with mixed roasted vegetables and brown rice.</li>
<li><strong>Thursday:</strong> garlic shrimp, roasted zucchini.</li>
<li><strong>Friday:</strong> homemade falafel, roasted bell peppers and onions, whole-wheat pita.</li>
<li><strong>Saturday:</strong> oat-crusted chicken, roasted mushrooms.</li>
<li><strong>Sunday:</strong> roasted root vegetables, baked eggs (about 320°F, or 160°C, for 8 min).</li>
</ul>
<p>To plan these meals ahead, see our <a href="/us/blog/meal-prep-airfryer-semaine">weekly air fryer meal prep guide</a>.</p>

<h2>5 tips for healthier air frying</h2>
<ul>
<li><strong>1. Measure oil with a mister:</strong> a few sprays are enough for most recipes, far less than a tablespoon poured by eye.</li>
<li><strong>2. Choose an oil that handles high heat:</strong> refined oils hold up better at high temperatures. Don’t let the oil smoke.</li>
<li><strong>3. Go lighter on the breading:</strong> ground oats, sesame seeds, crushed nuts or a little Parmesan add crunch.</li>
<li><strong>4. Use marinades with no added sugar:</strong> lemon, herbs, garlic, ginger and spices bring the flavor. Sugary marinades also burn faster.</li>
<li><strong>5. Don’t overload the basket:</strong> fill it two-thirds full at most and shake it halfway through for even cooking.</li>
</ul>

<h2>What an air fryer doesn’t do</h2>
<p>An air fryer won’t turn a doughnut into health food. It cuts down on added oil, which can help lighten some dishes, but your overall diet (portions, variety, fruits and vegetables, minimally processed foods) matters far more than the appliance you cook with. If you have a specific health goal (weight, cholesterol, diabetes), talk to your health care provider rather than relying on a kitchen gadget.</p>

<h2>5 easy healthy air fryer recipes</h2>
<ul>
<li><strong>Parmesan zucchini fries:</strong> zucchini sticks coated in a thin layer of breadcrumbs and Parmesan. 350°F (180°C), 12 to 14 minutes.</li>
<li><strong>Crispy spiced chickpeas:</strong> drained, dried chickpeas, 1 tsp oil, cumin and smoked paprika. 400°F (200°C), 15 minutes, shaking the basket.</li>
<li><strong>Herb-crusted salmon:</strong> salmon fillet, breadcrumbs and fresh herbs. 375°F (190°C), 10 to 12 minutes.</li>
<li><strong>Eggplant chips:</strong> thin slices, one spray of oil, salt and thyme. 350°F (180°C), about 10 minutes, keeping an eye on the color.</li>
<li><strong>Chicken tikka:</strong> chicken breast marinated in yogurt and spices. 375°F (190°C), about 18 minutes.</li>
</ul>

<h2>The bottom line: a handy tool, not a miracle</h2>
<p>Used with fresh ingredients and a little oil, an air fryer makes lighter everyday cooking easier, especially if it replaces deep frying. The benefits are real, but they depend on the foods you choose and how you cook them: golden rather than brown, a basket that isn’t crowded, minimally processed ingredients.</p>
<p>To go further, explore our <a href="/us/guides/airfryers">complete air fryer guide</a> and our <a href="/us/guides/airfryer-vs-four">air fryer vs. oven comparison</a>.</p>`,
    ca: `<h2>Is an air fryer really healthier?</h2>
<p>Yes, compared with deep frying, an air fryer lets you cook with far less fat, because a spoonful of oil (or just a spray) replaces several hundred millilitres. It won't, however, make an unhealthy food healthy: the benefit depends mostly on what you put in the basket.</p>
<p>This guide sums up what is actually known, based on published research and the advice of food safety authorities, then suggests foods, tips and meal ideas to get the most out of your air fryer. It doesn't replace advice from a doctor or dietitian if you follow a specific diet.</p>

<h3>Less oil: where the difference comes from</h3>
<p>In a deep fryer, food is submerged and absorbs some of the oil as it cooks. In an air fryer, very hot air circulated by a fan crisps the surface. For homemade fries, a teaspoon (5 mL) of oil is usually enough for a golden finish. As a benchmark, one tablespoon of oil provides around 120 kcal: the amount of oil you add matters far more than the appliance itself.</p>
<p><strong>Watch out for pre-fried frozen foods:</strong> store-bought fries, nuggets and fritters have often been fried before freezing. Air frying them avoids adding more oil, but their fat content stays as listed on the package. Check the Nutrition Facts table.</p>

<h3>Cooking methods compared</h3>
<table>
<thead>
<tr><th>Cooking method</th><th>Added oil</th><th>Texture</th><th>Good to know</th></tr>
</thead>
<tbody>
<tr><td>Air fryer</td><td>Very little (spray or 1 tsp)</td><td>Crispy surface</td><td>Fast cooking, don't overfill the basket</td></tr>
<tr><td>Deep fryer</td><td>Full oil bath</td><td>Very crispy</td><td>Food absorbs some of the oil</td></tr>
<tr><td>Conventional oven</td><td>Low to moderate</td><td>Golden, sometimes less crispy</td><td>Longer preheating, large capacity</td></tr>
<tr><td>Frying pan</td><td>Moderate</td><td>Seared, golden</td><td>Needs watching</td></tr>
<tr><td>Steaming</td><td>None</td><td>Tender, no crust</td><td>No direct contact with cooking water</td></tr>
</tbody>
</table>
<p>For a full breakdown, see our <a href="/ca/blog/airfryer-vs-friteuse-traditionnelle">air fryer vs deep fryer comparison</a>.</p>

<h2>Acrylamide: lower in some studies, not eliminated</h2>
<p>Acrylamide forms when starchy foods (potatoes, bread, cereals) are cooked at high temperatures. In 2015 the European Food Safety Authority (EFSA) concluded that it potentially increases the risk of cancer and advised limiting exposure; EU rules also require the food industry to reduce it.</p>
<p>A 2015 study in the <em>Journal of Food Science</em> (Sansano et al.) measured around 90% less acrylamide in air-fried fries than in deep-fried ones at 180°C (350°F). Other research, gathered in a 2024 scientific review, shows mixed results depending on temperature, time and how the potatoes are prepared. So good habits matter more than the appliance alone.</p>

<h3>How to limit acrylamide in an air fryer</h3>
<ul>
<li><strong>Aim for golden yellow:</strong> this is the advice shared by European food safety authorities. The browner the fries, the more acrylamide they contain.</li>
<li><strong>Stay around 170 to 180°C (340 to 350°F) for potatoes</strong> and avoid extending the cooking time "for extra crunch."</li>
<li><strong>Soak raw-cut fries</strong> in cold water for 15 to 30 minutes, then dry them well: soaking reduces surface sugars.</li>
<li><strong>Follow the package directions</strong> for frozen products, without going beyond them.</li>
</ul>

<h2>Nutrient retention: what we can say</h2>
<p>How many vitamins survive cooking depends on three factors: temperature, time and contact with water. Water-soluble vitamins (vitamin C, B vitamins) partly leach into the water when vegetables are boiled. An air fryer, like an oven or a steamer, avoids that contact, and its cooking time is often shorter than a conventional oven's, which limits heat exposure.</p>
<p>Results still vary a lot from one food to another, and no method is best for every nutrient. The main takeaway: cook vegetables until just tender rather than drying them out, and vary your cooking methods.</p>

<h2>The best foods for healthy air frying</h2>

<h3>1. Vegetables: crisp and flavourful</h3>
<p>Dry heat caramelizes the surface of vegetables and concentrates their flavour while keeping the inside tender. See our <a href="/ca/blog/recettes-legumes-grilles-airfryer">roasted vegetable recipes</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180°C (350°F), 10–12 min, with a teaspoon of oil.</li>
<li><strong>Zucchini:</strong> 200°C (400°F), 8–10 min, sliced.</li>
<li><strong>Cauliflower:</strong> 190°C (375°F), 15–18 min. The florets turn golden and crunchy.</li>
<li><strong>Sweet potato:</strong> 190°C (375°F), 15–20 min as fries. A source of beta-carotene.</li>
<li><strong>Mushrooms:</strong> 190°C (375°F), 10–12 min. Juicy and full of umami.</li>
</ul>

<h3>2. Lean proteins: crispy without heavy breading</h3>
<p>The air fryer builds a crust without a thick coating. See our <a href="/ca/blog/recettes-poulet-croustillant-airfryer">crispy chicken recipes</a>.</p>
<ul>
<li><strong>Chicken breast:</strong> 180°C (350°F), 18–22 min depending on thickness. Check that the centre reaches 74°C (165°F).</li>
<li><strong>Salmon:</strong> 200°C (400°F), 8–10 min. An oily fish and a source of omega-3s.</li>
<li><strong>Tofu:</strong> 190°C (375°F), 15–18 min, well pressed. Ideal for vegetarian meals.</li>
<li><strong>Shrimp:</strong> 200°C (400°F), 6–8 min. Very quick to cook.</li>
</ul>

<h3>3. Legumes and grains</h3>
<ul>
<li><strong>Roasted chickpeas:</strong> 190°C (375°F), 15–20 min, well dried. A crunchy, fibre-rich snack.</li>
<li><strong>Falafel:</strong> 180°C (350°F), 12–15 min, lightly oiled. Soft inside without deep frying.</li>
<li><strong>Quinoa patties:</strong> 180°C (350°F), 10–12 min. Crispy and filling.</li>
</ul>

<h2>Healthy air fryer meal ideas for the week</h2>
<ul>
<li><strong>Monday:</strong> lemon and herb chicken, garlic broccoli.</li>
<li><strong>Tuesday:</strong> salmon fillet, sweet potato fries.</li>
<li><strong>Wednesday:</strong> crispy tofu bowl with mixed roasted vegetables and brown rice.</li>
<li><strong>Thursday:</strong> garlic shrimp, roasted zucchini.</li>
<li><strong>Friday:</strong> homemade falafel, roasted peppers and onions, whole wheat pita.</li>
<li><strong>Saturday:</strong> oat-crusted chicken, roasted mushrooms.</li>
<li><strong>Sunday:</strong> roasted root vegetables, baked eggs at 160°C (325°F) for about 8 min.</li>
</ul>
<p>To plan these meals ahead, see our <a href="/ca/blog/meal-prep-airfryer-semaine">weekly air fryer meal prep guide</a>.</p>

<h2>5 tips for healthier air frying</h2>
<ul>
<li><strong>1. Measure oil with a sprayer:</strong> a few sprays are enough for most recipes, far less than a tablespoon poured by eye.</li>
<li><strong>2. Choose an oil suited to high heat:</strong> refined oils cope better with high temperatures. Don't let the oil smoke.</li>
<li><strong>3. Lighten the coating:</strong> ground oats, sesame seeds, crushed nuts or a little Parmesan add crunch.</li>
<li><strong>4. Use marinades without added sugar:</strong> lemon, herbs, garlic, ginger and spices bring flavour. Sugary marinades also burn faster.</li>
<li><strong>5. Don't overload the basket:</strong> fill it two-thirds at most and shake halfway for even cooking.</li>
</ul>

<h2>What an air fryer doesn't do</h2>
<p>An air fryer won't turn a doughnut into health food. It reduces added oil, which can help lighten some dishes, but your overall diet (portions, variety, fruit and vegetables, minimally processed foods) matters far more than the cooking appliance. If you have a specific health goal (weight, cholesterol, diabetes), ask a health professional for advice rather than relying on a kitchen gadget.</p>

<h2>5 easy healthy air fryer recipes</h2>
<ul>
<li><strong>Parmesan zucchini fries:</strong> zucchini sticks coated in a thin layer of breadcrumbs and Parmesan. 180°C (350°F), 12–14 minutes.</li>
<li><strong>Crispy spiced chickpeas:</strong> drained and dried chickpeas, 1 tsp oil, cumin, smoked paprika. 200°C (400°F), 15 minutes, shaking the basket.</li>
<li><strong>Herb-crusted salmon:</strong> salmon fillet, breadcrumbs and fresh herbs. 190°C (375°F), 10–12 minutes.</li>
<li><strong>Eggplant chips:</strong> thin slices, one spray of oil, salt and thyme. 180°C (350°F), about 10 minutes, keeping an eye on the colour.</li>
<li><strong>Chicken tikka:</strong> chicken breast marinated in yogurt and spices. 190°C (375°F), about 18 minutes.</li>
</ul>

<h2>Conclusion: a handy tool, not a miracle</h2>
<p>Used with fresh ingredients and little oil, an air fryer makes lighter everyday cooking easier, especially if it replaces deep frying. Its benefits are real but depend on the food you choose and how you cook it: golden rather than brown, an uncrowded basket, minimally processed ingredients.</p>
<p>To go further, explore our <a href="/ca/guides/airfryers">complete air fryer guide</a> and our <a href="/ca/guides/airfryer-vs-four">air fryer vs oven comparison</a>.</p>`,
  },
  faq: [
    {
      question: {
        fr: "L'airfryer est-il vraiment plus sain que la friture traditionnelle ?",
        en: 'Is an air fryer really healthier than traditional deep frying?',
        de: 'Ist ein Airfryer wirklich gesünder als klassisches Frittieren?',
        es: '¿Es de verdad más sana la freidora de aire que la fritura tradicional?',
        it: 'La friggitrice ad aria è davvero più sana della frittura tradizionale?',
        nl: 'Is airfryen echt gezonder dan frituren?',
        pl: 'Czy frytkownica beztłuszczowa jest naprawdę zdrowsza niż smażenie w głębokim tłuszczu?',
        sv: 'Är en airfryer verkligen nyttigare än vanlig fritering?',
        us: 'Is an air fryer really healthier than deep frying?',
        ca: 'Is an air fryer really healthier than traditional deep frying?',
      },
      answer: {
        fr: "Par rapport à la friture dans un bain d'huile, oui : on utilise beaucoup moins d'huile, souvent une cuillère à café ou quelques pulvérisations. L'écart réel dépend de la recette, et un produit surgelé déjà pré-frit garde la teneur en matières grasses indiquée sur son emballage.",
        en: 'Compared with deep frying, yes: you use far less oil, often just a teaspoon or a few sprays. The real difference depends on the recipe, and frozen food that has already been fried keeps the fat content shown on its pack.',
        de: 'Im Vergleich zum Frittieren im Ölbad ja: Sie brauchen viel weniger Öl, oft nur einen Teelöffel oder ein paar Sprühstöße. Wie groß der Unterschied tatsächlich ist, hängt vom Rezept ab, und vorfrittierte Tiefkühlware behält den auf der Packung angegebenen Fettgehalt.',
        es: 'Frente a freír en abundante aceite, sí: se usa mucho menos aceite, a menudo una cucharadita o unas pocas pulverizaciones. La diferencia real depende de la receta, y un congelado prefrito conserva la grasa que indica su envase.',
        it: 'Rispetto alla frittura a immersione, sì: si usa molto meno olio, spesso un cucchiaino o qualche spruzzo. La differenza reale dipende dalla ricetta, e un surgelato prefritto mantiene il contenuto di grassi indicato sulla confezione.',
        nl: 'Vergeleken met frituren in een bad olie wel: je gebruikt veel minder olie, vaak een theelepel of een paar sprays. Hoe groot het verschil is, hangt af van het recept. Een voorgebakken diepvriesproduct houdt het vetgehalte dat op de verpakking staat.',
        pl: 'Tak, jeśli porównujemy ją ze smażeniem w głębokim tłuszczu: oleju potrzeba znacznie mniej, często wystarczy łyżeczka lub kilka psiknięć. Faktyczna różnica zależy od przepisu, a wstępnie podsmażona mrożonka i tak zawiera tyle tłuszczu, ile podano na opakowaniu.',
        sv: 'Jämfört med fritering i oljebad, ja: du använder mycket mindre olja, ofta en tesked eller några tryck med sprayflaskan. Den verkliga skillnaden beror på receptet, och en förfriterad frysprodukt har fortfarande den fetthalt som står på förpackningen.',
        us: 'Compared with deep frying, yes: you use far less oil, often a teaspoon or a few sprays. The real difference depends on the recipe, and a frozen product that was fried before freezing keeps the fat content shown on its package.',
        ca: 'Compared with deep frying, yes: you use far less oil, often a teaspoon or a few sprays. The real difference depends on the recipe, and a pre-fried frozen product keeps the fat content shown on its package.',
      },
    },
    {
      question: {
        fr: "Faut-il utiliser de l'huile dans un airfryer ?",
        en: 'Do I need to use oil in an air fryer?',
        de: 'Braucht man im Airfryer Öl?',
        es: '¿Hay que usar aceite en una freidora de aire?',
        it: 'Serve l\'olio nella friggitrice ad aria?',
        nl: 'Moet je olie gebruiken in een airfryer?',
        pl: 'Czy do frytkownicy beztłuszczowej trzeba dodawać olej?',
        sv: 'Måste man använda olja i en airfryer?',
        us: 'Do you need to use oil in an air fryer?',
        ca: 'Do you need to use oil in an air fryer?',
      },
      answer: {
        fr: "Ce n'est pas obligatoire, mais un peu d'huile aide les aliments frais à dorer et à ne pas se dessécher. Quelques pulvérisations ou une cuillère à café suffisent généralement. Préférez une huile raffinée qui supporte la chaleur et évitez de la laisser fumer.",
        en: "It isn’t essential, but a little oil helps fresh food brown and stops it drying out. A few sprays or a teaspoon is usually enough. Choose a refined oil that copes well with heat, and don’t let it smoke.",
        de: 'Nötig ist es nicht, aber mit etwas Öl werden frische Lebensmittel schön braun und trocknen nicht aus. Ein paar Sprühstöße oder ein Teelöffel reichen meist. Nehmen Sie ein raffiniertes, hitzebeständiges Öl und achten Sie darauf, dass es nicht zu rauchen beginnt.',
        es: 'No es obligatorio, pero un poco de aceite ayuda a que los alimentos frescos se doren y no se resequen. Suelen bastar unas pulverizaciones o una cucharadita. Elige un aceite refinado que aguante bien el calor y no dejes que llegue a humear.',
        it: "Non è obbligatorio, ma un po' d'olio aiuta gli alimenti freschi a dorarsi e a non seccarsi. Di solito bastano pochi spruzzi o un cucchiaino. Scegli un olio raffinato, che regga bene il calore, e non lasciarlo arrivare a fumare.",
        nl: 'Het hoeft niet, maar met een beetje olie wordt vers eten mooi bruin en droogt het niet uit. Een paar sprays of een theelepel is meestal genoeg. Kies een geraffineerde olie die goed tegen hitte kan en laat de olie niet roken.',
        pl: 'Nie trzeba, ale odrobina oleju pomaga świeżym produktom się zrumienić i chroni je przed wysuszeniem. Zwykle wystarczy kilka psiknięć lub łyżeczka. Wybieraj olej rafinowany, odporny na wysoką temperaturę, i nie dopuszczaj do tego, by zaczął dymić.',
        sv: 'Det är inget måste, men lite olja hjälper färska råvaror att få färg och hindrar dem från att torka ut. Några tryck med sprayflaskan eller en tesked räcker oftast. Välj helst en raffinerad olja som tål värme, och låt den inte börja ryka.',
        us: 'It isn’t required, but a little oil helps fresh food brown and keeps it from drying out. A few sprays or a teaspoon is usually enough. Choose a refined oil that handles high heat, and don’t let it smoke.',
        ca: 'It isn\'t mandatory, but a little oil helps fresh food brown and keeps it from drying out. A few sprays or a teaspoon is usually enough. Choose a refined oil that handles high heat and don\'t let it smoke.',
      },
    },
    {
      question: {
        fr: 'Combien de calories économise-t-on avec un airfryer ?',
        en: 'How many calories does an air fryer save?',
        de: 'Wie viele Kalorien spart man mit einer Heißluftfritteuse?',
        es: '¿Cuántas calorías se ahorran con una freidora de aire?',
        it: 'Quante calorie si risparmiano con una friggitrice ad aria?',
        nl: 'Hoeveel calorieën bespaar je met een airfryer?',
        pl: 'Ile kalorii można zaoszczędzić dzięki frytkownicy beztłuszczowej?',
        sv: 'Hur många kalorier sparar man med en airfryer?',
        us: 'How many calories do you save with an air fryer?',
        ca: 'How many calories do you save with an air fryer?',
      },
      answer: {
        fr: "Il n'existe pas de chiffre unique : tout dépend de l'aliment et de la quantité d'huile qu'il aurait absorbée en friture. Le levier principal est l'huile ajoutée, sachant qu'une cuillère à soupe apporte environ 120 kcal. Pour un objectif de poids précis, demandez conseil à un professionnel de santé.",
        en: 'There is no single figure: it depends on the food and how much oil it would have soaked up in a deep fryer. The biggest factor is the oil you add, and one tablespoon provides around 120 kcal. If you have a specific weight goal, ask a health professional for advice.',
        de: 'Eine pauschale Zahl gibt es nicht: Es hängt vom Lebensmittel ab und davon, wie viel Öl es beim Frittieren aufgenommen hätte. Der wichtigste Hebel ist das zugegebene Öl: Ein Esslöffel liefert rund 120 kcal. Wenn Sie ein bestimmtes Gewichtsziel haben, lassen Sie sich ärztlich oder von einer Ernährungsfachkraft beraten.',
        es: 'No hay una cifra única: depende del alimento y de cuánto aceite habría absorbido al freírlo. Lo que más cuenta es el aceite añadido: una cucharada sopera aporta unas 120 kcal. Si tienes un objetivo de peso concreto, pide consejo a un profesional sanitario.',
        it: "Non c'è una cifra valida per tutto: dipende dall'alimento e da quanto olio avrebbe assorbito con la frittura. A fare la differenza è soprattutto l'olio aggiunto: un cucchiaio apporta circa 120 kcal. Se hai un obiettivo di peso preciso, chiedi consiglio a un professionista della salute.",
        nl: 'Daar is geen vast getal voor: het hangt af van het product en van hoeveel olie het bij frituren zou opnemen. Het grootste verschil zit in de olie die je toevoegt: een eetlepel is goed voor ongeveer 120 kcal. Heb je een concreet gewichtsdoel, vraag dan advies aan een arts of diëtist.',
        pl: 'Nie ma jednej odpowiedzi: wszystko zależy od produktu i od tego, ile oleju wchłonąłby podczas smażenia w głębokim tłuszczu. Najwięcej zmienia ilość dodanego oleju – łyżka to ok. 120 kcal. Jeśli masz konkretny cel związany z masą ciała, poradź się lekarza lub dietetyka.',
        sv: 'Det finns ingen enskild siffra: allt beror på livsmedlet och hur mycket olja det skulle ha sugit upp vid fritering. Det som påverkar mest är oljan du tillsätter, och en matsked ger ungefär 120 kcal. Har du ett specifikt viktmål bör du be vårdpersonal om råd.',
        us: 'There’s no single number: it depends on the food and how much oil it would have soaked up in a deep fryer. The main lever is added oil, and one tablespoon packs about 120 calories. For a specific weight goal, talk to your health care provider.',
        ca: 'There is no single figure: it depends on the food and how much oil it would have absorbed in a deep fryer. The main lever is added oil, and one tablespoon provides around 120 kcal. For a specific weight goal, ask a health professional for advice.',
      },
    },
    {
      question: {
        fr: "L'airfryer préserve-t-il les nutriments des aliments ?",
        en: 'Does an air fryer preserve the nutrients in food?',
        de: 'Bleiben im Airfryer die Nährstoffe erhalten?',
        es: '¿Conserva la freidora de aire los nutrientes de los alimentos?',
        it: 'La friggitrice ad aria preserva i nutrienti degli alimenti?',
        nl: 'Blijven de voedingsstoffen behouden in een airfryer?',
        pl: 'Czy frytkownica beztłuszczowa pozwala zachować składniki odżywcze?',
        sv: 'Bevarar airfryern näringsämnena i maten?',
        us: 'Does an air fryer preserve the nutrients in food?',
        ca: 'Does an air fryer preserve the nutrients in food?',
      },
      answer: {
        fr: "Comme le four ou la vapeur, l'airfryer évite que les vitamines hydrosolubles passent dans l'eau de cuisson, ce qui arrive quand on fait bouillir des légumes. Sa cuisson souvent courte limite aussi l'exposition à la chaleur. Les résultats varient toutefois selon les aliments : évitez simplement de trop cuire.",
        en: 'Like an oven or a steamer, an air fryer stops water-soluble vitamins leaching into cooking water, which is what happens when you boil vegetables. Its cooking times are often short, which also limits heat exposure. Results do vary from food to food, though, so just avoid overcooking.',
        de: 'Wie Backofen oder Dampfgarer verhindert die Heißluftfritteuse, dass wasserlösliche Vitamine ins Kochwasser übergehen, was beim Kochen von Gemüse in Wasser passiert. Die oft kurze Garzeit begrenzt zudem die Hitzeeinwirkung. Je nach Lebensmittel fallen die Ergebnisse aber unterschiedlich aus: Wichtig ist vor allem, nichts zu lange zu garen.',
        es: 'Como el horno o el vapor, la freidora de aire evita que las vitaminas hidrosolubles pasen al agua de cocción, algo que ocurre al hervir las verduras. Como suele cocinar en poco tiempo, también limita la exposición al calor. Aun así, los resultados varían según el alimento: basta con no pasarse de cocción.',
        it: "Come il forno o il vapore, la friggitrice ad aria evita che le vitamine idrosolubili passino nell'acqua di cottura, come succede quando si lessano le verdure. La cottura, spesso breve, limita anche l'esposizione al calore. I risultati variano però da un alimento all'altro: l'importante è non cuocere troppo.",
        nl: 'Net als in de oven of bij stomen komen wateroplosbare vitamines in een airfryer niet in kookwater terecht, zoals wel gebeurt als je groenten kookt. Door de vaak korte bereidingstijd staat het eten ook minder lang bloot aan hitte. Het resultaat verschilt wel per product: zorg vooral dat je niets te lang gaart.',
        pl: 'Podobnie jak piekarnik czy gotowanie na parze, frytkownica nie wypłukuje witamin rozpuszczalnych w wodzie, a tak właśnie dzieje się przy gotowaniu warzyw. Krótki zwykle czas obróbki dodatkowo ogranicza działanie wysokiej temperatury. Wyniki różnią się jednak w zależności od produktu, więc po prostu nie przetrzymuj potraw zbyt długo.',
        sv: 'Precis som ugn och ångkokning hindrar airfryern vattenlösliga vitaminer från att läcka ut i kokvattnet, vilket händer när du kokar grönsaker. Den ofta korta tillagningstiden gör också att maten utsätts för värme under kortare tid. Resultaten varierar dock mellan olika livsmedel, så undvik helt enkelt att tillaga maten för länge.',
        us: 'Like an oven or a steamer, an air fryer keeps water-soluble vitamins from leaching into cooking water, which is what happens when you boil vegetables. Its often short cooking time also limits heat exposure. Results vary from food to food, so the simple rule is not to overcook.',
        ca: 'Like an oven or a steamer, an air fryer keeps water-soluble vitamins from leaching into the cooking water, which happens when vegetables are boiled. Its often short cooking time also limits heat exposure. Results vary from food to food, so simply avoid overcooking.',
      },
    },
    {
      question: {
        fr: 'Quels sont les meilleurs aliments à cuisiner dans un airfryer pour manger sain ?',
        en: 'What are the best foods to cook in an air fryer for healthy eating?',
        de: 'Welche Lebensmittel eignen sich am besten für gesundes Kochen in der Heißluftfritteuse?',
        es: '¿Qué alimentos son los mejores para comer sano con la freidora de aire?',
        it: 'Quali sono i migliori alimenti da cucinare nella friggitrice ad aria per mangiare sano?',
        nl: 'Wat kun je het best in de airfryer maken om gezond te eten?',
        pl: 'Jakie produkty najlepiej przygotowywać we frytkownicy beztłuszczowej, żeby jeść zdrowo?',
        sv: 'Vilka livsmedel passar bäst i airfryern om man vill äta nyttigt?',
        us: 'What are the best foods to cook in an air fryer for healthy eating?',
        ca: 'What are the best foods to cook in an air fryer for healthy eating?',
      },
      answer: {
        fr: "Les légumes (brocoli, courgettes, poivrons, chou-fleur), le poulet, le poisson, le tofu et les pois chiches se prêtent très bien à l'airfryer avec un minimum d'huile. La patate douce fait d'excellentes frites. Limitez les produits surgelés pré-frits, qui restent riches en matières grasses.",
        en: 'Vegetables (broccoli, courgettes, peppers, cauliflower), chicken, fish, tofu and chickpeas all work very well with a minimum of oil. Sweet potato makes excellent chips. Cut back on frozen foods that have been pre-fried, as they remain high in fat.',
        de: 'Gemüse (Brokkoli, Zucchini, Paprika, Blumenkohl), Hähnchen, Fisch, Tofu und Kichererbsen gelingen in der Heißluftfritteuse mit wenig Öl sehr gut. Aus Süßkartoffeln werden hervorragende Pommes. Vorfrittierte Tiefkühlprodukte sollten Sie nur selten verwenden, denn sie bleiben fettreich.',
        es: 'Las verduras (brócoli, calabacín, pimientos, coliflor), el pollo, el pescado, el tofu y los garbanzos quedan muy bien en la freidora de aire con un mínimo de aceite. El boniato en bastones sale buenísimo. Limita los congelados prefritos, que siguen teniendo mucha grasa.',
        it: 'Verdure (broccoli, zucchine, peperoni, cavolfiore), pollo, pesce, tofu e ceci si prestano benissimo alla friggitrice ad aria, con pochissimo olio. Con la patata dolce si fanno ottime patatine. Limita i surgelati prefritti, che restano ricchi di grassi.',
        nl: 'Groenten (broccoli, courgette, paprika, bloemkool), kip, vis, tofu en kikkererwten zijn heel geschikt voor de airfryer, met zo weinig mogelijk olie. Van zoete aardappel maak je uitstekende friet. Beperk voorgebakken diepvriesproducten: die blijven vet.',
        pl: 'Warzywa (brokuły, cukinia, papryka, kalafior), kurczak, ryby, tofu i ciecierzyca świetnie wychodzą we frytkownicy przy minimalnej ilości oleju. Z batatów zrobisz doskonałe frytki. Ograniczaj natomiast wstępnie podsmażane mrożonki – nadal zawierają dużo tłuszczu.',
        sv: 'Grönsaker (broccoli, zucchini, paprika, blomkål), kyckling, fisk, tofu och kikärter blir mycket bra i airfryern med ett minimum av olja. Av sötpotatis blir det utmärkta pommes frites. Dra ner på förfriterade frysprodukter, som fortfarande innehåller mycket fett.',
        us: 'Vegetables (broccoli, zucchini, bell peppers, cauliflower), chicken, fish, tofu and chickpeas all work very well with minimal oil. Sweet potatoes make excellent fries. Go easy on frozen products that were fried before freezing, which stay high in fat.',
        ca: 'Vegetables (broccoli, zucchini, peppers, cauliflower), chicken, fish, tofu and chickpeas all work very well with minimal oil. Sweet potato makes excellent fries. Limit pre-fried frozen products, which stay high in fat.',
      },
    },
  ],
}
