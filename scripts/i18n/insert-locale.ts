/**
 * Writes translated values of a new locale back into the code base, right
 * after the anchor locale of each per-locale object. Usage:
 *
 *   npx tsx scripts/i18n/insert-locale.ts pl <units.json> <translations-dir>
 *
 * <translations-dir> holds JSON files (searched recursively) mapping unit
 * ids ("lib/x.ts::12") to values shaped like the French source. An object
 * is only written when its path and French value still match what
 * extract-locale.ts recorded, so edits made in between are never clobbered;
 * when earlier objects of the file were removed since the extraction, the
 * unit is found by that path and French value (locateUnit).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import ts from 'typescript'
import { ANCHOR_LANG, SOURCE_LANGS } from './extract-locale'
import { jsonFiles, propertyStyle, quoteString, serialize } from './literal-source'
import {
  findLocaleObjects,
  findLocaleTernaries,
  locateUnit,
  parseSource,
  type LiteralValue,
  type LocaleObject,
} from './locale-objects'

interface Unit {
  id: string
  path: string
  fr: LiteralValue
}

function insertion(obj: LocaleObject, source: ts.SourceFile, text: string, target: string, value: LiteralValue): string {
  const anchor = obj.anchor
  const style = propertyStyle(anchor, source, text)
  const name = ts.isStringLiteral(anchor.name)
    ? quoteString(target, anchor.name.getText(source).startsWith('"') ? '"' : "'")
    : target
  const props = (anchor.parent as ts.ObjectLiteralExpression).properties
  const previous = props[props.indexOf(anchor) - 1] ?? anchor.parent
  const anchorLine = source.getLineAndCharacterOfPosition(anchor.getStart(source)).line
  const previousLine = source.getLineAndCharacterOfPosition(previous.getStart(source)).line
  const inline = anchorLine === previousLine
  const rendered = `${name}: ${serialize(value, style, 0)}`
  return inline ? `, ${rendered}` : `,\n${style.indent}${rendered}`
}

function main() {
  const [target, unitsPath, dir] = process.argv.slice(2)
  if (!target || !unitsPath || !dir) throw new Error('usage: insert-locale.ts <target> <units.json> <translations-dir>')
  const units = new Map((JSON.parse(readFileSync(unitsPath, 'utf8')) as Unit[]).map((u) => [u.id, u]))
  const translations: Record<string, LiteralValue> = Object.assign(
    {},
    ...jsonFiles(dir).map((f) => JSON.parse(readFileSync(f, 'utf8'))),
  )

  const byFile = new Map<string, [string, LiteralValue][]>()
  for (const [id, value] of Object.entries(translations)) {
    const [file, index] = id.split('::')
    byFile.set(file, [...(byFile.get(file) ?? []), [index, value]])
  }

  let written = 0
  const problems: string[] = []
  for (const [file, entries] of byFile) {
    const { text, source } = parseSource(file)
    const objects = findLocaleObjects(source, SOURCE_LANGS, ANCHOR_LANG, target)
    const ternaries = findLocaleTernaries(source, ANCHOR_LANG, target)
    const edits: { at: number; insert: string }[] = []
    for (const [index, value] of entries) {
      const id = `${file}::${index}`
      const unit = units.get(id)
      if (index.startsWith('t')) {
        const chain = unit && locateUnit(ternaries, Number(index.slice(1)), unit)
        if (!unit) problems.push(`${id}: unknown unit`)
        else if (!chain) {
          problems.push(`${id}: source changed since extraction (${unit.path})`)
        } else if (chain.hasTarget) problems.push(`${id}: already has ${target}`)
        else if (typeof value !== 'string') problems.push(`${id}: ternary value must be a string`)
        else edits.push({ at: chain.insertAt, insert: `${chain.subject} === '${target}' ? ${quoteString(value, chain.quote)} : ` })
        continue
      }
      const obj = unit && locateUnit(objects, Number(index), unit)
      if (!unit) problems.push(`${id}: unknown unit`)
      else if (!obj) {
        problems.push(`${id}: source changed since extraction (${unit.path})`)
      } else if (obj.hasTarget) problems.push(`${id}: already has ${target}`)
      else edits.push({ at: obj.anchor.getEnd(), insert: insertion(obj, source, text, target, value) })
    }
    if (edits.length === 0) continue
    const next = edits
      .sort((a, b) => b.at - a.at)
      .reduce((acc, e) => acc.slice(0, e.at) + e.insert + acc.slice(e.at), text)
    writeFileSync(file, next)
    written += edits.length
  }

  problems.forEach((p) => console.error(p))
  console.log(`${written} values written, ${problems.length} skipped`)
  if (problems.length) process.exitCode = 1
}

main()
