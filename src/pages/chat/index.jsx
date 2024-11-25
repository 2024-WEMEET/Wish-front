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
      const response = await fetch('http://localhost:8080/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
        credentials: 'include',
      });

      if (!response.ok) {
        console.error('Failed Response Status:', response.status);
        throw new Error('Failed to fetch bot response');
      }

      const responseData = await response.json();
      const serverMessage = responseData.message;
      const parsedMessage = JSON.parse(serverMessage);

      const botMessage = {
        id: `${Date.now()}-bot`,
        text: parsedMessage,
        type: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
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
      keyboardVerticalOffset={Platform.OS === 'ios' ? height * 0 : 0}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>상담</Text>
        <Text style={styles.headerSubText}>with WISH</Text>
      </View>

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

      <View style={styles.navigation}>
        <TouchableOpacity
          style={[styles.navButton, styles.leftButton]}
          onPress={() => navigation.navigate('Main')}
        >
          <Image source={require('../../assets/chat/home.png')} style={styles.home} />
          <Text style={styles.homeText}>홈</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.rightButton]}
          onPress={() => navigation.navigate('MyInfo')}
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
    width: '100%',
    borderColor: '#ddd',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    height: height * 0.1,
  },
  navButton: {
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myinfo: {
    width: width * 0.107,
    height: width * 0.164,
  },
  home: {
    width: width * 0.09,
    height: width * 0.10,
  },
  homeText: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginTop: 0,
  },
});

export default ChatPage;
