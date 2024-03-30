import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import PaymentHistory from "../../../paymentHistory/PaymentHistory";
import Hotel from '../../../../../assets/hotel.jpg';

const Profile = () => {
    const paymentHistory = [
        { amount: 10, date: new Date() },
        { amount: 20, date: new Date() },
        { amount: 30, date: new Date() },
        { amount: 30, date: new Date() },
        { amount: 30, date: new Date() },
        { amount: 30, date: new Date() },
        { amount: 30, date: new Date() },
        { amount: 30, date: new Date() }
    ];

    // Información del usuario
    const userInfo = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com'
    };

    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.title}>Información del usuario</Text>
                        <View style={styles.userInfo}>
                            <Text style={styles.userInfoText}>Nombre: {userInfo.firstName}</Text>
                            <Text style={styles.userInfoText}>Apellido Paterno: {userInfo.lastName}</Text>
                            <Text style={styles.userInfoText}>Correo: {userInfo.email}</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Historial de pagos</Text>
                    <ScrollView contentContainerStyle={styles.paymentHistoryContainer}>
                        <PaymentHistory paymentHistory={paymentHistory}/>
                    </ScrollView>
                </View>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Fondo semitransparente para que la imagen de fondo sea visible
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userInfoContainer: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    userInfo: {
        width: '100%',
    },
    userInfoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    paymentHistoryContainer: {
        marginTop: 10,
    },
});

export default Profile;
