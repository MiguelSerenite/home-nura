import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'
import SmartKitchenQuiz from '@/components/SmartKitchenQuiz'
import {
  SMART_KITCHEN_CATEGORIES,
  getSmartKitchenProductsByCategory,
  type SmartKitchenCategory,
  type SmartKitchenProduct,
} from '@/lib/smart-kitchen-products'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

interface QuizPageContent {
  kicker: string
  title: string
  subtitle: string
  intro: string
  breadcrumb: string
  breadcrumbRoot: string
}

const pageContent: Record<string, QuizPageContent> = {
  fr: {
    kicker: 'Quiz cuisine connectée',
    title: 'Par où commencer ma cuisine connectée ?',
    subtitle: 'Recommandation ciblée en 2 questions',
    intro: 'Répondez à 2 questions simples et découvrez la catégorie qui aura le plus d\'impact chez vous — avec nos 3 modèles testés prêts à l\'achat.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Cuisine connectée',
  },
  en: {
    kicker: 'Smart kitchen quiz',
    title: 'Where should I start my smart kitchen?',
    subtitle: 'Targeted recommendation in 2 questions',
    intro: 'Answer 2 simple questions and discover the category that will have the biggest impact at home — with our 3 tested models ready to buy.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Smart kitchen',
  },
  de: {
    kicker: 'Smarte-Küche-Quiz',
    title: 'Wo fange ich meine smarte Küche an?',
    subtitle: 'Gezielte Empfehlung in 2 Fragen',
    intro: 'Beantworten Sie 2 einfache Fragen und entdecken Sie die Kategorie mit dem größten Einfluss bei Ihnen zu Hause — mit unseren 3 getesteten kaufbereiten Modellen.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Smarte Küche',
  },
  es: {
    kicker: 'Quiz cocina conectada',
    title: '¿Por dónde empezar mi cocina conectada?',
    subtitle: 'Recomendación dirigida en 2 preguntas',
    intro: 'Responde a 2 preguntas sencillas y descubre la categoría que tendrá más impacto en tu hogar — con nuestros 3 modelos probados listos para comprar.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Cocina conectada',
  },
  it: {
    kicker: 'Quiz cucina connessa',
    title: 'Da dove iniziare la mia cucina connessa?',
    subtitle: 'Consiglio mirato in 2 domande',
    intro: 'Rispondi a 2 semplici domande e scopri la categoria che avrà il maggior impatto a casa tua — con i nostri 3 modelli testati pronti all\'acquisto.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Cucina connessa',
  },
  nl: {
    kicker: 'Slimme-keuken-quiz',
    title: 'Waar begin ik met mijn slimme keuken?',
    subtitle: 'Gerichte aanbeveling in 2 vragen',
    intro: 'Beantwoord 2 eenvoudige vragen en ontdek de categorie die de grootste impact zal hebben bij u thuis — met onze 3 geteste aankoopklare modellen.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Slimme keuken',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const canonicalUrl = `https://homenura.com/${safeLang}/cuisine-connectee/quiz`
  return {
    title: `${c.title} | Home Nura`,
    description: c.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://homenura.com/${l}/cuisine-connectee/quiz`])
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

export default async function SmartKitchenQuizPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const nonce = await getNonce()

  // Preload products per category so the client component has everything it needs
  const productsByCategory = SMART_KITCHEN_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = getSmartKitchenProductsByCategory(safeLang, cat)
    return acc
  }, {} as Record<SmartKitchenCategory, SmartKitchenProduct[]>)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbRoot, item: `https://homenura.com/${safeLang}/cuisine-connectee` },
      { '@type': 'ListItem', position: 3, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/cuisine-connectee/quiz` },
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
      <nav className="max-w-4xl mx-auto px-6 pt-10 text-xs text-slate-400" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-blue-600 transition-colors">{c.breadcrumbRoot}</Link>
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
        <div className="h-[2px] w-16 bg-blue-600 mx-auto mt-8"></div>
      </section>

      {/* Quiz */}
      <section className="px-4 md:px-6 pb-20">
        <SmartKitchenQuiz productsByCategory={productsByCategory} currentLang={safeLang} />
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-500">
            <Link href={`/${safeLang}`} className="hover:text-slate-700 transition-colors">Home</Link>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-slate-700 transition-colors">{c.breadcrumbRoot}</Link>
            <Link href={`/${safeLang}/guides/cuisine-connectee`} className="hover:text-slate-700 transition-colors">Guide</Link>
            <Link href={`/${safeLang}/blog`} className="hover:text-slate-700 transition-colors">Blog</Link>
          </div>
          <div className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            &copy; 2026 HOME NURA EUROPE
          </div>
        </div>
      </footer>
    </div>
  )
}
