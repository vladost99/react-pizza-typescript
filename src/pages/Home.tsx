import React, { useEffect, useRef } from "react";
import Categories from "components/Categories";
import PizzaBlock from "components/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Pagination from "components/Pagination";
import Sort, { sortList } from "components/Sort";
import QueryString from "qs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilters } from "redux/filter/slice";
import { selectFilters } from "redux/filter/selector";
import { fetchPizzas } from "redux/pizza/slice";
import { selectorPizzas } from "redux/pizza/selector";
import { useAppDispatch } from "redux/store";

const Home: React.FC = () => {
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const {
    categoryId,
    sort: sortType,
    currentPage,
  } = useSelector(selectFilters);
  const { items: pizzas, status } = useSelector(selectorPizzas);
  const {searchValue} = useSelector(selectFilters);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.location.search) {
      const params = QueryString.parse(window.location.search.substring(1));
      const sort = sortList.find((el) => el.sortProperty === params.sortProperty) || sortList[0];
      dispatch(
        setFilters({
          categoryId: Number(params.categoryId),
          sort,
          currentPage: Number(params.currentPage)
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

  const items = pizzas.map((pizza: any) => <PizzaBlock key={pizza.id}  {...pizza} />);

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
