import React, { useContext, useEffect, useRef, useState } from "react";
import Categories from "components/Categories";
import Sort, { sortList } from "components/Sort";
import PizzaBlock from "components/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Pagination from "components/Pagination";

import { getPizzas } from "api/pizzas";
import { SearchContext } from "App";
import { useDispatch, useSelector } from "react-redux";
import QueryString  from "qs";
import { useNavigate } from "react-router-dom";
import { setFilters } from "redux/slices/filterSlice";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 const isSearch = useRef(false);
 const isMounted = useRef(false);
  const {
    categoryId,
    sort: sortType,
    currentPage,
  } = useSelector((state) => state.filters);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(window.location.search) {
      const params = QueryString.parse(window.location.search.substring(1));
      dispatch(setFilters({
        ...params,
        sort: sortList.find(el => el.sortProperty === params.sortProperty) || sortList[0]
      }))
     isSearch.current = true;
    }
  }, [])

  useEffect(() => {
     if(isMounted.current) {
      const queryString = QueryString.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage
      })
      navigate(`?${queryString}`);
     }
      
    isMounted.current = true;
  }, [categoryId, sortType.sortProperty, currentPage]);

  useEffect(() => {
    
     if(!isSearch.current) {
      setIsLoading(true);
      getPizzas(categoryId, sortType, searchValue, currentPage)
        .then((res) => res.json())
        .then((res) => {
          setPizzas(res);
          setIsLoading(false);
        });
     }
    
    isSearch.current = false;
  }, [categoryId, sortType.sortProperty, searchValue, currentPage])

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
      <div className="content__items">{isLoading ? skeletons : items}</div>
      <Pagination />
    </div>
  );
};

export default Home;
