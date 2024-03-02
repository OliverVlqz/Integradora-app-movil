import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, AirbnbRating } from '@rneui/base';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://placehold.co/150x150' }}
                    style={styles.image}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Sencilla</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Vista al interior</Text>
                        <Text style={styles.description}>1 cama matrimonial</Text>
                        <Text style={styles.description}>Capacidad para 2 personas</Text>
                        <Text style={styles.description}>$2.347.00 MXN.</Text>
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
                    style={styles.image}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Junior Suite</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Vista al interior y/o exterior</Text>
                        <Text style={styles.description}>1 cama king size</Text>
                        <Text style={styles.description}>Capacidad para 2 personas</Text>
                        <Text style={styles.description}>$2,849.00 MXN.</Text>
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
                    style={styles.image}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Senior Suite</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Vista al interior</Text>
                        <Text style={styles.description}>2 camas matrimoniales</Text>
                        <Text style={styles.description}>Capacidad para 4 personas</Text>
                        <Text style={styles.description}>$3,482.00 MXN.</Text>
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
                    style={styles.image}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Master Suite</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>Vista al interior</Text>
                        <Text style={styles.description}>1 cama king size</Text>
                        <Text style={styles.description}>Capacidad para 2 personas</Text>
                        <Text style={styles.description}>$2,850.00 MXN.</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        padding: 16,
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
    image: {
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
