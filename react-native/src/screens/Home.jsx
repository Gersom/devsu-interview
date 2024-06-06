import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Header from './../components/Header';
import ItemList from './../components/ItemList';
import MyModal from './../components/Modal'
import ItemInfo from './../components/ItemInfo'

export default function Home() {
  const [modalInfo, setModalInfo] = useState(false);
  const [itemCurrent, setItemCurrent] = useState({});
  const [textSearch, setTextSearch] = useState('');

  const openInfo = (obj) => {
    setItemCurrent(obj)
    setModalInfo(true)
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.separator}/>
      <TextInput
        style={styles.search}
        placeholder="Buscar..."
        value={textSearch}
        placeholderTextColor="#ccc"
        onChangeText={setTextSearch}
      />
      <View style={styles.separator}/>
      <ItemList openInfo={openInfo} textSearch={textSearch} />

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
    marginBottom: 20
  },
  search: {
    height: 40,
    borderColor: '#717171',
    borderWidth: 1,
    width: '100%',
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 16,
    borderRadius: 10,
    color: '#fff'
  },
});

