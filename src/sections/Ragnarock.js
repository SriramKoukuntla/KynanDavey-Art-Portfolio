import React from 'react';
import ragnarockBox from '../assets/Products/Ragnarock/BicycleCardsBox.png';

const Ragnarock = () => {
  return (
    <article className="product-feature">
      <div className="product-feature-image">
        <img src={ragnarockBox} alt="Ragnarock playing card box" />
      </div>
      <div className="product-feature-content">
        <p className="product-kicker">Card Product</p>
        <h3>Ragnarock</h3>
        <p>
          Inspired by the legends of Norse mythology, Ragnarock channels
          the drama of gods, giants, wolves, and world-ending prophecy
          into a bold deck made for collectors and card players alike.
        </p>
        <p>
          The product concept draws from Odin's wisdom, Thor's thunder,
          Loki's mischief, and the mythic fire of the final battle to
          create a dark, cinematic card experience.
        </p>
        <a
          className="cta-button product-buy-button"
          href="mailto:kynandaveyart@gmail.com?subject=Ragnarock%20Card%20Product%20Inquiry"
        >
          Buy Now
        </a>
      </div>
    </article>
  );
};

export default Ragnarock;
