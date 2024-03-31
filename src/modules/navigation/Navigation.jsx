import React from 'react';
import { Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../auth/adapters/screens/Login";
import CreateAccount from "../auth/adapters/screens/CreateAccount";
import Home from "../../modules/home/Home.jsx"
import Restaurant from "../../modules/restaurant/Restaurant.jsx"
import Spa from "../../modules/spa/Spa.jsx"
import Rooms from "../../modules/rooms/Rooms.jsx"
import Logo from "../../../assets/Logo.png"
import HomeStack from '../../modules/stack/HomeStack.jsx'
import { Icon } from '@rneui/base'
import Profile from '../auth/adapters/screens/Profile.jsx'
import Cart from '../cart/Cart.jsx';


const Tab = createBottomTabNavigator();

const CustomHeaderTitle = ({ title }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={Logo}
        style={{ width: 30, height: 30, marginRight: 8 }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
    </View>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            // Retornar un Icon de React Native Elements
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

        <Tab.Screen name="Login"
          component={Login}
          options={{ title: "Inicio de sesión", headerShown: false}}
        />

        <Tab.Screen name='CreateAccount'
          component={CreateAccount}
          options={{ title: "Crea tu cuenta", headerShown: false}}
        />

        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            headerTitle: props => <CustomHeaderTitle title="Real del Valle" />,
            headerTitleAlign: 'center',
            title: "Inicio"
          }}
          
        />
         <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Carrito',
            headerStyle: {
                backgroundColor: '#7E8D56'
            },
            headerRight: () => (
                <Image
                    source={Logo}
                    style={{ width: 40, height: 30, marginRight: 10 }}
                />
            )
        }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Perfil',
            headerStyle: {
                backgroundColor: '#7E8D56'
            },
            headerRight: () => (
                <Image
                    source={Logo}
                    style={{ width: 40, height: 30, marginRight: 10 }}
                />
            )
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = 'material-community';

  switch (routeName) {
    case 'HomeStack':
      iconName = focused ? 'home' : 'home';
      break;
    case 'CreateAccount':
      iconName = focused ? 'account' : 'account-outline';
      break;
    case 'Login':
      iconName = focused ? 'login' : 'login';
      break;

    case 'Cart':
      iconName = focused ? 'cart': 'cart';
      break;
    case 'Profile':
      iconName = focused ? 'account-circle' : 'account-circle';
      break;
  }

  return { iconName, iconType };
};