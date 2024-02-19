import React from "react";
import { Link } from "react-router-dom";
import Beef from "../assets/foodImage/Beef.jpeg";
import Chicken from "../assets/foodImage/chicken.jpeg";
import Dessert from "../assets/foodImage/dessert.jpeg";
import Lamb from "../assets/foodImage/lamb.jpeg";
import Miscellaneous from "../assets/foodImage/miscellaneous.jpeg";
import Pasta from "../assets/foodImage/pasta.jpeg";
import Pork from "../assets/foodImage/pork.jpeg";
import Seafood from "../assets/foodImage/seafood.jpeg";
import Side from "../assets/foodImage/side.webp";
import Starter from "../assets/foodImage/starter.webp";
import Vegan from "../assets/foodImage/vegan.jpeg";
import Vegetarian from "../assets/foodImage/vegetarian.jpeg";
import Breakfast from "../assets/foodImage/breakfast.jpeg";
import Goat from "../assets/foodImage/goat.jpeg";

const categoryImage = (categoryName) => {
  switch (categoryName) {
    case "Beef":
      return Beef;
    case "Chicken":
      return Chicken;
    case "Dessert":
      return Dessert;
    case "Lamb":
      return Lamb;
    case "Miscellaneous":
      return Miscellaneous;
    case "Pasta":
      return Pasta;
    case "Pork":
      return Pork;
    case "Seafood":
      return Seafood;
    case "Side":
      return Side;
    case "Starter":
      return Starter;
    case "Vegan":
      return Vegan;
    case "Vegetarian":
      return Vegetarian;
    case "Breakfast":
      return Breakfast;
    case "Goat":
      return Goat;
    default:
      return "";
  }
};

const Category = ({ category }) => {
  return (
    <div className="category">
      <Link to={`/recipes/${category.strCategory}`}>
        <figure className="category__card" key={category.idCategory}>
          <img
            src={categoryImage(category.strCategory)}
            className="categories__img"
            alt=""
          />
          <p className="category__name">{category.strCategory}</p>
        </figure>
      </Link>
    </div>
  );
};

export default Category;
