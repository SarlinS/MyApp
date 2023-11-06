import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>Tervetuloa käyttämään MyApp-sovellusta!</Text>
      <Button
        title="Etusivulle"
        onPress={() => navigation.navigate('Valikko')} // Navigate to the screen with the name 'Etusivulle'
      />
    </View>
  );
}

export default HomeScreen;