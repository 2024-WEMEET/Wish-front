import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image from "../../assets/employment/back.png";
import content1 from "../../assets/employment/content1.png";
import content2 from "../../assets/employment/content2.png";
import content3 from "../../assets/employment/content3.png";

const { width, height } = Dimensions.get('window');
const aspectRatio = height / width; // 화면 비율 계산

const Employment = () => {
  const navigation = useNavigation();

  const Content = ({ image, content1, content2, content3 }) => {
    return (
      <View style={styles.contentText}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.contentTextItem}>{content1}</Text>
          <Text style={styles.contentTextItem}>{content2}</Text>
          <Text style={styles.contentTextItem}>{content3}</Text>
        </View>
      </View>
    );
  };

  const Component = ({ question, image, content1, content2, content3 }) => {
    return (
      <View>
        <View style={styles.question}>
          <Text style={styles.questionText}>{question}</Text>
          <Text style={styles.addText}>더보기</Text>
        </View>
        <View style={styles.component}>
          <Content
            image={image}
            content1={content1}
            content2={content2}
            content3={content3}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={image} style={styles.headerImage} />
        </TouchableOpacity>
        <Text style={styles.headerText}>취업 정보</Text>
      </View>
      <View style={styles.line} />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainTitle}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#002B69" }}>
            Q. 진행 중인 채용 공고는 무엇이 있나요?
          </Text>
        </View>

        {/* Components */}
        <Component
          question={"삼성증권 신입사원 채용공고"}
          image={content1}
          content1={"모집직군: WM, IB, Global Markets, IT"}
          content2={"접수기간: 03.11. ~ 03.18."}
          content3={"지원자격 : 2024년 8월 졸업"}
        />
        <Component
          question={"카카오모빌리티 주니어 개발자 영입"}
          image={content2}
          content1={"모집직군: 개발자(iOS, MLOps)"}
          content2={"접수기간: 09.02. ~ 09.20."}
          content3={"지원자격 : 신입 ~ 2년 미만"}
        />
        <Component
          question={"팀네이버 신입 공채"}
          image={content3}
          content1={"모집직군: Tech_SW개발"}
          content2={"접수기간: 03.05. ~ 03.18."}
          content3={"지원자격 : 신입"}
        />
      </ScrollView>

      {/* Navigation */}
      <View style={styles.navigationWrapper}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image source={require('../../assets/chat/home.png')} style={styles.homeIcon} />
          <Text style={styles.navText}>홈</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MyInfo')}>
          <Image source={require('../../../assets/Group 19.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: aspectRatio * 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: '5%',
  },
  headerImage: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginRight: '7%',
  },
  mainTitle: {
    marginBottom: 20,
    alignItems: 'center',
  },
  scrollViewContent:{
    padding: '5%',
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 0,
  },
  questionText: {
    color: '#0047AB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addText: {
    fontSize: 12,
    color: '#0047AB',
  },
  component: {
    backgroundColor: '#E5EBF4',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  contentText: {
    flexDirection: 'row',
  },
  image: {
    width: width * 0.2 * aspectRatio * 0.6,
    height: width * 0.2 * aspectRatio * 0.6,
    marginRight: 10,
    resizeMode: 'contain',
  },
  textContainer: {},
  contentTextItem: {
    fontSize: 14,
    color: '#333',
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'gray',
    marginBottom: "5%",
    marginHorizontal: "5%",
  },
  navigationWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center', // 상위 컨테이너에서 수평으로 중앙 정렬
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#FFF',
    paddingVertical: height * 0.02, // 세로 여백 조정
    paddingHorizontal: width* 0.05,
  },
  navIcon: {
    width: width * 0.15, // 아이콘 크기 조정
    height: width * 0.15,
    resizeMode: 'contain',
  },
  navText: {
        fontSize: width * 0.035,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
      },
  homeIcon: {
    width: width * 0.1, // 아이콘 크기 조정
    height: width * 0.1,
    resizeMode: 'contain',
  },
});

export default Employment;
