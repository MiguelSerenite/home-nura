import { describe, it, expect } from 'vitest'
import { looksLikePrice, wordingProblem } from '@/lib/market-pages/claims'
import { MarketPageDataError, parseMarketPage, wordCount } from '@/lib/market-pages/validate'
import { rawDuel, rawGuide, rawNews } from './raw-pages'

type Raw = Record<string, unknown>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Loose = any

const parse = (raw: Raw, locale = String(raw.locale), slug = String(raw.slug)) => parseMarketPage(raw, { locale, slug })

/** The validation message for `raw`, after `edit` broke it. */
function errorOf(raw: Raw, edit: (page: Loose) => void, file?: { locale?: string; slug?: string }): string {
  edit(raw)
  try {
    parse(raw, file?.locale, file?.slug)
  } catch (error) {
    expect(error).toBeInstanceOf(MarketPageDataError)
    return (error as Error).message
  }
  throw new Error('expected a validation error')
}

describe('parseMarketPage: valid pages', () => {
  it('reads a guide, a duel and a news page', () => {
    const guide = parse(rawGuide())
    expect(guide).toMatchObject({ locale: 'en', type: 'guide', slug: 'best-air-fryer', path: '/guides/best-air-fryer', updated: '2026-11-01', published: '2026-11-01', isFixture: false })
    expect(guide.picks).toHaveLength(3)
    expect(guide.comparison.rowsAreModels).toBe(true)
    expect(guide.sections[0].blocks[0]).toEqual({ tag: 'p', children: ['Size follows the number of people.'] })

    const duel = parse(rawDuel())
    expect(duel.path).toBe('/vs/acme-a1-vs-acme-b2')
    expect(duel.comparison.rowsAreModels).toBe(false)

    const news = parse(rawNews())
    expect(news).toMatchObject({ path: '/news/acme-fryer-recall', picks: [], criteria: [], faq: [], independentTesters: [] })
    expect(news.comparison.rows).toEqual([])
  })

  it('ignores "_" comment keys and flags `_fixture` pages', () => {
    const raw = rawGuide()
    raw._note = 'checked by the editor'
    ;(raw.picks as Loose)[0]._source = 'press kit'
    expect(parse(raw).isFixture).toBe(false)
    raw._fixture = 'placeholder'
    expect(parse(raw).isFixture).toBe(true)
  })

  it('accepts a duel whose table has one row per pick', () => {
    const raw = rawDuel()
    raw.comparison = { columns: ['Model', 'Capacity'], rows: [['Acme Fryer A1', '6.5 L'], ['Fryer B2 Dual', '2 × 4 L']] }
    expect(parse(raw).comparison.rowsAreModels).toBe(true)
  })

  it('takes an optional first publication date', () => {
    const raw = rawGuide()
    raw.published = '2026-10-20'
    expect(parse(raw).published).toBe('2026-10-20')
  })
})

