/**
 * Shared by the locale tools: reads translation files (unit id → literal
 * value, see locale-objects.ts) and renders literal values back as
 * TypeScript source, in the style of a neighbouring value so written code
 * reads like the code around it.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { isDeepStrictEqual } from 'node:util'
import ts from 'typescript'
import type { LiteralValue } from './locale-objects'

const IDENTIFIER = /^[A-Za-z_$][\w$]*$/

export type Quote = "'" | '"' | '`'

/** Style of a value, copied from a neighbour. */
export interface Style {
  quote: Quote
  quotedKeys: boolean
  multiline: boolean
  indent: string
}

/** JSON files under `dir`, searched recursively. */
export function jsonFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return jsonFiles(path)
    return name.endsWith('.json') ? [path] : []
  })
}

/** Values per unit id read from translation files, without the ids two files disagree on. */
export interface Translations {
  values: Readonly<Record<string, LiteralValue>>
  /** Ids given different values by two files, each with a message naming them. */
  conflicts: ReadonlyMap<string, string>
}

/**
 * Merges translation maps (unit id → value), given as [source name, map]
 * pairs. An id two sources give different values is left out and reported:
 * which one is right is for a person to decide.
 */
export function mergeTranslations(sources: readonly (readonly [string, Record<string, LiteralValue>])[]): Translations {
  const seen = new Map<string, { value: LiteralValue; from: string }>()
  const conflicts = new Map<string, string>()
  for (const [from, map] of sources) {
    for (const [id, value] of Object.entries(map)) {
      const earlier = seen.get(id)
      if (!earlier) seen.set(id, { value, from })
      else if (!isDeepStrictEqual(earlier.value, value) && !conflicts.has(id)) {
        conflicts.set(id, `${id}: different values in ${earlier.from} and ${from}`)
      }
    }
  }
  const values = Object.fromEntries([...seen].filter(([id]) => !conflicts.has(id)).map(([id, { value }]) => [id, value]))
  return { values, conflicts }
}

/** Translation maps from JSON files or directories of them (searched recursively). */
export function readTranslations(inputs: readonly string[]): Translations {
  const files = inputs.flatMap((input) => (statSync(input).isDirectory() ? jsonFiles(input) : [input]))
  return mergeTranslations(files.map((file) => [file, JSON.parse(readFileSync(file, 'utf8'))] as const))
}

export function quoteString(value: string, quote: Quote): string {
  if (quote === '`') return '`' + value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`'
  const escaped = JSON.stringify(value).slice(1, -1)
  return quote === '"' ? `"${escaped}"` : `'${escaped.replace(/\\"/g, '"').replace(/'/g, "\\'")}'`
}

export function serialize(value: LiteralValue, style: Style, depth: number): string {
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

/** Indentation of the line `node` starts on. */
export function lineIndent(node: ts.Node, source: ts.SourceFile, text: string): string {
  const start = node.getStart(source)
  const lineStart = text.lastIndexOf('\n', start) + 1
  return text.slice(lineStart, start).match(/^\s*/)?.[0] ?? ''
}

/** Style of a property's value: its first quote character, key quoting, layout and indentation. */
export function propertyStyle(prop: ts.PropertyAssignment, source: ts.SourceFile, text: string): Style {
  const init = prop.initializer.getText(source)
  // The first quote character of the value (also inside arrays and objects).
  const firstQuote = init.match(/[`"']/)?.[0]
  return {
    quote: firstQuote === '`' || firstQuote === '"' ? firstQuote : "'",
    quotedKeys: /["']\w+["']\s*:/.test(init) || ts.isStringLiteral(prop.name),
    multiline: init.includes('\n'),
    indent: lineIndent(prop, source, text),
  }
}
