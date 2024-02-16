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
};

export default RecipeService;
