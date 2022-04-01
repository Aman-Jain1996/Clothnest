import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import "./Auth.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Login = () => {
  return (
    <div>
      <Navbar />
      <main className="auth-main">
        <div class="auth-container">
          <form class="login">
            <h2 class="page-heading">Login</h2>
            <div class="field">
              <label for="email">Email</label>
              <input
                required
                type="email"
                placeholder="user@email.com"
                name="email"
                id="email"
              />
            </div>

            <div class="field">
              <label for="password">Password</label>
              <div class="password-field">
                <input
                  required
                  type="password"
                  placeholder="*************"
                  name="password"
                  id="password"
                />
                <VisibilityOutlinedIcon className="on" />
                <VisibilityOffOutlinedIcon class="off" />
              </div>
            </div>

            <label for="remember">
              <input type="checkbox" name="remember" id="remember" />
              Remember Me
            </label>
            <button class="btn-auth">Login</button>
          </form>
          <p class="redirection">
            Don't have an account Yet?
            <a class="signUp">SignUp!</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
