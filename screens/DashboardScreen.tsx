import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const DashboardScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo('Settings')} />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
