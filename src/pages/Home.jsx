import React, { useContext, useEffect, useRef } from "react";
import Categories from "components/Categories";
import Sort, { sortList } from "components/Sort";
import PizzaBlock from "components/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Pagination from "components/Pagination";

import { SearchContext } from "App";
import { useDispatch, useSelector } from "react-redux";
import QueryString from "qs";
import { useNavigate } from "react-router-dom";
import { setFilters } from "redux/slices/filterSlice";
import { fetchPizzas, selectorPizzas } from "redux/slices/pizzaSlice";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const {
    categoryId,
    sort: sortType,
    currentPage,
  } = useSelector((state) => state.filters);
  const { items: pizzas, status } = useSelector(selectorPizzas);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.search) {
      const params = QueryString.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
          sort:
            sortList.find((el) => el.sortProperty === params.sortProperty) ||
            sortList[0],
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = QueryString.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType.sortProperty, currentPage]);

  useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchPizzas({ categoryId, searchValue, sortType, currentPage }));
    }

    isSearch.current = false;
  }, [categoryId, sortType.sortProperty, searchValue, currentPage]);

  const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  const skeletons = [...new Array(6)].map((el, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению,не удалось получить питсы.Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : items}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Home;
