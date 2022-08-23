import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="categories">
      <ul>
        {["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"].map(
          (category, index) => (
            <li
              key={`category_${category}`}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index && "active" || ''}
            >
              {category}
            </li>
          )
        )}
      </ul>
    </div>
    
  );
};

export default Categories;
