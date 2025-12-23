import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';

// Import Oil Paintings
import Hunger from '../assets/Art/OilPaintingWorks/Hunger.png';
import SelfPastNFuture from '../assets/Art/OilPaintingWorks/SelfPastNFuture.png';

// Import Acrylic Paintings
import Blotches from '../assets/Art/AcrylicPaintingWorks/Blotches.png';
import Landscape from '../assets/Art/AcrylicPaintingWorks/Landscape.png';

// Import Game Design
import DigitalArt1 from '../assets/Art/GameDesign&DigitalArt/DigitalArt1.png';
import DigitalArt2 from '../assets/Art/GameDesign&DigitalArt/DigitalArt2.png';
import DigitalArt3 from '../assets/Art/GameDesign&DigitalArt/DigitalArt3.png';

const ThreeColumnPainting = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const oilPaintings = [SelfPastNFuture, Hunger];
  const acrylicPaintings = [Landscape, Blotches];
  const graphicAndGameDesign = [DigitalArt2, DigitalArt1, DigitalArt3];

  const handleImageClick = (imageSrc, imageAlt) => {
    setLightboxImage(imageSrc);
    setLightboxAlt(imageAlt);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxAlt('');
  };

  const renderColumn = (title, items, columnClass) => {
    // Special layout for Graphic and Game Design with overlapping images
    if (columnClass === 'graphic-game-design') {
      return (
        <div className={`portfolio-column ${columnClass}`}>
          <h2 className="portfolio-column-title">{title}</h2>
          <div className="graphic-game-overlap-container">
            {items.map((item, index) => {
              const imageSrc = typeof item === 'string' ? item : item;
              const imageAlt = `${title} ${index + 1}`;
              
              // Positioning for overlapping effect
              let positionClass = '';
              let zIndex = 0;
              if (index === 0) {
                // DigitalArt2 - top-left, behind
                positionClass = 'overlap-top-left';
                zIndex = 1;
              } else if (index === 1) {
                // DigitalArt1 - middle-right, overlapping bottom-right of first
                positionClass = 'overlap-middle-right';
                zIndex = 2;
              } else if (index === 2) {
                // DigitalArt3 - bottom-left, overlapping bottom-left of second
                positionClass = 'overlap-bottom-left';
                zIndex = 3;
              }
              
              return (
                <div
                  key={index}
                  className={`overlap-item clickable visible ${positionClass}`}
                  style={{ zIndex }}
                  onClick={() => handleImageClick(imageSrc, imageAlt)}
                >
                  <div className="overlap-image-wrapper">
                    <img 
                      src={imageSrc} 
                      alt={imageAlt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    // Regular column layout for Oil and Acrylic Paintings
    return (
      <div className={`portfolio-column ${columnClass}`}>
        <h2 className="portfolio-column-title">{title}</h2>
        <div className="portfolio-column-masonry">
          {items.map((item, index) => {
            const imageSrc = typeof item === 'string' ? item : item;
            const imageAlt = `${title} ${index + 1}`;
            
            return (
              <div
                key={index}
                className="masonry-item clickable visible"
                onClick={() => handleImageClick(imageSrc, imageAlt)}
              >
                <div className="masonry-image-wrapper">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    onLoad={(e) => {
                      const img = e.target;
                      img.style.width = '100%';
                      img.style.height = 'auto';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="three-column-portfolio">
            {renderColumn('Oil Painting Works', oilPaintings, 'oil-paintings')}
            {renderColumn('Acrylic Painting Works', acrylicPaintings, 'acrylic-paintings')}
            {renderColumn('Graphic and Game Design Works', graphicAndGameDesign, 'graphic-game-design')}
          </div>
        </div>
      </section>
      <Lightbox 
        image={lightboxImage} 
        alt={lightboxAlt}
        onClose={closeLightbox}
      />
    </>
  );
};

export default ThreeColumnPainting;

