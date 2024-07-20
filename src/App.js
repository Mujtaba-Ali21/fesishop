import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import MenShirts from "./components/MenShirts";
import WomenShirts from "./components/WomenShirts";
import KidsShirts from "./components/KidsShirts";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import About from "./components/About";

import "./styles/app.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/men-shirts" element={<MenShirts />} />
          <Route path="/women-shirts" element={<WomenShirts />} />
          <Route path="/kids-shirts" element={<KidsShirts />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to={"/home"} replace />} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
