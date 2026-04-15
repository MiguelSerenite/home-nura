// Static product data with Amazon product images and affiliate links
// Images are sourced from Amazon CDN (per-country marketplace images)

// Default affiliate tags — used when the matching AMAZON_TAG_{LANG}
// env var isn't set. Keeps preview deployments working out-of-the-box
// while letting production override per-locale (so rotating a tag
// after an affiliate account change doesn't need a code deploy).
//
// Resolution order per locale: process.env.AMAZON_TAG_{LANG} →
// DEFAULT_PARTNER_TAGS[lang] → DEFAULT_PARTNER_TAGS.fr.
const DEFAULT_PARTNER_TAGS: Record<string, string> = {
  fr: 'homenuraen05-21',
  de: 'homenuraen00-21',
  en: 'homenuraen-21',
  es: 'homenuraen0a-21',
  it: 'homenuraen010-21',
  nl: 'homenuranl-21',
}

function resolvePartnerTag(lang: string): string {
  const envTag = process.env[`AMAZON_TAG_${lang.toUpperCase()}`]
  if (envTag && envTag.length > 0) return envTag
  return DEFAULT_PARTNER_TAGS[lang] || DEFAULT_PARTNER_TAGS.fr
}

const domains: Record<string, string> = {
  fr: 'www.amazon.fr',
  de: 'www.amazon.de',
  en: 'www.amazon.co.uk',
  es: 'www.amazon.es',
  it: 'www.amazon.it',
  nl: 'www.amazon.nl',
}

// Helper to build image URLs from Amazon image IDs
// Amazon CDN images are global - same ID works from any country
const img = (id: string, size: 'SL500' | 'SL1500' = 'SL1500') =>
  `https://m.media-amazon.com/images/I/${id}._AC_${size}_.jpg`

export interface StaticProduct {
  title: Record<string, string>
  price: Record<string, string>
  priceNumeric: Record<string, number>
  /** Per-country marketplace images */
  images: Record<string, string[]>
  asin: string
  badge?: Record<string, string>
  nuraScore: number
  capacity: string
  bestFor: Record<string, string>
  pros: Record<string, string[]>
  cons: Record<string, string[]>
}

