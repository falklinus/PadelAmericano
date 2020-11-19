import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Padel Americano</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'indianred',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});
