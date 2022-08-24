import { configureStore } from '@reduxjs/toolkit';
import filters from 'redux/slices/filterSlice';
import cart from 'redux/slices/cartSlice';

export const store = configureStore({
  reducer: {filters, cart},
})