import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {} from "react-native";

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Salut à tous!</Text>
        </View>
        <View>
         <Text>Comment ça va ?</Text>
        </View>

        <StatusBar style="auto"/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
