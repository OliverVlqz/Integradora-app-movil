import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'; // Importa SafeAreaView para garantizar que el contenido esté dentro de áreas seguras en dispositivos con muesca.
import PaymentHistory from "../../../paymentHistory/PaymentHistory";

const Profile = () => {
    const paymentHistory = [
        { amount: 10, date: new Date() },
        { amount: 20, date: new Date() },
        { amount: 30, date: new Date() }
      ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <PaymentHistory paymentHistory={paymentHistory}/>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Establece un color de fondo para la pantalla si es necesario
  },
  innerContainer: {
    flex: 1, // Hace que este contenedor ocupe todo el espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
