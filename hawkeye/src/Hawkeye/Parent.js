import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Parent = () => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);
  const currentTime = new Date().toLocaleTimeString(); 

  return (
    <View style={styles.parent}>
      <View>
        <Text style={styles.parent_name}>Rajendran Nair</Text>
        <Text style={styles.parent_date}>{currentDate}</Text>
      </View>
      <View>
        <Text style={styles.parent_time}>{currentTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    marginTop:10,
    paddingHorizontal:20,
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
    fontSize:15,
    fontWeight:400,
  },
});

export default Parent;
