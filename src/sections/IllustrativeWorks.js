import React from 'react';
import Lightbox from '../components/Lightbox';
import useLightbox from '../hooks/useLightbox';
import powerRangers from '../assets/Art/IllustrativeWorks/PowerRangers.png';
import fractured from '../assets/Art/IllustrativeWorks/Fractured.png';
import cuteDucks from '../assets/Art/IllustrativeWorks/CuteDucks.png';
import postIts from '../assets/Art/IllustrativeWorks/PostIts.png';

const IllustrativeWorks = () => {
  const { lightboxImage, lightboxAlt, handleImageClick, closeLightbox } = useLightbox();

  return (
    <>
      <section id="illustrative" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Illustrative Works</h2>
          <div className="illustrative-custom-layout">
            <div className="illustrative-left">
              <div 
                className="illustrative-item clickable"
                onClick={() => handleImageClick(powerRangers, 'Power Rangers')}
              >
                <img src={powerRangers} alt="Power Rangers" loading="lazy" />
              </div>
            </div>
            <div className="illustrative-right">
              <div 
                className="illustrative-item clickable"
                onClick={() => handleImageClick(fractured, 'Fractured')}
              >
                <img src={fractured} alt="Fractured" loading="lazy" />
              </div>
            </div>
            <div className="illustrative-middle-top">
              <div 
                className="illustrative-item clickable"
                onClick={() => handleImageClick(cuteDucks, 'Cute Ducks')}
              >
                <img src={cuteDucks} alt="Cute Ducks" loading="lazy" />
              </div>
            </div>
            <div className="illustrative-middle-bottom">
              <div 
                className="illustrative-item clickable"
                onClick={() => handleImageClick(postIts, 'Post Its')}
              >
                <img src={postIts} alt="Post Its" loading="lazy" />
              </div>
            </div>
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

export default IllustrativeWorks;

