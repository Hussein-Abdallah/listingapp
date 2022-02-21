import React from 'react';
import { View } from 'react-native';

import AppText from 'components/general/AppText';
import { ListItem } from 'components/lists';

import styles from './styles';
import formatPrice from 'services/utils/formatPrice';
import { Image } from 'react-native-expo-image-cache';

function Listing({ route }) {
  const { images, title, price, description } = route.params;
  return (
    <View style={styles.container}>
      <Image
        uri={images[0].url}
        preview={{ uri: images[0].thumbnailUrl }}
        style={styles.image}
        tint='light'
      />
      <View style={styles.header}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
        <AppText>{description}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('assets/images/mosh.jpg')}
            title='Mosh Hamedani'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
}

export default Listing;
