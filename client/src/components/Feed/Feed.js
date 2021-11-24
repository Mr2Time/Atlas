import React from "react";
import "./Feed.scss";
import Share from "./../Share/Share";
import Post from "./../Post/Post";
import { Posts } from "../../temp_data";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
