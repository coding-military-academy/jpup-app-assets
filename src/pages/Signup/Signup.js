// src/pages/Signup/Signup.js
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { signUp } from '../../services/auth';
import styles from './styles';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const result = await signUp(email, password);
      if(result.success == 200){
        navigation.replace('MainTabs');
      }else{
        //가입에 문제가 있다면 에러메시지는 여기서 노출!
        Alert.alert(result.message)
      } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <TextInput
        label="이메일"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="비밀번호"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleSignup} style={styles.button}>
        회원가입
      </Button>
      <Button onPress={() => navigation.goBack()} style={styles.link}>
        로그인 화면으로 돌아가기
      </Button>
    </View>
  );
};

export default Signup;