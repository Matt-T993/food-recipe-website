import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RecipeService from "../service/service";

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
        if(searchQuery.length === 1){
          const { meals } = await RecipeService.fetchSearchRecipes("f=" + searchQuery);
          setRecipes(meals || []);
        }else{
        const { meals } = await RecipeService.fetchSearchRecipes("s=" + searchQuery);
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
              <div className="category__choice" key={category.idCategory}>
                <p
                  onClick={() => navigate(`/recipes/${category.strCategory}`)}
                  className="category__choice--name"
                >
                  {category.strCategory}
                </p>
              </div>
            ))}
          </div>
          <h2>Search Results for: {searchQuery}</h2>
          <div className="recipes">
            {recipes.map((recipe) => (
              <div className="recipe" key={recipe.idMeal}>
                <Link to={`/recipes/${recipe.strCategory}/${recipe.idMeal}`}>
                  <div className="recipe__card">
                    <img
                      src={recipe.strMealThumb}
                      className="recipe__img"
                      alt=""
                    />
                    <p className="recipe__name">{recipe.strMeal}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchRecipes;
