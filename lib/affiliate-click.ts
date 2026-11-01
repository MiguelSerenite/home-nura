/**
 * First-party affiliate click beacon: shape and validation, shared by the
 * client sender (lib/analytics.ts) and the /api/click route handler.
 *
 * Why first-party: GA4 and Plausible are not loaded on the site and Vercel
 * custom events carry 2 properties on the Pro plan, so the /api/click log
 * line is the only full record of a click. The beacon carries no personal
 * data (no IP, no user agent, no identifier, no cookie): only where the
 * click happened, on what, and which store and tracking ID it went to.
 */
import { AMAZON_MARKET_CODES, AMAZON_MARKETPLACES, AMAZON_MARKETS, AMAZON_TAGS, type AmazonMarketCode } from '@/lib/amazon'
import { LANGUAGES, type Lang } from '@/lib/i18n'

/**
 * Which block of the page the affiliate link sits in: the dimension that
 * tells which blocks earn. Every affiliate <a> of the site carries one
 * (`data-aff-placement`, enforced by tests/lib/click-placements.test.ts):
 *
 * - `quick_answer`: verdict box at the top of an article;
 * - `picks`: short list of top picks: category page verdict, "repair or
 *   replace?" box of a troubleshooting page, podium of the home page and of
 *   the airfryer guides;
 * - `product_block`: product block of an article, mid-article or after it
 *   (its surface, `after-h2` or `bottom`, tells which);
 * - `body_link`: buy box an article inserts after a section naming a model;
 * - `table`: comparison tables, and model names linked in an article's own tables;
 * - `card`: product cards of the catalog grids;
 * - `sticky_bar`: mobile bar keeping an article's top pick one tap away;
 * - `comparator`: side-by-side comparator;
 * - `quiz`: result of a quiz;
 * - `black_friday`: every link of the Black Friday pages (picks, Amazon
 *   event page, Prime trial);
 * - `floor_care`: every link of the US and Canadian floor-care guides;
 * - `market_page`: every link of the single-locale duels, guides and news
 *   (lib/market-pages): pick cards and comparison tables.
 */
export const CLICK_PLACEMENTS = [
  'quick_answer',
  'picks',
  'product_block',
  'body_link',
  'table',
  'card',
  'sticky_bar',
  'comparator',
  'quiz',
  'black_friday',
  'floor_care',
  'market_page',
] as const
export type ClickPlacement = (typeof CLICK_PLACEMENTS)[number]

/**
 * Position of the link on an article page, recorded before placements
 * (log lines up to 01/11/2026 have a surface and no placement): verdict
 * box, after an H2, table, in-text, bottom block, sticky bar, plus
 * `problem_picks`, `black_friday`, `floor_care` and `market_page`.
 * Optional; it still splits an article's product blocks between
 * mid-article and bottom.
 */
export const CLICK_SURFACES = [
  'verdict',
  'after-h2',
  'table',
  'inline',
  'bottom',
  'sticky',
  'problem_picks',
  'black_friday',
  'floor_care',
  'market_page',
] as const
export type ClickSurface = (typeof CLICK_SURFACES)[number]

/**
 * Amazon stores a link may point to: the stores of the market table in
 * lib/amazon.ts (amazon.it for Italian pages, amazon.fr elsewhere). A
 * beacon naming another store does not come from the site.
 */
export const CLICK_STORES: readonly string[] = AMAZON_MARKETPLACES
/** Tracking IDs of the market table: any other tag does not come from the site. */
export const CLICK_TAGS: readonly string[] = AMAZON_TAGS
/** Market of each language version ("uk" for English pages, "se" for Swedish ones). */
export const CLICK_MARKETS: readonly AmazonMarketCode[] = AMAZON_MARKET_CODES

export const CLICK_ENDPOINT = '/api/click'
export const MAX_CLICK_BODY_LENGTH = 2048
export const MAX_CLICK_PATH_LENGTH = 512
export const MAX_CLICK_MODEL_LENGTH = 160

