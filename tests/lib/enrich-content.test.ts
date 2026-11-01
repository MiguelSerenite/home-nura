import { describe, it, expect } from 'vitest'
import { getAllArticles, getArticleBySlug } from '@/lib/blog'
import { getArticleAffiliateModels, type ArticleAffiliateModel } from '@/lib/blog/article-products'
import { enrichArticleHtml, escapeHtml } from '@/lib/blog/enrichContent'
import { LANGUAGES } from '@/lib/i18n'

const model = (name: string, extra: Partial<ArticleAffiliateModel> = {}): ArticleAffiliateModel => ({
  name,
  label: name,
  url: `https://www.amazon.fr/s?k=${encodeURIComponent(name)}&tag=homenuraen05-21`,
  cited: true,
  ...extra,
})

const inlineModels = (html: string) => [...html.matchAll(/data-aff-surface="inline" data-aff-model="([^"]*)"/g)].map((m) => m[1])
const tableModels = (html: string) => [...html.matchAll(/data-aff-surface="table" data-aff-model="([^"]*)"/g)].map((m) => m[1])

const ARTICLE = [
  '<p>Intro : le Levoit Core 300S est notre choix.</p>',
  '<h2>Section 1</h2><p>Le Levoit Core 300S filtre bien.</p>',
  '<h2>Section 2</h2><p>Le Blueair Blue Pure 411i Max est silencieux.</p>',
  '<h2>Section 3</h2><p>Le Levoit Core 300S consomme peu.</p>',
  '<h2>Section 4</h2><p>Le Philips AC2939/10 est connecté.</p>',
  '<h2>Section 5</h2><p>Le Blueair Blue Pure 411i Max encore.</p>',
].join('')

describe('enrichArticleHtml: in-text CTAs', () => {
  const models = [model('Levoit Core 300S'), model('Blueair Blue Pure 411i Max'), model('Philips AC2939/10')]

  it('adds nothing when the article has no models', () => {
    expect(enrichArticleHtml(ARTICLE, [], 'fr')).toBe(ARTICLE)
  })

  it('adds nothing when the text names none of the article models', () => {
    expect(enrichArticleHtml(ARTICLE, [model('Xiaomi Smart Air Fryer Pro 4L')], 'fr')).toBe(ARTICLE)
  })

  it('places at most two CTAs, each model once, only after the mid-article block (2nd h2)', () => {
    const html = enrichArticleHtml(ARTICLE, models, 'fr')
    expect(inlineModels(html)).toEqual(['Levoit Core 300S', 'Philips AC2939/10'])
    // Nothing before the 2nd h2, where the product block is rendered.
    expect(html.indexOf('data-aff-surface')).toBeGreaterThan(html.indexOf('<h2>Section 2</h2>'))
  })

  it('gives the first CTA to the article top pick when it is named', () => {
    const html = enrichArticleHtml(ARTICLE, models, 'fr')
    // Section 2 names the Blueair, but the first CTA waits for the top pick (section 3).
    const section2 = html.slice(html.indexOf('<h2>Section 2</h2>'), html.indexOf('<h2>Section 3</h2>'))
    expect(section2).not.toContain('data-aff-surface')
    expect(inlineModels(html)[0]).toBe('Levoit Core 300S')
  })

  it('renders sponsored, new-tab, tracked links with an affiliate note', () => {
    const html = enrichArticleHtml(ARTICLE, models, 'de')
    const cta = html.match(/<aside[\s\S]*?<\/aside>/)![0]
    expect(cta).toContain('rel="sponsored nofollow noopener noreferrer"')
    expect(cta).toContain('target="_blank"')
    expect(cta).toContain('data-aff-surface="inline"')
    expect(cta).toContain('data-aff-placement="body_link"')
    expect(cta).toContain('Amazon-Affiliate-Link')
    expect(cta).toContain('Preis auf Amazon prüfen')
  })

  it('escapes model names and URLs', () => {
    const html = enrichArticleHtml(
      '<h2>A</h2><p>x</p><h2>B</h2><p>Le Black+Decker BHSM1610DSM.</p>',
      [model('Black+Decker BHSM1610DSM', { label: 'Black+Decker <BHSM1610DSM>', url: 'https://www.amazon.fr/s?k=a&tag=homenuraen05-21' })],
      'fr',
    )
    expect(html).toContain('Black+Decker &lt;BHSM1610DSM&gt;')
    expect(html).toContain('href="https://www.amazon.fr/s?k=a&amp;tag=homenuraen05-21"')
  })
})

