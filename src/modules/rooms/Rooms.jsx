import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Image } from '@rneui/base';
import Habitaciones from "../../../assets/hotel.jpg"
import { FlatList } from 'react-native-gesture-handler'
import FlatListRoom from './componentsRoom/FlatListRoom'

const { height } = Dimensions.get('window');

const data = [
    {
        id: '1',
        t_habitacion: 'Sencilla',
        t_cama: '1 cama matrimonial',
        capacidad: 'Capacidad para 2 personas',
        precio: '$2.347.00'
    },
    {
        id: '2',
        t_habitacion: 'Junior Suite',
        t_cama: '1 cama King Size',
        capacidad: 'Capacidad para 2 personas',
        precio: '$2,849.00'
    },
    {
        id: '3',
        t_habitacion: 'Senior Suite',
        t_cama: '2 camas matrimoniales',
        capacidad: 'Capacidad para 4 personas',
        precio: '$3,482.00'
    },
    {
        id: '4',
        t_habitacion: 'Master Suite',
        t_cama: '1 cama King Size',
        capacidad: 'Capacidad para 2 personas',
        precio: '$2,850.00'
    },

]

export default function Rooms(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={Habitaciones}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Habitaciones</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <FlatListRoom item={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id}
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

});
