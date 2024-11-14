import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTutorial } from '../../hooks/useTutorial';

const { width, height } = Dimensions.get('window');

const TutorialPage1 = () => {
  const route = useRoute();
  const { name = '사용자' } = route.params || {}; // 기본값 설정
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigation = useNavigation();
  const { updateData } = useTutorial();

  const handleSelectOption = (option) => {
    const newOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newOptions);
    updateData('worries', newOptions);
  };

  const handleNext = () => {
    if (selectedOptions.length === 0) {
      Alert.alert('유효성 검사', '하나 이상의 소원을 선택해 주세요');
    } else {
      navigation.navigate('Tutorial2', {name});
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tutonum}>1/3</Text>
      <Text style={styles.headertext}>{name} 님은</Text>
      <Text style={styles.headertext}>어떤 진로 고민을</Text>
      <Text style={styles.headertext}>가지고 있나요?</Text>
      <Text style={styles.headersubtext}>당신의 소원을 WISH가 알아가고 있어요.</Text>

      <View style={styles.cardcontainer}>
        <TouchableOpacity
          style={[styles.card, selectedOptions.includes('전공이 낯설어요.') && styles.selectedCard]}
          onPress={() => handleSelectOption('전공이 낯설어요.')}
        >
          <Text style={styles.cardtext}>전공이 낯설어요.</Text>
          <Text style={styles.cardsubtext}>전공의 세부 분야, 취업 현황, 필요한 적성 등을 알고 싶어요.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, selectedOptions.includes('스펙이 부족해요.') && styles.selectedCard]}
          onPress={() => handleSelectOption('스펙이 부족해요.')}
        >
          <Text style={styles.cardtext}>스펙이 부족해요.</Text>
          <Text style={styles.cardsubtext}>어떤 활동을 할지, 어떤 대회를 나갈지,</Text>
          <Text style={styles.cardsubtext}>어떤 자격증을 취득할지 고민돼요.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, selectedOptions.includes('진로에 대한 확신이 없어요.') && styles.selectedCard]}
          onPress={() => handleSelectOption('진로에 대한 확신이 없어요.')}
        >
          <Text style={styles.cardtext}>진로에 대한 확신이 없어요.</Text>
          <Text style={styles.cardsubtext}>채용 공고, 연구실, 유망 직업 등에 대한</Text>
          <Text style={styles.cardsubtext}>정보를 추천 받고 싶어요.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: height * 0.05,
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
    marginBottom: 0,
  },
  headersubtext: {
    fontSize: width * 0.0358,
    color: '#AAAAAA',
    marginBottom: width * 0.10,
  },
  cardcontainer: {
    flex: 1,
  },
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: width * 0.06,
  },
  selectedCard: {
    borderColor: '#0066FF',
  },
  cardtext: {
    fontSize: width * 0.046,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  cardsubtext: {
    fontSize: width * 0.035,
    color: '#555555',
  },
  nextButton: {
    // position: 'absolute',
    // bottom: 40,
    // right: 24,
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

export default TutorialPage1;