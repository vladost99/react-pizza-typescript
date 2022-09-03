export type Sort = {
    name: string;
    sortProperty: string;
};


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

export type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}


export interface IFilterSliceState {
    categoryId: number;
    sort: Sort;
    currentPage: number;
    searchValue?: string;
}



export interface ICartSliceState {
    totalPrice: number;
    items: CartItem[];
}


export interface IPizzaSliceState {
    items: Pizza[];
    status: 'loading' | 'success' | 'error';
}