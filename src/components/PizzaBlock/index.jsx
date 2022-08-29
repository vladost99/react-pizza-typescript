import React, { useState } from "react";
import PlusSvg from "assets/img/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCart } from "redux/slices/cartSlice";

const PizzaBlock = ({ name, price, imageUrl, sizes, types, id }) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);
  const typeNames = ["тонкое", "традиционное"];
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector(selectCart);
  const cartItem = cartItems.find((item) => item.id === id);

  const addItemToCart = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => (
              <li
                onClick={() => setActiveType(type)}
                key={type}
                className={(type === activeType && "active") || ""}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => (
              <li
                onClick={() => setActiveSize(size)}
                key={size}
                className={(size === activeSize && "active") || ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div
            onClick={addItemToCart}
            className="button button--outline button--add"
          >
            <img src={PlusSvg} />
            <span>Добавить</span>
            <i>{(cartItem && cartItem.count) || 0}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
