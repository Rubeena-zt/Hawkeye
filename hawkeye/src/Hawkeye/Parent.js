import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Parent = () => {
  return (
    <View style={styles.parent}>
      <View>
        <Text style={styles.parent_name}>Rajendran Nair</Text>
        <Text style={styles.parent_date}>Thursday,May 4 2023</Text>
      </View>
      <View>
        <Text style={styles.parent_time}>10:28 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection:'row',
  },
  parent_name: {
    color: 'black',
    fontSize:25,
    fontWeight:600,
  },
  parent_time: {
    color: 'black',
    fontSize:20,
  },
  parent_date: {
    color: '#74777a',
  },
});

export default Parent;
