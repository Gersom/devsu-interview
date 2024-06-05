import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ItemInfo = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>
        ID: 123455</Text>
      <Text style={styles.info}>
        Información Extra</Text>
      <View style={[styles.textContent, styles.textContentRow]}>
        <Text style={styles.textTitle}>
          Nombre:</Text>
        <Text style={styles.text}>
          Depósito de ahorro</Text>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>
          Descripción:</Text>
        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut non possimus nostrum, quibusdam saepe harum a magni ex natus vero atque, nobis et ipsam impedit error veritatis reprehenderit repellat. Quibusdam.</Text>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>
          Logo:</Text>
        <Image
          source= {require('./../assets/card.png')}
          style={styles.imageCard}
        />
      </View>
     
      <View style={[styles.textContent, styles.textContentRow]}>
        <Text style={styles.textTitle}>
          Fecha liberación:</Text>
        <Text style={styles.text}>
          12/06/2030</Text>
      </View>
      <View style={[styles.textContent, styles.textContentRow]}>
        <Text style={styles.textTitle}>
          Fecha revisión:</Text>
        <Text style={styles.text}>
          12/06/2030</Text>
      </View>
      <Button title="Cerrar" onPress={onClose} />
    </View>
  );
};

const colorText = StyleSheet.create({
  mixed: {
    color: '#fff'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#393F4D',
    paddingHorizontal: 30,
  },
  id: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    fontSize: 25,
    marginBottom: 20,
    color: '#717171',
  },
  imageCard: {
    height: 100,
    width: 161,
    marginTop: 5,
    marginHorizontal: 'auto'
  },
  textContent: {
    marginTop: 15
  },
  textContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 16,
    color: '#ccc',
    
  },
  text: {
    color: '#fff',
    fontSize: 16,
  }
});

export default ItemInfo;
