import { StyleSheet } from 'react-native';
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
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
  tagline: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 15,
  },
});

export default styles;
