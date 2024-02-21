import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeService from "../service/service";
import CategoryChoices from "../components/ui/CategoryChoices";
import RecipeList from "../components/RecipeList";
import Select from "../components/ui/Select";
import { RecipesSkeleton } from "../components/Skeleton";

const Recipes = ({ categories }) => {
  const { name } = useParams();
  const [recipes, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  // get all the recipes information of a certain category
  const getRecipesCategory = useCallback(async () => {
    setLoading(true);
    try {
      const { meals } = await RecipeService.fetchRecipesCategory(name);
      setRecipe(meals);
    } catch (error) {
      console.error("Error getting recipes category", error);
    } finally {
      setLoading(false);
    }
  },[name]);

  useEffect(() => {
    getRecipesCategory();
  }, [getRecipesCategory]);

  // filter recipes by accending order and decending order
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
            {loading
              ? Array.from({ length: 4 }, (_, index) => (
                  <RecipesSkeleton key={index} />
                ))
              : recipes.map((recipe) => (
                  <RecipeList key={recipe.idMeal} recipe={recipe} />
                ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Recipes;
