import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeService from "../service/service";
import "./pages.css";
import Ingredients from "../components/ui/Ingredients";
import Step from "../components/ui/Step";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const getRecipe = async () => {
    try {
      const { meals } = await RecipeService.fetchRecipe(id);
      setRecipe(meals[0]);
    } catch (error) {
      console.error("Error getting recipe", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [id]);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      if (recipe[ingredientKey] && recipe[ingredientKey].trim() !== "") {
        const ingredient =
          `${recipe[measureKey]} ${recipe[ingredientKey]}`.trim();
        ingredients.push(ingredient);
      } else {
        break;
      }
    }
    return ingredients;
  };

  const formatInstructions = (instructions) => {
    return instructions.split("\r\n").filter((line) => line.trim() !== "");
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }
  const ingredients = getIngredients();
  const steps = formatInstructions(recipe.strInstructions);

  return (
    <div className="container">
      <div className="row">
        <div className="recipe__wrapper">
          <div className="recipe__content">
            <div className="recipe__content--title">
              <h2 className="recipe__content--name">{recipe.strMeal}</h2>
              <hr />
            </div>
            <img
              src={recipe.strMealThumb}
              className="recipe__content--img"
              alt=""
            />
            <p className="recipe__content--info">
              Area: {recipe.strArea} | Category: {recipe.strCategory} | Tags:{" "}
              {recipe.strTags ? recipe.strTags : "No tags"}
            </p>
            <hr />
            <div className="recipe__info">
              <Ingredients recipe={recipe} ingredients={ingredients} />
              <Step steps={steps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
