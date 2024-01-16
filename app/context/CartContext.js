"use client"  

import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return action.payload; // Assuming action.payload is the updated cart array
    case 'UPDATE_CART':
      return action.payload; // Assuming action.payload is the updated cart array
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

// context/CartContext.js

// ... (previous code)
let storedCart 
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], (initial) => {
    if (typeof window !== "undefined") {
      try {
        storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : initial;
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        return initial;
      }
    } 
  });
  const [quantities, setQuantities] = useState(() => {
    const storedQuantities = localStorage.getItem('quantities');
    return storedQuantities ? JSON.parse(storedQuantities) : {};
  });
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('quantities', JSON.stringify(quantities));
  }, [quantities]);

  useEffect(() => {
    // Calculate subtotal whenever quantities change
    const newSubtotal = cart.reduce((acc, item) => {
      const quantity = quantities[item.id] || 1;
      return acc + item.price * quantity;
    }, 0);
    setSubtotal(newSubtotal);
  }, [quantities, cart]);

  const addToCart = (item, additionalInfo, quantity) => {
    const existingCartItemIndex = cart.findIndex((cartItem) => String(cartItem.id) === String(item.id));

    if (existingCartItemIndex !== -1) {
      // Item is already in the cart, update quantity and additionalInfo
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: quantity || 1,
      }));

      dispatch({
        type: 'UPDATE_CART',
        payload: cart.map((cartItem) =>
          String(cartItem.id) === String(item.id)
            ? {
                ...cartItem,
                quantity: quantity || 1,
                additionalInfo: additionalInfo || cartItem.additionalInfo, // Preserve existing additionalInfo if not provided
              }
            : cartItem
        ),
      });
    } else {
      // Item is not in the cart, add it
      dispatch({
        type: 'ADD_TO_CART',
        payload: [
          ...cart,
          {
            ...item,
            quantity: quantity || 1,
            additionalInfo: additionalInfo || {}, // Default to empty object if additionalInfo is not set
          },
        ],
      });

      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: quantity || 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    setQuantities((prevQuantities) => {
      const { [itemId]: removedItem, ...newQuantities } = prevQuantities;
      return newQuantities;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, quantities, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

// ... (remaining code)





const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };


