import { ORDER_URL } from "./constants";

export const purchase = async (stripe, cardElement, email, quota) => {
  // request the begin of payment
  const response = await window.fetch(ORDER_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'error',
    body: JSON.stringify({
      email,
      quota: quota.toString(),
    }),
  }).then((res) => res.json());
  if ('error' in response) {
    throw new Error(response.error);
  }

  // approve payment intent
  const result = await stripe.confirmCardPayment(response.clientSecret, {
    payment_method: {
      card: cardElement,
    }
  });

  if (result.error) {
    throw result.error;
  } else {
    if (result.paymentIntent.status === 'succeeded') {
      return true;
    }
  }
};