import React from "react";

const Categories = ({value, onChangeCategory}) => {
  

  return (
    <div className="categories">
      <ul>
        {["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"].map(
          (categoryName, index) => (
            <li
              key={`category_${categoryName}`}
              onClick={() =>  onChangeCategory(index)}
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
