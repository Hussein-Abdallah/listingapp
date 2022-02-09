import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginRight: 10,
  },
  listItemDetails: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.mediumGray,
  },
});

export default styles;
