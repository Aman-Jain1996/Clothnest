import React from "react";
import "./Wishlistcard.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  useCartHandler,
  useWishlistHandler,
} from "../../customHooks/Customhooks";
import { useData, useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";

const Wishlistcard = ({ wishItem }) => {
  const { token } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();

  return (
    <div className="product-card wishlist-card ecom-card">
      <div className="card-image-container">
        <img src={wishItem.imageUrl} alt="Product Image" />
      </div>

      <span
        className="heart-icon-container"
        onClick={() => useWishlistHandler(wishItem, dispatch, token, navigate)}
      >
        {!wishItem.wished ? (
          <FavoriteBorderOutlinedIcon className="heart-icon" />
        ) : (
          <FavoriteIcon className="heart-icon favourite-icon" />
        )}
      </span>

      <div className="product-content-container">
        <p className="manufacturer">{wishItem.title}</p>

        <p className="price">
          {`₹ ${wishItem.sell_price}`}
          <span className="mrp">{`₹ ${wishItem.price}`}</span>
          <span className="discount">{`(${Math.ceil(
            ((wishItem.price - wishItem.sell_price) * 100) / wishItem.sell_price
          )}% Off)`}</span>
        </p>
      </div>

      <div className="action-container">
        <button
          className="btn"
          onClick={() =>
            useCartHandler(wishItem, dispatch, token, null, navigate)
          }
        >
          {!wishItem.carted ? "Move to Cart" : "Go to Cart"}
        </button>

        <button
          className="btn btn-tertiary"
          onClick={() =>
            useWishlistHandler(wishItem, dispatch, token, navigate)
          }
        >
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlistcard;
