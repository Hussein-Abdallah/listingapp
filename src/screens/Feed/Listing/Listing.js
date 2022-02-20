import React from 'react';
import { Image, View } from 'react-native';

import AppText from 'components/general/AppText';
import { ListItem } from 'components/lists';

import styles from './styles';
import formatPrice from 'services/utils/formatPrice';

function Listing({ route }) {
  const { images, title, price, description } = route.params;
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Image source={images} style={styles.image} />
      <View style={styles.header}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{formatPrice(price)}</AppText>
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
