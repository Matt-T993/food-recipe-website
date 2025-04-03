import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link } from "react-router-dom";

const RecipeList = ({ recipe }) => {
  return (
    <div className="recipe">
      <Link to={`${recipe.idMeal}`}>
        <div className="recipe__card">
          <LazyLoadImage
            src={recipe.strMealThumb}
            className="recipe__img"
            alt=""
            effect="blur"
          />
          <p className="recipe__name">{recipe.strMeal}</p>
        </div>
      </Link>
    </div>
  );
};

export default RecipeList;
