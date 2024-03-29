import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from "react-native";
import Tarjeta from '../../../assets/tarjeta.png'
import Modal from "react-native-modal";
import PaymentHistory from '../paymentHistory/PaymentHistory'

const PayInfo = ({ route, navigation }) => {
  const { cartItems } = route.params;

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: ""
  });

  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePayment = () => {
    console.log("Información de la tarjeta:", cardInfo);
    // Mostrar mensaje de pago exitoso
    setIsModalVisible(true);
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.resumen}>
        <Text style={styles.title}>Resumen</Text>

        <View style={styles.resumenItem}>
          <Text>Subtotal: $</Text>
        </View>

        <View style={[styles.resumenItem, styles.noBorder]}>
          <Text>Impuestos: $</Text>
        </View>

        <View style={styles.linea}></View>

        <View style={styles.resumenItem}>
          <Text>Total: $</Text>
        </View>
      </View>

      <View style={styles.tarjetaContainer}>
        <Text style={styles.title}>Ingresa la información de tu tarjeta</Text>
        <View style={styles.imageContainer}>
          <Image source={Tarjeta} style={styles.tarjetaImage}/>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Número de tarjeta"
          value={cardInfo.cardNumber}
          onChangeText={(text) => setCardInfo({ ...cardInfo, cardNumber: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Titular de la tarjeta"
          value={cardInfo.cardHolder}
          onChangeText={(text) => setCardInfo({ ...cardInfo, cardHolder: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de expiración (MM/YY)"
          value={cardInfo.expiryDate}
          onChangeText={(text) => setCardInfo({ ...cardInfo, expiryDate: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cardInfo.cvv}
          onChangeText={(text) => setCardInfo({ ...cardInfo, cvv: text })}
        />
        <TouchableOpacity style={styles.reserveButton} onPress={handlePayment}>
          <Text style={styles.reserveButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible} animationIn="fadeIn" animationOut="fadeOut">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¡Pago Exitoso!</Text>
            <Text style={styles.modalText}>¡Gracias por tu compra!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  resumen: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  resumenItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  linea: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  reserveButton: {
    backgroundColor: "#4F8585",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  reserveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  tarjetaContainer: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:16
  },
  tarjetaImage: {
    width: 87,
    height: 52,
    marginRight: 10,
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4F8585", 
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#333333", 
  },
  modalButton: {
    backgroundColor: "#4F8585", 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    color: "#ffffff", 
  },
});

export default PayInfo;
