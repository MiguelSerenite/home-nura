/**
 * Self-hosted product photos: official manufacturer packshots placed,
 * unaltered, in a Homenura-branded frame (scripts/images/build-product-images.ts).
 *
 * Client-safe on purpose: no manifest import, only file naming and the
 * localized alt text and credit line. The manifest lookup lives in
 * lib/product-images.ts (server side), which hands components a
 * ready-to-render `ProductPhoto`.
 */
import type { Lang } from '@/lib/i18n'

export const PRODUCT_PHOTO_DIR = '/images/products'
/** Square variants, in pixels (the composition is square). */
export const PRODUCT_PHOTO_WIDTHS = [400, 800, 1200] as const
export const PRODUCT_PHOTO_FORMATS = ['avif', 'webp'] as const
/** Vertical 2:3 variant for Pinterest saves. */
export const PRODUCT_PIN = { width: 1000, height: 1500, formats: ['jpg', 'webp'] as const }

export type ProductPhotoWidth = (typeof PRODUCT_PHOTO_WIDTHS)[number]
export type ProductPhotoFormat = (typeof PRODUCT_PHOTO_FORMATS)[number]
export type ProductPinFormat = (typeof PRODUCT_PIN.formats)[number]

/** What a photo shows, for its alt text. */
export const PRODUCT_PHOTO_CATEGORIES = [
  'airfryer',
  'multicooker',
  'coffee-machine',
  'kitchen-scale',
  'meat-thermometer',
  'smart-plug',
  'robot-vacuum',
  'stick-vacuum',
  'thermostat',
  'radiator-thermostat',
  'heater',
  'smart-bulb',
  'smart-lock',
  'smoke-alarm',
  'co-alarm',
  'air-purifier',
  'weather-station',
  'cooking-robot',
] as const

export type ProductPhotoCategory = (typeof PRODUCT_PHOTO_CATEGORIES)[number]

export const PRODUCT_PHOTO_CATEGORY_LABELS: Record<ProductPhotoCategory, Record<Lang, string>> = {
  airfryer: { fr: 'airfryer', en: 'air fryer', de: 'Heißluftfritteuse', es: 'freidora de aire', it: 'friggitrice ad aria', nl: 'airfryer', pl: 'frytkownica beztłuszczowa' },
  multicooker: { fr: 'multicuiseur', en: 'multicooker', de: 'Multikocher', es: 'olla multifunción', it: 'multicooker', nl: 'multicooker', pl: 'multicooker' },
  'coffee-machine': { fr: 'machine à café à grain', en: 'bean-to-cup coffee machine', de: 'Kaffeevollautomat', es: 'cafetera superautomática', it: 'macchina da caffè automatica', nl: 'volautomatische koffiemachine', pl: 'ekspres do kawy na ziarna' },
  'kitchen-scale': { fr: 'balance de cuisine', en: 'kitchen scale', de: 'Küchenwaage', es: 'báscula de cocina', it: 'bilancia da cucina', nl: 'keukenweegschaal', pl: 'waga kuchenna' },
  'meat-thermometer': { fr: 'thermomètre à viande', en: 'meat thermometer', de: 'Fleischthermometer', es: 'termómetro para carne', it: 'termometro per carne', nl: 'vleesthermometer', pl: 'termometr do mięsa' },
  'smart-plug': { fr: 'prise connectée', en: 'smart plug', de: 'smarte Steckdose', es: 'enchufe inteligente', it: 'presa smart', nl: 'slimme stekker', pl: 'inteligentna wtyczka' },
  'robot-vacuum': { fr: 'robot aspirateur', en: 'robot vacuum', de: 'Saugroboter', es: 'robot aspirador', it: 'robot aspirapolvere', nl: 'robotstofzuiger', pl: 'robot sprzątający' },
  'stick-vacuum': { fr: 'aspirateur balai', en: 'cordless stick vacuum', de: 'Akku-Staubsauger', es: 'aspiradora escoba', it: 'scopa elettrica', nl: 'steelstofzuiger', pl: 'odkurzacz pionowy bezprzewodowy' },
  thermostat: { fr: 'thermostat connecté', en: 'smart thermostat', de: 'smartes Thermostat', es: 'termostato inteligente', it: 'termostato smart', nl: 'slimme thermostaat', pl: 'inteligentny termostat' },
  'radiator-thermostat': { fr: 'tête thermostatique connectée', en: 'smart radiator thermostat', de: 'smartes Heizkörperthermostat', es: 'válvula termostática inteligente', it: 'valvola termostatica smart', nl: 'slimme radiatorknop', pl: 'inteligentna głowica termostatyczna' },
  heater: { fr: 'radiateur électrique', en: 'electric heater', de: 'Elektroheizkörper', es: 'radiador eléctrico', it: 'radiatore elettrico', nl: 'elektrische radiator', pl: 'grzejnik elektryczny' },
  'smart-bulb': { fr: 'ampoule connectée', en: 'smart bulb', de: 'smarte Glühbirne', es: 'bombilla inteligente', it: 'lampadina smart', nl: 'slimme lamp', pl: 'inteligentna żarówka' },
  'smart-lock': { fr: 'serrure connectée', en: 'smart lock', de: 'smartes Türschloss', es: 'cerradura inteligente', it: 'serratura smart', nl: 'slim deurslot', pl: 'inteligentny zamek' },
  'smoke-alarm': { fr: 'détecteur de fumée connecté', en: 'smart smoke alarm', de: 'smarter Rauchmelder', es: 'detector de humo inteligente', it: 'rilevatore di fumo smart', nl: 'slimme rookmelder', pl: 'inteligentny czujnik dymu' },
  'co-alarm': { fr: 'détecteur de monoxyde de carbone', en: 'carbon monoxide alarm', de: 'Kohlenmonoxidmelder', es: 'detector de monóxido de carbono', it: 'rilevatore di monossido di carbonio', nl: 'koolmonoxidemelder', pl: 'czujnik tlenku węgla (czadu)' },
  'air-purifier': { fr: "purificateur d'air", en: 'air purifier', de: 'Luftreiniger', es: 'purificador de aire', it: "purificatore d'aria", nl: 'luchtreiniger', pl: 'oczyszczacz powietrza' },
  'weather-station': { fr: 'station météo connectée', en: 'weather station', de: 'Wetterstation', es: 'estación meteorológica', it: 'stazione meteo', nl: 'weerstation', pl: 'inteligentna stacja pogodowa' },
  'cooking-robot': { fr: 'robot cuiseur', en: 'cooking food processor', de: 'Küchenmaschine mit Kochfunktion', es: 'robot de cocina', it: 'robot da cucina', nl: 'keukenrobot met kookfunctie', pl: 'robot kuchenny' },
}

