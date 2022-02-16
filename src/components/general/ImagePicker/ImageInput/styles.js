import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
