// src/pages/Main/Main.js
import React from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { signOut } from '../../services/auth';
import styles from './styles';

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const windowWidth = Dimensions.get('window').width;
//우리가 구글 애드몹에서 가로 배너 광고 단위를 생성하고 만든 키값이다.
//ios용 android용 따로따로 두개를 만들면 키값이 두개가 생성된다.
//? 물음표 바로 다음에 오는 값으로는 안드로이드 키값을
//: 세미 콜론 옆에 오는 값은 iOS 키값으로 교체해주자. 

// const unitId = Platform.OS == 'android' 
//? 'ca-app-pub-7866773177976164~1173874426' 
//: 'ca-app-pub-7866773177976164/4037727980'
const unitId = TestIds.BANNER

const Main = ({ navigation }) => {
 
  const handleLogout = async () => {
    try {
      await signOut();
      navigation.replace('Login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
    <View style={{
      marginTop:50,
      width:windowWidth,
      alignItems:"center"
    }}>
      <BannerAd
        unitId={unitId}
        size={BannerAdSize.LARGE_BANNER}
        onAdFailedToLoad={(err) =>{
            console.log(err)
        }}
      />
    </View>
    
    <View style={styles.container}>
      
      <Text style={styles.title}>타로 앱</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('CardSelection')}
        style={styles.button}
      >
        타로 점보기 시작
      </Button>
      <Button onPress={handleLogout} style={styles.link}>
        로그아웃
      </Button>
    </View>
    </>
    
  );
};

export default Main;
