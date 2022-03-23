import { actionTypes } from "../reducers/actionTypes";
import {
  AddToCartService,
  AddToWishlistService,
  DeleteFromWishlistService,
} from "../services/apiCall.js";

export const useWishlistHandler = async (
  product,
  dispatch,
  token,
  navigate
) => {
  try {
    if (!token) {
      navigate("/login");
      return;
    }

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

export const useCartHandler = async (product, dispatch, token, navigate) => {
  try {
    if (!token) {
      navigate("/login");
      return;
    }

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
