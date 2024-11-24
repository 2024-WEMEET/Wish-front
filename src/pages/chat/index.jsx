// import React, { useState, useRef } from 'react';
// import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window');

// const ChatPage = () => {
//   const navigation = useNavigation();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [inputHeight, setInputHeight] = useState(40);
//   const flatListRef = useRef();

//   const handleSendMessage = () => {
//     if (message.trim() !== '') {
//       const userMessage = {
//         id: `${Date.now()}-user`,
//         text: message,
//         type: 'user',
//       };

//       setMessages((prevMessages) => [...prevMessages, userMessage]);

//       fetchBotResponse(message);
//       setMessage('');
//       setInputHeight(40); // Reset input height
//     }
//   };

//   const fetchBotResponse = (userMessage) => {
//     setTimeout(() => {
//       const botMessage = {
//         id: `${Date.now()}-bot`,
//         text: `${userMessage}`,
//         type: 'bot',
//       };
//       setMessages((prevMessages) => [...prevMessages, botMessage]);

//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }, 1000);
//   };

//   const renderItem = ({ item }) => (
//     <View
//       style={[
//         styles.messageContainer,
//         item.type === 'user' ? styles.userMessage : styles.botMessage,
//       ]}
//     >
//       {item.type === 'bot' ? (
//         <View style={styles.botMessageContent}>
//           <Image
//             source={require('../../assets/main/wishbot.png')}
//             style={styles.botImage}
//           />
//           <View style={styles.botTextBox}>
//             <Text style={styles.botText}>{item.text}</Text>
//           </View>
//         </View>
//       ) : (
//         <Text style={styles.userText}>{item.text}</Text>
//       )}
//     </View>
//   );

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <View style={styles.header}>
//         <Text style={styles.headerText}>상담</Text>
//         <Text style={styles.headerSubText}>with WISH</Text>
//       </View>

//       {/* 채팅 영역 */}
//       <View style={styles.chatWrapper}>
//         <FlatList
//           data={messages}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           ref={flatListRef}
//           contentContainerStyle={{
//             paddingBottom: height * 0.05, // 하단 패딩 추가
//           }}
//           onContentSizeChange={() => {
//             flatListRef.current?.scrollToEnd({ animated: true });
//           }}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* 입력창 */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={[styles.input, { height: Math.max(40, inputHeight) }]} // 동적 높이 설정
//           value={message}
//           onChangeText={setMessage}
//           placeholder="메시지를 입력해 주세요..."
//           multiline={true}
//           textAlignVertical="center"
//           onFocus={() => {
//             setTimeout(() => {
//               flatListRef.current?.scrollToEnd({ animated: true });
//             }, 100); // Scroll to end on focus
//           }}
//           onContentSizeChange={(event) =>
//             setInputHeight(event.nativeEvent.contentSize.height)
//           }
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//           <Image
//             source={require('../../assets/chat/send_icon.png')}
//             style={styles.sendIcon}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* 내비게이션 */}
//       <View style={styles.navigation}>
//         <TouchableOpacity
//           style={[styles.navButton, styles.leftButton]}
//           onPress={() => navigation.navigate('Main')}
//         >
//           <Image source={require('../../../assets/Group 18.png')} style={styles.myinfo} />
//           <Text style={styles.navText}></Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navButton, styles.rightButton]}
//           onPress={() => navigation.navigate('Myinfo')}
//         >
//           <Image source={require('../../../assets/Group 19.png')} style={styles.myinfo} />
//           <Text style={styles.navText}></Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     width: '100%',
//     height: height * 0.17,
//     paddingTop: height * 0.045,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   headerText: {
//     fontSize: width * 0.08,
//     fontWeight: '700',
//     color: '#333',
//   },
//   headerSubText: {
//     fontSize: width * 0.035,
//     fontWeight: '700',
//     color: '#3C00FF',
//   },
//   chatWrapper: {
//     flex: 1,
//     width: '100%',
//     marginBottom: height * 0.25, // Space for input box
//   },
//   chatContentContainer: {
//     paddingVertical: width * 0.05,
//   },
//   messageContainer: {
//     marginRight: width * 0.05,
//     padding: 10,
//     borderRadius: 20,
//     maxWidth: '80%',
//     marginBottom: height * 0.01,
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#3D7DD6',
//   },
//   botMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#FFFFFF',
//   },
//   userText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   botMessageContent: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: width * 0.02,
//   },
//   botImage: {
//     width: Math.max(width * 0.15, 40), // 최소 크기 40 보장
//     height: Math.max(width * 0.15, 40),
//     borderRadius: Math.max((width * 0.15) / 2, 20), // 비율에 따라 원형 유지
//     marginRight: 10,
//     resizeMode: 'contain',
//   },
//   botTextBox: {
//     backgroundColor: '#E5EBF4',
//     borderRadius: 15,
//     padding: 10,
//     maxWidth: '80%',
//   },
//   botText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 5,
//     backgroundColor: '#FFFFFF',
//     width: '90%', // 화면 너비의 90%
//     marginHorizontal: '5%', // 화면에서 좌우 여백 동일
//     borderColor: '#ddd',
//     position: 'absolute',
//     bottom: height * 0.14, // 네비게이션 위 공간 확보
//   },
//   input: {
//     flex: 1,
//     borderRadius: 20,
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderColor: '#A9A9A9',
//     backgroundColor: '#E5EBF4',
//     textAlignVertical: 'center',
//   },
//   sendButton: {
//     marginLeft: 10,
//     padding: 10,
//   },
//   sendIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//   },
//   navigation: {
//     position: 'absolute',
//     bottom: 0,
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     paddingHorizontal: 20,
//   },
//   navButton: {
//     width: width * 0.25,
//     height: width * 0.25,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: width * 0.05,
//     borderColor: '#808080',
//   },
//   myinfo: {
//     width: width * 0.107,
//     height: width * 0.164,
//   },
//   leftButton: {
//     borderTopRightRadius: width * 0.5,
//     paddingRight: width * 0.05,
//   },
//   rightButton: {
//     borderTopRightRadius: width * 0.5,
//     paddingLeft: width * 0.05,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#333',
//     marginTop: 5,
//   },
// });

