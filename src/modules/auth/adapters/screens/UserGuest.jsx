import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Image, Button} from '@rneui/base'
import Logo from '../../../../../assets/Logo.png'

export default function UserGuest(props) {
  const {navigation} = props;

    return (
    <View style={styles.container}>
        <Image source={Logo} resizeMode= 'contain' style={styles.logo}/>
        <Text style={styles.title}>
        Bienvenido a Hotel Real del Valle
        </Text>
        <Text style={styles.description}>
        Somos un hotel familiar, ofrecemos los servicios de restaurante-bar en área de palapa, 
        amplio jardin, área juego infantil, alberca con chapoteadero climatizada con paneles solares, 
        estacionamiento y servicios de spa con previa reservación. 
        Inicie sesión para realizar una reserva ahora mismo.
        </Text>
        <Button 
        type='clear'
        onPress={() => navigation.navigate('Login')} 
        title='Iniciar Sesión'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        backgroundColor: '#fff'
    },
    logo:{
        width: 120,
        height: 120,
        marginBottom: 16
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000'
    },
    description:{
        padding: 16,
        textAlign: 'center',
    }
    
})