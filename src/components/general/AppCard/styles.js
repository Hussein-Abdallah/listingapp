import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardImage: {
    height: 300,
    width: '100%',
  },
  cardHeader: {
    padding: 20,
  },
  cardTitle: {
    marginBottom: 7,
  },
  cardSubTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default styles;