describe('parseMarketPage: file and shape', () => {
  it('names the file and the field in every message', () => {
    const message = errorOf(rawGuide(), (p) => (p.h1 = ''))
    expect(message).toBe('data/market-pages/en/best-air-fryer.json: h1: expected a non-empty string, got ""')
  })

  it('rejects unknown keys', () => {
    expect(errorOf(rawGuide(), (p) => (p.intro = 'x'))).toMatch(/: intro: unknown field \(allowed: locale, type, slug/)
    expect(errorOf(rawGuide(), (p) => (p.picks[0].price = '99'))).toMatch(/picks\[0\]\.price: unknown field/)
  })

  it('ties locale and slug to the file’s folder and name', () => {
    expect(errorOf(rawGuide(), () => {}, { locale: 'xx' })).toMatch(/"xx" is not a site locale/)
    expect(errorOf(rawGuide(), () => {}, { locale: 'de' })).toMatch(/locale: expected "de" \(the file's folder\)/)
    expect(errorOf(rawGuide(), () => {}, { slug: 'other' })).toMatch(/slug: expected "other" \(the file name\)/)
    expect(errorOf(rawGuide('en', 'Best-Air-Fryer'), () => {})).toMatch(/lowercase ASCII words/)
    expect(errorOf(rawGuide('it', 'friggitrice-ad-aria-più-venduta'), () => {})).toMatch(/lowercase ASCII words/)
    expect(errorOf(rawGuide(), (p) => (p.type = 'review'))).toMatch(/type: expected one of duel, guide, news/)
  })

  it('refuses a guide slug that a shared guide already uses', () => {
    for (const slug of ['airfryers', 'floor-care', 'probleme', 'acheteur']) {
      expect(errorOf(rawGuide('en', slug), () => {})).toMatch(new RegExp(`"${slug}" is a guide every locale already serves`))
    }
    // A duel or news page may take that word: its URL is /vs/… or /news/….
    expect(parse(rawDuel('en', 'airfryers')).path).toBe('/vs/airfryers')
  })

  it('checks dates', () => {
    expect(errorOf(rawGuide(), (p) => (p.updated = '01/11/2026'))).toMatch(/updated: expected a date written YYYY-MM-DD/)
    expect(errorOf(rawGuide(), (p) => (p.updated = '2026-02-30'))).toMatch(/updated: expected a date written YYYY-MM-DD/)
    expect(errorOf(rawGuide(), (p) => (p.updated = '2999-01-01'))).toMatch(/updated: "2999-01-01" is in the future/)
    expect(errorOf(rawGuide(), (p) => ((p.updated = '2026-10-01'), (p.published = '2026-10-05')))).toMatch(/published: 2026-10-05 is after the update date 2026-10-01/)
  })
})

describe('parseMarketPage: search snippet and answer', () => {
  it('holds metaTitle to 40–58 and metaDescription to 140–155 characters', () => {
    expect(errorOf(rawGuide(), (p) => (p.metaTitle = 'Too short'))).toMatch(/metaTitle: 9 characters, expected 40 to 58/)
    expect(errorOf(rawGuide(), (p) => (p.metaTitle = 'x'.repeat(59)))).toMatch(/metaTitle: 59 characters/)
    expect(errorOf(rawGuide(), (p) => (p.metaDescription = 'x'.repeat(139)))).toMatch(/metaDescription: 139 characters, expected 140 to 155/)
    expect(errorOf(rawGuide(), (p) => (p.metaDescription = 'x'.repeat(156)))).toMatch(/metaDescription: 156 characters/)
    // Accented letters count once.
    expect(parse({ ...rawGuide(), metaTitle: `${'é'.repeat(40)}` }).metaTitle).toHaveLength(40)
  })

  it('wants a 40–70 word answer', () => {
    expect(wordCount('One two — three, four.')).toBe(4)
    expect(errorOf(rawGuide(), (p) => (p.answer = 'Too short.'))).toMatch(/answer: 2 words, expected 40 to 70/)
    expect(errorOf(rawGuide(), (p) => (p.answer = 'word '.repeat(71)))).toMatch(/answer: 71 words/)
  })
})

describe('parseMarketPage: picks', () => {
  it('wants exactly two picks on a duel and three on a guide', () => {
    expect(errorOf(rawDuel(), (p) => p.picks.push(rawGuide().picks))).toMatch(/picks: a duel has 2 picks, got 3/)
    expect(errorOf(rawGuide(), (p) => p.picks.pop())).toMatch(/picks: a guide has 3 picks, got 2/)
    expect(errorOf(rawGuide(), (p) => (p.picks[1] = p.picks[0]))).toMatch(/picks: model "acme fryer a1" is listed twice/)
  })

  it('checks ASINs', () => {
    expect(errorOf(rawGuide(), (p) => (p.picks[0].asin = 'b0test'))).toMatch(/picks\[0\]\.asin: expected a 10-character ASIN/)
  })

  it('refuses prices and price specs next to Amazon products', () => {
    expect(errorOf(rawGuide(), (p) => (p.picks[0].why = 'Great value at $129.'))).toMatch(/picks\[0\]\.why: .* looks like a price/)
    expect(errorOf(rawGuide(), (p) => (p.picks[1].bestFor = 'budgets under 100 €'))).toMatch(/picks\[1\]\.bestFor: .* looks like a price/)
    expect(errorOf(rawGuide(), (p) => (p.picks[0].specs.Price = 'varies'))).toMatch(/picks\[0\]\.specs\.Price: no price spec/)
    expect(errorOf(rawGuide(), (p) => (p.picks[0].specs.Prezzo = 'n/d'))).toMatch(/specs\.Prezzo: no price spec/)
    expect(errorOf(rawGuide(), (p) => (p.picks[0].specs.Capacity = '6.5 L (£89)'))).toMatch(/specs\.Capacity: .* looks like a price/)
    expect(errorOf(rawGuide(), (p) => (p.comparison.rows[3][2] = '1 299 kr'))).toMatch(/comparison\.rows\[3\]\[2\]: .* looks like a price/)
    // Tester notes sit away from buy buttons: an energy cost they quote may stay.
    expect(parse({ ...rawGuide(), independentTesters: [{ name: 'OCU', url: 'https://www.ocu.org/x', note: '5 horas cuestan unos 0,49 € (24,59 c/kWh, 10/2026).' }] }).independentTesters).toHaveLength(1)
  })

  it('never takes specs or sources from Amazon', () => {
    expect(errorOf(rawGuide(), (p) => (p.picks[0].manufacturerUrl = 'https://www.amazon.it/dp/B0TESTAAA1'))).toMatch(
      /picks\[0\]\.manufacturerUrl: .* is an Amazon page/,
    )
    expect(errorOf(rawGuide(), (p) => (p.sources[1] = 'https://amzn.to/abc'))).toMatch(/sources\[1\]: .* is an Amazon page/)
    expect(errorOf(rawGuide(), (p) => (p.independentTesters[0].url = 'https://www.amazon.de/review'))).toMatch(/independentTesters\[0\]\.url: .* is an Amazon page/)
    expect(errorOf(rawGuide(), (p) => (p.sources[0] = 'http://acme.example/a1'))).toMatch(/sources\[0\]: expected an https URL/)
    expect(errorOf(rawGuide(), (p) => p.sources.push(p.sources[0]))).toMatch(/sources: source .* is listed twice/)
  })
})

describe('parseMarketPage: wording', () => {
  it('spots prices in any of the site’s currencies, not units', () => {
    for (const price of ['199 €', '€199', '£49.99', '$199', 'US$ 199', 'CA$249', '1 990 kr', '499 zł', 'CHF 99', '99 EUR', 'sotto i 100 euro']) {
      expect(looksLikePrice(price), price).toBe(true)
    }
    for (const spec of ['6,5 L', '1.700 W', '220–240 V', 'A++', '3.9 in (99 mm)', '5,000 Pa', '2 × 4 L', 'Krups Easy Fry', '0.4 qt']) {
      expect(looksLikePrice(spec), spec).toBe(false)
    }
  })

  it('refuses Amazon ratings, bestseller ranks and own-test claims anywhere', () => {
    expect(wordingProblem('4.6 stars on Amazon')).toMatch(/Amazon rating/)
    expect(wordingProblem('oltre 2.000 recensioni su Amazon')).toMatch(/Amazon rating/)
    expect(wordingProblem('#1 on Amazon')).toMatch(/Amazon rating/)
    expect(wordingProblem('la friggitrice più venduta')).toMatch(/bestseller/)
    expect(wordingProblem('ein Bestseller')).toMatch(/bestseller/)
    expect(wordingProblem('We tested both for a month.')).toMatch(/own-test/)
    expect(wordingProblem('Nei nostri test scalda in fretta.')).toMatch(/own-test/)
    expect(wordingProblem('Wir haben beide Geräte getestet.')).toMatch(/own-test/)
    // Saying we did not test is the disclosure, not a claim.
    expect(wordingProblem('Fonti: schede dei produttori; non abbiamo testato i prodotti.')).toBeNull()
    expect(wordingProblem('Wir haben die Geräte nicht selbst getestet.')).toBeNull()
    expect(wordingProblem('No hemos probado los aparatos.')).toBeNull()
    expect(wordingProblem('Non testato da noi. Nei nostri test scalda in fretta.')).toMatch(/own-test/)
    expect(wordingProblem('Stiftung Warentest rated it "gut" (2.1) in 10/2026.')).toBeNull()
    expect(wordingProblem('Rated 8.5/10 by RTINGS, Amazon carries it.')).toBeNull()
    expect(errorOf(rawGuide(), (p) => (p.sections[0].h2 = 'The best-selling fryer'))).toMatch(/sections\[0\]\.h2: .*bestseller wording/)
    expect(errorOf(rawGuide(), (p) => (p.faq[0].a = 'In our tests it was quieter.'))).toMatch(/faq\[0\]\.a: .*own-test claim/)
  })
})

describe('parseMarketPage: comparison table', () => {
  it('compares the guide’s own picks, 3 to 8 models', () => {
    expect(errorOf(rawGuide(), (p) => (p.comparison.rows = p.comparison.rows.slice(1)))).toMatch(/Acme Fryer A1 \(a pick\) has no row/)
    expect(errorOf(rawGuide(), (p) => p.comparison.rows.splice(0, 2))).toMatch(/comparison\.rows: a guide compares 3 to 8 models/)
    const nine = Array.from({ length: 6 }, (_, i) => [`Extra ${i}`, '1 L', '1 W'])
    expect(errorOf(rawGuide(), (p) => p.comparison.rows.push(...nine))).toMatch(/a guide compares 3 to 8 models .* got 10/)
    expect(errorOf(rawGuide(), (p) => p.comparison.rows[0].pop())).toMatch(/comparison\.rows\[0\]: expected 3 cells/)
    expect(errorOf(rawGuide(), (p) => p.comparison.rows.push(['Bolt Mini C3', '1', '2']))).toMatch(/row "bolt mini c3" is listed twice/)
  })

  it('matches column and row names to picks loosely, never ambiguously', () => {
    const raw = rawDuel()
    raw.comparison = {
      columns: ['Spec', 'Fryer A1 (Acme)', 'B2 Dual', 'Acme Fryer C3, for reference'],
      rows: [
        ['Capacity', '6.5 L', '2 × 4 L', '5 L'],
        ['Power', '1,700 W', '2,400 W', '1,500 W'],
      ],
    }
    expect(parse(raw).comparison.rowsAreModels).toBe(false)
  })

  it('compares the duel’s two picks, by spec or by model', () => {
    expect(errorOf(rawDuel(), (p) => (p.comparison.columns = ['Spec', 'Acme Fryer A1', 'Other Z9']))).toMatch(
      /comparison: a duel table has one spec per row with each pick heading a column after the first/,
    )
    expect(
      errorOf(rawDuel(), (p) => (p.comparison = { columns: ['Model', 'Capacity'], rows: [['Acme Fryer A1', '6.5 L'], ['Other Z9', '5 L']] })),
    ).toMatch(/comparison: a duel table/)
  })
})

describe('parseMarketPage: ranking, body, related', () => {
  it('wants criteria weights adding up to 100', () => {
    expect(errorOf(rawGuide(), (p) => (p.criteria[0].weight = 35))).toMatch(/criteria: weights add up to 95, expected 100/)
    expect(errorOf(rawGuide(), (p) => (p.criteria[0].weight = 40.5))).toMatch(/criteria\[0\]\.weight: expected a whole number/)
    expect(errorOf(rawGuide(), (p) => (p.criteria = []))).toMatch(/criteria: expected at least 1 item/)
  })

  it('allows only p, ul, li, strong and em without attributes in section bodies', () => {
    expect(errorOf(rawGuide(), (p) => (p.sections[0].html = '<p>See <a href="/x">this</a></p>'))).toMatch(/sections\[0\]\.html: <a> at character 7 is not allowed/)
    expect(errorOf(rawGuide(), (p) => (p.sections[0].html = '<p class="lead">Hi</p>'))).toMatch(/attributes are not allowed/)
    expect(errorOf(rawGuide(), (p) => (p.sections[0].html = '<h3>Title</h3>'))).toMatch(/<h3> at character 0 is not allowed/)
  })

  it('wants FAQ and testers keys on duels and guides (testers may be empty), not on news', () => {
    expect(errorOf(rawGuide(), (p) => delete p.faq)).toMatch(/faq: expected an array/)
    expect(errorOf(rawDuel(), (p) => delete p.independentTesters)).toMatch(/independentTesters: expected an array/)
    expect(parse({ ...rawGuide(), independentTesters: [] }).independentTesters).toEqual([])
  })

  it('keeps related links inside the page’s locale, as site paths', () => {
    expect(errorOf(rawGuide(), (p) => (p.related = ['/fr/guides/airfryers']))).toMatch(/related\[0\]: "\/fr\/guides\/airfryers": expected a page of \/en/)
    expect(errorOf(rawGuide(), (p) => (p.related = ['https://homenura.com/en/guides/airfryers']))).toMatch(/expected a page of \/en/)
    expect(errorOf(rawGuide(), (p) => (p.related = ['/en/guides/airfryers/']))).toMatch(/without host, trailing slash/)
    expect(errorOf(rawGuide(), (p) => (p.related = ['/en/blog', '/en/blog']))).toMatch(/related: path "\/en\/blog" is listed twice/)
  })
})
