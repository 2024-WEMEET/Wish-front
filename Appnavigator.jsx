import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';

import MainPage from './src/pages/main/index';
import LoginPage from './src/pages/login/index';
import LoadingPage from './src/pages/loading/index';
import TutorialPage1 from './src/pages/tutorial/index1';
import TutorialPage2 from './src/pages/tutorial/index2';
import TutorialPage3 from './src/pages/tutorial/index3';
import ChatPage from './src/pages/chat/index';
import Employment from './src/pages/employment';
import MajorPage from './src/pages/major/index';
import MyInfoPage from './src/pages/myinfo/index';

const Stack = createStackNavigator();
// Linking 구성: Deep Link 및 URL 스키마 설정
const linking = {
  prefixes: ['http://localhost:8081'], // Deep Link 및 리디렉션 URI 설정
  config: {
    screens: {
      Login: 'login',
      Main: 'main',
      Loading: 'loading',
      Tutorial1: 'tutorial1',
      Tutorial2: 'tutorial2',
      Tutorial3: 'tutorial3',
      Chat: 'chat',
      Employment: 'employment',
      Major: 'major',
      Myinfo: 'myinfo',
    },
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      onStateChange={(state) => {
        if (state) {
          const routes = state.routes; // 현재 스택의 상태 가져오기
          const MAX_STACK_SIZE = 40;

          if (routes.length > MAX_STACK_SIZE) {
            const newRoutes = routes.slice(-MAX_STACK_SIZE); // 마지막 4개 화면만 유지
            const newState = {
              ...state,
              routes: newRoutes,
              index: newRoutes.length - 1, // 새로 남긴 마지막 화면의 인덱스
            };

            // 네비게이터 스택을 업데이트
            const navigation = state.navigation;
            navigation.reset(newState);
          }
        }
      }}
    >
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Loading" component={LoadingPage} />
        <Stack.Screen name="Tutorial1" component={TutorialPage1} />
        <Stack.Screen name="Tutorial2" component={TutorialPage2} />
        <Stack.Screen name="Tutorial3" component={TutorialPage3} />
        <Stack.Screen name="Chat" component={ChatPage} />
        <Stack.Screen name="Employment" component={Employment} />
        <Stack.Screen name="Major" component={MajorPage} />
        <Stack.Screen name="MyInfo" component={MyInfoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;