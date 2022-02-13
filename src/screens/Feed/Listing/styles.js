import { StyleSheet } from 'react-native';
import colors from 'styles/generalStyles/colors';

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 300,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default styles;
