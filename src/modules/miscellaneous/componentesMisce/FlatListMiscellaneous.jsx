import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FlatListMiscellaneous({item}) {
    return (
        <View style={styles.row}>
            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'left' }}>
                <View style={styles.rowCard}>
                    <View style={styles.column}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity style={styles.reserveButton}>
                            <Text style={styles.reserveButtonText}>Agregar</Text>
                        </TouchableOpacity>
                    </View>
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
})