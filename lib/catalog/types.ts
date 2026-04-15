/**
 * Catalog types — the shape of the "European smart home war machine".
 *
 * This file is the single source of truth for the site's topical
 * structure. Every page generator (Moteur 1-4), every hub route,
 * every sitemap entry, every internal link strategy derives from
 * the objects typed here.
 *
 * Stability contract: these types MUST stay backwards-compatible
 * once a silo ships. Adding optional fields is fine. Renaming or
 * removing a field without a 301 plan is a ranking crime.
 */

import type { Lang } from '@/lib/i18n'

// ---------------------------------------------------------------------
// Meta-silo — the 6 topical pillars of the site
//
// The parent editorial frame is "La Maison Connectée Européenne".
// Every meta-silo slug is an immediate child of that parent theme.
// New meta-silos should NEVER be added without first checking they
// don't cannibalize the keyword space of an existing one.
// ---------------------------------------------------------------------

export type MetaSiloSlug =
  | 'cuisine-connectee'
  | 'energie-domotique'
  | 'securite-maison'
  | 'confort-air'
  | 'entretien-maison'
  | 'outdoor-connecte'

export interface MetaSilo {
  /** URL slug — immutable once shipped. */
  slug: MetaSiloSlug
  /** Hub page title, 6 locales. */
  title: Record<Lang, string>
  /** Short description for hub + meta-description, 6 locales. */
  description: Record<Lang, string>
  /** Lucide icon name (rendered in nav + hub cards). */
  icon: string
  /** Flagship silos drive the most internal link equity. Only one per site. */
  flagship: boolean
  /** Display order in nav (ascending). */
  priority: number
  /** When false, hub route renders but is noindexed. Flip to true after depth gate. */
  indexable: boolean
}

// ---------------------------------------------------------------------
// Category — individual product segments under a meta-silo
//
// A category is the atom of the topical structure. Every product
// review, every comparator, every guide hangs off one category. A
// category with < 12 pages of real content should stay `indexable:
// false` until it clears the depth gate.
// ---------------------------------------------------------------------

export type SearchVolume = 'high' | 'medium' | 'low'

export interface Category {
  /** URL slug within the meta-silo — immutable once shipped. */
  slug: string
  /** Parent meta-silo. Must be a valid MetaSiloSlug. */
  metaSilo: MetaSiloSlug
  /** Category title, 6 locales. */
  title: Record<Lang, string>
  /** Short description for hub card + meta-description, 6 locales. */
  description: Record<Lang, string>
  /** Primary search query per locale — the head keyword we're targeting. */
  primaryKeyword: Record<Lang, string>
  /** Internal estimate of search volume — influences internal link priority. */
  searchVolume: SearchVolume
  /** False until the category has ≥ 12 pages of real content. */
  indexable: boolean
  /** Optional: categories we treat as "review only" (no affiliate push). */
  reviewOnly?: boolean
}

// ---------------------------------------------------------------------
// Buyer persona — the cartesian axis for Moteur 2 ("meilleur X pour Y")
//
// 8 personas × 5 budgets × 6 usages gives 240 slots per category,
// but only ~15-20 survive the "does this search actually get volume"
// filter. The filter is applied when Moteur 2 runs against the DB.
// ---------------------------------------------------------------------

export type PersonaAxis = 'household' | 'budget' | 'usage' | 'constraint'

export interface BuyerPersona {
  /** URL slug used in the long-tail page path. */
  slug: string
  /** Human label per locale, singular form. */
  label: Record<Lang, string>
  /** Which axis of the "best for" matrix this persona lives on. */
  axis: PersonaAxis
  /** Only relevant on these meta-silos — prevents "best airfryer for home security". */
  applicableSilos: readonly MetaSiloSlug[]
}

// ---------------------------------------------------------------------
// Problem — Moteur 4 ("troubleshooting") seed data
//
// Each Problem generates a dedicated page per locale capturing the
// long-tail query. Example: "mon airfryer ne chauffe plus" →
// /{lang}/cuisine-connectee/airfryers/probleme/ne-chauffe-plus
// ---------------------------------------------------------------------

export type ProblemSeverity = 'minor' | 'moderate' | 'critical'

export interface Problem {
  /** URL slug for the problem page. Must be unique within its category. */
  slug: string
  /** Category this problem applies to. */
  categorySlug: string
  /** Question form per locale — the exact query we're trying to capture. */
  query: Record<Lang, string>
  /** Severity drives the call-to-action in the page (contact support vs quick fix). */
  severity: ProblemSeverity
}
