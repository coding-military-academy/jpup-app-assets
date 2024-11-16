// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup'; // 회원가입 페이지 임포트
import Main from '../pages/Main/Main';
import CardSelection from '../pages/CardSelection/CardSelection';
import Result from '../pages/Result/Result';
import History from '../pages/History/History';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator shifting={true}>
    <Tab.Screen
      name="Main"
      component={Main}
      options={{
        tabBarLabel: '홈',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="History"
      component={History}
      options={{
        tabBarLabel: '히스토리',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="history" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardSelection"
        component={CardSelection}
        options={{ 
          title: '카드 선택', 
          headerBackTitle: '뒤로가기', 
          headerTintColor:colors.primary,
          headerBackTitleStyle:{
            color: colors.primary
          }
        }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ 
          title: '결과', 
          headerBackTitle: '뒤로가기',
          headerTintColor:colors.primary,
          headerBackTitleStyle:{
            color: colors.primary
          }
         }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
