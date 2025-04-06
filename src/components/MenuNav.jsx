import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuNav = ({
  handleSearch,
  closeMenu,
  setSearchQuery,
  searchQuery,
  categories = [],
}) => {
  const [showCategorySubmenu, setShowCategorySubmenu] = useState(false);

  const handleLinkClick = () => {
    setShowCategorySubmenu(false);
    closeMenu();
  };

  return (
    <div className="menu__backdrop">
      <button className="btn__menu btn__menu--close" onClick={closeMenu}>
        <FaTimes />
      </button>
      <ul className="menu__links">
        <form className="menu__form" onSubmit={handleSearch}>
          <input
            className="searchbar__input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Recipes..."
          />
        </form>

        <li className="menu__list">
          <Link to="/" className="menu__link" onClick={handleLinkClick}>
            Home
          </Link>
        </li>

        <li className="menu__list">
          <div
            className={`menu__link ${showCategorySubmenu ? "active" : ""}`}
            onClick={() => setShowCategorySubmenu((prev) => !prev)}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Categories</span>
            <span style={{ fontSize: "24px", marginLeft: "8px" }}>
              {showCategorySubmenu ? "–" : "+"}
            </span>
          </div>

          {categories.length > 0 && (
            <ul
              className={`submenu__list ${
                showCategorySubmenu ? "submenu__list--open" : ""
              }`}
            >
              <li className="submenu__item">
                <Link
                  to="/categories"
                  className="submenu__link"
                  onClick={handleLinkClick}
                >
                  All Categories
                </Link>
              </li>

              {categories.map((category, index) => (
                <li key={index} className="submenu__item">
                  <Link
                    to={`/categories/${category.strCategory || category}`}
                    className="submenu__link"
                    onClick={handleLinkClick}
                  >
                    {category.strCategory || category}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MenuNav;
