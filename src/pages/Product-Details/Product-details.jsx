import React, { useEffect, useState } from "react";
import "./Product-details.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useData, useAuth } from "../../contexts";
import {
  useCartHandler,
  useWishlistHandler,
} from "../../customHooks/Customhooks";
import { Authmodal, Path } from "../../components";

export const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch, setLoader } = useData();
  const { token, activeUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const currentProduct = state.products.find((prod) => prod._id === id) || {};

  useEffect(() => {
    setLoader(true);
    const id = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div>
      {showAuthModal && (
        <Authmodal
          path={location.pathname}
          setShowAuthModal={setShowAuthModal}
          navigate={navigate}
        />
      )}
      <div className="cart-wish-path">
        <Path path={`/Products/${currentProduct.title}`} />
      </div>
      <main className="product-details-main">
        <section className="product-details">
          <div className="details-image-container">
            <img src={currentProduct.imageUrl} alt="product-image" />
            <span
              className="heart-icon-container"
              onClick={() =>
                useWishlistHandler(
                  currentProduct,
                  dispatch,
                  activeUser,
                  setShowAuthModal
                )
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
                <span>{currentProduct.desc}</span>
              </p>
            </div>
            <div className="button-container">
              <button
                className="btn cart"
                onClick={() =>
                  useCartHandler(
                    currentProduct,
                    dispatch,
                    activeUser,
                    setShowAuthModal,
                    navigate
                  )
                }
              >
                {currentProduct.carted ? "Go to Cart" : "Add to Cart"}
              </button>
              <button
                className="btn wishlist"
                onClick={() =>
                  useWishlistHandler(
                    currentProduct,
                    dispatch,
                    activeUser,
                    setShowAuthModal
                  )
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
