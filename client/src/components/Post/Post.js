import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Users } from "../../temp_data";
import "./Post.scss";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="top-left">
            <img
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="top-right">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-image" src={post.photo} alt="" />
        </div>
        <div className="post-bottom">
          <div className="bottom-left">
            <img
              className="like-icon"
              src="./assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="like-icon"
              src="./assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="like-counter">{like} people liked it</span>
          </div>
          <div className="bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
