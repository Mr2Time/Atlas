import React, { useState, useEffect } from "react";
import "./Feed.scss";
import Share from "./../Share/Share";
import Post from "./../Post/Post";
import Axios from "axios";
import axios from "axios";

const Feed = () => {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/619887970f775702d8e36270");
      setPosts(res.data)
    };
    fetchPosts()
  }, []);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
