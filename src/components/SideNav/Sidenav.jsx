import "./Sidenav.css";
import React from "react";

const Sidenav = () => {
  return (
    <div className="Sidenav">
      <section className="filter-menu">
        <div className="filter-header">
          <h3 className="filter-heading">Filters</h3>
          <span className="filter-clear">Clear</span>
        </div>

        <article className="filter-submenu">
          <h3 className="submenu-heading">Sort by</h3>
          <div className="submenu-content">
            <select>
              <option value="">Select</option>
              <option value="price-ascend">Price Low to High</option>
              <option value="price-descend">Price High to Low</option>
              <option value="rating-ascend">Rating Low to High</option>
              <option value="rating-descend">Rating High to Low</option>
            </select>
          </div>
        </article>

        <article className="filter-submenu">
          <h3 className="submenu-heading">
            <label for="range">Price Range</label>
          </h3>
          <div className="submenu-content price-range">
            <span className="min-price">50</span>
            <span className="mid-price">150</span>
            <span className="max-price">200</span>
            <input
              type="range"
              name="price"
              min="50"
              max="200"
              id="range"
              value="150"
            />
          </div>
        </article>

        <article className="filter-submenu">
          <h3 className="submenu-heading">Category</h3>
          <div className="submenu-content">
            <div className="field">
              <input type="checkbox" name="Mens" id="mens" />
              <label for="mens">Mens</label>
            </div>

            <div className="field">
              <input type="checkbox" name="Womens" id="womens" />
              <label for="womens">Womens</label>
            </div>

            <div className="field">
              <input type="checkbox" name="kids" id="kids" />
              <label for="kids">Kids</label>
            </div>
          </div>
        </article>

        <article className="filter-submenu">
          <h3 className="submenu-heading">Rating</h3>
          <div className="submenu-content">
            <div className="submenu-content">
              <div className="field">
                <input type="radio" name="Rating" id="4+" />
                <label for="4+">4+ Stars</label>
              </div>

              <div className="field">
                <input type="radio" name="Rating" id="3+" />
                <label for="3+">3+ Stars</label>
              </div>

              <div className="field">
                <input type="radio" name="Rating" id="2+" />
                <label for="2+">2+ Stars</label>
              </div>

              <div className="field">
                <input type="radio" name="Rating" id="1+" />
                <label for="1+">1+ Stars</label>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Sidenav;