// src/pages/CardSelection/CardSelection.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { cardsData } from '../../data/cardData';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
// 전면 광고 유닛 ID (테스트 ID 사용, 실제 앱에서는 실제 ID로 교체 필요)
const adUnitId = TestIds.INTERSTITIAL;

//? 물음표 바로 다음에 오는 값으로는 안드로이드 키값을
//: 세미 콜론 옆에 오는 값은 iOS 키값으로 교체해주자. 

//const unitId = Platform.OS == 'android' 
//? 'ca-app-pub-7866773177976164/9300427130' 
//: 'ca-app-pub-7866773177976164/9342356405'
//하단 계정은 테스트 아이디
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

const CardSelection = ({ navigation }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setAdLoaded(true);
    });

    // 광고 로드 시작
    interstitial.load();

    return unsubscribe;
  }, []);

  const showInterstitial = () => {
    if (adLoaded) {
      interstitial.show();
    } else {
      navigateToResult();
    }
  };

  const navigateToResult = () => {
    navigation.replace('Result', { 
      cards: selectedCards, 
      from: 'CardSelection' 
    });
  };

  const handleSelectCard = (card) => {
    if (selectedCards.includes(card)) return;
    
    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 3) {
      showInterstitial();
    }
  };

  useEffect(() => {
    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      navigateToResult();
    });

    return unsubscribeClosed;
  }, [selectedCards]);

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
      <Text style={styles.instructions}>
        운명을 밝힐 3장의 카드를 선택해 보세요.
      </Text>
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
