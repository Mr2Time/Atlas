import React from "react";
import "./Register.scss";

const Register = () => {
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
            <input type="Username" className="login-input" placeholder="Email" />
            <input type="Email" className="login-input" placeholder="Email" />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password Again"
            />
            <button class="login-button">Sign Up</button>
            <button className="register-button">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
