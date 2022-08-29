import React from "react";
import { ReactComponent as PlusSvg } from "assets/img/plus.svg";
import { useDispatch } from "react-redux";
import { removeItem, minusCountItem, addItem} from "redux/slices/cartSlice";


type CartItemProps = {
  name: string;
  size: number
  type: string;
  count: number;
  price: number;
  imageUrl: string;
  id: string;
}

const CartItem: React.FC<CartItemProps> = ({name, size, type, count, price, imageUrl, id}) => {
  const total = count * price;
  const dispatch = useDispatch();

  const remove = () => {
   if(window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeItem(id))
   }
  }

  const changeCount = (type: string) => {
   if(type === 'remove') dispatch(minusCountItem({id}));
   else dispatch(addItem({id}))
  }


  return (
    <div className="cart__item">
      <div className="cart__item-wrapper">
        <div className="cart__item-wrapper-img">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
        </div>
        <div className="cart__item-wrapper-info">
          <h3>{name}</h3>
          <p>{type}, {size} см.</p>
        </div>
        <div className="cart__item-wrapper-count">
          <div onClick={() => changeCount('remove')} className="button button--outline button--circle cart__item-wrapper-count-minus">
            <PlusSvg />
          </div>
          <b>{count}</b>
          <div  onClick={() => changeCount('add')} className="button button--outline button--circle cart__item-wrappercount-plus">
            <PlusSvg />
          </div>
        </div>
        <div className="cart__item-wrapper-price">
          <b>{total} ₽</b>
        </div>
      </div>
      <div className="cart__item-remove">
        <div onClick={remove} className="button button--outline button--circle">
          <PlusSvg />
        </div>
      </div>
    </div>
  );
};

export default CartItem;