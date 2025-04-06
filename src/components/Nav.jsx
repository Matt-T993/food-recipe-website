import { useState } from "react";
import Logo from "../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MenuNav from "./MenuNav";

const Nav = ({ categories }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const openMenu = () => {
    document.body.classList.add("menu--open");
  };

  const closeMenu = () => {
    console.log("Closing menu");
    document.body.classList.remove("menu--open");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    closeMenu();
    setSearchQuery("");
  };

  return (
    <nav>
      <div className="nav__container">
        <div className="logo">
          <Link to={"/"}>
            <img className="logo__img" src={Logo} alt="" />
          </Link>
        </div>
        <form className="nav__form" onSubmit={handleSearch}>
          <input
            className="searchbar__input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Recipes..."
          />
        </form>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/categories" className="nav__link">
              Categories
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FaBars />
          </button>
          <MenuNav
            searchQuery={searchQuery}
            handleSearch={handleSearch}
            closeMenu={closeMenu}
            setSearchQuery={setSearchQuery}
            categories={categories}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
