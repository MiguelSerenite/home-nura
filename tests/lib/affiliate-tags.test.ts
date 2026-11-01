import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { amazonMarket } from '@/lib/amazon'
import { amazonBlackFridayUrl, getBlackFridayPages, getBlackFridayPicks, primeTrialUrl } from '@/lib/black-friday'
import { getAllArticles } from '@/lib/blog'
import { getArticleAffiliateModels, getArticleRecommendations } from '@/lib/blog/article-products'
import { enrichArticleHtml } from '@/lib/blog/enrichContent'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { PROBLEMS } from '@/lib/catalog'
import { CATEGORY_GUIDES, getCategoryGuides } from '@/lib/catalog/category-guides'
import { getProblemBuyBox } from '@/lib/catalog/problem-buy-box'
import { FLOOR_CARE_GUIDES, FLOOR_CARE_MARKETS } from '@/lib/floor-care/config'
import { getFloorCareMarket } from '@/lib/floor-care/data'
import { pickAmazonUrl } from '@/lib/floor-care/picks'
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { getStaticProducts } from '@/lib/products'
import { getSmartKitchenProducts } from '@/lib/smart-kitchen-products'

// Every Amazon link goes to its locale market (lib/amazon.ts): amazon.it
// with the Italian tracking ID for Italian pages, amazon.fr with the
// locale's tracking ID elsewhere (Amazon Global Earning redirects foreign
// readers to their own store). All tracking IDs belong to the French
// Associates account; any other store or tag earns nothing.
const SOURCE_DIRS = ['app', 'components', 'lib', 'scripts', 'dictionaries']
const ROOT_FILES = ['proxy.ts', 'next.config.ts']
const TEXT_FILE = /\.(?:tsx?|jsx?|mjs|json|txt|md|sh)$/
// Tracking IDs of the account (homenura…, homavise…, amazonbe…) and any
// other "-21" Associates tag spelled next to "tag=".
const TAG_LITERAL = /\b(?:homenura|homavise|amazonbe)[a-z0-9]*-\d{2}\b|tag=[a-z0-9]+-\d{2}\b/g
// Store links only (image CDN hosts are banned by amazon-compliance.test.ts).
const STORE_LINK = /https?:\/\/(?:www\.)?amazon\.[a-z.]+/g
const SINGLE_SOURCE = 'lib/amazon.ts'
/** Tracking IDs listed in Associates Central ("Gérez vos ID de suivi") on 31/10/2026. */
const ACCOUNT_TAGS = new Set([
  'homenuraen05-21', 'amazonbe08-21',
  'homavisefr-21', 'homaviseuk-21', 'homavisede-21', 'homavisees-21', 'homaviseit-21',
  'homavisenl-21', 'homavisepl-21', 'homavisese-21', 'homaviseus-21', 'homaviseca-21',
])
/** Stores the site may link to: amazon.fr (Global Earning) and amazon.it (direct, verified). */
const LINKED_STORES = ['https://www.amazon.fr', 'https://www.amazon.it']

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

const singleSource = sources.find(({ path }) => path === SINGLE_SOURCE)!

function wrongStoreOrTag(url: string, lang: Lang, where: string): string[] {
  const parsed = new URL(url)
  const tag = parsed.searchParams.get('tag')
  const market = amazonMarket(lang)
  return [
    ...(parsed.origin === market.baseUrl ? [] : [`${where}: store ${parsed.origin}`]),
    ...(tag === market.tag ? [] : [`${where}: tag ${tag}`]),
  ]
}

