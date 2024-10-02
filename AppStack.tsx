/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { Pressable, Text, Alert, StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

const HeaderRight = () => (
  <Pressable onPress={() => Alert.alert('Menu button pressed!')}>
    <Text style={styles.infoText}>Menu</Text>
  </Pressable>
);

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6a51ae',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: HeaderRight,
        contentStyle: {backgroundColor: '#e8e4f3'},
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          // options={({route}) => ({title: (route.params as {name: string}).name ?? 'Details'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  infoText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;

