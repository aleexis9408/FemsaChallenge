import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PageTemplate} from '../../components/templates/pageTemplate';
import {useNavigation, useRoute} from '@react-navigation/native';
import {formatDate} from '../../utils/formateDate';
import {formatPoint} from '../../utils/formatePoint';
import {Button} from '../../components/atoms/Button';
import {BOX_SHADOW, typography} from '../../theme/default';

export const PointDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {product} = route.params;
  return (
    <PageTemplate>
      <View style={styles.pointDetail}>
        <View style={styles.pointDetail_header}>
          <Text style={styles.pointDetail_header_title}>{product.product}</Text>
        </View>
        <View style={styles.pointDetail_body}>
          <View style={styles.pointDetail_body_img_shadow}>
            <Image
              testID="pointDetailImage"
              style={styles.pointDetail_body_img}
              source={{
                uri: product?.image,
              }}
            />
          </View>
          <Text style={styles.pointDetail_body_titles}>
            Detalles del producto:
          </Text>
          <Text style={styles.pointDetail_body_date}>
            Comprado el {formatDate(product?.createdAt)}
          </Text>
          <Text style={styles.pointDetail_body_titles}>
            Con esta compra acumulaste:
          </Text>
          <Text style={styles.pointDetail_body_point}>
            {formatPoint(product?.points)} puntos
          </Text>
          <Button
            text="Aceptar"
            hadleOnPress={() => navigation.canGoBack() && navigation.goBack()}
          />
        </View>
      </View>
    </PageTemplate>
  );
};

export const styles = StyleSheet.create({
  pointDetail: {
    flex: 1,
    backgroundColor: 'white',
  },
  pointDetail_header: {
    backgroundColor: '#CFD6FF',
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  pointDetail_header_title: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.xl,
    lineHeight: 24,
  },
  pointDetail_body: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  pointDetail_body_img_shadow: {
    ...BOX_SHADOW,
  },
  pointDetail_body_img: {
    width: '100%',
    height: 300,
    paddingVertical: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  pointDetail_body_titles: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.sm,
    lineHeight: 19,
    color: '#9B9898',
    paddingVertical: 10,
  },
  pointDetail_body_date: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.lg,
    lineHeight: 21,
  },
  pointDetail_body_point: {
    fontFamily: typography.fontFamily.avenir,
    fontWeight: typography.fontWeights.extrabold,
    fontSize: typography.fontSizes.xl,
    lineHeight: 32,
    marginBottom: 20,
  },
});
