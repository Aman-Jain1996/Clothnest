import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Cart.css";
import productImage from "../../assets/images/product1.webp";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <h3 className="main-heading">My Cart (2)</h3>
      <main className="cart-main">
        <section className="cart-section">
          <div className="product">
            <div className="product-img">
              <img src={productImage} alt="product image" />
            </div>
            <div className="product-content">
              <h4 className="product-name">Demo Product</h4>
              <div className="price">
                <p className="sell-price">₹ 449</p>
                <p className="cost-price">₹ 899</p>
              </div>
              <div className="discount">50% off</div>
              <div className="quantity">
                <label>Quantity:</label>
                <div className="quantity-container">
                  <div className="plus">+</div>
                  <div className="qty">1</div>
                  <div className="minus">-</div>
                </div>
              </div>
              <div className="btn-container">
                <button className="btn">Remove from Cart</button>
                <button className="btn btn-tertiary">Add to Wishlist</button>
              </div>
            </div>
          </div>

          <div className="product">
            <div className="product-img">
              <img src={productImage} alt="product image" />
            </div>
            <div className="product-content">
              <h4 className="product-name">Demo Product 2</h4>
              <div className="price">
                <p className="sell-price">₹ 449</p>
                <p className="cost-price">₹ 899</p>
              </div>
              <div className="discount">50% off</div>
              <div className="quantity">
                <label>Quantity:</label>
                <div className="quantity-container">
                  <div className="plus">+</div>
                  <div className="qty">1</div>
                  <div className="minus">-</div>
                </div>
              </div>
              <div className="btn-container">
                <button className="btn">Remove from Cart</button>
                <button className="btn btn-tertiary">Add to Wishlist</button>
              </div>
            </div>
          </div>
        </section>

        <aside className="cart-summary">
          <h3 className="summary-heading">Cart Summary</h3>

          <div className="horizontal-rule"></div>
          <div className="pricing-details">
            <div className="summary-items">
              <label htmlFor="">Price (2 items)</label>
              <p>₹ 1798</p>
            </div>
            <div className="summary-items">
              <label htmlFor="">Total Discount</label>
              <p>- ₹ 899</p>
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
              <p>₹ 1398</p>
            </div>

            <p className="savings">
              {" "}
              Congrats ! You have saved ₹ 899 on this order{" "}
            </p>
          </div>

          <div className="horizontal-rule"></div>

          <button className="btn btn-primary">Place Order</button>
        </aside>

        <h4 className="cart-summary-heading">
          <div className="horizontal-rule"></div>
          Items in your Cart:
        </h4>
      </main>
    </div>
  );
};

export default Cart;
