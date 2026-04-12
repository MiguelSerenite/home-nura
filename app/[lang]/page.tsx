import { getDictionary } from './dictionaries'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import ComparisonTable from '@/components/ComparisonTable'
import CookieBanner from '@/components/CookieBanner'
import { getStaticProducts } from '@/lib/products'
import Link from 'next/link'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Produits statiques avec liens affiliés
  const products = getStaticProducts(lang);

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dict.breadcrumb_home,
        item: `https://homenura.com/${lang}`,
      },
    ],
  }

  // Comparison table product mapping
  const comparisonProducts = products.map(p => ({
    name: p.title,
    price: p.price,
    priceNumeric: p.priceNumeric,
    image: p.image,
    url: p.url,
    capacity: p.capacity,
    nuraScore: p.nuraScore,
    bestFor: p.bestFor,
    badge: p.badge,
    pros: p.pros,
    cons: p.cons,
  }))

  // Comparison table dictionary
  const tableDict = {
    table_title: dict.table_title,
    table_subtitle: dict.table_subtitle,
    col_product: dict.col_product,
    col_nura_score: dict.col_nura_score,
    col_capacity: dict.col_capacity,
    col_best_for: dict.col_best_for,
    col_price: dict.col_price,
    col_action: dict.col_action,
    col_pros: dict.col_pros,
    col_cons: dict.col_cons,
    sort_by: dict.sort_by,
    sort_price_asc: dict.sort_price_asc,
    sort_price_desc: dict.sort_price_desc,
    sort_score: dict.sort_score,
    buy_button: dict.buy_button,
    show_details: dict.show_details,
    hide_details: dict.hide_details,
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar currentLang={lang} />

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Europe 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            {dict.welcome}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.description}
          </p>
        </div>
      </section>

      {/* Why Trust Us - Enhanced with stats */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">{dict.why_trust}</h2>
          <p className="text-slate-600 text-sm text-center mb-8">{dict.expert_label}</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">50+</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_models_tested}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">200h+</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_hours_testing}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">6</div>
              <p className="text-sm text-slate-600 font-medium">{dict.stat_european_markets}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex items-end justify-between mb-12 border-b border-slate-100 pb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{dict.section_title}</h2>
            <p className="text-slate-400 mt-1">{dict.section_subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.title}
              price={product.price}
              imageUrl={product.image}
              affiliateLink={product.url}
              rating={5}
              buyButtonText={dict.buy_button}
              badge={product.badge}
            />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <ComparisonTable
          products={comparisonProducts}
          dict={tableDict}
        />
      </section>

      {/* SEO Content Sections */}

      {/* Why Trust Us Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-100">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">{dict.trust_section_title}</h2>
        <p className="text-slate-600 leading-relaxed text-base">{dict.trust_section_content}</p>
      </section>

      {/* Market Overview Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-100">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">{dict.market_section_title}</h2>
        <p className="text-slate-600 leading-relaxed text-base">{dict.market_section_content}</p>
      </section>

      {/* Testing Methodology Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-100">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">{dict.testing_section_title}</h2>
        <p className="text-slate-600 leading-relaxed text-base">{dict.testing_section_content}</p>
      </section>

      {/* Recommendation Guide Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-100 pb-8">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">{dict.recommendation_section_title}</h2>
        <p className="text-slate-600 leading-relaxed text-base">{dict.recommendation_section_content}</p>
      </section>

      {/* Guide CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <Link
          href={`/${lang}/guides/airfryers`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors"
        >
          {dict.guide_title} &rarr;
        </Link>
      </section>

      {/* FAQ Section with Schema */}
      <FaqSection faqs={dict.faq} title={dict.faq_title} />

      {/* Footer with legal links */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">{dict.affiliate_disclaimer}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <Link href={`/${lang}/a-propos`} className="hover:text-slate-600 transition-colors">
              {dict.about_link}
            </Link>
            <Link href={`/${lang}/mentions-legales`} className="hover:text-slate-600 transition-colors">
              {dict.legal_notice}
            </Link>
            <Link href={`/${lang}/politique-confidentialite`} className="hover:text-slate-600 transition-colors">
              {dict.privacy_policy}
            </Link>
            <Link href={`/${lang}/politique-cookies`} className="hover:text-slate-600 transition-colors">
              {dict.cookie_policy}
            </Link>
          </div>
          <div className="mt-4 flex justify-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span>&copy; 2026 HOME NURA EUROPE</span>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner
        lang={lang}
        dict={{
          cookie_banner_text: dict.cookie_banner_text,
          cookie_accept: dict.cookie_accept,
          cookie_reject: dict.cookie_reject,
          cookie_learn_more: dict.cookie_learn_more,
        }}
      />
    </div>
  )
}
