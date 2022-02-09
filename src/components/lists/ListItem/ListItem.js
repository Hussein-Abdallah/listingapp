import AppText from 'components/general/AppText';
import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import colors from 'styles/generalStyles/colors';
import styles from './styles';

function ListItem({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.listItemDetails}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;
