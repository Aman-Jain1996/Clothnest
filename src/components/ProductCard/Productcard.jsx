import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Productcard.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/Data-context";
import { actionTypes } from "../../reducers/actionTypes";
import { useAuth } from "../../contexts/Auth-context";
import {
  AddToCartService,
  AddToWishlistService,
  DeleteFromWishlistService,
} from "../../services/apiCall";

const Productcard = ({ product }) => {
  const { token } = useAuth();
  const { state, dispatch, loader, setLoader } = useData();
  const navigate = useNavigate();

  const wishlsitClickHandler = async () => {
    try {
      let res = null;
      if (!product.wished) {
        res = await AddToWishlistService(product, token);
      } else {
        res = await DeleteFromWishlistService(product._id, token);
      }

      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: actionTypes.SET_WISHLIST,
          payload: { wishlist: res.data.wishlist },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cartClickHandler = async () => {
    try {
      if (product.carted) {
        navigate("/cart");
        return;
      }

      let res = await AddToCartService({ ...product, qty: 1 }, token);

      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: actionTypes.SET_CART,
          payload: { cart: res.data.cart },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product-card ecom-card">
      <div className="card-image-container">
        <Link to={`/products/${product._id}`}>
          <img src={product.imageUrl} alt="Product Image" />
        </Link>
      </div>

      {product.newArrival && <p className="badge-item">New Arrival</p>}

      {product.trending && <p className="badge-item">Trending</p>}

      <span className="heart-icon-container" onClick={wishlsitClickHandler}>
        {!product.wished ? (
          <FavoriteBorderOutlinedIcon className="heart-icon" />
        ) : (
          <FavoriteIcon className="heart-icon favourite-icon" />
        )}
      </span>
      <div className="product-content-container">
        <div className="rating-category-container">
          <p className="rating">
            {product.rating}
            <span className="rating-icon">
              <StarOutlinedIcon />
            </span>
          </p>

          <p className="rating category-container">{product.categoryName}</p>
        </div>

        <p className="item-name">{product.title}</p>

        <p className="price">
          {`₹ ${product.sell_price}`}
          <span className="mrp">{`₹ ${product.price}`}</span>
          <span className="discount">{`(${Math.ceil(
            ((product.price - product.sell_price) * 100) / product.sell_price
          )}% Off)`}</span>
        </p>
      </div>

      <div className="btn-action-container">
        {!product.carted ? (
          <button className="btn btn-primary" onClick={cartClickHandler}>
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={cartClickHandler}>
            Go to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Productcard;
