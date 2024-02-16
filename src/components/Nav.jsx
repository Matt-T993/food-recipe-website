import "./components.css";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo">
          <img className="logo__img" src={Logo} alt="" />
        </div>
        <input className="searchbar__input" placeholder="Search Meal" />
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
