// src/pages/Main/Main.js
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { signOut } from '../../services/auth';
import styles from './styles';

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
  );
};

export default Main;
