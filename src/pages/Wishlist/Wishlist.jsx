import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Wishlist.css";
import emptyImage from "../../assets/images/empty-wish.svg";
import { useData } from "../../contexts/Data-context";
import { Link, useNavigate } from "react-router-dom";
import Wishlistcard from "../../components/WishlistCard/Wishlistcard";
import { useAuth } from "../../contexts/Auth-context";

const Wishlist = () => {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const wishList = state.products.filter((wish) => wish.wished);

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
      return null;
    }
  }, [token]);

  return (
    <div>
      <Navbar />
      <h3 className="main-heading">
        My Wishlist ({state.wishlist.length} items)
      </h3>

      {state.wishlist.length === 0 ? (
        <div className="no-item">
          <img className="empty-image" alt="empty wishlist" src={emptyImage} />
          <span className="empty-content">
            Have a look into our Product Collections{" "}
          </span>
          <Link to="/products" className="btn-logout">
            Start Wishing
          </Link>
        </div>
      ) : (
        <main className="wishlist-main">
          <section className="wishlist-product-menu">
            {wishList.map((item) => (
              <Wishlistcard key={item._id} wishItem={item} />
            ))}
          </section>
        </main>
      )}
    </div>
  );
};

export default Wishlist;
