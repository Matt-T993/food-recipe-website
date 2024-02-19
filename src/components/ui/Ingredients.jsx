import React from "react";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="recipe__info--ingredients">
      <h3 className="recipe__content--subtitle">Ingredients</h3>
      <ul className="ingredients">
        {ingredients.map((ingredient, index) => (
          <div className="ingredient__wrapper" key={index}>
            <li className="ingredient__item">{ingredient}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
