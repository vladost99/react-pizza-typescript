import React from "react";
import CartItem from "components/Cart/CartItem";
import CartEmpty from "components/Cart/CartEmpty";
import { ReactComponent as TrashSvg } from "assets/img/trash.svg";
import { ReactComponent as CartSvg } from "assets/img/cart.svg";
import { ReactComponent as GreyArrowLeftSvg } from "assets/img/grey-arrow-left.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "redux/cart/slice";
import { selectCart } from 'redux/cart/selector';
import { pricePrefix } from "utils/pricePrefix";

const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, obj: any) => obj.count + sum, 0);
  const dispatch = useDispatch();

  const clearCart = () => dispatch(clearItems());

  return (
    <>
      {items.length > 0 ? (
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <CartSvg />
                Корзина
              </h2>
              <div onClick={clearCart} className="cart__top-clear">
                <span>
                  <TrashSvg />
                  Очистить корзину
                </span>
              </div>
            </div>
            <div className="cart__items">
              {items.map((item: any) => (
                <CartItem {...item} key={item.id} />
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Всего пицц: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} {pricePrefix}</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link
                  to="/"
                  className="button button--outline button--add go-back-btn"
                >
                  <GreyArrowLeftSvg />
                  <span>Вернуться назад</span>
                </Link>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default Cart;
