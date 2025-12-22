import React from 'react';
import Masonry from '../components/Masonry';

import Hunger from '../assets/Art/OilPaintingWorks/Hunger.png';
import SelfPastNFuture from '../assets/Art/OilPaintingWorks/SelfPastNFuture.png';

const items = [Hunger, SelfPastNFuture];

const OilPaintingWorks = () => {
  return (
    <section id="painting" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Oil Painting Works</h2>
        <Masonry items={items} enableLightbox={true} />
      </div>
    </section>
  );
};

export default OilPaintingWorks;

