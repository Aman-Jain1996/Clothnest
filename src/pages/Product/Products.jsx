import React, { useEffect } from "react";
import "./Products.css";
import Navbar from "../../components/NavBar/Navbar";
import Sidenav from "../../components/SideNav/Sidenav";
import { useLocation, useSearchParams } from "react-router-dom";
import { useData } from "../../contexts/Data-context";
import Productcard from "../../components/ProductCard/Productcard";
import useFilterData from "../../customHooks/useFilterData";
import { actionTypes, filterActionType } from "../../reducers/actionTypes";

const Products = () => {
  const { state, dispatch, loader, setLoader } = useData();
  let location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const products = useFilterData();

  useEffect(() => {
    if (location.state?.category) {
      setSearchParams({
        cat: location.state.category,
      });
    } else if (location.state?.arrTrend) {
      setSearchParams({
        arrTrend: location.state.arrTrend,
      });
    }

    if (searchParams.get("cat")) {
      dispatch({
        type: actionTypes.FILTER_CHANGE,
        payload: {
          filterType: filterActionType.CATEGORY,
          filterSubType: searchParams.get("cat"),
          filterValue: true,
        },
      });
    } else if (searchParams.get("arrTrend")) {
      dispatch({
        type: actionTypes.FILTER_CHANGE,
        payload: {
          filterType: filterActionType.ARR_TREND,
          filterValue: searchParams.get("arrTrend"),
        },
      });
    }

    return () => {
      dispatch({
        type: actionTypes.RESET_CHANGE,
      });
    };
  }, [searchParams, location]);

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
