export type Sort = {
    name: string;
    sortProperty: string;
};


export interface IFilterSliceState {
    categoryId: number;
    sort: Sort;
    currentPage: number;
    searchValue?: string;
}