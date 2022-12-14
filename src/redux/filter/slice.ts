import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState, Sort } from 'redux/filter/types';


const initialState: IFilterSliceState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
    currentPage: 1,
    searchValue: ''
};


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        changeSort: (state,action: PayloadAction<Sort>) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action: PayloadAction<IFilterSliceState>) => {
            state.currentPage = Number(action.payload.currentPage);
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
        },
        setValueSearch: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    }
})




export const {setCategoryId, changeSort, setCurrentPage, setFilters, setValueSearch} = filtersSlice.actions;
export default filtersSlice.reducer;