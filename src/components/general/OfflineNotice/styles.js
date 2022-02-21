import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
