import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import Miscelaneos from '../../../assets/miscelaneos.jpg'
import FlatListMiscellaneous from './componentesMisce/FlatListMiscellaneous';

const { height } = Dimensions.get('window');

const data = [
    {
        id: '1', 
        title: 'Jabón de baño',
        description: '$30.00'
    },
    {
        id: '2', 
        title: 'Champú',
        description: '$30.00'
    },
    {
        id: '3', 
        title: 'Crema corporal',
        description: '$30.00'
    },
    {
        id: '4', 
        title: 'Cepillo de dientes',
        description: '$30.00'
    },
    {
        id: '5', 
        title: 'Crema para afeitar',
        description: '$30.00'
    },
    {
        id: '6', 
        title: 'Cepillo para cabello',
        description: '$30.00'
    },
]

export default function Miscellaneous() {
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
                renderItem={({item}) =>
                <FlatListMiscellaneous item={item}/>}
                keyExtractor={item=> item.id}
                style={[styles.scrollView, {padding: 12}]}
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
