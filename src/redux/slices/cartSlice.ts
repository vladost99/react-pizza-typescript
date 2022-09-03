import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";


export type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}

interface ICartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const initialState: ICartSliceState = {
    totalPrice: 0,
    items: []
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
            state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        minusCountItem: (state, action: PayloadAction<{id: string}>) => {
            const findItem: CartItem | undefined = state.items.find(item => item.id === action.payload.id);
            
            if(!findItem) return
            
            findItem.count--;
            state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
        }
    }
})


export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj: CartItem) => obj.id === id);

export const {addItem, removeItem, clearItems, minusCountItem} = cartSlice.actions;
export default cartSlice.reducer;