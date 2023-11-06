import React from 'react';
import { View, Text, Button } from 'react-native';

function NavigationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 20 }}>Täältä löydät tämän hetken säätiedot!</Text>
        <Button title="Säätiedot" onPress={() => navigation.navigate('Sää')} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 20 }}>Täältä löydät inspiroivan lainauksen!</Text>
        <Button
          title="Quote"
          onPress={() => navigation.navigate('Quote')}
          style={{ width: '100%' }}
        />
      </View>
    </View>
  );
}

export default NavigationScreen;