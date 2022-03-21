import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Auth.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth-context";
import { actionTypes } from "../../reducers/actionTypes";
import { useData } from "../../contexts/Data-context";

const Login = () => {
  const { token, loginHandler, activeUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);
  const { dispatch } = useData();

  const eyeHandler = () => {
    console.log("eye");
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
    }
  }, [token]);

  return (
    <div>
      <Navbar />
      <main className="auth-main">
        <div className="auth-container">
          <form
            onSubmit={(e) => loginHandler(e, email, password)}
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

            <label htmlFor="remember">
              <input type="checkbox" name="remember" id="remember" />
              Remember Me
            </label>
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
              onClick={() => {
                setEmail("adarshbalika@gmail.com");
                setPassword("adarshbalika");
              }}
              className="signUp guest-credentials"
            >
              Use guest credentials
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
