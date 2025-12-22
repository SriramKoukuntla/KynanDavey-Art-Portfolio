import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';

const IllustrativeWorks = ({ powerRangers, fractured, cuteDucks, postIts }) => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  const handleImageClick = (imageSrc, imageAlt) => {
    setLightboxImage(imageSrc);
    setLightboxAlt(imageAlt);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxAlt('');
  };

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

