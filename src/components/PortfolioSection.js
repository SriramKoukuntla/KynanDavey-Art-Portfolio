import React from 'react';
import Gallery from './Gallery';

const PortfolioSection = ({ id, title, items, children, className = '' }) => {
  return (
    <section id={id} className={`portfolio-section ${className}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {items && <Gallery items={items} title={title} />}
        {children}
      </div>
    </section>
  );
};

export default PortfolioSection;


