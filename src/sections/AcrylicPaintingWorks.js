import React from 'react';
import Masonry from '../components/Masonry';

import Blotches from '../assets/Art/AcrylicPaintingWorks/Blotches.png';
import Landscape from '../assets/Art/AcrylicPaintingWorks/Landscape.png';

const items = [Blotches, Landscape];

const AcrylicPaintingWorks = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Acrylic Painting Works</h2>
        <Masonry items={items} enableLightbox={true} />
      </div>
    </section>
  );
};

export default AcrylicPaintingWorks;

