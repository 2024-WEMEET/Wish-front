import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const LoadingPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleDeepLink = (event) => {
      const { url } = event;
      const queryParams = Linking.parse(url).queryParams;

      if (!queryParams || !('tutorialCompleted' in queryParams)) {
        Alert.alert("Error", "Invalid or missing parameters. Redirecting to Login.");
        navigation.replace('Login');
        return;
      }
      // 예를 들어, name 파라미터를 가져오는 코드


      // tutorialCompleted와 name 추출
      const tutorialCompleted = queryParams.tutorialCompleted === 'true';
     //  const userName = queryParams.name; // name 값 추출
      const userName = decodeURIComponent(queryParams.name);

      // tutorialCompleted 값에 따라 페이지 이동 및 name 전달
      if (tutorialCompleted) {
        navigation.replace('Main'); // Main 페이지로 이동
      } else {
        navigation.replace('Tutorial1', { name: userName }); // Tutorial1 페이지로 이동하면서 name 전달
      }
    };

    // 초기 URL을 확인하여 처리
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    // 앱이 열려 있을 때 URL 이벤트를 처리
    const subscription = Linking.addEventListener('url', handleDeepLink);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      subscription.remove();
    };
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>사용자 인증 중...</Text>
    </View>
  );
};

export default LoadingPage;
