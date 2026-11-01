import { describe, expect, it } from 'vitest'
import { amazonMarketModelUrl, amazonProductUrl } from '@/lib/amazon'
import { BLACK_FRIDAY_CATEGORIES, getBlackFridayPicks } from '@/lib/black-friday'
import { getAllArticles, getArticleBySlug } from '@/lib/blog'
import { getArticleAffiliateModels, getArticleProducts, getArticleRecommendations } from '@/lib/blog/article-products'
import { enrichArticleHtml } from '@/lib/blog/enrichContent'
import { marketAvailabilityNotice } from '@/lib/blog/market-notice'
import { QUICK_ANSWERS, getQuickAnswer } from '@/lib/blog/quick-answers'
import { CATEGORY_GUIDES, getCategoryGuides } from '@/lib/catalog/category-guides'
import {
  NORTH_AMERICAN_MARKETS,
  isMarketName,
  isSoldAsIs,
  marketDecision,
  marketModelKeys,
  marketPicks,
  soldAsIsSources,
  type NorthAmericanMarket,
} from '@/lib/market-models'
import { catalogAsinOf } from '@/lib/market-models/offers'
import { findProductImage } from '@/lib/product-images'
import { getStaticProducts, staticProducts } from '@/lib/products'
import { getSearchIndex } from '@/lib/search-index'
import { getSmartKitchenProducts, smartKitchenStaticProducts } from '@/lib/smart-kitchen-products'

const TAG: Readonly<Record<NorthAmericanMarket, string>> = { us: 'homaviseus-21', ca: 'homaviseca-21' }
const CATALOG = [...staticProducts, ...smartKitchenStaticProducts]
const articles = getAllArticles()

/** amazon.fr product page or model search, with the market's tracking ID (Global Earning forwards it). */
function expectMarketLink(url: string, market: NorthAmericanMarket, where: string) {
  expect(url, where).toMatch(new RegExp(`^https://www\\.amazon\\.fr/(dp/[A-Z0-9]{10}\\?|s\\?k=[^&]+&)tag=${TAG[market]}$`))
}

/** Rule 2: catalog product sold as is → its amazon.fr page; anything else → search for the North-American name. */
function expectedUrl(name: string, market: NorthAmericanMarket): string {
  const catalogSource = soldAsIsSources(market, name).find((model) => catalogAsinOf(model))
  return catalogSource
    ? amazonProductUrl(catalogAsinOf(catalogSource)!, market)
    : amazonMarketModelUrl({ model: name, asin: null }, market)
}

/** The photo ids a North-American name may show: those of the European models that ARE that product. */
function allowedPhotoIds(name: string, market: NorthAmericanMarket): Set<string> {
  return new Set(
    soldAsIsSources(market, name).flatMap((model) => findProductImage({ asin: catalogAsinOf(model), name: model })?.id ?? []),
  )
}

interface ShownLink {
  where: string
  label: string
  url: string
  photoId?: string
}

/** Every product a US or Canadian page shows with a buy link (label = the name printed next to the button). */
function shownLinks(market: NorthAmericanMarket): ShownLink[] {
  const catalog = [...getStaticProducts(market), ...getSmartKitchenProducts(market)].map((p) => ({
    where: `catalog ${p.asin}`, label: p.title, url: p.url, photoId: p.visual.photo?.id,
  }))
  const perArticle = articles.flatMap((article) => {
    const verdict = getQuickAnswer(article, market)?.picks.map((p) => ({
      where: `verdict ${article.slug}`, label: p.model, url: p.url, photoId: p.photo?.id,
    })) ?? []
    const rec = getArticleRecommendations(article, market)
    const blocks = rec === null ? [] : rec.kind === 'catalog'
      ? rec.products.map((p) => ({ where: `product block ${article.slug}`, label: p.title, url: p.url, photoId: p.visual.photo?.id }))
      : rec.models.map((m) => ({ where: `model links ${article.slug}`, label: m.name, url: m.url, photoId: m.photo?.id }))
    const body = getArticleAffiliateModels(article, market)
      .filter((m) => !m.unlinked)
      .map((m) => ({ where: `body ${article.slug}`, label: m.label, url: m.url }))
    return [...verdict, ...blocks, ...body]
  })
  const categories = Object.keys(CATEGORY_GUIDES).flatMap((slug) =>
    getCategoryGuides(slug, market).picks.map((p) => ({ where: `category ${slug}`, label: p.model, url: p.url, photoId: p.photo?.id })),
  )
  const blackFriday = BLACK_FRIDAY_CATEGORIES.flatMap((c) =>
    getBlackFridayPicks(c, market).map((p) => ({ where: `black friday ${c.slug}`, label: p.model, url: p.url, photoId: p.photo?.id })),
  )
  return [...catalog, ...perArticle, ...categories, ...blackFriday]
}

