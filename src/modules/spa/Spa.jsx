import React, {useContext} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
import { Image } from '@rneui/base';
import Hotel from "../../../assets/spa.jpg";
import FlatListSpa from "./componentesSpa/FlatListSpa"
import {CartFuction} from '../cart/CartFuction';

const { height } = Dimensions.get('window');



export default function Spa(props) {
    const {navigation} = props;
    const { cartItems, addItemToCart } = useContext(CartFuction);


    
    const agregarCarrito = (item) => {
        addItemToCart(item);
        navigation.navigate('Cart');
      };


const data = [
    {
        type:'spa',
        id: '1S',
        title: 'Body Sculpt',
        description: '3 masajes reductivos',
        price: '$1,549.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
    {
        type:'spa',
        id: '2S',
        title: 'Renovación Deluxe',
        description: '3 drenajes linfáticos',
        price: '$1,629.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
    {
        type:'spa',
        id: '3S',
        title: 'Masaje en Pareja',
        description: '+ Infusión relajante + Aromaterapia',
        price: '$1,869.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
    {
        type:'spa',
        id: '4S',
        title: 'Golden',
        description: '+ Relajante holístico + Relajante sueco',
        price: '$1,429.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
];
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
                data={data}
                renderItem={({ item }) => (
                <FlatListSpa 
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    action={() => item.action()}
                    customAction={() => agregarCarrito(item)}
                    /> )}
                
                keyExtractor={item => item.id}
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
