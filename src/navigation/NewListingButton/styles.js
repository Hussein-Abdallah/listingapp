import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    borderWidth: 10,
    borderColor: colors.white,
  },
});

export default styles;
