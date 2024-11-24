import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTutorial } from '../../hooks/useTutorial';

const { width, height } = Dimensions.get('window');

const TutorialPage3 = () => {
  const route = useRoute();
  const { name = '사용자' } = route.params || {};
  const navigation = useNavigation();
  const { updateData, ReadyForBackend } = useTutorial();

  const [inputs, setInputs] = useState({ cert: '', prog: '', lang: '' });
  const [lists, setLists] = useState({ cert: [], prog: [], lang: [] });

  const handleInputChange = (type, value) => {
    setInputs((prev) => ({ ...prev, [type]: value }));
  };

  const addItem = (type) => {
    const value = inputs[type].trim();
    if (value) {
      setLists((prev) => ({ ...prev, [type]: [...prev[type], value] }));
      updateData(type, [...lists[type], value]);
      setInputs((prev) => ({ ...prev, [type]: '' }));
    }
  };

  const handleNext = async () => {
    const dataFromBackend = ReadyForBackend();
    const dataToSend = { ...dataFromBackend, tutorialCompleted: true };

    try {
      const response = await fetch('http://localhost:8080/member/tutorial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
        credentials: 'include', 
      });

      if (!response.ok) throw new Error('Failed to send data');
      navigation.navigate('Main', { name });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const renderInputSection = (label, type) => (
    <View style={styles.inputSection}>
      <Text style={styles.sectionLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder={`${label}을 입력해주세요.`}
          placeholderTextColor="#969696"
          value={inputs[type]}
          onChangeText={(text) => handleInputChange(type, text)}
        />
        <TouchableOpacity onPress={() => addItem(type)} style={styles.addButtonContainer}>
          <Text style={styles.addButton}>추가</Text>
        </TouchableOpacity>
      </View>
      {/* Display the added items here */}
      {lists[type].map((item, index) => (
        <Text key={index} style={styles.selectedItem}>
          {item}
        </Text>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.tutonum}>3/3</Text>
        <Text style={styles.headertext}>{name} 님의</Text>
        <Text style={styles.headertext}>경험과 역량이</Text>
        <Text style={styles.headertext}>궁금해요!</Text>
        <Text style={styles.headersubtext}>WISH가 당신을 위한 정보를 찾고 있어요 :)</Text>

        {renderInputSection('자격증', 'cert')}
        {renderInputSection('프로그램', 'prog')}
        {renderInputSection('어학 성적', 'lang')}

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingTop: height * 0.13,
    paddingHorizontal: width * 0.12,
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
  },
  addButtonContainer: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 4,
  },
  addButton: {
    fontSize: width * 0.04,
    color: '#0066FF',
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