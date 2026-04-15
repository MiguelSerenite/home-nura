// ============================================================================
// SMART KITCHEN — Silo 2 (Phase 1)
//
// This data file powers the /[lang]/cuisine-connectee silo. It is deliberately
// kept separate from `lib/products.ts` so the airfryer silo and the smart
// kitchen silo never accidentally share products in the same list, comparator
// or search — which would leak signals across topical silos and dilute the
// topical authority we worked hard to build on airfryers.
//
// ⚠️  AMAZON PARTENAIRES TODO:
//   - Every ASIN in this file is a best-effort placeholder. Before going
//     live, validate each one against the live Amazon Partenaires dashboard
//     for FR/DE/EN/ES/IT/NL and replace any that 404.
//   - Product images all point to `/logo.png` as a safe local placeholder.
//     Swap with Amazon CDN images once ASINs are confirmed (see the `img()`
//     helper in `lib/products.ts` for the pattern).
//   - Prices are researched averages from April 2026; double-check before
//     enabling indexing on prod.
// ============================================================================

const partnerTags: Record<string, string> = {
  fr: 'homenuraen05-21',
  de: 'homenuraen00-21',
  en: 'homenuraen-21',
  es: 'homenuraen0a-21',
  it: 'homenuraen010-21',
  nl: 'homenuranl-21',
}

const domains: Record<string, string> = {
  fr: 'www.amazon.fr',
  de: 'www.amazon.de',
  en: 'www.amazon.co.uk',
  es: 'www.amazon.es',
  it: 'www.amazon.it',
  nl: 'www.amazon.nl',
}

export const SMART_KITCHEN_CATEGORIES = [
  'multicuiseurs',
  'cafetieres',
  'balances',
  'thermometres-viande',
  'prises-connectees',
] as const

export type SmartKitchenCategory = (typeof SMART_KITCHEN_CATEGORIES)[number]

export interface SmartKitchenStaticProduct {
  asin: string
  category: SmartKitchenCategory
  title: Record<string, string>
  price: Record<string, string>
  priceNumeric: Record<string, number>
  image: string
  badge?: Record<string, string>
  nuraScore: number
  /** Primary spec displayed in cards, e.g. "6L", "19 bars", "5kg", "50m Bluetooth". */
  capacity: string
  bestFor: Record<string, string>
  pros: Record<string, string[]>
  cons: Record<string, string[]>
}

// Single local placeholder used for every product until real Amazon CDN
// images are wired in (see TODO at the top of this file).
const PLACEHOLDER_IMAGE = '/logo.png'

