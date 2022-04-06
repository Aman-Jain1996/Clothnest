import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth-context";
import { useData } from "../../contexts/Data-context";
import { useWishlistHandler } from "../../customHooks/Customhooks";
import { actionTypes, cartActionTypes } from "../../reducers/actionTypes";
import {
  DeleteFromCartService,
  QuantityChangeService,
} from "../../services/apiCall";
import "./Cartcard.css";

const Cartcard = ({ cartItem }) => {
  const { token } = useAuth();
  const { state, dispatch } = useData();

  const [{ wished }] = state.products.filter(
    (wish) => wish._id === cartItem._id
  );

  cartItem.wished = wished;

  const deleteCartHandler = async () => {
    try {
      const { data, status } = await DeleteFromCartService(cartItem._id, token);

      if (status === 200 || status === 201) {
        dispatch({
          type: actionTypes.SET_CART,
          payload: { cart: data.cart },
        });
      }
    } catch (err) {
      console.log(err);
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
        dispatch({
          type: actionTypes.SET_CART,
          payload: { cart: data.cart },
        });
      }
    } catch (err) {
      console.log(err);
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
        dispatch({
          type: actionTypes.SET_CART,
          payload: { cart: data.cart },
        });
      }
    } catch (err) {
      console.log(err);
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
              onClick={() => useWishlistHandler(cartItem, dispatch, token)}
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
