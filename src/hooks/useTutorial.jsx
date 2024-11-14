import React, { createContext, useContext, useState } from 'react';

const TutorialContext = createContext();

export const useTutorial = () => useContext(TutorialContext);

export const TutorialProvider = ({ children }) => {
  const [tutorialData, setTutorialData] = useState([]);

  // 데이터를 업데이트하는 함수 - 동일한 type이 있을 경우 덮어쓰기
  const updateData = (type, value) => {
    setTutorialData((prevData) => {
      const existingData = prevData.find((data) => data.type === type);

      if (existingData) {
        // 기존 타입이 있다면 해당 타입의 value를 덮어쓰기
        return prevData.map((data) =>
          data.type === type ? { ...data, value } : data
        );
      } else {
        // 기존 타입이 없으면 새로 추가
        return [...prevData, { type, value }];
      }
    });
  };

  // 전체 데이터를 초기화하는 함수
  const resetTutorialData = () => {
    setTutorialData([]);
  };

  // tutorialData를 백엔드에 보내기 전에 필요한 형식으로 변환하는 함수
  const ReadyForBackend = () => {
    return tutorialData.reduce((acc, item) => {
      acc[item.type] = item.value;
      return acc;
    }, {});
  };

  return (
    <TutorialContext.Provider value={{ tutorialData, updateData, resetTutorialData, ReadyForBackend }}>
      {children}
    </TutorialContext.Provider>
  );
};