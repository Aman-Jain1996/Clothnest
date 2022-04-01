import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Auth.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <main className="auth-main">
        <div className="auth-container">
          <form className="login signup-form">
            <h2 className="page-heading">SignUp</h2>
            <div className="field">
              <label for="name">Name</label>
              <input
                required
                type="text"
                placeholder="John Snow"
                name="name"
                id="name"
              />
            </div>
            <div className="field">
              <label for="email">Email Address</label>
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
                  placeholder="**************"
                  name="password"
                  id="password"
                />
                <VisibilityOutlinedIcon className="on" />
                <VisibilityOffOutlinedIcon className="off" />
              </div>
            </div>

            <label for="remember">
              <input type="checkbox" name="remember" id="remember" />I accept
              all Terms &amp; Conditions
            </label>
            <button className="btn-auth">SignUp</button>
          </form>
          <p className="redirection">
            Altready have an account
            <Link to="/login" className="signUp">
              Login!
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
