import { getAllArticles } from '@/lib/blog'
import { BLOG_SEO_META } from '@/lib/blog/seo-meta'
import { getIndexableSilos } from '@/lib/catalog'
import { LANGUAGES } from '@/lib/i18n'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { BASE_URL } from '@/lib/seo'

/**
 * /llms.txt (https://llmstxt.org): a plain-markdown map of the site for
 * AI assistants (ChatGPT, Claude, Perplexity…). Built from the catalog and
 * blog registries so it never drifts from the real pages.
 */

const link = (label: string, path: string, note?: string) =>
  `- [${label}](${BASE_URL}${path})${note ? `: ${note}` : ''}`

const KEY_PAGES: ReadonlyArray<[label: string, path: string, note: string]> = [
  ['Méthodologie', '/fr/methodologie', 'how products are scored (Nura Score), sources and update policy'],
  ['Methodology (English)', '/en/methodologie', 'same page in English'],
  ['À propos / About', '/fr/a-propos', 'who writes Home Nura and editorial independence'],
  ['Guide airfryers', '/fr/guides/airfryers', 'air fryer buying guide and ranking'],
  ['Comparateur airfryers', '/fr/comparateur', 'side-by-side air fryer comparison tool'],
  ['Quiz airfryer', '/fr/quiz', 'find the right air fryer in a few questions'],
  ['Guide cuisine connectée', '/fr/guides/cuisine-connectee', 'smart kitchen buying guide'],
  ['Comparateur cuisine connectée', '/fr/cuisine-connectee/comparateur', 'smart kitchen comparison tool'],
]

export function buildLlmsTxt(): string {
  const languages = LANGUAGES.map((l) => `/${l}/`).join(', ')
  const lines: string[] = [
    '# Home Nura',
    '',
    '> Independent European buying guides for the smart home: air fryers, smart kitchen, energy and home automation, home security, air comfort, home care and garden. Every guide accounts for EU specifics (energy labels, GDPR and local data storage, EU plugs, Matter compatibility).',
    '',
    `Content is published in 6 languages (${languages}); each French URL below has the same path under every language prefix. Product links are Amazon affiliate links (disclosed on every page); rankings follow the published methodology.`,
    '',
    '## Key pages',
    ...KEY_PAGES.map(([label, path, note]) => link(label, path, note)),
    '',
    '## Smart home hubs',
    ...getIndexableSilos().map((silo) => link(silo.title.fr, `/fr/${silo.slug}`, silo.description.en)),
    '',
    '## Guides and comparisons (blog)',
    ...getAllArticles().map((article) => {
      const meta = BLOG_SEO_META[article.slug]
      const title = meta?.fr?.title ?? article.title.fr
      const note = meta?.en?.description ?? article.excerpt.en ?? ''
      return link(title, `/fr/blog/${article.slug}`, note)
    }),
    '',
    '## Quick answers (European buyers, 2026)',
    ...getAllArticles().flatMap((article) => {
      const qa = getQuickAnswer(article, 'en')
      if (!qa) return []
      const picks = qa.picks.map((p) => `${p.role}: ${p.model} — ${p.why}`).join(' ')
      return [`- [${qa.question}](${BASE_URL}/en/blog/${article.slug}): ${picks}`]
    }),
    '',
    '## Optional',
    link('Sitemap', '/sitemap.xml', 'every indexable URL with hreflang alternates'),
  ]
  return lines.join('\n') + '\n'
}
