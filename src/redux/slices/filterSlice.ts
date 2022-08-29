import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";


export type Sort = {
    name: string;
    sortProperty: string;
};

interface IFilterSliceState {
    categoryId: number;
    sort: Sort;
    currentPage: number;
}



const initialState: IFilterSliceState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
    currentPage: 1
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
        }
    }
})


export const selectFilters = (state: RootState) => state.filters;

export const {setCategoryId, changeSort, setCurrentPage, setFilters} = filtersSlice.actions;
export default filtersSlice.reducer;