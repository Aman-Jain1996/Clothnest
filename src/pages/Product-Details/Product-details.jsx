import React from "react";
import "./Product-details.css";
import Navbar from "../../components/NavBar/Navbar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../contexts/Data-context";
import { useAuth } from "../../contexts/Auth-context";
import {
  useCartHandler,
  useWishlistHandler,
} from "../../customHooks/Customhooks";

const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const currentProduct = state.products.find((prod) => prod._id === id);

  return (
    <div>
      <Navbar />
      <main className="product-details-main">
        <section className="product-details">
          <div className="details-image-container">
            <img src={currentProduct.imageUrl} alt="product-image" />
            <span
              className="heart-icon-container"
              onClick={() =>
                useWishlistHandler(currentProduct, dispatch, token)
              }
            >
              {!currentProduct.wished ? (
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              ) : (
                <FavoriteIcon className="heart-icon favourite-icon" />
              )}
            </span>
          </div>

          <div className="content">
            <p className="product-name">{currentProduct.title}</p>
            <p className="product-reviews">4 reviews</p>
            <p className="product-price">{`₹ ${currentProduct.sell_price}`} </p>
            <p className="horizontal-rule"></p>
            <div className="description">
              <p className="brand">
                <span>Brand :</span>
                Lorem
              </p>
              <p className="brand">
                <span>Availability :</span>
                In Stock
              </p>
              <p className="brand">
                <span>Description :</span>
                <p>{currentProduct.desc}</p>
              </p>
            </div>
            <div className="button-container">
              <button
                className="btn cart"
                onClick={() =>
                  useCartHandler(currentProduct, dispatch, token, navigate)
                }
              >
                {currentProduct.carted ? "Go to Cart" : "Add to Cart"}
              </button>
              <button
                className="btn wishlist"
                onClick={() =>
                  useWishlistHandler(currentProduct, dispatch, token)
                }
              >
                {currentProduct.wished
                  ? "Remove from wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
