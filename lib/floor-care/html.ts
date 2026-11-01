/**
 * The `html` of a floor-care section, parsed into a small tree that React
 * renders as elements (components/floor-care/RichText.tsx): the page never
 * injects writer HTML. Allowed: <p>, <ul>, <li>, <strong>, <em>, without
 * attributes, properly nested. Anything else (a link, an image, a style,
 * an attribute, an unknown entity) fails the build with its position.
 */

export type RichTextInline = string | { readonly tag: 'strong' | 'em'; readonly children: readonly RichTextInline[] }

export type RichTextBlock =
  | { readonly tag: 'p'; readonly children: readonly RichTextInline[] }
  | { readonly tag: 'ul'; readonly items: readonly (readonly RichTextInline[])[] }

export const ALLOWED_TAGS = ['p', 'ul', 'li', 'strong', 'em'] as const
type AllowedTag = (typeof ALLOWED_TAGS)[number]

export class RichTextError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RichTextError'
  }
}

const NAMED_ENTITIES: Readonly<Record<string, string>> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  ndash: '–', mdash: '—', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”',
  hellip: '…', deg: '°', times: '×', frac12: '½', frac14: '¼', frac34: '¾',
  reg: '®', trade: '™', copy: '©', middot: '·', prime: '′', Prime: '″',
}

const ENTITY_AT = /&(#\d+|#x[0-9a-f]+|[a-z][a-z0-9]*);/iy
const TAG_AT = /<(\/?)([A-Za-z][A-Za-z0-9-]*)([^<>]*)>/y

function decodeEntity(whole: string, body: string, at: number): string {
  if (body[0] !== '#') {
    const named = NAMED_ENTITIES[body]
    if (named === undefined) throw new RichTextError(`unknown entity ${whole} at character ${at}: write the character itself`)
    return named
  }
  const hex = body[1] === 'x' || body[1] === 'X'
  const code = hex ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10)
  if (!Number.isFinite(code) || code <= 0 || code > 0x10ffff) throw new RichTextError(`invalid entity ${whole} at character ${at}`)
  return String.fromCodePoint(code)
}

/**
 * Decodes entities and collapses whitespace like a browser. A bare "&"
 * followed by a space stays a literal ampersand ("Tom & Jerry"); any
 * other "&" must start a known entity ("&amp" without ";" is ambiguous).
 */
function decodeEntities(text: string, at: number): string {
  let out = ''
  let i = 0
  while (i < text.length) {
    const amp = text.indexOf('&', i)
    if (amp === -1) {
      out += text.slice(i)
      break
    }
    out += text.slice(i, amp)
    ENTITY_AT.lastIndex = amp
    const match = ENTITY_AT.exec(text)
    if (match) {
      out += decodeEntity(match[0], match[1], at + amp)
      i = amp + match[0].length
    } else if (amp + 1 >= text.length || /\s/.test(text[amp + 1])) {
      out += '&'
      i = amp + 1
    } else {
      const stray = text.slice(amp).match(/^&[^\s;<]*/)?.[0] ?? '&'
      throw new RichTextError(`stray "${stray}" at character ${at + amp}: write "&amp;" or the character itself`)
    }
  }
  return out.replace(/\s+/g, ' ')
}

type InlineFrame = { tag: 'p' | 'li' | 'strong' | 'em'; children: RichTextInline[] }
type ListFrame = { tag: 'ul'; items: RichTextInline[][] }
type Frame = InlineFrame | ListFrame

function hasText(children: readonly RichTextInline[]): boolean {
  return children.some((c) => (typeof c === 'string' ? c.trim() !== '' : hasText(c.children)))
}

/** Allowed parent of each tag ('root' = top level of the section). */
const PARENTS: Readonly<Record<AllowedTag, readonly (AllowedTag | 'root')[]>> = {
  p: ['root'],
  ul: ['root'],
  li: ['ul'],
  strong: ['p', 'li', 'strong', 'em'],
  em: ['p', 'li', 'strong', 'em'],
}

