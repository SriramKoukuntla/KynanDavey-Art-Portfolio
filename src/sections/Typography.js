import React, { useState, useRef, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import useLightbox from '../hooks/useLightbox';

import CardDesign2 from '../assets/Art/TypographicWorks/CardDesign2.png';
import HisokaCards from '../assets/Art/TypographicWorks/HisokaCards.png';
import JokesOnYou from '../assets/Art/TypographicWorks/JokesOnYou.png';
import SandstoneEx from '../assets/Art/TypographicWorks/Sandstone Ex.png';
import Sandstone from '../assets/Art/TypographicWorks/Sandstone.png';
import Sandpaper from '../assets/Art/TypographicWorks/Sandpaper.png';
import Sandcastle from '../assets/Art/TypographicWorks/Sandcastle.png';

const cardDesignItems = [
  CardDesign2, 
  HisokaCards, 
  JokesOnYou, 
  SandstoneEx,
  Sandstone,
  Sandpaper,
  Sandcastle
];

const Typography = () => {
  // Typography playground state
  const [playgroundText, setPlaygroundText] = useState('ABCDE FGHIJK LMNOP QRS TUVWXYZ');
  const [fontFamily, setFontFamily] = useState('Sandpaper2');
  const [fontWeight, setFontWeight] = useState('400');
  const [fontStyle, setFontStyle] = useState('normal');
  const [fontSize, setFontSize] = useState(48);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.2);
  const [textColor, setTextColor] = useState('#d4af37');
  const { lightboxImage, lightboxAlt, handleImageClick, closeLightbox } = useLightbox();
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  // Create duplicated items for infinite loop (20 sets for seamless infinite scroll)
  const duplicatedItems = Array(20).fill(cardDesignItems).flat();

  // Calculate set width
  const getSetWidth = () => {
    const carousel = carouselRef.current;
    if (!carousel) return 0;
    const itemWidth = carousel.querySelector('.carousel-item')?.offsetWidth || 300;
    const gap = 24; // 1.5rem = 24px
    return cardDesignItems.length * (itemWidth + gap);
  };

  // Scroll left by 0.25 * setWidth
  const scrollLeft = () => {
    const carousel = carouselRef.current;
    if (!carousel || isScrolling.current) return;
    const setWidth = getSetWidth();
    const scrollAmount = setWidth * 0.25;
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  };

  // Scroll right by 0.25 * setWidth
  const scrollRight = () => {
    const carousel = carouselRef.current;
    if (!carousel || isScrolling.current) return;
    const setWidth = getSetWidth();
    const scrollAmount = setWidth * 0.25;
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Set initial scroll position to the middle set (set 5 out of 10)
    const scrollToMiddle = () => {
      const itemWidth = carousel.querySelector('.carousel-item')?.offsetWidth || 300;
      const gap = 24; // 1.5rem = 24px
      const setWidth = cardDesignItems.length * (itemWidth + gap);
      const middleSetStart = setWidth * 18.8; // Start at set 10 (middle of 5 sets)
      carousel.scrollLeft = middleSetStart;
    };

    // Wait for images to load before setting scroll position
    const timer = setTimeout(scrollToMiddle, 100);

    const handleScroll = () => {
      if (isScrolling.current) return;
      
      requestAnimationFrame(() => {
        if (isScrolling.current) return;
        // Scroll handler for future infinite scroll implementation
      });
    };

    carousel.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="typography" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Typography & Card Design Works</h2>
        
        <div className="typography-content-wrapper">
          <div className="typography-gallery">
            <div className="carousel-wrapper">
              <button 
                className="carousel-arrow carousel-arrow-left" 
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                ‹
              </button>
              <div className="carousel-container" ref={carouselRef}>
                {duplicatedItems.map((item, index) => {
                  const originalIndex = index % cardDesignItems.length;
                  const setNumber = Math.floor(index / cardDesignItems.length);
                  return (
                    <div
                      key={`${originalIndex}-${setNumber}`}
                      className="carousel-item"
                      onClick={() => handleImageClick(item, `Card Design ${originalIndex + 1}`)}
                    >
                      <img 
                        src={item} 
                        alt={`Card Design ${originalIndex + 1}`}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
              <button 
                className="carousel-arrow carousel-arrow-right" 
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>
          
          <div className="typography-playground">
            <h3 className="playground-subtitle">Typography Playground</h3>
            
            <div className="playground-container">
            <div className="playground-controls">
              <div className="control-group">
                <label htmlFor="playground-text">Text</label>
                <input
                  id="playground-text"
                  type="text"
                  value={playgroundText}
                  onChange={(e) => setPlaygroundText(e.target.value)}
                  className="playground-input"
                  placeholder="Enter text to preview"
                />
              </div>

              <div className="control-group">
                <label htmlFor="font-family">Font Family</label>
                <select
                  id="font-family"
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="playground-select"
                >
                  <option value="Sandpaper2">Sandpaper2</option>
                  <option value="SandcastleTest">SandcastleTest</option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="font-weight">Font Weight</label>
                <select
                  id="font-weight"
                  value={fontWeight}
                  onChange={(e) => {
                    setFontWeight(e.target.value);
                    if (e.target.value !== '400') {
                      setFontStyle('normal');
                    }
                  }}
                  className="playground-select"
                >
                  <option value="100">Thin</option>
                  <option value="400">Regular</option>
                  <option value="600">Semibold</option>
                  <option value="700">Bold</option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="font-style">Font Style</label>
                <select
                  id="font-style"
                  value={fontStyle}
                  onChange={(e) => {
                    setFontStyle(e.target.value);
                    if (e.target.value === 'italic') {
                      setFontWeight('400');
                    }
                  }}
                  className="playground-select"
                  disabled={fontWeight !== '400'}
                >
                  <option value="normal">Normal</option>
                  <option value="italic">Italic</option>
                </select>
              </div>

              <div className="control-group">
                <label htmlFor="font-size">Font Size: {fontSize}px</label>
                <input
                  id="font-size"
                  type="range"
                  min="12"
                  max="120"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="playground-slider"
                />
              </div>

              <div className="control-group">
                <label htmlFor="letter-spacing">Letter Spacing: {letterSpacing}px</label>
                <input
                  id="letter-spacing"
                  type="range"
                  min="-5"
                  max="20"
                  step="0.5"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(Number(e.target.value))}
                  className="playground-slider"
                />
              </div>

              <div className="control-group">
                <label htmlFor="line-height">Line Height: {lineHeight}</label>
                <input
                  id="line-height"
                  type="range"
                  min="0.8"
                  max="3"
                  step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="playground-slider"
                />
              </div>

              <div className="control-group">
                <label htmlFor="text-color">Text Color</label>
                <input
                  id="text-color"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="playground-color"
                />
              </div>
            </div>

            <div className="playground-preview">
              <div className="preview-label">Live Preview</div>
              <div
                className="preview-text"
                style={{
                  fontFamily: `'${fontFamily}', sans-serif`,
                  fontWeight: fontWeight,
                  fontStyle: fontStyle,
                  fontSize: `${fontSize}px`,
                  letterSpacing: `${letterSpacing}px`,
                  lineHeight: lineHeight,
                  color: textColor,
                }}
              >
                {playgroundText || 'Enter text to preview'}
              </div>
              <div className="preview-info">
                <div className="info-item">
                  <span className="info-label">Font:</span>
                  <span className="info-value">{fontFamily}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Weight:</span>
                  <span className="info-value">
                    {fontWeight === '100' ? 'Thin' : 
                     fontWeight === '400' ? 'Regular' : 
                     fontWeight === '600' ? 'Semibold' : 'Bold'}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Style:</span>
                  <span className="info-value">{fontStyle === 'italic' ? 'Italic' : 'Normal'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Size:</span>
                  <span className="info-value">{fontSize}px</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Letter Spacing:</span>
                  <span className="info-value">{letterSpacing}px</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Line Height:</span>
                  <span className="info-value">{lineHeight}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Lightbox 
        image={lightboxImage} 
        alt={lightboxAlt}
        onClose={closeLightbox}
      />
    </section>
  );
};

export default Typography;
