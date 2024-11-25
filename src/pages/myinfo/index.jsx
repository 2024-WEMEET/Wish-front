import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../hooks/useUser';

const { width, height } = Dimensions.get('window');

const MyInfoPage = () => {
  const navigation = useNavigation();
  const { userData } = useUser();

  useEffect(() => {
    console.log('User Data:', userData);
  }, [userData]);

  const handleLogout = () => {
    navigation.navigate('Login'); //로그아웃 쿠키 관련 코드 추후 구현 필요
  };

  return (
    <View style={styles.container}>
      {/* 사용자 정보 */}
      <View style={styles.userInfo}>
        <Image
          source={require('../../assets/myinfo/sookmyung.png')}
          style={styles.schoolLogo}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userData?.name || '사용자'}</Text>
          <Text style={styles.userSchool}>
            {userData?.univ || '학교 정보 없음'} {userData?.year || ''}학년
          </Text>
          <Text style={styles.userField}>
            주전공: {userData?.major || '-'}
          </Text>
          <Text style={styles.userField}>
            복수전공: {userData?.doubleMajor || '-'}
          </Text>
          <Text style={styles.userField}>
            부전공: {userData?.minor || '-'}
          </Text>
        </View>
      </View>
      <Text style={styles.userWish}>
            나의 WISH : {userData?.wish || '사용자의 WISH를 입력하세요.'}
      </Text>

      {/* 주요 버튼들 */}
      <View style={styles.mainButtonsWrapper}>
        <View style={styles.mainButtons}>
          <TouchableOpacity style={styles.mainButtonContainer}>
            <View style={styles.mainButton}>
              <Image source={require('../../assets/myinfo/editInfo.png')} style={styles.mainButtonIcon} />
              <Text style={styles.mainButtonText}>정보 수정</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButtonContainer}>
            <View style={styles.mainButton}>
              <Image source={require('../../assets/myinfo/recordSpec.png')} style={styles.mainButtonIcon} />
              <Text style={styles.mainButtonText}>내 스펙 기록장</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButtonContainer}>
            <View style={styles.mainButton}>
              <Image source={require('../../assets/myinfo/center.png')} style={styles.mainButtonIcon} />
              <Text style={styles.mainButtonText}>고객센터</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* 추가 정보 섹션 */}
      <ScrollView style={styles.extraInfo}>
        <TouchableOpacity style={styles.extraInfoRow}>
          <Image source={require('../../assets/myinfo/bookmark.png')} style={styles.extraInfoIcon} />
          <Text style={styles.extraInfoText}>북마크한 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.extraInfoRow}>
          <Image source={require('../../assets/myinfo/liked.png')} style={styles.extraInfoIcon} />
          <Text style={styles.extraInfoText}>내가 좋아한 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.extraInfoRow}>
          <Image source={require('../../assets/myinfo/recent.png')} style={styles.extraInfoIcon} />
          <Text style={styles.extraInfoText}>최근 본 정보</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 로그아웃 버튼 */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>로그아웃</Text>
      </TouchableOpacity>

      {/* 하단 네비게이션 */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Image source={require('../../assets/chat/home.png')} style={styles.navIcon} />
          <Text style={styles.navText}>홈</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: width * 0.08,
    paddingTop: width * 0.2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  schoolLogo: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: 'contain',
    marginRight: width * 0.05,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  userSchool: {
    fontSize: width * 0.045,
    marginVertical: height * 0.005,
  },
  userField: {
    fontSize: width * 0.04,
    color: '#666',
  },
  userWish: {
    fontSize: width * 0.04,
    color: '#333',
    marginBottom: width * 0.06,
  },
  mainButtonsWrapper: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    width: '100%',
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  mainButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainButtonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  mainButton: {
    alignItems: 'center',
  },
  mainButtonIcon: {
    width: width * 0.07,
    height: width * 0.07,
    marginBottom: height * 0.01,
    resizeMode: 'contain',
  },
  mainButtonText: {
    fontSize: width * 0.035,
    textAlign: 'center',
    color: '#333',
  },
  extraInfo: {
    flex: 1,
    marginBottom: height * 0.03,
  },
  extraInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  extraInfoIcon: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: width * 0.05,
    resizeMode: 'contain',
  },
  extraInfoText: {
    fontSize: width * 0.04,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#3D7DD6',
    borderRadius: 10,
    paddingVertical: height * 0.015,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: width * 0.04,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  navigation: {
    marginTop: height * 0.02,
    alignItems: 'center',
  },
  navIcon: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
  navText: {
    fontSize: width * 0.035,
    color: '#333',
    marginTop: height * 0.005,
    textAlign: 'center',
  },
});

export default MyInfoPage;

