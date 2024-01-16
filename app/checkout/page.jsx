"use client"
import React from 'react'
import { useCart } from '../context/CartContext';
import OrderButton from '../../components/OrderButton';
import { useState, useEffect } from "react";

const page = () => {
    const { cart, removeFromCart, quantities, subtotal, addToCart } = useCart();
    const [localQuantities, setLocalQuantities] = useState(quantities);
    const [errors, setErrors] = useState({});
    const [value, setValue] = useState('');
    const [inputs, setInputs] = useState({
        email: "",
        fname: "",
        lname: "",
        phone: "",
        street: "",
        address: "",
        city: "",
        country: "",
        zip: "",
    });



    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    const handleQuantityChange = (itemId, quantity) => {
        addToCart(
            cart.find((item) => item.id === itemId),
            undefined, // No additionalInfo update here
            quantity
        );

        // Update localQuantities immediately (local state)
        setLocalQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: quantity,
        }));
    };

    useEffect(() => {
        // Update quantities in the context when localQuantities change
        setLocalQuantities(quantities);
    }, [quantities]);



    const hasAdditionalInfo = (item) => {
        return item.additionalInfo && Object.keys(item.additionalInfo).length > 0;
    };


    useEffect(() => {
        const newErrors = {};
        cart.forEach((item) => {
            if (!hasAdditionalInfo(item)) {
                newErrors[item.id] = 'Info is missing';
            }
        });
        setErrors(newErrors);
    }, [cart]);






    const handleTextboxChange = (textboxName) => (e) => {
        if (textboxName == "phone") {
            const numericValue = e.target.value.replace(/[^0-9]/g, '');
            setValue(numericValue);
        }
        setInputs((prevValues) => ({
            ...prevValues,
            [textboxName]: e.target.value,
        }));
    };


    const handleSelectChange = (event) => {
        setInputs((prevValues) => ({
            ...prevValues,
            country: event.target.value,
        }));
    };



    const isComponentDisabled = Object.values(inputs).some((value) => value.trim() === '');



 










    return (

        <div>

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\n\n.Checkout_Form_FieldWrapper input[type=text], .Checkout_Form_FieldWrapper input[type=email], .Checkout_Form_FieldWrapper input[type=tel], .Checkout_Form_FieldWrapper select {\n    -webkit-font-smoothing: antialiased;\n    font-family: Lato,sans-serif;\n    border: 1px solid #ccc !important;\n    border-radius: 4px;\n    line-height: 32px;\n    padding: 0 15px;\n    margin: 0;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    color: #666;\n    width: 100%;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    background: #fff;\n}\n\n"
                }}
            />


            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\n.Common_Button:focus, .Common_Button:hover { \n    background-image: none;\n    box-shadow: 0 20px 15px -17px rgba(0,0,0,.3), 0 1px 2px rgba(0,0,0,.3);\n    text-decoration: none;\n    color: white !important;\n}\n.Common_Button, .Common_Button:active, .Common_Button:visited {\n    background-color: #ea6a2b;\n    background-image: none;\n    border-radius: 5px;\n    border: none;\n    box-shadow: 0 27px 15px -17px rgba(0,0,0,.3), 0 2px 4px rgba(0,0,0,.3);\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-family: Lato,sans-serif;\n    font-size: 16px;\n    font-weight: 700;\n    height: 50px;\n    letter-spacing: 2px;\n    line-height: 50px;\n    outline: none;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: background-color .2s ease,box-shadow .2s ease;\n    width: 100%;\n}\n\n\n"
                }}
            />

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n  @media (min-width: 1025px){\n.Checkout__Column {\n    float: left;\n    width: 50%;\n    width: calc(50% - 10px) !important;\n}\n}\n"
                }}
            />



            <style
                dangerouslySetInnerHTML={{
                    __html: "\n.Checkout_SubTotal {\n    font-size: 24px !important; \n}\n"
                }}
            />




            {cart && cart.length > 0 ? (
                <div className="Checkout">
                    <div className="Checkout__Layout">

                        <div className="Checkout_SubHeading">
                            <div className="Checkout_SubHeading_Content">
                                <h2>Order Details</h2>
                            </div>
                        </div>
                        <div data-render-if="!cart-is-empty" className="Checkout__Columns" style={{ marginBottom: "7em", marginTop: "7em" }}>



                            <div className="Checkout__Column Checkout__Column_1">
                                <h2 className="Checkout__Column_Heading">
                                    <span className="Checkout__Column_Heading_Prefix">1.</span>
                                    <span className="Checkout__Column_Heading_Text">
                                        Delivery address
                                    </span>
                                </h2>
                                <div className="Checkout_Form_Fields">
                                    <div className="Checkout_Form_Fields_AllRequired">
                                        All fields required
                                    </div>
                                    <div className="Checkout_Form_Fields_Section Checkout_Form_Fields_Section-Shipping">
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-BillingEmail">
                                            <label>Email address*</label>
                                            <input
                                                type="email"
                                                id="billing_email"
                                                autoComplete="billing email"
                                                maxLength={80}
                                                value={inputs.email}
                                                onChange={handleTextboxChange('email')}
                                            />
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingFirstName">
                                            <label>First name*</label>
                                            <input
                                                type="text"
                                                id="shipping_first_name"
                                                autoComplete="shipping given-name"
                                                value={inputs.fname}
                                                onChange={handleTextboxChange('fname')}
                                            />
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingLastName">
                                            <label>Last name*</label>
                                            <input
                                                type="text"
                                                id="shipping_last_name"
                                                autoComplete="shipping family-name"
                                                value={inputs.lname}
                                                onChange={handleTextboxChange('lname')}
                                            />
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingPhoneNumber">
                                            <label>Telephone*</label>
                                            <input
                                                type="tel"
                                                id="shipping_phone_number"
                                                autoComplete="shipping tel"
                                                maxLength={20}
                                                value={value}
                                                onChange={handleTextboxChange('phone')}
                                            />
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingStreetAddressOne">
                                            <label>Delivery address*</label>
                                            <input
                                                type="text"
                                                id="shipping_street_address_1"
                                                autoComplete="shipping street-address address-line1"
                                                maxLength={60}
                                                value={inputs.street}
                                                onChange={handleTextboxChange('street')}
                                            />
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingStreetAddressTwo">
                                            <input
                                                type="text"
                                                id="shipping_street_address_2"
                                                autoComplete="shipping address-line2"
                                                maxLength={60}
                                                value={inputs.address}
                                                onChange={handleTextboxChange('address')}
                                            />
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingCity">
                                            <label>Suburb/town*</label>
                                            <input
                                                type="text"
                                                id="shipping_city"
                                                autoComplete="shipping address-level2"
                                                maxLength={40}
                                                value={inputs.city}
                                                onChange={handleTextboxChange('city')}
                                            />
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingRegion">
                                            <label>State/territory*</label>
                                            <span className="Checkout_Form_FieldWrapper_SelectWrapper">

                                                <select
                                                    id="shipping_state"
                                                    value={inputs.country}
                                                    onChange={handleSelectChange}
                                                >
                                                    <option value="0" selected>--Select State--</option>
                                                    <option value="Australian Capital Territory">Australian Capital Territory</option>
                                                    <option value="New South Wales">New South Wales</option>
                                                    <option value="Northern Territory">Northern Territory</option>
                                                    <option value="Queensland">Queensland</option>
                                                    <option value="South Australia">South Australia</option>
                                                    <option value="Tasmania">Tasmania</option>
                                                    <option value="Victoria">Victoria</option>
                                                    <option value="Western Australia">Western Australia</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div className="Checkout_Form_FieldWrapper Checkout_Form_FieldWrapper-ShippingPostCode">
                                            <label>Postcode/ZIP Code*</label>
                                            <input
                                                type="text"
                                                id="shipping_postcode"
                                                autoComplete="shipping postal-code"
                                                maxLength={10}
                                                value={inputs.zip}
                                                onChange={handleTextboxChange('zip')}
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div>




                            <div className="Checkout__Column Checkout__Column_0">
                                <h2 className="Checkout__Column_Heading">
                                    <span className="Checkout__Column_Heading_Prefix">2.</span>
                                    <span className="Checkout__Column_Heading_Text">Review your order</span>
                                    <span className="Checkout__Column_Heading_Suffix">({cart.length} item(s))</span>
                                </h2>
                                <div className="Checkout_Cart_Wrapper Checkout_Cart_Wrapper--Contents">
                                    <div className="Checkout_Cart_TableHeading">
                                        <span className="Checkout_Cart_TableHeading_Quantity">Qty</span>
                                        <span className="Checkout_Cart_TableHeading_Total">Total price</span>
                                    </div>
                                    <div className="Checkout_Cart_LineItems">
                                        {cart?.map((obj, index) => (

                                            <div>
                                                <div className="Checkout_Cart_LineItems_LineItem">
                                                    <div className="Checkout_Cart_LineItems_LineItem_Thumb">
                                                        <img src={obj.img[0]} />
                                                    </div>
                                                    <div className="Checkout_Cart_LineItems_LineItem_Details">
                                                        {obj.title}
                                                        <div>
                                                            <span>Category:</span>
                                                            <span>{obj.category}</span>
                                                        </div>
                                                        <div>
                                                            <span>Type:</span>
                                                            <span>{obj.type}</span>
                                                        </div>
                                                        <div className="Checkout_Cart_LineItems_LineItem_Details_Quantity">
                                                            <span>Qty:</span>

                                                            <input
                                                                type="text"
                                                                value={localQuantities[obj.id] || 1}
                                                                onChange={(e) => handleQuantityChange(obj.id, parseInt(e.target.value, 10))}
                                                            />

                                                        </div>
                                                        {errors[obj.id] && <p style={{ color: 'red' }}>{errors[obj.id]}<a style={{ color: "#4acb4a", display: "inline" }} href={`/product?id=${obj.id}&&custom=1`}> add now</a></p>}
                                                        <div
                                                            className="Checkout_Cart_LineItems_LineItem_Price"
                                                        >
                                                            <span className="Currency">
                                                                <span className="Currency_Monetary">${(obj.price * localQuantities[obj.id] || obj.price)}</span>
                                                                <span className="Currency_Code">USD</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <button className="Checkout_Cart_LineItems_LineItem_Remove" onClick={() => handleRemoveFromCart(obj.id)}>
                                                        <span className="Checkout_Cart_LineItems_LineItem_Remove_Cross">
                                                            <span />
                                                            <span />
                                                        </span>
                                                        <span className="Checkout_Cart_LineItems_LineItem_Remove_Spinner">
                                                            <span />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>

                                        ))
                                        }

                                    </div>

                                </div>
                                <div className="Checkout_SubTotal" style={{ marginBottom: "1em" }}>
                                    <div>Subtotal</div>
                                    <div>
                                        <span className="Currency">
                                            <span className="Currency_Monetary">${subtotal}</span>
                                            <span className="Currency_Code">USD</span>
                                        </span>
                                    </div>
                                </div>
                                {!isComponentDisabled ? (
                                    <p></p>
                                ) : (
                                    <p style={{ color: "red", textAlign: "center" }}><b>Please fill the form before continue</b></p>
                                )}
                                <OrderButton cartItems={cart} disabled={isComponentDisabled} userData={inputs} />
                            </div>






                        </div>
                    </div>
                </div>
            ) : (
                <div
                    data-render-if="cart-is-initialised,cart-is-empty"
                    className="Checkout_Empty"
                    style={{ marginTop: "2em" }}
                >
                    <div className="Checkout_Empty_IconWrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 27">
                            <circle cx={13} cy={24} r={2} />
                            <circle cx={24} cy={24} r={2} />
                            <path d="M1.5 2h3s1.5 0 2 2l4 13s.4 1 1 1h13s3.6-.3 4-4l1-5s0-1-2-1h-19" />
                        </svg>
                    </div>
                    <p className="EmptyCartBlurb">You have no items in your shopping cart.</p>
                    <a
                        href="/shop"
                        className="Common_Button"
                        data-auto-id="true"
                        id="protected/checkout/checkout-page-with-layout-conditionals-continueshoppingpath-2"
                    >
                        Continue shopping
                    </a>
                </div>

            )}
        </div>

    )
}

export default page