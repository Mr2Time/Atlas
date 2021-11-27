import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import "./Post.scss";

const Post = ({ post }) => {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="top-left">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture || PF + "person/default-photo.jpg"}
                alt=""
                className="post-profile-image"
              />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(user.createdAt)}</span>
          </div>
          <div className="top-right">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.description}</span>
          <img className="post-image" src={post.image} alt="" />
        </div>
        <div className="post-bottom">
          <div className="bottom-left">
            <img
              className="like-icon"
              src={`${PF}/like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="like-icon"
              src={`${PF}/heart.png`}
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
