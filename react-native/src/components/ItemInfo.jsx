import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import formatDate from '../utils/formatDate'

const ItemInfo = ({ item, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>
        {item.name}</Text>
      <Text style={styles.info}>
        Información Extra</Text>
      <View style={[styles.textContent, styles.textContentRow]}>
        <Text style={styles.textTitle}>
          ID:</Text>
        <Text style={styles.text}>
          {item.id}</Text>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>
          Descripción:</Text>
        <Text style={styles.text}>
          {item.description}</Text>
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
          {formatDate(item.dateRelease)}</Text>
      </View>
      <View style={[styles.textContent, styles.textContentRow, styles.mb]}>
        <Text style={styles.textTitle}>
          Fecha revisión:</Text>
        <Text style={styles.text}>
          {formatDate(item.dateRevision)}</Text>
      </View>
      <Button title="Cerrar" onPress={onClose}/>
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
  },
  mb: {
    marginBottom: 20
  }
});

export default ItemInfo;
