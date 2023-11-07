import { StyleSheet } from 'react-native';

import { vs } from './sizesHandler';
import { COLORS } from '../color';

const size = {
  xxs: vs(8),
  xs: vs(10),
  sm: vs(13),
  md: vs(16),
  lg: vs(19),
  xl: vs(22),
  xxl: vs(25),
};
// Todo: Add the font family of the app
// const type = {
//   Helvetica: {
//     light: 'Helvetica_Light',
//     regular: 'Helvetica_Regular',
//     semiBold: 'Helvetica_SemiBold',
//     bold: 'Helvetica_Bold',
//     extraBold: 'Helvetica_ExtraBold',
//   },
// };

const FontStyle = StyleSheet.create({
  h7: {
    color: COLORS.BLACK,
    fontSize: size.xxs,
    // fontFamily: type.Helvetica.regular,
  },
  h7B: {
    color: COLORS.BLACK,
    fontSize: size.xxs,
    // fontFamily: type.Helvetica.bold,
  },
  h6: {
    color: COLORS.BLACK,
    fontSize: size.xs,
    // fontFamily: type.Helvetica.regular,
  },
  h6B: {
    color: COLORS.BLACK,
    fontSize: size.xs,
    // fontFamily: type.Helvetica.bold,
  },
  h5: {
    color: COLORS.BLACK,
    fontSize: size.sm,
    // fontFamily: type.Helvetica.regular,
  },
  h5B: {
    color: COLORS.BLACK,
    fontSize: size.sm,
    // fontFamily: type.Helvetica.bold,
  },
  h4: {
    color: COLORS.BLACK,
    fontSize: size.md,
    // fontFamily: type.Helvetica.regular,
  },
  h4B: {
    color: COLORS.BLACK,
    fontSize: size.md,
    // fontFamily: type.Helvetica.bold,
  },
  h3: {
    color: COLORS.BLACK,
    fontSize: size.lg,
    // fontFamily: type.Helvetica.regular,
  },
  h3B: {
    color: COLORS.BLACK,
    fontSize: size.lg,
    // fontFamily: type.Helvetica.bold,
  },
  h2: {
    color: COLORS.BLACK,
    fontSize: size.xl,
    // fontFamily: type.Helvetica.regular,
  },
  h2B: {
    color: COLORS.BLACK,
    fontSize: size.xl,
    // fontFamily: type.Helvetica.bold,
  },
  h1: {
    color: COLORS.BLACK,
    fontSize: size.xxl,
    // fontFamily: type.Helvetica.regular,
  },
  h1B: {
    color: COLORS.BLACK,
    fontSize: size.xxl,
    // fontFamily: type.Helvetica.bold,
  },
});

export default FontStyle;