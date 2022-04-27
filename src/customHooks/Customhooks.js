import { actionTypes } from "../reducers/actionTypes";
import {
  AddAddressServive,
  AddToCartService,
  AddToWishlistService,
  DeleteAddressServive,
  DeleteFromWishlistService,
  UpdateAddressServive,
} from "../services/apiCall.js";
import { useAuth, useData } from "../contexts";
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

export const useAddressHandler = () => {
  const { token } = useAuth();
  const { dispatch } = useData();

  const addAddress = async (address) => {
    try {
      const { status: addressStatus, data: addressData } =
        await AddAddressServive(address, token);

      if (addressStatus === 200 || addressStatus === 201)
        dispatch({
          type: actionTypes.SET_ADDRESS,
          payload: { address: addressData.address },
        });
      ToastHandler("success", "New Address added Successfully");
    } catch (err) {
      console.error(err);
      ToastHandler("error", "Add Address : Error occured");
    }
  };

  const removeAddress = async (addressId) => {
    try {
      const { status: addressStatus, data: addressData } =
        await DeleteAddressServive(addressId, token);

      if (addressStatus === 200 || addressStatus === 201)
        dispatch({
          type: actionTypes.SET_ADDRESS,
          payload: { address: addressData.address },
        });
      ToastHandler("warn", "Address removed Successfully");
    } catch (err) {
      console.error(err);
      ToastHandler("error", "Remove Address : Error occured");
    }
  };

  const updateAddress = async (addressId, address) => {
    try {
      const { status: addressStatus, data: addressData } =
        await UpdateAddressServive(addressId, address, token);

      if (addressStatus === 200 || addressStatus === 201)
        dispatch({
          type: actionTypes.SET_ADDRESS,
          payload: { address: addressData.address },
        });

      if (addressStatus === 200 || addressStatus === 201)
        dispatch({
          type: actionTypes.SET_ADDRESS,
          payload: { address: addressData.address },
        });
      ToastHandler("success", "Address updated Successfully");
    } catch (err) {
      console.error(err);
      ToastHandler("error", "Update Address : Error occured");
    }
  };

  return { addAddress, removeAddress, updateAddress };
};
