import React, { useEffect, useState } from "react";
import "./Auth.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import { actionTypes } from "../../reducers/actionTypes";

export const Login = () => {
  const { token, loginHandler, activeUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [eye, setEye] = useState(true);
  const { dispatch } = useData();
  const location = useLocation();

  const redirectionPath = location.state?.path || "/";

  const eyeHandler = () => {
    setEye((eye) => !eye);
  };

  useEffect(() => {
    if (token) {
      dispatch({
        type: actionTypes.SET_CART,
        payload: { cart: activeUser?.cart },
      });

      dispatch({
        type: actionTypes.SET_WISHLIST,
        payload: { wishlist: activeUser?.wishlist },
      });

      dispatch({
        type: actionTypes.SET_ADDRESS,
        payload: { address: activeUser?.address },
      });
    }
  }, [token]);

  return (
    <main className="auth-main">
      <div className="auth-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(email, password, rememberMe, redirectionPath);
          }}
          className="login"
          method="POST"
        >
          <h2 className="page-heading">Login</h2>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              placeholder="user@email.com"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                required
                type={eye ? "password" : "text"}
                placeholder="*************"
                name="password"
                id="password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {eye ? (
                <VisibilityOutlinedIcon className="on" onClick={eyeHandler} />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="off"
                  onClick={eyeHandler}
                />
              )}
            </div>
          </div>

          <div className="remember-container">
            <label htmlFor="remember">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                onChange={() => setRememberMe((checked) => !checked)}
              />
              Remember Me
            </label>
            <Link className="resetLink signUp" to="/reset">
              Forgot Password ?
            </Link>
          </div>
          <button className="btn-auth" type="submit">
            Login
          </button>
        </form>
        <p className="redirection">
          Don't have an account Yet?
          <Link to="/signup" className="signUp">
            SignUp!
          </Link>
        </p>
        <p className="redirection">
          <Link
            to="/login"
            onClick={(e) => {
              e.preventDefault();
              loginHandler(
                "amanjain@gmail.com",
                "amanjain1234",
                true,
                redirectionPath
              );
            }}
            className="signUp guest-credentials"
          >
            Use guest credentials
          </Link>
        </p>
      </div>
    </main>
  );
};
