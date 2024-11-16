// src/pages/Main/styles.js
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 24,
    color: colors.primary,
    fontFamily: fonts.medium,
  },
  button: {
    marginTop: 8,
    backgroundColor:colors.buttonColor
  },
  link: {
    marginTop: 16,
  },
});
