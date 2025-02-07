import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../Redux/Slice/languageSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;
