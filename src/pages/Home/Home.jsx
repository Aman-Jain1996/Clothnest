import React, { useEffect } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const categoryClickHandler = (category) => {
    navigate("/products", { state: { category } });
  };

  const arrTrendClickHandler = (filter) => {
    navigate("/products", { state: { arrTrend: filter } });
  };

  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
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
          <article
            className="category-article"
            onClick={() => categoryClickHandler("Mens")}
          >
            <div className="category-overlay">Men</div>
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648041157/E-com%20Images/men_owedcn.webp"
              alt="Men's Fashion"
            />
          </article>
          <article
            className="category-article"
            onClick={() => categoryClickHandler("Women")}
          >
            <div className="category-overlay">Women</div>
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648041156/E-com%20Images/women_tx6z5y.webp"
              alt="Women's Fashion"
            />
          </article>
          <article
            className="category-article"
            onClick={() => categoryClickHandler("Kids")}
          >
            <div className="category-overlay">Kids</div>
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648041157/E-com%20Images/kids_hmcxmw.webp"
              alt="Kid's Fashion"
            />
          </article>
          <article
            className="category-article"
            onClick={() => categoryClickHandler("Summer")}
          >
            <div className="category-overlay">Summer Collections</div>
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648041157/E-com%20Images/summer_nmogwm.webp"
              alt="Summer Fashion"
            />
          </article>
          <article
            className="category-article"
            onClick={() => categoryClickHandler("Winter")}
          >
            <div className="category-overlay">Winter Collections</div>
            <img
              src="https://res.cloudinary.com/ajain8479/image/upload/v1648041156/E-com%20Images/winter_vgse7j.webp"
              alt="Winter Fashion"
            />
          </article>
        </div>
      </section>

      <section className="home-section-arrival">
        <h2 className="section-heading">Shop by New Arrivals / Trending</h2>

        <div className="arrivals">
          <article
            className="new-arrivals"
            onClick={() => arrTrendClickHandler("newArrival")}
          >
            <div className="arrival-image">
              <img
                src="https://res.cloudinary.com/ajain8479/image/upload/v1648041156/E-com%20Images/arrival_mqp8rn.webp"
                alt="New arrivals"
              />
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

          <article
            className="new-stocks"
            onClick={() => arrTrendClickHandler("trending")}
          >
            <div className="arrival-image">
              <img
                src="https://res.cloudinary.com/ajain8479/image/upload/v1648041157/E-com%20Images/trending_gpaqfg.webp"
                alt="Trending"
              />
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
  );
};