describe.each(NORTH_AMERICAN_MARKETS)('%s: products and links follow the market decisions', (market) => {
  const links = shownLinks(market)

  it('shows only canonical North-American names as buy-link labels (no European-only model)', () => {
    expect(links.length).toBeGreaterThan(300)
    const offenders = links.filter((l) => !isMarketName(market, l.label)).map((l) => `${l.where}: ${l.label}`)
    expect(offenders).toEqual([])
  })

  it('links every product to amazon.fr with the market tracking ID, by the link rule', () => {
    for (const l of links) {
      expectMarketLink(l.url, market, `${l.where}: ${l.label}`)
      expect(l.url, `${l.where}: ${l.label}`).toBe(expectedUrl(l.label, market))
    }
  })

  it('shows a European photo only for the European product itself (never on a substitute)', () => {
    const offenders = links
      .filter((l) => l.photoId && !allowedPhotoIds(l.label, market).has(l.photoId))
      .map((l) => `${l.where}: ${l.label} shows ${l.photoId}`)
    expect(offenders).toEqual([])
  })

  it('lists on catalog surfaces only the products the market sells, with their own score', () => {
    const listed = [...getStaticProducts(market), ...getSmartKitchenProducts(market)]
    for (const p of listed) {
      const source = CATALOG.find((c) => c.asin === p.asin)!
      const decision = marketDecision(market, source.title.fr)
      expect(isSoldAsIs(decision), source.title.fr).toBe(true)
      expect(p.title).toBe(decision.name)
      expect(p.nuraScore).toBe(source.nuraScore)
    }
    const hidden = CATALOG.filter((c) => !isSoldAsIs(marketDecision(market, c.title.fr))).map((c) => c.asin)
    expect(hidden.length).toBeGreaterThan(0)
    const surfaces = [
      ...listed,
      ...getSearchIndex(market),
      ...articles.flatMap((a) => getArticleProducts(a, market).products),
    ]
    expect(surfaces.filter((p) => hidden.includes(p.asin)).map((p) => p.asin)).toEqual([])
  })

  it('fills the home top 3 with the next products the market sells', () => {
    const top3 = getStaticProducts(market).slice(0, 3)
    expect(top3).toHaveLength(3)
    for (const p of top3) expect(isSoldAsIs(marketDecision(market, CATALOG.find((c) => c.asin === p.asin)!.title.fr))).toBe(true)
  })

  it("uses the market's own verdict picks (model, role, reason, order)", () => {
    for (const slug of Object.keys(QUICK_ANSWERS)) {
      const article = getArticleBySlug(slug)!
      const verdict = getQuickAnswer(article, market)
      expect(verdict?.picks.map(({ model, role, why }) => ({ model, role, why })), `${market}/${slug}`).toEqual(
        marketPicks(market, slug).map(({ model, role, why }) => ({ model, role, why })),
      )
      expect(verdict?.question).toBe(QUICK_ANSWERS[slug].question[market])
    }
  })

  it('reuses the verdict picks on the category hubs', () => {
    expect(getCategoryGuides('thermostats', market).picks.map((p) => p.model)).toEqual(
      marketPicks(market, 'thermostat-connecte-pompe-chaleur').slice(0, 3).map((p) => p.model),
    )
  })

  it('drops "none" models from Black Friday and gives substitutes a neutral card', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const pick of getBlackFridayPicks(category, market)) {
        const sources = category.picks.filter((ref) => marketDecision(market, ref.model).name === pick.model)
        expect(sources.length, pick.model).toBeGreaterThan(0)
        if (!pick.photo) expect(pick.visual, pick.model).toMatchObject({ kind: category.visual })
      }
    }
  })

  it('names in the Black Friday copy only brands and models the page shows', () => {
    const unsold = marketModelKeys(market).filter((model) => !isSoldAsIs(marketDecision(market, model)))
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      const c = category.copy[market]
      const copy = [c.name, c.h1, c.metaTitle, c.metaDescription, c.blurb, c.intro, ...c.faq.flatMap((f) => [f.question, f.answer])]
      expect(unsold.filter((model) => copy.some((text) => text.includes(model))), category.slug).toEqual([])
      const picks = getBlackFridayPicks(category, market).map((p) => p.model)
      const blurbBrands = c.blurb.split(':')[0].split(/,\s*|\s+and\s+/)
      expect(blurbBrands.filter((brand) => !picks.some((model) => model.startsWith(brand))), `${category.slug}: ${c.blurb}`).toEqual([])
    }
  })

  it('keeps unsold models in article bodies unlinked', () => {
    for (const article of articles) {
      const models = getArticleAffiliateModels(article, market)
      const html = enrichArticleHtml(article.content[market] ?? '', models, market)
      const linkedModels = new Set([...html.matchAll(/data-aff-model="([^"]*)"/g)].map((m) => m[1].replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"')))
      const unsold = models.filter((m) => m.unlinked).map((m) => m.name)
      expect(unsold.filter((name) => linkedModels.has(name)), article.slug).toEqual([])
      for (const m of models) if (m.unlinked) expect(isSoldAsIs(marketDecision(market, m.name)), m.name).toBe(false)
    }
  })
})

