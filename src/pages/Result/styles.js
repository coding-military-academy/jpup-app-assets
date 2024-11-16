// src/pages/Result/styles.js
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.6;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
    color: colors.primary,
    fontFamily: fonts.medium,
  },
  cardsContainer: {
    paddingHorizontal: 16,
  },
  cardWrapper: {
    width: cardWidth,
    marginRight: 16,
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    padding: 12,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: cardWidth * 1.5,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    fontFamily: fonts.medium,
    marginBottom: 4,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: colors.text,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  overallResult: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  overallTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.primary,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  overallDescription: {
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.regular,
    textAlign: 'left',
    lineHeight: 22,
  },
});
