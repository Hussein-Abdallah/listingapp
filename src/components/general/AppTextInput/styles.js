import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
  },
  icon: {
    color: colors.mediumGray,
    marginRight: 10,
  },
});

export default styles;
