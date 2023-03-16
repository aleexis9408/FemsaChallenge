import React from 'react';
import {Text, View} from 'react-native';
import {PageTemplate} from '../../components/templates/pageTemplate';
import {styles} from './pointWelcome.styleSheet';
import {usePointWelcome} from './usePointWelcome.hook';
import {Skeleton} from './pointWelcome.skeleton';
import {ProductList} from '../../components/molecules/productList';
import {MothCurrent} from '../../utils/formateDate';
import {formatPoint} from '../../utils/formatePoint';

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
              {formatPoint(totalPoints)} pts
            </Text>
          </View>
        </View>
        <Text style={styles.container_pointsCard_title_movement}>
          TUS MOVIMIENTOS
        </Text>
        <ProductList products={data} />
      </View>
    </PageTemplate>
  );
};
