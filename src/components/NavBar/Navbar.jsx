import "./Navbar.css";
import React, { useEffect, useRef, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useData, useAuth } from "../../contexts";
import { actionTypes, filterActionType } from "../../reducers/actionTypes";

export const Navbar = () => {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef("");

  const totalCartQuantity = state.cart.reduce((acc, cur) => acc + cur.qty, 0);

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
        <Link to="/">
          <div className="brand-name">
            <img
              className="brand-logo"
              src="https://res.cloudinary.com/ajain8479/image/upload/v1654931985/E-com%20Images/hztplzelzuaa4eqjbn75.png"
              alt="logo"
            />
          </div>
        </Link>

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
                  <span className="nav-count">{totalCartQuantity}</span>
                ) : (
                  <span className="nav-count">0</span>
                )}
              </div>
              <label htmlFor="cart">Cart</label>
            </Link>
          </span>

          {!token ? (
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
            <>
              <div
                className="profile-container"
                id="profile"
                title="My Profile"
                onClick={() => navigate("/profile/details")}
              >
                <AccountCircleIcon className="icon" />
                <label htmlFor="profile">My Profile</label>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};
