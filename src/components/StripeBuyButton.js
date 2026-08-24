import React, { useEffect, useState } from 'react';

const STRIPE_BUY_BUTTON_SCRIPT_ID = 'stripe-buy-button-js';
const STRIPE_BUY_BUTTON_SCRIPT_SRC = 'https://js.stripe.com/v3/buy-button.js';

const StripeBuyButton = ({
  buyButtonId,
  publishableKey,
  fallbackHref,
  fallbackText = 'Buy Now',
}) => {
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    if (!buyButtonId || !publishableKey) {
      return undefined;
    }

    let script = document.getElementById(STRIPE_BUY_BUTTON_SCRIPT_ID);

    if (script && script.dataset.loadFailed === 'true') {
      setScriptFailed(true);
      return undefined;
    }

    if (!script) {
      script = document.createElement('script');
      script.id = STRIPE_BUY_BUTTON_SCRIPT_ID;
      script.src = STRIPE_BUY_BUTTON_SCRIPT_SRC;
      script.async = true;
      // Without CORS opt-in the browser masks Stripe's exceptions as "Script error."
      script.crossOrigin = 'anonymous';

      document.body.appendChild(script);
    }

    // Ad blockers routinely block js.stripe.com, which would otherwise leave an
    // unupgraded custom element rendering as nothing at all.
    const handleError = () => {
      script.dataset.loadFailed = 'true';
      setScriptFailed(true);
    };

    script.addEventListener('error', handleError);

    return () => script.removeEventListener('error', handleError);
  }, [buyButtonId, publishableKey]);

  if (!buyButtonId || !publishableKey || scriptFailed) {
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
