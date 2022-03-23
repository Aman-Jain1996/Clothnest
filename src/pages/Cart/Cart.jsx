import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Cart.css";
import emptyCart from "../../assets/images/empty-cart.svg";
import { useData } from "../../contexts/Data-context";
import { useAuth } from "../../contexts/Auth-context";
import Cartcard from "../../components/CartCard/Cartcard";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const CartList = [...state.cart];
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
      return null;
    }
  }, [token]);

  const totalQuantity = state.cart.reduce((acc, cur) => acc + cur.qty, 0);

  const totalCostPrice = state.cart.reduce(
    (acc, cur) => acc + cur.qty * cur.price,
    0
  );

  const totalSellPrice = state.cart.reduce(
    (acc, cur) => acc + cur.qty * cur.sell_price,
    0
  );

  const totalDiscount = totalCostPrice - totalSellPrice;

  const totalAmount = totalCostPrice - totalDiscount + 499;

  return (
    <div>
      <Navbar />
      <h3 className="main-heading">My Cart ({totalQuantity} items)</h3>
      <main>
        {CartList.length !== 0 ? (
          <div className="cart-main">
            <section className="cart-section">
              {CartList.map((item) => (
                <Cartcard key={item._id} cartItem={item} />
              ))}
            </section>

            <aside className="cart-summary">
              <h3 className="summary-heading">Cart Summary</h3>

              <div className="horizontal-rule"></div>
              <div className="pricing-details">
                <div className="summary-items">
                  <label htmlFor="">Price ({totalQuantity} items)</label>
                  <p>{`₹ ${totalCostPrice}`}</p>
                </div>
                <div className="summary-items">
                  <label htmlFor="">Total Discount</label>
                  <p>- {`₹ ${totalDiscount}`}</p>
                </div>
                <div className="summary-items">
                  <label htmlFor="">Delivery Charges</label>
                  <p>+ ₹ 499</p>
                </div>
              </div>

              <div className="horizontal-rule"></div>

              <div className="final-amount">
                <div className="summary-items">
                  <label htmlFor="">Total Amount</label>
                  <p>{`₹ ${totalAmount}`}</p>
                </div>

                <p className="savings">
                  {" "}
                  Congrats ! You have saved {`₹ ${totalDiscount}`} on this order{" "}
                </p>
              </div>

              <div className="horizontal-rule"></div>

              <button className="btn btn-primary">Place Order</button>
            </aside>
          </div>
        ) : (
          <div className="no-item">
            <img className="empty-image" alt="empty wishlist" src={emptyCart} />
            <span className="empty-content">
              Have a look into our Product Collections{" "}
            </span>
            <Link to="/products" className="btn-logout">
              Start Shopping
            </Link>
          </div>
        )}

        {/* <h4 className="cart-summary-heading">
          <div className="horizontal-rule"></div>
          Items in your Cart:
        </h4> */}
      </main>
    </div>
  );
};

export default Cart;
