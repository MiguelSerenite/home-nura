// ============================================================================
// SMART KITCHEN — Silo 2 (Phase 1)
//
// This data file powers the /[lang]/cuisine-connectee silo. It is deliberately
// kept separate from `lib/products.ts` so the airfryer silo and the smart
// kitchen silo never accidentally share products in the same list, comparator
// or search — which would leak signals across topical silos and dilute the
// topical authority we worked hard to build on airfryers.
//
// ✅ ASINs validated against Amazon.fr Partenaires (April 2026).
//    Images use Amazon CDN via the img() helper (same pattern as
//    lib/products.ts). Prices are real Amazon.fr prices as of April 2026.
//    Product 3 (originally Tefal Cook4Me Touch Pro) replaced with
//    Instant Pot Duo Plus WhisperQuiet — the Cook4Me brand does not
//    exist on Amazon.fr (Moulinex Cookeo is the French equivalent,
//    already covered as product 1).
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

// Amazon CDN image helper — same pattern as lib/products.ts.
const img = (id: string, size: 'SL500' | 'SL1500' = 'SL1500') =>
  `https://m.media-amazon.com/images/I/${id}._AC_${size}_.jpg`

export const smartKitchenStaticProducts: SmartKitchenStaticProduct[] = [
  // ──────────────────────────────────────────────────────────────────────────
  //  MULTICUISEURS CONNECTÉS
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B0859ZJVDH',
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
    image: img('61i5qjW1XNL'),
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
    asin: 'B09N3VQBMX', // Ninja Foodi MAX SmartLid OL750EU (amazon.fr lists 14 functions)
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
    image: img('31ZfzTukvML'),
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
      fr: ['14 fonctions (autocuiseur + airfryer)', 'Couvercle SmartLid unique', 'Sonde de cuisson numérique'],
      en: ['14 functions (pressure cooker + air fryer)', 'Unique SmartLid', 'Digital cooking probe'],
      de: ['14 Funktionen (Schnellkochtopf + Airfryer)', 'Einzigartiger SmartLid', 'Digitales Garthermometer'],
      es: ['14 funciones (olla a presión + airfryer)', 'Tapa SmartLid única', 'Sonda de cocción digital'],
      it: ['14 funzioni (pentola a pressione + airfryer)', 'SmartLid unico', 'Sonda di cottura digitale'],
      nl: ['14 functies (snelkookpan + airfryer)', 'Unieke SmartLid', 'Digitale kernthermometer'],
    },
    cons: {
      fr: ['Encombrant sur le plan de travail', 'Pas de Wi-Fi ni d\'app'],
      en: ['Bulky on the counter', 'No Wi-Fi or app'],
      de: ['Groß auf der Arbeitsplatte', 'Kein WLAN, keine App'],
      es: ['Voluminosa en la encimera', 'Sin Wi-Fi ni app'],
      it: ['Ingombrante sul piano', 'Niente Wi-Fi né app'],
      nl: ['Groot op het aanrecht', 'Geen wifi of app'],
    },
  },
  {
    asin: 'B0BYT67H2S',
    category: 'multicuiseurs',
    title: {
      fr: 'Instant Pot Duo Plus WhisperQuiet - 5.7L',
      de: 'Instant Pot Duo Plus WhisperQuiet - 5.7L',
      en: 'Instant Pot Duo Plus WhisperQuiet - 5.7L',
      es: 'Instant Pot Duo Plus WhisperQuiet - 5.7L',
      it: 'Instant Pot Duo Plus WhisperQuiet - 5.7L',
      nl: 'Instant Pot Duo Plus WhisperQuiet - 5.7L',
    },
    price: { fr: '138,20€', de: '139,99€', en: '£109.99', es: '129,99€', it: '139,99€', nl: '129,99€' },
    priceNumeric: { fr: 138.20, de: 139.99, en: 109.99, es: 129.99, it: 139.99, nl: 129.99 },
    image: img('71eO7wvcu4L'),
    nuraScore: 8.8,
    capacity: '5.7L',
    bestFor: {
      fr: 'Cuisson silencieuse & polyvalence',
      de: 'Leises Kochen & Vielseitigkeit',
      en: 'Quiet cooking & versatility',
      es: 'Cocción silenciosa y versatilidad',
      it: 'Cottura silenziosa e versatilità',
      nl: 'Stil koken & veelzijdigheid',
    },
    pros: {
      fr: ['Libération de vapeur silencieuse (WhisperQuiet)', '9-en-1 (pression, mijoteuse, riz, vapeur…)', 'Cuisson sous pression rapide'],
      en: ['Quiet steam release (WhisperQuiet)', '9-in-1 (pressure, slow cook, rice, steam…)', 'Fast pressure cooking'],
      de: ['Leiser Dampfablass (WhisperQuiet)', '9-in-1 (Druck, Schongaren, Reis, Dampf…)', 'Schnelles Druckgaren'],
      es: ['Liberación de vapor silenciosa (WhisperQuiet)', '9-en-1 (presión, cocción lenta, arroz, vapor…)', 'Cocción a presión rápida'],
      it: ['Rilascio del vapore silenzioso (WhisperQuiet)', '9-in-1 (pressione, cottura lenta, riso, vapore…)', 'Cottura a pressione rapida'],
      nl: ['Stille stoomafvoer (WhisperQuiet)', '9-in-1 (druk, slowcook, rijst, stoom…)', 'Snelle snelkookpan'],
    },
    cons: {
      fr: ['Pas d\'écran tactile', 'Pas de connexion WiFi'],
      en: ['No touchscreen', 'No WiFi connectivity'],
      de: ['Kein Touchscreen', 'Keine WiFi-Verbindung'],
      es: ['Sin pantalla táctil', 'Sin conexión WiFi'],
      it: ['Nessun touchscreen', 'Nessuna connessione WiFi'],
      nl: ['Geen touchscreen', 'Geen WiFi-verbinding'],
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  //  CAFETIÈRES INTELLIGENTES
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B0CH9X5WSF',
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
    image: img('41ZmiVOkuJL'),
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
      fr: ['Carafe à lait LatteCrema', '7 boissons en une touche', 'Broyeur intégré (13 réglages)'],
      en: ['LatteCrema milk carafe', '7 one-touch drinks', 'Built-in grinder (13 settings)'],
      de: ['LatteCrema Milchkaraffe', '7 Getränke per Knopfdruck', 'Integriertes Mahlwerk (13 Stufen)'],
      es: ['Jarra de leche LatteCrema', '7 bebidas con un toque', 'Molinillo integrado (13 ajustes)'],
      it: ['Caraffa latte LatteCrema', '7 bevande one touch', 'Macinino integrato (13 livelli)'],
      nl: ['LatteCrema melkkan', '7 dranken met één druk', 'Geïntegreerde molen (13 standen)'],
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
    asin: 'B0DV9M7MY5',
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
    image: img('21qt34NLZVL'),
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
      fr: ['Mousseur lait LatteGo (2 pièces)', 'Boissons chaudes et glacées', '4 profils utilisateurs'],
      en: ['LatteGo milk frother (2 parts)', 'Hot and iced drinks', '4 user profiles'],
      de: ['LatteGo Milchaufschäumer (2 Teile)', 'Heiße und kalte Getränke', '4 Benutzerprofile'],
      es: ['Espumador LatteGo (2 piezas)', 'Bebidas calientes y frías', '4 perfiles de usuario'],
      it: ['Montalatte LatteGo (2 pezzi)', 'Bevande calde e fredde', '4 profili utente'],
      nl: ['LatteGo melkopschuimer (2 delen)', 'Warme en ijskoude dranken', '4 gebruikersprofielen'],
    },
    cons: {
      fr: ['Prix premium', 'Pas de Wi-Fi ni d\'app'],
      en: ['Premium price', 'No Wi-Fi or app'],
      de: ['Premium-Preis', 'Kein WLAN, keine App'],
      es: ['Precio premium', 'Sin Wi-Fi ni app'],
      it: ['Prezzo premium', 'Niente Wi-Fi né app'],
      nl: ['Premium prijs', 'Geen wifi of app'],
    },
  },
  {
    asin: 'B07X9ZJ536',
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
    image: img('31y7c0Mw8wL'),
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
      fr: ['Réservoir 2.3L XL', 'Écran tactile OLED XL', '12 recettes pré-enregistrées'],
      en: ['XL 2.3L tank', 'XL OLED touchscreen', '12 preset recipes'],
      de: ['XL-Tank 2.3L', 'XL-OLED-Touchscreen', '12 gespeicherte Rezepte'],
      es: ['Depósito XL 2.3L', 'Pantalla táctil OLED XL', '12 recetas predefinidas'],
      it: ['Serbatoio XL 2.3L', 'Touchscreen OLED XL', '12 ricette preimpostate'],
      nl: ['XL 2.3L reservoir', 'XL OLED-touchscreen', '12 voorgeprogrammeerde recepten'],
    },
    cons: {
      fr: ['Pas de Wi-Fi ni d\'app', 'Lait aspiré par tube (pas de carafe)'],
      en: ['No Wi-Fi or app', 'Milk drawn through a tube (no carafe)'],
      de: ['Kein WLAN, keine App', 'Milch über Schlauch (keine Karaffe)'],
      es: ['Sin Wi-Fi ni app', 'Leche por tubo (sin jarra)'],
      it: ['Niente Wi-Fi né app', 'Latte aspirato da tubo (senza caraffa)'],
      nl: ['Geen wifi of app', 'Melk via slangetje (geen kan)'],
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  //  BALANCES DE CUISINE INTELLIGENTES
  // ──────────────────────────────────────────────────────────────────────────
  {
    asin: 'B09HLZV4H9',
    category: 'balances',
    title: {
      fr: 'Etekcity Smart Nutrition Scale',
      de: 'Etekcity Smart Nutrition Waage',
      en: 'Etekcity Smart Nutrition Scale',
      es: 'Báscula Etekcity Smart Nutrition',
      it: 'Bilancia Etekcity Smart Nutrition',
      nl: 'Etekcity Smart Nutrition Weegschaal',
    },
    price: { fr: '39,99€', de: '39,99€', en: '£34.99', es: '37,99€', it: '39,99€', nl: '37,99€' },
    priceNumeric: { fr: 39.99, de: 39.99, en: 34.99, es: 37.99, it: 39.99, nl: 37.99 },
    image: img('41kxKZefVsL'),
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
      fr: ['Scan des codes-barres dans l\'app', 'Précision 1 g', 'App VeSync gratuite'],
      en: ['Barcode scanning in the app', '1 g precision', 'Free VeSync app'],
      de: ['Barcode-Scan in der App', '1 g Präzision', 'Kostenlose VeSync-App'],
      es: ['Escaneo de códigos de barras en la app', 'Precisión 1 g', 'App VeSync gratis'],
      it: ['Scansione codici a barre nell\'app', 'Precisione 1 g', 'App VeSync gratuita'],
      nl: ['Barcodes scannen in de app', '1 g nauwkeurigheid', 'Gratis VeSync app'],
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
    asin: 'B07YX6QKDB',
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
    image: img('31yvIKIEtIL'),
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
      fr: ['Capacité 15 kg hors norme', 'Plateau inox XL', 'Marque allemande fiable'],
      en: ['Exceptional 15 kg capacity', 'XL stainless steel platform', 'Reliable German brand'],
      de: ['Außergewöhnliche 15 kg Tragkraft', 'XL-Edelstahlplatte', 'Zuverlässige deutsche Marke'],
      es: ['Capacidad excepcional 15 kg', 'Plato de acero inoxidable XL', 'Marca alemana fiable'],
      it: ['Portata eccezionale 15 kg', 'Piattaforma XL in acciaio inox', 'Marchio tedesco affidabile'],
      nl: ['Uitzonderlijke 15 kg capaciteit', 'XL rvs plateau', 'Betrouwbaar Duits merk'],
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
    asin: 'B0817LMPDX',
    category: 'balances',
    title: {
      fr: 'Renpho Balance Cuisine Connectée',
      de: 'Renpho Smarte Küchenwaage',
      en: 'Renpho Smart Kitchen Scale',
      es: 'Báscula Cocina Inteligente Renpho',
      it: 'Bilancia Cucina Smart Renpho',
      nl: 'Renpho Slimme Keukenweegschaal',
    },
    price: { fr: '24,99€', de: '24,99€', en: '£19.99', es: '22,99€', it: '24,99€', nl: '22,99€' },
    priceNumeric: { fr: 24.99, de: 24.99, en: 19.99, es: 22.99, it: 24.99, nl: 22.99 },
    image: img('41EA3dB0ZnL'),
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
      fr: ['Bluetooth + app Renpho Health', 'Plateau en verre trempé', 'Précision 1 g'],
      en: ['Bluetooth + Renpho Health app', 'Tempered glass platform', '1 g precision'],
      de: ['Bluetooth + Renpho Health App', 'Plattform aus gehärtetem Glas', '1 g Präzision'],
      es: ['Bluetooth + app Renpho Health', 'Plato de vidrio templado', 'Precisión 1 g'],
      it: ['Bluetooth + app Renpho Health', 'Piatto in vetro temperato', 'Precisione 1 g'],
      nl: ['Bluetooth + Renpho Health app', 'Plateau van gehard glas', '1 g nauwkeurigheid'],
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
    asin: 'B07H8WTFHW',
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
    image: img('61C9DAvebML'),
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
    asin: 'B0CP8BPXKR',
    category: 'thermometres-viande',
    title: {
      fr: 'MEATER Pro Thermomètre Sans Fil Longue Portée',
      de: 'MEATER Pro Kabelloses Thermometer Große Reichweite',
      en: 'MEATER Pro Wireless Thermometer Long Range',
      es: 'MEATER Pro Termómetro Inalámbrico Largo Alcance',
      it: 'MEATER Pro Termometro Wireless Lunga Portata',
      nl: 'MEATER Pro Draadloze Thermometer Groot Bereik',
    },
    price: { fr: '149,99€', de: '149,99€', en: '£129.99', es: '144,99€', it: '149,99€', nl: '144,99€' },
    priceNumeric: { fr: 149.99, de: 149.99, en: 129.99, es: 144.99, it: 149.99, nl: 144.99 },
    image: img('41K-AL+1GGL'),
    nuraScore: 9.2,
    capacity: '75 m Bluetooth',
    bestFor: {
      fr: 'Longue distance / jardin',
      de: 'Große Entfernung / Garten',
      en: 'Long range / garden',
      es: 'Larga distancia / jardín',
      it: 'Lunga distanza / giardino',
      nl: 'Lange afstand / tuin',
    },
    pros: {
      fr: ['Portée jusqu\'à 75 m', 'Sonde étanche, lave-vaisselle', 'Ambiant jusqu\'à 550 °C'],
      en: ['Up to 75 m range', 'Waterproof, dishwasher-safe probe', 'Ambient up to 550 °C'],
      de: ['Bis zu 75 m Reichweite', 'Wasserdichte, spülmaschinenfeste Sonde', 'Umgebung bis 550 °C'],
      es: ['Alcance hasta 75 m', 'Sonda estanca, apta lavavajillas', 'Ambiente hasta 550 °C'],
      it: ['Portata fino a 75 m', 'Sonda impermeabile, lavabile in lavastoviglie', 'Ambiente fino a 550 °C'],
      nl: ['Bereik tot 75 m', 'Waterdichte, vaatwasserbestendige sonde', 'Omgeving tot 550 °C'],
    },
    cons: {
      fr: ['Prix élevé pour 1 sonde', 'Portée annoncée en champ libre'],
      en: ['Expensive for single probe', 'Range quoted in open air'],
      de: ['Teuer für nur 1 Sonde', 'Reichweite bei freier Sicht angegeben'],
      es: ['Caro para una sola sonda', 'Alcance indicado sin obstáculos'],
      it: ['Costoso per 1 sola sonda', 'Portata dichiarata senza ostacoli'],
      nl: ['Duur voor 1 sonde', 'Bereik opgegeven bij vrij zicht'],
    },
  },
  {
    asin: 'B076QBJVWX',
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
    image: img('41ehqwxgAlL'),
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
      fr: ['4 sondes en parallèle', 'Batterie rechargeable (env. 50 h)', 'Support magnétique'],
      en: ['4 simultaneous probes', 'Rechargeable battery (approx. 50 h)', 'Magnetic back'],
      de: ['4 Sonden parallel', 'Akku (ca. 50 h)', 'Magnetische Rückseite'],
      es: ['4 sondas en paralelo', 'Batería recargable (aprox. 50 h)', 'Soporte magnético'],
      it: ['4 sonde in parallelo', 'Batteria ricaricabile (circa 50 h)', 'Retro magnetico'],
      nl: ['4 gelijktijdige sondes', 'Oplaadbare accu (ca. 50 u)', 'Magnetische achterkant'],
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
    asin: 'B09ZBGWYH9',
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
    image: img('41ZmfiOgK0L'),
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
    asin: 'B0B3JSKTCQ',
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
    image: img('41fiqbMiT9L'),
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
      fr: ['Lot de 4 prises', 'Programmation horaire', 'Alexa + Google Home'],
      en: ['Pack of 4 plugs', 'Schedules & timers', 'Alexa + Google Home'],
      de: ['4 Steckdosen im Set', 'Zeitpläne & Timer', 'Alexa + Google Home'],
      es: ['Pack de 4 enchufes', 'Programación horaria', 'Alexa + Google Home'],
      it: ['Confezione da 4 prese', 'Programmazione oraria', 'Alexa + Google Home'],
      nl: ['Set van 4 stekkers', 'Schema\'s & timers', 'Alexa + Google Home'],
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
    asin: 'B0GT4DTYWG',
    category: 'prises-connectees',
    title: {
      fr: 'Meross MSS210P Prise Connectée HomeKit 16A (lot de 2)',
      de: 'Meross MSS210P Smart-Steckdose HomeKit 16A',
      en: 'Meross MSS210P HomeKit Smart Plug 16A',
      es: 'Meross MSS210P Enchufe Inteligente HomeKit 16A',
      it: 'Meross MSS210P Presa Smart HomeKit 16A',
      nl: 'Meross MSS210P HomeKit Slimme Stekker 16A',
    },
    price: { fr: '19,99€', de: '19,99€', en: '£15.99', es: '17,99€', it: '19,99€', nl: '17,99€' },
    priceNumeric: { fr: 19.99, de: 19.99, en: 15.99, es: 17.99, it: 19.99, nl: 17.99 },
    image: img('31ikTZWZfzL'),
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
