/**
 * Builds the Homenura product images from official manufacturer packshots.
 *
 *   npx tsx scripts/images/build-product-images.ts                 # every manifest entry
 *   npx tsx scripts/images/build-product-images.ts --fetch         # download missing raw files first
 *   npx tsx scripts/images/build-product-images.ts --only <id> …   # some entries (repeatable)
 *
 * Input
 *   data/product-images.json   provenance of each image (source page, image
 *                              URL, licence note, credit, raw file + SHA-256)
 *   .cache/product-images/raw/ the downloaded packshots, gitignored: only the
 *                              manifest and the processed files are committed
 *
 * Output (public/images/products/, committed)
 *   {id}-{400|800|1200}.{avif,webp}   square composition
 *   {id}-pin.{jpg,webp}               1000×1500 vertical variant (Pinterest)
 *   {id} is the brand + model slug of the manifest entry.
 *
 * Composition: soft olive gradient (site palette), a rounded card with a thin
 * border and a soft shadow, the packshot centred in the card, and the
 * homenura wordmark small in the bottom-right corner, outside the card. No
 * text, no price, no claim.
 *
 * The product itself is never edited: the packshot is only trimmed (uniform
 * border of its own background), scaled and placed. Packshots on an opaque
 * background get a card filled with that same background colour, so nothing
 * is cut out or recoloured; transparent ones sit on a white card.
 *
 * Deterministic and idempotent: same raw files + same pinned sharp version
 * (package.json) = byte-identical outputs, and a file is only rewritten when
 * its bytes change. A raw file whose SHA-256 differs from the manifest stops
 * the build (update the manifest on purpose). An entry whose raw file is
 * missing is skipped when its outputs already exist (fresh clone), and is an
 * error otherwise. Outputs of ids no longer in the manifest are deleted.
 */
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import sharp from 'sharp'
import manifest from '../../data/product-images.json'
import type { GalleryImageEntry, ProductImageEntry } from '../../lib/product-images'
import {
  PRODUCT_GALLERY_WIDTHS,
  PRODUCT_PHOTO_FORMATS,
  PRODUCT_PHOTO_WIDTHS,
  PRODUCT_PIN,
  productGalleryPath,
  productGalleryStem,
  productPhotoPath,
  productPinPath,
} from '../../lib/product-photo'

const ROOT = join(__dirname, '..', '..')
const RAW_DIR = join(ROOT, '.cache', 'product-images', 'raw')
const PUBLIC_DIR = join(ROOT, 'public')
const OUT_DIR = join(PUBLIC_DIR, 'images', 'products')
const WORDMARK = join(PUBLIC_DIR, 'logo-header.png')

// Site palette (app/globals.css): brand-50, brand-100, brand-200, brand-800.
const PALETTE = { light: '#f8f8ef', mid: '#eeefd7', deep: '#dcdfae', shadow: '#3f4221', white: '#ffffff' }

/** Proportions of the composition, relative to its width. */
const LAYOUT = {
  margin: 0.055,
  /** Extra space under the card for the wordmark. */
  footer: 0.065,
  radius: 0.035,
  /** Space between the card edge and the product, relative to the card width. */
  padding: 0.085,
  wordmarkHeight: 0.026,
  shadowBlur: 0.012,
  shadowOffset: 0.008,
  border: 0.0016,
}

const TRIM_THRESHOLD = 12
const ENCODE = {
  webp: { quality: 82, effort: 6 },
  avif: { quality: 55, effort: 5 },
  jpg: { quality: 84, mozjpeg: true },
}

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36'

type Rgb = { r: number; g: number; b: number }

interface Options {
  fetch: boolean
  only: Set<string>
}

function parseArgs(argv: string[]): Options {
  const only = new Set<string>()
  argv.forEach((arg, i) => {
    if (arg === '--only' && argv[i + 1]) only.add(argv[i + 1])
  })
  return { fetch: argv.includes('--fetch'), only }
}

const sha256 = (buffer: Buffer) => createHash('sha256').update(buffer).digest('hex')
const hex = ({ r, g, b }: Rgb) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`

/** Background SVG: gradient, card shadow and card (filled with the packshot's own background). */
function frameSvg(width: number, height: number, card: { x: number; y: number; w: number; h: number }, fill: string): Buffer {
  const r = Math.round(width * LAYOUT.radius)
  const blur = (width * LAYOUT.shadowBlur).toFixed(2)
  const dy = (width * LAYOUT.shadowOffset).toFixed(2)
  const stroke = Math.max(1, width * LAYOUT.border).toFixed(2)
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${PALETTE.light}"/>
      <stop offset="0.55" stop-color="${PALETTE.mid}"/>
      <stop offset="1" stop-color="${PALETTE.deep}"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="125%">
      <feDropShadow dx="0" dy="${dy}" stdDeviation="${blur}" flood-color="${PALETTE.shadow}" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="${card.x}" y="${card.y}" width="${card.w}" height="${card.h}" rx="${r}" ry="${r}" fill="${fill}" stroke="${PALETTE.mid}" stroke-width="${stroke}" filter="url(#shadow)"/>
</svg>`,
  )
}

