import axios from "axios";

const RecipeService = {
  fetchRecipeCategories: async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      return response.data;
    } catch (error) {
      console.error("Error requesting skills", error);
      throw error;
    }
  },
  fetchRecipesCategory: async (categoryName) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
        return response.data
    } catch (error) {
      console.error("Error requesting recipes category", error)
      throw error;
    }
  },
  fetchRecipe: async (recipeId) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
        return response.data
    } catch (error) {
      console.error("Error requesting recipe", error)
      throw error;
    }
  },

};

export default RecipeService;
