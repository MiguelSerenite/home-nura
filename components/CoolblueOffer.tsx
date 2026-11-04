'use client'

import { trackAffiliateClick } from '@/lib/analytics'
import { formatEuroNl, formatPriceDateNl } from '@/lib/merchant-offers/format'
import type { CoolblueOffer as Offer } from '@/lib/merchant-offers/types'

/**
 * Coolblue's offer for a model, under its Amazon button (Dutch pages only):
 * Coolblue's own price with its date, a "Bekijk bij Coolblue" button and a
 * short disclosure saying Home Nura is not Coolblue and earns a commission.
 *
 * Coolblue's terms: the store is named before the click, nothing from
 * coolblue.nl or the feed is reworded (no text, no image), and no coupon,
 * cashback or delivery promise is used as an incentive.
 */
export default function CoolblueOffer({
  offer,
  model,
  lang,
  position,
  className = '',
}: {
  offer: Offer
  /** Model name of the page, for the click log. */
  model: string
  lang: string
  position?: number
  className?: string
}) {
  if (lang !== 'nl') return null
  const priceDate = formatPriceDateNl(offer.priceAt)
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
    <div className={`rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 ${className}`} data-merchant="coolblue">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-slate-900">{formatEuroNl(offer.price)}</span> bij Coolblue
        </p>
        <a
          href={offer.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          data-aff-placement="coolblue_offer"
          onClick={track}
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-bold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-100"
        >
          Bekijk bij Coolblue →
        </a>
      </div>
      <p className="mt-1 text-[11px] leading-snug text-slate-500">
        {priceDate && <>Prijs op {priceDate}, prijzen kunnen wijzigen. </>}
        Home Nura is geen Coolblue: deze link brengt je naar coolblue.nl en we ontvangen ook van Coolblue (via Awin) een commissie, zonder extra kosten voor jou.
      </p>
    </div>
  )
}
