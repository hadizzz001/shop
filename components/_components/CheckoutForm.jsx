import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useCart } from '../../app/context/CartContext'; 

const CheckoutForm = ({ personal, amount }) => { 
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { cart, removeFromCart, quantities, subtotal, addToCart } = useCart();
    
    useEffect(() => {
        console.log("personal:", personal);
        console.log("item:", cart);
    }, [personal]);

    const handleSubmit = async (event) => { 
        event.preventDefault();
        
        if (!stripe || !elements || loading) { 
            return;
        }
        
        setLoading(true); // Start loading
        
        const handleError = (error) => {
            setLoading(false); // Stop loading
            setErrorMessage(error.message);
        } 
        
        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError);
            return;
        }
        
        try {
            const res = await fetch('api/create-intent', {
                method: 'POST',
                body: JSON.stringify({
                    personal: personal,
                    info: cart,
                    amount: subtotal + personal.shipping
                })
            });
            
            const clientSecret = await res.json();
            
            const result = await stripe.confirmPayment({ 
                clientSecret,
                elements,
                confirmParams: {
                    return_url: "https://socialbang.netlify.app/test",
                },
            });
            
            if (result.error) { 
                console.log(result.error.message);
            } else { 
                // Payment successful
            }
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false); // Stop loading regardless of success or failure
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <PaymentElement />
                <button 
                    className='w-full p-3 mt-4 text-white rounded-md' 
                    style={{background:"#ea6a2b"}} 
                    disabled={loading} // Disable button when loading
                >
                    {loading ? 'Loading...' : 'Pay'}
                </button>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </form>
    );
};

export default CheckoutForm;
