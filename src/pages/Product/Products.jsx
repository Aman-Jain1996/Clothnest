import React from "react";
import "./Products.css";
import Navbar from "../../components/NavBar/Navbar";
import Sidenav from "../../components/SideNav/Sidenav";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/Data-context";
import Productcard from "../../components/ProductCard/Productcard";

const Products = () => {
  const { state, dispatch, loader, setLoader } = useData();
  const products = state.products;

  return (
    <div>
      <Navbar />
      <div className="products-outer-container">
        <Sidenav />
        <section className="product-menu">
          <span className="product-counter">
            Showing All products ({products ? products.length : 0} products)
          </span>
          {products.map((prod) => (
            <Productcard product={prod} key={prod.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Products;
