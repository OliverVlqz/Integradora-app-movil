import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Image } from '@rneui/base';
import Comida from "../../../assets/restaurante.jpg"
import { FlatList } from 'react-native-gesture-handler'
import FlatListRestaurant from './componentesRest/FlatListRestaurant';


const { height } = Dimensions.get('window');

const data =[
    {
        id: '1',
        title: 'Bacalao',
        description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.'
    },
    {
        id: '2',
        title: 'Bacalao',
        description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.'
    },
    {
        id: '3',
        title: 'Bacalao',
        description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.'
    },
    {
        id: '4',
        title: 'Bacalao',
        description: 'Nuestra Cazuela de Bacalao presenta el bacalao en su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.'
    },
]

export default function Restaurant() {
    

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
                renderItem={({item}) => 
                <FlatListRestaurant item={item}/>}
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

