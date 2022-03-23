import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services/apiCall";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const browserStoredToken = JSON.parse(localStorage.getItem("userToken"));
  const [activeUser, setActiveUser] = useState(null);
  const [token, setToken] = useState(browserStoredToken?.token);
  const navigate = useNavigate();

  const loginHandler = async (e, email, password) => {
    e.preventDefault();
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await LoginService({ email, password });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "userToken",
          JSON.stringify({ token: encodedToken })
        );
        setActiveUser(foundUser);
        setToken(encodedToken);
        navigate("/products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ token, loginHandler, activeUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
