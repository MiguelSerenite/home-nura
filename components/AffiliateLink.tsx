'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick } from '@/lib/analytics'
import type { ClickPlacement, ClickSurface } from '@/lib/affiliate-click'

type ClickLocation = Parameters<typeof trackAffiliateClick>[0]['location']

interface AffiliateLinkProps {
  href: string
  asin: string
  productName: string
  priceNumeric?: number
  position?: number
  location: ClickLocation
  lang: string
  /** Block of the page the link sits in, rendered as data-aff-placement and sent with the click. */
  placement: ClickPlacement
  /** Position on an article page (legacy click dimension, optional). */
  surface?: ClickSurface
  className?: string
  children: ReactNode
  ariaLabel?: string
}

/**
 * Client-side wrapper around an affiliate `<a>` that fires a
 * `click_affiliate` analytics event on click.
 *
 * Safe to import from both Server Components and Client Components —
 * Next.js will hydrate just this subtree on the client while the rest
 * of the parent (including async JSON-LD) stays on the server.
 *
 * Always renders `target="_blank" rel="sponsored nofollow noopener noreferrer"`
 * so Amazon affiliate compliance and security are baked in — callers
 * just pass the href, tracking metadata (placement included), and
 * presentation classes.
 */
export default function AffiliateLink({
  href,
  asin,
  productName,
  priceNumeric,
  position,
  location,
  lang,
  className,
  children,
  ariaLabel,
  placement,
  surface,
}: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      aria-label={ariaLabel}
      data-aff-placement={placement}
      onClick={() =>
        trackAffiliateClick({ asin, productName, priceNumeric, position, location, lang, placement, surface, url: href })
      }
      className={className}
    >
      {children}
    </a>
  )
}
