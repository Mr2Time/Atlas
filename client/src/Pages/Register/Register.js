import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordConfirmation.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        Navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(username, email, password, passwordConfirmation)
  };
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
          <form className="login-box" onSubmit={handleSubmit}>
            <input
              type="text"
              className="login-input"
              placeholder="Username"
              ref={username}
              required
            />
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              ref={password}
              required
              minLength="6"
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password Again"
              ref={passwordConfirmation}
              required
              minLength="6"
            />
            <button class="login-button" type="submit">
              Sign Up
            </button>
            <button className="register-button">Login into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
