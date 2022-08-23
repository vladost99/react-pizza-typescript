import React, {useEffect, useState} from "react";
import Categories from "components/Categories";
import Sort from "components/Sort";
import PizzaBlock from "components/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";

import { getPizzas } from "api/pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    getPizzas()
      .then((res) => res.json())
      .then((res) => {
        setPizzas(res);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((el, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
