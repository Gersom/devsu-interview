import { Text, View, StyleSheet, Dimensions } from "react-native";
import Home from './screens/Home.jsx';
import Constants from "expo-constants"

const { width, height } = Dimensions.get('window');

const Main = () => {
  return (
  <View style={styles.container}>
    <Home />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#282C34',
  },
});

export default Main