import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Pressable, Image, Alert } from 'react-native';
import IconComponent from 'components/general/IconComponent';

import colors from 'styles/generalStyles/colors';
import styles from './styles';

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage(null),
        },
        {
          text: 'No',
        },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error waiting for image', error);
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <IconComponent
            name='camera'
            size={80}
            color={colors.mediumGray}
            backgroundColor={colors.lightGray}
          />
        )}
      </View>
    </Pressable>
  );
}

export default ImageInput;
