import React, { useEffect, useState } from "react";
import RecipeService from "../service/service";
import "./pages.css";
import Logo from "../assets/logo.webp";

const categoryImage = (categoryName) => {
  switch (categoryName) {
    case "Beef":
      return "https://media.istockphoto.com/id/1358009037/photo/sliced-and-grilled-rib-eye-steak-rib-eye-beef-marbled-meat-on-a-wooden-board-wooden.jpg?s=612x612&w=0&k=20&c=wWPGdYCC0JiQzvzfrnDvGDZEXXuI5prsN-riMqd_vLE=";
    case "Chicken":
      return "https://img.taste.com.au/QIbeWRCQ/w720-h480-cfill-q80/taste/2021/05/one-pot-winter-chicken-171601-2.jpg";
    case "Dessert":
      return "https://img.bestrecipes.com.au/i9G5gwYE/w643-h428-cfill-q90/br/2019/04/frozen-golden-gaytime-cheesecake-951597-1.jpg";
    case "Lamb":
      return "https://www.southernliving.com/thmb/oF_OIWH6NvExm7DOCqf6czyO6rc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27322_WT_LegofLamb_20025-3acc9af4045446d089e8ba254ce816a6.jpg";
    case "Miscellaneous":
      return "https://food-images.files.bbci.co.uk/food/recipes/budget_beef_tacos_32412_16x9.jpg";
    case "Pasta":
      return "https://i.ytimg.com/vi/Fb_IljnhwTo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1dLlWUU6AkbOxnEOqAghAfsXCEg";
    case "Pork":
      return "https://img.taste.com.au/DzZTwETU/taste/2019/06/roast-pork-with-crispy-crackling-and-maple-mustard-pears-p50-150224-3.jpg";
    case "Seafood":
      return "https://www.foodandwine.com/thmb/i9SamRQmWvCB0uf-uHxRdIBG37o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cioppino-FT-RECIPE0521-4699a9c202574e5cb10232128b0aa90a.jpg";
    case "Side":
      return "https://womenchefs.org/wp-content/uploads/2023/08/Moroccan-Side-Dishes.jpg";
    case "Starter":
      return "https://media.riverford.co.uk/images/dish/starter-2324x1436-a02cb1f7b6f3ed071d866da35731b217.jpg";
    case "Vegan":
      return "https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Sunblush-tomato-paellla-dcf247c-scaled.jpg?quality=90&resize=700,466";
    case "Vegetarian":
      return "https://realfood.tesco.com/media/images/Veggie-rice-bowl-1400x919-mini-ba621247-21ff-419b-9604-3a27a255b90b-0-1400x919.jpg";
    case "Breakfast":
      return "https://www.foodandwine.com/thmb/OH220PwOZfcTiwuJzkvLANWHw1w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-bhurjee-FT-RECIPE0521-f9573d8c81bb4c9597a9621c0ac064ae.jpg";
    case "Goat":
      return "https://taste.co.za/wp-content/uploads/2021/10/Goat-and-cabbage-stew.jpg";
    default:
      return "";
  }
};

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
        <div className="categories">
          {categories.map((category) => (
            <div className="category">
              <div className="category__card" key={category.idCategory}>
                <img
                  src={categoryImage(category.strCategory)}
                  className="categories__img"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
