/**
 * Words of each merchant's offer box, in the language of the pages that
 * show it (server-only: lib/merchant-offers/view.ts words the offer props). Coolblue's terms: the store is named before the
 * click ("Bekijk bij Coolblue", "Bei Coolblue ansehen", "Voir chez Coolblue
 * (Belgique)"), the box says Home Nura is not Coolblue and earns a
 * commission, and no coupon, cashback, delivery or returns promise.
 */
import 'server-only'
import type { OfferLocale } from './format'
import type { MerchantId } from './merchants'

export interface OfferCopy {
  locale: OfferLocale
  /** After the price: "€ 139,99 bij Coolblue". */
  atStore: string
  /** The button (an arrow follows). */
  button: string
  /** The price date sentence, with its trailing space. */
  priceDate: (date: string) => string
  disclosure: string
}

export const OFFER_COPY: Readonly<Record<MerchantId, OfferCopy>> = {
  'coolblue-nl': {
    locale: 'nl',
    atStore: 'bij Coolblue',
    button: 'Bekijk bij Coolblue',
    priceDate: (date) => `Prijs op ${date}, prijzen kunnen wijzigen. `,
    disclosure:
      'Home Nura is geen Coolblue: deze link brengt je naar coolblue.nl en we ontvangen ook van Coolblue (via Awin) een commissie, zonder extra kosten voor jou.',
  },
  'coolblue-be-nl': {
    locale: 'nl',
    atStore: 'bij Coolblue België',
    button: 'Bekijk bij Coolblue (België)',
    priceDate: (date) => `Prijs op ${date}, prijzen kunnen wijzigen. `,
    disclosure:
      'Home Nura is geen Coolblue: deze link brengt je naar coolblue.be en we ontvangen ook van Coolblue (via Awin) een commissie, zonder extra kosten voor jou.',
  },
  'coolblue-de': {
    locale: 'de',
    atStore: 'bei Coolblue',
    button: 'Bei Coolblue ansehen',
    priceDate: (date) => `Preis vom ${date}. Preise können sich ändern. `,
    disclosure:
      'Home Nura ist nicht Coolblue: Dieser Link führt zu coolblue.de, und wir erhalten von Coolblue (über Awin) eine Provision, ohne Mehrkosten für Sie.',
  },
  'coolblue-be-fr': {
    locale: 'fr',
    atStore: 'chez Coolblue (Belgique)',
    button: 'Voir chez Coolblue (Belgique)',
    priceDate: (date) => `Prix du ${date}, les prix peuvent changer. `,
    disclosure:
      'Home Nura n’est pas Coolblue : ce lien mène à coolblue.be et nous recevons de Coolblue (via Awin) une commission, sans frais supplémentaires pour vous.',
  },
}
