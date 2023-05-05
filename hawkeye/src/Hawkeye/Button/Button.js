import React from 'react';
import {FlatList, Pressable, StyleSheet, View, Image, Text} from 'react-native';

const ButtonCustom = props => {
  const {title, color, backgroundColor, bg2, imageSource} = props;

  return (
    <Pressable style={styles.buttonbody}>
      <View style={[styles.box, {backgroundColor}]}>
        <View style={[styles.container, {backgroundColor: bg2}]}>
          <Image style={styles.image} source={imageSource} />
        </View>
        <Text style={[styles.text, {color}]}>{title}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 40,
  },
  image: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
  container: {
    // backgroundColor: '#fae207',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  box: {
    width: 110,
    height: 110,
    // backgroundColor: '#fae207',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8,
  },
  text: {
    textAlign: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonbody: {
    marginHorizontal: 25,
    paddingVertical: 20,
  },
});

export default ButtonCustom;
