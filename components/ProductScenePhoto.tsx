import { getImageProps } from 'next/image'
import { productGalleryPath, productGallerySrcSet, type ProductGalleryPhoto } from '@/lib/product-photo'

interface ProductScenePhotoProps {
  photo: ProductGalleryPhoto
  /** Rendered width, for the browser's pick in the srcset. */
  sizes: string
  className?: string
  /** Above-the-fold banners load eagerly. */
  priority?: boolean
}

/**
 * A gallery photo of a product (in use, in a room, close-up): the brand's
 * own image, pre-built at its own aspect ratio (scripts/images/build-product-images.ts).
 * Like ProductPhotoImage, next/image only supplies the <img> attributes.
 */
export default function ProductScenePhoto({ photo, sizes, className = '', priority = false }: ProductScenePhotoProps) {
  const { props } = getImageProps({
    src: productGalleryPath(photo.stem, 800, 'webp'),
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
    sizes,
    unoptimized: true,
    loading: priority ? 'eager' : 'lazy',
  })
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={productGallerySrcSet(photo.stem, 'avif')} sizes={sizes} />
      <img {...props} alt={photo.alt} srcSet={productGallerySrcSet(photo.stem, 'webp')} sizes={sizes} className={className} />
    </picture>
  )
}

/** The photo to show the product in situation: in use first, then in a room. */
export function scenePhotoOf(gallery: readonly ProductGalleryPhoto[] | undefined): ProductGalleryPhoto | undefined {
  return gallery?.find((g) => g.role === 'in-use') ?? gallery?.find((g) => g.role === 'lifestyle')
}
