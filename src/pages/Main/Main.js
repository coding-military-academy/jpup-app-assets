// src/pages/Main/Main.js
import React from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { signOut } from '../../services/auth';
import styles from './styles';

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const windowWidth = Dimensions.get('window').width;
// const unitId = Platform.OS == 'android' ? 'ca-app-pub-7866773177976164~1173874426' : 'ca-app-pub-7866773177976164/4037727980'
//하단 계정은 테스트 아이디
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
