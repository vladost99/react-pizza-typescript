import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
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
        removeItem: (state, action) => {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        minusCountItem: (state, action) => {
            const findItem = state.items.find(item => item.id === action.payload.id);
            
            if(findItem.count === 1) return
            
            findItem.count--;
            state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
        }
    }
})

export const {addItem, removeItem, clearItems, minusCountItem} = cartSlice.actions;
export default cartSlice.reducer;