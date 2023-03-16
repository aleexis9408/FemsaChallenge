import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {Product as ProductType} from '../../services/usePoints';
import {formatDate} from '../../utils/formateDate';
import {formatPoint} from '../../utils/formatePoint';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationRoute} from '../../navigation/rootNavigation';

interface Props {
  product: ProductType;
}

export const Product = ({product}: Props) => {
  const navigation = useNavigation();

  const handleGoToDetail = () => {
    navigation.navigate(RootNavigationRoute.PointDetailRoute, {
      product,
    });
  };

  return (
    <TouchableOpacity style={styles.product} onPress={handleGoToDetail}>
      <Image
        style={styles.product_img}
        source={{
          uri: product?.image,
        }}
      />
      <View style={styles.product_info}>
        <Text style={styles.product_info_name} numberOfLines={1}>
          {product?.product} asas ads adssad ssas
        </Text>
        <Text style={styles.product_info_date}>
          {formatDate(product?.createdAt)}
        </Text>
      </View>
      <View style={styles.product_point}>
        <Text
          style={
            product?.is_redemption
              ? styles.product_point_redemption_minus
              : styles.product_point_redemption_plus
          }>
          {product?.is_redemption ? '-' : '+'}
        </Text>
        <Text style={styles.product_point_value}>
          {formatPoint(product?.points)}
        </Text>
      </View>
      <Text style={styles.product_point_arrow}>{'>'}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 8,
  },
  product_img: {
    height: 55,
    width: 55,
    borderRadius: 10,
    overflow: 'hidden',
  },
  product_info: {
    paddingLeft: 10,
    flexGrow: 3,
    justifyContent: 'space-between',
    width: '60%',
  },
  product_info_name: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    maxWidth: '100%',
    paddingBottom: 7,
  },
  product_info_date: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    width: '100%',
  },
  product_point: {
    flexGrow: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  product_point_redemption_plus: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21,
    color: '#00B833',
  },
  product_point_redemption_minus: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21,
    color: '#FF0000',
  },
  product_point_value: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21,
  },
  product_point_arrow: {
    fontWeight: '800',
    fontSize: 18,
    paddingLeft: 10,
  },
});
