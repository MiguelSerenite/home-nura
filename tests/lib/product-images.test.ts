import { describe, it, expect } from 'vitest'
import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'
import sitemap from '@/app/sitemap'
import { ARTICLE_MODELS } from '@/lib/blog/article-models'
import { QUICK_ANSWERS } from '@/lib/blog/quick-answers'
import { BLACK_FRIDAY_CATEGORIES } from '@/lib/black-friday'
import { LANGUAGES } from '@/lib/i18n'
import {
  PRODUCT_IMAGES,
  SKIPPED_PRODUCT_IMAGES,
  findProductImage,
  productPhoto,
  type ProductImageEntry,
} from '@/lib/product-images'
import {
  PRODUCT_GALLERY_ROLES,
  PRODUCT_GALLERY_WIDTHS,
  PRODUCT_PHOTO_CATEGORIES,
  PRODUCT_PHOTO_DIR,
  PRODUCT_PHOTO_FORMATS,
  PRODUCT_PHOTO_WIDTHS,
  PRODUCT_PIN,
  productGalleryPath,
  productGalleryStem,
  productPhotoCredits,
  productPhotoPath,
  productPinPath,
} from '@/lib/product-photo'
import { getStaticProducts, staticProducts } from '@/lib/products'
import { BASE_URL } from '@/lib/seo'
import { getSmartKitchenProducts, smartKitchenStaticProducts } from '@/lib/smart-kitchen-products'

// Official manufacturer images only (press kit or the brand's own product
// page), credited, self-hosted, never Amazon: see data/product-images.json
// and scripts/images/build-product-images.ts.

const PUBLIC = join(process.cwd(), 'public')
const OUTPUT_DIR = join(PUBLIC, PRODUCT_PHOTO_DIR)

/** Amazon store and image hosts (amazon.fr, m.media-amazon.com, images-na.ssl-images-amazon.com, amzn.to...). */
const AMAZON_HOST = /(^|\.)(amazon\.[a-z.]+|media-amazon\.com|images-amazon\.com|ssl-images-amazon\.com|amzn\.[a-z]+|a2z\.com)$/i

const outputsOf = (e: ProductImageEntry) => [
  ...PRODUCT_PHOTO_WIDTHS.flatMap((w) => PRODUCT_PHOTO_FORMATS.map((f) => productPhotoPath(e.id, w, f))),
  ...PRODUCT_PIN.formats.map((f) => productPinPath(e.id, f)),
  ...(e.gallery ?? []).flatMap((_, i) =>
    PRODUCT_GALLERY_WIDTHS.flatMap((w) => PRODUCT_PHOTO_FORMATS.map((f) => productGalleryPath(productGalleryStem(e.id, i + 1), w, f))),
  ),
]

/** Every model name the site data uses: catalog titles, article models, verdicts, Black Friday picks. */
const SITE_MODEL_NAMES = new Set<string>([
  ...[...staticProducts, ...smartKitchenStaticProducts].map((p) => p.title.fr),
  ...Object.values(ARTICLE_MODELS).flat(),
  ...Object.values(QUICK_ANSWERS).flatMap((qa) => qa.picks.map((p) => p.model)),
  ...BLACK_FRIDAY_CATEGORIES.flatMap((c) => c.picks.map((p) => p.model)),
])
const CATALOG = new Map([...staticProducts, ...smartKitchenStaticProducts].map((p) => [p.asin, p]))

