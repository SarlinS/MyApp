import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import NavigationScreen from './screens/NavigationScreen';
import HomeScreen from './screens/HomeScreen';
import Weather from './screens/Weather';
import QuoteScreen from './screens/QuoteScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Valikko" component={NavigationScreen} />
        <Stack.Screen name="Sää" component={Weather} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
        {/* Add more screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
