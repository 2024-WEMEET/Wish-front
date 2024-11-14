import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, ScrollView, TouchableOpacity, Alert, Image, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTutorial } from '../../hooks/useTutorial';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults } from '../../../src/redux/slices/universitySlice';

const { width, height } = Dimensions.get('window');
const vectorIcon = require('../../../assets/Vector.png');

const TutorialPage2 = () => {
  const route = useRoute();
  const { name = '사용자' } = route.params || {};
  const navigation = useNavigation();
  const { updateData } = useTutorial();

  const [univMajorInput, setUnivMajorInput] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const dispatch = useDispatch();
  const allUniversities = useSelector(state => state.universityData.universities); // 전체 데이터
  const [visibleData, setVisibleData] = useState([]); // 보여줄 데이터
  const [dataIndex, setDataIndex] = useState(0); // 데이터 시작 인덱스
  const dataIncrement = 20; // 한 번에 로드할 데이터 개수

  // 초기 데이터 설정 및 검색어 필터링
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (univMajorInput) {
        const filteredResults = allUniversities.filter(item =>
          item.name && item.name.toLowerCase().includes(univMajorInput.toLowerCase())
        );
        setVisibleData(filteredResults.slice(0, dataIncrement));
        setShowResults(true);
      } else {
        setVisibleData(allUniversities.slice(0, dataIncrement));
        setShowResults(false);
      }
    }, 200); // 200ms 지연
  
    // 타이머 초기화
    return () => clearTimeout(delayDebounceFn);
  }, [univMajorInput, allUniversities]);

  const handleLoadMore = () => {
    if (univMajorInput) {
      const filteredResults = allUniversities.filter(item =>
        item.name.toLowerCase().includes(univMajorInput.toLowerCase())
      );
      const nextData = filteredResults.slice(dataIndex, dataIndex + dataIncrement);
      setVisibleData([...visibleData, ...nextData]);
    } else {
      const nextData = allUniversities.slice(dataIndex, dataIndex + dataIncrement);
      setVisibleData([...visibleData, ...nextData]);
    }
    setDataIndex(dataIndex + dataIncrement);
  };

  const handleNext = () => {
    if (!univMajorInput.trim() || !year.trim() || !semester.trim()) {
      Alert.alert('알림', '모든 입력 필드를 채워주세요.');
      return;
    }
  
    // `univMajorInput`에서 공백을 기준으로 첫 번째 단어를 대학, 나머지를 전공으로 분리
    const [univ, ...majorArray] = univMajorInput.trim().split(' ');
    const major = majorArray.join(' '); // 전공을 배열 형태에서 문자열로 변환
  
    // 업데이트할 데이터 객체 생성
    const univData = { univ, major, year, semester };
    updateData('univ_info', univData);
  
    navigation.navigate('Tutorial3', { name });
  };

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
          value={univMajorInput}
          placeholderTextColor="#969696"
          onChangeText={setUnivMajorInput}
        />
        <Image source={vectorIcon} style={styles.vectorIcon} />
      </View>

      {/* 검색 결과를 FlatList로 렌더링 */}
      {showResults && (
        <FlatList
          data={visibleData}
          keyExtractor={(item, index) => index.toString()}
          style={styles.resultList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              setUnivMajorInput(item.name);
              setShowResults(false);
            }}>
              <Text style={styles.resultItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      )}

      <View style={styles.yearTermContainer}>
        <View style={styles.yearContainer}>
          <TextInput
            style={styles.yearTermInput}
            placeholder="1"
            placeholderTextColor="#969696"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />
          <Text style={styles.yearTermLabel}>학년</Text>
        </View>
        <View style={styles.termContainer}>
          <TextInput
            style={styles.yearTermInput}
            placeholder="1"
            placeholderTextColor="#969696"
            value={semester}
            onChangeText={setSemester}
            keyboardType="numeric"
          />
          <Text style={styles.yearTermLabel}>학기</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.045,
    color: '#000000',
  },
  vectorIcon: {
    width: width * 0.046,
    height: width * 0.046,
    marginLeft: width * 0.025,
  },
  resultList: {
    top: 0,
    left: 0,
    width: width * 0.76,
    maxHeight: height * 0.2,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 6,
    backgroundColor: '#FFF',
    zIndex: 1,
  },
  resultItem: {
    fontSize: width * 0.045,
    color: '#555',
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    marginLeft: 5,
  },
  yearTermLabel: {
    marginLeft: 12,
    fontSize: width * 0.04,
    color: '#000000',
  },
  nextButton: {
    marginTop: height * 0.15,
    alignSelf: 'flex-end', 
    width : width * 0.19,
    backgroundColor: '#0066FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TutorialPage2;