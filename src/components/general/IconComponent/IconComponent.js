import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import colors from 'styles/generalStyles/colors';

function IconComponent({
  name,
  size = 40,
  color = colors.white,
  backgroundColor = colors.black,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
    </View>
  );
}

export default IconComponent;
