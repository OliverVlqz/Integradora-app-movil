import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from '@rneui/base';
import Hotel from "../../../assets/hotel.jpg";
import { Icon } from 'react-native-elements';

const { height } = Dimensions.get('window');

export default function Home(props) {
    const {navigation} = props;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={Hotel}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Hotel Real del Valle</Text>
                    <Text style={styles.description}>Somos un hotel familiar, ofrecemos los servicios de 
                    restaurante y spa, ven y conocénos, haz tu reservación.</Text>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.textIcon} onPress={() => navigation.navigate('Restaurant')}>
                    <Icon name="restaurant-menu" size={50} color="#000" />
                    <Text>Restaurante</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textIcon} onPress={() => navigation.navigate('Spa')}>
                    <Icon name="spa" size={50} color="#000" />
                    <Text>Spa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textIcon} onPress={() => navigation.navigate('Miscellaneous')}>
                    <Icon name="soap" size={50} color="#000" />
                    <Text>Miscelaneos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: height / 4,
    },
    textContainer: {
        marginTop: 10,
        alignItems: 'center',
    },    
    text:{
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    description:{
        padding:16,
        textAlign: 'center',
        fontSize: 14

    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    textIcon:{
        alignItems: 'center'
    }
});
