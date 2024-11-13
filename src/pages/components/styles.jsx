// src/components/styles.js

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const globalstyles = {
  statusBar: {
    width: width,
    height: height * 0.0568,
  },

  // dynamicRectangle 스타일 정의
  dynamicRectangle: {
    width: width * 0.9,
    height: height * 0.15,
    backgroundColor: '#E0E6F8',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
  },

  // messageBox 스타일 정의
  messageBox: {
    maxWidth: '80%', // 화면 너비의 80%로 최대 너비 제한
    backgroundColor: '#E0E6F8', // 배경색
    paddingVertical: 10, // 위아래 패딩
    paddingHorizontal: 15, // 좌우 패딩
    borderRadius: 10, // 모서리 둥글기
    alignSelf: 'flex-start', // 왼쪽 정렬
    marginVertical: 5, // 메시지 간격
  },

  messageText: {
    fontSize: 16, // 텍스트 크기
    color: '#000', // 텍스트 색상
  },
};

export default globalstyles;