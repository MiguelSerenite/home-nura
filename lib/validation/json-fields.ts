/**
 * Field readers for the writers' JSON data files (floor-care guides,
 * market pages), validated when the pages build. Each reader returns the
 * value with its type or calls `fail` with the field path and what is
 * expected, so a bad file fails the build with a message the writer can
 * act on. Keys starting with "_" are comments and ignored.
 */

/** Throws: names the field (`picks[1].specs.Capacity`) and what is wrong. */
export type Fail = (path: string, message: string) => never

/** Any Amazon host: stores, short links and image CDNs. */
export const AMAZON_HOST = /amazon|amzn|(?:^|\.)a\.co$/i

/** A value as quoted in an error message (long strings shortened). */
export function quote(value: unknown): string {
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'an array'
  if (typeof value === 'string') return `"${value.length > 60 ? `${value.slice(0, 57)}...` : value}"`
  return typeof value === 'object' ? 'an object' : `${typeof value} ${String(value)}`
}

/** An object whose keys are all in `keys` (or start with "_"). */
export function object(value: unknown, path: string, keys: readonly string[], fail: Fail): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) fail(path, `expected an object, got ${quote(value)}`)
  const record = value as Record<string, unknown>
  for (const key of Object.keys(record)) {
    if (key.startsWith('_') || keys.includes(key)) continue
    fail(`${path ? `${path}.` : ''}${key}`, `unknown field (allowed: ${keys.join(', ')}; prefix comments with "_")`)
  }
  return record
}

/** A non-empty string, trimmed. */
export function text(value: unknown, path: string, fail: Fail): string {
  if (typeof value !== 'string' || value.trim() === '') fail(path, `expected a non-empty string, got ${quote(value)}`)
  return (value as string).trim()
}

/** An array of at least `min` items. */
export function array(value: unknown, path: string, fail: Fail, min = 0): unknown[] {
  if (!Array.isArray(value)) fail(path, `expected an array, got ${quote(value)}`)
  const list = value as unknown[]
  if (list.length < min) fail(path, `expected at least ${min} item${min > 1 ? 's' : ''}, got ${list.length}`)
  return list
}

/** An absolute https URL. */
export function httpsUrl(value: unknown, path: string, fail: Fail): URL {
  const raw = text(value, path, fail)
  let url: URL
  try {
    url = new URL(raw)
  } catch {
    return fail(path, `expected an absolute https URL, got ${quote(raw)}`)
  }
  if (url.protocol !== 'https:') fail(path, `expected an https URL, got ${quote(raw)}`)
  return url
}

/** Fails when the same value is listed twice. */
export function unique(values: readonly string[], path: string, what: string, fail: Fail): void {
  const seen = new Set<string>()
  for (const value of values) {
    if (seen.has(value)) fail(path, `${what} ${quote(value)} is listed twice`)
    seen.add(value)
  }
}
