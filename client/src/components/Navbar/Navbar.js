import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserAlt,
  faCommentAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  return (
    <div className="container">
      <div className="navLeft">
        <Link to='/' style={{textDecoration: 'none'}}>
          <span className="logo">Atlas</span>
        </Link>
      </div>
      <div className="navCenter">
        <div className="searchBar">
          <FontAwesomeIcon icon={faSearch} className='icon' />
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
        <img src="../assets/person/1.jpeg" alt="" className='navImg'/>
      </div>
    </div>
  );
}

export default Navbar;
