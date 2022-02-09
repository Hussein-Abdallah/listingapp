import React from 'react';
import { Image, View, StatusBar } from 'react-native';
import styles from './styles';

function ViewImage(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode='contain'
        source={require('../../assets/images/chair.jpg')}
        style={styles.image}
      />
    </View>
  );
}

export default ViewImage;
