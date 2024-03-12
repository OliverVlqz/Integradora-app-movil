import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Sencilla1 from '../../../assets/habsen1.jpg'
import Sencilla2 from '../../../assets/habsen2.jpg'
import Sencilla3 from '../../../assets/habsen3.jpg'


export default function DetailsRoom() {
    
  const carouselData = [
    { id: '1', image: Sencilla1 },
    { id: '2', image: Sencilla2 },
    { id: '3', image: Sencilla3 }
  ];

  const renderCarouselItem = ({ item }) => {
    return (
      <Image source={item.image} style={styles.carouselImage} />
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
          autoplay={true}
          loop={true}
        />
        <View style={styles.additionalInfo}>
          <Text style={styles.infoText}>Television pantalla plana</Text>
          <Text style={styles.infoText}>Almohadas de plumas</Text>
          <Text style={styles.infoText}>Baño privado con regadera</Text>
          <Text style={styles.infoText}>Ventilador de techo</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20
  },
  additionalInfo: {
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
