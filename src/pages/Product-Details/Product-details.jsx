import React from "react";
import "./Product-details.css";
import Navbar from "../../components/NavBar/Navbar";
import productImage from "../../assets/images/product.webp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <main className="product-details-main">
        <section className="product-details">
          <div>
            <img src={productImage} alt="product-image" />
            <p className="heart-icon-container">
              <FavoriteBorderOutlinedIcon className="heart-icon" />
            </p>
          </div>

          <div className="content">
            <p className="product-name">Product Name</p>
            <p className="product-reviews">4 reviews</p>
            <p className="product-price">₹ 500/-</p>
            <p className="horizontal-rule"></p>
            <div className="description">
              <p className="brand">
                <span>Brand :</span>
                Lorem
              </p>
              <p className="brand">
                <span>Availability :</span>
                In Stock
              </p>
              <p className="brand">
                <span>Description :</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quae omnis saepe doloribus repudiandae velit
                  explicabo, eos et itaque nisi
                </p>
              </p>
            </div>
            <div className="button-container">
              <a className="btn cart" href="">
                Add to Cart
              </a>
              <a className="btn wishlist" href="">
                Add to Wishlist
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
