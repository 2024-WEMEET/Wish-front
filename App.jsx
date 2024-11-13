// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import Screens
// import LoginPage from './src/pages/login';
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Login" component={LoginPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// --------------------------------------------------------------------

// import React, { useContext, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Import Screens
// import LoginPage from './src/pages/login';
// import MainPage from './src/pages/main'; // 임의로 만든 메인 페이지


// const Stack = createStackNavigator();

// // 인증 상태에 따라 화면을 결정하는 컴포넌트
// function RootNavigator() {
//   const { isLoggedIn } = useContext(AuthContext);

//   const temporaryLoggedIn = true; //메인 페이지 작업을 위해 로그인 true인 상태

//   useEffect(() => {
//     console.log('User login status:', isLoggedIn);
//   }, [temporaryLoggedIn]); //메인 페이지 작업을 위해 로그인 true인 상태

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {temporaryLoggedIn ? ( //메인 페이지 작업을 위해 로그인 true인 상태
//         <Stack.Screen name="Main" component={MainPage} />
//       ) : (
//         <Stack.Screen name="Login" component={LoginPage} />
//       )}
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//   );
// }

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import LoginPage from './src/pages/login';
import MainPage from './src/pages/main'; // 임의로 만든 메인 페이지

const Stack = createStackNavigator();

// 로그인 상태에 따라 화면을 결정하는 컴포넌트
function RootNavigator() {
  const temporaryLoggedIn = true; // 메인 페이지 작업을 위해 로그인 상태를 true로 설정

  useEffect(() => {
    console.log('User login status:', temporaryLoggedIn);
  }, [temporaryLoggedIn]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {temporaryLoggedIn ? ( // 로그인 상태에 따라 페이지 결정
        <Stack.Screen name="Main" component={MainPage} />
      ) : (
        <Stack.Screen name="Login" component={LoginPage} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
