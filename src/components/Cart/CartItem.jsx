import React from "react";
import { ReactComponent as PlusSvg } from "assets/img/plus.svg";

const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__item-wrapper">
        <div className="cart__item-wrapper-img">
          <img
            className="pizza-block__image"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
            alt="Pizza"
          />
        </div>
        <div className="cart__item-wrapper-info">
          <h3>Сырный цыпленок</h3>
          <p>тонкое тесто, 26 см.</p>
        </div>
        <div className="cart__item-wrapper-count">
          <div className="button button--outline button--circle cart__item-wrapper-count-minus">
            <PlusSvg />
          </div>
          <b>2</b>
          <div className="button button--outline button--circle cart__item-wrappercount-plus">
            <PlusSvg />
          </div>
        </div>
        <div className="cart__item-wrapper-price">
          <b>770 ₽</b>
        </div>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle">
          <PlusSvg />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
