import AppText from 'components/general/AppText';
import IconComponent from 'components/general/IconComponent';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <IconComponent
          name={item.icon.name}
          backgroundColor={item.icon.backgroundColor}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

export default CategoryPickerItem;
