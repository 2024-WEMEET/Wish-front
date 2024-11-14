// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import universityReducer from '../../src/redux/slices/universitySlice.js'; 

const store = configureStore({
  reducer: {
    universityData: universityReducer,
  },
});

export default store;