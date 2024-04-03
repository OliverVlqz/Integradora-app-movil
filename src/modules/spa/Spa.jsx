import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
import { Image } from '@rneui/base';
import Hotel from "../../../assets/spa.jpg";
import FlatListSpa from "./componentesSpa/FlatListSpa"
import {CartFuction} from '../cart/CartFuction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const { height } = Dimensions.get('window');



export default function Spa(props) {
    const {navigation} = props;
    const { cartItems, addItemToCart } = useContext(CartFuction);
    const agregarCarrito = (item) => {
        addItemToCart(item);
        navigation.navigate('Cart', { cartItems: [...cartItems, item] });
      };
      const [elements, setElements] = useState([]);


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
                    const filteredData = response.data.data.filter(item => item.categoria.id_categoria === 1);
    
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
                    source={Hotel}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Paquetes Spa</Text>
                </View>
            </View>
            <FlatList
                data={elements}
                renderItem={({ item }) => (
                <FlatListSpa 
                    nombre_producto={item.nombre_producto}
                    descripcion={item.descripcion}
                    precio={`$${item.precio}`}
                    imagen_elemento={{uri: item.imagen_elemento}}
                    action={() => item.action()}
                    customAction={() => agregarCarrito(item)}
                    /> )}
                
                    keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                    style={[styles.scrollView, { paddingHorizontal: 12 }]}
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
    scrollView: {
        flex: 1,
    },
});
