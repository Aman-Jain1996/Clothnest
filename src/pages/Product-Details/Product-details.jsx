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
import { FetchProductDetailsService } from "../../services/apiCall";
import { ToastHandler } from "../../utilities/toastUtils";

export const ProductDetails = () => {
  const { id } = useParams();
  const { state, setLoader } = useData();
  const { toggleWishlist } = useWishlistHandler();
  const { addToCart } = useCartHandler();
  const location = useLocation();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showData, setShowData] = useState();

  useEffect(() => {
    setLoader(true);
    (async () => {
      try {
        const { status, data } = await FetchProductDetailsService(id);
        if (status === 200 || status === 201) {
          setShowData(data.product);
        }
      } catch (err) {
        ToastHandler("error", "Error in Fetching Product");
        console.error(err);
      }
    })();
    const timerId = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [id]);

  return (
    <div>
      {showAuthModal && (
        <Authmodal
          path={location.pathname}
          setShowAuthModal={setShowAuthModal}
          navigate={navigate}
        />
      )}
      {showData && (
        <>
          <div className="cart-wish-path">
            <Path path={`/Products/${showData.title}`} />
          </div>
          <main className="product-details-main">
            <section className="product-details">
              <div className="details-image-container">
                <img src={showData.imageUrl} alt="product-image" />
                <span
                  className="heart-icon-container"
                  onClick={() => toggleWishlist(showData)}
                >
                  {!showData.wished ? (
                    <FavoriteBorderOutlinedIcon className="heart-icon" />
                  ) : (
                    <FavoriteIcon className="heart-icon favourite-icon" />
                  )}
                </span>
              </div>

              <div className="content">
                <p className="product-name">{showData.title}</p>
                <p className="product-reviews">4 reviews</p>
                <p className="product-price">{`₹ ${showData.sell_price}`} </p>
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
                    <span>{showData.desc}</span>
                  </p>
                </div>
                <div className="button-container">
                  <button
                    className="btn cart"
                    onClick={() => addToCart(showData)}
                  >
                    {showData.carted ? "Go to Cart" : "Add to Cart"}
                  </button>
                  <button
                    className="btn wishlist"
                    onClick={() => toggleWishlist(showData)}
                  >
                    {showData.wished
                      ? "Remove from wishlist"
                      : "Add to Wishlist"}
                  </button>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
};
