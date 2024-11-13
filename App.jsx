// App.js
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './Appnavigator';
import { TutorialProvider } from './src/hooks/useTutorial';

export default function App() {
  const [fontsLoaded] = useFonts({
    'IBM-Plex-Sans-Condensed': require('./assets/fonts/IBMPlexSansCondensed-Regular.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter_28pt-Regular.ttf'),
  });
  
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // 스플래시 화면을 유지하여 로딩 상태 표시
        await SplashScreen.preventAutoHideAsync();
        // 폰트 로드 확인
        if (fontsLoaded) {
          setIsReady(true);
          await SplashScreen.hideAsync(); // 로딩이 끝나면 스플래시 화면 숨김
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!isReady) {
    // isReady가 false일 때 아무것도 렌더링하지 않음 (스플래시 화면 유지)
    return null;
  }

  // 폰트 로드 후 TutorialProvider 및 AppNavigator 렌더링
  return (
    <TutorialProvider>
      <AppNavigator />
    </TutorialProvider>
  );
}