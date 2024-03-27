import React from 'react';
import {CartProvider} from './src/modules/cart/CartFuction';
import Navigation from "./src/modules/navigation/Navigation";
export default function App() {
  return (
<CartProvider>
    <Navigation/>
    </CartProvider>  );
}