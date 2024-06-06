import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';

const ItemList = ({ openInfo, dataItems=[] }) => {

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={dataItems}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({ item }) => (
          <Pressable key={item.id} style={styles.item} onPress={() => openInfo(item)}>
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
          </Pressable>
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

export default ItemList