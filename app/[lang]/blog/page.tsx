import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CookieBanner from '@/components/CookieBanner'
import { getDictionary } from '../dictionaries'
import { getArticleMetas, getArticlesByCategory } from '@/lib/blog'
import { CATEGORIES } from '@/lib/blog/types'
import { getNonce } from '@/lib/nonce'
import type { Metadata } from 'next'
import { SiteFooter, Button } from '@/components/ui'

const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl']
const BASE_URL = 'https://homenura.com'

const metaTitles: Record<string, string> = {
  fr: 'Blog Home Nura | Guides, Tests et Recettes Airfryer',
  en: 'Home Nura Blog | Air Fryer Guides, Reviews & Recipes',
  de: 'Home Nura Blog | Heißluftfritteusen-Ratgeber, Tests & Rezepte',
  es: 'Blog Home Nura | Guías, Tests y Recetas de Freidoras de Aire',
  it: 'Blog Home Nura | Guide, Test e Ricette Friggitrici ad Aria',
  nl: 'Home Nura Blog | Airfryer Gidsen, Tests & Recepten',
}

const metaDescs: Record<string, string> = {
  fr: 'Découvrez nos guides d\'achat, tests détaillés, recettes et comparatifs airfryer. Plus de 25 articles experts pour cuisiner sainement.',
  en: 'Discover our buying guides, detailed reviews, recipes and air fryer comparisons. Over 25 expert articles for healthy cooking.',
  de: 'Entdecken Sie unsere Kaufberatungen, detaillierte Tests, Rezepte und Heißluftfritteusen-Vergleiche. Über 25 Expertenartikel.',
  es: 'Descubre nuestras guías de compra, tests detallados, recetas y comparativas de freidoras de aire. Más de 25 artículos expertos.',
  it: 'Scopri le nostre guide all\'acquisto, test dettagliati, ricette e confronti di friggitrici ad aria. Oltre 25 articoli esperti.',
  nl: 'Ontdek onze koopgidsen, gedetailleerde tests, recepten en airfryer vergelijkingen. Meer dan 25 expertartikelen.',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = LANGUAGES.includes(lang) ? lang : 'fr'
  return {
    title: metaTitles[safeLang],
    description: metaDescs[safeLang],
    alternates: {
      canonical: `${BASE_URL}/${safeLang}/blog`,
      languages: Object.fromEntries(LANGUAGES.map(l => [l, `${BASE_URL}/${l}/blog`])),
    },
  }
}

