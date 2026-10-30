import { getImageProps } from 'next/image'
import { productPhotoPath, productPhotoSrcSet, type ProductPhoto } from '@/lib/product-photo'

interface ProductPhotoImageProps {
  photo: ProductPhoto
  /** Rendered width, for the browser's pick in the srcset. */
  sizes: string
  className?: string
}

/**
 * Official manufacturer photo in its Homenura frame (pre-built square
 * AVIF/WebP variants, see scripts/images/build-product-images.ts). The files
 * are already sized and compressed, so next/image only supplies the <img>
 * attributes (dimensions, lazy loading, decoding) and the optimizer is off.
 */
export default function ProductPhotoImage({ photo, sizes, className = '' }: ProductPhotoImageProps) {
  const { props } = getImageProps({
    src: productPhotoPath(photo.id, 800, 'webp'),
    alt: photo.alt,
    width: 1200,
    height: 1200,
    sizes,
    unoptimized: true,
    loading: 'lazy',
  })
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={productPhotoSrcSet(photo.id, 'avif')} sizes={sizes} />
      <img
        {...props}
        alt={photo.alt}
        srcSet={productPhotoSrcSet(photo.id, 'webp')}
        sizes={sizes}
        data-pin-media={photo.pin}
        data-pin-description={photo.alt}
        className={className}
      />
    </picture>
  )
}
