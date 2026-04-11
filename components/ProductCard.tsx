interface ProductProps {
  name: string;
  price: string;
  imageUrl: string;
  affiliateLink: string;
  rating: number;
}

export default function ProductCard({ name, price, imageUrl, affiliateLink, rating }: ProductProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
          {price}€
        </p>
        <a
          href={affiliateLink}
          target="_blank"
          rel="nofollow"
          className="mt-6 block w-full rounded-full bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-blue-700"
        >
          Vérifier le prix sur Amazon
        </a>
      </div>
    </div>
  );
}
