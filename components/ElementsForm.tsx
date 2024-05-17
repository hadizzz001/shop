"use client"


import { useEffect, useState } from 'react';
import type { StripeError } from "@stripe/stripe-js";
import { useCart } from '@/app/context/CartContext';
import * as React from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
    Elements,
} from "@stripe/react-stripe-js";

import getStripe from "@/utils/get-stripejs";
import { createPaymentIntent } from "@/actions/stripe";
import { Decimal } from '@prisma/client/runtime/library';











interface PersonalInfo {
    country: string;
    email: string;
    fname: string;
    lname: string;
    phone: string;
    postcode: string;
    shipping: number;
    state: string;
    street: string;
    suburb: string;
}

// Define the interface for the CheckoutForm props
interface CheckoutFormProps {
    personal: PersonalInfo;
}




function CheckoutForm({ personal, cart, finalTotal }: { personal: PersonalInfo; cart: any[]; finalTotal: { totalPrice: number; totalItems: number } }): JSX.Element {

    const [paymentType, setPaymentType] = React.useState<string>("");
    const [payment, setPayment] = React.useState<{
        status: "initial" | "processing" | "error";
    }>({ status: "initial" });
    const [errorMessage, setErrorMessage] = React.useState<string>("");

    const stripe = useStripe();
    const elements = useElements();



    const PaymentStatus = ({ status }: { status: string }) => {
        switch (status) {
            case "processing":
            case "requires_payment_method":
            case "requires_confirmation":
                return <h2>Processing...</h2>;

            case "requires_action":
                return <h2>Authenticating...</h2>;

            case "succeeded":
                return <h2 color='green'>Payment Succeeded! </h2>;

            case "error":
                return (
                    <> 
                        <p style={{color:"red"}} className="error-message">{errorMessage}</p>
                    </>
                );

            default:
                return null;
        }
    };





    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            e.preventDefault();
            // Abort if form isn't valid
            if (!e.currentTarget.reportValidity()) return;
            if (!elements || !stripe) return;

            const requiredFields: (keyof PersonalInfo)[] = ['fname', 'lname', 'email', 'street'];
            const missingFields = requiredFields.filter(field => !personal[field] || (personal[field] as string).trim() === '');

            if (missingFields.length > 0) { 
                setPayment({ status: "error" });
                setErrorMessage('Please complete all required fields.');
                return;
            }


            setPayment({ status: "processing" });

            const { error: submitError } = await elements.submit();

            if (submitError) {
                setPayment({ status: "error" });
                setErrorMessage(submitError.message ?? "An unknown error occurred");

                return;
            }

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
                                ${cart.map((product: any) => `
                                <tr>
                                  <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">${product.title}</td>
                                  <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em"><img src=${product.img[0]} width=55 height=55 alt="Product image" /></td>
                                  <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">$ ${product.price}</td>
                                  <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">${product.quantity}</td>
                                  <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">$ ${product.quantity * +product.price}</td> 
                                  <td style="border: 1px solid #000000; border-collapse: collapse; padding: 1em">
                                  ${Object.entries(product.additionalInfo).map(([key, value]) => {
                        let content;
                        // Convert the first letter of the key to uppercase
                        let displayKey = key.charAt(0).toUpperCase() + key.slice(1);
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
                                content = `<div><strong>${displayKey}:</strong> ${value}</div>`;
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
            })

            // Create a PaymentIntent with the specified amount.
            const { client_secret: clientSecret } = await createPaymentIntent(
                // new FormData(e.target as HTMLFormElement),
                finalTotal.totalPrice + personal.shipping
            );

            // Use your card Element with other Stripe.js APIs
            const { error: confirmError } = await stripe!.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: "https://socialbang.netlify.app/done",
                    payment_method_data: {
                        billing_details: {
                            name: "Customer",
                        },
                    },
                },
            });

            if (confirmError) {
                setPayment({ status: "error" });
                setErrorMessage(confirmError.message ?? "An unknown error occurred");
            }
        } catch (err) {
            const { message } = err as StripeError;

            setPayment({ status: "error" });
            setErrorMessage(message ?? "An unknown error occurred");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>

                <fieldset className="elements-style">
                    <legend>Your payment details:</legend>

                    <div className="FormRow elements-style">
                        <PaymentElement
                            onChange={(e) => {
                                setPaymentType(e.value.type);
                            }}
                        />
                    </div>
                </fieldset>
                <button
                    className='w-full p-3 mt-4 text-white rounded-md'
                    style={{ background: "#ea6a2b" }}
                    type="submit"
                    disabled={
                        !["initial", "succeeded", "error"].includes(payment.status) ||
                        !stripe
                    }
                >
                    Pay
                </button>
            </form> 
            <PaymentStatus status={payment.status} />
        </>
    );
}

export default function ElementsForm({ personal }: CheckoutFormProps): JSX.Element {

    const { cart } = useCart();


    const calculateFinalTotal = () => {
        if (cart) {
            const result = cart.reduce(
                (acc: any, post: any) => {
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




    useEffect(() => {
        console.log("personal:", personal);
        console.log("item:", cart);
    }, [personal, cart]);

    return (
        <Elements
            stripe={getStripe()}
            options={{
                appearance: {
                    variables: {
                        colorIcon: "#6772e5",
                        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    },
                },
                currency: "usd",
                mode: "payment",
                amount: finalTotal.totalPrice * 100
            }}
        >
            <CheckoutForm personal={personal} cart={cart} finalTotal={finalTotal} />
        </Elements>
        
    );
}
