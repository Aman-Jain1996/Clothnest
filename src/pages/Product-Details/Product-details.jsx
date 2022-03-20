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
        <section class="product-details">
          <div>
            <img src={productImage} alt="product-image" />
            <p className="heart-icon-container">
              <FavoriteBorderOutlinedIcon className="heart-icon" />
            </p>
          </div>

          <div class="content">
            <p class="product-name">Product Name</p>
            <p class="product-reviews">4 reviews</p>
            <p class="product-price">₹ 500/-</p>
            <p class="horizontal-rule"></p>
            <div class="description">
              <p class="brand">
                <span>Brand :</span>
                Lorem
              </p>
              <p class="brand">
                <span>Availability :</span>
                In Stock
              </p>
              <p class="brand">
                <span>Description :</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus quae omnis saepe doloribus repudiandae velit
                  explicabo, eos et itaque nisi
                </p>
              </p>
            </div>
            <div class="button-container">
              <a class="btn cart" href="">
                Add to Cart
              </a>
              <a class="btn wishlist" href="">
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
