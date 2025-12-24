import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-description">
            Get in touch for collaborations, commissions, or inquiries about my work.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:contact@kynandavey.com" className="contact-link">
                contact@kynandavey.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Instagram:</span>
              <a 
                href="https://instagram.com/kynandavey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                @kynandavey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

