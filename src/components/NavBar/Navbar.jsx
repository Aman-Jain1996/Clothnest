import "./Navbar.css";
import React, { useEffect, useRef, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useData, useAuth } from "../../contexts";
import { actionTypes, filterActionType } from "../../reducers/actionTypes";

export const Navbar = () => {
  const { state, dispatch } = useData();
  const { token, activeUser, logoutHandler } = useAuth();
  const location = useLocation();
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
  }, [actionTypes.FILTER_CHANGE]);

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
      navigate("/products");
    }
  };

  return (
    <>
      <header className="Nav-header">
        <div className="brand-name">
          <Link to="/">ClothNest</Link>
        </div>

        {(location.pathname === "/" || location.pathname === "/products") && (
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
        )}

        <div className="action-container">
          {!activeUser ? (
            (location.pathname !== "/login" && (
              <Link to="/login" className="btn-login">
                Login
              </Link>
            )) ||
            (location.pathname === "/login" && (
              <Link to="/signUp" className="btn-login">
                SignUp
              </Link>
            ))
          ) : (
            <div className="logout-container">
              <button
                className="btn-logout"
                onClick={() => logoutHandler(dispatch)}
              >
                Logout
              </button>
              {activeUser && (
                <p className="userDetails-popup">Hi {activeUser.firstName}</p>
              )}
            </div>
          )}

          <span className="icon">
            <Link to="/wishlist">
              <div className="nav-label">
                <FavoriteBorderOutlinedIcon className="mui-icon" />
                {token ? (
                  <span className="nav-count">{state.wishlist.length}</span>
                ) : (
                  <span className="nav-count">0</span>
                )}
              </div>
              <label htmlFor="wishlist">Wishlist</label>
            </Link>
          </span>

          <span className="icon">
            <Link to="/cart">
              <div className="nav-label">
                <ShoppingCartOutlinedIcon className="mui-icon" />
                {token ? (
                  <span className="nav-count">{state.cart.length}</span>
                ) : (
                  <span className="nav-count">0</span>
                )}
              </div>
              <label htmlFor="cart">Cart</label>
            </Link>
          </span>
        </div>
      </header>
    </>
  );
};
