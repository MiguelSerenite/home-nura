'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick } from '@/lib/analytics'

/**
 * Amazon link of the Black Friday pages: sponsored rel, new tab and the
 * same click_affiliate event as the category verdict boxes.
 */
export default function BlackFridayAmazonLink({
  href,
  productName,
  lang,
  asin = '',
  position,
  className,
  children,
}: {
  href: string
  productName: string
  lang: string
  asin?: string
  position?: number
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      onClick={() => trackAffiliateClick({ asin, productName, position, location: 'category_picks', lang })}
      className={className}
    >
      {children}
    </a>
  )
}
