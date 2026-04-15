import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'
import { buildPageMetadata } from '@/lib/seo'
import Comparator from '@/components/Comparator'
import { getSmartKitchenProducts } from '@/lib/smart-kitchen-products'
import { SectionHero, SiteFooter } from '@/components/ui'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

const pageContent: Record<string, {
  title: string
  subtitle: string
  intro: string
  kicker: string
  breadcrumbRoot: string
  breadcrumb: string
}> = {
  fr: {
    kicker: 'Outil de comparaison',
    title: 'Comparateur cuisine connectée',
    subtitle: 'Comparez jusqu\'à 3 modèles côte à côte',
    intro: 'Multicuiseurs, cafetières, balances, thermomètres, prises — sélectionnez les modèles qui vous intéressent et consultez leurs caractéristiques en parallèle. Note Nura, capacité, points forts et limites.',
    breadcrumbRoot: 'Cuisine connectée',
    breadcrumb: 'Comparateur',
  },
  en: {
    kicker: 'Comparison tool',
    title: 'Smart kitchen comparator',
    subtitle: 'Compare up to 3 models side by side',
    intro: 'Multicookers, coffee machines, scales, thermometers, smart plugs — pick the models you\'re considering and see their specs in parallel. Nura score, capacity, strengths and trade-offs.',
    breadcrumbRoot: 'Smart kitchen',
    breadcrumb: 'Comparator',
  },
  de: {
    kicker: 'Vergleichstool',
    title: 'Smarte-Küche-Vergleich',
    subtitle: 'Vergleichen Sie bis zu 3 Modelle direkt',
    intro: 'Multikocher, Kaffeemaschinen, Waagen, Thermometer, Steckdosen — wählen Sie die Modelle, die Sie interessieren, und sehen Sie deren Eigenschaften parallel. Nura-Bewertung, Kapazität, Stärken und Einschränkungen.',
    breadcrumbRoot: 'Smarte Küche',
    breadcrumb: 'Vergleich',
  },
  es: {
    kicker: 'Herramienta de comparación',
    title: 'Comparador cocina conectada',
    subtitle: 'Compara hasta 3 modelos lado a lado',
    intro: 'Ollas, cafeteras, básculas, termómetros, enchufes — selecciona los modelos que te interesan y consulta sus características en paralelo. Nota Nura, capacidad, puntos fuertes y limitaciones.',
    breadcrumbRoot: 'Cocina conectada',
    breadcrumb: 'Comparador',
  },
  it: {
    kicker: 'Strumento di confronto',
    title: 'Comparatore cucina connessa',
    subtitle: 'Confronta fino a 3 modelli fianco a fianco',
    intro: 'Multicottura, macchine da caffè, bilance, termometri, prese — seleziona i modelli che ti interessano e vedi le loro caratteristiche in parallelo. Voto Nura, capacità, punti di forza e limiti.',
    breadcrumbRoot: 'Cucina connessa',
    breadcrumb: 'Comparatore',
  },
  nl: {
    kicker: 'Vergelijkingstool',
    title: 'Slimme-keuken-vergelijker',
    subtitle: 'Vergelijk tot 3 modellen naast elkaar',
    intro: 'Multicookers, koffiemachines, weegschalen, thermometers, stekkers — kies de modellen die u interesseren en bekijk hun specificaties parallel. Nura-score, capaciteit, sterke punten en beperkingen.',
    breadcrumbRoot: 'Slimme keuken',
    breadcrumb: 'Vergelijker',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/cuisine-connectee/comparateur',
    title: `${c.title} | Home Nura`,
    description: c.intro,
  })
}

export default async function SmartKitchenComparatorPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const nonce = await getNonce()

  const rawProducts = getSmartKitchenProducts(safeLang)
  const products = rawProducts.map((p) => ({
    asin: p.asin,
    title: p.title,
    price: p.price,
    image: p.image,
    url: p.url,
    nuraScore: p.nuraScore,
    capacity: p.capacity,
    bestFor: p.bestFor,
    pros: p.pros,
    cons: p.cons,
  }))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbRoot, item: `https://homenura.com/${safeLang}/cuisine-connectee` },
      { '@type': 'ListItem', position: 3, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/cuisine-connectee/comparateur` },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar currentLang={safeLang} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-400" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-blue-600 transition-colors">
              {c.breadcrumbRoot}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-600 font-medium">{c.breadcrumb}</li>
        </ol>
      </nav>

      {/* Hero */}
      <SectionHero
        kicker={c.kicker}
        title={c.title}
        subtitle={c.subtitle}
        intro={c.intro}
      />

      {/* Comparator */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <Comparator products={products} currentLang={safeLang} />
      </section>

      {/* Footer */}
      <SiteFooter
        currentLang={safeLang}
        links={[
          { href: `/${safeLang}`, label: 'Home' },
          { href: `/${safeLang}/cuisine-connectee`, label: c.breadcrumbRoot },
          { href: `/${safeLang}/blog`, label: 'Blog' },
          { href: `/${safeLang}/a-propos`, label: 'About' },
        ]}
      />
    </div>
  )
}
