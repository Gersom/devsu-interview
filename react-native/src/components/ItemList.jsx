import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';


export default function ItemList({ setModalVisible }) {

  
  const dataAll = [
    {
      id: '0001',
      name: 'Depósito de ahorro'
      },
    {
      id: '0002',
      name: 'Depósitos a plazo'
    },
    {
      id: '0003',
      name: 'Depósitos CTS'
    },
    {
      id: '0004',
      name: 'Depósitos en cuenta corriente'
    },
    {
      id: '0005',
      name: 'Fondo seguro de depósito'
    }
  ]
  return (
    <View style={styles.container}>
      <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} />
      
      <FlatList 
        data={dataAll}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.item}>
            <View>
              <Text style={styles.itemTitle}>
                {item.name}</Text>
              <Text style={styles.itemId}>
                ID: {item.id}</Text>
            </View>
            <Image 
              source= {require('./../assets/arrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: '#393F4D',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: ''
  },
  itemTitle: {
    fontSize: 16,
    color: '#fff'
  },
  itemId: {
    fontSize: 14,
    color: '#717171'
  },
  itemSeparator: {
    marginBottom: 10
  },
  arrowIcon: {
    height: 12,
    width: 7
  }
});

