import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useContext } from 'react';
import { Image } from '@rneui/base'
import Miscelaneos from '../../../assets/miscelaneos.jpg'
import FlatListMiscellaneous from './componentesMisce/FlatListMiscellaneous';
import {CartFuction} from '../cart/CartFuction';
const { height } = Dimensions.get('window');




export default function Miscellaneous(props) {
    const {navigation} = props;
    const { cartItems, addItemToCart } = useContext(CartFuction);
    const agregarCarrito = (item) => {
        addItemToCart(item);
        navigation.navigate('Cart', { cartItems: [...cartItems, item] });
      };

      const data = [
        {
            type: 'miscellaneous',
            id: '1', 
            title: 'Jabón de baño',
            precio: '$30.00'
        },
        {
            type: 'miscellaneous',
            id: '2', 
            title: 'Champú',
            precio: '$30.00'
        },
        {
            type: 'miscellaneous',
            id: '3', 
            title: 'Crema corporal',
            precio: '$30.00'
        },
        {
            type: 'miscellaneous',
            id: '4', 
            title: 'Cepillo de dientes',
            precio: '$30.00'
        },
        {
            type: 'miscellaneous',
            id: '5', 
            title: 'Crema para afeitar',
            precio: '$30.00'
        },
        {
            type: 'miscellaneous',
            id: '6', 
            title: 'Cepillo para cabello',
            precio: '$30.00'
        },
    ]

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
                data={data}
                renderItem={({item}) =>(
                    <FlatListMiscellaneous
                        title={item.title}
                        precio={item.precio}
                        action={() => item.action()}
                        customAction={() => agregarCarrito(item)}
                    />
                )}
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
