'use client'

import { useEffect } from 'react'
import { trackAffiliateClick } from '@/lib/analytics'
import { CLICK_SURFACES, type ClickSurface } from '@/lib/affiliate-click'

const SURFACES: ReadonlySet<string> = new Set(CLICK_SURFACES)
const MIDDLE_BUTTON = 1

const LOCATION_BY_SURFACE: Partial<Record<ClickSurface, 'article_inline' | 'article_table'>> = {
  inline: 'article_inline',
  table: 'article_table',
}

/**
 * Records clicks on affiliate links that live in article HTML (rendered
 * with dangerouslySetInnerHTML, so they cannot carry React handlers).
 * Such links carry `data-aff-surface`, `data-aff-model` and optionally
 * `data-aff-asin` (see lib/blog/enrichContent.ts). One delegated
 * listener per page; renders nothing.
 */
export default function AffiliateClickTracker({ lang }: { lang: string }) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== MIDDLE_BUTTON) return
      const target = event.target instanceof Element ? event.target : null
      const link = target?.closest<HTMLAnchorElement>('a[data-aff-surface]')
      const surface = link?.dataset.affSurface
      if (!link || !surface || !SURFACES.has(surface)) return
      trackAffiliateClick({
        asin: link.dataset.affAsin ?? '',
        productName: link.dataset.affModel ?? link.textContent?.trim() ?? '',
        location: LOCATION_BY_SURFACE[surface as ClickSurface] ?? 'article_inline',
        lang,
        surface: surface as ClickSurface,
        url: link.href,
      })
    }
    document.addEventListener('click', onClick)
    document.addEventListener('auxclick', onClick)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('auxclick', onClick)
    }
  }, [lang])

  return null
}
