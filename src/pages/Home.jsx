import React, {useEffect, useState} from "react";
import Categories from "components/Categories";
import Sort from "components/Sort";
import PizzaBlock from "components/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";

import { getPizzas } from "api/pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ name: "популярности", sortProperty: "rating" });
  

  useEffect(() => {
    setIsLoading(true);
    getPizzas(categoryId, sortType)
      .then((res) => res.json())
      .then((res) => {
        setPizzas(res);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onChangeCategory={(index) => setCategoryId(index)} value={categoryId} />
        <Sort value={sortType} onChangeSort={((index) => setSortType(index))} />
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
