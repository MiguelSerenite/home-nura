import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildAuthorPerson, buildPageMetadata } from '@/lib/seo'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'
import { Kicker, SiteFooter } from '@/components/ui'
import { BlackFridaySiloLinks } from '@/components/black-friday/Promos'
import { HTML_LANG, resolveLang } from '@/lib/i18n'
import { ChevronRight } from 'lucide-react'


interface Chapter {
  num: string
  title: string
  body: string
  href: string
  cta: string
}

interface PillarContent {
  kicker: string
  title: string
  subtitle: string
  intro: string
  dossierKicker: string
  dossierTitle: string
  chapters: Chapter[]
  breadcrumb: string
  breadcrumbRoot: string
  categoriesKicker: string
  categoriesTitle: string
  categoriesIntro: string
  seeAllButton: string
  lastUpdated: string
}

const categoryLabels: Record<string, Record<string, string>> = {
  multicuiseurs: {
    fr: 'Multicuiseurs', en: 'Multicookers', de: 'Multikocher',
    es: 'Ollas programables', it: 'Multicooker', nl: 'Multicookers', pl: 'Multicookery', sv: 'Multikokare', us: 'Multicookers', ca: 'Multicookers',
  },
  cafetieres: {
    fr: 'Cafetières connectées', en: 'Coffee machines', de: 'Kaffeevollautomaten',
    es: 'Cafeteras conectadas', it: 'Macchine da caffè automatiche', nl: 'Koffiemachines met bonen', pl: 'Inteligentne ekspresy do kawy', sv: 'Smarta kaffemaskiner', us: 'Smart coffee makers', ca: 'Smart coffee makers',
  },
  balances: {
    fr: 'Balances connectées', en: 'Smart kitchen scales', de: 'Küchenwaagen mit App',
    es: 'Básculas conectadas', it: 'Bilance da cucina smart', nl: 'Slimme keukenweegschalen', pl: 'Inteligentne wagi kuchenne', sv: 'Smarta köksvågar', us: 'Smart kitchen scales', ca: 'Smart scales',
  },
  'thermometres-viande': {
    fr: 'Thermomètres à viande', en: 'Meat thermometers', de: 'Fleischthermometer',
    es: 'Termómetros para carne', it: 'Termometri per carne', nl: 'Vleesthermometers', pl: 'Termometry do mięsa', sv: 'Stektermometrar', us: 'Meat thermometers', ca: 'Meat thermometers',
  },
  'prises-connectees': {
    fr: 'Prises connectées', en: 'Smart plugs', de: 'Smarte Steckdosen',
    es: 'Enchufes inteligentes', it: 'Prese smart', nl: 'Slimme stekkers', pl: 'Inteligentne gniazdka', sv: 'Smarta pluggar', us: 'Smart plugs', ca: 'Smart plugs',
  },
}

