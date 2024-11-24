import React, { createContext, useContext, useState, useEffect } from 'react';

// Context 생성
const UserContext = createContext();

// Hook으로 Context 사용
export const useUser = () => useContext(UserContext);

// Provider 컴포넌트
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); // 사용자 데이터
  const [loading, setLoading] = useState(true);  // 로딩 상태

  // 사용자 데이터를 가져오는 함수
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8080/member/userInfo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 세션 정보 포함
      });

      if (!response.ok) throw new Error('Failed to fetch user data');

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserData(null); // 오류 발생 시 null로 설정
    } finally {
      setLoading(false);
    }
  };

  // 특정 필드 업데이트 함수
  const updateUserData = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value, // 특정 필드만 업데이트
    }));
  };

  // 사용자 데이터 초기화 함수
  const resetUserData = () => {
    setUserData(null); // 초기화
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // 로딩 상태 처리
  if (loading) {
    return <>{/* 로딩 중일 때 처리 (스플래시 화면 등) */}</>;
  }

  return (
    <UserContext.Provider value={{ userData, updateUserData, resetUserData }}>
      {children}
    </UserContext.Provider>
  );
};
