import React, { useState } from 'react';
import { Modal, View, Pressable, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import colors from 'styles/generalStyles/colors';
import Screen from 'components/general/Screen';
import PickerItem from '../PickerItem';
import AppText from 'components/general/AppText';

function Picker({
  icon,
  placeholder,
  data,
  onSelectItem,
  selectedItem,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleSelection = (item) => {
    setModalVisible(!modalVisible);
    onSelectItem(item);
  };
  return (
    <>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.mediumGray}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text} {...otherProps}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.mediumGray}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <View style={styles.closeContainer}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <MaterialCommunityIcons
                name='close-circle-outline'
                size={30}
                color={colors.mediumGray}
              />
            </Pressable>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={(item) => handleSelection(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

export default Picker;
