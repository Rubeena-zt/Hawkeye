import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HawkeyeHeader = () => {
  return (
    <View style={styles.header_main}>
      <View style={styles.header_top}>
        <Text style={styles.header_text}>Hawkeye</Text>
        <Text style={styles.header_text2}>Your remote eye</Text>
        <Text style={styles.subHeader}>Chempaka International</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_main: {
    height: 200,
    backgroundColor: '#1d3882',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // borderRadius:50,
    paddingLeft: 20,
  },
  header_top: {
    flex: 1,
    fontSize: '20',
    // justifyContent: 'start',
    // alignItems: 'left',
  },
  header_text: {
    fontSize: 42,
    fontWeight: '400',
    fontFamily: 'sans-serif',
    color: '#ffffff',
    marginTop: 25,
  },
  header_text2: {
    fontSize: 15,
    fontWeight: '500',
  },
  subHeader: {
    fontSize: 20,
    marginTop: 15,
    color: '#d3db3d',
    fontWeight: 500,
  },
});

export default HawkeyeHeader;
