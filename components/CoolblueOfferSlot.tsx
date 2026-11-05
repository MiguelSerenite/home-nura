'use client'

import { lazy, Suspense, type ComponentProps } from 'react'
import type { CoolblueOffer as Offer } from '@/lib/merchant-offers/types'

// Its own chunk, fetched only by pages that show an offer.
const CoolblueOffer = lazy(() => import('./CoolblueOffer'))

type Props = Omit<ComponentProps<typeof CoolblueOffer>, 'offers'> & {
  /** The model's offers, if any: without one nothing renders and nothing loads. */
  offers: readonly Offer[] | undefined
}

/**
 * Where a model's Coolblue offers go (under its Amazon button). Renders
 * components/CoolblueOffer.tsx only when the model has an offer, loaded
 * lazily: static prerendering waits for it, so the offer is in the HTML,
 * and pages without offers never download its code.
 */
export default function CoolblueOfferSlot({ offers, ...props }: Props) {
  if (!offers || offers.length === 0) return null
  return (
    <Suspense fallback={null}>
      <CoolblueOffer offers={offers} {...props} />
    </Suspense>
  )
}
