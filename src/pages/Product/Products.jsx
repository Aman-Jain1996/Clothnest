import React, { useEffect, useState } from "react";
import "./Products.css";
import Sidenav from "../../components/SideNav/Sidenav";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useData } from "../../contexts";
import Productcard from "../../components/ProductCard/Productcard";
import useFilterData from "../../customHooks/useFilterData";
import { actionTypes, filterActionType } from "../../reducers/actionTypes";
import NoItem from "../../components/NoItem/NoItem";
import Path from "../../components/Path/Path";
import Authmodal from "../../components/AuthModal/AuthModal";

const Products = ({ ref }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { state, dispatch, setLoader } = useData();
  let location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const products = useFilterData();

  useEffect(() => {
    setLoader(true);
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
    } else if (searchParams.get("search")) {
      dispatch({
        type: actionTypes.FILTER_CHANGE,
        payload: {
          filterType: filterActionType.SEARCH,
          filterValue: searchParams.get("search"),
        },
      });
    }

    const id = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => {
      dispatch({
        type: actionTypes.RESET_CHANGE,
      });
      clearTimeout(id);
    };
  }, [searchParams]);

  return (
    <div className="products-outer-container">
      {showAuthModal && (
        <Authmodal
          navigate={navigate}
          setShowAuthModal={setShowAuthModal}
          location={location.pathname}
        />
      )}
      <Sidenav ref={ref} />
      <section className="product-menu">
        <div className="page-path-heading">
          <Path path={location.pathname} />
          <span className="product-counter">
            Showing All products ({products ? products.length : 0} products)
          </span>
        </div>
        {products.length === 0 ? (
          <NoItem
            imageUrl={
              "https://res.cloudinary.com/ajain8479/image/upload/v1648042612/E-com%20Images/undraw_void_-3-ggu_wjbii6.svg"
            }
            textContent={"No product found for such filter"}
          />
        ) : (
          products.map((prod) => (
            <Productcard
              key={prod._id}
              setShowAuthModal={setShowAuthModal}
              product={prod}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default Products;
