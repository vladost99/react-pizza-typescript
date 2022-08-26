import { configureStore } from '@reduxjs/toolkit';
import filters from 'redux/slices/filterSlice';
import cart from 'redux/slices/cartSlice';
import pizza from 'redux/slices/pizzaSlice';

export const store = configureStore({
  reducer: {filters, cart, pizza},
})