describe('product image manifest', () => {
  it('lists images, and every entry carries its provenance and credit', () => {
    expect(PRODUCT_IMAGES.length).toBeGreaterThan(20)
    for (const e of PRODUCT_IMAGES) {
      expect(e.id, e.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      expect(e.brand.trim(), e.id).not.toBe('')
      expect(e.model.trim(), e.id).not.toBe('')
      expect(PRODUCT_PHOTO_CATEGORIES, e.id).toContain(e.category)
      expect(e.names.length, e.id).toBeGreaterThan(0)
      expect(['press-kit', 'product-page'], e.id).toContain(e.sourceType)
      expect(new URL(e.sourceUrl).protocol, e.id).toBe('https:')
      expect(new URL(e.imageUrl).protocol, e.id).toBe('https:')
      expect(e.licence.length, e.id).toBeGreaterThan(20)
      expect(e.retrievedAt, e.id).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Number.isNaN(Date.parse(e.retrievedAt)), e.id).toBe(false)
      expect(e.credit, e.id).toMatch(/^© \S/)
      expect(e.rawFile, e.id).toMatch(new RegExp(`^${e.id}\\.(png|jpg|webp)$`))
      expect(e.rawSha256, e.id).toMatch(/^[0-9a-f]{64}$/)
      expect(e.officialModel.trim(), e.id).not.toBe('')
    }
  })

  it('has unique ids, ASINs and model names', () => {
    const ids = PRODUCT_IMAGES.map((e) => e.id)
    const asins = PRODUCT_IMAGES.flatMap((e) => (e.asin ? [e.asin] : []))
    const names = PRODUCT_IMAGES.flatMap((e) => e.names)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(asins).size).toBe(asins.length)
    expect(new Set(names).size).toBe(names.length)
  })

  it('never takes an image from Amazon', () => {
    for (const e of PRODUCT_IMAGES) {
      expect(new URL(e.sourceUrl).hostname, e.id).not.toMatch(AMAZON_HOST)
      expect(new URL(e.imageUrl).hostname, e.id).not.toMatch(AMAZON_HOST)
    }
  })

  it('maps every entry to a model the site recommends', () => {
    for (const e of PRODUCT_IMAGES) {
      for (const name of e.names) {
        expect(SITE_MODEL_NAMES.has(name), `${e.id}: "${name}"`).toBe(true)
        expect(name.toLowerCase(), e.id).toContain(e.brand.toLowerCase())
      }
      if (e.asin) {
        const product = CATALOG.get(e.asin)
        expect(product, `${e.id}: ${e.asin}`).toBeDefined()
        expect(product?.brand.toLowerCase(), e.id).toBe(e.brand.toLowerCase())
        expect(e.names, e.id).toContain(product?.title.fr)
      }
    }
  })

  it('gives every gallery photo its provenance, credit and caption, never from Amazon', () => {
    for (const e of PRODUCT_IMAGES) {
      for (const [i, g] of (e.gallery ?? []).entries()) {
        const where = `${e.id} gallery ${i + 1}`
        expect(PRODUCT_GALLERY_ROLES, where).toContain(g.role)
        expect(['press-kit', 'product-page'], where).toContain(g.sourceType)
        expect(new URL(g.sourceUrl).hostname, where).not.toMatch(AMAZON_HOST)
        expect(new URL(g.imageUrl).hostname, where).not.toMatch(AMAZON_HOST)
        expect(g.licence.length, where).toBeGreaterThan(20)
        expect(g.retrievedAt, where).toMatch(/^\d{4}-\d{2}-\d{2}$/)
        expect(g.credit, where).toMatch(/^© \S/)
        expect(g.rawFile, where).toMatch(new RegExp(`^${e.id}-g${i + 1}\\.(png|jpg|webp)$`))
        expect(g.rawSha256, where).toMatch(/^[0-9a-f]{64}$/)
        for (const lang of ['fr', 'en', 'de'] as const) expect(g.caption[lang]?.trim(), `${where} ${lang}`).toBeTruthy()
      }
    }
  })

  it('keeps skipped models apart, each with a reason', () => {
    const ids = new Set(PRODUCT_IMAGES.map((e) => e.id))
    for (const s of SKIPPED_PRODUCT_IMAGES) {
      expect(ids.has(s.id), s.id).toBe(false)
      expect(s.reason.length, s.id).toBeGreaterThan(20)
    }
  })
})

