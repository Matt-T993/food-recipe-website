import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecipeService from "../service/service";
import RecipeList from "../components/RecipeList";
import CategoryChoices from "../components/ui/CategoryChoices";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const SearchRecipes = ({ categories }) => {
  const query = useQuery();
  const searchQuery = query.get("query");
  console.log(searchQuery.length);
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  const fetchSearchResults = async () => {
    if (searchQuery) {
      try {
        if (searchQuery.length === 1) {
          const { meals } = await RecipeService.fetchSearchRecipes(
            "f=" + searchQuery
          );
          setRecipes(meals || []);
        } else {
          const { meals } = await RecipeService.fetchSearchRecipes(
            "s=" + searchQuery
          );
          setRecipes(meals || []);
        }
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    }
  };
  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <header id="recipes">
      <div className="container">
        <div className="row">
          <div className="category__choices">
            {categories.map((category) => (
              <CategoryChoices category={category} />
            ))}
          </div>
          <h1>Search Results for: {searchQuery}</h1>
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

export default SearchRecipes;
