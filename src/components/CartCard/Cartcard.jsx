import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData, useAuth } from "../../contexts";
import { useWishlistHandler } from "../../customHooks/Customhooks";
import { actionTypes, cartActionTypes } from "../../reducers/actionTypes";
import {
  DeleteFromCartService,
  QuantityChangeService,
} from "../../services/apiCall";
import { ToastHandler } from "../../utilities/toastUtils";
import "./Cartcard.css";

const Cartcard = ({ cartItem }) => {
  const { token } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const [{ wished }] = state.products.filter(
    (wish) => wish._id === cartItem._id
  );

  cartItem.wished = wished;

  const deleteCartHandler = async () => {
    try {
      const { data, status } = await DeleteFromCartService(cartItem._id, token);
      ToastHandler("success", "Item removed from Cart");

      if (status === 200 || status === 201) {
        dispatch({
          type: actionTypes.SET_CART,
          payload: { cart: data.cart },
        });
      }
    } catch (err) {
      ToastHandler("error", "Some error occured");
    }
  };

  const incrementQtyHandler = async () => {
    try {
      const { status, data } = await QuantityChangeService(
        cartItem._id,
        token,
        {
          type: cartActionTypes.QTY_INCREMENT,
        }
      );

      if (status === 200 || status === 201) {
        ToastHandler("success", "Item quantity incremented");
        dispatch({
          type: actionTypes.SET_CART,
          payload: { cart: data.cart },
        });
      }
    } catch (err) {
      ToastHandler("error", "Some error occured");
    }
  };

  const decrementQtyHandler = async () => {
    try {
      if (cartItem.qty === 1) {
        deleteCartHandler();
        return;
      }
      const { status, data } = await QuantityChangeService(
        cartItem._id,
        token,
        {
          type: cartActionTypes.QTY_DECREMENT,
        }
      );

      if (status === 200 || status === 201) {
        ToastHandler("success", "Item quantity decremented");
        dispatch({
          type: actionTypes.SET_CART,
          payload: { cart: data.cart },
        });
      }
    } catch (err) {
      ToastHandler("error", "Some error occured");
    }
  };

  return (
    <div className="product">
      <div className="product-img">
        <img src={cartItem.imageUrl} alt="product image" />
      </div>
      <div className="product-content">
        <h4 className="product-name">{cartItem.title}</h4>
        <div className="price">
          <p className="sell-price">{`₹ ${cartItem.sell_price}`}</p>
          <p className="cost-price">{`₹ ${cartItem.price}`}</p>
        </div>
        <div className="discount">{`(${Math.ceil(
          ((cartItem.price - cartItem.sell_price) * 100) / cartItem.sell_price
        )}% Off)`}</div>
        <div className="quantity">
          <label>Quantity:</label>
          <div className="quantity-container">
            <div className="plus" onClick={incrementQtyHandler}>
              +
            </div>
            <div className="qty">{cartItem.qty}</div>
            <div className="minus" onClick={decrementQtyHandler}>
              -
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={deleteCartHandler}>
            Remove from Cart
          </button>
          {cartItem.wished ? (
            <Link to="/wishlist">
              <button className="btn btn-tertiary">Go to Wishlist</button>
            </Link>
          ) : (
            <button
              className="btn btn-tertiary"
              onClick={() =>
                useWishlistHandler(cartItem, dispatch, token, navigate)
              }
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
