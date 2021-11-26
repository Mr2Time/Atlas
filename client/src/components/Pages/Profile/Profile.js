import React from "react";
import Navbar from "../../Navbar/Navbar";
import Rightbar from "../../Rightbar/Rightbar";
import Sidebar from "../../Sidebar/Sidebar";
import Feed from "../../Feed/Feed";
import "./Profile.scss";

const Profile = () => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <React.Fragment>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src={`${PF}/post/3.jpeg`}
                alt=""
              />
              <img
                className="profile-user-picture"
                src={`${PF}/person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profile-info">
              <h1 className="profile-info-name">Yasin Adan</h1>
              <span className="profile-info-desc">Hello 👋</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
