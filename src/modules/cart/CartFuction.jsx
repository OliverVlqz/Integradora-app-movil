
import React, { createContext, useState } from 'react';

export const CartFuction = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const updateCartItem = (updatedItem) => {
    const updatedCartItems = cartItems.map(item => item.id === updatedItem.id ? updatedItem : item);
    setCartItems(updatedCartItems);
  };

  const removeCartItem = (itemToRemove) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <CartFuction.Provider value={{ cartItems, addItemToCart, removeCartItem,updateCartItem }}>
      {children}
    </CartFuction.Provider>
  );
};
