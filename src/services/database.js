// src/services/database.js
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { db, auth } from './firebase';

export const saveReading = async (cards, result) => {
  const user = auth.currentUser;
  if (user) {
    console.log(">>> data")
    console.log(cards)
    await addDoc(collection(db, 'history'), {
      userId: user.uid,
      cards: cards.map((card) => ({
        id: card.id,
        name: card.name,
        description: card.description,
        frontImage: card.frontImage
      })),
      date: new Date().toISOString(),
      result, // 그당시 타로 결괏값도 저장
    });
  }
};

export const getReadings = async () => {
  const user = auth.currentUser;
  if (user) {

    const querySnapshot = await getDocs(collection(db, 'history'));
    
    // 가져온 데이터를 배열로 변환
    const historyData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() // 문서의 데이터
    }));

    console.log(historyData); // 데이터를 확인하거나 상태로 저장
    return historyData;
  }
  return [];
};