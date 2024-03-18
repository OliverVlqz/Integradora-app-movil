import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Image } from '@rneui/base';

export default function Cart(props) {
    const {params} = props.route;
    console.log(params)
    return (
        <View style={styles.row}>
        <Image
            source={params.image}
            style={styles.imageCard}
        />
        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.t_habitacion}>{params.t_habitacion}</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.t_cama}>{params.t_cama}</Text>
                <Text style={styles.capacidad}>{params.capacidad}</Text>
                <Text style={styles.precio}>{params.precio}</Text>
            </View>

            //jaja por qué te llamas assda algo asi JAJAJA
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    row: {
        //pa apple
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        //android
        elevation: 3,
        flexDirection: 'row',
        backgroundColor: "#ffff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8
    },
    imageCard: {
        width: 125,
        height: 125,
        borderRadius: 12
    },
    title: {
        fontSize: 12,
        fontWeight: "bold"
    },
    descriptionContainer: {
        alignItems: 'center',
    },
    capacidad: {
        fontSize: 12,
        marginBottom: 2
    },
    t_habitacion:{
        fontSize: 12,
        marginBottom: 2
    },
    t_cama:{
        fontSize: 12,
        marginBottom: 2
    },
    precio:{
        fontSize: 12,
        marginBottom: 2
    },
    detailsButton: {
        backgroundColor: '#4F8585',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginLeft: 'auto',
    },
    detailsButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    reserveButton: {
        backgroundColor: '#748C73',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginRight: 10,
    },
    reserveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginHorizontal: 4,
        borderRadius: 8, 
        overflow: 'hidden', 
        
    },
    button:{
        paddingVertical: 3,
    },
    scrollView: {
        flex: 1,
    },
});
