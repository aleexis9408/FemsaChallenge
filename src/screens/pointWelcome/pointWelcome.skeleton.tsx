import React from 'react';
import {View} from 'react-native';
import {styles} from './pointWelcome.styleSheet';

export const Skeleton = () => {
  return <View testID="skeleton" style={styles.container}></View>;
};
