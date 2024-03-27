import React, { useContext } from "react";
import {  View,  Text,  StyleSheet,  FlatList,  TouchableOpacity,} from "react-native";
import { Image } from "@rneui/base";
import {CartFuction} from "./CartFuction"

/*const removeCart=(itemRem)=>{
    const { cartItems, setCartItems } = useContext(CartFuction);
    Alert.alert(
      "Eliminar articulo",
      `¿Estas seguro de eliminar "${itemRem.title}" del carrito?`,
      [
        { text: "Cancelar", onPress: () => {}, style: "cancel" },
        {
          text: "Eliminar",
          onPress: () => {
            const updatedCartItems = cartItems.filter((item) => item.id !== itemRem.id);
            setCartItems(updatedCartItems);
          },
        },
      ],
      { cancelable: false }
    );
  }

<Cart cartItems={cartItems} setCartItems={setCartItems} removeCart={removeCart} />;*/



export default function Cart({ route }) {
  const { cartItems } = useContext(CartFuction);
  
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "room":
        return (
          <View style={styles.row}>
            <Image source={item.image} style={styles.imageCard} />
            <View>
              <Text style={styles.t_habitacion}>{item.t_habitacion}</Text>
              <Text style={styles.t_cama}>{item.t_cama}</Text>
              <Text style={styles.capacidad}>{item.capacidad}</Text>
              <Text style={styles.precio}>{item.precio}</Text>
            </View>
          </View>
        );
      case "restaurant":
        return (
          <View style={styles.row}>
            <Image source={item.img} style={styles.imageCard} />
            
            <View>
              <Text style={styles.t_habitacion}>{item.title}</Text>
                
                {/* <Text style={styles.textDescription}>{item.description}</Text> */}
                <Text style={styles.precio}>{item.price}</Text>
              
            </View>

            
          </View>
        );
        case "spa":
        return (
          <View style={styles.row}>
            <Image source={item.image} style={styles.imageCard} />
            
            <View>
              <Text style={styles.t_habitacion}>{item.title}</Text>
                
                <Text style={styles.textDescription}>{item.description}</Text>
                <Text style={styles.precio}>{item.precio}</Text>
              
            </View>

            
          </View>
        );
      case "miscellaneous":
        return (
          <View style={styles.row}>
            <View>
              <Text style={styles.t_habitacion}>{item.title}</Text>
              <Text style={styles.t_cama}>{item.precio}</Text>
            </View>
            <TouchableOpacity style={styles.detailsButton} onPress={() => removeCart(item)}>
            <Text style={styles.detailsButtonText}></Text>
          </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de Compra</Text>
      <FlatList
        horizontal={true}
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
      />
      <View style={styles.resumen}>
        <Text style={[styles.title, { paddingBottom: 25 }]}>Resumen</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ flexDirection: "row" }}>Subtotal:</Text>
          <Text style={{ flexDirection: "row" }}> </Text>
          <Text style={{ flexDirection: "row" }}>$</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ flexDirection: "row" }}>Impuestos:</Text>
          <Text style={{ flexDirection: "row" }}> </Text>
          <Text style={{ flexDirection: "row" }}>$</Text>
        </View>
        <View style={styles.linea}></View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flexDirection: "row" }}>Total:</Text>
          <Text style={{ flexDirection: "row" }}> </Text>
          <Text style={{ flexDirection: "row" }}>$</Text>
        </View>

        <View style={{ flexDirection: "column", padding: 10 }}>
          <TouchableOpacity style={styles.reserveButton} onPress={""}>
            <Text style={styles.reserveButtonText}>Pagar</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column", padding: 5 }}>
          <TouchableOpacity style={styles.detailsButton} onPress={""}>
            <Text style={styles.detailsButtonText}>Agregar Servicios</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "column",
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 250,
    width:200, 
    alignItems: "center",
  },
  resumen: {
    flexDirection: "column",
    backgroundColor: "#ffff",
    padding: 25,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: '45%',
    width:'100%',
    alignItems: "center",
  },

  imageCard: {
    width: 105,
    height: 105,
    borderRadius: 12,
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  descriptionContainer: {
    alignItems: "center",
  },

  textDescription: {
  letterSpacing: 0,
  textAlign: 'justify',
  //width: '50%',
  //numberOfLines: 2,
  },
 
  capacidad: {
    fontSize: 12,
    marginBottom: 2,
  },
  t_habitacion: {
    fontSize: 12,
    marginBottom: 2,
    justifyContent: "center",
    fontWeight: "bold",
  },
  t_cama: {
    fontSize: 12,
    marginBottom: 2,
  },
  precio: {
    fontSize: 12,
    marginBottom: 2,
  },
  separador: {
    marginHorizontal: 8,
    width: 1,
  },
  linea: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: "#738585",
    paddingVertical: 5,
    paddingHorizontal: 67,
    borderRadius: 5,
    //alignSelf: 'flex-start',
    //marginLeft: 'auto',
  },
  detailsButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  reserveButton: {
    backgroundColor: "#748C73",
    paddingVertical: 5,
    paddingHorizontal: 100,

    borderRadius: 5,
    //alignSelf: 'flex-start',
    // marginRight: 10,
  },
  reserveButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  button: {
    paddingVertical: 3,
  },
});
