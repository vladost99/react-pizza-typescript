import { Sort } from "redux/filter/types";
export type Pizza = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating?: number;
}

export type FetchPizzaArgs = {
    categoryId: string | number,
    sortType: Sort,
    searchValue?: string,
    currentPage: string | number
};


export interface IPizzaSliceState {
    items: Pizza[];
    status: 'loading' | 'success' | 'error';
}