import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useContext } from 'react';
import { Image } from '@rneui/base'
import Miscelaneos from '../../../assets/miscelaneos.jpg'
import FlatListMiscellaneous from './componentesMisce/FlatListMiscellaneous';
import {CartFuction} from '../cart/CartFuction';
const { height } = Dimensions.get('window');




export default function Miscellaneous(props) {
    const {navigation} = props;
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


      const data = [
        {
            type: 'miscellaneous',
            id: '1M', 
            title: 'Jabón de baño',
            price: '$30.00',
            img: require('../../../assets/miscelaneos.jpg'),    
        },
        {
            type: 'miscellaneous',
            id: '2M', 
            title: 'Champú',
            price: '$30.00',
            img: require('../../../assets/miscelaneos.jpg'),
        },
        {
            type: 'miscellaneous',
            id: '3M', 
            title: 'Crema corporal',
            price: '$30.00',
            img: require('../../../assets/miscelaneos.jpg'),
        },
        {
            type: 'miscellaneous',
            id: '4M', 
            title: 'Cepillo de dientes',
            price: '$30.00',
            img: require('../../../assets/miscelaneos.jpg'),
        },
        {
            type: 'miscellaneous',
            id: '5M', 
            title: 'Crema para afeitar',
            price: '$30.00',
            img: require('../../../assets/miscelaneos.jpg'),
        },
        {
            type: 'miscellaneous',
            id: '6M', 
            title: 'Cepillo para cabello',
            price: '$30.00',
            img: require('../../../assets/miscelaneos.jpg'),
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
                        price={item.price}
                        image={item.img}
                        action={() => item.action()}
                        customAction={(quantity) => agregarCarrito(item, quantity)} 
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
