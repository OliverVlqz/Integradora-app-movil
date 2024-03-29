import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";

const PaymentHistory = ({ paymentHistory }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Historial de Pagos</Text>
      <FlatList
        data={paymentHistory}
        renderItem={({ item, index }) => (
          <View style={styles.paymentItem}>
            <View style={styles.paymentItemBorder}>
              <Text style={styles.amount}>Monto: ${item.amount}</Text>
              <Text>Fecha: {item.date.toLocaleString()}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
  paymentItem: {
    backgroundColor: "#ffffff", // Fondo blanco
    borderRadius: 10,
    padding: 5, // Reducido el padding
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  paymentItemBorder: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4F8585", // Color del borde deseado
    padding: 10, // Aumentado el padding
  },
  amount: {
    color: "#5D6921",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default PaymentHistory;
