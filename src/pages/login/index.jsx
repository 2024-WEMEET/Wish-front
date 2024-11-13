import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Dimensions, Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import globalstyles from '../components/styles';

const { width, height } = Dimensions.get('window');

const LoginPage = ({ navigation }) => {
  const [showWebView, setShowWebView] = useState(false);

  const handleGoogleLogin = () => {
    if (Platform.OS === 'web') {
      // 웹 환경에서는 새 창으로 로그인 페이지 열기
      window.open('http://localhost:8080/oauth2/authorize/google', '_blank');
    } else {
      // 모바일 환경에서는 WebView로 열기
      setShowWebView(true);
    }
  };

  return (
    <View style={styles.container}>
      {!showWebView ? (
        <>
          <View style={{ ...globalstyles.statusBar, backgroundColor: "#FFFFFF" }} />
          <Text style={styles.title}>WISH</Text>
          <Text style={styles.description}>대학생 맞춤 진로 추천 서비스, WISH!</Text>

          <LinearGradient colors={['#FFFFFF', '#E4ECFF']} style={styles.gradientContainer} />

          <Image source={require('../../assets/login/start.png')} style={styles.start} />

          <View style={styles.loginSection}>
            <TouchableOpacity style={styles.kakaoBlock}>
              <FontAwesome name="comment" size={width * 0.05} color="#3E3E3E" style={styles.kakaoIcon} />
              <Text style={styles.kakaoText}>카카오 로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.naverBlock}>
              <View style={styles.naverIcon}>
                <View style={styles.rectangle} />
                <View style={[styles.rectangle, styles.rectangleSpacing]} />
                <View style={[styles.rectangle, styles.rectangleRotation]} />
              </View>
              <Text style={styles.naverText}>네이버 로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleBlock} onPress={handleGoogleLogin}>
              <Image source={require('../../assets/login/google.png')} style={styles.googleIcon} />
              <Text style={styles.googleText}>구글 로그인</Text>
            </TouchableOpacity>
          </View>

          <Image source={require('../../assets/login/loginBackground.png')} style={styles.backImage} resizeMode="cover" />
        </>
      ) : (
        Platform.OS !== 'web' && (
          <WebView
            source={{ uri: 'http://localhost:8080/oauth2/authorize/google' }} //xcode상으로 현재 불가능. http://localhost:8080/oauth2/authorize/google
            onNavigationStateChange={(navState) => {
              const { url } = navState;
              if (url.includes('http://localhost:8080/oauth2/authorize/google')) {
                setShowWebView(false);
                navigation.navigate('Loading');
              }
            }}
            startInLoadingState={true}
            renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
            style={{ flex: 1 }}
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  gradientContainer: {
    width: '100%',
    height: height * 0.2796,
    position: 'absolute',
    top: height * 0.3,
  },
  title: {
    top: height * 0.1650,
    fontSize: width * 0.1025,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'IBM Plex Sans Condensed',
    position: 'absolute',
  },
  description: {
    top: height * 0.2405,
    fontSize: width * 0.038,
    textAlign: 'center',
    color: '#969696',
    position: 'absolute',
  },
  start: {
    width: width * 0.9,
    height: height * 0.02,
    position: 'absolute',
    top: height * 0.2843,
  },
  loginSection: {
    position: 'absolute',
    top: height * 0.335,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: height * 0.2,
  },
  kakaoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAE100',
    borderRadius: 10,
    width: width * 0.675,
    height: height * 0.048,
    marginBottom: height * 0.005,
  },
  kakaoIcon: {
    marginRight: width * 0.03,
  },
  kakaoText: {
    color: '#000000',
    fontSize: width * 0.035,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
  },
  naverBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03CF5D',
    borderRadius: 10,
    width: width * 0.675,
    height: height * 0.048,
    marginBottom: height * 0.005,
  },
  naverIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width * 0.04,
  },
  rectangle: {
    width: width * 0.015,
    height: height * 0.02,
    backgroundColor: '#FFFFFF',
  },
  rectangleSpacing: {
    marginLeft: width * 0.01,
  },
  rectangleRotation: {
    marginLeft: -width * 0.027,
    transform: [{ rotate: '-37.05deg' }],
  },
  naverText: {
    color: '#000000',
    fontSize: width * 0.035,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
  },
  googleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: width * 0.675,
    height: height * 0.048,
  },
  googleIcon: {
    width: width * 0.06,
    height: width * 0.06,
    marginRight: width * 0.02,
  },
  googleText: {
    color: '#000000',
    fontSize: width * 0.035,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
  },
  backImage: {
    width: '100%',
    height: '60%',
    position: 'absolute',
    top: height * 0.577,
  },
});

export default LoginPage;
