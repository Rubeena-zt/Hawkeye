import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HawkeyeHeaderRight = () => {
  return (
    <View>
    <View style={styles.top_right}>
      <Image
        style={styles.image}
        source={require('../public/images/logout2.png')}></Image>
      <Text style={styles.text_top}>Logout</Text>
    </View>
    {/* <Image style={styles.image_bus}
    source={require('../public/images/schoolbus.png')}></Image> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 15,
    height: 15,
    marginRight:5,
  },
  top_right:{
    flexDirection:'row',
    // justifyContent:'center',
    // alignItems:'center',
    marginTop:20,
    // marginRight:20,
  },
  text_top:{
    fontWeight:600,
    fontSize:15,
    color:'white',
  },
//   image_bus:{
// width:140,
// height:100,
// marginTop:100,
// resizeMode:'stretch'
//   }
});

export default HawkeyeHeaderRight;
