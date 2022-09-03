import{ createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPizzas } from "api/pizzas";
import { RootState } from "redux/store";
import { Sort } from "./filterSlice";



type FetchPizzaArgs = {
    categoryId: string | number,
    sortType: Sort,
    searchValue?: string,
    currentPage: string | number
};

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzaArgs>('pizza/fetchPizzasStatus', async (params) => {
    
    const {categoryId, sortType, searchValue, currentPage} = params;
    const response = await getPizzas(categoryId, sortType, searchValue, currentPage).then(res => res.json());

    return response
})

type Pizza = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating?: number;
}

interface IPizzaSliceState {
    items: Pizza[];
    status: 'loading' | 'success' | 'error';
}


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
