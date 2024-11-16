// src/services/auth.js
import { Alert } from 'react-native';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// 회원가입 함수
export const signUp = async (email, password) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      return {
        success:200
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        success: 400,
        message: error.message
      }
    });
  } catch (error) {
    //네트워크 문제가 있다면 여길 지나감!
    return {
      success : 400,
      message: JSON.stringify(error)
    }
  }
};

// 로그인 함수
export const signIn = async (email, password) => {
  try {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return {
        success:200
      }
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        success: 400,
        message: error.message
      }
    });
  } catch (error) {
    return {
      success : 400,
      message: JSON.stringify(error)
    }
  }
};

// 로그아웃 함수
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};