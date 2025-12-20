import React from 'react';

const Hero = () => {
  const handleScrollToPortfolio = (e) => {
    e.preventDefault();
    const element = document.getElementById('illustrative');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
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


