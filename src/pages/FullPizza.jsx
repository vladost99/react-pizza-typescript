import { getPizza } from "api/pizzas";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getPizza(id).then((res) => setPizza(res));
  }, []);

  return (
    <>
      {pizza ? (
        <div className="container">
          <img src={pizza.imageUrl} />
          <h2>{pizza.name}</h2>
          <h4>{pizza.price} ₽</h4>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FullPizza;
