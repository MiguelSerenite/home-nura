/**
 * Image Validation Script for homenura.com
 *
 * Run with: npx ts-node scripts/validate-images.ts
 * Or:       npx tsx scripts/validate-images.ts
 *
 * RULES ENFORCED:
 * 1. No broken images (HTTP check on Amazon CDN)
 * 2. No duplicate image IDs within the same country array
 * 3. Every country must have at least 2 images per product
 * 4. All 6 countries (fr, de, en, es, it, nl) must be present
 * 5. No empty arrays
 */

import { staticProducts } from '../lib/products'

const LANGS = ['fr', 'de', 'en', 'es', 'it', 'nl'] as const

interface ValidationError {
  product: number
  asin: string
  lang: string
  type: 'broken' | 'duplicate' | 'missing_lang' | 'too_few' | 'empty'
  detail: string
}

// Extract image ID from full Amazon CDN URL
function extractId(url: string): string | null {
  const m = url.match(/images\/I\/([A-Za-z0-9+\-_]+L)\._AC_/)
  return m ? m[1] : null
}

async function checkImageLoads(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' })
    return res.ok && res.status === 200
  } catch {
    return false
  }
}

async function validate() {
  const errors: ValidationError[] = []
  let totalImages = 0
  let checkedImages = 0

  console.log('🔍 Validating product images...\n')

  for (let i = 0; i < staticProducts.length; i++) {
    const p = staticProducts[i]
    const productNum = i + 1
    console.log(`Product ${productNum}: ${p.asin}`)

    // Check all langs present
    for (const lang of LANGS) {
      const imgs = (p.images as Record<string, string[]>)[lang]

      if (!imgs) {
        errors.push({
          product: productNum, asin: p.asin, lang,
          type: 'missing_lang',
          detail: `Missing images for language "${lang}"`
        })
        continue
      }

      if (imgs.length === 0) {
        errors.push({
          product: productNum, asin: p.asin, lang,
          type: 'empty',
          detail: `Empty image array for "${lang}"`
        })
        continue
      }

      if (imgs.length < 2) {
        errors.push({
          product: productNum, asin: p.asin, lang,
          type: 'too_few',
          detail: `Only ${imgs.length} image(s) for "${lang}" — minimum is 2`
        })
      }

      // Check duplicates within same lang
      const ids = imgs.map(extractId).filter(Boolean) as string[]
      const seen = new Set<string>()
      for (const id of ids) {
        if (seen.has(id)) {
          errors.push({
            product: productNum, asin: p.asin, lang,
            type: 'duplicate',
            detail: `Duplicate image ID "${id}" in "${lang}"`
          })
        }
        seen.add(id)
      }

      totalImages += imgs.length

      // HTTP check each image (using SL500 which is what thumbnails use)
      for (const url of imgs) {
        checkedImages++
        const loads = await checkImageLoads(url.replace('SL1500', 'SL500'))
        if (!loads) {
          const id = extractId(url) || url
          errors.push({
            product: productNum, asin: p.asin, lang,
            type: 'broken',
            detail: `Broken image: ${id}`
          })
        }
      }
    }

    // Summary for this product
    const langCounts = LANGS.map(l => {
      const imgs = (p.images as Record<string, string[]>)[l]
      return `${l}:${imgs ? imgs.length : 0}`
    }).join(' ')
    console.log(`  ${langCounts}`)
  }

  // Report
  console.log('\n' + '='.repeat(60))
  console.log(`TOTAL: ${totalImages} images across ${staticProducts.length} products × ${LANGS.length} langs`)
  console.log(`CHECKED: ${checkedImages} images via HTTP`)

  if (errors.length === 0) {
    console.log('\n✅ ALL CHECKS PASSED — no broken images, no duplicates, all langs present\n')
    process.exit(0)
  } else {
    console.log(`\n❌ ${errors.length} ERROR(S) FOUND:\n`)
    for (const e of errors) {
      const icon = e.type === 'broken' ? '🔴' : e.type === 'duplicate' ? '🟡' : '🟠'
      console.log(`  ${icon} Product ${e.product} (${e.asin}) [${e.lang}] — ${e.type}: ${e.detail}`)
    }
    console.log('')
    process.exit(1)
  }
}

validate().catch(err => {
  console.error('Script error:', err)
  process.exit(1)
})
