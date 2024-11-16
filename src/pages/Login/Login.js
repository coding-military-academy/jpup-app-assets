// src/pages/Login/Login.js
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { signIn } from '../../services/auth';
import styles from './styles';
import { auth } from '../../services/firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await signIn(email, password);
    if(result.success == 200){
      navigation.replace('MainTabs');
    }else{
      //로그인에 문제가 있다면 에러메시지는 여기서 노출!
      Alert.alert(result.message)
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
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
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        로그인
      </Button>
      <Button onPress={() => navigation.navigate('Signup')} style={styles.link}>
        회원가입
      </Button>
    </View>
  );
};

export default Login;
