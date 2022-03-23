import "./Navbar.css";
import React, { useEffect, useRef, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/Data-context";
import { useAuth } from "../../contexts/Auth-context";
import { actionTypes, filterActionType } from "../../reducers/actionTypes";

const Navbar = () => {
  const { state, dispatch } = useData();
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef("");

  useEffect(() => {
    setSearchInput("");
    dispatch({
      type: actionTypes.FILTER_CHANGE,
      payload: {
        filterType: filterActionType.SEARCH,
        filterValue: "",
      },
    });
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/");
  };

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      dispatch({
        type: actionTypes.FILTER_CHANGE,
        payload: {
          filterType: filterActionType.SEARCH,
          filterValue: e.target.value,
        },
      });
    }
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      dispatch({
        type: actionTypes.FILTER_CHANGE,
        payload: {
          filterType: filterActionType.SEARCH,
          filterValue: e.target.value,
        },
      });
      navigate("/products");
    } else if (e.type === "click") {
      dispatch({
        type: actionTypes.FILTER_CHANGE,
        payload: {
          filterType: filterActionType.SEARCH,
          filterValue: searchRef.current.value,
        },
      });
    }
  };

  return (
    <>
      <header className="Nav-header">
        <div className="brand-name">
          <Link to="/">ClothNest</Link>
        </div>

        <div className="searchbar">
          <label htmlFor="search" className="icon">
            <SearchOutlinedIcon
              className="mui-icon"
              onClick={(e) => searchHandler(e)}
            />
          </label>
          <input
            value={searchInput}
            ref={searchRef}
            type="text"
            name="search"
            id="search"
            placeholder="Search for Products, brands and more...."
            onChange={(e) => changeHandler(e)}
            onKeyDown={(e) => searchHandler(e)}
          />
        </div>

        <div className="action-container">
          {!token ? (
            <Link to="/login" className="btn-login">
              Login
            </Link>
          ) : (
            <button className="btn-logout" onClick={logoutHandler}>
              Logout
            </button>
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
