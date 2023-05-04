import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HawkeyeHeader = () => {
  return (
    <View style={styles.header_main}>
      <View style={styles.header_top}>
        <Text>Hawkeye</Text>
      </View>
      <View style={styles.header_top2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_main: {
    backgroundColor: '#1d3882',
    height:200,
    borderBottomEndRadius:10
  },
  header_top: {
    color: 'black',
  },
  header_top2: {
    color: 'black',
  },
});

export default HawkeyeHeader;
