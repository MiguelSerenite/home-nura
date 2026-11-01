'use client'

import { useEffect } from 'react'
import { trackAffiliateClick } from '@/lib/analytics'
import { CLICK_PLACEMENTS, CLICK_SURFACES, type ClickPlacement, type ClickSurface } from '@/lib/affiliate-click'

const PLACEMENTS: ReadonlySet<string> = new Set(CLICK_PLACEMENTS)
const SURFACES: ReadonlySet<string> = new Set(CLICK_SURFACES)
const MIDDLE_BUTTON = 1
/** Links of the article HTML only: React links never carry data-aff-model. */
const ARTICLE_HTML_LINK = 'a[data-aff-model][data-aff-placement]'

const LOCATION_BY_PLACEMENT: Partial<Record<ClickPlacement, 'article_inline' | 'article_table'>> = {
  body_link: 'article_inline',
  table: 'article_table',
}

/**
 * Records clicks on affiliate links that live in article HTML (rendered
 * with dangerouslySetInnerHTML, so they cannot carry React handlers).
 * Such links carry `data-aff-model`, `data-aff-placement`,
 * `data-aff-surface` and optionally `data-aff-asin` (see
 * lib/blog/enrichContent.ts). React links also carry data-aff-placement
 * but track through their own onClick and never data-aff-model, so they
 * are not counted twice (tests/lib/click-placements.test.ts). One
 * delegated listener per page; renders nothing.
 */
export default function AffiliateClickTracker({ lang }: { lang: string }) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== MIDDLE_BUTTON) return
      const target = event.target instanceof Element ? event.target : null
      const link = target?.closest<HTMLAnchorElement>(ARTICLE_HTML_LINK)
      const placement = link?.dataset.affPlacement
      if (!link || !placement || !PLACEMENTS.has(placement)) return
      const surface = link.dataset.affSurface
      trackAffiliateClick({
        asin: link.dataset.affAsin ?? '',
        productName: link.dataset.affModel ?? link.textContent?.trim() ?? '',
        location: LOCATION_BY_PLACEMENT[placement as ClickPlacement] ?? 'article_inline',
        lang,
        placement: placement as ClickPlacement,
        surface: surface && SURFACES.has(surface) ? (surface as ClickSurface) : undefined,
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
