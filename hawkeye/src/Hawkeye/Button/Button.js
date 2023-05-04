import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  ImageBackground,
  View,
  Image,
} from 'react-native';

const Button = props => {
  return (
    <View>
      <Button
        style={styles.button}
        title="button"
        // onPress={() => console.log('Button pressed')}
        >
        <Image source={require('../../public/images/location.png')} />
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 40,
  },
});

export default Button;
