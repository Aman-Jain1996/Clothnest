import React, { useEffect } from "react";
import "./Wishlist.css";
import { useData, useAuth } from "../../contexts";
import { useLocation, useNavigate } from "react-router-dom";
import Wishlistcard from "../../components/WishlistCard/Wishlistcard";
import NoItem from "../../components/NoItem/NoItem";
import Path from "../../components/Path/Path";

const Wishlist = () => {
  const { state, setLoader } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const wishList = state.products.filter((wish) => wish.wished);

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
      return null;
    } else {
      setLoader(true);
      var id = setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div>
      <div className="cart-wish-path">
        <Path path={location.pathname} />
      </div>
      <h3 className="main-heading">
        My Wishlist ({state.wishlist.length} items)
      </h3>

      {state.wishlist.length === 0 ? (
        <NoItem
          imageUrl={
            "https://res.cloudinary.com/ajain8479/image/upload/v1648041156/E-com%20Images/empty-wish_mh42hg.svg"
          }
          textContent={"Have a look into our Product Collections"}
          isButtonVisible={true}
          buttonContent={"Start Wishing"}
        />
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
