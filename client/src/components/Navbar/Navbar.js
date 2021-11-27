import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserAlt,
  faCommentAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../Context/AuthContext";
import "./Navbar.scss";

function Navbar() {
  const user = useContext(AuthContext);
  console.log(user)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="container">
      <div className="navLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Atlas</span>
        </Link>
      </div>
      <div className="navCenter">
        <div className="searchBar">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input
            type="text"
            placeholder="Search for friends, posts or videos!"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navRight">
        <div className="navLinks">
          <span className="navLink">Homepage</span>
          <span className="navLink">Timeline</span>
        </div>
        <div className="navIcons">
          <div className="navIcon">
            <FontAwesomeIcon icon={faUserAlt} />
            <span className="navIconBadge">1</span>
          </div>
          <div className="navIcon">
            <FontAwesomeIcon icon={faCommentAlt} />
            <span className="navIconBadge">3</span>
          </div>
          <div className="navIcon">
            <FontAwesomeIcon icon={faBell} />
            <span className="navIconBadge">2</span>
          </div>
        </div>
        <Link to={`/profile/${user.user.username}`}>
          <img src={user.profilePicture ? PF + user.profilePicture : PF + "/person/default-photo.jpg"} alt="" className="navImg" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
