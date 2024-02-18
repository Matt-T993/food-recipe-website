import { useState } from "react";
import Logo from "../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault(); 
    navigate(`/search?query=${searchQuery}`); 
  };
  return (
    <nav>
      <div className="nav__container">
        <div className="logo">
         <Link to={"/"}>
          <img className="logo__img" src={Logo} alt="" />
          </Link>
        </div>
        <form onSubmit={handleSearch}>
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
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
