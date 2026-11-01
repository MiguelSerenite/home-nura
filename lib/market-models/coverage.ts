/**
 * Coverage of the North-American market files: every European model the
 * site names must have a US and a Canadian decision, every verdict must
 * have the market's picks, and every Black Friday pick must resolve.
 *
 * Kept apart from ./data.ts because it reads the site's content (catalog,
 * article models, verdicts, Black Friday picks), which itself depends on
 * the market decisions. app/[lang]/blog/[slug]/page.tsx calls
 * assertMarketCoverage() in generateStaticParams, so a gap fails the build.
 */

import { BLACK_FRIDAY_CATEGORIES } from '@/lib/black-friday/categories'
import { allBlackFridayPickRefs } from '@/lib/black-friday/pick-refs'
import { ARTICLE_MODELS } from '@/lib/blog/article-models'
import { QUICK_ANSWERS } from '@/lib/blog/quick-answers'
import { staticProducts } from '@/lib/products'
import { smartKitchenStaticProducts } from '@/lib/smart-kitchen-products'
import {
  NORTH_AMERICAN_MARKETS,
  hasMarketDecision,
  marketDecision,
  marketModelsFile,
  marketPickSlugs,
  marketPicks,
  marketPicksFile,
  MarketDataError,
} from './index'

/** Every European model the site names, with where it is named. */
export function europeanModelReferences(): ReadonlyMap<string, readonly string[]> {
  const refs: readonly (readonly [string, string])[] = [
    ...[...staticProducts, ...smartKitchenStaticProducts].map((p) => [p.title.fr, `catalog ${p.asin}`] as const),
    ...Object.entries(ARTICLE_MODELS).flatMap(([slug, models]) => models.map((model) => [model, `ARTICLE_MODELS["${slug}"]`] as const)),
    ...Object.entries(QUICK_ANSWERS).flatMap(([slug, qa]) => qa.picks.map((pick) => [pick.model, `QUICK_ANSWERS["${slug}"]`] as const)),
    ...BLACK_FRIDAY_CATEGORIES.flatMap((c) => allBlackFridayPickRefs(c).map((ref) => [ref.model, `Black Friday "${c.slug}"`] as const)),
  ]
  return refs.reduce(
    (map, [model, where]) => new Map([...map, [model, [...(map.get(model) ?? []), where]]]),
    new Map<string, readonly string[]>(),
  )
}

export function findMarketCoverageProblems(): string[] {
  const references = europeanModelReferences()
  const verdicts = Object.keys(QUICK_ANSWERS)
  return NORTH_AMERICAN_MARKETS.flatMap((market) => {
    const missingDecisions = [...references]
      .filter(([model]) => !hasMarketDecision(market, model))
      .map(([model, where]) => `${marketModelsFile(market)}: no decision for "${model}" (named in ${where.slice(0, 3).join(', ')})`)
    const missingPicks = verdicts
      .filter((slug) => marketPicks(market, slug).length === 0)
      .map((slug) => `${marketPicksFile(market)}: no picks for the verdict of "${slug}" (lib/blog/quick-answers.ts)`)
    const orphanPicks = marketPickSlugs(market)
      .filter((slug) => !(slug in QUICK_ANSWERS))
      .map((slug) => `${marketPicksFile(market)}: "${slug}" has no verdict in lib/blog/quick-answers.ts`)
    const blackFriday = BLACK_FRIDAY_CATEGORIES.flatMap((category) =>
      allBlackFridayPickRefs(category).flatMap((ref) => {
        if (!hasMarketDecision(market, ref.model)) return []
        const { name } = marketDecision(market, ref.model)
        if (name === null || marketPicks(market, ref.article).some((p) => p.model === name)) return []
        return [`${marketPicksFile(market)}: Black Friday "${category.slug}" picks "${ref.model}", whose ${market} equivalent "${name}" is not a pick of "${ref.article}"`]
      }),
    )
    return [...missingDecisions, ...missingPicks, ...orphanPicks, ...blackFriday]
  })
}

/** Throws a MarketDataError listing every gap (called at build time). */
export function assertMarketCoverage(): void {
  const problems = findMarketCoverageProblems()
  if (problems.length > 0) throw new MarketDataError(`North-American market data is incomplete:\n${problems.join('\n')}`)
}
