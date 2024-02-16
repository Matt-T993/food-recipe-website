import React, { useEffect, useState } from "react";
import RecipeService from "../service/service";
import "./pages.css";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import Category from "../components/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getRecipeCategories = async () => {
    try {
      const { categories } = await RecipeService.fetchRecipeCategories();
      setCategories(categories);
      console.log(categories);
    } catch (error) {
      console.error("Error getting recipe categories", error);
    }
  };

  useEffect(() => {
    getRecipeCategories();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h1 className="categories__title">Categories</h1>
        <div className="categories">
          {categories.map((category) => (
            <Category key={category.idCategory} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