/** The packshot's background: white when transparent, else its corner colour. */
async function backgroundOf(raw: Buffer): Promise<{ transparent: boolean; color: Rgb }> {
  const { data } = await sharp(raw).ensureAlpha().extract({ left: 0, top: 0, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true })
  const [r, g, b, a] = data
  return a < 255 ? { transparent: true, color: { r: 255, g: 255, b: 255 } } : { transparent: false, color: { r, g, b } }
}

/**
 * Trims the packshot's uniform border (transparent or its background
 * colour); the product's pixels are untouched. `edgeInset` first drops a
 * crop artefact on the source's own outer edge (manifest, per entry).
 */
async function trimmed(raw: Buffer, edgeInset = 0): Promise<{ buffer: Buffer; width: number; height: number }> {
  const upright = await sharp(raw).rotate().png().toBuffer({ resolveWithObject: true })
  const inset = edgeInset > 0
    ? await sharp(upright.data)
        .extract({ left: edgeInset, top: edgeInset, width: upright.info.width - 2 * edgeInset, height: upright.info.height - 2 * edgeInset })
        .png()
        .toBuffer()
    : upright.data
  const { data, info } = await sharp(inset).trim({ threshold: TRIM_THRESHOLD }).png().toBuffer({ resolveWithObject: true })
  return { buffer: data, width: info.width, height: info.height }
}

async function wordmark(height: number): Promise<{ buffer: Buffer; width: number }> {
  const { data, info } = await sharp(WORDMARK).trim().resize({ height, kernel: 'lanczos3' }).png().toBuffer({ resolveWithObject: true })
  return { buffer: data, width: info.width }
}

/** One composition, as a lossless PNG buffer, ready to encode. */
async function compose(
  product: { buffer: Buffer; width: number; height: number },
  background: { transparent: boolean; color: Rgb },
  width: number,
  height: number,
): Promise<Buffer> {
  const margin = Math.round(width * LAYOUT.margin)
  const footer = Math.round(width * LAYOUT.footer)
  const card = { x: margin, y: margin, w: width - 2 * margin, h: height - 2 * margin - footer }
  const padding = Math.round(card.w * LAYOUT.padding)
  const box = { w: card.w - 2 * padding, h: card.h - 2 * padding }
  const scale = Math.min(box.w / product.width, box.h / product.height)
  const pw = Math.max(1, Math.round(product.width * scale))
  const ph = Math.max(1, Math.round(product.height * scale))
  const resized = await sharp(product.buffer).resize(pw, ph, { kernel: 'lanczos3', fit: 'fill' }).png().toBuffer()

  const mark = await wordmark(Math.max(8, Math.round(width * LAYOUT.wordmarkHeight)))
  const markTop = card.y + card.h + Math.round((height - card.y - card.h - Math.round(width * LAYOUT.wordmarkHeight)) / 2)

  return sharp(frameSvg(width, height, card, hex(background.color)))
    .composite([
      { input: resized, left: card.x + Math.round((card.w - pw) / 2), top: card.y + Math.round((card.h - ph) / 2) },
      { input: mark.buffer, left: card.x + card.w - mark.width, top: markTop },
    ])
    .png()
    .toBuffer()
}

/** Writes only when the bytes change, so re-runs leave the tree untouched. */
function writeIfChanged(path: string, buffer: Buffer): boolean {
  if (existsSync(path) && readFileSync(path).equals(buffer)) return false
  writeFileSync(path, buffer)
  return true
}

function galleryOutputsOf(stem: string): string[] {
  return PRODUCT_GALLERY_WIDTHS.flatMap((w) => PRODUCT_PHOTO_FORMATS.map((f) => join(PUBLIC_DIR, productGalleryPath(stem, w, f))))
}

/** Every file an entry produces: framed squares, Pinterest variant, gallery photos. */
function outputsOf(entry: ProductImageEntry): string[] {
  return [
    ...PRODUCT_PHOTO_WIDTHS.flatMap((w) => PRODUCT_PHOTO_FORMATS.map((f) => join(PUBLIC_DIR, productPhotoPath(entry.id, w, f)))),
    ...PRODUCT_PIN.formats.map((f) => join(PUBLIC_DIR, productPinPath(entry.id, f))),
    ...(entry.gallery ?? []).flatMap((_, i) => galleryOutputsOf(productGalleryStem(entry.id, i + 1))),
  ]
}