/** "Photo : © Ninja" — French typography keeps the space before the colon. */
const CREDIT_PREFIX: Record<Lang, { one: string; many: string }> = {
  fr: { one: 'Photo :', many: 'Photos :' },
  en: { one: 'Photo:', many: 'Photos:' },
  de: { one: 'Foto:', many: 'Fotos:' },
  es: { one: 'Foto:', many: 'Fotos:' },
  it: { one: 'Foto:', many: 'Foto:' },
  nl: { one: 'Foto:', many: "Foto's:" },
  pl: { one: 'Zdjęcie:', many: 'Zdjęcia:' },
}

/** A product photo ready to render in one language. */
export interface ProductPhoto {
  /** File stem in PRODUCT_PHOTO_DIR (brand + model slug). */
  id: string
  /** "{Brand} {Model} – {category} | Homenura", localized. */
  alt: string
  /** Visible credit line, e.g. "Photo : © Ninja". */
  credit: string
  /** Credit text alone ("© Ninja"), to merge several credits on one line. */
  copyright: string
  /** Absolute URL of the vertical variant, offered to Pinterest's save button. */
  pin: string
}

export function productPhotoPath(id: string, width: ProductPhotoWidth, format: ProductPhotoFormat): string {
  return `${PRODUCT_PHOTO_DIR}/${id}-${width}.${format}`
}

export function productPinPath(id: string, format: ProductPinFormat): string {
  return `${PRODUCT_PHOTO_DIR}/${id}-pin.${format}`
}

/** `srcset` of the square variants in one format. */
export function productPhotoSrcSet(id: string, format: ProductPhotoFormat): string {
  return PRODUCT_PHOTO_WIDTHS.map((w) => `${productPhotoPath(id, w, format)} ${w}w`).join(', ')
}

export function productPhotoAlt(brand: string, model: string, category: ProductPhotoCategory, lang: Lang): string {
  return `${brand} ${model} – ${PRODUCT_PHOTO_CATEGORY_LABELS[category][lang]} | Homenura`
}

/** `credit` is the manifest credit text ("© Ninja"). */
export function productPhotoCredit(credit: string, lang: Lang): string {
  return `${CREDIT_PREFIX[lang].one} ${credit}`
}

/**
 * One credit line for a block of thumbnails ("Photos : © Ninja, © Philips"),
 * or null when none of them is a photo.
 */
export function productPhotoCredits(photos: readonly (ProductPhoto | undefined)[], lang: string): string | null {
  const holders = [...new Set(photos.flatMap((p) => (p ? [p.copyright] : [])))]
  if (holders.length === 0) return null
  const prefix = CREDIT_PREFIX[(lang in CREDIT_PREFIX ? lang : 'fr') as Lang]
  return `${holders.length === 1 ? prefix.one : prefix.many} ${holders.join(', ')}`
}
