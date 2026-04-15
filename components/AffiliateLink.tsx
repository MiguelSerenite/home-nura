'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick } from '@/lib/analytics'

interface AffiliateLinkProps {
  href: string
  asin: string
  productName: string
  priceNumeric?: number
  position?: number
  location: 'comparison_table' | 'article_inline' | 'article_bottom' | 'comparator' | 'product_card' | 'smart_kitchen'
  lang: string
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
 * Always renders `target="_blank" rel="nofollow noopener noreferrer"`
 * so Amazon affiliate compliance and security are baked in — callers
 * just pass the href, tracking metadata, and presentation classes.
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
}: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() =>
        trackAffiliateClick({
          asin,
          productName,
          priceNumeric,
          position,
          location,
          lang,
        })
      }
      className={className}
    >
      {children}
    </a>
  )
}
