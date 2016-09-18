import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const GrayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Gray Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default GrayScreen;
