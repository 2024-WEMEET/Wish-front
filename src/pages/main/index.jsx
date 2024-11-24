// import React, { useRef, useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// import { useUser } from '../../hooks/useUser';

// const { width, height } = Dimensions.get('window');
// const BUTTON_WIDTH = width * 0.3; // 버튼 한 개의 넓이

// const MainPage = () => {
//   const navigation = useNavigation();
//   const { userData } = useUser();
//   const userName = userData?.name || '사용자'; // 기본값 '사용자' 설정

//   useEffect(() => {
//     console.log('Fetched User Info:', userData);
//   }, [userData]);

//   const components = [
//     { id: 1, label: '취업 정보', icon: require('../../assets/main/jobinfo.png'), route: 'JobInfoPage' },
//     { id: 2, label: '상담\nwith WISH', icon: require('../../assets/main/wishbot.png'), route: 'Chat' },
//     { id: 3, label: null, icon: require('../../../assets/Group 19.png'), route: 'MyInfo' },
//   ];

//   const AnimatedButton = ({ label, icon, route }) => {
//     const scaleAnim = useRef(new Animated.Value(1)).current;

//     const handlePressIn = () => {
//       Animated.spring(scaleAnim, { toValue: 1.3, useNativeDriver: false }).start();
//     };

//     const handlePressOut = () => {
//       Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: false }).start();
//     };

//     return (
//       <Animated.View style={[styles.circleButton, { transform: [{ scale: scaleAnim }] }]}>
//         <TouchableOpacity
//           onPressIn={handlePressIn}
//           onPressOut={handlePressOut}
//           onPress={() => navigation.navigate(route)}
//         >
//           {icon && <Image source={icon} style={styles.icon} />}
//           {label && <Text style={styles.circleText}>{label}</Text>}
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* 상단 바 */}
//       <LinearGradient
//         colors={['#1052B0', '#3D7DD6']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         style={styles.header}
//       >
//         <Text style={styles.headerText1}>{userName}님의 WISH를 위해</Text>
//         <Text style={styles.headerText2}>다양한 해답을 준비했어요!</Text>
//       </LinearGradient>

