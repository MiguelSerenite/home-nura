import { productPhotoCredits, type ProductPhoto } from '@/lib/product-photo'

/**
 * Credit line for a block of product thumbnails ("Photos : © Ninja,
 * © Philips"), too small to carry their own. Renders nothing when the
 * block shows no manufacturer photo.
 */
export default function PhotoCredits({
  photos,
  lang,
  className = 'mt-3 text-[11px] leading-snug text-slate-500',
}: {
  photos: readonly (ProductPhoto | undefined)[]
  lang: string
  className?: string
}) {
  const line = productPhotoCredits(photos, lang)
  return line ? <p className={className}>{line}</p> : null
}
