// Static product data with Amazon product images and affiliate links
// Images are sourced from Amazon CDN (per-country marketplace images)

// Canonical affiliate tags — single source of truth.
// Matches the partner tags in smart-kitchen-products.ts.
// env var overrides removed: stale AMAZON_TAG_FR / AMAZON_TAG_DE
// values on Vercel were silently routing commissions to the wrong
// affiliate account. Tags should only change via code + review.
const PARTNER_TAGS: Record<string, string> = {
  fr: 'homenuraen05-21',
  de: 'homenuraen00-21',
  en: 'homenuraen-21',
  es: 'homenuraen0a-21',
  it: 'homenuraen010-21',
  nl: 'homenuranl-21',
  // Belgium: amazon.be launched 2023 — separate affiliate tag needed.
  // Action required: create tag at https://partenaires.amazon.fr (choose amazon.be)
  // then replace 'homenuraen05-21' below with your actual .be tag.
  be: 'homenuraen05-21', // ← TODO: replace with real amazon.be tag
}

function resolvePartnerTag(lang: string): string {
  return PARTNER_TAGS[lang] || PARTNER_TAGS.fr
}

const domains: Record<string, string> = {
  fr: 'www.amazon.fr',
  de: 'www.amazon.de',
  en: 'www.amazon.co.uk',
  es: 'www.amazon.es',
  it: 'www.amazon.it',
  nl: 'www.amazon.nl',
  be: 'www.amazon.com.be', // amazon.be (launched 2023 for Belgian market)
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

  // -------------------------------------------------------------------
  // European differentiator fields — Phase Y scaffold.
  //
  // All optional. A product without any of these still renders
  // correctly on every page (the surfaces that display them degrade
  // gracefully). These get populated product-by-product as editorial
  // reviews land, not in one big migration.
  //
  // Why these eight specifically: together they're the "only on a
  // European smart-home site" moat. US-centric affiliate reviews
  // don't talk about annual energy cost in euros, DSGVO posture,
  // or whether the thing survives a cloud outage. We do. That's
  // the EEAT argument.
  // -------------------------------------------------------------------

  /** Estimated annual energy cost in euros, at typical household usage. */
  annualEnergyCostEur?: number
  /** Official EU energy label class, where one exists (A, B, C, D, E, F, G). */
  euEnergyLabel?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  /** GDPR posture score 0-10 (10 = no cloud dependency, no tracking, EU data residency). */
  gdprScore?: number
  /** Free-text GDPR notes per locale (e.g. "cloud obligatoire, données hors UE"). */
  gdprNotes?: Record<string, string>
  /** Does the core product work if internet / cloud goes down? */
  worksOffline?: boolean
  /** Ships with EU-compatible plug (type C/E/F) out of the box? */
  euPlugCompatible?: boolean
  /** Which Amazon marketplaces currently list this ASIN. Used to hide "buy" on unsupported locales. */
  availableMarketplaces?: readonly ('fr' | 'de' | 'en' | 'es' | 'it' | 'nl')[]
  /** Certified Matter / Thread compatible (for relevant smart-home categories). */
  matterCompatible?: boolean
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
      fr: ['Technologie RapidAir Plus', 'Fenêtre de cuisson', '16 modes de cuisson'],
      en: ['RapidAir Plus technology', 'Cooking window', '16 cooking methods'],
      de: ['RapidAir Plus Technologie', 'Sichtfenster', '16 Garmethoden'],
      es: ['Tecnología RapidAir Plus', 'Ventana de cocción', '16 modos de cocción'],
      it: ['Tecnologia RapidAir Plus', 'Finestra di cottura', '16 modalità di cottura'],
      nl: ['RapidAir Plus technologie', 'Kijkvenster', '16 bereidingswijzen'],
    },
    cons: {
      fr: ['Panier unique', 'Pas de Wi-Fi'], en: ['Single basket', 'No Wi-Fi'],
      de: ['Einzelner Korb', 'Kein WLAN'], es: ['Cesta única', 'Sin Wi-Fi'],
      it: ['Cestello singolo', 'Senza Wi-Fi'], nl: ['Enkele mand', 'Geen wifi'],
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
      en: [img('41u-Mzu4noL'), img('51eX4ilkMVL'), img('51rTkIGnYTL'), img('517Ul1Ym6KL'), img('51lUY-Q1b5L'), img('51GZcygvXfL')],
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
      fr: ['Double résistance haut/bas', 'App VeSync (Wi-Fi)', 'Pas besoin de secouer'],
      en: ['Dual top/bottom heating', 'VeSync app (Wi-Fi)', 'No shaking needed'],
      de: ['Doppelheizung oben/unten', 'VeSync-App (WLAN)', 'Kein Schütteln nötig'],
      es: ['Doble resistencia arriba/abajo', 'App VeSync (Wi-Fi)', 'Sin necesidad de agitar'],
      it: ['Doppia resistenza sopra/sotto', 'App VeSync (Wi-Fi)', 'Niente da scuotere'],
      nl: ['Dubbel boven/onder verwarming', 'VeSync-app (wifi)', 'Schudden niet nodig'],
    },
    cons: {
      fr: ['Un seul tiroir', 'Démarrage uniquement sur l\'appareil'], en: ['Single drawer', 'Cooking can only be started on the unit'],
      de: ['Einzelner Korb', 'Start nur am Gerät'], es: ['Un solo cajón', 'Inicio solo desde el aparato'],
      it: ['Singolo cassetto', 'Avvio solo dall\'apparecchio'], nl: ['Enkele lade', 'Starten alleen op het apparaat'],
    },
  },
  {
    // 4. Tefal ActiFry Genius XL 2in1 (YV970815 / YV9708)
    asin: 'B07W1JDFH3',
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
      fr: [img('41HEjimt4yL'), img('31nDquRFxFL'), img('41ObEYEeCQL'), img('41IPbNLRBqL'), img('41W2lEObUGL'), img('41pkoCuqzkL')],
      de: [img('41HEjimt4yL'), img('31nDquRFxFL'), img('41ObEYEeCQL'), img('41IPbNLRBqL'), img('41W2lEObUGL'), img('41pkoCuqzkL')],
      en: [img('41HEjimt4yL'), img('31nDquRFxFL'), img('41ObEYEeCQL'), img('41IPbNLRBqL'), img('41W2lEObUGL'), img('41pkoCuqzkL')],
      es: [img('41HEjimt4yL'), img('31nDquRFxFL'), img('41ObEYEeCQL'), img('41IPbNLRBqL'), img('41W2lEObUGL'), img('41pkoCuqzkL')],
      it: [img('41HEjimt4yL'), img('31nDquRFxFL'), img('41ObEYEeCQL'), img('41IPbNLRBqL'), img('41W2lEObUGL'), img('41pkoCuqzkL')],
      nl: [img('41HEjimt4yL'), img('31nDquRFxFL'), img('41ObEYEeCQL'), img('41IPbNLRBqL'), img('41W2lEObUGL'), img('41pkoCuqzkL')],
    },
    nuraScore: 8.2,
    capacity: '1.7kg',
    bestFor: {
      fr: 'Cuisson sans surveillance', en: 'Hands-free cooking', de: 'Freihändiges Kochen',
      es: 'Cocción sin vigilancia', it: 'Cottura senza sorveglianza', nl: 'Handsfree koken',
    },
    pros: {
      fr: ['Pale de brassage auto', '2 zones de cuisson', '9 programmes automatiques'],
      en: ['Auto-stirring paddle', '2 cooking zones', '9 automatic programmes'],
      de: ['Auto-Rührschaufel', '2 Garzonen', '9 Automatikprogramme'],
      es: ['Pala mezcladora auto', '2 zonas de cocción', '9 programas automáticos'],
      it: ['Pala mescolatrice auto', '2 zone di cottura', '9 programmi automatici'],
      nl: ['Automatische roerspatel', '2 kookzones', '9 automatische programma\'s'],
    },
    cons: {
      fr: ['Prix premium', 'Pas de Wi-Fi'], en: ['Premium price', 'No Wi-Fi'],
      de: ['Premium-Preis', 'Kein WLAN'], es: ['Precio premium', 'Sin Wi-Fi'],
      it: ['Prezzo premium', 'Senza Wi-Fi'], nl: ['Premiumprijs', 'Geen wifi'],
    },
  },
  {
    // 5. Xiaomi Smart Air Fryer Pro 4L (BHR6943EU)
    asin: 'B0BQNDGJRV',
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
      fr: [img('41qC1MwS1JL'), img('31AH1wnAFpL'), img('41KcK1L7FvL'), img('411w+EDCnTL'), img('41H91l7fkZL'), img('41abKNU8JFL'), img('311eo2Ue0vL')],
      de: [img('41qC1MwS1JL'), img('31AH1wnAFpL'), img('41KcK1L7FvL'), img('411w+EDCnTL'), img('41H91l7fkZL'), img('41abKNU8JFL'), img('311eo2Ue0vL')],
      en: [img('41qC1MwS1JL'), img('31AH1wnAFpL'), img('41KcK1L7FvL'), img('411w+EDCnTL'), img('41H91l7fkZL'), img('41abKNU8JFL'), img('311eo2Ue0vL')],
      es: [img('41qC1MwS1JL'), img('31AH1wnAFpL'), img('41KcK1L7FvL'), img('411w+EDCnTL'), img('41H91l7fkZL'), img('41abKNU8JFL'), img('311eo2Ue0vL')],
      it: [img('41qC1MwS1JL'), img('31AH1wnAFpL'), img('41KcK1L7FvL'), img('411w+EDCnTL'), img('41H91l7fkZL'), img('41abKNU8JFL'), img('311eo2Ue0vL')],
      nl: [img('41qC1MwS1JL'), img('31AH1wnAFpL'), img('41KcK1L7FvL'), img('411w+EDCnTL'), img('41H91l7fkZL'), img('41abKNU8JFL'), img('311eo2Ue0vL')],
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
      fr: ['Fenêtre de cuisson', 'App Xiaomi Home (Wi-Fi)', 'Design compact'],
      en: ['Cooking window', 'Xiaomi Home app (Wi-Fi)', 'Compact design'],
      de: ['Sichtfenster', 'Xiaomi Home App (WLAN)', 'Kompaktes Design'],
      es: ['Ventana de cocción', 'App Xiaomi Home (Wi-Fi)', 'Diseño compacto'],
      it: ['Finestra di cottura', 'App Xiaomi Home (Wi-Fi)', 'Design compatto'],
      nl: ['Kijkvenster', 'Xiaomi Home app (wifi)', 'Compact design'],
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
    // 7. Philips Airfryer Combi 7000 XXL Connected 8.3L (HD9876/90)
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
      fr: ['Technologie Rapid CombiAir', 'Sonde de cuisson incluse', 'App HomeID (Wi-Fi)'],
      en: ['Rapid CombiAir technology', 'Food probe included', 'HomeID app (Wi-Fi)'],
      de: ['Rapid CombiAir Technologie', 'Garthermometer inklusive', 'HomeID App (WLAN)'],
      es: ['Tecnología Rapid CombiAir', 'Sonda de cocción incluida', 'App HomeID (Wi-Fi)'],
      it: ['Tecnologia Rapid CombiAir', 'Sonda di cottura inclusa', 'App HomeID (Wi-Fi)'],
      nl: ['Rapid CombiAir technologie', 'Kerntemperatuurmeter inbegrepen', 'HomeID app (wifi)'],
    },
    cons: {
      fr: ['Prix très élevé', 'Lourd (9,4 kg)'], en: ['Very high price', 'Heavy (9.4 kg)'],
      de: ['Sehr hoher Preis', 'Schwer (9,4 kg)'], es: ['Precio muy alto', 'Pesada (9,4 kg)'],
      it: ['Prezzo molto alto', 'Pesante (9,4 kg)'], nl: ['Zeer hoge prijs', 'Zwaar (9,4 kg)'],
    },
  },
  {
    // 8. Cosori CP158-AF 5.5L — Lite 3.8L (CAF-LI401S) not listed on amazon.fr/.de/.it; title change proposed
    asin: 'B07N8N6C85',
    title: {
      fr: 'Cosori CP158-AF 5.5L Air Fryer',
      de: 'Cosori CP158-AF 5.5L Heißluftfritteuse',
      en: 'Cosori CP158-AF 5.5L Air Fryer',
      es: 'Cosori CP158-AF 5.5L Freidora de Aire',
      it: 'Cosori CP158-AF 5.5L Friggitrice ad Aria',
      nl: 'Cosori CP158-AF 5.5L Airfryer',
    },
    price: {
      fr: '69,99€', de: '69,99€', en: '£59.99',
      es: '64,99€', it: '69,99€', nl: '64,99€',
    },
    priceNumeric: { fr: 69.99, de: 69.99, en: 59.99, es: 64.99, it: 69.99, nl: 64.99 },
    images: {
      fr: [img('51asEHelgNL'), img('51lTfLNrybL'), img('61ioCA+eEkL'), img('5183QQlqfLL'), img('51ffH+cjCaL'), img('51hgRE0O34L'), img('51M5smIzJEL'), img('81xafenO7aL')],
      de: [img('41c8-2mR9oL'), img('51uRm9v7qHL'), img('51KXkmGhcSL'), img('51Qd6R6NOsL'), img('5128zA9msHL'), img('51U368xcc0L'), img('51t-mQix2EL'), img('81xtJuKPaKL')],
      en: [img('41sPTxzNigL'), img('61ioCA+eEkL'), img('51LCgTqJN2L'), img('51ffH+cjCaL'), img('51hgRE0O34L'), img('51lTfLNrybL'), img('51M5smIzJEL'), img('517RMBVPXYL')],
      es: [img('51f110+wHwL'), img('51Hz0BEs8-L'), img('51sFygxvqDL'), img('51Dhq0837uL'), img('519eb9UfuxL'), img('514hF8Z02sL'), img('514MBurI7fL'), img('81HDt6NDs7L')],
      it: [img('51asEHelgNL'), img('51Iq5WITwDL'), img('51t2OGeTNVL'), img('5163wAxl2yL'), img('51jfO4piGTL'), img('51WD8PcyGvL'), img('51Rv4MjEilL'), img('81xafenO7aL')],
      nl: [img('41sPTxzNigL'), img('61ioCA+eEkL'), img('51LCgTqJN2L'), img('51ffH+cjCaL'), img('51hgRE0O34L'), img('51lTfLNrybL'), img('51M5smIzJEL'), img('517RMBVPXYL')],
    },
    nuraScore: 7.8,
    capacity: '5.5L',
    bestFor: {
      fr: 'Familles (3-5 pers.)', en: 'Families (3-5 pers.)', de: 'Familien (3-5 Pers.)',
      es: 'Familias (3-5 pers.)', it: 'Famiglie (3-5 pers.)', nl: 'Gezinnen (3-5 pers.)',
    },
    pros: {
      fr: ['11 programmes préréglés', 'Écran tactile', 'Panier compatible lave-vaisselle'],
      en: ['11 preset programmes', 'Touch display', 'Dishwasher-safe basket'],
      de: ['11 voreingestellte Programme', 'Touch-Display', 'Spülmaschinenfester Korb'],
      es: ['11 programas preestablecidos', 'Pantalla táctil', 'Cesta apta para lavavajillas'],
      it: ['11 programmi preimpostati', 'Display touch', 'Cestello lavabile in lavastoviglie'],
      nl: ['11 voorgeprogrammeerde standen', 'Aanraakscherm', 'Vaatwasserbestendige mand'],
    },
    cons: {
      fr: ['Pas de Wi-Fi ni d\'app', 'Un seul panier'], en: ['No Wi-Fi or app', 'Single basket'],
      de: ['Kein WLAN, keine App', 'Nur ein Korb'], es: ['Sin Wi-Fi ni app', 'Una sola cesta'],
      it: ['Niente Wi-Fi né app', 'Un solo cestello'], nl: ['Geen wifi of app', 'Eén mand'],
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

/**
 * Amazon search-results link on the reader's store, carrying that store's
 * partner tag. Used for models cited in articles that have no catalog
 * entry (no ASIN/images to maintain; Amazon credits purchases from search).
 */
export function amazonSearchUrl(query: string, lang: string): string {
  const domain = domains[lang] || domains.fr
  const tag = resolvePartnerTag(lang)
  const params = new URLSearchParams({ k: query, tag })
  return `https://${domain}/s?${params.toString()}`
}
