import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { stripePromise } from '../libs/stripe';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you call the backend API to charge the card
      fetch('/api/charge', {  // Note the updated URL to match the new path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: paymentMethod.id, // Assuming paymentMethod.id is obtained from Stripe elements
          amount: 1000, // Example amount in the smallest currency unit (e.g., cents)
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Payment success:', data);
      })
      .catch(error => {
        console.error('Payment error:', error);
      });
      
      
      
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default function WrappedCheckoutForm() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
