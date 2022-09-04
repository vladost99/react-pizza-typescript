import { configureStore } from '@reduxjs/toolkit';
import filters from 'redux/filter/slice';
import cart from 'redux/cart/slice';
import pizza from 'redux/pizza/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {filters, cart, pizza},
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();