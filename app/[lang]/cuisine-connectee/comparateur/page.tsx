import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'
import Comparator from '@/components/Comparator'
import { getSmartKitchenProducts } from '@/lib/smart-kitchen-products'

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
  const canonicalUrl = `https://homenura.com/${safeLang}/cuisine-connectee/comparateur`
  return {
    title: `${c.title} | Home Nura`,
    description: c.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://homenura.com/${l}/cuisine-connectee/comparateur`])
      ),
    },
    openGraph: {
      title: c.title,
      description: c.intro,
      url: canonicalUrl,
      type: 'website',
      images: [
        { url: 'https://homenura.com/og-image.png', width: 1200, height: 630, alt: c.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.intro,
      images: ['https://homenura.com/og-image.png'],
    },
  }
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
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-12 text-center">
        <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
          {c.kicker}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">
          {c.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-4">{c.subtitle}</p>
        <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">{c.intro}</p>
        <div className="h-[2px] w-16 bg-blue-600 mx-auto mt-8"></div>
      </section>

      {/* Comparator */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <Comparator products={products} currentLang={safeLang} />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mt-2 flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <Link href={`/${safeLang}`} className="hover:text-slate-600 transition-colors">Home</Link>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-slate-600 transition-colors">{c.breadcrumbRoot}</Link>
            <Link href={`/${safeLang}/blog`} className="hover:text-slate-600 transition-colors">Blog</Link>
            <Link href={`/${safeLang}/a-propos`} className="hover:text-slate-600 transition-colors">About</Link>
          </div>
          <div className="mt-4 text-xs font-bold text-slate-300 uppercase tracking-widest">
            &copy; 2026 HOME NURA EUROPE
          </div>
        </div>
      </footer>
    </div>
  )
}
