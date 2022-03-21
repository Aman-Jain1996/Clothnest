import "./Navbar.css";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation, Link } from "react-router-dom";
import { useData } from "../../contexts/Data-context";
import { useAuth } from "../../contexts/Auth-context";

const Navbar = () => {
  const location = useLocation();
  const { state } = useData();
  const { token } = useAuth();
  return (
    <>
      <header className="Nav-header">
        <div className="brand-name">
          <Link to="/">ClothNest</Link>
        </div>

        <div className="searchbar">
          <label htmlFor="search" className="icon">
            <SearchOutlinedIcon className="mui-icon" />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for Products, brands and more...."
          />
        </div>

        <div className="action-container">
          {!token ? (
            <Link to="/login" className="btn-login">
              Login
            </Link>
          ) : (
            <button class="btn-logout">Logout</button>
          )}

          <span className="icon">
            <Link to="/wishlist">
              <div className="nav-label">
                <FavoriteBorderOutlinedIcon className="mui-icon" />
                <span className="nav-count">{state.wishlist.length}</span>
              </div>
              <label htmlFor="wishlist">Wishlist</label>
            </Link>
          </span>

          <span className="icon">
            <Link to="/cart">
              <div className="nav-label">
                <ShoppingCartOutlinedIcon className="mui-icon" />
                <span className="nav-count">{state.cart.length}</span>
              </div>
              <label htmlFor="cart">Cart</label>
            </Link>
          </span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
