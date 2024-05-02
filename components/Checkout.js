'use client'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm'
import { useSearchParams } from 'next/navigation';
import { useCart } from '../app/context/CartContext';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function Checkout({ personal }) {
	const { cart, removeFromCart, quantities, subtotal, addToCart } = useCart();
	const searchParams = useSearchParams();
	const options = {
		mode: 'payment',
		currency: 'usd',
		amount: 100, 
		layout: {
			type: 'tabs',
		  },
 
	}
	return (
		<Elements stripe={stripePromise} options={options}>
			<CheckoutForm personal={personal} amount={100} />
		</Elements>
	)
}

export default Checkout