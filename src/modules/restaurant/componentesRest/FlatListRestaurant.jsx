import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Image } from '@rneui/base'

export default function FlatListRestaurant(props) {
    const {id, title, description, price, image, action, customAction, isRestaurant} = props;
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
    <View style={styles.row}>
    <Image
        source={image}
        style={styles.imageCard}
    />
    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>{title}</Text>

        </View>

        <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>{price}</Text>

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
            <TouchableOpacity style={styles.reserveButton} onPress={customAction}>
                <Text style={styles.reserveButtonText}>Agregar</Text>
            </TouchableOpacity>
        </View>

    </View>
</View>

  )
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
})