import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import Login from "./Components/Pages/Login/Login";
import Profile from "./Components/Pages/Profile/Profile";
import Register from "./Components/Pages/Register/Register";
import Home from "./Components/Pages/Home/Home";
import "./App.scss";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Register />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
