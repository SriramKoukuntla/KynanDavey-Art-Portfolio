import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Kynan Davey</h1>
        <p className="hero-subtitle">Art Portfolio</p>
        <p className="hero-description">
          A collection of illustrative, ceramic, painting, photographic, and graphic design works
        </p>
        <div className="hero-cta-row">
          <Link to="/art" className="cta-button">
            View Portfolio
          </Link>
          <Link to="/products" className="cta-button">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
