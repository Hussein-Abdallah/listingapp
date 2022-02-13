import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
// Android require GestureHandlerRootView to wrap the gesture element in order to work
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from 'components/general/AppText';
import colors from 'styles/generalStyles/colors';
import styles from './styles';

function ListItem({
  IconComponent,
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.listItemDetails}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
            {showChevrons && (
              <MaterialCommunityIcons
                name='chevron-right'
                color={colors.mediumGray}
                size={24}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;
