import { View, Text, Image, StyleSheet } from 'react-native';

export default function ItemList() {
  return (
    <View>
      <View style={styles.container}>
        <Image 
          source= {require('./../assets/logo.png')}
          style={styles.imagelogo}
        />
        <Text style={styles.text}>GO BANK</Text>
      </View>
      <View style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  text: {
    fontWeight: 'bold',
    color: '#52C1E4',
    fontSize: 20,
  },
  imagelogo: {
    height: 40,
    width: 40,
    marginRight: 8
  },
  footer: {
    backgroundColor: '#52C1E4',
    height: 1,
    width: 100,
    marginHorizontal: 'auto'
  }
});

