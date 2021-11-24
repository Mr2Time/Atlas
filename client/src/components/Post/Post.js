import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="top-left">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">Mo Fade</span>
            <span className="post-date">5 mins ago</span>
          </div>
          <div className="top-right">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">Delicious</span>
          <img className='post-image' src="./assets/post/2.jpeg" alt="" />
        </div>
        <div className="post-bottom">
          <div className="bottom-left">
            <img className="like-icon" src="./assets/like.png" alt="" />
            <img className="like-icon" src="./assets/heart.png" alt="" />
            <span className="like-counter">32 people liked it</span>
          </div>
          <div className="bottom-right">
            <span className="post-comment-text">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
