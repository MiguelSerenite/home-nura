import 'server-only'
import { isValidLang, type Lang } from '@/lib/i18n'

// One loader per site locale (Record<Lang>: a new locale cannot forget its dictionary).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<Lang, () => Promise<any>> = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../../dictionaries/fr.json').then((module) => module.default),
  de: () => import('../../dictionaries/de.json').then((module) => module.default),
  es: () => import('../../dictionaries/es.json').then((module) => module.default),
  it: () => import('../../dictionaries/it.json').then((module) => module.default),
  nl: () => import('../../dictionaries/nl.json').then((module) => module.default),
  pl: () => import('../../dictionaries/pl.json').then((module) => module.default),
  sv: () => import('../../dictionaries/sv.json').then((module) => module.default),
  us: () => import('../../dictionaries/us.json').then((module) => module.default),
  ca: () => import('../../dictionaries/ca.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  const loader = isValidLang(locale) ? dictionaries[locale] : dictionaries.fr
  return loader()
}
