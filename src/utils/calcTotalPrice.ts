import { CartItem } from "redux/slices/types";

export const calcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum: number, obj) => (obj.price * obj.count) + sum, 0)
}