import React from 'react';
import { Image, Pressable, View } from 'react-native';
import formatPrice from 'services/utils/formatPrice';
import AppText from '../AppText';
import styles from './styles';

function AppCard({ title, subTitle = '', image, price, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardHeader}>
          <AppText
            numberOfLines={1}
            ellipsizeMode='tail'
            style={styles.cardTitle}
          >
            {title}
          </AppText>
          <AppText
            numberOfLines={1}
            ellipsizeMode='tail'
            style={styles.cardSubTitle}
          >
            {price ? formatPrice(price) : subTitle}
          </AppText>
        </View>
      </View>
    </Pressable>
  );
}

export default AppCard;
