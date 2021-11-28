import React from "react";
import "./Rightbar.scss";
import { Users } from "../../temp_data";
import Online from "./../Online/Online";
const Rightbar = ({user}) => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


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
        <h4 className='rightbar-title'>
          User Information
        </h4>
        <div className='rightbar-info'>
          <div className='info-item'>
            <span className='info-key'>City: </span>
            <span className='info-value'>{user.city}</span>
          </div>
          <div className='info-item'>
            <span className='info-key'>From: </span>
            <span className='info-value'>{user.from}</span>
          </div>
          <div className='info-item'>
            <span className='info-key'>Relationship: </span>
            <span className='info-value'>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className='rightbar-title'>
          User Follows:
        </h4>
        <div className='rightbar-followings'>
          <div className='rightbar-following'>
            <img className='rightbar-following-img' src={`${PF}/person/1.jpeg`} alt="" />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img className='rightbar-following-img' src={`${PF}/person/2.jpeg`} alt="" />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img className='rightbar-following-img' src={`${PF}/person/3.jpeg`} alt="" />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img className='rightbar-following-img' src={`${PF}/person/4.jpeg`} alt="" />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img className='rightbar-following-img' src={`${PF}/person/5.jpeg`} alt="" />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img className='rightbar-following-img' src={`${PF}/person/6.jpeg`} alt="" />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
        </div>
      </>
    )
  }

    return (
      <div className="rightbar">
        <div className="rightbar-wrapper">
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    );
};

export default Rightbar;
