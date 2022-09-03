import{ createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPizzas } from "api/pizzas";
import { RootState } from "redux/store";
import {Pizza, FetchPizzaArgs, IPizzaSliceState } from "redux/slices/types";



export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzaArgs>('pizza/fetchPizzasStatus', async (params) => {
    
    const {categoryId, sortType, searchValue, currentPage} = params;
    const response = await getPizzas(categoryId, sortType, searchValue, currentPage).then(res => res.json());

    return response
})



const initialState: IPizzaSliceState  = {
    items: [],
    status: 'loading',
};

export const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<Pizza[]>) => {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.items =  [];
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error';
            state.items = [];
        })
    }
});

export const selectorPizzas = (state: RootState) => state.pizza;

export const {setPizzas} = pizzasSlice.actions;
export default pizzasSlice.reducer;
