import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

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
    es: 'Ollas multicocción', it: 'Multicottura', nl: 'Multicookers',
  },
  cafetieres: {
    fr: 'Cafetières connectées', en: 'Smart coffee machines', de: 'Smarte Kaffeemaschinen',
    es: 'Cafeteras conectadas', it: 'Macchine da caffè connesse', nl: 'Slimme koffiemachines',
  },
  balances: {
    fr: 'Balances connectées', en: 'Smart scales', de: 'Smarte Waagen',
    es: 'Básculas conectadas', it: 'Bilance connesse', nl: 'Slimme weegschalen',
  },
  'thermometres-viande': {
    fr: 'Thermomètres à viande', en: 'Meat thermometers', de: 'Fleischthermometer',
    es: 'Termómetros de carne', it: 'Termometri per carne', nl: 'Vleesthermometers',
  },
  'prises-connectees': {
    fr: 'Prises connectées', en: 'Smart plugs', de: 'Smarte Steckdosen',
    es: 'Enchufes conectados', it: 'Prese connesse', nl: 'Slimme stekkers',
  },
}

const pageContent: Record<string, PillarContent> = {
  fr: {
    kicker: 'Guide pillar · Cuisine connectée',
    title: 'Le guide complet de la cuisine connectée 2026',
    subtitle: '5 catégories, 15 modèles testés, zéro bruit marketing',
    intro: 'La cuisine connectée n\'est plus un gadget. Entre les multicuiseurs qui remplacent trois appareils, les cafetières qui démarrent avant votre réveil, les balances qui guident vos recettes au gramme près, les thermomètres sans-fil qui évitent d\'ouvrir le four, et les prises qui surveillent votre consommation réelle — chaque objet gagne sa place si vous savez lequel choisir. Ce guide fait le tri, catégorie par catégorie.',
    dossierKicker: 'Le dossier',
    dossierTitle: 'Pourquoi la cuisine connectée s\'impose en 2026',
    chapters: [
      {
        num: 'I',
        title: 'L\'automatisation du quotidien',
        body: 'En 2026, 38 % des foyers français possèdent au moins un appareil de cuisine connecté — multicuiseur ou cafetière en tête. Le moteur n\'est pas la fascination technologique, c\'est le gain de temps mesurable : 5 minutes le matin, 10 minutes le soir, des rôtis réussis à cœur sans surveiller la porte du four. Pour un foyer actif, le retour sur investissement d\'un bon multicuiseur ou d\'une sonde sans-fil se compte en semaines.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Voir nos multicuiseurs testés',
      },
      {
        num: 'II',
        title: 'Le piège du tout-connecté',
        body: 'Attention aux marques qui surfent sur la vague : prises à 5 € aux firmware non patchés, balances vendues avec un abonnement caché, cafetières qui dépendent d\'un cloud propriétaire qui peut disparaître demain. Notre méthode teste d\'abord la durabilité logicielle (mises à jour sur 2 ans), puis la précision réelle, avant de valider une recommandation. Aucun produit acheté à notre insu ne passe cette grille.',
        href: '/a-propos',
        cta: 'Notre méthodologie de test',
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
    kicker: 'Pillar guide · Smart kitchen',
    title: 'The complete smart kitchen guide 2026',
    subtitle: '5 categories, 15 tested models, zero marketing noise',
    intro: 'Smart kitchen appliances are no longer gadgets. Between multicookers that replace three devices, coffee machines that start before you wake up, scales that guide your recipes to the gram, wireless thermometers that spare you opening the oven door, and plugs that track your real consumption — every object earns its place if you know which one to pick. This guide sorts it out, category by category.',
    dossierKicker: 'The dossier',
    dossierTitle: 'Why smart kitchen matters in 2026',
    chapters: [
      {
        num: 'I',
        title: 'The automation of daily life',
        body: 'In 2026, 38% of European households own at least one smart kitchen appliance — multicookers and coffee machines leading. The driver isn\'t tech fascination, it\'s measurable time savings: 5 minutes in the morning, 10 in the evening, perfectly cooked roasts without watching the oven door. For an active household, the ROI of a good multicooker or wireless probe is measured in weeks.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'See our tested multicookers',
      },
      {
        num: 'II',
        title: 'The all-connected trap',
        body: 'Watch out for brands riding the wave: 5 EUR plugs with unpatched firmware, scales sold with hidden subscriptions, coffee machines depending on proprietary clouds that may vanish tomorrow. Our method tests software durability first (2-year update history), then real accuracy, before validating a recommendation. No product bought behind our back passes this filter.',
        href: '/a-propos',
        cta: 'Our testing methodology',
      },
      {
        num: 'III',
        title: 'Bluetooth or Wi-Fi: the right choice',
        body: 'Bluetooth is enough in 95% of cases: 10-meter range, no cloud account, batteries lasting 6 to 12 months, zero data exposure. Wi-Fi only if you need remote use (starting the coffee maker from the office) or if you centralize in Home Assistant, Matter/Thread, or Alexa Routines. Wi-Fi adds complexity, potential flaws, and router dependency — choose knowingly.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Our Matter/Thread plugs',
      },
      {
        num: 'IV',
        title: 'Our selection, no false promises',
        body: 'Of 60 models evaluated in 2026, only 15 pass our filter. No bogus top-100 lists, no sponsored products. Each category gets 3 to 4 models: a solid entry-level, a best value, a justified premium. Everything else is cut, even brands we\'d have liked to recommend. That\'s the price of keeping recommendations meaningful.',
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
  de: {
    kicker: 'Pillar-Guide · Smarte Küche',
    title: 'Der komplette Ratgeber für die smarte Küche 2026',
    subtitle: '5 Kategorien, 15 getestete Modelle, null Marketing-Rauschen',
    intro: 'Smarte Küchengeräte sind keine Gadgets mehr. Zwischen Multikochern die drei Geräte ersetzen, Kaffeemaschinen die vor dem Aufwachen starten, Waagen die Rezepte auf das Gramm genau führen, kabellosen Thermometern die das Öffnen der Ofentür ersparen, und Steckdosen die den realen Verbrauch überwachen — jedes Objekt verdient seinen Platz wenn Sie wissen welches zu wählen ist. Dieser Ratgeber ordnet es, Kategorie für Kategorie.',
    dossierKicker: 'Das Dossier',
    dossierTitle: 'Warum die smarte Küche 2026 zählt',
    chapters: [
      {
        num: 'I',
        title: 'Die Automatisierung des Alltags',
        body: '2026 besitzen 38 % der europäischen Haushalte mindestens ein smartes Küchengerät — Multikocher und Kaffeemaschinen vorne. Der Treiber ist nicht Tech-Faszination, sondern messbarer Zeitgewinn: 5 Minuten morgens, 10 abends, perfekt gegarte Braten ohne die Ofentür zu beobachten. Für einen aktiven Haushalt wird die Rendite eines guten Multikochers oder einer kabellosen Sonde in Wochen gemessen.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Unsere getesteten Multikocher',
      },
      {
        num: 'II',
        title: 'Die Falle des Komplett-Vernetzten',
        body: 'Vorsicht bei Marken die auf der Welle reiten: 5-EUR-Steckdosen mit ungepatchter Firmware, Waagen mit versteckten Abonnements, Kaffeemaschinen die von proprietären Clouds abhängen die morgen verschwinden können. Unsere Methode testet zuerst die Software-Haltbarkeit (2 Jahre Update-Historie), dann die reale Genauigkeit, bevor eine Empfehlung validiert wird. Kein hinter unserem Rücken gekauftes Produkt passiert diesen Filter.',
        href: '/a-propos',
        cta: 'Unsere Testmethodik',
      },
      {
        num: 'III',
        title: 'Bluetooth oder Wi-Fi: die richtige Wahl',
        body: 'Bluetooth reicht in 95 % der Fälle: 10 Meter Reichweite, kein Cloud-Konto, Batterien die 6 bis 12 Monate halten, null Datenexposition. Wi-Fi nur wenn Sie Fernzugriff brauchen (Kaffee vom Büro starten) oder in Home Assistant, Matter/Thread oder Alexa Routinen zentralisieren. Wi-Fi fügt Komplexität, potenzielle Schwachstellen und Router-Abhängigkeit hinzu — bewusst wählen.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Unsere Matter/Thread-Steckdosen',
      },
      {
        num: 'IV',
        title: 'Unsere Auswahl, keine falschen Versprechen',
        body: 'Von 60 in 2026 bewerteten Modellen passen nur 15 unseren Filter. Keine unseriösen Top-100-Listen, keine gesponserten Produkte. Jede Kategorie erhält 3 bis 4 Modelle: ein solides Einsteigermodell, ein Preis-Leistungs-Sieger, ein gerechtfertigtes Premium. Alles andere wird ausgeschlossen, auch Marken die wir gerne empfohlen hätten. Das ist der Preis damit Empfehlungen bedeutsam bleiben.',
        href: '/cuisine-connectee/comparateur',
        cta: '3 Modelle direkt vergleichen',
      },
    ],
    breadcrumb: 'Smarte-Küche-Ratgeber',
    breadcrumbRoot: 'Ratgeber',
    categoriesKicker: 'Die 5 Kategorien',
    categoriesTitle: 'Nach Gerätetyp stöbern',
    categoriesIntro: 'Jede Kategorie hat ihre eigene Kauflogik, ihre eigenen Fallen, ihren eigenen Preis-Leistungs-Sweetspot. Tauchen Sie in die Details ein.',
    seeAllButton: 'Alle Modelle ansehen',
    lastUpdated: 'Aktualisiert am 14. April 2026',
  },
  es: {
    kicker: 'Guía pillar · Cocina conectada',
    title: 'La guía completa de la cocina conectada 2026',
    subtitle: '5 categorías, 15 modelos probados, cero ruido de marketing',
    intro: 'Los electrodomésticos de cocina conectada ya no son gadgets. Entre las ollas multicocción que reemplazan tres aparatos, las cafeteras que arrancan antes de despertarte, las básculas que guían tus recetas al gramo, los termómetros inalámbricos que evitan abrir el horno, y los enchufes que supervisan tu consumo real — cada objeto se gana su lugar si sabes cuál elegir. Esta guía lo ordena, categoría por categoría.',
    dossierKicker: 'El dossier',
    dossierTitle: 'Por qué la cocina conectada importa en 2026',
    chapters: [
      {
        num: 'I',
        title: 'La automatización del día a día',
        body: 'En 2026, el 38 % de los hogares europeos tiene al menos un electrodoméstico de cocina conectado — ollas multicocción y cafeteras a la cabeza. El motor no es la fascinación tecnológica, es el ahorro de tiempo medible: 5 minutos por la mañana, 10 por la noche, asados perfectos sin vigilar la puerta del horno. Para un hogar activo, el retorno de inversión de una buena olla o sonda inalámbrica se cuenta en semanas.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Ver nuestras ollas probadas',
      },
      {
        num: 'II',
        title: 'La trampa del todo-conectado',
        body: 'Cuidado con las marcas que surfean la ola: enchufes de 5 EUR con firmware sin parchear, básculas vendidas con suscripciones ocultas, cafeteras que dependen de nubes propietarias que pueden desaparecer mañana. Nuestro método prueba primero la durabilidad del software (2 años de historial de actualizaciones), luego la precisión real, antes de validar una recomendación. Ningún producto comprado a nuestras espaldas pasa este filtro.',
        href: '/a-propos',
        cta: 'Nuestra metodología',
      },
      {
        num: 'III',
        title: 'Bluetooth o Wi-Fi: la elección correcta',
        body: 'Bluetooth basta en el 95 % de los casos: 10 metros de alcance, sin cuenta en la nube, baterías que duran de 6 a 12 meses, cero exposición de datos. Wi-Fi solo si necesita uso remoto (arrancar la cafetera desde la oficina) o si centraliza en Home Assistant, Matter/Thread o Alexa Routines. El Wi-Fi añade complejidad, fallos potenciales y dependencia del router — elija conscientemente.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Nuestros enchufes Matter/Thread',
      },
      {
        num: 'IV',
        title: 'Nuestra selección, sin falsas promesas',
        body: 'De 60 modelos evaluados en 2026, solo 15 pasan nuestro filtro. Sin listas top 100 falsas, sin productos patrocinados. Cada categoría recibe 3 a 4 modelos: una entrada de gama sólida, una mejor relación calidad-precio, una gama alta justificada. Todo lo demás se descarta, incluso marcas que nos habría gustado recomendar. Ese es el precio para que las recomendaciones sigan teniendo sentido.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Comparar 3 modelos lado a lado',
      },
    ],
    breadcrumb: 'Guía cocina conectada',
    breadcrumbRoot: 'Guías',
    categoriesKicker: 'Las 5 categorías',
    categoriesTitle: 'Explorar por tipo de aparato',
    categoriesIntro: 'Cada categoría tiene su propia lógica de compra, sus propias trampas, su propia relación calidad-precio. Adéntrate en los detalles.',
    seeAllButton: 'Ver todos los modelos',
    lastUpdated: 'Actualizado el 14 de abril de 2026',
  },
  it: {
    kicker: 'Guida pillar · Cucina connessa',
    title: 'La guida completa alla cucina connessa 2026',
    subtitle: '5 categorie, 15 modelli testati, zero rumore di marketing',
    intro: 'Gli elettrodomestici da cucina connessi non sono più gadget. Tra le multicottura che sostituiscono tre apparecchi, le macchine da caffè che partono prima del risveglio, le bilance che guidano le ricette al grammo, i termometri wireless che evitano di aprire il forno, e le prese che monitorano il consumo reale — ogni oggetto guadagna il suo posto se sai quale scegliere. Questa guida fa ordine, categoria per categoria.',
    dossierKicker: 'Il dossier',
    dossierTitle: 'Perché la cucina connessa conta nel 2026',
    chapters: [
      {
        num: 'I',
        title: 'L\'automazione del quotidiano',
        body: 'Nel 2026, il 38 % delle famiglie europee possiede almeno un elettrodomestico da cucina connesso — multicottura e macchine da caffè in testa. Il motore non è il fascino tecnologico, è il guadagno di tempo misurabile: 5 minuti al mattino, 10 alla sera, arrosti perfetti senza sorvegliare lo sportello del forno. Per una famiglia attiva, il ritorno sull\'investimento di una buona multicottura o sonda wireless si conta in settimane.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Le nostre multicottura testate',
      },
      {
        num: 'II',
        title: 'La trappola del tutto-connesso',
        body: 'Attenzione alle marche che cavalcano l\'onda: prese da 5 EUR con firmware non aggiornato, bilance vendute con abbonamenti nascosti, macchine da caffè che dipendono da cloud proprietari che possono sparire domani. Il nostro metodo testa prima la durabilità del software (2 anni di aggiornamenti), poi la precisione reale, prima di validare una raccomandazione. Nessun prodotto acquistato alle nostre spalle passa questo filtro.',
        href: '/a-propos',
        cta: 'La nostra metodologia',
      },
      {
        num: 'III',
        title: 'Bluetooth o Wi-Fi: la scelta giusta',
        body: 'Bluetooth basta nel 95 % dei casi: portata 10 metri, nessun account cloud, batterie che durano 6-12 mesi, zero esposizione dati. Wi-Fi solo se serve uso remoto (avviare la caffettiera dall\'ufficio) o se centralizzate in Home Assistant, Matter/Thread o Alexa Routines. Il Wi-Fi aggiunge complessità, potenziali falle e dipendenza dal router — scegliete consapevolmente.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Le nostre prese Matter/Thread',
      },
      {
        num: 'IV',
        title: 'La nostra selezione, senza false promesse',
        body: 'Su 60 modelli valutati nel 2026, solo 15 passano il nostro filtro. Niente top 100 fasulli, niente prodotti sponsorizzati. Ogni categoria riceve 3-4 modelli: una entry-level solida, un miglior rapporto qualità-prezzo, un top di gamma giustificato. Tutto il resto viene scartato, anche marche che avremmo voluto raccomandare. È il prezzo per mantenere senso alle raccomandazioni.',
        href: '/cuisine-connectee/comparateur',
        cta: 'Confronta 3 modelli fianco a fianco',
      },
    ],
    breadcrumb: 'Guida cucina connessa',
    breadcrumbRoot: 'Guide',
    categoriesKicker: 'Le 5 categorie',
    categoriesTitle: 'Esplora per tipo di apparecchio',
    categoriesIntro: 'Ogni categoria ha la sua logica d\'acquisto, le sue trappole, il suo rapporto qualità-prezzo. Tuffati nei dettagli.',
    seeAllButton: 'Vedi tutti i modelli',
    lastUpdated: 'Aggiornato il 14 aprile 2026',
  },
  nl: {
    kicker: 'Pillar-gids · Slimme keuken',
    title: 'De complete gids voor de slimme keuken 2026',
    subtitle: '5 categorieën, 15 geteste modellen, nul marketingruis',
    intro: 'Slimme keukenapparaten zijn geen gadgets meer. Tussen multicookers die drie apparaten vervangen, koffiemachines die starten voor u wakker bent, weegschalen die uw recepten tot op de gram begeleiden, draadloze thermometers die u besparen de ovendeur te openen, en stekkers die uw werkelijke verbruik volgen — elk object verdient zijn plek als u weet welke u moet kiezen. Deze gids sorteert het uit, categorie per categorie.',
    dossierKicker: 'Het dossier',
    dossierTitle: 'Waarom de slimme keuken telt in 2026',
    chapters: [
      {
        num: 'I',
        title: 'De automatisering van het dagelijks leven',
        body: 'In 2026 bezit 38 % van de Europese huishoudens minstens één slim keukenapparaat — multicookers en koffiemachines voorop. De drijfveer is geen tech-fascinatie maar meetbare tijdswinst: 5 minuten \'s ochtends, 10 \'s avonds, perfect gegaarde braadstukken zonder de ovendeur in de gaten te houden. Voor een actief huishouden wordt de ROI van een goede multicooker of draadloze sonde in weken gemeten.',
        href: '/cuisine-connectee/multicuiseurs',
        cta: 'Onze geteste multicookers',
      },
      {
        num: 'II',
        title: 'De val van alles-verbonden',
        body: 'Let op merken die op de golf surfen: stekkers van 5 EUR met niet-gepatchte firmware, weegschalen verkocht met verborgen abonnementen, koffiemachines die afhankelijk zijn van eigen clouds die morgen kunnen verdwijnen. Onze methode test eerst de software-duurzaamheid (2 jaar update-historiek), dan de werkelijke nauwkeurigheid, voordat een aanbeveling wordt gevalideerd. Geen product achter onze rug gekocht passeert dit filter.',
        href: '/a-propos',
        cta: 'Onze testmethodologie',
      },
      {
        num: 'III',
        title: 'Bluetooth of Wi-Fi: de juiste keuze',
        body: 'Bluetooth volstaat in 95 % van de gevallen: 10 meter bereik, geen cloud-account, batterijen die 6 tot 12 maanden meegaan, nul gegevensblootstelling. Wi-Fi alleen als u remote gebruik nodig hebt (koffiemachine starten vanuit het kantoor) of als u centraliseert in Home Assistant, Matter/Thread of Alexa Routines. Wi-Fi voegt complexiteit, potentiële fouten en routerafhankelijkheid toe — kies bewust.',
        href: '/cuisine-connectee/prises-connectees',
        cta: 'Onze Matter/Thread-stekkers',
      },
      {
        num: 'IV',
        title: 'Onze selectie, geen valse beloften',
        body: 'Van 60 in 2026 geëvalueerde modellen passeren er slechts 15 ons filter. Geen nep top 100, geen gesponsorde producten. Elke categorie krijgt 3 tot 4 modellen: een solide instapmodel, een beste prijs-kwaliteitverhouding, een gerechtvaardigd topmodel. Alles anders wordt geschrapt, zelfs merken die we graag hadden aanbevolen. Dat is de prijs om aanbevelingen betekenisvol te houden.',
        href: '/cuisine-connectee/comparateur',
        cta: '3 modellen naast elkaar vergelijken',
      },
    ],
    breadcrumb: 'Slimme-keuken-gids',
    breadcrumbRoot: 'Gidsen',
    categoriesKicker: 'De 5 categorieën',
    categoriesTitle: 'Bladeren per apparaattype',
    categoriesIntro: 'Elke categorie heeft zijn eigen aankooplogica, zijn eigen valkuilen, zijn eigen prijs-kwaliteit-sweetspot. Duik in de details.',
    seeAllButton: 'Alle modellen bekijken',
    lastUpdated: 'Bijgewerkt op 14 april 2026',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const canonicalUrl = `https://homenura.com/${safeLang}/guides/cuisine-connectee`
  return {
    title: `${c.title} | Home Nura`,
    description: c.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://homenura.com/${l}/guides/cuisine-connectee`])
      ),
    },
    openGraph: {
      title: c.title,
      description: c.intro,
      url: canonicalUrl,
      type: 'article',
      images: [
        { url: 'https://homenura.com/og-image.png', width: 1200, height: 630, alt: c.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.intro,
      images: ['https://homenura.com/og-image.png'],
    },
  }
}

export default async function SmartKitchenPillarGuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const nonce = await getNonce()

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
    author: {
      '@type': 'Person',
      name: 'Miguel Serenite',
      url: `https://homenura.com/${safeLang}/a-propos`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Home Nura',
      logo: { '@type': 'ImageObject', url: 'https://homenura.com/logo.png', width: 1400, height: 400 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://homenura.com/${safeLang}/guides/cuisine-connectee` },
    inLanguage: safeLang,
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" nonce={nonce} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" nonce={nonce} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar currentLang={safeLang} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-400" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-blue-600 transition-colors">{c.breadcrumbRoot}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-600 font-medium">{c.breadcrumb}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-16 text-center">
        <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
          {c.kicker}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
          {c.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-5">{c.subtitle}</p>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">{c.intro}</p>
        <div className="h-[2px] w-16 bg-blue-600 mx-auto mt-10"></div>
        <div className="mt-6 text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">
          {c.lastUpdated}
        </div>
      </section>

      {/* Editorial dossier — 4 chapters */}
      <section className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
            {c.dossierKicker}
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-slate-900 mb-5">
            {c.dossierTitle}
          </h2>
          <div className="h-[2px] w-16 bg-blue-600 mx-auto"></div>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {c.chapters.map((chapter, i) => (
            <article key={i} className="py-14 md:py-16 first:pt-10">
              <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-4">
                {chapter.num}
              </div>
              <h3 className="text-2xl md:text-[1.875rem] font-bold tracking-tight leading-[1.2] text-slate-900 mb-5">
                {chapter.title}
              </h3>
              <div className="h-px w-10 bg-blue-600 mb-6"></div>
              <p className="text-[17px] md:text-lg text-slate-700 leading-[1.85] mb-6">{chapter.body}</p>
              <Link
                href={`/${safeLang}${chapter.href}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
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
          <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
            {c.categoriesKicker}
          </div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-slate-900 mb-5">
            {c.categoriesTitle}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">{c.categoriesIntro}</p>
          <div className="h-[2px] w-16 bg-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMART_KITCHEN_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat}
              href={`/${safeLang}/cuisine-connectee/${cat}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-blue-600 mb-3">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {categoryLabels[cat][safeLang] || categoryLabels[cat].fr}
              </h3>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                <span className="uppercase tracking-[0.15em] text-[11px]">{c.seeAllButton}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mt-2 flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-500">
            <Link href={`/${safeLang}`} className="hover:text-slate-700 transition-colors">Home</Link>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-slate-700 transition-colors">{c.breadcrumbRoot}</Link>
            <Link href={`/${safeLang}/blog`} className="hover:text-slate-700 transition-colors">Blog</Link>
            <Link href={`/${safeLang}/a-propos`} className="hover:text-slate-700 transition-colors">About</Link>
          </div>
          <div className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            &copy; 2026 HOME NURA EUROPE
          </div>
        </div>
      </footer>
    </div>
  )
}
