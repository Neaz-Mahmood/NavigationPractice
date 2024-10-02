import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({navigation}: {navigation: any}) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', {name: 'Endeavour',
            id: 5,
            email: 'message@gmail.com',
          })}
          />
      </View>
    );
  }


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
    },
  });

export default HomeScreen;
