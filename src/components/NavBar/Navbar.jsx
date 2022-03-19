import "./Navbar.css";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <header className="Nav-header">
        <div className="brand-name">
          <Link to="/">ClothNest</Link>
        </div>

        <div className="searchbar">
          <label for="search" className="icon">
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
          <a className="btn-login">Login</a>

          <span className="icon">
            <a>
              <FavoriteBorderOutlinedIcon className="mui-icon" />
              <label for="wishlist">Wishlist</label>
            </a>
          </span>

          <span className="icon">
            <a>
              <ShoppingCartOutlinedIcon className="mui-icon" />
              <label for="cart">Cart</label>
            </a>
          </span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
