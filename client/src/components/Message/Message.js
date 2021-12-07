import {format} from 'timeago.js'
import "./Message.scss";

const Message = ({message,own, user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img
          className="message-img"
          src={own && user.profilePicture ? PF + user.profilePicture : PF+ "person/default-photo.jpg" }
          alt=""
        />
        <p className="message-text">{message.text}</p>
      </div>
      <div className="message-bottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
