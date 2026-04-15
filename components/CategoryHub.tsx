/**
 * Phase CC — generic catalog-driven category hub component.
 *
 * Renders any category from META_SILOS + CATEGORIES + the content
 * helpers in lib/catalog/content.ts. Consumed by Phase DD's generic
 * /[lang]/[silo]/[category] dynamic route so that every non-flagship
 * category can ship a real page without hand-written copy.
 *
 * The cuisine-connectee flagship keeps its bespoke route
 * (/[lang]/cuisine-connectee/[category]/page.tsx) because it has
 * real product listings wired up via smart-kitchen-products.ts.
 * Next.js static-segment precedence means the flagship route always
 * wins over the generic /[silo]/[category] one.
 *
 * Structure:
 *   - Breadcrumb: Home → {silo} → {category}
 *   - Hero derived from getCategoryHero()
 *   - Related categories grid (indexable siblings only)
 *   - FAQ block from getCategoryFaq() (emits FAQPage JSON-LD)
 *   - Methodology CTA (every page links the cornerstone)
 *
 * JSON-LD: BreadcrumbList via the Phase Y schema builder;
 * FaqSection emits its own FAQPage payload.
 */

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNonce } from '@/lib/nonce'
import { buildBreadcrumbListSchema, buildClusterItemListSchema } from '@/lib/seo'
import { SectionHero, SiteFooter } from '@/components/ui'
import FaqSection from '@/components/FaqSection'
import {
  getMetaSilo,
  getCategory,
  getCategoriesBySilo,
  getCategoryHero,
  getCategoryFaq,
  getPersonasForSilo,
} from '@/lib/catalog'
import type { MetaSiloSlug } from '@/lib/catalog'
import { isValidLang, type Lang } from '@/lib/i18n'

interface CategoryHubUi {
  home: string
  relatedTitle: string
  methodologyCta: string
  faqTitle: string
  noSiblings: string
  /** Phase II: personalized "best for" cluster cross-links. */
  bestForTitle: string
  /** Phase II: H3 prefix for each persona card, e.g. "Meilleur [cat] pour". */
  bestForPrefix: string
}

const uiStrings: Record<Lang, CategoryHubUi> = {
  fr: {
    home: 'Accueil',
    relatedTitle: 'Autres catégories du même silo',
    methodologyCta: 'Lire notre méthodologie',
    faqTitle: 'Questions fréquentes',
    noSiblings: 'Les catégories voisines arrivent bientôt.',
    bestForTitle: 'Trouvez le meilleur selon votre profil',
    bestForPrefix: 'Le meilleur pour',
  },
  en: {
    home: 'Home',
    relatedTitle: 'Other categories in the same silo',
    methodologyCta: 'Read our methodology',
    faqTitle: 'Frequently asked questions',
    noSiblings: 'Sibling categories are coming soon.',
    bestForTitle: 'Find the best one for your profile',
    bestForPrefix: 'The best for',
  },
  de: {
    home: 'Start',
    relatedTitle: 'Weitere Kategorien im selben Silo',
    methodologyCta: 'Zur Methodik',
    faqTitle: 'Häufige Fragen',
    noSiblings: 'Weitere Kategorien folgen bald.',
    bestForTitle: 'Finden Sie das Beste für Ihr Profil',
    bestForPrefix: 'Das Beste für',
  },
  es: {
    home: 'Inicio',
    relatedTitle: 'Otras categorías del mismo silo',
    methodologyCta: 'Leer nuestra metodología',
    faqTitle: 'Preguntas frecuentes',
    noSiblings: 'Las categorías vecinas llegan pronto.',
    bestForTitle: 'Encuentra el mejor según tu perfil',
    bestForPrefix: 'El mejor para',
  },
  it: {
    home: 'Home',
    relatedTitle: 'Altre categorie dello stesso silo',
    methodologyCta: 'Leggi la nostra metodologia',
    faqTitle: 'Domande frequenti',
    noSiblings: 'Le categorie vicine arrivano presto.',
    bestForTitle: 'Trova il migliore secondo il tuo profilo',
    bestForPrefix: 'Il migliore per',
  },
  nl: {
    home: 'Home',
    relatedTitle: 'Andere categorieën in hetzelfde silo',
    methodologyCta: 'Lees onze methodologie',
    faqTitle: 'Veelgestelde vragen',
    noSiblings: 'Naastgelegen categorieën komen binnenkort.',
    bestForTitle: 'Vind de beste voor uw profiel',
    bestForPrefix: 'De beste voor',
  },
}

