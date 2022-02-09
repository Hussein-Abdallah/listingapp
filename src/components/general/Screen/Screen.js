import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

function Screen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default Screen;
