/**
 * First-party affiliate click beacon: shape and validation, shared by the
 * client sender (lib/analytics.ts) and the /api/click route handler.
 *
 * Why first-party: GA4 and Plausible are not loaded on the site and Vercel
 * custom events need the Pro plan, so without this every affiliate click
 * went unrecorded. The beacon carries no personal data (no IP, no user
 * agent, no identifier): only where the click happened and on what.
 */
import { LANGUAGES } from '@/lib/i18n'

/** Where on a page the affiliate link sits. */
export const CLICK_SURFACES = ['verdict', 'after-h2', 'table', 'inline', 'bottom', 'sticky'] as const
export type ClickSurface = (typeof CLICK_SURFACES)[number]

/** Amazon stores a link may point to (all links target amazon.fr today). */
export const CLICK_MARKETPLACES = ['amazon.fr', 'amazon.de', 'amazon.co.uk', 'amazon.es', 'amazon.it', 'amazon.nl'] as const

export const CLICK_ENDPOINT = '/api/click'
export const MAX_CLICK_BODY_LENGTH = 2048
export const MAX_CLICK_PATH_LENGTH = 512
export const MAX_CLICK_MODEL_LENGTH = 160

export interface AffiliateClick {
  path: string
  lang: string
  surface: ClickSurface
  model: string
  marketplace: string
}

const SURFACES: ReadonlySet<string> = new Set(CLICK_SURFACES)
const MARKETPLACES: ReadonlySet<string> = new Set(CLICK_MARKETPLACES)
const LANGS: ReadonlySet<string> = new Set(LANGUAGES)
// Site paths only: starts with "/", no whitespace, quotes or angle brackets.
const PATH_PATTERN = /^\/[^\s"'<>\\]*$/
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/

/** Store host of an Amazon URL ("amazon.fr"), or null for anything else. */
export function marketplaceOf(url: string): string | null {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '')
    return MARKETPLACES.has(host) ? host : null
  } catch {
    return null
  }
}

/** The click if `body` is a valid beacon, else null. */
export function parseAffiliateClick(body: unknown): AffiliateClick | null {
  if (typeof body !== 'object' || body === null) return null
  const b = body as Record<string, unknown>
  const { path, lang, surface, model, marketplace } = b

  if (typeof path !== 'string' || path.length > MAX_CLICK_PATH_LENGTH || !PATH_PATTERN.test(path)) return null
  if (typeof lang !== 'string' || !LANGS.has(lang)) return null
  if (typeof surface !== 'string' || !SURFACES.has(surface)) return null
  if (typeof marketplace !== 'string' || !MARKETPLACES.has(marketplace)) return null
  if (typeof model !== 'string') return null
  const trimmedModel = model.trim()
  if (trimmedModel.length === 0 || trimmedModel.length > MAX_CLICK_MODEL_LENGTH || CONTROL_CHARS.test(trimmedModel)) {
    return null
  }

  return { path, lang, surface: surface as ClickSurface, model: trimmedModel, marketplace }
}

/** Article slug when the path is a blog article (/fr/blog/<slug>), else null. */
export function articleSlugOf(path: string): string | null {
  const match = path.match(/^\/[a-z]{2}\/blog\/([a-z0-9-]+)\/?$/)
  return match ? match[1] : null
}
