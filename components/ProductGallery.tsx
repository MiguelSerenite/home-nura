'use client'

import { useState } from 'react'
import type { ProductPhoto } from '@/lib/product-photo'
import ProductPhotoImage from './ProductPhotoImage'
import ProductScenePhoto from './ProductScenePhoto'

const THUMB_LABEL: Record<string, (n: number, total: number) => string> = {
  fr: (n, t) => `Photo ${n} sur ${t}`,
  en: (n, t) => `Photo ${n} of ${t}`,
  de: (n, t) => `Foto ${n} von ${t}`,
  es: (n, t) => `Foto ${n} de ${t}`,
  it: (n, t) => `Foto ${n} di ${t}`,
  nl: (n, t) => `Foto ${n} van ${t}`,
  pl: (n, t) => `Zdjęcie ${n} z ${t}`,
  sv: (n, t) => `Bild ${n} av ${t}`,
  us: (n, t) => `Photo ${n} of ${t}`,
  ca: (n, t) => `Photo ${n} of ${t}`,
}

/**
 * Amazon-style product gallery: the framed packshot first, then the brand's
 * in-use, in-room and close-up photos, switched with thumbnails. Each photo
 * keeps its own credit. Fills its parent's width; the stage is square.
 */
export default function ProductGallery({ photo, lang, badge }: { photo: ProductPhoto; lang: string; badge?: string }) {
  const gallery = photo.gallery ?? []
  const [index, setIndex] = useState(0)
  const total = gallery.length + 1
  const scene = index > 0 ? gallery[index - 1] : undefined
  const label = THUMB_LABEL[lang] ?? THUMB_LABEL.en

  return (
    <div className="w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-brand-50">
        {scene ? (
          <ProductScenePhoto photo={scene} sizes="(min-width: 768px) 448px, 100vw" className="h-full w-full object-cover" />
        ) : (
          <ProductPhotoImage photo={photo} sizes="(min-width: 768px) 448px, 100vw" className="h-full w-full object-contain" />
        )}
        <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-white/85 px-1.5 py-0.5 text-[10px] leading-none text-slate-600">
          {scene ? scene.credit : photo.credit}
        </span>
        {badge && (
          <div className="absolute top-4 right-4 z-10 rounded-md bg-red-600 px-3 py-1 text-sm font-semibold whitespace-nowrap text-white shadow-md">
            {badge}
          </div>
        )}
      </div>
      <div className="mt-2 flex gap-2" role="group">
        {[undefined, ...gallery].map((g, i) => (
          <button
            key={g?.stem ?? photo.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={label(i + 1, total)}
            aria-pressed={index === i}
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-md border-2 bg-brand-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${index === i ? 'border-brand-600' : 'border-transparent hover:border-slate-300'}`}
          >
            {g ? (
              <ProductScenePhoto photo={g} sizes="56px" className="h-full w-full object-cover" />
            ) : (
              <ProductPhotoImage photo={photo} sizes="56px" className="h-full w-full object-contain" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
