import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './../components/Header';
import ItemList from './../components/ItemList';
import MyModal from './../components/Modal'
import ItemInfo from './../components/ItemInfo'

export default function Home() {
  const [modalInfo, setModalInfo] = useState(false);
  const [itemCurrent, setItemCurrent] = useState({});

  const openInfo = (obj) => {
    setItemCurrent(obj)
    setModalInfo(true)
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.separator}/>
      <ItemList openInfo={openInfo} />

      <MyModal visible={modalInfo}>
        <ItemInfo item={itemCurrent} onClose={() => setModalInfo(false)} />
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

