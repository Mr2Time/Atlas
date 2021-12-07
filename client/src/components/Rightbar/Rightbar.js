import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Users } from "../../temp_data";
import Online from "./../Online/Online";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Rightbar.scss";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?._id)
  );

  // follow/unfollow doesn't get fetched properly
  // use different a method

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

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
        <h4 className="rightbar-title" style={{borderBottom: '1px solid red'}}>Online Friends</h4>
        <ul className="rightbar-friends-list">
          {Users.map((user) => {
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
          <button className="follow-button" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow"}
            <span>{" "}</span>
            <FontAwesomeIcon icon={followed ? faMinus : faPlus} />
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
              key={friend._id}
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
