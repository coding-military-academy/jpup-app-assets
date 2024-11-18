// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

// Google Mobile Ads SDK 초기화
import { useAdsInit } from './src/hook/ads';

export default function App() {
  // LogBox.ignoreLogs(['2024']); 
  setTimeout(() => {
    useAdsInit()
  }, 1000)
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}