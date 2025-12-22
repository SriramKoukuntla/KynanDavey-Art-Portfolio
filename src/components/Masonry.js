import React, { useRef, useEffect, useState } from 'react';
import Lightbox from './Lightbox';

const Masonry = ({ items, enableLightbox = false }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const masonryRef = useRef(null);

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

    const masonryItems = masonryRef.current?.querySelectorAll('.masonry-item');
    masonryItems?.forEach((item) => observer.observe(item));

    return () => {
      masonryItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const handleImageClick = (imageSrc, imageAlt) => {
    if (enableLightbox) {
      setLightboxImage(imageSrc);
      setLightboxAlt(imageAlt);
    }
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxAlt('');
  };

  return (
    <>
      <div className="masonry-container" ref={masonryRef}>
        {items.map((item, index) => {
          const imageSrc = typeof item === 'string' ? item : item.src;
          const imageAlt = typeof item === 'string' ? `Artwork ${index + 1}` : (item.alt || `Artwork ${index + 1}`);
          
          return (
            <div
              key={index}
              className={`masonry-item ${visibleItems.includes(index) ? 'visible' : ''} ${enableLightbox ? 'clickable' : ''}`}
              data-index={index}
              onClick={() => enableLightbox && handleImageClick(imageSrc, imageAlt)}
            >
              <div className="masonry-image-wrapper">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  loading="lazy"
                  onLoad={(e) => {
                    // Ensure image maintains aspect ratio
                    const img = e.target;
                    img.style.width = '100%';
                    img.style.height = 'auto';
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
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
      {enableLightbox && (
        <Lightbox 
          image={lightboxImage} 
          alt={lightboxAlt}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default Masonry;

