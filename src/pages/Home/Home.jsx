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
        <div class="main">
          <div class="text-overlay">
            A door towards your next Outfit.
            <div class="shop-btn">
              <a href="./components/products/products.html" class="button">
                <div class="btn-bg"></div>
                <div class="arrow">
                  <div class="arrowline arrowline-1"></div>
                  <div class="arrowline arrowline-2"></div>
                  <div class="arrowline arrowline-3"></div>
                </div>
                <span class="btn-text">Shop Now</span>
              </a>
            </div>
          </div>
        </div>

        <section>
          <h2 class="section-heading">Shop by Category</h2>

          <div class="categories">
            <article class="category-article">
              <div class="category-overlay">Men</div>
              <img src={men} alt="Men's Fashion" />
            </article>
            <article class="category-article">
              <div class="category-overlay">Women</div>
              <img src={women} alt="Women's Fashion" />
            </article>
            <article class="category-article">
              <div class="category-overlay">Kids</div>
              <img src={kids} alt="Kid's Fashion" />
            </article>
            <article class="category-article">
              <div class="category-overlay">Summer Collections</div>
              <img src={summer} alt="Summer Fashion" />
            </article>
            <article class="category-article">
              <div class="category-overlay">Winter Collections</div>
              <img src={winter} alt="Winter Fashion" />
            </article>
          </div>
        </section>

        <section>
          <h2 class="section-heading">Shop by New Arrivals / Trending</h2>

          <div class="arrivals">
            <article class="new-arrivals">
              <div class="arrival-image">
                <img src={arrival} alt="New arrivals" />
              </div>
              <div class="arrival-content">
                <h2 class="content-subheading">New Arrivals</h2>
                <div>
                  <h3 class="content-heading">Fresh in Stocks</h3>
                  <p class="content-para">
                    Stay updated with our latest arrivals in each caterory
                  </p>
                </div>
              </div>
            </article>

            <article class="new-stocks">
              <div class="arrival-image">
                <img src={trending} alt="Trending" />
              </div>
              <div class="arrival-content">
                <h2 class="content-subheading">Trending</h2>
                <div>
                  <h3 class="content-heading">Trending Brands </h3>
                  <p class="content-para">
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
