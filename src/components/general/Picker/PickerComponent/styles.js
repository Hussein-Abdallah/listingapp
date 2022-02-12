import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  closeContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});

export default styles;
