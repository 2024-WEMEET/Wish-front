// import React from 'react';
// import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window');

// const MainPage = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* 상단 바 */}
//       <LinearGradient
//         colors={['#1052B0', '#3D7DD6']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         style={styles.header}
//       >
//         <Text style={styles.headerText}>윤서님의 WISH를 위해 </Text>
//         <Text style={styles.headerText}>다양한 해답을 준비했어요!</Text>
//       </LinearGradient>

//       {/* 추천 항목들 */}
//       <View style={styles.cardContainer}>
//         <TouchableOpacity style={styles.card}>
//           <Text style={styles.cardText}>도전할 자격증을 추천해줄게요.</Text>
//           <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.card}>
//           <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
//           <View style={styles.Texts}> 
//             <Text style={styles.cardText}>컴퓨터과학과에서 진출할 수 있는</Text>
//             <Text style={styles.cardText}>유망한 직업에 대해 알려줄게요!</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.card}>
//           <View style={styles.Texts}> 
//             <Text style={styles.cardText}>면접관이 알아볼 기-똥-찬</Text>
//             <Text style={styles.cardText}>프로그램을 소개해줄게요!</Text>
//           </View>
//           <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.card}>
//           <Image source={require('../../assets/main/woman.png')} style={styles.avatar} />
//           <View style={styles.Texts}> 
//             <Text style={styles.cardText}>진로가 맞지 않아 걱정이라면?</Text>
//             <Text style={styles.SubText}>더 확실한 상담을 원한다면,</Text>
//             <Text style={styles.SubText}>1:1 진로 상담 멘토링을 신청해 보세요!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* 하단 내비게이션 */}
//       <View style={styles.navigation}>
//         <TouchableOpacity
//           style={[styles.navButton, styles.leftButton]}
//           onPress={() => navigation.navigate('ChatPage')}
//         >
//           <Image source={require('../../../assets/Group 18.png')} style={styles.myinfo} />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navButton, styles.rightButton]}
//           onPress={() => navigation.navigate('ProfilePage')}
//         >
//           <Image source={require('../../../assets/Group 19.png')} style={styles.myinfo} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E5EBF4',
//     alignItems: 'center',
//   },
//   header: {
//     width: '100%',
//     height: height * 0.17,
//     paddingTop: height * 0.045, 
//     backgroundColor: '#5887FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   headerText: {
//     width: width * 0.8,
//     fontSize: width * 0.05,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   cardContainer: {
//     marginTop: height * 0.02,
//     width: '90%',
//     height: height * 0.7,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     height: height * 0.14,
//     paddingVertical: width * 0.06,
//     marginBottom: height * 0.02,
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   Texts: {
//     flexDirection: 'column',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center', 
//   },
//   cardText: {
//     fontWeight: '700',
//     textAlign: 'center',
//     fontSize: width * 0.05,
//     color: '#333',
//   },
//   SubText: {
//     fontSize: width * 0.035,
//     color: '#666',
//     marginTop: height * 0.005,
//   },
//   avatar: {
//     width: width * 0.13,
//     height: width * 0.25,
//     marginHorizontal: width * 0.02,
//     resizeMode: 'cover',
//   },
//   navigation: {
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   navButton: {
//     width: width * 0.25,
//     height: width * 0.25,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: width * 0.05
//   },
//   myinfo: {
//     width: width * 0.107,
//     height: width* 0.164
//   },
//   leftButton: {
//     borderTopRightRadius: width * 0.5,
//     paddingRight: width * 0.05

//   },
//   rightButton: {
//     borderTopLeftRadius: width * 0.5,
//     paddingLeft:width * 0.05,
//   },
//   buttonText: {
//     marginTop: 5,
//     fontSize: 14,
//     color: 'black',
//   },
// });

// export default MainPage;

// import React from 'react';
// import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window');

// const MainPage = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* 상단 바 */}
//       <LinearGradient
//         colors={['#1052B0', '#3D7DD6']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         style={styles.header}
//       >
//         <Text style={styles.headerText}>윤서님의 WISH를 위해</Text>
//         <Text style={styles.headerText}>다양한 해답을 준비했어요!</Text>
//       </LinearGradient>

//       {/* 주요 카드 컴포넌트 */}
//       <View style={styles.cardContainer}>
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CertificationPage')}>
//           <Image source={require('../../assets/main/certification.png')} style={styles.cardIcon} />
//           <View style={styles.Texts}> 
//             <Text style={styles.cardText}>자격증 수집하기</Text>
//             <Text style={styles.SubText}>도전할 자격증을 추천해줄게요!</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CareerPage')}>
//           <Image source={require('../../assets/main/job.png')} style={styles.cardIcon} />
//           <View style={styles.Texts}> 
//             <Text style={styles.cardText}>직업 알아보기</Text>
//             <Text style={styles.SubText}>컴퓨터과학과에서 진출할 수 있는</Text>
//             <Text style={styles.SubText}>유망한 직업에 대해 알려줄게요!</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProgramPage')}>
//           <Image source={require('../../assets/main/program.png')} style={styles.cardIcon} />
//           <View style={styles.Texts}> 
//             <Text style={styles.cardText}>프로그램 도장깨기</Text>
//             <Text style={styles.SubText}>면접관이 알아볼 기-똥-찬</Text>
//             <Text style={styles.SubText}>공모전, 대회 등을 소개해줄게요!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* 하단 원형 버튼 컴포넌트 */}
//       <View style={styles.bottomContainer}>
//         <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('ConsultPage')}>
//           <Text style={styles.circleText}>상담</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('JobInfoPage')}>
//           <Text style={styles.circleText}>취업 정보</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('SpecPage')}>
//           <Text style={styles.circleText}>스펙</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('ProfilePage')}>
//           <Image source={require('../../../assets/Group 19.png')} style={styles.myinfo} />
//         </TouchableOpacity>
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
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: width * 0.05,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     textAlign: 'center',
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
//   bottomContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: height * 0.05,
//   },
//   circleButton: {
//     width: width * 0.18,
//     height: width * 0.18,
//     backgroundColor: '#FFFFFF',
//     borderRadius: width * 0.09,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   circleText: {
//     fontSize: width * 0.04,
//     fontWeight: '500',
//     color: '#333',
//   },
//   myinfo: {
//     width: width * 0.107,
//     height: width* 0.164
//   },
// });

// export default MainPage;


// import React, { useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   PanResponder,
//   ScrollView,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';  // navigate를 사용하려면 이걸 추가

// const { width, height } = Dimensions.get('window');

// const MainPage = () => {
//   const navigation = useNavigation(); // navigate 함수 사용
//   const rotation = useRef(new Animated.Value(0)).current; // 회전 애니메이션 값
//   const [components, setComponents] = useState([
//     { id: 1, label: '상담\nwith WISH', icon: require('../../assets/main/wishbot.png'), route: 'Chat' },
//     { id: 2, label: '스펙', icon: null, route: 'SpecPage' },
//     { id: 3, label: null , icon: require('../../../assets/Group 19.png'), route: 'MyInfo' },
//     { id: 4, label: '취업 정보', icon: null, route: 'JobInfoPage' },
//   ]);

//   // PanResponder 설정
//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true, // 항상 움직임 감지
//       onPanResponderRelease: (evt, gestureState) => {
//         const direction = gestureState.dx > 0 ? 'clockwise' : 'counterclockwise'; // 스와이프 방향 감지
//         handleRotation(direction); // 회전 실행
//       },
//     })
//   ).current;

//   // 회전 애니메이션 및 배열 업데이트
//   const handleRotation = (direction) => {
//     const rotationValue = direction === 'clockwise' ? 1 : -1;

//     Animated.timing(rotation, {
//       toValue: rotationValue,
//       duration: 500,
//       useNativeDriver: true,
//     }).start(() => {
//       rotation.setValue(0); // 애니메이션 값 초기화
//       updateComponents(direction); // 배열 업데이트
//     });
//   };

//   // 배열 업데이트 (순서 변경)
//   const updateComponents = (rotationValue) => {
//     if (rotationValue === 1) {
//       // 시계방향(clockwise): 마지막 컴포넌트를 배열의 맨 앞에 추가
//       setComponents((prevComponents) => {
//         const newComponents = [...prevComponents];
//         const lastItem = newComponents.pop();  // 마지막 아이템 제거
//         newComponents.unshift(lastItem);  // 첫 번째 위치에 추가
//         return newComponents;
//       });
//     } else {
//       // 반시계방향(counterclockwise): 첫 번째 컴포넌트를 배열의 맨 뒤로 이동
//       setComponents((prevComponents) => {
//         const newComponents = [...prevComponents];
//         const firstItem = newComponents.shift();  // 첫 번째 아이템 제거
//         newComponents.push(firstItem);  // 마지막에 추가
//         return newComponents;
//       });
//     }
//   };

//   const rotateInterpolation = rotation.interpolate({
//     inputRange: [-1, 1],
//     outputRange: ['-90deg', '90deg'],
//   });

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer} horizontal={false}>
//       <View style={styles.container}>
//         {/* 상단 바 */}
//         <LinearGradient
//           colors={['#1052B0', '#3D7DD6']}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 0, y: 1 }}
//           style={styles.header}
//         >
//           <Text style={styles.headerText1}>윤서님의 WISH를 위해</Text>
//           <Text style={styles.headerText2}>다양한 해답을 준비했어요!</Text>
//         </LinearGradient>

//         {/* 주요 카드 컴포넌트 */}
//         <View style={styles.cardContainer}>
//           <TouchableOpacity style={styles.card}>
//             <Image source={require('../../assets/main/certification.png')} style={styles.cardIcon} />
//             <View style={styles.Texts}>
//               <Text style={styles.cardText}>자격증 수집하기</Text>
//               <Text style={styles.SubText}>도전할 자격증을 추천해줄게요!</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.card}>
//             <Image source={require('../../assets/main/job.png')} style={styles.cardIcon} />
//             <View style={styles.Texts}>
//               <Text style={styles.cardText}>직업 알아보기</Text>
//               <Text style={styles.SubText}>컴퓨터과학과에서 진출할 수 있는</Text>
//               <Text style={styles.SubText}>유망한 직업에 대해 알려줄게요!</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.card}>
//             <Image source={require('../../assets/main/program.png')} style={styles.cardIcon} />
//             <View style={styles.Texts}>
//               <Text style={styles.cardText}>프로그램 도장깨기</Text>
//               <Text style={styles.SubText}>면접관이 알아볼 기-똥-찬</Text>
//               <Text style={styles.SubText}>공모전, 대회 등을 소개해줄게요!</Text>
//             </View>
//           </TouchableOpacity>
//         </View>


//         {/* 하단 원형 버튼 컴포넌트 */}
//         <Animated.View
//           style={[styles.circleContainer, { transform: [{ rotate: rotateInterpolation }] }]}
//           {...panResponder.panHandlers}
//         >
//           {components.map((component, index) => {
//             const positionStyle = getPositionStyle(index);
//             return (
//               <TouchableOpacity
//                 key={component.id}
//                 style={[styles.circleButton, positionStyle]}
//                 onPress={() => navigation.navigate(component.route)} // navigate 사용
//               >
//                 {component.icon ? (
//                   component.label ? (<View style={styles.iconContainer}>
//                     <Text style={styles.circleText2}>{component.label.split("\n")[0]}</Text>
//                     <Text style={styles.circleSubText}>{component.label.split("\n")[1]}</Text>
//                     <Image source={component.icon} style={styles.icon} />
//                     </View>):
//                    <Image source={component.icon} style={styles.icon} />
//                 ) : (
//                   <Text style={styles.circleText1}>{component.label}</Text>
//                 )}
//               </TouchableOpacity>
//             );
//           })}
//         </Animated.View>
//       </View>
//     </ScrollView>
//   );
// };

// // 버튼 위치 스타일 계산 (각각의 버튼에 대해 스타일을 분리)
// const getPositionStyle = (index) => {
//   const positions = [
//     { top: width * 0.5, left: '0%' }, // 첫 번째 버튼: 위쪽에 중앙 배치
//     { top: width * 0.3, left: '40%' },  // 두 번째 버튼: 오른쪽에 중앙 배치
//     { bottom: -width * 0.15, left: '0%' }, // 세 번째 버튼: 아래쪽에 중앙 배치
//     { bottom: width * 0.5, left: '-40%' },   // 네 번째 버튼: 왼쪽에 중앙 배치
//   ];
//   return positions[index];
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E5EBF4',
//     justifyContent: 'space-between',
//   },
//   scrollContainer: {
//     flexGrow: 1,  // 스크롤이 있을 때 flex로 꽉 차게 할 수 있도록 설정
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
//   circleContainer: {
//     width: '100%',
//     height: height * 0.3,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: height * 0.1,
//     overflow: 'visible',
//   },
//   circleButton: {
//     width: width * 0.4,
//     height: width * 0.4,
//     backgroundColor: '#FFFFFF',
//     borderRadius: width * 0.2, // 원 형태로 만들기 위해
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   iconContainer:{
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circleText1: {
//     fontSize: width * 0.06,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: width * 0.1,
//   },
//   circleText2:{
//     fontSize: width * 0.06,
//     fontWeight: '700',
//     color: '#333',
//   },
//   circleSubText:{
//     fontSize:width * 0.035,
//     fontWeight: '700',
//     color: '#3C00FF'
//   },
//   icon: {
//     width: width * 0.2,
//     height: width * 0.2,
//     resizeMode: 'contain',
//   },
// });

// export default MainPage;

// import React, { useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   PanResponder,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window');

// const MainPage = () => {
//   const navigation = useNavigation();

//   const [components] = useState([
//     { id: 1, label: '상담\nwith WISH', icon: require('../../assets/main/wishbot.png'), route: 'Chat' },
//     { id: 2, label: '스펙', icon: null, route: 'SpecPage' },
//     { id: 3, label: null, icon: require('../../../assets/Group 19.png'), route: 'MyInfo' },
//     { id: 4, label: '취업 정보', icon: null, route: 'JobInfoPage' },
//   ]);

//   const positions = useRef(
//     Array(4)
//       .fill()
//       .map((_, index) => new Animated.Value((index - 1) * width * 0.4)) // 초기 위치 설정
//   ).current;

//   const [swipeState, setSwipeState] = useState({ left: false, right: false }); // 초기 상태 기준 스와이프 가능 여부

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderRelease: (_, gestureState) => {
//         const threshold = width * 0.3;

//         if (gestureState.dx > threshold && !swipeState.right) {
//           // 오른쪽 스와이프
//           shiftPositions(-1);
//           setSwipeState({ left: true, right: false }); // 초기 상태로의 복귀 가능
//         } else if (gestureState.dx < -threshold && !swipeState.left) {
//           // 왼쪽 스와이프
//           shiftPositions(1);
//           setSwipeState({ left: false, right: true }); // 초기 상태로의 복귀 가능
//         }
//       },
//     })
//   ).current;

//   const shiftPositions = (direction) => {
//     positions.forEach((pos) => {
//       Animated.spring(pos, {
//         toValue: pos._value + direction * -width * 0.4,
//         useNativeDriver: true,
//       }).start();
//     });
//   };

//   const AnimatedButton = ({ label, icon, route, position }) => {
//     const scaleAnim = useRef(new Animated.Value(1)).current;

//     const handlePressIn = () => {
//       Animated.spring(scaleAnim, { toValue: 1.3, useNativeDriver: true }).start();
//     };

//     const handlePressOut = () => {
//       Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
//     };

//     return (
//       <Animated.View
//         style={[
//           styles.circleButton,
//           { transform: [{ translateX: position }, { scale: scaleAnim }] },
//         ]}
//       >
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
//         <Text style={styles.headerText1}>윤서님의 WISH를 위해</Text>
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
//       <View style={styles.footer} {...panResponder.panHandlers}>
//         {components.map((component, index) => (
//           <AnimatedButton
//             key={component.id}
//             label={component.label}
//             icon={component.icon}
//             route={component.route}
//             position={positions[index]}
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
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   circleButton: {
//     position: 'absolute',
//     width: width * 0.3,
//     height: width * 0.3,
//     backgroundColor: '#FFFFFF',
//     borderRadius: width * 0.15,
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
//   },
//   icon: {
//     width: width * 0.1,
//     height: width * 0.1,
//     resizeMode: 'contain',
//   },
// });

// export default MainPage;

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const SCROLL_AREA = width * 1.5; // 버튼 배치 영역의 크기 (150% 화면)
const BUTTON_WIDTH = SCROLL_AREA / 4; // 버튼 한 개의 넓이 (4개의 버튼 기준)

const MainPage = () => {
  const navigation = useNavigation();

  const [components] = useState([
    { id: 1, label: '상담\nwith WISH', icon: require('../../assets/main/wishbot.png'), route: 'Chat' },
    { id: 2, label: '스펙', icon: null, route: 'SpecPage' },
    { id: 3, label: null, icon: require('../../../assets/Group 19.png'), route: 'MyInfo' },
    { id: 4, label: '취업 정보', icon: null, route: 'JobInfoPage' },
  ]);

  const pan = useRef(new Animated.Value(0)).current;
  const currentOffset = useRef(0); // 현재 위치 상태 저장

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy), // 수평 스와이프만 허용
      onPanResponderMove: Animated.event(
        [null, { dx: pan }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gestureState) => {
        const threshold = BUTTON_WIDTH / 3; // 움직임 임계값
        let offsetChange = 0;

        if (gestureState.dx > threshold) {
          // 오른쪽으로 스와이프
          offsetChange = -BUTTON_WIDTH;
        } else if (gestureState.dx < -threshold) {
          // 왼쪽으로 스와이프
          offsetChange = BUTTON_WIDTH;
        }

        // 현재 pan 값을 offset에 추가하고 초기화
        currentOffset.current += offsetChange;
        Animated.timing(pan, {
          toValue: 0, // 손 뗀 후 애니메이션 초기화
          duration: 150,
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  const getButtonStyle = (index) => {
    const basePosition = (index - 1.5) * BUTTON_WIDTH; // 중앙 정렬
    return {
      transform: [
        {
          translateX: Animated.add(
            pan,
            new Animated.Value(basePosition + currentOffset.current) // 현재 위치와 애니메이션 값 반영
          ),
        },
      ],
    };
  };

  const AnimatedButton = ({ label, icon, route, index }) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scaleAnim, { toValue: 1.3, useNativeDriver: false }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: false }).start();
    };

    return (
      <Animated.View style={[styles.circleButton, getButtonStyle(index)]}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate(route)}
        >
          {icon && <Image source={icon} style={styles.icon} />}
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
        <Text style={styles.headerText1}>윤서님의 WISH를 위해</Text>
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
      <View style={styles.footer} {...panResponder.panHandlers}>
        {components.map((component, index) => (
          <AnimatedButton
            key={component.id}
            label={component.label}
            icon={component.icon}
            route={component.route}
            index={index}
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
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circleButton: {
    position: 'absolute',
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: '#FFFFFF',
    borderRadius: width * 0.15,
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
  },
  icon: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
});

export default MainPage;
