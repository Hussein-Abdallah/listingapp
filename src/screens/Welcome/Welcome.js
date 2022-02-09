import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import styles from './styles';
import AppText from 'components/general/AppText';

function Welcome(props) {
  return (
    <ImageBackground
      source={require('assets/images/background.jpg')}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('assets/images/logo-red.png')}
          style={styles.logoImage}
        />
        <AppText>Sell what you don't need</AppText>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default Welcome;
