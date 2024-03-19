import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
import { Image } from '@rneui/base';
import Hotel from "../../../assets/spa.jpg";
import FlatListSpa from "./componentesSpa/FlatListSpa"

const { height } = Dimensions.get('window');

const data = [
    {
        id: '1',
        title: 'Body Sculpt',
        description: '3 masajes reductivos, 3 criolipólisis 3 mesoterapias tensoras',
        price: '$1,549.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
    {
        id: '2',
        title: 'Renovación Deluxe',
        description: '3 drenajes linfáticos 3 masajes reductivos 3 masajes anticeluliticos',
        price: '$1,629.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
    {
        id: '3',
        title: 'Masaje en Pareja',
        description: '+ Infusión relajante + Aromaterapia + Música terapéutica',
        price: '$1,869.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
    {
        id: '4',
        title: 'Golden',
        description: '+ Relajante holístico + Relajante sueco + Masaje descontracturante',
        price: '$1,429.00 MXN',
        image: require('../../../assets/spa.jpg'),
    },
];

export default function Spa() {

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
