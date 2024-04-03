import React, { useState, useEffect, useRef } from 'react';
import { CartProvider } from './src/modules/cart/CartFuction';
import Navigation from "./src/modules/navigation/Navigation";
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigation from './src/modules/navigation/LoginNavigation';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigatorRef = useRef();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsAuthenticated(true);
        navigatorRef.current.navigate('Main');
      }
    } catch (error) {
      console.error('Error al verificar la autenticación:', error);
    }
  };

  return (
    <NavigationContainer ref={navigatorRef}>
      <CartProvider>
        {isAuthenticated ? (
          <Naviga tion />
        ) : (
          <LoginNavigation />
        )}
      </CartProvider>
    </NavigationContainer>
  );
}
