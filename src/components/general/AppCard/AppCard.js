import React from 'react';
import { Pressable, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import formatPrice from 'services/utils/formatPrice';
import AppText from '../AppText';
import styles from './styles';

function AppCard({
  title,
  subTitle = '',
  imageUrl,
  price,
  onPress,
  thumbnailUrl,
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          style={styles.cardImage}
          tint='light'
        />
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
            {price ? price : subTitle}
          </AppText>
        </View>
      </View>
    </Pressable>
  );
}

export default AppCard;
