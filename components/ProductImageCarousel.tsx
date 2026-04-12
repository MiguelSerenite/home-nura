'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
);

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
  badge?: string;
  /** YouTube video ID for product demo/review */
  videoId?: string;
}

export function ProductImageCarousel({
  images,
  alt,
  badge,
  videoId,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Total slides: video (if any) + images
  const hasVideo = !!videoId;
  const totalSlides = images.length + (hasVideo ? 1 : 0);
  // If video exists, index 0 = video, rest = images
  const videoSlideIndex = hasVideo ? 0 : -1;
  const isVideoSlide = hasVideo && currentIndex === 0;

  // Auto-rotate functionality (pauses on video slide)
  useEffect(() => {
    if (totalSlides <= 1 || isHovering || isVideoSlide || showVideo) {
      if (autoRotateTimerRef.current) {
        clearInterval(autoRotateTimerRef.current);
        autoRotateTimerRef.current = null;
      }
      return;
    }

    autoRotateTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => {
      if (autoRotateTimerRef.current) {
        clearInterval(autoRotateTimerRef.current);
      }
    };
  }, [totalSlides, isHovering, isVideoSlide, showVideo]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setShowVideo(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setShowVideo(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleThumbnailClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setShowVideo(false);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const hasSingleSlide = totalSlides === 1;

  // Get image index offset (0 if no video, 1 if video takes slot 0)
  const imageOffset = hasVideo ? 1 : 0;

  return (
    <div className="w-full">
      {/* Main Image/Video Container */}
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

        {/* Video Slide */}
        {hasVideo && (
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              currentIndex === videoSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {showVideo && currentIndex === videoSlideIndex ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={`${alt} - Video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={handlePlayVideo}
                className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center group cursor-pointer"
                aria-label="Play product video"
              >
                {/* YouTube thumbnail as background */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={`${alt} - Video thumbnail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl transform group-hover:scale-110 transition-transform">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                {/* Video label */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <PlayIcon className="w-3 h-3" /> Video
                </div>
              </button>
            )}
          </div>
        )}

        {/* Image Slides */}
        <div className={`relative w-full h-full ${isVideoSlide ? 'pointer-events-none z-0' : 'z-10'}`}>
          {images.map((image, index) => {
            const slideIndex = index + imageOffset;
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  slideIndex === currentIndex ? 'opacity-100' : 'opacity-0'
                } ${isTransitioning && slideIndex === currentIndex ? 'opacity-75' : ''}`}
              >
                <Image
                  src={image}
                  alt={`${alt} - Image ${index + 1}`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                  priority={index === 0 && !hasVideo}
                  loading={index === 0 && !hasVideo ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        {!hasSingleSlide && (
          <>
            <button
              onClick={handlePrevSlide}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 md:opacity-50 md:hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={handleNextSlide}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 md:opacity-50 md:hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Slide Counter */}
        {!hasSingleSlide && (
          <div className="absolute bottom-4 right-4 z-10 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
            {currentIndex + 1} / {totalSlides}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {!hasSingleSlide && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {/* Video Thumbnail */}
          {hasVideo && (
            <button
              onClick={() => handleThumbnailClick(0)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === 0
                  ? 'border-red-500 opacity-100'
                  : 'border-gray-300 opacity-70 hover:opacity-100 hover:border-gray-400'
              }`}
              aria-label="View video"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <PlayIcon className="w-6 h-6 text-white" />
              </div>
            </button>
          )}

          {/* Image Thumbnails */}
          {images.map((image, index) => {
            const slideIndex = index + imageOffset;
            return (
              <button
                key={index}
                onClick={() => handleThumbnailClick(slideIndex)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all ${
                  slideIndex === currentIndex
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
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductImageCarousel;
