import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import HawkeyeHeader from './Hawkeye/HawkeyeHeader';
import HawkeyeHeaderRight from './Hawkeye/HawkeyeHeaderRight';
import Parent from './Hawkeye/Parent';

function App(): JSX.Element {
  return (
    <View style={styles.body}>
      <View style={styles.hawkeye_top_part}>
        <View style={styles.header_left}>
          <HawkeyeHeader />
        </View>
        <View style={styles.header_right}>
          <HawkeyeHeaderRight />
        </View>
      </View>
      <View>
        <Image
          style={styles.image_bus}
          source={require('./public/images/schoolbus.png')}
        />
      </View>
      <View>
        <Parent />
      </View>

      <View>
        <Text>hello world</Text>
      </View>
      <View>
        <Text>fyeffdsj</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    color: 'black',
    flex: 1,
  },
  hawkeye_top_part: {
    flexDirection: 'row',
    backgroundColor: '#1d3882',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 60,
  },
  header_left: {},
  header_right: {},
  image_bus: {
    width: 140,
    height: 100,
    marginTop: 100,
    resizeMode: 'stretch',
    marginLeft: 230,
    marginTop: -80,
  },
});

export default App;
