import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Image } from '@rneui/base';
import Comida from "../../../assets/restaurante.jpg"

const { height } = Dimensions.get('window');

export default function Restaurant() {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

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
            <ScrollView style={styles.scrollView}>
                <View style={styles.row}>
                    <Image
                        source={{ uri: 'https://placehold.co/150x150' }}
                        style={styles.imageCard}
                    />
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Bacalao</Text>

                        </View>

                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>Nuestra Cazuela de Bacalao presenta el bacalao en
                                su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.
                                Un plato completo y sofisticado para impresionar en tus celebraciones.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={decreaseQuantity}>
                                    <Text style={styles.quantityButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity onPress={increaseQuantity}>
                                    <Text style={styles.quantityButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.reserveButton}>
                                <Text style={styles.reserveButtonText}>Agregar</Text>
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
                            <Text style={styles.title}>Bacalao</Text>

                        </View>

                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>Nuestra Cazuela de Bacalao presenta el bacalao en
                                su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.
                                Un plato completo y sofisticado para impresionar en tus celebraciones.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={decreaseQuantity}>
                                    <Text style={styles.quantityButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity onPress={increaseQuantity}>
                                    <Text style={styles.quantityButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.reserveButton}>
                                <Text style={styles.reserveButtonText}>Agregar</Text>
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
                            <Text style={styles.title}>Bacalao</Text>

                        </View>

                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>Nuestra Cazuela de Bacalao presenta el bacalao en
                                su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.
                                Un plato completo y sofisticado para impresionar en tus celebraciones.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={decreaseQuantity}>
                                    <Text style={styles.quantityButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity onPress={increaseQuantity}>
                                    <Text style={styles.quantityButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.reserveButton}>
                                <Text style={styles.reserveButtonText}>Agregar</Text>
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
                            <Text style={styles.title}>Bacalao</Text>

                        </View>

                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>Nuestra Cazuela de Bacalao presenta el bacalao en
                                su salsa a la vizcaína, acompañado de esponjosito arroz blanco con verduras.
                                Un plato completo y sofisticado para impresionar en tus celebraciones.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={decreaseQuantity}>
                                    <Text style={styles.quantityButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity onPress={increaseQuantity}>
                                    <Text style={styles.quantityButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.reserveButton}>
                                <Text style={styles.reserveButtonText}>Agregar</Text>
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
    button: {
        paddingVertical: 3,
    },
    scrollView: {
        flex: 1,
    },
    quantityButton: {
        fontSize: 20,
        paddingHorizontal: 10,
    },
    quantity: {
        fontSize: 16,
        paddingHorizontal: 10,
    },

});

