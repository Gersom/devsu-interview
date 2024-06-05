import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Main from './src/main.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

