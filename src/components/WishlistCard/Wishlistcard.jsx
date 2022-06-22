import React from "react";
import "./Wishlistcard.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  useCartHandler,
  useWishlistHandler,
} from "../../customHooks/Customhooks";
import { useNavigate } from "react-router-dom";

export const Wishlistcard = ({ wishItem }) => {
  const navigate = useNavigate();
  const { toggleWishlist } = useWishlistHandler();
  const { addToCart } = useCartHandler();

  return (
    <div className="product-card wishlist-card ecom-card">
      <div
        className="card-image-container"
        onClick={() => navigate(`/products/${wishItem._id}`)}
      >
        <img src={wishItem.imageUrl} alt="Product Image" />
      </div>

      <span
        className="heart-icon-container"
        onClick={() => toggleWishlist(wishItem)}
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
            ((wishItem.price - wishItem.sell_price) * 100) / wishItem.price
          )}% Off)`}</span>
        </p>
      </div>

      <div className="action-container">
        <button className="btn" onClick={() => addToCart(wishItem)}>
          {!wishItem.carted ? "Move to Cart" : "Go to Cart"}
        </button>

        <button
          className="btn btn-tertiary"
          onClick={() => toggleWishlist(wishItem)}
        >
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
};
