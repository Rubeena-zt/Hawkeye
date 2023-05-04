import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HawkeyeHeader from './Hawkeye/HawkeyeHeader';

function App(): JSX.Element {
  return (
    <View>
      <View style={styles.header}>
        <HawkeyeHeader />
      </View>

      <Text>hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
});

export default App;
