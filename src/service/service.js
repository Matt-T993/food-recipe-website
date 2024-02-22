import axios from "axios";

// Base URL for TheMealDB API
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// fetch the recipe infomation
const RecipeService = {
  // fetch the recipe categories
  fetchRecipeCategories: async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/categories.php`
      );
      return response.data;
    } catch (error) {
      console.error("Error requesting skills", error);
      throw error;
    }
  },
    // fetch the recipes category 
  fetchRecipesCategory: async (categoryName) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/filter.php?c=${categoryName}`
      );
        return response.data
    } catch (error) {
      console.error("Error requesting recipes category", error)
      throw error;
    }
  },
    // fetch the recipe
  fetchRecipe: async (recipeId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/lookup.php?i=${recipeId}`
      );
        return response.data
    } catch (error) {
      console.error("Error requesting recipe", error)
      throw error;
    }
  },
    // fetch the search recipe
    fetchSearchRecipes: async (searchQuery) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/search.php?${searchQuery}`);
        return response.data;
      } catch (error) {
        console.error("Error searching for recipes:", error);
        throw error;
      }
    },

};

export default RecipeService;
