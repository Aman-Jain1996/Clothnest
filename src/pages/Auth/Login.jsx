import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Auth.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <main className="auth-main">
        <div className="auth-container">
          <form className="login">
            <h2 className="page-heading">Login</h2>
            <div className="field">
              <label for="email">Email</label>
              <input
                required
                type="email"
                placeholder="user@email.com"
                name="email"
                id="email"
              />
            </div>

            <div className="field">
              <label for="password">Password</label>
              <div className="password-field">
                <input
                  required
                  type="password"
                  placeholder="*************"
                  name="password"
                  id="password"
                />
                <VisibilityOutlinedIcon className="on" />
                <VisibilityOffOutlinedIcon className="off" />
              </div>
            </div>

            <label for="remember">
              <input type="checkbox" name="remember" id="remember" />
              Remember Me
            </label>
            <button className="btn-auth">Login</button>
          </form>
          <p className="redirection">
            Don't have an account Yet?
            <Link to="/signup" className="signUp">
              SignUp!
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;