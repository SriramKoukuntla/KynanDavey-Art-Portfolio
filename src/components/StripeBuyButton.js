import React, { useEffect } from 'react';

const STRIPE_BUY_BUTTON_SCRIPT_ID = 'stripe-buy-button-js';
const STRIPE_BUY_BUTTON_SCRIPT_SRC = 'https://js.stripe.com/v3/buy-button.js';

const StripeBuyButton = ({
  buyButtonId,
  publishableKey,
  fallbackHref,
  fallbackText = 'Buy Now',
}) => {
  useEffect(() => {
    if (!buyButtonId || !publishableKey) {
      return;
    }

    if (document.getElementById(STRIPE_BUY_BUTTON_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement('script');
    script.id = STRIPE_BUY_BUTTON_SCRIPT_ID;
    script.src = STRIPE_BUY_BUTTON_SCRIPT_SRC;
    script.async = true;
    // Without CORS opt-in the browser masks Stripe's exceptions as "Script error."
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);
  }, [buyButtonId, publishableKey]);

  if (!buyButtonId || !publishableKey) {
    return (
      <a className="cta-button product-buy-button" href={fallbackHref}>
        {fallbackText}
      </a>
    );
  }

  return (
    <div className="product-buy-button stripe-buy-button-wrapper">
      <stripe-buy-button
        buy-button-id={buyButtonId}
        publishable-key={publishableKey}
      />
    </div>
  );
};

export default StripeBuyButton;
