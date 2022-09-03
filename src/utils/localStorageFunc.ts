import { CartItem } from "redux/slices/types";
import { calcTotalPrice } from "./calcTotalPrice";
const name: string = 'cart';

export const getData = () => {
  return  localStorage.getItem(name);
}


export const getCartFromLocalStorage = () => {
    const data = getData()
    return data ? JSON.parse(data) : []
}

export const setCartLocalStorage = (data: CartItem[]) => {
    localStorage.setItem(name,JSON.stringify(data));
}

export const reduceTotalPriceFromLocalStorage = () => {
    const data = getData();
    return data ? calcTotalPrice(JSON.parse(data)) : 0
}
