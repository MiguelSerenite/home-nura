'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick } from '@/lib/analytics'

/**
 * Amazon link of the Black Friday pages: sponsored rel, new tab, the same
 * click_affiliate event as the category verdict boxes, and the first-party
 * click beacon (/api/click) with the `black_friday` surface.
 */
export default function BlackFridayAmazonLink({
  href,
  productName,
  lang,
  asin = '',
  position,
  className,
  decorative = false,
  children,
}: {
  href: string
  productName: string
  lang: string
  asin?: string
  position?: number
  className?: string
  /** Duplicate of a labelled link (product photo): out of the tab order and the accessibility tree. */
  decorative?: boolean
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      {...(decorative ? { tabIndex: -1, 'aria-hidden': true } : {})}
      onClick={() =>
        trackAffiliateClick({ asin, productName, position, location: 'category_picks', lang, surface: 'black_friday', url: href })
      }
      className={className}
    >
      {children}
    </a>
  )
}
