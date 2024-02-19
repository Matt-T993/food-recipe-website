import "./pages.css";

import Category from "../components/Category";

const Categories = ({ categories }) => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="categories__title">Categories</h1>
        <hr />
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
