import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../auth/adapters/screens/Login";
import CreateAccount from "../auth/adapters/screens/CreateAccount";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Login"
                component = {Login}
                options = {{title: "Inicio de sesión"}}
                />

                <Tab.Screen name='CreateAccount'
                component={CreateAccount}
                options={{title: "Crea tu cuenta"}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}