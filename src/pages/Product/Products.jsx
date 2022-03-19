import React from "react";
import "./Products.css";
import Navbar from "../../components/NavBar/Navbar";
import Sidenav from "../../components/SideNav/Sidenav";
import product from "../../assets/images/product.webp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="products-outer-container">
        <Sidenav />
        <section className="product-menu">
          <span className="product-counter">
            Showing All products (20 products)
          </span>
          <a>
            <div className="card ecom-card">
              <img src={product} alt="Product Image" />

              <p className="badge-item">New Arrival</p>

              <p className="heart-icon-container">
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              </p>

              <p className="manufacturer">Demo Product</p>

              <p className="item-name">Demo Product Desc.</p>

              <p className="price">
                Rs. 449
                <span className="mrp">Rs. 899</span>
                <span className="discount">(49% off)</span>
              </p>

              <div className="btn-action-container">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </a>

          <a>
            <div className="card ecom-card">
              <img src={product} alt="Product Image" />

              <p className="badge-item">New Arrival</p>

              <p className="heart-icon-container">
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              </p>

              <p className="manufacturer">Demo Product</p>

              <p className="item-name">Demo Product Desc.</p>

              <p className="price">
                Rs. 449
                <span className="mrp">Rs. 899</span>
                <span className="discount">(49% off)</span>
              </p>

              <div className="btn-action-container">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </a>
          <a>
            <div className="card ecom-card">
              <img src={product} alt="Product Image" />

              <p className="badge-item">New Arrival</p>

              <p className="heart-icon-container">
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              </p>

              <p className="manufacturer">Demo Product</p>

              <p className="item-name">Demo Product Desc.</p>

              <p className="price">
                Rs. 449
                <span className="mrp">Rs. 899</span>
                <span className="discount">(49% off)</span>
              </p>

              <div className="btn-action-container">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </a>
          <a>
            <div className="card ecom-card">
              <img src={product} alt="Product Image" />

              <p className="badge-item">New Arrival</p>

              <p className="heart-icon-container">
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              </p>

              <p className="manufacturer">Demo Product</p>

              <p className="item-name">Demo Product Desc.</p>

              <p className="price">
                Rs. 449
                <span className="mrp">Rs. 899</span>
                <span className="discount">(49% off)</span>
              </p>

              <div className="btn-action-container">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </a>
          <a>
            <div className="card ecom-card">
              <img src={product} alt="Product Image" />

              <p className="badge-item">New Arrival</p>

              <p className="heart-icon-container">
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              </p>

              <p className="manufacturer">Demo Product</p>

              <p className="item-name">Demo Product Desc.</p>

              <p className="price">
                Rs. 449
                <span className="mrp">Rs. 899</span>
                <span className="discount">(49% off)</span>
              </p>

              <div className="btn-action-container">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </a>
          <a>
            <div className="card ecom-card">
              <img src={product} alt="Product Image" />

              <p className="badge-item">New Arrival</p>

              <p className="heart-icon-container">
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              </p>

              <p className="manufacturer">Demo Product</p>

              <p className="item-name">Demo Product Desc.</p>

              <p className="price">
                Rs. 449
                <span className="mrp">Rs. 899</span>
                <span className="discount">(49% off)</span>
              </p>

              <div className="btn-action-container">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </a>
          <a>
            <div className="card ecom-card">
              <img src={product} alt="Product Image" />

              <p className="badge-item">New Arrival</p>

              <p className="heart-icon-container">
                <FavoriteBorderOutlinedIcon className="heart-icon" />
              </p>

              <p className="manufacturer">Demo Product</p>

              <p className="item-name">Demo Product Desc.</p>

              <p className="price">
                Rs. 449
                <span className="mrp">Rs. 899</span>
                <span className="discount">(49% off)</span>
              </p>

              <div className="btn-action-container">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Products;
