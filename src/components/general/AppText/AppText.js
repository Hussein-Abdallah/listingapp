import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function index({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default index;
