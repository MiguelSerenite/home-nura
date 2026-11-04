'use client'

import { trackAffiliateClick } from '@/lib/analytics'
import { audienceAttributes } from '@/lib/merchant-offers/audience'
import { OFFER_COPY } from '@/lib/merchant-offers/copy'
import { formatEuro, formatPriceDate } from '@/lib/merchant-offers/format'
import { merchantById } from '@/lib/merchant-offers/merchants'
import type { CoolblueOffer as Offer } from '@/lib/merchant-offers/types'

/**
 * Coolblue's offers for a model, under its Amazon button: per merchant of
 * the page's locale (lib/merchant-offers/merchants.ts), Coolblue's own price
 * with its date, a button naming the store ("Bekijk bij Coolblue", "Bei
 * Coolblue ansehen", "Voir chez Coolblue (Belgique)") and a short disclosure
 * saying Home Nura is not Coolblue and earns a commission.
 *
 * An offer for one country only (Coolblue BE) carries data attributes that
 * app/globals.css uses to show it to that country's visitors only, and
 * Coolblue NL's hides it from them (lib/merchant-offers/audience.ts).
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
  /** The model's offers, one per merchant (table order). */
  offers: readonly Offer[]
  /** Model name of the page, for the click log. */
  model: string
  lang: string
  position?: number
  className?: string
}) {
  const shown = offers.filter((offer) => (merchantById(offer.merchant).langs as readonly string[]).includes(lang))
  if (shown.length === 0) return null
  return (
    <>
      {shown.map((offer) => (
        <OfferBox key={offer.merchant} offer={offer} model={model} lang={lang} position={position} className={className} />
      ))}
    </>
  )
}

function OfferBox({ offer, model, lang, position, className }: { offer: Offer; model: string; lang: string; position?: number; className: string }) {
  const merchant = merchantById(offer.merchant)
  const copy = OFFER_COPY[offer.merchant]
  const priceDate = formatPriceDate(offer.priceAt, copy.locale)
  const track = () =>
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
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 ${className}`}
      data-merchant="coolblue"
      data-store={merchant.store}
      {...audienceAttributes(merchant.audience)}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">{formatEuro(offer.price, copy.locale)}</span> {copy.atStore}
        </p>
        <a
          href={offer.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          data-aff-placement="coolblue_offer"
          onClick={track}
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-bold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-100"
        >
          {copy.button} →
        </a>
      </div>
      <p className="mt-1 text-[11px] leading-snug text-slate-500">
        {priceDate && copy.priceDate(priceDate)}
        {copy.disclosure}
      </p>
    </div>
  )
}