const pageContent: Record<string, PillarContent> = {
  fr: {
    kicker: 'Guide pillar · Cuisine connectée',
    title: 'Le guide complet de la cuisine connectée 2026',
    subtitle: '5 catégories, 15 modèles comparés, zéro bruit marketing',
    intro: 'La cuisine connectée n\'est plus un gadget. Entre les multicuiseurs qui remplacent trois appareils, les cafetières qui démarrent avant votre réveil, les balances qui guident vos recettes au gramme près, les thermomètres sans-fil qui évitent d\'ouvrir le four, et les prises qui surveillent votre consommation réelle — chaque objet gagne sa place si vous savez lequel choisir. Ce guide fait le tri, catégorie par catégorie.',
    dossierKicker: 'Le dossier',
    dossierTitle: 'Pourquoi la cuisine connectée s\'impose en 2026',
    chapters: [
      {
        num: 'I',
        title: 'L\'automatisation du quotidien',
        body: 'En 2026, 38 % des foyers français possèdent au moins un appareil de cuisine connecté — multicuiseur ou cafetière en tête. Le moteur n\'est pas la fascination technologique, c\'est le gain de temps mesurable : 5 minutes le matin, 10 minutes le soir, des rôtis réussis à cœur sans surveiller la porte du four. Pour un foyer actif, le retour sur investissement d\'un bon multicuiseur ou d\'une sonde sans-fil se compte en semaines.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Voir nos multicuiseurs sélectionnés',
      },
      {
        num: 'II',
        title: 'Le piège du tout-connecté',
        body: 'Attention aux marques qui surfent sur la vague : prises à 5 € aux firmware non patchés, balances vendues avec un abonnement caché, cafetières qui dépendent d\'un cloud propriétaire qui peut disparaître demain. Notre méthode analyse d\'abord la durabilité logicielle (mises à jour sur 2 ans), puis la précision réelle, avant de valider une recommandation. Aucun produit acheté à notre insu ne passe cette grille.',
        href: '/a-propos',
        cta: 'Notre méthodologie',
      },
      {
        num: 'III',
        title: 'Bluetooth ou Wi-Fi : le bon choix',
        body: 'Bluetooth suffit dans 95 % des cas : portée de 10 mètres, pas de compte cloud, batteries qui tiennent 6 à 12 mois, zéro exposition de données. Wi-Fi uniquement si vous avez un usage à distance (démarrer la cafetière depuis le bureau) ou si vous centralisez dans Home Assistant, Matter/Thread, ou Alexa Routines. Le Wi-Fi ajoute de la complexité, des failles potentielles et une dépendance au routeur — à choisir en conscience.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Nos prises Matter/Thread validées',
      },
      {
        num: 'IV',
        title: 'Notre sélection, sans fausse promesse',
        body: 'Sur 60 modèles évalués en 2026, seuls 15 passent notre grille. Pas de top 100 bidon, pas de produit sponsorisé. Chaque catégorie reçoit 3 à 4 modèles : un entrée de gamme solide, un rapport qualité-prix, un haut de gamme justifié. Tout le reste est écarté, même les marques qu\'on aurait aimé pouvoir recommander. C\'est à ce prix que les recommandations gardent leur sens.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Comparer 3 modèles côte à côte',
      },
    ],
    breadcrumb: 'Guide cuisine connectée',
    breadcrumbRoot: 'Guides',
    categoriesKicker: 'Les 5 catégories',
    categoriesTitle: 'Explorer par type d\'appareil',
    categoriesIntro: 'Chaque catégorie a sa propre logique d\'achat, ses propres pièges, son propre rapport qualité-prix. Plongez dans le détail.',
    seeAllButton: 'Voir tous les modèles',
    lastUpdated: 'Mis à jour le 14 avril 2026',
  },
  en: {
    kicker: 'Complete guide · Smart kitchen',
    title: 'The complete smart kitchen guide 2026',
    subtitle: '5 categories and 15 models compared, without the marketing spin',
    intro: 'Smart kitchen appliances are no longer just gadgets. Multicookers that replace three appliances, coffee machines that start before you wake up, scales that guide your recipes to the gram, wireless thermometers that save you opening the oven door, smart plugs that track how much energy you really use: each one earns its place, as long as you pick the right one. This guide sorts through them, category by category.',
    dossierKicker: 'In depth',
    dossierTitle: 'Why the smart kitchen is taking off in 2026',
    chapters: [
      {
        num: 'I',
        title: 'Everyday tasks on autopilot',
        body: 'In 2026, 38% of French households own at least one smart kitchen appliance, led by multicookers and coffee machines. What drives this isn\'t a love of technology but time saved that you can measure: 5 minutes in the morning, 10 in the evening, and roasts cooked perfectly to the centre without keeping an eye on the oven door. For a busy household, a good multicooker or wireless probe pays for itself within weeks.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'See our multicooker picks',
      },
      {
        num: 'II',
        title: 'The smart-everything trap',
        body: 'Watch out for brands jumping on the bandwagon: bargain-basement plugs with unpatched firmware, scales sold with a hidden subscription, coffee machines that rely on a proprietary cloud that could disappear tomorrow. Our method checks software support first (updates over 2 years), then real-world accuracy. Nothing gets a recommendation without passing this check.',
        href: '/a-propos',
        cta: 'Our methodology',
      },
      {
        num: 'III',
        title: 'Bluetooth or Wi-Fi: the right choice',
        body: 'Bluetooth is enough in 95% of cases: a 10-metre range, no cloud account, batteries that last 6 to 12 months and no data exposed online. Only go for Wi-Fi if you need remote control (starting the coffee machine from the office) or if you run everything through Home Assistant, Matter/Thread or Alexa Routines. Wi-Fi adds complexity, potential security holes and reliance on your router, so choose it with your eyes open.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Our recommended Matter/Thread plugs',
      },
      {
        num: 'IV',
        title: 'Our picks, with no false promises',
        body: 'Of 60 models evaluated in 2026, only 15 meet our criteria. No meaningless top-100 lists, no sponsored products. Each category gets 3 or 4 models: a solid entry-level pick, a best-value pick and a premium model that justifies its price. Everything else is left out, even brands we\'d have liked to recommend. That\'s what it takes for our recommendations to mean something.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Compare 3 models side by side',
      },
    ],
    breadcrumb: 'Smart kitchen guide',
    breadcrumbRoot: 'Guides',
    categoriesKicker: 'The 5 categories',
    categoriesTitle: 'Browse by appliance type',
    categoriesIntro: 'Each category has its own things to look for, its own pitfalls and its own sweet spot for value. Take a closer look.',
    seeAllButton: 'See all models',
    lastUpdated: 'Last updated 14 April 2026',
  },
  de: {
    kicker: 'Großer Ratgeber · Smarte Küche',
    title: 'Der große Ratgeber zur smarten Küche 2026',
    subtitle: '5 Kategorien, 15 Modelle im Vergleich, ohne Marketing-Floskeln',
    intro: 'Smarte Küchengeräte sind längst mehr als Spielerei. Multikocher ersetzen drei Geräte, Kaffeemaschinen starten, bevor Sie aufstehen, Waagen führen grammgenau durchs Rezept, kabellose Thermometer ersparen Ihnen das Öffnen der Ofentür, und WLAN-Steckdosen zeigen Ihren tatsächlichen Verbrauch. Jedes dieser Geräte verdient seinen Platz, wenn Sie das richtige auswählen. Dieser Ratgeber sortiert, Kategorie für Kategorie.',
    dossierKicker: 'Hintergrund',
    dossierTitle: 'Warum sich die smarte Küche 2026 durchsetzt',
    chapters: [
      {
        num: 'I',
        title: 'Automatisierung im Alltag',
        body: '2026 besitzen 38 % der Haushalte in Frankreich mindestens ein smartes Küchengerät, allen voran Multikocher und Kaffeemaschinen. Der Grund ist nicht Technikbegeisterung, sondern messbare Zeitersparnis: 5 Minuten am Morgen, 10 am Abend, Braten, die innen perfekt gar sind, ohne dass Sie die Ofentür im Blick behalten müssen. Für einen Haushalt mit wenig Zeit rechnet sich ein guter Multikocher oder ein kabelloser Kerntemperaturfühler innerhalb weniger Wochen.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Zu unseren Multikocher-Empfehlungen',
      },
      {
        num: 'II',
        title: 'Die Falle: alles vernetzen',
        body: 'Vorsicht bei Marken, die nur auf der Trendwelle mitschwimmen: Steckdosen für ein paar Euro mit ungepatchter Firmware, Waagen mit verstecktem Abo, Kaffeemaschinen, die von einer herstellereigenen Cloud abhängen, die morgen schon verschwunden sein kann. Bevor wir etwas empfehlen, schauen wir deshalb zuerst auf die Software-Pflege (Updates über 2 Jahre) und dann auf die tatsächliche Genauigkeit. Kein Produkt kommt ohne diesen Abgleich in die Auswahl.',
        href: '/a-propos',
        cta: 'Unsere Methodik',
      },
      {
        num: 'III',
        title: 'Bluetooth oder WLAN: die richtige Wahl',
        body: 'Bluetooth reicht in 95 % der Fälle: 10 Meter Reichweite, kein Cloud-Konto, Batterien, die 6 bis 12 Monate halten, und Ihre Daten bleiben bei Ihnen. WLAN brauchen Sie nur, wenn Sie Geräte aus der Ferne steuern wollen (die Kaffeemaschine vom Büro aus starten) oder alles in Home Assistant, Matter/Thread oder Alexa-Routinen bündeln. WLAN bringt mehr Komplexität, mögliche Sicherheitslücken und eine Abhängigkeit vom Router mit: Entscheiden Sie bewusst.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Empfohlene Matter/Thread-Steckdosen',
      },
      {
        num: 'IV',
        title: 'Unsere Auswahl, ohne falsche Versprechen',
        body: 'Von 60 Modellen, die wir 2026 bewertet haben, schaffen es nur 15 in unsere Auswahl. Keine aufgeblähten Top-100-Listen, keine gesponserten Produkte. Jede Kategorie bekommt 3 bis 4 Modelle: ein solides Einstiegsmodell, einen Preis-Leistungs-Tipp und ein Premiummodell, das seinen Preis wert ist. Alles andere scheidet aus, auch Marken, die wir gern empfohlen hätten. Nur so bleiben unsere Empfehlungen aussagekräftig.',
        href: '/cuisine-connectee/comparateur',
        cta: '3 Modelle nebeneinander vergleichen',
      },
    ],
    breadcrumb: 'Ratgeber smarte Küche',
    breadcrumbRoot: 'Ratgeber',
    categoriesKicker: 'Die 5 Kategorien',
    categoriesTitle: 'Nach Gerätetyp stöbern',
    categoriesIntro: 'Jede Kategorie hat eigene Kaufkriterien, eigene Fallstricke und ein eigenes Preis-Leistungs-Optimum. Hier geht’s in die Details.',
    seeAllButton: 'Alle Modelle ansehen',
    lastUpdated: 'Aktualisiert am 14. April 2026',
  },
  es: {
    kicker: 'Guía completa · Cocina conectada',
    title: 'La guía completa de la cocina conectada 2026',
    subtitle: '5 categorías, 15 modelos comparados y cero humo de marketing',
    intro: 'La cocina conectada ya no es cosa de gadgets. Ollas programables que sustituyen a tres aparatos, cafeteras que se ponen en marcha antes de que te levantes, básculas que te guían en las recetas gramo a gramo, termómetros inalámbricos que te ahorran abrir el horno y enchufes que controlan lo que gastas de verdad: cada aparato se gana su sitio si sabes cuál elegir. Esta guía hace la criba, categoría por categoría.',
    dossierKicker: 'A fondo',
    dossierTitle: 'Por qué la cocina conectada se impone en 2026',
    chapters: [
      {
        num: 'I',
        title: 'La automatización del día a día',
        body: 'En 2026, en Francia, el 38 % de los hogares tiene al menos un aparato de cocina conectado, sobre todo ollas programables y cafeteras. Lo que mueve la compra no es la fascinación por la tecnología, sino el tiempo que se ahorra, y se nota: 5 minutos por la mañana, 10 por la noche, asados en su punto por dentro sin vigilar la puerta del horno. En una casa con poco tiempo, una buena olla programable o una sonda inalámbrica se amortiza en semanas.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Ver las ollas programables seleccionadas',
      },
      {
        num: 'II',
        title: 'La trampa de conectarlo todo',
        body: 'Ojo con las marcas que se suben a la ola: enchufes de 5 € con firmware sin actualizar, básculas que se venden con una suscripción escondida, cafeteras que dependen de una nube propia que puede desaparecer mañana. Antes de recomendar nada, nuestro método analiza primero el soporte del software (actualizaciones durante 2 años) y después la precisión real. Ningún producto entra en la selección sin pasar estos criterios.',
        href: '/a-propos',
        cta: 'Nuestra metodología',
      },
      {
        num: 'III',
        title: '¿Bluetooth o wifi? Cómo acertar',
        body: 'El Bluetooth basta en el 95 % de los casos: 10 metros de alcance, sin cuenta en la nube, baterías que duran de 6 a 12 meses y ningún dato expuesto. El wifi solo compensa si lo vas a usar a distancia (encender la cafetera desde la oficina) o si lo centralizas todo en Home Assistant, Matter/Thread o las rutinas de Alexa. El wifi añade complejidad, posibles fallos de seguridad y dependencia del router: elígelo sabiendo lo que implica.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Nuestros enchufes Matter/Thread recomendados',
      },
      {
        num: 'IV',
        title: 'Nuestra selección, sin falsas promesas',
        body: 'De los 60 modelos evaluados en 2026, solo 15 superan nuestros criterios. Nada de tops de 100 productos de relleno ni de productos patrocinados. Cada categoría tiene de 3 a 4 modelos: uno básico sólido, uno con la mejor relación calidad-precio y uno de gama alta que justifica lo que cuesta. Todo lo demás se queda fuera, incluso marcas que nos habría gustado poder recomendar. Es la única manera de que las recomendaciones sigan valiendo algo.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Comparar 3 modelos a la vez',
      },
    ],
    breadcrumb: 'Guía de la cocina conectada',
    breadcrumbRoot: 'Guías',
    categoriesKicker: 'Las 5 categorías',
    categoriesTitle: 'Explora por tipo de aparato',
    categoriesIntro: 'Cada categoría tiene su propia lógica de compra, sus propias trampas y su propia relación calidad-precio. Entra en el detalle.',
    seeAllButton: 'Ver todos los modelos',
    lastUpdated: 'Actualizado el 14 de abril de 2026',
  },
  it: {
    kicker: 'Guida completa · Cucina smart',
    title: 'La guida completa alla cucina smart 2026',
    subtitle: '5 categorie, 15 modelli confrontati, niente fumo negli occhi',
    intro: 'La cucina smart non è più una questione di gadget. Multicooker che sostituiscono tre apparecchi, macchine da caffè che partono prima che ti svegli, bilance che ti guidano nelle ricette al grammo, termometri wireless che ti evitano di aprire il forno, prese che misurano i consumi reali: ogni apparecchio si guadagna il suo posto, se sai quale scegliere. Questa guida fa ordine, categoria per categoria.',
    dossierKicker: 'L\'approfondimento',
    dossierTitle: 'Perché nel 2026 la cucina smart si sta affermando',
    chapters: [
      {
        num: 'I',
        title: 'L\'automazione di tutti i giorni',
        body: 'Nel 2026 il 38% delle famiglie francesi possiede almeno un elettrodomestico da cucina smart, soprattutto multicooker e macchine da caffè. A spingere non è il fascino della tecnologia, ma il tempo risparmiato, che si può misurare: 5 minuti al mattino, 10 la sera, arrosti cotti a puntino senza dover controllare lo sportello del forno. Per una famiglia sempre di corsa, un buon multicooker o una sonda wireless si ripagano in poche settimane.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Vedi i multicooker selezionati',
      },
      {
        num: 'II',
        title: 'La trappola del «tutto smart»',
        body: 'Attenzione ai marchi che cavalcano la moda: prese da 5 € con firmware mai aggiornato, bilance vendute con un abbonamento nascosto, macchine da caffè che dipendono da un cloud proprietario che domani potrebbe sparire. Il nostro metodo valuta prima la durata del supporto software (aggiornamenti per 2 anni), poi la precisione reale, e solo dopo conferma un consiglio. Nessun prodotto entra nella selezione senza superare questo filtro.',
        href: '/a-propos',
        cta: 'La nostra metodologia',
      },
      {
        num: 'III',
        title: 'Bluetooth o Wi-Fi: quale scegliere',
        body: 'Nel 95% dei casi basta il Bluetooth: 10 metri di portata, nessun account cloud, batterie che durano 6-12 mesi e nessun dato esposto. Il Wi-Fi serve solo se vuoi comandare l\'apparecchio da fuori casa (accendere la macchina del caffè dall\'ufficio) o gestirlo da Home Assistant, Matter/Thread o dalle routine di Alexa. Il Wi-Fi aggiunge complessità, possibili falle di sicurezza e la dipendenza dal router: sceglilo a ragion veduta.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Le prese Matter/Thread che consigliamo',
      },
      {
        num: 'IV',
        title: 'La nostra selezione, senza false promesse',
        body: 'Dei 60 modelli valutati nel 2026, solo 15 superano il nostro filtro. Niente finte top 100, niente prodotti sponsorizzati. Ogni categoria ha 3-4 modelli: un modello base solido, uno con il miglior rapporto qualità-prezzo e un top di gamma che vale quello che costa. Tutto il resto viene scartato, anche i marchi che avremmo voluto consigliare. È l\'unico modo perché i nostri consigli abbiano un senso.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Confronta 3 modelli fianco a fianco',
      },
    ],
    breadcrumb: 'Guida alla cucina smart',
    breadcrumbRoot: 'Guide',
    categoriesKicker: 'Le 5 categorie',
    categoriesTitle: 'Scegli per tipo di apparecchio',
    categoriesIntro: 'Ogni categoria ha la sua logica d\'acquisto, le sue trappole e il suo rapporto qualità-prezzo. Entra nel dettaglio.',
    seeAllButton: 'Vedi tutti i modelli',
    lastUpdated: 'Aggiornato il 14 aprile 2026',
  },
  nl: {
    kicker: 'Complete gids · Slimme keuken',
    title: 'Slimme keuken 2026: de complete gids',
    subtitle: '5 categorieën, 15 vergeleken modellen, geen marketingpraat',
    intro: 'Slimme keukenapparaten zijn geen gadgets meer. Denk aan multicookers die drie apparaten vervangen, koffiemachines die al aan de slag gaan voordat je wakker bent, weegschalen die je tot op de gram door een recept leiden, draadloze thermometers waardoor je de oven niet open hoeft te doen en stekkers die je werkelijke verbruik bijhouden. Elk apparaat verdient een plek, als je weet welk model je kiest. Deze gids zet alles op een rij, per categorie.',
    dossierKicker: 'Achtergrond',
    dossierTitle: 'Waarom de slimme keuken in 2026 terrein wint',
    chapters: [
      {
        num: 'I',
        title: 'Automatisering in het dagelijks leven',
        body: 'In 2026 heeft 38% van de Franse huishoudens minstens één slim keukenapparaat, met de multicooker en de koffiemachine voorop. De drijfveer is geen fascinatie voor techniek, maar meetbare tijdwinst: 5 minuten ’s ochtends, 10 minuten ’s avonds, en braadstukken die tot in de kern goed gaar zijn zonder dat je bij de oven hoeft te blijven. Voor een druk huishouden verdient een goede multicooker of draadloze vleesthermometer zich in een paar weken terug.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Bekijk onze selectie multicookers',
      },
      {
        num: 'II',
        title: 'De valkuil van ‘alles slim’',
        body: 'Let op merken die meeliften op de hype: stekkers van 5 euro met firmware die nooit een beveiligingsupdate krijgt, weegschalen met een verborgen abonnement, koffiemachines die afhankelijk zijn van een eigen cloud van de fabrikant die morgen kan verdwijnen. Onze methode kijkt eerst naar hoe lang de software wordt ondersteund (updates over 2 jaar) en pas daarna naar de werkelijke nauwkeurigheid, voordat we iets aanraden. Zonder die controle komt geen enkel product in onze selectie.',
        href: '/a-propos',
        cta: 'Onze methodologie',
      },
      {
        num: 'III',
        title: 'Bluetooth of wifi: wat kies je?',
        body: 'Bluetooth volstaat in 95% van de gevallen: 10 meter bereik, geen cloudaccount, batterijen die 6 tot 12 maanden meegaan en geen gegevens die je huis verlaten. Kies alleen voor wifi als je het apparaat op afstand wilt bedienen (de koffiemachine aanzetten vanaf kantoor) of als je alles centraal regelt in Home Assistant, Matter/Thread of Alexa Routines. Wifi brengt meer complexiteit, mogelijke beveiligingslekken en afhankelijkheid van je router met zich mee: kies er bewust voor.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Bekijk onze Matter/Thread-stekkers',
      },
      {
        num: 'IV',
        title: 'Onze selectie, zonder valse beloften',
        body: 'Van de 60 modellen die we in 2026 beoordeelden, halen er maar 15 onze selectie. Geen nep-top-100, geen gesponsorde producten. Elke categorie krijgt 3 tot 4 modellen: een degelijk instapmodel, een model met de beste prijs-kwaliteitverhouding en een topmodel dat zijn hogere prijs waard is. De rest valt af, ook merken die we graag hadden aangeraden. Alleen zo blijven onze aanbevelingen iets betekenen.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Vergelijk 3 modellen naast elkaar',
      },
    ],
    breadcrumb: 'Gids slimme keuken',
    breadcrumbRoot: 'Gidsen',
    categoriesKicker: 'De 5 categorieën',
    categoriesTitle: 'Bekijk per type apparaat',
    categoriesIntro: 'Elke categorie heeft een eigen koopadvies, eigen valkuilen en een eigen prijs-kwaliteitverhouding. Lees per categorie waar je op let.',
    seeAllButton: 'Bekijk alle modellen',
    lastUpdated: 'Bijgewerkt op 14 april 2026',
  },
  pl: {
    kicker: 'Przewodnik · Inteligentna kuchnia',
    title: 'Inteligentna kuchnia 2026: kompletny przewodnik',
    subtitle: '5 kategorii, 15 porównanych modeli, bez marketingowego szumu',
    intro: 'Inteligentna kuchnia przestała być gadżetem. Multicookery, które zastępują trzy urządzenia, ekspresy włączające się, zanim się obudzisz, wagi prowadzące przez przepis co do grama, bezprzewodowe termometry, dzięki którym nie musisz otwierać piekarnika, i gniazdka mierzące rzeczywiste zużycie prądu – każde z tych urządzeń zasłuży na miejsce w Twojej kuchni, jeśli wiesz, który model wybrać. Ten przewodnik porządkuje temat kategoria po kategorii.',
    dossierKicker: 'Omówienie',
    dossierTitle: 'Dlaczego w 2026 roku inteligentna kuchnia staje się standardem',
    chapters: [
      {
        num: 'I',
        title: 'Automatyzacja codziennych czynności',
        body: 'W Polsce co dziesiąte gospodarstwo domowe (10%) miało w 2024 roku urządzenie AGD połączone z internetem, wobec 3% w 2020 roku; średnia w UE to 13% (Eurostat, za raportem APPLiA Polska). Nie chodzi o fascynację technologią, lecz o wymierną oszczędność czasu: 5 minut rano, 10 minut wieczorem i pieczeń dopieczona w środku bez pilnowania piekarnika. W zapracowanym domu inwestycja w dobry multicooker lub bezprzewodową sondę zwraca się w ciągu kilku tygodni.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Zobacz polecane multicookery',
      },
      {
        num: 'II',
        title: 'Pułapka: wszystko podłączone do sieci',
        body: 'Uważaj na marki, które próbują wykorzystać modę na inteligentny dom: gniazdka za 20 zł z oprogramowaniem bez aktualizacji zabezpieczeń, wagi sprzedawane z ukrytym abonamentem, ekspresy zależne od zamkniętej chmury producenta, która jutro może zniknąć. Zanim cokolwiek polecimy, najpierw sprawdzamy, jak długo producent wspiera oprogramowanie (historia aktualizacji z 2 lat), a potem rzeczywistą dokładność według niezależnych testów. Żaden produkt nie trafia do rekomendacji z pominięciem tych kryteriów.',
        href: '/a-propos',
        cta: 'Nasza metodologia',
      },
      {
        num: 'III',
        title: 'Bluetooth czy Wi-Fi: co wybrać?',
        body: 'W 95% przypadków wystarczy Bluetooth: zasięg 10 m, brak konta w chmurze, baterie na 6–12 miesięcy, a Twoje dane nie wychodzą poza dom. Wi-Fi wybierz tylko wtedy, gdy potrzebujesz zdalnego sterowania (np. chcesz włączyć ekspres z biura) albo zarządzasz urządzeniami z jednego miejsca: w Home Assistant, przez Matter/Thread lub w Alexa Routines. Wi-Fi oznacza większą złożoność, potencjalne luki w zabezpieczeniach i zależność od routera – to musi być świadoma decyzja.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Polecane gniazdka Matter/Thread',
      },
      {
        num: 'IV',
        title: 'Nasze zestawienie – żadnych pustych obietnic',
        body: 'Spośród 60 modeli ocenionych w 2026 roku nasze kryteria spełnia tylko 15. Żadnych naciąganych list „top 100”, żadnych produktów sponsorowanych. W każdej kategorii zostają 3–4 modele: solidny model na start, model o najlepszym stosunku jakości do ceny i model premium, którego cena jest uzasadniona. Resztę odrzucamy, nawet jeśli chętnie polecilibyśmy daną markę. Tylko tak rekomendacje zachowują sens.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Porównaj 3 modele obok siebie',
      },
    ],
    breadcrumb: 'Przewodnik po inteligentnej kuchni',
    breadcrumbRoot: 'Poradniki',
    categoriesKicker: 'Pięć kategorii',
    categoriesTitle: 'Wybierz rodzaj urządzenia',
    categoriesIntro: 'W każdej kategorii przy zakupie liczy się co innego, czyhają inne pułapki i inaczej wygląda stosunek jakości do ceny. Poznaj szczegóły.',
    seeAllButton: 'Zobacz wszystkie modele',
    lastUpdated: 'Zaktualizowano 14 kwietnia 2026',
  },
  sv: {
    kicker: 'Stora guiden · Smart kök',
    title: 'Den stora guiden till det smarta köket 2026',
    subtitle: '5 kategorier, 15 jämförda modeller, inget reklamsnack',
    intro: 'Smarta köksapparater är inte längre bara prylar. Multikokare som ersätter tre apparater, kaffemaskiner som startar innan du vaknar, köksvågar som guidar dig genom recepten gram för gram, trådlösa stektermometrar som gör att du slipper öppna ugnsluckan och smarta pluggar som visar vad du faktiskt förbrukar – alla har sin plats i köket, om du vet vilken modell du ska välja. Den här guiden hjälper dig att sålla, kategori för kategori.',
    dossierKicker: 'Fördjupning',
    dossierTitle: 'Därför slår det smarta köket igenom 2026',
    chapters: [
      {
        num: 'I',
        title: 'Automatiserad vardag',
        body: '2026 har 38 % av de europeiska hushållen minst en smart köksapparat, oftast en multikokare eller en kaffemaskin. Drivkraften är inte teknikfascination utan tid som går att mäta: 5 minuter på morgonen, 10 minuter på kvällen och stekar som blir perfekta rakt igenom utan att du behöver vakta ugnsluckan. För ett hushåll med fullt upp tjänar en bra multikokare eller en trådlös stektermometer in sig på några veckor.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Se våra utvalda multikokare',
      },
      {
        num: 'II',
        title: 'Fällan med allt uppkopplat',
        body: 'Se upp för märken som rider på vågen: smarta pluggar för 50 kr med firmware som aldrig får säkerhetsuppdateringar, köksvågar som säljs med ett dolt abonnemang, kaffemaskiner som kräver tillverkarens eget moln – ett moln som kan försvinna i morgon. Vår metod granskar först hur länge programvaran underhålls (uppdateringar under 2 år) och sedan den faktiska precisionen, innan vi går vidare med en rekommendation. Ingen produkt slinker igenom den här granskningen obemärkt.',
        href: '/a-propos',
        cta: 'Vår metod',
      },
      {
        num: 'III',
        title: 'Bluetooth eller wifi: så väljer du rätt',
        body: 'Bluetooth räcker i 95 % av fallen: 10 meters räckvidd, inget molnkonto, batterier som håller 6–12 månader och inga data som exponeras. Välj wifi bara om du vill styra på distans (starta kaffemaskinen från kontoret) eller om du samlar allt i Home Assistant, Matter/Thread eller rutiner i Alexa. Wifi gör allt mer komplext, öppnar för möjliga säkerhetsluckor och gör dig beroende av routern – ett val att göra med öppna ögon.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Våra utvalda pluggar för Matter/Thread',
      },
      {
        num: 'IV',
        title: 'Vårt urval, utan tomma löften',
        body: 'Av de 60 modeller vi utvärderade 2026 klarar bara 15 vår bedömning. Inga påhittade topp 100-listor, inga sponsrade produkter. Varje kategori får 3–4 modeller: en gedigen instegsmodell, ett prisvärt val och en premiummodell som är värd pengarna. Resten sorteras bort, även märken som vi gärna hade velat rekommendera. Det är priset för att rekommendationerna ska betyda något.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Jämför 3 modeller sida vid sida',
      },
    ],
    breadcrumb: 'Guide till smart kök',
    breadcrumbRoot: 'Guider',
    categoriesKicker: 'De 5 kategorierna',
    categoriesTitle: 'Utforska efter typ av apparat',
    categoriesIntro: 'Varje kategori har sin egen köplogik, sina egna fallgropar och sin egen prisvärdhet. Här går vi på djupet.',
    seeAllButton: 'Se alla modeller',
    lastUpdated: 'Uppdaterad 14 april 2026',
  },
  us: {
    kicker: 'Complete guide · Smart kitchen',
    title: 'The Complete Smart Kitchen Guide (2026)',
    subtitle: '5 categories, 15 models compared, zero marketing fluff',
    intro: 'Smart kitchen appliances aren\'t gimmicks anymore. Multicookers that replace three appliances, coffee makers that start brewing before you wake up, scales that walk you through recipes to the gram, wireless thermometers that save you from opening the oven door, and smart plugs that track how much power you really use — each one earns its spot on the counter, as long as you pick the right one. This guide sorts it all out, category by category.',
    dossierKicker: 'In depth',
    dossierTitle: 'Why the smart kitchen is taking off in 2026',
    chapters: [
      {
        num: 'I',
        title: 'Automating everyday life',
        body: 'In the US, 66% of adults drink coffee every day, and 83% of those who had coffee the day before drank it at home (National Coffee Association, fall 2026). That\'s where a smart kitchen earns its keep. It isn\'t about a fascination with tech; it\'s about time you can measure: 5 minutes in the morning, 10 in the evening, roasts cooked perfectly to the center without hovering by the oven door. For a busy household, a good multicooker or wireless probe pays for itself in a matter of weeks.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'See our multicooker picks',
      },
      {
        num: 'II',
        title: 'The everything-connected trap',
        body: 'Watch out for brands riding the trend: $5 plugs with unpatched firmware, scales sold with a hidden subscription, coffee makers that depend on a proprietary cloud that could disappear tomorrow. Our method looks at software longevity first (2 years of updates), then real-world accuracy, before we sign off on a recommendation. Nothing gets a free pass on this filter.',
        href: '/a-propos',
        cta: 'Our methodology',
      },
      {
        num: 'III',
        title: 'Bluetooth or Wi-Fi: making the right call',
        body: 'Bluetooth is enough 95% of the time: about 33 feet (10 m) of range, no cloud account, batteries that last 6 to 12 months and zero data exposure. Go with Wi-Fi only if you need remote control (starting the coffee maker from the office) or you run everything through Home Assistant, Matter/Thread or Alexa routines. Wi-Fi adds complexity, potential security holes and a dependence on your router, so choose it with your eyes open.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Our vetted Matter/Thread plugs',
      },
      {
        num: 'IV',
        title: 'Our picks, no false promises',
        body: 'Of the 60 models we evaluated in 2026, only 15 made the cut. No bogus top-100 lists, no sponsored products. Each category gets 3 to 4 models: a solid entry-level pick, a best-value pick and a premium pick that earns its price. Everything else is cut, even brands we\'d have liked to recommend. That\'s what it takes to keep our recommendations meaningful.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Compare 3 models side by side',
      },
    ],
    breadcrumb: 'Smart kitchen guide',
    breadcrumbRoot: 'Guides',
    categoriesKicker: 'The 5 categories',
    categoriesTitle: 'Browse by appliance type',
    categoriesIntro: 'Each category has its own buying logic, its own pitfalls and its own sweet spot for value. Dig into the details.',
    seeAllButton: 'See all models',
    lastUpdated: 'Updated April 14, 2026',
  },
  ca: {
    kicker: 'Pillar guide · Smart kitchen',
    title: 'The complete smart kitchen guide 2026',
    subtitle: '5 categories, 15 compared models, zero marketing noise',
    intro: 'Smart kitchen appliances are no longer gadgets. Between multicookers that replace three appliances, coffee makers that start brewing before you wake up, scales that guide your recipes to the gram, wireless thermometers that save you from opening the oven door and smart plugs that track what your appliances really use, every device earns its place if you know which one to pick. This guide sorts it all out, category by category.',
    dossierKicker: 'The dossier',
    dossierTitle: 'Why the smart kitchen matters in 2026',
    chapters: [
      {
        num: 'I',
        title: 'The automation of daily life',
        body: 'In 2022, 47% of Canadians used smart home devices, up from 42% in 2020, according to Statistics Canada. The driver isn\'t a fascination with tech, it\'s measurable time savings: 5 minutes in the morning, 10 in the evening, perfectly cooked roasts without watching the oven door. For a busy household, a good multicooker or wireless probe pays for itself in a matter of weeks.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'See our selected multicookers',
      },
      {
        num: 'II',
        title: 'The all-connected trap',
        body: 'Watch out for brands riding the wave: $10 plugs with unpatched firmware, scales sold with hidden subscriptions, coffee makers that depend on proprietary clouds that could vanish tomorrow. Our method checks software longevity first (a two-year update history), then real-world accuracy, before we sign off on a recommendation. No product makes the list without clearing this filter.',
        href: '/a-propos',
        cta: 'Our methodology',
      },
      {
        num: 'III',
        title: 'Bluetooth or Wi-Fi: the right choice',
        body: 'Bluetooth is enough 95% of the time: 10-metre range, no cloud account, batteries that last 6 to 12 months and zero data exposure. Choose Wi-Fi only if you need remote control (starting the coffee maker from the office) or if you run everything through Home Assistant, Matter/Thread or Alexa Routines. Wi-Fi adds complexity, potential security holes and a dependency on your router — choose it knowingly.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Our Matter/Thread plugs',
      },
      {
        num: 'IV',
        title: 'Our selection, no false promises',
        body: 'Of the 60 models we evaluated in 2026, only 15 passed our filter. No padded top-100 lists, no sponsored products. Each category gets three or four models: a solid entry-level pick, a best-value pick and a premium pick that earns its price. Everything else is cut, even brands we\'d have liked to recommend. That\'s what it takes to keep our recommendations meaningful.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Compare 3 models side by side',
      },
    ],
    breadcrumb: 'Smart kitchen guide',
    breadcrumbRoot: 'Guides',
    categoriesKicker: 'The 5 categories',
    categoriesTitle: 'Browse by appliance type',
    categoriesIntro: 'Each category has its own buying logic, its own traps, its own value-for-money sweet spot. Dive into the details.',
    seeAllButton: 'See all models',
    lastUpdated: 'Updated April 14, 2026',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/guides/cuisine-connectee',
    title: `${c.title} | Home Nura`,
    description: c.intro,
    type: 'article',
  })
}

