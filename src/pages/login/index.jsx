import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const LoginPage = () => {
  const styles = {
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
    statusBar: {
      width: width,
      height: height * 0.0568,
      backgroundColor: '#FFFFFF',
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
      width: width * 0.9, // 이미지 크기 비율 설정
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
    kakaoText: {
      color: '#000000',
      fontSize: width * 0.035,
      fontFamily: 'Inter',
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
      backgroundColor: '#D9D9D9',
    },
    rectangleSpacing: {
      marginLeft: width * 0.01,
    },
    rectangleRotation: {
      marginLeft: -width * 0.008,
      transform: [{ rotate: '37.05deg' }],
    },
    naverText: {
      color: '#000000',
      fontSize: width * 0.035,
      fontFamily: 'Inter',
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
        width: width * 0.06, // 아이콘 크기
        height: width * 0.06,
        marginRight: width * 0.02,
    },
    googleText: {
      color: '#000000',
      fontSize: width * 0.035,
      fontFamily: 'Inter',
      fontWeight: '400',
    },
    iconSize: width * 0.05,
    backImage: {
        width: '100%',
        height: '60%',
        position: 'absolute',
        top: height * 0.577,
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      {/* 상단 텍스트 */}
      <Text style={styles.title}>WISH</Text>
      <Text style={styles.description}>대학생 맞춤 진로 추천 서비스, WISH!</Text>

      {/* 그라데이션 영역 */}
        <LinearGradient
            colors={['#FFFFFF', '#E4ECFF']}
            style={styles.gradientContainer}/>
        

        {/* PNG 이미지 불러오기 */}
            <Image 
            source={require('../../assets/login/start.png')}
            style={styles.start}
        />

        {/* 간편 로그인 섹션 */}
            <View style={styles.loginSection}>
                <TouchableOpacity style={styles.kakaoBlock}>
                <FontAwesome name="comment" size={styles.iconSize} color="#3E3E3E" />
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

                <TouchableOpacity style={styles.googleBlock}>
                <Image source={require('../../assets/login/google.png')}style={styles.googleIcon}/>
                <Text style={styles.googleText}>구글 로그인</Text>
                </TouchableOpacity>
            </View>
        {/* PNG 이미지 불러오기 */}
        <Image 
        source={require('../../assets/login/loginBackground.png')}
        style={styles.backImage}
        resizeMode="cover"
        />
    </View>
  );
};

export default LoginPage;