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
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7E8D56',
          },
        }}
      >
        <Tab.Screen name="Login"
          component={Login}
          options={{ title: "Inicio de sesión" }}
        />

        <Tab.Screen name='CreateAccount'
          component={CreateAccount}
          options={{ title: "Crea tu cuenta" }}
        />

        <Tab.Screen name='Rooms'
          component={Rooms}
          options={{ title: "Habitaciones" }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: props => <CustomHeaderTitle title="Real del Valle" />,
            headerTitleAlign: 'center'
          }}
        />

        <Tab.Screen name='Restaurant'
          component={Restaurant}
          options={{ title: "Restaurantes" }}
        />

        <Tab.Screen name='Spa'
          component={Spa}
          options={{ title: "Paquetes de Spa" }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  )
}