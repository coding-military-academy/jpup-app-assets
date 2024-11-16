// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';


// 여러분들의 키로 바꿔야 합니다!
const firebaseConfig = {
    apiKey: "AIzaSyAdw-vnr3zDpaQcV9eg1JYp_yvFXT9oMFo",
    authDomain: "tarot-app-dc0b6.firebaseapp.com",
    projectId: "tarot-app-dc0b6",
    storageBucket: "tarot-app-dc0b6.firebasestorage.app",
    messagingSenderId: "569455693949",
    appId: "1:569455693949:web:c2d0fb081cff8d60956114",
    measurementId: "G-0XTH1HR2BB"
};

const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app)