// Static air fryer catalog with Amazon affiliate links.
//
// No Amazon product images and no displayed prices: the Amazon Associates
// Operating Agreement only allows them through Amazon's product API, which
// the account cannot use yet. Cards show the manufacturer's official photo
// (data/product-images.json) or a neutral visual (category icon, brand,
// model): see lib/product-visual.ts.

import { amazonProductUrl } from '@/lib/amazon'
import { resolveLang } from '@/lib/i18n'
import { productPhoto } from '@/lib/product-images'
import { productVisual } from '@/lib/product-visual'

export interface StaticProduct {
  title: Record<string, string>
  /**
   * Reference price per locale, used only to sort products into budget
   * tiers (quiz, article fill-ins) and as the click analytics value.
   * Never rendered.
   */
  priceNumeric: Record<string, number>
  asin: string
  /** Brand as printed on the product visual (the title starts with it). */
  brand: string
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
    brand: 'Ninja',
    title: {
      fr: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      de: 'Ninja Foodi MAX Double Stack XL Heißluftfritteuse - 9.5L',
      en: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      es: 'Ninja Foodi MAX Double Stack XL Freidora de Aire - 9.5L',
      it: 'Ninja Foodi MAX Double Stack XL Friggitrice ad Aria - 9.5L',
      nl: 'Ninja Foodi MAX Double Stack XL Airfryer - 9.5L',
      pl: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      sv: 'Ninja Foodi MAX Double Stack XL airfryer - 9.5L',
      us: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
      ca: 'Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L',
    },
    priceNumeric: { fr: 229.99, de: 229.99, en: 229.99, es: 229.99, it: 229.99, nl: 229.99, pl: 229.99, sv: 229.99, us: 229.99, ca: 229.99 },
    badge: {
      fr: 'Choix N°1', de: 'Beste Wahl', en: 'Top Pick',
      es: 'Mejor Elección', it: 'Scelta Top', nl: 'Beste Keuze', pl: 'Wybór nr 1', sv: 'Toppval', us: 'Best overall', ca: 'Top Pick',
    },
    nuraScore: 9.4,
    capacity: '9.5L',
    bestFor: {
      fr: 'Familles nombreuses', en: 'Large families', de: 'Große Familien',
      es: 'Familias numerosas', it: 'Famiglie numerose', nl: 'Grote gezinnen', pl: 'Duże rodziny', sv: 'Storfamiljer', us: 'Large families', ca: 'Large families',
    },
    pros: {
      fr: ['Double tiroir empilable 9.5L', 'Cuisson ultra-homogène', '6 modes de cuisson'],
      en: ['Dual stackable drawer 9.5L', 'Ultra-even cooking', '6 cooking modes'],
      de: ['Doppelter stapelbarer Korb 9.5L', 'Ultra-gleichmäßiges Garen', '6 Garmodi'],
      es: ['Doble cajón apilable 9.5L', 'Cocción ultra-homogénea', '6 modos de cocción'],
      it: ['Doppio cestello impilabile 9.5L', 'Cottura ultra-uniforme', '6 modalità di cottura'],
      nl: ['Dubbele stapelbare lade 9.5L', 'Ultra-gelijkmatig bakken', '6 kookmodi'],
      pl: ['Dwie piętrowe szuflady, łącznie 9,5 l', 'Równomierne smażenie i pieczenie', '6 trybów pracy'],
      sv: ['Två staplade lådor, 9,5 liter', 'Mycket jämn tillagning', '6 tillagningslägen'],
      us: ['Two stacked drawers, 10 qt (9.5 L)', 'Ultra-even cooking', '6 cooking modes'],
      ca: ['Dual stackable drawers (9.5 L)', 'Ultra-even cooking', '6 cooking modes'],
    },
    cons: {
      fr: ['Prix élevé', 'Encombrant'], en: ['High price', 'Bulky'],
      de: ['Hoher Preis', 'Sperrig'], es: ['Precio alto', 'Voluminosa'],
      it: ['Prezzo alto', 'Ingombrante'], nl: ['Hoge prijs', 'Omvangrijk'], pl: ['Wysoka cena', 'Duże gabaryty'], sv: ['Högt pris', 'Skrymmande'], us: ['Pricey', 'Bulky'], ca: ['High price', 'Bulky'],
    },
  },
  {
    // 2. Philips Airfryer 3000 Series XL 6.2L
    asin: 'B0D9S9Y16Y',
    brand: 'Philips',
    title: {
      fr: 'Philips Airfryer Série 3000 XL - 6.2L',
      de: 'Philips Airfryer Serie 3000 XL - 6.2L',
      en: 'Philips Airfryer 3000 Series XL - 6.2L',
      es: 'Philips Airfryer Serie 3000 XL - 6.2L',
      it: 'Philips Airfryer Serie 3000 XL - 6.2L',
      nl: 'Philips Airfryer 3000 Serie XL - 6.2L',
      pl: 'Philips Airfryer 3000 Series XL - 6.2L',
      sv: 'Philips Airfryer 3000 Series XL - 6.2L',
      us: 'Philips Airfryer 3000 Series XL - 6.2L',
      ca: 'Philips Airfryer 3000 Series XL - 6.2L',
    },
    priceNumeric: { fr: 119.99, de: 119.99, en: 99.99, es: 109.99, it: 119.99, nl: 109.99, pl: 119.99, sv: 119.99, us: 99.99, ca: 99.99 },
    nuraScore: 8.7,
    capacity: '6.2L',
    bestFor: {
      fr: 'Rapport qualité-prix', en: 'Value for money', de: 'Preis-Leistung',
      es: 'Relación calidad-precio', it: 'Rapporto qualità-prezzo', nl: 'Prijs-kwaliteit', pl: 'Dobry stosunek jakości do ceny', sv: 'Prisvärdhet', us: 'Value for the money', ca: 'Value for money',
    },
    pros: {
      fr: ['Technologie RapidAir Plus', 'Fenêtre de cuisson', '16 modes de cuisson'],
      en: ['RapidAir Plus technology', 'Cooking window', '16 cooking methods'],
      de: ['RapidAir Plus Technologie', 'Sichtfenster', '16 Garmethoden'],
      es: ['Tecnología RapidAir Plus', 'Ventana de cocción', '16 modos de cocción'],
      it: ['Tecnologia RapidAir Plus', 'Finestra di cottura', '16 modalità di cottura'],
      nl: ['RapidAir Plus technologie', 'Kijkvenster', '16 bereidingswijzen'],
      pl: ['Technologia RapidAir Plus', 'Okienko podglądu', '16 trybów pracy'],
      sv: ['RapidAir Plus-teknik', 'Tittfönster', '16 tillagningssätt'],
      us: ['RapidAir Plus technology', 'Viewing window', '16 cooking methods'],
      ca: ['RapidAir Plus technology', 'Cooking window', '16 cooking methods'],
    },
    cons: {
      fr: ['Panier unique', 'Pas de Wi-Fi'], en: ['Single basket', 'No Wi-Fi'],
      de: ['Einzelner Korb', 'Kein WLAN'], es: ['Cesta única', 'Sin Wi-Fi'],
      it: ['Cestello singolo', 'Senza Wi-Fi'], nl: ['Enkele mand', 'Geen wifi'], pl: ['Jeden kosz', 'Brak Wi-Fi'], sv: ['Bara en korg', 'Inget wifi'], us: ['Single basket', 'No Wi-Fi'], ca: ['Single basket', 'No Wi-Fi'],
    },
  },
  {
    // 3. Cosori Dual Blaze Smart 6.4L
    asin: 'B0FPWSDF86',
    brand: 'Cosori',
    title: {
      fr: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      de: 'Cosori Dual Blaze Smart Heißluftfritteuse - 6.4L',
      en: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      es: 'Cosori Dual Blaze Smart Freidora de Aire - 6.4L',
      it: 'Cosori Dual Blaze Smart Friggitrice ad Aria - 6.4L',
      nl: 'Cosori Dual Blaze Smart Airfryer - 6.4L',
      pl: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      sv: 'Cosori Dual Blaze smart airfryer - 6.4L',
      us: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
      ca: 'Cosori Dual Blaze Smart Air Fryer - 6.4L',
    },
    priceNumeric: { fr: 139.99, de: 139.99, en: 119.99, es: 129.99, it: 139.99, nl: 129.99, pl: 139.99, sv: 139.99, us: 119.99, ca: 119.99 },
    nuraScore: 8.9,
    capacity: '6.4L',
    bestFor: {
      fr: 'Cuisson intelligente', en: 'Smart cooking', de: 'Intelligentes Kochen',
      es: 'Cocción inteligente', it: 'Cottura intelligente', nl: 'Slim koken', pl: 'Smażenie sterowane z aplikacji', sv: 'Smart matlagning', us: 'Smart cooking', ca: 'Smart cooking',
    },
    pros: {
      fr: ['Double résistance haut/bas', 'App VeSync (Wi-Fi)', 'Pas besoin de secouer'],
      en: ['Dual top/bottom heating', 'VeSync app (Wi-Fi)', 'No shaking needed'],
      de: ['Doppelheizung oben/unten', 'VeSync-App (WLAN)', 'Kein Schütteln nötig'],
      es: ['Doble resistencia arriba/abajo', 'App VeSync (Wi-Fi)', 'Sin necesidad de agitar'],
      it: ['Doppia resistenza sopra/sotto', 'App VeSync (Wi-Fi)', 'Niente da scuotere'],
      nl: ['Dubbel boven/onder verwarming', 'VeSync-app (wifi)', 'Schudden niet nodig'],
      pl: ['Podwójna grzałka (góra i dół)', 'Aplikacja VeSync (Wi-Fi)', 'Nie trzeba potrząsać koszem'],
      sv: ['Värmeelement upptill och nedtill', 'Appen VeSync (wifi)', 'Maten behöver inte skakas'],
      us: ['Dual top/bottom heating', 'VeSync app (Wi-Fi)', 'No shaking needed'],
      ca: ['Dual top/bottom heating', 'VeSync app (Wi-Fi)', 'No shaking needed'],
    },
    cons: {
      fr: ['Un seul tiroir', 'Démarrage uniquement sur l\'appareil'], en: ['Single drawer', 'Cooking can only be started on the unit'],
      de: ['Einzelner Korb', 'Start nur am Gerät'], es: ['Un solo cajón', 'Inicio solo desde el aparato'],
      it: ['Singolo cassetto', 'Avvio solo dall\'apparecchio'], nl: ['Enkele lade', 'Starten alleen op het apparaat'], pl: ['Tylko jedna szuflada', 'Uruchamianie tylko z panelu urządzenia'], sv: ['Bara en låda', 'Kan bara startas på apparaten'], us: ['Single drawer', 'Cooking can only be started on the unit'], ca: ['Single drawer', 'Cooking can only be started on the unit'],
    },
  },
  {
    // 4. Tefal ActiFry Genius XL 2in1 (YV970815 / YV9708)
    asin: 'B07W1JDFH3',
    brand: 'Tefal',
    title: {
      fr: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      de: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      en: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      es: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      it: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      nl: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      pl: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      sv: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      us: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
      ca: 'Tefal ActiFry Genius XL 2in1 - 1.7kg',
    },
    priceNumeric: { fr: 199.99, de: 209.99, en: 179.99, es: 189.99, it: 199.99, nl: 199.99, pl: 199.99, sv: 199.99, us: 179.99, ca: 179.99 },
    nuraScore: 8.2,
    capacity: '1.7kg',
    bestFor: {
      fr: 'Cuisson sans surveillance', en: 'Hands-free cooking', de: 'Freihändiges Kochen',
      es: 'Cocción sin vigilancia', it: 'Cottura senza sorveglianza', nl: 'Handsfree koken', pl: 'Smażenie bez pilnowania', sv: 'Matlagning utan tillsyn', us: 'Hands-free cooking', ca: 'Hands-free cooking',
    },
    pros: {
      fr: ['Pale de brassage auto', '2 zones de cuisson', '9 programmes automatiques'],
      en: ['Auto-stirring paddle', '2 cooking zones', '9 automatic programmes'],
      de: ['Auto-Rührschaufel', '2 Garzonen', '9 Automatikprogramme'],
      es: ['Pala mezcladora auto', '2 zonas de cocción', '9 programas automáticos'],
      it: ['Pala mescolatrice auto', '2 zone di cottura', '9 programmi automatici'],
      nl: ['Automatische roerspatel', '2 kookzones', '9 automatische programma\'s'],
      pl: ['Automatyczna łopatka mieszająca', '2 strefy pieczenia', '9 programów automatycznych'],
      sv: ['Automatisk omrörningsarm', '2 tillagningszoner', '9 automatprogram'],
      us: ['Auto-stirring paddle', '2 cooking zones', '9 automatic programs'],
      ca: ['Auto-stirring paddle', '2 cooking zones', '9 automatic programs'],
    },
    cons: {
      fr: ['Prix premium', 'Pas de Wi-Fi'], en: ['Premium price', 'No Wi-Fi'],
      de: ['Premium-Preis', 'Kein WLAN'], es: ['Precio premium', 'Sin Wi-Fi'],
      it: ['Prezzo premium', 'Senza Wi-Fi'], nl: ['Premiumprijs', 'Geen wifi'], pl: ['Cena premium', 'Brak Wi-Fi'], sv: ['Högt pris', 'Inget wifi'], us: ['Premium price', 'No Wi-Fi'], ca: ['Premium price', 'No Wi-Fi'],
    },
  },
  {
    // 5. Xiaomi Smart Air Fryer Pro 4L (BHR6943EU)
    asin: 'B0BQNDGJRV',
    brand: 'Xiaomi',
    title: {
      fr: 'Xiaomi Smart Air Fryer Pro 4L',
      de: 'Xiaomi Smart Air Fryer Pro 4L',
      en: 'Xiaomi Smart Air Fryer Pro 4L',
      es: 'Xiaomi Smart Air Fryer Pro 4L',
      it: 'Xiaomi Smart Air Fryer Pro 4L',
      nl: 'Xiaomi Smart Air Fryer Pro 4L',
      pl: 'Xiaomi Smart Air Fryer Pro 4L',
      sv: 'Xiaomi Smart Air Fryer Pro 4L',
      us: 'Xiaomi Smart Air Fryer Pro 4L',
      ca: 'Xiaomi Smart Air Fryer Pro 4L',
    },
    priceNumeric: { fr: 79.99, de: 79.99, en: 69.99, es: 74.99, it: 79.99, nl: 74.99, pl: 79.99, sv: 79.99, us: 69.99, ca: 69.99 },
    badge: {
      fr: 'Meilleur Prix', de: 'Bester Preis', en: 'Best Value',
      es: 'Mejor Precio', it: 'Miglior Prezzo', nl: 'Beste Prijs', pl: 'Najlepsza cena', sv: 'Mest prisvärd', us: 'Best value', ca: 'Best Value',
    },
    nuraScore: 8.0,
    capacity: '4L',
    bestFor: {
      fr: 'Petit budget', en: 'Budget pick', de: 'Budget-Tipp',
      es: 'Presupuesto ajustado', it: 'Budget', nl: 'Budget keuze', pl: 'Mały budżet', sv: 'Liten budget', us: 'Small budgets', ca: 'Budget pick',
    },
    pros: {
      fr: ['Fenêtre de cuisson', 'App Xiaomi Home (Wi-Fi)', 'Design compact'],
      en: ['Cooking window', 'Xiaomi Home app (Wi-Fi)', 'Compact design'],
      de: ['Sichtfenster', 'Xiaomi Home App (WLAN)', 'Kompaktes Design'],
      es: ['Ventana de cocción', 'App Xiaomi Home (Wi-Fi)', 'Diseño compacto'],
      it: ['Finestra di cottura', 'App Xiaomi Home (Wi-Fi)', 'Design compatto'],
      nl: ['Kijkvenster', 'Xiaomi Home app (wifi)', 'Compact design'],
      pl: ['Okienko podglądu', 'Aplikacja Xiaomi Home (Wi-Fi)', 'Kompaktowe wymiary'],
      sv: ['Tittfönster', 'Appen Xiaomi Home (wifi)', 'Kompakt design'],
      us: ['Viewing window', 'Xiaomi Home app (Wi-Fi)', 'Compact design'],
      ca: ['Cooking window', 'Xiaomi Home app (Wi-Fi)', 'Compact design'],
    },
    cons: {
      fr: ['Capacité limitée 4L', 'Pas de double panier'],
      en: ['Limited 4L capacity', 'No dual basket'],
      de: ['Begrenzte 4L Kapazität', 'Kein Doppelkorb'],
      es: ['Capacidad limitada 4L', 'Sin doble cesta'],
      it: ['Capacità limitata 4L', 'Nessun doppio cestello'],
      nl: ['Beperkte 4L capaciteit', 'Geen dubbele mand'],
      pl: ['Pojemność tylko 4 l', 'Brak drugiego kosza'],
      sv: ['Begränsad volym, 4 liter', 'Ingen dubbelkorg'],
      us: ['Small 4.2 qt (4 L) capacity', 'No dual basket'],
      ca: ['Limited 4L capacity', 'No dual basket'],
    },
  },
  {
    // 6. Ninja Foodi FlexDrawer 10.4L
    asin: 'B0CFL49C1J',
    brand: 'Ninja',
    title: {
      fr: 'Ninja Foodi FlexDrawer 10.4L Double Zone',
      de: 'Ninja Foodi FlexDrawer 10.4L Doppelzone',
      en: 'Ninja Foodi FlexDrawer 10.4L Dual Zone',
      es: 'Ninja Foodi FlexDrawer 10.4L Doble Zona',
      it: 'Ninja Foodi FlexDrawer 10.4L Doppia Zona',
      nl: 'Ninja Foodi FlexDrawer 10.4L Dubbele Zone',
      pl: 'Ninja Foodi FlexDrawer 10.4L Dual Zone',
      sv: 'Ninja Foodi FlexDrawer 10.4L Dual Zone',
      us: 'Ninja Foodi FlexDrawer 10.4L Dual Zone',
      ca: 'Ninja Foodi FlexDrawer 10.4L Dual Zone',
    },
    priceNumeric: { fr: 249.99, de: 249.99, en: 219.99, es: 239.99, it: 249.99, nl: 239.99, pl: 249.99, sv: 249.99, us: 219.99, ca: 219.99 },
    badge: {
      fr: 'Premium', de: 'Premium', en: 'Premium',
      es: 'Premium', it: 'Premium', nl: 'Premium', pl: 'Premium', sv: 'Premium', us: 'Upgrade pick', ca: 'Premium',
    },
    nuraScore: 9.2,
    capacity: '10.4L',
    bestFor: {
      fr: 'Polyvalence maximale', en: 'Maximum versatility', de: 'Maximale Vielseitigkeit',
      es: 'Máxima versatilidad', it: 'Massima versatilità', nl: 'Maximale veelzijdigheid', pl: 'Maksymalna wszechstronność', sv: 'Maximal mångsidighet', us: 'Maximum versatility', ca: 'Maximum versatility',
    },
    pros: {
      fr: ['Tiroir flexible 10.4L', 'Mode MegaZone', 'Double zone indépendante'],
      en: ['Flexible 10.4L drawer', 'MegaZone mode', 'Independent dual zone'],
      de: ['Flexible 10.4L Schublade', 'MegaZone Modus', 'Unabhängige Doppelzone'],
      es: ['Cajón flexible 10.4L', 'Modo MegaZone', 'Doble zona independiente'],
      it: ['Cassetto flessibile 10.4L', 'Modalità MegaZone', 'Doppia zona indipendente'],
      nl: ['Flexibele 10.4L lade', 'MegaZone modus', 'Onafhankelijke dubbele zone'],
      pl: ['Dzielona szuflada 10,4 l', 'Tryb MegaZone', 'Dwie niezależne strefy'],
      sv: ['Flexibel låda på 10,4 liter', 'MegaZone-läge', 'Två oberoende zoner'],
      us: ['Flexible 11 qt (10.4 L) drawer', 'MegaZone mode', 'Two independent zones'],
      ca: ['Flexible 10.4L drawer', 'MegaZone mode', 'Independent dual zone'],
    },
    cons: {
      fr: ['Prix premium', 'Très encombrant'], en: ['Premium price', 'Very bulky'],
      de: ['Premium-Preis', 'Sehr sperrig'], es: ['Precio premium', 'Muy voluminosa'],
      it: ['Prezzo premium', 'Molto ingombrante'], nl: ['Premiumprijs', 'Zeer omvangrijk'], pl: ['Cena premium', 'Bardzo duże gabaryty'], sv: ['Högt pris', 'Mycket skrymmande'], us: ['Premium price', 'Very bulky'], ca: ['Premium price', 'Very bulky'],
    },
  },
  {
    // 7. Philips Airfryer Combi 7000 XXL Connected 8.3L (HD9876/90)
    asin: 'B0D67569TZ',
    brand: 'Philips',
    title: {
      fr: 'Philips Airfryer Combi XXL Connecté - 8.3L',
      de: 'Philips Airfryer Combi XXL Connected - 8.3L',
      en: 'Philips Airfryer Combi XXL Connected - 8.3L',
      es: 'Philips Airfryer Combi XXL Conectada - 8.3L',
      it: 'Philips Airfryer Combi XXL Connessa - 8.3L',
      nl: 'Philips Airfryer Combi XXL Connected - 8.3L',
      pl: 'Philips Airfryer Combi XXL Connected - 8.3L',
      sv: 'Philips Airfryer Combi XXL Connected - 8.3L',
      us: 'Philips Airfryer Combi XXL Connected - 8.3L',
      ca: 'Philips Airfryer Combi XXL Connected - 8.3L',
    },
    priceNumeric: { fr: 349.99, de: 349.99, en: 299.99, es: 329.99, it: 349.99, nl: 339.99, pl: 349.99, sv: 349.99, us: 299.99, ca: 299.99 },
    nuraScore: 9.0,
    capacity: '8.3L',
    bestFor: {
      fr: 'Haut de gamme connecté', en: 'Premium connected', de: 'Premium vernetzt',
      es: 'Gama alta conectada', it: 'Alta gamma connessa', nl: 'Premium connected', pl: 'Model z wyższej półki z Wi-Fi', sv: 'Uppkopplad premiummodell', us: 'High-end smart cooking', ca: 'Premium smart cooking',
    },
    pros: {
      fr: ['Technologie Rapid CombiAir', 'Sonde de cuisson incluse', 'App HomeID (Wi-Fi)'],
      en: ['Rapid CombiAir technology', 'Food probe included', 'HomeID app (Wi-Fi)'],
      de: ['Rapid CombiAir Technologie', 'Garthermometer inklusive', 'HomeID App (WLAN)'],
      es: ['Tecnología Rapid CombiAir', 'Sonda de cocción incluida', 'App HomeID (Wi-Fi)'],
      it: ['Tecnologia Rapid CombiAir', 'Sonda di cottura inclusa', 'App HomeID (Wi-Fi)'],
      nl: ['Rapid CombiAir technologie', 'Kerntemperatuurmeter inbegrepen', 'HomeID app (wifi)'],
      pl: ['Technologia Rapid CombiAir', 'Sonda temperatury w zestawie', 'Aplikacja HomeID (Wi-Fi)'],
      sv: ['Rapid CombiAir-teknik', 'Temperaturgivare ingår', 'Appen HomeID (wifi)'],
      us: ['Rapid CombiAir technology', 'Food probe included', 'HomeID app (Wi-Fi)'],
      ca: ['Rapid CombiAir technology', 'Food probe included', 'HomeID app (Wi-Fi)'],
    },
    cons: {
      fr: ['Prix très élevé', 'Lourd (9,4 kg)'], en: ['Very high price', 'Heavy (9.4 kg)'],
      de: ['Sehr hoher Preis', 'Schwer (9,4 kg)'], es: ['Precio muy alto', 'Pesada (9,4 kg)'],
      it: ['Prezzo molto alto', 'Pesante (9,4 kg)'], nl: ['Zeer hoge prijs', 'Zwaar (9,4 kg)'], pl: ['Bardzo wysoka cena', 'Ciężka (9,4 kg)'], sv: ['Mycket högt pris', 'Tung (9,4 kg)'], us: ['Very pricey', 'Heavy: 20.7 lb (9.4 kg)'], ca: ['Very high price', 'Heavy (9.4 kg)'],
    },
  },
  {
    // 8. Cosori CP158-AF 5.5L — Lite 3.8L (CAF-LI401S) not listed on amazon.fr/.de/.it; title change proposed
    asin: 'B07N8N6C85',
    brand: 'Cosori',
    title: {
      fr: 'Cosori CP158-AF 5.5L Air Fryer',
      de: 'Cosori CP158-AF 5.5L Heißluftfritteuse',
      en: 'Cosori CP158-AF 5.5L Air Fryer',
      es: 'Cosori CP158-AF 5.5L Freidora de Aire',
      it: 'Cosori CP158-AF 5.5L Friggitrice ad Aria',
      nl: 'Cosori CP158-AF 5.5L Airfryer',
      pl: 'Cosori CP158-AF 5.5L Air Fryer',
      sv: 'Cosori CP158-AF 5.5L airfryer',
      us: 'Cosori CP158-AF 5.5L Air Fryer',
      ca: 'Cosori CP158-AF 5.5L Air Fryer',
    },
    priceNumeric: { fr: 69.99, de: 69.99, en: 59.99, es: 64.99, it: 69.99, nl: 64.99, pl: 69.99, sv: 69.99, us: 59.99, ca: 59.99 },
    nuraScore: 7.8,
    capacity: '5.5L',
    bestFor: {
      fr: 'Familles (3-5 pers.)', en: 'Families (3-5 pers.)', de: 'Familien (3-5 Pers.)',
      es: 'Familias (3-5 pers.)', it: 'Famiglie (3-5 pers.)', nl: 'Gezinnen (3-5 pers.)', pl: 'Rodziny (3–5 osób)', sv: 'Familjer (3–5 pers.)', us: 'Families of 3 to 5', ca: 'Families (3–5 people)',
    },
    pros: {
      fr: ['11 programmes préréglés', 'Écran tactile', 'Panier compatible lave-vaisselle'],
      en: ['11 preset programmes', 'Touch display', 'Dishwasher-safe basket'],
      de: ['11 voreingestellte Programme', 'Touch-Display', 'Spülmaschinenfester Korb'],
      es: ['11 programas preestablecidos', 'Pantalla táctil', 'Cesta apta para lavavajillas'],
      it: ['11 programmi preimpostati', 'Display touch', 'Cestello lavabile in lavastoviglie'],
      nl: ['11 voorgeprogrammeerde standen', 'Aanraakscherm', 'Vaatwasserbestendige mand'],
      pl: ['11 gotowych programów', 'Ekran dotykowy', 'Kosz można myć w zmywarce'],
      sv: ['11 förinställda program', 'Pekskärm', 'Korgen tål diskmaskin'],
      us: ['11 presets', 'Touchscreen', 'Dishwasher-safe basket'],
      ca: ['11 preset programs', 'Touch display', 'Dishwasher-safe basket'],
    },
    cons: {
      fr: ['Pas de Wi-Fi ni d\'app', 'Un seul panier'], en: ['No Wi-Fi or app', 'Single basket'],
      de: ['Kein WLAN, keine App', 'Nur ein Korb'], es: ['Sin Wi-Fi ni app', 'Una sola cesta'],
      it: ['Niente Wi-Fi né app', 'Un solo cestello'], nl: ['Geen wifi of app', 'Eén mand'], pl: ['Brak Wi-Fi i aplikacji', 'Jeden kosz'], sv: ['Varken wifi eller app', 'Bara en korg'], us: ['No Wi-Fi or app', 'Single basket'], ca: ['No Wi-Fi or app', 'Single basket'],
    },
  },
  {
    // 9. Moulinex Easy Fry Max 5L
    asin: 'B0CG6C26QW',
    brand: 'Moulinex',
    title: {
      fr: 'Moulinex Easy Fry Max 5L',
      de: 'Moulinex Easy Fry Max 5L',
      en: 'Moulinex Easy Fry Max 5L',
      es: 'Moulinex Easy Fry Max 5L',
      it: 'Moulinex Easy Fry Max 5L',
      nl: 'Moulinex Easy Fry Max 5L',
      pl: 'Moulinex Easy Fry Max 5L',
      sv: 'Moulinex Easy Fry Max 5L',
      us: 'Moulinex Easy Fry Max 5L',
      ca: 'Moulinex Easy Fry Max 5L',
    },
    priceNumeric: { fr: 89.99, de: 94.99, en: 79.99, es: 84.99, it: 89.99, nl: 84.99, pl: 89.99, sv: 89.99, us: 79.99, ca: 79.99 },
    nuraScore: 8.3,
    capacity: '5L',
    bestFor: {
      fr: 'Familles (3-4 pers.)', en: 'Families (3-4 pers.)', de: 'Familien (3-4 Pers.)',
      es: 'Familias (3-4 pers.)', it: 'Famiglie (3-4 pers.)', nl: 'Gezinnen (3-4 pers.)', pl: 'Rodziny (3–4 osoby)', sv: 'Familjer (3–4 pers.)', us: 'Families of 3 or 4', ca: 'Families (3–4 people)',
    },
    pros: {
      fr: ['Excellent rapport qualité-prix', 'Marque française fiable', '10 programmes'],
      en: ['Excellent value', 'Reliable French brand', '10 programmes'],
      de: ['Ausgezeichnetes P/L', 'Zuverlässige französische Marke', '10 Programme'],
      es: ['Excelente relación calidad-precio', 'Marca francesa fiable', '10 programas'],
      it: ['Eccellente rapporto qualità-prezzo', 'Marca francese affidabile', '10 programmi'],
      nl: ['Uitstekende prijs-kwaliteit', 'Betrouwbaar Frans merk', '10 programma\'s'],
      pl: ['Świetny stosunek jakości do ceny', 'Niezawodna francuska marka', '10 programów'],
      sv: ['Mycket prisvärd', 'Pålitligt franskt märke', '10 program'],
      us: ['Excellent value', 'Reliable French brand', '10 presets'],
      ca: ['Excellent value', 'Reliable French brand', '10 programs'],
    },
    cons: {
      fr: ['Pas de double tiroir', 'Design classique'], en: ['No dual drawer', 'Classic design'],
      de: ['Kein Doppelkorb', 'Klassisches Design'], es: ['Sin doble cajón', 'Diseño clásico'],
      it: ['Nessun doppio cassetto', 'Design classico'], nl: ['Geen dubbele lade', 'Klassiek design'], pl: ['Brak podwójnej szuflady', 'Klasyczny wygląd'], sv: ['Bara en låda', 'Klassisk design'], us: ['No dual drawer', 'Classic design'], ca: ['No dual drawer', 'Classic design'],
    },
  },
]

export function getStaticProducts(lang: string) {
  return staticProducts.map((p) => {
    const title = p.title[lang] || p.title.fr

    return {
      title,
      priceNumeric: p.priceNumeric[lang] || p.priceNumeric.fr,
      visual: productVisual(p.brand, title, 'airfryer', productPhoto({ asin: p.asin }, resolveLang(lang))),
      asin: p.asin,
      url: amazonProductUrl(p.asin, resolveLang(lang)),
      badge: p.badge ? (p.badge[lang] || p.badge.fr) : undefined,
      nuraScore: p.nuraScore,
      capacity: p.capacity,
      bestFor: p.bestFor[lang] || p.bestFor.fr,
      pros: p.pros[lang] || p.pros.fr,
      cons: p.cons[lang] || p.cons.fr,
    }
  })
}
