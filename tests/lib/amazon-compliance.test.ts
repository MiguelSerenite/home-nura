import { describe, it, expect } from 'vitest'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import { AMAZON_ASSOCIATE_DISCLOSURE } from '@/lib/affiliate-disclosure'
import { getAllArticles } from '@/lib/blog'
import { getArticleRecommendations } from '@/lib/blog/article-products'
import { LANGUAGES } from '@/lib/i18n'
import { getStaticProducts } from '@/lib/products'
import { getSearchIndex } from '@/lib/search-index'
import { getSmartKitchenProducts } from '@/lib/smart-kitchen-products'

// Amazon Associates Operating Agreement, without access to Amazon's product
// API: no Amazon product images (no hotlink, no stored or cached copy), no
// product prices, and Amazon's exact disclosure wording. Breaking it can
// close the account and void every commission.

/** Amazon image CDN hosts (m.media-amazon.com, images-na.ssl-images-amazon.com, ...). */
const AMAZON_IMAGE_HOST = /media-amazon\.com|images-amazon\.com|ssl-images-amazon/i

const ROOT = process.cwd()
// tests/ and e2e/ are left out: they spell the hosts in order to ban them.
const SOURCE_DIRS = ['app', 'components', 'lib', 'scripts', 'dictionaries', 'public', 'types', 'docs', 'data']
const ROOT_FILES = ['proxy.ts', 'next.config.ts', 'CLAUDE.md', 'AGENTS.md', 'README.md']
const TEXT_FILE = /\.(?:tsx?|jsx?|mjs|cjs|json|txt|md|sh|svg|css|html|xml|rsc|body|meta)$/

function textFiles(dir: string): string[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return textFiles(path)
    return TEXT_FILE.test(name) ? [path] : []
  })
}

function filesReferencingAmazonImages(paths: string[]): string[] {
  return paths
    .filter((path) => AMAZON_IMAGE_HOST.test(readFileSync(path, 'utf8')))
    .map((path) => relative(ROOT, path))
}

// ~11,000 prerendered pages (66,000 files): reading them all takes ~40 s.
const BUILT_PAGES_TIMEOUT_MS = 180_000

const catalog = LANGUAGES.flatMap((lang) =>
  [...getStaticProducts(lang), ...getSmartKitchenProducts(lang)].map((product) => ({ lang, product })),
)

describe('no Amazon product images', () => {
  it('no source file references an Amazon image host', () => {
    const sources = [
      ...SOURCE_DIRS.flatMap((dir) => textFiles(join(ROOT, dir))),
      ...ROOT_FILES.map((file) => join(ROOT, file)).filter((path) => existsSync(path)),
    ]
    expect(sources.length).toBeGreaterThan(100)
    expect(filesReferencingAmazonImages(sources)).toEqual([])
  })

  // Built pages exist after `npm run build` (CI e2e job, local checks); the
  // e2e smoke suite checks the served HTML as well.
  const builtApp = join(ROOT, '.next', 'server', 'app')
  it.skipIf(!existsSync(builtApp))('no generated page references an Amazon image host', () => {
    const generated = [...textFiles(builtApp), ...textFiles(join(ROOT, '.next', 'static'))]
    expect(generated.length).toBeGreaterThan(0)
    expect(filesReferencingAmazonImages(generated)).toEqual([])
  }, BUILT_PAGES_TIMEOUT_MS)

  it('catalog products carry a visual (brand, model, category), with at most a self-hosted manufacturer photo', () => {
    for (const { lang, product } of catalog) {
      const where = `${lang}/${product.asin}`
      expect(product, where).not.toHaveProperty('image')
      expect(product, where).not.toHaveProperty('images')
      expect(product.visual.brand, where).not.toBe('')
      expect(product.visual.model, where).not.toBe('')
      expect(product.title, where).toContain(product.visual.brand)
      expect(product.visual.model, where).not.toContain(product.visual.brand)
      // Official photo from data/product-images.json (tests/lib/product-images.test.ts), served from /public.
      const photo = product.visual.photo
      if (photo) {
        expect(photo.id, where).toMatch(/^[a-z0-9-]+$/)
        expect(existsSync(join(ROOT, 'public', 'images', 'products', `${photo.id}-800.webp`)), where).toBe(true)
      }
    }
  })

  it('blog hero images never come from Amazon', () => {
    const amazonHeroes = getAllArticles()
      .flatMap((article) => article.images.map((image) => ({ slug: article.slug, src: image.src })))
      .filter(({ src }) => AMAZON_IMAGE_HOST.test(src))
    expect(amazonHeroes).toEqual([])
  })
})

