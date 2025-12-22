import React from 'react';
import Masonry from '../components/Masonry';

const CeramicWorks = ({ items }) => {
  return (
    <section id="ceramic" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Ceramic Works</h2>
        <Masonry items={items} enableLightbox={false} />
      </div>
    </section>
  );
};

export default CeramicWorks;

