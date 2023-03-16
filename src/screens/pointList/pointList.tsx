import React from 'react';
import {Text, View} from 'react-native';
import {PageTemplate} from '../../common/templates/pageTemplate';
import {styles} from './pointList.styleSheet';
import {usePointList} from './usePointList.hook';
import {SkeletonPointList} from './pointList.skeleton';

export const PointList = () => {
  const {totalPoints, isLoading} = usePointList();

  if (isLoading) {
    return <SkeletonPointList />;
  }

  return (
    <PageTemplate>
      <View style={styles.container}>
        <Text style={styles.container_welcome_title}>
          Bienvenido de vuelta!
        </Text>
        <Text style={styles.container_welcome_subtitle}>Ruben Rodriguez</Text>
        <View style={styles.container_pointsCard}>
          <Text style={styles.container_pointsCard_title}>Tus puntos</Text>
          <View style={styles.container_pointsCard_contain}>
            <Text style={styles.container_pointsCard_contain_moth}>Mes</Text>
            <Text style={styles.container_pointsCard_contain_value}>
              {totalPoints} pts
            </Text>
          </View>
        </View>
        <View style={styles.container_movement}>
          <Text style={styles.container_pointsCard_title}>TUS MOVIMIENTOS</Text>
          <View></View>
        </View>
      </View>
    </PageTemplate>
  );
};