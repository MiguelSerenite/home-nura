import 'server-only'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../../dictionaries/fr.json').then((module) => module.default),
  de: () => import('../../dictionaries/de.json').then((module) => module.default),
  es: () => import('../../dictionaries/es.json').then((module) => module.default),
  it: () => import('../../dictionaries/it.json').then((module) => module.default),
  nl: () => import('../../dictionaries/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  const loader = dictionaries[locale] || dictionaries.fr
  return loader()
}
