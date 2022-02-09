import React from 'react';
import { Image, View } from 'react-native';
import formatPrice from 'services/utils/formatPrice';
import AppText from '../AppText';
import styles from './styles';

function AppCard({ title, subTitle = '', image, price }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardHeader}>
        <AppText style={styles.cardTitle}>{title}</AppText>
        <AppText style={styles.cardSubTitle}>
          {price ? formatPrice(price) : subTitle}
        </AppText>
      </View>
    </View>
  );
}

export default AppCard;
