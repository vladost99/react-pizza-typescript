import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "redux/slices/filterSlice";

const Categories = () => {
  const value = useSelector(state => state.filters.categoryId);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"].map(
          (categoryName, index) => (
            <li
              key={`category_${categoryName}`}
              onClick={() =>  dispatch(setCategoryId(index))}
              className={value === index && "active" || ''}
            >
              {categoryName}
            </li>
          )
        )}
      </ul>
    </div>
    
  );
};

export default Categories;
