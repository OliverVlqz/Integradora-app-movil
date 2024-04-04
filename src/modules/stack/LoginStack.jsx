import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../auth/adapters/screens/Login'
import CreateAccount from '../auth/adapters/screens/CreateAccount'
import HomeStack from './HomeStack'

const Stack = createStackNavigator()

export default function LoginStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={
          {
          title: 'Login',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='CreateAccount'
        component={CreateAccount}
        options={{
          title: 'Create Account',
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  )
}