describe('Amazon affiliate links in the source', () => {
  it('spell tracking IDs in lib/amazon.ts only', () => {
    const wrong = sources
      .filter(({ path }) => path !== SINGLE_SOURCE)
      .flatMap(({ path, text }) => [...text.matchAll(TAG_LITERAL)].map((m) => `${path}: ${m[0]}`))
    expect(wrong).toEqual([])
  })

  it('only use tracking IDs of the French Associates account', () => {
    const tags = [...singleSource.text.matchAll(TAG_LITERAL)].map((m) => m[0].replace(/^tag=/, ''))
    expect(tags.length).toBeGreaterThan(0)
    expect(tags.filter((tag) => !ACCOUNT_TAGS.has(tag))).toEqual([])
  })

  it('never hard-code an Amazon store outside lib/amazon.ts', () => {
    const wrong = sources
      .filter(({ path }) => path !== SINGLE_SOURCE)
      .flatMap(({ path, text }) => [...text.matchAll(STORE_LINK)].map((m) => `${path}: ${m[0]}`))
    expect(wrong).toEqual([])
  })

  it('link to amazon.fr and amazon.it only', () => {
    const stores = new Set([...singleSource.text.matchAll(STORE_LINK)].map((m) => m[0]))
    expect([...stores].filter((store) => !LINKED_STORES.includes(store))).toEqual([])
  })

  it('give every locale its own market', () => {
    const missing = LANGUAGES.filter((lang) => !amazonMarket(lang))
    expect(missing).toEqual([])
  })
})

// Enriches every article in every locale: slower than a unit test.
const ALL_ARTICLES_TIMEOUT_MS = 60_000

describe('generated Amazon links', () => {
  const articles = getAllArticles()

  it('catalog products link to the locale market', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      [...getStaticProducts(lang), ...getSmartKitchenProducts(lang)].flatMap((p) =>
        wrongStoreOrTag(p.url, lang, `${lang}/${p.asin}`),
      ),
    )
    expect(problems).toEqual([])
  })

  it('article blocks, quick answers and in-text links link to the locale market', () => {
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
          return [...blockUrls, ...verdictUrls, ...inTextUrls].flatMap((url) => wrongStoreOrTag(url, lang, where))
        }),
    )
    expect(problems).toEqual([])
  }, ALL_ARTICLES_TIMEOUT_MS)

  it('category picks link to the locale market', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      Object.keys(CATEGORY_GUIDES).flatMap((slug) =>
        getCategoryGuides(slug, lang).picks.flatMap((p) => wrongStoreOrTag(p.url, lang, `${lang}/${slug}`)),
      ),
    )
    expect(problems).toEqual([])
  })

  it('problem page buy boxes link to the locale market', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      PROBLEMS.flatMap((problem) =>
        (getProblemBuyBox(problem, lang)?.picks ?? []).flatMap((p) =>
          wrongStoreOrTag(p.url, lang, `${lang}/${problem.slug}`),
        ),
      ),
    )
    expect(problems).toEqual([])
  }, ALL_ARTICLES_TIMEOUT_MS)

  it('floor-care picks (US and Canada) link to the locale market', () => {
    const problems = FLOOR_CARE_MARKETS.flatMap((lang) =>
      FLOOR_CARE_GUIDES.flatMap((guide) =>
        getFloorCareMarket(lang)[guide].picks.flatMap((pick) => {
          const url = pickAmazonUrl(pick, lang)
          return url ? wrongStoreOrTag(url, lang, `${lang}/floor-care/${guide}/${pick.model}`) : []
        }),
      ),
    )
    expect(problems).toEqual([])
  })

  it('Black Friday picks, event page and Prime trial link to the locale market', () => {
    const problems = LANGUAGES.flatMap((lang) => [
      ...getBlackFridayPages(lang).flatMap(({ category }) =>
        getBlackFridayPicks(category, lang).flatMap((p) =>
          wrongStoreOrTag(p.url, lang, `${lang}/black-friday/${category.slug}`),
        ),
      ),
      ...[amazonBlackFridayUrl(lang), primeTrialUrl(lang)]
        .filter((url): url is string => url !== null)
        .flatMap((url) => wrongStoreOrTag(url, lang, `${lang}/black-friday`)),
    ])
    expect(problems).toEqual([])
  })
})
