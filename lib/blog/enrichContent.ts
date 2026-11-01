/**
 * Adds buy links to an article's HTML, driven by the models the article
 * itself recommends (see getArticleAffiliateModels):
 *
 * - in-text CTA boxes: after an h2 section that names one of the models,
 *   at most MAX_INLINE_CTAS per article, each model at most once, and only
 *   after the mid-article product block (inserted before the 2nd h2);
 * - comparison tables: a cell that names a model links that name.
 *
 * Where the text names none of the article's models nothing is added:
 * no link at all beats a link to the wrong product. On the US and Canadian
 * versions a model the market does not sell (`unlinked`) is still matched,
 * so its mentions are never read as another model, but gets no link.
 *
 * Links carry `data-aff-*` attributes; AffiliateClickTracker records the
 * clicks (this HTML is rendered with dangerouslySetInnerHTML).
 */
import type { ArticleAffiliateModel } from '@/lib/blog/article-products'
import { bestMatch, findMentions, modelKey, normalizeTokens, type ModelKey } from '@/lib/blog/model-match'

const MAX_INLINE_CTAS = 2
/** Product block position: before this h2 (see splitBeforeNthH2 in the page). */
const PRODUCT_BLOCK_H2 = 2
/** A cell is a model name, not a sentence, when it has at most this many extra tokens. */
const MAX_CELL_EXTRA_TOKENS = 4

const AFFILIATE_REL = 'sponsored nofollow noopener noreferrer'

const LABELS: Record<string, { button: string; note: string }> = {
  fr: { button: 'Voir le prix sur Amazon', note: 'Lien affilié Amazon' },
  en: { button: 'Check price on Amazon', note: 'Amazon affiliate link' },
  de: { button: 'Preis auf Amazon prüfen', note: 'Amazon-Affiliate-Link' },
  es: { button: 'Ver precio en Amazon', note: 'Enlace de afiliado de Amazon' },
  it: { button: 'Vedi prezzo su Amazon', note: 'Link di affiliazione Amazon' },
  nl: { button: 'Bekijk prijs op Amazon', note: 'Amazon-affiliatelink' },
  pl: { button: 'Sprawdź cenę na Amazon', note: 'Link afiliacyjny Amazon' },
  sv: { button: 'Se priset på Amazon', note: 'Affiliatelänk till Amazon' },
  us: { button: 'Check price on Amazon', note: 'Amazon affiliate link' },
  ca: { button: 'Check price on Amazon', note: 'Amazon affiliate link' },
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, ' ')

function linkAttributes(model: ArticleAffiliateModel, surface: 'inline' | 'table'): string {
  const asin = model.asin ? ` data-aff-asin="${escapeHtml(model.asin)}"` : ''
  return (
    `href="${escapeHtml(model.url)}" target="_blank" rel="${AFFILIATE_REL}"` +
    ` data-aff-surface="${surface}" data-aff-model="${escapeHtml(model.name)}"${asin}`
  )
}

export function inlineCtaHtml(model: ArticleAffiliateModel, lang: string): string {
  const labels = LABELS[lang] ?? LABELS.fr
  return (
    '<aside class="not-prose my-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-4 sm:p-5">' +
    `<span class="min-w-0"><span class="block text-sm font-bold text-slate-900">${escapeHtml(model.label)}</span>` +
    `<span class="block text-xs text-slate-600">${labels.note}</span></span>` +
    `<a ${linkAttributes(model, 'inline')} class="inline-flex min-h-12 shrink-0 items-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white hover:bg-brand-700 active:bg-brand-700 transition-colors">${labels.button} →</a>` +
    '</aside>'
  )
}

/** Models a section names, each once, in reading order. */
function modelsNamed(sectionHtml: string, keys: readonly ModelKey[]): number[] {
  const mentions = findMentions(normalizeTokens(stripTags(sectionHtml)), keys)
  return [...new Set(mentions.map((m) => m.model))]
}

interface CtaState {
  parts: readonly string[]
  used: ReadonlySet<number>
}

/**
 * One CTA after each section naming a model not yet promoted, up to
 * MAX_INLINE_CTAS. When the article's own top pick (models[0], cited) is
 * named after the product block, it gets the first CTA: a review promotes
 * its product before the alternatives it compares it with.
 */
function addInlineCtas(
  html: string,
  models: readonly ArticleAffiliateModel[],
  keys: readonly ModelKey[],
  lang: string,
): string {
  const sections = html.split(/(?=<h2[\s>])/i)
  const named = sections.reduce<{ h2Count: number; models: number[][] }>(
    (acc, section) => {
      const h2Count = acc.h2Count + (/^<h2[\s>]/i.test(section) ? 1 : 0)
      const eligible = h2Count >= PRODUCT_BLOCK_H2
      return { h2Count, models: [...acc.models, eligible ? modelsNamed(section, keys) : []] }
    },
    { h2Count: 0, models: [] },
  ).models
  const leadFirst = models[0]?.cited === true && !models[0].unlinked && named.some((m) => m.includes(0))

  const initial: CtaState = { parts: [], used: new Set() }
  const { parts } = sections.reduce<CtaState>((state, section, i) => {
    const leadPending = leadFirst && !state.used.has(0)
    const candidates = named[i].filter((m) => !state.used.has(m) && !models[m].unlinked && (!leadPending || m === 0))
    const model = state.used.size < MAX_INLINE_CTAS ? candidates[0] : undefined
    if (model === undefined) return { parts: [...state.parts, section], used: state.used }
    return {
      parts: [...state.parts, section + inlineCtaHtml(models[model], lang)],
      used: new Set([...state.used, model]),
    }
  }, initial)
  return parts.join('')
}

/** Links each model once per table: the first cell that is its name. */
function linkTable(tableHtml: string, models: readonly ArticleAffiliateModel[], keys: readonly ModelKey[]): string {
  const linked = new Set<number>()
  return tableHtml.replace(/(<td\b[^>]*>)([\s\S]*?)(<\/td>)/gi, (cell, open: string, inner: string, close: string) => {
    if (/<a\b/i.test(inner)) return cell
    const text = stripTags(inner)
    const match = bestMatch(text, keys)
    if (!match || linked.has(match.model) || models[match.model].unlinked) return cell
    if (normalizeTokens(text).length > match.end - match.start + MAX_CELL_EXTRA_TOKENS) return cell
    linked.add(match.model)
    return `${open}<a ${linkAttributes(models[match.model], 'table')}>${inner}</a>${close}`
  })
}

function linkTables(html: string, models: readonly ArticleAffiliateModel[], keys: readonly ModelKey[]): string {
  return html.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => linkTable(table, models, keys))
}

export function enrichArticleHtml(html: string, models: readonly ArticleAffiliateModel[], lang: string): string {
  if (models.length === 0) return html
  const keys = models.map((m) => modelKey(m.name))
  return addInlineCtas(linkTables(html, models, keys), models, keys, lang)
}
