import React, {useState, useContext} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from '@rneui/base';

export default function FlatListSpa(props) {
    const {id, nombre_producto, descripcion, precio, imagen_elemento, customAction, action} = props;
    return (
        <View style={styles.row}>
            <Image
                source={imagen_elemento}
                style={styles.imageCard}
            />
            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>{nombre_producto}</Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{descripcion}</Text>
                    <Text style={styles.description}>{precio}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.reserveButton} onPress={customAction}>
                <Text style={styles.reserveButtonText}>Reservar</Text>
            </TouchableOpacity>
                  
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
    description: {
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
});
