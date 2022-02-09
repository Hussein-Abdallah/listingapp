import AppText from 'components/general/AppText';
import ListItem from 'components/lists/ListItem';
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import styles from './styles';

function Post(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/images/jacket.jpg')}
        style={styles.image}
      />
      <View style={styles.header}>
        <AppText style={styles.title}>Jacket for sale</AppText>
        <AppText style={styles.price}>{formatPrice(1000)}</AppText>
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

export default Post;
