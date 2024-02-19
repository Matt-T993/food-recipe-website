import React from 'react'

const RecipeBook = ({recipe, ingredients, steps}) => {
  return (
    <div className="recipe__content">
    <div className="recipe__content--left">
      <h2 className="recipe__content--name">{recipe.strMeal}</h2>
      <p className="recipe__content--info">
        Area: {recipe.strArea} | Category: {recipe.strCategory} | Tags:{" "}
        {recipe.strTags ? recipe.strTags : "No tags"}
      </p>
      <hr/>
      <h3 className="recipe__content--subtitle">Ingredients</h3>
      <ul className="ingredients">
        {ingredients.map((ingredient, index) => (
          <div className="ingredient__wrapper" key={index}>
            <li className="ingredient__item">{ingredient}</li>
          </div>
        ))}
      </ul>
      <hr/>
      <h3 className="recipe__content--subtitle">Instructions</h3>
      <ol className="steps">
        {steps.map((step, index) => (
          <li className="step" key={index}>
            {index + 1} . {step}
          </li>
        ))}
      </ol>
    </div>
    <div className="recipe__content--right">
      <hr/>
      <img src={recipe.strMealThumb} className="recipe__content--img" alt="" />
      <hr/>
    </div>
  </div>

  )
}

export default RecipeBook