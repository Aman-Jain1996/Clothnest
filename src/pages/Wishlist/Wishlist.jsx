import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Wishlist.css";
import productImage from "../../assets/images/product.webp";

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <h3 className="main-heading">My Wishlist</h3>
      <main className="wishlist-main">
        <section className="wishlist-product-menu">
          <div className="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p className="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p className="manufacturer">Demo Product</p>

            <p className="price">
              ₹ 449
              <span className="mrp">₹ 899</span>
              <span className="discount">(49% off)</span>
            </p>

            <div className="action-container">
              <button className="btn">Move to Cart</button>

              <button className="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>

          <div className="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p className="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p className="manufacturer">Demo Product</p>

            <p className="price">
              ₹ 449
              <span className="mrp">₹ 899</span>
              <span className="discount">(49% off)</span>
            </p>

            <div className="action-container">
              <button className="btn">Move to Cart</button>

              <button className="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
          <div className="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p className="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p className="manufacturer">Demo Product</p>

            <p className="price">
              ₹ 449
              <span className="mrp">₹ 899</span>
              <span className="discount">(49% off)</span>
            </p>

            <div className="action-container">
              <button className="btn">Move to Cart</button>

              <button className="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
          <div className="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p className="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p className="manufacturer">Demo Product</p>

            <p className="price">
              ₹ 449
              <span className="mrp">₹ 899</span>
              <span className="discount">(49% off)</span>
            </p>

            <div className="action-container">
              <button className="btn">Move to Cart</button>

              <button className="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
          <div className="card ecom-card">
            <img src={productImage} alt="Product Image" />

            <p className="wishlist-icon">
              <ion-icon name="heart"></ion-icon>
            </p>

            <p className="manufacturer">Demo Product</p>

            <p className="price">
              ₹ 449
              <span className="mrp">₹ 899</span>
              <span className="discount">(49% off)</span>
            </p>

            <div className="action-container">
              <button className="btn">Move to Cart</button>

              <button className="btn btn-tertiary">Remove from Wishlist</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wishlist;
