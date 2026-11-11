import { LANGUAGES, isValidLang, marketVersion } from '@/lib/i18n'

/** Same value as BASE_URL in lib/seo, kept local so the proxy bundle stays small. */
const BASE_URL = 'https://homenura.com'

/**
 * Markdown for AI agents (is-agentic.com, acceptmarkdown.com): the entry
 * page (/) answers `Accept: text/markdown` with Markdown and `Vary: Accept`,
 * and unknown root paths answer a Markdown 404 body when it is asked for.
 */

/** Media-type quality in an Accept header (0 when absent). */
function quality(accept: string, type: string): number {
  for (const part of accept.split(',')) {
    const [media = '', ...params] = part.split(';').map((piece) => piece.trim())
    if (media.toLowerCase() !== type) continue
    const q = params.find((param) => param.toLowerCase().startsWith('q='))
    const value = q ? Number.parseFloat(q.slice(2)) : 1
    return Number.isFinite(value) ? value : 0
  }
  return 0
}

/** Markdown asked for explicitly and preferred (or tied) to HTML. */
export function acceptsMarkdown(accept: string | null): boolean {
  if (!accept) return false
  const markdown = quality(accept, 'text/markdown')
  return markdown > 0 && markdown >= quality(accept, 'text/html')
}

/** First path segments served outside the /{lang}/ tree (app routes and public folders). */
const ROOT_SEGMENTS: ReadonlySet<string> = new Set(['api', '_next', 'images', 'products', 'blog', 'about', 'contact', 'privacy'])

/**
 * True when the path can only be a 404: its first segment is neither a
 * language, a root route nor a file (files are left to Next.js).
 */
export function isCertainNotFound(pathname: string): boolean {
  const first = pathname.split('/')[1] ?? ''
  if (!first || first.includes('.')) return false
  return !isValidLang(first) && !ROOT_SEGMENTS.has(first)
}

export const NOT_FOUND_MARKDOWN = `# Page not found

This address does not match any page on homenura.com (HTTP 404).

- Entry page and the ten versions: ${BASE_URL}/
- Map for AI assistants: ${BASE_URL}/llms.txt
- Sitemap: ${BASE_URL}/sitemap.xml
- Contact: ${BASE_URL}/fr/contact
`

/** Markdown version of the entry page (/): what Home Nura is and the ten versions. */
export function buildEntryMarkdown(): string {
  const versions = LANGUAGES.map((lang) => {
    const version = marketVersion(lang)
    return `- [${version.edition}](${BASE_URL}/${lang}) (${version.language}, ${version.country})`
  })
  return [
    '# Home Nura',
    '',
    '> Independent smart home buying guides for 10 markets in Europe and North America: air fryers, smart kitchen, energy and home automation, home security, air comfort, home care and garden.',
    '',
    'This is the Markdown version of the international entry page. Pick the version for your country: guides account for local specifics (energy labels, plug types and voltage, data protection).',
    '',
    '## Versions',
    '',
    ...versions,
    '',
    '## Key pages',
    '',
    `- [Methodology](${BASE_URL}/en/methodologie): how products are scored and how often rankings are updated`,
    `- [About](${BASE_URL}/en/a-propos): who writes Home Nura and editorial independence`,
    `- [Contact](${BASE_URL}/en/contact)`,
    `- [Privacy policy](${BASE_URL}/en/politique-confidentialite)`,
    `- [Legal notice](${BASE_URL}/fr/mentions-legales)`,
    `- [Site map for AI assistants (llms.txt)](${BASE_URL}/llms.txt)`,
    `- [Sitemap](${BASE_URL}/sitemap.xml)`,
    '',
    'Product links are Amazon affiliate links, disclosed on every page.',
    '',
  ].join('\n')
}
