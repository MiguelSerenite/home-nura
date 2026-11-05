/**
 * From a matched feed product to the props components/CoolblueOffer.tsx
 * renders: every word, price and date already in the page's language, and
 * the merchant's audience as plain fields. Server-only, so the browser never
 * loads the merchant table, the copy or the formatting code.
 */
import 'server-only'
import { OFFER_COPY } from './copy'
import { formatEuro, formatPriceDate } from './format'
import { merchantById, type MerchantId } from './merchants'
import type { CoolblueOffer } from './types'

/** A merchant product matched to one of our models. */
export interface MerchantOffer {
  merchant: MerchantId
  /** Awin tracked link, checked to carry our publisher ID and the merchant's advertiser ID. */
  url: string
  /** The merchant's own price, in euros. */
  price: number
  /** When the price was read (ISO 8601). */
  priceAt: string
}

/** The render props of an offer. */
export function offerView(offer: MerchantOffer): CoolblueOffer {
  const merchant = merchantById(offer.merchant)
  const copy = OFFER_COPY[offer.merchant]
  const priceDate = formatPriceDate(offer.priceAt, copy.locale)
  const { audience } = merchant
  return {
    merchant: merchant.id,
    store: merchant.store,
    url: offer.url,
    price: offer.price,
    priceText: formatEuro(offer.price, copy.locale),
    atStore: copy.atStore,
    button: copy.button,
    note: `${priceDate ? copy.priceDate(priceDate) : ''}${copy.disclosure}`,
    ...(audience.kind === 'only' ? { onlyCountry: audience.country } : {}),
    ...(audience.kind === 'except' ? { exceptCountries: audience.countries.join(' ') } : {}),
  }
}
