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
      src: 'https://m.media-amazon.com/images/I/31upZSvSwjL._AC_SL1500_.jpg',
      alt: {
        fr: 'Légumes frais et colorés cuits sainement dans un airfryer',
        en: 'Fresh colourful vegetables cooked healthily in an air fryer',
        de: 'Frisches buntes Gemüse gesund in der Heißluftfritteuse zubereitet',
        es: 'Verduras frescas y coloridas cocinadas saludablemente en una freidora de aire',
        it: 'Verdure fresche e colorate cucinate in modo sano nella friggitrice ad aria',
        nl: 'Verse kleurrijke groenten gezond bereid in de airfryer',
      },
    },
  ],
  title: {
    fr: 'Cuisiner Healthy avec un Airfryer : Guide Nutrition et Bien-Être',
    en: 'Healthy Cooking with an Air Fryer: Nutrition and Wellness Guide',
    de: 'Gesund Kochen mit der Heißluftfritteuse: Ernährungs- und Wellness-Ratgeber',
    es: 'Cocinar Saludable con una Freidora de Aire: Guía de Nutrición y Bienestar',
    it: 'Cucinare Sano con la Friggitrice ad Aria: Guida Nutrizione e Benessere',
    nl: 'Gezond Koken met de Airfryer: Voedings- en Welzijnsgids',
  },
  excerpt: {
    fr: 'Ce que l\'airfryer change vraiment dans votre alimentation : moins d\'huile, acrylamide, nutriments, aliments à privilégier, idées de repas sains et limites à connaître.',
    en: 'What an air fryer really changes in your diet: less oil, acrylamide, nutrients, the best foods to cook, healthy meal ideas and the limits worth knowing.',
    de: 'Was die Heißluftfritteuse an Ihrer Ernährung wirklich ändert: weniger Öl, Acrylamid, Nährstoffe, geeignete Lebensmittel, gesunde Mahlzeitenideen und Grenzen.',
    es: 'Lo que la freidora de aire cambia de verdad en tu alimentación: menos aceite, acrilamida, nutrientes, alimentos recomendados, ideas de comidas sanas y sus límites.',
    it: 'Cosa cambia davvero la friggitrice ad aria nella tua alimentazione: meno olio, acrilammide, nutrienti, alimenti consigliati, idee per pasti sani e limiti da conoscere.',
    nl: 'Wat de airfryer echt verandert aan je voeding: minder olie, acrylamide, voedingsstoffen, geschikte ingrediënten, gezonde maaltijdideeën en de grenzen ervan.',
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
<p>Yes, compared with deep frying, an air fryer lets you cook with far less fat, because a spoonful of oil (or just a spray) replaces several hundred millilitres. It will not, however, make an unhealthy food healthy: the benefit depends mostly on what you put in the basket.</p>
<p>This guide sums up what is actually known, based on published research and the advice of food safety authorities, then suggests foods, tips and meal ideas to get the most out of your air fryer. It does not replace advice from a doctor or dietitian if you follow a specific diet.</p>

<h3>Less oil: where the difference comes from</h3>
<p>In a deep fryer, food is submerged and absorbs some of the oil as it cooks. In an air fryer, very hot air circulated by a fan crisps the surface. For homemade chips, a teaspoon of oil is usually enough for a golden finish. As a benchmark, one tablespoon of oil provides around 120 kcal: the amount of oil you add matters far more than the appliance itself.</p>
<p><strong>Watch out for pre-fried frozen foods:</strong> shop-bought chips, nuggets and fritters have often been fried before freezing. Air frying them avoids adding more oil, but their fat content stays as stated on the pack. Check the nutrition label.</p>

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
<p>A 2015 study in the <em>Journal of Food Science</em> (Sansano et al.) measured around 90% less acrylamide in air-fried chips than in deep-fried ones at 180°C. Other research, gathered in a 2024 scientific review, shows variable results depending on temperature, time and how the potatoes are prepared. So good habits matter more than the appliance alone.</p>

<h3>How to limit acrylamide in an air fryer</h3>
<ul>
<li><strong>Aim for golden yellow:</strong> this is the advice shared by European food safety authorities. The browner the chips, the more acrylamide they contain.</li>
<li><strong>Stay around 170-180°C for potatoes</strong> and avoid extending the cooking time "for extra crunch".</li>
<li><strong>Soak raw chips</strong> in cold water for 15 to 30 minutes, then dry them well: soaking reduces surface sugars.</li>
<li><strong>Follow the pack instructions</strong> for frozen products, without going beyond them.</li>
</ul>

<h2>Nutrient retention: what we can say</h2>
<p>How many vitamins survive cooking depends on three factors: temperature, time and contact with water. Water-soluble vitamins (vitamin C, B vitamins) partly leach into the water when vegetables are boiled. An air fryer, like an oven or a steamer, avoids that contact, and its cooking time is often shorter than a conventional oven's, which limits heat exposure.</p>
<p>Results still vary a lot from one food to another, and no method is best for every nutrient. The main takeaway: cook vegetables until just done rather than drying them out, and vary your cooking methods.</p>

<h2>The best foods for healthy air frying</h2>

<h3>1. Vegetables: crisp and flavourful</h3>
<p>Dry heat caramelises the surface of vegetables and concentrates their flavour while keeping the inside tender. See our <a href="/en/blog/recettes-legumes-grilles-airfryer">roasted vegetable recipes</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180°C, 10-12 min, with a teaspoon of oil.</li>
<li><strong>Courgettes:</strong> 200°C, 8-10 min in slices.</li>
<li><strong>Cauliflower:</strong> 190°C, 15-18 min. The florets turn golden and crunchy.</li>
<li><strong>Sweet potato:</strong> 190°C, 15-20 min as chips. A source of beta-carotene.</li>
<li><strong>Mushrooms:</strong> 190°C, 10-12 min. Juicy and full of umami.</li>
</ul>

<h3>2. Lean proteins: crispy without heavy breading</h3>
<p>The air fryer builds a crust without a thick coating. See our <a href="/en/blog/recettes-poulet-croustillant-airfryer">crispy chicken recipes</a>.</p>
<ul>
<li><strong>Chicken breast:</strong> 180°C, 18-22 min depending on thickness. Check it is cooked through.</li>
<li><strong>Salmon:</strong> 200°C, 8-10 min. An oily fish and a source of omega-3.</li>
<li><strong>Tofu:</strong> 190°C, 15-18 min, well pressed. Ideal for vegetarian meals.</li>
<li><strong>Prawns:</strong> 200°C, 6-8 min. Very quick to cook.</li>
</ul>

<h3>3. Pulses and grains</h3>
<ul>
<li><strong>Roasted chickpeas:</strong> 190°C, 15-20 min, well dried. A crunchy, fibre-rich snack.</li>
<li><strong>Falafel:</strong> 180°C, 12-15 min, lightly oiled. Soft inside without deep frying.</li>
<li><strong>Quinoa patties:</strong> 180°C, 10-12 min. Crispy and filling.</li>
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
<li><strong>1. Measure oil with a sprayer:</strong> a few sprays are enough for most recipes, far less than a tablespoon poured by eye.</li>
<li><strong>2. Choose an oil suited to high heat:</strong> refined oils cope better with high temperatures. Don't let the oil smoke.</li>
<li><strong>3. Lighten the coating:</strong> blitzed oats, sesame seeds, crushed nuts or a little parmesan add crunch.</li>
<li><strong>4. Use marinades without added sugar:</strong> lemon, herbs, garlic, ginger and spices bring flavour. Sugary marinades also burn faster.</li>
<li><strong>5. Don't overload the basket:</strong> fill it two-thirds at most and shake halfway for even cooking.</li>
</ul>

<h2>What an air fryer doesn't do</h2>
<p>An air fryer won't turn a doughnut into health food. It reduces added oil, which can help lighten some dishes, but your overall diet (portions, variety, fruit and vegetables, minimally processed foods) matters far more than the cooking appliance. If you have a specific health goal (weight, cholesterol, diabetes), ask a health professional for advice rather than relying on a kitchen gadget.</p>

<h2>5 easy healthy air fryer recipes</h2>
<ul>
<li><strong>Parmesan courgette fries:</strong> courgette sticks coated in a thin layer of breadcrumbs and parmesan. 180°C, 12-14 minutes.</li>
<li><strong>Crispy spiced chickpeas:</strong> drained and dried chickpeas, 1 tsp oil, cumin, smoked paprika. 200°C, 15 minutes, shaking the basket.</li>
<li><strong>Herb-crusted salmon:</strong> salmon fillet, breadcrumbs and fresh herbs. 190°C, 10-12 minutes.</li>
<li><strong>Aubergine crisps:</strong> thin slices, one spray of oil, salt and thyme. 180°C, about 10 minutes, watching the colour.</li>
<li><strong>Chicken tikka:</strong> chicken breast marinated in yoghurt and spices. 190°C, about 18 minutes.</li>
</ul>

<h2>Conclusion: a handy tool, not a miracle</h2>
<p>Used with fresh ingredients and little oil, an air fryer makes lighter everyday cooking easier, especially if it replaces deep frying. Its benefits are real but depend on the food you choose and how you cook it: golden rather than brown, an uncrowded basket, minimally processed ingredients.</p>
<p>To go further, explore our <a href="/en/guides/airfryers">complete air fryer guide</a> and our <a href="/en/guides/airfryer-vs-four">air fryer vs oven comparison</a>.</p>`,

    de: `<h2>Ist die Heißluftfritteuse wirklich gesünder?</h2>
<p>Ja, im Vergleich zum Frittieren im Ölbad kommt die Heißluftfritteuse mit deutlich weniger Fett aus, denn ein Löffel Öl oder ein paar Sprühstöße ersetzen mehrere hundert Milliliter. Ein ungesundes Lebensmittel macht sie allerdings nicht gesund: Der Vorteil hängt vor allem davon ab, was im Korb landet.</p>
<p>Dieser Ratgeber fasst zusammen, was tatsächlich bekannt ist, gestützt auf veröffentlichte Studien und die Empfehlungen von Lebensmittelbehörden, und liefert dann Lebensmittel, Tipps und Mahlzeitenideen. Er ersetzt nicht den Rat einer Ärztin, eines Arztes oder einer Ernährungsfachkraft, wenn Sie eine besondere Diät einhalten.</p>

<h3>Weniger Öl: Woher der Unterschied kommt</h3>
<p>In der klassischen Fritteuse liegt das Lebensmittel im Öl und nimmt beim Garen einen Teil davon auf. In der Heißluftfritteuse sorgt sehr heiße, von einem Ventilator umgewälzte Luft für die Kruste. Für selbst gemachte Pommes reicht meist ein Teelöffel Öl. Zur Orientierung: Ein Esslöffel Öl liefert rund 120 kcal. Entscheidend ist also die zugegebene Ölmenge, nicht das Gerät an sich.</p>
<p><strong>Vorsicht bei vorfrittierter Tiefkühlware:</strong> Pommes, Nuggets oder Backfisch aus dem Supermarkt sind oft schon vor dem Einfrieren frittiert worden. In der Heißluftfritteuse kommt zwar kein Öl hinzu, der Fettgehalt bleibt aber der auf der Verpackung angegebene. Ein Blick auf die Nährwerttabelle lohnt sich.</p>

<h3>Garmethoden im Vergleich</h3>
<table>
<thead>
<tr><th>Garmethode</th><th>Zugegebenes Öl</th><th>Textur</th><th>Gut zu wissen</th></tr>
</thead>
<tbody>
<tr><td>Heißluftfritteuse</td><td>Sehr wenig (Spray oder 1 TL)</td><td>Knusprige Oberfläche</td><td>Schnelles Garen, Korb nicht überfüllen</td></tr>
<tr><td>Fritteuse mit Ölbad</td><td>Volles Ölbad</td><td>Sehr knusprig</td><td>Das Lebensmittel nimmt Öl auf</td></tr>
<tr><td>Backofen</td><td>Wenig bis mäßig</td><td>Goldbraun, manchmal weniger knusprig</td><td>Längeres Vorheizen, großes Volumen</td></tr>
<tr><td>Pfanne</td><td>Mäßig</td><td>Angebraten, goldbraun</td><td>Erfordert Aufmerksamkeit</td></tr>
<tr><td>Dampfgaren</td><td>Keines</td><td>Zart, ohne Kruste</td><td>Kein direkter Kontakt mit Kochwasser</td></tr>
</tbody>
</table>
<p>Eine ausführlichere Analyse finden Sie in unserem <a href="/de/blog/airfryer-vs-friteuse-traditionnelle">Vergleich Heißluftfritteuse vs. Fritteuse</a>.</p>

<h2>Acrylamid: in manchen Studien geringer, aber nicht verschwunden</h2>
<p>Acrylamid entsteht, wenn stärkehaltige Lebensmittel (Kartoffeln, Brot, Getreide) stark erhitzt werden. Die Europäische Behörde für Lebensmittelsicherheit (EFSA) kam 2015 zu dem Schluss, dass es das Krebsrisiko potenziell erhöhen kann, und empfiehlt, die Aufnahme zu begrenzen; auch die Lebensmittelindustrie in der EU muss Acrylamid nach geltenden Regeln minimieren.</p>
<p>Eine 2015 im <em>Journal of Food Science</em> veröffentlichte Studie (Sansano et al.) maß bei 180 °C in heißluftgegarten Pommes rund 90 % weniger Acrylamid als in frittierten. Weitere Arbeiten, zusammengefasst in einer wissenschaftlichen Übersicht von 2024, zeigen jedoch je nach Temperatur, Garzeit und Vorbereitung der Kartoffeln unterschiedliche Ergebnisse. Die richtigen Handgriffe sind daher wichtiger als das Gerät allein.</p>

<h3>So begrenzen Sie Acrylamid in der Heißluftfritteuse</h3>
<ul>
<li><strong>Vergolden statt verkohlen:</strong> Das raten europäische Lebensmittelbehörden. Je dunkler die Pommes, desto mehr Acrylamid enthalten sie.</li>
<li><strong>Kartoffeln bei etwa 170-180 °C garen</strong> und die Garzeit nicht „für mehr Knusprigkeit" verlängern.</li>
<li><strong>Rohe Pommes 15 bis 30 Minuten in kaltem Wasser einweichen</strong> und gut abtrocknen: Das Einweichen verringert den Zucker an der Oberfläche.</li>
<li><strong>Bei Tiefkühlprodukten die Packungsangaben einhalten</strong> und nicht überschreiten.</li>
</ul>

<h2>Nährstofferhalt: Was sich sagen lässt</h2>
<p>Wie viele Vitamine nach dem Garen erhalten bleiben, hängt von drei Faktoren ab: Temperatur, Dauer und Kontakt mit Wasser. Wasserlösliche Vitamine (Vitamin C, B-Vitamine) gehen beim Kochen von Gemüse teilweise ins Wasser über. Die Heißluftfritteuse vermeidet diesen Kontakt wie Backofen oder Dampfgarer, und ihre oft kürzere Garzeit begrenzt die Hitzeeinwirkung.</p>
<p>Die Ergebnisse unterscheiden sich allerdings stark von Lebensmittel zu Lebensmittel, und keine Methode ist für alle Nährstoffe die beste. Wichtig ist vor allem: Gemüse auf den Punkt garen statt austrocknen und die Garmethoden abwechseln.</p>

<h2>Die besten Lebensmittel für gesundes Garen mit Heißluft</h2>

<h3>1. Gemüse: knackig und aromatisch</h3>
<p>Trockene Hitze karamellisiert die Oberfläche und konzentriert das Aroma, während das Innere zart bleibt. Entdecken Sie unsere <a href="/de/blog/recettes-legumes-grilles-airfryer">Rezepte für Grillgemüse aus der Heißluftfritteuse</a>.</p>
<ul>
<li><strong>Brokkoli:</strong> 180 °C, 10-12 Min., mit einem Teelöffel Öl.</li>
<li><strong>Zucchini:</strong> 200 °C, 8-10 Min. in Scheiben.</li>
<li><strong>Blumenkohl:</strong> 190 °C, 15-18 Min. Die Röschen werden goldbraun und knusprig.</li>
<li><strong>Süßkartoffel:</strong> 190 °C, 15-20 Min. als Pommes. Liefert Beta-Carotin.</li>
<li><strong>Pilze:</strong> 190 °C, 10-12 Min. Saftig und voller Umami.</li>
</ul>

<h3>2. Magere Proteine: knusprig ohne dicke Panade</h3>
<p>Die Heißluftfritteuse bildet eine Kruste ohne dicke Panade. Siehe unsere <a href="/de/blog/recettes-poulet-croustillant-airfryer">Rezepte für knuspriges Hähnchen</a>.</p>
<ul>
<li><strong>Hähnchenbrust:</strong> 180 °C, 18-22 Min. je nach Dicke. Prüfen, ob sie durchgegart ist.</li>
<li><strong>Lachs:</strong> 200 °C, 8-10 Min. Ein fetter Fisch und eine Quelle für Omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15-18 Min., gut ausgepresst. Ideal für vegetarische Mahlzeiten.</li>
<li><strong>Garnelen:</strong> 200 °C, 6-8 Min. Sehr schnell gar.</li>
</ul>

<h3>3. Hülsenfrüchte und Getreide</h3>
<ul>
<li><strong>Geröstete Kichererbsen:</strong> 190 °C, 15-20 Min., gut abgetrocknet. Ein knuspriger, ballaststoffreicher Snack.</li>
<li><strong>Falafel:</strong> 180 °C, 12-15 Min., leicht geölt. Innen weich, ohne Frittieren.</li>
<li><strong>Quinoa-Taler:</strong> 180 °C, 10-12 Min. Knusprig und sättigend.</li>
</ul>

<h2>Ideen für gesunde Mahlzeiten aus der Heißluftfritteuse</h2>
<ul>
<li><strong>Montag:</strong> Hähnchen mit Zitrone und Kräutern, Knoblauch-Brokkoli.</li>
<li><strong>Dienstag:</strong> Lachsfilet, Süßkartoffel-Pommes.</li>
<li><strong>Mittwoch:</strong> Bowl mit knusprigem Tofu, gemischtem Ofengemüse und Naturreis.</li>
<li><strong>Donnerstag:</strong> Knoblauchgarnelen, gegrillte Zucchini.</li>
<li><strong>Freitag:</strong> hausgemachte Falafel, geröstete Paprika und Zwiebeln, Vollkorn-Pita.</li>
<li><strong>Samstag:</strong> Hähnchen in Haferflockenpanade, geröstete Pilze.</li>
<li><strong>Sonntag:</strong> geröstetes Wurzelgemüse, Eier im Förmchen (etwa 160 °C, 8 Min.).</li>
</ul>
<p>Zur Planung im Voraus siehe auch unseren Ratgeber <a href="/de/blog/meal-prep-airfryer-semaine">Meal Prep mit der Heißluftfritteuse</a>.</p>

<h2>5 Tipps für gesünderes Garen mit Heißluft</h2>
<ul>
<li><strong>1. Öl mit dem Sprüher dosieren:</strong> Ein paar Sprühstöße reichen für die meisten Rezepte, viel weniger als ein nach Augenmaß gegossener Esslöffel.</li>
<li><strong>2. Hitzebeständiges Öl wählen:</strong> Raffinierte Öle vertragen hohe Temperaturen besser. Lassen Sie das Öl nicht rauchen.</li>
<li><strong>3. Leichtere Panade:</strong> gemahlene Haferflocken, Sesam, gehackte Nüsse oder etwas Parmesan sorgen für Knusprigkeit.</li>
<li><strong>4. Marinaden ohne zugesetzten Zucker:</strong> Zitrone, Kräuter, Knoblauch, Ingwer und Gewürze bringen Geschmack. Süße Marinaden verbrennen zudem schneller.</li>
<li><strong>5. Den Korb nicht überladen:</strong> höchstens zu zwei Dritteln füllen und nach der Hälfte der Zeit schütteln.</li>
</ul>

<h2>Was die Heißluftfritteuse nicht kann</h2>
<p>Aus einem Berliner wird kein Gesundheitsessen. Die Heißluftfritteuse verringert das zugegebene Öl und kann so manche Gerichte leichter machen, doch die Ernährung insgesamt (Portionen, Abwechslung, Obst und Gemüse, wenig verarbeitete Lebensmittel) zählt weit mehr als das Küchengerät. Bei einem konkreten Gesundheitsziel (Gewicht, Cholesterin, Diabetes) holen Sie sich besser fachlichen Rat, statt sich auf ein Gerät zu verlassen.</p>

<h2>5 einfache gesunde Rezepte für die Heißluftfritteuse</h2>
<ul>
<li><strong>Zucchini-Pommes mit Parmesan:</strong> Zucchinistifte in einer dünnen Schicht aus Paniermehl und Parmesan. 180 °C, 12-14 Minuten.</li>
<li><strong>Knusprige Gewürz-Kichererbsen:</strong> abgetropfte, getrocknete Kichererbsen, 1 TL Öl, Kreuzkümmel, geräuchertes Paprikapulver. 200 °C, 15 Minuten, zwischendurch schütteln.</li>
<li><strong>Lachs mit Kräuterkruste:</strong> Lachsfilet, Paniermehl und frische Kräuter. 190 °C, 10-12 Minuten.</li>
<li><strong>Auberginen-Chips:</strong> dünne Scheiben, ein Sprühstoß Öl, Salz und Thymian. 180 °C, etwa 10 Minuten, Farbe im Blick behalten.</li>
<li><strong>Chicken Tikka:</strong> Hähnchenbrust in Joghurt-Gewürz-Marinade. 190 °C, etwa 18 Minuten.</li>
</ul>

<h2>Fazit: ein praktisches Werkzeug, kein Wundermittel</h2>
<p>Mit frischen Zutaten und wenig Öl erleichtert die Heißluftfritteuse eine leichtere Alltagsküche, vor allem wenn sie das Frittieren im Ölbad ersetzt. Ihre Vorteile sind real, hängen aber von den Lebensmitteln und der Zubereitung ab: goldgelb statt braun, ein nicht überfüllter Korb, wenig verarbeitete Zutaten.</p>
<p>Mehr dazu in unserem <a href="/de/guides/airfryers">kompletten Heißluftfritteusen-Ratgeber</a> und unserem <a href="/de/guides/airfryer-vs-four">Vergleich Heißluftfritteuse vs. Backofen</a>.</p>`,

    es: `<h2>¿La freidora de aire es realmente más saludable?</h2>
<p>Sí, frente a la fritura en abundante aceite, la freidora de aire permite cocinar con mucha menos grasa, porque una cucharada de aceite (o unas pocas pulverizaciones) sustituye a varios cientos de mililitros. Sin embargo, no convierte en sano un alimento que no lo es: el beneficio depende sobre todo de lo que pongas en la cesta.</p>
<p>Esta guía resume lo que se sabe de verdad, a partir de estudios publicados y de las recomendaciones de las autoridades de seguridad alimentaria, y después propone alimentos, trucos e ideas de comidas. No sustituye el consejo de un médico o dietista si sigues una dieta concreta.</p>

<h3>Menos aceite: de dónde viene la diferencia</h3>
<p>En una freidora clásica, el alimento queda sumergido y absorbe parte del aceite durante la cocción. En una freidora de aire, es aire muy caliente impulsado por un ventilador el que dora la superficie. Para unas patatas caseras suele bastar una cucharadita de aceite. Como referencia, una cucharada sopera de aceite aporta unas 120 kcal: lo que marca la diferencia es la cantidad de aceite añadido, mucho más que el aparato en sí.</p>
<p><strong>Ojo con los congelados prefritos:</strong> las patatas, los nuggets o los rebozados industriales suelen freírse antes de congelarse. Hacerlos en la freidora de aire evita añadir más aceite, pero su contenido en grasa sigue siendo el que indica el envase. Revisa la etiqueta nutricional.</p>

<h3>Comparativa de métodos de cocción</h3>
<table>
<thead>
<tr><th>Método</th><th>Aceite añadido</th><th>Textura</th><th>Conviene saber</th></tr>
</thead>
<tbody>
<tr><td>Freidora de aire</td><td>Muy poco (spray o 1 cucharadita)</td><td>Superficie crujiente</td><td>Cocción rápida, no llenar demasiado la cesta</td></tr>
<tr><td>Freidora de aceite</td><td>Baño completo</td><td>Muy crujiente</td><td>El alimento absorbe parte del aceite</td></tr>
<tr><td>Horno convencional</td><td>Poco o moderado</td><td>Dorado, a veces menos crujiente</td><td>Precalentado más largo, gran capacidad</td></tr>
<tr><td>Sartén</td><td>Moderado</td><td>Sellado, dorado</td><td>Requiere vigilancia</td></tr>
<tr><td>Vapor</td><td>Ninguno</td><td>Tierno, sin costra</td><td>Sin contacto directo con el agua de cocción</td></tr>
</tbody>
</table>
<p>Para un análisis más completo, consulta nuestra <a href="/es/blog/airfryer-vs-friteuse-traditionnelle">comparativa freidora de aire vs freidora tradicional</a>.</p>

<h2>La acrilamida: menor en algunos estudios, pero no desaparece</h2>
<p>La acrilamida se forma al cocinar a alta temperatura alimentos ricos en almidón (patatas, pan, cereales). La Autoridad Europea de Seguridad Alimentaria (EFSA) concluyó en 2015 que podría aumentar el riesgo de cáncer y recomienda limitar la exposición; la normativa europea también obliga a la industria alimentaria a reducirla.</p>
<p>Un estudio publicado en 2015 en el <em>Journal of Food Science</em> (Sansano et al.) midió, a 180 °C, alrededor de un 90 % menos de acrilamida en patatas hechas con aire caliente que en patatas fritas en aceite. Otros trabajos, reunidos en una revisión científica de 2024, muestran resultados variables según la temperatura, el tiempo y la preparación de las patatas. Por eso los buenos hábitos cuentan más que el aparato.</p>

<h3>Cómo limitar la acrilamida en la freidora de aire</h3>
<ul>
<li><strong>Busca un color dorado claro:</strong> es el consejo que difunden las autoridades europeas de seguridad alimentaria. Cuanto más tostadas, más acrilamida contienen.</li>
<li><strong>Mantente en torno a 170-180 °C para las patatas</strong> y no alargues la cocción «para que queden más crujientes».</li>
<li><strong>Remoja las patatas crudas</strong> de 15 a 30 minutos en agua fría y sécalas bien: el remojo reduce los azúcares de la superficie.</li>
<li><strong>Sigue las instrucciones del envase</strong> en los congelados, sin superarlas.</li>
</ul>

<h2>Conservación de nutrientes: lo que se puede afirmar</h2>
<p>La cantidad de vitaminas que se conserva depende de tres factores: la temperatura, el tiempo y el contacto con el agua. Las vitaminas hidrosolubles (vitamina C, vitaminas del grupo B) pasan en parte al agua cuando se hierven las verduras. La freidora de aire, como el horno o el vapor, evita ese contacto, y su cocción, a menudo más corta que la de un horno convencional, limita la exposición al calor.</p>
<p>Aun así, los resultados varían mucho de un alimento a otro y ningún método es el mejor para todos los nutrientes. Lo esencial: cocina las verduras en su punto, sin resecarlas, y alterna los métodos de cocción.</p>

<h2>Los mejores alimentos para cocinar sano en la freidora de aire</h2>

<h3>1. Verduras: crujientes y sabrosas</h3>
<p>El calor seco carameliza la superficie de las verduras y concentra su sabor manteniendo el interior tierno. Descubre nuestras <a href="/es/blog/recettes-legumes-grilles-airfryer">recetas de verduras asadas en freidora de aire</a>.</p>
<ul>
<li><strong>Brócoli:</strong> 180 °C, 10-12 min, con una cucharadita de aceite.</li>
<li><strong>Calabacín:</strong> 200 °C, 8-10 min en rodajas.</li>
<li><strong>Coliflor:</strong> 190 °C, 15-18 min. Los ramilletes quedan dorados y crujientes.</li>
<li><strong>Boniato:</strong> 190 °C, 15-20 min en bastones. Aporta betacaroteno.</li>
<li><strong>Champiñones:</strong> 190 °C, 10-12 min. Jugosos y llenos de sabor umami.</li>
</ul>

<h3>2. Proteínas magras: crujientes sin rebozado grueso</h3>
<p>La freidora de aire forma una costra sin necesidad de un rebozado grueso. Consulta nuestras <a href="/es/blog/recettes-poulet-croustillant-airfryer">recetas de pollo crujiente</a>.</p>
<ul>
<li><strong>Pechuga de pollo:</strong> 180 °C, 18-22 min según el grosor. Comprueba que esté bien hecha por dentro.</li>
<li><strong>Salmón:</strong> 200 °C, 8-10 min. Un pescado azul, fuente de omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15-18 min, bien escurrido. Ideal para comidas vegetarianas.</li>
<li><strong>Gambas:</strong> 200 °C, 6-8 min. Se hacen muy rápido.</li>
</ul>

<h3>3. Legumbres y cereales</h3>
<ul>
<li><strong>Garbanzos tostados:</strong> 190 °C, 15-20 min, bien secos. Un tentempié crujiente y rico en fibra.</li>
<li><strong>Faláfel:</strong> 180 °C, 12-15 min, ligeramente aceitados. Tiernos por dentro sin freír.</li>
<li><strong>Hamburguesas de quinoa:</strong> 180 °C, 10-12 min. Crujientes y saciantes.</li>
</ul>

<h2>Ideas de comidas sanas para la semana</h2>
<ul>
<li><strong>Lunes:</strong> pollo al limón y hierbas, brócoli al ajillo.</li>
<li><strong>Martes:</strong> lomo de salmón, bastones de boniato.</li>
<li><strong>Miércoles:</strong> bowl de tofu crujiente con verduras asadas variadas y arroz integral.</li>
<li><strong>Jueves:</strong> gambas al ajillo, calabacín a la plancha.</li>
<li><strong>Viernes:</strong> faláfel casero, pimientos y cebolla asados, pan de pita integral.</li>
<li><strong>Sábado:</strong> pollo rebozado con copos de avena, champiñones asados.</li>
<li><strong>Domingo:</strong> tubérculos asados, huevos al horno (unos 160 °C, 8 min).</li>
</ul>
<p>Para organizar estas comidas con antelación, consulta también nuestro <a href="/es/blog/meal-prep-airfryer-semaine">meal prep semanal con freidora de aire</a>.</p>

<h2>5 trucos para cocinar más sano en la freidora de aire</h2>
<ul>
<li><strong>1. Dosifica el aceite con un pulverizador:</strong> unas pocas pulverizaciones bastan para la mayoría de recetas, mucho menos que una cucharada echada a ojo.</li>
<li><strong>2. Elige un aceite apto para altas temperaturas:</strong> los aceites refinados soportan mejor el calor. No dejes que el aceite humee.</li>
<li><strong>3. Aligera el rebozado:</strong> copos de avena triturados, sésamo, frutos secos picados o un poco de parmesano dan un toque crujiente.</li>
<li><strong>4. Marinados sin azúcar añadido:</strong> limón, hierbas, ajo, jengibre y especias aportan sabor. Los marinados dulces, además, se queman antes.</li>
<li><strong>5. No sobrecargues la cesta:</strong> llénala como máximo hasta dos tercios y agítala a mitad de cocción.</li>
</ul>

<h2>Lo que la freidora de aire no hace</h2>
<p>La freidora de aire no convierte un dónut en comida sana. Reduce el aceite añadido, lo que puede aligerar algunos platos, pero el equilibrio general de la alimentación (raciones, variedad, frutas y verduras, alimentos poco procesados) pesa mucho más que el electrodoméstico. Si tienes un objetivo de salud concreto (peso, colesterol, diabetes), consulta a un profesional sanitario en lugar de confiar en un aparato.</p>

<h2>5 recetas saludables y fáciles en freidora de aire</h2>
<ul>
<li><strong>Bastones de calabacín al parmesano:</strong> calabacín en bastones con una fina capa de pan rallado y parmesano. 180 °C, 12-14 minutos.</li>
<li><strong>Garbanzos crujientes especiados:</strong> garbanzos escurridos y secos, 1 cucharadita de aceite, comino y pimentón ahumado. 200 °C, 15 minutos, agitando la cesta.</li>
<li><strong>Salmón con costra de hierbas:</strong> lomo de salmón, pan rallado y hierbas frescas. 190 °C, 10-12 minutos.</li>
<li><strong>Chips de berenjena:</strong> rodajas finas, una pulverización de aceite, sal y tomillo. 180 °C, unos 10 minutos, vigilando el color.</li>
<li><strong>Pollo tikka:</strong> pechuga marinada en yogur y especias. 190 °C, unos 18 minutos.</li>
</ul>

<h2>Conclusión: una herramienta práctica, no un milagro</h2>
<p>Con ingredientes frescos y poco aceite, la freidora de aire facilita una cocina más ligera en el día a día, sobre todo si sustituye a la fritura en aceite. Sus ventajas son reales, pero dependen de los alimentos y de la forma de cocinar: dorado y no tostado, cesta sin sobrecargar, ingredientes poco procesados.</p>
<p>Para saber más, consulta nuestra <a href="/es/guides/airfryers">guía completa de freidoras de aire</a> y nuestra <a href="/es/guides/airfryer-vs-four">comparativa freidora de aire vs horno</a>.</p>`,

    it: `<h2>La friggitrice ad aria è davvero più sana?</h2>
<p>Sì, rispetto alla frittura a immersione la friggitrice ad aria permette di cucinare con molti meno grassi, perché un cucchiaio d'olio (o qualche spruzzo) sostituisce diverse centinaia di millilitri. Non rende però sano un alimento che non lo è: il vantaggio dipende soprattutto da cosa metti nel cestello.</p>
<p>Questa guida riassume ciò che si sa davvero, sulla base di studi pubblicati e delle raccomandazioni delle autorità per la sicurezza alimentare, e poi propone alimenti, consigli e idee per i pasti. Non sostituisce il parere di un medico o di un dietista se segui una dieta particolare.</p>

<h3>Meno olio: da dove nasce la differenza</h3>
<p>Nella friggitrice tradizionale l'alimento è immerso e assorbe parte dell'olio durante la cottura. Nella friggitrice ad aria è l'aria molto calda, mossa da una ventola, a dorare la superficie. Per le patatine fatte in casa di solito basta un cucchiaino d'olio. Come riferimento, un cucchiaio d'olio apporta circa 120 kcal: a fare la differenza è la quantità d'olio aggiunta, molto più dell'apparecchio in sé.</p>
<p><strong>Attenzione ai surgelati prefritti:</strong> patatine, nuggets e frittelle industriali sono spesso già fritti prima del congelamento. Cuocerli ad aria evita di aggiungere olio, ma il loro contenuto di grassi resta quello indicato sulla confezione. Controlla l'etichetta nutrizionale.</p>

<h3>Confronto tra metodi di cottura</h3>
<table>
<thead>
<tr><th>Metodo</th><th>Olio aggiunto</th><th>Consistenza</th><th>Da sapere</th></tr>
</thead>
<tbody>
<tr><td>Friggitrice ad aria</td><td>Pochissimo (spray o 1 cucchiaino)</td><td>Superficie croccante</td><td>Cottura rapida, non riempire troppo il cestello</td></tr>
<tr><td>Friggitrice a olio</td><td>Bagno d'olio completo</td><td>Molto croccante</td><td>L'alimento assorbe parte dell'olio</td></tr>
<tr><td>Forno tradizionale</td><td>Poco o moderato</td><td>Dorato, a volte meno croccante</td><td>Preriscaldamento più lungo, grande capienza</td></tr>
<tr><td>Padella</td><td>Moderato</td><td>Rosolato, dorato</td><td>Richiede attenzione</td></tr>
<tr><td>Vapore</td><td>Nessuno</td><td>Tenero, senza crosta</td><td>Nessun contatto diretto con l'acqua di cottura</td></tr>
</tbody>
</table>
<p>Per un'analisi più completa, consulta il nostro <a href="/it/blog/airfryer-vs-friteuse-traditionnelle">confronto friggitrice ad aria vs friggitrice tradizionale</a>.</p>

<h2>L'acrilammide: minore in alcuni studi, ma non eliminata</h2>
<p>L'acrilammide si forma quando gli alimenti ricchi di amido (patate, pane, cereali) vengono cotti ad alte temperature. Nel 2015 l'Autorità europea per la sicurezza alimentare (EFSA) ha concluso che potrebbe aumentare il rischio di cancro e consiglia di limitarne l'esposizione; le norme europee impongono inoltre all'industria alimentare di ridurla.</p>
<p>Uno studio pubblicato nel 2015 sul <em>Journal of Food Science</em> (Sansano et al.) ha misurato, a 180 °C, circa il 90% di acrilammide in meno nelle patatine cotte ad aria rispetto a quelle fritte in olio. Altri lavori, raccolti in una revisione scientifica del 2024, mostrano però risultati variabili a seconda di temperatura, tempo e preparazione delle patate. Le buone abitudini contano quindi più dell'apparecchio.</p>

<h3>Come limitare l'acrilammide nella friggitrice ad aria</h3>
<ul>
<li><strong>Punta a un colore giallo dorato:</strong> è il consiglio diffuso dalle autorità europee per la sicurezza alimentare. Più le patatine scuriscono, più acrilammide contengono.</li>
<li><strong>Resta intorno a 170-180 °C per le patate</strong> ed evita di prolungare la cottura «per renderle più croccanti».</li>
<li><strong>Metti a bagno le patatine crude</strong> in acqua fredda per 15-30 minuti, poi asciugale bene: l'ammollo riduce gli zuccheri in superficie.</li>
<li><strong>Segui le istruzioni della confezione</strong> per i surgelati, senza superarle.</li>
</ul>

<h2>Conservazione dei nutrienti: cosa si può dire</h2>
<p>La quantità di vitamine che resta dopo la cottura dipende da tre fattori: temperatura, durata e contatto con l'acqua. Le vitamine idrosolubili (vitamina C, vitamine del gruppo B) passano in parte nell'acqua quando si lessano le verdure. La friggitrice ad aria, come il forno o il vapore, evita questo contatto, e la sua cottura, spesso più breve di quella di un forno tradizionale, limita l'esposizione al calore.</p>
<p>I risultati variano comunque molto da un alimento all'altro e nessun metodo è il migliore per tutti i nutrienti. L'essenziale: cuoci le verdure al punto giusto senza seccarle e alterna i metodi di cottura.</p>

<h2>I migliori alimenti per cucinare sano con la friggitrice ad aria</h2>

<h3>1. Le verdure: croccanti e saporite</h3>
<p>Il calore secco caramellizza la superficie delle verdure e ne concentra il sapore, mantenendo l'interno tenero. Scopri le nostre <a href="/it/blog/recettes-legumes-grilles-airfryer">ricette di verdure grigliate nella friggitrice ad aria</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180 °C, 10-12 min, con un cucchiaino d'olio.</li>
<li><strong>Zucchine:</strong> 200 °C, 8-10 min a rondelle.</li>
<li><strong>Cavolfiore:</strong> 190 °C, 15-18 min. Le cimette diventano dorate e croccanti.</li>
<li><strong>Patata dolce:</strong> 190 °C, 15-20 min a bastoncini. Apporta betacarotene.</li>
<li><strong>Funghi:</strong> 190 °C, 10-12 min. Succosi e ricchi di sapore umami.</li>
</ul>

<h3>2. Le proteine magre: croccanti senza panatura spessa</h3>
<p>La friggitrice ad aria forma una crosticina senza bisogno di una panatura spessa. Consulta le nostre <a href="/it/blog/recettes-poulet-croustillant-airfryer">ricette di pollo croccante</a>.</p>
<ul>
<li><strong>Petto di pollo:</strong> 180 °C, 18-22 min a seconda dello spessore. Verifica che sia ben cotto all'interno.</li>
<li><strong>Salmone:</strong> 200 °C, 8-10 min. Un pesce grasso, fonte di omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15-18 min, ben pressato. Ideale per i pasti vegetariani.</li>
<li><strong>Gamberi:</strong> 200 °C, 6-8 min. Cottura rapidissima.</li>
</ul>

<h3>3. Legumi e cereali</h3>
<ul>
<li><strong>Ceci tostati:</strong> 190 °C, 15-20 min, ben asciugati. Uno snack croccante e ricco di fibre.</li>
<li><strong>Falafel:</strong> 180 °C, 12-15 min, leggermente unti. Morbidi dentro senza frittura.</li>
<li><strong>Burger di quinoa:</strong> 180 °C, 10-12 min. Croccanti e sazianti.</li>
</ul>

<h2>Idee per pasti sani della settimana</h2>
<ul>
<li><strong>Lunedì:</strong> pollo al limone ed erbe, broccoli all'aglio.</li>
<li><strong>Martedì:</strong> trancio di salmone, bastoncini di patata dolce.</li>
<li><strong>Mercoledì:</strong> bowl di tofu croccante con verdure grigliate miste e riso integrale.</li>
<li><strong>Giovedì:</strong> gamberi all'aglio, zucchine grigliate.</li>
<li><strong>Venerdì:</strong> falafel fatti in casa, peperoni e cipolle grigliati, pita integrale.</li>
<li><strong>Sabato:</strong> pollo panato ai fiocchi d'avena, funghi grigliati.</li>
<li><strong>Domenica:</strong> ortaggi a radice arrostiti, uova in cocotte (circa 160 °C, 8 min).</li>
</ul>
<p>Per organizzare i pasti in anticipo, leggi anche il nostro <a href="/it/blog/meal-prep-airfryer-semaine">meal prep settimanale con la friggitrice ad aria</a>.</p>

<h2>5 consigli per cucinare più sano con la friggitrice ad aria</h2>
<ul>
<li><strong>1. Dosa l'olio con uno spruzzino:</strong> pochi spruzzi bastano per la maggior parte delle ricette, molto meno di un cucchiaio versato a occhio.</li>
<li><strong>2. Scegli un olio adatto alle alte temperature:</strong> gli oli raffinati reggono meglio il calore. Non lasciare che l'olio fumi.</li>
<li><strong>3. Alleggerisci la panatura:</strong> fiocchi d'avena frullati, sesamo, frutta secca tritata o un po' di parmigiano danno croccantezza.</li>
<li><strong>4. Marinature senza zuccheri aggiunti:</strong> limone, erbe, aglio, zenzero e spezie danno sapore. Le marinature dolci, inoltre, bruciano prima.</li>
<li><strong>5. Non sovraccaricare il cestello:</strong> riempilo al massimo per due terzi e scuotilo a metà cottura.</li>
</ul>

<h2>Cosa la friggitrice ad aria non fa</h2>
<p>La friggitrice ad aria non trasforma una ciambella in un alimento sano. Riduce l'olio aggiunto, il che può alleggerire alcuni piatti, ma l'equilibrio generale dell'alimentazione (porzioni, varietà, frutta e verdura, alimenti poco trasformati) conta molto più dell'elettrodomestico. Se hai un obiettivo di salute preciso (peso, colesterolo, diabete), chiedi consiglio a un professionista sanitario invece di affidarti a un apparecchio.</p>

<h2>5 ricette sane e facili con la friggitrice ad aria</h2>
<ul>
<li><strong>Bastoncini di zucchine al parmigiano:</strong> zucchine a bastoncini con un sottile strato di pangrattato e parmigiano. 180 °C, 12-14 minuti.</li>
<li><strong>Ceci croccanti speziati:</strong> ceci scolati e asciugati, 1 cucchiaino d'olio, cumino e paprika affumicata. 200 °C, 15 minuti, scuotendo il cestello.</li>
<li><strong>Salmone in crosta di erbe:</strong> trancio di salmone, pangrattato ed erbe fresche. 190 °C, 10-12 minuti.</li>
<li><strong>Chips di melanzana:</strong> fette sottili, uno spruzzo d'olio, sale e timo. 180 °C, circa 10 minuti, controllando il colore.</li>
<li><strong>Pollo tikka:</strong> petto di pollo marinato nello yogurt e nelle spezie. 190 °C, circa 18 minuti.</li>
</ul>

<h2>Conclusione: uno strumento pratico, non un miracolo</h2>
<p>Con ingredienti freschi e poco olio, la friggitrice ad aria rende più facile una cucina leggera di tutti i giorni, soprattutto se sostituisce la frittura in olio. I suoi vantaggi sono reali ma dipendono dagli alimenti scelti e dal modo di cuocere: dorato e non scuro, cestello non sovraccarico, ingredienti poco trasformati.</p>
<p>Per approfondire, esplora la nostra <a href="/it/guides/airfryers">guida completa alle friggitrici ad aria</a> e il nostro <a href="/it/guides/airfryer-vs-four">confronto friggitrice ad aria vs forno</a>.</p>`,

    nl: `<h2>Is de airfryer echt gezonder?</h2>
<p>Ja, vergeleken met frituren in een oliebad kook je met een airfryer met veel minder vet, omdat een lepel olie (of een paar keer sprayen) enkele honderden milliliters vervangt. Een ongezond product maakt hij echter niet gezond: het voordeel hangt vooral af van wat je in de mand legt.</p>
<p>Deze gids zet op een rij wat er echt bekend is, op basis van gepubliceerd onderzoek en de adviezen van voedselveiligheidsinstanties, en geeft daarna ingrediënten, tips en maaltijdideeën. Hij vervangt niet het advies van een arts of diëtist als je een specifiek dieet volgt.</p>

<h3>Minder olie: waar het verschil vandaan komt</h3>
<p>In een gewone friteuse ligt het eten onder in de olie en neemt het tijdens het bakken een deel daarvan op. In een airfryer zorgt zeer hete lucht, rondgeblazen door een ventilator, voor de krokante korst. Voor zelfgemaakte friet is meestal een theelepel olie genoeg. Ter vergelijking: een eetlepel olie levert ongeveer 120 kcal. Het verschil zit dus vooral in de hoeveelheid toegevoegde olie, veel meer dan in het apparaat zelf.</p>
<p><strong>Let op bij voorgebakken diepvriesproducten:</strong> friet, nuggets en kroketten uit de winkel zijn vaak al gefrituurd voordat ze worden ingevroren. In de airfryer voeg je geen olie toe, maar het vetgehalte blijft wat op de verpakking staat. Kijk dus naar het voedingsetiket.</p>

<h3>Bereidingswijzen vergeleken</h3>
<table>
<thead>
<tr><th>Bereidingswijze</th><th>Toegevoegde olie</th><th>Textuur</th><th>Goed om te weten</th></tr>
</thead>
<tbody>
<tr><td>Airfryer</td><td>Heel weinig (spray of 1 theelepel)</td><td>Krokante buitenkant</td><td>Snel gaar, mand niet te vol doen</td></tr>
<tr><td>Friteuse met oliebad</td><td>Volledig oliebad</td><td>Zeer krokant</td><td>Het eten neemt een deel van de olie op</td></tr>
<tr><td>Gewone oven</td><td>Weinig tot matig</td><td>Goudbruin, soms minder krokant</td><td>Langer voorverwarmen, grote inhoud</td></tr>
<tr><td>Koekenpan</td><td>Matig</td><td>Aangebraden, goudbruin</td><td>Vraagt aandacht</td></tr>
<tr><td>Stomen</td><td>Geen</td><td>Zacht, zonder korst</td><td>Geen direct contact met kookwater</td></tr>
</tbody>
</table>
<p>Voor een uitgebreidere analyse, zie onze <a href="/nl/blog/airfryer-vs-friteuse-traditionnelle">vergelijking airfryer vs traditionele friteuse</a>.</p>

<h2>Acrylamide: lager in sommige studies, maar niet verdwenen</h2>
<p>Acrylamide ontstaat wanneer zetmeelrijke producten (aardappelen, brood, granen) op hoge temperatuur worden bereid. De Europese Autoriteit voor voedselveiligheid (EFSA) concludeerde in 2015 dat het mogelijk het risico op kanker verhoogt en adviseert de blootstelling te beperken; Europese regels verplichten de voedingsindustrie bovendien om het te verminderen.</p>
<p>Een studie uit 2015 in het <em>Journal of Food Science</em> (Sansano et al.) mat bij 180 °C ongeveer 90% minder acrylamide in friet uit de hetelucht dan in gefrituurde friet. Ander onderzoek, samengebracht in een wetenschappelijk overzicht uit 2024, laat echter wisselende resultaten zien, afhankelijk van temperatuur, tijd en voorbereiding van de aardappelen. Goede gewoonten tellen dus meer dan het apparaat alleen.</p>

<h3>Zo beperk je acrylamide in de airfryer</h3>
<ul>
<li><strong>Bak goudgeel, niet bruin:</strong> dat is het advies van Europese voedselveiligheidsinstanties. Hoe bruiner de friet, hoe meer acrylamide.</li>
<li><strong>Blijf rond 170-180 °C voor aardappelen</strong> en verleng de baktijd niet „voor extra krokantheid".</li>
<li><strong>Week rauwe friet 15 tot 30 minuten in koud water</strong> en dep ze goed droog: weken vermindert de suikers aan de oppervlakte.</li>
<li><strong>Volg bij diepvriesproducten de instructies op de verpakking</strong> en ga er niet overheen.</li>
</ul>

<h2>Behoud van voedingsstoffen: wat we kunnen zeggen</h2>
<p>Hoeveel vitamines na het koken overblijven, hangt af van drie factoren: temperatuur, tijd en contact met water. Wateroplosbare vitamines (vitamine C, B-vitamines) komen deels in het water terecht als je groenten kookt. De airfryer vermijdt dat contact, net als de oven of het stomen, en de vaak kortere bereidingstijd dan in een gewone oven beperkt de blootstelling aan hitte.</p>
<p>De resultaten verschillen wel sterk per product, en geen enkele methode is de beste voor alle voedingsstoffen. Onthoud vooral: gaar groenten precies goed in plaats van ze uit te drogen, en wissel bereidingswijzen af.</p>

<h2>De beste ingrediënten om gezond te koken in de airfryer</h2>

<h3>1. Groenten: knapperig en smaakvol</h3>
<p>Droge hitte karameliseert de buitenkant van groenten en versterkt hun smaak, terwijl de binnenkant zacht blijft. Ontdek onze <a href="/nl/blog/recettes-legumes-grilles-airfryer">recepten voor geroosterde groenten uit de airfryer</a>.</p>
<ul>
<li><strong>Broccoli:</strong> 180 °C, 10-12 min, met een theelepel olie.</li>
<li><strong>Courgette:</strong> 200 °C, 8-10 min in plakjes.</li>
<li><strong>Bloemkool:</strong> 190 °C, 15-18 min. De roosjes worden goudbruin en knapperig.</li>
<li><strong>Zoete aardappel:</strong> 190 °C, 15-20 min als friet. Bevat bètacaroteen.</li>
<li><strong>Champignons:</strong> 190 °C, 10-12 min. Sappig en vol umami.</li>
</ul>

<h3>2. Magere eiwitten: krokant zonder dikke paneerlaag</h3>
<p>De airfryer vormt een korstje zonder dikke paneerlaag. Bekijk onze <a href="/nl/blog/recettes-poulet-croustillant-airfryer">recepten voor krokante kip</a>.</p>
<ul>
<li><strong>Kipfilet:</strong> 180 °C, 18-22 min afhankelijk van de dikte. Controleer of de kip helemaal gaar is.</li>
<li><strong>Zalm:</strong> 200 °C, 8-10 min. Een vette vis en een bron van omega-3.</li>
<li><strong>Tofu:</strong> 190 °C, 15-18 min, goed uitgeperst. Ideaal voor vegetarische maaltijden.</li>
<li><strong>Garnalen:</strong> 200 °C, 6-8 min. Heel snel gaar.</li>
</ul>

<h3>3. Peulvruchten en granen</h3>
<ul>
<li><strong>Geroosterde kikkererwten:</strong> 190 °C, 15-20 min, goed drooggedept. Een knapperige, vezelrijke snack.</li>
<li><strong>Falafel:</strong> 180 °C, 12-15 min, licht ingevet. Zacht vanbinnen zonder frituren.</li>
<li><strong>Quinoaburgers:</strong> 180 °C, 10-12 min. Krokant en vullend.</li>
</ul>

<h2>Ideeën voor gezonde airfryer-maaltijden voor de week</h2>
<ul>
<li><strong>Maandag:</strong> kip met citroen en kruiden, broccoli met knoflook.</li>
<li><strong>Dinsdag:</strong> zalmfilet, friet van zoete aardappel.</li>
<li><strong>Woensdag:</strong> bowl met krokante tofu, gemengde geroosterde groenten en zilvervliesrijst.</li>
<li><strong>Donderdag:</strong> knoflookgarnalen, gegrilde courgette.</li>
<li><strong>Vrijdag:</strong> zelfgemaakte falafel, geroosterde paprika en ui, volkoren pita.</li>
<li><strong>Zaterdag:</strong> kip met een korstje van havervlokken, geroosterde champignons.</li>
<li><strong>Zondag:</strong> geroosterde wortelgroenten, eitjes in een ovenschaaltje (ongeveer 160 °C, 8 min).</li>
</ul>
<p>Om deze maaltijden vooruit te plannen, lees ook onze gids over <a href="/nl/blog/meal-prep-airfryer-semaine">meal prep met de airfryer voor de hele week</a>.</p>

<h2>5 tips om gezonder te koken in de airfryer</h2>
<ul>
<li><strong>1. Doseer olie met een sprayer:</strong> een paar keer sprayen is genoeg voor de meeste recepten, veel minder dan een op het oog gegoten eetlepel.</li>
<li><strong>2. Kies olie die tegen hitte kan:</strong> geraffineerde oliën verdragen hoge temperaturen beter. Laat de olie niet roken.</li>
<li><strong>3. Maak de paneerlaag lichter:</strong> gemalen havervlokken, sesamzaad, gehakte noten of een beetje parmezaan zorgen voor krokantheid.</li>
<li><strong>4. Marinades zonder toegevoegde suiker:</strong> citroen, kruiden, knoflook, gember en specerijen geven smaak. Zoete marinades verbranden bovendien sneller.</li>
<li><strong>5. Doe de mand niet te vol:</strong> vul hem hooguit voor twee derde en schud halverwege.</li>
</ul>

<h2>Wat de airfryer niet doet</h2>
<p>Een airfryer maakt van een donut geen gezond eten. Hij vermindert de toegevoegde olie, wat sommige gerechten lichter kan maken, maar je voedingspatroon als geheel (porties, variatie, groente en fruit, weinig bewerkte producten) telt veel zwaarder dan het keukenapparaat. Heb je een concreet gezondheidsdoel (gewicht, cholesterol, diabetes), vraag dan advies aan een zorgverlener in plaats van te vertrouwen op een apparaat.</p>

<h2>5 makkelijke gezonde airfryer-recepten</h2>
<ul>
<li><strong>Courgettefriet met parmezaan:</strong> courgettereepjes met een dun laagje paneermeel en parmezaan. 180 °C, 12-14 minuten.</li>
<li><strong>Krokante gekruide kikkererwten:</strong> uitgelekte, drooggedepte kikkererwten, 1 theelepel olie, komijn en gerookte paprika. 200 °C, 15 minuten, tussendoor schudden.</li>
<li><strong>Zalm met kruidenkorst:</strong> zalmfilet, paneermeel en verse kruiden. 190 °C, 10-12 minuten.</li>
<li><strong>Auberginechips:</strong> dunne plakjes, één keer sprayen met olie, zout en tijm. 180 °C, ongeveer 10 minuten, let op de kleur.</li>
<li><strong>Kip tikka:</strong> kipfilet gemarineerd in yoghurt en specerijen. 190 °C, ongeveer 18 minuten.</li>
</ul>

<h2>Conclusie: een handig hulpmiddel, geen wondermiddel</h2>
<p>Met verse ingrediënten en weinig olie maakt de airfryer lichter koken in het dagelijks leven makkelijker, vooral als hij het frituren in olie vervangt. De voordelen zijn echt, maar hangen af van wat je kiest en hoe je het bereidt: goudgeel in plaats van bruin, een mand die niet te vol is, weinig bewerkte ingrediënten.</p>
<p>Lees verder in onze <a href="/nl/guides/airfryers">complete airfryergids</a> en onze <a href="/nl/guides/airfryer-vs-four">vergelijking airfryer vs oven</a>.</p>`,
  },
  faq: [
    {
      question: {
        fr: "L'airfryer est-il vraiment plus sain que la friture traditionnelle ?",
        en: 'Is an air fryer really healthier than traditional deep frying?',
        de: 'Ist die Heißluftfritteuse wirklich gesünder als herkömmliches Frittieren?',
        es: '¿La freidora de aire es realmente más saludable que la fritura tradicional?',
        it: 'La friggitrice ad aria è davvero più sana della frittura tradizionale?',
        nl: 'Is de airfryer echt gezonder dan traditioneel frituren?',
      },
      answer: {
        fr: "Par rapport à la friture dans un bain d'huile, oui : on utilise beaucoup moins d'huile, souvent une cuillère à café ou quelques pulvérisations. L'écart réel dépend de la recette, et un produit surgelé déjà pré-frit garde la teneur en matières grasses indiquée sur son emballage.",
        en: 'Compared with deep frying, yes: you use far less oil, often a teaspoon or a few sprays. The real difference depends on the recipe, and a pre-fried frozen product keeps the fat content shown on its pack.',
        de: 'Im Vergleich zum Frittieren im Ölbad ja: Man braucht viel weniger Öl, oft nur einen Teelöffel oder ein paar Sprühstöße. Der tatsächliche Unterschied hängt vom Rezept ab, und vorfrittierte Tiefkühlware behält den auf der Packung angegebenen Fettgehalt.',
        es: 'Frente a la fritura en aceite, sí: se usa mucho menos aceite, a menudo una cucharadita o unas pocas pulverizaciones. La diferencia real depende de la receta, y un congelado prefrito mantiene el contenido de grasa que indica su envase.',
        it: 'Rispetto alla frittura a immersione, sì: si usa molto meno olio, spesso un cucchiaino o qualche spruzzo. La differenza reale dipende dalla ricetta, e un surgelato prefritto mantiene il contenuto di grassi indicato sulla confezione.',
        nl: 'Vergeleken met frituren in olie wel: je gebruikt veel minder olie, vaak een theelepel of een paar keer sprayen. Het echte verschil hangt af van het recept, en een voorgebakken diepvriesproduct houdt het vetgehalte dat op de verpakking staat.',
      },
    },
    {
      question: {
        fr: "Faut-il utiliser de l'huile dans un airfryer ?",
        en: 'Do you need to use oil in an air fryer?',
        de: 'Muss man Öl in der Heißluftfritteuse verwenden?',
        es: '¿Hay que usar aceite en una freidora de aire?',
        it: 'Bisogna usare olio nella friggitrice ad aria?',
        nl: 'Moet je olie gebruiken in een airfryer?',
      },
      answer: {
        fr: "Ce n'est pas obligatoire, mais un peu d'huile aide les aliments frais à dorer et à ne pas se dessécher. Quelques pulvérisations ou une cuillère à café suffisent généralement. Préférez une huile raffinée qui supporte la chaleur et évitez de la laisser fumer.",
        en: "It isn't mandatory, but a little oil helps fresh food brown and stops it drying out. A few sprays or a teaspoon is usually enough. Prefer a refined oil that copes with heat and don't let it smoke.",
        de: 'Pflicht ist es nicht, aber etwas Öl hilft frischen Lebensmitteln zu bräunen und nicht auszutrocknen. Ein paar Sprühstöße oder ein Teelöffel reichen meist. Wählen Sie ein hitzebeständiges raffiniertes Öl und lassen Sie es nicht rauchen.',
        es: 'No es obligatorio, pero un poco de aceite ayuda a que los alimentos frescos se doren y no se resequen. Suelen bastar unas pulverizaciones o una cucharadita. Elige un aceite refinado que aguante el calor y no dejes que humee.',
        it: "Non è obbligatorio, ma un po' d'olio aiuta gli alimenti freschi a dorarsi e a non seccarsi. Di solito bastano pochi spruzzi o un cucchiaino. Preferisci un olio raffinato che regge il calore e non lasciarlo fumare.",
        nl: 'Het is niet verplicht, maar een beetje olie helpt vers eten te bruinen en niet uit te drogen. Een paar keer sprayen of een theelepel is meestal genoeg. Kies een geraffineerde olie die tegen hitte kan en laat hem niet roken.',
      },
    },
    {
      question: {
        fr: 'Combien de calories économise-t-on avec un airfryer ?',
        en: 'How many calories do you save with an air fryer?',
        de: 'Wie viele Kalorien spart man mit einer Heißluftfritteuse?',
        es: '¿Cuántas calorías se ahorran con una freidora de aire?',
        it: 'Quante calorie si risparmiano con una friggitrice ad aria?',
        nl: 'Hoeveel calorieën bespaar je met een airfryer?',
      },
      answer: {
        fr: "Il n'existe pas de chiffre unique : tout dépend de l'aliment et de la quantité d'huile qu'il aurait absorbée en friture. Le levier principal est l'huile ajoutée, sachant qu'une cuillère à soupe apporte environ 120 kcal. Pour un objectif de poids précis, demandez conseil à un professionnel de santé.",
        en: 'There is no single figure: it depends on the food and how much oil it would have absorbed in a deep fryer. The main lever is added oil, and one tablespoon provides around 120 kcal. For a specific weight goal, ask a health professional for advice.',
        de: 'Eine feste Zahl gibt es nicht: Es hängt vom Lebensmittel ab und davon, wie viel Öl es beim Frittieren aufgenommen hätte. Der wichtigste Hebel ist das zugegebene Öl, ein Esslöffel liefert rund 120 kcal. Bei einem konkreten Gewichtsziel lassen Sie sich fachlich beraten.',
        es: 'No hay una cifra única: depende del alimento y de cuánto aceite habría absorbido al freírse. La palanca principal es el aceite añadido, y una cucharada sopera aporta unas 120 kcal. Si tienes un objetivo de peso concreto, consulta a un profesional sanitario.',
        it: "Non esiste un numero unico: dipende dall'alimento e da quanto olio avrebbe assorbito con la frittura. La leva principale è l'olio aggiunto, e un cucchiaio apporta circa 120 kcal. Per un obiettivo di peso preciso, chiedi consiglio a un professionista sanitario.",
        nl: 'Er is geen vast getal: het hangt af van het product en hoeveel olie het bij frituren zou hebben opgenomen. De belangrijkste factor is toegevoegde olie, en een eetlepel levert ongeveer 120 kcal. Heb je een concreet gewichtsdoel, vraag dan advies aan een zorgverlener.',
      },
    },
    {
      question: {
        fr: "L'airfryer préserve-t-il les nutriments des aliments ?",
        en: 'Does an air fryer preserve the nutrients in food?',
        de: 'Erhält die Heißluftfritteuse die Nährstoffe der Lebensmittel?',
        es: '¿La freidora de aire conserva los nutrientes de los alimentos?',
        it: 'La friggitrice ad aria preserva i nutrienti degli alimenti?',
        nl: 'Behoudt de airfryer de voedingsstoffen in het eten?',
      },
      answer: {
        fr: "Comme le four ou la vapeur, l'airfryer évite que les vitamines hydrosolubles passent dans l'eau de cuisson, ce qui arrive quand on fait bouillir des légumes. Sa cuisson souvent courte limite aussi l'exposition à la chaleur. Les résultats varient toutefois selon les aliments : évitez simplement de trop cuire.",
        en: 'Like an oven or a steamer, an air fryer stops water-soluble vitamins leaching into cooking water, which happens when vegetables are boiled. Its often short cooking time also limits heat exposure. Results vary from food to food, so simply avoid overcooking.',
        de: 'Wie Backofen oder Dampfgarer verhindert die Heißluftfritteuse, dass wasserlösliche Vitamine ins Kochwasser übergehen, wie es beim Kochen von Gemüse passiert. Die oft kurze Garzeit begrenzt zudem die Hitzeeinwirkung. Die Ergebnisse variieren je nach Lebensmittel: Vermeiden Sie einfach zu langes Garen.',
        es: 'Como el horno o el vapor, la freidora de aire evita que las vitaminas hidrosolubles pasen al agua de cocción, algo que ocurre al hervir verduras. Su cocción, a menudo corta, también limita la exposición al calor. Los resultados varían según el alimento: simplemente evita cocinar de más.',
        it: "Come il forno o il vapore, la friggitrice ad aria evita che le vitamine idrosolubili passino nell'acqua di cottura, come succede lessando le verdure. La cottura spesso breve limita anche l'esposizione al calore. I risultati variano però da alimento ad alimento: evita semplicemente di cuocere troppo.",
        nl: 'Net als de oven of het stomen voorkomt de airfryer dat wateroplosbare vitamines in kookwater terechtkomen, wat gebeurt als je groenten kookt. De vaak korte bereidingstijd beperkt ook de blootstelling aan hitte. De resultaten verschillen per product: vermijd vooral te lang garen.',
      },
    },
    {
      question: {
        fr: 'Quels sont les meilleurs aliments à cuisiner dans un airfryer pour manger sain ?',
        en: 'What are the best foods to cook in an air fryer for healthy eating?',
        de: 'Welche Lebensmittel eignen sich am besten für gesundes Kochen in der Heißluftfritteuse?',
        es: '¿Cuáles son los mejores alimentos para cocinar en freidora de aire para comer sano?',
        it: 'Quali sono i migliori alimenti da cucinare nella friggitrice ad aria per mangiare sano?',
        nl: 'Wat zijn de beste voedingsmiddelen om gezond te koken in de airfryer?',
      },
      answer: {
        fr: "Les légumes (brocoli, courgettes, poivrons, chou-fleur), le poulet, le poisson, le tofu et les pois chiches se prêtent très bien à l'airfryer avec un minimum d'huile. La patate douce fait d'excellentes frites. Limitez les produits surgelés pré-frits, qui restent riches en matières grasses.",
        en: 'Vegetables (broccoli, courgettes, peppers, cauliflower), chicken, fish, tofu and chickpeas all work very well with minimal oil. Sweet potato makes excellent chips. Limit pre-fried frozen products, which stay high in fat.',
        de: 'Gemüse (Brokkoli, Zucchini, Paprika, Blumenkohl), Hähnchen, Fisch, Tofu und Kichererbsen gelingen mit wenig Öl sehr gut. Süßkartoffeln ergeben hervorragende Pommes. Vorfrittierte Tiefkühlware sollten Sie einschränken, sie bleibt fettreich.',
        es: 'Las verduras (brócoli, calabacín, pimientos, coliflor), el pollo, el pescado, el tofu y los garbanzos quedan muy bien con un mínimo de aceite. El boniato da unos bastones excelentes. Limita los congelados prefritos, que siguen siendo ricos en grasa.',
        it: 'Verdure (broccoli, zucchine, peperoni, cavolfiore), pollo, pesce, tofu e ceci riescono molto bene con pochissimo olio. La patata dolce dà ottimi bastoncini. Limita i surgelati prefritti, che restano ricchi di grassi.',
        nl: 'Groenten (broccoli, courgette, paprika, bloemkool), kip, vis, tofu en kikkererwten lukken heel goed met minimale olie. Zoete aardappel geeft uitstekende friet. Beperk voorgebakken diepvriesproducten, want die blijven vetrijk.',
      },
    },
  ],
}
