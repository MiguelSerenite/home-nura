/**
 * Minimal RFC 4180 CSV reader for Awin feeds: quoted fields (with
 * delimiters, doubled quotes and line breaks inside), CRLF or LF, a UTF-8
 * BOM, and the delimiter Create-a-Feed lets the publisher choose
 * (comma, pipe, tab or semicolon), detected from the header line.
 */
import 'server-only'

const DELIMITERS = [',', '|', '\t', ';'] as const

/** The delimiter used most often in the header line, outside quotes (comma when none). */
export function detectDelimiter(text: string): string {
  const counts = new Map<string, number>()
  let quoted = false
  for (const char of text) {
    if (char === '"') quoted = !quoted
    else if (!quoted && (char === '\n' || char === '\r')) break
    else if (!quoted && (DELIMITERS as readonly string[]).includes(char)) counts.set(char, (counts.get(char) ?? 0) + 1)
  }
  let best: string = ','
  for (const delimiter of DELIMITERS) {
    if ((counts.get(delimiter) ?? 0) > (counts.get(best) ?? 0)) best = delimiter
  }
  return best
}

/** Every row of `text` as an array of fields (empty lines skipped). */
export function parseCsvRows(text: string, delimiter = detectDelimiter(text)): string[][] {
  const source = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let quoted = false

  const endField = () => {
    row.push(field)
    field = ''
  }
  const endRow = () => {
    endField()
    if (row.length > 1 || row[0] !== '') rows.push(row)
    row = []
  }

  for (let i = 0; i < source.length; i++) {
    const char = source[i]
    if (quoted) {
      if (char !== '"') field += char
      else if (source[i + 1] === '"') {
        field += '"'
        i++
      } else quoted = false
    } else if (char === '"' && field === '') quoted = true
    else if (char === delimiter) endField()
    else if (char === '\n') endRow()
    else if (char !== '\r') field += char
  }
  if (field !== '' || row.length > 0) endRow()
  return rows
}

/** Rows as objects keyed by the trimmed header names; short rows get empty strings. */
export function parseCsvRecords(text: string): Record<string, string>[] {
  const [header, ...rows] = parseCsvRows(text)
  if (!header) return []
  const keys = header.map((key) => key.trim())
  return rows.map((fields) => Object.fromEntries(keys.map((key, i) => [key, (fields[i] ?? '').trim()])))
}
