import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function index({ style, children }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default index;
