import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = (): Promise<Stripe | null> => {
  if (!stripePromise) {
    const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (typeof stripePublishableKey === "string") {
      stripePromise = loadStripe(stripePublishableKey);
    } else {
      // Handle the case when the key is not defined or not a string
      stripePromise = Promise.resolve(null);
    }
  }
  return stripePromise;
};

export default getStripe;
