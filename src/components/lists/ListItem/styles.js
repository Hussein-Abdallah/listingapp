import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  listItemDetails: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: colors.mediumGray,
  },
});

export default styles;