/** What the browser posts to /api/click. */
export interface AffiliateClickBeacon {
  path: string
  lang: string
  placement: ClickPlacement
  surface?: ClickSurface
  model: string
  /** Store host the link points to ("amazon.fr", "amazon.it"). */
  store: string
  /** Tracking ID on the link. */
  tag: string
}

/** A validated click, as logged: its market follows from the page language. */
export interface AffiliateClick {
  path: string
  lang: Lang
  market: AmazonMarketCode
  placement: ClickPlacement
  surface: ClickSurface | null
  model: string
  store: string
  tag: string
}

const PLACEMENTS: ReadonlySet<string> = new Set(CLICK_PLACEMENTS)
const SURFACES: ReadonlySet<string> = new Set(CLICK_SURFACES)
const STORES: ReadonlySet<string> = new Set(CLICK_STORES)
const TAGS: ReadonlySet<string> = new Set(CLICK_TAGS)
const LANGS: ReadonlySet<string> = new Set(LANGUAGES)
// Site paths only, as browsers report them (percent-encoded): URL path
// characters, no query string, fragment, quote, angle bracket or control character.
const PATH_PATTERN = /^\/[A-Za-z0-9\-._~%!$&()*+,;=:@/]*$/
// Control, invisible formatting (bidi overrides, zero-width) and line/paragraph separators.
const CONTROL_CHARS = /[\p{Cc}\p{Cf}\u2028\u2029]/u

function isOneOf<T extends string>(value: unknown, allowed: ReadonlySet<string>): value is T {
  return typeof value === 'string' && allowed.has(value)
}

function isSitePath(value: unknown): value is string {
  return typeof value === 'string' && value.length <= MAX_CLICK_PATH_LENGTH && PATH_PATTERN.test(value)
}

/** The trimmed model name, or null when empty, too long or carrying control characters. */
function cleanModel(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const model = value.trim()
  if (model.length === 0 || model.length > MAX_CLICK_MODEL_LENGTH || CONTROL_CHARS.test(model)) return null
  return model
}

/** Store host of an Amazon URL the site links to ("amazon.fr", "amazon.it"), or null for anything else. */
export function storeOf(url: string): string | null {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '')
    return STORES.has(host) ? host : null
  } catch {
    return null
  }
}

/** Tracking ID of a link when it is one of the market table's, else null. */
export function tagOf(url: string): string | null {
  try {
    const tag = new URL(url).searchParams.get('tag')
    return tag !== null && TAGS.has(tag) ? tag : null
  } catch {
    return null
  }
}

/** The click if `body` is a valid beacon, else null. Fields outside the beacon are ignored, never logged. */
export function parseAffiliateClick(body: unknown): AffiliateClick | null {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) return null
  const { path, lang, placement, surface, model, store, tag } = body as Record<string, unknown>

  if (!isSitePath(path)) return null
  if (!isOneOf<Lang>(lang, LANGS)) return null
  if (!isOneOf<ClickPlacement>(placement, PLACEMENTS)) return null
  // Absent: no surface. Present: one of the list (null is not "absent").
  const clickSurface = surface === undefined ? null : isOneOf<ClickSurface>(surface, SURFACES) ? surface : undefined
  if (clickSurface === undefined) return null
  if (!isOneOf<string>(store, STORES) || !isOneOf<string>(tag, TAGS)) return null
  const modelName = cleanModel(model)
  if (modelName === null) return null

  return {
    path,
    lang,
    market: AMAZON_MARKETS[lang].market,
    placement,
    surface: clickSurface,
    model: modelName,
    store,
    tag,
  }
}

/** Article slug when the path is a blog article (/fr/blog/<slug>), else null. */
export function articleSlugOf(path: string): string | null {
  const match = path.match(/^\/[a-z]{2}\/blog\/([a-z0-9-]+)\/?$/)
  return match ? match[1] : null
}