const blogIntro: Record<string, { title: string; subtitle: string }> = {
  fr: { title: 'Le Blog Home Nura', subtitle: 'Guides d\'achat, tests détaillés, recettes et comparatifs pour maîtriser votre airfryer.' },
  en: { title: 'The Home Nura Blog', subtitle: 'Buying guides, detailed reviews, recipes and comparisons to master your air fryer.' },
  de: { title: 'Der Home Nura Blog', subtitle: 'Kaufberatungen, detaillierte Tests, Rezepte und Vergleiche für Ihre Heißluftfritteuse.' },
  es: { title: 'El Blog Home Nura', subtitle: 'Guías de compra, tests detallados, recetas y comparativas para dominar tu freidora de aire.' },
  it: { title: 'Il Blog Home Nura', subtitle: 'Guide all\'acquisto, test dettagliati, ricette e confronti per padroneggiare la tua friggitrice ad aria.' },
  nl: { title: 'De Home Nura Blog', subtitle: 'Koopgidsen, gedetailleerde tests, recepten en vergelijkingen om uw airfryer te beheersen.' },
}

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const nonce = await getNonce()
  const intro = blogIntro[lang] || blogIntro.fr
  const allArticles = getArticleMetas()
  const categories = ['tests', 'guides', 'recettes', 'comparatifs', 'culture'] as const

  // Featured: most recent 3
  const featured = allArticles.slice(0, 3)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.breadcrumb_home || 'Home', item: `${BASE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/${lang}/blog` },
    ],
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: intro.title,
    description: intro.subtitle,
    url: `${BASE_URL}/${lang}/blog`,
    inLanguage: lang,
    publisher: {
      '@type': 'Organization',
      name: 'Home Nura',
      url: BASE_URL,
    },
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-hidden">
      <script type="application/ld+json" nonce={nonce} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" nonce={nonce} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Navbar currentLang={lang} />

      {/* Hero */}
      <section className="px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">Blog</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            {intro.title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">{intro.subtitle}</p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((article, i) => (
            <Link
              key={article.slug}
              href={`/${lang}/blog/${article.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200"
            >
              {article.images[0] && (
                <div className="aspect-video relative bg-slate-100 overflow-hidden">
                  <Image
                    src={article.images[0].src}
                    alt={article.images[0].alt[lang] || article.images[0].alt.fr}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {CATEGORIES[article.category]?.[lang] || CATEGORIES[article.category]?.fr}
                  </span>
                  <span className="text-xs text-slate-400">{article.readingTime} min</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title[lang] || article.title.fr}
                </h2>
                <p className="text-sm text-slate-500 line-clamp-3">{article.excerpt[lang] || article.excerpt.fr}</p>
                <p className="mt-4 text-sm font-semibold text-blue-600">
                  {lang === 'fr' ? 'Lire l\'article →' : lang === 'de' ? 'Artikel lesen →' : lang === 'es' ? 'Leer artículo →' : lang === 'it' ? 'Leggi l\'articolo →' : lang === 'nl' ? 'Lees artikel →' : 'Read article →'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Articles by Category */}
      {categories.map(cat => {
        const articles = getArticlesByCategory(cat).map(a => ({
          slug: a.slug, category: a.category, title: a.title, excerpt: a.excerpt,
          datePublished: a.datePublished, readingTime: a.readingTime, images: a.images,
        }))
        if (articles.length === 0) return null
        return (
          <section key={cat} className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100">
            <h2 className="text-3xl font-bold mb-8">{CATEGORIES[cat]?.[lang] || CATEGORIES[cat]?.fr}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(article => (
                <Link
                  key={article.slug}
                  href={`/${lang}/blog/${article.slug}`}
                  className="group flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200"
                >
                  {article.images[0] && (
                    <div className="w-24 h-24 flex-shrink-0 relative rounded-lg overflow-hidden bg-slate-100">
                      <Image
                        src={article.images[0].src}
                        alt={article.images[0].alt[lang] || article.images[0].alt.fr}
                        fill
                        className="object-cover"
                        sizes="96px"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-400">{article.readingTime} min · {new Date(article.datePublished).toLocaleDateString(lang === 'en' ? 'en-GB' : lang, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title[lang] || article.title.fr}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      {/* Internal Links Grid - Maillage */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100">
        <h2 className="text-2xl font-bold mb-6">
          {lang === 'fr' ? 'Guides populaires' : lang === 'de' ? 'Beliebte Ratgeber' : lang === 'es' ? 'Guías populares' : lang === 'it' ? 'Guide popolari' : lang === 'nl' ? 'Populaire gidsen' : 'Popular Guides'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href={`/${lang}/guides/airfryers`} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200">
            <p className="text-sm font-bold text-slate-900">{lang === 'fr' ? 'Guide complet des airfryers 2026' : lang === 'de' ? 'Kompletter Airfryer-Ratgeber 2026' : lang === 'es' ? 'Guía completa de freidoras 2026' : lang === 'it' ? 'Guida completa airfryer 2026' : lang === 'nl' ? 'Complete airfryer-gids 2026' : 'Complete air fryer guide 2026'}</p>
            <p className="text-xs text-slate-400 mt-1">{lang === 'fr' ? 'Notre comparatif expert des 9 meilleurs modèles' : 'Our expert comparison of the 9 best models'}</p>
          </Link>
          <Link href={`/${lang}/guides/airfryer-vs-four`} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200">
            <p className="text-sm font-bold text-slate-900">{lang === 'fr' ? 'Airfryer vs four traditionnel' : lang === 'de' ? 'Airfryer vs Backofen' : lang === 'es' ? 'Freidora de aire vs horno' : lang === 'it' ? 'Airfryer vs forno' : lang === 'nl' ? 'Airfryer vs oven' : 'Air fryer vs oven'}</p>
            <p className="text-xs text-slate-400 mt-1">{lang === 'fr' ? 'Comparatif détaillé des performances' : 'Detailed performance comparison'}</p>
          </Link>
          <Link href={`/${lang}`} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200">
            <p className="text-sm font-bold text-slate-900">{lang === 'fr' ? 'Nos meilleurs choix 2026' : lang === 'de' ? 'Unsere Top-Auswahl 2026' : lang === 'es' ? 'Nuestras mejores opciones 2026' : lang === 'it' ? 'Le nostre scelte migliori 2026' : lang === 'nl' ? 'Onze beste keuzes 2026' : 'Our top picks 2026'}</p>
            <p className="text-xs text-slate-400 mt-1">{lang === 'fr' ? 'Comparatif avec prix et scores Nura' : 'Comparison with prices and Nura scores'}</p>
          </Link>
        </div>
      </section>

      {/* CTA to main comparatif + homepage */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href={`/${lang}/guides/airfryers`} variant="secondary" size="lg">
          {dict.guide_title || 'Guide Complet des Airfryers 2026'} &rarr;
        </Button>
        <Button href={`/${lang}`} size="lg">
          {lang === 'fr' ? 'Voir le comparatif' : lang === 'de' ? 'Zum Vergleich' : lang === 'es' ? 'Ver comparativa' : lang === 'it' ? 'Vedi confronto' : lang === 'nl' ? 'Bekijk vergelijking' : 'See comparison'} &rarr;
        </Button>
      </section>

      {/* Footer */}
      <SiteFooter
        currentLang={lang}
        topContent={<p className="text-sm text-slate-500">{dict.affiliate_disclaimer}</p>}
        links={[
          { href: `/${lang}`, label: dict.breadcrumb_home || 'Accueil' },
          { href: `/${lang}/a-propos`, label: dict.about_link || 'À propos' },
          { href: `/${lang}/guides/airfryers`, label: dict.breadcrumb_guide || 'Guide' },
          { href: `/${lang}/mentions-legales`, label: dict.legal_notice },
          { href: `/${lang}/politique-confidentialite`, label: dict.privacy_policy },
        ]}
      />

      <CookieBanner lang={lang} dict={{ cookie_banner_text: dict.cookie_banner_text, cookie_accept: dict.cookie_accept, cookie_reject: dict.cookie_reject, cookie_learn_more: dict.cookie_learn_more }} />
    </div>
  )
}
