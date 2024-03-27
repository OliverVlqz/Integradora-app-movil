import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { Image } from '@rneui/base'
import { FlatList } from 'react-native-gesture-handler'
import FlatListRoom from './componentsRoom/FlatListRoom'
import Habitaciones from "../../../assets/hotel.jpg"
import {CartFuction} from '../cart/CartFuction';


const { height } = Dimensions.get('window')
export default function Rooms(props) {
    const {navigation} = props;
   const { cartItems, addItemToCart } = useContext(CartFuction);

    
    const agregarCarrito = (item) => {
        addItemToCart(item);
        navigation.navigate('Cart', { cartItems: [...cartItems, item] });
      };

    const data =  [
        {
        type: 'room',
        id: '1',
        t_habitacion: 'Sencilla',
        t_cama: '1 cama matrimonial',
        capacidad: 'Capacidad para 2 personas',
        precio: '$2.347.00',
        image: require('../../../assets/hotel.jpg'),
        action: () => navigation.navigate('RoomDetail',
        {
            id: '1',
            t_habitacion: 'Sencilla',
            t_cama: '1 cama matrimonial',
            capacidad: 'Capacidad para 2 personas',
            precio: '$2.347.00',
            image: require('../../../assets/hotel.jpg')
        }),
        customAction: () => navigation.navigate('Cart',
        {
            id: '1',
            t_habitacion: 'Sencilla',
            t_cama: '1 cama matrimonial',
            capacidad: 'Capacidad para 2 personas',
            precio: '$2.347.00',
            image: require('../../../assets/hotel.jpg')

        }
        ), // Navegación personalizada
    },
    {
        type: 'room',
        id: '2',
        t_habitacion: 'Junior Suite',
        t_cama: '1 cama King Size',
        capacidad: 'Capacidad para 2 personas',
        precio: '$2,849.00',
        image: require('../../../assets/hotel.jpg'),
        action: () => navigation.navigate('RoomDetail',
        {
            id: '2',
            t_habitacion: 'Junior Suite',
            t_cama: '1 cama King Size',
            capacidad: 'Capacidad para 2 personas',
            precio: '$2,849.00',
            image: require('../../../assets/hotel.jpg')
        }),
        customAction: () => navigation.navigate('Cart',
        {
            id: '2',
            t_habitacion: 'Junior Suite',
            t_cama: '1 cama King Size',
            capacidad: 'Capacidad para 2 personas',
            precio: '$2,849.00',
            image: require('../../../assets/hotel.jpg')
        }),
    },
    {
        type: 'room',
        id: '3',
        t_habitacion: 'Senior Suite',
        t_cama: '2 camas matrimoniales',
        capacidad: 'Capacidad para 4 personas',
        precio: '$3,482.00',
        image: require('../../../assets/hotel.jpg'),
        action: () => navigation.navigate('RoomDetail',
        {
            id: '3',
            t_habitacion: 'Senior Suite',
            t_cama: '2 camas matrimoniales',
            capacidad: 'Capacidad para 4 personas',
            precio: '$3,482.00',
            image: require('../../../assets/hotel.jpg')
        }),
        customAction: () => navigation.navigate('Cart',
        {
            id: '3',
            t_habitacion: 'Senior Suite',
            t_cama: '2 camas matrimoniales',
            capacidad: 'Capacidad para 4 personas',
            precio: '$3,482.00',
            image: require('../../../assets/hotel.jpg')
        }),
    },
    {
        type: 'room',
        id: '4',
        t_habitacion: 'Master Suite',
        t_cama: '1 cama King Size',
        capacidad: 'Capacidad para 2 personas',
        precio: '$2,850.00',
        image: require('../../../assets/hotel.jpg'),
        action: () => navigation.navigate('RoomDetail',
        {
            id: '4',
            t_habitacion: 'Master Suite',
            t_cama: '1 cama King Size',
            capacidad: 'Capacidad para 2 personas',
            precio: '$2,850.00',
            image: require('../../../assets/hotel.jpg')
        }),
        customAction: () => navigation.navigate('Cart',
        {
            id: '4',
            t_habitacion: 'Master Suite',
            t_cama: '1 cama King Size',
            capacidad: 'Capacidad para 2 personas',
            precio: '$2,850.00',
            image: require('../../../assets/hotel.jpg')
        }),
    },

]    


  return (
    <View style={styles.container}>
             <View style={styles.imageContainer}>
                <Image
                    source={Habitaciones}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Habitaciones</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <FlatListRoom
                    t_habitacion={item.t_habitacion}
                    t_cama={item.t_cama}
                    capacidad={item.capacidad}
                    precio={item.precio}
                    image={item.image}
                    action={() => item.action()}
                    //customAction={() => item.customAction()}
                    customAction={() => agregarCarrito(item)}
                    //navigation={navigation} 
                    />
            )}

                
                keyExtractor={item => item.id}
                style={[styles.scrollView, { paddingHorizontal: 12 }]}
            />
            </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: height / 4,
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

})