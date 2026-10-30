import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { AMAZON_STORE_ID } from '@/lib/amazon'
import { AMAZON_BLACK_FRIDAY_URL, BLACK_FRIDAY_CATEGORIES, getBlackFridayPicks, primeTrialUrl } from '@/lib/black-friday'
import { getAllArticles } from '@/lib/blog'
import { getArticleAffiliateModels, getArticleRecommendations } from '@/lib/blog/article-products'
import { enrichArticleHtml } from '@/lib/blog/enrichContent'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { PROBLEMS } from '@/lib/catalog'
import { CATEGORY_GUIDES, getCategoryGuides } from '@/lib/catalog/category-guides'
import { getProblemBuyBox } from '@/lib/catalog/problem-buy-box'
import { LANGUAGES } from '@/lib/i18n'
import { getStaticProducts } from '@/lib/products'
import { getSmartKitchenProducts } from '@/lib/smart-kitchen-products'

// Every Amazon link goes to amazon.fr with the French store ID: Amazon
// Global Earning redirects foreign readers to their own store and credits
// that ID (see lib/amazon.ts). Any other store or tag earns nothing.
const STORE_ORIGIN = 'https://www.amazon.fr'
const SOURCE_DIRS = ['app', 'components', 'lib', 'scripts', 'dictionaries']
const ROOT_FILES = ['proxy.ts', 'next.config.ts']
const TEXT_FILE = /\.(?:tsx?|jsx?|mjs|json|txt|md|sh)$/
const TAG_LITERAL = /homenura[a-z0-9]*-\d{2}/g
// Store links only: image CDNs (m.media-amazon.com) are not stores.
const STORE_LINK = /https?:\/\/(?:www\.)?amazon\.[a-z.]+/g
const SINGLE_SOURCE = 'lib/amazon.ts'

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? files(path) : TEXT_FILE.test(name) ? [path] : []
  })
}

const sources = [
  ...SOURCE_DIRS.flatMap((d) => files(join(process.cwd(), d))),
  ...ROOT_FILES.map((f) => join(process.cwd(), f)),
].map((path) => ({ path: relative(process.cwd(), path), text: readFileSync(path, 'utf8') }))

function wrongStoreOrTag(url: string, where: string): string[] {
  const parsed = new URL(url)
  const tag = parsed.searchParams.get('tag')
  return [
    ...(parsed.origin === STORE_ORIGIN ? [] : [`${where}: store ${parsed.origin}`]),
    ...(tag === AMAZON_STORE_ID ? [] : [`${where}: tag ${tag}`]),
  ]
}

describe('Amazon affiliate links in the source', () => {
  it('only use the amazon.fr store ID', () => {
    const wrong = sources.flatMap(({ path, text }) =>
      [...text.matchAll(TAG_LITERAL)].filter((m) => m[0] !== AMAZON_STORE_ID).map((m) => `${path}: ${m[0]}`),
    )
    expect(wrong).toEqual([])
  })

  it('never hard-code another Amazon store', () => {
    const wrong = sources.flatMap(({ path, text }) =>
      [...text.matchAll(STORE_LINK)].filter((m) => !m[0].endsWith('amazon.fr')).map((m) => `${path}: ${m[0]}`),
    )
    expect(wrong).toEqual([])
  })

  it('define the store ID in one place', () => {
    const definedIn = sources.filter(({ text }) => text.includes(AMAZON_STORE_ID)).map(({ path }) => path)
    expect(definedIn).toEqual([SINGLE_SOURCE])
  })
})

// Enriches every article in every locale: slower than a unit test.
const ALL_ARTICLES_TIMEOUT_MS = 60_000

describe('generated Amazon links', () => {
  const articles = getAllArticles()

  it('catalog products link to amazon.fr in every locale', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      [...getStaticProducts(lang), ...getSmartKitchenProducts(lang)].flatMap((p) =>
        wrongStoreOrTag(p.url, `${lang}/${p.asin}`),
      ),
    )
    expect(problems).toEqual([])
  })

  it('article blocks, quick answers and in-text links link to amazon.fr in every locale', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      articles
        .filter((a) => a.content[lang])
        .flatMap((article) => {
          const where = `${lang}/${article.slug}`
          const rec = getArticleRecommendations(article, lang)
          const blockUrls = rec?.kind === 'catalog' ? rec.products.map((p) => p.url) : (rec?.models ?? []).map((m) => m.url)
          const verdictUrls = getQuickAnswer(article, lang)?.picks.map((p) => p.url) ?? []
          const html = enrichArticleHtml(article.content[lang], getArticleAffiliateModels(article, lang), lang)
          const inTextUrls = [...html.matchAll(/<a [^>]*data-aff-surface="[^"]+"[^>]*>/g)].map((m) =>
            m[0].match(/href="([^"]+)"/)![1].replace(/&amp;/g, '&'),
          )
          return [...blockUrls, ...verdictUrls, ...inTextUrls].flatMap((url) => wrongStoreOrTag(url, where))
        }),
    )
    expect(problems).toEqual([])
   }, ALL_ARTICLES_TIMEOUT_MS)

  it('category picks link to amazon.fr in every locale', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      Object.keys(CATEGORY_GUIDES).flatMap((slug) =>
        getCategoryGuides(slug, lang).picks.flatMap((p) => wrongStoreOrTag(p.url, `${lang}/${slug}`)),
      ),
    )
    expect(problems).toEqual([])
  })

  it('problem page buy boxes link to amazon.fr in every locale', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      PROBLEMS.flatMap((problem) =>
        (getProblemBuyBox(problem, lang)?.picks ?? []).flatMap((p) => wrongStoreOrTag(p.url, `${lang}/${problem.slug}`)),
      ),
    )
    expect(problems).toEqual([])
  })

  it('Black Friday picks, event page and Prime trial link to amazon.fr in every locale', () => {
    const problems = LANGUAGES.flatMap((lang) => [
      ...BLACK_FRIDAY_CATEGORIES.flatMap((category) =>
        getBlackFridayPicks(category, lang).flatMap((p) => wrongStoreOrTag(p.url, `${lang}/black-friday/${category.slug}`)),
      ),
      ...[AMAZON_BLACK_FRIDAY_URL, primeTrialUrl(lang)]
        .filter((url): url is string => url !== null)
        .flatMap((url) => wrongStoreOrTag(url, `${lang}/black-friday`)),
    ])
    expect(problems).toEqual([])
  })
})
