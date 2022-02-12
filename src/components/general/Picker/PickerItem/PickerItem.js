import AppText from 'components/general/AppText';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
