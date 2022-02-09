import AppText from 'components/general/AppText';
import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.listItemDetails}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;
