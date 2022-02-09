import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

export default Screen;
