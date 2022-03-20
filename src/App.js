import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Product/Products";
import ProductDetails from "./pages/Product-Details/Product-details";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
