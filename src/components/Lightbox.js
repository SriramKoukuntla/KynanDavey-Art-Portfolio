import React, { useEffect } from 'react';

const Lightbox = ({ image, alt, onClose }) => {
  useEffect(() => {
    // Close on ESC key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!image) return null;

  const handleBackdropClick = (e) => {
    // Close if clicking on backdrop, not the image
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="lightbox-overlay" onClick={handleBackdropClick}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        ×
      </button>
      <div className="lightbox-content">
        <img 
          src={image} 
          alt={alt || 'Artwork'} 
          className="lightbox-image"
        />
      </div>
    </div>
  );
};

export default Lightbox;

