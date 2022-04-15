import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducers/actionTypes";
import { LoginService, SignUpService } from "../services/apiCall";
import { ToastHandler } from "../utilities/toastUtils";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const browserStoredToken = JSON.parse(localStorage.getItem("userToken"));
  const [activeUser, setActiveUser] = useState();
  const [token, setToken] = useState(browserStoredToken?.token);
  const navigate = useNavigate();

  const loginHandler = async (e, email, password, redirectionPath) => {
    e.preventDefault();
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LoginService({ email, password });
      if (status === 200 || status === 201) {
        ToastHandler("success", "Logged in Successfully....");
        localStorage.setItem(
          "userToken",
          JSON.stringify({ token: encodedToken })
        );
        setActiveUser(foundUser);
        setToken(encodedToken);
        navigate(redirectionPath);
      }
    } catch (err) {
      ToastHandler("error", "Some error occured");
      console.error(err);
    }
  };

  const logoutHandler = (dispatch) => {
    localStorage.removeItem("userToken");
    ToastHandler("success", "Logged out successfully....");
    setToken();
    setActiveUser();
    navigate("/");
    dispatch({
      type: actionTypes.SET_CART,
      payload: { cart: [] },
    });

    dispatch({
      type: actionTypes.SET_WISHLIST,
      payload: { wishlist: [] },
    });
  };

  const signUpHandler = async (e, firstName, lastName, email, password) => {
    e.preventDefault();
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await SignUpService({ firstName, lastName, email, password });
      if (status === 200 || status === 201) {
        ToastHandler("success", "Signed up Successfully....");
        localStorage.setItem(
          "userToken",
          JSON.stringify({ token: encodedToken })
        );
        setActiveUser(createdUser);
        setToken(encodedToken);
        navigate("/products");
      }
    } catch (err) {
      ToastHandler("error", "Some error occured");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loginHandler,
        activeUser,
        setToken,
        logoutHandler,
        signUpHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
