import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsAutoPlaying(false);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button 
          className="carousel-button carousel-button-prev" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <div className="carousel-slide-container">
          {items.map((item, index) => {
            const imageSrc = typeof item === 'string' ? item : item.src;
            const imageAlt = typeof item === 'string' ? `Artwork ${index + 1}` : (item.alt || `Artwork ${index + 1}`);
            
            return (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="carousel-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
        </div>

        <button 
          className="carousel-button carousel-button-next" 
          onClick={goToNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

