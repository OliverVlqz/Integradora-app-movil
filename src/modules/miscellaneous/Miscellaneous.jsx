import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useContext, useState, useEffect } from 'react';
import { Image } from '@rneui/base'
import Miscelaneos from '../../../assets/miscelaneos.jpg'
import FlatListMiscellaneous from './componentesMisce/FlatListMiscellaneous';
const { height } = Dimensions.get('window');




export default function Miscellaneous(props) {
    const {navigation} = props;

    

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
    
                    // categoria_id igual a 2
                    const filteredData = response.data.data.filter(item => item.categoria.id_categoria === 3);
    
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
                    source={Miscelaneos}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Miscelaneos</Text>
                </View>
            </View>
            <FlatList
                data={elements}
                renderItem={({item}) =>(
                    <FlatListMiscellaneous
                        nombre_producto={item.nombre_producto}
                        precio={item.precio}
                        imagen_elemento={item.imagen_elemento}
                        action={() => item.action()}
                        customAction={(quantity) => agregarCarrito(item, quantity)} 
                    />
                )}
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
