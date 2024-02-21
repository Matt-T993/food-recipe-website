import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeService from "../service/service";
import "./pages.css";
import Ingredients from "../components/ui/Ingredients";
import Step from "../components/ui/Step";
import PacmanLoader from "react-spinners/PacmanLoader";
import { FcStart } from "react-icons/fc";
import Modal from "../components/Modal";

const override = {
  display: "block",
  margin: "80px auto",
  color: "red",
};
const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // trigger the modal to open
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // get the information a certain recipe
  const getRecipe = useCallback(async () => {
    try {
      const { meals } = await RecipeService.fetchRecipe(id);
      setRecipe(meals[0]);
    } catch (error) {
      console.error("Error getting recipe", error);
    }
  }, [id]);

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);

  // get the ingredient names and their measurements
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      //retrieves the key names for ingredients and measurements based on the current index
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      // check if the current ingredient exists and is not just an empty string
      if (recipe[ingredientKey] && recipe[ingredientKey].trim() !== "") {
        const ingredient =
          `${recipe[measureKey]} ${recipe[ingredientKey]}`.trim();
        ingredients.push(ingredient);
      } else {
        // stop the loop if empty
        break;
      }
    }

    return ingredients;
  };

  // splits instructions into an array and remove extra whitespace.
  const formatInstructions = (instructions) => {
    return instructions.split("\r\n").filter((line) => line.trim() !== "");
  };

  if (!recipe) {
    return (
      <PacmanLoader
        color={"#FFFF00"}
        className="loading"
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  const ingredients = getIngredients();
  const steps = formatInstructions(recipe.strInstructions);

  return (
    <div className="container">
      <div className="row">
        <div className="recipe__wrapper">
          <div className="recipe__content">
            <div className="recipe__content--title">
              <h2 className="recipe__content--name">{recipe.strMeal}</h2>
              <hr />
            </div>
            <div className="recipe__img--wrapper" onClick={handleOpenModal}>
              <img
                src={recipe.strMealThumb}
                className="recipe__content--img"
                alt=""
              />
              <FcStart className="start__button" />
            </div>
            <p className="recipe__content--info">
              Area: {recipe.strArea} | Category: {recipe.strCategory} | Tags:{" "}
              {recipe.strTags ? recipe.strTags : "No tags"}
            </p>
            <hr />
            <div className="recipe__info">
              <Ingredients recipe={recipe} ingredients={ingredients} />
              <Step steps={steps} />
            </div>
          </div>
        </div>
        {showModal && (
          <Modal recipeVideo={recipe?.strYoutube} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Recipe;
