import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const TutorialPage2 = () => {
  const route = useRoute();
  const { name = '사용자' } = route.params || {}; // 기본값 설정

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tutonum}>2/3</Text>
      <Text style={styles.headertext}>{name} 님의</Text>
      <Text style={styles.headertext}>현재 학교/전공은</Text>
      <Text style={styles.headertext}>무엇인가요?</Text>
      <Text style={styles.headersubtext}>당신의 소원을 WISH가 알아가고 있어요.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="학교 / 전공을 입력해주세요."
        />
      </View>

      <View style={styles.yearTermContainer}>
        <View style={styles.yearContainer}>
          <TextInput style={styles.yearTermInput} />
          <Text style={styles.yearTermLabel}>학년</Text>
        </View>
        <View style={styles.termContainer}>
          <TextInput style={styles.yearTermInput} />
          <Text style={styles.yearTermLabel}>학기</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: height * 0.13,
    paddingHorizontal: width * 0.12,
    backgroundColor: '#FFFFFF',
  },
  tutonum: {
    fontSize: width * 0.0410,
    color: '#888888',
    marginBottom: 8,
  },
  headertext: {
    fontSize: width * 0.0615,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  headersubtext: {
    fontSize: width * 0.0358,
    color: '#AAAAAA',
    marginBottom: width * 0.16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 25,
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.045,
    color: '#969696',
  },
  yearTermContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  yearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearTermInput: {
    width: width * 0.2,
    height: height * 0.05,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: width * 0.04,
    marginLeft: 5, // 레이블과 입력 필드 간격 조정
  },
  yearTermLabel: {
    marginLeft: 15,
    fontSize: width * 0.04,
    color: '#000000',
  },
});

export default TutorialPage2;