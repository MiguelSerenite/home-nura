import type { Lang } from '@/lib/i18n'
import type { MetaSiloSlug } from '@/lib/catalog'
import type { ProductVisualKind } from '@/lib/product-visual'
import type { FaqItem } from '@/lib/seo'

/** Localized copy of one Black Friday category page. */
export interface BlackFridayCategoryCopy {
  /** Short plural name: hub cards, breadcrumb, silo link blocks. */
  name: string
  h1: string
  /** SEO title without the brand suffix (60 characters max). */
  metaTitle: string
  /** 155 characters max. */
  metaDescription: string
  /** One line under the name on the hub card. */
  blurb: string
  intro: string
  faq: readonly FaqItem[]
}

/**
 * A model recommended on a Black Friday page. Never written by hand: it
 * points at a pick of an existing verdict (lib/blog/quick-answers.ts), so
 * the name, the reason and the Amazon target are the ones the site already
 * publishes. On the US and Canadian versions it goes through that market's
 * decision for the model and the market's own verdict (lib/market-models).
 * Enforced by tests/lib/black-friday.test.ts.
 */
export interface BlackFridayPickRef {
  /** Blog article whose verdict recommends the model. */
  article: string
  /** Model exactly as written in that verdict (French catalog title for catalog products). */
  model: string
  /** Only when the verdict's label would mislead out of its article (e.g. "Best overall" of another topic). */
  role?: Record<Lang, string>
}

export interface BlackFridayCategory {
  /** URL segment under /[lang]/black-friday/ (French, like every route of the site). */
  slug: string
  /** Existing category hubs covering the same products. */
  hubs: readonly { silo: MetaSiloSlug; category: string }[]
  /** Existing blog guides behind the picks, most useful first. */
  guides: readonly string[]
  picks: readonly BlackFridayPickRef[]
  /** Icon of the neutral card shown for a pick without an official photo (US and Canadian equivalents). */
  visual: ProductVisualKind
  copy: Record<Lang, BlackFridayCategoryCopy>
}
