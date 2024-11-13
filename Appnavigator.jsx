import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';

import MainPage from './src/pages/main/index';
import LoginPage from './src/pages/login/index';
import LoadingPage from './src/pages/loading/index';
import TutorialPage1 from './src/pages/tutorial/index1';
import TutorialPage2 from './src/pages/tutorial/index2';

const Stack = createStackNavigator();

// Linking 구성: Deep Link 및 URL 스키마 설정
const linking = {
  prefixes: ['http://localhost:8081'], // Deep Link 및 리디렉션 URI 설정 http://localhost:8081
  config: {
    screens: {
      Login: 'login',
      Main: 'main',
      Loading: 'loading',
      Tutorial1: 'tutorial1',
      Tutorial2: 'tutorial2',
    },
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Loading" component={LoadingPage} />
        <Stack.Screen name="Tutorial1" component={TutorialPage1} />
        <Stack.Screen name="Tutorial2" component={TutorialPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;