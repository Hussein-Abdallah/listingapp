import React from 'react';
import { Image, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import colors from 'styles/generalStyles/colors';

function ViewImage(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <MaterialCommunityIcons
        name='close'
        color={colors.white}
        size={36}
        style={styles.closeIcon}
      />
      <MaterialCommunityIcons
        name='trash-can-outline'
        color={colors.white}
        size={36}
        style={styles.deleteIcon}
      />
      <Image
        resizeMode='contain'
        source={require('../../assets/images/chair.jpg')}
        style={styles.image}
      />
    </View>
  );
}

export default ViewImage;
