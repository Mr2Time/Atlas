import React, { useRef, useContext } from "react";
import { loginCall } from "../../Api";
import { tempLogin } from "../../Api";
import { AuthContext } from "./../../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const handleTempLogin = (e) => {
    e.preventDefault();
    loginCall({ email: "test@gmail.com", password: "123456" }, dispatch);
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
              minLength="6"
              ref={password}
              required
            />
            <button className="login-button">
              {isFetching ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                "Log In"
              )}
            </button>
            <button className="temp-login-button" onClick={handleTempLogin}>
              {isFetching ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                "Temporary Login"
              )}
            </button>
            <Link to="/register" className="register-link">
              <button className="register-button">Create An Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
