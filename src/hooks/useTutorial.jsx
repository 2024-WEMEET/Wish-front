import React, { createContext, useContext, useState } from 'react';

// Context 생성
const TutorialContext = createContext();

// 커스텀 Hook: 다른 컴포넌트에서 쉽게 사용할 수 있도록
export const useTutorial = () => useContext(TutorialContext);

export const TutorialProvider = ({ children }) => {
  const [tutorialData, setTutorialData] = useState([]);

  // 데이터를 업데이트하는 함수 - 새로운 데이터 객체를 배열에 추가
  const updateData = (newData) => {
    setTutorialData((prevData) => [...prevData, newData]);
  };

  // 전체 데이터를 초기화하는 함수
  const resetTutorialData = () => {
    setTutorialData([]);
  };

  return (
    <TutorialContext.Provider value={{ tutorialData, updateData, resetTutorialData }}>
      {children}
    </TutorialContext.Provider>
  );
};