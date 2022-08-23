import React, { useState } from "react";
import PlusSvg from "assets/img/plus.svg";

const PizzaBlock = ({ name, price, imageUrl, sizes, types }) => {
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);
  const typeNames = ["тонкое", "традиционное"];

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
          <div className="button button--outline button--add">
            <img src={PlusSvg} />
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
