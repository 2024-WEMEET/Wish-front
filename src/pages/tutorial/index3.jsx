import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTutorial } from '../../hooks/useTutorial';

const { width, height } = Dimensions.get('window');

const TutorialPage3 = () => {
  const route = useRoute();
  const { name = '사용자' } = route.params || {}; 
  const navigation = useNavigation();
  const { updateData, tutorialData , ReadyForBackend } = useTutorial();

  const [certInput, setCertInput] = useState('');
  const [progInput, setProgInput] = useState('');
  const [langInput, setLangInput] = useState('');
  const [certList, setCertList] = useState([]);
  const [progList, setProgList] = useState([]);
  const [langList, setLangList] = useState([]);

  const addItem = (item, type) => {
    if (item.trim()) {
      if (type === 'cert') {
        setCertList((prev) => [...prev, item]);
        updateData('cert', [...certList, item]);
      } else if (type === 'prog') {
        setProgList((prev) => [...prev, item]);
        updateData('prog', [...progList, item]);
      } else if (type === 'lang') {
        setLangList((prev) => [...prev, item]);
        updateData('lang', [...langList, item]);
      }
    }
  };

  //---------------------------------------------------------------------------------------------------
  // const handleNext = async () => {
  //   // ReadyForBackend 함수로 변환된 데이터에 tutorialCompleted 추가
  //   const dataFromBackend = ReadyForBackend();
  //   const dataToSend = {
  //     ...dataFromBackend, // 변환된 데이터 포함
  //     tutorialCompleted: true, // tutorialCompleted 필드 추가
  // };

  //   try {
  //       const response = await fetch('https://localhost:8080/member/tutorial', {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(dataToSend),
  //       });

  //       if (!response.ok) {
  //           throw new Error('Failed to send data');
  //       }

  //       console.log('Data sent successfully:', dataToSend);
  //       navigation.navigate('Main', { name });  
  //   } catch (error) {
  //       console.error('Error sending data:', error);
  //   }
  // };

    const handleNext = () => {

      const dataFromBackend = ReadyForBackend();
      const dataToSend = {
          ...dataFromBackend, // 변환된 데이터 포함
          tutorialCompleted: true, // tutorialCompleted 필드 추가
      };

      // API 호출 대신 데이터 구조를 콘솔에 출력
      console.log('Data prepared for backend:', dataToSend);

      // 메인 화면으로 이동
      navigation.navigate('Main', { name });
  };

  const renderInputSection = (label, inputValue, setInputValue, dataList, type) => (
    <View style={styles.inputSection}>
      <Text style={styles.sectionLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder={`${label}을 입력해주세요.`}
          placeholderTextColor="#969696"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity 
          onPress={() => { addItem(inputValue, type); setInputValue(''); }}
          style={styles.addButtonContainer} 
        >
          <Text style={styles.addButton}>추가</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.selectedItem}>{item}</Text>}
        style={styles.list}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tutonum}>3/3</Text>
      <Text style={styles.headertext}>{name} 님의</Text>
      <Text style={styles.headertext}>경험과 역량이</Text>
      <Text style={styles.headertext}>궁금해요!</Text>
      <Text style={styles.headersubtext}>WISH가 당신을 위한 정보를 찾고 있어요 :)</Text>

      {renderInputSection('자격증', certInput, setCertInput, certList, 'cert')}
      {renderInputSection('프로그램', progInput, setProgInput, progList, 'prog')}
      {renderInputSection('어학 성적', langInput, setLangInput, langList, 'lang')}

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.13,
    paddingHorizontal: width * 0.12,
    backgroundColor: '#FFFFFF',
  },
  tutonum: {
    fontSize: width * 0.041,
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
    marginBottom: width * 0.10,
  },
  inputSection: {
    marginBottom: height * 0.02,
  },
  sectionLabel: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputWrapper: {
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
    paddingRight: width * 0.15,
  },
  addButtonContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 10,
    paddingBottom: 1,
    borderRadius: 4,
  },
  addButton: {
    fontSize: width * 0.04,
    color: '#0066FF',
  },
  list: {
    maxHeight: height * 0.15, 
  },
  selectedItem: {
    fontSize: width * 0.04,
    color: '#555555',
    marginVertical: 2,
  },
  nextButton: {
    marginTop: height * 0.05,
    alignSelf: 'flex-end', 
    width: width * 0.19,
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

export default TutorialPage3;