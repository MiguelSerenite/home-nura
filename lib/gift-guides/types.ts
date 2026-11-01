import type { Lang } from '@/lib/i18n'
import type { FaqItem } from '@/lib/seo'

/** One gift idea: a catalog category hub, named and described for the occasion. */
export interface GiftGuideCard {
  /** Catalog category slug (lib/catalog/categories.ts): the card links its hub. */
  category: string
  name: string
  line: string
}

/**
 * A seasonal gift page of one market (T11): Sinterklaas for the Dutch
 * version, Boxing Day for Canada, Reyes for Spain. Evergreen URL, year in
 * the copy. Like the Black Friday pages: no prices, no discounts, no
 * urgency, no deal tied to a model (tests/lib/black-friday.test.ts).
 */
export interface GiftGuide {
  /** Route segment under /[lang]/ (app/[lang]/<slug>/page.tsx). */
  slug: string
  /** The only locale the page exists in. */
  lang: Lang
  /** The occasion, e.g. '2026-12-05' for pakjesavond. */
  eventDateISO: string
  /** Breadcrumb label. */
  label: string
  /** SEO title without the brand suffix (60 characters max). */
  metaTitle: string
  /** 155 characters max. */
  metaDescription: string
  h1: string
  intro: string
  categoriesTitle: string
  cards: readonly GiftGuideCard[]
  faq: readonly FaqItem[]
}
