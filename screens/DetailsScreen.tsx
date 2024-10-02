import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { useLayoutEffect } from 'react';

// type RootStackParamList = {
//   Home: undefined;
//   Details: undefined;
// };

function DetailsScreen({route}: {route: any}) {
  const navigation = useNavigation<any>();
  const {name, id, email} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text>name: {name}</Text>
      <Text>itemId: {JSON.stringify(id)}</Text>
      <Text>otherParam: {JSON.stringify(email)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen" onPress={() => navigation.popToTop()} />
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

export default DetailsScreen;
