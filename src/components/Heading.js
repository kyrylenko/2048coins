import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Dimensions from '../utils/dimensions';

const styles = StyleSheet.create({
  heading: {
    height: 40,//Dimensions.size["20"],
    marginTop: 24,//Dimensions.size["12"],
    marginBottom: 10,
    flexDirection: 'row',
  },
  scores: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  container: {
    width: Dimensions.screenWidth / 2 - 16,
    backgroundColor: '#d8d8d8',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerTitle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerValue: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,//Dimensions.size["10"],
    fontWeight: 'bold',
  },
})

const calcScore = (score) => (score / 20004).toFixed(4);

const Heading = ({ score, best }) => (
  <View style={styles.heading}>
      <View style={styles.scores}>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>SCORE</Text>
          <Text style={styles.containerValue}>{calcScore(score)}฿</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>BEST</Text>
          <Text style={styles.containerValue}>{calcScore(best)}฿</Text>
        </View>
      </View>
    </View>
);

export default Heading