export const staticProducts: StaticProduct[] = [
  {
    // 1. Ninja Foodi MAX Double Stack XL 9.5L
    asin: 'B0CZPJ1HFP',
    title: {
      fr: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      de: 'Ninja Foodi MAX Double Stack XL Heißluftfritteuse - 9.5L',
      en: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      es: 'Ninja Foodi MAX Double Stack XL Freidora de Aire - 9.5L',
      it: 'Ninja Foodi MAX Double Stack XL Friggitrice ad Aria - 9.5L',
      nl: 'Ninja Foodi MAX Double Stack XL Airfryer - 9.5L',
    },
    price: {
      fr: '229,99€', de: '229,99€', en: '£229.99',
      es: '229,99€', it: '229,99€', nl: '229,99€',
    },
    priceNumeric: { fr: 229.99, de: 229.99, en: 229.99, es: 229.99, it: 229.99, nl: 229.99 },
    images: {
      fr: [img('41CfTSLQprL'), img('41rW9SE67CL'), img('41UknP2dSDL'), img('51mUF3yC0XL'), img('51kFfNWVVmL'), img('51SQGlZ5HqL'), img('71GTPUFlAnL')],
      de: [img('41CfTSLQprL'), img('41Vx9wlJztL'), img('41OVP9LdQfL'), img('51r0lz5MHQL'), img('51ntqWIQVmL'), img('51wdAhlYZvL'), img('71GTPUFlAnL')],
      en: [img('41q8JF5X2dL'), img('51F8eagvyaL'), img('61rt8iW5LLL')],
      es: [img('41CfTSLQprL'), img('418RY5VZtXL'), img('41e09aE8blL'), img('51FWLbR7QYL'), img('51fUPHYhGHL'), img('51RjMpIlD7L'), img('71GTPUFlAnL')],
      it: [img('41CfTSLQprL'), img('41fqAR3UWeL'), img('41l0KWVku1L'), img('51ZnUSw-77L'), img('51+5MDNxDKL'), img('51bAw6RkbJL'), img('71GTPUFlAnL')],
      nl: [img('41CfTSLQprL'), img('41Vx9wlJztL'), img('41OVP9LdQfL'), img('51r0lz5MHQL'), img('51ntqWIQVmL'), img('51wdAhlYZvL'), img('71GTPUFlAnL')],
    },
    badge: {
      fr: 'Choix N°1', de: 'Beste Wahl', en: 'Top Pick',
      es: 'Mejor Elección', it: 'Scelta Top', nl: 'Beste Keuze',
    },
    nuraScore: 9.4,
    capacity: '9.5L',
    bestFor: {
      fr: 'Familles nombreuses', en: 'Large families', de: 'Große Familien',
      es: 'Familias numerosas', it: 'Famiglie numerose', nl: 'Grote gezinnen',
    },
    pros: {
      fr: ['Double tiroir empilable 9.5L', 'Cuisson ultra-homogène', '6 modes de cuisson'],
      en: ['Dual stackable drawer 9.5L', 'Ultra-even cooking', '6 cooking modes'],
      de: ['Doppelter stapelbarer Korb 9.5L', 'Ultra-gleichmäßiges Garen', '6 Garmodi'],
      es: ['Doble cajón apilable 9.5L', 'Cocción ultra-homogénea', '6 modos de cocción'],
      it: ['Doppio cestello impilabile 9.5L', 'Cottura ultra-uniforme', '6 modalità di cottura'],
      nl: ['Dubbele stapelbare lade 9.5L', 'Ultra-gelijkmatig bakken', '6 kookmodi'],
    },
    cons: {
      fr: ['Prix élevé', 'Encombrant'], en: ['High price', 'Bulky'],
      de: ['Hoher Preis', 'Sperrig'], es: ['Precio alto', 'Voluminosa'],
      it: ['Prezzo alto', 'Ingombrante'], nl: ['Hoge prijs', 'Omvangrijk'],
    },
  },
  {
    // 2. Philips Airfryer 3000 Series XL 6.2L
    asin: 'B0D9S9Y16Y',
    title: {
      fr: 'Philips Airfryer Série 3000 XL - 6.2L',
      de: 'Philips Airfryer Serie 3000 XL - 6.2L',
      en: 'Philips Airfryer 3000 Series XL - 6.2L',
      es: 'Philips Airfryer Serie 3000 XL - 6.2L',
      it: 'Philips Airfryer Serie 3000 XL - 6.2L',
      nl: 'Philips Airfryer 3000 Serie XL - 6.2L',
    },
    price: {
      fr: '119,99€', de: '119,99€', en: '£99.99',
      es: '109,99€', it: '119,99€', nl: '109,99€',
    },
    priceNumeric: { fr: 119.99, de: 119.99, en: 99.99, es: 109.99, it: 119.99, nl: 109.99 },
    images: {
      fr: [img('31upZSvSwjL'), img('31kx15DMoWL'), img('41Hc43N6WlL'), img('41I8+6WDUdL'), img('41Uhfau0fcL'), img('51ouKk1X8rL'), img('41yUrDga5ML'), img('516hlh2K8IL')],
      de: [img('31ihrfI3oJL'), img('41ExFDsBRkL'), img('31OF6Z0HJlL'), img('611kSWXGdAL'), img('51JFVsg9BzL')],
      en: [img('31htbiQXdhL'), img('41QCII3b57L'), img('413ityir+XL'), img('51Xa00+L5fL'), img('51w9B8HUvIL'), img('41YgfZK3LdL'), img('41cLDNrEt4L'), img('51lXaS1GjEL')],
      es: [img('31EF5Q9vkpL'), img('41wE5-Wkf0L'), img('41Zvn27SqFL'), img('51Sa+dC92oL'), img('51a7uKgvHSL'), img('41N9swplcpL'), img('61Fv2QxR6uL'), img('514QeBoWEUL')],
      it: [img('31upZSvSwjL'), img('31kx15DMoWL'), img('41Hc43N6WlL'), img('41I8+6WDUdL'), img('41Uhfau0fcL'), img('51ouKk1X8rL'), img('41yUrDga5ML'), img('516hlh2K8IL')],
      nl: [img('31upZSvSwjL'), img('41g2Bu-+FZL'), img('41I8+6WDUdL'), img('41FlvEJH6RL'), img('51ktilXnRHL'), img('51KjBx7kJbL'), img('41qLfETFmDL'), img('516hlh2K8IL')],
    },
    nuraScore: 8.7,
    capacity: '6.2L',
    bestFor: {
      fr: 'Rapport qualité-prix', en: 'Value for money', de: 'Preis-Leistung',
      es: 'Relación calidad-precio', it: 'Rapporto qualità-prezzo', nl: 'Prijs-kwaliteit',
    },
    pros: {
      fr: ['Technologie Rapid Air', 'Facile à nettoyer', 'Marque fiable'],
      en: ['Rapid Air technology', 'Easy to clean', 'Reliable brand'],
      de: ['Rapid Air Technologie', 'Leicht zu reinigen', 'Zuverlässige Marke'],
      es: ['Tecnología Rapid Air', 'Fácil limpieza', 'Marca fiable'],
      it: ['Tecnologia Rapid Air', 'Facile da pulire', 'Marca affidabile'],
      nl: ['Rapid Air technologie', 'Makkelijk schoon te maken', 'Betrouwbaar merk'],
    },
    cons: {
      fr: ['Panier unique', 'Pas de connectivité'], en: ['Single basket', 'No connectivity'],
      de: ['Einzelner Korb', 'Keine Konnektivität'], es: ['Cesta única', 'Sin conectividad'],
      it: ['Cestello singolo', 'Nessuna connettività'], nl: ['Enkele mand', 'Geen connectiviteit'],
    },
  },
  {
    // 3. Cosori Dual Blaze Smart 6.4L
    asin: 'B0FPWSDF86',
    title: {
      fr: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      de: 'Cosori Dual Blaze Smart Heißluftfritteuse - 6.4L',
      en: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      es: 'Cosori Dual Blaze Smart Freidora de Aire - 6.4L',
      it: 'Cosori Dual Blaze Smart Friggitrice ad Aria - 6.4L',
      nl: 'Cosori Dual Blaze Smart Airfryer - 6.4L',
    },
    price: {
      fr: '139,99€', de: '139,99€', en: '£119.99',
      es: '129,99€', it: '139,99€', nl: '129,99€',
    },
    priceNumeric: { fr: 139.99, de: 139.99, en: 119.99, es: 129.99, it: 139.99, nl: 129.99 },
    images: {
      fr: [img('41qK28Ln0PL'), img('51eX4ilkMVL'), img('51rTkIGnYTL'), img('517Ul1Ym6KL'), img('51lUY-Q1b5L'), img('51GZcygvXfL'), img('91mFwLsU2DL')],
      de: [img('41qK28Ln0PL'), img('51eX4ilkMVL'), img('51rTkIGnYTL'), img('517Ul1Ym6KL'), img('51lUY-Q1b5L'), img('51GZcygvXfL'), img('91mFwLsU2DL')],
      en: [img('41h5+oA7WXL'), img('61VZOPq09xL')],
      es: [img('41UDTjvPnuL'), img('51V50PjealL'), img('51Jp5jUoDpL'), img('51kXvM0XosL'), img('51E0GUZNTQL'), img('51ys3sZeWlL'), img('91rdPszNizL')],
      it: [img('41UDTjvPnuL'), img('51V50PjealL'), img('51Jp5jUoDpL'), img('51kXvM0XosL'), img('51E0GUZNTQL'), img('51ys3sZeWlL'), img('91rdPszNizL')],
      nl: [img('41qK28Ln0PL'), img('51eX4ilkMVL'), img('51rTkIGnYTL'), img('517Ul1Ym6KL'), img('51lUY-Q1b5L'), img('51GZcygvXfL'), img('91mFwLsU2DL')],
    },
    nuraScore: 8.9,
    capacity: '6.4L',
    bestFor: {
      fr: 'Cuisson intelligente', en: 'Smart cooking', de: 'Intelligentes Kochen',
      es: 'Cocción inteligente', it: 'Cottura intelligente', nl: 'Slim koken',
    },
    pros: {
      fr: ['Double résistance haut/bas', 'App connectée', 'Préchauffage rapide'],
      en: ['Dual top/bottom heating', 'Connected app', 'Fast preheat'],
      de: ['Doppelheizung oben/unten', 'Verbundene App', 'Schnelles Vorheizen'],
      es: ['Doble resistencia arriba/abajo', 'App conectada', 'Precalentamiento rápido'],
      it: ['Doppia resistenza sopra/sotto', 'App connessa', 'Preriscaldamento rapido'],
      nl: ['Dubbel boven/onder verwarming', 'Verbonden app', 'Snel voorverwarmen'],
    },
    cons: {
      fr: ['Un seul tiroir', 'App parfois lente'], en: ['Single drawer', 'App sometimes slow'],
      de: ['Einzelner Korb', 'App manchmal langsam'], es: ['Un solo cajón', 'App a veces lenta'],
      it: ['Singolo cassetto', 'App a volte lenta'], nl: ['Enkele lade', 'App soms traag'],
    },
  },
  {
    // 4. Tefal ActiFry Genius XL 2in1
    asin: 'B079QL7T1S',
    title: {
      fr: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      de: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      en: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      es: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      it: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      nl: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
    },
    price: {
      fr: '199,99€', de: '209,99€', en: '£179.99',
      es: '189,99€', it: '199,99€', nl: '199,99€',
    },
    priceNumeric: { fr: 199.99, de: 209.99, en: 179.99, es: 189.99, it: 199.99, nl: 199.99 },
    images: {
      fr: [img('41sQIj0LwDL'), img('4163aujSYZL'), img('41CHtc+1fpL'), img('31Ul3dd0BNL'), img('41biHhvIGSL'), img('415PxoisSFL'), img('41qwNP-X98L'), img('81QIrBuK-jL')],
      de: [img('41sQIj0LwDL'), img('41CHtc+1fpL'), img('31Ul3dd0BNL'), img('41biHhvIGSL'), img('4163aujSYZL'), img('415PxoisSFL'), img('41c-99oMleL'), img('81QIrBuK-jL')],
      en: [img('41sQIj0LwDL'), img('41CHtc+1fpL'), img('31Ul3dd0BNL'), img('41biHhvIGSL'), img('4163aujSYZL'), img('415PxoisSFL'), img('41qwNP-X98L'), img('81QIrBuK-jL')],
      es: [img('41sQIj0LwDL'), img('41CHtc+1fpL'), img('31Ul3dd0BNL'), img('41biHhvIGSL'), img('4163aujSYZL'), img('415PxoisSFL'), img('41qwNP-X98L'), img('81QIrBuK-jL')],
      it: [img('41sQIj0LwDL'), img('41CHtc+1fpL'), img('31Ul3dd0BNL'), img('41biHhvIGSL'), img('4163aujSYZL'), img('415PxoisSFL'), img('41qwNP-X98L'), img('81QIrBuK-jL')],
      nl: [img('41Fw7V4F8fL'), img('515scv6AudL'), img('41WZXGCyMzL'), img('31RXJGbJsJL'), img('41kzpb7UpkL'), img('418bUhQAKXL'), img('7103ERZq1kL')],
    },
    nuraScore: 8.2,
    capacity: '1.7kg',
    bestFor: {
      fr: 'Cuisson sans surveillance', en: 'Hands-free cooking', de: 'Freihändiges Kochen',
      es: 'Cocción sin vigilancia', it: 'Cottura senza sorveglianza', nl: 'Handsfree koken',
    },
    pros: {
      fr: ['Pale de brassage auto', '2 zones de cuisson', 'Recettes guidées'],
      en: ['Auto-stirring paddle', '2 cooking zones', 'Guided recipes'],
      de: ['Auto-Rührschaufel', '2 Garzonen', 'Geführte Rezepte'],
      es: ['Pala mezcladora auto', '2 zonas de cocción', 'Recetas guiadas'],
      it: ['Pala mescolatrice auto', '2 zone di cottura', 'Ricette guidate'],
      nl: ['Automatische roerspatel', '2 kookzones', 'Begeleide recepten'],
    },
    cons: {
      fr: ['Prix premium', 'Design daté'], en: ['Premium price', 'Dated design'],
      de: ['Premium-Preis', 'Veraltetes Design'], es: ['Precio premium', 'Diseño anticuado'],
      it: ['Prezzo premium', 'Design datato'], nl: ['Premiumprijs', 'Verouderd design'],
    },
  },
  {
    // 5. Xiaomi Smart Air Fryer Pro 4L
    asin: 'B0D8WHQMHT',
    title: {
      fr: 'Xiaomi Smart Air Fryer Pro 4L',
      de: 'Xiaomi Smart Air Fryer Pro 4L',
      en: 'Xiaomi Smart Air Fryer Pro 4L',
      es: 'Xiaomi Smart Air Fryer Pro 4L',
      it: 'Xiaomi Smart Air Fryer Pro 4L',
      nl: 'Xiaomi Smart Air Fryer Pro 4L',
    },
    price: {
      fr: '79,99€', de: '79,99€', en: '£69.99',
      es: '74,99€', it: '79,99€', nl: '74,99€',
    },
    priceNumeric: { fr: 79.99, de: 79.99, en: 69.99, es: 74.99, it: 79.99, nl: 74.99 },
    images: {
      fr: [img('21z46vwmm1L'), img('41LOazNzK8L'), img('21DcY1zeMKL'), img('21ytbWXBlQL'), img('21nhxb2WbBL'), img('21Ksv-j5OcL'), img('41NYR94DL8L'), img('51cfOKkOhlL')],
      de: [img('21z46vwmm1L'), img('21DcY1zeMKL'), img('21ytbWXBlQL'), img('21nhxb2WbBL'), img('21Ksv-j5OcL'), img('41LOazNzK8L'), img('41NYR94DL8L'), img('51cfOKkOhlL')],
      en: [img('21z46vwmm1L'), img('21DcY1zeMKL'), img('21ytbWXBlQL'), img('21nhxb2WbBL'), img('21Ksv-j5OcL'), img('41LOazNzK8L'), img('41NYR94DL8L'), img('51cfOKkOhlL')],
      es: [img('21z46vwmm1L'), img('21DcY1zeMKL'), img('21ytbWXBlQL'), img('21nhxb2WbBL'), img('21Ksv-j5OcL'), img('41LOazNzK8L'), img('41NYR94DL8L'), img('51cfOKkOhlL')],
      it: [img('21z46vwmm1L'), img('21DcY1zeMKL'), img('21ytbWXBlQL'), img('21nhxb2WbBL'), img('21Ksv-j5OcL'), img('41LOazNzK8L'), img('41NYR94DL8L'), img('51cfOKkOhlL')],
      nl: [img('21z46vwmm1L'), img('21DcY1zeMKL'), img('21ytbWXBlQL'), img('21nhxb2WbBL'), img('21Ksv-j5OcL'), img('41LOazNzK8L'), img('41NYR94DL8L'), img('51cfOKkOhlL')],
    },
    badge: {
      fr: 'Meilleur Prix', de: 'Bester Preis', en: 'Best Value',
      es: 'Mejor Precio', it: 'Miglior Prezzo', nl: 'Beste Prijs',
    },
    nuraScore: 8.0,
    capacity: '4L',
    bestFor: {
      fr: 'Petit budget', en: 'Budget pick', de: 'Budget-Tipp',
      es: 'Presupuesto ajustado', it: 'Budget', nl: 'Budget keuze',
    },
    pros: {
      fr: ['Prix imbattable', 'App Mi Home', 'Design compact'],
      en: ['Unbeatable price', 'Mi Home app', 'Compact design'],
      de: ['Unschlagbarer Preis', 'Mi Home App', 'Kompaktes Design'],
      es: ['Precio imbatible', 'App Mi Home', 'Diseño compacto'],
      it: ['Prezzo imbattibile', 'App Mi Home', 'Design compatto'],
      nl: ['Onverslaanbare prijs', 'Mi Home app', 'Compact design'],
    },
    cons: {
      fr: ['Capacité limitée 4L', 'Pas de double panier'],
      en: ['Limited 4L capacity', 'No dual basket'],
      de: ['Begrenzte 4L Kapazität', 'Kein Doppelkorb'],
      es: ['Capacidad limitada 4L', 'Sin doble cesta'],
      it: ['Capacità limitata 4L', 'Nessun doppio cestello'],
      nl: ['Beperkte 4L capaciteit', 'Geen dubbele mand'],
    },
  },
  {
    // 6. Ninja Foodi FlexDrawer 10.4L
    asin: 'B0CFL49C1J',
    title: {
      fr: 'Ninja Foodi FlexDrawer 10.4L Double Zone',
      de: 'Ninja Foodi FlexDrawer 10.4L Doppelzone',
      en: 'Ninja Foodi FlexDrawer 10.4L Dual Zone',
      es: 'Ninja Foodi FlexDrawer 10.4L Doble Zona',
      it: 'Ninja Foodi FlexDrawer 10.4L Doppia Zona',
      nl: 'Ninja Foodi FlexDrawer 10.4L Dubbele Zone',
    },
    price: {
      fr: '249,99€', de: '249,99€', en: '£219.99',
      es: '239,99€', it: '249,99€', nl: '239,99€',
    },
    priceNumeric: { fr: 249.99, de: 249.99, en: 219.99, es: 239.99, it: 249.99, nl: 239.99 },
    images: {
      fr: [img('31pr60oiZuL'), img('41Ivql+rlPL'), img('519odoJB9CL'), img('51rCYDpcl6L'), img('51QXMUDCEqL'), img('51x6nXJBrtL'), img('71T8jynPV3L')],
      de: [img('31pr60oiZuL'), img('414VFz8Jc4L'), img('51s+pAyeqdL'), img('51sF7ZrbJlL'), img('51xdWWG4skL'), img('5192N20Q2KL'), img('71T8jynPV3L')],
      en: [img('31pr60oiZuL'), img('41Ivql+rlPL'), img('519odoJB9CL'), img('51rCYDpcl6L'), img('51QXMUDCEqL'), img('51x6nXJBrtL'), img('51LJzCgN6TL'), img('71T8jynPV3L')],
      es: [img('31pr60oiZuL'), img('41UuCVjBXPL'), img('51wbDWNZX4L'), img('51dqj35iXjL'), img('51GsxiE6+rL'), img('41cq0G3zyDL'), img('51-9Oe7cyOL'), img('71T8jynPV3L')],
      it: [img('31pr60oiZuL'), img('4152ZqREpFL'), img('51U17kAoAsL'), img('51uQjNPam3L'), img('51PHRzNltxL'), img('41mIKYSFSpL'), img('71T8jynPV3L')],
      nl: [img('31pr60oiZuL'), img('414VFz8Jc4L'), img('51s+pAyeqdL'), img('51sF7ZrbJlL'), img('51xdWWG4skL'), img('5192N20Q2KL'), img('71T8jynPV3L')],
    },
    badge: {
      fr: 'Premium', de: 'Premium', en: 'Premium',
      es: 'Premium', it: 'Premium', nl: 'Premium',
    },
    nuraScore: 9.2,
    capacity: '10.4L',
    bestFor: {
      fr: 'Polyvalence maximale', en: 'Maximum versatility', de: 'Maximale Vielseitigkeit',
      es: 'Máxima versatilidad', it: 'Massima versatilità', nl: 'Maximale veelzijdigheid',
    },
    pros: {
      fr: ['Tiroir flexible 10.4L', 'Mode MegaZone', 'Double zone indépendante'],
      en: ['Flexible 10.4L drawer', 'MegaZone mode', 'Independent dual zone'],
      de: ['Flexible 10.4L Schublade', 'MegaZone Modus', 'Unabhängige Doppelzone'],
      es: ['Cajón flexible 10.4L', 'Modo MegaZone', 'Doble zona independiente'],
      it: ['Cassetto flessibile 10.4L', 'Modalità MegaZone', 'Doppia zona indipendente'],
      nl: ['Flexibele 10.4L lade', 'MegaZone modus', 'Onafhankelijke dubbele zone'],
    },
    cons: {
      fr: ['Prix premium', 'Très encombrant'], en: ['Premium price', 'Very bulky'],
      de: ['Premium-Preis', 'Sehr sperrig'], es: ['Precio premium', 'Muy voluminosa'],
      it: ['Prezzo premium', 'Molto ingombrante'], nl: ['Premiumprijs', 'Zeer omvangrijk'],
    },
  },
  {
    // 7. Philips Airfryer Combi XXL 8.3L
    asin: 'B0D67569TZ',
    title: {
      fr: 'Philips Airfryer Combi XXL Connecté - 8.3L',
      de: 'Philips Airfryer Combi XXL Connected - 8.3L',
      en: 'Philips Airfryer Combi XXL Connected - 8.3L',
      es: 'Philips Airfryer Combi XXL Conectada - 8.3L',
      it: 'Philips Airfryer Combi XXL Connessa - 8.3L',
      nl: 'Philips Airfryer Combi XXL Connected - 8.3L',
    },
    price: {
      fr: '349,99€', de: '349,99€', en: '£299.99',
      es: '329,99€', it: '349,99€', nl: '339,99€',
    },
    priceNumeric: { fr: 349.99, de: 349.99, en: 299.99, es: 329.99, it: 349.99, nl: 339.99 },
    images: {
      fr: [img('41sOxW9hrYL'), img('51TI6vVXnAL'), img('41mPH4oI62L'), img('41J+Ne+U65L'), img('41VoaarlecL'), img('51h8qJQcaPL'), img('41yUrDga5ML'), img('61gU3AHsFdL')],
      de: [img('41m8gEYJfCL'), img('51LUtueROvL'), img('51rNdtsnisL'), img('41ZEyDnW6RL'), img('51h73+ZN8ML'), img('51-YiO2wybL'), img('51s3ATFaiNL'), img('615x77sZFpL')],
      en: [img('31bSuWEvmHL'), img('41gdDY7NW-L'), img('31+1t1s4m3L'), img('5148QeBjTwL'), img('41L7rIeFHSL'), img('41UR97+ZI6L'), img('51fJ4U8kHjL')],
      es: [img('41sOxW9hrYL'), img('41wPKWvM7lL'), img('41J+Ne+U65L'), img('41j-fZLvZLL'), img('51vherEwTmL'), img('51q1LHMcImL'), img('61gU3AHsFdL')],
      it: [img('41m8gEYJfCL'), img('41zVxRY43RL'), img('41U9RZcb02L'), img('41drP4n9kpL'), img('51bO0-eOa0L'), img('51KN7EcfHRL'), img('51FW0-MYY5L'), img('615x77sZFpL')],
      nl: [img('41m8gEYJfCL'), img('41ENtdNZqQL'), img('41U9RZcb02L'), img('41j-wbYp+3L'), img('51HR4jdUeNL'), img('51eLodvh9aL'), img('615x77sZFpL')],
    },
    nuraScore: 9.0,
    capacity: '8.3L',
    bestFor: {
      fr: 'Haut de gamme connecté', en: 'Premium connected', de: 'Premium vernetzt',
      es: 'Gama alta conectada', it: 'Alta gamma connessa', nl: 'Premium connected',
    },
    pros: {
      fr: ['Fonction vapeur + air', 'Auto-nettoyage', 'App NutriU'],
      en: ['Steam + air function', 'Self-cleaning', 'NutriU app'],
      de: ['Dampf + Luft Funktion', 'Selbstreinigung', 'NutriU App'],
      es: ['Función vapor + aire', 'Autolimpieza', 'App NutriU'],
      it: ['Funzione vapore + aria', 'Autopulizia', 'App NutriU'],
      nl: ['Stoom + lucht functie', 'Zelfreinigend', 'NutriU app'],
    },
    cons: {
      fr: ['Prix très élevé', 'Lourd 8kg'], en: ['Very high price', 'Heavy 8kg'],
      de: ['Sehr hoher Preis', 'Schwer 8kg'], es: ['Precio muy alto', 'Pesada 8kg'],
      it: ['Prezzo molto alto', 'Pesante 8kg'], nl: ['Zeer hoge prijs', 'Zwaar 8kg'],
    },
  },
  {
    // 8. Cosori Lite 3.8L
    asin: 'B07N8N6C85',
    title: {
      fr: 'Cosori Lite 3.8L Air Fryer',
      de: 'Cosori Lite 3.8L Heißluftfritteuse',
      en: 'Cosori Lite 3.8L Air Fryer',
      es: 'Cosori Lite 3.8L Freidora de Aire',
      it: 'Cosori Lite 3.8L Friggitrice ad Aria',
      nl: 'Cosori Lite 3.8L Airfryer',
    },
    price: {
      fr: '69,99€', de: '69,99€', en: '£59.99',
      es: '64,99€', it: '69,99€', nl: '64,99€',
    },
    priceNumeric: { fr: 69.99, de: 69.99, en: 59.99, es: 64.99, it: 69.99, nl: 64.99 },
    images: {
      fr: [img('51asEHelgNL'), img('51lTfLNrybL'), img('61ioCA+eEkL'), img('5183QQlqfLL'), img('51ffH+cjCaL'), img('51hgRE0O34L'), img('51M5smIzJEL'), img('81xafenO7aL')],
      de: [img('41c8-2mR9oL'), img('51uRm9v7qHL'), img('51KXkmGhcSL'), img('51Qd6R6NOsL'), img('5128zA9msHL'), img('51U368xcc0L'), img('51t-mQix2EL'), img('81xtJuKPaKL')],
      en: [img('4108ujSWGrL'), img('51M82f8gN7L'), img('41Im5on3BrL'), img('51sjbRZKCpL'), img('41mPiMHl7QL'), img('41-NUkox8eL'), img('41asrD8LQCL'), img('51vliGEwoSL')],
      es: [img('51f110+wHwL'), img('51Hz0BEs8-L'), img('51sFygxvqDL'), img('51Dhq0837uL'), img('519eb9UfuxL'), img('514hF8Z02sL'), img('514MBurI7fL'), img('81HDt6NDs7L')],
      it: [img('51asEHelgNL'), img('51Iq5WITwDL'), img('51t2OGeTNVL'), img('5163wAxl2yL'), img('51jfO4piGTL'), img('51WD8PcyGvL'), img('51Rv4MjEilL'), img('81xafenO7aL')],
      nl: [img('41dgImAaFxL'), img('41hjvFtIDhL'), img('513vGJD8pCL'), img('514XcUy0bQL'), img('51kLrvVBWML'), img('51rYiJd-BLL'), img('61CfY9egMNL'), img('61ooux6h5iL')],
    },
    nuraScore: 7.8,
    capacity: '3.8L',
    bestFor: {
      fr: 'Couples & studios', en: 'Couples & studios', de: 'Paare & Studios',
      es: 'Parejas y estudios', it: 'Coppie & monolocali', nl: 'Stellen & studio\'s',
    },
    pros: {
      fr: ['Ultra-compact', 'Prix mini', 'Simple et efficace'],
      en: ['Ultra-compact', 'Mini price', 'Simple and effective'],
      de: ['Ultra-kompakt', 'Mini-Preis', 'Einfach und effektiv'],
      es: ['Ultra-compacta', 'Precio mini', 'Simple y eficaz'],
      it: ['Ultra-compatta', 'Prezzo mini', 'Semplice ed efficace'],
      nl: ['Ultra-compact', 'Miniprijs', 'Eenvoudig en effectief'],
    },
    cons: {
      fr: ['Petite capacité 3.8L', 'Basique'], en: ['Small 3.8L capacity', 'Basic'],
      de: ['Kleine 3.8L Kapazität', 'Basisch'], es: ['Capacidad pequeña 3.8L', 'Básica'],
      it: ['Capacità piccola 3.8L', 'Basica'], nl: ['Kleine 3.8L capaciteit', 'Basis'],
    },
  },
  {
    // 9. Moulinex Easy Fry Max 5L
    asin: 'B0CG6C26QW',
    title: {
      fr: 'Moulinex Easy Fry Max 5L',
      de: 'Moulinex Easy Fry Max 5L',
      en: 'Moulinex Easy Fry Max 5L',
      es: 'Moulinex Easy Fry Max 5L',
      it: 'Moulinex Easy Fry Max 5L',
      nl: 'Moulinex Easy Fry Max 5L',
    },
    price: {
      fr: '89,99€', de: '94,99€', en: '£79.99',
      es: '84,99€', it: '89,99€', nl: '84,99€',
    },
    priceNumeric: { fr: 89.99, de: 94.99, en: 79.99, es: 84.99, it: 89.99, nl: 84.99 },
    images: {
      fr: [img('31sYjIGedWL'), img('31yWW2d7Y0L'), img('418zRPkh+4L'), img('5153iWZKejL'), img('41KOqrNxjWL'), img('51pysa4flEL'), img('61Pq0r2hHsL'), img('51ATUoMSddL')],
      de: [img('41MfLEk4x1L'), img('418AwHIHMCL'), img('31yWW2d7Y0L'), img('51p7J2ejpUL'), img('514k1H7gIHL'), img('517yrZhLoZL'), img('411i-St1ZTL'), img('71odsj+-FCL')],
      en: [img('41MfLEk4x1L'), img('418AwHIHMCL'), img('31yWW2d7Y0L'), img('51p7J2ejpUL'), img('514k1H7gIHL'), img('517yrZhLoZL'), img('411i-St1ZTL'), img('71odsj+-FCL')],
      es: [img('315oOiq8UiL'), img('51mVy-GrU7L'), img('41CLVJ5xs7L'), img('51uoqBjGDWL'), img('41p+RVNs1LL'), img('512vJXroK3L'), img('315qjeFgloL'), img('516kJw1p0lL')],
      it: [img('31doBiaU5EL'), img('31DCkz+fUYL'), img('41QIoYhLIvL'), img('51VvXoieWOL'), img('51oDwINf-nL'), img('41g83WE8G5L'), img('41rqozVBvGL'), img('61hddsGcPOL')],
      nl: [img('41MfLEk4x1L'), img('418AwHIHMCL'), img('31yWW2d7Y0L'), img('51p7J2ejpUL'), img('514k1H7gIHL'), img('517yrZhLoZL'), img('411i-St1ZTL'), img('71odsj+-FCL')],
    },
    nuraScore: 8.3,
    capacity: '5L',
    bestFor: {
      fr: 'Familles (3-4 pers.)', en: 'Families (3-4 pers.)', de: 'Familien (3-4 Pers.)',
      es: 'Familias (3-4 pers.)', it: 'Famiglie (3-4 pers.)', nl: 'Gezinnen (3-4 pers.)',
    },
    pros: {
      fr: ['Excellent rapport qualité-prix', 'Marque française fiable', '10 programmes'],
      en: ['Excellent value', 'Reliable French brand', '10 programmes'],
      de: ['Ausgezeichnetes P/L', 'Zuverlässige französische Marke', '10 Programme'],
      es: ['Excelente relación calidad-precio', 'Marca francesa fiable', '10 programas'],
      it: ['Eccellente rapporto qualità-prezzo', 'Marca francese affidabile', '10 programmi'],
      nl: ['Uitstekende prijs-kwaliteit', 'Betrouwbaar Frans merk', '10 programma\'s'],
    },
    cons: {
      fr: ['Pas de double tiroir', 'Design classique'], en: ['No dual drawer', 'Classic design'],
      de: ['Kein Doppelkorb', 'Klassisches Design'], es: ['Sin doble cajón', 'Diseño clásico'],
      it: ['Nessun doppio cassetto', 'Design classico'], nl: ['Geen dubbele lade', 'Klassiek design'],
    },
  },
]

