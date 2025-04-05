import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import RecipeService from "./service/service";

// Directly import pages
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Categories from "./pages/Categories";
import SearchRecipes from "./pages/SearchRecipes";

function App() {
  const [categories, setCategories] = useState([]);

  // Fetch recipe categories
  const getRecipeCategories = async () => {
    try {
      const { categories } = await RecipeService.fetchRecipeCategories();
      console.log(categories);
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
