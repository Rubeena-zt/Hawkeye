import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import ButtonCustom from './Button';

const ButtonIcons = () => {
  return (
    <View style={styles.ButtonCustom}>
    <FlatList
      data={[
        { id: '1', title: 'Track', color: 'black', backgroundColor: '#fae207', bg2: '#c9c11e', imageSource: require('../../public/images/location.png') },
        { id: '2', title: 'Pickup\nSchedule', color: '#fff', backgroundColor: '#828070', bg2: '#bfbca6', imageSource: require('../../public/images/bus.png') },
        { id: '3', title: 'My profile', color: '#fff', backgroundColor: '#63c2bd', bg2: '#5f9e9b', imageSource: require('../../public/images/profile.png') },
        { id: '4', title: 'Children', color: '#fff', backgroundColor: '#db7a76', bg2: '#ad5551', imageSource: require('../../public/images/child.png') },
        { id: '5', title: 'Messages', color: '#fff', backgroundColor: '#3557a6', bg2: '#5977bd', imageSource: require('../../public/images/message.png') },
        { id: '6', title: 'Holiday list', color: '#fff', backgroundColor: '#60c744', bg2: '#4a9c33', imageSource: require('../../public/images/umbrella.png') },
      ]}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ButtonCustom 
          title={item.title} 
          color={item.color} 
          backgroundColor={item.backgroundColor} 
          bg2={item.bg2} 
          imageSource={item.imageSource} 
        />
      )}
    />
  </View>
  );
};

styles = StyleSheet.create({
  ButtonCustom:{
    paddingHorizontal:30,
  },
});

export default ButtonIcons;
