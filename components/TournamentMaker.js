import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Button } from 'react-native';

// Components
import { NameList } from './NameList';
import { Rounds } from './Rounds';

export const TournamentMaker = () => {
  const [players, setPlayers] = useState([
    {
      name: '',
      score: 0,
    },
    {
      name: '',
      score: 0,
    },
    {
      name: '',
      score: 0,
    },
    {
      name: '',
      score: 0,
    },
    {
      name: '',
      score: 0,
    },
    {
      name: '',
      score: 0,
    },
    {
      name: '',
      score: 0,
    },
    {
      name: '',
      score: 0,
    },
  ]);

  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    setRounds([
      {
        title: 'Omgång 1',
        data: [
          {
            teamOne: [players[0], players[1]],
            teamTwo: [players[2], players[3]],
          },
          {
            teamOne: [players[4], players[5]],
            teamTwo: [players[6], players[7]],
          },
        ],
      },
      {
        title: 'Omgång 2',
        data: [
          {
            teamOne: [players[0], players[2]],
            teamTwo: [players[4], players[6]],
          },
          {
            teamOne: [players[1], players[3]],
            teamTwo: [players[5], players[7]],
          },
        ],
      },
      {
        title: 'Omgång 3',
        data: [
          {
            teamOne: [players[0], players[4]],
            teamTwo: [players[1], players[5]],
          },
          {
            teamOne: [players[2], players[6]],
            teamTwo: [players[3], players[7]],
          },
        ],
      },
      {
        title: 'Omgång 4',
        data: [
          {
            teamOne: [players[2], players[4]],
            teamTwo: [players[1], players[7]],
          },
          {
            teamOne: [players[3], players[5]],
            teamTwo: [players[0], players[6]],
          },
        ],
      },
      {
        title: 'Omgång 5',
        data: [
          {
            teamOne: [players[4], players[7]],
            teamTwo: [players[0], players[3]],
          },
          {
            teamOne: [players[1], players[2]],
            teamTwo: [players[5], players[6]],
          },
        ],
      },
      {
        title: 'Omgång 6',
        data: [
          {
            teamOne: [players[0], players[7]],
            teamTwo: [players[1], players[6]],
          },
          {
            teamOne: [players[3], players[4]],
            teamTwo: [players[2], players[5]],
          },
        ],
      },
      {
        title: 'Omgång 7',
        data: [
          {
            teamOne: [players[2], players[7]],
            teamTwo: [players[0], players[5]],
          },
          {
            teamOne: [players[3], players[6]],
            teamTwo: [players[1], players[4]],
          },
        ],
      },
    ]);
  }, players);

  return (
    <View style={styles.container}>
      <NameList players={players} setPlayers={setPlayers} />
      {/* <Button
        title="test"
        onPress={() => {
          console.log(players);
          //console.log(players.length);
          console.log(rounds);
        }}
      /> */}
      <Rounds rounds={rounds} />
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
