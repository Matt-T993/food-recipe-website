import "./pages.css";
import Logo from "../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section id="home">
      <div className="home__container">
        <div className="home__left">
          <img
            className="home__img"
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="home__right">
          <img src={Logo} className="home__img--logo" alt="" />
          <div className="home__right--bottom">
            <h1 className="home__right--slogan">
              We Publish Only the Best Popular Recipe For You!
            </h1>

            <button
              onClick={() => navigate("/categories")}
              className="btn home__btn"
            >
              Find My Recipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
