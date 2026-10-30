import type { ProductPhoto } from '@/lib/product-photo'
import ProductScenePhoto, { scenePhotoOf } from './ProductScenePhoto'

/**
 * Wide photo of the page's top product in use, under the page title, as
 * vergleich.org opens its comparisons. The brand's own photo, captioned
 * and credited; nothing when the product has no in-use or in-room photo.
 */
export default function ProductSceneBanner({ photo }: { photo?: ProductPhoto }) {
  const scene = scenePhotoOf(photo?.gallery)
  if (!scene) return null
  return (
    <figure className="max-w-5xl mx-auto px-4 md:px-6 pb-10">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-brand-50 shadow-sm">
        <ProductScenePhoto
          photo={scene}
          sizes="(min-width: 1024px) 976px, 100vw"
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <figcaption className="mt-2 flex flex-wrap justify-between gap-x-4 text-xs text-slate-500">
        <span>{scene.alt}</span>
        <span>{scene.credit}</span>
      </figcaption>
    </figure>
  )
}
