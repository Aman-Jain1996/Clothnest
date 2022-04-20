import { actionTypes } from "../reducers/actionTypes";
import {
  AddToCartService,
  AddToWishlistService,
  DeleteFromWishlistService,
} from "../services/apiCall.js";
import { ToastHandler } from "../utilities/toastUtils";

export const useWishlistHandler = async (
  product,
  dispatch,
  activeUser,
  setShowAuthModal
) => {
  try {
    if (!activeUser) {
      setShowAuthModal(true);
      return;
    }
    let res = null;
    if (!product.wished) {
      res = await AddToWishlistService(product, token);
      ToastHandler("success", "Added to Wishlist");
    } else {
      res = await DeleteFromWishlistService(product._id, token);
      ToastHandler("warn", "Item Removed from Wishlist");
    }

    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: actionTypes.SET_WISHLIST,
        payload: { wishlist: res.data.wishlist },
      });
    }
  } catch (err) {
    ToastHandler("error", err);
    console.error(err);
  }
};

export const useCartHandler = async (
  product,
  dispatch,
  activeUser,
  setShowAuthModal,
  navigate
) => {
  try {
    if (!activeUser) {
      setShowAuthModal(true);
      return;
    }

    if (product.carted) {
      navigate("/cart");
      return;
    }

    let res = await AddToCartService({ ...product, qty: 1 }, token);

    if (res.status === 200 || res.status === 201) {
      ToastHandler("success", "Item added to Cart");
      dispatch({
        type: actionTypes.SET_CART,
        payload: { cart: res.data.cart },
      });
    }
  } catch (err) {
    ToastHandler("error", err);
    console.error(err);
  }
};
