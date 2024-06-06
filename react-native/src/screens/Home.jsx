import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Header from './../components/Header';
import ItemList from './../components/ItemList';
import MyModal from './../components/Modal'
import ItemInfo from './../components/ItemInfo'
import ItemAdd from './../components/ItemAdd'
import axios from "axios";

export default function Home() {
  const [modalInfo, setModalInfo] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [itemCurrent, setItemCurrent] = useState({});
  const [textSearch, setTextSearch] = useState('');
  const [dataItems, setDataItems] = useState([]);

  const openInfo = (obj) => {
    setItemCurrent(obj)
    setModalInfo(true)
  }
  const changeSearch = (txt) => {
    setTextSearch(txt)
    const search = txt.toLowerCase();
    setDataItems(dataItems.filter(item => item.name.toLowerCase().includes(search)))
  }
  const useItems = async () => {

    try {
      const response = await axios.get(`http://192.168.18.50:3001/api/items`);
      setDataItems(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    useItems()
    setTextSearch('')
  }, [modalAdd, modalInfo])
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.separator}/>

      <TextInput
        style={styles.search}
        placeholder="Buscar..."
        value={textSearch}
        placeholderTextColor="#ccc"
        onChangeText={changeSearch}
      />

      <Pressable style={styles.addBtn} onPress={()=>setModalAdd(true)}>
        <Text style={styles.addBtnText}>+ Agregar</Text>
      </Pressable>
      <View style={styles.separator}/>

      

      <ItemList dataItems={dataItems} openInfo={openInfo} />
      <View style={styles.separator}/>

      

      <MyModal visible={modalInfo}>
        <ItemInfo item={itemCurrent} onClose={() => setModalInfo(false)} />
      </MyModal>

      <MyModal visible={modalAdd}>
        <ItemAdd onClose={() => setModalAdd(false)} />
      </MyModal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  separator: {
    marginBottom: 20
  },
  addBtn: {
    height: 60,
    backgroundColor: '#44FF59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addBtnText: {   
    fontSize: 16,
    fontWeight: 'bold'
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

