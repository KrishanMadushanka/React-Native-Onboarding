import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../assets/colors/colors';

const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
  },
});
export default Home;
