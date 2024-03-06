import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import Miscelaneos from '../../../assets/miscelaneos.jpg'

const { height } = Dimensions.get('window');


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
            <ScrollView style={[styles.scrollView, { paddingHorizontal: 12 }]}>
                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Jabon de baño</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Champú</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Acondicionador</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Gel de ducha</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Crema corporal</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Pasta de dientes</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Cepillo de dientes</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Maquinilla de afeitar</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Crema de afeitar</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                        <View style={styles.rowCard}>
                            <View style={styles.column}>
                                <Text style={styles.title}>Cepillo para el cabello</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.description}>$30.00</Text>
                            </View>
                            <View style={styles.column}>
                                <TouchableOpacity style={styles.reserveButton}>
                                    <Text style={styles.reserveButtonText}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
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
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    },
    descriptionContainer: {
        alignItems: 'center',
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
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
        paddingVertical: 4,
        paddingHorizontal: 10,
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
    button: {
        paddingVertical: 3,
    },
    scrollView: {
        flex: 1,
    },
    priceContainer: {
        width: 80,
        alignItems: 'flex-end',
    },
    rowCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,

    },
    column: {
        flex: 1,
        alignItems: 'center',
    },


});
