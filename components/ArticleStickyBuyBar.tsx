'use client'

import { useEffect, useState } from 'react'
import { trackAffiliateClick } from '@/lib/analytics'

interface StickyProduct {
  asin: string
  title: string
  price: string
  priceNumeric: number
  url: string
}

const BUTTON_LABEL: Record<string, string> = {
  fr: 'Voir le prix',
  en: 'Check price',
  de: 'Preis prüfen',
  es: 'Ver precio',
  it: 'Vedi prezzo',
  nl: 'Bekijk prijs',
}

const AFFILIATE_NOTE: Record<string, string> = {
  fr: 'Lien affilié',
  en: 'Affiliate link',
  de: 'Affiliate-Link',
  es: 'Enlace de afiliado',
  it: 'Link di affiliazione',
  nl: 'Affiliatelink',
}

// Show once the reader is past the hero, hide when the full product block
// (#article-products) is on screen so the two never compete.
const SHOW_AFTER_SCROLL_PX = 600

/** Mobile-only bottom bar keeping the top pick one tap away while reading. */
export default function ArticleStickyBuyBar({ product, lang }: { product: StickyProduct; lang: string }) {
  const [pastHero, setPastHero] = useState(false)
  const [productsVisible, setProductsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > SHOW_AFTER_SCROLL_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const target = document.getElementById('article-products')
    const observer = target
      ? new IntersectionObserver(([entry]) => setProductsVisible(entry.isIntersecting))
      : null
    if (target && observer) observer.observe(target)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  if (!pastHero || productsVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] lg:hidden">
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-slate-900">{product.title}</p>
          <p className="text-xs text-slate-600">
            {AFFILIATE_NOTE[lang] ?? AFFILIATE_NOTE.fr}
          </p>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          onClick={() =>
            trackAffiliateClick({
              asin: product.asin,
              productName: product.title,
              priceNumeric: product.priceNumeric,
              position: 1,
              location: 'article_sticky',
              lang,
            })
          }
          className="inline-flex min-h-12 flex-shrink-0 items-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white active:bg-brand-700"
        >
          {BUTTON_LABEL[lang] ?? BUTTON_LABEL.fr} →
        </a>
      </div>
    </div>
  )
}
