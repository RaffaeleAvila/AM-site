// src/components/OptimizedImage.jsx
import { useState, useEffect, useRef } from 'react';
import assets, { generatePlaceholder } from '../config/assets';

/**
 * Componente immagine ottimizzato con:
 * - Lazy loading
 * - Placeholder durante il caricamento
 * - Fallback in caso di errore
 * - Skeleton loader animato
 * - Supporto per responsive images
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  fallback = assets.images.placeholder,
  placeholderText = 'AM',
  width,
  height,
  sizes,
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
  aspectRatio,
  objectFit = 'cover',
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer per lazy loading
  useEffect(() => {
    if (priority || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Gestione errore caricamento
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    
    // Prova prima con il fallback fornito, poi con il placeholder generato
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    } else {
      setImgSrc(generatePlaceholder(placeholderText));
    }
    
    onError && onError();
  };

  // Gestione caricamento completato
  const handleLoad = () => {
    setIsLoading(false);
    onLoad && onLoad();
  };

  // Calcola l'aspect ratio per il container
  const containerStyle = aspectRatio ? {
    aspectRatio,
    width: width || '100%',
    height: height || 'auto',
  } : {
    width: width || '100%',
    height: height || 'auto',
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
        </div>
      )}

      {/* Blur Placeholder */}
      {isLoading && !hasError && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 opacity-50"
          style={{ 
            backgroundImage: `url(${generatePlaceholder(placeholderText, 50)})` 
          }}
        />
      )}

      {/* Immagine principale */}
      {isInView && (
        <img
          ref={imgRef}
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : loading}
          onError={handleError}
          onLoad={handleLoad}
          className={`
            w-full h-full 
            object-${objectFit}
            transition-opacity duration-500
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${hasError ? 'filter grayscale' : ''}
          `}
          style={{
            objectFit,
          }}
        />
      )}

      {/* Overlay per errore */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-90">
          <div className="text-center p-4">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-gray-500">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente per Hero Images con effetto parallax
export const HeroImage = ({ src, alt, parallaxOffset = 0.5, ...props }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${scrollY * parallaxOffset}px)`,
        }}
      >
        <OptimizedImage
          {...props}
          src={src}
          alt={alt}
          priority={true}
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

// Componente per Gallery Images con zoom on hover
export const GalleryImage = ({ src, alt, caption, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        <OptimizedImage
          {...props}
          src={src}
          alt={alt}
          className="w-full h-full"
        />
      </div>
      
      {caption && (
        <div className={`
          absolute bottom-0 left-0 right-0 
          bg-gradient-to-t from-black/80 to-transparent
          text-white p-4
          transition-transform duration-300
          ${isHovered ? 'translate-y-0' : 'translate-y-full'}
        `}>
          <p className="text-sm font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
