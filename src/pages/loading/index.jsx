// import React, { useEffect } from 'react';
// import { View, Text, ActivityIndicator, Alert, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import * as Linking from 'expo-linking';

// const LoadingPage = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const handleDeepLink = (event) => {
//       const { url } = event;
//       const queryParams = Linking.parse(url).queryParams;

//       if (!queryParams || !('tutorialCompleted' in queryParams)) {
//         Alert.alert("Error", "Invalid or missing parameters. Redirecting to Login.");
//         navigation.replace('Login');
//         return;
//       }

//       const tutorialCompleted = queryParams.tutorialCompleted === 'true'; //tutorialcompleted 여부 추출

//       const userName = decodeURIComponent(queryParams.name); //한글은 인코딩해서 보내지므로 디코드 필요

//       // tutorialCompleted 값에 따라 페이지 이동 및 name 전달
//       if (tutorialCompleted) {
//         navigation.replace('Main'); // Main 페이지로 이동
//       } else {
//         navigation.replace('Tutorial1', { name: userName }); // Tutorial1 페이지로 이동하면서 name 전달
//       }
//     };

//     // 초기 URL을 확인하여 처리
//     Linking.getInitialURL().then((url) => {
//       if (url) {
//         handleDeepLink({ url });
//       }
//     });

//     // 앱이 열려 있을 때 URL 이벤트를 처리
//     const subscription = Linking.addEventListener('url', handleDeepLink);

//     // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
//     return () => {
//       subscription.remove();
//     };
//   }, [navigation]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ActivityIndicator size="large" color="#0000ff" />
//       <Text>사용자 인증 중...</Text>
//     </View>
//   );
// };

// export default LoadingPage;

import React, { useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

const LoadingPage = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  const handleWebViewNavigationStateChange = (navState) => {
    const { url } = navState;

    if (url.includes('/main')) {
      // 메인 화면으로 이동
      navigation.replace('Main');
    } else if (url.includes('/login')) {
      // 로그인 화면으로 이동
      navigation.replace('Login');
    } else if (url.includes('/tutorialCompleted=true')) {
      // 튜토리얼 완료된 경우 -> 메인 화면
      navigation.replace('Main');
    } else if (url.includes('/tutorialCompleted=false')) {
      // 튜토리얼 미완료 -> 튜토리얼로 이동
      const queryParams = new URL(url).searchParams;
      const userName = queryParams.get('name');
      navigation.replace('Tutorial1', { name: userName });
    }
  };

  const handleMessage = (event) => {
    const message = event.nativeEvent.data;
    console.log('받은 쿠키:', message); // 쿠키 값 확인

    if (message.includes('Authorization')) {
      console.log('Authorization 쿠키 확인:', message);
      console.log('Authorization 쿠키 확인됨');

      // Authorization 쿠키가 존재하면 바로 메인 화면으로 이동
      navigation.replace('Main');
    } else {
      console.log('Authorization 쿠키 없음');
      // Authorization 쿠키가 없으면 로그인 화면으로 이동
      navigation.replace('Login');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>로딩 중...</Text>
        </View>
      )}
      <WebView
        source={{ uri: 'http://localhost:8081/loading' }} // 서버 URL
        sharedCookiesEnabled={true} // 쿠키 공유 활성화
        thirdPartyCookiesEnabled={true}
        injectedJavaScript={`
          // 웹뷰 내부에서 쿠키를 가져와 React Native로 전달
          window.ReactNativeWebView.postMessage(document.cookie);
          true;
        `}
        onMessage={handleMessage} // 쿠키 데이터를 처리
        startInLoadingState={true} // 로딩 인디케이터 활성화
        onNavigationStateChange={handleWebViewNavigationStateChange} // URL 변경 감지
        renderLoading={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      />
    </View>
  );
};

export default LoadingPage;
