import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import globalstyles from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* <View style={{ ...globalstyles.statusBar, backgroundColor: "#FFFFFF" }}></View> */}

      {/* 상단 바 */}
      <LinearGradient
      colors={['#1052B0', '#3D7DD6']} // 그라데이션 색상 배열
      start={{ x: 0, y: 0 }} // 시작점 (위쪽 왼쪽)
      end={{ x: 0, y: 1 }}   // 끝점 (아래쪽)
      style={styles.header} // 스타일 적용
      >
        <Text style={styles.headerText}>윤서님의 WISH를 위해 </Text>
        <Text style={styles.headerText}>다양한 해답을 준비했어요!</Text>
      </LinearGradient>

      {/* 추천 항목들 */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>도전할 자격증을 추천해줄게요.</Text>
          <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
          <View style={styles.Texts}> 
            <Text style={styles.cardText}>컴퓨터과학과에서 진출할 수 있는</Text>
            <Text style={styles.cardText}>유망한 직업에 대해 알려줄게요!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.Texts}> 
              <Text style={styles.cardText}>면접관이 알아볼 기-똥-찬</Text>
              <Text style={styles.cardText}>프로그램을 소개해줄게요!</Text>
          </View>
          <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
          <View style={styles.Texts}> 
            <Text style={styles.cardText}>진로가 맞지 않아 걱정이라면?</Text>
            <Text style={styles.SubText}>더 확실한 상담을 원한다면,</Text>
            <Text style={styles.SubText}>1:1 진로 상담 멘토링을 신청해 보세요!</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 하단 내비게이션 */}
      <View style={styles.navigation}>
        <FontAwesome name="comment" size={width * 0.08} color="black" />
        <FontAwesome name="user-circle" size={width * 0.08} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EBF4' ,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: height * 0.1705,
    top: 0,
    paddingTop: height * 0.045, 
    backgroundColor: '#5887FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    width: width * 0.8,
    fontSize: width * 0.05,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    paddingHorizontal: width * 0.1,
  },
  cardContainer: {
    top: 0,
    marginTop: height * 0.023,
    width: '90%',
    height: height * 0.7,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: height * 0.14,
    paddingVertical: width * 0.06,
    marginBottom: height * 0.02,
    borderRadius: 5,
    overflow: 'hidden', // 자식 요소가 부모 영역을 벗어날 경우 잘리도록 설정
  },
  Texts: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  cardText: {
    flex: 1,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: width * 0.05,
    color: '#333',
  },
  highlightText: {
    flex: 1,
    fontSize: width * 0.042,
    fontWeight: 'bold',
    color: '#333',
  },
  SubText: {
    flex: 1,
    fontSize: width * 0.035,
    color: '#666',
    marginTop: height * 0.005,
  },
  avatar: {
    width: width * 0.13,
    height: width * 0.25,
    marginLeft: width * 0.02,
    marginRight: width * 0.02,
    resizeMode: 'cover',
  },
  navigation: {
    position: 'absolute',
    bottom: height * 0.03,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    paddingTop: height * 0.02,
  },


});

export default MainPage;