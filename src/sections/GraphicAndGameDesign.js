import React from 'react';
import Masonry from '../components/Masonry';

// Import Game Design
import DigitalArt1 from '../assets/Art/GameDesign&DigitalArt/DigitalArt1.png';
import DigitalArt2 from '../assets/Art/GameDesign&DigitalArt/DigitalArt2.png';
import DigitalArt3 from '../assets/Art/GameDesign&DigitalArt/DigitalArt3.png';

const items = [DigitalArt1, DigitalArt2, DigitalArt3];

const GraphicAndGameDesign = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Graphic and Game Design Works</h2>
        <Masonry items={items} enableLightbox={true} />
      </div>
    </section>
  );
};

export default GraphicAndGameDesign;

