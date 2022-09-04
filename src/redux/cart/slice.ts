import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "utils/calcTotalPrice";
import { getCartFromLocalStorage, reduceTotalPriceFromLocalStorage, setCartLocalStorage } from "utils/localStorageFunc";
import { ICartSliceState, CartItem } from 'redux/cart/types';



const initialState: ICartSliceState = {
    totalPrice: reduceTotalPriceFromLocalStorage(),
    items:  getCartFromLocalStorage(),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(item => item.id === action.payload.id);
           
            if(findItem) {
                findItem.count++
            }
            else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = calcTotalPrice(state.items);
            setCartLocalStorage(state.items);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.items);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
            setCartLocalStorage(state.items);
        },
        minusCountItem: (state, action: PayloadAction<{id: string}>) => {
            const findItem: CartItem | undefined = state.items.find(item => item.id === action.payload.id);
            
            if(!findItem) return
            
            findItem.count--;
            state.totalPrice = calcTotalPrice(state.items);
            setCartLocalStorage(state.items);
        }
    }
})

export const {addItem, removeItem, clearItems, minusCountItem} = cartSlice.actions;
export default cartSlice.reducer;