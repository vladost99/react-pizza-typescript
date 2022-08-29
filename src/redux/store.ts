import { configureStore } from '@reduxjs/toolkit';
import filters from 'redux/slices/filterSlice';
import cart from 'redux/slices/cartSlice';
import pizza from 'redux/slices/pizzaSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {filters, cart, pizza},
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();