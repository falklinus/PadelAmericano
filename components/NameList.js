import React from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';

export const NameList = ({ players, setPlayers }) => {
  return (
    <View>
      <Text style={styles.subtitle}>Spelare</Text>
      <View style={styles.player}>
        <Text>#1</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([
              { ...players[0], name: text },
              ...players.slice(1, players.length),
            ])
          }
          value={players[0].name}
          placeholder="Namn"
        />
      </View>
      <View style={styles.player}>
        <Text>#2</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([
              ...players.slice(0, 1),
              { ...players[1], name: text },
              ...players.slice(2, players.length),
            ])
          }
          value={players[1].name}
          placeholder="Namn"
        />
      </View>
      <View style={styles.player}>
        <Text>#3</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([
              ...players.slice(0, 2),
              { ...players[2], name: text },
              ...players.slice(3, players.length),
            ])
          }
          value={players[2].name}
          placeholder="Namn"
        />
      </View>
      <View style={styles.player}>
        <Text>#4</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([
              ...players.slice(0, 3),
              { ...players[3], name: text },
              ...players.slice(4, players.length),
            ])
          }
          value={players[3].name}
          placeholder="Namn"
        />
      </View>
      <View style={styles.player}>
        <Text>#5</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([
              ...players.slice(0, 4),
              { ...players[4], name: text },
              ...players.slice(5, players.length),
            ])
          }
          value={players[4].name}
          placeholder="Namn"
        />
      </View>
      <View style={styles.player}>
        <Text>#6</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([
              ...players.slice(0, 5),
              { ...players[5], name: text },
              ...players.slice(6, players.length),
            ])
          }
          value={players[5].name}
          placeholder="Namn"
        />
      </View>
      <View style={styles.player}>
        <Text>#7</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([
              ...players.slice(0, 6),
              { ...players[6], name: text },
              ...players.slice(7, players.length),
            ])
          }
          value={players[6].name}
          placeholder="Namn"
        />
      </View>
      <View style={styles.player}>
        <Text>#8</Text>
        <TextInput
          style={styles.playerTextInput}
          onChangeText={(text) =>
            setPlayers([...players.slice(0, 7), { ...players[7], name: text }])
          }
          value={players[7].name}
          placeholder="Namn"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  playerTextInput: {
    marginLeft: 10,
    height: 30,
    padding: 2,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    //width: '50%',
  },
});
