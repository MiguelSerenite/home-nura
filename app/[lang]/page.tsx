import { getDictionary } from './dictionaries'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/components/Navbar'
import { getAmazonProduct } from '@/lib/amazon'

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Liste d'ASINs pour remplir ta grille (à personnaliser plus tard)
  // On récupère les produits en parallèle pour la vitesse
  const asinList = ['B08P5B36MC', 'B09B8WLY9V', 'B07Z667S1T'];
  const products = await Promise.all(
    asinList.map(asin => getAmazonProduct(asin, lang))
  );

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
      <Navbar currentLang={lang} />

      {/* Hero Section - Vendre le concept */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Sélection Europe 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            {dict.welcome}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {dict.description}
          </p>
        </div>
      </section>

      {/* Product Section - Maximiser les clics */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="flex items-end justify-between mb-12 border-b border-slate-100 pb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Nos Incontournables</h2>
            <p className="text-slate-400 mt-1">Meilleur rapport qualité/prix testé par nos experts.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            product ? (
              <ProductCard
                key={index}
                name={product.ItemInfo.Title.DisplayValue}
                price={product.Offers.Listings[0].Price.DisplayAmount}
                imageUrl={product.Images.Primary.Large.URL}
                affiliateLink={product.DetailPageURL}
                rating={5}
              />
            ) : (
              <div key={index} className="animate-pulse bg-slate-100 rounded-[2.5rem] h-[450px]" />
            )
          ))}
        </div>
      </section>

      {/* Footer minimaliste et légal (Obligatoire pour Amazon) */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">
            En tant que Partenaire Amazon, Home Nura réalise un bénéfice sur les achats remplissant les conditions requises.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span>© 2026 HOME NURA EUROPE</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
