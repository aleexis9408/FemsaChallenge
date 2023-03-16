import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {PageTemplate} from '../../components/templates/pageTemplate';
import {styles} from './pointWelcome.styleSheet';
import {usePointWelcome} from './usePointWelcome.hook';
import {Skeleton} from './pointWelcome.skeleton';
import {ProductList} from '../../components/molecules/productList';
import {MothCurrent} from '../../utils/formateDate';
import {Product} from '../../components/atoms/Product';

export const pointWelcome = () => {
  const {totalPoints, isLoading, data} = usePointWelcome();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <PageTemplate>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text style={styles.container_welcome_title}>
                Bienvenido de vuelta!
              </Text>
              <Text style={styles.container_welcome_subtitle}>
                Ruben Rodriguez
              </Text>
              <View style={styles.container_pointsCard}>
                <Text style={styles.container_pointsCard_title}>
                  Tus puntos
                </Text>
                <View style={styles.container_pointsCard_contain}>
                  <Text style={styles.container_pointsCard_contain_moth}>
                    {MothCurrent()}
                  </Text>
                  <Text style={styles.container_pointsCard_contain_value}>
                    {totalPoints} pts
                  </Text>
                </View>
              </View>
              <Text style={styles.container_pointsCard_title_movement}>
                TUS MOVIMIENTOS
              </Text>
            </View>
          );
        }}
        renderItem={({item}) => {
          return <Product product={item} />;
        }}
      />
    </PageTemplate>
  );
};
