import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
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
    }, [personal, cart]);

    const calculateFinalTotal = () => {
        if (cart) {
            const result = cart.reduce(
                (acc, post) => {
                    const price = parseInt(post.price);
                    const qty = post.quantity;
                    acc.totalPrice += isNaN(price) || isNaN(qty) ? 0 : price * qty;
                    acc.totalItems += isNaN(qty) ? 0 : qty;
                    return acc;
                },
                { totalPrice: 0, totalItems: 0 }
            );

            return result;
        }

        return { totalPrice: 0, totalItems: 0 };
    };
    const finalTotal = calculateFinalTotal();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || loading) {
            console.log("Stripe not loaded, elements not available, or currently loading");
            return;
        }

        if (!personal) {
            console.log("Personal object is null or undefined");
            setErrorMessage('Personal details are not provided.');
            return;
        }

        // Check required personal fields
        const requiredFields = ['fname', 'lname', 'email', 'street'];
        const missingFields = requiredFields.filter(field => !personal[field] || personal[field].trim() === '');

        if (missingFields.length > 0) {
            console.log("Missing fields:", missingFields);
            setErrorMessage('Please complete all required fields.');
            return;
        }

        setLoading(true); // Start loading

        try {
            // Example: Call an API to verify a coupon code
            const couponResponse = await fetch('api/sendOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    data123: "abc",
                    htmlContent: `
                    <html>
                    <head>
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
                    </head> 
                    <body>
                      <h1>Order Details</h1>
                      <table class="table" style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">
                        <thead>
                          <tr>
                            <th style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">Product</th>
                            <th style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">image</th>
                            <th style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">Price</th>
                            <th style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">Quantity</th>
                            <th style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">Total</th>
                            <th style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">Customization</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${cart.map(product => `
                            <tr>
                              <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">${product.title}</td>
                              <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em"><img src=${product.img[0]} width=55 height=55 alt="Product image" /></td>
                              <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">$ ${product.price}</td>
                              <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">${product.quantity}</td>
                              <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">$ ${product.quantity * +product.price}</td> 
                              <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">
                              ${Object.entries(product.additionalInfo).map(([key, value]) => {
                                let content;
                                switch (key) {
                                  case 'imgz':
                                    content = `<div><strong>Front cover:</strong> <a href="${value}" target="_blank">View</a></div>`;
                                    break;
                                  case 'imgzz':
                                    content = `<div><strong>Back cover:</strong> <a href="${value}" target="_blank">View</a></div>`;
                                    break;
                                  case 'pdf':
                                    content = `<div><strong>PDF:</strong> <a href="${value}" target="_blank">View</a></div>`;
                                    break;
                                  default:
                                    content = `<div><strong>${key}:</strong> ${value}</div>`;
                                    break;
                                }
                                return content;
                              }).join('')}
                                </td>
                            </tr>
                          `).join('')}
                        </tbody>
                      </table>
                      <h2>Customer Information</h2>
                      <div>
                          <div className="flex justify-between mb-2">
                              <span>Name : </span>
                              <span>${personal.fname} ${personal.lname}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span>Phone : </span>
                              <span>${personal.phone}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span>Email : </span>
                              <span>${personal.email}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span>State : </span>
                              <span>${personal.state}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span>Suburb : </span>
                              <span>${personal.suburb}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span>Address : </span>
                              <span>${personal.street}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span>ZIP Code : </span>
                              <span>${personal.postcode}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span>Country : </span>
                              <span>${personal.country}</span>
                          </div> 
                      </div>

                      <hr />
                      <div className="flex justify-between mb-2">
                          <span style="font-weight:bold">Total Items : </span>
                          <span style="font-weight:bold">${finalTotal.totalItems}</span>
                      </div>
                        <div className="flex justify-between mb-2">
                            <span style="font-weight:bold">Shipping : </span>
                            <span style="font-weight:bold">$ ${personal.shipping}</span>
                        </div>
                      <div className="flex justify-between mb-2">
                          <span style="font-weight:bold">Subtotal : </span>
                          <span style="font-weight:bold">$ ${finalTotal.totalPrice}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                      <span style="font-weight:bolder; font-size:25px">Total : </span>
                      <span style="font-weight:bolder; font-size:25px">$ ${finalTotal.totalPrice + personal.shipping}</span>
                  </div>
                      

                    </body>
                    </html>
                  `

                })
            });



            const { error: submitError } = await elements.submit();
            if (submitError) {
                throw new Error(submitError.message);
            }

            const res = await fetch('api/create-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                    return_url: "https://socialbang.netlify.app/done",
                },
            });

            if (result.error) {
                throw new Error(result.error.message);
            } else {
                console.log("Payment successful");
                // Redirect or update UI accordingly
            }
        } catch (error) {
            console.error("Payment error:", error);
            setErrorMessage(error.message);
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
                    style={{ background: "#ea6a2b" }}
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
