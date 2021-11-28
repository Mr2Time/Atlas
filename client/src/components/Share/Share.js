import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

import {
  faPhotoVideo,
  faTags,
  faMapMarkedAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import "./Share.scss";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const description = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/default-photo.jpg"
            }
            alt=""
            className="share-img"
          />
          <input
            type="text"
            className="share-input"
            placeholder={`What's on your mind ${user.username}?.`}
            ref={description}
          />
        </div>
        <hr className="share-hr" />
        <form className="share-bottom" onSubmit={handleSubmit}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <FontAwesomeIcon
                icon={faPhotoVideo}
                color="tomato"
                className="share-icon"
              />
              <span className="share-option-text">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share-option">
              <FontAwesomeIcon
                icon={faTags}
                color="blue"
                className="share-icon"
              />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                color="green"
                className="share-icon"
              />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <FontAwesomeIcon
                icon={faSmile}
                color="goldenrod"
                className="share-icon"
              />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-button" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
