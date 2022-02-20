import { DefaultTheme } from '@react-navigation/native';
import colors from 'styles/generalStyles/colors';
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
