import React from "react";
import { useNavigate } from "react-router";

const CategoryChoices = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className="category__choice">
      <p
        onClick={() => navigate(`/recipes/${category.strCategory}`)}
        className="category__choice--name"
      >
        {category.strCategory}
      </p>
    </div>
  );
};

export default CategoryChoices;
