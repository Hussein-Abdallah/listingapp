import { StyleSheet } from 'react-native';
import colors from '../../styles/generalStyles/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  logoImage: {
    height: 100,
    width: 100,
    marginBottom: 25,
  },
  loginButton: {
    height: 70,
    width: '100%',
    backgroundColor: colors.primary,
  },
  registerButton: {
    height: 70,
    width: '100%',
    backgroundColor: colors.secondary,
  },
});

export default styles;
