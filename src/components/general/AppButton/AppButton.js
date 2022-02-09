import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import colors from 'styles/generalStyles/colors';
import styles from './styles';

function AppButton({
  title,
  onPress,
  color = 'white',
  backgroundColor = 'primary',
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        {
          backgroundColor: colors[backgroundColor],
          opacity: pressed ? 0.6 : 1,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors[color] }]}>{title}</Text>
    </Pressable>
  );
}

export default AppButton;
