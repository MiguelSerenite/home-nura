/**
 * What a catalog product is, in the reader's language, shown next to its
 * name ("N°1 · Airfryer · Familles nombreuses"). Catalog titles are the
 * official model names, often without the product type in the reader's
 * language; the kicker makes a card self-explanatory and puts the type
 * word in the card heading.
 */
import type { Lang } from '@/lib/i18n'
import type { SmartKitchenCategory } from '@/lib/smart-kitchen-products'

export type ProductTypeKey = 'airfryers' | SmartKitchenCategory

export const PRODUCT_TYPE_LABELS: Readonly<Record<ProductTypeKey, Record<Lang, string>>> = {
  airfryers: {
    fr: 'Airfryer', en: 'Air fryer', de: 'Heißluftfritteuse',
    es: 'Freidora de aire', it: 'Friggitrice ad aria', nl: 'Airfryer', pl: 'Frytkownica beztłuszczowa',
  },
  multicuiseurs: {
    fr: 'Multicuiseur', en: 'Multicooker', de: 'Multikocher',
    es: 'Olla multifunción', it: 'Multicooker', nl: 'Multicooker', pl: 'Multicooker',
  },
  cafetieres: {
    fr: 'Machine à café', en: 'Coffee machine', de: 'Kaffeemaschine',
    es: 'Cafetera', it: 'Macchina da caffè', nl: 'Koffiemachine', pl: 'Ekspres do kawy',
  },
  balances: {
    fr: 'Balance de cuisine', en: 'Kitchen scale', de: 'Küchenwaage',
    es: 'Báscula de cocina', it: 'Bilancia da cucina', nl: 'Keukenweegschaal', pl: 'Waga kuchenna',
  },
  'thermometres-viande': {
    fr: 'Thermomètre à viande', en: 'Meat thermometer', de: 'Fleischthermometer',
    es: 'Termómetro para carne', it: 'Termometro per carne', nl: 'Vleesthermometer', pl: 'Termometr do mięsa',
  },
  'prises-connectees': {
    fr: 'Prise connectée', en: 'Smart plug', de: 'WLAN-Steckdose',
    es: 'Enchufe inteligente', it: 'Presa smart', nl: 'Slimme stekker', pl: 'Inteligentne gniazdko',
  },
}

const RANK_PREFIX: Readonly<Record<Lang, string>> = {
  fr: 'N°', en: 'No. ', de: 'Platz ', es: 'N.º ', it: 'N. ', nl: 'Nr. ', pl: 'Nr ',
}

export function rankLabel(rank: number, lang: Lang): string {
  return `${RANK_PREFIX[lang]}${rank}`
}

/** Rank (podiums only), product type, then who it suits, joined with " · ". */
export function productKicker({ type, lang, rank, bestFor }: {
  type: ProductTypeKey
  lang: Lang
  rank?: number
  bestFor?: string
}): string {
  return [rank ? rankLabel(rank, lang) : '', PRODUCT_TYPE_LABELS[type][lang], bestFor ?? '']
    .filter(Boolean)
    .join(' · ')
}
