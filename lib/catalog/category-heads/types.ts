/**
 * Per-market SERP title, H1 and meta description of each category hub.
 *
 * Written per country from what buyers actually type there
 * ("Saugroboter", "friggitrice ad aria", "robot sprzątający", "best … UK"),
 * instead of the translated catalog title run through one template. Every
 * site locale has its heads (HEAD_LOCALES is LANGUAGES), so a new locale
 * cannot ship without them: TypeScript flags the missing CATEGORY_HEADS key.
 */
import { LANGUAGES, type Lang } from '@/lib/i18n'

export const HEAD_LOCALES = LANGUAGES

export type HeadLocale = Lang

export interface CategoryHead {
  /** What buyers in this market search for, e.g. "meilleur aspirateur robot". */
  keyword: string
  /** SERP title without the brand suffix: opens with the keyword, says 2026. */
  title: string
  /** Hub H1. */
  h1: string
  /** Meta description, 120-155 characters. */
  description: string
}

/** Category slug → head, for one locale. */
export type CategoryHeads = Readonly<Record<string, CategoryHead>>
