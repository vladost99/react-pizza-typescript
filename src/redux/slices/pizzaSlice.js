import{ createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPizzas } from "api/pizzas";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
    
    const {categoryId, sortType, searchValue, currentPage} = params;
    const response = await getPizzas(categoryId, sortType, searchValue, currentPage).then(res => res.json());
    return response;
})


const initialState  = {
    items: [],
    status: 'loading',
};

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading';
            state.items =  [];
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        }
    }
});

export const {setPizzas} = pizzasSlice.actions;
export default pizzasSlice.reducer;