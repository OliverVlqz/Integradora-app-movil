import React, { createContext, useState } from 'react';

export const CartFuction = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartFuction.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartFuction.Provider>
  );
};
