import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faPhotoVideo, faTags, faMapMarkedAlt, faSmile} from "@fortawesome/free-solid-svg-icons";
import "./Share.scss";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img src={`${PF}/person/2.jpeg`}alt="" className='share-img' />
          <input
            type="text"
            className="share-input"
            placeholder="What's on your mind Safak?."
          />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
                <FontAwesomeIcon icon={faPhotoVideo} color='tomato' className="share-icon"/>
              <span className='share-option-text'>Photo or Video</span>
            </div>
            <div className="share-option">
                <FontAwesomeIcon icon={faTags} color='blue' className="share-icon"/>
              <span className='share-option-text'>Tag</span>
            </div>
            <div className="share-option">
                <FontAwesomeIcon icon={faMapMarkedAlt} color='green' className="share-icon"/>
              <span className='share-option-text'>Location</span>
            </div>
            <div className="share-option">
                <FontAwesomeIcon icon={faSmile} color='goldenrod' className="share-icon"/>
              <span className='share-option-text'>Feelings</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
