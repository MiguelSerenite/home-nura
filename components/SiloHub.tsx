/**
 * Phase AA — generic silo hub component.
 *
 * A single component that renders any meta-silo hub page from the
 * catalog. Reads META_SILOS + CATEGORIES as its only data sources
 * so the remaining 5 silos ship by creating a 10-line page.tsx
 * that imports this component and passes a silo slug.
 *
 * Behaviour:
 *   - Shows silo title, description and a grid of category cards.
 *   - Categories with `indexable: false` render as "coming soon"
 *     placeholders, not clickable — prevents broken internal links.
 *   - Always emits BreadcrumbList JSON-LD (via Phase Y builder).
 *   - ItemList JSON-LD only includes categories that are currently
 *     indexable, so SERP ItemList results never point at dead URLs.
 */

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { getNonce } from '@/lib/nonce'
import { buildBreadcrumbListSchema, BASE_URL } from '@/lib/seo'
import { Kicker, SectionHero, SiteFooter } from '@/components/ui'
import { getMetaSilo, getCategoriesBySilo } from '@/lib/catalog'
import type { MetaSiloSlug } from '@/lib/catalog'
import { isValidLang, type Lang } from '@/lib/i18n'

const uiStrings: Record<Lang, { home: string; comingSoon: string; categoriesTitle: string; methodologyCta: string }> = {
  fr: {
    home: 'Accueil',
    comingSoon: 'Bientôt disponible',
    categoriesTitle: 'Catégories',
    methodologyCta: 'Lire notre méthodologie',
  },
  en: {
    home: 'Home',
    comingSoon: 'Coming soon',
    categoriesTitle: 'Categories',
    methodologyCta: 'Read our methodology',
  },
  de: {
    home: 'Start',
    comingSoon: 'Demnächst',
    categoriesTitle: 'Kategorien',
    methodologyCta: 'Zur Methodik',
  },
  es: {
    home: 'Inicio',
    comingSoon: 'Próximamente',
    categoriesTitle: 'Categorías',
    methodologyCta: 'Leer nuestra metodología',
  },
  it: {
    home: 'Home',
    comingSoon: 'Prossimamente',
    categoriesTitle: 'Categorie',
    methodologyCta: 'Leggi la nostra metodologia',
  },
  nl: {
    home: 'Home',
    comingSoon: 'Binnenkort',
    categoriesTitle: 'Categorieën',
    methodologyCta: 'Lees onze methodologie',
  },
}

interface SiloHubProps {
  siloSlug: MetaSiloSlug
  lang: string
}

export default async function SiloHub({ siloSlug, lang }: SiloHubProps) {
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const silo = getMetaSilo(siloSlug)
  if (!silo) {
    // Runtime guard — should never happen because the route itself
    // passes a compile-time-checked MetaSiloSlug.
    throw new Error(`SiloHub: unknown silo "${siloSlug}"`)
  }

  const categories = getCategoriesBySilo(siloSlug)
  const ui = uiStrings[safeLang]
  const nonce = await getNonce()

  const title = silo.title[safeLang]
  const description = silo.description[safeLang]

  // Breadcrumb: Home → {silo title}
  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: ui.home, path: '' },
    { name: title, path: `/${silo.slug}` },
  ])

  // ItemList only includes indexable categories. Phase Y baseline:
  // for non-flagship silos this is empty, so we skip the schema.
  const indexableCats = categories.filter((c) => c.indexable)
  const itemListSchema =
    indexableCats.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: title,
          itemListElement: indexableCats.map((cat, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: cat.title[safeLang],
            url: `${BASE_URL}/${safeLang}/${silo.slug}/${cat.slug}`,
          })),
        }
      : null

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {itemListSchema && (
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema),
          }}
        />
      )}

      <Navbar currentLang={safeLang} />

      <main id="main">
        {/* Breadcrumb */}
        <nav
          className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${safeLang}`}
                className="hover:text-blue-600 transition-colors"
              >
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600 font-medium">{title}</li>
          </ol>
        </nav>

        <SectionHero
          kicker={title}
          title={title}
          subtitle={description}
          intro={description}
        />

        {/* Categories grid */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              {ui.categoriesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => {
              const catTitle = cat.title[safeLang]
              const catDesc = cat.description[safeLang]

              // Indexable → clickable card. Otherwise → static
              // placeholder card marked "coming soon".
              if (cat.indexable) {
                return (
                  <Link
                    key={cat.slug}
                    href={`/${safeLang}/${silo.slug}/${cat.slug}`}
                    className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1 hover:border-blue-200"
                  >
                    <Kicker size="sm" className="mb-3">
                      {String(index + 1).padStart(2, '0')}
                    </Kicker>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-700 transition-colors">
                      {catTitle}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">
                      {catDesc}
                    </p>
                  </Link>
                )
              }
              return (
                <div
                  key={cat.slug}
                  className="relative flex flex-col rounded-3xl border border-dashed border-slate-200 bg-slate-50/60 p-6"
                  aria-disabled="true"
                >
                  <Kicker size="sm" className="mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </Kicker>
                  <h3 className="text-xl font-bold text-slate-700 leading-tight mb-3">
                    {catTitle}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {catDesc}
                  </p>
                  <div className="mt-5 inline-flex self-start rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {ui.comingSoon}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Methodology CTA — every silo links to the cornerstone */}
          <div className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 text-center">
            <Link
              href={`/${safeLang}/methodologie`}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
            >
              <span>{ui.methodologyCta}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter currentLang={safeLang} />
    </div>
  )
}
