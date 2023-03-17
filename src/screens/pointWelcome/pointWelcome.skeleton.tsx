import React from 'react';
import {View} from 'react-native';
import {styles} from './pointWelcome.styleSheet';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const Skeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View testID="skeleton" style={styles.container}>
        <SkeletonPlaceholder.Item style={styles.container}>
          <SkeletonPlaceholder.Item
            style={styles.container_pointsCard_contain}
            height={150}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          style={styles.container_body}
          height={'60%'}
        />
      </View>
    </SkeletonPlaceholder>
  );
};
