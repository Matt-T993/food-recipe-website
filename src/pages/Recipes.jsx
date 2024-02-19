import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeService from "../service/service";
import CategoryChoices from "../components/ui/CategoryChoices";
import RecipeList from "../components/RecipeList";

const Recipes = ({ categories }) => {
  const { name } = useParams();
  const [recipes, setRecipe] = useState([]);

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
              <CategoryChoices category={category} />
            ))}
          </div>
          <h1 className="categories__title">{name}</h1>
          <hr />
          <div className="recipes">
            {recipes.map((recipe) => (
              <RecipeList recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Recipes;
