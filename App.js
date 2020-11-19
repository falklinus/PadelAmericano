//import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

//Components
import { Home } from './components/Home';
import { TournamentMaker } from './components/TournamentMaker';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar /* barStyle="light-content" */ />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Padel Americano',
          }}
        />
        <Stack.Screen
          name="TournamentMaker"
          component={TournamentMaker}
          options={{
            title: 'Skapa Turnering',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
