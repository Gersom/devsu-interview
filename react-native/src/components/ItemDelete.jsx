import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ItemInfo = ({ onClose }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>¡Hola! Este es un modal.</Text>
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ItemInfo;
