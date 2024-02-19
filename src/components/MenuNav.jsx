import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuNav = ({ handleSearch, closeMenu, setSearchQuery, searchQuery }) => {
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
          <Link to="/" className="menu__link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="menu__list">
          <Link to="/categories" className="menu__link" onClick={closeMenu}>
            Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuNav;
