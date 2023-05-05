import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import HawkeyeHeader from './Hawkeye/HawkeyeHeader';
import HawkeyeHeaderRight from './Hawkeye/HawkeyeHeaderRight';
import Parent from './Hawkeye/Parent';
import ButtonIcons from './Hawkeye/Button/ButtonIcons';

// import ButtonCustom from './Hawkeye/Button/Button';

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
        <Text style={styles.message}>Your Bus will arrive in 10 mts</Text>
        <Text style={styles.apply}>Apply Leave</Text>
      </View>
      <View>
        {/* <ButtonCustom /> */}
        <ButtonIcons />
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
    justifyContent: 'space-between',
    backgroundColor: '#1d3882',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 50,
  },
  header_left: {},
  header_right: {},
  image_bus: {
    width: 170,
    height: 130,
    marginTop: 100,
    resizeMode: 'stretch',
    marginLeft: 220,
    marginTop: -100,
  },
  message: {
    color: 'red',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  apply: {
    color: '#584fd1',
    textDecorationLine: 'underline',
    textDecorationColor: '#584fd1',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;
