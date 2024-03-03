import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from '@rneui/base';
import Hotel from "../../../assets/spa.jpg";

const { height } = Dimensions.get('window');

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
            <ScrollView style={styles.scrollView}>
            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://placehold.co/150x150' }}
                    style={styles.imageCard}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Body Sculpt</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>3 masajes reductivos, .</Text>
                        <Text style={styles.description}>3 criolipólisis</Text>
                        <Text style={styles.description}>3 mesoterapias tensoras</Text>
                        <Text style={styles.description}>$1,549.00 MXN.</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.reserveButton}>
                            <Text style={styles.reserveButtonText}>Reservar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://placehold.co/150x150' }}
                    style={styles.imageCard}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Renovación Deluxe</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>3 drenajes linfáticos</Text>
                        <Text style={styles.description}>3 masajes reductivos</Text>
                        <Text style={styles.description}>3 masajes anticeluliticos</Text>
                        <Text style={styles.description}>$1,629.00 MXN.</Text>
                    </View> 

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.reserveButton}>
                            <Text style={styles.reserveButtonText}>Reservar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://placehold.co/150x150' }}
                    style={styles.imageCard}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Masaje en Pareja</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>+ Infusión relajante</Text>
                        <Text style={styles.description}>+ Aromaterapia + Infusión relajante</Text>
                        <Text style={styles.description}>+ Música terapéutica</Text>
                        <Text style={styles.description}>$1,869.00 MXN.</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}> 
                        <TouchableOpacity style={styles.reserveButton}>
                            <Text style={styles.reserveButtonText}>Reservar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://placehold.co/150x150' }}
                    style={styles.imageCard}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Golden</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>+ Relajante holístico</Text>
                        <Text style={styles.description}>+ Relajante sueco</Text>
                        <Text style={styles.description}>+ Masaje descontracturante</Text>
                        <Text style={styles.description}>$1,429.00 MXN.</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.reserveButton}>
                            <Text style={styles.reserveButtonText}>Reservar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
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
    buttonContainer: {
        marginHorizontal: 4,
        borderRadius: 8, 
        overflow: 'hidden', 
    },
    button:{
        paddingVertical: 3, 
    },
    scrollView: {
        flex: 1,
    },
});
