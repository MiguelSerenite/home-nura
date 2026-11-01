import type { BlogArticle } from '../types'

export const article: BlogArticle = {
  slug: 'recettes-frites-parfaites-airfryer',
  category: 'recettes',
  pillar: 'guides/airfryers',
  relatedSlugs: ['recettes-poulet-croustillant-airfryer', 'erreurs-courantes-airfryer', 'cuisiner-healthy-airfryer'],
  datePublished: '2026-02-05',
  dateModified: '2026-10-09',
  readingTime: 12,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1774074645537-f72f70d40d12?w=800&q=80&auto=format&fit=crop',
      alt: {
        fr: 'Frites dorées et croustillantes dans un panier de cuisson métallique',
        en: 'Golden, crispy chips in a metal basket',
        de: 'Goldbraune, knusprige Pommes in einem Metallkorb',
        es: 'Patatas fritas doradas y crujientes en una cesta metálica',
        it: 'Patatine dorate e croccanti in un cestello di metallo',
        nl: 'Goudbruine, krokante frietjes in een metalen bakmand',
        pl: 'Złociste, chrupiące frytki w metalowym koszu do smażenia',
        sv: 'Gyllene, krispiga pommes frites i en korg av metall',
        us: 'Golden, crispy fries in a metal cooking basket',
        ca: 'Golden, crispy fries in a metal cooking basket',
      },
    },
  ],
  title: {
    fr: 'Recettes de Frites Parfaites à l\'Airfryer : 7 Variantes Croustillantes',
    en: 'Perfect Air Fryer Chips and Fries: 7 Crispy Recipes',
    de: 'Perfekte Pommes aus dem Airfryer: 7 knusprige Varianten',
    es: 'Patatas fritas en freidora de aire: 7 recetas crujientes',
    it: 'Patatine fritte nella friggitrice ad aria: 7 ricette croccanti',
    nl: 'Perfecte frietjes uit de airfryer: 7 krokante varianten',
    pl: 'Idealne frytki z frytkownicy beztłuszczowej: 7 chrupiących przepisów',
    sv: 'Pommes frites i airfryer: 7 krispiga varianter',
    us: 'Air Fryer Fries: 7 Crispy Recipes, From Classic to Truffle',
    ca: 'Perfect Air Fryer French Fries: 7 Crispy Variations',
  },
  excerpt: {
    fr: 'Découvrez 7 recettes de frites à l\'airfryer : classiques, patates douces, polenta, courgettes, avocat, truffées et à la belge. Temps, températures et astuces pour un résultat croustillant à chaque fois.',
    en: '7 recipes for air fryer chips and fries: classic, sweet potato, polenta, courgette, avocado, truffle and Belgian-style, with times, temperatures and tips for crisp results every time.',
    de: '7 Pommes-Rezepte für die Heißluftfritteuse: klassisch, aus Süßkartoffeln, Polenta, Zucchini oder Avocado, mit Trüffel und nach belgischer Art. Mit Zeiten, Temperaturen und Tipps für knusprige Pommes.',
    es: 'Siete recetas de patatas fritas y bastones en freidora de aire: clásicas, de boniato, de polenta, de calabacín, de aguacate, trufadas y al estilo belga. Tiempos, temperaturas y trucos para que queden crujientes siempre.',
    it: 'Scopri 7 ricette di patatine nella friggitrice ad aria: classiche, di patate dolci, di polenta, di zucchine, di avocado, al tartufo e alla belga. Tempi, temperature e trucchi per un risultato croccante ogni volta.',
    nl: '7 recepten voor frietjes uit de airfryer: klassiek, zoete aardappel, polenta, courgette, avocado, truffel en op zijn Belgisch. Met tijden, temperaturen en tips voor krokante frietjes, elke keer weer.',
    pl: 'Poznaj 7 przepisów na frytki z frytkownicy beztłuszczowej: klasyczne, z batatów, z polenty, z cukinii, z awokado, truflowe i po belgijsku. Czasy, temperatury i wskazówki, dzięki którym frytki zawsze wyjdą chrupiące.',
    sv: '7 recept på pommes frites i airfryer: klassiska, sötpotatis-, polenta-, zucchini- och avokadopommes, tryffelpommes och belgiska. Tider, temperaturer och knep för krispigt resultat varje gång.',
    us: 'Seven air fryer fries recipes: classic, sweet potato, polenta, zucchini, avocado, truffle and Belgian-style, with times, temperatures and tips for crispy fries every time.',
    ca: 'Seven air fryer fries recipes: classic, sweet potato, polenta, zucchini, avocado, truffle and Belgian-style, with times, temperatures in °C and °F and tips for crispy results every time.',
  },
  content: {
    fr: `<h2>Introduction</h2>
<p>Les frites à l'airfryer sont une véritable révolution culinaire. Avec <strong>beaucoup moins de matières grasses</strong> qu'une friteuse traditionnelle (les fabricants annoncent jusqu'à 80 % en moins), vous obtenez des frites croustillantes à l'extérieur et fondantes à l'intérieur. Que vous utilisiez un <a href="/fr/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> ou un <a href="/fr/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a>, ces 7 recettes de frites vous permettront de varier les plaisirs au quotidien.</p>
<p>Le secret de frites réussies à l'airfryer repose sur trois piliers : la découpe régulière, le trempage préalable pour éliminer l'excès d'amidon, et une cuisson en deux temps. Dans cet article, nous allons détailler chaque recette avec des quantités précises, des températures exactes et des temps de cuisson indicatifs, à ajuster selon la puissance de votre appareil.</p>

<h2>1. Frites Classiques de Pommes de Terre</h2>
<h3>Ingrédients</h3>
<ul>
<li>500 g de pommes de terre spéciales frites (Bintje ou Agria)</li>
<li>1 cuillère à soupe d'huile d'olive (15 ml)</li>
<li>1 cuillère à café de sel fin</li>
<li>½ cuillère à café de paprika fumé (facultatif)</li>
</ul>
<h3>Préparation</h3>
<ol>
<li>Épluchez les pommes de terre et découpez-les en bâtonnets réguliers de <strong>1 cm d'épaisseur</strong>.</li>
<li>Faites tremper les bâtonnets dans l'eau froide pendant <strong>30 minutes minimum</strong> (idéalement 1 heure) pour retirer l'amidon.</li>
<li>Égouttez et séchez soigneusement les frites avec un torchon propre ou du papier absorbant. <strong>Cette étape est cruciale</strong> : des frites humides ne croustilleront jamais.</li>
<li>Dans un saladier, mélangez les frites avec l'huile d'olive et le sel.</li>
<li>Préchauffez l'airfryer à <strong>180 °C pendant 3 minutes</strong>.</li>
<li>Disposez les frites en une seule couche dans le panier, sans les superposer.</li>
<li>Cuisez à <strong>180 °C pendant 10 minutes</strong>, secouez le panier, puis montez à <strong>200 °C pendant 8 à 10 minutes</strong> supplémentaires.</li>
<li>Saupoudrez de paprika fumé à la sortie et servez immédiatement.</li>
</ol>
<h3>Astuces du chef</h3>
<p>Pour des frites encore plus croustillantes, ajoutez <strong>½ cuillère à café de fécule de maïs</strong> au mélange huile-sel. La fécule crée une fine pellicule qui intensifie le croustillant. Ne surchargez jamais le panier : cuisez en deux fournées si nécessaire. Consultez notre guide sur les <a href="/fr/blog/erreurs-courantes-airfryer">erreurs courantes à l'airfryer</a> pour éviter les pièges classiques.</p>

<h2>2. Frites de Patate Douce</h2>
<h3>Ingrédients</h3>
<ul>
<li>500 g de patates douces</li>
<li>1 cuillère à soupe d'huile de coco fondue (15 ml)</li>
<li>1 cuillère à café de cannelle en poudre</li>
<li>½ cuillère à café de sel</li>
<li>1 pincée de poivre de Cayenne</li>
</ul>
<h3>Préparation</h3>
<ol>
<li>Pelez les patates douces et découpez-les en bâtonnets de <strong>0,8 cm d'épaisseur</strong> (plus fins que les frites classiques car elles ramollissent plus vite).</li>
<li>Faites tremper dans l'eau froide pendant <strong>20 minutes</strong>.</li>
<li>Égouttez et séchez minutieusement.</li>
<li>Mélangez avec l'huile de coco fondue, la cannelle, le sel et le poivre de Cayenne.</li>
<li>Préchauffez l'airfryer à <strong>190 °C pendant 3 minutes</strong>.</li>
<li>Disposez en une seule couche dans le panier.</li>
<li>Cuisez à <strong>190 °C pendant 8 minutes</strong>, secouez, puis poursuivez à <strong>200 °C pendant 5 à 7 minutes</strong>.</li>
</ol>
<h3>Astuces du chef</h3>
<p>Les patates douces contiennent plus de sucre que les pommes de terre classiques, ce qui les fait brunir plus vite. Surveillez attentivement les dernières minutes de cuisson. Le mélange cannelle-Cayenne apporte un contraste sucré-épicé exceptionnel. Servez avec une sauce au yaourt grec et ciboulette.</p>

<h2>3. Frites de Polenta</h2>
<h3>Ingrédients</h3>
<ul>
<li>250 g de polenta instantanée</li>
<li>750 ml d'eau</li>
<li>50 g de parmesan râpé</li>
<li>1 cuillère à soupe de beurre (15 g)</li>
<li>1 cuillère à café de sel</li>
<li>1 cuillère à soupe d'huile d'olive</li>
<li>1 cuillère à café d'herbes de Provence</li>
</ul>
<h3>Préparation</h3>
<ol>
<li>Portez l'eau salée à ébullition dans une casserole. Versez la polenta en pluie en remuant constamment pendant <strong>5 minutes</strong>.</li>
<li>Retirez du feu et incorporez le beurre et le parmesan. Mélangez bien.</li>
<li>Versez la polenta dans un moule rectangulaire tapissé de papier sulfurisé, en une couche de <strong>1,5 cm d'épaisseur</strong>. Réfrigérez pendant <strong>2 heures minimum</strong>.</li>
<li>Démoulez et découpez en bâtonnets de <strong>1,5 cm x 8 cm</strong>.</li>
<li>Badigeonnez d'huile d'olive et saupoudrez d'herbes de Provence.</li>
<li>Préchauffez l'airfryer à <strong>200 °C pendant 3 minutes</strong>.</li>
<li>Cuisez à <strong>200 °C pendant 12 à 15 minutes</strong>, en retournant les bâtonnets à mi-cuisson.</li>
</ol>
<h3>Astuces du chef</h3>
<p>La polenta doit être bien ferme avant la découpe. Si elle est trop molle, prolongez le temps au réfrigérateur. Ces frites sont naturellement sans gluten et constituent un excellent accompagnement pour les viandes grillées.</p>

<h2>4. Frites de Courgettes</h2>
<h3>Ingrédients</h3>
<ul>
<li>3 courgettes moyennes (environ 600 g)</li>
<li>80 g de chapelure fine</li>
<li>40 g de parmesan râpé</li>
<li>2 œufs battus</li>
<li>50 g de farine</li>
<li>1 cuillère à café d'ail en poudre</li>
<li>Sel et poivre</li>
</ul>
<h3>Préparation</h3>
<ol>
<li>Découpez les courgettes en bâtonnets de <strong>7 cm de long et 1 cm d'épaisseur</strong>.</li>
<li>Salez légèrement les bâtonnets et laissez dégorger <strong>15 minutes</strong> sur du papier absorbant.</li>
<li>Préparez trois assiettes creuses : farine, œufs battus, et mélange chapelure-parmesan-ail en poudre.</li>
<li>Passez chaque bâtonnet successivement dans la farine, l'œuf, puis la chapelure en appuyant bien.</li>
<li>Vaporisez légèrement d'huile ou badigeonnez au pinceau.</li>
<li>Préchauffez l'airfryer à <strong>200 °C pendant 3 minutes</strong>.</li>
<li>Cuisez à <strong>200 °C pendant 10 à 12 minutes</strong>, en retournant à mi-cuisson.</li>
</ol>
<h3>Astuces du chef</h3>
<p>Le secret réside dans le fait de bien faire dégorger les courgettes. L'humidité est l'ennemi du croustillant. Pour une version <a href="/fr/blog/cuisiner-healthy-airfryer">plus healthy</a>, remplacez la chapelure par de la poudre d'amande. Servez avec une sauce marinara tiède.</p>

<h2>5. Frites d'Avocat</h2>
<h3>Ingrédients</h3>
<ul>
<li>2 avocats fermes mais mûrs</li>
<li>60 g de chapelure panko</li>
<li>1 œuf battu</li>
<li>30 g de farine</li>
<li>1 cuillère à café de cumin en poudre</li>
<li>½ cuillère à café de piment d'Espelette</li>
<li>Sel et poivre</li>
<li>Le jus d'un demi-citron vert</li>
</ul>
<h3>Préparation</h3>
<ol>
<li>Coupez les avocats en deux, retirez le noyau et pelez-les. Découpez chaque moitié en <strong>6 quartiers</strong> (24 frites au total).</li>
<li>Arrosez immédiatement de jus de citron vert pour éviter l'oxydation.</li>
<li>Préparez trois assiettes : farine assaisonnée de cumin et piment, œuf battu, chapelure panko.</li>
<li>Panez chaque quartier en passant dans la farine, l'œuf, puis le panko.</li>
<li>Préchauffez l'airfryer à <strong>190 °C pendant 3 minutes</strong>.</li>
<li>Disposez les frites d'avocat en une seule couche sans qu'elles se touchent.</li>
<li>Cuisez à <strong>190 °C pendant 8 à 10 minutes</strong> jusqu'à ce que la panure soit dorée.</li>
</ol>
<h3>Astuces du chef</h3>
<p>Choisissez des avocats <strong>fermes</strong> — s'ils sont trop mûrs, ils s'écraseront lors du panage. La chapelure panko (japonaise) offre un croustillant supérieur à la chapelure classique. Servez avec une crème d'avocat au wasabi ou une sauce soja-sésame.</p>

<h2>6. Frites Truffées</h2>
<h3>Ingrédients</h3>
<ul>
<li>500 g de pommes de terre Ratte (ou Charlotte)</li>
<li>1 cuillère à soupe d'huile de truffe (15 ml)</li>
<li>1 cuillère à soupe d'huile d'olive (15 ml)</li>
<li>30 g de parmesan finement râpé</li>
<li>1 cuillère à soupe de persil frais ciselé</li>
<li>Fleur de sel</li>
</ul>
<h3>Préparation</h3>
<ol>
<li>Lavez les pommes de terre sans les éplucher (la peau apporte du croustillant). Découpez en bâtonnets de <strong>0,8 cm d'épaisseur</strong>.</li>
<li>Faites tremper dans l'eau froide pendant <strong>30 minutes</strong>, égouttez et séchez.</li>
<li>Mélangez avec l'huile d'olive uniquement (l'huile de truffe sera ajoutée après cuisson).</li>
<li>Préchauffez l'airfryer à <strong>180 °C pendant 3 minutes</strong>.</li>
<li>Cuisez à <strong>180 °C pendant 10 minutes</strong>, secouez, puis <strong>200 °C pendant 8 minutes</strong>.</li>
<li>À la sortie du panier, arrosez immédiatement d'huile de truffe, saupoudrez de parmesan et de persil.</li>
<li>Assaisonnez de fleur de sel et servez sans attendre.</li>
</ol>
<h3>Astuces du chef</h3>
<p>Ne cuisez <strong>jamais</strong> l'huile de truffe — la chaleur détruit ses arômes délicats. Ajoutez-la toujours en fin de cuisson. La variété Ratte, avec sa chair ferme et son goût de noisette, est idéale pour cette recette premium.</p>

<h2>7. Frites à la Belge (Double Cuisson)</h2>
<h3>Ingrédients</h3>
<ul>
<li>600 g de pommes de terre Bintje</li>
<li>2 cuillères à soupe d'huile de tournesol (30 ml)</li>
<li>1 cuillère à café de sel</li>
</ul>
<h3>Préparation</h3>
<ol>
<li>Épluchez et découpez les pommes de terre en bâtonnets épais de <strong>1,2 à 1,5 cm</strong> — les frites belges sont plus épaisses que les frites françaises.</li>
<li>Faites tremper dans l'eau froide pendant <strong>1 heure</strong>, changez l'eau au bout de 30 minutes.</li>
<li>Égouttez et séchez très soigneusement.</li>
<li>Mélangez avec 1 cuillère à soupe d'huile.</li>
<li><strong>Première cuisson :</strong> préchauffez à <strong>160 °C</strong>, puis cuisez pendant <strong>15 minutes</strong>. Les frites doivent être cuites mais pas dorées.</li>
<li>Retirez les frites du panier et laissez-les reposer <strong>10 minutes</strong> à température ambiante.</li>
<li>Ajoutez la deuxième cuillère à soupe d'huile.</li>
<li><strong>Seconde cuisson :</strong> montez à <strong>200 °C</strong> et cuisez pendant <strong>8 à 10 minutes</strong> jusqu'à obtenir une couleur dorée uniforme.</li>
</ol>
<h3>Astuces du chef</h3>
<p>La double cuisson est le secret des friteries belges authentiques. La première cuisson cuit l'intérieur, la seconde croustille l'extérieur. Le repos entre les deux cuissons permet à l'humidité interne de migrer vers la surface, ce qui garantit un résultat ultra-croustillant. Pour un accompagnement traditionnel, préparez une mayonnaise maison.</p>

<h2>Tableau récapitulatif des temps et températures</h2>
<table>
<thead>
<tr><th>Recette</th><th>Température</th><th>Temps total</th><th>Quantité</th></tr>
</thead>
<tbody>
<tr><td>Frites classiques</td><td>180 °C puis 200 °C</td><td>18-20 min</td><td>500 g</td></tr>
<tr><td>Patate douce</td><td>190 °C puis 200 °C</td><td>13-15 min</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200 °C</td><td>12-15 min</td><td>250 g polenta</td></tr>
<tr><td>Courgettes</td><td>200 °C</td><td>10-12 min</td><td>600 g</td></tr>
<tr><td>Avocat</td><td>190 °C</td><td>8-10 min</td><td>2 avocats</td></tr>
<tr><td>Truffées</td><td>180 °C puis 200 °C</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Belges (double cuisson)</td><td>160 °C puis 200 °C</td><td>23-25 min + repos</td><td>600 g</td></tr>
</tbody>
</table>

<h2>Conseils généraux pour des frites parfaites à l'airfryer</h2>
<p>Quelle que soit la recette choisie, certaines règles universelles s'appliquent pour obtenir des frites parfaites à l'airfryer :</p>
<ul>
<li><strong>Séchez toujours vos frites</strong> — l'humidité empêche la réaction de Maillard qui crée le croustillant doré.</li>
<li><strong>Ne surchargez pas le panier</strong> — l'air chaud doit circuler librement autour de chaque frite. Cuisez en plusieurs fournées si nécessaire.</li>
<li><strong>Secouez le panier à mi-cuisson</strong> — cela assure une cuisson uniforme sur toutes les faces.</li>
<li><strong>Préchauffez toujours votre airfryer</strong> — 3 minutes suffisent généralement.</li>
<li><strong>Utilisez peu d'huile</strong> — 1 cuillère à soupe pour 500 g est suffisant. Un spray d'huile permet une répartition plus uniforme.</li>
</ul>
<p>Pour aller plus loin, découvrez nos <a href="/fr/blog/recettes-poulet-croustillant-airfryer">recettes de poulet croustillant à l'airfryer</a> qui se marient parfaitement avec ces frites, ou consultez notre guide pour <a href="/fr/blog/cuisiner-healthy-airfryer">cuisiner healthy à l'airfryer</a>. Vous pouvez aussi retrouver les <a href="/fr/blog/top-10-accessoires-airfryer">10 meilleurs accessoires pour airfryer</a> pour optimiser vos préparations.</p>

<h2>Comparatif nutritionnel : airfryer vs friteuse traditionnelle</h2>
<table>
<thead><tr><th>Recette (200 g)</th><th>Calories airfryer</th><th>Calories friteuse</th><th>Graisses airfryer</th><th>Graisses friteuse</th><th>Économie calories</th></tr></thead>
<tbody>
<tr><td>Frites classiques</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>-50 %</td></tr>
<tr><td>Patate douce</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>-50 %</td></tr>
<tr><td>Courgettes panées</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>-45 %</td></tr>
<tr><td>Frites truffées</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>-45 %</td></tr>
<tr><td>Frites belges</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>-48 %</td></tr>
</tbody>
</table>
<p><em>Valeurs indicatives estimées pour une portion de 200 g, calculées à partir des quantités d'huile des recettes : elles varient selon la variété, la découpe et l'huile absorbée.</em></p>

<h2>Sauces maison en 5 minutes : les meilleurs accompagnements</h2>
<ul>
<li><strong>Aïoli légère :</strong> 2 cuillères à soupe de yaourt grec + 1 gousse d'ail râpée + sel. Parfaite avec les frites classiques.</li>
<li><strong>Sauce chipotle :</strong> mayo légère + piment chipotle en poudre + jus de citron vert. Idéale avec les frites de patate douce.</li>
<li><strong>Sauce truffe-parmesan :</strong> crème fraîche + quelques gouttes d'huile de truffe + parmesan râpé. Pour les frites truffées uniquement.</li>
<li><strong>Sauce wasabi-sésame :</strong> fromage blanc + wasabi + graines de sésame grillées. Accompagne parfaitement les frites d'avocat.</li>
<li><strong>Sauce tomate épicée :</strong> passata de tomates + flocons de piment + basilic frais. Classique avec les frites de courgette.</li>
</ul>`,

    en: `<h2>Introduction</h2>
<p>Chips are where an air fryer really comes into its own. They use <strong>far less fat</strong> than chips from a deep fat fryer (manufacturers claim up to 80% less), yet they come out crisp on the outside and fluffy in the middle. Whether you have a <a href="/en/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> or a <a href="/en/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a>, these 7 recipes will keep things interesting.</p>
<p>Perfect air fryer chips come down to three things: cutting them evenly, soaking them first to remove excess starch, and cooking them in two stages. Each recipe below gives precise quantities, exact temperatures and guide cooking times, which you may need to adjust for the power of your air fryer.</p>

<h2>1. Classic chips</h2>
<h3>Ingredients</h3>
<ul>
<li>500 g floury potatoes for chips (Bintje or Agria; Maris Piper works well too)</li>
<li>1 tablespoon olive oil (15 ml)</li>
<li>1 teaspoon fine salt</li>
<li>½ teaspoon smoked paprika (optional)</li>
</ul>
<h3>Method</h3>
<ol>
<li>Peel the potatoes and cut them into even sticks <strong>1 cm thick</strong>.</li>
<li>Soak them in cold water for <strong>at least 30 minutes</strong> (ideally 1 hour) to remove the starch.</li>
<li>Drain and dry thoroughly with a clean tea towel or kitchen paper. <strong>This step is crucial</strong>: damp chips will never crisp up.</li>
<li>In a large bowl, toss the chips with the olive oil and salt.</li>
<li>Preheat the air fryer to <strong>180°C for 3 minutes</strong>.</li>
<li>Spread the chips in a single layer in the basket, without piling them up.</li>
<li>Cook at <strong>180°C for 10 minutes</strong>, shake the basket, then turn up to <strong>200°C for another 8–10 minutes</strong>.</li>
<li>Sprinkle with smoked paprika and serve straight away.</li>
</ol>
<h3>Chef's tips</h3>
<p>For even crisper chips, add <strong>½ teaspoon of cornflour</strong> to the oil and salt. It forms a thin coating that makes them crunchier. Never overload the basket: cook in two batches if you need to. See our guide to <a href="/en/blog/erreurs-courantes-airfryer">common air fryer mistakes</a> to avoid the usual pitfalls.</p>

<h2>2. Sweet potato fries</h2>
<h3>Ingredients</h3>
<ul>
<li>500 g sweet potatoes</li>
<li>1 tablespoon melted coconut oil (15 ml)</li>
<li>1 teaspoon ground cinnamon</li>
<li>½ teaspoon salt</li>
<li>A pinch of cayenne pepper</li>
</ul>
<h3>Method</h3>
<ol>
<li>Peel the sweet potatoes and cut them into sticks <strong>0.8 cm thick</strong> (thinner than ordinary chips, as they soften more quickly).</li>
<li>Soak in cold water for <strong>20 minutes</strong>.</li>
<li>Drain and dry carefully.</li>
<li>Toss with the melted coconut oil, cinnamon, salt and cayenne.</li>
<li>Preheat the air fryer to <strong>190°C for 3 minutes</strong>.</li>
<li>Spread out in a single layer in the basket.</li>
<li>Cook at <strong>190°C for 8 minutes</strong>, shake, then carry on at <strong>200°C for 5–7 minutes</strong>.</li>
</ol>
<h3>Chef's tips</h3>
<p>Sweet potatoes contain more sugar than ordinary potatoes, so they brown faster: keep a close eye on them for the last few minutes. Cinnamon and cayenne give a lovely sweet and spicy contrast. Serve with a Greek yoghurt and chive dip.</p>

<h2>3. Polenta chips</h2>
<h3>Ingredients</h3>
<ul>
<li>250 g instant polenta</li>
<li>750 ml water</li>
<li>50 g grated Parmesan</li>
<li>1 tablespoon butter (15 g)</li>
<li>1 teaspoon salt</li>
<li>1 tablespoon olive oil</li>
<li>1 teaspoon herbes de Provence</li>
</ul>
<h3>Method</h3>
<ol>
<li>Bring the salted water to the boil in a saucepan. Pour in the polenta in a steady stream, stirring constantly for <strong>5 minutes</strong>.</li>
<li>Take off the heat and stir in the butter and Parmesan.</li>
<li>Pour into a rectangular tin lined with baking paper, in a layer <strong>1.5 cm thick</strong>. Chill for <strong>at least 2 hours</strong>.</li>
<li>Turn out and cut into sticks <strong>1.5 × 8 cm</strong>.</li>
<li>Brush with olive oil and sprinkle with herbes de Provence.</li>
<li>Preheat the air fryer to <strong>200°C for 3 minutes</strong>.</li>
<li>Cook at <strong>200°C for 12–15 minutes</strong>, turning halfway through.</li>
</ol>
<h3>Chef's tips</h3>
<p>The polenta must be really firm before you cut it; if it's too soft, leave it in the fridge for longer. Polenta chips are naturally gluten-free and go brilliantly with grilled meat.</p>

<h2>4. Courgette fries</h2>
<h3>Ingredients</h3>
<ul>
<li>3 medium courgettes (about 600 g)</li>
<li>80 g fine breadcrumbs</li>
<li>40 g grated Parmesan</li>
<li>2 eggs, beaten</li>
<li>50 g plain flour</li>
<li>1 teaspoon garlic powder</li>
<li>Salt and pepper</li>
</ul>
<h3>Method</h3>
<ol>
<li>Cut the courgettes into sticks <strong>7 cm long and 1 cm thick</strong>.</li>
<li>Sprinkle lightly with salt and leave on kitchen paper for <strong>15 minutes</strong> to draw out the water.</li>
<li>Set out three shallow bowls: one of flour, one of beaten egg and one of breadcrumbs mixed with the Parmesan and garlic powder.</li>
<li>Dip each stick in the flour, then the egg, then the breadcrumb mixture, pressing it on firmly.</li>
<li>Spray lightly with oil or brush it on.</li>
<li>Preheat the air fryer to <strong>200°C for 3 minutes</strong>.</li>
<li>Cook at <strong>200°C for 10–12 minutes</strong>, turning halfway through.</li>
</ol>
<h3>Chef's tips</h3>
<p>The secret is to draw out as much water from the courgettes as you can: moisture is the enemy of crispness. For a <a href="/en/blog/cuisiner-healthy-airfryer">healthier version</a>, swap the breadcrumbs for ground almonds. Serve with a warm marinara sauce.</p>

<h2>5. Avocado fries</h2>
<h3>Ingredients</h3>
<ul>
<li>2 firm but ripe avocados</li>
<li>60 g panko breadcrumbs</li>
<li>1 egg, beaten</li>
<li>30 g plain flour</li>
<li>1 teaspoon ground cumin, plus salt and pepper</li>
<li>½ teaspoon Espelette pepper (or chilli flakes)</li>
<li>Juice of half a lime</li>
</ul>
<h3>Method</h3>
<ol>
<li>Halve the avocados, remove the stones and peel. Cut each half into <strong>6 wedges</strong> (24 fries in total).</li>
<li>Squeeze over the lime juice straight away to stop them browning.</li>
<li>Set out three plates: flour seasoned with the cumin, Espelette pepper, salt and pepper; beaten egg; and panko.</li>
<li>Coat each wedge in the flour, then the egg, then the panko.</li>
<li>Preheat the air fryer to <strong>190°C for 3 minutes</strong>.</li>
<li>Arrange the wedges in a single layer, not touching.</li>
<li>Cook at <strong>190°C for 8–10 minutes</strong> until the coating is golden.</li>
</ol>
<h3>Chef's tips</h3>
<p>Choose <strong>firm</strong> avocados: if they're too ripe, they'll turn to mush as you coat them. Japanese panko breadcrumbs give a crunchier coating than ordinary breadcrumbs. Serve with a wasabi avocado cream or a soy and sesame dip.</p>

<h2>6. Truffle fries</h2>
<h3>Ingredients</h3>
<ul>
<li>500 g Ratte (or Charlotte) potatoes</li>
<li>1 tablespoon truffle oil (15 ml)</li>
<li>1 tablespoon olive oil (15 ml)</li>
<li>30 g finely grated Parmesan</li>
<li>1 tablespoon chopped fresh parsley</li>
<li>Flaky sea salt</li>
</ul>
<h3>Method</h3>
<ol>
<li>Wash the potatoes but don't peel them (the skin adds crunch). Cut into sticks <strong>0.8 cm thick</strong>.</li>
<li>Soak in cold water for <strong>30 minutes</strong>, then drain and dry.</li>
<li>Toss with the olive oil only (the truffle oil goes on after cooking).</li>
<li>Preheat the air fryer to <strong>180°C for 3 minutes</strong>.</li>
<li>Cook at <strong>180°C for 10 minutes</strong>, shake, then cook at <strong>200°C for 8 minutes</strong>.</li>
<li>As soon as they come out of the basket, drizzle with the truffle oil and sprinkle with the Parmesan and parsley.</li>
<li>Season with flaky sea salt and serve straight away.</li>
</ol>
<h3>Chef's tips</h3>
<p><strong>Never</strong> cook truffle oil: heat destroys its delicate aroma, so always add it at the end. Ratte potatoes, with their firm flesh and nutty flavour, are ideal for this more indulgent recipe.</p>

<h2>7. Belgian-style chips (double-cooked)</h2>
<h3>Ingredients</h3>
<ul>
<li>600 g Bintje or Maris Piper potatoes</li>
<li>2 tablespoons sunflower oil (30 ml)</li>
<li>1 teaspoon salt</li>
</ul>
<h3>Method</h3>
<ol>
<li>Peel the potatoes and cut them into thick sticks, <strong>1.2–1.5 cm</strong> across: Belgian chips are cut thicker than French fries.</li>
<li>Soak in cold water for <strong>1 hour</strong>, changing the water after 30 minutes.</li>
<li>Drain and dry very thoroughly.</li>
<li>Toss with 1 tablespoon of the oil.</li>
<li><strong>First cook:</strong> preheat to <strong>160°C</strong>, then cook for <strong>15 minutes</strong>. The chips should be cooked through but not coloured.</li>
<li>Take them out of the basket and leave to rest for <strong>10 minutes</strong> at room temperature.</li>
<li>Toss with the second tablespoon of oil.</li>
<li><strong>Second cook:</strong> turn up to <strong>200°C</strong> and cook for <strong>8–10 minutes</strong> until evenly golden.</li>
</ol>
<h3>Chef's tips</h3>
<p>Cooking them twice is the secret of Belgium's traditional chip shops (friteries). The first cook cooks them through; the second crisps up the outside. Resting them in between lets the moisture inside move to the surface, which is what makes them so crisp. For a traditional touch, serve with homemade mayonnaise.</p>

<h2>Times and temperatures at a glance</h2>
<table>
<thead>
<tr><th>Recipe</th><th>Temperature</th><th>Total time</th><th>Quantity</th></tr>
</thead>
<tbody>
<tr><td>Classic chips</td><td>180°C then 200°C</td><td>18–20 min</td><td>500 g</td></tr>
<tr><td>Sweet potato fries</td><td>190°C then 200°C</td><td>13–15 min</td><td>500 g</td></tr>
<tr><td>Polenta chips</td><td>200°C</td><td>12–15 min</td><td>250 g polenta</td></tr>
<tr><td>Courgette fries</td><td>200°C</td><td>10–12 min</td><td>600 g</td></tr>
<tr><td>Avocado fries</td><td>190°C</td><td>8–10 min</td><td>2 avocados</td></tr>
<tr><td>Truffle fries</td><td>180°C then 200°C</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Belgian-style (double-cooked)</td><td>160°C then 200°C</td><td>23–25 min + resting</td><td>600 g</td></tr>
</tbody>
</table>

<h2>General tips for perfect air fryer chips</h2>
<p>Whichever recipe you choose, a few rules always apply:</p>
<ul>
<li><strong>Always dry your chips</strong>: moisture prevents the Maillard reaction that gives them their golden crunch.</li>
<li><strong>Don't overload the basket</strong>: the hot air needs to circulate freely around every chip, so cook in batches if you need to.</li>
<li><strong>Shake the basket halfway through</strong> so they cook evenly on all sides.</li>
<li><strong>Always preheat your air fryer</strong>: 3 minutes is usually enough.</li>
<li><strong>Go easy on the oil</strong>: 1 tablespoon per 500 g is plenty, and an oil spray spreads it more evenly.</li>
</ul>
<p>Next, try our <a href="/en/blog/recettes-poulet-croustillant-airfryer">crispy air fryer chicken recipes</a>, which go perfectly with these chips, or read our guide to <a href="/en/blog/cuisiner-healthy-airfryer">healthy air fryer cooking</a>.</p>

<h2>Nutrition compared: air fryer vs deep fat fryer</h2>
<table>
<thead><tr><th>Recipe (200 g)</th><th>Air fryer calories</th><th>Deep fat fryer calories</th><th>Air fryer fat</th><th>Deep fat fryer fat</th><th>Calories saved</th></tr></thead>
<tbody>
<tr><td>Classic chips</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>-50%</td></tr>
<tr><td>Sweet potato fries</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>-50%</td></tr>
<tr><td>Breaded courgette fries</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>-45%</td></tr>
<tr><td>Truffle fries</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>-45%</td></tr>
<tr><td>Belgian-style chips</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>-48%</td></tr>
</tbody>
</table>
<p><em>Rough estimates for a 200 g portion, based on the amount of oil in each recipe: actual values vary with the variety, the cut and how much oil is absorbed.</em></p>

<h2>5-minute homemade dips to go with them</h2>
<ul>
<li><strong>Light aioli:</strong> 2 tbsp Greek yoghurt + 1 grated garlic clove + salt. Perfect with classic chips.</li>
<li><strong>Chipotle sauce:</strong> light mayonnaise + chipotle chilli powder + lime juice. Ideal with sweet potato fries.</li>
<li><strong>Truffle and Parmesan sauce:</strong> crème fraîche + a few drops of truffle oil + grated Parmesan. For truffle fries only.</li>
<li><strong>Wasabi and sesame sauce:</strong> fromage frais + wasabi + toasted sesame seeds. Goes perfectly with avocado fries.</li>
<li><strong>Spicy tomato sauce:</strong> passata + chilli flakes + fresh basil. A classic with courgette fries.</li>
</ul>`,

    de: `<h2>Einleitung</h2>
<p>Pommes aus dem Airfryer brauchen <strong>deutlich weniger Fett</strong> als Pommes aus der klassischen Fritteuse (die Hersteller sprechen von bis zu 80 % weniger) und werden trotzdem außen knusprig und innen weich. Ob Sie einen <a href="/de/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> oder einen <a href="/de/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a> verwenden: Diese 7 Pommes-Rezepte bringen Abwechslung in Ihren Alltag.</p>
<p>Perfekte Pommes aus dem Airfryer stehen auf drei Säulen: gleichmäßig schneiden, vorher wässern, damit überschüssige Stärke verschwindet, und in zwei Stufen garen. Im Folgenden finden Sie jedes Rezept mit genauen Mengen, exakten Temperaturen und Richtwerten für die Garzeit, die Sie an die Leistung Ihres Geräts anpassen.</p>

<h2>1. Klassische Kartoffel-Pommes</h2>
<h3>Zutaten</h3>
<ul>
<li>500 g Kartoffeln für Pommes frites (z. B. Bintje oder Agria)</li>
<li>1 EL Olivenöl (15 ml)</li>
<li>1 TL feines Salz</li>
<li>½ TL geräuchertes Paprikapulver (optional)</li>
</ul>
<h3>Zubereitung</h3>
<ol>
<li>Die Kartoffeln schälen und in gleichmäßige Stifte von etwa <strong>1 cm Dicke</strong> schneiden.</li>
<li><strong>Mindestens 30 Minuten</strong> (am besten 1 Stunde) in kaltes Wasser legen, damit sich die Stärke löst.</li>
<li>Abgießen und mit einem sauberen Geschirrtuch oder Küchenpapier gründlich trocknen. <strong>Dieser Schritt ist entscheidend</strong>: Feuchte Pommes werden nie knusprig.</li>
<li>Die Pommes in einer Schüssel mit Olivenöl und Salz mischen.</li>
<li>Den Airfryer <strong>3 Minuten auf 180 °C</strong> vorheizen.</li>
<li>Die Pommes in einer Schicht in den Korb geben, ohne dass sie übereinanderliegen.</li>
<li><strong>10 Minuten bei 180 °C</strong> garen, den Korb schütteln, dann weitere <strong>8–10 Minuten bei 200 °C</strong> garen.</li>
<li>Mit geräuchertem Paprikapulver bestreuen und sofort servieren.</li>
</ol>
<h3>Tipps vom Profi</h3>
<p>Für extra knusprige Pommes geben Sie <strong>½ TL Maisstärke</strong> zur Öl-Salz-Mischung. Die Stärke bildet einen hauchdünnen Film, der für mehr Biss sorgt. Überfüllen Sie den Korb nie – garen Sie lieber in zwei Durchgängen. Typische Stolperfallen zeigt unser Ratgeber zu den <a href="/de/blog/erreurs-courantes-airfryer">häufigsten Fehlern mit dem Airfryer</a>.</p>

<h2>2. Süßkartoffel-Pommes</h2>
<h3>Zutaten</h3>
<ul>
<li>500 g Süßkartoffeln</li>
<li>1 EL geschmolzenes Kokosöl (15 ml)</li>
<li>1 TL gemahlener Zimt</li>
<li>½ TL Salz</li>
<li>1 Prise Cayennepfeffer</li>
</ul>
<h3>Zubereitung</h3>
<ol>
<li>Die Süßkartoffeln schälen und in Stifte von <strong>0,8 cm Dicke</strong> schneiden (dünner als klassische Pommes, weil sie schneller weich werden).</li>
<li><strong>20 Minuten</strong> in kaltem Wasser wässern.</li>
<li>Abgießen und sorgfältig trocknen.</li>
<li>Mit Kokosöl, Zimt, Salz und Cayennepfeffer mischen.</li>
<li>Den Airfryer <strong>3 Minuten auf 190 °C</strong> vorheizen.</li>
<li>In einer Schicht in den Korb geben.</li>
<li><strong>8 Minuten bei 190 °C</strong> garen, schütteln, dann <strong>5–7 Minuten bei 200 °C</strong> weitergaren.</li>
</ol>
<h3>Tipps vom Profi</h3>
<p>Süßkartoffeln enthalten mehr Zucker als normale Kartoffeln und bräunen deshalb schneller. Behalten Sie die letzten Minuten gut im Blick. Zimt und Cayennepfeffer ergeben einen spannenden süß-scharfen Kontrast. Dazu passt ein Dip aus griechischem Joghurt und Schnittlauch.</p>

<h2>3. Polenta-Pommes</h2>
<h3>Zutaten</h3>
<ul>
<li>250 g Instant-Polenta</li>
<li>750 ml Wasser</li>
<li>50 g geriebener Parmesan</li>
<li>1 EL Butter (15 g)</li>
<li>1 TL Salz</li>
<li>1 EL Olivenöl</li>
<li>1 TL Kräuter der Provence</li>
</ul>
<h3>Zubereitung</h3>
<ol>
<li>Salzwasser in einem Topf aufkochen. Die Polenta einrieseln lassen und unter ständigem Rühren <strong>5 Minuten</strong> kochen.</li>
<li>Vom Herd nehmen, Butter und Parmesan einrühren.</li>
<li>In eine mit Backpapier ausgelegte rechteckige Form gießen, etwa <strong>1,5 cm</strong> hoch. <strong>Mindestens 2 Stunden</strong> kalt stellen.</li>
<li>Aus der Form stürzen und in Stifte von <strong>1,5 × 8 cm</strong> schneiden.</li>
<li>Mit Olivenöl bestreichen und mit Kräutern der Provence bestreuen.</li>
<li>Den Airfryer <strong>3 Minuten auf 200 °C</strong> vorheizen.</li>
<li><strong>12–15 Minuten bei 200 °C</strong> garen, nach der Hälfte der Zeit wenden.</li>
</ol>
<h3>Tipps vom Profi</h3>
<p>Die Polenta muss vor dem Schneiden richtig fest sein. Ist sie noch zu weich, lassen Sie sie länger im Kühlschrank. Diese Pommes sind von Natur aus glutenfrei und passen hervorragend zu gegrilltem Fleisch.</p>

<h2>4. Zucchini-Pommes</h2>
<h3>Zutaten</h3>
<ul>
<li>3 mittelgroße Zucchini (ca. 600 g)</li>
<li>80 g feine Semmelbrösel</li>
<li>40 g geriebener Parmesan</li>
<li>2 verquirlte Eier</li>
<li>50 g Mehl</li>
<li>1 TL Knoblauchpulver</li>
<li>Salz und Pfeffer</li>
</ul>
<h3>Zubereitung</h3>
<ol>
<li>Die Zucchini in Stifte von <strong>7 cm Länge und 1 cm Dicke</strong> schneiden.</li>
<li>Leicht salzen und <strong>15 Minuten</strong> auf Küchenpapier Wasser ziehen lassen.</li>
<li>Drei tiefe Teller vorbereiten: Mehl, verquirlte Eier und eine Mischung aus Semmelbröseln, Parmesan und Knoblauchpulver.</li>
<li>Jeden Stift nacheinander in Mehl, Ei und Bröselmischung wenden und die Panade gut andrücken.</li>
<li>Leicht mit Öl einsprühen oder bestreichen.</li>
<li>Den Airfryer <strong>3 Minuten auf 200 °C</strong> vorheizen.</li>
<li><strong>10–12 Minuten bei 200 °C</strong> garen, nach der Hälfte der Zeit wenden.</li>
</ol>
<h3>Tipps vom Profi</h3>
<p>Entscheidend ist, dass die Zucchini gut Wasser ziehen: Feuchtigkeit ist der Feind jeder Knusprigkeit. Für eine <a href="/de/blog/cuisiner-healthy-airfryer">gesündere Variante</a> ersetzen Sie die Semmelbrösel durch gemahlene Mandeln. Dazu passt eine warme Marinara-Sauce.</p>

<h2>5. Avocado-Pommes</h2>
<h3>Zutaten</h3>
<ul>
<li>2 feste, aber reife Avocados</li>
<li>60 g Panko</li>
<li>1 verquirltes Ei</li>
<li>30 g Mehl</li>
<li>1 TL gemahlener Kreuzkümmel</li>
<li>½ TL Piment d'Espelette (oder Chiliflocken)</li>
<li>Saft einer halben Limette</li>
</ul>
<h3>Zubereitung</h3>
<ol>
<li>Die Avocados halbieren, entkernen und schälen. Jede Hälfte in <strong>6 Spalten</strong> schneiden (insgesamt 24 Stück).</li>
<li>Sofort mit Limettensaft beträufeln, damit sie nicht braun werden.</li>
<li>Drei Teller vorbereiten: Mehl, gewürzt mit Kreuzkümmel und Piment d'Espelette, verquirltes Ei und Panko.</li>
<li>Jede Spalte nacheinander in Mehl, Ei und Panko wenden.</li>
<li>Den Airfryer <strong>3 Minuten auf 190 °C</strong> vorheizen.</li>
<li>In einer Schicht einlegen, ohne dass sich die Spalten berühren.</li>
<li><strong>8–10 Minuten bei 190 °C</strong> garen, bis die Panade goldbraun ist.</li>
</ol>
<h3>Tipps vom Profi</h3>
<p>Nehmen Sie <strong>feste</strong> Avocados – zu reife werden beim Panieren zerdrückt. Panko, das japanische Paniermehl, wird deutlich knuspriger als normale Semmelbrösel. Dazu passt eine Avocadocreme mit Wasabi oder eine Soja-Sesam-Sauce.</p>

<h2>6. Trüffel-Pommes</h2>
<h3>Zutaten</h3>
<ul>
<li>500 g Kartoffeln der Sorte Ratte (oder Charlotte)</li>
<li>1 EL Trüffelöl (15 ml)</li>
<li>1 EL Olivenöl (15 ml)</li>
<li>30 g fein geriebener Parmesan</li>
<li>1 EL frisch gehackte Petersilie</li>
<li>Fleur de Sel</li>
</ul>
<h3>Zubereitung</h3>
<ol>
<li>Die Kartoffeln waschen, aber nicht schälen (die Schale sorgt für Biss). In Stifte von <strong>0,8 cm</strong> schneiden.</li>
<li><strong>30 Minuten</strong> in kaltem Wasser wässern, abgießen und trocknen.</li>
<li>Nur mit dem Olivenöl mischen (das Trüffelöl kommt erst nach dem Garen dazu).</li>
<li>Den Airfryer <strong>3 Minuten auf 180 °C</strong> vorheizen.</li>
<li><strong>10 Minuten bei 180 °C</strong> garen, schütteln, dann <strong>8 Minuten bei 200 °C</strong> fertig garen.</li>
<li>Direkt nach dem Garen mit Trüffelöl beträufeln, Parmesan und Petersilie darüberstreuen.</li>
<li>Mit Fleur de Sel würzen und sofort servieren.</li>
</ol>
<h3>Tipps vom Profi</h3>
<p>Trüffelöl <strong>niemals</strong> mitgaren – Hitze zerstört sein feines Aroma. Geben Sie es immer erst zum Schluss dazu. Die Sorte Ratte mit ihrem festen Fleisch und nussigen Geschmack passt ideal zu diesem besonderen Rezept.</p>

<h2>7. Belgische Fritten (doppelt gegart)</h2>
<h3>Zutaten</h3>
<ul>
<li>600 g Kartoffeln der Sorte Bintje</li>
<li>2 EL Sonnenblumenöl (30 ml)</li>
<li>1 TL Salz</li>
</ul>
<h3>Zubereitung</h3>
<ol>
<li>Die Kartoffeln schälen und in dicke Stifte von <strong>1,2–1,5 cm</strong> schneiden – belgische Fritten sind dicker als französische Pommes.</li>
<li><strong>1 Stunde</strong> in kaltem Wasser wässern, das Wasser nach 30 Minuten wechseln.</li>
<li>Abgießen und sehr gründlich trocknen.</li>
<li>Mit 1 EL Öl mischen.</li>
<li><strong>Erster Durchgang:</strong> auf <strong>160 °C</strong> vorheizen und <strong>15 Minuten</strong> garen. Die Fritten sollen gar, aber noch nicht gebräunt sein.</li>
<li>Herausnehmen und <strong>10 Minuten</strong> bei Zimmertemperatur ruhen lassen.</li>
<li>Den zweiten EL Öl untermischen.</li>
<li><strong>Zweiter Durchgang:</strong> auf <strong>200 °C</strong> erhöhen und <strong>8–10 Minuten</strong> garen, bis die Fritten gleichmäßig goldbraun sind.</li>
</ol>
<h3>Tipps vom Profi</h3>
<p>Das doppelte Garen ist das Geheimnis echter belgischer Frittenbuden. Beim ersten Durchgang wird das Innere gar, beim zweiten die Außenseite knusprig. In der Pause dazwischen wandert die Feuchtigkeit aus dem Inneren an die Oberfläche – das macht die Fritten extra knusprig. Klassisch dazu: hausgemachte Mayonnaise.</p>

<h2>Zeiten und Temperaturen im Überblick</h2>
<table>
<thead>
<tr><th>Rezept</th><th>Temperatur</th><th>Gesamtzeit</th><th>Menge</th></tr>
</thead>
<tbody>
<tr><td>Klassische Pommes</td><td>180 °C, dann 200 °C</td><td>18–20 Min.</td><td>500 g</td></tr>
<tr><td>Süßkartoffel</td><td>190 °C, dann 200 °C</td><td>13–15 Min.</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200 °C</td><td>12–15 Min.</td><td>250 g Polenta</td></tr>
<tr><td>Zucchini</td><td>200 °C</td><td>10–12 Min.</td><td>600 g</td></tr>
<tr><td>Avocado</td><td>190 °C</td><td>8–10 Min.</td><td>2 Avocados</td></tr>
<tr><td>Trüffel</td><td>180 °C, dann 200 °C</td><td>18 Min.</td><td>500 g</td></tr>
<tr><td>Belgisch (doppelt gegart)</td><td>160 °C, dann 200 °C</td><td>23–25 Min. + Pause</td><td>600 g</td></tr>
</tbody>
</table>

<h2>Allgemeine Tipps für perfekte Pommes aus dem Airfryer</h2>
<p>Egal, welches Rezept Sie wählen, diese Grundregeln gelten immer:</p>
<ul>
<li><strong>Pommes immer trocknen</strong> – Feuchtigkeit verhindert die Maillard-Reaktion, die für die goldbraune Kruste sorgt.</li>
<li><strong>Korb nicht überfüllen</strong> – die heiße Luft muss frei um jedes Stück zirkulieren. Garen Sie bei Bedarf in mehreren Durchgängen.</li>
<li><strong>Korb nach der Hälfte der Zeit schütteln</strong> – so garen die Pommes von allen Seiten gleichmäßig.</li>
<li><strong>Airfryer immer vorheizen</strong> – meist genügen 3 Minuten.</li>
<li><strong>Wenig Öl verwenden</strong> – 1 EL pro 500 g reicht. Mit einem Ölspray verteilt es sich gleichmäßiger.</li>
</ul>
<p>Passend zu diesen Pommes finden Sie unsere <a href="/de/blog/recettes-poulet-croustillant-airfryer">Rezepte für knuspriges Hähnchen aus dem Airfryer</a>. Weitere Ideen liefert unser Ratgeber <a href="/de/blog/cuisiner-healthy-airfryer">gesund kochen mit dem Airfryer</a>.</p>

<h2>Nährwerte im Vergleich: Airfryer vs. klassische Fritteuse</h2>
<table>
<thead><tr><th>Rezept (200 g)</th><th>Kalorien Airfryer</th><th>Kalorien Fritteuse</th><th>Fett Airfryer</th><th>Fett Fritteuse</th><th>Kalorienersparnis</th></tr></thead>
<tbody>
<tr><td>Klassische Pommes</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>−50 %</td></tr>
<tr><td>Süßkartoffel-Pommes</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>−50 %</td></tr>
<tr><td>Zucchini, paniert</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>−45 %</td></tr>
<tr><td>Trüffel-Pommes</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>−45 %</td></tr>
<tr><td>Belgische Fritten</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>−48 %</td></tr>
</tbody>
</table>
<p><em>Geschätzte Richtwerte für eine Portion von 200 g, berechnet aus den Ölmengen der Rezepte: Die tatsächlichen Werte hängen von Kartoffelsorte, Schnitt und aufgenommenem Öl ab.</em></p>

<h2>Dips in 5 Minuten: die besten Begleiter</h2>
<ul>
<li><strong>Leichte Aioli:</strong> 2 EL griechischer Joghurt + 1 geriebene Knoblauchzehe + Salz. Perfekt zu klassischen Pommes.</li>
<li><strong>Chipotle-Sauce:</strong> leichte Mayonnaise + Chipotle-Pulver + Limettensaft. Ideal zu Süßkartoffel-Pommes.</li>
<li><strong>Trüffel-Parmesan-Sauce:</strong> Crème fraîche + einige Tropfen Trüffelöl + geriebener Parmesan. Nur für die Trüffel-Pommes.</li>
<li><strong>Wasabi-Sesam-Sauce:</strong> Quark + Wasabi + geröstete Sesamsamen. Passt perfekt zu Avocado-Pommes.</li>
<li><strong>Pikante Tomatensauce:</strong> passierte Tomaten + Chiliflocken + frisches Basilikum. Der Klassiker zu Zucchini-Pommes.</li>
</ul>`,

    es: `<h2>Introducción</h2>
<p>Las patatas fritas en freidora de aire han cambiado la forma de hacerlas en casa. Con <strong>mucha menos grasa</strong> que en una freidora tradicional (los fabricantes hablan de hasta un 80 % menos), salen crujientes por fuera y tiernas por dentro. Tanto si tienes una <a href="/es/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> como una <a href="/es/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a>, estas 7 recetas te darán ideas para variar cada día.</p>
<p>Unas buenas patatas fritas en la freidora de aire se apoyan en tres pilares: un corte regular, un remojo previo para quitar el exceso de almidón y una cocción en dos tiempos. A continuación tienes cada receta con cantidades precisas, temperaturas exactas y tiempos orientativos, que tendrás que ajustar a la potencia de tu aparato.</p>

<h2>1. Patatas fritas clásicas</h2>
<h3>Ingredientes</h3>
<ul>
<li>500 g de patatas para freír (Agria o Kennebec)</li>
<li>1 cucharada de aceite de oliva (15 ml)</li>
<li>1 cucharadita de sal fina</li>
<li>½ cucharadita de pimentón ahumado (opcional)</li>
</ul>
<h3>Preparación</h3>
<ol>
<li>Pela las patatas y córtalas en bastones regulares de <strong>1 cm de grosor</strong>.</li>
<li>Déjalas en remojo en agua fría <strong>al menos 30 minutos</strong> (lo ideal es 1 hora) para quitarles el almidón.</li>
<li>Escúrrelas y sécalas muy bien con un paño limpio o con papel de cocina. <strong>Este paso es clave</strong>: si las patatas están húmedas, nunca quedarán crujientes.</li>
<li>En un bol, mezcla las patatas con el aceite de oliva y la sal.</li>
<li>Precalienta la freidora de aire a <strong>180 °C durante 3 minutos</strong>.</li>
<li>Coloca las patatas en la cesta en una sola capa, sin amontonarlas.</li>
<li>Cocina a <strong>180 °C durante 10 minutos</strong>, agita la cesta y sube a <strong>200 °C durante otros 8-10 minutos</strong>.</li>
<li>Espolvorea el pimentón ahumado al sacarlas y sírvelas enseguida.</li>
</ol>
<h3>Trucos del chef</h3>
<p>Para que queden todavía más crujientes, añade <strong>½ cucharadita de maicena</strong> a la mezcla de aceite y sal: forma una película fina que potencia el crujiente. No llenes nunca la cesta de más; si hace falta, hazlas en dos tandas. Consulta nuestra guía de <a href="/es/blog/erreurs-courantes-airfryer">errores comunes con la freidora de aire</a> para evitar los fallos de siempre.</p>

<h2>2. Bastones de boniato</h2>
<h3>Ingredientes</h3>
<ul>
<li>500 g de boniatos</li>
<li>1 cucharada de aceite de coco derretido (15 ml)</li>
<li>1 cucharadita de canela molida</li>
<li>½ cucharadita de sal</li>
<li>1 pizca de cayena</li>
</ul>
<h3>Preparación</h3>
<ol>
<li>Pela los boniatos y córtalos en bastones de <strong>0,8 cm de grosor</strong> (más finos que las patatas clásicas, porque se ablandan antes).</li>
<li>Déjalos en remojo en agua fría <strong>20 minutos</strong>.</li>
<li>Escúrrelos y sécalos a conciencia.</li>
<li>Mézclalos con el aceite de coco derretido, la canela, la sal y la cayena.</li>
<li>Precalienta la freidora de aire a <strong>190 °C durante 3 minutos</strong>.</li>
<li>Colócalos en la cesta en una sola capa.</li>
<li>Cocina a <strong>190 °C durante 8 minutos</strong>, agita la cesta y sigue a <strong>200 °C durante 5-7 minutos</strong>.</li>
</ol>
<h3>Trucos del chef</h3>
<p>El boniato tiene más azúcar que la patata, así que se dora antes: vigílalo bien en los últimos minutos. La combinación de canela y cayena da un contraste dulce y picante buenísimo. Sírvelos con una salsa de yogur griego y cebollino.</p>

<h2>3. Bastones de polenta</h2>
<h3>Ingredientes</h3>
<ul>
<li>250 g de polenta instantánea</li>
<li>750 ml de agua</li>
<li>50 g de parmesano rallado</li>
<li>1 cucharada de mantequilla (15 g)</li>
<li>1 cucharadita de sal</li>
<li>1 cucharada de aceite de oliva</li>
<li>1 cucharadita de hierbas provenzales</li>
</ul>
<h3>Preparación</h3>
<ol>
<li>Lleva a ebullición el agua con sal en un cazo. Echa la polenta en forma de lluvia y remueve sin parar durante <strong>5 minutos</strong>.</li>
<li>Retira del fuego e incorpora la mantequilla y el parmesano.</li>
<li>Vierte la polenta en un molde rectangular forrado con papel de horno, en una capa de <strong>1,5 cm de grosor</strong>, y métela en la nevera <strong>al menos 2 horas</strong>.</li>
<li>Desmolda y corta bastones de <strong>1,5 x 8 cm</strong>.</li>
<li>Píntalos con aceite de oliva y espolvoréalos con las hierbas provenzales.</li>
<li>Precalienta la freidora de aire a <strong>200 °C durante 3 minutos</strong>.</li>
<li>Cocina a <strong>200 °C durante 12-15 minutos</strong>, dándoles la vuelta a mitad de cocción.</li>
</ol>
<h3>Trucos del chef</h3>
<p>La polenta tiene que estar bien firme antes de cortarla; si sigue blanda, déjala más tiempo en la nevera. Estos bastones no llevan gluten y acompañan de maravilla a las carnes a la parrilla.</p>

<h2>4. Bastones de calabacín</h2>
<h3>Ingredientes</h3>
<ul>
<li>3 calabacines medianos (unos 600 g)</li>
<li>80 g de pan rallado fino</li>
<li>40 g de parmesano rallado</li>
<li>2 huevos batidos</li>
<li>50 g de harina</li>
<li>1 cucharadita de ajo en polvo</li>
<li>Sal y pimienta</li>
</ul>
<h3>Preparación</h3>
<ol>
<li>Corta los calabacines en bastones de <strong>7 cm de largo y 1 cm de grosor</strong>.</li>
<li>Sálalos ligeramente y déjalos sobre papel de cocina <strong>15 minutos</strong> para que suelten el agua.</li>
<li>Prepara tres platos hondos: uno con la harina, otro con los huevos batidos y otro con la mezcla de pan rallado, parmesano y ajo en polvo.</li>
<li>Pasa cada bastón por la harina, luego por el huevo y, por último, por el pan rallado, presionando bien.</li>
<li>Rocíalos ligeramente con aceite en spray o píntalos con un pincel.</li>
<li>Precalienta la freidora de aire a <strong>200 °C durante 3 minutos</strong>.</li>
<li>Cocina a <strong>200 °C durante 10-12 minutos</strong>, dándoles la vuelta a mitad de cocción.</li>
</ol>
<h3>Trucos del chef</h3>
<p>La clave está en que el calabacín suelte bien el agua: la humedad es enemiga del crujiente. Para una versión <a href="/es/blog/cuisiner-healthy-airfryer">más saludable</a>, cambia el pan rallado por almendra molida. Sírvelos con salsa marinara templada.</p>

<h2>5. Bastones de aguacate</h2>
<h3>Ingredientes</h3>
<ul>
<li>2 aguacates maduros pero firmes</li>
<li>60 g de pan rallado panko</li>
<li>1 huevo batido</li>
<li>30 g de harina</li>
<li>1 cucharadita de comino molido</li>
<li>½ cucharadita de pimiento de Espelette (o de guindilla en copos)</li>
<li>El zumo de media lima</li>
</ul>
<h3>Preparación</h3>
<ol>
<li>Parte los aguacates por la mitad, quítales el hueso y pélalos. Corta cada mitad en <strong>6 gajos</strong> (24 bastones en total).</li>
<li>Riégalos enseguida con el zumo de lima para que no se oxiden.</li>
<li>Prepara tres platos: harina sazonada con el comino y el pimiento, huevo batido y panko.</li>
<li>Empana cada gajo: harina, huevo y panko.</li>
<li>Precalienta la freidora de aire a <strong>190 °C durante 3 minutos</strong>.</li>
<li>Colócalos en una sola capa, sin que se toquen.</li>
<li>Cocina a <strong>190 °C durante 8-10 minutos</strong>, hasta que el empanado esté dorado.</li>
</ol>
<h3>Trucos del chef</h3>
<p>Elige aguacates <strong>firmes</strong>: si están demasiado maduros, se aplastarán al empanarlos. El panko (pan rallado japonés) cruje mucho más que el pan rallado normal. Sírvelos con una crema de aguacate al wasabi o con una salsa de soja y sésamo.</p>

<h2>6. Patatas trufadas</h2>
<h3>Ingredientes</h3>
<ul>
<li>500 g de patatas Ratte (o Charlotte)</li>
<li>1 cucharada de aceite de trufa (15 ml)</li>
<li>1 cucharada de aceite de oliva (15 ml)</li>
<li>30 g de parmesano rallado fino</li>
<li>1 cucharada de perejil fresco picado</li>
<li>Flor de sal</li>
</ul>
<h3>Preparación</h3>
<ol>
<li>Lava las patatas sin pelarlas (la piel aporta crujiente) y córtalas en bastones de <strong>0,8 cm de grosor</strong>.</li>
<li>Déjalas en remojo en agua fría <strong>30 minutos</strong>, escúrrelas y sécalas.</li>
<li>Mézclalas solo con el aceite de oliva (el de trufa se añade después de la cocción).</li>
<li>Precalienta la freidora de aire a <strong>180 °C durante 3 minutos</strong>.</li>
<li>Cocina a <strong>180 °C durante 10 minutos</strong>, agita la cesta y sigue a <strong>200 °C durante 8 minutos</strong>.</li>
<li>Nada más sacarlas, riégalas con el aceite de trufa y espolvorea el parmesano y el perejil.</li>
<li>Añade la flor de sal y sírvelas sin esperar.</li>
</ol>
<h3>Trucos del chef</h3>
<p>No calientes <strong>nunca</strong> el aceite de trufa: el calor destruye su delicado aroma. Añádelo siempre al final. La variedad Ratte, de carne firme y sabor que recuerda a la avellana, es ideal para esta receta tan especial.</p>

<h2>7. Patatas fritas al estilo belga (doble cocción)</h2>
<h3>Ingredientes</h3>
<ul>
<li>600 g de patatas Bintje</li>
<li>2 cucharadas de aceite de girasol (30 ml)</li>
<li>1 cucharadita de sal</li>
</ul>
<h3>Preparación</h3>
<ol>
<li>Pela las patatas y córtalas en bastones gruesos, de <strong>1,2 a 1,5 cm</strong>: las patatas fritas belgas son más gruesas que las francesas.</li>
<li>Déjalas en remojo en agua fría <strong>1 hora</strong> y cambia el agua a los 30 minutos.</li>
<li>Escúrrelas y sécalas muy bien.</li>
<li>Mézclalas con 1 cucharada de aceite.</li>
<li><strong>Primera cocción:</strong> precalienta a <strong>160 °C</strong> y cocina durante <strong>15 minutos</strong>. Tienen que quedar hechas, pero sin dorar.</li>
<li>Sácalas de la cesta y déjalas reposar <strong>10 minutos</strong> a temperatura ambiente.</li>
<li>Añade la segunda cucharada de aceite.</li>
<li><strong>Segunda cocción:</strong> sube a <strong>200 °C</strong> y cocina <strong>8-10 minutos</strong>, hasta que tengan un dorado uniforme.</li>
</ol>
<h3>Trucos del chef</h3>
<p>La doble cocción es el secreto de las auténticas freidurías belgas. La primera hace el interior y la segunda deja crujiente el exterior. El reposo entre una y otra permite que la humedad del interior salga a la superficie, y eso garantiza un resultado muy crujiente. Para acompañarlas como manda la tradición, prepara una mayonesa casera.</p>

<h2>Tabla resumen de tiempos y temperaturas</h2>
<table>
<thead>
<tr><th>Receta</th><th>Temperatura</th><th>Tiempo total</th><th>Cantidad</th></tr>
</thead>
<tbody>
<tr><td>Patatas clásicas</td><td>180 °C y luego 200 °C</td><td>18-20 min</td><td>500 g</td></tr>
<tr><td>Boniato</td><td>190 °C y luego 200 °C</td><td>13-15 min</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200 °C</td><td>12-15 min</td><td>250 g de polenta</td></tr>
<tr><td>Calabacín</td><td>200 °C</td><td>10-12 min</td><td>600 g</td></tr>
<tr><td>Aguacate</td><td>190 °C</td><td>8-10 min</td><td>2 aguacates</td></tr>
<tr><td>Trufadas</td><td>180 °C y luego 200 °C</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Belgas (doble cocción)</td><td>160 °C y luego 200 °C</td><td>23-25 min + reposo</td><td>600 g</td></tr>
</tbody>
</table>

<h2>Consejos generales para unas patatas fritas perfectas en la freidora de aire</h2>
<p>Elijas la receta que elijas, hay unas reglas que valen siempre:</p>
<ul>
<li><strong>Seca siempre las patatas</strong>: la humedad impide la reacción de Maillard, que es la que crea ese dorado crujiente.</li>
<li><strong>No llenes demasiado la cesta</strong>: el aire caliente tiene que circular alrededor de cada bastón. Si hace falta, hazlas en varias tandas.</li>
<li><strong>Agita la cesta a mitad de cocción</strong>: así se hacen por igual por todos los lados.</li>
<li><strong>Precalienta siempre la freidora</strong>: normalmente bastan 3 minutos.</li>
<li><strong>Usa poco aceite</strong>: 1 cucharada por cada 500 g es suficiente. Con aceite en spray se reparte mejor.</li>
</ul>
<p>Si quieres ir más allá, prueba nuestras <a href="/es/blog/recettes-poulet-croustillant-airfryer">recetas de pollo crujiente en freidora de aire</a>, que combinan de maravilla con estas patatas, o consulta nuestra guía para <a href="/es/blog/cuisiner-healthy-airfryer">cocinar sano con la freidora de aire</a>.</p>

<h2>Comparativa nutricional: freidora de aire frente a freidora de aceite</h2>
<table>
<thead><tr><th>Receta (200 g)</th><th>Calorías (freidora de aire)</th><th>Calorías (freidora de aceite)</th><th>Grasa (freidora de aire)</th><th>Grasa (freidora de aceite)</th><th>Ahorro de calorías</th></tr></thead>
<tbody>
<tr><td>Patatas clásicas</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>-50 %</td></tr>
<tr><td>Boniato</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>-50 %</td></tr>
<tr><td>Calabacín empanado</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>-45 %</td></tr>
<tr><td>Patatas trufadas</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>-45 %</td></tr>
<tr><td>Al estilo belga</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>-48 %</td></tr>
</tbody>
</table>
<p><em>Valores orientativos para una ración de 200 g, calculados a partir de las cantidades de aceite de las recetas: cambian según la variedad, el corte y el aceite que absorban.</em></p>

<h2>Salsas caseras en 5 minutos: las que mejor acompañan</h2>
<ul>
<li><strong>Alioli ligero:</strong> 2 cucharadas de yogur griego + 1 diente de ajo rallado + sal. Perfecto con las patatas clásicas.</li>
<li><strong>Salsa chipotle:</strong> mayonesa ligera + chile chipotle en polvo + zumo de lima. Ideal con los bastones de boniato.</li>
<li><strong>Salsa de trufa y parmesano:</strong> nata agria + unas gotas de aceite de trufa + parmesano rallado. Solo para las patatas trufadas.</li>
<li><strong>Salsa de wasabi y sésamo:</strong> queso fresco batido + wasabi + semillas de sésamo tostadas. Va de maravilla con los bastones de aguacate.</li>
<li><strong>Salsa de tomate picante:</strong> tomate triturado + copos de guindilla + albahaca fresca. Un clásico con los bastones de calabacín.</li>
</ul>`,

    it: `<h2>Perché fare le patatine nella friggitrice ad aria</h2>
<p>Con la friggitrice ad aria le patatine si preparano con <strong>molto meno grasso</strong> rispetto alla friggitrice tradizionale (i produttori dichiarano fino all'80% in meno) e vengono comunque croccanti fuori e morbide dentro. Che tu abbia una <a href="/it/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> o una <a href="/it/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a>, con queste 7 ricette potrai variare il menu ogni giorno.</p>
<p>Per patatine perfette servono tre cose: un taglio regolare, un ammollo iniziale che elimina l'amido in eccesso e una cottura in due tempi. Qui sotto trovi ogni ricetta con dosi precise, temperature esatte e tempi di cottura indicativi, da adattare alla potenza del tuo apparecchio.</p>

<h2>1. Patatine classiche</h2>
<h3>Ingredienti</h3>
<ul>
<li>500 g di patate adatte alla frittura (Bintje o Agria)</li>
<li>1 cucchiaio di olio d'oliva (15 ml)</li>
<li>1 cucchiaino di sale fino</li>
<li>½ cucchiaino di paprika affumicata (facoltativa)</li>
</ul>
<h3>Preparazione</h3>
<ol>
<li>Sbuccia le patate e tagliale a bastoncini regolari di <strong>1 cm di spessore</strong>.</li>
<li>Mettile in ammollo in acqua fredda per <strong>almeno 30 minuti</strong> (meglio 1 ora) per eliminare l'amido.</li>
<li>Scolale e asciugale bene con un canovaccio pulito o con carta da cucina. <strong>È il passaggio decisivo</strong>: se restano umide, le patatine non diventeranno mai croccanti.</li>
<li>In una ciotola condiscile con l'olio e il sale.</li>
<li>Preriscalda la friggitrice ad aria a <strong>180 °C per 3 minuti</strong>.</li>
<li>Disponi le patatine nel cestello in un solo strato, senza sovrapporle.</li>
<li>Cuoci a <strong>180 °C per 10 minuti</strong>, scuoti il cestello, poi alza a <strong>200 °C per altri 8-10 minuti</strong>.</li>
<li>Appena pronte, spolverale con la paprika affumicata e servile subito.</li>
</ol>
<h3>I consigli dello chef</h3>
<p>Per patatine ancora più croccanti, aggiungi <strong>½ cucchiaino di amido di mais</strong> all'olio e al sale: forma una pellicola sottile che rende la crosticina più croccante. Non riempire mai troppo il cestello: se serve, cuoci in due volte. Per non cadere nelle trappole classiche, leggi la nostra guida agli <a href="/it/blog/erreurs-courantes-airfryer">errori più comuni con la friggitrice ad aria</a>.</p>

<h2>2. Patatine di patate dolci</h2>
<h3>Ingredienti</h3>
<ul>
<li>500 g di patate dolci</li>
<li>1 cucchiaio di olio di cocco fuso (15 ml)</li>
<li>1 cucchiaino di cannella in polvere</li>
<li>½ cucchiaino di sale</li>
<li>1 pizzico di pepe di Cayenna</li>
</ul>
<h3>Preparazione</h3>
<ol>
<li>Sbuccia le patate dolci e tagliale a bastoncini di <strong>0,8 cm di spessore</strong>, più sottili delle patatine classiche perché si ammorbidiscono prima.</li>
<li>Mettile in ammollo in acqua fredda per <strong>20 minuti</strong>.</li>
<li>Scolale e asciugale con cura.</li>
<li>Condiscile con l'olio di cocco, la cannella, il sale e il pepe di Cayenna.</li>
<li>Preriscalda la friggitrice ad aria a <strong>190 °C per 3 minuti</strong>.</li>
<li>Disponile nel cestello in un solo strato.</li>
<li>Cuoci a <strong>190 °C per 8 minuti</strong>, scuoti il cestello, poi prosegui a <strong>200 °C per 5-7 minuti</strong>.</li>
</ol>
<h3>I consigli dello chef</h3>
<p>Le patate dolci contengono più zuccheri delle patate comuni e scuriscono più in fretta: tienile d'occhio negli ultimi minuti. Cannella e pepe di Cayenna creano un piacevole contrasto tra dolce e piccante. Servile con una salsa di yogurt greco ed erba cipollina.</p>

<h2>3. Bastoncini di polenta</h2>
<h3>Ingredienti</h3>
<ul>
<li>250 g di polenta istantanea</li>
<li>750 ml di acqua</li>
<li>50 g di parmigiano grattugiato</li>
<li>1 cucchiaio di burro (15 g)</li>
<li>1 cucchiaino di sale</li>
<li>1 cucchiaio di olio d'oliva</li>
<li>1 cucchiaino di erbe di Provenza</li>
</ul>
<h3>Preparazione</h3>
<ol>
<li>Porta a bollore l'acqua salata, poi versa la polenta a pioggia e mescola senza sosta per <strong>5 minuti</strong>.</li>
<li>Togli dal fuoco e incorpora il burro e il parmigiano.</li>
<li>Versa la polenta in uno stampo rettangolare foderato di carta da forno, in uno strato di <strong>1,5 cm</strong>, e lasciala in frigorifero per <strong>almeno 2 ore</strong>.</li>
<li>Sformala e tagliala a bastoncini di <strong>1,5 cm x 8 cm</strong>.</li>
<li>Spennellali di olio d'oliva e cospargili di erbe di Provenza.</li>
<li>Preriscalda la friggitrice ad aria a <strong>200 °C per 3 minuti</strong>.</li>
<li>Cuoci a <strong>200 °C per 12-15 minuti</strong>, girando i bastoncini a metà cottura.</li>
</ol>
<h3>I consigli dello chef</h3>
<p>Prima di tagliarla, la polenta deve essere ben soda: se è ancora troppo morbida, lasciala in frigorifero più a lungo. Questi bastoncini sono naturalmente senza glutine e accompagnano benissimo la carne alla griglia.</p>

<h2>4. Bastoncini di zucchine impanati</h2>
<h3>Ingredienti</h3>
<ul>
<li>3 zucchine medie (circa 600 g)</li>
<li>80 g di pangrattato fine</li>
<li>40 g di parmigiano grattugiato</li>
<li>2 uova sbattute</li>
<li>50 g di farina</li>
<li>1 cucchiaino di aglio in polvere</li>
<li>Sale e pepe</li>
</ul>
<h3>Preparazione</h3>
<ol>
<li>Taglia le zucchine a bastoncini <strong>lunghi 7 cm e spessi 1 cm</strong>.</li>
<li>Salali leggermente e lasciali spurgare su carta da cucina per <strong>15 minuti</strong>.</li>
<li>Prepara tre piatti fondi: uno con la farina, uno con le uova sbattute e uno con il pangrattato mescolato al parmigiano e all'aglio.</li>
<li>Passa ogni bastoncino nella farina, poi nell'uovo e infine nel pangrattato, premendo bene.</li>
<li>Spruzzali con un velo d'olio o spennellali.</li>
<li>Preriscalda la friggitrice ad aria a <strong>200 °C per 3 minuti</strong>.</li>
<li>Cuoci a <strong>200 °C per 10-12 minuti</strong>, girandoli a metà cottura.</li>
</ol>
<h3>I consigli dello chef</h3>
<p>Il segreto è far spurgare bene le zucchine, perché l'umidità è nemica della croccantezza. Per una versione <a href="/it/blog/cuisiner-healthy-airfryer">più sana</a>, sostituisci il pangrattato con farina di mandorle. Servili con una salsa di pomodoro alla marinara, tiepida.</p>

<h2>5. Spicchi di avocado impanati</h2>
<h3>Ingredienti</h3>
<ul>
<li>2 avocado sodi ma maturi</li>
<li>60 g di panko (pangrattato giapponese)</li>
<li>1 uovo sbattuto</li>
<li>30 g di farina</li>
<li>1 cucchiaino di cumino in polvere</li>
<li>½ cucchiaino di peperoncino di Espelette (o peperoncino in fiocchi)</li>
<li>Il succo di mezzo lime</li>
</ul>
<h3>Preparazione</h3>
<ol>
<li>Taglia gli avocado a metà, togli il nocciolo e sbucciali. Dividi ogni metà in <strong>6 spicchi</strong> (24 in tutto).</li>
<li>Irrorali subito con il succo di lime, così non anneriscono.</li>
<li>Prepara tre piatti: farina condita con cumino e peperoncino, uovo sbattuto e panko.</li>
<li>Impana ogni spicchio passandolo nella farina, nell'uovo e poi nel panko.</li>
<li>Preriscalda la friggitrice ad aria a <strong>190 °C per 3 minuti</strong>.</li>
<li>Disponi gli spicchi in un solo strato, senza che si tocchino.</li>
<li>Cuoci a <strong>190 °C per 8-10 minuti</strong>, finché la panatura è dorata.</li>
</ol>
<h3>I consigli dello chef</h3>
<p>Scegli avocado <strong>sodi</strong>: se sono troppo maturi si spappolano mentre li impani. Il panko rende la panatura molto più croccante del pangrattato normale.</p>

<h2>6. Patatine al tartufo</h2>
<h3>Ingredienti</h3>
<ul>
<li>500 g di patate Ratte (o Charlotte)</li>
<li>1 cucchiaio di olio al tartufo (15 ml)</li>
<li>1 cucchiaio di olio d'oliva (15 ml)</li>
<li>30 g di parmigiano grattugiato fine</li>
<li>1 cucchiaio di prezzemolo fresco tritato</li>
<li>Fior di sale</li>
</ul>
<h3>Preparazione</h3>
<ol>
<li>Lava le patate senza sbucciarle (la buccia le rende più croccanti) e tagliale a bastoncini di <strong>0,8 cm</strong>.</li>
<li>Mettile in ammollo in acqua fredda per <strong>30 minuti</strong>, poi scolale e asciugale.</li>
<li>Condiscile solo con l'olio d'oliva: l'olio al tartufo si aggiunge dopo la cottura.</li>
<li>Preriscalda la friggitrice ad aria a <strong>180 °C per 3 minuti</strong>.</li>
<li>Cuoci a <strong>180 °C per 10 minuti</strong>, scuoti il cestello, poi passa a <strong>200 °C per 8 minuti</strong>.</li>
<li>Appena tolte dal cestello, condiscile con l'olio al tartufo, il parmigiano e il prezzemolo.</li>
<li>Completa con il fior di sale e servi subito.</li>
</ol>
<h3>I consigli dello chef</h3>
<p><strong>Non cuocere mai</strong> l'olio al tartufo: il calore ne distrugge l'aroma delicato. Aggiungilo sempre a fine cottura. La Ratte, a pasta soda e dal sapore di nocciola, è ideale per questa ricetta.</p>

<h2>7. Patatine alla belga (doppia cottura)</h2>
<h3>Ingredienti</h3>
<ul>
<li>600 g di patate Bintje</li>
<li>2 cucchiai di olio di semi di girasole (30 ml)</li>
<li>1 cucchiaino di sale</li>
</ul>
<h3>Preparazione</h3>
<ol>
<li>Sbuccia le patate e tagliale a bastoncini spessi <strong>1,2-1,5 cm</strong>: le patatine belghe sono più spesse di quelle alla francese.</li>
<li>Mettile in ammollo in acqua fredda per <strong>1 ora</strong>, cambiando l'acqua dopo 30 minuti.</li>
<li>Scolale e asciugale con molta cura.</li>
<li>Condiscile con 1 cucchiaio di olio.</li>
<li><strong>Prima cottura:</strong> preriscalda a <strong>160 °C</strong> e cuoci per <strong>15 minuti</strong>. Le patatine devono essere cotte, ma non ancora dorate.</li>
<li>Toglile dal cestello e lasciale riposare <strong>10 minuti</strong> a temperatura ambiente.</li>
<li>Aggiungi il secondo cucchiaio di olio.</li>
<li><strong>Seconda cottura:</strong> alza a <strong>200 °C</strong> e cuoci per <strong>8-10 minuti</strong>, finché sono dorate in modo uniforme.</li>
</ol>
<h3>I consigli dello chef</h3>
<p>La doppia cottura è il segreto delle vere friggitorie belghe: la prima cuoce l'interno, la seconda rende croccante l'esterno. Il riposo tra le due cotture permette all'umidità interna di salire in superficie, e il risultato è croccantissimo. Da tradizione, servile con una maionese fatta in casa.</p>

<h2>Tabella riepilogativa di tempi e temperature</h2>
<table>
<thead>
<tr><th>Ricetta</th><th>Temperatura</th><th>Tempo totale</th><th>Quantità</th></tr>
</thead>
<tbody>
<tr><td>Patatine classiche</td><td>180 °C poi 200 °C</td><td>18-20 min</td><td>500 g</td></tr>
<tr><td>Patate dolci</td><td>190 °C poi 200 °C</td><td>13-15 min</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200 °C</td><td>12-15 min</td><td>250 g di polenta</td></tr>
<tr><td>Zucchine</td><td>200 °C</td><td>10-12 min</td><td>600 g</td></tr>
<tr><td>Avocado</td><td>190 °C</td><td>8-10 min</td><td>2 avocado</td></tr>
<tr><td>Al tartufo</td><td>180 °C poi 200 °C</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Alla belga (doppia cottura)</td><td>160 °C poi 200 °C</td><td>23-25 min + riposo</td><td>600 g</td></tr>
</tbody>
</table>

<h2>Consigli generali per patatine perfette nella friggitrice ad aria</h2>
<p>Qualunque ricetta tu scelga, valgono sempre queste regole:</p>
<ul>
<li><strong>Asciuga sempre le patatine</strong>: l'umidità ostacola la reazione di Maillard, quella che crea la crosticina dorata e croccante.</li>
<li><strong>Non riempire troppo il cestello</strong>: l'aria calda deve circolare liberamente attorno a ogni patatina. Se serve, cuoci in più volte.</li>
<li><strong>Scuoti il cestello a metà cottura</strong>: così le patatine cuociono in modo uniforme su tutti i lati.</li>
<li><strong>Preriscalda sempre la friggitrice ad aria</strong>: di solito bastano 3 minuti.</li>
<li><strong>Usa poco olio</strong>: 1 cucchiaio ogni 500 g è sufficiente, e con un olio spray si distribuisce meglio.</li>
</ul>
<p>Per completare il menu, prova le nostre <a href="/it/blog/recettes-poulet-croustillant-airfryer">ricette di pollo croccante nella friggitrice ad aria</a>, perfette con queste patatine, oppure leggi la nostra guida per <a href="/it/blog/cuisiner-healthy-airfryer">cucinare sano con la friggitrice ad aria</a>.</p>

<h2>Valori nutrizionali: friggitrice ad aria e friggitrice tradizionale a confronto</h2>
<table>
<thead><tr><th>Ricetta (200 g)</th><th>Calorie (ad aria)</th><th>Calorie (frittura classica)</th><th>Grassi (ad aria)</th><th>Grassi (frittura classica)</th><th>Calorie in meno</th></tr></thead>
<tbody>
<tr><td>Patatine classiche</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>-50%</td></tr>
<tr><td>Patate dolci</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>-50%</td></tr>
<tr><td>Zucchine impanate</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>-45%</td></tr>
<tr><td>Patatine al tartufo</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>-45%</td></tr>
<tr><td>Patatine alla belga</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>-48%</td></tr>
</tbody>
</table>
<p><em>Stime indicative per una porzione da 200 g, calcolate in base alle quantità di olio delle ricette: i valori reali cambiano con la varietà, il taglio e l'olio assorbito.</em></p>

<h2>Salse fatte in casa in 5 minuti: gli abbinamenti migliori</h2>
<ul>
<li><strong>Aioli leggero:</strong> 2 cucchiai di yogurt greco + 1 spicchio d'aglio grattugiato + sale. Perfetto con le patatine classiche.</li>
<li><strong>Salsa al chipotle:</strong> maionese light + chipotle in polvere + succo di lime. Ideale con le patatine di patate dolci.</li>
<li><strong>Salsa al tartufo e parmigiano:</strong> panna acida + qualche goccia di olio al tartufo + parmigiano grattugiato. Solo per le patatine al tartufo.</li>
<li><strong>Salsa wasabi e sesamo:</strong> yogurt bianco + wasabi + semi di sesamo tostati. Perfetta con gli spicchi di avocado.</li>
<li><strong>Salsa di pomodoro piccante:</strong> passata + peperoncino in fiocchi + basilico fresco. Un classico con i bastoncini di zucchine.</li>
</ul>`,

    nl: `<h2>Inleiding</h2>
<p>Met een airfryer maak je frietjes met <strong>veel minder vet</strong> dan in een traditionele frituurpan (fabrikanten noemen tot 80% minder), en toch zijn ze krokant van buiten en zacht van binnen. Of je nu een <a href="/nl/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> of een <a href="/nl/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a> gebruikt: met deze 7 recepten breng je variatie op tafel.</p>
<p>Perfecte frietjes uit de airfryer rusten op drie pijlers: gelijkmatig snijden, vooraf weken om overtollig zetmeel te verwijderen en in twee fasen bakken. Hieronder beschrijven we elk recept met precieze hoeveelheden, exacte temperaturen en richttijden die je afstemt op het vermogen van je apparaat.</p>

<h2>1. Klassieke frietjes</h2>
<h3>Ingrediënten</h3>
<ul>
<li>500 g kruimige frietaardappelen (Bintje of Agria)</li>
<li>1 eetlepel olijfolie (15 ml)</li>
<li>1 theelepel fijn zout</li>
<li>½ theelepel gerookt paprikapoeder (optioneel)</li>
</ul>
<h3>Bereiding</h3>
<ol>
<li>Schil de aardappelen en snijd ze in gelijke staafjes van ongeveer <strong>1 cm dik</strong>.</li>
<li>Week ze <strong>minstens 30 minuten</strong> (liefst 1 uur) in koud water om het zetmeel eruit te halen.</li>
<li>Giet af en dep ze grondig droog met een schone theedoek of keukenpapier. <strong>Deze stap is cruciaal</strong>: natte frietjes worden nooit krokant.</li>
<li>Meng de frietjes in een kom met de olijfolie en het zout.</li>
<li>Verwarm de airfryer <strong>3 minuten voor op 180 °C</strong>.</li>
<li>Leg de frietjes in één laag in de mand, zonder ze te stapelen.</li>
<li>Bak ze <strong>10 minuten op 180 °C</strong>, schud de mand en bak ze daarna nog <strong>8 tot 10 minuten op 200 °C</strong>.</li>
<li>Bestrooi ze met het gerookte paprikapoeder en serveer meteen.</li>
</ol>
<h3>Tips van de chef</h3>
<p>Voor extra krokante frietjes meng je <strong>½ theelepel maizena</strong> door de olie en het zout. Het zetmeel vormt een dun laagje dat de frietjes nog krokanter maakt. Doe de mand nooit te vol: bak zo nodig in twee keer. Lees ook onze gids over <a href="/nl/blog/erreurs-courantes-airfryer">veelgemaakte fouten met de airfryer</a> om de klassieke valkuilen te vermijden.</p>

<h2>2. Frietjes van zoete aardappel</h2>
<h3>Ingrediënten</h3>
<ul>
<li>500 g zoete aardappelen</li>
<li>1 eetlepel gesmolten kokosolie (15 ml)</li>
<li>1 theelepel gemalen kaneel</li>
<li>½ theelepel zout</li>
<li>Een snufje cayennepeper</li>
</ul>
<h3>Bereiding</h3>
<ol>
<li>Schil de zoete aardappelen en snijd ze in staafjes van <strong>0,8 cm dik</strong> (dunner dan gewone frietjes, omdat ze sneller zacht worden).</li>
<li>Week ze <strong>20 minuten</strong> in koud water.</li>
<li>Giet af en dep ze grondig droog.</li>
<li>Meng ze met de kokosolie, de kaneel, het zout en de cayennepeper.</li>
<li>Verwarm de airfryer <strong>3 minuten voor op 190 °C</strong>.</li>
<li>Leg ze in één laag in de mand.</li>
<li>Bak ze <strong>8 minuten op 190 °C</strong>, schud de mand en bak ze daarna nog <strong>5 tot 7 minuten op 200 °C</strong>.</li>
</ol>
<h3>Tips van de chef</h3>
<p>Zoete aardappelen bevatten meer suiker en worden dus sneller bruin. Let in de laatste minuten goed op. De combinatie van kaneel en cayennepeper geeft een mooi zoet-pittig contrast. Lekker met een saus van Griekse yoghurt en bieslook.</p>

<h2>3. Polentafrietjes</h2>
<h3>Ingrediënten</h3>
<ul>
<li>250 g instantpolenta</li>
<li>750 ml water</li>
<li>50 g geraspte Parmezaanse kaas</li>
<li>1 eetlepel boter (15 g)</li>
<li>1 theelepel zout</li>
<li>1 eetlepel olijfolie</li>
<li>1 theelepel Provençaalse kruiden</li>
</ul>
<h3>Bereiding</h3>
<ol>
<li>Breng het water met zout aan de kook. Strooi de polenta erin en blijf <strong>5 minuten</strong> roeren.</li>
<li>Haal de pan van het vuur en roer de boter en de Parmezaanse kaas erdoor.</li>
<li>Giet de polenta in een rechthoekige vorm met bakpapier, in een laag van <strong>1,5 cm dik</strong>. Laat hem <strong>minstens 2 uur</strong> opstijven in de koelkast.</li>
<li>Haal de polenta uit de vorm en snijd hem in staafjes van <strong>1,5 cm x 8 cm</strong>.</li>
<li>Bestrijk ze met olijfolie en bestrooi ze met de Provençaalse kruiden.</li>
<li>Verwarm de airfryer <strong>3 minuten voor op 200 °C</strong>.</li>
<li>Bak ze <strong>12 tot 15 minuten op 200 °C</strong> en draai ze halverwege om.</li>
</ol>
<h3>Tips van de chef</h3>
<p>De polenta moet heel stevig zijn voordat je hem snijdt. Is hij nog te zacht, laat hem dan langer in de koelkast staan. Deze frietjes zijn van nature glutenvrij en passen goed bij gegrild vlees.</p>

<h2>4. Courgettefrietjes</h2>
<h3>Ingrediënten</h3>
<ul>
<li>3 middelgrote courgettes (ongeveer 600 g)</li>
<li>80 g fijn paneermeel</li>
<li>40 g geraspte Parmezaanse kaas</li>
<li>2 losgeklopte eieren</li>
<li>50 g bloem</li>
<li>1 theelepel knoflookpoeder</li>
<li>Zout en peper</li>
</ul>
<h3>Bereiding</h3>
<ol>
<li>Snijd de courgettes in staafjes van <strong>7 cm lang en 1 cm dik</strong>.</li>
<li>Bestrooi ze licht met zout en laat ze <strong>15 minuten</strong> uitlekken op keukenpapier.</li>
<li>Zet drie diepe borden klaar: bloem, losgeklopt ei en een mengsel van paneermeel, Parmezaanse kaas en knoflookpoeder.</li>
<li>Haal elk staafje eerst door de bloem, dan door het ei en tot slot door het paneermeelmengsel. Druk goed aan.</li>
<li>Bespuit of bestrijk ze licht met olie.</li>
<li>Verwarm de airfryer <strong>3 minuten voor op 200 °C</strong>.</li>
<li>Bak ze <strong>10 tot 12 minuten op 200 °C</strong> en draai ze halverwege om.</li>
</ol>
<h3>Tips van de chef</h3>
<p>Het geheim is de courgette goed te laten uitlekken: vocht is de grootste vijand van krokante frietjes. Voor een <a href="/nl/blog/cuisiner-healthy-airfryer">gezondere versie</a> vervang je het paneermeel door amandelmeel. Lekker met een warme marinarasaus.</p>

<h2>5. Avocadofrietjes</h2>
<h3>Ingrediënten</h3>
<ul>
<li>2 stevige maar rijpe avocado’s</li>
<li>60 g panko</li>
<li>1 losgeklopt ei</li>
<li>30 g bloem</li>
<li>1 theelepel gemalen komijn</li>
<li>½ theelepel piment d’Espelette (of chilivlokken)</li>
<li>Sap van een halve limoen</li>
</ul>
<h3>Bereiding</h3>
<ol>
<li>Halveer de avocado’s, verwijder de pit en schil ze. Snijd elke helft in <strong>6 partjes</strong> (24 frietjes in totaal).</li>
<li>Besprenkel ze meteen met limoensap, zodat ze niet bruin worden.</li>
<li>Zet drie borden klaar: bloem gemengd met de komijn en de piment, losgeklopt ei en panko.</li>
<li>Paneer elk partje: eerst bloem, dan ei, dan panko.</li>
<li>Verwarm de airfryer <strong>3 minuten voor op 190 °C</strong>.</li>
<li>Leg ze in één laag in de mand, zonder dat ze elkaar raken.</li>
<li>Bak ze <strong>8 tot 10 minuten op 190 °C</strong>, tot het korstje goudbruin is.</li>
</ol>
<h3>Tips van de chef</h3>
<p>Kies <strong>stevige</strong> avocado’s: te rijpe vallen uit elkaar tijdens het paneren. Panko (Japans paneermeel) geeft een krokanter korstje dan gewoon paneermeel.</p>

<h2>6. Truffelfrietjes</h2>
<h3>Ingrediënten</h3>
<ul>
<li>500 g La Ratte- of Charlotte-aardappelen</li>
<li>1 eetlepel truffelolie (15 ml)</li>
<li>1 eetlepel olijfolie (15 ml)</li>
<li>30 g fijngeraspte Parmezaanse kaas</li>
<li>1 eetlepel fijngehakte verse peterselie</li>
<li>Zoutvlokken (fleur de sel)</li>
</ul>
<h3>Bereiding</h3>
<ol>
<li>Was de aardappelen, maar schil ze niet (de schil maakt ze krokanter). Snijd ze in staafjes van <strong>0,8 cm</strong>.</li>
<li>Week ze <strong>30 minuten</strong> in koud water, giet af en dep ze droog.</li>
<li>Meng ze alleen met de olijfolie (de truffelolie komt er pas na het bakken bij).</li>
<li>Verwarm de airfryer <strong>3 minuten voor op 180 °C</strong>.</li>
<li>Bak ze <strong>10 minuten op 180 °C</strong>, schud de mand en bak ze daarna <strong>8 minuten op 200 °C</strong>.</li>
<li>Haal ze uit de mand, besprenkel ze meteen met de truffelolie en bestrooi ze met de Parmezaanse kaas en de peterselie.</li>
<li>Breng op smaak met zoutvlokken en serveer meteen.</li>
</ol>
<h3>Tips van de chef</h3>
<p>Verhit truffelolie <strong>nooit</strong>: door de hitte verdwijnt het fijne aroma. Voeg de olie altijd pas na het bakken toe.</p>

<h2>7. Belgische frietjes (twee keer gebakken)</h2>
<h3>Ingrediënten</h3>
<ul>
<li>600 g Bintje-aardappelen</li>
<li>2 eetlepels zonnebloemolie (30 ml)</li>
<li>1 theelepel zout</li>
</ul>
<h3>Bereiding</h3>
<ol>
<li>Schil de aardappelen en snijd ze in dikke staafjes van <strong>1,2 tot 1,5 cm</strong>: Belgische frietjes zijn dikker dan Franse frites.</li>
<li>Week ze <strong>1 uur</strong> in koud water en ververs het water na 30 minuten.</li>
<li>Giet af en dep ze heel grondig droog.</li>
<li>Meng ze met 1 eetlepel olie.</li>
<li><strong>Eerste keer bakken:</strong> verwarm voor op <strong>160 °C</strong> en bak ze <strong>15 minuten</strong>. De frietjes moeten gaar zijn, maar nog niet bruin.</li>
<li>Haal ze uit de mand en laat ze <strong>10 minuten</strong> rusten op kamertemperatuur.</li>
<li>Meng ze met de tweede eetlepel olie.</li>
<li><strong>Tweede keer bakken:</strong> zet de airfryer op <strong>200 °C</strong> en bak ze <strong>8 tot 10 minuten</strong>, tot ze gelijkmatig goudbruin zijn.</li>
</ol>
<h3>Tips van de chef</h3>
<p>Twee keer bakken is het geheim van het echte Belgische frietkot. De eerste keer wordt de binnenkant gaar, de tweede keer wordt de buitenkant krokant. Tijdens de rustpauze trekt het vocht van binnen naar de buitenkant, en daardoor worden ze extra krokant.</p>

<h2>Overzicht van temperaturen en tijden</h2>
<table>
<thead>
<tr><th>Recept</th><th>Temperatuur</th><th>Totale tijd</th><th>Hoeveelheid</th></tr>
</thead>
<tbody>
<tr><td>Klassieke frietjes</td><td>180 °C, dan 200 °C</td><td>18–20 min</td><td>500 g</td></tr>
<tr><td>Zoete aardappel</td><td>190 °C, dan 200 °C</td><td>13–15 min</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200 °C</td><td>12–15 min</td><td>250 g polenta</td></tr>
<tr><td>Courgette</td><td>200 °C</td><td>10–12 min</td><td>600 g</td></tr>
<tr><td>Avocado</td><td>190 °C</td><td>8–10 min</td><td>2 avocado’s</td></tr>
<tr><td>Truffel</td><td>180 °C, dan 200 °C</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Belgisch (twee keer gebakken)</td><td>160 °C, dan 200 °C</td><td>23–25 min + rusttijd</td><td>600 g</td></tr>
</tbody>
</table>

<h2>Algemene tips voor perfecte frietjes uit de airfryer</h2>
<p>Welk recept je ook kiest, deze regels gelden altijd:</p>
<ul>
<li><strong>Droog je frietjes altijd af</strong>: vocht remt de maillardreactie, die zorgt voor de goudbruine, krokante korst.</li>
<li><strong>Doe de mand niet te vol</strong>: de hete lucht moet vrij rond elk frietje kunnen stromen.</li>
<li><strong>Schud de mand halverwege</strong>: zo worden ze aan alle kanten gelijkmatig gaar.</li>
<li><strong>Verwarm je airfryer altijd voor</strong>: 3 minuten is meestal genoeg.</li>
<li><strong>Gebruik weinig olie</strong>: 1 eetlepel per 500 g is genoeg.</li>
</ul>
<p>Wil je verder? Bekijk dan onze <a href="/nl/blog/recettes-poulet-croustillant-airfryer">recepten voor krokante kip uit de airfryer</a>, die perfect bij deze frietjes passen, of lees onze gids om <a href="/nl/blog/cuisiner-healthy-airfryer">gezond te koken met de airfryer</a>.</p>

<h2>Voedingswaarden: airfryer of traditionele frituurpan</h2>
<table>
<thead><tr><th>Recept (200 g)</th><th>Calorieën airfryer</th><th>Calorieën frituurpan</th><th>Vet airfryer</th><th>Vet frituurpan</th><th>Minder calorieën</th></tr></thead>
<tbody>
<tr><td>Klassieke frietjes</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>-50%</td></tr>
<tr><td>Zoete aardappel</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>-50%</td></tr>
<tr><td>Gepaneerde courgette</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>-45%</td></tr>
<tr><td>Truffelfrietjes</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>-45%</td></tr>
<tr><td>Belgische frietjes</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>-48%</td></tr>
</tbody>
</table>
<p><em>Geschatte richtwaarden voor een portie van 200 g, berekend op basis van de hoeveelheid olie in de recepten. De werkelijke waarden hangen af van het aardappelras, de dikte van de frietjes en hoeveel olie ze opnemen.</em></p>

<h2>Zelfgemaakte dipsauzen in 5 minuten: de beste combinaties</h2>
<ul>
<li><strong>Lichte aioli:</strong> 2 eetlepels Griekse yoghurt + 1 geraspt teentje knoflook + zout. Perfect bij klassieke frietjes.</li>
<li><strong>Chipotlesaus:</strong> lichte mayonaise + chipotlepoeder + limoensap. Ideaal bij frietjes van zoete aardappel.</li>
<li><strong>Truffel-Parmezaansaus:</strong> crème fraîche + een paar druppels truffelolie + geraspte Parmezaanse kaas. Alleen voor truffelfrietjes.</li>
<li><strong>Wasabi-sesamsaus:</strong> kwark (plattekaas) + wasabi + geroosterd sesamzaad. Past perfect bij avocadofrietjes.</li>
<li><strong>Pittige tomatensaus:</strong> passata + chilivlokken + verse basilicum. Een klassieker bij courgettefrietjes.</li>
</ul>`,
    pl: `<h2>Wstęp</h2>
<p>Frytki z frytkownicy beztłuszczowej to zupełnie nowe podejście do tego klasyka. Zużywasz <strong>znacznie mniej tłuszczu</strong> niż w tradycyjnej frytkownicy olejowej (producenci deklarują nawet do 80% mniej), a frytki i tak wychodzą chrupiące z zewnątrz i miękkie w środku. Niezależnie od tego, czy korzystasz z modelu <a href="/pl/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a>, czy <a href="/pl/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a>, tych 7 przepisów pozwoli Ci urozmaicić codzienne menu.</p>
<p>Sekret udanych frytek z frytkownicy beztłuszczowej tkwi w trzech rzeczach: równym krojeniu, wcześniejszym moczeniu, które usuwa nadmiar skrobi, i smażeniu w dwóch etapach. Przy każdym przepisie podajemy dokładne ilości i temperatury oraz orientacyjne czasy smażenia – dostosuj je do mocy swojego urządzenia.</p>

<h2>1. Klasyczne frytki ziemniaczane</h2>
<h3>Składniki</h3>
<ul>
<li>500 g ziemniaków na frytki (Bintje lub Agria)</li>
<li>1 łyżka oliwy z oliwek (15 ml)</li>
<li>1 łyżeczka drobnej soli</li>
<li>½ łyżeczki wędzonej papryki (opcjonalnie)</li>
</ul>
<h3>Przygotowanie</h3>
<ol>
<li>Obierz ziemniaki i pokrój je w równe słupki o <strong>grubości 1 cm</strong>.</li>
<li>Namocz słupki w zimnej wodzie przez <strong>co najmniej 30 minut</strong> (najlepiej godzinę), aby wypłukać skrobię.</li>
<li>Odcedź frytki i dokładnie osusz je czystą ściereczką lub ręcznikiem papierowym. <strong>Ten etap jest kluczowy</strong>: mokre frytki nigdy nie będą chrupiące.</li>
<li>W misce wymieszaj frytki z oliwą i solą.</li>
<li>Rozgrzej frytkownicę: <strong>180 °C przez 3 minuty</strong>.</li>
<li>Rozłóż frytki w koszu w jednej warstwie, tak by nie leżały jedna na drugiej.</li>
<li>Smaż w <strong>180 °C przez 10 minut</strong>, potrząśnij koszem, a potem zwiększ temperaturę do <strong>200 °C i smaż jeszcze 8–10 minut</strong>.</li>
<li>Po wyjęciu posyp frytki wędzoną papryką i od razu podawaj.</li>
</ol>
<h3>Wskazówki szefa kuchni</h3>
<p>Jeśli chcesz, żeby frytki były jeszcze bardziej chrupiące, dodaj do oliwy z solą <strong>½ łyżeczki skrobi kukurydzianej</strong>. Skrobia tworzy cienką warstewkę, dzięki której frytki lepiej chrupią. Nigdy nie przepełniaj kosza – w razie potrzeby smaż w dwóch partiach. Jak uniknąć typowych pułapek, przeczytasz w naszym poradniku o <a href="/pl/blog/erreurs-courantes-airfryer">najczęstszych błędach przy korzystaniu z frytkownicy beztłuszczowej</a>.</p>

<h2>2. Frytki z batatów</h2>
<h3>Składniki</h3>
<ul>
<li>500 g batatów (słodkich ziemniaków)</li>
<li>1 łyżka roztopionego oleju kokosowego (15 ml)</li>
<li>1 łyżeczka mielonego cynamonu</li>
<li>½ łyżeczki soli</li>
<li>1 szczypta pieprzu cayenne</li>
</ul>
<h3>Przygotowanie</h3>
<ol>
<li>Obierz bataty i pokrój je w słupki o <strong>grubości 0,8 cm</strong> (cieńsze niż klasyczne frytki, bo szybciej miękną).</li>
<li>Namocz je w zimnej wodzie przez <strong>20 minut</strong>.</li>
<li>Odcedź i bardzo dokładnie osusz.</li>
<li>Wymieszaj z roztopionym olejem kokosowym, cynamonem, solą i pieprzem cayenne.</li>
<li>Rozgrzej frytkownicę: <strong>190 °C przez 3 minuty</strong>.</li>
<li>Rozłóż bataty w koszu w jednej warstwie.</li>
<li>Smaż w <strong>190 °C przez 8 minut</strong>, potrząśnij koszem, a potem smaż dalej w <strong>200 °C przez 5–7 minut</strong>.</li>
</ol>
<h3>Wskazówki szefa kuchni</h3>
<p>Bataty zawierają więcej cukru niż zwykłe ziemniaki, dlatego szybciej się rumienią – pod koniec smażenia nie spuszczaj ich z oka. Połączenie cynamonu i cayenne daje wyrazisty, słodko-pikantny kontrast. Podawaj z sosem z jogurtu greckiego ze szczypiorkiem.</p>

<h2>3. Frytki z polenty</h2>
<h3>Składniki</h3>
<ul>
<li>250 g polenty błyskawicznej</li>
<li>750 ml wody</li>
<li>50 g startego parmezanu</li>
<li>1 łyżka masła (15 g)</li>
<li>1 łyżeczka soli</li>
<li>1 łyżka oliwy z oliwek</li>
<li>1 łyżeczka ziół prowansalskich</li>
</ul>
<h3>Przygotowanie</h3>
<ol>
<li>W garnku zagotuj osoloną wodę. Wsyp polentę cienkim strumieniem i gotuj, ciągle mieszając, przez <strong>5 minut</strong>.</li>
<li>Zdejmij garnek z ognia, dodaj masło i parmezan i dokładnie wymieszaj.</li>
<li>Przełóż polentę do prostokątnej formy wyłożonej papierem do pieczenia i rozprowadź ją warstwą o <strong>grubości 1,5 cm</strong>. Wstaw do lodówki na <strong>co najmniej 2 godziny</strong>.</li>
<li>Wyjmij polentę z formy i pokrój w słupki o wymiarach <strong>1,5 × 8 cm</strong>.</li>
<li>Posmaruj je oliwą i posyp ziołami prowansalskimi.</li>
<li>Rozgrzej frytkownicę: <strong>200 °C przez 3 minuty</strong>.</li>
<li>Smaż w <strong>200 °C przez 12–15 minut</strong>, w połowie czasu obracając słupki.</li>
</ol>
<h3>Wskazówki szefa kuchni</h3>
<p>Przed krojeniem polenta musi dobrze stężeć. Jeśli jest zbyt miękka, potrzymaj ją dłużej w lodówce. Te frytki są z natury bezglutenowe i świetnie pasują do grillowanego mięsa.</p>

<h2>4. Frytki z cukinii</h2>
<h3>Składniki</h3>
<ul>
<li>3 średnie cukinie (ok. 600 g)</li>
<li>80 g drobnej bułki tartej</li>
<li>40 g startego parmezanu</li>
<li>2 roztrzepane jajka</li>
<li>50 g mąki</li>
<li>1 łyżeczka czosnku granulowanego</li>
<li>Sól i pieprz</li>
</ul>
<h3>Przygotowanie</h3>
<ol>
<li>Pokrój cukinie w słupki o <strong>długości 7 cm i grubości 1 cm</strong>.</li>
<li>Lekko posól słupki i odłóż je na <strong>15 minut</strong> na ręcznik papierowy, żeby puściły wodę.</li>
<li>Przygotuj trzy głębokie talerze: z mąką, z roztrzepanymi jajkami i z mieszanką bułki tartej, parmezanu i czosnku granulowanego.</li>
<li>Każdy słupek obtocz kolejno w mące, w jajku, a na końcu w bułce tartej, dobrze ją dociskając.</li>
<li>Lekko spryskaj słupki olejem albo posmaruj je nim pędzelkiem.</li>
<li>Rozgrzej frytkownicę: <strong>200 °C przez 3 minuty</strong>.</li>
<li>Smaż w <strong>200 °C przez 10–12 minut</strong>, w połowie czasu obracając słupki.</li>
</ol>
<h3>Wskazówki szefa kuchni</h3>
<p>Cały sekret polega na tym, by dokładnie odciągnąć wodę z cukinii, bo wilgoć to wróg chrupkości. Jeśli wolisz <a href="/pl/blog/cuisiner-healthy-airfryer">lżejszą wersję</a>, zastąp bułkę tartą mielonymi migdałami. Podawaj z ciepłym sosem marinara.</p>

<h2>5. Frytki z awokado</h2>
<h3>Składniki</h3>
<ul>
<li>2 jędrne, ale dojrzałe awokado</li>
<li>60 g bułki tartej panko</li>
<li>1 roztrzepane jajko</li>
<li>30 g mąki</li>
<li>1 łyżeczka mielonego kminu rzymskiego</li>
<li>½ łyżeczki papryki Espelette</li>
<li>Sól i pieprz</li>
<li>Sok z połowy limonki</li>
</ul>
<h3>Przygotowanie</h3>
<ol>
<li>Przekrój awokado na pół, wyjmij pestkę i obierz owoc. Każdą połówkę pokrój na <strong>6 cząstek</strong> (łącznie 24 frytki).</li>
<li>Od razu skrop cząstki sokiem z limonki, żeby nie ściemniały.</li>
<li>Przygotuj trzy talerze: z mąką doprawioną kminem i papryką, z roztrzepanym jajkiem i z bułką tartą panko.</li>
<li>Obtocz każdą cząstkę w mące, w jajku, a na końcu w panko.</li>
<li>Rozgrzej frytkownicę: <strong>190 °C przez 3 minuty</strong>.</li>
<li>Rozłóż frytki z awokado w jednej warstwie, tak by się nie stykały.</li>
<li>Smaż w <strong>190 °C przez 8–10 minut</strong>, aż panierka się zezłoci.</li>
</ol>
<h3>Wskazówki szefa kuchni</h3>
<p>Wybieraj <strong>jędrne</strong> awokado – zbyt dojrzałe rozpadnie się przy panierowaniu. Japońska bułka tarta panko daje bardziej chrupiącą panierkę niż zwykła. Podawaj z kremem z awokado i wasabi albo z sosem sojowo-sezamowym.</p>

<h2>6. Frytki truflowe</h2>
<h3>Składniki</h3>
<ul>
<li>500 g ziemniaków Ratte (lub Charlotte)</li>
<li>1 łyżka oleju truflowego (15 ml)</li>
<li>1 łyżka oliwy z oliwek (15 ml)</li>
<li>30 g drobno startego parmezanu</li>
<li>1 łyżka posiekanej świeżej natki pietruszki</li>
<li>Kwiat soli (fleur de sel)</li>
</ul>
<h3>Przygotowanie</h3>
<ol>
<li>Umyj ziemniaki, ale ich nie obieraj (dzięki skórce frytki są bardziej chrupiące). Pokrój je w słupki o <strong>grubości 0,8 cm</strong>.</li>
<li>Namocz je w zimnej wodzie przez <strong>30 minut</strong>, a potem odcedź i osusz.</li>
<li>Wymieszaj je z samą oliwą (olej truflowy dodasz po smażeniu).</li>
<li>Rozgrzej frytkownicę: <strong>180 °C przez 3 minuty</strong>.</li>
<li>Smaż w <strong>180 °C przez 10 minut</strong>, potrząśnij koszem i smaż dalej w <strong>200 °C przez 8 minut</strong>.</li>
<li>Zaraz po wyjęciu z kosza skrop frytki olejem truflowym i posyp parmezanem oraz natką.</li>
<li>Dopraw kwiatem soli i od razu podawaj.</li>
</ol>
<h3>Wskazówki szefa kuchni</h3>
<p><strong>Nigdy</strong> nie podgrzewaj oleju truflowego – wysoka temperatura niszczy jego delikatny aromat. Zawsze dodawaj go na samym końcu. Odmiana Ratte, o zwartym miąższu i orzechowym smaku, idealnie nadaje się do tej wykwintnej wersji frytek.</p>

<h2>7. Frytki po belgijsku (podwójne smażenie)</h2>
<h3>Składniki</h3>
<ul>
<li>600 g ziemniaków Bintje</li>
<li>2 łyżki oleju słonecznikowego (30 ml)</li>
<li>1 łyżeczka soli</li>
</ul>
<h3>Przygotowanie</h3>
<ol>
<li>Obierz ziemniaki i pokrój je w słupki o <strong>grubości 1,2–1,5 cm</strong> – frytki belgijskie są grubsze niż francuskie.</li>
<li>Namocz je w zimnej wodzie przez <strong>godzinę</strong>, po 30 minutach wymieniając wodę.</li>
<li>Odcedź i bardzo dokładnie osusz.</li>
<li>Wymieszaj z 1 łyżką oleju.</li>
<li><strong>Pierwsze smażenie:</strong> rozgrzej frytkownicę do <strong>160 °C</strong> i smaż przez <strong>15 minut</strong>. Frytki powinny być już miękkie, ale jeszcze nie złociste.</li>
<li>Wyjmij frytki z kosza i zostaw je na <strong>10 minut</strong> w temperaturze pokojowej.</li>
<li>Dodaj drugą łyżkę oleju.</li>
<li><strong>Drugie smażenie:</strong> zwiększ temperaturę do <strong>200 °C</strong> i smaż przez <strong>8–10 minut</strong>, aż frytki równomiernie się zezłocą.</li>
</ol>
<h3>Wskazówki szefa kuchni</h3>
<p>Podwójne smażenie to sekret prawdziwych belgijskich frytkarni. Pierwsze smażenie sprawia, że środek mięknie, drugie – że skórka robi się chrupiąca. Przerwa między etapami pozwala wilgoci z wnętrza przedostać się na powierzchnię, dzięki czemu frytki wychodzą wyjątkowo chrupiące. Tradycyjnie podaje się je z domowym majonezem.</p>

<h2>Zestawienie czasów i temperatur</h2>
<table>
<thead>
<tr><th>Przepis</th><th>Temperatura</th><th>Łączny czas</th><th>Ilość</th></tr>
</thead>
<tbody>
<tr><td>Frytki klasyczne</td><td>180 °C, potem 200 °C</td><td>18–20 min</td><td>500 g</td></tr>
<tr><td>Bataty</td><td>190 °C, potem 200 °C</td><td>13–15 min</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200 °C</td><td>12–15 min</td><td>250 g polenty</td></tr>
<tr><td>Cukinia</td><td>200 °C</td><td>10–12 min</td><td>600 g</td></tr>
<tr><td>Awokado</td><td>190 °C</td><td>8–10 min</td><td>2 awokado</td></tr>
<tr><td>Frytki truflowe</td><td>180 °C, potem 200 °C</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Frytki belgijskie (podwójne smażenie)</td><td>160 °C, potem 200 °C</td><td>23–25 min + przerwa</td><td>600 g</td></tr>
</tbody>
</table>

<h2>Ogólne zasady przygotowania idealnych frytek we frytkownicy beztłuszczowej</h2>
<p>Bez względu na wybrany przepis kilka uniwersalnych zasad pozwala uzyskać idealne frytki:</p>
<ul>
<li><strong>Zawsze osuszaj frytki</strong> – wilgoć hamuje reakcję Maillarda, która odpowiada za złocistą, chrupiącą skórkę.</li>
<li><strong>Nie przepełniaj kosza</strong> – gorące powietrze musi swobodnie krążyć wokół każdej frytki. W razie potrzeby smaż w kilku partiach.</li>
<li><strong>Potrząsaj koszem w połowie smażenia</strong> – dzięki temu frytki zrumienią się równomiernie ze wszystkich stron.</li>
<li><strong>Zawsze rozgrzewaj frytkownicę</strong> – zwykle wystarczą 3 minuty.</li>
<li><strong>Używaj mało oleju</strong> – 1 łyżka na 500 g w zupełności wystarczy. Olej w sprayu łatwiej rozprowadzić równomiernie.</li>
</ul>
<p>Chcesz więcej? Zajrzyj do naszych <a href="/pl/blog/recettes-poulet-croustillant-airfryer">przepisów na chrupiącego kurczaka z frytkownicy beztłuszczowej</a>, który świetnie pasuje do tych frytek, albo do poradnika o <a href="/pl/blog/cuisiner-healthy-airfryer">zdrowych i lekkich potrawach z frytkownicy</a>. Sprawdź też <a href="/pl/blog/top-10-accessoires-airfryer">10 najlepszych akcesoriów do frytkownicy beztłuszczowej</a>, które ułatwią Ci przygotowywanie potraw.</p>

<h2>Wartości odżywcze: frytkownica beztłuszczowa a tradycyjna frytkownica olejowa</h2>
<table>
<thead><tr><th>Przepis (200 g)</th><th>Kalorie: frytkownica beztłuszczowa</th><th>Kalorie: frytkownica olejowa</th><th>Tłuszcz: frytkownica beztłuszczowa</th><th>Tłuszcz: frytkownica olejowa</th><th>Mniej kalorii</th></tr></thead>
<tbody>
<tr><td>Frytki klasyczne</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>-50%</td></tr>
<tr><td>Bataty</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>-50%</td></tr>
<tr><td>Panierowana cukinia</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>-45%</td></tr>
<tr><td>Frytki truflowe</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>-45%</td></tr>
<tr><td>Frytki belgijskie</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>-48%</td></tr>
</tbody>
</table>
<p><em>Wartości orientacyjne dla porcji 200 g, wyliczone na podstawie ilości oleju podanej w przepisach. Zależą od odmiany warzyw, sposobu krojenia i ilości wchłoniętego oleju.</em></p>

<h2>Domowe sosy w 5 minut: najlepsze dodatki</h2>
<ul>
<li><strong>Lekki sos aioli:</strong> 2 łyżki jogurtu greckiego + 1 starty ząbek czosnku + sól. Idealny do klasycznych frytek.</li>
<li><strong>Sos chipotle:</strong> lekki majonez + chipotle w proszku + sok z limonki. Doskonały do frytek z batatów.</li>
<li><strong>Sos truflowo-parmezanowy:</strong> gęsta śmietana + kilka kropel oleju truflowego + starty parmezan. Tylko do frytek truflowych.</li>
<li><strong>Sos wasabi z sezamem:</strong> serek homogenizowany naturalny + wasabi + prażony sezam. Świetnie pasuje do frytek z awokado.</li>
<li><strong>Pikantny sos pomidorowy:</strong> passata pomidorowa + płatki chili + świeża bazylia. Klasyczny dodatek do frytek z cukinii.</li>
</ul>`,
    sv: `<h2>Inledning</h2>
<p>Pommes frites i airfryer har blivit en vardagsfavorit i många kök. Med <strong>betydligt mindre fett</strong> än i en vanlig frityrgryta (tillverkarna anger upp till 80 % mindre) får du pommes frites som är krispiga utanpå och mjuka inuti. Oavsett om du har en <a href="/sv/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> eller en <a href="/sv/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a> ger de här 7 recepten omväxling i vardagen.</p>
<p>Perfekta pommes frites i airfryer vilar på tre grundpelare: jämnt skurna stavar, blötläggning som tar bort överflödig stärkelse och tillagning i två steg. Här går vi igenom varje recept med exakta mängder och temperaturer och ungefärliga tider, som du justerar efter din airfryers effekt.</p>

<h2>1. Klassiska pommes frites</h2>
<h3>Ingredienser</h3>
<ul>
<li>500 g mjölig potatis som passar för pommes frites (Bintje eller Agria)</li>
<li>1 msk olivolja (15 ml)</li>
<li>1 tsk fint salt</li>
<li>½ tsk rökt paprikapulver (valfritt)</li>
</ul>
<h3>Gör så här</h3>
<ol>
<li>Skala potatisen och skär den i jämna stavar, ca <strong>1 cm tjocka</strong>.</li>
<li>Lägg stavarna i kallt vatten i <strong>minst 30 minuter</strong> (helst 1 timme) så att stärkelsen sköljs bort.</li>
<li>Låt rinna av och torka noga med en ren kökshandduk eller hushållspapper. <strong>Det här steget är avgörande</strong>: blöta pommes blir aldrig krispiga.</li>
<li>Blanda stavarna med olivolja och salt i en skål.</li>
<li>Förvärm airfryern på <strong>180 °C i 3 minuter</strong>.</li>
<li>Lägg pommesen i ett enda lager, utan att de ligger på varandra.</li>
<li>Kör på <strong>180 °C i 10 minuter</strong>, skaka korgen och höj sedan till <strong>200 °C i 8–10 minuter</strong>.</li>
<li>Strö över rökt paprika och servera direkt.</li>
</ol>
<h3>Kockens tips</h3>
<p>Vill du ha ännu krispigare pommes kan du röra ner <strong>½ tsk majsstärkelse</strong> i oljan och saltet. Stärkelsen bildar en tunn hinna som ger extra krisp. Fyll aldrig korgen för mycket – dela hellre upp i två omgångar. Läs vår guide om <a href="/sv/blog/erreurs-courantes-airfryer">vanliga misstag med airfryer</a>, så undviker du de klassiska fällorna.</p>

<h2>2. Sötpotatispommes</h2>
<h3>Ingredienser</h3>
<ul>
<li>500 g sötpotatis</li>
<li>1 msk smält kokosolja (15 ml)</li>
<li>1 tsk malen kanel</li>
<li>½ tsk salt</li>
<li>En nypa cayennepeppar</li>
</ul>
<h3>Gör så här</h3>
<ol>
<li>Skala sötpotatisen och skär den i stavar, <strong>0,8 cm tjocka</strong> (tunnare än vanliga pommes, eftersom sötpotatis mjuknar fortare).</li>
<li>Lägg stavarna i kallt vatten i <strong>20 minuter</strong>.</li>
<li>Låt rinna av och torka noga.</li>
<li>Blanda med kokosolja, kanel, salt och cayennepeppar.</li>
<li>Förvärm airfryern på <strong>190 °C i 3 minuter</strong>.</li>
<li>Lägg stavarna i ett enda lager.</li>
<li>Kör på <strong>190 °C i 8 minuter</strong>, skaka och fortsätt sedan på <strong>200 °C i 5–7 minuter</strong>.</li>
</ol>
<h3>Kockens tips</h3>
<p>Sötpotatis innehåller mer socker än vanlig potatis och får därför färg snabbare. Håll ett öga på pommesen de sista minuterna. Kanel och cayenne ger en härlig kontrast mellan sött och starkt. Servera med en sås på grekisk yoghurt och gräslök.</p>

<h2>3. Polentapommes</h2>
<h3>Ingredienser</h3>
<ul>
<li>250 g snabbpolenta</li>
<li>7,5 dl vatten</li>
<li>50 g riven parmesan</li>
<li>1 msk smör (15 g)</li>
<li>1 tsk salt</li>
<li>1 msk olivolja</li>
<li>1 tsk provensalska örter</li>
</ul>
<h3>Gör så här</h3>
<ol>
<li>Koka upp saltat vatten. Häll i polentan under ständig omrörning och låt koka i <strong>5 minuter</strong>.</li>
<li>Dra kastrullen från värmen och rör ner smör och parmesan.</li>
<li>Bred ut polentan i en avlång form klädd med bakplåtspapper, ca <strong>1,5 cm</strong> tjockt. Ställ i kylen i <strong>minst 2 timmar</strong>.</li>
<li>Stjälp upp och skär i stavar på <strong>1,5 × 8 cm</strong>.</li>
<li>Pensla med olivolja och strö över provensalska örter.</li>
<li>Förvärm airfryern på <strong>200 °C i 3 minuter</strong>.</li>
<li>Kör på <strong>200 °C i 12–15 minuter</strong> och vänd stavarna halvvägs.</li>
</ol>
<h3>Kockens tips</h3>
<p>Polentan måste vara riktigt fast innan du skär den. Är den för mjuk får den stå längre i kylen. Stavarna är naturligt glutenfria och passar utmärkt till grillat kött.</p>

<h2>4. Zucchinipommes</h2>
<h3>Ingredienser</h3>
<ul>
<li>3 medelstora zucchini (ca 600 g)</li>
<li>80 g fint ströbröd</li>
<li>40 g riven parmesan</li>
<li>2 uppvispade ägg</li>
<li>50 g vetemjöl</li>
<li>1 tsk vitlökspulver</li>
<li>Salt och peppar</li>
</ul>
<h3>Gör så här</h3>
<ol>
<li>Skär zucchinin i stavar, <strong>7 cm långa och 1 cm tjocka</strong>.</li>
<li>Salta lätt och låt stavarna ligga på hushållspapper i <strong>15 minuter</strong> så att vätskan dras ut.</li>
<li>Ställ fram tre djupa tallrikar: mjöl, uppvispade ägg och en blandning av ströbröd, parmesan och vitlökspulver.</li>
<li>Vänd varje stav först i mjöl, sedan i ägg och sist i ströbrödsblandningen, och tryck till ordentligt.</li>
<li>Spraya eller pensla lätt med olja.</li>
<li>Förvärm airfryern på <strong>200 °C i 3 minuter</strong>.</li>
<li>Kör på <strong>200 °C i 10–12 minuter</strong> och vänd halvvägs.</li>
</ol>
<h3>Kockens tips</h3>
<p>Det viktigaste är att zucchinin hinner släppa sin vätska ordentligt. Fukt är krispighetens värsta fiende. Vill du ha en <a href="/sv/blog/cuisiner-healthy-airfryer">nyttigare variant</a> kan du byta ströbrödet mot mandelmjöl. Servera med ljummen marinarasås.</p>

<h2>5. Avokadopommes</h2>
<h3>Ingredienser</h3>
<ul>
<li>2 fasta men mogna avokador</li>
<li>60 g panko (japanskt ströbröd)</li>
<li>1 uppvispat ägg</li>
<li>30 g vetemjöl</li>
<li>1 tsk malen spiskummin</li>
<li>½ tsk piment d’Espelette (eller chiliflakes)</li>
<li>Saften från en halv lime</li>
</ul>
<h3>Gör så här</h3>
<ol>
<li>Dela avokadorna, ta bort kärnan och skala dem. Skär varje halva i <strong>6 klyftor</strong> (24 bitar totalt).</li>
<li>Ringla genast över limesaft så att de inte mörknar.</li>
<li>Ställ fram tre tallrikar: mjöl kryddat med spiskummin och chili, uppvispat ägg och panko.</li>
<li>Panera varje klyfta: mjöl, ägg, panko.</li>
<li>Förvärm airfryern på <strong>190 °C i 3 minuter</strong>.</li>
<li>Lägg klyftorna i ett enda lager så att de inte nuddar varandra.</li>
<li>Kör på <strong>190 °C i 8–10 minuter</strong> tills paneringen är gyllenbrun.</li>
</ol>
<h3>Kockens tips</h3>
<p>Välj <strong>fasta</strong> avokador – är de för mogna blir de mos när du panerar dem. Panko ger ett krispigare resultat än vanligt ströbröd.</p>

<h2>6. Tryffelpommes</h2>
<h3>Ingredienser</h3>
<ul>
<li>500 g fast potatis av sorten Ratte (eller Charlotte)</li>
<li>1 msk tryffelolja (15 ml)</li>
<li>1 msk olivolja (15 ml)</li>
<li>30 g fint riven parmesan</li>
<li>1 msk hackad färsk persilja</li>
<li>Flingsalt</li>
</ul>
<h3>Gör så här</h3>
<ol>
<li>Skrubba potatisen men skala den inte (skalet ger extra krisp). Skär i stavar, <strong>0,8 cm tjocka</strong>.</li>
<li>Lägg i kallt vatten i <strong>30 minuter</strong>, låt rinna av och torka.</li>
<li>Blanda bara med olivoljan (tryffeloljan tillsätts efter tillagningen).</li>
<li>Förvärm på <strong>180 °C i 3 minuter</strong>.</li>
<li>Kör på <strong>180 °C i 10 minuter</strong>, skaka och fortsätt på <strong>200 °C i 8 minuter</strong>.</li>
<li>Ta ut pommesen, ringla genast över tryffeloljan och strö över parmesan och persilja.</li>
<li>Smaka av med flingsalt och servera direkt.</li>
</ol>
<h3>Kockens tips</h3>
<p>Värm <strong>aldrig</strong> tryffeloljan – värmen förstör den känsliga aromen. Tillsätt den alltid efter tillagningen.</p>

<h2>7. Belgiska pommes frites (tillagas två gånger)</h2>
<h3>Ingredienser</h3>
<ul>
<li>600 g potatis av sorten Bintje</li>
<li>2 msk solrosolja (30 ml)</li>
<li>1 tsk salt</li>
</ul>
<h3>Gör så här</h3>
<ol>
<li>Skala potatisen och skär den i tjocka stavar, <strong>1,2–1,5 cm</strong> – belgiska pommes frites är tjockare än franska.</li>
<li>Lägg i kallt vatten i <strong>1 timme</strong> och byt vatten efter 30 minuter.</li>
<li>Låt rinna av och torka mycket noga.</li>
<li>Blanda med 1 msk av oljan.</li>
<li><strong>Första omgången:</strong> förvärm till <strong>160 °C</strong> och kör i <strong>15 minuter</strong>. Pommesen ska vara mjuka rakt igenom men inte ha fått färg.</li>
<li>Ta ut dem och låt vila i <strong>10 minuter</strong> i rumstemperatur.</li>
<li>Blanda i den andra matskeden olja.</li>
<li><strong>Andra omgången:</strong> höj till <strong>200 °C</strong> och kör i <strong>8–10 minuter</strong> tills de är jämnt gyllene.</li>
</ol>
<h3>Kockens tips</h3>
<p>Att tillaga pommesen två gånger är hemligheten bakom de äkta belgiska pommesstånden. Första omgången gör insidan mjuk, den andra gör utsidan krispig. Under vilan mellan omgångarna vandrar fukten inifrån ut mot ytan, och det ger ett riktigt krispigt resultat.</p>

<h2>Tider och temperaturer i sammandrag</h2>
<table>
<thead>
<tr><th>Recept</th><th>Temperatur</th><th>Total tid</th><th>Mängd</th></tr>
</thead>
<tbody>
<tr><td>Klassiska pommes frites</td><td>180 °C, sedan 200 °C</td><td>18–20 min</td><td>500 g</td></tr>
<tr><td>Sötpotatis</td><td>190 °C, sedan 200 °C</td><td>13–15 min</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200 °C</td><td>12–15 min</td><td>250 g polenta</td></tr>
<tr><td>Zucchini</td><td>200 °C</td><td>10–12 min</td><td>600 g</td></tr>
<tr><td>Avokado</td><td>190 °C</td><td>8–10 min</td><td>2 avokador</td></tr>
<tr><td>Tryffel</td><td>180 °C, sedan 200 °C</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Belgiska (två omgångar)</td><td>160 °C, sedan 200 °C</td><td>23–25 min + vila</td><td>600 g</td></tr>
</tbody>
</table>

<h2>Så lyckas du med pommes frites i airfryer</h2>
<p>Oavsett recept gäller några grundregler:</p>
<ul>
<li><strong>Torka alltid pommesen</strong> – fukt hindrar Maillardreaktionen, som ger den gyllene krispigheten.</li>
<li><strong>Fyll inte korgen för mycket</strong> – den varma luften måste kunna cirkulera fritt runt varje stav.</li>
<li><strong>Skaka korgen halvvägs</strong> – då blir pommesen jämnt tillagade på alla sidor.</li>
<li><strong>Förvärm alltid airfryern</strong> – 3 minuter brukar räcka.</li>
<li><strong>Använd lite olja</strong> – 1 msk per 500 g räcker.</li>
</ul>
<p>Vill du gå vidare kan du prova våra <a href="/sv/blog/recettes-poulet-croustillant-airfryer">recept på krispig kyckling i airfryer</a>, som passar perfekt till pommesen, eller läsa vår guide till <a href="/sv/blog/cuisiner-healthy-airfryer">nyttig matlagning i airfryer</a>.</p>

<h2>Näringsjämförelse: airfryer eller frityrgryta</h2>
<table>
<thead><tr><th>Recept (200 g)</th><th>Kalorier, airfryer</th><th>Kalorier, frityrgryta</th><th>Fett, airfryer</th><th>Fett, frityrgryta</th><th>Färre kalorier</th></tr></thead>
<tbody>
<tr><td>Klassiska pommes frites</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>−50 %</td></tr>
<tr><td>Sötpotatis</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>−50 %</td></tr>
<tr><td>Panerad zucchini</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>−45 %</td></tr>
<tr><td>Tryffelpommes</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>−45 %</td></tr>
<tr><td>Belgiska pommes frites</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>−48 %</td></tr>
</tbody>
</table>
<p><em>Ungefärliga värden för en portion på 200 g, beräknade utifrån oljemängderna i recepten: de faktiska värdena varierar med sort, hur du skär och hur mycket olja som sugs upp.</em></p>

<h2>Hemgjorda dippsåser på 5 minuter: de bästa kombinationerna</h2>
<ul>
<li><strong>Lätt aioli:</strong> 2 msk grekisk yoghurt + 1 riven vitlöksklyfta + salt. Perfekt till klassiska pommes frites.</li>
<li><strong>Chipotlesås:</strong> lätt majonnäs + chipotlepulver + limesaft. Passar perfekt till sötpotatispommes.</li>
<li><strong>Tryffel- och parmesansås:</strong> crème fraiche + några droppar tryffelolja + riven parmesan. Bara till tryffelpommes.</li>
<li><strong>Wasabi- och sesamsås:</strong> kvarg + wasabi + rostade sesamfrön. Gör sig perfekt till avokadopommes.</li>
<li><strong>Kryddig tomatsås:</strong> passerade tomater + chiliflakes + färsk basilika. En klassiker till zucchinipommes.</li>
</ul>
`,
    us: `<h2>Introduction</h2>
<p>Fries are one of the best reasons to own an air fryer. With <strong>far less fat</strong> than a deep fryer (manufacturers claim up to 80% less), you get fries that are crispy on the outside and fluffy on the inside. Whether you cook in a <a href="/us/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> or a <a href="/us/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a>, these seven recipes will keep fry night interesting.</p>
<p>Perfect air fryer fries come down to three things: an even cut, a soak to rinse off excess starch, and a two-stage cook. Each recipe below gives precise quantities, exact temperatures and approximate cook times; adjust them to your air fryer's wattage.</p>

<h2>1. Classic potato fries</h2>
<h3>Ingredients</h3>
<ul>
<li>1.1 lb (500 g) starchy frying potatoes, such as russets (or Bintje or Agria)</li>
<li>1 tablespoon (15 ml) olive oil</li>
<li>1 teaspoon fine salt</li>
<li>½ teaspoon smoked paprika (optional)</li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Peel the potatoes and cut them into even sticks about <strong>⅜ inch (1 cm) thick</strong>.</li>
<li>Soak in cold water for <strong>at least 30 minutes</strong> (ideally 1 hour) to rinse off the starch.</li>
<li>Drain and dry thoroughly with a clean dish towel or paper towels. <strong>Don't skip this step</strong>: wet fries will never crisp up.</li>
<li>Toss the fries with the olive oil and salt in a bowl.</li>
<li>Preheat the air fryer to <strong>350°F (180°C) for 3 minutes</strong>.</li>
<li>Spread the fries in a single layer, without overlapping.</li>
<li>Air fry at <strong>350°F (180°C) for 10 minutes</strong>, shake the basket, then raise the heat to <strong>400°F (200°C) for 8 to 10 minutes</strong>.</li>
<li>Sprinkle with smoked paprika and serve right away.</li>
</ol>
<h3>Chef's tips</h3>
<p>For extra crunch, add <strong>½ teaspoon of cornstarch</strong> to the oil and salt. The starch forms a thin coating that makes the fries even crispier. Never overcrowd the basket — cook in two batches if you need to. See our guide to <a href="/us/blog/erreurs-courantes-airfryer">common air fryer mistakes</a> to avoid the classic pitfalls.</p>

<h2>2. Sweet potato fries</h2>
<h3>Ingredients</h3>
<ul>
<li>1.1 lb (500 g) sweet potatoes</li>
<li>1 tablespoon (15 ml) melted coconut oil</li>
<li>1 teaspoon ground cinnamon</li>
<li>½ teaspoon salt</li>
<li>Pinch of cayenne pepper</li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Peel the sweet potatoes and cut them into sticks about <strong>⅓ inch (0.8 cm) thick</strong> (thinner than classic fries, since they soften faster).</li>
<li>Soak in cold water for <strong>20 minutes</strong>.</li>
<li>Drain and dry thoroughly.</li>
<li>Toss with the coconut oil, cinnamon, salt and cayenne.</li>
<li>Preheat the air fryer to <strong>375°F (190°C) for 3 minutes</strong>.</li>
<li>Spread in a single layer.</li>
<li>Air fry at <strong>375°F (190°C) for 8 minutes</strong>, shake, then finish at <strong>400°F (200°C) for 5 to 7 minutes</strong>.</li>
</ol>
<h3>Chef's tips</h3>
<p>Sweet potatoes have more sugar than regular potatoes, so they brown faster. Keep a close eye on them in the last few minutes. The cinnamon-cayenne combo gives a great sweet-and-spicy contrast. Serve with a Greek yogurt and chive dip.</p>

<h2>3. Polenta fries</h2>
<h3>Ingredients</h3>
<ul>
<li>8.8 oz (250 g) instant polenta</li>
<li>3 cups (750 ml) water</li>
<li>1.8 oz (50 g) grated Parmesan</li>
<li>1 tablespoon (15 g) butter</li>
<li>1 teaspoon salt</li>
<li>1 tablespoon olive oil</li>
<li>1 teaspoon herbes de Provence</li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Bring the salted water to a boil. Pour in the polenta in a steady stream, stirring constantly for <strong>5 minutes</strong>.</li>
<li>Take off the heat and stir in the butter and Parmesan.</li>
<li>Spread in a parchment-lined rectangular pan, a generous <strong>½ inch (1.5 cm) thick</strong>. Refrigerate for <strong>at least 2 hours</strong>.</li>
<li>Turn out of the pan and cut into <strong>½ x 3-inch (1.5 x 8 cm)</strong> sticks.</li>
<li>Brush with olive oil and sprinkle with herbes de Provence.</li>
<li>Preheat the air fryer to <strong>400°F (200°C) for 3 minutes</strong>.</li>
<li>Air fry at <strong>400°F (200°C) for 12 to 15 minutes</strong>, flipping halfway through.</li>
</ol>
<h3>Chef's tips</h3>
<p>The polenta has to be very firm before you cut it. If it's still too soft, give it more time in the fridge. These fries are naturally gluten-free and make a great side for grilled meats.</p>

<h2>4. Zucchini fries</h2>
<h3>Ingredients</h3>
<ul>
<li>3 medium zucchini (about 1.3 lb/600 g)</li>
<li>2.8 oz (80 g) fine dry breadcrumbs</li>
<li>1.4 oz (40 g) grated Parmesan</li>
<li>2 eggs, beaten</li>
<li>1.8 oz (50 g) all-purpose flour</li>
<li>1 teaspoon garlic powder</li>
<li>Salt and pepper</li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Cut the zucchini into sticks about <strong>3 inches (7 cm) long and ⅜ inch (1 cm) thick</strong>.</li>
<li>Salt lightly and let drain on paper towels for <strong>15 minutes</strong>.</li>
<li>Set up three shallow dishes: flour, beaten eggs, and the breadcrumb, Parmesan and garlic mix.</li>
<li>Coat each stick in flour, then egg, then the breadcrumb mixture, pressing firmly.</li>
<li>Lightly mist or brush with oil.</li>
<li>Preheat the air fryer to <strong>400°F (200°C) for 3 minutes</strong>.</li>
<li>Air fry at <strong>400°F (200°C) for 10 to 12 minutes</strong>, flipping halfway through.</li>
</ol>
<h3>Chef's tips</h3>
<p>The key is draining the zucchini well: moisture is the enemy of crispy. For a <a href="/us/blog/cuisiner-healthy-airfryer">healthier version</a>, swap the breadcrumbs for almond flour. Serve with warm marinara sauce.</p>

<h2>5. Avocado fries</h2>
<h3>Ingredients</h3>
<ul>
<li>2 firm but ripe avocados</li>
<li>2.1 oz (60 g) panko breadcrumbs</li>
<li>1 egg, beaten</li>
<li>1 oz (30 g) all-purpose flour</li>
<li>1 teaspoon ground cumin</li>
<li>½ teaspoon Espelette pepper (or red pepper flakes)</li>
<li>Juice of half a lime</li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Halve the avocados, remove the pits and peel. Cut each half into <strong>6 wedges</strong> (24 fries total).</li>
<li>Drizzle right away with lime juice so they don't brown.</li>
<li>Set up three dishes: flour seasoned with the cumin and pepper, beaten egg, and panko.</li>
<li>Bread each wedge: flour, egg, then panko.</li>
<li>Preheat the air fryer to <strong>375°F (190°C) for 3 minutes</strong>.</li>
<li>Arrange in a single layer, not touching.</li>
<li>Air fry at <strong>375°F (190°C) for 8 to 10 minutes</strong>, until the coating is golden.</li>
</ol>
<h3>Chef's tips</h3>
<p>Choose <strong>firm</strong> avocados — overripe ones get crushed while you bread them. Japanese panko gives you a much better crunch than standard breadcrumbs.</p>

<h2>6. Truffle fries</h2>
<h3>Ingredients</h3>
<ul>
<li>1.1 lb (500 g) Ratte fingerlings or Charlotte potatoes</li>
<li>1 tablespoon (15 ml) truffle oil</li>
<li>1 tablespoon (15 ml) olive oil</li>
<li>1 oz (30 g) finely grated Parmesan</li>
<li>1 tablespoon chopped fresh parsley</li>
<li>Flaky sea salt</li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Scrub the potatoes but don't peel them (the skin adds crunch). Cut into <strong>⅓-inch (0.8 cm) sticks</strong>.</li>
<li>Soak in cold water for <strong>30 minutes</strong>, then drain and dry.</li>
<li>Toss with the olive oil only (the truffle oil goes on after cooking).</li>
<li>Preheat to <strong>350°F (180°C) for 3 minutes</strong>.</li>
<li>Air fry at <strong>350°F (180°C) for 10 minutes</strong>, shake, then <strong>400°F (200°C) for 8 minutes</strong>.</li>
<li>Take them out and drizzle right away with the truffle oil, then top with the Parmesan and parsley.</li>
<li>Season with flaky sea salt and serve immediately.</li>
</ol>
<h3>Chef's tips</h3>
<p><strong>Never</strong> cook truffle oil — heat destroys its delicate aroma. Always add it after cooking.</p>

<h2>7. Belgian-style fries (double-cooked)</h2>
<h3>Ingredients</h3>
<ul>
<li>1.3 lb (600 g) Bintje or russet potatoes</li>
<li>2 tablespoons (30 ml) sunflower oil</li>
<li>1 teaspoon salt</li>
</ul>
<h3>Instructions</h3>
<ol>
<li>Peel and cut into thick sticks, <strong>½ to ⅝ inch (1.2 to 1.5 cm)</strong> — Belgian frites are thicker than standard fries.</li>
<li>Soak in cold water for <strong>1 hour</strong>, changing the water after 30 minutes.</li>
<li>Drain and dry very thoroughly.</li>
<li>Toss with 1 tablespoon of the oil.</li>
<li><strong>First cook:</strong> preheat to <strong>320°F (160°C)</strong>, then air fry for <strong>15 minutes</strong>. The fries should be cooked through but not golden.</li>
<li>Take them out and let them rest for <strong>10 minutes</strong> at room temperature.</li>
<li>Toss with the second tablespoon of oil.</li>
<li><strong>Second cook:</strong> raise the heat to <strong>400°F (200°C)</strong> and air fry for <strong>8 to 10 minutes</strong>, until evenly golden.</li>
</ol>
<h3>Chef's tips</h3>
<p>Cooking twice is the secret of real Belgian fry shops (friteries). The first round cooks the inside, the second crisps the outside. The rest in between lets moisture inside the fries move to the surface, which guarantees an ultra-crispy finish.</p>

<h2>Temperature and time cheat sheet</h2>
<table>
<thead>
<tr><th>Recipe</th><th>Temperature</th><th>Total time</th><th>Quantity</th></tr>
</thead>
<tbody>
<tr><td>Classic fries</td><td>350°F, then 400°F (180°C, then 200°C)</td><td>18–20 min</td><td>1.1 lb (500 g)</td></tr>
<tr><td>Sweet potato</td><td>375°F, then 400°F (190°C, then 200°C)</td><td>13–15 min</td><td>1.1 lb (500 g)</td></tr>
<tr><td>Polenta</td><td>400°F (200°C)</td><td>12–15 min</td><td>8.8 oz (250 g) polenta</td></tr>
<tr><td>Zucchini</td><td>400°F (200°C)</td><td>10–12 min</td><td>1.3 lb (600 g)</td></tr>
<tr><td>Avocado</td><td>375°F (190°C)</td><td>8–10 min</td><td>2 avocados</td></tr>
<tr><td>Truffle</td><td>350°F, then 400°F (180°C, then 200°C)</td><td>18 min</td><td>1.1 lb (500 g)</td></tr>
<tr><td>Belgian (double-cooked)</td><td>320°F, then 400°F (160°C, then 200°C)</td><td>23–25 min + rest</td><td>1.3 lb (600 g)</td></tr>
</tbody>
</table>

<h2>General tips for perfect air fryer fries</h2>
<p>Whatever the recipe, these rules always apply:</p>
<ul>
<li><strong>Always dry your fries</strong> — moisture blocks the Maillard reaction that gives you a golden, crispy crust.</li>
<li><strong>Don't overcrowd the basket</strong> — hot air has to circulate freely around every fry.</li>
<li><strong>Shake the basket halfway through</strong> — that's how every side cooks evenly.</li>
<li><strong>Always preheat your air fryer</strong> — 3 minutes is usually enough.</li>
<li><strong>Go easy on the oil</strong> — 1 tablespoon per 1.1 lb (500 g) of potatoes is plenty.</li>
</ul>
<p>Next, try our <a href="/us/blog/recettes-poulet-croustillant-airfryer">crispy air fryer chicken recipes</a>, which pair perfectly with these fries, or read our guide to <a href="/us/blog/cuisiner-healthy-airfryer">healthy air fryer cooking</a>.</p>

<h2>Nutrition comparison: air fryer vs. deep fryer</h2>
<table>
<thead><tr><th>Recipe (7 oz/200 g serving)</th><th>Air fryer calories</th><th>Deep fryer calories</th><th>Air fryer fat</th><th>Deep fryer fat</th><th>Calories saved</th></tr></thead>
<tbody>
<tr><td>Classic fries</td><td>290</td><td>580</td><td>8 g</td><td>30 g</td><td>-50%</td></tr>
<tr><td>Sweet potato</td><td>260</td><td>520</td><td>7 g</td><td>26 g</td><td>-50%</td></tr>
<tr><td>Breaded zucchini</td><td>230</td><td>420</td><td>8 g</td><td>26 g</td><td>-45%</td></tr>
<tr><td>Truffle fries</td><td>330</td><td>600</td><td>14 g</td><td>32 g</td><td>-45%</td></tr>
<tr><td>Belgian-style</td><td>300</td><td>580</td><td>9 g</td><td>30 g</td><td>-48%</td></tr>
</tbody>
</table>
<p><em>Rough estimates for a 7 oz (200 g) serving, based on the amount of oil in each recipe: actual values vary with the potato variety, the cut and how much oil is absorbed.</em></p>

<h2>5-minute homemade dipping sauces: the best pairings</h2>
<ul>
<li><strong>Light aioli:</strong> 2 tbsp Greek yogurt + 1 grated garlic clove + salt. Perfect with classic fries.</li>
<li><strong>Chipotle sauce:</strong> light mayo + chipotle powder + lime juice. Ideal with sweet potato fries.</li>
<li><strong>Truffle-Parmesan sauce:</strong> sour cream + a few drops of truffle oil + grated Parmesan. For truffle fries only.</li>
<li><strong>Wasabi-sesame sauce:</strong> plain yogurt + wasabi + toasted sesame seeds. A perfect match for avocado fries.</li>
<li><strong>Spicy tomato sauce:</strong> strained tomatoes (passata) + red pepper flakes + fresh basil. A classic with zucchini fries.</li>
</ul>`,
    ca: `<h2>Introduction</h2>
<p>Air fryer fries are one of the best reasons to own an air fryer. With <strong>far less fat</strong> than a traditional deep fryer (manufacturers claim up to 80% less), you get fries that are crispy outside and fluffy inside. Whether you use a <a href="/ca/blog/test-ninja-foodi-max-dual-zone">Ninja Foodi Max</a> or a <a href="/ca/blog/test-philips-airfryer-3000-xl">Philips 3000 XL</a>, these seven fries recipes will add some variety to your meals.</p>
<p>Perfect air fryer fries come down to three things: even cutting, soaking to remove excess starch, and cooking in two stages. Below, each recipe comes with precise quantities, exact temperatures and guideline cooking times to adjust to the power of your appliance.</p>

<h2>1. Classic Potato Fries</h2>
<h3>Ingredients</h3>
<ul>
<li>500 g (about 1 lb) potatoes that are good for frying, such as russet or Yukon Gold</li>
<li>1 tablespoon (15 mL) olive oil</li>
<li>1 teaspoon fine salt</li>
<li>½ teaspoon smoked paprika (optional)</li>
</ul>
<h3>Preparation</h3>
<ol>
<li>Peel the potatoes and cut them into even sticks about <strong>1 cm (½ in.) thick</strong>.</li>
<li>Soak in cold water for <strong>at least 30 minutes</strong> (ideally 1 hour) to remove the starch.</li>
<li>Drain and dry thoroughly with a clean dish towel or paper towels. <strong>This step is crucial</strong>: damp fries will never crisp up.</li>
<li>Toss the fries with the olive oil and salt in a bowl.</li>
<li>Preheat the air fryer to <strong>180°C (350°F) for 3 minutes</strong>.</li>
<li>Arrange the fries in a single layer without overlapping.</li>
<li>Cook at <strong>180°C (350°F) for 10 minutes</strong>, shake the basket, then increase to <strong>200°C (400°F) for 8 to 10 minutes</strong>.</li>
<li>Sprinkle with smoked paprika and serve right away.</li>
</ol>
<h3>Chef's Tips</h3>
<p>For extra crispiness, add <strong>½ teaspoon of cornstarch</strong> to the oil and salt mixture. The starch forms a thin coating that boosts the crunch. Never overcrowd the basket — cook in two batches if you need to. See our guide to <a href="/ca/blog/erreurs-courantes-airfryer">common air fryer mistakes</a> to avoid the classic pitfalls.</p>

<h2>2. Sweet Potato Fries</h2>
<h3>Ingredients</h3>
<ul>
<li>500 g (about 1 lb) sweet potatoes</li>
<li>1 tablespoon (15 mL) melted coconut oil</li>
<li>1 teaspoon ground cinnamon</li>
<li>½ teaspoon salt</li>
<li>Pinch of cayenne pepper</li>
</ul>
<h3>Preparation</h3>
<ol>
<li>Peel the sweet potatoes and cut them into sticks <strong>0.8 cm (about ⅓ in.) thick</strong> (thinner than classic fries, since they soften faster).</li>
<li>Soak in cold water for <strong>20 minutes</strong>.</li>
<li>Drain and dry thoroughly.</li>
<li>Toss with the coconut oil, cinnamon, salt and cayenne pepper.</li>
<li>Preheat the air fryer to <strong>190°C (375°F) for 3 minutes</strong>.</li>
<li>Arrange in a single layer.</li>
<li>Cook at <strong>190°C (375°F) for 8 minutes</strong>, shake, then continue at <strong>200°C (400°F) for 5 to 7 minutes</strong>.</li>
</ol>
<h3>Chef's Tips</h3>
<p>Sweet potatoes contain more sugar and brown faster, so watch them closely in the last few minutes. The cinnamon-cayenne combination gives a great sweet-and-spicy contrast. Serve with a Greek yogurt and chive dip.</p>

<h2>3. Polenta Fries</h2>
<h3>Ingredients</h3>
<ul>
<li>250 g instant polenta</li>
<li>750 mL (3 cups) water</li>
<li>50 g grated Parmesan</li>
<li>1 tablespoon (15 g) butter</li>
<li>1 teaspoon salt</li>
<li>1 tablespoon olive oil</li>
<li>1 teaspoon herbes de Provence</li>
</ul>
<h3>Preparation</h3>
<ol>
<li>Bring the salted water to a boil. Pour in the polenta, stirring constantly for <strong>5 minutes</strong>.</li>
<li>Remove from the heat and stir in the butter and Parmesan.</li>
<li>Pour into a lined rectangular pan to a depth of <strong>1.5 cm (just over ½ in.)</strong>. Refrigerate for <strong>at least 2 hours</strong>.</li>
<li>Turn out and cut into sticks of <strong>1.5 x 8 cm (about ½ x 3¼ in.)</strong>.</li>
<li>Brush with olive oil and sprinkle with herbes de Provence.</li>
<li>Preheat the air fryer to <strong>200°C (400°F) for 3 minutes</strong>.</li>
<li>Cook at <strong>200°C (400°F) for 12 to 15 minutes</strong>, flipping halfway through.</li>
</ol>
<h3>Chef's Tips</h3>
<p>The polenta must be very firm before you cut it. If it's too soft, chill it longer. These fries are naturally gluten-free and make an excellent side for grilled meats.</p>

<h2>4. Zucchini Fries</h2>
<h3>Ingredients</h3>
<ul>
<li>3 medium zucchini (about 600 g / 1⅓ lb)</li>
<li>80 g fine breadcrumbs</li>
<li>40 g grated Parmesan</li>
<li>2 beaten eggs</li>
<li>50 g all-purpose flour</li>
<li>1 teaspoon garlic powder</li>
<li>Salt and pepper</li>
</ul>
<h3>Preparation</h3>
<ol>
<li>Cut the zucchini into sticks <strong>7 cm (2¾ in.) long and 1 cm (½ in.) thick</strong>.</li>
<li>Salt lightly and let drain on paper towels for <strong>15 minutes</strong>.</li>
<li>Set up three shallow dishes: flour, beaten eggs, and the breadcrumb, Parmesan and garlic mix.</li>
<li>Coat each stick in flour, then egg, then the breadcrumb mixture, pressing firmly.</li>
<li>Lightly spray or brush with oil.</li>
<li>Preheat the air fryer to <strong>200°C (400°F) for 3 minutes</strong>.</li>
<li>Cook at <strong>200°C (400°F) for 10 to 12 minutes</strong>, flipping halfway through.</li>
</ol>
<h3>Chef's Tips</h3>
<p>The key is draining the zucchini well: moisture is the enemy of crispiness. For a <a href="/ca/blog/cuisiner-healthy-airfryer">healthier version</a>, swap the breadcrumbs for almond flour. Serve with warm marinara sauce.</p>

<h2>5. Avocado Fries</h2>
<h3>Ingredients</h3>
<ul>
<li>2 firm but ripe avocados</li>
<li>60 g panko breadcrumbs</li>
<li>1 beaten egg</li>
<li>30 g all-purpose flour</li>
<li>1 teaspoon ground cumin</li>
<li>½ teaspoon Espelette pepper (or chili flakes)</li>
<li>Juice of half a lime</li>
</ul>
<h3>Preparation</h3>
<ol>
<li>Halve the avocados, remove the pit and peel. Cut each half into <strong>6 wedges</strong> (24 fries in total).</li>
<li>Drizzle with lime juice right away to prevent browning.</li>
<li>Set up three dishes: seasoned flour (cumin, pepper), beaten egg, panko.</li>
<li>Bread each wedge: flour, egg, panko.</li>
<li>Preheat the air fryer to <strong>190°C (375°F) for 3 minutes</strong>.</li>
<li>Place in a single layer, not touching.</li>
<li>Cook at <strong>190°C (375°F) for 8 to 10 minutes</strong> until the coating is golden.</li>
</ol>
<h3>Chef's Tips</h3>
<p>Choose <strong>firm</strong> avocados — overripe ones get crushed when you bread them. Panko gives a much better crunch than regular breadcrumbs.</p>

<h2>6. Truffle Fries</h2>
<h3>Ingredients</h3>
<ul>
<li>500 g (about 1 lb) fingerling or other small waxy potatoes</li>
<li>1 tablespoon (15 mL) truffle oil</li>
<li>1 tablespoon (15 mL) olive oil</li>
<li>30 g finely grated Parmesan</li>
<li>1 tablespoon chopped fresh parsley</li>
<li>Flaky sea salt</li>
</ul>
<h3>Preparation</h3>
<ol>
<li>Wash the potatoes but don't peel them (the skin adds crunch). Cut into <strong>0.8 cm (about ⅓ in.) sticks</strong>.</li>
<li>Soak in cold water for <strong>30 minutes</strong>, then drain and dry.</li>
<li>Toss with the olive oil only (the truffle oil goes on after cooking).</li>
<li>Preheat to <strong>180°C (350°F) for 3 minutes</strong>.</li>
<li>Cook at <strong>180°C (350°F) for 10 minutes</strong>, shake, then cook at <strong>200°C (400°F) for 8 minutes</strong>.</li>
<li>Remove and immediately drizzle with the truffle oil, then top with the Parmesan and parsley.</li>
<li>Season with flaky sea salt and serve right away.</li>
</ol>
<h3>Chef's Tips</h3>
<p><strong>Never</strong> cook truffle oil — heat destroys its delicate aroma. Always add it after cooking.</p>

<h2>7. Belgian-Style Fries (Double Cook)</h2>
<h3>Ingredients</h3>
<ul>
<li>600 g (about 1⅓ lb) russet or Bintje potatoes</li>
<li>2 tablespoons (30 mL) sunflower oil</li>
<li>1 teaspoon salt</li>
</ul>
<h3>Preparation</h3>
<ol>
<li>Peel and cut into thick sticks of <strong>1.2 to 1.5 cm (about ½ in.)</strong> — Belgian frites are thicker than French fries.</li>
<li>Soak in cold water for <strong>1 hour</strong>, changing the water after 30 minutes.</li>
<li>Drain and dry very thoroughly.</li>
<li>Toss with 1 tablespoon of the oil.</li>
<li><strong>First cook:</strong> preheat to <strong>160°C (325°F)</strong> and cook for <strong>15 minutes</strong>. The fries should be cooked through but not golden.</li>
<li>Remove and let rest for <strong>10 minutes</strong> at room temperature.</li>
<li>Add the second tablespoon of oil.</li>
<li><strong>Second cook:</strong> increase to <strong>200°C (400°F)</strong> and cook for <strong>8 to 10 minutes</strong> until evenly golden.</li>
</ol>
<h3>Chef's Tips</h3>
<p>The double cook is the classic secret of Belgian fry shops (friteries). The first cook softens the inside, the second crisps the outside. Resting between the two lets the moisture inside move to the surface, for an ultra-crispy result.</p>

<h2>Temperature and Time Summary</h2>
<table>
<thead>
<tr><th>Recipe</th><th>Temperature</th><th>Total Time</th><th>Quantity</th></tr>
</thead>
<tbody>
<tr><td>Classic fries</td><td>180°C (350°F), then 200°C (400°F)</td><td>18–20 min</td><td>500 g</td></tr>
<tr><td>Sweet potato</td><td>190°C (375°F), then 200°C (400°F)</td><td>13–15 min</td><td>500 g</td></tr>
<tr><td>Polenta</td><td>200°C (400°F)</td><td>12–15 min</td><td>250 g polenta</td></tr>
<tr><td>Zucchini</td><td>200°C (400°F)</td><td>10–12 min</td><td>600 g</td></tr>
<tr><td>Avocado</td><td>190°C (375°F)</td><td>8–10 min</td><td>2 avocados</td></tr>
<tr><td>Truffle</td><td>180°C (350°F), then 200°C (400°F)</td><td>18 min</td><td>500 g</td></tr>
<tr><td>Belgian (double cook)</td><td>160°C (325°F), then 200°C (400°F)</td><td>23–25 min + rest</td><td>600 g</td></tr>
</tbody>
</table>

<h2>General Tips for Perfect Air Fryer Fries</h2>
<p>Whatever the recipe, these rules always apply:</p>
<ul>
<li><strong>Always dry your fries</strong> — moisture gets in the way of the Maillard reaction that creates golden crispiness.</li>
<li><strong>Don't overcrowd the basket</strong> — hot air must circulate freely around each fry.</li>
<li><strong>Shake the basket halfway through</strong> — for even cooking on all sides.</li>
<li><strong>Always preheat your air fryer</strong> — 3 minutes is usually enough.</li>
<li><strong>Use as little oil as possible</strong> — 1 tablespoon per 500 g (about 1 lb) is plenty.</li>
</ul>
<p>To go further, try our <a href="/ca/blog/recettes-poulet-croustillant-airfryer">crispy air fryer chicken recipes</a>, which pair perfectly with these fries, or read our guide to <a href="/ca/blog/cuisiner-healthy-airfryer">healthy air fryer cooking</a>.</p>

<h2>Nutritional comparison: air fryer vs traditional deep fryer</h2>
<table>
<thead><tr><th>Recipe (200 g)</th><th>Air fryer calories</th><th>Deep fryer calories</th><th>Air fryer fat</th><th>Deep fryer fat</th><th>Calories saved</th></tr></thead>
<tbody>
<tr><td>Classic fries</td><td>290 kcal</td><td>580 kcal</td><td>8 g</td><td>30 g</td><td>-50%</td></tr>
<tr><td>Sweet potato</td><td>260 kcal</td><td>520 kcal</td><td>7 g</td><td>26 g</td><td>-50%</td></tr>
<tr><td>Breaded zucchini</td><td>230 kcal</td><td>420 kcal</td><td>8 g</td><td>26 g</td><td>-45%</td></tr>
<tr><td>Truffle fries</td><td>330 kcal</td><td>600 kcal</td><td>14 g</td><td>32 g</td><td>-45%</td></tr>
<tr><td>Belgian-style</td><td>300 kcal</td><td>580 kcal</td><td>9 g</td><td>30 g</td><td>-48%</td></tr>
</tbody>
</table>
<p><em>Estimates for a 200 g serving, based on the oil quantities in the recipes: actual values vary with the potato variety, the cut and how much oil is absorbed.</em></p>

<h2>5-minute homemade dipping sauces: the best pairings</h2>
<ul>
<li><strong>Light aioli:</strong> 2 tbsp Greek yogurt + 1 grated garlic clove + salt. Perfect with classic fries.</li>
<li><strong>Chipotle sauce:</strong> light mayo + chipotle powder + lime juice. Ideal with sweet potato fries.</li>
<li><strong>Truffle-Parmesan sauce:</strong> sour cream + a few drops of truffle oil + grated Parmesan. For truffle fries only.</li>
<li><strong>Wasabi-sesame sauce:</strong> plain yogurt + wasabi + toasted sesame seeds. Pairs perfectly with avocado fries.</li>
<li><strong>Spicy tomato sauce:</strong> strained tomatoes (passata) + chili flakes + fresh basil. A classic with zucchini fries.</li>
</ul>`,
  },
  faq: [
    {
      question: {
        fr: 'Vaut-il mieux utiliser des frites surgelées ou fraîches dans l\'airfryer ?',
        en: 'Is it better to use frozen or fresh chips in an air fryer?',
        de: 'Tiefkühl-Pommes oder frische Pommes: Was ist besser für die Heißluftfritteuse?',
        es: '¿Qué es mejor en la freidora de aire: patatas frescas o congeladas?',
        it: 'Meglio le patatine surgelate o quelle fresche nella friggitrice ad aria?',
        nl: 'Kun je beter diepvriesfrietjes of verse frietjes gebruiken in de airfryer?',
        pl: 'Czy lepiej używać mrożonych, czy świeżych frytek we frytkownicy beztłuszczowej?',
        sv: 'Är frysta eller färska pommes frites bäst i airfryern?',
        us: 'Are fresh or frozen fries better in an air fryer?',
        ca: 'Is it better to use frozen or fresh fries in the air fryer?',
      },
      answer: {
        fr: 'Les deux fonctionnent très bien. Les frites fraîches offrent un meilleur goût et une texture supérieure, surtout après trempage dans l\'eau. Les surgelées sont plus pratiques et cuisent directement sans préparation. Ajoutez 2-3 minutes au temps de cuisson pour les surgelées et secouez le panier à mi-cuisson.',
        en: 'Both work very well. Fresh chips taste better and have a better texture, especially if you soak them in water first. Frozen chips are more convenient and go straight in with no preparation. Add 2–3 minutes to the cooking time for frozen chips, and shake the basket halfway through.',
        de: 'Beides funktioniert sehr gut. Frische Pommes schmecken besser und haben die schönere Konsistenz, vor allem wenn Sie sie vorher wässern. Tiefkühl-Pommes sind bequemer und kommen ohne Vorbereitung direkt in den Korb. Rechnen Sie bei Tiefkühlware 2 bis 3 Minuten mehr Garzeit ein und schütteln Sie den Korb nach der Hälfte der Zeit, damit alle Pommes gleichmäßig knusprig werden.',
        es: 'Las dos funcionan muy bien. Las frescas saben mejor y tienen mejor textura, sobre todo si las dejas antes en remojo. Las congeladas son más prácticas: van directas a la cesta, sin preparación. Con las congeladas, añade 2 o 3 minutos al tiempo de cocción y agita la cesta a mitad de cocción.',
        it: 'Vanno bene entrambe. Le patatine fresche hanno più gusto e una consistenza migliore, soprattutto se le lasci prima in ammollo in acqua. Quelle surgelate sono più pratiche e si cuociono così come sono, senza preparazione. Per le surgelate aggiungi 2-3 minuti al tempo di cottura e scuoti il cestello a metà.',
        nl: 'Allebei werken ze prima. Verse frietjes smaken beter en hebben een betere structuur, zeker als je ze eerst in water laat weken. Diepvriesfrietjes zijn handiger: je bakt ze zo uit de zak, zonder voorbereiding. Bak diepvriesfrietjes 2 tot 3 minuten langer en schud de mand halverwege.',
        pl: 'Jedne i drugie sprawdzają się bardzo dobrze. Świeże frytki są smaczniejsze i mają lepszą konsystencję, zwłaszcza jeśli wcześniej namoczysz je w wodzie. Mrożone są wygodniejsze – wkładasz je do kosza bez żadnego przygotowania. W przypadku mrożonych wydłuż czas smażenia o 2–3 minuty i w połowie potrząśnij koszem.',
        sv: 'Båda fungerar mycket bra. Färska pommes frites ger bättre smak och struktur, särskilt om de har legat i blöt först. Frysta är smidigare och kan tillagas direkt, utan förberedelser. Lägg till 2–3 minuter för frysta pommes och skaka korgen halvvägs, så blir de jämnt krispiga.',
        us: 'Both work well. Fresh-cut fries taste better and have a better texture, especially after a soak in water. Frozen fries are more convenient and go straight into the basket with no prep. Add 2 to 3 minutes to the cook time for frozen fries, and shake the basket halfway through so they crisp evenly.',
        ca: 'Both work very well. Fresh fries have better flavour and texture, especially after a soak in water. Frozen fries are more convenient and go straight into the basket with no prep. Add 2 to 3 minutes to the cooking time for frozen fries and shake the basket halfway through for even crispiness.',
      },
    },
    {
      question: {
        fr: 'Combien de temps faut-il tremper les pommes de terre avant de les cuire ?',
        en: 'How long should you soak potatoes before air frying them?',
        de: 'Wie lange sollte man Kartoffeln vor dem Garen wässern?',
        es: '¿Cuánto tiempo hay que dejar las patatas en remojo antes de cocinarlas?',
        it: 'Per quanto tempo vanno lasciate in ammollo le patate prima della cottura?',
        nl: 'Hoe lang moet je aardappelen weken voordat je ze in de airfryer bakt?',
        pl: 'Jak długo moczyć ziemniaki przed smażeniem?',
        sv: 'Hur länge ska potatisen ligga i blöt innan den åker in i airfryern?',
        us: 'How long should you soak potatoes before air frying?',
        ca: 'How long should you soak potatoes before air frying?',
      },
      answer: {
        fr: 'Trempez les frites coupées dans l\'eau froide pendant 30 minutes minimum, idéalement 1 à 2 heures. Cela élimine l\'amidon de surface qui empêche le croustillant. Pour un résultat optimal, changez l\'eau quand elle devient trouble. Séchez soigneusement les frites avant de les huiler et de les enfourner.',
        en: 'Soak the cut chips in cold water for at least 30 minutes, ideally 1 to 2 hours. This removes the surface starch that stops them crisping up. For the best results, change the water when it turns cloudy. Dry the chips thoroughly before you oil them and put them in the air fryer.',
        de: 'Legen Sie die geschnittenen Pommes mindestens 30 Minuten in kaltes Wasser, am besten 1 bis 2 Stunden. So löst sich die Stärke an der Oberfläche, die das Knusprigwerden verhindert. Wechseln Sie das Wasser, sobald es trüb wird. Trocknen Sie die Pommes anschließend gründlich ab, bevor Sie sie mit Öl mischen und in den Korb geben.',
        es: 'Deja las patatas cortadas en agua fría al menos 30 minutos; lo ideal es de 1 a 2 horas. Así se elimina el almidón de la superficie, que impide que queden crujientes. Para un resultado óptimo, cambia el agua cuando se enturbie. Sécalas bien antes de untarlas con aceite y meterlas en la freidora.',
        it: 'Lascia le patatine tagliate in ammollo in acqua fredda per almeno 30 minuti, meglio ancora 1-2 ore. Così elimini l\'amido in superficie, che impedisce alle patatine di diventare croccanti. Per un risultato ottimale, cambia l\'acqua quando diventa torbida. Poi asciugale con cura prima di condirle con l\'olio e metterle nel cestello.',
        nl: 'Week de gesneden frietjes minstens 30 minuten in koud water, het liefst 1 tot 2 uur. Zo verdwijnt het zetmeel aan de buitenkant, dat anders verhindert dat ze krokant worden. Voor het beste resultaat ververs je het water zodra het troebel wordt. Dep de frietjes grondig droog voordat je er olie over doet en ze in de mand legt.',
        pl: 'Pokrojone frytki namocz w zimnej wodzie na co najmniej 30 minut, a najlepiej na 1–2 godziny. Woda wypłukuje z powierzchni skrobię, która utrudnia uzyskanie chrupkości. Najlepszy efekt osiągniesz, wymieniając wodę, gdy zrobi się mętna. Zanim posmarujesz frytki olejem i włożysz je do frytkownicy, dokładnie je osusz.',
        sv: 'Lägg de skurna stavarna i kallt vatten i minst 30 minuter, helst 1–2 timmar. Då sköljs ytstärkelsen bort – den hindrar annars stavarna från att bli krispiga. Bäst resultat får du om du byter vatten när det blir grumligt. Torka stavarna noga innan du blandar dem med olja och lägger dem i korgen.',
        us: 'Soak the cut potatoes in cold water for at least 30 minutes, ideally 1 to 2 hours. This rinses off the surface starch that keeps fries from crisping. For best results, change the water when it turns cloudy. Pat the fries completely dry before you toss them with oil and put them in the basket.',
        ca: 'Soak cut fries in cold water for at least 30 minutes, ideally 1 to 2 hours. This removes the surface starch that keeps them from crisping. For the best results, change the water when it turns cloudy. Pat the fries completely dry before tossing them with oil and putting them in the air fryer basket.',
      },
    },
    {
      question: {
        fr: 'Quelles variétés de pommes de terre sont les meilleures pour les frites à l\'airfryer ?',
        en: 'Which potato varieties are best for air fryer chips?',
        de: 'Welche Kartoffelsorten eignen sich am besten für Pommes aus der Heißluftfritteuse?',
        es: '¿Qué variedad de patata es mejor para hacer patatas fritas en la freidora de aire?',
        it: 'Quali patate sono le migliori per le patatine nella friggitrice ad aria?',
        nl: 'Welke aardappelrassen zijn het best voor frietjes uit de airfryer?',
        pl: 'Jakie odmiany ziemniaków najlepiej nadają się na frytki z frytkownicy beztłuszczowej?',
        sv: 'Vilka potatissorter passar bäst till pommes frites i airfryer?',
        us: 'Which potato varieties are best for air fryer fries?',
        ca: 'Which potato varieties are best for air fryer fries?',
      },
      answer: {
        fr: 'Les variétés spéciales frites comme la Bintje et l\'Agria sont idéales : riches en amidon, elles deviennent croustillantes à l\'extérieur et moelleuses à l\'intérieur. La Maris Piper fonctionne aussi très bien. Évitez les pommes de terre nouvelles, trop aqueuses. Pour les frites de patate douce, choisissez des tubercules fermes et réguliers.',
        en: 'Varieties grown for chips, such as Bintje and Agria, are ideal: they are high in starch, so they turn crisp on the outside and fluffy inside. Maris Piper also works very well. Avoid new potatoes, which are too watery. For sweet potato fries, choose firm, evenly shaped sweet potatoes.',
        de: 'Ideal sind typische Pommes-Sorten wie Bintje und Agria: Dank ihres Stärkegehalts werden sie außen knusprig und innen locker. Auch Maris Piper funktioniert sehr gut. Meiden Sie Frühkartoffeln, sie enthalten zu viel Wasser. Für Süßkartoffel-Pommes wählen Sie feste, gleichmäßig geformte Knollen. Yukon Gold ist eine weitere vielseitige Sorte.',
        es: 'Las variedades para freír, como la Bintje o la Agria, son ideales: como tienen mucho almidón, quedan crujientes por fuera y tiernas por dentro. La Maris Piper también va muy bien. Evita las patatas nuevas, que tienen demasiada agua. Para los bastones de boniato, elige piezas firmes y de forma regular.',
        it: 'Le varietà adatte alla frittura, come Bintje e Agria, sono ideali: ricche di amido, diventano croccanti fuori e morbide dentro. Anche la Maris Piper va molto bene. Evita le patate novelle, che contengono troppa acqua. Per le patatine di patate dolci, scegli tuberi sodi e di forma regolare.',
        nl: 'Frietaardappelen zoals Bintje en Agria zijn ideaal: door hun hoge zetmeelgehalte worden ze krokant van buiten en luchtig van binnen. Maris Piper werkt ook heel goed. Vermijd nieuwe aardappelen, want die bevatten te veel water. Kies voor frietjes van zoete aardappel stevige, gelijkmatig gevormde knollen.',
        pl: 'Idealne są typowo frytkowe odmiany, takie jak Bintje i Agria: mają dużo skrobi, więc frytki wychodzą chrupiące z zewnątrz i puszyste w środku. Bardzo dobrze sprawdza się też Maris Piper. Unikaj młodych ziemniaków – są zbyt wodniste. Na frytki z batatów wybieraj jędrne bulwy o regularnym kształcie.',
        sv: 'Mjöliga sorter som Bintje och Agria är perfekta: den höga stärkelsehalten ger pommes frites som blir krispiga utanpå och mjuka inuti. Maris Piper fungerar också mycket bra. Undvik färskpotatis, som innehåller för mycket vatten. Till sötpotatispommes väljer du fasta sötpotatisar med jämn form.',
        us: 'Starchy frying potatoes are ideal: russets, or Bintje and Agria if you can find them, give fries that are crisp outside and fluffy inside. Yukon Gold is a good all-purpose option, too. Avoid new potatoes, which hold too much water. For sweet potato fries, pick firm, evenly shaped sweet potatoes.',
        ca: 'Starchy potatoes such as russets are ideal for frying: they give fries that are crispy outside and fluffy inside. Yukon Gold is a good all-round option, and in Europe, Bintje and Agria (and Maris Piper in the UK) are the classic choices. Avoid new potatoes, which hold too much water. For sweet potato fries, choose firm, evenly shaped sweet potatoes.',
      },
    },
    {
      question: {
        fr: 'Comment obtenir des frites ultra croustillantes à l\'airfryer ?',
        en: 'How do you get extra-crispy chips in an air fryer?',
        de: 'Wie werden Pommes in der Heißluftfritteuse richtig knusprig?',
        es: '¿Cómo se consiguen unas patatas fritas muy crujientes en la freidora de aire?',
        it: 'Come si fanno patatine croccantissime nella friggitrice ad aria?',
        nl: 'Hoe krijg je extra krokante frietjes in de airfryer?',
        pl: 'Jak zrobić wyjątkowo chrupiące frytki we frytkownicy beztłuszczowej?',
        sv: 'Hur får du riktigt krispiga pommes frites i airfryern?',
        us: 'How do you get extra-crispy fries in an air fryer?',
        ca: 'How do you get ultra-crispy fries in the air fryer?',
      },
      answer: {
        fr: 'Cinq secrets pour des frites ultra croustillantes : trempage d\'au moins 30 minutes, séchage parfait, fine couche d\'huile au spray, cuisson en deux temps (160°C puis 200°C), et panier jamais rempli à plus des deux tiers. La double cuisson est la technique qui fait la plus grande différence dans le résultat final.',
        en: 'Five secrets for extra-crispy chips: soak them for at least 30 minutes, dry them thoroughly, spray on a thin coat of oil, cook them in two stages (160°C then 200°C) and never fill the basket more than two-thirds full. Cooking them twice makes the biggest difference to the end result.',
        de: 'Fünf Tricks für extra knusprige Pommes: mindestens 30 Minuten wässern, gründlich trocknen, dünn mit Öl einsprühen, in zwei Stufen garen (erst 160 °C, dann 200 °C) und den Korb nie mehr als zu zwei Dritteln füllen. Das zweistufige Garen macht beim Ergebnis den größten Unterschied.',
        es: 'Cinco claves: remojo de al menos 30 minutos, secado a conciencia, una capa fina de aceite en spray, cocción en dos tiempos (160 °C y después 200 °C) y la cesta llena, como mucho, hasta dos tercios. La doble cocción es la técnica que más se nota en el resultado final.',
        it: 'Cinque segreti per patatine croccantissime: ammollo di almeno 30 minuti, asciugatura perfetta, un velo d\'olio spray, cottura in due tempi (160 °C e poi 200 °C) e cestello mai riempito oltre i due terzi. È la doppia cottura a fare la differenza più grande sul risultato finale.',
        nl: 'Vijf geheimen voor extra krokante frietjes: minstens 30 minuten weken, heel goed drogen, een dun laagje olie uit een spuitbus, in twee fasen bakken (eerst 160 °C, dan 200 °C) en de mand nooit meer dan voor twee derde vullen. Het twee keer bakken maakt het grootste verschil in het eindresultaat.',
        pl: 'Oto pięć sposobów na wyjątkowo chrupiące frytki: moczenie przez co najmniej 30 minut, dokładne osuszenie, cienka warstwa oleju ze sprayu, smażenie w dwóch etapach (160 °C, potem 200 °C) i kosz wypełniony najwyżej do dwóch trzecich. Największą różnicę w efekcie końcowym daje podwójne smażenie.',
        sv: 'Fem knep för riktigt krispiga pommes frites: blötlägg i minst 30 minuter, torka ordentligt, spraya på ett tunt lager olja, tillaga i två steg (160 °C och sedan 200 °C) och fyll aldrig korgen mer än till två tredjedelar. Det är tillagningen i två steg som gör störst skillnad för slutresultatet.',
        us: 'Five secrets for extra-crispy fries: soak them for at least 30 minutes, dry them completely, use a thin coat of oil spray, cook in two stages (first at 320°F/160°C, then at 400°F/200°C), and never fill the basket more than two-thirds full. The two-stage cook makes the biggest difference.',
        ca: 'Five secrets for ultra-crispy fries: soak them for at least 30 minutes, dry them perfectly, apply a thin coat of cooking spray, cook in two stages, first at 160°C (325°F) and then at 200°C (400°F), and never fill the basket more than two-thirds full. The two-stage technique makes the biggest difference to the final crunch.',
      },
    },
    {
      question: {
        fr: 'Peut-on réchauffer des frites à l\'airfryer ?',
        en: 'Can you reheat chips in an air fryer?',
        de: 'Kann man Pommes in der Heißluftfritteuse aufwärmen?',
        es: '¿Se pueden recalentar patatas fritas en la freidora de aire?',
        it: 'Si possono riscaldare le patatine nella friggitrice ad aria?',
        nl: 'Kun je frietjes opwarmen in de airfryer?',
        pl: 'Czy można odgrzewać frytki we frytkownicy beztłuszczowej?',
        sv: 'Kan du värma upp pommes frites i airfryern?',
        us: 'Can you reheat fries in an air fryer?',
        ca: 'Can you reheat fries in the air fryer?',
      },
      answer: {
        fr: 'Oui, l\'airfryer est la meilleure méthode pour réchauffer des frites. Réglez à 180°C pendant 3 à 5 minutes. Les frites retrouvent leur croustillant comme si elles venaient d\'être cuites, contrairement au micro-ondes qui les ramollit. Pas besoin d\'ajouter d\'huile. Cette technique fonctionne aussi pour les restes de restaurant.',
        en: 'Yes, an air fryer is the best way to reheat chips. Set it to 180°C for 3 to 5 minutes and they come out as crisp as if they\'d just been cooked, unlike in the microwave, which makes them soggy. There\'s no need to add oil. It works for leftover chips from a restaurant too.',
        de: 'Ja, und zwar besser als mit jeder anderen Methode. Stellen Sie 180 °C ein und wärmen Sie die Pommes 3 bis 5 Minuten auf. Sie werden wieder knusprig wie frisch zubereitet, während die Mikrowelle sie weich macht. Zusätzliches Öl brauchen Sie nicht. Das klappt auch mit Pommes, die Sie aus dem Restaurant mitgenommen haben.',
        es: 'Sí, y es la mejor forma de hacerlo. Ponla a 180 °C durante 3-5 minutos. Las patatas recuperan el crujiente como si estuvieran recién hechas, mientras que el microondas las deja blandas. No hace falta añadir aceite. También funciona con las sobras que te llevas del restaurante.',
        it: 'Sì, la friggitrice ad aria è il modo migliore per riscaldare le patatine. Imposta 180 °C per 3-5 minuti: tornano croccanti come appena fatte, mentre il microonde le rende molli. Non serve aggiungere olio. Funziona anche con le patatine avanzate al ristorante e portate a casa.',
        nl: 'Ja, de airfryer is de beste manier om frietjes op te warmen. Stel hem in op 180 °C en warm ze 3 tot 5 minuten op. Ze worden weer krokant alsof ze net gebakken zijn, terwijl ze in de magnetron juist slap worden. Extra olie is niet nodig. Dit werkt ook voor restjes die je uit een restaurant mee naar huis neemt.',
        pl: 'Tak – frytkownica beztłuszczowa to najlepszy sposób na odgrzanie frytek. Ustaw 180 °C na 3–5 minut. Frytki znów będą chrupiące, jakby dopiero co je usmażono – w przeciwieństwie do mikrofalówki, po której robią się miękkie. Nie trzeba dodawać oleju. Ten sposób sprawdza się też przy frytkach przyniesionych z restauracji.',
        sv: 'Ja, airfryern är det bästa sättet att värma upp pommes frites. Ställ in 180 °C i 3–5 minuter. De blir krispiga igen, nästan som nygjorda, till skillnad från i mikron där de blir sladdriga. Du behöver inte tillsätta någon olja. Knepet fungerar lika bra för rester som du tagit med hem från restaurangen.',
        us: 'Yes, an air fryer is the best way to reheat fries. Set it to 350°F (180°C) for 3 to 5 minutes. They crisp back up as if they were just made, unlike in the microwave, which makes them soggy. No extra oil needed. It works great for restaurant leftovers and takeout, too.',
        ca: 'Yes, the air fryer is the best way to reheat fries. Set it to 180°C (350°F) for 3 to 5 minutes. The fries get their crunch back as if freshly cooked, unlike in the microwave, which makes them soggy. No need to add oil. This also works perfectly for leftover takeout fries.',
      },
    },
  ],
}
