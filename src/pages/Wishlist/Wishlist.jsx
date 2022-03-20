import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Wishlist.css";
import productImage from "../../assets/images/product.webp";

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <h3 class="main-heading">My Wishlist</h3>
      <main className="wishlist-main">
        <section class="wishlist-product-menu">
          <div class="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p class="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p class="manufacturer">Demo Product</p>

            <p class="price">
              ₹ 449
              <span class="mrp">₹ 899</span>
              <span class="discount">(49% off)</span>
            </p>

            <div class="action-container">
              <button class="btn">Move to Cart</button>

              <button class="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>

          <div class="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p class="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p class="manufacturer">Demo Product</p>

            <p class="price">
              ₹ 449
              <span class="mrp">₹ 899</span>
              <span class="discount">(49% off)</span>
            </p>

            <div class="action-container">
              <button class="btn">Move to Cart</button>

              <button class="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
          <div class="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p class="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p class="manufacturer">Demo Product</p>

            <p class="price">
              ₹ 449
              <span class="mrp">₹ 899</span>
              <span class="discount">(49% off)</span>
            </p>

            <div class="action-container">
              <button class="btn">Move to Cart</button>

              <button class="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
          <div class="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p class="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p class="manufacturer">Demo Product</p>

            <p class="price">
              ₹ 449
              <span class="mrp">₹ 899</span>
              <span class="discount">(49% off)</span>
            </p>

            <div class="action-container">
              <button class="btn">Move to Cart</button>

              <button class="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
          <div class="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p class="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p class="manufacturer">Demo Product</p>

            <p class="price">
              ₹ 449
              <span class="mrp">₹ 899</span>
              <span class="discount">(49% off)</span>
            </p>

            <div class="action-container">
              <button class="btn">Move to Cart</button>

              <button class="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wishlist;
