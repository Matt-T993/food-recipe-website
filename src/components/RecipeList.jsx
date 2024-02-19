import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipe }) => {
  return (
    <div className="recipe" key={recipe.idMeal}>
      <Link to={`${recipe.idMeal}`}>
        <div className="recipe__card">
          <img src={recipe.strMealThumb} className="recipe__img" alt="" />
          <p className="recipe__name">{recipe.strMeal}</p>
        </div>
      </Link>
    </div>
  );
};

export default RecipeList;
