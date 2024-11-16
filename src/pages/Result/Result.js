// src/pages/Result/Result.js
import React, { useEffect } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { saveReading } from '../../services/database';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.6;

const Result = ({ route }) => {
  const { cards, from } = route.params;

  useEffect(() => {
    if (from === 'CardSelection') {
      saveReading(cards);
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>타로 결과</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {cards.map((card) => (
          <View style={styles.cardWrapper} key={card.id}>
            <Image source={card.frontImage} style={styles.cardImage} />
            <Text style={styles.cardName}>{card.name}</Text>
            <Text style={styles.cardDescription} numberOfLines={2}>
              {card.description}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.overallResult}>
        <Text style={styles.overallTitle}>통합 점괘</Text>
        <Text style={styles.overallDescription}>
          {/* 통합 점괘 결과를 여기에 표시합니다 */}
          통합 점괘 내용이 여기에 들어갑니다. 내용이 길어져도 스크롤하여 볼 수 있습니다.
          추가적인 정보나 설명을 여기에 계속해서 작성할 수 있습니다.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Result;
