import React from 'react';
import Masonry from '../components/Masonry';

import BirdsEating from '../assets/Art/PhotographicAndPhotoManipulationWorks/BirdsEating.png';
import BirdsFlying from '../assets/Art/PhotographicAndPhotoManipulationWorks/BirdsFlying.png';
import Branches from '../assets/Art/PhotographicAndPhotoManipulationWorks/Branches.png';
// import Eclipse from '../assets/Art/PhotographicAndPhotoManipulationWorks/Eclipse.png';
import Flame from '../assets/Art/PhotographicAndPhotoManipulationWorks/Flame.png';
import Graphiti1 from '../assets/Art/PhotographicAndPhotoManipulationWorks/Graphiti1.png';
import Graphiti2 from '../assets/Art/PhotographicAndPhotoManipulationWorks/Graphiti2.png';
import Lights from '../assets/Art/PhotographicAndPhotoManipulationWorks/Lights.png';
import POSTMORTEM from '../assets/Art/PhotographicAndPhotoManipulationWorks/POSTMORTEM.png';

const items = [BirdsEating, BirdsFlying, Branches, Flame, Graphiti1, Graphiti2, Lights, POSTMORTEM];

const Photography = () => {
  return (
    <section id="photography" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Photographic and Photo Manipulation Works</h2>
        <Masonry items={items} enableLightbox={true} />
      </div>
    </section>
  );
};

export default Photography;

