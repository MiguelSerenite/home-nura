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
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'
import { ANCHOR_LANG, SOURCE_LANGS } from './extract-locale'
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

const IDENTIFIER = /^[A-Za-z_$][\w$]*$/

function jsonFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return jsonFiles(path)
    return name.endsWith('.json') ? [path] : []
  })
}

/** Style of the anchor value, copied so inserted code reads like its neighbours. */
interface Style {
  quote: "'" | '"' | '`'
  quotedKeys: boolean
  multiline: boolean
  indent: string
}

function quoteString(value: string, quote: Style['quote']): string {
  if (quote === '`') return '`' + value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`'
  const escaped = JSON.stringify(value).slice(1, -1)
  return quote === '"' ? `"${escaped}"` : `'${escaped.replace(/\\"/g, '"').replace(/'/g, "\\'")}'`
}

function serialize(value: LiteralValue, style: Style, depth: number): string {
  if (typeof value === 'string') return quoteString(value, style.quote === '`' && depth > 0 ? "'" : style.quote)
  if (value === null || typeof value !== 'object') return String(value)
  const pad = style.indent + '  '.repeat(depth + 1)
  const close = style.indent + '  '.repeat(depth)
  const key = (k: string) =>
    style.quotedKeys || !IDENTIFIER.test(k) ? quoteString(k, style.quote === '`' ? "'" : style.quote) : k
  const items = Array.isArray(value)
    ? value.map((v) => serialize(v, style, depth + 1))
    : Object.entries(value).map(([k, v]) => `${key(k)}: ${serialize(v, style, depth + 1)}`)
  const [open, end] = Array.isArray(value) ? ['[', ']'] : ['{', '}']
  if (!style.multiline || items.length === 0) {
    return Array.isArray(value) ? `${open}${items.join(', ')}${end}` : `${open} ${items.join(', ')} ${end}`
  }
  return `${open}\n${items.map((i) => pad + i).join(',\n')},\n${close}${end}`
}

function insertion(obj: LocaleObject, source: ts.SourceFile, text: string, target: string, value: LiteralValue): string {
  const anchor = obj.anchor
  const init = anchor.initializer.getText(source)
  const lineStart = text.lastIndexOf('\n', anchor.getStart(source)) + 1
  const indent = text.slice(lineStart, anchor.getStart(source)).match(/^\s*/)?.[0] ?? ''
  // The first quote character of the anchor value (also inside arrays and objects).
  const firstQuote = init.match(/[`"']/)?.[0]
  const style: Style = {
    quote: firstQuote === '`' || firstQuote === '"' ? firstQuote : "'",
    quotedKeys: /["']\w+["']\s*:/.test(init) || ts.isStringLiteral(anchor.name),
    multiline: init.includes('\n'),
    indent,
  }
  const name = ts.isStringLiteral(anchor.name)
    ? quoteString(target, anchor.name.getText(source).startsWith('"') ? '"' : "'")
    : target
  const props = (anchor.parent as ts.ObjectLiteralExpression).properties
  const previous = props[props.indexOf(anchor) - 1] ?? anchor.parent
  const anchorLine = source.getLineAndCharacterOfPosition(anchor.getStart(source)).line
  const previousLine = source.getLineAndCharacterOfPosition(previous.getStart(source)).line
  const inline = anchorLine === previousLine
  const rendered = `${name}: ${serialize(value, style, 0)}`
  return inline ? `, ${rendered}` : `,\n${indent}${rendered}`
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
