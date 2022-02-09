import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import styles from './styles';
import AppText from 'components/general/AppText';
import AppButton from 'components/general/AppButton';

function Welcome(props) {
  return (
    <ImageBackground
      source={require('assets/images/background.jpg')}
      style={styles.container}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('assets/images/logo-red.png')}
          style={styles.logoImage}
        />
        <AppText style={styles.tagline}>Sell what you don't need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => console.log('Login Pressed')} />
        <AppButton
          title='Register'
          onPress={() => console.log('Register')}
          backgroundColor='secondary'
        />
      </View>
    </ImageBackground>
  );
}

export default Welcome;
