import AmazonDisclosure from '@/components/AmazonDisclosure'
import { getCatalogEntries } from '@/lib/category-catalog/data'
import type { Lang } from '@/lib/i18n'
import { BASE_URL, buildProductListSchema } from '@/lib/seo'
import type { CoolblueOffers } from '@/lib/merchant-offers/types'
import CatalogCards from './CatalogCards'
import { CATALOG_UI } from './ui'

/**
 * "The other models we compare": the category catalogue under a hub's
 * picks (data/category-catalog), with its ItemList JSON-LD. Renders nothing
 * when the category has no catalogue model for this locale.
 */
export default function CategoryCatalog({
  category,
  lang,
  path,
  exclude = [],
  offers,
}: {
  category: string
  lang: Lang
  /** The hub's path without the locale ("/confort-air/purificateurs-air"). */
  path: string
  /** Names of the models the hub already shows as picks. */
  exclude?: readonly string[]
  /** Coolblue offers keyed by model name (Dutch hubs, lib/merchant-offers). */
  offers?: CoolblueOffers
}) {
  const entries = getCatalogEntries(category, lang, exclude)
  if (entries.length === 0) return null
  const ui = CATALOG_UI[lang]
  const schema = buildProductListSchema(
    entries.map((e) => ({ title: e.name, ...(e.photo ? { visual: { photo: e.photo } } : {}) })),
    lang,
    ui.title,
    `${BASE_URL}/${lang}${path}#catalog`,
  )
  return (
    <section id="catalog" aria-labelledby="catalog-title" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 md:px-6">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 id="catalog-title" className="text-2xl font-bold tracking-tight text-slate-900">{ui.title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{ui.intro}</p>
      <CatalogCards entries={entries} lang={lang} ui={ui} offers={offers} />
      <AmazonDisclosure lang={lang} note={ui.disclosure} className="mt-4 text-xs text-slate-600" />
    </section>
  )
}
