import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { Image } from '@rneui/base';
import Comida from "../../../assets/restaurante.jpg"
import { FlatList } from 'react-native-gesture-handler';
import FlatListRestaurant from './componentesRest/FlatListRestaurant';
import {CartFuction} from '../cart/CartFuction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const { height } = Dimensions.get('window');

export default function Restaurant(props) {
    const {navigation} = props;

    const [elements, setElements] = useState([]);

    const { cartItems, addItemToCart, updateCartItem } = useContext(CartFuction); 

                    const agregarCarrito = (item, quantity) => {
                        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
                        if (itemIndex !== -1) {
                            const updatedCartItems = [...cartItems];
                            updatedCartItems[itemIndex].quantity += quantity;
                            updateCartItem(updatedCartItems[itemIndex]); 
                        } else {
                            addItemToCart({ ...item, quantity });
                        }
                        navigation.navigate('Cart');
                    };
    useEffect(() => {
        const fetchElements = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                console.log('Token:', token);
                const response = await axios.get('http://192.168.1.76:8080/api/elemento/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
    
                console.log('Response:', response);
    
                if (response && response.status === 200 && response.data && response.data.data && Array.isArray(response.data.data)) {
                    console.log('Data received:', response.data.data);
                    
    
                    // Filtrar elementos con categoria_id igual a 2
                    const filteredData = response.data.data.filter(item => item.categoria.id_categoria === 2);
                    
                    setElements(filteredData);
                    
                    console.log('Filtered Elements:', filteredData);
                } else {
                    console.error('Error: No se recibieron datos válidos del servidor.');
                }
            } catch (error) {
                console.error('Error fetching elements:', error);
            }
        };
    
        fetchElements();
    }, []);
    
    
    
    

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/restaurante.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Restaurante</Text>
                </View>
            </View>

            <FlatList
                data={elements}
                renderItem={({item}) =>( 
                <FlatListRestaurant 
                    nombre_producto={item.nombre_producto}
                    descripcion={item.descripcion}
                    precio={`$${item.precio}`}
                    imagen_elemento={{uri: item.imagen_elemento}}
                    action={() => item.action()}
                    customAction={(quantity) => agregarCarrito(item, quantity)}
                    navigation={navigation}

                   
                />)}
                keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
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
