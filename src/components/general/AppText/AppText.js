import React from 'react';
import { Text } from 'react-native';
import textStyles from 'styles/generalStyles/textStyles';

function index({ style, children }) {
  return <Text style={[textStyles.text, style]}>{children}</Text>;
}

export default index;
