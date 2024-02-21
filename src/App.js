import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Categories from "./pages/Categories";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import RecipeService from "./service/service";
import SearchRecipes from "./pages/SearchRecipes";

function App() {
  const [categories, setCategories] = useState([]);


  // get the recipe categories
  const getRecipeCategories = async () => {
    try {
      const { categories } = await RecipeService.fetchRecipeCategories();
      setCategories(categories);
    } catch (error) {
      console.error("Error getting recipe categories", error);
    }
  };
  useEffect(() => {
    getRecipeCategories();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recipes/:name"
            element={<Recipes categories={categories} />}
          />
          <Route path="/recipes/:name/:id" element={<Recipe />} />
          <Route
            path="/categories"
            element={<Categories categories={categories} />}
          />
          <Route
            path="/search"
            element={<SearchRecipes categories={categories} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
