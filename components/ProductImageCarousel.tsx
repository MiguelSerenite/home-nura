'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
  badge?: string;
}

export function ProductImageCarousel({
  images,
  alt,
  badge,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate functionality
  useEffect(() => {
    if (images.length <= 1 || isHovering) {
      if (autoRotateTimerRef.current) {
        clearInterval(autoRotateTimerRef.current);
        autoRotateTimerRef.current = null;
      }
      return;
    }

    autoRotateTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (autoRotateTimerRef.current) {
        clearInterval(autoRotateTimerRef.current);
      }
    };
  }, [images.length, isHovering]);

  const handleNextImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleThumbnailClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const hasSingleImage = images.length === 1;

  return (
    <div className="w-full">
      {/* Main Image Container */}
      <div
        className="relative w-full bg-white rounded-lg shadow-sm overflow-hidden aspect-square"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-md">
            {badge}
          </div>
        )}

        {/* Main Image with Fade Transition */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } ${isTransitioning && index === currentIndex ? 'opacity-75' : ''}`}
            >
              <Image
                src={image}
                alt={`${alt} - Image ${index + 1}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if more than 1 image */}
        {!hasSingleImage && (
          <>
            <button
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 md:opacity-50 md:hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 md:opacity-50 md:hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {!hasSingleImage && (
          <div className="absolute bottom-4 right-4 z-10 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation - Only show if more than 1 image */}
      {!hasSingleImage && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-blue-500 opacity-100'
                  : 'border-gray-300 opacity-70 hover:opacity-100 hover:border-gray-400'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain p-1"
                sizes="80px"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductImageCarousel;
