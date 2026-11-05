'use client'

import { trackAffiliateClick } from '@/lib/analytics'
import type { CoolblueOffer as Offer } from '@/lib/merchant-offers/types'

/**
 * Coolblue's offers for a model, under its Amazon button: the store's own
 * price with its date, a button naming the store ("Bekijk bij Coolblue",
 * "Bei Coolblue ansehen", "Voir chez Coolblue (Belgique)") and a short
 * disclosure saying Home Nura is not Coolblue and earns a commission.
 *
 * A tiny client island: the server words every offer (lib/merchant-offers/
 * view.ts) and the callers load this file lazily (next/dynamic), so pages
 * without an offer ship none of it. An offer for one country only (Coolblue
 * BE) carries data-offer-only, Coolblue NL's data-offer-except: app/
 * globals.css shows each to the right visitors (lib/merchant-offers/audience.ts).
 *
 * Coolblue's terms: the store is named before the click, nothing from
 * Coolblue's site or feed is reworded (no text, no image), and no coupon,
 * cashback or delivery promise is used as an incentive.
 */
export default function CoolblueOffer({
  offers,
  model,
  lang,
  position,
  className = '',
}: {
  /** The model's offers for this page's locale, one per merchant (table order). */
  offers: readonly Offer[]
  /** Model name of the page, for the click log. */
  model: string
  lang: string
  position?: number
  className?: string
}) {
  return (
    <>
      {offers.map((offer) => (
        <div
          key={offer.merchant}
          className={`rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 ${className}`}
          data-merchant="coolblue"
          data-store={offer.store}
          data-offer-only={offer.onlyCountry}
          data-offer-except={offer.exceptCountries}
        >
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">{offer.priceText}</span> {offer.atStore}
            </p>
            <a
              href={offer.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              data-aff-placement="coolblue_offer"
              onClick={() =>
                trackAffiliateClick({
                  asin: '',
                  productName: model,
                  priceNumeric: offer.price,
                  position,
                  location: 'coolblue_offer',
                  lang,
                  placement: 'coolblue_offer',
                  url: offer.url,
                })
              }
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-bold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-100"
            >
              {offer.button} →
            </a>
          </div>
          <p className="mt-1 text-[11px] leading-snug text-slate-500">{offer.note}</p>
        </div>
      ))}
    </>
  )
}
