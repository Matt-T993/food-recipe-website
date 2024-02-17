import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RecipeService from "../service/service";

const Recipes = ({ categories }) => {
  const { name } = useParams();
  const [recipes, setRecipe] = useState([]);
  const navigate = useNavigate();

  const getRecipesCategory = async () => {
    try {
      const { meals } = await RecipeService.fetchRecipesCategory(name);
      setRecipe(meals);

    } catch (error) {
      console.error("Error getting recipes category", error);
    }
  };

  useEffect(() => {
    getRecipesCategory();
  }, [name]);
  return (
    <header id="recipes">
    <div className="container">
      <div className="row">
      <div className="category__choices">
        {categories.map((category) => (
            <div className="category__choice" key={category.idCategory}>
              <p onClick={() => navigate(`/recipes/${category.strCategory}`)} className="category__choice--name">{category.strCategory}</p>
            </div>
        ))}
                  </div>
        <h1 className="categories__title">{name}</h1>
        <div className="recipes">
          {recipes.map((recipe) => (
            <div className="recipe" key={recipe.idMeal}>
              <Link to={`${recipe.idMeal}`}>
                <div className="recipe__card">
                  <img
                    src={recipe.strMealThumb}
                    className="recipe__img"
                    alt=""
                  />
                  <p className="recipe__name">{recipe.strMeal}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    </header>
  );
};

export default Recipes;
