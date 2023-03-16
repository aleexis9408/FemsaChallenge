import React from 'react';
import {Text, View} from 'react-native';
import {PageTemplate} from '../../common/templates/pageTemplate';
import {styles} from './pointWelcome.styleSheet';
import {usePointWelcome} from './usePointWelcome.hook';
import {Skeleton} from './pointWelcome.skeleton';
import {ProductList} from '../../common/molecules/productList';
import {MothCurrent} from '../../utils/formateDate';

export const pointWelcome = () => {
  const {totalPoints, isLoading, data} = usePointWelcome();

  if (isLoading) {
    return <Skeleton />;
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
            <Text style={styles.container_pointsCard_contain_moth}>
              {MothCurrent()}
            </Text>
            <Text style={styles.container_pointsCard_contain_value}>
              {totalPoints} pts
            </Text>
          </View>
        </View>
        <View style={styles.container_movement}>
          <Text style={styles.container_pointsCard_title}>TUS MOVIMIENTOS</Text>
          <ProductList products={data} />
        </View>
      </View>
    </PageTemplate>
  );
};
