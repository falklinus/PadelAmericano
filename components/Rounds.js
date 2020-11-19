import React from 'react';

import { View, StyleSheet, SectionList, Text } from 'react-native';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const Rounds = ({ rounds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Spelschema</Text>
      {rounds.map((round) => (
        <View style={styles.round} key={round.title}>
          <Text style={styles.title}>{round.title}</Text>
          <View style={styles.teams}>
            <Text style={styles.text}>
              {round.data[0].teamOne[0].name}
              {' / '}
              {round.data[0].teamOne[1].name}
              {' - '}
              {round.data[0].teamTwo[0].name}
              {' / '}
              {round.data[0].teamTwo[1].name}
            </Text>
            <Text style={styles.text}>
              {round.data[1].teamOne[0].name}
              {' / '}
              {round.data[1].teamOne[1].name}
              {' vs '}
              {round.data[1].teamTwo[0].name}
              {' / '}
              {round.data[1].teamTwo[1].name}
            </Text>
          </View>
        </View>
      ))}
      {/* <SectionList
        sections={rounds}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      /> */}
    </View>
  );
};

{
  /* <Text>
            Match One: {section.matchOne.teamOne[0]} /{' '}
            {section.matchOne.teamOne[1]} vs {section.matchOne.teamTwo[0]} /{' '}
            {section.matchOne.teamTwo[1]}
          </Text> */
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  round: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  teams: {
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});
