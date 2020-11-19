import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Pressable,
} from 'react-native';

export const CardList = ({ navigation }) => {
  const [createTournamentPressed, setCreateTournamentPressed] = useState(false);
  const handleCardPress = () => {
    navigation.navigate('TournamentMaker');
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.card}
        onPressIn={() => setCreateTournamentPressed(true)}
        onPressOut={() => {
          setCreateTournamentPressed(false);
          handleCardPress();
        }}
      >
        <ImageBackground
          style={styles.image}
          imageStyle={{ opacity: createTournamentPressed ? 0.6 : 0.8 }}
          source={{
            uri:
              'https://www.varnamo.se/images/18.6e7468ca1710cf905452f43/1585646572223/Padel-864.jpg',
          }}
        >
          <Text style={styles.text}>Skapa Turnering</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: '80%',
    height: 150,
    borderRadius: 10,
    //backgroundColor: 'indianred',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});
