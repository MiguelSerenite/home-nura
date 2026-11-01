import { categoryPath, getCategory } from '@/lib/catalog'
import type { Lang } from '@/lib/i18n'
import { BOXING_DAY } from './copy/boxing-day'
import { REYES } from './copy/regalos-de-reyes'
import { SINTERKLAAS } from './copy/sinterklaas'
import type { GiftGuide } from './types'

export type * from './types'

/** Every gift guide, in calendar order. Each has its route in app/[lang]/<slug>/. */
export const GIFT_GUIDES: readonly GiftGuide[] = [SINTERKLAAS, BOXING_DAY, REYES]

/** Language-relative path of a gift guide ('/sinterklaas'). */
export function giftGuidePath(guide: Pick<GiftGuide, 'slug'>): string {
  return `/${guide.slug}`
}

export function getGiftGuide(slug: string): GiftGuide | undefined {
  return GIFT_GUIDES.find((g) => g.slug === slug)
}

/** The gift guides of a locale (linked from its Black Friday hub). */
export function giftGuidesFor(lang: Lang): GiftGuide[] {
  return GIFT_GUIDES.filter((g) => g.lang === lang)
}

export interface GiftGuideCardLink {
  category: string
  name: string
  line: string
  /** Language-relative path of the category's landing page ('/cuisine-connectee/cafetieres'). */
  path: string
}

/**
 * The cards with their hub links. A card naming a missing or non-indexable
 * category is a data error (tests/lib/gift-guides.test.ts), never skipped.
 */
export function giftGuideCards(guide: GiftGuide): GiftGuideCardLink[] {
  return guide.cards.map((card) => {
    const category = getCategory(card.category)
    if (!category?.indexable) throw new Error(`lib/gift-guides: "${card.category}" (${guide.slug}) is not an indexable catalog category`)
    return { ...card, path: categoryPath(category) }
  })
}
