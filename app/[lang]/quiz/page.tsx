import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'
import { getStaticProducts } from '@/lib/products'
import Quiz from '@/components/Quiz'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

const pageContent: Record<string, { title: string; subtitle: string; intro: string; kicker: string; breadcrumb: string }> = {
  fr: {
    kicker: 'Quiz personnalisé',
    title: 'Quel airfryer pour moi ?',
    subtitle: 'Recommandation sur mesure en 3 questions',
    intro: 'Répondez à 3 questions simples et découvrez le modèle qui correspond à votre foyer, votre budget et vos priorités.',
    breadcrumb: 'Quiz',
  },
  en: {
    kicker: 'Personalised quiz',
    title: 'Which air fryer for me?',
    subtitle: 'Tailored recommendation in 3 questions',
    intro: 'Answer 3 simple questions and discover the model that matches your household, budget and priorities.',
    breadcrumb: 'Quiz',
  },
  de: {
    kicker: 'Personalisiertes Quiz',
    title: 'Welche Heißluftfritteuse für mich?',
    subtitle: 'Maßgeschneiderte Empfehlung in 3 Fragen',
    intro: 'Beantworten Sie 3 einfache Fragen und entdecken Sie das Modell, das zu Ihrem Haushalt, Ihrem Budget und Ihren Prioritäten passt.',
    breadcrumb: 'Quiz',
  },
  es: {
    kicker: 'Quiz personalizado',
    title: '¿Qué freidora de aire para mí?',
    subtitle: 'Recomendación a medida en 3 preguntas',
    intro: 'Responde a 3 preguntas sencillas y descubre el modelo que se adapta a tu hogar, presupuesto y prioridades.',
    breadcrumb: 'Quiz',
  },
  it: {
    kicker: 'Quiz personalizzato',
    title: 'Quale friggitrice ad aria per me?',
    subtitle: 'Consiglio su misura in 3 domande',
    intro: 'Rispondi a 3 semplici domande e scopri il modello adatto alla tua famiglia, al tuo budget e alle tue priorità.',
    breadcrumb: 'Quiz',
  },
  nl: {
    kicker: 'Gepersonaliseerde quiz',
    title: 'Welke airfryer voor mij?',
    subtitle: 'Aanbeveling op maat in 3 vragen',
    intro: 'Beantwoord 3 eenvoudige vragen en ontdek het model dat past bij uw huishouden, budget en prioriteiten.',
    breadcrumb: 'Quiz',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const canonicalUrl = `https://homenura.com/${safeLang}/quiz`
  return {
    title: `${c.title} | Home Nura`,
    description: c.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://homenura.com/${l}/quiz`])
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

export default async function QuizPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const nonce = await getNonce()

  const rawProducts = getStaticProducts(safeLang)
  const products = rawProducts.map((p) => ({
    asin: p.asin,
    title: p.title,
    price: p.price,
    priceNumeric: p.priceNumeric,
    image: p.image,
    url: p.url,
    nuraScore: p.nuraScore,
    capacity: p.capacity,
    bestFor: p.bestFor,
  }))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/quiz` },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar currentLang={safeLang} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-10 text-xs text-slate-400" aria-label="Breadcrumb">
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
      <section className="max-w-3xl mx-auto px-6 pt-10 pb-10 text-center">
        <div className="text-[11px] font-bold tracking-[0.35em] uppercase text-blue-600 mb-5">
          {c.kicker}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">
          {c.title}
        </h1>
        <p className="text-lg text-slate-500 mb-3">{c.subtitle}</p>
        <p className="text-sm text-slate-500 max-w-xl mx-auto">{c.intro}</p>
      </section>

      {/* Quiz */}
      <section className="px-4 md:px-6 pb-20">
        <Quiz products={products} currentLang={safeLang} />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <Link href={`/${safeLang}`} className="hover:text-slate-600 transition-colors">Home</Link>
            <Link href={`/${safeLang}/guides/airfryers`} className="hover:text-slate-600 transition-colors">Guide</Link>
            <Link href={`/${safeLang}/comparateur`} className="hover:text-slate-600 transition-colors">Comparateur</Link>
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
