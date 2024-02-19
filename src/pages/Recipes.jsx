import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeService from "../service/service";
import CategoryChoices from "../components/ui/CategoryChoices";
import RecipeList from "../components/RecipeList";
import Select from "../components/ui/Select";

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

  const filterRecipes = (filter) => {
    console.log(filter);
    const sortedRecipes = recipes.slice().sort((a, b) => {
      if (filter === "ASCENDING") {
        return a.strMeal.localeCompare(b.strMeal);
      } else if (filter === "DESCENDING") {
        return b.strMeal.localeCompare(a.strMeal);
      }
      return 0;
    });
    setRecipe(sortedRecipes);
  };

  return (
    <header id="recipes">
      <div className="container">
        <div className="row">
          <div className="category__choices">
            {categories.map((category) => (
              <CategoryChoices key={category.idCategory} category={category} />
            ))}
          </div>
          <h1 className="categories__title">{name}</h1>
          <hr />
          <Select filterRecipes={filterRecipes} />
          <div className="recipes">
            {recipes.map((recipe) => (
              <RecipeList key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Recipes;
