import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'
import { getStaticProducts } from '@/lib/products'
import Comparator from '@/components/Comparator'
import { SectionHero, SiteFooter } from '@/components/ui'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

const pageContent: Record<string, { title: string; subtitle: string; intro: string; kicker: string; breadcrumb: string }> = {
  fr: {
    kicker: 'Outil de comparaison',
    title: 'Comparateur d\'airfryers',
    subtitle: 'Comparez jusqu\'à 3 modèles côte à côte',
    intro: 'Sélectionnez les modèles qui vous intéressent et consultez leurs caractéristiques en parallèle — note Nura, capacité, points forts et limites.',
    breadcrumb: 'Comparateur',
  },
  en: {
    kicker: 'Comparison tool',
    title: 'Air fryer comparator',
    subtitle: 'Compare up to 3 models side by side',
    intro: 'Pick the models you\'re considering and see their specs in parallel — Nura score, capacity, strengths and trade-offs.',
    breadcrumb: 'Comparator',
  },
  de: {
    kicker: 'Vergleichstool',
    title: 'Heißluftfritteusen-Vergleich',
    subtitle: 'Vergleichen Sie bis zu 3 Modelle direkt',
    intro: 'Wählen Sie die Modelle, die Sie interessieren, und sehen Sie deren Eigenschaften parallel — Nura-Bewertung, Kapazität, Stärken und Einschränkungen.',
    breadcrumb: 'Vergleich',
  },
  es: {
    kicker: 'Herramienta de comparación',
    title: 'Comparador de freidoras de aire',
    subtitle: 'Compara hasta 3 modelos lado a lado',
    intro: 'Selecciona los modelos que te interesan y consulta sus características en paralelo — nota Nura, capacidad, puntos fuertes y limitaciones.',
    breadcrumb: 'Comparador',
  },
  it: {
    kicker: 'Strumento di confronto',
    title: 'Comparatore di friggitrici ad aria',
    subtitle: 'Confronta fino a 3 modelli fianco a fianco',
    intro: 'Seleziona i modelli che ti interessano e vedi le loro caratteristiche in parallelo — voto Nura, capacità, punti di forza e limiti.',
    breadcrumb: 'Comparatore',
  },
  nl: {
    kicker: 'Vergelijkingstool',
    title: 'Airfryer-vergelijker',
    subtitle: 'Vergelijk tot 3 modellen naast elkaar',
    intro: 'Kies de modellen die u interesseren en bekijk hun specificaties parallel — Nura-score, capaciteit, sterke punten en beperkingen.',
    breadcrumb: 'Vergelijker',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const canonicalUrl = `https://homenura.com/${safeLang}/comparateur`
  return {
    title: `${c.title} | Home Nura`,
    description: c.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://homenura.com/${l}/comparateur`])
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

export default async function ComparateurPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const nonce = await getNonce()

  const rawProducts = getStaticProducts(safeLang)
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
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/comparateur` },
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
        <ol className="flex items-center gap-2">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-blue-600 transition-colors">
              Home
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
          { href: `/${safeLang}/guides/airfryers`, label: 'Guide' },
          { href: `/${safeLang}/blog`, label: 'Blog' },
          { href: `/${safeLang}/a-propos`, label: 'About' },
        ]}
      />
    </div>
  )
}
