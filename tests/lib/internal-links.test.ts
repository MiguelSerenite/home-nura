import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { sourceFiles } from '@/scripts/i18n/extract-locale'
import { findLocaleObjects, parseSource, type LiteralValue } from '@/scripts/i18n/locale-objects'
import { getAllArticles } from '@/lib/blog'
import { LANGUAGES, type Lang } from '@/lib/i18n'

// A reader stays in their version of the site: every internal link written
// in a locale's text points to that locale's prefix (/sv/… on /sv), never
// to another version's (/en/…). Writers working from the English text are
// the usual way such a link slips in.
const ROOT = process.cwd()
const SITE_LINK = new RegExp(`href=["'](?:https?://(?:www\\.)?homenura\\.com)?/(${LANGUAGES.join('|')})(?=[/"'#?])`, 'g')

/** Locale prefixes of the internal links in `text` that are not `lang`. */
function foreignPrefixes(text: string, lang: Lang): string[] {
  return [...text.matchAll(SITE_LINK)].map((m) => m[1]).filter((prefix) => prefix !== lang)
}

function strings(value: LiteralValue): string[] {
  if (typeof value === 'string') return [value]
  if (value === null || typeof value !== 'object') return []
  return (Array.isArray(value) ? value : Object.values(value)).flatMap(strings)
}

describe('internal links', () => {
  it('stay in the article’s own locale', () => {
    const offenders = getAllArticles().flatMap((article) =>
      LANGUAGES.flatMap((lang) => {
        const html = article.content[lang]
        return html ? foreignPrefixes(html, lang).map((prefix) => `${lang}/${article.slug}: link to /${prefix}/`) : []
      }),
    )
    expect(offenders).toEqual([])
  })

  it('stay in their locale in every per-locale text of the code base', () => {
    const files = ['app', 'components', 'lib'].flatMap((dir) => sourceFiles(join(ROOT, dir)))
    const offenders = files.flatMap((file) => {
      const { source } = parseSource(file)
      return findLocaleObjects(source, LANGUAGES, 'fr', 'fr').flatMap((obj) =>
        LANGUAGES.flatMap((lang) => {
          const value = obj.values[lang]
          const prefixes = value == null ? [] : strings(value).flatMap((text) => foreignPrefixes(text, lang))
          return prefixes.map((prefix) => `${relative(ROOT, file)} ${obj.path} ${lang}: link to /${prefix}/`)
        }),
      )
    })
    expect(offenders).toEqual([])
  })

  it('stay in their locale in the dictionaries', () => {
    const offenders = LANGUAGES.flatMap((lang) => {
      const text = readFileSync(join(ROOT, 'dictionaries', `${lang}.json`), 'utf8').replace(/\\"/g, '"')
      return foreignPrefixes(text, lang).map((prefix) => `${lang}.json: link to /${prefix}/`)
    })
    expect(offenders).toEqual([])
  })
})
