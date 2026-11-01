import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { getGiftGuide, giftGuidePath } from './index'
import type { GiftGuide } from './types'

/** The guide served at /[lang]/<slug>, or undefined for any other locale (404). */
export function resolveGiftGuide(slug: string, lang: string): GiftGuide | undefined {
  const guide = getGiftGuide(slug)
  return guide && guide.lang === lang ? guide : undefined
}

export function giftGuideStaticParams(slug: string): { lang: string }[] {
  const guide = getGiftGuide(slug)
  return guide ? [{ lang: guide.lang }] : []
}

/** Single-locale page: hreflang names the page itself, without x-default. */
export function giftGuideMetadata(guide: GiftGuide): Metadata {
  return buildPageMetadata({
    lang: guide.lang,
    path: giftGuidePath(guide),
    title: `${guide.metaTitle} | Home Nura`,
    description: guide.metaDescription,
    locales: [guide.lang],
  })
}
