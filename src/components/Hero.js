import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => {
  const handleScrollToPortfolio = (e) => {
    e.preventDefault();
    scrollToSection('illustrative');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Kynan Davey</h1>
        <p className="hero-subtitle">Art Portfolio</p>
        <p className="hero-description">
          A collection of illustrative, ceramic, painting, photographic, and graphic design works
        </p>
        <a href="#illustrative" className="cta-button" onClick={handleScrollToPortfolio}>
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default Hero;

