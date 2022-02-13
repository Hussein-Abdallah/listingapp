import React from 'react';
import { Text } from 'react-native';
import textStyles from 'styles/generalStyles/textStyles';

function index({ style, children, ...otherProps }) {
  return (
    <Text style={[textStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default index;
