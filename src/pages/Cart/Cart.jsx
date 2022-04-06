import React, { useEffect } from "react";
import "./Cart.css";
import { useData, useAuth } from "../../contexts";
import Cartcard from "../../components/CartCard/Cartcard";
import { useLocation, useNavigate } from "react-router-dom";
import NoItem from "../../components/NoItem/NoItem";
import Path from "../../components/Path/Path";

const Cart = () => {
  const { state, setLoader } = useData();
  const { token } = useAuth();
  const CartList = [...state.cart];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
      return null;
    } else {
      setLoader(true);
      var id = setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
    return () => {
      clearTimeout(id);
    };
  }, []);

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
      <div className="cart-wish-path">
        <Path path={location.pathname} />
      </div>
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
          <NoItem
            imageUrl={
              "https://res.cloudinary.com/ajain8479/image/upload/v1648041156/E-com%20Images/empty-cart_j45eue.svg"
            }
            textContent={"Have a look into our Product Collections"}
            isButtonVisible={true}
            buttonContent={"Start Shopping"}
          />
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
