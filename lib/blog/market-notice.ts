/**
 * Availability notice of the US and Canadian versions of an article.
 *
 * Articles were written about models sold in Europe. When an article names
 * one that the reader's market does not sell (decision `substitute` or
 * `none`, lib/market-models), a short notice above the article body says
 * so, and points to the market's own picks in the verdict when the page
 * shows them. Those mentions stay unlinked (lib/blog/enrichContent.ts).
 */

import { ARTICLE_MODELS } from '@/lib/blog/article-models'
import type { ArticleAffiliateModel } from '@/lib/blog/article-products'
import { findMentions, modelKey, normalizeTokens } from '@/lib/blog/model-match'
import { QUICK_ANSWERS } from '@/lib/blog/quick-answers'
import { isNorthAmericanMarket, isSoldAsIs, marketDecision, type NorthAmericanMarket } from '@/lib/market-models'

const NOTICE: Readonly<Record<NorthAmericanMarket, { readonly withPicks: string; readonly withoutPicks: string }>> = {
  us: {
    withPicks: 'Some models discussed below are sold in Europe but not in the US. The picks above are the closest equivalents available here.',
    withoutPicks: 'Some models discussed below are sold in Europe but not in the US.',
  },
  ca: {
    withPicks: 'Some models discussed below are sold in Europe but not in Canada. The picks above are the closest equivalents available here.',
    withoutPicks: 'Some models discussed below are sold in Europe but not in Canada.',
  },
}

/** European models the article names: its model list and its verdict picks. */
function citedEuropeanModels(slug: string): readonly string[] {
  return [...(ARTICLE_MODELS[slug] ?? []), ...(QUICK_ANSWERS[slug]?.picks.map((p) => p.model) ?? [])]
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, ' ')

/** Does the article body name one of the models the market does not sell (catalog products of its topic)? */
function bodyNamesUnsoldModel(html: string, models: readonly ArticleAffiliateModel[]): boolean {
  if (!models.some((m) => m.unlinked)) return false
  const mentions = findMentions(normalizeTokens(stripTags(html)), models.map((m) => modelKey(m.name)))
  return mentions.some((mention) => models[mention.model].unlinked)
}

/**
 * The notice text for this article in the reader's market, or null (European
 * locales, or every model the article names is sold there).
 * `picksAbove`: the page shows the market's verdict above the notice.
 */
export function marketAvailabilityNotice(
  article: { slug: string },
  lang: string,
  { picksAbove, html, models }: { picksAbove: boolean; html: string; models: readonly ArticleAffiliateModel[] },
): string | null {
  if (!isNorthAmericanMarket(lang)) return null
  const citesUnsold = citedEuropeanModels(article.slug).some((model) => !isSoldAsIs(marketDecision(lang, model)))
  if (!citesUnsold && !bodyNamesUnsoldModel(html, models)) return null
  return picksAbove ? NOTICE[lang].withPicks : NOTICE[lang].withoutPicks
}
