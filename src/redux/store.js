import { configureStore } from '@reduxjs/toolkit';
import filters from 'redux/slices/filterSlice';

export const store = configureStore({
  reducer: {filters},
})