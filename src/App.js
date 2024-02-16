import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Categories from "./pages/Categories";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:name" element={<Recipes />} />
          <Route path="/recipes:id" element={<Recipe />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