async function fetchRaw(label: string, source: Pick<ProductImageEntry, 'imageUrl' | 'sourceUrl' | 'rawSha256'>, path: string): Promise<void> {
  const response = await fetch(source.imageUrl, { headers: { 'User-Agent': USER_AGENT, Referer: source.sourceUrl } })
  if (!response.ok) throw new Error(`${label}: download failed (${response.status}) ${source.imageUrl}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  // Some CDNs re-encode on the fly: keep the file only when it is the one the manifest describes.
  if (sha256(buffer) !== source.rawSha256) {
    throw new Error(`${label}: downloaded file differs from the manifest (SHA-256); check the source and update the manifest on purpose`)
  }
  writeFileSync(path, buffer)
}

/**
 * A gallery photo, unaltered: only rotated upright, scaled down (never up)
 * and re-encoded. No frame, no crop: the layout decides how it is shown.
 */
async function buildGallery(entry: ProductImageEntry, image: GalleryImageEntry, n: number, options: Options): Promise<boolean> {
  const stem = productGalleryStem(entry.id, n)
  const rawPath = join(RAW_DIR, image.rawFile)
  if (!existsSync(rawPath) && options.fetch) await fetchRaw(stem, image, rawPath)
  if (!existsSync(rawPath)) {
    if (galleryOutputsOf(stem).every((p) => existsSync(p))) return false
    throw new Error(`${stem}: raw file missing (${image.rawFile}); run with --fetch`)
  }
  const raw = readFileSync(rawPath)
  if (sha256(raw) !== image.rawSha256) throw new Error(`${stem}: raw file SHA-256 differs from the manifest`)

  let changed = false
  for (const width of PRODUCT_GALLERY_WIDTHS) {
    const png = await sharp(raw)
      .rotate()
      .resize({ width, withoutEnlargement: true, kernel: 'lanczos3' })
      .flatten({ background: PALETTE.white })
      .png()
      .toBuffer()
    changed = writeIfChanged(join(PUBLIC_DIR, productGalleryPath(stem, width, 'webp')), await sharp(png).webp(ENCODE.webp).toBuffer()) || changed
    changed = writeIfChanged(join(PUBLIC_DIR, productGalleryPath(stem, width, 'avif')), await sharp(png).avif(ENCODE.avif).toBuffer()) || changed
  }
  return changed
}

async function build(entry: ProductImageEntry, options: Options): Promise<'built' | 'unchanged' | 'kept'> {
  let galleryChanged = false
  for (const [i, image] of (entry.gallery ?? []).entries()) {
    galleryChanged = (await buildGallery(entry, image, i + 1, options)) || galleryChanged
  }
  const rawPath = join(RAW_DIR, entry.rawFile)
  if (!existsSync(rawPath) && options.fetch) await fetchRaw(entry.id, entry, rawPath)
  if (!existsSync(rawPath)) {
    if (outputsOf(entry).every((p) => existsSync(p))) return galleryChanged ? 'built' : 'kept'
    throw new Error(`${entry.id}: raw file missing (${entry.rawFile}); run with --fetch`)
  }
  const raw = readFileSync(rawPath)
  if (sha256(raw) !== entry.rawSha256) throw new Error(`${entry.id}: raw file SHA-256 differs from the manifest`)

  const background = await backgroundOf(raw)
  const product = await trimmed(raw, entry.edgeInset)
  let changed = false

  for (const width of PRODUCT_PHOTO_WIDTHS) {
    const png = await compose(product, background, width, width)
    changed = writeIfChanged(join(PUBLIC_DIR, productPhotoPath(entry.id, width, 'webp')), await sharp(png).webp(ENCODE.webp).toBuffer()) || changed
    changed = writeIfChanged(join(PUBLIC_DIR, productPhotoPath(entry.id, width, 'avif')), await sharp(png).avif(ENCODE.avif).toBuffer()) || changed
  }
  const pin = await compose(product, background, PRODUCT_PIN.width, PRODUCT_PIN.height)
  changed = writeIfChanged(join(PUBLIC_DIR, productPinPath(entry.id, 'jpg')), await sharp(pin).flatten({ background: PALETTE.white }).jpeg(ENCODE.jpg).toBuffer()) || changed
  changed = writeIfChanged(join(PUBLIC_DIR, productPinPath(entry.id, 'webp')), await sharp(pin).webp(ENCODE.webp).toBuffer()) || changed
  return changed || galleryChanged ? 'built' : 'unchanged'
}

/** Deletes image files that no manifest entry produces any more. */
function prune(entries: readonly ProductImageEntry[]): string[] {
  const expected = new Set(entries.flatMap(outputsOf).map((path) => basename(path)))
  return readdirSync(OUT_DIR).filter((name) => {
    if (expected.has(name) || !['.avif', '.webp', '.jpg'].includes(extname(name))) return false
    unlinkSync(join(OUT_DIR, name))
    return true
  })
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2))
  const entries = (manifest.images as ProductImageEntry[]).filter((e) => options.only.size === 0 || options.only.has(e.id))
  if (options.only.size > 0 && entries.length !== options.only.size) {
    throw new Error(`unknown id in --only: ${[...options.only].filter((id) => !entries.some((e) => e.id === id)).join(', ')}`)
  }
  mkdirSync(OUT_DIR, { recursive: true })
  mkdirSync(RAW_DIR, { recursive: true })

  const counts = { built: 0, unchanged: 0, kept: 0 }
  for (const entry of entries) {
    const result = await build(entry, options)
    counts[result] += 1
    console.log(`${result.padEnd(9)} ${entry.id}`)
  }
  const removed = options.only.size === 0 ? prune(manifest.images as ProductImageEntry[]) : []
  removed.forEach((name) => console.log(`removed   ${name}`))
  console.log(`\n${counts.built} built, ${counts.unchanged} unchanged, ${counts.kept} kept (no raw file), ${removed.length} removed`)
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
