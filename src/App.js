import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Product/Products";
import ProductDetails from "./pages/Product-Details/Product-details";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Mockman from "mockman-js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
