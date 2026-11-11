import { getAllArticles } from '@/lib/blog'
import { BLOG_SEO_META } from '@/lib/blog/seo-meta'
import { getIndexableSilos } from '@/lib/catalog'
import { HTML_LANG, LANGUAGES, baseLanguage } from '@/lib/i18n'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { BASE_URL } from '@/lib/seo'
import { BLACK_FRIDAY_YEAR, blackFridayPath, getBlackFridayPages } from '@/lib/black-friday'
import { HUB_COPY } from '@/lib/black-friday/copy/hub'

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
  ['Contact', '/fr/contact', 'how to reach the editorial team (contact@homenura.com)'],
  ['Guide airfryers', '/fr/guides/airfryers', 'air fryer buying guide and ranking'],
  ['Comparateur airfryers', '/fr/comparateur', 'side-by-side air fryer comparison tool'],
  ['Quiz airfryer', '/fr/quiz', 'find the right air fryer in a few questions'],
  ['Guide cuisine connectée', '/fr/guides/cuisine-connectee', 'smart kitchen buying guide'],
  ['Comparateur cuisine connectée', '/fr/cuisine-connectee/comparateur', 'smart kitchen comparison tool'],
]

export function buildLlmsTxt(): string {
  // Prefix with its language tag: /us/ and /ca/ are the US and Canadian English versions.
  const languages = LANGUAGES.map((l) => `/${l}/ ${HTML_LANG[l]}`).join(', ')
  const languageCount = new Set(LANGUAGES.map(baseLanguage)).size
  const lines: string[] = [
    '# Home Nura',
    '',
    '> Independent smart home buying guides for 10 markets in Europe and North America: air fryers, smart kitchen, energy and home automation, home security, air comfort, home care and garden. Guides account for local specifics (EU energy labels, GDPR and local data storage, plug types and voltage, Matter compatibility).',
    '',
    `Content is published in ${languageCount} languages (${languages}); each French URL below has the same path under every language prefix. Product links are Amazon affiliate links (disclosed on every page); rankings follow the published methodology.`,
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
    `## Black Friday ${BLACK_FRIDAY_YEAR}`,
    link(HUB_COPY.fr.h1, `/fr${blackFridayPath()}`, HUB_COPY.en.metaDescription),
    // French pages (the French market's list, then the pages left out of it).
    ...getBlackFridayPages('fr').map((p) =>
      link(p.copy.h1, `/fr${p.path}`, p.category.copy.en?.metaDescription ?? p.copy.metaDescription),
    ),
    '',
    '## Optional',
    link('Sitemap', '/sitemap.xml', 'every indexable URL with hreflang alternates'),
  ]
  return lines.join('\n') + '\n'
}

/** Plain text of an article body: tags removed, entities decoded, blank lines collapsed. */
function htmlToText(html: string): string {
  return html
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<\/(p|h[1-6]|li|tr|div|section|table)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n')
}

/**
 * /llms-full.txt: the llms.txt map followed by every blog article in full
 * (French version: answer first, picks, body text and FAQ), so an assistant
 * can quote Home Nura without crawling each page. No affiliate URL is
 * repeated here: picks are named, the canonical article URL is the source.
 */
export function buildLlmsFullTxt(): string {
  const articles = getAllArticles().map((article) => {
    const meta = BLOG_SEO_META[article.slug]
    const title = meta?.fr?.title ?? article.title.fr
    const qa = getQuickAnswer(article, 'fr')
    const faq = article.faq ?? []
    return [
      `## ${title}`,
      '',
      `Source: ${BASE_URL}/fr/blog/${article.slug}`,
      `Published: ${article.datePublished.slice(0, 10)} · Updated: ${article.dateModified.slice(0, 10)}`,
      '',
      htmlToText(article.excerpt.fr ?? ''),
      ...(qa ? ['', `### ${qa.question}`, ...qa.picks.map((p) => `- ${p.role} : ${p.model} — ${p.why}`)] : []),
      '',
      htmlToText(article.content.fr ?? ''),
      ...(faq.length > 0
        ? ['', '### FAQ', ...faq.flatMap((item) => [`**${htmlToText(item.question.fr ?? '')}**`, htmlToText(item.answer.fr ?? ''), ''])]
        : []),
    ].join('\n')
  })
  return [buildLlmsTxt(), '# Articles in full (French)', '', ...articles].join('\n').replace(/\n{3,}/g, '\n\n') + '\n'
}
