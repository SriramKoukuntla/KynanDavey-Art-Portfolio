This is an art portfolio webiste for my roomate Kynan Davey.
Project is Hosted Here: https://kynandaveyart.netlify.app/

## Stripe setup

The Ragnarock product uses Stripe's embedded Buy Button. Create a `.env` file from `.env.example` and set:

```
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_or_test_key
REACT_APP_STRIPE_RAGNAROCK_BUY_BUTTON_ID=buy_btn_ragnarock_id
```

Restart the local dev server after changing these values.