/** Parses a section body; throws RichTextError on anything outside the allowed subset. */
export function parseRichText(html: string): RichTextBlock[] {
  const blocks: RichTextBlock[] = []
  const stack: Frame[] = []
  const top = (): Frame | undefined => stack[stack.length - 1]

  const addText = (raw: string, at: number) => {
    if (raw === '') return
    const text = decodeEntities(raw, at)
    const frame = top()
    if (!frame || frame.tag === 'ul') {
      if (text.trim() !== '') {
        throw new RichTextError(`text "${text.trim().slice(0, 40)}" at character ${at} must sit inside <p> or <li>`)
      }
      return
    }
    const last = frame.children[frame.children.length - 1]
    if (typeof last === 'string') frame.children[frame.children.length - 1] = last + text
    else frame.children.push(text)
  }

  const open = (tag: AllowedTag, at: number) => {
    const frame = top()
    const parent = frame?.tag ?? 'root'
    if (!PARENTS[tag].includes(parent)) {
      throw new RichTextError(`<${tag}> at character ${at} cannot sit inside ${parent === 'root' ? 'the top level' : `<${parent}>`}`)
    }
    stack.push(tag === 'ul' ? { tag, items: [] } : { tag, children: [] })
  }

  const close = (tag: AllowedTag, at: number) => {
    const frame = stack.pop()
    if (!frame || frame.tag !== tag) {
      throw new RichTextError(`</${tag}> at character ${at} does not close ${frame ? `<${frame.tag}>` : 'any open tag'}`)
    }
    const parent = top()
    if (frame.tag === 'ul') {
      if (frame.items.length === 0) throw new RichTextError(`empty <ul> at character ${at}`)
      blocks.push({ tag: 'ul', items: frame.items })
      return
    }
    if (!hasText(frame.children)) throw new RichTextError(`empty <${frame.tag}> at character ${at}`)
    if (frame.tag === 'p') blocks.push({ tag: 'p', children: frame.children })
    else if (frame.tag === 'li' && parent?.tag === 'ul') parent.items.push(frame.children)
    else if ((frame.tag === 'strong' || frame.tag === 'em') && parent && parent.tag !== 'ul') {
      parent.children.push({ tag: frame.tag, children: frame.children })
    }
  }

  let cursor = 0
  while (cursor < html.length) {
    const lt = html.indexOf('<', cursor)
    if (lt === -1) {
      addText(html.slice(cursor), cursor)
      break
    }
    addText(html.slice(cursor, lt), cursor)
    TAG_AT.lastIndex = lt
    const match = TAG_AT.exec(html)
    if (!match) throw new RichTextError(`stray "<" at character ${lt}: write "&lt;"`)
    const [whole, slash, rawName, attributes] = match
    const name = rawName.toLowerCase()
    if (!(ALLOWED_TAGS as readonly string[]).includes(name)) {
      throw new RichTextError(`<${slash}${rawName}> at character ${lt} is not allowed (allowed: ${ALLOWED_TAGS.join(', ')})`)
    }
    if (attributes.trim() !== '') {
      throw new RichTextError(`<${rawName}${attributes}> at character ${lt}: attributes are not allowed`)
    }
    if (slash) close(name as AllowedTag, lt)
    else open(name as AllowedTag, lt)
    cursor = lt + whole.length
  }

  const unclosed = top()
  if (unclosed) throw new RichTextError(`<${unclosed.tag}> is never closed`)
  if (blocks.length === 0) throw new RichTextError('no <p> or <ul> block')
  return blocks
}

/** Plain text of parsed blocks (checks, word counts). */
export function richTextToPlain(blocks: readonly RichTextBlock[]): string {
  const inline = (children: readonly RichTextInline[]): string =>
    children.map((c) => (typeof c === 'string' ? c : inline(c.children))).join('')
  return blocks
    .map((b) => (b.tag === 'p' ? inline(b.children) : b.items.map(inline).join(' ')))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}
