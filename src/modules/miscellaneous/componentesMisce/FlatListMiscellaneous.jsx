import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function FlatListMiscellaneous(props) {
    const [quantity, setQuantity] = useState(1);
    const { title, precio, customAction } = props;

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
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View style={styles.row}>
                    <Text style={styles.title}>{title}</Text>
                        <Text style={styles.precio}>Precio: {precio}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={decreaseQuantity}>
                                <Text style={styles.quantityButton}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity onPress={increaseQuantity}>
                                <Text style={styles.quantityButton}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.reserveButton} onPress={customAction}>
                            <Text style={styles.reserveButtonText}>Agregar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    card: {
        backgroundColor: "#ffff",
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardContent: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    description: {
        fontSize: 12,
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    price: {
        fontSize: 12,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        fontSize: 18,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#dddddd',
        borderRadius: 5,
        marginHorizontal: 4,
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 4,
    },
    bottomContainer: {
        alignItems: 'center', 
    },
    reserveButton: {
        backgroundColor: '#748C73',
        paddingVertical: 4,
        paddingHorizontal: 40, 
        borderRadius: 5,
    },
    reserveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
