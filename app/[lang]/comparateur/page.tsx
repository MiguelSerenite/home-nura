import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { getStaticProducts } from '@/lib/products'
import Comparator from '@/components/Comparator'
import { SectionHero, SiteFooter } from '@/components/ui'
import { resolveLang, type Lang } from '@/lib/i18n'
import { ChevronRight } from 'lucide-react'


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
  pl: {
    kicker: 'Narzędzie porównawcze',
    title: 'Porównywarka frytkownic beztłuszczowych',
    subtitle: 'Porównaj do 3 modeli obok siebie',
    intro: 'Wybierz modele, które Cię interesują, i porównaj ich parametry obok siebie: Ocena Nura, pojemność, mocne strony i ograniczenia.',
    breadcrumb: 'Porównywarka',
  },
  sv: {
    kicker: 'Jämförelseverktyg',
    title: 'Jämför airfryrar',
    subtitle: 'Jämför upp till 3 modeller sida vid sida',
    intro: 'Välj de modeller du funderar på och se deras data bredvid varandra – Nura Score, volym, styrkor och svagheter.',
    breadcrumb: 'Jämförelseverktyg',
  },
  us: {
    kicker: 'Comparison tool',
    title: 'Air fryer comparison tool',
    subtitle: 'Compare up to 3 models side by side',
    intro: 'Pick the models you\'re considering and line up their specs — Nura Score, capacity, pros and cons.',
    breadcrumb: 'Compare',
  },
  ca: {
    kicker: 'Comparison tool',
    title: 'Air fryer comparison tool',
    subtitle: 'Compare up to 3 models side by side',
    intro: 'Pick the models you\'re considering and compare their specs at a glance — Nura score, capacity, strengths and trade-offs.',
    breadcrumb: 'Compare',
  },
}

// SERP title/description, kept apart from the on-page H1 and intro. Written
// for "air fryer (price) comparison" searches: models side by side and where
// to buy them. No prices: the comparator does not show any.
const seoMeta: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'Comparateur d’airfryers 2026 : 3 modèles côte à côte',
    description: 'Comparez les airfryers côte à côte : choisissez jusqu’à 3 modèles et voyez note Nura, capacité, points forts, limites et où les acheter sur Amazon.',
  },
  en: {
    title: 'Air Fryer Comparison 2026: Up to 3 Models Side by Side',
    description: 'Air fryers compared side by side: pick up to 3 models and see the Nura score, capacity, strengths and trade-offs, with where to buy each one on Amazon.',
  },
  de: {
    title: 'Heißluftfritteusen-Vergleich 2026: 3 Modelle nebeneinander',
    description: 'Heißluftfritteusen direkt vergleichen: bis zu 3 Modelle mit Nura-Bewertung, Kapazität, Stärken und Schwächen nebeneinander, mit Link zum Kauf auf Amazon.',
  },
  es: {
    title: 'Comparador de freidoras de aire 2026: 3 modelos a la vez',
    description: 'Compara freidoras de aire lado a lado: elige hasta 3 modelos y consulta nota Nura, capacidad, puntos fuertes, límites y dónde comprarlas en Amazon.',
  },
  it: {
    title: 'Comparatore friggitrici ad aria 2026: 3 modelli a confronto',
    description: 'Confronta le friggitrici ad aria fianco a fianco: fino a 3 modelli con voto Nura, capacità, punti di forza, limiti e dove acquistarle su Amazon.',
  },
  nl: {
    title: 'Airfryer-vergelijker 2026: 3 modellen naast elkaar',
    description: 'Vergelijk airfryers naast elkaar: kies tot 3 modellen en bekijk Nura-score, capaciteit, sterke punten, beperkingen en waar je ze op Amazon koopt.',
  },
  pl: {
    title: 'Porównywarka frytkownic beztłuszczowych 2026: do 3 modeli',
    description: 'Porównaj frytkownice beztłuszczowe obok siebie: wybierz do 3 modeli, zobacz Ocenę Nura, pojemność, mocne strony i ograniczenia oraz ofertę na Amazon.',
  },
  sv: {
    title: 'Jämför airfryrar 2026: upp till 3 modeller sida vid sida',
    description: 'Jämför airfryrar sida vid sida: välj upp till 3 modeller och se Nura Score, volym, styrkor och svagheter – och var du hittar varje modell på Amazon.',
  },
  us: {
    title: 'Air Fryer Comparison Tool 2026: 3 Models Side by Side',
    description: 'Compare air fryers side by side: pick up to 3 models and see the Nura Score, capacity, pros and cons, plus where to find each one on Amazon.',
  },
  ca: {
    title: 'Air Fryer Comparison 2026: Up to 3 Models Side by Side',
    description: 'Air fryers compared side by side: pick up to 3 models and see the Nura score, capacity, strengths and trade-offs, with where to buy each one on Amazon.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const seo = seoMeta[safeLang]
  return buildPageMetadata({
    lang: safeLang,
    path: '/comparateur',
    title: `${seo.title} | Home Nura`,
    description: seo.description,
  })
}

export default async function ComparateurPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  const rawProducts = getStaticProducts(safeLang)
  const products = rawProducts.map((p) => ({
    asin: p.asin,
    title: p.title,
    priceNumeric: p.priceNumeric,
    visual: p.visual,
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
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar currentLang={safeLang} />

      <main id="main">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-brand-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
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
      </main>

      {/* Footer */}
      <SiteFooter
        currentLang={safeLang}
      />
    </div>
  )
}
