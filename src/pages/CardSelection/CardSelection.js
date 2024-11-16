// src/pages/CardSelection/CardSelection.js
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { cardsData } from '../../data/cardData';

const CardSelection = ({ navigation }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleSelectCard = (card) => {
    if (selectedCards.includes(card)) return;

    const newSelectedCards = [...selectedCards, card];

    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 3) {
      navigation.replace('Result', { cards: newSelectedCards, from:'CardSelection' });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectCard(item)}>
      <Image
        source={require('../../../assets/card_back.png')}
        style={styles.cardImage}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>운명을 밝힐 3장의 카드를 선택해 보세요.</Text>
      <FlatList
        data={cardsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

export default CardSelection;