describe('no Amazon prices', () => {
  it('catalog products expose no displayable price', () => {
    for (const { lang, product } of catalog) {
      expect(product, `${lang}/${product.asin}`).not.toHaveProperty('price')
    }
  })

  it('the search index and article product blocks carry no price or image', () => {
    const payloads = [
      ...LANGUAGES.flatMap((lang) => getSearchIndex(lang)),
      ...LANGUAGES.flatMap((lang) =>
        getAllArticles().flatMap((article) => {
          const recommendations = getArticleRecommendations(article, lang)
          return recommendations?.kind === 'catalog' ? recommendations.products : []
        }),
      ),
    ]
    expect(payloads.length).toBeGreaterThan(0)
    for (const payload of payloads) {
      expect(payload).not.toHaveProperty('price')
      expect(payload).not.toHaveProperty('image')
      expect(JSON.stringify(payload)).not.toMatch(AMAZON_IMAGE_HOST)
    }
  })
})

describe('Amazon Associates disclosure', () => {
  it('uses Amazon’s exact wording in every locale', () => {
    expect(AMAZON_ASSOCIATE_DISCLOSURE).toEqual({
      fr: 'En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.',
      de: 'Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.',
      en: 'As an Amazon Associate I earn from qualifying purchases.',
      it: 'In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti idonei.',
      es: 'Como Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.',
      nl: 'Als Amazon Associate verdien ik aan in aanmerking komende aankopen.',
    })
  })

  it('renders the statement first, then the optional affiliate-link label', () => {
    const html = renderToStaticMarkup(
      createElement(AmazonDisclosure, { lang: 'fr', note: 'Liens affiliés Amazon : commission sans surcoût pour vous.' }),
    )
    expect(html).toContain(
      `${AMAZON_ASSOCIATE_DISCLOSURE.fr} Liens affiliés Amazon : commission sans surcoût pour vous.`,
    )
  })

  it('is rendered by the site footer', () => {
    const footer = readFileSync(join(ROOT, 'components', 'ui', 'SiteFooter.tsx'), 'utf8')
    expect(footer).toMatch(/<AmazonDisclosure lang=\{lang\}/)
  })
})

describe('store-neutral Amazon CTAs', () => {
  // Links go to amazon.fr and Amazon sends each shopper to their own store,
  // so no label may name a specific store.
  const STORE_NAME = /\bAmazon\.(?:fr|de|co\.uk|es|it|nl|com|be|pl|se)\b/i

  it('buy buttons say "Amazon" in every locale', () => {
    const expected = {
      fr: 'Voir sur Amazon',
      de: 'Auf Amazon ansehen',
      en: 'View on Amazon',
      it: 'Vedi su Amazon',
      es: 'Ver en Amazon',
      nl: 'Bekijk op Amazon',
    }
    for (const lang of LANGUAGES) {
      const dict = JSON.parse(readFileSync(join(ROOT, 'dictionaries', `${lang}.json`), 'utf8'))
      expect(dict.buy_button, lang).toBe(expected[lang])
    }
  })

  it('no dictionary or component names a specific Amazon store', () => {
    const labels = [...textFiles(join(ROOT, 'dictionaries')), ...textFiles(join(ROOT, 'components'))]
    const offenders = labels
      .filter((path) => STORE_NAME.test(readFileSync(path, 'utf8')))
      .map((path) => relative(ROOT, path))
    expect(offenders).toEqual([])
  })
})
