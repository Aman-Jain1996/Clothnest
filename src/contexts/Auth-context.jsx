import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginService,
  ResetPasswordService,
  SignUpService,
} from "../services/apiCall";
import { ToastHandler } from "../utilities/toastUtils";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const browserStoredToken = JSON.parse(localStorage.getItem("userToken"));
  const browserStoredUser = JSON.parse(localStorage.getItem("userData"));
  const [activeUser, setActiveUser] = useState(browserStoredUser?.foundUser);
  const [token, setToken] = useState(browserStoredToken?.token);
  const navigate = useNavigate();

  const loginHandler = async (email, password, rememberMe, redirectionPath) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LoginService({ email, password });
      if (status === 200 || status === 201) {
        ToastHandler("success", "Logged in Successfully....");
        if (rememberMe) {
          localStorage.setItem(
            "userToken",
            JSON.stringify({ token: encodedToken })
          );
          localStorage.setItem("userData", JSON.stringify({ foundUser }));
        }
        setActiveUser(foundUser);
        setToken(encodedToken);
        navigate(redirectionPath, { replace: true });
      } else {
        throw new Error();
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404)
          ToastHandler("error", "You are not Registered!");
        else if (err.response.status === 401)
          ToastHandler("error", "Invalid Password");
      } else {
        ToastHandler("error", "Error Occured while Login");
      }
      console.error(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    ToastHandler("success", "Logged out successfully....");
    setToken();
    setActiveUser();
    navigate("/");
  };

  const signUpHandler = async (firstName, lastName, email, password) => {
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
      } else {
        throw new Error();
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 422)
          ToastHandler("error", "We already have an account with this Email");
      } else {
        ToastHandler("error", "Error while SignUp");
      }
      console.error(err);
    }
  };

  const resetPasswordHandler = async (email, password) => {
    try {
      const { status, data } = await ResetPasswordService({ email, password });

      if (status === 200 || status === 201) {
        ToastHandler("success", "Password reset Successful....");
        navigate("/login");
      } else {
        throw new Error();
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404)
          ToastHandler("error", "You are not Registered!");
        else if (err.response.status === 400)
          ToastHandler("error", "Admin Password can't be Changed");
      } else {
        ToastHandler("error", "Error while Password Reset");
      }
      console.error(err);
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
        resetPasswordHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
