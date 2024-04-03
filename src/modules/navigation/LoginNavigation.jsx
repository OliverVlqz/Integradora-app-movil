import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginStack from '../stack/LoginStack';
import CreateAccountStack from '../stack/CreateAccountStack';
import HomeStack from '../../modules/stack/HomeStack';
import Profile from '../auth/adapters/screens/Profile';
import { Icon } from '@rneui/base';

const Tab = createBottomTabNavigator();

export default function LoginNavigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error al verificar la autenticación:', error);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const { iconName, iconType } = getIconName(route.name, focused);
          return <Icon name={iconName} type={iconType} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7E8D56',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#7E8D56',
        },
      })}
    >
      {isAuthenticated ? (
        <>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Tab.Screen 
          name="Login" 
          component={LoginStack}
          options={{headerShown: false}} />
          <Tab.Screen
            name="CreateAccount"
            component={CreateAccountStack}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = 'material-community';

  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home';
      break;
    case 'CreateAccount':
      iconName = focused ? 'account' : 'account-outline';
      break;
    case 'Login':
      iconName = focused ? 'login' : 'login';
      break;
    case 'Profile':
      iconName = focused ? 'account-circle' : 'account-circle';
      break;
  }

  return { iconName, iconType };
};
