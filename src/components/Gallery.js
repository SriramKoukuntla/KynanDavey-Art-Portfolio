import React, { useRef, useEffect, useState } from 'react';

const Gallery = ({ items, title }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const index = parseInt(entry.target.dataset.index);
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item');
    galleryItems?.forEach((item) => observer.observe(item));

    return () => {
      galleryItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="gallery-grid" ref={galleryRef}>
      {items.map((item, index) => {
        // Check if item is a string (path) or object with src and alt
        const imageSrc = typeof item === 'string' ? item : item.src;
        const imageAlt = typeof item === 'string' ? `Artwork ${index + 1}` : (item.alt || `Artwork ${index + 1}`);
        
        return (
          <div
            key={index}
            className={`gallery-item ${visibleItems.includes(index) ? 'visible' : ''}`}
            data-index={index}
          >
            <div className="gallery-image-container">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                loading="lazy"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="placeholder-image" style={{ display: 'none' }}>
                <span>{imageAlt}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;


