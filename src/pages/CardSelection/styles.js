// src/pages/CardSelection/styles.js
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const cardWidth = Dimensions.get('window').width / 4 - 16;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 8,
  },
  instructions: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 18,
    color: colors.text,
    fontFamily: fonts.regular,
  },
  cardsContainer: {
    alignItems: 'center',
  },
  cardImage: {
    width: cardWidth,
    height: cardWidth * 1.5,
    margin: 4,
  },
});
