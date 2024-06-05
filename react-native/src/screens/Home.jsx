import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './../components/Header';
import ItemList from './../components/ItemList';
import MyModal from './../components/Modal'
import ItemInfo from './../components/ItemInfo'

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.separator}/>
      <ItemList setModalVisible={setModalVisible} />

      <MyModal visible={modalVisible}>
        <ItemInfo onClose={() => setModalVisible(false)} />
      </MyModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  separator: {
    marginBottom: 40
  }
});

