import React from 'react';
import Gallery from './Gallery';
import Carousel from './Carousel';
import Masonry from './Masonry';

const PortfolioSection = ({ id, title, items, children, className = '', enableLightbox = false, useCarousel = false, useMasonry = false }) => {
  return (
    <section id={id} className={`portfolio-section ${className}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {items && useCarousel ? (
          <Carousel items={items} />
        ) : items && useMasonry ? (
          <Masonry items={items} enableLightbox={enableLightbox} />
        ) : items ? (
          <Gallery items={items} title={title} enableLightbox={enableLightbox} />
        ) : null}
        {children}
      </div>
    </section>
  );
};

export default PortfolioSection;