export default async function SmartKitchenPillarGuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbRoot, item: `https://homenura.com/${safeLang}/guides/cuisine-connectee` },
      { '@type': 'ListItem', position: 3, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/guides/cuisine-connectee` },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.intro,
    image: 'https://homenura.com/og-image.png',
    datePublished: '2026-04-14',
    dateModified: '2026-04-14',
    author: buildAuthorPerson(safeLang),
    publisher: {
      '@type': 'Organization',
      name: 'Home Nura',
      logo: { '@type': 'ImageObject', url: 'https://homenura.com/logo.png', width: 1400, height: 400 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://homenura.com/${safeLang}/guides/cuisine-connectee` },
    inLanguage: HTML_LANG[safeLang],
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar currentLang={safeLang} />

      <main id="main">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-brand-600 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
          <li>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-brand-600 transition-colors">{c.breadcrumbRoot}</Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
          <li className="text-slate-600 font-medium">{c.breadcrumb}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-16 text-center">
        <Kicker className="mb-5">{c.kicker}</Kicker>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
          {c.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-5">{c.subtitle}</p>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">{c.intro}</p>
        <div className="h-[2px] w-16 bg-brand-600 mx-auto mt-10"></div>
        <Kicker variant="slate" size="sm" className="mt-6">{c.lastUpdated}</Kicker>
      </section>

      <BlackFridaySiloLinks lang={safeLang} siloSlug="cuisine-connectee" />

      {/* Editorial dossier — 4 chapters */}
      <section className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="text-center mb-16">
          <Kicker className="mb-5">{c.dossierKicker}</Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-slate-900 mb-5">
            {c.dossierTitle}
          </h2>
          <div className="h-[2px] w-16 bg-brand-600 mx-auto"></div>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {c.chapters.map((chapter, i) => (
            <article key={i} className="py-14 md:py-16 first:pt-10">
              <Kicker className="mb-4">{chapter.num}</Kicker>
              <h3 className="text-2xl md:text-[1.875rem] font-bold tracking-tight leading-[1.2] text-slate-900 mb-5">
                {chapter.title}
              </h3>
              <div className="h-px w-10 bg-brand-600 mb-6"></div>
              <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85] mb-6">{chapter.body}</p>
              <Link
                href={`/${safeLang}${chapter.href}`}
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                <span className="uppercase tracking-[0.15em] text-[11px]">{chapter.cta}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 5 category cards */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        <div className="text-center mb-14">
          <Kicker className="mb-5">{c.categoriesKicker}</Kicker>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-slate-900 mb-5">
            {c.categoriesTitle}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">{c.categoriesIntro}</p>
          <div className="h-[2px] w-16 bg-brand-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMART_KITCHEN_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat}
              href={`/${safeLang}/cuisine-connectee/${cat}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition duration-200"
            >
              <Kicker size="sm" className="mb-3">
                {String(idx + 1).padStart(2, '0')}
              </Kicker>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                {categoryLabels[cat][safeLang] || categoryLabels[cat].fr}
              </h3>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                <span className="uppercase tracking-[0.15em] text-[11px]">{c.seeAllButton}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </main>

      {/* Footer */}
      <SiteFooter
        currentLang={safeLang}
      />
    </div>
  )
}