// export default ChatPage;


import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ChatPage = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputHeight, setInputHeight] = useState(40);
  const flatListRef = useRef();

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const userMessage = {
        id: `${Date.now()}-user`,
        text: message,
        type: 'user',
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);

      fetchBotResponse(message);
      setMessage('');
      setInputHeight(40); // Reset input height
    }
  };

  const fetchBotResponse = async (userMessage) => {
    try {
      // 백엔드로 메시지 전송
      const response = await fetch('https://your-backend-url.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
        credentials: 'include', 
      });

      if (!response.ok) throw new Error('Failed to fetch bot response');

      // 응답 데이터 처리
      const responseData = await response.json();
      const botMessage = {
        id: `${Date.now()}-bot`,
        text: responseData.reply, // 서버에서 받은 메시지
        type: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      flatListRef.current?.scrollToEnd({ animated: true });
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: `${Date.now()}-bot`, text: '오류 발생: 다시 시도해주세요.', type: 'bot' },
      ]);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === 'user' ? styles.userMessage : styles.botMessage,
      ]}
    >
      {item.type === 'bot' ? (
        <View style={styles.botMessageContent}>
          <Image
            source={require('../../assets/main/wishbot.png')}
            style={styles.botImage}
          />
          <View style={styles.botTextBox}>
            <Text style={styles.botText}>{item.text}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.userText}>{item.text}</Text>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>상담</Text>
        <Text style={styles.headerSubText}>with WISH</Text>
      </View>

      {/* 채팅 영역 */}
      <View style={styles.chatWrapper}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ref={flatListRef}
          contentContainerStyle={{
            paddingBottom: height * 0.05,
          }}
          onContentSizeChange={() => {
            flatListRef.current?.scrollToEnd({ animated: true });
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* 입력창 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { height: Math.max(40, inputHeight) }]}
          value={message}
          onChangeText={setMessage}
          placeholder="메시지를 입력해 주세요..."
          multiline={true}
          textAlignVertical="center"
          onFocus={() => {
            setTimeout(() => {
              flatListRef.current?.scrollToEnd({ animated: true });
            }, 100);
          }}
          onContentSizeChange={(event) =>
            setInputHeight(event.nativeEvent.contentSize.height)
          }
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Image
            source={require('../../assets/chat/send_icon.png')}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>

      {/* 내비게이션 */}
      <View style={styles.navigation}>
        <TouchableOpacity
          style={[styles.navButton, styles.leftButton]}
          onPress={() => navigation.navigate('Main')}
        >
          <Image source={require('../../../assets/Group 18.png')} style={styles.myinfo} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.rightButton]}
          onPress={() => navigation.navigate('Myinfo')}
        >
          <Image source={require('../../../assets/Group 19.png')} style={styles.myinfo} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: height * 0.17,
    paddingTop: height * 0.045,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    fontSize: width * 0.08,
    fontWeight: '700',
    color: '#333',
  },
  headerSubText: {
    fontSize: width * 0.035,
    fontWeight: '700',
    color: '#3C00FF',
  },
  chatWrapper: {
    flex: 1,
    width: '100%',
    marginBottom: height * 0.25,
  },
  messageContainer: {
    marginRight: width * 0.05,
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%',
    marginBottom: height * 0.01,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3D7DD6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  userText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  botMessageContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: width * 0.02,
  },
  botImage: {
    width: Math.max(width * 0.15, 40),
    height: Math.max(width * 0.15, 40),
    borderRadius: Math.max((width * 0.15) / 2, 20),
    marginRight: 10,
    resizeMode: 'contain',
  },
  botTextBox: {
    backgroundColor: '#E5EBF4',
    borderRadius: 15,
    padding: 10,
    maxWidth: '80%',
  },
  botText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginHorizontal: '5%',
    borderColor: '#ddd',
    position: 'absolute',
    bottom: height * 0.14,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#A9A9A9',
    backgroundColor: '#E5EBF4',
    textAlignVertical: 'center',
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
  },
  sendIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  navButton: {
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: width * 0.05,
    borderColor: '#808080',
  },
  myinfo: {
    width: width * 0.107,
    height: width * 0.164,
  },
  leftButton: {
    borderTopRightRadius: width * 0.5,
    paddingRight: width * 0.05,
  },
  rightButton: {
    borderTopRightRadius: width * 0.5,
    paddingLeft: width * 0.05,
  },
});

export default ChatPage;
