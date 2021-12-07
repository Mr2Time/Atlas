import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRss,
  faCommentAlt,
  faPlay,
  faUserFriends,
  faBookmark,
  faQuestion,
  faBriefcase,
  faCalendarAlt,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";
import { Users } from "./../../temp_data";
import CloseFriends from "../CloseFriends/CloseFriends";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-wrapper" style={{border: '1px solid red'}}>
        <ul className="sidebar-list">
          <li className="list-item">
            <FontAwesomeIcon icon={faRss} className="item-icon" />
            <span className="list-item-text">Feed</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faCommentAlt} className="item-icon" />
            <span className="list-item-text">Chat</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faPlay} className="item-icon" />
            <span className="list-item-text">Videos</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faUserFriends} className="item-icon" />
            <span className="list-item-text">Groups</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faBookmark} className="item-icon" />
            <span className="item-text">Bookmarks</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faQuestion} className="item-icon" />
            <span className="list-item-text">Questions</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faBriefcase} className="item-icon" />
            <span className="list-item-text">Jobs</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="item-icon" />
            <span className="list-item-text">Events</span>
          </li>
          <li className="list-item">
            <FontAwesomeIcon icon={faGraduationCap} className="item-icon" />
            <span className="list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show more</button>
        <hr className="sidebar-hr" />
        <ul className="friend-list">
          {Users.map((user) => {
            return <CloseFriends user={user} key={user.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;