interface CategoryHubProps {
  siloSlug: MetaSiloSlug
  categorySlug: string
  lang: string
}

export default async function CategoryHub({
  siloSlug,
  categorySlug,
  lang,
}: CategoryHubProps) {
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const silo = getMetaSilo(siloSlug)
  const category = getCategory(categorySlug)
  if (!silo || !category || category.metaSilo !== siloSlug) {
    notFound()
  }

  const hero = getCategoryHero(safeLang, category)
  const faqEntries = getCategoryFaq(safeLang, category)
  const ui = uiStrings[safeLang]
  const nonce = await getNonce()

  const siloTitle = silo.title[safeLang]
  const categoryTitle = category.title[safeLang]

  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: ui.home, path: '' },
    { name: siloTitle, path: `/${silo.slug}` },
    { name: categoryTitle, path: `/${silo.slug}/${category.slug}` },
  ])

  const related = getCategoriesBySilo(siloSlug).filter(
    (c) => c.slug !== category.slug && c.indexable
  )

  // Phase II: best-for cluster cross-links. Every indexable category
  // surfaces up to 9 "best [category] for [persona]" entry points —
  // one per persona applicable to the category's silo. This connects
  // CategoryHub directly to the Moteur 4 conversion layer so a user
  // who landed on the category page can self-select into the best-for
  // bucket that matches their profile.
  const bestForPersonas = category.indexable
    ? getPersonasForSilo(siloSlug).slice(0, 9)
    : []

  // Phase OO: emit the best-for cluster as a schema.org ItemList so
  // search engines and LLM crawlers can walk the entire persona
  // cluster from one structured payload rather than parsing the DOM
  // for anchor tags. Only indexable categories emit this — empty
  // bestForPersonas list means no ItemList on the page.
  const clusterItemListSchema =
    bestForPersonas.length > 0
      ? buildClusterItemListSchema({
          lang: safeLang,
          path: `/${silo.slug}/${category.slug}`,
          name: ui.bestForTitle,
          description: `${ui.bestForPrefix} ${categoryTitle.toLowerCase()}`,
          items: bestForPersonas.map((persona) => ({
            name: `${ui.bestForPrefix} ${categoryTitle.toLowerCase()} — ${persona.label[safeLang]}`,
            path: `/${silo.slug}/${category.slug}/meilleur-pour/${persona.slug}`,
          })),
        })
      : null

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {clusterItemListSchema && (
        <script
          type="application/ld+json"
          nonce={nonce}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clusterItemListSchema) }}
        />
      )}

      <Navbar currentLang={safeLang} />

      <main id="main">
        {/* Breadcrumb */}
        <nav
          className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link
                href={`/${safeLang}`}
                className="hover:text-blue-600 transition-colors"
              >
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/${safeLang}/${silo.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {siloTitle}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-600 font-medium">{categoryTitle}</li>
          </ol>
        </nav>

        <SectionHero
          kicker={hero.kicker}
          title={hero.title}
          subtitle={hero.subtitle}
          intro={hero.intro}
        />

        {/* Phase II: best-for cluster — cross-links to Moteur 4 pages */}
        {bestForPersonas.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
              {ui.bestForTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestForPersonas.map((persona) => (
                <li key={persona.slug}>
                  <Link
                    href={`/${safeLang}/${silo.slug}/${category.slug}/meilleur-pour/${persona.slug}`}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-blue-200 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-1">
                      {ui.bestForPrefix} {categoryTitle.toLowerCase()}
                    </span>
                    <span className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {persona.label[safeLang]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related categories */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            {ui.relatedTitle}
          </h2>
          {related.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${safeLang}/${silo.slug}/${cat.slug}`}
                  className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1 hover:border-blue-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                    {cat.title[safeLang]}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {cat.description[safeLang]}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">{ui.noSiblings}</p>
          )}
        </section>

        {/* FAQ — derived from catalog, emits FAQPage JSON-LD via FaqSection */}
        <FaqSection
          faqs={faqEntries}
          title={ui.faqTitle}
          nonce={nonce}
        />

        {/* Methodology CTA — every category page links the cornerstone */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 text-center">
            <Link
              href={`/${safeLang}/methodologie`}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
            >
              <span>{ui.methodologyCta}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter currentLang={safeLang} />
    </div>
  )
}
