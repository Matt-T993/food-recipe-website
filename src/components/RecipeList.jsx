import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecipesSkeleton } from "./Skeleton";

const RecipeList = ({ recipe }) => {
  return (
    <div className="recipe">
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
