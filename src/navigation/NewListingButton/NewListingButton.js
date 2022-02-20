import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Pressable, View } from 'react-native';
import colors from 'styles/generalStyles/colors';
import styles from './styles';

function NewListingButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          size={40}
          color={colors.white}
        />
      </View>
    </Pressable>
  );
}

export default NewListingButton;
