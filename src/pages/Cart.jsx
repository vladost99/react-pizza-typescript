import React from "react";
import CartItem from "components/Cart/CartItem";
import {ReactComponent as TrashSvg} from 'assets/img/trash.svg';
import {ReactComponent as CartSvg} from 'assets/img/cart.svg';
import { ReactComponent as GreyArrowLeftSvg} from 'assets/img/grey-arrow-left.svg';
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title"><CartSvg/>Корзина</h2>
          <div className="cart__top-clear">
           <span><TrashSvg/>Очистить корзину</span>
          </div>
        </div>
        <div className="cart__items">
         <CartItem/>
         <CartItem/>
         <CartItem/>
         <CartItem/>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
             
              Всего пицц: <b>3 шт.</b>
            </span>
            <span>
             
              Сумма заказа: <b>900 ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
              <GreyArrowLeftSvg/>
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
