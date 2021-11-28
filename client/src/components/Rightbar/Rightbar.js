import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Online from "./../Online/Online";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import "./Rightbar.scss";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user: currentUser} = useContext(AuthContext)
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (e) {
        console.log(e);
      }
    };
    getFriends();
  }, [user]);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-image" src={`${PF}/gift.png`} alt="" />
          <span className="birthday-text">
            <b>Pola Foster</b> and 3 other friends have a birthday today.
          </span>
        </div>
        <img className="rightbar-ad" src={`${PF}/ad.png`} alt="" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friends-list">
          {user.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      {user.username !== currentUser.username && (
        <button className='follow-button'>
          <span><FontAwesomeIcon icon={faPlus}/></span> Follow
        </button> 
      )}
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="info-item">
            <span className="info-key">City: </span>
            <span className="info-value">{user.city}</span>
          </div>
          <div className="info-item">
            <span className="info-key">From: </span>
            <span className="info-value">{user.from}</span>
          </div>
          <div className="info-item">
            <span className="info-key">Relationship: </span>
            <span className="info-value">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbar-title">User Follows:</h4>
        <div className="rightbar-followings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbar-following">
                <img
                  className="rightbar-following-img"
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/default-photo.jpg"
                  }
                  alt=""
                />
                <span className="rightbar-following-name">
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
