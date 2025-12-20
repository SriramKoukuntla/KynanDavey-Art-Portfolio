import React, { useRef, useEffect, useState } from 'react';
import Gallery from './Gallery';

const TypographySection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const typographyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const id = entry.target.dataset.id;
              if (!prev.includes(id)) {
                return [...prev, id];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const items = typographyRef.current?.querySelectorAll('.typography-item');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const greekAlphabet = [
    ['Δ', 'Β', 'C', 'D', 'Ε', 'Γ', 'Γ', 'Η'],
    ['Γ', 'Γ', 'J', 'K', 'L', 'M', 'Ν', 'Ο'],
    ['Ρ', 'Ω', 'R', 'S', 'Τ', 'Υ', 'Υ', 'Υ'],
    ['Υ', 'Σ', 'X', 'Φ', 'Ξ', 'Θ', 'Θ', 'Θ']
  ];

  return (
    <section id="typography" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Typographic and Card Design Works</h2>
        
        <Gallery items={['Card Design', 'Typography 1']} />
        
        <div className="typography-showcase" ref={typographyRef}>
          <div className={`typography-item ${visibleItems.includes('card1') ? 'visible' : ''}`} data-id="card1">
            <h3>2345678910 JQKA</h3>
            <p>Playing card typography design</p>
          </div>
          <div className={`typography-item ${visibleItems.includes('card2') ? 'visible' : ''}`} data-id="card2">
            <h3>JOKES ON YOU</h3>
            <p>Experimental typography</p>
          </div>
        </div>

        <div className="typography-grid">
          <div className="typography-table">
            <h3>Greek Alphabet Typography</h3>
            <table className="greek-table">
              <tbody>
                {greekAlphabet.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((letter, colIndex) => (
                      <td key={colIndex}>{letter}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="quote-section">
          <blockquote className="dune-quote">
            "BLESS THE MAKER<br />
            ΔND H7S WATER.<br />
            BLESS THE COMING<br />
            ΔND GOING OF H7M.<br />
            MÁY H7S PASSAGE<br />
            CLEANSE THE WORLD,<br />
            ΔND KΞP THE WORLD<br />
            FOR H7S PEOPLE."
          </blockquote>
          <p className="quote-attribution">
            - DR. LŪĒT KYNĒS, DUNĒ.<br />
            SANDSTONE 8:1.8
          </p>
        </div>

        <div className="word-frequency">
          <h3>Word Frequency Typography</h3>
          <div className="word-grid">
            <span className="word-large">the</span>
            <span className="word-medium">like</span>
            <span className="word-medium">about</span>
            <span className="word-small">with</span>
            <span className="word-small">your</span>
            <span className="word-small">these</span>
            <span className="word-small">my</span>
            <span className="word-small">and</span>
            <span className="word-small">look</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;


