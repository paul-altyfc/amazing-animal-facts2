import React from 'react';

function CategorySelector({ categories, changeCategory }) {
  return (
    <div>
      {categories.map(category => {
        return (
          <button onClick={() => changeCategory(category)} key={category}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategorySelector;
