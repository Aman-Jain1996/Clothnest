import "./Sidenav.css";
import React from "react";
import { useData } from "../../contexts";
import { actionTypes, filterActionType } from "../../reducers/actionTypes";

export const Sidenav = ({ pageChange }) => {
  const { state, dispatch } = useData();

  const maxValue = state.products.reduce(
    (acc, cur) => (acc > Number(cur.sell_price) ? acc : Number(cur.sell_price)),
    0
  );

  const clearFilterHandler = () => {
    dispatch({
      type: actionTypes.RESET_CHANGE,
    });
    pageChange({ selected: 0 });
  };

  const sortChangeHandler = (e) => {
    dispatch({
      type: actionTypes.FILTER_CHANGE,
      payload: {
        filterType: filterActionType.SORT_BY,
        filterValue: e.target.value,
      },
    });
    pageChange({ selected: 0 });
  };

  const ratingChangeHandler = (e) => {
    dispatch({
      type: actionTypes.FILTER_CHANGE,
      payload: {
        filterType: filterActionType.RATING,
        filterValue: e.target.value,
      },
    });
    pageChange({ selected: 0 });
  };

  const categoryChangeHandler = (e) => {
    dispatch({
      type: actionTypes.FILTER_CHANGE,
      payload: {
        filterType: filterActionType.CATEGORY,
        filterSubType: e.target.value,
        filterValue: !state.filters.categories[e.target.value],
      },
    });
    pageChange({ selected: 0 });
  };

  const priceRangeChangeHandler = (e) => {
    dispatch({
      type: actionTypes.FILTER_CHANGE,
      payload: {
        filterType: filterActionType.PRICE_RANGE,
        filterValue: e.target.value,
      },
    });
    pageChange({ selected: 0 });
  };

  return (
    <div className="Sidenav">
      <section className="filter-menu">
        <div className="filter-header">
          <h3 className="filter-heading">Filters</h3>
          <span className="filter-clear" onClick={clearFilterHandler}>
            Clear
          </span>
        </div>

        <article className="filter-submenu">
          <h3 className="submenu-heading">Sort by</h3>
          <div className="submenu-content">
            <select
              onChange={(e) => sortChangeHandler(e)}
              value={state.filters.sortBy}
            >
              <option value="">Select</option>
              <option value="priceAscend">Price Low to High</option>
              <option value="priceDescend">Price High to Low</option>
              <option value="ratingAscend">Rating Low to High</option>
              <option value="ratingDescend">Rating High to Low</option>
            </select>
          </div>
        </article>

        <article className="filter-submenu">
          <h3 className="submenu-heading">
            <label className="price-label" htmlFor="range">
              Price Range
            </label>
          </h3>
          <div className="submenu-content price-range">
            <span className="min-price">50</span>
            <span className="mid-price">{maxValue / 2}</span>
            <span className="max-price">{maxValue}</span>
            <input
              type="range"
              name="price"
              min="50"
              step="100"
              max={maxValue}
              id="range"
              value={state.filters.priceRange}
              onChange={priceRangeChangeHandler}
            />
          </div>
        </article>

        <article className="filter-submenu">
          <h3 className="submenu-heading">Category</h3>
          <div className="submenu-content">
            {Object.keys(state.filters.categories).map((cat) => {
              return (
                <div className="field" key={cat}>
                  <input
                    type="checkbox"
                    name={cat}
                    id={cat}
                    checked={state.filters.categories[cat]}
                    value={cat[0].toUpperCase() + cat.slice(1)}
                    onChange={(e) => categoryChangeHandler(e)}
                  />
                  <label htmlFor={cat}>
                    {cat[0].toUpperCase() + cat.slice(1)}
                  </label>
                </div>
              );
            })}
          </div>
        </article>

        <article className="filter-submenu">
          <h3 className="submenu-heading">Rating</h3>
          <div className="submenu-content">
            <div className="submenu-content">
              <div className="field">
                <input
                  type="radio"
                  name="Rating"
                  id="4+"
                  value="4"
                  checked={state.filters.rating === "4"}
                  onChange={(e) => ratingChangeHandler(e)}
                />
                <label htmlFor="4+">4 Stars &amp; above</label>
              </div>

              <div className="field">
                <input
                  type="radio"
                  name="Rating"
                  id="3+"
                  value="3"
                  checked={state.filters.rating === "3"}
                  onChange={(e) => ratingChangeHandler(e)}
                />
                <label htmlFor="3+">3 Stars &amp; above</label>
              </div>

              <div className="field">
                <input
                  type="radio"
                  name="Rating"
                  id="2+"
                  value="2"
                  checked={state.filters.rating === "2"}
                  onChange={(e) => ratingChangeHandler(e)}
                />
                <label htmlFor="2+">2 Stars &amp; above</label>
              </div>

              <div className="field">
                <input
                  type="radio"
                  name="Rating"
                  id="1+"
                  value="1"
                  checked={state.filters.rating === "1"}
                  onChange={(e) => ratingChangeHandler(e)}
                />
                <label htmlFor="1+">1 Stars &amp; above</label>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
