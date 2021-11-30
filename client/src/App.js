import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import "./App.scss";
import Messenger from "./Pages/Messenger/Messenger";

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
          <Route
            path="/messenger"
            element={!user ? <Navigate to="/" /> : <Messenger />}
          />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
