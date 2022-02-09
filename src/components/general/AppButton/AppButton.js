import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from 'styles/generalStyles/colors';
import styles from './styles';

function AppButton({
  title,
  onPress,
  color = 'white',
  backgroundColor = 'primary',
}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: colors[backgroundColor] },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors[color] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
