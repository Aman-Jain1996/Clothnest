import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Home.css";
import men from "../../assets/images/men.webp";
import women from "../../assets/images/women.webp";
import kids from "../../assets/images/kids.webp";
import summer from "../../assets/images/summer.webp";
import winter from "../../assets/images/winter.webp";
import arrival from "../../assets/images/arrival.webp";
import trending from "../../assets/images/trending.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="home-hero">
          <div className="home-hero-text-overlay">
            A door towards your next Outfit.
            <div className="home-hero-shop-btn">
              <Link to="/products" className="home-hero-button">
                <div className="btn-bg"></div>
                <div className="arrow">
                  <div className="arrowline arrowline-1"></div>
                  <div className="arrowline arrowline-2"></div>
                  <div className="arrowline arrowline-3"></div>
                </div>
                <span className="btn-text">Shop Now</span>
              </Link>
            </div>
          </div>
        </div>

        <section className="home-section-category">
          <h2 className="section-heading">Shop by Category</h2>

          <div className="categories">
            <article className="category-article">
              <div className="category-overlay">Men</div>
              <img src={men} alt="Men's Fashion" />
            </article>
            <article className="category-article">
              <div className="category-overlay">Women</div>
              <img src={women} alt="Women's Fashion" />
            </article>
            <article className="category-article">
              <div className="category-overlay">Kids</div>
              <img src={kids} alt="Kid's Fashion" />
            </article>
            <article className="category-article">
              <div className="category-overlay">Summer Collections</div>
              <img src={summer} alt="Summer Fashion" />
            </article>
            <article className="category-article">
              <div className="category-overlay">Winter Collections</div>
              <img src={winter} alt="Winter Fashion" />
            </article>
          </div>
        </section>

        <section className="home-section-arrival">
          <h2 className="section-heading">Shop by New Arrivals / Trending</h2>

          <div className="arrivals">
            <article className="new-arrivals">
              <div className="arrival-image">
                <img src={arrival} alt="New arrivals" />
              </div>
              <div className="arrival-content">
                <h2 className="content-subheading">New Arrivals</h2>
                <div>
                  <h3 className="content-heading">Fresh in Stocks</h3>
                  <p className="content-para">
                    Stay updated with our latest arrivals in each caterory
                  </p>
                </div>
              </div>
            </article>

            <article className="new-stocks">
              <div className="arrival-image">
                <img src={trending} alt="Trending" />
              </div>
              <div className="arrival-content">
                <h2 className="content-subheading">Trending</h2>
                <div>
                  <h3 className="content-heading">Trending Brands </h3>
                  <p className="content-para">
                    Follow the trend with the most bought products
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