describe('enrichArticleHtml: comparison tables', () => {
  const table = [
    '<h2>Tableau</h2><table><thead><tr><th>Modèle</th><th>Verdict</th></tr></thead><tbody>',
    '<tr><td><strong>Levoit Core 300S</strong></td><td>Le Levoit Core 300S est le meilleur choix pour une chambre de taille moyenne</td></tr>',
    '<tr><td>Coway Airmega 250</td><td>Bien</td></tr>',
    '<tr><td>Blueair Blue Pure 411i Max, Philips AC2939/10</td><td>Deux modèles</td></tr>',
    '<tr><td>Philips AC2939</td><td>Connecté</td></tr>',
    '</tbody></table>',
  ].join('')
  const models = [model('Levoit Core 300S', { asin: 'B000000001' }), model('Blueair Blue Pure 411i Max'), model('Philips AC2939/10')]
  const html = enrichArticleHtml(table, models, 'fr')

  it('links model-name cells to the model, once per table', () => {
    expect(tableModels(html)).toEqual(['Levoit Core 300S', 'Philips AC2939/10'])
    expect(html).toContain('<td><a href=')
    expect(html).toContain('data-aff-asin="B000000001"')
  })

  it('tags table links with the table placement', () => {
    const links = [...html.matchAll(/<a [^>]*>/g)].map((m) => m[0])
    expect(links).toHaveLength(2)
    for (const link of links) expect(link).toContain('data-aff-placement="table"')
  })

  it('leaves sentences, unknown models and cells naming two models unlinked', () => {
    expect(html).toContain('<td>Coway Airmega 250</td>')
    expect(html).toContain('<td>Blueair Blue Pure 411i Max, Philips AC2939/10</td>')
    expect(html).toContain('<td>Le Levoit Core 300S est le meilleur choix')
  })
})

// Enriches every article in every locale: slower than a unit test.
const ALL_ARTICLES_TIMEOUT_MS = 60_000

describe('enrichArticleHtml on the published articles', () => {
  const articles = getAllArticles()

  it('only links models of the article, never the same model twice in the text', () => {
    const problems = LANGUAGES.flatMap((lang) =>
      articles
        .filter((a) => a.content[lang])
        .flatMap((article) => {
          const models = getArticleAffiliateModels(article, lang)
          const names = new Set(models.map((m) => escapeHtml(m.name)))
          const html = enrichArticleHtml(article.content[lang], models, lang)
          const inline = inlineModels(html)
          const linked = [...inline, ...tableModels(html)]
          return [
            ...linked.filter((n) => !names.has(n)).map((n) => `${lang}/${article.slug}: foreign model ${n}`),
            ...(new Set(inline).size !== inline.length ? [`${lang}/${article.slug}: duplicate CTA`] : []),
            ...(inline.length > 2 ? [`${lang}/${article.slug}: ${inline.length} CTAs`] : []),
          ]
        }),
    )
    expect(problems).toEqual([])
   }, ALL_ARTICLES_TIMEOUT_MS)

  it('no longer puts an air fryer in the air purifier guide or an Easy Fry in the cooking-robot guide', () => {
    for (const [slug, forbidden] of [
      ['guide-purificateur-air-2026', /fryer|friteuse/i],
      ['robot-cuiseur-connecte-comparatif', /easy fry/i],
    ] as const) {
      const article = getArticleBySlug(slug)!
      const html = enrichArticleHtml(article.content.fr, getArticleAffiliateModels(article, 'fr'), 'fr')
      expect(inlineModels(html).length, slug).toBeGreaterThan(0)
      expect(inlineModels(html).some((n) => forbidden.test(n)), slug).toBe(false)
    }
  })

  it('opens the Moulinex review in-text CTAs with the Moulinex', () => {
    const article = getArticleBySlug('test-moulinex-easy-fry-max')!
    const html = enrichArticleHtml(article.content.fr, getArticleAffiliateModels(article, 'fr'), 'fr')
    expect(inlineModels(html)[0]).toBe('Moulinex Easy Fry Max 5L')
  })
})
