// src/pages/Result/Result.js
import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import styles from './styles';
import { saveReading } from '../../services/database';
import axios from 'axios';
import { OPEN_AI_KEY } from '../../utils/config';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.6;

const Result = ({ route }) => {
  const { cards, from, historyResult } = route.params;
  const [messages, setMessages] = useState([]);
  const [result, setresult] = useState('')
  useEffect(() => {

    //카드 선택 화면으로 부터 오면 타로 점을 보는 GPT 실행
    if (from === 'CardSelection') {
     //실행 함수
      handleSend(cards)
    }
  }, []);

  const handleSend = async (cards) => {

    // 어떤 카드들이였는지 카드 이름을 조합
    const tarotCardList = cards.map((d) => {
      return d.name
    })

    //GPT에게 타로점을 봐달라고 요청할 프롬프트를 제공
    const ask = `다음은 제가 뽑은 타로 메이저 카드 3장입니다. 오늘의 금전운, 연애운, 직장운, 건강운 순서로 점괘를 상세히 알려주세요. 그리고 마지막으론 3가지 카드의 총운을 알려줘. 각 내용앞에 이모지를 적절히 사용해주세요. 제가 뽑은 타로 카드는 다음과 같습니다. ${tarotCardList.join(",")}.`
    const userMessage = { role: 'user', content: ask };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);

    try {
        //axios를 통해 GPT에게 프롬프트를 전달
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          messages: newMessages,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPEN_AI_KEY}`,
          },
        }
      );

      //GPT로부터 결괏 값을 받는 과정
      const assistantMessage = response.data.choices[0].message;
      //결과값을 화면에 보여주기 위한 상태값 변경
      setresult(assistantMessage.content)
      setMessages([...newMessages, assistantMessage]);
      saveReading(cards, assistantMessage.content);
    } catch (error) {
      console.error(error);
      alert('API 요청 중 오류가 발생했습니다.');
    }
  };


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

          {from == 'History' ? historyResult : result ? result : ( <ActivityIndicator/>)}
         
        </Text>
      </View>
    </ScrollView>
  );
};

export default Result;
