import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.tytle}>Start a new Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title='Reset' onPress={() => {}} />
          <Button title='Confirm' onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  }
});

export default StartGameScreen;
