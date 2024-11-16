// src/pages/Signup/styles.js
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight:700,
    color: colors.primary,
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    backgroundColor:colors.buttonColor
  },
  link: {
    marginTop: 16,
    alignSelf: 'center',
  },
});
