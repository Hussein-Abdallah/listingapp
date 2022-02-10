import { Platform } from 'react-native';

import colors from 'styles/generalStyles/colors';

export default {
  text: {
    color: colors.darkGray,
    ...Platform.select({
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
    }),
  },
};
