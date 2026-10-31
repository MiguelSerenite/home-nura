/**
 * Lists every per-locale object that still lacks a target locale, for
 * translation. Usage:
 *
 *   npx tsx scripts/i18n/extract-locale.ts pl <out-dir>
 *
 * Writes <out-dir>/units.json (literal values to translate, with their
 * French and English sources) and <out-dir>/manual.json (objects whose
 * values are code, e.g. template functions, to translate by hand).
 * Translations go back in with insert-locale.ts.
 */
import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileHash, findLocaleObjects, findLocaleTernaries, parseSource } from './locale-objects'

const ROOT = process.cwd()
const SOURCE_DIRS = ['app', 'components', 'lib']
/** Locales every per-locale object already carries; the new key goes after the last. */
export const SOURCE_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pl'] as const
export const ANCHOR_LANG = 'pl'

export function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return sourceFiles(path)
    return /\.tsx?$/.test(name) && !name.endsWith('.d.ts') ? [path] : []
  })
}

function main() {
  const [target, outDir] = process.argv.slice(2)
  if (!target || !outDir) throw new Error('usage: extract-locale.ts <target-locale> <out-dir>')

  const units: object[] = []
  const manual: object[] = []
  for (const file of SOURCE_DIRS.flatMap((d) => sourceFiles(join(ROOT, d)))) {
    const { text, source } = parseSource(file)
    const rel = relative(ROOT, file)
    const hash = fileHash(text)
    for (const obj of findLocaleObjects(source, SOURCE_LANGS, ANCHOR_LANG, target)) {
      if (obj.hasTarget) continue
      const id = `${rel}::${obj.index}`
      const line = source.getLineAndCharacterOfPosition(obj.anchor.getStart()).line + 1
      if (obj.values.fr == null || obj.values.en == null) {
        manual.push({ id, file: rel, line, path: obj.path })
        continue
      }
      units.push({ id, hash, path: obj.path, template: obj.anchorIsTemplate, fr: obj.values.fr, en: obj.values.en })
    }
    // Ternary chains (`lang === 'fr' ? … : lang === 'nl' ? … : 'English'`) get ids "file::t<n>".
    for (const chain of findLocaleTernaries(source, ANCHOR_LANG, target)) {
      if (chain.hasTarget) continue
      const id = `${rel}::t${chain.index}`
      if (chain.values.fr == null || chain.values.en == null) {
        const line = source.getLineAndCharacterOfPosition(chain.insertAt).line + 1
        manual.push({ id, file: rel, line, path: chain.path })
        continue
      }
      units.push({ id, hash, path: chain.path, template: false, fr: chain.values.fr, en: chain.values.en })
    }
  }

  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'units.json'), JSON.stringify(units, null, 1))
  writeFileSync(join(outDir, 'manual.json'), JSON.stringify(manual, null, 1))
  console.log(`${units.length} units to translate, ${manual.length} to translate by hand → ${outDir}`)
}

if (process.argv[1]?.endsWith('extract-locale.ts')) main()
