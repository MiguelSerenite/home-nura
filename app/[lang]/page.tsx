import { getDictionary } from './dictionaries'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import { getStaticProducts } from '@/lib/products'
import Link from 'next/link'

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Produits statiques avec liens affiliés
  const products = getStaticProducts(lang);

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
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

      {/* Why Trust Us */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">{dict.why_trust}</h2>
          <p className="text-slate-600 text-sm">{dict.expert_label}</p>
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

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">{dict.affiliate_disclaimer}</p>
          <div className="mt-6 flex justify-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span>&copy; 2026 HOME NURA EUROPE</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