describe('processed product images', () => {
  it('every manifest entry has its square and Pinterest variants', () => {
    for (const e of PRODUCT_IMAGES) {
      for (const path of outputsOf(e)) {
        const file = join(PUBLIC, path)
        expect(existsSync(file), path).toBe(true)
        expect(statSync(file).size, path).toBeGreaterThan(1000)
      }
    }
  })

  it('every processed file belongs to a manifest entry (provenance and credit)', () => {
    const expected = new Set(PRODUCT_IMAGES.flatMap((e) => outputsOf(e).map((p) => p.split('/').pop())))
    expect(readdirSync(OUTPUT_DIR).filter((name) => !expected.has(name))).toEqual([])
  })

  it('exports the announced dimensions', async () => {
    const sample = PRODUCT_IMAGES[0]
    for (const width of PRODUCT_PHOTO_WIDTHS) {
      const meta = await sharp(join(PUBLIC, productPhotoPath(sample.id, width, 'webp'))).metadata()
      expect([meta.width, meta.height]).toEqual([width, width])
    }
    const pin = await sharp(join(PUBLIC, productPinPath(sample.id, 'jpg'))).metadata()
    expect([pin.width, pin.height]).toEqual([PRODUCT_PIN.width, PRODUCT_PIN.height])
  })
})

describe('product photo lookup', () => {
  const entry = PRODUCT_IMAGES.find((e) => e.asin) as ProductImageEntry

  it('finds a model by ASIN or by its exact name, and nothing else', () => {
    expect(findProductImage({ asin: entry.asin })?.id).toBe(entry.id)
    expect(findProductImage({ name: entry.names[0] })?.id).toBe(entry.id)
    expect(findProductImage({ name: 'Unknown Brand X100' })).toBeUndefined()
    expect(findProductImage({})).toBeUndefined()
  })

  it('localizes the alt text and the credit in every language', () => {
    for (const lang of LANGUAGES) {
      const photo = productPhoto({ asin: entry.asin }, lang)
      expect(photo?.alt).toMatch(new RegExp(`^${entry.brand} .+ – .+ \\| Homenura$`))
      expect(photo?.credit).toMatch(/^(Photo|Foto|Zdjęcie) ?: © /)
      expect(photo?.pin).toBe(`${BASE_URL}${productPinPath(entry.id, 'jpg')}`)
    }
    expect(productPhoto({ asin: entry.asin }, 'fr')?.credit).toBe(`Photo : ${entry.credit}`)
  })

  it('merges thumbnail credits into one line', () => {
    const a = productPhoto({ asin: entry.asin }, 'fr')
    const other = PRODUCT_IMAGES.find((e) => e.credit !== entry.credit) as ProductImageEntry
    const b = productPhoto({ name: other.names[0] }, 'fr')
    expect(productPhotoCredits([a, undefined, a], 'fr')).toBe(`Photo : ${entry.credit}`)
    expect(productPhotoCredits([a, b], 'fr')).toBe(`Photos : ${entry.credit}, ${other.credit}`)
    expect(productPhotoCredits([undefined], 'de')).toBeNull()
  })

  it('gives catalog products their photo, self-hosted', () => {
    for (const lang of LANGUAGES) {
      const products = [...getStaticProducts(lang), ...getSmartKitchenProducts(lang)]
      const withPhoto = products.filter((p) => p.visual.photo)
      expect(withPhoto.length, lang).toBeGreaterThan(products.length / 2)
      for (const p of withPhoto) {
        expect(p.visual.photo?.id, p.asin).toBe(findProductImage({ asin: p.asin })?.id)
      }
    }
  })
})

describe('image sitemap', () => {
  const images = sitemap().flatMap((e) => e.images ?? [])

  it('lists the product photos, on the site host, pointing to existing files', () => {
    expect(images.length).toBeGreaterThan(100)
    for (const url of new Set(images)) {
      expect(url.startsWith(`${BASE_URL}${PRODUCT_PHOTO_DIR}/`), url).toBe(true)
      expect(existsSync(join(PUBLIC, url.slice(BASE_URL.length))), url).toBe(true)
    }
  })
})