export const smartKitchenStaticProducts: SmartKitchenStaticProduct[] = [
  // ──────────────────────────────────────────────────────────────────────────
  //  MULTICUISEURS CONNECTÉS
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B0CZ1D5P9P', // TODO: validate Moulinex Cookeo Touch WiFi
    category: 'multicuiseurs',
    title: {
      fr: 'Moulinex Cookeo Touch WiFi - 6L',
      de: 'Moulinex Cookeo Touch WiFi - 6L',
      en: 'Moulinex Cookeo Touch WiFi - 6L',
      es: 'Moulinex Cookeo Touch WiFi - 6L',
      it: 'Moulinex Cookeo Touch WiFi - 6L',
      nl: 'Moulinex Cookeo Touch WiFi - 6L',
    },
    price: { fr: '279,99€', de: '279,99€', en: '£259.99', es: '269,99€', it: '279,99€', nl: '269,99€' },
    priceNumeric: { fr: 279.99, de: 279.99, en: 259.99, es: 269.99, it: 279.99, nl: 269.99 },
    image: PLACEHOLDER_IMAGE,
    badge: {
      fr: 'Choix N°1', de: 'Beste Wahl', en: 'Top Pick',
      es: 'Mejor Elección', it: 'Scelta Top', nl: 'Beste Keuze',
    },
    nuraScore: 9.2,
    capacity: '6L',
    bestFor: {
      fr: 'Familles & recettes guidées',
      de: 'Familien & geführte Rezepte',
      en: 'Families & guided recipes',
      es: 'Familias y recetas guiadas',
      it: 'Famiglie e ricette guidate',
      nl: 'Gezinnen & begeleide recepten',
    },
    pros: {
      fr: ['Écran tactile + application', '250 recettes guidées', '13 modes de cuisson'],
      en: ['Touchscreen + companion app', '250 guided recipes', '13 cooking modes'],
      de: ['Touchscreen + App', '250 geführte Rezepte', '13 Garmodi'],
      es: ['Pantalla táctil + app', '250 recetas guiadas', '13 modos de cocción'],
      it: ['Touchscreen + app', '250 ricette guidate', '13 modalità di cottura'],
      nl: ['Touchscreen + app', '250 begeleide recepten', '13 kookmodi'],
    },
    cons: {
      fr: ['Cuve antiadhésive à ménager', 'Prix élevé'],
      en: ['Non-stick coating needs care', 'High price'],
      de: ['Antihaftbeschichtung schonen', 'Hoher Preis'],
      es: ['Cuba antiadherente delicada', 'Precio alto'],
      it: ['Rivestimento antiaderente delicato', 'Prezzo alto'],
      nl: ['Antikleeflaag is kwetsbaar', 'Hoge prijs'],
    },
  },
  {
    asin: 'B09421WT6P', // TODO: validate Ninja Foodi MAX 15-in-1 SmartLid
    category: 'multicuiseurs',
    title: {
      fr: 'Ninja Foodi MAX 15-en-1 SmartLid OP500EU - 7.5L',
      de: 'Ninja Foodi MAX 15-in-1 SmartLid OP500EU - 7.5L',
      en: 'Ninja Foodi MAX 15-in-1 SmartLid OP500EU - 7.5L',
      es: 'Ninja Foodi MAX 15-en-1 SmartLid OP500EU - 7.5L',
      it: 'Ninja Foodi MAX 15-in-1 SmartLid OP500EU - 7.5L',
      nl: 'Ninja Foodi MAX 15-in-1 SmartLid OP500EU - 7.5L',
    },
    price: { fr: '299,99€', de: '299,99€', en: '£249.99', es: '289,99€', it: '299,99€', nl: '289,99€' },
    priceNumeric: { fr: 299.99, de: 299.99, en: 249.99, es: 289.99, it: 299.99, nl: 289.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 9.0,
    capacity: '7.5L',
    bestFor: {
      fr: 'Polyvalence extrême',
      de: 'Extreme Vielseitigkeit',
      en: 'Maximum versatility',
      es: 'Versatilidad máxima',
      it: 'Massima versatilità',
      nl: 'Maximale veelzijdigheid',
    },
    pros: {
      fr: ['15 modes (cocotte + airfryer)', 'Couvercle SmartLid unique', 'Cuisson vapeur haute pression'],
      en: ['15 modes (cooker + air fryer)', 'Unique SmartLid', 'High-pressure steam cooking'],
      de: ['15 Modi (Dampf + Airfryer)', 'Einzigartiger SmartLid', 'Hochdruck-Dampfgaren'],
      es: ['15 modos (olla + airfryer)', 'Tapa SmartLid única', 'Vapor a alta presión'],
      it: ['15 modalità (pentola + airfryer)', 'SmartLid unico', 'Vapore ad alta pressione'],
      nl: ['15 modi (snelkookpan + airfryer)', 'Unieke SmartLid', 'Hogedruk stomen'],
    },
    cons: {
      fr: ['Encombrant sur le plan de travail', 'Courbe d\'apprentissage'],
      en: ['Bulky on the counter', 'Learning curve'],
      de: ['Groß auf der Arbeitsplatte', 'Einarbeitung nötig'],
      es: ['Voluminosa en la encimera', 'Curva de aprendizaje'],
      it: ['Ingombrante sul piano', 'Curva di apprendimento'],
      nl: ['Groot op het aanrecht', 'Leercurve'],
    },
  },
  {
    asin: 'B0CN3F4L4K', // TODO: validate Tefal Cook4Me Touch Pro
    category: 'multicuiseurs',
    title: {
      fr: 'Tefal Cook4Me Touch Pro CY9128 - 6L',
      de: 'Tefal Cook4Me Touch Pro CY9128 - 6L',
      en: 'Tefal Cook4Me Touch Pro CY9128 - 6L',
      es: 'Tefal Cook4Me Touch Pro CY9128 - 6L',
      it: 'Tefal Cook4Me Touch Pro CY9128 - 6L',
      nl: 'Tefal Cook4Me Touch Pro CY9128 - 6L',
    },
    price: { fr: '349,99€', de: '349,99€', en: '£329.99', es: '339,99€', it: '349,99€', nl: '339,99€' },
    priceNumeric: { fr: 349.99, de: 349.99, en: 329.99, es: 339.99, it: 349.99, nl: 339.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 8.8,
    capacity: '6L',
    bestFor: {
      fr: 'Pas à pas pour débutants',
      de: 'Schritt-für-Schritt für Anfänger',
      en: 'Step-by-step for beginners',
      es: 'Paso a paso para principiantes',
      it: 'Passo-passo per principianti',
      nl: 'Stap-voor-stap voor beginners',
    },
    pros: {
      fr: ['Instructions pas à pas sur écran', 'Connexion WiFi + app', 'Cuisson sous pression rapide'],
      en: ['On-screen step-by-step', 'WiFi + app connectivity', 'Fast pressure cooking'],
      de: ['Schritt-für-Schritt Anleitung', 'WiFi + App-Konnektivität', 'Schnelles Druckgaren'],
      es: ['Guía paso a paso en pantalla', 'Conexión WiFi + app', 'Olla a presión rápida'],
      it: ['Guida passo-passo a schermo', 'Connessione WiFi + app', 'Cottura a pressione rapida'],
      nl: ['Stapsgewijze instructies op scherm', 'WiFi + app-connectiviteit', 'Snelle snelkookpan'],
    },
    cons: {
      fr: ['Recettes moins nombreuses que Cookeo', 'Accessoires en sus'],
      en: ['Fewer recipes than Cookeo', 'Accessories sold separately'],
      de: ['Weniger Rezepte als Cookeo', 'Zubehör separat'],
      es: ['Menos recetas que Cookeo', 'Accesorios aparte'],
      it: ['Meno ricette di Cookeo', 'Accessori a parte'],
      nl: ['Minder recepten dan Cookeo', 'Accessoires apart verkrijgbaar'],
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  //  CAFETIÈRES INTELLIGENTES
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B09YH1KPN9', // TODO: validate De'Longhi Magnifica Evo
    category: 'cafetieres',
    title: {
      fr: 'De\'Longhi Magnifica Evo ECAM290.51.B',
      de: 'De\'Longhi Magnifica Evo ECAM290.51.B',
      en: 'De\'Longhi Magnifica Evo ECAM290.51.B',
      es: 'De\'Longhi Magnifica Evo ECAM290.51.B',
      it: 'De\'Longhi Magnifica Evo ECAM290.51.B',
      nl: 'De\'Longhi Magnifica Evo ECAM290.51.B',
    },
    price: { fr: '449,99€', de: '449,99€', en: '£399.99', es: '429,99€', it: '449,99€', nl: '429,99€' },
    priceNumeric: { fr: 449.99, de: 449.99, en: 399.99, es: 429.99, it: 449.99, nl: 429.99 },
    image: PLACEHOLDER_IMAGE,
    badge: {
      fr: 'Choix N°1', de: 'Beste Wahl', en: 'Top Pick',
      es: 'Mejor Elección', it: 'Scelta Top', nl: 'Beste Keuze',
    },
    nuraScore: 9.3,
    capacity: '1.8L',
    bestFor: {
      fr: 'Expresso quotidien',
      de: 'Täglicher Espresso',
      en: 'Everyday espresso',
      es: 'Espresso diario',
      it: 'Espresso quotidiano',
      nl: 'Dagelijkse espresso',
    },
    pros: {
      fr: ['Broyeur intégré silencieux', '4 boissons personnalisables', 'Entretien automatique'],
      en: ['Quiet integrated grinder', '4 customisable drinks', 'Automatic cleaning cycle'],
      de: ['Leises integriertes Mahlwerk', '4 anpassbare Getränke', 'Automatische Reinigung'],
      es: ['Molinillo integrado silencioso', '4 bebidas personalizables', 'Limpieza automática'],
      it: ['Macinino integrato silenzioso', '4 bevande personalizzabili', 'Pulizia automatica'],
      nl: ['Stille geïntegreerde molen', '4 aanpasbare dranken', 'Automatische reiniging'],
    },
    cons: {
      fr: ['Pas d\'app mobile', 'Encombrement'],
      en: ['No companion app', 'Bulky footprint'],
      de: ['Keine Begleit-App', 'Großer Stellplatz'],
      es: ['Sin app móvil', 'Voluminosa'],
      it: ['Nessuna app mobile', 'Ingombrante'],
      nl: ['Geen companion app', 'Groot formaat'],
    },
  },
  {
    asin: 'B0BQVD1XZ8', // TODO: validate Philips 5500 LatteGo
    category: 'cafetieres',
    title: {
      fr: 'Philips 5500 LatteGo Series EP5541/50',
      de: 'Philips 5500 LatteGo Serie EP5541/50',
      en: 'Philips 5500 LatteGo Series EP5541/50',
      es: 'Philips 5500 LatteGo Serie EP5541/50',
      it: 'Philips 5500 LatteGo Serie EP5541/50',
      nl: 'Philips 5500 LatteGo Serie EP5541/50',
    },
    price: { fr: '699,99€', de: '699,99€', en: '£599.99', es: '669,99€', it: '699,99€', nl: '669,99€' },
    priceNumeric: { fr: 699.99, de: 699.99, en: 599.99, es: 669.99, it: 699.99, nl: 669.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 9.0,
    capacity: '1.8L',
    bestFor: {
      fr: 'Amateurs de cappuccino',
      de: 'Cappuccino-Liebhaber',
      en: 'Cappuccino lovers',
      es: 'Amantes del cappuccino',
      it: 'Amanti del cappuccino',
      nl: 'Cappuccino-liefhebbers',
    },
    pros: {
      fr: ['Mousseur lait LatteGo (2 pièces)', '20 boissons + app Coffee+', 'Écran TFT couleur'],
      en: ['LatteGo milk frother (2 parts)', '20 drinks + Coffee+ app', 'Colour TFT display'],
      de: ['LatteGo Milchaufschäumer (2 Teile)', '20 Getränke + Coffee+ App', 'Farb-TFT-Display'],
      es: ['Espumador LatteGo (2 piezas)', '20 bebidas + app Coffee+', 'Pantalla TFT color'],
      it: ['Montalatte LatteGo (2 pezzi)', '20 bevande + app Coffee+', 'Display TFT a colori'],
      nl: ['LatteGo melkopschuimer (2 delen)', '20 dranken + Coffee+ app', 'Kleuren TFT-scherm'],
    },
    cons: {
      fr: ['Prix premium', 'App parfois instable'],
      en: ['Premium price', 'App occasionally buggy'],
      de: ['Premium-Preis', 'App gelegentlich instabil'],
      es: ['Precio premium', 'App a veces inestable'],
      it: ['Prezzo premium', 'App a volte instabile'],
      nl: ['Premium prijs', 'App soms instabiel'],
    },
  },
  {
    asin: 'B08S2R3J8D', // TODO: validate Krups Evidence One
    category: 'cafetieres',
    title: {
      fr: 'Krups Evidence One EA895N10',
      de: 'Krups Evidence One EA895N10',
      en: 'Krups Evidence One EA895N10',
      es: 'Krups Evidence One EA895N10',
      it: 'Krups Evidence One EA895N10',
      nl: 'Krups Evidence One EA895N10',
    },
    price: { fr: '549,99€', de: '549,99€', en: '£499.99', es: '529,99€', it: '549,99€', nl: '529,99€' },
    priceNumeric: { fr: 549.99, de: 549.99, en: 499.99, es: 529.99, it: 549.99, nl: 529.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 8.6,
    capacity: '2.3L',
    bestFor: {
      fr: 'Volume familial',
      de: 'Familienvolumen',
      en: 'Family volume',
      es: 'Volumen familiar',
      it: 'Volume familiare',
      nl: 'Familiegebruik',
    },
    pros: {
      fr: ['Réservoir 2.3L XL', 'OLED tactile lisible', 'Broyeur en métal'],
      en: ['XL 2.3L tank', 'Readable OLED touchscreen', 'Metal burr grinder'],
      de: ['XL-Tank 2.3L', 'Gut lesbarer OLED-Touchscreen', 'Metall-Mahlwerk'],
      es: ['Depósito XL 2.3L', 'Pantalla OLED táctil clara', 'Molinillo de metal'],
      it: ['Serbatoio XL 2.3L', 'Touchscreen OLED leggibile', 'Macinino in metallo'],
      nl: ['XL 2.3L reservoir', 'Leesbaar OLED touchscreen', 'Metalen maalwerk'],
    },
    cons: {
      fr: ['Design moins moderne', 'Options latte limitées'],
      en: ['Less modern design', 'Limited latte options'],
      de: ['Weniger modernes Design', 'Begrenzte Milch-Optionen'],
      es: ['Diseño menos moderno', 'Opciones latte limitadas'],
      it: ['Design meno moderno', 'Opzioni latte limitate'],
      nl: ['Minder modern ontwerp', 'Beperkte latte-opties'],
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  //  BALANCES DE CUISINE INTELLIGENTES
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B07VBW1D6W', // TODO: validate Etekcity Smart Nutrition ESN00
    category: 'balances',
    title: {
      fr: 'Etekcity Smart Nutrition Scale ESN00',
      de: 'Etekcity Smart Nutrition Waage ESN00',
      en: 'Etekcity Smart Nutrition Scale ESN00',
      es: 'Báscula Etekcity Smart Nutrition ESN00',
      it: 'Bilancia Etekcity Smart Nutrition ESN00',
      nl: 'Etekcity Smart Nutrition Weegschaal ESN00',
    },
    price: { fr: '39,99€', de: '39,99€', en: '£34.99', es: '37,99€', it: '39,99€', nl: '37,99€' },
    priceNumeric: { fr: 39.99, de: 39.99, en: 34.99, es: 37.99, it: 39.99, nl: 37.99 },
    image: PLACEHOLDER_IMAGE,
    badge: {
      fr: 'Meilleur prix', de: 'Preis-Tipp', en: 'Best Value',
      es: 'Mejor Precio', it: 'Miglior Prezzo', nl: 'Beste Prijs',
    },
    nuraScore: 9.0,
    capacity: '5 kg',
    bestFor: {
      fr: 'Suivi nutrition précis',
      de: 'Genaues Nährwert-Tracking',
      en: 'Accurate nutrition tracking',
      es: 'Seguimiento nutricional preciso',
      it: 'Tracking nutrizionale preciso',
      nl: 'Nauwkeurige voedingstracking',
    },
    pros: {
      fr: ['Base de données 2 000 aliments', 'Précision 1 g', 'App VeSync gratuite'],
      en: ['2,000-food nutrition database', '1 g precision', 'Free VeSync app'],
      de: ['2.000 Lebensmittel Datenbank', '1 g Präzision', 'Kostenlose VeSync-App'],
      es: ['Base de 2000 alimentos', 'Precisión 1 g', 'App VeSync gratis'],
      it: ['Database 2.000 alimenti', 'Precisione 1 g', 'App VeSync gratuita'],
      nl: ['2.000 voedingsmiddelen database', '1 g nauwkeurigheid', 'Gratis VeSync app'],
    },
    cons: {
      fr: ['Bluetooth seulement', 'Pas d\'écran couleur'],
      en: ['Bluetooth only', 'No colour display'],
      de: ['Nur Bluetooth', 'Kein Farbdisplay'],
      es: ['Solo Bluetooth', 'Sin pantalla color'],
      it: ['Solo Bluetooth', 'Nessun display a colori'],
      nl: ['Alleen Bluetooth', 'Geen kleurenscherm'],
    },
  },
  {
    asin: 'B01N3B0QXJ', // TODO: validate Beurer KS 34
    category: 'balances',
    title: {
      fr: 'Beurer KS 34 XL Balance Diététique',
      de: 'Beurer KS 34 XL Diätwaage',
      en: 'Beurer KS 34 XL Diet Scale',
      es: 'Báscula Dietética Beurer KS 34 XL',
      it: 'Bilancia Dietetica Beurer KS 34 XL',
      nl: 'Beurer KS 34 XL Dieetweegschaal',
    },
    price: { fr: '29,99€', de: '29,99€', en: '£24.99', es: '27,99€', it: '29,99€', nl: '27,99€' },
    priceNumeric: { fr: 29.99, de: 29.99, en: 24.99, es: 27.99, it: 29.99, nl: 27.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 8.3,
    capacity: '15 kg',
    bestFor: {
      fr: 'Grands récipients',
      de: 'Große Behälter',
      en: 'Large bowls & containers',
      es: 'Recipientes grandes',
      it: 'Contenitori grandi',
      nl: 'Grote kommen & bakken',
    },
    pros: {
      fr: ['Capacité 15 kg hors norme', 'Plateau verre XL', 'Marque allemande fiable'],
      en: ['Exceptional 15 kg capacity', 'XL glass platform', 'Reliable German brand'],
      de: ['Außergewöhnliche 15 kg Tragkraft', 'XL-Glasplatte', 'Zuverlässige deutsche Marke'],
      es: ['Capacidad excepcional 15 kg', 'Plato cristal XL', 'Marca alemana fiable'],
      it: ['Portata eccezionale 15 kg', 'Piattaforma XL in vetro', 'Marchio tedesco affidabile'],
      nl: ['Uitzonderlijke 15 kg capaciteit', 'XL glazen plateau', 'Betrouwbaar Duits merk'],
    },
    cons: {
      fr: ['Pas d\'app', 'Précision 1 g seulement'],
      en: ['No app', '1 g precision only'],
      de: ['Keine App', 'Nur 1 g Präzision'],
      es: ['Sin app', 'Precisión solo 1 g'],
      it: ['Nessuna app', 'Precisione solo 1 g'],
      nl: ['Geen app', 'Alleen 1 g precisie'],
    },
  },
  {
    asin: 'B07QRTHQH6', // TODO: validate Renpho ES-CS20M
    category: 'balances',
    title: {
      fr: 'Renpho ES-CS20M Balance Cuisine Connectée',
      de: 'Renpho ES-CS20M Smarte Küchenwaage',
      en: 'Renpho ES-CS20M Smart Kitchen Scale',
      es: 'Báscula Cocina Inteligente Renpho ES-CS20M',
      it: 'Bilancia Cucina Smart Renpho ES-CS20M',
      nl: 'Renpho ES-CS20M Slimme Keukenweegschaal',
    },
    price: { fr: '24,99€', de: '24,99€', en: '£19.99', es: '22,99€', it: '24,99€', nl: '22,99€' },
    priceNumeric: { fr: 24.99, de: 24.99, en: 19.99, es: 22.99, it: 24.99, nl: 22.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 8.7,
    capacity: '5 kg',
    bestFor: {
      fr: 'Budget serré',
      de: 'Kleines Budget',
      en: 'Tight budget',
      es: 'Presupuesto ajustado',
      it: 'Budget ridotto',
      nl: 'Klein budget',
    },
    pros: {
      fr: ['Moins de 25 € avec app', 'Compatible MyFitnessPal', 'Précision 1 g'],
      en: ['Under £20 with app', 'MyFitnessPal integration', '1 g precision'],
      de: ['Unter 25 € mit App', 'MyFitnessPal-Integration', '1 g Präzision'],
      es: ['Menos de 25 € con app', 'Integración MyFitnessPal', 'Precisión 1 g'],
      it: ['Meno di 25 € con app', 'Integrazione MyFitnessPal', 'Precisione 1 g'],
      nl: ['Onder €25 met app', 'MyFitnessPal-integratie', '1 g nauwkeurigheid'],
    },
    cons: {
      fr: ['Design basique', 'App parfois lente'],
      en: ['Basic design', 'App sometimes slow'],
      de: ['Einfaches Design', 'App manchmal langsam'],
      es: ['Diseño básico', 'App a veces lenta'],
      it: ['Design basico', 'App a volte lenta'],
      nl: ['Basisontwerp', 'App soms traag'],
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  //  THERMOMÈTRES À VIANDE CONNECTÉS
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B07HQZQJMV', // TODO: validate MEATER Plus
    category: 'thermometres-viande',
    title: {
      fr: 'MEATER Plus Thermomètre Sans Fil Bluetooth 50m',
      de: 'MEATER Plus Kabelloses Fleischthermometer 50m',
      en: 'MEATER Plus Wireless Smart Meat Thermometer 50m',
      es: 'MEATER Plus Termómetro Inalámbrico 50m',
      it: 'MEATER Plus Termometro Wireless 50m',
      nl: 'MEATER Plus Draadloze Vleesthermometer 50m',
    },
    price: { fr: '109,99€', de: '109,99€', en: '£99.99', es: '104,99€', it: '109,99€', nl: '104,99€' },
    priceNumeric: { fr: 109.99, de: 109.99, en: 99.99, es: 104.99, it: 109.99, nl: 104.99 },
    image: PLACEHOLDER_IMAGE,
    badge: {
      fr: 'Choix N°1', de: 'Beste Wahl', en: 'Top Pick',
      es: 'Mejor Elección', it: 'Scelta Top', nl: 'Beste Keuze',
    },
    nuraScore: 9.4,
    capacity: '50 m Bluetooth',
    bestFor: {
      fr: 'BBQ & cuissons lentes',
      de: 'BBQ & lange Garzeiten',
      en: 'BBQ & low-and-slow cooking',
      es: 'BBQ y cocciones lentas',
      it: 'BBQ e cotture lente',
      nl: 'BBQ & langzaam garen',
    },
    pros: {
      fr: ['100% sans fil (pas de câble)', 'Portée 50 m Bluetooth', 'App avec alertes temps réel'],
      en: ['Fully wireless (no cable)', '50 m Bluetooth range', 'App with real-time alerts'],
      de: ['Vollständig kabellos', '50 m Bluetooth-Reichweite', 'App mit Echtzeit-Warnungen'],
      es: ['100% inalámbrico', 'Alcance 50 m Bluetooth', 'App con alertas en tiempo real'],
      it: ['100% wireless (senza cavo)', '50 m di portata Bluetooth', 'App con avvisi in tempo reale'],
      nl: ['Volledig draadloos', '50 m Bluetooth-bereik', 'App met realtime meldingen'],
    },
    cons: {
      fr: ['Une seule sonde', 'Charge via sa base'],
      en: ['Single probe', 'Charges via its dock'],
      de: ['Nur eine Sonde', 'Lädt über die Basisstation'],
      es: ['Una sola sonda', 'Carga mediante base'],
      it: ['Una sola sonda', 'Si ricarica via base'],
      nl: ['Eén sonde', 'Opladen via basisstation'],
    },
  },
  {
    asin: 'B0C9S3H4YF', // TODO: validate MEATER Pro
    category: 'thermometres-viande',
    title: {
      fr: 'MEATER Pro Thermomètre Sans Fil 165m Extended Range',
      de: 'MEATER Pro Kabelloses Thermometer 165m',
      en: 'MEATER Pro Wireless Thermometer 165m Extended Range',
      es: 'MEATER Pro Termómetro Inalámbrico 165m',
      it: 'MEATER Pro Termometro Wireless 165m',
      nl: 'MEATER Pro Draadloze Thermometer 165m',
    },
    price: { fr: '149,99€', de: '149,99€', en: '£129.99', es: '144,99€', it: '149,99€', nl: '144,99€' },
    priceNumeric: { fr: 149.99, de: 149.99, en: 129.99, es: 144.99, it: 149.99, nl: 144.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 9.2,
    capacity: '165 m Bluetooth LE',
    bestFor: {
      fr: 'Longue distance / jardin',
      de: 'Große Entfernung / Garten',
      en: 'Long range / garden',
      es: 'Larga distancia / jardín',
      it: 'Lunga distanza / giardino',
      nl: 'Lange afstand / tuin',
    },
    pros: {
      fr: ['Portée étendue 165 m', 'Résolution 0,1°C', 'Sonde plus fine'],
      en: ['Extended 165 m range', '0.1°C resolution', 'Thinner probe'],
      de: ['165 m Reichweite', '0,1°C Auflösung', 'Dünnere Sonde'],
      es: ['Alcance 165 m', 'Resolución 0,1°C', 'Sonda más fina'],
      it: ['Portata 165 m', 'Risoluzione 0,1°C', 'Sonda più sottile'],
      nl: ['Bereik 165 m', '0,1°C resolutie', 'Dunnere sonde'],
    },
    cons: {
      fr: ['Prix élevé pour 1 sonde', 'Base non étanche'],
      en: ['Expensive for single probe', 'Dock not waterproof'],
      de: ['Teuer für nur 1 Sonde', 'Basis nicht wasserdicht'],
      es: ['Caro para una sola sonda', 'Base no impermeable'],
      it: ['Costoso per 1 sola sonda', 'Base non impermeabile'],
      nl: ['Duur voor 1 sonde', 'Dock niet waterdicht'],
    },
  },
  {
    asin: 'B07FNLG8D2', // TODO: validate Inkbird IBT-4XS
    category: 'thermometres-viande',
    title: {
      fr: 'Inkbird IBT-4XS Thermomètre Bluetooth 4 Sondes',
      de: 'Inkbird IBT-4XS Bluetooth Thermometer 4 Sonden',
      en: 'Inkbird IBT-4XS Bluetooth Thermometer 4 Probes',
      es: 'Inkbird IBT-4XS Termómetro Bluetooth 4 Sondas',
      it: 'Inkbird IBT-4XS Termometro Bluetooth 4 Sonde',
      nl: 'Inkbird IBT-4XS Bluetooth Thermometer 4 Sondes',
    },
    price: { fr: '49,99€', de: '49,99€', en: '£39.99', es: '47,99€', it: '49,99€', nl: '47,99€' },
    priceNumeric: { fr: 49.99, de: 49.99, en: 39.99, es: 47.99, it: 49.99, nl: 47.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 8.5,
    capacity: '4 sondes filaires',
    bestFor: {
      fr: 'Plusieurs pièces simultanées',
      de: 'Mehrere Stücke gleichzeitig',
      en: 'Multiple cuts at once',
      es: 'Varias piezas simultáneas',
      it: 'Più pezzi contemporaneamente',
      nl: 'Meerdere stukken tegelijk',
    },
    pros: {
      fr: ['4 sondes en parallèle', 'Prix imbattable', 'Autonomie 40 h'],
      en: ['4 simultaneous probes', 'Unbeatable price', '40 h battery life'],
      de: ['4 Sonden parallel', 'Unschlagbarer Preis', '40 h Akkulaufzeit'],
      es: ['4 sondas en paralelo', 'Precio imbatible', '40 h de autonomía'],
      it: ['4 sonde in parallelo', 'Prezzo imbattibile', '40 h di autonomia'],
      nl: ['4 gelijktijdige sondes', 'Onverslaanbare prijs', '40 uur batterijduur'],
    },
    cons: {
      fr: ['Sondes filaires', 'Portée Bluetooth limitée 50 m'],
      en: ['Wired probes', 'Limited 50 m Bluetooth range'],
      de: ['Kabelgebundene Sonden', 'Begrenzte 50 m Bluetooth-Reichweite'],
      es: ['Sondas con cable', 'Alcance limitado 50 m'],
      it: ['Sonde con cavo', 'Portata Bluetooth limitata 50 m'],
      nl: ['Bedrade sondes', 'Beperkt 50 m Bluetooth-bereik'],
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  //  PRISES CONNECTÉES
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B09Z7QWD4S', // TODO: validate TP-Link Tapo P115
    category: 'prises-connectees',
    title: {
      fr: 'TP-Link Tapo P115 Prise Connectée avec Suivi Conso',
      de: 'TP-Link Tapo P115 Smart-Steckdose mit Verbrauchsmessung',
      en: 'TP-Link Tapo P115 Smart Plug with Energy Monitoring',
      es: 'TP-Link Tapo P115 Enchufe Inteligente con Medidor',
      it: 'TP-Link Tapo P115 Presa Smart con Monitor Consumi',
      nl: 'TP-Link Tapo P115 Slimme Stekker met Energiemeting',
    },
    price: { fr: '12,99€', de: '12,99€', en: '£10.99', es: '11,99€', it: '12,99€', nl: '11,99€' },
    priceNumeric: { fr: 12.99, de: 12.99, en: 10.99, es: 11.99, it: 12.99, nl: 11.99 },
    image: PLACEHOLDER_IMAGE,
    badge: {
      fr: 'Choix N°1', de: 'Beste Wahl', en: 'Top Pick',
      es: 'Mejor Elección', it: 'Scelta Top', nl: 'Beste Keuze',
    },
    nuraScore: 9.5,
    capacity: '16 A / 3680 W',
    bestFor: {
      fr: 'Piloter votre airfryer à distance',
      de: 'Airfryer aus der Ferne steuern',
      en: 'Control your air fryer remotely',
      es: 'Controlar tu airfryer a distancia',
      it: 'Controllare la friggitrice da remoto',
      nl: 'Je airfryer op afstand bedienen',
    },
    pros: {
      fr: ['Suivi consommation en temps réel', '16A / 3680W (airfryer compatible)', 'Alexa + Google Home'],
      en: ['Real-time energy monitoring', '16 A / 3680 W (air fryer rated)', 'Alexa + Google Home'],
      de: ['Echtzeit-Verbrauchsmessung', '16 A / 3680 W (Airfryer-geeignet)', 'Alexa + Google Home'],
      es: ['Medición de consumo en tiempo real', '16 A / 3680 W (compatible airfryer)', 'Alexa + Google Home'],
      it: ['Monitoraggio consumi in tempo reale', '16 A / 3680 W (compatibile airfryer)', 'Alexa + Google Home'],
      nl: ['Realtime energiemeting', '16 A / 3680 W (airfryer-geschikt)', 'Alexa + Google Home'],
    },
    cons: {
      fr: ['WiFi 2.4 GHz uniquement', 'App Tapo à part'],
      en: ['2.4 GHz WiFi only', 'Separate Tapo app'],
      de: ['Nur 2,4 GHz WLAN', 'Eigene Tapo-App'],
      es: ['Solo WiFi 2,4 GHz', 'App Tapo aparte'],
      it: ['Solo WiFi 2,4 GHz', 'App Tapo separata'],
      nl: ['Alleen 2,4 GHz wifi', 'Aparte Tapo-app'],
    },
  },
  {
    asin: 'B0B1LY5LGN', // TODO: validate TP-Link Tapo P100 pack 4
    category: 'prises-connectees',
    title: {
      fr: 'TP-Link Tapo P100 Pack de 4 Prises Connectées',
      de: 'TP-Link Tapo P100 4er-Pack Smart-Steckdosen',
      en: 'TP-Link Tapo P100 4-Pack Smart Plugs',
      es: 'TP-Link Tapo P100 Pack 4 Enchufes Inteligentes',
      it: 'TP-Link Tapo P100 Confezione da 4 Prese Smart',
      nl: 'TP-Link Tapo P100 4-Pack Slimme Stekkers',
    },
    price: { fr: '29,99€', de: '29,99€', en: '£24.99', es: '27,99€', it: '29,99€', nl: '27,99€' },
    priceNumeric: { fr: 29.99, de: 29.99, en: 24.99, es: 27.99, it: 29.99, nl: 27.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 9.1,
    capacity: '10 A',
    bestFor: {
      fr: 'Équiper toute la cuisine',
      de: 'Ganze Küche ausrüsten',
      en: 'Equip the whole kitchen',
      es: 'Equipar toda la cocina',
      it: 'Attrezzare tutta la cucina',
      nl: 'De hele keuken uitrusten',
    },
    pros: {
      fr: ['Moins de 8 € la prise', 'Programmation horaire', 'Compatible Matter (firmware récent)'],
      en: ['Under £7 per plug', 'Schedules & timers', 'Matter compatible (recent firmware)'],
      de: ['Weniger als 8 € pro Steckdose', 'Zeitpläne & Timer', 'Matter-kompatibel (neueste Firmware)'],
      es: ['Menos de 8 € por enchufe', 'Programación horaria', 'Compatible Matter (firmware reciente)'],
      it: ['Meno di 8 € a presa', 'Programmazione oraria', 'Compatibile Matter (firmware recente)'],
      nl: ['Minder dan €8 per stekker', 'Schema\'s & timers', 'Matter-compatibel (recente firmware)'],
    },
    cons: {
      fr: ['Pas de suivi consommation', 'Limité à 10 A (pas pour airfryer)'],
      en: ['No energy monitoring', 'Limited to 10 A (not for air fryer)'],
      de: ['Keine Verbrauchsmessung', 'Begrenzt auf 10 A (nicht für Airfryer)'],
      es: ['Sin medidor de consumo', 'Limitado a 10 A (no para airfryer)'],
      it: ['Nessun monitor consumi', 'Limitato a 10 A (no airfryer)'],
      nl: ['Geen energiemeting', 'Beperkt tot 10 A (niet voor airfryer)'],
    },
  },
  {
    asin: 'B07QTHZ7R4', // TODO: validate Meross MSS310
    category: 'prises-connectees',
    title: {
      fr: 'Meross MSS310 Prise Connectée HomeKit 16A',
      de: 'Meross MSS310 Smart-Steckdose HomeKit 16A',
      en: 'Meross MSS310 HomeKit Smart Plug 16A',
      es: 'Meross MSS310 Enchufe Inteligente HomeKit 16A',
      it: 'Meross MSS310 Presa Smart HomeKit 16A',
      nl: 'Meross MSS310 HomeKit Slimme Stekker 16A',
    },
    price: { fr: '19,99€', de: '19,99€', en: '£15.99', es: '17,99€', it: '19,99€', nl: '17,99€' },
    priceNumeric: { fr: 19.99, de: 19.99, en: 15.99, es: 17.99, it: 19.99, nl: 17.99 },
    image: PLACEHOLDER_IMAGE,
    nuraScore: 8.8,
    capacity: '16 A / 3680 W',
    bestFor: {
      fr: 'Écosystème Apple HomeKit',
      de: 'Apple HomeKit Ökosystem',
      en: 'Apple HomeKit ecosystem',
      es: 'Ecosistema Apple HomeKit',
      it: 'Ecosistema Apple HomeKit',
      nl: 'Apple HomeKit-ecosysteem',
    },
    pros: {
      fr: ['Compatible HomeKit natif', '16A / 3680W', 'Suivi conso dans l\'app Meross'],
      en: ['Native HomeKit support', '16 A / 3680 W', 'Energy tracking in Meross app'],
      de: ['Native HomeKit-Unterstützung', '16 A / 3680 W', 'Verbrauchstracking in Meross-App'],
      es: ['Compatible HomeKit nativo', '16 A / 3680 W', 'Seguimiento consumo en app Meross'],
      it: ['HomeKit nativo', '16 A / 3680 W', 'Tracking consumi nell\'app Meross'],
      nl: ['Native HomeKit-ondersteuning', '16 A / 3680 W', 'Verbruikstracking in Meross-app'],
    },
    cons: {
      fr: ['App Meross moins polie', 'Design un peu épais'],
      en: ['Meross app less polished', 'Slightly bulky design'],
      de: ['Meross-App weniger poliert', 'Etwas klobiges Design'],
      es: ['App Meross menos pulida', 'Diseño algo grueso'],
      it: ['App Meross meno curata', 'Design un po\' spesso'],
      nl: ['Meross-app minder gepolijst', 'Wat dik ontwerp'],
    },
  },
]

/** Projection for a single language, ready to feed UI components. */
export function getSmartKitchenProducts(lang: string) {
  const tag = partnerTags[lang] || partnerTags.fr
  const domain = domains[lang] || domains.fr

  return smartKitchenStaticProducts.map((p) => ({
    asin: p.asin,
    category: p.category,
    title: p.title[lang] || p.title.fr,
    price: p.price[lang] || p.price.fr,
    priceNumeric: p.priceNumeric[lang] || p.priceNumeric.fr,
    image: p.image,
    images: [p.image],
    url: `https://${domain}/dp/${p.asin}?tag=${tag}`,
    badge: p.badge ? (p.badge[lang] || p.badge.fr) : undefined,
    nuraScore: p.nuraScore,
    capacity: p.capacity,
    bestFor: p.bestFor[lang] || p.bestFor.fr,
    pros: p.pros[lang] || p.pros.fr,
    cons: p.cons[lang] || p.cons.fr,
  }))
}

export type SmartKitchenProduct = ReturnType<typeof getSmartKitchenProducts>[number]

export function getSmartKitchenProductsByCategory(lang: string, category: SmartKitchenCategory) {
  return getSmartKitchenProducts(lang).filter((p) => p.category === category)
}
