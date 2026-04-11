import Image from 'next/image'

interface ProductProps {
  name: string;
  price: string;
  imageUrl: string;
  affiliateLink: string;
  rating: number;
  buyButtonText?: string;
  badge?: string;
}

export default function ProductCard({ name, price, imageUrl, affiliateLink, rating, buyButtonText, badge }: ProductProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1">
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
          {badge}
        </div>
      )}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1 text-amber-400 mb-2">
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </div>
        <h3 className="text-lg font-bold text-slate-900 line-clamp-2 leading-tight">
          {name}
        </h3>
        <p className="mt-4 text-2xl font-black text-slate-900">
          {price}
        </p>
        <a
          href={affiliateLink}
          target="_blank"
          rel="nofollow"
          className="mt-6 block w-full rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-700"
        >
          {buyButtonText || 'Vérifier le prix sur Amazon'}
        </a>
      </div>
    </div>
  );
}
