import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Atlas</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Atlas.
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input type="Email" className="login-input" placeholder="Email" />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <button class="login-button">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="register-button">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
