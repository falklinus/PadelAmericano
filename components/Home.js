import React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import { Header } from './Header';
import { CardList } from './CardList';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* <CardList /> */}
      <ScrollView>
        <CardList navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
