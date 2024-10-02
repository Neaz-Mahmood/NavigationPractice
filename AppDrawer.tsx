import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'My dashboard',
            drawerLabel: 'Dashboard label',
            drawerActiveTintColor: '#333',
            drawerInactiveBackgroundColor: 'lightblue',
            drawerContentStyle: {
              backgroundColor: '#c6cbef',
            },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
