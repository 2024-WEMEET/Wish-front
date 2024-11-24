import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');


const Major = () => {
  const Content = ({ image, content1, content2, content3 }) => {
    return (
      <View style={styles.contentText}>
        <Image source={image}  style={styles.image} />
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
          <Content image={image} content1={content1} content2={content2} content3={content3} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Component
        question="Python 배우기 프로그램"
        image={require('../../assets/major/python.png')}
        content1="도전 난이도: 하"
        content2="기간: 11/25-11/30"
        content3="비용: 5,000원"
      />
      <Component
        question="Java 배우기 프로그램"
        image={require('../../assets/major/java.png')}
        content1="도전 난이도: 중"
        content2="기간: 12/01-12/07"
        content3="비용: 10,000원"
      />
      <Component
        question="웹 개발 워크샵"
        image={require('../../assets/major/python.png')}
        content1="도전 난이도: 상"
        content2="기간: 12/10-12/15"
        content3="비용: 20,000원"
      />
      <Component
        question="AI 기초 워크샵"
        image={require('../../assets/major/java.png')}
        content1="도전 난이도: 중"
        content2="기간: 12/20-12/25"
        content3="비용: 무료"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '5%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  mainTitle: {
    marginBottom: 20,
    alignItems: 'center',
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
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
    width: 70,
    height: 70,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  contentTextItem: {
    fontSize: 14,
    color: '#333',
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'gray',
    marginBottom: '5%',
  },
});

export default Major;
