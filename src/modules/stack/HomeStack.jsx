import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurant from '../../modules/restaurant/Restaurant'
import Spa from '../../modules/spa/Spa.jsx'
import Miscellaneous from '../../modules/miscellaneous/Miscellaneous.jsx'
import Home from '../home/Home.jsx'
import Logo from '../../../assets/Logo.png'
import { Image } from '@rneui/base'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen
            name='Restaurant'
            component={Restaurant}
        />

        <Stack.Screen
            name='Spa'
            component={Spa}
        />

        <Stack.Screen
            name='Miscellaneous'
            component={Miscellaneous}
            options={{title:'Miscelaneos',
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
        
        <Stack.Screen
            name='Home'
            component={Home}
            options={{title: 'Inicio'}}
        />
    </Stack.Navigator>
    
  )
}