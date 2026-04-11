import { getDictionary } from '../../dictionaries'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import { getAmazonProduct } from '@/lib/amazon'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return {
    title: `${dict.guide_title} | Home Nura`,
    description: dict.guide_subtitle,
    openGraph: {
      title: dict.guide_title,
      description: dict.guide_subtitle,
      type: 'article',
    },
  }
}

export default async function AirfryerGuide({ params }: { params: { lang: string } }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  // Fetch products for the comparison section
  const asinList = ['B08P5B36MC', 'B09B8WLY9V', 'B07Z667S1T']
  const products = await Promise.all(
    asinList.map((asin) => getAmazonProduct(asin, lang))
  )

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
      <Navbar currentLang={lang} />

      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full">
            Guide Expert 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            {dict.guide_title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.guide_subtitle}
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{dict.why_trust}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
              <p className="text-sm text-slate-600 font-medium">
                {lang === 'fr' ? 'Modèles testés' : lang === 'de' ? 'Getestete Modelle' : lang === 'es' ? 'Modelos probados' : lang === 'it' ? 'Modelli testati' : lang === 'nl' ? 'Geteste modellen' : 'Models tested'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">200h+</div>
              <p className="text-sm text-slate-600 font-medium">
                {lang === 'fr' ? 'Heures de tests' : lang === 'de' ? 'Teststunden' : lang === 'es' ? 'Horas de prueba' : lang === 'it' ? 'Ore di test' : lang === 'nl' ? 'Testuren' : 'Hours of testing'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">6</div>
              <p className="text-sm text-slate-600 font-medium">
                {lang === 'fr' ? 'Marchés européens' : lang === 'de' ? 'Europäische Märkte' : lang === 'es' ? 'Mercados europeos' : lang === 'it' ? 'Mercati europei' : lang === 'nl' ? 'Europese markten' : 'European markets'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight mb-8">{dict.section_title}</h2>
        <p className="text-slate-500 mb-12">{dict.section_subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) =>
            product ? (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                    {dict.expert_label}
                  </div>
                )}
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.Images.Primary.Large.URL}
                    alt={product.ItemInfo.Title.DisplayValue}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {"★".repeat(5)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2 leading-tight">
                    {product.ItemInfo.Title.DisplayValue}
                  </h3>
                  <p className="mt-4 text-2xl font-black text-slate-900">
                    {product.Offers.Listings[0].Price.DisplayAmount}
                  </p>
                  <a
                    href={product.DetailPageURL}
                    target="_blank"
                    rel="nofollow"
                    className="mt-6 block w-full rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-700"
                  >
                    {dict.buy_button}
                  </a>
                </div>
              </div>
            ) : (
              <div key={index} className="animate-pulse bg-slate-100 rounded-3xl h-[450px]" />
            )
          )}
        </div>
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