// Amazon CDN image IDs whose first character is 2, 3, or 4 are the clean
// "hero" product shots on a white background (the canonical product images
// the seller uploads). IDs starting with 5/6/7/8/9 are Amazon A+ / lifestyle
// content — they contain embedded marketing banners, people, promotional
// stickers ("DESIGN OPTIMISÉ", "1er Inventeur", etc.) which look terrible
// in our product cards. Filter them out so every product shows clean shots.
function isCleanProductShot(imgUrl: string): boolean {
  const match = imgUrl.match(/\/I\/([^.]+)\./)
  if (!match) return true
  const firstChar = match[1][0]
  return firstChar === '2' || firstChar === '3' || firstChar === '4'
}

function cleanImages(urls: string[]): string[] {
  const cleaned = urls.filter(isCleanProductShot)
  // Safety net: if filtering wipes everything out, fall back to the first
  // original URL so the card never ends up image-less.
  return cleaned.length > 0 ? cleaned : urls.slice(0, 1)
}

export function getStaticProducts(lang: string) {
  const tag = resolvePartnerTag(lang)
  const domain = domains[lang] || domains.fr

  return staticProducts.map((p) => {
    const langImages = cleanImages(p.images[lang] || p.images.fr)
    const mainImage = langImages[0].replace('SL1500', 'SL500')

    return {
      title: p.title[lang] || p.title.fr,
      price: p.price[lang] || p.price.fr,
      priceNumeric: p.priceNumeric[lang] || p.priceNumeric.fr,
      image: mainImage,
      images: langImages,
      asin: p.asin,
      url: `https://${domain}/dp/${p.asin}?tag=${tag}`,
      badge: p.badge ? (p.badge[lang] || p.badge.fr) : undefined,
      nuraScore: p.nuraScore,
      capacity: p.capacity,
      bestFor: p.bestFor[lang] || p.bestFor.fr,
      pros: p.pros[lang] || p.pros.fr,
      cons: p.cons[lang] || p.cons.fr,
    }
  })
}