describe('in-article links on the US and Canadian versions', () => {
  const xiaomi = getArticleBySlug('test-xiaomi-smart-air-fryer-pro')!

  it('leaves a substituted model as plain text and links a model the market sells', () => {
    const html = [
      '<p>Intro.</p><h2>A</h2><p>Text.</p>',
      '<h2>B</h2><p>The Xiaomi Smart Air Fryer Pro 4L is compact.</p>',
      '<h2>C</h2><p>The Philips Airfryer 3000 Series XL has a window.</p>',
      '<table><tr><td>Xiaomi Smart Air Fryer Pro 4L</td><td>Philips Airfryer 3000 Series XL</td></tr></table>',
    ].join('')
    const out = enrichArticleHtml(html, getArticleAffiliateModels(xiaomi, 'us'), 'us')
    expect(out).toContain('<td>Xiaomi Smart Air Fryer Pro 4L</td>')
    expect(out).not.toContain('data-aff-model="Xiaomi Smart Air Fryer Pro 4L"')
    expect(out).toContain('href="https://www.amazon.fr/dp/B0D9S9Y16Y?tag=homaviseus-21"')
    // The in-text button carries the North-American name.
    expect(out).toContain('Philips 3000 Series Airfryer with Window (NA331/00)</span>')
    expect(out).not.toContain('>Philips Airfryer 3000 Series XL</span>')
  })

  it('names a sold model by its North-American name in the "models mentioned" block', () => {
    const vacuum = getArticleBySlug('robot-aspirateur-poils-animaux')!
    const rec = getArticleRecommendations(vacuum, 'ca')
    expect(rec?.kind).toBe('models')
    const names = rec?.kind === 'models' ? rec.models.map((m) => m.name) : []
    expect(names).toContain('Dreame X40 Ultra')
    // Substituted in Canada: not "mentioned" under another product's name.
    expect(names).not.toContain('Roborock S8 MaxV Ultra')
    expect(names).not.toContain('Roborock Saros 20')
  })
})

describe('availability notice', () => {
  const notice = (slug: string, lang: string, picksAbove = true) => {
    const article = getArticleBySlug(slug)!
    return marketAvailabilityNotice(article, lang, {
      picksAbove,
      html: article.content[lang] ?? '',
      models: getArticleAffiliateModels(article, lang),
    })
  }

  it('says, on the US and Canadian versions, that some models are sold in Europe only', () => {
    expect(notice('test-xiaomi-smart-air-fryer-pro', 'us')).toBe(
      'Some models discussed below are sold in Europe but not in the US. The picks above are the closest equivalents available here.',
    )
    expect(notice('robot-aspirateur-poils-animaux', 'ca')).toBe(
      'Some models discussed below are sold in Europe but not in Canada. The picks above are the closest equivalents available here.',
    )
  })

  it('does not point to picks above when the page shows none', () => {
    expect(notice('aire-acondicionado-portatil-sin-tubo', 'us', false)).toBe(
      'Some models discussed below are sold in Europe but not in the US.',
    )
  })

  it('is never shown on European versions', () => {
    for (const lang of ['fr', 'en', 'de', 'it']) expect(notice('test-xiaomi-smart-air-fryer-pro', lang)).toBeNull()
  })

  it('is not shown when every model the article names is sold in the market', () => {
    const allSold = articles.find((a) => {
      const cited = [...(QUICK_ANSWERS[a.slug]?.picks.map((p) => p.model) ?? [])]
      return cited.length > 0 && cited.every((m) => isSoldAsIs(marketDecision('us', m))) && notice(a.slug, 'us') === null
    })
    expect(allSold).toBeDefined()
  })
})
