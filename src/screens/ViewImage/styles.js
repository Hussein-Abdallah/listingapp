import { StyleSheet } from 'react-native';
import colors from '../../styles/generalStyles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
    right: 30,
  },
});

export default styles;
