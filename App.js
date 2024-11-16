// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  // LogBox.ignoreLogs(['2024']); 
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}