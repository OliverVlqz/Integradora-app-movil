import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import { Image } from '@rneui/base';
import Comida from "../../../assets/restaurante.jpg"
import { FlatList } from 'react-native-gesture-handler';
import FlatListRestaurant from './componentesRest/FlatListRestaurant';
import {CartFuction} from '../cart/CartFuction';

const { height } = Dimensions.get('window');

export default function Restaurant(props) {
    const {navigation} = props;
    const { cartItems, addItemToCart } = useContext(CartFuction);

    const agregarCarrito = (item) => {
        addItemToCart(item);
        navigation.navigate('Cart', { cartItems: [...cartItems, item] });
      };


const data =[
    {
        type: 'restaurant',
        id: '1',
        title: 'Bacalao',
        description: 'Bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
        price: "$120.00",
        img: require('../../../assets/restaurante.jpg'),    
        action: () => navigation.navigate('RestaurantDetail',
        {
            id: '1',
            title: 'Bacalao',
            description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
            img: require('../../../assets/restaurante.jpg')
        }),
    },
    {
        type: 'restaurant',
        id: '2',
        title: 'Bacalao',
        description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
        price: "$120.00",
        img: require('../../../assets/restaurante.jpg'),
        action: () => navigation.navigate('RestaurantDetail',
        {
            id: '2',
            title: 'Bacalao',
            description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
            img: require('../../../assets/restaurante.jpg')
        }),
    },
    {
        type: 'restaurant',
        id: '3',
        title: 'Bacalao',
        description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
        price: "$120.00",
        img: require('../../../assets/restaurante.jpg'),
        action: () => navigation.navigate('RestaurantDetail',
        {
            id: '3',
            title: 'Bacalao',
            description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
            img: require('../../../assets/restaurante.jpg')
        }),
    },
    {
        type: 'restaurant',
        id: '4',
        title: 'Bacalao',
        description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
        price: "$120.00",
        img: require('../../../assets/restaurante.jpg'),
        action: () => navigation.navigate('RestaurantDetail',
        {
            id: '4',
            title: 'Bacalao',
            description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.',
            img: require('../../../assets/restaurante.jpg') 
        }),
        }
]

    

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={Comida}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Restaurante</Text>
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={({item}) =>( 
                <FlatListRestaurant 
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.img}
                    action={() => item.action()}
                    customAction={() => agregarCarrito(item)}
                    isRestaurant={item.isRestaurant}

                />)}
                keyExtractor={item => item.id}
                style = {[styles.scrollView, {paddingHorizontal: 12}]}
            />
            </View>
    );
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
   

});

