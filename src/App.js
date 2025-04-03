import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Nav from "./components/Nav";
import RecipeService from "./service/service";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Recipes = lazy(() => import("./pages/Recipes"));
const Recipe = lazy(() => import("./pages/Recipe"));
const Categories = lazy(() => import("./pages/Categories"));
const SearchRecipes = lazy(() => import("./pages/SearchRecipes"));

function App() {
  const [categories, setCategories] = useState([]);

  // Fetch recipe categories
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
        <Suspense fallback={<div className="loading">Loading...</div>}>
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
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
