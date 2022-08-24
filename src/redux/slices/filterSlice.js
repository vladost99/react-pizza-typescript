import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        changeSort: (state,action) => {
            state.sort = action.payload;
        }
    }
})


export const {setCategoryId, changeSort} = filtersSlice.actions;
export default filtersSlice.reducer;