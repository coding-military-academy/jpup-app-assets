// src/pages/History/History.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { getReadings } from '../../services/database';
import { formatDate } from '../../utils/dateUtils';
import { cardImages } from '../../../assets/card';
import { useFocusEffect } from '@react-navigation/native';

const History = ({ navigation }) => {
  const [readings, setReadings] = useState([]);

  useFocusEffect(() => {
    const fetchReadings = async () => {
      const data = await getReadings();
      setReadings(data);
    };
    fetchReadings();
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Result', { cards: item.cards, from: 'History' })}
    >
      <Text style={styles.date}>{formatDate(item.date)}</Text>
      {item.cards.map((card) => (
        <View key={card.id} style={styles.cardItem}>
          <Image source={cardImages[card.id]} style={styles.cardPreview} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{card.name}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </View>
        </View>
      ))}
      <Text style={styles.more}>더보기</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={readings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default History;
