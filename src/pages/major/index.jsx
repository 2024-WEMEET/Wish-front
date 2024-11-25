import React, { useState } from 'react';
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

const { width, height } = Dimensions.get('window');
const aspectRatio = height / width;

const MajorPage = ({ route }) => {
  const navigation = useNavigation();
  const initialTab = route.params?.tab || '활동';
  const [activeTab, setActiveTab] = useState(initialTab);

  const activities = [
    {
      title: 'Python 배우기 프로그램',
      image: require('../../assets/major/python.png'),
      content1: '도전 난이도: 하',
      content2: '기간: 11/25-11/30',
      content3: '비용: 5,000원',
    },
    {
      title: 'Java 배우기 프로그램',
      image: require('../../assets/major/java.png'),
      content1: '도전 난이도: 중',
      content2: '기간: 12/01-12/07',
      content3: '비용: 10,000원',
    },
    {
      title: '웹 개발 워크샵',
      image: require('../../assets/major/python.png'),
      content1: '도전 난이도: 상',
      content2: '기간: 12/10-12/15',
      content3: '비용: 20,000원',
    },
    {
      title: 'AI 기초 워크샵',
      image: require('../../assets/major/python.png'),
      content1: '도전 난이도: 중',
      content2: '기간: 12/20-12/25',
      content3: '비용: 무료',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/employment/back.png')}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>전공 탐색</Text>
      </View>

      {/* 상단 탭 */}
      <View style={styles.tabBar}>
        {['활동', '대회', '자격증'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 콘텐츠 */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === '활동' &&
          activities.map((activity, index) => (
            <View key={index} style={styles.component}>
              <View style={styles.contentRow}>
                <Image source={activity.image} style={styles.activityImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.componentTitle}>{activity.title}</Text>
                  <Text style={styles.contentText}>{activity.content1}</Text>
                  <Text style={styles.contentText}>{activity.content2}</Text>
                  <Text style={styles.contentText}>{activity.content3}</Text>
                </View>
              </View>
            </View>
          ))}
        {activeTab === '대회' && (
          <Text style={styles.placeholderText}>등록된 대회 정보가 없습니다.</Text>
        )}
        {activeTab === '자격증' && (
          <Text style={styles.placeholderText}>등록된 자격증 정보가 없습니다.</Text>
        )}
      </ScrollView>

      {/* Navigation */}
      <View style={styles.navigationWrapper}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Image
              source={require('../../assets/chat/home.png')}
              style={styles.homeIcon}
            />
            <Text style={styles.navText}>홈</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyInfo')}>
            <Image
              source={require('../../../assets/Group 19.png')}
              style={styles.navIcon}
            />
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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: '5%',
  },
  component: {
    backgroundColor: '#E5EBF4',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityImage: {
    width: width * 0.2,
    height: width * 0.2,
    marginRight: 15,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  componentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0047AB',
    marginBottom: 10,
  },
  contentText: {
    fontSize: 14,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  navigationWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#FFF',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  navIcon: {
    width: width * 0.15,
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
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
});

export default MajorPage;
