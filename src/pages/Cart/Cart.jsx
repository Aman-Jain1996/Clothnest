import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Cart.css";
import productImage from "../../assets/images/product1.webp";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <h3 class="main-heading">My Cart (2)</h3>
      <main className="cart-main">
        <section class="cart-section">
          <div class="product">
            <div class="product-img">
              <img src={productImage} alt="product image" />
            </div>
            <div class="product-content">
              <h4 class="product-name">Demo Product</h4>
              <div class="price">
                <p class="sell-price">₹ 449</p>
                <p class="cost-price">₹ 899</p>
              </div>
              <div class="discount">50% off</div>
              <div class="quantity">
                <label>Quantity:</label>
                <div class="quantity-container">
                  <div class="plus">+</div>
                  <div class="qty">1</div>
                  <div class="minus">-</div>
                </div>
              </div>
              <div class="btn-container">
                <button class="btn">Remove from Cart</button>
                <button class="btn btn-tertiary">Add to Wishlist</button>
              </div>
            </div>
          </div>

          <div class="product">
            <div class="product-img">
              <img src={productImage} alt="product image" />
            </div>
            <div class="product-content">
              <h4 class="product-name">Demo Product 2</h4>
              <div class="price">
                <p class="sell-price">₹ 449</p>
                <p class="cost-price">₹ 899</p>
              </div>
              <div class="discount">50% off</div>
              <div class="quantity">
                <label>Quantity:</label>
                <div class="quantity-container">
                  <div class="plus">+</div>
                  <div class="qty">1</div>
                  <div class="minus">-</div>
                </div>
              </div>
              <div class="btn-container">
                <button class="btn">Remove from Cart</button>
                <button class="btn btn-tertiary">Add to Wishlist</button>
              </div>
            </div>
          </div>
        </section>

        <aside class="cart-summary">
          <h3 class="summary-heading">Cart Summary</h3>

          <div class="horizontal-rule"></div>
          <div class="pricing-details">
            <div class="summary-items">
              <label for="">Price (2 items)</label>
              <p>₹ 1798</p>
            </div>
            <div class="summary-items">
              <label for="">Total Discount</label>
              <p>- ₹ 899</p>
            </div>
            <div class="summary-items">
              <label for="">Delivery Charges</label>
              <p>+ ₹ 499</p>
            </div>
          </div>

          <div class="horizontal-rule"></div>

          <div class="final-amount">
            <div class="summary-items">
              <label for="">Total Amount</label>
              <p>₹ 1398</p>
            </div>

            <p class="savings">
              {" "}
              Congrats ! You have saved ₹ 899 on this order{" "}
            </p>
          </div>

          <div class="horizontal-rule"></div>

          <button class="btn btn-primary">Place Order</button>
        </aside>

        <h4 class="cart-summary-heading">
          <div class="horizontal-rule"></div>
          Items in your Cart:
        </h4>
      </main>
    </div>
  );
};

export default Cart;
