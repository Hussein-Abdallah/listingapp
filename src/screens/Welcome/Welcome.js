import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import styles from './styles';
import AppText from 'components/general/AppText';
import AppButton from 'components/general/AppButton';
import routes from 'src/navigation/routes';

function Welcome({ navigation }) {
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
        <AppButton
          title='Login'
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title='Register'
          onPress={() => navigation.navigate(routes.REGISTER)}
          backgroundColor='secondary'
        />
      </View>
    </ImageBackground>
  );
}

export default Welcome;