//       {/* 주요 카드 컴포넌트 */}
//       <View style={styles.cardContainer}>
//         <TouchableOpacity style={styles.card}>
//           <Image source={require('../../assets/main/certification.png')} style={styles.cardIcon} />
//           <View style={styles.Texts}>
//             <Text style={styles.cardText}>자격증 수집하기</Text>
//             <Text style={styles.SubText}>도전할 자격증을 추천해줄게요!</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.card}>
//           <Image source={require('../../assets/main/job.png')} style={styles.cardIcon} />
//           <View style={styles.Texts}>
//             <Text style={styles.cardText}>직업 알아보기</Text>
//             <Text style={styles.SubText}>컴퓨터과학과에서 진출할 수 있는</Text>
//             <Text style={styles.SubText}>유망한 직업에 대해 알려줄게요!</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.card}>
//           <Image source={require('../../assets/main/program.png')} style={styles.cardIcon} />
//           <View style={styles.Texts}>
//             <Text style={styles.cardText}>프로그램 도장깨기</Text>
//             <Text style={styles.SubText}>면접관이 알아볼 기-똥-찬</Text>
//             <Text style={styles.SubText}>공모전, 대회 등을 소개해줄게요!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* 하단 버튼 섹션 */}
//       <View style={styles.footer}>
//         {components.map((component) => (
//           <AnimatedButton
//             key={component.id}
//             label={component.label}
//             icon={component.icon}
//             route={component.route}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E5EBF4',
//   },
//   header: {
//     width: '100%',
//     height: height * 0.17,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   headerText1: {
//     fontSize: width * 0.05,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   headerText2: {
//     fontSize: width * 0.05,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: height * 0.035,
//   },
//   cardContainer: {
//     marginVertical: height * 0.03,
//     paddingHorizontal: width * 0.05,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     marginVertical: height * 0.01,
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   cardIcon: {
//     width: width * 0.2,
//     height: width * 0.2,
//     marginRight: 20,
//     resizeMode: 'contain',
//   },
//   Texts: {
//     flexDirection: 'column',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   cardText: {
//     fontSize: width * 0.05,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: height * 0.008,
//   },
//   SubText: {
//     fontSize: width * 0.035,
//     color: '#666',
//     marginTop: height * 0.002,
//   },
//   footer: {
//     height: height * 0.25,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   circleButton: {
//     width: BUTTON_WIDTH,
//     height: BUTTON_WIDTH,
//     backgroundColor: '#FFFFFF',
//     borderRadius: BUTTON_WIDTH / 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   circleText: {
//     fontSize: width * 0.03,
//     fontWeight: '600',
//     color: '#333',
//     textAlign: 'center',
//     marginTop: height * 0.01,
//   },
//   icon: {
//     width: width * 0.12,
//     height: width * 0.12,
//     resizeMode: 'contain',
//     alignSelf: 'center',   
//   },
// });

// export default MainPage;


import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../hooks/useUser';

const { width, height } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.3; // 버튼 한 개의 넓이

const MainPage = () => {
  const navigation = useNavigation();
  const { userData } = useUser();
  const userName = userData?.name || '사용자'; // 기본값 '사용자' 설정

  useEffect(() => {
    console.log('Fetched User Info:', userData);
  }, [userData]);

  const components = [
    { id: 1, label: '취업 정보', icon: require('../../assets/main/jobinfo.png'), route: 'Employment', isLarge: false },
    { id: 2, label: '상담\nwith WISH', icon: require('../../assets/main/wishbot.png'), route: 'Chat', isLarge: false },
    { id: 3, label: null, icon: require('../../../assets/Group 19.png'), route: 'MyInfo', isLarge: true }, // 내정보만 크기 조정
  ];

  const AnimatedButton = ({ label, icon, route, isLarge }) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scaleAnim, { toValue: 1.3, useNativeDriver: false }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: false }).start();
    };

    return (
      <Animated.View style={[styles.circleButton, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate(route)}
        >
          {icon && (
            <Image
              source={icon}
              style={[
                styles.icon,
                isLarge && { width: width * 0.17, height: width * 0.17 }, // 크기 조건부 변경
              ]}
            />
          )}
          {label && <Text style={styles.circleText}>{label}</Text>}
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 상단 바 */}
      <LinearGradient
        colors={['#1052B0', '#3D7DD6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerText1}>{userName}님의 WISH를 위해</Text>
        <Text style={styles.headerText2}>다양한 해답을 준비했어요!</Text>
      </LinearGradient>

      {/* 주요 카드 컴포넌트 */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../../assets/main/certification.png')} style={styles.cardIcon} />
          <View style={styles.Texts}>
            <Text style={styles.cardText}>자격증 수집하기</Text>
            <Text style={styles.SubText}>도전할 자격증을 추천해줄게요!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../../assets/main/job.png')} style={styles.cardIcon} />
          <View style={styles.Texts}>
            <Text style={styles.cardText}>직업 알아보기</Text>
            <Text style={styles.SubText}>컴퓨터과학과에서 진출할 수 있는</Text>
            <Text style={styles.SubText}>유망한 직업에 대해 알려줄게요!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../../assets/main/program.png')} style={styles.cardIcon} />
          <View style={styles.Texts}>
            <Text style={styles.cardText}>프로그램 도장깨기</Text>
            <Text style={styles.SubText}>면접관이 알아볼 기-똥-찬</Text>
            <Text style={styles.SubText}>공모전, 대회 등을 소개해줄게요!</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 하단 버튼 섹션 */}
      <View style={styles.footer}>
        {components.map((component) => (
          <AnimatedButton
            key={component.id}
            label={component.label}
            icon={component.icon}
            route={component.route}
            isLarge={component.isLarge} // 전달
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EBF4',
  },
  header: {
    width: '100%',
    height: height * 0.17,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText1: {
    fontSize: width * 0.05,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText2: {
    fontSize: width * 0.05,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.035,
  },
  cardContainer: {
    marginVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: height * 0.01,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardIcon: {
    width: width * 0.2,
    height: width * 0.2,
    marginRight: 20,
    resizeMode: 'contain',
  },
  Texts: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#333',
    marginBottom: height * 0.008,
  },
  SubText: {
    fontSize: width * 0.035,
    color: '#666',
    marginTop: height * 0.002,
  },
  footer: {
    height: height * 0.25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circleButton: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: BUTTON_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  circleText: {
    fontSize: width * 0.03,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: height * 0.01,
  },
  icon: {
    width: width * 0.12,
    height: width * 0.12,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default MainPage;
