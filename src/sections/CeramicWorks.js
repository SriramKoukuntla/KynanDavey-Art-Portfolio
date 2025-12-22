import React from 'react';
import Masonry from '../components/Masonry';

import Cups from '../assets/Art/CeramicWorks/Cups.png';
import Bottle from '../assets/Art/CeramicWorks/Bottle.png';
import FrogsInTree from '../assets/Art/CeramicWorks/FrogsInTree.png';
import FrogYoga from '../assets/Art/CeramicWorks/FrogYoga.png';
import HeartBrokenFrog from '../assets/Art/CeramicWorks/HeartBrokenFrog.png';
import Purfume from '../assets/Art/CeramicWorks/Purfume.png';
import Sunflower from '../assets/Art/CeramicWorks/Sunflower.png';
import Trunk from '../assets/Art/CeramicWorks/Trunk.png';   

const items = [Cups, Bottle, FrogsInTree, FrogYoga, HeartBrokenFrog, Purfume, Sunflower, Trunk];

const CeramicWorks = () => {
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