import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

export default function Scroll() {
  return (
    <View>
      <Text style={styles.headingText}> textInComponent </Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.one]}>
            <Text style={styles.cardText}>Tab</Text>
          </View>
          <View style={[styles.card, styles.one]}>
            <Text style={styles.cardText}>Tab</Text>
          </View>
          <View style={[styles.card, styles.one]}>
            <Text style={styles.cardText}>Tab</Text>
          </View>
          <View style={[styles.card, styles.one]}>
            <Text style={styles.cardText}>Tab</Text>
          </View>
          <View style={[styles.card, styles.one]}>
            <Text style={styles.cardText}>Tab</Text>
          </View>
          <View style={[styles.card, styles.one]}>
            <Text style={styles.cardText}>Tab</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    padding: 8,
    flexDirection:'row'
  },
  card: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin:5,
    borderRadius:1000,
    // elevation:4, for shadow
    shadowOffset:{
        width:1,
        height:1
    },
    shadowColor:'pink'
  },
  cardText: {
    textAlign: 'center', // Optional for additional alignment
  },
  one: {
    backgroundColor: 'pink',
  },
});
