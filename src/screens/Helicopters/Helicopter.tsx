import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../configs/colors';

const Helicopter = () => {
  return (
    <View style={styles.container}>
      <Text>Helicopter</Text>
    </View>
  );
};

export default Helicopter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.G3c6e71,
  },
});
