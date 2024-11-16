// src/pages/History/styles.js
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16,
    paddingTop: 80,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.surface,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.text,
    fontFamily: fonts.medium,
  },
  cardItem: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: colors.grey,
    borderRadius: 10,
    padding: 8,
  },
  cardPreview: {
    width: 80,
    height: 110,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    fontFamily: fonts.medium,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.text,
    fontFamily: fonts.regular,
  },
  more: {
    marginTop: 8,
    fontWeight: '700',
    textAlign: 'right',
    color: colors.primary,
    fontFamily: fonts.medium,
  },
});
