import React from 'react'
import CreateAccount from '../auth/adapters/screens/CreateAccount'
import Login from '../auth/adapters/screens/Login'
import UserGuest from '../auth/adapters/screens/UserGuest'
import UserLogged from '../auth/adapters/screens/UserLogged'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();


export default function AuthStack() {
  return (
   <Stack.Navigator initialRouteName= "UserLogged">
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Iniciar Sesión", headerShown: false}}
        />
        <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ title: "Crear Cuenta", headerShown: false}}
        />
        <Stack.Screen
            name="UserGuest"
            component={UserGuest}
            options={{ title: "User Guest", headerShown: false}}
        />
        <Stack.Screen
            name="UserLogged"
            component={UserLogged}
            options={{ title: "Cuenta", headerShown: false}}
        />

        </Stack.Navigator>

  )
}

